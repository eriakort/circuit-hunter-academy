import type { ArcInfo, BilingualText, Mission } from '../types';

interface IndicatorItem {
  id: string;
  strand: string;
  subStrand: string;
  contentStandardId: string;
  learningIndicatorId: string;
  title: BilingualText;
  explanation: BilingualText;
  q: BilingualText;
  a: BilingualText[];
  why: BilingualText;
}

const INDICATORS = [
  {
    "id": "ss1-real-cs1-li1",
    "strand": "Numbers for Everyday Life",
    "subStrand": "Real Number System",
    "contentStandardId": "1.1.1.CS.1",
    "learningIndicatorId": "1.1.1.LI.1",
    "title": [
      "Closure of real-number subsets",
      "Chiusura dei sottoinsiemi dei numeri reali"
    ],
    "explanation": [
      "Check whether a number set stays within the same set after an operation. Integers are not closed under division because 1 ÷ 2 is not an integer.",
      "Verifica se un insieme numerico resta nello stesso insieme dopo un'operazione. Gli interi non sono chiusi rispetto alla divisione perché 1 ÷ 2 non è un intero."
    ],
    "q": [
      "Which statement correctly describes closure of the integers under division?",
      "Quale affermazione descrive correttamente la chiusura degli interi rispetto alla divisione?"
    ],
    "a": [
      [
        "They are not closed: 1 ÷ 2 = 0.5 is not an integer.",
        "Non sono chiusi: 1 ÷ 2 = 0,5 non è un intero."
      ],
      [
        "They are closed because 1 and 2 are integers.",
        "Sono chiusi perché 1 e 2 sono interi."
      ],
      [
        "They are closed only when the answer is negative.",
        "Sono chiusi solo quando il risultato è negativo."
      ],
      [
        "They are closed because division always gives an integer.",
        "Sono chiusi perché la divisione dà sempre un intero."
      ]
    ],
    "why": [
      "A set is closed under an operation only if every allowed operation on members of the set produces another member. 1 ÷ 2 is not an integer.",
      "Un insieme è chiuso rispetto a un'operazione solo se ogni operazione tra suoi elementi produce ancora un elemento dell'insieme. 1 ÷ 2 non è un intero."
    ]
  },
  {
    "id": "ss1-real-cs1-li2",
    "strand": "Numbers for Everyday Life",
    "subStrand": "Real Number System",
    "contentStandardId": "1.1.1.CS.1",
    "learningIndicatorId": "1.1.1.LI.2",
    "title": [
      "Rational and irrational numbers",
      "Numeri razionali e irrazionali"
    ],
    "explanation": [
      "A rational number can be written as a fraction of integers and has a terminating or recurring decimal. An irrational number has a non-terminating, non-recurring decimal.",
      "Un numero razionale si può scrivere come frazione di interi e ha uno sviluppo decimale limitato o periodico. Un irrazionale ha uno sviluppo decimale illimitato e non periodico."
    ],
    "q": [
      "Which number is irrational?",
      "Quale numero è irrazionale?"
    ],
    "a": [
      [
        "√7",
        "√7"
      ],
      [
        "0.125",
        "0,125"
      ],
      [
        "2/3",
        "2/3"
      ],
      [
        "0.444…",
        "0,444…"
      ]
    ],
    "why": [
      "√7 cannot be expressed as a ratio of two integers. The other choices are rational.",
      "√7 non può essere espresso come rapporto tra due interi. Le altre risposte sono razionali."
    ]
  },
  {
    "id": "ss1-real-cs1-li3",
    "strand": "Numbers for Everyday Life",
    "subStrand": "Real Number System",
    "contentStandardId": "1.1.1.CS.1",
    "learningIndicatorId": "1.1.1.LI.3",
    "title": [
      "Properties of real-number operations",
      "Proprietà delle operazioni sui numeri reali"
    ],
    "explanation": [
      "Recognise commutative, associative, identity, inverse and distributive properties and use them to simplify calculations.",
      "Riconosci le proprietà commutativa, associativa, dell'elemento neutro, dell'inverso e distributiva e usale per semplificare i calcoli."
    ],
    "q": [
      "Which equality demonstrates the distributive property?",
      "Quale uguaglianza dimostra la proprietà distributiva?"
    ],
    "a": [
      [
        "4(3 + 2) = 4 × 3 + 4 × 2",
        "4(3 + 2) = 4 × 3 + 4 × 2"
      ],
      [
        "3 + 5 = 5 + 3",
        "3 + 5 = 5 + 3"
      ],
      [
        "(2 × 3) × 4 = 2 × (3 × 4)",
        "(2 × 3) × 4 = 2 × (3 × 4)"
      ],
      [
        "7 + 0 = 7",
        "7 + 0 = 7"
      ]
    ],
    "why": [
      "The factor 4 is multiplied by each term inside the brackets. The other options show commutativity, associativity and the additive identity.",
      "Il fattore 4 viene moltiplicato per ciascun termine dentro le parentesi. Le altre risposte mostrano commutatività, associatività ed elemento neutro additivo."
    ]
  },
  {
    "id": "ss1-real-cs2-li1",
    "strand": "Numbers for Everyday Life",
    "subStrand": "Real Number System",
    "contentStandardId": "1.1.1.CS.2",
    "learningIndicatorId": "1.1.1.LI.1",
    "title": [
      "Two-set vocabulary and operations",
      "Lessico e operazioni con due insiemi"
    ],
    "explanation": [
      "Use union, intersection and complement correctly. The intersection contains only elements shared by both sets.",
      "Usa correttamente unione, intersezione e complementare. L'intersezione contiene solo gli elementi comuni a entrambi gli insiemi."
    ],
    "q": [
      "If A = {2, 4, 6} and B = {4, 6, 8}, what is A ∩ B?",
      "Se A = {2, 4, 6} e B = {4, 6, 8}, quanto vale A ∩ B?"
    ],
    "a": [
      [
        "{4, 6}",
        "{4, 6}"
      ],
      [
        "{2, 8}",
        "{2, 8}"
      ],
      [
        "{2, 4, 6, 8}",
        "{2, 4, 6, 8}"
      ],
      [
        "{2, 4}",
        "{2, 4}"
      ]
    ],
    "why": [
      "The intersection contains the elements that appear in both sets: 4 and 6.",
      "L'intersezione contiene gli elementi presenti in entrambi gli insiemi: 4 e 6."
    ]
  },
  {
    "id": "ss1-real-cs2-li2",
    "strand": "Numbers for Everyday Life",
    "subStrand": "Real Number System",
    "contentStandardId": "1.1.1.CS.2",
    "learningIndicatorId": "1.1.1.LI.2",
    "title": [
      "Two-set Venn-diagram problems",
      "Problemi con diagrammi di Venn a due insiemi"
    ],
    "explanation": [
      "For two sets, add the set totals and subtract the overlap once to count everyone in the union exactly once.",
      "Per due insiemi, somma i totali e sottrai una volta l'intersezione per contare ogni elemento dell'unione una sola volta."
    ],
    "q": [
      "In a class, 24 learners like football, 18 like netball and 7 like both. How many like at least one sport?",
      "In una classe, 24 studenti amano il calcio, 18 la pallavolo e 7 entrambi. Quanti amano almeno uno dei due sport?"
    ],
    "a": [
      [
        "35",
        "35"
      ],
      [
        "42",
        "42"
      ],
      [
        "49",
        "49"
      ],
      [
        "31",
        "31"
      ]
    ],
    "why": [
      "Use n(F ∪ N) = 24 + 18 − 7 = 35.",
      "Usa n(F ∪ N) = 24 + 18 − 7 = 35."
    ]
  },
  {
    "id": "ss1-real-cs2-li3",
    "strand": "Numbers for Everyday Life",
    "subStrand": "Real Number System",
    "contentStandardId": "1.1.1.CS.2",
    "learningIndicatorId": "1.1.1.LI.3",
    "title": [
      "Three-set relationships and De Morgan's laws",
      "Relazioni tra tre insiemi e leggi di De Morgan"
    ],
    "explanation": [
      "De Morgan's laws connect the complement of a union with the intersection of complements, and the complement of an intersection with the union of complements.",
      "Le leggi di De Morgan collegano il complementare di un'unione all'intersezione dei complementari e il complementare di un'intersezione all'unione dei complementari."
    ],
    "q": [
      "Which identity is a De Morgan law?",
      "Quale identità è una legge di De Morgan?"
    ],
    "a": [
      [
        "(A ∪ B)′ = A′ ∩ B′",
        "(A ∪ B)′ = A′ ∩ B′"
      ],
      [
        "(A ∪ B)′ = A ∪ B",
        "(A ∪ B)′ = A ∪ B"
      ],
      [
        "A ∩ B = A′ ∩ B′",
        "A ∩ B = A′ ∩ B′"
      ],
      [
        "A ∪ B = A′ ∪ B′",
        "A ∪ B = A′ ∪ B′"
      ]
    ],
    "why": [
      "The complement of a union is the intersection of the complements.",
      "Il complementare di un'unione è l'intersezione dei complementari."
    ]
  },
  {
    "id": "ss1-prop-cs1-li1",
    "strand": "Numbers for Everyday Life",
    "subStrand": "Proportional Reasoning",
    "contentStandardId": "1.1.2.CS.1",
    "learningIndicatorId": "1.1.2.LI.1",
    "title": [
      "Fraction, decimal and percentage connections",
      "Collegamenti tra frazioni, decimali e percentuali"
    ],
    "explanation": [
      "Convert accurately among fractions, decimals and percentages, and use equivalent forms to estimate and calculate.",
      "Converti correttamente frazioni, decimali e percentuali e usa le forme equivalenti per stimare e calcolare."
    ],
    "q": [
      "Which statement gives the correct equivalents for 7/20?",
      "Quale affermazione riporta le equivalenze corrette di 7/20?"
    ],
    "a": [
      [
        "0.35 and 35%",
        "0,35 e 35%"
      ],
      [
        "0.7 and 7%",
        "0,7 e 7%"
      ],
      [
        "0.07 and 70%",
        "0,07 e 70%"
      ],
      [
        "3.5 and 350%",
        "3,5 e 350%"
      ]
    ],
    "why": [
      "7 ÷ 20 = 0.35, and 0.35 × 100 = 35%.",
      "7 ÷ 20 = 0,35 e 0,35 × 100 = 35%."
    ]
  },
  {
    "id": "ss1-prop-cs1-li2",
    "strand": "Numbers for Everyday Life",
    "subStrand": "Proportional Reasoning",
    "contentStandardId": "1.1.2.CS.1",
    "learningIndicatorId": "1.1.2.LI.2",
    "title": [
      "Additive and multiplicative inverses",
      "Inversi additivi e moltiplicativi"
    ],
    "explanation": [
      "The additive inverse makes a sum of zero. The multiplicative inverse makes a product of one, provided the number is not zero.",
      "L'inverso additivo dà una somma uguale a zero. L'inverso moltiplicativo dà un prodotto uguale a uno, purché il numero non sia zero."
    ],
    "q": [
      "For 3/5, which pair gives its additive inverse and multiplicative inverse, in that order?",
      "Per 3/5, quale coppia indica nell'ordine l'inverso additivo e quello moltiplicativo?"
    ],
    "a": [
      [
        "−3/5 and 5/3",
        "−3/5 e 5/3"
      ],
      [
        "3/5 and −5/3",
        "3/5 e −5/3"
      ],
      [
        "5/3 and −3/5",
        "5/3 e −3/5"
      ],
      [
        "−5/3 and 3/5",
        "−5/3 e 3/5"
      ]
    ],
    "why": [
      "The additive inverse is −3/5; the reciprocal is 5/3 because (3/5)(5/3) = 1.",
      "L'inverso additivo è −3/5; il reciproco è 5/3 perché (3/5)(5/3) = 1."
    ]
  },
  {
    "id": "ss1-prop-cs2-li1",
    "strand": "Numbers for Everyday Life",
    "subStrand": "Proportional Reasoning",
    "contentStandardId": "1.1.2.CS.2",
    "learningIndicatorId": "1.1.2.LI.1",
    "title": [
      "Percentage models and generalisations",
      "Modelli percentuali e generalizzazioni"
    ],
    "explanation": [
      "Interpret a percentage as parts per hundred and move between fraction, decimal and percentage representations in practical calculations.",
      "Interpreta una percentuale come parti su cento e passa tra rappresentazioni frazionarie, decimali e percentuali nei calcoli pratici."
    ],
    "q": [
      "What percentage of 80 is 20?",
      "20 che percentuale rappresenta di 80?"
    ],
    "a": [
      [
        "25%",
        "25%"
      ],
      [
        "20%",
        "20%"
      ],
      [
        "40%",
        "40%"
      ],
      [
        "4%",
        "4%"
      ]
    ],
    "why": [
      "20 ÷ 80 = 0.25, which is 25%.",
      "20 ÷ 80 = 0,25, cioè 25%."
    ]
  },
  {
    "id": "ss1-prop-cs2-li2",
    "strand": "Numbers for Everyday Life",
    "subStrand": "Proportional Reasoning",
    "contentStandardId": "1.1.2.CS.2",
    "learningIndicatorId": "1.1.2.LI.2",
    "title": [
      "Everyday financial mathematics",
      "Matematica finanziaria quotidiana"
    ],
    "explanation": [
      "Apply percentages to simple interest, discounts, profit, loss and commission. Identify the correct starting amount and rate.",
      "Applica le percentuali a interesse semplice, sconti, profitti, perdite e commissioni. Individua l'importo iniziale e il tasso corretti."
    ],
    "q": [
      "A trader buys an item for GH₵80 and sells it for GH₵100. What is the profit percentage on cost?",
      "Un commerciante compra un articolo a GH₵80 e lo vende a GH₵100. Qual è la percentuale di profitto sul costo?"
    ],
    "a": [
      [
        "25%",
        "25%"
      ],
      [
        "20%",
        "20%"
      ],
      [
        "80%",
        "80%"
      ],
      [
        "125%",
        "125%"
      ]
    ],
    "why": [
      "Profit = 100 − 80 = GH₵20. Profit percentage = 20 ÷ 80 × 100 = 25%.",
      "Profitto = 100 − 80 = GH₵20. Percentuale di profitto = 20 ÷ 80 × 100 = 25%."
    ]
  },
  {
    "id": "ss1-algebra-cs1-li1",
    "strand": "Algebraic Reasoning",
    "subStrand": "Applications of Expressions, Equations and Inequalities",
    "contentStandardId": "1.2.1.CS.1",
    "learningIndicatorId": "1.2.1.LI.1",
    "title": [
      "Form and simplify algebraic expressions",
      "Formare e semplificare espressioni algebriche"
    ],
    "explanation": [
      "Translate patterns and situations into expressions, then use the order of the four operations to simplify them.",
      "Traduci schemi e situazioni in espressioni, poi usa l'ordine delle quattro operazioni per semplificarle."
    ],
    "q": [
      "Simplify 4x + 3(2x − 5).",
      "Semplifica 4x + 3(2x − 5)."
    ],
    "a": [
      [
        "10x − 15",
        "10x − 15"
      ],
      [
        "6x − 15",
        "6x − 15"
      ],
      [
        "10x + 15",
        "10x + 15"
      ],
      [
        "7x − 5",
        "7x − 5"
      ]
    ],
    "why": [
      "Expand first: 3(2x − 5) = 6x − 15. Then 4x + 6x − 15 = 10x − 15.",
      "Prima sviluppa: 3(2x − 5) = 6x − 15. Poi 4x + 6x − 15 = 10x − 15."
    ]
  },
  {
    "id": "ss1-algebra-cs1-li2",
    "strand": "Algebraic Reasoning",
    "subStrand": "Applications of Expressions, Equations and Inequalities",
    "contentStandardId": "1.2.1.CS.1",
    "learningIndicatorId": "1.2.1.LI.2",
    "title": [
      "Factorise quadratic trinomials",
      "Scomporre trinomi quadratici"
    ],
    "explanation": [
      "Factorise a quadratic trinomial by finding two numbers whose product is the constant term and whose sum is the coefficient of x.",
      "Scomponi un trinomio quadratico trovando due numeri il cui prodotto è il termine noto e la cui somma è il coefficiente di x."
    ],
    "q": [
      "Factorise x² + 7x + 12.",
      "Scomponi x² + 7x + 12."
    ],
    "a": [
      [
        "(x + 3)(x + 4)",
        "(x + 3)(x + 4)"
      ],
      [
        "(x + 2)(x + 6)",
        "(x + 2)(x + 6)"
      ],
      [
        "(x − 3)(x − 4)",
        "(x − 3)(x − 4)"
      ],
      [
        "(x + 1)(x + 12)",
        "(x + 1)(x + 12)"
      ]
    ],
    "why": [
      "3 × 4 = 12 and 3 + 4 = 7, so the factors are (x + 3)(x + 4).",
      "3 × 4 = 12 e 3 + 4 = 7, quindi i fattori sono (x + 3)(x + 4)."
    ]
  },
  {
    "id": "ss1-algebra-cs1-li3",
    "strand": "Algebraic Reasoning",
    "subStrand": "Applications of Expressions, Equations and Inequalities",
    "contentStandardId": "1.2.1.CS.1",
    "learningIndicatorId": "1.2.1.LI.3",
    "title": [
      "Perfect squares and difference of squares",
      "Quadrati perfetti e differenza di quadrati"
    ],
    "explanation": [
      "Recognise square expressions and use a² − b² = (a − b)(a + b) to factorise differences of two squares.",
      "Riconosci le espressioni quadratiche perfette e usa a² − b² = (a − b)(a + b) per scomporre differenze di quadrati."
    ],
    "q": [
      "Factorise 9a² − 25.",
      "Scomponi 9a² − 25."
    ],
    "a": [
      [
        "(3a − 5)(3a + 5)",
        "(3a − 5)(3a + 5)"
      ],
      [
        "(9a − 5)(a + 5)",
        "(9a − 5)(a + 5)"
      ],
      [
        "(3a − 5)²",
        "(3a − 5)²"
      ],
      [
        "(3a + 5)²",
        "(3a + 5)²"
      ]
    ],
    "why": [
      "9a² = (3a)² and 25 = 5², so apply the difference-of-squares identity.",
      "9a² = (3a)² e 25 = 5², quindi applica l'identità della differenza di quadrati."
    ]
  },
  {
    "id": "ss1-algebra-cs1-li4",
    "strand": "Algebraic Reasoning",
    "subStrand": "Applications of Expressions, Equations and Inequalities",
    "contentStandardId": "1.2.1.CS.1",
    "learningIndicatorId": "1.2.1.LI.4",
    "title": [
      "Algebraic fractions and restrictions",
      "Frazioni algebriche e condizioni di esistenza"
    ],
    "explanation": [
      "Simplify algebraic fractions while preserving restrictions that make a denominator zero. A cancelled factor does not remove the original restriction.",
      "Semplifica le frazioni algebriche mantenendo le condizioni che rendono nullo il denominatore. Semplificare un fattore non elimina la condizione iniziale."
    ],
    "q": [
      "For (x² − 9)/(x − 3), which simplified form and restriction are correct?",
      "Per (x² − 9)/(x − 3), quale forma semplificata e condizione sono corrette?"
    ],
    "a": [
      [
        "x + 3, where x ≠ 3",
        "x + 3, con x ≠ 3"
      ],
      [
        "x − 3, where x ≠ 3",
        "x − 3, con x ≠ 3"
      ],
      [
        "x + 3, for every real x",
        "x + 3, per ogni numero reale x"
      ],
      [
        "x² + 3, where x ≠ 0",
        "x² + 3, con x ≠ 0"
      ]
    ],
    "why": [
      "Factor x² − 9 = (x − 3)(x + 3), then cancel x − 3. The original denominator still requires x ≠ 3.",
      "Scomponi x² − 9 = (x − 3)(x + 3), poi semplifica x − 3. Il denominatore originale richiede comunque x ≠ 3."
    ]
  },
  {
    "id": "ss1-algebra-cs2-li1",
    "strand": "Algebraic Reasoning",
    "subStrand": "Applications of Expressions, Equations and Inequalities",
    "contentStandardId": "1.2.1.CS.2",
    "learningIndicatorId": "1.2.1.LI.1",
    "title": [
      "Rearrange and interpret formulae",
      "Riordinare e interpretare formule"
    ],
    "explanation": [
      "Change the subject of a formula by performing the same operation on both sides and keeping the required variable isolated.",
      "Cambia il soggetto di una formula eseguendo la stessa operazione su entrambi i membri e isolando la variabile richiesta."
    ],
    "q": [
      "If E = mv² and all quantities are positive, which formula makes v the subject?",
      "Se E = mv² e tutte le grandezze sono positive, quale formula isola v?"
    ],
    "a": [
      [
        "v = √(E/m)",
        "v = √(E/m)"
      ],
      [
        "v = E/m²",
        "v = E/m²"
      ],
      [
        "v = √(m/E)",
        "v = √(m/E)"
      ],
      [
        "v = E − m²",
        "v = E − m²"
      ]
    ],
    "why": [
      "Divide by m to get v² = E/m, then take the positive square root: v = √(E/m).",
      "Dividi per m: v² = E/m, poi prendi la radice quadrata positiva: v = √(E/m)."
    ]
  },
  {
    "id": "ss1-algebra-cs2-li2",
    "strand": "Algebraic Reasoning",
    "subStrand": "Applications of Expressions, Equations and Inequalities",
    "contentStandardId": "1.2.1.CS.2",
    "learningIndicatorId": "1.2.1.LI.2",
    "title": [
      "Solve equations and inequalities",
      "Risolvere equazioni e disequazioni"
    ],
    "explanation": [
      "Solve one-variable equations and inequalities using inverse operations. Reverse the inequality sign only when multiplying or dividing by a negative number.",
      "Risolvi equazioni e disequazioni in una variabile usando le operazioni inverse. Inverti il verso della disequazione solo quando moltiplichi o dividi per un numero negativo."
    ],
    "q": [
      "Solve 3x − 5 ≤ 10.",
      "Risolvi 3x − 5 ≤ 10."
    ],
    "a": [
      [
        "x ≤ 5",
        "x ≤ 5"
      ],
      [
        "x ≥ 5",
        "x ≥ 5"
      ],
      [
        "x ≤ 15",
        "x ≤ 15"
      ],
      [
        "x ≥ 15",
        "x ≥ 15"
      ]
    ],
    "why": [
      "Add 5 to both sides: 3x ≤ 15. Divide by 3: x ≤ 5.",
      "Aggiungi 5 a entrambi i membri: 3x ≤ 15. Dividi per 3: x ≤ 5."
    ]
  },
  {
    "id": "ss1-patterns-cs1-li1",
    "strand": "Algebraic Reasoning",
    "subStrand": "Patterns and Relationships",
    "contentStandardId": "1.2.2.CS.1",
    "learningIndicatorId": "1.2.2.LI.1",
    "title": [
      "Relations, functions and mapping rules",
      "Relazioni, funzioni e regole di corrispondenza"
    ],
    "explanation": [
      "A function assigns exactly one output to each input. Use mapping diagrams, tables and patterns to identify rules.",
      "Una funzione assegna esattamente un risultato a ogni valore in ingresso. Usa diagrammi, tabelle e schemi per individuare le regole."
    ],
    "q": [
      "A mapping sends input 2 to both 5 and 7. Can this mapping be a function?",
      "Una corrispondenza associa all'ingresso 2 sia 5 sia 7. Può essere una funzione?"
    ],
    "a": [
      [
        "No, because one input has two different outputs.",
        "No, perché un ingresso ha due risultati diversi."
      ],
      [
        "Yes, every relation is a function.",
        "Sì, ogni relazione è una funzione."
      ],
      [
        "Yes, because the outputs are positive.",
        "Sì, perché i risultati sono positivi."
      ],
      [
        "No, because functions cannot use whole numbers.",
        "No, perché le funzioni non possono usare numeri interi."
      ]
    ],
    "why": [
      "A function must assign exactly one output to each input. One input mapped to two outputs fails this rule.",
      "Una funzione deve assegnare un solo risultato a ogni ingresso. Un ingresso associato a due risultati non rispetta questa regola."
    ]
  },
  {
    "id": "ss1-patterns-cs1-li2",
    "strand": "Algebraic Reasoning",
    "subStrand": "Patterns and Relationships",
    "contentStandardId": "1.2.2.CS.1",
    "learningIndicatorId": "1.2.2.LI.2",
    "title": [
      "Exponential mapping patterns",
      "Schemi di corrispondenza esponenziale"
    ],
    "explanation": [
      "Recognise exponential patterns in which a quantity is multiplied by the same factor at each step, and use the rule to predict later values.",
      "Riconosci gli schemi esponenziali in cui una quantità viene moltiplicata per lo stesso fattore a ogni passaggio e usa la regola per prevedere i valori successivi."
    ],
    "q": [
      "The sequence is 3, 9, 27, 81. What is the next term?",
      "La sequenza è 3, 9, 27, 81. Qual è il termine successivo?"
    ],
    "a": [
      [
        "243",
        "243"
      ],
      [
        "162",
        "162"
      ],
      [
        "108",
        "108"
      ],
      [
        "324",
        "324"
      ]
    ],
    "why": [
      "Each term is multiplied by 3. Therefore 81 × 3 = 243.",
      "Ogni termine viene moltiplicato per 3. Quindi 81 × 3 = 243."
    ]
  },
  {
    "id": "ss1-patterns-cs2-li1",
    "strand": "Algebraic Reasoning",
    "subStrand": "Patterns and Relationships",
    "contentStandardId": "1.2.2.CS.2",
    "learningIndicatorId": "1.2.2.LI.1",
    "title": [
      "Gradient and equation of a straight line",
      "Gradiente ed equazione della retta"
    ],
    "explanation": [
      "Calculate gradient as change in y divided by change in x, then use it to interpret or construct a straight-line equation.",
      "Calcola il gradiente come variazione di y divisa per la variazione di x, poi usalo per interpretare o costruire l'equazione di una retta."
    ],
    "q": [
      "What is the gradient of the line through (1, 3) and (3, 7)?",
      "Qual è il gradiente della retta passante per (1, 3) e (3, 7)?"
    ],
    "a": [
      [
        "2",
        "2"
      ],
      [
        "1/2",
        "1/2"
      ],
      [
        "4",
        "4"
      ],
      [
        "−2",
        "−2"
      ]
    ],
    "why": [
      "Gradient = (7 − 3)/(3 − 1) = 4/2 = 2.",
      "Gradiente = (7 − 3)/(3 − 1) = 4/2 = 2."
    ]
  },
  {
    "id": "ss1-patterns-cs2-li2",
    "strand": "Algebraic Reasoning",
    "subStrand": "Patterns and Relationships",
    "contentStandardId": "1.2.2.CS.2",
    "learningIndicatorId": "1.2.2.LI.2",
    "title": [
      "Midpoint and distance of a line segment",
      "Punto medio e distanza di un segmento"
    ],
    "explanation": [
      "Use coordinate differences to find the midpoint and the distance between two points, applying the Pythagorean theorem where needed.",
      "Usa le differenze tra coordinate per trovare il punto medio e la distanza tra due punti, applicando il teorema di Pitagora quando serve."
    ],
    "q": [
      "What is the midpoint of the segment joining (2, 1) and (6, 4)?",
      "Qual è il punto medio del segmento che unisce (2, 1) e (6, 4)?"
    ],
    "a": [
      [
        "(4, 2.5)",
        "(4, 2,5)"
      ],
      [
        "(8, 5)",
        "(8, 5)"
      ],
      [
        "(3, 2.5)",
        "(3, 2,5)"
      ],
      [
        "(4, 3)",
        "(4, 3)"
      ]
    ],
    "why": [
      "Average the x-coordinates and the y-coordinates: ((2 + 6)/2, (1 + 4)/2) = (4, 2.5).",
      "Calcola la media delle coordinate x e delle coordinate y: ((2 + 6)/2, (1 + 4)/2) = (4, 2,5)."
    ]
  },
  {
    "id": "ss1-spatial-li1",
    "strand": "Geometry Around Us",
    "subStrand": "Spatial Sense",
    "contentStandardId": "1.3.1.CS.1",
    "learningIndicatorId": "1.3.1.LI.1",
    "title": [
      "Angle types and measures",
      "Tipi e misure degli angoli"
    ],
    "explanation": [
      "Identify and describe acute, right, straight, obtuse and reflex angles, and estimate or measure their sizes.",
      "Riconosci e descrivi angoli acuti, retti, piatti, ottusi e concavi, e stima o misura la loro ampiezza."
    ],
    "q": [
      "An angle measures 225°. What type of angle is it?",
      "Un angolo misura 225°. Di che tipo di angolo si tratta?"
    ],
    "a": [
      [
        "Reflex angle",
        "Angolo concavo"
      ],
      [
        "Acute angle",
        "Angolo acuto"
      ],
      [
        "Right angle",
        "Angolo retto"
      ],
      [
        "Obtuse angle",
        "Angolo ottuso"
      ]
    ],
    "why": [
      "225° is greater than 180° and less than 360°, so it is a reflex angle.",
      "225° è maggiore di 180° e minore di 360°, quindi è un angolo concavo."
    ]
  },
  {
    "id": "ss1-spatial-li2",
    "strand": "Geometry Around Us",
    "subStrand": "Spatial Sense",
    "contentStandardId": "1.3.1.CS.1",
    "learningIndicatorId": "1.3.1.LI.2",
    "title": [
      "Parallel lines and transversals",
      "Rette parallele e trasversali"
    ],
    "explanation": [
      "Use angle relationships formed when a transversal crosses parallel lines. Alternate interior angles are equal.",
      "Usa le relazioni tra gli angoli formati da una trasversale che interseca rette parallele. Gli angoli alterni interni sono congruenti."
    ],
    "q": [
      "Two parallel lines are crossed by a transversal. If one alternate interior angle is 68°, what is the other?",
      "Due rette parallele sono tagliate da una trasversale. Se un angolo alterno interno misura 68°, quanto misura l'altro?"
    ],
    "a": [
      [
        "68°",
        "68°"
      ],
      [
        "112°",
        "112°"
      ],
      [
        "22°",
        "22°"
      ],
      [
        "136°",
        "136°"
      ]
    ],
    "why": [
      "Alternate interior angles are equal when the lines are parallel.",
      "Gli angoli alterni interni sono uguali quando le rette sono parallele."
    ]
  },
  {
    "id": "ss1-spatial-li3",
    "strand": "Geometry Around Us",
    "subStrand": "Spatial Sense",
    "contentStandardId": "1.3.1.CS.1",
    "learningIndicatorId": "1.3.1.LI.3",
    "title": [
      "Triangle angle properties",
      "Proprietà degli angoli del triangolo"
    ],
    "explanation": [
      "Use the triangle angle sum and exterior-angle theorem to solve problems involving interior and exterior angles.",
      "Usa la somma degli angoli interni e il teorema dell'angolo esterno per risolvere problemi sui triangoli."
    ],
    "q": [
      "A triangle has two remote interior angles of 52° and 61°. What is the exterior angle at the third vertex?",
      "Un triangolo ha due angoli interni non adiacenti di 52° e 61°. Quanto misura l'angolo esterno al terzo vertice?"
    ],
    "a": [
      [
        "113°",
        "113°"
      ],
      [
        "109°",
        "109°"
      ],
      [
        "119°",
        "119°"
      ],
      [
        "123°",
        "123°"
      ]
    ],
    "why": [
      "The exterior angle equals the sum of the two remote interior angles: 52° + 61° = 113°.",
      "L'angolo esterno è uguale alla somma dei due angoli interni non adiacenti: 52° + 61° = 113°."
    ]
  },
  {
    "id": "ss1-spatial-li4",
    "strand": "Geometry Around Us",
    "subStrand": "Spatial Sense",
    "contentStandardId": "1.3.1.CS.1",
    "learningIndicatorId": "1.3.1.LI.4",
    "title": [
      "Pythagorean theorem",
      "Teorema di Pitagora"
    ],
    "explanation": [
      "In a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides.",
      "In un triangolo rettangolo, il quadrato dell'ipotenusa è uguale alla somma dei quadrati degli altri due lati."
    ],
    "q": [
      "A right triangle has shorter sides of 9 cm and 12 cm. What is its hypotenuse?",
      "Un triangolo rettangolo ha cateti di 9 cm e 12 cm. Quanto misura l'ipotenusa?"
    ],
    "a": [
      [
        "15 cm",
        "15 cm"
      ],
      [
        "18 cm",
        "18 cm"
      ],
      [
        "21 cm",
        "21 cm"
      ],
      [
        "12 cm",
        "12 cm"
      ]
    ],
    "why": [
      "c² = 9² + 12² = 81 + 144 = 225, so c = 15 cm.",
      "c² = 9² + 12² = 81 + 144 = 225, quindi c = 15 cm."
    ]
  },
  {
    "id": "ss1-spatial-li5",
    "strand": "Geometry Around Us",
    "subStrand": "Spatial Sense",
    "contentStandardId": "1.3.1.CS.1",
    "learningIndicatorId": "1.3.1.LI.5",
    "title": [
      "Polygon interior-angle sums",
      "Somma degli angoli interni dei poligoni"
    ],
    "explanation": [
      "For an n-sided polygon, the sum of interior angles is (n − 2) × 180°.",
      "Per un poligono con n lati, la somma degli angoli interni è (n − 2) × 180°."
    ],
    "q": [
      "What is the sum of the interior angles of an octagon?",
      "Quanto misura la somma degli angoli interni di un ottagono?"
    ],
    "a": [
      [
        "1080°",
        "1080°"
      ],
      [
        "900°",
        "900°"
      ],
      [
        "1260°",
        "1260°"
      ],
      [
        "1440°",
        "1440°"
      ]
    ],
    "why": [
      "An octagon has 8 sides: (8 − 2) × 180° = 1080°.",
      "Un ottagono ha 8 lati: (8 − 2) × 180° = 1080°."
    ]
  },
  {
    "id": "ss1-measure-cs1-li1",
    "strand": "Geometry Around Us",
    "subStrand": "Measurement",
    "contentStandardId": "1.3.2.CS.1",
    "learningIndicatorId": "1.3.2.LI.1",
    "title": [
      "Vector magnitude and direction",
      "Modulo e direzione di un vettore"
    ],
    "explanation": [
      "A vector is a quantity with both magnitude and direction, such as displacement, velocity or force.",
      "Un vettore è una grandezza dotata di modulo e direzione, come spostamento, velocità o forza."
    ],
    "q": [
      "Which statement defines a vector quantity?",
      "Quale affermazione definisce una grandezza vettoriale?"
    ],
    "a": [
      [
        "It has both magnitude and direction.",
        "Ha sia un modulo sia una direzione."
      ],
      [
        "It has magnitude only.",
        "Ha solo un modulo."
      ],
      [
        "It has direction only.",
        "Ha solo una direzione."
      ],
      [
        "It has no measurable size.",
        "Non ha una misura."
      ]
    ],
    "why": [
      "A vector must describe both how much and in which direction.",
      "Un vettore deve descrivere sia quanto sia grande sia in quale direzione agisce."
    ]
  },
  {
    "id": "ss1-measure-cs1-li2",
    "strand": "Geometry Around Us",
    "subStrand": "Measurement",
    "contentStandardId": "1.3.2.CS.1",
    "learningIndicatorId": "1.3.2.LI.2",
    "title": [
      "Represent and compare vectors",
      "Rappresentare e confrontare vettori"
    ],
    "explanation": [
      "Represent vectors as directed line segments or algebraically. Vectors are equal when they have the same magnitude and direction, even at different positions.",
      "Rappresenta i vettori con segmenti orientati o in forma algebrica. Due vettori sono uguali se hanno lo stesso modulo e la stessa direzione, anche in posizioni diverse."
    ],
    "q": [
      "When are two vectors equal?",
      "Quando due vettori sono uguali?"
    ],
    "a": [
      [
        "When they have the same magnitude and direction.",
        "Quando hanno lo stesso modulo e la stessa direzione."
      ],
      [
        "When they start at the same point.",
        "Quando partono dallo stesso punto."
      ],
      [
        "When they have the same direction but different magnitudes.",
        "Quando hanno la stessa direzione ma moduli diversi."
      ],
      [
        "When they have the same length but opposite directions.",
        "Quando hanno la stessa lunghezza ma direzioni opposte."
      ]
    ],
    "why": [
      "Position does not determine vector equality; magnitude and direction do.",
      "La posizione non determina l'uguaglianza dei vettori: contano modulo e direzione."
    ]
  },
  {
    "id": "ss1-measure-cs2-li1",
    "strand": "Geometry Around Us",
    "subStrand": "Measurement",
    "contentStandardId": "1.3.2.CS.2",
    "learningIndicatorId": "1.3.2.LI.1",
    "title": [
      "Primary trigonometric ratios",
      "Rapporti trigonometrici fondamentali"
    ],
    "explanation": [
      "Use sine, cosine and tangent to relate the sides and acute angles of right-angled triangles.",
      "Usa seno, coseno e tangente per collegare lati e angoli acuti nei triangoli rettangoli."
    ],
    "q": [
      "In a right triangle, the opposite side is 6 cm and the hypotenuse is 10 cm. What is sin θ?",
      "In un triangolo rettangolo, il cateto opposto misura 6 cm e l'ipotenusa 10 cm. Quanto vale sin θ?"
    ],
    "a": [
      [
        "0.6",
        "0,6"
      ],
      [
        "0.4",
        "0,4"
      ],
      [
        "1.6",
        "1,6"
      ],
      [
        "6.0",
        "6,0"
      ]
    ],
    "why": [
      "sin θ = opposite ÷ hypotenuse = 6 ÷ 10 = 0.6.",
      "sin θ = cateto opposto ÷ ipotenusa = 6 ÷ 10 = 0,6."
    ]
  },
  {
    "id": "ss1-measure-cs2-li2",
    "strand": "Geometry Around Us",
    "subStrand": "Measurement",
    "contentStandardId": "1.3.2.CS.2",
    "learningIndicatorId": "1.3.2.LI.2",
    "title": [
      "Special-angle trigonometric values",
      "Valori trigonometrici degli angoli notevoli"
    ],
    "explanation": [
      "Know the exact sine, cosine and tangent values for 30°, 45° and 60°, and use a calculator appropriately for angles up to 360°.",
      "Conosci i valori esatti di seno, coseno e tangente per 30°, 45° e 60° e usa correttamente la calcolatrice per angoli fino a 360°."
    ],
    "q": [
      "What is the exact value of sin 30°?",
      "Qual è il valore esatto di sin 30°?"
    ],
    "a": [
      [
        "1/2",
        "1/2"
      ],
      [
        "√3/2",
        "√3/2"
      ],
      [
        "1",
        "1"
      ],
      [
        "√2/2",
        "√2/2"
      ]
    ],
    "why": [
      "The standard special-angle value is sin 30° = 1/2.",
      "Il valore notevole è sin 30° = 1/2."
    ]
  },
  {
    "id": "ss1-measure-cs2-li3",
    "strand": "Geometry Around Us",
    "subStrand": "Measurement",
    "contentStandardId": "1.3.2.CS.2",
    "learningIndicatorId": "1.3.2.LI.3",
    "title": [
      "Trigonometry in standard position",
      "Trigonometria in posizione standard"
    ],
    "explanation": [
      "Apply sine, cosine and tangent to angles from 0° to 360°, paying attention to the sign in each quadrant.",
      "Applica seno, coseno e tangente agli angoli da 0° a 360°, prestando attenzione al segno in ciascun quadrante."
    ],
    "q": [
      "What is sin 210°?",
      "Quanto vale sin 210°?"
    ],
    "a": [
      [
        "−1/2",
        "−1/2"
      ],
      [
        "1/2",
        "1/2"
      ],
      [
        "−√3/2",
        "−√3/2"
      ],
      [
        "√3/2",
        "√3/2"
      ]
    ],
    "why": [
      "210° = 180° + 30°. Sine is negative in the third quadrant, so sin 210° = −sin 30° = −1/2.",
      "210° = 180° + 30°. Il seno è negativo nel terzo quadrante, quindi sin 210° = −sin 30° = −1/2."
    ]
  },
  {
    "id": "ss1-measure-cs3-li1",
    "strand": "Geometry Around Us",
    "subStrand": "Measurement",
    "contentStandardId": "1.3.2.CS.3",
    "learningIndicatorId": "1.3.2.LI.1",
    "title": [
      "Measurement referents and unit conversions",
      "Riferimenti di misura e conversioni di unità"
    ],
    "explanation": [
      "Choose sensible referents and convert units accurately before comparing or calculating measurements.",
      "Scegli riferimenti di misura sensati e converti correttamente le unità prima di confrontare o calcolare misure."
    ],
    "q": [
      "Convert 2.4 metres to centimetres.",
      "Converti 2,4 metri in centimetri."
    ],
    "a": [
      [
        "240 cm",
        "240 cm"
      ],
      [
        "24 cm",
        "24 cm"
      ],
      [
        "2400 cm",
        "2400 cm"
      ],
      [
        "0.24 cm",
        "0,24 cm"
      ]
    ],
    "why": [
      "1 metre = 100 centimetres, so 2.4 × 100 = 240 cm.",
      "1 metro = 100 centimetri, quindi 2,4 × 100 = 240 cm."
    ]
  },
  {
    "id": "ss1-measure-cs3-li2",
    "strand": "Geometry Around Us",
    "subStrand": "Measurement",
    "contentStandardId": "1.3.2.CS.3",
    "learningIndicatorId": "1.3.2.LI.2",
    "title": [
      "Estimate perimeter and area",
      "Stimare perimetro e area"
    ],
    "explanation": [
      "Estimate perimeter and area for regular, composite and irregular two-dimensional shapes, including shapes on a grid.",
      "Stima perimetro e area di figure piane regolari, composte e irregolari, comprese quelle disegnate su una griglia."
    ],
    "q": [
      "A shape covers 14 full grid squares and 6 half-squares. Each square is 1 cm². What is its estimated area?",
      "Una figura copre 14 quadrati interi e 6 mezzi quadrati. Ogni quadrato misura 1 cm². Qual è l'area stimata?"
    ],
    "a": [
      [
        "17 cm²",
        "17 cm²"
      ],
      [
        "20 cm²",
        "20 cm²"
      ],
      [
        "14 cm²",
        "14 cm²"
      ],
      [
        "11 cm²",
        "11 cm²"
      ]
    ],
    "why": [
      "Six half-squares make 3 full squares. Estimated area = 14 + 3 = 17 cm².",
      "Sei mezzi quadrati formano 3 quadrati interi. Area stimata = 14 + 3 = 17 cm²."
    ]
  },
  {
    "id": "ss1-measure-cs3-li3",
    "strand": "Geometry Around Us",
    "subStrand": "Measurement",
    "contentStandardId": "1.3.2.CS.3",
    "learningIndicatorId": "1.3.2.LI.3",
    "title": [
      "Contextual perimeter and area problems",
      "Problemi contestualizzati su perimetro e area"
    ],
    "explanation": [
      "Select and apply suitable perimeter or area formulae to solve practical problems involving regular, composite or irregular shapes.",
      "Scegli e applica formule adeguate di perimetro o area per risolvere problemi pratici con figure regolari, composte o irregolari."
    ],
    "q": [
      "A school garden is an L-shape made from non-overlapping rectangles of 8 m × 6 m and 4 m × 3 m. What is its total area?",
      "Un giardino scolastico a forma di L è composto da due rettangoli non sovrapposti di 8 m × 6 m e 4 m × 3 m. Qual è l'area totale?"
    ],
    "a": [
      [
        "60 m²",
        "60 m²"
      ],
      [
        "48 m²",
        "48 m²"
      ],
      [
        "36 m²",
        "36 m²"
      ],
      [
        "72 m²",
        "72 m²"
      ]
    ],
    "why": [
      "Add the two areas: 8 × 6 + 4 × 3 = 48 + 12 = 60 m².",
      "Somma le due aree: 8 × 6 + 4 × 3 = 48 + 12 = 60 m²."
    ]
  },
  {
    "id": "ss1-measure-cs3-li4",
    "strand": "Geometry Around Us",
    "subStrand": "Measurement",
    "contentStandardId": "1.3.2.CS.3",
    "learningIndicatorId": "1.3.2.LI.4",
    "title": [
      "Volume of prisms",
      "Volume dei prismi"
    ],
    "explanation": [
      "Find the volume of a prism by multiplying the area of its constant cross-section by its perpendicular length.",
      "Calcola il volume di un prisma moltiplicando l'area della sezione trasversale costante per la lunghezza perpendicolare."
    ],
    "q": [
      "A prism has a cross-sectional area of 18 cm² and a perpendicular length of 7 cm. What is its volume?",
      "Un prisma ha un'area di sezione trasversale di 18 cm² e una lunghezza perpendicolare di 7 cm. Qual è il suo volume?"
    ],
    "a": [
      [
        "126 cm³",
        "126 cm³"
      ],
      [
        "25 cm³",
        "25 cm³"
      ],
      [
        "126 cm²",
        "126 cm²"
      ],
      [
        "252 cm³",
        "252 cm³"
      ]
    ],
    "why": [
      "Volume = cross-sectional area × length = 18 × 7 = 126 cm³.",
      "Volume = area della sezione × lunghezza = 18 × 7 = 126 cm³."
    ]
  },
  {
    "id": "ss1-stats-cs1-li1",
    "strand": "Making Sense of and Using Data",
    "subStrand": "Statistical Reasoning and Its Application in Real Life",
    "contentStandardId": "1.4.1.CS.1",
    "learningIndicatorId": "1.4.1.LI.1",
    "title": [
      "Classify data types",
      "Classificare i tipi di dati"
    ],
    "explanation": [
      "Distinguish primary and secondary data, quantitative and qualitative data, discrete and continuous variables, and grouped and ungrouped data.",
      "Distingui dati primari e secondari, quantitativi e qualitativi, variabili discrete e continue e dati raggruppati e non raggruppati."
    ],
    "q": [
      "The number of siblings reported by each learner is which type of data?",
      "Il numero di fratelli e sorelle dichiarato da ogni studente è quale tipo di dato?"
    ],
    "a": [
      [
        "Discrete quantitative data",
        "Dato quantitativo discreto"
      ],
      [
        "Continuous quantitative data",
        "Dato quantitativo continuo"
      ],
      [
        "Qualitative nominal data",
        "Dato qualitativo nominale"
      ],
      [
        "Secondary qualitative data",
        "Dato qualitativo secondario"
      ]
    ],
    "why": [
      "A number of siblings is a count, so it is quantitative and discrete.",
      "Il numero di fratelli è un conteggio, quindi è un dato quantitativo discreto."
    ]
  },
  {
    "id": "ss1-stats-cs1-li2",
    "strand": "Making Sense of and Using Data",
    "subStrand": "Statistical Reasoning and Its Application in Real Life",
    "contentStandardId": "1.4.1.CS.1",
    "learningIndicatorId": "1.4.1.LI.2",
    "title": [
      "Quantitative data collection methods",
      "Metodi di raccolta dei dati quantitativi"
    ],
    "explanation": [
      "Choose suitable quantitative collection methods such as measurement, structured questionnaires, counts and observations with numerical records.",
      "Scegli metodi adeguati per raccogliere dati quantitativi, come misurazioni, questionari strutturati, conteggi e osservazioni numeriche."
    ],
    "q": [
      "A class wants to compare learners' heights. Which method produces suitable primary quantitative data?",
      "Una classe vuole confrontare le altezze degli studenti. Quale metodo produce dati quantitativi primari adeguati?"
    ],
    "a": [
      [
        "Measure each learner using the same height scale.",
        "Misurare ogni studente usando lo stesso strumento."
      ],
      [
        "Ask learners to describe their favourite colour.",
        "Chiedere agli studenti di descrivere il loro colore preferito."
      ],
      [
        "Copy a story from a newspaper.",
        "Copiare un articolo da un giornale."
      ],
      [
        "Hold an unstructured discussion about sports.",
        "Organizzare una discussione libera sullo sport."
      ]
    ],
    "why": [
      "Direct measurement creates numerical primary data collected consistently from the learners.",
      "La misurazione diretta produce dati numerici primari raccolti in modo uniforme dagli studenti."
    ]
  },
  {
    "id": "ss1-stats-cs1-li3",
    "strand": "Making Sense of and Using Data",
    "subStrand": "Statistical Reasoning and Its Application in Real Life",
    "contentStandardId": "1.4.1.CS.1",
    "learningIndicatorId": "1.4.1.LI.3",
    "title": [
      "Qualitative data collection methods",
      "Metodi di raccolta dei dati qualitativi"
    ],
    "explanation": [
      "Use interviews, focus groups and observation to collect detailed descriptions, experiences and opinions.",
      "Usa interviste, gruppi di discussione e osservazioni per raccogliere descrizioni, esperienze e opinioni dettagliate."
    ],
    "q": [
      "A school wants to understand why learners enjoy or dislike a new club. Which method is most suitable for exploring opinions in depth?",
      "Una scuola vuole capire perché gli studenti apprezzano o non apprezzano un nuovo club. Quale metodo è più adatto per approfondire le opinioni?"
    ],
    "a": [
      [
        "A focus-group discussion",
        "Una discussione in un focus group"
      ],
      [
        "A ruler measurement",
        "Una misurazione con il righello"
      ],
      [
        "A tally of attendance only",
        "Un semplice conteggio delle presenze"
      ],
      [
        "A calculation of the mean height",
        "Il calcolo dell'altezza media"
      ]
    ],
    "why": [
      "A focus group lets participants explain experiences and reasons in their own words.",
      "Un focus group permette ai partecipanti di spiegare esperienze e motivazioni con parole proprie."
    ]
  },
  {
    "id": "ss1-stats-cs2-li1",
    "strand": "Making Sense of and Using Data",
    "subStrand": "Statistical Reasoning and Its Application in Real Life",
    "contentStandardId": "1.4.1.CS.2",
    "learningIndicatorId": "1.4.1.LI.1",
    "title": [
      "Frequency tables for data",
      "Tabelle di frequenza"
    ],
    "explanation": [
      "Organise grouped or ungrouped observations into frequency tables so the number of occurrences of each value or class is clear.",
      "Organizza osservazioni raggruppate o non raggruppate in tabelle di frequenza, rendendo chiaro il numero di occorrenze di ogni valore o classe."
    ],
    "q": [
      "The data are 2, 3, 2, 4, 3, 2. What is the frequency of the value 2?",
      "I dati sono 2, 3, 2, 4, 3, 2. Qual è la frequenza del valore 2?"
    ],
    "a": [
      [
        "3",
        "3"
      ],
      [
        "2",
        "2"
      ],
      [
        "1",
        "1"
      ],
      [
        "4",
        "4"
      ]
    ],
    "why": [
      "The value 2 appears three times in the data set.",
      "Il valore 2 compare tre volte nell'insieme dei dati."
    ]
  },
  {
    "id": "ss1-stats-cs2-li2",
    "strand": "Making Sense of and Using Data",
    "subStrand": "Statistical Reasoning and Its Application in Real Life",
    "contentStandardId": "1.4.1.CS.2",
    "learningIndicatorId": "1.4.1.LI.2",
    "title": [
      "Present data with appropriate graphs",
      "Presentare i dati con grafici adeguati"
    ],
    "explanation": [
      "Choose a suitable visual display for the question and data type, such as line graphs for change over time and multiple bar graphs for group comparisons.",
      "Scegli una rappresentazione visiva adatta alla domanda e al tipo di dati, come grafici a linee per l'andamento nel tempo e grafici a barre multiple per confrontare gruppi."
    ],
    "q": [
      "A researcher wants to compare the same four subjects' results across three school years. Which display is most suitable?",
      "Un ricercatore vuole confrontare i risultati delle stesse quattro materie in tre anni scolastici. Quale rappresentazione è più adatta?"
    ],
    "a": [
      [
        "A multiple bar graph",
        "Un grafico a barre multiple"
      ],
      [
        "A single number line",
        "Una sola retta numerica"
      ],
      [
        "A Venn diagram",
        "Un diagramma di Venn"
      ],
      [
        "A single unlabelled circle",
        "Un cerchio senza etichette"
      ]
    ],
    "why": [
      "A multiple bar graph compares several categories across more than one group or time period.",
      "Un grafico a barre multiple confronta diverse categorie tra più gruppi o periodi."
    ]
  },
  {
    "id": "ss1-stats-cs3-li1",
    "strand": "Making Sense of and Using Data",
    "subStrand": "Statistical Reasoning and Its Application in Real Life",
    "contentStandardId": "1.4.1.CS.3",
    "learningIndicatorId": "1.4.1.LI.1",
    "title": [
      "Plan and execute a school data project",
      "Pianificare e realizzare un progetto sui dati scolastici"
    ],
    "explanation": [
      "Design a question, choose and justify a suitable sample, collect and analyse school data, then draw conclusions and recommendations supported by evidence.",
      "Formula una domanda, scegli e giustifica un campione adeguato, raccogli e analizza dati scolastici, poi ricava conclusioni e raccomandazioni basate su prove."
    ],
    "q": [
      "To estimate opinions across an entire school, which sampling plan is most defensible?",
      "Per stimare le opinioni di un'intera scuola, quale piano di campionamento è più valido?"
    ],
    "a": [
      [
        "Select learners randomly from every year group.",
        "Selezionare casualmente studenti di ogni anno."
      ],
      [
        "Ask only the researcher's closest friends.",
        "Chiedere solo agli amici più stretti del ricercatore."
      ],
      [
        "Ask only one sports team.",
        "Chiedere solo a una squadra sportiva."
      ],
      [
        "Ask only learners who volunteer after seeing the result.",
        "Chiedere solo a chi si offre dopo aver visto il risultato."
      ]
    ],
    "why": [
      "A sample drawn randomly across year groups is more representative than a convenience sample from one group.",
      "Un campione estratto casualmente da tutti gli anni è più rappresentativo di un campione di convenienza preso da un solo gruppo."
    ]
  },
  {
    "id": "ss1-stats-cs3-li2",
    "strand": "Making Sense of and Using Data",
    "subStrand": "Statistical Reasoning and Its Application in Real Life",
    "contentStandardId": "1.4.1.CS.3",
    "learningIndicatorId": "1.4.1.LI.2",
    "title": [
      "Present and publish a project report",
      "Presentare e pubblicare un rapporto di progetto"
    ],
    "explanation": [
      "Communicate a project through a clear report, presentation or infographic, protecting privacy and making the evidence and recommendations understandable.",
      "Comunica un progetto con un rapporto, una presentazione o un'infografica chiari, proteggendo la privacy e rendendo comprensibili prove e raccomandazioni."
    ],
    "q": [
      "Which report is the most responsible way to publish a school survey?",
      "Qual è il modo più responsabile per pubblicare un'indagine scolastica?"
    ],
    "a": [
      [
        "Show anonymised summaries, clear charts and evidence-based recommendations.",
        "Mostrare riepiloghi anonimi, grafici chiari e raccomandazioni basate sui dati."
      ],
      [
        "Publish every learner's name beside each answer.",
        "Pubblicare il nome di ogni studente accanto a ogni risposta."
      ],
      [
        "Remove results that disagree with the team's opinion.",
        "Eliminare i risultati contrari all'opinione del gruppo."
      ],
      [
        "Show charts without labels or explanation.",
        "Mostrare grafici senza etichette né spiegazioni."
      ]
    ],
    "why": [
      "A responsible report protects participants, explains the evidence and makes conclusions transparent.",
      "Un rapporto responsabile protegge i partecipanti, spiega le prove e rende trasparenti le conclusioni."
    ]
  },
  {
    "id": "ss1-stats-cs3-li3",
    "strand": "Making Sense of and Using Data",
    "subStrand": "Statistical Reasoning and Its Application in Real Life",
    "contentStandardId": "1.4.1.CS.3",
    "learningIndicatorId": "1.4.1.LI.3",
    "title": [
      "Make evidence-based inferences from data",
      "Ricavare inferenze dai dati basate su prove"
    ],
    "explanation": [
      "Use mathematical arguments to support choices and make careful inferences, recognising when sampling or data quality limits a conclusion.",
      "Usa argomentazioni matematiche per sostenere scelte e formulare inferenze prudenti, riconoscendo quando il campionamento o la qualità dei dati limitano una conclusione."
    ],
    "q": [
      "A survey about the whole school asked only one class. What is the main limitation?",
      "Un'indagine su tutta la scuola ha interrogato una sola classe. Qual è il limite principale?"
    ],
    "a": [
      [
        "The sample may be biased and may not represent the whole school.",
        "Il campione può essere distorto e non rappresentare tutta la scuola."
      ],
      [
        "The survey automatically proves every learner agrees.",
        "L'indagine dimostra automaticamente che tutti gli studenti sono d'accordo."
      ],
      [
        "The results cannot contain numbers.",
        "I risultati non possono contenere numeri."
      ],
      [
        "The sample is always too large.",
        "Il campione è sempre troppo grande."
      ]
    ],
    "why": [
      "One class may differ from other year groups, so the result should not be generalised without qualification.",
      "Una classe può essere diversa dagli altri anni, quindi il risultato non va generalizzato senza precisazioni."
    ]
  },
  {
    "id": "ss1-prob-cs1-li1",
    "strand": "Making Sense of and Using Data",
    "subStrand": "Probability/Chance",
    "contentStandardId": "1.4.2.CS.1",
    "learningIndicatorId": "1.4.2.LI.1",
    "title": [
      "List sample spaces for independent experiments",
      "Elencare gli spazi campionari di esperimenti indipendenti"
    ],
    "explanation": [
      "List every possible outcome of a simple or compound experiment. For independent stages, combine each possible result from one stage with each from the other.",
      "Elenca tutti i risultati possibili di un esperimento semplice o composto. Per fasi indipendenti, combina ogni risultato di una fase con ciascun risultato dell'altra."
    ],
    "q": [
      "A fair coin is tossed twice. How many outcomes are in the sample space?",
      "Una moneta equilibrata viene lanciata due volte. Quanti risultati contiene lo spazio campionario?"
    ],
    "a": [
      [
        "4",
        "4"
      ],
      [
        "2",
        "2"
      ],
      [
        "3",
        "3"
      ],
      [
        "8",
        "8"
      ]
    ],
    "why": [
      "The sample space is {HH, HT, TH, TT}, so there are four outcomes.",
      "Lo spazio campionario è {TT, TC, CT, CC}, quindi ci sono quattro risultati."
    ]
  },
  {
    "id": "ss1-prob-cs1-li2",
    "strand": "Making Sense of and Using Data",
    "subStrand": "Probability/Chance",
    "contentStandardId": "1.4.2.CS.1",
    "learningIndicatorId": "1.4.2.LI.2",
    "title": [
      "Calculate probabilities of independent events",
      "Calcolare probabilità di eventi indipendenti"
    ],
    "explanation": [
      "For independent events, multiply their probabilities. Express the result as a fraction, decimal or percentage.",
      "Per eventi indipendenti, moltiplica le probabilità. Esprimi il risultato come frazione, numero decimale o percentuale."
    ],
    "q": [
      "What is the probability of getting heads on a fair coin and a 4 on a fair six-sided die?",
      "Qual è la probabilità di ottenere testa con una moneta equilibrata e 4 con un dado equilibrato a sei facce?"
    ],
    "a": [
      [
        "1/12",
        "1/12"
      ],
      [
        "1/6",
        "1/6"
      ],
      [
        "1/8",
        "1/8"
      ],
      [
        "1/3",
        "1/3"
      ]
    ],
    "why": [
      "The events are independent: 1/2 × 1/6 = 1/12.",
      "Gli eventi sono indipendenti: 1/2 × 1/6 = 1/12."
    ]
  },
  {
    "id": "ss1-prob-cs1-li3",
    "strand": "Making Sense of and Using Data",
    "subStrand": "Probability/Chance",
    "contentStandardId": "1.4.2.CS.1",
    "learningIndicatorId": "1.4.2.LI.3",
    "title": [
      "Solve everyday independent-event problems",
      "Risolvere problemi quotidiani con eventi indipendenti"
    ],
    "explanation": [
      "Model everyday situations involving two independent events and calculate the probability of the combined event.",
      "Modella situazioni quotidiane che coinvolgono due eventi indipendenti e calcola la probabilità dell'evento composto."
    ],
    "q": [
      "A bag contains 3 red and 2 blue counters. One counter is drawn, replaced, and then another is drawn. What is the probability of drawing red twice?",
      "Un sacchetto contiene 3 gettoni rossi e 2 blu. Si estrae un gettone, lo si rimette e se ne estrae un altro. Qual è la probabilità di estrarre due rossi?"
    ],
    "a": [
      [
        "9/25",
        "9/25"
      ],
      [
        "6/25",
        "6/25"
      ],
      [
        "3/5",
        "3/5"
      ],
      [
        "9/10",
        "9/10"
      ]
    ],
    "why": [
      "With replacement, each red probability is 3/5. Multiply: 3/5 × 3/5 = 9/25.",
      "Con reinserimento, ogni probabilità di rosso è 3/5. Moltiplica: 3/5 × 3/5 = 9/25."
    ]
  }
] as IndicatorItem[];

export const GHANA_SS1_INDICATOR_BLUEPRINT = INDICATORS.map((item, questionIndex) => ({
  id: item.id,
  strand: item.strand,
  subStrand: item.subStrand,
  contentStandardId: item.contentStandardId,
  learningIndicatorId: item.learningIndicatorId,
  questionIndex,
  title: item.title
}));

const lesson = (en: string, it: string) => ({
  who: 's' as const,
  vis: 'infowords',
  text: [`<p>${en}</p>`, `<p>${it}</p>`] as [string, string]
});

const question = (en: string, it: string, answers: BilingualText[], whyEn: string, whyIt: string) => ({
  q: [en, it] as [string, string],
  a: answers,
  why: [whyEn, whyIt] as [string, string]
});

const assessmentQuestions = INDICATORS.map(item => ({
  q: item.q,
  a: item.a,
  why: item.why
}));

export const GHANA_SS1_INDICATOR_MASTERY_ARCS: ArcInfo[] = [
  {
    n: 19,
    unit: 0,
    subject: 'ghcoremath',
    title: ['The 45-Indicator Mastery Expedition', 'La spedizione di padronanza dei 45 indicatori'],
    pages: 'NaCCA SHS 1 · pp. 24–155 · 45 learning indicators'
  }
];

export const GHANA_SS1_INDICATOR_MASTERY_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss1-45-indicator-diagnostic',
    arc: 27,
    sec: 'Integrated Core Mathematics',
    pages: 'NaCCA SHS 1 · pp. 24–155 · 45 learning indicators',
    hue: 318,
    horns: 2,
    eyes: 2,
    title: ['The 45-Indicator Mastery Expedition', 'La spedizione di padronanza dei 45 indicatori'],
    topic: [
      'A curriculum-mapped diagnostic with one question for each of the 45 SHS 1 learning indicators, followed by targeted revision for every missed indicator.',
      'Una verifica diagnostica allineata al programma, con una domanda per ciascuno dei 45 indicatori di apprendimento SHS 1, seguita da un ripasso mirato per ogni indicatore non superato.'
    ],
    demon: ['The Coverage Warden', 'Il Guardiano delle Competenze'],
    tech: ['Mastery Form · Final Technique: One Indicator at a Time', 'Forma della Padronanza · Tecnica Finale: Un Indicatore alla Volta'],
    scenes: [
      lesson(
        '<b>Welcome to the 45-Indicator Mastery Expedition.</b> This is a diagnostic, not a race. Each question is linked to one printed SHS 1 learning-indicator entry in the NaCCA Mathematics Curriculum. Your result will show which ideas are secure and which deserve another look.',
        '<b>Benvenuto nella spedizione di padronanza dei 45 indicatori.</b> Questa è una verifica diagnostica, non una gara. Ogni domanda è collegata a una voce degli indicatori SHS 1 del curriculum di Matematica NaCCA. Il risultato mostrerà quali concetti sono consolidati e quali meritano un ripasso.'
      ),
      lesson(
        '<b>Numbers for Everyday Life:</b> Classify real numbers, test closure and properties, work with sets, convert fractions and percentages, and apply proportional reasoning to financial decisions.',
        '<b>Numeri per la vita quotidiana:</b> Classifica i numeri reali, verifica chiusura e proprietà, lavora con gli insiemi, converti frazioni e percentuali e applica il ragionamento proporzionale alle decisioni finanziarie.'
      ),
      lesson(
        '<b>Algebraic Reasoning:</b> Translate patterns into expressions, factorise quadratics, handle algebraic fractions, rearrange formulae and solve equations and inequalities. Then interpret functions, mappings and straight-line relationships.',
        '<b>Ragionamento algebrico:</b> Traduci schemi in espressioni, scomponi trinomi, lavora con frazioni algebriche, riordina formule e risolvi equazioni e disequazioni. Poi interpreta funzioni, corrispondenze e relazioni lineari.'
      ),
      lesson(
        '<b>Geometry Around Us:</b> Use angle relationships, triangle properties, Pythagoras, vectors, bearings, trigonometry, area, perimeter and prism volume. Always include units and check whether the result is reasonable.',
        '<b>La geometria intorno a noi:</b> Usa relazioni tra angoli, proprietà dei triangoli, Pitagora, vettori, direzioni, trigonometria, area, perimetro e volume dei prismi. Indica sempre le unità e controlla che il risultato sia ragionevole.'
      ),
      lesson(
        '<b>Making Sense of and Using Data:</b> Classify data, select collection methods, organise and present information, plan a fair school investigation and support conclusions with evidence.',
        '<b>Interpretare e utilizzare i dati:</b> Classifica i dati, scegli i metodi di raccolta, organizza e presenta le informazioni, pianifica un'indagine scolastica corretta e sostieni le conclusioni con prove.'
      ),
      lesson(
        '<b>Probability and Chance:</b> List sample spaces, recognise independent events and multiply probabilities only when the independence condition is satisfied. A replacement draw is a useful example because the probabilities stay the same.',
        '<b>Probabilità e caso:</b> Elenca gli spazi campionari, riconosci gli eventi indipendenti e moltiplica le probabilità solo quando vale la condizione di indipendenza. Un'estrazione con reinserimento è un esempio utile perché le probabilità restano invariate.'
      ),
      lesson(
        '<b>How your diagnostic works:</b> Answer all 45 questions independently. Each question records evidence for one curriculum indicator. The pass mark is 80% (36 correct answers). A missed answer is linked to a named concept so the revision panel can point you to the exact skill to practise.',
        '<b>Come funziona la verifica:</b> Rispondi autonomamente a tutte le 45 domande. Ogni domanda registra una prova relativa a un indicatore del programma. La soglia è l’80% (36 risposte corrette). Ogni errore è collegato a un concetto specifico, così il pannello di ripasso può indicarti l’abilità da esercitare.'
      ),
      lesson(
        '<b>Be thoughtful, not rushed.</b> Read the full question, show working on paper when useful, and check units, signs and restrictions. The diagnostic reinforces the existing SHS 1 scope; it does not add or replace curriculum requirements.',
        '<b>Ragiona con calma, senza fretta.</b> Leggi tutta la domanda, svolgi i passaggi su carta quando serve e controlla unità, segni e condizioni. La verifica consolida il programma SHS 1 esistente: non aggiunge né sostituisce requisiti curriculari.'
      ),
      { who: 'd', vis: 'demon', text: ['I have scattered your knowledge across eight sub-strands. Prove that you can retrieve each skill, and let every missed indicator reveal the next technique you must train!', 'Ho disperso le tue conoscenze in otto sotto-ambiti. Dimostra di saper recuperare ogni abilità e lascia che ogni indicatore mancato riveli la prossima tecnica da allenare!'] },
      { type: 'battle' }
    ],
    quiz: [
      question('A savings balance of GH₵1,000 earns 10% compound interest annually for two years. What is the final balance?', 'Un risparmio di GH₵1.000 frutta il 10% di interesse composto annuo per due anni. Qual è il saldo finale?', [['GH₵1,210', 'GH₵1.210'], ['GH₵1,200', 'GH₵1.200'], ['GH₵1,100', 'GH₵1.100'], ['GH₵1,020', 'GH₵1.020']], 'A = 1,000 × (1.10)² = GH₵1,210.', 'A = 1.000 × (1,10)² = GH₵1.210.'),
      question('A club has GH₵180 and each activity pack costs GH₵12. What is the greatest number of packs it can buy?', 'Un club ha GH₵180 e ogni kit per le attività costa GH₵12. Qual è il numero massimo di kit che può acquistare?', [['15', '15'], ['12', '12'], ['18', '18'], ['20', '20']], '180 ÷ 12 = 15 packs.', '180 ÷ 12 = 15 kit.'),
      question('A triangular prism has cross-sectional area 12 cm² and length 8 cm. What is its volume?', 'Un prisma triangolare ha un’area di sezione di 12 cm² e una lunghezza di 8 cm. Qual è il suo volume?', [['96 cm³', '96 cm³'], ['20 cm³', '20 cm³'], ['48 cm³', '48 cm³'], ['96 cm²', '96 cm²']], 'Volume = 12 × 8 = 96 cm³.', 'Volume = 12 × 8 = 96 cm³.'),
      question('The values are 4, 5, 5, 6 and 30. Which average best represents a typical value when 30 is an outlier?', 'I valori sono 4, 5, 5, 6 e 30. Quale media rappresenta meglio un valore tipico quando 30 è un valore anomalo?', [['Median = 5', 'Mediana = 5'], ['Mean = 10', 'Media aritmetica = 10'], ['Maximum = 30', 'Massimo = 30'], ['Range = 26', 'Intervallo = 26']], 'The median is 5 and is less affected by the outlier than the mean.', 'La mediana è 5 ed è meno influenzata dal valore anomalo rispetto alla media aritmetica.')
    ],
    learning: {
      version: 1,
      objectives: [
        { id: 'real-number-system', description: ['Demonstrate number-system, closure, operation-property and set reasoning.', 'Dimostrare competenze sui sistemi numerici, sulla chiusura, sulle proprietà delle operazioni e sugli insiemi.'], successCriteria: [['Classify rational and irrational values and test closure.', 'Classificare valori razionali e irrazionali e verificare la chiusura.'], ['Solve two-set and three-set problems using correct notation.', 'Risolvere problemi con due e tre insiemi usando la notazione corretta.']] },
        { id: 'proportional-reasoning', description: ['Connect fractions, decimals and percentages, then apply them to finance.', 'Collegare frazioni, decimali e percentuali e applicarli alla matematica finanziaria.'], successCriteria: [['Find additive and multiplicative inverses.', 'Trovare gli inversi additivi e moltiplicativi.'], ['Calculate percentages and financial quantities accurately.', 'Calcolare correttamente percentuali e grandezze finanziarie.']] },
        { id: 'algebraic-applications', description: ['Form, simplify and factorise expressions; rearrange formulae and solve equations and inequalities.', 'Formare, semplificare e scomporre espressioni; riordinare formule e risolvere equazioni e disequazioni.'], successCriteria: [['Respect algebraic restrictions and equivalent transformations.', 'Rispettare le condizioni delle frazioni algebriche e le trasformazioni equivalenti.']] },
        { id: 'patterns-relationships', description: ['Interpret mappings, functions, exponential patterns and straight-line relationships.', 'Interpretare corrispondenze, funzioni, schemi esponenziali e relazioni lineari.'], successCriteria: [['Use gradients, equations, midpoints and distances.', 'Usare gradienti, equazioni, punti medi e distanze.']] },
        { id: 'spatial-sense', description: ['Apply angle, triangle, parallel-line and polygon properties.', 'Applicare le proprietà di angoli, triangoli, rette parallele e poligoni.'], successCriteria: [['Choose and justify the relevant geometric relationship.', 'Scegliere e giustificare la relazione geometrica pertinente.']] },
        { id: 'measurement', description: ['Use vectors, bearings, trigonometry, area, perimeter, units and prism volume.', 'Usare vettori, direzioni, trigonometria, area, perimetro, unità e volume dei prismi.'], successCriteria: [['Show appropriate units and a sensible estimate.', 'Indicare unità adeguate e una stima ragionevole.']] },
        { id: 'statistical-reasoning', description: ['Collect, organise, present and interpret data responsibly.', 'Raccogliere, organizzare, presentare e interpretare i dati in modo responsabile.'], successCriteria: [['Choose a representative sample and justify conclusions.', 'Scegliere un campione rappresentativo e giustificare le conclusioni.']] },
        { id: 'probability-chance', description: ['List sample spaces and solve problems involving independent events.', 'Elencare spazi campionari e risolvere problemi con eventi indipendenti.'], successCriteria: [['Multiply probabilities only when events are independent.', 'Moltiplicare le probabilità solo quando gli eventi sono indipendenti.']] }
      ],
      prerequisites: [
        ['Review your class notes and bring a calculator. The diagnostic covers the full SHS 1 scope, so take breaks if you need them.', 'Ripassa gli appunti e porta una calcolatrice. La verifica copre tutto il programma SHS 1, quindi fai una pausa se ne hai bisogno.']
      ],
      concepts: INDICATORS.map(item => ({
        id: item.id,
        title: item.title,
        explanation: item.explanation
      })),
      summary: [
        ['The 45 questions are linked one-to-one to the 45 SHS 1 indicator entries across eight sub-strands. Results are stored by indicator concept to support targeted revision.', 'Le 45 domande sono collegate una a una alle 45 voci degli indicatori SHS 1 distribuite in otto sotto-ambiti. I risultati sono registrati per concetto-indicatore per supportare il ripasso mirato.'],
        ['A score of 80% or higher unlocks the final battle. If you do not pass, the review panel identifies the exact indicators that need more practice.', 'Un punteggio pari o superiore all’80% sblocca la battaglia finale. Se non superi la prova, il pannello di revisione identifica gli indicatori precisi che richiedono ulteriore esercizio.']
      ],
      masteryAssessment: {
        title: ['NaCCA SHS 1 Diagnostic · 45 indicators', 'Verifica diagnostica NaCCA SHS 1 · 45 indicatori'],
        instructions: ['Answer all 45 questions. Each item is mapped to one curriculum indicator. You need at least 36 correct answers (80%) to unlock the battle. Review the indicator concepts shown after an attempt.', 'Rispondi a tutte le 45 domande. Ogni quesito è associato a un indicatore del programma. Servono almeno 36 risposte corrette (80%) per sbloccare la battaglia. Dopo il tentativo, ripassa i concetti-indicatore evidenziati.'],
        questions: assessmentQuestions,
        questionConceptIds: INDICATORS.map(item => item.id),
        passingScore: 80
      },
      techniqueUnlock: {
        id: 'ghana-ss1-indicator-mastery',
        name: ['Indicator Mastery Form', 'Forma della Padronanza degli Indicatori'],
        description: ['You can identify your strongest SHS 1 skills and turn every missed indicator into a focused revision plan.', 'Sai riconoscere le tue competenze SHS 1 più solide e trasformare ogni indicatore mancato in un piano di ripasso mirato.'],
        xpReward: 50
      }
    }
  }
];
