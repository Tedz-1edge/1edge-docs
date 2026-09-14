---
description: Verified on-chain program and contract addresses for the 1EDGE protocol, on Solana and Robinhood Chain.
---

# Smart Contract <span class="g">Directory</span>

1EDGE runs on two chains: **Solana**, where the protocol is two on-chain programs, and **Robinhood Chain**, an Ethereum-compatible network, where it is three contracts. Both are on their test networks today; mainnet addresses will be published here at launch.

> ℹ️ **Test networks only, for now.** The Solana side runs on **devnet** and the Robinhood side on the **Robinhood Chain testnet**. These are the verified test-network addresses. Do not send real funds to any of them.

## Solana (Devnet)

| Program | Role | Address |
| :--- | :--- | :--- |
| **1EDGE Core** (`fcfs_launchpad`) | Token launches, bonding curve, Edge & EdgeTek fee logic, guardrails | `C8SdDh4Q6KJqv2W9zYPKDP2gSiLvv3srcjztVZ4oH27j` |
| **1EDGE Proof of Humanity** (`pol_program`) | Pass minting & tier upgrades | `Ceii7ibEYaeohajwSb1UVTgEPyhgweE1BcimkJiVz6EQ` |

> ℹ️ **EdgeTek is not a separate program.** Both Edge and EdgeTek launches are handled by the `fcfs_launchpad` program, the mode is a parameter set at deployment, not a different contract.

## Robinhood Chain (Testnet)

The same protocol, written in Solidity. Chain id **46630**, gas in ETH, explorer at [explorer.testnet.chain.robinhood.com](https://explorer.testnet.chain.robinhood.com).

| Contract | Role | Address |
| :--- | :--- | :--- |
| **Launchpad** | Token launches, bonding curve, Edge & EdgeTek fee logic, guardrails | `0xee8Ec74EE15203aF5d0EE72Dd42fE4950dC70e47` |
| **ProofOfLife** | Humanity-verified pass minting & tiers | `0x317528597EDa6D98a7D77DfabFaE46F440c99057` |
| **VerificationRegistry** | The verified-human record the curve checks on every buy | `0x0D1891a3d16C550031A64BD0984222d461951638` |

> ℹ️ **Why a registry here and not on Solana.** On Solana the curve reads the verification record the Proof of Humanity program writes. On Robinhood Chain that record lives in its own small contract, written only by the pass contract and read by the launchpad. Same rule, one more address.

> ⚠️ **A redeployed launchpad is a new address.** A launchpad's fee constants freeze on its first launch, so re-pricing means deploying a fresh one. Launches made against a retired launchpad stay on it and stop appearing in the app. The addresses on this page are the ones the app is pointed at; check here before you sign anything.

## Mainnet

> 🚨 **Pending launch.** Mainnet addresses, on either chain, will be published here once the protocol is deployed to them. Until then, treat any "1EDGE mainnet contract" address you see elsewhere as unverified.

## Verifying

You can inspect the Solana programs on a Solana explorer (set to **devnet**), and the Robinhood contracts on the [Robinhood Chain testnet explorer](https://explorer.testnet.chain.robinhood.com), using the addresses above. See also [Security & Risk](security.md) for the protocol's audit status.
