import React, { useMemo, useRef, useState } from 'react';
import type { Language } from '../types';
import type { BreakGame as BreakGameData, MatchPair } from '../data/breakGames';
import { BREAK_XP } from '../data/breakGames';

const t = (lang: Language, en: string, it: string) => (lang === 'it' ? it : en);

interface Props {
  game: BreakGameData;
  lang: Language;
  /** True when finishing the break can earn XP (first visit to the mission). */
  earnsXp: boolean;
  onFinish: (completed: boolean) => void;
}

function shuffleStable<T>(items: T[]): T[] {
  const a = items.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

const TITLES: Record<BreakGameData['kind'], [string, string, string, string]> = {
  truefalse: ['True or false?', 'Vero o falso?', 'Read the question and the answer someone gave. Is the answer right?', 'Leggi la domanda e la risposta data. È giusta?'],
  match: ['Match the pairs', 'Abbina le coppie', 'Tap a question, then the answer that goes with it.', 'Tocca una domanda, poi la risposta giusta.'],
  memory: ['Memory flip', 'Memory', 'Flip two cards to find each question and its answer.', 'Gira due carte per trovare ogni domanda con la sua risposta.'],
  gap: ['Fill the gap', 'Completa la frase', 'Pick the key word that belongs in the gap.', 'Scegli la parola chiave che manca.']
};

export const BreakGame: React.FC<Props> = ({ game, lang, earnsXp, onFinish }) => {
  const [result, setResult] = useState<{ score: number; total: number } | null>(null);
  const [title, , hint] = [t(lang, TITLES[game.kind][0], TITLES[game.kind][1]), '', t(lang, TITLES[game.kind][2], TITLES[game.kind][3])];
  const finish = (score: number, total: number) => setResult({ score, total });

  return (
    <section className="break-game" aria-label={t(lang, 'Study break', 'Pausa di studio')}>
      <div className="break-head">
        <span className="break-badge">{t(lang, 'STUDY BREAK', 'PAUSA DI STUDIO')}</span>
        <button className="btn ghost sm" id="break-skip" onClick={() => onFinish(false)}>{t(lang, 'Skip break', 'Salta la pausa')}</button>
      </div>
      <h2 className="break-title">{title}</h2>
      {!result && <p className="muted">{hint}</p>}
      {!result && game.kind === 'truefalse' && <TrueFalse rounds={game.rounds} lang={lang} onDone={finish} />}
      {!result && game.kind === 'match' && <Match pairs={game.pairs} lang={lang} onDone={finish} />}
      {!result && game.kind === 'memory' && <Memory pairs={game.pairs} lang={lang} onDone={finish} />}
      {!result && game.kind === 'gap' && <Gap rounds={game.rounds} lang={lang} onDone={finish} />}
      {result && (
        <div className="break-result" role="status">
          <div className="break-star" aria-hidden="true">★</div>
          <p><b>{t(lang, 'Break complete!', 'Pausa completata!')}</b> {result.score} / {result.total}{earnsXp ? ` · +${BREAK_XP} XP` : ''}</p>
          <button className="btn" id="break-continue" onClick={() => onFinish(true)}>{t(lang, 'Back to the lesson', 'Torna alla lezione')}</button>
        </div>
      )}
    </section>
  );
};

/* ------------------------------------------------------------ true / false */

const TrueFalse: React.FC<{ rounds: Extract<BreakGameData, { kind: 'truefalse' }>['rounds']; lang: Language; onDone: (s: number, t: number) => void }> = ({ rounds, lang, onDone }) => {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<boolean | null>(null);
  const r = rounds[i];
  const answer = (value: boolean) => {
    if (picked !== null) return;
    setPicked(value);
    if (value === r.isTrue) setScore(s => s + 1);
  };
  const next = () => {
    if (i + 1 >= rounds.length) onDone(score, rounds.length);
    else { setI(i + 1); setPicked(null); }
  };
  const correct = picked !== null && picked === r.isTrue;
  return (
    <div className="break-tf" key={i}>
      <div className="count">{i + 1} / {rounds.length}</div>
      <div className="break-card"><small>{t(lang, 'Question', 'Domanda')}</small><p>{r.question}</p></div>
      <div className="break-card proposed"><small>{t(lang, 'Someone answered', 'Qualcuno ha risposto')}</small><p>{r.proposed}</p></div>
      <div className="break-tf-buttons">
        <button className={`btn ${picked === true ? (correct ? 'right' : 'wrong') : ''}`} disabled={picked !== null} onClick={() => answer(true)}>{t(lang, 'True', 'Vero')}</button>
        <button className={`btn ${picked === false ? (correct ? 'right' : 'wrong') : ''}`} disabled={picked !== null} onClick={() => answer(false)}>{t(lang, 'False', 'Falso')}</button>
      </div>
      <div className={`fb ${picked === null ? '' : correct ? 'ok fb-pop' : 'no fb-pop'}`} aria-live="polite">
        {picked !== null && (<><b>{correct ? t(lang, 'Yes!', 'Sì!') : t(lang, 'Not quite.', 'Non proprio.')}</b> {r.why}{' '}
          <button className="btn cyan sm" onClick={next} autoFocus>{i + 1 >= rounds.length ? t(lang, 'Finish', 'Fine') : t(lang, 'Next', 'Avanti')}</button></>)}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------ match pairs */

const Match: React.FC<{ pairs: MatchPair[]; lang: Language; onDone: (s: number, t: number) => void }> = ({ pairs, lang, onDone }) => {
  const answers = useMemo(() => shuffleStable(pairs.map((p, k) => ({ k, text: p.answer }))), [pairs]);
  const [left, setLeft] = useState<number | null>(null);
  const [matched, setMatched] = useState<number[]>([]);
  const [wrong, setWrong] = useState<number | null>(null);
  const [slips, setSlips] = useState(0);
  const pickAnswer = (k: number) => {
    if (left === null || matched.includes(k)) return;
    if (k === left) {
      const next = [...matched, k];
      setMatched(next); setLeft(null);
      if (next.length === pairs.length) onDone(Math.max(0, pairs.length - slips), pairs.length);
    } else {
      setSlips(s => s + 1); setWrong(k);
      window.setTimeout(() => setWrong(null), 450);
    }
  };
  return (
    <div className="break-match">
      <div className="break-col">
        {pairs.map((p, k) => (
          <button key={k} className={`break-tile${matched.includes(k) ? ' done' : ''}${left === k ? ' sel' : ''}`} disabled={matched.includes(k)} onClick={() => setLeft(k)}>{p.question}</button>
        ))}
      </div>
      <div className="break-col">
        {answers.map(a => (
          <button key={a.k} className={`break-tile${matched.includes(a.k) ? ' done' : ''}${wrong === a.k ? ' shake' : ''}`} disabled={matched.includes(a.k)} onClick={() => pickAnswer(a.k)}>{a.text}</button>
        ))}
      </div>
      <div className="fb" aria-live="polite">{left === null ? '' : t(lang, 'Now tap its answer.', 'Ora tocca la risposta.')}</div>
    </div>
  );
};

/* ------------------------------------------------------------ memory flip */

const Memory: React.FC<{ pairs: MatchPair[]; lang: Language; onDone: (s: number, t: number) => void }> = ({ pairs, lang, onDone }) => {
  const cards = useMemo(
    () => shuffleStable(pairs.flatMap((p, k) => [{ id: `q${k}`, k, text: p.question, q: true }, { id: `a${k}`, k, text: p.answer, q: false }])),
    [pairs]
  );
  const [open, setOpen] = useState<string[]>([]);
  const [done, setDone] = useState<number[]>([]);
  const misses = useRef(0);
  const lock = useRef(false);
  const flip = (id: string) => {
    if (lock.current || open.includes(id)) return;
    const card = cards.find(c => c.id === id)!;
    if (done.includes(card.k)) return;
    const now = [...open, id];
    setOpen(now);
    if (now.length === 2) {
      const [a, b] = now.map(x => cards.find(c => c.id === x)!);
      if (a.k === b.k && a.q !== b.q) {
        const nd = [...done, a.k];
        setDone(nd); setOpen([]);
        if (nd.length === pairs.length) onDone(Math.max(1, pairs.length - Math.max(0, misses.current - 2)), pairs.length);
      } else {
        misses.current += 1;
        lock.current = true;
        window.setTimeout(() => { setOpen([]); lock.current = false; }, 900);
      }
    }
  };
  return (
    <div className="break-memory">
      {cards.map(c => {
        const faceUp = open.includes(c.id) || done.includes(c.k);
        return (
          <button key={c.id} className={`mem-card${faceUp ? ' up' : ''}${done.includes(c.k) ? ' done' : ''}`} onClick={() => flip(c.id)} aria-label={faceUp ? c.text : t(lang, 'Hidden card', 'Carta coperta')}>
            <span className="mem-inner">
              <span className="mem-back" aria-hidden="true">?</span>
              <span className="mem-front"><small>{c.q ? t(lang, 'Q', 'D') : t(lang, 'A', 'R')}</small>{c.text}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
};

/* ------------------------------------------------------------ fill the gap */

const Gap: React.FC<{ rounds: Extract<BreakGameData, { kind: 'gap' }>['rounds']; lang: Language; onDone: (s: number, t: number) => void }> = ({ rounds, lang, onDone }) => {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [first, setFirst] = useState(true);
  const [wrongChoices, setWrongChoices] = useState<string[]>([]);
  const [solved, setSolved] = useState(false);
  const r = rounds[i];
  const choose = (c: string) => {
    if (solved) return;
    if (c === r.answer) { setSolved(true); if (first) setScore(s => s + 1); }
    else { setFirst(false); setWrongChoices(w => [...w, c]); }
  };
  const next = () => {
    if (i + 1 >= rounds.length) onDone(score, rounds.length);
    else { setI(i + 1); setFirst(true); setWrongChoices([]); setSolved(false); }
  };
  const [before, after] = r.sentence.split('_____');
  return (
    <div className="break-gap" key={i}>
      <div className="count">{i + 1} / {rounds.length}</div>
      <p className="break-sentence">{before}<span className={`gap-slot${solved ? ' filled' : ''}`}>{solved ? r.answer : '      '}</span>{after}</p>
      <div className="cats">
        {r.choices.map(c => (
          <button key={c} className={`btn ghost cat${solved && c === r.answer ? ' right' : ''}${wrongChoices.includes(c) ? ' wrong shake' : ''}`} disabled={solved || wrongChoices.includes(c)} onClick={() => choose(c)}>{c}</button>
        ))}
      </div>
      <div className={`fb ${solved ? 'ok fb-pop' : wrongChoices.length ? 'no fb-pop' : ''}`} aria-live="polite">
        {solved && (<><b>{t(lang, 'Yes!', 'Sì!')}</b> <button className="btn cyan sm" onClick={next} autoFocus>{i + 1 >= rounds.length ? t(lang, 'Finish', 'Fine') : t(lang, 'Next', 'Avanti')}</button></>)}
        {!solved && wrongChoices.length > 0 && t(lang, 'Not that one. Try another word.', 'Non quella. Prova un\'altra parola.')}
      </div>
    </div>
  );
};
