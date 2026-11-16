// Falling King — entry program for make.fun's ai-excited-01 competition.
//
// The image is the entry: entry.png sits beside this program in the repo.
// This program's only job is to copy that image into the output directory
// as entry.png, which is where the grader looks for the finished entry.
//
// Inside the grader the output directory is /output. Outside the grader,
// the MAKEFUN_OUTPUT_DIR environment variable stands in for /output so the
// program can be run and tested locally; it defaults to /output when unset.
//
// Node 22, standard library only.

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = new URL("./entry.png", import.meta.url);
const destination = join(outputDir, "entry.png");

copyFileSync(source, destination);

console.log(`Falling King: copied entry.png to ${destination}`);
