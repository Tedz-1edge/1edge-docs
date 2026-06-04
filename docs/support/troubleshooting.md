---
description: Resolution paths for common DeFi trading errors.
---

# Troubleshooting Directory

> ℹ️ 🚧 **Draft in progress.** Scaffolded from the approved architecture; full write-up to follow.

Resolution paths for the errors traders most commonly hit. Each will get a full "what it means / why it happens / how to fix" write-up.

## Planned coverage

### Slippage Exceeded
The price moved beyond your slippage tolerance before the trade landed — common during high-volume spikes. Fix: raise slippage tolerance or re-quote. See [The Execution Engine](../terminal/execution-engine.md).

### Insufficient SOL for Rent Exemption
The transaction would leave an account below Solana's rent-exempt minimum. Fix: keep a small SOL buffer for rent and fees.

### RPC node lag / network congestion
During heavy mainnet congestion, transactions can be slow to confirm or drop. Fix: retry, raise priority fee, or wait for congestion to clear.

## Planned additions

* Wallet connection issues.
* Failed / dropped transactions and how to recover.
* Verification & minting issues.

## Related

* [Official Resources](resources.md) — where to get live help.
