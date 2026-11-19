import React, { useState } from 'react';
import type { Language } from '../types';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type Props = { missionId: string; lang: Language };
const tx = (lang: Language, en: string, it: string) => lang === 'it' ? it : en;
const Choice = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button type="button" className={`gh-jhs1-science-choice${active ? ' is-active' : ''}`} aria-pressed={active} onClick={onClick}>{children}</button>
);

const Digestion: React.FC<{lang:Language}> = ({lang}) => {
  const [organ,setOrgan]=useState(0);
  const organs=[
    {name:tx(lang,'Mouth','Bocca'),job:tx(lang,'Teeth break food into smaller pieces. Saliva moistens food and begins starch digestion.','I denti sminuzzano il cibo. La saliva lo inumidisce e avvia la digestione dell’amido.')},
    {name:tx(lang,'Oesophagus','Esofago'),job:tx(lang,'Muscular movements push swallowed food towards the stomach.','I movimenti muscolari spingono il cibo ingerito verso lo stomaco.')},
    {name:tx(lang,'Stomach','Stomaco'),job:tx(lang,'Muscles churn food and mix it with digestive juices.','I muscoli rimescolano il cibo e lo mescolano con i succhi gastrici.')},
    {name:tx(lang,'Small intestine','Intestino tenue'),job:tx(lang,'Digestion is completed and nutrients pass through the intestinal wall into the blood.','La digestione si completa e i nutrienti attraversano la parete intestinale ed entrano nel sangue.')},
    {name:tx(lang,'Large intestine','Intestino crasso'),job:tx(lang,'Much of the remaining water is absorbed before waste leaves the body.','Viene assorbita gran parte dell’acqua rimanente prima che i rifiuti lascino il corpo.')}
  ];
  return <GhanaScienceVisual title={tx(lang,'The Digestion Defender','Il difensore della digestione')} description={tx(lang,'Follow food through the digestive system and discover each organ’s role.','Segui il percorso del cibo nell’apparato digerente e scopri il ruolo di ogni organo.')} lang={lang} caption={tx(lang,'A balanced diet, clean water and safe food handling support digestive health.','Una dieta equilibrata, acqua pulita e alimenti sicuri favoriscono la salute digestiva.')}>
    <svg viewBox="0 0 300 105" role="img" aria-label={tx(lang,'Five stages of the digestive journey','Cinque fasi del percorso digestivo')}>
      <path d="M150 12v80" stroke="#c97955" strokeWidth="8" strokeLinecap="round" opacity=".45"/>
      {organs.map((o,i)=><g key={o.name}><circle cx="150" cy={12+i*20} r={organ===i?9:6} fill={organ===i?'#e9b949':'#78a9a0'} stroke="#326b65" strokeWidth="2"/><text x="170" y={16+i*20} fontSize="10" fill="currentColor">{o.name}</text></g>)}
    </svg>
    <div className="gh-jhs1-science-interaction">
      <div className="gh-jhs1-science-choices">{organs.map((o,i)=><Choice key={o.name} active={organ===i} onClick={()=>setOrgan(i)}>{i+1}. {o.name}</Choice>)}</div>
      <div className="gh-jhs1-science-readout" aria-live="polite"><strong>{organs[organ].name}</strong><p>{organs[organ].job}</p></div>
    </div>
  </GhanaScienceVisual>;
};

const SolarSystem: React.FC<{lang:Language}> = ({lang}) => {
  const [planet,setPlanet]=useState('Earth');
  const data:Record<string,{it:string,order:number,detail:string}> = {
    Mercury:{it:'Mercurio',order:1,detail:tx(lang,'Small, rocky and closest to the Sun.','Piccolo, roccioso e più vicino al Sole.')},
    Venus:{it:'Venere',order:2,detail:tx(lang,'A thick atmosphere traps heat, making its surface extremely hot.','Una spessa atmosfera trattiene il calore e rende la superficie molto calda.')},
    Earth:{it:'Terra',order:3,detail:tx(lang,'Our home has abundant surface water and conditions that support life.','La nostra casa ha molta acqua superficiale e condizioni che sostengono la vita.')},
    Mars:{it:'Marte',order:4,detail:tx(lang,'A cold, rocky world with a reddish surface.','Un mondo freddo e roccioso con una superficie rossastra.')}
  };
  const item=data[planet];
  return <GhanaScienceVisual title={tx(lang,'The Inner Planet Navigator','Il navigatore dei pianeti interni')} description={tx(lang,'Select a planet to compare the four rocky worlds nearest the Sun.','Seleziona un pianeta per confrontare i quattro mondi rocciosi più vicini al Sole.')} lang={lang} caption={tx(lang,'The Sun’s gravity keeps planets in orbit; rotation is a separate movement around each planet’s axis.','La gravità del Sole mantiene i pianeti in orbita; la rotazione è un movimento distinto attorno all’asse di ciascun pianeta.')}>
    <svg viewBox="0 0 300 125" role="img" aria-label={tx(lang,'Sun and four inner planets in orbital order','Sole e quattro pianeti interni in ordine orbitale')}>
      <circle cx="34" cy="60" r="17" fill="#f2b544"/><text x="34" y="91" textAnchor="middle" fontSize="9" fill="currentColor">{tx(lang,'Sun','Sole')}</text>
      {Object.entries(data).map(([name,p])=>{const x=65+p.order*48;return <g key={name}><ellipse cx="34" cy="60" rx={x-34} ry="34" fill="none" stroke="currentColor" opacity=".15" strokeDasharray="3 3"/><circle cx={x} cy="60" r={planet===name?10:7} fill={['#9b8a79','#d9ad77','#3e91c8','#b95b43'][p.order-1]} stroke={planet===name?'#e9b949':'#52616b'} strokeWidth={planet===name?3:1}/><text x={x} y="91" textAnchor="middle" fontSize="9" fill="currentColor">{p.order}</text></g>})}
    </svg>
    <div className="gh-jhs1-science-interaction">
      <div className="gh-jhs1-science-choices">{Object.entries(data).map(([name,p])=><Choice key={name} active={planet===name} onClick={()=>setPlanet(name)}>{lang==='it'?p.it:name}</Choice>)}</div>
      <div className="gh-jhs1-science-readout" aria-live="polite"><strong>{tx(lang,'Planet','Pianeta')} {item.order}: {lang==='it'?item.it:planet}</strong><p>{item.detail}</p></div>
    </div>
  </GhanaScienceVisual>;
};

const Ecosystem: React.FC<{lang:Language}> = ({lang}) => {
  const [habitat,setHabitat]=useState('savanna');
  const [link,setLink]=useState(0);
  const habitats:Record<string,{name:string,chain:string[],details:string[]}> = {
    savanna:{name:tx(lang,'Ghanaian savanna','Savana del Ghana'),chain:[tx(lang,'Grass','Erba'),tx(lang,'Grasshopper','Cavalletta'),tx(lang,'Frog','Rana'),tx(lang,'Snake','Serpente')],details:[tx(lang,'Grass is a producer: it makes food using sunlight.','L’erba è un produttore: crea nutrimento usando la luce solare.'),tx(lang,'A grasshopper is a consumer that feeds on plants.','La cavalletta è un consumatore che si nutre di piante.'),tx(lang,'A frog eats insects and transfers energy along the food chain.','La rana mangia insetti e trasferisce energia lungo la catena alimentare.'),tx(lang,'A snake may prey on frogs; changes in one population can affect others.','Un serpente può predare le rane; i cambiamenti di una popolazione possono influenzare le altre.') ]},
    pond:{name:tx(lang,'Freshwater pond','Stagno d’acqua dolce'),chain:[tx(lang,'Algae','Alghe'),tx(lang,'Water insect','Insetto acquatico'),tx(lang,'Small fish','Pesce piccolo'),tx(lang,'Large fish','Pesce grande')],details:[tx(lang,'Algae use light to make food.','Le alghe usano la luce per produrre nutrimento.'),tx(lang,'Water insects feed on algae or plant material.','Gli insetti acquatici si nutrono di alghe o materiale vegetale.'),tx(lang,'Small fish may eat aquatic insects.','I pesci piccoli possono mangiare insetti acquatici.'),tx(lang,'Larger fish may feed on smaller fish.','I pesci più grandi possono nutrirsi di pesci piccoli.')]}
  };
  const current=habitats[habitat];
  return <GhanaScienceVisual title={tx(lang,'The Ecosystem Balance Keeper','Il custode dell’equilibrio dell’ecosistema')} description={tx(lang,'Explore a food chain and see how energy moves between organisms.','Esplora una catena alimentare e osserva come l’energia passa tra gli organismi.')} lang={lang} caption={tx(lang,'Water, soil, air, sunlight and temperature are non-living factors that also shape each ecosystem.','Acqua, suolo, aria, luce solare e temperatura sono fattori non viventi che influenzano ogni ecosistema.')}>
    <svg viewBox="0 0 300 90" role="img" aria-label={tx(lang,'Four connected organisms in a food chain','Quattro organismi collegati in una catena alimentare')}>
      {current.chain.map((name,i)=><g key={name}><rect x={4+i*75} y="22" width="66" height="34" rx="8" fill={i===link?'#e9b949':'#78a9a0'} stroke="#326b65" strokeWidth="2"/><text x={37+i*75} y="43" textAnchor="middle" fontSize="9" fill="#173b39">{name.length>10?name.slice(0,9)+'…':name}</text>{i<3&&<path d={`M${71+i*75} 39h8m-3-4 4 4-4 4`} stroke="currentColor" strokeWidth="1.5" fill="none"/>}</g>)}
    </svg>
    <div className="gh-jhs1-science-interaction">
      <div className="gh-jhs1-science-choices"><Choice active={habitat==='savanna'} onClick={()=>{setHabitat('savanna');setLink(0);}}>{tx(lang,'Savanna','Savana')}</Choice><Choice active={habitat==='pond'} onClick={()=>{setHabitat('pond');setLink(0);}}>{tx(lang,'Pond','Stagno')}</Choice></div>
      <div className="gh-jhs1-science-choices">{current.chain.map((name,i)=><Choice key={name} active={link===i} onClick={()=>setLink(i)}>{i+1}. {name}</Choice>)}</div>
      <div className="gh-jhs1-science-readout" aria-live="polite"><strong>{current.chain[link]}</strong><p>{current.details[link]}</p></div>
    </div>
  </GhanaScienceVisual>;
};

const Farming: React.FC<{lang:Language}> = ({lang}) => {
  const [system,setSystem]=useState('rotation');
  const data:Record<string,{name:string,detail:string,benefit:string}> = {
    rotation:{name:tx(lang,'Crop rotation','Rotazione delle colture'),detail:tx(lang,'Different crops are grown on the same field in a planned sequence over seasons.','Colture diverse vengono coltivate nello stesso campo in una sequenza pianificata nel corso delle stagioni.'),benefit:tx(lang,'Can help manage soil nutrients, pests and diseases.','Può aiutare a gestire nutrienti del suolo, parassiti e malattie.')},
    mixed:{name:tx(lang,'Mixed cropping','Coltivazione mista'),detail:tx(lang,'Two or more crops grow together on the same piece of land.','Due o più colture crescono insieme sullo stesso appezzamento.'),benefit:tx(lang,'Can spread risk and make use of space, depending on crop choices.','Può distribuire i rischi e utilizzare lo spazio, secondo le colture scelte.')},
    farming:{name:tx(lang,'Mixed farming','Agricoltura mista'),detail:tx(lang,'Crop production is combined with keeping livestock on the same farm.','La produzione agricola è combinata con l’allevamento di animali nella stessa azienda.'),benefit:tx(lang,'Suitable manure can support soil fertility when safely managed.','Il letame adatto può sostenere la fertilità del suolo se gestito in sicurezza.')},
    land:{name:tx(lang,'Land rotation','Rotazione dei terreni'),detail:tx(lang,'A farmer uses one area for a time and allows it to rest while another area is used.','Un agricoltore usa un’area per un periodo e la lascia riposare mentre ne utilizza un’altra.'),benefit:tx(lang,'Rest periods may allow vegetation and soil conditions to recover.','I periodi di riposo possono permettere alla vegetazione e al suolo di riprendersi.')},
    organic:{name:tx(lang,'Organic farming','Agricoltura biologica'),detail:tx(lang,'The farm uses ecological practices such as compost, crop diversity and biological pest control.','L’azienda usa pratiche ecologiche come compost, diversità delle colture e controllo biologico dei parassiti.'),benefit:tx(lang,'Aims to build a healthy farm ecosystem and reduce reliance on synthetic inputs.','Mira a creare un ecosistema agricolo sano e a ridurre la dipendenza da prodotti sintetici.')}
  };
  const item=data[system];
  return <GhanaScienceVisual title={tx(lang,'The Farming Systems Strategist','Lo stratega dei sistemi agricoli')} description={tx(lang,'Compare ways Ghanaian farmers organise crops, land and livestock.','Confronta i modi in cui gli agricoltori del Ghana organizzano colture, terreni e bestiame.')} lang={lang} caption={tx(lang,'The best system depends on rainfall, soil, available land, labour and local farming advice.','Il sistema migliore dipende da piogge, suolo, terreno disponibile, manodopera e consigli agricoli locali.')}>
    <svg viewBox="0 0 300 90" role="img" aria-label={tx(lang,'Farm field with crop rows and a tree','Campo agricolo con file di colture e un albero')}>
      <path d="M8 70h284" stroke="#9a7047" strokeWidth="16"/>{[35,85,135,185,235].map(x=><g key={x}><path d={`M${x} 68v-25m0 10-10-9m10 9 10-9`} stroke="#347c45" strokeWidth="3" fill="none"/><circle cx={x} cy="40" r="5" fill="#76a85b"/></g>)}
      <path d="M270 67V28m-12 9q-5-18 12-17 17-1 12 17-12 8-24 0" fill="#4b8b48"/>
    </svg>
    <div className="gh-jhs1-science-interaction">
      <div className="gh-jhs1-science-choices">{Object.entries(data).map(([key,value])=><Choice key={key} active={system===key} onClick={()=>setSystem(key)}>{value.name}</Choice>)}</div>
      <div className="gh-jhs1-science-readout" aria-live="polite"><strong>{item.name}</strong><p>{item.detail}</p><p><b>{tx(lang,'Possible benefit:','Possibile vantaggio:')}</b> {item.benefit}</p></div>
    </div>
  </GhanaScienceVisual>;
};

export const GhanaJhs1SystemsVisual: React.FC<Props> = ({missionId,lang}) => {
  switch(missionId) {
    case 'gh-jhs1-science-human-body-system': return <Digestion lang={lang}/>;
    case 'gh-jhs1-science-solar-system': return <SolarSystem lang={lang}/>;
    case 'gh-jhs1-science-ecosystem': return <Ecosystem lang={lang}/>;
    case 'gh-jhs1-science-farming-systems': return <Farming lang={lang}/>;
    default: return null;
  }
};
