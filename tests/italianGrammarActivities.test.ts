import assert from 'node:assert/strict';
import { ITALIAN_GRAMMAR_ACTIVITIES, getGrammarActivities, normaliseGrammarAnswer, matchesGrammarAnswer } from '../src/data/italianGrammarActivities';
const sentenceA1Translation = getGrammarActivities('sentence-building', 'A1', 'translate')[0];
assert.equal(sentenceA1Translation.hint[0], 'Use la with the feminine noun ragazza and un with the masculine noun libro.');
assert.equal(sentenceA1Translation.hint[1], 'Usa la con il nome femminile ragazza e un con il nome maschile libro.');
const articlesA1Translation = getGrammarActivities('articles', 'A1', 'translate')[0];
assert.equal(articlesA1Translation.hint[0], 'Use gli before studenti because it is masculine plural and begins with s + consonant.');
assert.equal(articlesA1Translation.hint[1], 'Usa gli davanti a studenti: è un nome maschile plurale che inizia con s + consonante.');
const articlesA1Write = getGrammarActivities('articles', 'A1', 'write')[0];
assert.equal(articlesA1Write.prompt[0], 'Write one sentence using a masculine noun and a feminine noun.');
assert.equal(articlesA1Write.prompt[1], 'Scrivi una frase usando un nome maschile e un nome femminile.');
assert.equal(articlesA1Write.modelAnswer, 'Ho un libro e una penna.');
assert.equal(articlesA1Write.modelAnswer.split(/[.!?]+/).filter(Boolean).length, 1, 'A1 article model should contain the one sentence requested');
const extraWritingIds = ['articles', 'pronouns', 'passato-prossimo', 'partitive', 'reflexive'].flatMap(topic => ['A1', 'A2'].map(level => topic + '-' + level.toLowerCase() + '-write-2'));
for (const id of extraWritingIds) {
  assert.ok(ITALIAN_GRAMMAR_ACTIVITIES.some(activity => activity.id === id), 'Missing expanded writing activity: ' + id);
}
const levels = ['A1', 'A2', 'B1'] as const;
const types = ['correct', 'order', 'translate', 'write'] as const;
const ids = new Set<string>();
assert.equal(ITALIAN_GRAMMAR_ACTIVITIES.length, 107);
const passatoProssimoA2Correction = getGrammarActivities('passato-prossimo', 'A2', 'correct')[0];
assert.ok(passatoProssimoA2Correction.source?.includes('Io ho andato a scuola ieri'), 'A2 correction should cover the common ho/sono auxiliary error');
assert.deepEqual(passatoProssimoA2Correction.acceptedAnswers, ['Io sono andato a scuola ieri.', 'Io sono andata a scuola ieri.']);
const passatoProssimoA1Translation = getGrammarActivities('passato-prossimo', 'A1', 'translate')[0];
assert.equal(passatoProssimoA1Translation.prompt[1], 'Traduci in italiano: “I have finished my homework”.');
assert.equal(passatoProssimoA1Translation.source, 'I have finished my homework.');
const passatoProssimoA2Translation = getGrammarActivities('passato-prossimo', 'A2', 'translate')[0];
assert.equal(passatoProssimoA2Translation.prompt[1], 'Traduci in italiano: “We wrote a letter”.');
assert.equal(passatoProssimoA2Translation.source, 'We wrote a letter.');
const reflexiveA1Translation = getGrammarActivities('reflexive', 'A1', 'translate')[0];
assert.equal(reflexiveA1Translation.prompt[1], 'Traduci in italiano: “She gets up at seven”.');
assert.equal(reflexiveA1Translation.source, 'She gets up at seven.');
const reflexiveA2Translation = getGrammarActivities('reflexive', 'A2', 'translate')[0];
assert.deepEqual(reflexiveA2Translation.acceptedAnswers, ['Mi sono vestito rapidamente.', 'Mi sono vestita rapidamente.', 'Mi sono vestito in fretta.', 'Mi sono vestita in fretta.']);
assert.equal(reflexiveA2Translation.prompt[0], 'Translate into Italian: I got dressed quickly. Use the form that agrees with you.');
assert.equal(reflexiveA2Translation.prompt[1], 'Traduci in italiano: “I got dressed quickly”. Usa la forma che concorda con te.');
assert.equal(reflexiveA2Translation.source, 'I got dressed quickly.');
const sentenceA2Translation = getGrammarActivities('sentence-building', 'A2', 'translate')[0];
const sentenceA2Write = getGrammarActivities('sentence-building', 'A2', 'write')[0];
assert.equal(sentenceA2Write.modelAnswer, 'Ieri ho studiato italiano. Poi ho guardato un film.');
assert.equal(sentenceA2Write.modelAnswer.split(/[.!?]+/).filter(Boolean).length, 2, 'A2 daily-activities model should contain two connected sentences as requested');
assert.deepEqual(sentenceA2Translation.acceptedAnswers, ['Ho chiamato Giulia e le ho parlato.', 'Ho chiamato Giulia e ho parlato con lei.']);
const weekendA2Write = getGrammarActivities('passato-prossimo', 'A2', 'write')[0];
assert.equal(weekendA2Write.prompt[1], 'Scrivi due frasi sul fine settimana scorso. Usa il passato prossimo.');
assert.equal(weekendA2Write.modelAnswer, 'Sabato ho visitato un museo. Domenica ho visto una mostra.');
assert.equal(weekendA2Write.modelAnswer.split(/[.!?]+/).filter(Boolean).length, 2, 'A2 weekend model should contain the two sentences requested');
const partitiveA1Translation = getGrammarActivities('partitive', 'A1', 'translate')[0];
assert.equal(partitiveA1Translation.prompt[0], 'Translate: I eat some cheese.');
assert.equal(partitiveA1Translation.prompt[1], 'Traduci in italiano: “I eat some cheese”.');
assert.equal(partitiveA1Translation.source, 'I eat some cheese.');
const partitiveA2Translation = getGrammarActivities('partitive', 'A2', 'translate')[0];
assert.equal(partitiveA2Translation.prompt[0], 'Translate: Would you like some vegetables?');
assert.equal(partitiveA2Translation.prompt[1], 'Traduci in italiano: “Would you like some vegetables?”.');
assert.equal(partitiveA2Translation.source, 'Would you like some vegetables?');
assert.deepEqual(partitiveA2Translation.acceptedAnswers, ['Vuoi della verdura?', 'Vuoi delle verdure?']);
const articlesA2Write = getGrammarActivities('articles', 'A2', 'write')[0];
assert.equal(articlesA2Write.modelAnswer, 'Nel mio quartiere ci sono una piazza e un bar. Le case del centro sono antiche.');
assert.equal(articlesA2Write.modelAnswer.split(/[.!?]+/).filter(Boolean).length, 2, 'A2 place-description model should contain two sentences as requested');
assert.equal(articlesA2Write.explanation[0], 'Check agreement and contractions: nel = in + il; una agrees with piazza; le agrees with case; del = di + il.');
assert.equal(articlesA2Write.explanation[1], 'Controlla l’accordo e le preposizioni articolate: nel = in + il; una concorda con piazza; le concorda con case; del = di + il.');
const articlesA2Order = getGrammarActivities('articles', 'A2', 'order')[0];
assert.equal(articlesA2Order.modelAnswer, 'Ho degli amici simpatici e generosi.');
const partitiveA2Write = getGrammarActivities('partitive', 'A2', 'write')[0];
assert.equal(partitiveA2Write.modelAnswer, 'Per preparare la pasta, aggiungi dell’acqua, del sale e delle verdure.');
for (const level of levels) {
  for (const type of types) {
    const topics = ['sentence-building', 'articles', 'pronouns', 'passato-prossimo', 'partitive', 'reflexive'];
    const items = topics.flatMap(topic => getGrammarActivities(topic, level, type));
    const expectedCount = level === 'B1' ? 6 : type === 'write' ? 11 : type === 'correct' ? (level === 'A2' ? 7 : 6) : 12;
    assert.equal(items.length, expectedCount, level + ' should have ' + expectedCount + ' ' + type + ' activities across all topics');
    for (const item of items) {
      assert.ok(!ids.has(item.id), 'Duplicate activity id: ' + item.id);
      ids.add(item.id);
      assert.ok(item.title[0] && item.title[1], item.id + ' needs bilingual title');
      assert.ok(item.prompt[0] && item.prompt[1], item.id + ' needs bilingual prompt');
      assert.ok(item.hint[0] && item.hint[1], item.id + ' needs bilingual hint');
      assert.ok(item.explanation[0] && item.explanation[1], item.id + ' needs bilingual explanation');
      assert.ok(item.modelAnswer.length > 0, item.id + ' needs a model answer');
      if (type === 'order') assert.ok(item.words && item.words.length >= 3, item.id + ' needs word tiles');
      if (type === 'translate') {
        assert.ok(item.source?.trim(), item.id + ' needs a non-empty English source sentence');
      }
      if (type === 'correct' || type === 'translate') {
        assert.ok(item.acceptedAnswers && item.acceptedAnswers.length > 0, item.id + ' needs accepted answers');
        const normalizedAnswers = item.acceptedAnswers.map(answer => {
          assert.ok(answer.trim(), item.id + ' must not contain an empty accepted answer');
          return normaliseGrammarAnswer(answer);
        });
        assert.equal(
          new Set(normalizedAnswers).size,
          normalizedAnswers.length,
          item.id + ' must not contain accepted answers that are duplicates after normalization'
        );
        assert.ok(
          normalizedAnswers.includes(normaliseGrammarAnswer(item.modelAnswer)),
          item.id + ' model answer must be one of the accepted answer variants'
        );
      }
      if (type === 'write') assert.ok(!item.acceptedAnswers, item.id + ' should use self-review');
    }
  }
}
console.log('italianGrammarActivities.test.ts ok! Four activity formats across A1, A2 and B1.');

const localizedPromptExpectations: Record<string, string> = {
  "passato-prossimo-a1-correct": "Correggi l’ausiliare in questa frase.",
  "passato-prossimo-a1-order": "Metti le parole nell’ordine corretto per formare una frase.",
  "passato-prossimo-a1-write": "Scrivi una frase su qualcosa che hai fatto ieri.",
  "partitive-a1-correct": "Correggi l’articolo partitivo.",
  "partitive-a1-order": "Metti le parole nell’ordine corretto per formare una frase.",
  "partitive-a1-write": "Scrivi una frase sugli acquisti usando due forme partititive.",
  "partitive-a2-correct": "Correggi l’articolo partitivo.",
  "partitive-a2-order": "Metti le parole nell’ordine corretto per formare una frase.",
  "partitive-a2-write": "Scrivi una breve ricetta usando almeno tre forme partititive.",
  "reflexive-a1-correct": "Correggi il pronome riflessivo.",
  "reflexive-a1-order": "Metti le parole nell’ordine corretto per formare una frase.",
  "reflexive-a1-write": "Descrivi la tua routine mattutina usando due verbi riflessivi.",
  "reflexive-a2-correct": "Correggi il pronome riflessivo.",
  "reflexive-a2-order": "Metti le parole nell’ordine corretto per formare una frase.",
  "reflexive-a2-write": "Scrivi due frasi sulla tua routine: una al presente e una al passato."
};
for (const [activityId, expectedPrompt] of Object.entries(localizedPromptExpectations)) {
  const activity = ITALIAN_GRAMMAR_ACTIVITIES.find(item => item.id === activityId);
  assert.ok(activity, 'Missing activity: ' + activityId);
  assert.equal(activity.prompt[1], expectedPrompt, activityId + ' should have a complete Italian prompt');
  assert.notEqual(activity.prompt[1], 'Scrivi la tua risposta.', activityId + ' should not use a generic placeholder');
}

const articlesA1TranslationPrompt = getGrammarActivities('articles', 'A1', 'translate')[0];
assert.equal(articlesA1TranslationPrompt.prompt[0], 'Translate into Italian: “The students are here”.');
assert.equal(articlesA1TranslationPrompt.prompt[1], 'Traduci in italiano: “The students are here”.');
assert.equal(articlesA1TranslationPrompt.source, 'The students are here.');
const articlesA1Correction = getGrammarActivities('articles', 'A1', 'correct')[0];
assert.equal(articlesA1Correction.explanation[0], 'Use il with a masculine singular noun beginning with a consonant that does not require lo.');
assert.equal(articlesA1Correction.explanation[1], 'Usa il con un nome maschile singolare che inizia con una consonante che non richiede lo.');
const pronounsA1Translation = getGrammarActivities('pronouns', 'A1', 'translate')[0];
assert.equal(pronounsA1Translation.hint[1], 'Il pronome soggetto per “she” è lei.');
const pronounsA2Correction = getGrammarActivities('pronouns', 'A2', 'correct')[0];
assert.equal(pronounsA2Correction.hint[0], 'The noun libri is masculine plural.');
assert.equal(pronounsA2Correction.hint[1], 'Il nome libri è maschile plurale.');


const passatoProssimoA1CorrectionVariants = getGrammarActivities('passato-prossimo', 'A1', 'correct')[0];
assert.deepEqual(passatoProssimoA1CorrectionVariants.acceptedAnswers, ['Ieri ho mangiato una pizza.', 'Ho mangiato una pizza ieri.']);
const articlesA1TranslationVariants = getGrammarActivities('articles', 'A1', 'translate')[0];
assert.deepEqual(articlesA1TranslationVariants.acceptedAnswers, ['Gli studenti sono qui.', 'Gli studenti sono qua.']);
const articlesA2TranslationVariants = getGrammarActivities('articles', 'A2', 'translate')[0];
assert.deepEqual(articlesA2TranslationVariants.acceptedAnswers, ['Ho visto le ragazze in giardino.', 'Ho visto le ragazze nel giardino.']);
const reflexiveA1TranslationVariants = getGrammarActivities('reflexive', 'A1', 'translate')[0];
assert.deepEqual(reflexiveA1TranslationVariants.acceptedAnswers, ['Lei si alza alle sette.', 'Si alza alle sette.']);
const reflexiveA2TranslationVariants = getGrammarActivities('reflexive', 'A2', 'translate')[0];
assert.deepEqual(reflexiveA2TranslationVariants.acceptedAnswers, ['Mi sono vestito rapidamente.', 'Mi sono vestita rapidamente.', 'Mi sono vestito in fretta.', 'Mi sono vestita in fretta.']);


assert.equal(normaliseGrammarAnswer('  L’  amica!  '), "l'amica");
assert.equal(normaliseGrammarAnswer('un\u2019amica.'), "un'amica");
assert.equal(normaliseGrammarAnswer('perché'), 'perché', 'Answer normalization must preserve Italian accents');
assert.notEqual(normaliseGrammarAnswer('papa'), normaliseGrammarAnswer('papà'), 'Different accented words must remain distinct');
assert.ok(matchesGrammarAnswer('  GLI STUDENTI SONO QUA!  ', ['Gli studenti sono qui.', 'Gli studenti sono qua.']));
assert.ok(matchesGrammarAnswer('Mi sono vestito in fretta', ['Mi sono vestito rapidamente.', 'Mi sono vestito in fretta.']));
assert.ok(!matchesGrammarAnswer('Mi sono vestita in fretta', ['Mi sono vestito rapidamente.']), 'Gender agreement must not be normalized away');
assert.ok(!matchesGrammarAnswer('Ho mangiato una pizza', ['Ho mangiato due pizze.']), 'Different words must not be accepted');
console.log('Italian grammar answer normalization tests ok!');
