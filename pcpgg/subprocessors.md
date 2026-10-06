# pcp.gg Subprocessor List

**Effective date:** 6 October 2026  
**Provider:** Kaperkunde, trading as **pcp.gg**  
**KVK number:** 42061326  
**Address:** Prof. E.M. Meijerslaan 1, Amstelveen, The Netherlands  
**Website:** [https://pcp.gg](https://pcp.gg)  
**Privacy/GDPR requests:** privacy@kaperkun.de  

This list names everyone other than Kaperkunde who touches pcp.gg data, and what each one is
for. Company-wide subprocessors are listed in
[§5.1 of the Privacy Policy](../privacy.md#51-when-kaperkunde-is-controller); the one below is
pcp.gg's own.

It is a list of one on purpose. Everything the service is made of — the site, the database, the
relay, the mail server — is software Kaperkunde runs itself, on a server Kaperkunde rents.
Nothing is bought in, and nothing sits in front of the relay that could open a connection to an
owner's name.

---

## Current subprocessors

| Subprocessor | Purpose | What it receives | Location / notes |
|---|---|---|---|
| **Hetzner Online GmbH** | The server pcp.gg runs on: the site, the database, the relay and outbound mail | Everything stored, as the host of any server does, and the encrypted connections the relay carries | Germany (Falkenstein), European Union. The only processor with access to stored data. |

Hetzner hosts the relay, so the encrypted connections to owners' names cross its network as they
cross every network between an assistant and a PCP. It has no more way to open them than pcp.gg
does.

---

## What this list does not cover

**Let's Encrypt.** An owner's PCP asks Let's Encrypt for its certificate itself, under the
subscriber agreement the owner accepts in PCP. pcp.gg only passes Let's Encrypt's check through,
and sends Let's Encrypt nothing of its own. The certificate, and with it the owner's name, then
appears in public Certificate Transparency logs, as every certificate does; that is publication
by the certificate authority, not a transfer by us.

**Porkbun.** pcp.gg's DNS is registered with Porkbun, but every name under pcp.gg is answered by
one wildcard record, so no owner's name is sent to Porkbun.

**GitHub.** The download page links to PCP's releases on GitHub, and a download goes from the
visitor's browser to GitHub directly. pcp.gg itself only asks GitHub which release is newest,
which says nothing about anyone.

**An assistant or app an owner connects.** An assistant an owner connects to their PCP, whether
at their own name or through the pcp.gg app, is the owner's relationship with whoever makes it.
It is not a subprocessor of ours.

**An owner's own PCP.** What passes through a tunnel ends on the owner's computer, which is
theirs to answer for, as the [PCP Privacy Notice](../pcp/privacy.md) says.

---

## Changes to this list

pcp.gg may add or replace subprocessors as needed to run the service. Where required by
applicable data-protection law, Kaperkunde will give reasonable notice of material changes.

Adding one is a change to this file and to the [pcp.gg Privacy Notice](privacy.md) in the same
breath — the notice says there is one processor, and a second would make that untrue.

To ask questions or object to a material change, contact **privacy@kaperkun.de**.
