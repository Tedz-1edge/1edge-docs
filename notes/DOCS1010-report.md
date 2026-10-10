# DOCS1010 — docs v2 (redesign + everything at the open)

NEXT: founder review: read §1 (6 decisions) and look at screens/docs-v2-1010/. To publish: merge agent/docs-v2-1010 into main (Netlify builds main), then run the 301 check in §2. This lane is done.

Branch `agent/docs-v2-1010` (from origin/main 953578b). **Not merged, not deployed** (Netlify publishes main). No box touched, no env changed, no transaction sent.

Sources every claim was checked against (fact sheets with file:line cites in `~/work/scratch-DOCS1010/facts/A–E*.md` on the VPS):
- frontend `release/fe-mainnet-1010` (~/work/1edge-frontend-SITE1010 @1774214, = the live mainnet site RC) + origin/main f52706a
- backend `fix/pass-identity-h1` **51e090e** (live mainnet API), incl. `deploy/mainnet/pm2/env-manifest.snapshot.js` (MAN) for what is ON at the open
- programs: 1edge-solana `agent/release-mainpack-r20` 74f534e / `release-kit-r20` / `passfee-kit`; 1edge-evm `agent/release-evm-r20` 23c073d

## 1. Decisions for the founder

1. **Seasons wording public?** The page `rewards/seasons.md` documents the mechanics you asked for: weights 25/25/15/15/10/10, the 150 floor, Being here as a bonus that only adds above 150, 1 SOL net, 500 seats in 4 bands, dollar seats paid in $1EDGE, 28-day claim, pay lag, wash hold. Two things pull the other way:
   - the backend support prompt marks Seasons and payouts **"NOT PUBLIC yet: point to the Seasons deck, do not explain mechanics"** (be api/index.js:21631-21632);
   - `SEASONS_OPEN` is still **"DECISION NEEDED"** (MAN:296).
   If Seasons stays locked at the open: delete one nav line (`Seasons: rewards/seasons.md`) and the file before merging. The support assistant's KB mirrors docs.1edge.app, so once this page is live **the assistant will explain the mechanics**, whatever the prompt says. Also, while `EDGE_MINT` is unset, seats settle as 0 (seasons.js:16-17).
2. **Boosts and Back $1EDGE are left out** (off at the open; see §4). Ready drafts are in `notes/drafts/boosts.md` and `notes/drafts/back-1edge.md` (not published: only `docs/` builds). Publishing each one = move the file into `docs/` plus one nav line. This follows your rule "hide what can't apply", which beat "the new boosts stuff" on 10 Oct.
3. **The card on-ramp is in** (get-your-pass, bridging), marked *if available in your region* as you asked. But `FIAT_ONRAMP` is **not in 51e090e's env list**: f2fb625 isn't an ancestor. It also needs a card provider switched on in the Privy dashboard. If it's not on by the open, the copy still reads true ("you may see"), but you may prefer to cut the section.
4. **Discord removed.** The old docs linked `discord.gg/n4zEupfj23`, and the code has no official Discord anywhere (FE + BE). Telegram now points at `t.me/Join_1EDGE` (the official group in be deploy/mainnet/tg/README.md). The old invite `t.me/+VTnz0sJ_qAg4NDg0` is gone. Confirm both.
5. **Open launches are documented as ON** (decision D-2 in the mainnet pack: "Solana open gate ON at launch"). If Sunday's H3 throwaway fails, the rollback leaves the open gate off. Then these need a pass: `launch/open-launches.md`, the open rows in modes/fees/graduation, and other-terminals "open launch" rows.
6. **Robinhood EDGEstocks documented as ON at the open.** The stock contracts are held in edge-chain.js until `opensAt`. geo-block.js:59 still has an old comment "stocks LIVE at mainnet 20 Oct". **Solana xStocks are left out** (MAN:318 "no xstock until the stock switch-on"; "mainnet OFF until the lawyer").

## 2. Page map (37 pages)

| Section | Page | What's on it |
|---|---|---|
| Home | `index.md` | hero, 6 cards |
| Start | `start/index.md` Getting started | first five minutes, where things are, opening day |
| | `start/get-your-pass.md` | the pass: what it unlocks, the check, SOL/ETH/USDC, one price ~$4.30, 3 chains, card on-ramp, errors |
| | `start/wallet.md` | 1EDGE Wallet (Privy), own-wallet login ("key to the door"), backup (two keys), terminals, receive/send checks |
| | `start/port.md` | bring your pass: steps, the M-4 warning verbatim, rules |
| | `start/chains.md` | Solana / Robinhood Chain / Arc with the site's chain marks, free passes |
| | `start/profile.md` | @username, link, picture/banner, Link Telegram |
| Launch | `launch/modes.md` | EDGE / EDGEtek / EDGEstocks with mode marks; 1EDGE launch vs open launch; graduation targets |
| | `launch/launching.md` | the 6 steps, launch fees $2/$10/$10, dev buy 5%/20%, cap + cooldown, copycat protection, CA bank, good launches |
| | `launch/open-launches.md` | what the hook checks (buys / sells / transfers / after graduation), launch shield 75%→normal in 15 s, every launch rule, give-ups, open fees |
| | `launch/stocks.md` | EDGEstocks on Robinhood Chain: holders earn a stock, and priced in a stock |
| | `launch/graduation.md` | bonding bar states, targets, what happens per venue, post-grad fees, 7-day refund |
| Trade | `trade/marks.md` | **legend of every mark**: chain, mode, stock and USDC discs, venue rings, crown, flame, heat ×3, protected, stage chips, token-page chips, trust card, DEV/T10/YOU, 12 rule icons, people marks |
| | `trade/buy-and-sell.md` | quick buy/sell per chain, slippage 1.5%, priority fee, instant trades, errors |
| | `trade/fees.md` | every fee per mode/chain, before and after graduation, shield, rebates, launch, pass, bridging, no-fee list |
| | `trade/bridging.md` | Pay with SOL (0.25%, $2–$2,000), Bridge (0%), routes (Arc→rh closed), Relay |
| | `trade/alpha-stream.md` | 3 lanes, what counts as talking/moving, never paid for |
| | `trade/calls-and-pnl.md` | calls, judging, PnL card, profile stats, Trader DNA |
| | `trade/discover.md` | board, filters, search, watchlist, follow + bell, token lock (Jupiter), install |
| | `trade/other-terminals.md` | Axiom/GMGN with your 1EDGE wallet: what works where, what counts, Being here only on 1edge.app |
| Rewards | `rewards/tiers.md` | Core/Alpha/Elite/Apex 10/15/20/25, $10k/$50k/$200k or 25/250/1,000, upgrade, claim |
| | `rewards/referrals.md` | 25% for life, 0.5 SOL validation, tier count, /ref in Telegram |
| | `rewards/seasons.md` | see decision 1 |
| | `rewards/earn.md` | Robinhood Stock Token / USDG pools, no fee, the risk cards, geo |
| Social | `social/feed.md` | posts, feed, reactions, communities, DMs (E2E opt-in, 1:1), profiles |
| | `social/trophy-cabinet.md` | refreshed (Championship + Chains shelves, Top Caller, Was There, new tier thresholds) |
| | `social/notifications.md` | defaults, opt-ins, push on phones |
| | `social/telegram-bot.md` | João's guide refreshed: /top /stats /leaderboard /gif /ref, 25/50/80/90/95, social alerts, small-buys folding, launch bot, Edgar |
| | `social/moderation.md` | report reasons, ladder with durations, silent limited reach, one appeal |
| Help | `help/support.md` | in-app thread (🤖 replies), Edgar on Telegram, what the assistant can't do, person-only topics |
| | `help/safety.md` | 5 rules incl. the port-link scam |
| | `help/troubleshooting.md` | ~40 verbatim messages with what to do |
| | `help/regions.md` | what a blocked user sees, VPN line, links to Terms (no legal text restated) |
| | `help/contracts.md` | mainnet addresses, all three chains |
| | `help/links.md` | official links, emails, the five policies |
| | `help/what-we-track.md` | moved from support/, stale parts fixed |

`social/telegram-bot` and `social/trophy-cabinet` keep their old paths: the bot's `/how` links to the first (tg-commands.js:45), and the support assistant to the second. **Every other old URL has a 301** in `netlify.toml`, with and without the trailing slash, because `SUPPORT_TOPICS` (be index.js:21633-21654) hard-codes 12 old paths. Check after deploy: `curl -sI https://docs.1edge.app/protocol/edge-mode/` should give a 301 to `/launch/modes/`.

## 3. What changed vs the old docs

**Design.**
- 1edge.app's tokens: black; #4ade4a, tek #2E86FF, gold, orange; Inter; JetBrains Mono caps labels; dark bordered cards; the site's 01/02/03 step chips and green CTA.
- The text wordmark (`1edge_wordmark.png`) in the header on every width.
- Marks are copied, never drawn:
  - chain-*.svg, mode-*.svg, meteora-logo.svg and uniswap-logo.svg byte for byte from the release;
  - crown, flame, the 3 heat marks and the 13 rule icons extracted from `index-s1.js` / `rule-icons.js` by `scratch-DOCS1010/tools/extract-marks.cjs`.
- Top tabs on desktop, drawer on phones, instant navigation + prefetch, search with suggest/highlight/share.
- No pill badges.
- The favicon is the site's own tab icon (`1edge_icon.png`). It's the 1E square, but only as the browser-tab icon, the same file 1edge.app uses. Swap it if you want even that gone.
- Old Syne headings, two-tone nav script, banner, tier JPGs, tour videos and old app screenshots: removed.

**Content.** Every page was rewritten in the trader voice. Main corrections:
- **Three chains, not two**: Arc was missing everywhere. Mainnet, not "test networks" (contracts page had "Mainnet: Pending").
- Pass: $2 + Solana rent, one price on SOL/ETH/USDC, all three chains from one payment. Old: 0.02 SOL, per-chain activation.
- The check: email-only 1EDGE Wallets can't mint (`PRIVY_HUMAN_GATE`). Old: "no social account required".
- **Seasons weights 25/25/15/15/10/10.** Old: 35/25/15/10/10/5. Being here is now a bonus above 150, not an axis. Presence is no longer used to hold payouts (old what-we-track said it was).
- **Tiers by dollars** ($10k/$50k/$200k, all chains), not SOL. **"Point multipliers" removed** (no such thing in code). The "future tier / TBA" is gone. The "future revenue share" promise was already gone on main.
- New: open launches + launch rules + launch shield (75% → normal in 15 s; old drafts said 50%/10 min), EDGEstocks, bridging (0% bridge, 0.25% Pay-with), instant trades, Alpha Stream, Earn, calls scoring, other terminals, Edgar, the port-link scam.
- Social:
  - token communities are made by the creator, not automatic per launch;
  - E2E DMs are opt-in, 1:1 only;
  - limited reach is silent, with no appeal.
- Telegram: milestones are 25/50/80/90/95, and /top, /stats, /leaderboard, /gif and /ref are new.
- The name "EdgeAI" is gone (it's "the support assistant" in-app and Edgar on Telegram).
- Removed:
  - "the-problem" / "flywheel" marketing pages;
  - SOL tier thresholds;
  - the Discord link;
  - the wallet-panel swap "1EDGE fee 0.50%" (see §5);
  - "presence softening a dock".

## 4. Built but OFF at the open — left out (founder rule)

| Feature | Why it's off | Evidence |
|---|---|---|
| **Boosts** (burn $1EDGE) | "OFF at the open; arm only once $1EDGE trades"; page hidden on mainnet without ?boostspage=1 | MAN:292, boosts-entry.js:10 · draft in notes/drafts |
| **Back $1EDGE** | needs $1EDGE + its DAMM v2 pool; holders option P3; EVM + Edge split not wired; mark draws nothing | MAN:276-288, back-1edge-marks.js:3-6 · draft in notes/drafts |
| **Crews / affiliates** | "CREWS_ENABLED: parked, no row" | MAN:348 |
| **Solana xStocks** (Solana EDGEstocks) | "no xstock until the stock switch-on" | MAN:318, :405-412 |
| Robinhood stock-priced launch on the 1EDGE curve (StockLaunchpad "Model B" as the brief calls it) | contracts deployed, but the launch page in this release has no path to create one | edge-chain.js:194-204; no stockLaunchpad in launch-*.js |
| Launch rules on Solana 1EDGE-curve launches | "come with the first upgrade"; RULES_LIVE never sol:fcfs | launch-rules-env.js:5-8 · stated in docs |
| "Or describe it" AI rules box | RULES_DESCRIBE=0 | MAN:79 |
| AI launch art | ART_DAILY_CAP=0 | MAN:376 |
| Instant (no-popup) trades on open launches | wallet sheet until instant.js learns DBC/hook | edge-chain.js:235-236 · stated in docs |
| EVM token lock | preview only (?evmlock=1) | token-lock-evm.js:1-10 |
| EVM open-launch rebates | RH/ARC_OPEN_REBATES not in MAN | opengate-rebates.js:4,29 |
| Arc → Robinhood bridge route | closed | xbuy-routes.js:121 · stated in docs |
| "Verified human" gold badge | reserved, nothing issues it | edge-badge.js:369-370 · and the docs never say "verified human" |
| Sniper flag on rh/Arc | SNIPER_FLAGS_CHAINS=sol | MAN:382 |
| "Fair launch", "fast graduation", creator vanity CA, lock toggle | **not features in the code at all** (vanity-import.js = founders-only wallet import; preopen-grind.js = decoration) | B sheet §4b |
| Leaderboard / Top Traders menu | "NOT listed yet" | wallet.js:4190 |

## 5. UNVERIFIED (could not settle from code; most are arm-phase switches on the box)

1. **Pass price "about $4.30"** only holds with `PASS_FEE_USD_MODE=armed` (phase after, MAN:128). In observe mode the voucher carries the 0.02 SOL ceiling and no $ figure shows (be pass-fee.js:62). Check `GET mn-api…/api/pass/fee`.
2. **ETH/USDC payment + free rh/Arc passes** need arm switches: PASS_PAY_EVM_ENABLED, SOL_PASS_CARRY_ENABLED, POL_MINT_RELAY_ENABLED, RH/ARC_POL_RELAY_ENABLED (MAN:355-375). The FE says the relay was armed 09 Oct (edge-chain.js:327).
3. **Card on-ramp** (decision 3).
4. **Open launches on Solana** (decision 5); `SOL_OPEN_LAUNCH` is phase opengate.
5. **Launch shield 75% → normal over 15 s on Solana mainnet.** The on-box `open-configs.mainnet.json` is generated on vps6 and isn't in any repo. The devnet SHIELD15 table and the EVM hook config agree. `early-fee.js:4-5` still has a stale "50% / 10 min" header comment; the code reads the chain.
6. **Arc graduation target 7,500 USDC**: EVM release config 5042.json says `"reviewed": false`.
7. **Bridging + Pay-with**: XBUY_ENABLED / BRIDGE_ENABLED are arm switches. No real mainnet move has been made yet (BRIDGE-report).
8. **Earn** (`EARN_ENABLED`, phase stocks) and **Robinhood EDGEstocks** (`RH_STOCK_REWARDS`, stock list) at 15:00 on day one.
9. **Edgar AI + Link Telegram**:
   - `TG_EDGAR=1` only after edgar-checkset-live prints PASS (MAN:472).
   - `TG_EDGAR_BOT` has **no row in MAN**. Without it, Link Telegram answers 503 "telegram linking is not configured" (be tg-link.js:61-62).
   - The mainnet bot @usernames aren't in code, so the bot page says "use only the bot linked from official accounts".
10. **Support thread**: SYSTEM_DM_WALLET is "NEEDED AT THE OPEN" (MAN:384). If it's empty, the page reads "Support is not reachable right now".
11. **Copycat state meanings** (Established / Evaluating / Cooling / Reserved) are inferred from the keys LOCKED_PERMANENT / POST_BOND_EVAL / PRE_BOND_COOLING / PENDING_COOLING (1edge-launch-s1.js:849-851). No user-facing definition exists.
12. **Terminal volume credit**: graduated DAMM v2 swaps are credited to the tx fee payer (indexer.js:495). If a terminal pays fees from its own relayer, the user may not be credited. Not tested against a real Axiom tx. The docs say "your trades count wherever you make them".
13. **Contracts**:
    - The Solana hook id `DMXgeMkN8…` is the declared program id in release-kit-r20 (decision D-2); not read on chain.
    - The rh/Arc open-gate hook/factory, Launchpad migrator and StockRewards addresses are truncated in code, so they're left off the page.
14. **"A held share nobody contests is forfeited"** (kept from the old what-we-track): the wash-hold code says owed-not-forfeited until a person decides. Not traced to a forfeit path.
15. **Token page after graduation on Solana 1EDGE launches**: "buyers' tokens unlock" (positions are virtual until migration). Whether claiming is automatic wasn't traced.
16. **Seed tier**: code says the first 50 to reach 25 referrals; the NFT text says "first 50 passes minted". The docs only say "the earliest members; closed".
17. **Official Telegram** `t.me/Join_1EDGE` (decision 4).

**Product bugs found on the way (not docs, FYI):**
- The wallet-panel swap quote shows "1EDGE fee (0.50%)", but `EDGE_SWAP_FEE_WALLET` is set nowhere, so no fee is taken (edge-wallet.js:58,1894-1902).
- The launch page's wallet-cap tooltip says "When disabled, no dev buy limit", but the dev cap is enforced on-chain always (1edge-launch.html:1132).
- The pre-open step says "An email or a social account is enough", but email-only can't mint (preopen-copy.js:29 vs privy-gate.js:45).
- manifest.json still says "on Solana" only.
- The dashboard Seasons line still lists "holding" (1edge-dashboard-s4.js:3570).

## 6. Proof
- `mkdocs build --strict` (mkdocs 1.6.1, mkdocs-material, the netlify command's requirements.txt): **0 warnings**, 37 pages (36 + 404). Strict validation is on in mkdocs.yml (`validation:` links/anchors warn → strict fails).
- Link check over the built HTML, every local `href`/`src` incl. raw-HTML cards, legends, figures and `#anchors` (`scratch-DOCS1010/tools/linkcheck.py`): **37 pages, 0 broken**.
- Search: `site/search/search_index.json` has 268 entries. In the browser, typing "launch shield" gives: Open launches & rules, Fees, Launch a coin, Troubleshooting, Every mode (`screens/docs-v2-1010/_search-launch-shield-1440.png`).
- `netlify.toml` parses (tomllib): build command unchanged, **58 redirects** (29 old pages × with/without slash), all 301 + force.
- **Screens:** every docs page at 390×844 and 1440×900, full page, PNG (`screens/docs-v2-1010/<path>-{390,1440}.png`, 72 files). The shooter is `scratch-DOCS1010/shoot/docshot.mjs`; it serves `site/` locally and recorded no page errors and no 4xx.
- **Real-site images in the docs:** 41 WebP files (1.5 MB) from 96 screenshots of `release/fe-mainnet-1010`, served locally by the repo's own Playwright worlds on invented data.
  - Boost UI is hidden and asserted absent in every shot.
  - Shots that showed off-at-open features (Solana xStocks mode card, TSLAx token page) were not used.
  - Captions say "sample data".
  - Shooter scripts and an INDEX are on the VPS: `~/work/scratch-DOCS1010/shoot/`, `shots/INDEX.md`.
- Built site: 7.3 MB, of which shots 1.5 MB. `navigation.instant` + prefetch, lazy images.
