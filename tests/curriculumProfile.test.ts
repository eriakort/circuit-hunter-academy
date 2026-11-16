import assert from 'node:assert/strict';
import {
  CURRICULUM_PROFILE_KEY,
  createDefaultCurriculumProfile,
  getCurriculumNavigationKey,
  getCurriculumSaveKey,
  migrateLegacyItalianSave,
  sanitizeCurriculumProfile,
  switchActiveCurriculum
} from '../src/data/curriculumProfile';

class MemoryStorage {
  private values = new Map<string, string>();
  getItem(key: string) { return this.values.get(key) ?? null; }
  setItem(key: string, value: string) { this.values.set(key, value); }
}

assert.equal(CURRICULUM_PROFILE_KEY, 'circuit-hunter-academy-curriculum-profile-v1');
assert.deepEqual(createDefaultCurriculumProfile(), {
  activeCurriculumId: 'italy-national',
  enabledCurriculumIds: ['italy-national']
});

assert.notEqual(
  getCurriculumSaveKey('italy-national'),
  getCurriculumSaveKey('ghana-nacca'),
  'each curriculum must have an independent progress namespace'
);
assert.notEqual(
  getCurriculumNavigationKey('italy-national'),
  getCurriculumNavigationKey('ghana-nacca'),
  'navigation must not leak between curricula'
);

const profile = switchActiveCurriculum(createDefaultCurriculumProfile(), 'ghana-nacca');
assert.equal(profile.activeCurriculumId, 'ghana-nacca');
assert.deepEqual(profile.enabledCurriculumIds, ['italy-national', 'ghana-nacca']);
assert.deepEqual(
  switchActiveCurriculum(profile, 'italy-national').enabledCurriculumIds,
  ['italy-national', 'ghana-nacca'],
  'switching back must retain both curriculum selections'
);

assert.deepEqual(sanitizeCurriculumProfile({
  activeCurriculumId: 'unknown',
  enabledCurriculumIds: ['ghana-nacca', 'unknown', 'ghana-nacca']
}), {
  activeCurriculumId: 'italy-national',
  enabledCurriculumIds: ['ghana-nacca', 'italy-national']
});
assert.deepEqual(sanitizeCurriculumProfile(null), createDefaultCurriculumProfile());

const storage = new MemoryStorage();
storage.setItem('circuit-hunter-academy-v2', '{"grade":"grade9","xp":120}');
storage.setItem('circuit-hunter-academy-navigation-v2', '{"view":"map"}');
assert.equal(migrateLegacyItalianSave(storage), true);
assert.equal(storage.getItem(getCurriculumSaveKey('italy-national')), '{"grade":"grade9","xp":120}');
assert.equal(storage.getItem(getCurriculumNavigationKey('italy-national')), '{"view":"map"}');
assert.equal(storage.getItem('circuit-hunter-academy-v2'), '{"grade":"grade9","xp":120}', 'legacy data is retained');
assert.equal(migrateLegacyItalianSave(storage), false, 'migration is idempotent when legacy data is unchanged');
storage.setItem('circuit-hunter-academy-v2', '{"grade":"grade10","xp":180}');
assert.equal(migrateLegacyItalianSave(storage), true, 'legacy Italian updates are reconciled');
assert.equal(storage.getItem(getCurriculumSaveKey('italy-national')), '{"grade":"grade10","xp":180}');
assert.equal(storage.getItem(getCurriculumSaveKey('ghana-nacca')), null, 'reconciliation never touches Ghana progress');

const emptyStorage = new MemoryStorage();
assert.equal(migrateLegacyItalianSave(emptyStorage), false);

console.log('curriculumProfile.test.ts ok');
