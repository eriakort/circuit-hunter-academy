import { TaggedQuestion } from '../types';

export const CH6_QUESTIONS: TaggedQuestion[] = [
  {
    id: 'math-ch6-01',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 25,
    missionId: 'math_q_ch6',
    chapterTitle: ['Linear Equations & Inequalities', 'Equazioni e disequazioni lineari'],
    missionTitle: ['Identity vs Equation', 'Identità ed equazioni'],
    q: [
      'What is the difference between an identity and an equation?',
      'Qual è la differenza tra un’identità e un’equazione?'
    ],
    a: [
      ['An identity is true for ANY value assigned to the variables; an equation is true only for specific values (solutions)', 'Un’identità è vera per QUALSIASI valore attribuito alle variabili; un’equazione è verificata solo per particolari valori (le soluzioni)'],
      ['An identity has no equal sign', 'Un’identità non ha il segno di uguale'],
      ['An equation always has degree 2', 'Un’equazione ha sempre grado 2'],
      ['They are two synonymous words for the exact same concept', 'Sono due sinonimi che indicano la stessa cosa']
    ],
    why: [
      'Example: 2(x + 1) = 2x + 2 is an identity (true for every real x). 2x + 1 = 7 is an equation (true only when x = 3).',
      'Esempio: 2(x + 1) = 2x + 2 è un’identità (vera per qualunque x ∈ ℝ). Invece 2x + 1 = 7 è un’equazione (vera solo se x = 3).'
    ]
  },
  {
    id: 'math-ch6-02',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 25,
    missionId: 'math_q_ch6',
    chapterTitle: ['Linear Equations & Inequalities', 'Equazioni e disequazioni lineari'],
    missionTitle: ['First Equivalence Principle', 'Primo principio di equivalenza'],
    q: [
      'What does the first principle of equivalence for equations state?',
      'Che cosa afferma il primo principio di equivalenza delle equazioni?'
    ],
    a: [
      ['Adding or subtracting the same number or algebraic expression to both sides yields an equivalent equation', 'Aggiungendo o sottraendo a entrambi i membri uno stesso numero o una stessa espressione algebrica si ottiene un’equazione equivalente'],
      ['Multiplying both sides by zero keeps the equation equivalent', 'Moltiplicando ambo i membri per zero l’equazione resta equivalente'],
      ['The unknown x must always be positive', 'L’incognita x deve sempre essere positiva'],
      ['Both sides can be squared freely without changing solutions', 'Si possono elevare al quadrato entrambi i membri senza cambiare soluzioni']
    ],
    why: [
      'Think of a balanced two-pan scale: adding or removing the exact same weight on both pans keeps the scale in perfect balance!',
      'Pensa a una bilancia a due piatti in equilibrio: aggiungendo o togliendo lo stesso identico peso da entrambi i piatti, la bilancia rimane perfettamente in equilibrio!'
    ]
  },
  {
    id: 'math-ch6-03',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 25,
    missionId: 'math_q_ch6',
    chapterTitle: ['Linear Equations & Inequalities', 'Equazioni e disequazioni lineari'],
    missionTitle: ['Transport Rule (Regola del trasporto)', 'Regola del trasporto'],
    q: [
      'When moving a term from one side of an equation to the other (transport rule), what MUST you do?',
      'Quando sposti un termine da un membro all’altro di un’equazione (regola del trasporto), cosa DEVI fare?'
    ],
    a: [
      ['Change its sign (+ becomes −, and − becomes +)', 'Cambiare il suo segno (il + diventa − e il − diventa +)'],
      ['Keep the same sign', 'Lasciare il segno invariato'],
      ['Invert the term (reciprocal)', 'Capovolgere il termine (fare il reciproco)'],
      ['Square the term', 'Elevare al quadrato il termine']
    ],
    why: [
      'The transport rule is a direct consequence of the first principle: in x + 5 = 12, subtracting 5 from both sides gives x = 12 − 5. It looks like +5 moved across the equal sign and became −5!',
      'La regola del trasporto deriva direttamente dal 1° principio: se x + 5 = 12, sottraendo 5 a entrambi i membri otteniamo x = 12 − 5. È come se il +5 avesse attraversato l’uguale cambiando segno in −5!'
    ]
  },
  {
    id: 'math-ch6-04',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 25,
    missionId: 'math_q_ch6',
    chapterTitle: ['Linear Equations & Inequalities', 'Equazioni e disequazioni lineari'],
    missionTitle: ['Cancellation Rule', 'Regola di cancellazione'],
    q: [
      'In the equation 3x + 7 = x + 7, what can you immediately do?',
      'Nell’equazione 3x + 7 = x + 7, che cosa puoi fare immediatamente?'
    ],
    a: [
      ['Cancel the +7 on both sides, obtaining 3x = x', 'Cancellare il +7 da entrambi i membri, ottenendo 3x = x'],
      ['Cancel x and 3x', 'Cancellare x e 3x'],
      ['Conclude that the equation is impossible', 'Concludere che l’equazione è impossibile'],
      ['Multiply both sides by 7', 'Moltiplicare entrambi i membri per 7']
    ],
    why: [
      'Cancellation rule: identical terms appearing on opposite sides with the same sign cancel each other out (by subtracting that term from both sides). Here 3x = x ⇔ 2x = 0 ⇔ x = 0.',
      'Regola di cancellazione: due termini identici con lo stesso segno posti in membri opposti si possono elidere (sottraendoli da ambo i membri). Resta 3x = x, da cui 2x = 0 e quindi x = 0.'
    ]
  },
  {
    id: 'math-ch6-05',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 25,
    missionId: 'math_q_ch6',
    chapterTitle: ['Linear Equations & Inequalities', 'Equazioni e disequazioni lineari'],
    missionTitle: ['Second Equivalence Principle', 'Secondo principio di equivalenza'],
    q: [
      'What does the second principle of equivalence state, and what is its CRUCIAL restriction?',
      'Che cosa stabilisce il secondo principio di equivalenza, e qual è il suo vincolo FONDAMENTALE?'
    ],
    a: [
      ['Multiplying or dividing both sides by the same NON-ZERO number yields an equivalent equation', 'Moltiplicando o dividendo entrambi i membri per uno stesso numero DIVERSO DA ZERO si ottiene un’equazione equivalente'],
      ['You can multiply both sides by 0', 'Si può moltiplicare ambo i membri per 0'],
      ['You can divide by zero at any time', 'Si può dividere per zero in ogni momento'],
      ['You can only multiply by positive numbers', 'Si può moltiplicare solo per numeri positivi']
    ],
    why: [
      'You can multiply or divide by any number k EXCEPT zero! (Multiplying by 0 collapses any equation to 0 = 0, which introduces infinitely many false solutions; dividing by 0 is undefined).',
      'Si può moltiplicare o dividere per qualsiasi numero k TRANNE ZERO! Moltiplicare per 0 trasformerebbe qualunque equazione in 0 = 0 creando infinite false soluzioni; dividere per 0 è impossibile.'
    ]
  },
  {
    id: 'math-ch6-06',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 25,
    missionId: 'math_q_ch6',
    chapterTitle: ['Linear Equations & Inequalities', 'Equazioni e disequazioni lineari'],
    missionTitle: ['Sign Change in an Equation', 'Cambiamento di tutti i segni in un’equazione'],
    q: [
      'If you have −x = 5, what is the value of x?',
      'Se arrivi alla forma −x = 5, quanto vale x?'
    ],
    a: [
      ['x = −5 (by multiplying both sides by −1)', 'x = −5 (moltiplicando entrambi i membri per −1)'],
      ['x = 5', 'x = 5'],
      ['x = 1/5', 'x = 1/5'],
      ['Impossible', 'Impossibile']
    ],
    why: [
      'Multiply or divide both sides by −1 (second principle): (−1) · (−x) = (−1) · 5, which gives x = −5. You can always change all signs on both sides simultaneously!',
      'Moltiplica o dividi ambo i membri per −1: x = −5. Puoi sempre invertire contemporaneamente tutti i segni di entrambi i membri.'
    ]
  },
  {
    id: 'math-ch6-07',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 25,
    missionId: 'math_q_ch6',
    chapterTitle: ['Linear Equations & Inequalities', 'Equazioni e disequazioni lineari'],
    missionTitle: ['Normal Form ax = b: Determined Case', 'Forma normale ax = b: equazione determinata'],
    q: [
      'When is a first-degree equation in normal form ax = b called "determined" (determinata)?',
      'Quando un’equazione di primo grado in forma normale ax = b si dice "determinata"?'
    ],
    a: [
      ['When a ≠ 0, having one unique solution x = b/a', 'Quando a ≠ 0, ammettendo un’unica soluzione reale x = b/a'],
      ['When a = 0 and b = 0', 'Quando a = 0 e b = 0'],
      ['When a = 0 and b ≠ 0', 'Quando a = 0 e b ≠ 0'],
      ['When b is a negative integer', 'Quando b è un intero negativo']
    ],
    why: [
      'If a ≠ 0, dividing both sides by a yields the single unique solution x = b/a. The solution set contains exactly one number: S = {b/a}.',
      'Se il coefficiente dell’incognita a è diverso da zero, dividendo per a si trova l’unica soluzione: x = b/a. L’insieme delle soluzioni è S = {b/a}.'
    ]
  },
  {
    id: 'math-ch6-08',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 25,
    missionId: 'math_q_ch6',
    chapterTitle: ['Linear Equations & Inequalities', 'Equazioni e disequazioni lineari'],
    missionTitle: ['Indeterminate Equation (Equazione indeterminata)', 'Equazione indeterminata (0x = 0)'],
    q: [
      'What type of equation is 0x = 0, and how many solutions does it have?',
      'Di che tipo è l’equazione 0x = 0, e quante soluzioni possiede?'
    ],
    a: [
      ['Indeterminate (identity): it has infinitely many solutions (any real number x satisfies it)', 'Indeterminata (identità): ha infinite soluzioni (qualsiasi numero reale x la verifica)'],
      ['Impossible: it has no solution', 'Impossibile: non ammette nessuna soluzione'],
      ['Determined: x = 0 is the only solution', 'Determinata: l’unica soluzione è x = 0'],
      ['Undefined', 'Non definita']
    ],
    why: [
      '0 times ANY number x is ALWAYS 0 (0 · x = 0 is always true). Every real number is a solution, so it is an identity with infinitely many solutions: S = ℝ.',
      'Poiché 0 moltiplicato per qualsiasi numero x dà sempre 0, l’uguaglianza 0 · x = 0 è sempre vera per ogni x ∈ ℝ. L’equazione è indeterminata e ha infinite soluzioni!'
    ]
  },
  {
    id: 'math-ch6-09',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 25,
    missionId: 'math_q_ch6',
    chapterTitle: ['Linear Equations & Inequalities', 'Equazioni e disequazioni lineari'],
    missionTitle: ['Impossible Equation (Equazione impossibile)', 'Equazione impossibile (0x = b con b ≠ 0)'],
    q: [
      'What type of equation is 0x = 5, and what is its solution set S?',
      'Di che tipo è l’equazione 0x = 5, e qual è il suo insieme delle soluzioni S?'
    ],
    a: [
      ['Impossible: no number multiplied by 0 can equal 5 (S = ∅)', 'Impossibile: nessun numero moltiplicato per 0 può dare 5 (S = ∅)'],
      ['Determined: x = 5', 'Determinata: x = 5'],
      ['Determined: x = 0', 'Determinata: x = 0'],
      ['Indeterminate: infinite solutions', 'Indeterminata: infinite soluzioni']
    ],
    why: [
      '0 · x = 0 for any number x. 0 can never equal 5! Therefore no number satisfies the equation: it is impossible, and S = ∅.',
      'Per qualunque valore di x, 0 · x fa sempre 0, che non potrà mai essere uguale a 5! Nessun numero può soddisfare l’uguaglianza: l’equazione è impossibile (S = ∅).'
    ]
  },
  {
    id: 'math-ch6-10',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 25,
    missionId: 'math_q_ch6',
    chapterTitle: ['Linear Equations & Inequalities', 'Equazioni e disequazioni lineari'],
    missionTitle: ['Solving a Linear Equation Step-by-Step', 'Risoluzione di un’equazione lineare'],
    q: [
      'Solve the equation: 5x − 3 = 2x + 9.',
      'Risolvi l’equazione: 5x − 3 = 2x + 9.'
    ],
    a: [
      ['x = 4', 'x = 4'],
      ['x = 2', 'x = 2'],
      ['x = 12', 'x = 12'],
      ['x = −4', 'x = −4']
    ],
    why: [
      'Step 1: Move x terms left and numbers right: 5x − 2x = 9 + 3. Step 2: Combine like terms: 3x = 12. Step 3: Divide by 3: x = 12/3 = 4.',
      'Passo 1: Porta le x a sinistra e i numeri a destra: 5x − 2x = 9 + 3. Passo 2: Somma i simili: 3x = 12. Passo 3: Dividi per 3: x = 12 / 3 = 4.'
    ]
  },
  {
    id: 'math-ch6-11',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 25,
    missionId: 'math_q_ch6',
    chapterTitle: ['Linear Equations & Inequalities', 'Equazioni e disequazioni lineari'],
    missionTitle: ['Verifying a Solution', 'Verifica della soluzione'],
    q: [
      'How do you check (verify) whether x = 3 is the correct solution to 4x − 5 = 7?',
      'Come si esegue la verifica per controllare se x = 3 è la soluzione corretta di 4x − 5 = 7?'
    ],
    a: [
      ['Substitute x = 3 into both members and check that left side equals right side (4·3 − 5 = 12 − 5 = 7)', 'Sostituisci x = 3 nei membri e controlla che il primo membro coincida con il secondo (4·3 − 5 = 12 − 5 = 7)'],
      ['Add 3 to both sides', 'Aggiungi 3 a entrambi i membri'],
      ['Divide 7 by 4', 'Dividi 7 per 4'],
      ['Substitute x = 0', 'Sostituisci x = 0']
    ],
    why: [
      'To verify, plug the candidate value into the original equation: Left Member = 4(3) − 5 = 7; Right Member = 7. Since 7 = 7, the solution is verified and correct!',
      'Per verificare, sostituisci il valore trovato nell’equazione originale: 1° membro: 4·3 − 5 = 7; 2° membro: 7. Poiché 7 = 7, la soluzione è corretta!'
    ]
  },
  {
    id: 'math-ch6-12',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 25,
    missionId: 'math_q_ch6',
    chapterTitle: ['Linear Equations & Inequalities', 'Equazioni e disequazioni lineari'],
    missionTitle: ['Equation with Fractions and Denominators', 'Equazioni a coefficienti frazionari'],
    q: [
      'To eliminate the denominators in the equation (x − 1)/2 + (x + 1)/3 = 5, what should you multiply both sides by?',
      'Per eliminare i denominatori nell’equazione (x − 1)/2 + (x + 1)/3 = 5, per quale numero devi moltiplicare entrambi i membri?'
    ],
    a: [
      ['6 (the least common multiple m.c.m.(2, 3))', '6 (il minimo comune multiplo m.c.m.(2, 3))'],
      ['5', '5'],
      ['2', '2'],
      ['3', '3']
    ],
    why: [
      'Multiply EVERY term (including the right side 5!) by m.c.m.(2, 3) = 6: 6 · [(x−1)/2] + 6 · [(x+1)/3] = 6 · 5 -> 3(x−1) + 2(x+1) = 30. Don\'t forget to multiply 5 by 6!',
      'Moltiplica TUTTI i termini (anche il 5 a destra!) per il m.c.m.(2, 3) = 6: 3(x − 1) + 2(x + 1) = 30. Attenzione al tranello: moltiplica anche il secondo membro!'
    ]
  },
  {
    id: 'math-ch6-13',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 25,
    missionId: 'math_q_ch6',
    chapterTitle: ['Linear Equations & Inequalities', 'Equazioni e disequazioni lineari'],
    missionTitle: ['Equation with Parentheses and Minus Sign', 'Equazione con parentesi e segno meno'],
    q: [
      'Solve: 2(x − 4) − (3x − 1) = 0.',
      'Risolvi: 2(x − 4) − (3x − 1) = 0.'
    ],
    a: [
      ['x = −7', 'x = −7'],
      ['x = 7', 'x = 7'],
      ['x = −9', 'x = −9'],
      ['x = 9', 'x = 9']
    ],
    why: [
      'Distribute: 2x − 8 − 3x + 1 = 0 (watch the sign: −(3x − 1) = −3x + 1!). Combine: −x − 7 = 0 -> −x = 7 -> x = −7.',
      'Sviluppa le parentesi: 2x − 8 − 3x + 1 = 0 (attenzione al segno: −(−1) = +1!). Raggruppa: −x − 7 = 0, da cui −x = 7 e quindi x = −7.'
    ]
  },
  {
    id: 'math-ch6-14',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 25,
    missionId: 'math_q_ch6',
    chapterTitle: ['Linear Equations & Inequalities', 'Equazioni e disequazioni lineari'],
    missionTitle: ['Equation Modeling a Word Problem', 'Problema con equazione: numeri consecutivi'],
    q: [
      'The sum of two consecutive integers is 47. What are the two integers?',
      'La somma di due numeri interi consecutivi è 47. Quali sono i due numeri?'
    ],
    a: [
      ['23 and 24', '23 e 24'],
      ['22 and 25', '22 e 25'],
      ['20 and 27', '20 e 27'],
      ['21 and 26', '21 e 26']
    ],
    why: [
      'Let x be the first number; the consecutive number is (x + 1). Equation: x + (x + 1) = 47 -> 2x + 1 = 47 -> 2x = 46 -> x = 23. The two numbers are 23 and 24.',
      'Chiamiamo x il primo numero; il successivo consecutivo è (x + 1). Equazione: x + (x + 1) = 47 -> 2x + 1 = 47 -> 2x = 46 -> x = 23. I due numeri sono 23 e 24.'
    ]
  },
  {
    id: 'math-ch6-15',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 25,
    missionId: 'math_q_ch6',
    chapterTitle: ['Linear Equations & Inequalities', 'Equazioni e disequazioni lineari'],
    missionTitle: ['Age Word Problem', 'Problema di età con equazione'],
    q: [
      'A father is 36 years old and his son is 8. In how many years will the father\'s age be exactly three times his son\'s age?',
      'Un padre ha 36 anni e suo figlio ne ha 8. Tra quanti anni l’età del padre sarà esattamente il triplo di quella del figlio?'
    ],
    a: [
      ['In 6 years (father 42, son 14)', 'Tra 6 anni (padre 42, figlio 14)'],
      ['In 4 years', 'Tra 4 anni'],
      ['In 10 years', 'Tra 10 anni'],
      ['In 8 years', 'Tra 8 anni']
    ],
    why: [
      'Let x be the number of years. In x years, father is (36 + x) and son is (8 + x). Equation: 36 + x = 3(8 + x) -> 36 + x = 24 + 3x -> 36 − 24 = 3x − x -> 12 = 2x -> x = 6 years!',
      'Sia x il numero di anni. Tra x anni il padre avrà (36 + x) e il figlio (8 + x). Equazione: 36 + x = 3(8 + x) -> 36 + x = 24 + 3x -> 12 = 2x -> x = 6 anni!'
    ]
  },
  {
    id: 'math-ch6-16',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 26,
    missionId: 'math_q_ch6',
    chapterTitle: ['Linear Equations & Inequalities', 'Equazioni e disequazioni lineari'],
    missionTitle: ['Definition of an Inequality', 'Definizione di disequazione'],
    q: [
      'What is an inequality (disequazione)?',
      'Che cos’è una disequazione?'
    ],
    a: [
      ['A statement of inequality between two algebraic expressions containing one or more unknowns (<, >, ≤, ≥)', 'Una disuguaglianza tra due espressioni algebriche contenente una o più incognite (<, >, ≤, ≥)'],
      ['An equation with no solutions', 'Un’equazione che non ha soluzioni'],
      ['An expression with two equal signs', 'Un’espressione con due segni di uguale'],
      ['A calculation without variables', 'Un calcolo numerico senza variabili']
    ],
    why: [
      'An inequality compares two sides using the relations < (strictly less), > (strictly greater), ≤ (less than or equal to), or ≥ (greater than or equal to).',
      'Una disequazione mette a confronto due espressioni algebriche tramite i simboli di disuguaglianza: < (minore), > (maggiore), ≤ (minore o uguale), ≥ (maggiore o uguale).'
    ]
  },
  {
    id: 'math-ch6-17',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 26,
    missionId: 'math_q_ch6',
    chapterTitle: ['Linear Equations & Inequalities', 'Equazioni e disequazioni lineari'],
    missionTitle: ['THE GOLDEN RULE OF INEQUALITIES', 'LA REGOLA D’ORO DELLE DISEQUAZIONI'],
    q: [
      'What MUST you do to an inequality when multiplying or dividing both sides by a NEGATIVE number?',
      'Cosa si DEVE fare al verso di una disequazione quando si moltiplicano o dividono entrambi i membri per un numero NEGATIVO?'
    ],
    a: [
      ['INVERT the inequality sign (< becomes >, and vice versa)', 'INVERTIRE il verso della disequazione (il < diventa >, e viceversa)'],
      ['Keep the inequality sign unchanged', 'Mantenere il verso invariato'],
      ['Change the sign to an equal sign =', 'Trasformare il simbolo in un uguale ='],
      ['Square the inequality', 'Elevare al quadrato la disequazione']
    ],
    why: [
      'CRITICAL PRINCIPLE! Consider 2 < 5: multiply both by −1 -> −2 and −5. Sulla retta numerica, −2 is to the RIGHT of −5, so −2 > −5! The direction flipped! If you forget to flip the sign, your solution is completely inverted!',
      'REGOLA FONDAMENTALE! Considera 2 < 5. Moltiplicando per −1 abbiamo −2 e −5. Sulla retta numerica, −2 si trova a DESTRA di −5, quindi −2 > −5! Il verso si è invertito!'
    ]
  },
  {
    id: 'math-ch6-18',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 26,
    missionId: 'math_q_ch6',
    chapterTitle: ['Linear Equations & Inequalities', 'Equazioni e disequazioni lineari'],
    missionTitle: ['Solving a Negative Coefficient Inequality', 'Risoluzione con coefficiente negativo'],
    q: [
      'Solve the inequality: −3x < 12.',
      'Risolvi la disequazione: −3x < 12.'
    ],
    a: [
      ['x > −4', 'x > −4'],
      ['x < −4', 'x < −4'],
      ['x > 4', 'x > 4'],
      ['x < 4', 'x < 4']
    ],
    why: [
      'Divide both sides by −3 (which is negative!). Dividing by a negative inverts the sign < into >: x > 12 / (−3) -> x > −4.',
      'Dividi ambo i membri per −3 (che è negativo!). La divisione per un numero negativo inverte il verso da < a >: x > 12 / (−3), cioè x > −4.'
    ]
  },
  {
    id: 'math-ch6-19',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 26,
    missionId: 'math_q_ch6',
    chapterTitle: ['Linear Equations & Inequalities', 'Equazioni e disequazioni lineari'],
    missionTitle: ['Graphic Representation on the Number Line', 'Rappresentazione grafica: pallino pieno vs vuoto'],
    q: [
      'When graphing the solution of an inequality on the number line, what is the meaning of a filled dot (pallino pieno) versus an empty dot (pallino vuoto)?',
      'Nella rappresentazione grafica sulla retta dei numeri, qual è la differenza tra pallino pieno e pallino vuoto (o cerchietto)?'
    ],
    a: [
      ['Filled dot means the boundary endpoint IS included (≤ or ≥); empty dot means it is EXCLUDED (< or >)', 'Il pallino pieno indica che l’estremo È compreso (≤ o ≥); il pallino vuoto indica che l’estremo è ESCLUSO (< o >)'],
      ['Filled dot means positive numbers; empty dot means negative', 'Il pallino pieno indica numeri positivi; il pallino vuoto numeri negativi'],
      ['Empty dot means the number is zero', 'Il pallino vuoto indica che il numero è zero'],
      ['They are decorative with no mathematical distinction', 'Non c’è alcuna differenza matematica']
    ],
    why: [
      'A filled circle at 3 for x ≥ 3 means 3 itself is a valid solution. An open circle at 3 for x > 3 means 3 is excluded (only numbers strictly greater than 3 count).',
      'Il pallino pieno in 3 per x ≥ 3 significa che anche il 3 fa parte delle soluzioni. Il pallino vuoto per x > 3 significa che il 3 è escluso (valgono solo i numeri strettamente maggiori di 3).'
    ]
  },
  {
    id: 'math-ch6-20',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 26,
    missionId: 'math_q_ch6',
    chapterTitle: ['Linear Equations & Inequalities', 'Equazioni e disequazioni lineari'],
    missionTitle: ['Interval Notation', 'Notazione per intervalli'],
    q: [
      'How is the solution x ≥ 5 written in interval notation?',
      'Come si scrive la soluzione x ≥ 5 in notazione a intervallo?'
    ],
    a: [
      ['[5, +∞)', '[5, +∞)'],
      ['(5, +∞)', '(5, +∞)'],
      ['(−∞, 5]', '(−∞, 5]'],
      ['[5, 0]', '[5, 0]']
    ],
    why: [
      'Square bracket [ means the endpoint is included (because of ≥). Parenthesis ) is always used for infinity (±∞). Thus [5, +∞).',
      'La parentesi quadra chiusa verso l’interno [ indica che l’estremo 5 è compreso (grazie a ≥). Per l’infinito si usa sempre la tonda: [5, +∞).'
    ]
  },
  {
    id: 'math-ch6-21',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 26,
    missionId: 'math_q_ch6',
    chapterTitle: ['Linear Equations & Inequalities', 'Equazioni e disequazioni lineari'],
    missionTitle: ['Multi-Step Linear Inequality', 'Disequazione lineare a più passaggi'],
    q: [
      'Solve the inequality: 4(x − 1) − 2 > 6x + 8.',
      'Risolvi la disequazione: 4(x − 1) − 2 > 6x + 8.'
    ],
    a: [
      ['x < −7', 'x < −7'],
      ['x > −7', 'x > −7'],
      ['x < 7', 'x < 7'],
      ['x > 7', 'x > 7']
    ],
    why: [
      'Expand: 4x − 4 − 2 > 6x + 8 -> 4x − 6 > 6x + 8. Move terms: 4x − 6x > 8 + 6 -> −2x > 14. Divide by −2 and FLIP the sign: x < 14 / (−2) -> x < −7.',
      'Sviluppa: 4x − 6 > 6x + 8. Porta le x a sinistra: 4x − 6x > 8 + 6 -> −2x > 14. Dividi per −2 invertendo il verso: x < −7.'
    ]
  },
  {
    id: 'math-ch6-22',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 26,
    missionId: 'math_q_ch6',
    chapterTitle: ['Linear Equations & Inequalities', 'Equazioni e disequazioni lineari'],
    missionTitle: ['Always Satisfied Inequality (Sempre verificata)', 'Disequazione sempre verificata'],
    q: [
      'What are the solutions to the inequality 0x > −5?',
      'Quali sono le soluzioni della disequazione 0x > −5?'
    ],
    a: [
      ['All real numbers (∀x ∈ ℝ)', 'Tutti i numeri reali (∀x ∈ ℝ, sempre verificata)'],
      ['No solution (impossible, S = ∅)', 'Nessuna soluzione (impossibile, S = ∅)'],
      ['Only x > −5', 'Solo x > −5'],
      ['Only x = 0', 'Solo x = 0']
    ],
    why: [
      'For any number x, 0 · x = 0. Since 0 is always greater than −5 (0 > −5 is a true inequality), the condition is satisfied for ANY real number: S = ℝ.',
      'Per qualunque x, 0 · x = 0. Poiché 0 è sempre maggiore di −5 (0 > −5 è vero per definizione), la disequazione è verificata per qualunque x reale: S = ℝ.'
    ]
  },
  {
    id: 'math-ch6-23',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 26,
    missionId: 'math_q_ch6',
    chapterTitle: ['Linear Equations & Inequalities', 'Equazioni e disequazioni lineari'],
    missionTitle: ['Impossible Inequality (Disequazione impossibile)', 'Disequazione impossibile'],
    q: [
      'What are the solutions to the inequality 0x > 3?',
      'Quali sono le soluzioni della disequazione 0x > 3?'
    ],
    a: [
      ['No solution (impossible, S = ∅)', 'Nessuna soluzione (impossibile, S = ∅)'],
      ['All real numbers', 'Tutti i numeri reali'],
      ['x > 3', 'x > 3'],
      ['x = 0', 'x = 0']
    ],
    why: [
      '0 · x = 0 for any x. 0 is never greater than 3 (0 > 3 is false). Therefore, no value of x can make this true: it is impossible (S = ∅).',
      '0 · x fa sempre 0. Ma 0 non è mai maggiore di 3! Nessun numero può soddisfare la disuguaglianza: la disequazione è impossibile (S = ∅).'
    ]
  },
  {
    id: 'math-ch6-24',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 25,
    missionId: 'math_q_ch6',
    chapterTitle: ['Linear Equations & Inequalities', 'Equazioni e disequazioni lineari'],
    missionTitle: ['Square of Binomial in an Equation', 'Prodotti notevoli all’interno di un’equazione'],
    q: [
      'Solve the equation: (x + 3)² = x² + 15.',
      'Risolvi l’equazione: (x + 3)² = x² + 15.'
    ],
    a: [
      ['x = 1', 'x = 1'],
      ['x = 2', 'x = 2'],
      ['x = 6', 'x = 6'],
      ['Impossible', 'Impossibile']
    ],
    why: [
      'Expand the square: x² + 6x + 9 = x² + 15. The x² terms cancel on both sides! Leaves 6x + 9 = 15 -> 6x = 15 − 9 = 6 -> x = 1. Although there was an exponent 2, it reduces to a 1st degree equation!',
      'Sviluppa il quadrato: x² + 6x + 9 = x² + 15. I termini x² si elidono a vicenda! Rimane 6x + 9 = 15 -> 6x = 6 -> x = 1. Anche se comparivano quadrati, l’equazione si riduce al primo grado!'
    ]
  },
  {
    id: 'math-ch6-25',
    subject: 'math',
    unitIndex: 5,
    arcIndex: 26,
    missionId: 'math_q_ch6',
    chapterTitle: ['Linear Equations & Inequalities', 'Equazioni e disequazioni lineari'],
    missionTitle: ['Inequality Word Problem: Budget Limit', 'Problema con disequazione: limite di spesa'],
    q: [
      'Marco has 50 €. He buys a book for 14 € and wants to buy several notebooks costing 4 € each. What is the maximum number of notebooks n he can buy?',
      'Marco ha 50 €. Compra un libro che costa 14 € e vuole comprare dei quaderni che costano 4 € ciascuno. Qual è il numero massimo di quaderni n che può acquistare?'
    ],
    a: [
      ['9 notebooks (4 · 9 = 36; 36 + 14 = 50 €)', '9 quaderni (4 · 9 = 36; 36 + 14 = 50 €)'],
      ['8 notebooks', '8 quaderni'],
      ['10 notebooks', '10 quaderni'],
      ['12 notebooks', '12 quaderni']
    ],
    why: [
      'Total expense must be ≤ 50 €: 14 + 4n ≤ 50 -> 4n ≤ 36 -> n ≤ 9. Since n must be an integer, Marco can buy at most 9 notebooks.',
      'La spesa totale deve essere minore o uguale a 50 €: 14 + 4n ≤ 50 -> 4n ≤ 36 -> n ≤ 9. Trattandosi di quaderni (interi), il numero massimo è 9.'
    ]
  }
];
