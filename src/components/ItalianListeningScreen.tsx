import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Flag } from './Flag';
import { useGame } from '../context/GameContext';
import { L } from '../helpers';
import { GrammarLevel } from '../data/italianGrammar';
import {
  ITALIAN_LISTENING_PASSAGES,
  LISTENING_THEME_LABELS,
  ListeningTheme,
  ListeningPassage
} from '../data/italianListening';
import {
  speakItalian,
  stopSpeaking,
  pauseSpeaking,
  resumeSpeaking,
  isCurrentlySpeaking,
  isSpeakingPaused,
  isSpeechSynthesisSupported
} from '../speech/speechEngine';

const LEVELS: GrammarLevel[] = ['A1', 'A2', 'B1'];
const THEMES: ListeningTheme[] = ['everyday', 'travel', 'work'];
const SPEEDS: { rate: number; label: [string, string] }[] = [
  { rate: 0.6, label: ['0.6× Very slow', '0,6× Molto lento'] },
  { rate: 0.75, label: ['0.75× Slow', '0,75× Lento'] },
  { rate: 0.9, label: ['0.9× Normal', '0,9× Normale'] },
  { rate: 1.0, label: ['1.0× Natural', '1,0× Naturale'] }
];

export const ItalianListeningScreen: React.FC = () => {
  const { state, goToView } = useGame();
  const { lang } = state;

  const [level, setLevel] = useState<GrammarLevel>('A1');
  const [theme, setTheme] = useState<ListeningTheme>('everyday');
  const [passageIndex, setPassageIndex] = useState(0);
  const [speed, setSpeed] = useState(0.9);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);
  const [showTranscript, setShowTranscript] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  // Per-passage score memory for the current session only.
  const [sessionScores, setSessionScores] = useState<Record<string, { correct: number; total: number }>>({});
  const utteranceKeyRef = useRef<string | null>(null);

  const passages = useMemo(
    () => ITALIAN_LISTENING_PASSAGES.filter(p => p.level === level && p.theme === theme),
    [level, theme]
  );
  const passage: ListeningPassage | undefined = passages[passageIndex] || passages[0];

  // Stop any audio when leaving the screen or switching passage.
  useEffect(() => () => { stopSpeaking(); }, []);
  useEffect(() => {
    stopSpeaking();
    setIsSpeaking(false);
    setIsPaused(false);
    utteranceKeyRef.current = null;
    setAnswers({});
    setShowTranscript(false);
  }, [passage?.id]);

  const speechSupported = isSpeechSynthesisSupported();

  const handlePlay = (rate: number = speed) => {
    if (!passage) return;
    const key = `${rate}|${passage.id}`;
    // Toggle pause/resume if the same utterance is active.
    if (isCurrentlySpeaking() && utteranceKeyRef.current === key) {
      if (isSpeakingPaused()) { resumeSpeaking(); setIsPaused(false); }
      else { pauseSpeaking(); setIsPaused(true); }
      return;
    }
    setAudioError(null);
    utteranceKeyRef.current = key;
    setIsPaused(false);
    setIsSpeaking(true);
    speakItalian(passage.text, {
      rate,
      onStart: () => setIsSpeaking(true),
      onEnd: () => { setIsSpeaking(false); setIsPaused(false); utteranceKeyRef.current = null; },
      onError: () => {
        setIsSpeaking(false); setIsPaused(false); utteranceKeyRef.current = null;
        setAudioError('speech-playback-failed');
      }
    });
  };

  const handleStop = () => {
    stopSpeaking();
    setIsSpeaking(false);
    setIsPaused(false);
    utteranceKeyRef.current = null;
  };

  const changeSpeed = (rate: number) => {
    setSpeed(rate);
    if (isSpeaking) handlePlay(rate); // restart at the new speed
  };

  const selectPassage = (idx: number) => {
    handleStop();
    setPassageIndex(idx);
  };

  const answerQuestion = (questionId: string, optionIndex: number) => {
    if (answers[questionId] !== undefined) return; // lock after first answer
    const next = { ...answers, [questionId]: optionIndex };
    setAnswers(next);
    if (!passage) return;
    // When every question is answered, record the session score.
    const allAnswered = passage.questions.every(q => next[q.id] !== undefined);
    if (allAnswered) {
      const correct = passage.questions.filter(q => next[q.id] === q.answer).length;
      setSessionScores(prev => ({ ...prev, [passage.id]: { correct, total: passage.questions.length } }));
    }
  };

  const answeredCount = passage ? passage.questions.filter(q => answers[q.id] !== undefined).length : 0;
  const correctCount = passage ? passage.questions.filter(q => answers[q.id] === q.answer).length : 0;
  const allAnswered = passage ? answeredCount === passage.questions.length : false;

  const retry = () => {
    setAnswers({});
    setShowTranscript(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <section className="card" style={{ border: '1px solid rgba(0,146,70,.35)', background: 'linear-gradient(135deg, rgba(17,25,54,.96), rgba(0,146,70,.10) 58%, rgba(206,43,55,.08)' }}>
        <div className="eyebrow" style={{ color: '#4ade80' }}><Flag country="IT" /> {L(['ITALIAN LISTENING LAB · CEFR A1–B1', 'LABORATORIO DI ASCOLTO · QCER A1–B1'], lang)}</div>
        <h1 style={{ margin: '5px 0 8px', fontSize: 26 }}>{L(['Train your ear with real stories', 'Allena l’orecchio con storie reali'], lang)}</h1>
        <p className="muted" style={{ margin: 0, lineHeight: 1.6 }}>
          {L(['Listen to a short Italian passage at a speed you choose, then answer comprehension questions. Replay as many times as you like, and reveal the transcript only when you are ready.', 'Ascolta un breve brano in italiano alla velocità che preferisci, poi rispondi alle domande di comprensione. Riascolta quante volte vuoi e scopri la trascrizione solo quando sei pronto.'], lang)}
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 14 }}>
          <button type="button" className="btn ghost sm" onClick={() => goToView('it-grammar')}>📚 {L(['Grammar Training', 'Allenamento Grammaticale'], lang)}</button>
          <button type="button" className="btn ghost sm" onClick={() => goToView('it-lab')}>🎙️ {L(['Speaking Lab', 'Laboratorio Parlato'], lang)}</button>
          <button type="button" className="btn ghost sm" onClick={() => goToView('map')}>← {L(['Missions', 'Missioni'], lang)}</button>
        </div>
        {!speechSupported && (
          <div role="status" style={{ marginTop: 12, padding: 12, borderRadius: 9, border: '1px solid rgba(248,113,113,.45)', background: 'rgba(248,113,113,.08)' }}>
            {L(['Your browser does not support audio playback. You can still read each passage and answer the questions using the transcript.', 'Il tuo browser non supporta la riproduzione audio. Puoi comunque leggere i brani e rispondere usando la trascrizione.'], lang)}
          </div>
        )}
      </section>

      {/* STEP 1 — level + theme */}
      <section className="card">
        <div className="mhead" style={{ alignItems: 'center' }}>
          <div><div className="eyebrow">{L(['STEP 1 · CHOOSE LEVEL & THEME', 'PASSO 1 · SCEGLI LIVELLO E TEMA'], lang)}</div><h2>{L(['Pick a passage', 'Scegli un brano'], lang)}</h2></div>
          <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
            {LEVELS.map(item => (
              <button key={item} type="button" className={level === item ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => { handleStop(); setLevel(item); setPassageIndex(0); }}>{item}</button>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', marginTop: 12 }}>
          {THEMES.map(item => (
            <button key={item} type="button" className={theme === item ? 'btn sm' : 'btn ghost sm'} onClick={() => { handleStop(); setTheme(item); setPassageIndex(0); }}>
              {L(LISTENING_THEME_LABELS[item], lang)}
            </button>
          ))}
        </div>
        {passages.length > 1 && (
          <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', marginTop: 12 }}>
            {passages.map((p, idx) => {
              const score = sessionScores[p.id];
              return (
                <button key={p.id} type="button" className={passageIndex === idx ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => selectPassage(idx)} style={{ textAlign: 'left' }}>
                  {L(p.title, lang)}{score ? ` · ${score.correct}/${score.total}` : ''}
                </button>
              );
            })}
          </div>
        )}
      </section>

      {passage && (
        <>
          {/* STEP 2 — the player */}
          <section className="card">
            <div className="mhead">
              <div><div className="eyebrow">{L(['STEP 2 · LISTEN', 'PASSO 2 · ASCOLTA'], lang)}</div><h2>{L(passage.title, lang)}</h2></div>
              <span className="badge">{passage.level} · {L(LISTENING_THEME_LABELS[passage.theme], lang)}</span>
            </div>
            <p className="muted" style={{ lineHeight: 1.55, marginTop: 6 }}>{L(passage.intro, lang)}</p>

            {/* Speed selector */}
            <div style={{ marginTop: 12 }}>
              <div className="eyebrow" style={{ marginBottom: 6 }}>{L(['PLAYBACK SPEED', 'VELOCITÀ DI ASCOLTO'], lang)}</div>
              <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                {SPEEDS.map(s => (
                  <button key={s.rate} type="button" className={speed === s.rate ? 'btn cyan sm' : 'btn ghost sm'} disabled={!speechSupported} onClick={() => changeSpeed(s.rate)}>
                    {L(s.label, lang)}
                  </button>
                ))}
              </div>
            </div>

            {/* Transport controls */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 14 }}>
              <button type="button" className="btn" disabled={!speechSupported} onClick={() => handlePlay()}>
                {isSpeaking && !isPaused ? `⏸ ${L(['Pause', 'Pausa'], lang)}` : isPaused ? `▶ ${L(['Resume', 'Riprendi'], lang)}` : `▶ ${L(['Play', 'Ascolta'], lang)}`}
              </button>
              <button type="button" className="btn ghost" disabled={!speechSupported || (!isSpeaking && !isPaused)} onClick={handleStop}>
                ⏹ {L(['Stop', 'Ferma'], lang)}
              </button>
              <button type="button" className="btn ghost" disabled={!speechSupported} onClick={() => handlePlay()}>
                🔁 {L(['Replay', 'Riascolta'], lang)}
              </button>
            </div>
            {audioError && (
              <p role="status" style={{ marginTop: 10, color: '#f87171' }}>
                {L(['Audio playback failed. Try another browser, or read the transcript below.', 'Riproduzione audio non riuscita. Prova un altro browser o leggi la trascrizione qui sotto.'], lang)}
              </p>
            )}

            {/* Glossary */}
            {passage.glossary.length > 0 && (
              <div style={{ marginTop: 14, padding: 12, borderRadius: 9, background: 'rgba(0,146,70,.08)', border: '1px solid rgba(0,146,70,.2)' }}>
                <div className="eyebrow">{L(['KEY WORDS · PAROLE CHIAVE', 'PAROLE CHIAVE'], lang)}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 6 }}>
                  {passage.glossary.map(g => (
                    <span key={g.it} style={{ fontSize: 14 }}><strong>{g.it}</strong> — <span className="muted">{g.en}</span></span>
                  ))}
                </div>
              </div>
            )}

            {/* Transcript (hidden by default to encourage listening) */}
            <div style={{ marginTop: 14 }}>
              <button type="button" className="btn ghost sm" onClick={() => setShowTranscript(v => !v)}>
                {showTranscript ? `🙈 ${L(['Hide transcript', 'Nascondi la trascrizione'], lang)}` : `📄 ${L(['Show transcript', 'Mostra la trascrizione'], lang)}`}
              </button>
              {showTranscript && (
                <div style={{ marginTop: 10, padding: 14, borderRadius: 10, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.12)' }}>
                  <p style={{ margin: 0, lineHeight: 1.7, fontSize: 16 }}>{passage.text}</p>
                  <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,.12)', margin: '12px 0' }} />
                  <p style={{ margin: 0, lineHeight: 1.6, fontSize: 14 }} className="muted">{L(passage.transcript, lang)}</p>
                </div>
              )}
            </div>
          </section>

          {/* STEP 3 — comprehension questions */}
          <section className="card">
            <div className="mhead">
              <div><div className="eyebrow">{L(['STEP 3 · COMPREHENSION', 'PASSO 3 · COMPRENSIONE'], lang)} · {answeredCount}/{passage.questions.length}</div><h2>{L(['Answer the questions', 'Rispondi alle domande'], lang)}</h2></div>
              {allAnswered && <span className="badge" style={{ color: correctCount === passage.questions.length ? '#4ade80' : undefined }}>{correctCount}/{passage.questions.length} ✓</span>}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 8 }}>
              {passage.questions.map((q, qi) => {
                const chosen = answers[q.id];
                const revealed = chosen !== undefined;
                return (
                  <div key={q.id}>
                    <p style={{ fontSize: 16, fontWeight: 650, lineHeight: 1.5, margin: '0 0 8px' }}>{qi + 1}. {L(q.prompt, lang)}</p>
                    <div style={{ display: 'grid', gap: 8 }}>
                      {q.options.map((option, index) => {
                        const isChosen = chosen === index;
                        const isCorrect = index === q.answer;
                        return (
                          <button
                            key={option}
                            type="button"
                            className="btn ghost"
                            disabled={revealed}
                            onClick={() => answerQuestion(q.id, index)}
                            style={{
                              textAlign: 'left', whiteSpace: 'normal',
                              borderColor: revealed && isCorrect ? '#4ade80' : revealed && isChosen ? '#f87171' : undefined,
                              background: revealed && isCorrect ? 'rgba(34,197,94,.12)' : revealed && isChosen && !isCorrect ? 'rgba(248,113,113,.10)' : undefined
                            }}
                          >
                            <span style={{ display: 'inline-block', minWidth: 24, fontWeight: 800 }}>{String.fromCharCode(65 + index)}.</span> {option}
                            {revealed && isCorrect && <span style={{ float: 'right' }}>✓</span>}
                            {revealed && isChosen && !isCorrect && <span style={{ float: 'right' }}>✕</span>}
                          </button>
                        );
                      })}
                    </div>
                    {revealed && (
                      <div role="status" aria-live="polite" style={{ marginTop: 8, padding: 12, borderRadius: 9, border: '1px solid ' + (chosen === q.answer ? 'rgba(74,222,128,.45)' : 'rgba(248,113,113,.45)'), background: chosen === q.answer ? 'rgba(34,197,94,.08)' : 'rgba(248,113,113,.08)' }}>
                        <strong>{chosen === q.answer ? L(['Correct! Ben fatto!', 'Corretto! Ben fatto!'], lang) : L(['Not quite — listen again.', 'Non proprio — riascolta.'], lang)}</strong>
                        <p style={{ margin: '5px 0 0', lineHeight: 1.5 }}>{L(q.explanation, lang)}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {allAnswered && (
              <div style={{ marginTop: 16, padding: 14, borderRadius: 10, background: 'rgba(0,146,70,.08)', border: '1px solid rgba(0,146,70,.22)' }}>
                <strong style={{ fontSize: 16 }}>
                  {correctCount === passage.questions.length
                    ? L(['Perfect listening! 🏆', 'Ascolto perfetto! 🏆'], lang)
                    : L([`You got ${correctCount} of ${passage.questions.length}. Replay the passage and try again.`, `Hai risposto a ${correctCount} su ${passage.questions.length}. Riascolta e riprova.`], lang)}
                </strong>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
                  <button type="button" className="btn sm" onClick={retry}>{L(['Try again', 'Riprova'], lang)}</button>
                  {passages.length > 1 && (
                    <button type="button" className="btn ghost sm" onClick={() => selectPassage((passageIndex + 1) % passages.length)}>
                      {L(['Next passage', 'Prossimo brano'], lang)} →
                    </button>
                  )}
                </div>
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
};

export default ItalianListeningScreen;
