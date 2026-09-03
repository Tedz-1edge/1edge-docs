---
description: The virtual-token curve, the 85 SOL target, migration to Meteora DAMM v2, and permanent LP burns.
---

# The Meteora <span class="g">Graduation Protocol</span>

Every 1EDGE token begins life on a **bonding curve**, a self-contained market where price rises as supply is bought. When the curve reaches its target, the token "graduates": it migrates automatically into a real, permanent DEX pool. This page documents the whole journey, starting with something most launchpads don't do.

## The virtual-token model

During the bonding-curve phase, **there is no real SPL token yet.** Instead, 1EDGE runs an **on-chain simulation of virtual tokens**. To you as a trader, it behaves exactly like a normal bonding curve, you buy, you sell, the price moves, but under the hood there's no transferable SPL mint in circulation.

This is a deliberate **protection layer**:

* There's **no token for a bot to bundle, snipe, or move around** through normal SPL tooling before graduation.
* Every buy and sell runs through 1EDGE's program, where the [guardrails](../protection/buy-caps-and-cooldowns.md), humanity checks, same-block blocking, buy caps, cooldowns, are enforced.
* Your holdings show in your **dashboard** and on the **trade page**, before and after bonding, so you always see exactly what you own.

> ℹ️ The real, transferable SPL token is **minted at graduation**, when the token migrates to Meteora. Up to that point, the curve is a controlled, rules-enforced environment.

## The 85 SOL target

The bonding curve has a fixed graduation threshold of **85 SOL**. As buyers trade against the curve, SOL accumulates. The moment the curve hits 85 SOL of net liquidity, graduation triggers automatically, no manual action from the creator, and no discretionary timing.

> ℹ️ A fixed, transparent target means everyone knows exactly what graduation requires from the first second of the launch.

## Automated migration to Meteora DAMM v2

On graduation, 1EDGE automatically:

1. **Mints the real SPL token** and **seeds a Meteora DAMM v2 pool** with it and the SOL accumulated on the curve.
2. **Migrates trading** into that pool, so the token now trades on a standard, composable Solana DEX.
3. **Carries the fee model across**, Edge tokens switch to the [dynamic market-cap fee](edge-mode.md#how-fees-change-after-graduation); [EdgeTek](edgetek-mode.md) tokens keep their configured structure.

> ℹ️ **Vanity contract address.** Every migrated token is minted to a vanity CA that **always ends in `Edge`**, an at-a-glance signal that a token graduated through 1EDGE.

### Meteora's protocol cut

Once trading on Meteora, the pool's fees are subject to a **20% Meteora protocol cut**. The cut applies to **each fee stream individually**, the 1EDGE platform fee, the creator's share, and (on EdgeTek) every routing destination, so each party receives roughly **80%** of its configured slice. This is why post-graduation fees are *close to, but not exactly the same as*, the bonding-curve rates.

## Permanent LP token burns

When the Meteora pool is created, the **LP tokens are permanently burned**:

* The liquidity can **never be pulled**, there is no LP position for anyone, including the creator, to withdraw.
* The market becomes **permanent and rug-resistant** by construction.

> ✅ **Burned LP = locked liquidity, forever.** Graduation doesn't just move the token to a DEX, it makes the liquidity un-ruggable.

## Lifting pre-graduation constraints: and the human floor

The on-chain guardrails, humanity checks, same-block blocking, **wallet buy caps, and trade cooldowns**, protect a launch during its most vulnerable phase: the bonding curve. They are designed for **that phase only**, and they **lift automatically on graduation**, after which the token trades as a standard SPL token on the open Meteora market.

> ✅ **The point isn't to police the token forever.** It's to make sure the curve is filled by **real humans** during the launch, so the token graduates with a genuine holder base ("a human floor") rather than a stack of bot wallets waiting to dump. A launch built on humans is far less likely to collapse the moment protections lift.

## Lifecycle summary

<div class="flywheel">
  <div class="fw-box">
    <span class="fw-num">01</span>
    <div><div class="fw-title">Virtual-Token Bonding Curve</div><div class="fw-sub">Guardrails enforced, humans only</div></div>
  </div>
  <div class="fw-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></div>
  <div class="fw-box orange">
    <span class="fw-num">02</span>
    <div><div class="fw-title">85 SOL Reached</div><div class="fw-sub">Graduation triggers automatically</div></div>
  </div>
  <div class="fw-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></div>
  <div class="fw-box">
    <span class="fw-num">03</span>
    <div><div class="fw-title">Real SPL Minted</div><div class="fw-sub">The token goes live on Meteora</div></div>
  </div>
  <div class="grad-divider">▾ On graduation</div>
  <div class="grad-outcomes">
    <div class="grad-card"><span class="gc-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span><span><strong>Meteora DAMM v2 pool seeded</strong>, vanity CA ends in <code>Edge</code></span></div>
    <div class="grad-card"><span class="gc-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span><span><strong>LP tokens burned</strong>, liquidity locked forever</span></div>
    <div class="grad-card"><span class="gc-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span><span><strong>Fee model carries over</strong>, less Meteora's 20% cut</span></div>
    <div class="grad-card"><span class="gc-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span><span><strong>Pre-graduation guardrails lift</strong>, open market begins</span></div>
  </div>
</div>
