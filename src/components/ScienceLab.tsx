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
  return null;
};
