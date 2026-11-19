import React, { useState } from 'react';
import type { Language } from '../types';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type Props = { missionId: string; lang: Language };
const tx = (lang: Language, en: string, it: string) => lang === 'it' ? it : en;
const Choice = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button type="button" className={`gh-jhs1-science-choice${active ? ' is-active' : ''}`} aria-pressed={active} onClick={onClick}>{children}</button>
);

const WaterCycle: React.FC<{lang:Language}> = ({lang}) => {
  const [stage,setStage]=useState('evaporation');
  const [earthProcess,setEarthProcess]=useState('weathering');
  const stages:Record<string,{name:string,detail:string}> = {
    evaporation:{name:tx(lang,'Evaporation','Evaporazione'),detail:tx(lang,'The Sun warms water in the sea, Lake Volta, rivers and ponds. Liquid water changes into water vapour and rises.','Il Sole riscalda l’acqua del mare, del lago Volta, dei fiumi e degli stagni. L’acqua liquida diventa vapore e sale.')},
    condensation:{name:tx(lang,'Condensation','Condensazione'),detail:tx(lang,'Water vapour cools high in the air and forms tiny liquid droplets that gather into clouds.','Il vapore acqueo si raffredda nell’aria e forma minuscole gocce che si raccolgono nelle nuvole.')},
    precipitation:{name:tx(lang,'Precipitation','Precipitazione'),detail:tx(lang,'When droplets or ice particles become heavy enough, water falls as rain or other forms of precipitation.','Quando le gocce o i cristalli diventano abbastanza pesanti, l’acqua cade come pioggia o altra precipitazione.')},
    collection:{name:tx(lang,'Collection and infiltration','Raccolta e infiltrazione'),detail:tx(lang,'Water flows into streams and rivers, collects in lakes and oceans, or soaks into soil and underground stores. Plants also return water vapour to the air through transpiration.','L’acqua scorre in ruscelli e fiumi, si raccoglie in laghi e mari o penetra nel suolo e nelle riserve sotterranee. Le piante restituiscono vapore all’aria con la traspirazione.')}
  };
  const processes:Record<string,{name:string,detail:string}> = {
    weathering:{name:tx(lang,'Weathering','Alterazione delle rocce'),detail:tx(lang,'Weathering breaks rock into smaller pieces in the same place. Water, temperature changes and plant roots can help break rocks.','L’alterazione rompe le rocce in pezzi più piccoli nello stesso luogo. Acqua, variazioni di temperatura e radici possono contribuire.')},
    erosion:{name:tx(lang,'Erosion','Erosione'),detail:tx(lang,'Erosion is the movement of soil or rock fragments by flowing water, wind or ice. Plant cover helps protect soil.','L’erosione è il trasporto di suolo o frammenti di roccia da parte di acqua, vento o ghiaccio. La vegetazione protegge il terreno.')}
  };
  return <GhanaScienceVisual title={tx(lang,'The Earth Systems Explorer','L’esploratore dei sistemi terrestri')} description={tx(lang,'Trace water through the cycle, then compare two processes that shape the land.','Segui l’acqua nel ciclo e confronta due processi che modellano il territorio.')} lang={lang} caption={tx(lang,'Ghana examples: rainfall, streams, Lake Volta, farms and vegetation cover.','Esempi del Ghana: pioggia, ruscelli, lago Volta, campi e copertura vegetale.')}>
    <svg viewBox="0 0 300 150" role="img" aria-label={tx(lang,'Water cycle diagram with sun, cloud, rain, river and plants','Schema del ciclo dell’acqua con sole, nuvola, pioggia, fiume e piante')}>
      <circle cx="42" cy="30" r="17" fill="#e9b949"/><g stroke="#e9b949" strokeWidth="3"><path d="M42 4v-5M42 61v-5M16 30h-6M74 30h-6M24 12l-5-5M60 48l-5-5M60 12l5-5M24 48l-5 5"/></g>
      <path d="M118 45c-1-15 20-23 31-12 9-22 44-15 45 8 21-2 27 24 8 30h-72c-18-1-25-18-12-26z" fill="#c6dce8" stroke="#5d879b" strokeWidth="2"/>
      <path d="M145 76v20m20-20v20m20-20v20" stroke="#419ac7" strokeWidth="4" strokeLinecap="round" className="gh-science-motion"/>
      <path d="M0 125q55-18 110 0t110 0t80 0v25H0z" fill="#8abf78"/>
      <path d="M0 138q55-16 110 0t110 0t80 0" fill="none" stroke="#3f9fc3" strokeWidth="8"/>
      <path d="M230 125V93m0 14q-22-3-20-22 19-2 20 18m0-3q22-3 21-22-19-2-21 18" fill="none" stroke="#397d49" strokeWidth="4" strokeLinecap="round"/>
      <path d="M57 90Q82 48 110 46" fill="none" stroke="#419ac7" strokeWidth="3" strokeDasharray="5 4" className="gh-science-motion"/>
      <text x="42" y="83" fontSize="10" textAnchor="middle" fill="currentColor">{tx(lang,'Sun','Sole')}</text><text x="162" y="39" fontSize="10" textAnchor="middle" fill="#284c5c">{tx(lang,'Cloud','Nuvola')}</text><text x="244" y="85" fontSize="10" textAnchor="middle" fill="currentColor">{tx(lang,'Plant','Pianta')}</text>
    </svg>
    <div className="gh-jhs1-science-interaction">
      <div className="gh-jhs1-science-choices">{Object.entries(stages).map(([key,item])=><Choice key={key} active={stage===key} onClick={()=>setStage(key)}>{item.name}</Choice>)}</div>
      <div className="gh-jhs1-science-readout" aria-live="polite"><strong>{stages[stage].name}</strong><p>{stages[stage].detail}</p></div>
      <strong>{tx(lang,'How does land change?','Come cambia il territorio?')}</strong>
      <div className="gh-jhs1-science-choices">{Object.entries(processes).map(([key,item])=><Choice key={key} active={earthProcess===key} onClick={()=>setEarthProcess(key)}>{item.name}</Choice>)}</div>
      <div className="gh-jhs1-science-readout" aria-live="polite"><strong>{processes[earthProcess].name}</strong><p>{processes[earthProcess].detail}</p></div>
    </div>
  </GhanaScienceVisual>;
};

const LifeCycles: React.FC<{lang:Language}> = ({lang}) => {
  const [organism,setOrganism]=useState('fly');
  const [stage,setStage]=useState(0);
  const data:Record<string,{name:string,stages:string[],details:string[],hint:string}> = {
    fly:{name:tx(lang,'Housefly','Mosca domestica'),stages:[tx(lang,'Egg','Uovo'),tx(lang,'Larva (maggot)','Larva'),tx(lang,'Pupa','Pupa'),tx(lang,'Adult','Adulto')],details:[tx(lang,'An adult fly lays eggs, often on moist decaying waste.','La mosca adulta depone uova, spesso su rifiuti organici umidi.'),tx(lang,'The larva feeds and grows. It is commonly called a maggot.','La larva si nutre e cresce; è comunemente chiamata bigattino.'),tx(lang,'The pupa is a resting stage in which the adult body develops.','La pupa è una fase di trasformazione in cui si sviluppa l’adulto.'),tx(lang,'The adult emerges and can reproduce, beginning the cycle again.','L’adulto emerge e può riprodursi, iniziando di nuovo il ciclo.')],hint:tx(lang,'Cover food, wash hands and dispose of waste safely to reduce contact between flies and food.','Copri il cibo, lava le mani e smaltisci i rifiuti correttamente per ridurre il contatto tra mosche e alimenti.')},
    plant:{name:tx(lang,'Maize plant','Pianta di mais'),stages:[tx(lang,'Seed','Seme'),tx(lang,'Germination','Germinazione'),tx(lang,'Seedling','Germoglio'),tx(lang,'Mature plant','Pianta adulta'),tx(lang,'Flower and seed','Fiore e seme')],details:[tx(lang,'A viable maize seed contains an embryo and stored food.','Un seme vitale di mais contiene un embrione e sostanze nutritive di riserva.'),tx(lang,'With suitable water, air and warmth, the embryo begins to grow.','Con acqua, aria e calore adeguati, l’embrione inizia a crescere.'),tx(lang,'The young seedling develops roots and leaves.','La giovane piantina sviluppa radici e foglie.'),tx(lang,'The plant grows, using light, water, air and nutrients.','La pianta cresce usando luce, acqua, aria e nutrienti.'),tx(lang,'Flowers develop and produce seeds for another generation.','I fiori si sviluppano e producono semi per una nuova generazione.')],hint:tx(lang,'A plant needs light, water, air, nutrients and space to grow well.','Una pianta ha bisogno di luce, acqua, aria, nutrienti e spazio.')},
    chicken:{name:tx(lang,'Chicken','Pollo'),stages:[tx(lang,'Egg','Uovo'),tx(lang,'Hatching chick','Pulcino che nasce'),tx(lang,'Young chicken','Giovane pollo'),tx(lang,'Adult hen or rooster','Gallina o gallo adulto')],details:[tx(lang,'A fertilised egg can contain a developing embryo.','Un uovo fecondato può contenere un embrione in sviluppo.'),tx(lang,'After incubation, a chick hatches from the egg.','Dopo l’incubazione, il pulcino esce dall’uovo.'),tx(lang,'The chick grows feathers and becomes a young chicken.','Il pulcino cresce, sviluppa le piume e diventa un giovane pollo.'),tx(lang,'An adult chicken can reproduce and begin another generation.','Un pollo adulto può riprodursi e dare inizio a una nuova generazione.')],hint:tx(lang,'Not all animals have the same life cycle. A butterfly and a housefly have egg, larva, pupa and adult stages.','Non tutti gli animali hanno lo stesso ciclo vitale. Farfalla e mosca hanno uovo, larva, pupa e adulto.')}
  };
  const current=data[organism];
  return <GhanaScienceVisual title={tx(lang,'The Life Cycle Guardian','Il guardiano dei cicli vitali')} description={tx(lang,'Select an organism and move through its stages of growth and reproduction.','Scegli un organismo e segui le fasi di crescita e riproduzione.')} lang={lang} caption={tx(lang,'Examples use a common crop and domestic animal alongside the housefly health topic.','Gli esempi includono una coltura, un animale domestico e il tema sanitario della mosca.')}>
    <svg viewBox="0 0 300 115" role="img" aria-label={tx(lang,'Illustration of stages in a life cycle','Illustrazione delle fasi di un ciclo vitale')}>
      {current.stages.map((label,i)=>{const x=35+i*(230/Math.max(1,current.stages.length-1));return <g key={label}><circle cx={x} cy="38" r={stage===i?22:16} fill={stage===i?'#e9b949':'#78a9a0'} stroke="#326b65" strokeWidth="2"/><text x={x} y="42" textAnchor="middle" fontSize="10" fill="#173b39">{i+1}</text><text x={x} y="77" textAnchor="middle" fontSize="9" fill="currentColor">{label.length>13?label.slice(0,12)+'…':label}</text>{i<current.stages.length-1&&<path d={`M${x+19} 38h${230/Math.max(1,current.stages.length-1)-38}`} stroke="currentColor" strokeWidth="2" strokeDasharray="4 3"/>}</g>})}
    </svg>
    <div className="gh-jhs1-science-interaction">
      <div className="gh-jhs1-science-choices">{Object.entries(data).map(([key,item])=><Choice key={key} active={organism===key} onClick={()=>{setOrganism(key);setStage(0);}}>{item.name}</Choice>)}</div>
      <div className="gh-jhs1-science-choices">{current.stages.map((item,i)=><Choice key={item} active={stage===i} onClick={()=>setStage(i)}>{i+1}. {item}</Choice>)}</div>
      <div className="gh-jhs1-science-readout" aria-live="polite"><strong>{current.stages[stage]}</strong><p>{current.details[stage]}</p></div>
      <div className="gh-jhs1-science-readout">{current.hint}</div>
    </div>
  </GhanaScienceVisual>;
};

const CropProduction: React.FC<{lang:Language}> = ({lang}) => {
  const [phase,setPhase]=useState('prepare');
  const [crop,setCrop]=useState('maize');
  const phases:Record<string,{name:string,detail:string}> = {
    prepare:{name:tx(lang,'Prepare the land','Preparare il terreno'),detail:tx(lang,'Choose a suitable site, check soil and water, clear safely and prepare beds or ridges. Protect trees and avoid burning vegetation.','Scegli un luogo adatto, controlla suolo e acqua, pulisci in sicurezza e prepara aiuole o solchi. Proteggi gli alberi ed evita di bruciare la vegetazione.')},
    plant:{name:tx(lang,'Plant','Seminare'),detail:tx(lang,'Use healthy seeds or planting materials, plant at the right depth and leave suitable spacing.','Usa semi o materiale di propagazione sano, semina alla profondità corretta e lascia uno spazio adeguato.')},
    care:{name:tx(lang,'Care for the crop','Curare la coltura'),detail:tx(lang,'Water when needed, control weeds, monitor pests and diseases, and use compost or labelled fertiliser safely.','Annaffia quando serve, controlla le erbe infestanti, osserva parassiti e malattie e usa compost o fertilizzanti etichettati in sicurezza.')},
    harvest:{name:tx(lang,'Harvest and store','Raccogliere e conservare'),detail:tx(lang,'Harvest at the right stage, handle produce gently and store it in clean, dry, well-ventilated conditions.','Raccogli al momento giusto, maneggia con cura e conserva in luoghi puliti, asciutti e ventilati.')}
  };
  const cropNames:Record<string,string>={maize:tx(lang,'Maize','Mais'),cassava:tx(lang,'Cassava','Manioca'),cocoa:tx(lang,'Cocoa','Cacao')};
  return <GhanaScienceVisual title={tx(lang,'The Crop Care Strategist','Lo stratega della cura delle colture')} description={tx(lang,'Plan a crop journey from site selection to safe storage using familiar Ghanaian crops.','Pianifica il percorso di una coltura dalla scelta del terreno alla conservazione usando colture comuni in Ghana.')} lang={lang} caption={tx(lang,'Crop needs vary: always adapt planting time and care to local conditions and agricultural guidance.','Le esigenze variano: adatta sempre tempi e cure alle condizioni locali e alle indicazioni agricole.')}>
    <svg viewBox="0 0 300 130" role="img" aria-label={tx(lang,'Crop growth from prepared soil to mature plant and harvest','Crescita della coltura dal terreno preparato alla pianta adulta e al raccolto')}>
      <path d="M5 94h290v27H5z" fill="#9a7047"/><path d="M28 94q8-20 16 0m52 0q8-20 16 0m52 0q8-20 16 0m52 0q8-20 16 0" fill="none" stroke="#4b8b48" strokeWidth="4"/>
      <path d="M150 95V25m0 35q-38-8-35-35 34-3 35 31m0-13q35-7 34-33-32-2-34 28" fill="none" stroke="#347c45" strokeWidth="5" strokeLinecap="round"/>
      <path d="M150 96l-20 24m20-24 20 24" stroke="#e4c28a" strokeWidth="3"/>
      <path d="M202 35q25-20 42 3q-16 23-42-3z" fill="#e4bd48" stroke="#98752b" strokeWidth="2"/><path d="M213 34l18 5m-12-9 15 2m-11 9 14 2" stroke="#98752b" strokeWidth="1.5"/>
      <text x="55" y="20" fontSize="10" fill="currentColor" textAnchor="middle">{tx(lang,'Soil','Suolo')}</text><text x="150" y="15" fontSize="10" fill="currentColor" textAnchor="middle">{tx(lang,'Growing plant','Pianta in crescita')}</text><text x="238" y="20" fontSize="10" fill="currentColor" textAnchor="middle">{tx(lang,'Harvest','Raccolto')}</text>
    </svg>
    <div className="gh-jhs1-science-interaction">
      <div className="gh-jhs1-science-choices">{Object.entries(cropNames).map(([key,name])=><Choice key={key} active={crop===key} onClick={()=>setCrop(key)}>{name}</Choice>)}</div>
      <div className="gh-jhs1-science-choices">{Object.entries(phases).map(([key,item])=><Choice key={key} active={phase===key} onClick={()=>setPhase(key)}>{item.name}</Choice>)}</div>
      <div className="gh-jhs1-science-readout" aria-live="polite"><strong>{cropNames[crop]} · {phases[phase].name}</strong><p>{phases[phase].detail}</p></div>
    </div>
  </GhanaScienceVisual>;
};

const AnimalProduction: React.FC<{lang:Language}> = ({lang}) => {
  const [animal,setAnimal]=useState('goat');
  const [focus,setFocus]=useState('food');
  const animals:Record<string,{name:string,group:string,food:string,care:string,uses:string}> = {
    goat:{name:tx(lang,'Goat','Capra'),group:tx(lang,'Ruminant','Ruminante'),food:tx(lang,'Browses on leaves, grasses and suitable forage.','Bruca foglie, erbe e foraggio adatto.'),care:tx(lang,'Needs clean water, suitable shelter, space and regular health checks.','Ha bisogno di acqua pulita, riparo adatto, spazio e controlli sanitari.'),uses:tx(lang,'May provide meat, skins and sometimes milk, depending on local practice.','Può fornire carne, pelle e talvolta latte, secondo le pratiche locali.')},
    cattle:{name:tx(lang,'Cattle','Bovini'),group:tx(lang,'Ruminant','Ruminante'),food:tx(lang,'Eat grasses and other suitable forage; clean water is essential.','Mangiano erbe e altro foraggio adatto; l’acqua pulita è essenziale.'),care:tx(lang,'Need adequate grazing or feed, shade, clean water and veterinary care.','Hanno bisogno di pascolo o mangime adeguato, ombra, acqua pulita e cure veterinarie.'),uses:tx(lang,'Can provide milk, meat, hides and, in some settings, draught power.','Possono fornire latte, carne, pelli e, in alcuni contesti, forza da lavoro.')},
    pig:{name:tx(lang,'Pig','Maiale'),group:tx(lang,'Monogastric','Monogastrico'),food:tx(lang,'Needs balanced, clean feed and constant access to clean water.','Ha bisogno di mangime equilibrato e pulito e di acqua pulita sempre disponibile.'),care:tx(lang,'Needs a clean, ventilated pen, space, shade and appropriate veterinary care.','Ha bisogno di un recinto pulito e ventilato, spazio, ombra e cure veterinarie adeguate.'),uses:tx(lang,'Commonly reared for meat; local laws and customs should be respected.','È allevato comunemente per la carne; vanno rispettate leggi e usanze locali.')},
    chicken:{name:tx(lang,'Chicken','Pollo'),group:tx(lang,'Poultry','Pollame'),food:tx(lang,'Needs suitable poultry feed, grit where appropriate and clean water.','Ha bisogno di mangime adatto, graniglia quando necessaria e acqua pulita.'),care:tx(lang,'Needs a dry, secure coop, enough space, protection from predators and disease prevention.','Ha bisogno di un pollaio asciutto e sicuro, spazio sufficiente, protezione dai predatori e prevenzione delle malattie.'),uses:tx(lang,'Can provide eggs, meat and income for households.','Può fornire uova, carne e reddito alle famiglie.')}
  };
  const item=animals[animal];
  const focusText:Record<string,string>={food:item.food,care:item.care,uses:item.uses};
  return <GhanaScienceVisual title={tx(lang,'The Animal Welfare Keeper','Il custode del benessere animale')} description={tx(lang,'Compare domestic animals by digestive group, feeding needs, care and uses.','Confronta gli animali domestici per gruppo digestivo, alimentazione, cura e utilizzi.')} lang={lang} caption={tx(lang,'Examples are common in Ghanaian communities, but the animals kept vary by household and location.','Gli esempi sono comuni in comunità del Ghana, ma gli animali allevati variano per famiglia e luogo.')}>
    <svg viewBox="0 0 300 115" role="img" aria-label={tx(lang,'Domestic animal care illustration','Illustrazione della cura degli animali domestici')}>
      <path d="M20 82h260" stroke="#9a7047" strokeWidth="5"/><path d="M70 68q-12-28 14-39 24-8 38 10l-4 29z" fill="#b98555" stroke="#79522f" strokeWidth="2"/><circle cx="119" cy="40" r="12" fill="#b98555" stroke="#79522f" strokeWidth="2"/><path d="M112 28l-5-10 13 5m6 5 8-8 1 15" fill="#b98555" stroke="#79522f" strokeWidth="2"/><path d="M83 67v17m25-17v17" stroke="#79522f" strokeWidth="5"/><path d="M190 80V36m-10 15 10-13 10 13m-10-13 0-12" stroke="#4b8b48" strokeWidth="4" fill="none"/><path d="M190 34q-20-16-24 1 14 10 24-1m0-5q20-16 24 1-14 10-24-1" fill="#76a85b"/>
      <text x="96" y="105" textAnchor="middle" fontSize="10" fill="currentColor">{tx(lang,'Healthy animal','Animale sano')}</text><text x="190" y="105" textAnchor="middle" fontSize="10" fill="currentColor">{tx(lang,'Feed and water','Cibo e acqua')}</text>
    </svg>
    <div className="gh-jhs1-science-interaction">
      <div className="gh-jhs1-science-choices">{Object.entries(animals).map(([key,value])=><Choice key={key} active={animal===key} onClick={()=>setAnimal(key)}>{value.name}</Choice>)}</div>
      <div className="gh-jhs1-science-readout"><strong>{item.name} · {item.group}</strong></div>
      <div className="gh-jhs1-science-choices">
        <Choice active={focus==='food'} onClick={()=>setFocus('food')}>{tx(lang,'Feeding','Alimentazione')}</Choice>
        <Choice active={focus==='care'} onClick={()=>setFocus('care')}>{tx(lang,'Welfare','Benessere')}</Choice>
        <Choice active={focus==='uses'} onClick={()=>setFocus('uses')}>{tx(lang,'Uses','Utilizzi')}</Choice>
      </div>
      <div className="gh-jhs1-science-readout" aria-live="polite"><p>{focusText[focus]}</p></div>
    </div>
  </GhanaScienceVisual>;
};

export const GhanaJhs1CyclesVisual: React.FC<Props> = ({missionId,lang}) => {
  switch(missionId) {
    case 'gh-jhs1-science-earth-cycles': return <WaterCycle lang={lang}/>;
    case 'gh-jhs1-science-life-cycles': return <LifeCycles lang={lang}/>;
    case 'gh-jhs1-science-crop-production': return <CropProduction lang={lang}/>;
    case 'gh-jhs1-science-animal-production': return <AnimalProduction lang={lang}/>;
    default: return null;
  }
};
