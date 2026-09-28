---
description: Placing trades, presets, slippage, priority fees, positions, and the in-app wallet.
---

# The <span class="g">Execution Engine</span>

The execution engine is how you actually trade on 1EDGE, buying and selling against the bonding curve or the graduated market from the same interface, on either chain. It's built to stay fast and reliable during the moments that matter: launches and volume spikes.

## Placing a trade

* **Buy or sell** in the chain's own currency or in token terms, SOL on Solana, ETH on Robinhood Chain.
* **One-tap presets**, quick-buy buttons with your own editable SOL amounts, and quick-sell buttons in percentages of your position, that **fire the trade instantly**, no typing, no confirm step in the app.
* The same engine works **pre- and post-graduation**, so the way you trade doesn't change when a token migrates.

## Slippage control

Set your **slippage tolerance** to control how much price movement you'll accept between quote and execution. During heavy volume the price can move fast, a tighter tolerance protects you from bad fills, a looser one helps a trade land in a fast market. You're in control of the trade-off.

## Priority fees

On a congested Solana, a transaction with too low a priority fee can sit or drop. The engine lets you set a **priority fee** so your trade gets picked up promptly when the network is busy, important during the first minutes of a hot launch.

**On Robinhood Chain there is no priority fee to set.** Gas is paid in ETH on top of the trade and your wallet sets the gas price when you approve, so the setting doesn't appear. Presets, slippage and everything else on this page work the same on both chains.

## Reliability

Trading on a launch means landing transactions when the network is at its most contested. The engine is built for that, with sensible **retry handling** so a transient failure or a dropped transaction doesn't cost you the trade, rather than silently failing.

## Settings

A settings panel puts slippage, priority-fee, and related controls in one place, so you can tune your execution defaults to how you trade.

## Tracking your positions

Your **open and closed positions** are tracked in the terminal, entry, size, and live PnL, and roll up into your [verified performance](../social/verified-metrics.md) and dashboard. Every trade you make is part of your provable, on-chain track record.

## The in-app wallet

Your dashboard includes a full **wallet view**, everything you hold, tracked in one place:

* **Every 1EDGE token**, with live PnL, **including bonding-curve positions**. A bonding position doesn't exist as an SPL token yet, it lives on the curve, so ordinary wallet apps can't see it at all. 1EDGE tracks it anyway.
* **Every other SPL token** in your Solana wallet, balance and live value, whether or not it has anything to do with 1EDGE.
* **Your SOL balance**, at its live price, and your ETH balance on Robinhood Chain if you hold a wallet there.

No juggling a wallet app and a block explorer to answer "what do I actually hold", the whole picture is on one screen.

On mainnet the wallet panel also swaps any Solana token, through Jupiter. That swap carries a small 1EDGE fee, shown in the quote before you confirm: see [Swap & Cross-Chain Fees](fees.md).

## Related

* [Reading the Terminal](interface.md)
* [Verified Ledger Performance](../social/verified-metrics.md)
* [Swap & Cross-Chain Fees](fees.md)
