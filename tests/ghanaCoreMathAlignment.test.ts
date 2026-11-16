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
    expect(number?.printedPages).toEqual([28, 29]);

    const percentages = getGhanaMissionAlignment('gh-core-ss1-fractions-percentages');
    expect(percentages?.curriculumYear).toBe('SHS 1');
    expect(percentages?.contentStandardIds).toContain('1.1.2.CS.2');
    expect(percentages?.learningIndicatorIds).toEqual(['1.1.2.LI.1', '1.1.2.LI.2']);
  });

  test('labels ratio and rate as an SHS 2 extension rather than SS1 coverage', () => {
    const ratio = getGhanaMissionAlignment('gh-core-ss1-ratio-rate');
    expect(ratio?.curriculumYear).toBe('SHS 2');
    expect(ratio?.alignment).toBe('cross-year-extension');
    expect(ratio?.contentStandardIds).toEqual(['2.1.2.CS.2']);
    expect(ratio?.learningIndicatorIds).toEqual(['2.1.2.LI.1', '2.1.2.LI.2']);
    expect(ratio?.note).toContain('do not count it as evidence of SHS 1 curriculum coverage');
  });

  test('maps sets, Venn diagrams and survey work to the separate SHS 1 set outcome', () => {
    const sets = getGhanaMissionAlignment('gh-core-ss1-sets-surveys');
    expect(sets?.curriculumYear).toBe('SHS 1');
    expect(sets?.contentStandardIds).toEqual(['1.1.1.CS.2']);
    expect(sets?.learningOutcomeIds).toEqual(['1.1.1.LO.2']);
    expect(sets?.learningIndicatorIds).toEqual(['1.1.1.LI.1', '1.1.1.LI.2', '1.1.1.LI.3']);
    expect(sets?.printedPages).toEqual([36, 37]);
  });
});
