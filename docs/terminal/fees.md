---
description: The 1EDGE service fee on swaps in the wallet panel and on cross-chain buys, where it is shown, and what it sits on top of.
---

# Swap &amp; <span class="g">Cross-Chain</span> Fees

Two things in the app route your money through an outside service: swapping any Solana token in the wallet panel, and paying for a token with a coin on another chain. Both carry a small **1EDGE service fee**, on top of what that service charges, and both show it before you confirm.

Both run on **mainnet only**. On devnet they are switched off, because neither service exists on the test networks.

## Swaps in the wallet panel

Any Solana token can be swapped from the wallet panel. The route comes from **Jupiter**.

| | |
| :--- | :--- |
| **1EDGE fee** | **0.50%** by default, taken from the token you receive |
| **Where you see it** | In the quote, as **1EDGE fee (0.50%)** with the amount, before you swap |
| **On top of** | Price impact, and the network fee your wallet shows when you approve |
| **Slippage** | 0.5%, shown in the same quote |

If the fee cannot be collected in the token you are buying, the quote says **none on this pair**, or the swap goes through without it. The 1EDGE fee is never more than the quote shows.

## Cross-chain buys

Hold SOL but want a Robinhood Chain token? A cross-chain buy moves your coin to **your own wallet** on the token's chain, then buys with what arrives. The move runs through **Relay**, and it usually takes about a second. It works between Solana, Robinhood Chain and Arc, wherever a route exists.

| | |
| :--- | :--- |
| **1EDGE fee** | **0.25%** of what you send by default, and never more than **1%** |
| **Where you see it** | Inside the moving cost shown before you tap, and as its own **1EDGE fee** line, marked *included*, when you approve |
| **On top of** | Relay's own cost of the move, which is part of the same moving cost |
| **The buy itself** | The same trade fee as any buy on that chain |

If the buy does not go through after the move lands, the coin stays in your wallet on the token's chain. Nothing is lost.

## These can change

Both rates are settings, not constants, and they may change. The amount is **always shown before you confirm**, and that figure is the one that counts. The [Terms](../support/legal.md) cover both fees.

## Related

* [The Execution Engine](execution-engine.md)
* [Legal & Policies](../support/legal.md)
