import React, { useState } from 'react';
import type { Language } from '../types';
import { speakItalian } from '../speech/speechEngine';

type Props = { missionId: string; lang: Language };

const L6 = (map: Partial<Record<Language, string>> & { en: string; it: string }, lang: Language) =>
  map[lang] ?? map.en;

type QuintaMode = 'orthography' | 'lexicon' | 'agreement' | 'verbs' | 'syntax';

function resolveQuintaMode(missionId: string): QuintaMode {
  if (/(ce-cie|gli-gn|h-sillabe|apostrofo|accento|punteggiatura|ortografia)/.test(missionId)) return 'orthography';
  if (/(vocabolario|relazioni|figurato|origini|lessico)/.test(missionId)) return 'lexicon';
  if (/(nomi|articoli|aggettivi|possessivi|indefiniti|pronomi|avverbi|preposizioni|invariabili)/.test(missionId)) return 'agreement';
  if (/(verbi|indicativo|congiuntivo|modi-indefiniti|transitivi|riflessivi|tavole)/.test(missionId)) return 'verbs';
  return 'syntax';
}

const MODE_TITLES: Record<QuintaMode, { en: string; it: string; pt?: string; es?: string; fr?: string; de?: string }> = {
  orthography: { en: 'Interactive Spelling & Syllable Workbench', it: 'Laboratorio Interattivo di Ortografia e Sillabe', pt: 'Laboratório Interativo de Ortografia', es: 'Laboratorio Interactivo de Ortografía', fr: 'Atelier Interactif d’Orthographe', de: 'Interaktive Rechtschreib-Werkbank' },
  lexicon: { en: 'Interactive Word Scale & Meaning Lab', it: 'Laboratorio Interattivo di Lessico e Sfumature', pt: 'Laboratório Interativo de Léxico', es: 'Laboratorio Interactivo de Léxico', fr: 'Atelier Interactif de Lexique', de: 'Interaktives Wortschatz-Labor' },
  agreement: { en: 'Interactive Article, Noun & Adjective Builder', it: 'Costruttore Interattivo di Articoli, Nomi e Aggettivi', pt: 'Construtor de Artigos, Substantivos e Adjetivos', es: 'Constructor de Artículos, Sustantivos y Adjetivos', fr: 'Constructeur d’Articles, Noms et Adjectifs', de: 'Interaktiver Artikel- & Nomen-Baukasten' },
  verbs: { en: 'Interactive Italian Verb Timeline & Voice Lab', it: 'Linea del Tempo dei Verbi e Forma Attiva/Passiva', pt: 'Linha do Tempo dos Verbos Italianos', es: 'Línea del Tiempo de Verbos Italianos', fr: 'Ligne du Temps des Verbes Italiens', de: 'Interaktive Zeitlinie der Verben' },
  syntax: { en: 'Interactive Sentence Expansion Architect', it: 'Costruttore Interattivo della Frase Minima ed Espansioni', pt: 'Construtor Interativo de Frases em Italiano', es: 'Constructor Interactivo de Oraciones en Italiano', fr: 'Constructeur Interactif de Phrases Italiennes', de: 'Interaktiver Satzbau-Assistent' }
};

export const ItalianGrammarLab: React.FC<Props> = ({ missionId, lang }) => {
  if (!missionId.startsWith('itg5-')) return null;
  const mode = resolveQuintaMode(missionId);

  // Orthography pairs
  const [orthoIdx, setOrthoIdx] = useState(0);
  const orthoPairs = [
    { label: 'ho vs o', left: 'Ho un cane (avere = to have)', right: 'Tè o caffè? (or)' },
    { label: 'è vs e', left: 'Marco è alto (verb essere)', right: 'Pane e olio (and)' },
    { label: 'c’è / l’amica', left: 'l’amica (elision before vowel)', right: 'un amico (masc. without apostrophe)' },
    { label: 'ce / cie', left: 'cielo / cieco (keep i)', right: 'cena / voce (ce without i)' }
  ];

  // Lexicon gradient
  const [tempLevel, setTempLevel] = useState(2);
  const gradWords = [
    { word: 'gelido', gloss: 'freezing' },
    { word: 'freddo', gloss: 'cold' },
    { word: 'tiepido', gloss: 'lukewarm' },
    { word: 'caldo', gloss: 'warm/hot' },
    { word: 'bollente', gloss: 'boiling' }
  ];

  // Agreement builder
  const [gender, setGender] = useState<'m' | 'f'>('m');
  const [plural, setPlural] = useState(false);
  const [startKind, setStartKind] = useState<'cons' | 'vowel' | 'z'>('cons');

  // Verb timeline
  const [tense, setTense] = useState<'passato' | 'presente' | 'futuro'>('presente');
  const [passive, setPassive] = useState(false);

  // Syntax blocks
  const [addObj, setAddObj] = useState(true);
  const [addPlace, setAddPlace] = useState(false);
  const [addTime, setAddTime] = useState(false);

  const speak = (phrase: string) => {
    try {
      speakItalian(phrase, { rate: 0.88 });
    } catch {
      // ignore in SSR / unsupported browsers
    }
  };

  let phraseToHear = 'Giulia legge';
  if (mode === 'orthography') phraseToHear = orthoPairs[orthoIdx].left.split('(')[0].trim();
  if (mode === 'lexicon') phraseToHear = `L’acqua è ${gradWords[tempLevel].word}.`;

  let agreedPhrase = '';
  if (mode === 'agreement') {
    if (gender === 'm') {
      const noun = startKind === 'vowel' ? (plural ? 'amici' : 'amico') : startKind === 'z' ? (plural ? 'zaini' : 'zaino') : plural ? 'libri' : 'libro';
      const adj = plural ? 'nuovi' : 'nuovo';
      const art = !plural
        ? startKind === 'vowel'
          ? 'l’'
          : startKind === 'z'
          ? 'lo '
          : 'il '
        : startKind === 'cons'
        ? 'i '
        : 'gli ';
      agreedPhrase = `${art}${noun} ${adj}`;
    } else {
      const noun = startKind === 'vowel' ? (plural ? 'amiche' : 'amica') : plural ? 'case' : 'casa';
      const adj = plural ? 'nuove' : 'nuova';
      const art = !plural ? (startKind === 'vowel' ? 'l’' : 'la ') : 'le ';
      agreedPhrase = `${art}${noun} ${adj}`;
    }
    phraseToHear = agreedPhrase;
  }

  let verbSentence = '';
  if (mode === 'verbs') {
    if (!passive) {
      verbSentence =
        tense === 'passato'
          ? 'Ieri Luca ha letto il libro.'
          : tense === 'presente'
          ? 'Oggi Luca legge il libro.'
          : 'Domani Luca leggerà il libro.';
    } else {
      verbSentence =
        tense === 'passato'
          ? 'Ieri il libro è stato letto da Luca.'
          : tense === 'presente'
          ? 'Oggi il libro è letto da Luca.'
          : 'Domani il libro sarà letto da Luca.';
    }
    phraseToHear = verbSentence;
  }

  if (mode === 'syntax') {
    const parts = ['Giulia legge'];
    if (addObj) parts.push('un libro');
    if (addPlace) parts.push('in biblioteca');
    if (addTime) parts.push('nel pomeriggio');
    phraseToHear = `${parts.join(' ')}.`;
  }

  return (
    <section className="math-lab" data-testid="italian-grammar-lab" aria-label={L6(MODE_TITLES[mode], lang)}>
      <header className="ml-heading">
        <span className="ml-kicker">ITALIAN GRAMMAR LAB · LABORATORIO DI GRAMMATICA</span>
        <h3>{L6(MODE_TITLES[mode], lang)}</h3>
      </header>

      <div className="ml-grid">
        <div className="ml-stage">
          {mode === 'orthography' && (
            <div className="ml-factor-grid" aria-live="polite">
              <div>
                <span>Focus A</span>
                <b>{orthoPairs[orthoIdx].left}</b>
              </div>
              <div>
                <span>Contrast B</span>
                <b>{orthoPairs[orthoIdx].right}</b>
              </div>
            </div>
          )}

          {mode === 'lexicon' && (
            <>
              <div className="ml-percent" style={{ width: '100%' }}>
                <div style={{ width: `${((tempLevel + 1) / 5) * 100}%` }} />
                <b className="tabular-nums">{gradWords[tempLevel].word.toUpperCase()}</b>
              </div>
              <div className="ml-result" aria-live="polite">
                <small>Semantic intensity ({tempLevel + 1} / 5)</small>
                <strong>{gradWords[tempLevel].word} ({gradWords[tempLevel].gloss})</strong>
              </div>
            </>
          )}

          {mode === 'agreement' && (
            <div className="ml-result" aria-live="polite">
              <small>{gender === 'm' ? 'Masculine' : 'Feminine'} · {plural ? 'Plural' : 'Singular'}</small>
              <strong>{agreedPhrase}</strong>
            </div>
          )}

          {mode === 'verbs' && (
            <div className="ml-result" aria-live="polite">
              <small>{tense.toUpperCase()} · {passive ? 'PASSIVA (essere + participio)' : 'ATTIVA'}</small>
              <strong>{verbSentence}</strong>
            </div>
          )}

          {mode === 'syntax' && (
            <div className="ml-result" aria-live="polite">
              <small>Core: Soggetto + Predicato</small>
              <strong>{phraseToHear}</strong>
            </div>
          )}

          <div>
            <button type="button" className="btn cyan sm" onClick={() => speak(phraseToHear)}>
              🔊 {L6({ en: 'Listen in Italian', it: 'Ascolta in italiano', pt: 'Ouvir em italiano', es: 'Escuchar en italiano', fr: 'Écouter en italien', de: 'Auf Italienisch hören' }, lang)}
            </button>
          </div>
        </div>

        <div className="ml-controls">
          {mode === 'orthography' && (
            <div style={{ display: 'grid', gap: 6 }}>
              {orthoPairs.map((pair, idx) => (
                <button
                  key={pair.label}
                  type="button"
                  className={orthoIdx === idx ? 'btn cyan sm' : 'btn ghost sm'}
                  onClick={() => setOrthoIdx(idx)}
                >
                  {pair.label}
                </button>
              ))}
            </div>
          )}

          {mode === 'lexicon' && (
            <label className="ml-control">
              <span>
                Intensity scale
                <b className="tabular-nums">{gradWords[tempLevel].word}</b>
              </span>
              <input type="range" min={0} max={4} value={tempLevel} onChange={e => setTempLevel(Number(e.target.value))} />
            </label>
          )}

          {mode === 'agreement' && (
            <div style={{ display: 'grid', gap: 8 }}>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                <button type="button" className={gender === 'm' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setGender('m')}>Maschile</button>
                <button type="button" className={gender === 'f' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setGender('f')}>Femminile</button>
                <button type="button" className={!plural ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setPlural(false)}>Singolare</button>
                <button type="button" className={plural ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setPlural(true)}>Plurale</button>
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                <button type="button" className={startKind === 'cons' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setStartKind('cons')}>Consonante</button>
                <button type="button" className={startKind === 'vowel' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setStartKind('vowel')}>Vocale</button>
                <button type="button" className={startKind === 'z' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setStartKind('z')}>z / s+cons</button>
              </div>
            </div>
          )}

          {mode === 'verbs' && (
            <div style={{ display: 'grid', gap: 8 }}>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                <button type="button" className={tense === 'passato' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setTense('passato')}>Passato</button>
                <button type="button" className={tense === 'presente' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setTense('presente')}>Presente</button>
                <button type="button" className={tense === 'futuro' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setTense('futuro')}>Futuro</button>
              </div>
              <button type="button" className={passive ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setPassive(v => !v)}>
                {passive ? 'Voice: Passiva (on)' : 'Voice: Attiva (toggle Passiva)'}
              </button>
            </div>
          )}

          {mode === 'syntax' && (
            <div style={{ display: 'grid', gap: 6 }}>
              <button type="button" className={addObj ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setAddObj(v => !v)}>
                + Oggetto (un libro)
              </button>
              <button type="button" className={addPlace ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setAddPlace(v => !v)}>
                + Luogo (in biblioteca)
              </button>
              <button type="button" className={addTime ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setAddTime(v => !v)}>
                + Tempo (nel pomeriggio)
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
