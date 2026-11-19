import React, { useState } from 'react';
import type { Language } from '../types';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type Props = { missionId: string; lang: Language };

const copy = (lang: Language, en: string, it: string) => lang === 'it' ? it : en;
const Control = ({ active, children, onClick }: { active?: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button type="button" className={`gh-jhs1-science-choice${active ? ' is-active' : ''}`} aria-pressed={!!active} onClick={onClick}>{children}</button>
);

const MaterialsStates: React.FC<{ lang: Language }> = ({ lang }) => {
  const [temperature, setTemperature] = useState(20);
  const phase = temperature < 0 ? 'solid' : temperature < 100 ? 'liquid' : 'gas';
  const phaseLabel = {
    solid: copy(lang, 'Solid: particles vibrate in fixed positions.', 'Solido: le particelle vibrano in posizioni fisse.'),
    liquid: copy(lang, 'Liquid: close particles slide past one another.', 'Liquido: particelle vicine scorrono le une accanto alle altre.'),
    gas: copy(lang, 'Gas: particles spread out and move freely.', 'Gas: le particelle sono distanti e si muovono liberamente.')
  }[phase];
  const points = phase === 'solid'
    ? Array.from({length: 25}, (_,i)=>({x:30+(i%5)*22,y:24+Math.floor(i/5)*22}))
    : phase === 'liquid'
      ? Array.from({length: 25}, (_,i)=>({x:25+(i%5)*24+(Math.floor(i/5)%2)*4,y:45+Math.floor(i/5)*18}))
      : Array.from({length: 25}, (_,i)=>({x:15+((i*37)%210),y:12+((i*53)%125)}));
  return <GhanaScienceVisual title={copy(lang,'The Materials Explorer','L’esploratore dei materiali')} description={copy(lang,'Warm or cool the model and observe how particle arrangement changes. This is a model, not a scale drawing.','Riscalda o raffredda il modello e osserva come cambia la disposizione delle particelle. È un modello, non un disegno in scala.')} lang={lang} caption={copy(lang,'Examples: ice in a cooler, water carried in a container, and water vapour in warm air.','Esempi: ghiaccio in una borsa termica, acqua in un recipiente e vapore acqueo nell’aria calda.')}>
    <svg viewBox="0 0 260 175" role="img" aria-label={copy(lang,'Particle model of a solid, liquid or gas','Modello particellare di solido, liquido o gas')}>
      <rect x="12" y="10" width="236" height="145" rx="12" fill="none" stroke="currentColor" opacity=".35"/>
      {points.map((p,i)=><circle key={i} cx={p.x} cy={p.y} r="6.5" fill={phase==='solid'?'#d5a43b':phase==='liquid'?'#2a9d8f':'#e76f51'} className="gh-science-motion" style={{animationDelay:`${i*35}ms`}} />)}
      <text x="130" y="169" textAnchor="middle" fontSize="11" fill="currentColor">{copy(lang,'Particle arrangement','Disposizione delle particelle')}</text>
    </svg>
    <div className="gh-jhs1-science-interaction">
      <label htmlFor="gh-matter-temp">{copy(lang,'Temperature model','Modello della temperatura')}: <strong>{temperature}°C</strong></label>
      <input id="gh-matter-temp" type="range" min="-20" max="120" step="10" value={temperature} onChange={e=>setTemperature(Number(e.target.value))}/>
      <div className="gh-jhs1-science-readout" aria-live="polite"><strong>{copy(lang,phase==='solid'?'Solid':phase==='liquid'?'Liquid':'Gas',phase==='solid'?'Solido':phase==='liquid'?'Liquido':'Gas')}</strong> — {phaseLabel}</div>
      <div className="gh-jhs1-science-choices">
        <Control active={phase==='solid'} onClick={()=>setTemperature(-10)}>{copy(lang,'Solid','Solido')}</Control>
        <Control active={phase==='liquid'} onClick={()=>setTemperature(20)}>{copy(lang,'Liquid','Liquido')}</Control>
        <Control active={phase==='gas'} onClick={()=>setTemperature(110)}>{copy(lang,'Gas','Gas')}</Control>
      </div>
    </div>
  </GhanaScienceVisual>;
};

const LifeGivingLiquids: React.FC<{ lang: Language }> = ({ lang }) => {
  const [selected,setSelected]=useState('water');
  const details: Record<string,{title:string,body:string}> = {
    water:{title:copy(lang,'Clean water','Acqua pulita'),body:copy(lang,'People drink it, prepare food and wash. Communities may collect water from a protected borehole, well or treated supply. Keep water sources free from waste.','Le persone la bevono, preparano il cibo e si lavano. Le comunità possono raccoglierla da un pozzo protetto o da una rete trattata. Proteggi le fonti dall’inquinamento.')},
    blood:{title:copy(lang,'Blood','Sangue'),body:copy(lang,'Blood travels through blood vessels. It carries oxygen and nutrients to body cells and helps transport some wastes away.','Il sangue scorre nei vasi sanguigni. Trasporta ossigeno e nutrienti alle cellule e aiuta ad allontanare alcuni prodotti di scarto.')},
    sap:{title:copy(lang,'Plant sap','Linfa'),body:copy(lang,'Water and dissolved minerals move from roots towards leaves. Sugars made in leaves are transported to other parts of the plant.','L’acqua e i minerali disciolti risalgono dalle radici verso le foglie. Gli zuccheri prodotti nelle foglie vengono trasportati alle altre parti della pianta.')},
    household:{title:copy(lang,'Household liquids','Liquidi domestici'),body:copy(lang,'Cooking oil helps prepare food and liquid soap helps remove dirt. Medicines and fuels must only be used as directed by responsible adults. Never taste an unknown liquid.','L’olio serve per preparare il cibo e il sapone liquido aiuta a rimuovere lo sporco. Medicinali e carburanti vanno usati solo secondo le indicazioni degli adulti. Non assaggiare mai un liquido sconosciuto.')}
  };
  return <GhanaScienceVisual title={copy(lang,'The Life-Giving Liquids Guardian','Il custode dei liquidi vitali')} description={copy(lang,'Choose a liquid to follow its role in people, plants and everyday Ghanaian life.','Scegli un liquido e scopri il suo ruolo nelle persone, nelle piante e nella vita quotidiana in Ghana.')} lang={lang} caption={copy(lang,'A community borehole, a healthy body and a growing maize plant are connected by the importance of safe, useful liquids.','Un pozzo comunitario, un corpo sano e una pianta di mais in crescita mostrano l’importanza dei liquidi sicuri e utili.')}>
    <svg viewBox="0 0 260 140" role="img" aria-label={copy(lang,'Water source, human circulation and plant transport illustration','Illustrazione di fonte d’acqua, circolazione umana e trasporto nella pianta')}>
      <g transform="translate(8 12)"><path d="M8 34h62v8H8zM18 42v52M60 42v52M12 94h54" fill="none" stroke="#b7793d" strokeWidth="5"/><path d="M28 60h22v26H28z" fill="#48a9d6"/><path d="M39 49v10" stroke="#48a9d6" strokeWidth="4"/><text x="39" y="111" textAnchor="middle" fontSize="10" fill="currentColor">{copy(lang,'Water','Acqua')}</text></g>
      <g transform="translate(98 12)"><path d="M32 20c-22 0-28 27-12 42l-5 28h34l-5-28c16-15 10-42-12-42z" fill="#e8a0a0" stroke="#a94343" strokeWidth="2"/><path d="M22 40q10-12 20 0t0 20q-10 12-20 0t0-20" fill="none" stroke="#a94343" strokeWidth="3" className="gh-science-motion"/><text x="32" y="111" textAnchor="middle" fontSize="10" fill="currentColor">{copy(lang,'Blood','Sangue')}</text></g>
      <g transform="translate(188 10)"><path d="M31 94V26M31 54Q2 50 7 29q24-3 24 25M31 44Q58 40 56 18q-23-2-25 26" fill="none" stroke="#39834a" strokeWidth="5" strokeLinecap="round"/><path d="M31 90l-14 14m14-14 14 14" stroke="#b7793d" strokeWidth="3"/><circle cx="31" cy="68" r="4" fill="#48a9d6" className="gh-science-motion"/><text x="31" y="111" textAnchor="middle" fontSize="10" fill="currentColor">{copy(lang,'Plant sap','Linfa')}</text></g>
    </svg>
    <div className="gh-jhs1-science-interaction">
      <div className="gh-jhs1-science-choices">
        {Object.entries(details).map(([key,value])=><Control key={key} active={selected===key} onClick={()=>setSelected(key)}>{value.title}</Control>)}
      </div>
      <div className="gh-jhs1-science-readout" aria-live="polite"><strong>{details[selected].title}</strong><p>{details[selected].body}</p></div>
    </div>
  </GhanaScienceVisual>;
};

const EverydayMaterials: React.FC<{ lang: Language }> = ({ lang }) => {
  const [material,setMaterial]=useState('metal');
  const facts:Record<string,{name:string,property:string,use:string}> = {
    metal:{name:copy(lang,'Metal','Metallo'),property:copy(lang,'Strong and conducts heat','Resistente e conduce il calore'),use:copy(lang,'A metal saucepan transfers heat to food. Its handle should be made or covered with a safer heat-insulating material.','Una pentola di metallo trasferisce calore al cibo. Il manico dovrebbe essere di un materiale isolante.')},
    wood:{name:copy(lang,'Wood','Legno'),property:copy(lang,'Can be strong and shaped','Può essere resistente e modellato'),use:copy(lang,'Wood is used for desks, stools and furniture. Keep it dry and away from open flames.','Il legno si usa per banchi, sgabelli e mobili. Tienilo asciutto e lontano dalle fiamme.')},
    plastic:{name:copy(lang,'Plastic','Plastica'),property:copy(lang,'Often light and water-resistant','Spesso leggero e resistente all’acqua'),use:copy(lang,'A reusable water container can be light. Reuse it safely and dispose of damaged plastic responsibly.','Un contenitore riutilizzabile può essere leggero. Riutilizzalo in sicurezza e smaltisci correttamente la plastica danneggiata.')},
    glass:{name:copy(lang,'Glass','Vetro'),property:copy(lang,'Transparent but can break','Trasparente ma fragile'),use:copy(lang,'Glass lets light pass through, so it is useful for windows. Broken glass can cause injury and must be handled by an adult.','Il vetro lascia passare la luce ed è utile per le finestre. Il vetro rotto può ferire e deve essere gestito da un adulto.')},
    rubber:{name:copy(lang,'Rubber','Gomma'),property:copy(lang,'Flexible and can grip surfaces','Flessibile e aderente'),use:copy(lang,'Rubber is useful for shoe soles, seals and some grips. Its flexibility helps it bend without breaking easily.','La gomma è utile per suole, guarnizioni e impugnature. La sua flessibilità permette di piegarla senza romperla facilmente.')}
  };
  return <GhanaScienceVisual title={copy(lang,'The Everyday Materials Engineer','L’ingegnere dei materiali quotidiani')} description={copy(lang,'Choose a material to compare its property with a familiar object and its purpose.','Scegli un materiale per confrontarne le proprietà con un oggetto familiare e il suo utilizzo.')} lang={lang} caption={copy(lang,'Think of a cooking pot, school desk, water container, window and sandals found in many Ghanaian homes and schools.','Pensa a una pentola, un banco scolastico, un contenitore d’acqua, una finestra e dei sandali presenti in molte case e scuole del Ghana.')}>
    <svg viewBox="0 0 260 125" role="img" aria-label={copy(lang,'Examples of metal, wood, plastic, glass and rubber materials','Esempi di metallo, legno, plastica, vetro e gomma')}>
      <g transform="translate(8 18)"><path d="M5 18h38l-4 35H9zM43 24h15" fill="#9aa6b2" stroke="#59636e" strokeWidth="3"/><text x="30" y="72" textAnchor="middle" fontSize="10" fill="currentColor">{copy(lang,'Pot','Pentola')}</text></g>
      <g transform="translate(68 18)"><path d="M4 16h48v8H4zM10 24v28m36-28v28" stroke="#9a633d" strokeWidth="6"/><text x="28" y="72" textAnchor="middle" fontSize="10" fill="currentColor">{copy(lang,'Desk','Banco')}</text></g>
      <g transform="translate(132 18)"><path d="M16 10h23v8H16zM12 18h31v38H12z" fill="#55a8d5" stroke="#28759a" strokeWidth="2"/><text x="28" y="72" textAnchor="middle" fontSize="10" fill="currentColor">{copy(lang,'Bottle','Bottiglia')}</text></g>
      <g transform="translate(194 18)"><rect x="4" y="12" width="48" height="42" fill="#9bd7e5" fillOpacity=".45" stroke="#55a8d5" strokeWidth="3"/><text x="28" y="72" textAnchor="middle" fontSize="10" fill="currentColor">{copy(lang,'Window','Finestra')}</text></g>
    </svg>
    <div className="gh-jhs1-science-interaction">
      <div className="gh-jhs1-science-choices">
        {Object.entries(facts).map(([key,value])=><Control key={key} active={material===key} onClick={()=>setMaterial(key)}>{value.name}</Control>)}
      </div>
      <div className="gh-jhs1-science-readout" aria-live="polite"><strong>{facts[material].name} · {facts[material].property}</strong><p>{facts[material].use}</p></div>
    </div>
  </GhanaScienceVisual>;
};

const LivingCells: React.FC<{ lang: Language }> = ({ lang }) => {
  const [cell,setCell]=useState<'plant'|'animal'>('plant');
  const [part,setPart]=useState('nucleus');
  const parts:Record<string,{name:string,job:string}> = {
    nucleus:{name:copy(lang,'Nucleus','Nucleo'),job:copy(lang,'Contains genetic information and helps coordinate cell activities.','Contiene le informazioni genetiche e aiuta a coordinare le attività cellulari.')},
    membrane:{name:copy(lang,'Cell membrane','Membrana cellulare'),job:copy(lang,'Controls what enters and leaves the cell.','Controlla ciò che entra ed esce dalla cellula.')},
    cytoplasm:{name:copy(lang,'Cytoplasm','Citoplasma'),job:copy(lang,'Jelly-like material where many cell activities take place.','Materiale gelatinoso in cui avvengono molte attività cellulari.')},
    wall:{name:copy(lang,'Cell wall','Parete cellulare'),job:copy(lang,'Plant cells have a strong outer wall for support and protection.','Le cellule vegetali hanno una parete esterna resistente che offre sostegno e protezione.')},
    chloroplast:{name:copy(lang,'Chloroplast','Cloroplasto'),job:copy(lang,'Contains chlorophyll and absorbs light for photosynthesis.','Contiene clorofilla e assorbe la luce per la fotosintesi.')},
    vacuole:{name:copy(lang,'Large vacuole','Grande vacuolo'),job:copy(lang,'Stores cell sap and helps keep many plant cells firm.','Immagazzina la linfa cellulare e aiuta a mantenere rigide molte cellule vegetali.')}
  };
  const allowed=cell==='plant'?Object.keys(parts):['nucleus','membrane','cytoplasm'];
  const activePart=allowed.includes(part)?part:'nucleus';
  return <GhanaScienceVisual title={copy(lang,'The Living Cell Investigator','L’investigatore delle cellule viventi')} description={copy(lang,'Switch between a typical plant cell and an animal cell, then select a structure to discover its job.','Passa da una tipica cellula vegetale a una animale e seleziona una struttura per scoprirne la funzione.')} lang={lang} caption={copy(lang,'Plant cells have a cell wall, chloroplasts and usually a large central vacuole. Animal cells do not have these structures.','Le cellule vegetali hanno parete cellulare, cloroplasti e in genere un grande vacuolo centrale. Le cellule animali non possiedono queste strutture.')}>
    <svg viewBox="0 0 260 155" role="img" aria-label={copy(lang,cell==='plant'?'Simplified plant cell diagram':'Simplified animal cell diagram',cell==='plant'?'Schema semplificato di cellula vegetale':'Schema semplificato di cellula animale')}>
      {cell==='plant'?<><rect x="28" y="12" width="204" height="120" rx="22" fill="#8fbe76" fillOpacity=".22" stroke="#39834a" strokeWidth="8"/><rect x="36" y="20" width="188" height="104" rx="17" fill="#8fbe76" fillOpacity=".13" stroke="#79a96a" strokeWidth="2"/><ellipse cx="132" cy="74" rx="40" ry="29" fill="#e6c65c" fillOpacity=".6" stroke="#b18a2d" strokeWidth="2"/><circle cx="132" cy="74" r="13" fill="#8064a8"/><rect x="55" y="34" width="20" height="9" rx="4" fill="#29956b"/><rect x="184" y="104" width="20" height="9" rx="4" fill="#29956b"/></>:<><ellipse cx="130" cy="75" rx="100" ry="58" fill="#f0a6a6" fillOpacity=".22" stroke="#bb7777" strokeWidth="5"/><ellipse cx="130" cy="75" rx="92" ry="51" fill="none" stroke="#d78e8e" strokeWidth="2"/><circle cx="130" cy="75" r="16" fill="#8064a8"/></>}
      <path d="M130 75L157 32" stroke="currentColor" strokeWidth="1.5"/><text x="163" y="29" fontSize="10" fill="currentColor">{copy(lang,'Nucleus','Nucleo')}</text>
      {cell==='plant'&&<><path d="M65 39L40 8" stroke="currentColor"/><text x="6" y="9" fontSize="9" fill="currentColor">{copy(lang,'Wall','Parete')}</text><path d="M193 107l30 25" stroke="currentColor"/><text x="189" y="145" fontSize="9" fill="currentColor">{copy(lang,'Chloroplast','Cloroplasto')}</text></>}
    </svg>
    <div className="gh-jhs1-science-interaction">
      <div className="gh-jhs1-science-choices">
        <Control active={cell==='plant'} onClick={()=>{setCell('plant');setPart('nucleus')}}>{copy(lang,'Plant cell','Cellula vegetale')}</Control>
        <Control active={cell==='animal'} onClick={()=>{setCell('animal');setPart('nucleus')}}>{copy(lang,'Animal cell','Cellula animale')}</Control>
      </div>
      <div className="gh-jhs1-science-choices">
        {allowed.map(key=><Control key={key} active={activePart===key} onClick={()=>setPart(key)}>{parts[key].name}</Control>)}
      </div>
      <div className="gh-jhs1-science-readout" aria-live="polite"><strong>{parts[activePart].name}</strong><p>{parts[activePart].job}</p></div>
    </div>
  </GhanaScienceVisual>;
};

export const GhanaJhs1DiversityVisual: React.FC<Props> = ({ missionId, lang }) => {
  switch (missionId) {
    case 'gh-jhs1-science-materials-states': return <MaterialsStates lang={lang}/>;
    case 'gh-jhs1-science-importance-liquids': return <LifeGivingLiquids lang={lang}/>;
    case 'gh-jhs1-science-materials-uses': return <EverydayMaterials lang={lang}/>;
    case 'gh-jhs1-science-living-cells': return <LivingCells lang={lang}/>;
    default: return null;
  }
};
