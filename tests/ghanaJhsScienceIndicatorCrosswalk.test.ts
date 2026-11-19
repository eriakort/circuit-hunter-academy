import assert from 'node:assert/strict';
import {
  GHANA_JHS_SCIENCE_COVERAGE_SUMMARY,
  GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE,
  GHANA_JHS_SCIENCE_OFFICIAL_INDICATOR_COUNTS,
  GHANA_JHS_SCIENCE_INDICATOR_SOURCE
} from '../src/data/ghanaJhsScienceIndicatorCrosswalk';

const expectedByGrade = [
  { grade: 7, official: 53, entries: 53, unreferenced: 0 },
  { grade: 8, official: 45, entries: 45, unreferenced: 0 },
  { grade: 9, official: 54, entries: 54, unreferenced: 0 }
];

assert.equal(GHANA_JHS_SCIENCE_OFFICIAL_INDICATOR_COUNTS.length, 15);
assert.equal(GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE.length, 152);
assert.equal(new Set(GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE.map(item => item.indicatorCode)).size, 152);

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
const basic7WaterCycle = basic7Cycles.filter(item => item.indicatorCode === 'B7.2.1.1.1' || item.indicatorCode === 'B7.2.1.1.2');
assert.equal(basic7WaterCycle.length, 2);
assert.ok(basic7WaterCycle.every(item => item.teachingSceneRefs.length > 0 && item.assessmentQuestionRefs.length > 0));
assert.deepEqual(basic7WaterCycle[1].assessmentQuestionRefs, ['gh-jhs1-science-earth-cycles#quiz-4']);
assert.match(basic7WaterCycle[0].teachingSceneEvidence, /transpiration/i);
assert.match(basic7WaterCycle[1].teachingSceneEvidence, /freshwater renewal.*underground water stores.*weather patterns/i);
assert.match(basic7WaterCycle[1].assessmentEvidence, /quiz\[4\].*freshwater renewal/i);

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
  'B7.4.3.1.1','B7.4.3.1.2','B7.4.3.1.3',
  'B7.4.4.1.1','B7.4.4.1.2','B7.4.4.1.3','B7.4.4.1.4',
  'B7.4.4.2.1','B7.4.4.2.2','B7.4.4.2.3','B7.4.5.1.1','B7.4.5.1.2'
]);
assert.ok(basic7ForcesEnergy.every(item => item.officialIndicatorText && item.sourcePdfPage));
assert.ok(basic7ForcesEnergy.every(item => item.status === 'needs-review'));
assert.ok(basic7ForcesEnergy.filter(item => item.missionIds.length === 0).length >= 5,
  'Missing heat-transfer, light and electronics content must remain explicit');

const basic7ForceMotion = GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE.filter(item => item.grade === 7 && item.strand === 4 && item.indicatorCode.startsWith('B7.4.4.'));
assert.deepEqual(basic7ForceMotion.map(item => item.indicatorCode), [
  'B7.4.4.1.1','B7.4.4.1.2','B7.4.4.1.3','B7.4.4.1.4',
  'B7.4.4.2.1','B7.4.4.2.2','B7.4.4.2.3'
]);
assert.ok(basic7ForceMotion.every(item => item.officialIndicatorText && item.sourcePdfPage));

const basic7MachinesAndTools = GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE.filter(item =>
  item.grade === 7 && item.strand === 4 && (item.indicatorCode.startsWith('B7.4.4.2.') || item.indicatorCode.startsWith('B7.4.5.'))
);
assert.deepEqual(basic7MachinesAndTools.map(item => item.indicatorCode), [
  'B7.4.4.2.1','B7.4.4.2.2','B7.4.4.2.3','B7.4.5.1.1','B7.4.5.1.2'
]);
assert.ok(basic7MachinesAndTools.every(item => item.officialIndicatorText && item.sourcePdfPage));
assert.ok(basic7MachinesAndTools.every(item => item.status === 'needs-review'));
assert.ok(basic7MachinesAndTools.some(item => item.missionIds.length === 0),
  'Machine efficiency remains an explicit Basic 7 content gap');

const basic7HumansEnvironment = GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE.filter(item => item.grade === 7 && item.strand === 5);
assert.deepEqual(basic7HumansEnvironment.map(item => item.indicatorCode), [
  'B7.5.1.1.1','B7.5.2.1.1','B7.5.2.2.1','B7.5.3.1.1',
  'B7.5.4.1.1','B7.5.5.1.1','B7.5.5.1.2'
]);
assert.ok(basic7HumansEnvironment.every(item => item.officialIndicatorText && item.sourcePdfPage));
assert.ok(basic7HumansEnvironment.every(item => item.status === 'needs-review'));
assert.ok(basic7HumansEnvironment.every(item => item.missionIds.length === 1));
assert.ok(basic7HumansEnvironment.every(item => item.teachingSceneRefs.length > 0 && item.assessmentQuestionRefs.length > 0));
assert.equal(basic7HumansEnvironment.length, 7, 'Basic 7 Strand 5 has seven official indicator records');

const basic8Matter = GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE.filter(item => item.grade === 8 && item.strand === 1);
assert.deepEqual(basic8Matter.map(item => item.indicatorCode), [
  'B8.1.1.1.1','B8.1.1.1.2','B8.1.1.2.1','B8.1.1.2.2','B8.1.2.1.1','B8.1.2.1.2'
]);
assert.ok(basic8Matter.every(item => item.officialIndicatorText && item.sourcePdfPage));
assert.ok(basic8Matter.every(item => item.status === 'needs-review'));
assert.ok(basic8Matter.every(item => item.missionIds.length === 1));

const basic8Remaining = GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE.filter(item =>
  item.grade === 8 && (
    item.indicatorCode === 'B8.3.1.1.2' ||
    item.indicatorCode === 'B8.4.1.1.2' ||
    item.indicatorCode === 'B8.4.1.2.1' ||
    item.indicatorCode === 'B8.4.1.2.2' ||
    item.indicatorCode === 'B8.4.4.1.2' ||
    item.indicatorCode === 'B8.5.2.1.2'
  )
);
assert.deepEqual(basic8Remaining.map(item => item.indicatorCode), [
  'B8.3.1.1.2','B8.4.1.1.2','B8.4.1.2.1','B8.4.1.2.2','B8.4.4.1.2','B8.5.2.1.2'
]);
assert.ok(basic8Remaining.every(item => item.officialIndicatorText && item.sourcePdfPage));
assert.ok(basic8Remaining.every(item => item.status === 'needs-review'));
assert.ok(basic8Remaining.every(item => item.missionIds.length === 1));


const basic9FinalGaps = GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE.filter(item =>
  item.grade === 9 && (
    item.indicatorCode === 'B9.2.3.2.1' ||
    item.indicatorCode === 'B9.2.4.2.2' ||
    item.indicatorCode === 'B9.2.4.2.3' ||
    item.indicatorCode === 'B9.4.1.2.2' ||
    item.indicatorCode === 'B9.4.1.2.3' ||
    item.indicatorCode === 'B9.4.4.1.2' ||
    item.indicatorCode === 'B9.4.5.1.3'
  )
);
assert.deepEqual(basic9FinalGaps.map(item => item.indicatorCode), [
  'B9.2.3.2.1','B9.2.4.2.2','B9.2.4.2.3',
  'B9.4.1.2.2','B9.4.1.2.3','B9.4.4.1.2','B9.4.5.1.3'
]);
assert.ok(basic9FinalGaps.every(item => item.officialIndicatorText && item.sourcePdfPage));
assert.ok(basic9FinalGaps.every(item => item.status === 'needs-review'));
assert.ok(basic9FinalGaps.every(item => item.missionIds.length === 1));
