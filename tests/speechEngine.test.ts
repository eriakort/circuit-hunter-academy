import { describe, it, expect } from 'bun:test';
import {
  normalizeItalian,
  levenshteinDistance,
  stringSimilarity,
  scorePronunciation
} from '../src/speech/speechEngine';

describe('Speech Engine - Italian Normalization & Phonetic Scoring', () => {
  it('normalizes Italian accents and punctuation correctly', () => {
    expect(normalizeItalian('Ciao, come stai?')).toBe('ciao come stai');
    expect(normalizeItalian('Vorrei un caffè macchiato, per favore!')).toBe('vorrei un caffe macchiato per favore');
    expect(normalizeItalian('È bellissimo!')).toBe('e bellissimo');
  });

  it('calculates levenshtein distances and string similarities accurately', () => {
    expect(levenshteinDistance('pizza', 'pizza')).toBe(0);
    expect(stringSimilarity('pizza', 'pizza')).toBe(1);

    expect(levenshteinDistance('buongiorno', 'buonjiorno')).toBe(1);
    expect(stringSimilarity('buongiorno', 'buonjiorno')).toBeGreaterThan(0.85);
  });

  it('evaluates pronunciation accurately', () => {
    const target = 'Buongiorno, vorrei un cornetto alla crema';
    const spokenExact = 'Buongiorno, vorrei un cornetto alla crema';
    const resExact = scorePronunciation(spokenExact, target);

    expect(resExact.passed).toBe(true);
    expect(resExact.score).toBeGreaterThanOrEqual(95);
    expect(resExact.words.every(w => w.matched)).toBe(true);

    const spokenClose = 'Buongiorno vorrei un corneto ala crema';
    const resClose = scorePronunciation(spokenClose, target);
    expect(resClose.score).toBeGreaterThan(70);

    const spokenWrong = 'Good morning I want some bread';
    const resWrong = scorePronunciation(spokenWrong, target);
    expect(resWrong.passed).toBe(false);
    expect(resWrong.score).toBeLessThan(50);
  });
});
