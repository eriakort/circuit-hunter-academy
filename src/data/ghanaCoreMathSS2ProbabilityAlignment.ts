// Ghana NaCCA Mathematics Curriculum for Secondary Education (SHS 1–3), September 2023.
// Strand 4 · Sub-strand 2: Probability/Chance · SHS 2, printed pp. 290–296.
export const GHANA_CORE_MATH_SS2_PROBABILITY_ALIGNMENT = {
  strand: '4 · Making Sense of and Using Data',
  subStrand: '2 · Probability/Chance',
  printedPages: [290, 296],
  contentStandards: [{
    id: '2.4.2.CS.1',
    printedPage: 293,
    description: 'Demonstrate a conceptual understanding of simple and compound probability experiments involving two dependent events.',
    learningIndicatorIds: ['2.4.2.LI.1', '2.4.2.LI.2']
  }],
  learningOutcomes: [{
    id: '2.4.2.LO.1',
    printedPage: 290,
    description: 'Demonstrate a conceptual understanding of simple and compound probability experiments involving two dependent events.'
  }],
  learningIndicators: [
    {
      id: '2.4.2.LI.1',
      contentStandardId: '2.4.2.CS.1',
      printedPage: 293,
      description: 'List the elements of the sample space from a simple or compound experiment involving two dependent events.'
    },
    {
      id: '2.4.2.LI.2',
      contentStandardId: '2.4.2.CS.1',
      printedPage: 296,
      description: 'Solve everyday life problems involving the probability of two independent events.'
    }
  ],
  curriculumNote: 'The stated learning outcome and LI.1 explicitly address dependent events; LI.2 explicitly says independent events. The missions teach and assess both exactly as written, explaining the distinction rather than silently normalising the wording.',
  coverage: [
    {
      missionId: 'gh-core-ss2-dependent-events-sample-space',
      contentStandardId: '2.4.2.CS.1',
      learningIndicators: ['2.4.2.LI.1'],
      topics: ['random experiments', 'ordered sample spaces', 'dependent events', 'without replacement', 'conditional probability', 'tree diagrams']
    },
    {
      missionId: 'gh-core-ss2-independent-events-everyday-probability',
      contentStandardId: '2.4.2.CS.1',
      learningIndicators: ['2.4.2.LI.2'],
      topics: ['independent events', 'multiplication rule', 'complementary events', 'fractions', 'decimals', 'percentages', 'everyday problems']
    }
  ]
} as const;
