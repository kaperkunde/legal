# Changelog

All notable changes to Kaperkunde legal documents in this repository are listed here.

Documents are versioned independently using git tags:

| Tag pattern | Document |
|-------------|----------|
| `privacy-{year}.{revision}` | [privacy.md](privacy.md) |

Product-specific documents have changelogs of their own:
[hosting/CHANGELOG.md](hosting/CHANGELOG.md) (`hosting-tos-`, `hosting-aup-`, `hosting-subprocessors-`)
and [lorespawner/CHANGELOG.md](lorespawner/CHANGELOG.md) (`lorespawner-privacy-`, `lorespawner-terms-`, `lorespawner-subprocessors-`).

### View a tagged version

```bash
git fetch --tags
git show privacy-2026.2:privacy.md
```

On GitHub: `https://github.com/kaperkunde/legal/releases/tag/<tag-name>`

When publishing a new version, commit the change, create the tag, push both, and add an entry below.

---

## [privacy-2026.7] — 2026-09-21

**Effective date:** 21 September 2026

- Scope: named Lore Spawner alongside plek.je, and generalized "websites" to "websites and
  applications" throughout §2 and §8.1, so the Policy reads as the company-wide document it is
- §2.4 added: a table pointing at each product's own notice for processing particular to it
- §4: added giving personal data away to the list of things Kaperkunde does not do
- §4.1 added: the export principle stated as a company commitment — every product offers a full
  export of your own content and account data
- §5: noted that each product publishes its own subprocessor list, and linked both
- §8.1: stated that no consent banner is needed anywhere on our own properties, not only on the
  websites
- §9: pointed at a product's own export as the fastest route to a portable copy
- **§11 Children: the minimum age is now 16 everywhere**, down from 18, matching the age at
  which a person may consent to processing of their own data under the GDPR in the Netherlands.
  Added a clause recording that services involving a payment additionally require the legal
  capacity to contract, so lowering the data-protection floor does not imply a minor can sign a
  paid agreement
- §13: noted that a product's own notice states the retention periods particular to it

---

## [privacy-2026.6] — 2026-09-20

**Effective date:** 20 September 2026

- §3 Website analytics: the approximate country is derived from the visitor's IP address at the time of the request, not from the browser timezone — the timezone cookie that previously supplied it has been removed. Stated that the hashed IP changes every day, that no analytics cookies are used, and that the retention period is currently 14 months
- §8.1 Cookies: replaced the conditional wording with what is actually the case — only strictly necessary cookies are used, no analytics or advertising cookies, and therefore no consent banner

---

## [privacy-2026.5] — 2026-09-09

**Effective date:** 9 September 2026

- §6 International transfers: documented that plek.je hosting customers may select dedicated EU or US hosting infrastructure for each site; clarified that international-transfer safeguards apply when a customer selects US-based hosting, not only for subprocessor transfers

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
