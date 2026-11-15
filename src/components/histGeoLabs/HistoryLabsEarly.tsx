import React, { useState } from 'react';
import type { Language } from '../../types';
import { Analogy, PlayToggle, Readout, Slider, fmt, pick } from '../chemLabs/chemLabShared';

type Props = { lang: Language };

// hist_g5_m1 — Greek Polis & Athens vs Sparta
export const PolisExplorerLab: React.FC<Props> = ({ lang }) => {
  const [city, setCity] = useState<'athens' | 'sparta'>('athens');
  const [zone, setZone] = useState<'acropolis' | 'agora' | 'chora'>('agora');
  const zoneInfo = {
    acropolis: [
      'Sacred hilltop fortress & marble temples towering safely above.',
      'Collina fortificata in alto con i templi sacri protetti.'
    ],
    agora: [
      'Bustling lower square for markets, debate, and citizen votes.',
      'Piazza centrale in basso per mercati, assemblee e votazioni.'
    ],
    chora: [
      'Surrounding olive groves, barley farms, and trading harbor.',
      'Campagne con ulivi, campi d’orzo e porto sul mare.'
    ]
  };
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Greek Polis interactive hillside', 'Collina della Polis greca')}>
          <path d="M20 160 L95 55 L185 160 Z" fill={zone === 'acropolis' ? 'rgba(255,209,102,0.34)' : 'rgba(255,209,102,0.1)'} stroke="#ffd166" strokeWidth="2" />
          <path d="M74 55 h42 M80 55 v-16 M95 55 v-16 M110 55 v-16 M70 39 l25-14 l25 14 Z" fill="none" stroke="#ffd166" strokeWidth="2" />
          <rect x="195" y="102" width="76" height="58" rx="8" fill={zone === 'agora' ? 'rgba(69,216,255,0.3)' : 'rgba(69,216,255,0.1)'} stroke="#45d8ff" strokeWidth="2" />
          <rect x="280" y="122" width="66" height="38" rx="8" fill={zone === 'chora' ? 'rgba(56,239,125,0.3)' : 'rgba(56,239,125,0.1)'} stroke="#38ef7d" strokeWidth="2" />
          <text x="95" y="138" textAnchor="middle" fill="#ffd166" fontSize="11" fontWeight="700">{pick(lang, 'ACROPOLIS', 'ACROPOLI')}</text>
          <text x="233" y="136" textAnchor="middle" fill="#45d8ff" fontSize="11" fontWeight="700">AGORÀ</text>
          <text x="313" y="146" textAnchor="middle" fill="#38ef7d" fontSize="11" fontWeight="700">CHORA</text>
          <rect x="20" y="16" width="324" height="22" rx="6" fill="rgba(255,255,255,0.05)" />
          <text x="182" y="31" textAnchor="middle" fill={city === 'athens' ? '#45d8ff' : '#ff6b8b'} fontSize="11" fontWeight="700">
            {city === 'athens'
              ? pick(lang, 'Athens · Citizen Assembly + Navy', 'Atene · Assemblea dei Cittadini + Flotta')
              : pick(lang, 'Sparta · Dual Kings + Hoplite Army', 'Sparta · 2 Re + Esercito Oplitico')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${city === 'athens' ? 'primary' : ''}`} onClick={() => setCity('athens')}>🦉 Athens</button>
          <button type="button" className={`cl-btn ${city === 'sparta' ? 'primary' : ''}`} onClick={() => setCity('sparta')}>🛡️ Sparta</button>
        </div>
        <div className="cl-row">
          <button type="button" className={`cl-btn ${zone === 'acropolis' ? 'primary' : ''}`} onClick={() => setZone('acropolis')}>{pick(lang, 'Acropolis', 'Acropoli')}</button>
          <button type="button" className={`cl-btn ${zone === 'agora' ? 'primary' : ''}`} onClick={() => setZone('agora')}>Agorà</button>
          <button type="button" className={`cl-btn ${zone === 'chora' ? 'primary' : ''}`} onClick={() => setZone('chora')}>Chora</button>
        </div>
        <Readout label={pick(lang, 'Active Zone', 'Zona Attiva')} value={pick(lang, zoneInfo[zone][0], zoneInfo[zone][1])} />
        <Analogy
          lang={lang}
          en="Think of a polis as a compact neighborhood town with its town square, castle hill, and surrounding farms."
          it="Pensa alla polis come a una piccola città completa: collina protetta, piazza civica e campagne intorno."
        />
      </div>
    </div>
  );
};

// hist_g5_m2 — Etruscan Arch & Structural Load Simulator
export const EtruscanArchBuilderLab: React.FC<Props> = ({ lang }) => {
  const [keystone, setKeystone] = useState(true);
  const [loadTons, setLoadTons] = useState(12);
  const perPillar = keystone ? loadTons / 2 : 0;
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Etruscan keystone arch weight simulator', 'Simulatore arco a tutto sesto')}>
          <path d="M90 165 L90 95 A75 65 0 0 1 240 95 L240 165" fill="none" stroke={keystone ? '#ffd166' : '#ff6b8b'} strokeWidth="18" />
          {keystone ? (
            <polygon points="165,18 182,42 148,42" fill="#38ef7d" />
          ) : (
            <text x="165" y="42" textAnchor="middle" fill="#ff6b8b" fontSize="14" fontWeight="800">⚠️ NO KEYSTONE!</text>
          )}
          <text x="165" y="138" textAnchor="middle" fill="#45d8ff" fontSize="12" fontWeight="700">
            {keystone ? pick(lang, 'Arch Locked ✓', 'Arco Stabile ✓') : pick(lang, 'Unstable Gap ✕', 'Crollo senza Chiave ✕')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${keystone ? 'primary' : ''}`} onClick={() => setKeystone(true)}>{pick(lang, 'Insert Keystone', 'Inserisci Chiave di Volta')}</button>
          <button type="button" className={`cl-btn ${!keystone ? 'primary' : ''}`} onClick={() => setKeystone(false)}>{pick(lang, 'Remove Keystone', 'Togli Chiave')}</button>
        </div>
        <Slider label={pick(lang, 'Bridge weight load', 'Carico sul ponte')} value={loadTons} min={4} max={30} unit="t" lang={lang} onChange={setLoadTons} />
        <Readout
          label={pick(lang, 'Force per side pier', 'Spinta su ciascun pilastro')}
          value={keystone ? `${fmt(lang, perPillar, 1)} t ✓` : pick(lang, 'Collapses!', 'Crolla senza chiave!')}
        />
        <Analogy
          lang={lang}
          en="Each wedge stone presses tighter against its neighbor like hands clapping in a curve."
          it="Ogni blocco spinge verso i fianchi scaricando il peso a terra: per questo ponti ed acquedotti durano millenni!"
        />
      </div>
    </div>
  );
};

// hist_g5_m3 — Roman Patricians vs Plebeians Tribune Veto
export const RepublicBalanceLab: React.FC<Props> = ({ lang }) => {
  const [era, setEra] = useState<'before494' | 'after494'>('after494');
  const [vetoed, setVetoed] = useState(false);
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Patrician vs Plebeian veto balance', 'Equilibrio Patrizi e Plebei')}>
          <rect x="25" y="34" width="140" height="72" rx="10" fill="rgba(255,209,102,0.14)" stroke="#ffd166" />
          <text x="95" y="64" textAnchor="middle" fill="#ffd166" fontSize="12" fontWeight="700">{pick(lang, 'Patrician Senate', 'Senato Patrizio')}</text>
          <text x="95" y="88" textAnchor="middle" fill="#9fb0c8" fontSize="10">{pick(lang, 'Proposes heavy debt law', 'Propone legge sui debiti')}</text>
          <rect x="195" y="34" width="140" height="72" rx="10" fill={era === 'after494' ? 'rgba(56,239,125,0.14)' : 'rgba(255,107,139,0.12)'} stroke={era === 'after494' ? '#38ef7d' : '#ff6b8b'} />
          <text x="265" y="64" textAnchor="middle" fill={era === 'after494' ? '#38ef7d' : '#ff6b8b'} fontSize="12" fontWeight="700">
            {era === 'after494' ? pick(lang, 'Plebeian Tribunes', 'Tribuni della Plebe') : pick(lang, 'No Protectors', 'Senza Tutela')}
          </text>
          <text x="265" y="88" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800">
            {era === 'after494' && vetoed ? '✋ VETO! ("I forbid!")' : era === 'after494' ? pick(lang, 'Ready to protect', 'Pronti a intervenire') : pick(lang, '494 BCE Strike!', 'Secessione 494 a.C.!')}
          </text>
          <text x="180" y="152" textAnchor="middle" fill="#45d8ff" fontSize="11" fontWeight="700">
            {pick(lang, '450 BCE: Twelve Tables engraved public law for all', '450 a.C.: XII Tavole scritte per tutti i cittadini')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${era === 'before494' ? 'primary' : ''}`} onClick={() => { setEra('before494'); setVetoed(false); }}>{pick(lang, 'Before 494 BCE', 'Prima del 494 a.C.')}</button>
          <button type="button" className={`cl-btn ${era === 'after494' ? 'primary' : ''}`} onClick={() => setEra('after494')}>{pick(lang, 'After 494 BCE', 'Dopo il 494 a.C.')}</button>
        </div>
        {era === 'after494' && (
          <div className="cl-row">
            <button type="button" className={`cl-btn ${vetoed ? 'primary' : ''}`} onClick={() => setVetoed(v => !v)}>✋ {pick(lang, 'Toggle Tribune VETO', 'Attiva VETO del Tribuno')}</button>
          </div>
        )}
        <Readout label={pick(lang, 'Bill Outcome', 'Esito della Legge')} value={era === 'after494' && vetoed ? pick(lang, 'Blocked by Plebeian Veto ✓', 'Fermata dal Veto ✓') : pick(lang, 'Unchecked Patrician Decree', 'Decreto non bloccato')} />
        <Analogy
          lang={lang}
          en="Imagine workers walking out peacefully until their class gets an official referee holding a red STOP card."
          it="Come uno sciopero pacifico che conquista un arbitro ufficiale capace di fermare le ingiustizie!"
        />
      </div>
    </div>
  );
};

// hist_g5_m4 — Roman Aqueduct Slope & Domus/Insulae Explorer
export const RomanCityEngineerLab: React.FC<Props> = ({ lang }) => {
  const [slopeMm, setSlopeMm] = useState(3);
  const [house, setHouse] = useState<'domus' | 'insulae'>('domus');
  const litersPerSec = slopeMm * 45;
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Roman aqueduct water flow simulator', 'Simulatore acquedotto romano')}>
          <line x1="25" y1={42 - slopeMm} x2="335" y2={50 + slopeMm * 5} stroke="#45d8ff" strokeWidth="6" />
          <path d="M40 165 v-65 a22 22 0 0 1 44 0 v65 M115 165 v-60 a22 22 0 0 1 44 0 v60 M190 165 v-55 a22 22 0 0 1 44 0 v60 M265 165 v-50 a22 22 0 0 1 44 0 v60" fill="none" stroke="#ffd166" strokeWidth="4" />
          <rect x="25" y="138" width="310" height="36" rx="8" fill="rgba(56,239,125,0.1)" stroke="#38ef7d" />
          <text x="180" y="160" textAnchor="middle" fill="#38ef7d" fontSize="11" fontWeight="700">
            {house === 'domus'
              ? pick(lang, 'DOMUS: Atrium, impluvium rainwater & private garden', 'DOMUS: Atrio, vasca impluvium e giardino privato')
              : pick(lang, 'INSULAE: Multi-story worker apartments + ground shops', 'INSULAE: Condomini popolari e botteghe al piano terra')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, 'Aqueduct drop (mm / meter)', 'Pendenza acquedotto (mm/m)')} value={slopeMm} min={1} max={6} unit="mm/m" lang={lang} onChange={setSlopeMm} />
        <div className="cl-row">
          <button type="button" className={`cl-btn ${house === 'domus' ? 'primary' : ''}`} onClick={() => setHouse('domus')}>🏛️ Domus</button>
          <button type="button" className={`cl-btn ${house === 'insulae' ? 'primary' : ''}`} onClick={() => setHouse('insulae')}>🏢 Insulae</button>
        </div>
        <Readout label={pick(lang, 'City Fountain Flow', 'Portata alle Fontane')} value={`${litersPerSec} L/s`} />
        <Analogy
          lang={lang}
          en="Just a few millimeters of tilt per meter let pure mountain spring water glide 80 km without electric pumps!"
          it="Bastano pochi millimetri di pendenza per metro per portare acqua fresca per 80 km senza pompe!"
        />
      </div>
    </div>
  );
};

// hist_l1_m1 — Prehistory Paleolithic vs Neolithic & Metals
export const PrehistoryShiftLab: React.FC<Props> = ({ lang }) => {
  const [era, setEra] = useState<'paleo' | 'neo' | 'bronze' | 'iron'>('neo');
  const meta = {
    paleo: { ppl: '25', temp: '400 °C', note: ['Small nomadic bands hunt & gather wild berries', 'Piccoli gruppi nomadi: caccia e raccolta'] },
    neo: { ppl: '250', temp: '700 °C', note: ['Settled wheat & herding create stored winter surplus!', 'Agricoltura e allevamento creano scorte e villaggi!'] },
    bronze: { ppl: '1 200', temp: '1 085 °C', note: ['Copper + Tin alloy produces tough tools & long trade routes', 'Lega Rame + Stagno: aratri robusti e grandi scambi'] },
    iron: { ppl: '4 500+', temp: '1 538 °C', note: ['Abundant hot-forged iron reaches every farmer & army', 'Ferro abbondante: attrezzi resistenti diffusi ovunque'] }
  }[era];
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Prehistory era comparison', 'Confronto ere della preistoria')}>
          <rect x="20" y="20" width="320" height="150" rx="12" fill="rgba(255,255,255,0.03)" stroke="#38ef7d" />
          <text x="180" y="54" textAnchor="middle" fill="#ffd166" fontSize="15" fontWeight="800">{pick(lang, `Village Capacity: ~${meta.ppl}`, `Abitanti sostenibili: ~${meta.ppl}`)}</text>
          <text x="180" y="92" textAnchor="middle" fill="#45d8ff" fontSize="13" fontWeight="700">{pick(lang, `Kiln / Hearth Heat: ${meta.temp}`, `Temperatura forni: ${meta.temp}`)}</text>
          <text x="180" y="132" textAnchor="middle" fill="#ffffff" fontSize="11">{pick(lang, meta.note[0], meta.note[1])}</text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${era === 'paleo' ? 'primary' : ''}`} onClick={() => setEra('paleo')}>{pick(lang, 'Paleolithic', 'Paleolitico')}</button>
          <button type="button" className={`cl-btn ${era === 'neo' ? 'primary' : ''}`} onClick={() => setEra('neo')}>{pick(lang, 'Neolithic', 'Neolitico')}</button>
          <button type="button" className={`cl-btn ${era === 'bronze' ? 'primary' : ''}`} onClick={() => setEra('bronze')}>{pick(lang, 'Bronze Age', 'Bronzo')}</button>
          <button type="button" className={`cl-btn ${era === 'iron' ? 'primary' : ''}`} onClick={() => setEra('iron')}>{pick(lang, 'Iron Age', 'Ferro')}</button>
        </div>
        <Readout label={pick(lang, 'Surplus & Crafts', 'Eccedenze e Mestieri')} value={pick(lang, meta.note[0], meta.note[1])} />
        <Analogy
          lang={lang}
          en="Once farming filled granaries, not everyone had to hunt—freeing artisans, potters, and early builders!"
          it="Quando i granai furono pieni, non tutti dovettero cercare cibo ogni giorno: nacquero vasai, tessitori e fabbri!"
        />
      </div>
    </div>
  );
};

// hist_l1_m2 — Nile & Tigris Irrigation Canal Simulator
export const RiverSurplusCuneiformLab: React.FC<Props> = ({ lang }) => {
  const [canalLevel, setCanalLevel] = useState(70);
  const harvest = Math.round(canalLevel * 1.4);
  const scribes = Math.max(1, Math.floor(harvest / 25));
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Mesopotamia & Nile irrigation canals', 'Canali di irrigazione e scrittura')}>
          <rect x="20" y="25" width="320" height="44" rx="8" fill="rgba(69,216,255,0.22)" stroke="#45d8ff" />
          <text x="180" y="52" textAnchor="middle" fill="#45d8ff" fontSize="13" fontWeight="800">🌊 {pick(lang, 'Tigris / Euphrates / Nile Flood', 'Piena di Nilo / Tigri ed Eufrate')}</text>
          <rect x="45" y="70" width={Math.max(30, canalLevel * 2.5)} height="14" rx="4" fill="#38ef7d" />
          <text x="180" y="114" textAnchor="middle" fill="#ffd166" fontSize="13" fontWeight="700">🌾 {pick(lang, `Grain Surplus Index: ${harvest}`, `Raccolto di Grano: ${harvest} ceste`)}</text>
          <text x="180" y="148" textAnchor="middle" fill="#ffffff" fontSize="12">📜 {pick(lang, `Supports ${scribes} temple scribes tracking clay accounts!`, `Mantiene ${scribes} scribi per conti su argilla e papiro!`)}</text>
        </svg>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, 'Shared irrigation canal network', 'Rete di canali condivisi')} value={canalLevel} min={10} max={100} unit="%" lang={lang} onChange={setCanalLevel} />
        <Readout label={pick(lang, 'City Specialization', 'Specializzazione Urbana')} value={`${scribes} ${pick(lang, 'cuneiform / hieroglyph scribes', 'scribi attivi')}`} />
        <Analogy
          lang={lang}
          en="Writing wasn’t invented for novels first—it started as warehouse receipts to count sacks of barley!"
          it="La scrittura nacque anzitutto per la contabilità pratica: registrare sacchi di grano e tasse sui magazzini!"
        />
      </div>
    </div>
  );
};

// hist_l1_m3 — Hieroglyph 700 Signs vs Phoenician/Greek 24 Letters
export const AlphabetDecodeLab: React.FC<Props> = ({ lang }) => {
  const [system, setSystem] = useState<'cuneiform' | 'phoenician' | 'greek'>('phoenician');
  const data = {
    cuneiform: { signs: 700, weeks: 180, vowels: false, label: ['Cuneiform / Hieroglyphs', 'Cuneiforme / Geroglifici'] },
    phoenician: { signs: 22, weeks: 6, vowels: false, label: ['Phoenician Consonants', 'Alfabeto Fenicio'] },
    greek: { signs: 24, weeks: 4, vowels: true, label: ['Greek (+ Vowels!)', 'Greco (+ Vocali!)'] }
  }[system];
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Alphabet sign count comparison', 'Confronto numero di segni scrittura')}>
          <rect x="20" y="20" width="320" height="150" rx="12" fill="rgba(168,139,255,0.08)" stroke="#a88bff" />
          <text x="180" y="54" textAnchor="middle" fill="#ffd166" fontSize="15" fontWeight="800">{pick(lang, data.label[0], data.label[1])}</text>
          <text x="180" y="92" textAnchor="middle" fill="#45d8ff" fontSize="22" fontWeight="800">{data.signs} {pick(lang, 'signs', 'segni')}</text>
          <text x="180" y="128" textAnchor="middle" fill="#38ef7d" fontSize="12" fontWeight="700">{pick(lang, `~${data.weeks} months to master · Vowels: ${data.vowels ? 'YES' : 'NO'}`, `~${data.weeks} mesi di studio · Vocali: ${data.vowels ? 'SÌ' : 'NO'}`)}</text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${system === 'cuneiform' ? 'primary' : ''}`} onClick={() => setSystem('cuneiform')}>700</button>
          <button type="button" className={`cl-btn ${system === 'phoenician' ? 'primary' : ''}`} onClick={() => setSystem('phoenician')}>22 ({pick(lang, 'Phoenician', 'Fenicio')})</button>
          <button type="button" className={`cl-btn ${system === 'greek' ? 'primary' : ''}`} onClick={() => setSystem('greek')}>24 ({pick(lang, 'Greek', 'Greco')})</button>
        </div>
        <Readout label={pick(lang, 'Who Can Read?', 'Chi sa Leggere?')} value={data.signs < 30 ? pick(lang, 'Merchants & everyday citizens!', 'Mercanti e cittadini comuni!') : pick(lang, 'Full-time royal scribes only', 'Solo scribi di corte')} />
        <Analogy
          lang={lang}
          en="Shrinking 700 picture signs down to 22–24 sound letters unlocked reading for everyone—like going from giant manuals to an app keyboard."
          it="Passare da 700 simboli a 22–24 lettere sonore fu come passare da un’enciclopedia alla tastiera dello smartphone!"
        />
      </div>
    </div>
  );
};

// hist_l1_m4 — Hoplite Phalanx Cohesion & Magna Graecia
export const MinoanMycenaeanPhalanxLab: React.FC<Props> = ({ lang }) => {
  const [locked, setLocked] = useState(true);
  const [playing, setPlaying] = useState(true);
  return (
    <div className="cl-grid">
      <div className={`cl-visual ${playing ? '' : 'chem-paused'}`}>
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Hoplite phalanx locked shields', 'Falange oplitica con scudi uniti')}>
          {[0, 1, 2, 3, 4].map(i => (
            <circle
              key={i}
              cx={locked ? 95 + i * 40 : 60 + i * 62}
              cy="92"
              r="24"
              fill={locked ? 'rgba(56,239,125,0.22)' : 'rgba(255,107,139,0.22)'}
              stroke={locked ? '#38ef7d' : '#ff6b8b'}
              strokeWidth="3"
              className="chem-anim-float"
            />
          ))}
          <text x="180" y="152" textAnchor="middle" fill="#ffd166" fontSize="12" fontWeight="700">
            {locked
              ? pick(lang, 'Unbreakable Wall! Half of each shield covers your neighbor', 'Muro Invalicabile! Ogni scudo protegge il fianco del compagno')
              : pick(lang, 'Gaps Open! Individual heroes leave flanks exposed', 'Spazi Aperti! I guerrieri isolati restano esposti')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${locked ? 'primary' : ''}`} onClick={() => setLocked(true)}>🛡️ {pick(lang, 'Lock Phalanx', 'Chiudi Falange')}</button>
          <button type="button" className={`cl-btn ${!locked ? 'primary' : ''}`} onClick={() => setLocked(false)}>⚔️ {pick(lang, 'Scatter Solo', 'Sparsi')}</button>
          <PlayToggle playing={playing} onToggle={() => setPlaying(p => !p)} lang={lang} />
        </div>
        <Readout label={pick(lang, 'Civic Consequence', 'Effetto Politico')} value={locked ? pick(lang, 'Equal shoulder-to-shoulder citizens claim votes!', 'Chi difende insieme la polis chiede diritti uguali!') : pick(lang, 'Aristocratic duels only', 'Solo duelli tra nobili')} />
        <Analogy
          lang={lang}
          en="Fighting side-by-side made farmers realize the city depended on all of them equally—fueling democracy."
          it="Combattere spalla a spalla fece capire ai cittadini che la città si reggeva su tutti: così nacque la politica!"
        />
      </div>
    </div>
  );
};

// hist_l1_m5 — Cleisthenes Mixed Tribes & Ostracism
export const CleisthenesDemesLab: React.FC<Props> = ({ lang }) => {
  const [mixed, setMixed] = useState(true);
  const [shards, setShards] = useState(4200);
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Cleisthenes mixed tribes & ostracism shards', 'Tribù miste di Clistene e ostracismo')}>
          <rect x="20" y="24" width="320" height="72" rx="10" fill="rgba(69,216,255,0.1)" stroke="#45d8ff" />
          <text x="180" y="54" textAnchor="middle" fill="#45d8ff" fontSize="13" fontWeight="800">
            {mixed ? pick(lang, '10 Tribes = City + Coast + Hills Mixed ✓', '10 Tribù Miste: Città + Costa + Campagna ✓') : pick(lang, 'Old Rival Noble Clans ✕', 'Vecchi Clan Nobiliari Rivali ✕')}
          </text>
          <text x="180" y="78" textAnchor="middle" fill="#38ef7d" fontSize="11">
            {mixed ? pick(lang, 'Rich nobles can no longer bully local votes!', 'Nessun clan locale può più comprare i voti!') : pick(lang, 'Wealthy families control neighborhood assemblies', 'Le famiglie ricche controllano i voti locali')}
          </text>
          <rect x="20" y="108" width="320" height="62" rx="10" fill="rgba(255,209,102,0.1)" stroke="#ffd166" />
          <text x="180" y="136" textAnchor="middle" fill="#ffd166" fontSize="12" fontWeight="700">🏺 Ostraka Votes: {shards} {shards >= 6000 ? '→ 10-Yr Exile!' : '(< 6 000 Safe)'}</text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${mixed ? 'primary' : ''}`} onClick={() => setMixed(true)}>{pick(lang, 'Cleisthenes Mix', 'Riforma Clistene')}</button>
          <button type="button" className={`cl-btn ${!mixed ? 'primary' : ''}`} onClick={() => setMixed(false)}>{pick(lang, 'Old Clans', 'Vecchi Clan')}</button>
        </div>
        <Slider label={pick(lang, 'Ostracism pottery votes cast', 'Voti su coccio (ostraka)')} value={shards} min={1000} max={7500} step={500} lang={lang} onChange={setShards} />
        <Analogy
          lang={lang}
          en="Mixing every school homeroom equally prevents cliques from hijacking class elections—just like Cleisthenes’ demes!"
          it="Mescolare studenti di ogni quartiere in 10 tribù comuni impedì ai clan ricchi di comandare da soli!"
        />
      </div>
    </div>
  );
};

// hist_l1_m6 — Eratosthenes Earth Measurement at Alexandria
export const AlexanderAlexandriaLab: React.FC<Props> = ({ lang }) => {
  const [angleDeg, setAngleDeg] = useState(7);
  const circKm = Math.round((360 / angleDeg) * 800);
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Eratosthenes shadow angle Earth circumference', 'Misura della Terra di Eratostene')}>
          <circle cx="150" cy="108" r="58" fill="rgba(69,216,255,0.12)" stroke="#45d8ff" strokeWidth="2" />
          <line x1="150" y1="50" x2="150" y2="108" stroke="#ffd166" strokeWidth="2" />
          <line x1="150" y1="108" x2="205" y2="92" stroke="#38ef7d" strokeWidth="2" />
          <text x="180" y="30" textAnchor="middle" fill="#ffd166" fontSize="13" fontWeight="800">{pick(lang, `Alexandria Noon Shadow: ${angleDeg}°`, `Ombra a Alessandria: ${angleDeg}°`)}</text>
          <text x="278" y="96" textAnchor="middle" fill="#38ef7d" fontSize="16" fontWeight="800">≈ {circKm.toLocaleString()} km</text>
          <text x="278" y="122" textAnchor="middle" fill="#9fb0c8" fontSize="10">{pick(lang, 'Distance ≈ 800 km', 'Distanza ≈ 800 km')}</text>
        </svg>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, 'Alexandria shadow angle vs Syene 0°', 'Angolo ombra ad Alessandria')} value={angleDeg} min={5} max={12} unit="°" lang={lang} onChange={setAngleDeg} />
        <Readout label={pick(lang, 'Calculated Earth Circumference', 'Circonferenza Calcolata')} value={`${circKm.toLocaleString()} km (${pick(lang, 'real ≈ 40 075 km', 'reale ≈ 40 075 km')})`} />
        <Analogy
          lang={lang}
          en="With zero satellites—just a wooden stick, camels, and clever math—Alexandria scientists measured Earth within 2%!"
          it="Senza alcun satellite—solo un palo al sole, passi misurati e geometria—calcolò il raggio terrestre nel 240 a.C.!"
        />
      </div>
    </div>
  );
};

// hist_l1_m7 — SPQR Mixed Republic Check Simulator
export const SpqrCheckVetoLab: React.FC<Props> = ({ lang }) => {
  const [consulA, setConsulA] = useState<'approve' | 'veto'>('approve');
  const [tribune, setTribune] = useState<'approve' | 'veto'>('approve');
  const blocked = consulA === 'veto' || tribune === 'veto';
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'SPQR mutual checks and veto', 'Controlli reciproci nella Repubblica romana')}>
          <rect x="20" y="24" width="145" height="62" rx="10" fill="rgba(255,209,102,0.12)" stroke="#ffd166" />
          <text x="92" y="54" textAnchor="middle" fill="#ffd166" fontSize="12" fontWeight="700">Consul II: {consulA === 'veto' ? '✋ VETO' : '✓ OK'}</text>
          <rect x="195" y="24" width="145" height="62" rx="10" fill="rgba(56,239,125,0.12)" stroke="#38ef7d" />
          <text x="267" y="54" textAnchor="middle" fill="#38ef7d" fontSize="12" fontWeight="700">Tribune: {tribune === 'veto' ? '✋ VETO' : '✓ OK'}</text>
          <rect x="35" y="108" width="290" height="58" rx="10" fill={blocked ? 'rgba(255,107,139,0.14)' : 'rgba(69,216,255,0.14)'} stroke={blocked ? '#ff6b8b' : '#45d8ff'} />
          <text x="180" y="142" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="800">
            {blocked ? pick(lang, 'DECREE HALTED · NO ONE-MAN TYRANNY!', 'ATTO FERMATO · NESSUN POTERE ASSOLUTO!') : pick(lang, 'Proposal Approved by Consensus ✓', 'Proposta Approvata da Entrambi ✓')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${consulA === 'veto' ? 'primary' : ''}`} onClick={() => setConsulA(v => (v === 'veto' ? 'approve' : 'veto'))}>{pick(lang, 'Consul II Veto', 'Veto Console II')}</button>
          <button type="button" className={`cl-btn ${tribune === 'veto' ? 'primary' : ''}`} onClick={() => setTribune(v => (v === 'veto' ? 'approve' : 'veto'))}>{pick(lang, 'Plebeian Tribune Veto', 'Veto Tribuno Plebe')}</button>
        </div>
        <Readout label={pick(lang, 'SPQR Guardrail', 'Freno Repubblicano')} value={blocked ? pick(lang, 'Checked by colleague or plebeians', 'Bloccato dai controlli reciproci') : pick(lang, '1-year term limit keeps power rotating', 'Durata annuale evita dittature')} />
        <Analogy
          lang={lang}
          en="Having TWO co-presidents plus a plebeian referee meant no single person could seize a crown for 500 years!"
          it="Avere due Consoli per un solo anno e i Tribuni impedì per secoli che un solo uomo prendesse il potere!"
        />
      </div>
    </div>
  );
};

// hist_l1_m8 — Cursus Honorum & Punic Naval Corvus
export const PunicMareNostrumLab: React.FC<Props> = ({ lang }) => {
  const [step, setStep] = useState(3);
  const [corvus, setCorvus] = useState(true);
  const ladder = [
    ['Quaestor (Finances)', 'Questore (Tesoreria)'],
    ['Aedile (City & Grain)', 'Edile (Opere e Giochi)'],
    ['Praetor (Judge & Law)', 'Pretore (Giustizia)'],
    ['Consul (Army & State)', 'Console (Guida Suprema)']
  ];
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Cursus Honorum steps & Punic corvus', 'Gradini Cursus Honorum e corvo navale')}>
          {ladder.map((item, idx) => (
            <rect
              key={idx}
              x={24 + idx * 80}
              y={140 - idx * 24}
              width="74"
              height="34"
              rx="6"
              fill={idx <= step ? 'rgba(255,209,102,0.28)' : 'rgba(255,255,255,0.05)'}
              stroke={idx <= step ? '#ffd166' : '#475569'}
            />
          ))}
          {ladder.map((item, idx) => (
            <text key={idx} x={61 + idx * 80} y={161 - idx * 24} textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="700">{pick(lang, item[0], item[1]).split(' ')[0]}</text>
          ))}
          <text x="180" y="34" textAnchor="middle" fill="#45d8ff" fontSize="12" fontWeight="800">
            {corvus ? pick(lang, 'Corvus Boarding Bridge: Turn Sea Battle into Land Fight! ✓', 'Ponte Corvo Abbassato: Battaglia Navale come a Terra! ✓') : pick(lang, 'Raw Rowing Duel vs Veteran Carthage Navy', 'Senza Corvo: Svantaaggio contro Navi Cartaginesi')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, 'Cursus Honorum rank step', 'Gradino carriera politica')} value={step + 1} min={1} max={4} lang={lang} onChange={v => setStep(v - 1)} />
        <div className="cl-row">
          <button type="button" className={`cl-btn ${corvus ? 'primary' : ''}`} onClick={() => setCorvus(c => !c)}>⛵ {pick(lang, 'Toggle Naval Corvus', 'Attiva/Togli Corvo')}</button>
        </div>
        <Readout label={pick(lang, 'Active Office', 'Carica Attuale')} value={pick(lang, ladder[step][0], ladder[step][1])} />
        <Analogy
          lang={lang}
          en="Carthage ruled the waves, so Roman soldiers dropped a spiked bridge (corvus) to lock ships together and fight like infantry!"
          it="I Cartaginesi dominavano il mare, così i Romani inventarono il ponte mobile con uncino per combattere come a terra!"
        />
      </div>
    </div>
  );
};
