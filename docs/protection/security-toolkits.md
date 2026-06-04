---
description: Automated vamp-clone detection plus surfaced asset-health metadata for every token.
---

# Anti-Vamp & <span class="g">Honeypot Safety Toolkit</span>

Beyond protecting the launch *mechanics*, 1Edge protects traders from **deceptive tokens** — clones and honeypots designed to trick buyers. This works in two parts: automated anti-vamp detection that runs across the platform, and asset-health metadata surfaced directly in the trading terminal.

## Smart anti-vamp protection

A **vamp** is a copycat clone — a scammer lifts a trending token's name and artwork to ride its momentum and siphon off its buyers toward a worthless impostor. The overwhelming majority of vamps are outright scams.

1Edge automatically matches every new launch's **name and artwork against existing tokens**, detecting clones the moment they appear and flagging impostors before they can prey on a real community.

* **Always on** — runs platform-wide, no creator configuration required.
* **Name + artwork matching** — catches clones that copy identity, not just exact duplicates.
* **Early detection** — flags impostors as they launch, not after the damage is done.

> ✅ Anti-vamp detection means a token's reputation can't be hijacked by a look-alike. Real communities keep their identity.

## Asset-health metadata

The trading terminal surfaces the trust signals that matter most, so traders can assess a token at a glance instead of digging through a block explorer. Surfaced metadata includes:

### Mint authority revocation

Shows whether the token's **mint authority has been revoked**. If it hasn't, the creator can still mint new supply — a major dilution risk. A revoked mint authority means the supply is fixed.

### Freeze authority disabled

Shows whether the **freeze authority is disabled**. An active freeze authority can freeze holders' tokens, preventing them from selling — a classic honeypot mechanism. Disabled freeze authority means holders can always trade.

### Top-10 clustered wallet analysis

Surfaces **concentration among the top 10 holders**. Heavy clustering — a few wallets holding most of the supply — is a red flag for coordinated dumps or disguised bundling. Healthy distribution is visible at a glance.

> ℹ️ These are read directly from on-chain state and holder data, so they reflect the token's *actual* configuration — not claims made by the creator.

## How to use the toolkit

When evaluating any token, check the surfaced health metadata before trading:

| Signal | Healthy | Risk |
| :--- | :--- | :--- |
| Mint authority | Revoked | Active (dilution risk) |
| Freeze authority | Disabled | Active (honeypot risk) |
| Top-10 concentration | Distributed | Clustered (dump risk) |
| Vamp status | Original | Flagged clone |

Combined with verified humanity and the launch-time guardrails, these signals give traders a complete picture of a token's trustworthiness before they commit a single lamport.
