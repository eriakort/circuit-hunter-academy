import { describe, expect, test } from 'bun:test';
import type { LearningMasteryAssessment } from '../src/types';
import {
  createAssessmentQuestionVariantIndexes,
  getAssessmentQuestionPool,
  getConceptAssessmentQuestionPool,
  resolveAssessmentQuestions
} from '../src/learningAssessment';

const question = (label: string) => ({
  q: [label, label + ' IT'] as [string, string],
  a: [['correct', 'corretto'], ['wrong', 'errato']] as [string, string][],
  why: ['explanation', 'spiegazione'] as [string, string]
});

const assessment: LearningMasteryAssessment = {
  title: ['Assessment', 'Verifica'],
  instructions: ['Answer', 'Rispondi'],
  questions: [question('base A'), question('base B')],
  questionConceptIds: ['concept-a', 'concept-b'],
  questionVariants: [[question('alternate A')], [question('alternate B')]],
  passingScore: 80
};

describe('multi-form assessment helpers', () => {
  test('builds a canonical-first pool for each indicator', () => {
    expect(getAssessmentQuestionPool(assessment, 0).map(item => item.q[0])).toEqual(['base A', 'alternate A']);
    expect(getAssessmentQuestionPool(assessment, 9)).toEqual([]);
  });

  test('selects one valid variant per question using an injectable random source', () => {
    const samples = [0.1, 0.9];
    const indexes = createAssessmentQuestionVariantIndexes(assessment, () => samples.shift() ?? 0);
    expect(indexes).toEqual([0, 1]);
    expect(resolveAssessmentQuestions(assessment, indexes).map(item => item.q[0])).toEqual(['base A', 'alternate B']);
  });

  test('guarantees a different question form for every eligible indicator on retry', () => {
    const retryIndexes = createAssessmentQuestionVariantIndexes(assessment, () => 0.1, [0, 1]);
    expect(retryIndexes).toEqual([1, 0]);
  });

  test('falls back to canonical questions for legacy attempts and invalid indexes', () => {
    expect(resolveAssessmentQuestions(assessment).map(item => item.q[0])).toEqual(['base A', 'base B']);
    expect(resolveAssessmentQuestions(assessment, [9, -1]).map(item => item.q[0])).toEqual(['base A', 'base B']);
  });

  test('returns every form for a targeted concept revision session', () => {
    expect(getConceptAssessmentQuestionPool(assessment, 'concept-b').map(item => item.q[0]))
      .toEqual(['base B', 'alternate B']);
    expect(getConceptAssessmentQuestionPool(assessment, 'unknown')).toEqual([]);
  });

  test('preserves one-form behavior for existing missions without variants', () => {
    const legacy = { ...assessment, questionVariants: undefined };
    expect(createAssessmentQuestionVariantIndexes(legacy, () => 0.9)).toEqual([0, 0]);
    expect(resolveAssessmentQuestions(legacy, [1, 1]).map(item => item.q[0])).toEqual(['base A', 'base B']);
  });
});
