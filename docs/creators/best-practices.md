---
description: Calibrating caps, cooldowns, and fees to survive the launch minute.
---

# Launch Engineering <span class="g">Best Practices</span>

A launch lives or dies in its first minutes. The protocol gives you the tools to come out of that window with a healthy, human holder base — this page is how to use them well. There are no magic numbers; the right settings depend on your token, your audience, and your target liquidity.

## Calibrating wallet buy caps

The [buy cap](../protection/buy-caps-and-cooldowns.md) (1%–3.5% of supply) controls how concentrated your opening distribution can get.

* **Lower caps (≈1%)** spread supply across more wallets — great for a fair, community-style launch, but they throttle genuine large buyers too.
* **Higher caps (≈3.5%)** allow more conviction-buying but let a few wallets take a bigger share.
* **Rule of thumb:** the more anonymous, high-velocity demand you expect, the lower you set the cap. A trusted, smaller community can tolerate a higher one.

## Choosing cooldown length

The [trade cooldown](../protection/buy-caps-and-cooldowns.md) (0–300s) throttles rapid-fire bot activity.

* **Short or zero** — frictionless, but offers little protection against scripted spam and sandwiching.
* **Longer (tens of seconds+)** — strongly suppresses bots and gives the curve room to breathe, at the cost of slowing legitimate fast traders.
* Match it to your launch velocity: a frantic, hyped launch benefits from a meaningful cooldown; a slow community mint may not need much.

> ⚠️ Guardrails are a trade-off. Tighter settings suppress bots **and** constrain real early demand. Tune for protection without strangling the genuine buyers you want.

## Designing your EdgeTek fee stack

If you're launching in [EdgeTek mode](../protocol/edgetek-mode.md), your fee budget (up to 3.80% on top of the 1.00% platform fee) is a strategic lever, not just a number:

* **Builder fee** funds you — but every basis point is a cost to your traders. Don't price out your own market.
* **Buyback & burn** adds buy pressure and deflation — powerful for a flywheel, but it's value that comes out of trading fees.
* **Extra LP compounding** deepens liquidity faster — pays off for a token you expect to grow and hold.
* **Keep the total reasonable.** A maxed stack (1% + 3.8%) is a heavy per-trade cost. Most healthy launches keep the total well below the ceiling.

## Using a dev-buy responsibly

An [atomic dev-buy](../terminal/transparency-tags.md) (max 5% Edge / 20% EdgeTek) signals conviction — but it's **surfaced transparently** to every trader. A modest, clearly-disclosed dev-buy reads as commitment; a maxed one reads as a warning. Size it accordingly.

## Pre-launch checklist

- [ ] Wallet verified (Proof of Humanity)
- [ ] Metadata final — name, ticker, image, description
- [ ] Socials attached (helps fend off vamps)
- [ ] Mode chosen (Edge vs EdgeTek) and fees configured
- [ ] Guardrails set to match expected launch velocity
- [ ] Dev-buy sized deliberately (if any)
- [ ] Wallet funded for deployment fee + dev-buy

## Related

* [The Launch Blueprint](launch-blueprint.md)
* [Wallet Buy Caps & Trade Cooldowns](../protection/buy-caps-and-cooldowns.md)
