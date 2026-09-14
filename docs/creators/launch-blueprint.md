---
description: Step-by-step, from a blank form to a live, funded launch.
---

# The <span class="g">Launch Blueprint</span>

Deploying a token on 1EDGE is a guided, few-minute process. This is the end-to-end walkthrough.

## Before you start

You need a **verified-human wallet on the chain you're launching on**, every launch requires [Proof of Humanity](../index.md). If you haven't verified yet, do that first; it's the gate to creating (and trading) anything on 1EDGE.

## Step 1: Pick your chain

Launch on **Solana** or on **Robinhood Chain**. Choose it on the launch page before you fill anything in, because it sets what the rest of the form is denominated in: your deployment fee, your dev buy and the curve your token fills all sit in that chain's currency.

Everything else on this page is identical either way, the two modes, the guardrails, the caps, the fee rates. What differs is the currency, the graduation threshold, and the DEX at the end of the curve: [Meteora](../protocol/meteora-graduation.md) on Solana, [Uniswap v4](../protocol/robinhood-graduation.md) on Robinhood Chain.

You need a verified wallet **on the chain you're launching on**. If you're verified on Solana, activating your Robinhood side costs no 1EDGE fee, see [The Proof of Humanity NFT](../introduction/proof-of-humanity.md).

## Step 2: Token metadata

Set the basics that define your token:

* **Name & ticker**, how your token shows up everywhere on the platform.
* **Image**, the token's icon.
* **Description**, a short summary for the token page and [community](../social/edge-social-engine.md).

## Step 3: Social links

Attach your project's socials (X, Telegram, Discord, website). These appear on the token's terminal page and help real communities tell themselves apart from [vamp clones](../protection/security-toolkits.md).

## Step 4: Choose your launch framework

Pick the mode that fits your strategy:

* <img class="mode-icon" src="../../assets/edge-icon.svg" alt="">**[Edge Mode](../protocol/edge-mode.md)**, simple, fixed fees (0.02 SOL to deploy). Set it and forget it.
* <img class="mode-icon" src="../../assets/tek-icon.svg" alt="">**[EdgeTek Mode](../protocol/edgetek-mode.md){ .flip }**, advanced (0.5 SOL to deploy). Configure your fee budget across builder revenue, buyback-and-burn, BuyBack & Stack holder rewards, and extra LP compounding.

If you choose EdgeTek, this is where you set your fee structure, see [Best Practices](best-practices.md) for how to calibrate it.

## Step 5: Set your guardrails (optional)

Harden your launch against bots with the optional on-chain protections:

* **Wallet buy cap**, 1%–3.5% of supply per wallet during the curve.
* **Trade cooldown**, 0–300s between trades per wallet.

See [Wallet Buy Caps & Trade Cooldowns](../protection/buy-caps-and-cooldowns.md). Both apply only during the bonding curve.

## Step 6: Optional dev-buy

You can include a **dev-buy**, your own initial purchase, built into the deployment transaction (capped at 5% on Edge / 20% on EdgeTek). It's surfaced transparently to traders as a [tag](../terminal/transparency-tags.md), so use it deliberately.

## Step 7: Fund & deploy

Cover the deployment fee (0.02 SOL Edge / 0.5 SOL EdgeTek, or the same cost in ETH on Robinhood Chain) plus any dev-buy, and confirm. Your token goes live on its [bonding curve](../protocol/meteora-graduation.md#the-virtual-token-model) immediately.

## What happens next

1. Your token trades against its virtual-token curve, protected by your chosen guardrails.
2. As buyers fill the curve toward its threshold, **85 SOL** on Solana, momentum builds.
3. At the threshold it **graduates automatically**. On Solana: real SPL minted, a Meteora pool seeded, LP burned, vanity CA ending in `Edge`, see [The Meteora Graduation Protocol](../protocol/meteora-graduation.md). On Robinhood Chain: a Uniswap v4 pool with the liquidity locked in the migration contract, see [Graduation on Robinhood Chain](../protocol/robinhood-graduation.md).

## Related

* [Launch Engineering Best Practices](best-practices.md)
* [Edge Mode](../protocol/edge-mode.md) · [EdgeTek Mode](../protocol/edgetek-mode.md)
