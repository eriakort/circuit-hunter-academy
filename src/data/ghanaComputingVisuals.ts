import { C, T, anim, arrow, card, frame, showDuring } from './sciViz';

/**
 * Diagrams for the Ghana NaCCA SHS Computing pathway (English only, as all Ghana content is).
 * Same readable system as the redrawn maths and science diagrams: a 640-wide canvas, large text,
 * one idea each, and motion that shows the idea. Keys start with "ghc-".
 */
type Builder = () => string;

/** A dot that travels along a path forever; a negative begin keeps it from sitting at the origin. */
const flow = (path: string, dur: number, color: string, begin = 0, r = 8) =>
  `<circle r="${r}" fill="${color}" stroke="${C.text}" stroke-width="2"><animateMotion dur="${dur}s" begin="${begin > 0 ? begin - dur : begin}s" repeatCount="indefinite" path="${path}"/></circle>`;

const box = (x: number, y: number, w: number, h: number, color: string, label: string, size = 24, sub = '') =>
  `${card(x, y, w, h, color, 0.14)}${T(x + w / 2, y + h / 2 + (sub ? -2 : 8), label, { size, fill: color, weight: 800 })}${sub ? T(x + w / 2, y + h / 2 + 24, sub, { size: 20, fill: C.muted }) : ''}`;


/** A highlight ring that appears around part i of n in turn. */
const hlRing = (x: number, y: number, w: number, h: number, i: number, n: number, dur = 8, r = 14) =>
  `<rect x="${x - 5}" y="${y - 5}" width="${w + 10}" height="${h + 10}" rx="${r}" fill="none" stroke="${C.sakura}" stroke-width="5" opacity="0">${anim('opacity', '0;0;1;1;0;0', dur, 0, `keyTimes="0;${(i / n).toFixed(3)};${((i + 0.05) / n).toFixed(3)};${((i + 0.85) / n).toFixed(3)};${((i + 0.9) / n).toFixed(3)};1"`)}</rect>`;

export const GHANA_COMPUTING_BUILDERS: Record<string, Builder> = {
  /* Information as bit patterns: the letter A is 01000001 = 65 */
  'ghc-bits': () => {
    const bits = [0, 1, 0, 0, 0, 0, 0, 1];
    const place = [128, 64, 32, 16, 8, 4, 2, 1];
    const cells = bits.map((b, i) => {
      const x = 52 + i * 70;
      return `<rect x="${x}" y="104" width="58" height="72" rx="10" fill="${b ? C.gold : C.panel}" fill-opacity="${b ? 0.85 : 1}" stroke="${b ? C.gold : C.line}" stroke-width="3"/>${T(x + 29, 154, String(b), { size: 36, weight: 800, fill: b ? '#1b1b1b' : C.muted, extra: 'style="stroke:none"' })}${T(x + 29, 204, String(place[i]), { size: 20, fill: C.muted })}`;
    }).join('');
    const scan = `<rect y="98" width="70" height="84" rx="12" fill="none" stroke="${C.sakura}" stroke-width="5" opacity="0"><animate attributeName="x" values="46;116;186;256;326;396;466;536" dur="8s" calcMode="discrete" repeatCount="indefinite"/><animate attributeName="opacity" values="1;1" dur="8s" repeatCount="indefinite"/></rect>`;
    return frame('A byte is eight bits',
      `${T(320, 46, 'One byte = 8 bits', { size: 28, weight: 800, fill: C.data })}${T(320, 82, 'every bit is 0 or 1', { size: 22, fill: C.muted })}
       ${cells}${scan}
       ${T(320, 252, '64 + 1 = 65', { size: 30, weight: 800, fill: C.good })}
       ${T(320, 290, '65 is the code for the letter A', { size: 24, weight: 700 })}`,
      'Text, numbers, pictures and sound are all bit patterns', 346);
  },

  /* The memory ladder: registers, cache, RAM, storage */
  'ghc-memory': () => {
    const rows: Array<[string, string, string, number]> = [
      ['Registers', 'fastest · tiniest', C.ember, 150],
      ['Cache', 'very fast · small', C.gold, 200],
      ['RAM', 'fast · medium', C.data, 250],
      ['Storage', 'slowest · largest', C.good, 300]
    ];
    const bars = rows.map(([name, note, col, ww], i) => {
      const y = 44 + i * 64;
      return `<rect x="40" y="${y}" width="${ww}" height="52" rx="12" fill="${col}" fill-opacity="0.2" stroke="${col}" stroke-width="3"/>${T(58, y + 33, name, { size: 24, fill: col, weight: 800, anchor: 'start' })}${T(40 + ww + 14, y + 33, note, { size: 20, fill: C.muted, anchor: 'start' })}`;
    }).join('');
    return frame('The memory ladder',
      `${T(40, 28, 'CPU ↑', { size: 22, fill: C.text, weight: 800, anchor: 'start' })}${bars}
       <path d="M608 270 V60" stroke="${C.muted}" stroke-width="5" stroke-linecap="round" fill="none"/><polygon points="608,40 598,62 618,62" fill="${C.muted}"/>${T(596, 28, 'faster', { size: 20, fill: C.muted, anchor: 'end' })}
       ${flow('M608 270 V62', 3, C.gold, 0)}${flow('M608 270 V62', 3, C.gold, 1.5)}`,
      'Cache keeps what you use most, close to the CPU', 346);
  },

  /* CPU parts and the three buses */
  'ghc-cpu': () =>
    frame('The CPU, memory and buses',
      `${card(34, 40, 330, 200, C.ember, 0.08)}${T(199, 72, 'CPU', { size: 26, fill: C.ember, weight: 800 })}
       ${box(54, 92, 130, 58, C.gold, 'CU', 26, 'controls')}${box(214, 92, 130, 58, C.data, 'ALU', 26, 'calculates')}${box(54, 168, 290, 56, C.good, 'Registers', 24, 'tiny, fastest storage')}
       ${box(470, 40, 140, 200, C.data, 'RAM', 28, 'memory')}
       <line x1="364" y1="92" x2="470" y2="92" stroke="${C.gold}" stroke-width="6"/><line x1="364" y1="140" x2="470" y2="140" stroke="${C.ember}" stroke-width="6"/><line x1="364" y1="188" x2="470" y2="188" stroke="${C.good}" stroke-width="6"/>
       ${T(417, 82, 'address', { size: 20, fill: C.gold })}${T(417, 130, 'data', { size: 20, fill: C.ember })}${T(417, 178, 'control', { size: 20, fill: C.good })}
       ${flow('M364 92 H470', 1.8, C.gold, 0)}${flow('M470 140 H364 H470', 3.2, C.ember, 0.4)}${flow('M364 188 H470', 2.2, C.good, 0.8)}`,
      'Buses carry addresses, data and control signals', 296),

  /* Fetch - decode - execute - store */
  'ghc-cycle': () => {
    const pts: Array<[number, number, string, string]> = [[320, 50, '1 Fetch', C.gold], [506, 150, '2 Decode', C.data], [320, 250, '3 Execute', C.ember], [134, 150, '4 Store', C.good]];
    const nodes = pts.map(([x, y, name, col]) => `${card(x - 68, y - 28, 136, 56, col, 0.16)}${T(x, y + 9, name, { size: 24, fill: col, weight: 800 })}`).join('');
    const ring = 'M320 56 A150 94 0 0 1 470 150 A150 94 0 0 1 320 244 A150 94 0 0 1 170 150 A150 94 0 0 1 320 56';
    return frame('The machine cycle',
      `<path d="${ring}" fill="none" stroke="${C.line}" stroke-width="4" stroke-dasharray="8 8"/>
       ${nodes}
       ${T(320, 146, 'clock', { size: 24, fill: C.muted, weight: 700 })}${T(320, 178, 'tick · tick', { size: 22, fill: C.muted })}
       ${flow(ring, 8, C.sakura, 0, 10)}`,
      'The CPU repeats this cycle for every instruction', 340);
  },

  /* Von Neumann and Harvard */
  'ghc-architectures': () =>
    frame('Von Neumann and Harvard',
      `${card(24, 30, 290, 262, C.data, 0.08)}${T(169, 62, 'Von Neumann', { size: 26, fill: C.data, weight: 800 })}
       ${box(104, 82, 130, 52, C.ember, 'CPU', 24)}${box(84, 214, 170, 66, C.gold, 'One memory', 22, 'program + data')}
       <line x1="169" y1="134" x2="169" y2="214" stroke="${C.text}" stroke-width="6"/>${flow('M169 134 V214 V134', 2.4, C.sakura, 0)}${T(190, 180, 'one bus', { size: 20, fill: C.muted, anchor: 'start' })}
       ${card(326, 30, 290, 262, C.good, 0.08)}${T(471, 62, 'Harvard', { size: 26, fill: C.good, weight: 800 })}
       ${box(406, 82, 130, 52, C.ember, 'CPU', 24)}${box(338, 214, 126, 66, C.gold, 'Program', 22, 'memory')}${box(478, 214, 126, 66, C.data, 'Data', 22, 'memory')}
       <line x1="440" y1="134" x2="402" y2="214" stroke="${C.text}" stroke-width="6"/><line x1="502" y1="134" x2="540" y2="214" stroke="${C.text}" stroke-width="6"/>${flow('M440 134 L402 214 L440 134', 2.4, C.sakura, 0)}${flow('M502 134 L540 214 L502 134', 2.4, C.sakura, 1)}`,
      'Harvard keeps instructions and data apart', 342),

  /* Five kinds of hardware */
  'ghc-hardware': () => {
    const cols: Array<[string, string, string]> = [['Input', 'keyboard · mouse · mic', C.data], ['Processing', 'CPU · GPU', C.ember], ['Output', 'monitor · printer', C.good]];
    const body = cols.map(([name, ex, col], i) => {
      const x = 28 + i * 204;
      return `${card(x, 40, 176, 130, col, 0.12)}${T(x + 88, 88, name, { size: 26, fill: col, weight: 800 })}${T(x + 88, 124, ex.split(' · ')[0], { size: 22 })}${T(x + 88, 152, ex.split(' · ').slice(1).join(' · '), { size: 22, fill: C.muted })}${hlRing(x, 40, 176, 130, i, 5, 10)}`;
    }).join('');
    return frame('Kinds of computer hardware',
      `${body}${arrow(206, 105, 230, 105, C.muted, 4)}${arrow(410, 105, 434, 105, C.muted, 4)}
       ${card(28, 194, 280, 86, C.gold, 0.12)}${T(168, 232, 'Storage', { size: 26, fill: C.gold, weight: 800 })}${T(168, 262, 'SSD · hard disk · flash drive', { size: 20, fill: C.muted })}${hlRing(28, 194, 280, 86, 3, 5, 10)}
       ${card(332, 194, 280, 86, C.sakura, 0.12)}${T(472, 232, 'Communication', { size: 26, fill: C.sakura, weight: 800 })}${T(472, 262, 'router · modem · Wi-Fi card', { size: 20, fill: C.muted })}${hlRing(332, 194, 280, 86, 4, 5, 10)}`,
      'Every device has one of these five jobs', 340);
  },

  /* Layers of software */
  'ghc-software': () =>
    frame('Types of software',
      `${box(60, 236, 520, 54, C.muted, 'Hardware', 24)}${hlRing(60, 236, 520, 54, 0, 3, 7)}
       ${box(60, 156, 520, 62, C.ember, 'System software', 24, 'operating system · drivers · utilities')}${hlRing(60, 156, 520, 62, 1, 3, 7)}
       ${box(40, 62, 262, 74, C.data, 'Application software', 21, 'Word · browser · games')}${box(338, 62, 262, 74, C.good, 'Programming software', 21, 'editors · compilers')}${hlRing(40, 62, 560, 74, 2, 3, 7)}
       <path d="M180 136 V156" stroke="${C.text}" stroke-width="5"/><path d="M460 136 V156" stroke="${C.text}" stroke-width="5"/><path d="M320 218 V236" stroke="${C.text}" stroke-width="5"/>`,
      'The OS sits between programs and hardware', 342),

  /* LAN, MAN, WAN */
  'ghc-network': () => {
    const nets: Array<[string, string, string, string, number]> = [['LAN', 'one room or building', 'school computer lab', C.data, 20], ['MAN', 'a town or city', 'a city council', C.gold, 28], ['WAN', 'many countries', 'the Internet', C.ember, 38]];
    const body = nets.map(([abbr, area, ex, col, r], i) => {
      const cx = 108 + i * 212;
      return `<circle cx="${cx}" cy="108" r="${r + 22}" fill="${col}" fill-opacity="0.12" stroke="${col}" stroke-width="4"/>${[[-1, -0.3], [1, -0.3], [0, 0.9]].map(([dx, dy]) => `<circle cx="${cx + dx * r * 0.9}" cy="${108 + dy * r * 0.9}" r="6" fill="${col}"/>`).join('')}
        ${T(cx, 196, abbr, { size: 30, fill: col, weight: 800 })}${T(cx, 226, area, { size: 20, fill: C.text })}${T(cx, 254, ex, { size: 20, fill: C.muted })}`;
    }).join('');
    return frame('Types of network',
      `${body}${flow('M108 108 H320 H532', 5, C.sakura, 0)}${flow('M532 108 H320 H108', 5, C.gold, 2.5)}`,
      'The bigger the area, the bigger the network', 332);
  },

  /* Array, stack, queue */
  'ghc-structures': () => {
    const arr = [0, 1, 2, 3].map(i => `<rect x="${28 + i * 56}" y="86" width="50" height="50" rx="8" fill="${C.data}" fill-opacity="0.2" stroke="${C.data}" stroke-width="3"/>${T(53 + i * 56, 120, ['A', 'B', 'C', 'D'][i], { size: 24, weight: 800 })}${T(53 + i * 56, 160, String(i), { size: 20, fill: C.muted })}`).join('');
    const stack = [0, 1].map(i => `<rect x="268" y="${180 - i * 46}" width="86" height="40" rx="8" fill="${C.gold}" fill-opacity="0.22" stroke="${C.gold}" stroke-width="3"/>${T(311, 208 - i * 46, ['1', '2'][i], { size: 22, weight: 800 })}`).join('');
    const queue = [0, 1, 2].map(i => `<g>${i === 0 ? `<animateTransform attributeName="transform" type="translate" values="0 0;0 0;-50 0;-50 0" keyTimes="0;0.5;0.7;1" dur="5s" repeatCount="indefinite"/>${anim('opacity', '1;1;0;0', 5, 0, 'keyTimes="0;0.5;0.7;1"')}` : ''}<rect x="${420 + i * 62}" y="100" width="54" height="40" rx="8" fill="${C.good}" fill-opacity="0.2" stroke="${C.good}" stroke-width="3"/>${T(447 + i * 62, 128, ['1', '2', '3'][i], { size: 22, weight: 800 })}</g>`).join('');
    return frame('Common data structures',
      `${T(110, 46, 'Array', { size: 26, fill: C.data, weight: 800 })}${arr}${T(110, 200, 'numbered places', { size: 20, fill: C.muted })}
       ${T(311, 46, 'Stack', { size: 26, fill: C.gold, weight: 800 })}${stack}
       <g opacity="0">${anim('opacity', '0;0;1;1;0;0', 5, 0, 'keyTimes="0;0.15;0.3;0.7;0.85;1"')}<g><animateTransform attributeName="transform" type="translate" values="0 -40;0 -40;0 0;0 0;0 -40;0 -40" keyTimes="0;0.15;0.3;0.7;0.85;1" dur="5s" repeatCount="indefinite"/><rect x="268" y="88" width="86" height="40" rx="8" fill="${C.gold}" fill-opacity="0.6" stroke="${C.text}" stroke-width="3"/>${T(311, 116, '3', { size: 22, weight: 800 })}</g></g>
       ${T(311, 244, 'last in, first out', { size: 20, fill: C.muted })}
       ${T(517, 46, 'Queue', { size: 26, fill: C.good, weight: 800 })}${queue}${T(447, 170, 'front', { size: 20, fill: C.muted })}${T(571, 170, 'back', { size: 20, fill: C.muted })}${T(517, 244, 'first in, first out', { size: 20, fill: C.muted })}`,
      'Each structure organises data in its own way', 332);
  },

  /* Program development cycle */
  'ghc-devcycle': () => {
    const steps: Array<[string, string, string, string]> = [['Analysis', 'understand', 'the problem', C.data], ['Design', 'plan the', 'steps', C.gold], ['Coding', 'write the', 'program', C.ember], ['Testing', 'check', 'and fix', C.good]];
    const body = steps.map(([n, a, b, col], i) => `${card(24 + i * 152, 70, 136, 110, col, 0.14)}${T(92 + i * 152, 114, n, { size: 26, fill: col, weight: 800 })}${T(92 + i * 152, 146, a, { size: 20, fill: C.muted })}${T(92 + i * 152, 168, b, { size: 20, fill: C.muted })}${i < 3 ? arrow(160 + i * 152, 125, 176 + i * 152, 125, C.muted, 4) : ''}${hlRing(24 + i * 152, 70, 136, 110, i, 4, 8)}`).join('');
    return frame('The program development cycle',
      `${body}
       <path d="M544 190 V236 H92 V196" fill="none" stroke="${C.muted}" stroke-width="4" stroke-dasharray="8 8"/><polygon points="92,186 82,204 102,204" fill="${C.muted}"/>${T(320, 226, 'bugs found? go back and improve', { size: 22, fill: C.muted, weight: 700 })}`,
      'Testing often sends you back to an earlier step', 330);
  },

  /* A flowchart for adding two numbers */
  'ghc-flowchart': () => {
    const cx = 200;
    const shapes = `
      <rect x="${cx - 70}" y="22" width="140" height="42" rx="21" fill="${C.good}" fill-opacity="0.18" stroke="${C.good}" stroke-width="3"/>${T(cx, 51, 'Start', { size: 22, weight: 800 })}
      <polygon points="${cx - 62},84 ${cx + 78},84 ${cx + 62},128 ${cx - 78},128" fill="${C.data}" fill-opacity="0.18" stroke="${C.data}" stroke-width="3"/>${T(cx, 114, 'Input a, b', { size: 22, weight: 800 })}
      <rect x="${cx - 80}" y="148" width="160" height="46" rx="6" fill="${C.ember}" fill-opacity="0.18" stroke="${C.ember}" stroke-width="3"/>${T(cx, 179, 'sum = a + b', { size: 22, weight: 800 })}
      <polygon points="${cx - 62},214 ${cx + 78},214 ${cx + 62},258 ${cx - 78},258" fill="${C.data}" fill-opacity="0.18" stroke="${C.data}" stroke-width="3"/>${T(cx, 244, 'Output sum', { size: 22, weight: 800 })}
      <rect x="${cx - 70}" y="278" width="140" height="42" rx="21" fill="${C.good}" fill-opacity="0.18" stroke="${C.good}" stroke-width="3"/>${T(cx, 307, 'End', { size: 22, weight: 800 })}
      <path d="M${cx} 64 V84 M${cx} 128 V148 M${cx} 194 V214 M${cx} 258 V278" stroke="${C.text}" stroke-width="4" fill="none"/>`;
    const legend: Array<[string, string, string]> = [['Oval', 'start or end', C.good], ['Parallelogram', 'input or output', C.data], ['Rectangle', 'a process or step', C.ember], ['Diamond', 'a decision (yes / no)', C.gold]];
    const leg = legend.map(([n, d, col], i) => `<circle cx="396" cy="${70 + i * 62}" r="9" fill="${col}"/>${T(416, 76 + i * 62, n, { size: 22, fill: col, weight: 800, anchor: 'start' })}${T(416, 102 + i * 62, d, { size: 20, fill: C.muted, anchor: 'start' })}`).join('');
    return frame('A flowchart for adding two numbers', `${shapes}${leg}${hlRing(cx - 70, 22, 140, 42, 0, 5, 10, 21)}${hlRing(cx - 78, 84, 156, 44, 1, 5, 10, 10)}${hlRing(cx - 80, 148, 160, 46, 2, 5, 10, 8)}${hlRing(cx - 78, 214, 156, 44, 3, 5, 10, 10)}${hlRing(cx - 70, 278, 140, 42, 4, 5, 10, 21)}`, '', 340);
  },

  /* A web page wireframe */
  'ghc-webpage': () => {
    const hot = (x: number, y: number, w: number, h: number, i: number) => `<rect x="${x - 5}" y="${y - 5}" width="${w + 10}" height="${h + 10}" rx="12" fill="none" stroke="${C.sakura}" stroke-width="5" opacity="0">${anim('opacity', '0;0;1;1;0;0', 10, 0, `keyTimes="0;${(0.02 + i * 0.18).toFixed(2)};${(0.04 + i * 0.18).toFixed(2)};${(0.15 + i * 0.18).toFixed(2)};${(0.17 + i * 0.18).toFixed(2)};1"`)}</rect>`;
    return frame('A web page wireframe',
      `<rect x="30" y="28" width="360" height="270" rx="12" fill="${C.panel}" stroke="${C.muted}" stroke-width="3"/>
       <rect x="44" y="40" width="332" height="40" rx="8" fill="${C.data}" fill-opacity="0.2" stroke="${C.data}" stroke-width="2"/>${T(58, 68, 'Logo', { size: 20, weight: 800, anchor: 'start' })}${T(140, 68, 'Home', { size: 20, anchor: 'start', fill: C.gold })}${T(208, 68, 'About', { size: 20, anchor: 'start', fill: C.gold })}${T(280, 68, 'Contact', { size: 20, anchor: 'start', fill: C.gold })}
       ${T(60, 116, 'Heading', { size: 26, weight: 800, anchor: 'start', fill: C.ember })}
       <rect x="60" y="134" width="170" height="10" rx="5" fill="${C.line}"/><rect x="60" y="154" width="150" height="10" rx="5" fill="${C.line}"/><rect x="60" y="174" width="170" height="10" rx="5" fill="${C.line}"/>${T(60, 214, 'Read more →', { size: 20, anchor: 'start', fill: C.data, weight: 800 })}
       <rect x="256" y="104" width="112" height="100" rx="8" fill="${C.good}" fill-opacity="0.18" stroke="${C.good}" stroke-width="3"/><path d="M262 198 L290 160 L314 186 L334 166 L362 198 Z" fill="${C.good}" fill-opacity="0.5"/>
       <rect x="44" y="246" width="332" height="38" rx="8" fill="${C.muted}" fill-opacity="0.15" stroke="${C.muted}" stroke-width="2"/>${T(210, 272, 'Footer', { size: 20, fill: C.muted })}
       ${hot(44, 40, 332, 40, 0)}${hot(60, 96, 120, 26, 1)}${hot(60, 134, 170, 52, 2)}${hot(256, 104, 112, 100, 3)}${hot(60, 198, 100, 22, 4)}
       ${T(520, 78, 'Menu', { size: 22, weight: 800, fill: C.data })}${T(520, 118, 'Heading', { size: 22, weight: 800, fill: C.ember })}${T(520, 158, 'Text', { size: 22, weight: 800, fill: C.muted })}${T(520, 198, 'Image', { size: 22, weight: 800, fill: C.good })}${T(520, 238, 'Link', { size: 22, weight: 800, fill: C.data })}`,
      'A wireframe plans where each part of the page goes', 342);
  },

  /* ---- SHS 2 ---- */

  /* AND, OR and NOT gates with their truth tables */
  'ghc-gates': () => {
    const cols = [
      { x: 18, name: 'AND', col: C.data, rows: [[0, 0, 0], [0, 1, 0], [1, 0, 0], [1, 1, 1]], head: 'A  B  Q' },
      { x: 224, name: 'OR', col: C.gold, rows: [[0, 0, 0], [0, 1, 1], [1, 0, 1], [1, 1, 1]], head: 'A  B  Q' },
      { x: 430, name: 'NOT', col: C.ember, rows: [[0, 1], [1, 0]], head: 'A  Q' }
    ];
    const shape = (name: string, x: number, col: string) => {
      const y = 62;
      if (name === 'AND') return `<path d="M${x + 36} ${y} h36 a30 30 0 0 1 0 60 h-36 z" fill="${col}" fill-opacity="0.18" stroke="${col}" stroke-width="4"/><path d="M${x + 6} ${y + 16} h30 M${x + 6} ${y + 44} h30 M${x + 102} ${y + 30} h24" stroke="${col}" stroke-width="4" fill="none"/>`;
      if (name === 'OR') return `<path d="M${x + 36} ${y} q40 0 66 30 q-26 30 -66 30 q18 -30 0 -60 z" fill="${col}" fill-opacity="0.18" stroke="${col}" stroke-width="4"/><path d="M${x + 6} ${y + 16} h34 M${x + 6} ${y + 44} h34 M${x + 102} ${y + 30} h24" stroke="${col}" stroke-width="4" fill="none"/>`;
      return `<path d="M${x + 36} ${y} l50 30 l-50 30 z" fill="${col}" fill-opacity="0.18" stroke="${col}" stroke-width="4"/><circle cx="${x + 92}" cy="${y + 30}" r="7" fill="${C.panel}" stroke="${col}" stroke-width="4"/><path d="M${x + 6} ${y + 30} h30 M${x + 99} ${y + 30} h27" stroke="${col}" stroke-width="4" fill="none"/>`;
    };
    const body = cols.map(c => {
      const two = c.rows[0].length === 3;
      const heads = two ? ['A', 'B', 'Q'] : ['A', 'Q'];
      const xs = two ? [c.x + 28, c.x + 78, c.x + 128] : [c.x + 48, c.x + 108];
      const hd = heads.map((h, i) => T(xs[i], 178, h, { size: 22, weight: 800, fill: c.col })).join('');
      const rows = c.rows.map((r, ri) => `<rect x="${c.x + 6}" y="${190 + ri * 32}" width="150" height="30" rx="6" fill="${r[r.length - 1] ? c.col : C.panel}" fill-opacity="${r[r.length - 1] ? 0.22 : 0.5}"/>` + r.map((v, i) => T(xs[i], 213 + ri * 32, String(v), { size: 22, weight: 700 })).join('')).join('');
      return `${T(c.x + 81, 44, c.name, { size: 28, weight: 800, fill: c.col })}${shape(c.name, c.x, c.col)}${hd}${rows}`;
    }).join('');
    return frame('Logic gates and truth tables', `${body}${hlRing(24, 188, 150, 30, 0, 4, 8, 8)}${hlRing(24, 220, 150, 30, 1, 4, 8, 8)}${hlRing(24, 252, 150, 30, 2, 4, 8, 8)}${hlRing(24, 284, 150, 30, 3, 4, 8, 8)}`, 'AND needs both inputs. OR needs one. NOT flips.', 372);
  },

  /* Adding two binary numbers with carries: 0101 + 0011 = 1000 */
  'ghc-binadd': () => {
    const a = [0, 1, 0, 1], b = [0, 0, 1, 1], sum = [1, 0, 0, 0], carry = [1, 1, 1, 0];
    const xs = [250, 320, 390, 460];
    const row = (vals: number[], y: number, col: string, size = 34) => vals.map((v, i) => T(xs[i], y, String(v), { size, weight: 800, fill: col })).join('');
    return frame('Adding in binary',
      `${T(104, 78, 'carry', { size: 22, fill: C.muted })}${row(carry, 78, C.gold, 28)}
       ${row(a, 132, C.data)}${T(190, 188, '+', { size: 34, weight: 800, fill: C.muted })}${row(b, 188, C.data)}
       <line x1="210" y1="206" x2="500" y2="206" stroke="${C.text}" stroke-width="4"/>
       ${row(sum, 252, C.good)}${T(104, 132, '5', { size: 24, fill: C.muted })}${T(104, 188, '3', { size: 24, fill: C.muted })}${T(104, 252, '8', { size: 24, fill: C.good, weight: 800 })}
       ${[3, 2, 1, 0].map((col, i) => hlRing(xs[col] - 28, 56, 56, 216, i, 4, 8, 12)).join('')}
       ${T(560, 252, '1+1=10', { size: 22, fill: C.gold, weight: 800 })}`,
      'Start at the right. 1 + 1 = 10, so write 0 and carry 1', 316);
  },

  /* A barcode and a QR code with scanning lines */
  'ghc-barcode': () => {
    const widths = [4, 2, 6, 2, 2, 4, 2, 6, 4, 2, 2, 6, 2, 4, 2, 4, 6, 2].map(w => w * 3);
    let x = 36;
    const bars = widths.map((w, i) => { const r = i % 2 === 0 ? `<rect x="${x}" y="70" width="${w}" height="120" fill="${C.text}"/>` : ''; x += w; return r; }).join('');
    const grid = ['111010111', '100010101', '101110111', '000000100', '110101011', '010101000', '111010101', '101011010', '111000111'];
    const qr = grid.map((r, ry) => r.split('').map((v, rx) => (v === '1' ? `<rect x="${390 + rx * 20}" y="${64 + ry * 20}" width="19" height="19" fill="${C.text}"/>` : '')).join('')).join('');
    return frame('Barcode and QR code',
      `${T(130, 46, 'Barcode', { size: 28, weight: 800, fill: C.data })}${bars}
       <rect x="24" y="64" width="212" height="132" rx="8" fill="none" stroke="${C.line}" stroke-width="3"/>
       <rect x="24" y="64" width="4" height="132" fill="${C.ember}" opacity="0.9"><animate attributeName="x" values="24;232;24" dur="4s" repeatCount="indefinite"/></rect>
       ${T(130, 226, 'lines, read side to side', { size: 20, fill: C.muted })}
       ${T(480, 46, 'QR code', { size: 28, weight: 800, fill: C.good })}${qr}
       <rect x="384" y="58" width="192" height="4" fill="${C.ember}" opacity="0.9"><animate attributeName="y" values="58;240;58" dur="4s" repeatCount="indefinite"/></rect>
       ${T(480, 276, 'squares, read in two directions', { size: 20, fill: C.muted })}
       ${T(130, 262, 'stores a number', { size: 20, fill: C.text })}`,
      'A scanner reads the pattern and finds the data', 322);
  },

  /* Star, bus, ring and mesh topologies */
  'ghc-topologies': () => {
    const cy = 112;
    const node = (x: number, y: number, col: string) => `<circle cx="${x}" cy="${y}" r="11" fill="${col}" fill-opacity="0.3" stroke="${col}" stroke-width="3"/>`;
    const cx = (i: number) => 80 + i * 160;
    const star = (() => { const x = cx(0); const pts: Array<[number, number]> = [[-46, -42], [46, -42], [-46, 42], [46, 42]];
      return `${pts.map(([dx, dy]) => `<line x1="${x}" y1="${cy}" x2="${x + dx}" y2="${cy + dy}" stroke="${C.data}" stroke-width="4"/>${node(x + dx, cy + dy, C.data)}`).join('')}<rect x="${x - 13}" y="${cy - 13}" width="26" height="26" rx="5" fill="${C.gold}" stroke="${C.text}" stroke-width="2"/>${flow(`M${x} ${cy} L${x + 46} ${cy - 42}`, 2.4, C.sakura, 0, 6)}${flow(`M${x} ${cy} L${x - 46} ${cy + 42}`, 2.4, C.sakura, 1.2, 6)}`; })();
    const bus = (() => { const x = cx(1);
      return `<line x1="${x - 64}" y1="${cy}" x2="${x + 64}" y2="${cy}" stroke="${C.gold}" stroke-width="6"/>${[-40, 40].map(dx => `<line x1="${x + dx}" y1="${cy}" x2="${x + dx}" y2="${cy - 40}" stroke="${C.gold}" stroke-width="4"/>${node(x + dx, cy - 40, C.gold)}<line x1="${x + dx}" y1="${cy}" x2="${x + dx}" y2="${cy + 40}" stroke="${C.gold}" stroke-width="4"/>${node(x + dx, cy + 40, C.gold)}`).join('')}${flow(`M${x - 64} ${cy} H${x + 64}`, 3, C.sakura, 0, 6)}`; })();
    const ring = (() => { const x = cx(2); const r = 48;
      return `<circle cx="${x}" cy="${cy}" r="${r}" fill="none" stroke="${C.ember}" stroke-width="5"/>${[[0, -r], [r, 0], [0, r], [-r, 0]].map(([dx, dy]) => node(x + dx, cy + dy, C.ember)).join('')}${flow(`M${x} ${cy - r} A${r} ${r} 0 1 1 ${x} ${cy + r} A${r} ${r} 0 1 1 ${x} ${cy - r}`, 4, C.sakura, 0, 6)}`; })();
    const mesh = (() => { const x = cx(3); const d = 44; const p: Array<[number, number]> = [[-d, -d], [d, -d], [d, d], [-d, d]];
      let l = ''; for (let i = 0; i < 4; i++) for (let j = i + 1; j < 4; j++) l += `<line x1="${x + p[i][0]}" y1="${cy + p[i][1]}" x2="${x + p[j][0]}" y2="${cy + p[j][1]}" stroke="${C.good}" stroke-width="3"/>`;
      return `${l}${p.map(([dx, dy]) => node(x + dx, cy + dy, C.good)).join('')}${flow(`M${x - d} ${cy - d} L${x + d} ${cy + d}`, 2.6, C.sakura, 0, 6)}`; })();
    const lab = [['Star', 'one hub', C.data], ['Bus', 'one cable', C.gold], ['Ring', 'a closed loop', C.ember], ['Mesh', 'all linked', C.good]] as const;
    return frame('Network topologies',
      `${star}${bus}${ring}${mesh}${lab.map(([n, d, col], i) => `${T(cx(i), 214, n, { size: 26, weight: 800, fill: col })}${T(cx(i), 244, d, { size: 20, fill: C.muted })}`).join('')}`,
      'A topology is the shape in which devices are joined', 300);
  },

  /* Two linked database tables */
  'ghc-database': () => {
    const cell = (x: number, y: number, w: number, t: string, head = false, col = C.text) => `<rect x="${x}" y="${y}" width="${w}" height="34" fill="${head ? C.data : C.panel}" fill-opacity="${head ? 0.25 : 0.6}" stroke="${C.line}" stroke-width="2"/>${T(x + w / 2, y + 24, t, { size: 22, weight: head ? 800 : 600, fill: head ? C.data : col })}`;
    const st = [['1', 'Ama', 'A'], ['2', 'Kofi', 'B'], ['3', 'Esi', 'A']];
    const cl = [['A', 'Science'], ['B', 'Arts']];
    const t1 = `${T(150, 44, 'Students', { size: 26, weight: 800, fill: C.data })}${['ID', 'Name', 'Class'].map((h, i) => cell(20 + i * 96, 60, 96, h, true)).join('')}${st.map((r, ri) => r.map((v, i) => cell(20 + i * 96, 94 + ri * 34, 96, v)).join('')).join('')}`;
    const t2 = `${T(500, 44, 'Classes', { size: 26, weight: 800, fill: C.good })}${['Class', 'Subject'].map((h, i) => cell(396 + i * 112, 60, 112, h, true)).join('')}${cl.map((r, ri) => r.map((v, i) => cell(396 + i * 112, 94 + ri * 34, 112, v)).join('')).join('')}`;
    const tags = `${T(68, 234, 'primary key', { size: 20, fill: C.gold, weight: 800 })}<path d="M68 200 V214" stroke="${C.gold}" stroke-width="3"/>${T(260, 234, 'foreign key', { size: 20, fill: C.ember, weight: 800 })}<path d="M260 200 V214" stroke="${C.ember}" stroke-width="3"/>${T(452, 234, 'primary key', { size: 20, fill: C.gold, weight: 800 })}<path d="M452 166 V214" stroke="${C.gold}" stroke-width="3"/>`;
    const link = `<path d="M308 111 H396" stroke="${C.ember}" stroke-width="5" stroke-dasharray="10 8" fill="none"/>${flow('M308 111 H396', 2.4, C.sakura, 0, 7)}`;
    return frame('Tables linked by a key', `${t1}${t2}${link}${tags}${hlRing(212, 94, 96, 102, 0, 1, 4, 6)}`, 'The foreign key links each student to a class', 318);
  },

  /* Machine learning: examples, train, model, predict */
  'ghc-learning': () => {
    const steps: Array<[string, string, string, string]> = [['Examples', 'with answers', 'labelled data', C.data], ['Train', 'find the', 'patterns', C.gold], ['Model', 'rules it', 'has learned', C.ember], ['Predict', 'answer new', 'cases', C.good]];
    const body = steps.map(([n, a, b, col], i) => `${card(18 + i * 154, 66, 136, 120, col, 0.14)}${T(86 + i * 154, 108, n, { size: 26, fill: col, weight: 800 })}${T(86 + i * 154, 142, a, { size: 20, fill: C.text })}${T(86 + i * 154, 168, b, { size: 20, fill: C.muted })}`).join('');
    return frame('How a computer learns',
      `${body}<path d="M154 126 H172 M308 126 H326 M462 126 H480" stroke="${C.text}" stroke-width="4" fill="none"/>
       <path d="M548 196 V246 H240 V196" fill="none" stroke="${C.muted}" stroke-width="4" stroke-dasharray="8 8"/><polygon points="240,188 230,206 250,206" fill="${C.muted}"/>${T(394, 236, 'wrong answers? train again', { size: 22, fill: C.muted })}
       ${flow('M30 52 H610', 6, C.sakura, 0)}`,
      'It improves by checking its answers against examples', 296);
  },

  /* Shopping on a web page */
  'ghc-ecommerce': () => {
    const steps: Array<[string, string, string]> = [['Browse', 'products', C.data], ['Cart', 'add items', C.gold], ['Checkout', 'address', C.ember], ['Pay', 'secure', C.good], ['Done', 'receipt', C.sakura]];
    const body = steps.map(([n, d, col], i) => `${card(14 + i * 124, 70, 112, 104, col, 0.14)}${T(70 + i * 124, 112, n, { size: 22, fill: col, weight: 800 })}${T(70 + i * 124, 144, d, { size: 20, fill: C.muted })}`).join('');
    return frame('A web shop, step by step',
      `${body}<path d="M126 122 H138 M250 122 H262 M374 122 H386 M498 122 H510" stroke="${C.text}" stroke-width="4" fill="none"/>
       ${flow('M20 192 H620', 6, C.sakura, 0)}
       <rect x="396" y="214" width="228" height="48" rx="12" fill="${C.good}" fill-opacity="0.16" stroke="${C.good}" stroke-width="3"/>${T(510, 245, 'https  secure page', { size: 22, fill: C.good, weight: 800 })}
       <path d="M44 232 h20 v16 h-20 z M48 232 v-6 a6 6 0 0 1 12 0 v6" fill="none" stroke="${C.muted}" stroke-width="3"/>${T(84, 248, 'login and card details are protected', { size: 20, fill: C.muted, anchor: 'start' })}`,
      'Good e-commerce pages are easy and safe to use', 322);
  },

  /* ---- SHS 3 ---- */

  /* Shift and rotate on an 8-bit register */
  'ghc-shiftrot': () => {
    const cell = (x: number, y: number, b: number, col: string) => `<rect x="${x}" y="${y}" width="40" height="42" rx="7" fill="${col}" fill-opacity="${b ? 0.3 : 0.1}" stroke="${col}" stroke-width="3"/>${T(x + 20, y + 30, String(b), { size: 24, weight: 800 })}`;
    const row = (y: number, bits: number[], col: string, mark = -1, markCol = '') => bits.map((b, i) => cell(150 + i * 46, y, b, i === mark ? markCol : col)).join('');
    const before = [1, 0, 1, 1, 0, 0, 1, 0];
    return frame('Shift and rotate left',
      `${T(24, 44, 'Shift left', { size: 24, weight: 800, fill: C.data, anchor: 'start' })}
       ${row(30, before, C.data, 0, C.ember)}${row(94, [0, 1, 1, 0, 0, 1, 0, 0], C.data, 7, C.gold)}
       <path d="M170 76 V90" stroke="${C.muted}" stroke-width="4"/>${T(120, 126, 'lost', { size: 20, fill: C.ember })}${T(540, 126, 'new 0', { size: 20, fill: C.gold })}
       ${T(24, 200, 'Rotate left', { size: 24, weight: 800, fill: C.good, anchor: 'start' })}
       ${row(186, before, C.good, 0, C.ember)}${row(250, [0, 1, 1, 0, 0, 1, 0, 1], C.good, 7, C.ember)}
       <path d="M170 184 C170 164 520 164 520 184" fill="none" stroke="${C.ember}" stroke-width="4" stroke-dasharray="8 6"/>${flow('M170 184 C170 164 520 164 520 184', 3, C.sakura, 0, 7)}
       ${T(120, 282, 'back in', { size: 20, fill: C.ember })}`,
      'A shift drops a bit. A rotate wraps it round to the other end', 330);
  },

  /* Installing an operating system */
  'ghc-osinstall': () => {
    const steps: Array<[string, string, string]> = [['Check', 'needs', C.data], ['Back up', 'your files', C.gold], ['Boot', 'from USB', C.ember], ['Install', 'to a drive', C.good], ['Set up', 'accounts', C.sakura]];
    const body = steps.map(([n, d, col], i) => `${card(14 + i * 124, 66, 112, 104, col, 0.14)}${T(70 + i * 124, 108, n, { size: 22, fill: col, weight: 800 })}${T(70 + i * 124, 140, d, { size: 20, fill: C.muted })}${hlRing(14 + i * 124, 66, 112, 104, i, 5, 10, 14)}`).join('');
    return frame('Installing an operating system',
      `${body}<path d="M126 118 H138 M250 118 H262 M374 118 H386 M498 118 H510" stroke="${C.text}" stroke-width="4" fill="none"/>
       <rect x="30" y="206" width="580" height="22" rx="11" fill="${C.panel}" stroke="${C.line}" stroke-width="3"/>
       <rect x="30" y="206" width="0" height="22" rx="11" fill="${C.good}" fill-opacity="0.8"><animate attributeName="width" values="0;580;580" keyTimes="0;0.9;1" dur="10s" repeatCount="indefinite"/></rect>
       ${T(320, 262, 'progress while the files are copied', { size: 22, fill: C.muted })}`,
      'Back up first. An install can erase a drive', 316);
  },

  /* Transmission media: cable, fibre, wireless */
  'ghc-media': () => {
    const cols = [
      { x: 20, name: 'Copper cable', note: 'cheap, common', col: C.gold, v: 0.55 },
      { x: 226, name: 'Fibre optic', note: 'fast, far', col: C.data, v: 0.95 },
      { x: 432, name: 'Wireless', note: 'no wires', col: C.good, v: 0.4 }
    ];
    const body = cols.map((c, i) => {
      const cx = c.x + 94;
      const icon = i === 0
        ? `<path d="M${cx - 60} 90 C${cx - 30} 70 ${cx - 30} 110 ${cx} 90 C${cx + 30} 70 ${cx + 30} 110 ${cx + 60} 90" fill="none" stroke="${c.col}" stroke-width="6"/><path d="M${cx - 60} 100 C${cx - 30} 80 ${cx - 30} 120 ${cx} 100 C${cx + 30} 80 ${cx + 30} 120 ${cx + 60} 100" fill="none" stroke="${C.ember}" stroke-width="6"/>`
        : i === 1
          ? `<line x1="${cx - 64}" y1="94" x2="${cx + 64}" y2="94" stroke="${c.col}" stroke-width="12" stroke-linecap="round" opacity="0.4"/><line x1="${cx - 64}" y1="94" x2="${cx + 64}" y2="94" stroke="${c.col}" stroke-width="4" stroke-linecap="round"/>`
          : [14, 28, 42].map(r => `<path d="M${cx - r} 128 A${r} ${r} 0 0 1 ${cx + r} 128" fill="none" stroke="${c.col}" stroke-width="5" opacity="0.8"/>`).join('') + `<circle cx="${cx}" cy="134" r="6" fill="${c.col}"/>`;
      return `${card(c.x, 40, 188, 250, c.col, 0.1)}${T(cx, 70, c.name, { size: 24, weight: 800, fill: c.col })}${icon}${flow(i === 2 ? `M${cx} 134 L${cx + 30} 98` : `M${cx - 64} ${i === 0 ? 94 : 94} H${cx + 64}`, 2.4, C.sakura, i * 0.6, 6)}
        ${T(cx, 160, 'speed', { size: 20, fill: C.muted })}<rect x="${c.x + 24}" y="172" width="140" height="16" rx="8" fill="${C.panel}" stroke="${C.line}" stroke-width="2"/><rect x="${c.x + 24}" y="172" width="${Math.round(140 * c.v)}" height="16" rx="8" fill="${c.col}" fill-opacity="0.85"/>
        ${T(cx, 232, c.note, { size: 22, fill: C.text, weight: 700 })}${T(cx, 266, i === 1 ? 'light in glass' : i === 0 ? 'electric signals' : 'radio waves', { size: 20, fill: C.muted })}`;
    }).join('');
    return frame('Transmission media', body, 'Bandwidth is how much data can move each second', 330);
  },

  /* Layers of protection around data */
  'ghc-security': () => {
    const layers: Array<[string, string]> = [['Strong passwords', C.gold], ['Updates and patches', C.data], ['Antivirus and firewall', C.good], ['Backups', C.sakura]];
    const body = layers.map(([n, col], i) => `${card(190, 40 + i * 62, 420, 50, col, 0.14)}${T(400, 73 + i * 62, n, { size: 24, weight: 800, fill: col })}<path d="M${150} ${52 + i * 62} l16 6 v14 c0 10 -8 16 -16 20 c-8 -4 -16 -10 -16 -20 v-14 z" fill="${col}" fill-opacity="0.3" stroke="${col}" stroke-width="3"/>`).join('');
    return frame('Layers of security',
      `${body}<circle r="11" fill="${C.ember}" stroke="${C.text}" stroke-width="2"><animateMotion dur="4s" repeatCount="indefinite" path="M40 44 L124 70"/>${anim('opacity', '1;1;0;0', 4, 0, 'keyTimes="0;0.7;0.8;1"')}</circle>
       ${T(60, 110, 'threat', { size: 20, fill: C.ember })}`,
      'No single layer is enough. Use all of them', 318);
  },

  /* An IPv4 address */
  'ghc-ipaddr': () => {
    const parts = ['192', '168', '1', '10'];
    const boxes = parts.map((p, i) => `${card(30 + i * 150, 60, 120, 76, i < 3 ? C.data : C.gold, 0.16)}${T(90 + i * 150, 110, p, { size: 38, weight: 800, fill: i < 3 ? C.data : C.gold })}${i < 3 ? T(150 + i * 150, 112, '.', { size: 40, weight: 800 }) : ''}${hlRing(30 + i * 150, 60, 120, 76, i, 4, 8, 14)}`).join('');
    return frame('An IP address',
      `${boxes}
       <path d="M36 158 H444" stroke="${C.data}" stroke-width="5"/>${T(240, 190, 'network: which network', { size: 22, fill: C.data, weight: 700 })}
       <path d="M486 158 H594" stroke="${C.gold}" stroke-width="5"/>${T(540, 190, 'device', { size: 22, fill: C.gold, weight: 700 })}
       ${T(320, 238, 'four numbers, each from 0 to 255', { size: 24, weight: 700 })}${T(320, 272, 'mask 255.255.255.0 marks the network part', { size: 20, fill: C.muted })}`,
      'The router gives each device an address on the network', 318);
  },

  /* Mass storage families */
  'ghc-storage': () => {
    const spin = (cx: number, cy: number, col: string, dur: number) => `<g><circle cx="${cx}" cy="${cy}" r="40" fill="${col}" fill-opacity="0.2" stroke="${col}" stroke-width="4"/><circle cx="${cx}" cy="${cy}" r="8" fill="${C.panel}" stroke="${col}" stroke-width="3"/><line x1="${cx}" y1="${cy - 36}" x2="${cx}" y2="${cy - 12}" stroke="${col}" stroke-width="5" stroke-linecap="round"/><animateTransform attributeName="transform" type="rotate" from="0 ${cx} ${cy}" to="360 ${cx} ${cy}" dur="${dur}s" repeatCount="indefinite"/></g>`;
    const chip = (cx: number, cy: number, col: string) => `<rect x="${cx - 40}" y="${cy - 32}" width="80" height="64" rx="8" fill="${col}" fill-opacity="0.2" stroke="${col}" stroke-width="4"/>${[0, 1, 2].map(k => `<rect x="${cx - 26 + k * 20}" y="${cy - 14}" width="14" height="28" rx="3" fill="${col}"><animate attributeName="opacity" values="0.3;1;0.3" dur="2.4s" begin="${-k * 0.8}s" repeatCount="indefinite"/></rect>`).join('')}`;
    const cols: Array<[string, string, string, string]> = [['Magnetic', 'HDD, tape', 'big and cheap', C.gold], ['Optical', 'CD, DVD', 'slow, portable', C.data], ['Solid-state', 'SSD, flash', 'fast, silent', C.good]];
    const body = cols.map(([n, ex, note, col], i) => { const cx = 106 + i * 214; return `${card(i * 214 + 12, 36, 188, 250, col, 0.1)}${T(cx, 68, n, { size: 26, weight: 800, fill: col })}${i === 2 ? chip(cx, 134, col) : spin(cx, 134, col, i === 0 ? 1.6 : 3)}${T(cx, 214, ex, { size: 22, weight: 700 })}${T(cx, 248, note, { size: 20, fill: C.muted })}`; }).join('');
    return frame('Mass storage media', body, 'Choose by capacity, speed and reliability', 322);
  },

  /* A small neural network */
  'ghc-neural': () => {
    const layers = [[3, 90], [4, 320], [2, 550]] as const;
    const ys = (n: number) => Array.from({ length: n }, (_, i) => 70 + ((i + 0.5) * 170) / n + (n === 2 ? 14 : 0));
    const nodes = layers.map(([n, x]) => ys(n).map(y => ({ x, y })));
    let links = '';
    for (let l = 0; l < 2; l++) nodes[l].forEach(a => nodes[l + 1].forEach(b => { links += `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke="${C.line}" stroke-width="2"/>`; }));
    const dots = [0, 1, 2].map(k => flow(`M${nodes[0][k].x} ${nodes[0][k].y} L${nodes[1][k].x} ${nodes[1][k].y} L${nodes[2][k % 2].x} ${nodes[2][k % 2].y}`, 3.2, C.sakura, k * 0.9, 7)).join('');
    const circles = nodes.map((layer, l) => layer.map(p => `<circle cx="${p.x}" cy="${p.y}" r="16" fill="${[C.data, C.gold, C.good][l]}" fill-opacity="0.35" stroke="${[C.data, C.gold, C.good][l]}" stroke-width="3"/>`).join('')).join('');
    return frame('A neural network',
      `${links}${circles}${dots}${T(90, 268, 'Input', { size: 24, weight: 800, fill: C.data })}${T(320, 268, 'Hidden layer', { size: 24, weight: 800, fill: C.gold })}${T(550, 268, 'Output', { size: 24, weight: 800, fill: C.good })}${T(90, 296, 'the data', { size: 20, fill: C.muted })}${T(320, 296, 'finds patterns', { size: 20, fill: C.muted })}${T(550, 296, 'the answer', { size: 20, fill: C.muted })}`,
      'Signals pass through layers of connected nodes', 350);
  },

  /* Conventional versus intelligent systems */
  'ghc-compare': () => {
    const rows: Array<[string, string, string]> = [['Rules', 'written by people', 'learned from data'], ['Change', 'only if reprogrammed', 'adapts to new data'], ['Mistakes', 'predictable', 'can be wrong or unfair']];
    const body = rows.map(([h, a, b], i) => {
      const y = 112 + i * 72;
      return `${T(20, y - 10, h, { size: 20, weight: 800, fill: C.muted, anchor: 'start' })}${card(20, y, 290, 42, C.gold, 0.12)}${T(165, y + 29, a, { size: 22 })}${card(330, y, 290, 42, C.good, 0.12)}${T(475, y + 29, b, { size: 22 })}${hlRing(20, y, 600, 42, i, 3, 9, 12)}`;
    }).join('');
    return frame('Conventional and intelligent systems',
      `${T(165, 48, 'Conventional', { size: 26, weight: 800, fill: C.gold })}${T(475, 48, 'Intelligent', { size: 26, weight: 800, fill: C.good })}${T(165, 76, 'fixed rules', { size: 20, fill: C.muted })}${T(475, 76, 'learns', { size: 20, fill: C.muted })}${body}`,
      'Each kind of system suits different problems', 356);
  },

  /* The six goals of cyber security */
  'ghc-cybergoals': () => {
    const goals: Array<[string, string, string]> = [['Confidentiality', 'kept secret', C.data], ['Integrity', 'not altered', C.gold], ['Availability', 'ready to use', C.good], ['Authentication', 'prove who you are', C.ember], ['Authorization', 'what you may do', C.sakura], ['Auditing', 'who did what', C.muted]];
    const body = goals.map(([n, d, col], i) => { const x = 14 + (i % 3) * 208; const y = 44 + Math.floor(i / 3) * 124; return `${card(x, y, 196, 104, col, 0.14)}${T(x + 98, y + 46, n, { size: 22, weight: 800, fill: col })}${T(x + 98, y + 80, d, { size: 20, fill: C.text })}${hlRing(x, y, 196, 104, i, 6, 12, 14)}`; }).join('');
    return frame('Goals of cyber security', body, 'Protect data, systems and the people who use them', 320);
  },

  /* Two-factor authentication */
  'ghc-2fa': () => {
    const steps: Array<[string, string, string]> = [['Password', 'something you know', C.gold], ['Code', 'something you have', C.data], ['Access', 'you are in', C.good]];
    const body = steps.map(([n, d, col], i) => `${card(18 + i * 212, 60, 188, 124, col, 0.14)}${T(112 + i * 212, 112, n, { size: 28, weight: 800, fill: col })}${T(112 + i * 212, 148, d, { size: 20, fill: C.text })}`).join('');
    return frame('Two-factor login',
      `${body}<path d="M206 122 H230 M418 122 H442" stroke="${C.text}" stroke-width="4" fill="none"/>
       ${flow('M30 214 H610', 5, C.sakura, 0)}${T(320, 250, 'a stolen password alone is not enough', { size: 22, fill: C.muted })}`,
      'The second factor stops most account takeovers', 318);
  },

  /* Spotting a phishing email */
  'ghc-phish': () => {
    const flags: Array<[number, number, number, number, string]> = [[40, 62, 340, 30, 'odd sender'], [40, 104, 340, 30, 'urgent threat'], [40, 146, 340, 30, 'asks for a PIN'], [40, 188, 340, 30, 'fake link']];
    return frame('Spot the phishing email',
      `<rect x="24" y="30" width="372" height="230" rx="12" fill="${C.panel}" stroke="${C.muted}" stroke-width="3"/>
       ${T(40, 56, 'From: alert@my-bnk-help.example', { size: 20, anchor: 'start' })}${T(40, 98, 'URGENT: account will close!', { size: 20, anchor: 'start', weight: 800 })}${T(40, 140, 'Reply now with your PIN', { size: 20, anchor: 'start' })}${T(40, 182, 'http://bank-login.example/x', { size: 20, anchor: 'start', fill: C.data })}
       ${flags.map(([x, y, w, h], i) => hlRing(x - 8, y - 22, w, h, i, 4, 10, 8)).join('')}
       ${flags.map(([, y, , , t]) => T(536, y - 2, t, { size: 22, weight: 800, fill: C.ember })).join('')}${flags.map(([, y]) => `<path d="M396 ${y - 8} H420" stroke="${C.ember}" stroke-width="3" stroke-dasharray="5 5"/>`).join('')}
       ${T(210, 240, 'do not click. report it', { size: 20, fill: C.good, weight: 700 })}`,
      'Real banks never ask for your PIN by message', 304);
  }
};

export const GHANA_COMPUTING_VISUAL_KEYS = Object.keys(GHANA_COMPUTING_BUILDERS);

export function getGhanaComputingVisual(key: string): string | null {
  const build = GHANA_COMPUTING_BUILDERS[key];
  return build ? build() : null;
}

