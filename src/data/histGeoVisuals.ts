import type { Language } from '../types';
import { HIST_VISUAL_BUILDERS_5_9 } from './histVisualsG5_9';
import { HIST_VISUAL_BUILDERS_10_11 } from './histVisualsG10_11';
import { HIST_VISUAL_BUILDERS_G5_EXPANSION } from './histVisualsG5Expansion';
import { animateHistGeo } from './histGeoMotion';
import { GEO_VISUAL_BUILDERS_5_9 } from './geoVisualsG5_9';
import { GEO_VISUAL_BUILDERS_10_11 } from './geoVisualsG10_11';

const ALL_HIST_GEO_VISUALS: Record<string, (lang: Language) => string> = {
  ...HIST_VISUAL_BUILDERS_5_9,
  ...HIST_VISUAL_BUILDERS_G5_EXPANSION,
  ...HIST_VISUAL_BUILDERS_10_11,
  ...GEO_VISUAL_BUILDERS_5_9,
  ...GEO_VISUAL_BUILDERS_10_11
};

export const HIST_GEO_VISUAL_KEYS = Object.keys(ALL_HIST_GEO_VISUALS);

export function getHistGeoVisual(key: string, lang: Language): string | null {
  const fn = ALL_HIST_GEO_VISUALS[key];
  return fn ? animateHistGeo(key, fn(lang)) : null;
}
