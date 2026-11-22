import type { Language } from '../types';
import { C, T, arrow, anim, move, frame, pick, showDuring, card } from './sciViz';

/**
 * Italian Grade 10 Maths diagrams, redrawn large with motion that shows the idea. Keys are unchanged
 * so the lessons keep working. Each diagram is fully in the chosen language. A teacher should still
 * skim the wording against the course text.
 */
type Builder = (lang: Language) => string;
const t2 = (lang: Language) => (en: string, it: string) => pick(lang, en, it);
const col3 = (i: number) => 20 + i * 207;
const f1 = (n: number) => n.toFixed(1);

export const MATH10_BUILDERS: Record<string, Builder> = {
  /* Linear systems: one, none or infinitely many solutions */
  math10Systems: lang => {
    const p = t2(lang);
    const plot = (x0: number, color: string, title: string, sub: string, result: string, geo: string, lines: string) =>
      `${card(x0, 24, 200, 290, color, 0.08)}${T(x0 + 100, 58, title, { size: 22, fill: color, weight: 800 })}${T(x0 + 100, 84, sub, { size: 20, fill: C.muted })}
       <rect x="${x0 + 16}" y="98" width="168" height="112" rx="10" fill="${C.panel}" stroke="${C.line}" stroke-width="2"/>${lines}
       ${T(x0 + 100, 246, result, { size: 22, weight: 800 })}${T(x0 + 100, 280, geo, { size: 20, fill: C.muted })}`;
    const a = col3(0), b = col3(1), c = col3(2);
    const cross = `<line x1="${a + 30}" y1="190" x2="${a + 170}" y2="118" stroke="${C.data}" stroke-width="5" stroke-linecap="round"/>
      <line x1="${a + 30}" y1="120" x2="${a + 170}" y2="190" stroke="${C.gold}" stroke-width="5" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" values="-8 ${a + 100} 154;8 ${a + 100} 154;-8 ${a + 100} 154" dur="4s" repeatCount="indefinite"/></line>
      <circle cx="${a + 100}" cy="154" r="9" fill="${C.ember}"/>`;
    const par = `<line x1="${b + 30}" y1="150" x2="${b + 170}" y2="110" stroke="${C.data}" stroke-width="5" stroke-linecap="round"/>
      <g><line x1="${b + 30}" y1="184" x2="${b + 170}" y2="144" stroke="${C.gold}" stroke-width="5" stroke-linecap="round"/>${move('0 0;0 -14;0 0;0 14;0 0', 4, 0)}</g>`;
    const same = `<line x1="${c + 30}" y1="190" x2="${c + 170}" y2="118" stroke="${C.data}" stroke-width="9" stroke-linecap="round"/>
      <line x1="${c + 30}" y1="190" x2="${c + 170}" y2="118" stroke="${C.gold}" stroke-width="4" stroke-linecap="round" stroke-dasharray="14 12"><animate attributeName="stroke-dashoffset" values="0;-26" dur="1.2s" repeatCount="indefinite"/></line>`;
    return frame(p('Linear systems', 'Sistemi lineari'),
      `${plot(a, C.good, p('DETERMINED', 'DETERMINATO'), 'D ≠ 0', p('1 solution', '1 soluzione'), p('the lines cross', 'rette incidenti'), cross)}
       ${plot(b, C.ember, p('IMPOSSIBLE', 'IMPOSSIBILE'), 'D = 0', p('0 solutions', '0 soluzioni'), p('parallel lines', 'rette parallele'), par)}
       ${plot(c, C.data, p('INDETERMINATE', 'INDETERMINATO'), 'D = 0', p('∞ solutions', '∞ soluzioni'), p('same line', 'stessa retta'), same)}`,
      '', 330);
  },

  /* Radicals: simplify and rationalise */
  math10Radicals: lang => {
    const p = t2(lang);
    const dur = 8;
    const hi = (x: number, y: number, h: number, from: number, to: number, color: string) =>
      showDuring(from, to, dur, `<rect x="${x + 8}" y="${y}" width="284" height="${h}" rx="12" fill="none" stroke="${color}" stroke-width="4"/>`);
    return frame(p('Radicals', 'Radicali'),
      `${card(14, 24, 300, 292, C.data, 0.08)}${T(164, 58, p('SIMPLIFY', 'SEMPLIFICA'), { size: 24, fill: C.data, weight: 800 })}
       ${T(164, 108, '√(4 · 3) = 2√3', { size: 28, weight: 800 })}${T(164, 138, p('take out the perfect square', 'porta fuori il quadrato'), { size: 20, fill: C.muted })}
       ${T(164, 190, '√(−9) ∉ ℝ', { size: 28, weight: 800, fill: C.ember })}${T(164, 220, p('even index: radicand ≥ 0', 'indice pari: radicando ≥ 0'), { size: 20, fill: C.muted })}
       ${T(164, 268, '√(a + b) ≠ √a + √b', { size: 24, weight: 800, fill: C.gold })}${T(164, 296, p('classic trap!', 'trappola classica!'), { size: 20, fill: C.muted })}
       ${card(326, 24, 300, 292, C.good, 0.08)}${T(476, 58, p('RATIONALISE', 'RAZIONALIZZA'), { size: 24, fill: C.good, weight: 800 })}
       ${T(476, 108, '6 / √3 = 2√3', { size: 28, weight: 800 })}${T(476, 138, '× (√3 / √3)', { size: 22, fill: C.muted })}
       ${T(476, 190, '1 / (√5 − 2)', { size: 28, weight: 800 })}${T(476, 222, '× (√5 + 2) / (√5 + 2)', { size: 20, fill: C.muted })}${T(476, 254, '= √5 + 2', { size: 28, weight: 800, fill: C.good })}${T(476, 292, p('sum × difference', 'somma × differenza'), { size: 20, fill: C.muted })}
       ${hi(6, 78, 70, 0.0, 0.33, C.data)}${hi(6, 160, 70, 0.33, 0.66, C.ember)}${hi(318, 78, 72, 0.0, 0.5, C.good)}${hi(318, 160, 108, 0.5, 0.98, C.good)}`,
      '', 330);
  },

  /* The line: slope, intercept and formulas */
  math10CartesianLine: lang => {
    const p = t2(lang);
    const ox = 60, oy = 210, u = 40; // pixel of (0,0) and pixels per unit
    const px = (x: number) => ox + x * u, py = (y: number) => oy - y * u;
    const m = 0.75, q = 1;
    const x1 = 0, x2 = 4, y1 = m * x1 + q, y2 = m * x2 + q;
    const dur = 6;
    return frame(p('The straight line', 'La retta'),
      `<line x1="${ox - 40}" y1="${oy}" x2="${ox + 220}" y2="${oy}" stroke="${C.muted}" stroke-width="3"/><line x1="${ox}" y1="${oy + 20}" x2="${ox}" y2="40" stroke="${C.muted}" stroke-width="3"/>
       <line x1="${px(-0.8)}" y1="${py(m * -0.8 + q)}" x2="${px(4.6)}" y2="${py(m * 4.6 + q)}" stroke="${C.data}" stroke-width="5" stroke-linecap="round"/>
       <circle cx="${px(0)}" cy="${py(q)}" r="9" fill="${C.gold}"/>${T(px(0) - 22, py(q) + 8, 'q', { size: 24, fill: C.gold, weight: 800 })}
       <path d="M${px(x1)} ${py(y1)} H${px(x2)} V${py(y2)}" fill="none" stroke="${C.ember}" stroke-width="4" stroke-dasharray="9 7"/>
       ${T((px(x1) + px(x2)) / 2, py(y1) + 30, 'Δx = 4', { size: 22, fill: C.ember, weight: 800 })}${T(px(x2) + 12, (py(y1) + py(y2)) / 2 + 8, 'Δy = 3', { size: 22, fill: C.ember, weight: 800, anchor: 'start' })}
       <circle r="9" fill="${C.sakura}"><animateMotion dur="${dur}s" repeatCount="indefinite" path="M${px(x1)} ${py(y1)} H${px(x2)} V${py(y2)} L${px(x1)} ${py(y1)}"/></circle>
       ${T(138, 46, 'y = mx + q', { size: 26, fill: C.data, weight: 800 })}
       ${card(326, 24, 300, 282, C.gold, 0.08)}${T(476, 58, p('FORMULAS', 'FORMULE'), { size: 22, fill: C.gold, weight: 800 })}
       ${T(476, 104, 'm = Δy / Δx', { size: 26, weight: 800 })}
       ${T(476, 144, p('parallel: m₁ = m₂', 'parallele: m₁ = m₂'), { size: 22 })}
       ${T(476, 178, p('perpendicular:', 'perpendicolari:'), { size: 20, fill: C.muted })}${T(476, 204, 'm₁ · m₂ = −1', { size: 24, weight: 800 })}
       ${T(476, 244, 'd = √(Δx² + Δy²)', { size: 24, weight: 800 })}${T(476, 282, p('midpoint: the averages', 'punto medio: le medie'), { size: 20, fill: C.muted })}`,
      '', 330);
  },

  /* The discriminant: how many times a parabola meets the x axis */
  math10QuadraticDelta: lang => {
    const p = t2(lang);
    const dur = 9, ax = 190, k = 86 / 14400, vy = 258;
    const arm = 'M-120 -86 Q0 86 120 -86'; // vertex at (0,0), arms rise by 86 at +-120
    const dx = (dy: number) => Math.sqrt(dy / k);
    const r2 = dx(vy - ax);
    return frame(p('The discriminant Δ', 'Il discriminante Δ'),
      `<line x1="40" y1="${ax}" x2="600" y2="${ax}" stroke="${C.muted}" stroke-width="4"/>${T(600, ax - 12, 'x', { size: 22, fill: C.muted, anchor: 'end' })}
       <g transform="translate(320 ${vy})"><g><path d="${arm}" fill="none" stroke="${C.data}" stroke-width="5" stroke-linecap="round"/>${move('0 0;0 0;0 -58;0 -58;0 -116;0 -116;0 0', dur, 0, '0;.28;.34;.62;.68;.96;1')}</g></g>
       ${showDuring(0.0, 0.3, dur, `<circle cx="${f1(320 - r2)}" cy="${ax}" r="10" fill="${C.gold}"/><circle cx="${f1(320 + r2)}" cy="${ax}" r="10" fill="${C.gold}"/>`)}
       ${showDuring(0.34, 0.64, dur, `<circle cx="320" cy="${ax}" r="10" fill="${C.gold}"/>`)}
       ${showDuring(0.0, 0.3, dur, `${T(320, 318, 'Δ > 0', { size: 34, weight: 800, fill: C.good })}${T(320, 350, p('two roots: crosses twice', 'due radici: taglia due volte'), { size: 22, fill: C.muted })}`)}
       ${showDuring(0.34, 0.64, dur, `${T(320, 318, 'Δ = 0', { size: 34, weight: 800, fill: C.gold })}${T(320, 350, p('one double root: touches', 'una radice doppia: tocca'), { size: 22, fill: C.muted })}`)}
       ${showDuring(0.68, 0.98, dur, `${T(320, 318, 'Δ < 0', { size: 34, weight: 800, fill: C.ember })}${T(320, 350, p('no real roots: floats above', 'nessuna radice reale: sta sopra'), { size: 22, fill: C.muted })}`)}`,
      '', 376);
  },

  /* Viète: sum and product, and a second-degree system */
  math10VieteSystems: lang => {
    const p = t2(lang);
    const dur = 8;
    const line = (i: number, text: string, y: number, size = 26) => showDuring(0.12 + i * 0.2, 0.97, dur, T(476, y, text, { size, weight: 800 }));
    return frame(p('Viète and systems', 'Viète e sistemi'),
      `${card(14, 24, 300, 292, C.data, 0.08)}${T(164, 58, 'VIÈTE', { size: 24, fill: C.data, weight: 800 })}${T(164, 84, p('sum and product of roots', 'somma e prodotto'), { size: 20, fill: C.muted })}
       ${T(164, 130, 'x₁ + x₂ = −b / a', { size: 26, weight: 800 })}${T(164, 170, 'x₁ · x₂ = c / a', { size: 26, weight: 800 })}
       ${T(164, 214, 'x² − 5x + 6 = 0', { size: 24, fill: C.gold, weight: 800 })}
       ${T(164, 248, p('roots 2 and 3', 'radici 2 e 3'), { size: 22 })}${T(164, 284, '2 + 3 = 5 · 2 × 3 = 6', { size: 22, fill: C.good, weight: 800 })}
       ${card(326, 24, 300, 292, C.ember, 0.08)}${T(476, 58, p('SYSTEM', 'SISTEMA'), { size: 24, fill: C.ember, weight: 800 })}${T(476, 84, 'x + y = 3 · x y = 2', { size: 20, fill: C.muted })}
       ${line(0, 'y = 3 − x', 128)}${line(1, 'x (3 − x) = 2', 172)}${line(2, 'x² − 3x + 2 = 0', 216)}${line(3, p('x = 1 or x = 2', 'x = 1 oppure x = 2'), 260, 24)}
       ${T(476, 296, p('solve one unknown, substitute', 'ricava un’incognita, sostituisci'), { size: 20, fill: C.muted })}`,
      '', 330);
  },

  /* Sign of a quadratic: outside or between the roots */
  math10QuadraticSign: lang => {
    const p = t2(lang);
    const dur = 7, ax = 170, k = (250 - 28) / 200 ** 2;
    const x1 = 320 - Math.sqrt((250 - ax) / k), x2 = 320 + Math.sqrt((250 - ax) / k);
    const path = 'M120 28 Q320 472 520 28';
    return frame(p('Sign of a quadratic', 'Segno di un trinomio'),
      `${T(28, 40, 'a > 0', { size: 22, fill: C.muted, anchor: 'start' })}
       <path d="${path}" fill="none" stroke="${C.data}" stroke-width="5" stroke-linecap="round"/>
       <line x1="40" y1="${ax}" x2="${f1(x1)}" y2="${ax}" stroke="${C.good}" stroke-width="10" stroke-linecap="round"/><line x1="${f1(x1)}" y1="${ax}" x2="${f1(x2)}" y2="${ax}" stroke="${C.ember}" stroke-width="10" stroke-linecap="round"/><line x1="${f1(x2)}" y1="${ax}" x2="600" y2="${ax}" stroke="${C.good}" stroke-width="10" stroke-linecap="round"/>
       ${T(100, ax + 40, '+', { size: 40, fill: C.good, weight: 800 })}${T(320, ax + 50, '−', { size: 44, fill: C.ember, weight: 800 })}${T(540, ax + 40, '+', { size: 40, fill: C.good, weight: 800 })}
       <circle cx="${f1(x1)}" cy="${ax}" r="9" fill="${C.gold}"/><circle cx="${f1(x2)}" cy="${ax}" r="9" fill="${C.gold}"/>${T(x1 - 26, ax - 18, 'x₁', { size: 24, weight: 800 })}${T(x2 + 26, ax - 18, 'x₂', { size: 24, weight: 800 })}
       <circle r="11" fill="${C.sakura}"><animateMotion dur="${dur}s" repeatCount="indefinite" path="${path}"/></circle>
       ${T(320, 306, p('> 0  →  outside the roots', '> 0  →  fuori dalle radici'), { size: 26, fill: C.good, weight: 800 })}
       ${T(320, 342, p('< 0  →  between the roots', '< 0  →  tra le radici'), { size: 26, fill: C.ember, weight: 800 })}`,
      '', 366);
  },

  /* Right triangle: Pythagoras and the two Euclid theorems */
  math10EuclidPythagoras: lang => {
    const p = t2(lang);
    const A = [120, 214], B = [520, 214], H = [220, 214], Cc = [220, 40.8];
    return frame(p('Right triangles', 'Triangoli rettangoli'),
      `<polygon points="${A} ${B} ${Cc}" fill="${C.data}" fill-opacity="0.12" stroke="${C.data}" stroke-width="5" stroke-linejoin="round"/>
       <line x1="${H[0]}" y1="${H[1]}" x2="${Cc[0]}" y2="${H[1]}" stroke="${C.gold}" stroke-width="5" stroke-dasharray="10 6"><animate attributeName="y2" values="${H[1]};${Cc[1]};${Cc[1]};${H[1]}" keyTimes="0;.4;.9;1" dur="5s" repeatCount="indefinite"/></line>
       <path d="M${f1(Cc[0] - 11)} ${f1(Cc[1] + 19)} L${f1(Cc[0] + 8)} ${f1(Cc[1] + 30)} L${f1(Cc[0] + 19)} ${f1(Cc[1] + 11)}" fill="none" stroke="${C.muted}" stroke-width="3"/>
       <rect x="${H[0] - 14}" y="${H[1] - 14}" width="14" height="14" fill="none" stroke="${C.muted}" stroke-width="3"/>
       ${T(150, 118, 'b', { size: 28, fill: C.data, weight: 800 })}${T(398, 118, 'c', { size: 28, fill: C.data, weight: 800 })}${T(244, 132, 'h', { size: 28, fill: C.gold, weight: 800, anchor: 'start' })}
       <path d="M${A[0]} 232 H${H[0]}" stroke="${C.good}" stroke-width="5"/><path d="M${H[0]} 232 H${B[0]}" stroke="${C.ember}" stroke-width="5"/>
       ${T(170, 262, 'p₁', { size: 24, fill: C.good, weight: 800 })}${T(370, 262, 'p₂', { size: 24, fill: C.ember, weight: 800 })}${T(560, 262, 'a = p₁ + p₂', { size: 22, fill: C.muted, anchor: 'end' })}
       ${T(110, 306, 'a² = b² + c²', { size: 24, weight: 800 })}${T(320, 306, 'b² = a · p₁', { size: 24, weight: 800 })}${T(530, 306, 'h² = p₁ · p₂', { size: 24, weight: 800 })}
       ${T(110, 332, p('Pythagoras', 'Pitagora'), { size: 20, fill: C.muted })}${T(320, 332, p('Euclid 1', '1° Euclide'), { size: 20, fill: C.muted })}${T(530, 332, p('Euclid 2', '2° Euclide'), { size: 20, fill: C.muted })}`,
      '', 356);
  },

  /* Thales' theorem and the angle at the centre */
  math10ThalesCircle: lang => {
    const p = t2(lang);
    const dur = 8;
    const V = [165, 44], rayX = (y: number, s: number) => V[0] + s * 115 * ((y - V[1]) / 170);
    const lineAt = (y: number) => `<line x1="${f1(rayX(y, -1))}" y1="${y}" x2="${f1(rayX(y, 1))}" y2="${y}" stroke="${C.gold}" stroke-width="4"/>`;
    const dotsAt = (y: number, a: string, b: string) => `<circle cx="${f1(rayX(y, -1))}" cy="${y}" r="7" fill="${C.ember}"/><circle cx="${f1(rayX(y, 1))}" cy="${y}" r="7" fill="${C.ember}"/>${T(rayX(y, -1) - 20, y + 7, a, { size: 20, weight: 800 })}${T(rayX(y, 1) + 22, y + 7, b, { size: 20, weight: 800 })}`;
    // moving middle line between y = 120 and y = 170
    const yA = 120, yB = 172;
    const xl = (y: number) => f1(rayX(y, -1)), xr = (y: number) => f1(rayX(y, 1));
    const mid = `<line y1="${yA}" y2="${yA}" stroke="${C.gold}" stroke-width="4"><animate attributeName="x1" values="${xl(yA)};${xl(yB)};${xl(yA)}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="x2" values="${xr(yA)};${xr(yB)};${xr(yA)}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="y1" values="${yA};${yB};${yA}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="y2" values="${yA};${yB};${yA}" dur="${dur}s" repeatCount="indefinite"/></line>
      <circle r="8" fill="${C.sakura}"><animate attributeName="cx" values="${xl(yA)};${xl(yB)};${xl(yA)}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="cy" values="${yA};${yB};${yA}" dur="${dur}s" repeatCount="indefinite"/></circle>
      <circle r="8" fill="${C.sakura}"><animate attributeName="cx" values="${xr(yA)};${xr(yB)};${xr(yA)}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="cy" values="${yA};${yB};${yA}" dur="${dur}s" repeatCount="indefinite"/></circle>`;
    // circle with the angle at the centre and a moving point on the circumference
    const O = [476, 140], R = 78, ang = (d: number) => [O[0] + R * Math.cos((d * Math.PI) / 180), O[1] - R * Math.sin((d * Math.PI) / 180)];
    const Ap = ang(210), Bp = ang(330);
    const samples = [10, 45, 90, 135, 180, 135, 90, 45, 10].map(d => ang(d));
    const ls = (i: number) => samples.map(s => f1(s[i])).join(';');
    return frame(p('Thales and circles', 'Talete e circonferenza'),
      `${card(14, 24, 300, 290, C.gold, 0.08)}${T(164, 56, 'THALES', { size: 22, fill: C.gold, weight: 800 })}
       <line x1="${V[0]}" y1="${V[1]}" x2="${f1(rayX(212, -1))}" y2="212" stroke="${C.data}" stroke-width="4"/><line x1="${V[0]}" y1="${V[1]}" x2="${f1(rayX(212, 1))}" y2="212" stroke="${C.data}" stroke-width="4"/>
       ${lineAt(212)}${dotsAt(212, 'C', 'C′')}${mid}${T(rayX(100, -1) - 18, 100, 'A', { size: 20, weight: 800 })}${T(rayX(100, 1) + 22, 100, 'A′', { size: 20, weight: 800 })}
       ${T(164, 258, 'AB : BC = A′B′ : B′C′', { size: 20, weight: 800 })}${T(164, 292, p('parallel lines, proportional parts', 'parallele: parti proporzionali'), { size: 20, fill: C.muted })}
       ${card(326, 24, 300, 290, C.data, 0.08)}${T(476, 56, p('CIRCLE', 'CIRCONFERENZA'), { size: 22, fill: C.data, weight: 800 })}
       <circle cx="${O[0]}" cy="${O[1]}" r="${R}" fill="none" stroke="${C.data}" stroke-width="4"/>
       <line x1="${O[0]}" y1="${O[1]}" x2="${f1(Ap[0])}" y2="${f1(Ap[1])}" stroke="${C.ember}" stroke-width="4"/><line x1="${O[0]}" y1="${O[1]}" x2="${f1(Bp[0])}" y2="${f1(Bp[1])}" stroke="${C.ember}" stroke-width="4"/>
       <line x1="${f1(samples[0][0])}" y1="${f1(samples[0][1])}" x2="${f1(Ap[0])}" y2="${f1(Ap[1])}" stroke="${C.good}" stroke-width="4"><animate attributeName="x1" values="${ls(0)}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="y1" values="${ls(1)}" dur="${dur}s" repeatCount="indefinite"/></line>
       <line x1="${f1(samples[0][0])}" y1="${f1(samples[0][1])}" x2="${f1(Bp[0])}" y2="${f1(Bp[1])}" stroke="${C.good}" stroke-width="4"><animate attributeName="x1" values="${ls(0)}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="y1" values="${ls(1)}" dur="${dur}s" repeatCount="indefinite"/></line>
       <circle r="9" fill="${C.sakura}"><animate attributeName="cx" values="${ls(0)}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="cy" values="${ls(1)}" dur="${dur}s" repeatCount="indefinite"/></circle>
       ${T(O[0], O[1] + 30, '2α', { size: 24, fill: C.ember, weight: 800 })}${T(O[0], 106 - 0, 'α', { size: 24, fill: C.good, weight: 800 })}
       ${T(476, 258, p('central angle = 2 × α', 'angolo al centro = 2 × α'), { size: 20, weight: 800 })}${T(476, 292, p('the same α from any point', 'lo stesso α da ogni punto'), { size: 20, fill: C.muted })}`,
      '', 330);
  },

  /* Classical probability */
  math10Probability: lang => {
    const p = t2(lang);
    const dur = 8;
    const dots = Array.from({ length: 10 }, (_, i) => {
      const cx = 160 + (i % 5) * 80, cy = 74 + Math.floor(i / 5) * 56, fav = i < 3;
      return `<circle cx="${cx}" cy="${cy}" r="20" fill="${fav ? C.gold : C.muted}" fill-opacity="${fav ? 1 : 0.35}" stroke="${fav ? C.gold : C.line}" stroke-width="3"/>`;
    }).join('');
    const xs = Array.from({ length: 10 }, (_, i) => 160 + (i % 5) * 80), ys = Array.from({ length: 10 }, (_, i) => 74 + Math.floor(i / 5) * 56);
    const pick10 = [4, 7, 1, 9, 2, 5, 0, 8, 3, 6, 4];
    return frame(p('Classical probability', 'Probabilità classica'),
      `${dots}
       <circle r="26" fill="none" stroke="${C.sakura}" stroke-width="5"><animate attributeName="cx" values="${pick10.map(i => xs[i]).join(';')}" dur="${dur}s" calcMode="discrete" repeatCount="indefinite"/><animate attributeName="cy" values="${pick10.map(i => ys[i]).join(';')}" dur="${dur}s" calcMode="discrete" repeatCount="indefinite"/></circle>
       ${T(320, 178, 'P(E) = f / n = 3 / 10', { size: 30, weight: 800 })}${T(320, 206, p('favourable ÷ possible (equally likely)', 'favorevoli ÷ possibili (equiprobabili)'), { size: 20, fill: C.muted })}
       <rect x="70" y="228" width="500" height="22" rx="11" fill="${C.panel}" stroke="${C.line}" stroke-width="3"/><rect x="70" y="228" height="22" rx="11" fill="${C.gold}"><animate attributeName="width" values="0;150;150;0" keyTimes="0;.3;.9;1" dur="${dur}s" repeatCount="indefinite"/></rect>
       ${T(70, 276, '0', { size: 22, anchor: 'start', weight: 800 })}${T(570, 276, '1', { size: 22, anchor: 'end', weight: 800 })}${T(220, 276, '0.3', { size: 22, fill: C.gold, weight: 800 })}
       ${T(320, 312, 'P(Ē) = 1 − P(E) = 0.7', { size: 26, weight: 800, fill: C.good })}
       ${T(320, 346, 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)', { size: 22, weight: 800 })}`,
      '', 372);
  }
};
