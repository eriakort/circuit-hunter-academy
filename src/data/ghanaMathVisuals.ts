/**
 * Lesson visuals for the Ghana NaCCA Core Mathematics pathway (SHS 1–3).
 *
 * Ghana content is English-only, so these visuals take no language argument.
 * Each lesson scene shows the NaCCA strand it belongs to, with a small maths
 * motif. Strands follow the names used in the NaCCA SHS Mathematics units.
 */

export type GhanaMathStrand = 'number' | 'algebra' | 'geometry' | 'data' | 'mastery';

export const GHANA_MATH_STRANDS: Record<GhanaMathStrand, { title: string; caption: string }> = {
  number: { title: 'Numbers for Everyday Life', caption: 'Number sense, fractions, ratio, money and real numbers' },
  algebra: { title: 'Algebraic Reasoning', caption: 'Patterns, expressions, equations and functions' },
  geometry: { title: 'Geometry Around Us', caption: 'Shapes, measurement, vectors and trigonometry' },
  data: { title: 'Making Sense of and Using Data', caption: 'Collecting, presenting and interpreting data, and chance' },
  mastery: { title: 'Integrated Core Mathematics', caption: 'Number · Algebra · Geometry · Data working together' }
};

const GREEN = '#1f6b4f';
const RED = '#a8432f';
const GOLD = '#c9952b';
const INK = '#2b2f2a';

const MOTIFS: Record<GhanaMathStrand, string> = {
  number: `<line x1="20" y1="40" x2="260" y2="40" stroke="${INK}" stroke-width="2"/>
    ${[-3, -2, -1, 0, 1, 2, 3].map((v, i) => `<line x1="${40 + i * 33}" y1="34" x2="${40 + i * 33}" y2="46" stroke="${INK}" stroke-width="2"/><text x="${40 + i * 33}" y="64" text-anchor="middle" font-size="13" fill="${INK}">${v < 0 ? '−' + Math.abs(v) : v}</text>`).join('')}
    <circle cx="57" cy="40" r="6" fill="${RED}"/><text x="57" y="22" text-anchor="middle" font-size="12" fill="${RED}">−2.5</text>
    <circle cx="186" cy="40" r="6" fill="${GREEN}"/><text x="186" y="22" text-anchor="middle" font-size="12" fill="${GREEN}">√2</text>`,
  algebra: `<line x1="140" y1="18" x2="140" y2="62" stroke="${INK}" stroke-width="3"/>
    <line x1="60" y1="24" x2="220" y2="24" stroke="${INK}" stroke-width="3"/>
    <path d="M40 48 h50 l-6 10 h-38 z" fill="${GREEN}" opacity=".85"/><text x="65" y="44" text-anchor="middle" font-size="15" fill="${GREEN}">x + 3</text>
    <path d="M190 48 h50 l-6 10 h-38 z" fill="${RED}" opacity=".85"/><text x="215" y="44" text-anchor="middle" font-size="15" fill="${RED}">7</text>
    <line x1="65" y1="24" x2="65" y2="30" stroke="${INK}"/><line x1="215" y1="24" x2="215" y2="30" stroke="${INK}"/>
    <rect x="118" y="62" width="44" height="6" rx="3" fill="${GOLD}"/>`,
  geometry: `<path d="M50 64 L170 64 L170 14 Z" fill="none" stroke="${GREEN}" stroke-width="3" stroke-linejoin="round"/>
    <rect x="160" y="54" width="10" height="10" fill="none" stroke="${INK}"/>
    <path d="M76 64 A26 26 0 0 0 73 54" fill="none" stroke="${RED}" stroke-width="2"/><text x="88" y="58" font-size="13" fill="${RED}">θ</text>
    <circle cx="225" cy="39" r="24" fill="none" stroke="${GOLD}" stroke-width="3"/><line x1="225" y1="39" x2="242" y2="22" stroke="${INK}" stroke-width="2"/><text x="225" y="78" text-anchor="middle" font-size="11" fill="${INK}">N</text>`,
  data: `<line x1="30" y1="66" x2="250" y2="66" stroke="${INK}" stroke-width="2"/>
    ${[28, 44, 20, 52, 36].map((h, i) => `<rect x="${44 + i * 40}" y="${66 - h}" width="26" height="${h}" rx="3" fill="${i % 2 ? RED : GREEN}" opacity=".85"/>`).join('')}
    <circle cx="246" cy="22" r="12" fill="none" stroke="${GOLD}" stroke-width="3"/><text x="246" y="27" text-anchor="middle" font-size="12" fill="${GOLD}">½</text>`,
  mastery: ['number', 'algebra', 'geometry', 'data'].map((strand, i) => `<circle cx="${50 + i * 60}" cy="40" r="22" fill="none" stroke="${[GREEN, RED, GOLD, INK][i]}" stroke-width="3"/><text x="${50 + i * 60}" y="46" text-anchor="middle" font-size="18" fill="${[GREEN, RED, GOLD, INK][i]}">${['ℝ', 'x', '△', '▮'][i]}</text>`).join('')
};

export const GHANA_MATH_VISUAL_KEYS = ['ghmath', 'ghmath-number', 'ghmath-algebra', 'ghmath-geometry', 'ghmath-data', 'ghmath-mastery'];

export function getGhanaMathVisual(key: string): string | null {
  if (!GHANA_MATH_VISUAL_KEYS.includes(key)) return null;
  const strand = (key === 'ghmath' ? 'mastery' : key.slice('ghmath-'.length)) as GhanaMathStrand;
  const info = GHANA_MATH_STRANDS[strand];
  return `<figure class="ghmath-visual" data-strand="${strand}" style="margin:0;display:flex;flex-direction:column;align-items:center;gap:6px">
    <svg viewBox="0 0 280 84" role="img" aria-label="${info.title}" style="width:min(420px,100%);height:auto">${MOTIFS[strand]}</svg>
    <figcaption style="text-align:center">
      <div style="font-family:var(--display, Georgia, serif);font-size:22px;color:${GREEN}">${info.title}</div>
      <div class="muted" style="font-size:14px">${info.caption}</div>
    </figcaption>
  </figure>`;
}

const NACCA_UNIT_STRANDS: [RegExp, GhanaMathStrand][] = [
  [/^Numbers for Everyday Life/i, 'number'],
  [/^Algebraic Reasoning/i, 'algebra'],
  [/^Geometry Around Us/i, 'geometry'],
  [/^Making Sense of and Using Data/i, 'data']
];

/** Picks the NaCCA strand for a mission from its unit title (SHS 2–3) or topic title (SHS 1). */
export function getGhanaMathStrand(unitTitle: string, arcTitle: string): GhanaMathStrand {
  for (const [pattern, strand] of NACCA_UNIT_STRANDS) if (pattern.test(unitTitle)) return strand;
  if (/^Integrated SHS|45-Indicator/i.test(arcTitle)) return 'mastery';
  if (/algebra|equation|inequal|pattern|function|quadratic|straight line|gradient|expression|factoris|sequence|relation/i.test(arcTitle)) return 'algebra';
  if (/statist|data|probab|chance/i.test(arcTitle)) return 'data';
  if (/geometry|spatial|measure|trigonom|vector|bearing|perimeter|area|prism|volume|circle|loci|transform/i.test(arcTitle)) return 'geometry';
  return 'number';
}
