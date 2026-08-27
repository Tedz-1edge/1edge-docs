---
description: Automated vamp-clone detection plus surfaced asset-health metadata for every token.
---

# Anti-Vamp & <span class="g">Honeypot Safety Toolkit</span>

Beyond protecting the launch *mechanics*, 1Edge protects traders from **deceptive tokens**, clones and honeypots designed to trick buyers. This works in two parts: automated anti-vamp detection that runs across the platform, and asset-health metadata surfaced directly in the trading terminal.

## Smart anti-vamp protection

A **vamp** is a copycat clone, a scammer lifts a trending token's name and artwork to ride its momentum and siphon off its buyers toward a worthless impostor. The overwhelming majority of vamps are outright scams.

1Edge runs automatic, always-on **anti-vamp detection** on every launch. It cross-checks a token's identity against the live ecosystem and steps in the moment a clone appears, before it can prey on a real community.

### How it works

* **Multi-signal matching.** 1Edge compares a new token's **ticker, name, and artwork** against existing live tokens, and it doesn't just look for exact copies. It catches **fuzzy** clones too: near-identical names with small spelling tweaks, and lightly-edited or re-saved images, not only byte-for-byte duplicates.
* **Confirmed across signals.** A token is only flagged when **enough of those signals line up at once**. A launch that merely shares a single common word or ticker with something else isn't caught, false positives are rare by design.
* **Immediate protection.** A token's identity is protected **from the moment it launches**, so there's no early window for a clone to slip in before the original gains traction.
* **Self-cleaning.** Protection focuses on **live, active tokens**, abandoned and dead launches are automatically recycled so they never lock up a name forever, and a creator is never blocked from their own follow-up launches.

> ✅ The result: a token's name and look can't be hijacked by a look-alike during the window that matters most. Real communities keep their identity.

> ℹ️ For obvious reasons, 1Edge doesn't publish the exact matching thresholds, doing so would just hand vampers an evasion recipe. The detection is deliberately tuned to catch the lazy *and* the not-so-lazy clone.

## Asset-health metadata

The trading terminal surfaces the trust signals that matter most, so traders can assess a token at a glance instead of digging through a block explorer. Surfaced metadata includes:

### Mint authority revocation

Shows whether the token's **mint authority has been revoked**. If it hasn't, the creator can still mint new supply, a major dilution risk. A revoked mint authority means the supply is fixed.

### Freeze authority disabled

Shows whether the **freeze authority is disabled**. An active freeze authority can freeze holders' tokens, preventing them from selling, a classic honeypot mechanism. Disabled freeze authority means holders can always trade.

### Top-10 clustered wallet analysis

Surfaces **concentration among the top 10 holders**. Heavy clustering, a few wallets holding most of the supply, is a red flag for coordinated dumps or disguised bundling. Healthy distribution is visible at a glance.

> ℹ️ These are read directly from on-chain state and holder data, so they reflect the token's *actual* configuration, not claims made by the creator.

## How to use the toolkit

When evaluating any token, check the surfaced health metadata before trading:

| Signal | Healthy | Risk |
| :--- | :--- | :--- |
| Mint authority | Revoked | Active (dilution risk) |
| Freeze authority | Disabled | Active (honeypot risk) |
| Top-10 concentration | Distributed | Clustered (dump risk) |
| Vamp status | Original | Flagged clone |

Combined with verified humanity and the launch-time guardrails, these signals give traders a complete picture of a token's trustworthiness before they commit a single lamport.
