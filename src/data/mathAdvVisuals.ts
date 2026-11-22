import type { Language } from '../types';
import { animateMathAdv } from './mathMotion';
import { MATH10_BUILDERS } from './mathVisualsG10';
import { MATH11_BUILDERS } from './mathVisualsG11';

/** Diagrams redrawn large and clear (see sciViz.ts), one file per grade. They take priority over the older drawings below. */
const MATH_ADV_REDRAWN: Record<string, (lang: Language) => string> = { ...MATH10_BUILDERS, ...MATH11_BUILDERS };

export const MATH_ADV_VISUAL_KEYS = [
  'math10Systems',
  'math10Radicals',
  'math10CartesianLine',
  'math10QuadraticDelta',
  'math10VieteSystems',
  'math10QuadraticSign',
  'math10EuclidPythagoras',
  'math10ThalesCircle',
  'math10Probability',
  'math11Functions',
  'math11AbsSign',
  'math11Irrational',
  'math11ParabolaCircle',
  'math11EllipseHyperbola',
  'math11ConicsTangent',
  'math11ExpLog',
  'math11UnitCircle',
  'math11TriangleLaws'
] as const;

export type MathAdvVisualKey = typeof MATH_ADV_VISUAL_KEYS[number];

const pick = (lang: Language, en: string, it: string) => (lang === 'it' ? it : en);

export function getMathAdvVisual(key: string, lang: Language): string | null {
  const redrawn = MATH_ADV_REDRAWN[key];
  if (redrawn) return redrawn(lang);
  const html = getMathAdvStaticVisual(key, lang);
  return html ? animateMathAdv(key, html) : null;
}

function getMathAdvStaticVisual(key: string, lang: Language): string | null {
  switch (key) {
    case 'math10Systems':
      return `<svg viewBox="0 0 640 220" class="dia" width="100%" aria-hidden="true">
        <rect x="14" y="16" width="190" height="186" rx="14" fill="rgba(56,239,125,.08)" stroke="#38ef7d" stroke-width="2"/>
        <text x="109" y="40" text-anchor="middle" fill="#38ef7d" font-size="13" font-weight="800">${pick(lang, 'DETERMINED (D ≠ 0)', 'DETERMINATO (D ≠ 0)')}</text>
        <line x1="42" y1="146" x2="176" y2="66" stroke="#45d8ff" stroke-width="3"/>
        <line x1="42" y1="68" x2="176" y2="148" stroke="#ffd166" stroke-width="3"/>
        <circle cx="109" cy="107" r="7" fill="#ff6a3d" stroke="#fff" stroke-width="2"/>
        <text x="109" y="168" text-anchor="middle" fill="#eeecf8" font-size="11" font-weight="700">${pick(lang, '1 crossing point (x, y)', '1 punto di incrocio (x, y)')}</text>
        <text x="109" y="186" text-anchor="middle" class="sm">${pick(lang, 'Different slopes m₁ ≠ m₂', 'Pendenze diverse m₁ ≠ m₂')}</text>

        <rect x="225" y="16" width="190" height="186" rx="14" fill="rgba(255,106,61,.08)" stroke="#ff6a3d" stroke-width="2"/>
        <text x="320" y="40" text-anchor="middle" fill="#ff6a3d" font-size="13" font-weight="800">${pick(lang, 'IMPOSSIBLE (D = 0)', 'IMPOSSIBILE (D = 0)')}</text>
        <line x1="252" y1="136" x2="388" y2="66" stroke="#45d8ff" stroke-width="3"/>
        <line x1="252" y1="160" x2="388" y2="90" stroke="#ffd166" stroke-width="3"/>
        <text x="320" y="168" text-anchor="middle" fill="#eeecf8" font-size="11" font-weight="700">${pick(lang, 'Parallel tracks: 0 solutions', 'Binari paralleli: 0 soluzioni')}</text>
        <text x="320" y="186" text-anchor="middle" class="sm">${pick(lang, 'm₁ = m₂ but q₁ ≠ q₂', 'm₁ = m₂ ma q₁ ≠ q₂')}</text>

        <rect x="436" y="16" width="190" height="186" rx="14" fill="rgba(176,139,255,.08)" stroke="#b08bff" stroke-width="2"/>
        <text x="531" y="40" text-anchor="middle" fill="#b08bff" font-size="13" font-weight="800">${pick(lang, 'INDETERMINATE', 'INDETERMINATO')}</text>
        <line x1="464" y1="142" x2="598" y2="68" stroke="#45d8ff" stroke-width="7" opacity=".45"/>
        <line x1="464" y1="142" x2="598" y2="68" stroke="#ffd166" stroke-width="2.6" stroke-dasharray="6 4"/>
        <text x="531" y="168" text-anchor="middle" fill="#eeecf8" font-size="11" font-weight="700">${pick(lang, 'Same line: ∞ solutions', 'Stessa retta: ∞ soluzioni')}</text>
        <text x="531" y="186" text-anchor="middle" class="sm">${pick(lang, 'a₁/a₂ = b₁/b₂ = c₁/c₂', 'Coefficienti tutti proporzionali')}</text>
      </svg>`;

    case 'math10Radicals':
      return `<svg viewBox="0 0 640 215" class="dia" width="100%" aria-hidden="true">
        <rect x="18" y="18" width="290" height="178" rx="14" fill="rgba(69,216,255,.08)" stroke="#45d8ff" stroke-width="2"/>
        <text x="163" y="44" text-anchor="middle" fill="#45d8ff" font-size="14" font-weight="800">${pick(lang, 'EVEN INDEX (n = 2, 4...): C.E. A ≥ 0', 'INDICE PARI (n = 2, 4...): C.E. A ≥ 0')}</text>
        <text x="163" y="88" text-anchor="middle" fill="#ffd166" font-size="24" font-weight="800">√(4 · 3) = 2√3</text>
        <rect x="52" y="110" width="222" height="34" rx="8" fill="rgba(255,106,61,.15)" stroke="#ff6a3d" stroke-width="1.5"/>
        <text x="163" y="132" text-anchor="middle" fill="#ff9f45" font-size="12" font-weight="700">${pick(lang, '√(−9) is NOT real in ℝ!', '√(−9) NON esiste nei reali ℝ!')}</text>
        <text x="163" y="174" text-anchor="middle" class="sm">${pick(lang, '√(a²) = |a| · √(a+b) ≠ √a + √b!', '√(a²) = |a| · √(a+b) ≠ √a + √b!')}</text>

        <rect x="332" y="18" width="290" height="178" rx="14" fill="rgba(56,239,125,.08)" stroke="#38ef7d" stroke-width="2"/>
        <text x="477" y="44" text-anchor="middle" fill="#38ef7d" font-size="14" font-weight="800">${pick(lang, 'RATIONALIZING DENOMINATORS', 'RAZIONALIZZAZIONE')}</text>
        <text x="477" y="86" text-anchor="middle" fill="#eeecf8" font-size="18" font-weight="700">6 / √3 × (√3 / √3) = 2√3</text>
        <text x="477" y="122" text-anchor="middle" fill="#ffd166" font-size="14" font-weight="700">1 / (√5 − 2) → × (√5 + 2)</text>
        <text x="477" y="152" text-anchor="middle" class="sm">${pick(lang, 'Use (a−b)(a+b) = a² − b² to clear roots', 'Usa somma×differenza per togliere la radice')}</text>
        <text x="477" y="174" text-anchor="middle" fill="#38ef7d" font-size="12" font-weight="700">${pick(lang, 'Odd index (∛−8 = −2): works for all ℝ', 'Indice dispari (∛−8 = −2): vale ∀ x ∈ ℝ')}</text>
      </svg>`;

    case 'math10CartesianLine':
      return `<svg viewBox="0 0 640 220" class="dia" width="100%" aria-hidden="true">
        <rect x="18" y="16" width="370" height="186" rx="14" fill="rgba(16,20,52,.7)" stroke="#3c4278" stroke-width="2"/>
        <line x1="56" y1="158" x2="366" y2="158" stroke="#6f74a6" stroke-width="1.5"/>
        <line x1="115" y1="30" x2="115" y2="184" stroke="#6f74a6" stroke-width="1.5"/>
        <line x1="72" y1="168" x2="342" y2="42" stroke="#45d8ff" stroke-width="3.5"/>
        <path d="M168 123 H262 V79" fill="none" stroke="#ffd166" stroke-width="2.5" stroke-dasharray="5 3"/>
        <circle cx="168" cy="123" r="6" fill="#38ef7d"/>
        <circle cx="262" cy="79" r="6" fill="#ff6a3d"/>
        <text x="215" y="139" text-anchor="middle" fill="#ffd166" font-size="12" font-weight="700">Δx</text>
        <text x="278" y="105" fill="#ffd166" font-size="12" font-weight="700">Δy</text>
        <text x="98" y="139" fill="#45d8ff" font-size="11" font-weight="700">q</text>
        <text x="295" y="54" fill="#45d8ff" font-size="13" font-weight="800">y = mx + q</text>

        <rect x="404" y="16" width="218" height="186" rx="14" fill="rgba(255,209,102,.08)" stroke="#ffd166" stroke-width="2"/>
        <text x="513" y="42" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="800">${pick(lang, 'LINE TOOLKIT', 'FORMULE DELLA RETTA')}</text>
        <text x="513" y="72" text-anchor="middle" fill="#45d8ff" font-size="13" font-weight="700">m = (y₂ − y₁) / (x₂ − x₁)</text>
        <text x="513" y="102" text-anchor="middle" fill="#38ef7d" font-size="13" font-weight="700">${pick(lang, 'Parallel: m₁ = m₂', 'Parallele: m₁ = m₂')}</text>
        <text x="513" y="130" text-anchor="middle" fill="#ff6a3d" font-size="13" font-weight="700">${pick(lang, 'Perpendicular: m₁·m₂ = −1', 'Perpendicolari: m₁·m₂ = −1')}</text>
        <text x="513" y="162" text-anchor="middle" fill="#eeecf8" font-size="12">d = √[(Δx)² + (Δy)²]</text>
        <text x="513" y="182" text-anchor="middle" class="sm">M = ((x₁+x₂)/2, (y₁+y₂)/2)</text>
      </svg>`;

    case 'math10QuadraticDelta':
      return `<svg viewBox="0 0 640 218" class="dia" width="100%" aria-hidden="true">
        <rect x="14" y="16" width="190" height="186" rx="14" fill="rgba(56,239,125,.08)" stroke="#38ef7d" stroke-width="2"/>
        <text x="109" y="40" text-anchor="middle" fill="#38ef7d" font-size="14" font-weight="800">Δ &gt; 0 (2 ${pick(lang, 'roots', 'radici')})</text>
        <line x1="30" y1="126" x2="188" y2="126" stroke="#6f74a6" stroke-width="1.8"/>
        <path d="M52 60 Q109 186 166 60" fill="none" stroke="#45d8ff" stroke-width="3.2"/>
        <circle cx="77" cy="126" r="5.5" fill="#ffd166"/>
        <circle cx="141" cy="126" r="5.5" fill="#ffd166"/>
        <text x="109" y="176" text-anchor="middle" class="sm">${pick(lang, 'Crosses x-axis TWICE', 'Taglia l’asse x DUE volte')}</text>

        <rect x="225" y="16" width="190" height="186" rx="14" fill="rgba(255,209,102,.08)" stroke="#ffd166" stroke-width="2"/>
        <text x="320" y="40" text-anchor="middle" fill="#ffd166" font-size="14" font-weight="800">Δ = 0 (1 ${pick(lang, 'double', 'doppia')})</text>
        <line x1="241" y1="126" x2="399" y2="126" stroke="#6f74a6" stroke-width="1.8"/>
        <path d="M262 56 Q320 196 378 56" fill="none" stroke="#ffd166" stroke-width="3.2"/>
        <circle cx="320" cy="126" r="6" fill="#ff6a3d"/>
        <text x="320" y="176" text-anchor="middle" class="sm">${pick(lang, 'Vertex kisses the axis', 'Il vertice tocca l’asse')}</text>

        <rect x="436" y="16" width="190" height="186" rx="14" fill="rgba(255,106,61,.08)" stroke="#ff6a3d" stroke-width="2"/>
        <text x="531" y="40" text-anchor="middle" fill="#ff6a3d" font-size="14" font-weight="800">Δ &lt; 0 (0 ${pick(lang, 'in ℝ', 'in ℝ')})</text>
        <line x1="452" y1="126" x2="610" y2="126" stroke="#6f74a6" stroke-width="1.8"/>
        <path d="M474 44 Q531 140 588 44" fill="none" stroke="#ff6a3d" stroke-width="3.2"/>
        <text x="531" y="176" text-anchor="middle" class="sm">${pick(lang, 'Floats above: NO real x', 'Non tocca l’asse: ∅ in ℝ')}</text>
      </svg>`;

    case 'math10VieteSystems':
      return `<svg viewBox="0 0 640 215" class="dia" width="100%" aria-hidden="true">
        <rect x="18" y="18" width="292" height="178" rx="14" fill="rgba(255,209,102,.08)" stroke="#ffd166" stroke-width="2"/>
        <text x="164" y="44" text-anchor="middle" fill="#ffd166" font-size="14" font-weight="800">${pick(lang, 'VIÈTE’S SUM & PRODUCT', 'SOMMA E PRODOTTO (VIÈTE)')}</text>
        <text x="164" y="84" text-anchor="middle" fill="#45d8ff" font-size="20" font-weight="800">x₁ + x₂ = −b / a</text>
        <text x="164" y="118" text-anchor="middle" fill="#38ef7d" font-size="20" font-weight="800">x₁ · x₂ = c / a</text>
        <text x="164" y="156" text-anchor="middle" fill="#eeecf8" font-size="13">ax² + bx + c = a(x − x₁)(x − x₂)</text>
        <text x="164" y="178" text-anchor="middle" class="sm">${pick(lang, 'Rebuild x² − Sx + P = 0 directly!', 'Ricostruisci x² − Sx + P = 0 al volo!')}</text>

        <rect x="330" y="18" width="292" height="178" rx="14" fill="rgba(69,216,255,.08)" stroke="#45d8ff" stroke-width="2"/>
        <text x="476" y="44" text-anchor="middle" fill="#45d8ff" font-size="14" font-weight="800">${pick(lang, 'DEGREE-2 SYSTEM = LINE + CURVE', 'SISTEMA DI 2° GRADO')}</text>
        <path d="M385 154 Q476 50 567 154" fill="none" stroke="#ffd166" stroke-width="3"/>
        <line x1="366" y1="138" x2="586" y2="80" stroke="#38ef7d" stroke-width="2.8"/>
        <circle cx="417" cy="124" r="5" fill="#ff6a3d"/>
        <circle cx="527" cy="96" r="5" fill="#ff6a3d"/>
        <text x="476" y="178" text-anchor="middle" class="sm">${pick(lang, 'Isolate a linear variable → plug into degree-2!', 'Ricava un’incognita dal 1° grado → sostituisci!')}</text>
      </svg>`;

    case 'math10QuadraticSign':
      return `<svg viewBox="0 0 640 218" class="dia" width="100%" aria-hidden="true">
        <rect x="18" y="16" width="292" height="186" rx="14" fill="rgba(56,239,125,.08)" stroke="#38ef7d" stroke-width="2"/>
        <text x="164" y="42" text-anchor="middle" fill="#38ef7d" font-size="14" font-weight="800">ax² + bx + c &gt; 0 (a &gt; 0)</text>
        <line x1="40" y1="118" x2="288" y2="118" stroke="#6f74a6" stroke-width="2"/>
        <line x1="40" y1="118" x2="114" y2="118" stroke="#38ef7d" stroke-width="6"/>
        <line x1="214" y1="118" x2="288" y2="118" stroke="#38ef7d" stroke-width="6"/>
        <path d="M72 52 Q164 198 256 52" fill="none" stroke="#ffd166" stroke-width="3"/>
        <circle cx="114" cy="118" r="5" fill="#111936" stroke="#ffd166" stroke-width="2.5"/>
        <circle cx="214" cy="118" r="5" fill="#111936" stroke="#ffd166" stroke-width="2.5"/>
        <text x="76" y="102" fill="#38ef7d" font-size="13" font-weight="800">+</text>
        <text x="164" y="148" text-anchor="middle" fill="#ff6a3d" font-size="14" font-weight="800">−</text>
        <text x="252" y="102" fill="#38ef7d" font-size="13" font-weight="800">+</text>
        <text x="164" y="182" text-anchor="middle" class="sm">${pick(lang, 'OUTSIDE roots: x < x₁ ∨ x > x₂', 'Valori ESTERNI: x < x₁ ∨ x > x₂')}</text>

        <rect x="330" y="16" width="292" height="186" rx="14" fill="rgba(255,106,61,.08)" stroke="#ff6a3d" stroke-width="2"/>
        <text x="476" y="42" text-anchor="middle" fill="#ff6a3d" font-size="14" font-weight="800">ax² + bx + c &lt; 0 (a &gt; 0)</text>
        <line x1="352" y1="118" x2="600" y2="118" stroke="#6f74a6" stroke-width="2"/>
        <line x1="426" y1="118" x2="526" y2="118" stroke="#ff6a3d" stroke-width="6"/>
        <path d="M384 52 Q476 198 568 52" fill="none" stroke="#ffd166" stroke-width="3"/>
        <circle cx="426" cy="118" r="5" fill="#111936" stroke="#ffd166" stroke-width="2.5"/>
        <circle cx="526" cy="118" r="5" fill="#111936" stroke="#ffd166" stroke-width="2.5"/>
        <text x="476" y="150" text-anchor="middle" fill="#ff6a3d" font-size="13" font-weight="800">${pick(lang, 'BELOW SEA LEVEL (−)', 'SOTTO L’ASSE (−)')}</text>
        <text x="476" y="182" text-anchor="middle" class="sm">${pick(lang, 'BETWEEN roots: x₁ < x < x₂', 'Valori INTERNI: x₁ < x < x₂')}</text>
      </svg>`;

    case 'math10EuclidPythagoras':
      return `<svg viewBox="0 0 640 220" class="dia" width="100%" aria-hidden="true">
        <rect x="18" y="16" width="350" height="188" rx="14" fill="rgba(16,20,52,.7)" stroke="#45d8ff" stroke-width="2"/>
        <polygon points="62,164 218,58 334,164" fill="rgba(69,216,255,.14)" stroke="#45d8ff" stroke-width="3" stroke-linejoin="round"/>
        <line x1="218" y1="58" x2="218" y2="164" stroke="#ffd166" stroke-width="3" stroke-dasharray="5 3"/>
        <line x1="62" y1="164" x2="218" y2="164" stroke="#38ef7d" stroke-width="4"/>
        <line x1="218" y1="164" x2="334" y2="164" stroke="#ff6a3d" stroke-width="4"/>
        <text x="125" y="102" fill="#45d8ff" font-size="14" font-weight="800">b</text>
        <text x="285" y="102" fill="#45d8ff" font-size="14" font-weight="800">c</text>
        <text x="228" y="122" fill="#ffd166" font-size="14" font-weight="800">h</text>
        <text x="140" y="184" text-anchor="middle" fill="#38ef7d" font-size="12" font-weight="700">p₁</text>
        <text x="276" y="184" text-anchor="middle" fill="#ff6a3d" font-size="12" font-weight="700">p₂</text>
        <text x="198" y="38" text-anchor="middle" fill="#eeecf8" font-size="12" font-weight="700">∠C = 90° · a = p₁ + p₂</text>

        <rect x="384" y="16" width="238" height="188" rx="14" fill="rgba(255,209,102,.08)" stroke="#ffd166" stroke-width="2"/>
        <text x="503" y="44" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="800">${pick(lang, '3 RIGHT-TRIANGLE LAWS', '3 TEOREMI FONDAMENTALI')}</text>
        <text x="503" y="80" text-anchor="middle" fill="#45d8ff" font-size="14" font-weight="700">Pythagoras: a² = b² + c²</text>
        <text x="503" y="114" text-anchor="middle" fill="#38ef7d" font-size="14" font-weight="700">1° Euclide: b² = a · p₁</text>
        <text x="503" y="148" text-anchor="middle" fill="#ffd166" font-size="14" font-weight="700">2° Euclide: h² = p₁ · p₂</text>
        <text x="503" y="182" text-anchor="middle" class="sm">${pick(lang, 'Altitude h is mean proportional!', 'L’altezza h è medio proporzionale!')}</text>
      </svg>`;

    case 'math10ThalesCircle':
      return `<svg viewBox="0 0 640 218" class="dia" width="100%" aria-hidden="true">
        <rect x="18" y="16" width="292" height="186" rx="14" fill="rgba(56,239,125,.08)" stroke="#38ef7d" stroke-width="2"/>
        <text x="164" y="42" text-anchor="middle" fill="#38ef7d" font-size="13" font-weight="800">${pick(lang, 'THALES & SIMILARITY', 'TALETE E SIMILITUDINE')}</text>
        <line x1="48" y1="74" x2="280" y2="74" stroke="#45d8ff" stroke-width="2"/>
        <line x1="48" y1="112" x2="280" y2="112" stroke="#45d8ff" stroke-width="2"/>
        <line x1="48" y1="152" x2="280" y2="152" stroke="#45d8ff" stroke-width="2"/>
        <line x1="88" y1="56" x2="128" y2="168" stroke="#ffd166" stroke-width="3"/>
        <line x1="216" y1="56" x2="178" y2="168" stroke="#ff6a3d" stroke-width="3"/>
        <text x="164" y="186" text-anchor="middle" class="sm">AB : BC = A'B' : B'C' · Area ratio = k²</text>

        <rect x="330" y="16" width="292" height="186" rx="14" fill="rgba(176,139,255,.08)" stroke="#b08bff" stroke-width="2"/>
        <text x="476" y="42" text-anchor="middle" fill="#b08bff" font-size="13" font-weight="800">${pick(lang, 'CIRCLE ANGLES', 'ANGOLI AL CENTRO E CIRCONFERENZA')}</text>
        <circle cx="476" cy="112" r="52" fill="none" stroke="#45d8ff" stroke-width="2.5"/>
        <polygon points="476,60 434,142 518,142" fill="rgba(255,209,102,.15)" stroke="#ffd166" stroke-width="2.5"/>
        <polygon points="476,112 434,142 518,142" fill="rgba(255,106,61,.2)" stroke="#ff6a3d" stroke-width="2"/>
        <circle cx="476" cy="112" r="4" fill="#ff6a3d"/>
        <text x="476" y="186" text-anchor="middle" class="sm">${pick(lang, 'Central angle = 2 × Inscribed angle', 'Angolo al centro = 2 × alla circonferenza')}</text>
      </svg>`;

    case 'math10Probability':
      return `<svg viewBox="0 0 640 215" class="dia" width="100%" aria-hidden="true">
        <rect x="18" y="18" width="292" height="178" rx="14" fill="rgba(255,209,102,.08)" stroke="#ffd166" stroke-width="2"/>
        <text x="164" y="44" text-anchor="middle" fill="#ffd166" font-size="14" font-weight="800">${pick(lang, 'CLASSICAL PROBABILITY', 'PROBABILITÀ CLASSICA')}</text>
        <text x="164" y="84" text-anchor="middle" fill="#45d8ff" font-size="20" font-weight="800">P(E) = f / n</text>
        <text x="164" y="114" text-anchor="middle" fill="#eeecf8" font-size="13">0 ≤ P(E) ≤ 1 · P(Ē) = 1 − P(E)</text>
        <circle cx="114" cy="148" r="11" fill="#38ef7d"/><circle cx="148" cy="148" r="11" fill="#38ef7d"/>
        <circle cx="182" cy="148" r="11" fill="#ff6a3d"/><circle cx="216" cy="148" r="11" fill="#ff6a3d"/>
        <text x="164" y="180" text-anchor="middle" class="sm">${pick(lang, 'Favorable outcomes ÷ Total equally likely cases', 'Casi favorevoli ÷ Casi possibili equiprobabili')}</text>

        <rect x="330" y="18" width="292" height="178" rx="14" fill="rgba(69,216,255,.08)" stroke="#45d8ff" stroke-width="2"/>
        <text x="476" y="44" text-anchor="middle" fill="#45d8ff" font-size="14" font-weight="800">${pick(lang, 'COMBINING EVENTS', 'UNIONE E INTERSEZIONE')}</text>
        <text x="476" y="84" text-anchor="middle" fill="#38ef7d" font-size="14" font-weight="700">P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</text>
        <text x="476" y="118" text-anchor="middle" fill="#ffd166" font-size="14" font-weight="700">${pick(lang, 'Independent: P(A∩B) = P(A)·P(B)', 'Indipendenti: P(A∩B) = P(A)·P(B)')}</text>
        <text x="476" y="152" text-anchor="middle" fill="#ff9f45" font-size="13">${pick(lang, 'Law of Large Numbers: f/N → P(E)', 'Legge dei grandi numeri: freq → P(E)')}</text>
        <text x="476" y="178" text-anchor="middle" class="sm">${pick(lang, 'Use tree diagrams for multi-step draws!', 'Usa gli alberi per estrazioni successive!')}</text>
      </svg>`;

    case 'math11Functions':
      return `<svg viewBox="0 0 640 218" class="dia" width="100%" aria-hidden="true">
        <rect x="14" y="16" width="190" height="186" rx="14" fill="rgba(69,216,255,.08)" stroke="#45d8ff" stroke-width="2"/>
        <text x="109" y="40" text-anchor="middle" fill="#45d8ff" font-size="13" font-weight="800">${pick(lang, 'DOMAIN RULES', 'REGOLE DEL DOMINIO')}</text>
        <text x="109" y="76" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="700">N/D → D ≠ 0</text>
        <text x="109" y="106" text-anchor="middle" fill="#38ef7d" font-size="13" font-weight="700">√A → A ≥ 0</text>
        <text x="109" y="136" text-anchor="middle" fill="#b08bff" font-size="13" font-weight="700">log(A) → A &gt; 0</text>
        <text x="109" y="174" text-anchor="middle" class="sm">${pick(lang, 'Always test allowed x first!', 'Cerca prima le x ammesse!')}</text>

        <rect x="225" y="16" width="190" height="186" rx="14" fill="rgba(255,209,102,.08)" stroke="#ffd166" stroke-width="2"/>
        <text x="320" y="40" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="800">${pick(lang, 'EVEN vs ODD', 'PARI vs DISPARI')}</text>
        <text x="320" y="82" text-anchor="middle" fill="#45d8ff" font-size="14" font-weight="700">f(−x) = f(x) → ${pick(lang, 'Even', 'Pari')}</text>
        <text x="320" y="112" text-anchor="middle" fill="#ff6a3d" font-size="14" font-weight="700">f(−x) = −f(x) → ${pick(lang, 'Odd', 'Dispari')}</text>
        <text x="320" y="148" text-anchor="middle" class="sm">${pick(lang, 'y-axis mirror vs origin flip', 'Simmetria asse y vs origine O')}</text>

        <rect x="436" y="16" width="190" height="186" rx="14" fill="rgba(56,239,125,.08)" stroke="#38ef7d" stroke-width="2"/>
        <text x="531" y="40" text-anchor="middle" fill="#38ef7d" font-size="13" font-weight="800">${pick(lang, 'INVERSE f⁻¹', 'FUNZIONE INVERSA f⁻¹')}</text>
        <line x1="468" y1="162" x2="594" y2="58" stroke="#6f74a6" stroke-width="1.5" stroke-dasharray="4 3"/>
        <path d="M472 156 Q526 146 574 64" fill="none" stroke="#45d8ff" stroke-width="2.5"/>
        <path d="M472 156 Q482 104 584 64" fill="none" stroke="#ffd166" stroke-width="2.5"/>
        <text x="531" y="180" text-anchor="middle" class="sm">${pick(lang, 'Bijective ↔ mirror over y = x', 'Biettiva ↔ simmetrica rispetto y = x')}</text>
      </svg>`;

    case 'math11AbsSign':
      return `<svg viewBox="0 0 640 218" class="dia" width="100%" aria-hidden="true">
        <rect x="18" y="16" width="292" height="186" rx="14" fill="rgba(255,209,102,.08)" stroke="#ffd166" stroke-width="2"/>
        <text x="164" y="42" text-anchor="middle" fill="#ffd166" font-size="14" font-weight="800">|x − 2| &lt; 3  (V-${pick(lang, 'BOUNCE', 'RIMBALZO')})</text>
        <line x1="44" y1="142" x2="284" y2="142" stroke="#6f74a6" stroke-width="2"/>
        <line x1="44" y1="92" x2="284" y2="92" stroke="#38ef7d" stroke-width="2" stroke-dasharray="5 3"/>
        <polyline points="72,56 164,142 256,56" fill="none" stroke="#45d8ff" stroke-width="3.5"/>
        <line x1="110" y1="142" x2="218" y2="142" stroke="#38ef7d" stroke-width="6"/>
        <text x="164" y="176" text-anchor="middle" class="sm">${pick(lang, 'Distance from 2 is < 3 ⇒ −1 < x < 5', 'Distanza da 2 è < 3 ⇒ −1 < x < 5')}</text>

        <rect x="330" y="16" width="292" height="186" rx="14" fill="rgba(176,139,255,.08)" stroke="#b08bff" stroke-width="2"/>
        <text x="476" y="42" text-anchor="middle" fill="#b08bff" font-size="14" font-weight="800">${pick(lang, 'SIGN CHART (N/D ≥ 0)', 'QUADRO DEI SEGNI (N/D ≥ 0)')}</text>
        <text x="360" y="84" fill="#45d8ff" font-size="12" font-weight="700">N:  −   −   0   +   +</text>
        <text x="360" y="114" fill="#ffd166" font-size="12" font-weight="700">D:  −   0   +   +   +</text>
        <line x1="354" y1="126" x2="594" y2="126" stroke="#6f74a6" stroke-width="1.5"/>
        <text x="360" y="150" fill="#38ef7d" font-size="13" font-weight="800">N/D: +   ×   0   +   +</text>
        <text x="476" y="180" text-anchor="middle" class="sm">${pick(lang, 'Never cross-multiply by x! Always check D ≠ 0.', 'Mai eliminare il denominatore! Controlla D ≠ 0.')}</text>
      </svg>`;

    case 'math11Irrational':
      return `<svg viewBox="0 0 640 218" class="dia" width="100%" aria-hidden="true">
        <rect x="18" y="18" width="292" height="182" rx="14" fill="rgba(255,106,61,.08)" stroke="#ff6a3d" stroke-width="2"/>
        <text x="164" y="44" text-anchor="middle" fill="#ff6a3d" font-size="14" font-weight="800">√A(x) = B(x) · ${pick(lang, 'SQUARING TRAP', 'TRAPPOLA DEL QUADRATO')}</text>
        <text x="164" y="82" text-anchor="middle" fill="#ffd166" font-size="15" font-weight="700">1. A(x) ≥ 0 (${pick(lang, 'root exists', 'esistenza')})</text>
        <text x="164" y="114" text-anchor="middle" fill="#38ef7d" font-size="15" font-weight="700">2. B(x) ≥ 0 (${pick(lang, 'right side ≥ 0!', 'segno concorde!')})</text>
        <text x="164" y="146" text-anchor="middle" fill="#45d8ff" font-size="15" font-weight="700">3. A(x) = [B(x)]²</text>
        <text x="164" y="180" text-anchor="middle" class="sm">${pick(lang, '√x = −3 has NO solution even though (−3)² = 9!', '√x = −3 è IMPOSSIBILE anche se (−3)² = 9!')}</text>

        <rect x="330" y="18" width="292" height="182" rx="14" fill="rgba(69,216,255,.08)" stroke="#45d8ff" stroke-width="2"/>
        <text x="476" y="44" text-anchor="middle" fill="#45d8ff" font-size="14" font-weight="800">√A(x) &lt; B(x) vs √A(x) &gt; B(x)</text>
        <text x="476" y="84" text-anchor="middle" fill="#38ef7d" font-size="13" font-weight="700">&lt; B: A≥0 ∧ B&gt;0 ∧ A &lt; B² (1 system)</text>
        <text x="476" y="122" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="700">&gt; B: {A≥0, B&lt;0} ∪ {B≥0, A &gt; B²}</text>
        <text x="476" y="160" text-anchor="middle" fill="#b08bff" font-size="12">${pick(lang, 'If B < 0, any valid √A ≥ 0 is automatically > B!', 'Se B < 0, ogni √A ≥ 0 è già maggiore di B!')}</text>
      </svg>`;

    case 'math11ParabolaCircle':
      return `<svg viewBox="0 0 640 220" class="dia" width="100%" aria-hidden="true">
        <rect x="18" y="16" width="292" height="188" rx="14" fill="rgba(255,209,102,.08)" stroke="#ffd166" stroke-width="2"/>
        <text x="164" y="40" text-anchor="middle" fill="#ffd166" font-size="14" font-weight="800">${pick(lang, 'PARABOLA: FOCUS & DIRECTRIX', 'PARABOLA: FUOCO E DIRETTRICE')}</text>
        <path d="M84 62 Q164 196 244 62" fill="none" stroke="#45d8ff" stroke-width="3"/>
        <line x1="66" y1="154" x2="262" y2="154" stroke="#ff6a3d" stroke-width="2.5" stroke-dasharray="5 3"/>
        <circle cx="164" cy="102" r="5" fill="#38ef7d"/>
        <circle cx="164" cy="129" r="5" fill="#ffd166"/>
        <text x="176" y="106" fill="#38ef7d" font-size="11" font-weight="700">F</text>
        <text x="176" y="133" fill="#ffd166" font-size="11" font-weight="700">V(−b/2a, −Δ/4a)</text>
        <text x="164" y="182" text-anchor="middle" class="sm">${pick(lang, 'Distance PF = Distance to directrix d', 'Distanza PF = Distanza da direttrice d')}</text>

        <rect x="330" y="16" width="292" height="188" rx="14" fill="rgba(69,216,255,.08)" stroke="#45d8ff" stroke-width="2"/>
        <text x="476" y="40" text-anchor="middle" fill="#45d8ff" font-size="14" font-weight="800">${pick(lang, 'CIRCLE: x² + y² + ax + by + c = 0', 'CIRCONFERENZA')}</text>
        <circle cx="476" cy="108" r="46" fill="rgba(69,216,255,.1)" stroke="#45d8ff" stroke-width="3"/>
        <line x1="476" y1="108" x2="516" y2="85" stroke="#ffd166" stroke-width="2.5"/>
        <circle cx="476" cy="108" r="4.5" fill="#ff6a3d"/>
        <text x="498" y="92" fill="#ffd166" font-size="12" font-weight="700">r</text>
        <text x="476" y="172" text-anchor="middle" fill="#eeecf8" font-size="11" font-weight="700">C(−a/2, −b/2) · r = √(x₀² + y₀² − c)</text>
        <text x="476" y="190" text-anchor="middle" class="sm">${pick(lang, 'Real only if x₀² + y₀² − c ≥ 0', 'Reale solo se x₀² + y₀² − c ≥ 0')}</text>
      </svg>`;

    case 'math11EllipseHyperbola':
      return `<svg viewBox="0 0 640 220" class="dia" width="100%" aria-hidden="true">
        <rect x="18" y="16" width="292" height="188" rx="14" fill="rgba(56,239,125,.08)" stroke="#38ef7d" stroke-width="2"/>
        <text x="164" y="40" text-anchor="middle" fill="#38ef7d" font-size="14" font-weight="800">${pick(lang, 'ELLIPSE: PF₁ + PF₂ = 2a', 'ELLISSE: PF₁ + PF₂ = 2a')}</text>
        <ellipse cx="164" cy="106" rx="88" ry="46" fill="rgba(56,239,125,.1)" stroke="#38ef7d" stroke-width="3"/>
        <circle cx="98" cy="106" r="4.5" fill="#ffd166"/>
        <circle cx="230" cy="106" r="4.5" fill="#ffd166"/>
        <circle cx="195" cy="64" r="4.5" fill="#45d8ff"/>
        <line x1="98" y1="106" x2="195" y2="64" stroke="#ffd166" stroke-width="1.8" stroke-dasharray="4 2"/>
        <line x1="230" y1="106" x2="195" y2="64" stroke="#ffd166" stroke-width="1.8" stroke-dasharray="4 2"/>
        <text x="164" y="170" text-anchor="middle" fill="#eeecf8" font-size="12" font-weight="700">x²/a² + y²/b² = 1 · e = c/a &lt; 1</text>
        <text x="164" y="188" text-anchor="middle" class="sm">${pick(lang, 'Planetary orbits (Kepler)!', 'Orbite dei pianeti (Keplero)!')}</text>

        <rect x="330" y="16" width="292" height="188" rx="14" fill="rgba(176,139,255,.08)" stroke="#b08bff" stroke-width="2"/>
        <text x="476" y="40" text-anchor="middle" fill="#b08bff" font-size="14" font-weight="800">${pick(lang, 'HYPERBOLA: |PF₁ − PF₂| = 2a', 'IPERBOLE: |PF₁ − PF₂| = 2a')}</text>
        <line x1="380" y1="158" x2="572" y2="54" stroke="#6f74a6" stroke-width="1.6" stroke-dasharray="5 3"/>
        <line x1="380" y1="54" x2="572" y2="158" stroke="#6f74a6" stroke-width="1.6" stroke-dasharray="5 3"/>
        <path d="M384 64 Q444 106 384 148" fill="none" stroke="#ff6a3d" stroke-width="3"/>
        <path d="M568 64 Q508 106 568 148" fill="none" stroke="#ff6a3d" stroke-width="3"/>
        <text x="476" y="170" text-anchor="middle" fill="#eeecf8" font-size="12" font-weight="700">x²/a² − y²/b² = 1 · e = c/a &gt; 1</text>
        <text x="476" y="188" text-anchor="middle" class="sm">${pick(lang, 'Asymptotes: y = ±(b/a)x · Equilateral xy = k', 'Asintoti: y = ±(b/a)x · Equilatera xy = k')}</text>
      </svg>`;

    case 'math11ConicsTangent':
      return `<svg viewBox="0 0 640 218" class="dia" width="100%" aria-hidden="true">
        <rect x="18" y="16" width="350" height="186" rx="14" fill="rgba(16,20,52,.7)" stroke="#ffd166" stroke-width="2"/>
        <circle cx="193" cy="112" r="56" fill="rgba(69,216,255,.1)" stroke="#45d8ff" stroke-width="2.5"/>
        <line x1="88" y1="100" x2="298" y2="100" stroke="#38ef7d" stroke-width="2.6"/>
        <line x1="88" y1="56" x2="298" y2="56" stroke="#ffd166" stroke-width="2.8"/>
        <line x1="88" y1="34" x2="298" y2="34" stroke="#ff6a3d" stroke-width="2.2" stroke-dasharray="5 3"/>
        <circle cx="193" cy="56" r="5" fill="#ffd166"/>
        <text x="310" y="104" fill="#38ef7d" font-size="11" font-weight="700">Δ &gt; 0 Sec.</text>
        <text x="310" y="60" fill="#ffd166" font-size="11" font-weight="700">Δ = 0 Tan.</text>
        <text x="310" y="38" fill="#ff6a3d" font-size="11" font-weight="700">Δ &lt; 0 Ext.</text>
        <text x="193" y="190" text-anchor="middle" class="sm">${pick(lang, 'Tangent touches in 1 point (Δ = 0 or d(C,r) = R)', 'Tangente tocca in 1 punto (Δ = 0 o d(C,r) = R)')}</text>

        <rect x="384" y="16" width="238" height="186" rx="14" fill="rgba(176,139,255,.08)" stroke="#b08bff" stroke-width="2"/>
        <text x="503" y="42" text-anchor="middle" fill="#b08bff" font-size="13" font-weight="800">${pick(lang, 'CONIC SIGNATURES', 'RICONOSCERE LE CONICHE')}</text>
        <text x="503" y="76" text-anchor="middle" fill="#45d8ff" font-size="12" font-weight="700">Circle: x² + y² (same coeff)</text>
        <text x="503" y="106" text-anchor="middle" fill="#ffd166" font-size="12" font-weight="700">Parabola: only ONE square (x² or y²)</text>
        <text x="503" y="136" text-anchor="middle" fill="#38ef7d" font-size="12" font-weight="700">Ellipse: + sign, coeff A ≠ B</text>
        <text x="503" y="166" text-anchor="middle" fill="#ff6a3d" font-size="12" font-weight="700">Hyperbola: − sign between x², y²</text>
      </svg>`;

    case 'math11ExpLog':
      return `<svg viewBox="0 0 640 220" class="dia" width="100%" aria-hidden="true">
        <rect x="18" y="16" width="330" height="188" rx="14" fill="rgba(16,20,52,.7)" stroke="#38ef7d" stroke-width="2"/>
        <line x1="48" y1="158" x2="322" y2="158" stroke="#6f74a6" stroke-width="1.5"/>
        <line x1="115" y1="30" x2="115" y2="188" stroke="#6f74a6" stroke-width="1.5"/>
        <line x1="56" y1="186" x2="296" y2="38" stroke="#6f74a6" stroke-width="1.5" stroke-dasharray="5 3"/>
        <path d="M52 152 Q125 148 158 118 T210 38" fill="none" stroke="#45d8ff" stroke-width="3"/>
        <path d="M124 186 Q132 132 182 104 T306 72" fill="none" stroke="#ffd166" stroke-width="3"/>
        <circle cx="115" cy="134" r="4.5" fill="#45d8ff"/>
        <circle cx="152" cy="158" r="4.5" fill="#ffd166"/>
        <text x="218" y="52" fill="#45d8ff" font-size="12" font-weight="800">y = aˣ (0,1)</text>
        <text x="242" y="114" fill="#ffd166" font-size="12" font-weight="800">y = logₐx (1,0)</text>

        <rect x="364" y="16" width="258" height="188" rx="14" fill="rgba(255,209,102,.08)" stroke="#ffd166" stroke-width="2"/>
        <text x="493" y="42" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="800">${pick(lang, 'EXPONENTIAL ↔ LOGARITHM', 'ESPONENZIALI E LOGARITMI')}</text>
        <text x="493" y="74" text-anchor="middle" fill="#45d8ff" font-size="13" font-weight="700">aˣ = b  ⇔  x = logₐ(b)</text>
        <text x="493" y="106" text-anchor="middle" fill="#38ef7d" font-size="12" font-weight="700">log(x·y) = log x + log y</text>
        <text x="493" y="134" text-anchor="middle" fill="#38ef7d" font-size="12" font-weight="700">log(x/y) = log x − log y · log(xⁿ) = n log x</text>
        <text x="493" y="164" text-anchor="middle" fill="#ff9f45" font-size="12" font-weight="700">C.E.: arg &gt; 0 · base &gt; 0, base ≠ 1</text>
        <text x="493" y="186" text-anchor="middle" class="sm">${pick(lang, 'If 0 < base < 1, flip inequality sign!', 'Se 0 < base < 1, inverti il verso!')}</text>
      </svg>`;

    case 'math11UnitCircle':
      return `<svg viewBox="0 0 640 220" class="dia" width="100%" aria-hidden="true">
        <rect x="18" y="16" width="310" height="188" rx="14" fill="rgba(16,20,52,.7)" stroke="#b08bff" stroke-width="2"/>
        <line x1="60" y1="112" x2="292" y2="112" stroke="#6f74a6" stroke-width="1.5"/>
        <line x1="176" y1="28" x2="176" y2="192" stroke="#6f74a6" stroke-width="1.5"/>
        <circle cx="176" cy="112" r="64" fill="rgba(176,139,255,.1)" stroke="#b08bff" stroke-width="2.8"/>
        <line x1="176" y1="112" x2="226" y2="72" stroke="#ffd166" stroke-width="3"/>
        <line x1="176" y1="112" x2="226" y2="112" stroke="#45d8ff" stroke-width="3.5"/>
        <line x1="226" y1="112" x2="226" y2="72" stroke="#38ef7d" stroke-width="3.5"/>
        <circle cx="226" cy="72" r="5" fill="#ffd166"/>
        <text x="200" y="128" text-anchor="middle" fill="#45d8ff" font-size="11" font-weight="800">cos α</text>
        <text x="249" y="96" fill="#38ef7d" font-size="11" font-weight="800">sin α</text>
        <text x="195" y="102" fill="#ffd166" font-size="11" font-weight="700">α</text>

        <rect x="344" y="16" width="278" height="188" rx="14" fill="rgba(69,216,255,.08)" stroke="#45d8ff" stroke-width="2"/>
        <text x="483" y="42" text-anchor="middle" fill="#45d8ff" font-size="13" font-weight="800">${pick(lang, 'GONIOMETRY ESSENTIALS', 'BASI DI GONIOMETRIA')}</text>
        <text x="483" y="76" text-anchor="middle" fill="#ffd166" font-size="14" font-weight="800">sin²α + cos²α = 1</text>
        <text x="483" y="106" text-anchor="middle" fill="#38ef7d" font-size="13" font-weight="700">tan α = sin α / cos α</text>
        <text x="483" y="138" text-anchor="middle" fill="#eeecf8" font-size="12">π rad = 180° · π/3 = 60° · π/6 = 30°</text>
        <text x="483" y="168" text-anchor="middle" fill="#ff9f45" font-size="12">−1 ≤ sin α, cos α ≤ +1</text>
        <text x="483" y="188" text-anchor="middle" class="sm">${pick(lang, 'P(cos α, sin α) rides the radius-1 wheel', 'P(cos α, sin α) ruota sulla ruota di raggio 1')}</text>
      </svg>`;

    case 'math11TriangleLaws':
      return `<svg viewBox="0 0 640 220" class="dia" width="100%" aria-hidden="true">
        <rect x="18" y="16" width="292" height="188" rx="14" fill="rgba(56,239,125,.08)" stroke="#38ef7d" stroke-width="2"/>
        <text x="164" y="40" text-anchor="middle" fill="#38ef7d" font-size="13" font-weight="800">${pick(lang, 'RIGHT-TRIANGLE TRIGONOMETRY', 'TRIANGOLI RETTANGOLI')}</text>
        <polygon points="74,162 246,162 246,72" fill="rgba(69,216,255,.14)" stroke="#45d8ff" stroke-width="3" stroke-linejoin="round"/>
        <text x="156" y="108" fill="#ffd166" font-size="13" font-weight="700">c</text>
        <text x="162" y="180" fill="#45d8ff" font-size="12" font-weight="700">b = c · cos α</text>
        <text x="260" y="122" fill="#38ef7d" font-size="12" font-weight="700">a = c · sin α</text>
        <text x="106" y="154" fill="#ffd166" font-size="12" font-weight="700">α</text>

        <rect x="330" y="16" width="292" height="188" rx="14" fill="rgba(255,209,102,.08)" stroke="#ffd166" stroke-width="2"/>
        <text x="476" y="40" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="800">${pick(lang, 'ANY TRIANGLE: SINES & CARNOT', 'TRIANGOLI QUALUNQUE')}</text>
        <text x="476" y="78" text-anchor="middle" fill="#45d8ff" font-size="14" font-weight="700">a / sin α = b / sin β = c / sin γ</text>
        <text x="476" y="114" text-anchor="middle" fill="#ff6a3d" font-size="14" font-weight="800">a² = b² + c² − 2bc cos α</text>
        <text x="476" y="148" text-anchor="middle" fill="#38ef7d" font-size="13" font-weight="700">Area = ½ b · c · sin α</text>
        <text x="476" y="182" text-anchor="middle" class="sm">${pick(lang, 'When α = 90°, cos 90° = 0 ⇒ Pythagoras!', 'Con α = 90°, cos 90° = 0 ⇒ Pitagora!')}</text>
      </svg>`;

    default:
      return null;
  }
}
