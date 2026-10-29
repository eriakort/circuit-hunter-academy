# Source patches to apply

These changes should be applied to the existing large source files, then `python3 build.py` run.

## 1. localStorage version (src/4_engine.js)

Near the top, change the load block to:

```js
const SKEY = 'circuit-hunter-academy-v2';
const SCHEMA = 2;
let S = { name:'', lang:'en', xp:0, cleared:{}, seen:{}, flawless:{}, v: SCHEMA };
try {
  const raw = localStorage.getItem(SKEY);
  if (raw) {
    const loaded = JSON.parse(raw);
    if (!loaded.v || loaded.v < SCHEMA) {
      console.info('Progress schema upgraded; keeping existing data');
      loaded.v = SCHEMA;
    }
    S = Object.assign(S, loaded);
  }
} catch (e) {}
```

## 2. Error boundary (src/4_engine.js)

Wrap the main render functions:

```js
function safeRender(fn) {
  try { fn(); }
  catch (e) {
    console.error(e);
    const app = document.getElementById('app');
    if (app) app.innerHTML = `<div class="card"><h2>Something went wrong</h2><p>${String(e.message || e)}</p><button class="btn" onclick="location.reload()">Reload</button></div>`;
  }
}
```

Then call `safeRender(() => renderMap())` (and similarly for `renderScene` / `renderRace`) from the places that invoke them.

## 3. Race player ID (src/4c_race.js)

In `raceJoin`, replace:

```js
RACE.me = { id: Math.random().toString(36).slice(2,10), ... };
```

with:

```js
RACE.me = { id: (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : Math.random().toString(36).slice(2) + Date.now().toString(36), ... };
```

## 4. Clearer waiting state

The lobby already shows a message when `RACE.busy` is true. No further change required beyond confirming the copy is clear in both languages.

After applying, run:

```bash
python3 build.py
node tests/helpers.test.js
```
