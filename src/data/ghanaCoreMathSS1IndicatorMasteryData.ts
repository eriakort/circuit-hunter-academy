import type { ArcInfo, BilingualText, LearningConcept, Mission } from '../types';

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
  workedExample?: LearningConcept['workedExample'];
  misconceptions?: LearningConcept['misconceptions'];
  knowledgePrompts?: LearningConcept['knowledgePrompts'];
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
    ],
    "workedExample": {
      "scenario": [
        "Test whether the integers stay closed under division using 6 ÷ 3 and 1 ÷ 2.",
        "Verifica se gli interi restano chiusi rispetto alla divisione usando 6 ÷ 3 e 1 ÷ 2."
      ],
      "steps": [
        [
          "Divide 6 by 3: the result is 2, which is an integer.",
          "Dividi 6 per 3: il risultato è 2, che è un intero."
        ],
        [
          "Divide 1 by 2: the result is 0.5, which is not an integer.",
          "Dividi 1 per 2: il risultato è 0,5, che non è un intero."
        ]
      ],
      "answer": [
        "Because one division of integers gives a result outside the integers, the integers are not closed under division.",
        "Poiché una divisione tra interi produce un risultato che non è intero, gli interi non sono chiusi rispetto alla divisione."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "If both numbers are integers, their quotient must also be an integer.",
          "Se entrambi i numeri sono interi, anche il loro quoziente deve essere intero."
        ],
        "correction": [
          "Division is different from addition and multiplication: 1 ÷ 2 = 0.5 is a counterexample.",
          "La divisione è diversa da addizione e moltiplicazione: 1 ÷ 2 = 0,5 è un controesempio."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Give one division of two integers that produces a non-integer result.",
        "Fai un esempio di divisione tra due interi che produce un risultato non intero."
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "Classify 0.125 and √7 as rational or irrational numbers.",
        "Classifica 0,125 e √7 come numeri razionali o irrazionali."
      ],
      "steps": [
        [
          "Write 0.125 as a fraction: 0.125 = 125/1000 = 1/8.",
          "Scrivi 0,125 come frazione: 0,125 = 125/1000 = 1/8."
        ],
        [
          "√7 cannot be written as a ratio of two integers; its decimal expansion does not terminate or repeat.",
          "√7 non può essere scritto come rapporto tra due interi; il suo sviluppo decimale non termina e non è periodico."
        ]
      ],
      "answer": [
        "0.125 is rational, while √7 is irrational.",
        "0,125 è razionale, mentre √7 è irrazionale."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Every decimal number is irrational.",
          "Ogni numero decimale è irrazionale."
        ],
        "correction": [
          "Terminating decimals and recurring decimals are rational because they can be written as fractions.",
          "I decimali limitati e quelli periodici sono razionali perché si possono scrivere come frazioni."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Explain why 0.333… is rational but √7 is irrational.",
        "Spiega perché 0,333… è razionale mentre √7 è irrazionale."
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "Expand 5(2x + 3) using the distributive property.",
        "Sviluppa 5(2x + 3) usando la proprietà distributiva."
      ],
      "steps": [
        [
          "Multiply 5 by the first term: 5 × 2x = 10x.",
          "Moltiplica 5 per il primo termine: 5 × 2x = 10x."
        ],
        [
          "Multiply 5 by the second term: 5 × 3 = 15, then combine: 10x + 15.",
          "Moltiplica 5 per il secondo termine: 5 × 3 = 15, poi unisci: 10x + 15."
        ]
      ],
      "answer": [
        "5(2x + 3) = 10x + 15; the factor multiplies every term inside the brackets.",
        "5(2x + 3) = 10x + 15; il fattore moltiplica ogni termine dentro le parentesi."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "The outside factor multiplies only the first term in the brackets.",
          "Il fattore esterno moltiplica solo il primo termine nelle parentesi."
        ],
        "correction": [
          "The distributive property applies the factor to every term: 5(2x + 3) = 10x + 15.",
          "La proprietà distributiva applica il fattore a ogni termine: 5(2x + 3) = 10x + 15."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Expand 3(a − 4) and explain where the negative sign goes.",
        "Sviluppa 3(a − 4) e spiega dove va il segno negativo."
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "Let A = {1, 2, 4, 6} and B = {2, 3, 6}. Find A ∩ B.",
        "Siano A = {1, 2, 4, 6} e B = {2, 3, 6}. Trova A ∩ B."
      ],
      "steps": [
        [
          "Check each element of A and keep only those that also appear in B.",
          "Controlla ogni elemento di A e conserva solo quelli che compaiono anche in B."
        ],
        [
          "The common elements are 2 and 6.",
          "Gli elementi comuni sono 2 e 6."
        ]
      ],
      "answer": [
        "A ∩ B = {2, 6}; intersection means elements shared by both sets.",
        "A ∩ B = {2, 6}; l'intersezione contiene gli elementi presenti in entrambi gli insiemi."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "The intersection contains every element found in either set.",
          "L'intersezione contiene tutti gli elementi presenti in uno dei due insiemi."
        ],
        "correction": [
          "That describes the union. The intersection keeps only elements common to both sets.",
          "Questa è l'unione. L'intersezione conserva solo gli elementi comuni ai due insiemi."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Using A = {a, b, c} and B = {b, c, d}, find A ∩ B.",
        "Con A = {a, b, c} e B = {b, c, d}, trova A ∩ B."
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "In a group, 30 learners like football, 22 like netball and 8 like both. Find how many like at least one sport.",
        "In un gruppo, 30 studenti amano il calcio, 22 la pallavolo e 8 entrambi gli sport. Trova quanti ne amano almeno uno."
      ],
      "steps": [
        [
          "Add the two group sizes: 30 + 22 = 52.",
          "Somma i due gruppi: 30 + 22 = 52."
        ],
        [
          "Subtract the 8 learners counted twice: 52 − 8 = 44.",
          "Sottrai gli 8 studenti contati due volte: 52 − 8 = 44."
        ]
      ],
      "answer": [
        "44 learners like at least one sport. The overlap is subtracted once because it was counted twice.",
        "44 studenti amano almeno uno sport. L'intersezione si sottrae una volta perché era stata contata due volte."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Add the two set totals without subtracting the overlap.",
          "Somma i totali dei due insiemi senza sottrarre l'intersezione."
        ],
        "correction": [
          "Learners who like both sports appear in both totals, so subtract the overlap once: n(A ∪ B) = n(A) + n(B) − n(A ∩ B).",
          "Chi ama entrambi gli sport compare in tutti e due i totali, quindi sottrai l'intersezione una volta: n(A ∪ B) = n(A) + n(B) − n(A ∩ B)."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Why must the number who like both sports be subtracted once?",
        "Perché il numero di chi ama entrambi gli sport deve essere sottratto una volta?"
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "Use De Morgan's law with U = {1, 2, 3, 4}, A = {1, 2} and B = {2, 3}.",
        "Applica la legge di De Morgan con U = {1, 2, 3, 4}, A = {1, 2} e B = {2, 3}."
      ],
      "steps": [
        [
          "A ∪ B = {1, 2, 3}, so (A ∪ B)′ = {4}.",
          "A ∪ B = {1, 2, 3}, quindi (A ∪ B)′ = {4}."
        ],
        [
          "A′ = {3, 4} and B′ = {1, 4}; their intersection is {4}.",
          "A′ = {3, 4} e B′ = {1, 4}; la loro intersezione è {4}."
        ]
      ],
      "answer": [
        "Both sides equal {4}, confirming (A ∪ B)′ = A′ ∩ B′.",
        "Entrambi i membri sono {4}, quindi (A ∪ B)′ = A′ ∩ B′."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "The complement of a union is the union of the complements.",
          "Il complementare di un'unione è l'unione dei complementari."
        ],
        "correction": [
          "De Morgan changes union to intersection: (A ∪ B)′ = A′ ∩ B′.",
          "De Morgan trasforma l'unione in intersezione: (A ∪ B)′ = A′ ∩ B′."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "State the De Morgan law for the complement of an intersection.",
        "Enuncia la legge di De Morgan per il complementare di un'intersezione."
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "Convert 3/8 into a decimal and a percentage.",
        "Trasforma 3/8 in numero decimale e percentuale."
      ],
      "steps": [
        [
          "Divide 3 by 8: 3 ÷ 8 = 0.375.",
          "Dividi 3 per 8: 3 ÷ 8 = 0,375."
        ],
        [
          "Multiply by 100 to get the percentage: 0.375 × 100 = 37.5%.",
          "Moltiplica per 100 per ottenere la percentuale: 0,375 × 100 = 37,5%."
        ]
      ],
      "answer": [
        "3/8 = 0.375 = 37.5%.",
        "3/8 = 0,375 = 37,5%."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "To convert a decimal to a percentage, divide by 100.",
          "Per trasformare un decimale in percentuale, dividi per 100."
        ],
        "correction": [
          "Multiply the decimal by 100 and add the percent sign.",
          "Moltiplica il decimale per 100 e aggiungi il simbolo percentuale."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Convert 9/25 into a decimal and a percentage.",
        "Trasforma 9/25 in numero decimale e percentuale."
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "For 4/7, find the additive inverse and the multiplicative inverse.",
        "Per 4/7, trova l'inverso additivo e l'inverso moltiplicativo."
      ],
      "steps": [
        [
          "The additive inverse is −4/7 because 4/7 + (−4/7) = 0.",
          "L'inverso additivo è −4/7 perché 4/7 + (−4/7) = 0."
        ],
        [
          "The multiplicative inverse is 7/4 because (4/7) × (7/4) = 1.",
          "L'inverso moltiplicativo è 7/4 perché (4/7) × (7/4) = 1."
        ]
      ],
      "answer": [
        "The two inverses are −4/7 and 7/4, in that order.",
        "I due inversi sono −4/7 e 7/4, in quest'ordine."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "The additive inverse is the reciprocal, or both inverses are found by changing the sign.",
          "L'inverso additivo è il reciproco, oppure entrambi gli inversi si trovano cambiando il segno."
        ],
        "correction": [
          "The additive inverse sums to zero; the multiplicative inverse multiplies to one.",
          "L'inverso additivo dà somma zero; l'inverso moltiplicativo dà prodotto uno."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "How can you check that a number is the multiplicative inverse of 5/9?",
        "Come puoi verificare che un numero sia l'inverso moltiplicativo di 5/9?"
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "A class has 40 learners and 10 are absent. What percentage are absent?",
        "Una classe ha 40 studenti e 10 sono assenti. Quale percentuale è assente?"
      ],
      "steps": [
        [
          "Divide the part by the whole: 10 ÷ 40 = 0.25.",
          "Dividi la parte per il totale: 10 ÷ 40 = 0,25."
        ],
        [
          "Multiply by 100: 0.25 × 100 = 25%.",
          "Moltiplica per 100: 0,25 × 100 = 25%."
        ]
      ],
      "answer": [
        "25% of the class is absent.",
        "È assente il 25% della classe."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Use the part as the denominator when finding a percentage.",
          "Usa la parte come denominatore quando calcoli una percentuale."
        ],
        "correction": [
          "Percentage = part ÷ whole × 100; the whole is the reference amount.",
          "Percentuale = parte ÷ totale × 100; il totale è la quantità di riferimento."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "What percentage is 18 out of 60? Show the division first.",
        "Quale percentuale rappresenta 18 su 60? Mostra prima la divisione."
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "A trader buys a basket for GH₵120 and sells it for GH₵150. Find the profit percentage on cost.",
        "Un commerciante compra un cesto per 120 GH₵ e lo vende a 150 GH₵. Calcola la percentuale di profitto sul costo."
      ],
      "steps": [
        [
          "Profit = selling price − cost price = 150 − 120 = GH₵30.",
          "Profitto = prezzo di vendita − costo = 150 − 120 = 30 GH₵."
        ],
        [
          "Profit percentage = 30 ÷ 120 × 100 = 25%.",
          "Percentuale di profitto = 30 ÷ 120 × 100 = 25%."
        ]
      ],
      "answer": [
        "The profit is GH₵30, which is 25% of the cost price.",
        "Il profitto è di 30 GH₵, cioè il 25% del prezzo di costo."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Calculate profit percentage using the selling price as the denominator.",
          "Calcola la percentuale di profitto usando il prezzo di vendita come denominatore."
        ],
        "correction": [
          "Profit percentage on cost uses the original cost price as the denominator.",
          "La percentuale di profitto sul costo usa il prezzo di acquisto come denominatore."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "A trader buys an item for GH₵60 and sells it for GH₵72. What is the profit percentage on cost?",
        "Un commerciante compra un oggetto a 60 GH₵ e lo vende a 72 GH₵. Qual è la percentuale di profitto sul costo?"
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "Simplify 5y + 2(3y − 4).",
        "Semplifica 5y + 2(3y − 4)."
      ],
      "steps": [
        [
          "Expand the brackets: 2(3y − 4) = 6y − 8.",
          "Sviluppa le parentesi: 2(3y − 4) = 6y − 8."
        ],
        [
          "Collect like terms: 5y + 6y − 8 = 11y − 8.",
          "Raggruppa i termini simili: 5y + 6y − 8 = 11y − 8."
        ]
      ],
      "answer": [
        "The simplified expression is 11y − 8.",
        "L'espressione semplificata è 11y − 8."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Add the constant −8 to the coefficient of y.",
          "Somma la costante −8 al coefficiente di y."
        ],
        "correction": [
          "Only like terms combine: add the coefficients of y, but keep the constant separate.",
          "Si sommano solo i termini simili: somma i coefficienti di y e lascia separata la costante."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Simplify 3a + 4(2a + 1) and identify the like terms.",
        "Semplifica 3a + 4(2a + 1) e individua i termini simili."
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "Factorise x² + 9x + 20.",
        "Scomponi x² + 9x + 20."
      ],
      "steps": [
        [
          "Find two numbers whose product is 20 and whose sum is 9: 4 and 5.",
          "Trova due numeri con prodotto 20 e somma 9: 4 e 5."
        ],
        [
          "Write the factors: (x + 4)(x + 5).",
          "Scrivi i fattori: (x + 4)(x + 5)."
        ]
      ],
      "answer": [
        "x² + 9x + 20 = (x + 4)(x + 5).",
        "x² + 9x + 20 = (x + 4)(x + 5)."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Choose two numbers that multiply to the middle coefficient.",
          "Scegli due numeri il cui prodotto è il coefficiente del termine centrale."
        ],
        "correction": [
          "For x² + bx + c, the pair must multiply to c and add to b.",
          "Per x² + bx + c, i due numeri devono avere prodotto c e somma b."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Which pair of numbers factorises x² + 8x + 15? Explain both checks.",
        "Quale coppia di numeri scompone x² + 8x + 15? Spiega entrambe le verifiche."
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "Factorise 16m² − 81.",
        "Scomponi 16m² − 81."
      ],
      "steps": [
        [
          "Recognise two squares: 16m² = (4m)² and 81 = 9².",
          "Riconosci due quadrati: 16m² = (4m)² e 81 = 9²."
        ],
        [
          "Use a² − b² = (a − b)(a + b): (4m − 9)(4m + 9).",
          "Usa a² − b² = (a − b)(a + b): (4m − 9)(4m + 9)."
        ]
      ],
      "answer": [
        "16m² − 81 = (4m − 9)(4m + 9).",
        "16m² − 81 = (4m − 9)(4m + 9)."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "A difference of squares is the square of a difference.",
          "Una differenza di quadrati è il quadrato di una differenza."
        ],
        "correction": [
          "The identity has two different factors: (a − b)(a + b), not (a − b)².",
          "L'identità ha due fattori diversi: (a − b)(a + b), non (a − b)²."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Factorise 25p² − 4 and state the two square roots.",
        "Scomponi 25p² − 4 e indica le due radici quadrate."
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "Simplify (x² − 16)/(x − 4) and state the restriction.",
        "Semplifica (x² − 16)/(x − 4) e indica la condizione."
      ],
      "steps": [
        [
          "Factorise the numerator: x² − 16 = (x − 4)(x + 4).",
          "Scomponi il numeratore: x² − 16 = (x − 4)(x + 4)."
        ],
        [
          "Cancel the common factor, but keep the original restriction x ≠ 4.",
          "Semplifica il fattore comune, ma mantieni la condizione originale x ≠ 4."
        ]
      ],
      "answer": [
        "The expression simplifies to x + 4, with x ≠ 4.",
        "L'espressione si semplifica in x + 4, con x ≠ 4."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "After cancelling x − 4, x = 4 becomes allowed.",
          "Dopo aver semplificato x − 4, il valore x = 4 diventa ammesso."
        ],
        "correction": [
          "The original denominator was zero at x = 4, so that value remains excluded.",
          "Il denominatore originale era zero per x = 4, quindi quel valore resta escluso."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Simplify (x² − 25)/(x − 5). Which value must still be excluded?",
        "Semplifica (x² − 25)/(x − 5). Quale valore deve restare escluso?"
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "Make r the subject of A = πr², assuming r is positive.",
        "Isola r nella formula A = πr², supponendo che r sia positivo."
      ],
      "steps": [
        [
          "Divide both sides by π: A/π = r².",
          "Dividi entrambi i membri per π: A/π = r²."
        ],
        [
          "Take the positive square root: r = √(A/π).",
          "Calcola la radice quadrata positiva: r = √(A/π)."
        ]
      ],
      "answer": [
        "r = √(A/π).",
        "r = √(A/π)."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Move π to the other side by subtracting it.",
          "Sposta π dall'altra parte sottraendolo."
        ],
        "correction": [
          "Because π multiplies r², use the inverse operation and divide both sides by π.",
          "Poiché π moltiplica r², usa l'operazione inversa e dividi entrambi i membri per π."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "If v = u + at, rearrange the formula to make t the subject.",
        "Se v = u + at, riordina la formula per isolare t."
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "Solve 4x + 3 ≤ 19.",
        "Risolvi 4x + 3 ≤ 19."
      ],
      "steps": [
        [
          "Subtract 3 from both sides: 4x ≤ 16.",
          "Sottrai 3 da entrambi i membri: 4x ≤ 16."
        ],
        [
          "Divide by positive 4; the inequality direction stays the same: x ≤ 4.",
          "Dividi per 4 positivo; il verso della disequazione non cambia: x ≤ 4."
        ]
      ],
      "answer": [
        "The solution is x ≤ 4.",
        "La soluzione è x ≤ 4."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Reverse the inequality sign whenever you divide.",
          "Inverti il verso della disequazione ogni volta che dividi."
        ],
        "correction": [
          "Reverse the sign only when multiplying or dividing by a negative number.",
          "Inverti il verso solo quando moltiplichi o dividi per un numero negativo."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Solve −2x > 8. Why does the inequality sign change?",
        "Risolvi −2x > 8. Perché cambia il verso della disequazione?"
      ]
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
      "Distinguish a relation from a function and use input-output patterns to determine a mapping rule.",
      "Distingui una relazione da una funzione e usa schemi ingresso-uscita per determinare una regola di corrispondenza."
    ],
    "q": [
      "A mapping sends 1 to 4, 2 to 7 and 3 to 10. Which statement is correct?",
      "Una corrispondenza associa 1 a 4, 2 a 7 e 3 a 10. Quale affermazione è corretta?"
    ],
    "a": [
      [
        "It is a function with rule y = 3x + 1.",
        "È una funzione con regola y = 3x + 1."
      ],
      [
        "It is not a function because every output is different.",
        "Non è una funzione perché ogni risultato è diverso."
      ],
      [
        "It is a function with rule y = x + 3.",
        "È una funzione con regola y = x + 3."
      ],
      [
        "It is not a function because the inputs are positive.",
        "Non è una funzione perché gli ingressi sono positivi."
      ]
    ],
    "why": [
      "Each input has exactly one output, and the outputs follow y = 3x + 1.",
      "Ogni ingresso ha un solo risultato e i risultati seguono la regola y = 3x + 1."
    ],
    "workedExample": {
      "scenario": [
        "A mapping sends 0 to 2, 1 to 5 and 2 to 8. Find its rule and decide whether it is a function.",
        "Una corrispondenza associa 0 a 2, 1 a 5 e 2 a 8. Trova la regola e stabilisci se è una funzione."
      ],
      "steps": [
        [
          "Each time x increases by 1, y increases by 3, suggesting y = 3x + 2.",
          "Ogni volta che x aumenta di 1, y aumenta di 3: la regola può essere y = 3x + 2."
        ],
        [
          "Each input has exactly one output, so the mapping is a function.",
          "Ogni ingresso ha esattamente un risultato, quindi la corrispondenza è una funzione."
        ]
      ],
      "answer": [
        "The rule is y = 3x + 2 and the mapping is a function.",
        "La regola è y = 3x + 2 e la corrispondenza è una funzione."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "A mapping is not a function when different inputs have different outputs.",
          "Una corrispondenza non è una funzione quando ingressi diversi hanno risultati diversi."
        ],
        "correction": [
          "Different outputs are allowed. A relation is a function when each input has exactly one output.",
          "Risultati diversi sono ammessi. Una relazione è una funzione se ogni ingresso ha esattamente un risultato."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Can two different inputs share one output and still form a function? Explain.",
        "Due ingressi diversi possono avere lo stesso risultato ed essere comunque una funzione? Spiega."
      ]
    ]
  },
  {
    "id": "ss1-patterns-cs1-li2",
    "strand": "Algebraic Reasoning",
    "subStrand": "Patterns and Relationships",
    "contentStandardId": "1.2.2.CS.1",
    "learningIndicatorId": "1.2.2.LI.2",
    "title": [
      "Graph and interpret linear functions",
      "Rappresentare e interpretare funzioni lineari"
    ],
    "explanation": [
      "Recognise that a linear function graphs as a straight line and interpret its gradient and y-intercept.",
      "Riconosci che il grafico di una funzione lineare è una retta e interpreta il gradiente e l'intercetta sull'asse y."
    ],
    "q": [
      "For the linear function y = 2x + 3, where does its graph cross the y-axis?",
      "Per la funzione lineare y = 2x + 3, in quale punto il grafico incontra l'asse y?"
    ],
    "a": [
      [
        "At (0, 3)",
        "Nel punto (0, 3)"
      ],
      [
        "At (3, 0)",
        "Nel punto (3, 0)"
      ],
      [
        "At (0, 2)",
        "Nel punto (0, 2)"
      ],
      [
        "At (2, 0)",
        "Nel punto (2, 0)"
      ]
    ],
    "why": [
      "The y-intercept is c = 3, so the line crosses the y-axis when x = 0 at (0, 3).",
      "L'intercetta y è c = 3, quindi la retta incontra l'asse y quando x = 0, nel punto (0, 3)."
    ],
    "workedExample": {
      "scenario": [
        "Find the y-intercept of y = −3x + 5.",
        "Trova l'intercetta sull'asse y della retta y = −3x + 5."
      ],
      "steps": [
        [
          "On the y-axis, x = 0.",
          "Sull'asse y, x = 0."
        ],
        [
          "Substitute x = 0: y = −3(0) + 5 = 5, so the point is (0, 5).",
          "Sostituisci x = 0: y = −3(0) + 5 = 5, quindi il punto è (0, 5)."
        ]
      ],
      "answer": [
        "The graph crosses the y-axis at (0, 5).",
        "Il grafico interseca l'asse y nel punto (0, 5)."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "The y-intercept is where y = 0.",
          "L'intercetta sull'asse y è il punto in cui y = 0."
        ],
        "correction": [
          "On the y-axis x = 0. Setting y = 0 finds the x-intercept instead.",
          "Sull'asse y vale x = 0. Porre y = 0 serve invece a trovare l'intercetta sull'asse x."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "For y = 4x − 7, state the y-intercept and the point where the line crosses the axis.",
        "Per y = 4x − 7, indica l'intercetta sull'asse y e il punto in cui la retta lo attraversa."
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "Find the gradient of the line through (2, 5) and (6, 13).",
        "Trova il coefficiente angolare della retta passante per (2, 5) e (6, 13)."
      ],
      "steps": [
        [
          "Subtract the y-coordinates: 13 − 5 = 8.",
          "Sottrai le coordinate y: 13 − 5 = 8."
        ],
        [
          "Subtract the x-coordinates in the same order: 6 − 2 = 4. Gradient = 8/4 = 2.",
          "Sottrai le coordinate x nello stesso ordine: 6 − 2 = 4. Coefficiente angolare = 8/4 = 2."
        ]
      ],
      "answer": [
        "The gradient is 2.",
        "Il coefficiente angolare è 2."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Subtract the x-coordinates in a different order from the y-coordinates.",
          "Sottrai le coordinate x in un ordine diverso da quello delle coordinate y."
        ],
        "correction": [
          "Keep the same point order in numerator and denominator: (y₂ − y₁)/(x₂ − x₁).",
          "Mantieni lo stesso ordine dei punti al numeratore e al denominatore: (y₂ − y₁)/(x₂ − x₁)."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "What does a negative gradient tell you about a line as x increases?",
        "Che cosa indica un coefficiente angolare negativo quando x aumenta?"
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "Find the midpoint and distance between P(1, 2) and Q(5, 5).",
        "Trova il punto medio e la distanza tra P(1, 2) e Q(5, 5)."
      ],
      "steps": [
        [
          "Midpoint: ((1 + 5)/2, (2 + 5)/2) = (3, 3.5).",
          "Punto medio: ((1 + 5)/2, (2 + 5)/2) = (3; 3,5)."
        ],
        [
          "Distance: √((5 − 1)² + (5 − 2)²) = √(16 + 9) = 5.",
          "Distanza: √((5 − 1)² + (5 − 2)²) = √(16 + 9) = 5."
        ]
      ],
      "answer": [
        "The midpoint is (3, 3.5) and the distance is 5 units.",
        "Il punto medio è (3; 3,5) e la distanza è 5 unità."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "The midpoint is the distance between the two points.",
          "Il punto medio è la distanza tra i due punti."
        ],
        "correction": [
          "The midpoint is a coordinate halfway along the segment; distance is a length.",
          "Il punto medio è una coordinata a metà del segmento; la distanza è una lunghezza."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Find the midpoint of (−2, 4) and (4, 8).",
        "Trova il punto medio tra (−2, 4) e (4, 8)."
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "Classify an angle of 145° and an angle of 270°.",
        "Classifica un angolo di 145° e uno di 270°."
      ],
      "steps": [
        [
          "145° is greater than 90° and less than 180°: it is obtuse.",
          "145° è maggiore di 90° e minore di 180°: è ottuso."
        ],
        [
          "270° is greater than 180° and less than 360°: it is reflex.",
          "270° è maggiore di 180° e minore di 360°: è concavo."
        ]
      ],
      "answer": [
        "145° is obtuse; 270° is reflex.",
        "145° è ottuso; 270° è concavo."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Every angle greater than 180° is a full turn.",
          "Ogni angolo maggiore di 180° è un giro completo."
        ],
        "correction": [
          "A reflex angle is between 180° and 360°; a full turn is exactly 360°.",
          "Un angolo concavo è compreso tra 180° e 360°; un giro completo misura esattamente 360°."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "What type of angle is 315°, and which two values bound this type?",
        "Che tipo di angolo è 315° e tra quali due valori è compreso?"
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "Two parallel lines are cut by a transversal. One alternate interior angle is 112°. Find its partner.",
        "Due rette parallele sono tagliate da una trasversale. Un angolo alterno interno misura 112°. Trova l'altro."
      ],
      "steps": [
        [
          "Identify the two angles between the parallel lines and on opposite sides of the transversal.",
          "Individua i due angoli compresi tra le parallele e su lati opposti della trasversale."
        ],
        [
          "Alternate interior angles are equal, so the partner is 112°.",
          "Gli angoli alterni interni sono congruenti, quindi l'altro misura 112°."
        ]
      ],
      "answer": [
        "The alternate interior angle is 112°.",
        "L'angolo alterno interno misura 112°."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Alternate interior angles add to 180° in every diagram.",
          "Gli angoli alterni interni sommano sempre 180° in ogni disegno."
        ],
        "correction": [
          "When the lines are parallel, alternate interior angles are equal; co-interior angles sum to 180°.",
          "Quando le rette sono parallele, gli angoli alterni interni sono uguali; quelli coniugati interni sommano 180°."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "If one co-interior angle is 73°, what is the other angle?",
        "Se un angolo coniugato interno misura 73°, quanto misura l'altro?"
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "A triangle has remote interior angles of 48° and 67°. Find the exterior angle at the third vertex.",
        "Un triangolo ha due angoli interni non adiacenti di 48° e 67°. Trova l'angolo esterno al terzo vertice."
      ],
      "steps": [
        [
          "Add the two remote interior angles: 48° + 67° = 115°.",
          "Somma i due angoli interni non adiacenti: 48° + 67° = 115°."
        ],
        [
          "The exterior angle equals this sum.",
          "L'angolo esterno è uguale a questa somma."
        ]
      ],
      "answer": [
        "The exterior angle is 115°.",
        "L'angolo esterno misura 115°."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "The exterior angle equals 180° minus one remote interior angle.",
          "L'angolo esterno è uguale a 180° meno uno degli angoli interni non adiacenti."
        ],
        "correction": [
          "It equals the sum of both remote interior angles.",
          "È uguale alla somma di entrambi gli angoli interni non adiacenti."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "If the remote interior angles are 35° and 82°, find the exterior angle.",
        "Se gli angoli interni non adiacenti sono 35° e 82°, calcola l'angolo esterno."
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "A right triangle has shorter sides of 5 cm and 12 cm. Find the hypotenuse.",
        "Un triangolo rettangolo ha i cateti di 5 cm e 12 cm. Trova l'ipotenusa."
      ],
      "steps": [
        [
          "Use c² = a² + b²: c² = 5² + 12² = 25 + 144 = 169.",
          "Usa c² = a² + b²: c² = 5² + 12² = 25 + 144 = 169."
        ],
        [
          "Take the positive square root: c = 13 cm.",
          "Calcola la radice quadrata positiva: c = 13 cm."
        ]
      ],
      "answer": [
        "The hypotenuse is 13 cm.",
        "L'ipotenusa misura 13 cm."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "The hypotenuse is the sum of the two shorter sides.",
          "L'ipotenusa è la somma dei due cateti."
        ],
        "correction": [
          "Pythagoras adds the squares of the shorter sides, then takes the square root.",
          "Il teorema di Pitagora somma i quadrati dei cateti e poi calcola la radice quadrata."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "A right triangle has legs 8 cm and 15 cm. Find its hypotenuse.",
        "Un triangolo rettangolo ha cateti di 8 cm e 15 cm. Trova l'ipotenusa."
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "Find the sum of the interior angles of a hexagon.",
        "Trova la somma degli angoli interni di un esagono."
      ],
      "steps": [
        [
          "A hexagon has 6 sides, so n − 2 = 4 triangles can be formed from one vertex.",
          "Un esagono ha 6 lati, quindi da un vertice si possono formare n − 2 = 4 triangoli."
        ],
        [
          "Multiply by 180°: 4 × 180° = 720°.",
          "Moltiplica per 180°: 4 × 180° = 720°."
        ]
      ],
      "answer": [
        "The interior-angle sum is 720°.",
        "La somma degli angoli interni è 720°."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Multiply the number of sides by 180°.",
          "Moltiplica il numero dei lati per 180°."
        ],
        "correction": [
          "Use (n − 2) × 180° because an n-sided polygon can be divided into n − 2 triangles.",
          "Usa (n − 2) × 180° perché un poligono di n lati si può dividere in n − 2 triangoli."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "What is the interior-angle sum of a decagon? Show the value of n.",
        "Quanto misura la somma degli angoli interni di un decagono? Indica il valore di n."
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "Compare a 5 km journey east with a 5 km journey west.",
        "Confronta un percorso di 5 km verso est con uno di 5 km verso ovest."
      ],
      "steps": [
        [
          "Both journeys have magnitude 5 km.",
          "Entrambi i percorsi hanno modulo 5 km."
        ],
        [
          "Their directions differ, so the displacement vectors are different.",
          "Le direzioni sono diverse, quindi i vettori spostamento sono diversi."
        ]
      ],
      "answer": [
        "A vector needs both magnitude and direction; a scalar needs magnitude only.",
        "Un vettore richiede modulo e direzione; uno scalare richiede solo il modulo."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Two quantities are equal vectors if they have the same magnitude only.",
          "Due grandezze sono vettori uguali se hanno soltanto lo stesso modulo."
        ],
        "correction": [
          "Equal vectors must have both the same magnitude and the same direction.",
          "Due vettori uguali devono avere sia lo stesso modulo sia la stessa direzione."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Give one example of a vector quantity and name its magnitude and direction.",
        "Fai un esempio di grandezza vettoriale e indica modulo e direzione."
      ]
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
      "A vector has a bearing of 320°. Which statement is correct?",
      "Un vettore ha una direzione di 320°. Quale affermazione è corretta?"
    ],
    "a": [
      [
        "It points N40°W; a vector with the same magnitude and direction is equal even if it is shifted.",
        "Punta verso N40°O; un vettore con lo stesso modulo e la stessa direzione è uguale anche se traslato."
      ],
      [
        "It points N40°E; equal vectors must start at the same point.",
        "Punta verso N40°E; i vettori uguali devono partire dallo stesso punto."
      ],
      [
        "It points S40°W; equal vectors need only have the same length.",
        "Punta verso S40°O; per essere uguali i vettori devono avere solo la stessa lunghezza."
      ],
      [
        "It points due west; position determines its direction.",
        "Punta esattamente verso ovest; la posizione determina la sua direzione."
      ]
    ],
    "why": [
      "A 320° bearing is 40° west of north, written N40°W. Equal vectors have the same magnitude and direction, even at different positions.",
      "Una direzione di 320° corrisponde a 40° a ovest del nord, cioè N40°O. I vettori uguali hanno lo stesso modulo e la stessa direzione, anche in posizioni diverse."
    ],
    "workedExample": {
      "scenario": [
        "A ship travels on a bearing of 045°. Express the direction using a compass description.",
        "Una nave viaggia con direzione 045°. Esprimi la direzione con una descrizione rispetto ai punti cardinali."
      ],
      "steps": [
        [
          "Bearings are measured clockwise from north; 045° is 45° east of north.",
          "Gli azimut si misurano in senso orario dal nord; 045° è 45° a est del nord."
        ],
        [
          "Write the direction as N45°E. A translated arrow with the same length and direction represents the same vector.",
          "Scrivi la direzione N45°E. Una freccia traslata con stessa lunghezza e direzione rappresenta lo stesso vettore."
        ]
      ],
      "answer": [
        "The bearing is N45°E; equal vectors may be drawn in different positions.",
        "La direzione è N45°E; vettori uguali possono essere disegnati in posizioni diverse."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "A vector changes when its starting point is moved.",
          "Un vettore cambia quando si sposta il suo punto di partenza."
        ],
        "correction": [
          "A free vector is unchanged by translation if its magnitude and direction remain the same.",
          "Un vettore libero non cambia se viene traslato mantenendo modulo e direzione."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Convert a bearing of 135° into a compass direction.",
        "Trasforma una direzione di 135° in una direzione rispetto ai punti cardinali."
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "In a right triangle, the opposite side is 8 cm and the hypotenuse is 10 cm. Find sin θ.",
        "In un triangolo rettangolo, il cateto opposto misura 8 cm e l'ipotenusa 10 cm. Calcola sin θ."
      ],
      "steps": [
        [
          "Use sine = opposite ÷ hypotenuse.",
          "Usa seno = cateto opposto ÷ ipotenusa."
        ],
        [
          "Calculate 8 ÷ 10 = 0.8.",
          "Calcola 8 ÷ 10 = 0,8."
        ]
      ],
      "answer": [
        "sin θ = 0.8.",
        "sin θ = 0,8."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Sine is adjacent divided by hypotenuse.",
          "Il seno è il cateto adiacente diviso l'ipotenusa."
        ],
        "correction": [
          "Sine uses opposite over hypotenuse; cosine uses adjacent over hypotenuse.",
          "Il seno usa cateto opposto fratto ipotenusa; il coseno usa cateto adiacente fratto ipotenusa."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "If the adjacent side is 12 cm and the hypotenuse is 13 cm, which ratio gives cos θ?",
        "Se il cateto adiacente misura 12 cm e l'ipotenusa 13 cm, quale rapporto calcola cos θ?"
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "Find the exact values of sin 30° and cos 60°.",
        "Trova i valori esatti di sin 30° e cos 60°."
      ],
      "steps": [
        [
          "From the special-angle table, sin 30° = 1/2.",
          "Dalla tabella degli angoli notevoli, sin 30° = 1/2."
        ],
        [
          "The cosine of 60° is also 1/2.",
          "Anche il coseno di 60° vale 1/2."
        ]
      ],
      "answer": [
        "Both values are 1/2.",
        "Entrambi i valori sono 1/2."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "The sine of 30° is √3/2.",
          "Il seno di 30° è √3/2."
        ],
        "correction": [
          "sin 30° = 1/2; √3/2 is the value of sin 60° and cos 30°.",
          "sin 30° = 1/2; √3/2 è il valore di sin 60° e cos 30°."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "State the exact values of cos 30° and sin 60°.",
        "Indica i valori esatti di cos 30° e sin 60°."
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "Find sin 240° using its reference angle.",
        "Calcola sin 240° usando l'angolo di riferimento."
      ],
      "steps": [
        [
          "240° = 180° + 60°, so the reference angle is 60° and the terminal side is in quadrant III.",
          "240° = 180° + 60°, quindi l'angolo di riferimento è 60° e il lato finale è nel terzo quadrante."
        ],
        [
          "Sine is negative in quadrant III: sin 240° = −sin 60° = −√3/2.",
          "Il seno è negativo nel terzo quadrante: sin 240° = −sin 60° = −√3/2."
        ]
      ],
      "answer": [
        "sin 240° = −√3/2.",
        "sin 240° = −√3/2."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "The trigonometric ratio is positive because the reference angle is acute.",
          "Il rapporto trigonometrico è positivo perché l'angolo di riferimento è acuto."
        ],
        "correction": [
          "The sign depends on the quadrant of the original angle, not only on the reference angle.",
          "Il segno dipende dal quadrante dell'angolo originale, non solo dall'angolo di riferimento."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "In which quadrants is sine positive, and in which is it negative?",
        "In quali quadranti il seno è positivo e in quali è negativo?"
      ]
    ]
  },
  {
    "id": "ss1-measure-cs3-li1",
    "strand": "Geometry Around Us",
    "subStrand": "Measurement",
    "contentStandardId": "1.3.2.CS.3",
    "learningIndicatorId": "1.3.2.LI.1",
    "title": [
      "SI and imperial area referents",
      "Riferimenti per le misure di area SI e imperiali"
    ],
    "explanation": [
      "Identify and compare familiar referents for area measurements, such as a square metre and a square foot, before estimating a surface.",
      "Individua e confronta riferimenti familiari per le misure di area, come il metro quadrato e il piede quadrato, prima di stimare una superficie."
    ],
    "q": [
      "Which pair correctly matches familiar area referents?",
      "Quale coppia associa correttamente due riferimenti familiari per le misure di area?"
    ],
    "a": [
      [
        "A floor tile is about 1 ft²; an exterior house door is about 2 m².",
        "Una piastrella misura circa 1 ft²; una porta esterna misura circa 2 m²."
      ],
      [
        "A floor tile is about 1 m²; an exterior house door is about 2 ft².",
        "Una piastrella misura circa 1 m²; una porta esterna misura circa 2 ft²."
      ],
      [
        "A postage stamp is about 1 m²; an exercise book is about 1 ft².",
        "Un francobollo misura circa 1 m²; un quaderno misura circa 1 ft²."
      ],
      [
        "A fingernail is about 1 m²; an ice rink is about 15 m².",
        "Un'unghia misura circa 1 m²; una pista di pattinaggio misura circa 15 m²."
      ]
    ],
    "why": [
      "NaCCA gives a floor tile as a referent of about 1 ft² and an exterior house door as about 2 m².",
      "NaCCA indica una piastrella come riferimento di circa 1 ft² e una porta esterna come riferimento di circa 2 m²."
    ],
    "workedExample": {
      "scenario": [
        "Estimate the area of a classroom floor that is about 8 m long and 6 m wide.",
        "Stima l'area del pavimento di un'aula lunga circa 8 m e larga 6 m."
      ],
      "steps": [
        [
          "Use the rectangle area formula: 8 × 6 = 48.",
          "Usa la formula dell'area del rettangolo: 8 × 6 = 48."
        ],
        [
          "Compare the result with a familiar referent: an exterior door is about 2 m², so 48 m² is roughly 24 door areas.",
          "Confronta il risultato con un riferimento noto: una porta esterna misura circa 2 m², quindi 48 m² equivalgono a circa 24 aree di porta."
        ]
      ],
      "answer": [
        "The estimated floor area is 48 m²; area is measured in square units.",
        "L'area stimata del pavimento è 48 m²; l'area si misura in unità quadrate."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "A floor area is measured in metres, not square metres.",
          "L'area di un pavimento si misura in metri, non in metri quadrati."
        ],
        "correction": [
          "Metres measure length; square metres measure area. Use squared units for surfaces.",
          "I metri misurano una lunghezza; i metri quadrati misurano un'area. Per le superfici usa unità al quadrato."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Name one familiar object that can help you estimate an area in square metres.",
        "Indica un oggetto comune che può aiutarti a stimare un'area in metri quadrati."
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "A grid shape covers 10 full squares and 8 half-squares. Each square is 1 cm². Estimate its area.",
        "Una figura su una griglia copre 10 quadrati interi e 8 mezzi quadrati. Ogni quadrato misura 1 cm². Stima l'area."
      ],
      "steps": [
        [
          "Pair the 8 half-squares to make 4 full squares.",
          "Unisci gli 8 mezzi quadrati per formare 4 quadrati interi."
        ],
        [
          "Add 10 + 4 = 14 square centimetres.",
          "Somma 10 + 4 = 14 centimetri quadrati."
        ]
      ],
      "answer": [
        "The estimated area is 14 cm².",
        "L'area stimata è 14 cm²."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Count every half-square as one full square.",
          "Conta ogni mezzo quadrato come un quadrato intero."
        ],
        "correction": [
          "Two half-squares make one full square, so multiply the number of half-squares by one half.",
          "Due mezzi quadrati formano un quadrato intero, quindi moltiplica il numero dei mezzi quadrati per un mezzo."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "A shape covers 12 full squares and 4 half-squares. Estimate its area.",
        "Una figura copre 12 quadrati interi e 4 mezzi quadrati. Stima la sua area."
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "A garden is made from two non-overlapping rectangles: 10 m × 4 m and 3 m × 2 m. Find the total area.",
        "Un giardino è formato da due rettangoli che non si sovrappongono: 10 m × 4 m e 3 m × 2 m. Trova l'area totale."
      ],
      "steps": [
        [
          "First area: 10 × 4 = 40 m². Second area: 3 × 2 = 6 m².",
          "Prima area: 10 × 4 = 40 m². Seconda area: 3 × 2 = 6 m²."
        ],
        [
          "Add the non-overlapping parts: 40 + 6 = 46 m².",
          "Somma le parti che non si sovrappongono: 40 + 6 = 46 m²."
        ]
      ],
      "answer": [
        "The total area is 46 m².",
        "L'area totale è 46 m²."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Add the side lengths of the rectangles to find area.",
          "Somma le lunghezze dei lati dei rettangoli per trovare l'area."
        ],
        "correction": [
          "Calculate each rectangle's area by multiplying length by width, then add the areas.",
          "Calcola l'area di ogni rettangolo moltiplicando lunghezza per larghezza, poi somma le aree."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "How would you find the area of a composite shape if two parts overlap?",
        "Come troveresti l'area di una figura composta se due parti si sovrappongono?"
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "A prism has a cross-sectional area of 12 cm² and a perpendicular length of 9 cm. Find its volume.",
        "Un prisma ha un'area di sezione di 12 cm² e una lunghezza perpendicolare di 9 cm. Calcola il volume."
      ],
      "steps": [
        [
          "Use volume = cross-sectional area × length.",
          "Usa volume = area della sezione × lunghezza."
        ],
        [
          "Multiply 12 × 9 = 108 and use cubic units.",
          "Moltiplica 12 × 9 = 108 e usa unità cubiche."
        ]
      ],
      "answer": [
        "The volume is 108 cm³.",
        "Il volume è 108 cm³."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Use square units because the cross-section is an area.",
          "Usa unità quadrate perché la sezione è un'area."
        ],
        "correction": [
          "Multiplying an area by a length gives volume, so the unit is cubic: cm² × cm = cm³.",
          "Moltiplicando un'area per una lunghezza ottieni un volume, quindi l'unità è cubica: cm² × cm = cm³."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "A prism has cross-sectional area 20 cm² and length 5 cm. Find its volume.",
        "Un prisma ha un'area di sezione di 20 cm² e una lunghezza di 5 cm. Calcola il volume."
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "Classify the number of books each learner borrowed: 0, 1, 2, 3, and 4.",
        "Classifica il numero di libri presi in prestito da ogni studente: 0, 1, 2, 3 e 4."
      ],
      "steps": [
        [
          "The values are numbers, so the data are quantitative.",
          "I valori sono numeri, quindi i dati sono quantitativi."
        ],
        [
          "Books are counted in whole numbers, so the data are discrete.",
          "I libri si contano con numeri interi, quindi i dati sono discreti."
        ]
      ],
      "answer": [
        "The number of books borrowed is discrete quantitative data.",
        "Il numero di libri presi in prestito è un dato quantitativo discreto."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "A numerical variable is always continuous.",
          "Una variabile numerica è sempre continua."
        ],
        "correction": [
          "Counts are discrete; measurements such as height or time are usually continuous.",
          "I conteggi sono discreti; misure come altezza o tempo sono di solito continue."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Is a learner's height discrete or continuous data? Explain why.",
        "L'altezza di uno studente è un dato discreto o continuo? Spiega perché."
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "A class wants to record the heights of 25 learners. Choose a suitable primary data method.",
        "Una classe vuole registrare l'altezza di 25 studenti. Scegli un metodo adatto per raccogliere dati primari."
      ],
      "steps": [
        [
          "Measure every learner with the same calibrated height scale.",
          "Misura ogni studente con lo stesso strumento per l'altezza, correttamente calibrato."
        ],
        [
          "Record the value in centimetres and use the same procedure for everyone.",
          "Registra il valore in centimetri e usa la stessa procedura per tutti."
        ]
      ],
      "answer": [
        "Direct, consistent measurement provides primary quantitative data.",
        "Una misurazione diretta e coerente fornisce dati quantitativi primari."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Ask learners to guess their heights to save time.",
          "Chiedi agli studenti di indovinare la propria altezza per risparmiare tempo."
        ],
        "correction": [
          "A guess is less reliable. Use the same measuring instrument and method for all participants.",
          "Una stima è meno affidabile. Usa lo stesso strumento e lo stesso metodo per tutti i partecipanti."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "What should remain the same when measuring every learner's height?",
        "Che cosa deve rimanere uguale quando misuri l'altezza di ogni studente?"
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "A school wants to understand why learners join or avoid a reading club. Choose a method for detailed opinions.",
        "Una scuola vuole capire perché gli studenti partecipano o non partecipano a un club di lettura. Scegli un metodo per raccogliere opinioni approfondite."
      ],
      "steps": [
        [
          "Invite a small, varied group of learners to discuss their experiences.",
          "Invita un piccolo gruppo vario di studenti a discutere le proprie esperienze."
        ],
        [
          "Use open questions and record themes without attributing comments to named learners.",
          "Usa domande aperte e registra i temi senza associare i commenti ai nomi degli studenti."
        ]
      ],
      "answer": [
        "A focus group is suitable for exploring reasons and opinions in depth.",
        "Un focus group è adatto a esplorare motivazioni e opinioni in profondità."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "A focus group is the best method for collecting an exact count from every learner.",
          "Un focus group è il metodo migliore per raccogliere un conteggio esatto da ogni studente."
        ],
        "correction": [
          "Focus groups explore views in depth; a structured survey or count is better for numerical totals.",
          "I focus group esplorano le opinioni in profondità; un sondaggio strutturato o un conteggio è migliore per i totali numerici."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Write one open question that could help explain why learners enjoy a school club.",
        "Scrivi una domanda aperta che aiuti a capire perché gli studenti apprezzano un club scolastico."
      ]
    ]
  },
  {
    "id": "ss1-stats-cs2-descriptive",
    "strand": "Making Sense of and Using Data",
    "subStrand": "Statistical Reasoning and Its Application in Real Life",
    "contentStandardId": "1.4.1.CS.2",
    "learningIndicatorId": "1.4.3.LI.2",
    "title": [
      "Descriptive statistics and outliers",
      "Statistica descrittiva e valori anomali"
    ],
    "explanation": [
      "Calculate and interpret mean, median and mode, and choose a measure that represents the data appropriately when extreme values are present.",
      "Calcola e interpreta media, mediana e moda e scegli la misura che rappresenta adeguatamente i dati quando sono presenti valori estremi."
    ],
    "q": [
      "The values are 4, 5, 5, 6 and 30. Which average best represents a typical value when 30 is an outlier?",
      "I valori sono 4, 5, 5, 6 e 30. Quale media rappresenta meglio un valore tipico quando 30 è un valore anomalo?"
    ],
    "a": [
      [
        "Median = 5",
        "Mediana = 5"
      ],
      [
        "Mean = 10",
        "Media aritmetica = 10"
      ],
      [
        "Maximum = 30",
        "Massimo = 30"
      ],
      [
        "Range = 26",
        "Intervallo = 26"
      ]
    ],
    "why": [
      "The median is 5 and is less affected by the outlier than the mean.",
      "La mediana è 5 ed è meno influenzata dal valore anomalo rispetto alla media aritmetica."
    ],
    "workedExample": {
      "scenario": [
        "Find the median of 3, 4, 5, 6 and 28 when 28 is an outlier.",
        "Trova la mediana di 3, 4, 5, 6 e 28 quando 28 è un valore anomalo."
      ],
      "steps": [
        [
          "The values are already in order; the middle value is 5.",
          "I valori sono già ordinati; quello centrale è 5."
        ],
        [
          "The outlier 28 changes the mean strongly but does not move the middle value.",
          "Il valore anomalo 28 modifica molto la media ma non sposta il valore centrale."
        ]
      ],
      "answer": [
        "The median is 5 and is a better measure of a typical value here than the mean.",
        "La mediana è 5 ed è qui una misura del valore tipico migliore della media."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "The mean is always the best average, even when there is an extreme outlier.",
          "La media aritmetica è sempre la misura migliore, anche quando c'è un valore anomalo estremo."
        ],
        "correction": [
          "Compare mean, median and mode; the median is often more representative when an outlier is present.",
          "Confronta media, mediana e moda; in presenza di un valore anomalo la mediana è spesso più rappresentativa."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "How would adding a very large outlier affect the mean and the median?",
        "Come cambierebbe la media e la mediana aggiungendo un valore anomalo molto grande?"
      ]
    ]
  },
  {
    "id": "ss1-stats-cs2-li2",
    "strand": "Making Sense of and Using Data",
    "subStrand": "Statistical Reasoning and Its Application in Real Life",
    "contentStandardId": "1.4.1.CS.2",
    "learningIndicatorId": "1.4.1.LI.2",
    "title": [
      "Organise and present data",
      "Organizzare e presentare i dati"
    ],
    "explanation": [
      "Organise grouped and ungrouped observations in frequency tables and select clear visual displays such as line graphs, pie charts and multiple bar graphs.",
      "Organizza osservazioni raggruppate e non raggruppate in tabelle di frequenza e scegli rappresentazioni visive chiare come grafici a linee, diagrammi circolari e grafici a barre multiple."
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
    ],
    "workedExample": {
      "scenario": [
        "Create the frequency of 3 in the data set 1, 3, 2, 3, 4, 3, 2.",
        "Trova la frequenza del valore 3 nell'insieme 1, 3, 2, 3, 4, 3, 2."
      ],
      "steps": [
        [
          "Read each value once and make a tally whenever 3 appears.",
          "Leggi ogni valore una volta e segna una tacca ogni volta che compare 3."
        ],
        [
          "The value 3 appears three times.",
          "Il valore 3 compare tre volte."
        ]
      ],
      "answer": [
        "The frequency of 3 is 3.",
        "La frequenza di 3 è 3."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "The frequency of a value is the value itself.",
          "La frequenza di un valore coincide con il valore stesso."
        ],
        "correction": [
          "Frequency tells how many times the value occurs in the data set.",
          "La frequenza indica quante volte il valore compare nell'insieme dei dati."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "What is the frequency of 2 in 2, 5, 2, 2, 7, 5?",
        "Qual è la frequenza di 2 in 2, 5, 2, 2, 7, 5?"
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "A school wants opinions from learners in all year groups. Plan a fair sample.",
        "Una scuola vuole raccogliere opinioni da studenti di tutti gli anni. Pianifica un campione corretto."
      ],
      "steps": [
        [
          "List the year groups and decide how many learners to select from each.",
          "Elenca gli anni scolastici e decidi quanti studenti scegliere da ciascuno."
        ],
        [
          "Select learners randomly within every year group so each group is represented.",
          "Seleziona gli studenti a caso all'interno di ogni anno, così ogni gruppo è rappresentato."
        ]
      ],
      "answer": [
        "Random selection from every year group gives a more representative sample than choosing one convenient class.",
        "Una selezione casuale da ogni anno produce un campione più rappresentativo rispetto alla scelta di una sola classe comoda."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Survey only the learners who are easiest to reach.",
          "Intervista solo gli studenti più facili da raggiungere."
        ],
        "correction": [
          "A convenience sample can be biased. Include all relevant groups and select participants fairly.",
          "Un campione di convenienza può essere distorto. Includi tutti i gruppi pertinenti e scegli i partecipanti in modo corretto."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Why might a sample from only one year group misrepresent the whole school?",
        "Perché un campione composto da un solo anno potrebbe non rappresentare tutta la scuola?"
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "Prepare a short report from a survey of learners' travel-to-school methods.",
        "Prepara un breve rapporto da un sondaggio sui mezzi usati dagli studenti per andare a scuola."
      ],
      "steps": [
        [
          "Show anonymised totals in a clearly labelled chart and describe how the sample was collected.",
          "Mostra totali anonimi in un grafico con etichette chiare e descrivi come è stato raccolto il campione."
        ],
        [
          "Make recommendations that follow from the results and state limits of the survey.",
          "Formula raccomandazioni coerenti con i risultati e indica i limiti del sondaggio."
        ]
      ],
      "answer": [
        "A responsible report protects identities, explains the method and links conclusions to evidence.",
        "Un rapporto responsabile protegge le identità, spiega il metodo e collega le conclusioni alle prove."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Publish learners' names and make claims that the survey did not measure.",
          "Pubblica i nomi degli studenti e formula conclusioni che il sondaggio non ha misurato."
        ],
        "correction": [
          "Protect privacy and separate observed results from unsupported assumptions.",
          "Proteggi la privacy e distingui i risultati osservati dalle supposizioni non supportate."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "What information should accompany a chart so readers can interpret it responsibly?",
        "Quali informazioni dovrebbero accompagnare un grafico perché i lettori possano interpretarlo correttamente?"
      ]
    ]
  },
  {
    "id": "ss1-stats-cs2-li3",
    "strand": "Making Sense of and Using Data",
    "subStrand": "Statistical Reasoning and Its Application in Real Life",
    "contentStandardId": "1.4.1.CS.2",
    "learningIndicatorId": "1.4.1.LI.3",
    "title": [
      "Make evidence-based inferences from data",
      "Ricavare inferenze dai dati basate su prove"
    ],
    "explanation": [
      "Use mathematical arguments to support personal choices and make careful inferences from everyday data, recognising limits in the evidence.",
      "Usa argomentazioni matematiche per sostenere scelte personali e formulare inferenze prudenti dai dati quotidiani, riconoscendo i limiti delle prove."
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
    ],
    "workedExample": {
      "scenario": [
        "A survey aims to describe the whole school but asks only learners in one class. Evaluate the conclusion.",
        "Un sondaggio vuole descrivere tutta la scuola ma interroga solo gli studenti di una classe. Valuta la conclusione."
      ],
      "steps": [
        [
          "The class may have different ages, interests or experiences from other year groups.",
          "La classe può avere età, interessi o esperienze diversi dagli altri anni."
        ],
        [
          "The sample may be biased, so do not generalise the result to every learner without further evidence.",
          "Il campione può essere distorto, quindi non generalizzare il risultato a tutti gli studenti senza altre prove."
        ]
      ],
      "answer": [
        "The sample may not represent the whole school; the inference must be qualified.",
        "Il campione potrebbe non rappresentare tutta la scuola; l'inferenza deve essere formulata con cautela."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "A large number of responses automatically makes a sample representative.",
          "Un grande numero di risposte rende automaticamente rappresentativo un campione."
        ],
        "correction": [
          "How participants are selected matters as well as sample size; a biased sample can remain biased when large.",
          "Conta anche come vengono scelti i partecipanti, non solo la dimensione: un campione distorto può restare tale anche se è grande."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Suggest one way to improve the sample so it better represents the whole school.",
        "Suggerisci un modo per migliorare il campione affinché rappresenti meglio tutta la scuola."
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "List the sample space when a fair coin is tossed twice.",
        "Elenca lo spazio campionario quando una moneta equa viene lanciata due volte."
      ],
      "steps": [
        [
          "Record the first toss, then the second: HH, HT, TH and TT.",
          "Registra il primo lancio e poi il secondo: TT, TC, CT e CC."
        ],
        [
          "There are four ordered outcomes because the two toss positions are distinct.",
          "Ci sono quattro risultati ordinati perché le posizioni dei due lanci sono distinte."
        ]
      ],
      "answer": [
        "The sample space has four outcomes: HH, HT, TH and TT.",
        "Lo spazio campionario contiene quattro risultati: TT, TC, CT e CC."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "HT and TH are the same outcome because they contain one head and one tail.",
          "HT e TH sono lo stesso risultato perché contengono una testa e una croce."
        ],
        "correction": [
          "The order records which toss produced each result, so HT and TH are distinct outcomes.",
          "L'ordine indica il risultato di ciascun lancio, quindi HT e TH sono risultati distinti."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "How many ordered outcomes are possible when a coin is tossed three times?",
        "Quanti risultati ordinati sono possibili lanciando una moneta tre volte?"
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "Find the probability of rolling an even number on a fair six-sided die and getting heads on a fair coin.",
        "Calcola la probabilità di ottenere un numero pari con un dado equo e testa con una moneta equa."
      ],
      "steps": [
        [
          "P(even) = 3/6 = 1/2 and P(heads) = 1/2.",
          "P(numero pari) = 3/6 = 1/2 e P(testa) = 1/2."
        ],
        [
          "The events are independent, so multiply: 1/2 × 1/2 = 1/4.",
          "Gli eventi sono indipendenti, quindi moltiplica: 1/2 × 1/2 = 1/4."
        ]
      ],
      "answer": [
        "The probability is 1/4.",
        "La probabilità è 1/4."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Add the probabilities of two independent events to find that both occur.",
          "Somma le probabilità di due eventi indipendenti per trovare la probabilità che accadano entrambi."
        ],
        "correction": [
          "For both independent events to occur, multiply their probabilities.",
          "Perché si verifichino entrambi gli eventi indipendenti, moltiplica le loro probabilità."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "If two independent events have probabilities 1/3 and 1/5, what is the probability both occur?",
        "Se due eventi indipendenti hanno probabilità 1/3 e 1/5, qual è la probabilità che si verifichino entrambi?"
      ]
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
    ],
    "workedExample": {
      "scenario": [
        "A bag has 4 green and 1 yellow counter. A counter is drawn, replaced and drawn again. Find the probability of green twice.",
        "Un sacchetto contiene 4 gettoni verdi e 1 giallo. Si estrae un gettone, lo si rimette e si estrae di nuovo. Calcola la probabilità di ottenere verde due volte."
      ],
      "steps": [
        [
          "The probability of green on each draw is 4/5 because the counter is replaced.",
          "La probabilità di verde a ogni estrazione è 4/5 perché il gettone viene rimesso."
        ],
        [
          "Multiply the independent probabilities: 4/5 × 4/5 = 16/25.",
          "Moltiplica le probabilità indipendenti: 4/5 × 4/5 = 16/25."
        ]
      ],
      "answer": [
        "The probability of drawing green twice is 16/25.",
        "La probabilità di estrarre verde due volte è 16/25."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "The second draw has a different probability even though the first counter is replaced.",
          "La seconda estrazione ha una probabilità diversa anche se il primo gettone viene rimesso."
        ],
        "correction": [
          "Replacement restores the original bag, so the probability stays 4/5 on both draws.",
          "La reimmissione ripristina il contenuto iniziale del sacchetto, quindi la probabilità resta 4/5 in entrambe le estrazioni."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "How would the probability change if the first counter were not replaced?",
        "Come cambierebbe la probabilità se il primo gettone non venisse rimesso?"
      ]
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

const lesson = (en: string, _it: string) => ({
  who: 's' as const,
  vis: 'infowords',
  text: `<p>${en}</p>`
});

const question = (en: string, _it: string, answers: [string, string][], whyEn: string, _whyIt: string) => ({
  q: en,
  a: answers.map(answer => answer[0]),
  why: whyEn
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
    title: 'The 45-Indicator Mastery Expedition',
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
    title: 'The 45-Indicator Mastery Expedition',
    topic: 'A curriculum-mapped diagnostic with one question for each of the 45 SHS 1 learning indicators, followed by targeted revision for every missed indicator.',
    demon: 'The Coverage Warden',
    tech: 'Mastery Form · Final Technique: One Indicator at a Time',
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
        '<b>Interpretare e utilizzare i dati:</b> Classifica i dati, scegli i metodi di raccolta, organizza e presenta le informazioni, pianifica un\'indagine scolastica corretta e sostieni le conclusioni con prove.'
      ),
      lesson(
        '<b>Probability and Chance:</b> List sample spaces, recognise independent events and multiply probabilities only when the independence condition is satisfied. A replacement draw is a useful example because the probabilities stay the same.',
        '<b>Probabilità e caso:</b> Elenca gli spazi campionari, riconosci gli eventi indipendenti e moltiplica le probabilità solo quando vale la condizione di indipendenza. Un\'estrazione con reinserimento è un esempio utile perché le probabilità restano invariate.'
      ),
      lesson(
        '<b>How your diagnostic works:</b> Answer all 45 questions independently. Each question records evidence for one curriculum indicator. The pass mark is 80% (36 correct answers). A missed answer is linked to a named concept so the revision panel can point you to the exact skill to practise.',
        '<b>Come funziona la verifica:</b> Rispondi autonomamente a tutte le 45 domande. Ogni domanda registra una prova relativa a un indicatore del programma. La soglia è l’80% (36 risposte corrette). Ogni errore è collegato a un concetto specifico, così il pannello di ripasso può indicarti l’abilità da esercitare.'
      ),
      lesson(
        '<b>Be thoughtful, not rushed.</b> Read the full question, show working on paper when useful, and check units, signs and restrictions. The diagnostic reinforces the existing SHS 1 scope; it does not add or replace curriculum requirements.',
        '<b>Ragiona con calma, senza fretta.</b> Leggi tutta la domanda, svolgi i passaggi su carta quando serve e controlla unità, segni e condizioni. La verifica consolida il programma SHS 1 esistente: non aggiunge né sostituisce requisiti curriculari.'
      ),
      { who: 'd', vis: 'demon', text: 'I have scattered your knowledge across eight sub-strands. Prove that you can retrieve each skill, and let every missed indicator reveal the next technique you must train!' },
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
        explanation: item.explanation,
        workedExample: item.workedExample,
        misconceptions: item.misconceptions,
        knowledgePrompts: item.knowledgePrompts
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
