import { GHANA_CORE_MATH_SS1_MISSIONS } from './ghanaCoreMathSS1Data';

/**
 * SHS 1 scope-and-sequence audit based on the official NaCCA Mathematics
 * Curriculum (September 2023), printed page 22. This describes pilot coverage,
 * not a claim that the app has taught or assessed every listed indicator.
 */
export const GHANA_NACCA_SS1_SCOPE_SOURCE = {
  title: 'Mathematics Curriculum for Secondary Education (SHS 1–3)',
  publisher: 'National Council for Curriculum and Assessment (NaCCA), Ghana',
  publicationDate: 'September 2023',
  printedPage: 22,
  url: 'https://www.nacca.gov.gh/wp-content/uploads/2025/04/Mathematics-Curriculum.pdf'
} as const;

export type GhanaSS1CoverageStatus = 'partial' | 'not-started';

export type GhanaSS1SubStrandCoverage = {
  strand: string;
  subStrand: string;
  contentStandards: number;
  learningOutcomes: number;
  learningIndicators: number;
  status: GhanaSS1CoverageStatus;
  pilotMissionIds: string[];
  note: string;
};

/** Official SHS 1 scope totals are 16 content standards, 17 outcomes and 45 indicators. */
export const GHANA_CORE_MATH_SS1_COVERAGE: GhanaSS1SubStrandCoverage[] = [
  {
    strand: 'Numbers for Everyday Life',
    subStrand: 'Real Number System',
    contentStandards: 2,
    learningOutcomes: 2,
    learningIndicators: 6,
    status: 'partial',
    pilotMissionIds: ['gh-core-ss1-number-sets', 'gh-core-ss1-real-number-properties', 'gh-core-ss1-sets-surveys'],
    note: 'The pilot now introduces number families, rational/irrational classification, closure under the four operations, core real-number properties and set/survey work. Additional differentiated practice can strengthen mastery across all six indicators.'
  },
  {
    strand: 'Numbers for Everyday Life',
    subStrand: 'Proportional Reasoning',
    contentStandards: 2,
    learningOutcomes: 2,
    learningIndicators: 4,
    status: 'partial',
    pilotMissionIds: ['gh-core-ss1-fraction-operations', 'gh-core-ss1-fractions-percentages', 'gh-core-ss1-financial-mathematics', 'gh-core-ss1-percentage-change-finance', 'gh-core-ss1-compound-interest-tax'],
    note: 'Fraction-decimal connections and fraction operations are introduced; percentage-change and household-finance practice now includes utility bills, exchange rates, project budgets, school fees, shopping, annual compound interest and tax-inclusive/exclusive calculations using rates stated in each problem. The ratio/rate mission remains an SHS 2 extension and is not counted as SHS 1 coverage.'
  },
  {
    strand: 'Algebraic Reasoning',
    subStrand: 'Applications of Expressions, Equations and Inequalities',
    contentStandards: 2,
    learningOutcomes: 3,
    learningIndicators: 6,
    status: 'partial',
    pilotMissionIds: ['gh-core-ss1-algebraic-expressions', 'gh-core-ss1-linear-equations-inequalities', 'gh-core-ss1-quadratic-factorisation-algebraic-fractions'],
    note: 'The pilot introduces expression formation and simplification, formula rearrangement, linear equations and inequalities in one variable, number-line solution sets and practical applications. The pilot now also covers quadratic factorisation, perfect-square identities, differences of two squares, and simple algebraic-fraction operations with zero/undefined conditions. Additional varied practice is still needed to establish mastery.'
  },
  {
    strand: 'Algebraic Reasoning',
    subStrand: 'Patterns and Relationships',
    contentStandards: 2,
    learningOutcomes: 2,
    learningIndicators: 4,
    status: 'partial',
    pilotMissionIds: ['gh-core-ss1-patterns-functions', 'gh-core-ss1-straight-lines-distance'],
    note: 'The pilot covers relations and functions, mapping rules, domain/range, linear-function graphs, coordinates, midpoint, gradient, equations of straight lines, distance between points, and parallel/perpendicular gradient relationships. Further varied practice can deepen mastery.'
  },
  {
    strand: 'Geometry Around Us',
    subStrand: 'Spatial Sense',
    contentStandards: 1,
    learningOutcomes: 1,
    learningIndicators: 5,
    status: 'partial',
    pilotMissionIds: ['gh-core-ss1-spatial-sense', 'gh-core-ss1-spatial-sense-field-challenge'],
    note: 'The introductory Geometry Trail teaches all five spatial-sense indicators; the Site Planner’s Geometry Challenge adds graduated, multi-step applications across angle relationships, parallel lines, triangle properties, Pythagoras and polygon angle sums. Both missions reinforce the same five indicators; the second is additional practice, not extra curriculum coverage.'
  },
  {
    strand: 'Geometry Around Us',
    subStrand: 'Measurement',
    contentStandards: 3,
    learningOutcomes: 3,
    learningIndicators: 9,
    status: 'partial',
    pilotMissionIds: ['gh-core-ss1-vectors-bearings', 'gh-core-ss1-trigonometry', 'gh-core-ss1-perimeter-area', 'gh-core-ss1-prism-volume'],
    note: 'The pilot covers vectors and bearings, trigonometry, and perimeter/area of circles and quadrilaterals. The new mission addresses SI/imperial area referents, regular/composite/irregular shapes, perimeter estimation, unit conversions, and contextual problems. The volume-of-prisms indicator is now addressed in the separate Prism Vault mission; additional varied practice and assessment are still needed before claiming full mastery.'
  },
  {
    strand: 'Making Sense of and Using Data',
    subStrand: 'Statistical Reasoning and Its Application in Real Life',
    contentStandards: 3,
    learningOutcomes: 3,
    learningIndicators: 8,
    status: 'partial',
    pilotMissionIds: ['gh-core-ss1-statistical-reasoning-data-types', 'gh-core-ss1-statistical-data-collection-methods', 'gh-core-ss1-statistical-data-organisation-presentation', 'gh-core-ss1-statistical-averages-inference', 'gh-core-ss1-school-community-data-project'],
    note: 'The pilot covers data classification and quantitative/qualitative collection methods; frequency tables and visual presentation; descriptive statistics (mean, median, mode, minimum, maximum, range and outliers), representative averages and evidence-based inference; and the school-community project. Additional varied practice and assessment are still needed before claiming full mastery.'
  },
  {
    strand: 'Making Sense of and Using Data',
    subStrand: 'Probability/Chance',
    contentStandards: 1,
    learningOutcomes: 1,
    learningIndicators: 3,
    status: 'partial',
    pilotMissionIds: ['gh-core-ss1-probability-chance'],
    note: 'The pilot introduces sample spaces for simple and compound experiments, independent-event probability, multiple probability representations and everyday applications. Further varied practice and assessment can deepen coverage.'
  }
];

export const getGhanaCoreMathSS1CoverageSummary = () => {
  const totals = GHANA_CORE_MATH_SS1_COVERAGE.reduce(
    (sum, item) => ({
      contentStandards: sum.contentStandards + item.contentStandards,
      learningOutcomes: sum.learningOutcomes + item.learningOutcomes,
      learningIndicators: sum.learningIndicators + item.learningIndicators
    }),
    { contentStandards: 0, learningOutcomes: 0, learningIndicators: 0 }
  );

  return {
    ...totals,
    subStrands: GHANA_CORE_MATH_SS1_COVERAGE.length,
    partial: GHANA_CORE_MATH_SS1_COVERAGE.filter(item => item.status === 'partial').length,
    notStarted: GHANA_CORE_MATH_SS1_COVERAGE.filter(item => item.status === 'not-started').length,
    pilotMissions: GHANA_CORE_MATH_SS1_MISSIONS.length
  };
};
