import { TaggedQuestion } from '../types';

export const CH1_QUESTIONS: TaggedQuestion[] = [
  {
    id: 'math-ch1-01',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 21,
    missionId: 'math_q_ch1',
    chapterTitle: ['Natural & Integer Numbers', 'Numeri naturali e numeri interi'],
    missionTitle: ['The Set of Natural Numbers ℕ', 'L’insieme dei numeri naturali ℕ'],
    q: [
      'In the Italian textbook standard (Bergamini-Barozzi), what is the first element of the set ℕ of natural numbers?',
      'Nello standard del testo (Bergamini-Barozzi), qual è il primo elemento dell’insieme ℕ dei numeri naturali?'
    ],
    a: [
      ['0 (zero has no predecessor in ℕ)', '0 (lo zero non ha alcun precedente in ℕ)'],
      ['1 (the unit)', '1 (l’unità)'],
      ['−1 (the first negative)', '−1 (il primo negativo)'],
      ['There is no first element', 'Non esiste un primo elemento']
    ],
    why: [
      'In the Italian school standard (Bergamini-Barozzi), ℕ = {0, 1, 2, 3, 4, ...}. Zero is the minimum of ℕ and has no predecessor. Every natural number n has a unique successor (n + 1).',
      'Nel testo Bergamini-Barozzi, ℕ = {0, 1, 2, 3, 4, ...}. Lo zero è il minimo di ℕ e non ha precedente. Ogni numero naturale n ha un unico successivo (n + 1).'
    ]
  },
  {
    id: 'math-ch1-02',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 21,
    missionId: 'math_q_ch1',
    chapterTitle: ['Natural & Integer Numbers', 'Numeri naturali e numeri interi'],
    missionTitle: ['Discrete Nature of ℕ', 'Carattere discreto di ℕ'],
    q: [
      'Why is the set ℕ of natural numbers called "discrete"?',
      'Perché l’insieme ℕ dei numeri naturali è definito "discreto"?'
    ],
    a: [
      ['Between two consecutive natural numbers, there is no other natural number', 'Tra due numeri naturali consecutivi non esiste alcun altro numero naturale'],
      ['Because it contains infinitely many numbers', 'Perché contiene infiniti numeri'],
      ['Because every natural number can be divided by 2', 'Perché ogni numero naturale si può dividere per 2'],
      ['Because its elements cannot be drawn on a line', 'Perché i suoi elementi non si possono rappresentare su una retta']
    ],
    why: [
      'A set is discrete if between any element and its immediate successor there are no intermediate elements. Between 4 and 5 there is no natural number! (Unlike rational numbers ℚ, which are dense).',
      'Un insieme è discreto quando tra un elemento e il suo successivo immediato non cadono altri elementi dell’insieme. Tra 4 e 5 non c’è alcun numero naturale! (A differenza dei razionali ℚ, che sono densi).'
    ]
  },
  {
    id: 'math-ch1-03',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 21,
    missionId: 'math_q_ch1',
    chapterTitle: ['Natural & Integer Numbers', 'Numeri naturali e numeri interi'],
    missionTitle: ['Internal Operations in ℕ', 'Operazioni interne a ℕ'],
    q: [
      'Which operations are always "internal" to ℕ (their result is always a natural number for any pair in ℕ)?',
      'Quali operazioni sono sempre "interne" a ℕ (il risultato appartiene sempre a ℕ per qualsiasi coppia di numeri naturali)?'
    ],
    a: [
      ['Addition and multiplication', 'Addizione e moltiplicazione'],
      ['Addition and subtraction', 'Addizione e sottrazione'],
      ['Multiplication and division', 'Moltiplicazione e divisione'],
      ['Subtraction and division', 'Sottrazione e divisione']
    ],
    why: [
      'The sum and product of two natural numbers are always natural numbers. Subtraction is not internal (e.g. 3 − 7 ∉ ℕ) and division is not internal (e.g. 7 : 2 ∉ ℕ).',
      'La somma e il prodotto di due naturali danno sempre un naturale. La sottrazione non è interna (es. 3 − 7 ∉ ℕ) e la divisione non è interna (es. 7 : 2 ∉ ℕ).'
    ]
  },
  {
    id: 'math-ch1-04',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 21,
    missionId: 'math_q_ch1',
    chapterTitle: ['Natural & Integer Numbers', 'Numeri naturali e numeri interi'],
    missionTitle: ['Division with Remainder', 'Divisione con resto'],
    q: [
      'In the Euclidean division between natural numbers a and b (with b ≠ 0), which condition MUST the remainder r satisfy?',
      'Nella divisione euclidea tra due numeri naturali a e b (con b ≠ 0), quale condizione DEVE soddisfare il resto r?'
    ],
    a: [
      ['0 ≤ r < b', '0 ≤ r < b'],
      ['r = 0', 'r = 0'],
      ['r ≥ b', 'r ≥ b'],
      ['r can be any number', 'r può essere qualsiasi numero']
    ],
    why: [
      'In a = b · q + r, the remainder r is always non-negative and strictly smaller than the divisor b (0 ≤ r < b). If r = 0, we say that a is exactly divisible by b.',
      'Nell’uguaglianza a = b · q + r, il resto r è sempre maggiore o uguale a 0 e strettamente minore del divisore b (0 ≤ r < b). Se r = 0, diciamo che a è divisibile per b.'
    ]
  },
  {
    id: 'math-ch1-05',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 21,
    missionId: 'math_q_ch1',
    chapterTitle: ['Natural & Integer Numbers', 'Numeri naturali e numeri interi'],
    missionTitle: ['Properties of Operations', 'Proprietà delle operazioni'],
    q: [
      'Which property of operations is represented by the formula: a · (b + c) = a · b + a · c?',
      'Quale proprietà delle operazioni è rappresentata dalla formula: a · (b + c) = a · b + a · c?'
    ],
    a: [
      ['Distributive property of multiplication over addition', 'Proprietà distributiva della moltiplicazione rispetto all’addizione'],
      ['Associative property of multiplication', 'Proprietà associativa della moltiplicazione'],
      ['Commutative property of addition', 'Proprietà commutativa dell’addizione'],
      ['Invariant property', 'Proprietà invariantiva']
    ],
    why: [
      'Multiplying a factor by a sum gives the same result as multiplying the factor by each term and adding the partial products: this is the distributive property.',
      'Moltiplicare un fattore per una somma equivale a moltiplicare il fattore per ciascun addendo e sommare i prodotti parziali: è la proprietà distributiva.'
    ]
  },
  {
    id: 'math-ch1-06',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 21,
    missionId: 'math_q_ch1',
    chapterTitle: ['Natural & Integer Numbers', 'Numeri naturali e numeri interi'],
    missionTitle: ['Neutral and Absorbing Elements', 'Elemento neutro e assorbente'],
    q: [
      'What are the neutral element for addition and the absorbing element for multiplication in ℕ?',
      'Quali sono l’elemento neutro dell’addizione e l’elemento assorbente della moltiplicazione in ℕ?'
    ],
    a: [
      ['0 is neutral for addition; 0 is absorbing for multiplication', '0 è neutro per l’addizione; 0 è assorbente per la moltiplicazione'],
      ['1 is neutral for addition; 0 is absorbing for multiplication', '1 è neutro per l’addizione; 0 è assorbente per la moltiplicazione'],
      ['0 is neutral for addition; 1 is absorbing for multiplication', '0 è neutro per l’addizione; 1 è assorbente per la moltiplicazione'],
      ['1 is neutral for addition; 1 is absorbing for multiplication', '1 è neutro per l’addizione; 1 è assorbente per la moltiplicazione']
    ],
    why: [
      'Adding 0 leaves the number unchanged (n + 0 = n, neutral). Multiplying any number by 0 always yields 0 (n · 0 = 0, absorbing).',
      'Aggiungere 0 lascia il numero invariato (n + 0 = n, neutro). Moltiplicare qualsiasi numero per 0 dà sempre 0 (n · 0 = 0, assorbente).'
    ]
  },
  {
    id: 'math-ch1-07',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 21,
    missionId: 'math_q_ch1',
    chapterTitle: ['Natural & Integer Numbers', 'Numeri naturali e numeri interi'],
    missionTitle: ['Power of a Power', 'Potenza di potenza'],
    q: [
      'Calculate: (2³)² = ?',
      'Calcola: (2³)² = ?'
    ],
    a: [
      ['2⁶ = 64', '2⁶ = 64'],
      ['2⁵ = 32', '2⁵ = 32'],
      ['2⁹ = 512', '2⁹ = 512'],
      ['4⁶ = 4096', '4⁶ = 4096']
    ],
    why: [
      'Rule for power of a power: (aᵐ)ⁿ = aᵐ·ⁿ. Here (2³)² = 2³·² = 2⁶ = 64. Watch out: exponents multiply, they do not add (which is for product of powers with the same base)!',
      'Regola della potenza di potenza: (aᵐ)ⁿ = aᵐ·ⁿ. Qui (2³)² = 2³·² = 2⁶ = 64. Attenzione al tranello: gli esponenti si moltiplicano, non si sommano (che vale invece per il prodotto con stessa base)!'
    ]
  },
  {
    id: 'math-ch1-08',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 21,
    missionId: 'math_q_ch1',
    chapterTitle: ['Natural & Integer Numbers', 'Numeri naturali e numeri interi'],
    missionTitle: ['Special Exponents: Zero and Base Zero', 'Esponenti particolari: zero e base zero'],
    q: [
      'What is the value of 5⁰, and what about 0⁰?',
      'Quanto vale 5⁰, e che cosa si dice invece di 0⁰?'
    ],
    a: [
      ['5⁰ = 1; 0⁰ is undefined / has no mathematical meaning', '5⁰ = 1; 0⁰ è priva di significato (indeterminata)'],
      ['5⁰ = 0; 0⁰ = 0', '5⁰ = 0; 0⁰ = 0'],
      ['5⁰ = 5; 0⁰ = 1', '5⁰ = 5; 0⁰ = 1'],
      ['5⁰ = 1; 0⁰ = 1', '5⁰ = 1; 0⁰ = 1']
    ],
    why: [
      'Any non-zero base raised to the power 0 equals 1 (a⁰ = 1 for a ≠ 0). However, 0⁰ is an indeterminate form with no single consistent value.',
      'Qualsiasi base diversa da zero elevata a 0 vale 1 (a⁰ = 1 per a ≠ 0). Invece 0⁰ è una forma priva di significato univoco in aritmetica.'
    ]
  },
  {
    id: 'math-ch1-09',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 21,
    missionId: 'math_q_ch1',
    chapterTitle: ['Natural & Integer Numbers', 'Numeri naturali e numeri interi'],
    missionTitle: ['Product of Powers with Same Exponent', 'Prodotto di potenze con stesso esponente'],
    q: [
      'Simplify: 2⁴ · 5⁴ = ?',
      'Semplifica: 2⁴ · 5⁴ = ?'
    ],
    a: [
      ['10⁴ = 10 000', '10⁴ = 10 000'],
      ['10⁸', '10⁸'],
      ['7⁴', '7⁴'],
      ['20⁴', '20⁴']
    ],
    why: [
      'Property of powers with the same exponent: aⁿ · bⁿ = (a · b)ⁿ. Thus 2⁴ · 5⁴ = (2 · 5)⁴ = 10⁴ = 10 000. Do not add the exponents when the bases are different!',
      'Proprietà delle potenze con stesso esponente: aⁿ · bⁿ = (a · b)ⁿ. Quindi 2⁴ · 5⁴ = (2 · 5)⁴ = 10⁴ = 10 000. Non sommare gli esponenti se le basi sono diverse!'
    ]
  },
  {
    id: 'math-ch1-10',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 21,
    missionId: 'math_q_ch1',
    chapterTitle: ['Natural & Integer Numbers', 'Numeri naturali e numeri interi'],
    missionTitle: ['Divisibility Rule for 3 and 9', 'Criterio di divisibilità per 3 e per 9'],
    q: [
      'When is a natural number divisible by 3 (or by 9)?',
      'Quando un numero naturale è divisibile per 3 (o per 9)?'
    ],
    a: [
      ['When the sum of all its digits is a multiple of 3 (or 9)', 'Quando la somma delle sue cifre è un multiplo di 3 (o di 9)'],
      ['When its last digit is 3 or 9', 'Quando la sua ultima cifra è 3 o 9'],
      ['When the number is odd', 'Quando il numero è dispari'],
      ['When its last two digits form a multiple of 3', 'Quando le sue ultime due cifre formano un multiplo di 3']
    ],
    why: [
      'A number is divisible by 3 (or 9) if and only if the sum of its decimal digits is divisible by 3 (or 9). For example, 738: 7 + 3 + 8 = 18, which is divisible by 9 and 3!',
      'Un numero è divisibile per 3 (o 9) se e solo se la somma delle sue cifre è divisibile per 3 (o 9). Esempio: 738 -> 7 + 3 + 8 = 18, multiplo di 9 e di 3!'
    ]
  },
  {
    id: 'math-ch1-11',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 21,
    missionId: 'math_q_ch1',
    chapterTitle: ['Natural & Integer Numbers', 'Numeri naturali e numeri interi'],
    missionTitle: ['Prime Factorization', 'Scomposizione in fattori primi'],
    q: [
      'What is the prime factorization of 72?',
      'Qual è la scomposizione in fattori primi del numero 72?'
    ],
    a: [
      ['2³ · 3²', '2³ · 3²'],
      ['2² · 3³', '2² · 3³'],
      ['8 · 9', '8 · 9'],
      ['2⁴ · 3', '2⁴ · 3']
    ],
    why: [
      '72 : 2 = 36; 36 : 2 = 18; 18 : 2 = 9; 9 : 3 = 3; 3 : 3 = 1. We have three 2s and two 3s, so 72 = 2³ · 3² (8 · 9 = 72). 8 · 9 is not a prime factorization because 8 and 9 are composite!',
      '72 : 2 = 36; 36 : 2 = 18; 18 : 2 = 9; 9 : 3 = 3; 3 : 3 = 1. Quindi 72 = 2³ · 3² (8 · 9 = 72). Attenzione: 8 · 9 non è una scomposizione in primi perché 8 e 9 sono composti!'
    ]
  },
  {
    id: 'math-ch1-12',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 21,
    missionId: 'math_q_ch1',
    chapterTitle: ['Natural & Integer Numbers', 'Numeri naturali e numeri interi'],
    missionTitle: ['Rule for GCD (M.C.D.)', 'Regola del M.C.D.'],
    q: [
      'How do you find the Greatest Common Divisor (M.C.D.) of two numbers from their prime factorizations?',
      'Come si calcola il Massimo Comune Divisore (M.C.D.) di due numeri a partire dalla loro scomposizione in fattori primi?'
    ],
    a: [
      ['Product of only common prime factors, each taken once with the lowest exponent', 'Prodotto dei soli fattori primi comuni, presi una sola volta con il minimo esponente'],
      ['Product of all prime factors with the highest exponent', 'Prodotto di tutti i fattori primi con il massimo esponente'],
      ['Sum of all prime factors', 'Somma di tutti i fattori primi'],
      ['Product of non-common factors', 'Prodotto dei fattori non comuni']
    ],
    why: [
      'M.C.D. takes ONLY common prime factors with the MINIMUM exponent, because a common divisor must divide both numbers completely.',
      'Il M.C.D. prende SOLO i fattori primi comuni con il MINIMO esponente, perché un divisore comune deve dividere entrambi i numeri.'
    ]
  },
  {
    id: 'math-ch1-13',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 21,
    missionId: 'math_q_ch1',
    chapterTitle: ['Natural & Integer Numbers', 'Numeri naturali e numeri interi'],
    missionTitle: ['Rule for LCM (m.c.m.)', 'Regola del m.c.m.'],
    q: [
      'Find the least common multiple (m.c.m.) of 12 and 18.',
      'Calcola il minimo comune multiplo (m.c.m.) di 12 e 18.'
    ],
    a: [
      ['36', '36'],
      ['6', '6'],
      ['72', '72'],
      ['216', '216']
    ],
    why: [
      '12 = 2² · 3; 18 = 2 · 3². For m.c.m. take all factors (common and uncommon) with highest exponent: 2² · 3² = 4 · 9 = 36. (6 is the M.C.D., not the m.c.m.!).',
      '12 = 2² · 3; 18 = 2 · 3². Per il m.c.m. prendiamo tutti i fattori con il massimo esponente: 2² · 3² = 4 · 9 = 36. (6 è il M.C.D., non il m.c.m.!).'
    ]
  },
  {
    id: 'math-ch1-14',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 21,
    missionId: 'math_q_ch1',
    chapterTitle: ['Natural & Integer Numbers', 'Numeri naturali e numeri interi'],
    missionTitle: ['Coprime Numbers (Primi tra loro)', 'Numeri primi tra loro'],
    q: [
      'Two natural numbers a and b are called "coprime" (primi tra loro) when:',
      'Due numeri naturali a e b si dicono "primi tra loro" (coprimi) quando:'
    ],
    a: [
      ['Their Greatest Common Divisor is 1: M.C.D.(a, b) = 1', 'Il loro Massimo Comune Divisore è 1: M.C.D.(a, b) = 1'],
      ['Both numbers are prime numbers', 'Entrambi i numeri sono numeri primi'],
      ['Their difference is 1', 'La loro differenza è 1'],
      ['Their least common multiple is 1', 'Il loro minimo comune multiplo è 1']
    ],
    why: [
      'Numbers are coprime if they share no common divisors other than 1. They do NOT need to be prime themselves! For instance, 8 (composite) and 9 (composite) are coprime because M.C.D.(8, 9) = 1.',
      'Due numeri sono primi tra loro se non hanno divisori comuni oltre a 1. NON serve che siano primi singolarmente! Ad esempio 8 e 9 sono entrambi composti, ma M.C.D.(8, 9) = 1.'
    ]
  },
  {
    id: 'math-ch1-15',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 21,
    missionId: 'math_q_ch1',
    chapterTitle: ['Natural & Integer Numbers', 'Numeri naturali e numeri interi'],
    missionTitle: ['Absolute Value (Modulo) in ℤ', 'Valore assoluto (modulo) in ℤ'],
    q: [
      'What is the absolute value (modulus) |−7| of the integer −7, and what does it represent geometrically?',
      'Quanto vale il valore assoluto |−7| del numero intero −7, e cosa rappresenta geometricamente?'
    ],
    a: [
      ['7, it represents the distance from the origin 0 on the number line', '7, rappresenta la distanza dall’origine 0 sulla retta numerica'],
      ['−7, it represents the negative position', '−7, rappresenta la posizione negativa'],
      ['0, because signs cancel out', '0, perché i segni si annullano'],
      ['14, twice the number', '14, il doppio del numero']
    ],
    why: [
      'The absolute value |x| is the number without its sign, always ≥ 0. Geometrically, it is the distance between the point representing x and the origin 0.',
      'Il valore assoluto |x| è il numero privato del segno, sempre ≥ 0. Geometricamente misura la distanza del punto dall’origine 0 sulla retta dei numeri.'
    ]
  },
  {
    id: 'math-ch1-16',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 21,
    missionId: 'math_q_ch1',
    chapterTitle: ['Natural & Integer Numbers', 'Numeri naturali e numeri interi'],
    missionTitle: ['Comparing Negative Integers', 'Confronto tra numeri interi negativi'],
    q: [
      'Which comparison between integers is correct?',
      'Quale confronto tra numeri interi è corretto?'
    ],
    a: [
      ['−8 < −3', '−8 < −3'],
      ['−8 > −3', '−8 > −3'],
      ['−5 > 0', '−5 > 0'],
      ['−1 < −10', '−1 < −10']
    ],
    why: [
      'On the oriented number line, numbers increase from left to right. Since −8 is further left than −3, −8 < −3. Between two negative numbers, the one with the greater absolute value is smaller!',
      'Sulla retta orientata i numeri crescono andando da sinistra a destra. Poiché −8 si trova più a sinistra di −3, −8 < −3. Tra due numeri negativi, il più piccolo è quello con valore assoluto maggiore!'
    ]
  },
  {
    id: 'math-ch1-17',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 21,
    missionId: 'math_q_ch1',
    chapterTitle: ['Natural & Integer Numbers', 'Numeri naturali e numeri interi'],
    missionTitle: ['Addition of Concordant and Discordant Integers', 'Somma di interi concordi e discordi'],
    q: [
      'Calculate the algebraic sum: (−12) + (+5) = ?',
      'Calcola la somma algebrica: (−12) + (+5) = ?'
    ],
    a: [
      ['−7', '−7'],
      ['+7', '+7'],
      ['−17', '−17'],
      ['+17', '+17']
    ],
    why: [
      'To add two discordant numbers, take the sign of the one with the larger absolute value (here −12 has larger modulus, so −) and subtract their moduli: 12 − 5 = 7, giving −7.',
      'Per sommare due numeri discordi, si prende il segno del numero con valore assoluto maggiore (qui 12 > 5, quindi −) e si calcola la differenza dei moduli: 12 − 5 = 7, quindi −7.'
    ]
  },
  {
    id: 'math-ch1-18',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 21,
    missionId: 'math_q_ch1',
    chapterTitle: ['Natural & Integer Numbers', 'Numeri naturali e numeri interi'],
    missionTitle: ['Rule of Signs in Multiplication', 'Regola dei segni nella moltiplicazione'],
    q: [
      'Calculate: (−4) · (−6) = ?',
      'Calcola: (−4) · (−6) = ?'
    ],
    a: [
      ['+24', '+24'],
      ['−24', '−24'],
      ['−10', '−10'],
      ['+10', '+10']
    ],
    why: [
      'Rule of signs for multiplication: minus times minus equals plus (− · − = +). Since 4 · 6 = 24, the product is +24.',
      'Regola dei segni per la moltiplicazione: meno per meno fa più (− · − = +). Poiché 4 · 6 = 24, il risultato è +24.'
    ]
  },
  {
    id: 'math-ch1-19',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 21,
    missionId: 'math_q_ch1',
    chapterTitle: ['Natural & Integer Numbers', 'Numeri naturali e numeri interi'],
    missionTitle: ['Powers of Negative Numbers and Parentheses', 'Potenze con base negativa e parentesi'],
    q: [
      'What is the difference between (−3)² and −3²?',
      'Qual è la differenza di valore tra (−3)² e −3²?'
    ],
    a: [
      ['(−3)² = +9, while −3² = −9', '(−3)² = +9, mentre −3² = −9'],
      ['Both equal +9', 'Entrambi valgono +9'],
      ['Both equal −9', 'Entrambi valgono −9'],
      ['(−3)² = −9, while −3² = +9', '(−3)² = −9, mentre −3² = +9']
    ],
    why: [
      'Classic student trap! In (−3)², the exponent 2 applies to the entire base including the minus: (−3) · (−3) = +9. In −3², the exponent 2 applies ONLY to 3, so −(3 · 3) = −9!',
      'Tranello classico degli studenti! In (−3)² l’esponente 2 si applica a tutta la base compreso il segno: (−3) · (−3) = +9. In −3² l’esponente 2 si applica solo al 3: −(3 · 3) = −9!'
    ]
  },
  {
    id: 'math-ch1-20',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 21,
    missionId: 'math_q_ch1',
    chapterTitle: ['Natural & Integer Numbers', 'Numeri naturali e numeri interi'],
    missionTitle: ['Odd Exponents with Negative Base', 'Esponente dispari con base negativa'],
    q: [
      'Calculate: (−2)⁵ = ?',
      'Calcola: (−2)⁵ = ?'
    ],
    a: [
      ['−32', '−32'],
      ['+32', '+32'],
      ['−10', '−10'],
      ['+10', '+10']
    ],
    why: [
      'A negative base raised to an odd exponent always retains a negative sign: (−)⁵ = −. 2⁵ = 32, so (−2)⁵ = −32.',
      'Una base negativa elevata a un esponente dispari dà sempre un risultato negativo: (−)⁵ = −. Poiché 2⁵ = 32, (−2)⁵ = −32.'
    ]
  },
  {
    id: 'math-ch1-21',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 21,
    missionId: 'math_q_ch1',
    chapterTitle: ['Natural & Integer Numbers', 'Numeri naturali e numeri interi'],
    missionTitle: ['Opposite Numbers', 'Numeri opposti'],
    q: [
      'What is the sum of two opposite integers (+a and −a)?',
      'Quanto vale la somma di due numeri interi opposti (+a e −a)?'
    ],
    a: [
      ['Always 0', 'Sempre 0'],
      ['Always 1', 'Sempre 1'],
      ['2a', '2a'],
      ['a²', 'a²']
    ],
    why: [
      'Opposite numbers have the same absolute value but opposite signs. Their sum is always zero: (+a) + (−a) = 0.',
      'I numeri opposti hanno lo stesso valore assoluto ma segni discordi. La loro somma dà sempre zero: (+a) + (−a) = 0.'
    ]
  },
  {
    id: 'math-ch1-22',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 21,
    missionId: 'math_q_ch1',
    chapterTitle: ['Natural & Integer Numbers', 'Numeri naturali e numeri interi'],
    missionTitle: ['Order of Operations with Integers', 'Ordine delle operazioni con gli interi'],
    q: [
      'Evaluate the expression: 15 − 3 · [4 − (−2)] = ?',
      'Calcola il valore dell’espressione: 15 − 3 · [4 − (−2)] = ?'
    ],
    a: [
      ['−3', '−3'],
      ['+72', '+72'],
      ['9', '9'],
      ['−21', '−21']
    ],
    why: [
      'First solve inside brackets: 4 − (−2) = 4 + 2 = 6. Next perform multiplication: 3 · 6 = 18. Finally subtract: 15 − 18 = −3.',
      'Prima risolvi dentro le parentesi: 4 − (−2) = 4 + 2 = 6. Poi esegui la moltiplicazione: 3 · 6 = 18. Infine sottrai: 15 − 18 = −3.'
    ]
  },
  {
    id: 'math-ch1-23',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 21,
    missionId: 'math_q_ch1',
    chapterTitle: ['Natural & Integer Numbers', 'Numeri naturali e numeri interi'],
    missionTitle: ['Quotient of Powers with Integer Bases', 'Quoziente di potenze con basi intere'],
    q: [
      'Simplify: (−5)⁷ : (−5)⁴ = ?',
      'Semplifica: (−5)⁷ : (−5)⁴ = ?'
    ],
    a: [
      ['(−5)³ = −125', '(−5)³ = −125'],
      ['(−5)³ = +125', '(−5)³ = +125'],
      ['(−5)¹¹', '(−5)¹¹'],
      ['+125', '+125']
    ],
    why: [
      'Property of quotient of powers with same base: aᵐ : aⁿ = aᵐ⁻ⁿ. Here 7 − 4 = 3, so (−5)³ = −125 (odd power of a negative base is negative).',
      'Proprietà del quoziente di potenze con stessa base: aᵐ : aⁿ = aᵐ⁻ⁿ. Gli esponenti si sottraggono: 7 − 4 = 3, quindi (−5)³ = −125.'
    ]
  },
  {
    id: 'math-ch1-24',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 21,
    missionId: 'math_q_ch1',
    chapterTitle: ['Natural & Integer Numbers', 'Numeri naturali e numeri interi'],
    missionTitle: ['Zero Product Property (Legge di annullamento del prodotto)', 'Legge di annullamento del prodotto'],
    q: [
      'According to the zero product property, if a · b = 0, what can we conclude?',
      'In base alla legge di annullamento del prodotto, se a · b = 0, che cosa possiamo affermare con certezza?'
    ],
    a: [
      ['At least one between a and b must be zero (a = 0 or b = 0)', 'Almeno uno tra a e b deve essere uguale a zero (a = 0 oppure b = 0)'],
      ['Both a and b must be zero at the same time', 'Sia a sia b devono essere contemporaneamente uguali a zero'],
      ['Neither a nor b can be zero', 'Né a né b possono essere nulli'],
      ['a must be positive and b must be negative', 'a deve essere positivo e b deve essere negativo']
    ],
    why: [
      'In any number field, a product is zero if and only if at least one of the factors is zero. This fundamental theorem will be crucial for solving equations!',
      'Un prodotto è uguale a zero se e solo se almeno uno dei suoi fattori è zero. Questa proprietà fondamentale è il cardine per la risoluzione delle equazioni!'
    ]
  },
  {
    id: 'math-ch1-25',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 21,
    missionId: 'math_q_ch1',
    chapterTitle: ['Natural & Integer Numbers', 'Numeri naturali e numeri interi'],
    missionTitle: ['GCD and LCM Relationship', 'Relazione tra M.C.D. e m.c.m.'],
    q: [
      'For any two natural numbers a and b, what is the value of M.C.D.(a, b) · m.c.m.(a, b)?',
      'Per due qualunque numeri naturali a e b, a che cosa equivale il prodotto M.C.D.(a, b) · m.c.m.(a, b)?'
    ],
    a: [
      ['a · b (the product of the two numbers)', 'a · b (il prodotto dei due numeri)'],
      ['a + b (the sum of the two numbers)', 'a + b (la somma dei due numeri)'],
      ['(a · b)²', '(a · b)²'],
      ['1', '1']
    ],
    why: [
      'Theorem: M.C.D.(a, b) · m.c.m.(a, b) = a · b. In prime factorizations, each prime factor p appears with min exponent in M.C.D. and max exponent in m.c.m.; their sum of exponents is min + max = total in a · b!',
      'Teorema: M.C.D.(a, b) · m.c.m.(a, b) = a · b. Nella scomposizione in fattori primi, ogni fattore è preso con esponente minimo nel M.C.D. e massimo nel m.c.m.; la somma degli esponenti è proprio min + max!'
    ]
  }
];
