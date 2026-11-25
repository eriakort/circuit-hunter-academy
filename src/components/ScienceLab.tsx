import React, { useState } from 'react';
import type { Language } from '../types';
import { Analogy, pick, Readout, Slider } from './chemLabs/chemLabShared';

type Props = { missionId: string; lang: Language };

export const ScienceLab: React.FC<Props> = ({ missionId, lang }) => {
  const [sunlight, setSunlight] = useState(70);
  const [water, setWater] = useState(65);
  const [animalIdx, setAnimalIdx] = useState(0);
  const [moonPhase, setMoonPhase] = useState(0);
  const [eclipseType, setEclipseType] = useState<'solar' | 'lunar'>('solar');
  const [gravityWorld, setGravityWorld] = useState<'earth' | 'moon'>('earth');
  const [constellation, setConstellation] = useState<'orion' | 'ursa' | 'cassiopeia'>('orion');
  const [missionTarget, setMissionTarget] = useState<'moon' | 'mars' | 'jupiter'>('moon');
  const [pendulumAmplitude, setPendulumAmplitude] = useState(50);
  const [universeTime, setUniverseTime] = useState(0);
  const [skyView, setSkyView] = useState<'day' | 'night'>('night');
  const [earthHour, setEarthHour] = useState(12);
  const [reviewTopic, setReviewTopic] = useState<'space' | 'motion' | 'exploration'>('space');
  const [energyMode, setEnergyMode] = useState<'chemical' | 'electrical' | 'light'>('chemical');
  const [energySource, setEnergySource] = useState<'solar' | 'wind' | 'coal'>('solar');
  const [circuitClosed, setCircuitClosed] = useState(false);
  const [prismMode, setPrismMode] = useState<'white' | 'prism' | 'apple'>('white');
  const [lightMaterial, setLightMaterial] = useState<'mirror' | 'glass' | 'wall'>('mirror');
  const [lightActivity, setLightActivity] = useState<'shadow' | 'colour'>('shadow');
  const [soundFrequency, setSoundFrequency] = useState(50);
  const [forceMode, setForceMode] = useState<'push' | 'pull' | 'friction'>('push');
  const [magnetPoles, setMagnetPoles] = useState<'nn' | 'ns'>('ns');
  const [magnetMaterial, setMagnetMaterial] = useState<'steel' | 'plastic' | 'aluminium'>('steel');
  const [leverPosition, setLeverPosition] = useState(50);
  const [geoparkTopic, setGeoparkTopic] = useState<'energy' | 'light' | 'forces'>('energy');

  if (missionId === 'g5s-plants') {
    const growth = Math.round((sunlight + water) / 2);
    const stemH = 26 + (growth / 100) * 68;
    const leafScale = 0.65 + (growth / 100) * 0.55;
    const oxyCount = Math.max(1, Math.round(growth / 22));

    return (
      <section className="chem-lab" aria-label={pick(lang, 'Photosynthesis Lab', 'Laboratorio di Fotosintesi')}>
        <header className="cl-heading">
          <span className="cl-kicker">{pick(lang, 'INTERACTIVE SCIENCE LAB', 'LABORATORIO INTERATTIVO DI SCIENZE')}</span>
          <h3>{pick(lang, 'Photosynthesis & Plant Growth Bench', 'Banco della Fotosintesi e Crescita Vegetale')}</h3>
          <p>{pick(lang, 'Adjust sunlight and soil water to watch the roots drink, leaves absorb light, and oxygen bubbles release.', 'Regola luce solare e acqua per vedere le radici assorbire, le foglie crescere e l’ossigeno liberarsi.')}</p>
        </header>
        <div className="cl-grid">
          <div className="cl-visual">
            <svg viewBox="0 0 360 205" role="img" aria-label={pick(lang, 'Animated plant photosynthesis', 'Fotosintesi animata della pianta')}>
              {/* Sun */}
              <circle cx="58" cy="44" r={18 + sunlight * 0.08} fill="#ffd166" opacity={0.35 + sunlight * 0.006} className="chem-anim-pulse" />
              <line x1="78" y1="54" x2="152" y2={132 - stemH * 0.7} stroke="#ffd166" strokeWidth="2.5" strokeOpacity={sunlight / 110} className="chem-anim-dash" />
              {/* Soil & Roots */}
              <rect x="44" y="150" width="272" height="44" rx="10" fill="rgba(166,118,74,.28)" stroke="#d99b52" />
              <path d="M180 150 L166 172 M180 150 L180 178 M180 150 L194 172" stroke="#d99b52" strokeWidth="2.5" strokeLinecap="round" />
              {water > 25 && <circle cx="164" cy="166" r="4" fill="#45d8ff" className="chem-anim-bubble" />}
              {/* Stem & Leaves */}
              <line x1="180" y1="150" x2="180" y2={150 - stemH} stroke="#38ef7d" strokeWidth="5" strokeLinecap="round" />
              <ellipse cx={180 - 18 * leafScale} cy={150 - stemH * 0.65} rx={18 * leafScale} ry={9 * leafScale} fill="#38ef7d" transform={`rotate(-22 ${180 - 18 * leafScale} ${150 - stemH * 0.65})`} />
              <ellipse cx={180 + 18 * leafScale} cy={150 - stemH * 0.8} rx={18 * leafScale} ry={9 * leafScale} fill="#38ef7d" transform={`rotate(22 ${180 + 18 * leafScale} ${150 - stemH * 0.8})`} />
              {/* Oxygen bubbles */}
              {Array.from({ length: oxyCount }, (_, i) => (
                <g key={i} className="chem-anim-bubble" style={{ animationDelay: `${i * 0.35}s` }}>
                  <circle cx={210 + i * 18} cy={104 - (i % 2) * 18} r="7" fill="rgba(69,216,255,.32)" stroke="#45d8ff" />
                  <text x={210 + i * 18} y={107 - (i % 2) * 18} textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="800">O₂</text>
                </g>
              ))}
              <text x="275" y="136" textAnchor="middle" fill="#38ef7d" fontSize="11.5" fontWeight="800">
                {pick(lang, 'Leaves make sugar + O₂!', 'Le foglie creano zuccheri + O₂!')}
              </text>
            </svg>
          </div>
          <div className="cl-controls">
            <Slider label={pick(lang, 'Sunlight Energy', 'Luce Solare')} value={sunlight} min={10} max={100} step={5} unit="%" lang={lang} onChange={setSunlight} />
            <Slider label={pick(lang, 'Soil Water (Roots)', 'Acqua nel Terreno (Radici)')} value={water} min={10} max={100} step={5} unit="%" lang={lang} onChange={setWater} />
            <div className="cl-readout-row">
              <Readout label={pick(lang, 'Photosynthesis Rate', 'Fotosintesi')} value={`${growth}%`} />
              <Readout label={pick(lang, 'Oxygen Released', 'Ossigeno Rilasciato')} value={`${oxyCount}× O₂`} />
            </div>
            <Analogy
              lang={lang}
              en="Leaves work like tiny solar kitchens: roots drink water, air supplies CO₂, and sunlight cooks plant food while breathing out fresh O₂!"
              it="Le foglie sono cucine solari: le radici bevono acqua, l’aria porta CO₂ e il sole trasforma tutto in nutrimento liberando ossigeno!"
            />
          </div>
        </div>
      </section>
    );
  }

  if (missionId === 'g5s-animals') {
    const animals = [
      { name: ['Eagle (Bird)', 'Aquila (Uccello)'], vert: true, legs: ['2 + 2 wings', '2 + 2 ali'], feat: ['Feathers + backbone', 'Piume + colonna vertebrale'], col: '#ffd166' },
      { name: ['Frog (Amphibian)', 'Rana (Anfibio)'], vert: true, legs: ['4', '4'], feat: ['Lives in water & land + backbone', 'Acqua e terra + colonna vertebrale'], col: '#38ef7d' },
      { name: ['Bee (Insect)', 'Ape (Insetto)'], vert: false, legs: ['6', '6'], feat: ['No backbone · exoskeleton', 'Senza colonna · 6 zampe'], col: '#45d8ff' },
      { name: ['Spider (Arachnid)', 'Ragno (Aracnide)'], vert: false, legs: ['8', '8'], feat: ['No backbone · 8 legs', 'Senza colonna · 8 zampe'], col: '#ff5d8f' }
    ] as const;
    const cur = animals[animalIdx];

    return (
      <section className="chem-lab" aria-label={pick(lang, 'Animal Backbone X-Ray Inspector', 'Scanner Colonna Vertebrale')}>
        <header className="cl-heading">
          <span className="cl-kicker">{pick(lang, 'INTERACTIVE SCIENCE LAB', 'LABORATORIO INTERATTIVO DI SCIENZE')}</span>
          <h3>{pick(lang, 'Vertebrate vs. Invertebrate X-Ray Scanner', 'Scanner Raggi-X: Vertebrati vs. Invertebrati')}</h3>
          <p>{pick(lang, 'Switch between animals to inspect whether they have an internal backbone or an outer shell/exoskeleton.', 'Seleziona un animale per verificare se possiede una colonna vertebrale interna o uno scheletro esterno.')}</p>
        </header>
        <div className="cl-grid">
          <div className="cl-visual">
            <svg viewBox="0 0 360 190" role="img" aria-label={cur.name[0]}>
              <rect x="44" y="28" width="272" height="134" rx="16" fill="rgba(16,22,58,.85)" stroke={cur.col} strokeWidth="2.5" />
              <text x="180" y="56" textAnchor="middle" fill={cur.col} fontSize="15" fontWeight="800">{pick(lang, cur.name[0], cur.name[1])}</text>
              {cur.vert ? (
                <g className="chem-anim-pulse">
                  <line x1="94" y1="98" x2="266" y2="98" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
                  {[114, 140, 166, 192, 218, 244].map((x, i) => (
                    <rect key={i} x={x - 5} y="84" width="10" height="28" rx="4" fill="rgba(255,255,255,.85)" />
                  ))}
                </g>
              ) : (
                <ellipse cx="180" cy="98" rx="76" ry="28" fill="none" stroke={cur.col} strokeWidth="4" strokeDasharray="7 5" className="chem-anim-pulse" />
              )}
              <text x="180" y="144" textAnchor="middle" fill="#ffffff" fontSize="12.5" fontWeight="700">
                {cur.vert ? pick(lang, '✓ VERTEBRATE (Internal spine)', '✓ VERTEBRATO (Colonna vertebrale)') : pick(lang, '✕ INVERTEBRATE (No spine)', '✕ INVERTEBRATO (Senza colonna)')}
              </text>
            </svg>
          </div>
          <div className="cl-controls">
            <div className="cl-mode-tabs">
              {animals.map((a, i) => (
                <button key={a.name[0]} type="button" className={animalIdx === i ? 'active' : ''} onClick={() => setAnimalIdx(i)}>
                  {pick(lang, a.name[0], a.name[1])}
                </button>
              ))}
            </div>
            <div className="cl-readout-row">
              <Readout label={pick(lang, 'Group', 'Gruppo')} value={cur.vert ? pick(lang, 'Vertebrate', 'Vertebrato') : pick(lang, 'Invertebrate', 'Invertebrato')} />
              <Readout label={pick(lang, 'Legs', 'Zampe')} value={pick(lang, cur.legs[0], cur.legs[1])} />
            </div>
            <Analogy lang={lang} en={cur.feat[0]} it={cur.feat[1]} />
          </div>
        </div>
      </section>
    );
  }

  if (missionId === 'g5s-ecosystems') {
    const habitatHealth = Math.round((sunlight + water) / 2);
    const plantHeight = 24 + habitatHealth * 0.42;
    const animalCount = Math.max(1, Math.round(habitatHealth / 18));

    return (
      <section className="chem-lab" aria-label={pick(lang, 'Ecosystem Balance Lab', 'Laboratorio dell’Equilibrio dell’Ecosistema')}>
        <header className="cl-heading">
          <span className="cl-kicker">{pick(lang, 'INTERACTIVE SCIENCE LAB', 'LABORATORIO INTERATTIVO DI SCIENZE')}</span>
          <h3>{pick(lang, 'Build a Healthy Meadow', 'Costruisci un prato in salute')}</h3>
          <p>{pick(lang, 'Change sunlight and water availability to explore how non-living conditions can affect plants and the animals that depend on them.', 'Modifica la luce e la disponibilità di acqua per scoprire come le condizioni non viventi influenzano le piante e gli animali che dipendono da esse.')}</p>
        </header>
        <div className="cl-grid">
          <div className="cl-visual">
            <svg viewBox="0 0 360 205" role="img" aria-label={pick(lang, 'Meadow ecosystem with plants and animals', 'Ecosistema del prato con piante e animali')}>
              <circle cx="54" cy="40" r={12 + sunlight * 0.08} fill="#ffd166" opacity={0.45 + sunlight * 0.005} />
              <path d="M0 156 Q85 132 180 154 T360 150 V205 H0Z" fill="rgba(56,239,125,.20)" />
              {Array.from({ length: 9 }, (_, i) => <path key={i} d={`M${34 + i * 36} 158 q-7 -${plantHeight * 0.55} -12 -${plantHeight}`} stroke="#38ef7d" strokeWidth="3" strokeLinecap="round" />)}
              {Array.from({ length: animalCount }, (_, i) => <g key={i} transform={`translate(${92 + i * 32} 135)`}><ellipse cx="0" cy="0" rx="10" ry="6" fill="#ffd166"/><circle cx="9" cy="-5" r="4" fill="#ffd166"/><path d="M-5 5v7 M5 5v7" stroke="#ffd166" strokeWidth="2"/></g>)}
              <path d="M264 150 q20 -22 40 0" fill="none" stroke="#45d8ff" strokeWidth="3" strokeDasharray="4 4" />
              <text x="180" y="24" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="800">{pick(lang, 'SUNLIGHT + WATER → PLANT GROWTH', 'LUCE + ACQUA → CRESCITA DELLE PIANTE')}</text>
              <text x="180" y="190" textAnchor="middle" fill="#ffffff" fontSize="11">{pick(lang, 'Plants provide food and shelter', 'Le piante offrono cibo e riparo')}</text>
            </svg>
          </div>
          <div className="cl-controls">
            <Slider label={pick(lang, 'Sunlight', 'Luce solare')} value={sunlight} min={10} max={100} step={5} unit="%" lang={lang} onChange={setSunlight} />
            <Slider label={pick(lang, 'Water availability', 'Disponibilità di acqua')} value={water} min={10} max={100} step={5} unit="%" lang={lang} onChange={setWater} />
            <div className="cl-readout-row">
              <Readout label={pick(lang, 'Habitat conditions', 'Condizioni dell’habitat')} value={`${habitatHealth}%`} />
              <Readout label={pick(lang, 'Illustrative meadow animals', 'Animali illustrativi nel prato')} value={String(animalCount)} />
            </div>
            <Analogy lang={lang} en="An ecosystem is a connected team: plants use sunlight and water, while animals depend on plants and other organisms for food and shelter." it="Un ecosistema è una squadra collegata: le piante usano luce e acqua, mentre gli animali dipendono dalle piante e dagli altri organismi per cibo e riparo." />
          </div>
        </div>
      </section>
    );
  }

  if (missionId === 'g5u-sky') {
    return (
      <section className="chem-lab" aria-label={pick(lang, 'Sky Explorer Lab', 'Laboratorio Esplora il Cielo')}>
        <header className="cl-heading"><span className="cl-kicker">{pick(lang, 'INTERACTIVE SCIENCE LAB', 'LABORATORIO INTERATTIVO DI SCIENZE')}</span><h3>{pick(lang, 'Day Sky or Night Sky?', 'Cielo di giorno o cielo di notte?')}</h3><p>{pick(lang, 'Switch the sky and use the telescope view to notice what becomes visible.', 'Cambia il cielo e osserva cosa si rende visibile attraverso il telescopio.')}</p></header>
        <div className="cl-grid">
          <div className="cl-visual">
            <svg viewBox="0 0 360 205" role="img" aria-label={pick(lang, 'Sky observation switch', 'Visualizzazione del cielo')}>
              <rect x="18" y="18" width="324" height="169" rx="18" fill={skyView === 'day' ? 'rgba(69,216,255,.28)' : 'rgba(16,22,58,.95)'} stroke={skyView === 'day' ? '#45d8ff' : '#8a7bff'} />
              {skyView === 'day' ? <><circle cx="180" cy="82" r="32" fill="#ffd166" className="chem-anim-pulse"/><text x="180" y="146" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="800">{pick(lang,'Sun + atmosphere','Sole + atmosfera')}</text></> : <>
                <circle cx="180" cy="82" r="24" fill="#dfe7ff"/><circle cx="192" cy="74" r="24" fill="#10143a"/>
                {[{x:82,y:62},{x:268,y:54},{x:108,y:120},{x:250,y:128},{x:315,y:88}].map((star,i)=><circle key={i} cx={star.x} cy={star.y} r="3" fill="#ffd166" className="chem-anim-pulse"/>)}
                <text x="180" y="146" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="800">{pick(lang,'Moon + stars','Luna + stelle')}</text>
              </>}
              <path d="M132 170h96l-12-18h-72z" fill="#3a3f7a"/><circle cx="180" cy="170" r="8" fill="#45d8ff"/>
            </svg>
          </div>
          <div className="cl-controls">
            <div className="cl-mode-tabs"><button type="button" className={skyView === 'day' ? 'active' : ''} onClick={() => setSkyView('day')}>{pick(lang,'Day','Giorno')}</button><button type="button" className={skyView === 'night' ? 'active' : ''} onClick={() => setSkyView('night')}>{pick(lang,'Night','Notte')}</button></div>
            <Readout label={pick(lang,'Visible sky objects','Oggetti visibili')} value={skyView === 'day' ? pick(lang,'Sun, clouds','Sole, nuvole') : pick(lang,'Moon, stars','Luna, stelle')} />
            <Analogy lang={lang} en="A telescope collects light, so it can reveal objects too faint or distant for our eyes." it="Un telescopio raccoglie la luce e può mostrare oggetti troppo deboli o lontani per i nostri occhi." />
          </div>
        </div>
      </section>
    );
  }

  if (missionId === 'g5u-big-bang') {
    const events = universeTime < 25 ? ['HOT & DENSE','CALDO E DENSO'] : universeTime < 55 ? ['FIRST ATOMS','PRIMI ATOMI'] : universeTime < 80 ? ['FIRST STARS','PRIME STELLE'] : ['GALAXIES','GALASSIE'];
    return (
      <section className="chem-lab" aria-label={pick(lang,'Cosmic Timeline Lab','Laboratorio della linea del tempo cosmica')}>
        <header className="cl-heading"><span className="cl-kicker">{pick(lang,'INTERACTIVE SCIENCE LAB','LABORATORIO INTERATTIVO DI SCIENZE')}</span><h3>{pick(lang,'Travel Along the Cosmic Timeline','Viaggia sulla linea del tempo cosmica')}</h3><p>{pick(lang,'Move through billions of years and watch the Universe cool and form stars.','Attraversa miliardi di anni e osserva l’Universo raffreddarsi e formare stelle.')}</p></header>
        <div className="cl-grid">
          <div className="cl-visual"><svg viewBox="0 0 360 205" role="img" aria-label={pick(lang,'Universe expanding over time','Espansione dell’Universo nel tempo')}>
            <rect x="18" y="18" width="324" height="169" rx="18" fill="rgba(16,22,58,.95)" stroke="#8a7bff"/>
            <circle cx="180" cy="102" r={18 + universeTime * 0.55} fill="rgba(255,209,102,.16)" stroke="#ffd166" strokeWidth="3"/>
            <circle cx="180" cy="102" r={8 + universeTime * 0.12} fill="#ffd166" className="chem-anim-pulse"/>
            {universeTime > 55 && [0,1,2,3,4].map(i=><circle key={i} cx={88+i*46} cy={62+(i%2)*68} r="7" fill="#45d8ff" opacity=".85"/>)}
            <text x="180" y="180" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="800">{pick(lang,events[0],events[1])}</text>
          </svg></div>
          <div className="cl-controls"><Slider label={pick(lang,'Cosmic time','Tempo cosmico')} value={universeTime} min={0} max={100} step={5} unit={pick(lang,'% elapsed','% trascorso')} lang={lang} onChange={setUniverseTime}/><Readout label={pick(lang,'Main idea','Idea principale')} value={pick(lang,'Space expands','Lo spazio si espande')}/><Analogy lang={lang} en="The Big Bang describes expansion from an extremely hot, dense early state—not an explosion into a pre-existing room." it="Il Big Bang descrive l’espansione da uno stato iniziale caldo e denso, non un’esplosione dentro una stanza già esistente."/></div>
        </div>
      </section>
    );
  }

  if (missionId === 'g5u-solar-system') {
    const planets = [['Mercury','Mercurio','☿'],['Venus','Venere','♀'],['Earth','Terra','♁'],['Mars','Marte','♂'],['Jupiter','Giove','♃'],['Saturn','Saturno','♄'],['Uranus','Urano','♅'],['Neptune','Nettuno','♆']];
    return (
      <section className="chem-lab" aria-label={pick(lang,'Solar System Planet Order Lab','Laboratorio dell’ordine dei pianeti')}>
        <header className="cl-heading"><span className="cl-kicker">{pick(lang,'INTERACTIVE SCIENCE LAB','LABORATORIO INTERATTIVO DI SCIENZE')}</span><h3>{pick(lang,'Build the Planetary Map','Costruisci la mappa dei pianeti')}</h3></header>
        <div className="cl-grid"><div className="cl-visual"><svg viewBox="0 0 360 205" role="img" aria-label={pick(lang,'Eight planets in solar order','Otto pianeti in ordine solare')}>
          <circle cx="28" cy="102" r="18" fill="#ffd166" className="chem-anim-pulse"/>
          {planets.map((p,i)=>{const x=64+i*37; const r=5+(i===4?6:i===5?5:0); return <g key={p[0]}><circle cx={x} cy="102" r={r} fill={['#aab0c0','#e8c46a','#45d8ff','#ff6a55','#ffb45d','#ffd166','#72c7b8','#7c8cff'][i]}><animate attributeName="cy" values="102;96;102" dur={`${1.8+i*.12}s`} repeatCount="indefinite"/></circle><text x={x} y="145" textAnchor="middle" fill="#fff" fontSize="10">{pick(lang,p[0].slice(0,3),p[1].slice(0,3))}</text></g>;})}
          <text x="180" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="800">{pick(lang,'SUN → OUTER PLANETS','SOLE → PIANETI ESTERNI')}</text>
        </svg></div><div className="cl-controls"><div className="cl-mode-tabs">{planets.map((p,i)=><button type="button" key={p[0]} onClick={() => setUniverseTime(i)}>{pick(lang,p[0],p[1])}</button>)}</div><Readout label={pick(lang,'Position from Sun','Posizione dal Sole')} value={`${universeTime+1}°`}/><Analogy lang={lang} en="Diagrams shrink enormous distances: Mercury is first, Neptune is eighth." it="I disegni riducono distanze enormi: Mercurio è il primo, Nettuno è l’ottavo."/></div></div>
      </section>
    );
  }

  if (missionId === 'g5u-earth-movements') {
    const daylight = earthHour >= 6 && earthHour <= 18;
    return (
      <section className="chem-lab" aria-label={pick(lang,'Earth Motion Lab','Laboratorio del movimento terrestre')}>
        <header className="cl-heading"><span className="cl-kicker">{pick(lang,'INTERACTIVE SCIENCE LAB','LABORATORIO INTERATTIVO DI SCIENZE')}</span><h3>{pick(lang,'Turn Earth and Watch Day Arrive','Fai girare la Terra e osserva il giorno')}</h3></header>
        <div className="cl-grid"><div className="cl-visual"><svg viewBox="0 0 360 205" role="img" aria-label={pick(lang,'Earth rotating through a day','Rotazione terrestre durante un giorno')}>
          <rect x="18" y="18" width="324" height="169" rx="18" fill={daylight?'rgba(69,216,255,.24)':'rgba(16,22,58,.95)'} stroke={daylight?'#45d8ff':'#8a7bff'} />
          <circle cx="180" cy="102" r="58" fill="#45d8ff" stroke="#38ef7d" strokeWidth="4"/><path d={`M180 44 A58 58 0 0 ${earthHour>=12?'1':'0'} 180 160`} fill="#38ef7d" opacity=".45"/>
          <circle cx={180+Math.cos(earthHour/24*Math.PI*2)*125} cy={102+Math.sin(earthHour/24*Math.PI*2)*54} r="18" fill="#ffd166"/>
          <text x="180" y="176" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="800">{daylight?pick(lang,'DAYLIGHT','LUCE DEL GIORNO'):pick(lang,'NIGHT','NOTTE')}</text>
        </svg></div><div className="cl-controls"><Slider label={pick(lang,'Hour of Earth’s rotation','Ora della rotazione')} value={earthHour} min={0} max={24} step={1} unit={pick(lang,'hours','ore')} lang={lang} onChange={setEarthHour}/><Readout label={pick(lang,'At this location','In questo luogo')} value={daylight?pick(lang,'Day','Giorno'):pick(lang,'Night','Notte')}/><Analogy lang={lang} en="Earth’s rotation creates day and night; Earth’s tilt and yearly orbit help create the seasons." it="La rotazione terrestre crea il giorno e la notte; l’inclinazione e l’orbita annuale aiutano a creare le stagioni."/></div></div>
      </section>
    );
  }

  if (missionId === 'g5u-moon') {
    const phases = [
      ['New Moon','Luna nuova','🌑'],['First quarter','Primo quarto','🌓'],['Full Moon','Luna piena','🌕'],['Last quarter','Ultimo quarto','🌗']
    ];
    return (
      <section className="chem-lab" aria-label={pick(lang,'Moon Phase Lab','Laboratorio delle fasi lunari')}>
        <header className="cl-heading"><span className="cl-kicker">{pick(lang,'INTERACTIVE SCIENCE LAB','LABORATORIO INTERATTIVO DI SCIENZE')}</span><h3>{pick(lang,'Find the Moon’s Phase','Trova la fase lunare')}</h3></header>
        <div className="cl-grid"><div className="cl-visual"><svg viewBox="0 0 360 205" role="img" aria-label={pick(lang,'Moon phases around Earth','Fasi lunari attorno alla Terra')}>
          <rect x="18" y="18" width="324" height="169" rx="18" fill="rgba(16,22,58,.95)" stroke="#8a7bff"/>
          <circle cx="180" cy="102" r="38" fill="#45d8ff"/><circle cx="180" cy="102" r="70" fill="none" stroke="#6c739f" strokeDasharray="5 7"/>
          {phases.map((p,i)=>{const angle=i*Math.PI/2-Math.PI/2; return <text key={p[0]} x={180+Math.cos(angle)*82} y={102+Math.sin(angle)*82+7} textAnchor="middle" fontSize="25">{p[2]}</text>;})}
          <text x="180" y="176" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="800">{pick(lang,phases[moonPhase][0],phases[moonPhase][1])}</text>
        </svg></div><div className="cl-controls"><div className="cl-mode-tabs">{phases.map((p,i)=><button type="button" key={p[0]} className={moonPhase===i?'active':''} onClick={()=>setMoonPhase(i)}>{pick(lang,p[0],p[1])}</button>)}</div><Analogy lang={lang} en="The Moon does not change shape; we see different portions of its sunlit half." it="La Luna non cambia forma: vediamo porzioni diverse della metà illuminata."/></div></div>
      </section>
    );
  }

  if (missionId === 'g5u-eclipses') {
    return (
      <section className="chem-lab" aria-label={pick(lang,'Eclipse Alignment Lab','Laboratorio dell’allineamento delle eclissi')}>
        <header className="cl-heading"><span className="cl-kicker">{pick(lang,'INTERACTIVE SCIENCE LAB','LABORATORIO INTERATTIVO DI SCIENZE')}</span><h3>{pick(lang,'Align the Eclipse','Allinea l’eclissi')}</h3></header>
        <div className="cl-grid"><div className="cl-visual"><svg viewBox="0 0 360 205" role="img" aria-label={pick(lang,'Solar or lunar eclipse shadow','Ombra di eclissi solare o lunare')}>
          <rect x="18" y="18" width="324" height="169" rx="18" fill="rgba(16,22,58,.95)" stroke="#8a7bff"/>
          {eclipseType==='solar'?<><circle cx="66" cy="102" r="36" fill="#ffd166"/><circle cx="180" cy="102" r="17" fill="#dfe7ff"/><path d="M197 102L306 82M197 102L306 122" stroke="rgba(223,231,255,.45)" strokeWidth="18"/><circle cx="292" cy="102" r="28" fill="#45d8ff"/></>:<><circle cx="66" cy="102" r="28" fill="#ffd166"/><circle cx="180" cy="102" r="28" fill="#45d8ff"/><circle cx="292" cy="102" r="24" fill="#dfe7ff"/><path d="M151 102a29 29 0 0 0 58 0" fill="#24284e"/></>}
        </svg></div><div className="cl-controls"><div className="cl-mode-tabs"><button type="button" className={eclipseType==='solar'?'active':''} onClick={()=>setEclipseType('solar')}>{pick(lang,'Solar eclipse','Eclissi solare')}</button><button type="button" className={eclipseType==='lunar'?'active':''} onClick={()=>setEclipseType('lunar')}>{pick(lang,'Lunar eclipse','Eclissi lunare')}</button></div><Readout label={pick(lang,'Shadow falls on','L’ombra cade su')} value={eclipseType==='solar'?pick(lang,'Earth','Terra'):pick(lang,'Moon','Luna')}/><Analogy lang={lang} en="Never look directly at the Sun during a solar eclipse without certified protection." it="Non guardare mai direttamente il Sole durante un’eclissi solare senza protezione certificata."/></div></div>
      </section>
    );
  }

  if (missionId === 'g5u-gravity') {
    const weight = gravityWorld === 'earth' ? 60 : 10;
    return (
      <section className="chem-lab" aria-label={pick(lang,'Gravity Lab','Laboratorio della gravità')}>
        <header className="cl-heading"><span className="cl-kicker">{pick(lang,'INTERACTIVE SCIENCE LAB','LABORATORIO INTERATTIVO DI SCIENZE')}</span><h3>{pick(lang,'Compare Weight on Earth and Moon','Confronta il peso sulla Terra e sulla Luna')}</h3></header>
        <div className="cl-grid"><div className="cl-visual"><svg viewBox="0 0 360 205" role="img" aria-label={pick(lang,'Gravity comparison','Confronto della gravità')}>
          <rect x="18" y="18" width="324" height="169" rx="18" fill="rgba(16,22,58,.95)" stroke="#8a7bff"/>
          <circle cx="115" cy="96" r="48" fill="#45d8ff"/><circle cx="250" cy="96" r="34" fill="#dfe7ff"/>
          <path d="M115 144v26M250 130v40" stroke="#ffd166" strokeWidth="4"/><text x="115" y="184" textAnchor="middle" fill="#fff" fontSize="13">{pick(lang,'Earth','Terra')} · 60 N</text><text x="250" y="184" textAnchor="middle" fill="#fff" fontSize="13">{pick(lang,'Moon','Luna')} · 10 N</text>
        </svg></div><div className="cl-controls"><div className="cl-mode-tabs"><button type="button" className={gravityWorld==='earth'?'active':''} onClick={()=>setGravityWorld('earth')}>{pick(lang,'Earth','Terra')}</button><button type="button" className={gravityWorld==='moon'?'active':''} onClick={()=>setGravityWorld('moon')}>{pick(lang,'Moon','Luna')}</button></div><Readout label={pick(lang,'Illustrative weight','Peso illustrativo')} value={`${weight} N`}/><Readout label={pick(lang,'Mass','Massa')} value="60 kg"/><Analogy lang={lang} en="Mass stays nearly the same; weight is smaller where gravity is weaker." it="La massa resta quasi uguale; il peso è minore dove la gravità è più debole."/></div></div>
      </section>
    );
  }

  if (missionId === 'g5u-constellations') {
    const points = constellation==='orion'?[[120,70],[170,100],[220,70],[145,145],[195,145]]:constellation==='ursa'?[[95,75],[130,95],[175,85],[210,110],[245,92],[270,125],[230,145]]:[[90,130],[145,82],[200,115],[255,70],[300,125]];
    return (
      <section className="chem-lab" aria-label={pick(lang,'Star Mapper Lab','Laboratorio della mappa stellare')}>
        <header className="cl-heading"><span className="cl-kicker">{pick(lang,'INTERACTIVE SCIENCE LAB','LABORATORIO INTERATTIVO DI SCIENZE')}</span><h3>{pick(lang,'Connect the Star Puzzle','Collega il puzzle stellare')}</h3></header>
        <div className="cl-grid"><div className="cl-visual"><svg viewBox="0 0 360 205" role="img" aria-label={pick(lang,'Constellation pattern','Figura di una costellazione')}>
          <rect x="18" y="18" width="324" height="169" rx="18" fill="rgba(16,22,58,.95)" stroke="#8a7bff"/>
          <polyline points={points.map(p=>p.join(',')).join(' ')} fill="none" stroke="#45d8ff" strokeWidth="3" strokeDasharray="5 4"/>
          {points.map((p,i)=><circle key={i} cx={p[0]} cy={p[1]} r="6" fill="#ffd166" className="chem-anim-pulse"/>)}
        </svg></div><div className="cl-controls"><div className="cl-mode-tabs"><button type="button" className={constellation==='orion'?'active':''} onClick={()=>setConstellation('orion')}>Orion / Orione</button><button type="button" className={constellation==='ursa'?'active':''} onClick={()=>setConstellation('ursa')}>Ursa Major / Orsa Maggiore</button><button type="button" className={constellation==='cassiopeia'?'active':''} onClick={()=>setConstellation('cassiopeia')}>Cassiopeia</button></div><Analogy lang={lang} en="Stars in a constellation can be very far apart: the pattern depends on our viewpoint." it="Le stelle di una costellazione possono essere molto distanti: la figura dipende dal nostro punto di vista."/></div></div>
      </section>
    );
  }

  if (missionId === 'g5u-space-exploration') {
    return (
      <section className="chem-lab" aria-label={pick(lang,'Space Mission Planner Lab','Laboratorio pianificatore di missioni spaziali')}>
        <header className="cl-heading"><span className="cl-kicker">{pick(lang,'INTERACTIVE SCIENCE LAB','LABORATORIO INTERATTIVO DI SCIENZE')}</span><h3>{pick(lang,'Plan a Safe Robot Mission','Pianifica una missione robotica sicura')}</h3></header>
        <div className="cl-grid"><div className="cl-visual"><svg viewBox="0 0 360 205" role="img" aria-label={pick(lang,'Robot mission from Earth to a planet','Missione robotica dalla Terra a un pianeta')}>
          <rect x="18" y="18" width="324" height="169" rx="18" fill="rgba(16,22,58,.95)" stroke="#8a7bff"/>
          <circle cx="55" cy="145" r="24" fill="#45d8ff"/><circle cx={missionTarget==='moon'?250:missionTarget==='mars'?285:305} cy={missionTarget==='moon'?72:missionTarget==='mars'?105:62} r={missionTarget==='moon'?18:missionTarget==='mars'?25:34} fill={missionTarget==='jupiter'?'#ffb45d':'#dfe7ff'} className="chem-anim-pulse"/>
          <path d={`M78 130 Q170 ${missionTarget==='moon'?60:100} ${missionTarget==='moon'?250:missionTarget==='mars'?285:305} ${missionTarget==='moon'?72:missionTarget==='mars'?105:62}`} fill="none" stroke="#ffd166" strokeWidth="3" strokeDasharray="7 5"/>
          <g transform={`translate(${missionTarget==='moon'?250:missionTarget==='mars'?285:305},${missionTarget==='moon'?72:missionTarget==='mars'?105:62})`}><rect x="-13" y="-8" width="26" height="16" rx="4" fill="#38ef7d"/></g>
        </svg></div><div className="cl-controls"><div className="cl-mode-tabs"><button type="button" className={missionTarget==='moon'?'active':''} onClick={()=>setMissionTarget('moon')}>{pick(lang,'Moon','Luna')}</button><button type="button" className={missionTarget==='mars'?'active':''} onClick={()=>setMissionTarget('mars')}>{pick(lang,'Mars','Marte')}</button><button type="button" className={missionTarget==='jupiter'?'active':''} onClick={()=>setMissionTarget('jupiter')}>{pick(lang,'Jupiter','Giove')}</button></div><Readout label={pick(lang,'Mission tool','Strumento della missione')} value={missionTarget==='moon'?pick(lang,'Camera','Fotocamera'):missionTarget==='mars'?pick(lang,'Rock sensor','Sensore di roccia'):pick(lang,'Radiation scanner','Scanner di radiazione')}/><Analogy lang={lang} en="Every mission needs a clear question, a tool, a data route home and a safety plan." it="Ogni missione ha bisogno di una domanda, uno strumento, un modo per riportare i dati e un piano di sicurezza."/></div></div>
      </section>
    );
  }

  if (missionId === 'g5u-foucault') {
    return (
      <section className="chem-lab" aria-label={pick(lang,'Earth Rotation Experiment Lab','Laboratorio della rotazione terrestre')}>
        <header className="cl-heading"><span className="cl-kicker">{pick(lang,'INTERACTIVE SCIENCE LAB','LABORATORIO INTERATTIVO DI SCIENZE')}</span><h3>{pick(lang,'Why Does a Pendulum Swing?','Perché oscilla un pendolo?')}</h3></header>
        <div className="cl-grid"><div className="cl-visual"><svg viewBox="0 0 360 205" role="img" aria-label={pick(lang,'Animated pendulum over Earth rotation marks','Pendolo animato con segni della rotazione terrestre')}>
          <rect x="18" y="18" width="324" height="169" rx="18" fill="rgba(16,22,58,.95)" stroke="#8a7bff"/>
          <line x1="180" y1="38" x2={180+Math.sin(pendulumAmplitude/100*Math.PI)*70} y2="155" stroke="#ffd166" strokeWidth="4" className="chem-anim-dash"/>
          <circle cx={180+Math.sin(pendulumAmplitude/100*Math.PI)*70} cy="155" r="16" fill="#45d8ff"/>
          {[85,180,275].map((x,i)=><line key={x} x1={x} y1="168" x2={x} y2="176" stroke="#38ef7d" strokeWidth={i===1?5:2}/>)}
        </svg></div><div className="cl-controls"><Slider label={pick(lang,'Pendulum position','Posizione del pendolo')} value={pendulumAmplitude} min={0} max={100} step={5} unit="" lang={lang} onChange={setPendulumAmplitude}/><Readout label={pick(lang,'Observation','Osservazione')} value={pick(lang,'Swing pattern changes','Il modello di oscillazione cambia')}/><Analogy lang={lang} en="A Foucault pendulum gives a large, observable clue that Earth itself is rotating beneath it." it="Un pendolo di Foucault offre un indizio osservabile sul fatto che la Terra ruota sotto di esso."/></div></div>
      </section>
    );
  }

  if (missionId === 'g5u-review') {
    const reviewCopy = reviewTopic==='space'
      ? [pick(lang,'Stars, planets and gravity','Stelle, pianeti e gravità'),pick(lang,'Use models and evidence','Usa modelli e prove')]
      : reviewTopic==='motion'
        ? [pick(lang,'Rotation and revolution','Rotazione e rivoluzione'),pick(lang,'Connect cause and effect','Collega causa ed effetto')]
        : [pick(lang,'Satellites and probes','Satelliti e sonde'),pick(lang,'Plan one question and one instrument','Pianifica una domanda e uno strumento')];
    return (
      <section className="chem-lab" aria-label={pick(lang,'Universe Review Lab','Laboratorio di ripasso dell’Universo')}>
        <header className="cl-heading"><span className="cl-kicker">{pick(lang,'INTERACTIVE SCIENCE LAB','LABORATORIO INTERATTIVO DI SCIENZE')}</span><h3>{pick(lang,'Choose a Universe Mission','Scegli una missione sull’Universo')}</h3></header>
        <div className="cl-grid"><div className="cl-visual"><svg viewBox="0 0 360 205" role="img" aria-label={pick(lang,'Universe knowledge map','Mappa delle conoscenze sull’Universo')}>
          <rect x="18" y="18" width="324" height="169" rx="18" fill="rgba(16,22,58,.95)" stroke="#8a7bff"/>
          <circle cx="180" cy="102" r="38" fill="#ffd166"/><circle cx="92" cy="55" r="18" fill="#45d8ff"/><circle cx="268" cy="55" r="18" fill="#38ef7d"/><circle cx="180" cy="151" r="18" fill="#ff6a55"/>
          <path d="M142 82L105 70M218 82l37-12M180 140v-15" stroke="#fff" strokeWidth="3"/>
          <text x="180" y="108" textAnchor="middle" fill="#10143a" fontSize="13" fontWeight="900">{pick(lang,'UNIVERSE','UNIVERSO')}</text>
        </svg></div><div className="cl-controls"><div className="cl-mode-tabs"><button type="button" className={reviewTopic==='space'?'active':''} onClick={()=>setReviewTopic('space')}>{pick(lang,'Space','Spazio')}</button><button type="button" className={reviewTopic==='motion'?'active':''} onClick={()=>setReviewTopic('motion')}>{pick(lang,'Motion','Movimento')}</button><button type="button" className={reviewTopic==='exploration'?'active':''} onClick={()=>setReviewTopic('exploration')}>{pick(lang,'Exploration','Esplorazione')}</button></div><Readout label={pick(lang,'Topic','Argomento')} value={reviewCopy[0]}/><Readout label={pick(lang,'Challenge','Sfida')} value={reviewCopy[1]}/></div></div>
      </section>
    );
  }

  if (missionId === 'g5e-what-is-energy') {
    const energyLabels = energyMode === 'chemical'
      ? [pick(lang,'Chemical','Chimica'),pick(lang,'Stored in battery','Immagazzinata nella batteria')]
      : energyMode === 'electrical'
        ? [pick(lang,'Electrical','Elettrica'),pick(lang,'Moves through circuit','Si muove nel circuito')]
        : [pick(lang,'Light','Luminosa'),pick(lang,'Leaves the torch','Esce dalla torcia')];
    return (
      <section className="chem-lab" aria-label={pick(lang,'Energy Transformation Lab','Laboratorio delle trasformazioni dell’energia')}>
        <header className="cl-heading"><span className="cl-kicker">{pick(lang,'INTERACTIVE SCIENCE LAB','LABORATORIO INTERATTIVO DI SCIENZE')}</span><h3>{pick(lang,'Follow the Energy','Segui l’energia')}</h3></header>
        <div className="cl-grid"><div className="cl-visual"><svg viewBox="0 0 360 205" role="img" aria-label={pick(lang,'Energy changing form','Energia che cambia forma')}>
          <rect x="18" y="18" width="324" height="169" rx="18" fill="rgba(16,22,58,.95)" stroke="#8a7bff"/>
          <circle cx="75" cy="102" r="34" fill={energyMode==='chemical'?'#ffd166':'#3a3f7a'} className="chem-anim-pulse"/><circle cx="180" cy="102" r="34" fill={energyMode==='electrical'?'#45d8ff':'#3a3f7a'}/><circle cx="285" cy="102" r="34" fill={energyMode==='light'?'#38ef7d':'#3a3f7a'} className="chem-anim-pulse"/>
          <path d="M110 102H145M215 102H250" stroke="#fff" strokeWidth="4" strokeDasharray="7 5" className="chem-anim-dash"/>
          <text x="75" y="158" textAnchor="middle" fill="#fff" fontSize="11">{pick(lang,'Chemical','Chimica')}</text><text x="180" y="158" textAnchor="middle" fill="#fff" fontSize="11">{pick(lang,'Electrical','Elettrica')}</text><text x="285" y="158" textAnchor="middle" fill="#fff" fontSize="11">{pick(lang,'Light','Luminosa')}</text>
        </svg></div><div className="cl-controls"><div className="cl-mode-tabs"><button type="button" className={energyMode==='chemical'?'active':''} onClick={()=>setEnergyMode('chemical')}>{pick(lang,'Battery','Batteria')}</button><button type="button" className={energyMode==='electrical'?'active':''} onClick={()=>setEnergyMode('electrical')}>{pick(lang,'Circuit','Circuito')}</button><button type="button" className={energyMode==='light'?'active':''} onClick={()=>setEnergyMode('light')}>{pick(lang,'Torch','Torcia')}</button></div><Readout label={pick(lang,'Energy form','Forma di energia')} value={energyLabels[0]}/><Readout label={pick(lang,'What happens','Che cosa succede')} value={energyLabels[1]}/></div></div>
      </section>
    );
  }

  if (missionId === 'g5e-energy-sources') {
    const source = energySource === 'solar'
      ? [pick(lang,'Solar','Solare'),pick(lang,'Renewable','Rinnovabile'),'#ffd166']
      : energySource === 'wind'
        ? [pick(lang,'Wind','Eolico'),pick(lang,'Renewable','Rinnovabile'),'#45d8ff']
        : [pick(lang,'Coal','Carbone'),pick(lang,'Non-renewable','Non rinnovabile'),'#ff6a55'];
    return (
      <section className="chem-lab" aria-label={pick(lang,'Energy Source Lab','Laboratorio delle fonti di energia')}>
        <header className="cl-heading"><span className="cl-kicker">{pick(lang,'INTERACTIVE SCIENCE LAB','LABORATORIO INTERATTIVO DI SCIENZE')}</span><h3>{pick(lang,'Sort the Power Sources','Classifica le fonti di energia')}</h3></header>
        <div className="cl-grid"><div className="cl-visual"><svg viewBox="0 0 360 205" role="img" aria-label={pick(lang,'Renewable or non-renewable source','Fonte rinnovabile o non rinnovabile')}>
          <rect x="18" y="18" width="324" height="169" rx="18" fill="rgba(16,22,58,.95)" stroke="#8a7bff"/>
          {energySource==='solar'?<><circle cx="180" cy="90" r="38" fill="#ffd166" className="chem-anim-pulse"/>{[0,1,2,3].map(i=> <line key={i} x1={180} y1={90} x2={180+Math.cos(i*Math.PI/2)*70} y2={90+Math.sin(i*Math.PI/2)*70} stroke="#ffd166" strokeWidth="3"/>)}</>:energySource==='wind'?<><line x1="180" y1="155" x2="180" y2="55" stroke="#45d8ff" strokeWidth="6"/>{[0,1,2].map(i=> <path key={i} d="M180 55l8 0l55 18z" fill="#45d8ff" transform={`rotate(${i*120} 180 55)`}/>)}</>:<><path d="M100 155l55-75h50l55 75z" fill="#ff6a55"/><text x="180" y="122" textAnchor="middle" fill="#10143a" fontSize="30">COAL</text></>}
        </svg></div><div className="cl-controls"><div className="cl-mode-tabs"><button type="button" className={energySource==='solar'?'active':''} onClick={()=>setEnergySource('solar')}>{pick(lang,'Solar','Solare')}</button><button type="button" className={energySource==='wind'?'active':''} onClick={()=>setEnergySource('wind')}>{pick(lang,'Wind','Eolico')}</button><button type="button" className={energySource==='coal'?'active':''} onClick={()=>setEnergySource('coal')}>{pick(lang,'Coal','Carbone')}</button></div><Readout label={pick(lang,'Source','Fonte')} value={source[0]}/><Readout label={pick(lang,'Category','Categoria')} value={source[1]}/></div></div>
      </section>
    );
  }

  if (missionId === 'g5e-electricity') {
    return (
      <section className="chem-lab" aria-label={pick(lang,'Safe Circuit Lab','Laboratorio sicuro dei circuiti')}>
        <header className="cl-heading"><span className="cl-kicker">{pick(lang,'INTERACTIVE SCIENCE LAB','LABORATORIO INTERATTIVO DI SCIENZE')}</span><h3>{pick(lang,'Close the Low-Voltage Circuit','Chiudi il circuito a bassa tensione')}</h3></header>
        <div className="cl-grid"><div className="cl-visual"><svg viewBox="0 0 360 205" role="img" aria-label={pick(lang,'Closed or open battery circuit','Circuito a batteria aperto o chiuso')}>
          <rect x="18" y="18" width="324" height="169" rx="18" fill="rgba(16,22,58,.95)" stroke="#8a7bff"/>
          <rect x="70" y="82" width="55" height="48" rx="8" fill="#ffd166"/><rect x="235" y="82" width="55" height="48" rx="8" fill={circuitClosed?'#38ef7d':'#3a3f7a'} stroke="#38ef7d" strokeWidth="3"/>
          <path d={circuitClosed?'M125 106H235M262 82V55H125V82':'M125 106H195M235 106H290M262 82V55H125V82'} fill="none" stroke={circuitClosed?'#45d8ff':'#ff6a55'} strokeWidth="5" strokeDasharray={circuitClosed?'7 4':'none'} className={circuitClosed?'chem-anim-dash':''}/>
          <text x="97" y="112" textAnchor="middle" fill="#10143a" fontSize="13" fontWeight="900">{pick(lang,'CELL','CELLA')}</text><text x="262" y="112" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="900">{circuitClosed?'ON':'OFF'}</text>
        </svg></div><div className="cl-controls"><button type="button" className="cl-primary" onClick={()=>setCircuitClosed(!circuitClosed)}>{circuitClosed?pick(lang,'Open switch','Apri interruttore'):pick(lang,'Close switch','Chiudi interruttore')}</button><Readout label={pick(lang,'Circuit','Circuito')} value={circuitClosed?pick(lang,'Closed: lamp on','Chiuso: lampada accesa'):pick(lang,'Open: lamp off','Aperto: lampada spenta')}/><Analogy lang={lang} en="Only use a teacher-approved low-voltage kit. Never touch wall sockets or damaged mains cables." it="Usa solo un kit a bassa tensione approvato dall’insegnante. Non toccare prese domestiche o cavi danneggiati."/></div></div>
      </section>
    );
  }

  if (missionId === 'g5e-light-colours') {
    return (
      <section className="chem-lab" aria-label={pick(lang,'Colour Lab','Laboratorio dei colori')}>
        <header className="cl-heading"><span className="cl-kicker">{pick(lang,'INTERACTIVE SCIENCE LAB','LABORATORIO INTERATTIVO DI SCIENZE')}</span><h3>{pick(lang,'Split and Mix Light','Separa e mescola la luce')}</h3></header>
        <div className="cl-grid"><div className="cl-visual"><svg viewBox="0 0 360 205" role="img" aria-label={pick(lang,'White light through a prism','Luce bianca attraverso un prisma')}>
          <rect x="18" y="18" width="324" height="169" rx="18" fill="rgba(16,22,58,.95)" stroke="#8a7bff"/>
          <line x1="45" y1="102" x2="155" y2="102" stroke="#fff" strokeWidth="8"/>
          <path d="M155 55L220 155L90 155Z" fill={prismMode==='prism'?'rgba(69,216,255,.35)':'rgba(255,255,255,.08)'} stroke="#45d8ff" strokeWidth="3"/>
          {prismMode==='prism'&&['#ff4d6d','#ffd166','#38ef7d','#45d8ff','#8a7bff'].map((c,i)=><line key={c} x1="220" y1="102" x2="310" y2={55+i*25} stroke={c} strokeWidth="7" className="chem-anim-dash"/>)}
          {prismMode==='apple'&&<><circle cx="270" cy="102" r="28" fill="#ff5d8f"/><text x="270" y="150" textAnchor="middle" fill="#fff" fontSize="12">{pick(lang,'Red apple reflects red','La mela rossa riflette il rosso')}</text></>}
        </svg></div><div className="cl-controls"><div className="cl-mode-tabs"><button type="button" className={prismMode==='white'?'active':''} onClick={()=>setPrismMode('white')}>{pick(lang,'White light','Luce bianca')}</button><button type="button" className={prismMode==='prism'?'active':''} onClick={()=>setPrismMode('prism')}>{pick(lang,'Prism','Prisma')}</button><button type="button" className={prismMode==='apple'?'active':''} onClick={()=>setPrismMode('apple')}>{pick(lang,'Red apple','Mela rossa')}</button></div><Analogy lang={lang} en="A prism separates white light into a spectrum. Screens mix red, green and blue light." it="Un prisma separa la luce bianca in uno spettro. Gli schermi mescolano luce rossa, verde e blu."/></div></div>
      </section>
    );
  }

  if (missionId === 'g5e-light-phenomena') {
    return (
      <section className="chem-lab" aria-label={pick(lang,'Light Behaviour Lab','Laboratorio del comportamento della luce')}>
        <header className="cl-heading"><span className="cl-kicker">{pick(lang,'INTERACTIVE SCIENCE LAB','LABORATORIO INTERATTIVO DI SCIENZE')}</span><h3>{pick(lang,'Mirror, Glass or Shadow?','Specchio, vetro o ombra?')}</h3></header>
        <div className="cl-grid"><div className="cl-visual"><svg viewBox="0 0 360 205" role="img" aria-label={pick(lang,'Reflection and refraction paths','Percorsi di riflessione e rifrazione')}>
          <rect x="18" y="18" width="324" height="169" rx="18" fill="rgba(16,22,58,.95)" stroke="#8a7bff"/>
          <line x1="55" y1="102" x2={lightMaterial==='glass'?170:lightMaterial==='wall'?115:145} y2="102" stroke="#ffd166" strokeWidth="5"/>
          {lightMaterial==='mirror'?<><line x1="145" y1="102" x2="145" y2="35" stroke="#45d8ff" strokeWidth="8"/><path d="M145 102L260 55" stroke="#45d8ff" strokeWidth="4" strokeDasharray="7 5"/></>:lightMaterial==='glass'?<><rect x="170" y="65" width="45" height="74" fill="rgba(69,216,255,.28)" stroke="#45d8ff"/><path d="M215 102L290 125" stroke="#45d8ff" strokeWidth="4"/></>:<><rect x="115" y="55" width="28" height="94" fill="#3a3f7a" stroke="#fff"/><path d="M143 102L300 102" stroke="#ff6a55" strokeWidth="3" strokeDasharray="5 5"/></>}
        </svg></div><div className="cl-controls"><div className="cl-mode-tabs"><button type="button" className={lightMaterial==='mirror'?'active':''} onClick={()=>setLightMaterial('mirror')}>{pick(lang,'Mirror','Specchio')}</button><button type="button" className={lightMaterial==='glass'?'active':''} onClick={()=>setLightMaterial('glass')}>{pick(lang,'Glass','Vetro')}</button><button type="button" className={lightMaterial==='wall'?'active':''} onClick={()=>setLightMaterial('wall')}>{pick(lang,'Opaque wall','Parete opaca')}</button></div><Readout label={pick(lang,'Light effect','Effetto della luce')} value={lightMaterial==='mirror'?pick(lang,'Reflects','Si riflette'):lightMaterial==='glass'?pick(lang,'Bends through glass','Si piega nel vetro'):pick(lang,'Forms a shadow','Forma un’ombra')}/></div></div>
      </section>
    );
  }

  if (missionId === 'g5e-stem-light') {
    return (
      <section className="chem-lab" aria-label={pick(lang,'Light Experiment Lab','Laboratorio sperimentale sulla luce')}>
        <header className="cl-heading"><span className="cl-kicker">{pick(lang,'INTERACTIVE SCIENCE LAB','LABORATORIO INTERATTIVO DI SCIENZE')}</span><h3>{pick(lang,'Design a Light Test','Progetta una prova sulla luce')}</h3></header>
        <div className="cl-grid"><div className="cl-visual"><svg viewBox="0 0 360 205" role="img" aria-label={pick(lang,'Light shadow or colour experiment','Esperimento sull’ombra o sui colori')}>
          <rect x="18" y="18" width="324" height="169" rx="18" fill="rgba(16,22,58,.95)" stroke="#8a7bff"/>
          {lightActivity==='shadow'?<><circle cx="62" cy="102" r="25" fill="#ffd166"/><rect x="154" y="65" width="42" height="75" fill="#45d8ff" stroke="#fff"/><path d="M196 65L310 52M196 140L310 153" fill="#10143a" stroke="#10143a" strokeWidth="55"/></>:<>{['#ff4d6d','#ffd166','#38ef7d','#45d8ff','#8a7bff'].map((c,i)=><circle key={c} cx={100+i*40} cy="102" r="22" fill={c}/>)}</>}
        </svg></div><div className="cl-controls"><div className="cl-mode-tabs"><button type="button" className={lightActivity==='shadow'?'active':''} onClick={()=>setLightActivity('shadow')}>{pick(lang,'Shadow','Ombra')}</button><button type="button" className={lightActivity==='colour'?'active':''} onClick={()=>setLightActivity('colour')}>{pick(lang,'Colour wheel','Ruota dei colori')}</button></div><Analogy lang={lang} en="Predict first, test safely, and record exactly what you observe." it="Prevedi prima, prova in sicurezza e registra esattamente ciò che osservi."/></div></div>
      </section>
    );
  }

  if (missionId === 'g5e-sound') {
    return (
      <section className="chem-lab" aria-label={pick(lang,'Sound Wave Lab','Laboratorio delle onde sonore')}>
        <header className="cl-heading"><span className="cl-kicker">{pick(lang,'INTERACTIVE SCIENCE LAB','LABORATORIO INTERATTIVO DI SCIENZE')}</span><h3>{pick(lang,'See the Sound Vibrate','Vedi vibrare il suono')}</h3></header>
        <div className="cl-grid"><div className="cl-visual"><svg viewBox="0 0 360 205" role="img" aria-label={pick(lang,'Sound wave frequency','Frequenza di un’onda sonora')}>
          <rect x="18" y="18" width="324" height="169" rx="18" fill="rgba(16,22,58,.95)" stroke="#8a7bff"/>
          <path d={`M35 102 ${Array.from({length:50},(_,i)=>{const x=35+i*6; const y=102-Math.sin(i*(soundFrequency/50))*28; return `L${x} ${y}`}).join(' ')}`} fill="none" stroke="#45d8ff" strokeWidth="4" className="chem-anim-dash"/>
          <text x="180" y="176" textAnchor="middle" fill="#fff" fontSize="12">{pick(lang,'Higher vibration = higher pitch','Maggiore vibrazione = tono più alto')}</text>
        </svg></div><div className="cl-controls"><Slider label={pick(lang,'Vibration frequency','Frequenza di vibrazione')} value={soundFrequency} min={10} max={100} step={5} unit="" lang={lang} onChange={setSoundFrequency}/><Readout label={pick(lang,'Pitch','Tono')} value={soundFrequency<40?pick(lang,'Low','Basso'):soundFrequency<75?pick(lang,'Medium','Medio'):pick(lang,'High','Alto')}/><Analogy lang={lang} en="Sound begins with vibrations and needs a material medium to travel." it="Il suono nasce dalle vibrazioni e ha bisogno di un mezzo materiale."/></div></div>
      </section>
    );
  }

  if (missionId === 'g5e-forces') {
    return (
      <section className="chem-lab" aria-label={pick(lang,'Force and Motion Lab','Laboratorio di forze e movimento')}>
        <header className="cl-heading"><span className="cl-kicker">{pick(lang,'INTERACTIVE SCIENCE LAB','LABORATORIO INTERATTIVO DI SCIENZE')}</span><h3>{pick(lang,'Push, Pull or Rub','Spingi, tira o sfrega')}</h3></header>
        <div className="cl-grid"><div className="cl-visual"><svg viewBox="0 0 360 205" role="img" aria-label={pick(lang,'Push pull and friction forces','Forze di spinta, trazione e attrito')}>
          <rect x="18" y="18" width="324" height="169" rx="18" fill="rgba(16,22,58,.95)" stroke="#8a7bff"/>
          <rect x="130" y="92" width="100" height="52" rx="10" fill="#45d8ff"/>
          {forceMode==='push'?<><path d="M70 118H125" stroke="#ffd166" strokeWidth="7"/><path d="M125 118l-18-12M125 118l-18 12" stroke="#ffd166" strokeWidth="7"/></>:forceMode==='pull'?<><path d="M230 118H290" stroke="#ffd166" strokeWidth="7"/><path d="M230 118l18-12M230 118l18 12" stroke="#ffd166" strokeWidth="7"/></>:<><path d="M100 158H260" stroke="#ff6a55" strokeWidth="5" strokeDasharray="8 5"/><path d="M130 144H230" stroke="#ffd166" strokeWidth="5"/></>}
        </svg></div><div className="cl-controls"><div className="cl-mode-tabs"><button type="button" className={forceMode==='push'?'active':''} onClick={()=>setForceMode('push')}>{pick(lang,'Push','Spinta')}</button><button type="button" className={forceMode==='pull'?'active':''} onClick={()=>setForceMode('pull')}>{pick(lang,'Pull','Trazione')}</button><button type="button" className={forceMode==='friction'?'active':''} onClick={()=>setForceMode('friction')}>{pick(lang,'Friction','Attrito')}</button></div><Analogy lang={lang} en="A force can start, stop or change motion, or change shape." it="Una forza può avviare, fermare o cambiare il movimento, oppure cambiare la forma."/></div></div>
      </section>
    );
  }

  if (missionId === 'g5e-magnetism') {
    return (
      <section className="chem-lab" aria-label={pick(lang,'Magnet Poles Lab','Laboratorio dei poli magnetici')}>
        <header className="cl-heading"><span className="cl-kicker">{pick(lang,'INTERACTIVE SCIENCE LAB','LABORATORIO INTERATTIVO DI SCIENZE')}</span><h3>{pick(lang,'Bring the Poles Together','Avvicina i poli')}</h3></header>
        <div className="cl-grid"><div className="cl-visual"><svg viewBox="0 0 360 205" role="img" aria-label={pick(lang,'Magnetic attraction or repulsion','Attrazione o repulsione magnetica')}>
          <rect x="18" y="18" width="324" height="169" rx="18" fill="rgba(16,22,58,.95)" stroke="#8a7bff"/>
          <rect x={magnetPoles==='ns'?75:65} y="78" width="100" height="54" rx="12" fill="#ff5d8f"/><rect x="185" y="78" width="100" height="54" rx="12" fill="#45d8ff"/>
          <text x={magnetPoles==='ns'?125:115} y="112" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="900">N</text><text x="235" y="112" textAnchor="middle" fill="#10143a" fontSize="20" fontWeight="900">{magnetPoles==='ns'?'S':'N'}</text>
          {[0,1,2].map(i=><path key={i} d={`M${magnetPoles==='ns'?175:155+i*12} ${85+i*12}Q${magnetPoles==='ns'?190:205} ${75+i*12} ${magnetPoles==='ns'?205:235-i*12} ${85+i*12}`} fill="none" stroke="#ffd166" strokeWidth="2" opacity=".8"/>)}
        </svg></div><div className="cl-controls"><div className="cl-mode-tabs"><button type="button" className={magnetPoles==='ns'?'active':''} onClick={()=>setMagnetPoles('ns')}>{pick(lang,'N facing S','Nord davanti a Sud')}</button><button type="button" className={magnetPoles==='nn'?'active':''} onClick={()=>setMagnetPoles('nn')}>{pick(lang,'N facing N','Nord davanti a Nord')}</button></div><Readout label={pick(lang,'Result','Risultato')} value={magnetPoles==='ns'?pick(lang,'Attract','Attrazione'):pick(lang,'Repel','Repulsione')}/><Analogy lang={lang} en="Opposite poles attract; like poles repel." it="I poli opposti si attraggono; i poli uguali si respingono."/></div></div>
      </section>
    );
  }

  if (missionId === 'g5e-stem-magnets') {
    const magnetic = magnetMaterial === 'steel';
    return (
      <section className="chem-lab" aria-label={pick(lang,'Magnetic Material Test Lab','Laboratorio sui materiali magnetici')}>
        <header className="cl-heading"><span className="cl-kicker">{pick(lang,'INTERACTIVE SCIENCE LAB','LABORATORIO INTERATTIVO DI SCIENZE')}</span><h3>{pick(lang,'Test a Classroom Object','Prova un oggetto della classe')}</h3></header>
        <div className="cl-grid"><div className="cl-visual"><svg viewBox="0 0 360 205" role="img" aria-label={pick(lang,'Magnet test for everyday materials','Test con magnete su materiali quotidiani')}>
          <rect x="18" y="18" width="324" height="169" rx="18" fill="rgba(16,22,58,.95)" stroke="#8a7bff"/>
          <rect x="55" y="82" width="92" height="52" rx="10" fill="#ff5d8f"/><text x="101" y="114" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="900">N</text>
          <rect x="215" y="82" width="92" height="52" rx="10" fill={magnetic?'#aab0c0':magnetMaterial==='aluminium'?'#dfe7ff':'#38ef7d'} stroke="#fff" strokeWidth="3"/>
          {magnetic&&<path d="M147 108H215" stroke="#ffd166" strokeWidth="5" strokeDasharray="7 5" className="chem-anim-dash"/>}
          <text x="261" y="114" textAnchor="middle" fill="#10143a" fontSize="11" fontWeight="900">{magnetMaterial.toUpperCase()}</text>
        </svg></div><div className="cl-controls"><div className="cl-mode-tabs"><button type="button" className={magnetMaterial==='steel'?'active':''} onClick={()=>setMagnetMaterial('steel')}>{pick(lang,'Steel','Acciaio')}</button><button type="button" className={magnetMaterial==='plastic'?'active':''} onClick={()=>setMagnetMaterial('plastic')}>{pick(lang,'Plastic','Plastica')}</button><button type="button" className={magnetMaterial==='aluminium'?'active':''} onClick={()=>setMagnetMaterial('aluminium')}>{pick(lang,'Aluminium','Alluminio')}</button></div><Readout label={pick(lang,'Test result','Risultato')} value={magnetic?pick(lang,'Attracted','Attratto'):pick(lang,'Not attracted','Non attratto')}/></div></div>
      </section>
    );
  }

  if (missionId === 'g5e-levers') {
    const easy = leverPosition > 65;
    return (
      <section className="chem-lab" aria-label={pick(lang,'Lever Lab','Laboratorio delle leve')}>
        <header className="cl-heading"><span className="cl-kicker">{pick(lang,'INTERACTIVE SCIENCE LAB','LABORATORIO INTERATTIVO DI SCIENZE')}</span><h3>{pick(lang,'Move the Effort and Lift the Load','Sposta la forza e solleva il carico')}</h3></header>
        <div className="cl-grid"><div className="cl-visual"><svg viewBox="0 0 360 205" role="img" aria-label={pick(lang,'Lever with fulcrum and load','Leva con fulcro e carico')}>
          <rect x="18" y="18" width="324" height="169" rx="18" fill="rgba(16,22,58,.95)" stroke="#8a7bff"/>
          <line x1="60" y1={easy?90:125} x2="300" y2={easy?125:90} stroke="#ffd166" strokeWidth="8" strokeLinecap="round"/>
          <path d="M180 125l-28 42h56z" fill="#45d8ff"/><rect x="70" y="62" width="38" height="38" rx="6" fill="#ff6a55"/>
          <circle cx={60+leverPosition*2.4} cy={easy?78:136} r="12" fill="#38ef7d" className="chem-anim-pulse"/>
          <text x="180" y="184" textAnchor="middle" fill="#fff" fontSize="12">{pick(lang,'Fulcrum','Fulcro')} · {pick(lang,'effort moves','la forza si sposta')}</text>
        </svg></div><div className="cl-controls"><Slider label={pick(lang,'Effort distance','Distanza della forza')} value={leverPosition} min={10} max={90} step={5} unit="" lang={lang} onChange={setLeverPosition}/><Readout label={pick(lang,'Lever effect','Effetto della leva')} value={easy?pick(lang,'Easier to lift','Più facile sollevare'):pick(lang,'More effort needed','Serve più forza')}/><Analogy lang={lang} en="A longer effort arm can make a lever easier to turn." it="Un braccio della forza più lungo può rendere la leva più facile da girare."/></div></div>
      </section>
    );
  }

  if (missionId === 'g5e-geopark-review') {
    const reviewCopy = geoparkTopic==='energy'
      ? [pick(lang,'Energy makes changes','L’energia rende possibili i cambiamenti'),pick(lang,'Sources, forms and transformations','Fonti, forme e trasformazioni')]
      : geoparkTopic==='light'
        ? [pick(lang,'Light reflects and refracts','La luce si riflette e si rifrange'),pick(lang,'Sound comes from vibrations','Il suono nasce dalle vibrazioni')]
        : [pick(lang,'Forces change motion','Le forze cambiano il movimento'),pick(lang,'Gravity, magnetism and levers','Gravità, magnetismo e leve')];
    return (
      <section className="chem-lab" aria-label={pick(lang,'Energy and Forces Review Lab','Laboratorio di ripasso su energia e forze')}>
        <header className="cl-heading"><span className="cl-kicker">{pick(lang,'INTERACTIVE SCIENCE LAB','LABORATORIO INTERATTIVO DI SCIENZE')}</span><h3>{pick(lang,'Build the Review Map','Costruisci la mappa di ripasso')}</h3></header>
        <div className="cl-grid"><div className="cl-visual"><svg viewBox="0 0 360 205" role="img" aria-label={pick(lang,'Energy forces and landscape knowledge map','Mappa su energia, forze e paesaggio')}>
          <rect x="18" y="18" width="324" height="169" rx="18" fill="rgba(16,22,58,.95)" stroke="#8a7bff"/>
          <circle cx="180" cy="102" r="42" fill="#ffd166"/><circle cx="78" cy="60" r="24" fill="#45d8ff"/><circle cx="282" cy="60" r="24" fill="#38ef7d"/><circle cx="180" cy="158" r="24" fill="#ff6a55"/>
          <path d="M138 82L92 70M222 82l46-12M180 138v-17" stroke="#fff" strokeWidth="3"/>
          <text x="180" y="108" textAnchor="middle" fill="#10143a" fontSize="12" fontWeight="900">{pick(lang,'SCIENCE','SCIENZE')}</text>
        </svg></div><div className="cl-controls"><div className="cl-mode-tabs"><button type="button" className={geoparkTopic==='energy'?'active':''} onClick={()=>setGeoparkTopic('energy')}>{pick(lang,'Energy','Energia')}</button><button type="button" className={geoparkTopic==='light'?'active':''} onClick={()=>setGeoparkTopic('light')}>{pick(lang,'Light & sound','Luce e suono')}</button><button type="button" className={geoparkTopic==='forces'?'active':''} onClick={()=>setGeoparkTopic('forces')}>{pick(lang,'Forces','Forze')}</button></div><Readout label={pick(lang,'Main idea','Idea principale')} value={reviewCopy[0]}/><Readout label={pick(lang,'Key detail','Dettaglio chiave')} value={reviewCopy[1]}/></div></div>
      </section>
    );
  }
  return null;
};
