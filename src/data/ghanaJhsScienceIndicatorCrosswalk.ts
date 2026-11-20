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
    "officialIndicatorCount": 17
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
    indicatorCode: 'B7.1.1.1.2', grade: 7, strand: 1, missionIds: ['gh-jhs1-science-importance-liquids'],
    status: 'needs-review', officialIndicatorText: 'Discuss the importance of liquids in human life.', sourcePdfPage: 40,
    teachingSceneEvidence: 'Candidate: gh-jhs1-science-importance-liquids scenes 0–4 explain the importance of water, blood, plant sap and useful liquids in food preparation, hygiene and daily life; verify all official exemplars.',
    assessmentEvidence: 'Candidate: quiz 0–4 assess clean water, blood transport, plant sap, cooking oil and safe handling of unknown liquids; question alignment and full exemplar coverage require human review.',
    teachingSceneRefs: ['gh-jhs1-science-importance-liquids#scene-0','gh-jhs1-science-importance-liquids#scene-1','gh-jhs1-science-importance-liquids#scene-2','gh-jhs1-science-importance-liquids#scene-3','gh-jhs1-science-importance-liquids#scene-4'],
    assessmentQuestionRefs: ['gh-jhs1-science-importance-liquids#quiz-0','gh-jhs1-science-importance-liquids#quiz-1','gh-jhs1-science-importance-liquids#quiz-2','gh-jhs1-science-importance-liquids#quiz-3','gh-jhs1-science-importance-liquids#quiz-4']
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
  // Basic 7 · Strand 5 — Humans and the Environment (NaCCA CCP, pp. 44–50).
  {
    indicatorCode: 'B7.5.1.1.1', grade: 7, strand: 5, missionIds: ['gh-jhs1-science-waste-management'],
    status: 'needs-review', officialIndicatorText: 'Apply information from research on good management practices of waste to make the environment clean.', sourcePdfPage: 84,
    teachingSceneEvidence: 'Candidate: waste-management scenes 0–3 cover waste types, the 3Rs, sorting, composting and planning a safe clean-community project; learner-led research and project reporting need explicit evidence.',
    assessmentEvidence: 'Candidate: waste-management quizzes 0–4 assess waste reduction, recycling, hazardous waste, compost and safe project planning; research findings and a project outcome report are not directly assessed.',
    teachingSceneRefs: ['gh-jhs1-science-waste-management#scene-0','gh-jhs1-science-waste-management#scene-1','gh-jhs1-science-waste-management#scene-2','gh-jhs1-science-waste-management#scene-3'],
    assessmentQuestionRefs: ['gh-jhs1-science-waste-management#quiz-0','gh-jhs1-science-waste-management#quiz-1','gh-jhs1-science-waste-management#quiz-2','gh-jhs1-science-waste-management#quiz-3','gh-jhs1-science-waste-management#quiz-4']
  },
  {
    indicatorCode: 'B7.5.2.1.1', grade: 7, strand: 5, missionIds: ['gh-jhs1-science-human-health'],
    status: 'needs-review', officialIndicatorText: 'Explain the relationship between food nutrients and common deficiency diseases and how they affect humans.', sourcePdfPage: 85,
    teachingSceneEvidence: 'Candidate: human-health scenes 0–1 explain nutrient roles and connect vitamin A, C and D, protein and iron deficiencies to health effects; the full range of nutrient examples and disease prevention needs review.',
    assessmentEvidence: 'Candidate: human-health quizzes 0–2 assess protein, scurvy and night blindness; other deficiency diseases and their symptoms, effects and prevention need direct assessment.',
    teachingSceneRefs: ['gh-jhs1-science-human-health#scene-0','gh-jhs1-science-human-health#scene-1'],
    assessmentQuestionRefs: ['gh-jhs1-science-human-health#quiz-0','gh-jhs1-science-human-health#quiz-1','gh-jhs1-science-human-health#quiz-2']
  },
  {
    indicatorCode: 'B7.5.2.2.1', grade: 7, strand: 5, missionIds: ['gh-jhs1-science-human-health'],
    status: 'needs-review', officialIndicatorText: 'Explain the nature of viral diseases with special emphasis on coronavirus disease (COVID-19), Ebola and H1N1, their causes, symptoms, effects on humans and prevention.', sourcePdfPage: 86,
    teachingSceneEvidence: 'Candidate: human-health scenes 2–3 introduce viral disease, selected examples, transmission and prevention; disease-specific causes, symptoms and effects need fuller treatment.',
    assessmentEvidence: 'Candidate: human-health quizzes 3–4 check viral cause and general respiratory-infection prevention; Ebola, H1N1, transmission routes, symptoms and community management are not directly assessed.',
    teachingSceneRefs: ['gh-jhs1-science-human-health#scene-2','gh-jhs1-science-human-health#scene-3'],
    assessmentQuestionRefs: ['gh-jhs1-science-human-health#quiz-3','gh-jhs1-science-human-health#quiz-4']
  },
  {
    indicatorCode: 'B7.5.3.1.1', grade: 7, strand: 5, missionIds: ['gh-jhs1-science-science-industry'],
    status: 'needs-review', officialIndicatorText: 'Discover and explain how careers in science can improve human conditions and relate these careers to the work of great national and international scientists and science educators.', sourcePdfPage: 87,
    teachingSceneEvidence: 'Candidate: science-industry scenes 0–3 connect science careers to community needs and introduce Ghanaian and international scientists and science educators; learner research and portfolio work need verification.',
    assessmentEvidence: 'Candidate: science-industry quizzes 0–4 assess career roles, evidence, a Ghanaian scientist and responsible research; a portfolio and presentation linking national and international role models is not directly assessed.',
    teachingSceneRefs: ['gh-jhs1-science-science-industry#scene-0','gh-jhs1-science-science-industry#scene-1','gh-jhs1-science-science-industry#scene-2','gh-jhs1-science-science-industry#scene-3'],
    assessmentQuestionRefs: ['gh-jhs1-science-science-industry#quiz-0','gh-jhs1-science-science-industry#quiz-1','gh-jhs1-science-science-industry#quiz-2','gh-jhs1-science-science-industry#quiz-3','gh-jhs1-science-science-industry#quiz-4']
  },
  {
    indicatorCode: 'B7.5.4.1.1', grade: 7, strand: 5, missionIds: ['gh-jhs1-science-climate-green-economy'],
    status: 'needs-review', officialIndicatorText: 'Search for information on ways sustainable energy choices and scientific ideas are used to protect the environment.', sourcePdfPage: 88,
    teachingSceneEvidence: 'Candidate: climate and green-economy scenes 0–3 explain the greenhouse effect, human-driven climate change, sustainable energy choices and community projects; a research-led local energy investigation needs explicit evidence.',
    assessmentEvidence: 'Candidate: climate and green-economy quizzes 0–4 assess greenhouse science, fossil fuels, sustainable energy and environmental projects; research quality and a designed local energy project are not directly assessed.',
    teachingSceneRefs: ['gh-jhs1-science-climate-green-economy#scene-0','gh-jhs1-science-climate-green-economy#scene-1','gh-jhs1-science-climate-green-economy#scene-2','gh-jhs1-science-climate-green-economy#scene-3'],
    assessmentQuestionRefs: ['gh-jhs1-science-climate-green-economy#quiz-0','gh-jhs1-science-climate-green-economy#quiz-1','gh-jhs1-science-climate-green-economy#quiz-2','gh-jhs1-science-climate-green-economy#quiz-3','gh-jhs1-science-climate-green-economy#quiz-4']
  },
  {
    indicatorCode: 'B7.5.5.1.1', grade: 7, strand: 5, missionIds: ['gh-jhs1-science-understanding-environment'],
    status: 'needs-review', officialIndicatorText: 'List and describe the different types of plants and animals that live in different landforms such as plateau, plain, mountain and valley, with emphasis on landforms in Ghana.', sourcePdfPage: 89,
    teachingSceneEvidence: 'Candidate: environment scenes 0–1 introduce Ghanaian landforms and plant/animal adaptations; examples across specific Ghanaian landforms and a complete species comparison need review.',
    assessmentEvidence: 'Candidate: environment quizzes 0–1 assess landforms and plant adaptations; identification and description of plants and animals across Ghanaian landforms need broader assessment.',
    teachingSceneRefs: ['gh-jhs1-science-understanding-environment#scene-0','gh-jhs1-science-understanding-environment#scene-1'],
    assessmentQuestionRefs: ['gh-jhs1-science-understanding-environment#quiz-0','gh-jhs1-science-understanding-environment#quiz-1']
  },
  {
    indicatorCode: 'B7.5.5.1.2', grade: 7, strand: 5, missionIds: ['gh-jhs1-science-understanding-environment'],
    status: 'needs-review', officialIndicatorText: 'Explain the nature of associations that exist among plants and animals in different landforms and their mechanisms for survival.', sourcePdfPage: 90,
    teachingSceneEvidence: 'Candidate: environment scenes 1–3 explain adaptations, mutualism, parasitism, commensalism and habitat observation; examples tied to particular landforms and survival mechanisms need review.',
    assessmentEvidence: 'Candidate: environment quizzes 2–4 assess mutualism, parasitism and responsible habitat study; associations across different landforms and their survival mechanisms need fuller assessment.',
    teachingSceneRefs: ['gh-jhs1-science-understanding-environment#scene-1','gh-jhs1-science-understanding-environment#scene-2','gh-jhs1-science-understanding-environment#scene-3'],
    assessmentQuestionRefs: ['gh-jhs1-science-understanding-environment#quiz-2','gh-jhs1-science-understanding-environment#quiz-3','gh-jhs1-science-understanding-environment#quiz-4']
  },

  // Basic 8 · Strand 1 — Diversity of Matter (NaCCA CCP, pp. 52–56).
  {
    indicatorCode: 'B8.1.1.1.1', grade: 8, strand: 1, missionIds: ['gh-jhs2-science-mixture-separation'],
    status: 'needs-review', officialIndicatorText: 'Identify types of mixtures by name and characteristics.', sourcePdfPage: 53,
    teachingSceneEvidence: 'Candidate: gh-jhs2-science-mixture-separation introduces homogeneous and heterogeneous mixtures, solutions, suspensions and colloids; verify that all required mixture types and physical characteristics are taught.',
    assessmentEvidence: 'Candidate: mixture-separation quiz items assess mixture classification and properties; exact question-to-indicator alignment requires review.'
  },
  {
    indicatorCode: 'B8.1.1.1.2', grade: 8, strand: 1, missionIds: ['gh-jhs2-science-mixture-separation'],
    status: 'needs-review', officialIndicatorText: 'Design and perform processes for separating kinds of mixtures.', sourcePdfPage: 53,
    teachingSceneEvidence: 'Candidate: gh-jhs2-science-mixture-separation teaches selection of separation methods including filtering, sieving and distilling; verify learner-designed practical procedures and reporting.',
    assessmentEvidence: 'Candidate: mixture-separation assessment includes method selection; a practical performance and written findings report need direct verification.'
  },
  {
    indicatorCode: 'B8.1.1.2.1', grade: 8, strand: 1, missionIds: ['gh-jhs2-science-atomic-structure'],
    status: 'needs-review', officialIndicatorText: 'Describe atoms as composed of sub-atomic particles.', sourcePdfPage: 54,
    teachingSceneEvidence: 'Candidate: gh-jhs2-science-atomic-structure covers atomic structure and sub-atomic particles; verify particle locations, charges and atom models against all exemplars.',
    assessmentEvidence: 'Candidate: atomic-structure quiz items assess particles and atomic structure; proton, neutron and electron count tasks need direct alignment review.'
  },
  {
    indicatorCode: 'B8.1.1.2.2', grade: 8, strand: 1, missionIds: ['gh-jhs2-science-atomic-structure'],
    status: 'needs-review', officialIndicatorText: 'Explain the arrangement of elements in terms of the number of protons in the nuclei of atoms of each element.', sourcePdfPage: 55,
    teachingSceneEvidence: 'Candidate: gh-jhs2-science-atomic-structure links atomic number and the periodic table; verify electron arrangement, ion formation and molecules as specified in the exemplars.',
    assessmentEvidence: 'Candidate: atomic-structure assessment has relevant periodic-table and atomic-number items; electron configuration, ions and molecules require direct question-level review.'
  },
  {
    indicatorCode: 'B8.1.2.1.1', grade: 8, strand: 1, missionIds: ['gh-jhs2-science-cell-types'],
    status: 'needs-review', officialIndicatorText: 'Examine and describe the structure of prokaryotic and eukaryotic cells.', sourcePdfPage: 56,
    teachingSceneEvidence: 'Candidate: gh-jhs2-science-cell-types compares prokaryotic and eukaryotic cells; verify labelled diagrams, similarities and differences against the exemplars.',
    assessmentEvidence: 'Candidate: cell-types quiz items assess cell structures and types; exact coverage of prokaryotic and eukaryotic comparisons requires review.'
  },
  {
    indicatorCode: 'B8.1.2.1.2', grade: 8, strand: 1, missionIds: ['gh-jhs2-science-cell-types'],
    status: 'needs-review', officialIndicatorText: 'Classify organisms (plants or animals) as prokaryotic or eukaryotic based on the type of cells they are made of.', sourcePdfPage: 56,
    teachingSceneEvidence: 'Candidate: gh-jhs2-science-cell-types introduces prokaryotic and eukaryotic organisms; verify classification examples and the exemplar discussion of impacts on human health and safety measures.',
    assessmentEvidence: 'Candidate: cell-types assessments cover cell classification; organism examples and health-and-safety outcomes require direct review.'
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
  // Basic 8 · uncovered indicators in Strands 3–5 (NaCCA CCP).
  {
    indicatorCode: 'B8.3.1.1.2', grade: 8, strand: 3, missionIds: ['gh-jhs2-science-teeth-dental-health'],
    status: 'needs-review', officialIndicatorText: 'Discuss the functions of the different types of teeth such as incisors, canines, premolars, and molars.', sourcePdfPage: 105,
    teachingSceneEvidence: 'Candidate: teeth and dental-health mission covers mammalian tooth structure and oral health; verify that the functions of incisors, canines, premolars and molars are explicitly taught and illustrated.',
    assessmentEvidence: 'Candidate: dental-health questions may cover tooth structure and care; classification and function of all four tooth types needs direct question-level verification.'
  },
  {
    indicatorCode: 'B8.4.1.1.2', grade: 8, strand: 4, missionIds: ['gh-jhs2-science-energy-sources-heat'],
    status: 'needs-review', officialIndicatorText: 'Discuss the importance of conversion of energy.', sourcePdfPage: 110,
    teachingSceneEvidence: 'Candidate: energy-sources mission introduces energy conversion; verify explicit explanation of hydropower generation from a dammed river and harnessing natural energy forms.',
    assessmentEvidence: 'Candidate: energy assessment needs explicit items on the importance of energy conversion, hydropower processes and natural energy harnessing.'
  },
  {
    indicatorCode: 'B8.4.1.2.1', grade: 8, strand: 4, missionIds: ['gh-jhs2-science-energy-sources-heat'],
    status: 'needs-review', officialIndicatorText: 'Describe renewable and non-renewable forms of energy.', sourcePdfPage: 110,
    teachingSceneEvidence: 'Candidate: energy-sources mission covers energy sources; verify classification and examples including wind, coal, hydro, crude oil, natural gas, solar and biogas.',
    assessmentEvidence: 'Candidate: energy assessment should directly classify renewable and non-renewable sources and explain production from a renewable source.'
  },
  {
    indicatorCode: 'B8.4.1.2.2', grade: 8, strand: 4, missionIds: ['gh-jhs2-science-energy-sources-heat'],
    status: 'needs-review', officialIndicatorText: 'Demonstrate how to manage sources of renewable energy sustainably.', sourcePdfPage: 110,
    teachingSceneEvidence: 'Candidate: energy-sources mission introduces sustainable energy; verify learner research on management stages and comparison of challenges for different renewable sources.',
    assessmentEvidence: 'Candidate: no verified assessment yet demonstrates sustainable management planning or comparison of renewable-energy management challenges.'
  },
  {
    indicatorCode: 'B8.4.4.1.2', grade: 8, strand: 4, missionIds: ['gh-jhs2-science-magnetism-force-machines'],
    status: 'needs-review', officialIndicatorText: 'Explain the relationship between magnetic force and Newton’s Second Law of motion; and show the law’s application to life.', sourcePdfPage: 115,
    teachingSceneEvidence: 'Candidate: magnetism mission introduces magnetic force and applications; verify explicit Newton’s Second Law explanation and an experiment connecting force and motion.',
    assessmentEvidence: 'Candidate: magnetism assessment requires direct items on the relationship between magnetic force and Newton’s Second Law, including everyday applications.'
  },
  {
    indicatorCode: 'B8.5.2.1.2', grade: 8, strand: 5, missionIds: ['gh-jhs2-science-human-health'],
    status: 'needs-review', officialIndicatorText: 'Analyse the risk factors of communicable diseases.', sourcePdfPage: 119,
    teachingSceneEvidence: 'Candidate: human-health mission introduces communicable diseases; verify learner research on risk factors and awareness-raising activities specified by the curriculum.',
    assessmentEvidence: 'Candidate: human-health assessment needs direct scenario-based analysis of communicable-disease risk factors and prevention choices.'
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
    "teachingSceneEvidence": "Candidate: gh-jhs1-science-earth-cycles scenes[0..1] explain evaporation, condensation, precipitation, transpiration and the repeated return of water to rivers, lakes and oceans.",
    "assessmentEvidence": "Candidate: gh-jhs1-science-earth-cycles quiz[0..2] checks solar energy, evaporation and transpiration; scene[1] also teaches condensation, precipitation, surface flow and infiltration.",
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
    "teachingSceneEvidence": "Candidate: gh-jhs1-science-earth-cycles scene[3] explains freshwater renewal, rivers and underground water stores, weather patterns, rainfall, nutrient movement through soil and ecosystem support.",
    "assessmentEvidence": "Candidate: gh-jhs1-science-earth-cycles quiz[4] assesses freshwater renewal, water stores, weather and plant growth; the teaching scene also addresses nutrient movement and water protection.",
    "teachingSceneRefs": [
      "gh-jhs1-science-earth-cycles#scene-1",
      "gh-jhs1-science-earth-cycles#scene-3"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs1-science-earth-cycles#quiz-4"
    ]
  },
  {
    "indicatorCode": "B7.2.2.1.1",
    "grade": 7,
    "strand": 2,
    "missionIds": [
      "gh-jhs1-science-life-cycles"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Describe the life cycle of the housefly.",
    "sourcePdfPage": 46,
    "teachingSceneEvidence": "Candidate: gh-jhs1-science-life-cycles scene[2] teaches the four stages—egg, larva (maggot), pupa and adult—and explains that adults lay eggs on suitable decaying organic material; verify the full local examples and learner observation activity.",
    "assessmentEvidence": "Candidate: gh-jhs1-science-life-cycles quiz[2] assesses the four-stage sequence; a practical observation or labelled life-cycle diagram can strengthen evidence.",
    "teachingSceneRefs": [
      "gh-jhs1-science-life-cycles#scene-2"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs1-science-life-cycles#quiz-2"
    ]
  },
  {
    "indicatorCode": "B7.2.2.1.2",
    "grade": 7,
    "strand": 2,
    "missionIds": [
      "gh-jhs1-science-life-cycles"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Discuss the activities of the housefly as a menace to humans and show how to reduce the effects of those activities.",
    "sourcePdfPage": 47,
    "teachingSceneEvidence": "Candidate: gh-jhs1-science-life-cycles scene[3] explains how flies can transfer germs from faeces, rubbish and decaying waste to food and surfaces, and teaches food covering, handwashing, covered bins, clean toilets and drains, and fly screens; verify the local disease examples and practical demonstration.",
    "assessmentEvidence": "Candidate: gh-jhs1-science-life-cycles quiz[4] checks prevention through food covering and safe waste disposal; a scenario-based question on contamination routes can further assess understanding.",
    "teachingSceneRefs": [
      "gh-jhs1-science-life-cycles#scene-3"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs1-science-life-cycles#quiz-4"
    ]
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
    "teachingSceneEvidence": "Candidate: gh-jhs1-science-crop-production scene[2] guides learners to observe and list nutrient sources found in their community and distinguish organic examples (compost, well-rotted manure, decomposed leaves) from inorganic mineral fertilisers.",
    "assessmentEvidence": "Candidate: gh-jhs1-science-crop-production quiz[2] checks recognition of organic nutrient sources; use the community source inventory and classification table as practical evidence.",
    "teachingSceneRefs": [
      "gh-jhs1-science-crop-production#scene-2"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs1-science-crop-production#quiz-2"
    ]
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
    "teachingSceneEvidence": "Candidate: gh-jhs1-science-crop-production scene[3] compares the physical appearance of organic materials and labelled mineral fertilisers and describes safe, appropriate field placement and a soil-tray demonstration.",
    "assessmentEvidence": "Candidate: gh-jhs1-science-crop-production quiz[3] checks physical characteristics and distinguishes organic materials from inorganic fertilisers; quiz[4] checks safe label-led application and dosage.",
    "teachingSceneRefs": [
      "gh-jhs1-science-crop-production#scene-3"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs1-science-crop-production#quiz-3",
      "gh-jhs1-science-crop-production#quiz-4"
    ]
  },
  {
    "indicatorCode": "B7.2.4.1.1",
    "grade": 7,
    "strand": 2,
    "missionIds": [
      "gh-jhs1-science-animal-production"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Examine and list domestic animals in the community.",
    "sourcePdfPage": 49,
    "teachingSceneEvidence": "Candidate: gh-jhs1-science-animal-production scene[0] guides learners to observe and list domestic animals present in their own community, with examples marked as location-dependent.",
    "assessmentEvidence": "Candidate: gh-jhs1-science-animal-production quiz[0] checks the value of local observation; use the class observation table as additional practical evidence.",
    "teachingSceneRefs": [
      "gh-jhs1-science-animal-production#scene-0"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs1-science-animal-production#quiz-0"
    ]
  },
  {
    "indicatorCode": "B7.2.4.1.2",
    "grade": 7,
    "strand": 2,
    "missionIds": [
      "gh-jhs1-science-animal-production"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Classify domestic animals into ruminants, monogastrics and poultry.",
    "sourcePdfPage": 50,
    "teachingSceneEvidence": "Candidate: gh-jhs1-science-animal-production scene[1] explains ruminants (cattle, goats, sheep), monogastrics (pigs) and poultry (chickens, ducks, turkeys), including distinguishing features.",
    "assessmentEvidence": "Candidate: gh-jhs1-science-animal-production quiz[1] assesses correct classification of cattle, pigs and chickens.",
    "teachingSceneRefs": [
      "gh-jhs1-science-animal-production#scene-3"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs1-science-animal-production#quiz-1"
    ]
  },
  {
    "indicatorCode": "B7.2.4.2.1",
    "grade": 7,
    "strand": 2,
    "missionIds": [
      "gh-jhs1-science-animal-production"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Discuss and write the domestic and commercial uses of different types of animals.",
    "sourcePdfPage": 51,
    "teachingSceneEvidence": "Candidate: gh-jhs1-science-animal-production scene[2] compares household and commercial uses of chickens, cattle, goats, sheep, pigs, dogs and cats.",
    "assessmentEvidence": "Candidate: gh-jhs1-science-animal-production quiz[2..3] checks animal products and commercial uses.",
    "teachingSceneRefs": [
      "gh-jhs1-science-animal-production#scene-4"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs1-science-animal-production#quiz-2"
    ]
  },
  {
    "indicatorCode": "B7.2.4.2.2",
    "grade": 7,
    "strand": 2,
    "missionIds": [
      "gh-jhs1-science-animal-production"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Observe and compare the uses of the different types of animals.",
    "sourcePdfPage": 52,
    "teachingSceneEvidence": "Candidate: gh-jhs1-science-animal-production scene[3] includes a class table of locally observed animals, groups and at least two uses, followed by peer comparison.",
    "assessmentEvidence": "Candidate: gh-jhs1-science-animal-production quiz[2] checks comparative knowledge of different animal uses; retain the class comparison table as practical evidence.",
    "teachingSceneRefs": [
      "gh-jhs1-science-animal-production#scene-5"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs1-science-animal-production#quiz-2"
    ]
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

  // Basic 7 · Strand 4 — Forces and Energy, first inventory slice (NaCCA CCP, pp. 26–34).
  {
    indicatorCode: 'B7.4.1.1.1', grade: 7, strand: 4, missionIds: ['gh-jhs1-science-energy-forms'],
    status: 'needs-review', officialIndicatorText: 'Identify the various forms of energy and show how they are related.', sourcePdfPage: 62,
    teachingSceneEvidence: 'Candidate: energy-forms scenes 1–3 explain potential, kinetic and other forms and their relationships; verify the mechanical-energy relationship and required diagram.',
    assessmentEvidence: 'Candidate: energy-forms quizzes 0–4 test kinetic, potential, chemical, solar and energy conversion; verify all nine named forms.',
    teachingSceneRefs: ['gh-jhs1-science-energy-forms#scene-1','gh-jhs1-science-energy-forms#scene-2','gh-jhs1-science-energy-forms#scene-3'],
    assessmentQuestionRefs: ['gh-jhs1-science-energy-forms#quiz-0','gh-jhs1-science-energy-forms#quiz-1','gh-jhs1-science-energy-forms#quiz-2','gh-jhs1-science-energy-forms#quiz-3','gh-jhs1-science-energy-forms#quiz-4']
  },
  {
    indicatorCode: 'B7.4.1.1.2', grade: 7, strand: 4, missionIds: ['gh-jhs1-science-energy-forms'],
    status: 'needs-review', officialIndicatorText: 'Explain daily applications of forms of energy.', sourcePdfPage: 63,
    teachingSceneEvidence: 'Candidate: energy-forms scenes 0–3 use sunlight, food, appliances and moving objects; required PE/KE factors and formula-based exemplars need verification.',
    assessmentEvidence: 'Candidate: energy-forms quizzes 0–4 assess daily examples; no direct PE = mgh or KE = ½mv² calculation question is mapped.',
    teachingSceneRefs: ['gh-jhs1-science-energy-forms#scene-0','gh-jhs1-science-energy-forms#scene-1','gh-jhs1-science-energy-forms#scene-2','gh-jhs1-science-energy-forms#scene-3'],
    assessmentQuestionRefs: ['gh-jhs1-science-energy-forms#quiz-0','gh-jhs1-science-energy-forms#quiz-1','gh-jhs1-science-energy-forms#quiz-2','gh-jhs1-science-energy-forms#quiz-3','gh-jhs1-science-energy-forms#quiz-4']
  },
  {
    indicatorCode: 'B7.4.1.2.1', grade: 7, strand: 4, missionIds: [],
    status: 'needs-review', officialIndicatorText: 'Explain and demonstrate how heat is transferred in various media.', sourcePdfPage: 64,
    teachingSceneEvidence: 'No matching Basic 7 heat-transfer lesson was found. The energy-forms mission mentions heat but does not teach conduction or transfer through gas, plastic, metal and liquid.',
    assessmentEvidence: 'No matching assessment question was found for heat transfer through different media.',
    teachingSceneRefs: [], assessmentQuestionRefs: []
  },
  {
    indicatorCode: 'B7.4.1.3.1', grade: 7, strand: 4, missionIds: [],
    status: 'needs-review', officialIndicatorText: 'Demonstrate how light travels in a straight line.', sourcePdfPage: 65,
    teachingSceneEvidence: 'No matching Basic 7 light investigation was found for straight-line travel, reflection, refraction and dispersion.',
    assessmentEvidence: 'No matching assessment question was found for the light-path practical exemplars.',
    teachingSceneRefs: [], assessmentQuestionRefs: []
  },
  {
    indicatorCode: 'B7.4.2.1.1', grade: 7, strand: 4, missionIds: ['gh-jhs1-science-electricity-generation'],
    status: 'needs-review', officialIndicatorText: 'Describe the various forms of electricity generation.', sourcePdfPage: 66,
    teachingSceneEvidence: 'Candidate: electricity-generation scenes 0–2 describe hydroelectric, thermal and solar generation; the official exemplar specifically includes thermal and nuclear generation, so nuclear content is a gap.',
    assessmentEvidence: 'Candidate: electricity-generation quizzes 0–3 assess hydroelectric, solar, environmental impact and source selection; nuclear generation is not assessed.',
    teachingSceneRefs: ['gh-jhs1-science-electricity-generation#scene-0','gh-jhs1-science-electricity-generation#scene-1','gh-jhs1-science-electricity-generation#scene-2'],
    assessmentQuestionRefs: ['gh-jhs1-science-electricity-generation#quiz-0','gh-jhs1-science-electricity-generation#quiz-1','gh-jhs1-science-electricity-generation#quiz-2','gh-jhs1-science-electricity-generation#quiz-3']
  },
  {
    indicatorCode: 'B7.4.2.1.2', grade: 7, strand: 4, missionIds: ['gh-jhs1-science-electricity-generation'],
    status: 'needs-review', officialIndicatorText: 'Explain the impact of electricity generation on the environment.', sourcePdfPage: 66,
    teachingSceneEvidence: 'Candidate: electricity-generation scenes 1–3 discuss dam impacts, fuel emissions, solar generation and trade-offs; nuclear-specific impacts and mitigation require enrichment.',
    assessmentEvidence: 'Candidate: electricity-generation quiz 2 tests air pollution and greenhouse gases; nuclear impacts and mitigation are not directly assessed.',
    teachingSceneRefs: ['gh-jhs1-science-electricity-generation#scene-1','gh-jhs1-science-electricity-generation#scene-2','gh-jhs1-science-electricity-generation#scene-3'],
    assessmentQuestionRefs: ['gh-jhs1-science-electricity-generation#quiz-2']
  },
  {
    indicatorCode: 'B7.4.2.2.1', grade: 7, strand: 4, missionIds: [],
    status: 'needs-review', officialIndicatorText: 'Demonstrate how to assemble basic electronic components in an electronic circuit.', sourcePdfPage: 67,
    teachingSceneEvidence: 'No matching Basic 7 hands-on electronics assembly mission was found for LEDs, P-N junction diodes, resistors, capacitors and a simple circuit.',
    assessmentEvidence: 'No matching practical circuit-assembly assessment was found.',
    teachingSceneRefs: [], assessmentQuestionRefs: []
  },
  {
    indicatorCode: 'B7.4.2.2.2', grade: 7, strand: 4, missionIds: [],
    status: 'needs-review', officialIndicatorText: 'Discuss the function of each electronic component and their interdependence with each other.', sourcePdfPage: 67,
    teachingSceneEvidence: 'No matching lesson was found for component functions, polarity, open/closed switches and component interdependence.',
    assessmentEvidence: 'No matching component-function assessment was found.',
    teachingSceneRefs: [], assessmentQuestionRefs: []
  },
  {
    indicatorCode: 'B7.4.2.2.3', grade: 7, strand: 4, missionIds: [],
    status: 'needs-review', officialIndicatorText: 'Discuss the function of each electronic component such as resistor, diode, and inductor, and their interdependence for the functioning of an electronic gadget.', sourcePdfPage: 68,
    teachingSceneEvidence: 'No matching lesson was found for resistor, diode and inductor roles or their effect on LED brightness.',
    assessmentEvidence: 'No matching assessment question was found for component interdependence or LED brightness.',
    teachingSceneRefs: [], assessmentQuestionRefs: []
  },
  {
    indicatorCode: 'B7.4.3.1.1', grade: 7, strand: 4, missionIds: ['gh-jhs1-science-energy-conversion'],
    status: 'needs-review', officialIndicatorText: 'Explain the principle underlying conservation and conversion of energy.', sourcePdfPage: 69,
    teachingSceneEvidence: 'Candidate: energy-conversion scenes 0–3 explain conversion, transfers and conservation in a torch, fan and stove; verify the closed-system dry-cell exemplar.',
    assessmentEvidence: 'Candidate: energy-conversion quizzes 0–4 assess device transformations and conservation; verify the closed-system example.',
    teachingSceneRefs: ['gh-jhs1-science-energy-conversion#scene-0','gh-jhs1-science-energy-conversion#scene-1','gh-jhs1-science-energy-conversion#scene-2','gh-jhs1-science-energy-conversion#scene-3'],
    assessmentQuestionRefs: ['gh-jhs1-science-energy-conversion#quiz-0','gh-jhs1-science-energy-conversion#quiz-1','gh-jhs1-science-energy-conversion#quiz-2','gh-jhs1-science-energy-conversion#quiz-3','gh-jhs1-science-energy-conversion#quiz-4']
  },
  {
    indicatorCode: 'B7.4.3.1.2', grade: 7, strand: 4, missionIds: ['gh-jhs1-science-energy-conversion'],
    status: 'needs-review', officialIndicatorText: 'Demonstrate the conversion of energy into useable forms.', sourcePdfPage: 69,
    teachingSceneEvidence: 'Candidate: energy-conversion scenes 0–1 trace energy changes in a torch, fan and stove; practical diagram or demonstration coverage needs verification.',
    assessmentEvidence: 'Candidate: energy-conversion quizzes 0–1 test conversions in everyday devices.',
    teachingSceneRefs: ['gh-jhs1-science-energy-conversion#scene-0','gh-jhs1-science-energy-conversion#scene-1'],
    assessmentQuestionRefs: ['gh-jhs1-science-energy-conversion#quiz-0','gh-jhs1-science-energy-conversion#quiz-1']
  },
  {
    indicatorCode: 'B7.4.3.1.3', grade: 7, strand: 4, missionIds: ['gh-jhs1-science-energy-conversion'],
    status: 'needs-review', officialIndicatorText: 'Know how energy could be conserved for future use in life.', sourcePdfPage: 70,
    teachingSceneEvidence: 'Candidate: energy-conversion scene 3 covers efficient use and storage in batteries and pumped water; conservation for the benefit of people and other life forms needs review.',
    assessmentEvidence: 'Candidate: energy-conversion quiz 4 assesses energy-saving behaviour; energy storage for future use is not directly assessed.',
    teachingSceneRefs: ['gh-jhs1-science-energy-conversion#scene-3'], assessmentQuestionRefs: ['gh-jhs1-science-energy-conversion#quiz-4']
  },

  // Basic 7 · Strand 4 — Force and Motion (NaCCA CCP, pp. 35–38).
  {
    indicatorCode: 'B7.4.4.1.1', grade: 7, strand: 4, missionIds: ['gh-jhs1-science-force-motion'],
    status: 'needs-review', officialIndicatorText: 'Understand that unbalanced forces acting on an object cause it to move.', sourcePdfPage: 71,
    teachingSceneEvidence: 'Candidate: force-motion scenes 0–2 introduce pushes, pulls, balanced and unbalanced forces, friction and gravity; the inertia explanation and demonstration need explicit strengthening.',
    assessmentEvidence: 'Candidate: force-motion quizzes 0–2 test force definition, balanced forces and friction; no direct inertia demonstration question is mapped.',
    teachingSceneRefs: ['gh-jhs1-science-force-motion#scene-0','gh-jhs1-science-force-motion#scene-1','gh-jhs1-science-force-motion#scene-2'],
    assessmentQuestionRefs: ['gh-jhs1-science-force-motion#quiz-0','gh-jhs1-science-force-motion#quiz-1','gh-jhs1-science-force-motion#quiz-2']
  },
  {
    indicatorCode: 'B7.4.4.1.2', grade: 7, strand: 4, missionIds: ['gh-jhs1-science-force-motion'],
    status: 'needs-review', officialIndicatorText: 'State and explain Newton’s First Law of motion.', sourcePdfPage: 72,
    teachingSceneEvidence: 'Candidate: force-motion scene 1 describes balanced forces and unchanged motion; Newton’s First Law should be named and explained explicitly.',
    assessmentEvidence: 'Candidate: force-motion quiz 1 tests balanced forces but does not directly name or state Newton’s First Law.',
    teachingSceneRefs: ['gh-jhs1-science-force-motion#scene-1'], assessmentQuestionRefs: ['gh-jhs1-science-force-motion#quiz-1']
  },
  {
    indicatorCode: 'B7.4.4.1.3', grade: 7, strand: 4, missionIds: ['gh-jhs1-science-force-motion'],
    status: 'needs-review', officialIndicatorText: 'Examine the application of Newton’s First Law of motion in life.', sourcePdfPage: 73,
    teachingSceneEvidence: 'Candidate: force-motion scenes 0–2 include everyday movement and friction examples; explicit inertia applications such as passenger motion during braking need enrichment.',
    assessmentEvidence: 'No current quiz question directly assesses a real-life application of Newton’s First Law.',
    teachingSceneRefs: ['gh-jhs1-science-force-motion#scene-0','gh-jhs1-science-force-motion#scene-1','gh-jhs1-science-force-motion#scene-2'], assessmentQuestionRefs: []
  },
  {
    indicatorCode: 'B7.4.4.1.4', grade: 7, strand: 4, missionIds: ['gh-jhs1-science-force-motion'],
    status: 'needs-review', officialIndicatorText: 'Demonstrate the behaviour of magnet and its use to life.', sourcePdfPage: 74,
    teachingSceneEvidence: 'No matching magnetism lesson is present in the force-motion mission; the current scene set focuses on pushes, pulls, friction, gravity and levers.',
    assessmentEvidence: 'No matching magnet behaviour or application question is present in the force-motion quiz.',
    teachingSceneRefs: [], assessmentQuestionRefs: []
  },

  // Basic 7 · Strand 4 — Simple Machines (NaCCA CCP, pp. 38–40).
  {
    indicatorCode: 'B7.4.4.2.1', grade: 7, strand: 4, missionIds: ['gh-jhs1-science-force-motion'],
    status: 'needs-review', officialIndicatorText: 'Identify simple machines.', sourcePdfPage: 78,
    teachingSceneEvidence: 'Candidate: force-motion scene 3 introduces levers, a fulcrum, a seesaw and a wheelbarrow; other simple-machine types need explicit teaching.',
    assessmentEvidence: 'Candidate: force-motion quiz 3 checks the fulcrum and quiz 4 identifies a wheelbarrow as a second-class lever; a broader simple-machine identification assessment is still needed.',
    teachingSceneRefs: ['gh-jhs1-science-force-motion#scene-3'], assessmentQuestionRefs: ['gh-jhs1-science-force-motion#quiz-3','gh-jhs1-science-force-motion#quiz-4']
  },
  {
    indicatorCode: 'B7.4.4.2.2', grade: 7, strand: 4, missionIds: ['gh-jhs1-science-force-motion'],
    status: 'needs-review', officialIndicatorText: 'Describe the types and functions of levers.', sourcePdfPage: 79,
    teachingSceneEvidence: 'Candidate: force-motion scene 3 describes the fulcrum, first-class seesaw and second-class wheelbarrow; third-class levers and a full comparison of all classes need enrichment.',
    assessmentEvidence: 'Candidate: force-motion quiz 3 checks the fulcrum and quiz 4 checks a second-class lever; the three lever classes are not all assessed.',
    teachingSceneRefs: ['gh-jhs1-science-force-motion#scene-3'], assessmentQuestionRefs: ['gh-jhs1-science-force-motion#quiz-3','gh-jhs1-science-force-motion#quiz-4']
  },
  {
    indicatorCode: 'B7.4.4.2.3', grade: 7, strand: 4, missionIds: [],
    status: 'needs-review', officialIndicatorText: 'Know work input, and output and efficiency as they apply to machines.', sourcePdfPage: 80,
    teachingSceneEvidence: 'No matching Basic 7 lesson currently defines work input, work output, machine efficiency as a percentage, or ways to improve efficiency by reducing friction.',
    assessmentEvidence: 'No current Basic 7 quiz question directly assesses work input, work output or machine efficiency.',
    teachingSceneRefs: [], assessmentQuestionRefs: []
  },
  // Basic 7 · Strand 4 — Agricultural Tools (NaCCA CCP, pp. 41–42).
  {
    indicatorCode: 'B7.4.5.1.1', grade: 7, strand: 4, missionIds: ['gh-jhs1-science-agricultural-tools'],
    status: 'needs-review', officialIndicatorText: 'Explain the basic rules in handling and maintaining simple agricultural tools.', sourcePdfPage: 81,
    teachingSceneEvidence: 'Candidate: agricultural-tools scenes 0, 2 and 3 identify common farm tools, their tasks, safe carrying and storage; routine cleaning, inspection, sharpening and maintenance procedures need more detail.',
    assessmentEvidence: 'Candidate: agricultural-tools quizzes 0, 3 and 4 assess tool selection and safety; routine maintenance rules are not directly assessed.',
    teachingSceneRefs: ['gh-jhs1-science-agricultural-tools#scene-0','gh-jhs1-science-agricultural-tools#scene-2','gh-jhs1-science-agricultural-tools#scene-3'],
    assessmentQuestionRefs: ['gh-jhs1-science-agricultural-tools#quiz-0','gh-jhs1-science-agricultural-tools#quiz-3','gh-jhs1-science-agricultural-tools#quiz-4']
  },
  {
    indicatorCode: 'B7.4.5.1.2', grade: 7, strand: 4, missionIds: ['gh-jhs1-science-agricultural-tools'],
    status: 'needs-review', officialIndicatorText: 'Apply the handling and maintenance of basic and simple agricultural tools in their community.', sourcePdfPage: 82,
    teachingSceneEvidence: 'Candidate: agricultural-tools scenes 0–3 discuss choosing, using and safely storing common tools; community observation, reporting and supervised practical maintenance activities need explicit project work.',
    assessmentEvidence: 'Candidate: agricultural-tools quizzes 0–4 check tool choice and safe practice; no community-based practical demonstration or report is assessed.',
    teachingSceneRefs: ['gh-jhs1-science-agricultural-tools#scene-0','gh-jhs1-science-agricultural-tools#scene-1','gh-jhs1-science-agricultural-tools#scene-2','gh-jhs1-science-agricultural-tools#scene-3'],
    assessmentQuestionRefs: ['gh-jhs1-science-agricultural-tools#quiz-0','gh-jhs1-science-agricultural-tools#quiz-1','gh-jhs1-science-agricultural-tools#quiz-2','gh-jhs1-science-agricultural-tools#quiz-3','gh-jhs1-science-agricultural-tools#quiz-4']
  },


  // Basic 9 · Strand 2 — Cycles (NaCCA CCP, pp. 97–100).
  {
    "indicatorCode": "B9.2.3.2.1",
    "grade": 9,
    "strand": 2,
    "missionIds": ["gh-jhs3-science-crop-maturity"],
    "status": "needs-review",
    "officialIndicatorText": "Observe and record the uses of different crops at different maturity stages.",
    "sourcePdfPage": 97,
    "teachingSceneEvidence": "Candidate: gh-jhs3-science-crop-maturity is the closest lesson for crop maturity; explicit observation records and uses of each crop stage need confirmation.",
    "assessmentEvidence": "Candidate assessment alignment is not yet verified for recording and categorising crop uses at different maturity stages.",
    "teachingSceneRefs": ["gh-jhs3-science-crop-maturity#scene-1", "gh-jhs3-science-crop-maturity#scene-2"],
    "assessmentQuestionRefs": ["gh-jhs3-science-crop-maturity#quiz-2", "gh-jhs3-science-crop-maturity#quiz-3"]
  },
  {
    "indicatorCode": "B9.2.4.2.2",
    "grade": 9,
    "strand": 2,
    "missionIds": ["gh-jhs3-science-animal-feed-selection"],
    "status": "needs-review",
    "officialIndicatorText": "Differentiate between different types of feed for different stages of domestic and commercial animals.",
    "sourcePdfPage": 100,
    "teachingSceneEvidence": "Candidate: gh-jhs3-science-animal-feed-selection introduces feed selection; comparison across young, growing and mature animals and ruminants, monogastrics and poultry needs verification.",
    "assessmentEvidence": "No question-level evidence has yet been verified for matching feed types to animal growth stages.",
    "teachingSceneRefs": ["gh-jhs3-science-animal-feed-selection#scene-2"],
    "assessmentQuestionRefs": ["gh-jhs3-science-animal-feed-selection#quiz-3"]
  },
  {
    "indicatorCode": "B9.2.4.2.3",
    "grade": 9,
    "strand": 2,
    "missionIds": ["gh-jhs3-science-animal-feed-selection"],
    "status": "needs-review",
    "officialIndicatorText": "Perform the feeding of domestic and commercial animals.",
    "sourcePdfPage": 100,
    "teachingSceneEvidence": "Candidate: gh-jhs3-science-animal-feed-selection provides a related conceptual link, but a supervised practical feeding activity at a school or community farm is not established.",
    "assessmentEvidence": "No practical demonstration or observation rubric for feeding animals at different growth and production stages is currently mapped.",
    "teachingSceneRefs": ["gh-jhs3-science-animal-feed-selection#scene-3"],
    "assessmentQuestionRefs": ["gh-jhs3-science-animal-feed-selection#quiz-4"]
  },
  // Basic 9 · Strand 4 — Forces and Energy (NaCCA CCP, pp. 107–112).
  {
    "indicatorCode": "B9.4.1.2.2",
    "grade": 9,
    "strand": 4,
    "missionIds": ["gh-jhs3-science-energy-light"],
    "status": "needs-review",
    "officialIndicatorText": "Describe how images are formed in cameras.",
    "sourcePdfPage": 108,
    "teachingSceneEvidence": "Candidate: gh-jhs3-science-energy-light is the closest light lesson; a camera model and image-formation explanation need explicit teaching.",
    "assessmentEvidence": "No camera-model or image-formation question is explicitly mapped.",
    "teachingSceneRefs": ["gh-jhs3-science-energy-light#scene-3"],
    "assessmentQuestionRefs": ["gh-jhs3-science-energy-light#quiz-3"]
  },
  {
    "indicatorCode": "B9.4.1.2.3",
    "grade": 9,
    "strand": 4,
    "missionIds": ["gh-jhs3-science-energy-light"],
    "status": "needs-review",
    "officialIndicatorText": "Describe the formation of shadows.",
    "sourcePdfPage": 108,
    "teachingSceneEvidence": "Candidate: gh-jhs3-science-energy-light is the closest light lesson; umbra, penumbra and shadow formation need explicit evidence.",
    "assessmentEvidence": "No assessment question is explicitly mapped to umbra, penumbra or shadow formation.",
    "teachingSceneRefs": ["gh-jhs3-science-energy-light#scene-3"],
    "assessmentQuestionRefs": ["gh-jhs3-science-energy-light#quiz-2"]
  },
  {
    "indicatorCode": "B9.4.4.1.2",
    "grade": 9,
    "strand": 4,
    "missionIds": ["gh-jhs3-science-force-motion-pressure"],
    "status": "needs-review",
    "officialIndicatorText": "Demonstrate the application of Newton’s Third Law of motion in life.",
    "sourcePdfPage": 112,
    "teachingSceneEvidence": "Candidate: gh-jhs3-science-force-motion-pressure is the closest force lesson; action–reaction predictions and a practical demonstration need explicit confirmation.",
    "assessmentEvidence": "No assessment question is explicitly mapped to an action–reaction prediction or practical demonstration.",
    "teachingSceneRefs": ["gh-jhs3-science-force-motion-pressure#scene-3"],
    "assessmentQuestionRefs": ["gh-jhs3-science-force-motion-pressure#quiz-4"]
  },
  {
    "indicatorCode": "B9.4.5.1.3",
    "grade": 9,
    "strand": 4,
    "missionIds": ["gh-jhs3-science-agricultural-tools"],
    "status": "needs-review",
    "officialIndicatorText": "Manufacture simple agricultural tools.",
    "sourcePdfPage": 112,
    "teachingSceneEvidence": "Candidate: gh-jhs3-science-agricultural-tools is the closest mission; an actual learner-built tool using locally available materials is not yet evidenced.",
    "assessmentEvidence": "No practical product assessment is mapped for manufacturing a simple agricultural tool.",
    "teachingSceneRefs": ["gh-jhs3-science-agricultural-tools#scene-2"],
    "assessmentQuestionRefs": ["gh-jhs3-science-agricultural-tools#quiz-2"]
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
