import React, { useState, useMemo } from 'react';
import { useGame } from '../context/GameContext';
import { FORMULA_CARDS, FormulaCard } from '../data/formulaData';
import { L } from '../helpers';

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

export const FormulaScreen: React.FC = () => {
  const { state, goToView } = useGame();
  const { lang, subject } = state;

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showWorkbench, setShowWorkbench] = useState<boolean>(false);
  const [activeTool, setActiveTool] = useState<'binomial' | 'trinomial' | 'equation' | 'inequality'>('binomial');

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

  const categories = [
    { id: 'all', label: ['All Formulas', 'Tutte le Formule'] },
    { id: 'powers', label: ['Powers & Exponents', 'Potenze ed Esponenti'] },
    { id: 'fractions', label: ['Fractions & Decimals', 'Frazioni e Decimali'] },
    { id: 'algebra', label: ['Algebra & Special Products', 'Calcolo Letterale & Prodotti Notevoli'] },
    { id: 'equations', label: ['Equations & Inequalities', 'Equazioni & Disequazioni'] },
    { id: 'physics', label: ['Physics Laws', 'Leggi Fisiche'] }
  ];

  // Filtered formula cards
  const filteredCards = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return FORMULA_CARDS.filter(card => {
      if (activeCategory !== 'all' && card.category !== activeCategory) {
        return false;
      }
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
  }, [activeCategory, searchQuery]);

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
    // Find integer pairs (m, n) such that m * n = triProd and m + n = triSum
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
            {/* Main square outer outline */}
            <rect x="50" y="20" width="160" height="160" fill="none" stroke="var(--line)" strokeWidth="2" strokeDasharray="4 4" />
            {/* Region A^2 */}
            <rect x="50" y="20" width="100" height="100" fill="#45d8ff" fillOpacity="0.25" stroke="#45d8ff" strokeWidth="2" />
            <text x="100" y="75" fill="#45d8ff" fontSize="16" fontWeight="bold" textAnchor="middle">A²</text>
            {/* Region A x B (top right) */}
            <rect x="150" y="20" width="60" height="100" fill="#ffd166" fillOpacity="0.25" stroke="#ffd166" strokeWidth="2" />
            <text x="180" y="75" fill="#ffd166" fontSize="14" fontWeight="bold" textAnchor="middle">A·B</text>
            {/* Region A x B (bottom left) */}
            <rect x="50" y="120" width="100" height="60" fill="#ffd166" fillOpacity="0.25" stroke="#ffd166" strokeWidth="2" />
            <text x="100" y="155" fill="#ffd166" fontSize="14" fontWeight="bold" textAnchor="middle">A·B</text>
            {/* Region B^2 */}
            <rect x="150" y="120" width="60" height="60" fill="#ff8fc0" fillOpacity="0.25" stroke="#ff8fc0" strokeWidth="2" />
            <text x="180" y="155" fill="#ff8fc0" fontSize="14" fontWeight="bold" textAnchor="middle">B²</text>
            {/* Dimension labels */}
            <text x="100" y="15" fill="var(--text)" fontSize="12" textAnchor="middle">A</text>
            <text x="180" y="15" fill="var(--text)" fontSize="12" textAnchor="middle">B</text>
            <text x="38" y="75" fill="var(--text)" fontSize="12" textAnchor="middle">A</text>
            <text x="38" y="155" fill="var(--text)" fontSize="12" textAnchor="middle">B</text>
            {/* Callout arrow pointing to double product */}
            <path d="M 230 110 L 195 110" stroke="#ffd166" strokeWidth="2" markerEnd="url(#arrow)" />
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
            {/* Full square A */}
            <rect x="60" y="20" width="130" height="130" fill="#ff6a3d" fillOpacity="0.2" stroke="#ff6a3d" strokeWidth="2" />
            {/* Cutout B^2 */}
            <rect x="140" y="20" width="50" height="50" fill="#0e0f22" stroke="var(--bad)" strokeWidth="2" strokeDasharray="3 3" />
            <text x="165" y="50" fill="var(--bad)" fontSize="13" fontWeight="bold" textAnchor="middle">−B²</text>
            {/* Remaining L-shape */}
            <text x="100" y="85" fill="#ff6a3d" fontSize="15" fontWeight="bold" textAnchor="middle">A² − B²</text>
            <text x="100" y="105" fill="var(--text)" fontSize="11" textAnchor="middle">=(A+B)(A−B)</text>
            {/* Side brackets */}
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
            {/* Fulcrum base */}
            <polygon points="160,90 145,140 175,140" fill="#363a74" stroke="var(--line)" strokeWidth="2" />
            {/* Horizontal beam */}
            <line x1="50" y1="90" x2="270" y2="90" stroke="var(--gold)" strokeWidth="4" />
            <circle cx="160" cy="90" r="5" fill="var(--gold)" />
            {/* Left pan */}
            <line x1="80" y1="90" x2="60" y2="120" stroke="var(--line)" strokeWidth="1.5" />
            <line x1="80" y1="90" x2="100" y2="120" stroke="var(--line)" strokeWidth="1.5" />
            <rect x="50" y="120" width="60" height="8" rx="4" fill="var(--data)" />
            <text x="80" y="115" fill="var(--data)" fontSize="13" fontWeight="bold" textAnchor="middle">3x + 5</text>
            {/* Right pan */}
            <line x1="240" y1="90" x2="220" y2="120" stroke="var(--line)" strokeWidth="1.5" />
            <line x1="240" y1="90" x2="260" y2="120" stroke="var(--line)" strokeWidth="1.5" />
            <rect x="210" y="120" width="60" height="8" rx="4" fill="var(--ember)" />
            <text x="240" y="115" fill="var(--ember)" fontSize="13" fontWeight="bold" textAnchor="middle">17</text>
            {/* Equilibrium label */}
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
            {/* Main Axis */}
            <line x1="30" y1="50" x2="290" y2="50" stroke="var(--muted)" strokeWidth="2" />
            <polygon points="290,50 280,45 280,55" fill="var(--muted)" />
            {/* Ticks */}
            {[-4, -3, -2, -1, 0, 1, 2, 3].map((val, idx) => {
              const xPos = 50 + idx * 30;
              return (
                <g key={val}>
                  <line x1={xPos} y1="45" x2={xPos} y2="55" stroke="var(--line)" strokeWidth="2" />
                  <text x={xPos} y="72" fill="var(--muted)" fontSize="11" textAnchor="middle">{val}</text>
                </g>
              );
            })}
            {/* Solution Ray for x > -3 starting at -3 (xPos = 80) */}
            <line x1="80" y1="50" x2="290" y2="50" stroke="var(--data)" strokeWidth="6" opacity="0.6" />
            {/* Open Circle at -3 */}
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
            {/* Negative point -9 */}
            <circle cx="60" cy="45" r="7" fill="var(--bad)" />
            <text x="60" y="32" fill="var(--bad)" fontSize="13" fontWeight="bold" textAnchor="middle">−3² = −9</text>
            {/* Positive point +9 */}
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
            {/* Bar 1: 2/3 */}
            <rect x="30" y="15" width="260" height="20" rx="4" fill="#171935" stroke="var(--line)" />
            <rect x="30" y="15" width="173" height="20" rx="4" fill="#45d8ff" fillOpacity="0.4" />
            <line x1="116.6" y1="15" x2="116.6" y2="35" stroke="var(--line)" />
            <line x1="203.3" y1="15" x2="203.3" y2="35" stroke="var(--line)" />
            <text x="15" y="30" fill="var(--text)" fontSize="12" fontWeight="bold">2/3</text>
            {/* Bar 2: 4/6 */}
            <rect x="30" y="45" width="260" height="20" rx="4" fill="#171935" stroke="var(--line)" />
            <rect x="30" y="45" width="173" height="20" rx="4" fill="#ffd166" fillOpacity="0.4" />
            {[1, 2, 3, 4, 5].map(step => (
              <line key={step} x1={30 + step * 43.3} y1="45" x2={30 + step * 43.3} y2="65" stroke="var(--line)" />
            ))}
            <text x="15" y="60" fill="var(--text)" fontSize="12" fontWeight="bold">4/6</text>
            {/* Equality sign */}
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
            {/* Circle 12 = 2 * (2 * 3) */}
            <circle cx="120" cy="75" r="55" fill="#45d8ff" fillOpacity="0.2" stroke="#45d8ff" strokeWidth="2" />
            {/* Circle 18 = 3 * (2 * 3) */}
            <circle cx="200" cy="75" r="55" fill="#ffd166" fillOpacity="0.2" stroke="#ffd166" strokeWidth="2" />
            {/* Left only */}
            <text x="90" y="80" fill="#45d8ff" fontSize="15" fontWeight="bold" textAnchor="middle">2</text>
            <text x="90" y="35" fill="#45d8ff" fontSize="12" textAnchor="middle">12 (2²·3)</text>
            {/* Intersection (MCD) */}
            <text x="160" y="70" fill="var(--good)" fontSize="14" fontWeight="bold" textAnchor="middle">2 · 3</text>
            <text x="160" y="90" fill="var(--good)" fontSize="11" textAnchor="middle">MCD = 6</text>
            {/* Right only */}
            <text x="230" y="80" fill="#ffd166" fontSize="15" fontWeight="bold" textAnchor="middle">3</text>
            <text x="230" y="35" fill="#ffd166" fontSize="12" textAnchor="middle">18 (2·3²)</text>
            {/* Union mcm footer */}
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
      {/* Header Banner */}
      <div className="card">
        <div className="mhead">
          <div>
            <div className="eyebrow">
              {L(
                [
                  "HUNTER'S FORMULA SHEET · GRADE 8/9 ACADEMY",
                  "FORMULARIO E REGOLE D'ORO · 3ª MEDIA / 1ª SUPERIORE"
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
                : L(['⚡ Interactive Math Lab', '⚡ Palestra di Calcolo'], lang)}
            </button>
            <button type="button" className="btn ghost" onClick={() => goToView('map')}>
              {L(['Back to Missions', 'Torna alle Missioni'], lang)}
            </button>
          </div>
        </div>

        <p className="muted" style={{ margin: '8px 0 0', maxWidth: '72ch' }}>
          {L(
            [
              'Authoritative Zanichelli (Bergamini–Barozzi) reference for powers, fractions, special products, linear equations, and physics. Each formula includes clear rules, worked examples, and warnings for typical exam pitfalls.',
              'Guida autorevole basata su Bergamini–Barozzi (Zanichelli) per potenze, frazioni, prodotti notevoli, equazioni di 1° grado e fisica. Ogni scheda comprende regole, esempi svolti ed evidenziazione dei tranelli più frequenti.'
            ],
            lang
          )}
        </p>
      </div>

      {/* INTERACTIVE WORKBENCH (COLLAPSIBLE OR PRIMARY) */}
      {showWorkbench && (
        <div className="card" style={{ border: '2px solid var(--data)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
            <div>
              <div className="eyebrow" style={{ color: 'var(--data)' }}>
                {L(['INTERACTIVE MATH LAB · PALESTRA INTERATTIVA', 'PALESTRA INTERATTIVA DI CALCOLO'], lang)}
              </div>
              <h3 style={{ fontSize: '20px' }}>
                {L(['Live Algebraic Verifier & Solvers', 'Verificatori e Risolutori Algebrici in Tempo Reale'], lang)}
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

              {/* Live result breakdown */}
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
        </div>
      )}

      {/* SEARCH AND CATEGORY FILTER BAR */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <input
          className="codex-search"
          placeholder={L(
            ['Search formulas, rules, powers, or traps (e.g. double product, Stevin, MCD)...', 'Cerca formule, regole, potenze o tranelli (es. doppio prodotto, Stevino, MCD)...'],
            lang
          )}
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />

        <div className="row" style={{ gap: '6px', overflowX: 'auto', paddingBottom: '2px' }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              type="button"
              className={`btn sm ${activeCategory === cat.id ? 'cyan' : 'ghost'}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {L(cat.label, lang)}
            </button>
          ))}
        </div>

        <div className="muted" style={{ fontSize: '13px' }}>
          {L(['Showing', 'Visualizzate'], lang)}: <b>{filteredCards.length}</b> {L(['formula cards', 'schede formule'], lang)}
        </div>
      </div>

      {/* FORMULA CARDS GRID */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filteredCards.map(card => {
          return (
            <div
              key={card.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                borderLeft: `5px solid ${card.subject === 'phys' ? 'var(--sakura)' : 'var(--data)'}`
              }}
            >
              {/* Card Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '6px' }}>
                <div>
                  <div className="eyebrow" style={{ fontSize: '11px', color: 'var(--muted)' }}>
                    {card.category.toUpperCase()} · {card.subject === 'phys' ? 'PHYSICS' : 'MATHEMATICS'}
                  </div>
                  <h3 style={{ fontSize: '19px', marginTop: '2px' }}>{L(card.title, lang)}</h3>
                </div>
                <span className="badge ok" style={{ fontSize: '11px' }}>
                  {card.subject === 'phys' ? 'Fisica' : 'Matematica'}
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
        })}
      </div>
    </div>
  );
};
