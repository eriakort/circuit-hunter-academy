# Circuit Hunter Academy (React + TypeScript + Vite)

[![Play now](https://img.shields.io/badge/%E2%96%B6%20Play%20now-Circuit%20Hunter-ff6a3d?style=for-the-badge)](https://eriakort.github.io/circuit-hunter-academy/)

An anime-style study game for grade 9 (Italian *prima*), rewritten as a modern **React 19 + TypeScript + Vite** application. The player is a student hunter at an original academy who turns each school topic into a "technique" to defeat Glitch Demons.

On opening the game, players choose their subject (**Computer Science**, **Physics** or **Mathematics**). The entire game can be toggled between **English and Italian** at any time (EN / IT button), and every key term includes bilingual tag pills with pronunciations/translations. Hunter names and XP are shared across subjects, while progress and certificates of mastery are tracked per subject in browser `localStorage`.

---

## Subjects

### Computer Science — 3 units · 16 chapters · 44 missions
Follows the Italian textbook *L'informatica e il computer* chapter by chapter.

| Unit | Chapters |
|---|---|
| 1 · L'informatica e il computer | 1 Algorithms · 2 Data encoding · 3 Hardware · 4 Operating systems · 5 Networks & Internet · 6 Security |
| 2 · Lavorare con le applicazioni | 7 Cloud · 8 Word processing · 9 Spreadsheets · 10 Presentations |
| 3 · Iniziare a programmare | 11 Flowcharts · 12 Python basics · 13 Selection · 14 Loops · 15 Strings, lists & files · 16 Functions |

### Physics — 1 unit · 5 chapters · 12 missions
Aligned with the first-two-year physics course (chapters 1–5).

| Unit | Chapters |
|---|---|
| Fisica · Misura e meccanica | 1 Le grandezze fisiche · 2 Misure e rappresentazioni · 3 I vettori e le forze · 4 L'equilibrio dei solidi · 5 L'equilibrio dei fluidi |

### Mathematics — 6 chapters · 28 missions
Based on *Massimo Bergamini & Graziella Barozzi, Matematica multimediale.blu, Terza edizione*. Current missions cover the first six chapters represented in the game; later chapters and geometry units are not yet included.

| Coverage | Topics |
|---|---|
| Chapters 1–3 | Number sets, natural/integer/rational/real numbers, fractions, divisibility, powers and relations |
| Chapter 4 | Algebraic expressions, monomials, polynomials, like terms and notable products |
| Chapter 5 | Linear equations and equations with brackets |
| Chapter 6 | Linear inequalities |

---

## Features & Mini-Games

Each mission features a narrative lesson with animated diagrams, an interactive mini-game, and a Glitch Demon quiz battle with Spirit hearts, combo awakenings, and technique unlock rewards.

- **Robot Grid Programmer**: Program movement algorithms (Forward, Turn Left, Turn Right) with step-by-step debug and crash detection across 3 difficulty levels.
- **Binary Lamps**: Toggle 8 bits to form target numbers (5, 13, 42, 100, 255).
- **ASCII Secret Scroll**: Decode ASCII numbers and binary codes using the ASCII character table.
- **RGB Light Mixer**: Adjust Red, Green, and Blue sliders to match target light color swatches.
- **Computer Hardware & PC Builder**: Examine motherboards, explore the CPU Fetch-Decode-Execute cycle, trace keystroke hardware journeys, simulate power cuts (volatile RAM vs SSD storage), and assemble PC parts into slots.
- **Spreadsheet Formula Evaluator**: Real formula evaluation for `=SUM`, `=AVERAGE`, `=MAX`, `=MIN`, `=IF`, `=COUNT` in both English and Italian syntax.
- **Word Processor Formatting**: Match model typography, alignment, and formatting styles.
- **Logic Gates & Python Trace Tables**: Interactive logic gates (AND, OR, NOT, XOR), Python output prediction, and memory trace tables.
- **Physics Mini-Games**:
  - Vector resultant addition (tip-to-tail on grid) and component resolution on axes.
  - Lever balance & torque calculation ($M = F \times d$).
  - Fluids, buoyancy (Archimedes' principle), and hydrostatic pressure with depth.
- **Multiplayer Race Arena**: Create or join rooms with 4-letter codes for live real-time quiz racing with broadcast presence, synchronized timers, running lane tracks, and podium awards powered by Supabase Realtime (with built-in offline preview fallback).
- **Searchable Bilingual Codex**: Unlocked glossary of definitions in both Italian and English.
- **Dojo Training Hall**: Mixed review battle using questions from cleared missions.
- **Certificate of Mastery**: Official hunter diploma with credentials, rank, and mastered techniques list.

---

## Development & Build

```bash
# Install dependencies
npm install

# Start the Vite development server (port 3000)
npm run dev

# Type-check and production build
npm run build

# Run unit tests
npx tsx tests/helpers.test.js
```

### Deploy

GitHub Pages is built by `.github/workflows/deploy.yml`: every push to `main` runs `bun install --frozen-lockfile && bun run build` and publishes `dist/`. In repo **Settings → Pages**, **Source** must be **GitHub Actions** (serving the branch root directly does not work, because the root `index.html` loads `/src/main.tsx`, which only Vite can run).

---

## Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Supabase Realtime** (`@supabase/supabase-js`)
- **CSS3 Design System**: Custom anime dark mode palette, cyber gridlines, and typography (`Dela Gothic One`, `DotGothic16`, `M PLUS Rounded 1c`).
