# Study Guild Changelog

All notable changes to Study Guild legal documents are listed here.

Documents are versioned independently using git tags:

| Tag pattern | Document |
|-------------|----------|
| `studyguild-privacy-{year}.{revision}` | [privacy.md](privacy.md) |
| `studyguild-terms-{year}.{revision}` | [terms.md](terms.md) |
| `studyguild-subprocessors-{year}.{revision}` | [subprocessors.md](subprocessors.md) |

Company-wide documents: [CHANGELOG.md](../CHANGELOG.md) (`privacy-`).

### View a tagged version

```bash
git fetch --tags
git show studyguild-privacy-2026.1:studyguild/privacy.md
```

On GitHub: `https://github.com/kaperkunde/legal/releases/tag/<tag-name>`

When publishing a new version, commit the change, create the tag, push both, and add an entry
below. Study Guild pins this repository as a submodule, so a published change also needs the
submodule pointer bumped in the app (`pnpm legal:sync` there) before it reaches the site.

---

## [studyguild-privacy-2026.1] — 2026-09-28

**Effective date:** 28 September 2026

- Initial Study Guild Privacy Notice, written for the production launch
- Leads with the fact that guilds are public: every card, picture and guild description is
  published on the open web, listed for search engines and AI crawlers, and reachable by
  members' connected assistants; a member's public name (username, else first name and last
  initial) stands beside their cards, on guild pages, on the leaderboard and on their invite
  link
- Lists everything the app holds, including the per-answer training history, the duplicate
  decision log, invitation credits and the hashed tokens of connected assistants
- Retention periods stated: sessions 30 days from last use, sign-in links 10 minutes, reset
  links 1 hour, the invitation cookie 30 days, unattached pictures 1 day, server logs 30 days,
  assistant tokens 1 hour (access) and 60 days (refresh)
- Names the two processors: Hetzner for the servers in the EU, and Voyage AI in the United
  States for the text embeddings behind the duplicate check, guild-name check, edit-drift
  check and search — with exactly which text is sent and that nothing identifying a member
  goes with it
- Records that daily reminders are on at sign-up, at 20:00 in the member's zone, and turn off
  in one click from every reminder or in Settings; no marketing mail
- Defers to the company-wide [Privacy Policy](../privacy.md) for rights, the supervisory
  authority, transfers, security and the minimum age, rather than restating them
- Export and deletion on request to privacy@kaperkun.de, with what deletion removes and what
  stays with the guilds

---

## [studyguild-terms-2026.1] — 2026-09-28

**Effective date:** 28 September 2026

- Initial Study Guild Terms of Use
- §2 sets out the licence a member gives by adding a card, picture, guild or edit: Kaperkunde
  may store and publish it as part of Study Guild, and every member may study, hold, vote on
  and improve it. A card is the member's to delete while its score is 0 or below; once voted
  up it belongs to the guild and stays, credited to the member's public name or to "a former
  member" after the account is gone
- §4 gives the notice-and-action route: reports to abuse@kaperkun.de, a decision with reasons
  to both the reporter and the member concerned, and a second look on request
- Published rather than gated: there is no acceptance step, and creating an account is what
  accepts them

---

## [studyguild-subprocessors-2026.1] — 2026-09-28

**Effective date:** 28 September 2026

- Initial Study Guild Subprocessor List: Hetzner for the servers, and Voyage AI for text
  embeddings, with what each receives
- Records that an AI assistant a member connects, and a site an assistant fetches a picture
  from, are not Kaperkunde subprocessors, and that public guild pages being read by crawlers is
  publication rather than a transfer
