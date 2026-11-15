import React, { useState } from 'react';
import type { Language } from '../../types';
import { Analogy, PlayToggle, Readout, Slider, fmt, pick } from '../chemLabs/chemLabShared';

type Props = { lang: Language };

// ============================================================================
// GRADE 10 HISTORY LABS (hist_l2_m1 .. hist_l2_m8)
// ============================================================================

// hist_l2_m1 — Republic vs Augustan Principate Power Switcher
export const CaesarAugustusLab: React.FC<Props> = ({ lang }) => {
  const [regime, setRegime] = useState<'republic' | 'principate'>('principate');
  const [yearCe, setYearCe] = useState(14);
  const citizens = Math.round(4 + (yearCe / 212) * 52);
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Republic vs Principate comparison', 'Confronto Repubblica e Principato')}>
          <rect x="20" y="20" width="320" height="68" rx="10" fill={regime === 'principate' ? 'rgba(255,209,102,0.14)' : 'rgba(69,216,255,0.12)'} stroke={regime === 'principate' ? '#ffd166' : '#45d8ff'} />
          <text x="180" y="48" textAnchor="middle" fill="#ffd166" fontSize="13" fontWeight="800">
            {regime === 'principate'
              ? pick(lang, 'AUGUSTUS · Princeps (Legions + Tribune Veto)', 'AUGUSTO · Princeps (Legioni + Veto a vita)')
              : pick(lang, 'LATE REPUBLIC · 2 Consuls & Divided Senate', 'TARDA REPUBBLICA · 2 Consoli e Senato diviso')}
          </text>
          <text x="180" y="70" textAnchor="middle" fill="#cbd5e1" fontSize="10.5">
            {regime === 'principate'
              ? pick(lang, 'Old Senate stays visible on paper while army obeys 1 ruler ✓', 'Il Senato resta formalmente vivo ma l’esercito obbedisce al Princeps ✓')
              : pick(lang, 'Rival generals Marius, Sulla & Caesar clash in civil wars ⚔️', 'Generali rivali (Mario, Silla, Cesare) si scontrano nelle guerre civili ⚔️')}
          </text>
          <rect x="20" y="102" width="320" height="68" rx="10" fill="rgba(56,239,125,0.1)" stroke="#38ef7d" />
          <text x="180" y="130" textAnchor="middle" fill="#38ef7d" fontSize="13" fontWeight="800">
            {pick(lang, `Roman Citizens (~${citizens}M across Empire)`, `Cittadini Romani (~${citizens} milioni nell’Impero)`)}
          </text>
          <text x="180" y="152" textAnchor="middle" fill="#9fb0c8" fontSize="10.5">
            {yearCe >= 212
              ? pick(lang, '212 CE Caracalla Edict: ALL free inhabitants become citizens! ✓', '212 d.C. Editto di Caracalla: TUTTI i liberi diventano cittadini! ✓')
              : pick(lang, 'Gradual extension to Italy, Gaul & Spain towns', 'Estensione graduale alle élite provinciali')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${regime === 'republic' ? 'primary' : ''}`} onClick={() => setRegime('republic')}>{pick(lang, 'Late Republic', 'Tarda Repubblica')}</button>
          <button type="button" className={`cl-btn ${regime === 'principate' ? 'primary' : ''}`} onClick={() => setRegime('principate')}>{pick(lang, 'Principate (27 BCE)', 'Principato (27 a.C.)')}</button>
        </div>
        <Slider label={pick(lang, 'Imperial Citizenship Timeline (CE)', 'Cronologia Cittadinanza (d.C.)')} value={yearCe} min={14} max={212} step={33} unit={pick(lang, 'CE', 'd.C.')} lang={lang} onChange={setYearCe} />
        <Readout label={pick(lang, 'Pax Romana Status', 'Stato Pax Romana')} value={yearCe <= 180 ? pick(lang, 'Secure roads, sea trade & aqueduct boom', 'Strade sicure, commerci e acquedotti') : pick(lang, '212 CE Universal Citizenship milestone', '212 d.C. Cittadinanza estesa a tutti i liberi')} />
        <Analogy
          lang={lang}
          en="Augustus kept the school club names intact while quietly holding both the principal’s key and the treasury!"
          it="Augusto lasciò intatti i nomi delle vecchie cariche repubblicane ma concentrò nelle sue mani esercito e veto!"
        />
      </div>
    </div>
  );
};

// hist_l2_m2 — East vs West Rome 313 -> 476 Timeline
export const EmpireSplit476Lab: React.FC<Props> = ({ lang }) => {
  const [year, setYear] = useState(313);
  const milestone =
    year < 330
      ? ['313 CE · Edict of Milan grants Christian freedom of worship', '313 d.C. · Editto di Milano: libertà di culto ai cristiani']
      : year < 395
        ? ['380 CE · Edict of Thessalonica makes Christianity official', '380 d.C. · Editto di Tessalonica: cristianesimo religione di Stato']
        : year < 476
          ? ['395 CE · Split into Western & Eastern Roman Empires', '395 d.C. · Divisione definitiva tra Impero d’Occidente e d’Oriente']
          : ['476 CE · West falls (Romulus deposed); East survives 1 000 yrs!', '476 d.C. · Cade l’Occidente; l’Impero d’Oriente dura altri 1 000 anni!'];
  const westAlive = year < 476;
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Roman Empire split and 476 CE', 'Divisione dell’Impero e 476 d.C.')}>
          <rect x="20" y="24" width="150" height="84" rx="10" fill={westAlive ? 'rgba(255,209,102,0.16)' : 'rgba(255,107,139,0.16)'} stroke={westAlive ? '#ffd166' : '#ff6b8b'} />
          <text x="95" y="54" textAnchor="middle" fill={westAlive ? '#ffd166' : '#ff6b8b'} fontSize="12" fontWeight="800">{pick(lang, 'WESTERN EMPIRE', 'IMPERO D’OCCIDENTE')}</text>
          <text x="95" y="78" textAnchor="middle" fill="#ffffff" fontSize="11">{westAlive ? pick(lang, 'Strained by raids', 'Pressione ai confini') : pick(lang, '476 CE → Romano-Germanic', '476 → Regni romano-germanici')}</text>
          <rect x="190" y="24" width="150" height="84" rx="10" fill="rgba(56,239,125,0.16)" stroke="#38ef7d" />
          <text x="265" y="54" textAnchor="middle" fill="#38ef7d" fontSize="12" fontWeight="800">{pick(lang, 'EASTERN EMPIRE', 'IMPERO D’ORIENTE')}</text>
          <text x="265" y="78" textAnchor="middle" fill="#ffffff" fontSize="11">{pick(lang, 'Constantinople thrives ✓', 'Costantinopoli prospera ✓')}</text>
          <rect x="20" y="124" width="320" height="44" rx="8" fill="rgba(69,216,255,0.1)" stroke="#45d8ff" />
          <text x="180" y="150" textAnchor="middle" fill="#45d8ff" fontSize="11" fontWeight="700">{pick(lang, milestone[0], milestone[1])}</text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          {[313, 380, 395, 476].map(y => (
            <button key={y} type="button" className={`cl-btn ${year === y ? 'primary' : ''}`} onClick={() => setYear(y)}>{y} {pick(lang, 'CE', 'd.C.')}</button>
          ))}
        </div>
        <Readout label={pick(lang, 'Key Turning Point', 'Svolta Storica')} value={pick(lang, milestone[0], milestone[1])} />
        <Analogy
          lang={lang}
          en="Think of two twin halves of one ship: the western hull sank in 476 CE, while the richer eastern hull sailed on as Byzantium!"
          it="Come due metà di una nave: la parte occidentale affondò nel 476 d.C., mentre quella orientale navigò per altri mille anni!"
        />
      </div>
    </div>
  );
};

// hist_l2_m3 — Byzantium, Lombards & Scriptorium Backup Lab
export const ByzantiumMonksLab: React.FC<Props> = ({ lang }) => {
  const [role, setRole] = useState<'justinian' | 'lombards' | 'monks'>('monks');
  const details = {
    justinian: ['535–565 CE · Corpus Juris Civilis & Ravenna gold mosaics', '535–565 d.C. · Codice di Giustiniano e mosaici dorati a Ravenna'],
    lombards: ['568 CE · Pavia capital & 643 Rothari Latin Law replaces blood feuds', '568 d.C. · Capitale Pavia ed Editto di Rotari contro la faida privata'],
    monks: ['Ora et Labora · Benedictine scriptoria copy & rescue ancient classics', 'Ora et Labora · Gli scriptoria benedettini salvano i libri antichi']
  }[role];
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Byzantium Lombards and Benedictine scriptorium', 'Bisanzio, Longobardi e Scriptorium')}>
          <rect x="20" y="22" width="100" height="72" rx="10" fill={role === 'justinian' ? 'rgba(255,209,102,0.28)' : 'rgba(255,209,102,0.08)'} stroke="#ffd166" />
          <text x="70" y="54" textAnchor="middle" fill="#ffd166" fontSize="11.5" fontWeight="800">⚖️ Ravenna</text>
          <text x="70" y="74" textAnchor="middle" fill="#cbd5e1" fontSize="9.5">{pick(lang, 'Roman Law', 'Diritto Romano')}</text>
          <rect x="130" y="22" width="100" height="72" rx="10" fill={role === 'lombards' ? 'rgba(255,107,139,0.28)' : 'rgba(255,107,139,0.08)'} stroke="#ff6b8b" />
          <text x="180" y="54" textAnchor="middle" fill="#ff6b8b" fontSize="11.5" fontWeight="800">🛡️ Pavia</text>
          <text x="180" y="74" textAnchor="middle" fill="#cbd5e1" fontSize="9.5">{pick(lang, 'Lombards 568', 'Longobardi 568')}</text>
          <rect x="240" y="22" width="100" height="72" rx="10" fill={role === 'monks' ? 'rgba(56,239,125,0.28)' : 'rgba(56,239,125,0.08)'} stroke="#38ef7d" />
          <text x="290" y="54" textAnchor="middle" fill="#38ef7d" fontSize="11.5" fontWeight="800">📜 Abbey</text>
          <text x="290" y="74" textAnchor="middle" fill="#cbd5e1" fontSize="9.5">Ora et Labora</text>
          <rect x="20" y="112" width="320" height="58" rx="10" fill="rgba(69,216,255,0.1)" stroke="#45d8ff" />
          <text x="180" y="146" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700">{pick(lang, details[0], details[1])}</text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${role === 'justinian' ? 'primary' : ''}`} onClick={() => setRole('justinian')}>{pick(lang, 'Justinian', 'Giustiniano')}</button>
          <button type="button" className={`cl-btn ${role === 'lombards' ? 'primary' : ''}`} onClick={() => setRole('lombards')}>{pick(lang, 'Lombards', 'Longobardi')}</button>
          <button type="button" className={`cl-btn ${role === 'monks' ? 'primary' : ''}`} onClick={() => setRole('monks')}>{pick(lang, 'Benedictines', 'Benedettini')}</button>
        </div>
        <Readout label={pick(lang, 'Cultural Legacy', 'Eredità Storica')} value={pick(lang, details[0], details[1])} />
        <Analogy
          lang={lang}
          en="When city libraries burned, Benedictine monks acted like human cloud backups—copying Greek and Latin books line by line!"
          it="Quando le biblioteche cittadine scomparvero, gli amanuensi benedettini furono il backup culturale d’Europa!"
        />
      </div>
    </div>
  );
};

// hist_l2_m4 — Baghdad, Sicily & Astrolabe Trade Lab
export const IslamKnowledgeLab: React.FC<Props> = ({ lang }) => {
  const [hub, setHub] = useState<'baghdad' | 'sicily' | 'spain'>('baghdad');
  const map = {
    baghdad: { title: ['Baghdad · House of Wisdom', 'Baghdad · Casa della Saggezza'], gift: ['0–9 numerals, Algebra (Al-Khwarizmi) & Aristotle optics', 'Cifre 0–9, Algebra (Al-Khwarizmi) e ottica'] },
    sicily: { title: ['Arab-Norman Palermo', 'Sicilia Arabo-Normanna'], gift: ['Lemons, oranges, cotton, rice & underground qanat irrigation', 'Agrumi, riso, cotone e canali irrigui'] },
    spain: { title: ['Córdoba & Toledo', 'Cordova e Toledo'], gift: ['Libraries of 400 000 scrolls translated back into Latin', 'Biblioteche immense tradotte in latino per l’Europa'] }
  }[hub];
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Mediterranean Islamic knowledge bridges', 'Ponti del sapere arabo-mediterraneo')}>
          <circle cx="180" cy="75" r="46" fill="rgba(56,239,125,0.12)" stroke="#38ef7d" strokeWidth="2.5" />
          <line x1="180" y1="29" x2="180" y2="121" stroke="#ffd166" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="134" y1="75" x2="226" y2="75" stroke="#ffd166" strokeWidth="1.5" strokeDasharray="4 4" />
          <text x="180" y="79" textAnchor="middle" fill="#ffd166" fontSize="13" fontWeight="800">{pick(lang, map.title[0], map.title[1])}</text>
          <rect x="20" y="132" width="320" height="40" rx="8" fill="rgba(69,216,255,0.12)" stroke="#45d8ff" />
          <text x="180" y="156" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700">{pick(lang, map.gift[0], map.gift[1])}</text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${hub === 'baghdad' ? 'primary' : ''}`} onClick={() => setHub('baghdad')}>Baghdad</button>
          <button type="button" className={`cl-btn ${hub === 'sicily' ? 'primary' : ''}`} onClick={() => setHub('sicily')}>{pick(lang, 'Sicily', 'Sicilia')}</button>
          <button type="button" className={`cl-btn ${hub === 'spain' ? 'primary' : ''}`} onClick={() => setHub('spain')}>Al-Andalus</button>
        </div>
        <Readout label={pick(lang, 'Everyday Words Today', 'Parole arrivate fino a noi')} value="Zero · Cifra · Algebra · Limone · Cotone · Zafferano" />
        <Analogy
          lang={lang}
          en="Just like Wi-Fi relays data around obstacles, Arab scholars carried Indian zero & Greek science across Spain and Sicily!"
          it="Come ponti radio culturali, le città arabe trasmisero lo zero indiano e i classici greci attraverso Sicilia e Spagna!"
        />
      </div>
    </div>
  );
};

// hist_l2_m5 — Feudal Pyramid & Curtis Ledger Lab
export const FeudalCurtisLab: React.FC<Props> = ({ lang }) => {
  const [zone, setZone] = useState<'dominica' | 'massaricia'>('dominica');
  const [corveeDays, setCorveeDays] = useState(3);
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Feudal curtis estate simulator', 'Simulatore della curtis feudale')}>
          <rect x="24" y="24" width="150" height="100" rx="10" fill={zone === 'dominica' ? 'rgba(255,209,102,0.28)' : 'rgba(255,209,102,0.08)'} stroke="#ffd166" />
          <text x="99" y="58" textAnchor="middle" fill="#ffd166" fontSize="12" fontWeight="800">🏰 Pars Dominica</text>
          <text x="99" y="80" textAnchor="middle" fill="#ffffff" fontSize="10.5">{pick(lang, 'Lord’s castle, mill & crop', 'Castello, mulino e terre signore')}</text>
          <rect x="186" y="24" width="150" height="100" rx="10" fill={zone === 'massaricia' ? 'rgba(56,239,125,0.28)' : 'rgba(56,239,125,0.08)'} stroke="#38ef7d" />
          <text x="261" y="58" textAnchor="middle" fill="#38ef7d" fontSize="12" fontWeight="800">🌾 Pars Massaricia</text>
          <text x="261" y="80" textAnchor="middle" fill="#ffffff" fontSize="10.5">{pick(lang, 'Peasant mansi plots', 'Poderi dei contadini (mansi)')}</text>
          <text x="180" y="156" textAnchor="middle" fill="#45d8ff" fontSize="12" fontWeight="800">
            {pick(lang, `Weekly unpaid corvée days on Lord’s land: ${corveeDays} days`, `Giornate settimanali gratuite (corvées): ${corveeDays} giorni`)}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${zone === 'dominica' ? 'primary' : ''}`} onClick={() => setZone('dominica')}>Pars Dominica</button>
          <button type="button" className={`cl-btn ${zone === 'massaricia' ? 'primary' : ''}`} onClick={() => setZone('massaricia')}>Pars Massaricia</button>
        </div>
        <Slider label={pick(lang, 'Peasant corvée days / week', 'Giorni di corvée / settimana')} value={corveeDays} min={1} max={5} unit="d" lang={lang} onChange={setCorveeDays} />
        <Analogy
          lang={lang}
          en="With few coins circulating after Charlemagne, peasants paid castle protection using sweat and sacks of grain instead of cash!"
          it="Con pochissime monete in circolazione, i contadini pagavano la protezione del castello con giornate di lavoro e grano!"
        />
      </div>
    </div>
  );
};

// hist_l2_m6 — Three-Field Rotation & Maritime Republics Lab
export const ThreeFieldComuniLab: React.FC<Props> = ({ lang }) => {
  const [rotation, setRotation] = useState<'two' | 'three'>('three');
  const cultivatedPct = rotation === 'three' ? 67 : 50;
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Two-field vs three-field rotation', 'Rotazione biennale vs triennale')}>
          {rotation === 'two' ? (
            <>
              <rect x="30" y="34" width="145" height="82" rx="8" fill="rgba(56,239,125,0.24)" stroke="#38ef7d" />
              <text x="102" y="80" textAnchor="middle" fill="#38ef7d" fontSize="12" fontWeight="800">50% {pick(lang, 'Grain', 'Grano')}</text>
              <rect x="185" y="34" width="145" height="82" rx="8" fill="rgba(148,163,184,0.16)" stroke="#94a3b8" />
              <text x="257" y="80" textAnchor="middle" fill="#cbd5e1" fontSize="12" fontWeight="800">50% {pick(lang, 'Fallow', 'Riposo')}</text>
            </>
          ) : (
            <>
              <rect x="24" y="34" width="98" height="82" rx="8" fill="rgba(255,209,102,0.25)" stroke="#ffd166" />
              <text x="73" y="80" textAnchor="middle" fill="#ffd166" fontSize="11.5" fontWeight="800">1/3 {pick(lang, 'Wheat', 'Grano')}</text>
              <rect x="131" y="34" width="98" height="82" rx="8" fill="rgba(56,239,125,0.25)" stroke="#38ef7d" />
              <text x="180" y="80" textAnchor="middle" fill="#38ef7d" fontSize="11.5" fontWeight="800">1/3 {pick(lang, 'Peas/Oats', 'Legumi')}</text>
              <rect x="238" y="34" width="98" height="82" rx="8" fill="rgba(148,163,184,0.16)" stroke="#94a3b8" />
              <text x="287" y="80" textAnchor="middle" fill="#cbd5e1" fontSize="11.5" fontWeight="800">1/3 {pick(lang, 'Fallow', 'Maggese')}</text>
            </>
          )}
          <text x="180" y="148" textAnchor="middle" fill="#45d8ff" fontSize="12" fontWeight="800">
            {pick(lang, `Food Output Boost: ${cultivatedPct}% land active · Maritime ships & Comuni rise!`, `Suolo attivo: ${cultivatedPct}% · Nascono Repubbliche Marinare e Comuni!`)}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${rotation === 'two' ? 'primary' : ''}`} onClick={() => setRotation('two')}>{pick(lang, 'Old 2-Field (50%)', 'Biennale (50%)')}</button>
          <button type="button" className={`cl-btn ${rotation === 'three' ? 'primary' : ''}`} onClick={() => setRotation('three')}>{pick(lang, 'Year 1000 3-Field (67%)', 'Triennale Anno Mille (67%)')}</button>
        </div>
        <Readout label={pick(lang, 'Maritime Republics & Guilds', 'Repubbliche Marinare e Arti')} value="Amalfi · Pisa · Genova · Venezia · Bologna (1088)" />
        <Analogy
          lang={lang}
          en="Peas put nitrogen back into soil while feeding horses & towns—fueling Italy’s merchant cities and first university!"
          it="I legumi arricchiscono la terra di azoto e nutrono le città: con più cibo rifiorirono mercati, Arti e università!"
        />
      </div>
    </div>
  );
};

// hist_l2_m7 — Lombard League & Frederick II Lab
export const BarbarossaFrederickLab: React.FC<Props> = ({ lang }) => {
  const [stance, setStance] = useState<'divided' | 'league' | 'frederick2'>('league');
  const note = {
    divided: ['Divided cities get taxed individually by Barbarossa’s officials', 'Città divise sottomesse ai funzionari imperiali'],
    league: ['1167 Pontida + 1176 Legnano: 16 Communes unite & win autonomy!', '1167 Pontida + 1176 Legnano: i Comuni uniti vincono la libertà!'],
    frederick2: ['Sicily 1224: Constitutions of Melfi, Castel del Monte & Italian Sonnet!', 'Sicilia 1224: Costituzioni di Melfi, Castel del Monte e nascita del Sonetto!']
  }[stance];
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Lombard League vs Empire & Frederick II', 'Lega Lombarda e Federico II')}>
          <rect x="20" y="24" width="320" height="80" rx="10" fill="rgba(255,209,102,0.12)" stroke="#ffd166" />
          <text x="180" y="56" textAnchor="middle" fill="#ffd166" fontSize="13" fontWeight="800">
            {stance === 'divided' ? '⚔️ Rivalry: Milan vs Cremona' : stance === 'league' ? '🤝 1176 Legnano: Lombard League ✓' : '👑 Federico II · Stupor Mundi'}
          </text>
          <text x="180" y="84" textAnchor="middle" fill="#ffffff" fontSize="11">{pick(lang, note[0], note[1])}</text>
          <text x="180" y="148" textAnchor="middle" fill="#45d8ff" fontSize="11" fontWeight="700">
            {pick(lang, 'Sicilian Court spoke Latin, Arabic, Greek & early Italian poetry!', 'Alla corte siciliana nasce la Scuola Siciliana: la prima poesia in volgare!')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${stance === 'divided' ? 'primary' : ''}`} onClick={() => setStance('divided')}>{pick(lang, 'Divided Cities', 'Città Divise')}</button>
          <button type="button" className={`cl-btn ${stance === 'league' ? 'primary' : ''}`} onClick={() => setStance('league')}>{pick(lang, '1176 Legnano', 'Legnano 1176')}</button>
          <button type="button" className={`cl-btn ${stance === 'frederick2' ? 'primary' : ''}`} onClick={() => setStance('frederick2')}>Federico II</button>
        </div>
        <Readout label={pick(lang, 'Historical Shift', 'Effetto Storico')} value={pick(lang, note[0], note[1])} />
        <Analogy
          lang={lang}
          en="Rival school classes teaming up to protect fair rules—plus Frederick II mixing Arabic science and early Italian sonnets in Sicily!"
          it="Città rivali che si alleano per difendere i propri diritti a Legnano, e poi il genio multiculturale di Federico II in Sicilia!"
        />
      </div>
    </div>
  );
};

// hist_l2_m8 — Quarantine Days & Wage Recovery Lab (1347)
export const CrisisQuarantineLab: React.FC<Props> = ({ lang }) => {
  const [quarantineDays, setQuarantineDays] = useState(40);
  const safePort = quarantineDays >= 40;
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, '1347 Venetian quarantine harbor simulator', 'Simulatore quarantena portuale 1347')}>
          <rect x="20" y="24" width="320" height="72" rx="10" fill={safePort ? 'rgba(56,239,125,0.14)' : 'rgba(255,107,139,0.16)'} stroke={safePort ? '#38ef7d' : '#ff6b8b'} />
          <text x="180" y="54" textAnchor="middle" fill={safePort ? '#38ef7d' : '#ff6b8b'} fontSize="13.5" fontWeight="800">
            ⛵ {pick(lang, `Ship Isolation: ${quarantineDays} days`, `Isolamento Nave: ${quarantineDays} giorni`)}
          </text>
          <text x="180" y="78" textAnchor="middle" fill="#ffffff" fontSize="11">
            {safePort ? pick(lang, 'QUARANTINE MET ("Quaranta giorni") · Harbor Protected ✓', 'QUARANTENA RISPETTATA ("40 giorni") · Porto Protetto ✓') : pick(lang, 'Too brief! Infected fleas & rats slip ashore ✕', 'Troppo breve! Il contagio sbarca in città ✕')}
          </text>
          <rect x="20" y="112" width="320" height="58" rx="10" fill="rgba(255,209,102,0.1)" stroke="#ffd166" />
          <text x="180" y="146" textAnchor="middle" fill="#ffd166" fontSize="11" fontWeight="700">
            {pick(lang, '1378 Ciompi Revolt & Comuni shifting into stable Signorie', 'Dopo il 1347: salari più alti, Ciompi (1378) e nascita delle Signorie')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, 'Offshore waiting days before unloading', 'Giorni di attesa al largo')} value={quarantineDays} min={5} max={45} step={5} unit={pick(lang, 'd', 'g')} lang={lang} onChange={setQuarantineDays} />
        <Readout label={pick(lang, 'Economic Consequence', 'Conseguenza Economica')} value={pick(lang, 'Worker scarcity raised real wages across Western Europe', 'Poca manodopera → aumento dei salari reali e fine servitù in Occidente')} />
        <Analogy
          lang={lang}
          en="Venice’s 40-day ship rule coined the word ‘quarantine’—still used across medicine 650 years later!"
          it="La regola veneziana dei ‘quaranta giorni’ di attesa alle navi ci ha lasciato la parola quarantena!"
        />
      </div>
    </div>
  );
};

// ============================================================================
// GRADE 11 HISTORY LABS (hist_l3_m1 .. hist_l3_m8)
// ============================================================================

// hist_l3_m1 — Gutenberg Movable Type & Linear Perspective Lab
export const PrintingPerspectiveLab: React.FC<Props> = ({ lang }) => {
  const [mode, setMode] = useState<'scribe' | 'press'>('press');
  const [months, setMonths] = useState(6);
  const books = mode === 'scribe' ? Math.max(1, Math.floor(months / 6)) : months * 400;
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Hand scribe vs Gutenberg printing output', 'Amanuense vs Stampa di Gutenberg')}>
          <rect x="24" y="24" width="312" height="82" rx="10" fill="rgba(255,209,102,0.12)" stroke="#ffd166" />
          <text x="180" y="56" textAnchor="middle" fill="#ffd166" fontSize="14" fontWeight="800">
            {mode === 'press' ? '🖨️ Gutenberg Press (1455)' : '🪶 Monastic Hand Scribe'}
          </text>
          <text x="180" y="84" textAnchor="middle" fill="#38ef7d" fontSize="15" fontWeight="800">
            {books.toLocaleString()} {pick(lang, `books produced in ${months} mo`, `copie stampate in ${months} mesi`)}
          </text>
          <text x="180" y="144" textAnchor="middle" fill="#45d8ff" fontSize="11" fontWeight="700">
            {pick(lang, '1501 Venice: Aldo Manuzio invents pocket italic books!', '1501 Venezia: Aldo Manuzio lancia i libri tascabili in corsivo!')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${mode === 'scribe' ? 'primary' : ''}`} onClick={() => setMode('scribe')}>{pick(lang, 'Hand Copyist', 'Amanuense')}</button>
          <button type="button" className={`cl-btn ${mode === 'press' ? 'primary' : ''}`} onClick={() => setMode('press')}>{pick(lang, 'Gutenberg Press', 'Stampa Gutenberg')}</button>
        </div>
        <Slider label={pick(lang, 'Production duration (months)', 'Durata produzione (mesi)')} value={months} min={6} max={24} step={6} unit={pick(lang, 'mo', 'mesi')} lang={lang} onChange={setMonths} />
        <Analogy
          lang={lang}
          en="Gutenberg’s reusable lead letters multiplied books hundreds of times—like upgrading from handwritten letters to a laser printer!"
          it="I caratteri mobili riutilizzabili moltiplicarono i libri di centinaia di volte, accendendo l’Umanesimo!"
        />
      </div>
    </div>
  );
};

// hist_l3_m2 — Oceanic Routes & Columbian Exchange Dinner Plate
export const ColumbianExchangeLab: React.FC<Props> = ({ lang }) => {
  const [era, setEra] = useState<'pre1492' | 'post1492'>('post1492');
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Columbian Exchange crops across the Atlantic', 'Scambio Colombiano tra Americhe ed Europa')}>
          <rect x="20" y="24" width="150" height="92" rx="10" fill="rgba(56,239,125,0.12)" stroke="#38ef7d" />
          <text x="95" y="50" textAnchor="middle" fill="#38ef7d" fontSize="11.5" fontWeight="800">{pick(lang, 'AMERICAS', 'AMERICHE')}</text>
          <text x="95" y="76" textAnchor="middle" fill="#ffffff" fontSize="11">🍅 🥔 🌽 🍫</text>
          <text x="95" y="98" textAnchor="middle" fill="#cbd5e1" fontSize="9.5">{pick(lang, 'Tomato, Potato, Corn', 'Pomodoro, Patata, Mais')}</text>
          <rect x="190" y="24" width="150" height="92" rx="10" fill="rgba(69,216,255,0.12)" stroke="#45d8ff" />
          <text x="265" y="50" textAnchor="middle" fill="#45d8ff" fontSize="11.5" fontWeight="800">{pick(lang, 'ITALY / EUROPE', 'ITALIA / EUROPA')}</text>
          <text x="265" y="76" textAnchor="middle" fill="#ffffff" fontSize="11">{era === 'pre1492' ? '🍞 🫒 🍇 (No 🍅!)' : '🍕 🍝 🍫 + 🐎 🌾'}</text>
          <text x="265" y="98" textAnchor="middle" fill="#cbd5e1" fontSize="9.5">{era === 'pre1492' ? pick(lang, 'Zero tomatoes yet!', 'Ancora nessun pomodoro!') : pick(lang, 'Tomato pizza unlocked!', 'Pizza col pomodoro nata!')}</text>
          <text x="180" y="150" textAnchor="middle" fill="#ff6b8b" fontSize="10.5" fontWeight="700">
            {pick(lang, 'Warning: Old World diseases & forced labor hit Indigenous societies', 'Impatto tragico: epidemie e schiavitù colpirono i popoli nativi e africani')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${era === 'pre1492' ? 'primary' : ''}`} onClick={() => setEra('pre1492')}>{pick(lang, 'Before 1492', 'Prima del 1492')}</button>
          <button type="button" className={`cl-btn ${era === 'post1492' ? 'primary' : ''}`} onClick={() => setEra('post1492')}>{pick(lang, 'After 1492 Exchange', 'Dopo il 1492')}</button>
        </div>
        <Readout label={pick(lang, 'Navigational Breakthrough', 'Tecnologia Navale')} value={pick(lang, 'Caravel (square + lateen sails) + Compass + Astrolabe', 'Caravella (vela quadra + latina) + Bussola + Astrolabio')} />
        <Analogy
          lang={lang}
          en="Before 1492, Roman emperors NEVER tasted tomato pasta or chocolate—while Native Americans had never seen horses or wheat!"
          it="Prima del 1492 nessuno in Italia conosceva pomodoro, patate o cacao—e in America non esistevano cavalli né grano!"
        />
      </div>
    </div>
  );
};

// hist_l3_m3 — Reformation vs Counter-Reformation Comparison Lab
export const ReformationSplitLab: React.FC<Props> = ({ lang }) => {
  const [view, setView] = useState<'luther' | 'augsburg' | 'trent'>('luther');
  const info = {
    luther: ['1517 Wittenberg: 95 Theses vs indulgences · Bible translated into German', '1517 Wittenberg: 95 Tesi contro indulgenze · Bibbia tradotta in tedesco'],
    augsburg: ['1555 Peace of Augsburg: Cuius regio, eius religio (prince decides)', '1555 Pace di Augusta: Cuius regio, eius religio (sceglie il principe)'],
    trent: ['1545–1563 Council of Trent: Seminaries & discipline + Index & Inquisition', '1545–1563 Concilio di Trento: Seminari e regole + Indice e Inquisizione']
  }[view];
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, '1517 Reformation and 1545 Council of Trent', 'Riforma 1517 e Concilio di Trento')}>
          <rect x="20" y="26" width="320" height="86" rx="10" fill="rgba(168,139,255,0.12)" stroke="#a88bff" />
          <text x="180" y="56" textAnchor="middle" fill="#ffd166" fontSize="13.5" fontWeight="800">
            {view === 'luther' ? '📜 Martin Luther · Sola Fide' : view === 'augsburg' ? '⚖️ 1555 Peace of Augsburg' : '🏛️ Council of Trent (1545–63)'}
          </text>
          <text x="180" y="84" textAnchor="middle" fill="#ffffff" fontSize="11">{pick(lang, info[0], info[1])}</text>
          <text x="180" y="148" textAnchor="middle" fill="#38ef7d" fontSize="11" fontWeight="700">
            {pick(lang, 'Printed vernacular pamphlets spread ideas at record speed!', 'I volantini stampati diffusero le idee in tutta Europa in poche settimane!')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${view === 'luther' ? 'primary' : ''}`} onClick={() => setView('luther')}>1517</button>
          <button type="button" className={`cl-btn ${view === 'augsburg' ? 'primary' : ''}`} onClick={() => setView('augsburg')}>1555</button>
          <button type="button" className={`cl-btn ${view === 'trent' ? 'primary' : ''}`} onClick={() => setView('trent')}>{pick(lang, 'Trent', 'Trento')}</button>
        </div>
        <Readout label={pick(lang, 'Confessional Outcome', 'Esito Religioso')} value={pick(lang, info[0], info[1])} />
        <Analogy
          lang={lang}
          en="Printing turned one professor’s protest note on a church door into Europe’s first viral media debate!"
          it="Senza la stampa, le 95 Tesi sarebbero rimaste un testo locale; con i fogli stampati divennero un dibattito europeo!"
        />
      </div>
    </div>
  );
};

// hist_l3_m4 — Galileo Moons vs Absolutism & 1689 Bill of Rights
export const GalileoParliamentLab: React.FC<Props> = ({ lang }) => {
  const [orbit, setOrbit] = useState(true);
  const [system, setSystem] = useState<'versailles' | 'parliament'>('parliament');
  return (
    <div className="cl-grid">
      <div className={`cl-visual ${orbit ? '' : 'chem-paused'}`}>
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Galileo moons and Parliament vs Absolutism', 'Lune di Giove e Parlamento vs Assolutismo')}>
          <circle cx="95" cy="82" r="24" fill="#ffd166" />
          <text x="95" y="86" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="800">Jupiter</text>
          {[36, 48].map((r, i) => (
            <circle key={i} cx={95 + r} cy={82 - i * 16} r="5" fill="#45d8ff" className="chem-anim-float" />
          ))}
          <text x="95" y="150" textAnchor="middle" fill="#38ef7d" fontSize="10.5" fontWeight="700">{pick(lang, '1609: Moons orbit Jupiter!', '1609: Lune ruotano attorno a Giove!')}</text>
          <rect x="190" y="24" width="150" height="114" rx="10" fill="rgba(69,216,255,0.12)" stroke="#45d8ff" />
          <text x="265" y="56" textAnchor="middle" fill="#45d8ff" fontSize="12" fontWeight="800">
            {system === 'versailles' ? '👑 Louis XIV' : '🏛️ 1689 Bill of Rights'}
          </text>
          <text x="265" y="86" textAnchor="middle" fill="#ffffff" fontSize="10.5">
            {system === 'versailles' ? pick(lang, 'King holds all power', 'Assolutismo a Versailles') : pick(lang, 'King must obey Parliament ✓', 'Re vincolato al Parlamento ✓')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${system === 'versailles' ? 'primary' : ''}`} onClick={() => setSystem('versailles')}>Versailles</button>
          <button type="button" className={`cl-btn ${system === 'parliament' ? 'primary' : ''}`} onClick={() => setSystem('parliament')}>1689 Bill of Rights</button>
          <PlayToggle playing={orbit} onToggle={() => setOrbit(p => !p)} lang={lang} />
        </div>
        <Readout label={pick(lang, 'Scientific Method', 'Metodo Scientifico')} value={pick(lang, 'Observe → Hypothesize → Math Experiment → Verify', 'Osserva → Ipotesi → Esperimento Matematico → Verifica')} />
        <Analogy
          lang={lang}
          en="Just as Galileo let repeatable telescope proof outrank old quotes, England’s Bill of Rights put shared law above one king!"
          it="Come Galileo mise le prove sperimentali sopra l’autorità, il Bill of Rights mise la legge sopra la volontà del re!"
        />
      </div>
    </div>
  );
};

// hist_l3_m5 — Montesquieu 3 Branches & Beccaria Humane Justice
export const EnlightenmentBranchesLab: React.FC<Props> = ({ lang }) => {
  const [merged, setMerged] = useState(false);
  const [beccaria, setBeccaria] = useState(true);
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Separation of powers and Beccaria justice', 'Separazione dei poteri e Beccaria')}>
          <rect x="20" y="24" width="100" height="62" rx="8" fill={merged ? 'rgba(255,107,139,0.2)' : 'rgba(69,216,255,0.16)'} stroke={merged ? '#ff6b8b' : '#45d8ff'} />
          <text x="70" y="59" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700">{pick(lang, 'Legislative', 'Legislativo')}</text>
          <rect x="130" y="24" width="100" height="62" rx="8" fill={merged ? 'rgba(255,107,139,0.2)' : 'rgba(255,209,102,0.16)'} stroke={merged ? '#ff6b8b' : '#ffd166'} />
          <text x="180" y="59" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700">{pick(lang, 'Executive', 'Esecutivo')}</text>
          <rect x="240" y="24" width="100" height="62" rx="8" fill={merged ? 'rgba(255,107,139,0.2)' : 'rgba(56,239,125,0.16)'} stroke={merged ? '#ff6b8b' : '#38ef7d'} />
          <text x="290" y="59" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700">{pick(lang, 'Judicial', 'Giudiziario')}</text>
          <rect x="20" y="106" width="320" height="62" rx="8" fill="rgba(56,239,125,0.1)" stroke={beccaria ? '#38ef7d' : '#ff6b8b'} />
          <text x="180" y="138" textAnchor="middle" fill="#ffffff" fontSize="11.5" fontWeight="700">
            {beccaria
              ? pick(lang, 'Beccaria (1764) → 1786 Tuscany abolishes death penalty first! ✓', 'Beccaria (1764) → Toscana 1786 prima al mondo ad abolire la pena di morte! ✓')
              : pick(lang, 'Old arbitrary torture & secret trials ✕', 'Tortura e pene arbitrarie senza garanzie ✕')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${!merged ? 'primary' : ''}`} onClick={() => setMerged(false)}>{pick(lang, '3 Separate Powers ✓', '3 Poteri Separati ✓')}</button>
          <button type="button" className={`cl-btn ${merged ? 'primary' : ''}`} onClick={() => setMerged(true)}>{pick(lang, 'All in 1 Hand ✕', 'Tutto a 1 Solo ✕')}</button>
          <button type="button" className={`cl-btn ${beccaria ? 'primary' : ''}`} onClick={() => setBeccaria(b => !b)}>⚖️ Beccaria 1786</button>
        </div>
        <Readout label={pick(lang, 'Tyranny Guardrail', 'Garanzia Costituzionale')} value={merged ? pick(lang, 'Dangerous monopoly—no mutual checks!', 'Concentrazione pericolosa senza controlli!') : pick(lang, 'Power checks power cleanly ✓', 'Ogni potere controlla gli altri ✓')} />
        <Analogy
          lang={lang}
          en="Think of a sports match: the team captain shouldn’t write the rulebook AND act as referee AND issue red cards!"
          it="In una partita, chi gioca non può scrivere le regole e fare anche l’arbitro: così i tre poteri proteggono i cittadini!"
        />
      </div>
    </div>
  );
};

// hist_l3_m6 — Watt Steam Piston & Rail Speed Lab
export const SteamFactoryLab: React.FC<Props> = ({ lang }) => {
  const [coalHeat, setCoalHeat] = useState(75);
  const [playing, setPlaying] = useState(true);
  const loomsPowered = Math.round(coalHeat * 0.8);
  const trainKmh = Math.round(12 + coalHeat * 0.36);
  return (
    <div className="cl-grid">
      <div className={`cl-visual ${playing ? '' : 'chem-paused'}`}>
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'James Watt steam piston & textile looms', 'Pistone a vapore di Watt e telai')}>
          <rect x="40" y="54" width="110" height="80" rx="8" fill="rgba(255,107,139,0.16)" stroke="#ff6b8b" strokeWidth="2" />
          <rect x="64" y={102 - coalHeat * 0.4} width="62" height="20" rx="4" fill="#ffd166" />
          <text x="95" y="156" textAnchor="middle" fill="#ffd166" fontSize="11" fontWeight="700">🔥 {pick(lang, 'Steam Boiler', 'Caldaia Vapore')}</text>
          <circle cx="248" cy="84" r="34" fill="none" stroke="#45d8ff" strokeWidth="5" strokeDasharray="10 6" className="chem-anim-spin" />
          <text x="248" y="88" textAnchor="middle" fill="#45d8ff" fontSize="12" fontWeight="800">{loomsPowered} 🧵</text>
          <text x="248" y="148" textAnchor="middle" fill="#38ef7d" fontSize="11" fontWeight="700">🚂 ~{trainKmh} km/h</text>
        </svg>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, 'Coal firebox steam pressure', 'Pressione vapore da carbone')} value={coalHeat} min={20} max={100} unit="%" lang={lang} onChange={setCoalHeat} />
        <div className="cl-row">
          <PlayToggle playing={playing} onToggle={() => setPlaying(p => !p)} lang={lang} />
        </div>
        <Readout label={pick(lang, 'Factory & Rail Output', 'Produzione Tessile e Ferrovia')} value={`${loomsPowered} ${pick(lang, 'power looms', 'telai meccanici')} · ${trainKmh} km/h`} />
        <Analogy
          lang={lang}
          en="Before Watt, textile mills stopped whenever rivers froze; coal-fed steam put tireless rotating power inside cities!"
          it="Prima di Watt i mulini si fermavano col gelo o la siccità; col vapore a carbone nacquero fabbriche continue e ferrovie!"
        />
      </div>
    </div>
  );
};

// hist_l3_m7 — Three Estates Tax vs 1789 Rights & 1804 Code
export const French1789CodeLab: React.FC<Props> = ({ lang }) => {
  const [regime, setRegime] = useState<'before1789' | 'rights1789'>('rights1789');
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Ancien Regime Estates vs 1789 Equality', 'Tre Stati 1789 vs Uguaglianza giuridica')}>
          <rect x="20" y="24" width="320" height="84" rx="10" fill={regime === 'rights1789' ? 'rgba(56,239,125,0.14)' : 'rgba(255,107,139,0.14)'} stroke={regime === 'rights1789' ? '#38ef7d' : '#ff6b8b'} />
          <text x="180" y="54" textAnchor="middle" fill={regime === 'rights1789' ? '#38ef7d' : '#ff6b8b'} fontSize="13.5" fontWeight="800">
            {regime === 'before1789'
              ? pick(lang, 'Pre-1789: 98% Third Estate pays ALONE!', 'Prima del 1789: il 98% (Terzo Stato) paga TUTTE le tasse!')
              : pick(lang, '1789 Declaration & 1804 Code: Equal Citizens! ✓', 'Dichiarazione 1789 & Codice 1804: Legge Uguale per Tutti! ✓')}
          </text>
          <text x="180" y="84" textAnchor="middle" fill="#ffffff" fontSize="11">
            {regime === 'before1789'
              ? pick(lang, 'Clergy & Nobles hold 1 vote each despite tiny numbers', 'Clero e Nobiltà avevano privilegi fiscali ed esenzioni')
              : pick(lang, 'Feudal dues abolished · 1776 US & 1789 France share human rights!', 'Fine privilegi feudali · Diritti umani da Filadelfia a Parigi!')}
          </text>
          <text x="180" y="150" textAnchor="middle" fill="#ffd166" fontSize="11" fontWeight="700">
            {pick(lang, '1804 Napoleonic Civil Code shaped modern Italian & European law', 'Il Codice Civile del 1804 influenzò tutti i codici europei moderni')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${regime === 'before1789' ? 'primary' : ''}`} onClick={() => setRegime('before1789')}>{pick(lang, 'Old 3 Estates', 'Antico Regime')}</button>
          <button type="button" className={`cl-btn ${regime === 'rights1789' ? 'primary' : ''}`} onClick={() => setRegime('rights1789')}>{pick(lang, '1789 + 1804 Code', '1789 + Codice 1804')}</button>
        </div>
        <Readout label={pick(lang, 'Atlantic Link', 'Ponte Atlantico')} value="1776 Philadelphia → July 14, 1789 Bastille → 1804 Civil Code" />
        <Analogy
          lang={lang}
          en="Before 1789, taxes and laws depended on who your parents were; 1789 declared every citizen stands equal before one law!"
          it="Prima del 1789 contava la nascita nobiliare; dal 1789 e col Codice del 1804 tutti i cittadini sono uguali davanti alla legge!"
        />
      </div>
    </div>
  );
};

// hist_l3_m8 — Risorgimento Timeline (1815 -> 1860 -> 1861 -> 1870)
export const RisorgimentoUnityLab: React.FC<Props> = ({ lang }) => {
  const [stage, setStage] = useState<1815 | 1859 | 1861 | 1870>(1861);
  const stepText = {
    1815: ['1815 Vienna: Italy split into 7 states · Mazzini launches Giovine Italia', '1815 Vienna: Italia divisa in 7 Stati · Mazzini fonda la Giovine Italia'],
    1859: ['1859–60: Cavour diplomacy wins North; Garibaldi’s 1 000 sail to Sicily!', '1859–60: Cavour vince al Nord; i Mille di Garibaldi liberano il Sud!'],
    1861: ['March 17, 1861: Unified Kingdom of Italy proclaimed in Turin! ✓', '17 Marzo 1861: Proclamato a Torino il Regno d’Italia unito! ✓'],
    1870: ['1866 Veneto + Sept 20, 1870 Porta Pia: Rome becomes Capital! ✓', '1866 Veneto + 20 Settembre 1870 Porta Pia: Roma è Capitale! ✓']
  }[stage];
  const pct = stage === 1815 ? 14 : stage === 1859 ? 65 : stage === 1861 ? 85 : 100;
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Italian unification progress 1815 to 1870', 'Unificazione italiana dal 1815 al 1870')}>
          <rect x="20" y="34" width="320" height="30" rx="8" fill="rgba(255,255,255,0.06)" stroke="#475569" />
          <rect x="20" y="34" width={(320 * pct) / 100} height="30" rx="8" fill="#38ef7d" />
          <text x="180" y="54" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="800">{pct}% {pick(lang, 'Unified Italy', 'Italia Unita')}</text>
          <rect x="20" y="84" width="320" height="76" rx="10" fill="rgba(69,216,255,0.1)" stroke="#45d8ff" />
          <text x="180" y="114" textAnchor="middle" fill="#ffd166" fontSize="13" fontWeight="800">{stage}</text>
          <text x="180" y="138" textAnchor="middle" fill="#ffffff" fontSize="10.5">{pick(lang, stepText[0], stepText[1])}</text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          {([1815, 1859, 1861, 1870] as const).map(yr => (
            <button key={yr} type="button" className={`cl-btn ${stage === yr ? 'primary' : ''}`} onClick={() => setStage(yr)}>{yr}</button>
          ))}
        </div>
        <Readout label={pick(lang, 'Three Gears of Unity', 'I Protagonisti')} value={pick(lang, 'Mazzini (Ideals) + Cavour (Diplomacy) + Garibaldi (1 000 Volunteers)', 'Mazzini (Ideali) + Cavour (Diplomazia) + Garibaldi (I Mille)')} />
        <Analogy
          lang={lang}
          en="Think of building a bridge from three sides at once—Mazzini’s dream, Cavour’s politics, and Garibaldi’s Teano handshake!"
          it="L’unità nacque dall’incastro di tre forze diverse: gli ideali di Mazzini, la diplomazia di Cavour e l’impresa di Garibaldi!"
        />
      </div>
    </div>
  );
};
