import assert from 'node:assert/strict';
import {
  GHANA_JHS_SCIENCE_COVERAGE_SUMMARY,
  GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE,
  GHANA_JHS_SCIENCE_OFFICIAL_INDICATOR_COUNTS,
  GHANA_JHS_SCIENCE_INDICATOR_SOURCE
} from '../src/data/ghanaJhsScienceIndicatorCrosswalk';

const expectedByGrade = [
  { grade: 7, official: 53, entries: 37, unreferenced: 16 },
  { grade: 8, official: 45, entries: 33, unreferenced: 12 },
  { grade: 9, official: 53, entries: 47, unreferenced: 6 }
];

assert.equal(GHANA_JHS_SCIENCE_OFFICIAL_INDICATOR_COUNTS.length, 15);
assert.equal(GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE.length, 118);
assert.equal(new Set(GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE.map(item => item.indicatorCode)).size, 118);

for (const expected of expectedByGrade) {
  const actual = GHANA_JHS_SCIENCE_COVERAGE_SUMMARY.find(item => item.grade === expected.grade);
  assert.ok(actual, `Basic ${expected.grade} has a crosswalk summary`);
  assert.equal(actual.officialIndicatorCount, expected.official);
  assert.equal(actual.crosswalkEntries, expected.entries);
  assert.equal(actual.notYetInCrosswalk, expected.unreferenced);
  assert.equal(actual.verifiedCovered, 0, 'No indicator is labelled covered before scene and assessment review');
}

for (const item of GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE) {
  assert.match(item.indicatorCode, /^B[789]\.\d\.\d\.\d\.\d$/);
  assert.ok(item.missionIds.length > 0 || item.teachingSceneEvidence.includes('No matching'), `${item.indicatorCode} either has candidate content or an explicit content gap`);
  assert.equal(item.status, 'needs-review');
  assert.ok(item.teachingSceneEvidence.length > 0);
  assert.ok(item.assessmentEvidence.length > 0);
}

assert.match(GHANA_JHS_SCIENCE_INDICATOR_SOURCE.officialUrl, /^https:\/\//);
console.log('ghanaJhsScienceIndicatorCrosswalk.test.ts ok! Official totals and candidate indicator links verified.');

const basic7Matter = GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE.filter(item => item.grade === 7 && item.strand === 1);
assert.deepEqual(basic7Matter.map(item => item.indicatorCode), [
  'B7.1.1.1.1','B7.1.1.1.2','B7.1.1.1.3','B7.1.1.2.1','B7.1.2.1.1','B7.1.2.1.2'
]);
assert.ok(basic7Matter.every(item => item.officialIndicatorText && item.sourcePdfPage));
assert.ok(basic7Matter.some(item => item.missionIds.length === 0), 'Missing Basic 7 content must remain visible');

const basic7Cycles = GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE.filter(item => item.grade === 7 && item.strand === 2);
assert.deepEqual(basic7Cycles.map(item => item.indicatorCode), [
  'B7.2.1.1.1','B7.2.1.1.2','B7.2.2.1.1','B7.2.2.1.2','B7.2.3.1.1',
  'B7.2.3.1.2','B7.2.4.1.1','B7.2.4.1.2','B7.2.4.2.1','B7.2.4.2.2'
]);
assert.ok(basic7Cycles.every(item => item.officialIndicatorText && item.sourcePdfPage));
assert.ok(basic7Cycles.filter(item => item.missionIds.length === 0).length >= 4,
  'Indicators without a close instructional match must remain explicit content gaps');

const basic7Systems = GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE.filter(item => item.grade === 7 && item.strand === 3);
assert.deepEqual(basic7Systems.map(item => item.indicatorCode), [
  'B7.3.1.1.1','B7.3.1.1.2','B7.3.1.1.3','B7.3.2.1.1','B7.3.2.1.2',
  'B7.3.3.1.1','B7.3.4.1.1','B7.3.4.1.2','B7.3.4.1.3'
]);
assert.ok(basic7Systems.every(item => item.officialIndicatorText && item.sourcePdfPage));
assert.ok(basic7Systems.every(item => item.status === 'needs-review'));

const basic7ForcesEnergy = GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE.filter(item => item.grade === 7 && item.strand === 4);
assert.deepEqual(basic7ForcesEnergy.map(item => item.indicatorCode), [
  'B7.4.1.1.1','B7.4.1.1.2','B7.4.1.2.1','B7.4.1.3.1',
  'B7.4.2.1.1','B7.4.2.1.2','B7.4.2.2.1','B7.4.2.2.2','B7.4.2.2.3',
  'B7.4.3.1.1','B7.4.3.1.2','B7.4.3.1.3'
]);
assert.ok(basic7ForcesEnergy.every(item => item.officialIndicatorText && item.sourcePdfPage));
assert.ok(basic7ForcesEnergy.every(item => item.status === 'needs-review'));
assert.ok(basic7ForcesEnergy.filter(item => item.missionIds.length === 0).length >= 5,
  'Missing heat-transfer, light and electronics content must remain explicit');
