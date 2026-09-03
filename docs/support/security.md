---
description: How 1EDGE protects users, what's locked by design, and an honest note on audit status.
---

# Security & <span class="o">Risk</span>

1EDGE is built around a simple idea: protection should live in the **protocol and the design**, not in promises. This page lays out what's protected, what's locked by construction, and, honestly, what hasn't been done yet.

## What protects you, by design

| Protection | How it works |
| :--- | :--- |
| **Proof of Humanity** | Every participant is a verified human bound to a single wallet, making bot swarms and sybil farms far more costly to run, reinforced by the anti-bundle, buy-cap and behavioural defences below. |
| **Same-block bundle & snipe blocking** | The program rejects multiple wallets buying in the same block, defeating bundlers and block-zero snipers. |
| **Locked liquidity** | On graduation, Meteora LP tokens are **permanently burned**, liquidity can never be pulled. See [Meteora Graduation](../protocol/meteora-graduation.md). |
| **Virtual-token curve** | No transferable SPL token exists pre-graduation, so there's nothing to bundle or move outside the rules. |
| **Anti-vamp detection** | New launches are matched against existing tokens to flag copycat clones. See [Smart Anti-Vamp Protection](../protection/security-toolkits.md). |

## Audit status: the honest version

> 🚨 **1EDGE has not yet undergone a formal third-party smart-contract audit.** A full professional audit is costly, and we have chosen to launch without one rather than delay or overstate our security posture. We will commission and publish an audit when resources allow, and this page will be updated with the firm, scope, and report when that happens.

What that means for you:

* The protections described above are **real and enforced on-chain**, but they have not been independently reviewed by an external auditor.
* The contracts are deployed and verifiable. See the [Smart Contract Directory](contracts.md).
* As with any early-stage DeFi protocol, **participate with funds you can afford to lose.**

We would rather tell you this plainly than imply a security guarantee we haven't earned yet.

## Your own safety

* **Verify every link** against the [Official Resources](resources.md) page, impostor sites and servers are a common scam vector.
* 1EDGE will **never** DM you first, ask for your seed phrase, or ask you to "validate" your wallet on an external site.
* Check a token's **[transparency tags](../terminal/transparency-tags.md)** and holder distribution before trading.

## Reporting a vulnerability

Found a security issue? Please report it responsibly to **security@1edge.app** (or through the official channels on [Official Resources](resources.md)) rather than disclosing publicly. We'll acknowledge genuine reports and work with you on a fix.
