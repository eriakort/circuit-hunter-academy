import { ARCS, MISSIONS } from './gameData';

export type GhanaScienceVisualStatus = 'instructional-visual' | 'generic-only' | 'missing';

export interface GhanaScienceVisualAuditRow {
  grade: 'Basic 7' | 'Basic 8' | 'Basic 9';
  missionId: string;
  title: string;
  status: GhanaScienceVisualStatus;
  instructionalVisualScenes: number;
  genericVisualScenes: number;
  interactiveScenes: number;
}

const DEDICATED_GHANA_SCIENCE_VISUAL_MISSIONS = new Set([
  'gh-jhs1-science-materials-states',
  'gh-jhs1-science-importance-liquids',
  'gh-jhs1-science-materials-uses',
  'gh-jhs1-science-living-cells',
  'gh-jhs1-science-earth-cycles',
  'gh-jhs1-science-life-cycles',
  'gh-jhs1-science-crop-production',
  'gh-jhs1-science-animal-production',
  'gh-jhs1-science-human-body-system',
  'gh-jhs1-science-solar-system',
  'gh-jhs1-science-ecosystem',
  'gh-jhs1-science-farming-systems'
]);

const SCIENCE_GRADE_BY_SUBJECT: Record<string, GhanaScienceVisualAuditRow['grade']> = {
  ghjhs1science: 'Basic 7',
  ghjhs2science: 'Basic 8',
  ghjhs3science: 'Basic 9'
};

/**
 * Audits instructional visuals separately from decorative challenge art.
 * A battle/minigame scene is counted as interactive, but is not automatically
 * treated as a scientific illustration or simulation.
 */
export const getGhanaScienceVisualAudit = (): GhanaScienceVisualAuditRow[] =>
  MISSIONS.flatMap(mission => {
    const subjectId = ARCS[mission.arc]?.subject;
    const grade = subjectId ? SCIENCE_GRADE_BY_SUBJECT[subjectId] : undefined;
    if (!grade) return [];

    const hasDedicatedInteractiveVisual = DEDICATED_GHANA_SCIENCE_VISUAL_MISSIONS.has(mission.id);
    const instructionalVisualScenes = mission.scenes.filter(
      scene => typeof scene.vis === 'string' && scene.vis.trim() !== '' && scene.vis !== 'demon'
    ).length + (hasDedicatedInteractiveVisual ? 1 : 0);
    const genericVisualScenes = mission.scenes.filter(scene => scene.vis === 'demon').length;
    const interactiveScenes = mission.scenes.filter(scene => Boolean(scene.type || scene.init)).length + (hasDedicatedInteractiveVisual ? 1 : 0);

    return [{
      grade,
      missionId: mission.id,
      title: String(mission.title),
      status: instructionalVisualScenes > 0
        ? 'instructional-visual'
        : genericVisualScenes > 0
          ? 'generic-only'
          : 'missing',
      instructionalVisualScenes,
      genericVisualScenes,
      interactiveScenes
    }];
  });

export const summarizeGhanaScienceVisualAudit = (rows = getGhanaScienceVisualAudit()) => {
  const grades = ['Basic 7', 'Basic 8', 'Basic 9'] as const;
  return {
    totalMissions: rows.length,
    instructionalVisualMissions: rows.filter(row => row.status === 'instructional-visual').length,
    genericOnlyMissions: rows.filter(row => row.status === 'generic-only').length,
    missingVisualMissions: rows.filter(row => row.status === 'missing').length,
    interactiveSceneMissions: rows.filter(row => row.interactiveScenes > 0).length,
    byGrade: grades.map(grade => {
      const gradeRows = rows.filter(row => row.grade === grade);
      return {
        grade,
        missions: gradeRows.length,
        instructionalVisualMissions: gradeRows.filter(row => row.status === 'instructional-visual').length,
        genericOnlyMissions: gradeRows.filter(row => row.status === 'generic-only').length,
        missingVisualMissions: gradeRows.filter(row => row.status === 'missing').length
      };
    })
  };
};
