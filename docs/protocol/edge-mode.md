---
description: The simple, fixed-fee standard launch — set it and forget it.
---

# Edge Mode — <span class="g">Standard Launch</span> <img class="mode-icon" src="../../assets/edge-icon.svg" alt="">

**Edge Mode** is the standard 1Edge launch: a clean bonding-curve deployment with a simple, fixed fee structure and optional safety guardrails. It's built for creators who want a fair launch without configuring custom tokenomics.

## At a glance

| Parameter | Value |
| :--- | :--- |
| Deployment fee | **0.02 SOL** |
| Total trading fee (pre-bond) | **1.15%** |
| Trading fee (post-bond) | **Dynamic — scales 1.15% → 0.55%** with market cap |
| Graduation target | **85 SOL** on the bonding curve |
| Safety guardrails | Optional — wallet buy caps & trade cooldowns |
| Fee configurability | None (fixed — that's the point) |

## The fee breakdown

Every trade on an Edge-mode token carries a **1.15% total fee**, split three ways:

| Slice | Rate | Where it goes |
| :--- | :--- | :--- |
| **1Edge platform fee** | 0.55% | The house fee that funds the platform — and the slice your [tier rebate](../rewards/tier-matrix.md) discounts. |
| **Creator fee** | 0.40% | Paid to the token's deployer. |
| **LP compounding** | 0.20% | Compounds straight back into the token's liquidity, deepening the pool on every trade. |

> ℹ️ **Your tier rebates the platform fee.** Depending on your [tier](../rewards/tier-matrix.md), 10%–30% of the 0.55% platform fee is rebated back to you in SOL — so active traders pay less.

The same structure applies to buys and sells.

## Claiming your creator fee

The **0.40% creator fee** accrues to you on every trade, before and after graduation. It's yours to claim whenever you like from the **Creator Fees** section of your dashboard.

> ℹ️ Creator fees live under **Creator Fees** in the dashboard — not under "Edge Fees." That's the one place your earned creator revenue is tracked and claimed.

## How fees change after graduation

Edge mode uses a **dynamic, market-cap-aware fee** once a token graduates to Meteora. The total fee **starts at 1.15% and steps down as the token's market cap grows**, across five tiers:

| Market-cap tier | Total fee |
| :--- | :--- |
| 1 (smallest) | 1.15% |
| 2 | 1.00% |
| 3 | 0.85% |
| 4 | 0.70% |
| 5 (largest) | 0.55% |

> ℹ️ **Why it falls:** early on, a slightly higher fee compounds liquidity faster and discourages churn. As the token matures and deepens, the fee drops toward 0.55% — rewarding tokens that grow. See [The Meteora Graduation Protocol](meteora-graduation.md).

> ⚠️ Post-graduation, Meteora takes a **20% protocol cut** of trading fees, so the project receives roughly **80%** of each slice. Fees are therefore *close* to the bonding-curve rates, but not identical.

## Optional guardrails

Edge mode can still toggle the platform's on-chain protections at deployment:

* **Wallet buy caps** — cap how much any single wallet can accumulate during the bonding-curve phase (configurable from **1% to 3.5%** of supply).
* **Trade cooldowns** — enforce a delay (0–300s) between trades per wallet.

These apply **only during the bonding curve**. See [Wallet Buy Caps & Trade Cooldowns](../protection/buy-caps-and-cooldowns.md).

## The lifecycle

1. **Deploy** — pay the 0.02 SOL fee, set metadata, optionally toggle guardrails.
2. **Bonding curve** — buyers and sellers trade against a [virtual-token curve](meteora-graduation.md#the-virtual-token-model); the 1.15% fee applies, with 0.20% compounding into LP.
3. **Graduation** — at **85 SOL** the token migrates to Meteora, the dynamic market-cap fee takes over, and pre-graduation constraints lift. See [The Meteora Graduation Protocol](meteora-graduation.md).

## When to choose Edge mode

Choose Edge if you want a launch that's **simple, predictable, and trust-minimized** — fixed fees, no configuration, liquidity that deepens automatically, and a fee that falls as your token grows. If you want custom builder fees, programmatic buyback-and-burn, or accelerated LP compounding, use [EdgeTek Mode](edgetek-mode.md).
