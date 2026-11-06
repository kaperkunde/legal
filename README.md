# Kaperkunde Legal

Public legal documentation for [Kaperkunde](https://kaperkun.de) products and services.

This repository is the source of truth for terms, privacy notices, and related policies. Documents are written in plain English, governed by Dutch law where stated, and updated with an effective date at the top of each file.

---

## Current documents

**Effective date: 6 October 2026**

| Document | Description |
|----------|-------------|
| [Privacy Policy](privacy.md) | How Kaperkunde handles personal data on its websites, for [plek.je](https://plek.je) hosting customers, and in its processor role for hosted sites |
| [Hosting documentation](hosting/README.md) | Terms of Service, Acceptable Use Policy, and Subprocessor List for [plek.je](https://plek.je) managed Ghost hosting |
| [Lore Spawner documentation](lorespawner/README.md) | Privacy Notice, Terms of Use, and Subprocessor List for the Lore Spawner collaborative storytelling app |
| [Study Guild documentation](studyguild/README.md) | Privacy Notice, Terms of Use, and Subprocessor List for the Study Guild shared flashcard community |
| [pcp.gg documentation](pcpgg/README.md) | Terms of Use, Privacy Notice, and Subprocessor List for [pcp.gg](https://pcp.gg), the bridge that gives an owner's own PCP a public name |
| [PCP documentation](pcp/README.md) | Terms of Use and Privacy Notice for PCP, the self-hosted MCP gateway Kaperkunde publishes as open source |

### Privacy Policy — table of contents

1. [Who this Policy covers](privacy.md#1-who-this-policy-covers)
2. [How we handle different kinds of data](privacy.md#2-how-we-handle-different-kinds-of-data)
3. [What we collect and why](privacy.md#3-what-we-collect-and-why)
4. [What we do not do](privacy.md#4-what-we-do-not-do)
5. [Subprocessors](privacy.md#5-subprocessors)
6. [International transfers](privacy.md#6-international-transfers)
7. [Security](privacy.md#7-security)
8. [Cookies and similar technologies](privacy.md#8-cookies-and-similar-technologies)
9. [Your rights](privacy.md#9-your-rights)
10. [Supervisory authority](privacy.md#10-supervisory-authority)
11. [Children](privacy.md#11-children)
12. [Marketing communications](privacy.md#12-marketing-communications)
13. [Data retention and deletion](privacy.md#13-data-retention-and-deletion)
14. [Business transfers](privacy.md#14-business-transfers)
15. [Changes to this Policy](privacy.md#15-changes-to-this-policy)
16. [Contact](privacy.md#16-contact)
17. [Online dispute resolution (consumers)](privacy.md#17-online-dispute-resolution-consumers)

### Hosting documents

| Document | Path |
|----------|------|
| Terms of Service | [hosting/tos.md](hosting/tos.md) |
| Acceptable Use Policy | [hosting/aup.md](hosting/aup.md) |
| Subprocessor List | [hosting/subprocessors.md](hosting/subprocessors.md) |

Full section index: [hosting/README.md](hosting/README.md)

### Lore Spawner documents

| Document | Path |
|----------|------|
| Privacy Notice | [lorespawner/privacy.md](lorespawner/privacy.md) |
| Terms of Use | [lorespawner/terms.md](lorespawner/terms.md) |
| Subprocessor List | [lorespawner/subprocessors.md](lorespawner/subprocessors.md) |

Full section index: [lorespawner/README.md](lorespawner/README.md)

### Study Guild documents

| Document | Path |
|----------|------|
| Privacy Notice | [studyguild/privacy.md](studyguild/privacy.md) |
| Terms of Use | [studyguild/terms.md](studyguild/terms.md) |
| Subprocessor List | [studyguild/subprocessors.md](studyguild/subprocessors.md) |

Full section index: [studyguild/README.md](studyguild/README.md)

### pcp.gg documents

| Document | Path |
|----------|------|
| Terms of Use | [pcpgg/terms.md](pcpgg/terms.md) |
| Privacy Notice | [pcpgg/privacy.md](pcpgg/privacy.md) |
| Subprocessor List | [pcpgg/subprocessors.md](pcpgg/subprocessors.md) |

Full section index: [pcpgg/README.md](pcpgg/README.md)

### PCP documents

| Document | Path |
|----------|------|
| Terms of Use | [pcp/terms.md](pcp/terms.md) |
| Privacy Notice | [pcp/privacy.md](pcp/privacy.md) |

Full section index: [pcp/README.md](pcp/README.md)

---

## How this repository is laid out

The root holds what is true of Kaperkunde as a whole: the [Privacy Policy](privacy.md), the
company identity and the contact addresses below. Each product has a folder of its own holding
only what is particular to it — what that product keeps, who it depends on, and its own terms.

A product's notice adds detail to the company-wide policy. It never takes away a right the
policy gives. Adding a product means copying the shape of an existing folder: a `README.md`
index, the documents themselves, and a `CHANGELOG.md` with its own tag prefix.

Software Kaperkunde publishes as open source but does not run, such as PCP, has a folder too. There
the documents say who is responsible when somebody else runs it, and have no subprocessor list,
because Kaperkunde processes nothing.

These principles hold across every Kaperkunde product, and are stated once in the Privacy Policy
rather than repeated in each folder:

- Nothing is sold, given away, rented, or handed to advertisers or AI training sets
  ([§4](privacy.md#4-what-we-do-not-do))
- Only strictly necessary cookies, so no consent banner is needed anywhere
  ([§8.1](privacy.md#81-kaperkunde-websites-and-applications))
- A full export of your own content and account data, from inside the product where it has one
  ([§4.1](privacy.md#41-what-we-do-instead))
- Sixteen is the minimum age ([§11](privacy.md#11-children))

---

## How the documents reach the products

Every push to `main` publishes the documents to npm as
[`@kaperkunde/legal-docs`](https://www.npmjs.com/package/@kaperkunde/legal-docs)
(`.github/workflows/publish.yml`). The version is `1.0.` followed by the number of commits on
`main`, so every change is a patch, and the products pick it up the way they pick up any other
dependency. The package holds the markdown exactly as it is here, at the same paths, and
`manifest.json` beside it, which `scripts/manifest.mjs` writes from the history:

- the commit the package was made from;
- for every document, its git blob SHA, the last commit that changed it and that commit's date,
  and its latest release tag, with whether the document is still word for word what was tagged.

The last commit that changed a document is what a product records acceptance against. plek.je
asks customers to accept its Terms of Service again only when `hosting/tos.md` itself changes,
never because the Privacy Policy or a subprocessor list was corrected.

The products read the package through `@kaperkunde/legal` (in
[kaperkunde/common-public](https://github.com/kaperkunde/common-public)), which renders the
markdown and checks at start-up that the documents served are the ones the manifest names.
Changing what a product says is a commit here; nothing in a product's own repository changes
the words.

The package is published as `UNLICENSED`: it is public so the products can install it without a
token, but the documents remain Kaperkunde's, and publishing them grants no right to reuse them.

The changelogs and the tooling are not in the package. Run `node scripts/manifest.mjs` in a
full clone to see the manifest a commit would publish.

---

## Contact

| Purpose | Email |
|---------|-------|
| Support | support@kaperkun.de |
| Abuse reports | abuse@kaperkun.de |
| Privacy / GDPR | privacy@kaperkun.de |
| Legal notices | legal@kaperkun.de |

**Kaperkunde** · KVK 42061326 · VAT NL005465494B06 · Prof. E.M. Meijerslaan 1, Amstelveen, The Netherlands

---

## Disclaimer

These documents are provided for transparency and customer reference. They are not legal advice. If you need advice on your own compliance obligations, consult a qualified professional.
