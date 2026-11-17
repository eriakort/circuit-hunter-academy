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
    learningIndicatorIds: ['1.1.2.LI.1'],
    printedPages: [43, 45],
    alignment: 'direct',
    note: 'Maps to the personal-finance outcome and the listed percentage indicators. Further household-finance topics, including compound interest and tax, remain outside this focused mission.'
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
  },
  {
    missionId: 'gh-core-ss1-financial-mathematics',
    curriculumYear: 'SHS 1',
    strand: '1 · Numbers for Everyday Life',
    subStrand: '2 · Proportional Reasoning',
    contentStandardIds: ['1.1.2.CS.2'],
    learningOutcomeIds: ['1.1.2.LO.2'],
    learningIndicatorIds: ['1.1.2.LI.2'],
    printedPages: [47, 49],
    alignment: 'direct',
    note: 'Introduces simple interest, profit and loss, and commission using Ghanaian financial examples as practical proportional-reasoning applications. It is a focused practice mission and does not claim to cover the full personal-finance sequence.'
  },
  {
    missionId: 'gh-core-ss1-algebraic-expressions',
    curriculumYear: 'SHS 1',
    strand: '2 · Algebraic Reasoning',
    subStrand: '1 · Applications of Expressions, Equations and Inequalities',
    contentStandardIds: ['1.2.1.CS.1'],
    learningOutcomeIds: ['1.2.1.LO.1'],
    learningIndicatorIds: ['1.2.1.LI.1'],
    printedPages: [52, 57],
    alignment: 'direct',
    note: 'Introduces variables, translating simple verbal and pattern-based situations into expressions, combining like terms and using the distributive property. Quadratic factorisation, perfect-square identities, algebraic fractions, equations and inequalities are not claimed as covered.'
  },
  {
    missionId: 'gh-core-ss1-patterns-functions',
    curriculumYear: 'SHS 1',
    strand: '2 · Algebraic Reasoning',
    subStrand: '2 · Patterns and Relationships',
    contentStandardIds: ['1.2.2.CS.1'],
    learningOutcomeIds: ['1.2.2.LO.1'],
    learningIndicatorIds: ['1.2.2.LI.1', '1.2.2.LI.2'],
    printedPages: [74, 78],
    alignment: 'direct',
    note: 'Focused coverage of the first Patterns and Relationships content standard: distinguishing relations and functions, mapping rules, domain and range, and drawing/interpreting simple linear-function graphs. The second content standard on gradient/equations of straight lines and distance between points is not claimed as covered.'
  },
  {
    missionId: 'gh-core-ss1-straight-lines-distance',
    curriculumYear: 'SHS 1',
    strand: '2 · Algebraic Reasoning',
    subStrand: '2 · Patterns and Relationships',
    contentStandardIds: ['1.2.2.CS.2'],
    learningOutcomeIds: ['1.2.2.LO.2'],
    learningIndicatorIds: ['1.2.2.LI.1', '1.2.2.LI.2'],
    printedPages: [80, 83],
    alignment: 'direct',
    note: 'Covers coordinate pairs, midpoint, gradient, equations of straight lines, distance between two points using Pythagoras, and parallel/perpendicular gradient relationships. The earlier Mapping Maze mission covers the separate first content standard on relations, functions and graph interpretation.'
  },
  {
    missionId: 'gh-core-ss1-spatial-sense',
    curriculumYear: 'SHS 1',
    strand: '3 · Geometry Around Us',
    subStrand: '1 · Spatial Sense',
    contentStandardIds: ['1.3.1.CS.1'],
    learningOutcomeIds: ['1.3.1.LO.1'],
    learningIndicatorIds: ['1.3.1.LI.1', '1.3.1.LI.2', '1.3.1.LI.3', '1.3.1.LI.4', '1.3.1.LI.5'],
    printedPages: [84, 100],
    alignment: 'direct',
    note: 'Covers angle types and angle sums, parallel/perpendicular lines and transversal relationships, the triangle exterior-angle theorem, Pythagoras’ theorem in right triangles, and polygon interior-angle sums. The curriculum PDF extraction renders the leading numeral 1 as a capital I in some table cells; the consistent indicator sequence is 1.3.1.LI.1–1.3.1.LI.5.'
  },
  {
    missionId: 'gh-core-ss1-vectors-bearings',
    curriculumYear: 'SHS 1',
    strand: '3 · Geometry Around Us',
    subStrand: '2 · Measurement',
    contentStandardIds: ['1.3.2.CS.1'],
    learningOutcomeIds: ['1.3.2.LO.1'],
    learningIndicatorIds: ['1.3.2.LI.1', '1.3.2.LI.2'],
    printedPages: [110, 112],
    alignment: 'direct',
    note: 'Focused coverage of the first Measurement content standard: recognising vectors as quantities with magnitude and direction, interpreting real-world vector examples, representing vectors as directed line segments, reading compass bearings, and recognising equal vectors at different positions. Trigonometry and area/perimeter standards are not claimed as covered.'
  },
  {
    missionId: 'gh-core-ss1-statistical-reasoning-data-types',
    curriculumYear: 'SHS 1',
    strand: '4 · Making Sense of and Using Data',
    subStrand: '1 · Statistical Reasoning and Its Application in Real Life',
    contentStandardIds: ['1.4.1.CS.1'],
    learningOutcomeIds: ['1.4.1.LO.1'],
    learningIndicatorIds: ['1.4.1.LI.1'],
    printedPages: [126, 133],
    alignment: 'direct',
    note: 'Focused coverage of the first statistical-reasoning indicator: classifying primary/secondary, quantitative (discrete/continuous), qualitative (nominal/ordinal), numerical/categorical, and grouped/ungrouped data. Collection-method selection is practised further in a separate mission.'
  },
  {
    missionId: 'gh-core-ss1-statistical-data-collection-methods',
    curriculumYear: 'SHS 1',
    strand: '4 · Making Sense of and Using Data',
    subStrand: '1 · Statistical Reasoning and Its Application in Real Life',
    contentStandardIds: ['1.4.1.CS.1'],
    learningOutcomeIds: ['1.4.1.LO.1'],
    learningIndicatorIds: ['1.4.1.LI.2', '1.4.1.LI.3'],
    printedPages: [133, 134],
    alignment: 'direct',
    note: 'Covers identifying, validating and applying quantitative collection methods (surveys/questionnaires, interviews, observation, existing data and probability-based sampling) and qualitative methods (interviews, observation, focus groups, oral histories and responsible online/social-media monitoring).'
  }
,
  {
    missionId: 'gh-core-ss1-statistical-data-organisation-presentation',
    curriculumYear: 'SHS 1',
    strand: '4 · Making Sense of and Using Data',
    subStrand: '1 · Statistical Reasoning and Its Application in Real Life',
    contentStandardIds: ['1.4.1.CS.2'],
    learningOutcomeIds: ['1.4.1.LO.2'],
    learningIndicatorIds: ['1.4.1.LI.2'],
    printedPages: [135, 138],
    alignment: 'direct',
    note: 'Covers organising grouped and ungrouped data in frequency tables and presenting findings with line graphs, pie charts, multiple bar graphs, infographics and appropriate digital tools, including 3D graphs/charts where available. Descriptive statistics are addressed separately.'
  }
,
  {
    missionId: 'gh-core-ss1-school-community-data-project',
    curriculumYear: 'SHS 1',
    strand: '4 · Making Sense of and Using Data',
    subStrand: '1 · Statistical Reasoning and Its Application in Real Life',
    contentStandardIds: ['1.4.1.CS.3'],
    learningOutcomeIds: ['1.4.1.LO.3'],
    learningIndicatorIds: ['1.4.1.LI.1', '1.4.1.LI.2'],
    printedPages: [147],
    alignment: 'direct',
    note: 'Covers a team project to pose and refine a school-community question, collect and analyse quantitative and/or qualitative data, interpret findings, draw evidence-based conclusions and recommendations, and present an approved report to a class or school forum. Publication is limited to anonymised material approved by the school.'
  },
  {
    missionId: 'gh-core-ss1-probability-chance',
    curriculumYear: 'SHS 1',
    strand: '4 · Making Sense of and Using Data',
    subStrand: '2 · Probability/Chance',
    contentStandardIds: ['1.4.2.CS.1'],
    learningOutcomeIds: ['1.4.2.LO.1'],
    learningIndicatorIds: ['1.4.2.LI.1', '1.4.2.LI.2', '1.4.2.LI.3'],
    printedPages: [149, 152],
    alignment: 'direct',
    note: 'Covers random experiments, trials, outcomes, sample spaces and events; listing outcomes for simple and compound experiments; determining probabilities of independent events and expressing results as fractions, decimals, percentages and ratios; and solving everyday problems. Conditional probability is introduced only as prerequisite context, not claimed as a separate learning indicator.'
  },
  {
    missionId: 'gh-core-ss1-real-number-properties',
    curriculumYear: 'SHS 1',
    strand: '1 · Numbers for Everyday Life',
    subStrand: '1 · Real Number System',
    contentStandardIds: ['1.1.1.CS.1'],
    learningOutcomeIds: ['1.1.1.LO.1'],
    learningIndicatorIds: ['1.1.1.LI.1', '1.1.1.LI.3'],
    printedPages: [31, 33],
    alignment: 'direct',
    note: 'Covers closure tests for addition, subtraction, multiplication and division across real-number subsets (including the non-zero divisor condition), plus commutative, associative, distributive, identity and inverse properties. The existing Number Map mission remains the focused introduction to rational/irrational classification.'
  },
  {
    missionId: 'gh-core-ss1-percentage-change-finance',
    curriculumYear: 'SHS 1',
    strand: '1 · Numbers for Everyday Life',
    subStrand: '2 · Proportional Reasoning',
    contentStandardIds: ['1.1.2.CS.2'],
    learningOutcomeIds: ['1.1.2.LO.2'],
    learningIndicatorIds: ['1.1.2.LI.2'],
    printedPages: [48, 49],
    alignment: 'direct',
    note: 'Covers percentage increase/decrease using the original amount as the base, utility-bill changes, exchange-rate comparisons, school-fee and project-budget changes, shopping discounts, and budget overruns/savings.'
  },
  {
    missionId: 'gh-core-ss1-linear-equations-inequalities',
    curriculumYear: 'SHS 1',
    strand: '2 · Algebraic Reasoning',
    subStrand: '1 · Applications of Expressions, Equations and Inequalities',
    contentStandardIds: ['1.2.1.CS.2'],
    learningOutcomeIds: ['1.2.1.LO.2'],
    learningIndicatorIds: ['1.2.1.LI.1', '1.2.1.LI.2'],
    printedPages: [62, 66],
    alignment: 'direct',
    note: 'Covers rearranging formulae and change of subject, solving linear equations in one variable, solving linear inequalities including reversing the sign when dividing by a negative, representing solution sets on number lines, and applying equations and inequalities to everyday situations. The first content standard indicators on quadratic factorisation, perfect squares and algebraic fractions remain outside this mission.'
  },
  {
    missionId: 'gh-core-ss1-fraction-operations',
    curriculumYear: 'SHS 1',
    strand: '1 · Numbers for Everyday Life',
    subStrand: '2 · Proportional Reasoning',
    contentStandardIds: ['1.1.2.CS.1'],
    learningOutcomeIds: ['1.1.2.LO.1'],
    learningIndicatorIds: ['1.1.2.LI.1', '1.1.2.LI.2'],
    printedPages: [44, 46],
    alignment: 'direct',
    note: 'Covers fraction-decimal connections, conversion to percentages, rational-number operations and word problems, positive rational numbers raised to whole-number powers, rounding to decimal places and significant figures, and additive and multiplicative inverses of fractions.'
  },
  {
    missionId: 'gh-core-ss1-quadratic-factorisation-algebraic-fractions',
    curriculumYear: 'SHS 1',
    strand: '2 · Algebraic Reasoning',
    subStrand: '1 · Applications of Expressions, Equations and Inequalities',
    contentStandardIds: ['1.2.1.CS.1'],
    learningOutcomeIds: ['1.2.1.LO.1'],
    learningIndicatorIds: ['1.2.1.LI.2', '1.2.1.LI.3', '1.2.1.LI.4'],
    printedPages: [57, 61],
    alignment: 'direct',
    note: 'Covers factorisation of quadratic trinomials, recognition and use of perfect-square identities including the difference of two squares, and operations on simple algebraic fractions with monomial and binomial denominators. It also teaches the conditions under which a fraction is zero or undefined. Linear equations and inequalities are mapped separately.'
  },
  {
    missionId: 'gh-core-ss1-trigonometry',
    curriculumYear: 'SHS 1',
    strand: '3 · Geometry Around Us',
    subStrand: '2 · Measurement',
    contentStandardIds: ['1.3.2.CS.2'],
    learningOutcomeIds: ['1.3.2.LO.2'],
    learningIndicatorIds: ['1.3.2.LI.1', '1.3.2.LI.2', '1.3.2.LI.3'],
    printedPages: [114, 117],
    alignment: 'direct',
    note: 'Covers the three primary trigonometric ratios in right triangles, special angles 30°, 45° and 60°, calculator evaluation of sine/cosine/tangent through 360° in standard position, and practical height/distance problems. The separate perimeter/area standard is not claimed as covered.'
  },
  {
    missionId: 'gh-core-ss1-perimeter-area',
    curriculumYear: 'SHS 1',
    strand: '3 · Geometry Around Us',
    subStrand: '2 · Measurement',
    contentStandardIds: ['1.3.2.CS.3'],
    learningOutcomeIds: ['1.3.2.LO.3'],
    learningIndicatorIds: ['1.3.2.LI.1', '1.3.2.LI.2', '1.3.2.LI.3'],
    printedPages: [118, 123],
    alignment: 'direct',
    note: 'Covers SI and imperial area referents and comparisons; perimeter and area estimation for circles, quadrilaterals, and regular, composite and irregular 2D shapes; area formulas for parallelograms, rhombi, kites and trapezoids; decomposition and grid estimation; and contextual perimeter/area problems with unit conversion. The separate volume-of-prisms indicator 1.3.2.LI.4 is not claimed as covered.'
  },
  {
    missionId: 'gh-core-ss1-statistical-averages-inference',
    curriculumYear: 'SHS 1',
    strand: '4 · Making Sense of and Using Data',
    subStrand: '1 · Statistical Reasoning and Its Application in Real Life',
    contentStandardIds: ['1.4.1.CS.2'],
    learningOutcomeIds: ['1.4.1.LO.2'],
    learningIndicatorIds: ['1.4.3.LI.2'],
    printedPages: [138, 141],
    alignment: 'direct',
    note: 'Maps descriptive statistics to the second Statistical Reasoning content standard and learning outcome (1.4.1.CS.2 / 1.4.1.LO.2). The NaCCA PDF explicitly labels this descriptive-statistics passage as 1.4.3.LI.2 on printed page 138, although the SHS 1 scope table lists only two Data sub-strands and no 1.4.3 content standard. The indicator reference is preserved as printed; no unsupported 1.4.3.CS.1 is asserted.'
  },
  {
    missionId: 'gh-core-ss1-prism-volume',
    curriculumYear: 'SHS 1',
    strand: '3 · Geometry Around Us',
    subStrand: '2 · Measurement',
    contentStandardIds: ['1.3.2.CS.3'],
    learningOutcomeIds: ['1.3.2.LO.3'],
    learningIndicatorIds: ['1.3.2.LI.4'],
    printedPages: [124],
    alignment: 'direct',
    note: 'Covers volume of rectangular prisms, square-faced cuboids and triangular prisms using cross-sectional area multiplied by prism length, including reverse-dimension problems and everyday contexts. This maps specifically to indicator 1.3.2.LI.4 and does not claim to replace the separate perimeter/area learning indicators.'
  },
  {
    missionId: 'gh-core-ss1-compound-interest-tax',
    curriculumYear: 'SHS 1',
    strand: '1 · Numbers for Everyday Life',
    subStrand: '2 · Proportional Reasoning',
    contentStandardIds: ['1.1.2.CS.2'],
    learningOutcomeIds: ['1.1.2.LO.2'],
    learningIndicatorIds: ['1.1.2.LI.2'],
    printedPages: [50],
    alignment: 'direct',
    note: 'Extends the percentage-change and personal-finance indicator with annual compound interest, comparison against simple interest, tax calculations, and tax-inclusive/exclusive prices. All tax rates are supplied in the learning examples and assessment; no current statutory rate is assumed.'
  },
  {
    missionId: 'gh-core-ss1-integrated-mastery-trial',
    curriculumYear: 'SHS 1',
    strand: 'Integrated review · Strands 1–4',
    subStrand: 'Cross-strand retrieval and transfer practice',
    contentStandardIds: ['1.1.2.CS.2', '1.2.1.CS.2', '1.3.2.CS.3', '1.4.1.CS.2'],
    learningOutcomeIds: ['1.1.2.LO.2', '1.2.1.LO.2', '1.3.2.LO.3', '1.4.1.LO.2'],
    learningIndicatorIds: ['1.1.2.LI.2', '1.2.1.LI.1', '1.2.1.LI.2', '1.3.2.LI.4', '1.4.1.LI.2', '1.4.1.LI.3'],
    printedPages: [50, 62, 124, 143],
    alignment: 'direct',
    note: 'An integrated retrieval and transfer mission using previously taught SHS 1 content from financial mathematics, equations and inequalities, prism measurement, and statistical reasoning. This is revision across existing indicators, not a claim of additional curriculum coverage.'
  },

  {
    missionId: 'gh-core-ss1-spatial-sense-field-challenge',
    curriculumYear: 'SHS 1',
    strand: '3 · Geometry Around Us',
    subStrand: '1 · Spatial Sense',
    contentStandardIds: ['1.3.1.CS.1'],
    learningOutcomeIds: ['1.3.1.LO.1'],
    learningIndicatorIds: ['1.3.1.LI.1', '1.3.1.LI.2', '1.3.1.LI.3', '1.3.1.LI.4', '1.3.1.LI.5'],
    printedPages: [84, 100],
    alignment: 'direct',
    note: 'Supplementary differentiated practice reinforcing all five Spatial Sense indicators through applied angle relationships, parallel lines and transversals, triangle angle properties, Pythagoras’ theorem and polygon angle sums. This is additional practice against the existing SHS 1 outcome, not additional curriculum coverage.'
  },

  {
    missionId: 'gh-core-ss1-probability-practice-lab',
    curriculumYear: 'SHS 1',
    strand: '4 · Making Sense of and Using Data',
    subStrand: '2 · Probability/Chance',
    contentStandardIds: ['1.4.2.CS.1'],
    learningOutcomeIds: ['1.4.2.LO.1'],
    learningIndicatorIds: ['1.4.2.LI.1', '1.4.2.LI.2', '1.4.2.LI.3'],
    printedPages: [149, 152],
    alignment: 'direct',
    note: 'Supplementary differentiated practice reinforcing the existing three Probability/Chance indicators through complete sample-space tables and tree diagrams, equally likely outcomes, complements, independent combined events, and theoretical versus experimental relative frequency. This is additional practice, not an additional curriculum indicator.'
  },
  {
    missionId: 'gh-core-ss1-measurement-mastery-challenge',
    curriculumYear: 'SHS 1',
    strand: '3 · Geometry Around Us',
    subStrand: '2 · Measurement',
    contentStandardIds: ['1.3.2.CS.1', '1.3.2.CS.2', '1.3.2.CS.3'],
    learningOutcomeIds: ['1.3.2.LO.1', '1.3.2.LO.2', '1.3.2.LO.3'],
    learningIndicatorIds: ['1.3.2.LI.1', '1.3.2.LI.2', '1.3.2.LI.3', '1.3.2.LI.4'],
    printedPages: [110, 124],
    alignment: 'direct',
    note: 'Integrated retrieval and transfer practice across the three existing Measurement standards: vectors and bearings, trigonometry, perimeter and area, and prism volume. The challenge reinforces indicators already taught in the focused missions; it does not claim additional curriculum coverage.'
  },
  {
    missionId: 'gh-core-ss1-statistical-investigation-mastery',
    curriculumYear: 'SHS 1',
    strand: '4 · Making Sense of and Using Data',
    subStrand: '1 · Statistical Reasoning and Its Application in Real Life',
    contentStandardIds: ['1.4.1.CS.1', '1.4.1.CS.2', '1.4.1.CS.3'],
    learningOutcomeIds: ['1.4.1.LO.1', '1.4.1.LO.2', '1.4.1.LO.3'],
    learningIndicatorIds: ['1.4.1.LI.1', '1.4.1.LI.2', '1.4.1.LI.3', '1.4.3.LI.2'],
    printedPages: [126, 147],
    alignment: 'direct',
    note: 'Integrated application across data classification and collection, organisation/presentation, descriptive statistics and a school-community investigation report. The unusual descriptive-statistics reference 1.4.3.LI.2 is preserved exactly as printed on page 138 within Statistical Reasoning; no additional Data sub-strand or unsupported content standard is asserted. The mission reinforces existing scope and does not claim extra curriculum coverage.'
  },
  {
    missionId: 'gh-core-ss1-real-number-mastery-challenge',
    curriculumYear: 'SHS 1',
    strand: '1 · Numbers for Everyday Life',
    subStrand: '1 · Real Number System',
    contentStandardIds: ['1.1.1.CS.1', '1.1.1.CS.2'],
    learningOutcomeIds: ['1.1.1.LO.1', '1.1.1.LO.2'],
    learningIndicatorIds: ['1.1.1.LI.1', '1.1.1.LI.2', '1.1.1.LI.3'],
    printedPages: [26, 37],
    alignment: 'direct',
    note: 'Integrated retrieval and transfer practice across number-family classification and ordering, closure and operation properties, set notation, Venn diagrams, survey calculations and De Morgan’s laws. It reinforces the two existing Real Number System content standards and their outcomes; it does not claim additional curriculum coverage.'
  },

  {
    missionId: 'gh-core-ss1-proportional-reasoning-mastery',
    curriculumYear: 'SHS 1',
    strand: '1 · Numbers for Everyday Life',
    subStrand: '2 · Proportional Reasoning',
    contentStandardIds: ['1.1.2.CS.1', '1.1.2.CS.2'],
    learningOutcomeIds: ['1.1.2.LO.1', '1.1.2.LO.2'],
    learningIndicatorIds: ['1.1.2.LI.1', '1.1.2.LI.2'],
    printedPages: [41, 50],
    alignment: 'direct',
    note: 'Integrated retrieval and transfer across the two SHS 1 Proportional Reasoning standards and both learning outcomes. NaCCA reuses the printed indicator labels 1.1.2.LI.1 and 1.1.2.LI.2 under each content standard; this mapping lists the unique printed labels once while covering both contexts. The mission reinforces the existing four-indicator scope and does not claim additional curriculum coverage. SHS 2 ratios and rates are excluded.'
  },

 ];

export const getGhanaMissionAlignment = (missionId: string) =>
  GHANA_CORE_MATH_SS1_ALIGNMENT.find(item => item.missionId === missionId);
