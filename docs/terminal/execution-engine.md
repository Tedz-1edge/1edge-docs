---
description: Placing trades — presets, slippage, priority fees, and position tracking.
---

# The Execution Engine

The execution engine is how you actually trade on 1Edge — buying and selling against the bonding curve or the graduated Meteora market from the same interface. It's built to stay fast and reliable during the moments that matter: launches and volume spikes.

## Placing a trade

* **Buy or sell** in SOL or token terms.
* **Preset shortcuts** — quick-size a trade (e.g. preset SOL amounts or percentages of your balance) instead of typing every time.
* The same engine works **pre- and post-graduation**, so the way you trade doesn't change when a token migrates.

## Slippage control

Set your **slippage tolerance** to control how much price movement you'll accept between quote and execution. During heavy volume the price can move fast — a tighter tolerance protects you from bad fills, a looser one helps a trade land in a fast market. You're in control of the trade-off.

## Priority fees

On a congested Solana, a transaction with too low a priority fee can sit or drop. The engine lets you set a **priority fee** so your trade gets picked up promptly when the network is busy — important during the first minutes of a hot launch.

## Reliability

Trading on a launch means landing transactions when the network is at its most contested. The engine is built for that — with sensible **retry handling** so a transient failure or a dropped transaction doesn't cost you the trade, rather than silently failing.

## Settings

A settings panel puts slippage, priority-fee, and related controls in one place, so you can tune your execution defaults to how you trade.

## Tracking your positions

Your **open and closed positions** are tracked in the terminal — entry, size, and live PnL — and roll up into your [verified performance](../social/verified-metrics.md) and dashboard. Every trade you make is part of your provable, on-chain track record.

## Related

* [Reading the Terminal](interface.md)
* [Verified Ledger Performance](../social/verified-metrics.md)
