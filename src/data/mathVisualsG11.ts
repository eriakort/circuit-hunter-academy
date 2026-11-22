import type { Language } from '../types';
import { C, T, move, frame, pick, showDuring, card } from './sciViz';

/**
 * Italian Grade 11 Maths diagrams, redrawn large with motion that shows the idea. Keys are unchanged
 * so the lessons keep working. Each diagram is fully in the chosen language. A teacher should still
 * skim the wording against the course text.
 */
type Builder = (lang: Language) => string;
const t2 = (lang: Language) => (en: string, it: string) => pick(lang, en, it);
const col3 = (i: number) => 20 + i * 207;
const f1 = (n: number) => n.toFixed(1);
const vals = (a: number[]) => a.map(f1).join(';');

export const MATH11_BUILDERS: Record<string, Builder> = {
  /* Functions: domain rules, even/odd symmetry, inverse */
  math11Functions: lang => {
    const p = t2(lang);
    const dur = 6;
    const cx2 = col3(1) + 100, cx3 = col3(2) + 100;
    // even function: y = x^2, two points mirror each other
    const ts = [-50, -30, -10, 10, 30, 50, 30, 10, -10, -30, -50];
    const yE = (x: number) => 190 - (x * x) / 60 * 1.0;
    const even = `<line x1="${cx2 - 70}" y1="190" x2="${cx2 + 70}" y2="190" stroke="${C.muted}" stroke-width="3"/><line x1="${cx2}" y1="190" x2="${cx2}" y2="104" stroke="${C.muted}" stroke-width="3"/>
      <path d="M${cx2 - 56} ${f1(yE(-56))} Q${cx2} ${f1(190 + (190 - yE(56)))} ${cx2 + 56} ${f1(yE(56))}" fill="none" stroke="${C.data}" stroke-width="4"/>
      <circle r="8" fill="${C.sakura}"><animate attributeName="cx" values="${vals(ts.map(x => cx2 + x))}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="cy" values="${vals(ts.map(yE))}" dur="${dur}s" repeatCount="indefinite"/></circle>
      <circle r="8" fill="${C.gold}"><animate attributeName="cx" values="${vals(ts.map(x => cx2 - x))}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="cy" values="${vals(ts.map(yE))}" dur="${dur}s" repeatCount="indefinite"/></circle>`;
    // inverse: y = x^2 and y = sqrt(x) are mirror images in y = x
    const ox = cx3 - 56, oy = 196, S = 112;
    const tt = [0.1, 0.3, 0.5, 0.7, 0.9, 0.7, 0.5, 0.3, 0.1];
    const inv = `<line x1="${ox}" y1="${oy}" x2="${ox + S + 8}" y2="${oy}" stroke="${C.muted}" stroke-width="3"/><line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - S - 8}" stroke="${C.muted}" stroke-width="3"/>
      <line x1="${ox}" y1="${oy}" x2="${ox + S}" y2="${oy - S}" stroke="${C.gold}" stroke-width="3" stroke-dasharray="8 6"/>
      <path d="M${ox} ${oy} Q${ox + S / 2} ${oy} ${ox + S} ${oy - S}" fill="none" stroke="${C.data}" stroke-width="4"/><path d="M${ox} ${oy} Q${ox} ${oy - S / 2} ${ox + S} ${oy - S}" fill="none" stroke="${C.ember}" stroke-width="4"/>
      <circle r="8" fill="${C.data}"><animate attributeName="cx" values="${vals(tt.map(t => ox + S * t))}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="cy" values="${vals(tt.map(t => oy - S * t * t))}" dur="${dur}s" repeatCount="indefinite"/></circle>
      <circle r="8" fill="${C.ember}"><animate attributeName="cx" values="${vals(tt.map(t => ox + S * t * t))}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="cy" values="${vals(tt.map(t => oy - S * t))}" dur="${dur}s" repeatCount="indefinite"/></circle>`;
    return frame(p('Functions', 'Funzioni'),
      `${card(col3(0), 24, 200, 290, C.good, 0.08)}${T(col3(0) + 100, 58, p('DOMAIN', 'DOMINIO'), { size: 24, fill: C.good, weight: 800 })}
       ${T(col3(0) + 100, 112, '1 / A', { size: 26, weight: 800 })}${T(col3(0) + 100, 142, 'A ≠ 0', { size: 24, fill: C.good, weight: 800 })}
       ${T(col3(0) + 100, 188, '√A', { size: 26, weight: 800 })}${T(col3(0) + 100, 218, 'A ≥ 0', { size: 24, fill: C.good, weight: 800 })}
       ${T(col3(0) + 100, 264, 'log A', { size: 26, weight: 800 })}${T(col3(0) + 100, 294, 'A > 0', { size: 24, fill: C.good, weight: 800 })}
       ${card(col3(1), 24, 200, 290, C.data, 0.08)}${T(cx2, 58, p('EVEN / ODD', 'PARI / DISPARI'), { size: 22, fill: C.data, weight: 800 })}${even}
       ${T(cx2, 238, p('even: f(−x) = f(x)', 'pari: f(−x) = f(x)'), { size: 20, weight: 800 })}${T(cx2, 268, p('odd: f(−x) = −f(x)', 'dispari: f(−x) = −f(x)'), { size: 18, fill: C.muted })}${T(cx2, 298, p('y-axis / origin', 'asse y / origine'), { size: 18, fill: C.muted })}
       ${card(col3(2), 24, 200, 290, C.ember, 0.08)}${T(cx3, 58, p('INVERSE', 'INVERSA'), { size: 24, fill: C.ember, weight: 800 })}${inv}
       ${T(cx3, 244, p('mirror in y = x', 'specchio in y = x'), { size: 22, weight: 800 })}${T(cx3, 276, p('needs one-to-one', 'serve biiettiva'), { size: 20, fill: C.muted })}`,
      '', 330);
  },

  /* Absolute value as a distance, and a sign table */
  math11AbsSign: lang => {
    const p = t2(lang);
    const dur = 8;
    const x = (v: number) => 320 + (v - 2) * 55;
    const ticks = Array.from({ length: 9 }, (_, i) => `<line x1="${x(i - 2)}" y1="86" x2="${x(i - 2)}" y2="104" stroke="${C.muted}" stroke-width="4"/>${T(x(i - 2), 132, (i - 2 < 0 ? '−' : '') + Math.abs(i - 2), { size: 20, fill: C.muted })}`).join('');
    const colsX = [100, 200, 320, 440, 540];
    const rows: Array<[string, string[], string]> = [['N', ['−', '−', '−', '0', '+'], C.data], ['D', ['−', '0', '+', '+', '+'], C.gold], ['N/D', ['+', '×', '−', '0', '+'], C.good]];
    const head = ['<1', '1', '1…3', '3', '>3'];
    const table = `${head.map((h, i) => T(colsX[i], 220, h, { size: 20, fill: C.muted })).join('')}${rows.map(([name, v, color], r) => `${T(34, 258 + r * 38, name, { size: 22, fill: color, weight: 800, anchor: 'start' })}${v.map((c, i) => T(colsX[i], 258 + r * 38, c, { size: 26, weight: 800, fill: c === '×' ? C.ember : r === 2 ? color : C.text })).join('')}`).join('')}`;
    const hiCols = colsX.map((cx, i) => showDuring(i / 5, (i + 1) / 5 - 0.02, dur, `<rect x="${cx - 40}" y="198" width="80" height="136" rx="12" fill="none" stroke="${C.gold}" stroke-width="4"/>`)).join('');
    return frame(p('Absolute value and signs', 'Valore assoluto e segni'),
      `${T(320, 40, '|x − 2| < 3', { size: 32, weight: 800 })}
       <line x1="${x(-2) - 30}" y1="95" x2="${x(6) + 30}" y2="95" stroke="${C.muted}" stroke-width="5" stroke-linecap="round"/>${ticks}
       <rect y="84" height="22" rx="8" fill="${C.good}" fill-opacity="0.5"><animate attributeName="x" values="${x(2)};${x(-1)};${x(-1)};${x(2)}" keyTimes="0;.4;.9;1" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="width" values="0;${6 * 55};${6 * 55};0" keyTimes="0;.4;.9;1" dur="${dur}s" repeatCount="indefinite"/></rect>
       <circle cx="${x(2)}" cy="95" r="9" fill="${C.gold}"/><circle cx="${x(-1)}" cy="95" r="8" fill="${C.panel2}" stroke="${C.good}" stroke-width="4"/><circle cx="${x(5)}" cy="95" r="8" fill="${C.panel2}" stroke="${C.good}" stroke-width="4"/>
       ${T(320, 168, p('distance from 2 is less than 3:  −1 < x < 5', 'distanza da 2 minore di 3:  −1 < x < 5'), { size: 22, fill: C.good, weight: 800 })}
       ${T(320, 198, '(x − 3) / (x − 1) ≥ 0', { size: 22, fill: C.muted })}
       ${table}${hiCols}
       ${T(320, 362, p('x < 1  or  x ≥ 3  ·  never drop D ≠ 0', 'x < 1  oppure  x ≥ 3  ·  mai perdere D ≠ 0'), { size: 22, fill: C.gold, weight: 800 })}`,
      '', 390);
  },

  /* Irrational equations and inequalities */
  math11Irrational: lang => {
    const p = t2(lang);
    const dur = 8;
    const row = (i: number, expr: string, note: string) => {
      const y = 50 + i * 64;
      return `${card(16, y, 608, 54, C.data, 0.08)}<circle cx="46" cy="${y + 27}" r="16" fill="${C.data}"/>${T(46, y + 34, String(i + 1), { size: 20, weight: 800, fill: '#1b1b1b', extra: 'style="stroke:none"' })}
        ${T(78, y + 36, expr, { size: 26, weight: 800, anchor: 'start' })}${T(548, y + 35, note, { size: 20, fill: C.muted, anchor: 'end' })}
        ${showDuring(0.1 + i * 0.18, 0.97, dur, `<path d="M${560} ${y + 28} l10 10 l20 -24" fill="none" stroke="${C.good}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`)}`;
    };
    return frame(p('Irrational equations', 'Equazioni irrazionali'),
      `${T(320, 34, '√A(x) = B(x)', { size: 28, weight: 800, fill: C.data })}
       ${row(0, 'A ≥ 0', p('the root exists', 'la radice esiste'))}${row(1, 'B ≥ 0', p('right side not negative', 'secondo membro non negativo'))}${row(2, 'A = B²', p('then square', 'poi eleva al quadrato'))}
       ${showDuring(0.7, 0.98, dur, `${card(16, 250, 608, 62, C.ember, 0.14)}${T(320, 288, '√x = −3 → ' + p('no solution', 'nessuna soluzione'), { size: 28, weight: 800, fill: C.ember })}`)}
       ${T(320, 346, '√A < B  →  A ≥ 0, B > 0, A < B²', { size: 22, weight: 800 })}
       ${T(320, 380, p('√A > B  →  B < 0 (A ≥ 0)  or  A > B²', '√A > B  →  B < 0 (A ≥ 0)  oppure  A > B²'), { size: 22, weight: 800 })}`,
      '', 406);
  },

  /* Parabola (focus and directrix) and circle */
  math11ParabolaCircle: lang => {
    const p = t2(lang);
    const dur = 8;
    const cx = 164, vy = 196, pp = 30; // vertex, focal distance
    const yP = (x: number) => vy - (x * x) / (4 * pp);
    const xs = [-64, -32, 0, 32, 64, 32, 0, -32, -64];
    const F = [cx, vy - pp], dirY = vy + pp;
    const lineFor = (tx: (x: number) => number, ty: (x: number) => number) => ({ x: vals(xs.map(tx)), y: vals(xs.map(ty)) });
    const px = lineFor(x => cx + x, yP);
    const par = `<path d="M${cx - 70} ${f1(yP(-70))} Q${cx} ${f1(vy + (vy - yP(70)))} ${cx + 70} ${f1(yP(70))}" fill="none" stroke="${C.data}" stroke-width="5" stroke-linecap="round"/>
      <line x1="30" y1="${dirY}" x2="298" y2="${dirY}" stroke="${C.gold}" stroke-width="4" stroke-dasharray="10 7"/>
      <circle cx="${F[0]}" cy="${F[1]}" r="9" fill="${C.ember}"/>${T(F[0] + 20, F[1] + 4, 'F', { size: 22, fill: C.ember, weight: 800, anchor: 'start' })}${T(266, dirY + 24, 'd', { size: 22, fill: C.gold, weight: 800 })}
      <line x1="${F[0]}" y1="${F[1]}" x2="${cx}" y2="${yP(0)}" stroke="${C.good}" stroke-width="4"><animate attributeName="x2" values="${px.x}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="y2" values="${px.y}" dur="${dur}s" repeatCount="indefinite"/></line>
      <line x1="${cx}" y1="${dirY}" x2="${cx}" y2="${yP(0)}" stroke="${C.good}" stroke-width="4"><animate attributeName="x1" values="${px.x}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="x2" values="${px.x}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="y2" values="${px.y}" dur="${dur}s" repeatCount="indefinite"/></line>
      <circle r="9" fill="${C.sakura}"><animate attributeName="cx" values="${px.x}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="cy" values="${px.y}" dur="${dur}s" repeatCount="indefinite"/></circle>`;
    const O = [476, 140], R = 66, angs = Array.from({ length: 13 }, (_, i) => (i * 30 * Math.PI) / 180);
    const cir = `<circle cx="${O[0]}" cy="${O[1]}" r="${R}" fill="none" stroke="${C.data}" stroke-width="5"/><circle cx="${O[0]}" cy="${O[1]}" r="7" fill="${C.ember}"/>${T(O[0] - 4, O[1] + 30, 'C', { size: 22, fill: C.ember, weight: 800 })}
      <line x1="${O[0]}" y1="${O[1]}" x2="${f1(O[0] + R)}" y2="${O[1]}" stroke="${C.good}" stroke-width="4"><animate attributeName="x2" values="${vals(angs.map(a => O[0] + R * Math.cos(a)))}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="y2" values="${vals(angs.map(a => O[1] - R * Math.sin(a)))}" dur="${dur}s" repeatCount="indefinite"/></line>
      <circle r="9" fill="${C.sakura}"><animate attributeName="cx" values="${vals(angs.map(a => O[0] + R * Math.cos(a)))}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="cy" values="${vals(angs.map(a => O[1] - R * Math.sin(a)))}" dur="${dur}s" repeatCount="indefinite"/></circle>`;
    return frame(p('Parabola and circle', 'Parabola e circonferenza'),
      `${card(14, 24, 300, 292, C.data, 0.08)}${T(164, 56, p('PARABOLA', 'PARABOLA'), { size: 22, fill: C.data, weight: 800 })}${par}
       ${T(164, 262, 'PF = Pd', { size: 24, weight: 800 })}${T(164, 292, 'V (−b/2a, −Δ/4a)', { size: 20, fill: C.muted })}
       ${card(326, 24, 300, 292, C.ember, 0.08)}${T(476, 56, p('CIRCLE', 'CIRCONFERENZA'), { size: 22, fill: C.ember, weight: 800 })}${cir}
       ${T(476, 236, 'C (−a/2, −b/2)', { size: 22, weight: 800 })}${T(476, 266, 'r = √(x₀² + y₀² − c)', { size: 20, fill: C.muted })}${T(476, 296, p('real if the radicand ≥ 0', 'reale se il radicando ≥ 0'), { size: 20, fill: C.muted })}`,
      '', 330);
  },

  /* Ellipse and hyperbola: sums and differences of distances */
  math11EllipseHyperbola: lang => {
    const p = t2(lang);
    const dur = 9;
    const E = [164, 140], ea = 100, eb = 60, ec = Math.sqrt(ea * ea - eb * eb);
    const ang = Array.from({ length: 17 }, (_, i) => (i * 22.5 * Math.PI) / 180);
    const ex = ang.map(a => E[0] + ea * Math.cos(a)), ey = ang.map(a => E[1] + eb * Math.sin(a));
    const f1p = [E[0] - ec, E[1]], f2p = [E[0] + ec, E[1]];
    const ell = `<ellipse cx="${E[0]}" cy="${E[1]}" rx="${ea}" ry="${eb}" fill="none" stroke="${C.data}" stroke-width="5"/>
      <circle cx="${f1p[0]}" cy="${f1p[1]}" r="7" fill="${C.ember}"/><circle cx="${f2p[0]}" cy="${f2p[1]}" r="7" fill="${C.ember}"/>
      <line x1="${f1p[0]}" y1="${f1p[1]}" stroke="${C.good}" stroke-width="4"><animate attributeName="x2" values="${vals(ex)}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="y2" values="${vals(ey)}" dur="${dur}s" repeatCount="indefinite"/></line>
      <line x1="${f2p[0]}" y1="${f2p[1]}" stroke="${C.gold}" stroke-width="4"><animate attributeName="x2" values="${vals(ex)}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="y2" values="${vals(ey)}" dur="${dur}s" repeatCount="indefinite"/></line>
      <circle r="9" fill="${C.sakura}"><animate attributeName="cx" values="${vals(ex)}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="cy" values="${vals(ey)}" dur="${dur}s" repeatCount="indefinite"/></circle>`;
    const H = [476, 140], ha = 38, hb = 56, hc = Math.sqrt(ha * ha + hb * hb);
    const us = [-1.1, -0.8, -0.5, -0.2, 0.2, 0.5, 0.8, 1.1, 0.8, 0.5, 0.2, -0.2, -0.5, -0.8, -1.1];
    const hx = us.map(u => H[0] + ha * Math.cosh(u)), hy = us.map(u => H[1] - hb * Math.sinh(u));
    const branch = (sgn: number) => { const pts = Array.from({ length: 13 }, (_, i) => { const u = -1.2 + i * 0.2; return `${f1(H[0] + sgn * ha * Math.cosh(u))},${f1(H[1] - hb * Math.sinh(u))}`; }); return `<polyline points="${pts.join(' ')}" fill="none" stroke="${C.data}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`; };
    const hyp = `${branch(1)}${branch(-1)}
      <line x1="${H[0] - 90}" y1="${H[1] + (90 * hb) / ha / 2.4}" x2="${H[0] + 90}" y2="${H[1] - (90 * hb) / ha / 2.4}" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 6"/><line x1="${H[0] - 90}" y1="${H[1] - (90 * hb) / ha / 2.4}" x2="${H[0] + 90}" y2="${H[1] + (90 * hb) / ha / 2.4}" stroke="${C.muted}" stroke-width="2" stroke-dasharray="6 6"/>
      <circle cx="${f1(H[0] - hc)}" cy="${H[1]}" r="7" fill="${C.ember}"/><circle cx="${f1(H[0] + hc)}" cy="${H[1]}" r="7" fill="${C.ember}"/>
      <line x1="${f1(H[0] - hc)}" y1="${H[1]}" stroke="${C.good}" stroke-width="4"><animate attributeName="x2" values="${vals(hx)}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="y2" values="${vals(hy)}" dur="${dur}s" repeatCount="indefinite"/></line>
      <line x1="${f1(H[0] + hc)}" y1="${H[1]}" stroke="${C.gold}" stroke-width="4"><animate attributeName="x2" values="${vals(hx)}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="y2" values="${vals(hy)}" dur="${dur}s" repeatCount="indefinite"/></line>
      <circle r="9" fill="${C.sakura}"><animate attributeName="cx" values="${vals(hx)}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="cy" values="${vals(hy)}" dur="${dur}s" repeatCount="indefinite"/></circle>`;
    return frame(p('Ellipse and hyperbola', 'Ellisse e iperbole'),
      `${card(14, 24, 300, 292, C.data, 0.08)}${T(164, 56, p('ELLIPSE · e < 1', 'ELLISSE · e < 1'), { size: 22, fill: C.data, weight: 800 })}${ell}
       ${T(164, 236, 'PF₁ + PF₂ = 2a', { size: 24, weight: 800 })}${T(164, 270, 'x²/a² + y²/b² = 1', { size: 22, fill: C.muted })}${T(164, 300, p('sum of distances is fixed', 'somma delle distanze fissa'), { size: 20, fill: C.muted })}
       ${card(326, 24, 300, 292, C.ember, 0.08)}${T(476, 56, p('HYPERBOLA · e > 1', 'IPERBOLE · e > 1'), { size: 22, fill: C.ember, weight: 800 })}${hyp}
       ${T(476, 236, '|PF₁ − PF₂| = 2a', { size: 24, weight: 800 })}${T(476, 270, 'x²/a² − y²/b² = 1', { size: 22, fill: C.muted })}${T(476, 300, p('difference is fixed', 'differenza fissa'), { size: 20, fill: C.muted })}`,
      '', 330);
  },

  /* A line meeting a circle, and how to recognise a conic */
  math11ConicsTangent: lang => {
    const p = t2(lang);
    const dur = 9, O = [320, 106], R = 66;
    const bottom = O[1] + R; // 172
    const yEx = bottom + 36, yTan = bottom, ySec = bottom - 40;
    const chord = Math.sqrt(R * R - 26 * 26);
    const chip = (i: number, color: string, text: string) => { const x = 16 + (i % 2) * 308, y = 302 + Math.floor(i / 2) * 56; return `${card(x, y, 300, 46, color, 0.08)}${T(x + 150, y + 31, text, { size: 20, weight: 700 })}`; };
    return frame(p('Line and circle, conic shapes', 'Retta e circonferenza, coniche'),
      `<circle cx="${O[0]}" cy="${O[1]}" r="${R}" fill="${C.data}" fill-opacity="0.12" stroke="${C.data}" stroke-width="5"/>
       <g><line x1="100" y1="${yEx}" x2="540" y2="${yEx}" stroke="${C.gold}" stroke-width="5" stroke-linecap="round"/>${move(`0 0;0 0;0 ${yTan - yEx};0 ${yTan - yEx};0 ${ySec - yEx};0 ${ySec - yEx};0 0`, dur, 0, '0;.2;.3;.52;.62;.94;1')}</g>
       ${showDuring(0.34, 0.54, dur, `<circle cx="${O[0]}" cy="${yTan}" r="9" fill="${C.ember}"/>`)}${showDuring(0.64, 0.96, dur, `<circle cx="${f1(O[0] - chord)}" cy="${ySec}" r="9" fill="${C.ember}"/><circle cx="${f1(O[0] + chord)}" cy="${ySec}" r="9" fill="${C.ember}"/>`)}
       ${showDuring(0.0, 0.3, dur, T(320, 262, 'Δ < 0 · ' + p('external', 'esterna'), { size: 28, weight: 800, fill: C.muted }))}${showDuring(0.34, 0.6, dur, T(320, 262, 'Δ = 0 · ' + p('tangent', 'tangente'), { size: 28, weight: 800, fill: C.gold }))}${showDuring(0.64, 0.98, dur, T(320, 262, 'Δ > 0 · ' + p('secant', 'secante'), { size: 28, weight: 800, fill: C.good }))}
       ${chip(0, C.data, p('Circle: x² + y², A = B', 'Circonferenza: A = B'))}${chip(1, C.good, p('Parabola: one square only', 'Parabola: un solo quadrato'))}${chip(2, C.gold, p('Ellipse: + sign, A ≠ B', 'Ellisse: segno +, A ≠ B'))}${chip(3, C.ember, p('Hyperbola: − sign', 'Iperbole: segno −'))}`,
      '', 420);
  },

  /* Exponentials and logarithms are mirror images */
  math11ExpLog: lang => {
    const p = t2(lang);
    const dur = 8, ox = 100, oy = 170, u = 36;
    const px = (x: number) => ox + u * x, py = (y: number) => oy - u * y;
    const expPts = Array.from({ length: 20 }, (_, i) => { const x = -2 + (i * 4) / 19; return `${f1(px(x))},${f1(py(2 ** x))}`; }).filter((_, i, arr) => i < arr.length);
    const logPts = Array.from({ length: 20 }, (_, i) => { const x = -2 + (i * 4) / 19; return `${f1(px(2 ** x))},${f1(py(x))}`; });
    const ts = [-1.5, -1, -0.5, 0, 0.5, 1, 1.5, 1.9, 1.5, 1, 0.5, 0, -0.5, -1, -1.5];
    const P = { x: ts.map(t => px(t)), y: ts.map(t => py(2 ** t)) }, Q = { x: ts.map(t => px(2 ** t)), y: ts.map(t => py(t)) };
    return frame(p('Exponential and logarithm', 'Esponenziale e logaritmo'),
      `<line x1="24" y1="${oy}" x2="262" y2="${oy}" stroke="${C.muted}" stroke-width="3"/><line x1="${ox}" y1="26" x2="${ox}" y2="260" stroke="${C.muted}" stroke-width="3"/>
       <line x1="${px(-2)}" y1="${py(-2)}" x2="${px(4)}" y2="${py(4)}" stroke="${C.gold}" stroke-width="3" stroke-dasharray="8 6"/>
       <polyline points="${expPts.join(' ')}" fill="none" stroke="${C.data}" stroke-width="5" stroke-linecap="round"/><polyline points="${logPts.join(' ')}" fill="none" stroke="${C.ember}" stroke-width="5" stroke-linecap="round"/>
       <circle cx="${px(0)}" cy="${py(1)}" r="7" fill="${C.data}"/><circle cx="${px(1)}" cy="${py(0)}" r="7" fill="${C.ember}"/>
       <line stroke="${C.sakura}" stroke-width="3" stroke-dasharray="5 5"><animate attributeName="x1" values="${vals(P.x)}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="y1" values="${vals(P.y)}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="x2" values="${vals(Q.x)}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="y2" values="${vals(Q.y)}" dur="${dur}s" repeatCount="indefinite"/></line>
       <circle r="8" fill="${C.data}"><animate attributeName="cx" values="${vals(P.x)}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="cy" values="${vals(P.y)}" dur="${dur}s" repeatCount="indefinite"/></circle><circle r="8" fill="${C.ember}"><animate attributeName="cx" values="${vals(Q.x)}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="cy" values="${vals(Q.y)}" dur="${dur}s" repeatCount="indefinite"/></circle>
       ${T(36, 52, 'aˣ', { size: 24, fill: C.data, weight: 800, anchor: 'start' })}${T(262, 252, 'logₐ x', { size: 22, fill: C.ember, weight: 800, anchor: 'end' })}
       ${card(300, 24, 326, 292, C.gold, 0.08)}${T(463, 58, 'aˣ = b  ⇔  x = logₐ b', { size: 22, weight: 800 })}
       ${T(463, 108, 'log(xy) = log x + log y', { size: 21 })}${T(463, 146, 'log(x/y) = log x − log y', { size: 21 })}${T(463, 184, 'log(xⁿ) = n · log x', { size: 21 })}
       ${T(463, 232, p('a > 0, a ≠ 1 · argument > 0', 'a > 0, a ≠ 1 · argomento > 0'), { size: 20, fill: C.muted })}${T(463, 270, p('if 0 < a < 1, flip the sign', 'se 0 < a < 1, inverti il verso'), { size: 20, fill: C.ember })}${T(463, 300, p('mirror images in y = x', 'simmetriche rispetto a y = x'), { size: 20, fill: C.muted })}`,
      '', 330);
  },

  /* The unit circle */
  math11UnitCircle: lang => {
    const p = t2(lang);
    const dur = 10, cx = 150, cy = 164, r = 100;
    const N = 24, th = Array.from({ length: N + 1 }, (_, i) => (i * 2 * Math.PI) / N);
    const Px = th.map(a => cx + r * Math.cos(a)), Py = th.map(a => cy - r * Math.sin(a));
    const path = `M${cx + r} ${cy} A${r} ${r} 0 1 0 ${cx - r} ${cy} A${r} ${r} 0 1 0 ${cx + r} ${cy}`;
    return frame(p('The unit circle', 'La circonferenza goniometrica'),
      `<line x1="${cx - r - 14}" y1="${cy}" x2="${cx + r + 14}" y2="${cy}" stroke="${C.muted}" stroke-width="3"/><line x1="${cx}" y1="${cy + r + 14}" x2="${cx}" y2="${cy - r - 14}" stroke="${C.muted}" stroke-width="3"/>
       <circle cx="${cx}" cy="${cy}" r="${r}" fill="${C.data}" fill-opacity="0.08" stroke="${C.data}" stroke-width="4"/>
       <line x1="${cx}" y1="${cy}" stroke="${C.gold}" stroke-width="5"><animate attributeName="x2" values="${vals(Px)}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="y2" values="${vals(Py)}" dur="${dur}s" repeatCount="indefinite"/></line>
       <line y2="${cy}" stroke="${C.good}" stroke-width="3" stroke-dasharray="6 5"><animate attributeName="x1" values="${vals(Px)}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="x2" values="${vals(Px)}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="y1" values="${vals(Py)}" dur="${dur}s" repeatCount="indefinite"/></line>
       <line x2="${cx}" stroke="${C.ember}" stroke-width="3" stroke-dasharray="6 5"><animate attributeName="x1" values="${vals(Px)}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="y1" values="${vals(Py)}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="y2" values="${vals(Py)}" dur="${dur}s" repeatCount="indefinite"/></line>
       <circle r="9" fill="${C.good}" cy="${cy}"><animate attributeName="cx" values="${vals(Px)}" dur="${dur}s" repeatCount="indefinite"/></circle><circle r="9" fill="${C.ember}" cx="${cx}"><animate attributeName="cy" values="${vals(Py)}" dur="${dur}s" repeatCount="indefinite"/></circle>
       <circle r="11" fill="${C.sakura}"><animateMotion dur="${dur}s" repeatCount="indefinite" path="${path}"/></circle>
       ${T(cx + r - 4, cy + 30, 'cos α', { size: 20, fill: C.good, weight: 800, anchor: 'end' })}${T(cx + 8, cy - r - 20, 'sin α', { size: 20, fill: C.ember, weight: 800, anchor: 'start' })}
       ${card(284, 24, 342, 292, C.gold, 0.08)}${T(455, 62, 'sin²α + cos²α = 1', { size: 26, weight: 800 })}${T(455, 104, 'tan α = sin α / cos α', { size: 24, weight: 800 })}
       ${T(455, 154, 'π rad = 180°', { size: 24, weight: 800, fill: C.gold })}${T(455, 188, 'π/6 = 30° · π/3 = 60°', { size: 22 })}
       ${T(455, 238, '−1 ≤ sin α ≤ 1', { size: 22, fill: C.muted })}${T(455, 268, '−1 ≤ cos α ≤ 1', { size: 22, fill: C.muted })}${T(455, 300, p('P turns on a circle of radius 1', 'P ruota su un cerchio di raggio 1'), { size: 20, fill: C.muted })}`,
      '', 330);
  },

  /* Triangle laws */
  math11TriangleLaws: lang => {
    const p = t2(lang);
    const dur = 8;
    const A = [44, 206], B = [262, 94], Cc = [262, 206];
    const G = [[346, 206], [596, 206], [500, 84]];
    const hi = (from: number, to: number, content: string) => showDuring(from, to, dur, content);
    return frame(p('Triangle laws', 'Teoremi sui triangoli'),
      `${card(14, 24, 300, 330, C.data, 0.08)}${T(164, 56, p('RIGHT TRIANGLE', 'TRIANGOLO RETTANGOLO'), { size: 20, fill: C.data, weight: 800 })}
       <polygon points="${A} ${B} ${Cc}" fill="${C.data}" fill-opacity="0.15" stroke="${C.data}" stroke-width="5" stroke-linejoin="round"/>
       <path d="M${Cc[0] - 18} ${Cc[1]} v-18 h18" fill="none" stroke="${C.muted}" stroke-width="3"/>
       ${hi(0.0, 0.48, `<line x1="${Cc[0]}" y1="${Cc[1]}" x2="${B[0]}" y2="${B[1]}" stroke="${C.ember}" stroke-width="9" stroke-linecap="round"/>`)}${hi(0.5, 0.98, `<line x1="${A[0]}" y1="${A[1]}" x2="${Cc[0]}" y2="${Cc[1]}" stroke="${C.good}" stroke-width="9" stroke-linecap="round"/>`)}
       ${T(142, 140, 'c', { size: 26, weight: 800 })}${T(282, 156, 'a', { size: 26, weight: 800, anchor: 'start', fill: C.ember })}${T(152, 238, 'b', { size: 26, weight: 800, fill: C.good })}${T(86, 196, 'α', { size: 24, weight: 800, fill: C.gold })}
       ${T(164, 280, 'a = c · sin α', { size: 24, weight: 800, fill: C.ember })}${T(164, 314, 'b = c · cos α', { size: 24, weight: 800, fill: C.good })}${T(164, 344, 'a² + b² = c²', { size: 20, fill: C.muted })}
       ${card(326, 24, 300, 330, C.gold, 0.08)}${T(476, 56, p('ANY TRIANGLE', 'TRIANGOLO QUALUNQUE'), { size: 20, fill: C.gold, weight: 800 })}
       <polygon points="${G.map(g => g.join(',')).join(' ')}" fill="${C.gold}" fill-opacity="0.15" stroke="${C.gold}" stroke-width="5" stroke-linejoin="round"/>
       ${T(376, 196, 'α', { size: 22, weight: 800, fill: C.sakura })}${T(558, 196, 'β', { size: 22, weight: 800, fill: C.sakura })}${T(500, 114, 'γ', { size: 22, weight: 800, fill: C.sakura })}
       ${T(412, 134, 'b', { size: 24, weight: 800 })}${T(570, 134, 'a', { size: 24, weight: 800 })}${T(470, 234, 'c', { size: 24, weight: 800 })}
       <circle r="8" fill="${C.sakura}"><animateMotion dur="${dur}s" repeatCount="indefinite" path="M${G[0]} L${G[1]} L${G[2]} Z"/></circle>
       ${T(476, 274, 'a / sin α = b / sin β = c / sin γ', { size: 20, weight: 800 })}${T(476, 308, 'a² = b² + c² − 2bc · cos α', { size: 20, weight: 800 })}${T(476, 342, p('Area = ½ · b · c · sin α', 'Area = ½ · b · c · sin α'), { size: 20, weight: 800 })}`,
      p('α = 90° → cos α = 0 → Pythagoras', 'α = 90° → cos α = 0 → Pitagora'), 426);
  }
};
