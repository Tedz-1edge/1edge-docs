---
description: Every launch mode on 1EDGE and what it means for you. EDGE, EDGEtek, EDGEstocks, and 1EDGE launch vs open launch.
---

<span class="ed-eyebrow">Launch</span>

# Every mode, and what it means

<p class="ed-lead">Every coin on 1EDGE answers two questions: <strong>which mode</strong> (how its fees work) and <strong>where it trades</strong> (our curve, or an open pool on Meteora / Uniswap). The mode mark sits bottom-right on its picture; the ring around the picture tells you where it trades.</p>

<div class="ed-grid three">
<div class="ed-card"><img class="mark" src="../../assets/marks/mode-edge.svg" alt=""><span class="k">Mode</span><b>EDGE</b><span class="d">Fixed fees, nothing to set. Every trade deepens the coin's own pool. The default.</span></div>
<div class="ed-card"><img class="mark" src="../../assets/marks/mode-tek.svg" alt=""><span class="k tek">Mode</span><b>EDGEtek</b><span class="d">The creator sets the fees: builder fee, LP compound, and where offered, buyback &amp; burn or Stack. Locked at launch, forever.</span></div>
<div class="ed-card"><img class="mark" src="../../assets/marks/mode-stock.svg" alt=""><span class="k gold">Mode · Solana · Robinhood Chain</span><b>EDGEstocks</b><span class="d">A coin priced in a real, tokenised stock.</span></div>
</div>

## <img class="mark" src="../../assets/marks/mode-edge.svg" alt=""> EDGE { #edge }

The standard launch. **Fixed fees, nothing to configure and nothing to get wrong.**

- **0.2% LP compound on every trade** (not on Solana open launches, where Meteora takes its share instead). Every buy and every sell deepens the coin's own pool.
- Anti-bundle and sniper defence. Wallet cap and trade cooldown where the chain and venue take them.
- The creator can buy up to **5%** of supply at launch, in the same transaction.
- Launch fee: **$2**, paid in the chain's coin.

For you as a trader: the fee is the same on every EDGE coin. See [Fees](../trade/fees.md).

## <img class="mark" src="../../assets/marks/mode-tek.svg" alt=""> EDGEtek { #edgetek }

The configurable launch, in blue. The creator splits a fee budget between:

| Share | What it does |
|---|---|
| **LP compound** | Always on, at least 0.2%. Deepens liquidity on every trade, forever. |
| **Builder fee** | The creator's cut on every trade, split across up to 4 wallets. |
| **Buyback & burn** | Buys the coin back and burns it, automatically. |
| **Stack** | Pays holders pro-rata, in the coin itself (bought back after graduation) or in the chain's coin. |

- Burn and Stack fire each time a set amount builds up (1, 5, 10, 25 or 50 SOL on Solana).
- On a Solana open launch, Stack is offered on SOL and USDC pairs, and it pays on the curve too.
- **The fee structure is locked permanently at launch.** What the creator sets is what you pay, before and after graduation.
- The creator can buy up to **20%** of supply at launch.
- Launch fee: **$10**.

For you as a trader: check the fee on the coin's page before you buy. A Tek coin can cost more to trade than an EDGE coin.

## <img class="mark" src="../../assets/marks/mode-stock.svg" alt=""> EDGEstocks { #edgestocks }

Coins tied to a real, tokenised stock, on **Solana** and **Robinhood Chain**. Pink mark.

**On Solana:** an open launch on Meteora, priced in a tokenised stock (xStocks by Backed and Backpack stocks, for example TSLAx).

- Buys are paid in the stock, and sells pay out the stock.
- Total fee 3%: 1EDGE's 1%, a builder fee to up to 4 wallets, buyback & burn if the creator picks it, a holders share paid in the stock if the creator picks it, and LP compound for the rest. No Stack for now.

**On Robinhood Chain:** a small disc with the stock's logo sits next to the chain mark (*"Trades in $SYM"*).

- **On the 1EDGE curve, priced in the stock.** Buyers pay in the stock, sellers get it back, and it graduates to Uniswap v4. EDGE (fixed fees, the creator's 0.40% paid in the stock) or EDGEtek (builder fee, LP compound, buyback & burn if the creator picks it), every fee taken in the stock. Holders don't earn the stock.

Launch fee: **$10** on Solana, **$2** on Robinhood Chain (**$10** as EDGEtek). Full details: [EDGEstocks](stocks.md).

!!! note "Where you are matters"
    Stock launches and stock pairs aren't available in every country. See [Regions](../help/regions.md).

## Where it trades: 1EDGE launch or open launch

Every launch also picks a venue. The default is a 1EDGE launch.

| | **1EDGE launch** | **Open launch** |
|---|---|---|
| Before graduation | Trades only on 1edge.app, on our bonding curve | On Meteora (Solana) or a Uniswap v4 hook pool (Robinhood Chain, Arc) from the first trade. Indexed like any pool |
| Who can buy before graduation | Pass holders | Pass holders. The pool checks the pass on every buy |
| When buyers get the coin | At graduation | At once, it's in your wallet |
| Who can sell | Holders, on 1edge.app | Anyone, anywhere |
| Wallet-to-wallet transfers | n/a, you get the coin at graduation | Off until graduation |
| Trade cooldown | Optional | Off. One buy per slot / block instead |
| Launch shield | No | Yes: 75% that falls to the normal fee over 15 seconds |
| After graduation | Trades on Meteora / Uniswap like any coin | Same pool, no gate. Anyone can buy, sell and send |

<figure class="ed-shot"><picture><source media="(max-width: 600px)" srcset="../../assets/shots/launch-where-390.webp"><img src="../../assets/shots/launch-where-1440.webp" alt="The launch page's Where step: 1EDGE launch or open launch." loading="lazy"></picture><figcaption>The launch page's Where step: 1EDGE launch or open launch.</figcaption></figure>

How the gate works, the launch shield and the extra rules: [Open launches](open-launches.md). Every protection, with its icon: [Protections](protections.md).

## Graduation

Every coin fills a bonding curve to a fixed target, then graduates to a real pool:

| Chain | Target | Graduates to |
|---|---|---|
| <img class="mark" src="../../assets/marks/chain-sol.svg" alt=""> Solana | 85 SOL (USDC-priced open launches: 10,150 USDC) | Meteora |
| <img class="mark" src="../../assets/marks/chain-rh.svg" alt=""> Robinhood Chain | 4 ETH | Uniswap v4 |
| <img class="mark" src="../../assets/marks/chain-arc.svg" alt=""> Arc | 7,500 USDC | Uniswap v4 |

The liquidity is locked for good at graduation. More: [Graduation](graduation.md).

## Not a mode

You may have seen these elsewhere. On 1EDGE:

- **The contract address** is picked for you. Open launches get an address ending in `…EDGE` (EDGE) or `…1EDGE` (Tek); there's no creator-picked vanity address.
- **There's no lock toggle.** Graduated liquidity is always locked by the program.
