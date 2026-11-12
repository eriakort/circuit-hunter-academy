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

let questionCount = 0;\nconst optionCountIssues: string[] = [];
for (const mission of scienceMissions) {
  assert.ok(mission.quiz.length > 0, `Mission ${mission.id} must have quiz questions`);

  for (const [questionIndex, question] of mission.quiz.entries()) {
    questionCount += 1;
    const label = `Mission ${mission.id}, quiz question ${questionIndex + 1}`;

    assert.ok(isBilingualPair(question.q), `${label} must have an English and Italian prompt`);
    assert.notEqual(
      question.q[0].trim(),
      question.q[1].trim(),
      `${label} must not show the same prompt in both languages`
    );
    assert.ok(isBilingualPair(question.why), `${label} must have a bilingual explanation`);
    assert.notEqual(
      question.why[0].trim(),
      question.why[1].trim(),
      `${label} must not show the same explanation in both languages`
    );

    if (question.a.length !== 4) {
      optionCountIssues.push(`${label} has ${question.a.length} answer choices`);
    }

    for (const [languageIndex, language] of ['English', 'Italian'].entries()) {
      const answers = question.a.map((answer, answerIndex) => {
        assert.ok(
          isBilingualPair(answer),
          `${label}, answer ${answerIndex + 1} must be bilingual`
        );
        return answer[languageIndex].trim().toLocaleLowerCase();
      });

      assert.equal(
        new Set(answers).size,
        answers.length,
        `${label} must not repeat an answer choice in ${language}`
      );
    }

    // BattleScreen deliberately treats q.a[0] as the correct answer before shuffling.
    assert.ok(question.a[0][0].trim() && question.a[0][1].trim(), `${label} must define its correct answer first`);
  }
}

console.log(
  'grade5ScienceQuizQuality.test.ts ok! Validated',
  questionCount,
  'bilingual questions across',
  scienceMissions.length,
  'missions.'
);
