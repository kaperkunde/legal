#!/usr/bin/env node
// Writes manifest.json, the record that ships beside the documents in the
// @kaperkunde/legal-docs package: the commit the package was made from and,
// for every document, its git blob SHA, the last commit that changed it, that
// commit's date, and its latest release tag.
//
//   node scripts/manifest.mjs           # write manifest.json
//   node scripts/manifest.mjs verify    # check what `npm pack` would ship
//
// The last commit that changed a document is what an app records acceptance
// against (plek.je does it for hosting/tos.md), so a correction to one
// document never makes anybody accept another again. It needs the whole
// history: run it in a full clone, never a shallow one.
//
// Plain Node, nothing to install.

import { execFileSync } from "node:child_process"
import { createHash } from "node:crypto"
import { readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const REPOSITORY = "kaperkunde/legal"
const FORMAT = 1

function git(...args) {
  return execFileSync("git", args, {
    cwd: root,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  }).trim()
}

function fail(message) {
  console.error(`manifest: ${message}`)
  process.exit(1)
}

/**
 * What ships: every markdown file at the root or one folder down, except the
 * changelogs. The folder READMEs ship too, because the documents link to them.
 * package.json's `files` says the same thing; `verify` holds the two together.
 */
function isDocument(path) {
  const parts = path.split("/")
  if (parts.length > 2 || !path.endsWith(".md")) return false
  if (parts.some((part) => part.startsWith("."))) return false
  return parts.at(-1) !== "CHANGELOG.md"
}

/** git's own blob hash, so it can be checked with `git hash-object`. */
function blobSha(bytes) {
  return createHash("sha1")
    .update(`blob ${bytes.length}\0`)
    .update(bytes)
    .digest("hex")
}

/** hosting/tos.md is tagged hosting-tos-{year}.{revision}; privacy.md, privacy-…. */
function tagPattern(path) {
  const prefix = path.replace(/\.md$/, "").replaceAll("/", "-")
  const escaped = prefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  return new RegExp(`^${escaped}-(\\d+)\\.(\\d+)$`)
}

function documents() {
  // What HEAD holds, not what the working tree happens to have.
  const tree = git("ls-tree", "-r", "-z", "HEAD")
    .split("\0")
    .filter(Boolean)
    .map((line) => {
      const [meta, path] = line.split("\t")
      const [, type, blob] = meta.split(" ")
      return { path, type, blob }
    })
    .filter(({ path, type }) => type === "blob" && isDocument(path))

  return tree.sort((a, b) => (a.path < b.path ? -1 : 1))
}

function tags() {
  const out = git(
    "for-each-ref",
    "refs/tags",
    "--format=%(refname:strip=2)%00%(objectname)%00%(*objectname)",
  )
  return out
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const [name, object, peeled] = line.split("\0")
      // An annotated tag names a tag object; the commit is the peeled one.
      return { name, commit: peeled || object }
    })
}

function blobAt(commit, path) {
  try {
    return execFileSync("git", ["rev-parse", "--verify", "-q", `${commit}:${path}`], {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim()
  } catch {
    return null
  }
}

function latestTag(path, allTags) {
  const pattern = tagPattern(path)
  let best = null

  for (const tag of allTags) {
    const match = tag.name.match(pattern)
    if (!match) continue
    const version = [Number(match[1]), Number(match[2])]
    if (
      !best ||
      version[0] > best.version[0] ||
      (version[0] === best.version[0] && version[1] > best.version[1])
    ) {
      best = { ...tag, version }
    }
  }

  return best
}

function generate() {
  if (git("rev-parse", "--is-shallow-repository") === "true") {
    fail(
      "this is a shallow clone, so the last commit to change a document cannot be " +
        "known. Fetch the whole history (actions/checkout with `fetch-depth: 0`).",
    )
  }

  const head = git("rev-parse", "HEAD")
  const headDate = git("log", "-1", "--format=%cI", "HEAD")
  const allTags = tags()
  const docs = {}

  for (const { path, blob } of documents()) {
    const bytes = readFileSync(join(root, path))
    if (blobSha(bytes) !== blob) {
      fail(`${path} differs from HEAD. Commit it first: the manifest names commits.`)
    }

    const [commit, date] = git("log", "-1", "--format=%H%x00%cI", "--", path).split("\0")
    if (!commit) fail(`no commit changes ${path}`)

    const tag = latestTag(path, allTags)

    docs[path] = {
      blob,
      commit,
      date,
      tag: tag
        ? {
            name: tag.name,
            commit: tag.commit,
            // Whether the document is still word for word what was tagged.
            current: blobAt(tag.commit, path) === blob,
          }
        : null,
    }
  }

  const manifest = {
    format: FORMAT,
    repository: REPOSITORY,
    commit: head,
    date: headDate,
    documents: docs,
  }

  writeFileSync(join(root, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`)
  console.log(
    `Wrote manifest.json: ${Object.keys(docs).length} documents at ${head}.`,
  )
}

/** What `npm pack` would ship has to be the manifest's documents and nothing else. */
function verify() {
  const manifest = JSON.parse(readFileSync(join(root, "manifest.json"), "utf8"))
  const packed = JSON.parse(
    execFileSync("npm", ["pack", "--dry-run", "--json", "--ignore-scripts"], {
      cwd: root,
      encoding: "utf8",
    }),
  )
  const shipped = new Set(packed[0].files.map((file) => file.path))
  const expected = new Set([
    "package.json",
    "manifest.json",
    ...Object.keys(manifest.documents),
  ])

  const missing = [...expected].filter((path) => !shipped.has(path))
  const extra = [...shipped].filter((path) => !expected.has(path))

  if (missing.length > 0 || extra.length > 0) {
    fail(
      [
        missing.length > 0 && `not packed: ${missing.join(", ")}`,
        extra.length > 0 && `packed but not in the manifest: ${extra.join(", ")}`,
      ]
        .filter(Boolean)
        .join("; ") + ". Bring package.json's `files` and isDocument() back together.",
    )
  }

  console.log(`npm pack ships manifest.json and the ${Object.keys(manifest.documents).length} documents.`)
}

const mode = process.argv[2]
if (mode === undefined) generate()
else if (mode === "verify") verify()
else fail("usage: node scripts/manifest.mjs [verify]")
