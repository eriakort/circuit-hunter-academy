import type { FormulaCard, SubjectTopic } from './formulaData';

export const MATH10_TOPICS: SubjectTopic[] = [
  { id: 'systems-radicals', subject: 'math10', name: ['Linear Systems, Radicals & Line', 'Sistemi Lineari, Radicali e Retta'] },
  { id: 'quadratics', subject: 'math10', name: ['Quadratic Equations & Inequalities', 'Equazioni e Disequazioni di 2° Grado'] },
  { id: 'euclid-probability', subject: 'math10', name: ['Euclidean Theorems & Probability', 'Teoremi di Euclide e Probabilità'] }
];

export const MATH11_TOPICS: SubjectTopic[] = [
  { id: 'functions-moduli', subject: 'math11', name: ['Functions, Moduli & Irrationals', 'Funzioni, Moduli e Irrazionali'] },
  { id: 'conics', subject: 'math11', name: ['Conic Sections', 'Le Coniche (Parabola, Circonferenza, Ellisse, Iperbole)'] },
  { id: 'exp-log-trig', subject: 'math11', name: ['Exponentials, Logarithms & Trigonometry', 'Esponenziali, Logaritmi e Trigonometria'] }
];

export const MATH_ADV_FORMULA_CARDS: FormulaCard[] = [
  // =========================================================================
  // GRADE 10 MATHEMATICS (math10)
  // =========================================================================
  {
    id: 'm10-cramer-system',
    subject: 'math10',
    topicId: 'systems-radicals',
    category: 'systems-radicals',
    title: ['Linear System & Cramer’s Rule', 'Sistema Lineare e Metodo di Cramer'],
    formula: 'D = a₁b₂ − a₂b₁  ·  x = Dx / D  ·  y = Dy / D',
    rules: [
      {
        name: ['Determined (1 solution)', 'Determinato (1 soluzione)'],
        math: 'D ≠ 0  (a₁/a₂ ≠ b₁/b₂)',
        desc: ['Two lines cross at one unique point (x, y).', 'Due rette si incontrano in un solo punto (x, y).']
      },
      {
        name: ['Impossible (0 solutions)', 'Impossibile (0 soluzioni)'],
        math: 'D = 0 and Dx ≠ 0',
        desc: ['Parallel tracks with the same slope and different intercepts.', 'Rette parallele distinte: stessa pendenza, nessun incrocio.']
      },
      {
        name: ['Indeterminate (∞ solutions)', 'Indeterminato (∞ soluzioni)'],
        math: 'D = Dx = Dy = 0',
        desc: ['Equations are multiples of the same line.', 'Le equazioni rappresentano la stessa identica retta.']
      }
    ],
    example: [
      'x + y = 7 and x − y = 3 → add both equations: 2x = 10 → x = 5, y = 2.',
      'x + y = 7 e x − y = 3 → somma le equazioni: 2x = 10 → x = 5, y = 2.'
    ],
    trap: [
      'Before using Cramer, write both equations in standard form ax + by = c (constants on the right!).',
      'Prima di applicare Cramer, scrivi entrambe le equazioni in forma normale ax + by = c (termini noti a destra!).'
    ]
  },
  {
    id: 'm10-radicals-props',
    subject: 'math10',
    topicId: 'systems-radicals',
    category: 'systems-radicals',
    title: ['Radicals & Rationalization', 'Radicali e Razionalizzazione'],
    formula: '√(a · b) = √a · √b  ·  √(a²) = |a|  ·  k / √a = (k√a) / a',
    rules: [
      {
        name: ['Existence condition', 'Condizione di esistenza (C.E.)'],
        math: 'Even index n: √[n]{A} requires A ≥ 0',
        desc: ['Odd roots (∛−8 = −2) accept negatives; even roots do not.', 'Le radici di indice dispari accettano negativi; quelle pari no.']
      },
      {
        name: ['Sum & difference trick', 'Razionalizzazione con somma × differenza'],
        math: '1 / (√a − √b) = (√a + √b) / (a − b)',
        desc: ['Multiply top and bottom by the conjugate to remove the root.', 'Moltiplica numeratore e denominatore per il coniugato.']
      }
    ],
    example: [
      '√72 = √(36 · 2) = 6√2   ·   6 / √3 = (6√3) / 3 = 2√3.',
      '√72 = √(36 · 2) = 6√2   ·   6 / √3 = (6√3) / 3 = 2√3.'
    ],
    trap: [
      'BIGGEST TRAP: √(a + b) is NOT √a + √b! Example: √(9 + 16) = √25 = 5, NOT 3 + 4 = 7!',
      'ERRORE CLASSICO: √(a + b) NON fa √a + √b! Esempio: √(9 + 16) = √25 = 5, NON 3 + 4 = 7!'
    ]
  },
  {
    id: 'm10-cartesian-line',
    subject: 'math10',
    topicId: 'systems-radicals',
    category: 'systems-radicals',
    title: ['Cartesian Plane & Straight Line', 'Piano Cartesiano e Retta'],
    formula: 'y = mx + q  ·  m = (y₂ − y₁)/(x₂ − x₁)  ·  d = √[(Δx)² + (Δy)²]',
    rules: [
      {
        name: ['Parallel lines', 'Rette parallele'],
        math: 'm₁ = m₂',
        desc: ['Same slope m means identical steepness.', 'Stesso coefficiente angolare m = stessa pendenza.']
      },
      {
        name: ['Perpendicular lines', 'Rette perpendicolari'],
        math: 'm₁ · m₂ = −1  (m₂ = −1 / m₁)',
        desc: ['Reciprocal with opposite sign creates a 90° angle.', 'Antireciproco (inverso e opposto) forma un angolo di 90°.']
      }
    ],
    example: [
      'Line through (1, 2) and (3, 8): m = (8−2)/(3−1) = 3; perpendicular slope = −1/3.',
      'Retta per (1, 2) e (3, 8): m = (8−2)/(3−1) = 3; retta perpendicolare ha m = −1/3.'
    ],
    trap: [
      'In implicit form ax + by + c = 0, the slope is m = −a/b (watch the minus sign!). Vertical lines x = k have NO finite m.',
      'In forma implicita ax + by + c = 0 il coefficiente angolare è m = −a/b (occhio al meno!). Le rette verticali x = k non hanno m definito.'
    ]
  },
  {
    id: 'm10-quadratic-formula',
    subject: 'math10',
    topicId: 'quadratics',
    category: 'quadratics',
    title: ['Quadratic Formula, Δ & Viète', 'Formula Risolutiva, Δ e Viète'],
    formula: 'x = (−b ± √Δ) / (2a)  ·  Δ = b² − 4ac  ·  S = −b/a, P = c/a',
    rules: [
      {
        name: ['Discriminant Δ sign', 'Segno del discriminante Δ'],
        math: 'Δ > 0 (2 roots) · Δ = 0 (1 double) · Δ < 0 (no real)',
        desc: ['Counts how many times the parabola crosses the x-axis.', 'Indica quante volte la parabola taglia l’asse delle x.']
      },
      {
        name: ['Parabola sign inequality (a > 0)', 'Disequazione di 2° grado (a > 0)'],
        math: 'ax²+bx+c > 0 → outside (x < x₁ ∨ x > x₂)  ·  < 0 → inside (x₁ < x < x₂)',
        desc: ['Always sketch the U-shaped parabola first; flip if a < 0.', 'Disegna sempre la parabola a U: valori esterni per >, interni per <.']
      }
    ],
    example: [
      'x² − 5x + 6 = 0 → S = 5, P = 6 → roots x₁ = 2, x₂ = 3. So x² − 5x + 6 < 0 gives 2 < x < 3.',
      'x² − 5x + 6 = 0 → S = 5, P = 6 → radici x₁ = 2, x₂ = 3. Quindi x² − 5x + 6 < 0 dà 2 < x < 3.'
    ],
    trap: [
      'Never divide an inequality by x, and if a < 0 multiply by −1 FIRST (remembering to flip < / >)!',
      'Non dividere mai per x; se a < 0 moltiplica prima per −1 (ricordandoti di invertire il verso della disequazione!).'
    ]
  },
  {
    id: 'm10-euclid-probability',
    subject: 'math10',
    topicId: 'euclid-probability',
    category: 'euclid-probability',
    title: ['Euclid’s Theorems & Probability', 'Teoremi di Euclide e Probabilità'],
    formula: 'b² = a · p₁  ·  h² = p₁ · p₂  ·  P(E) = favorable / total',
    rules: [
      {
        name: ['Euclid’s 1st & 2nd Theorems', '1° e 2° Teorema di Euclide'],
        math: 'cathetus² = hypotenuse · projection  ·  h² = p₁ · p₂',
        desc: ['Relates legs, altitude h, and projections p₁, p₂ onto hypotenuse a.', 'Collega cateti, altezza h e proiezioni p₁, p₂ sull’ipotenusa a.']
      },
      {
        name: ['Union & Complement Events', 'Evento contrario e Unione'],
        math: 'P(Ē) = 1 − P(E)  ·  P(A ∪ B) = P(A) + P(B) − P(A ∩ B)',
        desc: ['Subtract P(A ∩ B) so overlapping cases are not counted twice.', 'Sottrai P(A ∩ B) per non contare due volte i casi comuni.']
      }
    ],
    example: [
      'Projections p₁ = 4 cm, p₂ = 9 cm → altitude h = √(4 · 9) = 6 cm, hypotenuse a = 13 cm.',
      'Proiezioni p₁ = 4 cm, p₂ = 9 cm → altezza h = √(4 · 9) = 6 cm, ipotenusa a = 13 cm.'
    ],
    trap: [
      'In a die or card draw, never multiply probabilities for OR (use +); multiply only for sequential AND independent events!',
      'Per "A OPPURE B" si somma (sottraendo l’intersezione), non si moltiplica; si moltiplica solo per "A E POI B"!'
    ]
  },

  // =========================================================================
  // GRADE 11 MATHEMATICS (math11)
  // =========================================================================
  {
    id: 'm11-functions-domain',
    subject: 'math11',
    topicId: 'functions-moduli',
    category: 'functions-moduli',
    title: ['Domain, Parity, Moduli & Irrationals', 'Dominio, Parità, Moduli e Irrazionali'],
    formula: 'D ≠ 0  ·  √A → A ≥ 0  ·  |A| < k ⇔ −k < A < k',
    rules: [
      {
        name: ['Irrational equation √A = B', 'Equazione irrazionale √A = B'],
        math: 'A ≥ 0  ∧  B ≥ 0  ∧  A = B²',
        desc: ['Check B ≥ 0 before squaring so ghost negative roots are rejected.', 'Imponi B ≥ 0 prima di elevare al quadrato per evitare soluzioni fantasma.']
      },
      {
        name: ['Absolute value split', 'Apertura del valore assoluto'],
        math: '|A| > k (k > 0) ⇔ A < −k ∨ A > k',
        desc: ['Think of |x − c| as distance from center c on the number line.', 'Pensa a |x − c| come distanza dal centro c sulla retta reale.']
      }
    ],
    example: [
      '|x − 3| ≤ 2 → −2 ≤ x − 3 ≤ 2 → 1 ≤ x ≤ 5.',
      '|x − 3| ≤ 2 → −2 ≤ x − 3 ≤ 2 → 1 ≤ x ≤ 5.'
    ],
    trap: [
      'Fractional inequalities A/B ≥ 0: NEVER drop denominator B! Make a sign chart for N and D separately and exclude D = 0.',
      'Disequazioni fratte A/B ≥ 0: MAI moltiplicare per B eliminando il denominatore! Fai il quadro dei segni ed escludi D = 0.'
    ]
  },
  {
    id: 'm11-parabola-circle',
    subject: 'math11',
    topicId: 'conics',
    category: 'conics',
    title: ['Parabola & Circle Equations', 'Equazioni di Parabola e Circonferenza'],
    formula: 'y = ax²+bx+c  ·  x² + y² + ax + by + c = 0  ·  C(−a/2, −b/2)',
    rules: [
      {
        name: ['Parabola vertex & focus', 'Vertice e Fuoco della parabola'],
        math: 'V = (−b/2a, −Δ/4a)  ·  F = (−b/2a, (1 − Δ)/4a)',
        desc: ['Vertical axis x = −b/2a; opens up if a > 0, down if a < 0.', 'Asse x = −b/2a; concavità verso l’alto se a > 0, basso se a < 0.']
      },
      {
        name: ['Circle radius', 'Raggio della circonferenza'],
        math: 'r = √(x₀² + y₀² − c)  where x₀ = −a/2, y₀ = −b/2',
        desc: ['Standard form (x − x₀)² + (y − y₀)² = r² directly shows center and radius.', 'Nella forma (x − x₀)² + (y − y₀)² = r² leggi subito centro e raggio.']
      }
    ],
    example: [
      'x² + y² − 4x + 6y − 3 = 0 → C(2, −3), r = √(4 + 9 − (−3)) = √16 = 4.',
      'x² + y² − 4x + 6y − 3 = 0 → C(2, −3), r = √(4 + 9 + 3) = √16 = 4.'
    ],
    trap: [
      'Remember to DIVIDE the x and y coefficients by −2 to get the circle center C(−a/2, −b/2)—do not leave them as (a, b)!',
      'Ricorda di DIVIDERE per −2 i coefficienti di x e y per trovare il centro C(−a/2, −b/2)!'
    ]
  },
  {
    id: 'm11-ellipse-hyperbola',
    subject: 'math11',
    topicId: 'conics',
    category: 'conics',
    title: ['Ellipse & Hyperbola Canonical Forms', 'Ellisse e Iperbole (Forma Canonica)'],
    formula: 'x²/a² ± y²/b² = 1  ·  e = c / a  ·  Asymptotes: y = ±(b/a)x',
    rules: [
      {
        name: ['Ellipse focus link', 'Relazione fuochi dell’ellisse'],
        math: 'x²/a² + y²/b² = 1 · c² = |a² − b²| · 0 ≤ e < 1',
        desc: ['Sum of distances PF₁ + PF₂ is constant (= 2a if a > b).', 'Somma delle distanze dai fuochi costante; più e → 1 più è schiacciata.']
      },
      {
        name: ['Hyperbola focus & asymptotes', 'Fuochi e asintoti dell’iperbole'],
        math: 'x²/a² − y²/b² = 1 · c² = a² + b² · e > 1',
        desc: ['Branches hug the asymptote lines y = ±(b/a)x at infinity.', 'I rami si avvicinano agli asintoti y = ±(b/a)x senza toccarli mai.']
      }
    ],
    example: [
      'x²/25 + y²/9 = 1 → a = 5, b = 3, c = √(25−9) = 4, eccentricity e = 4/5 = 0.8.',
      'x²/25 + y²/9 = 1 → a = 5, b = 3, c = √(25−9) = 4, eccentricità e = 4/5 = 0,8.'
    ],
    trap: [
      'Watch the focal formula sign: ELLIPSE subtracts (c² = |a² − b²|), whereas HYPERBOLA adds (c² = a² + b²)!',
      'Occhio al segno per c: nell’ELLISSE si sottrae (c² = |a² − b²|), nell’IPERBOLE si somma (c² = a² + b²)!'
    ]
  },
  {
    id: 'm11-exp-log',
    subject: 'math11',
    topicId: 'exp-log-trig',
    category: 'exp-log-trig',
    title: ['Exponentials & Logarithms', 'Esponenziali e Logaritmi'],
    formula: 'aˣ = b ⇔ x = logₐ(b)  ·  log(xy) = log x + log y  ·  log(xⁿ) = n log x',
    rules: [
      {
        name: ['Logarithm existence & base', 'Esistenza e base del logaritmo'],
        math: 'Argument b > 0 · base a > 0, a ≠ 1',
        desc: ['logₐ(1) = 0, logₐ(a) = 1. Links directly to chemistry pH = −log₁₀[H⁺].', 'logₐ(1) = 0, logₐ(a) = 1. Usato in chimica per pH = −log₁₀[H⁺].']
      },
      {
        name: ['Change of base & inequalities', 'Cambio di base e disequazioni'],
        math: 'logₐ(b) = ln(b) / ln(a) · flip < / > if 0 < a < 1',
        desc: ['When base a is between 0 and 1, the function decreases so inequality reverses.', 'Se la base è 0 < a < 1, la funzione è decrescente e il verso si inverte.']
      }
    ],
    example: [
      'log₂(8) = 3 because 2³ = 8   ·   2ˣ⁺¹ = 16 = 2⁴ → x + 1 = 4 → x = 3.',
      'log₂(8) = 3 perché 2³ = 8   ·   2ˣ⁺¹ = 16 = 2⁴ → x + 1 = 4 → x = 3.'
    ],
    trap: [
      'log(x + y) does NOT split! Product log(x · y) becomes a SUM, NOT log(x + y).',
      'log(x + y) NON si può spezzare! È log(x · y) che diventa log x + log y.'
    ]
  },
  {
    id: 'm11-trig-laws',
    subject: 'math11',
    topicId: 'exp-log-trig',
    category: 'exp-log-trig',
    title: ['Goniometry & Triangle Theorems', 'Goniometria e Teoremi dei Triangoli'],
    formula: 'sin²α + cos²α = 1  ·  a/sin α = b/sin β  ·  a² = b² + c² − 2bc cos α',
    rules: [
      {
        name: ['Radians & Unit Circle', 'Radianti e Circonferenza Goniometrica'],
        math: 'rad = deg · π / 180°  ·  tan α = sin α / cos α',
        desc: ['30° = π/6, 45° = π/4, 60° = π/3, 90° = π/2, 180° = π.', '30° = π/6, 45° = π/4, 60° = π/3, 90° = π/2, 180° = π.']
      },
      {
        name: ['Sine & Carnot (Cosine) Theorems', 'Teorema dei Seni e di Carnot'],
        math: 'a² = b² + c² − 2bc cos α  ·  Area = ½ b c sin α',
        desc: ['Carnot generalizes Pythagoras to every triangle (cos 90° = 0).', 'Carnot generalizza Pitagora a qualsiasi triangolo (cos 90° = 0).']
      }
    ],
    example: [
      'If sin α = 3/5 (1st quadrant), cos α = √(1 − 9/25) = 4/5 and tan α = 3/4.',
      'Se sin α = 3/5 (1° quadrante), cos α = √(1 − 9/25) = 4/5 e tan α = 3/4.'
    ],
    trap: [
      'In Carnot’s theorem a² = b² + c² − 2bc cos α, do NOT forget the MINUS sign and remember cos(obtuse angle) is NEGATIVE!',
      'Nel teorema di Carnot a² = b² + c² − 2bc cos α non dimenticare il segno MENO e ricorda che per angoli ottusi cos α è NEGATIVO!'
    ]
  }
];
