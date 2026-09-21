# Lore Spawner Changelog

All notable changes to Lore Spawner legal documents are listed here.

Documents are versioned independently using git tags:

| Tag pattern | Document |
|-------------|----------|
| `lorespawner-privacy-{year}.{revision}` | [privacy.md](privacy.md) |
| `lorespawner-terms-{year}.{revision}` | [terms.md](terms.md) |
| `lorespawner-subprocessors-{year}.{revision}` | [subprocessors.md](subprocessors.md) |

Company-wide documents: [CHANGELOG.md](../CHANGELOG.md) (`privacy-`).

### View a tagged version

```bash
git fetch --tags
git show lorespawner-privacy-2026.1:lorespawner/privacy.md
```

On GitHub: `https://github.com/kaperkunde/legal/releases/tag/<tag-name>`

When publishing a new version, commit the change, create the tag, push both, and add an entry
below. Lore Spawner pins this repository as a submodule, so a published change also needs the
submodule pointer bumped in the app before it reaches the site.

---

## [lorespawner-privacy-2026.1] — 2026-09-21

**Effective date:** 21 September 2026

- Initial Lore Spawner Privacy Notice, moved here from the hand-written page on the site
- States the controller's registered address and KVK number, which the page had carried as
  placeholders since it was written
- Retention periods stated for the first time: server logs 30 days; notifications for the life
  of the account; device records until forgotten or reported gone by the push service
- Defers to the company-wide [Privacy Policy](../privacy.md) for rights, the supervisory
  authority, transfers, security and the minimum age, rather than restating them

---

## [lorespawner-terms-2026.1] — 2026-09-21

**Effective date:** 21 September 2026

- Initial Lore Spawner Terms of Use, moved here from the hand-written page on the site
- Published rather than gated: there is no acceptance step, and signing up is what accepts them

---

## [lorespawner-subprocessors-2026.1] — 2026-09-21

**Effective date:** 21 September 2026

- Initial Lore Spawner Subprocessor List: Hetzner for the servers, and Google, Apple and Mozilla
  named as relays of ciphertext for browser push
- Records that an AI assistant a player connects themselves is not a Kaperkunde subprocessor
