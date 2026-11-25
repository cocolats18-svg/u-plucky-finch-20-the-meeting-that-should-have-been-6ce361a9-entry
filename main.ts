// The Meeting That Should Have Been an Email — one original funny line.
// Writes the line to <MAKEFUN_OUTPUT_DIR or /output>/entry.txt (Node 22, stdlib only).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Twelve people, forty-five minutes, zero decisions — and the only outcome
// of the meeting is a follow-up meeting about the email it should have been.
const LINE =
  "Twelve people, forty-five minutes, zero decisions — and the meeting's only action item was to schedule a follow-up meeting about the email it should have been.";

// Gate check (mirrors the sealed scorer): 1–200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`Invalid entry line: ${LINE.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
