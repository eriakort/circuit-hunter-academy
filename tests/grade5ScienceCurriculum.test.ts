import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ARCS, MISSIONS, SUBJECTS, UNITS } from '../src/data/gameData';
import { GRADE_CURRICULUM_MAP, getCurriculumSubjects } from '../src/data/curriculumSubjects';
import { ScienceLab } from '../src/components/ScienceLab';
import { Grade5HumanBodyLab } from '../src/components/Grade5HumanBodyLab';
import { Grade5ScienceReviewLab } from '../src/components/Grade5ScienceReviewLab';
import { Grade5EcologyLab } from '../src/components/Grade5EcologyLab';
import { getVisualHtml } from '../src/data/visuals';

const isBilingualPair = (value: unknown): value is [string, string] =>
  Array.isArray(value) &&
  value.length === 2 &&
  value.every(part => typeof part === 'string' && part.trim().length > 0);

const scienceSubject = SUBJECTS.find(subject => subject.id === 'science');
assert.ok(scienceSubject, 'Grade 5 Science & Technology must be registered');
assert.ok(isBilingualPair(scienceSubject.name), 'Science subject name must be bilingual');
assert.ok(isBilingualPair(scienceSubject.blurb), 'Science subject description must be bilingual');
assert.ok(isBilingualPair(scienceSubject.meta), 'Science subject metadata must be bilingual');
assert.ok(scienceSubject.meta[0].includes('Ecosystems'), 'English subject metadata must list the ecosystem learning strand');
assert.ok(scienceSubject.meta[1].includes('Ecosistemi'), 'Italian subject metadata must list the ecosystem learning strand');

// Grade 5 is a primary-school curriculum: it must not inherit Grade 9 Physics.
assert.deepEqual(GRADE_CURRICULUM_MAP.grade5, ['science', 'math5', 'italian', 'hist5', 'geo5']);
assert.deepEqual(
  getCurriculumSubjects('grade5').map(subject => subject.id).sort(),
  ['geo5', 'hist5', 'italian', 'math5', 'science']
);
assert.ok(!getCurriculumSubjects('grade9').some(subject => subject.id === 'science'));
assert.ok(getCurriculumSubjects('grade9').some(subject => subject.id === 'phys'));

const scienceUnits = UNITS.filter(unit => unit.subject === 'science');
const scienceArcIndexes = ARCS.reduce<number[]>((indexes, arc, index) => {
  if (arc.subject === 'science') indexes.push(index);
  return indexes;
}, []);
const scienceArcIndexSet = new Set(scienceArcIndexes);
const scienceArcs = scienceArcIndexes.map(index => ARCS[index]);
const scienceMissions = MISSIONS.filter(mission => scienceArcIndexSet.has(mission.arc));

assert.equal(scienceUnits.length, 6, 'Grade 5 Science must include its six learning units');
assert.equal(scienceArcs.length, 6, 'Each Grade 5 Science unit must have a curriculum arc');
assert.equal(
  scienceMissions.length,
  57,
  'Grade 5 Science must include all 57 foundation, unit, review, and ecosystem missions'
);

for (const [index, unit] of scienceUnits.entries()) {
  assert.ok(isBilingualPair(unit.title), `Science unit ${index + 1} must have a bilingual title`);
}

for (const [index, arc] of scienceArcs.entries()) {
  assert.ok(isBilingualPair(arc.title), `Science arc ${index + 1} must have a bilingual title`);
  assert.ok(typeof arc.pages === 'string' && arc.pages.trim(), `Science arc ${index + 1} must identify its textbook pages`);
  assert.equal(
    UNITS[arc.unit]?.subject,
    'science',
    `Science arc ${index + 1} must reference a Science unit, not another subject`
  );
}

const missionIds = scienceMissions.map(mission => mission.id);
assert.equal(new Set(missionIds).size, scienceMissions.length, 'Grade 5 Science mission IDs must be unique');

for (const mission of scienceMissions) {
  assert.ok(isBilingualPair(mission.title), `Mission ${mission.id} must have a bilingual title`);
  assert.ok(isBilingualPair(mission.topic), `Mission ${mission.id} must have a bilingual topic`);
  assert.ok(
    scienceArcIndexSet.has(mission.arc),
    `Mission ${mission.id} must belong to a Grade 5 Science arc`
  );
}

// Protect the textbook topics explicitly supplied for the Universe unit.
const requiredUniverseMissionIds = [
  'g5u-sky',
  'g5u-big-bang',
  'g5u-solar-system',
  'g5u-earth-movements',
  'g5u-moon',
  'g5u-eclipses',
  'g5u-gravity',
  'g5u-constellations',
  'g5u-space-exploration',
  'g5u-foucault',
  'g5u-review'
];
for (const id of requiredUniverseMissionIds) {
  assert.ok(missionIds.includes(id), `Grade 5 Science is missing required Universe mission: ${id}`);
}

for (const id of ['g5s-plants', 'g5s-animals', 'g5s-ecosystems']) {
  for (const lang of ['en', 'it'] as const) {
    const visHtml = getVisualHtml(id, lang);
    assert.ok(visHtml.includes('<svg') && !/\bundefined\b/.test(visHtml) && !/\bNaN\b/.test(visHtml), `Visual ${id} (${lang}) must render cleanly`);
    const labMarkup = renderToStaticMarkup(React.createElement(ScienceLab, { missionId: id, lang }));
    assert.ok(labMarkup.includes('<svg') && !/\bundefined\b/.test(labMarkup) && !/\bNaN\b/.test(labMarkup), `ScienceLab ${id} (${lang}) must render cleanly`);
  }
}

for (const id of [
  'g5u-sky',
  'g5u-big-bang',
  'g5u-solar-system',
  'g5u-earth-movements',
  'g5u-moon',
  'g5u-eclipses',
  'g5u-gravity',
  'g5u-constellations',
  'g5u-space-exploration',
  'g5u-foucault',
  'g5u-review'
]) {
  for (const lang of ['en', 'it'] as const) {
    const labMarkup = renderToStaticMarkup(React.createElement(ScienceLab, { missionId: id, lang }));
    assert.ok(labMarkup.includes('<svg'), `Universe ScienceLab ${id} (${lang}) must render an illustration`);
    assert.ok(!labMarkup.includes('undefined'), `Universe ScienceLab ${id} (${lang}) must not contain undefined`);
  }
}

for (const id of [
  'g5e-what-is-energy',
  'g5e-energy-sources',
  'g5e-electricity',
  'g5e-light-colours',
  'g5e-light-phenomena',
  'g5e-stem-light',
  'g5e-sound',
  'g5e-forces',
  'g5e-magnetism',
  'g5e-stem-magnets',
  'g5e-levers',
  'g5e-geopark-review'
]) {
  for (const lang of ['en', 'it'] as const) {
    const labMarkup = renderToStaticMarkup(React.createElement(ScienceLab, { missionId: id, lang }));
    assert.ok(labMarkup.includes('<svg'), `Energy and Forces ScienceLab ${id} (${lang}) must render an illustration`);
    assert.ok(!labMarkup.includes('undefined'), `Energy and Forces ScienceLab ${id} (${lang}) must not contain undefined`);
  }
}

for (const id of [
  'g5h-one-amazing-organism',
  'g5h-cells-building-blocks',
  'g5h-tissues-and-organs',
  'g5h-locomotor-system',
  'g5h-skeletal-system',
  'g5h-muscular-system',
  'g5h-circulatory-system',
  'g5h-blood-stem',
  'g5h-respiratory-system',
  'g5h-digestive-system',
  'g5h-teeth-and-nutrition',
  'g5h-excretory-system',
  'g5h-reproductive-system',
  'g5h-immune-system',
  'g5h-nervous-system',
  'g5h-sense-organs',
  'g5h-stem-senses',
  'g5h-marvellous-machine',
  'g5h-body-concept-map',
  'g5h-human-body-checkpoint'
]) {
  for (const lang of ['en', 'it'] as const) {
    const labMarkup = renderToStaticMarkup(React.createElement(Grade5HumanBodyLab, { missionId: id, lang }));
    assert.ok(labMarkup.includes('<svg'), `Human Body lab ${id} (${lang}) must render an illustration`);
    assert.ok(!/\bundefined\b|\bNaN\b/.test(labMarkup), `Human Body lab ${id} (${lang}) must render cleanly`);
  }
}

for (const id of [
  'g5x-science-self-assessment',
  'g5x-science-workbook-challenge',
  'g5x-energy-smart-classroom',
  'g5x-habitat-helper',
  'g5x-science-fair-capstone',
  'g5x-stem-paper-bridge'
]) {
  for (const lang of ['en', 'it'] as const) {
    const labMarkup = renderToStaticMarkup(React.createElement(Grade5ScienceReviewLab, { missionId: id, lang }));
    assert.ok(labMarkup.includes('<svg'), `Science practice lab ${id} (${lang}) must render an illustration`);
    assert.ok(!/\bundefined\b|\bNaN\b/.test(labMarkup), `Science practice lab ${id} (${lang}) must render cleanly`);
  }
}

for (const id of [
  'g5s-habitats',
  'g5s-food-chains',
  'g5s-biodiversity',
  'g5s-environment-care',
  'g5s-scientific-investigation'
]) {
  for (const lang of ['en', 'it'] as const) {
    const labMarkup = renderToStaticMarkup(React.createElement(Grade5EcologyLab, { missionId: id, lang }));
    assert.ok(labMarkup.includes('<svg'), `Ecology lab ${id} (${lang}) must render an illustration`);
    assert.ok(!/\bundefined\b|\bNaN\b/.test(labMarkup), `Ecology lab ${id} (${lang}) must render cleanly`);
  }
}

console.log(
  'grade5ScienceCurriculum.test.ts ok! Validated 6 units, 6 arcs, and',
  scienceMissions.length,
  'Grade 5 Science missions.'
);
