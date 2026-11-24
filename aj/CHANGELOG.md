# AJ Changelog

All notable changes to AJ legal documents are listed here.

Documents are versioned independently using git tags:

| Tag pattern | Document |
|-------------|----------|
| `aj-terms-{year}.{revision}` | [terms.md](terms.md) |

AJ's privacy notice and subprocessors are §2.5 and §5.4 of the company-wide Privacy Policy:
[CHANGELOG.md](../CHANGELOG.md) (`privacy-`).

### View a tagged version

```bash
git fetch --tags
git show aj-terms-2026.1:aj/terms.md
```

On GitHub: `https://github.com/kaperkunde/legal/releases/tag/<tag-name>`

When publishing a new version, commit the change, create the tag, push both, and add an entry
below. AJ reads the documents from `@kaperkunde/legal-docs`, which every push to `main`
publishes, so a published change reaches the site when AJ's dependency on it moves.

---

## [aj-terms-2026.2] — 2026-11-24

To be tagged on the merge commit of this change.

**Effective date:** 24 November 2026

- §7: unused bought tokens can now be refunded, in full or in part, within 90 days of the purchase
  (was: on request within 14 days), on the tokens page where it offers a refund button or by
  asking support@kaperkun.de
- §7: the refund goes back to the payment method that paid, and is the share of what you paid,
  VAT included, that matches the unused tokens from that purchase, rounded down to the cent;
  tokens are spent from the oldest purchase first; free tokens are not refundable
- §7: unchanged: unused bought tokens are refunded if AJ shuts down
- This change only favours users: a longer window, partial refunds and a self-service route, so
  no notice period applies and it takes effect at once

---

## [aj-terms-2026.1] — 2026-11-23

Tagged on the merge commit of PR #6 (83ced67), together with `privacy-2026.12`; the package published
before the tags existed is republished so its manifest names them.

**Effective date:** 23 November 2026

- Initial AJ Terms of Use, for the alpha
- §1 says the DJ is an AI and its voice synthetic (AI Act, Article 50)
- §4 says the music is the host's music service's, under Apple's and YouTube's terms, for
  private parties only; links the YouTube Terms of Service and Google Privacy Policy as the
  YouTube API Services Terms require; names the music databases the DJ looks songs up in, and
  that lyrics are read by the DJ and never shown
- §5 and §6 are the conduct rules for hosts and guests and how reports are handled, with a point
  of contact for authorities (Digital Services Act)
- §7 says what AJ tokens are, and that unused bought tokens are refunded on request within 14
  days of purchase
- Published rather than gated: creating an account accepts them for a host, joining a party for
  a guest
