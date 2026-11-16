import type { CurriculumId } from './curricula';
import { COUNTRIES, DEFAULT_CURRICULUM_ID } from './curricula';
import { SAVE_KEY, NAVIGATION_KEY } from '../persistence';

/**
 * A learner can keep several curricula on one profile, but only one is active
 * at a time. Progress and navigation are stored in separate namespaces.
 */
export interface CurriculumProfile {
  activeCurriculumId: CurriculumId;
  enabledCurriculumIds: CurriculumId[];
}

export const CURRICULUM_PROFILE_KEY = 'circuit-hunter-academy-curriculum-profile-v1';

const ALL_CURRICULUM_IDS = new Set(
  COUNTRIES.flatMap(country => country.curricula.map(curriculum => curriculum.id))
);

export const getCurriculumSaveKey = (curriculumId: CurriculumId): string =>
  `${SAVE_KEY}:${curriculumId}`;

export const getCurriculumNavigationKey = (curriculumId: CurriculumId): string =>
  `${NAVIGATION_KEY}:${curriculumId}`;

export const createDefaultCurriculumProfile = (): CurriculumProfile => ({
  activeCurriculumId: DEFAULT_CURRICULUM_ID,
  enabledCurriculumIds: [DEFAULT_CURRICULUM_ID]
});

/** Validate profile data read from local storage; never trust persisted IDs. */
export const sanitizeCurriculumProfile = (value: unknown): CurriculumProfile => {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return createDefaultCurriculumProfile();
  }

  const candidate = value as Record<string, unknown>;
  const enabled = Array.isArray(candidate.enabledCurriculumIds)
    ? [...new Set(candidate.enabledCurriculumIds.filter(
        (id): id is CurriculumId => typeof id === 'string' && ALL_CURRICULUM_IDS.has(id as CurriculumId)
      ))]
    : [];

  const active = typeof candidate.activeCurriculumId === 'string'
    && ALL_CURRICULUM_IDS.has(candidate.activeCurriculumId as CurriculumId)
    ? candidate.activeCurriculumId as CurriculumId
    : DEFAULT_CURRICULUM_ID;
  const enabledCurriculumIds = enabled.includes(active) ? enabled : [...enabled, active];

  return { activeCurriculumId: active, enabledCurriculumIds };
};

/** Switch active curriculum without dropping any previously enabled pathway. */
export const switchActiveCurriculum = (
  profile: CurriculumProfile,
  curriculumId: CurriculumId
): CurriculumProfile => ({
  activeCurriculumId: curriculumId,
  enabledCurriculumIds: profile.enabledCurriculumIds.includes(curriculumId)
    ? profile.enabledCurriculumIds
    : [...profile.enabledCurriculumIds, curriculumId]
});

/**
 * Copy a pre-curriculum save into Italy's namespace once. The legacy key is
 * intentionally retained so this migration is non-destructive and repeatable.
 */
export const migrateLegacyItalianSave = (storage: Pick<Storage, 'getItem' | 'setItem'>): boolean => {
  const italianKey = getCurriculumSaveKey(DEFAULT_CURRICULUM_ID);
  if (storage.getItem(italianKey) !== null) return false;

  const legacySave = storage.getItem(SAVE_KEY);
  if (legacySave === null) return false;

  storage.setItem(italianKey, legacySave);
  const legacyNavigation = storage.getItem(NAVIGATION_KEY);
  if (legacyNavigation !== null) {
    storage.setItem(getCurriculumNavigationKey(DEFAULT_CURRICULUM_ID), legacyNavigation);
  }
  return true;
};
