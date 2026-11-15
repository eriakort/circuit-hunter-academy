import { createClient } from '@supabase/supabase-js';
import { ARCS, MISSIONS } from '../src/data/gameData';
import { GRADE_SUBJECT_IDS } from '../src/data/gradeData';
import { buildRaceQuestionSeed } from '../src/raceQuestionSeed';

const BATCH_SIZE = 100;
const supabaseUrl = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error('Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY before loading the Race Arena question bank.');
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false, autoRefreshToken: false }
});

const rows = buildRaceQuestionSeed(MISSIONS, ARCS, GRADE_SUBJECT_IDS);
if (rows.length === 0) throw new Error('The generated Race Arena question bank is empty.');

const batches = Array.from(
  { length: Math.ceil(rows.length / BATCH_SIZE) },
  (_, index) => rows.slice(index * BATCH_SIZE, (index + 1) * BATCH_SIZE)
);

let inserted = 0;
for (let index = 0; index < batches.length; index++) {
  const payload = batches[index].map(row => ({
    grade: row.grade,
    subject: row.subject,
    mission_id: row.missionId,
    prompt: row.prompt,
    choices: row.choices,
    correct_index: row.correctIndex
  }));
  const { data, error } = await supabase.rpc('race_seed_question_batch', { p_rows: payload });
  if (error) {
    throw new Error(`Race seed batch ${index + 1}/${batches.length} failed: ${error.message}`);
  }
  inserted += Number(data ?? 0);
  console.log(`Loaded batch ${index + 1}/${batches.length} (${payload.length} rows; ${Number(data ?? 0)} new)`);
}

const { count, error: countError } = await supabase
  .from('race_question_bank')
  .select('id', { count: 'exact', head: true });
if (countError) throw new Error(`Could not verify question bank count: ${countError.message}`);
if ((count ?? 0) < rows.length) {
  throw new Error(`Question bank verification failed: expected at least ${rows.length} rows, found ${count ?? 0}.`);
}

console.log(`Race Arena question bank ready: ${count} total rows; ${inserted} inserted in this run; ${rows.length} generated rows verified.`);
