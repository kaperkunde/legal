# pcp.gg Changelog

All notable changes to pcp.gg legal documents are listed here.

Documents are versioned independently using git tags:

| Tag pattern | Document |
|-------------|----------|
| `pcpgg-privacy-{year}.{revision}` | [privacy.md](privacy.md) |
| `pcpgg-terms-{year}.{revision}` | [terms.md](terms.md) |
| `pcpgg-subprocessors-{year}.{revision}` | [subprocessors.md](subprocessors.md) |

Company-wide documents: [CHANGELOG.md](../CHANGELOG.md) (`privacy-`).

### View a tagged version

```bash
git fetch --tags
git show pcpgg-privacy-2026.1:pcpgg/privacy.md
```

On GitHub: `https://github.com/kaperkunde/legal/releases/tag/<tag-name>`

When publishing a new version, commit the change, create the tag, push both, and add an entry
below. pcp.gg pins this repository as a submodule, so a published change also needs the
submodule pointer bumped in the app (`pnpm legal:sync` there) before it reaches the site.

---

## [pcpgg-privacy-2026.1] — 2026-10-06

**Effective date:** 6 October 2026

- Initial pcp.gg Privacy Notice, written for the invite-only alpha
- Leads with what pcp.gg cannot read: connections to an owner's name stay encrypted to the
  owner's PCP, the relay reads only the name asked for, and it holds no certificate or key for
  any owner's name
- Lists everything the service holds: the account, sign-in sessions with IP address and browser,
  the name and a hash of the connection key, whether the PCP is connected, waitlist entries,
  invites, apps allowed through the pcp.gg app, and the relay's log of connects and disconnects
  by internal number only
- States that neither the site nor the relay logs requests or connections, that rate limits are
  in memory only, and that the one cookie is the sign-in cookie
- Names Certificate Transparency logs as where an owner's name becomes public, and GitHub as
  where downloads come from
- Sets out what the pcp.gg app in Claude and ChatGPT changes, once it is available: pcp.gg reads
  app requests in passing to route them, keeps and logs none of them, and never stores the PCP
  token
- Retention table; one processor (Hetzner, Germany); export and deletion on request to
  privacy@kaperkun.de

---

## [pcpgg-terms-2026.1] — 2026-10-06

**Effective date:** 6 October 2026

- Initial pcp.gg Terms of Use, accepted by creating an account (no acceptance gate)
- Kept to what an intermediary service needs: the restrictions on use and the point of contact
  the Digital Services Act asks for, and the limit of liability Dutch law only allows in terms
  made available beforehand
- §3: a name is a permission to use a name under pcp.gg while the account lasts, not a domain;
  when a name may be taken back, and that a closed account's name may be given to somebody else
- §4: what runs behind a name is the owner's, as is the certificate their PCP gets from Let's
  Encrypt
- §5: pcp.gg is for reaching PCP: no phishing, malware, general-purpose proxying or attacks;
  good-faith security reports welcome
- §6: reports to abuse@kaperkun.de, acted on by name, key or account because content cannot be
  seen; reasons given; authorities' contact at legal@kaperkun.de in English or Dutch
- §7: the processing commitments for the pcp.gg app, the one place pcp.gg sees content
- §8–9: offered as it is, liability limited except for intent and gross negligence; at least
  thirty days' notice before any shutdown, and nobody charged without being asked

---

## [pcpgg-subprocessors-2026.1] — 2026-10-06

**Effective date:** 6 October 2026

- Initial pcp.gg Subprocessor List: Hetzner Online GmbH (Falkenstein, Germany) for the server
  that runs the site, database, relay and mail
- Records why Let's Encrypt, Porkbun, GitHub, connected assistants and owners' own PCPs are not
  subprocessors
