---
description: Block-zero snipers, bundling scripts, and MEV bots — and how 1Edge immunizes launches against them.
---

# The Broken State of Solana Launches

Solana made launching a token effortless. It also made **attacking** a launch effortless. On a typical launchpad, the most damaging activity happens in the first few seconds — long before a real person can react. By the time a human clicks buy, automated wallets already hold the early supply, and they are looking to sell it straight back.

This page breaks down the four main attack vectors, and how 1Edge neutralizes each one.

## 1. Block-zero snipers

Sniper bots monitor the chain for new launches and fire buy transactions into the **very first block** a token is tradable. Bundled through services like Jito, they pay to be first in line, front-running every organic buyer and pricing real demand out from second zero.

> ✅ **How 1Edge stops it:** the program rejects stacked deposits landing in the same block and enforces a short **launch grace period**, so bundle-and-snipe transactions can't monopolize the open. See [On-Chain Protection](../protection/buy-caps-and-cooldowns.md).

## 2. Developer bundling scripts

A single actor spins up dozens — sometimes hundreds — of fresh wallets and bundles them into the same launch transaction set, quietly cornering supply while appearing to be many independent buyers. When the chart pumps, every one of those wallets dumps at once.

> ✅ **How 1Edge stops it:** two layers. First, **Proof of Humanity** binds verified status to one human, one wallet, so a participant can't masquerade as a crowd. Second, the program blocks multiple wallets from buying in the **same block** at the protocol level — making bundle scripts structurally ineffective.

## 3. Sandwiching & MEV bots

MEV bots watch the mempool and "sandwich" a victim's trade — buying immediately before it and selling immediately after — extracting value from the price impact of every meaningful swap.

> ✅ **How 1Edge stops it:** optional **per-wallet trade cooldowns** (0–300 seconds) throttle the rapid-fire transaction spam sandwich strategies depend on, and same-block restrictions remove the atomic ordering bots rely on. Creators size these guardrails to their launch.

## 4. Vamp (copycat) clones

The moment a token gains traction, scammers clone its name and artwork to ride the momentum and siphon off buyers toward a worthless impostor. The overwhelming majority of these "vamps" are outright scams.

> ✅ **How 1Edge stops it:** **Smart anti-vamp protection** automatically matches every new launch's name and artwork against existing tokens, detecting clones the moment they appear and flagging impostors before they can prey on a real community. See [Anti-Vamp & Honeypot Toolkit](../protection/security-toolkits.md).

## The common thread

Every one of these attacks relies on the same assumption: that a single actor can act as **many anonymous wallets**, faster than any human. 1Edge breaks that assumption at the root — verified humanity as the entry gate, and program-level constraints that make scripted swarms ineffective — then layers optional creator controls on top.

The goal isn't to slow down trading. It's to make sure the people in the room are **people**.
