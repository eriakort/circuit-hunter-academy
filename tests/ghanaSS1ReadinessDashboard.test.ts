import { describe, expect, test } from 'bun:test';
import type { LearningMissionProgress } from '../src/types';
import { GHANA_SS1_INDICATOR_BLUEPRINT } from '../src/data/ghanaCoreMathSS1IndicatorMasteryData';
import {
  getGhanaSS1IndicatorReadiness,
  getGhanaSS1ReadinessSummary,
  getGhanaSS1RecommendedIndicators
} from '../src/ghanaSS1Readiness';

describe('Ghana SHS 1 indicator readiness model', () => {
  test('retains all 45 official indicator entries across eight sub-strands', () => {
    const indicators = getGhanaSS1IndicatorReadiness();
    const groups = new Set(indicators.map(item => item.subStrand));

    expect(indicators).toHaveLength(45);
    expect(groups.size).toBe(8);
    expect(indicators.map(item => item.id)).toEqual(GHANA_SS1_INDICATOR_BLUEPRINT.map(item => item.id));
    expect(getGhanaSS1ReadinessSummary(indicators)).toEqual({
      total: 45,
      assessed: 0,
      mastered: 0,
      needsRevision: 0,
      notAssessed: 45
    });
  });

  test('classifies cumulative indicator performance using the 80% mastery threshold', () => {
    const progress = {
      masteryConceptPerformance: {
        'ss1-real-cs1-li1': { correct: 4, attempted: 5 },
        'ss1-real-cs1-li2': { correct: 3, attempted: 5 },
        'ss1-real-cs1-li3': { correct: 0, attempted: 0 }
      }
    } as LearningMissionProgress;
    const indicators = getGhanaSS1IndicatorReadiness({ 'test-mission': progress });
    const byId = new Map(indicators.map(item => [item.id, item]));

    expect(byId.get('ss1-real-cs1-li1')?.status).toBe('mastered');
    expect(byId.get('ss1-real-cs1-li1')?.percent).toBe(80);
    expect(byId.get('ss1-real-cs1-li2')?.status).toBe('needs-revision');
    expect(byId.get('ss1-real-cs1-li2')?.percent).toBe(60);
    expect(byId.get('ss1-real-cs1-li3')?.status).toBe('not-assessed');
    expect(getGhanaSS1ReadinessSummary(indicators)).toEqual({
      total: 45,
      assessed: 2,
      mastered: 1,
      needsRevision: 1,
      notAssessed: 43
    });
  });

  test('does not let malformed response totals create impossible accuracy values', () => {
    const progress = {
      masteryConceptPerformance: {
        'ss1-real-cs1-li1': { correct: 9, attempted: 4 }
      }
    } as LearningMissionProgress;
    const item = getGhanaSS1IndicatorReadiness({ 'test-mission': progress })[0];

    expect(item.correct).toBe(4);
    expect(item.percent).toBe(100);
    expect(item.status).toBe('mastered');
  });

  test('aggregates indicator evidence from the diagnostic and other mapped missions', () => {
    const indicators = getGhanaSS1IndicatorReadiness({
      '45-indicator-diagnostic': {
        masteryConceptPerformance: {
          'ss1-stats-cs1-li1': { correct: 2, attempted: 3 }
        }
      } as LearningMissionProgress,
      'community-data-lab': {
        masteryConceptPerformance: {
          'ss1-stats-cs1-li1': { correct: 2, attempted: 2 }
        }
      } as LearningMissionProgress
    });
    const item = indicators.find(indicator => indicator.id === 'ss1-stats-cs1-li1');
    expect(item).toMatchObject({ correct: 4, attempted: 5, percent: 80, status: 'mastered' });
  });

  test('prioritizes the weakest assessed indicators before unassessed topics', () => {
    const progress = {
      masteryConceptPerformance: {
        'ss1-real-cs1-li1': { correct: 4, attempted: 5 },
        'ss1-real-cs1-li2': { correct: 1, attempted: 5 },
        'ss1-real-cs1-li3': { correct: 3, attempted: 5 }
      }
    } as LearningMissionProgress;
    const indicators = getGhanaSS1IndicatorReadiness({ 'test-mission': progress });
    const recommended = getGhanaSS1RecommendedIndicators(indicators, 3);

    expect(recommended.map(item => item.id)).toEqual([
      'ss1-real-cs1-li2',
      'ss1-real-cs1-li3',
      'ss1-real-cs2-li1'
    ]);
  });

  test('returns no recommendations when every indicator is mastered and respects limits', () => {
    const indicators = getGhanaSS1IndicatorReadiness({
      'test-mission': {
        masteryConceptPerformance: Object.fromEntries(
          GHANA_SS1_INDICATOR_BLUEPRINT.map(item => [item.id, { correct: 4, attempted: 5 }])
        )
      } as LearningMissionProgress
    });

    expect(getGhanaSS1RecommendedIndicators(indicators)).toHaveLength(0);
    expect(getGhanaSS1RecommendedIndicators(getGhanaSS1IndicatorReadiness(), 2)).toHaveLength(2);
    expect(getGhanaSS1RecommendedIndicators(indicators, -1)).toHaveLength(0);
  });
});
