---
description: The advanced framework, configurable builder, burn, and liquidity fees on a single deploy.
---

# EdgeTek Mode: <span class="o">Advanced Custom Architecture</span> <img class="mode-icon" src="../../assets/tek-icon.svg" alt="">

**EdgeTek Mode** is the advanced launch framework for creators who want to engineer their token's economics. On top of a fixed 1EDGE platform fee, it gives the deployer a **configurable fee budget** to route across builder revenue, buyback-and-burn, BuyBack & Stack holder rewards, and accelerated liquidity compounding, and that structure carries through after the token graduates to a DEX.

## At a glance

| Parameter | Value |
| :--- | :--- |
| Deployment fee | **0.5 SOL** |
| 1EDGE platform fee | **1.00%** (fixed) |
| Builder / routing fee | up to **3.80%** (configurable) |
| LP compounding | from **0.20%** (configurable up) |
| Buyback & burn | configurable (within the routing budget) |
| BuyBack & Stack | configurable (within the routing budget) |
| Graduation target | **85 SOL** on the bonding curve |

## The fee structure

An EdgeTek token's total fee is built from a fixed platform slice plus a configurable budget the deployer designs:

| Slice | Rate | Notes |
| :--- | :--- | :--- |
| **1EDGE platform fee** | **1.00%** | Fixed. The slice your [tier rebate](../rewards/tier-matrix.md) discounts. |
| **Builder / routing fee** | **up to 3.80%** | Configurable. Routed across the deployer's chosen destinations. |
| **LP compounding** | **0.20% minimum** | Always present; the deployer can raise it from the routing budget. |
| **Buyback & burn** | configurable | A share of the routing budget allocated to on-chain buyback-and-burn. |
| **BuyBack & Stack** | configurable | A share of the routing budget that buys tokens back and airdrops them pro-rata to holders. |

> ℹ️ The **0.20% LP compounding minimum is always preset** on every launch, Edge or EdgeTek. EdgeTek simply lets you raise it and add other streams on top.

## Designing your fee budget

The deployer has **up to 3.80%** of configurable fee to allocate however their strategy demands. It can all go to one destination, or be split across several:

* **Builder revenue**, routed to a deployer vault you specify (your direct, automated income stream in SOL).
* **Buyback & burn**, a programmatic on-chain burn that permanently reduces supply and adds constant buy pressure.
* **BuyBack & Stack**, fees accumulate in a dedicated Stack vault; at your trigger threshold the program **buys tokens on the market and distributes them pro-rata to current holders**. Buy pressure plus a holder reward in one mechanism.
* **Extra LP compounding**, accelerate liquidity depth beyond the 0.20% base.

> ✅ **Immutable by design.** Burn and Stack are separate on-chain allocations fixed at deployment, each with its own publicly visible vault. A creator can't quietly redirect burn fees into airdrops (or anything else) after launch.

| Strategy | Builder | Buyback & burn | BuyBack & Stack | Extra LP |
| :--- | :--- | :--- | :--- | :--- |
| **Revenue-focused** | high | none | none | none |
| **Deflationary** | none | high | none | low |
| **Holder-rewards** | none | none | high | low |
| **Deep-liquidity** | low | low | none | high |
| **Balanced** | split evenly across the streams | | | |

> ⚠️ **Total fee load matters.** A 1.00% platform fee plus a maxed 3.80% routing budget is a high per-trade cost that can deter trading. Calibrate to your goals and your community. See [Launch Engineering Best Practices](../creators/best-practices.md).

### Setting your Burn and Stack triggers

When you allocate fees to buyback & burn or BuyBack & Stack, you also set a **SOL trigger threshold**, the balance a vault must accumulate before it fires. Choose from **1, 10, 25, or 50 SOL**. The moment a vault reaches that level, the program acts automatically, buying back and burning for the Burn vault, or buying and distributing to holders for the Stack vault, then resets and starts saving again.

A lower threshold (1 SOL) means frequent, smaller events; a higher one (50 SOL) means rarer, larger ones. It's your call on how aggressive, and how visible, you want each mechanism to be.

> ℹ️ Burn and Stack share a **single trigger level**: if you enable both, the same threshold applies to both vaults (each vault still accumulates and fires independently).

## Claiming & automation

EdgeTek splits into one stream you control and three that run themselves:

* **Builder / routing fees, claimable.** Your custom wallet-routing fees accrue to your vault and are claimable from the dashboard. **After graduation, they're claimed automatically** for you.
* **LP compounding, autonomous.** Runs on its own, compounding into the liquidity pool on every trade.
* **Buyback & burn, autonomous.** Fires automatically whenever the Burn vault hits your [trigger threshold](#setting-your-burn-and-stack-triggers), no action needed.
* **BuyBack & Stack, autonomous.** When the Stack vault hits your [trigger threshold](#setting-your-burn-and-stack-triggers), tokens are bought and airdropped pro-rata to every current holder, automatically.

### The Tek Fees dashboard

Everything is visible under **Tek Fees** in your dashboard, the full history of your token's fees: **how much** has been generated, **where it's been routed**, the **amount bought back and burned**, and every **Stack payout** distributed to holders. It's the live view of your flywheel working.

## After graduation

Unlike Edge mode's market-cap-scaling fee, an EdgeTek token's configured fee structure **stays flat** after it graduates to Meteora, the levers you set persist for the life of the token.

> ⚠️ As with all graduated tokens, Meteora takes a **20% protocol cut** of trading fees post-migration. The cut comes off **every fee route equally**, the 1EDGE platform fee and each of your routing destinations included, so each stream delivers roughly **80%** of its configured rate to its recipient. The structure is **close to the pre-bond rates, but not identical**. See [The Meteora Graduation Protocol](meteora-graduation.md).

## Guardrails still apply

Like Edge mode, EdgeTek launches can enable [wallet buy caps and trade cooldowns](../protection/buy-caps-and-cooldowns.md) at deployment, both active only during the bonding curve.

## The lifecycle

1. **Deploy**, pay the 0.5 SOL framework fee, configure your fee budget (builder / burn / Stack / LP), set metadata and guardrails.
2. **Bonding curve**, the token trades against a [virtual-token curve](meteora-graduation.md#the-virtual-token-model) with your configured fees active.
3. **Graduation**, at **85 SOL** the token migrates to Meteora and your fee structure persists (less Meteora's 20% cut).
