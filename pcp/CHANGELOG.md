# PCP Changelog

All notable changes to PCP legal documents are listed here.

Documents are versioned independently using git tags:

| Tag pattern | Document |
|-------------|----------|
| `pcp-privacy-{year}.{revision}` | [privacy.md](privacy.md) |
| `pcp-terms-{year}.{revision}` | [terms.md](terms.md) |

Company-wide documents: [CHANGELOG.md](../CHANGELOG.md) (`privacy-`).

### View a tagged version

```bash
git fetch --tags
git show pcp-privacy-2026.1:pcp/privacy.md
```

On GitHub: `https://github.com/kaperkunde/legal/releases/tag/<tag-name>`

When publishing a new version, commit the change, create the tag, push both, and add an entry
below. PCP does not pin this repository as a submodule: its footer links to this folder on
`main`, so a published change is live as soon as it is pushed.

---

## [pcp-privacy-2026.2] — 2026-10-06

**Effective date:** 6 October 2026

- "What Kaperkunde holds": named [pcp.gg](https://pcp.gg) as the one connection to a Kaperkunde
  service, made only once the operator pastes a pcp.gg connection key, and pointed at the
  [pcp.gg Privacy Notice](../pcpgg/privacy.md) for what it holds

---

## [pcp-privacy-2026.1] — 2026-09-30

**Effective date:** 30 September 2026

- Initial PCP Privacy Notice, written for PCP as open-source, self-hosted software
- States that Kaperkunde holds nothing through PCP: no account, telemetry, update check or
  analytics, and that the only data Kaperkunde receives is what a person sends it themselves
- Names the one thing outside PCP's own code: Next.js's anonymous telemetry, which reports to
  Vercel rather than Kaperkunde, is turned off in the Docker image and is the operator's choice
  elsewhere
- Lists what an instance keeps on its own disk (the vault, encrypted secrets, servers and their
  tools, hashed API tokens, sessions, and a request log without arguments or results), for an
  operator to build a notice of their own on
- Records that the operator of an instance is its controller and Kaperkunde is not, that the
  servers and assistant an operator connects are not Kaperkunde subprocessors, and that PCP has
  no subprocessors
- Defers to the company-wide [Privacy Policy](../privacy.md) for anything Kaperkunde itself holds

---

## [pcp-terms-2026.1] — 2026-09-30

**Effective date:** 30 September 2026

- Initial PCP Terms of Use
- §2 makes whoever runs an instance its operator, running it at their own risk, and answerable
  for any data that passes through it; Kaperkunde is not a party to that and has no access
- §4 restates the MIT warranty disclaimer and limit of liability in plain words, with the
  licence controlling if the two differ
- §5 allows saying an instance runs PCP and asks that a copy is not presented as operated,
  hosted or endorsed by Kaperkunde
- Published rather than gated: there is no account and no acceptance step
