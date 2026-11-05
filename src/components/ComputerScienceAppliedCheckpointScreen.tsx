import React, { useRef, useState } from 'react';
import { useGame } from '../context/GameContext';
import { L } from '../helpers';
import { BilingualText } from '../types';

type Choice = { id: string; label: BilingualText };
type Challenge = { question: BilingualText; options: Choice[]; answer: string; feedback: BilingualText };
type Stage = { id: string; title: BilingualText; subtitle: BilingualText; symbol: string; questions: Challenge[] };

const CHECKPOINT_ID = 'computer-science-applied-skills';
const REQUIRED_MISSIONS = [
  'c6m1', 'c6m2', 'c6m3',
  'c9m1', 'c9m2', 'c9m3',
  'c11m1', 'c11m2', 'c11m3',
  'c12m1', 'c12m2', 'c12m3',
  'c13m1', 'c13m2', 'c14m1', 'c14m2',
  'c15m1', 'c15m2', 'c16m1', 'c16m2'
];
const PASS_SCORE = 10;
const TOTAL_QUESTIONS = 12;

const stages: Stage[] = [
  {
    id: 'cyber',
    title: ['Cyber Shield Arena', 'Arena dello Scudo Cyber'],
    subtitle: ['Protect an account, identify threats and choose a safe recovery plan.', 'Proteggi un account, riconosci le minacce e scegli un piano di recupero sicuro.'],
    symbol: '🛡️',
    questions: [
      {
        question: ['Which password is the strongest choice for an important account?', 'Quale password è la scelta più sicura per un account importante?'],
        options: [
          { id: 'a', label: ['mario123', 'mario123'] },
          { id: 'b', label: ['A long, unique passphrase that is not reused', 'Una passphrase lunga e unica, non riutilizzata'] },
          { id: 'c', label: ['The same password used everywhere', 'La stessa password usata ovunque'] },
          { id: 'd', label: ['Your date of birth', 'La tua data di nascita'] }
        ],
        answer: 'b',
        feedback: ['A long, unique password limits the damage if another service is breached. A password manager can help.', 'Una password lunga e unica limita i danni se un altro servizio subisce una violazione. Può aiutare un gestore di password.']
      },
      {
        question: ['A message says your account will close unless you click a strange link immediately. What should you do?', 'Un messaggio dice che il tuo account verrà chiuso se non clicchi subito un link sospetto. Che cosa dovresti fare?'],
        options: [
          { id: 'a', label: ['Click quickly and enter your password', 'Cliccare subito e inserire la password'] },
          { id: 'b', label: ['Forward it to all your friends', 'Inoltrarlo a tutti gli amici'] },
          { id: 'c', label: ['Avoid the link and verify through the official app or website', 'Evitare il link e verificare tramite l’app o il sito ufficiale'] },
          { id: 'd', label: ['Download the attachment', 'Scaricare l’allegato'] }
        ],
        answer: 'c',
        feedback: ['Urgency and suspicious links are common phishing signals. Verify independently using a trusted channel.', 'Urgenza e link sospetti sono segnali tipici di phishing. Verifica autonomamente usando un canale affidabile.']
      },
      {
        question: ['Why is keeping a separate backup useful against ransomware?', 'Perché conservare una copia di backup separata è utile contro il ransomware?'],
        options: [
          { id: 'a', label: ['It guarantees malware cannot enter', 'Garantisce che il malware non possa entrare'] },
          { id: 'b', label: ['It can help restore files without paying the attacker', 'Può aiutare a recuperare i file senza pagare l’attaccante'] },
          { id: 'c', label: ['It makes every password stronger', 'Rende più sicure tutte le password'] },
          { id: 'd', label: ['It replaces software updates', 'Sostituisce gli aggiornamenti software'] }
        ],
        answer: 'b',
        feedback: ['A tested, isolated backup can help recover data after an attack. It does not prevent infection by itself.', 'Un backup verificato e isolato può aiutare a recuperare i dati dopo un attacco. Da solo non impedisce l’infezione.']
      }
    ]
  },
  {
    id: 'sheets',
    title: ['Spreadsheet Strategy Grid', 'Griglia strategica dei fogli di calcolo'],
    subtitle: ['Repair formulas and make the spreadsheet calculate the right result.', 'Correggi le formule e fai calcolare al foglio il risultato corretto.'],
    symbol: '📊',
    questions: [
      {
        question: ['Cells B2, B3 and B4 contain 5, 7 and 8. What does =SUM(B2:B4) return?', 'Le celle B2, B3 e B4 contengono 5, 7 e 8. Che cosa restituisce =SOMMA(B2:B4)?'],
        options: [
          { id: 'a', label: ['15', '15'] },
          { id: 'b', label: ['20', '20'] },
          { id: 'c', label: ['578', '578'] },
          { id: 'd', label: ['8', '8'] }
        ],
        answer: 'b',
        feedback: ['SUM adds all values in the range: 5 + 7 + 8 = 20.', 'SOMMA addiziona tutti i valori dell’intervallo: 5 + 7 + 8 = 20.']
      },
      {
        question: ['You copy =$A$1+B2 one row down. Which formula appears?', 'Copi =$A$1+B2 una riga più in basso. Quale formula compare?'],
        options: [
          { id: 'a', label: ['=$A$1+B3', '=$A$1+B3'] },
          { id: 'b', label: ['=$A$2+B2', '=$A$2+B2'] },
          { id: 'c', label: ['=A1+B2', '=A1+B2'] },
          { id: 'd', label: ['=$A$1+B2', '=$A$1+B2'] }
        ],
        answer: 'a',
        feedback: ['The absolute reference $A$1 stays fixed; the relative reference B2 moves to B3.', 'Il riferimento assoluto $A$1 resta fisso; quello relativo B2 diventa B3.']
      },
      {
        question: ['A cell should show “Pass” when the score in C2 is at least 60, otherwise “Try again”. Which formula is correct?', 'Una cella deve mostrare “Superato” se il punteggio in C2 è almeno 60, altrimenti “Riprova”. Quale formula è corretta?'],
        options: [
          { id: 'a', label: ['=SUM(C2>=60)', '=SOMMA(C2>=60)'] },
          { id: 'b', label: ['=IF(C2>=60,"Pass","Try again")', '=SE(C2>=60;"Superato";"Riprova")'] },
          { id: 'c', label: ['=COUNT(C2)', '=CONTA.NUMERI(C2)'] },
          { id: 'd', label: ['=C2+60', '=C2+60'] }
        ],
        answer: 'b',
        feedback: ['IF tests a condition and returns one result when true and another when false.', 'SE verifica una condizione e restituisce un risultato se è vera e un altro se è falsa.']
      }
    ]
  },
  {
    id: 'python-logic',
    title: ['Python Logic Lab', 'Laboratorio di logica Python'],
    subtitle: ['Choose the correct branch and predict the program output.', 'Scegli il ramo corretto e prevedi il risultato del programma.'],
    symbol: '🐍',
    questions: [
      {
        question: ['What is the value and type of x after x = int("12")?', 'Quali sono il valore e il tipo di x dopo x = int("12")?'],
        options: [
          { id: 'a', label: ['The string "12"', 'La stringa "12"'] },
          { id: 'b', label: ['The integer 12', 'L’intero 12'] },
          { id: 'c', label: ['The float 12.0', 'Il float 12.0'] },
          { id: 'd', label: ['The Boolean True', 'Il booleano True'] }
        ],
        answer: 'b',
        feedback: ['int() converts a valid numeric string into an integer.', 'int() converte una stringa numerica valida in un numero intero.']
      },
      {
        question: ['What is printed by: for i in range(3): print(i)?', 'Che cosa viene stampato da: for i in range(3): print(i)?'],
        options: [
          { id: 'a', label: ['1, 2, 3', '1, 2, 3'] },
          { id: 'b', label: ['0, 1, 2', '0, 1, 2'] },
          { id: 'c', label: ['0, 1, 2, 3', '0, 1, 2, 3'] },
          { id: 'd', label: ['Only 3', 'Solo 3'] }
        ],
        answer: 'b',
        feedback: ['range(3) starts at 0 and stops before 3, so the values are 0, 1 and 2.', 'range(3) parte da 0 e si ferma prima di 3: i valori sono 0, 1 e 2.']
      },
      {
        question: ['Which condition is true only when both A and B are true?', 'Quale condizione è vera solo quando sia A sia B sono vere?'],
        options: [
          { id: 'a', label: ['A or B', 'A or B'] },
          { id: 'b', label: ['not A', 'not A'] },
          { id: 'c', label: ['A and B', 'A and B'] },
          { id: 'd', label: ['A == B always', 'A == B sempre'] }
        ],
        answer: 'c',
        feedback: ['The and operator is true only when both Boolean operands are true.', 'L’operatore and è vero solo quando entrambi gli operandi booleani sono veri.']
      }
    ]
  },
  {
    id: 'python-builder',
    title: ['Python Builder’s Trial', 'Prova del costruttore Python'],
    subtitle: ['Trace data structures and reusable functions to complete the final program.', 'Segui strutture dati e funzioni riutilizzabili per completare il programma finale.'],
    symbol: '⚙️',
    questions: [
      {
        question: ['What is the result of "CIRCUIT"[1:4] in Python?', 'Qual è il risultato di "CIRCUIT"[1:4] in Python?'],
        options: [
          { id: 'a', label: ['CIR', 'CIR'] },
          { id: 'b', label: ['IRC', 'IRC'] },
          { id: 'c', label: ['RCU', 'RCU'] },
          { id: 'd', label: ['IRCU', 'IRCU'] }
        ],
        answer: 'b',
        feedback: ['Slicing includes the start index and excludes the end index: indexes 1, 2 and 3 give IRC.', 'Lo slicing include l’indice iniziale ed esclude quello finale: gli indici 1, 2 e 3 producono IRC.']
      },
      {
        question: ['Which data structure follows LIFO (Last In, First Out)?', 'Quale struttura dati segue il principio LIFO (Last In, First Out)?'],
        options: [
          { id: 'a', label: ['Queue', 'Coda'] },
          { id: 'b', label: ['Stack', 'Pila'] },
          { id: 'c', label: ['Spreadsheet', 'Foglio di calcolo'] },
          { id: 'd', label: ['Network packet', 'Pacchetto di rete'] }
        ],
        answer: 'b',
        feedback: ['A stack removes the most recently added item first, like a pile of books.', 'Una pila rimuove per primo l’elemento aggiunto più di recente, come una pila di libri.']
      },
      {
        question: ['What does a Python function use return for?', 'A che cosa serve return in una funzione Python?'],
        options: [
          { id: 'a', label: ['To send a result back to the caller', 'Per restituire un risultato a chi ha chiamato la funzione'] },
          { id: 'b', label: ['To repeat a loop forever', 'Per ripetere un ciclo all’infinito'] },
          { id: 'c', label: ['To install a module', 'Per installare un modulo'] },
          { id: 'd', label: ['To rename a variable', 'Per rinominare una variabile'] }
        ],
        answer: 'a',
        feedback: ['return sends a value back to the code that called the function; print only displays information.', 'return restituisce un valore al codice che ha chiamato la funzione; print mostra soltanto un’informazione.']
      }
    ]
  }
];

export const ComputerScienceAppliedCheckpointScreen: React.FC = () => {
  const { state, goToView, saveCheckpointResult } = useGame();
  const { lang, cleared, subject, grade } = state;
  const progress = state.checkpointProgress?.[CHECKPOINT_ID];
  const unlocked = grade === 'grade9' && subject === 'cs' && REQUIRED_MISSIONS.every(id => !!cleared[id]);
  const [stageIndex, setStageIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  const [feedback, setFeedback] = useState<BilingualText | null>(null);
  const savedResult = useRef(false);

  const resetRun = () => {
    setStageIndex(0); setQuestionIndex(0); setScore(0);
    setSelected(null); setFeedback(null); setFinished(false); savedResult.current = false;
  };
  const finishRun = () => {
    if (savedResult.current) return;
    savedResult.current = true;
    saveCheckpointResult(CHECKPOINT_ID, score, TOTAL_QUESTIONS, score >= PASS_SCORE, 50);
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
    if (questionIndex < 2) {
      setQuestionIndex(value => value + 1); setSelected(null); setFeedback(null);
    } else if (stageIndex < stages.length - 1) {
      setStageIndex(value => value + 1); setQuestionIndex(0); setSelected(null); setFeedback(null);
    } else finishRun();
  };

  const title: BilingualText = ['Applied Computer Science: The Hunter’s Gauntlet', 'Informatica applicata: la prova del cacciatore'];
  const currentStage = stages[stageIndex];
  const question = currentStage.questions[questionIndex];
  const answeredCount = stageIndex * 3 + questionIndex;

  if (!unlocked) {
    const completedCount = REQUIRED_MISSIONS.filter(id => !!cleared[id]).length;
    return <section className="card" style={{ maxWidth: 900, margin: '24px auto', padding: 24 }}>
      <button className="btn ghost sm" onClick={() => goToView('map')}>{L(['← Back to Missions', '← Torna alle missioni'], lang)}</button>
      <p className="kicker" style={{ marginTop: 20 }}>{L(['APPLIED COMPUTER SCIENCE CHECKPOINT', 'CHECKPOINT DI INFORMATICA APPLICATA'], lang)}</p>
      <h1>{L(title, lang)}</h1>
      <p className="muted">{L(['Complete the 20 Cybersecurity, Spreadsheet and Python missions to unlock this advanced trial.', 'Completa le 20 missioni di sicurezza informatica, fogli di calcolo e Python per sbloccare questa prova avanzata.'], lang)}</p>
      <p><strong>{completedCount} / {REQUIRED_MISSIONS.length}</strong> {L(['advanced missions cleared', 'missioni avanzate completate'], lang)}</p>
    </section>;
  }

  if (finished) {
    const passed = score >= PASS_SCORE;
    return <section className="card" style={{ maxWidth: 900, margin: '24px auto', padding: 24 }}>
      <p className="kicker">{L(['APPLIED COMPUTER SCIENCE · RESULTS', 'INFORMATICA APPLICATA · RISULTATI'], lang)}</p>
      <div style={{ fontSize: 48, textAlign: 'center', margin: '16px 0' }}>{passed ? '🏆' : '⚔️'}</div>
      <h1 style={{ textAlign: 'center' }}>{L(passed ? ['Gauntlet cleared!', 'Prova superata!'] : ['Training continues', 'L’allenamento continua'], lang)}</h1>
      <p style={{ textAlign: 'center', fontSize: 24, fontWeight: 800 }}>{score} / {TOTAL_QUESTIONS}</p>
      <p className="muted" style={{ textAlign: 'center' }}>{L(passed ? ['You mastered the applied topics and earned 50 XP (once only).', 'Hai padroneggiato gli argomenti applicati e ottenuto 50 XP (una sola volta).'] : ['You need at least 10 correct answers. Review the missions and try again.', 'Servono almeno 10 risposte corrette. Ripassa le missioni e riprova.'], lang)}</p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 }}>
        <button className="btn cyan" onClick={resetRun}>{L(['Replay gauntlet', 'Ripeti la prova'], lang)}</button>
        <button className="btn ghost" onClick={() => goToView('map')}>{L(['Back to Missions', 'Torna alle missioni'], lang)}</button>
      </div>
    </section>;
  }

  return <section className="card" style={{ maxWidth: 960, margin: '24px auto', padding: 24 }}>
    <button className="btn ghost sm" onClick={() => goToView('map')}>{L(['← Exit checkpoint', '← Esci dal checkpoint'], lang)}</button>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginTop: 18 }}>
      <div>
        <p className="kicker">{L(['GRADE 9 · APPLIED COMPUTER SCIENCE', 'CLASSE 3ª MEDIA · INFORMATICA APPLICATA'], lang)}</p>
        <h1>{L(title, lang)}</h1>
        <p className="muted">{L(['Four challenge arenas · 12 questions · 50 XP reward', 'Quattro arene di sfida · 12 domande · 50 XP di ricompensa'], lang)}</p>
      </div>
      <div style={{ fontSize: 42, padding: 16, borderRadius: 16, background: 'var(--panel2)' }}>🧠</div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 8, margin: '22px 0' }}>
      {stages.map((stage, index) => <div key={stage.id} style={{ padding: 10, borderRadius: 12, textAlign: 'center', border: '1px solid var(--line)', background: index === stageIndex ? 'var(--panel2)' : 'transparent', opacity: index > stageIndex ? 0.5 : 1 }}>
        <div style={{ fontSize: 24 }}>{stage.symbol}</div>
        <strong style={{ display: 'block', fontSize: 12 }}>{L(stage.title, lang)}</strong>
        <small>{index < stageIndex ? '✓' : index + 1}</small>
      </div>)}
    </div>
    <div style={{ height: 8, borderRadius: 8, background: 'var(--line)', overflow: 'hidden', marginBottom: 20 }}>
      <div style={{ width: ((answeredCount / TOTAL_QUESTIONS) * 100) + '%', height: '100%', background: 'var(--data)', transition: 'width .2s' }} />
    </div>
    <div style={{ border: '1px solid var(--line)', borderRadius: 16, padding: 20, background: 'var(--panel2)' }}>
      <p className="kicker">{L(['ARENA', 'ARENA'], lang)} {stageIndex + 1} / 4 · {L(['CHALLENGE', 'SFIDA'], lang)} {questionIndex + 1} / 3</p>
      <h2>{currentStage.symbol} {L(currentStage.title, lang)}</h2>
      <p className="muted">{L(currentStage.subtitle, lang)}</p>
      <h3 style={{ marginTop: 24 }}>{L(question.question, lang)}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 10, marginTop: 16 }}>
        {question.options.map(option => {
          const isSelected = selected === option.id;
          const isCorrect = option.id === question.answer;
          const background = selected === null ? 'transparent' : isCorrect ? 'rgba(50,190,120,.12)' : isSelected ? 'rgba(230,90,90,.12)' : 'transparent';
          return <button key={option.id} type="button" disabled={selected !== null} onClick={() => choose(option, question)} style={{ padding: '14px 12px', borderRadius: 12, border: '1px solid var(--line)', background, color: 'var(--text)', textAlign: 'left', cursor: selected === null ? 'pointer' : 'default', minHeight: 58 }}>{L(option.label, lang)}</button>;
        })}
      </div>
      {feedback && <div role="status" style={{ marginTop: 16, padding: 14, borderRadius: 12, border: '1px solid var(--line)' }}>
        <strong>{selected === question.answer ? L(['Correct!', 'Corretto!'], lang) : L(['Not quite.', 'Non proprio.'], lang)}</strong>
        <p style={{ margin: '6px 0 0' }}>{L(feedback, lang)}</p>
      </div>}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginTop: 20 }}>
        <span className="muted">{L(['Score', 'Punteggio'], lang)}: {score} · {L(['Best', 'Migliore'], lang)}: {progress?.bestScore ?? 0} / {TOTAL_QUESTIONS}</span>
        <button className="btn cyan" disabled={selected === null} onClick={next}>{answeredCount === TOTAL_QUESTIONS - 1 ? L(['Finish checkpoint', 'Concludi checkpoint'], lang) : L(['Continue', 'Continua'], lang)}</button>
      </div>
    </div>
  </section>;
};
