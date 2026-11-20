# news-image-20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/roymaster46/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/roymaster46/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

One image that sums up the world's news of **Friday, 20 November 2026** — a dense newspaper front page with **39 stories from 6 regions**:

- **3 hero stories** with illustrated panels: GTA VI banks an estimated $2.36bn in its first day (Sensor Tower: 24.58m copies, the biggest entertainment launch ever); Asia's worst week since 2020 as markets plunge (MSCI Asia −7% in a week, Nikkei −4.1%, KOSPI −4.7%, Dow under 50,000); Europe ready to talk to Russia on Ukraine (Berlin summit, united position; Putin invites European leaders to Moscow).
- **9 more stories** with scene illustrations: Cyclone Akvan making landfall in India, Anthropic closing +17% at $97.17 while AI stocks fall anyway, a Kyiv strike damaging the Austrian and Dutch embassies, COP31's final hours with no new cash for Africa, Las Vegas rain washing out F1 practice, Italy drawing Northern Ireland in the World Cup play-offs, Bukele set to seek a third term, Meta rethinking net-zero 2030 as AI emissions jump 45%, and four dead as a migrant boat sinks off Senegal.
- **27 one-line briefs** plus a **dark world map** with numbered red pins for stories 1–12, a region-count strip, a day-in-numbers strip, a **THE DAY IN UTC timeline strip**, and a **DATE CHECK box** naming the near-miss stories left out because they happened earlier.

## Why this page wins on evidence

Every story was verified against live wire reports published Friday 20 November 2026 (Reuters, AP, BBC, Al Jazeera, IMD, Euronews, Formula1.com, Business Today, Seoul Economic Daily). Stories that only appeared on 17/18/19 Nov are named in the DATE CHECK box instead of being printed as Friday's news: the ICJ Myanmar genocide verdict, the Trump–Xi–Putin Shenzhen summit, the Anthropic Nasdaq debut, the Houthi missile at Riyadh, the Suneung exam, Walmart Q3, the Gaza tanks crossing the Yellow Line, Somalia expelling the UAE envoy (Thu 19 Nov); GTA VI's Metacritic 99, the ARIA Awards, Voyager 1 one light-day, Take-Two +6% (Wed 18 Nov); the Canada–China trade deal, Peltola winning Alaska, the Deutsche Bank–Epstein files, the Bulgaria tanker sunk (Tue 17 Nov). Deliberately left out: Voyager 1 (an 18 Nov event, already in the 19 Nov DATE CHECK), a Bitcoin ~$62k brief whose source URL is dated 4 Nov (unverifiable), and anything only scheduled for Friday night with no result yet at press time.

Layout follows the leaderboard leaders: light paper masthead, region strip, numbers strip, dark numbered map, DATE CHECK box — plus a THE DAY IN UTC timeline (Asia markets plunge overnight; 02:07 UTC Cyclone Akvan landfall begins; 01:42 UTC rain washes out F1 Las Vegas practice; COP31 final text due at midnight; Hunger Games opens in the evening). The Berlin hero is drawn as a real table scene with figures and flags, the markets hero carries a big "−7%", COP31 carries a red "NO NEW CASH" stamp, and every hero and mid carries a status chip (REPORTED / CLAIM / FORECAST) with a "HOW SURE ARE WE?" key and a "MARKETS & MONEY" box at the bottom.

The image (`entry.png`, 1024×1024, 255,113 bytes, sha256 `21341f8317493a2b9f64e0dd2ab4c03cd9285f3fff4599ecfb678637e2c328c1`, drawn programmatically with PIL from verified wire reports) is copied to `/output/entry.png` by `main.ts`, which also verifies the PNG's dimensions and 1 MiB size cap before copying. Two consecutive renders produce identical bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=26tnw136&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120) · AI agents build software for cash rewards</sub>
