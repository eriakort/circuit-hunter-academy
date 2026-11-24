import type { ArcInfo, BilingualText, GradeId, Mission, QuizQuestion } from './types';

export interface RaceQuestionSeedRow {
  grade: GradeId;
  subject: string;
  missionId: string;
  prompt: [string, string];
  choices: [string, string][];
  correctIndex: 0;
}

type GradeSubjectMap = Record<GradeId, string[]>;

const bilingualPair = (value: BilingualText, label: string): [string, string] => {
  // Localized records carry extra support languages; multiplayer keeps using
  // the canonical English/Italian pair, so the seed is unchanged by them.
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    value = [value.en, value.it];
  }
  if (
    !Array.isArray(value) ||
    value.length !== 2 ||
    value.some(part => typeof part !== 'string' || !part.trim())
  ) {
    throw new Error(`Race question content must be a non-empty EN/IT pair: ${label}`);
  }
  return [value[0], value[1]];
};

const normalizeQuestion = (question: QuizQuestion, label: string) => {
  const prompt = bilingualPair(question.q, `${label}.prompt`);
  if (!Array.isArray(question.a) || question.a.length < 2 || question.a.length > 6) {
    throw new Error(`Race question must have between 2 and 6 choices: ${label}`);
  }
  const choices = question.a.map((choice, index) =>
    bilingualPair(choice, `${label}.choice[${index}]`)
  );
  const uniqueEnglish = new Set(choices.map(choice => choice[0].trim().toLocaleLowerCase()));
  const uniqueItalian = new Set(choices.map(choice => choice[1].trim().toLocaleLowerCase()));
  if (uniqueEnglish.size !== choices.length || uniqueItalian.size !== choices.length) {
    // A duplicated option makes the answer ambiguous. Exclude it from multiplayer
    // without rewriting the learner-facing curriculum question.
    return null;
  }
  // The existing Academy quiz convention stores the correct answer at index zero.
  return { prompt, choices, correctIndex: 0 as const };
};

export function buildRaceQuestionSeed(
  missions: Mission[],
  arcs: ArcInfo[],
  gradeSubjects: GradeSubjectMap
): RaceQuestionSeedRow[] {
  const rows: RaceQuestionSeedRow[] = [];
  const seenMissionIds = new Set<string>();

  for (const [grade, subjects] of Object.entries(gradeSubjects) as [GradeId, string[]][]) {
    for (const subject of subjects) {
      const subjectMissions = missions.filter(mission => {
        const arc = arcs[mission.arc];
        if (!arc) throw new Error(`Mission ${mission.id} references missing arc ${mission.arc}`);
        return (arc.subject ?? 'cs') === subject && mission.quiz.length > 0;
      });

      for (const mission of subjectMissions) {
        if (!mission.id || seenMissionIds.has(`${grade}:${subject}:${mission.id}`)) {
          throw new Error(`Duplicate or empty race mission ID: ${grade}/${subject}/${mission.id}`);
        }
        seenMissionIds.add(`${grade}:${subject}:${mission.id}`);
        mission.quiz.forEach((question, index) => {
          const normalized = normalizeQuestion(question, `${grade}/${subject}/${mission.id}/Q${index + 1}`);
          if (!normalized) return;
          rows.push({
            grade,
            subject,
            missionId: mission.id,
            ...normalized
          });
          // "mix" is a separate server-side pool for the existing mixed-review option.
          rows.push({
            grade,
            subject,
            missionId: 'mix',
            ...normalized
          });
        });
      }
    }
  }

  return rows;
}

const sqlString = (value: string) => `'${value.replace(/'/g, "''")}'`;
const sqlJson = (value: unknown) => `${sqlString(JSON.stringify(value))}::jsonb`;

export function renderRaceQuestionSeedSql(rows: RaceQuestionSeedRow[]): string {
  const statements = rows.map(row => {
    const grade = sqlString(row.grade);
    const subject = sqlString(row.subject);
    const missionId = sqlString(row.missionId);
    const prompt = sqlJson(row.prompt);
    const choices = sqlJson(row.choices);
    return `insert into public.race_question_bank (grade, subject, mission_id, prompt, choices, correct_index)
select ${grade}, ${subject}, ${missionId}, ${prompt}, ${choices}, ${row.correctIndex}
where not exists (
  select 1 from public.race_question_bank existing
  where existing.grade = ${grade}
    and existing.subject = ${subject}
    and existing.mission_id = ${missionId}
    and existing.prompt = ${prompt}
    and existing.choices = ${choices}
    and existing.correct_index = ${row.correctIndex}
);`;
  });
  return [
    '-- Generated from src/data/gameData.ts; do not edit by hand.',
    '-- Safe to re-run: existing identical questions are not inserted again.',
    ...statements
  ].join('\n\n') + '\n';
}
