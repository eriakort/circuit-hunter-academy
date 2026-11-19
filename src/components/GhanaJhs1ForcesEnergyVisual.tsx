import React, { useState } from 'react';
import type { Language } from '../types';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type Props = { missionId: string; lang: Language };
const tx = (lang: Language, en: string, it: string) => lang === 'it' ? it : en;
const Choice = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button type="button" className={`gh-jhs1-science-choice${active ? ' is-active' : ''}`} aria-pressed={active} onClick={onClick}>{children}</button>
);

const EnergyForms: React.FC<{lang:Language}> = ({lang}) => {
  const [form,setForm]=useState('kinetic');
  const items:Record<string,{name:string,example:string,detail:string}> = {
    kinetic:{name:tx(lang,'Kinetic','Cinetica'),example:tx(lang,'A rolling football','Un pallone che rotola'),detail:tx(lang,'Kinetic energy is the energy of movement. Flowing water in a Ghanaian river and a moving bicycle also have kinetic energy.','L’energia cinetica è l’energia del movimento. Anche l’acqua di un fiume e una bicicletta in movimento possiedono energia cinetica.')},
    potential:{name:tx(lang,'Gravitational potential','Potenziale gravitazionale'),example:tx(lang,'Water held behind Akosombo Dam','Acqua trattenuta dalla diga di Akosombo'),detail:tx(lang,'An object can store energy because of its position. Water high behind a dam has gravitational potential energy.','Un oggetto può immagazzinare energia grazie alla sua posizione. L’acqua in alto dietro una diga possiede energia potenziale gravitazionale.')},
    chemical:{name:tx(lang,'Chemical','Chimica'),example:tx(lang,'Food, charcoal and batteries','Cibo, carbone e batterie'),detail:tx(lang,'Chemical energy is stored in substances. Food gives our bodies energy; charcoal and batteries also store chemical energy.','L’energia chimica è immagazzinata nelle sostanze. Il cibo fornisce energia al corpo; anche carbone e batterie immagazzinano energia chimica.')},
    thermal:{name:tx(lang,'Thermal (heat)','Termica (calore)'),example:tx(lang,'Sun-warmed ground','Terreno riscaldato dal Sole'),detail:tx(lang,'Thermal energy is related to the motion of particles. The Sun warms roofs, soil and water around us.','L’energia termica è legata al movimento delle particelle. Il Sole riscalda tetti, terreno e acqua.')},
    light:{name:tx(lang,'Light','Luminosa'),example:tx(lang,'Sunlight and a lamp','Luce solare e lampada'),detail:tx(lang,'Light energy can travel from the Sun or a lamp and can be converted by solar panels into electrical energy.','L’energia luminosa può provenire dal Sole o da una lampada e può essere trasformata in energia elettrica dai pannelli solari.')},
    sound:{name:tx(lang,'Sound','Sonora'),example:tx(lang,'A talking drum','Un tamburo parlante'),detail:tx(lang,'Sound energy is carried by vibrations through a medium such as air. A talking drum produces sound when its skin vibrates.','L’energia sonora è trasportata dalle vibrazioni attraverso un mezzo come l’aria. Un tamburo produce suono quando la sua membrana vibra.')},
    electrical:{name:tx(lang,'Electrical','Elettrica'),example:tx(lang,'A powered fan','Un ventilatore acceso'),detail:tx(lang,'Electrical energy is transferred by electric currents and powers devices such as lights, phones and fans.','L’energia elettrica viene trasferita dalla corrente e alimenta luci, telefoni e ventilatori.') }
  };
  const current=items[form];
  return <GhanaScienceVisual title={tx(lang,'The Energy Form Explorer','L’esploratore delle forme di energia')} description={tx(lang,'Choose an example to identify its main energy form. One situation can involve several forms at once.','Scegli un esempio per riconoscere la sua principale forma di energia. Una situazione può coinvolgere più forme contemporaneamente.')} lang={lang} caption={tx(lang,'Ghana examples connect energy ideas to rivers, farms, homes and everyday transport.','Gli esempi del Ghana collegano l’energia a fiumi, fattorie, case e trasporti quotidiani.')}>
    <svg viewBox="0 0 300 110" role="img" aria-label={tx(lang,'Energy examples: moving ball, raised water, food, sunlight and drum','Esempi di energia: palla in movimento, acqua in alto, cibo, luce solare e tamburo')}>
      <circle cx="42" cy="45" r="17" fill="#e9b949"/><path d="M67 45h25m-8-7 8 7-8 7" stroke="#3e91c8" strokeWidth="3" fill="none"/>
      <path d="M112 20h48v68h-48z" fill="#78a9a0" opacity=".65"/><path d="M112 52q24-12 48 0v36h-48z" fill="#3e91c8"/><path d="M180 76q22-45 44 0" stroke="#c97955" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <path d="M246 30q15 12 0 24m10-34q25 22 0 44" stroke="#9b7acb" strokeWidth="3" fill="none"/>
      <text x="42" y="84" textAnchor="middle" fontSize="9" fill="currentColor">{tx(lang,'Sun','Sole')}</text><text x="136" y="102" textAnchor="middle" fontSize="9" fill="currentColor">{tx(lang,'Stored water','Acqua')}</text><text x="202" y="102" textAnchor="middle" fontSize="9" fill="currentColor">{tx(lang,'Food','Cibo')}</text>
    </svg>
    <div className="gh-jhs1-science-interaction">
      <div className="gh-jhs1-science-choices">{Object.entries(items).map(([key,item])=><Choice key={key} active={form===key} onClick={()=>setForm(key)}>{item.name}</Choice>)}</div>
      <div className="gh-jhs1-science-readout" aria-live="polite"><strong>{current.name}: {current.example}</strong><p>{current.detail}</p></div>
    </div>
  </GhanaScienceVisual>;
};

const Electricity: React.FC<{lang:Language}> = ({lang}) => {
  const [source,setSource]=useState('hydro');
  const sources:Record<string,{name:string,steps:string[],detail:string,tradeoff:string}> = {
    hydro:{name:tx(lang,'Hydroelectricity','Energia idroelettrica'),steps:[tx(lang,'Stored water','Acqua immagazzinata'),tx(lang,'Flowing water','Acqua in movimento'),tx(lang,'Turbine','Turbina'),tx(lang,'Generator','Generatore')],detail:tx(lang,'Water released from a reservoir turns a turbine. The turbine drives a generator that produces electricity. Akosombo and Kpong are Ghanaian examples.','L’acqua rilasciata da un bacino aziona una turbina, che muove un generatore. Akosombo e Kpong sono esempi in Ghana.'),tradeoff:tx(lang,'Dams provide large amounts of power, but can change river habitats and affect communities.','Le dighe producono molta energia, ma possono modificare gli habitat fluviali e influenzare le comunità.')},
    thermal:{name:tx(lang,'Thermal power','Energia termica'),steps:[tx(lang,'Fuel','Combustibile'),tx(lang,'Heat or engine','Calore o motore'),tx(lang,'Turbine / engine','Turbina / motore'),tx(lang,'Generator','Generatore')],detail:tx(lang,'Fuel such as natural gas is used to produce heat or drive an engine connected to a generator.','Un combustibile come il gas naturale produce calore o aziona un motore collegato a un generatore.'),tradeoff:tx(lang,'Thermal stations can provide dependable power, but burning fuel releases greenhouse gases and air pollutants.','Le centrali termiche possono fornire energia in modo affidabile, ma bruciare combustibili rilascia gas serra e inquinanti.')},
    solar:{name:tx(lang,'Solar photovoltaic','Solare fotovoltaico'),steps:[tx(lang,'Sunlight','Luce solare'),tx(lang,'Solar cells','Celle solari'),tx(lang,'Electric current','Corrente elettrica'),tx(lang,'Useful devices','Dispositivi')],detail:tx(lang,'Solar cells convert light directly into electrical energy. Panels can supply homes, schools and clinics, especially where sunlight is available.','Le celle solari trasformano direttamente la luce in energia elettrica. I pannelli possono alimentare case, scuole e cliniche.'),tradeoff:tx(lang,'Solar power produces no exhaust while operating, but output changes with sunlight and storage may be needed.','L’energia solare non produce gas di scarico durante il funzionamento, ma la produzione varia con la luce e può servire un sistema di accumulo.')}
  };
  const item=sources[source];
  return <GhanaScienceVisual title={tx(lang,'The Electricity Generation Guardian','Il guardiano della produzione elettrica')} description={tx(lang,'Select a generation method and trace how electricity is produced.','Seleziona un metodo di produzione e segui come viene generata l’elettricità.')} lang={lang} caption={tx(lang,'Compare reliability, cost, available resources and environmental effects before choosing an energy source.','Confronta affidabilità, costi, risorse disponibili ed effetti ambientali prima di scegliere una fonte.')}>
    <svg viewBox="0 0 300 90" role="img" aria-label={tx(lang,'Four steps from an energy source to useful electricity','Quattro passaggi dalla fonte energetica all’elettricità')}>
      {item.steps.map((step,i)=><g key={step}><rect x={3+i*75} y="20" width="67" height="42" rx="8" fill={i===0?'#e9b949':'#78a9a0'} stroke="#326b65" strokeWidth="1.5"/><text x={36+i*75} y="44" fontSize="9" textAnchor="middle" fill="#173b39">{step.length>12?step.slice(0,11)+'…':step}</text>{i<3&&<path d={`M70 ${41}h8m-3-4 4 4-4 4`} stroke="currentColor" fill="none" strokeWidth="1.5"/>}</g>)}
    </svg>
    <div className="gh-jhs1-science-interaction">
      <div className="gh-jhs1-science-choices">{Object.entries(sources).map(([key,item])=><Choice key={key} active={source===key} onClick={()=>setSource(key)}>{item.name}</Choice>)}</div>
      <div className="gh-jhs1-science-readout" aria-live="polite"><strong>{item.name}</strong><p>{item.detail}</p><p>{item.tradeoff}</p></div>
    </div>
  </GhanaScienceVisual>;
};

const Conversion: React.FC<{lang:Language}> = ({lang}) => {
  const [device,setDevice]=useState('torch');
  const devices:Record<string,{name:string,stages:string[],detail:string}> = {
    torch:{name:tx(lang,'Torch','Torcia'),stages:[tx(lang,'Chemical','Chimica'),tx(lang,'Electrical transfer','Trasferimento elettrico'),tx(lang,'Light + heat','Luce + calore')],detail:tx(lang,'Energy stored chemically in the battery is transferred through the circuit and becomes light and thermal energy in the LED.','L’energia chimica della batteria viene trasferita nel circuito e diventa energia luminosa e termica nel LED.')},
    fan:{name:tx(lang,'Electric fan','Ventilatore elettrico'),stages:[tx(lang,'Electrical','Elettrica'),tx(lang,'Motor','Motore'),tx(lang,'Movement + sound + heat','Movimento + suono + calore')],detail:tx(lang,'The motor converts electrical energy mainly into kinetic energy in the spinning blades. Some energy is also transferred as sound and heat.','Il motore trasforma l’energia elettrica soprattutto in energia cinetica delle pale. Parte dell’energia viene trasferita anche come suono e calore.')},
    stove:{name:tx(lang,'Charcoal stove','Fornello a carbone'),stages:[tx(lang,'Chemical','Chimica'),tx(lang,'Burning fuel','Combustione'),tx(lang,'Heat + light','Calore + luce')],detail:tx(lang,'Chemical energy in charcoal is transferred to the surroundings as thermal energy and light during burning. Use charcoal stoves only with safe ventilation.','L’energia chimica del carbone viene trasferita all’ambiente come calore e luce durante la combustione. Usa i fornelli a carbone solo con ventilazione sicura.')},
    ball:{name:tx(lang,'Falling ball','Palla che cade'),stages:[tx(lang,'Gravitational potential','Potenziale gravitazionale'),tx(lang,'Motion','Movimento'),tx(lang,'Kinetic','Cinetica')],detail:tx(lang,'As a ball falls, gravitational potential energy is transferred mainly into kinetic energy. Air resistance also transfers some energy to the surroundings.','Quando una palla cade, l’energia potenziale gravitazionale si trasforma soprattutto in energia cinetica. La resistenza dell’aria trasferisce anche parte dell’energia all’ambiente.')}
  };
  const item=devices[device];
  return <GhanaScienceVisual title={tx(lang,'The Energy Transformation Alchemist','L’alchimista delle trasformazioni energetiche')} description={tx(lang,'Trace energy transfers in familiar devices. Energy changes form; it does not vanish.','Segui i trasferimenti di energia negli oggetti familiari. L’energia cambia forma, non scompare.')} lang={lang} caption={tx(lang,'Conservation of energy: in a closed system, total energy is not created or destroyed; it is transferred or transformed.','Conservazione dell’energia: in un sistema chiuso, l’energia totale non viene creata né distrutta, ma trasferita o trasformata.')}>
    <svg viewBox="0 0 300 88" role="img" aria-label={tx(lang,'Energy conversion sequence','Sequenza di trasformazione energetica')}>
      {item.stages.map((stage,i)=><g key={stage}><rect x={4+i*100} y="20" width="88" height="44" rx="9" fill={i===1?'#e9b949':'#78a9a0'} stroke="#326b65" strokeWidth="1.5"/><text x={48+i*100} y="45" fontSize="10" textAnchor="middle" fill="#173b39">{stage.length>15?stage.slice(0,14)+'…':stage}</text>{i<2&&<path d={`M92 ${42}h8m-3-4 4 4-4 4`} stroke="currentColor" fill="none" strokeWidth="1.5"/>}</g>)}
    </svg>
    <div className="gh-jhs1-science-interaction">
      <div className="gh-jhs1-science-choices">{Object.entries(devices).map(([key,item])=><Choice key={key} active={device===key} onClick={()=>setDevice(key)}>{item.name}</Choice>)}</div>
      <div className="gh-jhs1-science-readout" aria-live="polite"><strong>{item.name}: {item.stages.join(' → ')}</strong><p>{item.detail}</p></div>
    </div>
  </GhanaScienceVisual>;
};

const Forces: React.FC<{lang:Language}> = ({lang}) => {
  const [scenario,setScenario]=useState('football');
  const cases:Record<string,{name:string,forces:string,detail:string}> = {
    football:{name:tx(lang,'Kicking a football','Calciare un pallone'),forces:tx(lang,'Foot pushes the ball; friction and air resistance oppose motion.','Il piede spinge il pallone; attrito e resistenza dell’aria si oppongono al movimento.'),detail:tx(lang,'An unbalanced force changes the ball’s motion. A stronger or differently directed kick changes its speed or direction.','Una forza non equilibrata cambia il movimento del pallone. Un calcio più forte o in un’altra direzione ne cambia velocità o direzione.')},
    book:{name:tx(lang,'Book resting on a desk','Libro fermo su un banco'),forces:tx(lang,'Gravity pulls down; the desk pushes up.','La gravità tira verso il basso; il banco spinge verso l’alto.'),detail:tx(lang,'These forces are balanced, so the book remains at rest. A stationary object can still have forces acting on it.','Queste forze sono equilibrate, quindi il libro resta fermo. Anche un oggetto fermo può essere sottoposto a forze.')},
    bicycle:{name:tx(lang,'Bicycle slowing down','Bicicletta che rallenta'),forces:tx(lang,'Brakes create friction; air resistance and rolling resistance oppose motion.','I freni producono attrito; la resistenza dell’aria e quella al rotolamento si oppongono al movimento.'),detail:tx(lang,'The backward resultant force slows the bicycle. Friction is useful for braking and for walking without slipping.','La forza risultante all’indietro rallenta la bicicletta. L’attrito è utile per frenare e camminare senza scivolare.')},
    lever:{name:tx(lang,'Wheelbarrow lifting a load','Carriola che solleva un carico'),forces:tx(lang,'The wheel is the fulcrum; the load lies between the wheel and the effort at the handles.','La ruota è il fulcro; il carico si trova tra la ruota e la forza applicata ai manici.'),detail:tx(lang,'A wheelbarrow is a second-class lever. It helps move a heavy load with less effort over a suitable distance.','La carriola è una leva di secondo genere. Aiuta a spostare un carico pesante con meno sforzo.') }
  };
  const item=cases[scenario];
  return <GhanaScienceVisual title={tx(lang,'The Force and Motion Pathfinder','L’esploratore di forze e movimento')} description={tx(lang,'Choose an everyday situation to inspect the forces and predict the motion.','Scegli una situazione quotidiana per esaminare le forze e prevedere il movimento.')} lang={lang} caption={tx(lang,'Forces are pushes or pulls. Their size and direction determine whether motion changes.','Le forze sono spinte o trazioni. Intensità e direzione determinano se il movimento cambia.')}>
    <svg viewBox="0 0 300 100" role="img" aria-label={tx(lang,'Force arrows acting on an object','Frecce delle forze che agiscono su un oggetto')}>
      <rect x="117" y="34" width="66" height="36" rx="8" fill="#78a9a0" stroke="#326b65" strokeWidth="2"/><path d="M150 30V7m-6 7 6-7 6 7M187 52h42m-8-6 8 6-8 6M113 52H71m8-6-8 6 8 6" stroke="#c97955" strokeWidth="3" fill="none" strokeLinecap="round"/><text x="150" y="57" fontSize="10" textAnchor="middle" fill="#173b39">{tx(lang,'Object','Oggetto')}</text><text x="150" y="91" fontSize="9" textAnchor="middle" fill="currentColor">{tx(lang,'Direction and size matter','Direzione e intensità contano')}</text>
    </svg>
    <div className="gh-jhs1-science-interaction">
      <div className="gh-jhs1-science-choices">{Object.entries(cases).map(([key,item])=><Choice key={key} active={scenario===key} onClick={()=>setScenario(key)}>{item.name}</Choice>)}</div>
      <div className="gh-jhs1-science-readout" aria-live="polite"><strong>{item.name}</strong><p>{item.forces}</p><p>{item.detail}</p></div>
    </div>
  </GhanaScienceVisual>;
};


const AgriculturalTools: React.FC<{lang:Language}> = ({lang}) => {
  const [tool,setTool]=useState('hoe');
  const [task,setTask]=useState('soil');
  const [safety,setSafety]=useState<string[]>([]);
  const tools:Record<string,{name:string,task:string,machine:string,detail:string,safe:string}> = {
    hoe:{name:tx(lang,'Hoe','Zappa'),task:tx(lang,'Loosening soil and weeding','Allentare il terreno e diserbare'),machine:tx(lang,'Wedge','Cuneo'),detail:tx(lang,'The broad blade acts like a wedge. Its sharp edge concentrates force to cut into soil and weeds.','La lama larga funziona come un cuneo. Il bordo concentra la forza per penetrare nel terreno e tagliare le erbacce.'),safe:tx(lang,'Keep the blade pointed away from your body and other workers.','Tieni la lama rivolta lontano dal corpo e dagli altri lavoratori.')},
    cutlass:{name:tx(lang,'Cutlass','Machete'),task:tx(lang,'Clearing vegetation','Liberare la vegetazione'),machine:tx(lang,'Wedge','Cuneo'),detail:tx(lang,'The blade is a wedge that helps cut vegetation. It is a sharp tool and requires careful handling and enough clear space.','La lama è un cuneo che aiuta a tagliare la vegetazione. È uno strumento affilato e richiede attenzione e spazio libero.'),safe:tx(lang,'Carry it with the blade pointed down and away; never swing near another person.','Trasportalo con la lama rivolta verso il basso e lontano dagli altri; non usarlo mai vicino a un’altra persona.')},
    rake:{name:tx(lang,'Rake','Rastrello'),task:tx(lang,'Gathering leaves and plant material','Raccogliere foglie e materiale vegetale'),machine:tx(lang,'Lever-like handle','Manico simile a una leva'),detail:tx(lang,'The long handle helps apply force while the teeth gather loose leaves, weeds and plant material.','Il lungo manico aiuta ad applicare la forza mentre i denti raccolgono foglie, erbacce e materiale vegetale.'),safe:tx(lang,'Point the teeth down when carrying it and keep the working area clear.','Tieni i denti rivolti verso il basso durante il trasporto e mantieni libera l’area di lavoro.')},
    wheelbarrow:{name:tx(lang,'Wheelbarrow','Carriola'),task:tx(lang,'Moving harvested produce or soil','Trasportare prodotti raccolti o terreno'),machine:tx(lang,'Wheel and axle + second-class lever','Ruota e asse + leva di secondo genere'),detail:tx(lang,'The wheel and axle help the load roll. The wheel is the fulcrum, the load sits between the wheel and the effort applied at the handles.','La ruota e l’asse permettono al carico di rotolare. La ruota è il fulcro e il carico si trova tra la ruota e la forza applicata ai manici.'),safe:tx(lang,'Do not overload it; keep both hands on the handles and use a clear path.','Non sovraccaricarla; tieni entrambe le mani sui manici e usa un percorso libero.')},
    watering:{name:tx(lang,'Watering can','Annaffiatoio'),task:tx(lang,'Watering seedlings','Annaffiare le piantine'),machine:tx(lang,'Gravity and a spout','Gravità e beccuccio'),detail:tx(lang,'Water flows from the raised container through the spout under gravity. A gentle flow helps water seedlings without washing soil away.','L’acqua scorre dal contenitore sollevato attraverso il beccuccio per effetto della gravità. Un flusso delicato aiuta ad annaffiare le piantine senza asportare il terreno.'),safe:tx(lang,'Lift a manageable amount of water and avoid slippery spills.','Solleva una quantità d’acqua gestibile ed evita di bagnare il pavimento rendendolo scivoloso.')},
    spade:{name:tx(lang,'Spade','Vanga'),task:tx(lang,'Digging and turning soil','Scavare e rivoltare il terreno'),machine:tx(lang,'Wedge and lever action','Azione di cuneo e leva'),detail:tx(lang,'The blade cuts into soil like a wedge. Pressing the handle can use leverage to lift and turn the soil.','La lama penetra nel terreno come un cuneo. Premere il manico permette di sfruttare la leva per sollevare e rivoltare il terreno.'),safe:tx(lang,'Use a stable stance and keep feet and hands clear of the blade.','Mantieni una posizione stabile e tieni piedi e mani lontani dalla lama.')}
  };
  const current=tools[tool];
  const tasks:Record<string,string>={soil:tx(lang,'Loosen soil','Allentare il terreno'),weed:tx(lang,'Clear vegetation','Liberare la vegetazione'),leaves:tx(lang,'Gather leaves','Raccogliere foglie'),carry:tx(lang,'Move a harvest load','Trasportare il raccolto'),water:tx(lang,'Water seedlings','Annaffiare le piantine'),dig:tx(lang,'Dig and turn soil','Scavare e rivoltare il terreno')};
  const recommended:Record<string,string>={soil:'hoe',weed:'cutlass',leaves:'rake',carry:'wheelbarrow',water:'watering',dig:'spade'};
  const checks=[['blade',tx(lang,'Carry sharp blades pointed down and away','Trasporta le lame affilate rivolte verso il basso e lontano')],['space',tx(lang,'Keep a safe distance from other workers','Mantieni una distanza di sicurezza dagli altri lavoratori')],['condition',tx(lang,'Check tools and handles before use','Controlla strumenti e manici prima dell’uso')],['storage',tx(lang,'Clean and store tools securely after use','Pulisci e riponi gli strumenti in sicurezza dopo l’uso')]];
  const toggle=(key:string)=>setSafety(old=>old.includes(key)?old.filter(x=>x!==key):[...old,key]);
  return <GhanaScienceVisual title={tx(lang,'The Farm Tool Engineer','L’ingegnere degli attrezzi agricoli')} description={tx(lang,'Match farm tools to real tasks, discover the simple machines they use and practise safe handling.','Abbina gli attrezzi agricoli ai compiti reali, scopri le macchine semplici che utilizzano e impara a maneggiarli in sicurezza.')} lang={lang} caption={tx(lang,'Examples reflect common farm work in Ghana: preparing soil, weeding, gathering plant material, watering and moving harvested crops.','Gli esempi riflettono attività agricole comuni in Ghana: preparare il terreno, diserbare, raccogliere materiale vegetale, annaffiare e trasportare i raccolti.')}>
    <svg viewBox="0 0 320 132" role="img" aria-label={tx(lang,'Illustration of a hoe, cutlass, rake, wheelbarrow and watering can','Illustrazione di zappa, machete, rastrello, carriola e annaffiatoio')}>
      <g stroke="#326b65" strokeWidth="5" strokeLinecap="round" fill="none"><path d="M36 18L67 104M28 43l22 8"/><path d="M105 17l-12 83m-10-70 20-4"/><path d="M160 16l-4 82m-27-60h54m-45 0-11 18m29-18 11 18"/><path d="M212 85h66l-10-42h-40l-16 42m8-1-7 17m66-17 8 17m-53-58V17h28v27"/><path d="M293 41v50h17V41z"/></g>
      <circle cx="229" cy="104" r="10" fill="#e9b949" stroke="#326b65" strokeWidth="2"/><circle cx="276" cy="104" r="10" fill="#e9b949" stroke="#326b65" strokeWidth="2"/>
      <text x="48" y="126" fontSize="9" textAnchor="middle" fill="currentColor">{tx(lang,'Hoe','Zappa')}</text><text x="96" y="126" fontSize="9" textAnchor="middle" fill="currentColor">{tx(lang,'Cutlass','Machete')}</text><text x="157" y="126" fontSize="9" textAnchor="middle" fill="currentColor">{tx(lang,'Rake','Rastrello')}</text><text x="248" y="126" fontSize="9" textAnchor="middle" fill="currentColor">{tx(lang,'Wheelbarrow','Carriola')}</text>
    </svg>
    <div className="gh-jhs1-science-interaction">
      <div className="gh-jhs1-science-choices">{Object.entries(tasks).map(([key,label])=><Choice key={key} active={task===key} onClick={()=>{setTask(key);setTool(recommended[key]);}}>{label}</Choice>)}</div>
      <div className="gh-jhs1-science-readout" aria-live="polite"><strong>{tx(lang,'Recommended tool','Attrezzo consigliato')}: {current.name}</strong><p>{tx(lang,'Task','Compito')}: {current.task}</p><p>{tx(lang,'Simple machine principle','Principio della macchina semplice')}: {current.machine}</p><p>{current.detail}</p></div>
      <h4>{tx(lang,'Explore another tool','Esplora un altro attrezzo')}</h4>
      <div className="gh-jhs1-science-choices">{Object.entries(tools).map(([key,item])=><Choice key={key} active={tool===key} onClick={()=>setTool(key)}>{item.name}</Choice>)}</div>
      <div className="gh-jhs1-science-readout" aria-live="polite"><strong>{current.name}</strong><p>{current.detail}</p><p><b>{tx(lang,'Safe handling','Uso sicuro')}:</b> {current.safe}</p></div>
      <h4>{tx(lang,'Farm safety check','Controllo di sicurezza in fattoria')}</h4>
      <div className="gh-jhs1-science-choices">{checks.map(([key,label])=><label key={key} className="gh-jhs1-science-choice"><input type="checkbox" checked={safety.includes(key)} onChange={()=>toggle(key)}/>{label}</label>)}</div>
      <p className="gh-jhs1-science-readout" aria-live="polite">{tx(lang,'Safety habits checked','Abitudini di sicurezza verificate')}: {safety.length}/4</p>
    </div>
  </GhanaScienceVisual>;
};

export const GhanaJhs1ForcesEnergyVisual: React.FC<Props> = ({missionId,lang}) => {
  if (missionId === 'gh-jhs1-science-energy-forms') return <EnergyForms lang={lang}/>;
  if (missionId === 'gh-jhs1-science-electricity-generation') return <Electricity lang={lang}/>;
  if (missionId === 'gh-jhs1-science-energy-conversion') return <Conversion lang={lang}/>;
  if (missionId === 'gh-jhs1-science-force-motion') return <Forces lang={lang}/>;
  if (missionId === 'gh-jhs1-science-agricultural-tools') return <AgriculturalTools lang={lang}/>;
  return null;
};
