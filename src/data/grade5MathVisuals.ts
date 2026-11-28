import type { Language } from '../types';
import { supportText, usesDecimalComma } from './visualI18n';
import { animateGrade5 } from './mathMotion';
import { MATH5_BUILDERS } from './mathVisualsG5';
import { renderGrade5MathTopicDiagram, resolveExistingGrade5VisKey } from './mathVisualsG5Topics';

/**
 * Visual aids for Grade 5 Mathematics lessons (tables of measures, number line,
 * fraction bars, Cartesian plane, shapes). Each renderer returns trusted static
 * HTML/SVG built only from constants in this file.
 */
type Pair = [string, string];
const t = (pair: Pair, lang: Language) => supportText(pair[0], pair[1], lang);
/** Decimal separator follows the language: point in English, comma in Italian. */
const n = (value: string, lang: Language) => (usesDecimalComma(lang) ? value.replace(/\./g, ',') : value);

interface UnitCell { sym: string; name: Pair; value: string; kind: 'mul' | 'uni' | 'sub' }

const measureTable = (caption: Pair, cells: UnitCell[], lang: Language, note?: Pair): string => {
  const head = cells.map(c => `<th class="${c.kind}">${c.sym === '—' ? '' : `<b>${c.sym}</b>`}<small>${t(c.name, lang)}</small></th>`).join('');
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
  'g5m-trade': lang => `<figure class="g5m-fig"><figcaption>${t(['Buying and selling', 'La compravendita'], lang)}</figcaption><div class="g5m-two"><div class="g5m-box mul"><b>${t(['Profit', 'Guadagno'], lang)}</b><p>${t(['revenue − cost', 'ricavo − spesa'], lang)}</p></div><div class="g5m-box sub"><b>${t(['Loss', 'Perdita'], lang)}</b><p>${t(['cost − revenue', 'spesa − ricavo'], lang)}</p></div></div></figure>`,
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
};

export function getGrade5MathVisual(key: string, lang: Language): string | null {
  const redrawn = MATH5_BUILDERS[key];
  if (redrawn) return redrawn(lang);
  const render = RENDERERS[key];
  return render ? animateGrade5(key, render(lang)) : null;
}

export function getGrade5MathMissionVisual(missionId: string, lang: Language): string | null {
  const existingKey = resolveExistingGrade5VisKey(missionId);
  if (existingKey) return getGrade5MathVisual(existingKey, lang);
  return renderGrade5MathTopicDiagram(missionId, lang);
}

export const GRADE5_MATH_VISUAL_KEYS = [...Object.keys(RENDERERS), ...Object.keys(MATH5_BUILDERS)];
