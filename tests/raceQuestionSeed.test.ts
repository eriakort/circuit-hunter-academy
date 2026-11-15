import assert from 'node:assert/strict';
import { ARCS, MISSIONS } from '../src/data/gameData';
import { GRADE_SUBJECT_IDS } from '../src/data/gradeData';
import { buildRaceQuestionSeed, renderRaceQuestionSeedSql } from '../src/raceQuestionSeed';

const rows = buildRaceQuestionSeed(MISSIONS, ARCS, GRADE_SUBJECT_IDS);
assert.ok(rows.length > 0, 'Question seed must not be empty');

for (const [grade, subjects] of Object.entries(GRADE_SUBJECT_IDS)) {
  for (const subject of subjects) {
    const mixed = rows.filter(row => row.grade === grade && row.subject === subject && row.missionId === 'mix');
    assert.ok(mixed.length >= 10, `${grade}/${subject} must provide at least 10 mixed-review questions`);

    const missionIds = new Set(
      rows.filter(row => row.grade === grade && row.subject === subject && row.missionId !== 'mix')
        .map(row => row.missionId)
    );
    assert.ok(missionIds.size > 0, `${grade}/${subject} must map real curriculum missions`);

    for (const missionId of missionIds) {
      const missionRows = rows.filter(row =>
        row.grade === grade && row.subject === subject && row.missionId === missionId
      );
      assert.ok(missionRows.length > 0);
    }
  }
}

for (const row of rows) {
  assert.ok(row.prompt.every(part => part.trim().length > 0));
  assert.ok(row.choices.length >= 2 && row.choices.length <= 6);
  assert.ok(row.choices.every(choice => choice.every(part => part.trim().length > 0)));
  assert.equal(new Set(row.choices.map(choice => choice[0].trim().toLowerCase())).size, row.choices.length);
  assert.equal(new Set(row.choices.map(choice => choice[1].trim().toLowerCase())).size, row.choices.length);
  assert.equal(row.correctIndex, 0, 'The current Academy quiz source stores the correct choice at index zero');
}

const sql = renderRaceQuestionSeedSql(rows.slice(0, 1));
assert.ok(sql.includes('insert into public.race_question_bank'));
assert.ok(sql.includes('::jsonb'));
assert.ok(sql.includes('where not exists'));
assert.ok(!sql.includes('undefined'));
assert.ok(!sql.includes('NaN'));

const quoteSafeSql = renderRaceQuestionSeedSql([{
  grade: 'grade9',
  subject: 'chem',
  missionId: 'chem_test',
  prompt: ["What's matter?", 'Che cos\'è la materia?'],
  choices: [['Matter', 'Materia'], ['Energy', 'Energia']],
  correctIndex: 0
}]);
assert.ok(quoteSafeSql.includes("What''s matter?"));
assert.ok(quoteSafeSql.includes("Che cos''è la materia?"));

console.log(`raceQuestionSeed.test.ts ok! ${rows.length} grade-aware bilingual rows generated.`);
