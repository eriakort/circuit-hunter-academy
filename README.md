# Circuit Hunter Academy (React + TypeScript + Vite)

[![Play now](https://img.shields.io/badge/%E2%96%B6%20Play%20now-Circuit%20Hunter-ff6a3d?style=for-the-badge)](https://eriakort.github.io/circuit-hunter-academy/)

An anime-inspired, bilingual learning game built with **React 19 + TypeScript + Vite**. Learners choose an available school grade first, then select a subject and train through lessons, interactive activities and quiz battles. The academy uses an original hunter-and-technique theme.

The current pathways include **Grade 5 (quinta primaria)** with general Science and Mathematics, and **Grade 9** with Computer Science, Physics and Mathematics. Available subjects depend on the selected grade. The interface and learning content support **English and Italian**. Learner progress is saved in the browser; multiplayer race features use Supabase Realtime when configured, with an offline preview fallback.

---

## Grade 5 — Primary school

### Science

Grade 5 Science is a general primary-science pathway, rather than a physics-only course. Its learning scope includes age-appropriate science and technology topics.

### Mathematics — 6 units · 69 missions
Follows the table of contents of the Grade 5 textbook *Che meraviglia! 5 – Matematica* (Raffaello Scuola), unit by unit. Content is aligned with the national objectives for the end of *classe quinta* in the *Indicazioni nazionali* (2012), which still apply to Grade 5 classes in 2026/2027 while the 2025 *Indicazioni* are phased in from the first classes, and with the four INVALSI Grade 5 areas (Numbers, Space and Figures, Data and Predictions, Relations and Functions). Grade 5 Mathematics (`math5`) is a separate subject from Grade 9 Mathematics (`math`).

| Unit | Textbook pages | Topics |
|---|---|---|
| Per cominciare | 4–7 | Warm-up: numbers, fractions, decimals, measures, shapes, problem steps |
| Problemi, dati e previsioni | 8–35 | Problem method, diagrams and expressions, strategies, proportional problems, classifications, statements and connectives, statistics and graphs, mode/mean/median, probability |
| Numeri | 36–75 | Place value, Roman numerals, millions and billions, powers, integers, decimals, rounding, the four operations and their properties, × ÷ 10/100/1 000, decimal division, mental calculation and estimates, expressions, multiples, divisibility, primes |
| Frazioni e numeri decimali | 76–95 | Classifying, equivalent and comparing fractions, fractions and decimals, fraction of a quantity and the whole, percentages, managing money |
| Misura | 96–117 | Length, capacity, mass, area, volume, time, speed, buying and selling, currency exchange and shopping online |
| Spazio e figure | 118–164 | Cartesian plane, isometries, similarity and fractals, lines and angles, polygons, perimeter and area of all polygons, regular polygons, circle and π, solids, surface area, volume, final Invalsi-style test |

Lessons include visual tables of measures (as in the textbook), and the Formula Book has a Grade 5 Maths section.

## Grade 9 — Lower-secondary / early high-school pathway

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

## Development, tests & build

The project uses Bun in its CI workflow. Install Bun and a supported Node.js runtime before working locally.

```bash
# Install dependencies from the committed Bun lockfile
bun install --frozen-lockfile

# Start the Vite development server (port 3000)
bun run dev

# Type-check and create the production build
bun run build

# Run the complete unit-test suite
bun run test:unit

# Install Chromium for the browser tests (first run)
bunx playwright install --with-deps chromium

# Run the Playwright end-to-end suite
bun run test:e2e
```

`bun run test:unit` runs the TypeScript unit tests under `tests/` and the formula-data tests. `bun run test:e2e` runs the Playwright browser suite. The CI workflow runs the production build, helper regressions, the complete unit suite and browser tests.

### Deploy

GitHub Pages is built by `.github/workflows/deploy.yml`: every push to `main` runs `bun install --frozen-lockfile && bun run build` and publishes `dist/`. In repo **Settings → Pages**, **Source** must be **GitHub Actions** (serving the branch root directly does not work, because the root `index.html` loads `/src/main.tsx`, which only Vite can run).

---

## Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Supabase Realtime** (`@supabase/supabase-js`)
- **CSS3 Design System**: Custom anime dark mode palette, cyber gridlines, and typography (`Dela Gothic One`, `DotGothic16`, `M PLUS Rounded 1c`).
