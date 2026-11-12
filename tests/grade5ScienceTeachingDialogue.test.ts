import assert from 'node:assert/strict';
import { ARCS, MISSIONS } from '../src/data/gameData';

const isBilingualPair = (value: unknown): value is [string, string] =>
  Array.isArray(value) &&
  value.length === 2 &&
  value.every(part => typeof part === 'string' && part.trim().length > 0);

const scienceArcIndexes = new Set(
  ARCS.flatMap((arc, index) => (arc.subject === 'science' ? [index] : []))
);
const scienceMissions = MISSIONS.filter(mission => scienceArcIndexes.has(mission.arc));

assert.equal(scienceMissions.length, 51, 'Grade 5 Science must contain all 51 missions');

for (const mission of scienceMissions) {
  const teachingScenes = mission.scenes.filter(scene => scene.text !== undefined);

  assert.ok(
    teachingScenes.length > 0,
    `Grade 5 Science mission ${mission.id} must include at least one teaching dialogue scene`
  );

  for (const [index, scene] of mission.scenes.entries()) {
    if (scene.text === undefined) continue;

    assert.ok(
      isBilingualPair(scene.text),
      `Grade 5 Science mission ${mission.id}, scene ${index + 1} must have English and Italian dialogue`
    );
    assert.notEqual(
      scene.text[0].trim(),
      scene.text[1].trim(),
      `Grade 5 Science mission ${mission.id}, scene ${index + 1} must not duplicate English as Italian`
    );
  }
}

console.log(
  'grade5ScienceTeachingDialogue.test.ts ok! Validated bilingual teaching dialogue in',
  scienceMissions.length,
  'Grade 5 Science missions.'
);
