# pcp.gg Terms of Use

**Effective date:** 6 October 2026  
**Provider:** Kaperkunde, trading as **pcp.gg**  
**KVK number:** 42061326  
**Address:** Prof. E.M. Meijerslaan 1, Amstelveen, The Netherlands  
**Website:** [https://pcp.gg](https://pcp.gg)  
**Support:** support@kaperkun.de  
**Abuse reports:** abuse@kaperkun.de  
**Security reports:** security@kaperkun.de  
**Legal notices:** legal@kaperkun.de  

pcp.gg is a free bridge. It gives the PCP on your own computer a public name, such as
`yourname.pcp.gg`, and passes connections for that name to it, still encrypted. It does not run
your PCP and it cannot read what passes through.

A bridge needs few rules, and these are short. They exist because pcp.gg hands out names and
carries connections for them, so somebody has to say what a name is, what is not acceptable,
what we do when a name is misused, and that the service is offered as it is. Creating an
account is what accepts them.

The [pcp.gg Privacy Notice](privacy.md) is the other half, and says what pcp.gg holds and why.

---

## 1. What pcp.gg is

pcp.gg has three parts: the site, where you make an account and get a name and a connection
key; the relay, which owns the public addresses of every name and passes each connection down
the right tunnel; and the connector, which runs beside your PCP and opens that tunnel from your
side.

The encryption on a connection to your name ends at your PCP, with a certificate whose private
key is made on your computer and never leaves it. The relay reads only the name a connection
asks for, which every connection states in the clear, and passes everything else on unopened.
The site's [security page](https://pcp.gg/security) explains how, and where that promise ends.

pcp.gg is alpha software. During the alpha it is invite-only and free.

[PCP](https://github.com/kaperkunde/pcp) itself is separate open-source software with its own
[terms](../pcp/terms.md). pcp.gg is optional: PCP works without it.

---

## 2. Your account

You need to be 16 or over, as [§11 of the Privacy Policy](../privacy.md#11-children) sets out
for all our services. One account per person, made with an invite. The account is yours, and so
is whatever is done with it, so keep your password to yourself and your email address current:
it is how you sign in and how we reach you.

**The connection key is a key to your name.** Anyone holding it can put a PCP of their own at
your address. Keep it in your PCP and nowhere else. If it leaks, make a new one on your
dashboard: the old one stops working, and any tunnel using it is cut within a minute.

Invites are for the person they were sent to, or for the people a shared invite was meant for.
Do not sell them, and do not use them to get around the waitlist at scale.

---

## 3. Your name

**You may use your name for as long as you have an account.** It is a name under pcp.gg, which
Kaperkunde holds; it is not a domain transferred to you, and it gives you no right in the
`pcp.gg` name itself. When an account is closed, its name may later be given to somebody else.

Some names are reserved and cannot be picked. We may also take back a name, and offer you
another, when it:

- impersonates a person, a company or a brand, or is likely to be mistaken for one;
- is used for anything §5 rules out;
- infringes somebody else's rights, and they have shown us so; or
- is plainly offensive.

We will tell you why, and give you time to move, unless the law or an ongoing abuse makes that
impossible.

Once PCP has a certificate for your name, the name appears in public Certificate Transparency
logs, as every HTTPS site's name does. That is how certificates work, not something pcp.gg
publishes.

---

## 4. What runs behind your name is yours

You are responsible for your PCP and for the computer it runs on: the servers and secrets you
add to it, the assistants and tokens you let in, what those do, and what passes through your
tunnel. pcp.gg carries the connection; it is not a party to what happens over it, it cannot see
it, and it does not check it.

Your PCP gets its certificate from Let's Encrypt itself, under the subscriber agreement you
accept in PCP. That is between you and Let's Encrypt. pcp.gg only passes their check through.

If other people's data passes through your PCP, you are the one who answers for it, as
[PCP's own terms](../pcp/terms.md#2-whoever-runs-it-is-responsible) say. Using your own PCP for
yourself is ordinarily a personal matter; using it for work is your organisation's to account
for.

---

## 5. What is not acceptable

pcp.gg is for reaching your PCP. Do not use your name or your tunnel to:

- publish anything illegal, or anything sexual involving children, real or fictional;
- phish, impersonate, distribute malware, or run anything whose point is to deceive the people
  who connect to it;
- serve websites or services other than PCP, or use the tunnel as a general-purpose proxy or
  VPN;
- send traffic at a volume that degrades the relay for everybody else; or
- attack pcp.gg or anyone through it: probing for holes you have not been invited to probe,
  reaching for somebody else's name or tunnel, or trying to make the relay hold a certificate or
  key for a name.

Found a security problem? Tell **security@kaperkun.de**. Reporting a hole in good faith, and
giving us time to fix it before you tell anyone else, is welcome and is not a breach of these
terms.

---

## 6. Reports, and what we do about them

If a name under pcp.gg is being used for something §5 rules out, or something illegal, tell
**abuse@kaperkun.de**, with the name and a line on why. A person reads it and looks.

pcp.gg cannot see what passes through a tunnel, so it cannot inspect content or take down a
single page. What it can do is act on a name or an account: disconnect a tunnel, revoke a
connection key, take back a name, or suspend or close an account. We do that when these terms
or the law call for it, and no further than they call for. Whoever reported it hears what we
decided, and so does the owner of the name, with the reason, unless the law forbids it. If you
think we got it wrong, reply to say so, and a person looks again.

Authorities with an order or a request concerning pcp.gg can reach Kaperkunde at
**legal@kaperkun.de**, in English or Dutch.

---

## 7. The pcp.gg app in Claude and ChatGPT

pcp.gg has an app for the Claude and ChatGPT app directories, at one address for everyone,
`https://pcp.gg/mcp`. It works only once Anthropic and OpenAI approve it, and until then it is
switched off. Once it is available, using it is your choice, per assistant, and it is the one
place where pcp.gg sees content.

A connection to `pcp.gg` ends at pcp.gg's own certificate, so to route an app's request to your
PCP, pcp.gg decrypts it, then sends it on to your PCP over a new encrypted connection that
checks your PCP's own certificate, and passes the answer back. For that, Kaperkunde acts on
your instruction only, and:

- uses what passes only to deliver it, never for anything else;
- does not store or log a request, an answer, or the PCP token you give the app: the token
  travels sealed inside the sign-in the app holds, which only pcp.gg can open;
- keeps it on the servers named in the [subprocessor list](subprocessors.md), and no others;
- lets no one at Kaperkunde read it, and keeps its systems secure, as
  [§7 of the Privacy Policy](../privacy.md#7-security) describes; and
- tells you without undue delay if it learns that anything passing this way has been exposed.

Your passwords and keys never pass this way: PCP adds them to the calls it makes itself. The
token you give the app is one you make in PCP, at the levels you choose. Disconnect the app on
your dashboard, or delete its token in PCP, and it is out.

Your own address stays the private way. There, none of this section applies, because pcp.gg
cannot read anything at all.

---

## 8. It is offered as it is

pcp.gg is free alpha software, and it is offered as it is. We try to keep it up, but there is no
warranty of any kind and no promise of availability: the relay may go down, a release may
break your tunnel, and your PCP is only reachable while your computer is on and connected. Do
not rely on pcp.gg for anything where an outage would cost you more than an inconvenience.

To the extent the law allows, Kaperkunde is not liable for any loss from using pcp.gg or from
its being unavailable, except loss caused by Kaperkunde's intent or gross negligence. If you are
a consumer, nothing here limits a liability the law does not let us limit.

---

## 9. Ending it

You can stop at any time. Removing your key on the dashboard disconnects your PCP at once; to
have the account deleted as well, ask **privacy@kaperkun.de**, as the
[privacy notice](privacy.md#taking-it-with-you-or-taking-it-down) says. We can close an account
that is breaking these terms, and we will say why.

If pcp.gg ever stops being free, nobody is charged without being asked first. If it shuts down,
everyone with an account hears about it at least thirty days before, with time to move to
another way of reaching their PCP: PCP has dynamic DNS and Let's Encrypt built in for a home
server, and works behind a tunnel of your own.

---

## 10. Changes

These terms will change as pcp.gg does. If anything changes in a way that matters to you, we
will tell you rather than quietly editing the page, and the effective date at the top shows the
version you are reading. Every version is kept in the public repository these terms are
published from.

---

## 11. Getting in touch

Support goes to **support@kaperkun.de**, reports about a name to **abuse@kaperkun.de**,
vulnerabilities to **security@kaperkun.de**, questions about these terms to
**legal@kaperkun.de**, and anything about your data to **privacy@kaperkun.de**. A person reads
each of them, and you hear back.

Dutch law applies, and pcp.gg is a trade name of [Kaperkunde](https://kaperkunde.com), whose
details are at the top of this page. If you are a consumer, nothing here takes away the
protection the law of the country you live in gives you, and the European Commission's
dispute-resolution platform is at
[https://ec.europa.eu/consumers/odr](https://ec.europa.eu/consumers/odr), as
[§17 of the Privacy Policy](../privacy.md#17-online-dispute-resolution-consumers) notes.
