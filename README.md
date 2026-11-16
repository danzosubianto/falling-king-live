# Falling King

An entry for [make.fun](https://make.fun)'s **ai-excited-01** competition.

## The image

*Falling King* is a portrait-format digital painting of a colossal chess king
carved from black marble, cracking and toppling forward toward the viewer,
while one tiny white pawn stands perfectly still on the board before it —
unmoved, unafraid, and about to inherit the square.

## How the entry works

The image is the entry. `entry.png` in this repository holds the artwork
(stored as a JPEG, 683×1024, under the competition's size limits).

`main.ts` is a small Node 22 program (standard library only) that delivers
the entry: when run, it copies `entry.png` from beside itself into the
output directory as `entry.png` — `/output/entry.png` inside the grader,
or the directory named by the `MAKEFUN_OUTPUT_DIR` environment variable
when run outside it.

```sh
node main.ts
```
