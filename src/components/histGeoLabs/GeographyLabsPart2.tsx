import React, { useState } from 'react';
import { Flag } from '../Flag';
import type { Language } from '../../types';
import { Analogy, Readout, Slider, fmt, pick } from '../chemLabs/chemLabShared';

type Props = { lang: Language };

// ============================================================================
// GRADE 10 GEOGRAPHY LABS (geo_l2_m1 .. geo_l2_m6)
// ============================================================================

// geo_l2_m1 — Global Smartphone Value Chain & Glocal Explorer
export const GlobalizationChainLab: React.FC<Props> = ({ lang }) => {
  const [stage, setStage] = useState<'design' | 'chips' | 'assemble' | 'glocal'>('chips');
  const stageData = {
    design: ['California · Software & Industrial Design', 'California · Progettazione Software e Design'],
    chips: ['Taiwan & South Korea · Sub-nanometer Silicon Chips & OLED', 'Taiwan e Corea del Sud · Microchip e Schermi'],
    assemble: ['Shenzhen / Vietnam + Container Ship → Italian Store', 'Cina / Vietnam + Nave Container → Negozi Italiani'],
    glocal: ['GLOCAL Italy · Parmesan DOP & Motor Valley exported worldwide ✓', 'GLOCAL Italia · Parmigiano DOP e Motor Valley nel mondo ✓']
  }[stage];
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Global value chain around Earth', 'Catena globale del valore')}>
          <circle cx="180" cy="84" r="52" fill="rgba(69,216,255,0.1)" stroke="#45d8ff" strokeWidth="2" />
          <text x="180" y="76" textAnchor="middle" fill="#ffd166" fontSize="14" fontWeight="800">📱 Supply Chain</text>
          <text x="180" y="100" textAnchor="middle" fill="#38ef7d" fontSize="10.5" fontWeight="700">{stage === 'glocal' ? '🧀 Glocal DOP' : '🚢 Intermodal Container'}</text>
          <rect x="20" y="144" width="320" height="34" rx="8" fill="rgba(56,239,125,0.12)" stroke="#38ef7d" />
          <text x="180" y="165" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="700">{pick(lang, stageData[0], stageData[1])}</text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${stage === 'design' ? 'primary' : ''}`} onClick={() => setStage('design')}>1. USA</button>
          <button type="button" className={`cl-btn ${stage === 'chips' ? 'primary' : ''}`} onClick={() => setStage('chips')}>2. Taiwan/Korea</button>
          <button type="button" className={`cl-btn ${stage === 'assemble' ? 'primary' : ''}`} onClick={() => setStage('assemble')}>3. {pick(lang, 'Ship', 'Nave')}</button>
          <button type="button" className={`cl-btn ${stage === 'glocal' ? 'primary' : ''}`} onClick={() => setStage('glocal')}>4. Glocal <Flag country="IT" /></button>
        </div>
        <Readout label={pick(lang, 'Enablers', 'Motori Logistici')} value={pick(lang, 'Standard shipping container + submarine fiber-optic cables', 'Container intermodale + cavi sottomarini in fibra ottica')} />
        <Analogy
          lang={lang}
          en="One smartphone touches four continents before reaching your hand—while smart regions go ‘glocal’, selling prized DOP traditions globally!"
          it="Un solo smartphone tocca quattro continenti prima di arrivare in tasca—mentre le eccellenze italiane usano la rete per restare ‘glocal’!"
        />
      </div>
    </div>
  );
};

// geo_l2_m2 — GDP vs HDI (Health + School + Income) Comparison
export const HdiDevelopmentLab: React.FC<Props> = ({ lang }) => {
  const [healthSpend, setHealthSpend] = useState(80);
  const lifeExp = Math.round(58 + (healthSpend / 100) * 26);
  const schoolYrs = 4 + (healthSpend / 100) * 9;
  const hdi = 0.45 + (healthSpend / 100) * 0.49;
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'HDI Human Development Index meter', 'Indice di Sviluppo Umano ISU')}>
          <rect x="24" y="26" width="312" height="72" rx="10" fill="rgba(168,139,255,0.12)" stroke="#a88bff" />
          <text x="180" y="54" textAnchor="middle" fill="#ffd166" fontSize="15" fontWeight="800">
            {pick(lang, `HDI = ${fmt(lang, hdi, 2)} / 1.00`, `ISU = ${fmt(lang, hdi, 2)} / 1,00`)}
          </text>
          <text x="180" y="82" textAnchor="middle" fill="#38ef7d" fontSize="11.5" fontWeight="700">
            ❤️ {lifeExp} {pick(lang, 'yrs life', 'anni vita')} · 🎓 {fmt(lang, schoolYrs, 1)} {pick(lang, 'yrs school', 'anni scuola')}
          </text>
          <text x="180" y="142" textAnchor="middle" fill="#45d8ff" fontSize="11" fontWeight="700">
            {pick(lang, 'Even with high GDP, inequality lowers real HDI wellbeing!', 'Anche con PIL alto, senza scuole e sanità per tutti l’ISU resta basso!')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, 'Public access to hospitals & girls’ schooling', 'Investimento in sanità e istruzione femminile')} value={healthSpend} min={10} max={100} unit="%" lang={lang} onChange={setHealthSpend} />
        <Readout label={pick(lang, 'Global Migration Fact', 'Migrazioni Globali')} value={pick(lang, '~280M international migrants · 1951 Geneva protects refugees', '~280 milioni di migranti · Convenzione di Ginevra per rifugiati')} />
        <Analogy
          lang={lang}
          en="GDP counts total money divided blindly; HDI checks whether families actually live long healthy lives and finish school!"
          it="Il PIL somma solo i soldi prodotti; l’ISU verifica se le persone vivono a lungo, stanno bene e vanno a scuola!"
        />
      </div>
    </div>
  );
};

// geo_l2_m3 — Monsoon Wind Flip & Asia Engines Lab
export const AsiaMonsoonLab: React.FC<Props> = ({ lang }) => {
  const [season, setSeason] = useState<'summer' | 'winter'>('summer');
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Summer wet vs winter dry monsoon', 'Monsone estivo umido vs invernale secco')}>
          <rect x="20" y="24" width="320" height="88" rx="10" fill={season === 'summer' ? 'rgba(69,216,255,0.16)' : 'rgba(255,209,102,0.12)'} stroke={season === 'summer' ? '#45d8ff' : '#ffd166'} />
          <text x="180" y="54" textAnchor="middle" fill="#ffd166" fontSize="14" fontWeight="800">
            {season === 'summer' ? '🌧️ Summer Wet Monsoon (Ocean → Land)' : '☀️ Winter Dry Monsoon (Tibet → Ocean)'}
          </text>
          <text x="180" y="84" textAnchor="middle" fill="#ffffff" fontSize="11">
            {season === 'summer' ? pick(lang, 'Waters rice fields feeding ~60% of humanity in Asia! 🌾', 'Irriga le risaie che nutrono quasi il 60% dell’umanità! 🌾') : pick(lang, 'Cool dry winds blow off icy Himalayan highlands', 'Venti freddi e secchi soffiano dall’altopiano himalayano')}
          </text>
          <text x="180" y="148" textAnchor="middle" fill="#38ef7d" fontSize="11" fontWeight="700">
            {pick(lang, 'India (1.4B+ IT & Pharma) · China (EV/Solar) · Japan/Korea (Robotics)', 'India (1,4 mld+, IT) · Cina (EV/Solare) · Giappone/Corea (Robotica)')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${season === 'summer' ? 'primary' : ''}`} onClick={() => setSeason('summer')}>🌧️ {pick(lang, 'Summer Monsoon', 'Monsone Estivo')}</button>
          <button type="button" className={`cl-btn ${season === 'winter' ? 'primary' : ''}`} onClick={() => setSeason('winter')}>☀️ {pick(lang, 'Winter Monsoon', 'Monsone Invernale')}</button>
        </div>
        <Readout label={pick(lang, 'Asia Share of Earth', 'Peso Umano dell’Asia')} value={pick(lang, '~4.7B people (nearly 3 out of 5 humans!)', 'Circa 4,7 miliardi (quasi 3 persone su 5 nel mondo!)')} />
        <Analogy
          lang={lang}
          en="Monsoons work like a giant seasonal sea-breeze engine—pulling ocean rainclouds over India & China right when summer rice grows!"
          it="Il monsone è una gigantesca brezza stagionale che porta piogge vitali dall’Oceano Indiano proprio nella stagione del riso!"
        />
      </div>
    </div>
  );
};

// geo_l2_m4 — Africa Biomes, Youth & Solar Leapfrogging Lab
export const AfricaLeapfrogLab: React.FC<Props> = ({ lang }) => {
  const [techMode, setTechMode] = useState<'legacy' | 'leapfrog'>('leapfrog');
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Africa youth and solar mobile leapfrogging', 'Gioventù africana e salto tecnologico')}>
          <rect x="20" y="24" width="320" height="84" rx="10" fill="rgba(56,239,125,0.12)" stroke="#38ef7d" />
          <text x="180" y="54" textAnchor="middle" fill="#ffd166" fontSize="13.5" fontWeight="800">
            {techMode === 'leapfrog' ? '☀️ Solar Micro-Grid + 📱 Mobile Banking ✓' : '☎️ Slow 20th-Century Copper Landlines'}
          </text>
          <text x="180" y="84" textAnchor="middle" fill="#ffffff" fontSize="10.5">
            {techMode === 'leapfrog' ? pick(lang, 'Skips old cables directly to digital payments & clean power!', 'Salta i vecchi cavi passando subito a pagamenti mobili e solare!') : pick(lang, 'Expensive wires delay rural clinic & village access', 'Cavi costosi lasciavano i villaggi isolati')}
          </text>
          <text x="180" y="148" textAnchor="middle" fill="#45d8ff" fontSize="11" fontWeight="700">
            {pick(lang, 'Median Age ~19 yrs · Rift Valley · Sahel fight vs desertification', 'Età mediana ~19 anni · Rift Valley · Sfida desertificazione nel Sahel')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${techMode === 'legacy' ? 'primary' : ''}`} onClick={() => setTechMode('legacy')}>{pick(lang, 'Old Copper Wires', 'Vecchi Cavi Fissi')}</button>
          <button type="button" className={`cl-btn ${techMode === 'leapfrog' ? 'primary' : ''}`} onClick={() => setTechMode('leapfrog')}>{pick(lang, 'Leapfrogging', 'Salto Tecnologico')}</button>
        </div>
        <Readout label={pick(lang, 'Clean-Tech Challenge', 'Sfida Mineraria')} value={pick(lang, 'Keep cobalt/lithium refining value inside local African economies', 'Trasformare in loco cobalto e litio invece di esportarli solo grezzi')} />
        <Analogy
          lang={lang}
          en="Imagine never buying a VHS tape—jumping straight to cloud streaming! Rural Kenya jumped straight to mobile phones & solar panels."
          it="Come passare subito allo streaming senza mai comprare videocassette: molte regioni africane saltano direttamente al solare e al mobile!"
        />
      </div>
    </div>
  );
};

// geo_l2_m5 — Americas Rockies/Andes & Amazon Oxygen/Carbon Sink Lab
export const AmericasAmazonLab: React.FC<Props> = ({ lang }) => {
  const [forestCover, setForestCover] = useState(82);
  const co2Gt = (forestCover * 1.1).toFixed(0);
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Amazon forest carbon & rain feedback simulator', 'Simulatore foresta amazzonica e piogge')}>
          <rect x="20" y="24" width="320" height="72" rx="10" fill={forestCover >= 75 ? 'rgba(56,239,125,0.16)' : 'rgba(255,107,139,0.16)'} stroke={forestCover >= 75 ? '#38ef7d' : '#ff6b8b'} />
          <text x="180" y="54" textAnchor="middle" fill="#ffd166" fontSize="14" fontWeight="800">🌳 {pick(lang, `Amazon Canopy: ${forestCover}%`, `Copertura Amazzonica: ${forestCover}%`)}</text>
          <text x="180" y="78" textAnchor="middle" fill="#ffffff" fontSize="11">
            {forestCover >= 75 ? pick(lang, `Stores ~${co2Gt} Gt carbon & pumps "flying rivers" rain ✓`, `Immagazzina ~${co2Gt} Gt di carbonio e genera piogge ✓`) : pick(lang, 'Tipping point risk! Forest dries toward savanna ✕', 'Rischio punto di non ritorno! Crisi idrica globale ✕')}
          </text>
          <text x="180" y="142" textAnchor="middle" fill="#45d8ff" fontSize="11" fontWeight="700">
            {pick(lang, 'West Spine: Rockies → Andes · Tech Silicon Valley vs Megacities', 'Spina Ovest: Rocciose → Ande · Silicon Valley vs Megalopoli latine')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, 'Remaining intact Amazon canopy', 'Foresta amazzonica conservata')} value={forestCover} min={45} max={100} unit="%" lang={lang} onChange={setForestCover} />
        <Readout label={pick(lang, 'Cultural Contrast', 'Eredità Culturale')} value={pick(lang, 'Anglo-America (North) vs Latin America (Spanish/Portuguese + Indigenous)', 'America Anglosassone vs America Latina')} />
        <Analogy
          lang={lang}
          en="The Amazon isn’t just trees—it’s an ocean of leaves recycling moisture into giant airborne rain rivers for the whole continent!"
          it="L’Amazzonia agisce come una pompa climatica planetaria che assorbe CO₂ e crea fiumi volanti di vapore acqueo!"
        />
      </div>
    </div>
  );
};

// geo_l2_m6 — Energy Transition & Circular Economy Loop Lab
export const CircularAgendaLab: React.FC<Props> = ({ lang }) => {
  const [renewShare, setRenewShare] = useState(70);
  const [circular, setCircular] = useState(true);
  const emissionsIdx = Math.round((100 - renewShare) * (circular ? 0.65 : 1.1));
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Renewable share and circular economy loop', 'Rinnovabili ed economia circolare')}>
          <circle cx="95" cy="76" r="38" fill="none" stroke={circular ? '#38ef7d' : '#ff6b8b'} strokeWidth="5" strokeDasharray={circular ? 'none' : '8 6'} />
          <text x="95" y="79" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800">{circular ? '♻️ Circular' : '🗑️ Linear'}</text>
          <rect x="165" y="34" width="175" height="84" rx="10" fill="rgba(69,216,255,0.12)" stroke="#45d8ff" />
          <text x="252" y="64" textAnchor="middle" fill="#ffd166" fontSize="13.5" fontWeight="800">⚡ {renewShare}% Clean Grid</text>
          <text x="252" y="92" textAnchor="middle" fill="#38ef7d" fontSize="11">CO₂ Index: {emissionsIdx}</text>
          <text x="180" y="152" textAnchor="middle" fill="#45d8ff" fontSize="11" fontWeight="700">
            {pick(lang, '1904 Larderello Geothermal (Italy) + UN Agenda 2030 (17 SDGs)', '1904 Geotermia a Larderello (Italia) + Agenda 2030 ONU (17 Obiettivi)')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, 'Solar + Wind + Hydro + Geothermal grid share', 'Quota Rinnovabili (Solare, Eolico, Idro, Geotermia)')} value={renewShare} min={10} max={95} step={5} unit="%" lang={lang} onChange={setRenewShare} />
        <div className="cl-row">
          <button type="button" className={`cl-btn ${circular ? 'primary' : ''}`} onClick={() => setCircular(true)}>♻️ {pick(lang, 'Circular Loop', 'Economia Circolare')}</button>
          <button type="button" className={`cl-btn ${!circular ? 'primary' : ''}`} onClick={() => setCircular(false)}>🗑️ {pick(lang, 'Linear Throwaway', 'Lineare Usa-e-Getta')}</button>
        </div>
        <Analogy
          lang={lang}
          en="Instead of Take → Make → Toss into a landfill, circular design turns old phones and metals straight back into new products!"
          it="Invece della retta Estrai → Usa → Getta, il cerchio circolare trasforma gli scarti in nuova materia prima!"
        />
      </div>
    </div>
  );
};

// ============================================================================
// GRADE 11 GEOGRAPHY LABS (geo_l3_m1 .. geo_l3_m4)
// ============================================================================

// geo_l3_m1 — Suez Chokepoint Route Calculator
export const SuezChokepointLab: React.FC<Props> = ({ lang }) => {
  const [route, setRoute] = useState<'suez' | 'cape'>('suez');
  const days = route === 'suez' ? 18 : 31;
  const km = route === 'suez' ? '15 300 km' : '23 400 km';
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Suez Canal shortcut vs Cape of Good Hope', 'Canale di Suez vs Capo di Buona Speranza')}>
          <rect x="20" y="24" width="320" height="84" rx="10" fill={route === 'suez' ? 'rgba(56,239,125,0.14)' : 'rgba(255,209,102,0.14)'} stroke={route === 'suez' ? '#38ef7d' : '#ffd166'} />
          <text x="180" y="54" textAnchor="middle" fill="#ffd166" fontSize="14" fontWeight="800">
            {route === 'suez' ? '🚢 Singapore → Suez Canal → Trieste/Genoa' : '⛵ Singapore → Cape of Good Hope (Around Africa)'}
          </text>
          <text x="180" y="84" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="700">
            {km} · ⏱️ {days} {pick(lang, 'days shipping', 'giorni di navigazione')}
          </text>
          <text x="180" y="148" textAnchor="middle" fill="#45d8ff" fontSize="11" fontWeight="700">
            {pick(lang, 'Subsea cables (95% internet!) + Lithium/Rare Earth geopolitics', 'Cavi sottomarini (95% del traffico dati) + Terre Rare e Litio')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${route === 'suez' ? 'primary' : ''}`} onClick={() => setRoute('suez')}>{pick(lang, 'Via Suez Shortcut', 'Rotta Suez')}</button>
          <button type="button" className={`cl-btn ${route === 'cape' ? 'primary' : ''}`} onClick={() => setRoute('cape')}>{pick(lang, 'Blocked → Around Africa', 'Bloccato → Capo B. Speranza')}</button>
        </div>
        <Readout label={pick(lang, 'Time & Fuel Saved via Suez', 'Risparmio con Suez')} value={route === 'suez' ? pick(lang, '~8 100 km & 13 days saved directly to Italy! ✓', 'Circa 8 100 km e 13 giorni risparmiati verso i porti italiani! ✓') : pick(lang, '+13 days delay raises shipping & factory costs', '+13 giorni di ritardo aumentano costi e prezzi')} />
        <Analogy
          lang={lang}
          en="Think of Suez, Hormuz, and Malacca as narrow highway bridges—if one stalls, deliveries stall worldwide!"
          it="Gli stretti come Suez e Hormuz sono i ponti stretti del commercio globale: se uno si blocca, ne risentono tutte le fabbriche!"
        />
      </div>
    </div>
  );
};

// geo_l3_m2 — Carrying Capacity (Overtourism vs Slow Borghi)
export const CarryingCapacityLab: React.FC<Props> = ({ lang }) => {
  const [visitorsPct, setVisitorsPct] = useState(145);
  const overloaded = visitorsPct > 100;
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Tourism carrying capacity gauge', 'Indicatore capacità di carico turistica')}>
          <rect x="24" y="34" width="312" height="28" rx="8" fill="rgba(255,255,255,0.06)" stroke="#475569" />
          <rect x="24" y="34" width={Math.min(312, (312 * visitorsPct) / 160)} height="28" rx="8" fill={overloaded ? '#ff6b8b' : '#38ef7d'} />
          <text x="180" y="92" textAnchor="middle" fill={overloaded ? '#ff6b8b' : '#38ef7d'} fontSize="13.5" fontWeight="800">
            {overloaded ? pick(lang, `OVERTOURISM (${visitorsPct}%): Locals priced out!`, `OVERTOURISM (${visitorsPct}%): Residenti espulsi!`) : pick(lang, `Balanced Slow Tourism (${visitorsPct}%) ✓`, `Turismo Sostenibile (${visitorsPct}%) ✓`)}
          </text>
          <text x="180" y="138" textAnchor="middle" fill="#ffd166" fontSize="11" fontWeight="700">
            {pick(lang, 'Constitution Art. 9 (2022): Protects Landscape, Biodiversity & Future!', 'Costituzione Art. 9 (2022): Tutela Paesaggio, Ambiente e Future Generazioni!')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, 'Daily visitors vs historic town capacity (100% = max)', 'Visitatori rispetto alla capacità sostenibile')} value={visitorsPct} min={40} max={160} step={15} unit="%" lang={lang} onChange={setVisitorsPct} />
        <Readout label={pick(lang, 'Smart Policy', 'Soluzione Geografica')} value={pick(lang, 'Spread visitors by rail & bike into inland borghi & parks all year', 'Distribuire i flussi in treno e bici verso borghi e parchi tutto l’anno')} />
        <Analogy
          lang={lang}
          en="Just like an elevator has a weight limit, crowding 30M visitors onto Venice alone breaks daily life—while spreading slow trails revives rural towns!"
          it="Come la capienza massima di una stanza: concentrare tutti solo su poche piazze satura la città, mentre il turismo lento fa vivere i borghi!"
        />
      </div>
    </div>
  );
};

// geo_l3_m3 — TEN-T Base Tunnel Rail vs Mountain Trucks & Heat Island
export const TentSmartCityLab: React.FC<Props> = ({ lang }) => {
  const [freightOnRail, setFreightOnRail] = useState(75);
  const [parkTrees, setParkTrees] = useState(true);
  const co2Drop = Math.round(freightOnRail * 0.72);
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'TEN-T Alpine rail shift & urban tree cooling', 'Corridoi ferroviari TEN-T e verde urbano')}>
          <rect x="20" y="24" width="320" height="68" rx="10" fill="rgba(69,216,255,0.12)" stroke="#45d8ff" />
          <text x="180" y="52" textAnchor="middle" fill="#ffd166" fontSize="13" fontWeight="800">🚆 TEN-T Brenner/Gotthard Base Rail: {freightOnRail}%</text>
          <text x="180" y="74" textAnchor="middle" fill="#38ef7d" fontSize="11">-{co2Drop}% {pick(lang, 'Alpine Truck Emissions ✓', 'Emissioni TIR sulle Alpi ✓')}</text>
          <rect x="20" y="106" width="320" height="62" rx="10" fill={parkTrees ? 'rgba(56,239,125,0.14)' : 'rgba(255,107,139,0.14)'} stroke={parkTrees ? '#38ef7d' : '#ff6b8b'} />
          <text x="180" y="140" textAnchor="middle" fill="#ffffff" fontSize="11.5" fontWeight="700">
            {parkTrees ? pick(lang, '🌳 15-Min Smart City: −4 °C cooler shade & bike lanes ✓', '🌳 Smart City 15-min: −4 °C estivi grazie ad alberi e ciclabili ✓') : pick(lang, '🛣️ Bare Asphalt Heat Island (+4 °C hotter summers!) ✕', '🛣️ Isola di Calore su Asfalto (+4 °C in estate!) ✕')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, 'Alpine freight shifted from diesel trucks to rail', 'Merci spostate da TIR a treni elettrici')} value={freightOnRail} min={10} max={90} step={5} unit="%" lang={lang} onChange={setFreightOnRail} />
        <div className="cl-row">
          <button type="button" className={`cl-btn ${parkTrees ? 'primary' : ''}`} onClick={() => setParkTrees(t => !t)}>🌳 {pick(lang, 'Toggle Urban Tree Canopy', 'Attiva/Togli Verde Urbano')}</button>
        </div>
        <Analogy
          lang={lang}
          en="Flat Alpine railway base tunnels act like electric conveyor belts under mountains—saving huge energy compared to steep diesel climbs!"
          it="I trafori di base pianeggianti evitano alle merci di arrampicarsi sui passi montani, tagliando smog e traffico sulle strade!"
        />
      </div>
    </div>
  );
};

// geo_l3_m4 — Soil Sponge Floods & Venice MOSE Surge Gate
export const MoseHazardsLab: React.FC<Props> = ({ lang }) => {
  const [surface, setSurface] = useState<'forest' | 'asphalt'>('forest');
  const [tideCm, setTideCm] = useState(130);
  const moseRaised = tideCm >= 110;
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Soil sealing sponge vs asphalt & Venice MOSE', 'Consumo di suolo e barriere MOSE a Venezia')}>
          <rect x="20" y="22" width="150" height="96" rx="10" fill={surface === 'forest' ? 'rgba(56,239,125,0.16)' : 'rgba(255,107,139,0.16)'} stroke={surface === 'forest' ? '#38ef7d' : '#ff6b8b'} />
          <text x="95" y="54" textAnchor="middle" fill="#ffd166" fontSize="12" fontWeight="800">{surface === 'forest' ? '🌲 Soil Sponge' : '🅿️ Paved Concrete'}</text>
          <text x="95" y="84" textAnchor="middle" fill="#ffffff" fontSize="10.5">{surface === 'forest' ? pick(lang, 'Soaks rain safely ✓', 'Assorbe pioggia ✓') : pick(lang, 'Flash flood slide! ✕', 'Piena improvvisa! ✕')}</text>
          <rect x="190" y="22" width="150" height="96" rx="10" fill={moseRaised ? 'rgba(69,216,255,0.22)' : 'rgba(255,209,102,0.12)'} stroke="#45d8ff" />
          <text x="265" y="54" textAnchor="middle" fill="#45d8ff" fontSize="12" fontWeight="800">🌊 Venice {tideCm} cm</text>
          <text x="265" y="84" textAnchor="middle" fill={moseRaised ? '#38ef7d' : '#cbd5e1'} fontSize="10.5">{moseRaised ? pick(lang, 'MOSE Gates UP ✓', 'Barriere MOSE SU ✓') : pick(lang, 'Normal tide flowing', 'Marea normale')}</text>
          <text x="180" y="152" textAnchor="middle" fill="#ffd166" fontSize="11" fontWeight="700">
            {pick(lang, 'Risk = Hazard × Vulnerability × Exposure · Cut Vulnerability via Prevention!', 'Rischio = Pericolosità × Vulnerabilità × Esposizione · Prevenzione salva vite!')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${surface === 'forest' ? 'primary' : ''}`} onClick={() => setSurface('forest')}>🌲 {pick(lang, 'Forest Sponge', 'Suolo Naturale')}</button>
          <button type="button" className={`cl-btn ${surface === 'asphalt' ? 'primary' : ''}`} onClick={() => setSurface('asphalt')}>🅿️ {pick(lang, 'Sealed Asphalt', 'Cemento/Asfalto')}</button>
        </div>
        <Slider label={pick(lang, 'Adriatic Lagoon Tide Surge (cm)', 'Livello Marea a Venezia (cm)')} value={tideCm} min={70} max={170} step={10} unit="cm" lang={lang} onChange={setTideCm} />
        <Analogy
          lang={lang}
          en="Natural soil acts like a kitchen sponge soaking storm bursts, while Venice’s 78 underwater MOSE gates rise with compressed air during high surges!"
          it="Il terreno naturale assorbe l’acqua come una spugna, mentre a Venezia le 78 paratoie del MOSE si alzano ad aria compressa nelle maree eccezionali!"
        />
      </div>
    </div>
  );
};
