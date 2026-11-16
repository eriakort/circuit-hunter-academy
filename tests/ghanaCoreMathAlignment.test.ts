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
    expect(percentages?.learningIndicatorIds).toEqual(['1.1.2.LI.1', '1.1.2.LI.2']);
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
    expect(finance?.learningIndicatorIds).toEqual(['1.1.2.LI.3', '1.1.2.LI.4']);
    expect(finance?.printedPages).toEqual([50, 52]);
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

});