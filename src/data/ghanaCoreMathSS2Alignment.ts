/**
 * Audited first-slice alignment for Ghana NaCCA Mathematics Curriculum for
 * Secondary Education (SHS 1–3), September 2023.
 *
 * Source: official NaCCA curriculum, printed pages 166–173.
 * The scope totals are for SHS 2 as a whole; this module maps only the first
 * sub-strand in detail and does not claim full-year coverage.
 */
export const GHANA_NACCA_SS2_MATHEMATICS_SOURCE = {
  title: 'Mathematics Curriculum for Secondary Education (SHS 1–3)',
  publisher: 'National Council for Curriculum and Assessment (NaCCA), Ghana',
  publicationDate: 'September 2023',
  url: 'https://www.nacca.gov.gh/wp-content/uploads/2025/04/Mathematics-Curriculum.pdf'
} as const;

export const GHANA_CORE_MATH_SS2_SCOPE = {
  totalLearningIndicators: 40,
  strands: [
    { name: 'Numbers for Everyday Life', subStrands: 2, contentStandards: 5, learningIndicators: 11 },
    { name: 'Algebraic Reasoning', subStrands: 2, contentStandards: 2, learningIndicators: 8 },
    { name: 'Geometry Around Us', subStrands: 4, contentStandards: 4, learningIndicators: 12 },
    { name: 'Making Sense of and Using Data', subStrands: 2, contentStandards: 4, learningIndicators: 9 }
  ]
} as const;

export const GHANA_CORE_MATH_SS2_REAL_NUMBER_ALIGNMENT = {
  strand: '1 · Numbers for Everyday Life',
  subStrand: '1 · Real Number and Numeration System',
  printedPages: [166, 173],
  contentStandards: [
    {
      id: '2.1.1.CS.1',
      description: 'Demonstrate knowledge and understanding of surds, indices and logarithms and establish their laws and properties.',
      learningIndicatorIds: ['2.1.1.LI.1', '2.1.1.LI.2', '2.1.1.LI.3'],
      printedPages: [166, 168]
    },
    {
      id: '2.1.1.CS.2',
      description: 'Demonstrate knowledge and understanding of the laws and properties of indices and logarithms and their applications to solving real-life problems.',
      learningIndicatorIds: ['2.1.1.LI.1', '2.1.1.LI.2'],
      printedPages: [171]
    },
    {
      id: '2.1.1.CS.3',
      description: 'Demonstrate understanding of the concepts of modulo arithmetic and solve real-life problems on them.',
      learningIndicatorIds: ['2.1.1.LI.1', '2.1.1.LI.2'],
      printedPages: [173]
    }
  ],
  learningOutcomes: [
    { id: '2.1.1.LO.1', printedPage: 158, description: 'Evaluate the relationships between the laws and properties of surds, indices and logarithms and apply them to solve problems with radicands.' },
    { id: '2.1.1.LO.2', printedPage: 161, description: 'Apply the laws and properties of indices and logarithms to solve real-life problems.' },
    { id: '2.1.1.LO.3', printedPage: 163, description: 'Establish the connections between number bases and modular arithmetic and apply these relationships to the concept of place value.' }
  ],
  learningIndicators: [
    { id: '2.1.1.LI.1', printedPage: 166, description: 'Carry out operations on surds and rationalize monomial denominators.' },
    { id: '2.1.1.LI.2', printedPage: 167, description: 'Compose and decompose the laws of indices and use them to solve problems.' },
    { id: '2.1.1.LI.3', printedPage: 168, description: 'Compose and decompose logarithm laws and properties with exponents and apply them.' },
    { id: '2.1.1.LI.1', printedPage: 171, description: 'Investigate real-life problems using laws and properties of indices and logarithms.' },
    { id: '2.1.1.LI.2', printedPage: 171, description: 'Use mathematical connections to explore the relevance of surds, indices and logarithms.' },
    { id: '2.1.1.LI.1', printedPage: 173, description: 'Investigate the concept and existence of modulo arithmetic in learners’ environment.' },
    { id: '2.1.1.LI.2', printedPage: 173, description: 'Model and solve real-life problems involving modular arithmetic.' }
  ]
} as const;
