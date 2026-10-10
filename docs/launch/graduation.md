---
description: The bonding bar and graduation. Targets per chain, where liquidity goes, and what changes for you.
---

<span class="ed-eyebrow">Launch</span>

# The bonding bar and graduation

<p class="ed-lead">Every coin starts on a bonding curve. When the curve fills to its target, the coin graduates to a real pool and its liquidity is locked for good.</p>

## Reading the bar

The bar on every coin's page is 20 blocks, 5% each. The one filling now blinks.

| You see | Meaning |
|---|---|
| **BONDING** · *12.4 SOL to go* | The curve is filling. |
| **ALMOST THERE** (gold) | 90% or more. |
| **Moving to Meteora…** / **Moving to Uniswap…** | The coin is graduating right now. |
| **Trading on Meteora** / **Trading on Uniswap** | Graduated. Tap it to open the pool. The bar stays gold for a few minutes. |

On the board a graduated coin wears a **gold crown** and, for its first hour, a gold ring. See [What the marks mean](../trade/marks.md).

## Targets

| Chain | Target | Graduates to |
|---|---|---|
| <img class="mark" src="../../assets/marks/chain-sol.svg" alt=""> Solana | **85 SOL** (USDC-priced: 10,150 USDC) | Meteora DAMM v2 |
| <img class="mark" src="../../assets/marks/chain-rh.svg" alt=""> Robinhood Chain | **4 ETH** | Uniswap v4 |
| <img class="mark" src="../../assets/marks/chain-arc.svg" alt=""> Arc | **7,500 USDC** | Uniswap v4 |

The target is fixed per chain; creators can't change it. Supply is 1,000,000,000: 800M on the curve, 200M paired with the raised SOL / ETH / USDC in the pool.

If your buy would overshoot the target, it's cut to what the curve needs, and the rest stays in your wallet.

## What happens at graduation

- **1EDGE launch, Solana:** everything raised plus 200M tokens go into a new Meteora DAMM v2 pool. The liquidity is **permanently locked** in the same step. Buyers' tokens unlock.
- **1EDGE launch, Robinhood Chain / Arc:** a Uniswap v4 pool with one full-range position, owned by the migrator contract. There's no code path that removes it.
- **Open launch, Solana:** the Meteora curve migrates to DAMM v2. The pass gate and the transfer lock come off.
- **Open launch, Robinhood Chain / Arc:** it's already a v4 pool. Graduation flips the gate off; transfers open.

Wallet caps, cooldowns and launch rules end at graduation. **After graduation anyone can buy, sell and send**, on 1edge.app or anywhere else.

## Fees after graduation

- **Solana, EDGE:** the pool fee steps down from 1.15% toward 0.55% as the market cap grows. Meteora keeps 20% of pool fees.
- **Solana, Tek:** the same fee the creator set; each share earns 80% of its rate (Meteora keeps 20%).
- **Robinhood Chain / Arc:** the pool keeps the coin's curve fee, flat.

All numbers: [Fees](../trade/fees.md).

## Stuck?

If a graduation ever stalls, holders on a Solana 1EDGE launch can take a refund from the curve after 7 days.
