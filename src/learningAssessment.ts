import type { LearningMasteryAssessment, QuizQuestion } from './types';

/** Return the canonical item followed by its alternate forms for one indicator. */
export const getAssessmentQuestionPool = (
  assessment: LearningMasteryAssessment | undefined,
  questionIndex: number
): QuizQuestion[] => {
  const canonical = assessment?.questions[questionIndex];
  if (!canonical) return [];
  return [canonical, ...(assessment.questionVariants?.[questionIndex] || [])];
};

/** Resolve a saved variant selection, defaulting safely to the canonical item for older saves. */
export const resolveAssessmentQuestions = (
  assessment: LearningMasteryAssessment | undefined,
  variantIndexes: readonly number[] = []
): QuizQuestion[] => {
  if (!assessment) return [];
  return assessment.questions.map((canonical, index) => {
    const pool = getAssessmentQuestionPool(assessment, index);
    const selected = variantIndexes[index];
    return Number.isInteger(selected) && selected >= 0 && selected < pool.length
      ? pool[selected]
      : canonical;
  });
};

/** Select one item from each indicator pool; inject a random source for deterministic tests. */
export const createAssessmentQuestionVariantIndexes = (
  assessment: LearningMasteryAssessment | undefined,
  random: () => number = Math.random
): number[] => {
  if (!assessment) return [];
  return assessment.questions.map((_, index) => {
    const pool = getAssessmentQuestionPool(assessment, index);
    if (pool.length <= 1) return 0;
    const sample = random();
    const normalized = Number.isFinite(sample) ? Math.min(0.999999999999, Math.max(0, sample)) : 0;
    return Math.floor(normalized * pool.length);
  });
};

/** Return every canonical and alternate item linked to a single learning concept. */
export const getConceptAssessmentQuestionPool = (
  assessment: LearningMasteryAssessment | undefined,
  conceptId: string
): QuizQuestion[] => {
  if (!assessment) return [];
  return assessment.questions.flatMap((question, index) =>
    assessment.questionConceptIds?.[index] === conceptId
      ? getAssessmentQuestionPool(assessment, index)
      : []
  );
};
