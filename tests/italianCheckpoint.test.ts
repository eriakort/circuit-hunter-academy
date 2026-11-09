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
});
