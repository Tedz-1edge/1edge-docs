---
description: Open launches. Pass-gated hook pools on Meteora and Uniswap v4. What the pool checks on every trade, the launch shield, launch rules and Payback.
---

<span class="ed-eyebrow">Launch</span>

# Open launches and launch rules

<p class="ed-lead">An open launch trades on a real pool from the first block: Meteora on Solana, a Uniswap v4 hook pool on Robinhood Chain and Arc. It's indexed like any pool, so terminals and screeners see it. Until graduation, the pool itself only lets pass holders buy.</p>

You tell an open launch apart by the **ring** around its picture: the Meteora ring on Solana, the Uniswap ring on Robinhood Chain and Arc. It keeps its EDGE or Tek mode mark. See [What the marks mean](../trade/marks.md#the-venue-ring).

## What the pool checks, every trade

The check lives in the pool: a transfer hook on the Solana token, a v4 hook on the EVM pool. It runs wherever the trade comes from: 1edge.app, a terminal, a bot. Each protection with the icon you see on the site: [Protections](protections.md).

### Buys, before graduation

| Check | What it means for you |
|---|---|
| **Pass** | You need a 1EDGE pass to buy. No pass, the buy fails. |
| **One wallet per person** | Your pass counts for one buying wallet, so one person can't split a buy across a farm of wallets. |
| **Opening grace** | Nobody buys in the very first moments: 18 slots on Solana, 2 blocks plus 4 seconds on Robinhood Chain and Arc. Only the creator's own launch buy lands in the launch transaction. |
| **One buy per slot / block** | A bundle can't land two buys in the same block. |
| **Wallet cap** | No wallet can hold more than the creator's cap (1% to 3.5% of supply) while the curve fills. On EVM it's counted per person. |
| **Launch shield** | A high early fee that falls to normal over 15 seconds. Below. |
| **Creator rules** | Anything else the creator switched on. Below. |

### Sells

**Anyone can sell, any time, anywhere.** No pass check. Only rules the creator set can slow a sell: a max per sell, a sell pace, or the dev lock on the creator's own bag.

### Transfers

**No wallet-to-wallet transfers until graduation.** Buy and sell through the pool; you can send the coin once it graduates.

### After graduation

The gate comes off. **Anyone can buy, sell and send.** On Solana the pool moves to Meteora DAMM v2; on Robinhood Chain and Arc it's the same Uniswap v4 pool, now ungated. Launch rules end at graduation; [Payback](#payback) runs for the whole life of the coin.

## Launch shield

For the first **15 seconds** of an open launch, every buy and every sell pays a high fee. It starts at **75%** and steps down every second to the coin's normal fee. Snipers pay for being first; you don't have to race them.

On the trade ticket you'll see *Shield: 40% fee now · 1.2% in 6s*. The extra fee goes to 1EDGE. The creator's own launch buy is exempt.

1EDGE launches (our curve) don't have a shield. They have the pass, the opening grace and one buy per slot.

## Launch rules

The creator can add rules on top of the standard ones. Anything they pick shows on the coin's page under the shield pill, **can't be changed after launch, and ends at graduation.** [Payback](#payback) runs for the whole life of the coin.

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
| **Reputation check** | For the first minutes (up to 5), only passes older than a set age can buy, and optionally no wallet flagged as a serial sniper. |
| **Sell pace** | Limits how fast sells can land. |
| **Dev lock** | The creator can't sell or send until graduation or 30 days. |
| **Dev drip** | Solana: the creator can sell at most a set share of their bag per day. |
| **Must hold a token** | Robinhood Chain and Arc: buyers must hold another token first. |
| **Payback** | Robinhood Chain: dump on fresh buyers and you pay them. See [Payback](#payback). |

<figure class="ed-shot"><picture><source media="(max-width: 600px)" srcset="../../assets/shots/launch-rules-390.webp"><img src="../../assets/shots/launch-rules-1440.webp" alt="The Rules step on the launch page: groups and presets." loading="lazy"></picture><figcaption>The Rules step on the launch page: groups and presets.</figcaption></figure>

The launch page groups them as *Slow the snipers*, *Slow the dumps*, *Dev bag*, *Buyer limits* and *Fees & rebates*, with presets: *Standard only*, *Anti-snipe*, *Anti-dump*, *Max protection*. Which rules a launch can carry depends on its chain and venue; the launch page only offers the ones that apply. **Solana 1EDGE-curve launches don't take creator rules yet**; they get them with the first upgrade.

<figure class="ed-shot ed-phone"><img src="../../assets/shots/token-open-rules-390.webp" alt="How this launch is protected: every rule on the coin, live. Sample launch." loading="lazy" width="390"><figcaption>How this launch is protected: every rule on the coin, live. Sample launch.</figcaption></figure>

On a coin's page, tap the **shield pill** to see *How this launch is protected*. Coins with extra rules carry the **Protected** mark on the board.

## Payback

<p class="ed-lead">Dump on fresh buyers and you pay them.</p>

Payback is a rule a creator can switch on for an open launch on **Robinhood Chain** priced in ETH. Stock-priced launches don't take it. It is off unless the creator picks it, it can't be changed after launch, and it runs for the whole life of the coin, before and after graduation.

A sell that lands on fresh buying pays an extra fee, on chain, inside the same trade. The creator decides where that fee goes: to the buyers the sell hit, into the locked pool, or half to each. If you are one of those buyers, your share is paid to your wallet automatically, in ETH.

### Who pays

Anyone selling through the coin's pool, on any app, terminal or bot. The pool charges it inside the trade. Sells are never refused because of it: it adds a fee and nothing else.

- **It reads the market.** The pool counts the selling of the last 30 seconds against the buying it remembers.
- **Some selling is free.** Selling up to 25% of that buying pays nothing. Above that the rate climbs, and it reaches the strength's top rate at 75%.
- **A buy cancels selling.** Each buy takes its size off the selling the pool is counting.
- **An empty market is no escape.** A floor of 2.5% of the graduation target means a dump into no buyers still pays nearly the top rate.
- **A row of small sells doesn't help.** The pool charges on all the selling in the window, so ten small sells in a row pay what one big sell pays. Selling slowly, a little each window, or into real buying, is what pays less.
- A sell never pays more than the strength's top rate.

### Where it goes

The creator picks once, at launch. It holds for the whole life of the coin.

| Choice | Where it goes |
|---|---|
| **Buyers** | All of it goes to the buyers it hit, up to their caps. |
| **50/50** (the default) | Half goes to the buyers it hit, up to their caps. The rest is locked in the pool. |
| **Pool** | All of it is locked in the pool: deeper liquidity for everyone. No buyer is paid. |

The buyers' part is split across the buys in the sell's window, in proportion to what they bought. Only buys made before the sell earn from it. Anything past a buyer's cap, and any part with no buyer to take it, goes to the pool. Pool money joins the coin's liquidity after graduation, in a position no code can remove. Until then it waits. On a coin that never graduates, it stays in the fee contract.

### Who gets paid

You earn only if a sell lands in your buy's window. No sell, no payout.

- **Before graduation:** only pass holders can buy and earn. One share per pass per half-window, paid to the wallet on your pass that bought first in it.
- **After graduation:** the coin follows the tokens a buy delivered and pays the wallet they land in. See [Which routes earn](#which-routes-earn).
- The creator's own wallet and pass never earn a share.
- On a Payback coin, Payback is the reward: trades on it don't add tier rebates or referral share.

### When the money arrives

Your share is paid to your wallet automatically, in ETH, after your buy's window closes: about 30 to 46 s after the buy. You press nothing. 1EDGE's keeper sends it on its next pass and pays the gas.

- **Smart-contract wallet** (Safe, 4337 account) or any other contract: your share is credited, not sent. Collect it with one tap on the coin's page. A wallet that refuses the payment gets the same. A credit has its own 30 days from the day it lands. In a contract that lets anyone make calls through it, as some aggregator executors do, anyone can claim the credit.
- **A late payout:** Claim also appears on the coin's page. Anyone can send a due payout, and the money only goes to the wallet on record.
- **Under about 0.00001 ETH:** the payout waits until it adds up.
- **Unpaid after 30 days:** it goes to the locked pool.

The coin's page has a **Dumpers pay you** card with this wallet's buys on the coin, each marked *Window open*, *Due*, *Ready to claim*, *Paid*, *Credited*, *To the pool* or *Expired*. On a Pool coin the card reads **Dumpers pay the pool**, with nothing to claim.

### The hold rule

**Sell or move any of this coin from that wallet before the window closes and that buy's share goes to the pool. After it closes, nothing you do matters. Before graduation it counts every wallet on your pass.**

It covers any of the coin, not only the tokens from that buy, so a dumper's own recent buys go to the pool too. A late payout doesn't change it: the window is what counts. Each open buy on the coin's page shows the clock time to hold until. A buy made before graduation stays on the pass rule until its window closes, even if the coin graduates first.

### Which routes earn

After graduation, a buy on any app, terminal, aggregator or bot can earn if the tokens land in a wallet in that trade. The coin can only follow a delivery it can match exactly to that buy. 1edge.app, Uniswap's UniversalRouter and single-pool aggregator fills match.

These earn nothing. The buy still goes through, and its share goes to the pool.

| Route | Why |
|---|---|
| **Tokens kept inside Uniswap**, not delivered in the transaction | A buy that is never delivered can't be checked by the hold rule. If part is delivered, that part earns. |
| **A buy split across several pools** in one transaction | The coin can't match the delivery to that buy. |
| **A router that takes the tokens before swapping** | The coin can't match the delivery to that buy. |
| **A filler batching several users' buys** | The coin can't match the delivery to that buy. |
| **Tokens sent straight on into another pool** | The share is credited to that pool's contract, which can't collect. After 30 days it goes to the locked pool. |

**A second pool of the coin** pays and earns no Payback. Anyone can open one after graduation, on Uniswap v3 for example, and no contract can stop that without breaking normal transfers. The coin's locked liquidity stays in its own pool, and arbitrage between the two runs through that pool, where Payback applies.

### Strengths and caps

The creator picks a strength. 1EDGE sets the numbers, and the launch page shows them.

| | Light | Standard |
|---|---|---|
| **Top rate on a sell** | 3% | 5% |
| **Window** | 30 s | 30 s |
| **Your buy's window closes within** | 46 s | 46 s |
| **Half-window** | 15 s | 15 s |
| **Allowance memory** | 90 s | 2 min |
| **Cap before graduation**, EDGE launch | 2.4% (2.16% on a Buyers coin) | 2.4% |
| **Cap after graduation**, EDGE launch | 0.8% | 0.8% |
| **Cap after graduation**, EDGEtek | from 1.2%, by its fee | from 1.2%, by its fee |

A cap is the most a buy can earn, as a share of the buy. On EDGEtek they come from the coin's fee, and the coin's page shows its own numbers before and after graduation. The cap drops at graduation because anyone can buy from then on and a second wallet is free. On an EDGE launch, 0.8% stays below the 1.2% the buy paid in fees.

**The 0.1 ETH limit.** Earnings count up to 0.1 ETH of buying per half-window.

- **After graduation** it is per wallet and applied at payout, on the wallet that ends up with the tokens. It limits the total: a wallet's earnings in one half-window stop at its cap on 0.1 ETH of buying. More buying in the same half-window never lowers what that wallet has already earned. Tokens another buyer's trade delivers to that wallet count too.
- **Before graduation** it is per pass and applied at the buy: first buys count, and buying past the limit earns nothing in that half-window.

**The allowance memory.** The free allowance counts buying over the memory, averaged per window, so a buy just before a dump moves it by a third on Light and a quarter on Standard. A steady market keeps its allowance. The cost lands on small sells. On the launch trades we measured (Solana launches, scaled to Robinhood Chain's graduation target), small sells into net buying (under 5% of the buying) paid 0.17% on Light and 0.39% on Standard.

### What it does not stop

Payback charges a dump. It doesn't stop one. **An organised group with many wallets can avoid part of the fee.** Each number here is what the group gains, as a share of the dump, measured on EDGE launches. They come from sweeps and are not maximums.

**A dumper's friends buying just before a dump.** Up to about +0.1% of the dump, ahead of what the dumper could do alone: +0.0612% on the free grid (the group picks its own schedule), +0.096% on a wider simulated search, one cell +0.106% in real ETH.

**Rotation in waves.** Allies buy back a stash just before a dump, using one wallet per about 0.07 ETH of buying. The dump then sells in waves a few seconds apart into outside buying. Measured on a 2 ETH dump. "+ creator" means the creator is in the group and the creator's fee share comes back to it.

<!-- FOUNDER DECISION PENDING (DECISION4 item 2): these Light and Standard numbers are stated as measured; acceptance is being confirmed. Remove this comment when the note arrives. -->

| Outside buying, as a share of the dump | Light | Light + creator | Standard | Standard + creator |
|---|---|---|---|---|
| **1x** | +1.34% | +1.90% | +2.74% | +3.45% |
| **0.5x** | +0.20% | +0.92% | +1.35% | +2.35% |
| **0.3x** | loses | +0.37% | +0.45% | +1.50% |
| **0.1x** | loses | loses | loses | +0.89% |

A dumper who can wait needs no allies: selling slowly over an hour into steady outside buying keeps more than these plays.

**The same transaction.** If a buy's tokens are not delivered, another operation in that same transaction that takes exactly that amount can pick up its share: at most 0.8% of that undelivered buy. It comes from the pool, and the buyer loses nothing.

### Who can change it

A launched coin keeps its strength and its choice of where Payback goes. Nobody can change them. Settings for new launches change through the 3-of-4 Safe and a timelock. The delay read on Robinhood Chain on 4 Nov 2026 was 300 seconds (5 minutes). Anyone can read it: call `getMinDelay` on the timelock `0xccc773e9eb74ea4973bC927786fE5E880F596DAc`.

A payout brake can pause payouts and Claim. It can't touch sells or fees, and the time paused is added to the 30 days.

## What an open launch gives up

From the launch page, so creators know the trade-off:

- Meteora keeps 20% of every trading fee, plus 0.2% of the liquidity at graduation (Solana).
- No trade cooldown. One buy per slot, and the wallet cap still applies.
- No wallet-to-wallet transfers until graduation.
- **No refunds.** If a coin never graduates, holders exit by selling back to the curve. On a Solana open launch that goes 3 days with no trade, holders also share its LP fees.
- On Tek: LP compound and buyback & burn start after graduation, on every chain. Stack is offered too. On Robinhood Chain and Arc it starts after graduation. On Solana it is offered on SOL and USDC pairs, and it pays on the curve too.

## Fees on open launches

| Launch | Total | Split |
|---|---|---|
| Open EDGE, Solana | 1.2% | creator 0.40% · 1EDGE 0.56% · Meteora 0.24% |
| Open EDGE, Robinhood Chain / Arc | 1.2% | 1EDGE 0.60% · creator 0.40% · LP 0.20% |
| Open EDGEtek | 2, 3, 4 or 5% | 1EDGE 1% · builder fee up to 3.8% · LP compound the rest (min 0.2%) · buyback & burn · Stack (on Solana: SOL and USDC pairs) |

Same fee before and after graduation. All fees: [Fees](../trade/fees.md).
