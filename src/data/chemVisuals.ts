import type { Language } from '../types';
import { CHEM9_BUILDERS } from './chemVisualsG9';
import { CHEM10_BUILDERS } from './chemVisualsG10';
import { CHEM11_BUILDERS } from './chemVisualsG11';

/** Every Chemistry diagram is drawn large and clear with the shared helpers in sciViz.ts, one file per grade. */
const CHEM_REDRAWN: Record<string, (lang: Language) => string> = { ...CHEM9_BUILDERS, ...CHEM10_BUILDERS, ...CHEM11_BUILDERS };

export const CHEM_VISUAL_KEYS = [
  'chemStates',
  'chemMixtures',
  'chemSeparation',
  'chemLaws',
  'chemMole',
  'chemGas',
  'chemAtomModels',
  'chemOrbitals',
  'chemPeriodic',
  'chemBonds',
  'chemVSEPR',
  'chemNomenclature',
  'chemBalancing',
  'chemStoich',
  'chemSolutions',
  'chemThermo',
  'chemKinetics',
  'chemEquilibrium',
  'chemAcidsPH',
  'chemRedox',
  'chemOrganic',
  'chemPhysVsChem',
  'chemMixVsPure',
  'chemDistillFlow',
  'chemDaltonBlocks',
  'chemAvogadroScale',
  'chemKelvinScale',
  'chemAufbauRules',
  'chemPolarityTug',
  'chemCrissCross',
  'chemSaltFamily',
  'chemSandwichStoich',
  'chemDilutionPour',
  'chemBronstedPass',
  'chemElectroCell',
  'chemPolymers'
] as const;

export type ChemVisualKey = typeof CHEM_VISUAL_KEYS[number];

export function getChemVisual(key: string, lang: Language): string | null {
  const build = CHEM_REDRAWN[key];
  return build ? build(lang) : null;
}
