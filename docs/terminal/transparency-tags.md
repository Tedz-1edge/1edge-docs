---
description: Automated flags that surface creator behaviour — like atomic dev-buys.
---

# Developer Transparency Tags

1Edge automatically tags tokens with **transparency flags** so traders can see meaningful creator behaviour at a glance — no manual on-chain forensics required. The philosophy is simple: surface the facts, clearly, and let people decide.

## Atomic dev-buys

An **atomic dev-buy** is when a token creator includes their own initial purchase **inside the same transaction that deploys the token** — buying the first tokens atomically at launch.

1Edge detects this and surfaces it as a tag on the token, along with the size of the dev-buy.

> ⚠️ **A dev-buy isn't inherently bad.** Plenty of legitimate launches use one — a creator buying into their own token can be a sign of conviction. The point of the tag is **transparency**: you see it clearly, and you decide what it means for you.

### Dev-buy limits

Even dev-buys are capped by the protocol, so a creator can't take an outsized opening position:

| Mode | Max dev-buy |
| :--- | :--- |
| Edge | **5%** of supply |
| EdgeTek | **20%** of supply |

These caps are enforced on-chain at deployment.

## Why surface this at all

Most launchpads hide creator behaviour, leaving traders to reverse-engineer it from the chain after the fact — usually too late. 1Edge flips that: the behaviour worth knowing is **shown up front**, on the token's [terminal](interface.md) page, before you trade.

Combined with [verified humanity](../index.md), the [anti-vamp toolkit](../protection/security-toolkits.md), and surfaced [asset health](interface.md#asset-health), transparency tags give you a complete, honest read on a token before you commit a single lamport.

## Related

* [Reading the Terminal](interface.md)
* [The Broken State of Solana Launches](../introduction/the-problem.md)
