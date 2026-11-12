import type { RaceProgress } from './types';

const MAX_POINTS_PER_QUESTION = 100;

/** Reject malformed, replayed, or backwards peer progress before it reaches the leaderboard. */
export const validateRaceProgress = (
  payload: unknown,
  raceId: string,
  knownPlayerIds: ReadonlySet<string>,
  previous: RaceProgress | undefined,
  questionCount: number
): RaceProgress | null => {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) return null;
  const value = payload as Record<string, unknown>;
  if (typeof value.id !== 'string' || !value.id || !knownPlayerIds.has(value.id)) return null;
  if (value.raceId !== raceId) return null;
  if (typeof value.step !== 'number' || !Number.isSafeInteger(value.step) || value.step < 1 || value.step > questionCount) return null;
  if (typeof value.score !== 'number' || !Number.isSafeInteger(value.score) || value.score < 0 || value.score > value.step * MAX_POINTS_PER_QUESTION) return null;
  if (typeof value.time !== 'number' || !Number.isSafeInteger(value.time) || value.time <= 0) return null;
  if (typeof value.done !== 'boolean' || value.done !== (value.step === questionCount)) return null;
  if (previous && (
    value.step < previous.step ||
    value.score < previous.score ||
    value.time < previous.time
  )) return null;

  return {
    id: value.id,
    step: value.step,
    score: value.score,
    time: value.time,
    raceId,
    done: value.done
  };
};
