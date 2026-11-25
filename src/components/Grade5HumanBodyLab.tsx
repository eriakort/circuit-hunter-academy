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

export const Grade5HumanBodyLab: React.FC<Props> = ({ missionId, lang }) => {
  const [selection, setSelection] = useState<Record<string, number>>({});
  const [level, setLevel] = useState<Record<string, number>>({});
  const get = (key: string) => selection[key] ?? 0;
  const set = (key: string, value: number) => setSelection(current => ({ ...current, [key]: value }));
  const amount = (key: string) => level[key] ?? 55;
  const setAmount = (key: string, value: number) => setLevel(current => ({ ...current, [key]: value }));
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
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill="#fff" />
        </marker>
      </defs>
      <rect x="18" y="18" width="324" height="169" rx="18" fill="rgba(16,22,58,.95)" stroke="#8a7bff" />
      {children}
    </svg>
  );
  const analogy = (en: string, it: string) => <Analogy lang={lang} en={en} it={it} />;

  if (missionId === 'g5h-one-amazing-organism') {
    const stages: Pair[] = [['Cell', 'Cellula'], ['Tissue', 'Tessuto'], ['Organ', 'Organo'], ['Body system', 'Apparato'], ['Organism', 'Organismo']];
    const i = get('organisation');
    const sizes = [15, 23, 31, 40, 49];
    return frame(text('Body Blueprint Lab', 'Laboratorio del corpo'), text('Build a Body, Step by Step', 'Costruisci il corpo, passo dopo passo'), text('Zoom from a tiny living cell to the whole person. Each level is made from the one before it.', 'Ingrandisci una piccola cellula fino all’intero organismo. Ogni livello è formato da quello precedente.'),
      svg(text('Levels of body organisation', 'Livelli di organizzazione del corpo'), <>
        <circle cx="180" cy="93" r={sizes[i]} fill={['#45d8ff', '#38ef7d', '#ffd166', '#ff6a55', '#8a7bff'][i]} className="chem-anim-pulse" />
        {i === 0 && <circle cx="180" cy="93" r="6" fill="#fff" />}
        {i > 0 && <text x="180" y="99" textAnchor="middle" fill="#10143a" fontSize="16" fontWeight="900">{['', '•••', '♥', '↗', '☺'][i]}</text>}
        <text x="180" y="164" textAnchor="middle" fill="#fff" fontSize="17" fontWeight="800">{text(stages[i][0], stages[i][1])}</text>
      </>),
      <>{choices(lang, stages, i, value => set('organisation', value))}<Readout label={text('Body level', 'Livello del corpo')} value={text(stages[i][0], stages[i][1])}/>{analogy('Cells form tissues, tissues form organs, and organs work together in systems.', 'Le cellule formano i tessuti, i tessuti gli organi e gli organi collaborano negli apparati.')}</>);
  }

  if (missionId === 'g5h-cells-building-blocks') {
    const parts: Pair[] = [['Membrane', 'Membrana'], ['Cytoplasm', 'Citoplasma'], ['Nucleus', 'Nucleo']];
    const i = get('cell');
    return frame(text('Cell Explorer Lab', 'Laboratorio esplora-cellula'), text('Explore an Animal Cell', 'Esplora una cellula animale'), text('Choose a cell part to see where it is and what it does. This colourful picture is a simplified model.', 'Scegli una parte della cellula per vedere dov’è e cosa fa. Questo disegno colorato è un modello semplificato.'),
      svg(text('Simplified animal cell', 'Cellula animale semplificata'), <>
        <ellipse cx="180" cy="100" rx="105" ry="61" fill="rgba(69,216,255,.2)" stroke={i === 0 ? '#ffd166' : '#45d8ff'} strokeWidth={i === 0 ? 8 : 4} />
        <ellipse cx="180" cy="100" rx="82" ry="43" fill={i === 1 ? 'rgba(56,239,125,.3)' : 'rgba(56,239,125,.12)'} stroke={i === 1 ? '#38ef7d' : '#477e71'} strokeWidth={i === 1 ? 5 : 2} />
        <circle cx="180" cy="100" r={i === 2 ? 26 : 20} fill={i === 2 ? '#ffd166' : '#8a7bff'} className={i === 2 ? 'chem-anim-pulse' : ''} />
        {[0, 1, 2, 3].map(n => <ellipse key={n} cx={115 + n * 42} cy={77 + (n % 2) * 46} rx="9" ry="4" fill="#ff6a55" />)}
        <text x="180" y="174" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800">{text(parts[i][0], parts[i][1])}</text>
      </>),
      <>{choices(lang, parts, i, value => set('cell', value))}<Readout label={text('Cell part', 'Parte della cellula')} value={text(parts[i][0], parts[i][1])}/><Readout label={text('Its job', 'La sua funzione')} value={text(['Controls what enters and leaves', 'Holds many cell activities', 'Contains most genetic information'][i], ['Controlla ciò che entra ed esce', 'Ospita molte attività cellulari', 'Contiene gran parte delle informazioni genetiche'][i])}/>{analogy('A cell is like a tiny room: a boundary, a busy inside and a control centre.', 'Una cellula è come una piccola stanza: un confine, un interno attivo e un centro di controllo.')}</>);
  }

  if (missionId === 'g5h-tissues-and-organs') {
    const organs: Pair[] = [['Heart', 'Cuore'], ['Lung', 'Polmone'], ['Stomach', 'Stomaco']];
    const i = get('tissues');
    const details = [
      [text('Muscle tissue squeezes to pump blood.', 'Il tessuto muscolare si contrae per pompare il sangue.'), text('Nervous tissue helps coordinate the beat.', 'Il tessuto nervoso contribuisce a coordinare il battito.'), text('Connective tissue supports the organ.', 'Il tessuto connettivo sostiene l’organo.')],
      [text('Epithelial tissue lines airways and air sacs.', 'Il tessuto epiteliale riveste le vie aeree e gli alveoli.'), text('Connective tissue supports the lungs.', 'Il tessuto connettivo sostiene i polmoni.'), text('Muscle tissue helps move air in and out.', 'Il tessuto muscolare aiuta a far entrare e uscire l’aria.')],
      [text('Muscle tissue churns food.', 'Il tessuto muscolare rimescola il cibo.'), text('Epithelial tissue lines the stomach.', 'Il tessuto epiteliale riveste lo stomaco.'), text('Nervous tissue helps control digestion.', 'Il tessuto nervoso contribuisce a controllare la digestione.')]
    ];
    return frame(text('Tissue Team Lab', 'Laboratorio della squadra dei tessuti'), text('Many Tissues, One Organ', 'Tanti tessuti, un solo organo'), text('Pick an organ and uncover how different tissues cooperate to do its job.', 'Scegli un organo e scopri come tessuti diversi collaborano per svolgere il suo compito.'),
      svg(text('Tissues combine to form an organ', 'I tessuti si uniscono per formare un organo'), <>
        <circle cx="180" cy="100" r="47" fill={['#ff5d8f', '#45d8ff', '#ffd166'][i]} className="chem-anim-pulse" />
        <path d={i === 0 ? 'M180 120C120 82 150 55 180 78C210 55 240 82 180 120Z' : i === 1 ? 'M145 73C120 67 113 103 124 126C134 147 157 137 166 119V80ZM215 73C240 67 247 103 236 126C226 147 203 137 194 119V80Z' : 'M145 65Q215 68 205 114Q196 145 157 131Q128 118 145 65Z'} fill="rgba(255,255,255,.25)" stroke="#fff" strokeWidth="2" />
        <text x="180" y="174" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="800">{text(organs[i][0], organs[i][1])}</text>
      </>),
      <>{choices(lang, organs, i, value => set('tissues', value))}<Readout label={text('Teamwork example', 'Esempio di collaborazione')} value={details[i][get('tissue-detail') % 3]}/>{choices(lang, [['Muscle', 'Muscolare'], ['Nervous', 'Nervoso'], ['Connective', 'Connettivo']], get('tissue-detail') % 3, value => set('tissue-detail', value))}{analogy('An organ is a team: different tissues bring different skills.', 'Un organo è una squadra: tessuti diversi contribuiscono con capacità diverse.')}</>);
  }

  if (missionId === 'g5h-locomotor-system') {
    const bend = amount('arm');
    const elbow = 150;
    const wristX = 150 + Math.cos((180 - bend) * Math.PI / 180) * 77;
    const wristY = 108 + Math.sin((180 - bend) * Math.PI / 180) * 77;
    return frame(text('Move Together Lab', 'Laboratorio muoviti in squadra'), text('Bend and Straighten an Arm', 'Piega e distendi il braccio'), text('Move the slider. Bones meet at the elbow while muscles pull to move the arm.', 'Sposta il cursore. Le ossa si incontrano al gomito e i muscoli tirano per muovere il braccio.'),
      svg(text('Arm bones and elbow joint', 'Ossa del braccio e articolazione del gomito'), <>
        <circle cx={elbow} cy="108" r="17" fill="#ffd166" stroke="#fff" strokeWidth="3" />
        <path d={`M70 108H${elbow}L${wristX} ${wristY}`} fill="none" stroke="#dfe7ff" strokeWidth="15" strokeLinecap="round" />
        <path d={`M98 94Q128 62 151 98`} fill="none" stroke="#ff5d8f" strokeWidth="10" strokeLinecap="round" className="chem-anim-pulse" />
        <text x="103" y="145" fill="#fff" fontSize="12">{text('biceps', 'bicipite')}</text>
        <text x={wristX} y={wristY + 25} fill="#fff" fontSize="12" textAnchor="middle">{text('hand', 'mano')}</text>
      </>),
      <><Slider label={text('Arm bend', 'Piegamento del braccio')} value={bend} min={25} max={155} step={5} unit="°" lang={lang} onChange={value => setAmount('arm', value)}/><Readout label={text('What moves it?', 'Che cosa lo muove?')} value={text('Muscles pull on bones', 'I muscoli tirano le ossa')}/>{analogy('Muscles pull like ropes; they work with bones and joints to move you.', 'I muscoli tirano come corde e collaborano con ossa e articolazioni per muoverti.')}</>);
  }

  if (missionId === 'g5h-skeletal-system') {
    const regions: Pair[] = [['Skull', 'Cranio'], ['Rib cage', 'Gabbia toracica'], ['Spine', 'Colonna'], ['Limbs', 'Arti']];
    const i = get('skeleton');
    return frame(text('Skeleton Explorer', 'Esplora-scheletro'), text('A Framework That Protects', 'Una struttura che protegge'), text('Select a region to discover how the skeleton supports and protects the body.', 'Seleziona una zona per scoprire come lo scheletro sostiene e protegge il corpo.'),
      svg(text('Simplified skeleton', 'Scheletro semplificato'), <>
        <circle cx="180" cy="51" r="22" fill={i === 0 ? '#ffd166' : '#dfe7ff'} stroke="#fff" strokeWidth="2" />
        <path d="M180 76V138M143 88Q180 70 217 88M145 104Q180 123 215 104M180 84L150 113L130 151M180 84L210 113L230 151M180 138L158 173M180 138L202 173" fill="none" stroke="#dfe7ff" strokeWidth={i === 1 || i === 2 || i === 3 ? 5 : 3} strokeLinecap="round" />
        <path d={i === 1 ? 'M145 91Q180 121 215 91' : i === 2 ? 'M180 77V139' : i === 3 ? 'M150 113L130 151M210 113L230 151M180 138L158 173M180 138L202 173' : 'M163 48Q180 26 197 48'} fill="none" stroke="#38ef7d" strokeWidth="6" strokeLinecap="round" className="chem-anim-pulse" />
      </>),
      <>{choices(lang, regions, i, value => set('skeleton', value))}<Readout label={text('Main job', 'Funzione principale')} value={text(['Protects the brain', 'Helps protect heart and lungs', 'Supports the body and protects the spinal cord', 'Supports movement with muscles'][i], ['Protegge il cervello', 'Aiuta a proteggere cuore e polmoni', 'Sostiene il corpo e protegge il midollo spinale', 'Collabora con i muscoli nel movimento'][i])}/>{analogy('Your skeleton is a strong framework with special shields around delicate organs.', 'Lo scheletro è una struttura resistente con protezioni per gli organi delicati.')}</>);
  }

  if (missionId === 'g5h-muscular-system') {
    const muscles: Pair[] = [['Skeletal', 'Scheletrico'], ['Smooth', 'Liscio'], ['Cardiac', 'Cardiaco']];
    const i = get('muscle');
    return frame(text('Muscle Motion Lab', 'Laboratorio dei muscoli'), text('Three Muscle Teams', 'Tre squadre di muscoli'), text('Switch muscle type and watch its simple movement model. Each type has a different job.', 'Cambia tipo di muscolo e osserva il suo modello di movimento. Ogni tipo ha un compito diverso.'),
      svg(text('Skeletal smooth and cardiac muscle models', 'Modelli di muscolo scheletrico liscio e cardiaco'), <>
        {i === 0 ? <><path d="M105 102Q180 47 255 102Q180 157 105 102Z" fill="#ff5d8f" stroke="#ffdce8" strokeWidth="3" className="chem-anim-pulse"/>{[0,1,2,3,4].map(n=><path key={n} d={`M${124+n*27} 85l18 34`} stroke="#ffdce8" strokeWidth="2" />)}</> :
          i === 1 ? <>{[0,1,2,3,4].map(n=><path key={n} d={`M${82+n*42} 68Q${95+n*42} 101 ${82+n*42} 139`} fill="none" stroke="#45d8ff" strokeWidth="12" strokeLinecap="round" className="chem-anim-pulse" style={{animationDelay:`${n*.12}s`}} />)}</> :
            <path d="M180 142C95 91 135 50 180 78C225 50 265 91 180 142Z" fill="#ff5d8f" stroke="#fff" strokeWidth="3" className="chem-anim-pulse" />}
        <text x="180" y="174" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="800">{text(muscles[i][0], muscles[i][1])}</text>
      </>),
      <>{choices(lang, muscles, i, value => set('muscle', value))}<Readout label={text('Where it works', 'Dove lavora')} value={text(['Attached to bones for movement', 'In organs such as the intestine', 'In the heart to pump blood'][i], ['Collegato alle ossa per muoverle', 'In organi come l’intestino', 'Nel cuore per pompare il sangue'][i])}/>{analogy('Some muscles move when you choose; others keep working automatically.', 'Alcuni muscoli si muovono quando lo decidi; altri lavorano automaticamente.')}</>);
  }

  if (missionId === 'g5h-circulatory-system') {
    const routes: Pair[] = [['To lungs', 'Verso i polmoni'], ['To body', 'Verso il corpo']];
    const i = get('circulation');
    return frame(text('Heart and Bloodflow Lab', 'Laboratorio cuore e circolazione'), text('Two Loops, One Flow', 'Due percorsi, un solo flusso'), text('Follow blood from the heart to the lungs, then from the heart to the body.', 'Segui il sangue dal cuore ai polmoni e poi dal cuore al resto del corpo.'),
      svg(text('Blood flow between heart lungs and body', 'Flusso del sangue tra cuore polmoni e corpo'), <>
        <circle cx="180" cy="103" r="31" fill="#ff5d8f" className="chem-anim-pulse"/><text x="180" y="109" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="900">♥</text>
        <ellipse cx="83" cy="91" rx="34" ry="43" fill={i === 0 ? '#45d8ff' : '#3a3f7a'} stroke="#45d8ff" strokeWidth="3"/>
        <ellipse cx="277" cy="91" rx="34" ry="43" fill={i === 1 ? '#ff6a55' : '#3a3f7a'} stroke="#ff6a55" strokeWidth="3"/>
        <path d={i === 0 ? 'M151 89Q118 55 103 75M103 115Q122 145 151 119' : 'M209 89Q242 55 257 75M257 115Q238 145 209 119'} fill="none" stroke={i === 0 ? '#45d8ff' : '#ff6a55'} strokeWidth="5" strokeDasharray="7 5" className="chem-anim-dash"/>
        <text x="83" y="157" textAnchor="middle" fill="#fff" fontSize="11">{text('Lungs', 'Polmoni')}</text><text x="277" y="157" textAnchor="middle" fill="#fff" fontSize="11">{text('Body', 'Corpo')}</text>
      </>),
      <>{choices(lang, routes, i, value => set('circulation', value))}<Readout label={text('Blood travels', 'Il sangue viaggia')} value={text(i === 0 ? 'Heart → lungs → heart' : 'Heart → body → heart', i === 0 ? 'Cuore → polmoni → cuore' : 'Cuore → corpo → cuore')}/>{analogy('Arteries carry blood away from the heart; veins bring it back.', 'Le arterie portano il sangue lontano dal cuore; le vene lo riportano.')}</>);
  }

  if (missionId === 'g5h-blood-stem') {
    const parts: Pair[] = [['Red cells', 'Globuli rossi'], ['White cells', 'Globuli bianchi'], ['Platelets', 'Piastrine'], ['Plasma', 'Plasma']];
    const i = get('blood');
    return frame(text('Blood Investigator', 'Investigatore del sangue'), text('What Is Blood Made Of?', 'Da che cosa è composto il sangue?'), text('Explore a paper-model blood sample. This is a classroom illustration, never a real sample.', 'Esplora un modello di carta del sangue. È un’illustrazione scolastica, non un campione reale.'),
      svg(text('Illustrated blood components model', 'Modello illustrato dei componenti del sangue'), <>
        <rect x="66" y="48" width="228" height="98" rx="18" fill={i === 3 ? 'rgba(255,209,102,.36)' : 'rgba(255,255,255,.08)'} stroke="#ffd166" strokeWidth="3"/>
        {i !== 3 && Array.from({length: 9}, (_, n) => <g key={n} className={i === 0 ? 'chem-anim-pulse' : ''}><ellipse cx={92+(n%3)*78} cy={72+Math.floor(n/3)*30} rx={i===0?13:8} ry={i===0?7:8} fill={i===0?'#ff5d8f':i===1?'#fff':'#ffd166'} stroke={i===1?'#45d8ff':'none'} strokeWidth="3"/></g>)}
        <text x="180" y="175" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800">{text(parts[i][0], parts[i][1])}</text>
      </>),
      <>{choices(lang, parts, i, value => set('blood', value))}<Readout label={text('Helpful job', 'Funzione utile')} value={text(['Carry most oxygen', 'Help defend the body', 'Help blood clot', 'Carry dissolved substances'][i], ['Trasportano gran parte dell’ossigeno', 'Aiutano a difendere il corpo', 'Aiutano la coagulazione', 'Trasporta sostanze disciolte'][i])}/>{analogy('Think of blood as a travelling team: different parts carry, defend and help repair.', 'Immagina il sangue come una squadra in viaggio: i suoi componenti trasportano, difendono e aiutano a riparare.')}</>);
  }

  if (missionId === 'g5h-respiratory-system') {
    const breath = amount('breath');
    const spread = 26 + breath * .32;
    const inhaling = get('breathing') === 0;
    return frame(text('Breathing Model Lab', 'Laboratorio del modello respiratorio'), text('Breathe In, Breathe Out', 'Inspira, espira'), text('Choose a breathing moment. See the lungs and diaphragm change in this simple model.', 'Scegli un momento della respirazione. Osserva i polmoni e il diaframma cambiare in questo modello semplificato.'),
      svg(text('Lungs and moving diaphragm', 'Polmoni e diaframma in movimento'), <>
        <path d="M180 46V82" stroke="#dfe7ff" strokeWidth="12" strokeLinecap="round"/><path d="M180 77L150 94M180 77L210 94" fill="none" stroke="#dfe7ff" strokeWidth="8" />
        <path d={`M173 82C${158-spread/3} 82 ${140-spread/3} 105 ${148-spread/3} 144Q158 160 174 145Z`} fill="#ff5d8f" className={inhaling?'chem-anim-pulse':''}/>
        <path d={`M187 82C${202+spread/3} 82 ${220+spread/3} 105 ${212+spread/3} 144Q202 160 186 145Z`} fill="#ff5d8f" className={inhaling?'chem-anim-pulse':''}/>
        <path d={inhaling?'M120 159Q180 179 240 159':'M120 145Q180 130 240 145'} fill="none" stroke="#45d8ff" strokeWidth="5"/>
        <text x="180" y="184" textAnchor="middle" fill="#fff" fontSize="12">{text(inhaling?'Diaphragm contracts':'Diaphragm relaxes', inhaling?'Il diaframma si contrae':'Il diaframma si rilassa')}</text>
      </>),
      <>{choices(lang, [['Breathe in', 'Inspira'], ['Breathe out', 'Espira']], get('breathing'), value => set('breathing', value))}<Slider label={text('Breath size model', 'Ampiezza del modello')} value={breath} min={20} max={100} step={5} unit="%" lang={lang} onChange={value => setAmount('breath', value)}/><Readout label={text('Gas exchange happens in', 'Lo scambio dei gas avviene negli')} value={text('Alveoli', 'Alveoli')}/>{analogy('Air moves in and out; oxygen passes into the blood at tiny air sacs called alveoli.', 'L’aria entra ed esce; l’ossigeno passa nel sangue attraverso piccole sacche chiamate alveoli.')}</>);
  }

  if (missionId === 'g5h-digestive-system') {
    const stages: Pair[] = [['Mouth', 'Bocca'], ['Oesophagus', 'Esofago'], ['Stomach', 'Stomaco'], ['Small intestine', 'Intestino tenue'], ['Large intestine', 'Intestino crasso']];
    const i = get('digestion');
    const x = [65, 120, 180, 240, 295][i];
    return frame(text('Nutrient Journey Lab', 'Laboratorio del viaggio nutritivo'), text('Follow a Bite of Food', 'Segui un boccone di cibo'), text('Tap each stop to trace the digestive journey and discover what happens there.', 'Tocca ogni tappa per seguire il viaggio digestivo e scoprire cosa succede.'),
      svg(text('Food journey through the digestive tract', 'Viaggio del cibo nel tubo digerente'), <>
        <path d="M65 85Q120 115 180 85T295 85" fill="none" stroke="#ffd166" strokeWidth="5" strokeDasharray="6 5"/>
        {[65,120,180,240,295].map((cx,n)=><g key={cx}><circle cx={cx} cy="85" r={n===i?23:16} fill={n===i?'#38ef7d':'#3a3f7a'} stroke="#dfe7ff" strokeWidth="2" className={n===i?'chem-anim-pulse':''}/><text x={cx} y="90" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="800">{['1','2','3','4','5'][n]}</text></g>)}
        <circle cx={x} cy="85" r="5" fill="#ffd166" />
        <text x="180" y="150" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="800">{text(stages[i][0], stages[i][1])}</text>
      </>),
      <>{choices(lang, stages, i, value => set('digestion', value))}<Readout label={text('What happens', 'Che cosa succede')} value={text(['Food is chewed; saliva begins digestion', 'Food moves toward the stomach', 'Food is mixed with gastric juice', 'Most nutrients enter the blood', 'Much remaining water is absorbed'][i], ['Il cibo viene masticato e la saliva avvia la digestione', 'Il cibo raggiunge lo stomaco', 'Il cibo si mescola ai succhi gastrici', 'La maggior parte dei nutrienti passa nel sangue', 'Viene assorbita gran parte dell’acqua rimasta'][i])}/>{analogy('Digestion is a journey: food is broken down so the body can use nutrients.', 'La digestione è un viaggio: il cibo viene trasformato perché il corpo possa usare i nutrienti.')}</>);
  }

  if (missionId === 'g5h-teeth-and-nutrition') {
    const teeth: Pair[] = [['Incisors', 'Incisivi'], ['Canines', 'Canini'], ['Molars', 'Molari']];
    const i = get('tooth');
    return frame(text('Smile Shield Lab', 'Laboratorio scudo del sorriso'), text('Teeth Have Different Jobs', 'Ogni dente ha il suo compito'), text('Choose a tooth type and match its shape to its food job. Explore balanced-food variety, not food rules.', 'Scegli un tipo di dente e collega la sua forma al compito. Scopri la varietà degli alimenti, senza regole rigide sul cibo.'),
      svg(text('Tooth shapes and jobs', 'Forme e funzioni dei denti'), <>
        <path d={i===0?'M148 55Q180 45 212 55L207 127Q180 146 153 127Z':i===1?'M153 55Q180 45 207 55L194 135Q180 151 166 135Z':'M143 61Q180 42 217 61L212 129Q180 148 148 129Z'} fill="#fff" stroke="#45d8ff" strokeWidth="4"/>
        <path d="M159 82H201" stroke="#dfe7ff" strokeWidth="2"/>
        <text x="180" y="174" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="800">{text(teeth[i][0], teeth[i][1])}</text>
      </>),
      <>{choices(lang, teeth, i, value => set('tooth', value))}<Readout label={text('Food job', 'Compito sul cibo')} value={text(['Cut food', 'Tear food', 'Grind food'][i], ['Tagliare il cibo', 'Lacerare il cibo', 'Triturare il cibo'][i])}/><Readout label={text('Healthy habit', 'Abitudine sana')} value={text('Brush with fluoride toothpaste', 'Lavare i denti con dentifricio al fluoro')}/>{analogy('A varied, balanced diet gives the body different nutrients; teeth help prepare food.', 'Un’alimentazione varia ed equilibrata offre diversi nutrienti; i denti preparano il cibo.')}</>);
  }

  if (missionId === 'g5h-excretory-system') {
    const stops: Pair[] = [['Kidneys', 'Reni'], ['Ureters', 'Ureteri'], ['Bladder', 'Vescica'], ['Urethra', 'Uretra']];
    const i = get('urinary');
    return frame(text('Clean Body Flow Lab', 'Laboratorio del flusso depurativo'), text('Follow the Urine Path', 'Segui il percorso dell’urina'), text('Trace the route from the kidneys to the bladder and out of the body.', 'Segui il percorso dai reni alla vescica e poi fuori dal corpo.'),
      svg(text('Urinary system route', 'Percorso dell’apparato urinario'), <>
        <path d="M140 72Q115 93 145 117L162 142M220 72Q245 93 215 117L198 142M162 142Q180 155 198 142" fill="none" stroke="#45d8ff" strokeWidth="5" strokeDasharray="6 4" className="chem-anim-dash"/>
        <ellipse cx="126" cy="75" rx="20" ry="27" fill={i===0?'#38ef7d':'#ff5d8f'} stroke="#fff" strokeWidth="2"/>
        <ellipse cx="234" cy="75" rx="20" ry="27" fill={i===0?'#38ef7d':'#ff5d8f'} stroke="#fff" strokeWidth="2"/>
        <path d="M160 139Q180 127 200 139Q211 170 180 174Q149 170 160 139Z" fill={i===2?'#38ef7d':'#ffd166'} stroke="#fff" strokeWidth="2"/>
        <text x="180" y="53" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800">{text(stops[i][0], stops[i][1])}</text>
      </>),
      <>{choices(lang, stops, i, value => set('urinary', value))}<Readout label={text('What happens here', 'Che cosa avviene')} value={text(['Filter blood and make urine', 'Carry urine to the bladder', 'Store urine temporarily', 'Urine leaves the body'][i], ['Filtrano il sangue e producono urina', 'Portano l’urina alla vescica', 'Raccoglie temporaneamente l’urina', 'L’urina esce dal corpo'][i])}/>{analogy('The urinary system is a filter-and-pipe route that helps remove waste and balance water.', 'L’apparato urinario è un percorso di filtri e condotti che aiuta a eliminare rifiuti e bilanciare l’acqua.')}</>);
  }

  if (missionId === 'g5h-reproductive-system') {
    const steps: Pair[] = [['Egg cell', 'Cellula uovo'], ['Sperm cell', 'Spermatozoo'], ['Fertilisation', 'Fecondazione'], ['Uterus', 'Utero']];
    const i = get('reproduction');
    return frame(text('Life Science Lab', 'Laboratorio di scienze della vita'), text('A Respectful Reproduction Model', 'Un modello rispettoso della riproduzione'), text('Explore a simple, non-detailed model of reproductive cells and early development. Everyone grows at their own pace.', 'Esplora un modello semplice e non dettagliato delle cellule riproduttive e dello sviluppo iniziale. Ognuno cresce con i propri tempi.'),
      svg(text('Simplified reproductive process model', 'Modello semplificato del processo riproduttivo'), <>
        {i < 2 ? <><circle cx={180} cy="92" r={i===0?29:19} fill={i===0?'#ffd166':'#45d8ff'} stroke="#fff" strokeWidth="3"/>{i===1&&<path d="M199 92Q235 80 255 96" fill="none" stroke="#45d8ff" strokeWidth="5" strokeLinecap="round"/>}</> :
          i===2 ? <><circle cx="148" cy="92" r="24" fill="#ffd166"/><circle cx="212" cy="92" r="24" fill="#45d8ff"/><path d="M174 92H186" stroke="#fff" strokeWidth="5" markerEnd="url(#arrow)"/><circle cx="180" cy="92" r="15" fill="#ff5d8f" className="chem-anim-pulse"/></> :
            <><path d="M132 62Q180 42 228 62Q216 125 180 145Q144 125 132 62Z" fill="rgba(255,93,143,.3)" stroke="#ff5d8f" strokeWidth="5"/><circle cx="180" cy="92" r="13" fill="#ffd166" className="chem-anim-pulse"/></>}
        <text x="180" y="169" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="800">{text(steps[i][0], steps[i][1])}</text>
      </>),
      <>{choices(lang, steps, i, value => set('reproduction', value))}<Readout label={text('Key idea', 'Idea chiave')} value={text(['One reproductive cell', 'One reproductive cell', 'Sperm and egg cells join', 'Early development begins in the uterus'][i], ['Una cellula riproduttiva', 'Una cellula riproduttiva', 'Lo spermatozoo e la cellula uovo si uniscono', 'Lo sviluppo iniziale avviene nell’utero'][i])}/>{analogy('Bodies develop at different times. Accurate questions about growth can be discussed with a trusted adult.', 'I corpi si sviluppano in tempi diversi. Le domande sulla crescita si possono rivolgere a un adulto di fiducia.')}</>);
  }

  if (missionId === 'g5h-immune-system') {
    const defences: Pair[] = [['Skin barrier', 'Barriera della pelle'], ['White blood cells', 'Globuli bianchi'], ['Antibodies', 'Anticorpi']];
    const i = get('immune');
    return frame(text('Body Defence Lab', 'Laboratorio delle difese del corpo'), text('A Team of Defences', 'Una squadra di difese'), text('Choose a defence and see how it helps protect the body from pathogens.', 'Scegli una difesa e scopri come aiuta a proteggere il corpo dai patogeni.'),
      svg(text('Immune system defences', 'Difese del sistema immunitario'), <>
        <circle cx="180" cy="102" r="52" fill="rgba(69,216,255,.18)" stroke={i===0?'#38ef7d':'#45d8ff'} strokeWidth={i===0?11:4}/>
        {i===1 ? <><circle cx="180" cy="102" r="25" fill="#fff" stroke="#8a7bff" strokeWidth="5"/>{[0,1,2,3].map(n=><path key={n} d={`M${140+n*25} ${61+(n%2)*85}l10 12`} stroke="#ff6a55" strokeWidth="4" className="chem-anim-pulse"/>)}</> :
          i===2 ? <>{[-1,0,1].map(n=><path key={n} d={`M${160+n*20} 119v-22l-12-13M${160+n*20} 97l12-13`} fill="none" stroke="#ffd166" strokeWidth="6" strokeLinecap="round"/>)}</> :
            <>{[0,1,2,3,4].map(n=><circle key={n} cx={92+n*42} cy={60+(n%2)*80} r="7" fill="#ff5d8f" />)}</>}
        <text x="180" y="177" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800">{text(defences[i][0], defences[i][1])}</text>
      </>),
      <>{choices(lang, defences, i, value => set('immune', value))}<Readout label={text('How it helps', 'Come aiuta')} value={text(['Acts as a physical barrier', 'Help find and fight pathogens', 'Can recognise particular pathogens', ''][i], ['Agisce come barriera fisica', 'Aiutano a riconoscere e contrastare i patogeni', 'Possono riconoscere determinati patogeni', ''][i])}/>{analogy('The immune system is a team of barriers and cells—not a force field that prevents every illness.', 'Il sistema immunitario è una squadra di barriere e cellule, non uno scudo che impedisce ogni malattia.')}</>);
  }

  if (missionId === 'g5h-nervous-system') {
    const reaction = amount('reaction');
    return frame(text('Message Route Lab', 'Laboratorio del percorso dei messaggi'), text('A Message Takes a Journey', 'Un messaggio in viaggio'), text('Adjust the model speed and follow a signal from a sense organ to the brain and back to a muscle.', 'Regola la velocità del modello e segui un segnale da un organo di senso al cervello e poi a un muscolo.'),
      svg(text('Nerve signal route from sense organ to brain and muscle', 'Percorso nervoso da un organo di senso al cervello e al muscolo'), <>
        <circle cx="74" cy="101" r="25" fill="#45d8ff"/><path d="M99 101H142" stroke="#ffd166" strokeWidth="5" strokeDasharray="6 4" className="chem-anim-dash"/>
        <path d="M180 65C145 65 145 139 180 139C215 139 215 65 180 65Z" fill="#8a7bff" stroke="#fff" strokeWidth="3"/><path d="M218 101H260" stroke="#ffd166" strokeWidth="5" strokeDasharray="6 4" className="chem-anim-dash"/>
        <path d="M260 79Q290 101 260 123" fill="none" stroke="#ff5d8f" strokeWidth="12" strokeLinecap="round" className="chem-anim-pulse"/>
        <text x="74" y="153" textAnchor="middle" fill="#fff" fontSize="11">{text('Sense', 'Senso')}</text><text x="180" y="163" textAnchor="middle" fill="#fff" fontSize="11">{text('Brain', 'Cervello')}</text><text x="280" y="153" textAnchor="middle" fill="#fff" fontSize="11">{text('Muscle', 'Muscolo')}</text>
      </>),
      <><Slider label={text('Signal-speed model', 'Velocità del modello')} value={reaction} min={10} max={100} step={5} unit="%" lang={lang} onChange={value => setAmount('reaction', value)}/><Readout label={text('Message route', 'Percorso del messaggio')} value={text('Sense → brain → muscle', 'Senso → cervello → muscolo')}/>{analogy('Nerves carry messages, helping the body sense information and coordinate a response.', 'I nervi trasportano messaggi e aiutano il corpo a percepire informazioni e coordinare una risposta.')}</>);
  }

  if (missionId === 'g5h-sense-organs') {
    const senses: Pair[] = [['Sight', 'Vista'], ['Hearing', 'Udito'], ['Smell', 'Olfatto'], ['Taste', 'Gusto'], ['Touch', 'Tatto']];
    const i = get('sense');
    return frame(text('Sense Organ Explorer', 'Esplora gli organi di senso'), text('Five Ways to Notice the World', 'Cinque modi per conoscere il mondo'), text('Select a sense to match it with its main organ and the kind of information it notices.', 'Seleziona un senso e abbinalo al suo organo e al tipo di informazione che percepisce.'),
      svg(text('Five senses and their organs', 'Cinque sensi e i loro organi'), <>
        <circle cx="180" cy="92" r="48" fill="#ffd9bd" stroke="#fff" strokeWidth="3"/><path d="M160 81q8-8 16 0M184 81q8-8 16 0M166 111q14 12 28 0" fill="none" stroke="#24304f" strokeWidth="3"/>
        {i===0&&<><circle cx="167" cy="82" r="7" fill="#45d8ff"/><circle cx="193" cy="82" r="7" fill="#45d8ff"/></>}
        {i===1&&<><path d="M133 80q-20 15 0 32M227 80q20 15 0 32" fill="none" stroke="#ffd166" strokeWidth="6"/></>}
        {i===2&&<path d="M180 85q-18 25 0 28q18-3 0-28" fill="#38ef7d"/>}
        {i===3&&<path d="M162 125q18-18 36 0q-18 15-36 0" fill="#ff5d8f"/>}
        {i===4&&<path d="M150 141q30 10 60 0" stroke="#ff6a55" strokeWidth="7" strokeLinecap="round"/>}
        <text x="180" y="174" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800">{text(senses[i][0], senses[i][1])}</text>
      </>),
      <>{choices(lang, senses, i, value => set('sense', value))}<Readout label={text('Main organ', 'Organo principale')} value={text(['Eyes', 'Ears', 'Nose', 'Tongue', 'Skin'][i], ['Occhi', 'Orecchie', 'Naso', 'Lingua', 'Pelle'][i])}/><Readout label={text('Notices', 'Percepisce')} value={text(['Light and shapes', 'Sound vibrations', 'Smell particles', 'Flavours', 'Touch, pressure and temperature'][i], ['Luce e forme', 'Vibrazioni sonore', 'Particelle odorose', 'Sapori', 'Tatto, pressione e temperatura'][i])}/></>);
  }

  if (missionId === 'g5h-stem-senses') {
    const test: Pair[] = [['Sound', 'Suono'], ['Touch', 'Tatto'], ['Smell', 'Olfatto']];
    const i = get('sense-test');
    const labels = [
      [text('Listen and record a sound pattern.', 'Ascolta e registra un modello sonoro.'), text('Keep sounds comfortable; never use very loud noises.', 'Mantieni i suoni a volume confortevole; evita rumori molto forti.')],
      [text('Compare safe, familiar textures by touch.', 'Confronta al tatto superfici sicure e familiari.'), text('Use clean objects and stop if anything feels uncomfortable.', 'Usa oggetti puliti e fermati se qualcosa dà fastidio.')],
      [text('Notice a familiar smell from a safe distance.', 'Percepisci un odore familiare a distanza di sicurezza.'), text('Never taste or sniff unknown substances.', 'Non assaggiare né annusare sostanze sconosciute.')]
    ];
    return frame(text('Sensory Investigation Bench', 'Banco di indagine sensoriale'), text('Plan a Safe Senses Investigation', 'Progetta un’indagine sicura sui sensi'), text('Choose one sense, make an observation and record it. Scientists use safe methods and describe what they notice.', 'Scegli un senso, fai un’osservazione e annotala. Gli scienziati lavorano in sicurezza e descrivono ciò che notano.'),
      svg(text('Sensory investigation observation model', 'Modello di osservazione sensoriale'), <>
        <rect x="62" y="61" width="236" height="76" rx="18" fill="rgba(69,216,255,.16)" stroke="#45d8ff" strokeWidth="3"/>
        {i===0 ? <><path d="M92 101q15-24 30 0t30 0t30 0t30 0t30 0" fill="none" stroke="#ffd166" strokeWidth="5" className="chem-anim-dash"/><circle cx="268" cy="101" r="16" fill="#8a7bff"/></> :
          i===1 ? <>{[0,1,2,3].map(n=><rect key={n} x={88+n*48} y={80} width="30" height="42" rx="8" fill={['#ffd166','#ff5d8f','#38ef7d','#8a7bff'][n]} />)}</> :
            <><circle cx="180" cy="100" r="23" fill="#38ef7d" className="chem-anim-pulse"/>{[0,1,2,3].map(n=><circle key={n} cx={130+n*33} cy={76+(n%2)*50} r="4" fill="#ffd166"/>)}</>}
        <text x="180" y="165" textAnchor="middle" fill="#fff" fontSize="13">{text('Observe · record · compare', 'Osserva · registra · confronta')}</text>
      </>),
      <>{choices(lang, test, i, value => set('sense-test', value))}<Readout label={text('Investigation step', 'Fase dell’indagine')} value={labels[i][0]}/><Readout label={text('Safety reminder', 'Promemoria di sicurezza')} value={labels[i][1]}/>{analogy('Change one thing at a time and write down what you actually observe.', 'Cambia una cosa alla volta e annota ciò che osservi davvero.')}</>);
  }

  if (missionId === 'g5h-marvellous-machine') {
    const activities: Pair[] = [['Running', 'Correre'], ['Eating', 'Mangiare'], ['Thinking', 'Pensare']];
    const i = get('machine');
    const systems = [
      [text('Muscles move · lungs breathe faster · heart delivers oxygen', 'I muscoli si muovono · i polmoni respirano più in fretta · il cuore trasporta ossigeno')],
      [text('Digestive organs process food · blood carries nutrients', 'Gli organi digestivi trasformano il cibo · il sangue trasporta nutrienti')],
      [text('Sense organs notice · nerves carry messages · brain coordinates', 'Gli organi di senso percepiscono · i nervi trasmettono messaggi · il cervello coordina')]
    ];
    return frame(text('Body Teamwork Mission', 'Missione collaborazione del corpo'), text('The Body: A Marvellous Machine', 'Il corpo: una macchina meravigliosa'), text('Choose an everyday activity and see how several body systems help together.', 'Scegli un’attività quotidiana e scopri come collaborano diversi apparati.'),
      svg(text('Body systems working together', 'Apparati del corpo che collaborano'), <>
        <circle cx="180" cy="67" r="21" fill="#ffd9bd"/><path d="M180 90V146M180 105L140 128M180 105L220 128M180 146L151 177M180 146L209 177" fill="none" stroke="#dfe7ff" strokeWidth="9" strokeLinecap="round"/>
        {[['#ff5d8f',128,79],['#45d8ff',232,79],['#ffd166',180,153]].map(([color,cx,cy],n)=><circle key={n} cx={Number(cx)} cy={Number(cy)} r="12" fill={String(color)} className="chem-anim-pulse"/>)}
        <text x="180" y="42" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800">{text(activities[i][0], activities[i][1])}</text>
      </>),
      <>{choices(lang, activities, i, value => set('machine', value))}<Readout label={text('Systems at work', 'Apparati al lavoro')} value={systems[i][0]}/>{analogy('Your body is not one machine part: its systems cooperate and depend on one another.', 'Il corpo non è un solo componente: i suoi apparati collaborano e dipendono l’uno dall’altro.')}</>);
  }

  if (missionId === 'g5h-body-concept-map') {
    const systems: Pair[] = [['Circulatory', 'Circolatorio'], ['Respiratory', 'Respiratorio'], ['Digestive', 'Digerente'], ['Nervous', 'Nervoso'], ['Locomotor', 'Locomotore']];
    const i = get('body-map');
    const nodes = [[82,65],[278,65],[82,143],[278,143],[180,48]];
    return frame(text('Body Systems Map', 'Mappa degli apparati'), text('Connect the Body Systems', 'Collega gli apparati del corpo'), text('Choose a system to highlight it. Notice how the systems connect to the whole body.', 'Scegli un apparato per evidenziarlo. Osserva come ogni apparato è collegato al corpo intero.'),
      svg(text('Concept map connecting five body systems', 'Mappa concettuale con cinque apparati'), <>
        <circle cx="180" cy="105" r="30" fill="#ffd166"/><text x="180" y="110" textAnchor="middle" fill="#10143a" fontSize="11" fontWeight="900">{text('BODY', 'CORPO')}</text>
        {nodes.map(([x,y],n)=><g key={n}><path d={`M180 105L${x} ${y}`} stroke={n===i?'#38ef7d':'#8a7bff'} strokeWidth={n===i?5:2}/><circle cx={x} cy={y} r={n===i?22:17} fill={n===i?'#38ef7d':['#ff5d8f','#45d8ff','#ffd166','#8a7bff','#ff6a55'][n]} /><text x={x} y={Number(y)+4} textAnchor="middle" fill="#fff" fontSize="9" fontWeight="800">{['♥','↗','◉','⌁','↔'][n]}</text></g>)}
      </>),
      <>{choices(lang, systems, i, value => set('body-map', value))}<Readout label={text('Selected system', 'Apparato selezionato')} value={text(systems[i][0], systems[i][1])}/><Readout label={text('A connected partner', 'Un apparato collegato')} value={text(['Respiratory', 'Circulatory', 'Circulatory', 'Locomotor', 'Nervous'][i], ['Respiratorio', 'Circolatorio', 'Circolatorio', 'Locomotore', 'Nervoso'][i])}/>{analogy('A concept map shows ideas and systems as connected, not isolated.', 'Una mappa concettuale mostra idee e apparati collegati, non isolati.')}</>);
  }

  if (missionId === 'g5h-human-body-checkpoint') {
    const topics: Pair[] = [['Cells', 'Cellule'], ['Systems', 'Apparati'], ['Senses', 'Sensi'], ['Health', 'Salute']];
    const i = get('checkpoint');
    const questions = [
      [text('What is the basic unit of life?', 'Qual è l’unità fondamentale della vita?'), text('A cell', 'Una cellula')],
      [text('What do body systems do?', 'Che cosa fanno gli apparati?'), text('Organs work together', 'Gli organi collaborano')],
      [text('Which organ helps us hear?', 'Quale organo ci aiuta a sentire?'), text('The ears', 'Le orecchie')],
      [text('What supports healthy body systems?', 'Che cosa sostiene la salute degli apparati?'), text('Balanced habits and asking for help', 'Abitudini equilibrate e chiedere aiuto')]
    ];
    return frame(text('Body Checkpoint Lab', 'Laboratorio verifica del corpo'), text('Checkpoint: Choose a Topic', 'Verifica: scegli un argomento'), text('Pick a card, think of your answer, then reveal a helpful reminder.', 'Scegli una scheda, pensa alla risposta e poi scopri un promemoria utile.'),
      svg(text('Human body checkpoint map', 'Mappa della verifica sul corpo umano'), <>
        <circle cx="180" cy="101" r="45" fill="#ffd166" className="chem-anim-pulse"/><text x="180" y="108" textAnchor="middle" fill="#10143a" fontSize="15" fontWeight="900">{text('READY?', 'PRONTO?')}</text>
        {topics.map((_,n)=>{const a=n*Math.PI/2-Math.PI/2;return <circle key={n} cx={180+Math.cos(a)*92} cy={101+Math.sin(a)*66} r={i===n?17:12} fill={i===n?'#38ef7d':['#45d8ff','#ff5d8f','#8a7bff','#ffd166'][n]}/>})}
      </>),
      <>{choices(lang, topics, i, value => set('checkpoint', value))}<Readout label={text('Think about', 'Rifletti su')} value={questions[i][0]}/><Readout label={text('Helpful reminder', 'Promemoria utile')} value={questions[i][1]}/>{analogy('A checkpoint is a chance to notice what you know and what you want to explore again.', 'Una verifica è un’occasione per riconoscere ciò che sai e ciò che vuoi ripassare.')}</>);
  }

  return null;
};
