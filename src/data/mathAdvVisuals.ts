import type { Language } from '../types';
import { MATH10_BUILDERS } from './mathVisualsG10';
import { MATH11_BUILDERS } from './mathVisualsG11';

/** Diagrams redrawn large and clear (see sciViz.ts), one file per grade. They take priority over the older drawings below. */
const MATH_ADV_REDRAWN: Record<string, (lang: Language) => string> = { ...MATH10_BUILDERS, ...MATH11_BUILDERS };

export const MATH_ADV_VISUAL_KEYS = [
  'math10Systems',
  'math10Radicals',
  'math10CartesianLine',
  'math10QuadraticDelta',
  'math10VieteSystems',
  'math10QuadraticSign',
  'math10EuclidPythagoras',
  'math10ThalesCircle',
  'math10Probability',
  'math11Functions',
  'math11AbsSign',
  'math11Irrational',
  'math11ParabolaCircle',
  'math11EllipseHyperbola',
  'math11ConicsTangent',
  'math11ExpLog',
  'math11UnitCircle',
  'math11TriangleLaws'
] as const;

export type MathAdvVisualKey = typeof MATH_ADV_VISUAL_KEYS[number];

export function getMathAdvVisual(key: string, lang: Language): string | null {
  const redrawn = MATH_ADV_REDRAWN[key];
  return redrawn ? redrawn(lang) : null;
}
