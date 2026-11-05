# Improvements applied

## 1. localStorage version check
Progress now includes a `v` field. On load, if the stored version is older or missing, the game keeps existing progress but logs a note. Future schema changes can migrate instead of wiping.

## 2. Pure helpers
`src/helpers.js` contains:
- `rng` / `sshuffle` (deterministic shuffle)
- `rankOf` / `nextRank`
- `raceXP`
- `safeId` (longer / crypto-based ID)

## 3. Race mode
- Clearer “waiting for next race” message in the lobby when a race is already running.
- Host start still triggers the existing countdown.
- Player IDs use `safeId()`.

## 4. Error boundary
Major render functions (`renderMap`, `renderScene`, `renderRace`) are wrapped so a bad mission shows a recovery message instead of a blank page.

## 5. Tests
`tests/helpers.test.js` covers rank, race XP, and shuffle.

Run:
```bash
node tests/helpers.test.js
```

## 6. README note
`config.js` currently contains a live Supabase project URL and anon key. Rotate the key if the repository is public and you do not want others using the project.

## Build
After editing `src/`, run:
```bash
python3 build.py
```
