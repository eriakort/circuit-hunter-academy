import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { ITALIAN_GRAMMAR_ACTIVITIES, getGrammarActivities, normaliseGrammarAnswer, matchesGrammarAnswer } from '../src/data/italianGrammarActivities';
// Activity text fields are a legacy [en, it] tuple or a localized record.
const en = (v: any): string => Array.isArray(v) ? v[0] : v?.en;
const it = (v: any): string => Array.isArray(v) ? v[1] : v?.it;

// A translate source is now localized (a record); correct/order sources stay
// plain Italian strings. Extract the base (English) text for assertions.
const srcEn = (x: any): string => (x == null ? '' : typeof x === 'string' ? x : (x.en ?? ''));
const srcLangs = (x: any): string[] => (typeof x === 'object' && x ? ['en', 'it', 'pt', 'es', 'fr', 'de'].map(l => x[l]) : []);
const sentenceA1Translation = getGrammarActivities('sentence-building', 'A1', 'translate')[0];
assert.equal(en(sentenceA1Translation.hint), 'Use la with the feminine noun ragazza and un with the masculine noun libro.');
assert.equal(it(sentenceA1Translation.hint), 'Usa la con il nome femminile ragazza e un con il nome maschile libro.');
const articlesA1Translation = getGrammarActivities('articles', 'A1', 'translate')[0];
assert.equal(en(articlesA1Translation.hint), 'Use gli before studenti because it is masculine plural and begins with s + consonant.');
assert.equal(it(articlesA1Translation.hint), 'Usa gli davanti a studenti: è un nome maschile plurale che inizia con s + consonante.');
const articlesA1Write = getGrammarActivities('articles', 'A1', 'write')[0];
assert.equal(en(articlesA1Write.prompt), 'Write one sentence using a masculine noun and a feminine noun.');
assert.equal(it(articlesA1Write.prompt), 'Scrivi una frase usando un nome maschile e un nome femminile.');
assert.equal(articlesA1Write.modelAnswer, 'Ho un libro e una penna.');
assert.equal(articlesA1Write.modelAnswer.split(/[.!?]+/).filter(Boolean).length, 1, 'A1 article model should contain the one sentence requested');
const extraWritingIds = ['articles', 'pronouns', 'passato-prossimo', 'partitive', 'reflexive', 'present-tense'].flatMap(topic => ['A1', 'A2'].map(level => topic + '-' + level.toLowerCase() + '-write-2'));
for (const id of extraWritingIds) {
  assert.ok(ITALIAN_GRAMMAR_ACTIVITIES.some(activity => activity.id === id), 'Missing expanded writing activity: ' + id);
}
const levels = ['A1', 'A2', 'B1'] as const;
const types = ['correct', 'order', 'translate', 'write'] as const;
const ids = new Set<string>();
assert.equal(ITALIAN_GRAMMAR_ACTIVITIES.length, 185);
const presentA1Translation = getGrammarActivities('present-tense', 'A1', 'translate')[0];
assert.deepEqual(presentA1Translation.acceptedAnswers, ['Noi viviamo a Roma.', 'Viviamo a Roma.']);
const presentA2Translation = getGrammarActivities('present-tense', 'A2', 'translate')[0];
assert.ok(presentA2Translation.acceptedAnswers?.includes('Adesso stanno facendo i compiti.'));
const prepositionsA1Translation = getGrammarActivities('prepositions', 'A1', 'translate')[0];
assert.deepEqual(prepositionsA1Translation.acceptedAnswers, ['Vado da Luca.']);
const prepositionsA2Translation = getGrammarActivities('prepositions', 'A2', 'translate')[0];
assert.deepEqual(prepositionsA2Translation.acceptedAnswers, ['I bambini giocano nel giardino.', 'I bambini stanno giocando nel giardino.']);
const imperfettoA1Translation = getGrammarActivities('imperfetto', 'A1', 'translate')[0];
assert.deepEqual(imperfettoA1Translation.acceptedAnswers, ['C’era un grande giardino.']);
const imperfettoA2Translation = getGrammarActivities('imperfetto', 'A2', 'translate')[0];
assert.ok(imperfettoA2Translation.acceptedAnswers?.includes('Mentre studiavo, Sara è arrivata.'));
const passatoProssimoA2Correction = getGrammarActivities('passato-prossimo', 'A2', 'correct')[0];
assert.ok(srcEn(passatoProssimoA2Correction.source).includes('Io ho andato a scuola ieri'), 'A2 correction should cover the common ho/sono auxiliary error');
assert.deepEqual(passatoProssimoA2Correction.acceptedAnswers, ['Io sono andato a scuola ieri.', 'Io sono andata a scuola ieri.']);
const passatoProssimoA1Translation = getGrammarActivities('passato-prossimo', 'A1', 'translate')[0];
assert.equal(it(passatoProssimoA1Translation.prompt), 'Traduci in italiano: “I have finished my homework”.');
assert.equal(srcEn(passatoProssimoA1Translation.source), 'I have finished my homework.');
const passatoProssimoA2Translation = getGrammarActivities('passato-prossimo', 'A2', 'translate')[0];
assert.equal(it(passatoProssimoA2Translation.prompt), 'Traduci in italiano: “We wrote a letter”.');
assert.equal(srcEn(passatoProssimoA2Translation.source), 'We wrote a letter.');
const reflexiveA1Translation = getGrammarActivities('reflexive', 'A1', 'translate')[0];
assert.equal(it(reflexiveA1Translation.prompt), 'Traduci in italiano: “She gets up at seven”.');
assert.equal(srcEn(reflexiveA1Translation.source), 'She gets up at seven.');
const reflexiveA2Translation = getGrammarActivities('reflexive', 'A2', 'translate')[0];
assert.deepEqual(reflexiveA2Translation.acceptedAnswers, ['Mi sono vestito rapidamente.', 'Mi sono vestita rapidamente.', 'Mi sono vestito in fretta.', 'Mi sono vestita in fretta.']);
assert.equal(en(reflexiveA2Translation.prompt), 'Translate into Italian: I got dressed quickly. Use the form that agrees with you.');
assert.equal(it(reflexiveA2Translation.prompt), 'Traduci in italiano: “I got dressed quickly”. Usa la forma che concorda con te.');
assert.equal(srcEn(reflexiveA2Translation.source), 'I got dressed quickly.');
const sentenceA2Translation = getGrammarActivities('sentence-building', 'A2', 'translate')[0];
const sentenceA2Write = getGrammarActivities('sentence-building', 'A2', 'write')[0];
assert.equal(sentenceA2Write.modelAnswer, 'Ieri ho studiato italiano. Poi ho guardato un film.');
assert.equal(sentenceA2Write.modelAnswer.split(/[.!?]+/).filter(Boolean).length, 2, 'A2 daily-activities model should contain two connected sentences as requested');
assert.deepEqual(sentenceA2Translation.acceptedAnswers, ['Ho chiamato Giulia e le ho parlato.', 'Ho chiamato Giulia e ho parlato con lei.']);
const weekendA2Write = getGrammarActivities('passato-prossimo', 'A2', 'write')[0];
assert.equal(it(weekendA2Write.prompt), 'Scrivi due frasi sul fine settimana scorso. Usa il passato prossimo.');
assert.equal(weekendA2Write.modelAnswer, 'Sabato ho visitato un museo. Domenica ho visto una mostra.');
assert.equal(weekendA2Write.modelAnswer.split(/[.!?]+/).filter(Boolean).length, 2, 'A2 weekend model should contain the two sentences requested');
const partitiveA1Translation = getGrammarActivities('partitive', 'A1', 'translate')[0];
assert.equal(en(partitiveA1Translation.prompt), 'Translate: I eat some cheese.');
assert.equal(it(partitiveA1Translation.prompt), 'Traduci in italiano: “I eat some cheese”.');
assert.equal(srcEn(partitiveA1Translation.source), 'I eat some cheese.');
const partitiveA2Translation = getGrammarActivities('partitive', 'A2', 'translate')[0];
assert.equal(en(partitiveA2Translation.prompt), 'Translate: Would you like some vegetables?');
assert.equal(it(partitiveA2Translation.prompt), 'Traduci in italiano: “Would you like some vegetables?”.');
assert.equal(srcEn(partitiveA2Translation.source), 'Would you like some vegetables?');
assert.deepEqual(partitiveA2Translation.acceptedAnswers, ['Vuoi della verdura?', 'Vuoi delle verdure?']);
const articlesA2Write = getGrammarActivities('articles', 'A2', 'write')[0];
assert.equal(articlesA2Write.modelAnswer, 'Nel mio quartiere ci sono una piazza e un bar. Le case del centro sono antiche.');
assert.equal(articlesA2Write.modelAnswer.split(/[.!?]+/).filter(Boolean).length, 2, 'A2 place-description model should contain two sentences as requested');
assert.equal(en(articlesA2Write.explanation), 'Check agreement and contractions: nel = in + il; una agrees with piazza; le agrees with case; del = di + il.');
assert.equal(it(articlesA2Write.explanation), 'Controlla l’accordo e le preposizioni articolate: nel = in + il; una concorda con piazza; le concorda con case; del = di + il.');
const articlesA2Order = getGrammarActivities('articles', 'A2', 'order')[0];
assert.equal(articlesA2Order.modelAnswer, 'Ho degli amici simpatici e generosi.');
const partitiveA2Write = getGrammarActivities('partitive', 'A2', 'write')[0];
assert.equal(partitiveA2Write.modelAnswer, 'Per preparare la pasta, aggiungi dell’acqua, del sale e delle verdure.');
for (const level of levels) {
  for (const type of types) {
    const topics = ['sentence-building', 'articles', 'pronouns', 'passato-prossimo', 'partitive', 'reflexive', 'present-tense', 'stare-gerundio', 'imperative', 'comparatives', 'future', 'imperfetto', 'prepositions', 'adjective-agreement'];
    const items = topics.flatMap(topic => getGrammarActivities(topic, level, type));
    // stare-gerundio adds one picture 'correct' and one picture 'write' activity per level;
    // imperative, comparatives and future each add one activity of every type per level.
    const expectedCount = level === 'B1' ? (type === 'correct' || type === 'write' ? 11 : 10) : type === 'write' ? 19 : type === 'correct' ? (level === 'A2' ? 15 : 14) : 19;
    assert.equal(items.length, expectedCount, level + ' should have ' + expectedCount + ' ' + type + ' activities across all topics');
    for (const item of items) {
      assert.ok(!ids.has(item.id), 'Duplicate activity id: ' + item.id);
      ids.add(item.id);
      assert.ok(en(item.title) && it(item.title), item.id + ' needs bilingual title');
      assert.ok(en(item.prompt) && it(item.prompt), item.id + ' needs bilingual prompt');
      assert.ok(en(item.hint) && it(item.hint), item.id + ' needs bilingual hint');
      assert.ok(en(item.explanation) && it(item.explanation), item.id + ' needs bilingual explanation');
      assert.ok(item.modelAnswer.length > 0, item.id + ' needs a model answer');
      if (type === 'order') assert.ok(item.words && item.words.length >= 3, item.id + ' needs word tiles');
      if (type === 'translate') {
        // The source to translate FROM must be localized into every support language.
        assert.ok(srcEn(item.source).trim(), item.id + ' needs a non-empty source sentence');
        for (const v of srcLangs(item.source)) assert.ok(v && v.trim(), item.id + ' source must be localized into every language');
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
  assert.equal(it(activity.prompt), expectedPrompt, activityId + ' should have a complete Italian prompt');
  assert.notEqual(it(activity.prompt), 'Scrivi la tua risposta.', activityId + ' should not use a generic placeholder');
}

const articlesA1TranslationPrompt = getGrammarActivities('articles', 'A1', 'translate')[0];
assert.equal(en(articlesA1TranslationPrompt.prompt), 'Translate into Italian: “The students are here”.');
assert.equal(it(articlesA1TranslationPrompt.prompt), 'Traduci in italiano: “The students are here”.');
assert.equal(srcEn(articlesA1TranslationPrompt.source), 'The students are here.');
const articlesA1Correction = getGrammarActivities('articles', 'A1', 'correct')[0];
assert.equal(en(articlesA1Correction.explanation), 'Use il with a masculine singular noun beginning with a consonant that does not require lo.');
assert.equal(it(articlesA1Correction.explanation), 'Usa il con un nome maschile singolare che inizia con una consonante che non richiede lo.');
const pronounsA1Translation = getGrammarActivities('pronouns', 'A1', 'translate')[0];
assert.equal(it(pronounsA1Translation.hint), 'Il pronome soggetto per “she” è lei.');
const pronounsA2Correction = getGrammarActivities('pronouns', 'A2', 'correct')[0];
assert.equal(en(pronounsA2Correction.hint), 'The noun libri is masculine plural.');
assert.equal(it(pronounsA2Correction.hint), 'Il nome libri è maschile plurale.');


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

// Picture activities point at a real file in public/ and carry alt text.
const pictureActivities = ITALIAN_GRAMMAR_ACTIVITIES.filter(activity => activity.image);
assert.equal(pictureActivities.length, 6, 'stare-gerundio should have six picture activities');
for (const activity of pictureActivities) {
  assert.ok(existsSync('public/' + activity.image), activity.id + ' image file must exist: ' + activity.image);
  assert.ok(activity.imageAlt, activity.id + ' needs alt text');
}

// Every activity's title, prompt, hint and explanation carries all six languages,
// so PT/ES/FR/DE learners never fall back to English inside an activity.
for (const activity of ITALIAN_GRAMMAR_ACTIVITIES) {
  for (const field of ['title', 'prompt', 'hint', 'explanation'] as const) {
    const value = activity[field] as unknown as Record<string, string>;
    assert.ok(!Array.isArray(value), `${activity.id} ${field} should be a localized record`);
    for (const lang of ['en', 'it', 'pt', 'es', 'fr', 'de']) {
      assert.ok(value[lang]?.trim(), `${activity.id} ${field} needs ${lang}`);
    }
  }
}
