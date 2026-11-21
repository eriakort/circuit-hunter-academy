// Motion for the maths visuals: advanced maths (grades 10-11), Grade 5 and Ghana strand motifs.
// Everything here is decorative SVG/CSS animation layered over the existing drawings, hidden from
// screen readers; MissionScreen pauses SVG (SMIL) motion and the stylesheet stops CSS motion when
// the system asks for reduced motion.

const dot = (path: string, dur: number, begin = 0, col = '#ffd166', r = 5) =>
  `<circle r="${r}" fill="${col}" stroke="#fff" stroke-width="1.4"><animateMotion dur="${dur}s" begin="${begin > 0 ? begin - dur : begin}s" repeatCount="indefinite" path="${path}"/></circle>`;

const ring = (cx: number, cy: number, r0: number, r1: number, col: string, dur = 2.4, begin = 0) =>
  `<circle cx="${cx}" cy="${cy}" r="${r0}" fill="none" stroke="${col}" stroke-width="2.5" opacity="0"><animate attributeName="r" values="${r0};${r1}" dur="${dur}s" begin="${begin}s" repeatCount="indefinite"/><animate attributeName="opacity" values=".9;0" dur="${dur}s" begin="${begin}s" repeatCount="indefinite"/></circle>`;

const circlePath = (cx: number, cy: number, r: number, ccw = false) =>
  `M${cx + r} ${cy} A${r} ${r} 0 1 ${ccw ? 0 : 1} ${cx - r} ${cy} A${r} ${r} 0 1 ${ccw ? 0 : 1} ${cx + r} ${cy}`;

const ellipsePath = (cx: number, cy: number, rx: number, ry: number) =>
  `M${cx + rx} ${cy} A${rx} ${ry} 0 1 1 ${cx - rx} ${cy} A${rx} ${ry} 0 1 1 ${cx + rx} ${cy}`;

const insertBeforeEnd = (html: string, add: string) => {
  const close = html.lastIndexOf('</svg>');
  return close < 0 || !add ? html : `${html.slice(0, close)}<g aria-hidden="true">${add}</g>${html.slice(close)}`;
};

const samples = (n: number, f: (t: number) => number) =>
  Array.from({ length: n + 1 }, (_, i) => f(i / n).toFixed(1)).join(';');

/** A ray from (cx, cy) that sweeps from angle a0 to a1 (degrees, anticlockwise) and rests. */
const sweepRay = (cx: number, cy: number, r: number, a0: number, a1: number, col: string, dur = 4, width = 3.5) => {
  const pt = (t: number, k: 'x' | 'y') => {
    const a = ((a0 + (a1 - a0) * t) * Math.PI) / 180;
    return k === 'x' ? cx + r * Math.cos(a) : cy - r * Math.sin(a);
  };
  const f = (k: 'x' | 'y') => `${samples(24, t => pt(Math.min(1, t / 0.75), k))}`;
  return `<line x1="${cx}" y1="${cy}" x2="${cx + r}" y2="${cy}" stroke="${col}" stroke-width="${width}" stroke-linecap="round"><animate attributeName="x2" values="${f('x')}" dur="${dur}s" repeatCount="indefinite"/><animate attributeName="y2" values="${f('y')}" dur="${dur}s" repeatCount="indefinite"/></line>`;
};

/* ------------------------------------------------------------------ advanced maths */

type Card = { x: number; y: number; w: number; h: number; stroke: string };
const CARD = /<rect x="(\d+)" y="(\d+)" width="(\d+)" height="(\d+)" rx="14" fill="[^"]*" stroke="([^"]+)" stroke-width="2"\/>/g;

const cardTour = (html: string, each = 2) => {
  const cards: Card[] = [];
  for (const m of html.matchAll(CARD)) cards.push({ x: +m[1], y: +m[2], w: +m[3], h: +m[4], stroke: m[5] });
  if (cards.length < 2) return '';
  const n = cards.length;
  return cards.map((c, i) =>
    `<rect x="${c.x}" y="${c.y}" width="${c.w}" height="${c.h}" rx="14" style="fill:${c.stroke};fill-opacity:.12;stroke:${c.stroke};stroke-width:3.4" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;${(1 / n).toFixed(4)}" dur="${n * each}s" begin="${i * each}s" repeatCount="indefinite"/></rect>`
  ).join('');
};

const unitCircle = () => {
  const cx = 176, cy = 112, r = 64, steps = 48;
  const xs = samples(steps, t => cx + r * Math.cos(-2 * Math.PI * t));
  const ys = samples(steps, t => cy + r * Math.sin(-2 * Math.PI * t));
  return dot(circlePath(cx, cy, r, true), 8, 0, '#ffd166', 5.5)
    + `<line x1="${cx}" y1="${cy}" x2="${cx + r}" y2="${cy}" stroke="#ffd166" stroke-width="2"><animate attributeName="x2" values="${xs}" dur="8s" repeatCount="indefinite"/><animate attributeName="y2" values="${ys}" dur="8s" repeatCount="indefinite"/></line>`
    + `<line x1="${cx + r}" y1="${cy}" x2="${cx + r}" y2="${cy}" stroke="#38ef7d" stroke-width="3"><animate attributeName="x1" values="${xs}" dur="8s" repeatCount="indefinite"/><animate attributeName="x2" values="${xs}" dur="8s" repeatCount="indefinite"/><animate attributeName="y2" values="${ys}" dur="8s" repeatCount="indefinite"/></line>`
    + `<line x1="${cx}" y1="${cy}" x2="${cx + r}" y2="${cy}" stroke="#45d8ff" stroke-width="3"><animate attributeName="x2" values="${xs}" dur="8s" repeatCount="indefinite"/></line>`;
};

const ADV: Record<string, string> = {
  math10Systems: ring(109, 107, 7, 26, '#ff6a3d') + dot('M42 146 L176 66', 3, 0, '#45d8ff') + dot('M42 68 L176 148', 3, 1.5, '#ffd166')
    + dot('M252 136 L388 66', 3, 0, '#45d8ff') + dot('M252 160 L388 90', 3, 1.5, '#ffd166') + dot('M464 142 L598 68', 3, 0, '#ffd166'),
  math10CartesianLine: dot('M72 168 L342 42', 5, 0, '#45d8ff') + dot('M168 123 H262 V79', 3.5, 0, '#ffd166', 4.5),
  math10QuadraticDelta: dot('M52 60 Q109 186 166 60', 4, 0, '#45d8ff') + dot('M262 56 Q320 196 378 56', 4, 0, '#ffd166') + dot('M474 44 Q531 140 588 44', 4, 0, '#ff6a3d') + ring(320, 126, 6, 22, '#ff6a3d'),
  math10VieteSystems: dot('M385 154 Q476 50 567 154', 4.5, 0, '#ffd166') + dot('M366 138 L586 80', 4.5, 0, '#38ef7d') + ring(417, 124, 5, 20, '#ff6a3d') + ring(527, 96, 5, 20, '#ff6a3d', 2.4, 1.2),
  math10QuadraticSign: dot('M72 52 Q164 198 256 52', 4.5, 0, '#ffd166') + dot('M384 52 Q476 198 568 52', 4.5, 0, '#ffd166')
    + '<g stroke="#38ef7d" stroke-width="6" opacity="0"><line x1="40" y1="118" x2="114" y2="118"/><line x1="214" y1="118" x2="288" y2="118"/><animate attributeName="opacity" values="0;.8;0" dur="2.4s" repeatCount="indefinite"/></g>'
    + '<line x1="426" y1="118" x2="526" y2="118" stroke="#ff6a3d" stroke-width="6" opacity="0"><animate attributeName="opacity" values="0;.8;0" dur="2.4s" begin="1.2s" repeatCount="indefinite"/></line>',
  math10EuclidPythagoras: dot('M62 164 L218 58 L334 164 Z', 6, 0, '#ffd166') + '<line x1="218" y1="58" x2="218" y2="164" stroke="#fff" stroke-width="3" stroke-dasharray="5 3" opacity="0"><animate attributeName="opacity" values="0;1;0" dur="2.4s" repeatCount="indefinite"/></line>',
  math10ThalesCircle: dot('M88 56 L128 168', 3, 0, '#ffd166') + dot('M216 56 L178 168', 3, 1.5, '#ff6a3d') + dot(circlePath(476, 112, 52), 5, 0, '#ffd166') + ring(476, 112, 4, 18, '#ff6a3d'),
  math10Probability: [114, 148, 182, 216].map((x, i) =>
    `<circle cx="${x}" cy="148" r="14" fill="none" stroke="#fff" stroke-width="3" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;.25" dur="4s" begin="${i}s" repeatCount="indefinite"/></circle>`).join(''),
  math11Functions: dot('M472 156 Q526 146 574 64', 3.5, 0, '#45d8ff') + dot('M472 156 Q482 104 584 64', 3.5, 0, '#ffd166'),
  math11AbsSign: dot('M72 56 L164 142 L256 56', 4, 0, '#45d8ff'),
  math11ParabolaCircle: dot('M84 62 Q164 196 244 62', 4, 0, '#45d8ff') + dot(circlePath(476, 108, 46), 5, 0, '#ffd166')
    + `<line x1="476" y1="108" x2="522" y2="108" stroke="#ff6a3d" stroke-width="2.5"><animateTransform attributeName="transform" type="rotate" from="0 476 108" to="360 476 108" dur="5s" repeatCount="indefinite"/></line>`,
  math11EllipseHyperbola: dot(ellipsePath(164, 106, 88, 46), 6, 0, '#45d8ff') + dot('M384 64 Q444 106 384 148 Q444 106 384 64', 4, 0, '#ffd166') + dot('M568 64 Q508 106 568 148 Q508 106 568 64', 4, 2, '#ffd166'),
  math11ConicsTangent: `<line x1="88" y1="34" x2="298" y2="34" stroke="#fff" stroke-width="3"><animate attributeName="y1" values="34;112;190;112;34" dur="9s" repeatCount="indefinite"/><animate attributeName="y2" values="34;112;190;112;34" dur="9s" repeatCount="indefinite"/></line>`,
  math11ExpLog: dot('M52 152 Q125 148 158 118 T210 38', 4.5, 0, '#45d8ff') + dot('M124 186 Q132 132 182 104 T306 72', 4.5, 0, '#ffd166'),
  math11UnitCircle: unitCircle(),
  math11TriangleLaws: dot('M74 162 L246 162 L246 72 Z', 6, 0, '#ffd166')
};

export function animateMathAdv(key: string, html: string): string {
  return insertBeforeEnd(html, cardTour(html) + (ADV[key] || ''));
}
export const MATH_ADV_HAND_MOTION_KEYS = Object.keys(ADV);

/* ------------------------------------------------------------------ Grade 5 */

/** Make the bars of a chart grow from the baseline. */
const growBars = (html: string, widthAttr: string, baselineOf: (y: number, h: number) => number) =>
  html.replace(new RegExp(`<rect x="(\\d+)" y="(\\d+)" width="${widthAttr}" height="(\\d+)"([^>]*?)/>`, 'g'),
    (_m, x, y, h, rest) => {
      const base = baselineOf(+y, +h);
      return `<rect x="${x}" y="${y}" width="${widthAttr}" height="${h}"${rest}><animate attributeName="height" values="0;${h};${h}" keyTimes="0;.5;1" dur="4s" repeatCount="indefinite"/><animate attributeName="y" values="${base};${y};${y}" keyTimes="0;.5;1" dur="4s" repeatCount="indefinite"/></rect>`;
    });

const G5_TABLES = ['g5m-place-value', 'g5m-length-table', 'g5m-capacity-table', 'g5m-mass-table', 'g5m-area-table', 'g5m-volume-table', 'g5m-time-table'];

export function animateGrade5(key: string, html: string): string {
  if (G5_TABLES.includes(key)) return html.replace('class="g5m-table', 'class="g5m-table g5m-anim');
  if (key === 'g5m-equivalences' || key === 'g5m-trade') return html.replace('class="g5m-two"', 'class="g5m-two g5m-boxes"');
  if (key === 'g5m-area-formulas') return html.replace('class="g5m-table g5m-formulas"', 'class="g5m-table g5m-formulas g5m-rows"');
  if (key === 'g5m-solids') return html.replace(/(<svg[^>]*>)([\s\S]*)(<\/svg>)/, '$1<g class="float">$2</g>$3');
  if (key === 'g5m-bar-chart') return insertBeforeEnd(growBars(html, '70', (_y, _h) => 190), '');

  let add = '';
  switch (key) {
    case 'g5m-number-line':
      add = `<circle cy="60" r="8" fill="var(--gold)" stroke="#fff" stroke-width="2"><animate attributeName="cx" values="40;600;600;40;40" keyTimes="0;.45;.5;.95;1" dur="9s" repeatCount="indefinite"/></circle>`;
      break;
    case 'g5m-fraction-bar':
      add = [0, 1, 2].map(i => `<rect x="${60 + i * 130}" y="30" width="130" height="56" fill="var(--gold)" fill-opacity="0" stroke="#fff" stroke-width="2"><animate attributeName="fill-opacity" values="0;.55;.55;0" keyTimes="0;.15;.85;1" dur="6s" begin="${i * 0.8}s" repeatCount="indefinite"/></rect>`).join('');
      break;
    case 'g5m-percent-grid':
      add = Array.from({ length: 25 }, (_, i) => `<rect x="${220 + (i % 10) * 20}" y="${10 + Math.floor(i / 10) * 20}" width="18" height="18" rx="2" fill="var(--ember)" fill-opacity="0"><animate attributeName="fill-opacity" values="0;.85;.85;0" keyTimes="0;.05;.85;1" dur="7s" begin="${(i * 0.12).toFixed(2)}s" repeatCount="indefinite"/></rect>`).join('');
      break;
    case 'g5m-venn':
      add = [250, 390].map((cx, i) => `<ellipse cx="${cx}" cy="110" rx="150" ry="90" fill="none" stroke="#fff" stroke-width="3.5" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;.3333" dur="4.5s" begin="${i * 1.5}s" repeatCount="indefinite"/></ellipse>`).join('');
      break;
    case 'g5m-cartesian':
      add = dot('M120 260 H240 V60', 4, 0, '#ffd166', 6);
      break;
    case 'g5m-angles':
      add = [45, 90, 135, 180].map((deg, i) => sweepRay(80 + i * 150, 130, 60, 0, deg, '#ffd166', 5)).join('');
      break;
    case 'g5m-regular-polygon': {
      const pts = Array.from({ length: 6 }, (_, i) => `${(320 + 90 * Math.cos((Math.PI / 3) * i)).toFixed(1)} ${(110 + 90 * Math.sin((Math.PI / 3) * i)).toFixed(1)}`);
      add = dot(`M${pts.join(' L')} Z`, 6, 0, '#ffd166', 5.5) + ring(320, 110, 4, 22, '#ffd166');
      break;
    }
    case 'g5m-circle':
      add = dot(circlePath(220, 110, 90), 6, 0, '#ffd166', 5.5)
        + `<line x1="220" y1="110" x2="310" y2="110" stroke="#fff" stroke-width="2.5"><animateTransform attributeName="transform" type="rotate" from="0 220 110" to="360 220 110" dur="6s" repeatCount="indefinite"/></line>`;
      break;
    default:
      return html;
  }
  return insertBeforeEnd(html, add);
}

export const GRADE5_MOTION_KEYS = [...G5_TABLES, 'g5m-equivalences', 'g5m-trade', 'g5m-area-formulas', 'g5m-solids', 'g5m-bar-chart', 'g5m-number-line', 'g5m-fraction-bar', 'g5m-percent-grid', 'g5m-venn', 'g5m-cartesian', 'g5m-angles', 'g5m-regular-polygon', 'g5m-circle'];

/* ------------------------------------------------------------------ Ghana strand motifs */

export function animateGhanaMath(strand: string, html: string): string {
  switch (strand) {
    case 'number':
      return insertBeforeEnd(html, dot('M57 40 H186 H57', 4, 0, '#c9952b', 6));
    case 'algebra':
      // Rock the beam and pans around the pivot; the upright stays put.
      return html.replace(/(<line x1="60" y1="24" x2="220" y2="24"[\s\S]*?)(<\/svg>)/,
        '<g><animateTransform attributeName="transform" type="rotate" values="-3 140 24;3 140 24;-3 140 24" dur="3.4s" repeatCount="indefinite"/>$1</g>$2');
    case 'geometry':
      return insertBeforeEnd(html, dot(circlePath(225, 39, 24), 3.6, 0, '#a8432f', 4.5) + sweepRay(50, 64, 60, 0, 40, '#c9952b', 4, 2.5));
    case 'data':
      return insertBeforeEnd(growBars(html, '26', () => 66), '');
    case 'mastery':
      return html.replace(/<circle cx="(\d+)" cy="40" r="22"/g, (m, cx) => `<circle class="pulse" style="animation-delay:${(((+cx - 50) / 60) * 0.5).toFixed(1)}s" cx="${cx}" cy="40" r="22"`);
    default:
      return html;
  }
}
