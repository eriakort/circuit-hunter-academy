import React, { useState } from 'react';
import type { Language } from '../types';
import { Analogy, pick, Readout, Slider } from './chemLabs/chemLabShared';

type Props = { missionId: string; lang: Language };

export const ScienceLab: React.FC<Props> = ({ missionId, lang }) => {
  const [sunlight, setSunlight] = useState(70);
  const [water, setWater] = useState(65);
  const [animalIdx, setAnimalIdx] = useState(0);

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

  return null;
};
