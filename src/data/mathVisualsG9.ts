import type { Language } from '../types';
import { C, T, arrow, anim, move, frame, pick, showDuring, card } from './sciViz';

/**
 * Italian Grade 9 Maths diagrams, redrawn large with motion that shows the idea. Keys are unchanged
 * so the lessons keep working. Each diagram is fully in the chosen language (the old ones mixed
 * Italian and English). A teacher should still skim the wording against the course text.
 */
type Builder = (lang: Language) => string;
const t2 = (lang: Language) => (en: string, it: string) => pick(lang, en, it);

/** A square cell with a letter or number inside. */
const chip = (cx: number, cy: number, s: number, color: string, label: string, size = 26, fillOp = 0.22) =>
  `<rect x="${cx - s / 2}" y="${cy - s / 2}" width="${s}" height="${s}" rx="10" fill="${color}" fill-opacity="${fillOp}" stroke="${color}" stroke-width="3"/>${T(cx, cy + size * 0.35, label, { size, weight: 800 })}`;

export const MATH9_BUILDERS: Record<string, Builder> = {
  /* The natural numbers: start at 0, never end, nothing in between */
  'math-natural-line': lang => {
    const p = t2(lang);
    const x = (i: number) => 60 + i * 85;
    const ticks = Array.from({ length: 7 }, (_, i) => `<line x1="${x(i)}" y1="96" x2="${x(i)}" y2="124" stroke="${i === 0 ? C.ember : C.gold}" stroke-width="5" stroke-linecap="round"/>${T(x(i), 158, String(i), { size: 28, weight: 800 })}`).join('');
    const vals = Array.from({ length: 7 }, (_, i) => x(i)).join(';');
    const pill = (cx: number, color: string, a: string, b: string) =>
      `${card(cx - 98, 204, 196, 82, color, 0.08)}${T(cx, 238, a, { size: 22, fill: color, weight: 800 })}${T(cx, 268, b, { size: 20, fill: C.muted })}`;
    return frame(p('The natural numbers', 'I numeri naturali'),
      `${T(320, 44, 'ℕ = {0, 1, 2, 3, …}', { size: 28, weight: 800, fill: C.data })}
      <line x1="30" y1="110" x2="596" y2="110" stroke="${C.muted}" stroke-width="5" stroke-linecap="round"/>${arrow(560, 110, 612, 110, C.muted, 5)}${ticks}
      <circle cy="110" r="13" fill="${C.sakura}"><animate attributeName="cx" values="${vals}" dur="7s" calcMode="discrete" repeatCount="indefinite"/></circle>
      ${pill(120, C.ember, p('Starts at 0', 'Parte da 0'), p('no predecessor', 'nessun precedente'))}${pill(320, C.gold, p('Never ends', 'Non finisce'), p('goes on to the right', 'va a destra'))}${pill(520, C.data, p('Discrete', 'Discreto'), p('nothing between', 'niente in mezzo'))}`,
      '', 310);
  },

  /* Equivalent fractions: same filled length, different slices */
  'math-fractions-visual': lang => {
    const p = t2(lang);
    const rows: Array<[string, number, string]> = [['1/2', 2, C.data], ['2/4', 4, C.gold], ['4/8', 8, C.ember]];
    const bar = (i: number) => {
      const [name, parts, color] = rows[i], y = 60 + i * 76, x0 = 130, W = 380;
      const cuts = Array.from({ length: parts - 1 }, (_, k) => `<line x1="${x0 + ((k + 1) * W) / parts}" y1="${y}" x2="${x0 + ((k + 1) * W) / parts}" y2="${y + 46}" stroke="${C.panel2}" stroke-width="4"/>`).join('');
      return `${T(72, y + 34, name, { size: 30, weight: 800, fill: color })}
        <rect x="${x0}" y="${y}" width="${W}" height="46" rx="8" fill="${C.panel}" stroke="${C.line}" stroke-width="3"/>
        <rect x="${x0}" y="${y}" height="46" rx="8" fill="${color}"><animate attributeName="width" values="0;${W / 2};${W / 2};0" keyTimes="0;.3;.9;1" dur="5s" begin="${i * 0.3}s" repeatCount="indefinite"/></rect>${cuts}
        ${T(572, y + 34, '= 0.5', { size: 26, weight: 800 })}`;
    };
    return frame(p('Equivalent fractions', 'Frazioni equivalenti'),
      `${bar(0)}${bar(1)}${bar(2)}
      ${T(572, 132, '×2', { size: 22, fill: C.good, weight: 800 })}${T(572, 208, '×2', { size: 22, fill: C.good, weight: 800 })}
      ${T(320, 304, p('Multiply top and bottom by the same number', 'Moltiplica sopra e sotto per lo stesso numero'), { size: 20, fill: C.muted })}`,
      '', 330);
  },

  /* Sets: intersection and union */
  'math-venn-diagram': lang => {
    const p = t2(lang);
    const venn = (ox: number, mode: 'and' | 'or') => {
      const a = ox - 38, b = ox + 38, cy = 120, r = 66, id = `vc${mode}`;
      const col = mode === 'and' ? C.good : C.gold;
      return `<defs><clipPath id="${id}"><circle cx="${a}" cy="${cy}" r="${r}"/></clipPath></defs>
        <circle cx="${a}" cy="${cy}" r="${r}" fill="${C.data}" fill-opacity="${mode === 'or' ? 0.3 : 0.1}" stroke="${C.data}" stroke-width="4"/>
        <circle cx="${b}" cy="${cy}" r="${r}" fill="${C.ember}" fill-opacity="${mode === 'or' ? 0.3 : 0.1}" stroke="${C.ember}" stroke-width="4"/>
        ${mode === 'and'
          ? `<circle cx="${b}" cy="${cy}" r="${r}" clip-path="url(#${id})" fill="${col}" fill-opacity="0.55">${anim('fill-opacity', '0.25;0.9;0.25', 2.4)}</circle>`
          : `<circle cx="${a}" cy="${cy}" r="${r}" fill="${col}" fill-opacity="0.3">${anim('fill-opacity', '0.1;0.5;0.1', 2.4)}</circle><circle cx="${b}" cy="${cy}" r="${r}" fill="${col}" fill-opacity="0.3">${anim('fill-opacity', '0.1;0.5;0.1', 2.4)}</circle>`}
        ${T(a - 22, cy + 8, 'A', { size: 28, weight: 800, fill: C.data })}${T(b + 22, cy + 8, 'B', { size: 28, weight: 800, fill: C.ember })}`;
    };
    return frame(p('Intersection and union', 'Intersezione e unione'),
      `${venn(160, 'and')}${venn(480, 'or')}
      ${T(160, 238, 'A ∩ B', { size: 32, weight: 800, fill: C.good })}${T(160, 270, p('AND · in both', 'E · in entrambi'), { size: 22, fill: C.muted })}
      ${T(480, 238, 'A ∪ B', { size: 32, weight: 800, fill: C.gold })}${T(480, 270, p('OR · in A, B or both', 'O · in A, B o entrambi'), { size: 22, fill: C.muted })}`,
      '', 300);
  },

  /* Parts of an algebraic expression */
  'algebra-parts': lang => {
    const p = t2(lang);
    const dur = 6;
    const part = (cx: number, from: number, to: number, color: string, label: string, ly: number) =>
      `${showDuring(from, to, dur, `<rect x="${cx - 40}" y="96" width="80" height="98" rx="14" fill="${color}" fill-opacity="0.2" stroke="${color}" stroke-width="4"/><line x1="${cx}" y1="196" x2="${cx}" y2="${ly - 26}" stroke="${color}" stroke-width="3"/>${T(cx, ly, label, { size: 24, fill: color, weight: 800 })}`)}`;
    return frame(p('Parts of an expression', 'Le parti di un’espressione'),
      `${T(190, 168, '3', { size: 84, weight: 800 })}${T(280, 168, 'x', { size: 84, weight: 800 })}${T(380, 168, '+', { size: 70, weight: 800, fill: C.muted })}${T(470, 168, '2', { size: 84, weight: 800 })}
      <path d="M150 78 H304" stroke="${C.good}" stroke-width="4" stroke-linecap="round"/><path d="M432 78 H508" stroke="${C.gold}" stroke-width="4" stroke-linecap="round"/>
      ${T(227, 62, p('term 1', 'termine 1'), { size: 22, fill: C.good, weight: 800 })}${T(470, 62, p('term 2', 'termine 2'), { size: 22, fill: C.gold, weight: 800 })}
      ${part(190, 0.0, 0.3, C.ember, p('coefficient', 'coefficiente'), 240)}${part(280, 0.33, 0.63, C.data, p('variable', 'variabile'), 286)}${part(470, 0.66, 0.96, C.gold, p('constant', 'costante'), 240)}`,
      p('3x means 3 × x', '3x significa 3 × x'), 340);
  },

  /* Substituting a value, step by step */
  'algebra-substitution': lang => {
    const p = t2(lang);
    const dur = 8;
    const steps: Array<[string, string, string]> = [
      [p('Start: x = 4', 'Parti: x = 4'), '3x + 2', C.data],
      [p('Replace x with 4', 'Sostituisci x con 4'), '3 × 4 + 2', C.gold],
      [p('Multiply first', 'Prima moltiplica'), '12 + 2', C.ember],
      [p('Then add', 'Poi somma'), '14', C.good]
    ];
    const rows = steps.map(([label, expr, color], i) => {
      const y = 22 + i * 74;
      return `${card(16, y, 608, 62, color, 0.08)}<circle cx="52" cy="${y + 31}" r="18" fill="${color}"/>${T(52, y + 39, String(i + 1), { size: 22, weight: 800, fill: '#1b1b1b', extra: 'style="stroke:none"' })}
        ${T(86, y + 39, label, { size: 22, anchor: 'start', fill: C.muted })}${T(560, y + 42, expr, { size: 34, weight: 800, anchor: 'end' })}
        <rect x="16" y="${y}" width="608" height="62" rx="16" fill="none" stroke="${color}" stroke-width="5" opacity="0">${anim('opacity', '0;0;1;1;0;0', dur, 0, `keyTimes="0;${(i / 4).toFixed(3)};${(i / 4 + 0.03).toFixed(3)};${((i + 1) / 4 - 0.02).toFixed(3)};${((i + 1) / 4).toFixed(3)};1"`)}</rect>`;
    }).join('');
    const arrows = [0, 1, 2].map(i => `<path d="M320 ${84 + i * 74} v10" stroke="${C.muted}" stroke-width="4" stroke-linecap="round"/>`).join('');
    return frame(p('Substituting a value', 'Sostituire un valore'), `${rows}${arrows}`, '', 330);
  },

  /* Integers: add moves right, subtract moves left */
  'math-integers-line': lang => {
    const p = t2(lang);
    const x = (v: number) => 320 + v * 60;
    const ticks = Array.from({ length: 9 }, (_, i) => {
      const v = i - 4, col = v < 0 ? C.ember : v === 0 ? C.gold : C.data;
      return `<line x1="${x(v)}" y1="156" x2="${x(v)}" y2="184" stroke="${col}" stroke-width="5" stroke-linecap="round"/>${T(x(v), 218, (v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(v), { size: 24, weight: 800, fill: col })}`;
    }).join('');
    const hop = [-3, -2, -1, 0, 1, 2].map(v => x(v)).join(';');
    return frame(p('Integers on the line', 'I numeri relativi sulla retta'),
      `<line x1="40" y1="170" x2="580" y2="170" stroke="${C.muted}" stroke-width="5" stroke-linecap="round"/>${arrow(548, 170, 604, 170, C.muted, 5)}${arrow(92, 170, 36, 170, C.muted, 5)}${ticks}
      <path d="M${x(-3)} 148 Q${(x(-3) + x(2)) / 2} 40 ${x(2) - 6} 146" fill="none" stroke="${C.gold}" stroke-width="4" stroke-dasharray="10 8" stroke-linecap="round"/>${T((x(-3) + x(2)) / 2, 84, p('5 steps right', '5 passi a destra'), { size: 26, fill: C.gold, weight: 800 })}
      <circle cy="170" r="14" fill="${C.sakura}"><animate attributeName="cx" values="${hop}" dur="6s" calcMode="discrete" repeatCount="indefinite"/></circle>
      ${T(320, 268, '(−3) + (+5) = +2', { size: 32, weight: 800 })}
      ${T(320, 304, p('add → move right · subtract → move left', 'somma → a destra · sottrai → a sinistra'), { size: 20, fill: C.muted })}`,
      '', 330);
  },

  /* GCD and LCM from prime factors */
  'math-mcd-mcm': lang => {
    const p = t2(lang);
    const dur = 8, cols = [250, 320, 390, 460];
    const f12: Array<[number, string]> = [[0, '2'], [1, '2'], [2, '3']], f18: Array<[number, string]> = [[0, '2'], [2, '3'], [3, '3']];
    const row = (y: number, name: string, items: Array<[number, string]>, color: string) =>
      `${T(196, y + 10, name, { size: 28, weight: 800, anchor: 'end' })}${items.map(([c, n]) => chip(cols[c], y, 56, color, n, 30)).join('')}`;
    const hi = (indexes: number[], color: string, from: number, to: number) =>
      showDuring(from, to, dur, indexes.map(c => `<rect x="${cols[c] - 36}" y="52" width="72" height="144" rx="16" fill="${color}" fill-opacity="0.18" stroke="${color}" stroke-width="4"/>`).join(''));
    return frame(p('GCD and LCM', 'M.C.D. e m.c.m.'),
      `${T(320, 36, p('Prime factors of 12 and 18', 'Fattori primi di 12 e 18'), { size: 22, fill: C.muted })}
      ${hi([0, 2], C.good, 0.02, 0.48)}${hi([0, 1, 2, 3], C.gold, 0.52, 0.98)}
      ${row(100, '12 =', f12, C.data)}${row(170, '18 =', f18, C.ember)}
      ${T(320, 246, 'M.C.D.(12, 18) = 2 × 3 = 6', { size: 28, weight: 800, fill: C.good })}${T(320, 274, p('common factors, lowest power', 'solo i comuni, esponente minore'), { size: 20, fill: C.muted })}
      ${T(320, 316, 'm.c.m.(12, 18) = 2² × 3² = 36', { size: 28, weight: 800, fill: C.gold })}${T(320, 344, p('all factors, highest power', 'tutti, esponente maggiore'), { size: 20, fill: C.muted })}`,
      '', 366);
  },

  /* Like terms combine, unlike terms do not */
  'math-like-terms': lang => {
    const p = t2(lang);
    const dur = 6;
    const sq = (x: number, y: number, fill: string, to = '') =>
      `<rect x="${x}" y="${y}" width="28" height="28" rx="6" fill="${fill}">${to ? anim('fill', `${fill};${fill};${to};${to};${fill}`, dur, 0, 'keyTimes="0;.25;.45;.9;1"') : ''}</rect>`;
    const left = [0, 1, 2, 3, 4, 5, 6, 7].map(i => sq(30 + i * 34, 128, i < 3 ? C.good : C.data, C.good)).join('');
    const rightSquares = [0, 1, 2].map(i => sq(344 + i * 34, 128, C.good)).join('');
    const rightBars = [0, 1].map(i => `<rect x="${456 + i * 22}" y="128" width="12" height="28" rx="4" fill="${C.sakura}"/>`).join('');
    return frame(p('Like and unlike terms', 'Termini simili e non simili'),
      `${card(14, 24, 306, 282, C.good, 0.08)}${T(167, 60, p('LIKE TERMS', 'TERMINI SIMILI'), { size: 24, fill: C.good, weight: 800 })}
      ${left}${T(167, 108, '3a² + 5a²', { size: 24 })}${T(167, 214, '= 8a²', { size: 36, weight: 800, fill: C.good })}${T(167, 262, p('add the coefficients', 'somma i coefficienti'), { size: 20, fill: C.muted })}
      ${card(326, 24, 300, 282, C.ember, 0.08)}${T(476, 60, p('UNLIKE TERMS', 'TERMINI NON SIMILI'), { size: 24, fill: C.ember, weight: 800 })}
      ${rightSquares}${rightBars}${T(476, 108, '3a² + 2a', { size: 24 })}${T(476, 214, '≠ 5a³', { size: 36, weight: 800, fill: C.ember })}${T(476, 262, p('exponents differ: no merge', 'esponenti diversi: no'), { size: 20, fill: C.muted })}
      ${showDuring(0.5, 0.95, dur, `<line x1="350" y1="146" x2="500" y2="146" stroke="${C.ember}" stroke-width="5" stroke-dasharray="8 8"/>`)}`,
      '', 330);
  },

  /* (a + b)² as an area */
  'math-square-binomial': lang => {
    const p = t2(lang);
    const dur = 6, A = 120, B = 70, x0 = 40, y0 = 72;
    const piece = (x: number, y: number, w: number, h: number, color: string, label: string, dx: number, dy: number) =>
      `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${color}" fill-opacity="0.45" stroke="${color}" stroke-width="3"/>${T(x + w / 2, y + h / 2 + 8, label, { size: 26, weight: 800 })}${move(`${dx} ${dy};0 0;0 0;${dx} ${dy}`, dur, 0, '0;.3;.8;1')}</g>`;
    return frame(p('The square of a binomial', 'Il quadrato di un binomio'),
      `${T(x0 + A / 2, 60, 'a', { size: 26, weight: 800, fill: C.data })}${T(x0 + A + B / 2, 60, 'b', { size: 26, weight: 800, fill: C.gold })}${T(22, y0 + A / 2 + 8, 'a', { size: 26, weight: 800, fill: C.data })}${T(22, y0 + A + B / 2 + 8, 'b', { size: 26, weight: 800, fill: C.gold })}
      ${piece(x0, y0, A, A, C.data, 'a²', -14, -14)}${piece(x0 + A, y0, B, A, C.sakura, 'ab', 14, -14)}${piece(x0, y0 + A, A, B, C.sakura, 'ab', -14, 14)}${piece(x0 + A, y0 + A, B, B, C.gold, 'b²', 14, 14)}
      ${T(440, 100, '(a + b)²', { size: 34, weight: 800 })}${T(440, 150, '= a² + 2ab + b²', { size: 30, weight: 800 })}
      ${card(270, 184, 340, 62, C.ember, 0.12)}${T(440, 223, '(a + b)² ≠ a² + b²', { size: 28, weight: 800, fill: C.ember })}`,
      p('The two pink rectangles are the 2ab', 'I due rettangoli rosa sono il 2ab'), 310);
  },

  /* (a + b)(a − b) = a² − b²: the L-shape becomes a rectangle */
  'math-diff-squares': lang => {
    const p = t2(lang);
    const dur = 7, a = 150, b = 60, x0 = 215, y0 = 70;
    return frame(p('Sum times difference', 'Somma per differenza'),
      `${showDuring(0.0, 0.42, dur, T(320, 50, 'a² − b²', { size: 30, weight: 800, fill: C.data }))}${showDuring(0.5, 0.98, dur, T(320, 50, '(a + b)(a − b)', { size: 30, weight: 800, fill: C.good }))}
      <rect x="${x0}" y="${y0}" width="${a}" height="${a - b}" rx="4" fill="${C.data}" fill-opacity="0.45" stroke="${C.data}" stroke-width="3"/>
      <g><g><rect x="${x0}" y="${y0 + a - b}" width="${a - b}" height="${b}" rx="4" fill="${C.good}" fill-opacity="0.5" stroke="${C.good}" stroke-width="3"/>
        <animateTransform attributeName="transform" type="rotate" values="0 ${x0 + (a - b) / 2} ${y0 + a - b / 2};0 ${x0 + (a - b) / 2} ${y0 + a - b / 2};90 ${x0 + (a - b) / 2} ${y0 + a - b / 2};90 ${x0 + (a - b) / 2} ${y0 + a - b / 2};0 ${x0 + (a - b) / 2} ${y0 + a - b / 2}" keyTimes="0;.15;.45;.9;1" dur="${dur}s" repeatCount="indefinite"/></g>
        <animateTransform attributeName="transform" type="translate" values="0 0;0 0;${a / 2 + b} ${-a / 2};${a / 2 + b} ${-a / 2};0 0" keyTimes="0;.15;.45;.9;1" dur="${dur}s" repeatCount="indefinite"/></g>
      <rect x="${x0 + a - b}" y="${y0 + a - b}" width="${b}" height="${b}" rx="4" fill="none" stroke="${C.ember}" stroke-width="3" stroke-dasharray="8 6">${anim('opacity', '1;1;0;0;1', dur, 0, 'keyTimes="0;.15;.4;.9;1"')}</rect>
      ${T(x0 + a - b / 2, y0 + a - b / 2 + 8, 'b²', { size: 24, fill: C.ember, weight: 800 })}
      ${T(320, 282, 'a² − b² = (a + b)(a − b)', { size: 30, weight: 800 })}${T(320, 318, '(x + 3)(x − 3) = x² − 9', { size: 22, fill: C.muted })}`,
      '', 340);
  },

  /* The balance principle */
  'math-equation-balance': lang => {
    const p = t2(lang);
    const dur = 7;
    const coin = (cx: number, cy: number, fade: boolean, color = C.gold) =>
      `<circle cx="${cx}" cy="${cy}" r="13" fill="${color}">${fade ? anim('opacity', '1;1;0;0;1', dur, 0, 'keyTimes="0;.3;.5;.94;1"') + anim('cy', `${cy};${cy};${cy - 40};${cy - 40};${cy}`, dur, 0, 'keyTimes="0;.3;.5;.94;1"') : ''}</circle>`;
    const left = [0, 1, 2].map(i => coin(232 + i * 30, 146, true)).join('');
    const right = [0, 1, 2, 3].map(i => coin(420 + i * 30, 146, false)).join('') + [0, 1, 2].map(i => coin(435 + i * 30, 118, true)).join('');
    return frame(p('The balance principle', 'Il principio della bilancia'),
      `${showDuring(0.0, 0.47, dur, T(320, 52, 'x + 3 = 7', { size: 40, weight: 800 }))}${showDuring(0.53, 0.98, dur, T(320, 52, 'x = 4', { size: 40, weight: 800, fill: C.good }))}
      <rect x="110" y="160" width="420" height="10" rx="5" fill="${C.gold}"/>
      <polygon points="320,170 284,240 356,240" fill="${C.gold}" fill-opacity="0.85"/>
      <rect x="120" y="170" width="190" height="8" rx="4" fill="${C.data}" fill-opacity="0.6"/><rect x="330" y="170" width="190" height="8" rx="4" fill="${C.data}" fill-opacity="0.6"/>
      <rect x="164" y="104" width="42" height="42" rx="8" fill="${C.ember}" fill-opacity="0.35" stroke="${C.ember}" stroke-width="3"/>${T(185, 133, 'x', { size: 28, weight: 800 })}
      ${left}${right}
      ${T(320, 284, p('Do the same to BOTH sides', 'Fai lo stesso da ENTRAMBE le parti'), { size: 24, fill: C.gold, weight: 800 })}
      ${showDuring(0.0, 0.47, dur, T(320, 316, p('Take away 3 from each side…', 'Togli 3 da ogni parte…'), { size: 20, fill: C.muted }))}${showDuring(0.53, 0.98, dur, T(320, 316, '7 − 3 = 4', { size: 20, fill: C.muted }))}`,
      '', 340);
  },

  /* Multiplying by a negative flips the inequality */
  'math-inequality-line': lang => {
    const p = t2(lang);
    const dur = 7, x = (v: number) => 320 + v * 48;
    const ticks = Array.from({ length: 11 }, (_, i) => {
      const v = i - 5;
      return `<line x1="${x(v)}" y1="160" x2="${x(v)}" y2="180" stroke="${C.muted}" stroke-width="4"/>${T(x(v), 212, (v < 0 ? '−' : '') + Math.abs(v), { size: 22, fill: v === 0 ? C.gold : C.muted })}`;
    }).join('');
    const dotMove = (from: number, to: number, color: string, label: string) =>
      `<g><circle cx="${x(from)}" cy="170" r="15" fill="${color}"><animate attributeName="cx" values="${x(from)};${x(from)};${x(to)};${x(to)};${x(from)}" keyTimes="0;.25;.5;.9;1" dur="${dur}s" repeatCount="indefinite"/></circle>
      <text text-anchor="middle" font-size="20" font-weight="800" fill="#1b1b1b" style="stroke:none" y="177"><animate attributeName="x" values="${x(from)};${x(from)};${x(to)};${x(to)};${x(from)}" keyTimes="0;.25;.5;.9;1" dur="${dur}s" repeatCount="indefinite"/>${label}</text></g>`;
    return frame(p('Multiplying by a negative', 'Moltiplicare per un negativo'),
      `${showDuring(0.0, 0.47, dur, T(320, 70, '2 < 5', { size: 44, weight: 800 }))}${showDuring(0.53, 0.98, dur, T(320, 70, '−2 > −5', { size: 44, weight: 800, fill: C.ember }))}
      ${showDuring(0.2, 0.5, dur, T(320, 118, '× (−1)', { size: 28, fill: C.gold, weight: 800 }))}
      <line x1="40" y1="170" x2="600" y2="170" stroke="${C.muted}" stroke-width="5" stroke-linecap="round"/>${ticks}
      ${dotMove(5, -5, C.ember, '5')}${dotMove(2, -2, C.data, '2')}
      ${T(320, 270, p('Multiply by a negative: flip the sign', 'Per un numero negativo: inverti il verso'), { size: 24, fill: C.gold, weight: 800 })}
      ${T(320, 304, p('the order on the line reverses', 'l’ordine sulla retta si inverte'), { size: 20, fill: C.muted })}`,
      '', 330);
  }
};
