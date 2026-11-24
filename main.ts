// The Funniest AI Excuse — program/v1 entry.
// Writes a single one-line excuse (1-200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I finished your report, then saved it in a folder called 'final_FINAL_v2' and now neither of us will ever find it again.";

function main(): void {
  try {
    const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
    mkdirSync(outDir, { recursive: true });
    // Gate: the scorer accepts 1-200 characters; keep the line inside it.
    const line = EXCUSE.trim().slice(0, 200);
    writeFileSync(join(outDir, "entry.txt"), line, "utf8");
  } catch (err) {
    // Never fail the run: write what we can and exit 0.
    try {
      mkdirSync("/output", { recursive: true });
      writeFileSync("/output/entry.txt", EXCUSE, "utf8");
    } catch {
      // Last resort: still exit 0.
    }
  }
}

main();
