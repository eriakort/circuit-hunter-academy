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
    pilotMissionIds: ['gh-core-ss1-fraction-operations', 'gh-core-ss1-fractions-percentages', 'gh-core-ss1-financial-mathematics', 'gh-core-ss1-percentage-change-finance'],
    note: 'Fraction-decimal connections and fraction operations are introduced; percentage-change and household-finance practice now includes utility bills, exchange rates, project budgets, school fees and shopping. The ratio/rate mission remains an SHS 2 extension and is not counted as SHS 1 coverage.'
  },
  {
    strand: 'Algebraic Reasoning',
    subStrand: 'Applications of Expressions, Equations and Inequalities',
    contentStandards: 2,
    learningOutcomes: 3,
    learningIndicators: 6,
    status: 'partial',
    pilotMissionIds: ['gh-core-ss1-algebraic-expressions', 'gh-core-ss1-linear-equations-inequalities'],
    note: 'The pilot introduces expression formation and simplification, formula rearrangement, linear equations and inequalities in one variable, number-line solution sets and practical applications. The remaining first-standard indicators on quadratic factorisation, perfect squares and algebraic fractions are not yet covered.'
  },
  {
    strand: 'Algebraic Reasoning',
    subStrand: 'Patterns and Relationships',
    contentStandards: 2,
    learningOutcomes: 2,
    learningIndicators: 4,
    status: 'partial',
    pilotMissionIds: ['gh-core-ss1-patterns-functions'],
    note: 'The pilot covers relations and functions, mapping rules, domain/range, and introductory linear-function graphs under the first content standard. The second content standard and remaining indicators are not yet covered.'
  },
  {
    strand: 'Geometry Around Us',
    subStrand: 'Spatial Sense',
    contentStandards: 1,
    learningOutcomes: 1,
    learningIndicators: 5,
    status: 'partial',
    pilotMissionIds: ['gh-core-ss1-spatial-sense'],
    note: 'The pilot introduces all five listed spatial-sense indicators through guided examples and practice. Further varied and higher-demand applications should be added before treating the sub-strand as fully mastered.'
  },
  {
    strand: 'Geometry Around Us',
    subStrand: 'Measurement',
    contentStandards: 3,
    learningOutcomes: 3,
    learningIndicators: 9,
    status: 'partial',
    pilotMissionIds: ['gh-core-ss1-vectors-bearings'],
    note: 'The pilot covers the first measurement content standard on vectors and bearings. The trigonometry and perimeter/area standards remain not yet covered.'
  },
  {
    strand: 'Making Sense of and Using Data',
    subStrand: 'Statistical Reasoning and Its Application in Real Life',
    contentStandards: 3,
    learningOutcomes: 3,
    learningIndicators: 8,
    status: 'partial',
    pilotMissionIds: ['gh-core-ss1-statistical-reasoning-data-types', 'gh-core-ss1-statistical-data-collection-methods', 'gh-core-ss1-statistical-data-organisation-presentation', 'gh-core-ss1-school-community-data-project'],
    note: 'The pilot covers the first content standard and its three indicators on data classification and appropriate quantitative and qualitative collection methods, plus the second content standard on data organisation and presentation. The pilot now includes the school-community project standard and its two indicators; further varied project practice and assessment can deepen coverage.'
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
