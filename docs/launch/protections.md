---
description: Every protection on a 1EDGE launch, with the icon you see on the site. What runs on every launch, what open launches add, and the rules a creator can switch on.
---

<span class="ed-eyebrow">Launch</span>

# Protections

<p class="ed-lead">The icons on 1edge.app, one by one. What each protection does, what it stops, where it runs, and how to check it on a coin's page.</p>

There are 23 protections in all. Each is counted once, however many chains or launch types carry it. The site shows how many are live today.

Two places a coin can trade before graduation: the **1EDGE curve** on 1edge.app, or an **open launch** on a real pool (Meteora on Solana, a Uniswap v4 hook pool on Robinhood Chain and Arc). Some protections run on both. Some run on open launches only. You tell an open launch apart by the [venue ring](../trade/marks.md#the-venue-ring) around its picture.

## On every launch

### Pass holders { #pass-holders }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/pass.svg" alt="Pass holders icon: a fingerprint in a pass frame" width="40" height="40">Until a coin graduates, only a wallet holding a 1EDGE pass can buy it, from any app or bot.</p>

**What it does.** Until graduation, only a wallet holding a 1EDGE pass can buy. On open launches you get one buying wallet per pass. Selling never needs a pass.

**What it stops.** Bots and wallet farms buying the curve. On open launches the check lives in the pool: a transfer hook on Solana, a v4 hook on Robinhood Chain and Arc. It holds whether the buy comes from 1edge.app, a terminal or a bot.

**Where it applies.** The 1EDGE curve and open launches, on Solana, Robinhood Chain and Arc.

**How to check it.** Tap the shield pill on the coin's page. *How this launch is protected* lists the pass with every other rule on the coin.

### Dev buy capped { #dev-buy-cap }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/wallet-cap.svg" alt="Dev buy capped icon: an arrow capped by a bar" width="40" height="40">At launch the creator can buy at most 5% of the supply (20% on EDGEtek), and the chain refuses more.</p>

**What it does.** The creator's buy happens in the launch transaction, and it can't go past the cap.

**What it stops.** A creator taking a big share of the coin before anyone else can buy. The program on the 1EDGE curve, the gate on Solana open launches and the hook on Robinhood Chain and Arc open launches all refuse a bigger buy.

**Where it applies.** The 1EDGE curve and open launches, on Solana, Robinhood Chain and Arc.

**How to check it.** The dev's buy shows on the coin's page with a `DEV` tag.

### One buy per block { #one-per-block }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/one-per-block.svg" alt="One buy per block icon: a 1 standing on a block" width="40" height="40">A coin takes one buy per block (one per slot on Solana), so a bundle can't land two.</p>

**What it does.** A coin takes one buy per slot on Solana, and one buy per block on Robinhood Chain and Arc.

**What it stops.** Bundles. A bundle can't land two buys in the same block.

**Where it applies.** The 1EDGE curve and open launches, on Solana, Robinhood Chain and Arc.

**How to check it.** Tap the shield pill on the coin's page. It's part of the standard protection on every launch.

### Curve buys can't be sandwiched { #no-sandwich }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/one-per-block.svg" alt="Curve buys can't be sandwiched icon: a 1 standing on a block" width="40" height="40">With one buy per block, nobody can buy just ahead of your buy and sell right after it.</p>

**What it does.** A sandwich needs a second buy in the same block as yours. With one buy per block, that buy can't land.

**What it stops.** A bot buying right ahead of your buy to push the price up, then selling right after it at your cost.

**Where it applies.** Wherever one buy per block runs: the 1EDGE curve and open launches, on Solana, Robinhood Chain and Arc.

**How to check it.** Tap the shield pill on the coin's page. It's part of the standard protection on every launch.

## Open launches add

### Opening grace { #opening-grace }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/cooldown.svg" alt="Opening grace icon: a thermometer with a blue arrow going down" width="40" height="40">Nobody can buy in the first moments: 18 slots on Solana, 2 blocks plus 4 seconds on Robinhood Chain and Arc.</p>

**What it does.** Nobody buys in the first moments of an open launch. Only the creator's own launch buy lands, in the launch transaction.

**What it stops.** Bots that fire the moment the pool appears.

**Where it applies.** Open launches.

**How to check it.** Look for the venue ring around the coin's picture, then tap the shield pill to see the rules on the coin.

### Launch shield { #launch-shield }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/shield-15s.svg" alt="Launch shield icon: a shield with an orange clock hand" width="40" height="40">For the first 15 seconds every buy and sell pays a high fee, 75% at the start, stepping down to the normal fee.</p>

**What it does.** For the first 15 seconds of an open launch, every buy and every sell pays a high fee. It starts at 75% and steps down every second to the coin's normal fee. The extra fee goes to 1EDGE. The creator's launch buy is exempt.

**What it stops.** Cheap sniping. Being first costs more, so you don't have to race the bots.

**Where it applies.** Open launches. Launches on the 1EDGE curve don't have a shield.

**How to check it.** The trade ticket shows the shield while it runs, for example *Shield: 40% fee now · 1.2% in 6s*.

### No wallet splits { #no-wallet-splits }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/no-w2w.svg" alt="No wallet splits icon: a green arrow crossed by a red line" width="40" height="40">The coin can't be sent wallet to wallet until it graduates, so one bag can't be spread across a wallet farm.</p>

**What it does.** Buys and sells go through the pool. After graduation the coin sends like any coin.

**What it stops.** One bag being spread across a farm of wallets to fake a holder count.

**Where it applies.** Open launches.

**How to check it.** Look for the venue ring around the coin's picture, then tap the shield pill to see the rules on the coin.

## Rules a creator can switch on { #optional-rules }

These are off unless the creator switches them on at launch. Anything they pick shows on the coin's page under the shield pill, **can't be changed after launch, and ends at graduation.** Soft landing is the one that runs just after graduation. Solana 1EDGE-curve launches don't take creator rules yet. The launch page only offers the rules a launch's chain and venue can carry.

### Wallet cap { #wallet-cap }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/wallet-cap.svg" alt="Wallet cap icon: an arrow capped by a bar" width="40" height="40">No buy can take a wallet past the creator's cap, 1% to 3.5% of the supply.</p>

**What it does.** A buy that would take a wallet past the cap is refused. Ends at graduation.

**Where it applies.** The 1EDGE curve on Robinhood Chain and Arc, and open launches on Solana, Robinhood Chain and Arc.

### Trade cooldown { #trade-cooldown }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/cooldown.svg" alt="Trade cooldown icon: a thermometer with a blue arrow going down" width="40" height="40">A wallet waits up to 300 seconds between trades, as the creator sets.</p>

**What it does.** The creator sets 0 to 300 seconds a wallet must wait between trades on the curve. Ends at graduation.

**Where it applies.** The 1EDGE curve on Robinhood Chain and Arc only. Open launches have no cooldown: one buy per slot or block instead.

### Max per sell { #max-per-sell }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/max-per-sell.svg" alt="Max per sell icon: an orange arrow through a green line" width="40" height="40">No single sell can be more than 0.25% to 2% of the supply.</p>

**What it does.** Any buyer's bag still sells out in 14 sells at most. Needs a wallet cap. Ends at graduation.

**Where it applies.** The 1EDGE curve on Robinhood Chain and Arc (the stock launchpad on Robinhood Chain too), and open launches on Solana, Robinhood Chain and Arc.

### Rising wallet cap { #rising-wallet-cap }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/rising-cap.svg" alt="Rising wallet cap icon" width="40" height="40">The wallet cap starts small and grows on a timer up to the cap the creator set.</p>

**What it does.** The creator sets where the cap starts, how much it grows and how often. The creator's own dev buy isn't held to it. Ends at graduation.

**Where it applies.** The 1EDGE curve on Robinhood Chain and Arc (the stock launchpad on Robinhood Chain too), and open launches on Solana, Robinhood Chain and Arc.

### Caps follow the curve { #caps-follow-the-curve }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/curve-steps.svg" alt="Caps follow the curve icon" width="40" height="40">The caps step up at 25%, 50% and 75% of the way to graduation, and the wallet cap stays under 3.5%.</p>

**What it does.** The caps open up as the coin climbs, not on a timer.

**Where it applies.** The 1EDGE curve on Robinhood Chain and Arc (the stock launchpad on Robinhood Chain too), and open launches on Solana, Robinhood Chain and Arc.

### Caps follow the crowd { #caps-follow-the-crowd }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/crowd-caps.svg" alt="Caps follow the crowd icon" width="40" height="40">The wallet cap starts small and grows as more people buy, up to the cap the creator set.</p>

**What it does.** The cap grows a set step for every set number of buyers. Needs a wallet cap. Ends at graduation.

**Where it applies.** Open launches on Robinhood Chain and Arc.

### Sniper-fee cap { #sniper-fee-cap }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/sniper-fee-cap.svg" alt="Sniper-fee cap icon" width="40" height="40">In the first minutes, a buy whose priority fee and Jito tip in the same transaction go over the cap is refused.</p>

**What it does.** The creator sets the cap, 0.001 to 0.01 SOL. Default 0.002 SOL for 5 minutes. It can't see a tip sent in a separate transaction, or through a non-Jito service.

**Where it applies.** Open launches on Solana.

### Reputation check { #reputation-check }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/reputation.svg" alt="Reputation check icon" width="40" height="40">Early on, buying needs a pass at least as old as the creator set, and no serial-sniper flag if they switch that on.</p>

**What it does.** Runs for the first minutes after launch, up to 5. Selling is never checked.

**Where it applies.** Open launches on Solana, Robinhood Chain and Arc.

### Crowd shield { #crowd-shield }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/crowd-shield.svg" alt="Crowd shield icon" width="40" height="40">The fee stays high until enough different people have bought, or until the set time runs out.</p>

**What it does.** Whichever comes first ends it. It applies to buys and sells.

**Where it applies.** Open launches on Robinhood Chain and Arc.

### Size shield { #size-shield }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/size-shield.svg" alt="Size shield icon" width="40" height="40">In the first minutes a big buy pays an extra fee that grows with its size. Small buys pay nothing extra.</p>

**What it does.** The extra fee comes on top of the launch shield. The bigger the buy, the more it pays, up to a set maximum.

**Where it applies.** Open launches on Robinhood Chain and Arc.

### Sell pace { #sell-pace }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/sell-pace.svg" alt="Sell pace icon" width="40" height="40">All sellers together can sell at most 1 to 3 times the max per sell in one block.</p>

**What it does.** Needs Max per sell. Ends at graduation, or after the soft landing.

**Where it applies.** Open launches on Solana, Robinhood Chain and Arc.

### Soft landing { #soft-landing }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/soft-landing.svg" alt="Soft landing icon" width="40" height="40">For 1 to 30 minutes after graduation, trades pay an extra fee of up to 5% that falls to 0, and the max per sell stays on.</p>

**What it does.** The one rule that runs just after graduation. Needs a fee above 0 or Max per sell.

**Where it applies.** Open launches on Robinhood Chain and Arc.

### Dev lock { #dev-lock }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/dev-lock.svg" alt="Dev lock icon: a padlock" width="40" height="40">The creator's wallet can't sell or send the coin until it graduates, or for 30 days if it never does.</p>

**What it does.** Buyers see the date on the coin's page.

**Where it applies.** The 1EDGE curve on Robinhood Chain and Arc (the stock launchpad on Robinhood Chain too), and open launches on Solana, Robinhood Chain and Arc.

### Dev drip { #dev-drip }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/dev-drip.svg" alt="Dev drip icon" width="40" height="40">The creator can sell only a slice of their dev buy each day, from 1% to 50%.</p>

**What it does.** Ends at graduation. With Dev lock on, it only applies if the lock ends before the coin graduates.

**Where it applies.** Open launches on Solana.

### Must hold a token { #must-hold-a-token }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/must-hold.svg" alt="Must hold a token icon" width="40" height="40">Only wallets holding a set amount of a token the creator names can buy on the curve.</p>

**What it does.** Checked at each buy. Selling is never checked. Ends at graduation.

**Where it applies.** The 1EDGE curve on Robinhood Chain and Arc (the stock launchpad on Robinhood Chain too), and open launches on Robinhood Chain and Arc.

### Market-hours fee { #market-hours-fee }

<p class="ed-prot"><img class="ed-prot-ico" src="../../assets/protections/market-hours.svg" alt="Market-hours fee icon" width="40" height="40">For a coin priced in a stock: while the US market is closed every trade pays a little more, which buys back and burns the coin.</p>

**What it does.** The creator sets the extra fee, 0.01% to 1%.

**Where it applies.** Open launches on Robinhood Chain and Arc, and only for a coin priced in a stock.

Every rule a creator can add, with its range: [Launch rules](open-launches.md#launch-rules).

## How to check a coin

- **Shield pill.** Tap it on a coin's page to see *How this launch is protected*: every rule on the coin, live.
- **Protected mark.** Coins with extra rules carry the **Protected** mark on the board.
- **Venue ring.** It tells an open launch apart. See [What the marks mean](../trade/marks.md#the-venue-ring).

None of this makes a coin a good trade. It changes who gets to the curve first.
