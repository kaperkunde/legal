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

## [lorespawner-terms-2026.2] — 2026-11-24

Tagged on the merge commit of PR #9 (bb03155), together with the other tags of that PR; the package
published before the tags existed is republished so its manifest names them.

**Effective date:** 24 November 2026

- New §5, Tokens: the AI is paid for in tokens held by the Token Center, bought on the tokens
  page and paid through Stripe, which do not expire while Lore Spawner runs and have no cash
  value except as below; (later sections renumbered, §4 now says the alpha is free apart from
  tokens)
- Unused bought tokens can be refunded in full or in part within 90 days of the purchase, on
  the tokens page or by asking support@kaperkun.de, to the payment method that paid, as the share
  of what you paid (VAT included) that matches the unused tokens, rounded down to the cent;
  tokens are spent from the oldest purchase first; tokens not bought are not refundable; unused
  bought tokens are refunded if Lore Spawner shuts down
- Same token terms as AJ §7. This change only favours users: nothing is taken away, a refund
  right is added, so no notice period applies and it takes effect at once

---

## [lorespawner-privacy-2026.3] — 2026-11-24

**Effective date:** 24 November 2026

- Names Stripe, which takes payment when a player buys tokens, and says what is kept about a
  purchase (balance, and when, how much and how many tokens); "two processors" is now three.
  Only adds information; nothing a player could rely on is taken away

---

## [lorespawner-subprocessors-2026.3] — 2026-11-24

**Effective date:** 24 November 2026

- Added Stripe, for taking and returning payment for tokens, as in AJ's list

---

## [lorespawner-privacy-2026.2] — 2026-11-24

**Effective date:** 24 November 2026

- Corrected "one processor" and "none of your data leaves the EU": the AI at the fire is
  Anthropic's Claude, reached through Kaperkunde's Token Center, and what it is sent goes to the
  United States

---

## [lorespawner-subprocessors-2026.2] — 2026-11-24

**Effective date:** 24 November 2026

- Corrected the statement that no model provider is in use: Anthropic (Claude) is Lore
  Spawner's only model provider, named with what it receives, where it is processed and the
  safeguard used, as in AJ's entry; every call goes through Kaperkunde's own Token Center, which
  is not a subprocessor

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
- Names what the AI at the fire holds: the conversations a player has had with it about a world,
  and the ledger of what each call cost. Separates that AI from an assistant a player connects
  themselves over OAuth, since the two hold different things and reach different people

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
- Records the language model as a conditional subprocessor: off unless the campfire is given a
  model, no additional processor where Kaperkunde serves it, and named here before any
  third-party provider is turned on
