import { describe, it, expect } from 'bun:test';
import { scorePronunciation } from '../src/speech/speechEngine';

describe('Italian Checkpoint & Oral Proficiency Suite', () => {
  it('tests phonetic scoring against expected Italian responses', () => {
    // A1 prompt
    const a1Expected = 'Buongiorno, come sta?';
    const a1Spoken = 'buongiorno come sta';
    const a1Score = scorePronunciation(a1Spoken, a1Expected);
    expect(a1Score.passed).toBe(true);
    expect(a1Score.score).toBeGreaterThanOrEqual(90);

    // A2 prompt
    const a2Expected = 'Ieri sono andata a Firenze';
    const a2Spoken = 'ieri sono andata a firenze';
    const a2Score = scorePronunciation(a2Spoken, a2Expected);
    expect(a2Score.passed).toBe(true);
    expect(a2Score.score).toBeGreaterThanOrEqual(90);

    // B1 prompt
    const b1Expected = 'Penso che tu abbia ragione';
    const b1Spoken = 'penso che tu abbia ragione';
    const b1Score = scorePronunciation(b1Spoken, b1Expected);
    expect(b1Score.passed).toBe(true);
    expect(b1Score.score).toBeGreaterThanOrEqual(90);
  });

  it('validates that imperfect pronunciation still yields actionable scoring', () => {
    const expected = 'Vorrei un caffe e un cornetto per favore';
    const spokenSlightAccent = 'vorei un cafe e un corneto per favore';
    const score = scorePronunciation(spokenSlightAccent, expected);
    expect(score.score).toBeGreaterThan(70);
    expect(score.passed).toBe(true);
  });

  it('verifies Italian practice phrases cover A1, A2, and B1 levels', async () => {
    const { ITALIAN_PRACTICE_PHRASES } = await import('../src/components/ItalianLab');
    expect(ITALIAN_PRACTICE_PHRASES.length).toBeGreaterThanOrEqual(10);

    const a1Phrases = ITALIAN_PRACTICE_PHRASES.filter(p => p.level === 'A1');
    const a2Phrases = ITALIAN_PRACTICE_PHRASES.filter(p => p.level === 'A2');
    const b1Phrases = ITALIAN_PRACTICE_PHRASES.filter(p => p.level === 'B1');

    expect(a1Phrases.length).toBeGreaterThanOrEqual(3);
    expect(a2Phrases.length).toBeGreaterThanOrEqual(3);
    expect(b1Phrases.length).toBeGreaterThanOrEqual(3);

    ITALIAN_PRACTICE_PHRASES.forEach(phrase => {
      expect(phrase.targetIt).toBeDefined();
      expect(phrase.translationEn).toBeDefined();
      expect(phrase.phoneticHint).toBeDefined();
    });
  });
});
