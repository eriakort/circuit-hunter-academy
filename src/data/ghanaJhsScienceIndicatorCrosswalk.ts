export type GhanaScienceIndicatorStatus = 'covered' | 'partial' | 'not-yet-covered' | 'needs-review';

export interface GhanaScienceIndicatorEvidence {
  indicatorCode: string;
  grade: 7 | 8 | 9;
  strand: 1 | 2 | 3 | 4 | 5;
  missionIds: string[];
  status: GhanaScienceIndicatorStatus;
  teachingSceneEvidence: string;
  assessmentEvidence: string;
  officialIndicatorText?: string;
  sourcePdfPage?: number;
  teachingSceneRefs?: string[];
  assessmentQuestionRefs?: string[];
}

/** Official NaCCA indicator totals by Basic grade and strand (Science CCP, 2020). */
export const GHANA_JHS_SCIENCE_OFFICIAL_INDICATOR_COUNTS = [
  {
    "grade": 7,
    "strand": 1,
    "officialIndicatorCount": 6
  },
  {
    "grade": 7,
    "strand": 2,
    "officialIndicatorCount": 10
  },
  {
    "grade": 7,
    "strand": 3,
    "officialIndicatorCount": 9
  },
  {
    "grade": 7,
    "strand": 4,
    "officialIndicatorCount": 21
  },
  {
    "grade": 7,
    "strand": 5,
    "officialIndicatorCount": 7
  },
  {
    "grade": 8,
    "strand": 1,
    "officialIndicatorCount": 6
  },
  {
    "grade": 8,
    "strand": 2,
    "officialIndicatorCount": 8
  },
  {
    "grade": 8,
    "strand": 3,
    "officialIndicatorCount": 7
  },
  {
    "grade": 8,
    "strand": 4,
    "officialIndicatorCount": 13
  },
  {
    "grade": 8,
    "strand": 5,
    "officialIndicatorCount": 11
  },
  {
    "grade": 9,
    "strand": 1,
    "officialIndicatorCount": 7
  },
  {
    "grade": 9,
    "strand": 2,
    "officialIndicatorCount": 11
  },
  {
    "grade": 9,
    "strand": 3,
    "officialIndicatorCount": 7
  },
  {
    "grade": 9,
    "strand": 4,
    "officialIndicatorCount": 16
  },
  {
    "grade": 9,
    "strand": 5,
    "officialIndicatorCount": 12
  }
] as const;

/**
 * Exact indicator IDs explicitly present in existing mission metadata.
 * These are candidate links, not claims of full instructional or assessment coverage.
 * Every entry stays needs-review until a human verifies the linked scenes and quiz items.
 */
export const GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE: GhanaScienceIndicatorEvidence[] = [
  {
    indicatorCode: 'B7.1.1.1.1', grade: 7, strand: 1, missionIds: ['gh-jhs1-science-materials-states'],
    status: 'needs-review', officialIndicatorText: 'Classify materials into liquids, solids and gases.', sourcePdfPage: 39,
    teachingSceneEvidence: 'Candidate: gh-jhs1-science-materials-states scenes[1] explains the three states; verify full classification and exemplar coverage.',
    assessmentEvidence: 'Candidate: gh-jhs1-science-materials-states quiz[1..3] assesses state properties; verify coverage against the full indicator.',
    teachingSceneRefs: ['gh-jhs1-science-materials-states#scene-1'], assessmentQuestionRefs: ['gh-jhs1-science-materials-states#quiz-1','gh-jhs1-science-materials-states#quiz-2','gh-jhs1-science-materials-states#quiz-3']
  },
  {
    indicatorCode: 'B7.1.1.1.2', grade: 7, strand: 1, missionIds: ['gh-jhs1-science-materials-uses'],
    status: 'needs-review', officialIndicatorText: 'Discuss the importance of liquids in human life.', sourcePdfPage: 40,
    teachingSceneEvidence: 'Candidate: gh-jhs1-science-materials-uses discusses material uses and water resistance; direct teaching of the importance of liquids is not yet confirmed.',
    assessmentEvidence: 'No quiz question is yet explicitly mapped to this indicator.',
    teachingSceneRefs: ['gh-jhs1-science-materials-uses#scene-0'], assessmentQuestionRefs: []
  },
  {
    indicatorCode: 'B7.1.1.1.3', grade: 7, strand: 1, missionIds: ['gh-jhs1-science-materials-uses'],
    status: 'needs-review', officialIndicatorText: 'Discuss the importance of specific solids to life.', sourcePdfPage: 40,
    teachingSceneEvidence: 'Candidate: gh-jhs1-science-materials-uses compares wood, metals and plastics in everyday products; verify links to survival and other life forms.',
    assessmentEvidence: 'Candidate material-selection questions exist, but none is yet explicitly mapped to this indicator.',
    teachingSceneRefs: ['gh-jhs1-science-materials-uses#scene-1','gh-jhs1-science-materials-uses#scene-2'], assessmentQuestionRefs: []
  },
  {
    indicatorCode: 'B7.1.1.2.1', grade: 7, strand: 1, missionIds: [],
    status: 'needs-review', officialIndicatorText: 'Demonstrate knowledge of the orderly arrangement of metals, non-metals and noble gases in the periodic table.', sourcePdfPage: 41,
    teachingSceneEvidence: 'No matching Basic 7 periodic-table mission was found in the current JHS1 Science mission set.',
    assessmentEvidence: 'No matching Basic 7 periodic-table assessment question was found in the current JHS1 Science mission set.',
    teachingSceneRefs: [], assessmentQuestionRefs: []
  },
  {
    indicatorCode: 'B7.1.2.1.1', grade: 7, strand: 1, missionIds: ['gh-jhs1-science-living-cells'],
    status: 'needs-review', officialIndicatorText: 'Describe the structure and function of living cells of an animal.', sourcePdfPage: 42,
    teachingSceneEvidence: 'Candidate: gh-jhs1-science-living-cells scenes[1..3] compare plant and animal cells; verify animal-cell organelle detail.',
    assessmentEvidence: 'Candidate: gh-jhs1-science-living-cells quiz[1..3] assesses basic cell structures; verify animal-cell-specific coverage.',
    teachingSceneRefs: ['gh-jhs1-science-living-cells#scene-1','gh-jhs1-science-living-cells#scene-3'], assessmentQuestionRefs: ['gh-jhs1-science-living-cells#quiz-1','gh-jhs1-science-living-cells#quiz-2','gh-jhs1-science-living-cells#quiz-3']
  },
  {
    indicatorCode: 'B7.1.2.1.2', grade: 7, strand: 1, missionIds: ['gh-jhs1-science-living-cells'],
    status: 'needs-review', officialIndicatorText: 'State the functions of each organelle in a plant cell.', sourcePdfPage: 43,
    teachingSceneEvidence: 'Candidate: gh-jhs1-science-living-cells scenes[1..2] explain plant-cell organelles; verify each organelle function is taught.',
    assessmentEvidence: 'Candidate: gh-jhs1-science-living-cells quiz[1..3] checks cell structures but does not yet verify every plant-cell organelle function.',
    teachingSceneRefs: ['gh-jhs1-science-living-cells#scene-1','gh-jhs1-science-living-cells#scene-2'], assessmentQuestionRefs: ['gh-jhs1-science-living-cells#quiz-1','gh-jhs1-science-living-cells#quiz-2','gh-jhs1-science-living-cells#quiz-3']
  },
  {
    "indicatorCode": "B8.2.1.1.1",
    "grade": 8,
    "strand": 2,
    "missionIds": [
      "gh-jhs2-science-carbon-cycle"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.2.1.1.2",
    "grade": 8,
    "strand": 2,
    "missionIds": [
      "gh-jhs2-science-carbon-cycle"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.2.2.1.1",
    "grade": 8,
    "strand": 2,
    "missionIds": [
      "gh-jhs2-science-anopheles-life-cycle"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.2.2.1.2",
    "grade": 8,
    "strand": 2,
    "missionIds": [
      "gh-jhs2-science-anopheles-life-cycle"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.2.3.1.1",
    "grade": 8,
    "strand": 2,
    "missionIds": [
      "gh-jhs2-science-seed-beds"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.2.3.2.1",
    "grade": 8,
    "strand": 2,
    "missionIds": [
      "gh-jhs2-science-seed-beds"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.2.4.1.1",
    "grade": 8,
    "strand": 2,
    "missionIds": [
      "gh-jhs2-science-animal-feed-water"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.2.4.2.1",
    "grade": 8,
    "strand": 2,
    "missionIds": [
      "gh-jhs2-science-animal-feed-water"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.3.1.1.1",
    "grade": 8,
    "strand": 3,
    "missionIds": [
      "gh-jhs2-science-teeth-dental-health"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.3.1.1.3",
    "grade": 8,
    "strand": 3,
    "missionIds": [
      "gh-jhs2-science-teeth-dental-health"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.3.2.1.1",
    "grade": 8,
    "strand": 3,
    "missionIds": [
      "gh-jhs2-science-outer-planets"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.3.3.1.1",
    "grade": 8,
    "strand": 3,
    "missionIds": [
      "gh-jhs2-science-ecosystem-feeding"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.3.4.1.1",
    "grade": 8,
    "strand": 3,
    "missionIds": [
      "gh-jhs2-science-farming-systems"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.3.4.1.2",
    "grade": 8,
    "strand": 3,
    "missionIds": [
      "gh-jhs2-science-farming-systems"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.4.1.1.1",
    "grade": 8,
    "strand": 4,
    "missionIds": [
      "gh-jhs2-science-energy-sources-heat"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.4.1.3.1",
    "grade": 8,
    "strand": 4,
    "missionIds": [
      "gh-jhs2-science-energy-sources-heat"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.4.2.1.1",
    "grade": 8,
    "strand": 4,
    "missionIds": [
      "gh-jhs2-science-electricity-electronics"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.4.2.2.1",
    "grade": 8,
    "strand": 4,
    "missionIds": [
      "gh-jhs2-science-electricity-electronics"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.4.3.1.1",
    "grade": 8,
    "strand": 4,
    "missionIds": [
      "gh-jhs2-science-energy-conservation-impact"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.4.4.1.1",
    "grade": 8,
    "strand": 4,
    "missionIds": [
      "gh-jhs2-science-magnetism-force-machines"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.4.4.2.1",
    "grade": 8,
    "strand": 4,
    "missionIds": [
      "gh-jhs2-science-magnetism-force-machines"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.4.5.1.1",
    "grade": 8,
    "strand": 4,
    "missionIds": [
      "gh-jhs2-science-agricultural-tools"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.4.5.1.2",
    "grade": 8,
    "strand": 4,
    "missionIds": [
      "gh-jhs2-science-agricultural-tools"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.5.1.1.1",
    "grade": 8,
    "strand": 5,
    "missionIds": [
      "gh-jhs2-science-waste-management"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.5.1.1.2",
    "grade": 8,
    "strand": 5,
    "missionIds": [
      "gh-jhs2-science-waste-management"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.5.2.1.1",
    "grade": 8,
    "strand": 5,
    "missionIds": [
      "gh-jhs2-science-human-health"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.5.2.2.1",
    "grade": 8,
    "strand": 5,
    "missionIds": [
      "gh-jhs2-science-human-health"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.5.3.1.1",
    "grade": 8,
    "strand": 5,
    "missionIds": [
      "gh-jhs2-science-science-industry"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.5.4.1.1",
    "grade": 8,
    "strand": 5,
    "missionIds": [
      "gh-jhs2-science-climate-green-economy"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.5.4.1.2",
    "grade": 8,
    "strand": 5,
    "missionIds": [
      "gh-jhs2-science-climate-green-economy"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.5.5.1.1",
    "grade": 8,
    "strand": 5,
    "missionIds": [
      "gh-jhs2-science-soils-plants"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.5.5.1.2",
    "grade": 8,
    "strand": 5,
    "missionIds": [
      "gh-jhs2-science-soils-plants"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B8.5.6.1.1",
    "grade": 8,
    "strand": 5,
    "missionIds": [
      "gh-jhs2-science-rocks-soil-formation"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.1.1.1.1",
    "grade": 9,
    "strand": 1,
    "missionIds": [
      "gh-jhs3-science-binary-compounds"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.1.1.1.2",
    "grade": 9,
    "strand": 1,
    "missionIds": [
      "gh-jhs3-science-binary-compounds"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.1.1.1.3",
    "grade": 9,
    "strand": 1,
    "missionIds": [
      "gh-jhs3-science-acids-bases-salts"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.1.1.2.1",
    "grade": 9,
    "strand": 1,
    "missionIds": [
      "gh-jhs3-science-chemical-bonding"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.1.2.1.1",
    "grade": 9,
    "strand": 1,
    "missionIds": [
      "gh-jhs3-science-specialised-plant-cells",
      "gh-jhs3-science-specialised-human-cells"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.1.2.1.2",
    "grade": 9,
    "strand": 1,
    "missionIds": [
      "gh-jhs3-science-specialised-plant-cells"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.1.2.1.3",
    "grade": 9,
    "strand": 1,
    "missionIds": [
      "gh-jhs3-science-specialised-human-cells"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.2.1.1.1",
    "grade": 9,
    "strand": 2,
    "missionIds": [
      "gh-jhs3-science-nitrogen-cycle"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.2.1.1.2",
    "grade": 9,
    "strand": 2,
    "missionIds": [
      "gh-jhs3-science-nitrogen-cycle"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.2.2.1.1",
    "grade": 9,
    "strand": 2,
    "missionIds": [
      "gh-jhs3-science-grasshopper-life-cycle"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.2.2.1.2",
    "grade": 9,
    "strand": 2,
    "missionIds": [
      "gh-jhs3-science-grasshopper-life-cycle"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.2.3.1.1",
    "grade": 9,
    "strand": 2,
    "missionIds": [
      "gh-jhs3-science-crop-maturity"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.2.3.2.2",
    "grade": 9,
    "strand": 2,
    "missionIds": [
      "gh-jhs3-science-crop-maturity"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.2.4.1.1",
    "grade": 9,
    "strand": 2,
    "missionIds": [
      "gh-jhs3-science-animal-feed-preparation"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.2.4.2.1",
    "grade": 9,
    "strand": 2,
    "missionIds": [
      "gh-jhs3-science-animal-feed-selection"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.3.1.1.1",
    "grade": 9,
    "strand": 3,
    "missionIds": [
      "gh-jhs3-science-circulation-respiration"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.3.1.1.2",
    "grade": 9,
    "strand": 3,
    "missionIds": [
      "gh-jhs3-science-circulation-respiration"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.3.2.1.1",
    "grade": 9,
    "strand": 3,
    "missionIds": [
      "gh-jhs3-science-asteroids-comets"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.3.3.1.1",
    "grade": 9,
    "strand": 3,
    "missionIds": [
      "gh-jhs3-science-ecosystem-balance"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.3.4.1.1",
    "grade": 9,
    "strand": 3,
    "missionIds": [
      "gh-jhs3-science-manure-materials"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.3.4.1.2",
    "grade": 9,
    "strand": 3,
    "missionIds": [
      "gh-jhs3-science-manure-composting"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.3.4.1.3",
    "grade": 9,
    "strand": 3,
    "missionIds": [
      "gh-jhs3-science-manure-composting"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.4.1.1.1",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-energy-light"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.4.1.1.2",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-energy-light"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.4.1.2.1",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-energy-light"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.4.1.2.4",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-energy-light"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.4.1.3.1",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-energy-light"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.4.2.1.1",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-electricity-electronics"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.4.2.2.1",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-electricity-electronics"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.4.3.1.1",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-energy-conversion"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.4.3.1.2",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-energy-conversion"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.4.4.1.1",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-force-motion-pressure"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.4.4.2.1",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-force-motion-pressure"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.4.5.1.1",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-agricultural-tools"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.4.5.1.2",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-agricultural-tools"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.5.1.1.1",
    "grade": 9,
    "strand": 5,
    "missionIds": [
      "gh-jhs3-science-waste-management"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.5.1.2.1",
    "grade": 9,
    "strand": 5,
    "missionIds": [
      "gh-jhs3-science-waste-management"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.5.2.1.1",
    "grade": 9,
    "strand": 5,
    "missionIds": [
      "gh-jhs3-science-human-health"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.5.2.2.1",
    "grade": 9,
    "strand": 5,
    "missionIds": [
      "gh-jhs3-science-human-health"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.5.2.2.2",
    "grade": 9,
    "strand": 5,
    "missionIds": [
      "gh-jhs3-science-human-health"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.5.3.1.1",
    "grade": 9,
    "strand": 5,
    "missionIds": [
      "gh-jhs3-science-industry"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.5.3.2.1",
    "grade": 9,
    "strand": 5,
    "missionIds": [
      "gh-jhs3-science-industry"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.5.3.2.2",
    "grade": 9,
    "strand": 5,
    "missionIds": [
      "gh-jhs3-science-industry"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.5.4.1.1",
    "grade": 9,
    "strand": 5,
    "missionIds": [
      "gh-jhs3-science-climate-green-economy"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.5.4.2.1",
    "grade": 9,
    "strand": 5,
    "missionIds": [
      "gh-jhs3-science-climate-green-economy"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.5.5.1.1",
    "grade": 9,
    "strand": 5,
    "missionIds": [
      "gh-jhs3-science-plant-resources"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  },
  {
    "indicatorCode": "B9.5.5.1.2",
    "grade": 9,
    "strand": 5,
    "missionIds": [
      "gh-jhs3-science-plant-resources"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Lesson scenes exist in the linked mission; exact scene-to-indicator alignment has not yet been reviewed.",
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed."
  }
,
  {
    "indicatorCode": "B7.2.1.1.1",
    "grade": 7,
    "strand": 2,
    "missionIds": [
      "gh-jhs1-science-earth-cycles"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Explain how the water cycle occurs as a repeated pattern in nature.",
    "sourcePdfPage": 44,
    "teachingSceneEvidence": "Candidate: gh-jhs1-science-earth-cycles scenes[0..1] explain evaporation, condensation and precipitation; verify explicit treatment of transpiration and the complete repeated pattern.",
    "assessmentEvidence": "Candidate: quiz[0..2] checks the Sun, evaporation and condensation; no question yet checks the complete cycle or transpiration.",
    "teachingSceneRefs": [
      "gh-jhs1-science-earth-cycles#scene-0",
      "gh-jhs1-science-earth-cycles#scene-1"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs1-science-earth-cycles#quiz-0",
      "gh-jhs1-science-earth-cycles#quiz-1",
      "gh-jhs1-science-earth-cycles#quiz-2"
    ]
  },
  {
    "indicatorCode": "B7.2.1.1.2",
    "grade": 7,
    "strand": 2,
    "missionIds": [
      "gh-jhs1-science-earth-cycles"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Describe the importance of the water cycle in nature.",
    "sourcePdfPage": 45,
    "teachingSceneEvidence": "Candidate: gh-jhs1-science-earth-cycles discusses water movement, soil and farming; it does not yet explicitly teach all listed roles of the water cycle.",
    "assessmentEvidence": "No quiz question explicitly assesses the water cycle's importance for nutrients, water tables, weather patterns and clean water.",
    "teachingSceneRefs": [
      "gh-jhs1-science-earth-cycles#scene-1",
      "gh-jhs1-science-earth-cycles#scene-3"
    ],
    "assessmentQuestionRefs": []
  },
  {
    "indicatorCode": "B7.2.2.1.1",
    "grade": 7,
    "strand": 2,
    "missionIds": [],
    "status": "needs-review",
    "officialIndicatorText": "Describe the life cycle of the housefly.",
    "sourcePdfPage": 46,
    "teachingSceneEvidence": "No matching housefly life-cycle mission was found. The existing life-cycles mission covers plants, butterflies and chickens, not the housefly indicator.",
    "assessmentEvidence": "No housefly-specific assessment question was found in the current Basic 7 Science mission set.",
    "teachingSceneRefs": [],
    "assessmentQuestionRefs": []
  },
  {
    "indicatorCode": "B7.2.2.1.2",
    "grade": 7,
    "strand": 2,
    "missionIds": [],
    "status": "needs-review",
    "officialIndicatorText": "Discuss the activities of the housefly as a menace to humans and show how to reduce the effects of those activities.",
    "sourcePdfPage": 47,
    "teachingSceneEvidence": "No matching housefly feeding, disease transmission, nuisance or prevention lesson was found in the current Basic 7 Science mission set.",
    "assessmentEvidence": "No housefly impact or prevention assessment question was found.",
    "teachingSceneRefs": [],
    "assessmentQuestionRefs": []
  },
  {
    "indicatorCode": "B7.2.3.1.1",
    "grade": 7,
    "strand": 2,
    "missionIds": [
      "gh-jhs1-science-crop-production"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Observe and list all plant nutrient sources available in a community and categorise them into organic and inorganic nutrient sources.",
    "sourcePdfPage": 48,
    "teachingSceneEvidence": "Candidate: gh-jhs1-science-crop-production scene[2] mentions manure and fertiliser; community nutrient-source identification and organic/inorganic classification are not yet explicitly taught.",
    "assessmentEvidence": "No question explicitly asks learners to identify community plant nutrient sources and classify them as organic or inorganic.",
    "teachingSceneRefs": [
      "gh-jhs1-science-crop-production#scene-2"
    ],
    "assessmentQuestionRefs": []
  },
  {
    "indicatorCode": "B7.2.3.1.2",
    "grade": 7,
    "strand": 2,
    "missionIds": [
      "gh-jhs1-science-crop-production"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Describe the physical characteristics of different plant nutrients (organic and inorganic) and how each is applied to plants in the field.",
    "sourcePdfPage": 48,
    "teachingSceneEvidence": "Candidate: gh-jhs1-science-crop-production scene[2] mentions manure and fertiliser, but does not compare their physical characteristics or demonstrate field application.",
    "assessmentEvidence": "No assessment question checks nutrient characteristics and appropriate field application.",
    "teachingSceneRefs": [
      "gh-jhs1-science-crop-production#scene-2"
    ],
    "assessmentQuestionRefs": []
  },
  {
    "indicatorCode": "B7.2.4.1.1",
    "grade": 7,
    "strand": 2,
    "missionIds": [],
    "status": "needs-review",
    "officialIndicatorText": "Examine and list domestic animals in the community.",
    "sourcePdfPage": 49,
    "teachingSceneEvidence": "No matching mission explicitly asks learners to examine and list domestic animals in their community; the existing animal-production lesson is a general animal-care introduction.",
    "assessmentEvidence": "No community-based domestic-animal identification question was found.",
    "teachingSceneRefs": [],
    "assessmentQuestionRefs": []
  },
  {
    "indicatorCode": "B7.2.4.1.2",
    "grade": 7,
    "strand": 2,
    "missionIds": [],
    "status": "needs-review",
    "officialIndicatorText": "Classify domestic animals into ruminants, monogastrics and poultry.",
    "sourcePdfPage": 50,
    "teachingSceneEvidence": "No matching lesson teaching the required ruminant, monogastric and poultry classification was found.",
    "assessmentEvidence": "No quiz question assesses the three required domestic-animal groups.",
    "teachingSceneRefs": [],
    "assessmentQuestionRefs": []
  },
  {
    "indicatorCode": "B7.2.4.2.1",
    "grade": 7,
    "strand": 2,
    "missionIds": [],
    "status": "needs-review",
    "officialIndicatorText": "Discuss and write the domestic and commercial uses of different types of animals.",
    "sourcePdfPage": 51,
    "teachingSceneEvidence": "No matching lesson compares domestic and commercial uses of animal types; the existing animal-production mission focuses on welfare and housing.",
    "assessmentEvidence": "No question explicitly assesses domestic and commercial uses of different animal types.",
    "teachingSceneRefs": [],
    "assessmentQuestionRefs": []
  },
  {
    "indicatorCode": "B7.2.4.2.2",
    "grade": 7,
    "strand": 2,
    "missionIds": [],
    "status": "needs-review",
    "officialIndicatorText": "Observe and compare the uses of the different types of animals.",
    "sourcePdfPage": 52,
    "teachingSceneEvidence": "No matching observation-and-comparison activity covering uses of different animal types was found.",
    "assessmentEvidence": "No comparative assessment question on animal uses was found.",
    "teachingSceneRefs": [],
    "assessmentQuestionRefs": []
  },

  // Basic 7 · Strand 3 — Systems (NaCCA CCP, pp. 53–62).
  {
    indicatorCode: 'B7.3.1.1.1', grade: 7, strand: 3, missionIds: ['gh-jhs1-science-human-body-system'],
    status: 'needs-review', officialIndicatorText: 'Explain the concept of food and the need for humans to eat.', sourcePdfPage: 53,
    teachingSceneEvidence: 'Candidate: human-body-system scene 0 explains food, nutrients and why the body needs them; verify all official exemplars.',
    assessmentEvidence: 'Candidate: human-body-system quiz 0 asks why humans need food; verify nutrient concepts and exemplar depth.',
    teachingSceneRefs: ['gh-jhs1-science-human-body-system#scene-0'], assessmentQuestionRefs: ['gh-jhs1-science-human-body-system#quiz-0']
  },
  {
    indicatorCode: 'B7.3.1.1.2', grade: 7, strand: 3, missionIds: ['gh-jhs1-science-human-body-system'],
    status: 'needs-review', officialIndicatorText: 'Examine what happens to food at the stages of digestion in humans.', sourcePdfPage: 54,
    teachingSceneEvidence: 'Candidate: human-body-system scenes 1–3 describe digestion through the alimentary canal; verify each stage and local food examples.',
    assessmentEvidence: 'Candidate: quiz questions 1–3 cover the mouth, oesophagus and small intestine; full stage coverage needs review.',
    teachingSceneRefs: ['gh-jhs1-science-human-body-system#scene-1','gh-jhs1-science-human-body-system#scene-2','gh-jhs1-science-human-body-system#scene-3'],
    assessmentQuestionRefs: ['gh-jhs1-science-human-body-system#quiz-1','gh-jhs1-science-human-body-system#quiz-2','gh-jhs1-science-human-body-system#quiz-3']
  },
  {
    indicatorCode: 'B7.3.1.1.3', grade: 7, strand: 3, missionIds: ['gh-jhs1-science-human-body-system'],
    status: 'needs-review', officialIndicatorText: 'Identify the end product of digestion of starchy, protein and oily foods and explain how absorption of the digested food occurs in humans.', sourcePdfPage: 55,
    teachingSceneEvidence: 'Candidate: human-body-system scene 2 explains nutrient absorption; end products for starch, protein and fats need explicit verification and likely enrichment.',
    assessmentEvidence: 'No current question explicitly tests all three digestion end products and absorption together.',
    teachingSceneRefs: ['gh-jhs1-science-human-body-system#scene-2'], assessmentQuestionRefs: []
  },
  {
    indicatorCode: 'B7.3.2.1.1', grade: 7, strand: 3, missionIds: ['gh-jhs1-science-solar-system'],
    status: 'needs-review', officialIndicatorText: 'Identify the inner planets of the solar system and describe their properties.', sourcePdfPage: 56,
    teachingSceneEvidence: 'Candidate: solar-system scenes 0–3 introduce the inner planets and their properties; verify the galaxy and orbit exemplars.',
    assessmentEvidence: 'Candidate: solar-system quizzes 0–2 assess inner-planet order and selected properties.',
    teachingSceneRefs: ['gh-jhs1-science-solar-system#scene-0','gh-jhs1-science-solar-system#scene-1','gh-jhs1-science-solar-system#scene-2'],
    assessmentQuestionRefs: ['gh-jhs1-science-solar-system#quiz-0','gh-jhs1-science-solar-system#quiz-1','gh-jhs1-science-solar-system#quiz-2']
  },
  {
    indicatorCode: 'B7.3.2.1.2', grade: 7, strand: 3, missionIds: ['gh-jhs1-science-solar-system'],
    status: 'needs-review', officialIndicatorText: 'Discuss the properties and the relative motions of the planets Mercury and Venus.', sourcePdfPage: 57,
    teachingSceneEvidence: 'Candidate: solar-system scenes 1–3 discuss Mercury and Venus and planetary movement; relative motion comparison needs review.',
    assessmentEvidence: 'Candidate: solar-system quiz 2 assesses Venus; no question directly compares the relative motions of Mercury and Venus.',
    teachingSceneRefs: ['gh-jhs1-science-solar-system#scene-1','gh-jhs1-science-solar-system#scene-3'],
    assessmentQuestionRefs: ['gh-jhs1-science-solar-system#quiz-2']
  },
  {
    indicatorCode: 'B7.3.3.1.1', grade: 7, strand: 3, missionIds: ['gh-jhs1-science-ecosystem'],
    status: 'needs-review', officialIndicatorText: 'Analyse the components of ecosystems and identify the interactions within.', sourcePdfPage: 58,
    teachingSceneEvidence: 'Candidate: ecosystem scenes 0–3 identify living/non-living components, ecosystem types and food-chain interactions; verify all official exemplars.',
    assessmentEvidence: 'Candidate: ecosystem quizzes 0–4 assess components, producers, food chains and ecosystem change.',
    teachingSceneRefs: ['gh-jhs1-science-ecosystem#scene-0','gh-jhs1-science-ecosystem#scene-1','gh-jhs1-science-ecosystem#scene-2','gh-jhs1-science-ecosystem#scene-3'],
    assessmentQuestionRefs: ['gh-jhs1-science-ecosystem#quiz-0','gh-jhs1-science-ecosystem#quiz-1','gh-jhs1-science-ecosystem#quiz-2','gh-jhs1-science-ecosystem#quiz-3','gh-jhs1-science-ecosystem#quiz-4']
  },
  {
    indicatorCode: 'B7.3.4.1.1', grade: 7, strand: 3, missionIds: ['gh-jhs1-science-farming-systems'],
    status: 'needs-review', officialIndicatorText: 'Examine and discuss the differences among the various farming systems.', sourcePdfPage: 60,
    teachingSceneEvidence: 'Candidate: farming-systems scenes 0–3 define and compare land rotation, crop rotation, mixed cropping, mixed farming and organic farming.',
    assessmentEvidence: 'Candidate: farming-systems quizzes 0–2 distinguish crop rotation, mixed cropping and mixed farming; full comparison needs review.',
    teachingSceneRefs: ['gh-jhs1-science-farming-systems#scene-0','gh-jhs1-science-farming-systems#scene-1','gh-jhs1-science-farming-systems#scene-2','gh-jhs1-science-farming-systems#scene-3'],
    assessmentQuestionRefs: ['gh-jhs1-science-farming-systems#quiz-0','gh-jhs1-science-farming-systems#quiz-1','gh-jhs1-science-farming-systems#quiz-2']
  },
  {
    indicatorCode: 'B7.3.4.1.2', grade: 7, strand: 3, missionIds: ['gh-jhs1-science-farming-systems'],
    status: 'needs-review', officialIndicatorText: 'Categorise different farming systems.', sourcePdfPage: 61,
    teachingSceneEvidence: 'Candidate: farming-systems scenes 1–3 describe the five named systems; a structured classification activity is not yet confirmed.',
    assessmentEvidence: 'Candidate: farming-systems quizzes 0–2 classify selected practices; verify all five farming-system categories.',
    teachingSceneRefs: ['gh-jhs1-science-farming-systems#scene-1','gh-jhs1-science-farming-systems#scene-2','gh-jhs1-science-farming-systems#scene-3'],
    assessmentQuestionRefs: ['gh-jhs1-science-farming-systems#quiz-0','gh-jhs1-science-farming-systems#quiz-1','gh-jhs1-science-farming-systems#quiz-2']
  },
  {
    indicatorCode: 'B7.3.4.1.3', grade: 7, strand: 3, missionIds: ['gh-jhs1-science-farming-systems'],
    status: 'needs-review', officialIndicatorText: 'Discuss the usefulness of different farming systems.', sourcePdfPage: 62,
    teachingSceneEvidence: 'Candidate: farming-systems scene 3 notes that systems suit different conditions; merits, limits and reasons for use need deeper treatment.',
    assessmentEvidence: 'No current question explicitly compares the usefulness, merits and demerits of all farming systems.',
    teachingSceneRefs: ['gh-jhs1-science-farming-systems#scene-3'], assessmentQuestionRefs: []
  },
];

/** Roll-up that exposes how many official indicators still lack explicit indicator-level references. */
export const GHANA_JHS_SCIENCE_COVERAGE_SUMMARY = ([7,8,9] as const).map(grade => {
  const officialIndicatorCount = GHANA_JHS_SCIENCE_OFFICIAL_INDICATOR_COUNTS
    .filter(item => item.grade === grade)
    .reduce((total, item) => total + item.officialIndicatorCount, 0);
  const linkedCodes = GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE.filter(item => item.grade === grade);
  return {
    grade,
    officialIndicatorCount,
    crosswalkEntries: linkedCodes.length,
    notYetInCrosswalk: officialIndicatorCount - linkedCodes.length,
    verifiedCovered: linkedCodes.filter(item => item.status === 'covered').length
  };
});

export const GHANA_JHS_SCIENCE_INDICATOR_SOURCE = {
  title: 'NaCCA Science Common Core Programme Curriculum for JHS1 (B7) – JHS3 (B9)',
  published: 'September 2020',
  officialUrl: 'https://nacca.gov.gh/wp-content/uploads/2023/06/SCIENCE.pdf',
  supplementaryIndexUrl: 'https://pearluxe.online/document/48'
} as const;
