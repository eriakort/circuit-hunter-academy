import type { LearningConcept, LearningMissionProgress, Mission } from './types';

export type AdaptiveRecommendation =
  | {
      kind: 'review' | 'retry';
      mission: Mission;
      concept: LearningConcept;
      reason: 'weak-concept' | 'revision-ready' | 'revision-needs-practice';
      revisionAccuracy?: number;
    }
  | { kind: 'mission'; mission: Mission; reason: 'continue-course' }
  | { kind: 'dojo'; reason: 'course-complete' };

/**
 * Selects one actionable next step from saved mastery and revision outcomes.
 * A concept is prioritised only while its mission remains unmastered.
 */
export function recommendNextLearningAction(
  missions: Mission[],
  progressByMission: Record<string, LearningMissionProgress | undefined>,
  nextMission?: Mission
): AdaptiveRecommendation {
  const candidates: Array<{
    mission: Mission;
    concept: LearningConcept;
    percent: number;
    attempted: number;
    latestMiss: boolean;
    lastAttemptAt: number;
  }> = [];

  missions.forEach(mission => {
    const progress = progressByMission[mission.id];
    if (!progress || progress.mastered) return;

    const latestWeakIds = new Set(progress.masteryLastAttemptWeakConcepts || []);
    mission.learning?.concepts.forEach(concept => {
      const performance = progress.masteryConceptPerformance?.[concept.id];
      if (!performance?.attempted) return;
      candidates.push({
        mission,
        concept,
        percent: Math.round((performance.correct / performance.attempted) * 100),
        attempted: performance.attempted,
        latestMiss: latestWeakIds.has(concept.id),
        lastAttemptAt: progress.lastAttemptAt || 0
      });
    });
  });

  candidates.sort((a, b) =>
    Number(b.latestMiss) - Number(a.latestMiss) ||
    a.percent - b.percent ||
    b.lastAttemptAt - a.lastAttemptAt ||
    b.attempted - a.attempted
  );

  const weakest = candidates[0];
  if (weakest) {
    const progress = progressByMission[weakest.mission.id]!;
    const revision = progress.conceptRevisionPerformance?.[weakest.concept.id];
    const revisionAccuracy = revision?.attempted
      ? Math.round((revision.correct / revision.attempted) * 100)
      : undefined;
    const revisionIsNewerThanAssessment = !!revision?.lastReviewedAt &&
      revision.lastReviewedAt > (progress.lastAttemptAt || 0);

    if (revisionIsNewerThanAssessment && revisionAccuracy !== undefined && revisionAccuracy >= 80) {
      return {
        kind: 'retry',
        mission: weakest.mission,
        concept: weakest.concept,
        reason: 'revision-ready',
        revisionAccuracy
      };
    }

    return {
      kind: 'review',
      mission: weakest.mission,
      concept: weakest.concept,
      reason: revisionIsNewerThanAssessment ? 'revision-needs-practice' : 'weak-concept',
      revisionAccuracy
    };
  }

  if (nextMission) return { kind: 'mission', mission: nextMission, reason: 'continue-course' };
  return { kind: 'dojo', reason: 'course-complete' };
}
