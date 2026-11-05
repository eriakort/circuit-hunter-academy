export interface LearningStreakSummary {
  currentStreak: number;
  bestStreak: number;
  activeLast7Days: number;
  recentDays: Array<{ dateKey: string; active: boolean; isToday: boolean }>;
}

/** Derive consistency from saved mastery attempts and targeted revision completions. */
export const calculateLearningStreak = (timestamps: number[], now = Date.now()): LearningStreakSummary => {
  const dayMs = 24 * 60 * 60 * 1000;
  const today = new Date(now);
  const todayStart = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
  const activeDates = new Set(
    timestamps
      .filter(timestamp => Number.isFinite(timestamp) && timestamp > 0)
      .map(timestamp => new Date(timestamp).toISOString().slice(0, 10))
  );
  const keyForOffset = (offset: number) => new Date(todayStart + offset * dayMs).toISOString().slice(0, 10);

  const recentDays = Array.from({ length: 7 }, (_, index) => {
    const offset = index - 6;
    const dateKey = keyForOffset(offset);
    return { dateKey, active: activeDates.has(dateKey), isToday: offset === 0 };
  });
  const activeLast7Days = recentDays.filter(day => day.active).length;

  let currentStreak = 0;
  const startsToday = activeDates.has(keyForOffset(0));
  const startsYesterday = activeDates.has(keyForOffset(-1));
  if (startsToday || startsYesterday) {
    let offset = startsToday ? 0 : -1;
    while (activeDates.has(keyForOffset(offset))) {
      currentStreak += 1;
      offset -= 1;
    }
  }

  const sortedDates = Array.from(activeDates).sort();
  let bestStreak = 0;
  let runningStreak = 0;
  let previousDay: number | null = null;
  for (const dateKey of sortedDates) {
    const currentDay = Date.parse(dateKey + 'T00:00:00Z');
    runningStreak = previousDay !== null && currentDay - previousDay === dayMs ? runningStreak + 1 : 1;
    bestStreak = Math.max(bestStreak, runningStreak);
    previousDay = currentDay;
  }

  return { currentStreak, bestStreak, activeLast7Days, recentDays };
};
