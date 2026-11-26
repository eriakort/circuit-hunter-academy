import type { Language } from '../types';
import { C, T, anim, move, frame, pick, showDuring, card } from './sciViz';

/**
 * Italian Grade 5 Maths drawings (number line, fraction bar, percentage grid, Venn diagram, bar chart,
 * Cartesian plane, angles, regular polygon, circle, solids), redrawn large with motion that shows the
 * idea. Keys are unchanged. Everything is in the chosen language; decimals use a comma in Italian and
 * division is ":" in Italian. A teacher should still skim the wording against the course text.
 */
type Builder = (lang: Language) => string;
const t2 = (lang: Language) => (en: string, it: string) => pick(lang, en, it);
const dec = (lang: Language, s: string) => (lang === 'it' ? s.replace(/\./g, ',') : s);
const f1 = (v: number) => v.toFixed(1);

export const MATH5_BUILDERS: Record<string, Builder> = {
  /* Number line from -5 to +5 */
  'g5m-number-line': lang => {
    const p = t2(lang);
    const x = (v: number) => 70 + (v + 5) * 50;
    let ticks = '';
    for (let v = -5; v <= 5; v++) {
      const col = v < 0 ? C.data : v > 0 ? C.ember : C.text;
      ticks += `<line x1="${x(v)}" y1="136" x2="${x(v)}" y2="164" stroke="${col}" stroke-width="5" stroke-linecap="round"/>${T(x(v), 200, v > 0 ? '+' + v : v < 0 ? '−' + Math.abs(v) : '0', { size: 24, fill: col, weight: 800 })}`;
    }
    const seq = [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -4, -3, -2, -1].map(x);
    return frame(p('Number line from −5 to +5', 'Retta dei numeri da −5 a +5'),
      `${card(30, 30, 270, 62, C.data, 0.1)}${T(165, 70, p('negative numbers', 'numeri negativi'), { size: 24, fill: C.data, weight: 800 })}
       ${card(340, 30, 270, 62, C.ember, 0.1)}${T(475, 70, p('positive numbers', 'numeri positivi'), { size: 24, fill: C.ember, weight: 800 })}
       <line x1="30" y1="150" x2="598" y2="150" stroke="${C.muted}" stroke-width="5" stroke-linecap="round"/><polygon points="618,150 598,140 598,160" fill="${C.muted}"/>${ticks}
       <circle cy="150" r="13" fill="${C.gold}" stroke="${C.text}" stroke-width="3"><animate attributeName="cx" values="${seq.join(';')}" dur="12s" calcMode="discrete" repeatCount="indefinite"/></circle>
       ${T(170, 254, p('← smaller', '← minore'), { size: 28, fill: C.data, weight: 800 })}${T(470, 254, p('greater →', 'maggiore →'), { size: 28, fill: C.ember, weight: 800 })}`,
      p('Further right means a greater number', 'Più a destra, più grande il numero'), 336);
  },

  /* A fraction: 3 of 4 equal parts */
  'g5m-fraction-bar': lang => {
    const p = t2(lang);
    const parts = Array.from({ length: 4 }, (_, i) =>
      `<rect x="${60 + i * 130}" y="100" width="130" height="80" fill="${i < 3 ? C.sakura : 'transparent'}" fill-opacity="${i < 3 ? 0.4 : 0}" stroke="${C.text}" stroke-width="4"/>`).join('');
    const glow = [0, 1, 2].map(i =>
      `<rect x="${60 + i * 130}" y="100" width="130" height="80" fill="${C.text}" fill-opacity="0" stroke="${C.text}" stroke-width="5" stroke-opacity="0">${anim('fill-opacity', '0;0.3;0.3;0;0', 6, 0, `keyTimes="0;${(0.1 + i * 0.14).toFixed(2)};0.75;0.85;1"`)}${anim('stroke-opacity', '0;1;1;0;0', 6, 0, `keyTimes="0;${(0.1 + i * 0.14).toFixed(2)};0.75;0.85;1"`)}</rect>`).join('');
    return frame('3/4', `${T(320, 62, '3 / 4', { size: 48, weight: 800 })}
       ${parts}${glow}
       <line x1="62" y1="214" x2="448" y2="214" stroke="${C.sakura}" stroke-width="6" stroke-linecap="round"/>${T(255, 246, p('3 parts taken', '3 parti prese'), { size: 24, fill: C.sakura, weight: 800 })}
       <line x1="62" y1="268" x2="578" y2="268" stroke="${C.muted}" stroke-width="6" stroke-linecap="round"/>${T(320, 300, p('4 equal parts in the whole', 'L’intero ha 4 parti uguali'), { size: 24, fill: C.muted, weight: 800 })}`,
      '', 330);
  },

  /* A percentage: 25 squares out of 100 */
  'g5m-percent-grid': lang => {
    const p = t2(lang);
    let cells = '';
    for (let r = 0; r < 10; r++) for (let c = 0; c < 10; c++) {
      const filled = r * 10 + c < 25;
      cells += `<rect x="${34 + c * 24}" y="${28 + r * 24}" width="21" height="21" rx="3" fill="${filled ? C.gold : C.panel}" fill-opacity="${filled ? 0.8 : 1}" stroke="${C.line}" stroke-width="2"/>`;
    }
    const sweep = Array.from({ length: 25 }, (_, i) =>
      `<rect x="${34 + (i % 10) * 24}" y="${28 + Math.floor(i / 10) * 24}" width="21" height="21" rx="3" fill="${C.ember}" fill-opacity="0">${anim('fill-opacity', '0;0.9;0.9;0;0', 7, 0, `keyTimes="0;${(0.03 + i * 0.025).toFixed(3)};0.85;0.93;1"`)}</rect>`).join('');
    return frame('25%', `${cells}${sweep}
       ${T(450, 100, '25 %', { size: 60, fill: C.gold, weight: 800 })}
       ${T(450, 156, '= 25 / 100', { size: 32, weight: 800 })}${T(450, 204, '= 1 / 4', { size: 32, weight: 800 })}${T(450, 252, '= ' + dec(lang, '0.25'), { size: 32, weight: 800 })}`,
      p('25 squares out of 100', '25 quadretti su 100'), 332);
  },

  /* Venn diagram: even numbers (A) and numbers above 10 (B) */
  'g5m-venn': lang => {
    const p = t2(lang);
    const lens = 'M320 88.4 A105 105 0 0 1 320 211.6 A105 105 0 0 1 320 88.4 Z';
    return frame(p('Venn diagram', 'Diagramma di Eulero-Venn'),
      `<circle cx="235" cy="150" r="105" fill="${C.data}" fill-opacity="0.16" stroke="${C.data}" stroke-width="4"/><circle cx="405" cy="150" r="105" fill="${C.ember}" fill-opacity="0.16" stroke="${C.ember}" stroke-width="4"/>
       <path d="${lens}" fill="${C.gold}" fill-opacity="0"><animate attributeName="fill-opacity" values="0;0;0.55;0.55;0" keyTimes="0;0.2;0.3;0.8;1" dur="5s" repeatCount="indefinite"/></path>
       ${T(170, 38, 'A · ' + p('even', 'pari'), { size: 26, fill: C.data, weight: 800 })}${T(470, 38, 'B · > 10', { size: 26, fill: C.ember, weight: 800 })}
       ${T(172, 158, '2   4   8', { size: 26, weight: 800 })}${T(320, 142, '12', { size: 26, weight: 800, fill: C.gold })}${T(320, 178, '20', { size: 26, weight: 800, fill: C.gold })}${T(470, 158, '11   15', { size: 26, weight: 800 })}
       ${T(320, 296, p('in both: A ∩ B', 'in entrambi: A ∩ B'), { size: 24, fill: C.gold, weight: 800 })}
       <rect x="548" y="226" width="60" height="50" rx="10" fill="none" stroke="${C.muted}" stroke-width="3"/>${T(578, 262, '7', { size: 26, weight: 800 })}${T(578, 296, p('outside', 'fuori'), { size: 20, fill: C.muted })}`,
      '', 326);
  },

  /* Bar chart of favourite sports */
  'g5m-bar-chart': lang => {
    const p = t2(lang);
    const data: Array<[string, string, number, string]> = [['Football', 'Calcio', 8, C.data], ['Volleyball', 'Pallavolo', 5, C.ember], ['Swimming', 'Nuoto', 6, C.good], ['Dance', 'Danza', 3, C.sakura]];
    const grid = [0, 2, 4, 6, 8].map(v => `<line x1="110" y1="${250 - v * 20}" x2="600" y2="${250 - v * 20}" stroke="${C.line}" stroke-width="2"${v ? ' stroke-dasharray="6 6"' : ''}/>${T(98, 257 - v * 20, String(v), { size: 20, fill: C.muted, anchor: 'end' })}`).join('');
    const bars = data.map(([en, it, v, col], i) => {
      const x = 130 + i * 118;
      const h = v * 20;
      return `<rect x="${x}" y="${250 - h}" width="80" height="${h}" rx="6" fill="${col}" fill-opacity="0.85"/>${T(x + 40, 234 - h, String(v), { size: 26, weight: 800 })}${T(x + 40, 284, p(en, it), { size: 20, fill: C.muted })}
        <rect x="${x - 4}" y="${246 - h}" width="88" height="${h + 8}" rx="8" fill="none" stroke="${C.text}" stroke-width="4" opacity="0">${anim('opacity', '0;0;1;1;0;0', 8, 0, `keyTimes="0;${(0.04 + i * 0.2).toFixed(2)};${(0.06 + i * 0.2).toFixed(2)};${(0.18 + i * 0.2).toFixed(2)};${(0.22 + i * 0.2).toFixed(2)};1"`)}</rect>`;
    }).join('');
    return frame(p('Bar chart of favourite sports', 'Istogramma degli sport preferiti'),
      `${T(110, 34, p('children', 'bambini'), { size: 22, fill: C.muted, anchor: 'start', weight: 800 })}${grid}<line x1="110" y1="48" x2="110" y2="250" stroke="${C.muted}" stroke-width="4"/>${bars}`,
      p('The taller the bar, the more votes', 'Più alta la barra, più voti'), 336);
  },

  /* Cartesian plane: the point A (3, 5) */
  'g5m-cartesian': lang => {
    const p = t2(lang);
    const x0 = 70, y0 = 300, s = 38;
    let grid = '';
    for (let i = 0; i <= 7; i++) {
      grid += `<line x1="${x0 + i * s}" y1="${y0}" x2="${x0 + i * s}" y2="${y0 - 6 * s}" stroke="${C.line}" stroke-width="2"/>${T(x0 + i * s, y0 + 24, String(i), { size: 20, fill: C.muted })}`;
      if (i <= 6) grid += `<line x1="${x0}" y1="${y0 - i * s}" x2="${x0 + 7 * s}" y2="${y0 - i * s}" stroke="${C.line}" stroke-width="2"/>${i ? T(x0 - 14, y0 - i * s + 7, String(i), { size: 20, fill: C.muted, anchor: 'end' }) : ''}`;
    }
    const ax = x0 + 3 * s, ay = y0 - 5 * s;
    const sep = lang === 'it' ? '; ' : ', ';
    return frame(p('Cartesian plane', 'Piano cartesiano'),
      `${grid}<line x1="${x0}" y1="${y0}" x2="${x0 + 7 * s + 14}" y2="${y0}" stroke="${C.text}" stroke-width="5" stroke-linecap="round"/><line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y0 - 6 * s - 14}" stroke="${C.text}" stroke-width="5" stroke-linecap="round"/>
       ${T(x0 + 7 * s + 30, y0 + 8, 'x', { size: 26, weight: 800 })}${T(x0 + 18, y0 - 6 * s - 14, 'y', { size: 26, weight: 800 })}
       <line x1="${ax}" y1="${y0}" x2="${ax}" y2="${ay}" stroke="${C.ember}" stroke-width="4" stroke-dasharray="8 7"/><line x1="${x0}" y1="${ay}" x2="${ax}" y2="${ay}" stroke="${C.ember}" stroke-width="4" stroke-dasharray="8 7"/>
       <circle cx="${ax}" cy="${ay}" r="11" fill="${C.ember}"/>${T(ax + 20, ay - 12, 'A', { size: 26, fill: C.ember, weight: 800, anchor: 'start' })}
       <circle r="10" fill="${C.gold}" stroke="${C.text}" stroke-width="3"><animateMotion dur="5s" repeatCount="indefinite" keyPoints="0;0.5;1;1" keyTimes="0;0.4;0.8;1" calcMode="linear" path="M${x0} ${y0} H${ax} V${ay}"/></circle>
       ${card(410, 60, 210, 130, C.ember, 0.1)}${T(515, 100, `A (3${sep}5)`, { size: 30, fill: C.ember, weight: 800 })}${T(515, 140, p('3 across →', '3 in orizzontale'), { size: 22, weight: 800 })}${T(515, 172, p('5 up ↑', '5 in verticale'), { size: 22, weight: 800 })}`,
      '', 334);
  },

  /* Kinds of angles */
  'g5m-angles': lang => {
    const p = t2(lang);
    const items: Array<[number, string, string, string]> = [[45, 'acute', 'acuto', C.good], [90, 'right', 'retto', C.gold], [135, 'obtuse', 'ottuso', C.ember], [180, 'straight', 'piatto', C.sakura]];
    const sweeps = items.map(([deg, , , col], i) => {
      const cx = 84 + i * 154, cy = 120, r = 66;
      return `<g transform="translate(${cx} ${cy})"><line x1="0" y1="0" x2="${r}" y2="0" stroke="${col}" stroke-width="6" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" values="0;0;${-deg};${-deg};0" keyTimes="0;0.1;0.55;0.85;1" dur="6s" repeatCount="indefinite"/></line></g>`;
    }).join('');
    const base = items.map(([deg, en, it, col], i) => {
      const cx = 84 + i * 154, cy = 120, r = 66;
      const rad = (d: number) => (d * Math.PI) / 180;
      const ex = cx + r * Math.cos(rad(deg)), ey = cy - r * Math.sin(rad(deg));
      const arcX = cx + 30 * Math.cos(rad(deg)), arcY = cy - 30 * Math.sin(rad(deg));
      const mark = deg === 90
        ? `<path d="M${cx + 24} ${cy} V${cy - 24} H${cx}" fill="none" stroke="${col}" stroke-width="4"/>`
        : `<path d="M${cx + 30} ${cy} A30 30 0 0 0 ${f1(arcX)} ${f1(arcY)}" fill="none" stroke="${col}" stroke-width="5"/>`;
      return `<line x1="${cx}" y1="${cy}" x2="${cx + r}" y2="${cy}" stroke="${C.data}" stroke-width="5" stroke-linecap="round"/><line x1="${cx}" y1="${cy}" x2="${f1(ex)}" y2="${f1(ey)}" stroke="${C.data}" stroke-width="5" stroke-linecap="round"/>${mark}${T(cx, cy + 46, deg + '°', { size: 28, fill: col, weight: 800 })}${T(cx, cy + 78, p(en, it), { size: 22, fill: C.muted, weight: 700 })}`;
    }).join('');
    return frame(p('Kinds of angles', 'Tipi di angoli'), `${base}${sweeps}`,
      p('An angle is how far one side turns from the other', 'L’angolo misura quanto ruota un lato'), 262);
  },

  /* Regular hexagon: the apothem and the six triangles */
  'g5m-regular-polygon': lang => {
    const p = t2(lang);
    const cx = 168, cy = 160, r = 104;
    const v = (i: number): [number, number] => [cx + r * Math.cos((Math.PI / 3) * i), cy + r * Math.sin((Math.PI / 3) * i)];
    const pts = Array.from({ length: 6 }, (_, i) => v(i).map(f1).join(',')).join(' ');
    const mid: [number, number] = [(v(0)[0] + v(1)[0]) / 2, (v(0)[1] + v(1)[1]) / 2];
    const tris = Array.from({ length: 6 }, (_, i) => {
      const a = v(i), b = v((i + 1) % 6);
      return showDuring(0.05 + i * 0.13, 0.97, 8, `<polygon points="${cx},${cy} ${f1(a[0])},${f1(a[1])} ${f1(b[0])},${f1(b[1])}" fill="${C.gold}" fill-opacity="0.35" stroke="${C.gold}" stroke-width="2"/>`);
    }).join('');
    return frame(p('Regular hexagon with apothem', 'Esagono regolare con apotema'),
      `<polygon points="${pts}" fill="${C.data}" fill-opacity="0.12" stroke="${C.data}" stroke-width="5" stroke-linejoin="round"/>${tris}
       <line x1="${cx}" y1="${cy}" x2="${f1(mid[0])}" y2="${f1(mid[1])}" stroke="${C.gold}" stroke-width="6" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="6" fill="${C.text}"/>
       ${T(mid[0] - 50, mid[1] + 6, 'a', { size: 28, fill: C.gold, weight: 800 })}${T(mid[0] + 26, mid[1] + 22, 'l', { size: 28, fill: C.data, weight: 800 })}
       ${card(340, 36, 270, 252, C.gold, 0.08)}
       ${T(475, 82, 'a = ' + p('apothem', 'apotema'), { size: 26, fill: C.gold, weight: 800 })}
       ${T(475, 134, 'a = l × ' + dec(lang, '0.866'), { size: 26, weight: 800 })}
       ${T(475, 196, 'A = P × a ' + (lang === 'it' ? ':' : '÷') + ' 2', { size: 30, weight: 800, fill: C.good })}
       ${T(475, 244, p('6 triangles, base l, height a', '6 triangoli, base l, altezza a'), { size: 20, fill: C.muted })}`,
      '', 316);
  },

  /* Circle: radius, diameter, chord, circumference and area */
  'g5m-circle': lang => {
    const p = t2(lang);
    const cx = 168, cy = 156, r = 112;
    const chA = 2.4, chB = 0.9;
    const row = (y: number, col: string, a: string, b: string) =>
      `<line x1="346" y1="${y - 8}" x2="386" y2="${y - 8}" stroke="${col}" stroke-width="7" stroke-linecap="round"/>${T(400, y, a, { size: 24, fill: col, weight: 800, anchor: 'start' })}${b ? T(400, y + 26, b, { size: 20, fill: C.muted, anchor: 'start' }) : ''}`;
    return frame(p('Elements of the circle', 'Elementi del cerchio'),
      `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${C.good}" fill-opacity="0.12" stroke="${C.good}" stroke-width="5"/>
       <line x1="${cx - r}" y1="${cy}" x2="${cx + r}" y2="${cy}" stroke="${C.ember}" stroke-width="6" stroke-linecap="round"/>
       <line x1="${f1(cx + r * Math.cos(chA))}" y1="${f1(cy + r * Math.sin(chA))}" x2="${f1(cx + r * Math.cos(chB))}" y2="${f1(cy + r * Math.sin(chB))}" stroke="${C.gold}" stroke-width="6" stroke-linecap="round"/>
       <line x1="${cx}" y1="${cy}" x2="${f1(cx + r * Math.cos(-Math.PI / 3))}" y2="${f1(cy + r * Math.sin(-Math.PI / 3))}" stroke="${C.data}" stroke-width="6" stroke-linecap="round"/>
       <g transform="translate(${cx} ${cy})"><line x1="0" y1="0" x2="${r}" y2="0" stroke="${C.sakura}" stroke-width="5" stroke-linecap="round" stroke-dasharray="2 9"><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="8s" repeatCount="indefinite"/></line></g>
       <circle cx="${cx}" cy="${cy}" r="7" fill="${C.text}"/>
       ${row(66, C.data, 'r = ' + p('radius', 'raggio'), '')}${row(124, C.ember, 'd = ' + p('diameter', 'diametro'), 'd = r × 2')}${row(190, C.gold, p('chord', 'corda'), p('joins two points', 'unisce due punti'))}
       ${T(366, 262, 'C = d × π', { size: 26, weight: 800, anchor: 'start' })}${T(366, 298, 'A = r × r × π', { size: 26, weight: 800, anchor: 'start' })}`,
      '', 340);
  },

  /* Cube, cylinder and cone */
  'g5m-solids': lang => {
    const p = t2(lang);
    const bob = (b: number) => move('0 0;0 -9;0 0', 3.2, b);
    return frame(p('Cube, cylinder and cone', 'Cubo, cilindro e cono'),
      `<g stroke="${C.data}" stroke-width="5" stroke-linejoin="round" fill="${C.data}" fill-opacity="0.14"><rect x="46" y="100" width="100" height="100"/><polygon points="46,100 86,62 186,62 146,100"/><polygon points="146,100 186,62 186,162 146,200"/>${bob(0)}</g>
       <g stroke="${C.ember}" stroke-width="5" stroke-linejoin="round" fill="${C.ember}" fill-opacity="0.14"><path d="M262 76 V190 A58 18 0 0 0 378 190 V76"/><ellipse cx="320" cy="76" rx="58" ry="18"/>${bob(0.5)}</g>
       <g stroke="${C.good}" stroke-width="5" stroke-linejoin="round" fill="${C.good}" fill-opacity="0.14"><path d="M520 52 L462 190 A58 18 0 0 0 578 190 Z"/>${bob(1)}</g>
       ${T(116, 252, p('cube', 'cubo'), { size: 28, fill: C.data, weight: 800 })}${T(116, 284, p('flat faces', 'facce piane'), { size: 20, fill: C.muted })}
       ${T(320, 252, p('cylinder', 'cilindro'), { size: 28, fill: C.ember, weight: 800 })}${T(320, 284, p('curved surface', 'superficie curva'), { size: 20, fill: C.muted })}
       ${T(520, 252, p('cone', 'cono'), { size: 28, fill: C.good, weight: 800 })}${T(520, 284, p('curved surface', 'superficie curva'), { size: 20, fill: C.muted })}`,
      '', 316);
  }
};
