import { describe, expect, test } from 'bun:test';
import { GHANA_SS1_INDICATOR_MASTERY_MISSIONS } from '../src/data/ghanaCoreMathSS1IndicatorMasteryData';

const mission = GHANA_SS1_INDICATOR_MASTERY_MISSIONS[0];
const concepts = mission.learning?.concepts || [];

const isBilingual = (value: unknown): boolean =>
  Array.isArray(value)
  && value.length === 2
  && value.every(item => typeof item === 'string' && item.trim().length > 0);

describe('Ghana SHS 1 indicator guided revision library', () => {
  test('provides worked examples, misconception corrections and self-check prompts for all 45 indicators', () => {
    expect(concepts).toHaveLength(45);

    for (const concept of concepts) {
      expect(concept.workedExample, concept.id + ' worked example').toBeDefined();
      expect(isBilingual(concept.workedExample?.scenario), concept.id + ' scenario translations').toBe(true);
      expect(concept.workedExample?.steps.length, concept.id + ' worked steps').toBeGreaterThanOrEqual(2);
      expect(concept.workedExample?.steps.every(isBilingual), concept.id + ' step translations').toBe(true);
      expect(isBilingual(concept.workedExample?.answer), concept.id + ' answer translations').toBe(true);

      expect(concept.misconceptions?.length, concept.id + ' misconception correction').toBeGreaterThanOrEqual(1);
      for (const misconception of concept.misconceptions || []) {
        expect(isBilingual(misconception.belief), concept.id + ' misconception translation').toBe(true);
        expect(isBilingual(misconception.correction), concept.id + ' correction translation').toBe(true);
      }

      expect(concept.knowledgePrompts?.length, concept.id + ' self-check prompt').toBeGreaterThanOrEqual(1);
      expect(concept.knowledgePrompts?.every(isBilingual), concept.id + ' prompt translations').toBe(true);
    }
  });

  test('keeps the revision content mapped one-to-one to the diagnostic question concepts', () => {
    const assessment = mission.learning?.masteryAssessment;
    expect(assessment?.questions).toHaveLength(45);
    expect(assessment?.questionConceptIds).toEqual(concepts.map(concept => concept.id));
    expect(new Set(concepts.map(concept => concept.id)).size).toBe(45);
  });
});
