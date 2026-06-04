---
description: Verified on-chain program IDs for the 1Edge protocol.
---

# Smart Contract <span class="g">Directory</span>

The 1Edge protocol runs on two on-chain programs. The launchpad is currently live on **Solana devnet**; mainnet addresses will be published here at launch.

> ℹ️ **Devnet only, for now.** The 1Edge launchpad is in its devnet phase. These are the verified devnet program IDs — do not send mainnet funds to them.

## Program IDs (Devnet)

| Program | Role | Address |
| :--- | :--- | :--- |
| **1Edge Core** (`fcfs_launchpad`) | Token launches, bonding curve, Edge & EdgeTek fee logic, guardrails | `C8SdDh4Q6KJqv2W9zYPKDP2gSiLvv3srcjztVZ4oH27j` |
| **Proof of Humanity** (`pol_program`) | Humanity-verified NFT minting & tiers | `Ceii7ibEYaeohajwSb1UVTgEPyhgweE1BcimkJiVz6EQ` |

> ℹ️ **EdgeTek is not a separate program.** Both Edge and EdgeTek launches are handled by the `fcfs_launchpad` program — the mode is a parameter set at deployment, not a different contract.

## Mainnet

> 🚨 **Pending launch.** Mainnet program IDs will be published here once the launchpad is deployed to Solana mainnet. Until then, treat any "1Edge mainnet contract" address you see elsewhere as unverified.

## Verifying

You can inspect either program on a Solana explorer (set to **devnet**) using the addresses above. See also [Security & Risk](security.md) for the protocol's audit status.
