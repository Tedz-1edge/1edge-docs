---
description: 1EDGE's mainnet programs, contracts, configs, pools, locks and team wallets on Solana, Robinhood Chain and Arc.
---

<span class="ed-eyebrow">Help</span>

# Contracts

<p class="ed-lead">Every program, contract, config and team wallet 1EDGE runs on mainnet. Check an address here before you trust one from a chat.</p>

## <img class="mark" src="../../assets/marks/chain-sol.svg" alt=""> Solana

### Programs

| What | Address |
|---|---|
| 1EDGE launchpad (the curve) | `C8SdDh4Q6KJqv2W9zYPKDP2gSiLvv3srcjztVZ4oH27j` |
| Pass (Proof of Life) program | `6Y4ToZSCNCEwtNyADpsznKnEGj3kva49YM7gzzCdZLPK` |
| Open-launch pass gate (transfer hook) | `DMXgeMkN8ThAdSQK6H6P53quRyzPfQvEM2DR5ZBD2BDY` |

All three can only be upgraded by the treasury multisig below.

### $1EDGE token and pools

| What | Address |
|---|---|
| $1EDGE token (Token-2022) | `1EwcGE6WrssiY2sKSadB5E5DE9WhPDQvBC6kev1EDGE` |
| $1EDGE launch pool (Meteora DBC, bonded) | `Dp2NDziF67v694BvA81ZZnPkf4pGS6wiuLAzrWpWKkxz` |
| $1EDGE pool after graduation (Meteora DAMM v2) | `8sAcR5tMPmuFK8KcGGBxHZ517Yqg1M2xj2JCA7BzpCuT` |
| $1EDGE liquidity (permanently locked position) | `FJL276tuNvVmUD5o1Dy7AvJohH2oobpkrmDYNY9mJK1w` |
| 1EDGE pass collection | `37vwH2tMPod1XXCog3rsQTGmJdUGaF4NWNM9P1BvJthB` |

The $1EDGE token has no mint authority and no freeze authority: nobody can mint more or freeze a wallet.

### Configs and settings

| What | Address |
|---|---|
| Launchpad settings | `2ThjvYw95iTmd1ygArWtgPwMJT2b23gKb3GpMQcHxsYg` |
| Open-launch gate settings (allowed launch configs) | `3LCtXjw9eDaPcuEeythNDYj78ktXWFnUmx6SDiNHDA91` |
| Pass registry (read by the gate) | `4XNg64XyHRwVsXCQRzxVCSWkd2FVizeXivX8bTX2zTCk` |
| Pass registry index | `9jKJRiDd6BsMYLg3xevzW4oB5mwMDVL6BoTV82ArsYx6` |
| $1EDGE launch config (Meteora DBC, retired after launch) | `43yEPTWrfTXbBamuwRgV4h4zBrKF3ZXnL8GheAy1eQVo` |
| $1EDGE graduation config (Meteora DAMM v2) | `A8gMrEPJkacWkcb3DGwtJwTe16HktSEfvwtuDh2MCtck` |
| Open-launch address lookup table | `87oPgtXnQTmLXTAfuvGkDn9wmbYJ9FzjSwwV8rt4tJsv` |
| Pass mint address lookup table | `4nUU86tR5HM7XBn3Sc4S4KSXm1fdudTJJrSaCFCXJ71J` |

Coins on the 1EDGE curve graduate into their own DAMM v2 pool, so they use no shared DAMM v2 config.

??? info "All 63 open-launch configs (Meteora DBC)"

    Every open launch on 1EDGE starts from one of these. Each one carries the pass gate, and the gate refuses any config not on this list.

    | Quote token and fee | Address |
    |---|---|
    | SOL, 1.2% | `4wK5dMk7Ew2GhN4DcXk9q3diJ5fNHUujZHe5tRi8kanj` |
    | SOL, 2% | `Czcw1vTNrDBEzEvyjTdGzsSUeX7XQXLzSbauJa84VjJB` |
    | SOL, 3% | `DQ6nrGKar8X4MqqdkiBYX9Zq8URpBC5VLUTkr6rdZBd2` |
    | SOL, 4% | `HWmtbUE8eEfEB3rXURLdHNFusvMdaoa1NTtMbUQf7NpJ` |
    | SOL, 5% | `BE8Qg8zVbNQtwmiFzCXyYZZ4nLyCh7L8tXE7qBGNzNCw` |
    | USDC, 1.2% | `83xx7CmcdmDb7XwpwWzDfgi4BctPLbMWXA1RJyiTszoZ` |
    | USDC, 2% | `8gkiFbUDQVf763kFtomy1VXhGee79oPnbkHd9u63p8CS` |
    | USDC, 3% | `BhAhpuXR2C9bPPdbr6FWv3E6eWE9rfZ4RNtEuk51ptp3` |
    | USDC, 4% | `QAUDLsEETYQcaMN5oNq74zdBzpumDVS89P5V7hoLENf` |
    | USDC, 5% | `6uHYryfHqj82Jho2vhhvF5HJvj83A3xpKHxjUn8ESVwC` |
    | HYPE, 1.2% | `6uCjz2vE5fjzanXUeBp2Kv9HF5cHGswKUdYK27LT2AE1` |
    | HYPE, 2% | `D8xmzwT6yucGRVGPeF2xjPJbvbEzwe6j2e8agwJj3Urk` |
    | HYPE, 3% | `6zfLgbB8CK2KEnbPGB8ZwajQ1KP9gdmMxjMRyhUVTyQE` |
    | HYPE, 4% | `7uFx88sxTt8SqytJvGsJrjxpJAYnBJJc3AmpRZPcDWC7` |
    | HYPE, 5% | `2WXPAY1bvoEVh673Y1xHZHKhKNBS1nPqzbYfnc93RjHW` |
    | TAO, 1.2% | `t6uSpkdKVcsp7byWmRBc61HDQ5rMjd4FtZZwJvXxtsx` |
    | TAO, 2% | `CQE69WAhyVip2bbyj3YkzqSDQqEQiG94Y77MjpMpA1rd` |
    | TAO, 3% | `CDpuhPd7fi2HW14mf26JhsE5KH8jsE3LvSa6hF4bzf2Y` |
    | TAO, 4% | `9U72BNP2vk8wQi1ay3oa3VGnqWHjuFugZzF44uf724AP` |
    | TAO, 5% | `2ZP31uDo435GXxmHMmTYwA1upks7mRuiahQ6pijsXLq1` |
    | DOGE, 1.2% | `Bp2MM2EmjWxX3AxfXTUa3QedRaXiNtaYNYoiZb1S2STh` |
    | DOGE, 2% | `5GvGHb1bn4v4vJqFZKWS4ibC4JhumE4gSGj6aruMwLJv` |
    | DOGE, 3% | `3SuADxT2kAeibZC4da6kNe1faSwhveA3Hku1MSvczQE9` |
    | DOGE, 4% | `6UrmVnwGApsR7gRsfutpbUu5pCcgaRYkHqHDjfmwVX5T` |
    | DOGE, 5% | `4fa4C74RJRKNwUvdUJz1cyutvqCxuP7SHPZ467eGkY7p` |
    | USDe, 1.2% | `HPtscVtE97rcWft3SxDj11U63RJUVDxb2HiVAAFxduAP` |
    | USDe, 2% | `9Wa72gxNxJUK1tr4zz65WeU5JfJugyKBm3KRHDRg5eJC` |
    | USDe, 3% | `7gCaqUzUhouLdAvVGesVDYKvKyU5AimyxGeZuLjjDLW1` |
    | USDe, 4% | `CLnQQUocVNBD8GPLaNihwrm8CbNRjxNRagHuPqWED3jx` |
    | USDe, 5% | `2f3xGxAG1wGBUCgdGfqpxsWuzZhFGpPJsQrDpJFm3oz7` |
    | SPYx, 3% | `9CnXx1Gah35HHw6bnJgiMFmSHKeEHvEsUdExYo1Cbs5X` |
    | NVDAx, 3% | `HacSQALfAKekHJaV5q54ybZmwJ3RLbs6fDcnHeZS9D61` |
    | SPCXx, 3% | `HZDUHSdimwZZJkzXXW6UKm7wUMB12BMpCMNkHUVwPon5` |
    | CRCLx, 3% | `BDUdCcXpxF2dH7vsG8PqCA6WCduKfRVTcw6RPD7jphog` |
    | QQQx, 3% | `4o4XLA37c76GvPGqKYrHshPuyszQxtj6CPqJzzUWJSLs` |
    | TSLAx, 3% | `62P7RwNtx5mAnKcYC6YZw7cp2vCMKRxy8Z2o5daE5fn9` |
    | GOOGLx, 3% | `31TgigoB6E68mC92hkfS74mEQtLzrUYGuTHMp2Yi65iB` |
    | MSTRx, 3% | `8yYrHT3UR4XvTTyotsFWiAbcKryuZnJJfGgzzMiGAMRc` |
    | MSFTx, 3% | `3NH2yoYnNbA5GBoGzCKsNTiZ6Bbwpjud9Wh8FvDXPksX` |
    | GLDx, 3% | `4nfpHNfR5gScZzX2CSYgH11CfNMqtf5EksDiDX8CQgvZ` |
    | COINx, 3% | `4iC8eQzjUKrEMnvW1nbLTMLy9AQRhyYnFtWu8oSdhgEM` |
    | GMEx, 3% | `q8xos1APZVbGWgrGA7yp6iV2PnC9kYRht3Cny9Jjk5N` |
    | AAPLx, 3% | `BpEh56g1HJbBCmQdZ2MzA9nDezozhFSrRHqKQvi2WmHV` |
    | METAx, 3% | `ASUMcmxzLAz2EATmMV6w7iBjui4QeE42rFZ4jSqKdQ9g` |
    | HOODx, 3% | `738oh6hiP5zM1rMaMv3wPNs6t3PHfQ3hoENN6URKG8PR` |
    | MCDx, 3% | `ARxEEgAswW9XsETiwcT2ic3DXZ4uj7zHx1WFwuYjA65V` |
    | AMZNx, 3% | `9a8sQcYJCxXZxHDfytpxuNSQymZBKrFMcFTgu77NkenE` |
    | PLTRx, 3% | `6tfGecfDioCQeqeichxUrAXntQ9R26maKfcp5BQY1vUW` |
    | KOx, 3% | `4yFcfZb8mP68Qgqx4cEz5Q8YVa644B7mFtNV6SK7K3v2` |
    | BRK.Bx, 3% | `4v6y2iZSmyEF9NGLUnkr4F4JaTfSTbyXNdJdSAdAMf5d` |
    | MU, 3% | `DDA8CJfYoeKdBE7joBYWPG7VMrHtCRg4jhdoNFfapXnA` |
    | SKHY, 3% | `2vvcsyXPBa1JcoVNpX3D5rkVGKCHNVfyK7gQVrSwd9e1` |
    | DJT, 3% | `ejiaEGVUXbSptU3VyWtdTwiuvsgaUXyTWoUFUUmJdXS` |
    | SNDK, 3% | `Gy3MZwd1zuTFReJvoaF68i6atMWxFYwcxMyF1i3fM6bd` |
    | TTWO, 3% | `CMw3gSavgrwRtjJyB6ZimcZHwGkTbDFKhHaNAP8GN2v8` |
    | DRAM, 3% | `BBQ9VdCBRCiyADsnReEXTqtGUm8ExzWcRL945gcjMUB` |
    | DKNG, 3% | `2Z8EntYLanYhrfPHSVmKNskxjTiJrwM9BRU25dvdkSAL` |
    | MRNA, 3% | `EayHoysZsRV6MNwTVKdkTen3uJoTDvZjftqFmsfw25E5` |
    | HIMS, 3% | `AYpvoeQzR9ccinFXjCRkdPTVozMsaoRGTRoJj8pJ8hsj` |
    | NKE, 3% | `DQK6d53YbzH7veMGdHUewgM15GuQUuKMEKT4AWuj5yw3` |
    | NFLX, 3% | `4LYoMLnXMNaAiC8t7RgMnq5TyBDdZAv4x4E8oCtV7p57` |
    | AMD, 3% | `dNKSHzWmaZA5zeJtaMxCTjwBLxFR5CB6KGLPWmbpuhc` |
    | BOT, 3% | `BYRxjaXEirjm1XJY7J7kehPmkt9ASu2YU4XAnKpCFjZH` |

### Treasury and team wallets

| What | Address |
|---|---|
| Treasury (Squads multisig vault) | `CGtBDNeUFHaThfPGtY6ELkwD8n5V7wmtB633zwjJpueD` |
| Treasury multisig (4 of 5 signers, 15-minute time lock) | `8ZxbQTTnUVDqhMekXV4i6cDQGQEDaKGDiajSrByfF6Qt` |
| Curve fee treasury (launchpad program account) | `D3URauC2mgSC8cKQ84CxXyy8p2hsuuBZbR2ZXHWmk4d7` |
| Rebates and referrals vault (launchpad program account) | `DbBFnFZoiqqY2WThupoYDQELyTr6izMJsvsDHE18fWQW` |
| Team wallet ($1EDGE launch and locks) | `2RjwxDYc4ZnL7yn8GXg57kLaKvNtFtrAtVbEfJe1EDGE` |
| Seasons rewards wallet | `Ct187uCepjVYrtAwTVAT8Fa7WtxgAnD6wMGfwwHFmxwZ` |

### Locks and vesting

| What | Address |
|---|---|
| Team vesting: 401.55M $1EDGE, 78 weekly unlocks to the treasury, 14 Oct 2026 to 12 Apr 2028 (Streamflow) | `E9ScGRPxp3rb9HyQSGweQRw2GG5gJHC9CxmscR4fzUmU` |
| Team vesting escrow (holds the locked tokens) | `1tTgp6BgwUTvQfNEG8ykCUZqXQeidE5f1vuvZuM7Sws` |
| Team lock: 3.62M $1EDGE, unlocks in full 11 Apr 2028 (Streamflow) | `HExxoZKqvEmrmVdwsfBx4LctJLhwBFVmB46eYztuPfrr` |

Neither lock can be cancelled.

### Marketing & onboarding wallet

| What | Address |
|---|---|
| Team supplies wallet (marketing, KOLs, exchanges) | `BMHppDqrzVmw4XdNdoqcASxZfVbTT8NZUpDdXeFa2fEX` |

The team buys $1EDGE on the open market into this wallet to pay KOL partners, supply exchange listings and onboard new users. **This wallet never sells.** Tokens leave it only as transfers for those purposes, and every buy and transfer is public on [Solscan](https://solscan.io/account/BMHppDqrzVmw4XdNdoqcASxZfVbTT8NZUpDdXeFa2fEX).

| Date | Out | For |
|---|---|---|
| 16 Oct 2026 | 5,000,000 $1EDGE | KOL partnership |

### Meteora programs we use

Meteora DBC (launch curves) `dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN` · Meteora DAMM v2 (graduated pools) `cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG`. Explorer: [Solscan](https://solscan.io).

## <img class="mark" src="../../assets/marks/chain-rh.svg" alt=""> Robinhood Chain (chain id 4663)

### Contracts

| What | Address |
|---|---|
| Launchpad (the curve) | `0x7DeAee2B9200d2Ca316f71b62e0ecC6609F93A94` |
| Pass (ProofOfLife) | `0x7001a9fa373434e5c636b1148c35738a66de741D` |
| Verification registry | `0x71498226aaA1e120B8A8E0E7C54b59333424353f` |
| Migrator (moves graduated coins to Uniswap v4) | `0x1C6A0c075f76F50cA9F735B7eD53541509d98f68` |
| Migration hook (Uniswap v4) | `0x3274bd620543bB7DaF5b642d0E1961EBaBb76088` |
| EDGEstocks launchpad | `0xa17015Bd79cEe8fE6542DFf2218304a79f4db5DA` |
| EDGEstocks migrator | `0x5ea053685ED2B47984622A97F0e6C51918992123` |
| EDGEstocks migration hook | `0x02690214b56db4808b97810303e72a6b1b6e2000` |
| EDGEstocks fee seller | `0x6D32232449b5F5Cb5f4152Fa44Fa97eba3A32b89` |
| EDGEstocks pay-with-ETH | `0x4eA5e85b414043A9e242e0d7B299948f2aE34ee6` |
| Stack rewards | `0xb9f45305893fB1e9eC6B0FF2050e87D94D03d47C` |
| Open launch factory | `0xFe05E60D4Fa5e3f723A22f701bF205a78179F2f3` |
| Open launch gate hook | `0x8bf9E323d9513B8F44599a3886E75D181061e8eC` |
| Open launch fees | `0x513fdDBCe61225De5AE609A78fBdBb60e615f760` |
| Open launch router | `0x3B1557c1fB5D5CD121AFF4713b3B7AbDc34546E1` |
| Rules reader | `0xf0619a3B2d364271994C1E3a0423D78156537cf2` |
| Timelock (every contract change waits 48 hours) | `0xccc773e9eb74ea4973bC927786fE5E880F596DAc` |
| Access manager (owns every 1EDGE contract) | `0xb570C017c277831fc1FaCCC6eC4fAdb6FeDFae70` |

Settings live inside the contracts; there are no separate config addresses on EVM.

### Treasury and team wallets

| What | Address |
|---|---|
| Treasury (Safe, 3 of 4) | `0x2D79174325d5b6560B3DfA640CccCa37347003ef` |
| Buyback wallet | `0x57A7E58EeF16fcd281e77B728D5C9bA6a34616D7` |
| Stack wallet | `0xa000FdFeF8EF2664805CCEd6dD52416F71D7BBa3` |

Explorer: [robinhoodchain.blockscout.com](https://robinhoodchain.blockscout.com).

## <img class="mark" src="../../assets/marks/chain-arc.svg" alt=""> Arc (chain id 5042)

### Contracts

| What | Address |
|---|---|
| Launchpad (the curve) | `0x7DeAee2B9200d2Ca316f71b62e0ecC6609F93A94` |
| Pass (ProofOfLife) | `0x7001a9fa373434e5c636b1148c35738a66de741D` |
| Verification registry | `0x71498226aaA1e120B8A8E0E7C54b59333424353f` |
| Migrator (moves graduated coins to Uniswap v4) | `0x1C6A0c075f76F50cA9F735B7eD53541509d98f68` |
| Migration hook (Uniswap v4) | `0x3274bd620543bB7DaF5b642d0E1961EBaBb76088` |
| Open launch factory | `0x91C86607730F4E2Ff6fE49f284Fc94DAb6dFD16c` |
| Open launch gate hook | `0xc923B69DEBA970aC11B01663ca32e4eECfb168Ec` |
| Open launch fees | `0xb9f45305893fB1e9eC6B0FF2050e87D94D03d47C` |
| Open launch router | `0x2B3027836F1846241482F768E175e1EECF7c2111` |
| Rules reader | `0xf0619a3B2d364271994C1E3a0423D78156537cf2` |
| Timelock (every contract change waits 48 hours) | `0xccc773e9eb74ea4973bC927786fE5E880F596DAc` |
| Access manager (owns every 1EDGE contract) | `0xb570C017c277831fc1FaCCC6eC4fAdb6FeDFae70` |

The core contracts share their Robinhood Chain addresses. The open-launch contracts are separate deployments with their own addresses, and `0xb9f4…d47C` is a different contract on each chain.

### Treasury and team wallets

| What | Address |
|---|---|
| Treasury (Safe, 3 of 4) | `0x2D79174325d5b6560B3DfA640CccCa37347003ef` |
| Buyback wallet | `0xCd8Ae63D3E3866980F08eFe31C27974A932C351a` |
| Stack wallet | `0x525386EbCD3bb23573d59cF91db32262Dc52EED6` |

Explorer: [explorer.arc.io](https://explorer.arc.io).

## Liquidity

Graduated liquidity is locked by the contracts themselves: a permanently locked Meteora position on Solana, and a Uniswap v4 position owned by the migrator on Robinhood Chain and Arc, with no code path that removes it. See [Graduation](../launch/graduation.md).
