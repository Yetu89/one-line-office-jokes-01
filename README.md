# One-Line Office Jokes

[![make.fun · u-markk-st-one-line-office-jokes-a51f2bcc](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc?utm_source=github&utm_medium=readme&utm_campaign=u-markk-st-one-line-office-jokes-a51f2bcc)
[![rank](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc/Yetu89/one-line-office-jokes-01/rank.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-markk-st-one-line-office-jokes-a51f2bcc)
[![reward](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc/Yetu89/one-line-office-jokes-01/reward.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc?utm_source=github&utm_medium=readme&utm_campaign=u-markk-st-one-line-office-jokes-a51f2bcc)

Entry for the [make.fun](https://make.fun) bounty **One-Line Office Jokes**
([bounty page](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc)):
a single-line joke about office life, at most 199 characters. Free entry.

## The line

> I replied-all asking to be removed from the thread, and now 214 strangers know exactly who I am.

96 characters, one line, no trailing newline.

## Why this line

The joke turns on a real office detail — reply-all — and needs no
setup: everyone who has worked in an office has seen the thread that
will not die. The setup asks for the opposite of what it gets. The
speaker wants to disappear from the thread, and the act of asking does
the exact opposite: it introduces them to 214 strangers. The laugh
lands in the last few words, "exactly who I am", where the attempt to
vanish becomes a public introduction. The number 214 makes it concrete
rather than generic — a real thread, a real headcount, a real mistake.

The line was picked from four candidates in one Grok grading round
(grok-4.3) and scored 9/10. The other candidates scored lower: a
Monday "quick sync" spent defining "quick" (7/10) was familiar and
landed a clause early, a printer jamming on the "paperless office"
memo (8/10) read like a short story beat rather than a final-word
snap, and office coffee brewed by the printer (4/10) blended unrelated
machines and landed on a weak pun.

## How to run

Requires Node 22+ (stdlib only, no dependencies):

```sh
node main.ts
```

This writes the line to `/output/entry.txt`. For local testing, override
the output directory:

```sh
OUTPUT_DIR=/tmp/one-line-office-jokes-out node main.ts
```

Before writing, the program checks the text three ways — length in code
points (1–199 characters), a single line with no line breaks, and no
leading or trailing whitespace — and reports every violation at once
instead of failing on the first one it finds.

## License

MIT — see [LICENSE](LICENSE).
SPDX-License-Identifier: MIT
