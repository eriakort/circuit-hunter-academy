import { BilingualText, SubjectId } from '../types';

export interface FormulaRule {
  name: BilingualText;
  math: string;
  desc: BilingualText;
}

export interface FormulaCard {
  id: string;
  subject: SubjectId;
  category: 'powers' | 'fractions' | 'algebra' | 'equations' | 'physics';
  title: BilingualText;
  formula: string;
  rules?: FormulaRule[];
  example: BilingualText;
  trap?: BilingualText;
  visualKey?: string;
}

export const FORMULA_CARDS: FormulaCard[] = [
  // =================== POWERS & EXPONENTS ===================
  {
    id: 'power-props-same-base',
    subject: 'math',
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

  // =================== FRACTIONS & DECIMALS ===================
  {
    id: 'fractions-invariant',
    subject: 'math',
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

  // =================== ALGEBRA & SPECIAL PRODUCTS ===================
  {
    id: 'special-product-diff-squares',
    subject: 'math',
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

  // =================== EQUATIONS & INEQUALITIES ===================
  {
    id: 'equations-principles',
    subject: 'math',
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

  // =================== PHYSICS FOUNDATIONS ===================
  {
    id: 'physics-density-weight',
    subject: 'phys',
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
    id: 'physics-hooke-pressure',
    subject: 'phys',
    category: 'physics',
    title: ['Hooke\'s Law & Pressure', 'Legge di Hooke e Pressione'],
    formula: 'F_e = k · Δx  ·  p = F / A  ·  p = ρ · g · h',
    rules: [
      {
        name: ['Hooke\'s elastic law', 'Legge elastica di Hooke'],
        math: 'F_e = k · Δx  [N]',
        desc: ['Elastic restoring force is proportional to spring elongation Δx.', 'Forza elastica di richiamo proporzionale all\'allungamento Δx.']
      },
      {
        name: ['Pressure', 'Pressione'],
        math: 'p = F_perp / A  [Pa = N/m²]',
        desc: ['Perpendicular force distributed over surface area A.', 'Rapporto tra la forza perpendicolare e la superficie A.']
      },
      {
        name: ['Stevino\'s law', 'Legge di Stevino'],
        math: 'p = ρ · g · h',
        desc: ['Hydrostatic pressure at depth h in a fluid of density ρ.', 'Pressione idrostatica a profondità h in un fluido di densità ρ.']
      }
    ],
    example: [
      'k = 200 N/m, Δx = 0.05 m → F = 200 · 0.05 = 10 N  ·  F = 500 N, A = 2 m² → p = 250 Pa',
      'k = 200 N/m, Δx = 0.05 m → F = 200 · 0.05 = 10 N  ·  F = 500 N, A = 2 m² → p = 250 Pa'
    ],
    trap: [
      'In pressure, smaller area means MUCH HIGHER pressure for the same force (e.g. sharp knife vs dull surface)!',
      'Nella pressione, una superficie più piccola produce una pressione MOLTO MAGGIORE a parità di forza (es. la punta di un chiodo)!'
    ]
  }
];
