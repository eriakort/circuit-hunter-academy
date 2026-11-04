import { TaggedQuestion } from '../types';

export const CH2_QUESTIONS: TaggedQuestion[] = [
  {
    id: 'math-ch2-01',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 22,
    missionId: 'math_q_ch2',
    chapterTitle: ['Rational & Real Numbers', 'Numeri razionali e numeri reali'],
    missionTitle: ['Definition of Rational Numbers ℚ', 'Definizione di numero razionale ℚ'],
    q: [
      'What is a rational number?',
      'Che cos’è un numero razionale?'
    ],
    a: [
      ['A number that can be expressed as a quotient of two integers m/n with n ≠ 0', 'Un numero che può essere espresso come frazione m/n con m, n interi e n ≠ 0'],
      ['Any number that has an infinite non-repeating decimal expansion', 'Qualunque numero con cifre decimali infinite non periodiche'],
      ['Only positive fractions with numerator smaller than denominator', 'Solo le frazioni positive in cui il numeratore è minore del denominatore'],
      ['Only numbers that do not have any decimals', 'Solo i numeri che non hanno cifre decimali']
    ],
    why: [
      'The set ℚ is the set of all quotients m/n where m, n ∈ ℤ and n ≠ 0. The symbol ℚ comes from the word "quoziente" (quotient).',
      'L’insieme ℚ è formato da tutti i numeri che si possono scrivere come rapporto m/n con m ed n interi e n ≠ 0. La lettera ℚ deriva dalla parola "quoziente".'
    ]
  },
  {
    id: 'math-ch2-02',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 22,
    missionId: 'math_q_ch2',
    chapterTitle: ['Rational & Real Numbers', 'Numeri razionali e numeri reali'],
    missionTitle: ['Proper, Improper and Apparent Fractions', 'Frazioni proprie, improprie e apparenti'],
    q: [
      'Which fraction is "apparent"?',
      'Quale tra queste è una frazione "apparente"?'
    ],
    a: [
      ['15/5', '15/5'],
      ['3/7', '3/7'],
      ['7/3', '7/3'],
      ['5/12', '5/12']
    ],
    why: [
      'A fraction is apparent when the numerator is a multiple of the denominator, so it simplifies directly to an integer: 15/5 = 3! (3/7 is proper, 7/3 is improper).',
      'Una frazione si dice apparente quando il numeratore è un multiplo esatto del denominatore, per cui equivale a un numero intero: 15/5 = 3! (3/7 è propria, 7/3 è impropria).'
    ]
  },
  {
    id: 'math-ch2-03',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 22,
    missionId: 'math_q_ch2',
    chapterTitle: ['Rational & Real Numbers', 'Numeri razionali e numeri reali'],
    missionTitle: ['Invariant Property of Fractions', 'Proprietà invariantiva delle frazioni'],
    q: [
      'What does the invariant property of fractions state?',
      'Che cosa afferma la proprietà invariantiva delle frazioni?'
    ],
    a: [
      ['Multiplying or dividing both numerator and denominator by the same non-zero number yields an equivalent fraction', 'Moltiplicando o dividendo numeratore e denominatore per uno stesso numero diverso da zero, il valore della frazione non cambia'],
      ['Adding the same number to numerator and denominator preserves the fraction', 'Aggiungendo lo stesso numero a numeratore e denominatore la frazione rimane uguale'],
      ['The numerator can always be swapped with the denominator', 'Si può sempre scambiare il numeratore con il denominatore'],
      ['Squaring numerator and denominator keeps the fraction equal', 'Elevando al quadrato numeratore e denominatore la frazione resta uguale']
    ],
    why: [
      'Multiplying or dividing top and bottom by k ≠ 0 is equivalent to multiplying by (k/k = 1). For example, 3/4 = (3·2)/(4·2) = 6/8. Adding a number does NOT work: 1/2 ≠ (1+1)/(2+1) = 2/3!',
      'Moltiplicando o dividendo sopra e sotto per k ≠ 0 stiamo moltiplicando per (k/k = 1). Es. 3/4 = (3·2)/(4·2) = 6/8. Attenzione: SOMMARE un numero non conserva il valore: 1/2 ≠ 2/3!'
    ]
  },
  {
    id: 'math-ch2-04',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 22,
    missionId: 'math_q_ch2',
    chapterTitle: ['Rational & Real Numbers', 'Numeri razionali e numeri reali'],
    missionTitle: ['Simplifying to Lowest Terms', 'Riduzione ai minimi termini'],
    q: [
      'To reduce the fraction 84/126 to its lowest terms in a single step, what number should you divide numerator and denominator by?',
      'Per ridurre la frazione 84/126 ai minimi termini in un unico passaggio, per quale numero devi dividere numeratore e denominatore?'
    ],
    a: [
      ['42 (their Greatest Common Divisor)', '42 (il loro Massimo Comune Divisore)'],
      ['2', '2'],
      ['6', '6'],
      ['14', '14']
    ],
    why: [
      'Dividing by M.C.D.(84, 126) simplifies to lowest terms immediately. 84 = 2²·3·7; 126 = 2·3²·7. M.C.D. = 2·3·7 = 42. 84/42 = 2 and 126/42 = 3, so 84/126 = 2/3.',
      'Dividendo per il M.C.D.(84, 126) si ottiene subito la frazione irriducibile. M.C.D.(84, 126) = 2 · 3 · 7 = 42. Dividendo: 84:42 = 2 e 126:42 = 3, ottenendo 2/3.'
    ]
  },
  {
    id: 'math-ch2-05',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 22,
    missionId: 'math_q_ch2',
    chapterTitle: ['Rational & Real Numbers', 'Numeri razionali e numeri reali'],
    missionTitle: ['Cross-Multiplication for Comparison', 'Confronto con prodotto incrociato'],
    q: [
      'Which fraction is greater: 5/7 or 7/10?',
      'Quale frazione è maggiore: 5/7 o 7/10?'
    ],
    a: [
      ['5/7 (because 5 · 10 = 50 > 7 · 7 = 49)', '5/7 (perché 5 · 10 = 50 > 7 · 7 = 49)'],
      ['7/10 (because both numbers 7 and 10 are larger)', '7/10 (perché sia 7 sia 10 sono numeri più grandi)'],
      ['They are exactly equal', 'Sono esattamente uguali'],
      ['Cannot be compared without a calculator', 'Non si possono confrontare senza calcolatrice']
    ],
    why: [
      'Cross-multiplication rule: a/b > c/d ⇔ a · d > b · c (with b, d > 0). Here 5 · 10 = 50 and 7 · 7 = 49. Since 50 > 49, 5/7 > 7/10!',
      'Regola del prodotto incrociato: a/b > c/d ⇔ a · d > b · c (con b, d > 0). 5 · 10 = 50 e 7 · 7 = 49. Poiché 50 > 49, ne segue che 5/7 > 7/10!'
    ]
  },
  {
    id: 'math-ch2-06',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 22,
    missionId: 'math_q_ch2',
    chapterTitle: ['Rational & Real Numbers', 'Numeri razionali e numeri reali'],
    missionTitle: ['Density of Rational Numbers ℚ', 'La densità dell’insieme ℚ'],
    q: [
      'What does it mean that the set ℚ of rational numbers is "dense"?',
      'Che cosa significa che l’insieme ℚ dei numeri razionali è "denso"?'
    ],
    a: [
      ['Between any two distinct rational numbers there is always another rational number', 'Tra due numeri razionali distinti qualsiasi esiste sempre un altro numero razionale'],
      ['Rational numbers have heavy weights', 'I numeri razionali hanno un peso matematico elevato'],
      ['All rational numbers are integers', 'Tutti i numeri razionali sono numeri interi'],
      ['There are no gaps at all on the line', 'Non esistono buchi sulla retta']
    ],
    why: [
      'Between any two distinct rationals r₁ and r₂, the midpoint (r₁ + r₂)/2 is also rational and strictly between them. Thus there are infinitely many rationals between any two! (Note: ℚ still has gaps: the irrational numbers).',
      'Dati due razionali r₁ e r₂, la loro media aritmetica (r₁ + r₂)/2 è sempre un numero razionale compreso tra loro. Quindi tra due razionali ci sono infiniti altri razionali!'
    ]
  },
  {
    id: 'math-ch2-07',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 22,
    missionId: 'math_q_ch2',
    chapterTitle: ['Rational & Real Numbers', 'Numeri razionali e numeri reali'],
    missionTitle: ['Addition of Fractions', 'Addizione di frazioni'],
    q: [
      'Calculate: 2/3 + 3/4 − 1/6 = ?',
      'Calcola: 2/3 + 3/4 − 1/6 = ?'
    ],
    a: [
      ['5/4', '5/4'],
      ['4/1', '4/1'],
      ['17/12', '17/12'],
      ['1/2', '1/2']
    ],
    why: [
      'Common denominator is m.c.m.(3, 4, 6) = 12. Convert: (2·4)/12 + (3·3)/12 − (1·2)/12 = (8 + 9 − 2)/12 = 15/12. Dividing by 3 simplifies to 5/4.',
      'Il denominatore comune è m.c.m.(3, 4, 6) = 12. Calcola: (8 + 9 − 2)/12 = 15/12. Semplificando per 3 si ottiene 5/4.'
    ]
  },
  {
    id: 'math-ch2-08',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 22,
    missionId: 'math_q_ch2',
    chapterTitle: ['Rational & Real Numbers', 'Numeri razionali e numeri reali'],
    missionTitle: ['Division of Fractions and Reciprocal', 'Divisione di frazioni e reciproco'],
    q: [
      'Calculate: (4/9) : (8/15) = ?',
      'Calcola: (4/9) : (8/15) = ?'
    ],
    a: [
      ['5/6', '5/6'],
      ['32/135', '32/135'],
      ['6/5', '6/5'],
      ['1/2', '1/2']
    ],
    why: [
      'To divide by a fraction, multiply by its reciprocal (invert the second fraction): (4/9) · (15/8). Cross-cancelling 4 and 8 gives 1 and 2; cross-cancelling 9 and 15 by 3 gives 3 and 5. (1·5)/(3·2) = 5/6.',
      'Per dividere per una frazione, si moltiplica per la sua reciproca (si capovolge la seconda frazione): (4/9) · (15/8). Semplificando a croce 4 con 8 e 9 con 15 si ottiene (1·5)/(3·2) = 5/6.'
    ]
  },
  {
    id: 'math-ch2-09',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 22,
    missionId: 'math_q_ch2',
    chapterTitle: ['Rational & Real Numbers', 'Numeri razionali e numeri reali'],
    missionTitle: ['Negative Exponents Rule', 'Regola dell’esponente negativo'],
    q: [
      'Calculate: (2/3)⁻² = ?',
      'Calcola: (2/3)⁻² = ?'
    ],
    a: [
      ['9/4', '9/4'],
      ['−4/9', '−4/9'],
      ['4/9', '4/9'],
      ['−9/4', '−9/4']
    ],
    why: [
      'A negative exponent inverts the fraction and makes the exponent positive: (a/b)⁻ⁿ = (b/a)ⁿ. So (2/3)⁻² = (3/2)² = 9/4. The minus in the exponent flips the fraction; it does NOT make the number negative!',
      'L’esponente negativo inverte la frazione: (a/b)⁻ⁿ = (b/a)ⁿ. Quindi (2/3)⁻² = (3/2)² = 9/4. Attenzione: il meno all’esponente capovolge la frazione, NON rende il numero negativo!'
    ]
  },
  {
    id: 'math-ch2-10',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 22,
    missionId: 'math_q_ch2',
    chapterTitle: ['Rational & Real Numbers', 'Numeri razionali e numeri reali'],
    missionTitle: ['Negative Base with Negative Exponent', 'Base negativa con esponente negativo'],
    q: [
      'Calculate: (−2)⁻³ = ?',
      'Calcola: (−2)⁻³ = ?'
    ],
    a: [
      ['−1/8', '−1/8'],
      ['+1/8', '+1/8'],
      ['−8', '−8'],
      ['+6', '+6']
    ],
    why: [
      '(−2)⁻³ = 1 / (−2)³ = 1 / (−8) = −1/8. The odd exponent preserves the negative sign of the base, and the negative exponent inverts it.',
      '(−2)⁻³ = 1 / (−2)³ = 1 / (−8) = −1/8. L’esponente dispari mantiene il segno meno della base, e l’esponente negativo la sposta al denominatore.'
    ]
  },
  {
    id: 'math-ch2-11',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 22,
    missionId: 'math_q_ch2',
    chapterTitle: ['Rational & Real Numbers', 'Numeri razionali e numeri reali'],
    missionTitle: ['Terminating Decimal Condition', 'Condizione per numero decimale limitato'],
    q: [
      'When does an irreducible fraction m/n produce a terminating (finite) decimal number?',
      'Quando una frazione ridotta ai minimi termini m/n genera un numero decimale limitato (finito)?'
    ],
    a: [
      ['When the prime factorization of the denominator n contains only factors 2 and/or 5', 'Quando nella scomposizione in fattori primi del denominatore n compaiono solo i fattori 2 e/o 5'],
      ['When the denominator is an even number', 'Quando il denominatore è un numero pari'],
      ['When the numerator is a multiple of 10', 'Quando il numeratore è un multiplo di 10'],
      ['When the denominator is smaller than 10', 'Quando il denominatore è minore di 10']
    ],
    why: [
      'Our decimal system is base 10 (10 = 2 · 5). A fraction produces a terminating decimal if and only if the denominator has no prime factors other than 2 or 5 (e.g. 7/20 = 7/(2²·5) = 0.35).',
      'Poiché il sistema decimale è in base 10 (10 = 2 · 5), una frazione irriducibile genera un decimale limitato se e solo se il denominatore ha solo fattori 2 e/o 5 (es. 7/20 = 0,35).'
    ]
  },
  {
    id: 'math-ch2-12',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 22,
    missionId: 'math_q_ch2',
    chapterTitle: ['Rational & Real Numbers', 'Numeri razionali e numeri reali'],
    missionTitle: ['Repeating Decimal (Periodico Semplice)', 'Numero decimale periodico semplice'],
    q: [
      'What is the generating fraction of the simple repeating decimal 0.333... = 0.(3)?',
      'Qual è la frazione generatrice del numero decimale periodico semplice 0,(3)?'
    ],
    a: [
      ['1/3 (from 3/9)', '1/3 (da 3/9)'],
      ['3/10', '3/10'],
      ['3/100', '3/100'],
      ['33/100', '33/100']
    ],
    why: [
      'Rule for simple repeating decimal: numerator is the period (3), denominator has as many 9s as there are digits in the period (one 9): 3/9 = 1/3. 3/10 would be 0.3 (finite)!',
      'Regola del periodico semplice: al numeratore la cifra del periodo (3), al denominatore tanti 9 quante sono le cifre del periodo: 3/9 = 1/3. Attenzione: 3/10 è 0,3 finito!'
    ]
  },
  {
    id: 'math-ch2-13',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 22,
    missionId: 'math_q_ch2',
    chapterTitle: ['Rational & Real Numbers', 'Numeri razionali e numeri reali'],
    missionTitle: ['Mixed Repeating Decimal Generating Fraction', 'Frazione generatrice di periodico misto'],
    q: [
      'What is the generating fraction of the mixed repeating decimal 1.2(3)?',
      'Qual è la frazione generatrice del numero periodico misto 1,2(3)?'
    ],
    a: [
      ['37/30 (from (123 − 12) / 90)', '37/30 (da (123 − 12) / 90)'],
      ['123/90', '123/90'],
      ['123/99', '123/99'],
      ['12/90', '12/90']
    ],
    why: [
      'Rule: numerator = entire number without comma (123) minus non-repeating part (12) = 111. Denominator = as many 9s as period digits (one 9) followed by as many 0s as anti-period digits (one 0) = 90. 111/90 = 37/30.',
      'Regola: al numeratore tutto il numero senza virgola (123) meno la parte prima del periodo (12) = 111. Al denominatore tanti 9 quante cifre del periodo (uno) e tanti zeri quante dell’antiperiodo (uno) = 90. 111/90 = 37/30.'
    ]
  },
  {
    id: 'math-ch2-14',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 22,
    missionId: 'math_q_ch2',
    chapterTitle: ['Rational & Real Numbers', 'Numeri razionali e numeri reali'],
    missionTitle: ['Fundamental Property of Proportions', 'Proprietà fondamentale delle proporzioni'],
    q: [
      'In a proportion a : b = c : d, what does the fundamental property state?',
      'In una proporzione a : b = c : d, che cosa stabilisce la proprietà fondamentale?'
    ],
    a: [
      ['The product of the extremes equals the product of the means: a · d = b · c', 'Il prodotto degli estremi è uguale al prodotto dei medi: a · d = b · c'],
      ['The sum of the extremes equals the sum of the means: a + d = b + c', 'La somma degli estremi è uguale alla somma dei medi: a + d = b + c'],
      ['a · b = c · d', 'a · b = c · d'],
      ['a / c = d / b', 'a / c = d / b']
    ],
    why: [
      'In a proportion, a and d are the extremes; b and c are the means. Multiplying both sides by b · d immediately gives a · d = b · c.',
      'In una proporzione gli estremi sono a e d, mentre i medi sono b e c. Moltiplicando ambo i membri per b · d si ricava a · d = b · c.'
    ]
  },
  {
    id: 'math-ch2-15',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 22,
    missionId: 'math_q_ch2',
    chapterTitle: ['Rational & Real Numbers', 'Numeri razionali e numeri reali'],
    missionTitle: ['Finding an Unknown in a Proportion', 'Calcolo del termine incognito in una proporzione'],
    q: [
      'Find x in the proportion: 12 : x = 18 : 6.',
      'Determina il valore di x nella proporzione: 12 : x = 18 : 6.'
    ],
    a: [
      ['x = 4', 'x = 4'],
      ['x = 9', 'x = 9'],
      ['x = 36', 'x = 36'],
      ['x = 6', 'x = 6']
    ],
    why: [
      'x is a mean term, so x = (product of extremes) / other mean = (12 · 6) / 18 = 72 / 18 = 4.',
      'x è un medio incognito: x = (prodotto degli estremi) / altro medio = (12 · 6) / 18 = 72 / 18 = 4.'
    ]
  },
  {
    id: 'math-ch2-16',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 22,
    missionId: 'math_q_ch2',
    chapterTitle: ['Rational & Real Numbers', 'Numeri razionali e numeri reali'],
    missionTitle: ['Continuous Proportion (Proporzione Continua)', 'Proporzione continua e medio proporzionale'],
    q: [
      'In the continuous proportion 4 : x = x : 9 (with x > 0), what is the mean proportional x?',
      'Nella proporzione continua 4 : x = x : 9 (con x > 0), quanto vale il medio proporzionale x?'
    ],
    a: [
      ['x = 6', 'x = 6'],
      ['x = 6.5', 'x = 6.5'],
      ['x = 36', 'x = 36'],
      ['x = 13', 'x = 13']
    ],
    why: [
      'A proportion is continuous when its means are equal: x · x = x² = 4 · 9 = 36. Thus x = √36 = 6.',
      'Una proporzione è continua quando i due medi sono uguali: x · x = x² = 4 · 9 = 36. Quindi x = √36 = 6.'
    ]
  },
  {
    id: 'math-ch2-17',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 22,
    missionId: 'math_q_ch2',
    chapterTitle: ['Rational & Real Numbers', 'Numeri razionali e numeri reali'],
    missionTitle: ['Percentage Calculation (Calcolo percentuale)', 'Calcolo percentuale'],
    q: [
      'A video game originally costing 60 € is discounted by 25%. What is the final discounted price?',
      'Un videogioco che costava originariamente 60 € viene scontato del 25%. Qual è il prezzo finale scontato?'
    ],
    a: [
      ['45 €', '45 €'],
      ['50 €', '50 €'],
      ['35 €', '35 €'],
      ['15 €', '15 €']
    ],
    why: [
      'Discount amount: 25% of 60 = (25/100) · 60 = 15 €. Final price = 60 − 15 = 45 €. Alternatively, you pay 75% of 60 = 0.75 · 60 = 45 €.',
      'Sconto: 25% di 60 = 60 · 0,25 = 15 €. Prezzo finale: 60 − 15 = 45 €. In alternativa: paghi il 75% del prezzo: 60 · 0,75 = 45 €.'
    ]
  },
  {
    id: 'math-ch2-18',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 22,
    missionId: 'math_q_ch2',
    chapterTitle: ['Rational & Real Numbers', 'Numeri razionali e numeri reali'],
    missionTitle: ['Percentage Increase and Markup', 'Percentuale di rincaro e IVA'],
    q: [
      'A price of 80 € is increased by 20% VAT. What is the total price with VAT included?',
      'A un prezzo di 80 € viene applicata l’IVA al 20%. Qual è il prezzo finale ivato?'
    ],
    a: [
      ['96 €', '96 €'],
      ['100 €', '100 €'],
      ['88 €', '88 €'],
      ['16 €', '16 €']
    ],
    why: [
      '20% of 80 = 0.20 · 80 = 16 €. Total = 80 + 16 = 96 € (or 80 · 1.20 = 96 €).',
      'L’IVA è il 20% di 80 = 16 €. Prezzo ivato = 80 + 16 = 96 € (oppure 80 · 1,20 = 96 €).'
    ]
  },
  {
    id: 'math-ch2-19',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 22,
    missionId: 'math_q_ch2',
    chapterTitle: ['Rational & Real Numbers', 'Numeri razionali e numeri reali'],
    missionTitle: ['Consecutive Percentage Variations (Variazioni percentuali consecutive)', 'Variazioni percentuali successive'],
    q: [
      'A price first increases by 10% and then immediately decreases by 10%. Does the price return to the starting value?',
      'Un prezzo aumenta del 10% e poi scende subito dopo del 10%. Il prezzo finale torna al valore di partenza?'
    ],
    a: [
      ['No, it is lower by 1% than the starting price', 'No, è più basso dell’1% rispetto al valore iniziale'],
      ['Yes, because +10% and −10% cancel out', 'Sì, perché +10% e −10% si annullano esattamente'],
      ['No, it is higher by 1%', 'No, è più alto dell’1%'],
      ['It depends on the initial price', 'Dipende dal prezzo iniziale']
    ],
    why: [
      'Classic student trap! If price is 100 €, +10% makes it 110 €. The 10% discount applies to 110 € (11 € discount), so final price is 110 − 11 = 99 €, which is 1% less!',
      'Tranello diffusissimo! Se il prezzo è 100 €, sale a 110 €. Il 10% di sconto si calcola sui 110 € (sconto di 11 €), per cui il prezzo finale è 99 €, cioè l’1% in meno!'
    ]
  },
  {
    id: 'math-ch2-20',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 22,
    missionId: 'math_q_ch2',
    chapterTitle: ['Rational & Real Numbers', 'Numeri razionali e numeri reali'],
    missionTitle: ['Scientific Notation (Notazione scientifica)', 'Notazione scientifica'],
    q: [
      'What is the number 0.000 45 in scientific notation?',
      'Come si scrive il numero 0,000 45 in notazione scientifica?'
    ],
    a: [
      ['4.5 · 10⁻⁴', '4,5 · 10⁻⁴'],
      ['45 · 10⁻⁵', '45 · 10⁻⁵'],
      ['4.5 · 10⁴', '4,5 · 10⁴'],
      ['0.45 · 10⁻³', '0,45 · 10⁻³']
    ],
    why: [
      'Scientific notation requires the mantissa k to satisfy 1 ≤ k < 10 multiplied by a power of 10. Shifting the decimal comma 4 places to the right gives 4.5 · 10⁻⁴.',
      'In notazione scientifica il numero deve essere scritto come a · 10ⁿ con 1 ≤ a < 10. Spostando la virgola di 4 posizioni a destra otteniamo 4,5 · 10⁻⁴.'
    ]
  },
  {
    id: 'math-ch2-21',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 22,
    missionId: 'math_q_ch2',
    chapterTitle: ['Rational & Real Numbers', 'Numeri razionali e numeri reali'],
    missionTitle: ['Order of Magnitude (Ordine di grandezza)', 'Ordine di grandezza'],
    q: [
      'What is the order of magnitude of 7.2 · 10⁵?',
      'Qual è l’ordine di grandezza del numero 7,2 · 10⁵?'
    ],
    a: [
      ['10⁶ (because 7.2 ≥ √10 ≈ 3.16)', '10⁶ (perché 7,2 ≥ √10 ≈ 3,16)'],
      ['10⁵', '10⁵'],
      ['10⁷', '10⁷'],
      ['7', '7']
    ],
    why: [
      'In Italian science and math textbooks, if the coefficient is ≥ √10 ≈ 3.16 (or ≥ 5 in some conventions), the power of 10 rounds up: 7.2 ≥ 3.16, so the order of magnitude is 10⁵⁺¹ = 10⁶.',
      'Nei testi scolastici italiani, se la mantissa è ≥ √10 ≈ 3,16 (o ≥ 5), si arrotonda alla potenza successiva: 7,2 ≥ 3,16, quindi l’ordine di grandezza è 10⁶.'
    ]
  },
  {
    id: 'math-ch2-22',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 22,
    missionId: 'math_q_ch2',
    chapterTitle: ['Rational & Real Numbers', 'Numeri razionali e numeri reali'],
    missionTitle: ['Irrational Numbers in ℝ', 'Numeri irrazionali in ℝ'],
    q: [
      'Which of the following numbers is an irrational number?',
      'Quale dei seguenti numeri è un numero irrazionale?'
    ],
    a: [
      ['√2 ≈ 1.4142...', '√2 ≈ 1,4142...'],
      ['3/4 = 0.75', '3/4 = 0,75'],
      ['0.(6) = 2/3', '0,(6) = 2/3'],
      ['−5', '−5']
    ],
    why: [
      'An irrational number cannot be expressed as a ratio of two integers; its decimal expansion is infinite and non-repeating. √2, √3, and π are irrational!',
      'Un numero irrazionale non può essere scritto come frazione di due interi: ha infinite cifre decimali non periodiche. √2 e π sono numeri irrazionali!'
    ]
  },
  {
    id: 'math-ch2-23',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 22,
    missionId: 'math_q_ch2',
    chapterTitle: ['Rational & Real Numbers', 'Numeri razionali e numeri reali'],
    missionTitle: ['Compound Fractions (Frazioni a castello)', 'Frazioni a castello'],
    q: [
      'Simplify the compound fraction: (1/2 + 1/3) / (1/2 − 1/3) = ?',
      'Semplifica la frazione a castello: (1/2 + 1/3) / (1/2 − 1/3) = ?'
    ],
    a: [
      ['5', '5'],
      ['1', '1'],
      ['5/6', '5/6'],
      ['1/6', '1/6']
    ],
    why: [
      'Numerator: 1/2 + 1/3 = (3 + 2)/6 = 5/6. Denominator: 1/2 − 1/3 = (3 − 2)/6 = 1/6. Dividing gives (5/6) : (1/6) = (5/6) · (6/1) = 5.',
      'Numeratore: 1/2 + 1/3 = 5/6. Denominatore: 1/2 − 1/3 = 1/6. Dividendo il numeratore per il denominatore: (5/6) : (1/6) = 5.'
    ]
  },
  {
    id: 'math-ch2-24',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 22,
    missionId: 'math_q_ch2',
    chapterTitle: ['Rational & Real Numbers', 'Numeri razionali e numeri reali'],
    missionTitle: ['Product of Inverse Rationals', 'Prodotto di un razionale per il suo reciproco'],
    q: [
      'What is the product of any non-zero rational number q and its reciprocal (inverse) 1/q?',
      'Quanto vale il prodotto di un qualsiasi numero razionale q ≠ 0 per il suo reciproco (inverso) 1/q?'
    ],
    a: [
      ['Always 1', 'Sempre 1'],
      ['Always 0', 'Sempre 0'],
      ['q²', 'q²'],
      ['−1', '−1']
    ],
    why: [
      'By definition of multiplicative inverse, q · (1/q) = 1. (Do not confuse opposite, whose sum is 0, with inverse, whose product is 1!).',
      'Per definizione di inverso moltiplicativo, q · (1/q) = 1. (Non confondere l’opposto, la cui somma fa 0, con il reciproco/inverso, il cui prodotto fa 1!).'
    ]
  },
  {
    id: 'math-ch2-25',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 22,
    missionId: 'math_q_ch2',
    chapterTitle: ['Rational & Real Numbers', 'Numeri razionali e numeri reali'],
    missionTitle: ['Ordering Negative Fractions', 'Confronto di frazioni negative'],
    q: [
      'Which comparison between negative rational numbers is correct?',
      'Quale confronto tra numeri razionali negativi è corretto?'
    ],
    a: [
      ['−1/2 > −3/4', '−1/2 > −3/4'],
      ['−1/2 < −3/4', '−1/2 < −3/4'],
      ['−3/4 > 0', '−3/4 > 0'],
      ['−1/2 = −3/4', '−1/2 = −3/4']
    ],
    why: [
      'In decimal form: −1/2 = −0.5 and −3/4 = −0.75. On the number line −0.5 is to the right of −0.75, so −1/2 > −3/4. For negative numbers, smaller absolute value means greater number!',
      'In forma decimale: −1/2 = −0,5 e −3/4 = −0,75. Sulla retta −0,5 è più a destra di −0,75, perciò −1/2 > −3/4. Per i numeri negativi, chi ha valore assoluto minore è maggiore!'
    ]
  }
];
