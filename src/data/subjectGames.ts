// @ts-nocheck
/**
 * Subject-specific mini-games (scene types `coordhunt`, `timeline`, `balancer`).
 * They use the same helpers as the older games in miniGames.ts, handed in through `makeSubjectGames`.
 *
 * Their facts (coordinates, dates, equations) are standard school knowledge; the dates and the
 * wording should still get a teacher skim.
 */

export interface GameKit {
  L: (x: any) => string;
  $: (s: string, el?: any) => any;
  $$: (s: string, el?: any) => any[];
  shuffle: <T>(a: T[]) => T[];
  xpNote: (n: number) => string;
  award: (n: number) => void;
  lang: () => 'en' | 'it';
}

const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);

/** Sub/superscript digits so formulas read as H₂O. */
const SUB = '₀₁₂₃₄₅₆₇₈₉';
const sub = (n: number) => (n === 1 ? '' : String(n).split('').map(d => SUB[+d]).join(''));

export const COORD_ROUNDS = [
  { lat: 20, lon: -10 },
  { lat: -10, lon: 20 },
  { lat: 0, lon: 0 },
  { lat: 10, lon: 30 },
  { lat: -20, lon: -30 }
];
export const COORD_LATS = [20, 10, 0, -10, -20];
export const COORD_LONS = [-30, -20, -10, 0, 10, 20, 30];

export const coordName = (lat: number, lon: number, lang: 'en' | 'it') => {
  const ns = lat === 0 ? '' : lat > 0 ? (lang === 'it' ? ' N' : ' N') : ' S';
  const ew = lon === 0 ? '' : lon > 0 ? (lang === 'it' ? ' E' : ' E') : (lang === 'it' ? ' O' : ' W');
  return `${Math.abs(lat)}°${ns}, ${Math.abs(lon)}°${ew}`;
};

export const TIMELINE_EVENTS = [
  { y: -753, en: 'Traditional date for the founding of Rome', it: 'Data tradizionale della fondazione di Roma' },
  { y: -490, en: 'The Athenians win the battle of Marathon', it: 'Gli Ateniesi vincono la battaglia di Maratona' },
  { y: -323, en: 'Alexander the Great dies', it: 'Muore Alessandro Magno' },
  { y: -146, en: 'Rome destroys Carthage', it: 'Roma distrugge Cartagine' },
  { y: -44, en: 'Julius Caesar is killed', it: 'Viene ucciso Giulio Cesare' },
  { y: 313, en: 'Edict of Milan: Christians may worship freely', it: 'Editto di Milano: i cristiani possono praticare il culto' },
  { y: 476, en: 'The last Western Roman emperor is deposed', it: 'Viene deposto l’ultimo imperatore romano d’Occidente' }
];
export const TIMELINE_MIN = -800;
export const TIMELINE_MAX = 500;

export const yearLabel = (y: number, lang: 'en' | 'it') =>
  y < 0 ? `${-y} ${lang === 'it' ? 'a.C.' : 'BC'}` : `${y || 1} ${lang === 'it' ? 'd.C.' : 'AD'}`;

/** 2 points within 40 years, 1 point within 100 years, else 0. */
export const timelinePoints = (guess: number, truth: number) => {
  const d = Math.abs(guess - truth);
  return d <= 40 ? 2 : d <= 100 ? 1 : 0;
};

export interface Species { f: string; atoms: Record<string, number> }
export interface BalanceEq { left: Species[]; right: Species[]; answer: number[] }
export const BALANCE_EQS: BalanceEq[] = [
  { left: [{ f: 'H₂', atoms: { H: 2 } }, { f: 'O₂', atoms: { O: 2 } }], right: [{ f: 'H₂O', atoms: { H: 2, O: 1 } }], answer: [2, 1, 2] },
  { left: [{ f: 'N₂', atoms: { N: 2 } }, { f: 'H₂', atoms: { H: 2 } }], right: [{ f: 'NH₃', atoms: { N: 1, H: 3 } }], answer: [1, 3, 2] },
  { left: [{ f: 'CH₄', atoms: { C: 1, H: 4 } }, { f: 'O₂', atoms: { O: 2 } }], right: [{ f: 'CO₂', atoms: { C: 1, O: 2 } }, { f: 'H₂O', atoms: { H: 2, O: 1 } }], answer: [1, 2, 1, 2] },
  { left: [{ f: 'Al', atoms: { Al: 1 } }, { f: 'O₂', atoms: { O: 2 } }], right: [{ f: 'Al₂O₃', atoms: { Al: 2, O: 3 } }], answer: [4, 3, 2] },
  { left: [{ f: 'C₃H₈', atoms: { C: 3, H: 8 } }, { f: 'O₂', atoms: { O: 2 } }], right: [{ f: 'CO₂', atoms: { C: 1, O: 2 } }, { f: 'H₂O', atoms: { H: 2, O: 1 } }], answer: [1, 5, 3, 4] }
];

/** Counts each element on one side of an equation for the current coefficients. */
export const countAtoms = (side: Species[], coef: number[]) => {
  const out: Record<string, number> = {};
  side.forEach((sp, i) => Object.entries(sp.atoms).forEach(([el, n]) => { out[el] = (out[el] || 0) + n * coef[i]; }));
  return out;
};
export const isBalanced = (eq: BalanceEq, coef: number[]) => {
  const nl = eq.left.length;
  const l = countAtoms(eq.left, coef.slice(0, nl));
  const r = countAtoms(eq.right, coef.slice(nl));
  const els = new Set([...Object.keys(l), ...Object.keys(r)]);
  return [...els].every(e => (l[e] || 0) === (r[e] || 0));
};
export const isLowestTerms = (coef: number[]) => coef.reduce(gcd, 0) === 1;

export function makeSubjectGames(kit: GameKit) {
  const { L, $, $$, shuffle, xpNote, award } = kit;

  /* ------------------------------------------------------------- Geography: coordinate hunt */
  function gameCoordHunt(sc: any, host: any, done: () => void) {
    const rounds = shuffle(COORD_ROUNDS.slice());
    let r = 0, score = 0;
    const W = 420, H = 290, left = 66, top = 20, cw = (W - left - 22) / (COORD_LONS.length - 1), ch = (H - top - 56) / (COORD_LATS.length - 1);
    const X = (lon: number) => left + COORD_LONS.indexOf(lon) * cw;
    const Y = (lat: number) => top + COORD_LATS.indexOf(lat) * ch;
    const draw = () => {
      const lang = kit.lang();
      if (r >= rounds.length) {
        host.innerHTML = `<div class="game"><div class="gtitle">${L(['Treasure found!', 'Tesoro trovato!'])}</div><p>${L(['First-try score', 'Punteggio al primo tentativo'])}: <b>${score} / ${rounds.length}</b>.${xpNote(score * 4)}</p><p class="muted">${L(['Press Continue when you\'re ready.', 'Premi Continua quando sei pronta.'])}</p></div>`;
        award(score * 4); done(); return;
      }
      const t = rounds[r]; let first = true;
      const lines = COORD_LATS.map(la => `<line x1="${left}" x2="${W - 22}" y1="${Y(la)}" y2="${Y(la)}" stroke="${la === 0 ? 'var(--ember)' : 'var(--line)'}" stroke-width="${la === 0 ? 2 : 1}"/><text x="${left - 20}" y="${Y(la) + 4}" text-anchor="end" font-size="11" fill="var(--muted)">${coordName(la, 0, lang).split(',')[0]}</text>`).join('')
        + COORD_LONS.map(lo => `<line y1="${top}" y2="${H - 56}" x1="${X(lo)}" x2="${X(lo)}" stroke="${lo === 0 ? 'var(--ember)' : 'var(--line)'}" stroke-width="${lo === 0 ? 2 : 1}"/><text x="${X(lo)}" y="${H - 30}" text-anchor="middle" font-size="11" fill="var(--muted)">${coordName(0, lo, lang).split(', ')[1]}</text>`).join('');
      const pts = COORD_LATS.flatMap(la => COORD_LONS.map(lo => `<circle class="ch-pt" data-la="${la}" data-lo="${lo}" cx="${X(lo)}" cy="${Y(la)}" r="11" tabindex="0" role="button" aria-label="${coordName(la, lo, lang)}"/>`)).join('');
      host.innerHTML = `<div class="game"><div class="gtitle">${L(sc.title || ['Coordinate hunt', 'Caccia alle coordinate'])}</div><div class="count">${r + 1} / ${rounds.length} · ${L(['score', 'punti'])} ${score}</div>
        <p>${L(['Tap the point where the treasure is buried:', 'Tocca il punto in cui è sepolto il tesoro:'])} <b class="big" style="font-size:22px;color:var(--gold);white-space:nowrap">${coordName(t.lat, t.lon, lang)}</b></p>
        <p class="muted" style="max-width:54ch">${L(['Latitude (north or south of the equator) comes first, then longitude (east or west of the Greenwich meridian). The orange lines are the equator and the Greenwich meridian.', 'Prima la latitudine (a nord o a sud dell’equatore), poi la longitudine (a est o a ovest del meridiano di Greenwich). Le linee arancioni sono l’equatore e il meridiano di Greenwich.'])}</p>
        <div class="vwrap" style="max-width:460px"><svg viewBox="0 0 ${W} ${H}" class="ch-map" role="group" aria-label="${L(['Coordinate grid', 'Reticolo di coordinate'])}">${lines}${pts}<g id="chMark"></g></svg></div>
        <div class="fb" id="chF" aria-live="polite"></div></div>`;
      const fb = $('#chF', host);
      const pick = (el: any) => {
        const la = +el.dataset.la, lo = +el.dataset.lo;
        if (la === t.lat && lo === t.lon) {
          if (first) score++;
          $('#chMark', host).innerHTML = `<circle cx="${X(lo)}" cy="${Y(la)}" r="9" fill="var(--gold)"/><text x="${X(lo)}" y="${Y(la) + 4}" text-anchor="middle" font-size="11" font-weight="800" fill="#1b0c06">✕</text>`;
          fb.className = 'fb ok'; fb.innerHTML = `<b>${L(['Found it!', 'Trovato!'])}</b> ${coordName(la, lo, lang)} <button class="btn cyan sm" id="chN" style="margin-left:6px">${L(['Next treasure', 'Prossimo tesoro'])}</button>`;
          $$('.ch-pt', host).forEach((p: any) => { p.style.pointerEvents = 'none'; });
          $('#chN', host).onclick = () => { r++; draw(); };
        } else {
          first = false;
          fb.className = 'fb no';
          const latOk = la === t.lat, lonOk = lo === t.lon;
          fb.textContent = L([`That is ${coordName(la, lo, lang)}. ` + (latOk ? 'The latitude is right; check the longitude.' : lonOk ? 'The longitude is right; check the latitude.' : 'Check latitude first, then longitude.'),
            `Quello è ${coordName(la, lo, lang)}. ` + (latOk ? 'La latitudine è giusta; controlla la longitudine.' : lonOk ? 'La longitudine è giusta; controlla la latitudine.' : 'Controlla prima la latitudine, poi la longitudine.')]);
        }
      };
      $$('.ch-pt', host).forEach((p: any) => { p.onclick = () => pick(p); p.onkeydown = (e: any) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(p); } }; });
    };
    draw();
  }

  /* ------------------------------------------------------------- History: scaled timeline */
  function gameTimeline(sc: any, host: any, done: () => void) {
    const events = shuffle(TIMELINE_EVENTS.slice()).slice(0, 5);
    let r = 0, points = 0;
    const draw = () => {
      const lang = kit.lang();
      if (r >= events.length) {
        host.innerHTML = `<div class="game"><div class="gtitle">${L(['Timeline complete!', 'Linea del tempo completata!'])}</div><p>${L(['Score', 'Punteggio'])}: <b>${points} / ${events.length * 2}</b>.${xpNote(points * 2)}</p><p class="muted">${L(['Press Continue when you\'re ready.', 'Premi Continua quando sei pronta.'])}</p></div>`;
        award(points * 2); done(); return;
      }
      const ev = events[r]; let placed = false;
      const span = TIMELINE_MAX - TIMELINE_MIN;
      const pct = (y: number) => ((y - TIMELINE_MIN) / span) * 100;
      const ticks = [-600, -400, -200, 0, 200, 400].map(y => `<span class="tl-tick" style="left:${pct(y)}%">${y === 0 ? '0' : yearLabel(y, lang).replace(' ', ' ')}</span>`).join('');
      host.innerHTML = `<div class="game"><div class="gtitle">${L(sc.title || ['Place it on the timeline', 'Collocalo sulla linea del tempo'])}</div><div class="count">${r + 1} / ${events.length} · ${L(['points', 'punti'])} ${points}</div>
        <p style="max-width:48ch"><b>${L([ev.en, ev.it])}</b></p>
        <div class="tl-wrap"><div class="tl-bar">${ticks}<div class="tl-guess" id="tlG"></div><div class="tl-truth" id="tlT" hidden></div></div>
        <input type="range" id="tlR" min="${TIMELINE_MIN}" max="${TIMELINE_MAX}" step="1" value="0" aria-label="${L(['Year', 'Anno'])}"/></div>
        <div class="big" id="tlY" style="font-size:22px">${yearLabel(0, lang)}</div>
        <button class="btn" id="tlOk">${L(['Place event', 'Colloca l\'evento'])}</button>
        <div class="fb" id="tlF" aria-live="polite"></div></div>`;
      const rng = $('#tlR', host), g = $('#tlG', host), yl = $('#tlY', host);
      const upd = () => { const y = +rng.value; g.style.left = pct(y) + '%'; yl.textContent = yearLabel(y, kit.lang()); };
      rng.oninput = upd; upd();
      $('#tlOk', host).onclick = () => {
        if (placed) return; placed = true;
        const guess = +rng.value, pts = timelinePoints(guess, ev.y);
        points += pts; rng.disabled = true; $('#tlOk', host).hidden = true;
        const T = $('#tlT', host); T.hidden = false; T.style.left = pct(ev.y) + '%';
        const off = Math.abs(guess - ev.y);
        const fb = $('#tlF', host); fb.className = 'fb ' + (pts ? 'ok' : 'no');
        fb.innerHTML = `<b>${yearLabel(ev.y, lang)}</b> · ${pts === 2 ? L(['Spot on!', 'Preciso!']) : pts === 1 ? L([`Close: ${off} years off.`, `Vicino: ${off} anni di scarto.`]) : L([`${off} years off. Look at where it sits among the others.`, `${off} anni di scarto. Guarda dove si colloca rispetto agli altri.`])} <button class="btn cyan sm" id="tlN" style="margin-left:6px">${r < events.length - 1 ? L(['Next event', 'Prossimo evento']) : L(['Finish', 'Fine'])}</button>`;
        $('#tlN', host).onclick = () => { r++; draw(); };
      };
    };
    draw();
  }

  /* ------------------------------------------------------------- Chemistry: equation balancer */
  function gameBalancer(sc: any, host: any, done: () => void) {
    const eqs = shuffle(BALANCE_EQS.slice()).slice(0, 4);
    let r = 0, score = 0;
    const draw = () => {
      if (r >= eqs.length) {
        host.innerHTML = `<div class="game"><div class="gtitle">${L(['All balanced!', 'Tutto bilanciato!'])}</div><p>${L(['First-try score', 'Punteggio al primo tentativo'])}: <b>${score} / ${eqs.length}</b>.${xpNote(score * 5)}</p><p class="muted">${L(['Press Continue when you\'re ready.', 'Premi Continua quando sei pronta.'])}</p></div>`;
        award(score * 5); done(); return;
      }
      const eq = eqs[r]; const nl = eq.left.length; const all = [...eq.left, ...eq.right];
      const coef = all.map(() => 1); let first = true, finished = false;
      const term = (sp: Species, i: number) => `<div class="bal-term"><button class="btn ghost sm" data-i="${i}" data-d="1" aria-label="${L(['More', 'Aumenta'])} ${sp.f}">▲</button><div class="bal-c" id="bc${i}">1</div><button class="btn ghost sm" data-i="${i}" data-d="-1" aria-label="${L(['Fewer', 'Diminuisci'])} ${sp.f}">▼</button><div class="bal-f">${sp.f}</div></div>`;
      const side = (arr: Species[], off: number) => arr.map((sp, i) => term(sp, off + i)).join('<span class="bal-plus">+</span>');
      host.innerHTML = `<div class="game"><div class="gtitle">${L(sc.title || ['Balance the equation', 'Bilancia l\'equazione'])}</div><div class="count">${r + 1} / ${eqs.length} · ${L(['score', 'punti'])} ${score}</div>
        <p class="muted" style="max-width:54ch">${L(['Change the coefficients (the big numbers) until every element has the same number of atoms on both sides. Do not change the formulas.', 'Cambia i coefficienti (i numeri grandi) finché ogni elemento ha lo stesso numero di atomi da entrambi i lati. Non cambiare le formule.'])}</p>
        <div class="bal-eq">${side(eq.left, 0)}<span class="bal-arrow">→</span>${side(eq.right, nl)}</div>
        <table class="bal-tab" aria-label="${L(['Atom count', 'Conteggio degli atomi'])}"><thead><tr><th></th><th>${L(['Left', 'Sinistra'])}</th><th>${L(['Right', 'Destra'])}</th><th></th></tr></thead><tbody id="balT"></tbody></table>
        <div class="fb" id="balF" aria-live="polite"></div></div>`;
      const fb = $('#balF', host);
      const refresh = () => {
        const l = countAtoms(eq.left, coef.slice(0, nl)), rr = countAtoms(eq.right, coef.slice(nl));
        $('#balT', host).innerHTML = [...new Set([...Object.keys(l), ...Object.keys(rr)])].map(el => `<tr class="${(l[el] || 0) === (rr[el] || 0) ? 'okrow' : ''}"><th>${el}</th><td>${l[el] || 0}</td><td>${rr[el] || 0}</td><td>${(l[el] || 0) === (rr[el] || 0) ? '✓' : '✗'}</td></tr>`).join('');
        coef.forEach((c, i) => { $('#bc' + i, host).textContent = String(c); });
      };
      refresh();
      $$('button[data-i]', host).forEach((b: any) => b.onclick = () => {
        if (finished) return;
        const i = +b.dataset.i; coef[i] = Math.min(9, Math.max(1, coef[i] + +b.dataset.d)); refresh();
        if (!isBalanced(eq, coef)) { fb.className = 'fb'; fb.textContent = ''; return; }
        if (!isLowestTerms(coef)) { first = false; fb.className = 'fb no'; fb.textContent = L(['Balanced, but the coefficients can all be divided by the same number. Use the smallest whole numbers.', 'Bilanciata, ma i coefficienti si possono dividere tutti per uno stesso numero. Usa i numeri interi più piccoli.']); return; }
        finished = true; if (first) score++;
        $$('button[data-i]', host).forEach((x: any) => { x.disabled = true; });
        fb.className = 'fb ok'; fb.innerHTML = `<b>${L(['Balanced!', 'Bilanciata!'])}</b> ${coef.join(' : ')} <button class="btn cyan sm" id="balN" style="margin-left:6px">${r < eqs.length - 1 ? L(['Next equation', 'Prossima equazione']) : L(['Finish', 'Fine'])}</button>`;
        $('#balN', host).onclick = () => { r++; draw(); };
      });
    };
    draw();
  }

  return { coordhunt: gameCoordHunt, timeline: gameTimeline, balancer: gameBalancer };
}

export const SUBJECT_GAME_TYPES = ['coordhunt', 'timeline', 'balancer'];
export { sub as _sub };
