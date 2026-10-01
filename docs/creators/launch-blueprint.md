---
description: Step-by-step, from a blank form to a live, funded launch.
---

# The <span class="g">Launch Blueprint</span>

Deploying a token on 1EDGE is a guided, few-minute process. This is the end-to-end walkthrough.

## Before you start

You need a **wallet holding a pass on the chain you're launching on**, every launch requires [1EDGE Proof of Humanity](../index.md). If you haven't minted one yet, do that first; it's the gate to creating (and trading) anything on 1EDGE.

## Step 1: Pick your chain

Launch on **Solana** or on **Robinhood Chain**. Choose it on the launch page before you fill anything in, because it sets what the rest of the form is denominated in: your launch fee is paid in that chain's coin, and your dev buy and the curve your token fills sit in it too, unless you price your token in USDC or a stock.

Everything else on this page is identical either way, the modes, the guardrails, the caps, the fee rates. What differs is the currency, the graduation threshold, and the DEX at the end of the curve: [Meteora](../protocol/meteora-graduation.md) on Solana, [Uniswap v4](../protocol/robinhood-graduation.md) on Robinhood Chain.

You need a wallet holding a pass **on the chain you're launching on**. If you already hold one on Solana, activating your Robinhood side costs no 1EDGE fee, see [The Proof of Humanity NFT](../introduction/proof-of-humanity.md).

## Step 2: Token metadata

Set the basics that define your token:

* **Name & ticker**, how your token shows up everywhere on the platform.
* **Image**, the token's icon.
* **Description**, a short summary for the token page and [community](../social/edge-social-engine.md).

## Step 3: Social links

Attach your project's socials (X, Telegram, Discord, website). These appear on the token's terminal page and help real communities tell themselves apart from [vamp clones](../protection/security-toolkits.md).

## Step 4: Choose your mode, where it trades, and what it's priced in

**Your mode:**

* <img class="mode-icon" src="../../assets/edge-icon.svg" alt="">**[Edge Mode](../protocol/edge-mode.md)**, simple, fixed fees, $2 to launch. Set it and forget it.
* <img class="mode-icon" src="../../assets/tek-icon.svg" alt="">**[EdgeTek Mode](../protocol/edgetek-mode.md){ .flip }**, advanced, $10 to launch. Configure your fee budget across builder revenue, buyback-and-burn, BuyBack & Stack holder rewards, and extra LP compounding.
* **[EDGEstocks](../protocol/edgestocks.md)**, $10 to launch. Your token is priced in a tokenised stock, with a builder fee and buyback & burn taken in the stock. Not available in every country.

**Where it trades** (on chains where open launches are switched on):

* **1EDGE launch**, the curve trades only on 1edge.app and buyers receive your token at graduation.
* **[Open launch](../protocol/open-launches.md)**, your token is on Meteora from its first trade, visible on every terminal, and only pass holders can buy until it graduates. An EDGEstocks launch on Solana is always an open launch.

**What it's priced in:** SOL, or USDC on an open launch.

If you choose EdgeTek, this is where you set your fee structure, see [Best Practices](best-practices.md) for how to calibrate it.

## Step 5: Set your guardrails (optional)

Harden your launch against bots with the optional on-chain protections:

* **Wallet buy cap**, 1%–3.5% of supply per wallet during the curve.
* **Trade cooldown**, 0–300s between trades per wallet. Not available on open launches.

See [Wallet Buy Caps & Trade Cooldowns](../protection/buy-caps-and-cooldowns.md). Both apply only during the bonding curve.

## Step 6: Optional dev-buy

You can include a **dev-buy**, your own initial purchase, built into the deployment transaction (capped at 5% on Edge / 20% on EdgeTek). It's surfaced transparently to traders as a [tag](../terminal/transparency-tags.md), so use it deliberately.

## Step 7: Fund & deploy

Cover the launch fee ($2 Edge, $10 EdgeTek or EDGEstocks, paid at the live price in SOL, or in ETH on Robinhood Chain) plus any dev-buy, and confirm. Your token goes live on its bonding curve immediately: on [1EDGE's curve](../protocol/meteora-graduation.md#the-virtual-token-model), or on [Meteora](../protocol/open-launches.md) for an open launch.

## What happens next

1. Your token trades against its virtual-token curve, protected by your chosen guardrails.
2. As buyers fill the curve toward its threshold, **85 SOL** on Solana (10,150 USDC on a USDC open launch), momentum builds.
3. At the threshold it **graduates automatically**. On Solana: real SPL minted, a Meteora pool seeded, LP burned, vanity CA ending in `Edge`, see [The Meteora Graduation Protocol](../protocol/meteora-graduation.md). On Robinhood Chain: a Uniswap v4 pool with the liquidity locked in the migration contract, see [Graduation on Robinhood Chain](../protocol/robinhood-graduation.md). An open launch already has its token and its address ending in `EDGE` or `edge`; at 85 SOL (or 10,150 USDC) its liquidity moves into a locked Meteora pool and the pass gate lifts, see [Open Launches](../protocol/open-launches.md#graduation).

## Related

* [Launch Engineering Best Practices](best-practices.md)
* [Edge Mode](../protocol/edge-mode.md) · [EdgeTek Mode](../protocol/edgetek-mode.md) · [EDGEstocks](../protocol/edgestocks.md)
* [Open Launches](../protocol/open-launches.md)
