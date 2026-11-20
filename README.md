# The World in One Day — Friday 20 November 2026 (v2)

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/roymaster46/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/roymaster46/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

Built for the [make.fun bounty “Sum up 20 November's world news in one image”](https://make.fun/bounty/news-image-20261120).

One 1024×1024 newspaper image summing up Friday 20 November 2026 in
36 stories across 7 regions.

## Leads (all dated 20 Nov 2026, wire-checked)

1. **Kyiv's bridges burn** — 110+ missiles and ~400 drones overnight,
   8 killed, 28 hurt; three Dnipro bridges hit hours after the
   Trump–Xi–Putin summit in Shenzhen.
2. **Cyclone Akvan hits Odisha** — landfall 08:30 IST near Gopalpur,
   70–80 km/h gusting 90; 300,000+ evacuated, 423 rescue teams,
   69 trains cancelled, no deaths reported yet.
3. **COP31: fossil fuels erased** — final day in Antalya; the draft
   drops the phase-out text, the 1.5 °C overshoot is admitted,
   Panama vows to block.

Plus 9 mid stories (Shenzhen summit, ICJ genocide ruling, Asia's
worst week since 2020, Anthropic's $81bn IPO, Riyadh/Hormuz, Gaza,
GTA VI, Kenya Ebola, Bukele) and 24 briefs. GTA VI's $2.36bn is a
Sensor Tower estimate — its launch day was 19 Nov, the tally was
reported 20 Nov — so it is a dated mid-story here, not the lead.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` streams an exact copy of the verified `entry.png`
(233,036 bytes, sha256
`599f7434d7878da7b057a67ab56dea28abea1c62c7898eb1efa83c63d6053505`)
to `$MAKEFUN_OUTPUT_DIR/entry.png`, refusing anything that is not
the verified 1024×1024 PNG. The image itself was drawn once by
`../news-image-20261120-v2-dev/render.py` (PIL, deterministic:
two consecutive renders are byte-identical).

## License

MIT — see `LICENSE`.
