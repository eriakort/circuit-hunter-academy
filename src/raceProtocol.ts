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
  if (!Number.isSafeInteger(value.step) || (value.step as number) < 1 || (value.step as number) > questionCount) return null;
  if (!Number.isSafeInteger(value.score) || (value.score as number) < 0 || (value.score as number) > (value.step as number) * MAX_POINTS_PER_QUESTION) return null;
  if (!Number.isSafeInteger(value.time) || (value.time as number) <= 0) return null;
  if (typeof value.done !== 'boolean' || value.done !== (value.step === questionCount)) return null;
  if (previous && (
    (value.step as number) < previous.step ||
    (value.score as number) < previous.score ||
    (value.time as number) < previous.time
  )) return null;

  return {
    id: value.id,
    step: value.step as number,
    score: value.score as number,
    time: value.time as number,
    raceId,
    done: value.done
  };
};
