import assert from 'node:assert/strict';
import { ITALIAN_GRAMMAR_ACTIVITIES, getGrammarActivities } from '../src/data/italianGrammarActivities';
const levels = ['A1', 'A2', 'B1'] as const;
const types = ['correct', 'order', 'translate', 'write'] as const;
const ids = new Set<string>();
assert.equal(ITALIAN_GRAMMAR_ACTIVITIES.length, 72);
const passatoProssimoA2Correction = getGrammarActivities('passato-prossimo', 'A2', 'correct')[0];
assert.ok(passatoProssimoA2Correction.source?.includes('Io ho andato a scuola ieri'), 'A2 correction should cover the common ho/sono auxiliary error');
assert.deepEqual(passatoProssimoA2Correction.acceptedAnswers, ['Io sono andato a scuola ieri.', 'Io sono andata a scuola ieri.']);
const reflexiveA2Translation = getGrammarActivities('reflexive', 'A2', 'translate')[0];
assert.deepEqual(reflexiveA2Translation.acceptedAnswers, ['Mi sono vestito rapidamente.', 'Mi sono vestita rapidamente.']);
const sentenceA2Translation = getGrammarActivities('sentence-building', 'A2', 'translate')[0];
assert.deepEqual(sentenceA2Translation.acceptedAnswers, ['Ho chiamato Giulia e le ho parlato.', 'Ho chiamato Giulia e ho parlato con lei.']);
const partitiveA2Translation = getGrammarActivities('partitive', 'A2', 'translate')[0];
assert.deepEqual(partitiveA2Translation.acceptedAnswers, ['Vuoi della verdura?', 'Vuoi delle verdure?']);
const articlesA2Write = getGrammarActivities('articles', 'A2', 'write')[0];
assert.equal(articlesA2Write.modelAnswer, 'Nel mio quartiere ci sono una piazza, un bar e delle case antiche.');
const articlesA2Order = getGrammarActivities('articles', 'A2', 'order')[0];
assert.equal(articlesA2Order.modelAnswer, 'Ho degli amici simpatici e generosi.');
const partitiveA2Write = getGrammarActivities('partitive', 'A2', 'write')[0];
assert.equal(partitiveA2Write.modelAnswer, 'Per preparare la pasta, aggiungi dell’acqua, del sale e delle verdure.');
for (const level of levels) {
  for (const type of types) {
    const topics = ['sentence-building', 'articles', 'pronouns', 'passato-prossimo', 'partitive', 'reflexive'];
    const items = topics.flatMap(topic => getGrammarActivities(topic, level, type));
    assert.equal(items.length, 6, level + ' should have one ' + type + ' activity per topic');
    for (const item of items) {
      assert.ok(!ids.has(item.id), 'Duplicate activity id: ' + item.id);
      ids.add(item.id);
      assert.ok(item.title[0] && item.title[1], item.id + ' needs bilingual title');
      assert.ok(item.prompt[0] && item.prompt[1], item.id + ' needs bilingual prompt');
      assert.ok(item.hint[0] && item.hint[1], item.id + ' needs bilingual hint');
      assert.ok(item.explanation[0] && item.explanation[1], item.id + ' needs bilingual explanation');
      assert.ok(item.modelAnswer.length > 0, item.id + ' needs a model answer');
      if (type === 'order') assert.ok(item.words && item.words.length >= 3, item.id + ' needs word tiles');
      if (type === 'correct' || type === 'translate') assert.ok(item.acceptedAnswers && item.acceptedAnswers.length > 0, item.id + ' needs accepted answers');
      if (type === 'write') assert.ok(!item.acceptedAnswers, item.id + ' should use self-review');
    }
  }
}
console.log('italianGrammarActivities.test.ts ok! Four activity formats across A1, A2 and B1.');
