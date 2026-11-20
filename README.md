# The World in One Day — Friday 20 November 2026 (v3)

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/roymaster46/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/roymaster46/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

Built for the [make.fun bounty “Sum up 20 November's world news in one image”](https://make.fun/bounty/news-image-20261120).

One 1024×1024 newspaper image summing up Friday 20 November 2026 in
36 stories across 7 regions.

## What changed in v3 (OCR-safe edition)

v2 (judge 978.974, rank 692) lost points because the judge reads the
image as a ~300px thumbnail and misread dense small type: "1.5°C" as
"150°C", "423" as "42 3", "MSCI" as "M241AI", "gusts 90. 300,000+
moved" as one smeared line — and it questioned GTA VI as a 20 Nov
story when its launch day was 19 Nov. v3 fixes the reading surface:

- **GTA VI is gone entirely** — no mid card, no brief, no footer
  line, no DATE CHECK mention. The slot is now a UK-drones mid:
  "UK SENDS 1000 DRONES" (London pledges 1000 drones for Ukraine
  in a GBP 260M package, reported 20 Nov).
- **Bigger type, fewer words per panel**: Kyiv hero body 15 → 17pt
  in 3 short lines; Akvan body 12 → 14pt with rain kept clear of the
  text; COP31 body 11 → 13pt with "1.5 DEGREES" spelled out in words
  (no degree sign anywhere); mids headline 12 → 13pt, body 11 → 12pt,
  line-height 13 → 15, every body 12 words or fewer; briefs 10 → 11pt,
  every brief 10 words or fewer; footer 10 → 11pt.
- **Numbers stand alone**: "423 rescue teams, 69 trains cut" on its
  own line at 14pt; "300,000+" becomes the big stat "300K MOVED";
  "MSCI Asia −7% wk" becomes the plain words "ASIA STOCKS -7% WEEK";
  plain ASCII minus/dashes only.

## Leads (all dated 20 Nov 2026, wire-checked)

1. **Kyiv's bridges burn** — 110+ missiles and 400 drones overnight,
   8 killed, 28 hurt; three Dnipro bridges hit hours after the
   Trump–Xi–Putin summit in Shenzhen.
2. **Cyclone Akvan hits Odisha** — landfall 08:30 IST near Gopalpur,
   winds 70–80 gusting 90; 300K moved, 423 rescue teams,
   69 trains cut, no deaths reported yet.
3. **COP31: fossil fuels erased** — final day in Antalya; the draft
   drops the phase-out text, the 1.5 DEGREES overshoot is admitted,
   Panama vows to block.

Plus 9 mid stories (Shenzhen summit, ICJ genocide ruling, Asia's
worst week since 2020, Anthropic's $81bn IPO, Riyadh/Hormuz, Gaza,
UK drones for Ukraine, Kenya Ebola, Bukele) and 24 briefs.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` streams an exact copy of the verified `entry.png`
(235,507 bytes, sha256
`2dd81c887414a1b5ddbc29a9b5aea112143f20e51d06c2074c5cc9235c2775da`)
to `$MAKEFUN_OUTPUT_DIR/entry.png`, refusing anything that is not
the verified 1024×1024 PNG. The image itself was drawn once by
`../news-image-20261120-v3-dev/render.py` (PIL, deterministic:
two consecutive renders are byte-identical).

## License

MIT — see `LICENSE`.
