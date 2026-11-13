import type { Language } from '../types';

/**
 * Visual aids for Grade 5 Mathematics lessons (tables of measures, number line,
 * fraction bars, Cartesian plane, shapes). Each renderer returns trusted static
 * HTML/SVG built only from constants in this file.
 */
type Pair = [string, string];
const t = (pair: Pair, lang: Language) => (lang === 'it' ? pair[1] : pair[0]);
/** Decimal separator follows the language: point in English, comma in Italian. */
const n = (value: string, lang: Language) => (lang === 'it' ? value.replace(/\./g, ',') : value);

interface UnitCell { sym: string; name: Pair; value: string; kind: 'mul' | 'uni' | 'sub' }

const measureTable = (caption: Pair, cells: UnitCell[], lang: Language, note?: Pair): string => {
  const head = cells.map(c => `<th class="${c.kind}"><b>${c.sym}</b><small>${t(c.name, lang)}</small></th>`).join('');
  const body = cells.map(c => `<td>${n(c.value, lang)}</td>`).join('');
  const groups: Array<[UnitCell['kind'], Pair]> = [
    ['mul', ['Multiples', 'Multipli']],
    ['uni', ['Unit', 'Unità']],
    ['sub', ['Submultiples', 'Sottomultipli']]
  ];
  const groupRow = groups
    .map(([kind, label]) => {
      const span = cells.filter(c => c.kind === kind).length;
      return span ? `<th class="grp ${kind}" colspan="${span}">${t(label, lang)}</th>` : '';
    })
    .join('');
  return `<figure class="g5m-fig"><figcaption>${t(caption, lang)}</figcaption><div class="g5m-scroll"><table class="g5m-table"><thead><tr>${groupRow}</tr><tr>${head}</tr></thead><tbody><tr>${body}</tr></tbody></table></div>${note ? `<p class="g5m-note">${t(note, lang)}</p>` : ''}</figure>`;
};

const LENGTH: UnitCell[] = [
  { sym: 'km', name: ['kilometre', 'chilometro'], value: '1 000 m', kind: 'mul' },
  { sym: 'hm', name: ['hectometre', 'ettometro'], value: '100 m', kind: 'mul' },
  { sym: 'dam', name: ['decametre', 'decametro'], value: '10 m', kind: 'mul' },
  { sym: 'm', name: ['metre', 'metro'], value: '1 m', kind: 'uni' },
  { sym: 'dm', name: ['decimetre', 'decimetro'], value: '0.1 m', kind: 'sub' },
  { sym: 'cm', name: ['centimetre', 'centimetro'], value: '0.01 m', kind: 'sub' },
  { sym: 'mm', name: ['millimetre', 'millimetro'], value: '0.001 m', kind: 'sub' }
];
const CAPACITY: UnitCell[] = [
  { sym: 'hl', name: ['hectolitre', 'ettolitro'], value: '100 l', kind: 'mul' },
  { sym: 'dal', name: ['decalitre', 'decalitro'], value: '10 l', kind: 'mul' },
  { sym: 'l', name: ['litre', 'litro'], value: '1 l', kind: 'uni' },
  { sym: 'dl', name: ['decilitre', 'decilitro'], value: '0.1 l', kind: 'sub' },
  { sym: 'cl', name: ['centilitre', 'centilitro'], value: '0.01 l', kind: 'sub' },
  { sym: 'ml', name: ['millilitre', 'millilitro'], value: '0.001 l', kind: 'sub' }
];
const MASS: UnitCell[] = [
  { sym: 'Mg', name: ['megagram (tonne)', 'megagrammo'], value: '1 000 kg', kind: 'mul' },
  { sym: '—', name: ['', ''], value: '100 kg', kind: 'mul' },
  { sym: '—', name: ['', ''], value: '10 kg', kind: 'mul' },
  { sym: 'kg', name: ['kilogram', 'chilogrammo'], value: '1 kg', kind: 'uni' },
  { sym: 'hg', name: ['hectogram', 'ettogrammo'], value: '0.1 kg', kind: 'sub' },
  { sym: 'dag', name: ['decagram', 'decagrammo'], value: '0.01 kg', kind: 'sub' },
  { sym: 'g', name: ['gram', 'grammo'], value: '0.001 kg', kind: 'sub' }
];
const AREA: UnitCell[] = [
  { sym: 'km²', name: ['square km', 'chilometro quadrato'], value: '1 000 000 m²', kind: 'mul' },
  { sym: 'hm²', name: ['square hm', 'ettometro quadrato'], value: '10 000 m²', kind: 'mul' },
  { sym: 'dam²', name: ['square dam', 'decametro quadrato'], value: '100 m²', kind: 'mul' },
  { sym: 'm²', name: ['square metre', 'metro quadrato'], value: '1 m²', kind: 'uni' },
  { sym: 'dm²', name: ['square dm', 'decimetro quadrato'], value: '0.01 m²', kind: 'sub' },
  { sym: 'cm²', name: ['square cm', 'centimetro quadrato'], value: '0.0001 m²', kind: 'sub' },
  { sym: 'mm²', name: ['square mm', 'millimetro quadrato'], value: '0.000001 m²', kind: 'sub' }
];
const VOLUME: UnitCell[] = [
  { sym: 'km³', name: ['cubic km', 'chilometro cubo'], value: '1 000 000 000 m³', kind: 'mul' },
  { sym: 'hm³', name: ['cubic hm', 'ettometro cubo'], value: '1 000 000 m³', kind: 'mul' },
  { sym: 'dam³', name: ['cubic dam', 'decametro cubo'], value: '1 000 m³', kind: 'mul' },
  { sym: 'm³', name: ['cubic metre', 'metro cubo'], value: '1 m³', kind: 'uni' },
  { sym: 'dm³', name: ['cubic dm', 'decimetro cubo'], value: '0.001 m³', kind: 'sub' },
  { sym: 'cm³', name: ['cubic cm', 'centimetro cubo'], value: '0.000001 m³', kind: 'sub' },
  { sym: 'mm³', name: ['cubic mm', 'millimetro cubo'], value: '0.000000001 m³', kind: 'sub' }
];
const TIME: UnitCell[] = [
  { sym: '—', name: ['year', 'anno'], value: '12 months · 365 d', kind: 'mul' },
  { sym: '—', name: ['week', 'settimana'], value: '7 d · 168 h', kind: 'mul' },
  { sym: 'd', name: ['day', 'giorno'], value: '24 h', kind: 'mul' },
  { sym: 'h', name: ['hour', 'ora'], value: '60 min · 3 600 s', kind: 'mul' },
  { sym: 'min', name: ['minute', 'minuto'], value: '60 s', kind: 'mul' },
  { sym: 's', name: ['second', 'secondo'], value: '1 s', kind: 'uni' },
  { sym: '—', name: ['tenth of a second', 'decimo di secondo'], value: '0.1 s', kind: 'sub' },
  { sym: '—', name: ['hundredth of a second', 'centesimo di secondo'], value: '0.01 s', kind: 'sub' }
];

const svg = (viewBox: string, label: string, body: string) =>
  `<svg viewBox="${viewBox}" class="dia" role="img" aria-label="${label}">${body}</svg>`;

const RENDERERS: Record<string, (lang: Language) => string> = {
  'g5m-place-value': lang => {
    const heads: Array<[string, Pair]> = [
      ['hk', ['hundred-thousands', 'centinaia di migliaia']], ['dak', ['ten-thousands', 'decine di migliaia']], ['uk', ['thousands', 'unità di migliaia']],
      ['h', ['hundreds', 'centinaia']], ['da', ['tens', 'decine']], ['u', ['units', 'unità']]
    ];
    const digits = ['', '4', '6', '2', '0', '8'];
    return `<figure class="g5m-fig"><figcaption>${t(['Place value: 46 208', 'Valore posizionale: 46 208'], lang)}</figcaption><div class="g5m-scroll"><table class="g5m-table"><thead><tr><th class="grp mul" colspan="3">${t(['Thousands class', 'Classe delle migliaia'], lang)}</th><th class="grp sub" colspan="3">${t(['Units class', 'Classe delle unità semplici'], lang)}</th></tr><tr>${heads.map(([s, name], i) => `<th class="${i < 3 ? 'mul' : 'sub'}"><b>${s}</b><small>${t(name, lang)}</small></th>`).join('')}</tr></thead><tbody><tr>${digits.map(d => `<td class="big">${d}</td>`).join('')}</tr></tbody></table></div></figure>`;
  },
  'g5m-length-table': lang => measureTable(['Measures of length', 'Misure di lunghezza'], LENGTH, lang),
  'g5m-capacity-table': lang => measureTable(['Measures of capacity', 'Misure di capacità'], CAPACITY, lang),
  'g5m-mass-table': lang => measureTable(['Measures of mass (weight)', 'Misure di massa (peso)'], MASS, lang, ['Submultiples of the gram: 1 g = 10 dg = 100 cg = 1 000 mg.', 'Sottomultipli del grammo: 1 g = 10 dg = 100 cg = 1 000 mg.']),
  'g5m-area-table': lang => measureTable(['Measures of area', 'Misure di superficie'], AREA, lang, ['Each step is × 100 or ÷ 100.', 'Ogni passo vale × 100 oppure : 100.']),
  'g5m-volume-table': lang => measureTable(['Measures of volume', 'Misure di volume'], VOLUME, lang, ['Each step is × 1 000 or ÷ 1 000. 1 dm³ = 1 l.', 'Ogni passo vale × 1 000 oppure : 1 000. 1 dm³ = 1 l.']),
  'g5m-time-table': lang => measureTable(['Measures of time', 'Misure di tempo'], TIME.map(c => ({ ...c, value: lang === 'it' ? c.value.replace('months', 'mesi') : c.value })), lang, ['1 century = 100 years · February has 28 or 29 days; other months 30 or 31.', '1 secolo = 100 anni · febbraio ha 28 o 29 giorni; gli altri mesi 30 o 31.']),
  'g5m-equivalences': lang => `<figure class="g5m-fig"><figcaption>${t(['Conversions (equivalences)', 'Le equivalenze'], lang)}</figcaption><div class="g5m-two"><div class="g5m-box sub"><b>${t(['To a BIGGER unit', 'A un’unità PIÙ GRANDE'], lang)}</b><p>${t(['Divide by 10, 100, 1 000 (one, two, three steps).', 'Dividi per 10, 100, 1 000 (una, due, tre posizioni).'], lang)}</p><p class="ex">9 500 cl ${lang === 'it' ? ':' : '÷'} 100 = 95 l</p></div><div class="g5m-box mul"><b>${t(['To a SMALLER unit', 'A un’unità PIÙ PICCOLA'], lang)}</b><p>${t(['Multiply by 10, 100, 1 000 (one, two, three steps).', 'Moltiplica per 10, 100, 1 000 (una, due, tre posizioni).'], lang)}</p><p class="ex">6 m × 100 = 600 cm</p></div></div></figure>`,
  'g5m-number-line': lang => {
    let ticks = '';
    for (let v = -5; v <= 5; v++) {
      const x = 40 + (v + 5) * 56;
      const colour = v < 0 ? 'var(--data)' : v > 0 ? 'var(--ember)' : 'var(--text)';
      ticks += `<line x1="${x}" y1="52" x2="${x}" y2="68" stroke="${colour}" stroke-width="2"/><text x="${x}" y="90" text-anchor="middle" style="fill:${colour}">${v > 0 ? '+' + v : v < 0 ? '−' + Math.abs(v) : '0'}</text>`;
    }
    return svg('0 0 640 120', t(['Number line from −5 to +5', 'Retta dei numeri da −5 a +5'], lang),
      `<line x1="20" y1="60" x2="620" y2="60" stroke="var(--muted)" stroke-width="2"/><path d="M620 60 l-10 -6 v12 z" fill="var(--muted)"/>${ticks}<text x="40" y="30" class="sm">${t(['negative numbers', 'numeri negativi'], lang)}</text><text x="600" y="30" text-anchor="end" class="sm">${t(['positive numbers', 'numeri positivi'], lang)}</text>`);
  },
  'g5m-fraction-bar': lang => {
    let parts = '';
    for (let i = 0; i < 4; i++) parts += `<rect x="${60 + i * 130}" y="30" width="130" height="56" fill="${i < 3 ? 'var(--sakura)' : 'transparent'}" fill-opacity="${i < 3 ? 0.55 : 0}" stroke="var(--text)" stroke-width="2"/>`;
    return svg('0 0 640 150', '3/4', `${parts}<text x="320" y="122" text-anchor="middle">${t(['3/4: the whole is split into 4 equal parts and 3 are taken', '3/4: l’intero è diviso in 4 parti uguali e se ne prendono 3'], lang)}</text>`);
  },
  'g5m-percent-grid': lang => {
    let cells = '';
    for (let r = 0; r < 10; r++) for (let c = 0; c < 10; c++) {
      const filled = r * 10 + c < 25;
      cells += `<rect x="${220 + c * 20}" y="${10 + r * 20}" width="18" height="18" rx="2" fill="${filled ? 'var(--gold)' : 'var(--panel2)'}" stroke="var(--line)"/>`;
    }
    return svg('0 0 640 220', '25%', `${cells}<text x="200" y="110" text-anchor="end">25% = 25/100 = 1/4</text><text x="440" y="110">${n('= 0.25', lang)}</text>`);
  },
  'g5m-venn': lang => svg('0 -20 640 240', t(['Venn diagram', 'Diagramma di Eulero-Venn'], lang),
    `<ellipse cx="250" cy="110" rx="150" ry="90" fill="var(--data)" fill-opacity=".15" stroke="var(--data)" stroke-width="2"/><ellipse cx="390" cy="110" rx="150" ry="90" fill="var(--ember)" fill-opacity=".15" stroke="var(--ember)" stroke-width="2"/><text x="150" y="8" text-anchor="middle" class="lbl">A · ${t(['even', 'pari'], lang)}</text><text x="490" y="8" text-anchor="middle" class="lbl">B · &gt; 10</text><text x="180" y="115" text-anchor="middle">2  4  8</text><text x="320" y="115" text-anchor="middle">12  20</text><text x="460" y="115" text-anchor="middle">11  15</text><text x="320" y="145" text-anchor="middle" class="sm">${t(['intersection', 'intersezione'], lang)}</text><text x="600" y="200" text-anchor="end">7</text>`),
  'g5m-bar-chart': lang => {
    const data: Array<[Pair, number, string]> = [[['Football', 'Calcio'], 8, 'var(--data)'], [['Volleyball', 'Pallavolo'], 5, 'var(--ember)'], [['Swimming', 'Nuoto'], 6, 'var(--good)'], [['Dance', 'Danza'], 3, 'var(--sakura)']];
    const bars = data.map(([label, v, col], i) => `<rect x="${120 + i * 120}" y="${190 - v * 18}" width="70" height="${v * 18}" fill="${col}" fill-opacity=".8"/><text x="${155 + i * 120}" y="${182 - v * 18}" text-anchor="middle">${v}</text><text x="${155 + i * 120}" y="210" text-anchor="middle" class="sm">${t(label, lang)}</text>`).join('');
    return svg('0 0 640 220', t(['Bar chart of favourite sports', 'Istogramma degli sport preferiti'], lang), `<line x1="100" y1="190" x2="600" y2="190" stroke="var(--muted)"/><line x1="100" y1="20" x2="100" y2="190" stroke="var(--muted)"/><text x="90" y="30" text-anchor="end" class="sm">${t(['freq.', 'freq.'], lang)}</text>${bars}`);
  },
  'g5m-trade': lang => `<figure class="g5m-fig"><figcaption>${t(['Buying and selling', 'La compravendita'], lang)}</figcaption><div class="g5m-two"><div class="g5m-box mul"><b>${t(['Profit', 'Guadagno'], lang)}</b><p>${t(['revenue − cost', 'ricavo − spesa'], lang)}</p></div><div class="g5m-box sub"><b>${t(['Loss', 'Perdita'], lang)}</b><p>${t(['cost − revenue', 'spesa − ricavo'], lang)}</p></div></div></figure>`,
  'g5m-cartesian': lang => {
    let grid = '';
    for (let i = 0; i <= 8; i++) {
      grid += `<line x1="${120 + i * 40}" y1="20" x2="${120 + i * 40}" y2="260" stroke="var(--line)" stroke-opacity=".6"/>`;
      if (i <= 6) grid += `<line x1="120" y1="${260 - i * 40}" x2="440" y2="${260 - i * 40}" stroke="var(--line)" stroke-opacity=".6"/>`;
      grid += `<text x="${120 + i * 40}" y="280" text-anchor="middle" class="sm">${i}</text>`;
      if (i <= 6 && i > 0) grid += `<text x="108" y="${264 - i * 40}" text-anchor="end" class="sm">${i}</text>`;
    }
    const sep = lang === 'it' ? '; ' : ', ';
    return svg('0 0 560 300', t(['Cartesian plane', 'Piano cartesiano'], lang),
      `${grid}<line x1="120" y1="260" x2="460" y2="260" stroke="var(--text)" stroke-width="2"/><line x1="120" y1="260" x2="120" y2="10" stroke="var(--text)" stroke-width="2"/><text x="470" y="264">x</text><text x="120" y="8" text-anchor="middle">y</text><text x="104" y="284" class="sm">O</text><circle cx="240" cy="60" r="7" fill="var(--ember)"/><text x="252" y="54">A (3${sep}5)</text><line x1="240" y1="260" x2="240" y2="60" stroke="var(--ember)" stroke-dasharray="4 4"/><line x1="120" y1="60" x2="240" y2="60" stroke="var(--ember)" stroke-dasharray="4 4"/>`);
  },
  'g5m-angles': lang => {
    const items: Array<[number, Pair]> = [[45, ['acute', 'acuto']], [90, ['right', 'retto']], [135, ['obtuse', 'ottuso']], [180, ['straight', 'piatto']]];
    const drawn = items.map(([deg, label], i) => {
      const cx = 80 + i * 150, cy = 130, r = 60;
      const rad = (deg * Math.PI) / 180;
      const x2 = cx + r * Math.cos(rad), y2 = cy - r * Math.sin(rad);
      const ax = cx + 22 * Math.cos(rad), ay = cy - 22 * Math.sin(rad);
      return `<line x1="${cx}" y1="${cy}" x2="${cx + r}" y2="${cy}" stroke="var(--data)" stroke-width="3"/><line x1="${cx}" y1="${cy}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="var(--data)" stroke-width="3"/><path d="M${cx + 22} ${cy} A22 22 0 0 0 ${ax.toFixed(1)} ${ay.toFixed(1)}" fill="none" stroke="var(--gold)" stroke-width="2"/><text x="${cx}" y="${cy + 30}" text-anchor="middle">${deg}°</text><text x="${cx}" y="${cy + 50}" text-anchor="middle" class="sm">${t(label, lang)}</text>`;
    }).join('');
    return svg('0 0 640 200', t(['Kinds of angles', 'Tipi di angoli'], lang), drawn);
  },
  'g5m-area-formulas': lang => {
    const rows: Array<[Pair, string, string]> = [
      [['Rectangle', 'Rettangolo'], '(b + h) × 2', 'b × h'],
      [['Square', 'Quadrato'], 'l × 4', 'l × l'],
      [['Rhomboid', 'Romboide'], '(b + l) × 2', 'b × h'],
      [['Rhombus', 'Rombo'], 'l × 4', 'D × d ÷ 2'],
      [['Trapezium', 'Trapezio'], 'B + b + l₁ + l₂', '(B + b) × h ÷ 2'],
      [['Triangle', 'Triangolo'], 'l₁ + l₂ + l₃', 'b × h ÷ 2'],
      [['Regular polygon', 'Poligono regolare'], 'l × n', 'P × a ÷ 2'],
      [['Circle', 'Cerchio'], 'C = d × π', 'r × r × π']
    ];
    const fix = (s: string) => (lang === 'it' ? s.replace(/÷/g, ':') : s);
    return `<figure class="g5m-fig"><figcaption>${t(['Perimeter and area formulas', 'Formule di perimetro e area'], lang)}</figcaption><div class="g5m-scroll"><table class="g5m-table g5m-formulas"><thead><tr><th>${t(['Figure', 'Figura'], lang)}</th><th>${t(['Perimeter', 'Perimetro'], lang)}</th><th>${t(['Area', 'Area'], lang)}</th></tr></thead><tbody>${rows.map(([name, p, a]) => `<tr><td>${t(name, lang)}</td><td>${fix(p)}</td><td>${fix(a)}</td></tr>`).join('')}</tbody></table></div></figure>`;
  },
  'g5m-regular-polygon': lang => {
    const pts: string[] = [];
    for (let i = 0; i < 6; i++) { const a = (Math.PI / 3) * i; pts.push(`${(320 + 90 * Math.cos(a)).toFixed(1)},${(110 + 90 * Math.sin(a)).toFixed(1)}`); }
    const midX = 320 + 90 * Math.cos(Math.PI / 6) * Math.cos(Math.PI / 6) * 1, midY = 110 + 90 * Math.sin(Math.PI / 6) * Math.cos(Math.PI / 6);
    return svg('0 0 640 220', t(['Regular hexagon with apothem', 'Esagono regolare con apotema'], lang),
      `<polygon points="${pts.join(' ')}" fill="var(--data)" fill-opacity=".12" stroke="var(--data)" stroke-width="3"/><circle cx="320" cy="110" r="4" fill="var(--gold)"/><line x1="320" y1="110" x2="${midX.toFixed(1)}" y2="${midY.toFixed(1)}" stroke="var(--gold)" stroke-width="3"/><text x="470" y="60">a = ${t(['apothem', 'apotema'], lang)}</text><text x="470" y="90">a = l × ${n('0.866', lang)}</text><text x="470" y="120">A = P × a ${lang === 'it' ? ':' : '÷'} 2</text>`);
  },
  'g5m-circle': lang => svg('0 0 640 220', t(['Elements of the circle', 'Elementi del cerchio'], lang),
    `<circle cx="220" cy="110" r="90" fill="var(--good)" fill-opacity=".12" stroke="var(--good)" stroke-width="3"/><circle cx="220" cy="110" r="4" fill="var(--text)"/><line x1="130" y1="110" x2="310" y2="110" stroke="var(--ember)" stroke-width="3"/><line x1="220" y1="110" x2="${(220 + 90 * Math.cos(-Math.PI / 3)).toFixed(1)}" y2="${(110 + 90 * Math.sin(-Math.PI / 3)).toFixed(1)}" stroke="var(--data)" stroke-width="3"/><line x1="${(220 + 90 * Math.cos(2.4)).toFixed(1)}" y1="${(110 + 90 * Math.sin(2.4)).toFixed(1)}" x2="${(220 + 90 * Math.cos(0.9)).toFixed(1)}" y2="${(110 + 90 * Math.sin(0.9)).toFixed(1)}" stroke="var(--gold)" stroke-width="2"/><text x="360" y="60" style="fill:var(--data)">r = ${t(['radius', 'raggio'], lang)}</text><text x="360" y="95" style="fill:var(--ember)">d = ${t(['diameter', 'diametro'], lang)} = r × 2</text><text x="360" y="130" style="fill:var(--gold)">${t(['chord', 'corda'], lang)}</text><text x="360" y="165">C = d × π   ·   A = r × r × π</text>`),
  'g5m-solids': lang => svg('0 0 640 200', t(['Cube, cylinder and cone', 'Cubo, cilindro e cono'], lang),
    `<g stroke="var(--data)" stroke-width="2.5" fill="var(--data)" fill-opacity=".1"><rect x="60" y="70" width="90" height="90"/><polygon points="60,70 95,40 185,40 150,70"/><polygon points="150,70 185,40 185,130 150,160"/></g><g stroke="var(--ember)" stroke-width="2.5" fill="var(--ember)" fill-opacity=".1"><ellipse cx="320" cy="50" rx="50" ry="14"/><path d="M270 50 V150 A50 14 0 0 0 370 150 V50"/></g><g stroke="var(--good)" stroke-width="2.5" fill="var(--good)" fill-opacity=".1"><path d="M500 30 L450 150 A50 14 0 0 0 550 150 Z"/></g><text x="120" y="190" text-anchor="middle" class="sm">${t(['cube (polyhedron)', 'cubo (poliedro)'], lang)}</text><text x="320" y="190" text-anchor="middle" class="sm">${t(['cylinder', 'cilindro'], lang)}</text><text x="500" y="190" text-anchor="middle" class="sm">${t(['cone', 'cono'], lang)}</text>`)
};

export function getGrade5MathVisual(key: string, lang: Language): string | null {
  const render = RENDERERS[key];
  return render ? render(lang) : null;
}

export const GRADE5_MATH_VISUAL_KEYS = Object.keys(RENDERERS);
