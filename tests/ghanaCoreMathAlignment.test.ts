import { describe, expect, test } from 'bun:test';
import { GHANA_CORE_MATH_SS1_MISSIONS } from '../src/data/ghanaCoreMathSS1Data';
import {
  GHANA_CORE_MATH_SS1_ALIGNMENT,
  GHANA_NACCA_MATHEMATICS_SOURCE,
  getGhanaMissionAlignment
} from '../src/data/ghanaCoreMathSS1Alignment';

describe('Ghana Core Mathematics NaCCA traceability', () => {
  test('records the official NaCCA curriculum source', () => {
    expect(GHANA_NACCA_MATHEMATICS_SOURCE.publisher).toContain('NaCCA');
    expect(GHANA_NACCA_MATHEMATICS_SOURCE.publicationDate).toBe('September 2023');
    expect(GHANA_NACCA_MATHEMATICS_SOURCE.url).toContain('nacca.gov.gh');
  });

  test('maps every pilot mission exactly once', () => {
    const missionIds = GHANA_CORE_MATH_SS1_MISSIONS.map(mission => mission.id);
    const mappedIds = GHANA_CORE_MATH_SS1_ALIGNMENT.map(item => item.missionId);
    expect(mappedIds).toHaveLength(missionIds.length);
    expect(new Set(mappedIds).size).toBe(mappedIds.length);
    expect(mappedIds.sort()).toEqual([...missionIds].sort());
    for (const missionId of missionIds) {
      expect(getGhanaMissionAlignment(missionId)).toBeDefined();
    }
  });

  test('maps number-system and percentage missions to SHS 1 indicators', () => {
    const number = getGhanaMissionAlignment('gh-core-ss1-number-sets');
    expect(number?.curriculumYear).toBe('SHS 1');
    expect(number?.contentStandardIds).toContain('1.1.1.CS.1');
    expect(number?.learningIndicatorIds).toEqual(['1.1.1.LI.2']);
    expect(number?.printedPages).toEqual([26, 31]);

    const percentages = getGhanaMissionAlignment('gh-core-ss1-fractions-percentages');
    expect(percentages?.curriculumYear).toBe('SHS 1');
    expect(percentages?.contentStandardIds).toContain('1.1.2.CS.2');
    expect(percentages?.learningIndicatorIds).toEqual(['1.1.2.LI.1']);
  });

  test('maps household percentage change to the SHS 1 proportional-reasoning indicator', () => {
    const budget = getGhanaMissionAlignment('gh-core-ss1-percentage-change-finance');
    expect(budget?.curriculumYear).toBe('SHS 1');
    expect(budget?.contentStandardIds).toEqual(['1.1.2.CS.2']);
    expect(budget?.learningOutcomeIds).toEqual(['1.1.2.LO.2']);
    expect(budget?.learningIndicatorIds).toEqual(['1.1.2.LI.2']);
    expect(budget?.printedPages).toEqual([48, 49]);
  });

  test('maps linear equations, inequalities and formula rearrangement to SHS 1 Algebraic Reasoning', () => {
    const equations = getGhanaMissionAlignment('gh-core-ss1-linear-equations-inequalities');
    expect(equations?.curriculumYear).toBe('SHS 1');
    expect(equations?.contentStandardIds).toEqual(['1.2.1.CS.2']);
    expect(equations?.learningOutcomeIds).toEqual(['1.2.1.LO.2']);
    expect(equations?.learningIndicatorIds).toEqual(['1.2.1.LI.1', '1.2.1.LI.2']);
    expect(equations?.printedPages).toEqual([62, 66]);
    expect(equations?.note).toContain('quadratic factorisation');
  });

  test('maps quadratic factorisation, perfect squares and algebraic fractions to SHS 1 indicators', () => {
    const factorisation = getGhanaMissionAlignment('gh-core-ss1-quadratic-factorisation-algebraic-fractions');
    expect(factorisation?.curriculumYear).toBe('SHS 1');
    expect(factorisation?.contentStandardIds).toEqual(['1.2.1.CS.1']);
    expect(factorisation?.learningOutcomeIds).toEqual(['1.2.1.LO.1']);
    expect(factorisation?.learningIndicatorIds).toEqual(['1.2.1.LI.2', '1.2.1.LI.3', '1.2.1.LI.4']);
    expect(factorisation?.printedPages).toEqual([57, 61]);
    expect(factorisation?.note).toContain('zero or undefined');
  });

  test('maps fraction operations and inverses to the SHS 1 proportional-reasoning standard', () => {
    const fractions = getGhanaMissionAlignment('gh-core-ss1-fraction-operations');
    expect(fractions?.curriculumYear).toBe('SHS 1');
    expect(fractions?.contentStandardIds).toEqual(['1.1.2.CS.1']);
    expect(fractions?.learningOutcomeIds).toEqual(['1.1.2.LO.1']);
    expect(fractions?.learningIndicatorIds).toEqual(['1.1.2.LI.1', '1.1.2.LI.2']);
    expect(fractions?.printedPages).toEqual([44, 46]);
  });

  test('maps relations and functions to the verified SHS 1 Patterns and Relationships standard', () => {
    const patterns = getGhanaMissionAlignment('gh-core-ss1-patterns-functions');
    expect(patterns?.curriculumYear).toBe('SHS 1');
    expect(patterns?.contentStandardIds).toEqual(['1.2.2.CS.1']);
    expect(patterns?.learningOutcomeIds).toEqual(['1.2.2.LO.1']);
    expect(patterns?.learningIndicatorIds).toEqual(['1.2.2.LI.1', '1.2.2.LI.2']);
    expect(patterns?.printedPages).toEqual([74, 78]);
    expect(patterns?.note).toContain('second content standard');
  });

  test('labels ratio and rate as an SHS 2 extension rather than SS1 coverage', () => {
    const ratio = getGhanaMissionAlignment('gh-core-ss1-ratio-rate');
    expect(ratio?.curriculumYear).toBe('SHS 2');
    expect(ratio?.alignment).toBe('cross-year-extension');
    expect(ratio?.contentStandardIds).toEqual(['2.1.2.CS.2']);
    expect(ratio?.learningIndicatorIds).toEqual(['2.1.2.LI.1', '2.1.2.LI.2']);
    expect(ratio?.note).toContain('do not count it as evidence of SHS 1 curriculum coverage');
  });

  test('maps financial mathematics to the SHS 1 personal-finance indicators', () => {
    const finance = getGhanaMissionAlignment('gh-core-ss1-financial-mathematics');
    expect(finance?.curriculumYear).toBe('SHS 1');
    expect(finance?.contentStandardIds).toContain('1.1.2.CS.2');
    expect(finance?.learningIndicatorIds).toEqual(['1.1.2.LI.2']);
    expect(finance?.printedPages).toEqual([47, 49]);
  });

  test('maps sets, Venn diagrams and survey work to the separate SHS 1 set outcome', () => {
    const sets = getGhanaMissionAlignment('gh-core-ss1-sets-surveys');
    expect(sets?.curriculumYear).toBe('SHS 1');
    expect(sets?.contentStandardIds).toEqual(['1.1.1.CS.2']);
    expect(sets?.learningOutcomeIds).toEqual(['1.1.1.LO.2']);
    expect(sets?.learningIndicatorIds).toEqual(['1.1.1.LI.1', '1.1.1.LI.2', '1.1.1.LI.3']);
    expect(sets?.printedPages).toEqual([36, 37]);
  });
  test('maps the introductory expression mission only to its verified SHS 1 indicator', () => {
    const algebra = getGhanaMissionAlignment('gh-core-ss1-algebraic-expressions');
    expect(algebra?.curriculumYear).toBe('SHS 1');
    expect(algebra?.contentStandardIds).toEqual(['1.2.1.CS.1']);
    expect(algebra?.learningOutcomeIds).toEqual(['1.2.1.LO.1']);
    expect(algebra?.learningIndicatorIds).toEqual(['1.2.1.LI.1']);
    expect(algebra?.printedPages).toEqual([52, 57]);
    expect(algebra?.note).toContain('not claimed as covered');
  });
  test('maps straight-line geometry to the second SHS 1 Patterns and Relationships standard', () => {
    const lines = getGhanaMissionAlignment('gh-core-ss1-straight-lines-distance');
    expect(lines?.curriculumYear).toBe('SHS 1');
    expect(lines?.contentStandardIds).toEqual(['1.2.2.CS.2']);
    expect(lines?.learningOutcomeIds).toEqual(['1.2.2.LO.2']);
    expect(lines?.learningIndicatorIds).toEqual(['1.2.2.LI.1', '1.2.2.LI.2']);
    expect(lines?.printedPages).toEqual([80, 83]);
  });

  test('maps spatial sense to the official SHS 1 Geometry Around Us standard', () => {
    const spatial = getGhanaMissionAlignment('gh-core-ss1-spatial-sense');
    expect(spatial?.curriculumYear).toBe('SHS 1');
    expect(spatial?.contentStandardIds).toEqual(['1.3.1.CS.1']);
    expect(spatial?.learningOutcomeIds).toEqual(['1.3.1.LO.1']);
    expect(spatial?.learningIndicatorIds).toEqual(['1.3.1.LI.1', '1.3.1.LI.2', '1.3.1.LI.3', '1.3.1.LI.4', '1.3.1.LI.5']);
    expect(spatial?.printedPages).toEqual([84, 100]);
  });

  test('maps the vectors and bearings mission to the first SHS 1 Measurement standard', () => {
    const measurement = getGhanaMissionAlignment('gh-core-ss1-vectors-bearings');
    expect(measurement?.curriculumYear).toBe('SHS 1');
    expect(measurement?.contentStandardIds).toEqual(['1.3.2.CS.1']);
    expect(measurement?.learningOutcomeIds).toEqual(['1.3.2.LO.1']);
    expect(measurement?.learningIndicatorIds).toEqual(['1.3.2.LI.1', '1.3.2.LI.2']);
    expect(measurement?.printedPages).toEqual([110, 112]);
    expect(measurement?.note).toContain('Trigonometry and area/perimeter standards are not claimed as covered');
  });

  test('maps quantitative and qualitative collection methods to the next NaCCA indicators', () => {
    const collection = getGhanaMissionAlignment('gh-core-ss1-statistical-data-collection-methods');
    expect(collection?.curriculumYear).toBe('SHS 1');
    expect(collection?.contentStandardIds).toEqual(['1.4.1.CS.1']);
    expect(collection?.learningOutcomeIds).toEqual(['1.4.1.LO.1']);
    expect(collection?.learningIndicatorIds).toEqual(['1.4.1.LI.2', '1.4.1.LI.3']);
    expect(collection?.printedPages).toEqual([133, 134]);
    expect(collection?.note).toContain('focus groups');
  });

  test('maps the first Statistical Reasoning standard and indicator to the SHS 1 mission', () => {
    const statistics = getGhanaMissionAlignment('gh-core-ss1-statistical-reasoning-data-types');
    expect(statistics?.curriculumYear).toBe('SHS 1');
    expect(statistics?.contentStandardIds).toEqual(['1.4.1.CS.1']);
    expect(statistics?.learningOutcomeIds).toEqual(['1.4.1.LO.1']);
    expect(statistics?.learningIndicatorIds).toEqual(['1.4.1.LI.1']);
    expect(statistics?.printedPages).toEqual([126, 133]);
    expect(statistics?.note).toContain('separate mission');
  });

  test('maps data organisation and presentation to the second Statistical Reasoning standard', () => {
    const presentation = getGhanaMissionAlignment('gh-core-ss1-statistical-data-organisation-presentation');
    expect(presentation?.curriculumYear).toBe('SHS 1');
    expect(presentation?.contentStandardIds).toEqual(['1.4.1.CS.2']);
    expect(presentation?.learningOutcomeIds).toEqual(['1.4.1.LO.2']);
    expect(presentation?.learningIndicatorIds).toEqual(['1.4.1.LI.2']);
    expect(presentation?.printedPages).toEqual([135, 138]);
    expect(presentation?.note).toContain('3D graphs/charts');
  });


  test('maps descriptive statistics and evidence-based inference to the SHS 1 Statistical Reasoning standard', () => {
    const averages = getGhanaMissionAlignment('gh-core-ss1-statistical-averages-inference');
    expect(averages?.curriculumYear).toBe('SHS 1');
    expect(averages?.contentStandardIds).toEqual(['1.4.1.CS.2']);
    expect(averages?.learningOutcomeIds).toEqual(['1.4.1.LO.2']);
    expect(averages?.learningIndicatorIds).toEqual(['1.4.3.LI.2']);
    expect(averages?.printedPages).toEqual([138, 141]);
    expect(averages?.subStrand).toContain('Statistical Reasoning');
    expect(averages?.note).toContain('1.4.3.LI.2');
    expect(averages?.note).toContain('no 1.4.3 content standard');
  });

  test('maps the school-community data project to the third NaCCA Statistical Reasoning standard', () => {
    const project = getGhanaMissionAlignment('gh-core-ss1-school-community-data-project');
    expect(project?.curriculumYear).toBe('SHS 1');
    expect(project?.contentStandardIds).toEqual(['1.4.1.CS.3']);
    expect(project?.learningOutcomeIds).toEqual(['1.4.1.LO.3']);
    expect(project?.learningIndicatorIds).toEqual(['1.4.1.LI.1', '1.4.1.LI.2']);
    expect(project?.printedPages).toEqual([147]);
    expect(project?.note).toContain('approved report');
  });


  test('maps probability and chance to the official SHS 1 NaCCA standard and all three indicators', () => {
    const probability = getGhanaMissionAlignment('gh-core-ss1-probability-chance');
    expect(probability?.curriculumYear).toBe('SHS 1');
    expect(probability?.contentStandardIds).toEqual(['1.4.2.CS.1']);
    expect(probability?.learningOutcomeIds).toEqual(['1.4.2.LO.1']);
    expect(probability?.learningIndicatorIds).toEqual(['1.4.2.LI.1', '1.4.2.LI.2', '1.4.2.LI.3']);
    expect(probability?.printedPages).toEqual([149, 152]);
    expect(probability?.note).toContain('Conditional probability is introduced only as prerequisite context');
  });


  test('maps real-number closure and operation properties to SHS 1 standard 1.1.1.CS.1', () => {
    const realNumbers = getGhanaMissionAlignment('gh-core-ss1-real-number-properties');
    expect(realNumbers?.curriculumYear).toBe('SHS 1');
    expect(realNumbers?.contentStandardIds).toEqual(['1.1.1.CS.1']);
    expect(realNumbers?.learningOutcomeIds).toEqual(['1.1.1.LO.1']);
    expect(realNumbers?.learningIndicatorIds).toEqual(['1.1.1.LI.1', '1.1.1.LI.3']);
    expect(realNumbers?.printedPages).toEqual([31, 33]);
    expect(realNumbers?.note).toContain('non-zero divisor condition');
  });


  test('maps trigonometry to the second SHS 1 Measurement standard', () => {
    const trigonometry = getGhanaMissionAlignment('gh-core-ss1-trigonometry');
    expect(trigonometry?.curriculumYear).toBe('SHS 1');
    expect(trigonometry?.contentStandardIds).toEqual(['1.3.2.CS.2']);
    expect(trigonometry?.learningOutcomeIds).toEqual(['1.3.2.LO.2']);
    expect(trigonometry?.learningIndicatorIds).toEqual(['1.3.2.LI.1', '1.3.2.LI.2', '1.3.2.LI.3']);
    expect(trigonometry?.printedPages).toEqual([114, 117]);
  });


  test('maps integrated measurement mastery to existing SHS 1 standards and indicators', () => {
    const mastery = getGhanaMissionAlignment('gh-core-ss1-measurement-mastery-challenge');
    expect(mastery?.curriculumYear).toBe('SHS 1');
    expect(mastery?.contentStandardIds).toEqual(['1.3.2.CS.1', '1.3.2.CS.2', '1.3.2.CS.3']);
    expect(mastery?.learningOutcomeIds).toEqual(['1.3.2.LO.1', '1.3.2.LO.2', '1.3.2.LO.3']);
    expect(mastery?.learningIndicatorIds).toEqual(['1.3.2.LI.1', '1.3.2.LI.2', '1.3.2.LI.3', '1.3.2.LI.4']);
    expect(mastery?.printedPages).toEqual([110, 124]);
    expect(mastery?.note).toContain('does not claim additional curriculum coverage');
  });

  test('maps prism volume to the fourth SHS 1 Measurement indicator', () => {
    const volume = getGhanaMissionAlignment('gh-core-ss1-prism-volume');
    expect(volume?.curriculumYear).toBe('SHS 1');
    expect(volume?.contentStandardIds).toEqual(['1.3.2.CS.3']);
    expect(volume?.learningOutcomeIds).toEqual(['1.3.2.LO.3']);
    expect(volume?.learningIndicatorIds).toEqual(['1.3.2.LI.4']);
    expect(volume?.printedPages).toEqual([124]);
    expect(volume?.note).toContain('triangular prisms');
  });

  test('maps compound interest and tax to the SHS 1 proportional-finance indicator', () => {
    const finance = getGhanaMissionAlignment('gh-core-ss1-compound-interest-tax');
    expect(finance?.curriculumYear).toBe('SHS 1');
    expect(finance?.contentStandardIds).toEqual(['1.1.2.CS.2']);
    expect(finance?.learningOutcomeIds).toEqual(['1.1.2.LO.2']);
    expect(finance?.learningIndicatorIds).toEqual(['1.1.2.LI.2']);
    expect(finance?.printedPages).toEqual([50]);
    expect(finance?.note).toContain('annual compound interest');
  });

  test('maps perimeter and area to the third SHS 1 Measurement standard', () => {
    const perimeterArea = getGhanaMissionAlignment('gh-core-ss1-perimeter-area');
    expect(perimeterArea?.curriculumYear).toBe('SHS 1');
    expect(perimeterArea?.contentStandardIds).toEqual(['1.3.2.CS.3']);
    expect(perimeterArea?.learningOutcomeIds).toEqual(['1.3.2.LO.3']);
    expect(perimeterArea?.learningIndicatorIds).toEqual(['1.3.2.LI.1', '1.3.2.LI.2', '1.3.2.LI.3']);
    expect(perimeterArea?.printedPages).toEqual([118, 123]);
    expect(perimeterArea?.note).toContain('1.3.2.LI.4');
  });

  test('maps the integrated mastery trial to existing SHS 1 indicators without claiming new coverage', () => {
    const mastery = getGhanaMissionAlignment('gh-core-ss1-integrated-mastery-trial');
    expect(mastery?.curriculumYear).toBe('SHS 1');
    expect(mastery?.contentStandardIds).toEqual(['1.1.2.CS.2', '1.2.1.CS.2', '1.3.2.CS.3', '1.4.1.CS.2']);
    expect(mastery?.alignment).toBe('direct');
    expect(mastery?.note).toContain('not a claim of additional curriculum coverage');
  });


});