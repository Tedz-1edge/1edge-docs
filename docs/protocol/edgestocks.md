---
description: EDGEstocks launches a token priced in a tokenised stock. The curve, the pool and the fees are all in the stock.
---

# EDGEstocks: <span class="g">Priced in a Stock</span>

An **EDGEstocks** launch prices your token in a tokenised stock instead of SOL or ETH. Buyers pay in the stock, sellers are paid in the stock, the curve fills in the stock, and the pool your token graduates into pairs it with the stock.

It is its own launch mode, beside [Edge](edge-mode.md) and [EdgeTek](edgetek-mode.md). On the launch page it has its own card: pick it, then pick the stock.

> **Not available everywhere.** EDGEstocks is not available in the United States, the United Kingdom, Canada, Switzerland, Australia, the United Arab Emirates, or any sanctioned country. The stocks themselves are not offered there by their issuers, and the launch page will not let you pick one from those places.

## Which stocks, on which chain

| | Robinhood Chain | Solana |
| :--- | :--- | :--- |
| **The stocks** | Robinhood's stock tokens | xStocks, such as TSLAx |
| **Where your token trades** | A 1EDGE launch: on 1edge.app during the curve, then a Uniswap v4 pool paired with the stock | An [open launch](open-launches.md): on Meteora, paired with the stock, from the first trade |
| **During the curve** | Pass holders buy; positions are delivered at graduation | Pass holders buy; buyers hold the token at once; anyone can sell; no wallet-to-wallet transfers until graduation |

The launch page lists only the stocks that are open for launches right now.

## What it costs

**$10 to launch**, paid in the chain's coin at the live price: SOL on Solana, ETH on Robinhood Chain. Your dev buy is in the stock, so hold some of it before you deploy.

## Fees

Every fee on an EDGEstocks launch is taken in the stock.

* **Builder fee**, routed to **up to 4 wallets**, as on EdgeTek.
* **Buyback & burn** of your token, as on EdgeTek.
* **LP compound, at least 0.20%,** like every 1EDGE launch: during the curve it stays in the pool and seeds the graduated pool, then it keeps compounding into the pool's liquidity.
* **No Stack.** It isn't offered on a stock launch.

You set the split on the launch page, and the page shows every line, the 1EDGE fee included, before you deploy. On Solana the total is 2%, 3%, 4% or 5%, the same ladder as an EdgeTek open launch, and Meteora keeps 20% of each slice.

## The stock's issuer has powers you should know about

A tokenised stock is issued by a company that can **pause** or **freeze** it. If the issuer pauses a stock, trading against it can stop everywhere, 1EDGE included, until the issuer lifts it, and new launches priced in that stock are switched off. That is a property of the stock, not of 1EDGE, and nobody at 1EDGE can override it.

## Prices and dollars

Your token's price, market cap and chart are drawn in the stock. Dollar figures appear beside them whenever the stock has a live price. On Solana, an xStock's balance can change with splits and dividends; the page reads the live figure, so what you see matches your wallet.

## Rewards on stock trades

| | On a stock trade |
| :--- | :--- |
| **Tier rebate** | None. Stock trades pay no tier rebate. |
| **Tier level** | Counts. Stock volume, valued in US dollars, counts toward your tier, and the higher rebate it earns applies to your non-stock trades. |
| **Referrals** | Counts. Your referrer's 25% share is paid in SOL on Solana or ETH on Robinhood Chain, never in the stock. |
| **[Seasons](../rewards/seasons.md)** | Counts. Stock volume is valued in US dollars, like USDC trades. |

Rebates and referral rewards are never paid in a stock.

## Related

* [Open Launches](open-launches.md), how a Solana stock launch trades
* [EdgeTek Mode](edgetek-mode.md), builder routing and buyback & burn
* [The Account Tier Matrix](../rewards/tier-matrix.md)
