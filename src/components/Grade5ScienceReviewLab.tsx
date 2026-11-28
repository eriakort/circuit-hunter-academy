import React, { useState, type ReactNode } from 'react';
import type { Language } from '../types';
import { Analogy, pick, Readout, Slider } from './chemLabs/chemLabShared';

type Props = { missionId: string; lang: Language };
type Pair = [string, string];

const choices = (lang: Language, items: Pair[], selected: number, onSelect: (index: number) => void) => (
  <div className="cl-mode-tabs">
    {items.map(([en, it], index) => (
      <button key={en} type="button" className={selected === index ? 'active' : ''} onClick={() => onSelect(index)}>
        {pick(lang, en, it)}
      </button>
    ))}
  </div>
);

export const Grade5ScienceReviewLab: React.FC<Props> = ({ missionId, lang }) => {
  const [selected, setSelected] = useState<Record<string, number>>({});
  const [measure, setMeasure] = useState<Record<string, number>>({});
  const get = (key: string) => selected[key] ?? 0;
  const choose = (key: string, value: number) => setSelected(current => ({ ...current, [key]: value }));
  const value = (key: string) => measure[key] ?? 50;
  const adjust = (key: string, amount: number) => setMeasure(current => ({ ...current, [key]: amount }));
  const text = (en: string, it: string) => pick(lang, en, it);
  const frame = (aria: string, title: string, description: string, visual: ReactNode, controls: ReactNode) => (
    <section className="chem-lab" aria-label={aria}>
      <header className="cl-heading">
        <span className="cl-kicker">{text('INTERACTIVE SCIENCE LAB', 'LABORATORIO INTERATTIVO DI SCIENZE')}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </header>
      <div className="cl-grid">
        <div className="cl-visual">{visual}</div>
        <div className="cl-controls">{controls}</div>
      </div>
    </section>
  );
  const svg = (label: string, children: ReactNode) => (
    <svg viewBox="0 0 360 205" role="img" aria-label={label}>
      <rect x="18" y="18" width="324" height="169" rx="18" fill="rgba(16,22,58,.95)" stroke="#8a7bff" />
      {children}
    </svg>
  );
  const analogy = (en: string, it: string) => <Analogy lang={lang} en={en} it={it} />;

  if (missionId === 'g5x-science-self-assessment') {
    const topics: Pair[] = [['Living things', 'Esseri viventi'], ['Space', 'Spazio'], ['Energy', 'Energia'], ['Body', 'Corpo']];
    const i = get('topic');
    const confidence = get('confidence');
    const colors = ['#38ef7d', '#ffd166', '#45d8ff'];
    const labels: Pair[] = [['I can explain it', 'So spiegarlo'], ['I partly understand', 'Ho capito in parte'], ['I want more practice', 'Voglio esercitarmi ancora']];
    return frame(text('Science Knowledge Compass', 'Bussola delle conoscenze scientifiche'), text('Check In With Your Science Learning', 'Fai il punto sulle tue conoscenze scientifiche'), text('Choose a topic, then mark how ready you feel. This is a learning guide, not a grade.', 'Scegli un argomento e indica quanto ti senti preparato. È una guida per imparare, non un voto.'),
      svg(text('Self-assessment compass for four science topics', 'Bussola di autovalutazione per quattro argomenti scientifici'), <>
        <circle cx="180" cy="103" r="44" fill="#ffd166" stroke="#fff" strokeWidth="3" />
        <text x="180" y="108" textAnchor="middle" fill="#10143a" fontSize="12" fontWeight="900">{text('MY SCIENCE', 'LE MIE SCIENZE')}</text>
        {topics.map((topic, n) => {
          const angle = n * Math.PI / 2 - Math.PI / 2;
          const x = 180 + Math.cos(angle) * 112;
          const y = 103 + Math.sin(angle) * 69;
          return <g key={topic[0]}><line x1="180" y1="103" x2={x} y2={y} stroke={i === n ? colors[confidence] : '#626b9b'} strokeWidth={i === n ? 5 : 2} /><circle cx={x} cy={y} r={i === n ? 19 : 14} fill={i === n ? colors[confidence] : '#8a7bff'} /><text x={x} y={y + 4} textAnchor="middle" fill="#10143a" fontSize="11" fontWeight="900">{n + 1}</text></g>;
        })}
        <text x="180" y="177" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="800">{text(topics[i][0], topics[i][1])}</text>
      </>),
      <>{choices(lang, topics, i, n => choose('topic', n))}{choices(lang, labels, confidence, n => choose('confidence', n))}<Readout label={text('Topic', 'Argomento')} value={text(topics[i][0], topics[i][1])}/><Readout label={text('Your next step', 'Il tuo prossimo passo')} value={text(['Explain this idea in your own words', 'Review one example', 'Ask for help or try another activity'][confidence], ['Spiega questa idea con parole tue', 'Ripassa un esempio', 'Chiedi aiuto o prova un’altra attività'][confidence])}/>{analogy('Noticing what you know is the first step to choosing what to practise next.', 'Riconoscere ciò che sai è il primo passo per scegliere che cosa ripassare.')}</>);
  }

  if (missionId === 'g5x-science-workbook-challenge') {
    const prompts: Pair[] = [['Name', 'Indica'], ['Describe', 'Descrivi'], ['Compare', 'Confronta'], ['Explain', 'Spiega'], ['Draw', 'Disegna']];
    const i = get('command');
    const answers: Pair[] = [
      ['Give the correct name.', 'Scrivi il nome corretto.'],
      ['Add details you can observe.', 'Aggiungi dettagli che puoi osservare.'],
      ['Say what is alike and different.', 'Indica somiglianze e differenze.'],
      ['Give an idea and support it with evidence.', 'Esponi un’idea e sostienila con una prova.'],
      ['Make a clear picture and label its parts.', 'Fai un disegno chiaro e indica le sue parti.']
    ];
    return frame(text('Workbook Thinking Bench', 'Banco del quaderno di scienze'), text('Choose Your Scientist Tool', 'Scegli il tuo strumento da scienziato'), text('Workbook instructions use action words. Pick one and see what a clear answer should include.', 'Le consegne del quaderno usano parole-azione. Scegline una e scopri che cosa dovrebbe contenere una risposta chiara.'),
      svg(text('Science workbook answer planning', 'Pianificazione di una risposta nel quaderno di scienze'), <>
        <rect x="75" y="43" width="210" height="112" rx="10" fill="rgba(255,255,255,.08)" stroke="#dfe7ff" strokeWidth="3" />
        {[0, 1, 2].map(n => <line key={n} x1="96" y1={75 + n * 25} x2="263" y2={75 + n * 25} stroke={n === i % 3 ? '#38ef7d' : '#69729d'} strokeWidth="3" strokeDasharray={n === i % 3 ? '0' : '5 4'} />)}
        <circle cx="180" cy="55" r="17" fill="#ffd166" /><text x="180" y="60" textAnchor="middle" fill="#10143a" fontSize="13" fontWeight="900">{['N', 'D', 'C', 'E', '✎'][i]}</text>
        <text x="180" y="179" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800">{text(prompts[i][0], prompts[i][1])}</text>
      </>),
      <>{choices(lang, prompts, i, n => choose('command', n))}<Readout label={text('A strong answer includes', 'Una risposta valida contiene')} value={text(answers[i][0], answers[i][1])}/><Readout label={text('Remember', 'Ricorda')} value={text('Use your own words and relevant evidence', 'Usa parole tue e prove pertinenti')}/>{analogy('A good science answer is a small explanation: idea first, evidence next.', 'Una buona risposta scientifica è una piccola spiegazione: prima l’idea, poi la prova.')}</>);
  }

  if (missionId === 'g5x-energy-smart-classroom') {
    const observations: Pair[] = [['Lights', 'Luci'], ['Screen', 'Schermo'], ['Daylight', 'Luce naturale']];
    const i = get('classroom');
    const notes: Pair[] = [
      ['Some lights may be on when daylight is enough.', 'Alcune luci potrebbero essere accese anche se basta la luce naturale.'],
      ['A screen may stay on when nobody is using it.', 'Uno schermo potrebbe restare acceso quando nessuno lo usa.'],
      ['Sunlight can brighten the room without a lamp.', 'La luce del sole può illuminare l’aula senza una lampada.']
    ];
    const suggestions: Pair[] = [
      ['Ask the teacher if a light can safely be switched off.', 'Chiedi all’insegnante se una luce può essere spenta in sicurezza.'],
      ['Ask the teacher whether the screen is needed.', 'Chiedi all’insegnante se lo schermo serve.'],
      ['Notice whether blinds can be adjusted by an adult.', 'Osserva se un adulto può regolare le tende.']
    ];
    return frame(text('Energy-Smart Classroom Audit', 'Controllo dell’aula attenta all’energia'), text('Spot It, Record It, Suggest It', 'Osserva, annota, proponi'), text('Choose a classroom observation and plan a safe improvement with an adult. Never touch plugs, sockets or electrical equipment.', 'Scegli un’osservazione in aula e pianifica un miglioramento sicuro con un adulto. Non toccare spine, prese o apparecchi elettrici.'),
      svg(text('Classroom energy observation model', 'Modello di osservazione dell’energia in aula'), <>
        <path d="M66 142V68L180 39L294 68V142Z" fill="rgba(69,216,255,.12)" stroke="#dfe7ff" strokeWidth="3" />
        <rect x="91" y="88" width="47" height="39" fill="#ffd166" opacity={i === 0 ? 1 : .35} />
        <rect x="218" y="92" width="48" height="31" rx="4" fill={i === 1 ? '#45d8ff' : '#59628d'} />
        <circle cx="180" cy="68" r="21" fill={i === 2 ? '#ffd166' : '#8a7bff'} className="chem-anim-pulse" />
        <path d="M75 143H285" stroke="#38ef7d" strokeWidth="5" />
        <text x="180" y="171" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="800">{text(observations[i][0], observations[i][1])}</text>
      </>),
      <>{choices(lang, observations, i, n => choose('classroom', n))}<Readout label={text('What we noticed', 'Che cosa abbiamo osservato')} value={text(notes[i][0], notes[i][1])}/><Readout label={text('Safe next step', 'Prossimo passo sicuro')} value={text(suggestions[i][0], suggestions[i][1])}/>{analogy('Scientists observe first. A responsible adult decides what can safely be changed.', 'Gli scienziati prima osservano. Un adulto responsabile decide che cosa si può cambiare in sicurezza.')}</>);
  }

  if (missionId === 'g5x-habitat-helper') {
    const places: Pair[] = [['School garden', 'Giardino scolastico'], ['Pond edge', 'Riva dello stagno'], ['Woodland path', 'Sentiero nel bosco']];
    const i = get('habitat');
    const creatures = [
      [['🌱', '#38ef7d'], ['🦋', '#ffd166'], ['🐞', '#ff5d8f']],
      [['🌾', '#38ef7d'], ['🐸', '#45d8ff'], ['🪷', '#ff5d8f']],
      [['🌳', '#38ef7d'], ['🐦', '#ffd166'], ['🍄', '#ff5d8f']]
    ];
    const resources: Pair[] = [['Food', 'Cibo'], ['Water', 'Acqua'], ['Shelter', 'Riparo'], ['Space', 'Spazio']];
    const resource = get('resource');
    return frame(text('Habitat Helper Map', 'Mappa dell’aiutante degli habitat'), text('Map a Habitat With Care', 'Mappa un habitat con cura'), text('Choose a place and map what living things might need. Observe respectfully: do not collect animals or disturb plants and nests.', 'Scegli un luogo e mappa ciò di cui potrebbero aver bisogno gli esseri viventi. Osserva con rispetto: non raccogliere animali e non disturbare piante o nidi.'),
      svg(text('Illustrated habitat map', 'Mappa illustrata dell’habitat'), <>
        <rect x="45" y="43" width="270" height="108" rx="14" fill={['rgba(56,239,125,.16)', 'rgba(69,216,255,.19)', 'rgba(56,100,65,.4)'][i]} stroke="#dfe7ff" strokeWidth="2" />
        <path d={i===1?'M46 118Q110 94 180 119T314 117V151H46Z':'M46 125Q120 104 180 124T314 119V151H46Z'} fill={i===1?'rgba(69,216,255,.5)':'rgba(56,239,125,.24)'} />
        {creatures[i].map(([emoji,color], n) => <g key={n}><circle cx={105+n*75} cy={82+(n%2)*18} r="18" fill={String(color)} opacity=".8" /><text x={105+n*75} y={89+(n%2)*18} textAnchor="middle" fontSize="19">{String(emoji)}</text></g>)}
        <text x="180" y="175" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800">{text(places[i][0], places[i][1])}</text>
      </>),
      <>{choices(lang, places, i, n => choose('habitat', n))}{choices(lang, resources, resource, n => choose('resource', n))}<Readout label={text('Habitat need to map', 'Bisogno da mappare')} value={text(resources[resource][0], resources[resource][1])}/><Readout label={text('Helpful action', 'Azione utile')} value={text('Record only what you actually observe', 'Registra solo ciò che osservi davvero')}/>{analogy('A habitat map is a careful record, not a reason to disturb the living things there.', 'Una mappa dell’habitat è un’annotazione attenta, non un motivo per disturbare gli esseri viventi.')}</>);
  }

  if (missionId === 'g5x-science-fair-capstone') {
    const investigations: Pair[] = [['Plant growth', 'Crescita delle piante'], ['Sound', 'Suono'], ['Paper bridge', 'Ponte di carta']];
    const i = get('fair');
    const details: Pair[][] = [
      [['Question', 'Domanda'], ['Does light affect seedling growth?', 'La luce influisce sulla crescita di una piantina?'], ['Measure height over time', 'Misura l’altezza nel tempo'], ['Keep seed type and water the same', 'Mantieni uguali tipo di seme e acqua']],
      [['Question', 'Domanda'], ['Does distance change how loud a sound seems?', 'La distanza cambia quanto forte sembra un suono?'], ['Record a simple loudness rating', 'Registra una valutazione semplice del volume'], ['Use the same sound and room', 'Usa lo stesso suono e la stessa stanza']],
      [['Question', 'Domanda'], ['Which paper fold holds more counters?', 'Quale piega della carta sostiene più gettoni?'], ['Count identical counters', 'Conta gettoni uguali'], ['Keep paper size and supports the same', 'Mantieni uguali formato della carta e supporti']]
    ];
    return frame(text('Science Fair Question Builder', 'Costruttore di domande per la fiera delle scienze'), text('Turn a Wonder Into a Fair Test', 'Trasforma una curiosità in una prova corretta'), text('Choose a topic and explore the question, what to measure and what to keep the same.', 'Scegli un argomento e scopri la domanda, che cosa misurare e che cosa mantenere uguale.'),
      svg(text('Fair test planning board', 'Tabella di pianificazione di una prova corretta'), <>
        <rect x="52" y="48" width="256" height="104" rx="12" fill="rgba(255,255,255,.06)" stroke="#dfe7ff" strokeWidth="2" />
        {[0,1,2].map(n=><g key={n}><rect x={68+n*80} y="67" width="64" height="62" rx="8" fill={['#8a7bff','#45d8ff','#38ef7d'][n]} opacity={i===n?.95:.45}/><text x={100+n*80} y="101" textAnchor="middle" fill="#10143a" fontSize="19" fontWeight="900">{['?','↗','='][n]}</text><text x={100+n*80} y="120" textAnchor="middle" fill="#10143a" fontSize="9" fontWeight="800">{text(['ASK','MEASURE','SAME'][n],['CHIEDI','MISURA','UGUALE'][n])}</text></g>)}
        <text x="180" y="174" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800">{text(investigations[i][0], investigations[i][1])}</text>
      </>),
      <>{choices(lang, investigations, i, n => choose('fair', n))}<Readout label={text(details[i][0][0], details[i][0][1])} value={text(details[i][1][0], details[i][1][1])}/><Readout label={text('What to measure', 'Che cosa misurare')} value={text(details[i][2][0], details[i][2][1])}/><Readout label={text('Keep the same', 'Mantieni uguale')} value={text(details[i][3][0], details[i][3][1])}/>{analogy('A fair test changes one thing at a time and measures carefully.', 'Una prova corretta cambia una cosa alla volta e misura con attenzione.')}</>);
  }

  if (missionId === 'g5x-stem-paper-bridge') {
    const folds: Pair[] = [['Flat', 'Piatta'], ['Folded', 'Piegata'], ['Accordion', 'A fisarmonica']];
    const i = get('bridge');
    const load = value('bridge-load');
    const strength = [Math.round(load * .42), Math.round(load * .72), Math.round(load * .9)][i];
    return frame(text('Paper Bridge Builder', 'Costruttore di ponti di carta'), text('Can a Fold Make a Stronger Bridge?', 'Una piega può rendere più forte un ponte?'), text('Change the paper shape in this simple model. The load meter is illustrative: test real materials only with an adult.', 'Cambia la forma della carta in questo modello semplice. L’indicatore del carico è illustrativo: prova materiali reali solo con un adulto.'),
      svg(text('Paper bridge shape and model load', 'Forma del ponte di carta e carico del modello'), <>
        <rect x="48" y="125" width="42" height="25" rx="4" fill="#8a7bff"/><rect x="270" y="125" width="42" height="25" rx="4" fill="#8a7bff"/>
        {i===0 ? <path d="M90 119H270" stroke="#ffd166" strokeWidth="9" /> :
          i===1 ? <path d="M90 121L120 91L150 121L180 91L210 121L240 91L270 121" fill="none" stroke="#ffd166" strokeWidth="8" strokeLinejoin="round"/> :
            <path d="M90 121L108 92L126 121L144 92L162 121L180 92L198 121L216 92L234 121L252 92L270 121" fill="none" stroke="#ffd166" strokeWidth="7" strokeLinejoin="round"/>}
        {Array.from({length: Math.min(7, Math.floor(strength/14))},(_,n)=><circle key={n} cx={127+(n%4)*34} cy={83+Math.floor(n/4)*24} r="8" fill="#45d8ff" className="chem-anim-pulse" style={{animationDelay:`${n*.12}s`}} />)}
        <text x="180" y="171" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800">{text(folds[i][0], folds[i][1])} · {strength}%</text>
      </>),
      <>{choices(lang, folds, i, n => choose('bridge', n))}<Slider label={text('Model load', 'Carico del modello')} value={load} min={10} max={100} step={5} unit="%" lang={lang} onChange={n => adjust('bridge-load', n)}/><Readout label={text('Model result', 'Risultato del modello')} value={`${strength}% ${text('illustrative support', 'di sostegno illustrativo')}`}/>{analogy('Engineers compare designs, test them safely and use evidence to improve a bridge.', 'Gli ingegneri confrontano progetti, li provano in sicurezza e usano le prove per migliorare un ponte.')}</>);
  }

  return null;
};
