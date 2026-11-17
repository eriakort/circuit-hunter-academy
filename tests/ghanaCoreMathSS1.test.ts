import { describe, expect, test } from 'bun:test';
import { ARCS, MISSIONS, SUBJECTS, UNITS } from '../src/data/gameData';
import {
  GHANA_CORE_MATH_SS1_ARCS,
  GHANA_CORE_MATH_SS1_MISSIONS,
  GHANA_CORE_MATH_SS1_UNIT,
  GHANA_CORE_MATH_SUBJECT
} from '../src/data/ghanaCoreMathSS1Data';

describe('Ghana NaCCA SHS 1 Core Mathematics pilot', () => {
  test('uses a dedicated subject and curriculum-specific unit and arcs', () => {
    expect(GHANA_CORE_MATH_SUBJECT.id).toBe('ghcoremath');
    expect(GHANA_CORE_MATH_SS1_UNIT.subject).toBe('ghcoremath');
    expect(GHANA_CORE_MATH_SS1_ARCS).toHaveLength(11);
    expect(GHANA_CORE_MATH_SS1_ARCS.every(arc => arc.subject === 'ghcoremath')).toBe(true);
  });

  test('contains unique pilot missions with valid local arc references', () => {
    const ids = GHANA_CORE_MATH_SS1_MISSIONS.map(mission => mission.id);
    expect(ids).toHaveLength(14);
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids.every(id => id.startsWith('gh-core-ss1-'))).toBe(true);
    expect(GHANA_CORE_MATH_SS1_MISSIONS.every(mission => mission.arc >= 0 && mission.arc < GHANA_CORE_MATH_SS1_ARCS.length)).toBe(true);
  });

  test('provides complete English teaching scenes and four-option checks', () => {
    for (const mission of GHANA_CORE_MATH_SS1_MISSIONS) {
      expect(mission.scenes.length).toBeGreaterThanOrEqual(4);
      expect(mission.quiz).toHaveLength(4);
      for (const question of mission.quiz) {
        expect(question.a).toHaveLength(4);
        expect(question.q).toBeTypeOf('string');
        expect(question.why).toBeTypeOf('string');
      }
    }
  });

  test('uses Ghanaian practical contexts without Italian-language fallback', () => {
    const text = JSON.stringify(GHANA_CORE_MATH_SS1_MISSIONS);
    expect(text).toContain('GH₵');
    expect(text).toContain('Kumasi');
    expect(text).toContain('trotro');
    expect(text).toContain('Venn diagrams');
    expect(text).toContain('De Morgan');
    expect(text).toContain('simple interest');
    expect(text).toContain('commission');
    expect(text).toContain('distributive property');
    expect(text).toContain('variables');
    expect(text).toContain('relations and functions');
    expect(text).toContain('mapping rule');
    expect(text).toContain('linear function');
    expect(text).toContain('Pythagoras’ theorem');
    expect(text).toContain('parallel lines');
    expect(text).toContain('polygon');
    expect(text).toContain('bearing');
    expect(text).toContain('magnitude and direction');
    expect(text).toContain('Primary data');
    expect(text).toContain('Secondary data');
    expect(text).toContain('Discrete data');
    expect(text).toContain('Continuous data');
    expect(text).toContain('Nominal data');
    expect(text).toContain('Ordinal data');
    expect(text).toContain('grouped');
    expect(text).toContain('The Data Detective');
    expect(text).toContain('The Evidence Expedition');
    expect(text).toContain('The Data Display Studio');
    expect(text).toContain('The School Insight Project');
    expect(text).toContain('The Chance Compass');
    expect(text).toContain('The Closure Forge');
    expect(text).toContain('commutative');
    expect(text).toContain('multiplicative inverse');
    expect(text).toContain('closed under addition');
    expect(text).toContain('independent events');
    expect(text).toContain('sample space');
    expect(text).toContain('with replacement');
    expect(text).toContain('sample');
    expect(text).toContain('recommendations');
    expect(text).toContain('anonymised summary');
    expect(text).toContain('frequency table');
    expect(text).toContain('multiple bar graph');
    expect(text).toContain('infographic');
    expect(text).toContain('3D graphs');
    expect(text).toContain('Focus groups');
    expect(text).toContain('Oral histories');
    expect(text).toContain('Quantitative methods');
    expect(text).toContain('Qualitative methods');
    expect(text).not.toContain('Matematica');
    expect(text).not.toContain('Lingua Italiana');
  });
});

test('Ghana SS1 pilot is registered in the playable catalogue with stable local arc mapping', () => {
  expect(SUBJECTS.some(subject => subject.id === 'ghcoremath')).toBe(true);
  const unitIndex = UNITS.findIndex(unit => unit.subject === 'ghcoremath');
  expect(unitIndex).toBeGreaterThanOrEqual(0);
  const registeredArcs = ARCS.map((arc, index) => ({ arc, index })).filter(item => item.arc.subject === 'ghcoremath');
  expect(registeredArcs.length).toBe(GHANA_CORE_MATH_SS1_ARCS.length);
  const registeredMissions = MISSIONS.filter(mission => ARCS[mission.arc]?.subject === 'ghcoremath');
  expect(registeredMissions.map(mission => mission.id)).toEqual(GHANA_CORE_MATH_SS1_MISSIONS.map(mission => mission.id));
  expect(registeredMissions.every(mission => ARCS[mission.arc]?.unit === unitIndex)).toBe(true);
});
