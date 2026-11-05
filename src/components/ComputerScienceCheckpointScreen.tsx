import React, { useRef, useState } from 'react';
import { useGame } from '../context/GameContext';
import { L } from '../helpers';
import { BilingualText } from '../types';

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

const CHECKPOINT_ID = 'computer-science-foundations';
const REQUIRED_MISSIONS = [
  'a1m1', 'a1m2', 'a1m3',
  'a2m1', 'a2m2', 'a2m3', 'a2m4',
  'a3m1', 'a3m2', 'a3m3', 'a3m4',
  'a5m1', 'a5m2', 'a5m3', 'a5m4'
];
const PASS_SCORE = 10;
const TOTAL_QUESTIONS = 12;

const stages: Stage[] = [
  {
    id: 'algorithm',
    title: ['Algorithm Dojo', 'Dojo degli algoritmi'],
    subtitle: ['Restore the logic sequence and guide the program to its goal.', 'Ripristina la sequenza logica e guida il programma al suo obiettivo.'],
    symbol: '🧩',
    mechanic: ['Think in precise steps: input, process and output.', 'Ragiona per passi precisi: input, elaborazione e output.'],
    questions: [
      {
        question: ['What is an algorithm?', 'Che cos’è un algoritmo?'],
        options: [
          { id: 'a', label: ['A sequence of clear steps to solve a problem', 'Una sequenza di passi chiari per risolvere un problema'] },
          { id: 'b', label: ['A computer component', 'Un componente del computer'] },
          { id: 'c', label: ['A type of monitor', 'Un tipo di monitor'] },
          { id: 'd', label: ['A random collection of instructions', 'Un insieme casuale di istruzioni'] }
        ],
        answer: 'a',
        feedback: ['An algorithm is a finite, ordered set of unambiguous instructions for a task.', 'Un algoritmo è un insieme finito e ordinato di istruzioni chiare per svolgere un compito.']
      },
      {
        question: ['A program must calculate the area of a rectangle. Which information does it need as input?', 'Un programma deve calcolare l’area di un rettangolo. Quali informazioni deve ricevere in input?'],
        options: [
          { id: 'a', label: ['Its colour and material', 'Il colore e il materiale'] },
          { id: 'b', label: ['Its length and width', 'La lunghezza e la larghezza'] },
          { id: 'c', label: ['Only its perimeter', 'Solo il perimetro'] },
          { id: 'd', label: ['The name of the user', 'Il nome dell’utente'] }
        ],
        answer: 'b',
        feedback: ['The area is length × width, so both measurements are needed.', 'L’area è lunghezza × larghezza: servono entrambe le misure.']
      },
      {
        question: ['In a flowchart, which shape normally represents a decision?', 'In un diagramma di flusso, quale forma rappresenta normalmente una decisione?'],
        options: [
          { id: 'a', label: ['Oval', 'Ovale'] },
          { id: 'b', label: ['Rectangle', 'Rettangolo'] },
          { id: 'c', label: ['Diamond', 'Rombo'] },
          { id: 'd', label: ['Arrow', 'Freccia'] }
        ],
        answer: 'c',
        feedback: ['A diamond represents a decision or condition, often with Yes/No branches.', 'Il rombo rappresenta una decisione o condizione, spesso con rami Sì/No.']
      }
    ]
  },
  {
    id: 'data',
    title: ['Binary Data Forge', 'Forgia dei dati binari'],
    subtitle: ['Rebuild digital information from bits, codes and pixels.', 'Ricostruisci le informazioni digitali usando bit, codici e pixel.'],
    symbol: '💡',
    mechanic: ['Decode the data and choose the correct representation.', 'Decodifica i dati e scegli la rappresentazione corretta.'],
    questions: [
      {
        question: ['How many bits make one byte?', 'Quanti bit formano un byte?'],
        options: [
          { id: 'a', label: ['2', '2'] },
          { id: 'b', label: ['4', '4'] },
          { id: 'c', label: ['8', '8'] },
          { id: 'd', label: ['16', '16'] }
        ],
        answer: 'c',
        feedback: ['One byte contains 8 bits. Each bit can store 0 or 1.', 'Un byte contiene 8 bit. Ogni bit può memorizzare 0 oppure 1.']
      },
      {
        question: ['What is the decimal value of binary 00001101?', 'Qual è il valore decimale del numero binario 00001101?'],
        options: [
          { id: 'a', label: ['11', '11'] },
          { id: 'b', label: ['13', '13'] },
          { id: 'c', label: ['15', '15'] },
          { id: 'd', label: ['101', '101'] }
        ],
        answer: 'b',
        feedback: ['8 + 4 + 1 = 13. Add the place values wherever the bit is 1.', '8 + 4 + 1 = 13. Somma i valori delle posizioni in cui il bit è 1.']
      },
      {
        question: ['Which colour model do screens commonly use to combine light?', 'Quale modello di colore usano comunemente gli schermi per combinare la luce?'],
        options: [
          { id: 'a', label: ['CMYK', 'CMYK'] },
          { id: 'b', label: ['RGB', 'RGB'] },
          { id: 'c', label: ['H₂O', 'H₂O'] },
          { id: 'd', label: ['ASCII', 'ASCII'] }
        ],
        answer: 'b',
        feedback: ['RGB combines red, green and blue light to create screen colours.', 'RGB combina la luce rossa, verde e blu per creare i colori sullo schermo.']
      }
    ]
  },
  {
    id: 'hardware',
    title: ['Hardware Core Reactor', 'Reattore del nucleo hardware'],
    subtitle: ['Power the computer by matching each component to its job.', 'Alimenta il computer associando ogni componente alla sua funzione.'],
    symbol: '🖥️',
    mechanic: ['Identify the component responsible for each operation.', 'Individua il componente responsabile di ogni operazione.'],
    questions: [
      {
        question: ['Which component executes program instructions?', 'Quale componente esegue le istruzioni dei programmi?'],
        options: [
          { id: 'a', label: ['CPU', 'CPU'] },
          { id: 'b', label: ['Keyboard', 'Tastiera'] },
          { id: 'c', label: ['Monitor', 'Monitor'] },
          { id: 'd', label: ['SSD', 'SSD'] }
        ],
        answer: 'a',
        feedback: ['The CPU processes instructions and coordinates many computer operations.', 'La CPU elabora le istruzioni e coordina molte operazioni del computer.']
      },
      {
        question: ['What usually happens to data stored in RAM when the computer is switched off?', 'Che cosa succede normalmente ai dati nella RAM quando il computer viene spento?'],
        options: [
          { id: 'a', label: ['They are saved forever', 'Vengono salvati per sempre'] },
          { id: 'b', label: ['They are lost', 'Vengono persi'] },
          { id: 'c', label: ['They move to the monitor', 'Si spostano sul monitor'] },
          { id: 'd', label: ['They become read-only files', 'Diventano file di sola lettura'] }
        ],
        answer: 'b',
        feedback: ['RAM is volatile working memory: its contents normally disappear when power is removed.', 'La RAM è una memoria volatile: il suo contenuto normalmente scompare quando manca alimentazione.']
      },
      {
        question: ['Which pair contains only input devices?', 'Quale coppia contiene solo dispositivi di input?'],
        options: [
          { id: 'a', label: ['Monitor and speakers', 'Monitor e altoparlanti'] },
          { id: 'b', label: ['Printer and projector', 'Stampante e proiettore'] },
          { id: 'c', label: ['Keyboard and mouse', 'Tastiera e mouse'] },
          { id: 'd', label: ['Headphones and monitor', 'Cuffie e monitor'] }
        ],
        answer: 'c',
        feedback: ['A keyboard and mouse send data and commands into the computer.', 'La tastiera e il mouse inviano dati e comandi al computer.']
      }
    ]
  },
  {
    id: 'network',
    title: ['Network Gateway', 'Portale della rete'],
    subtitle: ['Reconnect devices and deliver a message across the network.', 'Ricollega i dispositivi e consegna un messaggio attraverso la rete.'],
    symbol: '🌐',
    mechanic: ['Choose how devices communicate and how the web is accessed.', 'Scegli come comunicano i dispositivi e come si accede al Web.'],
    questions: [
      {
        question: ['What does LAN stand for?', 'Che cosa significa LAN?'],
        options: [
          { id: 'a', label: ['Large Access Number', 'Large Access Number'] },
          { id: 'b', label: ['Local Area Network', 'Rete locale'] },
          { id: 'c', label: ['Long Analog Node', 'Long Analog Node'] },
          { id: 'd', label: ['Linked App Name', 'Linked App Name'] }
        ],
        answer: 'b',
        feedback: ['A LAN connects devices in a limited area, such as a home, school or office.', 'Una LAN collega dispositivi in un’area limitata, come casa, scuola o ufficio.']
      },
      {
        question: ['Why is a message split into packets when sent over many networks?', 'Perché un messaggio viene diviso in pacchetti quando viaggia attraverso molte reti?'],
        options: [
          { id: 'a', label: ['To make it impossible to read', 'Per renderlo impossibile da leggere'] },
          { id: 'b', label: ['To send manageable pieces that can be routed and reassembled', 'Per inviare parti gestibili che possono essere instradate e ricomposte'] },
          { id: 'c', label: ['To turn it into a picture', 'Per trasformarlo in un’immagine'] },
          { id: 'd', label: ['To avoid using addresses', 'Per evitare di usare indirizzi'] }
        ],
        answer: 'b',
        feedback: ['Packets carry pieces of data and control information; the destination can reassemble the message.', 'I pacchetti trasportano parti di dati e informazioni di controllo; il destinatario può ricomporre il messaggio.']
      },
      {
        question: ['Which statement correctly describes the relationship between the Web and the Internet?', 'Quale affermazione descrive correttamente il rapporto tra Web e Internet?'],
        options: [
          { id: 'a', label: ['They are exactly the same thing', 'Sono esattamente la stessa cosa'] },
          { id: 'b', label: ['The Web is a service that uses the Internet', 'Il Web è un servizio che utilizza Internet'] },
          { id: 'c', label: ['The Internet is a browser', 'Internet è un browser'] },
          { id: 'd', label: ['The Web works without networks', 'Il Web funziona senza reti'] }
        ],
        answer: 'b',
        feedback: ['The Internet is the global network infrastructure; the Web is one service that runs on it.', 'Internet è l’infrastruttura di rete globale; il Web è uno dei servizi che la utilizza.']
      }
    ]
  }
];

export const ComputerScienceCheckpointScreen: React.FC = () => {
  const { state, goToView, saveCheckpointResult } = useGame();
  const { lang, cleared, subject, grade } = state;
  const progress = state.checkpointProgress?.[CHECKPOINT_ID];
  const unlocked = grade === 'grade9' && subject === 'cs' && REQUIRED_MISSIONS.every(id => !!cleared[id]);
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
    const stage = stages[stageIndex];
    if (questionIndex + 1 < stage.questions.length) {
      setQuestionIndex(value => value + 1);
      setSelected(null);
      setFeedback(null);
    } else if (stageIndex + 1 < stages.length) {
      setStageIndex(value => value + 1);
      setQuestionIndex(0);
      setSelected(null);
      setFeedback(null);
    } else {
      finishRun();
    }
  };

  const title: BilingualText = ['Computer Science Foundations: The Circuit Trial', 'Fondamenti di informatica: la prova del circuito'];
  const currentStage = stages[stageIndex];
  const question = currentStage.questions[questionIndex];
  const answeredCount = stages.slice(0, stageIndex).reduce((sum, stage) => sum + stage.questions.length, 0) + questionIndex;

  if (!unlocked) {
    const completedCount = REQUIRED_MISSIONS.filter(id => !!cleared[id]).length;
    return (
      <section className="card" style={{ maxWidth: 900, margin: '24px auto', padding: 24 }}>
        <button className="btn ghost sm" onClick={() => goToView('map')}>{L(['← Back to Missions', '← Torna alle missioni'], lang)}</button>
        <p className="kicker" style={{ marginTop: 20 }}>{L(['COMPUTER SCIENCE CHECKPOINT', 'CHECKPOINT DI INFORMATICA'], lang)}</p>
        <h1>{L(title, lang)}</h1>
        <p className="muted">{L(['Complete the 15 Algorithm, Data, Hardware and Network foundation missions to unlock this trial.', 'Completa le 15 missioni di fondamenti su algoritmi, dati, hardware e reti per sbloccare questa prova.'], lang)}</p>
        <p><strong>{completedCount} / {REQUIRED_MISSIONS.length}</strong> {L(['foundation missions cleared', 'missioni di fondamenti completate'], lang)}</p>
      </section>
    );
  }

  if (finished) {
    const passed = score >= PASS_SCORE;
    return (
      <section className="card" style={{ maxWidth: 900, margin: '24px auto', padding: 24 }}>
        <p className="kicker">{L(['COMPUTER SCIENCE CHECKPOINT · RESULTS', 'CHECKPOINT DI INFORMATICA · RISULTATI'], lang)}</p>
        <div style={{ fontSize: 48, textAlign: 'center', margin: '16px 0' }}>{passed ? '🏅' : '⚔️'}</div>
        <h1 style={{ textAlign: 'center' }}>{L(passed ? ['Checkpoint cleared!', 'Checkpoint superato!'] : ['Training continues', 'L’allenamento continua'], lang)}</h1>
        <p style={{ textAlign: 'center', fontSize: 24, fontWeight: 800 }}>{score} / {TOTAL_QUESTIONS}</p>
        <p className="muted" style={{ textAlign: 'center' }}>{L(passed ? ['Excellent work. You have earned 50 XP (once only). Replay any time to improve your score.', 'Ottimo lavoro. Hai ottenuto 50 XP (una sola volta). Puoi ripetere la prova quando vuoi per migliorare il punteggio.'] : ['You need at least 10 correct answers. Review the foundation missions and try again.', 'Servono almeno 10 risposte corrette. Ripassa le missioni di fondamenti e riprova.'], lang)}</p>
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
          <p className="kicker">{L(['GRADE 9 · COMPUTER SCIENCE CHECKPOINT', 'CLASSE 3ª MEDIA · CHECKPOINT DI INFORMATICA'], lang)}</p>
          <h1>{L(title, lang)}</h1>
          <p className="muted">{L(['Four mini-games · 12 challenges · 50 XP reward', 'Quattro minigiochi · 12 sfide · 50 XP di ricompensa'], lang)}</p>
        </div>
        <div style={{ fontSize: 42, padding: 16, borderRadius: 16, background: 'var(--panel2)' }}>💻</div>
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
                data-testid="cs-checkpoint-option"
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
          <span className="muted">{L(['Score', 'Punteggio'], lang)}: {score} · {L(['Best', 'Migliore'], lang)}: {progress?.bestScore ?? 0} / {TOTAL_QUESTIONS}</span>
          <button className="btn cyan" disabled={selected === null} onClick={next}>
            {answeredCount === TOTAL_QUESTIONS - 1 ? L(['Finish checkpoint', 'Concludi checkpoint'], lang) : L(['Continue', 'Continua'], lang)}
          </button>
        </div>
      </div>
    </section>
  );
};
