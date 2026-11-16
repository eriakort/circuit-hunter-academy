/**
 * Audited mapping between the Ghana Core Mathematics pilot missions and the
 * NaCCA Mathematics Curriculum for Secondary Education (September 2023).
 *
 * Page references are the printed curriculum page numbers. The ratio/rate
 * mission is explicitly identified as an SHS 2 extension, not an SHS 1
 * learning-indicator claim.
 */
export const GHANA_NACCA_MATHEMATICS_SOURCE = {
  title: 'Mathematics Curriculum for Secondary Education (SHS 1–3)',
  publisher: 'National Council for Curriculum and Assessment (NaCCA), Ghana',
  publicationDate: 'September 2023',
  url: 'https://www.nacca.gov.gh/wp-content/uploads/2025/04/Mathematics-Curriculum.pdf'
} as const;

export type GhanaMissionAlignment = {
  missionId: string;
  curriculumYear: 'SHS 1' | 'SHS 2';
  strand: string;
  subStrand: string;
  contentStandardIds: string[];
  learningOutcomeIds: string[];
  learningIndicatorIds: string[];
  printedPages: number[];
  alignment: 'direct' | 'cross-year-extension';
  note: string;
};

export const GHANA_CORE_MATH_SS1_ALIGNMENT: GhanaMissionAlignment[] = [
  {
    missionId: 'gh-core-ss1-number-sets',
    curriculumYear: 'SHS 1',
    strand: '1 · Numbers for Everyday Life',
    subStrand: '1 · Real Number System',
    contentStandardIds: ['1.1.1.CS.1'],
    learningOutcomeIds: ['1.1.1.LO.1'],
    learningIndicatorIds: ['1.1.1.LI.2'],
    printedPages: [26, 31],
    alignment: 'direct',
    note: 'Covers the real-number system, rational and irrational numbers, and their representation on a number line. This is a partial introduction to rational and irrational numbers; closure properties and set-survey outcomes are covered separately.'
  },
  {
    missionId: 'gh-core-ss1-fractions-percentages',
    curriculumYear: 'SHS 1',
    strand: '1 · Numbers for Everyday Life',
    subStrand: '2 · Proportional Reasoning',
    contentStandardIds: ['1.1.2.CS.2'],
    learningOutcomeIds: ['1.1.2.LO.2'],
    learningIndicatorIds: ['1.1.2.LI.1', '1.1.2.LI.2'],
    printedPages: [43, 50],
    alignment: 'direct',
    note: 'Maps to the personal-finance percentage outcome and indicators, including discounts and percentage calculations. Simple interest, profit, loss, commission and wider household-finance contexts remain to be added.'
  },
  {
    missionId: 'gh-core-ss1-ratio-rate',
    curriculumYear: 'SHS 2',
    strand: '1 · Numbers for Everyday Life',
    subStrand: '2 · Proportional Reasoning',
    contentStandardIds: ['2.1.2.CS.2'],
    learningOutcomeIds: [],
    learningIndicatorIds: ['2.1.2.LI.1', '2.1.2.LI.2'],
    printedPages: [182, 183],
    alignment: 'cross-year-extension',
    note: 'Ratios, rates and proportions are explicitly mapped here to the SHS 2 proportional-reasoning standard. Keep this mission labelled as an optional early extension; do not count it as evidence of SHS 1 curriculum coverage.'
  },
  {
    missionId: 'gh-core-ss1-sets-surveys',
    curriculumYear: 'SHS 1',
    strand: '1 · Numbers for Everyday Life',
    subStrand: '1 · Real Number System',
    contentStandardIds: ['1.1.1.CS.2'],
    learningOutcomeIds: ['1.1.1.LO.2'],
    learningIndicatorIds: ['1.1.1.LI.1', '1.1.1.LI.2', '1.1.1.LI.3'],
    printedPages: [36, 37],
    alignment: 'direct',
    note: 'Covers set vocabulary, union, intersection, complements, two-set and three-set Venn problems, survey interpretation and De Morgan’s laws. The mission is an introductory practice set rather than the full set-algebra sequence.'
  }
];

export const getGhanaMissionAlignment = (missionId: string) =>
  GHANA_CORE_MATH_SS1_ALIGNMENT.find(item => item.missionId === missionId);
