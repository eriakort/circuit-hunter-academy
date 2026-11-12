import assert from 'node:assert/strict';
import { MISSIONS } from '../src/data/gameData';

const isBilingualPair = (value: unknown): value is [string, string] =>
  Array.isArray(value) &&
  value.length === 2 &&
  value.every(part => typeof part === 'string' && part.trim().length > 0);

const requiredMissionFields = ['title', 'topic', 'demon', 'tech'] as const;

for (const mission of MISSIONS) {
  assert.ok(mission.id.trim(), 'Every mission must have an ID');

  for (const field of requiredMissionFields) {
    assert.ok(
      isBilingualPair(mission[field]),
      `Mission ${mission.id} has missing or incomplete bilingual ${field}`
    );
  }

  assert.ok(Array.isArray(mission.scenes) && mission.scenes.length > 0, `Mission ${mission.id} must have scenes`);
  mission.scenes.forEach((scene, index) => {
    if (scene.text !== undefined) {
      assert.ok(
        isBilingualPair(scene.text),
        `Mission ${mission.id}, scene ${index + 1} has missing or incomplete bilingual dialogue`
      );
    }
  });

  assert.ok(Array.isArray(mission.quiz) && mission.quiz.length > 0, `Mission ${mission.id} must have quiz questions`);
  mission.quiz.forEach((question, index) => {
    assert.ok(isBilingualPair(question.q), `Mission ${mission.id}, quiz ${index + 1} has incomplete bilingual prompt`);
    assert.ok(isBilingualPair(question.why), `Mission ${mission.id}, quiz ${index + 1} has incomplete bilingual explanation`);
    assert.ok(Array.isArray(question.a) && question.a.length >= 2, `Mission ${mission.id}, quiz ${index + 1} needs answer options`);
    question.a.forEach((answer, answerIndex) => {
      assert.ok(
        isBilingualPair(answer),
        `Mission ${mission.id}, quiz ${index + 1}, answer ${answerIndex + 1} is not bilingual`
      );
    });
  });
}

console.log('missionBilingualContent.test.ts ok! Validated', MISSIONS.length, 'missions.');
