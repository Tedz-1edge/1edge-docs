---
description: Charts, live trade logs, holder distribution, and asset health — reading the terminal.
---

# Reading the <span class="g">Terminal</span>

Every token on 1Edge — from the first second of its bonding curve through to its graduated Meteora market — lives inside a full, professional-grade trading terminal. This page is a tour of what you're looking at.

## Real-time chart

An interactive price chart with OHLCV candles, updating live as trades land.

> ℹ️ **One continuous chart, curve to DEX.** The chart runs **seamlessly from the bonding-curve phase straight through graduation** into the Meteora market — no reset, no gap. A token's whole price history lives in one place, so graduation is a transition you can see rather than a break in the data.

## Volume & depth

Live trading volume and buy/sell depth, so you can read momentum and see where liquidity sits on each side of the book.

## Live trade log

The raw, unfiltered stream of trades as they happen — every buy and sell, in real time. It's the ground truth of what's actually going on, straight from the ledger.

## Top-holder distribution

A ranked view of the largest holders and how concentrated the supply is. Heavy clustering at the top is a classic risk signal (coordinated dumps, disguised bundling); healthy distribution is visible at a glance.

## Asset health

The terminal surfaces the trust signals that matter, read directly from on-chain state, so you don't have to dig through an explorer:

* **Mint authority** — revoked (supply fixed) or active (dilution risk).
* **Freeze authority** — disabled (you can always sell) or active (honeypot risk).
* **Vamp status** — original, or a flagged copycat clone.

See [Anti-Vamp & Honeypot Toolkit](../protection/security-toolkits.md) for the full breakdown.

## Your position

Your own holdings and position metrics sit right alongside the market — and because the [bonding curve is a virtual-token simulation](../protocol/meteora-graduation.md#the-virtual-token-model), your **pre-bond and post-bond holdings are both tracked and displayed in full**, here and in your dashboard. You always see exactly what you own.

## Transparency tags

The terminal automatically flags meaningful creator behaviour — like **atomic dev-buys** — so you can assess a launch without manual on-chain forensics. See [Developer Transparency Tags](transparency-tags.md).

## Related

* [The Execution Engine](execution-engine.md) — placing trades.
* [Developer Transparency Tags](transparency-tags.md)
