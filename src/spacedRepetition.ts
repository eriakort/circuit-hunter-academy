import type { ConceptReviewSchedule } from './types';

const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * Schedule the next retrieval practice. Strong answers grow the interval;
 * weaker answers bring the concept back sooner and reset the streak.
 */
export function scheduleNextConceptReview(
  previous: ConceptReviewSchedule | undefined,
  score: number,
  reviewedAt: number
): ConceptReviewSchedule {
  const boundedScore = Math.max(0, Math.min(100, Math.round(score)));
  let intervalDays: number;
  let repetitions: number;

  if (boundedScore < 60) {
    intervalDays = 1;
    repetitions = 0;
  } else if (boundedScore < 80) {
    intervalDays = 2;
    repetitions = 0;
  } else {
    intervalDays = previous
      ? Math.min(30, Math.max(3, Math.round(previous.intervalDays * 2)))
      : 3;
    repetitions = (previous?.repetitions || 0) + 1;
  }

  return {
    dueAt: reviewedAt + intervalDays * DAY_MS,
    lastReviewedAt: reviewedAt,
    intervalDays,
    repetitions,
    lastScore: boundedScore
  };
}

export const REVIEW_DAY_MS = DAY_MS;
