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

const basic7Liquids = basic7Matter.find(item => item.indicatorCode === 'B7.1.1.1.2');
assert.ok(basic7Liquids);
assert.deepEqual(basic7Liquids.missionIds, ['gh-jhs1-science-importance-liquids']);
assert.equal(basic7Liquids.teachingSceneRefs.length, 5);
assert.equal(basic7Liquids.assessmentQuestionRefs.length, 5);
assert.match(basic7Liquids.teachingSceneEvidence, /water, blood, plant sap/i);


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

const expectedBasic8MatterEvidence: Record<string, { scenes: string[]; questions: string[] }> = {
  'B8.1.1.1.1': {
    scenes: ['gh-jhs2-science-mixture-separation#scene-0', 'gh-jhs2-science-mixture-separation#scene-1'],
    questions: ['gh-jhs2-science-mixture-separation#quiz-0', 'gh-jhs2-science-mixture-separation#quiz-1', 'gh-jhs2-science-mixture-separation#quiz-4']
  },
  'B8.1.1.1.2': {
    scenes: ['gh-jhs2-science-mixture-separation#scene-2', 'gh-jhs2-science-mixture-separation#scene-3'],
    questions: ['gh-jhs2-science-mixture-separation#quiz-2', 'gh-jhs2-science-mixture-separation#quiz-3']
  },
  'B8.1.1.2.1': {
    scenes: ['gh-jhs2-science-atomic-structure#scene-0', 'gh-jhs2-science-atomic-structure#scene-2'],
    questions: ['gh-jhs2-science-atomic-structure#quiz-0', 'gh-jhs2-science-atomic-structure#quiz-2']
  },
  'B8.1.1.2.2': {
    scenes: ['gh-jhs2-science-atomic-structure#scene-1', 'gh-jhs2-science-atomic-structure#scene-3'],
    questions: ['gh-jhs2-science-atomic-structure#quiz-1', 'gh-jhs2-science-atomic-structure#quiz-4']
  },
  'B8.1.2.1.1': {
    scenes: ['gh-jhs2-science-cell-types#scene-1', 'gh-jhs2-science-cell-types#scene-2'],
    questions: ['gh-jhs2-science-cell-types#quiz-0', 'gh-jhs2-science-cell-types#quiz-2']
  },
  'B8.1.2.1.2': {
    scenes: ['gh-jhs2-science-cell-types#scene-1', 'gh-jhs2-science-cell-types#scene-2'],
    questions: ['gh-jhs2-science-cell-types#quiz-1']
  }
};
for (const [code, expected] of Object.entries(expectedBasic8MatterEvidence)) {
  const item = basic8Matter.find(candidate => candidate.indicatorCode === code);
  assert.ok(item, `${code} has a Basic 8 evidence record`);
  assert.deepEqual(item.teachingSceneRefs, expected.scenes, `${code} teaching-scene evidence is indexed`);
  assert.deepEqual(item.assessmentQuestionRefs, expected.questions, `${code} assessment evidence is indexed`);
}


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

const basic9EvidenceByCode = new Map(basic9FinalGaps.map(item => [item.indicatorCode, item]));
const expectedBasic9Evidence: Record<string, { scenes: string[]; questions: string[] }> = {
  'B9.2.3.2.1': {
    scenes: ['gh-jhs3-science-crop-maturity#scene-1', 'gh-jhs3-science-crop-maturity#scene-2'],
    questions: ['gh-jhs3-science-crop-maturity#quiz-1', 'gh-jhs3-science-crop-maturity#quiz-2', 'gh-jhs3-science-crop-maturity#quiz-3']
  },
  'B9.2.4.2.2': {
    scenes: ['gh-jhs3-science-animal-feed-selection#scene-2', 'gh-jhs3-science-animal-feed-selection#scene-3'],
    questions: ['gh-jhs3-science-animal-feed-selection#quiz-3', 'gh-jhs3-science-animal-feed-selection#quiz-4']
  },
  'B9.2.4.2.3': {
    scenes: ['gh-jhs3-science-animal-feed-selection#scene-3'],
    questions: ['gh-jhs3-science-animal-feed-selection#quiz-4']
  },
  'B9.4.1.2.2': {
    scenes: ['gh-jhs3-science-energy-light#scene-3'],
    questions: ['gh-jhs3-science-energy-light#quiz-3']
  },
  'B9.4.1.2.3': {
    scenes: ['gh-jhs3-science-energy-light#scene-3'],
    questions: ['gh-jhs3-science-energy-light#quiz-2']
  },
  'B9.4.4.1.2': {
    scenes: ['gh-jhs3-science-force-motion-pressure#scene-3'],
    questions: ['gh-jhs3-science-force-motion-pressure#quiz-4']
  },
  'B9.4.5.1.3': {
    scenes: ['gh-jhs3-science-agricultural-tools#scene-2'],
    questions: []
  }
};
for (const [code, expected] of Object.entries(expectedBasic9Evidence)) {
  const item = basic9EvidenceByCode.get(code);
  assert.ok(item, `${code} has a Basic 9 evidence record`);
  assert.deepEqual(item.teachingSceneRefs, expected.scenes, `${code} teaching-scene evidence is indexed`);
  assert.deepEqual(item.assessmentQuestionRefs, expected.questions, `${code} assessment evidence is indexed without overstating practical assessment`);
}

const basic9MatterEvidence = new Map(
  GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE
    .filter(item => item.grade === 9 && item.strand === 1)
    .map(item => [item.indicatorCode, item])
);
const expectedBasic9MatterEvidence: Record<string, { scenes: string[]; questions: string[] }> = {
  'B9.1.1.1.1': {
    scenes: ['gh-jhs3-science-binary-compounds#scene-0', 'gh-jhs3-science-binary-compounds#scene-1'],
    questions: ['gh-jhs3-science-binary-compounds#quiz-0', 'gh-jhs3-science-binary-compounds#quiz-1']
  },
  'B9.1.1.1.2': {
    scenes: ['gh-jhs3-science-binary-compounds#scene-1', 'gh-jhs3-science-binary-compounds#scene-2', 'gh-jhs3-science-binary-compounds#scene-3'],
    questions: ['gh-jhs3-science-binary-compounds#quiz-2', 'gh-jhs3-science-binary-compounds#quiz-3', 'gh-jhs3-science-binary-compounds#quiz-4']
  },
  'B9.1.1.1.3': {
    scenes: ['gh-jhs3-science-acids-bases-salts#scene-0', 'gh-jhs3-science-acids-bases-salts#scene-1', 'gh-jhs3-science-acids-bases-salts#scene-2', 'gh-jhs3-science-acids-bases-salts#scene-3'],
    questions: ['gh-jhs3-science-acids-bases-salts#quiz-0', 'gh-jhs3-science-acids-bases-salts#quiz-1', 'gh-jhs3-science-acids-bases-salts#quiz-2', 'gh-jhs3-science-acids-bases-salts#quiz-3', 'gh-jhs3-science-acids-bases-salts#quiz-4']
  },
  'B9.1.1.2.1': {
    scenes: ['gh-jhs3-science-chemical-bonding#scene-0', 'gh-jhs3-science-chemical-bonding#scene-1', 'gh-jhs3-science-chemical-bonding#scene-2', 'gh-jhs3-science-chemical-bonding#scene-3'],
    questions: ['gh-jhs3-science-chemical-bonding#quiz-0', 'gh-jhs3-science-chemical-bonding#quiz-1', 'gh-jhs3-science-chemical-bonding#quiz-2', 'gh-jhs3-science-chemical-bonding#quiz-3', 'gh-jhs3-science-chemical-bonding#quiz-4']
  },
  'B9.1.2.1.1': {
    scenes: ['gh-jhs3-science-specialised-plant-cells#scene-0', 'gh-jhs3-science-specialised-human-cells#scene-0'],
    questions: ['gh-jhs3-science-specialised-plant-cells#quiz-0', 'gh-jhs3-science-specialised-human-cells#quiz-4']
  },
  'B9.1.2.1.2': {
    scenes: ['gh-jhs3-science-specialised-plant-cells#scene-1', 'gh-jhs3-science-specialised-plant-cells#scene-2', 'gh-jhs3-science-specialised-plant-cells#scene-3'],
    questions: ['gh-jhs3-science-specialised-plant-cells#quiz-1', 'gh-jhs3-science-specialised-plant-cells#quiz-2', 'gh-jhs3-science-specialised-plant-cells#quiz-3', 'gh-jhs3-science-specialised-plant-cells#quiz-4']
  },
  'B9.1.2.1.3': {
    scenes: ['gh-jhs3-science-specialised-human-cells#scene-1', 'gh-jhs3-science-specialised-human-cells#scene-2', 'gh-jhs3-science-specialised-human-cells#scene-3'],
    questions: ['gh-jhs3-science-specialised-human-cells#quiz-0', 'gh-jhs3-science-specialised-human-cells#quiz-1', 'gh-jhs3-science-specialised-human-cells#quiz-2', 'gh-jhs3-science-specialised-human-cells#quiz-3']
  }
};
assert.equal(basic9MatterEvidence.size, 7, 'Basic 9 Diversity of Matter has seven indicator records');
for (const [code, expected] of Object.entries(expectedBasic9MatterEvidence)) {
  const item = basic9MatterEvidence.get(code);
  assert.ok(item, `${code} has a matter-strand evidence record`);
  assert.ok(expected.scenes.every(ref => item.teachingSceneRefs.includes(ref)), `${code} retains its previously mapped teaching scenes`);
  assert.ok(expected.questions.every(ref => item.assessmentQuestionRefs.includes(ref)), `${code} retains its previously mapped assessment questions`);
}



const basic9Cycles = GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE.filter(item => item.grade === 9 && item.strand === 2);
assert.deepEqual(basic9Cycles.map(item => item.indicatorCode), [
  'B9.2.1.1.1','B9.2.1.1.2','B9.2.2.1.1','B9.2.2.1.2','B9.2.3.1.1',
  'B9.2.3.2.2','B9.2.4.1.1','B9.2.4.2.1','B9.2.3.2.1','B9.2.4.2.2','B9.2.4.2.3'
]);
assert.ok(basic9Cycles.every(item => item.status === 'needs-review'));
assert.ok(basic9Cycles.every(item => item.teachingSceneRefs?.length && item.assessmentQuestionRefs?.length));
assert.deepEqual(basic9Cycles.find(item => item.indicatorCode === 'B9.2.4.2.3')?.assessmentQuestionRefs,
  ['gh-jhs3-science-animal-feed-selection#quiz-4']);
assert.match(basic9Cycles.find(item => item.indicatorCode === 'B9.2.3.2.1')?.teachingSceneEvidence ?? '', /harvesting crops for different intended uses/i);




// Basic 9 · Strand 4 — Forces and Energy (NaCCA CCP, pp. 107–113).
const basic9ForcesEnergy = GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE.filter(item => item.grade === 9 && item.strand === 4);
assert.deepEqual(basic9ForcesEnergy.map(item => item.indicatorCode).sort(), [
  'B9.4.1.1.1','B9.4.1.1.2','B9.4.1.2.1','B9.4.1.2.2','B9.4.1.2.3','B9.4.1.2.4','B9.4.1.3.1',
  'B9.4.2.1.1','B9.4.2.2.1','B9.4.3.1.1','B9.4.3.1.2',
  'B9.4.4.1.1','B9.4.4.1.2','B9.4.4.2.1','B9.4.5.1.1','B9.4.5.1.2','B9.4.5.1.3'
]);
assert.ok(basic9ForcesEnergy.every(item => item.status === 'needs-review'));
assert.ok(basic9ForcesEnergy.every(item => item.officialIndicatorText && item.sourcePdfPage));
const basic9ForcesByCode = new Map(basic9ForcesEnergy.map(item => [item.indicatorCode, item]));
const expectedBasic9ForcesEvidence: Record<string, { page: number; scenes: string[]; questions: string[] }> = {
  'B9.4.1.1.1': { page: 107, scenes: ['gh-jhs3-science-energy-light#scene-1'], questions: ['gh-jhs3-science-energy-light#quiz-0'] },
  'B9.4.1.1.2': { page: 107, scenes: ['gh-jhs3-science-energy-light#scene-1'], questions: [] },
  'B9.4.1.2.1': { page: 107, scenes: ['gh-jhs3-science-energy-light#scene-2'], questions: ['gh-jhs3-science-energy-light#quiz-1'] },
  'B9.4.1.2.2': { page: 108, scenes: ['gh-jhs3-science-energy-light#scene-3'], questions: ['gh-jhs3-science-energy-light#quiz-3'] },
  'B9.4.1.2.3': { page: 108, scenes: ['gh-jhs3-science-energy-light#scene-3'], questions: ['gh-jhs3-science-energy-light#quiz-2'] },
  'B9.4.1.2.4': { page: 108, scenes: [], questions: [] },
  'B9.4.1.3.1': { page: 108, scenes: ['gh-jhs3-science-energy-light#scene-3'], questions: ['gh-jhs3-science-energy-light#quiz-4'] },
  'B9.4.2.1.1': { page: 109, scenes: [0,1,2,3].map(n => `gh-jhs3-science-electricity-electronics#scene-${n}`), questions: [0,1,2].map(n => `gh-jhs3-science-electricity-electronics#quiz-${n}`) },
  'B9.4.2.2.1': { page: 109, scenes: ['gh-jhs3-science-electricity-electronics#scene-2'], questions: ['gh-jhs3-science-electricity-electronics#quiz-3','gh-jhs3-science-electricity-electronics#quiz-4'] },
  'B9.4.3.1.1': { page: 110, scenes: [0,1,2,3].map(n => `gh-jhs3-science-energy-conversion#scene-${n}`), questions: [0,1,2,3,4].map(n => `gh-jhs3-science-energy-conversion#quiz-${n}`) },
  'B9.4.3.1.2': { page: 110, scenes: ['gh-jhs3-science-energy-conversion#scene-2','gh-jhs3-science-energy-conversion#scene-3'], questions: ['gh-jhs3-science-energy-conversion#quiz-2','gh-jhs3-science-energy-conversion#quiz-3','gh-jhs3-science-energy-conversion#quiz-4'] },
  'B9.4.4.1.1': { page: 111, scenes: ['gh-jhs3-science-force-motion-pressure#scene-0','gh-jhs3-science-force-motion-pressure#scene-1'], questions: ['gh-jhs3-science-force-motion-pressure#quiz-0','gh-jhs3-science-force-motion-pressure#quiz-1'] },
  'B9.4.4.1.2': { page: 112, scenes: ['gh-jhs3-science-force-motion-pressure#scene-3'], questions: ['gh-jhs3-science-force-motion-pressure#quiz-4'] },
  'B9.4.4.2.1': { page: 112, scenes: ['gh-jhs3-science-force-motion-pressure#scene-0','gh-jhs3-science-force-motion-pressure#scene-2','gh-jhs3-science-force-motion-pressure#scene-3'], questions: ['gh-jhs3-science-force-motion-pressure#quiz-2','gh-jhs3-science-force-motion-pressure#quiz-3','gh-jhs3-science-force-motion-pressure#quiz-4'] },
  'B9.4.5.1.1': { page: 113, scenes: ['gh-jhs3-science-agricultural-tools#scene-0','gh-jhs3-science-agricultural-tools#scene-1'], questions: ['gh-jhs3-science-agricultural-tools#quiz-0','gh-jhs3-science-agricultural-tools#quiz-1'] },
  'B9.4.5.1.2': { page: 113, scenes: ['gh-jhs3-science-agricultural-tools#scene-2','gh-jhs3-science-agricultural-tools#scene-3'], questions: ['gh-jhs3-science-agricultural-tools#quiz-2','gh-jhs3-science-agricultural-tools#quiz-3','gh-jhs3-science-agricultural-tools#quiz-4'] },
  'B9.4.5.1.3': { page: 113, scenes: ['gh-jhs3-science-agricultural-tools#scene-2'], questions: [] }
};
for (const [code, expected] of Object.entries(expectedBasic9ForcesEvidence)) {
  const item = basic9ForcesByCode.get(code);
  assert.ok(item, `${code} has a Basic 9 Forces and Energy evidence record`);
  assert.equal(item.sourcePdfPage, expected.page, `${code} cites its curriculum page`);
  assert.deepEqual(item.teachingSceneRefs, expected.scenes, `${code} links only to relevant teaching scenes`);
  assert.deepEqual(item.assessmentQuestionRefs, expected.questions, `${code} links only to relevant quiz questions`);
}
assert.equal(basic9ForcesByCode.get('B9.4.1.2.4')?.missionIds.length, 0, 'Eclipse formation remains an explicit lesson and assessment gap');
assert.match(basic9ForcesByCode.get('B9.4.2.2.1')?.teachingSceneEvidence ?? '', /Reverse bias is not explicitly explained/);
assert.match(basic9ForcesByCode.get('B9.4.4.2.1')?.teachingSceneEvidence ?? '', /Momentum.*not explicitly taught/);
assert.match(basic9ForcesByCode.get('B9.4.5.1.3')?.assessmentEvidence ?? '', /teacher-observed learner-built tool/);


// Basic 9 · Strand 5 — Humans and the Environment (NaCCA CCP, pp. 114–123).
const basic9HumansEnvironment = GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE.filter(item => item.grade === 9 && item.strand === 5);
assert.deepEqual(basic9HumansEnvironment.map(item => item.indicatorCode).sort(), [
  'B9.5.1.1.1','B9.5.1.2.1','B9.5.2.1.1','B9.5.2.2.1','B9.5.2.2.2',
  'B9.5.3.1.1','B9.5.3.2.1','B9.5.3.2.2','B9.5.4.1.1','B9.5.4.2.1',
  'B9.5.5.1.1','B9.5.5.1.2'
]);
assert.ok(basic9HumansEnvironment.every(item => item.status === 'needs-review'));
assert.ok(basic9HumansEnvironment.every(item => item.officialIndicatorText && item.sourcePdfPage));
const basic9HumansByCode = new Map(basic9HumansEnvironment.map(item => [item.indicatorCode, item]));
const expectedBasic9HumansEvidence: Record<string, { page: number; scenes: string[]; questions: string[] }> = {
  'B9.5.1.1.1': { page: 114, scenes: [1,2,3].map(n => `gh-jhs3-science-waste-management#scene-${n}`), questions: [0,1,2,3,4].map(n => `gh-jhs3-science-waste-management#quiz-${n}`) },
  'B9.5.1.2.1': { page: 114, scenes: [0,1,2,3].map(n => `gh-jhs3-science-waste-management#scene-${n}`), questions: [0,2,3,4].map(n => `gh-jhs3-science-waste-management#quiz-${n}`) },
  'B9.5.2.1.1': { page: 115, scenes: ['gh-jhs3-science-human-health#scene-1','gh-jhs3-science-human-health#scene-2'], questions: ['gh-jhs3-science-human-health#quiz-0','gh-jhs3-science-human-health#quiz-1'] },
  'B9.5.2.2.1': { page: 116, scenes: ['gh-jhs3-science-human-health#scene-0'], questions: ['gh-jhs3-science-human-health#quiz-2'] },
  'B9.5.2.2.2': { page: 116, scenes: ['gh-jhs3-science-human-health#scene-3'], questions: ['gh-jhs3-science-human-health#quiz-3','gh-jhs3-science-human-health#quiz-4'] },
  'B9.5.3.1.1': { page: 118, scenes: ['gh-jhs3-science-industry#scene-1','gh-jhs3-science-industry#scene-2'], questions: ['gh-jhs3-science-industry#quiz-1','gh-jhs3-science-industry#quiz-4'] },
  'B9.5.3.2.1': { page: 118, scenes: ['gh-jhs3-science-industry#scene-0','gh-jhs3-science-industry#scene-2','gh-jhs3-science-industry#scene-3'], questions: ['gh-jhs3-science-industry#quiz-0','gh-jhs3-science-industry#quiz-2','gh-jhs3-science-industry#quiz-3'] },
  'B9.5.3.2.2': { page: 119, scenes: ['gh-jhs3-science-industry#scene-2','gh-jhs3-science-industry#scene-3'], questions: ['gh-jhs3-science-industry#quiz-2','gh-jhs3-science-industry#quiz-3'] },
  'B9.5.4.1.1': { page: 120, scenes: ['gh-jhs3-science-climate-green-economy#scene-1','gh-jhs3-science-climate-green-economy#scene-2','gh-jhs3-science-climate-green-economy#scene-3'], questions: ['gh-jhs3-science-climate-green-economy#quiz-1','gh-jhs3-science-climate-green-economy#quiz-2'] },
  'B9.5.4.2.1': { page: 120, scenes: ['gh-jhs3-science-climate-green-economy#scene-3'], questions: ['gh-jhs3-science-climate-green-economy#quiz-4'] },
  'B9.5.5.1.1': { page: 122, scenes: [0,1,2,3].map(n => `gh-jhs3-science-plant-resources#scene-${n}`), questions: ['gh-jhs3-science-plant-resources#quiz-1','gh-jhs3-science-plant-resources#quiz-2'] },
  'B9.5.5.1.2': { page: 123, scenes: ['gh-jhs3-science-plant-resources#scene-3'], questions: [] }
};
for (const [code, expected] of Object.entries(expectedBasic9HumansEvidence)) {
  const item = basic9HumansByCode.get(code);
  assert.ok(item, `${code} has a Basic 9 Humans and the Environment evidence record`);
  assert.equal(item.sourcePdfPage, expected.page, `${code} cites its curriculum page`);
  assert.deepEqual(item.teachingSceneRefs ?? [], expected.scenes, `${code} links only to relevant teaching scenes`);
  assert.deepEqual(item.assessmentQuestionRefs ?? [], expected.questions, `${code} links only to relevant quiz questions`);
}
assert.match(basic9HumansByCode.get('B9.5.1.1.1')?.teachingSceneEvidence ?? '', /actual school audit/i);
assert.match(basic9HumansByCode.get('B9.5.2.1.1')?.teachingSceneEvidence ?? '', /cancers/i);
assert.match(basic9HumansByCode.get('B9.5.2.2.1')?.teachingSceneEvidence ?? '', /WHO definition/i);
assert.match(basic9HumansByCode.get('B9.5.2.2.2')?.teachingSceneEvidence ?? '', /repeats code B9\.5\.2\.2\.1 on p\. 117/i);
assert.match(basic9HumansByCode.get('B9.5.4.2.1')?.teachingSceneEvidence ?? '', /No actual climate-action dataset/i);
assert.match(basic9HumansByCode.get('B9.5.5.1.2')?.assessmentEvidence ?? '', /teacher-observed practical task/i);

// Basic 9 · Strand 3 — Systems (NaCCA CCP, pp. 139–143).
const basic9Systems = GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE.filter(item => item.grade === 9 && item.strand === 3);
assert.deepEqual(basic9Systems.map(item => item.indicatorCode), [
  'B9.3.1.1.1','B9.3.1.1.2','B9.3.2.1.1','B9.3.3.1.1',
  'B9.3.4.1.1','B9.3.4.1.2','B9.3.4.1.3'
]);
assert.ok(basic9Systems.every(item => item.status === 'needs-review'));
assert.ok(basic9Systems.every(item => item.officialIndicatorText && item.sourcePdfPage));
assert.ok(basic9Systems.every(item => item.teachingSceneRefs?.length && item.assessmentQuestionRefs?.length));
const basic9SystemsEvidence = new Map(basic9Systems.map(item => [item.indicatorCode, item]));
const expectedBasic9SystemsEvidence: Record<string, { page: number; scenes: string[]; questions: string[] }> = {
  'B9.3.1.1.1': {
    page: 139,
    scenes: ['gh-jhs3-science-circulation-respiration#scene-0','gh-jhs3-science-circulation-respiration#scene-1','gh-jhs3-science-circulation-respiration#scene-2'],
    questions: ['gh-jhs3-science-circulation-respiration#quiz-0','gh-jhs3-science-circulation-respiration#quiz-1','gh-jhs3-science-circulation-respiration#quiz-2']
  },
  'B9.3.1.1.2': {
    page: 139,
    scenes: ['gh-jhs3-science-circulation-respiration#scene-3'],
    questions: ['gh-jhs3-science-circulation-respiration#quiz-3','gh-jhs3-science-circulation-respiration#quiz-4']
  },
  'B9.3.2.1.1': {
    page: 140,
    scenes: ['gh-jhs3-science-asteroids-comets#scene-2','gh-jhs3-science-asteroids-comets#scene-3'],
    questions: ['gh-jhs3-science-asteroids-comets#quiz-8']
  },
  'B9.3.3.1.1': {
    page: 141,
    scenes: ['gh-jhs3-science-ecosystem-balance#scene-0','gh-jhs3-science-ecosystem-balance#scene-1','gh-jhs3-science-ecosystem-balance#scene-2','gh-jhs3-science-ecosystem-balance#scene-3'],
    questions: ['gh-jhs3-science-ecosystem-balance#quiz-0','gh-jhs3-science-ecosystem-balance#quiz-1','gh-jhs3-science-ecosystem-balance#quiz-2','gh-jhs3-science-ecosystem-balance#quiz-3','gh-jhs3-science-ecosystem-balance#quiz-4']
  },
  'B9.3.4.1.1': {
    page: 142,
    scenes: ['gh-jhs3-science-manure-materials#scene-0','gh-jhs3-science-manure-materials#scene-1','gh-jhs3-science-manure-materials#scene-2','gh-jhs3-science-manure-materials#scene-3'],
    questions: ['gh-jhs3-science-manure-materials#quiz-0','gh-jhs3-science-manure-materials#quiz-1','gh-jhs3-science-manure-materials#quiz-2','gh-jhs3-science-manure-materials#quiz-3','gh-jhs3-science-manure-materials#quiz-4']
  },
  'B9.3.4.1.2': {
    page: 143,
    scenes: ['gh-jhs3-science-manure-composting#scene-0','gh-jhs3-science-manure-composting#scene-1','gh-jhs3-science-manure-composting#scene-2','gh-jhs3-science-manure-composting#scene-3'],
    questions: ['gh-jhs3-science-manure-composting#quiz-0','gh-jhs3-science-manure-composting#quiz-1','gh-jhs3-science-manure-composting#quiz-2','gh-jhs3-science-manure-composting#quiz-3','gh-jhs3-science-manure-composting#quiz-4']
  },
  'B9.3.4.1.3': {
    page: 143,
    scenes: ['gh-jhs3-science-manure-composting#scene-0','gh-jhs3-science-manure-composting#scene-1','gh-jhs3-science-manure-composting#scene-2','gh-jhs3-science-manure-composting#scene-3'],
    questions: ['gh-jhs3-science-manure-composting#quiz-0','gh-jhs3-science-manure-composting#quiz-1','gh-jhs3-science-manure-composting#quiz-2','gh-jhs3-science-manure-composting#quiz-3','gh-jhs3-science-manure-composting#quiz-4']
  }
};
for (const [code, expected] of Object.entries(expectedBasic9SystemsEvidence)) {
  const item = basic9SystemsEvidence.get(code);
  assert.ok(item, `${code} has a Basic 9 Systems evidence record`);
  assert.equal(item.sourcePdfPage, expected.page, `${code} cites its curriculum page`);
  assert.deepEqual(item.teachingSceneRefs, expected.scenes, `${code} links to focused teaching scenes`);
  assert.deepEqual(item.assessmentQuestionRefs, expected.questions, `${code} links to focused assessment questions`);
}
assert.match(basic9Systems.find(item => item.indicatorCode === 'B9.3.1.1.1')?.assessmentEvidence ?? '', /blood-pressure management/i);
assert.match(basic9Systems.find(item => item.indicatorCode === 'B9.3.4.1.3')?.assessmentEvidence ?? '', /teacher-observed practical/i);


const basic8Cycles = GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE.filter(item => item.grade === 8 && item.strand === 2);
assert.deepEqual(basic8Cycles.map(item => item.indicatorCode), [
  'B8.2.1.1.1','B8.2.1.1.2','B8.2.2.1.1','B8.2.2.1.2',
  'B8.2.3.1.1','B8.2.3.2.1','B8.2.4.1.1','B8.2.4.2.1'
]);
assert.ok(basic8Cycles.every(item => item.status === 'needs-review'));
const expectedBasic8CyclesEvidence: Record<string, { scenes: string[]; questions: string[] }> = {
  'B8.2.1.1.1': { scenes: ['gh-jhs2-science-carbon-cycle#scene-0','gh-jhs2-science-carbon-cycle#scene-1','gh-jhs2-science-carbon-cycle#scene-2'], questions: ['gh-jhs2-science-carbon-cycle#quiz-0','gh-jhs2-science-carbon-cycle#quiz-1','gh-jhs2-science-carbon-cycle#quiz-2','gh-jhs2-science-carbon-cycle#quiz-3'] },
  'B8.2.1.1.2': { scenes: ['gh-jhs2-science-carbon-cycle#scene-3'], questions: ['gh-jhs2-science-carbon-cycle#quiz-4'] },
  'B8.2.2.1.1': { scenes: ['gh-jhs2-science-anopheles-life-cycle#scene-0'], questions: ['gh-jhs2-science-anopheles-life-cycle#quiz-0','gh-jhs2-science-anopheles-life-cycle#quiz-1'] },
  'B8.2.2.1.2': { scenes: ['gh-jhs2-science-anopheles-life-cycle#scene-1','gh-jhs2-science-anopheles-life-cycle#scene-2','gh-jhs2-science-anopheles-life-cycle#scene-3'], questions: ['gh-jhs2-science-anopheles-life-cycle#quiz-2','gh-jhs2-science-anopheles-life-cycle#quiz-3','gh-jhs2-science-anopheles-life-cycle#quiz-4'] },
  'B8.2.3.1.1': { scenes: ['gh-jhs2-science-seed-beds#scene-0','gh-jhs2-science-seed-beds#scene-1','gh-jhs2-science-seed-beds#scene-2'], questions: ['gh-jhs2-science-seed-beds#quiz-0','gh-jhs2-science-seed-beds#quiz-1','gh-jhs2-science-seed-beds#quiz-2'] },
  'B8.2.3.2.1': { scenes: ['gh-jhs2-science-seed-beds#scene-3'], questions: ['gh-jhs2-science-seed-beds#quiz-3','gh-jhs2-science-seed-beds#quiz-4'] },
  'B8.2.4.1.1': { scenes: ['gh-jhs2-science-animal-feed-water#scene-0','gh-jhs2-science-animal-feed-water#scene-1','gh-jhs2-science-animal-feed-water#scene-2'], questions: ['gh-jhs2-science-animal-feed-water#quiz-0','gh-jhs2-science-animal-feed-water#quiz-1','gh-jhs2-science-animal-feed-water#quiz-2'] },
  'B8.2.4.2.1': { scenes: ['gh-jhs2-science-animal-feed-water#scene-3'], questions: ['gh-jhs2-science-animal-feed-water#quiz-3','gh-jhs2-science-animal-feed-water#quiz-4'] }
};
for (const [code, expected] of Object.entries(expectedBasic8CyclesEvidence)) {
  const item = basic8Cycles.find(candidate => candidate.indicatorCode === code);
  assert.ok(item, `${code} has a Basic 8 Cycles evidence record`);
  assert.deepEqual(item.teachingSceneRefs, expected.scenes, `${code} maps to exact teaching scenes`);
  assert.deepEqual(item.assessmentQuestionRefs, expected.questions, `${code} maps to exact assessment questions`);
}
assert.match(basic8Cycles.find(item => item.indicatorCode === 'B8.2.3.2.1')?.assessmentEvidence ?? '', /practical learner task/i);


const basic8HumansEnvironment = GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE
  .filter(item => item.grade === 8 && item.strand === 5)
  .sort((a, b) => a.indicatorCode.localeCompare(b.indicatorCode));
assert.deepEqual(basic8HumansEnvironment.map(item => item.indicatorCode), [
  'B8.5.1.1.1','B8.5.1.1.2','B8.5.2.1.1','B8.5.2.1.2','B8.5.2.2.1',
  'B8.5.3.1.1','B8.5.4.1.1','B8.5.4.1.2','B8.5.5.1.1','B8.5.5.1.2','B8.5.6.1.1'
]);
assert.ok(basic8HumansEnvironment.every(item =>
  item.officialIndicatorText &&
  item.sourcePdfPage &&
  item.teachingSceneRefs.length > 0 &&
  item.assessmentQuestionRefs.length > 0 &&
  item.teachingSceneRefs.every(ref => /#scene-[0-5]$/.test(ref)) &&
  item.assessmentQuestionRefs.every(ref => /#quiz-[0-7]$/.test(ref))
), 'Every Basic 8 Strand 5 indicator must resolve to teaching and assessment evidence');
assert.ok(basic8HumansEnvironment.every(item => item.status === 'needs-review'));

const basic9MatterExpandedEvidence = GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE.filter(item => item.grade === 9 && item.strand === 1);
assert.equal(basic9MatterExpandedEvidence.length, 7);
assert.ok(basic9MatterExpandedEvidence.every(item =>
  item.status === 'needs-review' &&
  item.teachingSceneRefs?.some(ref => ref.endsWith('#scene-4')) &&
  item.assessmentQuestionRefs?.some(ref => /#quiz-[5-7]$/.test(ref))
), 'Basic 9 Strand 1 indicators link to the added applied scene and expanded assessment');
