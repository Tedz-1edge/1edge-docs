---
description: 1EDGE's mainnet programs and contracts on Solana, Robinhood Chain and Arc.
---

<span class="ed-eyebrow">Help</span>

# Contracts

<p class="ed-lead">The programs and contracts 1EDGE runs on mainnet. Check an address here before you trust one from a chat.</p>

## <img class="mark" src="../../assets/marks/chain-sol.svg" alt=""> Solana

| What | Address |
|---|---|
| 1EDGE launchpad (the curve) | `C8SdDh4Q6KJqv2W9zYPKDP2gSiLvv3srcjztVZ4oH27j` |
| Pass (Proof of Life) program | `6Y4ToZSCNCEwtNyADpsznKnEGj3kva49YM7gzzCdZLPK` |
| Open-launch pass-gate hook | `DMXgeMkN8ThAdSQK6H6P53quRyzPfQvEM2DR5ZBD2BDY` |
| Treasury (Squads multisig vault) | `CGtBDNeUFHaThfPGtY6ELkwD8n5V7wmtB633zwjJpueD` |

Graduated coins trade on Meteora DAMM v2 (`cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG`). Explorer: [Solscan](https://solscan.io).

### Marketing & onboarding wallet

| What | Address |
|---|---|
| Team supplies wallet (marketing, KOLs, exchanges) | `BMHppDqrzVmw4XdNdoqcASxZfVbTT8NZUpDdXeFa2fEX` |

The team buys $1EDGE on the open market into this wallet to pay KOL partners, supply exchange listings and onboard new users. **This wallet never sells.** Tokens leave it only as transfers for those purposes, and every buy and transfer is public on [Solscan](https://solscan.io/account/BMHppDqrzVmw4XdNdoqcASxZfVbTT8NZUpDdXeFa2fEX). Listed here since 18 Oct 2026.

| Date | Out | For |
|---|---|---|
| 16 Oct 2026 | 5,000,000 $1EDGE | KOL partnership |

## <img class="mark" src="../../assets/marks/chain-rh.svg" alt=""> Robinhood Chain (chain id 4663)

| What | Address |
|---|---|
| Launchpad | `0x7DeAee2B9200d2Ca316f71b62e0ecC6609F93A94` |
| Pass (ProofOfLife) | `0x7001a9fa373434e5c636b1148c35738a66de741D` |
| Verification registry | `0x71498226aaA1e120B8A8E0E7C54b59333424353f` |
| EDGEstocks launchpad | `0xa17015Bd79cEe8fE6542DFf2218304a79f4db5DA` |
| EDGEstocks migrator | `0x5ea053685ED2B47984622A97F0e6C51918992123` |
| Treasury (Safe, 3 of 4) | `0x2D79174325d5b6560B3DfA640CccCa37347003ef` |

Explorer: [robinhoodchain.blockscout.com](https://robinhoodchain.blockscout.com).

## <img class="mark" src="../../assets/marks/chain-arc.svg" alt=""> Arc (chain id 5042)

| What | Address |
|---|---|
| Launchpad | `0x7DeAee2B9200d2Ca316f71b62e0ecC6609F93A94` |
| Pass (ProofOfLife) | `0x7001a9fa373434e5c636b1148c35738a66de741D` |
| Verification registry | `0x71498226aaA1e120B8A8E0E7C54b59333424353f` |
| Treasury (Safe, 3 of 4) | `0x2D79174325d5b6560B3DfA640CccCa37347003ef` |

Same addresses as Robinhood Chain: one deployment, two chains. Explorer: [explorer.arc.io](https://explorer.arc.io).

## Liquidity

Graduated liquidity is locked by the contracts themselves: a permanently locked Meteora position on Solana, and a Uniswap v4 position owned by the migrator on Robinhood Chain and Arc, with no code path that removes it. See [Graduation](../launch/graduation.md).
