export type GhanaScienceIndicatorStatus = 'covered' | 'partial' | 'not-yet-covered' | 'needs-review';

export interface GhanaScienceIndicatorEvidence {
  indicatorCode: string;
  grade: 7 | 8 | 9;
  strand: 1 | 2 | 3 | 4 | 5;
  missionIds: string[];
  status: GhanaScienceIndicatorStatus;
  teachingSceneEvidence: string;
  assessmentEvidence: string;
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
    "officialIndicatorCount": 8
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
    explicitIndicatorReferences: linkedCodes.length,
    notExplicitlyReferenced: officialIndicatorCount - linkedCodes.length,
    verifiedCovered: linkedCodes.filter(item => item.status === 'covered').length
  };
});

export const GHANA_JHS_SCIENCE_INDICATOR_SOURCE = {
  title: 'NaCCA Science Common Core Programme Curriculum for JHS1 (B7) – JHS3 (B9)',
  published: 'September 2020',
  officialUrl: 'https://nacca.gov.gh/wp-content/uploads/2023/06/SCIENCE.pdf',
  supplementaryIndexUrl: 'https://pearluxe.online/document/48'
} as const;
