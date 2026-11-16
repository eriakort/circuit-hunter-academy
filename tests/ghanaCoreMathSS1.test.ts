import { describe, expect, test } from 'bun:test';
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
    expect(GHANA_CORE_MATH_SS1_ARCS).toHaveLength(3);
    expect(GHANA_CORE_MATH_SS1_ARCS.every(arc => arc.subject === 'ghcoremath')).toBe(true);
  });

  test('contains unique pilot missions with valid local arc references', () => {
    const ids = GHANA_CORE_MATH_SS1_MISSIONS.map(mission => mission.id);
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
    expect(text).not.toContain('Matematica');
    expect(text).not.toContain('Lingua Italiana');
  });
});
