import { describe, expect, test } from 'bun:test';
import { GHANA_CORE_MATH_SS1_COVERAGE } from '../src/data/ghanaCoreMathSS1Coverage';
import {
  GHANA_SS1_INDICATOR_BLUEPRINT,
  GHANA_SS1_INDICATOR_MASTERY_MISSIONS
} from '../src/data/ghanaCoreMathSS1IndicatorMasteryData';

const mission = GHANA_SS1_INDICATOR_MASTERY_MISSIONS[0];
const assessment = mission.learning?.masteryAssessment;

describe('Ghana SHS 1 45-indicator diagnostic mastery expedition', () => {
  test('maps exactly one assessment question to each of the 45 official indicator entries', () => {
    expect(GHANA_SS1_INDICATOR_BLUEPRINT).toHaveLength(45);
    expect(new Set(GHANA_SS1_INDICATOR_BLUEPRINT.map(item => item.id)).size).toBe(45);
    expect(new Set(GHANA_SS1_INDICATOR_BLUEPRINT.map(item => `${item.contentStandardId}:${item.learningIndicatorId}`)).size).toBe(45);
    expect(GHANA_SS1_INDICATOR_BLUEPRINT.map(item => item.questionIndex)).toEqual(
      Array.from({ length: 45 }, (_, index) => index)
    );
    expect(assessment?.questions).toHaveLength(45);
    expect(assessment?.questionConceptIds).toEqual(GHANA_SS1_INDICATOR_BLUEPRINT.map(item => item.id));
    expect(mission.learning?.concepts).toHaveLength(45);
    expect(assessment?.passingScore).toBe(80);
  });

  test('preserves the official indicator distribution across all eight SHS 1 sub-strands', () => {
    const expected: Record<string, number> = {
      'Real Number System': 6,
      'Proportional Reasoning': 4,
      'Applications of Expressions, Equations and Inequalities': 6,
      'Patterns and Relationships': 4,
      'Spatial Sense': 5,
      'Measurement': 9,
      'Statistical Reasoning and Its Application in Real Life': 8,
      'Probability/Chance': 3
    };
    const actual = GHANA_SS1_INDICATOR_BLUEPRINT.reduce<Record<string, number>>((counts, item) => {
      counts[item.subStrand] = (counts[item.subStrand] || 0) + 1;
      return counts;
    }, {});
    expect(actual).toEqual(expected);
    expect(Object.values(actual).reduce((sum, count) => sum + count, 0)).toBe(45);
  });

  test('maps the 45 questions to the 16 SHS 1 content standards without mixing in SHS 2', () => {
    const expected: Record<string, number> = {
      '1.1.1.CS.1': 3, '1.1.1.CS.2': 3,
      '1.1.2.CS.1': 2, '1.1.2.CS.2': 2,
      '1.2.1.CS.1': 4, '1.2.1.CS.2': 2,
      '1.2.2.CS.1': 2, '1.2.2.CS.2': 2,
      '1.3.1.CS.1': 5,
      '1.3.2.CS.1': 2, '1.3.2.CS.2': 3, '1.3.2.CS.3': 4,
      '1.4.1.CS.1': 3, '1.4.1.CS.2': 3, '1.4.1.CS.3': 2,
      '1.4.2.CS.1': 3
    };
    const actual = GHANA_SS1_INDICATOR_BLUEPRINT.reduce<Record<string, number>>((counts, item) => {
      counts[item.contentStandardId] = (counts[item.contentStandardId] || 0) + 1;
      return counts;
    }, {});
    expect(actual).toEqual(expected);
    expect(Object.keys(actual)).toHaveLength(16);
    expect(GHANA_SS1_INDICATOR_BLUEPRINT.every(item => item.contentStandardId.startsWith('1.'))).toBe(true);
    const descriptiveStatistics = GHANA_SS1_INDICATOR_BLUEPRINT.find(item => item.id === 'ss1-stats-cs2-descriptive');
    expect(descriptiveStatistics?.contentStandardId).toBe('1.4.1.CS.2');
    expect(descriptiveStatistics?.learningIndicatorId).toBe('1.4.3.LI.2');
    const linearGraph = GHANA_SS1_INDICATOR_BLUEPRINT.find(item => item.id === 'ss1-patterns-cs1-li2');
    expect(linearGraph?.title[0]).toContain('linear functions');
    const areaReferent = GHANA_SS1_INDICATOR_BLUEPRINT.find(item => item.id === 'ss1-measure-cs3-li1');
    expect(areaReferent?.title[0]).toContain('area referents');
  });

  test('stores indicator-level concepts for targeted revision and keeps the assessment usable', () => {
    expect(assessment).toBeDefined();
    expect(mission.arc).toBe(27);
    expect(mission.scenes.length).toBeGreaterThanOrEqual(10);
    expect(mission.quiz).toHaveLength(4);
    expect(mission.learning?.objectives).toHaveLength(8);
    expect(mission.learning?.concepts.map(item => item.id)).toEqual(GHANA_SS1_INDICATOR_BLUEPRINT.map(item => item.id));
    for (const question of assessment!.questions) {
      expect(question.a).toHaveLength(4);
      expect(Array.isArray(question.q)).toBe(true);
      expect(Array.isArray(question.why)).toBe(true);
      expect(question.a.every(answer => Array.isArray(answer))).toBe(true);
    }
  });

  test('adds diagnostic practice to every matching coverage row without inflating curriculum totals', () => {
    expect(GHANA_CORE_MATH_SS1_COVERAGE).toHaveLength(8);
    for (const row of GHANA_CORE_MATH_SS1_COVERAGE) {
      expect(row.pilotMissionIds).toContain('gh-core-ss1-45-indicator-diagnostic');
      expect(row.note).toContain('does not add curriculum coverage');
    }
    expect(GHANA_CORE_MATH_SS1_COVERAGE.reduce((sum, row) => sum + row.learningIndicators, 0)).toBe(45);
  });
});
