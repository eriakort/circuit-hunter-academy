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
  }
};

export const GHANA_COMPUTING_VISUAL_KEYS = Object.keys(GHANA_COMPUTING_BUILDERS);

export function getGhanaComputingVisual(key: string): string | null {
  const build = GHANA_COMPUTING_BUILDERS[key];
  return build ? build() : null;
}

