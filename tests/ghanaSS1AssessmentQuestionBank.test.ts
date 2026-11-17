import { describe, expect, test } from 'bun:test';
import {
  GHANA_SS1_INDICATOR_MASTERY_MISSIONS
} from '../src/data/ghanaCoreMathSS1IndicatorMasteryData';
import { GHANA_SS1_INDICATOR_ALTERNATE_QUESTIONS } from '../src/data/ghanaCoreMathSS1IndicatorQuestionVariants';

const mission = GHANA_SS1_INDICATOR_MASTERY_MISSIONS[0];
const assessment = mission.learning?.masteryAssessment;
const isBilingual = (value: unknown): boolean =>
  Array.isArray(value) && value.length === 2
  && value.every(item => typeof item === 'string' && item.trim().length > 0);

describe('Ghana SHS 1 multi-form assessment bank', () => {
  test('provides two distinct bilingual question forms for each of the 45 official indicators', () => {
    expect(assessment?.questions).toHaveLength(45);
    expect(assessment?.questionConceptIds).toHaveLength(45);
    expect(assessment?.questionVariants).toHaveLength(45);
    expect(Object.keys(GHANA_SS1_INDICATOR_ALTERNATE_QUESTIONS)).toHaveLength(45);

    for (let index = 0; index < 45; index += 1) {
      const base = assessment!.questions[index];
      const alternate = assessment!.questionVariants![index];
      const conceptId = assessment!.questionConceptIds![index];
      expect(alternate, conceptId + ' alternate pool').toHaveLength(1);
      expect(isBilingual(base.q), conceptId + ' base question').toBe(true);
      expect(isBilingual(alternate[0].q), conceptId + ' alternate question').toBe(true);
      expect(alternate[0].q[0]).not.toBe(base.q[0]);
      for (const question of [base, ...alternate]) {
        expect(question.a).toHaveLength(4);
        expect(question.a.every(isBilingual), conceptId + ' answer translations').toBe(true);
        expect(isBilingual(question.why), conceptId + ' explanation translations').toBe(true);
        expect(new Set(question.a.map(answer => answer[0])).size).toBe(4);
      }
    }
  });

  test('retains exactly one question per indicator in the diagnostic form', () => {
    expect(assessment?.questions).toHaveLength(45);
    expect(assessment?.questionVariants?.reduce((total, variants) => total + variants.length, 0)).toBe(45);
    expect(assessment?.passingScore).toBe(80);
    expect(mission.learning?.concepts.map(concept => concept.id)).toEqual(assessment?.questionConceptIds);
  });
});
