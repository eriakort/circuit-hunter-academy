export interface RaceOpponentProgress {
  done?: boolean;
  score?: number;
}

export function haveRaceOpponentsFinished(
  playerIds: string[],
  localPlayerId: string,
  progress: Record<string, RaceOpponentProgress>
): boolean {
  return playerIds
    .filter(id => id !== localPlayerId)
    .every(id => progress[id]?.done === true);
}

export function shouldFinalizeRace(
  opponentsFinished: boolean,
  completionTimedOut: boolean
): boolean {
  return opponentsFinished || completionTimedOut;
}

/** Do not grant the winner bonus when an opponent abandoned or timed out. */
export function calculateRaceCompletionXP(
  correctAnswers: number,
  localPlayerWon: boolean,
  playerCount: number,
  allOpponentsFinished: boolean
): number {
  const safeCorrect = Number.isFinite(correctAnswers)
    ? Math.max(0, Math.min(10, Math.floor(correctAnswers)))
    : 0;
  const safePlayerCount = Number.isFinite(playerCount)
    ? Math.max(1, Math.min(8, Math.floor(playerCount)))
    : 1;
  return safeCorrect * 3 + (safePlayerCount > 1 && localPlayerWon && allOpponentsFinished ? 25 : 0);
}
