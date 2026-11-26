import React, { useState } from 'react';
import type { Language } from '../types';

type Props = { missionId: string; lang: Language };
type Pair = [string, string];

const t = (lang: Language, en: string, it: string) => lang === 'it' ? it : en;

const lessons: Record<string, Pair> = {
  a1m2: ['Algorithm Debugger', 'Debugger di algoritmi'],
  a1m3: ['Feed Algorithm Explorer', 'Esploratore dell’algoritmo del feed'],
  a5m2: ['Web Address & Search Lab', 'Laboratorio di indirizzi web e ricerche'],
  a5m3: ['Messages, Privacy & Netiquette', 'Messaggi, privacy e netiquette'],
  a5m4: ['5G and Internet of Things Lab', 'Laboratorio 5G e Internet delle cose'],
  c11m3: ['Trace Table Workshop', 'Laboratorio delle tabelle di traccia'],
  c12m1: ['Compiler & Interpreter Studio', 'Studio di compilatori e interpreti'],
  c12m3: ['Python Operator Playground', 'Laboratorio degli operatori Python'],
  c15m2: ['Lists, Matrices & Files Lab', 'Laboratorio di liste, matrici e file'],
  c16m2: ['Project, Stack & Queue Studio', 'Studio di progetti, pile e code']
};

const Panel: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="csl-panel"><h4>{title}</h4>{children}</div>
);

const Readout: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
  <div className="csl-readout"><small>{label}</small><strong>{value}</strong></div>
);

const Action: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => (
  <button type="button" {...props}>{children}</button>
);

export const COMPUTER_SCIENCE_REMAINING_MISSION_IDS = Object.keys(lessons);

export const ComputerScienceRemainingLabs: React.FC<Props> = ({ missionId, lang }) => {
  const [debugStep, setDebugStep] = useState(0);
  const [debugFixed, setDebugFixed] = useState(false);
  const [feedSignal, setFeedSignal] = useState<'interest' | 'recent'>('interest');
  const [feedInterest, setFeedInterest] = useState<'science' | 'art'>('science');
  const [webExample, setWebExample] = useState<'school' | 'news'>('school');
  const [checkedAuthor, setCheckedAuthor] = useState(false);
  const [checkedElsewhere, setCheckedElsewhere] = useState(false);
  const [messageScenario, setMessageScenario] = useState(0);
  const [messageChoice, setMessageChoice] = useState<number | null>(null);
  const [soilDry, setSoilDry] = useState(true);
  const [iotNetwork, setIotNetwork] = useState<'5g' | 'wifi'>('5g');
  const [traceStep, setTraceStep] = useState(0);
  const [translationMode, setTranslationMode] = useState<'compiler' | 'interpreter'>('compiler');
  const [translationStep, setTranslationStep] = useState(0);
  const [operandA, setOperandA] = useState(2);
  const [operandB, setOperandB] = useState(3);
  const [operandC, setOperandC] = useState(4);
  const [useParentheses, setUseParentheses] = useState(false);
  const [items, setItems] = useState([3, 8, 1]);
  const [newItem, setNewItem] = useState('5');
  const [savedSnapshot, setSavedSnapshot] = useState<string | null>(null);
  const [structureItem, setStructureItem] = useState('Plan');
  const [stack, setStack] = useState(['Plan', 'Build']);
  const [queue, setQueue] = useState(['Review', 'Test']);

  if (!lessons[missionId]) return null;

  const title = t(lang, lessons[missionId][0], lessons[missionId][1]);
  const debugValues = debugFixed ? [2, 3, 4] : [2, 3];
  const debugRows = debugValues.slice(0, debugStep);
  const debugTotal = debugRows.reduce((total, value) => total + value, 0);
  const traceValues = [2, 3, 4];
  const traceRows = traceValues.slice(0, traceStep);
  const traceTotal = traceRows.reduce((total, value) => total + value, 0);
  const pythonResult = useParentheses
    ? (operandA + operandB) * operandC
    : operandA + operandB * operandC;
  const parsedUrl = new URL(webExample === 'school'
    ? 'https://school.example/lessons/computing'
    : 'http://news.example/technology');
  const listInput = Number(newItem);
  const canAppend = Number.isInteger(listInput) && newItem.trim() !== '' && items.length < 8;

  const feedPosts = [
    { topic: 'science', recent: 3, interest: 1, title: ['A new space telescope image', 'Una nuova immagine del telescopio spaziale'] as Pair },
    { topic: 'art', recent: 2, interest: 2, title: ['A student mural project', 'Un progetto di murales degli studenti'] as Pair },
    { topic: 'science', recent: 1, interest: 3, title: ['How bees help a garden', 'Come le api aiutano un giardino'] as Pair }
  ].slice().sort((a, b) => feedSignal === 'recent'
    ? b.recent - a.recent
    : Number(b.topic === feedInterest) - Number(a.topic === feedInterest) || b.interest - a.interest);
  const feedExplanation = feedSignal === 'recent'
    ? t(lang, 'The newest post appears first, even if it is about a different topic.', 'Il post più recente appare per primo, anche se parla di un altro argomento.')
    : t(lang, 'Posts matching the chosen interest are ranked first in this tiny model.', 'In questo piccolo modello, i post sull’interesse scelto vengono prima.');

  const messageScenarios: Array<{
    title: Pair;
    prompt: Pair;
    choices: Pair[];
    correct: number;
    explanation: Pair;
  }> = [
    {
      title: ['Unexpected message', 'Messaggio inatteso'],
      prompt: ['A message says your school account will close unless you enter your password on a link.', 'Un messaggio dice che l’account scolastico verrà chiuso se non inserisci la password in un link.'],
      choices: [
        ['Open the link quickly', 'Apri subito il link'],
        ['Do not click; show the message to a trusted adult', 'Non cliccare; mostra il messaggio a un adulto di fiducia'],
        ['Forward it to the whole class', 'Inoltralo a tutta la classe']
      ],
      correct: 1,
      explanation: ['Urgent password requests can be phishing. Use a trusted route to check.', 'Le richieste urgenti di password possono essere phishing. Verifica usando un canale affidabile.']
    },
    {
      title: ['A photo in the group chat', 'Una foto nella chat di gruppo'],
      prompt: ['You want to post a photo that shows a classmate.', 'Vuoi pubblicare una foto in cui appare un compagno o una compagna.'],
      choices: [
        ['Ask permission before sharing it', 'Chiedi il permesso prima di condividerla'],
        ['Post it because the group is private', 'Pubblicala perché il gruppo è privato'],
        ['Add their full name and school', 'Aggiungi il nome completo e la scuola']
      ],
      correct: 0,
      explanation: ['Respect privacy: ask first and share only what is appropriate.', 'Rispetta la privacy: chiedi prima e condividi solo ciò che è appropriato.']
    },
    {
      title: ['A disagreement online', 'Un disaccordo online'],
      prompt: ['Someone disagrees with your idea in a class discussion.', 'Qualcuno non è d’accordo con la tua idea in una discussione di classe.'],
      choices: [
        ['Reply with an insult', 'Rispondi con un insulto'],
        ['Post their private message', 'Pubblica il loro messaggio privato'],
        ['Pause and reply respectfully about the idea', 'Fermati un momento e rispondi con rispetto all’idea']
      ],
      correct: 2,
      explanation: ['Netiquette means treating people respectfully online, too.', 'La netiquette significa trattare le persone con rispetto anche online.']
    }
  ];
  const scenario = messageScenarios[messageScenario];
  const messageIsCorrect = messageChoice === scenario.correct;

  const translationStages = translationMode === 'compiler'
    ? [
        ['Read the whole source program', 'Leggi tutto il programma sorgente'],
        ['Translate the program before running it', 'Traduci il programma prima di eseguirlo'],
        ['Prepare machine instructions', 'Prepara le istruzioni macchina'],
        ['Run the translated program', 'Esegui il programma tradotto']
      ]
    : [
        ['Read the next source line', 'Leggi la riga sorgente successiva'],
        ['Translate that line', 'Traduci quella riga'],
        ['Run the translated instruction', 'Esegui l’istruzione tradotta'],
        ['Continue with the next line', 'Continua con la riga successiva']
      ];

  return (
    <section className="cs-visual-lab" aria-label={t(lang, 'Interactive computer science lab', 'Laboratorio interattivo di informatica')}>
      <header className="csl-heading">
        <span>COMPUTER SCIENCE LAB · LABORATORIO DI INFORMATICA</span>
        <h3>{title}</h3>
        <p>{t(lang, 'Explore the model, try a change and explain what the result shows.', 'Esplora il modello, prova una modifica e spiega che cosa mostra il risultato.')}</p>
      </header>
      <div className="csl-grid">
        <div className="csl-stage">
          {missionId === 'a1m2' && (
            <Panel title={t(lang, 'Find and fix an off-by-one bug', 'Trova e correggi un errore di un’unità')}>
              <p>{t(lang, 'This loop should add 2, 3 and 4. Step through the buggy version, inspect the trace, then fix its stopping value.', 'Questo ciclo dovrebbe sommare 2, 3 e 4. Segui la versione con l’errore, controlla la traccia e correggi il valore di arresto.')}</p>
              <div className="csl-code">total = 0<br />for value in range(2, {debugFixed ? 5 : 4}):<br />&nbsp;&nbsp;total = total + value</div>
              <table className="csl-mini-table csl-trace-table">
                <thead><tr><th>{t(lang, 'Step', 'Passo')}</th><th>value</th><th>total</th></tr></thead>
                <tbody>
                  <tr><td>Start</td><td>—</td><td>0</td></tr>
                  {debugRows.map((value, index) => <tr key={index}><td>{index + 1}</td><td>{value}</td><td>{debugRows.slice(0, index + 1).reduce((sum, item) => sum + item, 0)}</td></tr>)}
                </tbody>
              </table>
              <Readout label={t(lang, 'Current total', 'Totale attuale')} value={debugTotal} />
              <div className="csl-actions">
                <Action onClick={() => setDebugStep(step => Math.min(debugValues.length, step + 1))} disabled={debugStep >= debugValues.length}>{t(lang, 'Run next loop step', 'Esegui il passo successivo')}</Action>
                <Action onClick={() => { setDebugFixed(true); setDebugStep(0); }} disabled={debugFixed}>{t(lang, 'Fix the loop boundary', 'Correggi il limite del ciclo')}</Action>
              </div>
              {debugStep >= debugValues.length && <p role="status">{t(lang, debugFixed ? 'Fixed: the loop includes all three values; the total is 9.' : 'Bug found: the loop stops before 4, so one value is missing.', debugFixed ? 'Corretto: il ciclo include tutti e tre i valori; il totale è 9.' : 'Errore trovato: il ciclo si ferma prima di 4, quindi manca un valore.')}</p>}
            </Panel>
          )}

          {missionId === 'a1m3' && (
            <Panel title={t(lang, 'See how a feed can rank posts', 'Scopri come un feed può ordinare i post')}>
              <p>{t(lang, 'A recommendation algorithm can use signals such as interests or recency. Change the signal and interest to see this small example reorder.', 'Un algoritmo di raccomandazione può usare segnali come interessi o novità. Cambia il segnale e l’interesse per vedere questo piccolo esempio riordinarsi.')}</p>
              <label className="csl-input">{t(lang, 'Ranking signal', 'Segnale di ordinamento')}
                <select aria-label={t(lang, 'Ranking signal', 'Segnale di ordinamento')} value={feedSignal} onChange={event => setFeedSignal(event.target.value as typeof feedSignal)}>
                  <option value="interest">{t(lang, 'Chosen interest', 'Interesse scelto')}</option>
                  <option value="recent">{t(lang, 'Most recent', 'Più recente')}</option>
                </select>
              </label>
              <label className="csl-input">{t(lang, 'Choose an interest', 'Scegli un interesse')}
                <select aria-label={t(lang, 'Choose an interest', 'Scegli un interesse')} value={feedInterest} onChange={event => setFeedInterest(event.target.value as typeof feedInterest)}>
                  <option value="science">{t(lang, 'Science', 'Scienze')}</option>
                  <option value="art">{t(lang, 'Art', 'Arte')}</option>
                </select>
              </label>
              <ol className="csl-ranked-list">{feedPosts.map((post, index) => <li key={post.title[0]}><b>{index + 1}</b><span>{t(lang, ...post.title)}</span><small>{t(lang, post.topic === 'science' ? 'Science' : 'Art', post.topic === 'science' ? 'Scienze' : 'Arte')}</small></li>)}</ol>
              <Readout label={t(lang, 'What changed?', 'Che cosa è cambiato?')} value={feedExplanation} />
              <p>{t(lang, 'Real platforms use many signals. A narrow feed can become a filter bubble, so seek reliable views from more than one source.', 'Le piattaforme reali usano molti segnali. Un feed ristretto può creare una bolla di filtraggio: cerca quindi punti di vista affidabili in più fonti.')}</p>
            </Panel>
          )}

          {missionId === 'a5m2' && (
            <Panel title={t(lang, 'Inspect a URL and verify a source', 'Esamina un URL e verifica una fonte')}>
              <p>{t(lang, 'A browser requests a web page from a server. Select an example address and inspect its parts; then practise checking who published a result.', 'Un browser richiede una pagina web a un server. Scegli un indirizzo di esempio e osservane le parti; poi esercitati a controllare chi ha pubblicato un risultato.')}</p>
              <label className="csl-input">{t(lang, 'Example page', 'Pagina di esempio')}
                <select aria-label={t(lang, 'Example page', 'Pagina di esempio')} value={webExample} onChange={event => setWebExample(event.target.value as typeof webExample)}>
                  <option value="school">{t(lang, 'School lesson page (HTTPS)', 'Pagina di lezione scolastica (HTTPS)')}</option>
                  <option value="news">{t(lang, 'Technology article (HTTP)', 'Articolo di tecnologia (HTTP)')}</option>
                </select>
              </label>
              <div className="csl-code">{parsedUrl.href}</div>
              <div className="csl-steps">
                <div><b>1</b>{t(lang, 'Protocol', 'Protocollo')}: {parsedUrl.protocol.replace(':', '').toUpperCase()}</div>
                <div><b>2</b>{t(lang, 'Host', 'Host')}: {parsedUrl.host}</div>
                <div><b>3</b>{t(lang, 'Page path', 'Percorso della pagina')}: {parsedUrl.pathname}</div>
              </div>
              <Readout label={t(lang, 'Connection', 'Connessione')} value={parsedUrl.protocol === 'https:' ? t(lang, 'Encrypted (not proof that claims are true)', 'Cifrata (non prova che le informazioni siano vere)') : t(lang, 'Not encrypted in this example', 'Non cifrata in questo esempio')} />
              <label className="csl-check"><input type="checkbox" checked={checkedAuthor} onChange={event => setCheckedAuthor(event.target.checked)} />{t(lang, 'I checked the author and date', 'Ho controllato autore e data')}</label>
              <label className="csl-check"><input type="checkbox" checked={checkedElsewhere} onChange={event => setCheckedElsewhere(event.target.checked)} />{t(lang, 'I confirmed the claim with another reliable source', 'Ho verificato l’informazione con un’altra fonte affidabile')}</label>
              <p role="status">{checkedAuthor && checkedElsewhere ? t(lang, 'Good source-checking habits: compare evidence before sharing.', 'Buone abitudini di verifica: confronta le prove prima di condividere.') : t(lang, 'HTTPS protects a connection; it does not guarantee that a page is accurate.', 'HTTPS protegge una connessione; non garantisce che una pagina sia accurata.')}</p>
            </Panel>
          )}

          {missionId === 'a5m3' && (
            <Panel title={t(lang, 'Choose a thoughtful online response', 'Scegli una risposta attenta online')}>
              <label className="csl-input">{t(lang, 'Situation', 'Situazione')}
                <select aria-label={t(lang, 'Situation', 'Situazione')} value={messageScenario} onChange={event => { setMessageScenario(Number(event.target.value)); setMessageChoice(null); }}>
                  {messageScenarios.map((option, index) => <option value={index} key={option.title[0]}>{t(lang, ...option.title)}</option>)}
                </select>
              </label>
              <div className="csl-panel"><p>{t(lang, ...scenario.prompt)}</p></div>
              <div className="csl-actions csl-choice-actions">{scenario.choices.map((choice, index) => <Action key={choice[0]} onClick={() => setMessageChoice(index)} aria-pressed={messageChoice === index}>{t(lang, ...choice)}</Action>)}</div>
              {messageChoice !== null && <p className={messageIsCorrect ? 'csl-feedback csl-feedback-good' : 'csl-feedback csl-feedback-try'} role="status"><b>{t(lang, messageIsCorrect ? 'Good choice.' : 'Try a safer response.', messageIsCorrect ? 'Buona scelta.' : 'Prova una risposta più sicura.')}</b> {t(lang, ...scenario.explanation)}</p>}
              <p>{t(lang, 'Messages and posts leave a digital footprint. Protect private details and use respectful netiquette.', 'Messaggi e post lasciano un’impronta digitale. Proteggi i dati privati e usa una netiquette rispettosa.')}</p>
            </Panel>
          )}

          {missionId === 'a5m4' && (
            <Panel title={t(lang, 'Connect a sensor in an IoT system', 'Collega un sensore in un sistema IoT')}>
              <p>{t(lang, 'An Internet of Things device uses a sensor and a network to send useful data. Change the soil reading and follow the sample irrigation system.', 'Un dispositivo Internet of Things usa un sensore e una rete per inviare dati utili. Cambia la lettura del terreno e segui il sistema di irrigazione di esempio.')}</p>
              <label className="csl-input">{t(lang, 'Soil moisture reading', 'Lettura dell’umidità del terreno')}
                <select aria-label={t(lang, 'Soil moisture reading', 'Lettura dell’umidità del terreno')} value={soilDry ? 'dry' : 'moist'} onChange={event => setSoilDry(event.target.value === 'dry')}>
                  <option value="dry">{t(lang, 'Dry', 'Secco')}</option>
                  <option value="moist">{t(lang, 'Moist', 'Umido')}</option>
                </select>
              </label>
              <label className="csl-input">{t(lang, 'Network connection', 'Connessione di rete')}
                <select aria-label={t(lang, 'Network connection', 'Connessione di rete')} value={iotNetwork} onChange={event => setIotNetwork(event.target.value as typeof iotNetwork)}>
                  <option value="5g">5G</option><option value="wifi">Wi-Fi</option>
                </select>
              </label>
              <div className="csl-computer-flow"><span>{t(lang, 'MOISTURE SENSOR', 'SENSORE DI UMIDITÀ')}</span><b>→</b><span className="cpu">IoT</span><b>→</b><span>{iotNetwork.toUpperCase()}</span><b>→</b><span>{t(lang, 'DASHBOARD', 'PANNELLO')}</span></div>
              <Readout label={t(lang, 'System response (example)', 'Risposta del sistema (esempio)')} value={soilDry ? t(lang, 'Suggest watering', 'Suggerisce di irrigare') : t(lang, 'Keep the pump off', 'Mantiene la pompa spenta')} />
              <p>{t(lang, '5G can connect many devices with low delay. This model shows one possible data path; real devices should collect only needed data.', 'Il 5G può collegare molti dispositivi con ritardi ridotti. Questo modello mostra un possibile percorso dei dati; i dispositivi reali dovrebbero raccogliere solo i dati necessari.')}</p>
            </Panel>
          )}

          {missionId === 'c11m3' && (
            <Panel title={t(lang, 'Trace each variable by hand', 'Segui ogni variabile a mano')}>
              <p>{t(lang, 'A trace table records variable values after each step. Advance one loop round at a time and watch the running total.', 'Una tabella di traccia registra i valori delle variabili dopo ogni passo. Avanza di un giro alla volta e osserva il totale.')}</p>
              <div className="csl-code">total = 0<br />for value in [2, 3, 4]:<br />&nbsp;&nbsp;total += value</div>
              <table className="csl-mini-table csl-trace-table">
                <thead><tr><th>{t(lang, 'Round', 'Giro')}</th><th>value</th><th>total</th></tr></thead>
                <tbody><tr><td>Start</td><td>—</td><td>0</td></tr>{traceRows.map((value, index) => <tr key={index}><td>{index + 1}</td><td>{value}</td><td>{traceRows.slice(0, index + 1).reduce((sum, item) => sum + item, 0)}</td></tr>)}</tbody>
              </table>
              <div className="csl-actions"><Action onClick={() => setTraceStep(step => Math.min(traceValues.length, step + 1))} disabled={traceStep >= traceValues.length}>{t(lang, 'Next loop round', 'Giro successivo')}</Action><Action onClick={() => setTraceStep(0)}>{t(lang, 'Reset trace', 'Azzera traccia')}</Action></div>
              <Readout label={t(lang, 'Current total', 'Totale attuale')} value={traceTotal} />
              {traceStep === traceValues.length && <p role="status">{t(lang, 'Trace complete: 2 + 3 + 4 = 9. Ada Lovelace used paper calculations when describing an early program.', 'Traccia completata: 2 + 3 + 4 = 9. Ada Lovelace usò calcoli su carta descrivendo un programma dei primi tempi.')}</p>}
            </Panel>
          )}

          {missionId === 'c12m1' && (
            <Panel title={t(lang, 'Compare two ways to translate code', 'Confronta due modi per tradurre il codice')}>
              <p>{t(lang, 'High-level code must be translated into instructions the processor can use. Choose a translation approach and advance through its stages.', 'Il codice ad alto livello deve essere tradotto in istruzioni utilizzabili dal processore. Scegli un approccio e avanza tra le sue fasi.')}</p>
              <label className="csl-input">{t(lang, 'Translation approach', 'Metodo di traduzione')}
                <select aria-label={t(lang, 'Translation approach', 'Metodo di traduzione')} value={translationMode} onChange={event => { setTranslationMode(event.target.value as typeof translationMode); setTranslationStep(0); }}>
                  <option value="compiler">{t(lang, 'Compiler: translate the whole program', 'Compilatore: traduce tutto il programma')}</option>
                  <option value="interpreter">{t(lang, 'Interpreter: translate and run line by line', 'Interprete: traduce ed esegue riga per riga')}</option>
                </select>
              </label>
              <div className="csl-code">print(2 + 3)</div>
              <div className="csl-steps">{translationStages.map(([en, it], index) => <div key={en} className={translationStep === index ? 'current' : ''}><b>{index + 1}</b>{t(lang, en, it)}</div>)}</div>
              <div className="csl-actions"><Action onClick={() => setTranslationStep(step => Math.min(translationStages.length - 1, step + 1))} disabled={translationStep >= translationStages.length - 1}>{t(lang, 'Next translation step', 'Passo successivo')}</Action><Action onClick={() => setTranslationStep(0)}>{t(lang, 'Restart', 'Ricomincia')}</Action></div>
              <Readout label={t(lang, 'Current stage', 'Fase attuale')} value={`${translationStep + 1} / ${translationStages.length}`} />
              <p>{t(lang, 'Grace Hopper helped pioneer compiler technology. Python is a high-level language designed to be readable.', 'Grace Hopper contribuì a sviluppare i compilatori. Python è un linguaggio ad alto livello pensato per essere leggibile.')}</p>
            </Panel>
          )}

          {missionId === 'c12m3' && (
            <Panel title={t(lang, 'See operator precedence change a result', 'Osserva come la precedenza cambia un risultato')}>
              <p>{t(lang, 'Python follows maths precedence: multiplication happens before addition. Add parentheses to change the grouping.', 'Python segue la precedenza matematica: la moltiplicazione viene prima dell’addizione. Aggiungi le parentesi per cambiare il raggruppamento.')}</p>
              <div className="csl-format-toolbar">
                <label className="csl-input">{t(lang, 'First number', 'Primo numero')}<input aria-label={t(lang, 'First number', 'Primo numero')} type="number" min="0" max="9" value={operandA} onChange={event => setOperandA(Math.min(9, Math.max(0, Number(event.target.value) || 0)))} /></label>
                <label className="csl-input">{t(lang, 'Second number', 'Secondo numero')}<input aria-label={t(lang, 'Second number', 'Secondo numero')} type="number" min="0" max="9" value={operandB} onChange={event => setOperandB(Math.min(9, Math.max(0, Number(event.target.value) || 0)))} /></label>
                <label className="csl-input">{t(lang, 'Third number', 'Terzo numero')}<input aria-label={t(lang, 'Third number', 'Terzo numero')} type="number" min="0" max="9" value={operandC} onChange={event => setOperandC(Math.min(9, Math.max(0, Number(event.target.value) || 0)))} /></label>
              </div>
              <label className="csl-check"><input type="checkbox" checked={useParentheses} onChange={event => setUseParentheses(event.target.checked)} />{t(lang, 'Add parentheses around the addition', 'Aggiungi parentesi all’addizione')}</label>
              <div className="csl-code">{useParentheses ? `(${operandA} + ${operandB}) * ${operandC}` : `${operandA} + ${operandB} * ${operandC}`}</div>
              <Readout label={t(lang, 'Calculated result', 'Risultato calcolato')} value={pythonResult} />
              <Readout label={t(lang, 'Precedence reminder', 'Promemoria sulla precedenza')} value={t(lang, '** first; then * / // %; then + −', '** prima; poi * / // %; infine + −')} />
              <p>{t(lang, 'The visualiser uses a fixed, safe calculation; it does not execute learner-entered code.', 'Il visualizzatore usa un calcolo sicuro e definito; non esegue codice inserito dallo studente.')}</p>
            </Panel>
          )}

          {missionId === 'c15m2' && (
            <Panel title={t(lang, 'Change a list and save a text snapshot', 'Modifica una lista e salva una copia di testo')}>
              <p>{t(lang, 'Lists are ordered and mutable. Click an item to remove it, append a number, or save a simulated text-file snapshot.', 'Le liste sono ordinate e modificabili. Tocca un elemento per rimuoverlo, aggiungi un numero o salva una copia simulata in un file di testo.')}</p>
              <div className="csl-indexes" aria-label={t(lang, 'List values with indexes', 'Valori della lista con indici')}>
                {items.map((value, index) => <button type="button" className="csl-list-item" key={`${index}-${value}`} aria-label={t(lang, `Remove ${value} at index ${index}`, `Rimuovi ${value} all’indice ${index}`)} onClick={() => setItems(current => current.filter((_, itemIndex) => itemIndex !== index))}><b>{value}</b><small>{index}</small></button>)}
              </div>
              <Readout label="List" value={`[${items.join(', ')}]`} />
              <div className="csl-format-toolbar">
                <label className="csl-input">{t(lang, 'Number to append', 'Numero da aggiungere')}<input aria-label={t(lang, 'Number to append', 'Numero da aggiungere')} type="number" value={newItem} onChange={event => setNewItem(event.target.value)} /></label>
                <Action disabled={!canAppend} onClick={() => { setItems(current => [...current, listInput]); setNewItem(''); }}>{t(lang, 'Append to list', 'Aggiungi alla lista')}</Action>
              </div>
              <strong>{t(lang, 'A matrix is a list of rows:', 'Una matrice è una lista di righe:')}</strong>
              <table className="csl-mini-table"><tbody><tr><td>2</td><td>1</td></tr><tr><td>4</td><td>3</td></tr></tbody></table>
              <div className="csl-actions"><Action onClick={() => setSavedSnapshot(`[${items.join(', ')}]`)}>{t(lang, 'Write snapshot to scores.txt', 'Scrivi la copia in scores.txt')}</Action><Action disabled={!savedSnapshot} onClick={() => setItems(savedSnapshot ? savedSnapshot.slice(1, -1).split(', ').filter(Boolean).map(Number) : items)}>{t(lang, 'Read snapshot', 'Leggi la copia')}</Action></div>
              <p role="status">{savedSnapshot ? t(lang, `Simulated file contents: ${savedSnapshot}`, `Contenuto simulato del file: ${savedSnapshot}`) : t(lang, 'No real file is created; this models writing and reading text data.', 'Non viene creato alcun file reale; il modello rappresenta la scrittura e lettura di dati di testo.')}</p>
            </Panel>
          )}

          {missionId === 'c16m2' && (
            <Panel title={t(lang, 'Build a project and compare LIFO with FIFO', 'Costruisci un progetto e confronta LIFO e FIFO')}>
              <p>{t(lang, 'Large projects can be decomposed into functions, grouped into modules and tested piece by piece. Try the two data structures below.', 'I progetti grandi si possono scomporre in funzioni, raggruppare in moduli e testare un pezzo alla volta. Prova le due strutture qui sotto.')}</p>
              <label className="csl-input">{t(lang, 'Task to add', 'Attività da aggiungere')}
                <select aria-label={t(lang, 'Task to add', 'Attività da aggiungere')} value={structureItem} onChange={event => setStructureItem(event.target.value)}>
                  {['Plan', 'Build', 'Test', 'Publish'].map(item => <option value={item} key={item}>{t(lang, item === 'Plan' ? 'Plan' : item === 'Build' ? 'Build' : item === 'Test' ? 'Test' : 'Publish', item === 'Plan' ? 'Pianifica' : item === 'Build' ? 'Crea' : item === 'Test' ? 'Verifica' : 'Pubblica')}</option>)}
                </select>
              </label>
              <div className="csl-structure-grid">
                <section><h5>{t(lang, 'Stack · LIFO', 'Pila · LIFO')}</h5><p>{t(lang, 'Last in, first out', 'Ultimo entrato, primo uscito')}</p><div className="csl-packets">{stack.map((item, index) => <span key={`${index}-${item}`}>{item}</span>)}</div><div className="csl-actions"><Action onClick={() => setStack(current => [...current, structureItem])}>{t(lang, 'Push task', 'Inserisci in cima')}</Action><Action disabled={!stack.length} onClick={() => setStack(current => current.slice(0, -1))}>{t(lang, 'Pop top task', 'Rimuovi dalla cima')}</Action></div><Readout label={t(lang, 'Next task', 'Prossima attività')} value={stack[stack.length - 1] || t(lang, 'Empty', 'Vuota')} /></section>
                <section><h5>{t(lang, 'Queue · FIFO', 'Coda · FIFO')}</h5><p>{t(lang, 'First in, first out', 'Primo entrato, primo uscito')}</p><div className="csl-packets">{queue.map((item, index) => <span key={`${index}-${item}`}>{item}</span>)}</div><div className="csl-actions"><Action onClick={() => setQueue(current => [...current, structureItem])}>{t(lang, 'Enqueue task', 'Aggiungi in coda')}</Action><Action disabled={!queue.length} onClick={() => setQueue(current => current.slice(1))}>{t(lang, 'Dequeue next task', 'Rimuovi la prima attività')}</Action></div><Readout label={t(lang, 'Next task', 'Prossima attività')} value={queue[0] || t(lang, 'Empty', 'Vuota')} /></section>
              </div>
              <p>{t(lang, 'Ada Lovelace, Grace Hopper and Margaret Hamilton are among the women whose work shaped computing. A project team benefits when everyone can contribute.', 'Ada Lovelace, Grace Hopper e Margaret Hamilton sono tra le donne che hanno contribuito alla storia dell’informatica. Un gruppo di progetto trae beneficio dal contributo di tutti.')}</p>
            </Panel>
          )}
        </div>
        <aside className="csl-coach"><strong>{t(lang, 'Hunter challenge', 'Sfida della cacciatrice')}</strong><p>{t(lang, 'Predict what will change, try one control, then explain the result in your own words.', 'Prevedi che cosa cambierà, prova un controllo e poi spiega il risultato con parole tue.')}</p><small>{t(lang, 'Try it · Observe it · Explain it', 'Prova · Osserva · Spiega')}</small></aside>
      </div>
      <footer className="csl-footer">{t(lang, 'These are guided learning models, not full network or code-execution simulations.', 'Questi sono modelli didattici guidati, non simulazioni complete delle reti o dell’esecuzione di codice.')}</footer>
    </section>
  );
};
