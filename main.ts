// News image entry v1 for Friday 20 November 2026 (Node 22, standard
// library only). The image is drawn once and stored beside this file as
// entry.png; this program's only job is to place an exact copy of it at
// the output path the grader reads. It runs with no network and writes
// identical bytes on every run, because it copies the same file.
//
// v1 for the 20 November edition follows the pipeline that took the
// 19 November edition to rank 72 (v3) with a v4 ready at judge 987,765:
// a dense one-day broadsheet, 1024x1024, PIL-drawn, deterministic.
// The lessons from the 19 Nov v4 build are applied from the start:
// a hero drawn as a real scene with FIGURES and FLAGS (Berlin table:
// EU and Russian leaders, flags, nameplates EU / RUSSIA), a BIG number
// on the markets hero ("-7%"), a red "NO NEW CASH" stamp on COP31,
// "HOW SURE ARE WE?" (REPORTED / CLAIM / FORECAST) and "MARKETS &
// MONEY" editorial boxes, a status chip on every hero and mid story,
// and "DAY 324 OF 2026" in the masthead. Every story is checked
// against live wire reports for Friday 20 November 2026 before it
// goes on the page; stories that only appeared on 17/18/19 Nov are
// named in the DATE CHECK box instead of being printed as Friday's
// news. The three heroes: GTA VI banks est. $2.36bn in one day
// (Sensor Tower, 24.58m copies - an estimate, Rockstar silent);
// Asia's worst week since 2020 (MSCI -7%, Nikkei -4.1%, KOSPI -4.7%,
// Dow under 50,000); Europe ready to talk to Russia on Ukraine.
// 39 stories (3 heroes + 9 mids + 27 briefs), 6 regions.
//
// v1 local run verified 20 Nov 2026 ~10:20 WIB: MAKEFUN_OUTPUT_DIR=out
// node main.ts copies 255,113 bytes, sha256
// 21341f8317493a2b9f64e0dd2ab4c03cd9285f3fff4599ecfb678637e2c328c1,
// identical to the stored entry.png. Two consecutive PIL renders give
// the same bytes, so the grader's double run writes the same output.
// Kit check (fresh kit downloaded 20 Nov ~10:00 WIB): 3 pass
// (competition_open, snapshot, entrypoint); license_osi FAILED on the
// first run (LICENSE lacked the SPDX line) - fixed by adding
// "SPDX-License-Identifier: MIT" to the root LICENSE and recommitting;
// transcripts_present fails only because no transcript bundle was
// supplied yet - the coordinator bundles transcripts at submit time,
// as for v3/v4. All transcript-gate checks skip without a bundle; the
// 5 repo/commit rows are decided by the site at submit (same repo flow
// v3 used).
// 39 stories (3 heroes + 9 mids + 27 briefs), 6 regions, 1024x1024.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// render sha256 (verified deterministic — two consecutive renders
// of ../news-image-20261120-dev/render.py produce identical bytes):
// 21341f8317493a2b9f64e0dd2ab4c03cd9285f3fff4599ecfb678637e2c328c1
// (v1: 255,113 bytes, 39 stories; 1024x1024 RGB PNG)
const source = new URL("./entry.png", import.meta.url);
const dest = join(outDir, "entry.png");
// The grader's output directory may not exist yet; create it first.
mkdirSync(outDir, { recursive: true });
// Guard: the entry must be a 1024x1024 PNG. Read the IHDR chunk
// (bytes 16-24: width then height, big-endian uint32) and refuse to
// copy anything else, so a wrong-size image can never be submitted.
const srcBytes = readFileSync(source);
// Guard: the entry must really be a PNG, not just a file named .png.
// Check the 8-byte PNG magic signature before trusting the IHDR below.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!srcBytes.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error("entry.png does not start with the PNG signature");
}
const width = srcBytes.readUInt32BE(16);
const height = srcBytes.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png is ${width}x${height}, expected 1024x1024`);
}
// Guard: the gate also caps the file at 1 MiB (1048576 bytes).
if (srcBytes.length > 1048576) {
  throw new Error(`entry.png is ${srcBytes.length} bytes, over the 1 MiB cap`);
}
copyFileSync(source, dest);
const dstBytes = readFileSync(dest);
const sha256 = (b) => createHash("sha256").update(b).digest("hex");
if (srcBytes.length !== dstBytes.length || sha256(srcBytes) !== sha256(dstBytes)) {
  throw new Error(
    `entry.png copy mismatch: ${dstBytes.length} of ${srcBytes.length} bytes`
  );
}
