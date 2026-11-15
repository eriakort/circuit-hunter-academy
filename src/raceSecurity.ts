import type { RacePlayer } from './types';

const clampInteger = (value: unknown, max: number): number => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Math.min(max, Math.max(0, Math.round(parsed))) : 0;
};

/** Treat Realtime presence as untrusted and use the channel presence key as identity. */
export const sanitizeRacePlayer = (presenceKey: string, value: unknown): RacePlayer | null => {
  if (!presenceKey || !value || typeof value !== 'object' || Array.isArray(value)) return null;
  const player = value as Record<string, unknown>;
  const name = String(player.name ?? '').trim().slice(0, 20);
  if (!name) return null;

  return {
    id: presenceKey,
    name,
    joinedAt: clampInteger(player.joinedAt, Number.MAX_SAFE_INTEGER),
    hue: clampInteger(player.hue, 359)
  };
};

export const getRaceHostId = (players: Record<string, RacePlayer>): string | undefined =>
  Object.values(players)
    .sort((a, b) => a.joinedAt - b.joinedAt || (a.id < b.id ? -1 : 1))[0]?.id;

/** A client-side guard only: sender identity is not authenticated by an open Realtime broadcast. */
export const isRaceHostControlMessage = (payload: unknown, hostId: string | undefined): boolean =>
  !!hostId &&
  !!payload &&
  typeof payload === 'object' &&
  !Array.isArray(payload) &&
  (payload as Record<string, unknown>).from === hostId;

export interface ValidRaceStart {
  from: string;
  missionId: string;
  seed: number;
  raceId: string;
  subject?: string;
}

export const validateRaceStartPayload = (
  payload: unknown,
  hostId: string | undefined,
  isValidMission: (missionId: unknown) => boolean
): ValidRaceStart | null => {
  if (!isRaceHostControlMessage(payload, hostId)) return null;
  const value = payload as Record<string, unknown>;
  if (typeof value.missionId !== 'string' || !isValidMission(value.missionId)) return null;
  if (typeof value.raceId !== 'string' || !value.raceId || value.raceId.length > 64) return null;
  if (typeof value.seed !== 'number' || !Number.isInteger(value.seed) || value.seed < 0 || value.seed > 1_000_000) return null;
  if (value.subject !== undefined && typeof value.subject !== 'string') return null;

  return {
    from: hostId!,
    missionId: value.missionId,
    seed: value.seed,
    raceId: value.raceId,
    ...(typeof value.subject === 'string' ? { subject: value.subject } : {})
  };
};
