# PCP Privacy Notice

**Effective date:** 6 October 2026  
**Publisher:** Kaperkunde  
**KVK number:** 42061326  
**Address:** Prof. E.M. Meijerslaan 1, Amstelveen, The Netherlands  
**Website:** [https://github.com/kaperkunde/pcp](https://github.com/kaperkunde/pcp)  
**Licence:** [MIT](https://github.com/kaperkunde/pcp/blob/main/LICENSE)  
**Security reports:** security@kaperkun.de  
**Privacy/GDPR requests:** privacy@kaperkun.de  
**Legal notices:** legal@kaperkun.de  

PCP is open-source software you run yourself, so this notice is different from the others in
this repository. It says plainly that Kaperkunde holds nothing about you through PCP, what an
instance of PCP keeps on the machine it runs on, and who is answerable for that.

It sits on top of the [Kaperkunde Privacy Policy](../privacy.md) only where you deal with
Kaperkunde itself, for example by opening an issue or sending an email. It does not make
Kaperkunde the controller of an instance somebody else runs.

---

## Who you are dealing with

PCP is written and published by [Kaperkunde](https://kaperkunde.com), the independent software
business of Kevin Lohman, registered in the Netherlands (KVK 42061326), at Prof. E.M.
Meijerslaan 1, Amstelveen. Kaperkunde does not run PCP for anybody.

The person or organisation that runs an instance is its operator. For everything an instance
keeps, the operator decides why and how, and is the controller under the General Data
Protection Regulation. Kaperkunde is not.

Anything about Kaperkunde's own handling of your data, and any request about it, goes to
**privacy@kaperkun.de**. A person reads it.

---

## What Kaperkunde holds: nothing

PCP does not connect to Kaperkunde. It has no account, no telemetry, no update check, no crash
report and no analytics. Nothing an instance does is sent to Kaperkunde.

The one exception is one the operator turns on: [pcp.gg](https://pcp.gg), a separate service
Kaperkunde runs that gives an instance a public name. An instance only connects to it once its
operator pastes a pcp.gg connection key under Settings → pcp.gg, and what pcp.gg then holds,
which is not what passes through it, is set out in the
[pcp.gg Privacy Notice](../pcpgg/privacy.md).

One thing is outside PCP's own code. It is built on Next.js, which has an anonymous telemetry
setting of its own that reports to Vercel, never to Kaperkunde. The Docker image turns it off;
if you build and run PCP without Docker, set `NEXT_TELEMETRY_DISABLED=1` if you want it off
there too.

The only things Kaperkunde ever receives are what you send it yourself: an issue or a pull
request on GitHub, or an email. GitHub's own terms apply to what you post there. What
Kaperkunde does with an email is set out in the company [Privacy Policy](../privacy.md).

---

## What an instance holds

This list is for the operator, so that it can be the starting point for a notice of their own.
An instance keeps the following on its own disk, in the data directory, and nowhere else.

- **The vault.** A name, and the keys that open it. The password and the recovery key are never
  stored: each is used to derive a key, and only a wrapped copy of the vault's key is kept, so
  nothing on the server can open the vault without a credential.
- **Secrets.** The API keys, tokens and OAuth sign-ins the operator adds for their servers,
  stored encrypted at rest with a key the server does not hold.
- **Servers and their tools.** The servers added, the one-line description given to each and
  the tool list last fetched from each.
- **API tokens.** One per assistant connected. Only a hash of each is kept, so a token cannot
  be read back after it is shown once.
- **Sessions.** One per signed-in browser, until signed out or recovered.
- **A request log.** One line per call through the gateway: which token, which tool, which
  server, how long it took and whether it worked. Never the arguments or the results.

That is the whole list.

---

## Where it goes

What the operator puts in goes to two places, both chosen by them. A secret is added to a call
to the server it belongs to, and to no other. What an assistant asks for goes from the assistant
to the instance and on to the server it names, and back.

The servers connected and the assistant connected are the operator's own relationships, under
their own terms. Neither is a subprocessor of Kaperkunde, because Kaperkunde is not in the
chain. PCP has no subprocessors, so there is no subprocessor list for it.

---

## How long

An instance keeps everything until the operator deletes it. The request log is written to a
new file each day and is not removed by PCP, so the operator decides how long it stays.
Deleting the data directory removes all of it, and there is no other copy.

---

## Your rights, and who to complain to

If you are a person whose data passes through somebody else's instance, your rights are
exercised against the operator of that instance. Kaperkunde cannot see it, find it or change it.

For anything Kaperkunde itself holds, your rights and the way to complain are the ones in
[§9](../privacy.md#9-your-rights) and [§10](../privacy.md#10-supervisory-authority) of the
Privacy Policy.

---

## Changes to this notice

If anything here changes in a way that matters to you, we will say so rather than quietly
editing the page. The effective date at the top shows the current version, and every version
is kept in the public repository this notice is published from.

The [terms of use](terms.md) say what we each agree to.
