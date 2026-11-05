import { TaggedQuestion } from '../types';

export const CH3_QUESTIONS: TaggedQuestion[] = [
  {
    id: 'math-ch3-01',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 23,
    missionId: 'math_q_ch3',
    chapterTitle: ['Sets, Logic & Relations', 'Insiemi, logica e relazioni'],
    missionTitle: ['Definition of a Set', 'Definizione di insieme'],
    q: [
      'In mathematics, when is a collection of objects officially considered a "set"?',
      'In matematica, quando una collezione di oggetti è definita a pieno titolo come "insieme"?'
    ],
    a: [
      ['When there is an objective, unambiguous criterion to decide whether any element belongs to it or not', 'Quando esiste un criterio oggettivo e non ambiguo per stabilire se un elemento vi appartiene o no'],
      ['When it contains at least 10 elements', 'Quando contiene almeno 10 elementi'],
      ['When the elements are subjective and based on personal tastes', 'Quando gli elementi sono scelti secondo gusti personali'],
      ['Only when elements are numbers', 'Solo quando tutti gli elementi sono numeri']
    ],
    why: [
      'A set is well-defined if and only if membership is completely objective. "The tall students in the classroom" is NOT a mathematical set (it is subjective), whereas "The students taller than 170 cm" IS a set!',
      'Un insieme è ben definito solo se l’appartenenza è oggettiva. "I ragazzi simpatici della classe" NON è un insieme matematico (è soggettivo), mentre "I ragazzi con altezza superiore a 170 cm" lo è!'
    ]
  },
  {
    id: 'math-ch3-02',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 23,
    missionId: 'math_q_ch3',
    chapterTitle: ['Sets, Logic & Relations', 'Insiemi, logica e relazioni'],
    missionTitle: ['Membership vs Inclusion Symbols', 'Appartenenza e inclusione: ∈ vs ⊆'],
    q: [
      'What is the fundamental difference between the symbols ∈ and ⊆?',
      'Qual è la differenza fondamentale tra i simboli ∈ e ⊆?'
    ],
    a: [
      ['∈ links an element to a set (x ∈ A); ⊆ links a subset to a set (B ⊆ A)', '∈ collega un elemento a un insieme (x ∈ A); ⊆ collega un sottoinsieme a un insieme (B ⊆ A)'],
      ['They are completely interchangeable', 'Sono perfettamente intercambiabili'],
      ['∈ is used for numbers, ⊆ is used for letters', '∈ si usa per i numeri, ⊆ si usa per le lettere'],
      ['⊆ is only used when the set is empty', '⊆ si usa solo quando l’insieme è vuoto']
    ],
    why: [
      'Crucial distinction! x ∈ A means "x is an element of A". B ⊆ A means "every element of B is also an element of A". For example: 3 ∈ {1, 3, 5}, but {3} ⊆ {1, 3, 5}!',
      'Distinzione fondamentale! Il simbolo ∈ indica che un singolo elemento appartiene a un insieme (3 ∈ A). Il simbolo ⊆ indica che tutti gli elementi di B appartengono ad A ({3} ⊆ A).'
    ]
  },
  {
    id: 'math-ch3-03',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 23,
    missionId: 'math_q_ch3',
    chapterTitle: ['Sets, Logic & Relations', 'Insiemi, logica e relazioni'],
    missionTitle: ['The Empty Set ∅', 'L’insieme vuoto ∅'],
    q: [
      'Which of the following statements about the empty set ∅ is TRUE?',
      'Quale delle seguenti affermazioni sull’insieme vuoto ∅ è VERA?'
    ],
    a: [
      ['The empty set ∅ is a subset of every set A (∅ ⊆ A)', 'L’insieme vuoto ∅ è un sottoinsieme di qualunque insieme A (∅ ⊆ A)'],
      ['The empty set contains the number 0', 'L’insieme vuoto contiene il numero 0'],
      ['The cardinality of the empty set is 1', 'La cardinalità dell’insieme vuoto è 1'],
      ['The empty set cannot be represented', 'L’insieme vuoto non si può rappresentare']
    ],
    why: [
      'The empty set ∅ contains zero elements (|∅| = 0). It is a subset of every set. Watch out: {0} is NOT empty; it contains the element 0!',
      'L’insieme vuoto non contiene alcun elemento (|∅| = 0). È sottoinsieme di qualunque insieme. Attenzione: {0} NON è vuoto, contiene un elemento (lo 0)!'
    ]
  },
  {
    id: 'math-ch3-04',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 23,
    missionId: 'math_q_ch3',
    chapterTitle: ['Sets, Logic & Relations', 'Insiemi, logica e relazioni'],
    missionTitle: ['Power Set Cardinality 𝒫(A)', 'Insieme delle parti 𝒫(A)'],
    q: [
      'If a set A has 4 elements, how many subsets does its power set 𝒫(A) contain?',
      'Se un insieme A ha 4 elementi, quanti elementi (sottoinsiemi) contiene il suo insieme delle parti 𝒫(A)?'
    ],
    a: [
      ['16 (because 2⁴ = 16)', '16 (perché 2⁴ = 16)'],
      ['8 (because 4 · 2 = 8)', '8 (perché 4 · 2 = 8)'],
      ['4', '4'],
      ['24 (because 4! = 24)', '24 (perché 4! = 24)']
    ],
    why: [
      'Theorem: if |A| = n, the power set 𝒫(A) contains 2ⁿ subsets (each element can be either included or excluded: 2 choices per element). For n = 4: 2⁴ = 16.',
      'Teorema: se un insieme ha n elementi, il suo insieme delle parti 𝒫(A) ha cardinalità 2ⁿ. Per n = 4 abbiamo 2⁴ = 16 sottoinsiemi (inclusi ∅ e A stesso).'
    ]
  },
  {
    id: 'math-ch3-05',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 23,
    missionId: 'math_q_ch3',
    chapterTitle: ['Sets, Logic & Relations', 'Insiemi, logica e relazioni'],
    missionTitle: ['Set Intersection A ∩ B', 'Intersezione di insiemi A ∩ B'],
    q: [
      'Given A = {1, 2, 3, 4, 6} and B = {2, 4, 6, 8, 10}, what is A ∩ B?',
      'Dati A = {1, 2, 3, 4, 6} e B = {2, 4, 6, 8, 10}, quanto vale l’intersezione A ∩ B?'
    ],
    a: [
      ['{2, 4, 6}', '{2, 4, 6}'],
      ['{1, 3, 8, 10}', '{1, 3, 8, 10}'],
      ['{1, 2, 3, 4, 6, 8, 10}', '{1, 2, 3, 4, 6, 8, 10}'],
      ['∅', '∅']
    ],
    why: [
      'The intersection A ∩ B consists of all elements that belong to BOTH A and B simultaneously. The common elements are 2, 4, and 6.',
      'L’intersezione A ∩ B è formata dagli elementi che appartengono CONTEMPORANEAMENTE sia ad A sia a B. Gli elementi comuni sono 2, 4 e 6.'
    ]
  },
  {
    id: 'math-ch3-06',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 23,
    missionId: 'math_q_ch3',
    chapterTitle: ['Sets, Logic & Relations', 'Insiemi, logica e relazioni'],
    missionTitle: ['Set Union A ∪ B', 'Unione di insiemi A ∪ B'],
    q: [
      'Given A = {a, b, c} and B = {b, c, d, e}, what is A ∪ B?',
      'Dati A = {a, b, c} e B = {b, c, d, e}, qual è l’insieme unione A ∪ B?'
    ],
    a: [
      ['{a, b, c, d, e}', '{a, b, c, d, e}'],
      ['{b, c}', '{b, c}'],
      ['{a, b, b, c, c, d, e}', '{a, b, b, c, c, d, e}'],
      ['{a, d, e}', '{a, d, e}']
    ],
    why: [
      'The union A ∪ B contains all elements belonging to A, to B, or to both. In a set, duplicate elements are never repeated, so b and c appear only once.',
      'L’unione A ∪ B contiene tutti gli elementi che appartengono ad A, a B o a entrambi. Negli insiemi gli elementi duplicati non si ripetono: {a, b, c, d, e}.'
    ]
  },
  {
    id: 'math-ch3-07',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 23,
    missionId: 'math_q_ch3',
    chapterTitle: ['Sets, Logic & Relations', 'Insiemi, logica e relazioni'],
    missionTitle: ['Set Difference A ∖ B', 'Differenza tra insiemi A ∖ B'],
    q: [
      'Given A = {1, 2, 3, 4} and B = {3, 4, 5}, what is the difference A ∖ B?',
      'Dati gli insiemi A = {1, 2, 3, 4} e B = {3, 4, 5}, qual è la differenza A ∖ B?'
    ],
    a: [
      ['{1, 2}', '{1, 2}'],
      ['{5}', '{5}'],
      ['{1, 2, 5}', '{1, 2, 5}'],
      ['{3, 4}', '{3, 4}']
    ],
    why: [
      'The difference A ∖ B consists of all elements that belong to A but do NOT belong to B. Starting from {1, 2, 3, 4} and removing the elements present in B (3 and 4) leaves {1, 2}.',
      'La differenza A ∖ B è formata dagli elementi che appartengono ad A ma NON appartengono a B. Partendo da {1, 2, 3, 4} togliamo 3 e 4, resta {1, 2}.'
    ]
  },
  {
    id: 'math-ch3-08',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 23,
    missionId: 'math_q_ch3',
    chapterTitle: ['Sets, Logic & Relations', 'Insiemi, logica e relazioni'],
    missionTitle: ['Disjoint Sets (Insiemi disgiunti)', 'Insiemi disgiunti'],
    q: [
      'Two sets A and B are called "disjoint" when:',
      'Due insiemi A e B si dicono "disgiunti" quando:'
    ],
    a: [
      ['Their intersection is the empty set: A ∩ B = ∅', 'La loro intersezione è l’insieme vuoto: A ∩ B = ∅'],
      ['Their union is the universe set: A ∪ B = U', 'La loro unione è l’insieme universo: A ∪ B = U'],
      ['They have the exact same number of elements', 'Hanno lo stesso numero di elementi'],
      ['A is a subset of B', 'A è un sottoinsieme di B']
    ],
    why: [
      'Disjoint sets have no elements in common; their Euler-Venn circles do not overlap at all: A ∩ B = ∅.',
      'Due insiemi sono disgiunti quando non hanno alcun elemento in comune: i loro cerchi di Eulero-Venn sono completamente separati: A ∩ B = ∅.'
    ]
  },
  {
    id: 'math-ch3-09',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 23,
    missionId: 'math_q_ch3',
    chapterTitle: ['Sets, Logic & Relations', 'Insiemi, logica e relazioni'],
    missionTitle: ['Cartesian Product A × B', 'Prodotto cartesiano A × B'],
    q: [
      'Given A = {1, 2} and B = {x, y, z}, how many ordered pairs does the Cartesian product A × B contain?',
      'Dati A = {1, 2} e B = {x, y, z}, quante coppie ordinate contiene il prodotto cartesiano A × B?'
    ],
    a: [
      ['6 pairs (because |A| · |B| = 2 · 3 = 6)', '6 coppie (perché |A| · |B| = 2 · 3 = 6)'],
      ['5 pairs (because 2 + 3 = 5)', '5 coppie (perché 2 + 3 = 5)'],
      ['8 pairs (because 2³ = 8)', '8 coppie (perché 2³ = 8)'],
      ['3 pairs', '3 coppie']
    ],
    why: [
      'The Cartesian product A × B is the set of all ordered pairs (a, b) where a ∈ A and b ∈ B. Its cardinality is |A × B| = |A| · |B| = 2 · 3 = 6.',
      'Il prodotto cartesiano A × B è l’insieme di tutte le coppie ordinate (a, b) con a ∈ A e b ∈ B. Il numero di coppie è dato da |A| · |B| = 2 · 3 = 6.'
    ]
  },
  {
    id: 'math-ch3-10',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 23,
    missionId: 'math_q_ch3',
    chapterTitle: ['Sets, Logic & Relations', 'Insiemi, logica e relazioni'],
    missionTitle: ['Logical Proposition', 'Proposizione logica'],
    q: [
      'Which of the following sentences is a logical proposition in mathematical logic?',
      'Quale delle seguenti frasi è una proposizione logica?'
    ],
    a: [
      ['"Rome is the capital of Italy"', '"Roma è la capitale d’Italia"'],
      ['"Close the window!"', '"Chiudi la finestra!"'],
      ['"How wonderful is mathematics?"', '"Quanto è bella la matematica?"'],
      ['"This pizza is delicious"', '"Questa pizza è squisita"']
    ],
    why: [
      'A logical proposition is a declarative statement that can be unambiguously classified as either TRUE or FALSE (principle of bivalence). Commands, questions, and subjective opinions are not propositions!',
      'Una proposizione logica è un enunciato dichiarativo che può essere inequivocabilmente vero oppure falso. Comandi, esclamazioni e gusti personali non sono proposizioni logiche!'
    ]
  },
  {
    id: 'math-ch3-11',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 23,
    missionId: 'math_q_ch3',
    chapterTitle: ['Sets, Logic & Relations', 'Insiemi, logica e relazioni'],
    missionTitle: ['Conjunction (AND / ∧)', 'Congiunzione logica (E / ∧)'],
    q: [
      'When is the logical conjunction p ∧ q (p AND q) TRUE?',
      'Quando la congiunzione logica p ∧ q (p E q) è VERA?'
    ],
    a: [
      ['Only when BOTH p and q are true simultaneously', 'Solo quando SIA p SIA q sono entrambe contemporaneamente vere'],
      ['When at least one between p and q is true', 'Quando almeno una tra p e q è vera'],
      ['When both p and q are false', 'Quando entrambe sono false'],
      ['Always true', 'Sempre vera']
    ],
    why: [
      'The conjunction ∧ requires all statements to hold. If even a single statement is false, the entire conjunction is false! (Corresponding to set intersection ∩).',
      'La congiunzione ∧ (corrispondente all’intersezione ∩) è vera solo se tutte le proposizioni che la compongono sono contemporaneamente vere.'
    ]
  },
  {
    id: 'math-ch3-12',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 23,
    missionId: 'math_q_ch3',
    chapterTitle: ['Sets, Logic & Relations', 'Insiemi, logica e relazioni'],
    missionTitle: ['Inclusive Disjunction (OR / ∨)', 'Disgiunzione inclusiva (O / ∨)'],
    q: [
      'In mathematics, the disjunction p ∨ q is "inclusive" (vel). When is p ∨ q FALSE?',
      'In matematica, la disgiunzione p ∨ q è "inclusiva" (vel). Quando p ∨ q risulta FALSA?'
    ],
    a: [
      ['Only when BOTH p and q are false simultaneously', 'Solo quando SIA p SIA q sono contemporaneamente false'],
      ['When one is true and one is false', 'Quando una è vera e l’altra è falsa'],
      ['When both are true', 'Quando entrambe sono vere'],
      ['Never false', 'Mai falsa']
    ],
    why: [
      'In mathematical logic, "p ∨ q" means "at least one of them is true" (including the case where both are true). It is false ONLY when both are false.',
      'Nel linguaggio matematico, "p ∨ q" significa che almeno una delle due è vera (vale anche se sono entrambe vere). È falsa soltanto se sono entrambe false contemporaneamente!'
    ]
  },
  {
    id: 'math-ch3-13',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 23,
    missionId: 'math_q_ch3',
    chapterTitle: ['Sets, Logic & Relations', 'Insiemi, logica e relazioni'],
    missionTitle: ['De Morgan’s Laws', 'Leggi di De Morgan'],
    q: [
      'According to De Morgan’s laws, the negation of the conjunction ¬(p ∧ q) is equivalent to:',
      'Secondo le leggi di De Morgan, la negazione della congiunzione ¬(p ∧ q) è logicamente equivalente a:'
    ],
    a: [
      ['¬p ∨ ¬q', '¬p ∨ ¬q'],
      ['¬p ∧ ¬q', '¬p ∧ ¬q'],
      ['p ∧ q', 'p ∧ q'],
      ['p ∨ q', 'p ∨ q']
    ],
    why: [
      'De Morgan’s laws: "Not (p and q)" equals "Not p OR Not q". Denying that both things happen means that at least one of them failed!',
      'Leggi di De Morgan: negare che si verifichino entrambe le condizioni significa che almeno una delle due non è verificata: ¬(p ∧ q) ⇔ ¬p ∨ ¬q.'
    ]
  },
  {
    id: 'math-ch3-14',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 23,
    missionId: 'math_q_ch3',
    chapterTitle: ['Sets, Logic & Relations', 'Insiemi, logica e relazioni'],
    missionTitle: ['Material Implication p ⇒ q', 'Implicazione logica p ⇒ q'],
    q: [
      'In logic, the material implication "p ⇒ q" (if p then q) is FALSE in only one case. Which one?',
      'Nella logica formale, l’implicazione "p ⇒ q" (se p allora q) è FALSA in un solo caso. Quale?'
    ],
    a: [
      ['When p is TRUE and q is FALSE', 'Quando l’ipotesi p è VERA e la conseguenza q è FALSA'],
      ['When p is FALSE and q is TRUE', 'Quando p è FALSA e q è VERA'],
      ['When both p and q are FALSE', 'Quando sia p sia q sono FALSE'],
      ['When both p and q are TRUE', 'Quando sia p sia q sono VERE']
    ],
    why: [
      'A promise "If it rains (p), I take an umbrella (q)" is broken ONLY if it actually rains (p is True) and yet you do not take an umbrella (q is False)! If p is false, the implication is vacuously true.',
      'La promessa "Se piove (p), porto l’ombrello (q)" viene infranta SOLTANTO se piove davvero (p vera) e non porto l’ombrello (q falsa)! Se p è falsa, l’implicazione è per convenzione vera.'
    ]
  },
  {
    id: 'math-ch3-15',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 23,
    missionId: 'math_q_ch3',
    chapterTitle: ['Sets, Logic & Relations', 'Insiemi, logica e relazioni'],
    missionTitle: ['Negation of the Universal Quantifier ∀', 'Negazione del quantificatore universale ∀'],
    q: [
      'What is the logical negation of the statement: "Every bird can fly"?',
      'Qual è la corretta negazione logica dell’affermazione: "Tutti gli uccelli possono volare"?'
    ],
    a: [
      ['"There exists at least one bird that cannot fly"', '"Esiste almeno un uccello che non può volare"'],
      ['"No bird can fly"', '"Nessun uccello può volare"'],
      ['"All birds cannot fly"', '"Tutti gli uccelli non volano"'],
      ['"Every animal can fly"', '"Tutti gli animali possono volare"']
    ],
    why: [
      'Classic student trap! The negation of "for all x, P(x)" is "there exists x such that NOT P(x)". To disprove that all birds fly, you just need ONE penguin or ostrich!',
      'Tranello classico! La negazione di "Tutti volano" NON è "Nessuno vola", ma basta che esista un solo caso contrario: "Esiste almeno un uccello che non sa volare" (es. il pinguino)!'
    ]
  },
  {
    id: 'math-ch3-16',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 23,
    missionId: 'math_q_ch3',
    chapterTitle: ['Sets, Logic & Relations', 'Insiemi, logica e relazioni'],
    missionTitle: ['Binary Relations and Reflexivity', 'Proprietà riflessiva di una relazione'],
    q: [
      'When is a binary relation R on a set A called "reflexive"?',
      'Quando una relazione binaria R definita su un insieme A si dice "riflessiva"?'
    ],
    a: [
      ['When every element x of A is in relation with itself: ∀x ∈ A, x R x', 'Quando ogni elemento x di A è in relazione con se stesso: ∀x ∈ A, x R x'],
      ['When x R y implies y R x', 'Quando x R y implica y R x'],
      ['When no element is in relation with itself', 'Quando nessun elemento è in relazione con se stesso'],
      ['When every element is in relation with 0', 'Quando ogni elemento è in relazione con lo 0']
    ],
    why: [
      'Reflexivity means every element relates to itself. For instance, the relation "is equal to" (=) or "is less than or equal to" (≤) is reflexive, because x ≤ x for every number.',
      'La proprietà riflessiva impone che ogni elemento sia in relazione con se stesso. Ad esempio la relazione "uguale a" o "minore o uguale a" (≤) è riflessiva (3 ≤ 3 è vera).'
    ]
  },
  {
    id: 'math-ch3-17',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 23,
    missionId: 'math_q_ch3',
    chapterTitle: ['Sets, Logic & Relations', 'Insiemi, logica e relazioni'],
    missionTitle: ['Symmetric Property', 'Proprietà simmetrica'],
    q: [
      'Which relation among people is symmetric?',
      'Quale tra queste relazioni tra persone è certamente simmetrica?'
    ],
    a: [
      ['"Is a sibling of"', '"È fratello o sorella di"'],
      ['"Is the father of"', '"È padre di"'],
      ['"Is older than"', '"È più anziano di"'],
      ['"Is the teacher of"', '"È insegnante di"']
    ],
    why: [
      'A relation is symmetric if a R b implies b R a. If Mario is a sibling of Luigi, Luigi is a sibling of Mario. "Father of" is not symmetric (if Mario is Luigi\'s father, Luigi is NOT Mario\'s father!).',
      'Una relazione è simmetrica se x R y implica y R x. Se Mario è fratello di Luigi, anche Luigi è fratello di Mario. "Padre di" non è simmetrica!'
    ]
  },
  {
    id: 'math-ch3-18',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 23,
    missionId: 'math_q_ch3',
    chapterTitle: ['Sets, Logic & Relations', 'Insiemi, logica e relazioni'],
    missionTitle: ['Transitive Property', 'Proprietà transitiva'],
    q: [
      'What does the transitive property state for a relation R?',
      'Che cosa afferma la proprietà transitiva per una relazione R?'
    ],
    a: [
      ['If x R y and y R z, then x R z', 'Se x R y e y R z, allora x R z'],
      ['If x R y, then y R x', 'Se x R y, allora y R x'],
      ['For every x, x R x', 'Per ogni x, x R x'],
      ['x cannot be in relation with z', 'x non può essere in relazione con z']
    ],
    why: [
      'Transitivity allows chaining relationships. For example, the relation "is strictly less than" (<): if a < b and b < c, then a < c.',
      'La transitività consente di concatenare: se a R b e b R c, allora a R c. Vale per la relazione "<": se 2 < 5 e 5 < 9, allora 2 < 9.'
    ]
  },
  {
    id: 'math-ch3-19',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 23,
    missionId: 'math_q_ch3',
    chapterTitle: ['Sets, Logic & Relations', 'Insiemi, logica e relazioni'],
    missionTitle: ['Equivalence Relation', 'Relazione di equivalenza'],
    q: [
      'Which three properties MUST a relation satisfy to be called an "equivalence relation"?',
      'Quali tre proprietà DEVE soddisfare una relazione per essere definita "relazione di equivalenza"?'
    ],
    a: [
      ['Reflexive, symmetric, and transitive', 'Riflessiva, simmetrica e transitiva'],
      ['Reflexive, antisymmetric, and transitive', 'Riflessiva, antisimmetrica e transitiva'],
      ['Symmetric, transitive, and complete', 'Simmetrica, transitiva e completa'],
      ['Antireflexive and symmetric', 'Antiriflessiva e simmetrica']
    ],
    why: [
      'By definition, an equivalence relation is reflexive, symmetric, and transitive. It partitions the set into disjoint equivalence classes (such as equivalent fractions forming rational numbers!).',
      'Una relazione di equivalenza deve essere riflessiva, simmetrica e transitiva. Essa scompone l’insieme in classi di equivalenza (come le frazioni equivalenti che formano lo stesso numero razionale).'
    ]
  },
  {
    id: 'math-ch3-20',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 23,
    missionId: 'math_q_ch3',
    chapterTitle: ['Sets, Logic & Relations', 'Insiemi, logica e relazioni'],
    missionTitle: ['Order Relation (Relazione d’ordine)', 'Relazione d’ordine'],
    q: [
      'An order relation (like ≤ on numbers) differs from an equivalence relation because instead of being symmetric, it is:',
      'Una relazione d’ordine (come ≤ sui numeri) si differenzia da una di equivalenza perché invece di essere simmetrica è:'
    ],
    a: [
      ['Antisymmetric (if x R y and y R x, then x = y)', 'Antisimmetrica (se x R y e y R x, allora x = y)'],
      ['Completely random', 'Completamente casuale'],
      ['Always false', 'Sempre falsa'],
      ['Symmetric only for even numbers', 'Simmetrica solo per numeri pari']
    ],
    why: [
      'An order relation is reflexive, antisymmetric, and transitive. Antisymmetry ensures that if a ≤ b and b ≤ a, then a must equal b.',
      'Una relazione d’ordine è riflessiva, antisimmetrica e transitiva. L’antisimmetria afferma che se a ≤ b e b ≤ a, allora deve necessariamente essere a = b.'
    ]
  },
  {
    id: 'math-ch3-21',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 23,
    missionId: 'math_q_ch3',
    chapterTitle: ['Sets, Logic & Relations', 'Insiemi, logica e relazioni'],
    missionTitle: ['Complement of a Set', 'Insieme complementare'],
    q: [
      'Given universe set U = {1, 2, 3, 4, 5, 6} and subset A = {2, 4, 6}, what is the complement set Ā (or C_U(A))?',
      'Dato l’universo U = {1, 2, 3, 4, 5, 6} e il sottoinsieme A = {2, 4, 6}, qual è l’insieme complementare Ā?'
    ],
    a: [
      ['{1, 3, 5}', '{1, 3, 5}'],
      ['{2, 4, 6}', '{2, 4, 6}'],
      ['∅', '∅'],
      ['{0}', '{0}']
    ],
    why: [
      'The complement Ā = U ∖ A contains all elements of the universe U that do not belong to A. Here, the odd numbers {1, 3, 5}.',
      'Il complementare Ā = U ∖ A è formato dagli elementi dell’universo U che non appartengono ad A. Nel nostro caso i numeri dispari {1, 3, 5}.'
    ]
  },
  {
    id: 'math-ch3-22',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 23,
    missionId: 'math_q_ch3',
    chapterTitle: ['Sets, Logic & Relations', 'Insiemi, logica e relazioni'],
    missionTitle: ['Tautology in Logic', 'Tautologia'],
    q: [
      'In logic, what is a "tautology"?',
      'In logica, che cos’è una "tautologia"?'
    ],
    a: [
      ['A compound proposition that is always TRUE regardless of the truth values of its components', 'Una proposizione composta che risulta sempre VERA, indipendentemente dal valore di verità delle singole proposizioni'],
      ['A statement that is always false (contradiction)', 'Un’affermazione sempre falsa (contraddizione)'],
      ['An unprovable hypothesis', 'Un’ipotesi non dimostrabile'],
      ['A circular question', 'Una domanda a trabocchetto']
    ],
    why: [
      'A tautology is always true. A classic example is the law of excluded middle: p ∨ ¬p ("It rains or it does not rain"), which is always true.',
      'Una tautologia è una proposizione sempre vera in qualsiasi caso. L’esempio classico è il principio del terzo escluso: p ∨ ¬p ("O piove o non piove"), sempre vera.'
    ]
  },
  {
    id: 'math-ch3-23',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 23,
    missionId: 'math_q_ch3',
    chapterTitle: ['Sets, Logic & Relations', 'Insiemi, logica e relazioni'],
    missionTitle: ['Venn Diagram Cardinality Formula', 'Formula di cardinalità dell’unione'],
    q: [
      'For two finite sets A and B, which formula calculates the number of elements in their union |A ∪ B|?',
      'Per due insiemi finiti A e B, quale formula esprime la cardinalità dell’unione |A ∪ B|?'
    ],
    a: [
      ['|A ∪ B| = |A| + |B| − |A ∩ B|', '|A ∪ B| = |A| + |B| − |A ∩ B|'],
      ['|A ∪ B| = |A| + |B|', '|A ∪ B| = |A| + |B|'],
      ['|A ∪ B| = |A| · |B|', '|A ∪ B| = |A| · |B|'],
      ['|A ∪ B| = |A ∩ B|', '|A ∪ B| = |A ∩ B|']
    ],
    why: [
      'When adding |A| and |B|, the common elements in the intersection A ∩ B are counted twice. Therefore, we must subtract |A ∩ B| once to get the exact count!',
      'Sommando gli elementi di A e di B, gli elementi comuni dell’intersezione A ∩ B vengono contati due volte. Bisogna quindi sottrarre |A ∩ B| una volta!'
    ]
  },
  {
    id: 'math-ch3-24',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 23,
    missionId: 'math_q_ch3',
    chapterTitle: ['Sets, Logic & Relations', 'Insiemi, logica e relazioni'],
    missionTitle: ['Negation of Existential Quantifier ∃', 'Negazione del quantificatore esistenziale ∃'],
    q: [
      'What is the logical negation of: "There exists a square with 5 sides"?',
      'Qual è la negazione logica di: "Esiste un quadrato con 5 lati"?'
    ],
    a: [
      ['"Every square does NOT have 5 sides" (No square has 5 sides)', '"Ogni quadrato NON ha 5 lati" (Nessun quadrato ha 5 lati)'],
      ['"There exists a square with 4 sides"', '"Esiste un quadrato con 4 lati"'],
      ['"All polygons have 5 sides"', '"Tutti i poligoni hanno 5 lati"'],
      ['"There exists at least two squares with 5 sides"', '"Esistono almeno due quadrati con 5 lati"']
    ],
    why: [
      'The negation of ∃x P(x) is ∀x ¬P(x). To deny that there exists even one 5-sided square, every single square must NOT have 5 sides.',
      'La negazione di ∃x P(x) è ∀x ¬P(x). Negare l’esistenza di un quadrato con 5 lati equivale a dire che nessun quadrato ha 5 lati (tutti i quadrati non hanno 5 lati).'
    ]
  },
  {
    id: 'math-ch3-25',
    subject: 'math',
    unitIndex: 4,
    arcIndex: 23,
    missionId: 'math_q_ch3',
    chapterTitle: ['Sets, Logic & Relations', 'Insiemi, logica e relazioni'],
    missionTitle: ['Contrapositive of an Implication', 'Contrannominale di un’implicazione'],
    q: [
      'The implication p ⇒ q is logically equivalent to its contrapositive. What is the contrapositive of p ⇒ q?',
      'L’implicazione p ⇒ q è logicamente equivalente alla sua contronominale. Qual è la contronominale di p ⇒ q?'
    ],
    a: [
      ['¬q ⇒ ¬p', '¬q ⇒ ¬p'],
      ['q ⇒ p (the converse)', 'q ⇒ p (l’inversa)'],
      ['¬p ⇒ ¬q', '¬p ⇒ ¬q'],
      ['p ∧ ¬q', 'p ∧ ¬q']
    ],
    why: [
      'Theorem: (p ⇒ q) ⇔ (¬q ⇒ ¬p). "If it rains, the street is wet" is logically equivalent to "If the street is NOT wet, it is NOT raining".',
      'Teorema: (p ⇒ q) è equivalente a (¬q ⇒ ¬p). "Se piove, la strada è bagnata" equivale logicamente a "Se la strada NON è bagnata, allora NON sta piovendo".'
    ]
  }
];
