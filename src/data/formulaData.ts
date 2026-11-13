import { BilingualText, SubjectId } from '../types';
import { GRADE5_MATH_FORMULA_CARDS, GRADE5_MATH_TOPICS } from './grade5MathFormulaData';
import { ITALIAN_GRAMMAR_FORMULA_CARDS, ITALIAN_GRAMMAR_TOPIC } from './italianGrammarFormulaData';

export interface FormulaRule {
  name: BilingualText;
  math: string;
  desc: BilingualText;
}

export interface SubjectTopic {
  id: string;
  subject: SubjectId;
  name: BilingualText;
}

export interface FormulaCard {
  id: string;
  subject: SubjectId;
  topicId: string;
  category: string; // backwards compatibility
  title: BilingualText;
  formula: string;
  rules?: FormulaRule[];
  example: BilingualText;
  trap?: BilingualText;
  visualKey?: string;
}

export const SUBJECT_TOPICS: Record<SubjectId, SubjectTopic[]> = {
  math: [
    { id: 'powers', subject: 'math', name: ['Powers & Exponents', 'Potenze ed Esponenti'] },
    { id: 'fractions', subject: 'math', name: ['Fractions, Decimals & Proportions', 'Frazioni, Decimali e Proporzioni'] },
    { id: 'algebra', subject: 'math', name: ['Algebra & Special Products', 'Calcolo Letterale e Prodotti Notevoli'] },
    { id: 'equations', subject: 'math', name: ['Equations & Inequalities', 'Equazioni e Disequazioni'] },
    { id: 'sets', subject: 'math', name: ['Sets & Formal Logic', 'Insiemi e Logica Formale'] }
  ],
  phys: [
    { id: 'density-measurement', subject: 'phys', name: ['Density & Measurement', 'Densità e Misura'] },
    { id: 'forces-elasticity', subject: 'phys', name: ['Forces, Weight & Hooke\'s Law', 'Forze, Peso e Legge di Hooke'] },
    { id: 'equilibrium-levers', subject: 'phys', name: ['Equilibrium, Torque & Levers', 'Equilibrio, Momento e Leve'] },
    { id: 'fluids-pressure', subject: 'phys', name: ['Pressure, Stevin & Archimedes', 'Pressione, Stevino e Archimede'] },
    { id: 'friction-work', subject: 'phys', name: ['Friction & Mechanical Work', 'Attrito e Lavoro Meccanico'] }
  ],
  cs: [
    { id: 'binary-encoding', subject: 'cs', name: ['Binary, Hex & Data Units', 'Binario, Esadecimale e Unità di Misura'] },
    { id: 'boolean-logic', subject: 'cs', name: ['Boolean Logic & De Morgan', 'Logica Booleana e De Morgan'] },
    { id: 'circuits-hardware', subject: 'cs', name: ['Ohm\'s Law, Circuits & Power', 'Legge di Ohm, Circuiti e Potenza'] },
    { id: 'networking', subject: 'cs', name: ['Networks, Bandwidth & Transfer Time', 'Reti, Larghezza di Banda e Tempi'] }
  ],
  science: [
    { id: 'matter-energy', subject: 'science', name: ['States of Matter & Heat', 'Stati della Materia e Calore'] },
    { id: 'forces-motion', subject: 'science', name: ['Speed, Motion & Gravity', 'Velocità, Movimento e Gravità'] },
    { id: 'photosynthesis-ecosystem', subject: 'science', name: ['Photosynthesis & Living Systems', 'Fotosintesi e Sistemi Viventi'] }
  ],
  math5: GRADE5_MATH_TOPICS,
  italian: [
    { id: 'fonetica', subject: 'italian', name: ['Phonetics & Pronunciation (C/G, GLI, GN, Doppie)', 'Fonetica e Pronuncia (C/G, GLI, GN, Doppie)'] },
    { id: 'articoli-nomi', subject: 'italian', name: ['Articles, Gender & Plural Endings', 'Articoli, Genere e Desinenze del Plurale'] },
    { id: 'verbi-tempi', subject: 'italian', name: ['Verb Tenses & Auxiliaries (Essere vs Avere)', 'Tempi Verbali e Ausiliari (Essere vs Avere)'] },
    { id: 'pronomi', subject: 'italian', name: ['Direct, Indirect & Combined Pronouns', 'Pronomi Diretti, Indiretti e Combinati'] },
    { id: 'congiuntivo-condizionale', subject: 'italian', name: ['Subjunctive & Conditional of Courtesy', 'Congiuntivo e Condizionale di Cortesia'] },
    ITALIAN_GRAMMAR_TOPIC
  ]
};

export const FORMULA_CARDS: FormulaCard[] = [
  // =========================================================================
  // MATHEMATICS (Grade 8/9 Bergamini–Barozzi)
  // =========================================================================

  // --- TOPIC: Powers & Exponents ---
  {
    id: 'power-props-same-base',
    subject: 'math',
    topicId: 'powers',
    category: 'powers',
    title: ['Properties of Powers: Same Base', 'Proprietà delle potenze: Stessa base'],
    formula: 'aᵐ · aⁿ = aᵐ⁺ⁿ  ·  aᵐ : aⁿ = aᵐ⁻ⁿ  ·  (aᵐ)ⁿ = aᵐ·ⁿ',
    rules: [
      {
        name: ['Product (same base)', 'Prodotto (stessa base)'],
        math: 'aᵐ · aⁿ = aᵐ⁺ⁿ',
        desc: ['Keep the base, ADD the exponents.', 'Si riscrive la stessa base e si SOMMANO gli esponenti.']
      },
      {
        name: ['Quotient (same base)', 'Quoziente (stessa base)'],
        math: 'aᵐ : aⁿ = aᵐ⁻ⁿ',
        desc: ['Keep the base, SUBTRACT the exponents.', 'Si riscrive la stessa base e si SOTTRAGGONO gli esponenti.']
      },
      {
        name: ['Power of a power', 'Potenza di potenza'],
        math: '(aᵐ)ⁿ = aᵐ·ⁿ',
        desc: ['Keep the base, MULTIPLY the exponents.', 'Si riscrive la base e si MOLTIPLICANO gli esponenti tra loro.']
      }
    ],
    example: [
      '2³ · 2⁴ = 2³⁺⁴ = 2⁷ = 128  ·  5⁶ : 5² = 5⁴ = 625  ·  (3²)³ = 3⁶ = 729',
      '2³ · 2⁴ = 2³⁺⁴ = 2⁷ = 128  ·  5⁶ : 5² = 5⁴ = 625  ·  (3²)³ = 3⁶ = 729'
    ],
    trap: [
      'Watch out! In (2³)² = 2⁶, do not add exponents (2⁵ is wrong!). In addition 2³ + 2⁴, you CANNOT add exponents: calculate values separately (8 + 16 = 24)!',
      'Attenzione al tranello! In (2³)² gli esponenti si moltiplicano (2⁶, non 2⁵!). Inoltre nell\'addizione 2³ + 2⁴ NON si possono sommare gli esponenti: si calcolano separatamente (8 + 16 = 24)!'
    ]
  },
  {
    id: 'power-props-same-exp',
    subject: 'math',
    topicId: 'powers',
    category: 'powers',
    title: ['Properties of Powers: Same Exponent', 'Proprietà delle potenze: Stesso esponente'],
    formula: 'aⁿ · bⁿ = (a · b)ⁿ  ·  aⁿ : bⁿ = (a : b)ⁿ',
    rules: [
      {
        name: ['Product (same exponent)', 'Prodotto (stesso esponente)'],
        math: 'aⁿ · bⁿ = (a · b)ⁿ',
        desc: ['Multiply bases, keep the exponent.', 'Si moltiplicano le basi e si conserva lo stesso esponente.']
      },
      {
        name: ['Quotient (same exponent)', 'Quoziente (stesso esponente)'],
        math: 'aⁿ : bⁿ = (a : b)ⁿ',
        desc: ['Divide bases, keep the exponent.', 'Si dividono le basi e si conserva lo stesso esponente.']
      }
    ],
    example: [
      '2⁴ · 5⁴ = (2 · 5)⁴ = 10⁴ = 10 000  ·  12³ : 4³ = (12 : 4)³ = 3³ = 27',
      '2⁴ · 5⁴ = (2 · 5)⁴ = 10⁴ = 10 000  ·  12³ : 4³ = (12 : 4)³ = 3³ = 27'
    ],
    trap: [
      'Do NOT add the exponents when bases are multiplied with same exponent: 2⁴ · 5⁴ is 10⁴, NOT 10⁸!',
      'NON sommare gli esponenti se le basi sono diverse: 2⁴ · 5⁴ fa (2 · 5)⁴ = 10⁴, NON 10⁸!'
    ]
  },
  {
    id: 'power-special-exponents',
    subject: 'math',
    topicId: 'powers',
    category: 'powers',
    title: ['Special Exponents: Zero & Negatives', 'Esponenti particolari: Zero e Negativi'],
    formula: 'a⁰ = 1 (a ≠ 0)  ·  a⁻ⁿ = 1 / aⁿ  ·  (a/b)⁻ⁿ = (b/a)ⁿ',
    rules: [
      {
        name: ['Zero exponent', 'Esponente zero'],
        math: 'a⁰ = 1  (a ≠ 0)',
        desc: ['Any non-zero number to power 0 equals 1. (0⁰ is undefined).', 'Qualunque numero diverso da zero elevato a 0 vale 1. (0⁰ è indeterminata).']
      },
      {
        name: ['Negative exponent (integers)', 'Esponente negativo (interi)'],
        math: 'a⁻ⁿ = 1 / aⁿ',
        desc: ['Negative exponent inverts the base to denominator.', 'L\'esponente negativo sposta la potenza al denominatore.']
      },
      {
        name: ['Negative exponent (fractions)', 'Esponente negativo (frazioni)'],
        math: '(a/b)⁻ⁿ = (b/a)ⁿ',
        desc: ['Flip the fraction upside down, make exponent positive.', 'Capovolgi la frazione e rendi l\'esponente positivo.']
      }
    ],
    example: [
      '7⁰ = 1  ·  3⁻² = 1 / 3² = 1/9  ·  (2/3)⁻³ = (3/2)³ = 27/8',
      '7⁰ = 1  ·  3⁻² = 1 / 3² = 1/9  ·  (2/3)⁻³ = (3/2)³ = 27/8'
    ],
    trap: [
      'A negative exponent does NOT make the number negative! (2/3)⁻² = 9/4 (positive!). The minus only flips the fraction.',
      'L\'esponente negativo NON rende il numero negativo! (2/3)⁻² = 9/4 (positivo!). Il segno meno all\'esponente capovolge solo la frazione.'
    ]
  },
  {
    id: 'integers-signs-powers',
    subject: 'math',
    topicId: 'powers',
    category: 'powers',
    title: ['Signs with Powers and Parentheses', 'Segni nelle potenze e parentesi'],
    formula: '(−a)ⁿ: even n → +aⁿ, odd n → −aⁿ  ·  −aⁿ = −(aⁿ)',
    rules: [
      {
        name: ['Even power with brackets', 'Esponente pari con parentesi'],
        math: '(−a)²ⁿ = +a²ⁿ',
        desc: ['Even exponent turns negative base into positive.', 'Esponente pari trasforma la base negativa in positiva.']
      },
      {
        name: ['Odd power with brackets', 'Esponente dispari con parentesi'],
        math: '(−a)²ⁿ⁺¹ = −a²ⁿ⁺¹',
        desc: ['Odd exponent preserves the negative sign.', 'Esponente dispari mantiene il segno meno.']
      },
      {
        name: ['Without brackets trap', 'Tranello senza parentesi'],
        math: '−a² = −(a²)',
        desc: ['The exponent applies ONLY to \'a\', the minus stays!', 'L\'esponente si applica solo al numero \'a\', il meno rimane!']
      }
    ],
    example: [
      '(−3)² = +9  ·  (−3)³ = −27  ·  −3² = −9 (huge difference!)',
      '(−3)² = +9  ·  (−3)³ = −27  ·  −3² = −9 (differenza fondamentale!)'
    ],
    trap: [
      '(−3)² = +9, BUT −3² = −9! Without parentheses, the power does not touch the minus sign.',
      '(−3)² = +9, MA −3² = −9! Senza parentesi, l\'esponente 2 si applica solo al 3, non al segno meno.'
    ],
    visualKey: 'math-integers-line'
  },
  {
    id: 'mcd-mcm-recipe',
    subject: 'math',
    topicId: 'powers',
    category: 'powers',
    title: ['M.C.D. & m.c.m. Recipe', 'Regola del M.C.D. e del m.c.m.'],
    formula: 'M.C.D. = common factors with min exponent  ·  m.c.m. = all factors with max exponent',
    rules: [
      {
        name: ['M.C.D. (GCD)', 'M.C.D.'],
        math: 'Factors: ONLY common · Exp: MINIMUM',
        desc: ['Product of only common prime factors with lowest exponent.', 'Fattori primi SOLO comuni, presi con il MINIMO esponente.']
      },
      {
        name: ['m.c.m. (LCM)', 'm.c.m.'],
        math: 'Factors: ALL (common & not) · Exp: MAXIMUM',
        desc: ['Product of all prime factors with highest exponent.', 'TUTTI i fattori primi (comuni e non comuni), con il MASSIMO esponente.']
      },
      {
        name: ['Fundamental relation', 'Relazione fondamentale'],
        math: 'M.C.D.(a, b) · m.c.m.(a, b) = a · b',
        desc: ['Product of GCD and LCM equals the product of the two numbers.', 'Il prodotto tra M.C.D. e m.c.m. è uguale al prodotto dei due numeri.']
      }
    ],
    example: [
      '12 = 2² · 3 and 18 = 2 · 3² → M.C.D. = 2 · 3 = 6; m.c.m. = 2² · 3² = 36.',
      '12 = 2² · 3 e 18 = 2 · 3² → M.C.D. = 2 · 3 = 6; m.c.m. = 2² · 3² = 36.'
    ],
    trap: [
      'Remember: M.C.D. produces a number SMALLER than or equal to both numbers; m.c.m. produces a number LARGER than or equal to both!',
      'Ricorda: il M.C.D. è sempre MINORE o uguale ai numeri di partenza; il m.c.m. è sempre MAGGIORE o uguale!'
    ],
    visualKey: 'math-mcd-mcm'
  },

  // --- TOPIC: Fractions & Decimals ---
  {
    id: 'fractions-invariant',
    subject: 'math',
    topicId: 'fractions',
    category: 'fractions',
    title: ['Fractions Invariant Property', 'Proprietà invariantiva delle frazioni'],
    formula: 'a / b = (a · k) / (b · k) = (a : k) / (b : k)  (k ≠ 0)',
    rules: [
      {
        name: ['Simplification', 'Semplificazione'],
        math: 'a / b = (a : M.C.D.) / (b : M.C.D.)',
        desc: ['Divide top and bottom by their GCD to reach lowest terms.', 'Dividi numeratore e denominatore per il loro M.C.D. per ridurre ai minimi termini.']
      },
      {
        name: ['Expansion / Common Denominator', 'Riduzione a denominatore comune'],
        math: 'Multiply both by k to match m.c.m. of denominators.',
        desc: ['Multiply top and bottom by same factor to prepare for sum.', 'Moltiplica entrambi per lo stesso fattore per poter sommare.']
      }
    ],
    example: [
      '24/36 = (24 : 12) / (36 : 12) = 2/3  ·  3/4 = (3 · 3) / (4 · 3) = 9/12',
      '24/36 = (24 : 12) / (36 : 12) = 2/3  ·  3/4 = (3 · 3) / (4 · 3) = 9/12'
    ],
    trap: [
      'Adding the same number to numerator and denominator RUINS equivalence: 1/2 ≠ (1+1)/(2+1) = 2/3!',
      'SOMMARE lo stesso numero sopra e sotto NON è consentito: 1/2 ≠ (1+1)/(2+1) = 2/3!'
    ],
    visualKey: 'math-fractions-visual'
  },
  {
    id: 'generating-fractions',
    subject: 'math',
    topicId: 'fractions',
    category: 'fractions',
    title: ['Generating Fractions of Decimals', 'Frazioni generatrici di numeri decimali'],
    formula: 'Finite: a / 10ⁿ  ·  Simple Periodic: p / 9...9  ·  Mixed: (ap − a) / 9...90...0',
    rules: [
      {
        name: ['Terminating (finite) decimal', 'Decimale limitato'],
        math: '0.d₁d₂...dₖ = (d₁d₂...dₖ) / 10ᵏ',
        desc: ['Denominator is 10 raised to the number of decimal digits.', 'Al denominatore 1 seguito da tanti zeri quante sono le cifre decimali.']
      },
      {
        name: ['Simple repeating decimal', 'Periodico semplice'],
        math: '0.(p) = p / (as many 9s as period digits)',
        desc: ['Denominator has only 9s (one 9 per repeating digit).', 'Al denominatore tanti 9 quante sono le cifre del periodo.']
      },
      {
        name: ['Mixed repeating decimal', 'Periodico misto'],
        math: 'c.a(p) = (cap − ca) / (9s for period, 0s for antiperiod)',
        desc: ['Entire number minus non-periodic part, divided by 9s then 0s.', 'Tutto il numero senza virgola meno la parte prima del periodo, fratto 9 e 0.']
      }
    ],
    example: [
      '0.75 = 75/100 = 3/4  ·  0.(3) = 3/9 = 1/3  ·  1.2(3) = (123 − 12)/90 = 111/90 = 37/30',
      '0,75 = 75/100 = 3/4  ·  0,(3) = 3/9 = 1/3  ·  1,2(3) = (123 − 12)/90 = 111/90 = 37/30'
    ],
    trap: [
      'In mixed decimals, do not forget to subtract the anti-period! For 0.1(6), it is (16 − 1)/90 = 15/90 = 1/6, NOT 16/90!',
      'Nei periodici misti non dimenticare di sottrarre l\'antiperiodo: per 0,1(6) si fa (16 − 1)/90 = 15/90 = 1/6, NON 16/90!'
    ]
  },
  {
    id: 'proportions-formulas',
    subject: 'math',
    topicId: 'fractions',
    category: 'fractions',
    title: ['Proportions & Cross Multiplication', 'Proporzioni e prodotto incrociato'],
    formula: 'a : b = c : d  ⇔  a · d = b · c',
    rules: [
      {
        name: ['Fundamental property', 'Proprietà fondamentale'],
        math: 'Extreme · Extreme = Mean · Mean (a · d = b · c)',
        desc: ['Product of extremes equals product of means.', 'Il prodotto degli estremi è uguale al prodotto dei medi.']
      },
      {
        name: ['Find an unknown mean', 'Calcolo del medio incognito'],
        math: 'x = (a · d) / c',
        desc: ['Multiply the extremes and divide by the known mean.', 'Moltiplica i due estremi e dividi per l\'altro medio.']
      },
      {
        name: ['Continuous proportion', 'Proporzione continua'],
        math: 'a : x = x : b  ⇒  x = √(a · b)',
        desc: ['Mean proportional is the square root of the product of extremes.', 'Il medio proporzionale è la radice quadrata del prodotto degli estremi.']
      }
    ],
    example: [
      '4 : x = 6 : 9 → x = (4 · 9) / 6 = 36 / 6 = 6  ·  4 : x = x : 9 → x = √(36) = 6',
      '4 : x = 6 : 9 → x = (4 · 9) / 6 = 36 / 6 = 6  ·  4 : x = x : 9 → x = √(36) = 6'
    ],
    trap: [
      'Cross multiplication works only with an equal sign between ratios: a/b = c/d → a·d = b·c. Do not do cross multiplication during fraction addition!',
      'Il prodotto incrociato vale solo per l\'uguaglianza di rapporti (proporzioni)! Non farlo quando sommi frazioni a/b + c/d!'
    ]
  },

  // --- TOPIC: Algebra & Special Products ---
  {
    id: 'special-product-diff-squares',
    subject: 'math',
    topicId: 'algebra',
    category: 'algebra',
    title: ['Sum Times Difference (Diff. of Squares)', 'Somma per differenza (Differenza di quadrati)'],
    formula: '(A + B)(A − B) = A² − B²',
    rules: [
      {
        name: ['Concordant term', 'Termine concorde'],
        math: 'A keeps sign in both factors → A²',
        desc: ['The term whose sign is identical in both parentheses.', 'Il termine che ha lo stesso segno in entrambe le parentesi.']
      },
      {
        name: ['Discordant term', 'Termine discorde'],
        math: 'B changes sign → −B²',
        desc: ['The term whose sign flips between parentheses.', 'Il termine che cambia segno tra le due parentesi.']
      }
    ],
    example: [
      '(2x + 3)(2x − 3) = (2x)² − 3² = 4x² − 9  ·  (5 − 3a)(5 + 3a) = 25 − 9a²',
      '(2x + 3)(2x − 3) = (2x)² − 3² = 4x² − 9  ·  (5 − 3a)(5 + 3a) = 25 − 9a²'
    ],
    trap: [
      'Watch out when terms are swapped: (−3a + 5)(3a + 5) = 5² − (3a)² = 25 − 9a²! The minus goes on the term that changed sign.',
      'Attenzione all\'ordine dei termini: (−3a + 5)(3a + 5) = 25 − 9a²! Il meno va SEMPRE davanti al quadrato del termine che ha cambiato segno.'
    ],
    visualKey: 'math-diff-squares'
  },
  {
    id: 'special-product-square-binomial',
    subject: 'math',
    topicId: 'algebra',
    category: 'algebra',
    title: ['Square of a Binomial', 'Quadrato di un binomio'],
    formula: '(A + B)² = A² + 2AB + B²   ·   (A − B)² = A² − 2AB + B²',
    rules: [
      {
        name: ['First square', 'Primo quadrato'],
        math: 'A² (always positive)',
        desc: ['Square of the first term.', 'Quadrato del primo termine (sempre positivo).']
      },
      {
        name: ['Double product', 'Doppio prodotto'],
        math: '2 · A · B (with sign of A · B)',
        desc: ['Twice the product of first and second term.', 'Il doppio del prodotto tra primo e secondo termine.']
      },
      {
        name: ['Second square', 'Secondo quadrato'],
        math: 'B² (always positive)',
        desc: ['Square of the second term.', 'Quadrato del secondo termine (sempre positivo).']
      }
    ],
    example: [
      '(x + 4)² = x² + 2·x·4 + 4² = x² + 8x + 16  ·  (2a − 3b)² = 4a² − 12ab + 9b²',
      '(x + 4)² = x² + 2·x·4 + 4² = x² + 8x + 16  ·  (2a − 3b)² = 4a² − 12ab + 9b²'
    ],
    trap: [
      'THE #1 TRAP IN ALGEBRA: (A + B)² ≠ A² + B²! You MUST write the middle double product +2AB! Geometrically it represents two rectangles.',
      'IL TRANELLO N°1 DELL\'ALGEBRA: (A + B)² NON È A² + B²! Manca sempre il DOPPIO PRODOTTO +2AB! Geometricamente rappresenta due rettangoli.'
    ],
    visualKey: 'math-square-binomial'
  },
  {
    id: 'special-product-cube-trinomial',
    subject: 'math',
    topicId: 'algebra',
    category: 'algebra',
    title: ['Cube of Binomial & Square of Trinomial', 'Cubo di binomio e Quadrato di trinomio'],
    formula: '(A + B)³ = A³ + 3A²B + 3AB² + B³  ·  (A+B+C)² = A²+B²+C²+2AB+2AC+2BC',
    rules: [
      {
        name: ['Cube of binomial (4 terms)', 'Cubo di binomio (4 termini)'],
        math: '(A ± B)³ = A³ ± 3A²B + 3AB² ± B³',
        desc: ['Two cubes plus two triple products.', 'Due cubi e due tripli prodotti con segni alternati se c\'è il meno.']
      },
      {
        name: ['Square of trinomial (6 terms)', 'Quadrato di trinomio (6 termini)'],
        math: 'A² + B² + C² + 2AB + 2AC + 2BC',
        desc: ['Sum of 3 squares plus 3 double products.', 'Somma dei 3 quadrati più tutti i 3 doppi prodotti a coppie.']
      }
    ],
    example: [
      '(x + 2)³ = x³ + 6x² + 12x + 8  ·  (x − 1)³ = x³ − 3x² + 3x − 1',
      '(x + 2)³ = x³ + 6x² + 12x + 8  ·  (x − 1)³ = x³ − 3x² + 3x − 1'
    ],
    trap: [
      '(A + B)³ ≠ A³ + B³! Do not forget the two triple products 3A²B and 3AB².',
      '(A + B)³ NON È A³ + B³! Non dimenticare i due tripli prodotti intermedi 3A²B e 3AB².'
    ]
  },
  {
    id: 'factoring-decision-tree',
    subject: 'math',
    topicId: 'algebra',
    category: 'algebra',
    title: ['Factoring Decision Flowchart', 'Albero decisionale di scomposizione'],
    formula: '1. Total Common Factor → 2. Count terms (2, 3, 4) → 3. Apply pattern',
    rules: [
      {
        name: ['Step 1: Total common factor', 'Passo 1: Raccoglimento totale'],
        math: 'ax + ay = a(x + y)',
        desc: ['Always factor out the M.C.D. first!', 'Raccogli SEMPRE prima il M.C.D. di tutti i termini!']
      },
      {
        name: ['Step 2A: Binomial (2 terms)', 'Passo 2A: Binomio (2 termini)'],
        math: 'A² − B² = (A + B)(A − B)  ·  A³ ± B³',
        desc: ['Difference of squares or sum/diff of cubes.', 'Differenza di due quadrati o somma/differenza di cubi.']
      },
      {
        name: ['Step 2B: Trinomial (3 terms)', 'Passo 2B: Trinomio (3 termini)'],
        math: 'A² ± 2AB + B² = (A ± B)²  ·  x² + sx + p',
        desc: ['Square of binomial OR special trinomial (sum and product).', 'Quadrato di binomio o trinomio speciale (somma e prodotto).']
      },
      {
        name: ['Step 2C: Quadrinomial (4 terms)', 'Passo 2C: Quadrinomio (4 termini)'],
        math: 'Partial grouping: a(x+y)+b(x+y)=(a+b)(x+y)  ·  Cube',
        desc: ['Partial grouping into pairs or cube of a binomial.', 'Raccoglimento a fattor comune parziale a coppie o cubo di binomio.']
      }
    ],
    example: [
      '2x² − 8 = 2(x² − 4) = 2(x + 2)(x − 2)  ·  x² + 5x + 6 = (x + 2)(x + 3)',
      '2x² − 8 = 2(x² − 4) = 2(x + 2)(x − 2)  ·  x² + 5x + 6 = (x + 2)(x + 3)'
    ],
    trap: [
      'A sum of squares A² + B² (like x² + 9) CANNOT be factored in real numbers ℝ (it is irreducible)!',
      'La somma di due quadrati A² + B² (come x² + 9) è IRRIDUCIBILE nei numeri reali ℝ: non si può scomporre!'
    ]
  },

  // --- TOPIC: Equations & Inequalities ---
  {
    id: 'equations-principles',
    subject: 'math',
    topicId: 'equations',
    category: 'equations',
    title: ['Equivalence Principles for Equations', 'Principi di equivalenza per le equazioni'],
    formula: '1°: A = B ⇔ A ± C = B ± C   ·   2°: A = B ⇔ A · C = B · C  (C ≠ 0)',
    rules: [
      {
        name: ['First principle: Transport rule', '1° principio: Regola del trasporto'],
        math: 'A + C = B  ⇒  A = B − C',
        desc: ['You can move any term to the other side by changing its sign.', 'Puoi spostare un termine all\'altro membro cambiandogli il segno.']
      },
      {
        name: ['Cancellation rule', 'Regola di cancellazione'],
        math: 'A + C = B + C  ⇒  A = B',
        desc: ['Identical terms on opposite sides cancel out.', 'Due termini identici in membri opposti si possono elidere.']
      },
      {
        name: ['Second principle: Division/Clear denominators', '2° principio: Eliminazione denominatori'],
        math: 'Multiply all terms by m.c.m. of denominators (k ≠ 0)',
        desc: ['Clears all fractions simultaneously across both sides.', 'Elimina tutte le frazioni moltiplicando ogni termine per il m.c.m.']
      }
    ],
    example: [
      '3x + 5 = 17 → 3x = 17 − 5 → 3x = 12 → x = 4',
      '3x + 5 = 17 → 3x = 17 − 5 → 3x = 12 → x = 4'
    ],
    trap: [
      'When moving a term across \'=\', NEVER forget to change its sign! And when clearing denominators, multiply the constant numbers on the right side too!',
      'Quando sposti un termine dall\'altra parte dell\'uguale, CAMBIA SEMPRE IL SEGNO! E quando moltiplichi per il m.c.m., moltiplica anche i numeri senza frazione!'
    ],
    visualKey: 'math-equation-balance'
  },
  {
    id: 'equations-taxonomy-ax-b',
    subject: 'math',
    topicId: 'equations',
    category: 'equations',
    title: ['Classification of ax = b', 'Classificazione della forma normale ax = b'],
    formula: 'a ≠ 0 → Determined (x = b/a) · 0x = 0 → Indeterminate (ℝ) · 0x = b → Impossible (∅)',
    rules: [
      {
        name: ['Determined (Determinata)', 'Determinata'],
        math: 'a ≠ 0  ⇒  x = b / a',
        desc: ['Exactly one unique real solution: S = {b/a}.', 'Una sola e unica soluzione reale: S = {b/a}.']
      },
      {
        name: ['Indeterminate / Identity (Indeterminata)', 'Indeterminata (identità)'],
        math: 'a = 0, b = 0  ⇒  0x = 0',
        desc: ['Infinitely many solutions: every real x satisfies it (S = ℝ).', 'Infinite soluzioni: qualsiasi numero x la verifica (S = ℝ).']
      },
      {
        name: ['Impossible (Impossibile)', 'Impossibile'],
        math: 'a = 0, b ≠ 0  ⇒  0x = b',
        desc: ['No solution: zero cannot equal a non-zero number (S = ∅).', 'Nessuna soluzione: zero non può mai uguagliare un numero non nullo (S = ∅).']
      }
    ],
    example: [
      '2x = 6 → x = 3 (determined)  ·  0x = 0 (indeterminate)  ·  0x = 5 (impossible)',
      '2x = 6 → x = 3 (determinata)  ·  0x = 0 (indeterminata)  ·  0x = 5 (impossibile)'
    ],
    trap: [
      '0x = 0 is NOT impossible, it has infinite solutions! And 0x = 5 has NO solution (you cannot divide by 0!).',
      '0x = 0 NON è impossibile, ha infinite soluzioni! Invece 0x = 5 non ha NESSUNA soluzione (non si può dividere per zero!).'
    ]
  },
  {
    id: 'inequalities-golden-rule',
    subject: 'math',
    topicId: 'equations',
    category: 'equations',
    title: ['THE GOLDEN RULE OF INEQUALITIES', 'LA REGOLA D\'ORO DELLE DISEQUAZIONI'],
    formula: 'Multiply or divide by a NEGATIVE number → FLIP THE SIGN (< becomes >, ≤ becomes ≥)',
    rules: [
      {
        name: ['Multiply/divide by positive', 'Moltiplicare per un positivo'],
        math: 'k > 0: a < b  ⇒  k·a < k·b',
        desc: ['The inequality sign stays in the same direction.', 'Il verso della disequazione rimane inalterato.']
      },
      {
        name: ['Multiply/divide by negative (CRITICAL)', 'Moltiplicare per un negativo (REGOLA D\'ORO)'],
        math: 'k < 0: a < b  ⇒  k·a > k·b',
        desc: ['You MUST INVERT the inequality symbol!', 'DEVI INVERTIRE il verso del simbolo (< diventa >)!']
      },
      {
        name: ['Interval notation', 'Notazione intervallare'],
        math: 'x ≥ a → [a, +∞)  ·  x < b → (−∞, b)',
        desc: ['Filled dot / bracket [ ] for included; empty dot / parenthesis ( ) for excluded.', 'Pallino pieno / quadra per compreso; pallino vuoto / tonda per escluso.']
      }
    ],
    example: [
      '−2x < 6  ⇒  divide by −2 and FLIP  ⇒  x > 6 / (−2)  ⇒  x > −3',
      '−2x < 6  ⇒  dividi per −2 e INVERTI  ⇒  x > 6 / (−2)  ⇒  x > −3'
    ],
    trap: [
      'Forgetting to invert the inequality sign when dividing by a negative number inverts the entire solution on the number line!',
      'Dimenticare di invertire il verso quando si divide per un numero negativo capovolge completamente l\'insieme delle soluzioni!'
    ],
    visualKey: 'math-inequality-line'
  },

  // --- TOPIC: Sets & Logic ---
  {
    id: 'sets-cardinality-subsets',
    subject: 'math',
    topicId: 'sets',
    category: 'algebra',
    title: ['Set Operations & Power Set', 'Operazioni tra Insiemi e Insieme delle Parti'],
    formula: '|P(A)| = 2ⁿ  ·  A ∪ B  ·  A ∩ B  ·  A \\ B',
    rules: [
      {
        name: ['Union (Unione)', 'Unione'],
        math: 'A ∪ B = {x | x ∈ A ∨ x ∈ B}',
        desc: ['All elements belonging to A, B, or both.', 'Tutti gli elementi che appartengono ad A, a B o a entrambi.']
      },
      {
        name: ['Intersection (Intersezione)', 'Intersezione'],
        math: 'A ∩ B = {x | x ∈ A ∧ x ∈ B}',
        desc: ['Elements common to BOTH sets.', 'Solo gli elementi in comune a entrambi gli insiemi.']
      },
      {
        name: ['Power Set cardinality', 'Numero di sottoinsiemi'],
        math: '|P(A)| = 2ⁿ (where n = |A|)',
        desc: ['A set with n elements has 2ⁿ subsets including empty set ∅ and itself.', 'Un insieme di n elementi ha 2ⁿ sottoinsiemi compresi l\'insieme vuoto ∅ e l\'insieme stesso.']
      }
    ],
    example: [
      'A = {1, 2, 3} (n = 3) → |P(A)| = 2³ = 8 subsets: ∅, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}.',
      'A = {1, 2, 3} (n = 3) → |P(A)| = 2³ = 8 sottoinsiemi: ∅, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}.'
    ],
    trap: [
      'The empty set ∅ is a subset of EVERY set (∅ ⊆ A), and has 2⁰ = 1 subset (itself)!',
      'L\'insieme vuoto ∅ è sottoinsieme di QUALUNQUE insieme (∅ ⊆ A), e ha 2⁰ = 1 sottoinsieme (sé stesso)!'
    ]
  },
  {
    id: 'logic-truth-tables',
    subject: 'math',
    topicId: 'sets',
    category: 'algebra',
    title: ['Formal Logic Truth Tables', 'Tavole di Verità e Connettivi Logici'],
    formula: 'P ∧ Q (AND)  ·  P ∨ Q (OR)  ·  ¬P (NOT)  ·  P ⇒ Q (Implication)',
    rules: [
      {
        name: ['Conjunction (AND)', 'Congiunzione (AND / ∧)'],
        math: 'P ∧ Q is TRUE only if BOTH are True.',
        desc: ['Vera solo se entrambe le proposizioni sono vere.', 'Vera solo quando entrambe le proposizioni sono contemporaneamente vere.']
      },
      {
        name: ['Disjunction (OR)', 'Disgiunzione inclusiva (OR / ∨)'],
        math: 'P ∨ Q is TRUE if AT LEAST ONE is True.',
        desc: ['Vera quando almeno una delle due proposizioni è vera.', 'Vera se almeno una delle due proposizioni è vera.']
      },
      {
        name: ['Material Implication', 'Implicazione materiale (⇒)'],
        math: 'P ⇒ Q is FALSE only if P is True and Q is False.',
        desc: ['False only when true premise leads to false conclusion.', 'Falsa unicamente quando la premessa è vera e la conseguenza è falsa.']
      }
    ],
    example: [
      'P = True, Q = False → P ∧ Q = False, P ∨ Q = True, P ⇒ Q = False, ¬P = False.',
      'P = Vero, Q = Falso → P ∧ Q = Falso, P ∨ Q = Vero, P ⇒ Q = Falso, ¬P = Falso.'
    ],
    trap: [
      'In logic, if P is FALSE, the implication P ⇒ Q is ALWAYS TRUE, regardless of Q! ("Ex falso sequitur quodlibet").',
      'Nell\'implicazione logica, se la premessa P è FALSA, l\'implicazione P ⇒ Q è SEMPRE VERA, indipendentemente da Q!'
    ]
  },

  // =========================================================================
  // PHYSICS (Grade 9 Physics Foundations)
  // =========================================================================

  // --- TOPIC: Density & Measurement ---
  {
    id: 'physics-density-weight',
    subject: 'phys',
    topicId: 'density-measurement',
    category: 'physics',
    title: ['Density & Weight Force', 'Densità e Forza Peso'],
    formula: 'ρ = m / V  ·  F_p = m · g  (g ≈ 9.81 N/kg)',
    rules: [
      {
        name: ['Density', 'Densità'],
        math: 'ρ = m / V  [kg/m³ or g/cm³]',
        desc: ['Mass per unit volume. 1 g/cm³ = 1000 kg/m³.', 'Rapporto tra massa e volume. 1 g/cm³ = 1000 kg/m³.']
      },
      {
        name: ['Weight force', 'Forza peso'],
        math: 'F_p = m · g  [N]',
        desc: ['Gravitational pull on mass m near Earth surface.', 'Forza di attrazione gravitazionale agente sulla massa m.']
      }
    ],
    example: [
      'm = 500 g, V = 250 cm³ → ρ = 500/250 = 2 g/cm³  ·  m = 10 kg → F_p = 10 · 9.8 = 98 N',
      'm = 500 g, V = 250 cm³ → ρ = 500/250 = 2 g/cm³  ·  m = 10 kg → F_p = 10 · 9.8 = 98 N'
    ],
    trap: [
      'Mass (kg) is scalar and constant everywhere; Weight (N) is a force vector that depends on gravity g!',
      'La massa (kg) è costante ovunque nell\'universo; il peso (N) è una forza e dipende dall\'accelerazione di gravità g!'
    ]
  },
  {
    id: 'physics-measurement-uncertainty',
    subject: 'phys',
    topicId: 'density-measurement',
    category: 'physics',
    title: ['Measurement Uncertainty & Errors', 'Incertezza di Misura e Propagazione Errori'],
    formula: 'x̄ = Σxᵢ / N  ·  eₐ = (x_max − x_min) / 2  ·  e_r = eₐ / x̄  ·  e_p = e_r · 100%',
    rules: [
      {
        name: ['Average value', 'Valore medio attendibile'],
        math: 'x̄ = (x₁ + x₂ + ... + x_N) / N',
        desc: ['Arithmetic mean of repeated measurements.', 'Media aritmetica delle misure ripetute.']
      },
      {
        name: ['Absolute uncertainty', 'Incertezza / Errore assoluto'],
        math: 'eₐ = (x_max − x_min) / 2  (or instrument sensitivity)',
        desc: ['Half the spread of measurement values.', 'Semidispersione massima o sensibilità dello strumento.']
      },
      {
        name: ['Relative uncertainty', 'Errore relativo e percentuale'],
        math: 'e_r = eₐ / x̄  ·  e_p = e_r · 100%',
        desc: ['Dimensionless index of measurement precision.', 'Indice adimensionale che indica la qualità della misura.']
      }
    ],
    example: [
      'Measurements: 10.2, 10.4, 10.6 s → x̄ = 10.4 s, eₐ = (10.6 - 10.2)/2 = 0.2 s, e_r = 0.2/10.4 ≈ 0.019 (1.9%).',
      'Misure: 10.2, 10.4, 10.6 s → x̄ = 10.4 s, eₐ = (10.6 - 10.2)/2 = 0.2 s, e_r = 0.2/10.4 ≈ 0.019 (1.9%).'
    ],
    trap: [
      'In products and quotients (e.g. area A = b · h), you add the RELATIVE uncertainties, NOT absolute uncertainties!',
      'Nei prodotti e quozienti (es. area A = b · h) si sommano gli errori RELATIVI, MAI gli errori assoluti!'
    ]
  },

  // --- TOPIC: Forces & Elasticity ---
  {
    id: 'physics-hooke-elasticity',
    subject: 'phys',
    topicId: 'forces-elasticity',
    category: 'physics',
    title: ['Hooke\'s Law of Elasticity', 'Legge Elastica di Hooke'],
    formula: 'F_e = k · Δx   ⇔   k = F_e / Δx   [N/m]',
    rules: [
      {
        name: ['Elastic restoring force', 'Forza elastica di richiamo'],
        math: 'F_e = k · Δx',
        desc: ['Directly proportional to the elongation or compression Δx.', 'Direttamente proporzionale all\'allungamento o compressione Δx.']
      },
      {
        name: ['Spring constant k', 'Costante elastica k'],
        math: 'k = F / Δx  [N/m]',
        desc: ['Measures the stiffness of the spring (higher k = stiffer spring).', 'Misura la rigidità della molla: maggiore è k, più dura è la molla.']
      }
    ],
    example: [
      'k = 250 N/m, Δx = 0.04 m (4 cm) → F = 250 · 0.04 = 10 N.',
      'k = 250 N/m, Δx = 0.04 m (4 cm) → F = 250 · 0.04 = 10 N.'
    ],
    trap: [
      'Elongation Δx MUST be converted to meters (m)! Using centimeters directly gives a force 100 times too large!',
      'L\'allungamento Δx va SEMPRE espresso in metri (m)! Se usi i centimetri ottieni una forza 100 volte più grande del reale!'
    ]
  },
  {
    id: 'physics-vectors-forces',
    subject: 'phys',
    topicId: 'forces-elasticity',
    category: 'physics',
    title: ['Vectors & Force Composition', 'Vettori e Composizione delle Forze'],
    formula: 'R⃗ = F⃗₁ + F⃗₂  ·  R = √(F₁² + F₂²) (perpendicular)  ·  F_x = F·cosθ, F_y = F·sinθ',
    rules: [
      {
        name: ['Parallelogram rule', 'Regola del parallelogramma'],
        math: 'Diagonal of the parallelogram formed by F₁ and F₂.',
        desc: ['Vector addition depends on both magnitude and direction.', 'La somma vettoriale tiene conto sia del modulo che della direzione.']
      },
      {
        name: ['Perpendicular forces (Pythagoras)', 'Forze perpendicolari'],
        math: 'R = √(F₁² + F₂²)',
        desc: ['Applies Pythagorean theorem when angle between forces is 90°.', 'Teorema di Pitagora quando le due forze formano un angolo retto di 90°.']
      }
    ],
    example: [
      'F₁ = 3 N (East), F₂ = 4 N (North) → R = √(3² + 4²) = √(9 + 16) = √25 = 5 N.',
      'F₁ = 3 N (Est), F₂ = 4 N (Nord) → R = √(3² + 4²) = √(9 + 16) = √25 = 5 N.'
    ],
    trap: [
      'Forces cannot be added as simple numbers: 3 N + 4 N is only 7 N if they are parallel in the same direction!',
      'Le forze NON si sommano come numeri scalari: 3 N + 4 N fa 7 N solo se hanno la stessa direzione e verso!'
    ]
  },

  // --- TOPIC: Equilibrium & Levers ---
  {
    id: 'physics-equilibrium-torque',
    subject: 'phys',
    topicId: 'equilibrium-levers',
    category: 'physics',
    title: ['Torque & Moment of a Force', 'Momento di una Forza e Rotazione'],
    formula: 'M = F · b  [N·m]  ·  Equilibrium: ΣF = 0 and ΣM = 0',
    rules: [
      {
        name: ['Moment of a force', 'Momento della forza'],
        math: 'M = F · b  (b = lever arm perpendicular to line of action)',
        desc: ['Tendency of a force to rotate a body around a pivot.', 'Capacità di una forza di provocare la rotazione attorno a un perno.']
      },
      {
        name: ['Lever arm (Braccio)', 'Braccio della forza'],
        math: 'Perpendicular distance from the pivot to the line of action.',
        desc: ['Distance measured at 90° from the rotation axis.', 'Distanza perpendicolare tra il punto di rotazione e la retta d\'azione.']
      }
    ],
    example: [
      'Force F = 40 N applied at distance b = 0.5 m from pivot → M = 40 · 0.5 = 20 N·m.',
      'Forza F = 40 N applicata a distanza b = 0.5 m dal perno → M = 40 · 0.5 = 20 N·m.'
    ],
    trap: [
      'The lever arm is NOT just the point of application distance, it MUST be the perpendicular distance to the force vector line!',
      'Il braccio NON è una distanza qualunque: è la distanza PERPENDICOLARE tra il fulcro e la retta d\'azione della forza!'
    ]
  },
  {
    id: 'physics-levers-law',
    subject: 'phys',
    topicId: 'equilibrium-levers',
    category: 'physics',
    title: ['Fundamental Law of Levers', 'Legge Fondamentale delle Leve'],
    formula: 'F_m · b_m = F_r · b_r   (Motive Force · Arm = Resisting Force · Arm)',
    rules: [
      {
        name: ['Equilibrium condition', 'Condizione di equilibrio'],
        math: 'F_m · b_m = F_r · b_r',
        desc: ['Clockwise torque equals counter-clockwise torque.', 'Il momento motore è uguale al momento resistente.']
      },
      {
        name: ['1st class lever (Interfissa)', 'Leva di 1° genere'],
        math: 'Pivot in the center (e.g. scissors, crowbar)',
        desc: ['Can be favorable, unfavorable, or neutral depending on arms.', 'Può essere vantaggiosa, svantaggiosa o indifferente.']
      },
      {
        name: ['2nd class lever (Interresistente)', 'Leva di 2° genere'],
        math: 'Resistance in the middle (e.g. wheelbarrow, nutcracker)',
        desc: ['ALWAYS favorable (b_m > b_r, so F_m < F_r).', 'SEMPRE vantaggiosa (il braccio motore è sempre maggiore di quello resistente).']
      },
      {
        name: ['3rd class lever (Interpotente)', 'Leva di 3° genere'],
        math: 'Motive force in the middle (e.g. tongs, forearm)',
        desc: ['ALWAYS unfavorable in force (requires F_m > F_r), but gains speed.', 'SEMPRE svantaggiosa per la forza (richiede F_m > F_r), ma vantaggiosa per ampiezza.']
      }
    ],
    example: [
      'Load F_r = 600 N at b_r = 0.2 m. If motive arm b_m = 1.2 m → F_m = (600 · 0.2) / 1.2 = 100 N (6x mechanical advantage!).',
      'Carico F_r = 600 N con b_r = 0.2 m. Se b_m = 1.2 m → F_m = (600 · 0.2) / 1.2 = 100 N (guadagno 6x!).'
    ],
    trap: [
      'A 3rd class lever (like human forearm biceps or sugar tongs) ALWAYS requires MORE force than the weight lifted!',
      'Una leva di terzo genere (come il bicipite del braccio umano) richiede SEMPRE una forza maggiore del peso da sollevare!'
    ]
  },

  // --- TOPIC: Fluids & Pressure ---
  {
    id: 'physics-pressure-stevino',
    subject: 'phys',
    topicId: 'fluids-pressure',
    category: 'physics',
    title: ['Pressure & Stevin\'s Hydrostatic Law', 'Pressione e Legge di Stevino'],
    formula: 'p = F / A  [Pa]  ·  p = p₀ + ρ · g · h',
    rules: [
      {
        name: ['Pressure definition', 'Definizione di pressione'],
        math: 'p = F_perp / A  [1 Pa = 1 N/m²]',
        desc: ['Perpendicular force spread over contact area A.', 'Rapporto tra la forza perpendicolare e la superficie A.']
      },
      {
        name: ['Stevino\'s law', 'Legge di Stevino'],
        math: 'p = ρ · g · h',
        desc: ['Hydrostatic pressure depends ONLY on fluid density ρ, gravity g, and depth h.', 'La pressione idrostatica dipende SOLO da densità del fluido, gravità e profondità.']
      }
    ],
    example: [
      'Water (ρ = 1000 kg/m³) at depth h = 10 m → p = 1000 · 9.8 · 10 = 98 000 Pa ≈ 1 atm (doubles total pressure!).',
      'Acqua (ρ = 1000 kg/m³) a h = 10 m → p = 1000 · 9.8 · 10 = 98 000 Pa ≈ 1 atm (raddoppia la pressione totale!).'
    ],
    trap: [
      'Hydrostatic pressure does NOT depend on the shape or volume of the container, only on the vertical depth h (hydrostatic paradox)!',
      'La pressione sul fondo NON dipende dalla forma o larghezza del recipiente, ma UNICAMENTE dalla profondità verticale h!'
    ]
  },
  {
    id: 'physics-archimedes-buoyancy',
    subject: 'phys',
    topicId: 'fluids-pressure',
    category: 'physics',
    title: ['Archimedes\' Principle of Buoyancy', 'Principio di Archimede e Galleggiamento'],
    formula: 'F_A = ρ_fluid · g · V_submerged  ·  Floating: ρ_body < ρ_fluid',
    rules: [
      {
        name: ['Buoyant force', 'Spinta di Archimede'],
        math: 'F_A = ρ_fluid · g · V_imm',
        desc: ['Upward force equal to weight of displaced fluid volume.', 'Spinta verso l\'alto pari al peso del volume di fluido spostato.']
      },
      {
        name: ['Floating condition', 'Condizione di galleggiamento'],
        math: 'ρ_body < ρ_fluid → floats; ρ_body > ρ_fluid → sinks',
        desc: ['Average density determines whether object floats or sinks.', 'È la densità media dell\'oggetto a determinare se galleggia o affonda.']
      }
    ],
    example: [
      'A block of V = 0.002 m³ fully submerged in water (1000 kg/m³) → F_A = 1000 · 9.8 · 0.002 = 19.6 N upward.',
      'Un blocco di V = 0.002 m³ immerso in acqua (1000 kg/m³) → F_A = 1000 · 9.8 · 0.002 = 19.6 N verso l\'alto.'
    ],
    trap: [
      'In F_A = ρ · g · V, the density ρ is the density of the FLUID, NOT the density of the submerged object!',
      'Nella formula F_A = ρ · g · V, la densità ρ è quella del LIQUIDO, NON quella dell\'oggetto immerso!'
    ]
  },

  // --- TOPIC: Friction & Work ---
  {
    id: 'physics-friction-work',
    subject: 'phys',
    topicId: 'friction-work',
    category: 'physics',
    title: ['Friction & Mechanical Work', 'Attrito e Lavoro Meccanico'],
    formula: 'F_s ≤ μ_s · F_⊥  ·  F_d = μ_d · F_⊥  (μ_d < μ_s)  ·  L = F · s  [J]',
    rules: [
      {
        name: ['Static friction', 'Attrito radente statico'],
        math: 'F_s,max = μ_s · F_⊥',
        desc: ['Max force to overcome to set an object in motion.', 'Forza massima da vincere per mettere in movimento un oggetto fermo.']
      },
      {
        name: ['Dynamic friction', 'Attrito radente dinamico'],
        math: 'F_d = μ_d · F_⊥  (with μ_d < μ_s)',
        desc: ['Opposes motion while sliding. Always lower than static friction.', 'Si oppone al moto durante lo scivolamento. Sempre minore dell\'attrito statico.']
      },
      {
        name: ['Mechanical work', 'Lavoro meccanico'],
        math: 'L = F · s  [Joule = N·m] (when F and s are parallel)',
        desc: ['Energy transferred by force moving along distance s.', 'Energia trasferita da una forza che sposta un corpo per una distanza s.']
      }
    ],
    example: [
      'Object of weight 100 N on table (μ_s = 0.4, μ_d = 0.3) → F_s,max = 40 N to start, F_d = 30 N to keep moving. Pushing 5 m with 30 N gives L = 150 J.',
      'Oggetto di peso 100 N su un piano (μ_s = 0.4, μ_d = 0.3) → F_s,max = 40 N per partire, F_d = 30 N per proseguire. Spostare di 5 m richiede L = 150 J.'
    ],
    trap: [
      'Friction does NOT depend on the contact area (A)! Wide tires or thin tires on dry road have the same theoretical friction coefficient.',
      'L\'attrito NON dipende dall\'estensione della superficie di contatto: raddoppiare l\'area di contatto non raddoppia l\'attrito!'
    ]
  },

  // =========================================================================
  // COMPUTER SCIENCE (Grade 9 Computer Science)
  // =========================================================================

  // --- TOPIC: Binary & Data Units ---
  {
    id: 'cs-binary-positional',
    subject: 'cs',
    topicId: 'binary-encoding',
    category: 'powers',
    title: ['Binary Positional Encoding & Bit Capacity', 'Codifica Binaria Posizionale e Capacità di Bit'],
    formula: 'N = Σ (bᵢ · 2ⁱ)  ·  With n bits: 2ⁿ distinct states (0 to 2ⁿ − 1)',
    rules: [
      {
        name: ['Positional powers of 2', 'Pesi posizionali delle potenze di 2'],
        math: '... 2⁴(16), 2³(8), 2²(4), 2¹(2), 2⁰(1)',
        desc: ['Each bit from right to left represents ascending powers of 2.', 'Ogni bit da destra a sinistra moltiplica la corrispondente potenza di 2.']
      },
      {
        name: ['Capacity rule (Shannon)', 'Regola della capacità'],
        math: 'N = 2ⁿ combinations',
        desc: ['n bits can represent exactly 2ⁿ distinct numerical values.', 'n bit permettono di rappresentare esattamente 2ⁿ valori distinti.']
      }
    ],
    example: [
      'Binary 10110₂ = 1·16 + 0·8 + 1·4 + 1·2 + 0·1 = 22₁₀. With 8 bits (1 Byte): 2⁸ = 256 values (0 to 255).',
      'Binario 10110₂ = 1·16 + 0·8 + 1·4 + 1·2 + 0·1 = 22₁₀. Con 8 bit (1 Byte): 2⁸ = 256 valori (da 0 a 255).'
    ],
    trap: [
      'The maximum value with n bits is 2ⁿ − 1, NOT 2ⁿ (because zero is included): with 8 bits the maximum is 255, not 256!',
      'Il valore massimo rappresentabile con n bit è 2ⁿ − 1, NON 2ⁿ (perché si conta lo zero!): con 8 bit il massimo è 255, non 256!'
    ]
  },
  {
    id: 'cs-data-units-prefix',
    subject: 'cs',
    topicId: 'binary-encoding',
    category: 'powers',
    title: ['Data Units & Memory Hierarchies', 'Unità di Misura dei Dati e Prefissi'],
    formula: '1 Byte = 8 bits  ·  1 KiB = 1024 B (2¹⁰)  ·  1 MiB = 1024 KiB (2²⁰)  ·  1 GiB = 2³⁰ B',
    rules: [
      {
        name: ['Bit vs Byte', 'Bit contro Byte'],
        math: '1 Byte (B) = 8 bits (b)',
        desc: ['Byte is capital B, bit is lowercase b.', 'Byte si indica con B maiuscola, bit con b minuscola.']
      },
      {
        name: ['Binary multiples (IEC)', 'Multipli binari (base 2)'],
        math: '1 KiB = 1024 Bytes = 2¹⁰ B',
        desc: ['In computer RAM, multipliers are powers of 2 (1024, not 1000).', 'Nella memoria RAM i moltiplicatori sono potenze di 2 (1024, non 1000).']
      }
    ],
    example: [
      '4 GiB RAM = 4 · 1024 MiB = 4 096 MiB = 4 294 967 296 Bytes.',
      '4 GiB RAM = 4 · 1024 MiB = 4 096 MiB = 4 294 967 296 Byte.'
    ],
    trap: [
      'Storage drives use decimal 1000 prefixes (1 TB = 10¹² B) whereas OS reports binary 1024 (GiB), explaining why a 1 TB drive shows ~931 GiB!',
      'I produttori di dischi usano la base 10 (1000), mentre il sistema operativo usa base 2 (1024): per questo un disco da 1 TB viene letto come circa 931 GiB!'
    ]
  },

  // --- TOPIC: Boolean Logic ---
  {
    id: 'cs-boolean-demorgan',
    subject: 'cs',
    topicId: 'boolean-logic',
    category: 'algebra',
    title: ['Boolean Algebra & De Morgan\'s Laws', 'Algebra Booleana e Leggi di De Morgan'],
    formula: 'NOT(A AND B) = NOT A OR NOT B   ·   NOT(A OR B) = NOT A AND NOT B',
    rules: [
      {
        name: ['First De Morgan Law', 'Prima legge di De Morgan'],
        math: '¬(A ∧ B) = ¬A ∨ ¬B',
        desc: ['Negation of a conjunction is the disjunction of negations.', 'La negazione di un AND equivale all\'OR delle singole negazioni.']
      },
      {
        name: ['Second De Morgan Law', 'Seconda legge di De Morgan'],
        math: '¬(A ∨ B) = ¬A ∧ ¬B',
        desc: ['Negation of a disjunction is the conjunction of negations.', 'La negazione di un OR equivale all\'AND delle singole negazioni.']
      },
      {
        name: ['Double negation', 'Doppia negazione'],
        math: '¬(¬A) = A',
        desc: ['Two NOTs cancel out to the original boolean state.', 'Due negazioni consecutive restituiscono il valore di partenza.']
      }
    ],
    example: [
      'In code: if (!(age >= 18 && hasTicket)) is identical to if (age < 18 || !hasTicket).',
      'Nel codice: if (!(eta >= 18 && haBiglietto)) equivale a if (eta < 18 || !haBiglietto).'
    ],
    trap: [
      'When applying NOT to a compound expression, you MUST invert the operator (AND becomes OR, OR becomes AND)!',
      'Quando applichi il NOT a una combinazione, DEVI invertire l\'operatore (AND diventa OR, OR diventa AND)!'
    ]
  },

  // --- TOPIC: Circuits & Hardware ---
  {
    id: 'cs-circuits-ohm-power',
    subject: 'cs',
    topicId: 'circuits-hardware',
    category: 'physics',
    title: ['Ohm\'s Law & Electric Power in Circuits', 'Legge di Ohm e Potenza Elettrica nei Circuiti'],
    formula: 'V = I · R   ·   P = V · I = I² · R = V² / R   [Watt = Volt · Ampere]',
    rules: [
      {
        name: ['Ohm\'s Law', 'Prima legge di Ohm'],
        math: 'V = I · R   (I = V / R,  R = V / I)',
        desc: ['Voltage (V) = Current (A) × Resistance (Ω).', 'Tensione (Volt) = Corrente (Ampere) × Resistenza (Ohm).']
      },
      {
        name: ['Joule Power law', 'Potenza dissipata (effetto Joule)'],
        math: 'P = V · I = I² · R  [W]',
        desc: ['Electrical energy converted into work/heat per second.', 'Energia elettrica trasformata in calore o lavoro al secondo.']
      },
      {
        name: ['Resistors in series', 'Resistenze in serie'],
        math: 'R_eq = R₁ + R₂ + ... + R_n',
        desc: ['Current is identical; resistances add up directly.', 'Stessa corrente attraversa tutte le resistenze; le resistenze si sommano.']
      }
    ],
    example: [
      'Circuit with V = 12 V and R = 4 Ω → Current I = 12 / 4 = 3 A. Power P = 12 · 3 = 36 W.',
      'Circuito con V = 12 V e R = 4 Ω → Corrente I = 12 / 4 = 3 A. Potenza P = 12 · 3 = 36 W.'
    ],
    trap: [
      'Power increases with the SQUARE of current (I²): doubling the current quadruples the heat generated in a CPU or wire!',
      'La potenza dissipata aumenta col QUADRATO della corrente (I²): raddoppiare la corrente quadruplica il calore generato in un cavo o chip!'
    ]
  },

  // --- TOPIC: Networking ---
  {
    id: 'cs-network-transfer-time',
    subject: 'cs',
    topicId: 'networking',
    category: 'fractions',
    title: ['Data Transfer Rate & Download Time', 'Velocità di Trasferimento Dati e Download'],
    formula: 'Time (s) = Data Size (bits) / Bandwidth (bps)   ·   Data = Bandwidth · Time',
    rules: [
      {
        name: ['Transfer time equation', 'Formula del tempo di trasmissione'],
        math: 'T = (Size_Bytes · 8) / Bandwidth_bps',
        desc: ['File size in bytes MUST be converted to bits before dividing.', 'I Byte del file vanno moltiplicati per 8 (bit) prima di dividere per i bps.']
      },
      {
        name: ['Throughput vs Latency', 'Throughput contro Latenza'],
        math: 'Latency = round-trip ping time (ms)',
        desc: ['Throughput is width of pipe (bps); latency is delay of arrival (ms).', 'La larghezza di banda è la capienza del canale; la latenza è il tempo di reazione.']
      }
    ],
    example: [
      'Downloading a 25 MB file over a 100 Mbps broadband connection: (25 · 8) / 100 = 200 / 100 = 2.0 seconds.',
      'Scaricare un file da 25 MB su una connessione da 100 Mbps: (25 · 8) / 100 = 200 / 100 = 2,0 secondi.'
    ],
    trap: [
      'THE 8X TRAP: Internet speed is sold in Megabits per second (Mbps), but file sizes are in MegaBytes (MB)! Divide connection speed by 8 to get MB/s.',
      'IL TRANELLO DELL\'8X: Le connessioni internet sono vendute in Megabit/s (Mbps), ma i file sono in MegaByte (MB)! Dividi i Mbps per 8 per sapere i MB/s effettivi.'
    ]
  },

  // =========================================================================
  // GRADE 5 SCIENCE (Quinta Primaria Scienze)
  // =========================================================================

  // --- TOPIC: Matter & Energy ---
  {
    id: 'science-matter-states',
    subject: 'science',
    topicId: 'matter-energy',
    category: 'physics',
    title: ['States of Matter & Changes of State', 'Stati della Materia e Passaggi di Stato'],
    formula: 'Solid (0°C) ⇄ Liquid (100°C) ⇄ Gas   ·   Heat transfers from hot to cold',
    rules: [
      {
        name: ['Three aggregate states', 'I tre stati di aggregazione'],
        math: 'Solid (fixed shape/volume) · Liquid (fixed volume) · Gas (expands)',
        desc: ['Molecular bonds become looser as thermal energy increases.', 'I legami tra molecole si allentano all\'aumentare dell\'energia termica.']
      },
      {
        name: ['Phase changes for pure water', 'Passaggi di stato dell\'acqua'],
        math: 'Fusion = 0°C  ·  Boiling / Vaporization = 100°C',
        desc: ['Temperature remains constant during phase transition.', 'La temperatura rimane costante durante il passaggio di stato.']
      }
    ],
    example: [
      'Ice absorbs heat at 0°C to melt into water; water absorbs heat at 100°C to vaporize into steam.',
      'Il ghiaccio assorbe calore a 0°C per fondere in acqua; l\'acqua assorbe calore a 100°C per bollire in vapore.'
    ],
    trap: [
      'Heat (energy in transit, measured in Joules/calories) is NOT temperature (measure of thermal agitation in degrees Celsius)!',
      'Il calore (energia termica in transito) NON è la temperatura (misura dello stato di agitazione delle molecole in °C)!'
    ]
  },

  // --- TOPIC: Speed & Gravity ---
  {
    id: 'science-speed-formula',
    subject: 'science',
    topicId: 'forces-motion',
    category: 'physics',
    title: ['Uniform Speed & Travel Time', 'Velocità Costante e Tempo di Percorrenza'],
    formula: 'v = s / t   ·   s = v · t   ·   t = s / v   (1 m/s = 3.6 km/h)',
    rules: [
      {
        name: ['Speed definition', 'Formula della velocità'],
        math: 'Speed = Distance / Time',
        desc: ['Distance traveled in one unit of time.', 'Spazio percorso nell\'unità di tempo.']
      },
      {
        name: ['km/h to m/s conversion', 'Conversione km/h in m/s'],
        math: 'km/h ÷ 3.6 = m/s   ·   m/s × 3.6 = km/h',
        desc: ['Divide by 3.6 to convert from km/h to m/s.', 'Dividi per 3,6 per passare da km/h a metri al secondo.']
      }
    ],
    example: [
      'A train travels s = 180 km in t = 2 hours → v = 180 / 2 = 90 km/h (which is 90 / 3.6 = 25 m/s).',
      'Un treno percorre s = 180 km in t = 2 ore → v = 180 / 2 = 90 km/h (pari a 90 / 3,6 = 25 m/s).'
    ],
    trap: [
      'Always ensure units match before calculating: do not divide kilometers by minutes directly without converting!',
      'Assicurati sempre che le unità di misura siano concordi: non dividere chilometri per minuti senza aver convertito le ore!'
    ]
  },

  // --- TOPIC: Photosynthesis & Ecosystem ---
  {
    id: 'science-photosynthesis',
    subject: 'science',
    topicId: 'photosynthesis-ecosystem',
    category: 'fractions',
    title: ['Chlorophyll Photosynthesis Formula', 'Formula della Fotosintesi Clorofilliana'],
    formula: '6 CO₂ (Carbon Dioxide) + 6 H₂O (Water) + Sunlight  →  C₆H₁₂O₆ (Glucose) + 6 O₂ (Oxygen)',
    rules: [
      {
        name: ['Reactants (Input)', 'Sostanze di partenza'],
        math: 'Water from roots + Carbon dioxide from air + Sunlight energy',
        desc: ['Absorbed by roots and stomata leaves.', 'Assorbite da radici e stomi delle foglie con la clorofilla.']
      },
      {
        name: ['Products (Output)', 'Sostanze prodotte'],
        math: 'Glucose sugar (plant food) + Oxygen gas released',
        desc: ['Glucose feeds the plant; oxygen is released into atmosphere.', 'Il glucosio nutre la pianta; l\'ossigeno viene liberato nell\'aria.']
      }
    ],
    example: [
      'Plants act as autotrophic producers: they transform light energy into chemical energy stored in glucose sugar.',
      'Le piante agiscono da produttori autotrofi: trasformano energia luminosa in energia chimica conservata nel glucosio.'
    ],
    trap: [
      'Plants do NOT only do photosynthesis: at night, in the absence of sunlight, they respire like all living beings, taking in O₂ and releasing CO₂!',
      'Le piante NON fanno solo fotosintesi: di notte, in assenza di luce, respirano come tutti i viventi assorbendo O₂ e rilasciando CO₂!'
    ]
  },

  // =========================================================================
  // ITALIAN STUDIES (CEFR A1, A2, B1 Reference Sheets)
  // =========================================================================
  {
    id: 'it-phonetics-matrix',
    subject: 'italian',
    topicId: 'fonetica',
    category: 'powers',
    title: ['The C & G Phonetic Rule (The Silent "H" Key)', 'La Regola di C e G (La Chiave dell’Acca Muta)'],
    formula: 'C/G + E/I = Soft [tʃ, dʒ]  |  C/G + H + E/I = Hard [k, g]  |  C/G + A/O/U = Hard [k, g]',
    rules: [
      {
        name: ['Soft C and G (Before E, I)', 'C e G dolci (Davanti a E, I)'],
        math: 'C + I/E = [tʃ] (ciao, cena)  |  G + I/E = [dʒ] (gelato, giro)',
        desc: ['Pronounced like English "ch" (cheese) and "j" (jump).', 'Suono dolce palatale senza acca.']
      },
      {
        name: ['Hard C and G with H (Acca)', 'C e G dure con H (Acca)'],
        math: 'C + H + I/E = [k] (chianti, che)  |  G + H + I/E = [g] (spaghetti, ghirlanda)',
        desc: ['The H is 100% silent; its sole job is to harden the consonant!', 'L’acca è muta e ha solo funzione di indurire il suono fonetico.']
      },
      {
        name: ['Palatals: GLI & GN', 'Palatali: GLI e GN'],
        math: 'GLI = [ʎ] (famiglia, bottiglia)  |  GN = [ɲ] (gnocchi, lasagna)',
        desc: ['Liquid and nasal palatals. Never pronounce a separate G sound!', 'Mai pronunciare la G staccata; formano un suono fuso unico.']
      }
    ],
    example: [
      'Compare: "Cianti" (incorrect) vs "Chianti" (hard K). "Spagetti" (incorrect) vs "Spaghetti" (hard G).',
      'Confronta: "Cianti" (errato) vs "Chianti" (K duro). "Spagetti" (errato) vs "Spaghetti" (G dura).'
    ],
    trap: [
      'In English, "CH" is soft (cheese). In Italian, "CH" is strictly HARD (K). For a soft sound in Italian, do NOT write H!',
      'In inglese "CH" è dolce. In italiano "CH" è rigorosamente DURO (K)! Per il suono dolce non scrivere mai la H!'
    ]
  },
  {
    id: 'it-articles-table',
    subject: 'italian',
    topicId: 'articoli-nomi',
    category: 'fractions',
    title: ['Italian Definite Articles & Noun Endings', 'Articoli Determinativi e Desinenze dei Nomi'],
    formula: 'Masc Sing: il / lo / l\'  →  Masc Plur: i / gli  |  Fem Sing: la / l\'  →  Fem Plur: le',
    rules: [
      {
        name: ['Masculine: "il" → "i"', 'Maschile: "il" → "i"'],
        math: 'il ragazzo → i ragazzi  |  il libro → i libri',
        desc: ['Used before consonants (except s+consonant, z, gn, ps, x, y).', 'Davanti a consonante semplice.']
      },
      {
        name: ['Masculine: "lo" / "l\'" → "gli"', 'Maschile: "lo" / "l\'" → "gli"'],
        math: 'lo studente → gli studenti  |  lo zaino → gli zaini  |  l\'amico → gli amici',
        desc: ['Used before s+consonant, z, ps, gn, and vowels.', 'Davanti a s impura, z, gn, ps e vocali.']
      },
      {
        name: ['Feminine: "la" / "l\'" → "le"', 'Femminile: "la" / "l\'" → "le"'],
        math: 'la pizza → le pizze  |  la casa → le case  |  l\'amica → le amiche',
        desc: ['Used for all feminine nouns. Plural is always "le".', 'Per tutti i nomi femminili; il plurale è sempre "le".']
      }
    ],
    example: [
      '"Lo zaino di Marco è pesante" → Plural: "Gli zaini di Marco sono pesanti".',
      '"Lo zaino di Marco è pesante" → Plurale: "Gli zaini di Marco sono pesanti".'
    ],
    trap: [
      'Do not say "il studente" or "i amici"! Always use "lo studente" and "gli amici".',
      'Non dire mai "il studente" o "i amici"! Usa sempre "lo studente" e "gli amici".'
    ]
  },
  {
    id: 'it-passato-prossimo-tree',
    subject: 'italian',
    topicId: 'verbi-tempi',
    category: 'equations',
    title: ['Passato Prossimo & Auxiliary Decision Flow', 'Passato Prossimo e Scelta dell’Ausiliare'],
    formula: 'Passato Prossimo = Presente (Avere / Essere) + Participio Passato (-ato, -uto, -ito)',
    rules: [
      {
        name: ['Rule 1: Transitive Verbs → AVERE', 'Regola 1: Verbi Transitivi → AVERE'],
        math: 'Ho mangiato una pizza.  |  Abbiamo visto un film.',
        desc: ['Participle ends in standard -o and does NOT change with the subject.', 'Il participio termina in -o e non concorda col soggetto.']
      },
      {
        name: ['Rule 2: Movement, Status, Reflexive → ESSERE', 'Regola 2: Movimento, Stato, Riflessivi → ESSERE'],
        math: 'Lui è andato.  |  Lei è andata.  |  Loro sono andati / andate.',
        desc: ['With ESSERE, the participle MUST agree in gender and number (-o, -a, -i, -e)!', 'Con ESSERE il participio concorda obbligatoriamente in genere e numero.']
      }
    ],
    example: [
      'Movement verb "andare": Sofia è andata a Firenze. / Marco e Paolo sono andati a Firenze.',
      'Verbo di movimento "andare": Sofia è andata a Firenze. / Marco e Paolo sono andati a Firenze.'
    ],
    trap: [
      'Never say "ho andato" or "ho arrivato"! Verbs of movement take ESSERE and require agreement!',
      'Mai dire "ho andato" o "ho arrivato"! I verbi di moto richiedono ESSERE con accordo del participio!'
    ]
  },
  {
    id: 'it-pronomi-matrix',
    subject: 'italian',
    topicId: 'pronomi',
    category: 'sets',
    title: ['Direct, Indirect & Combined Pronouns', 'Pronomi Diretti, Indiretti e Combinati'],
    formula: 'Mi + lo → Me lo  |  Ti + la → Te la  |  Gli/Le + lo/la/li/le → Glielo / Gliela / Glieli / Gliele',
    rules: [
      {
        name: ['Direct Object (Who? What?)', 'Oggetto Diretto (Chi? Che cosa?)'],
        math: 'mi, ti, lo/la, ci, vi, li/le (es. "Lo compro", "La chiamo")',
        desc: ['Replaces direct noun: "Mangi la pizza? Sì, la mangio".', 'Sostituisce il complemento oggetto diretto.']
      },
      {
        name: ['Indirect Object (To whom?)', 'Oggetto Indiretto (A chi?)'],
        math: 'mi, ti, gli/le, ci, vi, gli (es. "Gli parlo", "Le scrivo")',
        desc: ['Replaces recipient: "Parli a Marco? Sì, gli parlo".', 'Sostituisce il complemento di termine (a chi).']
      },
      {
        name: ['Partitive "NE"', 'Partitivo "NE"'],
        math: 'ne = of it / of them (es. "Ne voglio due")',
        desc: ['Used for quantities: "Quanti caffè bevi? Ne bevo tre".', 'Indica una quantità determinata o parziale.']
      }
    ],
    example: [
      '"Prestami il tuo libro" → "Me lo presti, per favore?". "Dici la verità a Luca?" → "Sì, gliela dico".',
      '"Prestami il tuo libro" → "Me lo presti, per favore?". "Dici la verità a Luca?" → "Sì, gliela dico".'
    ],
    trap: [
      '"Gli" (to him) and "Le" (to her) BOTH combine into "Glielo / Gliela" as a single compound word.',
      'Sia "gli" sia "le" si fondono nel pronome unico "glielo / gliela".'
    ]
  },
  {
    id: 'it-congiuntivo-triggers',
    subject: 'italian',
    topicId: 'congiuntivo-condizionale',
    category: 'inequalities',
    title: ['The Subjunctive (Congiuntivo) Trigger Guide', 'Guida all’Uso del Congiuntivo'],
    formula: 'Main Clause (Opinion / Doubt / Emotion) + CHE + Congiuntivo Presente',
    rules: [
      {
        name: ['Trigger 1: Personal Opinion & Belief', 'Trigger 1: Opinione e Credenza'],
        math: 'Penso che...  |  Credo che...  |  Ritengo che...',
        desc: ['Subjective opinion: "Penso che questo ristorante sia fantastico".', 'Esprime opinione soggettiva non oggettiva.']
      },
      {
        name: ['Trigger 2: Doubt & Uncertainty', 'Trigger 2: Dubbio e Incertezza'],
        math: 'Dubito che...  |  Non sono sicuro che...  |  Non credo che...',
        desc: ['Doubt: "Dubito che il treno arrivi in orario".', 'Esprime incertezza sul fatto.']
      },
      {
        name: ['Trigger 3: Hope & Emotion', 'Trigger 3: Speranza e Sentimento'],
        math: 'Spero che...  |  Sono felice che...  |  Ho paura che...',
        desc: ['Hopes and wishes: "Spero che tu stia bene!".', 'Esprime stati d’animo e auguri personali.']
      }
    ],
    example: [
      'Compare: "So che Marco è a casa" (Indicativo = fact) vs "Penso che Marco sia a casa" (Congiuntivo = opinion).',
      'Confronta: "So che Marco è a casa" (Indicativo = certezza) vs "Penso che Marco sia a casa" (Congiuntivo = opinione).'
    ],
    trap: [
      'Do NOT use the subjunctive after certainty phrases: "So che...", "È sicuro che...", "È ovvio che..." take INDICATIVO!',
      'NON usare il congiuntivo con espressioni di certezza: "So che...", "È sicuro che..." reggono l’INDICATIVO!'
    ]
  }
];

// Grade 5 Mathematics (classe quinta) formula cards.
FORMULA_CARDS.push(...GRADE5_MATH_FORMULA_CARDS);

// Italian grammar (grammatica di quinta) cards.
FORMULA_CARDS.push(...ITALIAN_GRAMMAR_FORMULA_CARDS);
