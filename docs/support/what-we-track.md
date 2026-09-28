---
description: Everything 1EDGE measures about you, why it measures it, how long it keeps it, and who can see it. In plain words.
---

# What We <span class="g">Track</span>, and Why

Your wallet is your account. We never ask for your name, email or ID ourselves, we run no ad or analytics trackers of our own, and we sell nothing. If you sign in to the 1EDGE Wallet with an email or a social account, that sign-in is held by Privy, the company that runs the wallet, and never reaches our servers ([below](#the-1edge-wallet)). But "we don't track you" would be a lie, because two things here do measure you, and you should know exactly what they are before you use the platform.

This page is the plain-words version. The binding version is the [Privacy Policy](legal.md), which you can read in the app.

## The short list

| What | Why | How long |
| :--- | :--- | :--- |
| **Your wallet address** | It is your account, on each chain you use | While the account exists |
| **Profile, posts, calls, reactions, communities** | It is the product | Until you delete it |
| **Direct messages** | To deliver them. Sealed ones we cannot read | Until deleted |
| **Unique reach** on posts and profiles | So the social axis counts readers, not posting | With the post |
| **Referrals** | To pay the fee share and score the referral axis | While the account exists |
| **Presence** — how the page is driven | To tell a person from a script | **90 days**, then a monthly summary kept indefinitely |
| **A hash of your network, and a random browser id** | To spot one person running many wallets | While abuse detection runs on it |
| **The wallets you link yourself** | One account across both chains | While the account exists |
| **Terms acceptance** — wallet, version, time, IP, browser | Proof of what you agreed to | Kept, append-only |
| **Enforcement records and appeals** | So action is proportionate and reviewable | Kept |
| **Seasons** — opt-in, points, settlements, holds | The competition's history | Kept |
| **Your IP at request time** | Rate limits and abuse prevention | Not kept as a browsing log |
| **Push notifications**, if you allow them | To deliver them, through your browser's push service | Until you turn them off |
| **1EDGE Wallet sign-in** — email, social account or passkey | Held by **Privy**, which runs the wallet, not by us | Under Privy's terms; ask us to delete it |

Everything on chain — every launch, buy, sell and mint — is public and permanent, and nobody can delete it. That is the chain, not us.

## The 1EDGE Wallet

The 1EDGE Wallet is run for us by **Privy**. You sign in to it with Google, X, Telegram, Discord, Farcaster, an email address or a passkey, and it makes you one Ethereum-style address (the same on Robinhood Chain and on Arc) and one Solana address.

* **What you sign in with goes to Privy and stays with Privy.** Your email, or what the provider you chose shares with Privy, or a passkey's id.
* **It never reaches our servers, and we do not store it.** What reaches us is the wallet's addresses, as with any other wallet.
* **Our team can see it in Privy's dashboard**, because Privy shows every app its own users. We do not copy it into our own records.
* **Per Privy, nobody can see the key.** It is split into encrypted shares and only put together inside a secure enclave for the moment of signing. You can export it from the app.
* **Privy's software reports its own usage events to Privy.** It only loads when you use the 1EDGE Wallet.

Signing in to the wallet with X or Discord is not the same as connecting X or Discord to your 1EDGE profile. The [Privacy Policy](legal.md) lists every outside service the platform uses and what each one sees.

## Presence, the one people ask about

1EDGE Proof of Humanity is a cost paid **once**, at one moment. Presence is how we know a person is **still** there. Without it, a farm pays that cost one time and runs bots forever.

While you use the app, a small script measures the shape of your session and sends a summary about once a minute.

**What it measures**

* How long the session ran, and how much of it was active
* Pointer movement: how much, how variable the speed, how often it paused or reversed
* Scrolling: how much, and in how many bursts
* Attention: how often the tab lost focus and for how long
* Typing: how many keys, and how evenly spaced
* Touch: how many touches, how evenly spaced, their size and variation
* How many different surfaces of the app you visited
* A score our server computes from those numbers

**What it never measures**

* **Not what you type.** Only the rhythm. Which keys were pressed is never read.
* **Not where the pointer went.** Only how it moved. No raw traces leave your browser.
* No page content, no URLs, no screen recording, no location, no fingerprinting library.

**What it is used for.** Three things and no others: raising alerts about wallets that look automated; a fair-play check at Seasons payout; and the Seasons **human** axis, which counts days in the week you had at least one session that looked like a person at the screen.

> ℹ️ **You are never shown the score, and neither are the thresholds.** A score you can read is a score an attacker can tune against. And **no presence data is neutral** — a wallet that only ever traded through the API is not called a bot for it.

**On what basis.** Presence runs for everyone who uses the app, as an anti-abuse measure, whether or not you ever enter a season. Where it counts for points and money, there is a second and explicit basis: opting into a season asks you, in plain terms, to consent to it being used to verify liveness and check for manipulation in that season, and you can decline by not opting in. Declining does not switch off the anti-abuse measurement, and we are not going to pretend it does.

**How long.** The per-session rows are deleted after **90 days**. Before that they roll up into one row per wallet per month — sessions, how many looked human, how many were on touch, active time, best and average score, devices, first and last — and that monthly ledger is kept **indefinitely**. It is a wallet's real history here. It is never re-scored later, so a month means what it meant when it was lived.

## The wallets you link yourself

1EDGE runs on Solana and on Robinhood Chain, and one account can hold a wallet on each. When you link the second one we record which addresses belong together, and when.

That is a deliberate act with a public consequence, so it is worth being plain about it: your account is one profile across every wallet you link, so the same posts, trophies and season record are shown under each of those addresses and anyone can see they belong to the same person. Link a second wallet only if you are content for the two to be publicly connected. The chain would show it eventually in any case, which the Privacy Policy also says.

This is not the same thing as the section below. This is linkage **you** ask for. Below is linkage we look for.

## One person, one wallet

That is the rule, one account per human, and here is how we look for accounts breaking it, and the honest limits of it.

* **Your network** is not stored as an address. We take the surrounding block (the /24, or /64 on IPv6) and hash it with a key kept outside the database. What is stored is 16 characters that cannot be turned back into anyone's address. Using the block rather than the address blurs households, offices and mobile carriers together on purpose, so a shared network is weak evidence on its own.
* **Your browser** gets a random id in local storage, so several wallets signing in from one browser in a day is visible. A household is two wallets on one device, so this says nothing alone. Clearing storage makes a new id.
* **The five things we group on:** wallets funded from the same source, wallets on the same network hash, wallets buying the same tokens within seconds, wallets verified within minutes of each other, and several wallets from one browser in a day. No alert exists below a small group, and a person on our team reviews every one and can dismiss it.

> ⚠️ **We do not claim this is enforcement, and we do not claim bots are impossible.** Proof of humanity, presence and wallet linkage make automation expensive and visible. They do not make it impossible, and anyone telling you otherwise about any platform is selling something. Assume bots and multiple wallets exist on any public market, here included.

None of it is used to work out who you are in the real world. Being grouped with other wallets is not an accusation. Where it costs you something — a held Seasons share — you are told which category of evidence caused it, and you can contest it.

## Seasons, the rules in one place

The full rules are in [Seasons](../rewards/seasons.md) and in the season terms you accept when you opt in, which are versioned and shown in the app.

| The rule | |
| :--- | :--- |
| **Points** | Six weighted axes: referrals 35, volume 25, calls 15, launches 10, social 10, human 5 |
| **The scale** | Each axis is scored against the 95th percentile of that week's field, on a log curve |
| **Qualifying** | 150 points in a week, then four bands proportional to how many qualified |
| **The week** | Closes Friday 20:00 UTC. A settled week is **never re-ranked** |
| **Opting in** | Per season, with its terms version recorded. Points count for everyone; payouts are for those who opted in |
| **Claiming** | Within 28 days of settlement, then it rolls back to the vault |
| **Points are not tokens** | No cash value, not transferable, not sellable |

**If a payout is held.** Fair-play checks run when a week pays, not on your points, so the board people watched all week is the board that settles and a held wallet keeps its place and its rank. Nothing is taken from your wallet — a payout you had not claimed is not paid yet. A held share is **held, not gone**: it stays in the vault, the panel tells you in plain words which category of evidence caused it, you can **contest it once** inside the claim window, and **a person** decides — released and claimable on a fresh window, or forfeited. A held share nobody contests before the window closes is forfeited. Held or forfeited, it is never transferred to anyone: it stays in the vault the payout would have come from, funds later seasons, and nobody on the 1EDGE team receives it. How the checks work is deliberately not published — publishing them would only be a guide to avoiding them.

**Referrals are single-tier.** You earn on the people you referred, and nothing from the people they refer. No downline, no chain.

## Who inside 1EDGE can see any of this

Staff access is limited by role, so a person reaches the parts of the admin tools their job needs and no more. Every administrative action is written to an audit log with who did it and when. Actions that move money need a second person to approve them.

**Sealed messages sit outside all of it.** If you and the other person have both turned on encrypted messaging, the message is sealed on your device before it leaves. We store it, we deliver it, and no role, no moderation and no AI can read it. That also means we cannot recover it if you lose your wallet, and it does not cover attachments or the **@1EDGE** support thread, which is readable by our team because support has to be.

## The AI

Some features send text to Anthropic's Claude models: content moderation on posts and unsealed messages, the assistant on the @1EDGE support thread, Trader DNA and season recaps written from your public statistics, and a check on image prompts. Sealed messages are never sent to any AI, because we cannot read them. AI can be wrong, a person can take over a support thread at any point, and nothing an AI writes here is advice.

## Ask us

* Privacy questions and data requests: **privacy@1edge.app**
* Terms and legal: **legal@1edge.app**
* Reporting abuse: **abuse@1edge.app**
