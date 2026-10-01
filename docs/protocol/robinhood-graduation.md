---
description: The Robinhood Chain path, the ETH curve, migration into a Uniswap v4 pool, and liquidity locked by construction.
---

# Graduation on <span class="g">Robinhood Chain</span>

A launch on Robinhood Chain runs the same bonding curve as a launch on Solana, in ETH instead of SOL, and graduates into a **Uniswap v4** pool instead of a Meteora one. Everything a trader does is the same. What changes is the currency, the DEX at the end of the curve, and a few details worth knowing before you launch there.

The Solana path is documented in [The Meteora Graduation Protocol](meteora-graduation.md); this page is its twin.

## The curve

The curve is the same maths, denominated in ETH. It fills as buyers trade against it and graduates the moment it reaches its threshold, automatically, with no discretionary timing and nothing for the creator to press.

The threshold is a protocol constant, set so a Robinhood curve asks roughly what an 85 SOL curve asks. On the testnet today that is **4 ETH**. The launch page shows the live figure and how full a curve is, and a pool always bonds at its own chain's threshold, in its own currency.

## The token before graduation

On a Solana 1EDGE launch there is no transferable token until graduation. On Robinhood Chain the token contract is deployed when the launch is created, **and the entire supply sits inside the launchpad contract**. Curve positions are IOUs on the launchpad's books until they are delivered.

The protection is the same one: nobody holds a transferable balance while the curve is running, so there is nothing to bundle, move or trade outside the rules. Every buy and sell goes through the launchpad, where the 1EDGE Proof of Humanity gate, the [guardrails](../protection/buy-caps-and-cooldowns.md), the grace period and the one-buy-per-block rule are enforced.

## What happens at graduation

1. **Your tokens are delivered to you.** The launchpad pays out every depositor's balance. You don't claim anything, and there is no window to miss.
2. **A Uniswap v4 pool is opened** with the ETH the curve collected and the unsold remainder of the supply.
3. **One full-range liquidity position is minted, owned by the migration contract.** There is no code path in that contract that removes liquidity. The principal stays where it is, permanently.
4. **The pool key is guarded**, so nobody can pre-open a launch's pool ahead of the migration and brick it.

> ✅ **Locked by construction, not by promise.** As on Solana, the liquidity that lands at graduation can never be pulled, by anyone, the creator included. Solana burns the LP tokens; Robinhood's migration contract holds the position and has no way to withdraw it.

## Fees after graduation

This is the one real difference in the economics, and it goes the trader's way.

* **The pool's swap fee is fixed at the launch's total curve fee.** An Edge-mode token keeps its 1.15%; an EdgeTek token keeps whatever it was configured with. There is no market-cap step-down on this chain, that is a [Meteora-side mechanism](edge-mode.md#how-fees-change-after-graduation).
* **No protocol cut.** Meteora takes 20% of fees on Solana. Here the whole swap fee comes back to the launch and is split by the same rates the curve used: 1EDGE's platform fee, the creator's share, LP compounding, and on EdgeTek the buyback and Stack vaults.
* **Fee collection is permissionless.** Anyone can trigger a collection round; the LP share compounds straight back into the position and the rest goes to the destinations the launch was deployed with.

## Where it stands today

> 🚨 **Bonded launches cannot migrate on the testnet.** Uniswap v4 is deployed on Robinhood Chain's mainnet, not on its testnet, so there is no pool for a testnet launch to graduate into. The curve, the guardrails, the trading and the fee split all work on the testnet; the step past graduation does not exist there yet. Nothing on a test network has value in any case, see [Security & Risk](../support/security.md).

## Related

* [The Meteora Graduation Protocol](meteora-graduation.md), the Solana path.
* [EDGEstocks](edgestocks.md), a Robinhood Chain launch priced in a stock token, which graduates into a Uniswap v4 pool paired with the stock.
* [Edge Mode](edge-mode.md) · [EdgeTek Mode](edgetek-mode.md)
* [Wallet Buy Caps & Trade Cooldowns](../protection/buy-caps-and-cooldowns.md)
