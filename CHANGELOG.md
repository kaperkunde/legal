# Changelog

All notable changes to Kaperkunde legal documents in this repository are listed here.

Documents are versioned independently using git tags:

| Tag pattern | Document |
|-------------|----------|
| `privacy-{year}.{revision}` | [privacy.md](privacy.md) |

Hosting-specific documents are listed in [hosting/CHANGELOG.md](hosting/CHANGELOG.md) (`hosting-tos-`, `hosting-aup-`, `hosting-subprocessors-`).

### View a tagged version

```bash
git fetch --tags
git show privacy-2026.2:privacy.md
```

On GitHub: `https://github.com/kaperkunde/legal/releases/tag/<tag-name>`

When publishing a new version, commit the change, create the tag, push both, and add an entry below.

---

## [privacy-2026.4] — 2026-06-26

**Effective date:** 26 June 2026

- Added website analytics to the data processing table: page views, unique visitor counts based on a short-lived hashed IP, and approximate country derived from browser timezone. No raw IP addresses are stored; no cross-site tracking. Lawful basis: legitimate interests.

---

## [privacy-2026.3] — 2026-06-18

**Effective date:** 18 June 2026

- Added Porkbun as a subprocessor for DNS management of the `plek.je` platform domain; noted that customer-chosen subdomain names may constitute personal data under GDPR

---

## [privacy-2026.1] — 2026-06-12

**Effective date:** 12 June 2026

- Initial Privacy Policy

---

## [privacy-2026.2] — 2026-06-15

**Effective date:** 12 June 2026

- Updated hosting service references to plek.je trade name and website
