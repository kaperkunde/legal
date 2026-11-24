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
below. Every push to `main` publishes the documents as `@kaperkunde/legal-docs`, and Study
Guild picks the new version up as a dependency update (Renovate), so nothing else needs bumping.

---

## [studyguild-privacy-2026.2] — 2026-11-23

**Effective date:** 23 November 2026

- Says exactly what is public (XP, level, streak, best streak, guild memberships with per-guild
  XP, Contribution Points, feats, member since, the XP and contributor leaderboards, card pages
  with their history and per-reason feedback counts, never who gave it) and what is private
  (per-card progress, sessions, hidden cards, votes, reports made, email, full name, time zone)
- "What we hold": feats, banners and banner votes, hidden cards, reports, last visit and
  notification state; retention row for a guild you left (30 days) and for reports
- Cookies named precisely: the sign-in cookie and `sg_invite` (invite code only, 30 days)
- Email described in two classes, essential account mail and optional study notifications with
  a switch each and one-click unsubscribe; still no marketing mail
- Connector section: name and email, staying connected, and acting for you, now including
  starting or resuming a study session and recording answers
- Export and deletion are Settings buttons first, email second; deletion rules unchanged
- A paragraph on the beta front door and its shared accounts and data
- Hetzner located in Falkenstein, Germany; VAT number added to the header
- Short statement of legal bases; rate-limit wording corrected
- Matches the built code: card pages, moderation and age records, streak-notice state, report
  digest, what the export covers and exactly what deletion erases or keeps, the nightly sweep
  of expired sessions, links and tokens
- Age: 16 or over confirmed at sign-up (only the confirmation is kept), accounts of under-16s
  closed with reasons, parents can write to privacy@ or support@; the username chosen at
  sign-up is the public name; a connected assistant's own terms and age rules also apply

---

## [studyguild-terms-2026.2] — 2026-11-23

**Effective date:** 23 November 2026

- §1, §5: still being tested, may lose data, and the beta shares data with the main site
- §2: licence made non-exclusive and explicit about hosting, adapting (cropping, re-encoding,
  embeddings) and service providers, and extended to banners; editing another member's card
  needs guild membership and 7 study days; a confirmation that you may share what you add
- §4: reports and decisions aligned with the new shared Notice-and-Action Policy (hide or
  remove cards, pictures, banners and guilds, limit or suspend accounts; reasons to both
  parties); automatic duplicate and edit checks described
- §6: delete the account from Settings; §8: the closed EU ODR platform no longer linked
- §1: age confirmation at sign-up, closure with reasons if the holder is under 16, and the
  username chosen at sign-up is the public name
- VAT number added to the header

---

## [studyguild-subprocessors-2026.2] — 2026-11-23

**Effective date:** 23 November 2026

- Hetzner located in Falkenstein, Germany; VAT number added to the header

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
  check and search — with exactly which text is sent, that nothing identifying a member goes
  with it, that it is processed under Voyage AI's data processing agreement, and that
  Kaperkunde has opted out of Voyage AI's training use so each text is deleted once processed
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

- Initial Study Guild Subprocessor List: Hetzner for the servers, and Voyage AI Innovations,
  Inc. for text embeddings, with what each receives; records the Voyage AI DPA and that
  Kaperkunde has opted out of the training use its terms (§3) otherwise allow, so texts are
  deleted after processing
- Records that an AI assistant a member connects, and a site an assistant fetches a picture
  from, are not Kaperkunde subprocessors, and that public guild pages being read by crawlers is
  publication rather than a transfer
