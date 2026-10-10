---
description: Your 1EDGE Wallet. Signing in with Google, X, Discord, phone or your own wallet, backing it up, sending and receiving.
---

<span class="ed-eyebrow">Start</span>

# Your 1EDGE Wallet

<p class="ed-lead">Every account gets a 1EDGE Wallet when you sign up: a Solana address and one EVM address that works on both Robinhood Chain and Arc. It's yours. You can export the keys any time.</p>

## Signing in

The **Sign in to 1EDGE** sheet offers:

- **Google, X, Discord, phone, Telegram, email, Farcaster or a passkey.** The wallet is made for you, no extension.
- **Your own wallet.** Phantom, Solflare, Backpack, MetaMask, Coinbase Wallet, Rabby, any wallet your browser detects, or WalletConnect.

!!! info "Your own wallet is the key to the door, not the account"
    If you sign in with Phantom or MetaMask, you're using it to *log in*. Your account, your pass and your trades still live in your 1EDGE Wallet. To mint a pass you also need Google, X, Discord or a phone number linked to it.

The 1EDGE Wallet is run by [Privy](https://privy.io). Keys are held in Privy's secure window, never by 1EDGE.

## Instant trades

With the 1EDGE Wallet, trades on 1EDGE curves and on Meteora / Uniswap pools go through **without a popup** for every click. See [Buy & sell](../trade/buy-and-sell.md#instant-trades).

## Back up your wallet

Do this once, right after you're in. Find **Back up your wallet** on your "you're in" card, or in **Settings → Back up 1EDGE Wallet**.

<div class="ed-steps" markdown>

1. You sign in again first.
2. Your key opens in Privy's secure window. 1EDGE never sees it.
3. You get two: **Solana key** and **Robinhood & Arc key**. Save both in a password manager.

</div>

!!! danger "Your key is your wallet"
    Anyone with this key controls your wallet and your pass. Keep it in a password manager, never share it, never paste it into a site you don't trust. **1EDGE will never ask for it.** If it leaks, move your funds out right away.

## Use it in other terminals

Your 1EDGE Wallet is a normal wallet. Export the key and you can import it into Axiom, GMGN, Fomo or any wallet app. Trades you make there from your 1EDGE Wallet still count as your trades. See [Trading elsewhere](../trade/other-terminals.md).

## Receive

Open your wallet, tap **Receive**, pick the coin (SOL, ETH or USDC). You get the address, the network and a QR code.

!!! warning "Right coin, right network"
    SOL and Solana tokens go to your Solana address. ETH on Robinhood Chain and USDC on Arc go to your EVM (`0x…`) address. Sending from another network to the wrong address can lose the funds.

## Send

Send SOL and Solana tokens, ETH and tokens on Robinhood Chain, or USDC and tokens on Arc. Send to an address or straight to a `@handle`. 1EDGE adds no fee; you pay the network fee.

Before you send, the wallet checks the address for you:

| Warning | Why |
|---|---|
| *That is an EVM (0x) address, and this send is on Solana…* | Wrong family of address for this chain. |
| *That is the zero address. Anything sent there is burned.* | Nobody can ever get it back. |
| *That is the token's own contract. Tokens sent there are lost.* | A common mistake. |

It also keeps enough back to pay the network fee.
