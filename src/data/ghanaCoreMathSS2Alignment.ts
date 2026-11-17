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


// Strand 2 · Algebraic Reasoning · Sub-strand 1
// Source: official NaCCA SHS 1–3 Mathematics Curriculum, printed pp. 193–198.
export const GHANA_CORE_MATH_SS2_SIMULTANEOUS_EQUATIONS_ALIGNMENT = {
  strand: '2 · Algebraic Reasoning',
  subStrand: '1 · Applications of Expressions, Equations and Inequalities',
  printedPages: [193, 198],
  contentStandards: [
    {
      id: '2.2.1.CS.1',
      printedPage: 193,
      description: 'Demonstrate knowledge and understanding of simultaneous equations involving two variables and apply them to solve everyday-life problems.'
    }
  ],
  learningOutcomes: [
    {
      id: '2.2.1.LO.1',
      printedPage: 187,
      description: 'Solve linear equations in two variables using elimination, substitution and graphical methods.'
    },
    {
      id: '2.2.1.LO.2',
      printedPage: 189,
      description: 'Analyse, model and solve process problems on simultaneous linear equations involving real-life problems.'
    }
  ],
  learningIndicators: [
    { id: '2.2.1.LI.1', printedPage: 193, description: 'Solve simultaneous linear equations involving two variables using the graphical method.' },
    { id: '2.2.1.LI.2', printedPage: 196, description: 'Analyse two linear equations in two variables and solve them using elimination and substitution methods.' },
    { id: '2.2.1.LI.3', printedPage: 198, description: 'Analyse, model and solve word problems of simultaneous linear equations involving numbers, age and other contexts.' }
  ]
} as const;


// Strand 2 · Algebraic Reasoning · Sub-strand 2
// NaCCA source: SHS 2 Patterns and Relations, printed pp. 198–206.
export const GHANA_CORE_MATH_SS2_PATTERNS_ALIGNMENT = {
  strand: '2 · Algebraic Reasoning',
  subStrand: '2 · Patterns and Relations',
  printedPages: [198, 206],
  learningOutcomes: [
    {
      id: '2.2.2.LO.1',
      printedPage: 198,
      description: 'Explore patterns of a sequence using plane figures and find the nth and the sum of the nth term of an arithmetic and geometric progression. Analyse, model, and solve real-life problems involving financial mathematics and exponential growth.'
    }
  ],
  coverage: [
    { missionId: 'gh-core-ss2-sequences-progressions', topics: ['plane-figure patterns', 'arithmetic progressions', 'geometric progressions', 'nth term', 'sum of an arithmetic progression'] },
    { missionId: 'gh-core-ss2-financial-exponential-models', topics: ['compound interest', 'depreciation', 'exponential growth', 'repeated percentage change'] }
  ]
} as const;


// Strand 1 · Numbers for Everyday Life · Sub-strand 2
// Source: official NaCCA SHS 1–3 Mathematics Curriculum, printed pp. 182–185.
export const GHANA_CORE_MATH_SS2_PROPORTIONAL_ALIGNMENT = {
  strand: '1 · Numbers for Everyday Life',
  subStrand: '2 · Proportional Reasoning',
  printedPages: [182, 185],
  contentStandards: [
    {
      id: '2.1.2.CS.1',
      printedPage: 182,
      description: 'Demonstrate knowledge and understanding of ratios, rates and proportions and use them to solve real-world problems.'
    },
    {
      id: '2.1.2.CS.2',
      printedPage: 185,
      description: 'Demonstrate understanding of proportional reasoning using mathematical connections among ratios, rates and proportions to solve daily problems, including compound interest, tax, utilities and depreciation.'
    }
  ],
  learningOutcomes: [
    {
      id: '2.1.2.LO.1',
      printedPage: 176,
      description: 'Establish the similarities among ratios, rates and proportions and use these to solve problems.'
    },
    {
      id: '2.1.2.LO.2',
      printedPage: 178,
      description: 'Analyse the relevance of ratios, rates and proportions in solving day-to-day problems.'
    }
  ],
  learningIndicators: [
    { id: '2.1.2.LI.1', printedPage: 182, description: 'Explain the concepts of ratios and rates as a comparison of quantities.' },
    { id: '2.1.2.LI.2', printedPage: 183, description: 'Establish relationships among ratios, rates and proportions and use them to find unknown quantities.' },
    { id: '2.1.2.LI.1', printedPage: 185, description: 'Apply the concepts of ratios, rates and proportions to solve problems in financial mathematics, health and sports.' },
    { id: '2.1.2.LI.2', printedPage: 185, description: 'Establish the relevance of ratios, rates and proportions in day-to-day activities, make generalisations and apply them to solve real-world problems.' }
  ],
  coverage: [
    { missionId: 'gh-core-ss2-ratios-rates-proportions', topics: ['ratios', 'rates', 'equivalent ratios', 'proportions', 'scale drawings', 'similar shapes'] },
    { missionId: 'gh-core-ss2-proportional-real-world', topics: ['financial mathematics', 'percentages', 'tax', 'utilities', 'depreciation', 'currency exchange', 'real-world applications'] }
  ]
} as const;
