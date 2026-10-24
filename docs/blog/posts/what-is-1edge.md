---
date:
  created: 2026-10-24
authors:
  - 1edge
slug: what-is-1edge-launchpad
title: "What is 1EDGE? Launchpad, trading terminal and social platform in one"
description: "What 1EDGE is: a launchpad, trading terminal and social platform in one. How launching works, how Seasons pay in $1EDGE, what the $1EDGE token does, and how it differs from pump.fun-style launchpads."
---

# What is 1EDGE? Launchpad, trading terminal and social platform in one

1EDGE is a launchpad, a trading terminal and a social platform in one place, on Solana, Robinhood Chain and Arc. You launch a coin, trade it, call it and talk about it on the same account. What sets it apart is how a launch fills: before a coin graduates, its curve is bought by verified people, one pass each, not by a farm of wallets.

This post covers what 1EDGE is, how a launch works, how Seasons rewards work, what the $1EDGE token does, and how 1EDGE differs from the pump.fun-style launchpads most traders know.

<!-- more -->

## What is 1EDGE?

Memecoins run on attention. People make the culture, culture gets attention, attention makes markets. 1EDGE puts the three things that drive that loop on one site:

- **A launchpad.** Anyone with a pass can launch a coin in six steps and one signature. It starts on a bonding curve and graduates to a real pool when the curve fills.
- **A terminal.** Discover coins as they move, read the chart, buy and sell, see your PnL across chains. Your wallet is a normal wallet, so you can also [trade 1EDGE coins from Axiom, GMGN or other terminals](../../trade/other-terminals.md).
- **A social platform.** [EdgeSocial](../../social/feed.md) sits next to the charts: posts, `$TICKER` tags that open the coin, calls judged on the result, communities with live chat, DMs, profiles with your on-chain record.

One account covers all of it, on three chains: [Solana, Robinhood Chain and Arc](../../start/chains.md).

### The pass

Your way in is the [1EDGE pass](../../start/get-your-pass.md). You earn it with a quick human check, about a minute: a Cloudflare check, then a short drag challenge. It's one per person, it lives in your wallet and it can't be sold or sent. Pay once and you're in on all three chains.

The pass is what lets you buy coins on the curve, launch, earn [rebates](../../rewards/tiers.md) and use your [referral link](../../rewards/referrals.md). Reading is open to everyone: browse coins, charts and the feed without one.

## How launching works on 1EDGE

A launch on 1EDGE is [six steps](../../launch/launching.md): chain, identity, mode, where it trades, rules, review. Then one signature.

**Pick a mode.** [EDGE](../../launch/modes.md#edge) is the standard launch: fixed fees, nothing to configure. [EDGEtek](../../launch/modes.md#edgetek) lets the creator set their own fee split, locked at launch for good. On Robinhood Chain there is also [EDGEstocks](../../launch/stocks.md), coins tied to a real stock (not available in every country).

**Pick where it trades.** A 1EDGE launch fills our own bonding curve on 1edge.app. An [open launch](../../launch/open-launches.md) trades on a real pool from the first block: Meteora on Solana, a Uniswap v4 hook pool on Robinhood Chain and Arc. Terminals and screeners see it like any other pool.

**Graduation.** Every coin fills its curve to a fixed target: 85 SOL on Solana, 4 ETH on Robinhood Chain, 7,500 USDC on Arc. Then it [graduates](../../launch/graduation.md) to Meteora or Uniswap v4, and its liquidity is locked in the same step. After graduation anyone can buy, sell and send it, anywhere.

### What protects the curve

These are enforced on chain, not by the website:

- **Pass to buy.** Before graduation, only pass holders can buy. On open launches the check lives in the pool, so it holds whether the buy comes from 1edge.app, a terminal or a bot.
- **Dev buy capped.** The creator can buy up to 5% of supply at launch (20% on EDGEtek). The program refuses more. The dev's buy shows on the coin's page with a `DEV` tag.
- **One buy per slot.** A pool takes one buy per slot (one per block on EVM). A bundle can't land two buys in the same block.
- **A grace window.** In the first few seconds after a launch, only the creator's own launch buy lands.
- **The launch shield.** On open launches the fee starts at 75% and falls to the coin's normal fee over 15 seconds. Being first costs more; you don't have to race anyone.
- **No wallet splits.** On open launches, coins can't be sent wallet to wallet until graduation, so one bag can't be spread across a farm of wallets to fake a holder count.

Creators can switch on more [launch rules](../../launch/open-launches.md#launch-rules): a dev lock, a max per sell, a sell pace and others. They're optional, and each coin's page shows which ones it runs.

None of this makes a coin a good trade. It changes who gets to the curve first.

## How Seasons rewards work

A [Season](../../rewards/seasons.md) is one calendar month. Season 0 runs through October 2026. Every Friday at 20:00 UTC the week settles, and the month ends with a finale.

You score on six things, up to 1,000 points a week:

| | Weight |
|---|---|
| Referrals who traded | 25% |
| Your trading | 25% |
| How your calls played out, losses included | 15% |
| Coins you launched and the buyers they pulled in | 15% |
| People who read your posts and calls | 10% |
| Being here: days you used 1edge.app yourself | 10% |

Reach **150 points** in a week, trade at least 1 SOL net (or the same on Robinhood Chain or Arc), opt in with your pass, and you're in the running for a **paid seat**. Up to 500 seats a week across four bands. Seats are paid in **$1EDGE**, straight to your wallet, and you have 28 days to claim. The finale pays double.

Volume is netted per coin, so round trips cancel out, and payouts that look like wash trading are held for a person to check. 1EDGE team wallets don't score.

On top of the seats there's the [Trophy Cabinet](../../social/trophy-cabinet.md): trophies for calls that hit, hands that held, the Daily Crown for the best realised PnL of the day. Trophies are earned, never bought, and they're status, not assets.

## What $1EDGE does

$1EDGE is 1EDGE's own token, on Solana. In the product today it pays the Seasons seats, it's what you burn to boost a coin, and creators can send a slice of their own fee to buying and burning it (Back $1EDGE). The full list: **[$1EDGE: what it does](../../token/index.md)**.

The token's mint has no mint authority and no freeze authority: nobody can mint more or freeze a wallet. Its liquidity position is permanently locked, and team tokens vest in public on Streamflow. Every address is on the [Contracts](../../help/contracts.md) page.

## How 1EDGE differs from pump.fun-style launchpads

Bonding-curve launchpads made launching a coin cheap and fast. The model is now standard: a fixed supply, a curve to a target, a graduation into a pool, a fee for the creator. 1EDGE runs that model too. The differences are in who can buy the curve, and what happens around the trade.

**Who buys the curve.** On most launchpads, a wallet is all you need to buy a coin from its first block, and the first block goes to whoever is fastest. On 1EDGE, only pass holders buy before graduation, with one pass per person and the checks above in the program.

**How much the dev can take.** On 1EDGE the dev buy is capped on chain at 5% (20% on EDGEtek), and it's labelled on the coin's page.

**Fees set at launch.** A coin's trading fee is set on chain when it launches and shown on its page. EDGEtek creators pick their split once; it can't change later.

**Social on the same account.** Calls are recorded at the market cap of the moment and judged on the result, losses included. Your profile shows your trades, volume and win rate from your on-chain history. A `$TICKER` tag carries the pool address, so it opens the real coin, not a copycat.

**Rewards you can climb.** Rebates by tier on the fees you pay, 25% of the 1EDGE fee from people you refer, and a weekly Season with paid seats in $1EDGE.

**Three chains, one account.** Solana, Robinhood Chain and Arc, one pass, one profile.

## Start here

1. Open [1edge.app](https://1edge.app) and look around. No sign-up needed to browse.
2. [Get your pass](../../start/get-your-pass.md) when you want to buy the curve, launch or post.
3. Read [how Seasons work](../../rewards/seasons.md) and opt in for the week.
4. Launch something: [Launch a coin](../../launch/launching.md).

Until 2 Nov 2026 the 1EDGE pass fee is free: you pay only the Solana rent for your pass.

Trading memecoins is risky and most coins go to zero. Nothing here is a promise about any price.
