/**
 * Ghana NaCCA SHS 3 Core Mathematics — Strand 1, Sub-strand 2.
 * Source: Mathematics Curriculum for Secondary Education (SHS 1–3),
 * September 2023, printed pp. 300–309.
 */
export const GHANA_NACCA_SS3_MATHEMATICS_SOURCE = {
  publisher: 'National Council for Curriculum and Assessment (NaCCA), Ghana',
  publicationDate: 'September 2023',
  url: 'https://www.nacca.gov.gh/wp-content/uploads/2025/04/Mathematics-Curriculum.pdf'
} as const;

export const GHANA_CORE_MATH_SS3_SCOPE = {
  strand: '1 · Numbers for Everyday Life',
  subStrand: '2 · Proportional Reasoning',
  printedPages: [300, 309],
  contentStandards: 2,
  learningOutcomes: 2,
  learningIndicators: 5
} as const;

export const GHANA_CORE_MATH_SS3_ALIGNMENT = {
  strand: '1 · Numbers for Everyday Life',
  subStrand: '2 · Proportional Reasoning',
  printedPages: [300, 309],
  contentStandards: [
    {
      id: '3.1.2.CS.1',
      printedPage: 305,
      description: 'Demonstrate conceptual understanding of logical reasoning to solve real-life problems.',
      learningIndicatorIds: ['3.1.2.LI.1', '3.1.2.LI.2', '3.1.2.LI.3']
    },
    {
      id: '3.1.2.CS.2',
      printedPage: 308,
      description: 'Demonstrate a conceptual understanding of proportionality in relation to variation and use it to solve real-life problems.',
      learningIndicatorIds: ['3.1.2.LI.1', '3.1.2.LI.2']
    }
  ],
  learningOutcomes: [
    {
      id: '3.1.2.LO.1',
      printedPage: 300,
      description: 'Establish the validity of logical arguments and use it to make relevant decisions in solving problems.'
    },
    {
      id: '3.1.2.LO.2',
      printedPage: 302,
      description: 'Analyse the impact of variations and conduct simple investigations in solving day-to-day problems.'
    }
  ],
  learningIndicators: [
    {
      id: '3.1.2.LI.1',
      contentStandardId: '3.1.2.CS.1',
      printedPage: 305,
      description: 'Investigate statements, quantifiers and logical connectives, including truth values and logical reasoning.'
    },
    {
      id: '3.1.2.LI.2',
      contentStandardId: '3.1.2.CS.1',
      printedPage: 305,
      description: 'Make intelligent guesses to establish valid arguments and draw logical conclusions.'
    },
    {
      id: '3.1.2.LI.3',
      contentStandardId: '3.1.2.CS.1',
      printedPage: 309,
      description: 'Investigate real-life problems involving logical reasoning, conditional statements, hypotheses and conclusions.'
    },
    {
      id: '3.1.2.LI.1',
      contentStandardId: '3.1.2.CS.2',
      printedPage: 308,
      description: 'Use proportional reasoning to investigate direct and inverse variation and make generalisations.'
    },
    {
      id: '3.1.2.LI.2',
      contentStandardId: '3.1.2.CS.2',
      printedPage: 308,
      description: 'Use proportional reasoning to investigate joint and partial variation and make generalisations.'
    }
  ],
  coverage: [
    {
      missionId: 'gh-core-ss3-logical-reasoning',
      contentStandardId: '3.1.2.CS.1',
      learningIndicators: ['3.1.2.LI.1', '3.1.2.LI.2', '3.1.2.LI.3'],
      topics: ['truth values', 'statements', 'quantifiers', 'conjunction', 'disjunction', 'negation', 'implication', 'truth tables', 'valid arguments', 'logical conclusions']
    },
    {
      missionId: 'gh-core-ss3-variation',
      contentStandardId: '3.1.2.CS.2',
      learningIndicators: ['3.1.2.LI.1', '3.1.2.LI.2'],
      topics: ['direct variation', 'inverse variation', 'joint variation', 'partial variation', 'proportional models', 'real-life applications']
    }
  ]
} as const;
