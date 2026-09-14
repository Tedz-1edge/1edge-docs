---
description: The soulbound, on-chain credential you earn by passing the 1EDGE Proof of Humanity check, on either chain, your gate into 1EDGE.
---

# The 1EDGE Proof of <span class="g">Humanity NFT</span>

The **1EDGE Proof of Humanity NFT** is the foundation of everything on 1EDGE. It's the on-chain record that a wallet was claimed by someone who passed our checks, **one wallet, one pass**, and it's the gate to launching, trading, and earning on the platform.

## What it is

A single NFT, minted to your wallet, that records it **passed our checks**. It isn't a collectible to flip or a financial product, it's a utility credential that opens the platform and binds that record to your wallet.

> ✅ **One wallet. One pass. Soulbound on-chain.** Binding the pass permanently to a single wallet makes bot swarms and multi-wallet farms far more expensive and far harder to run, that's the core of 1EDGE's protection, layered with the anti-bundle, buy-cap and behavioural defences.

## It's soulbound

The Proof of Humanity NFT is **soulbound**, permanently bound to the wallet that minted it. It **cannot be transferred, sold, or moved** to another wallet.

That's deliberate: if a pass could be bought or traded, it would be worthless. Soulbinding means the work one wallet paid to get through can't be handed to a bot farm.

## How you get it

1. **Pass the 1EDGE Proof of Humanity check.** Four gates, in order. The hands-on part takes about a minute; the rest you never see. **No social account required**, you don't connect X or anything else.
2. **Mint your NFT.** Once you've passed, mint the NFT to your wallet.

## What the check actually is

Four layers, cheapest first, and every mint passes all of them.

* **A bot filter.** A Cloudflare Turnstile check on the page. It's the fast, cheap layer that turns away crude automation, and on its own it is beatable, which is exactly why it is first and not last.
* **A challenge scored on how you move.** You drag through a set of checkpoints without lifting off, and what's graded is the movement, not the destination. There is no answer to look up, share or resell, and a script that arrives at the end instantly fails for arriving instantly. This is the gate that matters.
* **Work your machine has to do.** Silent: no screen, no progress bar, nothing to fail. Your browser burns a little compute before the mint is signed. A person pays it once and never notices it happened. Someone minting a list of wallets pays it on every wallet, and the cost climbs for a client that keeps coming back.
* **One pass per wallet, written on-chain.** The record is created by the program itself, so a second mint against the same wallet cannot be written at all. It isn't a database check a fast attacker can race, it's the chain refusing.

**Failed attempts count too.** Every attempt is recorded against a hashed network identifier, not just the ones that succeed. A farm that fails the movement challenge over and over from one machine has told us more about itself than a farm that never tries, and that feeds the [sybil grouping](../support/what-we-track.md#one-person-one-wallet). Failure makes a farm visible rather than invisible.

> ℹ️ **Why it's scored on movement.** The first version of this check asked questions drawn from a fixed pool, with free retries. A fixed pool plus free retries is a lookup table, and it was treated as one: **233 mint vouchers came out of it** before it was pulled. Movement has no answer key, so there is nothing to build a table from. We'd rather tell you that than imply the gate was right the first time.

> ⚠️ **What this does not claim.** It does not prove humanity, and we won't tell you it can't be beaten. It's one pass per **wallet**, not one per person, and one determined human can go through it more than once. What it changes is the economics: every extra wallet costs real time, real compute and a challenge with nothing to copy, and every failure on the way makes a farm easier to see. Expensive and visible, not impossible. The same honesty applies to everything else we measure, see [What We Track, and Why](../support/what-we-track.md).

**1EDGE Proof of Humanity is ours.** Not a standard we claim to meet, not a third party we lean on, a set of checks we built, we run, and we keep changing. It does not prove humanity and we have never said it does. What it does is make a farm pay for every single wallet it wants, and leave a trail while it pays. Each version of it has seen more of what farms actually do than the version before, and this one will not be the last. When a new layer earns its place, it goes inside 1EDGE Proof of Humanity rather than replacing it.

**Running alongside, but not part of the gate.** While you use 1EDGE, presence scoring measures the shape of your session, pointer and typing rhythm and never content, scored on our server and never leaving it. It is **not** one of the four gates above and it blocks nobody from minting. It's there to raise alerts about wallets that look automated. See [What We Track, and Why](../support/what-we-track.md#presence-the-one-people-ask-about).

> ℹ️ 1EDGE doesn't publish the thresholds, the scoring, the retry limits or the timings behind any of this. Naming the exact height of each wall only tells a farmer which one to climb.

## What it costs

These are the Solana figures. On Robinhood Chain the pass is priced in ETH and, as above, 1EDGE waives its fee entirely for anyone already verified on Solana.

You pay a small one-time cost to mint. **Only 0.02 SOL goes to 1EDGE**, the rest is standard Solana network cost (account rent) plus a one-time on-chain referral account:

| Item | Approx. cost | Goes to |
| :--- | :--- | :--- |
| **1EDGE mint fee** | **0.02 SOL** | 1EDGE |
| Solana account rent | ~0.02 SOL | The Solana network (your accounts) |
| On-chain referral record (one-time) | ~0.001 SOL | The Solana network |
| **Total (estimated)** | **~0.045 SOL** |, |

> ℹ️ The headline price is **0.02 SOL to 1EDGE**. The total of ~0.045 SOL just reflects Solana's own rent and the one-time referral account created on-chain, those aren't fees 1EDGE collects.

## One human, one pass per chain

1EDGE runs on two chains, and the pass lives on-chain, so there is one on each: a soulbound NFT on Solana, and a soulbound ERC-721 on Robinhood Chain. Same art, same tier, same rules, and both are bound to your one account.

**If you're already verified on Solana, the second one is not a second verification.** You don't pass the check again and 1EDGE charges you nothing for it: your tier carries across and the mint fee is waived. You pay the network's gas for the transaction, and that is all.

Starting on Robinhood Chain instead works the same way in reverse: you verify once, there, and that account is the verified one.

> ℹ️ **It is still one human, one pass.** Two passes on two chains is one person holding their credential on both, not two identities. Which is why each is soulbound and why linking is permanent, see [Profiles & Handles](../social/profiles-and-identity.md).

## What it grants

Holding the Proof of Humanity NFT gives you:

* **Full platform access**, the gate to launch tokens and trade on 1EDGE.
* **Your account tier**, the NFT carries your [tier](../rewards/tier-matrix.md) (Core → Seed), which sets your fee rebate and point multiplier and updates on-chain as you grow.
* **Fee rebates**, every tier rebates a share of the trading fees you pay.
* **Your referral link**, earn [25% of the platform fee on referred wallets' trades](../rewards/referral-engine.md).

## Upgrading your tier is free

As you hit each [tier](../rewards/tier-matrix.md) threshold, you upgrade your NFT to the next tier at **no cost**, there's no fee to climb. Just reach the milestone and upgrade.

> ℹ️ The only thing you pay on an upgrade is the **standard Solana network transaction fee**, a negligible fraction of a SOL (a tiny fraction of a cent), the same as any on-chain action. 1EDGE charges nothing to level up.

## Related

* [The Account Tier Matrix](../rewards/tier-matrix.md), how your NFT tier evolves.
* [The Referral Fee-Share Engine](../rewards/referral-engine.md)
* [The Broken State of Solana Launches](the-problem.md), why humanity verification matters.
