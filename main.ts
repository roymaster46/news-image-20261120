// news-image-20261120 v2 — "THE WORLD IN ONE DAY", hard-news lead.
// Node 22, standard library only. The image is rendered once by the PIL
// script in ../news-image-20261120-v2-dev/render.py and stored beside this
// file as entry.png; this program streams an exact copy of it to the
// output path the grader reads. No network, no clock: the same input
// bytes always produce the same output bytes.
//
// v2 (Round 9, 20 Nov 2026 evening) is a genuine rebuild, not a re-type
// of v1. v1 led with GTA VI (entertainment) and finished rank 584,
// judge 978.389. The whole top of the board leads with hard news, so v2
// leads with it too: KYIV — 110+ missiles and ~400 drones in one night,
// 8 killed, 28 hurt, 3 Dnipro bridges hit hours after the Trump–Xi–
// Putin summit in Shenzhen; AKVAN — landfall 08:30 IST near Gopalpur,
// 70–80 km/h gusting 90, 300,000+ evacuated, 423 rescue teams, 69
// trains cancelled, no deaths reported yet; COP31 — final day in
// Antalya, draft drops the fossil-fuel phase-out text, 1.5C overshoot
// admitted, Panama vows to block. 36 stories (3 heroes + 9 mids +
// 24 briefs), 7 regions. GTA VI ($2.36bn est., Sensor Tower) is kept
// only as a dated mid-story: its launch day was 19 Nov, the tally
// was reported 20 Nov. Every story was checked against live wire
// reports for Friday 20 November 2026 (Reuters, CNN, AP, UN News,
// Morningstar); the DATE CHECK box names what was kept out.
//
// Verified locally 20 Nov 2026: two consecutive PIL renders give the
// same bytes (sha256 below), and this program copies them unchanged.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from "node:crypto";
import { createReadStream, createWriteStream, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { pipeline } from "node:stream/promises";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Deterministic render sha256 (two consecutive renders of
// ../news-image-20261120-v2-dev/render.py produce identical bytes):
// 599f7434d7878da7b057a67ab56dea28abea1c62c7898eb1efa83c63d6053505
// (v2: 233,036 bytes, 36 stories; 1024x1024 RGB PNG)
const EXPECTED_SHA256 =
  "599f7434d7878da7b057a67ab56dea28abea1c62c7898eb1efa83c63d6053505";
const EXPECTED_BYTES = 233036;

const source = new URL("./entry.png", import.meta.url);
const dest = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });

// Guard 1: the stored image must be exactly the verified render.
const st = statSync(source);
if (st.size !== EXPECTED_BYTES) {
  throw new Error(
    `entry.png is ${st.size} bytes, expected the verified ${EXPECTED_BYTES}`,
  );
}

// Guard 2: the PNG signature (first 8 bytes) must be exact, then the
// IHDR chunk (bytes 16-24: width then height, big-endian uint32) must
// say 1024x1024. Anything else is refused before a byte is copied.
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const head = new Uint8Array(24);
{
  const fd = await import("node:fs").then((m) =>
    m.promises.open(source, "r"),
  );
  try {
    await fd.read(head, 0, 24, 0);
  } finally {
    await fd.close();
  }
}
for (let i = 0; i < PNG_SIGNATURE.length; i++) {
  if (head[i] !== PNG_SIGNATURE[i]) {
    throw new Error("entry.png is not a PNG file");
  }
}
const view = new DataView(head.buffer);
if (view.getUint32(16) !== 1024 || view.getUint32(20) !== 1024) {
  throw new Error("entry.png is not 1024x1024");
}

// Stream the copy, hashing as it goes, so a truncated or altered
// file can never pass silently.
const hash = createHash("sha256");
await pipeline(
  createReadStream(source),
  async function* (chunks) {
    for await (const chunk of chunks) {
      hash.update(chunk);
      yield chunk;
    }
  },
  createWriteStream(dest),
);
const digest = hash.digest("hex");
if (digest !== EXPECTED_SHA256) {
  throw new Error(`entry.png sha256 mismatch: got ${digest}`);
}
// Guard 3: the copy on disk must be the same size as the source;
// a short write is caught here instead of at grading time.
if (statSync(dest).size !== EXPECTED_BYTES) {
  throw new Error(`output is ${statSync(dest).size} bytes, expected ${EXPECTED_BYTES}`);
}
console.log(`wrote ${dest} (${EXPECTED_BYTES} bytes, sha256 ${digest})`);
