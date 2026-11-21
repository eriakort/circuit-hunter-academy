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
    assessmentEvidence: 'Candidate: quiz 0 tests a homogeneous salt solution, quiz 1 identifies a solute, and quiz 4 tests suspension properties. The lesson names homogeneous/heterogeneous mixtures, solutions, suspensions and colloids; full physical-characteristic coverage still needs human review.',
    teachingSceneRefs: ['gh-jhs2-science-mixture-separation#scene-0','gh-jhs2-science-mixture-separation#scene-1'],
    assessmentQuestionRefs: ['gh-jhs2-science-mixture-separation#quiz-0','gh-jhs2-science-mixture-separation#quiz-1','gh-jhs2-science-mixture-separation#quiz-4']
  },
  {
    indicatorCode: 'B8.1.1.1.2', grade: 8, strand: 1, missionIds: ['gh-jhs2-science-mixture-separation'],
    status: 'needs-review', officialIndicatorText: 'Design and perform processes for separating kinds of mixtures.', sourcePdfPage: 53,
    teachingSceneEvidence: 'Candidate: gh-jhs2-science-mixture-separation teaches selection of separation methods including filtering, sieving and distilling; verify learner-designed practical procedures and reporting.',
    assessmentEvidence: 'Candidate: quiz 2 assesses filtration and quiz 3 assesses magnetic separation. The lesson also teaches sieving, decanting, evaporation and distillation; the current quiz does not assess learner-designed practical separation or a written findings report.',
    teachingSceneRefs: ['gh-jhs2-science-mixture-separation#scene-2','gh-jhs2-science-mixture-separation#scene-3'],
    assessmentQuestionRefs: ['gh-jhs2-science-mixture-separation#quiz-2','gh-jhs2-science-mixture-separation#quiz-3']
  },
  {
    indicatorCode: 'B8.1.1.2.1', grade: 8, strand: 1, missionIds: ['gh-jhs2-science-atomic-structure'],
    status: 'needs-review', officialIndicatorText: 'Describe atoms as composed of sub-atomic particles.', sourcePdfPage: 54,
    teachingSceneEvidence: 'Candidate: gh-jhs2-science-atomic-structure covers atomic structure and sub-atomic particles; verify particle locations, charges and atom models against all exemplars.',
    assessmentEvidence: 'Candidate: quiz 0 identifies protons and neutrons in the nucleus; quiz 2 calculates neutron count from atomic and mass numbers. The quiz does not directly test electron location or charge.',
    teachingSceneRefs: ['gh-jhs2-science-atomic-structure#scene-0','gh-jhs2-science-atomic-structure#scene-2'],
    assessmentQuestionRefs: ['gh-jhs2-science-atomic-structure#quiz-0','gh-jhs2-science-atomic-structure#quiz-2']
  },
  {
    indicatorCode: 'B8.1.1.2.2', grade: 8, strand: 1, missionIds: ['gh-jhs2-science-atomic-structure'],
    status: 'needs-review', officialIndicatorText: 'Explain the arrangement of elements in terms of the number of protons in the nuclei of atoms of each element.', sourcePdfPage: 55,
    teachingSceneEvidence: 'Candidate: gh-jhs2-science-atomic-structure links atomic number and the periodic table; verify electron arrangement, ion formation and molecules as specified in the exemplars.',
    assessmentEvidence: 'Candidate: quiz 1 tests the meaning of atomic number and quiz 4 tests periodic-table ordering by atomic number. Electron arrangement, ion formation and molecules are introduced in the lesson but are not fully assessed by these questions.',
    teachingSceneRefs: ['gh-jhs2-science-atomic-structure#scene-1','gh-jhs2-science-atomic-structure#scene-3'],
    assessmentQuestionRefs: ['gh-jhs2-science-atomic-structure#quiz-1','gh-jhs2-science-atomic-structure#quiz-4']
  },
  {
    indicatorCode: 'B8.1.2.1.1', grade: 8, strand: 1, missionIds: ['gh-jhs2-science-cell-types'],
    status: 'needs-review', officialIndicatorText: 'Examine and describe the structure of prokaryotic and eukaryotic cells.', sourcePdfPage: 56,
    teachingSceneEvidence: 'Candidate: gh-jhs2-science-cell-types compares prokaryotic and eukaryotic cells; verify labelled diagrams, similarities and differences against the exemplars.',
    assessmentEvidence: 'Candidate: quiz 0 tests the membrane-bound nucleus distinction and quiz 2 tests structures shared by both cell types. The questions do not assess every structural difference or labelled cell diagrams.',
    teachingSceneRefs: ['gh-jhs2-science-cell-types#scene-1','gh-jhs2-science-cell-types#scene-2'],
    assessmentQuestionRefs: ['gh-jhs2-science-cell-types#quiz-0','gh-jhs2-science-cell-types#quiz-2']
  },
  {
    indicatorCode: 'B8.1.2.1.2', grade: 8, strand: 1, missionIds: ['gh-jhs2-science-cell-types'],
    status: 'needs-review', officialIndicatorText: 'Classify organisms (plants or animals) as prokaryotic or eukaryotic based on the type of cells they are made of.', sourcePdfPage: 56,
    teachingSceneEvidence: 'Candidate: gh-jhs2-science-cell-types introduces prokaryotic and eukaryotic organisms; verify classification examples and the exemplar discussion of impacts on human health and safety measures.',
    assessmentEvidence: 'Candidate: quiz 1 asks learners to identify a bacterium as prokaryotic, contrasting it with plant, animal and fungal examples. Broader organism classification and the curriculum health-and-safety outcomes need additional assessment.',
    teachingSceneRefs: ['gh-jhs2-science-cell-types#scene-1','gh-jhs2-science-cell-types#scene-2'],
    assessmentQuestionRefs: ['gh-jhs2-science-cell-types#quiz-1']
  },

  {
    "indicatorCode": "B8.2.1.1.1",
    "grade": 8,
    "strand": 2,
    "missionIds": [
      "gh-jhs2-science-carbon-cycle"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Carbon moves between the atmosphere, plants, animals, soil and fuels. The lesson traces photosynthesis, feeding, respiration, decomposition and burning.",
    "assessmentEvidence": "Quiz 0 tests photosynthesis, quiz 1 feeding and quiz 3 decomposition; quiz 2 separately tests respiration.",
    "teachingSceneRefs": ["gh-jhs2-science-carbon-cycle#scene-0","gh-jhs2-science-carbon-cycle#scene-1","gh-jhs2-science-carbon-cycle#scene-2"],
    "assessmentQuestionRefs": ["gh-jhs2-science-carbon-cycle#quiz-0","gh-jhs2-science-carbon-cycle#quiz-1","gh-jhs2-science-carbon-cycle#quiz-2","gh-jhs2-science-carbon-cycle#quiz-3"]
  },
  {
    "indicatorCode": "B8.2.1.1.2",
    "grade": 8,
    "strand": 2,
    "missionIds": [
      "gh-jhs2-science-carbon-cycle"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "The lesson explains how the carbon cycle supports environmental balance and how additional carbon dioxide from burning fossil fuels contributes to global warming.",
    "assessmentEvidence": "Quiz 4 assesses the importance of recycling carbon; no direct question tests climate-change mitigation.",
    "teachingSceneRefs": ["gh-jhs2-science-carbon-cycle#scene-3"],
    "assessmentQuestionRefs": ["gh-jhs2-science-carbon-cycle#quiz-4"]
  },
  {
    "indicatorCode": "B8.2.2.1.1",
    "grade": 8,
    "strand": 2,
    "missionIds": [
      "gh-jhs2-science-anopheles-life-cycle"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "The lesson describes the egg, larva, pupa and adult stages and distinguishes the feeding larva from the non-feeding pupa.",
    "assessmentEvidence": "Quiz 0 tests the life-cycle sequence and quiz 1 tests the aquatic larva.",
    "teachingSceneRefs": ["gh-jhs2-science-anopheles-life-cycle#scene-0"],
    "assessmentQuestionRefs": ["gh-jhs2-science-anopheles-life-cycle#quiz-0","gh-jhs2-science-anopheles-life-cycle#quiz-1"]
  },
  {
    "indicatorCode": "B8.2.2.1.2",
    "grade": 8,
    "strand": 2,
    "missionIds": [
      "gh-jhs2-science-anopheles-life-cycle"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "The lesson explains the infected female Anopheles mosquito as a malaria vector and gives safe bite-prevention and breeding-site control measures. It also clarifies that malaria is not spread by touching an ill person.",
    "assessmentEvidence": "Quiz 2 assesses the transmitting mosquito, quiz 3 the meaning of vector and quiz 4 prevention.",
    "teachingSceneRefs": ["gh-jhs2-science-anopheles-life-cycle#scene-1","gh-jhs2-science-anopheles-life-cycle#scene-2","gh-jhs2-science-anopheles-life-cycle#scene-3"],
    "assessmentQuestionRefs": ["gh-jhs2-science-anopheles-life-cycle#quiz-2","gh-jhs2-science-anopheles-life-cycle#quiz-3","gh-jhs2-science-anopheles-life-cycle#quiz-4"]
  },
  {
    "indicatorCode": "B8.2.3.1.1",
    "grade": 8,
    "strand": 2,
    "missionIds": [
      "gh-jhs2-science-seed-beds"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "The lesson compares flat, raised, sunken, ridge and mound seed beds and explains suitability in wet and dry conditions.",
    "assessmentEvidence": "Quiz 0 tests the definition of a seed bed, quiz 1 raised beds and quiz 2 sunken beds.",
    "teachingSceneRefs": ["gh-jhs2-science-seed-beds#scene-0","gh-jhs2-science-seed-beds#scene-1","gh-jhs2-science-seed-beds#scene-2"],
    "assessmentQuestionRefs": ["gh-jhs2-science-seed-beds#quiz-0","gh-jhs2-science-seed-beds#quiz-1","gh-jhs2-science-seed-beds#quiz-2"]
  },
  {
    "indicatorCode": "B8.2.3.2.1",
    "grade": 8,
    "strand": 2,
    "missionIds": [
      "gh-jhs2-science-seed-beds"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "The lesson describes a fair comparison of crop growth in different seed beds using plant height, size, flowers and fruits recorded over time.",
    "assessmentEvidence": "Quiz 3 tests suitable growth measurements and quiz 4 tests fair-comparison conditions; actual growing and recording remains a practical learner task.",
    "teachingSceneRefs": ["gh-jhs2-science-seed-beds#scene-3"],
    "assessmentQuestionRefs": ["gh-jhs2-science-seed-beds#quiz-3","gh-jhs2-science-seed-beds#quiz-4"]
  },
  {
    "indicatorCode": "B8.2.4.1.1",
    "grade": 8,
    "strand": 2,
    "missionIds": [
      "gh-jhs2-science-animal-feed-water"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "The lesson distinguishes roughages and concentrates, gives feed examples and explains the functions of carbohydrates, fats, proteins, minerals and vitamins.",
    "assessmentEvidence": "Quiz 0 tests roughage, quiz 1 an energy-rich concentrate and quiz 2 protein.",
    "teachingSceneRefs": ["gh-jhs2-science-animal-feed-water#scene-0","gh-jhs2-science-animal-feed-water#scene-1","gh-jhs2-science-animal-feed-water#scene-2"],
    "assessmentQuestionRefs": ["gh-jhs2-science-animal-feed-water#quiz-0","gh-jhs2-science-animal-feed-water#quiz-1","gh-jhs2-science-animal-feed-water#quiz-2"]
  },
  {
    "indicatorCode": "B8.2.4.2.1",
    "grade": 8,
    "strand": 2,
    "missionIds": [
      "gh-jhs2-science-animal-feed-water"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "The lesson explains why clean water is essential for digestion, nutrient transport and body functions, and notes effects of inadequate water or unsuitable feed.",
    "assessmentEvidence": "Quiz 3 directly tests the importance of adequate clean water; quiz 4 assesses factors that guide feed choice.",
    "teachingSceneRefs": ["gh-jhs2-science-animal-feed-water#scene-3"],
    "assessmentQuestionRefs": ["gh-jhs2-science-animal-feed-water#quiz-3","gh-jhs2-science-animal-feed-water#quiz-4"]
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
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed.",
    "teachingSceneRefs": ["gh-jhs3-science-binary-compounds#scene-0","gh-jhs3-science-binary-compounds#scene-1"],
    "assessmentQuestionRefs": ["gh-jhs3-science-binary-compounds#quiz-0","gh-jhs3-science-binary-compounds#quiz-1"]
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
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed.",
    "teachingSceneRefs": ["gh-jhs3-science-binary-compounds#scene-1","gh-jhs3-science-binary-compounds#scene-2","gh-jhs3-science-binary-compounds#scene-3"],
    "assessmentQuestionRefs": ["gh-jhs3-science-binary-compounds#quiz-2","gh-jhs3-science-binary-compounds#quiz-3","gh-jhs3-science-binary-compounds#quiz-4"]
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
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed.",
    "teachingSceneRefs": ["gh-jhs3-science-acids-bases-salts#scene-0","gh-jhs3-science-acids-bases-salts#scene-1","gh-jhs3-science-acids-bases-salts#scene-2","gh-jhs3-science-acids-bases-salts#scene-3"],
    "assessmentQuestionRefs": ["gh-jhs3-science-acids-bases-salts#quiz-0","gh-jhs3-science-acids-bases-salts#quiz-1","gh-jhs3-science-acids-bases-salts#quiz-2","gh-jhs3-science-acids-bases-salts#quiz-3","gh-jhs3-science-acids-bases-salts#quiz-4"]
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
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed.",
    "teachingSceneRefs": ["gh-jhs3-science-chemical-bonding#scene-0","gh-jhs3-science-chemical-bonding#scene-1","gh-jhs3-science-chemical-bonding#scene-2","gh-jhs3-science-chemical-bonding#scene-3"],
    "assessmentQuestionRefs": ["gh-jhs3-science-chemical-bonding#quiz-0","gh-jhs3-science-chemical-bonding#quiz-1","gh-jhs3-science-chemical-bonding#quiz-2","gh-jhs3-science-chemical-bonding#quiz-3","gh-jhs3-science-chemical-bonding#quiz-4"]
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
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed.",
    "teachingSceneRefs": ["gh-jhs3-science-specialised-plant-cells#scene-0","gh-jhs3-science-specialised-human-cells#scene-0"],
    "assessmentQuestionRefs": ["gh-jhs3-science-specialised-plant-cells#quiz-0","gh-jhs3-science-specialised-human-cells#quiz-4"]
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
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed.",
    "teachingSceneRefs": ["gh-jhs3-science-specialised-plant-cells#scene-1","gh-jhs3-science-specialised-plant-cells#scene-2","gh-jhs3-science-specialised-plant-cells#scene-3"],
    "assessmentQuestionRefs": ["gh-jhs3-science-specialised-plant-cells#quiz-1","gh-jhs3-science-specialised-plant-cells#quiz-2","gh-jhs3-science-specialised-plant-cells#quiz-3","gh-jhs3-science-specialised-plant-cells#quiz-4"]
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
    "assessmentEvidence": "Quiz questions exist in the linked mission; exact question-to-indicator alignment has not yet been reviewed.",
    "teachingSceneRefs": ["gh-jhs3-science-specialised-human-cells#scene-1","gh-jhs3-science-specialised-human-cells#scene-2","gh-jhs3-science-specialised-human-cells#scene-3"],
    "assessmentQuestionRefs": ["gh-jhs3-science-specialised-human-cells#quiz-0","gh-jhs3-science-specialised-human-cells#quiz-1","gh-jhs3-science-specialised-human-cells#quiz-2","gh-jhs3-science-specialised-human-cells#quiz-3"]
  },
  {
    "indicatorCode": "B9.2.1.1.1",
    "grade": 9,
    "strand": 2,
    "missionIds": [
      "gh-jhs3-science-nitrogen-cycle"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Nitrogen-cycle scenes 0–2 explain atmospheric nitrogen, fixation, nitrification and plant uptake; the remaining cycle stages are addressed in later scenes.",
    "assessmentEvidence": "Quiz 0–2 check why plants need fixed nitrogen, nitrogen fixation and nitrification; later-cycle processes are not all directly assessed by these items.",
    teachingSceneRefs: ['gh-jhs3-science-nitrogen-cycle#scene-0', 'gh-jhs3-science-nitrogen-cycle#scene-1', 'gh-jhs3-science-nitrogen-cycle#scene-2'],
    assessmentQuestionRefs: ['gh-jhs3-science-nitrogen-cycle#quiz-0', 'gh-jhs3-science-nitrogen-cycle#quiz-1', 'gh-jhs3-science-nitrogen-cycle#quiz-2']
  },
  {
    "indicatorCode": "B9.2.1.1.2",
    "grade": 9,
    "strand": 2,
    "missionIds": [
      "gh-jhs3-science-nitrogen-cycle"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Nitrogen-cycle scenes 2–3 explain assimilation, ammonification, denitrification and soil-fertility implications.",
    "assessmentEvidence": "Quiz 3 checks ammonification and quiz 4 checks the role of leguminous crops; denitrification and wider cycle impacts need additional direct assessment.",
    teachingSceneRefs: ['gh-jhs3-science-nitrogen-cycle#scene-2', 'gh-jhs3-science-nitrogen-cycle#scene-3'],
    assessmentQuestionRefs: ['gh-jhs3-science-nitrogen-cycle#quiz-3', 'gh-jhs3-science-nitrogen-cycle#quiz-4']
  },
  {
    "indicatorCode": "B9.2.2.1.1",
    "grade": 9,
    "strand": 2,
    "missionIds": [
      "gh-jhs3-science-grasshopper-life-cycle"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Grasshopper scenes 0–1 teach egg, nymph and adult stages, incomplete metamorphosis and moulting.",
    "assessmentEvidence": "Quizzes 0–2 assess the life-cycle sequence, absence of a pupal stage and nymph development.",
    teachingSceneRefs: ['gh-jhs3-science-grasshopper-life-cycle#scene-0', 'gh-jhs3-science-grasshopper-life-cycle#scene-1'],
    assessmentQuestionRefs: ['gh-jhs3-science-grasshopper-life-cycle#quiz-0', 'gh-jhs3-science-grasshopper-life-cycle#quiz-1', 'gh-jhs3-science-grasshopper-life-cycle#quiz-2']
  },
  {
    "indicatorCode": "B9.2.2.1.2",
    "grade": 9,
    "strand": 2,
    "missionIds": [
      "gh-jhs3-science-grasshopper-life-cycle"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Grasshopper scenes 2–3 explain ecological roles, crop damage, monitoring and integrated pest management.",
    "assessmentEvidence": "Quiz 3 checks the grasshopper's food-web role and quiz 4 assesses a safe response to unusually high populations.",
    teachingSceneRefs: ['gh-jhs3-science-grasshopper-life-cycle#scene-2', 'gh-jhs3-science-grasshopper-life-cycle#scene-3'],
    assessmentQuestionRefs: ['gh-jhs3-science-grasshopper-life-cycle#quiz-3', 'gh-jhs3-science-grasshopper-life-cycle#quiz-4']
  },
  {
    "indicatorCode": "B9.2.3.1.1",
    "grade": 9,
    "strand": 2,
    "missionIds": [
      "gh-jhs3-science-crop-maturity"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Crop-maturity scenes 0–1 explain factors affecting maturity and repeated observation and recording of crop growth.",
    "assessmentEvidence": "Quizzes 0–1 assess maturity factors and fair repeated observations across seed beds.",
    teachingSceneRefs: ['gh-jhs3-science-crop-maturity#scene-0', 'gh-jhs3-science-crop-maturity#scene-1'],
    assessmentQuestionRefs: ['gh-jhs3-science-crop-maturity#quiz-0', 'gh-jhs3-science-crop-maturity#quiz-1']
  },
  {
    "indicatorCode": "B9.2.3.2.2",
    "grade": 9,
    "strand": 2,
    "missionIds": [
      "gh-jhs3-science-crop-maturity"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Crop-maturity scenes 2–3 explain how maturity stages guide harvest timing, crop choice, market supply and loss reduction.",
    "assessmentEvidence": "Quizzes 2–4 assess harvesting for intended use, allowing grain to dry and using maturity knowledge to plan harvests.",
    teachingSceneRefs: ['gh-jhs3-science-crop-maturity#scene-2', 'gh-jhs3-science-crop-maturity#scene-3'],
    assessmentQuestionRefs: ['gh-jhs3-science-crop-maturity#quiz-2', 'gh-jhs3-science-crop-maturity#quiz-3', 'gh-jhs3-science-crop-maturity#quiz-4']
  },
  {
    "indicatorCode": "B9.2.4.1.1",
    "grade": 9,
    "strand": 2,
    "missionIds": [
      "gh-jhs3-science-animal-feed-preparation"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Feed-preparation scenes 0–3 cover animal nutrient needs, ingredient groups, measuring, preparation, mixing, safe storage and expert guidance.",
    "assessmentEvidence": "Feed-preparation quizzes 0–4 assess species-specific needs, protein ingredients, preparation sequence, rejection of mouldy feed and reliable formulation guidance.",
    teachingSceneRefs: ['gh-jhs3-science-animal-feed-preparation#scene-0', 'gh-jhs3-science-animal-feed-preparation#scene-1', 'gh-jhs3-science-animal-feed-preparation#scene-2', 'gh-jhs3-science-animal-feed-preparation#scene-3'],
    assessmentQuestionRefs: ['gh-jhs3-science-animal-feed-preparation#quiz-0', 'gh-jhs3-science-animal-feed-preparation#quiz-1', 'gh-jhs3-science-animal-feed-preparation#quiz-2', 'gh-jhs3-science-animal-feed-preparation#quiz-3', 'gh-jhs3-science-animal-feed-preparation#quiz-4']
  },
  {
    "indicatorCode": "B9.2.4.2.1",
    "grade": 9,
    "strand": 2,
    "missionIds": [
      "gh-jhs3-science-animal-feed-selection"
    ],
    "status": "needs-review",
    "teachingSceneEvidence": "Feed-selection scenes 0–1 distinguish roughage and concentrates and compare digestive needs across ruminants, poultry, pigs and fish.",
    "assessmentEvidence": "Quizzes 0–2 assess roughage, its role in ruminants and the need for balanced concentrate-based poultry diets.",
    teachingSceneRefs: ['gh-jhs3-science-animal-feed-selection#scene-0', 'gh-jhs3-science-animal-feed-selection#scene-1'],
    assessmentQuestionRefs: ['gh-jhs3-science-animal-feed-selection#quiz-0', 'gh-jhs3-science-animal-feed-selection#quiz-1', 'gh-jhs3-science-animal-feed-selection#quiz-2']
  },
  {
    "indicatorCode": "B9.3.1.1.1",
    "grade": 9,
    "strand": 3,
    "missionIds": [
      "gh-jhs3-science-circulation-respiration"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Explain the concept of the circulatory system, state the function of each part of the system and the health challenges associated with it.",
    "sourcePdfPage": 139,
    "teachingSceneEvidence": "Circulation scenes 0–2 explain the heart, blood, blood vessels, blood components and the route of blood through the lungs and body. The curriculum's heart labelling, circulatory diseases and blood-pressure prevention/management exemplars need additional explicit lesson and assessment evidence.",
    "assessmentEvidence": "Quizzes 0–2 check the main system components, oxygen transport by red blood cells and capillary exchange. They do not directly assess heart labelling, circulatory disease causes/prevention or blood-pressure management.",
    "teachingSceneRefs": ["gh-jhs3-science-circulation-respiration#scene-0","gh-jhs3-science-circulation-respiration#scene-1","gh-jhs3-science-circulation-respiration#scene-2"],
    "assessmentQuestionRefs": ["gh-jhs3-science-circulation-respiration#quiz-0","gh-jhs3-science-circulation-respiration#quiz-1","gh-jhs3-science-circulation-respiration#quiz-2"]
  },
  {
    "indicatorCode": "B9.3.1.1.2",
    "grade": 9,
    "strand": 3,
    "missionIds": [
      "gh-jhs3-science-circulation-respiration"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Explain the concept of respiration and show how the respiratory and circulatory systems complement each other.",
    "sourcePdfPage": 139,
    "teachingSceneEvidence": "Circulation and respiration scene 3 distinguishes cellular respiration from breathing and traces oxygen from the lungs into blood and carbon dioxide back to the lungs.",
    "assessmentEvidence": "Quizzes 3–4 assess oxygen uptake at the alveoli and the chemical process of cellular respiration; the link between blood transport and cellular respiration is taught in the scene but is not fully tested by a single integrated question.",
    "teachingSceneRefs": ["gh-jhs3-science-circulation-respiration#scene-3"],
    "assessmentQuestionRefs": ["gh-jhs3-science-circulation-respiration#quiz-3","gh-jhs3-science-circulation-respiration#quiz-4"]
  },
  {
    "indicatorCode": "B9.3.2.1.1",
    "grade": 9,
    "strand": 3,
    "missionIds": [
      "gh-jhs3-science-asteroids-comets"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Understand the movement of non-planetary bodies in the solar system.",
    "sourcePdfPage": 140,
    "teachingSceneEvidence": "Asteroids and comets scenes 2–3 compare their orbital paths, explain gravity and describe how observations are used to track and predict their movement. Scenes 0–1 provide the composition context.",
    "assessmentEvidence": "Quiz 8 checks that gravity keeps asteroids and comets in orbit around the Sun. A direct comparison of their different orbital movements is not yet assessed.",
    "teachingSceneRefs": ["gh-jhs3-science-asteroids-comets#scene-2","gh-jhs3-science-asteroids-comets#scene-3"],
    "assessmentQuestionRefs": ["gh-jhs3-science-asteroids-comets#quiz-8"]
  },
  {
    "indicatorCode": "B9.3.3.1.1",
    "grade": 9,
    "strand": 3,
    "missionIds": [
      "gh-jhs3-science-ecosystem-balance"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Conduct research into the composition of an ecosystem and discuss how the components depend on each other for survival.",
    "sourcePdfPage": 141,
    "teachingSceneEvidence": "Ecosystem scenes 0–3 cover biotic and abiotic components, habitat versus ecosystem, producers, consumers and decomposers, food chains and webs, and how natural or human disturbances affect ecosystem balance. Learner-led research across different ecosystems still needs a documented project.",
    "assessmentEvidence": "Quizzes 0–4 assess ecosystem versus habitat, producers, energy-flow arrows, decomposers and the effect of galamsey. A learner research report and justified predictions for the full range of listed disturbances are not directly assessed.",
    "teachingSceneRefs": ["gh-jhs3-science-ecosystem-balance#scene-0","gh-jhs3-science-ecosystem-balance#scene-1","gh-jhs3-science-ecosystem-balance#scene-2","gh-jhs3-science-ecosystem-balance#scene-3"],
    "assessmentQuestionRefs": ["gh-jhs3-science-ecosystem-balance#quiz-0","gh-jhs3-science-ecosystem-balance#quiz-1","gh-jhs3-science-ecosystem-balance#quiz-2","gh-jhs3-science-ecosystem-balance#quiz-3","gh-jhs3-science-ecosystem-balance#quiz-4"]
  },
  {
    "indicatorCode": "B9.3.4.1.1",
    "grade": 9,
    "strand": 3,
    "missionIds": [
      "gh-jhs3-science-manure-materials"
    ],
    "status": "needs-review",
    "officialIndicatorText": "List and explain the different plant and animal waste used in preparing different types of manure.",
    "sourcePdfPage": 142,
    "teachingSceneEvidence": "Manure-materials scenes 0–3 explain suitable animal wastes and plant residues, their nutrient and soil-structure contributions, material selection and safe handling. Some hazardous wastes are explicitly excluded from ordinary school compost.",
    "assessmentEvidence": "Quizzes 0–4 assess examples of animal and plant waste, removal of contaminants, the role of dry plant matter and safe treatment of hazardous waste. Comparing manure choices for different soil and climate conditions needs further assessment.",
    "teachingSceneRefs": ["gh-jhs3-science-manure-materials#scene-0","gh-jhs3-science-manure-materials#scene-1","gh-jhs3-science-manure-materials#scene-2","gh-jhs3-science-manure-materials#scene-3"],
    "assessmentQuestionRefs": ["gh-jhs3-science-manure-materials#quiz-0","gh-jhs3-science-manure-materials#quiz-1","gh-jhs3-science-manure-materials#quiz-2","gh-jhs3-science-manure-materials#quiz-3","gh-jhs3-science-manure-materials#quiz-4"]
  },
  {
    "indicatorCode": "B9.3.4.1.2",
    "grade": 9,
    "strand": 3,
    "missionIds": [
      "gh-jhs3-science-manure-composting"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Demonstrate the preparation of different types of manure.",
    "sourcePdfPage": 143,
    "teachingSceneEvidence": "Manure-composting scenes 0–3 explain sorting suitable wastes, layering green and brown materials, maintaining moisture and aeration, turning the heap and curing compost to maturity.",
    "assessmentEvidence": "Quizzes 0–4 assess preparation choices, safe handling, layering, moisture, aeration and maturity. These questions support procedural understanding but do not replace a teacher-observed practical demonstration.",
    "teachingSceneRefs": ["gh-jhs3-science-manure-composting#scene-0","gh-jhs3-science-manure-composting#scene-1","gh-jhs3-science-manure-composting#scene-2","gh-jhs3-science-manure-composting#scene-3"],
    "assessmentQuestionRefs": ["gh-jhs3-science-manure-composting#quiz-0","gh-jhs3-science-manure-composting#quiz-1","gh-jhs3-science-manure-composting#quiz-2","gh-jhs3-science-manure-composting#quiz-3","gh-jhs3-science-manure-composting#quiz-4"]
  },
  {
    "indicatorCode": "B9.3.4.1.3",
    "grade": 9,
    "strand": 3,
    "missionIds": [
      "gh-jhs3-science-manure-composting"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Prepare different types of manure.",
    "sourcePdfPage": 143,
    "teachingSceneEvidence": "Manure-composting scenes 0–3 describe practical treatment steps: select and sort suitable waste, build a layered heap, manage moisture and air, turn the heap and allow the compost to mature. Actual learner preparation must be observed in a field or school garden.",
    "assessmentEvidence": "Quizzes 0–4 assess safe material selection and the steps and conditions needed for composting. They do not certify that a learner has prepared manure; a teacher-observed practical product and process are required.",
    "teachingSceneRefs": ["gh-jhs3-science-manure-composting#scene-0","gh-jhs3-science-manure-composting#scene-1","gh-jhs3-science-manure-composting#scene-2","gh-jhs3-science-manure-composting#scene-3"],
    "assessmentQuestionRefs": ["gh-jhs3-science-manure-composting#quiz-0","gh-jhs3-science-manure-composting#quiz-1","gh-jhs3-science-manure-composting#quiz-2","gh-jhs3-science-manure-composting#quiz-3","gh-jhs3-science-manure-composting#quiz-4"]
  },
  {
    "indicatorCode": "B9.4.1.1.1",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-energy-light"
    ],
    "status": "needs-review",
    "officialIndicatorText": "List the ways to conserve energy.",
    "sourcePdfPage": 107,
    "teachingSceneEvidence": "Scene 1 explains switching off unused appliances, using efficient appliances and ironing in batches; the quiz checks only switching off.",
    "assessmentEvidence": "Quiz 0 checks switching off unused appliances. Efficient-appliance choices and ironing in bulk are not directly assessed.",
    "teachingSceneRefs": [
      "gh-jhs3-science-energy-light#scene-1"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs3-science-energy-light#quiz-0"
    ]
  },
  {
    "indicatorCode": "B9.4.1.1.2",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-energy-light"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Explain the importance of energy conservation in daily life.",
    "sourcePdfPage": 107,
    "teachingSceneEvidence": "Scene 1 explains that reducing electricity use can lower bills and reduce demand on power stations and the environment.",
    "assessmentEvidence": "No quiz question directly assesses the wider importance of conservation or the curriculum's research-and-discussion exemplar.",
    "teachingSceneRefs": [
      "gh-jhs3-science-energy-light#scene-1"
    ],
    "assessmentQuestionRefs": []
  },
  {
    "indicatorCode": "B9.4.1.2.1",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-energy-light"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Explain how to calculate energy consumed over a period of time.",
    "sourcePdfPage": 107,
    "teachingSceneEvidence": "Scene 2 defines electrical power with P = IV and calculates energy use in kWh from power and time.",
    "assessmentEvidence": "Quiz 1 calculates kWh from appliance power and time; measured current and voltage are not used in an assessment calculation.",
    "teachingSceneRefs": [
      "gh-jhs3-science-energy-light#scene-2"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs3-science-energy-light#quiz-1"
    ]
  },
  {
    "indicatorCode": "B9.4.1.2.4",
    "grade": 9,
    "strand": 4,
    "missionIds": [],
    "status": "needs-review",
    "officialIndicatorText": "Demonstrate the formation of an eclipse.",
    "sourcePdfPage": 108,
    "teachingSceneEvidence": "No matching Basic 9 lesson explicitly models solar or lunar eclipse formation; the light scene covers cameras, shadows and refraction but not Sun-Earth-Moon alignment.",
    "assessmentEvidence": "No eclipse-model or eclipse-formation question is present.",
    "teachingSceneRefs": [],
    "assessmentQuestionRefs": []
  },
  {
    "indicatorCode": "B9.4.1.3.1",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-energy-light"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Demonstrate that light changes path when it travels from one medium to a different medium.",
    "sourcePdfPage": 108,
    "teachingSceneEvidence": "Scene 3 explains refraction as a change in light direction when it enters another medium and gives the bent-straw-in-water example.",
    "assessmentEvidence": "Quiz 4 defines refraction and checks why light bends when entering a different medium; a practical observation remains to be performed.",
    "teachingSceneRefs": [
      "gh-jhs3-science-energy-light#scene-3"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs3-science-energy-light#quiz-4"
    ]
  },
  {
    "indicatorCode": "B9.4.2.1.1",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-electricity-electronics"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Demonstrate transformation of electrical energy to other forms of energy in both series and parallel circuits and perform simple calculations involving the flow of current in circuits.",
    "sourcePdfPage": 109,
    "teachingSceneEvidence": "Scenes 0–1 introduce complete circuits and compare series and parallel paths; scene 3 traces electrical energy into light, movement, sound and heat. Scene 2 teaches V = IR and current calculation.",
    "assessmentEvidence": "Quizzes 0–1 assess series/parallel behaviour and quiz 2 calculates current from voltage and resistance. Physical construction and meter measurements are not verified.",
    "teachingSceneRefs": [
      "gh-jhs3-science-electricity-electronics#scene-0",
      "gh-jhs3-science-electricity-electronics#scene-1",
      "gh-jhs3-science-electricity-electronics#scene-2",
      "gh-jhs3-science-electricity-electronics#scene-3"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs3-science-electricity-electronics#quiz-0",
      "gh-jhs3-science-electricity-electronics#quiz-1",
      "gh-jhs3-science-electricity-electronics#quiz-2"
    ]
  },
  {
    "indicatorCode": "B9.4.2.2.1",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-electricity-electronics"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Describe forward bias and reverse bias and explain the relationship among LEDs, diodes, resistors and capacitors in an electronic circuit.",
    "sourcePdfPage": 109,
    "teachingSceneEvidence": "Scene 2 explains diode direction, LED forward bias, resistor current limitation and capacitor charge storage. Reverse bias is not explicitly explained; comparative circuit observations require practical work.",
    "assessmentEvidence": "Quiz 3 checks one-way diode behaviour and quiz 4 checks capacitor charge storage; neither directly tests forward versus reverse bias or all four component relationships.",
    "teachingSceneRefs": [
      "gh-jhs3-science-electricity-electronics#scene-2"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs3-science-electricity-electronics#quiz-3",
      "gh-jhs3-science-electricity-electronics#quiz-4"
    ]
  },
  {
    "indicatorCode": "B9.4.3.1.1",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-energy-conversion"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Describe how energy can be converted from one form to another and show how conservation of energy occurs.",
    "sourcePdfPage": 110,
    "teachingSceneEvidence": "Scenes 0–1 distinguish energy conversion from conservation; scenes 2–3 trace transfers in fans, solar panels, hydroelectric systems and useful versus dissipated outputs.",
    "assessmentEvidence": "Quizzes 0–1 assess conversion and conservation, quiz 2 checks a solar-panel example, and quizzes 3–4 assess efficiency and thermal transfers.",
    "teachingSceneRefs": [
      "gh-jhs3-science-energy-conversion#scene-0",
      "gh-jhs3-science-energy-conversion#scene-1",
      "gh-jhs3-science-energy-conversion#scene-2",
      "gh-jhs3-science-energy-conversion#scene-3"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs3-science-energy-conversion#quiz-0",
      "gh-jhs3-science-energy-conversion#quiz-1",
      "gh-jhs3-science-energy-conversion#quiz-2",
      "gh-jhs3-science-energy-conversion#quiz-3",
      "gh-jhs3-science-energy-conversion#quiz-4"
    ]
  },
  {
    "indicatorCode": "B9.4.3.1.2",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-energy-conversion"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Describe how conversion and conservation of energy are applied in life.",
    "sourcePdfPage": 110,
    "teachingSceneEvidence": "Scenes 2–3 apply conversion and conservation to fans, solar panels, hydroelectric generation, device efficiency and reducing unwanted transfers.",
    "assessmentEvidence": "Quizzes 2–4 assess real-life transfers, efficiency and why machines become warm. The learner-produced report on local conservation opportunities is not assessed.",
    "teachingSceneRefs": [
      "gh-jhs3-science-energy-conversion#scene-2",
      "gh-jhs3-science-energy-conversion#scene-3"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs3-science-energy-conversion#quiz-2",
      "gh-jhs3-science-energy-conversion#quiz-3",
      "gh-jhs3-science-energy-conversion#quiz-4"
    ]
  },
  {
    "indicatorCode": "B9.4.4.1.1",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-force-motion-pressure"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Explain the concept of pressure and show how pressure relates to force; perform activities that work on the principle of pressure in the daily lives of humans.",
    "sourcePdfPage": 111,
    "teachingSceneEvidence": "Scenes 0–1 introduce force and pressure as force per unit area, with everyday examples such as sharp blades and wide tyres. The curriculum's straw, tyre, balloon and water-jet demonstrations are not explicit.",
    "assessmentEvidence": "Quizzes 0–1 assess pressure calculation and contact area. Practical demonstrations and the full range of everyday applications need teacher observation.",
    "teachingSceneRefs": [
      "gh-jhs3-science-force-motion-pressure#scene-0",
      "gh-jhs3-science-force-motion-pressure#scene-1"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs3-science-force-motion-pressure#quiz-0",
      "gh-jhs3-science-force-motion-pressure#quiz-1"
    ]
  },
  {
    "indicatorCode": "B9.4.4.2.1",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-force-motion-pressure"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Explain Newton’s Laws of Motion and their applications to daily life.",
    "sourcePdfPage": 112,
    "teachingSceneEvidence": "Scenes 0, 2 and 3 cover resultant forces and Newton's First, Second and Third Laws; F = ma is taught. Momentum, required by the curriculum exemplar, is not explicitly taught.",
    "assessmentEvidence": "Quizzes 2–4 assess F = ma, inertia/First Law and a Third Law application. Momentum and broader applications of all three laws need direct assessment.",
    "teachingSceneRefs": [
      "gh-jhs3-science-force-motion-pressure#scene-0",
      "gh-jhs3-science-force-motion-pressure#scene-2",
      "gh-jhs3-science-force-motion-pressure#scene-3"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs3-science-force-motion-pressure#quiz-2",
      "gh-jhs3-science-force-motion-pressure#quiz-3",
      "gh-jhs3-science-force-motion-pressure#quiz-4"
    ]
  },
  {
    "indicatorCode": "B9.4.5.1.1",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-agricultural-tools"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Identify materials used in making simple agricultural tools.",
    "sourcePdfPage": 113,
    "teachingSceneEvidence": "Scenes 0–1 identify common farm tools and describe material choices for handles, working parts and joints, including strength, durability, availability and safe handling.",
    "assessmentEvidence": "Quizzes 0–1 identify a hoe and check suitable handle-material properties; connected materials across a range of tools are not assessed.",
    "teachingSceneRefs": [
      "gh-jhs3-science-agricultural-tools#scene-0",
      "gh-jhs3-science-agricultural-tools#scene-1"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs3-science-agricultural-tools#quiz-0",
      "gh-jhs3-science-agricultural-tools#quiz-1"
    ]
  },
  {
    "indicatorCode": "B9.4.5.1.2",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-agricultural-tools"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Discuss and write activities involved in making simple agricultural tools.",
    "sourcePdfPage": 113,
    "teachingSceneEvidence": "Scenes 2–3 describe the making sequence, material selection, measuring, shaping, joining, inspection, prototype testing and workshop precautions.",
    "assessmentEvidence": "Quizzes 2–4 assess prototype testing, safe cutting and damaged-tool handling. A written process description covering constraints and precautions is not directly assessed.",
    "teachingSceneRefs": [
      "gh-jhs3-science-agricultural-tools#scene-2",
      "gh-jhs3-science-agricultural-tools#scene-3"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs3-science-agricultural-tools#quiz-2",
      "gh-jhs3-science-agricultural-tools#quiz-3",
      "gh-jhs3-science-agricultural-tools#quiz-4"
    ]
  },
  {
    "indicatorCode": "B9.5.1.1.1",
    "grade": 9,
    "strand": 5,
    "missionIds": [
      "gh-jhs3-science-waste-management"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Investigate the scientific methods used in waste management.",
    "sourcePdfPage": 114,
    "teachingSceneEvidence": "Scenes 1–3 explain recycling and composting, separate hazardous waste, describe a school waste audit and compare management options. The curriculum exemplar requires learners to conduct an actual school audit and assess each method; the platform does not capture that field investigation.",
    "assessmentEvidence": "Quizzes 0–4 check composting, audit evidence, hazardous batteries, waste prevention and evaluation criteria. They do not assess a completed school audit or the scientific principles of every method.",
    "teachingSceneRefs": [
      "gh-jhs3-science-waste-management#scene-1",
      "gh-jhs3-science-waste-management#scene-2",
      "gh-jhs3-science-waste-management#scene-3"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs3-science-waste-management#quiz-0",
      "gh-jhs3-science-waste-management#quiz-1",
      "gh-jhs3-science-waste-management#quiz-2",
      "gh-jhs3-science-waste-management#quiz-3",
      "gh-jhs3-science-waste-management#quiz-4"
    ]
  },
  {
    "indicatorCode": "B9.5.1.2.1",
    "grade": 9,
    "strand": 5,
    "missionIds": [
      "gh-jhs3-science-waste-management"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Describe innovative ways of waste management for sustainable development.",
    "sourcePdfPage": 114,
    "teachingSceneEvidence": "Scenes 0–3 explain environmental impacts, source separation, recycling, composting, safe hazardous-waste routes and criteria for comparing sustainable community options. The mission does not document a full local Ghana-community waste survey or critique of named local practices.",
    "assessmentEvidence": "Quizzes 0, 2, 3 and 4 assess composting, hazardous waste, waste prevention and comparison criteria. They do not require learners to describe local waste types or critique actual Ghanaian community practices.",
    "teachingSceneRefs": [
      "gh-jhs3-science-waste-management#scene-0",
      "gh-jhs3-science-waste-management#scene-1",
      "gh-jhs3-science-waste-management#scene-2",
      "gh-jhs3-science-waste-management#scene-3"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs3-science-waste-management#quiz-0",
      "gh-jhs3-science-waste-management#quiz-2",
      "gh-jhs3-science-waste-management#quiz-3",
      "gh-jhs3-science-waste-management#quiz-4"
    ]
  },
  {
    "indicatorCode": "B9.5.2.1.1",
    "grade": 9,
    "strand": 5,
    "missionIds": [
      "gh-jhs3-science-human-health"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Explain the symptoms, effects and prevention of some non-communicable diseases and analyse the risk factors associated with them.",
    "sourcePdfPage": 115,
    "teachingSceneEvidence": "Scenes 1–2 explain NCD risk factors and prevention, including diet, inactivity, tobacco, harmful drugs and workplace exposure. Specific NCD symptoms, effects, named cancers and links between particular cancers and lifestyle are not taught explicitly.",
    "assessmentEvidence": "Quizzes 0–1 assess the meaning of non-communicable disease and selected risk-reduction behaviours. They do not assess disease-specific symptoms, effects, cancer types or the full prevention exemplars.",
    "teachingSceneRefs": [
      "gh-jhs3-science-human-health#scene-1",
      "gh-jhs3-science-human-health#scene-2"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs3-science-human-health#quiz-0",
      "gh-jhs3-science-human-health#quiz-1"
    ]
  },
  {
    "indicatorCode": "B9.5.2.2.1",
    "grade": 9,
    "strand": 5,
    "missionIds": [
      "gh-jhs3-science-human-health"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Explain the concepts of health and disease and show their relationship.",
    "sourcePdfPage": 116,
    "teachingSceneEvidence": "Scene 0 defines health as physical, mental and social well-being, defines disease as disruption of normal body function and explains how disease affects health. The WHO definition is not quoted or explicitly attributed.",
    "assessmentEvidence": "Quiz 2 checks the relationship between health, disease and interacting influences. It does not require learners to reproduce or apply the WHO definition.",
    "teachingSceneRefs": [
      "gh-jhs3-science-human-health#scene-0"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs3-science-human-health#quiz-2"
    ]
  },
  {
    "indicatorCode": "B9.5.2.2.2",
    "grade": 9,
    "strand": 5,
    "missionIds": [
      "gh-jhs3-science-human-health"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Explain the concept of common diseases in an environment.",
    "sourcePdfPage": 116,
    "teachingSceneEvidence": "Scene 3 introduces fungal diseases including ringworm, candidiasis and nail infections, with transmission and prevention. It does not guide a community survey or establish which diseases are common in a particular locality. NaCCA separately repeats code B9.5.2.2.1 on p. 117 for a fungal-disease outcome, creating a source-code ambiguity around this material.",
    "assessmentEvidence": "Quiz 3 assesses ringworm prevention and quiz 4 directs learners with persistent symptoms to qualified healthcare. No question assesses a community disease survey or its findings.",
    "teachingSceneRefs": [
      "gh-jhs3-science-human-health#scene-3"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs3-science-human-health#quiz-3",
      "gh-jhs3-science-human-health#quiz-4"
    ]
  },
  {
    "indicatorCode": "B9.5.3.1.1",
    "grade": 9,
    "strand": 5,
    "missionIds": [
      "gh-jhs3-science-industry"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Investigate the scientific concepts, principles and processes involved in industries in their environment.",
    "sourcePdfPage": 118,
    "teachingSceneEvidence": "Scenes 1–2 connect familiar industries and everyday products to processes such as heating, cooling, drying, fermentation, separation, chemical reactions and mineral processing. The mission describes examples but does not provide a learner-led investigation of a selected local production process.",
    "assessmentEvidence": "Quiz 1 checks drying as a food-preservation process and quiz 4 checks the purpose of production quality checks. Neither assesses a learner investigation that identifies products, traces production stages and explains the underlying science.",
    "teachingSceneRefs": [
      "gh-jhs3-science-industry#scene-1",
      "gh-jhs3-science-industry#scene-2"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs3-science-industry#quiz-1",
      "gh-jhs3-science-industry#quiz-4"
    ]
  },
  {
    "indicatorCode": "B9.5.3.2.1",
    "grade": 9,
    "strand": 5,
    "missionIds": [
      "gh-jhs3-science-industry"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Explain the concept of industry and distinguish between modern and indigenous industries.",
    "sourcePdfPage": 118,
    "teachingSceneEvidence": "Scenes 0, 2 and 3 define industry, give Ghanaian indigenous-industry examples and compare locally developed methods with modern machinery, measurement and automation.",
    "assessmentEvidence": "Quizzes 0, 2 and 3 assess the definition of industry, a traditional weaving example and criteria for comparing indigenous and modern production.",
    "teachingSceneRefs": [
      "gh-jhs3-science-industry#scene-0",
      "gh-jhs3-science-industry#scene-2",
      "gh-jhs3-science-industry#scene-3"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs3-science-industry#quiz-0",
      "gh-jhs3-science-industry#quiz-2",
      "gh-jhs3-science-industry#quiz-3"
    ]
  },
  {
    "indicatorCode": "B9.5.3.2.2",
    "grade": 9,
    "strand": 5,
    "missionIds": [
      "gh-jhs3-science-industry"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Examine indigenous industries in their communities and show the scientific processes in the stages of production.",
    "sourcePdfPage": 119,
    "teachingSceneEvidence": "Scene 2 names indigenous industries such as pottery, weaving, shea butter processing and food fermentation; scene 3 discusses the science, resources and effects of production. Specific stage-by-stage scientific analysis of a community industry and indigenous practices at home or school are not modelled.",
    "assessmentEvidence": "Quiz 2 identifies traditional weaving as an indigenous industry and quiz 3 compares production methods. No question traces scientific processes through the stages of a named indigenous product.",
    "teachingSceneRefs": [
      "gh-jhs3-science-industry#scene-2",
      "gh-jhs3-science-industry#scene-3"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs3-science-industry#quiz-2",
      "gh-jhs3-science-industry#quiz-3"
    ]
  },
  {
    "indicatorCode": "B9.5.4.1.1",
    "grade": 9,
    "strand": 5,
    "missionIds": [
      "gh-jhs3-science-climate-green-economy"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Examine various natural and human factors that influence climate change and green economy in their localities.",
    "sourcePdfPage": 120,
    "teachingSceneEvidence": "Scenes 1–3 distinguish natural influences such as volcanic eruptions and solar/orbital variation from human greenhouse-gas sources, then introduce local mitigation actions and green-economy ideas. Local factor comparison is explained but not investigated with locality-specific evidence.",
    "assessmentEvidence": "Quiz 1 checks fossil-fuel combustion as a human influence and quiz 2 checks volcanic eruptions as a natural influence. No question asks learners to compare local factors or explain a local green-economy response.",
    "teachingSceneRefs": [
      "gh-jhs3-science-climate-green-economy#scene-1",
      "gh-jhs3-science-climate-green-economy#scene-2",
      "gh-jhs3-science-climate-green-economy#scene-3"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs3-science-climate-green-economy#quiz-1",
      "gh-jhs3-science-climate-green-economy#quiz-2"
    ]
  },
  {
    "indicatorCode": "B9.5.4.2.1",
    "grade": 9,
    "strand": 5,
    "missionIds": [
      "gh-jhs3-science-climate-green-economy"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Assess data on climate change and green economy actions/ activities globally including Ghana and other countries.",
    "sourcePdfPage": 120,
    "teachingSceneEvidence": "Scene 3 recommends comparing Ghanaian and international initiatives using emissions, cost, benefits, reliability, fairness and measured outcomes. No actual climate-action dataset, country comparison or worked data analysis is supplied.",
    "assessmentEvidence": "Quiz 4 checks general evidence-based assessment criteria but contains no data table or Ghana-versus-other-country comparison. The curriculum research, comparison and justified best-practice recommendation remain learner project work.",
    "teachingSceneRefs": [
      "gh-jhs3-science-climate-green-economy#scene-3"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs3-science-climate-green-economy#quiz-4"
    ]
  },
  {
    "indicatorCode": "B9.5.5.1.1",
    "grade": 9,
    "strand": 5,
    "missionIds": [
      "gh-jhs3-science-plant-resources"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Show and list the uses of different plant parts for agricultural and non-agricultural purposes.",
    "sourcePdfPage": 122,
    "teachingSceneEvidence": "Scenes 0–3 describe agricultural and non-agricultural uses of roots, stems, leaves, flowers and fruits, including feed, soil improvement, timber, fibres, wrapping and crafts. The mission also cautions against assuming plant remedies are automatically safe.",
    "assessmentEvidence": "Quiz 1 checks agricultural uses of plant materials and quiz 2 checks timber as a non-agricultural use. These questions sample rather than exhaust the uses of all five plant parts.",
    "teachingSceneRefs": [
      "gh-jhs3-science-plant-resources#scene-0",
      "gh-jhs3-science-plant-resources#scene-1",
      "gh-jhs3-science-plant-resources#scene-2",
      "gh-jhs3-science-plant-resources#scene-3"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs3-science-plant-resources#quiz-1",
      "gh-jhs3-science-plant-resources#quiz-2"
    ]
  },
  {
    "indicatorCode": "B9.5.5.1.2",
    "grade": 9,
    "strand": 5,
    "missionIds": [
      "gh-jhs3-science-plant-resources"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Demonstrate the use of different plant parts for agricultural and non-agricultural purposes.",
    "sourcePdfPage": 123,
    "teachingSceneEvidence": "Scene 3 proposes creating a simple useful item from safely collected plant material, but it does not show a completed learner-made agricultural material and non-agricultural product.",
    "assessmentEvidence": "No quiz question assesses the creation of materials from plant parts. A teacher-observed practical task with learner-produced agricultural and non-agricultural artefacts is required.",
    "teachingSceneRefs": [
      "gh-jhs3-science-plant-resources#scene-3"
    ],
    "assessmentQuestionRefs": []
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
    "teachingSceneEvidence": "Crop-maturity scenes 1–2 connect recorded maturity stages with harvesting crops for different intended uses.",
    "assessmentEvidence": "Quizzes 1–3 assess observation records and the difference between green maize and mature dry grain.",
    teachingSceneRefs: ['gh-jhs3-science-crop-maturity#scene-1', 'gh-jhs3-science-crop-maturity#scene-2'],
    assessmentQuestionRefs: ['gh-jhs3-science-crop-maturity#quiz-1', 'gh-jhs3-science-crop-maturity#quiz-2', 'gh-jhs3-science-crop-maturity#quiz-3']
  },
  {
    "indicatorCode": "B9.2.4.2.2",
    "grade": 9,
    "strand": 2,
    "missionIds": ["gh-jhs3-science-animal-feed-selection"],
    "status": "needs-review",
    "officialIndicatorText": "Differentiate between different types of feed for different stages of domestic and commercial animals.",
    "sourcePdfPage": 100,
    "teachingSceneEvidence": "Feed-selection scenes 2–3 explain how feed choices vary with age, growth and production stage, and how to select safe suitable rations.",
    "assessmentEvidence": "Quiz 3 assesses feed choice for a laying hen; quiz 4 assesses supervised practical feeding, water, hygiene and recording.",
    teachingSceneRefs: ['gh-jhs3-science-animal-feed-selection#scene-2', 'gh-jhs3-science-animal-feed-selection#scene-3'],
    assessmentQuestionRefs: ['gh-jhs3-science-animal-feed-selection#quiz-3', 'gh-jhs3-science-animal-feed-selection#quiz-4']
  },
  {
    "indicatorCode": "B9.2.4.2.3",
    "grade": 9,
    "strand": 2,
    "missionIds": ["gh-jhs3-science-animal-feed-selection"],
    "status": "needs-review",
    "officialIndicatorText": "Perform the feeding of domestic and commercial animals.",
    "sourcePdfPage": 100,
    "teachingSceneEvidence": "Feed-selection scene 3 includes a supervised practical feeding activity: identify the animal and stage, inspect and measure a suitable ration, provide water and record observations.",
    "assessmentEvidence": "Quiz 4 assesses safe practical feeding steps and observation recording; actual learner performance still requires a teacher-observed practical.",
    teachingSceneRefs: ['gh-jhs3-science-animal-feed-selection#scene-3'],
    assessmentQuestionRefs: ['gh-jhs3-science-animal-feed-selection#quiz-4']
  },
  // Basic 9 · Strand 4 — Forces and Energy (NaCCA CCP, pp. 107–112).
  {
    "indicatorCode": "B9.4.1.2.2",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-energy-light"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Describe how images are formed in cameras.",
    "sourcePdfPage": 108,
    "teachingSceneEvidence": "Scene 3 explains pinhole-camera image formation using straight-line rays crossing at the aperture and describes image orientation and sharpness.",
    "assessmentEvidence": "Quiz 3 asks why a pinhole-camera image is inverted. Building and explaining a physical camera model remains practical work.",
    "teachingSceneRefs": [
      "gh-jhs3-science-energy-light#scene-3"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs3-science-energy-light#quiz-3"
    ]
  },
  {
    "indicatorCode": "B9.4.1.2.3",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-energy-light"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Describe the formation of shadows.",
    "sourcePdfPage": 108,
    "teachingSceneEvidence": "Scene 3 explains opaque-object shadows, the umbra and penumbra, and a torch-card-screen investigation.",
    "assessmentEvidence": "Quiz 2 checks the umbra; penumbra formation is not separately assessed.",
    "teachingSceneRefs": [
      "gh-jhs3-science-energy-light#scene-3"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs3-science-energy-light#quiz-2"
    ]
  },
  {
    "indicatorCode": "B9.4.4.1.2",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-force-motion-pressure"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Demonstrate the application of Newton’s Third Law of motion in life.",
    "sourcePdfPage": 112,
    "teachingSceneEvidence": "Scene 3 states Newton's Third Law, distinguishes forces acting on different objects, gives walking, swimming and rocket examples, and describes a balloon-and-string demonstration.",
    "assessmentEvidence": "Quiz 4 checks a swimmer action-reaction pair. Learners must still perform and explain the practical prediction activity.",
    "teachingSceneRefs": [
      "gh-jhs3-science-force-motion-pressure#scene-3"
    ],
    "assessmentQuestionRefs": [
      "gh-jhs3-science-force-motion-pressure#quiz-4"
    ]
  },
  {
    "indicatorCode": "B9.4.5.1.3",
    "grade": 9,
    "strand": 4,
    "missionIds": [
      "gh-jhs3-science-agricultural-tools"
    ],
    "status": "needs-review",
    "officialIndicatorText": "Manufacture simple agricultural tools.",
    "sourcePdfPage": 113,
    "teachingSceneEvidence": "Scene 2 gives a supervised design-and-making process for a hand hoe or trowel, but the platform does not evidence a learner-manufactured tool using locally available materials.",
    "assessmentEvidence": "No practical product assessment is mapped. A teacher-observed learner-built tool, with safe process and finished-product evidence, is required.",
    "teachingSceneRefs": [
      "gh-jhs3-science-agricultural-tools#scene-2"
    ],
    "assessmentQuestionRefs": []
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
