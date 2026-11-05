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
| **Payback** | Robinhood Chain: a sell that lands on fresh buying pays an extra fee. See [Payback](#payback). |

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

- **It reads the market.** The pool counts the selling of the last 30 seconds (60 on Strong) against the buying it remembers.
- **Some selling is free.** Selling up to 25% of that buying pays nothing. Above that the rate climbs, and it reaches the strength's top rate at 75%.
- **A buy cancels selling.** Each buy takes its size off the selling the pool is counting.
- **An empty market doesn't lower the rate.** A floor of 2.5% of the graduation target means a dump into no buyers still pays nearly the top rate. Who gets that money is below.
- **A row of small sells doesn't help.** The pool charges on all the selling in the window, so ten small sells in a row pay what one big sell pays. Selling slowly, a little each window, or into real buying, is what pays less.
- A sell never pays more than the strength's top rate.

### Where it goes

The creator picks once, at launch. It holds for the whole life of the coin.

| Choice | Where it goes |
|---|---|
| **Buyers** | All of it is split among the buyers it hit, by what they bought. |
| **50/50** (the default) | Half is split among the buyers it hit, by what they bought. The rest is locked in the pool. |
| **Pool** | All of it is locked in the pool: deeper liquidity for everyone. No buyer is paid. |

The buyers' part is split across the buys in the sell's window, in proportion to what they bought. Only buys made before the sell earn from it. There is no limit on a buyer's share: a small buy alone in the window gets the whole buyers' part. Any part with no buyer to take it goes to the pool. Pool money joins the coin's liquidity after graduation, in a position no code can remove. Until then it waits. On a coin that never graduates, it stays in the fee contract.

### Who gets paid

You earn only if a sell lands in your buy's window. No sell, no payout.

- **Before graduation:** only pass holders can buy and earn. One share per pass per half-window, paid to the wallet on your pass that bought first in it.
- **After graduation:** the coin follows the tokens a buy delivered and pays the wallet they land in. See [Which routes earn](#which-routes-earn).
- Before graduation, no wallet on the creator's pass earns a share. After graduation only the creator's own wallet is excluded: any other wallet can earn, including one on the creator's pass.
- On a Payback coin, Payback is the reward: trades on it don't add tier rebates or referral share.

### When the money arrives

Your share is paid to your wallet automatically, in ETH, after your buy's window closes: about 30 to 46 s after the buy on Light and Standard, 60 to 91 s on Strong. You press nothing. 1EDGE's keeper sends it on its next pass and pays the gas.

- **Smart-contract wallet** (Safe, 4337 account) or any other contract: your share is credited, not sent. Collect it with one tap on the coin's page. A wallet that refuses the payment gets the same. A credit has its own 30 days from the day it lands. In a contract that lets anyone make calls through it, as some aggregator executors do, anyone can claim the credit.
- **A late payout:** Claim also appears on the coin's page. Anyone can send a due payout, and the money only goes to the wallet on record.
- **Under about 0.00001 ETH:** the payout waits until it adds up.
- **Unpaid after 30 days:** it goes to the locked pool.

The coin's page has a **Dumpers pay you** card with this wallet's buys on the coin, each marked *Window open*, *Due*, *Ready to claim*, *Paid*, *Credited*, *To the pool* or *Expired*. On a Pool coin the card reads **Dumpers pay the pool**, with nothing to claim.

### The hold rule

**Sell or move any of this coin from that wallet before the window closes and that buy's share goes to the pool. After it closes, nothing you do matters. Before graduation it counts every wallet on your pass.**

It covers any of the coin, not only the tokens from that buy, so a dumper's own recent buys from that wallet go to the pool too. One exception after graduation: a bag held as Uniswap claims can be sold with no coin leaving the wallet, and the hold rule doesn't see that sale. A late payout doesn't change it: the window is what counts. Each open buy on the coin's page shows the clock time to hold until. A buy made before graduation stays on the pass rule until its window closes, even if the coin graduates first.

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

### Strengths

The creator picks a strength. 1EDGE sets the numbers, and the launch page shows them.

| | Light | Standard | Strong |
|---|---|---|---|
| **Top rate on a sell** | 3% | 5% | 10% |
| **Window** | 30 s | 30 s | 60 s |
| **Your buy's window closes within** | 46 s | 46 s | 91 s |
| **Half-window** | 15 s | 15 s | 30 s |
| **Allowance memory** | 90 s | 2 min | 8 min |

**The allowance memory.** The free allowance counts buying over the memory, averaged per window, so a buy just before a dump carries a third of its weight on Light, a quarter on Standard and an eighth on Strong. A steady market keeps its allowance. The cost lands on small sells. On the launch trades we measured (Solana launches, scaled to Robinhood Chain's graduation target), small sells into net buying (under 5% of the buying) paid 0.17% on Light, 0.39% on Standard and 1.71% on Strong.

### What it does not stop

Payback charges a sell. It doesn't stop one, and it doesn't make every dumper lose. **A seller's other wallets count as buyers, so a seller can win some or all of the fee back on a Buyers coin, and up to half on a 50/50 coin.** On a Pool coin no wallet is paid. The numbers here come from sweeps on EDGE launches and are not maximums. They were measured on Light and Standard. Strong's fee is bigger and the rule is the same, so the same plays should be worth more in ETH there.

**A seller's own second wallet.** It buys just before the dump, holds until the window closes, is paid, then sells slowly. What the seller saves, after that wallet's own fees and price loss, as a share of the fee they would have paid alone:

| Other buying in the window | Buyers, Standard | Buyers, Light | 50/50, Standard | 50/50, Light | Pool |
|---|---|---|---|---|---|
| **None** | all of it | all of it | half | half | none |
| **A tenth of the dump** | about 55% | about 49% | about 15% | about 10% | none |
| **Half of the dump** | about 20% | about 11% | about 1% | none | none |
| **As big as the dump** | about 5% | about 1% | none | none | none |

In a quiet window a buy of 1 wei is enough. On a Buyers coin with nobody else buying, Payback is close to free for a seller who sets this up. Before graduation a second wallet on the same pass doesn't work, because the dump sends that pass's share to the pool. A friend's pass does: about 68% of the fee at best on a Buyers coin and about 24% on 50/50, on Standard, in a separate sweep with 0.05 ETH of other buying in the window. An empty window would give more.

**Wallets that buy just before someone else's sell.** Anyone can buy a little, hold through the window and collect. In a window with no other buyer that wallet gets the whole buyers' part, money that would otherwise have gone to the pool. A bot can run this blind with a buy of 1 wei every 30 seconds: it costs only gas, about 0.0005 ETH an hour at 0.02 gwei, before L1 data. When others are buying the share follows size, so a bigger buy takes the bigger share. On a just-graduated coin, if the price stays down until the window closes, a wallet that knows the sell is coming loses more to the price drop than it earns, unless its buy is tiny or the window is empty. On a deeper pool it can win: after 150 ETH of earlier buying, a 0.1 ETH wallet that knew about a 1 ETH dump made about 0.0175 ETH, and an honest 0.1 ETH buyer beside it was paid 0.0235 ETH instead of 0.047 ETH. The buy barely moves the seller's rate.

**Rotation in waves.** A wallet buys back a stash just before a dump, and the dump then sells in waves a few seconds apart into outside buying. Measured on a 2 ETH dump on a Buyers coin, as a share of the dump. "+ creator" means the creator is in the group and the creator's fee share comes back to it.

| Outside buying, as a share of the dump | Light | Light + creator | Standard | Standard + creator |
|---|---|---|---|---|
| **1x** | +1.27% | +1.79% | +2.77% | +3.48% |
| **0.5x** | +1.23% | +1.44% | +2.47% | +2.82% |
| **0.3x** | +1.43% | +1.64% | +2.80% | +3.01% |
| **0.1x** | +1.76% | +1.96% | +3.34% | +3.54% |

A Pool coin pays no wallet, but this play can still save the group up to about +1.91% of the dump there, from the outside buying and the waves.

**The same transaction.** If a buy's tokens are not delivered, another operation in that same transaction that takes exactly that amount can pick up its share, up to the whole buyers' part. It comes from the pool, and the buyer loses nothing.

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
