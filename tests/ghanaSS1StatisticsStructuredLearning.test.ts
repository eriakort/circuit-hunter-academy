import { describe, expect, test } from 'bun:test';
import { GHANA_CORE_MATH_SS1_MISSIONS } from '../src/data/ghanaCoreMathSS1Data';
import {
  GHANA_SS1_STATISTICAL_INDICATOR_IDS
} from '../src/data/ghanaCoreMathSS1StructuredLearning';

const mission = GHANA_CORE_MATH_SS1_MISSIONS.find(item => item.id === 'gh-core-ss1-statistical-investigation-mastery');
const learning = mission?.learning;
const assessment = learning?.masteryAssessment;

const isBilingual = (value: unknown): boolean =>
  Array.isArray(value) && value.length === 2
  && value.every(item => typeof item === 'string' && item.trim().length > 0);

describe('Ghana SHS 1 Community Data Lab structured learning', () => {
  test('teaches and assesses all eight Statistical Reasoning indicators', () => {
    expect(mission).toBeDefined();
    expect(learning?.version).toBe(1);
    expect(learning?.objectives).toHaveLength(8);
    expect(learning?.concepts).toHaveLength(8);
    expect(learning?.concepts.map(concept => concept.id)).toEqual([...GHANA_SS1_STATISTICAL_INDICATOR_IDS]);
    expect(assessment?.questions).toHaveLength(8);
    expect(assessment?.questionConceptIds).toEqual([...GHANA_SS1_STATISTICAL_INDICATOR_IDS]);
    expect(assessment?.questionVariants).toHaveLength(8);
    expect(assessment?.questionVariants?.every(pool => pool.length === 1)).toBe(true);
    expect(assessment?.passingScore).toBe(80);
    expect(mission?.quiz).toHaveLength(8);
  });

  test('reuses bilingual worked examples, misconceptions and self-checks for every indicator', () => {
    for (const concept of learning?.concepts || []) {
      expect(isBilingual(concept.title)).toBe(true);
      expect(isBilingual(concept.explanation)).toBe(true);
      expect(isBilingual(concept.workedExample?.scenario)).toBe(true);
      expect(concept.workedExample?.steps.length).toBeGreaterThanOrEqual(2);
      expect(concept.workedExample?.steps.every(isBilingual)).toBe(true);
      expect(isBilingual(concept.workedExample?.answer)).toBe(true);
      expect(concept.misconceptions?.length).toBeGreaterThanOrEqual(1);
      expect(concept.misconceptions?.every(item => isBilingual(item.belief) && isBilingual(item.correction))).toBe(true);
      expect(concept.knowledgePrompts?.length).toBeGreaterThanOrEqual(1);
      expect(concept.sceneIndexes?.length).toBeGreaterThan(0);
    }
  });

  test('provides eight measurable objectives and a bilingual mastery unlock', () => {
    expect(learning?.objectives.every(objective => isBilingual(objective.description))).toBe(true);
    expect(learning?.objectives.every(objective => objective.successCriteria?.length)).toBe(true);
    expect(learning?.summary?.length).toBeGreaterThanOrEqual(2);
    expect(learning?.summary?.every(isBilingual)).toBe(true);
    expect(isBilingual(learning?.masteryAssessment?.title)).toBe(true);
    expect(isBilingual(learning?.masteryAssessment?.instructions)).toBe(true);
    expect(isBilingual(learning?.techniqueUnlock?.name)).toBe(true);
    expect(isBilingual(learning?.techniqueUnlock?.description)).toBe(true);
  });
});
