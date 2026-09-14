---
description: Platform profiles tied to a wallet that passed our checks, one account across both chains, with on-chain-verified performance.
---

# Profiles & <span class="g">Handles</span>

Every account holding a pass on 1EDGE gets a profile, a handle, avatar, bio, and a public track record. It's worth being precise about what lives where, because it's a mix:

* **Your profile and handle are platform data**, your username, avatar, banner, and bio are stored by 1EDGE, not written to the chain. They're how you present yourself across [Edge Social](edge-social-engine.md).
* **Your performance is on-chain**, your trading volume, PnL, win rate, and transaction history are read **directly from the chain**, Solana or Robinhood Chain, so the numbers attached to your profile can't be faked. See [Verified Ledger Performance](verified-metrics.md).

> ℹ️ Think of it as a **platform identity with an on-chain reputation**: the name is yours to set, but the stats are the chain's to prove.

## One account, a wallet on each chain

1EDGE runs on two chains, and an account can hold a wallet on each: a Solana wallet, and an Ethereum-style wallet on Robinhood Chain. It is **one account, one profile**, not two.

* **You link the second wallet from Settings.** The wallet being attached signs the link itself, so both sides prove control. One address per chain, per account.
* **Your account must already hold a [1EDGE Proof of Humanity](../index.md) pass before it can link anything.** Linking is permanent for the address attached: from then on that address can never be its own account and can never move to another one.
* **Replacing a linked wallet means unlinking it deliberately, then waiting seven days.** It is not a switch to flip on a whim.
* **The pass is per chain, one per human.** If you already hold one on Solana, activating your Robinhood side carries your tier across and costs no 1EDGE fee. See [The Proof of Humanity NFT](../introduction/proof-of-humanity.md).

> ⚠️ **One profile means one public record.** The same posts, trophies and season record are shown under each address you link, and anyone can see the addresses belong to the same person. Link a second wallet only if you are content for the two to be publicly connected.

> ⚠️ **Every wallet on your account controls the account.** Whoever holds any linked wallet can act as you. Secure both.

## Setting up your profile

* **Connect & verify**, connect your wallet and bind your [Proof of Humanity](../index.md) pass. That's what ties one account to one wallet on the platform, on the chain you signed in with.
* **Custom visuals**, upload an avatar and banner.
* **Bio & handle**, describe yourself or your project and claim a unique handle that others can `@`-mention across [Edge Social](edge-social-engine.md).

![A 1EDGE profile](../assets/app-profile.png)

## Verification marks

Next to a handle you'll see at most one small hexagon mark. Each one says exactly what was proved, nothing more:

![The four verification marks](../assets/verification-marks.png)

* **Silver hexagon**, one social account proved (X or Discord). It reads "Connected", not "Verified", and it names the account, so the claim is checkable.
* **Lilac ring**, two independent accounts linked. That is all it claims, it is **not** a proof of humanity.
* **Gold ring**, reserved for a future proof-of-humanity rung. Built, not yet issued.
* **Gold fill with the green-and-orange rim**, the official 1EDGE account, and only that. See [Make sure it's really us](../support/getting-help.md#make-sure-its-really-us).

## On-chain identity stamps

Linking an account does more than light up a mark. You're offered to **stamp it onto your on-chain record**, and the stamp is designed so it can't be gamed:

* **A stamp is keyed to the account, not the wallet.** The same X account can never back two wallets, the chain itself rejects the second attempt. That's enforced by Solana's runtime, not by our servers, so anyone can verify a stamp without trusting 1EDGE.
* **One provider, one stamp.** The mark counts independent pieces of evidence, linking the same kind of account twice adds nothing.
* **A stamp upgrades the record you hold**, it never mints a second identity.

> ℹ️ Marks can never be bought and never move with trading volume. Identity rank and [fee-rebate tiers](../rewards/tier-matrix.md) are deliberately separate axes.

## Related

* [Verified Ledger Performance](verified-metrics.md), the on-chain stats attached to every profile.
* [The Edge Social Engine](edge-social-engine.md), how profiles plug into the social layer.
