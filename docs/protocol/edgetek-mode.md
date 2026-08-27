---
description: The advanced framework, configurable builder, burn, and liquidity fees on a single deploy.
---

# EdgeTek Mode: <span class="o">Advanced Custom Architecture</span> <img class="mode-icon" src="../../assets/tek-icon.svg" alt="">

**EdgeTek Mode** is the advanced launch framework for creators who want to engineer their token's economics. On top of a fixed 1Edge platform fee, it gives the deployer a **configurable fee budget** to route across builder revenue, buyback-and-burn, and accelerated liquidity compounding, and that structure carries through after the token graduates to a DEX.

## At a glance

| Parameter | Value |
| :--- | :--- |
| Deployment fee | **0.5 SOL** |
| 1Edge platform fee | **1.00%** (fixed) |
| Builder / routing fee | up to **3.80%** (configurable) |
| LP compounding | from **0.20%** (configurable up) |
| Buyback & burn | configurable (within the routing budget) |
| Graduation target | **85 SOL** on the bonding curve |

## The fee structure

An EdgeTek token's total fee is built from a fixed platform slice plus a configurable budget the deployer designs:

| Slice | Rate | Notes |
| :--- | :--- | :--- |
| **1Edge platform fee** | **1.00%** | Fixed. The slice your [tier rebate](../rewards/tier-matrix.md) discounts. |
| **Builder / routing fee** | **up to 3.80%** | Configurable. Routed across the deployer's chosen destinations. |
| **LP compounding** | **0.20% minimum** | Always present; the deployer can raise it from the routing budget. |
| **Buyback & burn** | configurable | A share of the routing budget allocated to on-chain buyback-and-burn. |

> ℹ️ The **0.20% LP compounding minimum is always preset** on every launch, Edge or EdgeTek. EdgeTek simply lets you raise it and add other streams on top.

## Designing your fee budget

The deployer has **up to 3.80%** of configurable fee to allocate however their strategy demands. It can all go to one destination, or be split across several:

* **Builder revenue**, routed to a deployer vault you specify (your direct, automated income stream in SOL).
* **Buyback & burn**, a programmatic on-chain burn that permanently reduces supply and adds constant buy pressure.
* **Extra LP compounding**, accelerate liquidity depth beyond the 0.20% base.

| Strategy | Builder | Buyback & burn | Extra LP |
| :--- | :--- | :--- | :--- |
| **Revenue-focused** | high |, |, |
| **Deflationary** |, | high | low |
| **Deep-liquidity** | low | low | high |
| **Balanced** | split evenly across all three | | |

> ⚠️ **Total fee load matters.** A 1.00% platform fee plus a maxed 3.80% routing budget is a high per-trade cost that can deter trading. Calibrate to your goals and your community. See [Launch Engineering Best Practices](../creators/best-practices.md).

### Setting your buyback threshold

When you allocate fees to buyback & burn, you also set a **SOL buyback threshold**, the balance the buyback vault must accumulate before it fires. Choose from **5, 10, 25, or 50 SOL**. The moment saved-up buyback fees reach your chosen level, the program **automatically buys back and burns** tokens with the vault, then resets and starts saving again.

A lower threshold (5 SOL) means frequent, smaller burns; a higher one (50 SOL) means rarer, larger ones. It's your call on how aggressive, and how visible, you want the deflation to be.

## Claiming & automation

EdgeTek splits into one stream you control and two that run themselves:

* **Builder / routing fees, claimable.** Your custom wallet-routing fees accrue to your vault and are claimable from the dashboard. **After graduation, they're claimed automatically** for you.
* **LP compounding, autonomous.** Runs on its own, compounding into the liquidity pool on every trade.
* **Buyback & burn, autonomous.** Fires automatically whenever the vault hits your [buyback threshold](#setting-your-buyback-threshold), no action needed.

### The Tek Fees dashboard

Everything is visible under **Tek Fees** in your dashboard, the full history of your token's fees: **how much** has been generated, **where it's been routed**, and the **amount bought back and burned**. It's the live view of your flywheel working.

## After graduation

Unlike Edge mode's market-cap-scaling fee, an EdgeTek token's configured fee structure **stays flat** after it graduates to Meteora, the levers you set persist for the life of the token.

> ⚠️ As with all graduated tokens, Meteora takes a **20% protocol cut** of trading fees post-migration, so each stream delivers roughly **80%** of its configured rate. The structure is **close to the pre-bond rates, but not identical**. See [The Meteora Graduation Protocol](meteora-graduation.md).

## Guardrails still apply

Like Edge mode, EdgeTek launches can enable [wallet buy caps and trade cooldowns](../protection/buy-caps-and-cooldowns.md) at deployment, both active only during the bonding curve.

## The lifecycle

1. **Deploy**, pay the 0.5 SOL framework fee, configure your fee budget (builder / buyback / LP), set metadata and guardrails.
2. **Bonding curve**, the token trades against a [virtual-token curve](meteora-graduation.md#the-virtual-token-model) with your configured fees active.
3. **Graduation**, at **85 SOL** the token migrates to Meteora and your fee structure persists (less Meteora's 20% cut).
