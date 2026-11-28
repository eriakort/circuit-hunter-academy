import type { Language } from '../types';
import { usesDecimalComma } from './visualI18n';
import { C, T, arrow, card, move, pick, showDuring } from './sciViz';

type Builder = (lang: Language) => string;

const t2 = (lang: Language) => (en: string, it: string) => pick(lang, en, it);
const dec = (lang: Language, s: string) => (usesDecimalComma(lang) ? s.replace(/\./g, ',') : s);
const divSym = (lang: Language) => (lang === 'it' ? ':' : '÷');

/** Clean 640-wide SVG frame with high-clearance compact footer caption that never clips horizontally. */
const g5Frame = (label: string, body: string, caption = '', H = 290): string =>
  `<svg viewBox="0 0 640 ${H}" class="sv" role="img" aria-label="${label}">
   <rect x="6" y="6" width="628" height="${H - 12}" rx="18" fill="${C.panel}" stroke="${C.line}" stroke-width="2"/>
   ${body}
   ${caption ? T(320, H - 18, caption, { size: 15, fill: C.muted }) : ''}
 </svg>`;

export type Grade5MathTopicKey =
  | 'problemSteps'
  | 'expressionTree'
  | 'proportionTable'
  | 'logicStatements'
  | 'modeMeanMedian'
  | 'probabilityScale'
  | 'romanNumerals'
  | 'bigNumbers'
  | 'powers'
  | 'decimalPlaces'
  | 'roundingHill'
  | 'inverseOps'
  | 'shiftPowersTen'
  | 'operationProperties'
  | 'expressionsOrder'
  | 'multiplesDivisors'
  | 'divisibilityRules'
  | 'primeFactorTree'
  | 'equivalentFractions'
  | 'compareFractions'
  | 'fractionsDecimals'
  | 'fractionOfWhole'
  | 'wholeFromFraction'
  | 'budgetMoney'
  | 'measuringUnit'
  | 'speedDistanceTime'
  | 'currencyExchange'
  | 'isometries'
  | 'sierpinskiFractal'
  | 'polygonClasses'
  | 'rhomboidRhombus'
  | 'trapeziumArea'
  | 'triangleArea'
  | 'compositeFloorPlan'
  | 'circumferenceUnroll'
  | 'circleAreaWedges'
  | 'solidSurfaceNet'
  | 'volumeUnitCubes'
  | 'placeValue'
  | 'numberLine'
  | 'venn'
  | 'barChart'
  | 'fractionBar'
  | 'percentGrid'
  | 'cartesian'
  | 'angles'
  | 'regularPolygon'
  | 'circle'
  | 'solids'
  | 'lengthTable'
  | 'capacityTable'
  | 'massTable'
  | 'areaTable'
  | 'volumeTable'
  | 'timeTable'
  | 'equivalences'
  | 'trade'
  | 'areaFormulas';

export const GRADE5_MATH_TOPICS: Record<Grade5MathTopicKey, Builder> = {
  problemSteps: lang => {
    const p = t2(lang);
    const steps: Array<[string, string, string, string]> = [
      ['1', p('Read', 'Leggi'), p('data & goal', 'dati e meta'), C.data],
      ['2', p('Plan', 'Pianifica'), p('operations', 'operazioni'), C.gold],
      ['3', p('Solve', 'Calcola'), p('step by step', 'passo passo'), C.ember],
      ['4', p('Check', 'Controlla'), p('units & sense', 'unità e senso'), C.good]
    ];
    const boxes = steps.map(([n, head, sub, col], i) => {
      const x = 22 + i * 154;
      const cx = x + 67;
      const ring = showDuring(i * 0.24, (i + 1) * 0.24 - 0.02, 8, `<rect x="${x - 4}" y="44" width="142" height="162" rx="16" fill="none" stroke="${col}" stroke-width="4"/>`);
      return `${card(x, 48, 134, 154, col, 0.14)}<circle cx="${cx}" cy="76" r="16" fill="${col}" fill-opacity="0.22" stroke="${col}" stroke-width="2.5"/>${T(cx, 82, n, { size: 18, weight: 800, fill: col })}${T(cx, 126, head, { size: 22, fill: col, weight: 800 })}${T(cx, 166, sub, { size: 17, fill: C.muted })}${ring}${i < 3 ? arrow(x + 136, 125, x + 152, 125, C.muted, 4) : ''}`;
    }).join('');
    return g5Frame(
      p('Four steps to solve any problem', 'Quattro passi per risolvere ogni problema'),
      boxes,
      p('Extract useful data, choose operations, verify units', 'Ricava i dati utili, scegli le operazioni e controlla'),
      258
    );
  },

  expressionTree: lang => {
    const p = t2(lang);
    const d = divSym(lang);
    const ex = `(48 + 12) ${d} 3`;
    return g5Frame(
      p('Problem diagram to expression', 'Dal diagramma all’espressione'),
      `${card(60, 28, 170, 50, C.data, 0.15)}${T(145, 62, '48', { size: 26, fill: C.data, weight: 800 })}
       ${card(410, 28, 170, 50, C.data, 0.15)}${T(495, 62, '12', { size: 26, fill: C.data, weight: 800 })}
       <path d="M145 78 L320 122 M495 78 L320 122" stroke="${C.gold}" stroke-width="4" fill="none"/>
       <circle cx="320" cy="122" r="22" fill="${C.gold}" fill-opacity="0.24" stroke="${C.gold}" stroke-width="3"/>${T(320, 131, '+', { size: 28, fill: C.gold, weight: 800 })}
       <path d="M320 144 V184" stroke="${C.ember}" stroke-width="4"/>
       <circle cx="320" cy="192" r="22" fill="${C.ember}" fill-opacity="0.24" stroke="${C.ember}" stroke-width="3"/>${T(320, 200, d, { size: 26, fill: C.ember, weight: 800 })}
       <path d="M460 192 H344" stroke="${C.ember}" stroke-width="4"/>${card(460, 168, 120, 48, C.ember, 0.15)}${T(520, 200, '3', { size: 26, fill: C.ember, weight: 800 })}
       ${card(90, 232, 460, 44, C.good, 0.14)}${T(320, 262, `${ex} = 20`, { size: 24, fill: C.good, weight: 800 })}
       <circle r="7" fill="${C.sakura}"><animateMotion dur="4s" repeatCount="indefinite" path="M145 78 L320 122 V192 V232"/></circle>`,
      p('Follow the branches from top to bottom', 'Segui i rami dall’alto verso il basso'),
      316
    );
  },

  proportionTable: lang => {
    const p = t2(lang);
    const d = divSym(lang);
    return g5Frame(
      p('Direct proportion · reduce to 1 unit', 'Problemi proporzionali · valore unitario'),
      `${card(36, 40, 174, 148, C.data, 0.14)}${T(123, 80, p('3 notebooks', '3 quaderni'), { size: 22, fill: C.data, weight: 800 })}${T(123, 138, '€ 6', { size: 34, weight: 800 })}
       ${arrow(214, 112, 258, 112, C.gold, 5)}${T(236, 92, `${d} 3`, { size: 22, fill: C.gold, weight: 800 })}
       ${card(262, 40, 152, 148, C.gold, 0.18)}${T(338, 80, p('1 unit', '1 unità'), { size: 22, fill: C.gold, weight: 800 })}${T(338, 138, '€ 2', { size: 36, fill: C.gold, weight: 800 })}
       ${arrow(418, 112, 462, 112, C.good, 5)}${T(440, 92, '× 5', { size: 22, fill: C.good, weight: 800 })}
       ${card(466, 40, 144, 148, C.good, 0.14)}${T(538, 80, p('5 items', '5 quaderni'), { size: 22, fill: C.good, weight: 800 })}${T(538, 138, '€ 10', { size: 34, fill: C.good, weight: 800 })}
       <circle r="8" fill="${C.sakura}"><animateMotion dur="4s" repeatCount="indefinite" path="M123 212 H538"/></circle>`,
      p('Find the value of 1 item, then multiply', 'Trova prima il valore di 1 unità, poi moltiplica'),
      260
    );
  },

  logicStatements: lang => {
    const p = t2(lang);
    const items: Array<[string, string, string, string]> = [
      [p('NOT (negation)', 'NON (negazione)'), p('Flips true ↔ false', 'Inverte vero ↔ falso'), C.ember, 'T → F'],
      [p('AND (both)', 'E (entrambi)'), p('Both must be true', 'Entrambe vere'), C.data, 'T ∧ T = T'],
      [p('OR (at least one)', 'O (almeno una)'), p('One true is enough', 'Basta una vera'), C.good, 'T ∨ F = T']
    ];
    const body = items.map(([title, sub, col, ex], i) => {
      const x = 24 + i * 204;
      const pulse = showDuring(i * 0.32, (i + 1) * 0.32 - 0.02, 7, `<rect x="${x - 4}" y="44" width="192" height="174" rx="16" fill="none" stroke="${col}" stroke-width="4"/>`);
      return `${card(x, 48, 184, 166, col, 0.13)}${T(x + 92, 84, title, { size: 20, fill: col, weight: 800 })}${T(x + 92, 136, ex, { size: 26, weight: 800 })}${T(x + 92, 184, sub, { size: 17, fill: C.muted })}${pulse}`;
    }).join('');
    return g5Frame(p('Statements and connectives', 'Enunciati e connettivi logici'), body, p('Check truth values before joining statements', 'Verifica vero o falso prima di collegare'), 264);
  },

  modeMeanMedian: lang => {
    const p = t2(lang);
    const vals = [2, 4, 4, 5, 10];
    const bars = vals.map((v, i) => {
      const x = 58 + i * 108;
      const h = v * 15;
      const col = i === 1 || i === 2 ? C.gold : i === 3 ? C.good : C.data;
      return `<rect x="${x}" y="${216 - h}" width="64" height="${h}" rx="7" fill="${col}" fill-opacity="0.78" stroke="${col}" stroke-width="2"/>${T(x + 32, 202 - h, String(v), { size: 24, weight: 800 })}`;
    }).join('');
    const meanY = 216 - 5 * 15;
    return g5Frame(
      p('Mode, median and mean', 'Moda, mediana e media'),
      `${bars}<line x1="36" y1="216" x2="604" y2="216" stroke="${C.line}" stroke-width="3"/>
       <line x1="36" y1="${meanY}" x2="604" y2="${meanY}" stroke="${C.ember}" stroke-width="4" stroke-dasharray="10 6"/>
       ${T(580, meanY - 10, p('mean = 5', 'media = 5'), { size: 20, fill: C.ember, weight: 800, anchor: 'end' })}
       ${T(202, 246, p('mode = 4', 'moda = 4'), { size: 20, fill: C.gold, weight: 800 })}
       ${T(398, 246, p('median = 4', 'mediana = 4'), { size: 20, fill: C.good, weight: 800 })}
       <circle r="7" fill="${C.sakura}"><animateMotion dur="5s" repeatCount="indefinite" path="M58 ${meanY} H604"/></circle>`,
      p('Sorted data reveals mode, middle value and average', 'Con i dati ordinati trovi moda, mediana e media'),
      294
    );
  },

  probabilityScale: lang => {
    const p = t2(lang);
    const d = divSym(lang);
    return g5Frame(
      p('Probability from 0 to 1', 'Probabilità da 0 a 1'),
      `<line x1="60" y1="126" x2="580" y2="126" stroke="${C.muted}" stroke-width="6" stroke-linecap="round"/>
       <circle cx="60" cy="126" r="14" fill="${C.ember}"/><circle cx="320" cy="126" r="14" fill="${C.gold}"/><circle cx="580" cy="126" r="14" fill="${C.good}"/>
       ${T(60, 92, '0 · 0%', { size: 22, fill: C.ember, weight: 800 })}${T(60, 166, p('impossible', 'impossibile'), { size: 18, fill: C.muted })}
       ${T(320, 92, '1/2 · 50%', { size: 22, fill: C.gold, weight: 800 })}${T(320, 166, p('even chance', 'stessa sorte'), { size: 18, fill: C.muted })}
       ${T(580, 92, '1 · 100%', { size: 22, fill: C.good, weight: 800 })}${T(580, 166, p('certain', 'certo'), { size: 18, fill: C.muted })}
       <circle cy="126" r="9" fill="${C.text}"><animate attributeName="cx" values="60;320;580;320;60" dur="6s" repeatCount="indefinite"/></circle>
       ${T(320, 224, `P = ${p('favourable', 'favorevoli')} ${d} ${p('possible', 'possibili')}`, { size: 24, fill: C.data, weight: 800 })}`,
      p('Write probability as fraction, decimal or percentage', 'Esprimi la probabilità in frazione, decimale o %'),
      280
    );
  },

  romanNumerals: lang => {
    const p = t2(lang);
    const syms: Array<[string, string]> = [['I', '1'], ['V', '5'], ['X', '10'], ['L', '50'], ['C', '100'], ['D', '500'], ['M', '1000']];
    const row = syms.map(([s, v], i) => {
      const x = 36 + i * 84;
      return `${card(x, 38, 72, 82, C.gold, 0.14)}${T(x + 36, 76, s, { size: 30, fill: C.gold, weight: 800 })}${T(x + 36, 108, v, { size: 18, fill: C.muted })}`;
    }).join('');
    return g5Frame(
      p('Roman numeral rules', 'I numeri romani'),
      `${row}
       ${card(40, 144, 260, 84, C.ember, 0.14)}${T(170, 180, 'IV = 5 − 1 = 4', { size: 25, fill: C.ember, weight: 800 })}${T(170, 212, p('smaller left → subtract', 'a sinistra → sottrai'), { size: 17, fill: C.muted })}
       ${card(340, 144, 260, 84, C.good, 0.14)}${T(470, 180, 'VI = 5 + 1 = 6', { size: 25, fill: C.good, weight: 800 })}${T(470, 212, p('smaller right → add', 'a destra → somma'), { size: 17, fill: C.muted })}
       ${showDuring(0, 0.5, 6, `<rect x="36" y="140" width="268" height="92" rx="16" fill="none" stroke="${C.ember}" stroke-width="4"/>`)}
       ${showDuring(0.5, 0.95, 6, `<rect x="336" y="140" width="268" height="92" rx="16" fill="none" stroke="${C.good}" stroke-width="4"/>`)}`,
      p('Seven symbols combine by addition and subtraction', 'Sette simboli combinati con somma e sottrazione'),
      282
    );
  },

  bigNumbers: lang => {
    const p = t2(lang);
    const periods: Array<[string, string, string]> = [
      [p('Billions', 'Miliardi'), '003', C.sakura],
      [p('Millions', 'Milioni'), '420', C.gold],
      [p('Thousands', 'Migliaia'), '815', C.data],
      [p('Units', 'Unità'), '609', C.good]
    ];
    const body = periods.map(([name, digits, col], i) => {
      const x = 22 + i * 152;
      const hi = showDuring(i * 0.24, Math.min(0.95, (i + 1) * 0.24), 8, `<rect x="${x - 3}" y="52" width="146" height="120" rx="16" fill="none" stroke="${col}" stroke-width="4"/>`);
      return `${card(x, 56, 140, 112, col, 0.14)}${T(x + 70, 90, name, { size: 19, fill: col, weight: 800 })}${T(x + 70, 140, digits, { size: 32, weight: 800 })}${hi}`;
    }).join('');
    return g5Frame(
      p('Large number classes (periods)', 'Grandi numeri: classi e periodi'),
      `${body}${T(320, 214, '3 420 815 609', { size: 30, fill: C.text, weight: 800 })}`,
      p('Each class has hundreds, tens and units (× 1 000)', 'Ogni classe ha h, da, u (× 1 000 a passaggio)'),
      268
    );
  },

  powers: lang => {
    const p = t2(lang);
    const factors = ['2', '2', '2', '2'].map((f, i) => {
      const x = 152 + i * 112;
      const pulse = showDuring(i * 0.22, 0.95, 6, `<circle cx="${x}" cy="154" r="24" fill="${C.gold}" fill-opacity="0.3" stroke="${C.gold}" stroke-width="3"/>`);
      return `${pulse}${T(x, 163, f, { size: 28, fill: C.gold, weight: 800 })}${i < 3 ? T(x + 56, 162, '×', { size: 24, fill: C.muted }) : ''}`;
    }).join('');
    return g5Frame(
      p('Powers: repeated multiplication', 'Potenze: moltiplicazione ripetuta'),
      `${card(60, 36, 220, 72, C.data, 0.14)}${T(170, 82, '2⁴', { size: 42, fill: C.data, weight: 800 })}
       ${card(320, 36, 260, 72, C.good, 0.14)}${T(450, 78, p('2 base · 4 exponent', '2 base · 4 esponente'), { size: 20, fill: C.good, weight: 800 })}
       ${factors}
       ${T(320, 216, '= 16', { size: 32, fill: C.ember, weight: 800 })}`,
      p('Any non-zero number to power 0 equals 1 (a⁰ = 1)', 'Ogni numero ≠ 0 elevato a 0 vale 1 (a⁰ = 1)'),
      276
    );
  },

  decimalPlaces: lang => {
    const p = t2(lang);
    const comma = usesDecimalComma(lang) ? ',' : '.';
    const cols: Array<[string, string, string]> = [
      ['h', '1', C.muted],
      ['da', '2', C.data],
      ['u', '4', C.data],
      ['d', '3', C.gold],
      ['c', '7', C.ember],
      ['m', '5', C.good]
    ];
    const body = cols.map(([sym, val, col], i) => {
      const x = 44 + i * 92 + (i >= 3 ? 28 : 0);
      return `${card(x, 52, 76, 114, col, 0.15)}${T(x + 38, 86, sym, { size: 22, fill: col, weight: 800 })}${T(x + 38, 142, val, { size: 34, weight: 800 })}`;
    }).join('');
    return g5Frame(
      p('Decimal place value', 'Valore posizionale nei decimali'),
      `${body}${T(324, 144, comma, { size: 48, fill: C.sakura, weight: 800 })}
       ${T(174, 202, p('integer part', 'parte intera'), { size: 22, fill: C.data, weight: 700 })}
       ${T(482, 202, p('decimal part', 'parte decimale'), { size: 22, fill: C.gold, weight: 700 })}
       <circle r="7" fill="${C.sakura}"><animateMotion dur="5s" repeatCount="indefinite" path="M82 226 H580"/></circle>`,
      p('Tenths (0.1), hundredths (0.01), thousandths (0.001)', dec(lang, 'Decimi (0.1), centesimi (0.01), millesimi (0.001)')),
      280
    );
  },

  roundingHill: lang => {
    const p = t2(lang);
    return g5Frame(
      p('Rounding numbers', 'Arrotondamento dei numeri'),
      `<path d="M80 198 Q320 34 560 198" fill="none" stroke="${C.gold}" stroke-width="5"/>
       <line x1="320" y1="68" x2="320" y2="210" stroke="${C.line}" stroke-width="3" stroke-dasharray="6 5"/>
       ${T(170, 134, '0 · 1 · 2 · 3 · 4', { size: 22, fill: C.data, weight: 800 })}${T(170, 226, p('← round down', '← per difetto'), { size: 20, fill: C.data, weight: 800 })}
       ${T(470, 134, '5 · 6 · 7 · 8 · 9', { size: 22, fill: C.ember, weight: 800 })}${T(470, 226, p('round up →', 'per eccesso →'), { size: 20, fill: C.ember, weight: 800 })}
       ${T(320, 52, '5!', { size: 28, fill: C.gold, weight: 800 })}
       <circle r="10" fill="${C.ember}"><animateMotion dur="5s" repeatCount="indefinite" path="M320 88 Q440 110 550 192"/></circle>`,
      p('Next digit 0–4 rounds down; 5–9 rounds up', 'Cifra seguente 0–4 difetto, 5–9 eccesso'),
      284
    );
  },

  inverseOps: lang => {
    const p = t2(lang);
    const d = divSym(lang);
    return g5Frame(
      p('Inverse operations check each other', 'Operazioni inverse e verifica'),
      `${card(40, 44, 250, 146, C.data, 0.14)}${T(165, 86, '+ ↔ −', { size: 36, fill: C.data, weight: 800 })}${T(165, 136, '24 + 16 = 40', { size: 22, weight: 700 })}${T(165, 168, '40 − 16 = 24', { size: 22, fill: C.muted })}
       ${card(350, 44, 250, 146, C.good, 0.14)}${T(475, 86, `× ↔ ${d}`, { size: 36, fill: C.good, weight: 800 })}${T(475, 136, '6 × 8 = 48', { size: 22, weight: 700 })}${T(475, 168, `48 ${d} 8 = 6`, { size: 22, fill: C.muted })}
       <circle cx="165" cy="216" r="8" fill="${C.gold}"><animate attributeName="cx" values="90;240;90" dur="4s" repeatCount="indefinite"/></circle>
       <circle cx="475" cy="216" r="8" fill="${C.sakura}"><animate attributeName="cx" values="400;550;400" dur="4s" repeatCount="indefinite"/></circle>`,
      p('Subtraction undoes + · Division undoes ×', 'Sottrazione inversa di + · Divisione inversa di ×'),
      274
    );
  },

  shiftPowersTen: lang => {
    const p = t2(lang);
    const d = divSym(lang);
    return g5Frame(
      p('Multiply or divide by 10, 100, 1 000', 'Moltiplicare e dividere per 10, 100, 1 000'),
      `${card(44, 44, 552, 74, C.good, 0.14)}${T(320, 76, dec(lang, '3.45 × 10 = 34.5   ·   3.45 × 100 = 345'), { size: 24, fill: C.good, weight: 800 })}${T(320, 106, p('digits shift LEFT (comma shifts RIGHT)', 'le cifre scorrono a SINISTRA (virgola a DESTRA)'), { size: 17, fill: C.muted })}
       ${card(44, 144, 552, 74, C.data, 0.14)}${T(320, 176, dec(lang, `48 ${d} 10 = 4.8   ·   48 ${d} 100 = 0.48`), { size: 24, fill: C.data, weight: 800 })}${T(320, 206, p('digits shift RIGHT (comma shifts LEFT)', 'le cifre scorrono a DESTRA (virgola a SINISTRA)'), { size: 17, fill: C.muted })}
       <circle cy="81" r="7" fill="${C.good}"><animate attributeName="cx" values="100;540" dur="4s" repeatCount="indefinite"/></circle>
       <circle cy="181" r="7" fill="${C.data}"><animate attributeName="cx" values="540;100" dur="4s" repeatCount="indefinite"/></circle>`,
      p('Move one, two or three places per zero', 'Sposta di 1, 2 o 3 posti secondo gli zeri'),
      270
    );
  },

  operationProperties: lang => {
    const p = t2(lang);
    return g5Frame(
      p('Properties of the operations', 'Proprietà delle operazioni'),
      `${card(28, 42, 184, 148, C.data, 0.14)}${T(120, 80, p('Commutative', 'Commutativa'), { size: 20, fill: C.data, weight: 800 })}${T(120, 126, 'a + b = b + a', { size: 22, weight: 800 })}${T(120, 160, 'a × b = b × a', { size: 22, fill: C.muted })}
       ${card(228, 42, 184, 148, C.gold, 0.14)}${T(320, 80, p('Associative', 'Associativa'), { size: 20, fill: C.gold, weight: 800 })}${T(320, 126, '(a+b)+c', { size: 22, weight: 800 })}${T(320, 160, '= a+(b+c)', { size: 22, fill: C.muted })}
       ${card(428, 42, 184, 148, C.good, 0.14)}${T(520, 80, p('Distributive', 'Distributiva'), { size: 20, fill: C.good, weight: 800 })}${T(520, 126, 'a × (b + c)', { size: 22, weight: 800 })}${T(520, 160, '= a×b + a×c', { size: 22, fill: C.muted })}
       ${showDuring(0, 0.33, 7, `<rect x="24" y="38" width="192" height="156" rx="16" fill="none" stroke="${C.data}" stroke-width="4"/>`)}
       ${showDuring(0.33, 0.66, 7, `<rect x="224" y="38" width="192" height="156" rx="16" fill="none" stroke="${C.gold}" stroke-width="4"/>`)}
       ${showDuring(0.66, 0.95, 7, `<rect x="424" y="38" width="192" height="156" rx="16" fill="none" stroke="${C.good}" stroke-width="4"/>`)}`,
      p('0 is neutral for +; 1 is neutral for ×', 'Lo 0 è neutro per +; l’1 è neutro per ×'),
      244
    );
  },

  expressionsOrder: lang => {
    const p = t2(lang);
    const d = divSym(lang);
    return g5Frame(
      p('Order in arithmetic expressions', 'Ordine nelle espressioni aritmetiche'),
      `${card(38, 42, 174, 138, C.ember, 0.16)}${T(125, 80, '1 · ( ) [ ] { }', { size: 22, fill: C.ember, weight: 800 })}${T(125, 130, p('brackets first', 'prima parentesi'), { size: 19, fill: C.muted })}
       ${arrow(216, 111, 238, 111, C.muted, 4)}
       ${card(242, 42, 156, 138, C.gold, 0.16)}${T(320, 80, `2 · ×  ${d}`, { size: 24, fill: C.gold, weight: 800 })}${T(320, 130, p('left to right', 'da sinistra'), { size: 19, fill: C.muted })}
       ${arrow(402, 111, 424, 111, C.muted, 4)}
       ${card(428, 42, 174, 138, C.good, 0.16)}${T(515, 80, '3 · +  −', { size: 24, fill: C.good, weight: 800 })}${T(515, 130, p('left to right', 'da sinistra'), { size: 19, fill: C.muted })}
       ${T(320, 220, '2 + 3 × 4 = 2 + 12 = 14', { size: 25, fill: C.data, weight: 800 })}
       ${showDuring(0, 0.33, 6, `<rect x="34" y="38" width="182" height="146" rx="16" fill="none" stroke="${C.ember}" stroke-width="4"/>`)}
       ${showDuring(0.33, 0.66, 6, `<rect x="238" y="38" width="164" height="146" rx="16" fill="none" stroke="${C.gold}" stroke-width="4"/>`)}
       ${showDuring(0.66, 0.95, 6, `<rect x="424" y="38" width="182" height="146" rx="16" fill="none" stroke="${C.good}" stroke-width="4"/>`)}`,
      p('Brackets → powers → × ÷ → + −', 'Parentesi → potenze → × : → + −'),
      280
    );
  },

  multiplesDivisors: lang => {
    const p = t2(lang);
    const hops = [0, 4, 8, 12, 16].map((v, i) => `<circle cx="${80 + i * 116}" cy="112" r="18" fill="${C.data}" fill-opacity="0.22" stroke="${C.data}" stroke-width="3"/>${T(80 + i * 116, 120, String(v), { size: 22, weight: 800 })}${i < 4 ? `<path d="M${80 + i * 116} 94 Q${138 + i * 116} 44 ${196 + i * 116} 94" fill="none" stroke="${C.gold}" stroke-width="3"/>` : ''}`).join('');
    return g5Frame(
      p('Multiples and divisors', 'Multipli e divisori'),
      `<line x1="60" y1="112" x2="580" y2="112" stroke="${C.line}" stroke-width="4"/>${hops}
       ${T(320, 170, p('12 is a multiple of 4 · 4 divides 12', '12 è multiplo di 4 · 4 è divisore di 12'), { size: 21, fill: C.gold, weight: 800 })}
       ${T(320, 204, p('Divisors of 12: 1, 2, 3, 4, 6, 12', 'Divisori di 12: 1, 2, 3, 4, 6, 12'), { size: 20, fill: C.muted })}
       <circle r="8" fill="${C.sakura}"><animateMotion dur="4.5s" repeatCount="indefinite" path="M80 94 Q138 44 196 94 Q254 44 312 94 Q370 44 428 94 Q486 44 544 94"/></circle>`,
      p('Divisors are finite; multiples are infinite', 'I divisori sono finiti, i multipli sono infiniti'),
      260
    );
  },

  divisibilityRules: lang => {
    const p = t2(lang);
    const rules: Array<[string, string, string]> = [
      ['2', p('even last digit (0,2,4,6,8)', 'ultima cifra pari'), C.data],
      ['3', p('digit sum ÷ 3 (e.g. 27 → 9)', 'somma cifre : 3'), C.gold],
      ['5', p('ends in 0 or 5', 'finisce con 0 o 5'), C.good],
      ['9', p('digit sum ÷ 9 (e.g. 81 → 9)', 'somma cifre : 9'), C.ember]
    ];
    const body = rules.map(([dgt, desc, col], i) => {
      const y = 38 + i * 52;
      return `${card(46, y, 548, 42, col, 0.14)}<circle cx="80" cy="${y + 21}" r="15" fill="${col}" fill-opacity="0.22" stroke="${col}" stroke-width="2.5"/>${T(80, y + 27, dgt, { size: 20, fill: col, weight: 800 })}${T(116, y + 27, desc, { size: 20, anchor: 'start', weight: 700 })}`;
    }).join('');
    return g5Frame(p('Divisibility rules', 'Criteri di divisibilità'), body, p('Check without performing long division', 'Verifica la divisibilità senza eseguire la divisione'), 292);
  },

  primeFactorTree: lang => {
    const p = t2(lang);
    return g5Frame(
      p('Prime numbers and factor tree', 'Numeri primi e scomposizione'),
      `${card(270, 28, 100, 42, C.data, 0.18)}${T(320, 57, '36', { size: 26, fill: C.data, weight: 800 })}
       <path d="M300 70 L220 112 M340 70 L420 112" stroke="${C.line}" stroke-width="3"/>
       <circle cx="220" cy="132" r="22" fill="${C.good}" fill-opacity="0.28" stroke="${C.good}" stroke-width="3"/>${T(220, 140, '2', { size: 24, fill: C.good, weight: 800 })}
       ${card(380, 110, 80, 42, C.gold, 0.16)}${T(420, 139, '18', { size: 24, fill: C.gold, weight: 800 })}
       <path d="M402 152 L352 194 M438 152 L492 194" stroke="${C.line}" stroke-width="3"/>
       <circle cx="352" cy="212" r="22" fill="${C.good}" fill-opacity="0.28" stroke="${C.good}" stroke-width="3"/>${T(352, 220, '2', { size: 24, fill: C.good, weight: 800 })}
       <circle cx="458" cy="212" r="20" fill="${C.good}" fill-opacity="0.28" stroke="${C.good}" stroke-width="3"/>${T(458, 219, '3', { size: 22, fill: C.good, weight: 800 })}
       <circle cx="526" cy="212" r="20" fill="${C.good}" fill-opacity="0.28" stroke="${C.good}" stroke-width="3"/>${T(526, 219, '3', { size: 22, fill: C.good, weight: 800 })}
       ${T(154, 228, '36 = 2² × 3²', { size: 26, fill: C.ember, weight: 800 })}`,
      p('Primes have 2 divisors (1 and itself); 1 is not prime', 'I primi hanno 2 divisori (1 e se stessi); 1 non è primo'),
      290
    );
  },

  equivalentFractions: lang => {
    const p = t2(lang);
    const bar = (n: number, d: number, y: number, col: string) =>
      Array.from({ length: d }, (_, i) => `<rect x="${90 + i * (400 / d)}" y="${y}" width="${400 / d}" height="40" fill="${i < n ? col : 'transparent'}" fill-opacity="0.45" stroke="${C.text}" stroke-width="3"/>`).join('') +
      T(542, y + 29, `${n}/${d}`, { size: 26, fill: col, weight: 800 });
    return g5Frame(
      p('Equivalent fractions', 'Frazioni equivalenti'),
      `${bar(1, 2, 42, C.data)}${bar(2, 4, 106, C.gold)}${bar(4, 8, 170, C.good)}
       <line x1="290" y1="32" x2="290" y2="220" stroke="${C.sakura}" stroke-width="4" stroke-dasharray="8 6"/>`,
      p('Multiply or divide top & bottom by the same number', 'Proprietà invariantiva: × o : sullo stesso numero'),
      270
    );
  },

  compareFractions: lang => {
    const p = t2(lang);
    return g5Frame(
      p('Comparing fractions', 'Confronto tra frazioni'),
      `${card(60, 42, 180, 124, C.data, 0.14)}${T(150, 96, '3 / 4', { size: 36, fill: C.data, weight: 800 })}${T(150, 140, '3 × 5 = 15', { size: 22, fill: C.gold, weight: 800 })}
       ${T(320, 112, '>', { size: 46, fill: C.good, weight: 800 })}
       ${card(400, 42, 180, 124, C.ember, 0.14)}${T(490, 96, '2 / 5', { size: 36, fill: C.ember, weight: 800 })}${T(490, 140, '2 × 4 = 8', { size: 22, fill: C.muted, weight: 800 })}
       ${T(320, 210, '15/20 > 8/20', { size: 28, fill: C.good, weight: 800 })}`,
      p('Same denominator → bigger top; same top → smaller bottom', 'Stesso den. → num. maggiore; stesso num. → den. minore'),
      268
    );
  },

  fractionsDecimals: lang => {
    const p = t2(lang);
    const items: Array<[string, string, string, number]> = [
      ['1/4', dec(lang, '0.25'), '25%', 156],
      ['1/2', dec(lang, '0.50'), '50%', 320],
      ['3/4', dec(lang, '0.75'), '75%', 484]
    ];
    const pts = items.map(([f, dStr, pct, x]) =>
      `<circle cx="${x}" cy="126" r="10" fill="${C.gold}"/>${T(x, 88, f, { size: 26, fill: C.data, weight: 800 })}${T(x, 172, dStr, { size: 24, weight: 800 })}${T(x, 204, pct, { size: 20, fill: C.good, weight: 800 })}`
    ).join('');
    return g5Frame(
      p('Fractions, decimals and percentages', 'Frazioni, decimali e percentuali'),
      `<line x1="60" y1="126" x2="580" y2="126" stroke="${C.muted}" stroke-width="5"/>${pts}
       ${T(60, 166, '0', { size: 20, fill: C.muted })}${T(580, 166, '1', { size: 20, fill: C.muted })}
       <circle cy="126" r="7" fill="${C.sakura}"><animate attributeName="cx" values="156;320;484;156" dur="6s" repeatCount="indefinite"/></circle>`,
      p('Divide numerator by denominator for decimals', 'Dividi il numeratore per il denominatore'),
      264
    );
  },

  fractionOfWhole: lang => {
    const p = t2(lang);
    const d = divSym(lang);
    const bar = Array.from({ length: 4 }, (_, i) => `<rect x="${90 + i * 115}" y="74" width="110" height="56" rx="6" fill="${i < 3 ? C.gold : C.panel}" fill-opacity="${i < 3 ? 0.55 : 0.7}" stroke="${C.text}" stroke-width="3"/>${T(145 + i * 115, 110, '5', { size: 24, weight: 800 })}`).join('');
    return g5Frame(
      p('From the whole to the fraction: 3/4 of 20', 'Dall’intero alla frazione: 3/4 di 20'),
      `${T(320, 48, p('Whole = 20', 'Intero = 20'), { size: 24, fill: C.data, weight: 800 })}${bar}
       ${T(320, 174, `1 · 20 ${d} 4 = 5   →   2 · 5 × 3 = 15`, { size: 26, fill: C.good, weight: 800 })}
       ${showDuring(0.2, 0.9, 6, `<rect x="86" y="70" width="348" height="64" rx="10" fill="none" stroke="${C.good}" stroke-width="4"/>`)}`,
      p('Divide whole by denominator, then multiply by numerator', 'Dividi per il denominatore e moltiplica per il numeratore'),
      244
    );
  },

  wholeFromFraction: lang => {
    const p = t2(lang);
    const d = divSym(lang);
    const bar = Array.from({ length: 5 }, (_, i) => `<rect x="${70 + i * 100}" y="78" width="96" height="54" rx="6" fill="${i < 2 ? C.ember : C.data}" fill-opacity="0.35" stroke="${i < 2 ? C.ember : C.data}" stroke-width="3"/>${T(118 + i * 100, 114, '6', { size: 24, weight: 800 })}`).join('');
    return g5Frame(
      p('From the fraction to the whole: 2/5 = 12', 'Dalla frazione all’intero: 2/5 = 12'),
      `${bar}
       ${T(168, 52, p('2 parts = 12', '2 parti = 12'), { size: 22, fill: C.ember, weight: 800 })}
       ${T(422, 52, p('remaining 3/5', 'altri 3/5'), { size: 22, fill: C.data, weight: 800 })}
       ${T(320, 180, `1 · 12 ${d} 2 = 6   →   2 · 6 × 5 = 30`, { size: 26, fill: C.good, weight: 800 })}`,
      p('Divide part by numerator, then multiply by denominator', 'Dividi per il numeratore e moltiplica per il denominatore'),
      248
    );
  },

  budgetMoney: lang => {
    const p = t2(lang);
    return g5Frame(
      p('Managing money: income & budget', 'Educazione civica: gestire il denaro'),
      `${card(60, 48, 250, 90, C.data, 0.16)}${T(185, 86, p('Needs · 50%', 'Bisogni · 50%'), { size: 21, fill: C.data, weight: 800 })}${T(185, 118, p('food, school, home', 'cibo, scuola, casa'), { size: 17, fill: C.muted })}
       ${card(322, 48, 146, 90, C.gold, 0.16)}${T(395, 86, p('Wants · 30%', 'Desideri · 30%'), { size: 20, fill: C.gold, weight: 800 })}${T(395, 118, p('extras', 'extra'), { size: 17, fill: C.muted })}
       ${card(480, 48, 100, 90, C.good, 0.16)}${T(530, 86, p('Save · 20%', 'Risparmio'), { size: 18, fill: C.good, weight: 800 })}${T(530, 118, p('future', 'futuro'), { size: 16, fill: C.muted })}
       ${T(320, 186, p('Income − Expenses = Savings', 'Entrate − Uscite = Risparmio'), { size: 24, fill: C.good, weight: 800 })}`,
      p('Plan needs first, compare prices and save regularly', 'Priorità ai bisogni, confronta prezzi e risparmia'),
      250
    );
  },

  measuringUnit: lang => {
    const p = t2(lang);
    const ticks = Array.from({ length: 11 }, (_, i) => `<line x1="${70 + i * 50}" y1="104" x2="${70 + i * 50}" y2="${i % 5 === 0 ? 138 : 124}" stroke="${C.gold}" stroke-width="${i % 5 === 0 ? 4 : 2}"/>${i % 2 === 0 ? T(70 + i * 50, 162, String(i), { size: 20, fill: C.muted }) : ''}`).join('');
    return g5Frame(
      p('Measuring means comparing with a unit', 'Misurare significa confrontare con un’unità'),
      `<rect x="54" y="92" width="532" height="52" rx="8" fill="${C.gold}" fill-opacity="0.14" stroke="${C.gold}" stroke-width="3"/>${ticks}
       <rect x="70" y="50" width="250" height="30" rx="6" fill="${C.data}" fill-opacity="0.35" stroke="${C.data}" stroke-width="3"/>
       ${T(195, 72, p('5 units = 5 cm', '5 unità = 5 cm'), { size: 19, weight: 800 })}
       <circle cy="104" r="7" fill="${C.sakura}"><animate attributeName="cx" values="70;320;70" dur="4s" repeatCount="indefinite"/></circle>`,
      p('Same quantity + smaller unit = larger number', 'Stessa grandezza + unità minore = numero maggiore'),
      226
    );
  },

  speedDistanceTime: lang => {
    const p = t2(lang);
    const d = divSym(lang);
    return g5Frame(
      p('Distance, time and speed', 'Spazio, tempo e velocità'),
      `<line x1="60" y1="106" x2="580" y2="106" stroke="${C.line}" stroke-width="5"/>
       <rect y="76" width="58" height="28" rx="8" fill="${C.ember}" stroke="${C.text}" stroke-width="2"><animate attributeName="x" values="60;520;60" dur="5s" repeatCount="indefinite"/></rect>
       ${T(120, 146, 's = 120 km', { size: 22, fill: C.data, weight: 800 })}
       ${T(320, 146, 't = 2 h', { size: 22, fill: C.gold, weight: 800 })}
       ${T(510, 146, `v = 120 ${d} 2 = 60 km/h`, { size: 22, fill: C.good, weight: 800 })}
       ${card(70, 174, 500, 48, C.good, 0.14)}${T(320, 206, `v = s ${d} t   ·   s = v × t   ·   t = s ${d} v`, { size: 22, weight: 800 })}`,
      p('At constant speed, distance is proportional to time', 'A velocità costante lo spazio è proporzionale al tempo'),
      276
    );
  },

  currencyExchange: lang => {
    const p = t2(lang);
    return g5Frame(
      p('Currency exchange & smart comparison', 'Cambio di valuta e confronti'),
      `${card(48, 48, 220, 114, C.data, 0.14)}${T(158, 96, '€ 100', { size: 34, fill: C.data, weight: 800 })}${T(158, 136, 'EUR', { size: 20, fill: C.muted })}
       ${arrow(276, 105, 362, 105, C.gold, 5)}${T(319, 84, dec(lang, '× 1.10'), { size: 24, fill: C.gold, weight: 800 })}
       ${card(372, 48, 220, 114, C.good, 0.14)}${T(482, 96, '$ 110', { size: 34, fill: C.good, weight: 800 })}${T(482, 136, 'USD', { size: 20, fill: C.muted })}
       <circle r="7" fill="${C.sakura}"><animateMotion dur="4s" repeatCount="indefinite" path="M276 105 H362"/></circle>`,
      p('Multiply by the rate and compare the final total', 'Moltiplica per il tasso e controlla il totale finale'),
      224
    );
  },

  isometries: lang => {
    const p = t2(lang);
    const items: Array<[string, string, number]> = [
      [p('Translation', 'Traslazione'), p('slide', 'scorrimento'), 108],
      [p('Rotation', 'Rotazione'), p('turn', 'giro intorno a O'), 320],
      [p('Symmetry', 'Simmetria'), p('mirror flip', 'ribaltamento'), 532]
    ];
    const body = items.map(([head, sub, cx], i) => {
      const col = i === 0 ? C.data : i === 1 ? C.gold : C.ember;
      return `${card(cx - 88, 34, 176, 172, col, 0.1)}<polygon points="${cx - 32},136 ${cx},82 ${cx + 28},136" fill="${col}" fill-opacity="0.45" stroke="${col}" stroke-width="3"/>${T(cx, 172, head, { size: 21, fill: col, weight: 800 })}${T(cx, 196, sub, { size: 17, fill: C.muted })}`;
    }).join('');
    return g5Frame(
      p('Isometries keep shape and size equal', 'Le isometrie mantengono forma e dimensioni'),
      `${body}<g><animateTransform attributeName="transform" type="translate" values="0 0;22 0;0 0" dur="3.5s" repeatCount="indefinite"/><polygon points="88,124 112,82 132,124" fill="none" stroke="${C.text}" stroke-width="2.5" stroke-dasharray="4 4"/></g>`,
      p('Slide, turn or flip figures without changing lengths', 'Sposta, ruota o ribalta senza cambiare le misure'),
      260
    );
  },

  sierpinskiFractal: lang => {
    const p = t2(lang);
    return g5Frame(
      p('Similarity & Sierpinski’s triangle', 'Similitudine e triangolo di Sierpinski'),
      `<polygon points="320,34 170,218 470,218" fill="${C.data}" fill-opacity="0.22" stroke="${C.data}" stroke-width="4"/>
       <polygon points="245,126 395,126 320,218" fill="${C.panel}" stroke="${C.gold}" stroke-width="3"/>
       ${showDuring(0.25, 0.95, 6, `<polygon points="282,80 358,80 320,126" fill="${C.panel}" stroke="${C.ember}" stroke-width="2"/><polygon points="207,172 283,172 245,218" fill="${C.panel}" stroke="${C.ember}" stroke-width="2"/><polygon points="357,172 433,172 395,218" fill="${C.panel}" stroke="${C.ember}" stroke-width="2"/>`)}
       ${T(100, 128, p('Similar = same angles', 'Simili = stessi angoli'), { size: 17, fill: C.gold, weight: 700 })}
       ${T(540, 128, p('scaled sides', 'lati in scala'), { size: 17, fill: C.ember, weight: 700 })}`,
      p('Every smaller triangle is similar to the whole fractal', 'Ogni triangolo più piccolo è simile all’intera figura'),
      270
    );
  },

  polygonClasses: lang => {
    const p = t2(lang);
    return g5Frame(
      p('Polygons classified by sides & angles', 'Classificazione dei poligoni'),
      `<polygon points="104,54 46,154 162,154" fill="${C.data}" fill-opacity="0.22" stroke="${C.data}" stroke-width="4"/>${T(104, 186, p('3 · Triangle', '3 · Triangolo'), { size: 20, fill: C.data, weight: 800 })}
       <polygon points="236,54 344,54 330,154 250,154" fill="${C.gold}" fill-opacity="0.22" stroke="${C.gold}" stroke-width="4"/>${T(290, 186, p('4 · Quadrilateral', '4 · Quadrilatero'), { size: 20, fill: C.gold, weight: 800 })}
       <polygon points="484,48 544,88 520,154 448,154 424,88" fill="${C.good}" fill-opacity="0.22" stroke="${C.good}" stroke-width="4"/>${T(484, 186, p('5 · Pentagon', '5 · Pentagono'), { size: 20, fill: C.good, weight: 800 })}
       ${T(320, 224, p('Interior angle sum = (n − 2) × 180°', 'Somma angoli interni = (n − 2) × 180°'), { size: 21, fill: C.ember, weight: 800 })}`,
      p('Regular polygons: equal sides and equal angles', 'Poligoni regolari: lati uguali e angoli uguali'),
      280
    );
  },

  rhomboidRhombus: lang => {
    const p = t2(lang);
    const d = divSym(lang);
    return g5Frame(
      p('Rhomboid and rhombus area', 'Area del romboide e del rombo'),
      `<polygon points="74,58 234,58 204,166 44,166" fill="${C.data}" fill-opacity="0.2" stroke="${C.data}" stroke-width="4"/>
       <line x1="204" y1="58" x2="204" y2="166" stroke="${C.gold}" stroke-width="3" stroke-dasharray="5 5"/>
       ${T(139, 198, p('Rhomboid: A = b × h', 'Romboide: A = b × h'), { size: 21, fill: C.data, weight: 800 })}
       <polygon points="470,40 560,112 470,184 380,112" fill="${C.good}" fill-opacity="0.2" stroke="${C.good}" stroke-width="4"/>
       <line x1="470" y1="40" x2="470" y2="184" stroke="${C.ember}" stroke-width="3" stroke-dasharray="6 4"/>
       <line x1="380" y1="112" x2="560" y2="112" stroke="${C.gold}" stroke-width="3" stroke-dasharray="6 4"/>
       ${T(470, 214, `A = (D × d) ${d} 2`, { size: 21, fill: C.good, weight: 800 })}`,
      p('Cut & slide transforms rhomboid; diagonals halve rhombus', 'Taglia il romboide; le diagonali dimezzano il rombo'),
      270
    );
  },

  trapeziumArea: lang => {
    const p = t2(lang);
    const d = divSym(lang);
    return g5Frame(
      p('The trapezium area', 'Area del trapezio'),
      `<polygon points="180,58 340,58 410,174 110,174" fill="${C.gold}" fill-opacity="0.25" stroke="${C.gold}" stroke-width="4"/>
       ${showDuring(0.25, 0.95, 6, `<polygon points="340,58 480,58 410,174" fill="${C.data}" fill-opacity="0.22" stroke="${C.data}" stroke-width="3" stroke-dasharray="6 4"/>`)}
       <line x1="180" y1="58" x2="180" y2="174" stroke="${C.ember}" stroke-width="3" stroke-dasharray="5 5"/>
       ${T(260, 44, 'b', { size: 24, fill: C.gold, weight: 800 })}${T(260, 202, 'B', { size: 24, fill: C.gold, weight: 800 })}${T(162, 122, 'h', { size: 24, fill: C.ember, weight: 800 })}
       ${T(470, 140, `A = (B + b) × h ${d} 2`, { size: 24, fill: C.good, weight: 800 })}`,
      p('Two identical trapezia form a parallelogram of base B + b', 'Due trapezi uguali formano un parallelogramma (B + b)'),
      264
    );
  },

  triangleArea: lang => {
    const p = t2(lang);
    const d = divSym(lang);
    return g5Frame(
      p('Triangle area and height', 'Area e altezza del triangolo'),
      `<rect x="110" y="56" width="240" height="126" fill="none" stroke="${C.line}" stroke-width="2" stroke-dasharray="6 5"/>
       <polygon points="110,182 350,182 254,56" fill="${C.good}" fill-opacity="0.24" stroke="${C.good}" stroke-width="4"/>
       <line x1="254" y1="56" x2="254" y2="182" stroke="${C.ember}" stroke-width="4" stroke-dasharray="6 4"/>
       ${T(230, 208, 'b', { size: 26, fill: C.good, weight: 800 })}${T(236, 124, 'h', { size: 24, fill: C.ember, weight: 800 })}
       ${card(392, 58, 216, 122, C.gold, 0.14)}${T(500, 106, `A = (b × h) ${d} 2`, { size: 26, fill: C.gold, weight: 800 })}${T(500, 148, p('angle sum = 180°', 'somma angoli = 180°'), { size: 19, fill: C.muted })}`,
      p('A triangle is half of a rectangle with same base & height', 'Ogni triangolo è metà del rettangolo con uguali base e h'),
      266
    );
  },

  compositeFloorPlan: lang => {
    const p = t2(lang);
    return g5Frame(
      p('Complex polygons: split and add', 'Poligoni complessi: scomponi e somma'),
      `<polygon points="110,50 310,50 310,118 450,118 450,198 110,198" fill="${C.data}" fill-opacity="0.2" stroke="${C.data}" stroke-width="4"/>
       <line x1="310" y1="118" x2="310" y2="198" stroke="${C.gold}" stroke-width="4" stroke-dasharray="8 6"/>
       ${T(210, 134, p('Rect A', 'Rett. A'), { size: 24, fill: C.data, weight: 800 })}
       ${T(380, 164, p('Rect B', 'Rett. B'), { size: 22, fill: C.gold, weight: 800 })}
       ${T(530, 130, 'A = A₁ + A₂', { size: 24, fill: C.good, weight: 800 })}`,
      p('Divide complex shapes into rectangles and triangles', 'Dividi la pianta in rettangoli e triangoli noti'),
      258
    );
  },

  circumferenceUnroll: lang => {
    const p = t2(lang);
    const dStr = dec(lang, '3.14');
    return g5Frame(
      p('Unrolling the circumference: C = d × π', 'Misurare la circonferenza: C = d × π'),
      `<circle cx="150" cy="102" r="52" fill="${C.data}" fill-opacity="0.18" stroke="${C.data}" stroke-width="4"/>
       <line x1="98" y1="102" x2="202" y2="102" stroke="${C.ember}" stroke-width="4"/>${T(150, 90, 'd', { size: 22, fill: C.ember, weight: 800 })}
       <line x1="150" y1="176" x2="489" y2="176" stroke="${C.gold}" stroke-width="7" stroke-linecap="round"/>
       <circle cy="176" r="7" fill="${C.sakura}"><animate attributeName="cx" values="150;489;150" dur="5s" repeatCount="indefinite"/></circle>
       ${T(320, 214, `C = ${dStr} × d   (π ≈ ${dStr})`, { size: 25, fill: C.gold, weight: 800 })}`,
      p('Circumference is π (about 3.14) times diameter', 'La circonferenza è π (circa 3,14) volte il diametro'),
      276
    );
  },

  circleAreaWedges: lang => {
    const p = t2(lang);
    const d = divSym(lang);
    return g5Frame(
      p('Area of the circle: A = r × r × π', 'Area del cerchio: A = r × r × π'),
      `<circle cx="164" cy="122" r="72" fill="${C.good}" fill-opacity="0.18" stroke="${C.good}" stroke-width="4"/>
       <path d="M164 50 V194 M92 122 H236 M114 72 L214 172 M214 72 L114 172" stroke="${C.gold}" stroke-width="2"/>
       ${T(202, 110, 'r', { size: 22, fill: C.ember, weight: 800 })}
       ${arrow(266, 122, 326, 122, C.muted, 4)}
       ${card(342, 58, 260, 126, C.good, 0.14)}${T(472, 104, `A = (C × r) ${d} 2`, { size: 24, fill: C.gold, weight: 800 })}${T(472, 152, 'A = r × r × π', { size: 28, fill: C.good, weight: 800 })}`,
      p('Area equals circumference × radius ÷ 2 = r × r × π', 'Area = (circonferenza × raggio) : 2 = r × r × π'),
      254
    );
  },

  solidSurfaceNet: lang => {
    const p = t2(lang);
    const net = [
      [250, 36, 60, 44],
      [250, 84, 60, 44],
      [250, 132, 60, 44],
      [250, 180, 60, 44],
      [186, 84, 60, 44],
      [314, 84, 60, 44]
    ].map(([x, y, w, h], i) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="${i < 4 ? C.data : C.gold}" fill-opacity="0.28" stroke="${i < 4 ? C.data : C.gold}" stroke-width="3"/>`).join('');
    return g5Frame(
      p('Surface area: unfold into a 2D net', 'Superficie dei solidi: lo sviluppo piano'),
      `${net}${card(410, 64, 200, 122, C.good, 0.12)}${T(510, 104, 'S_tot = S_lat + 2·S_b', { size: 20, fill: C.good, weight: 800 })}${T(510, 150, p('Cube = 6 × l²', 'Cubo = 6 × l²'), { size: 22, weight: 800 })}`,
      p('Add the areas of all faces in the unfolded net', 'Somma l’area di tutte le facce nello sviluppo piano'),
      270
    );
  },

  volumeUnitCubes: lang => {
    const p = t2(lang);
    const cubes = Array.from({ length: 4 }, (_, i) => {
      const x = 110 + i * 48;
      return `<rect x="${x}" y="114" width="44" height="44" fill="${C.data}" fill-opacity="0.3" stroke="${C.data}" stroke-width="3"/><rect x="${x}" y="70" width="44" height="44" fill="${C.gold}" fill-opacity="0.28" stroke="${C.gold}" stroke-width="3"/>`;
    }).join('');
    return g5Frame(
      p('Volume: counting unit cubes', 'Volume dei solidi: cubetti unitari'),
      `${cubes}${card(348, 58, 250, 126, C.good, 0.14)}${T(473, 104, 'V = l × w × h', { size: 28, fill: C.good, weight: 800 })}${T(473, 148, '1 dm³ = 1 litre', { size: 22, fill: C.gold, weight: 800 })}`,
      p('Volume measures 3D space inside a solid in cubic units', 'Il volume misura lo spazio occupato in unità cubiche'),
      244
    );
  },

  // Delegated fallback keys matching legacy GRADE5_MATH_VISUAL_KEYS
  placeValue: () => '',
  numberLine: () => '',
  venn: () => '',
  barChart: () => '',
  fractionBar: () => '',
  percentGrid: () => '',
  cartesian: () => '',
  angles: () => '',
  regularPolygon: () => '',
  circle: () => '',
  solids: () => '',
  lengthTable: () => '',
  capacityTable: () => '',
  massTable: () => '',
  areaTable: () => '',
  volumeTable: () => '',
  timeTable: () => '',
  equivalences: () => '',
  trade: () => '',
  areaFormulas: () => ''
};

export const GRADE5_MATH_TOPIC_BY_MISSION: Record<string, Grade5MathTopicKey> = {
  'g5m-warmup-numbers': 'placeValue',
  'g5m-warmup-measure-problems': 'problemSteps',
  'g5m-problem-method': 'problemSteps',
  'g5m-problem-diagrams': 'expressionTree',
  'g5m-problem-strategies': 'expressionTree',
  'g5m-proportional': 'proportionTable',
  'g5m-classification': 'venn',
  'g5m-logic-statements': 'logicStatements',
  'g5m-statistics-graphs': 'barChart',
  'g5m-mode-mean-median': 'modeMeanMedian',
  'g5m-probability': 'probabilityScale',
  'g5m-problems-review': 'problemSteps',
  'g5m-natural-numbers': 'placeValue',
  'g5m-roman-numerals': 'romanNumerals',
  'g5m-big-numbers': 'bigNumbers',
  'g5m-powers': 'powers',
  'g5m-negative-numbers': 'numberLine',
  'g5m-decimals': 'decimalPlaces',
  'g5m-rounding': 'roundingHill',
  'g5m-add-subtract': 'inverseOps',
  'g5m-multiply-divide': 'inverseOps',
  'g5m-times-10-100-1000': 'shiftPowersTen',
  'g5m-properties': 'operationProperties',
  'g5m-decimal-division': 'shiftPowersTen',
  'g5m-mental-estimates': 'roundingHill',
  'g5m-expressions': 'expressionsOrder',
  'g5m-multiples-divisors': 'multiplesDivisors',
  'g5m-divisibility': 'divisibilityRules',
  'g5m-primes': 'primeFactorTree',
  'g5m-numbers-review': 'expressionsOrder',
  'g5m-fractions': 'fractionBar',
  'g5m-equivalent-fractions': 'equivalentFractions',
  'g5m-compare-fractions': 'compareFractions',
  'g5m-fractions-decimals': 'fractionsDecimals',
  'g5m-fraction-of-quantity': 'fractionOfWhole',
  'g5m-whole-from-fraction': 'wholeFromFraction',
  'g5m-percentages': 'percentGrid',
  'g5m-managing-money': 'budgetMoney',
  'g5m-fractions-review': 'equivalentFractions',
  'g5m-what-is-measuring': 'measuringUnit',
  'g5m-length': 'lengthTable',
  'g5m-capacity': 'capacityTable',
  'g5m-mass': 'massTable',
  'g5m-area-units': 'areaTable',
  'g5m-volume-units': 'volumeTable',
  'g5m-time': 'timeTable',
  'g5m-speed': 'speedDistanceTime',
  'g5m-money-trade': 'trade',
  'g5m-exchange-online': 'currencyExchange',
  'g5m-measure-review': 'equivalences',
  'g5m-cartesian': 'cartesian',
  'g5m-isometries': 'isometries',
  'g5m-similarity-fractals': 'sierpinskiFractal',
  'g5m-lines-angles': 'angles',
  'g5m-polygons': 'polygonClasses',
  'g5m-rectangle-square': 'areaFormulas',
  'g5m-rhomboid-rhombus': 'rhomboidRhombus',
  'g5m-trapezium': 'trapeziumArea',
  'g5m-triangle': 'triangleArea',
  'g5m-complex-polygons': 'compositeFloorPlan',
  'g5m-regular-polygons': 'regularPolygon',
  'g5m-circle': 'circle',
  'g5m-circumference-pi': 'circumferenceUnroll',
  'g5m-circle-area': 'circleAreaWedges',
  'g5m-solids': 'solids',
  'g5m-solid-area': 'solidSurfaceNet',
  'g5m-volume': 'volumeUnitCubes',
  'g5m-geometry-review': 'areaFormulas',
  'g5m-final-invalsi': 'probabilityScale'
};

const TOPIC_TO_EXISTING_VIS: Partial<Record<Grade5MathTopicKey, string>> = {
  placeValue: 'g5m-place-value',
  numberLine: 'g5m-number-line',
  venn: 'g5m-venn',
  barChart: 'g5m-bar-chart',
  fractionBar: 'g5m-fraction-bar',
  percentGrid: 'g5m-percent-grid',
  cartesian: 'g5m-cartesian',
  angles: 'g5m-angles',
  regularPolygon: 'g5m-regular-polygon',
  circle: 'g5m-circle',
  solids: 'g5m-solids',
  lengthTable: 'g5m-length-table',
  capacityTable: 'g5m-capacity-table',
  massTable: 'g5m-mass-table',
  areaTable: 'g5m-area-table',
  volumeTable: 'g5m-volume-table',
  timeTable: 'g5m-time-table',
  equivalences: 'g5m-equivalences',
  trade: 'g5m-trade',
  areaFormulas: 'g5m-area-formulas'
};

export function resolveExistingGrade5VisKey(missionId: string): string | null {
  const topic = GRADE5_MATH_TOPIC_BY_MISSION[missionId];
  return topic ? TOPIC_TO_EXISTING_VIS[topic] ?? null : null;
}

export function renderGrade5MathTopicDiagram(missionId: string, lang: Language): string | null {
  const topic = GRADE5_MATH_TOPIC_BY_MISSION[missionId];
  if (!topic) return null;
  if (TOPIC_TO_EXISTING_VIS[topic]) return null;
  const builder = GRADE5_MATH_TOPICS[topic];
  return builder ? builder(lang) : null;
}
