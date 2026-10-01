---
description: Add the 1EDGE bot to your Telegram group to post your token's buys, whales, bonding milestones and graduation, with one command.
---

# The 1EDGE <span class="g">Telegram Bot</span>

The 1EDGE bot posts your token's activity straight into your Telegram group: buys, whales, bonding milestones, graduation and new highs. Every alert links back to the token on 1EDGE, so your group can trade in one tap.

Setting it up takes one command with your token's address.

## Set it up in three steps

1. **Add the bot to your group.** Open the bot in Telegram, tap **Add to Group** and pick your token's group. On the test network the bot is **@OneEdgeDevBot**; the mainnet bot's name is announced at launch, and only that account is 1EDGE.
2. **Make it an admin with "Delete messages".** That lets it keep your chat clean. As soon as it's an admin it posts a short how-to in the group.
3. **Run `/setup` with your token's address:**

    ```
    /setup <contract address or pool address>
    ```

    On Solana that's all. If the same address exists on both Robinhood Chain and Arc, the bot asks you to name the chain: `/setup 0x… rh` or `/setup 0x… arc`.

The bot starts posting straight away. A group can follow up to **10 tokens**.

## What it posts

| Alert | When |
|---|---|
| **Buys** | Grouped into one message every few seconds, e.g. "3 buys · 1.20 SOL ($180)". |
| **Sells** | Off by default. Turn them on with `/sells on`. |
| **Whales** | Any trade of **$1,000 or more** gets its own alert. |
| **Creator trades** | When the wallet that launched the token buys or sells, the alert says so. |
| **Bonding milestones** | At **25%, 50% and 80%** bonded, once each. |
| **Graduation** | When the token graduates, with where it trades next. |
| **New highs** | A new all-time high, when it's at least 25% above the last high posted, at most once every 10 minutes. |

## Commands

**For everyone in the group**

| Command | What it does |
|---|---|
| `/token` | The live token card: market cap, holders, how far it's bonded. |
| `/ca` | The contract address, ready to copy. |
| `/buy` | A button to the token's trade page on 1EDGE. You trade from your own wallet. |
| `/how` | Every command, in the chat. (`/help` shows the same.) |

**For group admins**

| Command | What it does |
|---|---|
| `/setup <CA or pool address> [rh / arc]` | Follow a token. |
| `/unlink` | Stop posting about a token. Name it by symbol, CA or pool address, or pick it from the buttons. |
| `/settings` | Minimum buy, sells and emojis in one menu. |
| `/minbuy 50` | Only post buys of $50 or more. `/minbuy 0` posts every buy. |
| `/sells on` · `/sells off` | Show or hide sells. |
| `/emoji buy 🚀` | Your own emoji for **buy**, **sell** or **whale** alerts. `/emoji reset` goes back to the defaults. |

Following more than one token? Name the one you mean: `/token $SYMBOL`.

## Make it yours: emojis

Each group picks its own emojis for buys, sells and whales.

* 1 to 5 normal emojis per alert. Flags, skin tones and combined emojis all work.
* Anything else (text, links, symbols) is refused.
* Telegram Premium's animated custom emojis can't be sent by bots, so they aren't offered.

## A clean chat

With "Delete messages" on, the bot tidies up after itself:

| Message | Deleted after |
|---|---|
| Commands you send to the bot | Straight away |
| Replies to `/setup` and `/settings`, and error messages | 30 seconds |
| Replies to `/token`, `/ca`, `/buy`, `/how` | 5 minutes |
| The `/settings` and `/unlink` button menus | 2 minutes |
| Alerts, milestones and the admin how-to | Never: they stay |

## Official groups and staying safe

A **✅ Official** badge marks a token creator's own group, proven by the wallet that launched the token. Groups that already carry the badge keep it.

The 1EDGE bot **never**:

* messages you first,
* holds a wallet or your funds,
* asks for a private key, a seed phrase or a "validation".

Anyone who does any of that is not 1EDGE. Report it in the group and leave the chat.

## Something not working?

| You see | What to do |
|---|---|
| "Only a group admin can set up a token." | You need to be an admin of the group. Anonymous admins posting as the group count too. |
| "No 1EDGE token has that address." | Check the address is complete and that the token launched on 1EDGE, on this network. |
| "That address exists on Robinhood Chain and Arc." | Add the chain: `/setup 0x… rh` or `/setup 0x… arc`. |
| "That token is hidden on 1EDGE and can't be set up." | 1EDGE has hidden the token. A group already following it gets a notice and the posts stop. |
| Buys aren't showing | Check `/settings` for a minimum buy. Sells are off unless you run `/sells on`. Fast buys arrive together in one message. |
| My commands stay in the chat | Make the bot an admin with "Delete messages" turned on. |

If `/how` isn't recognised, your group is talking to an older version of the bot.
