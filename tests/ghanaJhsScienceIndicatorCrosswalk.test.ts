import assert from 'node:assert/strict';
import {
  GHANA_JHS_SCIENCE_COVERAGE_SUMMARY,
  GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE,
  GHANA_JHS_SCIENCE_OFFICIAL_INDICATOR_COUNTS,
  GHANA_JHS_SCIENCE_INDICATOR_SOURCE
} from '../src/data/ghanaJhsScienceIndicatorCrosswalk';

const expectedByGrade = [
  { grade: 7, official: 52, explicit: 0, unreferenced: 52 },
  { grade: 8, official: 45, explicit: 33, unreferenced: 12 },
  { grade: 9, official: 53, explicit: 47, unreferenced: 6 }
];

assert.equal(GHANA_JHS_SCIENCE_OFFICIAL_INDICATOR_COUNTS.length, 15);
assert.equal(GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE.length, 80);
assert.equal(new Set(GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE.map(item => item.indicatorCode)).size, 80);

for (const expected of expectedByGrade) {
  const actual = GHANA_JHS_SCIENCE_COVERAGE_SUMMARY.find(item => item.grade === expected.grade);
  assert.ok(actual, `Basic ${expected.grade} has a crosswalk summary`);
  assert.equal(actual.officialIndicatorCount, expected.official);
  assert.equal(actual.explicitIndicatorReferences, expected.explicit);
  assert.equal(actual.notExplicitlyReferenced, expected.unreferenced);
  assert.equal(actual.verifiedCovered, 0, 'No indicator is labelled covered before scene and assessment review');
}

for (const item of GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE) {
  assert.match(item.indicatorCode, /^B[789]\.\d\.\d\.\d\.\d$/);
  assert.ok(item.missionIds.length > 0, `${item.indicatorCode} has at least one candidate mission`);
  assert.equal(item.status, 'needs-review');
  assert.ok(item.teachingSceneEvidence.length > 0);
  assert.ok(item.assessmentEvidence.length > 0);
}

assert.match(GHANA_JHS_SCIENCE_INDICATOR_SOURCE.officialUrl, /^https:\/\//);
console.log('ghanaJhsScienceIndicatorCrosswalk.test.ts ok! Official totals and candidate indicator links verified.');
