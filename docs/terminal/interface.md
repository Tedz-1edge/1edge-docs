---
description: Charts, live trade logs, and holder distribution, reading the terminal.
---

# Reading the <span class="g">Terminal</span>

Every token on 1Edge, from the first second of its bonding curve through to its graduated Meteora market, lives inside a full, professional-grade trading terminal. This page is a tour of what you're looking at.

## Real-time chart

An interactive price chart with OHLCV candles, updating live as trades land.

> ℹ️ **One continuous chart, curve to DEX.** The chart runs **seamlessly from the bonding-curve phase straight through graduation** into the Meteora market, no reset, no gap. A token's whole price history lives in one place, so graduation is a transition you can see rather than a break in the data.

## Volume & depth

Live trading volume and buy/sell depth, so you can read momentum and see where liquidity sits on each side of the book.

## Live trade log

The raw, unfiltered stream of trades as they happen, every buy and sell, in real time. It's the ground truth of what's actually going on, straight from the ledger.

## Trading is social

The terminal isn't a lone-wolf screen, the people trading a token are visible right inside it:

* **Names on trades.** Traders who opt in show up by username in the trade log, holders list, and top-traders board, tap any name to open their profile.
* **Entries and exits, on the chart.** Opted-in traders appear as small **avatar markers** pinned to the candles where they bought and sold, buys below the candle, sells above. Hover one for the details, click through to the profile. Your own and others' markers each have a toolbar toggle.
* **Live trade pop-ups.** When an opted-in trader lands a trade, it flashes briefly over the chart, the market's pulse, with faces on it.
* **Chat, right there.** The token's live chat runs on the same page, see [the Edge Social engine](../social/edge-social-engine.md#chat).

> ℹ️ **Showing your name on trade surfaces is opt-in.** By default your trades are anonymous; turn on "Show my name on trades" in your profile settings to appear. You always see your own markers either way, they render just for you.

## Top-holder distribution

A ranked view of the largest holders and how concentrated the supply is. Heavy clustering at the top is a classic risk signal (coordinated dumps, disguised bundling); healthy distribution is visible at a glance.

## Your position

Your own holdings and position metrics sit right alongside the market, and because the [bonding curve is a virtual-token simulation](../protocol/meteora-graduation.md#the-virtual-token-model), your **pre-bond and post-bond holdings are both tracked and displayed in full**, here and in your dashboard. You always see exactly what you own.

## Transparency tags

The terminal automatically flags creator behaviour that matters, like the **creator buying into their own launch**, so you can judge a token at a glance instead of digging through a block explorer. See [Developer Transparency Tags](transparency-tags.md).

## Related

* [The Execution Engine](execution-engine.md), placing trades.
* [Developer Transparency Tags](transparency-tags.md)
