# Hosting Changelog

All notable changes to plek.je legal documents are listed here.

Documents are versioned independently using git tags:

| Tag pattern | Document |
|-------------|----------|
| `hosting-tos-{year}.{revision}` | [tos.md](tos.md) |
| `hosting-aup-{year}.{revision}` | [aup.md](aup.md) |
| `hosting-subprocessors-{year}.{revision}` | [subprocessors.md](subprocessors.md) |

Company-wide documents: [CHANGELOG.md](../CHANGELOG.md) (`privacy-`).

### View a tagged version

```bash
git fetch --tags
git show hosting-tos-2026.2:hosting/tos.md
git show hosting-aup-2026.2:hosting/aup.md
git show hosting-subprocessors-2026.2:hosting/subprocessors.md
```

On GitHub: `https://github.com/kaperkunde/legal/releases/tag/<tag-name>`

When publishing a new version, commit the change, create the tag, push both, and add an entry below.

---

## [hosting-tos-2026.3] — 2026-06-18

**Effective date:** 18 June 2026

- Section 12: documented managed email (Easy 10k) option where plek.je provisions a dedicated Mailgun sending domain on your behalf; clarified BYO Mailgun as the self-managed alternative; narrowed plek.je's liability scope to exclude deliverability, inbox placement, and third-party enforcement actions for both options

---

## [hosting-aup-2026.3] — 2026-06-18

**Effective date:** 18 June 2026

- Updated email section to cover both managed email (Easy 10k) and BYO Mailgun options; clarified that anti-spam, consent, and compliance obligations apply regardless of which option is used; noted that newsletter content responsibility stays with the operator

---

## [hosting-tos-2026.2] — 2026-06-15

**Effective date:** 12 June 2026

- Rebranded from Kaperkunde Hosting to plek.je trade name; added website and plek.je contact emails

---

## [hosting-aup-2026.2] — 2026-06-15

**Effective date:** 12 June 2026

- Rebranded to plek.je trade name; updated abuse contact email

---

## [hosting-subprocessors-2026.3] — 2026-06-18

**Effective date:** 18 June 2026

- Added Mailgun (Sinch) as a subprocessor for outbound email delivery for sites using the managed email (Easy 10k) option
- Added Porkbun as a subprocessor for DNS record management for `*.plek.je` platform subdomains
- Updated "services you set up yourself" note to reference BYO Mailgun instead of Mailgun generically

---

## [hosting-subprocessors-2026.2] — 2026-06-15

**Effective date:** 12 June 2026

- Rebranded to plek.je trade name

---

## [hosting-tos-2026.1] — 2026-06-12

**Effective date:** 12 June 2026

- Initial Terms of Service (including Data Processing Terms)

---

## [hosting-aup-2026.1] — 2026-06-12

**Effective date:** 12 June 2026

- Initial Acceptable Use Policy

---

## [hosting-subprocessors-2026.1] — 2026-06-12

**Effective date:** 12 June 2026

- Initial Subprocessor List
