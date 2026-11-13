import type { Language } from '../types';
import { IRREGULAR_VERBS, PERSONS, VERB_TABLES, type Six, type VerbTable } from './italianGrammarVerbTables';

/**
 * Visual aids for the Italian grammar units: conjugation tables (“tavole attive
 * dei verbi”) and small reference tables. All HTML is built from constants.
 */
type Pair = [string, string];
const t = (pair: Pair, lang: Language) => (lang === 'it' ? pair[1] : pair[0]);

/** Italian grammar terms stay in Italian; in English mode a short gloss is added. */
const term = (it: string, en: string, lang: Language) => (lang === 'it' ? it : `${it} <small>(${en})</small>`);

const GLOSS: Record<string, string> = {
  presente: 'present', imperfetto: 'imperfect', 'passato remoto': 'remote past', 'futuro semplice': 'simple future',
  'passato prossimo': 'present perfect', 'trapassato prossimo': 'pluperfect', 'trapassato remoto': 'past anterior',
  'futuro anteriore': 'future perfect', passato: 'past', trapassato: 'pluperfect'
};

const tenseBlock = (name: string, forms: Six, lang: Language, prefix = '') =>
  `<div class="itv-tense"><div class="itv-tname">${term(name.toUpperCase(), GLOSS[name] ?? name, lang)}</div><ol>${forms
    .map((form, i) => `<li><span class="itv-p">${prefix}${PERSONS[i]}</span> ${form}</li>`)
    .join('')}</ol></div>`;

const moodBox = (title: string, en: string, lang: Language, body: string, wide = false) =>
  `<section class="itv-mood${wide ? ' wide' : ''}"><h4>${term(title, en, lang)}</h4>${body}</section>`;

const pairRow = (simple: string, compound: string) => `<div class="itv-pair"><div>${simple}</div><div>${compound}</div></div>`;

const renderTable = (table: VerbTable, lang: Language): string => {
  const ind = table.indicativo.simple
    .map(([name, forms], i) => {
      const [cName, cForms] = table.indicativo.compound[i];
      return pairRow(tenseBlock(name, forms, lang), tenseBlock(cName, cForms, lang));
    })
    .join('');
  const cong = table.congiuntivo.simple
    .map(([name, forms], i) => {
      const [cName, cForms] = table.congiuntivo.compound[i];
      return pairRow(tenseBlock(name, forms, lang, 'che '), tenseBlock(cName, cForms, lang, 'che '));
    })
    .join('');
  const cond = pairRow(
    tenseBlock(table.condizionale.simple[0], table.condizionale.simple[1], lang),
    tenseBlock(table.condizionale.compound[0], table.condizionale.compound[1], lang)
  );
  const small = (title: string, en: string, a: string, b: string) =>
    `<section class="itv-mood itv-small"><h4>${term(title, en, lang)}</h4><div class="itv-pair"><div><b>${t(['present', 'presente'], lang)}</b> ${a}</div><div><b>${t(['past', 'passato'], lang)}</b> ${b}</div></div></section>`;
  const heads = `<div class="itv-heads"><span>${t(['SIMPLE TENSES', 'TEMPI SEMPLICI'], lang)}</span><span>${t(['COMPOUND TENSES', 'TEMPI COMPOSTI'], lang)}</span></div>`;
  return `<figure class="itv"><figcaption>${table.title}</figcaption><div class="itv-grid">${moodBox('MODO INDICATIVO', 'indicative', lang, heads + ind, true)}<div class="itv-col">${moodBox('MODO CONGIUNTIVO', 'subjunctive', lang, heads + cong)}${moodBox('MODO CONDIZIONALE', 'conditional', lang, cond)}${moodBox('MODO IMPERATIVO', 'imperative', lang, `<p class="itv-imp">${table.imperativo.join(' · ')}</p>`)}</div></div><div class="itv-row">${small('MODO INFINITO', 'infinitive', ...table.infinito)}${small('MODO PARTICIPIO', 'participle', ...table.participio)}${small('MODO GERUNDIO', 'gerund', ...table.gerundio)}</div></figure>`;
};

const simpleTable = (caption: Pair, head: string[], rows: string[][], lang: Language) =>
  `<figure class="g5m-fig"><figcaption>${t(caption, lang)}</figcaption><div class="g5m-scroll"><table class="g5m-table itv-ref"><thead><tr>${head.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows
    .map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`)
    .join('')}</tbody></table></div></figure>`;

const RENDERERS: Record<string, (lang: Language) => string> = {
  'itg5-table-essere': lang => renderTable(VERB_TABLES.essere, lang),
  'itg5-table-avere': lang => renderTable(VERB_TABLES.avere, lang),
  'itg5-table-amare': lang => renderTable(VERB_TABLES.amare, lang),
  'itg5-table-credere': lang => renderTable(VERB_TABLES.credere, lang),
  'itg5-table-dormire': lang => renderTable(VERB_TABLES.dormire, lang),
  'itg5-table-passiva': lang => renderTable(VERB_TABLES.passiva, lang),
  'itg5-table-lavarsi': lang => renderTable(VERB_TABLES.lavarsi, lang),
  'itg5-table-irregolari': lang =>
    simpleTable(['Common irregular verbs', 'Verbi irregolari più comuni'], [t(['infinitive', 'infinito'], lang), t(['present (io)', 'presente (io)'], lang), t(['remote past (io / egli)', 'passato remoto (io / egli)'], lang), t(['past participle', 'participio passato'], lang)], IRREGULAR_VERBS.map(r => [...r]), lang),
  'itg5-articles': lang =>
    simpleTable(['Articles', 'Gli articoli'], ['', t(['masc. sing.', 'masch. sing.'], lang), t(['masc. plur.', 'masch. plur.'], lang), t(['fem. sing.', 'femm. sing.'], lang), t(['fem. plur.', 'femm. plur.'], lang)], [
      [t(['definite', 'determinativi'], lang), 'il · lo · l’', 'i · gli', 'la · l’', 'le'],
      [t(['indefinite', 'indeterminativi'], lang), 'un · uno', '—', 'una · un’', '—'],
      [t(['partitive', 'partitivi'], lang), 'del · dello · dell’', 'dei · degli', 'della · dell’', 'delle']
    ], lang),
  'itg5-special-adjectives': lang =>
    simpleTable(['Organic comparatives and superlatives', 'Comparativi e superlativi organici'], [t(['positive', 'positivo'], lang), t(['comparative', 'comparativo'], lang), t(['absolute superlative', 'superlativo assoluto'], lang)], [
      ['buono', 'migliore', 'ottimo'], ['cattivo', 'peggiore', 'pessimo'], ['grande', 'maggiore', 'massimo'],
      ['piccolo', 'minore', 'minimo'], ['alto', 'superiore', 'supremo / sommo'], ['basso', 'inferiore', 'infimo']
    ], lang),
  'itg5-personal-pronouns': lang =>
    simpleTable(['Personal pronouns', 'I pronomi personali'], [t(['person', 'persona'], lang), t(['subject', 'soggetto'], lang), t(['stressed object', 'complemento tonico'], lang), t(['unstressed object', 'complemento atono'], lang)], [
      ['1ª sing.', 'io', 'me', 'mi'], ['2ª sing.', 'tu', 'te', 'ti'], ['3ª sing. m.', 'egli · lui · esso', 'lui · sé', 'lo · gli · si · ne'],
      ['3ª sing. f.', 'ella · lei · essa', 'lei · sé', 'la · le · si · ne'], ['1ª plur.', 'noi', 'noi', 'ci'], ['2ª plur.', 'voi', 'voi', 'vi'],
      ['3ª plur.', 'essi · esse · loro', 'loro · sé', 'li · le · gli · si · ne']
    ], lang),
  'itg5-prepositions': lang =>
    simpleTable(['Articulated prepositions', 'Le preposizioni articolate'], ['', 'il', 'lo', 'l’', 'la', 'i', 'gli', 'le'], [
      ['di', 'del', 'dello', 'dell’', 'della', 'dei', 'degli', 'delle'],
      ['a', 'al', 'allo', 'all’', 'alla', 'ai', 'agli', 'alle'],
      ['da', 'dal', 'dallo', 'dall’', 'dalla', 'dai', 'dagli', 'dalle'],
      ['in', 'nel', 'nello', 'nell’', 'nella', 'nei', 'negli', 'nelle'],
      ['su', 'sul', 'sullo', 'sull’', 'sulla', 'sui', 'sugli', 'sulle']
    ], lang),
  'itg5-indicative-timeline': lang => {
    const items: Array<[string, string, number, string]> = [
      ['trapassato remoto', 'ebbi cantato', 75, 'var(--data)'], ['passato remoto', 'cantai', 147, 'var(--data)'],
      ['trapassato prossimo', 'avevo cantato', 219, 'var(--sakura)'], ['imperfetto', 'cantavo', 291, 'var(--sakura)'],
      ['passato prossimo', 'ho cantato', 363, 'var(--gold)'], ['presente', 'canto', 435, 'var(--good)'],
      ['futuro anteriore', 'avrò cantato', 507, 'var(--ember)'], ['futuro semplice', 'canterò', 579, 'var(--ember)']
    ];
    const marks = items.map(([name, ex, x, col], i) => `<circle cx="${x}" cy="110" r="7" fill="${col}"/><text x="${x}" y="${i % 2 ? 150 : 82}" text-anchor="middle" class="sm" style="fill:${col}">${name}</text><text x="${x}" y="${i % 2 ? 168 : 64}" text-anchor="middle" class="sm">${ex}</text>`).join('');
    return `<svg viewBox="0 0 660 190" class="dia" role="img" aria-label="${t(['Indicative tenses on the timeline', 'I tempi dell’indicativo sulla linea del tempo'], lang)}"><line x1="10" y1="110" x2="650" y2="110" stroke="var(--muted)" stroke-width="2"/><path d="M650 110 l-10 -6 v12 z" fill="var(--muted)"/><text x="20" y="22" class="sm">${t(['PAST', 'PASSATO'], lang)}</text><text x="435" y="22" text-anchor="middle" class="sm">${t(['NOW', 'ORA'], lang)}</text><text x="645" y="22" text-anchor="end" class="sm">${t(['FUTURE', 'FUTURO'], lang)}</text>${marks}</svg>`;
  },
  'itg5-core-sentence': lang =>
    `<figure class="g5m-fig"><figcaption>${t(['The minimal core sentence and its expansions', 'La frase minima nucleare e le espansioni'], lang)}</figcaption><div class="itv-core"><span class="exp">Ieri</span><span class="nuc">Luca</span><span class="nuc verb">regala</span><span class="nuc">un libro</span><span class="nuc">a Sara</span><span class="exp">in biblioteca</span></div><p class="g5m-note">${t(['Orange = core (verb + necessary elements) · grey = expansions you can remove', 'Arancione = nucleo (verbo + elementi necessari) · grigio = espansioni che si possono togliere'], lang)}</p></figure>`
};

export function getItalianGrammarVisual(key: string, lang: Language): string | null {
  const render = RENDERERS[key];
  return render ? render(lang) : null;
}

export const ITALIAN_GRAMMAR_VISUAL_KEYS = Object.keys(RENDERERS);
