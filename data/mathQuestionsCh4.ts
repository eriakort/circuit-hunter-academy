import { TaggedQuestion } from '../types';

export const CH4_QUESTIONS: TaggedQuestion[] = [
  {
    id: 'math-ch4-01',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch4',
    chapterTitle: ['Algebraic Expressions', 'Espressioni algebriche'],
    missionTitle: ['Definition of a Monomial', 'Definizione di monomio'],
    q: [
      'Which of the following algebraic expressions is a MONOMIAL?',
      'Quale delle seguenti espressioni algebriche è un MONOMIO?'
    ],
    a: [
      ['−3x²y³', '−3x²y³'],
      ['2x + 5y', '2x + 5y'],
      ['4 / x', '4 / x'],
      ['x² − 1', 'x² − 1']
    ],
    why: [
      'A monomial is an algebraic expression consisting only of multiplications and natural number powers between numbers and letters (no addition, subtraction, or variables in denominators). −3x²y³ is a monomial; 2x + 5y is a binomial; 4/x is a fractional expression.',
      'Un monomio è un’espressione algebrica in cui compaiono solo moltiplicazioni e potenze a esponente naturale tra numeri e lettere. −3x²y³ è un monomio; 2x + 5y è un binomio; 4/x è una frazione algebrica.'
    ]
  },
  {
    id: 'math-ch4-02',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch4',
    chapterTitle: ['Algebraic Expressions', 'Espressioni algebriche'],
    missionTitle: ['Coefficient and Variable Part', 'Coefficiente e parte letterale'],
    q: [
      'What are the coefficient and the variable part of the monomial −a³b?',
      'Quali sono il coefficiente numerico e la parte letterale del monomio −a³b?'
    ],
    a: [
      ['Coefficient: −1; Variable part: a³b', 'Coefficiente: −1; Parte letterale: a³b'],
      ['Coefficient: 0; Variable part: a³b', 'Coefficiente: 0; Parte letterale: a³b'],
      ['Coefficient: 1; Variable part: −a³b', 'Coefficiente: 1; Parte letterale: −a³b'],
      ['Coefficient: −3; Variable part: ab', 'Coefficiente: −3; Parte letterale: ab']
    ],
    why: [
      'When no number is explicitly written before the letters, the coefficient is 1 or −1 depending on the sign. For −a³b, the coefficient is −1 and the literal part is a³b (note that b has exponent 1).',
      'Quando prima delle lettere c’è solo il segno meno, il coefficiente sottinteso è −1 (non 0!). La parte letterale è a³b.'
    ]
  },
  {
    id: 'math-ch4-03',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch4',
    chapterTitle: ['Algebraic Expressions', 'Espressioni algebriche'],
    missionTitle: ['Degree of a Monomial', 'Grado di un monomio'],
    q: [
      'What is the overall degree (grado complessivo) of the monomial 5x³y²z?',
      'Qual è il grado complessivo del monomio 5x³y²z?'
    ],
    a: [
      ['6 (because 3 + 2 + 1 = 6)', '6 (perché 3 + 2 + 1 = 6)'],
      ['5 (because 3 + 2 = 5)', '5 (perché 3 + 2 = 5)'],
      ['3', '3'],
      ['11 (including the coefficient 5)', '11 (includendo il coefficiente 5)']
    ],
    why: [
      'The overall degree is the sum of the exponents of all its variables. Don\'t forget that z has exponent 1! So 3 + 2 + 1 = 6. The coefficient 5 does not contribute to the degree.',
      'Il grado complessivo è la somma di tutti gli esponenti delle lettere. Attenzione al tranello: la lettera z ha esponente 1! Quindi 3 + 2 + 1 = 6. Il coefficiente 5 non influisce sul grado.'
    ]
  },
  {
    id: 'math-ch4-04',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch4',
    chapterTitle: ['Algebraic Expressions', 'Espressioni algebriche'],
    missionTitle: ['The Zero Monomial (Monomio nullo)', 'Monomio nullo e grado'],
    q: [
      'What is the degree of the zero monomial (monomio nullo: 0)?',
      'Qual è il grado del monomio nullo (il numero 0)?'
    ],
    a: [
      ['It is undefined / does not have a degree', 'È privo di grado / non definito'],
      ['0', '0'],
      ['1', '1'],
      ['Infinity', 'Infinito']
    ],
    why: [
      'A non-zero number (like 7 = 7x⁰) has degree 0. But the zero monomial 0 is considered to have no degree (or degree −∞ in advanced algebra), because 0 = 0x = 0x² = 0xⁿ for any n!',
      'Un numero diverso da zero (es. 7 = 7x⁰) ha grado 0. Invece al monomio nullo 0 non si attribuisce alcun grado (è non definito).'
    ]
  },
  {
    id: 'math-ch4-05',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch4',
    chapterTitle: ['Algebraic Expressions', 'Espressioni algebriche'],
    missionTitle: ['Like Terms (Monomi simili)', 'Monomi simili'],
    q: [
      'Which pair consists of "like monomials" (monomi simili)?',
      'Quale coppia è formata da "monomi simili"?'
    ],
    a: [
      ['4a²b and −7a²b', '4a²b e −7a²b'],
      ['3a²b and 3ab²', '3a²b e 3ab²'],
      ['5x³ and 5x²', '5x³ e 5x²'],
      ['2xy and 2xyz', '2xy e 2xyz']
    ],
    why: [
      'Two monomials are similar if and only if they have the EXACT same literal part with the exact same exponents on each letter. In 3a²b and 3ab², the exponents of a and b are inverted, so they are NOT like terms!',
      'Due monomi sono simili se e solo se hanno la STESSA parte letterale, con gli stessi esponenti su ciascuna lettera. 3a²b e 3ab² NON sono simili perché le lettere hanno esponenti diversi!'
    ]
  },
  {
    id: 'math-ch4-06',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch4',
    chapterTitle: ['Algebraic Expressions', 'Espressioni algebriche'],
    missionTitle: ['Addition of Like Monomials', 'Somma di monomi simili'],
    q: [
      'Calculate: 3x² + 5x² = ?',
      'Calcola: 3x² + 5x² = ?'
    ],
    a: [
      ['8x²', '8x²'],
      ['8x⁴', '8x⁴'],
      ['15x⁴', '15x⁴'],
      ['8x', '8x']
    ],
    why: [
      'CRITICAL TRAP! When adding like terms, add ONLY the coefficients: (3 + 5)x² = 8x². The exponent NEVER changes during addition! (8x⁴ is the result of multiplication 3x² · 5x² = 15x⁴).',
      'TRANELLO FREQUENTISSIMO! Nella somma di monomi simili si sommano SOLO i coefficienti: (3 + 5)x² = 8x². L’esponente della parte letterale resta invariato!'
    ]
  },
  {
    id: 'math-ch4-07',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch4',
    chapterTitle: ['Algebraic Expressions', 'Espressioni algebriche'],
    missionTitle: ['Adding Unlike Monomials Warning', 'Somma di monomi non simili'],
    q: [
      'Can the expression 4x² + 3x be simplified into a single monomial?',
      'L’espressione 4x² + 3x può essere semplificata in un unico monomio?'
    ],
    a: [
      ['No, because 4x² and 3x are not like terms; it remains a binomial', 'No, perché 4x² e 3x non sono simili; rimane un binomio irriducibile'],
      ['Yes, it equals 7x³', 'Sì, è uguale a 7x³'],
      ['Yes, it equals 7x²', 'Sì, è uguale a 7x²'],
      ['Yes, it equals 12x³', 'Sì, è uguale a 12x³']
    ],
    why: [
      'Think of x² as area (square tiles) and x as length (sticks). You cannot add square tiles and sticks together! 4x² + 3x cannot be merged into a single monomial.',
      'Visualizza x² come un’area (mattonelle) e x come una lunghezza (bacchette). Non puoi sommare metri quadri e metri lineari! 4x² + 3x rimane così.'
    ]
  },
  {
    id: 'math-ch4-08',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch4',
    chapterTitle: ['Algebraic Expressions', 'Espressioni algebriche'],
    missionTitle: ['Product of Monomials', 'Prodotto di monomi'],
    q: [
      'Calculate: (−3a²b) · (4ab³) = ?',
      'Calcola: (−3a²b) · (4ab³) = ?'
    ],
    a: [
      ['−12a³b⁴', '−12a³b⁴'],
      ['+12a²b³', '+12a²b³'],
      ['−12a²b⁴', '−12a²b⁴'],
      ['1a³b⁴', '1a³b⁴']
    ],
    why: [
      'Multiply coefficients: (−3) · 4 = −12. For literal part, add exponents of same bases: a² · a¹ = a²⁺¹ = a³; b¹ · b³ = b¹⁺³ = b⁴. Result: −12a³b⁴.',
      'Moltiplica i coefficienti: (−3) · 4 = −12. Per la parte letterale, somma gli esponenti delle lettere uguali: a²⁺¹ = a³ e b¹⁺³ = b⁴. Risultato: −12a³b⁴.'
    ]
  },
  {
    id: 'math-ch4-09',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch4',
    chapterTitle: ['Algebraic Expressions', 'Espressioni algebriche'],
    missionTitle: ['Power of a Monomial', 'Potenza di un monomio'],
    q: [
      'Calculate: (−2x³y)² = ?',
      'Calcola: (−2x³y)² = ?'
    ],
    a: [
      ['+4x⁶y²', '+4x⁶y²'],
      ['−4x⁶y²', '−4x⁶y²'],
      ['+4x⁵y²', '+4x⁵y²'],
      ['−2x⁶y²', '−2x⁶y²']
    ],
    why: [
      'Raise coefficient to the power: (−2)² = +4 (even exponent gives positive). Multiply exponents of each variable: (x³)² = x⁶; (y¹)² = y². Result: +4x⁶y².',
      'Eleva a potenza il coefficiente: (−2)² = +4. Moltiplica gli esponenti delle lettere: (x³)² = x⁶ e y² = y². Risultato: +4x⁶y².'
    ]
  },
  {
    id: 'math-ch4-10',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch4',
    chapterTitle: ['Algebraic Expressions', 'Espressioni algebriche'],
    missionTitle: ['Division of Monomials', 'Divisione di monomi'],
    q: [
      'Calculate: (15a⁴b³) : (−3a²b³) = ?',
      'Calcola: (15a⁴b³) : (−3a²b³) = ?'
    ],
    a: [
      ['−5a²', '−5a²'],
      ['−5a²b', '−5a²b'],
      ['+5a²', '+5a²'],
      ['−5a⁶b⁶', '−5a⁶b⁶']
    ],
    why: [
      'Divide coefficients: 15 : (−3) = −5. Subtract exponents: a⁴⁻² = a²; b³⁻³ = b⁰ = 1. The letter b disappears completely! Result: −5a².',
      'Dividi i coefficienti: 15 : (−3) = −5. Sottrai gli esponenti: a⁴⁻² = a²; b³⁻³ = b⁰ = 1. La lettera b sparisce! Risultato: −5a².'
    ]
  },
  {
    id: 'math-ch4-11',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch4',
    chapterTitle: ['Algebraic Expressions', 'Espressioni algebriche'],
    missionTitle: ['Condition for Divisibility of Monomials', 'Condizione di divisibilità tra monomi'],
    q: [
      'When is a monomial A divisible by a monomial B (with B ≠ 0)?',
      'Quando un monomio A è divisibile per un monomio B (con B ≠ 0)?'
    ],
    a: [
      ['When all variables in B appear in A with an exponent greater than or equal to that in B', 'Quando tutte le lettere presenti in B compaiono anche in A con esponente maggiore o uguale'],
      ['When the coefficient of A is a multiple of B', 'Quando il coefficiente di A è un multiplo del coefficiente di B'],
      ['When both have the same degree', 'Quando hanno lo stesso grado'],
      ['Any two monomials are always divisible', 'Due monomi qualsiasi sono sempre divisibili']
    ],
    why: [
      'For the quotient to be a monomial, subtracting exponents cannot yield negative exponents. So each letter of the divisor must already be in the dividend with at least the same exponent.',
      'Affinché il quoziente sia ancora un monomio, non possono comparire esponenti negativi. Quindi le lettere del divisore devono trovarsi nel dividendo con esponente maggiore o uguale.'
    ]
  },
  {
    id: 'math-ch4-12',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch4',
    chapterTitle: ['Algebraic Expressions', 'Espressioni algebriche'],
    missionTitle: ['GCD (M.C.D.) of Monomials', 'M.C.D. tra monomi'],
    q: [
      'Find the Greatest Common Divisor (M.C.D.) of: 12x³y² and 18x²y⁴.',
      'Calcola il M.C.D. tra i monomi: 12x³y² e 18x²y⁴.'
    ],
    a: [
      ['6x²y²', '6x²y²'],
      ['36x³y⁴', '36x³y⁴'],
      ['6xy', '6xy'],
      ['2x²y²', '2x²y²']
    ],
    why: [
      'M.C.D. of coefficients: M.C.D.(12, 18) = 6. For literal part, take only common variables with lowest exponent: x² and y². Result: 6x²y².',
      'M.C.D. dei coefficienti: M.C.D.(12, 18) = 6. Per le lettere, prendi le lettere comuni con il minimo esponente: x² e y². Risultato: 6x²y².'
    ]
  },
  {
    id: 'math-ch4-13',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch4',
    chapterTitle: ['Algebraic Expressions', 'Espressioni algebriche'],
    missionTitle: ['LCM (m.c.m.) of Monomials', 'm.c.m. tra monomi'],
    q: [
      'Find the least common multiple (m.c.m.) of: 4a²b and 6ab³.',
      'Calcola il m.c.m. tra i monomi: 4a²b e 6ab³.'
    ],
    a: [
      ['12a²b³', '12a²b³'],
      ['2ab', '2ab'],
      ['24a³b⁴', '24a³b⁴'],
      ['12ab', '12ab']
    ],
    why: [
      'm.c.m. of coefficients: m.c.m.(4, 6) = 12. For literal part, take all variables with highest exponent: a² and b³. Result: 12a²b³.',
      'm.c.m. dei coefficienti: m.c.m.(4, 6) = 12. Per la parte letterale, prendi tutte le lettere (comuni e non) con il massimo esponente: a² e b³. Risultato: 12a²b³.'
    ]
  },
  {
    id: 'math-ch4-14',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch4',
    chapterTitle: ['Algebraic Expressions', 'Espressioni algebriche'],
    missionTitle: ['Definition of a Polynomial', 'Definizione di polinomio'],
    q: [
      'What is a polynomial in reduced normal form?',
      'Che cos’è un polinomio ridotto in forma normale?'
    ],
    a: [
      ['An algebraic sum of monomials in which all like terms have been combined', 'Una somma algebrica di monomi in cui tutti i termini simili sono stati sommati'],
      ['A single monomial with degree greater than 3', 'Un singolo monomio con grado superiore a 3'],
      ['An expression with square roots', 'Un’espressione contenente radici quadrate'],
      ['A product of two fractions', 'Il prodotto di due frazioni']
    ],
    why: [
      'A polynomial is the algebraic sum of several monomials. It is in normal form when no two terms are similar. If it has 2 terms it is a binomial; 3 terms a trinomial; 4 a quadrinomial.',
      'Un polinomio è la somma algebrica di più monomi. Si dice ridotto in forma normale quando non contiene termini simili (tutti i termini simili sono stati raggruppati).'
    ]
  },
  {
    id: 'math-ch4-15',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch4',
    chapterTitle: ['Algebraic Expressions', 'Espressioni algebriche'],
    missionTitle: ['Degree of a Polynomial', 'Grado complessivo di un polinomio'],
    q: [
      'What is the degree of the polynomial: 3x⁴y − 5x²y⁵ + 7x³?',
      'Qual è il grado complessivo del polinomio: 3x⁴y − 5x²y⁵ + 7x³?'
    ],
    a: [
      ['7 (the maximum degree among its terms: 2 + 5 = 7)', '7 (il grado massimo tra i suoi termini: 2 + 5 = 7)'],
      ['5 (the degree of the first term 4 + 1)', '5 (il grado del primo termine 4 + 1)'],
      ['15 (the sum of all exponents)', '15 (la somma di tutti gli esponenti)'],
      ['4', '4']
    ],
    why: [
      'The degree of a polynomial is the HIGHEST degree among its non-zero monomial terms: 3x⁴y has degree 4+1=5; −5x²y⁵ has degree 2+5=7; 7x³ has degree 3. The maximum is 7!',
      'Il grado complessivo di un polinomio è il MASSIMO grado tra i suoi singoli monomi: 3x⁴y ha grado 5; −5x²y⁵ ha grado 7; 7x³ ha grado 3. Il massimo è 7!'
    ]
  },
  {
    id: 'math-ch4-16',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch4',
    chapterTitle: ['Algebraic Expressions', 'Espressioni algebriche'],
    missionTitle: ['Homogeneous Polynomial (Polinomio omogeneo)', 'Polinomio omogeneo'],
    q: [
      'When is a polynomial called "homogeneous"?',
      'Quando un polinomio si dice "omogeneo"?'
    ],
    a: [
      ['When all its monomial terms have the exact same degree', 'Quando tutti i suoi monomi hanno lo stesso grado'],
      ['When all its coefficients are equal', 'Quando tutti i coefficienti sono uguali'],
      ['When all signs are positive', 'Quando tutti i segni sono positivi'],
      ['When it contains only one variable', 'Quando contiene una sola lettera']
    ],
    why: [
      'A polynomial is homogeneous if every term has identical total degree. For example, 2x³ + 5x²y − y³ is homogeneous of degree 3 because each term has degree 3.',
      'Un polinomio è omogeneo quando tutti i suoi termini hanno lo stesso grado complessivo. Ad esempio 2x³ + 5x²y − y³ è omogeneo di grado 3.'
    ]
  },
  {
    id: 'math-ch4-17',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch4',
    chapterTitle: ['Algebraic Expressions', 'Espressioni algebriche'],
    missionTitle: ['Complete Polynomial (Polinomio completo)', 'Polinomio completo'],
    q: [
      'With respect to a variable x, when is a polynomial called "complete"?',
      'Rispetto alla lettera x, quando un polinomio si dice "completo"?'
    ],
    a: [
      ['When it contains all powers of x from the maximum degree down to degree 0 (constant term)', 'Quando presenta tutte le potenze di x dal grado massimo fino al grado 0 (termine noto)'],
      ['When it contains all letters of the alphabet', 'Quando contiene tutte le lettere dell’alfabeto'],
      ['When its degree is an even number', 'Quando il suo grado è un numero pari'],
      ['When it has no negative signs', 'Quando non ha segni negativi']
    ],
    why: [
      'A polynomial in x is complete if all powers from the highest down to x⁰ (the constant term) are present without gaps. For example, 4x³ − 2x² + 5x − 7 is complete of degree 3.',
      'Un polinomio è completo rispetto a x se contiene tutte le potenze di x, dal grado massimo fino al termine noto x⁰, senza saltarne nessuna (es. 4x³ − 2x² + 5x − 7).'
    ]
  },
  {
    id: 'math-ch4-18',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch4',
    chapterTitle: ['Algebraic Expressions', 'Espressioni algebriche'],
    missionTitle: ['Parentheses with Minus Sign Ahead', 'Parentesi preceduta dal segno meno'],
    q: [
      'Simplify: (3x² − 2x + 5) − (x² − 4x + 1) = ?',
      'Semplifica: (3x² − 2x + 5) − (x² − 4x + 1) = ?'
    ],
    a: [
      ['2x² + 2x + 4', '2x² + 2x + 4'],
      ['2x² − 6x + 4', '2x² − 6x + 4'],
      ['2x² − 6x + 6', '2x² − 6x + 6'],
      ['4x² + 2x + 4', '4x² + 2x + 4']
    ],
    why: [
      'A minus sign in front of parentheses flips the sign of EVERY term inside: −(x² − 4x + 1) = −x² + 4x − 1! Then combine like terms: (3−1)x² + (−2+4)x + (5−1) = 2x² + 2x + 4.',
      'Il segno meno davanti alle parentesi cambia TUTTI i segni al suo interno: −(x² − 4x + 1) diventa −x² + 4x − 1! Sommando i simili: 2x² + 2x + 4.'
    ]
  },
  {
    id: 'math-ch4-19',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch4',
    chapterTitle: ['Algebraic Expressions', 'Espressioni algebriche'],
    missionTitle: ['Monomial by Polynomial Product', 'Prodotto di un monomio per un polinomio'],
    q: [
      'Multiply: 2x² · (3x − 4y + 1) = ?',
      'Calcola: 2x² · (3x − 4y + 1) = ?'
    ],
    a: [
      ['6x³ − 8x²y + 2x²', '6x³ − 8x²y + 2x²'],
      ['6x² − 8x²y + 2x²', '6x² − 8x²y + 2x²'],
      ['5x³ − 8x²y + 2x²', '5x³ − 8x²y + 2x²'],
      ['6x³ − 8xy + 2', '6x³ − 8xy + 2']
    ],
    why: [
      'Distribute 2x² to each term inside: 2x² · 3x = 6x³; 2x² · (−4y) = −8x²y; 2x² · 1 = 2x². Don\'t forget to multiply the last term (+1) by 2x²!',
      'Usa la proprietà distributiva moltiplicando 2x² per ciascun termine: 2x² · 3x = 6x³; 2x² · (−4y) = −8x²y; 2x² · 1 = 2x².'
    ]
  },
  {
    id: 'math-ch4-20',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch4',
    chapterTitle: ['Algebraic Expressions', 'Espressioni algebriche'],
    missionTitle: ['Product of Two Binomials', 'Prodotto di due binomi'],
    q: [
      'Multiply and simplify: (2x + 3)(x − 5) = ?',
      'Moltiplica e riduci: (2x + 3)(x − 5) = ?'
    ],
    a: [
      ['2x² − 7x − 15', '2x² − 7x − 15'],
      ['2x² − 15', '2x² − 15'],
      ['2x² + 7x − 15', '2x² + 7x − 15'],
      ['2x² − 10x − 15', '2x² − 10x − 15']
    ],
    why: [
      'Multiply every term of the first by every term of the second: 2x · x + 2x · (−5) + 3 · x + 3 · (−5) = 2x² − 10x + 3x − 15 = 2x² − 7x − 15.',
      'Moltiplica ciascun termine del primo per ciascuno del secondo: 2x² − 10x + 3x − 15. Raggruppa i termini simili in x: −10x + 3x = −7x, ottenendo 2x² − 7x − 15.'
    ]
  },
  {
    id: 'math-ch4-21',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch4',
    chapterTitle: ['Algebraic Expressions', 'Espressioni algebriche'],
    missionTitle: ['Evaluating a Polynomial', 'Valore numerico di un polinomio'],
    q: [
      'If x = −2, what is the numerical value of P(x) = 3x² − 5x + 4?',
      'Se x = −2, qual è il valore numerico del polinomio P(x) = 3x² − 5x + 4?'
    ],
    a: [
      ['26', '26'],
      ['6', '6'],
      ['−18', '−18'],
      ['2', '2']
    ],
    why: [
      'Substitute x = −2 using brackets: 3(−2)² − 5(−2) + 4 = 3(4) + 10 + 4 = 12 + 10 + 4 = 26. Watch out: −5(−2) is +10!',
      'Sostituisci x = −2 con le parentesi: 3(−2)² − 5(−2) + 4 = 3·4 + 10 + 4 = 12 + 10 + 4 = 26. Attenzione al tranello dei segni: −5 · (−2) fa +10!'
    ]
  },
  {
    id: 'math-ch4-22',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch4',
    chapterTitle: ['Algebraic Expressions', 'Espressioni algebriche'],
    missionTitle: ['Polynomial Identity Principle', 'Principio di identità dei polinomi'],
    q: [
      'When are two polynomials P(x) and Q(x) identical?',
      'Quando due polinomi P(x) e Q(x) si dicono identici?'
    ],
    a: [
      ['When they have the same degree and all corresponding coefficients of like powers are equal', 'Quando hanno lo stesso grado e i coefficienti dei termini di grado uguale sono a due a due uguali'],
      ['When they evaluate to the same number for x = 0 only', 'Quando danno lo stesso risultato solo per x = 0'],
      ['When their constant terms are equal', 'Quando hanno lo stesso termine noto'],
      ['When they have the same number of terms', 'Quando hanno lo stesso numero di termini']
    ],
    why: [
      'By the polynomial identity principle, two polynomials are identical if and only if they match term by term for all powers of x.',
      'Per il principio di identità dei polinomi, due polinomi sono identici se e solo se i coefficienti dei monomi di pari grado sono identici.'
    ]
  },
  {
    id: 'math-ch4-23',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch4',
    chapterTitle: ['Algebraic Expressions', 'Espressioni algebriche'],
    missionTitle: ['Opposite Polynomial', 'Polinomio opposto'],
    q: [
      'What is the opposite polynomial of P(x) = 2x³ − 7x + 1?',
      'Qual è il polinomio opposto di P(x) = 2x³ − 7x + 1?'
    ],
    a: [
      ['−2x³ + 7x − 1', '−2x³ + 7x − 1'],
      ['−2x³ − 7x + 1', '−2x³ − 7x + 1'],
      ['2x³ + 7x − 1', '2x³ + 7x − 1'],
      ['1 / (2x³ − 7x + 1)', '1 / (2x³ − 7x + 1)']
    ],
    why: [
      'The opposite polynomial −P(x) is obtained by changing the signs of ALL its terms: −(2x³ − 7x + 1) = −2x³ + 7x − 1. Their sum is 0.',
      'Il polinomio opposto −P(x) si ottiene cambiando il segno di TUTTI i suoi termini: −2x³ + 7x − 1. La loro somma dà il polinomio nullo 0.'
    ]
  },
  {
    id: 'math-ch4-24',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch4',
    chapterTitle: ['Algebraic Expressions', 'Espressioni algebriche'],
    missionTitle: ['Polynomial Division by a Monomial', 'Divisione di un polinomio per un monomio'],
    q: [
      'Divide: (12a³b² − 8a²b) : (4ab) = ?',
      'Esegui la divisione: (12a³b² − 8a²b) : (4ab) = ?'
    ],
    a: [
      ['3a²b − 2a', '3a²b − 2a'],
      ['3a²b − 2', '3a²b − 2'],
      ['3a³b² − 2a²b', '3a³b² − 2a²b'],
      ['4a²b − 2a', '4a²b − 2a']
    ],
    why: [
      'Divide each term of the polynomial by the divisor 4ab: (12a³b² : 4ab) − (8a²b : 4ab) = 3a²b − 2a.',
      'Dividi ciascun termine del polinomio per il monomio divisore: (12a³b² : 4ab) − (8a²b : 4ab) = 3a²b − 2a.'
    ]
  },
  {
    id: 'math-ch4-25',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch4',
    chapterTitle: ['Algebraic Expressions', 'Espressioni algebriche'],
    missionTitle: ['Translating Word Problems to Algebra', 'Traduzione da testo a espressione algebrica'],
    q: [
      'Which algebraic expression represents: "The square of the sum of twice a and b"?',
      'Quale espressione algebrica traduce: "Il quadrato della somma tra il doppio di a e b"?'
    ],
    a: [
      ['(2a + b)²', '(2a + b)²'],
      ['2a² + b²', '2a² + b²'],
      ['(2a)² + b', '(2a)² + b'],
      ['2(a + b)²', '2(a + b)²']
    ],
    why: [
      'Careful with the order of operations in language: "the square of..." means the whole sum is raised to power 2: (2a + b)². If it said "the sum of the squares", it would be (2a)² + b².',
      'Attenzione all’ordine linguistico: "Il quadrato della somma..." significa che prima si forma la somma (2a + b) e poi si eleva tutto al quadrato: (2a + b)².'
    ]
  }
];
