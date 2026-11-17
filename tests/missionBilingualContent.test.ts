import assert from 'node:assert/strict';
import { ARCS, MISSIONS } from '../src/data/gameData';

const isBilingualPair = (value: unknown): value is [string, string] =>
  Array.isArray(value) &&
  value.length === 2 &&
  value.every(part => typeof part === 'string' && part.trim().length > 0);

const requiredMissionFields = ['title', 'topic', 'demon', 'tech'] as const;

for (const mission of MISSIONS) {
  assert.ok(mission.id.trim(), 'Every mission must have an ID');

  const isGhanaCurriculumMission = ['ghcoremath', 'ghcoremath2', 'ghcoremath3'].includes(ARCS[mission.arc]?.subject || '');
  const isBilingualGhanaMission = mission.id === 'gh-core-ss2-surds-indices-modulo';
  const isGhanaEnglishMission = isGhanaCurriculumMission && !isBilingualGhanaMission;
  for (const field of requiredMissionFields) {
    const value = mission[field];
    assert.ok(
      isGhanaEnglishMission
        ? typeof value === 'string' && value.trim().length > 0
        : isBilingualPair(value),
      `Mission ${mission.id} has missing or incomplete ${isGhanaEnglishMission ? 'English' : 'bilingual'} ${field}`
    );
  }

  assert.ok(Array.isArray(mission.scenes) && mission.scenes.length > 0, `Mission ${mission.id} must have scenes`);
  mission.scenes.forEach((scene, index) => {
    if (scene.text !== undefined) {
      assert.ok(
        isGhanaEnglishMission
          ? typeof scene.text === 'string' && scene.text.trim().length > 0
          : isBilingualPair(scene.text),
        `Mission ${mission.id}, scene ${index + 1} has missing or incomplete ${isGhanaEnglishMission ? 'English' : 'bilingual'} dialogue`
      );
    }
  });

  assert.ok(Array.isArray(mission.quiz) && mission.quiz.length > 0, `Mission ${mission.id} must have quiz questions`);
  mission.quiz.forEach((question, index) => {
    assert.ok(isGhanaEnglishMission ? typeof question.q === 'string' && question.q.trim().length > 0 : isBilingualPair(question.q), `Mission ${mission.id}, quiz ${index + 1} has incomplete language-policy prompt`);
    assert.ok(isGhanaEnglishMission ? typeof question.why === 'string' && question.why.trim().length > 0 : isBilingualPair(question.why), `Mission ${mission.id}, quiz ${index + 1} has incomplete language-policy explanation`);
    assert.ok(Array.isArray(question.a) && question.a.length >= 2, `Mission ${mission.id}, quiz ${index + 1} needs answer options`);
    question.a.forEach((answer, answerIndex) => {
      assert.ok(
        isGhanaEnglishMission
          ? typeof answer === 'string' && answer.trim().length > 0
          : isBilingualPair(answer),
        `Mission ${mission.id}, quiz ${index + 1}, answer ${answerIndex + 1} violates its language policy`
      );
    });
  });
}

const surdsMission = MISSIONS.find(mission => mission.id === 'gh-core-ss2-surds-indices-modulo');
assert.ok(surdsMission, 'SHS 2 surds mission must be registered');
assert.ok(isBilingualPair(surdsMission.title));
assert.ok(isBilingualPair(surdsMission.scenes[1].text));
assert.ok(surdsMission.scenes[1].text[1].includes('Un <b>radicale irrazionale</b>'));
assert.ok(!surdsMission.scenes[1].text[1].includes('A <b>surd</b> is'));
console.log('missionBilingualContent.test.ts ok! Validated', MISSIONS.length, 'missions.');
