import { TaggedQuestion } from '../types';

export const CH5_QUESTIONS: TaggedQuestion[] = [
  {
    id: 'math-ch5-01',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch5',
    chapterTitle: ['Special Products & Factoring', 'Prodotti notevoli e scomposizione'],
    missionTitle: ['Product of Sum and Difference', 'Somma per differenza (A + B)(A − B)'],
    q: [
      'Expand: (3x + 4)(3x − 4) = ?',
      'Sviluppa il prodotto notevole: (3x + 4)(3x − 4) = ?'
    ],
    a: [
      ['9x² − 16', '9x² − 16'],
      ['9x² + 16', '9x² + 16'],
      ['9x² − 24x − 16', '9x² − 24x − 16'],
      ['6x² − 16', '6x² − 16']
    ],
    why: [
      'Rule for product of sum and difference: (A + B)(A − B) = A² − B². Here A = 3x (so A² = 9x²) and B = 4 (so B² = 16). The cross terms (+12x and −12x) cancel each other out completely: 9x² − 16.',
      'Regola della somma per differenza: (A + B)(A − B) = A² − B² (differenza di due quadrati). Con A = 3x (A² = 9x²) e B = 4 (B² = 16). I doppi prodotti misti si annullano (+12x − 12x = 0): 9x² − 16.'
    ]
  },
  {
    id: 'math-ch5-02',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch5',
    chapterTitle: ['Special Products & Factoring', 'Prodotti notevoli e scomposizione'],
    missionTitle: ['Sign Traps in Sum times Difference', 'Tranello dei segni nella somma per differenza'],
    q: [
      'Expand: (−2a + 5)(2a + 5) = ?',
      'Sviluppa: (−2a + 5)(2a + 5) = ?'
    ],
    a: [
      ['25 − 4a²', '25 − 4a²'],
      ['4a² − 25', '4a² − 25'],
      ['−4a² − 25', '−4a² − 25'],
      ['4a² + 25', '4a² + 25']
    ],
    why: [
      'Rewrite it in standard form: (5 − 2a)(5 + 2a). The term that keeps the same sign is 5; the term that changes sign is 2a. Rule: (same)² − (different)² = 5² − (2a)² = 25 − 4a²!',
      'Riscrivi i fattori ordinandoli: (5 − 2a)(5 + 2a). Il termine che non cambia segno è +5; quello che cambia segno è 2a. La regola dice: (termine concorde)² − (termine discorde)² = 25 − 4a²!'
    ]
  },
  {
    id: 'math-ch5-03',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch5',
    chapterTitle: ['Special Products & Factoring', 'Prodotti notevoli e scomposizione'],
    missionTitle: ['Square of a Binomial Formula', 'Quadrato di un binomio (A + B)²'],
    q: [
      'Expand: (2x + 3y)² = ?',
      'Sviluppa il quadrato di binomio: (2x + 3y)² = ?'
    ],
    a: [
      ['4x² + 12xy + 9y²', '4x² + 12xy + 9y²'],
      ['4x² + 9y²', '4x² + 9y²'],
      ['4x² + 6xy + 9y²', '4x² + 6xy + 9y²'],
      ['2x² + 12xy + 3y²', '2x² + 12xy + 3y²']
    ],
    why: [
      'Square of a binomial rule: (A + B)² = A² + 2AB + B². Here A² = (2x)² = 4x²; B² = (3y)² = 9y²; the DOUBLE product is 2 · (2x) · (3y) = 12xy. Result: 4x² + 12xy + 9y².',
      'Formula del quadrato di binomio: (A + B)² = A² + 2AB + B². Il primo quadrato è 4x², il secondo è 9y², e il DOPPIO PRODOTTO è 2 · (2x) · (3y) = 12xy. Risultato: 4x² + 12xy + 9y².'
    ]
  },
  {
    id: 'math-ch5-04',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch5',
    chapterTitle: ['Special Products & Factoring', 'Prodotti notevoli e scomposizione'],
    missionTitle: ['The Missing Middle Term Trap', 'Il tranello del doppio prodotto'],
    q: [
      'Why is the statement (x + 5)² = x² + 25 FALSE?',
      'Perché l’affermazione (x + 5)² = x² + 25 è FALSA?'
    ],
    a: [
      ['It is missing the double product term +2·x·5 = +10x', 'Manca il termine del doppio prodotto +2·x·5 = +10x'],
      ['Because 5² = 10, not 25', 'Perché 5² fa 10, non 25'],
      ['Because the sign should be minus', 'Perché il segno doveva essere meno'],
      ['It is actually true for all numbers', 'In realtà è vera per qualunque numero']
    ],
    why: [
      'THE #1 TRAP IN ALGEBRA! Geometrically, a square of side (x + 5) contains: one square of x², one square of 25, and TWO rectangles of area 5x. Thus (x + 5)² = x² + 10x + 25. For example, if x = 1: (1+5)² = 36, but 1² + 25 = 26 ≠ 36!',
      'IL TRANELLO N. 1 DELL’ALGEBRA! Geometricamente, un quadrato di lato (x + 5) contiene: un quadrato x², un quadrato 25 e DUE rettangoli di area 5x. Quindi (x + 5)² = x² + 10x + 25. Se x = 1: 6² = 36, ma 1 + 25 = 26 ≠ 36!'
    ]
  },
  {
    id: 'math-ch5-05',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch5',
    chapterTitle: ['Special Products & Factoring', 'Prodotti notevoli e scomposizione'],
    missionTitle: ['Square of a Difference (A − B)²', 'Quadrato di una differenza (A − B)²'],
    q: [
      'Expand: (3a − 2b)² = ?',
      'Sviluppa: (3a − 2b)² = ?'
    ],
    a: [
      ['9a² − 12ab + 4b²', '9a² − 12ab + 4b²'],
      ['9a² − 4b²', '9a² − 4b²'],
      ['9a² + 12ab + 4b²', '9a² + 12ab + 4b²'],
      ['9a² − 12ab − 4b²', '9a² − 12ab − 4b²']
    ],
    why: [
      '(A − B)² = A² − 2AB + B². Note that the two squares A² = 9a² and B² = (−2b)² = +4b² are ALWAYS POSITIVE! Only the middle double product has a negative sign: 2 · (3a) · (−2b) = −12ab.',
      '(A − B)² = A² − 2AB + B². Ricorda: i due quadrati sono SEMPRE POSITIVI (+9a² e +4b²)! Solo il doppio prodotto ha segno negativo: 2 · (3a) · (−2b) = −12ab.'
    ]
  },
  {
    id: 'math-ch5-06',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch5',
    chapterTitle: ['Special Products & Factoring', 'Prodotti notevoli e scomposizione'],
    missionTitle: ['Square of Negative Binomial (−A − B)²', 'Quadrato di binomio con entrambi i segni negativi'],
    q: [
      'Expand: (−x − 3)² = ?',
      'Sviluppa: (−x − 3)² = ?'
    ],
    a: [
      ['x² + 6x + 9', 'x² + 6x + 9'],
      ['−x² − 6x − 9', '−x² − 6x − 9'],
      ['x² − 6x + 9', 'x² − 6x + 9'],
      ['x² − 9', 'x² − 9']
    ],
    why: [
      '(−x − 3)² = [−(x + 3)]² = (−1)² · (x + 3)² = (x + 3)² = x² + 6x + 9. Alternatively: (−x)² = x², (−3)² = 9, and 2 · (−x) · (−3) = +6x! Two negative terms inside the square yield all positive terms!',
      '(−x − 3)² = [−(x + 3)]² = (x + 3)² = x² + 6x + 9. Oppure: (−x)² = x², (−3)² = 9, e il doppio prodotto è 2 · (−x) · (−3) = +6x! Due segni meno nel binomio danno tutti segni positivi nello sviluppo!'
    ]
  },
  {
    id: 'math-ch5-07',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch5',
    chapterTitle: ['Special Products & Factoring', 'Prodotti notevoli e scomposizione'],
    missionTitle: ['Square of a Trinomial (A + B + C)²', 'Quadrato di un trinomio (A + B + C)²'],
    q: [
      'How many terms appear in the expanded result of the square of a trinomial (A + B + C)² before any like terms are grouped?',
      'Da quanti termini è composto lo sviluppo del quadrato di un trinomio (A + B + C)² prima di eventuali riduzioni?'
    ],
    a: [
      ['6 terms (3 squares + 3 double products)', '6 termini (3 quadrati + 3 doppi prodotti)'],
      ['3 terms', '3 termini'],
      ['4 terms', '4 termini'],
      ['9 terms', '9 termini']
    ],
    why: [
      '(A + B + C)² = A² + B² + C² + 2AB + 2AC + 2BC. It consists of the sum of the 3 squares plus the 3 pairwise double products (6 terms total).',
      '(A + B + C)² = A² + B² + C² + 2AB + 2AC + 2BC. È formato dalla somma dei 3 quadrati più i 3 doppi prodotti di tutte le coppie possibili (6 termini in totale).'
    ]
  },
  {
    id: 'math-ch5-08',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch5',
    chapterTitle: ['Special Products & Factoring', 'Prodotti notevoli e scomposizione'],
    missionTitle: ['Cube of a Binomial Formula (A + B)³', 'Cubo di un binomio (A + B)³'],
    q: [
      'Expand: (x + 2)³ = ?',
      'Sviluppa il cubo di binomio: (x + 2)³ = ?'
    ],
    a: [
      ['x³ + 6x² + 12x + 8', 'x³ + 6x² + 12x + 8'],
      ['x³ + 8', 'x³ + 8'],
      ['x³ + 4x² + 4x + 8', 'x³ + 4x² + 4x + 8'],
      ['x³ + 6x + 8', 'x³ + 6x + 8']
    ],
    why: [
      'Formula: (A + B)³ = A³ + 3A²B + 3AB² + B³. Here A = x, B = 2: x³ + 3·(x²)·2 + 3·x·(2²) + 2³ = x³ + 6x² + 12x + 8. (x³ + 8 is missing the two triple products!).',
      'Formula: (A + B)³ = A³ + 3A²B + 3AB² + B³. A = x, B = 2: x³ + 3(x²)·2 + 3x(4) + 8 = x³ + 6x² + 12x + 8. Non dimenticare i due tripli prodotti intermedi!'
    ]
  },
  {
    id: 'math-ch5-09',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch5',
    chapterTitle: ['Special Products & Factoring', 'Prodotti notevoli e scomposizione'],
    missionTitle: ['Cube of a Difference (A − B)³', 'Cubo di una differenza (A − B)³'],
    q: [
      'Expand: (2x − 1)³ = ?',
      'Sviluppa: (2x − 1)³ = ?'
    ],
    a: [
      ['8x³ − 12x² + 6x − 1', '8x³ − 12x² + 6x − 1'],
      ['8x³ − 1', '8x³ − 1'],
      ['8x³ − 6x² + 6x − 1', '8x³ − 6x² + 6x − 1'],
      ['8x³ + 12x² − 6x − 1', '8x³ + 12x² − 6x − 1']
    ],
    why: [
      '(2x − 1)³ = (2x)³ + 3(2x)²(−1) + 3(2x)(−1)² + (−1)³ = 8x³ − 3·(4x²) + 3·(2x)·1 − 1 = 8x³ − 12x² + 6x − 1. Notice the alternating signs: + − + −!',
      '(2x − 1)³ = (2x)³ + 3(2x)²(−1) + 3(2x)(−1)² + (−1)³ = 8x³ − 12x² + 6x − 1. Nota l’alternanza tipica dei segni: + − + −!'
    ]
  },
  {
    id: 'math-ch5-10',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch5',
    chapterTitle: ['Special Products & Factoring', 'Prodotti notevoli e scomposizione'],
    missionTitle: ['Total Common Factor Factoring (Raccoglimento totale)', 'Raccoglimento a fattor comune totale'],
    q: [
      'Factor completely by common factor: 6a²b³ − 9a³b² = ?',
      'Scomponi mediante raccoglimento totale a fattor comune: 6a²b³ − 9a³b² = ?'
    ],
    a: [
      ['3a²b²(2b − 3a)', '3a²b²(2b − 3a)'],
      ['3ab(2ab² − 3a²b)', '3ab(2ab² − 3a²b)'],
      ['ab(6ab² − 9a²b)', 'ab(6ab² − 9a²b)'],
      ['3a²b²(2b + 3a)', '3a²b²(2b + 3a)']
    ],
    why: [
      'Find the M.C.D. of all terms: M.C.D.(6a²b³, 9a³b²) = 3a²b². Factor out 3a²b²: 6a²b³ : 3a²b² = 2b; −9a³b² : 3a²b² = −3a. Result: 3a²b²(2b − 3a).',
      'Calcola il M.C.D. dei termini: M.C.D.(6a²b³, 9a³b²) = 3a²b². Raccogliendo 3a²b²: (6a²b³ : 3a²b²) = 2b e (−9a³b² : 3a²b²) = −3a. Risultato: 3a²b²(2b − 3a).'
    ]
  },
  {
    id: 'math-ch5-11',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch5',
    chapterTitle: ['Special Products & Factoring', 'Prodotti notevoli e scomposizione'],
    missionTitle: ['Factoring when a Term is Factored Out Completely', 'Raccoglimento quando un termine è uguale al fattore comune'],
    q: [
      'Factor completely: 4x² + 2x = ?',
      'Scomponi in fattori: 4x² + 2x = ?'
    ],
    a: [
      ['2x(2x + 1)', '2x(2x + 1)'],
      ['2x(2x)', '2x(2x)'],
      ['2x(2x + 0)', '2x(2x + 0)'],
      ['4x(x + 1)', '4x(x + 1)']
    ],
    why: [
      'COMMON STUDENT ERROR! Factoring out 2x leaves 2x : 2x = 1, NOT 0! If you don\'t write +1, distributing gives only 4x², losing the original second term! Result: 2x(2x + 1).',
      'ERRORE FREQUENTISSIMO DEGLI STUDENTI! Dividendo 2x per 2x rimane 1, NON 0! Se ometti +1, ricalcolando il prodotto perdi il secondo termine! Risultato: 2x(2x + 1).'
    ]
  },
  {
    id: 'math-ch5-12',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch5',
    chapterTitle: ['Special Products & Factoring', 'Prodotti notevoli e scomposizione'],
    missionTitle: ['Partial Common Factor Factoring (Raccoglimento parziale)', 'Raccoglimento a fattor comune parziale'],
    q: [
      'Factor by grouping: ax + ay + bx + by = ?',
      'Scomponi mediante raccoglimento parziale: ax + ay + bx + by = ?'
    ],
    a: [
      ['(a + b)(x + y)', '(a + b)(x + y)'],
      ['(ax + by)(a + b)', '(ax + by)(a + b)'],
      ['ab(x + y)', 'ab(x + y)'],
      ['(a + x)(b + y)', '(a + x)(b + y)']
    ],
    why: [
      'Group the first two and the last two: a(x + y) + b(x + y). Now (x + y) is a common binomial factor, so factor it out: (x + y)(a + b).',
      'Raccogli \'a\' nei primi due termini e \'b\' negli ultimi due: a(x + y) + b(x + y). Ora il binomio (x + y) è comune a entrambi: raccoglilo per ottenere (x + y)(a + b).'
    ]
  },
  {
    id: 'math-ch5-13',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch5',
    chapterTitle: ['Special Products & Factoring', 'Prodotti notevoli e scomposizione'],
    missionTitle: ['Difference of Squares Factoring', 'Scomposizione di differenza di due quadrati'],
    q: [
      'Factor completely: 16x² − 25y² = ?',
      'Scomponi in fattori: 16x² − 25y² = ?'
    ],
    a: [
      ['(4x + 5y)(4x − 5y)', '(4x + 5y)(4x − 5y)'],
      ['(4x − 5y)²', '(4x − 5y)²'],
      ['(16x − 25y)(16x + 25y)', '(16x − 25y)(16x + 25y)'],
      ['(4x + 5y)²', '(4x + 5y)²']
    ],
    why: [
      'Recognize the difference of two squares A² − B² = (A + B)(A − B). Here 16x² = (4x)² and 25y² = (5y)², giving (4x + 5y)(4x − 5y).',
      'Riconosci la differenza di due quadrati A² − B² = (A + B)(A − B). 16x² = (4x)² e 25y² = (5y)², quindi si scompone in (4x + 5y)(4x − 5y).'
    ]
  },
  {
    id: 'math-ch5-14',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch5',
    chapterTitle: ['Special Products & Factoring', 'Prodotti notevoli e scomposizione'],
    missionTitle: ['Sum of Squares Irreducibility in ℝ', 'Irriducibilità della somma di quadrati in ℝ'],
    q: [
      'Can the binomial x² + 9 be factored in the real number set ℝ?',
      'Il binomio x² + 9 può essere scomposto in fattori nell’insieme dei numeri reali ℝ?'
    ],
    a: [
      ['No, the sum of two squares A² + B² is irreducible in ℝ', 'No, la somma di due quadrati A² + B² è irriducibile in ℝ'],
      ['Yes, it factors as (x + 3)(x − 3)', 'Sì, si scompone come (x + 3)(x − 3)'],
      ['Yes, it factors as (x + 3)²', 'Sì, si scompone come (x + 3)²'],
      ['Yes, it factors as x(x + 9)', 'Sì, si scompone come x(x + 9)']
    ],
    why: [
      'Classic trap! (x + 3)(x − 3) expands to x² − 9 (difference), not x² + 9! (x + 3)² has the middle term +6x. The sum of two squares A² + B² has no real roots and cannot be factored in ℝ.',
      'Tranello classico! (x + 3)(x − 3) dà x² − 9 (differenza), non x² + 9! (x + 3)² ha il termine +6x. La somma di due quadrati A² + B² non si scompone nei numeri reali ℝ (è irriducibile)!'
    ]
  },
  {
    id: 'math-ch5-15',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch5',
    chapterTitle: ['Special Products & Factoring', 'Prodotti notevoli e scomposizione'],
    missionTitle: ['Recognizing the Square of a Binomial', 'Riconoscimento del quadrato di binomio'],
    q: [
      'Factor the trinomial: x² − 10x + 25 = ?',
      'Scomponi il trinomio: x² − 10x + 25 = ?'
    ],
    a: [
      ['(x − 5)²', '(x − 5)²'],
      ['(x + 5)²', '(x + 5)²'],
      ['(x − 5)(x + 5)', '(x − 5)(x + 5)'],
      ['x(x − 10) + 25', 'x(x − 10) + 25']
    ],
    why: [
      'Check the two squares: x² = (x)² and 25 = (5)². Check the double product: 2 · x · (−5) = −10x. It matches perfectly! So it is (x − 5)²',
      'Controlla i due quadrati: x² = (x)² e 25 = (5)². Controlla il doppio prodotto: 2 · x · (−5) = −10x. Coincide perfettamente, quindi è (x − 5)².'
    ]
  },
  {
    id: 'math-ch5-16',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch5',
    chapterTitle: ['Special Products & Factoring', 'Prodotti notevoli e scomposizione'],
    missionTitle: ['Special Trinomial (Trinomio notevole / speciale)', 'Trinomio speciale di 2° grado (somma e prodotto)'],
    q: [
      'To factor the trinomial x² + 7x + 12 into (x + m)(x + n), what two numbers m and n do we need to find?',
      'Per scomporre il trinomio speciale x² + 7x + 12 nella forma (x + m)(x + n), quali due numeri m e n dobbiamo cercare?'
    ],
    a: [
      ['Two numbers whose sum is 7 and product is 12 (m = 3, n = 4)', 'Due numeri la cui somma è 7 e il prodotto è 12 (m = 3, n = 4)'],
      ['Two numbers whose sum is 12 and product is 7', 'Due numeri la cui somma è 12 e il prodotto è 7'],
      ['Two numbers whose difference is 7', 'Due numeri la cui differenza è 7'],
      ['Two numbers whose squares sum to 12', 'Due numeri la cui somma dei quadrati è 12']
    ],
    why: [
      'In x² + sx + p, s = m + n and p = m · n. The factors of 12 are (1,12), (2,6), (3,4). Notice 3 + 4 = 7 and 3 · 4 = 12! So x² + 7x + 12 = (x + 3)(x + 4).',
      'In x² + sx + p, cerchiamo due numeri con somma s = 7 e prodotto p = 12. Tra i divisori di 12, 3 e 4 soddisfano: 3 + 4 = 7 e 3 · 4 = 12! Quindi (x + 3)(x + 4).'
    ]
  },
  {
    id: 'math-ch5-17',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch5',
    chapterTitle: ['Special Products & Factoring', 'Prodotti notevoli e scomposizione'],
    missionTitle: ['Special Trinomial with Negative Signs', 'Trinomio speciale con segni negativi'],
    q: [
      'Factor: x² − 5x − 14 = ?',
      'Scomponi in fattori: x² − 5x − 14 = ?'
    ],
    a: [
      ['(x − 7)(x + 2)', '(x − 7)(x + 2)'],
      ['(x + 7)(x − 2)', '(x + 7)(x − 2)'],
      ['(x − 5)(x + 2)', '(x − 5)(x + 2)'],
      ['(x − 14)(x + 1)', '(x − 14)(x + 1)']
    ],
    why: [
      'Product is −14 (so numbers have opposite signs: one positive, one negative). Sum is −5 (so the larger absolute value is negative). Numbers are −7 and +2 (−7 · 2 = −14; −7 + 2 = −5). Result: (x − 7)(x + 2).',
      'Il prodotto è −14 (quindi i due numeri sono discordi). La somma è −5 (quindi il numero con modulo maggiore è negativo). I numeri sono −7 e +2 (−7 · 2 = −14 e −7 + 2 = −5). Risultato: (x − 7)(x + 2).'
    ]
  },
  {
    id: 'math-ch5-18',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch5',
    chapterTitle: ['Special Products & Factoring', 'Prodotti notevoli e scomposizione'],
    missionTitle: ['Sum of Cubes Factoring A³ + B³', 'Scomposizione della somma di due cubi A³ + B³'],
    q: [
      'Factor the sum of two cubes: x³ + 8 = ?',
      'Scomponi la somma di due cubi: x³ + 8 = ?'
    ],
    a: [
      ['(x + 2)(x² − 2x + 4)', '(x + 2)(x² − 2x + 4)'],
      ['(x + 2)³', '(x + 2)³'],
      ['(x + 2)(x² + 2x + 4)', '(x + 2)(x² + 2x + 4)'],
      ['(x + 2)(x² − 4)', '(x + 2)(x² − 4)']
    ],
    why: [
      'Formula: A³ + B³ = (A + B)(A² − AB + B²). The second factor is the "false square" (falso quadrato): it has −AB, NOT −2AB! Here A = x and B = 2, so (x + 2)(x² − 2x + 4).',
      'Formula: A³ + B³ = (A + B)(A² − AB + B²). Il secondo fattore è il "falso quadrato": presenta il prodotto semplice con segno opposto (−AB), NON il doppio prodotto! Quindi (x + 2)(x² − 2x + 4).'
    ]
  },
  {
    id: 'math-ch5-19',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch5',
    chapterTitle: ['Special Products & Factoring', 'Prodotti notevoli e scomposizione'],
    missionTitle: ['Difference of Cubes Factoring A³ − B³', 'Scomposizione della differenza di due cubi A³ − B³'],
    q: [
      'Factor the difference of two cubes: a³ − 27 = ?',
      'Scomponi la differenza di due cubi: a³ − 27 = ?'
    ],
    a: [
      ['(a − 3)(a² + 3a + 9)', '(a − 3)(a² + 3a + 9)'],
      ['(a − 3)³', '(a − 3)³'],
      ['(a − 3)(a² − 3a + 9)', '(a − 3)(a² − 3a + 9)'],
      ['(a − 3)(a − 9)', '(a − 3)(a − 9)']
    ],
    why: [
      'Formula: A³ − B³ = (A − B)(A² + AB + B²). With A = a and B = 3: (a − 3)(a² + 3a + 9). Note: the false square (a² + 3a + 9) is always irreducible in ℝ.',
      'Formula: A³ − B³ = (A − B)(A² + AB + B²). Con A = a e B = 3: (a − 3)(a² + 3a + 9). Il falso quadrato è sempre irriducibile in ℝ.'
    ]
  },
  {
    id: 'math-ch5-20',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch5',
    chapterTitle: ['Special Products & Factoring', 'Prodotti notevoli e scomposizione'],
    missionTitle: ['Step-by-Step Factoring Strategy', 'Strategia sequenziale di scomposizione'],
    q: [
      'When you are asked to factor any polynomial, what should ALWAYS be your first step?',
      'Quando devi scomporre un polinomio, quale deve essere SEMPRE il primo passaggio da tentare?'
    ],
    a: [
      ['Check if there is a common factor to factor out totally (raccoglimento a fattor comune totale)', 'Verificare se è possibile eseguire un raccoglimento a fattor comune totale'],
      ['Immediately use the quadratic formula', 'Applicare subito la formula risolutiva'],
      ['Count the number of letters', 'Contare quante lettere diverse compaiono'],
      ['Expand all parentheses', 'Svolgere tutti i calcoli']
    ],
    why: [
      'Golden rule of factoring: ALWAYS check for a common total factor first! Factoring out the M.C.D. simplifies the terms and reveals special products (e.g. 2x² − 8 = 2(x² − 4) = 2(x + 2)(x − 2)).',
      'Regola aurea della scomposizione: controlla SEMPRE prima se puoi raccogliere a fattor comune totale! Raccogliendo il M.C.D. si svelano subito i prodotti notevoli (es. 2x² − 8 = 2(x² − 4) = 2(x+2)(x−2)).'
    ]
  },
  {
    id: 'math-ch5-21',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch5',
    chapterTitle: ['Special Products & Factoring', 'Prodotti notevoli e scomposizione'],
    missionTitle: ['Two-Step Factoring: Total Factoring + Difference of Squares', 'Scomposizione a più passaggi: raccoglimento e differenza di quadrati'],
    q: [
      'Factor completely: 3x³ − 12x = ?',
      'Scomponi completamente: 3x³ − 12x = ?'
    ],
    a: [
      ['3x(x + 2)(x − 2)', '3x(x + 2)(x − 2)'],
      ['3x(x² − 4)', '3x(x² − 4)'],
      ['(3x² + 6x)(x − 2)', '(3x² + 6x)(x − 2)'],
      ['x(3x² − 12)', 'x(3x² − 12)']
    ],
    why: [
      'First step: factor out 3x -> 3x(x² − 4). Second step: recognize the difference of squares x² − 4 = (x + 2)(x − 2). Complete factorization: 3x(x + 2)(x − 2). (3x(x²−4) is not finished!).',
      '1° passaggio: raccogli 3x -> 3x(x² − 4). 2° passaggio: scomponi la differenza di quadrati (x² − 4) -> (x + 2)(x − 2). Risultato completo: 3x(x + 2)(x − 2).'
    ]
  },
  {
    id: 'math-ch5-22',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch5',
    chapterTitle: ['Special Products & Factoring', 'Prodotti notevoli e scomposizione'],
    missionTitle: ['Cube of Binomial Recognition', 'Riconoscimento del cubo di binomio'],
    q: [
      'Which binomial cube produces the polynomial: x³ − 6x² + 12x − 8?',
      'Quale cubo di binomio genera il polinomio: x³ − 6x² + 12x − 8?'
    ],
    a: [
      ['(x − 2)³', '(x − 2)³'],
      ['(x + 2)³', '(x + 2)³'],
      ['(x − 4)³', '(x − 4)³'],
      ['(x² − 2)³', '(x² − 2)³']
    ],
    why: [
      'Check the two cubes: x³ = (x)³ and −8 = (−2)³. Check triple products: 3(x)²(−2) = −6x²; 3(x)(−2)² = +12x. Both match, so it is (x − 2)³.',
      'I due cubi agli estremi sono (x)³ e (−2)³ = −8. I tripli prodotti sono 3(x)²(−2) = −6x² e 3(x)(4) = +12x. Corrispondono perfettamente: (x − 2)³.'
    ]
  },
  {
    id: 'math-ch5-23',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch5',
    chapterTitle: ['Special Products & Factoring', 'Prodotti notevoli e scomposizione'],
    missionTitle: ['Difference of Fourth Powers', 'Differenza di quarte potenze'],
    q: [
      'Factor completely in ℝ: x⁴ − 16 = ?',
      'Scomponi completamente in ℝ: x⁴ − 16 = ?'
    ],
    a: [
      ['(x² + 4)(x + 2)(x − 2)', '(x² + 4)(x + 2)(x − 2)'],
      ['(x² + 4)(x² − 4)', '(x² + 4)(x² − 4)'],
      ['(x + 2)²(x − 2)²', '(x + 2)²(x − 2)²'],
      ['(x − 2)⁴', '(x − 2)⁴']
    ],
    why: [
      'First step: x⁴ − 16 = (x² + 4)(x² − 4). Second step: x² − 4 factors further into (x + 2)(x − 2). Remember that x² + 4 is a sum of squares and cannot be factored further in ℝ! Result: (x² + 4)(x + 2)(x − 2).',
      '1° passaggio: x⁴ − 16 = (x² + 4)(x² − 4). 2° passaggio: x² − 4 si scompone ancora in (x + 2)(x − 2). Invece (x² + 4) è una somma di quadrati e non si scompone in ℝ! Risultato: (x² + 4)(x + 2)(x − 2).'
    ]
  },
  {
    id: 'math-ch5-24',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch5',
    chapterTitle: ['Special Products & Factoring', 'Prodotti notevoli e scomposizione'],
    missionTitle: ['GCD and LCM of Polynomials', 'M.C.D. e m.c.m. tra polinomi'],
    q: [
      'To find the M.C.D. and m.c.m. of several polynomials, what MUST you do before applying the prime factor rules?',
      'Per calcolare il M.C.D. e il m.c.m. tra due o più polinomi, cosa si DEVE fare prima di applicare le regole dei fattori?'
    ],
    a: [
      ['Factor all polynomials completely into irreducible factors', 'Scomporre completamente ciascun polinomio in fattori irriducibili'],
      ['Add the polynomials together', 'Sommare i polinomi tra loro'],
      ['Find the degree of the highest term only', 'Prendere solo il termine di grado massimo'],
      ['Substitute x = 1', 'Sostituire x = 1']
    ],
    why: [
      'Just like finding the GCD of integers requires prime factorization, finding the GCD of polynomials requires factoring them completely into irreducible polynomials first!',
      'Proprio come per i numeri naturali si scompone in fattori primi, per trovare il M.C.D. tra polinomi è indispensabile prima scomporre ciascun polinomio in fattori irriducibili!'
    ]
  },
  {
    id: 'math-ch5-25',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 24,
    missionId: 'math_q_ch5',
    chapterTitle: ['Special Products & Factoring', 'Prodotti notevoli e scomposizione'],
    missionTitle: ['Factorization Check by Multiplication', 'Verifica della scomposizione'],
    q: [
      'How can you easily check whether your polynomial factorization is correct?',
      'Come puoi verificare facilmente se la scomposizione in fattori che hai ottenuto è corretta?'
    ],
    a: [
      ['Multiply the factors back together; the product must reproduce the original polynomial', 'Moltiplicando tra loro i fattori ottenuti; il risultato deve restituire esattamente il polinomio di partenza'],
      ['Divide the factors by 2', 'Dividendo i fattori per 2'],
      ['Check if all coefficients are prime numbers', 'Controllando se tutti i coefficienti sono numeri primi'],
      ['Factorization cannot be checked', 'La scomposizione non si può verificare']
    ],
    why: [
      'Factoring is the inverse operation of multiplication. Multiplying the factors back must give the original expression: if it doesn\'t, a sign or term was missed!',
      'La scomposizione è l’operazione inversa della moltiplicazione: espandendo i fattori con le moltiplicazioni devi riottenere il polinomio di partenza. Se non torna, c’è un errore di calcolo o di segno!'
    ]
  }
];
