---
description: Open launches. Pass-gated hook pools on Meteora and Uniswap v4. What the pool checks on every trade, the launch shield, and launch rules.
---

<span class="ed-eyebrow">Launch</span>

# Open launches and launch rules

<p class="ed-lead">An open launch trades on a real pool from the first block: Meteora on Solana, a Uniswap v4 hook pool on Robinhood Chain and Arc. It's indexed like any pool, so terminals and screeners see it. Until graduation, the pool itself only lets pass holders buy.</p>

You tell an open launch apart by the **ring** around its picture: the Meteora ring on Solana, the Uniswap ring on Robinhood Chain and Arc. It keeps its EDGE or Tek mode mark. See [What the marks mean](../trade/marks.md#the-venue-ring).

## What the pool checks, every trade

The check lives in the pool: a transfer hook on the Solana token, a v4 hook on the EVM pool. It runs wherever the trade comes from: 1edge.app, a terminal, a bot.

### Buys, before graduation

| Check | What it means for you |
|---|---|
| **Pass** | You need a 1EDGE pass to buy. No pass, the buy fails. |
| **One wallet per person** | Your pass counts for one buying wallet, so one person can't split a buy across a farm of wallets. |
| **Opening grace** | Nobody buys in the very first moments: 10 slots on Solana, 2 blocks plus 4 seconds on Robinhood Chain and Arc. Only the creator's own launch buy lands in the launch transaction. |
| **One buy per slot / block** | A bundle can't land two buys in the same block. |
| **Wallet cap** | No wallet can hold more than the creator's cap (1% to 3.5% of supply) while the curve fills. On EVM it's counted per person. |
| **Launch shield** | A high early fee that falls to normal over 15 seconds. Below. |
| **Creator rules** | Anything else the creator switched on. Below. |

### Sells

**Anyone can sell, any time, anywhere.** No pass check. Only rules the creator set can slow a sell: a max per sell, a sell pace, or the dev lock on the creator's own bag.

### Transfers

**No wallet-to-wallet transfers until graduation.** Buy and sell through the pool; you can send the coin once it graduates.

### After graduation

The gate comes off. **Anyone can buy, sell and send.** On Solana the pool moves to Meteora DAMM v2; on Robinhood Chain and Arc it's the same Uniswap v4 pool, now ungated. Launch rules end at graduation.

## Launch shield

For the first **15 seconds** of an open launch, every buy and every sell pays a high fee. It starts at **75%** and steps down every second to the coin's normal fee. Snipers pay for being first; you don't have to race them.

On the trade ticket you'll see *Shield: 40% fee now · 1.2% in 6s*. The extra fee goes to 1EDGE. The creator's own launch buy is exempt.

1EDGE launches (our curve) don't have a shield. They have the pass, the opening grace and one buy per slot.

## Launch rules

The creator can add rules on top of the standard ones. Anything they pick shows on the coin's page under the shield pill, **can't be changed after launch, and ends at graduation.**

**Standard protection, on every launch:**

- **1EDGE pass to buy.** Buying needs a pass until graduation. Selling doesn't.
- **1 buy per block.** A bundle can't land two buys in the same block.
- **Curve buys can't be sandwiched.**
- Open launches add **No wallet-to-wallet** and **Launch shield (15 s)**.

**Rules a creator can add:**

| Rule | What it does |
|---|---|
| **Wallet cap** | Max per wallet, 1% to 3.5% of supply. |
| **Trade cooldown** | 0 to 300 seconds between trades per wallet. 1EDGE launches only. |
| **Max per sell** | No single sell bigger than 0.25% to 2% of supply. |
| **Rising wallet cap** | The cap starts small and opens up over time. |
| **Caps follow the curve** | The cap steps up at 25 / 50 / 75% of the curve. |
| **Sniper-fee cap** | Solana open launches: in the first minutes, buys with a priority fee + Jito tip above the cap (0.001 to 0.01 SOL) are refused. Default 0.002 SOL for 5 minutes. |
| **Reputation check** | In the first seconds, only passes older than a set age can buy, and optionally no wallet flagged as a serial sniper. |
| **Sell pace** | Limits how fast sells can land. |
| **Dev lock** | The creator can't sell or send until graduation or 30 days. |
| **Dev drip** | Solana: the creator can sell at most a set share of their bag per day. |
| **Must hold a token** | Robinhood Chain and Arc: buyers must hold another token first. |

The launch page groups them as *Slow the snipers*, *Slow the dumps*, *Dev bag*, *Buyer limits* and *Fees & rebates*, with presets: *Standard only*, *Anti-snipe*, *Anti-dump*, *Max protection*. Which rules a launch can carry depends on its chain and venue; the launch page only offers the ones that apply. **Solana 1EDGE-curve launches don't take creator rules yet**; they get them with the first upgrade.

On a coin's page, tap the **shield pill** to see *How this launch is protected*. Coins with extra rules carry the **Protected** mark on the board.

## What an open launch gives up

From the launch page, so creators know the trade-off:

- Meteora keeps 20% of every trading fee, plus 0.2% of the liquidity at graduation (Solana).
- No trade cooldown. One buy per slot, and the wallet cap still applies.
- No wallet-to-wallet transfers until graduation.
- **No refunds.** If a coin never graduates, holders exit by selling back to the curve.
- On Tek: buyback & burn, Stack and LP compound start after graduation.

## Fees on open launches

| Launch | Total | Split |
|---|---|---|
| Open EDGE, Solana | 1.2% | creator 0.40% · 1EDGE 0.56% · Meteora 0.24% |
| Open EDGE, Robinhood Chain / Arc | 1.2% | 1EDGE 0.60% · creator 0.40% · LP 0.20% |
| Open EDGEtek | 2, 3, 4 or 5% | 1EDGE 1% · builder fee up to 3.8% · LP compound the rest (min 0.2%) · burn / Stack |

Same fee before and after graduation. All fees: [Fees](../trade/fees.md).
