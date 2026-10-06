# pcp.gg Privacy Notice

**Effective date:** 6 October 2026  
**Controller:** Kaperkunde, trading as **pcp.gg**  
**KVK number:** 42061326  
**Address:** Prof. E.M. Meijerslaan 1, Amstelveen, The Netherlands  
**Website:** [https://pcp.gg](https://pcp.gg)  
**Support:** support@kaperkun.de  
**Abuse reports:** abuse@kaperkun.de  
**Privacy/GDPR requests:** privacy@kaperkun.de  
**Legal notices:** legal@kaperkun.de  

pcp.gg gives the PCP on your own computer a public name, and passes connections for that name to
it, still encrypted. It is built so that it cannot read what passes between your assistant and
your PCP. This notice says plainly what pcp.gg does keep about you, what it is for, who else
ever sees it, and how to take it with you or have it deleted.

It sits on top of the [Kaperkunde Privacy Policy](../privacy.md), which is the company-wide
document and covers your rights, how to complain, international transfers, security, and the
promises that hold across everything Kaperkunde runs. This notice adds what is particular to
pcp.gg. It never takes away anything the company policy gives you.

---

## Who you are dealing with

pcp.gg is a trade name of [Kaperkunde](https://kaperkunde.com), the independent software
business of Kevin Lohman, registered in the Netherlands (KVK 42061326), at Prof. E.M.
Meijerslaan 1, Amstelveen. Kaperkunde is the data controller for everything described here
under the General Data Protection Regulation.

Anything on this page, and any request about your data, goes to **privacy@kaperkun.de**. A
person reads it. Support goes to **support@kaperkun.de**, and a name that is being misused to
**abuse@kaperkun.de**.

---

## What passes through is not ours to read

This is the one thing to know before anything else. When your assistant connects to your name,
the encryption on that connection ends at your PCP, with a certificate whose private key is made
on your computer and never leaves it. pcp.gg's relay reads only the name the connection asks
for, which every HTTPS connection states in the clear, and passes every other byte down your
tunnel unopened. It holds no certificate and no key for any owner's name.

So pcp.gg never has what your assistant asks for, what your PCP answers, your mail, your files,
or the passwords, API keys and sign-ins PCP keeps for you. It never has the tokens your
assistants use to reach your PCP either: you make those in PCP, and an app such as claude.ai
signs in for one on your PCP, inside the encrypted connection.

While a connection passes, the relay does see where it came from, when, and roughly how much
moved, because it has to carry it. It does not write any of that down.

The one exception is the pcp.gg app in Claude and ChatGPT, which you choose per assistant once
it is available; see [The pcp.gg app](#the-pcpgg-app) below. The site's
[security page](https://pcp.gg/security) explains all of this in more detail, including where
the promise ends.

---

## What we hold

- **Your account.** The email address you signed up with, your name, and your password — stored
  hashed, so nobody at Kaperkunde can read it — and which invite you joined with. Each sign-in
  session records the IP address and browser it was started from. Password-reset links are kept
  until they are used or expire.
- **Your name and connection.** The name you picked under pcp.gg, a hash of your connection key
  (never the key itself, which is shown to you once) and its first few characters so you can
  tell keys apart, when it was made, whether your PCP is connected right now, and when it last
  connected and was last seen.
- **The waitlist.** If you joined it: your email address, and, if you gave them, your name, what
  you hope to connect and which kind of computer you use; when you joined and when you were sent
  an invite.
- **Invites.** An invite sent to you records your email address, so only you can use it.
- **Apps you allow, once the pcp.gg app is available.** Which app you allowed, for which PCP,
  when, when it was last used, and whether you disconnected it. Never the PCP token you give it.
- **The relay's own log.** One line each time a PCP connects or disconnects, naming the
  connection by an internal number and the time. No addresses, no names asked for, no byte
  counts.

That is the whole list. Neither the site nor the relay keeps a log of requests or connections.
There is no analytics, no advertising, no tracking pixel and no profiling of you anywhere in
pcp.gg. The only cookie pcp.gg sets is the one that keeps you signed in, which is why you have
never been asked to dismiss a cookie banner here.

### Rate limits

To keep a runaway script from spoiling the site for everyone, the sign-in pages count requests
by IP address over the last minute, and the pcp.gg app counts app registrations by address over
the last hour. These counts live in memory and are gone as soon as the window passes; they are
never written down.

### The download page

The download page works out which build of PCP suits your computer inside your browser, from
what your browser says about itself. That guess is not sent to pcp.gg. The download itself comes
straight from GitHub, which then sees your request, as it would for any download from there.

---

## Why we hold it

Your account, your name and the hash of your key are there because pcp.gg cannot do what you
asked it to without them — that is the contract between us. Whether your PCP is connected is how
the relay knows where to send a connection for your name, and how your dashboard tells you. The
waitlist is there because you asked to be told when there is room. The relay's log, the session
records and the rate limits rest on our legitimate interest in keeping the service up, secure
and worth using.

We email you about your account: that you are on the waitlist, your invite, and password resets.
Mail goes out from a mail server Kaperkunde runs itself. We send no marketing mail.

---

## How long

| What | How long |
|---|---|
| Your account and your name | Until you ask us to delete the account |
| The hash of your connection key | Until you remove or replace the key, or the account goes |
| Whether your PCP is connected, and when it last was | Overwritten each time it changes; gone with the account |
| Sign-in sessions | Seven days from their last use; signing out ends one, a password reset ends all of them |
| Password-reset links | One hour |
| A waitlist entry | Until you have an account, or ask to be taken off; at the latest when the waitlist closes |
| An invite sent to your address | As long as the account made with it, or until it expires unused |
| An app you allowed | Until the account goes; disconnecting stops it at once, and only the record that you once allowed it remains |
| The relay's log of connects and disconnects | Until the server's logs are rotated |
| Rate-limit counts | A minute, or an hour for app registrations, and never written down |

Everything else goes when the account does. Deleted data may remain in backups until those
expire or are overwritten.

---

## Who else ever sees it

**We do not sell your data, share it, rent it, give it away, or hand it to advertisers, data
brokers or AI training sets.**

**One processor for the servers.** pcp.gg runs on a server rented from
[Hetzner](https://www.hetzner.com), in Germany. Everything the service is made of — the site,
the database, the relay and the mail server that sends your invite and reset links — is software
Kaperkunde runs itself on that server. No analytics service, no content delivery network, no
mail provider, and nothing in front of the relay that could open a connection to your name.

**Certificate Transparency logs, for your name.** Once your PCP has a certificate for your name,
the name appears in public Certificate Transparency logs, as every HTTPS site's name does. Your
PCP asks Let's Encrypt for that certificate itself; pcp.gg only passes Let's Encrypt's check
through. A name can say something about you, so pick one you are content to have public.

**Assistants you connect.** What an assistant reads through your PCP, it reads under the token
you gave it, and what it does with that is between you and whoever makes it. It is your
assistant, not ours, and not a Kaperkunde subprocessor.

The full list is in the [pcp.gg subprocessor list](subprocessors.md). If it ever has to change,
that list and this page will say so, and who they are, before it does.

The exception every service has to name: if we are ever legally required to hand something
over, we will, and we will tell you unless we are forbidden to. Because of how pcp.gg is built,
what passes through your tunnel is not something we have to hand over.

---

## The pcp.gg app

pcp.gg has an app for the Claude and ChatGPT app directories, at one address for everyone,
`https://pcp.gg/mcp`. It works only once Anthropic and OpenAI approve it, and until then it is
switched off. Once it is available, using it is your choice, per assistant, and it changes what
pcp.gg can see:

- **pcp.gg reads app requests to route them.** A connection to `pcp.gg` ends at pcp.gg's own
  certificate, so to know whose PCP a request is for, pcp.gg decrypts it. It then sends it on to
  your PCP over a new encrypted connection that checks your PCP's own certificate. While a
  request passes, pcp.gg could read what the app asks and what your PCP answers: the same things
  the AI company sees. It does not keep or log them, and uses them for nothing but delivering
  them.
- **Your passwords and keys still never leave PCP.** PCP adds them to the calls it makes itself,
  so they never travel to the app, or through pcp.gg, either way.
- **The PCP token you give the app is never stored.** You make it in PCP, at the levels you
  choose. It travels sealed inside the sign-in the app holds, which only pcp.gg can open, so a
  copy of our database would not give anyone your PCP. Disconnect the app on your dashboard, or
  delete its token in PCP, and it is out.

For what passes this way, Kaperkunde acts on your instruction only, on the terms in
[§7 of the terms of use](terms.md#7-the-pcpgg-app-in-claude-and-chatgpt). Your own address stays
the private way: there, pcp.gg cannot read anything at all.

---

## Taking it with you, or taking it down

Email **privacy@kaperkun.de** and we will send you a machine-readable copy of everything pcp.gg
holds about you, or delete your account, or take you off the waitlist, whichever you ask for.
Either way you hear back within 30 days, and normally a great deal sooner than that. This is how
Kaperkunde's company-wide export promise is kept here — see
[§4.1 of the Privacy Policy](../privacy.md#41-what-we-do-instead) — and there is not much to
export, because pcp.gg holds so little.

Deleting your account removes it, your name, your key's hash, your sessions and the apps you
allowed. Your PCP is disconnected at once. The name may later be given to somebody else.

---

## Your rights, and who to complain to

These are the same across everything Kaperkunde runs and are set out in
[§9](../privacy.md#9-your-rights) and [§10](../privacy.md#10-supervisory-authority) of the
Privacy Policy: access, correction, erasure, restriction, objection, portability, withdrawing
consent, and a complaint to the Dutch **Autoriteit Persoonsgegevens** if we get it wrong. We
will not make you jump through hoops for any of it.

You need to be 16 or over to use pcp.gg, as [§11](../privacy.md#11-children) of the Privacy
Policy sets out for all our services.

If you are somebody whose data passes through another person's PCP, that PCP's owner is the one
answerable for it, as the [PCP Privacy Notice](../pcp/privacy.md) says. pcp.gg cannot see it,
find it or change it.

---

## Changes to this notice

If anything here changes in a way that matters to you, we will tell you rather than quietly
editing the page. The effective date at the top shows the current version, and every version is
kept in the public repository this notice is published from. A change to what pcp.gg can see
changes this notice and the site's security page together.

The [terms of use](terms.md) say what we each agree to.
