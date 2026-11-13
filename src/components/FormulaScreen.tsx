import React, { useState, useMemo } from 'react';
import { useGame } from '../context/GameContext';
import { FORMULA_CARDS, SUBJECT_TOPICS, FormulaCard } from '../data/formulaData';
import { SubjectId } from '../types';
import { L } from '../helpers';
import { speakItalian } from '../speech/speechEngine';

// Helper for fraction simplification
function reduceFraction(num: number, den: number): [number, number] {
  const gcd = (x: number, y: number): number => (y === 0 ? x : gcd(y, x % y));
  const g = Math.abs(gcd(num, den));
  if (den < 0) {
    num = -num;
    den = -den;
  }
  return [num / g, den / g];
}

interface ItalianVerbMeta {
  infinitive: string;
  auxiliary: 'essere' | 'avere';
  participle: string;
  category: 'movement' | 'state' | 'reflexive' | 'transitive';
  sampleContext: [string, string];
  reason: [string, string];
}

const ITALIAN_VERBS: ItalianVerbMeta[] = [
  {
    infinitive: 'andare',
    auxiliary: 'essere',
    participle: 'andat',
    category: 'movement',
    sampleContext: ['to Rome by high-speed train', 'a Roma con il treno ad alta velocità'],
    reason: [
      'Movement verb with destination. Takes ESSERE with full participle agreement (-o, -a, -i, -e).',
      'Verbo di moto a luogo. Richiede ESSERE con accordo obbligatorio del participio.'
    ]
  },
  {
    infinitive: 'mangiare',
    auxiliary: 'avere',
    participle: 'mangiat',
    category: 'transitive',
    sampleContext: ['a delicious wood-fired pizza', 'una deliziosa pizza margherita'],
    reason: [
      'Active transitive verb. Takes AVERE. Participle ends in invariant -o.',
      'Verbo transitivo attivo. Richiede AVERE. Il participio termina nell’invariato -o.'
    ]
  },
  {
    infinitive: 'partire',
    auxiliary: 'essere',
    participle: 'partit',
    category: 'movement',
    sampleContext: ['early from the central station', 'presto dalla stazione centrale'],
    reason: [
      'Intransitive verb of departure/movement. Takes ESSERE with agreement.',
      'Verbo intransitivo di partenza e movimento. Richiede ESSERE con accordo.'
    ]
  },
  {
    infinitive: 'vedere',
    auxiliary: 'avere',
    participle: 'vist',
    category: 'transitive',
    sampleContext: ['an unforgettable Italian film', 'un film italiano indimenticabile'],
    reason: [
      'Transitive perception verb. Takes AVERE. Irregular participle (visto).',
      'Verbo transitivo di percezione. Richiede AVERE. Participio irregolare (visto).'
    ]
  },
  {
    infinitive: 'nascere',
    auxiliary: 'essere',
    participle: 'nat',
    category: 'state',
    sampleContext: ['in Florence on a sunny day', 'a Firenze in una giornata di sole'],
    reason: [
      'Verb expressing change of existential state. Takes ESSERE with agreement.',
      'Verbo che indica mutamento di stato esistenziale. Richiede ESSERE con accordo.'
    ]
  },
  {
    infinitive: 'scrivere',
    auxiliary: 'avere',
    participle: 'scritt',
    category: 'transitive',
    sampleContext: ['a long postcard to a friend', 'una lunga cartolina a un amico'],
    reason: [
      'Transitive action verb. Takes AVERE. Irregular participle (scritto).',
      'Verbo transitivo attivo. Richiede AVERE. Participio irregolare (scritto).'
    ]
  },
  {
    infinitive: 'tornare',
    auxiliary: 'essere',
    participle: 'tornat',
    category: 'movement',
    sampleContext: ['home late after dinner', 'a casa tardi dopo cena'],
    reason: [
      'Movement / return verb. Takes ESSERE with subject agreement.',
      'Verbo di ritorno e movimento. Richiede ESSERE con accordo col soggetto.'
    ]
  }
];

const ITALIAN_MINIMAL_PAIRS = [
  {
    single: { word: 'pala', meaning: ['shovel', 'pala'], phonetic: 'PA-la' },
    double: { word: 'palla', meaning: ['ball', 'palla'], phonetic: 'PAL-la (held double L)' },
    contrast: ['Single L vs Geminate LL', 'L singola vs Doppia LL marcata']
  },
  {
    single: { word: 'casa', meaning: ['house', 'casa'], phonetic: 'KA-za' },
    double: { word: 'cassa', meaning: ['checkout / register / box', 'cassa del supermercato'], phonetic: 'KAS-sa (sharp double S)' },
    contrast: ['Soft voiced S vs Unvoiced sharp SS', 'S sorda singola vs Doppia SS marcata']
  },
  {
    single: { word: 'sete', meaning: ['thirst', 'sete'], phonetic: 'SE-te' },
    double: { word: 'sette', meaning: ['number seven', 'numero 7'], phonetic: 'SET-te (crisp double T pause)' },
    contrast: ['Single T vs Glottal stop double TT', 'T singola vs Doppia TT con stacco netto']
  },
  {
    single: { word: 'caro', meaning: ['dear / expensive', 'caro'], phonetic: 'KA-ro (single tap R)' },
    double: { word: 'carro', meaning: ['cart / wagon', 'carro'], phonetic: 'KAR-ro (rolling trill RR)' },
    contrast: ['Single tap R vs Rolling alveolar trill RR', 'R battuta vs R vibrante multipla']
  },
  {
    single: { word: 'ciao', meaning: ['hello (soft C)', 'ciao (C dolce)'], phonetic: 'CHOW' },
    double: { word: 'chianti', meaning: ['Chianti wine (hard C with H)', 'Chianti (C dura con acca)'], phonetic: 'KYAN-tee' },
    contrast: ['Soft C vs Hard C with Acca (H)', 'C dolce vs C dura con acca muta']
  }
];

interface SubjectMeta {
  id: SubjectId | 'all';
  name: [string, string];
  icon: string;
  badgeColor: string;
}

const SUBJECT_LIST: SubjectMeta[] = [
  { id: 'all', name: ['All Subjects', 'Tutte le Materie'], icon: '🌐', badgeColor: 'var(--data)' },
  { id: 'italian', name: ['Italian Studies', 'Lingua Italiana'], icon: '🇮🇹', badgeColor: 'var(--accent)' },
  { id: 'math', name: ['Mathematics', 'Matematica'], icon: '∑', badgeColor: 'var(--gold)' },
  { id: 'phys', name: ['Physics', 'Fisica'], icon: '⚡', badgeColor: 'var(--sakura)' },
  { id: 'cs', name: ['Computer Science', 'Informatica'], icon: '💾', badgeColor: 'var(--data)' },
  { id: 'science', name: ['Grade 5 Science', 'Scienze (5ª Primaria)'], icon: '🔬', badgeColor: 'var(--good)' },
  { id: 'math5', name: ['Grade 5 Maths', 'Matematica (5ª Primaria)'], icon: '📐', badgeColor: 'var(--sakura)' }
];

export const FormulaScreen: React.FC = () => {
  const { state, goToView } = useGame();
  const { lang, subject: gameSubject } = state;

  // Active Subject Selection (defaults to current game subject if valid, else 'math')
  const [activeSubject, setActiveSubject] = useState<SubjectId | 'all'>(() => {
    if (gameSubject && ['math', 'phys', 'cs', 'science', 'math5', 'italian'].includes(gameSubject)) {
      return gameSubject;
    }
    return 'math';
  });

  // Active Topic Selection ('all' = All Formulas for selected subject, or specific topic ID)
  const [activeTopic, setActiveTopic] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showWorkbench, setShowWorkbench] = useState<boolean>(false);
  const [activeTool, setActiveTool] = useState<
    'binomial' | 'trinomial' | 'equation' | 'inequality' | 'lever' | 'density' | 'binary' | 'ohm' | 'italian-auxiliary' | 'italian-phonetics'
  >('binomial');

  // Italian Workbench States
  const [selectedVerbIdx, setSelectedVerbIdx] = useState<number>(0);
  const [italianSubjectPronoun, setItalianSubjectPronoun] = useState<'io' | 'tu' | 'lui' | 'lei' | 'noi' | 'voi' | 'loro'>('io');
  const [italianGender, setItalianGender] = useState<'m' | 'f'>('f');

  // Workbench Interactive States
  // 1. Binomial Expander (Ax + B)^2
  const [binA, setBinA] = useState<number>(2);
  const [binB, setBinB] = useState<number>(3);

  // 2. Special Trinomial Factoring (x^2 + sx + p)
  const [triSum, setTriSum] = useState<number>(5);
  const [triProd, setTriProd] = useState<number>(6);

  // 3. Linear Equation ax = b
  const [eqA, setEqA] = useState<number>(3);
  const [eqB, setEqB] = useState<number>(12);

  // 4. Inequality kx < b
  const [inEqK, setInEqK] = useState<number>(-2);
  const [inEqB, setInEqB] = useState<number>(6);

  // 5. Lever Balance Calculator
  const [leverFr, setLeverFr] = useState<number>(400); // 400 N load
  const [leverBr, setLeverBr] = useState<number>(0.2); // 0.2 m load arm
  const [leverBm, setLeverBm] = useState<number>(1.0); // 1.0 m motive arm

  // 6. Density Calculator
  const [densMass, setDensMass] = useState<number>(600); // grams
  const [densVol, setDensVol] = useState<number>(300); // cm3

  // 7. Binary to Decimal Converter
  const [binValue, setBinValue] = useState<string>('10110');

  // 8. Ohm's Law Calculator
  const [ohmVolts, setOhmVolts] = useState<number>(12);
  const [ohmResistance, setOhmResistance] = useState<number>(4);

  // Handle subject change: reset topic to 'all'
  const handleSelectSubject = (subjId: SubjectId | 'all') => {
    setActiveSubject(subjId);
    setActiveTopic('all');
  };

  // Available topics for active subject
  const currentTopics = useMemo(() => {
    if (activeSubject === 'all') return [];
    return SUBJECT_TOPICS[activeSubject] || [];
  }, [activeSubject]);

  // Counts per subject
  const subjectCounts = useMemo(() => {
    const counts: Record<string, number> = { all: FORMULA_CARDS.length, math: 0, phys: 0, cs: 0, science: 0 };
    for (const card of FORMULA_CARDS) {
      if (counts[card.subject] !== undefined) {
        counts[card.subject]++;
      }
    }
    return counts;
  }, []);

  // Counts per topic within current subject
  const topicCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const card of FORMULA_CARDS) {
      if (activeSubject === 'all' || card.subject === activeSubject) {
        counts[card.topicId] = (counts[card.topicId] || 0) + 1;
      }
    }
    return counts;
  }, [activeSubject]);

  // Filtered formula cards
  const filteredCards = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return FORMULA_CARDS.filter(card => {
      // 1. Subject filter
      if (activeSubject !== 'all' && card.subject !== activeSubject) {
        return false;
      }
      // 2. Topic filter
      if (activeTopic !== 'all' && card.topicId !== activeTopic) {
        return false;
      }
      // 3. Search query
      if (!q) return true;
      const titleEn = card.title[0].toLowerCase();
      const titleIt = card.title[1].toLowerCase();
      const formula = card.formula.toLowerCase();
      const exampleEn = card.example[0].toLowerCase();
      const exampleIt = card.example[1].toLowerCase();
      const trapEn = card.trap ? card.trap[0].toLowerCase() : '';
      const trapIt = card.trap ? card.trap[1].toLowerCase() : '';
      const rulesText = card.rules
        ? card.rules
            .map(r => `${r.name[0]} ${r.name[1]} ${r.math} ${r.desc[0]} ${r.desc[1]}`)
            .join(' ')
            .toLowerCase()
        : '';

      return (
        titleEn.includes(q) ||
        titleIt.includes(q) ||
        formula.includes(q) ||
        exampleEn.includes(q) ||
        exampleIt.includes(q) ||
        trapEn.includes(q) ||
        trapIt.includes(q) ||
        rulesText.includes(q)
      );
    });
  }, [activeSubject, activeTopic, searchQuery]);

  // Calculations for Workbench
  // 1. Binomial (Ax + B)^2 = A^2 x^2 + 2AB x + B^2
  const binA2 = binA * binA;
  const bin2AB = 2 * binA * binB;
  const binB2 = binB * binB;
  const binTerm1 = binA2 === 1 ? 'x²' : binA2 === -1 ? '-x²' : `${binA2}x²`;
  const binTerm2 =
    bin2AB === 0
      ? ''
      : bin2AB > 0
      ? ` + ${bin2AB === 1 ? '' : bin2AB}x`
      : ` - ${Math.abs(bin2AB) === 1 ? '' : Math.abs(bin2AB)}x`;
  const binTerm3 = binB2 >= 0 ? ` + ${binB2}` : ` - ${Math.abs(binB2)}`;
  const binExpanded = `${binTerm1}${binTerm2}${binTerm3}`;

  // 2. Trinomial Factoring x^2 + sx + p = (x + m)(x + n)
  const trinomialFactors = useMemo(() => {
    const limit = Math.max(Math.abs(triProd), 50);
    for (let m = -limit; m <= limit; m++) {
      if (m === 0 && triProd !== 0) continue;
      const n = triSum - m;
      if (m * n === triProd) {
        return { found: true, m, n };
      }
    }
    return { found: false, m: 0, n: 0 };
  }, [triSum, triProd]);

  // 3. Linear Equation ax = b
  const eqClassification = useMemo(() => {
    if (eqA !== 0) {
      const [rNum, rDen] = reduceFraction(eqB, eqA);
      const fracStr = rDen === 1 ? `${rNum}` : `${rNum}/${rDen}`;
      const dec = (eqB / eqA).toFixed(2);
      return {
        type: 'determined',
        title: ['Determined Equation', 'Equazione Determinata'],
        badge: ['1 Unique Solution', '1 Sola Soluzione'],
        solution: `x = ${fracStr}${rDen !== 1 ? ` (≈ ${dec})` : ''}`,
        explanation: [
          `Divide both sides by ${eqA}: x = ${eqB} / ${eqA} = ${fracStr}. S = {${fracStr}}`,
          `Dividiamo ambo i membri per ${eqA}: x = ${eqB} / ${eqA} = ${fracStr}. Insieme soluzioni S = {${fracStr}}`
        ]
      };
    } else if (eqB === 0) {
      return {
        type: 'indeterminate',
        title: ['Indeterminate (Identity)', 'Equazione Indeterminata (Identità)'],
        badge: ['Infinite Solutions', 'Infinite Soluzioni (S = ℝ)'],
        solution: '0x = 0  ⇒  ∀ x ∈ ℝ',
        explanation: [
          '0 multiplied by any real number always equals 0. Every real number is a valid solution!',
          '0 moltiplicato per qualunque numero reale fa sempre 0. Qualunque numero è soluzione! S = ℝ'
        ]
      };
    } else {
      return {
        type: 'impossible',
        title: ['Impossible Equation', 'Equazione Impossibile'],
        badge: ['No Solution', 'Nessuna Soluzione (S = ∅)'],
        solution: `0x = ${eqB}  ⇒  ∅`,
        explanation: [
          `0 multiplied by x can NEVER equal ${eqB}. Division by 0 is undefined! S = ∅`,
          `0 moltiplicato per x non può MAI fare ${eqB}. Non si può dividere per zero! Insieme soluzioni S = ∅`
        ]
      };
    }
  }, [eqA, eqB]);

  // 5. Lever Motive Force Calculation
  const leverFm = useMemo(() => {
    if (leverBm <= 0) return 0;
    return Number(((leverFr * leverBr) / leverBm).toFixed(1));
  }, [leverFr, leverBr, leverBm]);

  // 6. Density Calculation
  const densityCalc = useMemo(() => {
    if (densVol <= 0) return { gcm3: '0.00', kgm3: 0 };
    const gcm3 = densMass / densVol;
    const kgm3 = gcm3 * 1000;
    return { gcm3: gcm3.toFixed(2), kgm3: Math.round(kgm3) };
  }, [densMass, densVol]);

  // 7. Binary to Decimal Calculation
  const binaryCalc = useMemo(() => {
    const clean = binValue.replace(/[^01]/g, '') || '0';
    const dec = parseInt(clean, 2);
    const powersExpansion = clean
      .split('')
      .reverse()
      .map((bit, idx) => `${bit}·2^${idx}`)
      .reverse()
      .join(' + ');
    return { clean, dec, powersExpansion };
  }, [binValue]);

  // 8. Ohm's Law Calculation
  const ohmCurrent = useMemo(() => {
    if (ohmResistance <= 0) return 0;
    return Number((ohmVolts / ohmResistance).toFixed(2));
  }, [ohmVolts, ohmResistance]);
  const ohmPower = useMemo(() => {
    return Number((ohmVolts * ohmCurrent).toFixed(2));
  }, [ohmVolts, ohmCurrent]);

  // Active Subject details
  const activeSubjectInfo = SUBJECT_LIST.find(s => s.id === activeSubject) || SUBJECT_LIST[0];
  const activeTopicInfo = currentTopics.find(t => t.id === activeTopic);

  // Visual SVGs for cards
  const renderVisual = (key?: string) => {
    if (!key) return null;

    if (key === 'math-square-binomial') {
      return (
        <div style={{ margin: '14px 0', background: 'var(--panel2)', borderRadius: '12px', padding: '14px', border: '1px solid var(--line)' }}>
          <div style={{ fontSize: '13px', fontFamily: 'var(--mono)', color: 'var(--data)', marginBottom: '8px', textAlign: 'center' }}>
            {L(['Geometric Model of (A + B)²: Area of 4 Regions', 'Modello geometrico di (A + B)²: Somma delle 4 aree'], lang)}
          </div>
          <svg viewBox="0 0 320 200" style={{ width: '100%', maxHeight: '180px', display: 'block', margin: '0 auto' }}>
            <rect x="50" y="20" width="160" height="160" fill="none" stroke="var(--line)" strokeWidth="2" strokeDasharray="4 4" />
            <rect x="50" y="20" width="100" height="100" fill="#45d8ff" fillOpacity="0.25" stroke="#45d8ff" strokeWidth="2" />
            <text x="100" y="75" fill="#45d8ff" fontSize="16" fontWeight="bold" textAnchor="middle">A²</text>
            <rect x="150" y="20" width="60" height="100" fill="#ffd166" fillOpacity="0.25" stroke="#ffd166" strokeWidth="2" />
            <text x="180" y="75" fill="#ffd166" fontSize="14" fontWeight="bold" textAnchor="middle">A·B</text>
            <rect x="50" y="120" width="100" height="60" fill="#ffd166" fillOpacity="0.25" stroke="#ffd166" strokeWidth="2" />
            <text x="100" y="155" fill="#ffd166" fontSize="14" fontWeight="bold" textAnchor="middle">A·B</text>
            <rect x="150" y="120" width="60" height="60" fill="#ff8fc0" fillOpacity="0.25" stroke="#ff8fc0" strokeWidth="2" />
            <text x="180" y="155" fill="#ff8fc0" fontSize="14" fontWeight="bold" textAnchor="middle">B²</text>
            <text x="100" y="15" fill="var(--text)" fontSize="12" textAnchor="middle">A</text>
            <text x="180" y="15" fill="var(--text)" fontSize="12" textAnchor="middle">B</text>
            <text x="38" y="75" fill="var(--text)" fontSize="12" textAnchor="middle">A</text>
            <text x="38" y="155" fill="var(--text)" fontSize="12" textAnchor="middle">B</text>
            <path d="M 230 110 L 195 110" stroke="#ffd166" strokeWidth="2" />
            <text x="240" y="105" fill="#ffd166" fontSize="12" fontWeight="bold">2 × (A·B)</text>
            <text x="240" y="122" fill="var(--muted)" fontSize="10">{L(['Double Product!', 'Doppio Prodotto!'], lang)}</text>
          </svg>
        </div>
      );
    }

    if (key === 'math-diff-squares') {
      return (
        <div style={{ margin: '14px 0', background: 'var(--panel2)', borderRadius: '12px', padding: '14px', border: '1px solid var(--line)' }}>
          <div style={{ fontSize: '13px', fontFamily: 'var(--mono)', color: 'var(--data)', marginBottom: '8px', textAlign: 'center' }}>
            {L(['Geometric Dissection: A² minus B² cutout', 'Dissezione geometrica: A² meno il ritaglio B²'], lang)}
          </div>
          <svg viewBox="0 0 320 180" style={{ width: '100%', maxHeight: '160px', display: 'block', margin: '0 auto' }}>
            <rect x="60" y="20" width="130" height="130" fill="#ff6a3d" fillOpacity="0.2" stroke="#ff6a3d" strokeWidth="2" />
            <rect x="140" y="20" width="50" height="50" fill="#0e0f22" stroke="var(--bad)" strokeWidth="2" strokeDasharray="3 3" />
            <text x="165" y="50" fill="var(--bad)" fontSize="13" fontWeight="bold" textAnchor="middle">−B²</text>
            <text x="100" y="85" fill="#ff6a3d" fontSize="15" fontWeight="bold" textAnchor="middle">A² − B²</text>
            <text x="100" y="105" fill="var(--text)" fontSize="11" textAnchor="middle">=(A+B)(A−B)</text>
            <text x="125" y="168" fill="var(--text)" fontSize="12" textAnchor="middle">A</text>
            <text x="45" y="85" fill="var(--text)" fontSize="12" textAnchor="middle">A</text>
          </svg>
        </div>
      );
    }

    if (key === 'math-equation-balance') {
      return (
        <div style={{ margin: '14px 0', background: 'var(--panel2)', borderRadius: '12px', padding: '14px', border: '1px solid var(--line)' }}>
          <div style={{ fontSize: '13px', fontFamily: 'var(--mono)', color: 'var(--data)', marginBottom: '8px', textAlign: 'center' }}>
            {L(['Equation Balance Principle: Whatever you do to one side, do to the other!', 'Principio della bilancia: Ciò che fai a un membro, fallo anche all\'altro!'], lang)}
          </div>
          <svg viewBox="0 0 320 160" style={{ width: '100%', maxHeight: '150px', display: 'block', margin: '0 auto' }}>
            <polygon points="160,90 145,140 175,140" fill="#363a74" stroke="var(--line)" strokeWidth="2" />
            <line x1="50" y1="90" x2="270" y2="90" stroke="var(--gold)" strokeWidth="4" />
            <circle cx="160" cy="90" r="5" fill="var(--gold)" />
            <line x1="80" y1="90" x2="60" y2="120" stroke="var(--line)" strokeWidth="1.5" />
            <line x1="80" y1="90" x2="100" y2="120" stroke="var(--line)" strokeWidth="1.5" />
            <rect x="50" y="120" width="60" height="8" rx="4" fill="var(--data)" />
            <text x="80" y="115" fill="var(--data)" fontSize="13" fontWeight="bold" textAnchor="middle">3x + 5</text>
            <line x1="240" y1="90" x2="220" y2="120" stroke="var(--line)" strokeWidth="1.5" />
            <line x1="240" y1="90" x2="260" y2="120" stroke="var(--line)" strokeWidth="1.5" />
            <rect x="210" y="120" width="60" height="8" rx="4" fill="var(--ember)" />
            <text x="240" y="115" fill="var(--ember)" fontSize="13" fontWeight="bold" textAnchor="middle">17</text>
            <text x="160" y="65" fill="var(--good)" fontSize="14" fontWeight="bold" textAnchor="middle">⚖ EQUAL / UGUALE</text>
          </svg>
        </div>
      );
    }

    if (key === 'math-inequality-line') {
      return (
        <div style={{ margin: '14px 0', background: 'var(--panel2)', borderRadius: '12px', padding: '14px', border: '1px solid var(--line)' }}>
          <div style={{ fontSize: '13px', fontFamily: 'var(--mono)', color: 'var(--data)', marginBottom: '8px', textAlign: 'center' }}>
            {L(['Number Line Solution Ray: x > -3  (open dot = strictly greater)', 'Semiretta delle soluzioni: x > -3 (pallino vuoto = escluso)'], lang)}
          </div>
          <svg viewBox="0 0 320 100" style={{ width: '100%', maxHeight: '100px', display: 'block', margin: '0 auto' }}>
            <line x1="30" y1="50" x2="290" y2="50" stroke="var(--muted)" strokeWidth="2" />
            <polygon points="290,50 280,45 280,55" fill="var(--muted)" />
            {[-4, -3, -2, -1, 0, 1, 2, 3].map((val, idx) => {
              const xPos = 50 + idx * 30;
              return (
                <g key={val}>
                  <line x1={xPos} y1="45" x2={xPos} y2="55" stroke="var(--line)" strokeWidth="2" />
                  <text x={xPos} y="72" fill="var(--muted)" fontSize="11" textAnchor="middle">{val}</text>
                </g>
              );
            })}
            <line x1="80" y1="50" x2="290" y2="50" stroke="var(--data)" strokeWidth="6" opacity="0.6" />
            <circle cx="80" cy="50" r="7" fill="var(--panel2)" stroke="var(--ember)" strokeWidth="3" />
            <text x="80" y="32" fill="var(--ember)" fontSize="12" fontWeight="bold" textAnchor="middle">x &gt; −3</text>
          </svg>
        </div>
      );
    }

    if (key === 'math-integers-line') {
      return (
        <div style={{ margin: '14px 0', background: 'var(--panel2)', borderRadius: '12px', padding: '14px', border: '1px solid var(--line)' }}>
          <div style={{ fontSize: '13px', fontFamily: 'var(--mono)', color: 'var(--data)', marginBottom: '8px', textAlign: 'center' }}>
            {L(['The Parenthesis Difference: (-3)² vs -3²', 'La differenza della parentesi: (-3)² contro -3²'], lang)}
          </div>
          <svg viewBox="0 0 320 90" style={{ width: '100%', maxHeight: '90px', display: 'block', margin: '0 auto' }}>
            <line x1="20" y1="45" x2="300" y2="45" stroke="var(--line)" strokeWidth="2" />
            <circle cx="160" cy="45" r="4" fill="var(--muted)" />
            <text x="160" y="65" fill="var(--muted)" fontSize="11" textAnchor="middle">0</text>
            <circle cx="60" cy="45" r="7" fill="var(--bad)" />
            <text x="60" y="32" fill="var(--bad)" fontSize="13" fontWeight="bold" textAnchor="middle">−3² = −9</text>
            <circle cx="260" cy="45" r="7" fill="var(--good)" />
            <text x="260" y="32" fill="var(--good)" fontSize="13" fontWeight="bold" textAnchor="middle">(−3)² = +9</text>
          </svg>
        </div>
      );
    }

    if (key === 'math-fractions-visual') {
      return (
        <div style={{ margin: '14px 0', background: 'var(--panel2)', borderRadius: '12px', padding: '14px', border: '1px solid var(--line)' }}>
          <div style={{ fontSize: '13px', fontFamily: 'var(--mono)', color: 'var(--data)', marginBottom: '8px', textAlign: 'center' }}>
            {L(['Invariant Property: 2/3 = 4/6 = 6/9 (Identical shaded area)', 'Proprietà invariantiva: 2/3 = 4/6 = 6/9 (Stessa area colorata)'], lang)}
          </div>
          <svg viewBox="0 0 320 110" style={{ width: '100%', maxHeight: '110px', display: 'block', margin: '0 auto' }}>
            <rect x="30" y="15" width="260" height="20" rx="4" fill="#171935" stroke="var(--line)" />
            <rect x="30" y="15" width="173" height="20" rx="4" fill="#45d8ff" fillOpacity="0.4" />
            <line x1="116.6" y1="15" x2="116.6" y2="35" stroke="var(--line)" />
            <line x1="203.3" y1="15" x2="203.3" y2="35" stroke="var(--line)" />
            <text x="15" y="30" fill="var(--text)" fontSize="12" fontWeight="bold">2/3</text>
            <rect x="30" y="45" width="260" height="20" rx="4" fill="#171935" stroke="var(--line)" />
            <rect x="30" y="45" width="173" height="20" rx="4" fill="#ffd166" fillOpacity="0.4" />
            {[1, 2, 3, 4, 5].map(step => (
              <line key={step} x1={30 + step * 43.3} y1="45" x2={30 + step * 43.3} y2="65" stroke="var(--line)" />
            ))}
            <text x="15" y="60" fill="var(--text)" fontSize="12" fontWeight="bold">4/6</text>
            <text x="160" y="95" fill="var(--good)" fontSize="13" fontWeight="bold" textAnchor="middle">2/3 = (2·2)/(3·2) = 4/6</text>
          </svg>
        </div>
      );
    }

    if (key === 'math-mcd-mcm') {
      return (
        <div style={{ margin: '14px 0', background: 'var(--panel2)', borderRadius: '12px', padding: '14px', border: '1px solid var(--line)' }}>
          <div style={{ fontSize: '13px', fontFamily: 'var(--mono)', color: 'var(--data)', marginBottom: '8px', textAlign: 'center' }}>
            {L(['Venn Model of 12 and 18: MCD = Intersection (6), mcm = Union (36)', 'Diagramma di Venn di 12 e 18: M.C.D. = Intersezione (6), m.c.m. = Unione (36)'], lang)}
          </div>
          <svg viewBox="0 0 320 150" style={{ width: '100%', maxHeight: '140px', display: 'block', margin: '0 auto' }}>
            <circle cx="120" cy="75" r="55" fill="#45d8ff" fillOpacity="0.2" stroke="#45d8ff" strokeWidth="2" />
            <circle cx="200" cy="75" r="55" fill="#ffd166" fillOpacity="0.2" stroke="#ffd166" strokeWidth="2" />
            <text x="90" y="80" fill="#45d8ff" fontSize="15" fontWeight="bold" textAnchor="middle">2</text>
            <text x="90" y="35" fill="#45d8ff" fontSize="12" textAnchor="middle">12 (2²·3)</text>
            <text x="160" y="70" fill="var(--good)" fontSize="14" fontWeight="bold" textAnchor="middle">2 · 3</text>
            <text x="160" y="90" fill="var(--good)" fontSize="11" textAnchor="middle">MCD = 6</text>
            <text x="230" y="80" fill="#ffd166" fontSize="15" fontWeight="bold" textAnchor="middle">3</text>
            <text x="230" y="35" fill="#ffd166" fontSize="12" textAnchor="middle">18 (2·3²)</text>
            <text x="160" y="142" fill="var(--text)" fontSize="12" fontWeight="bold" textAnchor="middle">
              m.c.m. = 2² · 3² = 36 ({L(['All factors with max exp', 'Tutti i fattori con max esponente'], lang)})
            </text>
          </svg>
        </div>
      );
    }

    return null;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      {/* 1. Header Banner */}
      <div className="card">
        <div className="mhead">
          <div>
            <div className="eyebrow">
              {L(
                [
                  "HUNTER'S FORMULA SHEET · CATEGORIZED BY SUBJECT & TOPIC",
                  "FORMULARIO E REGOLE D'ORO · SUDDIVISO PER MATERIA E ARGOMENTO"
                ],
                lang
              )}
            </div>
            <h2>{L(['Formulas, Rules & Golden Traps', 'Formule, Regole & Tranelli d\'Oro'], lang)}</h2>
          </div>
          <div className="row" style={{ gap: '8px' }}>
            <button
              type="button"
              className={`btn ${showWorkbench ? 'cyan' : 'ghost'}`}
              onClick={() => setShowWorkbench(v => !v)}
            >
              {showWorkbench
                ? L(['📖 View Formula Cards', '📖 Mostra Schede Formule'], lang)
                : L(['⚡ Interactive Math & Science Lab', '⚡ Palestra Interattiva di Calcolo'], lang)}
            </button>
            <button type="button" className="btn ghost" onClick={() => goToView('map')}>
              {L(['Back to Missions', 'Torna alle Missioni'], lang)}
            </button>
          </div>
        </div>

        <p className="muted" style={{ margin: '8px 0 0', maxWidth: '72ch' }}>
          {L(
            [
              'Browse formulas categorized by subject (Mathematics, Physics, Computer Science, Grade 5 Science). Filter by all formulas in a subject or dive into specific topics with worked examples and exam trap warnings.',
              'Esplora le formule suddivise per materia (Matematica, Fisica, Informatica, Scienze 5ª). Visualizza tutte le formule della materia o scegli uno specifico argomento con esempi svolti e tranelli d\'esame.'
            ],
            lang
          )}
        </p>
      </div>

      {/* 2. LEVEL 1: SUBJECT SELECTOR CARDS / PILLS */}
      <div className="card" style={{ padding: '14px 16px' }}>
        <div className="eyebrow" style={{ marginBottom: '8px', color: 'var(--data)' }}>
          {L(['STEP 1: SELECT SUBJECT', 'PASSO 1: SCEGLI LA MATERIA'], lang)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
          {SUBJECT_LIST.map(subj => {
            const isSelected = activeSubject === subj.id;
            const count = subjectCounts[subj.id] || 0;
            return (
              <button
                key={subj.id}
                type="button"
                onClick={() => handleSelectSubject(subj.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: `2px solid ${isSelected ? 'var(--ember)' : 'var(--line)'}`,
                  background: isSelected ? 'var(--panel2)' : 'var(--panel)',
                  color: isSelected ? 'var(--text)' : 'var(--muted)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  boxShadow: isSelected ? '0 0 14px rgba(255,106,61,0.25)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '18px' }}>{subj.icon}</span>
                  <span style={{ fontWeight: isSelected ? 'bold' : 'normal', fontSize: '14px', color: isSelected ? 'var(--text)' : 'inherit' }}>
                    {L(subj.name, lang)}
                  </span>
                </div>
                <span
                  className={`badge ${isSelected ? 'ok' : 'lock'}`}
                  style={{ fontSize: '11px', padding: '2px 7px' }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. LEVEL 2: DYNAMIC TOPIC FILTER (FOR THE CHOSEN SUBJECT) */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderLeft: `5px solid ${activeSubjectInfo.badgeColor}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--data)' }}>
              {L(['STEP 2: FILTER TOPICS', 'PASSO 2: FILTRA PER ARGOMENTO'], lang)} · {L(activeSubjectInfo.name, lang)}
            </div>
            <div style={{ fontSize: '15px', fontWeight: 'bold', marginTop: '2px' }}>
              {activeTopic === 'all'
                ? L(
                    [
                      `Showing All ${activeSubject === 'all' ? '' : L(activeSubjectInfo.name, lang)} Formulas`,
                      `Visualizzazione di Tutte le Formule ${activeSubject === 'all' ? '' : `di ${L(activeSubjectInfo.name, lang)}`}`
                    ],
                    lang
                  )
                : L(
                    [
                      `Filtered Topic: ${L(activeTopicInfo?.name || '', lang)}`,
                      `Argomento: ${L(activeTopicInfo?.name || '', lang)}`
                    ],
                    lang
                  )}
            </div>
          </div>

          {/* Quick Breadcrumb Button to clear topic filter */}
          {activeTopic !== 'all' && (
            <button
              type="button"
              className="btn sm ghost"
              onClick={() => setActiveTopic('all')}
              style={{ fontSize: '12px' }}
            >
              ✕ {L(['View All Topics in Subject', 'Mostra Tutti gli Argomenti'], lang)}
            </button>
          )}
        </div>

        {/* Topic filter pills */}
        <div className="row" style={{ gap: '8px', overflowX: 'auto', paddingBottom: '2px' }}>
          {/* 'All formulas in this subject' button */}
          <button
            type="button"
            className={`btn sm ${activeTopic === 'all' ? 'cyan' : 'ghost'}`}
            onClick={() => setActiveTopic('all')}
          >
            ★ {L(['All Formulas', 'Tutte le Formule'], lang)} ({subjectCounts[activeSubject] || 0})
          </button>

          {/* Individual topics belonging to the selected subject */}
          {currentTopics.map(topic => {
            const isTopicSelected = activeTopic === topic.id;
            const topicCount = topicCounts[topic.id] || 0;
            return (
              <button
                key={topic.id}
                type="button"
                className={`btn sm ${isTopicSelected ? 'cyan' : 'ghost'}`}
                onClick={() => setActiveTopic(topic.id)}
              >
                {L(topic.name, lang)} ({topicCount})
              </button>
            );
          })}
        </div>

        {/* Real-time search bar */}
        <div style={{ marginTop: '4px' }}>
          <input
            className="codex-search"
            placeholder={L(
              [
                `Search inside ${L(activeSubjectInfo.name, lang)} (formula, rule, or trap)...`,
                `Cerca in ${L(activeSubjectInfo.name, lang)} (formula, regola o tranello)...`
              ],
              lang
            )}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="muted" style={{ fontSize: '13px' }}>
          {L(['Displaying', 'Visualizzate'], lang)}: <b>{filteredCards.length}</b> {L(['formula cards', 'schede formule'], lang)}
        </div>
      </div>

      {/* 4. INTERACTIVE WORKBENCH (MATHS, PHYSICS & CS LIVE SOLVERS) */}
      {showWorkbench && (
        <div className="card" style={{ border: '2px solid var(--data)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
            <div>
              <div className="eyebrow" style={{ color: 'var(--data)' }}>
                {L(['INTERACTIVE MATH & SCIENCE LAB · PALESTRA DI CALCOLO', 'PALESTRA INTERATTIVA DI CALCOLO'], lang)}
              </div>
              <h3 style={{ fontSize: '20px' }}>
                {L(['Live Verifiers & Experimental Solvers', 'Verificatori e Risolutori Interattivi in Tempo Reale'], lang)}
              </h3>
            </div>
            <div className="row" style={{ gap: '6px' }}>
              <button
                type="button"
                className={`btn sm ${activeTool === 'binomial' ? 'cyan' : 'ghost'}`}
                onClick={() => setActiveTool('binomial')}
              >
                (A + B)²
              </button>
              <button
                type="button"
                className={`btn sm ${activeTool === 'trinomial' ? 'cyan' : 'ghost'}`}
                onClick={() => setActiveTool('trinomial')}
              >
                x² + sx + p
              </button>
              <button
                type="button"
                className={`btn sm ${activeTool === 'equation' ? 'cyan' : 'ghost'}`}
                onClick={() => setActiveTool('equation')}
              >
                ax = b
              </button>
              <button
                type="button"
                className={`btn sm ${activeTool === 'inequality' ? 'cyan' : 'ghost'}`}
                onClick={() => setActiveTool('inequality')}
              >
                kx &lt; b
              </button>
              <button
                type="button"
                className={`btn sm ${activeTool === 'lever' ? 'cyan' : 'ghost'}`}
                onClick={() => setActiveTool('lever')}
              >
                ⚖ {L(['Levers', 'Leve'], lang)}
              </button>
              <button
                type="button"
                className={`btn sm ${activeTool === 'density' ? 'cyan' : 'ghost'}`}
                onClick={() => setActiveTool('density')}
              >
                ρ = m/V
              </button>
              <button
                type="button"
                className={`btn sm ${activeTool === 'binary' ? 'cyan' : 'ghost'}`}
                onClick={() => setActiveTool('binary')}
              >
                0101₂ ↔ 10₁₀
              </button>
              <button
                type="button"
                className={`btn sm ${activeTool === 'ohm' ? 'cyan' : 'ghost'}`}
                onClick={() => setActiveTool('ohm')}
              >
                V = I · R
              </button>
              <button
                type="button"
                className={`btn sm ${activeTool === 'italian-auxiliary' ? 'cyan' : 'ghost'}`}
                onClick={() => setActiveTool('italian-auxiliary')}
              >
                🇮🇹 {L(['Essere vs Avere', 'Essere vs Avere'], lang)}
              </button>
              <button
                type="button"
                className={`btn sm ${activeTool === 'italian-phonetics' ? 'cyan' : 'ghost'}`}
                onClick={() => setActiveTool('italian-phonetics')}
              >
                🗣️ {L(['Doppie & C/G', 'Doppie e C/G'], lang)}
              </button>
            </div>
          </div>

          {/* Tool 1: Square of Binomial */}
          {activeTool === 'binomial' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p className="muted" style={{ fontSize: '14px' }}>
                {L(
                  [
                    'Test any binomial (Ax + B)². Watch how the double product 2·(Ax)·B is formed and why omitting it leads to errors.',
                    'Verifica lo sviluppo di qualsiasi binomio (Ax + B)². Osserva come nasce il fondamentale doppio prodotto 2·(Ax)·B e perché ometterlo è un errore grave.'
                  ],
                  lang
                )}
              </p>

              <div className="row" style={{ gap: '16px', background: 'var(--panel2)', padding: '14px', borderRadius: '12px' }}>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '140px' }}>
                  <span className="eyebrow">A (x coefficient): {binA}</span>
                  <input
                    type="range"
                    min="-5"
                    max="5"
                    step="1"
                    value={binA}
                    onChange={e => setBinA(Number(e.target.value) || 1)}
                  />
                </label>

                <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '140px' }}>
                  <span className="eyebrow">B (constant): {binB}</span>
                  <input
                    type="range"
                    min="-10"
                    max="10"
                    step="1"
                    value={binB}
                    onChange={e => setBinB(Number(e.target.value))}
                  />
                </label>
              </div>

              <div
                style={{
                  background: 'var(--panel)',
                  border: '1px solid var(--line)',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '22px', fontFamily: 'var(--mono)', color: 'var(--gold)', marginBottom: '8px' }}>
                  ({binA === 1 ? 'x' : binA === -1 ? '-x' : `${binA}x`} {binB >= 0 ? `+ ${binB}` : `- ${Math.abs(binB)}`})²
                </div>

                <div style={{ fontSize: '15px', color: 'var(--text)', marginBottom: '12px' }}>
                  = <b>({binA}x)²</b> + <b style={{ color: 'var(--ember)' }}>2 · ({binA}x) · ({binB})</b> + <b>({binB})²</b>
                </div>

                <div
                  style={{
                    fontSize: '26px',
                    fontFamily: 'var(--display)',
                    color: 'var(--data)',
                    background: 'var(--panel2)',
                    padding: '10px 16px',
                    borderRadius: '10px',
                    display: 'inline-block'
                  }}
                >
                  {binExpanded}
                </div>

                <div
                  style={{
                    marginTop: '12px',
                    fontSize: '13px',
                    color: 'var(--ember)',
                    background: 'rgba(255,106,61,0.12)',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    display: 'inline-block'
                  }}
                >
                  ⚠️ {L(['Notice the middle double product', 'Attenzione al doppio prodotto intermedio'], lang)}:{' '}
                  <b>{bin2AB >= 0 ? `+${bin2AB}x` : `${bin2AB}x`}</b>!
                </div>
              </div>
            </div>
          )}

          {/* Tool 2: Special Trinomial Factoring */}
          {activeTool === 'trinomial' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p className="muted" style={{ fontSize: '14px' }}>
                {L(
                  [
                    'Find two numbers m and n such that m + n = s (sum) and m · n = p (product) to factor x² + sx + p into (x + m)(x + n).',
                    'Trova due numeri interi m ed n la cui somma sia s e il prodotto sia p per scomporre il trinomio speciale x² + sx + p = (x + m)(x + n).'
                  ],
                  lang
                )}
              </p>

              <div className="row" style={{ gap: '16px', background: 'var(--panel2)', padding: '14px', borderRadius: '12px' }}>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '140px' }}>
                  <span className="eyebrow">Sum s: {triSum}</span>
                  <input
                    type="range"
                    min="-15"
                    max="15"
                    step="1"
                    value={triSum}
                    onChange={e => setTriSum(Number(e.target.value))}
                  />
                </label>

                <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '140px' }}>
                  <span className="eyebrow">Product p: {triProd}</span>
                  <input
                    type="range"
                    min="-24"
                    max="24"
                    step="1"
                    value={triProd}
                    onChange={e => setTriProd(Number(e.target.value))}
                  />
                </label>
              </div>

              <div
                style={{
                  background: 'var(--panel)',
                  border: '1px solid var(--line)',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '20px', fontFamily: 'var(--mono)', color: 'var(--gold)', marginBottom: '8px' }}>
                  x² {triSum >= 0 ? `+ ${triSum}x` : `- ${Math.abs(triSum)}x`} {triProd >= 0 ? `+ ${triProd}` : `- ${Math.abs(triProd)}`}
                </div>

                {trinomialFactors.found ? (
                  <>
                    <div style={{ fontSize: '14px', color: 'var(--good)', marginBottom: '8px' }}>
                      ✓ {L(['Found numbers', 'Numeri trovati'], lang)}: <b>m = {trinomialFactors.m}</b>, <b>n = {trinomialFactors.n}</b>{' '}
                      ({trinomialFactors.m} + {trinomialFactors.n} = {triSum}, {trinomialFactors.m} · {trinomialFactors.n} = {triProd})
                    </div>
                    <div
                      style={{
                        fontSize: '24px',
                        fontFamily: 'var(--display)',
                        color: 'var(--data)',
                        background: 'var(--panel2)',
                        padding: '10px 16px',
                        borderRadius: '10px',
                        display: 'inline-block'
                      }}
                    >
                      (x {trinomialFactors.m >= 0 ? `+ ${trinomialFactors.m}` : `- ${Math.abs(trinomialFactors.m)}`}) (x {trinomialFactors.n >= 0 ? `+ ${trinomialFactors.n}` : `- ${Math.abs(trinomialFactors.n)}`})
                    </div>
                  </>
                ) : (
                  <div style={{ color: 'var(--bad)', fontSize: '15px' }}>
                    ✕ {L(['No two integer factors found for sum and product.', 'Nessuna coppia di numeri interi trovata per questa somma e prodotto.'], lang)}
                    <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                      {L(['(Irreducible in integers ℤ)', '(Trinomio irriducibile nei numeri interi ℤ)'], lang)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tool 3: Linear Equation ax = b */}
          {activeTool === 'equation' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p className="muted" style={{ fontSize: '14px' }}>
                {L(
                  [
                    'Test the normal form ax = b. Observe how a = 0 creates indeterminate (0x = 0) or impossible (0x = b) equations.',
                    'Esplora la forma normale ax = b. Osserva come il caso a = 0 renda l\'equazione indeterminata (0x = 0) o impossibile (0x = b).'
                  ],
                  lang
                )}
              </p>

              <div className="row" style={{ gap: '16px', background: 'var(--panel2)', padding: '14px', borderRadius: '12px' }}>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '140px' }}>
                  <span className="eyebrow">Coefficient a: {eqA}</span>
                  <input
                    type="range"
                    min="-6"
                    max="6"
                    step="1"
                    value={eqA}
                    onChange={e => setEqA(Number(e.target.value))}
                  />
                </label>

                <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '140px' }}>
                  <span className="eyebrow">Constant b: {eqB}</span>
                  <input
                    type="range"
                    min="-12"
                    max="12"
                    step="1"
                    value={eqB}
                    onChange={e => setEqB(Number(e.target.value))}
                  />
                </label>
              </div>

              <div
                style={{
                  background: 'var(--panel)',
                  border: '1px solid var(--line)',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '24px', fontFamily: 'var(--mono)', color: 'var(--gold)', marginBottom: '8px' }}>
                  {eqA}x = {eqB}
                </div>

                <div style={{ marginBottom: '10px' }}>
                  <span
                    className={`badge ${
                      eqClassification.type === 'determined'
                        ? 'ok'
                        : eqClassification.type === 'indeterminate'
                        ? 'go'
                        : 'lock'
                    }`}
                    style={{ fontSize: '14px', padding: '4px 12px' }}
                  >
                    {L(eqClassification.badge, lang)} · {L(eqClassification.title, lang)}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: '22px',
                    fontFamily: 'var(--display)',
                    color: 'var(--data)',
                    background: 'var(--panel2)',
                    padding: '8px 16px',
                    borderRadius: '10px',
                    display: 'inline-block'
                  }}
                >
                  {eqClassification.solution}
                </div>

                <p style={{ marginTop: '12px', fontSize: '13px', color: 'var(--muted)' }}>
                  {L(eqClassification.explanation, lang)}
                </p>
              </div>
            </div>
          )}

          {/* Tool 4: Inequality Inverter */}
          {activeTool === 'inequality' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p className="muted" style={{ fontSize: '14px' }}>
                {L(
                  [
                    'Watch the Golden Rule in action: move multiplier k below zero and see the inequality sign flip!',
                    'Osserva la Regola d\'Oro in azione: imposta un moltiplicatore k negativo per vedere il verso capovolgersi!'
                  ],
                  lang
                )}
              </p>

              <div className="row" style={{ gap: '16px', background: 'var(--panel2)', padding: '14px', borderRadius: '12px' }}>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '140px' }}>
                  <span className="eyebrow">Multiplier k: {inEqK}</span>
                  <input
                    type="range"
                    min="-5"
                    max="5"
                    step="1"
                    value={inEqK}
                    onChange={e => {
                      const val = Number(e.target.value);
                      setInEqK(val === 0 ? 1 : val);
                    }}
                  />
                </label>

                <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '140px' }}>
                  <span className="eyebrow">Constant b: {inEqB}</span>
                  <input
                    type="range"
                    min="-10"
                    max="10"
                    step="1"
                    value={inEqB}
                    onChange={e => setInEqB(Number(e.target.value))}
                  />
                </label>
              </div>

              <div
                style={{
                  background: 'var(--panel)',
                  border: `2px solid ${inEqK < 0 ? 'var(--ember)' : 'var(--line)'}`,
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '20px', fontFamily: 'var(--mono)', color: 'var(--text)', marginBottom: '8px' }}>
                  {inEqK}x &lt; {inEqB}
                </div>

                {inEqK < 0 ? (
                  <div
                    style={{
                      background: 'rgba(255,106,61,0.18)',
                      color: 'var(--ember)',
                      padding: '8px 14px',
                      borderRadius: '8px',
                      marginBottom: '10px',
                      fontWeight: 'bold',
                      fontSize: '14px'
                    }}
                  >
                    ⚠️ {L(['DIVIDING BY NEGATIVE NUMBER: FLIP SIGN (< becomes >)!', 'DIVISIONE PER NUMERO NEGATIVO: INVERTI IL VERSO (< diventa >)!'], lang)}
                  </div>
                ) : (
                  <div style={{ color: 'var(--good)', marginBottom: '10px', fontSize: '14px' }}>
                    ✓ {L(['Dividing by positive: sign stays unchanged (<)', 'Divisione per numero positivo: il verso rimane inalterato (<)'], lang)}
                  </div>
                )}

                <div
                  style={{
                    fontSize: '24px',
                    fontFamily: 'var(--display)',
                    color: inEqK < 0 ? 'var(--ember)' : 'var(--data)',
                    background: 'var(--panel2)',
                    padding: '8px 16px',
                    borderRadius: '10px',
                    display: 'inline-block'
                  }}
                >
                  x {inEqK < 0 ? '>' : '<'} {reduceFraction(inEqB, inEqK)[1] === 1 ? `${reduceFraction(inEqB, inEqK)[0]}` : `${reduceFraction(inEqB, inEqK)[0]}/${reduceFraction(inEqB, inEqK)[1]}`}
                </div>
              </div>
            </div>
          )}

          {/* Tool 5: Lever Equilibrium Calculator */}
          {activeTool === 'lever' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p className="muted" style={{ fontSize: '14px' }}>
                {L(
                  [
                    'Test the Law of Levers: F_m · b_m = F_r · b_r. Notice how increasing the motive arm b_m drastically reduces the needed effort F_m!',
                    'Verifica la Legge delle Leve: F_m · b_m = F_r · b_r. Nota come allungando il braccio motore b_m si riduce enormemente lo sforzo F_m necessario!'
                  ],
                  lang
                )}
              </p>

              <div className="row" style={{ gap: '16px', background: 'var(--panel2)', padding: '14px', borderRadius: '12px' }}>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '130px' }}>
                  <span className="eyebrow">Load F_r: {leverFr} N</span>
                  <input
                    type="range"
                    min="100"
                    max="1000"
                    step="50"
                    value={leverFr}
                    onChange={e => setLeverFr(Number(e.target.value))}
                  />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '130px' }}>
                  <span className="eyebrow">Load arm b_r: {leverBr} m</span>
                  <input
                    type="range"
                    min="0.1"
                    max="1.0"
                    step="0.05"
                    value={leverBr}
                    onChange={e => setLeverBr(Number(e.target.value))}
                  />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '130px' }}>
                  <span className="eyebrow">Motive arm b_m: {leverBm} m</span>
                  <input
                    type="range"
                    min="0.2"
                    max="2.5"
                    step="0.1"
                    value={leverBm}
                    onChange={e => setLeverBm(Number(e.target.value))}
                  />
                </label>
              </div>

              <div
                style={{
                  background: 'var(--panel)',
                  border: '1px solid var(--line)',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '15px', color: 'var(--muted)', marginBottom: '6px' }}>
                  F_m = (F_r · b_r) / b_m = ({leverFr} · {leverBr}) / {leverBm}
                </div>
                <div
                  style={{
                    fontSize: '26px',
                    fontFamily: 'var(--display)',
                    color: 'var(--gold)',
                    background: 'var(--panel2)',
                    padding: '8px 16px',
                    borderRadius: '10px',
                    display: 'inline-block'
                  }}
                >
                  F_m = {leverFm} N
                </div>
                <div style={{ marginTop: '10px', fontSize: '13px', color: leverBm > leverBr ? 'var(--good)' : 'var(--ember)' }}>
                  {leverBm > leverBr
                    ? L([`✓ Favorable lever! Effort is reduced by ${(leverBm / leverBr).toFixed(1)}x`, `✓ Leva vantaggiosa! Sforzo ridotto di ${(leverBm / leverBr).toFixed(1)} volte`], lang)
                    : L(['⚠️ Unfavorable lever: requires more force than the load.', '⚠️ Leva svantaggiosa: richiede più forza del carico.'], lang)}
                </div>
              </div>
            </div>
          )}

          {/* Tool 6: Density Calculator */}
          {activeTool === 'density' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p className="muted" style={{ fontSize: '14px' }}>
                {L(
                  ['Calculate density ρ = m / V and test if the body floats in water (1.00 g/cm³ = 1000 kg/m³).', 'Calcola la densità ρ = m / V e verifica se il corpo galleggia in acqua (1,00 g/cm³ = 1000 kg/m³).'],
                  lang
                )}
              </p>

              <div className="row" style={{ gap: '16px', background: 'var(--panel2)', padding: '14px', borderRadius: '12px' }}>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '140px' }}>
                  <span className="eyebrow">Mass m: {densMass} g</span>
                  <input
                    type="range"
                    min="50"
                    max="1500"
                    step="50"
                    value={densMass}
                    onChange={e => setDensMass(Number(e.target.value))}
                  />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '140px' }}>
                  <span className="eyebrow">Volume V: {densVol} cm³</span>
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    step="25"
                    value={densVol}
                    onChange={e => setDensVol(Number(e.target.value))}
                  />
                </label>
              </div>

              <div
                style={{
                  background: 'var(--panel)',
                  border: '1px solid var(--line)',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    fontSize: '26px',
                    fontFamily: 'var(--display)',
                    color: 'var(--data)',
                    background: 'var(--panel2)',
                    padding: '8px 16px',
                    borderRadius: '10px',
                    display: 'inline-block'
                  }}
                >
                  ρ = {densityCalc.gcm3} g/cm³ ({densityCalc.kgm3} kg/m³)
                </div>
                <div style={{ marginTop: '10px', fontSize: '14px', fontWeight: 'bold' }}>
                  {Number(densityCalc.gcm3) < 1.0 ? (
                    <span style={{ color: 'var(--good)' }}>
                      🏊 {L(['Floats in water (ρ < 1.0 g/cm³)', 'Galleggia in acqua (ρ < 1,0 g/cm³)'], lang)}
                    </span>
                  ) : (
                    <span style={{ color: 'var(--bad)' }}>
                      ⚓ {L(['Sinks in water (ρ > 1.0 g/cm³)', 'Affonda in acqua (ρ > 1,0 g/cm³)'], lang)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Tool 7: Binary Positional Calculator */}
          {activeTool === 'binary' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p className="muted" style={{ fontSize: '14px' }}>
                {L(
                  ['Enter any binary number (0s and 1s) to see its decimal conversion via positional powers of 2.', 'Inserisci un numero binario (0 e 1) per vederne la conversione decimale tramite le potenze posizionali di 2.'],
                  lang
                )}
              </p>

              <div style={{ background: 'var(--panel2)', padding: '14px', borderRadius: '12px' }}>
                <label className="eyebrow" style={{ display: 'block', marginBottom: '6px' }}>
                  {L(['Binary Digits (e.g. 10110)', 'Cifre binarie (es. 10110)'], lang)}
                </label>
                <input
                  type="text"
                  maxLength={12}
                  value={binValue}
                  onChange={e => setBinValue(e.target.value.replace(/[^01]/g, ''))}
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '20px',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--line)',
                    background: 'var(--panel)',
                    color: 'var(--gold)',
                    letterSpacing: '0.1em'
                  }}
                />
              </div>

              <div
                style={{
                  background: 'var(--panel)',
                  border: '1px solid var(--line)',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '8px', fontFamily: 'var(--mono)' }}>
                  {binaryCalc.powersExpansion}
                </div>
                <div
                  style={{
                    fontSize: '28px',
                    fontFamily: 'var(--display)',
                    color: 'var(--data)',
                    background: 'var(--panel2)',
                    padding: '8px 20px',
                    borderRadius: '10px',
                    display: 'inline-block'
                  }}
                >
                  {binaryCalc.clean}₂ = {binaryCalc.dec}₁₀
                </div>
              </div>
            </div>
          )}

          {/* Tool 8: Ohm's Law Calculator */}
          {activeTool === 'ohm' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p className="muted" style={{ fontSize: '14px' }}>
                {L(
                  ['Adjust Voltage V and Resistance R to compute Current I (A) and dissipated Power P (W).', 'Regola la Tensione V e la Resistenza R per calcolare la Corrente I (A) e la Potenza dissipata P (W).'],
                  lang
                )}
              </p>

              <div className="row" style={{ gap: '16px', background: 'var(--panel2)', padding: '14px', borderRadius: '12px' }}>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '140px' }}>
                  <span className="eyebrow">Voltage V: {ohmVolts} V</span>
                  <input
                    type="range"
                    min="1"
                    max="48"
                    step="1"
                    value={ohmVolts}
                    onChange={e => setOhmVolts(Number(e.target.value))}
                  />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '140px' }}>
                  <span className="eyebrow">Resistance R: {ohmResistance} Ω</span>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="1"
                    value={ohmResistance}
                    onChange={e => setOhmResistance(Number(e.target.value))}
                  />
                </label>
              </div>

              <div
                style={{
                  background: 'var(--panel)',
                  border: '1px solid var(--line)',
                  borderRadius: '12px',
                  padding: '16px',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '20px',
                  flexWrap: 'wrap'
                }}
              >
                <div style={{ background: 'var(--panel2)', padding: '10px 18px', borderRadius: '10px', textAlign: 'center' }}>
                  <div className="eyebrow">{L(['Current I = V / R', 'Corrente I = V / R'], lang)}</div>
                  <div style={{ fontSize: '24px', fontFamily: 'var(--display)', color: 'var(--data)', marginTop: '4px' }}>
                    {ohmCurrent} A
                  </div>
                </div>
                <div style={{ background: 'var(--panel2)', padding: '10px 18px', borderRadius: '10px', textAlign: 'center' }}>
                  <div className="eyebrow">{L(['Power P = V · I', 'Potenza P = V · I'], lang)}</div>
                  <div style={{ fontSize: '24px', fontFamily: 'var(--display)', color: 'var(--gold)', marginTop: '4px' }}>
                    {ohmPower} W
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tool 9: Italian Auxiliary & Agreement Engine */}
          {activeTool === 'italian-auxiliary' && (() => {
            const verb = ITALIAN_VERBS[selectedVerbIdx] || ITALIAN_VERBS[0];
            const isEssere = verb.auxiliary === 'essere';

            const auxPresent: Record<'io'|'tu'|'lui'|'lei'|'noi'|'voi'|'loro', { essere: string; avere: string }> = {
              io: { essere: 'sono', avere: 'ho' },
              tu: { essere: 'sei', avere: 'hai' },
              lui: { essere: 'è', avere: 'ha' },
              lei: { essere: 'è', avere: 'ha' },
              noi: { essere: 'siamo', avere: 'abbiamo' },
              voi: { essere: 'siete', avere: 'avete' },
              loro: { essere: 'sono', avere: 'hanno' }
            };

            let ending = 'o';
            if (isEssere) {
              if (italianSubjectPronoun === 'lui') ending = 'o';
              else if (italianSubjectPronoun === 'lei') ending = 'a';
              else if (italianSubjectPronoun === 'noi' || italianSubjectPronoun === 'voi' || italianSubjectPronoun === 'loro') {
                ending = italianGender === 'f' ? 'e' : 'i';
              } else {
                ending = italianGender === 'f' ? 'a' : 'o';
              }
            }
            const participleFull = isEssere ? `${verb.participle}${ending}` : `${verb.participle}o`;
            const auxForm = auxPresent[italianSubjectPronoun][verb.auxiliary];
            const fullSentenceIt = `${italianSubjectPronoun.toUpperCase()} ${auxForm} ${participleFull} ${verb.sampleContext[1]}.`;
            const fullSentenceEn = `${italianSubjectPronoun} (${auxForm} ${participleFull}) ${verb.sampleContext[0]}.`;

            return (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <p className="muted" style={{ fontSize: '14px' }}>
                  {L(
                    ['Select any high-frequency verb and subject pronoun to see whether it requires ESSERE or AVERE, and how the participle agrees.', 'Seleziona un verbo comune e un pronome soggetto per verificare se richiede ESSERE o AVERE e come si accorda il participio.'],
                    lang
                  )}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {ITALIAN_VERBS.map((v, idx) => (
                    <button
                      key={v.infinitive}
                      type="button"
                      className={`btn sm ${selectedVerbIdx === idx ? 'cyan' : 'ghost'}`}
                      onClick={() => setSelectedVerbIdx(idx)}
                    >
                      {v.infinitive.toUpperCase()} ({v.auxiliary})
                    </button>
                  ))}
                </div>

                <div className="row" style={{ gap: '12px', background: 'var(--panel2)', padding: '12px', borderRadius: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
                    <span className="eyebrow">{L(['Subject:', 'Soggetto:'], lang)}</span>
                    <select
                      value={italianSubjectPronoun}
                      onChange={e => setItalianSubjectPronoun(e.target.value as any)}
                      style={{ padding: '6px 10px', borderRadius: '6px', background: 'var(--panel)', color: 'var(--fg)', border: '1px solid var(--line)' }}
                    >
                      <option value="io">io (I)</option>
                      <option value="tu">tu (you)</option>
                      <option value="lui">lui (he)</option>
                      <option value="lei">lei (she)</option>
                      <option value="noi">noi (we)</option>
                      <option value="voi">voi (you all)</option>
                      <option value="loro">loro (they)</option>
                    </select>
                  </label>

                  {isEssere && !['lui', 'lei'].includes(italianSubjectPronoun) && (
                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
                      <span className="eyebrow">{L(['Gender:', 'Genere:'], lang)}</span>
                      <select
                        value={italianGender}
                        onChange={e => setItalianGender(e.target.value as any)}
                        style={{ padding: '6px 10px', borderRadius: '6px', background: 'var(--panel)', color: 'var(--fg)', border: '1px solid var(--line)' }}
                      >
                        <option value="m">{L(['Masculine', 'Maschile'], lang)}</option>
                        <option value="f">{L(['Feminine', 'Femminile'], lang)}</option>
                      </select>
                    </label>
                  )}

                  <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      padding: '3px 8px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: 'bold',
                      background: isEssere ? 'rgba(255, 93, 143, 0.2)' : 'rgba(106, 209, 255, 0.2)',
                      border: `1px solid ${isEssere ? 'var(--sakura)' : 'var(--data)'}`,
                      color: isEssere ? 'var(--sakura)' : 'var(--data)'
                    }}>
                      {isEssere ? 'AUSILIARE: ESSERE' : 'AUSILIARE: AVERE'}
                    </span>
                  </div>
                </div>

                <div style={{ background: 'var(--panel)', border: '1px solid var(--line)', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                    <div>
                      <div className="eyebrow">{L(['Generated Sentence · Passato Prossimo', 'Frase Generata · Passato Prossimo'], lang)}</div>
                      <div style={{ fontSize: '20px', fontWeight: 600, color: 'var(--fg)', marginTop: '4px' }}>
                        {fullSentenceIt}
                      </div>
                      <div style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '2px' }}>
                        {fullSentenceEn}
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn"
                      onClick={() => speakItalian(fullSentenceIt, { rate: 0.88 })}
                      style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 14px' }}
                    >
                      🔊 {L(['Listen Native Pronunciation', 'Ascolta Pronuncia'], lang)}
                    </button>
                  </div>

                  <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px solid var(--line)', fontSize: '13px', color: 'var(--text)' }}>
                    💡 <strong>{L(['Grammar Rule:', 'Regola Grammaticale:'], lang)}</strong> {L(verb.reason, lang)}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Tool 10: Italian Minimal Pairs & Phonetics Soundboard */}
          {activeTool === 'italian-phonetics' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p className="muted" style={{ fontSize: '14px' }}>
                {L(
                  ['Listen to contrast pairs side-by-side to train your ear on double consonants (doppie) and hard vs soft C and G sounds.', 'Ascolta le coppie minime a confronto per allenare l’orecchio sulle doppie consonanti e sui suoni dolci/duri di C e G.'],
                  lang
                )}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
                {ITALIAN_MINIMAL_PAIRS.map((pair, pIdx) => (
                  <div
                    key={pIdx}
                    style={{
                      background: 'var(--panel2)',
                      border: '1px solid var(--line)',
                      borderRadius: '10px',
                      padding: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px'
                    }}
                  >
                    <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--gold)', letterSpacing: '0.05em' }}>
                      {L(pair.contrast, lang)}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                      <div style={{ flex: 1, background: 'var(--panel)', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
                        <div style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--data)' }}>{pair.single.word}</div>
                        <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>{pair.single.phonetic}</div>
                        <div style={{ fontSize: '12px', color: 'var(--text)', marginTop: '4px' }}>{L(pair.single.meaning, lang)}</div>
                        <button
                          type="button"
                          className="btn sm"
                          onClick={() => speakItalian(pair.single.word, { rate: 0.85 })}
                          style={{ marginTop: '8px', width: '100%' }}
                        >
                          🔊 {pair.single.word}
                        </button>
                      </div>

                      <div style={{ flex: 1, background: 'var(--panel)', padding: '10px', borderRadius: '8px', textAlign: 'center', border: '1px solid rgba(255, 93, 143, 0.3)' }}>
                        <div style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--sakura)' }}>{pair.double.word}</div>
                        <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>{pair.double.phonetic}</div>
                        <div style={{ fontSize: '12px', color: 'var(--text)', marginTop: '4px' }}>{L(pair.double.meaning, lang)}</div>
                        <button
                          type="button"
                          className="btn sm cyan"
                          onClick={() => speakItalian(pair.double.word, { rate: 0.85 })}
                          style={{ marginTop: '8px', width: '100%' }}
                        >
                          🔊 {pair.double.word}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 5. FORMULA CARDS GRID */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filteredCards.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '36px 16px' }}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>🔍</div>
            <h3>{L(['No formulas found', 'Nessuna formula trovata'], lang)}</h3>
            <p className="muted" style={{ margin: '6px 0 16px' }}>
              {L(
                ['Try adjusting your search query or switching to another topic or subject.', 'Prova a modificare la ricerca o a cambiare argomento o materia.'],
                lang
              )}
            </p>
            <button
              type="button"
              className="btn"
              onClick={() => {
                setActiveTopic('all');
                setSearchQuery('');
              }}
            >
              {L(['Reset Filters', 'Reimposta Filtri'], lang)}
            </button>
          </div>
        ) : (
          filteredCards.map(card => {
            const cardSubjectInfo = SUBJECT_LIST.find(s => s.id === card.subject) || SUBJECT_LIST[1];
            const cardTopic = SUBJECT_TOPICS[card.subject]?.find(t => t.id === card.topicId);

            return (
              <div
                key={card.id}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  borderLeft: `5px solid ${cardSubjectInfo.badgeColor}`
                }}
              >
                {/* Card Header: Subject + Topic Breadcrumb */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '6px' }}>
                  <div>
                    <div className="eyebrow" style={{ fontSize: '11px', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span>{cardSubjectInfo.icon} {L(cardSubjectInfo.name, lang)}</span>
                      <span>›</span>
                      <span style={{ color: 'var(--data)' }}>{cardTopic ? L(cardTopic.name, lang) : card.topicId}</span>
                    </div>
                    <h3 style={{ fontSize: '19px', marginTop: '4px' }}>{L(card.title, lang)}</h3>
                  </div>
                  <span className="badge ok" style={{ fontSize: '11px' }}>
                    {cardSubjectInfo.icon} {L(cardSubjectInfo.name, lang)}
                  </span>
                </div>

                {/* Main Formula Highlight Box */}
                <div
                  style={{
                    background: 'var(--panel2)',
                    border: '1px solid var(--line)',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    fontFamily: 'var(--mono)',
                    fontSize: '18px',
                    color: 'var(--gold)',
                    overflowX: 'auto',
                    letterSpacing: '0.02em',
                    fontWeight: 'bold'
                  }}
                >
                  {card.formula}
                </div>

                {/* Visual Model if present */}
                {renderVisual(card.visualKey)}

                {/* Rules List */}
                {card.rules && card.rules.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div className="eyebrow" style={{ fontSize: '12px', color: 'var(--data)' }}>
                      {L(['Golden Rules & Properties', 'Regole e Proprietà Fondamentali'], lang)}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '8px' }}>
                      {card.rules.map((rule, idx) => (
                        <div
                          key={idx}
                          style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid var(--line)',
                            borderRadius: '8px',
                            padding: '8px 12px'
                          }}
                        >
                          <div style={{ fontWeight: 'bold', fontSize: '13px', color: 'var(--text)' }}>
                            {L(rule.name, lang)}
                          </div>
                          <div style={{ fontFamily: 'var(--mono)', color: 'var(--gold)', fontSize: '13px', margin: '2px 0' }}>
                            {rule.math}
                          </div>
                          <div style={{ fontSize: '12px', color: 'var(--muted)' }}>
                            {L(rule.desc, lang)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Numerical Example */}
                <div
                  style={{
                    background: 'rgba(69,216,255,0.06)',
                    borderLeft: '3px solid var(--data)',
                    borderRadius: '0 8px 8px 0',
                    padding: '8px 12px'
                  }}
                >
                  <span style={{ fontSize: '12px', fontFamily: 'var(--mono)', color: 'var(--data)', fontWeight: 'bold' }}>
                    {L(['Worked Example', 'Esempio Svolto'], lang)}:{' '}
                  </span>
                  <span style={{ fontSize: '13px', fontFamily: 'var(--mono)', color: 'var(--text)' }}>
                    {L(card.example, lang)}
                  </span>
                </div>

                {/* Student Trap Warning Callout */}
                {card.trap && (
                  <div
                    style={{
                      background: 'rgba(255,106,61,0.12)',
                      border: '1px solid rgba(255,106,61,0.35)',
                      borderRadius: '8px',
                      padding: '10px 12px',
                      display: 'flex',
                      gap: '8px',
                      alignItems: 'flex-start'
                    }}
                  >
                    <span style={{ fontSize: '16px', lineHeight: 1 }}>⚠️</span>
                    <div style={{ fontSize: '13px', color: '#ffb39c' }}>
                      <b style={{ color: 'var(--ember)' }}>
                        {L(['Student Trap!', 'Attenzione al Tranello!'], lang)}{' '}
                      </b>
                      {L(card.trap, lang)}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
