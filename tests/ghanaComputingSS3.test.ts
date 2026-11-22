import { describe, expect, test } from 'bun:test';
import { ARCS, MISSIONS, SUBJECTS, UNITS } from '../src/data/gameData';
import {
  GHANA_COMPUTING_SS3_ARCS,
  GHANA_COMPUTING_SS3_MISSIONS,
  GHANA_COMPUTING_SS3_SUBJECT,
  GHANA_COMPUTING_SS3_UNITS
} from '../src/data/ghanaComputingSS3Data';
import { GHANA_COMPUTING_SS3_ALIGNMENT } from '../src/data/ghanaComputingSS3Alignment';
import { GHANA_COMPUTING_VISUAL_KEYS, getGhanaComputingVisual } from '../src/data/ghanaComputingVisuals';
import { getCurriculumSubjects } from '../src/data/curriculumSubjects';
import { ICONS } from '../src/data/icons';

const text = (v: any): string[] => (Array.isArray(v) ? v.flatMap(text) : typeof v === 'string' ? [v] : []);

describe('Ghana NaCCA SHS 3 Computing', () => {
  test('has a dedicated subject with two strands and six sub-strand arcs', () => {
    expect(GHANA_COMPUTING_SS3_SUBJECT.id).toBe('ghcomputing3');
    expect(GHANA_COMPUTING_SS3_UNITS).toHaveLength(2);
    expect(GHANA_COMPUTING_SS3_ARCS).toHaveLength(6);
    expect(GHANA_COMPUTING_SS3_MISSIONS).toHaveLength(22);
    expect(SUBJECTS.some(s => s.id === 'ghcomputing3')).toBe(true);
    expect(getCurriculumSubjects('ghshs3', 'ghana-nacca').map(s => s.id)).toEqual(['ghcoremath3', 'ghcomputing3']);
  });

  test('every sub-strand has at least two missions with unique ids', () => {
    const ids = GHANA_COMPUTING_SS3_MISSIONS.map(m => m.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids.every(id => id.startsWith('gh-comp-ss3-'))).toBe(true);
    for (let arc = 0; arc < 6; arc++) {
      expect(GHANA_COMPUTING_SS3_MISSIONS.filter(m => m.arc === arc).length).toBeGreaterThanOrEqual(2);
    }
  });

  test('missions are registered with the right subject, arcs and units', () => {
    const registered = MISSIONS.filter(m => m.id.startsWith('gh-comp-ss3-'));
    expect(registered).toHaveLength(22);
    for (const m of registered) {
      const arc = ARCS[m.arc];
      expect(arc.subject).toBe('ghcomputing3');
      expect(UNITS[arc.unit!].subject).toBe('ghcomputing3');
    }
  });

  test('every mission has teaching scenes, a demon, a battle and four-option quiz questions', () => {
    for (const m of GHANA_COMPUTING_SS3_MISSIONS) {
      expect(m.scenes.length).toBeGreaterThanOrEqual(4);
      expect(m.scenes.some((s: any) => s.who === 'd')).toBe(true);
      expect(m.scenes.some((s: any) => s.type === 'battle')).toBe(true);
      expect(m.quiz.length).toBeGreaterThanOrEqual(4);
      for (const q of m.quiz) {
        expect(q.a).toHaveLength(4);
        expect(new Set(q.a.map(String)).size).toBe(4);
      }
    }
  });

  test('every lesson visual exists and every sort item icon exists', () => {
    for (const m of GHANA_COMPUTING_SS3_MISSIONS) {
      for (const s of m.scenes as any[]) {
        if (s.who === 's' && s.vis) expect(GHANA_COMPUTING_VISUAL_KEYS).toContain(s.vis);
        for (const item of s.items || []) expect(ICONS[item.i]).toBeDefined();
      }
    }
    for (const key of GHANA_COMPUTING_VISUAL_KEYS) expect(getGhanaComputingVisual(key)).toContain('<svg');
  });

  test('content is English only', () => {
    for (const m of GHANA_COMPUTING_SS3_MISSIONS) {
      for (const s of m.scenes as any[]) {
        for (const v of [s.text, s.title, s.hint, ...(s.steps || []), ...(s.cats || []), ...(s.rounds || []).flatMap((r: any) => [r.code, r.out, r.why]), ...(s.items || []).flatMap((i: any) => [i.n, i.why])]) {
          if (Array.isArray(v)) expect(v[0]).toBe(v[1]);
        }
      }
      expect(text(m.quiz.map(q => [q.q, q.a, q.why])).join(' ')).not.toMatch(/[àèéìòù]/i);
    }
  });

  test('alignment covers every mission with an indicator code and page range', () => {
    const ids = GHANA_COMPUTING_SS3_MISSIONS.map(m => m.id).sort();
    expect(GHANA_COMPUTING_SS3_ALIGNMENT.map(a => a.missionId).sort()).toEqual(ids);
    const all = new Set(GHANA_COMPUTING_SS3_ALIGNMENT.flatMap(a => a.indicators));
    for (const code of ['3.1.1.LI.1', '3.1.1.LI.2', '3.1.1.LI.3', '3.1.2.LI.1', '3.1.2.LI.2', '3.1.3.LI.1', '3.1.3.LI.2', '3.1.3.LI.3', '3.2.1.LI.1', '3.2.2.LI.1', '3.2.2.LI.2', '3.2.3.LI.1', '3.2.3.LI.2', '3.2.3.LI.3']) {
      expect(all.has(code)).toBe(true);
    }
    for (const a of GHANA_COMPUTING_SS3_ALIGNMENT) expect(a.pages).toMatch(/^pp\. \d+–\d+$/);
  });
});
