# Circuit Hunter Academy

[![Play now](https://img.shields.io/badge/%E2%96%B6%20Play%20now-GitHub%20Pages-ff6a3d?style=for-the-badge)](https://eriakort.github.io/circuit-hunter-academy/)

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

**Race Arena** (multiplayer): create a room, share the 4-letter code, and up to 8 players race through the same mission live. Faster correct answers score more; a podium and XP at the end. It runs on Supabase Realtime (see setup below).

Also: a searchable bilingual **Codex** (glossary), a **Dojo** for mixed review, XP and ranks, and a certificate when every mission is cleared. Progress is saved in the browser's local storage.

## Play

**▶ [Play now](https://eriakort.github.io/circuit-hunter-academy/)** (GitHub Pages)

You can also open `index.html` directly in a browser. Everything works offline except the Race Arena, which needs the internet and the Supabase setup below.

## Setup

### 1. GitHub Pages (the Play now link)

1. Push this repo to GitHub.
2. Repo → **Settings → Pages**.
3. Under **Build and deployment**, set **Source: Deploy from a branch**, **Branch: `main`**, folder **`/ (root)`**, then **Save**.
4. Wait 1–2 minutes and refresh the page: GitHub shows *"Your site is live at https://eriakort.github.io/circuit-hunter-academy/"*.
5. Optional: on the repo home page click the ⚙ next to **About**, tick **Use your GitHub Pages website**, and save, so the link shows at the top of the repo.

Pages on a **private** repo requires a paid GitHub plan (Pro, Team or Enterprise). On a free account, make the repo public first (Settings → General → Danger Zone → Change visibility).

### 2. Supabase (the Race Arena)

1. Create a free account and a new project at [supabase.com](https://supabase.com). Any region near you is fine.
2. In the project, open **Project Settings → API** and copy the **Project URL** and the **anon public** key (newer dashboards may call it the *publishable* key).
3. Edit `config.js` in this repo (you can do it on github.com with the ✏️ button) and paste both values. Commit.
4. Open the Play now link → **Race** → **Create room**. Open the link on a second device, **Join** with the code, and race.

No database tables are needed: the race uses Realtime **Broadcast** and **Presence** channels only. The anon key is meant to be public, so it is fine in `config.js`; never put the `service_role` / secret key there. If rooms won't connect, check in the Supabase dashboard that Realtime is enabled and that public channel access is allowed (Project Settings → Realtime).

## Project layout

```
index.html        the built game (single self-contained file)
config.js         Supabase URL + anon key for the Race Arena
vendor/           supabase-js 2.117.3 (MIT), loaded only when a race starts
build.py          concatenates src/ into index.html
src/              source parts: CSS, visuals, mission data, game engine, race mode
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
node tests/race.js                 # two simulated players race each other (offline stand-in for Supabase)
```

## Notes

- All characters and demons are original; no characters from existing anime are used.
- Content was written from the textbook's table of contents, not its pages. Check definitions against the book before tests.
