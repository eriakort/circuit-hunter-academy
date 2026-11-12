import type { Mission } from './types';

/** Keep the map's lock state and the context action's access check in sync. */
export const isMissionOpen = (
  index: number,
  missions: readonly Pick<Mission, 'id' | 'arc'>[],
  cleared: Record<string, boolean>
): boolean => {
  const mission = missions[index];
  if (!mission) return false;
  const previous = missions[index - 1];
  return !previous || previous.arc !== mission.arc || cleared[previous.id] === true;
};
