import type { Mission, Scene } from '../types';

/**
 * Where the subject-specific games (see subjectGames.ts) appear. Each game is inserted as a scene just
 * before the demon's taunt, so it comes after the lessons and before the battle. Only missions without a
 * `learning` block are used, because learning missions refer to their scenes by index.
 */
export const SUBJECT_GAME_SCENES: Array<{ missionId: string; scene: Scene }> = [
  { missionId: 'geo_g5_m1', scene: { type: 'coordhunt', title: ['Treasure map · find the coordinates', 'Mappa del tesoro · trova le coordinate'] } },
  { missionId: 'hist_g5_m11', scene: { type: 'timeline', title: ['Course timeline · place the events', 'Linea del tempo del corso · colloca gli eventi'] } },
  { missionId: 'chem_l2_m6', scene: { type: 'balancer', title: ['Balance the equations', 'Bilancia le equazioni'] } }
];

export function addSubjectGameScenes(missions: Mission[]) {
  for (const { missionId, scene } of SUBJECT_GAME_SCENES) {
    const m = missions.find(x => x.id === missionId);
    if (!m || m.learning || m.scenes.some(s => s.type === scene.type)) continue;
    const at = m.scenes.findIndex(s => s.who === 'd' || s.type === 'battle');
    m.scenes.splice(at < 0 ? m.scenes.length : at, 0, { ...scene });
  }
}
