import { describe, it, expect } from 'bun:test';
import { scorePronunciation } from '../src/speech/speechEngine';
import { ITALIAN_GRAMMAR_TOPICS } from '../src/data/italianGrammar';

describe('Italian Checkpoint & Oral Proficiency Suite', () => {
  it('tests phonetic scoring against expected Italian responses', () => {
    const a1Score = scorePronunciation('buongiorno come sta', 'Buongiorno, come sta?');
    expect(a1Score.passed).toBe(true);
    expect(a1Score.score).toBeGreaterThanOrEqual(90);

    const a2Score = scorePronunciation('ieri sono andata a firenze', 'Ieri sono andata a Firenze');
    expect(a2Score.passed).toBe(true);
    expect(a2Score.score).toBeGreaterThanOrEqual(90);

    const b1Score = scorePronunciation('penso che tu abbia ragione', 'Penso che tu abbia ragione');
    expect(b1Score.passed).toBe(true);
    expect(b1Score.score).toBeGreaterThanOrEqual(90);
  });

  it('validates that imperfect pronunciation still yields actionable scoring', () => {
    const score = scorePronunciation('vorei un cafe e un corneto per favore', 'Vorrei un caffe e un cornetto per favore');
    expect(score.score).toBeGreaterThan(70);
    expect(score.passed).toBe(true);
  });

  it('verifies Italian practice phrases cover A1, A2, and B1 levels', async () => {
    const { ITALIAN_PRACTICE_PHRASES } = await import('../src/components/ItalianLab');
    expect(ITALIAN_PRACTICE_PHRASES.length).toBeGreaterThanOrEqual(20);

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

  it('provides grammar-tagged speaking phrases for every topic and CEFR level', async () => {
    const { ITALIAN_PRACTICE_PHRASES } = await import('../src/components/ItalianLab');
    const validTopicIds = new Set(ITALIAN_GRAMMAR_TOPICS.map(topic => topic.id));
    const phraseIds = new Set<string>();

    for (const phrase of ITALIAN_PRACTICE_PHRASES) {
      expect(phraseIds.has(phrase.id)).toBe(false);
      phraseIds.add(phrase.id);
      if (phrase.grammarTopicId) {
        expect(validTopicIds.has(phrase.grammarTopicId)).toBe(true);
        expect(phrase.notes?.[0].trim()).toBeTruthy();
        expect(phrase.notes?.[1].trim()).toBeTruthy();
      }
    }

    for (const topic of ITALIAN_GRAMMAR_TOPICS) {
      for (const level of ['A1', 'A2', 'B1'] as const) {
        const phrase = ITALIAN_PRACTICE_PHRASES.find(item => item.grammarTopicId === topic.id && item.level === level);
        expect(phrase, topic.id + ' should have a ' + level + ' speaking phrase').toBeDefined();
      }
    }
  });
});
