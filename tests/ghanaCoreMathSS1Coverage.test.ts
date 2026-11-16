import { describe, expect, test } from 'bun:test';
import { GHANA_CORE_MATH_SS1_MISSIONS } from '../src/data/ghanaCoreMathSS1Data';
import {
  GHANA_CORE_MATH_SS1_COVERAGE,
  GHANA_NACCA_SS1_SCOPE_SOURCE,
  getGhanaCoreMathSS1CoverageSummary
} from '../src/data/ghanaCoreMathSS1Coverage';

describe('Ghana SHS 1 Core Mathematics coverage audit', () => {
  test('records the official NaCCA scope-and-sequence source', () => {
    expect(GHANA_NACCA_SS1_SCOPE_SOURCE.publisher).toContain('NaCCA');
    expect(GHANA_NACCA_SS1_SCOPE_SOURCE.publicationDate).toBe('September 2023');
    expect(GHANA_NACCA_SS1_SCOPE_SOURCE.printedPage).toBe(22);
    expect(GHANA_NACCA_SS1_SCOPE_SOURCE.url).toContain('nacca.gov.gh');
  });

  test('reconciles all eight SHS 1 sub-strands to the official scope totals', () => {
    const summary = getGhanaCoreMathSS1CoverageSummary();
    expect(summary).toMatchObject({
      contentStandards: 16,
      learningOutcomes: 17,
      learningIndicators: 45,
      subStrands: 8
    });
  });

  test('marks only the two pilot sub-strands as partial', () => {
    const summary = getGhanaCoreMathSS1CoverageSummary();
    expect(summary.partial).toBe(5);
    expect(summary.notStarted).toBe(3);
    expect(GHANA_CORE_MATH_SS1_COVERAGE.filter(item => item.status === 'partial').map(item => item.subStrand)).toEqual([
      'Real Number System',
      'Proportional Reasoning',
      'Applications of Expressions, Equations and Inequalities',
      'Patterns and Relationships',
      'Spatial Sense'
    ]);
  });

  test('references only existing pilot missions', () => {
    const missionIds = new Set(GHANA_CORE_MATH_SS1_MISSIONS.map(mission => mission.id));
    for (const item of GHANA_CORE_MATH_SS1_COVERAGE) {
      for (const missionId of item.pilotMissionIds) {
        expect(missionIds.has(missionId)).toBe(true);
      }
      expect(item.status === 'not-started').toBe(item.pilotMissionIds.length === 0);
    }
  });

  test('counts the expression mission only in its matching SHS 1 algebra sub-strand', () => {
    const algebra = GHANA_CORE_MATH_SS1_COVERAGE.find(item => item.subStrand === 'Applications of Expressions, Equations and Inequalities');
    expect(algebra?.status).toBe('partial');
    expect(algebra?.pilotMissionIds).toEqual(['gh-core-ss1-algebraic-expressions']);
  });

  test('counts the spatial sense mission only in its matching Geometry Around Us sub-strand', () => {
    const spatial = GHANA_CORE_MATH_SS1_COVERAGE.find(item => item.subStrand === 'Spatial Sense');
    expect(spatial?.status).toBe('partial');
    expect(spatial?.pilotMissionIds).toEqual(['gh-core-ss1-spatial-sense']);
  });

  test('does not count the SHS 2 ratio extension as SHS 1 coverage', () => {
    const proportional = GHANA_CORE_MATH_SS1_COVERAGE.find(item => item.subStrand === 'Proportional Reasoning');
    expect(proportional?.pilotMissionIds).not.toContain('gh-core-ss1-ratio-rate');
  });
});
