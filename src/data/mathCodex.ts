import { CodexEntry } from '../types';

export const MATH_CODEX: CodexEntry[] = [
  // Mission m1m1 (Natural Numbers / Numeri naturali)
  [
    'm1m1',
    'Natural numbers (ℕ)',
    'Numeri naturali (ℕ)',
    'The non-negative whole counting numbers 0, 1, 2, 3, 4, 5... forming the discrete set ℕ.',
    'I numeri interi non negativi 0, 1, 2, 3, 4, 5... che formano l’insieme discreto ℕ.'
  ],
  [
    'm1m1',
    'Discrete set',
    'Insieme discreto',
    'A set where between any number and its immediate successor there are no other elements.',
    'Un insieme in cui tra un numero e il suo successivo immediato non esiste alcun altro elemento.'
  ],
  [
    'm1m1',
    'Successor and predecessor',
    'Successivo e precedente',
    'The successor of n is n + 1; the predecessor is n − 1. In ℕ, zero is the minimum and has no predecessor.',
    'Il successivo di n è n + 1; il precedente è n − 1. In ℕ lo zero è il minimo e non ha alcun precedente.'
  ],
  [
    'm1m1',
    'Oriented half-line',
    'Semiretta orientata',
    'A ray starting at origin O (0), with an arrow pointing right and a fixed unit of length.',
    'Una semiretta che parte dall’origine O (0), orientata verso destra con unità di misura fissata.'
  ],

  // Mission m1m2 (Operations & Expressions / Operazioni ed espressioni)
  [
    'm1m2',
    'Order of operations',
    'Ordine delle operazioni',
    'Evaluate powers first, then multiplications and divisions left-to-right, then additions and subtractions.',
    'Si calcolano prima le potenze, poi moltiplicazioni e divisioni da sinistra a destra, infine addizioni e sottrazioni.'
  ],
  [
    'm1m2',
    'Brackets hierarchy',
    'Gerarchia delle parentesi',
    'Solve round brackets ( ) first, then square brackets [ ], then curly braces { } from inside out.',
    'Si risolvono prima le parentesi tonde ( ), poi le quadre [ ], infine le graffe { } dall’interno all’esterno.'
  ],
  [
    'm1m2',
    'Euclidean division',
    'Divisione euclidea',
    'Dividing a by b gives quotient q and remainder r: a = b · q + r with 0 ≤ r < b.',
    'Dividendo a per b si ottengono quoziente q e resto r con a = b · q + r e 0 ≤ r < b.'
  ],

  // Mission m1m3 (Properties of Operations / Proprietà delle operazioni)
  [
    'm1m3',
    'Commutative property',
    'Proprietà commutativa',
    'Changing the order of terms leaves the result unchanged: a + b = b + a and a · b = b · a.',
    'Cambiando l’ordine degli addendi o dei fattori il risultato finale non cambia: a + b = b + a e a · b = b · a.'
  ],
  [
    'm1m3',
    'Associative property',
    'Proprietà associativa',
    'Replacing two adjacent terms with their sum or product leaves the result unchanged.',
    'Sostituendo a due termini consecutivi la loro somma o il loro prodotto il risultato non cambia.'
  ],
  [
    'm1m3',
    'Distributive property',
    'Proprietà distributiva',
    'Multiplying a factor by a sum distributes to each term: a · (b + c) = a · b + a · c.',
    'Moltiplicare un fattore per una somma equivale a moltiplicarlo per ciascun termine: a · (b + c) = a · b + a · c.'
  ],
  [
    'm1m3',
    'Neutral / absorbing element',
    'Elemento neutro / assorbente',
    '0 is neutral for addition; 1 is neutral for multiplication; 0 is absorbing for multiplication.',
    '0 è neutro per l’addizione; 1 è neutro per la moltiplicazione; 0 è assorbente per la moltiplicazione.'
  ],

  // Mission m2m1 (Rational Numbers / Numeri razionali)
  [
    'm2m1',
    'Rational number (ℚ)',
    'Numero razionale (ℚ)',
    'A number that can be expressed as a quotient of two integers m/n with n ≠ 0 (set ℚ).',
    'Un numero che può essere espresso come rapporto tra due interi m/n con n ≠ 0 (insieme ℚ).'
  ],
  [
    'm2m1',
    'Proper / improper / apparent fraction',
    'Frazione propria / impropria / apparente',
    'Proper if numerator < denominator; improper if numerator ≥ denominator; apparent if numerator is a multiple of denominator.',
    'Propria se numeratore < denominatore; impropria se numeratore ≥ denominatore; apparente se equivale a un intero.'
  ],
  [
    'm2m1',
    'Invariant property of fractions',
    'Proprietà invariantiva delle frazioni',
    'Multiplying or dividing numerator and denominator by the same non-zero number produces an equivalent fraction.',
    'Moltiplicando o dividendo numeratore e denominatore per uno stesso numero non nullo il valore non cambia.'
  ],
  [
    'm2m1',
    'Irreducible fraction',
    'Frazione irriducibile',
    'A fraction whose numerator and denominator are coprime (reduced to lowest terms).',
    'Frazione ridotta ai minimi termini, in cui numeratore e denominatore sono primi tra loro.'
  ],

  // Mission m3m1 (Sets / Insiemi)
  [
    'm3m1',
    'Set',
    'Insieme',
    'A collection of distinct objects determined by an objective, unambiguous criterion.',
    'Collezione di elementi distinti individuati da una proprietà oggettiva e non ambigua.'
  ],
  [
    'm3m1',
    'Membership (∈)',
    'Appartenenza (∈)',
    'x ∈ A indicates that element x belongs to set A; x ∉ A indicates it does not.',
    'x ∈ A indica che l’elemento x appartiene all’insieme A; x ∉ A indica che non vi appartiene.'
  ],
  [
    'm3m1',
    'Euler-Venn diagram',
    'Diagramma di Eulero-Venn',
    'A closed boundary curve representing a set and the points inside it representing elements.',
    'Rappresentazione grafica con linea chiusa che racchiude i punti che rappresentano gli elementi.'
  ],
  [
    'm3m1',
    'Cardinality (|A|)',
    'Cardinalità (|A|)',
    'The number of distinct elements contained in a finite set, written |A| or card(A).',
    'Il numero di elementi distinti contenuti in un insieme finito, indicato con |A| o card(A).'
  ],

  // Mission m2m2 (Operations with Rationals / Operazioni con i razionali)
  [
    'm2m2',
    'Common denominator',
    'Denominatore comune',
    'The least common multiple of all denominators, used to add and subtract fractions.',
    'Il minimo comune multiplo dei denominatori, necessario per sommare e sottrarre frazioni.'
  ],
  [
    'm2m2',
    'Reciprocal fraction (inverse)',
    'Frazione reciproca (inversa)',
    'The inverted fraction: the reciprocal of a/b is b/a (a, b ≠ 0); their product is always 1.',
    'La frazione invertita: il reciproco di a/b è b/a; il loro prodotto vale sempre 1.'
  ],
  [
    'm2m2',
    'Fraction division',
    'Divisione tra frazioni',
    'Multiplying the dividend by the reciprocal of the divisor: (a/b) : (c/d) = (a/b) · (d/c).',
    'Moltiplicare la prima frazione per la reciproca della seconda: (a/b) : (c/d) = (a/b) · (d/c).'
  ],

  // Mission m2m3 (Decimals and Real Numbers / Decimali e numeri reali)
  [
    'm2m3',
    'Terminating decimal',
    'Numero decimale limitato',
    'A decimal with a finite number of digits, produced when denominator has only prime factors 2 and 5.',
    'Decimale con numero finito di cifre, generato quando il denominatore ha solo fattori 2 e/o 5.'
  ],
  [
    'm2m3',
    'Repeating decimal (period / anti-period)',
    'Decimale periodico (periodo / antiperiodo)',
    'A decimal with digits repeating infinitely (period). If digits appear before the period, it is a mixed repeating decimal.',
    'Decimale con cifre che si ripetono all’infinito (periodo). Se tra virgola e periodo ci sono cifre, è periodico misto.'
  ],
  [
    'm2m3',
    'Generating fraction',
    'Frazione generatrice',
    'The fraction that generates a repeating decimal: (entire number − non-repeating part) / (9s and 0s).',
    'Frazione che genera il decimale: (numero senza virgola − parte prima del periodo) / (tanti 9 e tanti 0).'
  ],
  [
    'm2m3',
    'Irrational numbers (ℝ)',
    'Numeri irrazionali (ℝ)',
    'Numbers with infinite non-repeating decimal expansions (e.g. √2, π). United with ℚ they form real numbers ℝ.',
    'Numeri con infinite cifre decimali non periodiche (es. √2, π). Insieme ai razionali formano i reali ℝ.'
  ],

  // Mission m3m2 (Set Operations / Operazioni tra insiemi)
  [
    'm3m2',
    'Set intersection (∩)',
    'Intersezione tra insiemi (∩)',
    'The set of elements belonging to both A and B simultaneously: A ∩ B = {x | x ∈ A ∧ x ∈ B}.',
    'L’insieme degli elementi che appartengono contemporaneamente sia ad A sia a B: A ∩ B.'
  ],
  [
    'm3m2',
    'Set union (∪)',
    'Unione tra insiemi (∪)',
    'The set of elements belonging to A, to B, or to both: A ∪ B = {x | x ∈ A ∨ x ∈ B}.',
    'L’insieme di tutti gli elementi che appartengono ad A, a B o a entrambi: A ∪ B.'
  ],
  [
    'm3m2',
    'Set difference (∖)',
    'Differenza tra insiemi (∖)',
    'The elements of A that do not belong to B: A ∖ B = {x | x ∈ A ∧ x ∉ B}.',
    'L’insieme degli elementi di A che non appartengono a B: A ∖ B.'
  ],
  [
    'm3m2',
    'Disjoint sets',
    'Insiemi disgiunti',
    'Two sets that have no elements in common: their intersection is empty, A ∩ B = ∅.',
    'Due insiemi privi di elementi in comune: la loro intersezione è l’insieme vuoto, A ∩ B = ∅.'
  ],

  // Mission m4m1 (Algebraic Expressions / Espressioni algebriche)
  [
    'm4m1',
    'Variable',
    'Variabile',
    'A letter representing an unknown number or a generalized quantity in algebraic formulas.',
    'Una lettera che rappresenta un numero incognito o una quantità generale nelle formule algebriche.'
  ],
  [
    'm4m1',
    'Coefficient and constant term',
    'Coefficiente e termine noto',
    'The numerical factor multiplying a variable is the coefficient; a term without variables is the constant term.',
    'Il fattore numerico che moltiplica la variabile è il coefficiente; il termine privo di lettere è il termine noto.'
  ],
  [
    'm4m1',
    'Algebraic evaluation',
    'Valutazione algebrica',
    'Calculating the numerical value of an expression by substituting numbers for letters.',
    'Calcolare il valore numerico di un’espressione sostituendo i numeri alle lettere.'
  ],

  // Mission m1m4 (Powers and Divisibility / Potenze e divisibilità)
  [
    'm1m4',
    'Power and exponent',
    'Potenza ed esponente',
    'aⁿ represents the repeated product of base a multiplied by itself n times. a⁰ = 1 (for a ≠ 0).',
    'aⁿ indica il prodotto della base a per se stessa n volte. Per convenzione a⁰ = 1 (se a ≠ 0).'
  ],
  [
    'm1m4',
    'Product and quotient of powers',
    'Prodotto e quoziente di potenze',
    'With same base: aᵐ · aⁿ = aᵐ⁺ⁿ and aᵐ : aⁿ = aᵐ⁻ⁿ. Power of a power: (aᵐ)ⁿ = aᵐ·ⁿ.',
    'Con stessa base: aᵐ · aⁿ = aᵐ⁺ⁿ e aᵐ : aⁿ = aᵐ⁻ⁿ. Potenza di potenza: (aᵐ)ⁿ = aᵐ·ⁿ.'
  ],
  [
    'm1m4',
    'Prime number',
    'Numero primo',
    'A natural number greater than 1 divisible only by 1 and itself (2, 3, 5, 7, 11, 13...).',
    'Numero naturale maggiore di 1 che ha come divisori soltanto 1 e se stesso (2, 3, 5, 7, 11...).'
  ],
  [
    'm1m4',
    'Prime factorization',
    'Scomposizione in fattori primi',
    'Decomposing any composite natural number uniquely into a product of prime powers.',
    'Scrittura univoca di un numero naturale composto come prodotto di potenze di fattori primi.'
  ],

  // Mission m1m5 (Chapter 1 Review / Ripasso Capitolo 1)
  [
    'm1m5',
    'Composite number',
    'Numero composto',
    'A natural number greater than 1 that has more than two distinct divisors.',
    'Numero naturale maggiore di 1 che ammette altri divisori oltre a 1 e a se stesso.'
  ],
  [
    'm1m5',
    'Zero product property',
    'Legge di annullamento del prodotto',
    'A product is zero if and only if at least one factor is zero: a · b = 0 ⇔ a = 0 ∨ b = 0.',
    'Un prodotto vale zero se e solo se almeno uno dei fattori è nullo: a · b = 0 ⇔ a = 0 ∨ b = 0.'
  ],

  // Mission m2m4 (Comparing Rationals / Confronto di razionali)
  [
    'm2m4',
    'Density of ℚ',
    'Densità dell’insieme ℚ',
    'Between any two distinct rational numbers there is always another rational number.',
    'Tra due numeri razionali distinti esiste sempre un altro numero razionale compreso tra loro.'
  ],
  [
    'm2m4',
    'Cross-multiplication rule',
    'Regola del prodotto incrociato',
    'For positive fractions: a/b < c/d if and only if a · d < b · c.',
    'Per frazioni con denominatore positivo: a/b < c/d se e solo se a · d < b · c.'
  ],

  // Mission m2m5 (Percentages / Percentuali)
  [
    'm2m5',
    'Percentage (%)',
    'Percentuale (%)',
    'A ratio expressed as a fraction with denominator 100 (r% = r/100).',
    'Un rapporto espresso come frazione avente denominatore 100 (r% = r/100).'
  ],
  [
    'm2m5',
    'Discount and markup',
    'Sconto e rincaro',
    'Discount decreases a price by d% (price · (1 − d/100)); markup increases it by m% (price · (1 + m/100)).',
    'Lo sconto riduce il prezzo di d% (prezzo · (1 − d/100)); il rincaro lo aumenta di m% (prezzo · (1 + m/100)).'
  ],

  // Mission m3m3 (Subsets and Power Set / Sottoinsiemi e insieme delle parti)
  [
    'm3m3',
    'Subset (⊆, ⊂)',
    'Sottoinsieme (⊆, ⊂)',
    'B ⊆ A means every element of B belongs to A. B ⊂ A means strict subset (B is not equal to A).',
    'B ⊆ A significa che ogni elemento di B appartiene ad A. B ⊂ A è l’inclusione stretta (B ≠ A).'
  ],
  [
    'm3m3',
    'Empty set (∅)',
    'Insieme vuoto (∅)',
    'The unique set containing no elements (|∅| = 0), subset of every set.',
    'L’unico insieme privo di elementi (|∅| = 0), considerato sottoinsieme di qualunque insieme.'
  ],
  [
    'm3m3',
    'Power set (𝒫(A))',
    'Insieme delle parti (𝒫(A))',
    'The set of all possible subsets of A. If |A| = n, the power set contains 2ⁿ subsets.',
    'L’insieme formato da tutti i possibili sottoinsiemi di A. Se |A| = n, la cardinalità è 2ⁿ.'
  ],

  // Mission m3m4 (Venn Diagrams and Relations / Diagrammi di Venn e relazioni)
  [
    'm3m4',
    'Cartesian product (A × B)',
    'Prodotto cartesiano (A × B)',
    'The set of all ordered pairs (a, b) with a ∈ A and b ∈ B; cardinality is |A| · |B|.',
    'L’insieme di tutte le coppie ordinate (a, b) con a ∈ A e b ∈ B; cardinalità |A| · |B|.'
  ],
  [
    'm3m4',
    'Complement set (Ā)',
    'Insieme complementare (Ā)',
    'The set of elements of universe U that do not belong to subset A: Ā = U ∖ A.',
    'L’insieme degli elementi dell’universo U che non appartengono al sottoinsieme A: Ā = U ∖ A.'
  ],

  // Mission m1m6 (Integer Numbers / Numeri interi)
  [
    'm1m6',
    'Integer numbers (ℤ)',
    'Numeri interi (ℤ)',
    'The set ... −3, −2, −1, 0, +1, +2, +3 ... formed by natural numbers and negative integers.',
    'L’insieme formato dai numeri naturali e dai loro opposti negativi: ... −3, −2, −1, 0, +1, +2 ...'
  ],
  [
    'm1m6',
    'Absolute value (modulus)',
    'Valore assoluto (modulo)',
    'The non-negative value of a number disregarding its sign: |x| ≥ 0. Distance from 0 on the line.',
    'Il valore non negativo di un numero privato del segno: |x| ≥ 0. Distanza dall’origine 0.'
  ],
  [
    'm1m6',
    'Opposite numbers',
    'Numeri opposti',
    'Two numbers having the same absolute value but opposite signs (e.g. +5 and −5); their sum is 0.',
    'Due numeri con lo stesso valore assoluto e segni discordi (+5 e −5); la loro somma fa 0.'
  ],
  [
    'm1m6',
    'Rule of signs',
    'Regola dei segni',
    '+ · + = +; − · − = +; + · − = −; − · + = −. Even negative factors yield positive; odd yield negative.',
    'Segni concordi danno più; segni discordi danno meno. Base negativa con esponente pari fa più, con dispari fa meno.'
  ],

  // Mission m2m6 (Proportions / Proporzioni)
  [
    'm2m6',
    'Proportion',
    'Proporzione',
    'An equality between two ratios: a : b = c : d (read \'a is to b as c is to d\').',
    'Uguaglianza tra due rapporti: a : b = c : d (letto \'a sta a b come c sta a d\').'
  ],
  [
    'm2m6',
    'Fundamental property of proportions',
    'Proprietà fondamentale delle proporzioni',
    'The product of the extremes equals the product of the means: a · d = b · c.',
    'Il prodotto degli estremi è uguale al prodotto dei medi: a · d = b · c.'
  ],
  [
    'm2m6',
    'Continuous proportion',
    'Proporzione continua',
    'A proportion whose means are equal: a : x = x : b, where x = √(a · b) is the mean proportional.',
    'Proporzione con medi uguali: a : x = x : b, dove x = √(a · b) è il medio proporzionale.'
  ],

  // Mission m3m5 (Basic Logic / Logica di base)
  [
    'm3m5',
    'Logical proposition',
    'Proposizione logica',
    'A statement that can be clearly and objectively evaluated as either TRUE or FALSE.',
    'Un enunciato dichiarativo che può essere inequivocabilmente vero (V) oppure falso (F).'
  ],
  [
    'm3m5',
    'Logical conjunction (∧)',
    'Congiunzione logica (∧)',
    'p ∧ q (p AND q) is true only when both statements p and q are true simultaneously.',
    'p ∧ q (p E q) è vera solo quando entrambe le proposizioni p e q sono contemporaneamente vere.'
  ],
  [
    'm3m5',
    'Logical disjunction (∨)',
    'Disgiunzione logica (∨)',
    'p ∨ q (p OR q) is true when at least one statement is true; false only when both are false.',
    'p ∨ q (p O q) è vera se almeno una è vera; è falsa solo quando entrambe sono false.'
  ],
  [
    'm3m5',
    'Logical negation (¬)',
    'Negazione logica (¬)',
    '¬p (NOT p) inverts the truth value: true becomes false and false becomes true.',
    '¬p (NON p) inverte il valore di verità: il vero diventa falso e il falso diventa vero.'
  ],

  // Mission m1m7 (MCD and mcm / MCD e mcm)
  [
    'm1m7',
    'Greatest Common Divisor (M.C.D.)',
    'Massimo Comune Divisore (M.C.D.)',
    'The largest common divisor: product of common prime factors with lowest exponent.',
    'Il più grande divisore comune: prodotto dei soli fattori primi comuni, ciascuno con il minimo esponente.'
  ],
  [
    'm1m7',
    'Least Common Multiple (m.c.m.)',
    'Minimo Comune Multiplo (m.c.m.)',
    'The smallest common positive multiple: product of all prime factors with highest exponent.',
    'Il più piccolo multiplo comune positivo: prodotto di tutti i fattori primi, con il massimo esponente.'
  ],
  [
    'm1m7',
    'Coprime numbers',
    'Numeri primi tra loro (coprimi)',
    'Two numbers whose Greatest Common Divisor is 1: M.C.D.(a, b) = 1.',
    'Due numeri il cui Massimo Comune Divisore è uguale a 1: M.C.D.(a, b) = 1.'
  ],

  // Mission m1m8 (Divisibility Rules / Regole di divisibilità)
  [
    'm1m8',
    'Divisibility criteria',
    'Criteri di divisibilità',
    'By 2 if even; by 5 if ends in 0 or 5; by 3 (or 9) if sum of digits is multiple of 3 (or 9).',
    'Per 2 se l’ultima cifra è pari; per 5 se termina in 0 o 5; per 3 (o 9) se la somma delle cifre è multiplo di 3 (o 9).'
  ],

  // Mission m2m7 (Powers with Negative Exponents / Potenze con esponente negativo)
  [
    'm2m7',
    'Negative exponent',
    'Esponente negativo',
    'A negative exponent inverts the base: a⁻ⁿ = 1/aⁿ and (a/b)⁻ⁿ = (b/a)ⁿ. Does not make the number negative!',
    'L’esponente negativo inverte la frazione: a⁻ⁿ = 1/aⁿ e (a/b)⁻ⁿ = (b/a)ⁿ. Non rende il numero negativo!'
  ],
  [
    'm2m7',
    'Scientific notation',
    'Notazione scientifica',
    'A standard scientific format: a · 10ⁿ where 1 ≤ a < 10 and n is an integer.',
    'Scrittura nella forma a · 10ⁿ con 1 ≤ a < 10 ed n intero, usata per numeri molto grandi o piccoli.'
  ],

  // Mission m2m8 (Approximate Calculation / Calcolo approssimato)
  [
    'm2m8',
    'Rounding',
    'Arrotondamento',
    'Rounding to a given place: if the next digit is ≥ 5 round up; if < 5 round down.',
    'Approssimazione: se la prima cifra eliminata è ≥ 5 si aumenta di 1 l’ultima cifra conservata, altrimenti resta invariata.'
  ],
  [
    'm2m8',
    'Order of magnitude',
    'Ordine di grandezza',
    'The power of 10 closest to the number: if mantissa is ≥ √10 ≈ 3.16 round to 10ⁿ⁺¹.',
    'La potenza di 10 più vicina al numero (se la mantissa è ≥ √10 ≈ 3,16 si sale alla potenza successiva 10ⁿ⁺¹).'
  ],

  // Mission m3m6 (Relations / Relazioni)
  [
    'm3m6',
    'Binary relation',
    'Relazione binaria',
    'A rule defining which pairs (a, b) in A × B are linked: a R b.',
    'Legame tra elementi di due insiemi che individua un sottoinsieme del prodotto cartesiano: a R b.'
  ],
  [
    'm3m6',
    'Equivalence relation',
    'Relazione di equivalenza',
    'A relation that is reflexive (a R a), symmetric (a R b ⇒ b R a), and transitive.',
    'Relazione riflessiva, simmetrica e transitiva. Suddivide l’insieme in classi di equivalenza disgiunte.'
  ],
  [
    'm3m6',
    'Order relation',
    'Relazione d’ordine',
    'A relation that is reflexive, antisymmetric (a R b ∧ b R a ⇒ a = b), and transitive (e.g. ≤).',
    'Relazione riflessiva, antisimmetrica e transitiva, che permette di ordinare gli elementi (es. ≤).'
  ],

  // Mission m3m7 (Quantifiers / Quantificatori)
  [
    'm3m7',
    'Universal quantifier (∀)',
    'Quantificatore universale (∀)',
    '∀ means \'for all\' or \'every\'. Its negation is \'there exists at least one that does NOT\'.',
    '∀ significa \'per ogni\'. La sua negazione afferma che \'esiste almeno un elemento per cui non vale\'.'
  ],
  [
    'm3m7',
    'Existential quantifier (∃)',
    'Quantificatore esistenziale (∃)',
    '∃ means \'there exists at least one\'. Its negation states that the property fails for all elements.',
    '∃ significa \'esiste almeno uno\'. La sua negazione afferma che la proprietà è falsa per tutti gli elementi.'
  ],

  // Mission m4m2 (Simplifying Expressions / Semplificazione di espressioni)
  [
    'm4m2',
    'Monomial',
    'Monomio',
    'An algebraic expression with only products and natural powers of numbers and variables: coefficient + variable part.',
    'Espressione algebrica formata solo da moltiplicazioni e potenze naturali tra numeri e lettere.'
  ],
  [
    'm4m2',
    'Like terms (monomi simili)',
    'Monomi simili',
    'Monomials having the EXACT same literal part and exponents: add coefficients, keep literal part intact!',
    'Monomi aventi la stessa identica parte letterale: si sommano sommando solo i coefficienti!'
  ],
  [
    'm4m2',
    'Polynomial',
    'Polinomio',
    'An algebraic sum of monomials. In normal form when all like terms have been combined.',
    'Somma algebrica di monomi. Ridotto a forma normale quando tutti i termini simili sono stati sommati.'
  ],
  [
    'm4m2',
    'Sum times difference',
    'Somma per differenza',
    '(a + b)(a − b) = a² − b². The cross terms cancel out, leaving the difference of two squares.',
    '(a + b)(a − b) = a² − b². I doppi prodotti misti si annullano, lasciando la differenza di due quadrati.'
  ],
  [
    'm4m2',
    'Square of a binomial',
    'Quadrato di binomio',
    '(a + b)² = a² + 2ab + b². Contains two squares and the crucial double product +2ab!',
    '(a + b)² = a² + 2ab + b². Contiene la somma dei due quadrati e il fondamentale doppio prodotto +2ab!'
  ],

  // Mission m5m1 (Linear Equations / Equazioni lineari)
  [
    'm5m1',
    'Linear equation',
    'Equazione lineare (1° grado)',
    'An equality between two algebraic expressions containing an unknown to degree 1: ax = b.',
    'Un’uguaglianza tra espressioni algebriche con un’incognita elevata a potenza 1: ax = b.'
  ],
  [
    'm5m1',
    'First principle of equivalence',
    'Primo principio di equivalenza',
    'Adding or subtracting the same quantity to both sides yields an equivalent equation (transport rule: flip sign).',
    'Aggiungendo o sottraendo la stessa quantità a entrambi i membri l’equazione resta equivalente.'
  ],
  [
    'm5m1',
    'Second principle of equivalence',
    'Secondo principio di equivalenza',
    'Multiplying or dividing both sides by the same non-zero number yields an equivalent equation.',
    'Moltiplicando o dividendo entrambi i membri per uno stesso numero non nullo l’equazione resta equivalente.'
  ],
  [
    'm5m1',
    'Determined / indeterminate / impossible',
    'Determinata / indeterminata / impossibile',
    'Determined: a ≠ 0 (x = b/a); Indeterminate: 0x = 0 (infinite solutions); Impossible: 0x = b with b ≠ 0 (no solution).',
    'Determinata: a ≠ 0 (x = b/a); Indeterminata: 0x = 0 (infinite soluzioni); Impossibile: 0x = b con b ≠ 0 (nessuna soluzione).'
  ],

  // Mission m5m2 (Equations with Brackets / Equazioni con parentesi)
  [
    'm5m2',
    'Clearing fractions in equations',
    'Eliminazione dei denominatori',
    'Multiply all terms on both sides by the least common multiple (m.c.m.) of all denominators.',
    'Moltiplicare tutti i termini di entrambi i membri per il m.c.m. dei denominatori per togliere le frazioni.'
  ],
  [
    'm5m2',
    'Equation verification',
    'Verifica dell’equazione',
    'Substitute the found value of x into the original equation and verify that left side equals right side.',
    'Sostituire la soluzione x nell’equazione originaria per verificare che il primo membro sia uguale al secondo.'
  ],

  // Mission m6m1 (Linear Inequalities / Disequazioni lineari)
  [
    'm6m1',
    'Linear inequality',
    'Disequazione lineare',
    'An algebraic statement comparing expressions with <, >, ≤, or ≥.',
    'Disuguaglianza tra espressioni algebriche con un’incognita che impiega i simboli <, >, ≤ o ≥.'
  ],
  [
    'm6m1',
    'Golden rule of inequalities',
    'Regola d’oro delle disequazioni',
    'Multiplying or dividing both sides by a NEGATIVE number INVERTS the inequality sign (< becomes >).',
    'Moltiplicando o dividendo entrambi i membri per un numero NEGATIVO si DEVE INVERTIRE il verso del simbolo (< diventa >).'
  ],
  [
    'm6m1',
    'Interval notation',
    'Notazione per intervalli',
    'Using brackets for included endpoints [ ] (≤, ≥, filled dot) and parentheses for excluded endpoints ( ) (<, >, open dot).',
    'Parentesi quadre per estremi inclusi [ ] (pallino pieno) e tonde per estremi esclusi ( ) (pallino vuoto).'
  ],

  // Grade 10 Mathematics (Level 2 · math_l2_m1..m9)
  [
    'math_l2_m1',
    'Linear system & Cramer determinant',
    'Sistema lineare e determinante D',
    'Two linear equations solved together: D = a₁b₂ − a₂b₁. D ≠ 0 gives 1 solution; D = 0 gives parallel (0) or coincident (∞) lines.',
    'Due equazioni lineari risolte insieme: D = a₁b₂ − a₂b₁. Con D ≠ 0 c’è 1 soluzione; con D = 0 le rette sono parallele (0) o coincidenti (∞).'
  ],
  [
    'math_l2_m2',
    'Existence condition of a radical (C.E.)',
    'Condizione di esistenza di un radicale (C.E.)',
    'An even-index root √[2k]{A} exists in ℝ only when radicand A ≥ 0; odd-index roots exist for all ℝ.',
    'Una radice di indice pari √[2k]{A} esiste in ℝ solo se A ≥ 0; quelle di indice dispari esistono per qualsiasi reale.'
  ],
  [
    'math_l2_m2',
    'Rationalization of denominator',
    'Razionalizzazione del denominatore',
    'Rewriting a fraction to remove radicals from the denominator (e.g. multiplying by √a or the conjugate √a ± √b).',
    'Trasformare una frazione per eliminare le radici dal denominatore moltiplicando sopra e sotto per il fattore adatto o coniugato.'
  ],
  [
    'math_l2_m3',
    'Slope & perpendicularity',
    'Coefficiente angolare e perpendicolarità',
    'In y = mx + q, slope m = Δy/Δx. Parallel lines satisfy m₁ = m₂; perpendicular lines satisfy m₁ · m₂ = −1.',
    'In y = mx + q, la pendenza è m = Δy/Δx. Rette parallele hanno m₁ = m₂; perpendicolari hanno m₁ · m₂ = −1.'
  ],
  [
    'math_l2_m4',
    'Discriminant (Δ = b² − 4ac)',
    'Discriminante (Δ = b² − 4ac)',
    'Determines real solutions of ax² + bx + c = 0: Δ > 0 gives 2 distinct roots, Δ = 0 gives 1 double root, Δ < 0 gives none in ℝ.',
    'Stabilisce le radici reali di ax² + bx + c = 0: Δ > 0 dà 2 radici distinte, Δ = 0 1 doppia, Δ < 0 nessuna in ℝ.'
  ],
  [
    'math_l2_m5',
    'Viète’s sum & product relations',
    'Relazioni di Viète (somma e prodotto)',
    'For ax² + bx + c = 0 with Δ ≥ 0: sum of roots S = x₁ + x₂ = −b/a and product P = x₁ · x₂ = c/a.',
    'Per ax² + bx + c = 0 (Δ ≥ 0): la somma delle radici è S = x₁ + x₂ = −b/a e il prodotto P = x₁ · x₂ = c/a.'
  ],
  [
    'math_l2_m6',
    'Quadratic inequality parabola rule',
    'Regola della parabola per disequazioni di 2° grado',
    'With a > 0, ax² + bx + c > 0 holds on outer intervals (x < x₁ ∨ x > x₂), while < 0 holds between roots (x₁ < x < x₂).',
    'Con a > 0, ax² + bx + c > 0 vale per valori esterni alle radici (x < x₁ ∨ x > x₂), mentre < 0 vale per valori interni.'
  ],
  [
    'math_l2_m7',
    'Euclid’s First & Second Theorems',
    'Primo e Secondo Teorema di Euclide',
    'In a right triangle with altitude to hypotenuse: leg² = hypotenuse · projection (1st) and altitude² = proj₁ · proj₂ (2nd).',
    'In un triangolo rettangolo: cateto² = ipotenusa · proiezione (1° Euclide) e altezza² = proiezione₁ · proiezione₂ (2° Euclide).'
  ],
  [
    'math_l2_m8',
    'Thales’ Theorem & similarity scaling',
    'Teorema di Talete e similitudine',
    'Parallel lines cut transversals into proportional segments; if sides scale by k, perimeter scales by k and area by k².',
    'Un fascio di rette parallele taglia due trasversali in segmenti proporzionali; se i lati scalano di k, le aree scalano di k².'
  ],
  [
    'math_l2_m9',
    'Classical probability & complement',
    'Probabilità classica ed evento contrario',
    'P(E) = favorable outcomes / total equally likely outcomes; P(not E) = 1 − P(E), always between 0 and 1.',
    'P(E) = casi favorevoli / casi possibili (equiprobabili); P(Ē) = 1 − P(E), sempre compresa tra 0 e 1.'
  ],

  // Grade 11 Mathematics (Level 3 · math_l3_m1..m9)
  [
    'math_l3_m1',
    'Domain, parity & inverse function',
    'Dominio, parità e funzione inversa',
    'Domain is allowed x values; even f(−x)=f(x) mirrors across y-axis; odd f(−x)=−f(x) across origin; inverse f⁻¹ swaps x and y.',
    'Il dominio è l’insieme delle x ammesse; pari f(−x)=f(x), dispari f(−x)=−f(x); l’inversa f⁻¹ si ottiene riflettendo su y = x.'
  ],
  [
    'math_l3_m2',
    'Modulus distance inequality',
    'Disequazioni con valore assoluto',
    '|x − c| < k (k > 0) means distance from c is less than k (c−k < x < c+k); |x − c| > k takes outer rays.',
    '|x − c| < k indica i punti a distanza minore di k da c (intervallo interno); |x − c| > k prende i valori esterni.'
  ],
  [
    'math_l3_m3',
    'Irrational concordance condition',
    'Condizione di concordanza negli irrazionali',
    'Before squaring √A(x) = B(x), require both A(x) ≥ 0 and B(x) ≥ 0 so extraneous negative roots are rejected.',
    'Prima di elevare al quadrato √A(x) = B(x), imponi A(x) ≥ 0 e B(x) ≥ 0 per evitare soluzioni estranee.'
  ],
  [
    'math_l3_m4',
    'Parabola vertex & circle center',
    'Vertice della parabola e centro della circonferenza',
    'Parabola y = ax²+bx+c has x_V = −b/(2a); circle x²+y²+ax+by+c = 0 has center C(−a/2, −b/2) and R = √((a/2)²+(b/2)²−c).',
    'La parabola y = ax²+bx+c ha x_V = −b/(2a); la circonferenza x²+y²+ax+by+c = 0 ha centro C(−a/2, −b/2).'
  ],
  [
    'math_l3_m5',
    'Eccentricity & asymptotes of conics',
    'Eccentricità e asintoti di ellisse e iperbole',
    'Ellipse: c² = |a² − b²| with eccentricity e = c/a < 1; Hyperbola: c² = a² + b² with e = c/a > 1 and asymptotes y = ±(b/a)x.',
    'Ellisse: c² = |a² − b²| ed e = c/a < 1; Iperbole: c² = a² + b² con e = c/a > 1 e asintoti y = ±(b/a)x.'
  ],
  [
    'math_l3_m6',
    'Tangency condition (Δ = 0 / d = R)',
    'Condizione di tangenza (Δ = 0 oppure d = R)',
    'A line is tangent to a conic when the intersection quadratic has Δ = 0, or for a circle when distance from center equals radius R.',
    'Una retta è tangente a una conica quando l’equazione risolvente ha Δ = 0 (o d(Centro, retta) = R per la circonferenza).'
  ],
  [
    'math_l3_m7',
    'Logarithm definition & rules',
    'Definizione e proprietà dei logaritmi',
    'logₐ(b) = x ⇔ aˣ = b (a > 0, a ≠ 1, b > 0). Key laws: log(xy) = log x + log y, log(x/y) = log x − log y, log(xᵏ) = k log x.',
    'logₐ(b) = x ⇔ aˣ = b (a > 0, a ≠ 1, b > 0). Regole: log(xy) = log x + log y, log(x/y) = log x − log y, log(xᵏ) = k log x.'
  ],
  [
    'math_l3_m8',
    'Radian & Pythagorean trig identity',
    'Radiante e prima relazione fondamentale',
    'π rad = 180°. On the unit circle, cos²α + sin²α = 1 and tan α = sin α / cos α.',
    'π rad = 180°. Sulla circonferenza goniometrica vale sempre cos²α + sin²α = 1 e tan α = sin α / cos α.'
  ],
  [
    'math_l3_m9',
    'Sine Law & Carnot’s Cosine Theorem',
    'Teorema dei Seni e Teorema di Carnot',
    'Sine Law: a/sin α = b/sin β = c/sin γ = 2R. Carnot: a² = b² + c² − 2bc cos α. Area: ½ b c sin α.',
    'Teorema dei Seni: a/sin α = b/sin β = c/sin γ = 2R. Carnot: a² = b² + c² − 2bc cos α. Area: ½ b c sin α.'
  ],

  // Grade 9 Geometry & Statistics · G1–G6
  ['m7m1', 'Complementary and supplementary angles', 'Angoli complementari e supplementari', 'Complementary angles add to 90°. Supplementary angles add to 180°. Vertically opposite angles are equal.', 'Gli angoli complementari sommano 90°. Gli angoli supplementari sommano 180°. Gli angoli opposti al vertice sono congruenti.'],
  ['m7m2', 'Triangle angle sum and area', 'Somma degli angoli e area del triangolo', 'The interior angles of a triangle add to 180°. Area = base × perpendicular height ÷ 2.', 'Gli angoli interni di un triangolo sommano 180°. Area = base × altezza relativa ÷ 2.'],
  ['m7m3', 'Pythagorean theorem', 'Teorema di Pitagora', 'In a right-angled triangle, a² + b² = c², where c is the hypotenuse opposite the right angle.', 'In un triangolo rettangolo, a² + b² = c², dove c è l’ipotenusa opposta all’angolo retto.'],
  ['m7m3', 'Hypotenuse', 'Ipotenusa', 'The longest side of a right-angled triangle, opposite its 90° angle.', 'Il lato più lungo di un triangolo rettangolo, opposto all’angolo di 90°.'],
  ['m7m4', 'Quadrilateral', 'Quadrilatero', 'A polygon with four sides. A square is both a rectangle and a rhombus.', 'Un poligono con quattro lati. Il quadrato è sia un rettangolo sia un rombo.'],
  ['m7m4', 'Perimeter and area', 'Perimetro e area', 'Perimeter is the total boundary length. Area measures the surface inside a shape.', 'Il perimetro è la lunghezza totale del contorno. L’area misura la superficie interna di una figura.'],
  ['m7m5', 'Radius and diameter', 'Raggio e diametro', 'The radius runs from the centre to the circumference. The diameter passes through the centre: d = 2r.', 'Il raggio va dal centro alla circonferenza. Il diametro passa per il centro: d = 2r.'],
  ['m7m5', 'Circumference', 'Circonferenza', 'The distance around a circle: C = 2πr = πd.', 'La lunghezza del contorno di un cerchio: C = 2πr = πd.'],
  ['m7m5', 'Area of a circle', 'Area del cerchio', 'The area enclosed by a circle: A = πr².', 'La superficie racchiusa da un cerchio: A = πr².'],
  ['m7m6', 'Arithmetic mean', 'Media aritmetica', 'Add all data values and divide by the number of values.', 'Somma tutti i valori e dividi per il numero dei dati.'],
  ['m7m6', 'Median', 'Mediana', 'The middle value after sorting the data. With an even number of values, average the two middle values.', 'Il valore centrale dopo aver ordinato i dati. Con un numero pari di valori, fai la media dei due valori centrali.'],
  ['m7m6', 'Mode and range', 'Moda e campo di variazione', 'The mode is the most frequent value. The range is maximum minus minimum.', 'La moda è il valore più frequente. Il campo di variazione è massimo meno minimo.']
];
