---
description: Every protection on a 1EDGE launch, with the icon you see on the site. Pass holders, dev buy cap, one per block, opening grace, launch shield, no wallet splits, and the optional rules.
---

<span class="ed-eyebrow">Launch</span>

# Protections

<p class="ed-lead">The icons on 1edge.app, one by one. What each protection does, what it stops, where it runs, and how to check it on a coin's page.</p>

Two places a coin can trade before graduation: the **1EDGE curve** on 1edge.app, or an **open launch** on a real pool (Meteora on Solana, a Uniswap v4 hook pool on Robinhood Chain and Arc). Some protections run on both. Some run on open launches only. You tell an open launch apart by the [venue ring](../trade/marks.md#the-venue-ring) around its picture.

## Pass holders { #pass-holders }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/pass.svg" alt="Pass holders icon: a fingerprint in a pass frame" width="40" height="40">Only pass holders buy the curve.</p>

**What it does.** Until graduation, only a wallet holding a 1EDGE pass can buy. On open launches you get one buying wallet per pass.

**What it stops.** Bots and wallet farms buying the curve. On open launches the check lives in the pool: a transfer hook on Solana, a v4 hook on Robinhood Chain and Arc. It holds whether the buy comes from 1edge.app, a terminal or a bot.

**Where it applies.** The 1EDGE curve and open launches, on Solana, Robinhood Chain and Arc.

**How to check it.** Tap the shield pill on the coin's page. *How this launch is protected* lists the pass with every other rule on the coin.

## Dev buy capped { #dev-buy-cap }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/wallet-cap.svg" alt="Dev buy capped icon: an arrow capped by a bar" width="40" height="40">5% at most, 20% on EDGEtek.</p>

**What it does.** At launch the creator can buy at most 5% of supply (20% on EDGEtek). The buy happens in the launch transaction.

**What it stops.** A creator taking a big share of the curve before anyone else can buy. The program refuses a bigger buy.

**Where it applies.** Launches on the 1EDGE curve.

**How to check it.** The dev's buy shows on the coin's page with a `DEV` tag.

## One per block { #one-per-block }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/one-per-block.svg" alt="One per block icon: a 1 standing on a block" width="40" height="40">No two buys in one block.</p>

**What it does.** A coin takes one buy per slot on Solana, and one buy per block on Robinhood Chain and Arc.

**What it stops.** Bundles. A bundle can't land two buys in the same block. Curve buys also can't be sandwiched.

**Where it applies.** The 1EDGE curve and open launches.

**How to check it.** Tap the shield pill on the coin's page. It's part of the standard protection on every launch.

## Opening grace { #opening-grace }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/cooldown.svg" alt="Opening grace icon: a thermometer with a blue arrow going down" width="40" height="40">No buys in the opening moments.</p>

**What it does.** Nobody buys in the first moments of an open launch: 18 slots on Solana, 2 blocks plus 4 seconds on Robinhood Chain and Arc. Only the creator's own launch buy lands, in the launch transaction.

**What it stops.** Bots that fire the moment the pool appears.

**Where it applies.** Open launches.

**How to check it.** Look for the venue ring around the coin's picture, then tap the shield pill to see the rules on the coin.

## Launch shield { #launch-shield }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/shield-15s.svg" alt="Launch shield icon: a shield with an orange clock hand" width="40" height="40">75% fee at the open, normal by 15 seconds.</p>

**What it does.** For the first 15 seconds of an open launch, every buy and every sell pays a high fee. It starts at 75% and steps down every second to the coin's normal fee. The extra fee goes to 1EDGE. The creator's launch buy is exempt.

**What it stops.** Cheap sniping. Being first costs more, so you don't have to race the bots.

**Where it applies.** Open launches. Launches on the 1EDGE curve don't have a shield.

**How to check it.** The trade ticket shows the shield while it runs, for example *Shield: 40% fee now · 1.2% in 6s*.

## No wallet splits { #no-wallet-splits }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/no-w2w.svg" alt="No wallet splits icon: a green arrow crossed by a red line" width="40" height="40">No wallet-to-wallet sends until graduation.</p>

**What it does.** On an open launch the coin can't be sent wallet to wallet until it graduates. Buys and sells go through the pool. After graduation it sends like any coin.

**What it stops.** One bag being spread across a farm of wallets to fake a holder count.

**Where it applies.** Open launches.

**How to check it.** Look for the venue ring around the coin's picture, then tap the shield pill to see the rules on the coin.

## How to check a coin

- **Shield pill.** Tap it on a coin's page to see *How this launch is protected*: every rule on the coin, live.
- **Protected mark.** Coins with extra rules carry the **Protected** mark on the board.
- **Venue ring.** It tells an open launch apart. See [What the marks mean](../trade/marks.md#the-venue-ring).

## Optional rules a creator can switch on { #optional-rules }

On top of the protections above, a creator can pick extra rules at launch. They show under the shield pill, **can't be changed after launch, and end at graduation.** Solana 1EDGE-curve launches don't take creator rules yet.

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/dev-lock.svg" alt="Dev lock icon: a padlock" width="40" height="40"><span><b>Dev lock.</b> The creator can't sell or send until graduation or 30 days.</span></p>

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/max-per-sell.svg" alt="Max per sell icon: an orange arrow through a green line" width="40" height="40"><span><b>Max per sell.</b> No single sell bigger than 0.25% to 2% of supply.</span></p>

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/sell-pace.svg" alt="Sell pace icon" width="40" height="40"><span><b>Sell pace.</b> Limits how fast sells can land.</span></p>

Every rule a creator can add, with its range: [Launch rules](open-launches.md#launch-rules).

None of this makes a coin a good trade. It changes who gets to the curve first.
