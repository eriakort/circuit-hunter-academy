import type { QuizQuestion } from '../types';

/** One alternate bilingual item for each of the 45 official SHS 1 indicator concepts. */
export const GHANA_SS1_INDICATOR_ALTERNATE_QUESTIONS: Record<string, QuizQuestion> = {
  "ss1-real-cs1-li1": {
    "q": [
      "Which operation shows that the integers are not closed?",
      "Quale operazione mostra che gli interi non sono chiusi?"
    ],
    "a": [
      [
        "7 ÷ 2 = 3.5, which is not an integer",
        "7 ÷ 2 = 3,5, che non è un intero"
      ],
      [
        "7 − 2 = 5",
        "7 − 2 = 5"
      ],
      [
        "7 × 2 = 14",
        "7 × 2 = 14"
      ],
      [
        "7 + 2 = 9",
        "7 + 2 = 9"
      ]
    ],
    "why": [
      "Closure requires every result to remain in the set. Dividing two integers can produce a non-integer.",
      "La chiusura richiede che ogni risultato resti nell'insieme. Dividere due interi può produrre un numero non intero."
    ]
  },
  "ss1-real-cs1-li2": {
    "q": [
      "Which value is irrational?",
      "Quale valore è irrazionale?"
    ],
    "a": [
      [
        "√11",
        "√11"
      ],
      [
        "0.6",
        "0,6"
      ],
      [
        "−3/4",
        "−3/4"
      ],
      [
        "1.272727…",
        "1,272727…"
      ]
    ],
    "why": [
      "11 is not a perfect square, so √11 cannot be written as a ratio of integers. The other values are rational.",
      "11 non è un quadrato perfetto, quindi √11 non può essere scritto come rapporto tra interi. Gli altri valori sono razionali."
    ]
  },
  "ss1-real-cs1-li3": {
    "q": [
      "Which equality shows the multiplicative identity property?",
      "Quale uguaglianza mostra la proprietà dell'elemento neutro moltiplicativo?"
    ],
    "a": [
      [
        "9 × 1 = 9",
        "9 × 1 = 9"
      ],
      [
        "9 × 0 = 0",
        "9 × 0 = 0"
      ],
      [
        "9 + 1 = 10",
        "9 + 1 = 10"
      ],
      [
        "9 × 2 = 2 × 9",
        "9 × 2 = 2 × 9"
      ]
    ],
    "why": [
      "Multiplying any real number by 1 leaves it unchanged.",
      "Moltiplicare un numero reale per 1 lascia invariato il numero."
    ]
  },
  "ss1-real-cs2-li1": {
    "q": [
      "If A = {1, 3, 5, 7} and B = {3, 4, 7}, what is A ∪ B?",
      "Se A = {1, 3, 5, 7} e B = {3, 4, 7}, quanto vale A ∪ B?"
    ],
    "a": [
      [
        "{1, 3, 4, 5, 7}",
        "{1, 3, 4, 5, 7}"
      ],
      [
        "{3, 7}",
        "{3, 7}"
      ],
      [
        "{1, 5}",
        "{1, 5}"
      ],
      [
        "{1, 3, 5, 7, 3, 4, 7}",
        "{1, 3, 5, 7, 3, 4, 7}"
      ]
    ],
    "why": [
      "The union contains every distinct element that belongs to A or B.",
      "L'unione contiene tutti gli elementi distinti che appartengono ad A oppure a B."
    ]
  },
  "ss1-real-cs2-li2": {
    "q": [
      "In a survey, 30 learners like football, 22 like netball and 8 like both. How many like at least one?",
      "In un sondaggio, 30 studenti preferiscono il calcio, 22 la pallavolo e 8 entrambi. Quanti ne preferiscono almeno uno?"
    ],
    "a": [
      [
        "44",
        "44"
      ],
      [
        "60",
        "60"
      ],
      [
        "52",
        "52"
      ],
      [
        "38",
        "38"
      ]
    ],
    "why": [
      "Use inclusion–exclusion: 30 + 22 − 8 = 44. The overlap is counted only once.",
      "Usa il principio di inclusione-esclusione: 30 + 22 − 8 = 44. L'intersezione va contata una sola volta."
    ]
  },
  "ss1-real-cs2-li3": {
    "q": [
      "Which identity is the second De Morgan law?",
      "Quale identità rappresenta la seconda legge di De Morgan?"
    ],
    "a": [
      [
        "(A ∩ B)′ = A′ ∪ B′",
        "(A ∩ B)′ = A′ ∪ B′"
      ],
      [
        "(A ∩ B)′ = A′ ∩ B′",
        "(A ∩ B)′ = A′ ∩ B′"
      ],
      [
        "(A ∪ B)′ = A′ ∪ B′",
        "(A ∪ B)′ = A′ ∪ B′"
      ],
      [
        "A ∩ B = A′ ∪ B′",
        "A ∩ B = A′ ∪ B′"
      ]
    ],
    "why": [
      "The complement of an intersection equals the union of the complements.",
      "Il complementare di un'intersezione è uguale all'unione dei complementari."
    ]
  },
  "ss1-prop-cs1-li1": {
    "q": [
      "What are the decimal and percentage equivalents of 3/8?",
      "Quali sono gli equivalenti decimale e percentuale di 3/8?"
    ],
    "a": [
      [
        "0.375 and 37.5%",
        "0,375 e 37,5%"
      ],
      [
        "0.38 and 38%",
        "0,38 e 38%"
      ],
      [
        "0.35 and 35%",
        "0,35 e 35%"
      ],
      [
        "0.625 and 62.5%",
        "0,625 e 62,5%"
      ]
    ],
    "why": [
      "3 ÷ 8 = 0.375; multiplying by 100 gives 37.5%.",
      "3 ÷ 8 = 0,375; moltiplicando per 100 si ottiene 37,5%."
    ]
  },
  "ss1-prop-cs1-li2": {
    "q": [
      "For −4/7, what are the additive inverse and multiplicative inverse, in that order?",
      "Per −4/7, quali sono l'inverso additivo e quello moltiplicativo, in quest'ordine?"
    ],
    "a": [
      [
        "4/7 and −7/4",
        "4/7 e −7/4"
      ],
      [
        "−4/7 and 7/4",
        "−4/7 e 7/4"
      ],
      [
        "7/4 and 4/7",
        "7/4 e 4/7"
      ],
      [
        "4/7 and 7/4",
        "4/7 e 7/4"
      ]
    ],
    "why": [
      "The additive inverse changes the sign; the multiplicative inverse is the reciprocal and keeps the negative sign.",
      "L'inverso additivo cambia il segno; quello moltiplicativo è il reciproco e mantiene il segno negativo."
    ]
  },
  "ss1-prop-cs2-li1": {
    "q": [
      "Find 15% of 240.",
      "Calcola il 15% di 240."
    ],
    "a": [
      [
        "36",
        "36"
      ],
      [
        "24",
        "24"
      ],
      [
        "40",
        "40"
      ],
      [
        "48",
        "48"
      ]
    ],
    "why": [
      "10% of 240 is 24 and 5% is 12; together they make 36.",
      "Il 10% di 240 è 24 e il 5% è 12; insieme fanno 36."
    ]
  },
  "ss1-prop-cs2-li2": {
    "q": [
      "A trader buys a bag for GH₵150 and sells it for GH₵180. What is the profit percentage on cost?",
      "Un commerciante compra una borsa a GH₵150 e la vende a GH₵180. Qual è la percentuale di profitto sul costo?"
    ],
    "a": [
      [
        "20%",
        "20%"
      ],
      [
        "16.7%",
        "16,7%"
      ],
      [
        "30%",
        "30%"
      ],
      [
        "120%",
        "120%"
      ]
    ],
    "why": [
      "Profit = 180 − 150 = GH₵30. Profit percentage = 30 ÷ 150 × 100 = 20%.",
      "Profitto = 180 − 150 = GH₵30. Percentuale di profitto = 30 ÷ 150 × 100 = 20%."
    ]
  },
  "ss1-algebra-cs1-li1": {
    "q": [
      "Simplify 5y − 2(3 − y).",
      "Semplifica 5y − 2(3 − y)."
    ],
    "a": [
      [
        "7y − 6",
        "7y − 6"
      ],
      [
        "3y − 6",
        "3y − 6"
      ],
      [
        "7y + 6",
        "7y + 6"
      ],
      [
        "5y − 6",
        "5y − 6"
      ]
    ],
    "why": [
      "Distribute −2: 5y − 6 + 2y = 7y − 6.",
      "Distribuisci −2: 5y − 6 + 2y = 7y − 6."
    ]
  },
  "ss1-algebra-cs1-li2": {
    "q": [
      "Factorise x² + 9x + 20.",
      "Scomponi x² + 9x + 20."
    ],
    "a": [
      [
        "(x + 4)(x + 5)",
        "(x + 4)(x + 5)"
      ],
      [
        "(x + 2)(x + 10)",
        "(x + 2)(x + 10)"
      ],
      [
        "(x − 4)(x − 5)",
        "(x − 4)(x − 5)"
      ],
      [
        "(x + 1)(x + 20)",
        "(x + 1)(x + 20)"
      ]
    ],
    "why": [
      "The numbers 4 and 5 multiply to 20 and add to 9.",
      "I numeri 4 e 5 hanno prodotto 20 e somma 9."
    ]
  },
  "ss1-algebra-cs1-li3": {
    "q": [
      "Factorise 16p² − 81.",
      "Scomponi 16p² − 81."
    ],
    "a": [
      [
        "(4p − 9)(4p + 9)",
        "(4p − 9)(4p + 9)"
      ],
      [
        "(16p − 9)(p + 9)",
        "(16p − 9)(p + 9)"
      ],
      [
        "(4p − 9)²",
        "(4p − 9)²"
      ],
      [
        "(4p − 81)(4p + 1)",
        "(4p − 81)(4p + 1)"
      ]
    ],
    "why": [
      "This is a difference of squares: (4p)² − 9² = (4p − 9)(4p + 9).",
      "È una differenza di quadrati: (4p)² − 9² = (4p − 9)(4p + 9)."
    ]
  },
  "ss1-algebra-cs1-li4": {
    "q": [
      "Simplify (x² − 16)/(x − 4), stating the restriction.",
      "Semplifica (x² − 16)/(x − 4), indicando la condizione."
    ],
    "a": [
      [
        "x + 4, where x ≠ 4",
        "x + 4, con x ≠ 4"
      ],
      [
        "x − 4, where x ≠ 4",
        "x − 4, con x ≠ 4"
      ],
      [
        "x + 4, for every real x",
        "x + 4, per ogni numero reale x"
      ],
      [
        "x − 4, where x ≠ −4",
        "x − 4, con x ≠ −4"
      ]
    ],
    "why": [
      "Factor the numerator as (x − 4)(x + 4), cancel the common factor, but keep x ≠ 4.",
      "Scomponi il numeratore in (x − 4)(x + 4), semplifica il fattore comune, ma mantieni x ≠ 4."
    ]
  },
  "ss1-algebra-cs2-li1": {
    "q": [
      "The perimeter of a rectangle is P = 2l + 2w. Make l the subject.",
      "Il perimetro di un rettangolo è P = 2l + 2w. Ricava l."
    ],
    "a": [
      [
        "l = (P − 2w)/2",
        "l = (P − 2w)/2"
      ],
      [
        "l = P − 2w",
        "l = P − 2w"
      ],
      [
        "l = (P + 2w)/2",
        "l = (P + 2w)/2"
      ],
      [
        "l = 2P − w",
        "l = 2P − w"
      ]
    ],
    "why": [
      "Subtract 2w from both sides, then divide by 2.",
      "Sottrai 2w da entrambi i membri, poi dividi per 2."
    ]
  },
  "ss1-algebra-cs2-li2": {
    "q": [
      "Solve 5x + 4 > 19.",
      "Risolvi 5x + 4 > 19."
    ],
    "a": [
      [
        "x > 3",
        "x > 3"
      ],
      [
        "x < 3",
        "x < 3"
      ],
      [
        "x > 5",
        "x > 5"
      ],
      [
        "x ≥ 3",
        "x ≥ 3"
      ]
    ],
    "why": [
      "Subtract 4 to get 5x > 15, then divide by positive 5.",
      "Sottrai 4 ottenendo 5x > 15, poi dividi per 5 positivo."
    ]
  },
  "ss1-patterns-cs1-li1": {
    "q": [
      "A function maps 0 to 2, 1 to 5 and 2 to 8. Which rule describes it?",
      "Una funzione associa 0 a 2, 1 a 5 e 2 a 8. Quale regola la descrive?"
    ],
    "a": [
      [
        "y = 3x + 2",
        "y = 3x + 2"
      ],
      [
        "y = 2x + 3",
        "y = 2x + 3"
      ],
      [
        "y = x + 2",
        "y = x + 2"
      ],
      [
        "y = 3x − 2",
        "y = 3x − 2"
      ]
    ],
    "why": [
      "Each output is three times the input plus 2, so the rule is y = 3x + 2.",
      "Ogni risultato è tre volte il valore iniziale più 2, quindi la regola è y = 3x + 2."
    ]
  },
  "ss1-patterns-cs1-li2": {
    "q": [
      "Where does the graph of y = −3x + 5 cross the y-axis?",
      "Dove interseca l'asse y il grafico di y = −3x + 5?"
    ],
    "a": [
      [
        "At (0, 5)",
        "Nel punto (0, 5)"
      ],
      [
        "At (5, 0)",
        "Nel punto (5, 0)"
      ],
      [
        "At (0, −3)",
        "Nel punto (0, −3)"
      ],
      [
        "At (−3, 0)",
        "Nel punto (−3, 0)"
      ]
    ],
    "why": [
      "The y-intercept is the value of y when x = 0; here it is 5.",
      "L'intercetta sull'asse y è il valore di y quando x = 0; qui è 5."
    ]
  },
  "ss1-patterns-cs2-li1": {
    "q": [
      "Find the gradient of the line through (2, 1) and (4, 9).",
      "Calcola il coefficiente angolare della retta passante per (2, 1) e (4, 9)."
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
        "8",
        "8"
      ],
      [
        "−4",
        "−4"
      ]
    ],
    "why": [
      "Gradient = (9 − 1) ÷ (4 − 2) = 8 ÷ 2 = 4.",
      "Coefficiente angolare = (9 − 1) ÷ (4 − 2) = 8 ÷ 2 = 4."
    ]
  },
  "ss1-patterns-cs2-li2": {
    "q": [
      "What is the midpoint of the segment joining (−2, 3) and (4, 7)?",
      "Qual è il punto medio del segmento che unisce (−2, 3) e (4, 7)?"
    ],
    "a": [
      [
        "(1, 5)",
        "(1; 5)"
      ],
      [
        "(2, 5)",
        "(2; 5)"
      ],
      [
        "(1, 4)",
        "(1; 4)"
      ],
      [
        "(−3, 10)",
        "(−3; 10)"
      ]
    ],
    "why": [
      "Average the x-coordinates and the y-coordinates: ((−2 + 4)/2, (3 + 7)/2) = (1, 5).",
      "Calcola la media delle coordinate x e delle coordinate y: ((−2 + 4)/2, (3 + 7)/2) = (1; 5)."
    ]
  },
  "ss1-spatial-li1": {
    "q": [
      "An angle measures 135°. How is it classified?",
      "Un angolo misura 135°. Come si classifica?"
    ],
    "a": [
      [
        "Obtuse angle",
        "Angolo ottuso"
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
        "Reflex angle",
        "Angolo concavo"
      ]
    ],
    "why": [
      "135° is greater than 90° and less than 180°, so it is obtuse.",
      "135° è maggiore di 90° e minore di 180°, quindi è ottuso."
    ]
  },
  "ss1-spatial-li2": {
    "q": [
      "Co-interior angles on parallel lines add to 180°. If one is 112°, find the other.",
      "Gli angoli coniugati interni su rette parallele sommano 180°. Se uno misura 112°, quanto misura l'altro?"
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
        "78°",
        "78°"
      ],
      [
        "248°",
        "248°"
      ]
    ],
    "why": [
      "Co-interior angles are supplementary: 180° − 112° = 68°.",
      "Gli angoli coniugati interni sono supplementari: 180° − 112° = 68°."
    ]
  },
  "ss1-spatial-li3": {
    "q": [
      "Two interior angles of a triangle are 48° and 67°. Find the third angle.",
      "Due angoli interni di un triangolo misurano 48° e 67°. Calcola il terzo angolo."
    ],
    "a": [
      [
        "65°",
        "65°"
      ],
      [
        "115°",
        "115°"
      ],
      [
        "75°",
        "75°"
      ],
      [
        "245°",
        "245°"
      ]
    ],
    "why": [
      "Angles in a triangle total 180°: 180° − 48° − 67° = 65°.",
      "La somma degli angoli interni di un triangolo è 180°: 180° − 48° − 67° = 65°."
    ]
  },
  "ss1-spatial-li4": {
    "q": [
      "A right triangle has legs of 5 cm and 12 cm. Find the hypotenuse.",
      "Un triangolo rettangolo ha cateti di 5 cm e 12 cm. Calcola l'ipotenusa."
    ],
    "a": [
      [
        "13 cm",
        "13 cm"
      ],
      [
        "17 cm",
        "17 cm"
      ],
      [
        "7 cm",
        "7 cm"
      ],
      [
        "12 cm",
        "12 cm"
      ]
    ],
    "why": [
      "By Pythagoras, c = √(5² + 12²) = √169 = 13 cm.",
      "Per Pitagora, c = √(5² + 12²) = √169 = 13 cm."
    ]
  },
  "ss1-spatial-li5": {
    "q": [
      "What is the sum of the interior angles of a decagon?",
      "Qual è la somma degli angoli interni di un decagono?"
    ],
    "a": [
      [
        "1440°",
        "1440°"
      ],
      [
        "1260°",
        "1260°"
      ],
      [
        "1620°",
        "1620°"
      ],
      [
        "1800°",
        "1800°"
      ]
    ],
    "why": [
      "A decagon has 10 sides: (10 − 2) × 180° = 1440°.",
      "Un decagono ha 10 lati: (10 − 2) × 180° = 1440°."
    ]
  },
  "ss1-measure-cs1-li1": {
    "q": [
      "Which description identifies displacement as a vector?",
      "Quale descrizione identifica lo spostamento come grandezza vettoriale?"
    ],
    "a": [
      [
        "It states how far and in which direction an object moves.",
        "Indica quanto si sposta un oggetto e in quale direzione."
      ],
      [
        "It gives only the distance travelled.",
        "Indica soltanto la distanza percorsa."
      ],
      [
        "It gives only the time taken.",
        "Indica soltanto il tempo impiegato."
      ],
      [
        "It gives only the object's mass.",
        "Indica soltanto la massa dell'oggetto."
      ]
    ],
    "why": [
      "A vector has both magnitude and direction; displacement includes both.",
      "Un vettore ha modulo e direzione; lo spostamento comprende entrambi."
    ]
  },
  "ss1-measure-cs1-li2": {
    "q": [
      "A vector has a bearing of 045°. Which direction does it point?",
      "Un vettore ha una direzione di 045°. Verso dove punta?"
    ],
    "a": [
      [
        "N45°E; an equal vector has the same magnitude and direction.",
        "N45°E; un vettore uguale ha lo stesso modulo e la stessa direzione."
      ],
      [
        "S45°W; an equal vector has the same length only.",
        "S45°O; un vettore uguale ha soltanto la stessa lunghezza."
      ],
      [
        "N45°W; an equal vector must start at the same point.",
        "N45°O; un vettore uguale deve partire dallo stesso punto."
      ],
      [
        "Due east; an equal vector has the same endpoint.",
        "Est; un vettore uguale ha lo stesso punto finale."
      ]
    ],
    "why": [
      "Bearings are measured clockwise from north, so 045° is 45° east of north. Equal vectors need not share a starting point.",
      "Le direzioni si misurano in senso orario dal nord, quindi 045° è 45° a est del nord. Vettori uguali non devono avere lo stesso punto iniziale."
    ]
  },
  "ss1-measure-cs2-li1": {
    "q": [
      "In a right triangle, the opposite side is 8 cm and the adjacent side is 6 cm. What is tan θ?",
      "In un triangolo rettangolo, il cateto opposto misura 8 cm e quello adiacente 6 cm. Quanto vale tan θ?"
    ],
    "a": [
      [
        "4/3",
        "4/3"
      ],
      [
        "3/4",
        "3/4"
      ],
      [
        "8/10",
        "8/10"
      ],
      [
        "6/8",
        "6/8"
      ]
    ],
    "why": [
      "tan θ = opposite ÷ adjacent = 8 ÷ 6 = 4/3.",
      "tan θ = cateto opposto ÷ cateto adiacente = 8 ÷ 6 = 4/3."
    ]
  },
  "ss1-measure-cs2-li2": {
    "q": [
      "What is the exact value of cos 60°?",
      "Qual è il valore esatto di cos 60°?"
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
        "0",
        "0"
      ]
    ],
    "why": [
      "At 60°, cosine is one half.",
      "A 60°, il coseno vale un mezzo."
    ]
  },
  "ss1-measure-cs2-li3": {
    "q": [
      "What is the value of cos 240°?",
      "Quanto vale cos 240°?"
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
      "240° is in quadrant III, where cosine is negative; its reference angle is 60°.",
      "240° si trova nel terzo quadrante, dove il coseno è negativo; l'angolo di riferimento è 60°."
    ]
  },
  "ss1-measure-cs3-li1": {
    "q": [
      "Which is a reasonable estimate for the area of a standard exterior house door?",
      "Qual è una stima ragionevole dell'area di una normale porta esterna di casa?"
    ],
    "a": [
      [
        "About 2 m²",
        "Circa 2 m²"
      ],
      [
        "About 2 cm²",
        "Circa 2 cm²"
      ],
      [
        "About 20 m²",
        "Circa 20 m²"
      ],
      [
        "About 200 m²",
        "Circa 200 m²"
      ]
    ],
    "why": [
      "A door is roughly 2 metres high and about 1 metre wide, giving an area near 2 m².",
      "Una porta è alta circa 2 metri e larga circa 1 metro, quindi ha un'area vicina a 2 m²."
    ]
  },
  "ss1-measure-cs3-li2": {
    "q": [
      "A shape covers 20 full grid squares and 8 half-squares. Each square is 1 cm². Estimate its area.",
      "Una figura copre 20 quadratini interi e 8 mezzi quadratini. Ogni quadratino misura 1 cm². Stima l'area."
    ],
    "a": [
      [
        "24 cm²",
        "24 cm²"
      ],
      [
        "28 cm²",
        "28 cm²"
      ],
      [
        "20 cm²",
        "20 cm²"
      ],
      [
        "16 cm²",
        "16 cm²"
      ]
    ],
    "why": [
      "Eight half-squares make four full squares, so the estimated area is 20 + 4 = 24 cm².",
      "Otto mezzi quadratini formano quattro quadratini interi, quindi l'area stimata è 20 + 4 = 24 cm²."
    ]
  },
  "ss1-measure-cs3-li3": {
    "q": [
      "An L-shaped garden is made from two non-overlapping rectangles: 12 m × 7 m and 3 m × 4 m. Find its area.",
      "Un giardino a L è formato da due rettangoli non sovrapposti: 12 m × 7 m e 3 m × 4 m. Calcola l'area."
    ],
    "a": [
      [
        "96 m²",
        "96 m²"
      ],
      [
        "84 m²",
        "84 m²"
      ],
      [
        "96 m",
        "96 m"
      ],
      [
        "120 m²",
        "120 m²"
      ]
    ],
    "why": [
      "Add the two rectangle areas: (12 × 7) + (3 × 4) = 84 + 12 = 96 m².",
      "Somma le aree dei due rettangoli: (12 × 7) + (3 × 4) = 84 + 12 = 96 m²."
    ]
  },
  "ss1-measure-cs3-li4": {
    "q": [
      "A prism has a cross-sectional area of 15 cm² and a perpendicular length of 9 cm. Find its volume.",
      "Un prisma ha un'area di sezione di 15 cm² e una lunghezza perpendicolare di 9 cm. Calcola il volume."
    ],
    "a": [
      [
        "135 cm³",
        "135 cm³"
      ],
      [
        "24 cm³",
        "24 cm³"
      ],
      [
        "135 cm²",
        "135 cm²"
      ],
      [
        "120 cm³",
        "120 cm³"
      ]
    ],
    "why": [
      "Volume of a prism = cross-sectional area × perpendicular length = 15 × 9 = 135 cm³.",
      "Volume del prisma = area di sezione × lunghezza perpendicolare = 15 × 9 = 135 cm³."
    ]
  },
  "ss1-stats-cs1-li1": {
    "q": [
      "The time each learner spends travelling to school is which type of data?",
      "Il tempo impiegato da ciascuno studente per raggiungere la scuola è quale tipo di dato?"
    ],
    "a": [
      [
        "Continuous quantitative data",
        "Dato quantitativo continuo"
      ],
      [
        "Discrete quantitative data",
        "Dato quantitativo discreto"
      ],
      [
        "Qualitative nominal data",
        "Dato qualitativo nominale"
      ],
      [
        "Qualitative ordinal data",
        "Dato qualitativo ordinale"
      ]
    ],
    "why": [
      "Travel time is measured and can take decimal values, so it is continuous quantitative data.",
      "Il tempo di viaggio si misura e può assumere valori decimali, quindi è un dato quantitativo continuo."
    ]
  },
  "ss1-stats-cs1-li2": {
    "q": [
      "A school wants each learner's height recorded as primary quantitative data. What should it do?",
      "Una scuola vuole registrare l'altezza di ogni studente come dato quantitativo primario. Che cosa dovrebbe fare?"
    ],
    "a": [
      [
        "Measure each learner with the same calibrated measuring device.",
        "Misurare ogni studente con lo stesso strumento tarato."
      ],
      [
        "Estimate heights from photographs.",
        "Stimare le altezze dalle fotografie."
      ],
      [
        "Copy heights from an unrelated online article.",
        "Copiare le altezze da un articolo online non pertinente."
      ],
      [
        "Ask learners to choose a height category only.",
        "Chiedere agli studenti di scegliere soltanto una categoria di altezza."
      ]
    ],
    "why": [
      "Direct, consistent measurement produces primary quantitative data suitable for comparison.",
      "Una misurazione diretta e coerente produce dati quantitativi primari adatti al confronto."
    ]
  },
  "ss1-stats-cs1-li3": {
    "q": [
      "A school wants detailed reasons why learners prefer different clubs. Which method is most suitable?",
      "Una scuola vuole conoscere in dettaglio i motivi per cui gli studenti preferiscono club diversi. Quale metodo è più adatto?"
    ],
    "a": [
      [
        "Conduct open-ended interviews with a sample of learners.",
        "Condurre interviste aperte con un campione di studenti."
      ],
      [
        "Count how many learners attend each club only.",
        "Contare soltanto quanti studenti frequentano ogni club."
      ],
      [
        "Measure the length of the club meetings.",
        "Misurare la durata degli incontri dei club."
      ],
      [
        "Record only each learner's age.",
        "Registrare soltanto l'età di ogni studente."
      ]
    ],
    "why": [
      "Open-ended interviews allow learners to explain opinions and reasons in their own words.",
      "Le interviste aperte permettono agli studenti di spiegare opinioni e motivazioni con parole proprie."
    ]
  },
  "ss1-stats-cs2-descriptive": {
    "q": [
      "The values are 2, 3, 4, 5 and 26. Which measure is least affected by the outlier 26?",
      "I valori sono 2, 3, 4, 5 e 26. Quale misura è meno influenzata dal valore anomalo 26?"
    ],
    "a": [
      [
        "The median, which is 4",
        "La mediana, che è 4"
      ],
      [
        "The mean, which is 8",
        "La media aritmetica, che è 8"
      ],
      [
        "The maximum, which is 26",
        "Il massimo, che è 26"
      ],
      [
        "The range, which is 24",
        "L'escursione, che è 24"
      ]
    ],
    "why": [
      "The median is the middle value and is less sensitive to an extreme value than the mean.",
      "La mediana è il valore centrale ed è meno sensibile a un valore estremo rispetto alla media aritmetica."
    ]
  },
  "ss1-stats-cs2-li2": {
    "q": [
      "The data are 5, 7, 5, 6, 5, 7 and 8. What is the frequency of 5?",
      "I dati sono 5, 7, 5, 6, 5, 7 e 8. Qual è la frequenza del valore 5?"
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
        "4",
        "4"
      ],
      [
        "5",
        "5"
      ]
    ],
    "why": [
      "The value 5 appears three times in the list.",
      "Il valore 5 compare tre volte nell'elenco."
    ]
  },
  "ss1-stats-cs3-li1": {
    "q": [
      "A school has four year groups and wants every group represented. Which sampling plan is best?",
      "Una scuola ha quattro anni scolastici e vuole rappresentarli tutti. Quale piano di campionamento è migliore?"
    ],
    "a": [
      [
        "Randomly select learners from each year group.",
        "Selezionare casualmente studenti da ogni anno scolastico."
      ],
      [
        "Ask only learners in the oldest year group.",
        "Chiedere soltanto agli studenti dell'ultimo anno."
      ],
      [
        "Ask only the researcher's friends.",
        "Chiedere soltanto agli amici del ricercatore."
      ],
      [
        "Choose only learners who volunteer first.",
        "Scegliere soltanto gli studenti che si offrono per primi."
      ]
    ],
    "why": [
      "Sampling randomly within each year group ensures that every group is represented.",
      "Il campionamento casuale all'interno di ogni anno garantisce che tutti i gruppi siano rappresentati."
    ]
  },
  "ss1-stats-cs3-li2": {
    "q": [
      "What should a responsible school survey report include?",
      "Che cosa dovrebbe includere un rapporto responsabile su un sondaggio scolastico?"
    ],
    "a": [
      [
        "The method, sample size, anonymised results, limitations and evidence-based conclusions.",
        "Il metodo, la dimensione del campione, risultati anonimi, limiti e conclusioni basate su prove."
      ],
      [
        "Names of every learner and unsupported claims.",
        "I nomi di tutti gli studenti e affermazioni non supportate."
      ],
      [
        "Only a colourful chart with no labels.",
        "Soltanto un grafico colorato senza etichette."
      ],
      [
        "A conclusion that hides results that disagree with the writer.",
        "Una conclusione che nasconde i risultati in disaccordo con l'autore."
      ]
    ],
    "why": [
      "A responsible report is transparent about methods, protects privacy and explains limitations.",
      "Un rapporto responsabile è trasparente sui metodi, tutela la privacy e spiega i limiti."
    ]
  },
  "ss1-stats-cs2-li3": {
    "q": [
      "A survey about the whole school asks only the researcher's close friends. What is the main problem?",
      "Un sondaggio su tutta la scuola interroga soltanto gli amici stretti del ricercatore. Qual è il problema principale?"
    ],
    "a": [
      [
        "The sample is likely biased and may not represent the school.",
        "Il campione è probabilmente distorto e potrebbe non rappresentare la scuola."
      ],
      [
        "The sample is automatically random.",
        "Il campione è automaticamente casuale."
      ],
      [
        "The results must be correct because friends know each other.",
        "I risultati devono essere corretti perché gli amici si conoscono."
      ],
      [
        "The survey becomes a census.",
        "Il sondaggio diventa un censimento."
      ]
    ],
    "why": [
      "Selecting close friends is a convenience sample and can create selection bias.",
      "Selezionare amici stretti è un campionamento di convenienza e può creare una distorsione di selezione."
    ]
  },
  "ss1-prob-cs1-li1": {
    "q": [
      "Two fair six-sided dice are rolled. How many ordered outcomes are in the sample space?",
      "Si lanciano due dadi equi a sei facce. Quanti esiti ordinati contiene lo spazio campionario?"
    ],
    "a": [
      [
        "36",
        "36"
      ],
      [
        "12",
        "12"
      ],
      [
        "18",
        "18"
      ],
      [
        "6",
        "6"
      ]
    ],
    "why": [
      "Each die has six possible outcomes, so there are 6 × 6 = 36 ordered pairs.",
      "Ogni dado ha sei esiti possibili, quindi ci sono 6 × 6 = 36 coppie ordinate."
    ]
  },
  "ss1-prob-cs1-li2": {
    "q": [
      "A fair four-section spinner and a fair coin are used. What is the probability of landing on red and getting heads if one spinner section is red?",
      "Si usa una ruota equa con quattro settori e una moneta equa. Qual è la probabilità di ottenere rosso e testa se un settore è rosso?"
    ],
    "a": [
      [
        "1/8",
        "1/8"
      ],
      [
        "1/4",
        "1/4"
      ],
      [
        "1/2",
        "1/2"
      ],
      [
        "3/8",
        "3/8"
      ]
    ],
    "why": [
      "The events are independent: P(red and heads) = 1/4 × 1/2 = 1/8.",
      "Gli eventi sono indipendenti: P(rosso e testa) = 1/4 × 1/2 = 1/8."
    ]
  },
  "ss1-prob-cs1-li3": {
    "q": [
      "A bag contains 4 green and 1 yellow counter. A counter is replaced after each draw. What is the probability of drawing green twice?",
      "Un sacchetto contiene 4 gettoni verdi e 1 giallo. Il gettone viene reinserito dopo ogni estrazione. Qual è la probabilità di estrarre verde due volte?"
    ],
    "a": [
      [
        "16/25",
        "16/25"
      ],
      [
        "4/25",
        "4/25"
      ],
      [
        "8/25",
        "8/25"
      ],
      [
        "16/20",
        "16/20"
      ]
    ],
    "why": [
      "With replacement, the probability remains 4/5 on each draw: 4/5 × 4/5 = 16/25.",
      "Con reinserimento, la probabilità resta 4/5 a ogni estrazione: 4/5 × 4/5 = 16/25."
    ]
  }
};
