---
description: An open launch puts your token on Meteora from its first trade, visible on every terminal, while only 1EDGE pass holders can buy on the curve.
---

# Open Launches: <span class="g">On Meteora From Trade One</span>

An **open launch** creates your token straight on Meteora. It has a real contract address from its first trade, so DexScreener, Axiom, GMGN and the chart sites see it like any other Meteora token. What they can't do is buy it on the curve without a 1EDGE pass: until your token graduates, only pass holders can buy, wherever they trade.

It is an option on every launch type, beside the 1EDGE launch you already know. Nothing about the 1EDGE launch changes.

> **Solana first.** Open launches come to Solana first. Robinhood Chain and Arc follow, with Uniswap as the venue. Until open launches are switched on for a chain, its launch page offers the 1EDGE launch only.

## How you choose it

On the launch page, after you pick your chain:

1. **Pick your mode:** [Edge](edge-mode.md), [EdgeTek](edgetek-mode.md) or [EDGEstocks](edgestocks.md).
2. **Pick where it trades:** **1EDGE launch** (the curve trades only on 1edge.app) or **Open launch** (on Meteora from the first trade). An EDGEstocks launch on Solana is always an open launch.
3. **Pick what it's priced in:** **SOL** or **USDC**. USDC is for open launches only.

Then the rest of the form is the same: metadata, socials, wallet cap, dev buy, deploy. Your dev buy goes in the same transaction that creates the token.

## The gate: who can do what during the curve

| | During the curve |
| :--- | :--- |
| **Buy** | 1EDGE pass holders only, on 1edge.app and on any terminal that can route a Meteora transfer-hook swap. A wallet without a pass is refused by the token itself, wherever it tries. |
| **Sell** | Anyone holding the token, anywhere, at any time. Selling is never gated. |
| **Send to another wallet** | Locked until graduation. |
| **Hold** | Buyers hold your token in their own wallet the moment they buy. There is nothing to claim at graduation. |

On top of the pass, every open launch carries the same anti-bot rules on the curve:

* **One buy per pool per slot.** A second buy in the same slot is refused, so a bundle can't land several wallets at once.
* **A 10-slot grace.** No buys for the first 10 slots after the token is created. Your dev buy is in the creation transaction, so it is not affected.
* **Your wallet cap.** If you set one (1%–3.5% of supply), it binds every buy on the curve, from any terminal.
* **Launch shield (early fee).** On Solana open launches, Meteora's fee scheduler starts the fee at **50%** and lowers it every 10 seconds to the launch's normal fee at **minute 10**, on buys and sells. It makes buying in the first seconds and dumping on the first buyers an expensive trade: a sniper pays it going in and coming out. Sell after minute 10 and you never pay it on a sell. On Robinhood Chain and Arc it applies to buys only. It raises the cost of sniping; it doesn't stop every bot. Everyone trading in the first 10 minutes pays it; the ticket shows the live fee before you confirm.

> **There are no refunds.** If your token never graduates, holders exit by selling back to the curve, as on every 1EDGE launch.

## Fees

The launch fee is the same as a 1EDGE launch: **$2** for Edge, **$10** for EdgeTek and EDGEstocks, paid in SOL at the live price.

### Edge open launch: 1.2%

| Slice | Rate | Where it goes |
| :--- | :--- | :--- |
| **Creator fee** | 0.40% | You. You claim it from **Creator Fees** in your dashboard, straight from the pool. 1EDGE never holds it. |
| **1EDGE fee** | 0.56% | The house fee, and the slice your [tier rebate](../rewards/tier-matrix.md) applies to. |
| **Meteora** | 0.24% | Meteora's 20% of the trading fee. |
| **Total** | **1.20%** | On every buy and sell. |

After graduation the pool keeps a flat 1.2% fee, split the same way, and your creator share keeps coming. An Edge open launch does not step down with market cap the way an [Edge 1EDGE launch](edge-mode.md#how-fees-change-after-graduation) does.

### EdgeTek open launch: 2%, 3%, 4% or 5%

You pick a total fee from the ladder and split it as on any [EdgeTek](edgetek-mode.md) launch:

* **1EDGE fee**, 1.00%, fixed.
* **Builder fee**, up to 3.80%, routed to **up to 4 wallets**.
* **Buyback & burn** of your token.
* **Stack**, a share paid out to your holders pro-rata: in SOL, in USDC on a USDC launch, or in your token bought back on the market.
* **LP compound**, at least 0.20%. It takes whatever the other shares leave, so the split always adds up to the rung you picked.

Meteora keeps 20% of every slice, so each one delivers about 80% of its rate. The launch page shows the split net of Meteora's share before you deploy. Buyback & burn, Stack and LP compound start working after graduation; their share builds up until then. The total stays flat after graduation.

## Graduation

An open launch graduates at a fixed target:

* **SOL launches: 85 SOL**, the same as a 1EDGE launch.
* **USDC launches: 10,150 USDC.**

At the target the liquidity migrates into a Meteora DAMM v2 pool and is locked permanently: nobody can pull it, the creator and 1EDGE included. Meteora keeps 0.2% of the liquidity at migration. The gate lifts on its own: anyone can buy, transfers open, and your token trades like any other Meteora token.

## Your contract address

Every open launch gets a vanity contract address ending in **`EDGE`** or **`edge`**, from its first trade. The address never changes: the token that graduates is the token people bought on the curve.

## Reading the icon

A ring around a token's icon, in the venue's colours with the venue's logo in the gap, means the token trades on a public DEX: Meteora on Solana, Uniswap on Robinhood Chain and Arc. Open launches wear it from their first trade, and every graduated token wears it too.

A token turns **gold** for its first hour after graduating. After that it goes back to its mode's colour and keeps the crown.

## Open launch or 1EDGE launch

| | 1EDGE launch | Open launch |
| :--- | :--- | :--- |
| **Trades during the curve** | Only on 1edge.app | On Meteora, seen by every terminal |
| **Who can buy on the curve** | Pass holders | Pass holders |
| **Who can sell** | Holders, on 1edge.app | Anyone holding it, anywhere |
| **Buyers hold the token** | At graduation | At once |
| **Wallet-to-wallet transfers** | No token to send until graduation | Locked until graduation |
| **Trade cooldown** | Optional, 0–300s | Not available |
| **Launch shield (early fee)** | No | 50%, falling every 10 seconds to the base fee at 10 minutes, on buys and sells |
| **Priced in** | SOL | SOL or USDC |
| **Edge fee on the curve** | 1.15% | 1.2%, of which Meteora keeps 0.24% |
| **Contract address ends in** | `Edge` | `EDGE` or `edge` |
| **Refunds** | None | None |

**What an open launch gives up:** Meteora's 20% of every trading fee and 0.2% of the liquidity at graduation; the trade cooldown; wallet-to-wallet transfers until graduation. **What it gets:** your token is on every terminal and every chart from its first trade, and only humans with a pass can buy the curve.

## Rewards on open launches

Open launches count exactly like 1EDGE launches:

* Your [tier rebate](../rewards/tier-matrix.md) applies to the 1EDGE fee you pay.
* A [referrer](../rewards/referral-engine.md) earns 25% of the 1EDGE fee on their referees' trades.
* Your volume counts toward your tier and toward [Seasons](../rewards/seasons.md).

A USDC trade is valued at the SOL price when it happened, and its rebate or referral share is paid in SOL.

## Related

* [Edge Mode](edge-mode.md) · [EdgeTek Mode](edgetek-mode.md) · [EDGEstocks](edgestocks.md)
* [The Meteora Graduation Protocol](meteora-graduation.md), the 1EDGE launch path on Solana
* [Wallet Buy Caps & Trade Cooldowns](../protection/buy-caps-and-cooldowns.md)
