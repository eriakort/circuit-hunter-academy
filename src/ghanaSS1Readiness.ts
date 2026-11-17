import type { LearningMissionProgress } from './types';
import { GHANA_SS1_INDICATOR_BLUEPRINT } from './data/ghanaCoreMathSS1IndicatorMasteryData';

export const GHANA_SS1_INDICATOR_MASTERY_THRESHOLD = 80;

export type GhanaSS1IndicatorStatus = 'mastered' | 'needs-revision' | 'not-assessed';

export type GhanaSS1IndicatorReadiness = (typeof GHANA_SS1_INDICATOR_BLUEPRINT)[number] & {
  correct: number;
  attempted: number;
  percent: number | null;
  status: GhanaSS1IndicatorStatus;
};

export interface GhanaSS1ReadinessSummary {
  total: number;
  assessed: number;
  mastered: number;
  needsRevision: number;
  notAssessed: number;
}

export const getGhanaSS1IndicatorReadiness = (
  progress?: LearningMissionProgress
): GhanaSS1IndicatorReadiness[] => GHANA_SS1_INDICATOR_BLUEPRINT.map(indicator => {
  const performance = progress?.masteryConceptPerformance?.[indicator.id];
  const attempted = Number.isFinite(performance?.attempted)
    ? Math.max(0, Math.floor(performance!.attempted))
    : 0;
  const correct = Number.isFinite(performance?.correct)
    ? Math.min(attempted, Math.max(0, Math.floor(performance!.correct)))
    : 0;
  const percent = attempted > 0 ? Math.round((correct / attempted) * 100) : null;

  return {
    ...indicator,
    correct,
    attempted,
    percent,
    status: percent === null
      ? 'not-assessed'
      : percent >= GHANA_SS1_INDICATOR_MASTERY_THRESHOLD
        ? 'mastered'
        : 'needs-revision'
  };
});

export const getGhanaSS1ReadinessSummary = (
  indicators: readonly GhanaSS1IndicatorReadiness[]
): GhanaSS1ReadinessSummary => ({
  total: indicators.length,
  assessed: indicators.filter(item => item.status !== 'not-assessed').length,
  mastered: indicators.filter(item => item.status === 'mastered').length,
  needsRevision: indicators.filter(item => item.status === 'needs-revision').length,
  notAssessed: indicators.filter(item => item.status === 'not-assessed').length
});


/**
 * Returns a short, deterministic study queue: weakest assessed indicators first,
 * followed by indicators the learner has not attempted yet.
 */
export const getGhanaSS1RecommendedIndicators = (
  indicators: readonly GhanaSS1IndicatorReadiness[],
  limit = 3
): GhanaSS1IndicatorReadiness[] => {
  const safeLimit = Number.isFinite(limit) ? Math.max(0, Math.floor(limit)) : 3;
  return [...indicators]
    .filter(item => item.status !== 'mastered')
    .sort((a, b) => {
      if (a.status !== b.status) return a.status === 'needs-revision' ? -1 : 1;
      if (a.status === 'needs-revision' && b.status === 'needs-revision') {
        return (a.percent ?? 100) - (b.percent ?? 100)
          || a.attempted - b.attempted
          || a.id.localeCompare(b.id);
      }
      return indicators.indexOf(a) - indicators.indexOf(b);
    })
    .slice(0, safeLimit);
};
