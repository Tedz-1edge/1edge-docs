---
description: How to launch a coin on 1EDGE. The six steps, launch fees, dev buy, copycat protection, the contract address.
---

<span class="ed-eyebrow">Launch</span>

# Launch a coin

<p class="ed-lead">Six steps, one signature. You need your 1EDGE pass on the chain you launch on. It's one per person and takes about a minute, and you come straight back to launch.</p>

## The steps

<div class="ed-steps" markdown>

1. **Chain.** Solana, Robinhood Chain or Arc. Each card shows its graduation target ("Bonds at 85 SOL").
2. **Identity.** Name, ticker, image, description, socials. 1EDGE checks the name, ticker and image for copycats as you type.
3. **Mode.** EDGE, EDGEtek or EDGEstocks. See [Every mode](modes.md).
4. **Where.** 1EDGE launch (our curve, the default) or open launch (Meteora / Uniswap from the first trade). For a Solana coin, also what it's priced in: SOL or USDC.
5. **Rules.** Wallet cap, cooldown, your dev buy, and any launch rules. See [Open launches and launch rules](open-launches.md#launch-rules).
6. **Review.** Supply (1,000,000,000), graduation target, the deployment cost, then **Deploy**.

</div>

## Launch fee

| Mode | Fee |
|---|---|
| EDGE | **$2** |
| EDGEtek | **$10** |
| EDGEstocks | **$10** |

Priced in dollars, paid in the chain's coin (SOL, ETH or USDC). Hover the price tag to see *About X SOL right now*. On Solana you also pay the rent for your coin's accounts. The review screen shows the total. Non-refundable.

## Your dev buy

You can buy your own coin in the same transaction that creates it, so your bag is secured before anyone else can buy.

- **EDGE: up to 5%** of supply. **EDGEtek: up to 20%.** Enforced on-chain, always.
- Your dev buy counts toward the graduation target.
- It shows on the coin's page as the dev's buy, with a `DEV` tag. Nobody's surprised.
- No dev buy on a Robinhood Chain launch priced in a stock, for now.

## Wallet cap and cooldown

These apply **before graduation only**. Once the coin graduates, they're gone.

- **Wallet buy cap:** max per wallet, 1% to 3.5% of supply. Default 3.5%.
- **Trade cooldown:** 0 to 300 seconds between trades per wallet, on buys and sells. 1EDGE launches only; open launches use one buy per slot instead.

## Copycat protection

Names, tickers and images are held **per chain**. While you fill in step 2, 1EDGE checks yours against other coins on that chain and holds it for you for 10 minutes while you finish. You'll see where it stands:

| State | Meaning |
|---|---|
| **Established** | Held for good by a coin that already made it. Pick another. |
| **Evaluating** | A coin with this name just graduated and is being looked at. |
| **Cooling** | A coin with this name is still on its curve. The hold runs out over time. |
| **Reserved** | Someone is launching with it right now. |

A ticker free on Solana can still be taken on Robinhood Chain or Arc.

## The contract address

You don't pick it. Open launches get an address from 1EDGE's bank: `…EDGE` for EDGE, `…1EDGE` for Tek and stocks. The review screen says *Token address · Shown after you deploy*.

## After you deploy

You get the coin's page, a share card and a pool link. On an open launch it reads *Your token trades on Meteora now* (or Uniswap). On a 1EDGE launch it trades on 1edge.app until it graduates.

**Creator fees:** your share of every trade builds up for you to claim from your dashboard, in the chain's coin. Fees after graduation keep coming. See [Fees](../trade/fees.md).

## Good launches

- **Say what it is.** A clear image, a real description, live socials. Buyers read the page.
- **Pick your mode on purpose.** EDGE is cheapest for traders. Tek only makes sense if the fees do something.
- **Be open about your bag.** A dev buy is fine; a hidden one isn't possible here anyway.
- **Use the rules.** A dev lock or a sell pace tells buyers you're staying.
- **Bring your people.** Share your coin's link and your referral link. Your referrals pay you 25% of the house fee on their trades. See [Referrals](../rewards/referrals.md).
