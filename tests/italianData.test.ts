import { describe, it, expect } from 'bun:test';
import { ITALIAN_MISSIONS } from '../src/data/italianData';
import { ITALIAN_CODEX } from '../src/data/italianCodex';
import { SUBJECTS, UNITS, ARCS, MISSIONS } from '../src/data/gameData';
import { getCompleteQuestionBank } from '../src/data/questionBank';
import { FORMULA_CARDS, SUBJECT_TOPICS } from '../src/data/formulaData';

describe('Italian Studies Curriculum & Data Verification', () => {
  it('registers Italian in SUBJECTS correctly', () => {
    const italianSub = SUBJECTS.find(s => s.id === 'italian');
    expect(italianSub).toBeDefined();
    expect(italianSub?.name[0]).toBe('Italian Studies');
    expect(italianSub?.name[1]).toBe('Lingua Italiana');
  });

  it('verifies all Italian missions have complete structure and CEFR coverage', () => {
    expect(ITALIAN_MISSIONS.length).toBeGreaterThanOrEqual(7);

    const a1Missions = ITALIAN_MISSIONS.filter(m => m.id.startsWith('it_a1'));
    const a2Missions = ITALIAN_MISSIONS.filter(m => m.id.startsWith('it_a2'));
    const b1Missions = ITALIAN_MISSIONS.filter(m => m.id.startsWith('it_b1'));

    expect(a1Missions.length).toBeGreaterThanOrEqual(3);
    expect(a2Missions.length).toBeGreaterThanOrEqual(2);
    expect(b1Missions.length).toBeGreaterThanOrEqual(2);

    ITALIAN_MISSIONS.forEach(m => {
      expect(m.id).toBeDefined();
      expect(m.title).toBeDefined();
      expect(m.scenes.length).toBeGreaterThan(0);
      expect(m.quiz.length).toBeGreaterThanOrEqual(2);

      // Verify quiz format convention: a[0] is the correct answer and not empty
      m.quiz.forEach(q => {
        expect(q.q).toBeDefined();
        expect(q.a.length).toBeGreaterThanOrEqual(2);
        expect(q.a[0]).toBeDefined();
        expect(q.why).toBeDefined();
      });

      // Verify learning definition if present
      if (m.learning) {
        expect(m.learning.version).toBe(1);
        expect(m.learning.objectives.length).toBeGreaterThan(0);
        expect(m.learning.concepts.length).toBeGreaterThan(0);
      }
    });
  });

  it('verifies Italian units and arcs exist in gameData', () => {
    const italianUnits = UNITS.filter(u => u.subject === 'italian');
    expect(italianUnits.length).toBe(11); // A1, A2, B1 + 8 grammar units

    const italianArcs = ARCS.filter(a => a.subject === 'italian');
    expect(italianArcs.length).toBe(11);

    const italianMissionsInGame = MISSIONS.filter(m => m.id.startsWith('it_'));
    expect(italianMissionsInGame.length).toBe(ITALIAN_MISSIONS.length);
  });

  it('verifies question bank indexes Italian questions', () => {
    const bank = getCompleteQuestionBank();
    const italianQuestions = bank.filter(q => q.subject === 'italian');
    expect(italianQuestions.length).toBeGreaterThanOrEqual(15);
  });

  it('verifies Italian formula / grammar cards and topics', () => {
    expect(SUBJECT_TOPICS.italian).toBeDefined();
    expect(SUBJECT_TOPICS.italian.length).toBeGreaterThanOrEqual(5);

    const italianCards = FORMULA_CARDS.filter(c => c.subject === 'italian');
    expect(italianCards.length).toBeGreaterThanOrEqual(5);
  });

  it('verifies Italian codex entries', () => {
    expect(ITALIAN_CODEX.length).toBeGreaterThanOrEqual(10);
    ITALIAN_CODEX.forEach(entry => {
      expect(entry.length).toBe(5);
      expect(entry[1].length).toBeGreaterThan(0);
      expect(entry[2].length).toBeGreaterThan(0);
    });
  });
});
