---
description: Optional creator-configured guardrails that throttle bots during the bonding-curve phase.
---

# Wallet Buy Caps & <span class="g">Trade Cooldowns</span>

On top of the platform-wide, always-on protections (1EDGE Proof of Humanity and same-block bundle blocking), 1EDGE gives **creators** two optional guardrails to harden their launch against scripted assaults. Both are configured at deployment and apply during the bonding-curve phase, where launches are most vulnerable.

## Wallet buy caps

A **wallet buy cap** sets the maximum amount of a token any single public address can accumulate during the bonding-curve phase, configurable from **1% to 3.5% of total supply**.

* **What it does:** prevents a small number of wallets, whether whales or a disguised bundler swarm, from cornering early supply.
* **Effect:** spreads the opening distribution across more real participants, producing a healthier holder base.
* **Phase:** applies during the bonding curve. As with other pre-graduation constraints, the cap **lifts automatically on graduation**, after which the token trades freely. See [The Meteora Graduation Protocol](../protocol/meteora-graduation.md), or [Graduation on Robinhood Chain](../protocol/robinhood-graduation.md).

> ℹ️ A well-set buy cap is one of the most effective ways to ensure that block-zero buyers can't dominate your launch, even if some slip through other defenses, no single address can take an outsized share.

## Trade cooldown delays

A **trade cooldown** enforces a mandatory delay between successive trades from the same address.

* **Range:** **0 to 300 seconds** between trades per wallet.
* **What it does:** freezes the rapid-fire transaction spam that sniping, sandwiching, and script-driven strategies rely on.
* **Effect:** gives the curve room to breathe during the critical opening minutes and removes the speed advantage automated wallets have over humans.

> ℹ️ **Both guardrails work the same on both chains.** The 1%–3.5% cap and the 0–300s cooldown are the same settings, with the same limits, whether you launch on Solana or on Robinhood Chain.

## On an open launch

An [open launch](../protocol/open-launches.md) trades on Meteora from its first trade, and its rules are enforced by the token itself, on every terminal:

* **The wallet cap works the same**, 1%–3.5% of supply, on every buy during the curve.
* **There is no trade cooldown.** It can't be enforced exactly for buyers on outside terminals, so it isn't offered.
* **An anti-sniper fee takes its place.** The trading fee opens at 50% and falls to the launch's base fee over the first 10 minutes.
* **One buy per pool per slot**, and no buys for the first 10 slots after creation.
* **Selling is never gated**, and wallet-to-wallet transfers stay locked until graduation.

## Choosing your settings

Both guardrails are **optional** and entirely up to the creator. The right values depend on your target liquidity and audience, a high-velocity launch with deep initial demand calls for different settings than a slow community mint.

> ⚠️ Guardrails are a trade-off: tighter caps and longer cooldowns suppress bots but also constrain genuine early demand. See [Launch Engineering Best Practices](../creators/best-practices.md) for guidance on calibrating them to your launch size.

## How these fit the bigger picture

| Layer | Protects against | Type | Configurable? |
| :--- | :--- | :--- | :--- |
| Proof of Humanity | Bots & multi-wallet farms | Always on | No, platform-wide |
| Same-block bundle blocking | Bundlers | Always on | No, program-level |
| Same-block snipe protection | Block-zero snipers | Always on | No, program-level |
| Anti-vamp detection | Copycat clones | Always on | No, platform-wide |
| **Wallet buy cap** | Supply cornering | **Optional** | **Yes, 1%–3.5%, per launch** |
| **Trade cooldown** | Spam / sandwiching | **Optional** | **Yes, 0–300s, per launch** (not on open launches) |
| **Anti-sniper fee** | Opening-second snipers | Open launches only | No, 50% falling to the base fee over 10 minutes |

The always-on layers protect every launch by default; buy caps and cooldowns let creators tune additional protection to their specific needs.

> ✅ **All of these apply during the bonding curve only.** They lift automatically on graduation, by which point the goal is met: the curve has been filled by **real humans**, giving the token a genuine holder base (a "human floor") that's far less likely to dump before *or* after bonding. See [The Meteora Graduation Protocol](../protocol/meteora-graduation.md#lifting-pre-graduation-constraints-and-the-human-floor).
