/**
 * Lesson visuals for the Ghana NaCCA Core Mathematics pathway (SHS 1–3).
 *
 * Ghana content is English-only, so these visuals take no language argument.
 * Each lesson scene shows the NaCCA strand it belongs to, with a small maths
 * motif. Strands follow the names used in the NaCCA SHS Mathematics units.
 */

import { GHANA_MOTIFS } from './mathVisualsGh';

export type GhanaMathStrand = 'number' | 'algebra' | 'geometry' | 'data' | 'mastery';

export const GHANA_MATH_STRANDS: Record<GhanaMathStrand, { title: string; caption: string }> = {
  number: { title: 'Numbers for Everyday Life', caption: 'Number sense, fractions, ratio, money and real numbers' },
  algebra: { title: 'Algebraic Reasoning', caption: 'Patterns, expressions, equations and functions' },
  geometry: { title: 'Geometry Around Us', caption: 'Shapes, measurement, vectors and trigonometry' },
  data: { title: 'Making Sense of and Using Data', caption: 'Collecting, presenting and interpreting data, and chance' },
  mastery: { title: 'Integrated Core Mathematics', caption: 'Number · Algebra · Geometry · Data working together' }
};


export const GHANA_MATH_VISUAL_KEYS = ['ghmath', 'ghmath-number', 'ghmath-algebra', 'ghmath-geometry', 'ghmath-data', 'ghmath-mastery'];

export function getGhanaMathVisual(key: string): string | null {
  if (!GHANA_MATH_VISUAL_KEYS.includes(key)) return null;
  const strand = (key === 'ghmath' ? 'mastery' : key.slice('ghmath-'.length)) as GhanaMathStrand;
  const info = GHANA_MATH_STRANDS[strand];
  return `<figure class="ghmath-visual" data-strand="${strand}" style="margin:0;display:flex;flex-direction:column;align-items:center;gap:6px">
    ${GHANA_MOTIFS[strand]()}
    <figcaption style="text-align:center">
      <div style="font-family:var(--display, Georgia, serif);font-size:22px;color:var(--good)">${info.title}</div>
      <div class="muted" style="font-size:16px">${info.caption}</div>
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
