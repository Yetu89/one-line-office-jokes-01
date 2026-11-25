// One-Line Office Jokes — make.fun bounty u-markk-st-one-line-office-jokes-a51f2bcc
// The line: asking to be removed from a thread by reply-all, and
// accidentally introducing yourself to 214 strangers instead. The
// joke turns on a real office detail — reply-all — and the laugh
// lands in the last few words, "exactly who I am", where the attempt
// to disappear does the exact opposite. 96 characters against a
// 199-character ceiling.
// The program below only guards the bounty rules and writes the line
// to /output/entry.txt (or $OUTPUT_DIR/entry.txt when run locally),
// with no trailing newline at the end of the file.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "I replied-all asking to be removed from the thread, and now 214 strangers know exactly who I am.";

// The ceiling comes from the bounty rules: one line, at most 199 chars,
// written as UTF-8 text. The gate also refuses a file that is only
// whitespace, so the checks below cover all three conditions at once.
const MAX_CHARS = 199;

// Spread into code points so an astral character counts as one.
function charCount(value: string): number {
  return [...value].length;
}

// One sentence, one line: the commas carry the reply-all detail without breaking the line.

function problemsWithLength(): string[] {
  const found: string[] = [];
  const n = charCount(TEXT);
  if (n < 1) {
    found.push("entry must not be empty");
  }
  if (n > MAX_CHARS) {
    found.push(`entry must be 1-199 characters, got ${n}`);
  }
  return found;
}

function problemsWithLineBreaks(): string[] {
  const found: string[] = [];
  if (TEXT.includes("\n") || TEXT.includes("\r")) {
    found.push("entry must be a single line with no line breaks");
  }
  return found;
}

function problemsWithWhitespace(): string[] {
  const found: string[] = [];
  if (TEXT.trim().length === 0) {
    found.push("entry must not be only whitespace");
  }
  if (TEXT !== TEXT.trim()) {
    found.push("entry must not have leading or trailing whitespace");
  }
  return found;
}

function problemsWithEncoding(): string[] {
  const found: string[] = [];
  // A UTF-8 round-trip must reproduce the text exactly; anything else
  // means the entry holds characters the gate cannot read as UTF-8.
  if (Buffer.from(TEXT, "utf8").toString("utf8") !== TEXT) {
    found.push("entry must be valid UTF-8 text");
  }
  return found;
}

// Every rule violation is collected first so one run reports all of them.
function collectProblems(): string[] {
  return [
    ...problemsWithLength(),
    ...problemsWithLineBreaks(),
    ...problemsWithWhitespace(),
    ...problemsWithEncoding(),
  ];
}

function main(): void {
  const problems = collectProblems();
  if (problems.length > 0) {
    throw new Error(problems.join("; "));
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // A plain string write adds no trailing newline.
  writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
}

main();
