# Circuit Hunter Academy

An anime-style study game for a grade 9 computer science course. The player is a student hunter at an original academy who learns how computers work and turns each topic into a "technique" to defeat Glitch Demons.

The missions follow the Italian textbook *L'informatica e il computer* chapter by chapter, and the whole game can be switched between **English and Italian** at any time (EN / IT button). Every key term is shown with its translation in the other language.

## What's inside

**3 units · 16 chapters · 44 missions**, each with a lesson, an animated diagram, a mini-game and a quiz battle.

| Unit | Chapters |
|---|---|
| 1 · L'informatica e il computer | 1 Algorithms · 2 Data encoding · 3 Hardware · 4 Operating systems · 5 Networks & Internet · 6 Security |
| 2 · Lavorare con le applicazioni | 7 Cloud · 8 Word processing · 9 Spreadsheets · 10 Presentations |
| 3 · Iniziare a programmare | 11 Flowcharts · 12 Python basics · 13 Selection · 14 Loops · 15 Strings, lists & files · 16 Functions |

Mini-games include a robot you program with commands, binary lamps, an ASCII decoder, an RGB colour mixer, a fetch–decode–execute stepper, building a PC, a live spreadsheet that evaluates real formulas (English and Italian function names), a formatting challenge, trace tables, predict-the-output Python puzzles, logic gates and a stack/queue game.

Also: a searchable bilingual **Codex** (glossary), a **Dojo** for mixed review, XP and ranks, and a certificate when every mission is cleared. Progress is saved in the browser's local storage.

## Play

Open `index.html` in any modern browser, or use the GitHub Pages link of this repo. No installation and no server needed.

## Project layout

```
index.html        the built game (single self-contained file)
build.py          concatenates src/ into index.html
src/              source parts: CSS, visuals, mission data, game engine
tests/            automated checks (Playwright + Python)
```

Edit files in `src/`, then rebuild:

```bash
python3 build.py
```

## Tests

```bash
npm i playwright
node tests/playthrough.js en      # plays all 44 missions in English
node tests/playthrough.js it      # ...and in Italian
node tests/check_python.js > /tmp/rounds.json && python3 tests/check_python.py /tmp/rounds.json
                                   # runs every Python puzzle with real Python
```

## Notes

- All characters and demons are original; no characters from existing anime are used.
- Content was written from the textbook's table of contents, not its pages. Check definitions against the book before tests.
