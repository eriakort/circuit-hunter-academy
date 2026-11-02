import { Language, Rank } from './types';
import { ICONS } from './data/icons';

export const C = {
  ink: '#0e0f22',
  panel: '#171935',
  p2: '#20234a',
  panel2: '#20234a',
  line: '#454a8e',
  text: '#eeecf8',
  muted: '#a9a8cc',
  ember: '#ff6a3d',
  data: '#45d8ff',
  sak: '#ff8fc0',
  good: '#4be39a',
  bad: '#ff4d6d',
  gold: '#ffd166'
};

export const L = (x: any, lang: Language = 'en'): any => {
  if (Array.isArray(x)) {
    return x[lang === 'it' ? 1 : 0] ?? x[0] ?? '';
  }
  return x ?? '';
};

export const PILL = (en: any, it: any, lang: Language = 'en'): string => {
  return lang === 'it'
    ? `<span class="it" data-l="EN">${en}</span>`
    : `<span class="it" data-l="IT">${it}</span>`;
};

export const H = (en: any, it: any, lang: Language = 'en'): string => {
  return `${lang === 'it' ? it : en}${PILL(en, it, lang)}`;
};

export const rich = (s: any, lang: Language = 'en'): string => {
  if (!s) return '';
  return String(s).replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, (_m, en, it) =>
    `<span class="term">${lang === 'it' ? it : en}</span>${PILL(en, it, lang)}`
  );
};

export const ICON = (k: string, cls = 'ico'): string => {
  const p = ICONS[k] || '';
  return `<svg viewBox="0 0 24 24" class="${cls}" aria-hidden="true">${p}</svg>`;
};

export const cards = (list: [string, any, any][], lang: Language = 'en'): string => {
  return `<div class="grid3">${list
    .map(c => `<div class="mini">${ICON(c[0])}<b>${L(c[1], lang)}</b><span>${L(c[2], lang)}</span></div>`)
    .join('')}</div>`;
};

export const esc = (s: any): string => {
  return String(s ?? '').replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] || c)
  );
};

export const fill = (t: any, lang: Language = 'en', name: string = 'Hunter'): string => {
  return rich(L(t, lang), lang).replace(/\{name\}/g, esc(name || 'Hunter'));
};

export function demonSVG(h: number, horns = 2, eyes = 2, cls = 'demon'): string {
  const body = `hsl(${h} 62% 42%)`,
    dark = `hsl(${h} 60% 18%)`,
    glow = `hsl(${(h + 170) % 360} 100% 72%)`;

  let hs = '';
  for (let i = 0; i < horns; i++) {
    const x = horns === 1 ? 100 : 62 + i * (76 / (horns - 1));
    const tip = 14 + (i % 2) * 12 + (Math.abs(x - 100) < 12 ? -6 : 0);
    hs += `<polygon points="${x - 11},66 ${x + (x < 100 ? -6 : 6)},${tip} ${x + 11},66" fill="${dark}" stroke="${glow}" stroke-width="1.5"/>`;
  }

  let es = '';
  for (let i = 0; i < eyes; i++) {
    const x = eyes === 1 ? 100 : 72 + i * (56 / (eyes - 1));
    const y = eyes > 2 && i % 2 ? 92 : 102;
    es += `<ellipse cx="${x}" cy="${y}" rx="11" ry="7" fill="${glow}"/><rect x="${x - 1.6}" y="${y - 6}" width="3.2" height="12" fill="${dark}"/>`;
  }

  let gl = '';
  for (let i = 0; i < 6; i++) {
    const x = 30 + ((i * 53) % 140),
      y = 40 + ((i * 37) % 130);
    gl += `<rect class="blink" style="animation-delay:${i * 0.23}s" x="${x}" y="${y}" width="${6 + (i % 3) * 4}" height="5" fill="${glow}" opacity=".7"/>`;
  }

  return `<svg viewBox="0 0 200 200" class="${cls}" aria-hidden="true"><g class="float">${hs}
    <path d="M40 122 Q38 56 100 50 Q162 56 160 122 Q160 176 132 180 L121 166 L110 182 L100 166 L90 182 L79 166 L68 180 Q40 176 40 122Z" fill="${body}" stroke="${dark}" stroke-width="5"/>
    <path d="M58 92 Q100 70 142 92" fill="none" stroke="${dark}" stroke-width="4" opacity=".6"/>
    ${es}
    <path d="M70 142 L80 133 L90 144 L100 133 L110 144 L120 133 L130 142" fill="none" stroke="${glow}" stroke-width="3.5" stroke-linejoin="round"/>
    ${gl}</g></svg>`;
}

export const SENSEI = `<svg viewBox="0 0 64 64" class="avatar" aria-hidden="true"><polygon points="32,2 59,17 59,47 32,62 5,47 5,17" fill="#2a1830" stroke="${C.ember}" stroke-width="3"/><path d="M36 10 L20 36 H31 L26 54 L44 26 H33 Z" fill="${C.gold}"/></svg>`;

export const YOU = (name = 'H'): string =>
  `<svg viewBox="0 0 64 64" class="avatar" aria-hidden="true"><polygon points="32,2 59,17 59,47 32,62 5,47 5,17" fill="#10283a" stroke="${C.data}" stroke-width="3"/><text x="32" y="42" text-anchor="middle" font-family="Dela Gothic One, Arial Black, sans-serif" font-size="26" fill="${C.data}">${(name || 'H').trim().charAt(0).toUpperCase()}</text></svg>`;

export const HEART = (on: boolean): string =>
  `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l9 10-9 10-9-10z" fill="${on ? C.sak : '#2a2d5c'}" stroke="${on ? '#fff' : '#454a8e'}" stroke-width="1.2"/></svg>`;

export function rng(seed: number) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function sshuffle<T>(arr: T[], r: () => number): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function rankOf(xp: number, ranks: Rank[]): Rank {
  let r = ranks[0];
  for (const x of ranks) {
    if (xp >= x[0]) r = x;
  }
  return r;
}

export function nextRank(xp: number, ranks: Rank[]): Rank | undefined {
  return ranks.find(r => r[0] > xp);
}

export function raceXP(correct: number, isWinner: boolean, playerCount: number): number {
  let xp = correct * 3;
  if (playerCount > 1 && isWinner) xp += 25;
  return xp;
}

export function safeId(): string {
  return typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export const hueOf = (s: any): number => {
  let h = 0;
  for (const c of String(s)) h = (h * 31 + c.charCodeAt(0)) % 360;
  return h;
};

export const raceAvatar = (name: string, hue: number, cls = 'avatar'): string => {
  const h = Number.isFinite(Number(hue)) ? Math.round(Number(hue)) : 0;
  return `<svg viewBox="0 0 64 64" class="${esc(cls)}" aria-hidden="true"><polygon points="32,2 59,17 59,47 32,62 5,47 5,17" fill="hsl(${h} 55% 22%)" stroke="hsl(${h} 90% 65%)" stroke-width="4"/><text x="32" y="42" text-anchor="middle" font-family="Dela Gothic One, Arial Black, sans-serif" font-size="26" fill="hsl(${h} 90% 70%)">${esc((name || '?').trim().charAt(0).toUpperCase())}</text></svg>`;
};

export const escH = (s: any): string =>
  String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function hl(src: string): string {
  return escH(src).replace(
    /(#.*$)|("[^"\n]*"|'[^'\n]*')|\b(def|return|if|elif|else|for|while|in|not|and|or|True|False|None|import|from|with|as|match|case|break|continue|pass)\b|\b(print|input|int|float|str|bool|len|range|type|open|round|abs|max|min|sum)\b(?=\()|\b(\d+(?:\.\d+)?)\b/gm,
    (_m, c, s, k, f, n) =>
      c
        ? `<span class="c">${c}</span>`
        : s
        ? `<span class="s">${s}</span>`
        : k
        ? `<span class="k">${k}</span>`
        : f
        ? `<span class="f">${f}</span>`
        : `<span class="n">${n}</span>`
  );
}

export const CODE = (src: any, lang: Language = 'en'): string =>
  `<pre class="code">${hl(L(src, lang))}</pre>`;

export const U = {
  missions: ['Missions', 'Missioni'],
  codex: ['Codex', 'Glossario'],
  dojo: ['Dojo', 'Dojo'],
  cont: ['Continue', 'Continua'],
  back: ['Back', 'Indietro'],
  fight: ['Fight!', 'Combatti!'],
  next: ['Next step', 'Passo successivo'],
  prev: ['Previous step', 'Passo precedente'],
  arc: ['Arc', 'Arco'],
  mission: ['Mission', 'Missione'],
  pages: ['pp.', 'pp.'],
  ready: ['Ready', 'Pronta'],
  locked: ['Locked', 'Bloccata'],
  cleared: ['Cleared', 'Superata'],
  flawless: ['Cleared · flawless', 'Superata · perfetta']
};

export const GUIDE = {
  fde: [
    '<p>Watch the CPU run one real instruction. Press <b>Next step</b> to go through the cycle: <b>fetch</b>, <b>decode</b>, <b>execute</b>.</p>',
    "<p>Guarda la CPU eseguire una vera istruzione. Premi <b>Passo successivo</b> per seguire il ciclo: <b>fetch</b> (prelievo), <b>decode</b> (decodifica), <b>execute</b> (esecuzione).</p>"
  ],
  journey: [
    '<p>Now follow one key press on its journey through the whole computer. Press <b>Next step</b>. (Simplified: real computers do a few more steps in between, all in a fraction of a second.)</p>',
    '<p>Ora segui il viaggio di un tasto premuto attraverso tutto il computer. Premi <b>Passo successivo</b>. (Versione semplificata: i computer veri fanno qualche passaggio in più, tutto in una frazione di secondo.)</p>'
  ]
};
