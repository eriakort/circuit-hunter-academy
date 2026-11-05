import React, { useRef, useState } from 'react';
import { useGame } from '../context/GameContext';
import { L } from '../helpers';
import { Language, BilingualText } from '../types';

type Choice = { id: string; label: BilingualText };
type Challenge = {
  question: BilingualText;
  options: Choice[];
  answer: string;
  feedback: BilingualText;
};
type Stage = {
  id: string;
  title: BilingualText;
  subtitle: BilingualText;
  symbol: string;
  mechanic: BilingualText;
  questions: Challenge[];
};

const CHECKPOINT_ID = 'physics-foundations';
const REQUIRED_MISSIONS = ['p1m1', 'p1m2', 'p1m3', 'p1m4', 'p1m5'];
const PASS_SCORE = 10;
const TOTAL_QUESTIONS = 12;

const stages: Stage[] = [
  {
    id: 'forge',
    title: ['The Measurement Forge', 'La Forgia delle Misure'],
    subtitle: ['Restore the academy measurement instruments.', 'Ripristina gli strumenti di misura dell’accademia.'],
    symbol: '⚖',
    mechanic: ['Choose the correct tool or unit to repair each station.', 'Scegli lo strumento o l’unità corretta per riparare ogni postazione.'],
    questions: [
      {
        question: ['Which is the SI base unit for mass?', 'Qual è l’unità fondamentale SI della massa?'],
        options: [{ id: 'a', label: ['gram (g)', 'grammo (g)'] }, { id: 'b', label: ['kilogram (kg)', 'chilogrammo (kg)'] }, { id: 'c', label: ['newton (N)', 'newton (N)'] }, { id: 'd', label: ['tonne (t)', 'tonnellata (t)'] }],
        answer: 'b',
        feedback: ['The kilogram (kg) is the SI base unit for mass. A gram is a submultiple of it.', 'Il chilogrammo (kg) è l’unità fondamentale SI della massa. Il grammo è un suo sottomultiplo.']
      },
      {
        question: ['Which SI base unit measures time?', 'Quale unità fondamentale SI misura il tempo?'],
        options: [{ id: 'a', label: ['metre (m)', 'metro (m)'] }, { id: 'b', label: ['ampere (A)', 'ampere (A)'] }, { id: 'c', label: ['second (s)', 'secondo (s)'] }, { id: 'd', label: ['kelvin (K)', 'kelvin (K)'] }],
        answer: 'c',
        feedback: ['The second (s) is the SI base unit for time.', 'Il secondo (s) è l’unità fondamentale SI del tempo.']
      },
      {
        question: ['Which instrument is used to measure mass by comparing it with known masses?', 'Quale strumento misura la massa confrontandola con masse note?'],
        options: [{ id: 'a', label: ['thermometer', 'termometro'] }, { id: 'b', label: ['stopwatch', 'cronometro'] }, { id: 'c', label: ['ruler', 'righello'] }, { id: 'd', label: ['equal-arm balance', 'bilancia a bracci uguali'] }],
        answer: 'd',
        feedback: ['An equal-arm balance compares an object with known masses to determine its mass.', 'La bilancia a bracci uguali confronta un oggetto con masse note per determinarne la massa.']
      }
    ]
  },
  {
    id: 'time',
    title: ['The Time Gate', 'La Porta del Tempo'],
    subtitle: ['Power the gate by converting units and reading powers of ten.', 'Alimenta il portale convertendo le unità e leggendo le potenze di dieci.'],
    symbol: '⏱',
    mechanic: ['Select the result that opens each lock.', 'Seleziona il risultato che apre ogni serratura.'],
    questions: [
      {
        question: ['How many seconds are there in 1 hour?', 'Quanti secondi ci sono in 1 ora?'],
        options: [{ id: 'a', label: ['60 s', '60 s'] }, { id: 'b', label: ['600 s', '600 s'] }, { id: 'c', label: ['3,600 s', '3.600 s'] }, { id: 'd', label: ['36,000 s', '36.000 s'] }],
        answer: 'c',
        feedback: ['1 hour = 60 minutes × 60 seconds = 3,600 seconds.', '1 ora = 60 minuti × 60 secondi = 3.600 secondi.']
      },
      {
        question: ['Convert 42 days into seconds.', 'Converti 42 giorni in secondi.'],
        options: [{ id: 'a', label: ['362,880 s', '362.880 s'] }, { id: 'b', label: ['3,628,800 s', '3.628.800 s'] }, { id: 'c', label: ['86,400 s', '86.400 s'] }, { id: 'd', label: ['36,288,000 s', '36.288.000 s'] }],
        answer: 'b',
        feedback: ['42 × 24 × 60 × 60 = 3,628,800 seconds = 3.6288 × 10⁶ s.', '42 × 24 × 60 × 60 = 3.628.800 secondi = 3,6288 × 10⁶ s.']
      },
      {
        question: ['Write 3.2 × 10⁻³ as a decimal number.', 'Scrivi 3,2 × 10⁻³ come numero decimale.'],
        options: [{ id: 'a', label: ['0.032', '0,032'] }, { id: 'b', label: ['0.32', '0,32'] }, { id: 'c', label: ['0.00032', '0,00032'] }, { id: 'd', label: ['0.0032', '0,0032'] }],
        answer: 'd',
        feedback: ['A power of 10 with exponent −3 moves the decimal point three places to the left: 0.0032.', 'Una potenza di 10 con esponente −3 sposta la virgola di tre posti a sinistra: 0,0032.']
      }
    ]
  },
  {
    id: 'graph',
    title: ['The Graph Chamber', 'La Camera dei Grafici'],
    subtitle: ['Find the coordinates and restore the function display.', 'Trova le coordinate e ripristina il pannello delle funzioni.'],
    symbol: '⌖',
    mechanic: ['Read each graph clue carefully before choosing.', 'Leggi con attenzione ogni indizio sul grafico prima di scegliere.'],
    questions: [
      {
        question: ['To plot A(3, 2), which movement is correct from the origin?', 'Per rappresentare A(3; 2), quale spostamento è corretto partendo dall’origine?'],
        options: [{ id: 'a', label: ['3 right, then 2 up', '3 a destra, poi 2 in alto'] }, { id: 'b', label: ['2 right, then 3 up', '2 a destra, poi 3 in alto'] }, { id: 'c', label: ['3 left, then 2 up', '3 a sinistra, poi 2 in alto'] }, { id: 'd', label: ['2 left, then 3 down', '2 a sinistra, poi 3 in basso'] }],
        answer: 'a',
        feedback: ['Coordinates are written (x, y): move along x first, then along y.', 'Le coordinate si scrivono (x; y): prima ti sposti lungo x, poi lungo y.']
      },
      {
        question: ['On a distance–time graph, which quantity normally belongs on the horizontal x-axis?', 'In un grafico spazio-tempo, quale grandezza si trova normalmente sull’asse orizzontale x?'],
        options: [{ id: 'a', label: ['distance', 'distanza'] }, { id: 'b', label: ['mass', 'massa'] }, { id: 'c', label: ['time', 'tempo'] }, { id: 'd', label: ['temperature', 'temperatura'] }],
        answer: 'c',
        feedback: ['Time is the independent variable in this graph, so it is placed on the x-axis.', 'Il tempo è la variabile indipendente in questo grafico, quindi si colloca sull’asse x.']
      },
      {
        question: ['If y is a function of x, what must be true for every allowed x?', 'Se y è funzione di x, che cosa deve essere vero per ogni valore ammesso di x?'],
        options: [{ id: 'a', label: ['There are no y values', 'Non esistono valori di y'] }, { id: 'b', label: ['There is exactly one y value', 'Esiste un solo valore di y'] }, { id: 'c', label: ['There are always two y values', 'Esistono sempre due valori di y'] }, { id: 'd', label: ['The value of y must equal x', 'Il valore di y deve essere uguale a x'] }],
        answer: 'b',
        feedback: ['A function assigns one unique output y to each allowed input x.', 'Una funzione associa un unico valore di uscita y a ogni valore ammesso di x.']
      }
    ]
  },
  {
    id: 'trial',
    title: ['The Sensei’s Final Trial', 'La Prova Finale del Sensei'],
    subtitle: ['Combine everything you have learned to complete the checkpoint.', 'Combina tutto ciò che hai imparato per completare il checkpoint.'],
    symbol: '✦',
    mechanic: ['Defeat the final challenge with careful reasoning.', 'Supera la sfida finale ragionando con attenzione.'],
    questions: [
      {
        question: ['Which statement correctly compares mass and weight?', 'Quale affermazione confronta correttamente massa e peso?'],
        options: [{ id: 'a', label: ['Mass is a force measured in newtons', 'La massa è una forza misurata in newton'] }, { id: 'b', label: ['Mass changes when gravity changes', 'La massa cambia quando cambia la gravità'] }, { id: 'c', label: ['Mass stays the same; weight depends on gravity', 'La massa resta uguale; il peso dipende dalla gravità'] }, { id: 'd', label: ['Mass and weight are always identical', 'Massa e peso sono sempre identici'] }],
        answer: 'c',
        feedback: ['Mass describes the amount of matter; weight is the gravitational force acting on that mass.', 'La massa descrive la quantità di materia; il peso è la forza gravitazionale che agisce su quella massa.']
      },
      {
        question: ['Which physical quantity has the ampere (A) as its SI base unit?', 'Quale grandezza fisica ha l’ampere (A) come unità fondamentale SI?'],
        options: [{ id: 'a', label: ['electric current', 'corrente elettrica'] }, { id: 'b', label: ['temperature', 'temperatura'] }, { id: 'c', label: ['luminous intensity', 'intensità luminosa'] }, { id: 'd', label: ['amount of substance', 'quantità di sostanza'] }],
        answer: 'a',
        feedback: ['The ampere is the SI base unit for electric current.', 'L’ampere è l’unità fondamentale SI della corrente elettrica.']
      },
      {
        question: ['A cyclist moves at 4 m/s for 3 s. How far does she travel?', 'Una ciclista viaggia a 4 m/s per 3 s. Quanta distanza percorre?'],
        options: [{ id: 'a', label: ['7 m', '7 m'] }, { id: 'b', label: ['12 m', '12 m'] }, { id: 'c', label: ['1.3 m', '1,3 m'] }, { id: 'd', label: ['4 m', '4 m'] }],
        answer: 'b',
        feedback: ['Distance = speed × time = 4 m/s × 3 s = 12 m.', 'Distanza = velocità × tempo = 4 m/s × 3 s = 12 m.']
      }
    ]
  }
];

export const CheckpointScreen: React.FC = () => {
  const { state, goToView, saveCheckpointResult } = useGame();
  const { lang, cleared, subject, grade } = state;
  const progress = state.checkpointProgress?.[CHECKPOINT_ID];
  const unlocked = grade === 'grade9' && subject === 'phys' && REQUIRED_MISSIONS.every(id => !!cleared[id]);
  const [stageIndex, setStageIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<BilingualText | null>(null);
  const [finished, setFinished] = useState(false);
  const savedResult = useRef(false);

  const resetRun = () => {
    setStageIndex(0);
    setQuestionIndex(0);
    setScore(0);
    setSelected(null);
    setFeedback(null);
    setFinished(false);
    savedResult.current = false;
  };

  const finishRun = () => {
    if (savedResult.current) return;
    savedResult.current = true;
    const passed = score >= PASS_SCORE;
    saveCheckpointResult(CHECKPOINT_ID, score, TOTAL_QUESTIONS, passed, 50);
    setFinished(true);
  };

  const choose = (choice: Choice, question: Challenge) => {
    if (selected !== null) return;
    setSelected(choice.id);
    if (choice.id === question.answer) setScore(value => value + 1);
    setFeedback(question.feedback);
  };

  const next = () => {
    if (selected === null) return;
    const currentStage = stages[stageIndex];
    if (questionIndex + 1 < currentStage.questions.length) {
      setQuestionIndex(value => value + 1);
      setSelected(null);
      setFeedback(null);
      return;
    }
    if (stageIndex + 1 < stages.length) {
      setStageIndex(value => value + 1);
      setQuestionIndex(0);
      setSelected(null);
      setFeedback(null);
      return;
    }
    finishRun();
  };

  const title = ['Physics Foundations: The Sensei’s Trial', 'Fondamenti di fisica: la prova del Sensei'];
  const currentStage = stages[stageIndex];
  const question = currentStage.questions[questionIndex];
  const answeredCount = stages.slice(0, stageIndex).reduce((sum, stage) => sum + stage.questions.length, 0) + questionIndex;
  const displayedScore = score;

  if (!unlocked) {
    const completedCount = REQUIRED_MISSIONS.filter(id => !!cleared[id]).length;
    return (
      <section className="card" style={{ maxWidth: 900, margin: '24px auto', padding: 24 }}>
        <button className="btn ghost sm" onClick={() => goToView('map')}>{L(['← Back to Missions', '← Torna alle missioni'], lang)}</button>
        <p className="kicker" style={{ marginTop: 20 }}>{L(['PHYSICS CHECKPOINT', 'CHECKPOINT DI FISICA'], lang)}</p>
        <h1>{L(title, lang)}</h1>
        <p className="muted">{L(['Complete all five Physics Foundations missions to unlock this trial.', 'Completa tutte e cinque le missioni di Fondamenti di fisica per sbloccare questa prova.'], lang)}</p>
        <p><strong>{completedCount} / 5</strong> {L(['foundations missions cleared', 'missioni di fondamenti completate'], lang)}</p>
      </section>
    );
  }

  if (finished) {
    const passed = score >= PASS_SCORE;
    return (
      <section className="card" style={{ maxWidth: 900, margin: '24px auto', padding: 24 }}>
        <p className="kicker">{L(['PHYSICS CHECKPOINT · RESULTS', 'CHECKPOINT DI FISICA · RISULTATI'], lang)}</p>
        <div style={{ fontSize: 48, textAlign: 'center', margin: '16px 0' }}>{passed ? '🏅' : '⚔️'}</div>
        <h1 style={{ textAlign: 'center' }}>{L(passed ? ['Checkpoint cleared!', 'Checkpoint superato!'] : ['Training continues', 'L’allenamento continua'], lang)}</h1>
        <p style={{ textAlign: 'center', fontSize: 24, fontWeight: 800 }}>{score} / {TOTAL_QUESTIONS}</p>
        <p className="muted" style={{ textAlign: 'center' }}>{L(passed ? ['Excellent work. You have earned 50 XP (once only). Replay any time to improve your score.', 'Ottimo lavoro. Hai ottenuto 50 XP (una sola volta). Puoi ripetere la prova quando vuoi per migliorare il punteggio.'] : ['You need at least 10 correct answers. Review the foundations missions and try again.', 'Servono almeno 10 risposte corrette. Ripassa le missioni di fondamenti e riprova.'], lang)}</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 }}>
          <button className="btn cyan" onClick={resetRun}>{L(['Replay checkpoint', 'Ripeti il checkpoint'], lang)}</button>
          <button className="btn ghost" onClick={() => goToView('map')}>{L(['Back to Missions', 'Torna alle missioni'], lang)}</button>
        </div>
      </section>
    );
  }

  return (
    <section className="card" style={{ maxWidth: 960, margin: '24px auto', padding: 24 }}>
      <button className="btn ghost sm" onClick={() => goToView('map')}>{L(['← Exit checkpoint', '← Esci dal checkpoint'], lang)}</button>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginTop: 18 }}>
        <div>
          <p className="kicker">{L(['GRADE 9 · PHYSICS CHECKPOINT', 'CLASSE 3ª MEDIA · CHECKPOINT DI FISICA'], lang)}</p>
          <h1>{L(title, lang)}</h1>
          <p className="muted">{L(['Four mini-games · 12 challenges · 50 XP reward', 'Quattro minigiochi · 12 sfide · 50 XP di ricompensa'], lang)}</p>
        </div>
        <div style={{ fontSize: 42, padding: 16, borderRadius: 16, background: 'var(--panel2)' }}>⚡</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 8, margin: '22px 0' }}>
        {stages.map((stage, index) => (
          <div key={stage.id} style={{ padding: 10, borderRadius: 12, textAlign: 'center', border: '1px solid var(--line)', background: index === stageIndex ? 'var(--panel2)' : 'transparent', opacity: index > stageIndex ? 0.5 : 1 }}>
            <div style={{ fontSize: 24 }}>{stage.symbol}</div>
            <strong style={{ display: 'block', fontSize: 12 }}>{L(stage.title, lang)}</strong>
            <small>{index < stageIndex ? '✓' : index + 1}</small>
          </div>
        ))}
      </div>

      <div style={{ height: 8, borderRadius: 8, background: 'var(--line)', overflow: 'hidden', marginBottom: 20 }}>
        <div style={{ width: ((answeredCount / TOTAL_QUESTIONS) * 100) + '%', height: '100%', background: 'var(--data)', transition: 'width .2s' }} />
      </div>

      <div style={{ border: '1px solid var(--line)', borderRadius: 16, padding: 20, background: 'var(--panel2)' }}>
        <p className="kicker">{L(['STAGE', 'FASE'], lang)} {stageIndex + 1} / 4 · {L(['CHALLENGE', 'SFIDA'], lang)} {questionIndex + 1} / 3</p>
        <h2>{currentStage.symbol} {L(currentStage.title, lang)}</h2>
        <p className="muted">{L(currentStage.subtitle, lang)}</p>
        <p>{L(currentStage.mechanic, lang)}</p>
        <h3 style={{ marginTop: 24 }}>{L(question.question, lang)}</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 10, marginTop: 16 }}>
          {question.options.map(option => {
            const isSelected = selected === option.id;
            const isCorrect = option.id === question.answer;
            const background = selected === null ? 'transparent' : isCorrect ? 'rgba(50,190,120,.12)' : isSelected ? 'rgba(230,90,90,.12)' : 'transparent';
            return (
              <button
                key={option.id}
                type="button"
                data-testid="checkpoint-option"
                disabled={selected !== null}
                onClick={() => choose(option, question)}
                style={{ padding: '14px 12px', borderRadius: 12, border: '1px solid var(--line)', background, color: 'var(--text)', textAlign: 'left', cursor: selected === null ? 'pointer' : 'default', minHeight: 58 }}
              >
                {L(option.label, lang)}
              </button>
            );
          })}
        </div>
        {feedback && (
          <div role="status" style={{ marginTop: 16, padding: 14, borderRadius: 12, border: '1px solid var(--line)' }}>
            <strong>{selected === question.answer ? L(['Correct!', 'Corretto!'], lang) : L(['Not quite.', 'Non proprio.'], lang)}</strong>
            <p style={{ margin: '6px 0 0' }}>{L(feedback, lang)}</p>
          </div>
        )}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginTop: 20 }}>
          <span className="muted">{L(['Score', 'Punteggio'], lang)}: {displayedScore} · {L(['Best', 'Migliore'], lang)}: {progress?.bestScore ?? 0} / {TOTAL_QUESTIONS}</span>
          <button className="btn cyan" disabled={selected === null} onClick={next}>
            {answeredCount === TOTAL_QUESTIONS - 1 ? L(['Finish checkpoint', 'Concludi checkpoint'], lang) : L(['Continue', 'Continua'], lang)}
          </button>
        </div>
      </div>
    </section>
  );
};
