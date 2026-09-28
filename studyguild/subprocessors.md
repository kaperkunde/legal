# Study Guild Subprocessor List

**Effective date:** 28 September 2026  
**Provider:** Kaperkunde  
**KVK number:** 42061326  
**Address:** Prof. E.M. Meijerslaan 1, Amstelveen, The Netherlands  
**Website:** [https://studyguild.my](https://studyguild.my)  
**Privacy/GDPR requests:** privacy@kaperkun.de  

This list names everyone other than Kaperkunde who touches Study Guild data, and what each one
is for. Company-wide subprocessors are listed in
[§5.1 of the Privacy Policy](../privacy.md#51-when-kaperkunde-is-controller); the ones below
are Study Guild's own.

It is a short list on purpose. Everything the service is made of — the database, the card
pictures, the mail server, the app itself — is Kaperkunde's own software, running on servers
Kaperkunde rents. One thing is bought in: the understanding of meaning that lets a guild ask
each question once.

---

## Current subprocessors

| Subprocessor | Purpose | What it receives | Location / notes |
|---|---|---|---|
| **Hetzner Online GmbH** | The servers Study Guild runs on: the application, the database, card pictures and outbound mail | Everything stored, as the host of any server does | European Union. The only processor with access to stored data. |
| **Voyage AI** | Text embeddings — the list of numbers that stands for a text's meaning — which the duplicate check, the "a guild like this exists" check, the edit-drift check and card search compare | The text of a card being added or edited (question and answer, formatting removed, whether or not the card is then saved), the name of a guild being founded, and the search queries an assistant runs. Never a member's name, email or account, and never a picture. | United States. A transfer outside the EEA under the safeguards in [§6 of the Privacy Policy](../privacy.md#6-international-transfers). Voyage AI's own [terms](https://www.voyageai.com/legal/terms-of-service) and [privacy policy](https://www.voyageai.com/legal/privacy-policy) govern what it does with the text it receives. |

Voyage AI is told nothing about who wrote a text or which guild it belongs to; it receives the
words and returns the numbers, and those numbers stay in Kaperkunde's own database.

---

## What this list does not cover

**An AI assistant a member connects themselves.** Study Guild can be connected to an AI
assistant over OAuth. That assistant acts as the member who allowed it, under limits they set,
and what it does with what it reads is between them and whoever makes it. It is the member's
relationship, not Kaperkunde's, and it is not a subprocessor of ours. A connection can be
withdrawn at any time under Settings → Connected apps.

**A picture an assistant names by its web address.** When an assistant puts a picture on a card
by giving Study Guild a public web address, Study Guild fetches that address to store the
picture. That is a request the member's assistant asked for, to a site the member chose; the
site in question is not a subprocessor of ours, and the fetch only ever reaches public
addresses.

**The open web.** Guilds are public pages. Search engines and other crawlers read them as they
read any public page; that is publication, not a transfer to a processor.

---

## Changes to this list

Study Guild may add or replace subprocessors as needed to run the service. Where required by
applicable data-protection law, Kaperkunde will give reasonable notice of material changes.

Adding one is a change to this file and to the
[Study Guild Privacy Notice](privacy.md) in the same breath — the notice says there are two
processors, and a third would make that untrue.

To ask questions or object to a material change, contact **privacy@kaperkun.de**.
