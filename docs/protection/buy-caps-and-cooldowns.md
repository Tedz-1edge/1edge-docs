---
description: Optional creator-configured guardrails that throttle bots during the bonding-curve phase.
---

# Wallet Buy Caps & <span class="g">Trade Cooldowns</span>

On top of the platform-wide, always-on protections (verified humanity and same-block bundle blocking), 1EDGE gives **creators** two optional guardrails to harden their launch against scripted assaults. Both are configured at deployment and apply during the bonding-curve phase, where launches are most vulnerable.

## Wallet buy caps

A **wallet buy cap** sets the maximum amount of a token any single public address can accumulate during the bonding-curve phase, configurable from **1% to 3.5% of total supply**.

* **What it does:** prevents a small number of wallets, whether whales or a disguised bundler swarm, from cornering early supply.
* **Effect:** spreads the opening distribution across more real participants, producing a healthier holder base.
* **Phase:** applies during the bonding curve. As with other pre-graduation constraints, the cap **lifts automatically on graduation** to Meteora, after which the token trades freely. See [The Meteora Graduation Protocol](../protocol/meteora-graduation.md).

> ℹ️ A well-set buy cap is one of the most effective ways to ensure that block-zero buyers can't dominate your launch, even if some slip through other defenses, no single address can take an outsized share.

## Trade cooldown delays

A **trade cooldown** enforces a mandatory delay between successive trades from the same address.

* **Range:** **0 to 300 seconds** between trades per wallet.
* **What it does:** freezes the rapid-fire transaction spam that sniping, sandwiching, and script-driven strategies rely on.
* **Effect:** gives the curve room to breathe during the critical opening minutes and removes the speed advantage automated wallets have over humans.

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
| **Trade cooldown** | Spam / sandwiching | **Optional** | **Yes, 0–300s, per launch** |

The always-on layers protect every launch by default; buy caps and cooldowns let creators tune additional protection to their specific needs.

> ✅ **All of these apply during the bonding curve only.** They lift automatically on graduation, by which point the goal is met: the curve has been filled by **real humans**, giving the token a genuine holder base (a "human floor") that's far less likely to dump before *or* after bonding. See [The Meteora Graduation Protocol](../protocol/meteora-graduation.md#lifting-pre-graduation-constraints-and-the-human-floor).
