import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { ARCS, MISSIONS } from '../src/data/gameData';
import { GRADE_SUBJECT_IDS } from '../src/data/gradeData';
import { buildRaceQuestionSeed, renderRaceQuestionSeedSql } from '../src/raceQuestionSeed';

const outputPath = resolve(process.cwd(), 'supabase/seed/race_question_bank.sql');
const rows = buildRaceQuestionSeed(MISSIONS, ARCS, GRADE_SUBJECT_IDS);
const sql = renderRaceQuestionSeedSql(rows);

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, sql, 'utf8');

const summaries = Object.entries(GRADE_SUBJECT_IDS).flatMap(([grade, subjects]) =>
  subjects.map(subject => ({
    grade,
    subject,
    mixedQuestions: rows.filter(row => row.grade === grade && row.subject === subject && row.missionId === 'mix').length
  }))
);

console.log(`Generated ${rows.length} idempotent question rows at ${outputPath}`);
console.table(summaries);
