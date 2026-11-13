import type { Mission } from '../types';
import { makeG5MathMission, q, type Pair } from './grade5MathCommon';

const warmupTaunt = (demon: Pair): Pair => [
  `<p>🎲 I am ${demon[0]}! I have muddled everything you learned in Grade 4. Show me you remember it!</p>`,
  `<p>🎲 Sono ${demon[1]}! Ho confuso tutto quello che hai imparato in quarta. Dimostrami che te lo ricordi!</p>`
];

const problemsTaunt = (demon: Pair): Pair => [
  `<p>📊 I am ${demon[0]}! I hide data, twist questions and scramble graphs. Can you solve my problems with a method?</p>`,
  `<p>📊 Sono ${demon[1]}! Nascondo i dati, confondo le domande e mescolo i grafici. Sai risolvere i miei problemi con metodo?</p>`
];

/** Per cominciare · pages 4–7: a diagnostic warm-up of Grade 4 knowledge. */
export const GRADE5_MATH_WARMUP_MISSIONS: Mission[] = [
  makeG5MathMission({
    id: 'g5m-warmup-numbers', sec: '0.1', pages: '4–5', hue: 330,
    title: ['Warm-Up: Numbers, Fractions and Decimals', 'Per cominciare: numeri, frazioni e decimali'],
    topic: ['Place value, fractions, decimal numbers and the four operations', 'Valore posizionale, frazioni, numeri decimali e le quattro operazioni'],
    demon: ['The Forgetful Imp', 'il Folletto Smemorato'],
    tech: ['Number Form · Opening Technique: Memory Spark', 'Stile dei Numeri · Tecnica d’apertura: Scintilla della Memoria'],
    lessons: [
      { vis: 'g5m-place-value', text: [
        '<p>👋 Welcome to Grade 5 Maths! Let’s warm up. In our number system each digit has a <b>place value</b>: in <b>4 352</b> the 4 is worth 4 thousands, the 3 is worth 3 hundreds, the 5 is 5 tens and the 2 is 2 units.</p><p>Moving one place to the left makes a digit worth <b>10 times more</b>.</p>',
        '<p>👋 Benvenuta e benvenuto alla matematica di quinta! Facciamo un ripasso. Nel nostro sistema di numerazione ogni cifra ha un <b>valore posizionale</b>: in <b>4 352</b> il 4 vale 4 migliaia (4 k), il 3 vale 3 centinaia (3 h), il 5 vale 5 decine (5 da) e il 2 vale 2 unità (2 u).</p><p>Spostandosi di un posto a sinistra una cifra vale <b>10 volte di più</b>.</p>'
      ] },
      [
        '<p>🍕 A <b>fraction</b> describes equal parts of a whole. In <b>3/4</b> the <b>denominator</b> 4 tells how many equal parts the whole is split into; the <b>numerator</b> 3 tells how many parts we take.</p><p>Fractions with denominator 10, 100, 1000 are <b>decimal fractions</b>: 3/10 = 0.3 and 25/100 = 0.25.</p>',
        '<p>🍕 Una <b>frazione</b> indica parti uguali di un intero. In <b>3/4</b> il <b>denominatore</b> 4 dice in quante parti uguali si divide l’intero; il <b>numeratore</b> 3 dice quante parti si prendono.</p><p>Le frazioni con denominatore 10, 100, 1000 sono <b>frazioni decimali</b>: 3/10 = 0,3 e 25/100 = 0,25.</p>'
      ],
      [
        '<p>➕ Remember the four operations and their names: <b>addition</b> gives a sum, <b>subtraction</b> a difference, <b>multiplication</b> a product and <b>division</b> a quotient.</p><p>When you add or subtract decimal numbers in columns, <b>line up the decimal points</b>: 12.5 + 3.25 = 15.75.</p>',
        '<p>➕ Ricorda le quattro operazioni e i loro risultati: l’<b>addizione</b> dà la somma, la <b>sottrazione</b> la differenza, la <b>moltiplicazione</b> il prodotto e la <b>divisione</b> il quoziente.</p><p>Quando addizioni o sottrai numeri decimali in colonna, <b>incolonna le virgole</b>: 12,5 + 3,25 = 15,75.</p>'
      ]
    ],
    quiz: [
      q('In 7 482, what is the value of the digit 4?', 'In 7 482, quanto vale la cifra 4?', [['4 hundreds (400)', '4 centinaia (400)'], ['4 tens (40)', '4 decine (40)'], ['4 units', '4 unità'], ['4 thousands (4 000)', '4 migliaia (4 000)']], ['The 4 is in the hundreds place, so it is worth 400.', 'Il 4 è al posto delle centinaia, quindi vale 400.']),
      q('Which decimal number is equal to 7/10?', 'Quale numero decimale è uguale a 7/10?', [['0.7', '0,7'], ['0.07', '0,07'], ['7.10', '7,10'], ['70', '70']], ['Seven tenths is written 0.7.', 'Sette decimi si scrive 0,7.']),
      q('What is 12.5 + 3.25?', 'Quanto fa 12,5 + 3,25?', [['15.75', '15,75'], ['15.30', '15,30'], ['4.50', '4,50'], ['157.5', '157,5']], ['Line up the decimal points: 12.50 + 3.25 = 15.75.', 'Incolonnando le virgole: 12,50 + 3,25 = 15,75.']),
      q('What is the result of a multiplication called?', 'Come si chiama il risultato della moltiplicazione?', [['Product', 'Prodotto'], ['Sum', 'Somma'], ['Difference', 'Differenza'], ['Quotient', 'Quoziente']], ['Factors multiplied together give a product.', 'I fattori moltiplicati danno il prodotto.'])
    ]
  }, warmupTaunt),
  makeG5MathMission({
    id: 'g5m-warmup-measure-problems', sec: '0.2', pages: '6–7', hue: 300,
    title: ['Warm-Up: Measures, Shapes and Problems', 'Per cominciare: misura, spazio e figure, problemi'],
    topic: ['Units of measure, perimeter, basic shapes and the steps of a problem', 'Unità di misura, perimetro, figure di base e fasi di un problema'],
    demon: ['The Muddled Ruler', 'il Righello Pasticcione'],
    tech: ['Number Form · Opening Technique: Steady Measure', 'Stile dei Numeri · Tecnica d’apertura: Misura Sicura'],
    lessons: [
      [
        '<p>📏 The <b>metre (m)</b> measures length, the <b>litre (l)</b> measures capacity and the <b>kilogram (kg)</b> measures mass. Each has bigger units (multiples) and smaller units (submultiples) that go up and down in steps of 10.</p><p>For example, 1 m = 10 dm = 100 cm = 1 000 mm.</p>',
        '<p>📏 Il <b>metro (m)</b> misura la lunghezza, il <b>litro (l)</b> la capacità e il <b>chilogrammo (kg)</b> la massa. Ognuno ha unità più grandi (multipli) e più piccole (sottomultipli) che crescono e diminuiscono di 10 in 10.</p><p>Per esempio 1 m = 10 dm = 100 cm = 1 000 mm.</p>'
      ],
      [
        '<p>🔷 The <b>perimeter</b> is the length of the outline of a shape: add the lengths of all its sides. A square with a 5 cm side has a perimeter of 5 × 4 = 20 cm.</p><p>Polygons are named by their number of sides: triangle (3), quadrilateral (4), pentagon (5), hexagon (6).</p>',
        '<p>🔷 Il <b>perimetro</b> è la lunghezza del contorno di una figura: si sommano le misure di tutti i lati. Un quadrato con il lato di 5 cm ha perimetro 5 × 4 = 20 cm.</p><p>I poligoni prendono il nome dal numero di lati: triangolo (3), quadrilatero (4), pentagono (5), esagono (6).</p>'
      ],
      [
        '<p>🧩 To solve a problem: <b>1)</b> read carefully; <b>2)</b> find the <b>question</b>; <b>3)</b> pick out the <b>data</b> you need; <b>4)</b> choose the operations; <b>5)</b> calculate; <b>6)</b> check that the answer makes sense and write it with its unit.</p>',
        '<p>🧩 Per risolvere un problema: <b>1)</b> leggi con attenzione; <b>2)</b> individua la <b>domanda</b>; <b>3)</b> scegli i <b>dati</b> utili; <b>4)</b> scegli le operazioni; <b>5)</b> esegui i calcoli; <b>6)</b> controlla che la risposta abbia senso e scrivila con l’unità di misura.</p>'
      ]
    ],
    quiz: [
      q('How many centimetres are there in 1 metre?', 'Quanti centimetri ci sono in 1 metro?', [['100 cm', '100 cm'], ['10 cm', '10 cm'], ['1 000 cm', '1 000 cm'], ['60 cm', '60 cm']], ['1 m = 100 cm.', '1 m = 100 cm.']),
      q('A square has a side of 6 cm. What is its perimeter?', 'Un quadrato ha il lato di 6 cm. Qual è il suo perimetro?', [['24 cm', '24 cm'], ['12 cm', '12 cm'], ['36 cm', '36 cm'], ['18 cm', '18 cm']], ['A square has 4 equal sides: 6 × 4 = 24 cm.', 'Il quadrato ha 4 lati uguali: 6 × 4 = 24 cm.']),
      q('Which unit measures the capacity of a bottle?', 'Quale unità misura la capacità di una bottiglia?', [['The litre', 'Il litro'], ['The metre', 'Il metro'], ['The kilogram', 'Il chilogrammo'], ['The hour', 'L’ora']], ['Capacity is measured in litres and their multiples and submultiples.', 'La capacità si misura in litri, con i loro multipli e sottomultipli.']),
      q('What is the first thing to look for in a problem’s text?', 'Che cosa cerchi per prima cosa nel testo di un problema?', [['The question', 'La domanda'], ['The longest number', 'Il numero più lungo'], ['The last word', 'L’ultima parola'], ['The title of the book', 'Il titolo del libro']], ['Knowing the question tells you which data you really need.', 'Conoscere la domanda ti dice quali dati ti servono davvero.'])
    ]
  }, warmupTaunt)
];

/** Problemi, dati e previsioni · pages 8–35. */
export const GRADE5_MATH_PROBLEMS_MISSIONS: Mission[] = [
  makeG5MathMission({
    id: 'g5m-problem-method', sec: '1.1', pages: '10–11', hue: 280,
    title: ['Problems with a Method', 'Problemi con metodo'],
    topic: ['The text of a problem: data and question; useful, useless, missing and hidden data', 'Il testo di un problema: dati e domanda; dati utili, inutili, mancanti e nascosti'],
    demon: ['The Data Thief', 'il Ladro di Dati'],
    tech: ['Problem Form · First Technique: Clear Reading', 'Stile dei Problemi · Prima Tecnica: Lettura Limpida'],
    lessons: [
      [
        '<p>🔍 Every problem has a <b>text</b> with <b>data</b> (the information) and a <b>question</b> (what you must find). Underline the question first, then circle the numbers you need.</p><p>Example: “A book costs €12. Luca buys 3 books and pays with a €50 note. How much change does he get?”</p>',
        '<p>🔍 Ogni problema ha un <b>testo</b> con i <b>dati</b> (le informazioni) e una <b>domanda</b> (che cosa devi trovare). Sottolinea prima la domanda, poi cerchia i numeri che ti servono.</p><p>Esempio: «Un libro costa 12 €. Luca compra 3 libri e paga con una banconota da 50 €. Quanto riceve di resto?»</p>'
      ],
      [
        '<p>🧮 Not all data are the same:</p><ul><li><b>useful data</b> are needed to answer;</li><li><b>useless data</b> are true but not needed;</li><li><b>missing data</b> are needed but not given, so the problem cannot be solved;</li><li><b>hidden data</b> are written in words: “a dozen” = 12, “a week” = 7 days, “double” = × 2.</li></ul>',
        '<p>🧮 Non tutti i dati sono uguali:</p><ul><li>i <b>dati utili</b> servono per rispondere;</li><li>i <b>dati inutili</b> sono veri ma non servono;</li><li>i <b>dati mancanti</b> servono ma non ci sono, quindi il problema non si può risolvere;</li><li>i <b>dati nascosti</b> sono scritti a parole: «una dozzina» = 12, «una settimana» = 7 giorni, «il doppio» = × 2.</li></ul>'
      ],
      [
        '<p>✅ Solving Luca’s problem: cost of the books 12 × 3 = €36; change 50 − 36 = <b>€14</b>.</p><p>Some problems have <b>two or more questions</b>: the answer to the first (the “hidden question”) becomes a datum for the next one.</p>',
        '<p>✅ Risolviamo il problema di Luca: spesa per i libri 12 × 3 = 36 €; resto 50 − 36 = <b>14 €</b>.</p><p>Alcuni problemi hanno <b>due o più domande</b>: la risposta alla prima (la «domanda nascosta») diventa un dato per la successiva.</p>'
      ]
    ],
    quiz: [
      q('“Anna buys a dozen eggs.” Which hidden datum is in this sentence?', '«Anna compra una dozzina di uova.» Quale dato nascosto c’è nella frase?', [['12', '12'], ['10', '10'], ['6', '6'], ['24', '24']], ['A dozen means 12.', 'Una dozzina significa 12.']),
      q('A pen costs €2 and a notebook €3. Marco has 8 cousins. How much do 4 pens cost? Which datum is useless?', 'Una penna costa 2 € e un quaderno 3 €. Marco ha 8 cugini. Quanto costano 4 penne? Quale dato è inutile?', [['The price of the notebook and the 8 cousins', 'Il prezzo del quaderno e gli 8 cugini'], ['The price of the pen', 'Il prezzo della penna'], ['The number of pens', 'Il numero delle penne'], ['There are no useless data', 'Non ci sono dati inutili']], ['Only the pen price and the number of pens are needed: 2 × 4 = €8.', 'Servono solo il prezzo della penna e il numero di penne: 2 × 4 = 8 €.']),
      q('Luca pays for 3 books costing €12 each with €50. How much change does he get?', 'Luca paga 3 libri da 12 € l’uno con 50 €. Quanto riceve di resto?', [['€14', '14 €'], ['€38', '38 €'], ['€36', '36 €'], ['€24', '24 €']], ['12 × 3 = 36; 50 − 36 = 14.', '12 × 3 = 36; 50 − 36 = 14.']),
      q('“A box holds some biscuits. How many biscuits are in 5 boxes?” What is wrong?', '«Una scatola contiene dei biscotti. Quanti biscotti ci sono in 5 scatole?» Che cosa non va?', [['A datum is missing', 'Manca un dato'], ['There is a useless datum', 'C’è un dato inutile'], ['There is no question', 'Manca la domanda'], ['Nothing: it can be solved', 'Niente: si può risolvere']], ['We do not know how many biscuits one box holds.', 'Non sappiamo quanti biscotti contiene una scatola.'])
    ]
  }, problemsTaunt),
  makeG5MathMission({
    id: 'g5m-problem-diagrams', sec: '1.2', pages: '12–14', hue: 265,
    title: ['Diagrams and Expressions for Problems', 'Diagrammi ed espressioni per i problemi'],
    topic: ['Bar models, block diagrams and writing one expression for a problem', 'Rappresentazioni grafiche, diagramma a blocchi ed espressione risolutiva'],
    demon: ['The Tangled Arrow', 'la Freccia Aggrovigliata'],
    tech: ['Problem Form · Second Technique: Picture the Path', 'Stile dei Problemi · Seconda Tecnica: Disegna il Percorso'],
    lessons: [
      [
        '<p>🖍️ A drawing helps you understand a problem. With a <b>bar model</b> you draw quantities as strips: if Sara has 3 times as many stickers as Leo and Leo has 15, draw 1 strip for Leo and 3 equal strips for Sara.</p>',
        '<p>🖍️ Un disegno aiuta a capire un problema. Con il <b>modello a barre</b> rappresenti le quantità con dei segmenti: se Sara ha il triplo delle figurine di Leo e Leo ne ha 15, disegna 1 segmento per Leo e 3 segmenti uguali per Sara.</p>'
      ],
      [
        '<p>➡️ A <b>block diagram</b> (diagramma a blocchi) shows the order of the operations: each block takes two numbers, does one operation and passes the result on.</p><p>Example: 24 pencils shared into boxes of 6, then each box sold for €2: 24 ÷ 6 = 4 boxes → 4 × 2 = €8.</p>',
        '<p>➡️ Il <b>diagramma a blocchi</b> mostra l’ordine delle operazioni: ogni blocco prende due numeri, esegue un’operazione e passa il risultato al blocco successivo.</p><p>Esempio: 24 matite in scatole da 6, poi ogni scatola venduta a 2 €: 24 : 6 = 4 scatole → 4 × 2 = 8 €.</p>'
      ],
      [
        '<p>🧾 The diagram can be written as one <b>expression</b>: (24 ÷ 6) × 2 = 8. The brackets show what to do first.</p><p>In the same way, “I buy 3 pizzas at €7 and pay with €50” becomes 50 − (3 × 7) = 50 − 21 = <b>€29</b>.</p>',
        '<p>🧾 Il diagramma si può scrivere con un’unica <b>espressione</b>: (24 : 6) × 2 = 8. Le parentesi indicano che cosa fare prima.</p><p>Allo stesso modo «compro 3 pizze da 7 € e pago con 50 €» diventa 50 − (3 × 7) = 50 − 21 = <b>29 €</b>.</p>'
      ]
    ],
    quiz: [
      q('Leo has 15 stickers; Sara has three times as many. How many does Sara have?', 'Leo ha 15 figurine; Sara ne ha il triplo. Quante ne ha Sara?', [['45', '45'], ['18', '18'], ['30', '30'], ['5', '5']], ['Three times 15 is 15 × 3 = 45.', 'Il triplo di 15 è 15 × 3 = 45.']),
      q('Which expression solves: “3 pizzas at €7 each, paid with €50; find the change”?', 'Quale espressione risolve: «3 pizze da 7 € l’una, pagate con 50 €; trova il resto»?', [['50 − (3 × 7)', '50 − (3 × 7)'], ['(50 − 3) × 7', '(50 − 3) × 7'], ['50 + 3 × 7', '50 + 3 × 7'], ['50 ÷ 3 − 7', '50 : 3 − 7']], ['First the cost (3 × 7), then subtract it from 50.', 'Prima la spesa (3 × 7), poi la togli da 50.']),
      q('What is (24 ÷ 6) × 2?', 'Quanto vale (24 : 6) × 2?', [['8', '8'], ['2', '2'], ['12', '12'], ['36', '36']], ['24 ÷ 6 = 4, then 4 × 2 = 8.', '24 : 6 = 4, poi 4 × 2 = 8.']),
      q('What does a block diagram show?', 'Che cosa mostra un diagramma a blocchi?', [['The order of the operations', 'L’ordine delle operazioni'], ['Only the final answer', 'Solo la risposta finale'], ['The useless data', 'I dati inutili'], ['A graph of the data', 'Un grafico dei dati']], ['Each block is one step, in the order you perform them.', 'Ogni blocco è un passaggio, nell’ordine in cui lo esegui.'])
    ]
  }, problemsTaunt),
  makeG5MathMission({
    id: 'g5m-problem-strategies', sec: '1.3', pages: '15, 17', hue: 250,
    title: ['Different Roads, Same Destination', 'Strade diverse, stessa destinazione'],
    topic: ['Different solution strategies and checking results', 'Strategie risolutive diverse e controllo dei risultati'],
    demon: ['The One-Way Wraith', 'lo Spettro a Senso Unico'],
    tech: ['Problem Form · Third Technique: Many Paths', 'Stile dei Problemi · Terza Tecnica: Mille Sentieri'],
    lessons: [
      [
        '<p>🛤️ A problem can often be solved in <b>more than one way</b>. “A class buys 4 packs of 6 juices and 4 packs of 4 biscuits. How many items?”</p><ul><li>Way 1: 4 × 6 + 4 × 4 = 24 + 16 = 40</li><li>Way 2: 4 × (6 + 4) = 4 × 10 = 40</li></ul><p>Both roads reach the same destination!</p>',
        '<p>🛤️ Spesso un problema si può risolvere <b>in più modi</b>. «Una classe compra 4 confezioni da 6 succhi e 4 confezioni da 4 biscotti. Quanti oggetti in tutto?»</p><ul><li>Strada 1: 4 × 6 + 4 × 4 = 24 + 16 = 40</li><li>Strada 2: 4 × (6 + 4) = 4 × 10 = 40</li></ul><p>Entrambe le strade arrivano alla stessa destinazione!</p>'
      ],
      [
        '<p>🤔 Other strategies: <b>try and check</b> (guess, test, adjust), <b>work backwards</b> from the end, make a <b>table</b>, or solve a <b>simpler problem</b> first.</p><p>Comparing your method with a classmate’s helps you learn new ideas.</p>',
        '<p>🤔 Altre strategie: <b>procedere per tentativi</b> (provo, verifico, correggo), <b>partire dalla fine</b>, costruire una <b>tabella</b>, oppure risolvere prima un <b>problema più semplice</b>.</p><p>Confrontare il tuo metodo con quello di un compagno ti fa scoprire idee nuove.</p>'
      ],
      [
        '<p>🧐 Always <b>check the result</b>: is it reasonable? A child cannot be 140 years old and a school bag cannot weigh 300 kg! Make an <b>estimate</b> first and use the <b>inverse operation</b> to check: if 50 − 21 = 29, then 29 + 21 must be 50.</p>',
        '<p>🧐 <b>Controlla sempre il risultato</b>: è ragionevole? Un bambino non può avere 140 anni e uno zaino non può pesare 300 kg! Fai prima una <b>stima</b> e usa l’<b>operazione inversa</b> per verificare: se 50 − 21 = 29, allora 29 + 21 deve fare 50.</p>'
      ]
    ],
    quiz: [
      q('Which expression gives the same result as 4 × 6 + 4 × 4?', 'Quale espressione dà lo stesso risultato di 4 × 6 + 4 × 4?', [['4 × (6 + 4)', '4 × (6 + 4)'], ['4 + 6 × 4 + 4', '4 + 6 × 4 + 4'], ['(4 + 6) × (4 + 4)', '(4 + 6) × (4 + 4)'], ['4 × 6 × 4', '4 × 6 × 4']], ['Both give 40: 24 + 16 = 40 and 4 × 10 = 40.', 'Entrambe danno 40: 24 + 16 = 40 e 4 × 10 = 40.']),
      q('Which operation checks 63 ÷ 7 = 9?', 'Quale operazione verifica 63 : 7 = 9?', [['9 × 7 = 63', '9 × 7 = 63'], ['63 + 7 = 70', '63 + 7 = 70'], ['63 − 9 = 54', '63 − 9 = 54'], ['9 + 7 = 16', '9 + 7 = 16']], ['Multiplication is the inverse of division.', 'La moltiplicazione è l’operazione inversa della divisione.']),
      q('A problem asks for the mass of a school bag. Which answer is reasonable?', 'Un problema chiede la massa di uno zaino scolastico. Quale risposta è ragionevole?', [['6 kg', '6 kg'], ['600 kg', '600 kg'], ['6 g', '6 g'], ['60 000 kg', '60 000 kg']], ['A full school bag weighs a few kilograms.', 'Uno zaino pieno pesa qualche chilogrammo.']),
      q('“Think of a number, add 5 and you get 12.” Working backwards, what was the number?', '«Pensa un numero, aggiungi 5 e ottieni 12.» Partendo dalla fine, qual era il numero?', [['7', '7'], ['17', '17'], ['5', '5'], ['60', '60']], ['Undo the addition: 12 − 5 = 7.', 'Annulla l’addizione: 12 − 5 = 7.'])
    ]
  }, problemsTaunt),
  makeG5MathMission({
    id: 'g5m-proportional', sec: '1.4', pages: '16, 20', hue: 200,
    title: ['Proportional Problems', 'Problemi proporzionali'],
    topic: ['From one to many and from many to one; recipes and drinks (STEM)', 'Dall’unità al totale e dal totale all’unità; ricette e bevande (STEM)'],
    demon: ['The Unbalanced Jug', 'la Brocca Squilibrata'],
    tech: ['Problem Form · Fourth Technique: Fair Share', 'Stile dei Problemi · Quarta Tecnica: Giusta Proporzione'],
    lessons: [
      [
        '<p>⚖️ Two quantities are <b>directly proportional</b> when doubling one doubles the other. If 1 kg of apples costs €2, then 3 kg cost €6 and 5 kg cost €10.</p><p>The secret is to find the value of <b>one unit</b> first.</p>',
        '<p>⚖️ Due grandezze sono <b>direttamente proporzionali</b> quando, se una raddoppia, raddoppia anche l’altra. Se 1 kg di mele costa 2 €, allora 3 kg costano 6 € e 5 kg costano 10 €.</p><p>Il segreto è trovare prima il valore dell’<b>unità</b>.</p>'
      ],
      [
        '<p>🔁 <b>From many to one, then to many</b>: “4 notebooks cost €10. How much do 6 cost?”</p><ol><li>1 notebook: 10 ÷ 4 = €2.50</li><li>6 notebooks: 2.50 × 6 = <b>€15</b></li></ol>',
        '<p>🔁 <b>Dal totale all’unità, poi al nuovo totale</b>: «4 quaderni costano 10 €. Quanto costano 6 quaderni?»</p><ol><li>1 quaderno: 10 : 4 = 2,50 €</li><li>6 quaderni: 2,50 × 6 = <b>15 €</b></li></ol>'
      ],
      [
        '<p>🍋 <b>STEM – a thirst-quenching proportion</b>: a lemonade recipe uses 2 parts lemon juice for every 8 parts water. For 400 ml of water you need 400 ÷ 8 × 2 = <b>100 ml</b> of lemon juice. Keeping the same ratio keeps the same taste!</p>',
        '<p>🍋 <b>STEM – proporzioni dissetanti</b>: una ricetta di limonata usa 2 parti di succo di limone ogni 8 parti di acqua. Con 400 ml di acqua servono 400 : 8 × 2 = <b>100 ml</b> di succo. Mantenere lo stesso rapporto significa mantenere lo stesso sapore!</p>'
      ]
    ],
    quiz: [
      q('4 notebooks cost €10. How much do 6 notebooks cost?', '4 quaderni costano 10 €. Quanto costano 6 quaderni?', [['€15', '15 €'], ['€12', '12 €'], ['€16', '16 €'], ['€60', '60 €']], ['One costs 10 ÷ 4 = 2.50; six cost 2.50 × 6 = 15.', 'Uno costa 10 : 4 = 2,50; sei costano 2,50 × 6 = 15.']),
      q('A recipe for 4 people uses 400 g of pasta in total. How much pasta for 6 people?', 'Una ricetta per 4 persone usa in tutto 400 g di pasta. Quanta pasta serve per 6 persone?', [['600 g', '600 g'], ['500 g', '500 g'], ['240 g', '240 g'], ['800 g', '800 g']], ['400 ÷ 4 = 100 g each; 100 × 6 = 600 g.', '400 : 4 = 100 g a persona; 100 × 6 = 600 g.']),
      q('Lemonade: 2 parts juice for 8 parts water. How much juice for 400 ml of water?', 'Limonata: 2 parti di succo ogni 8 di acqua. Quanto succo per 400 ml di acqua?', [['100 ml', '100 ml'], ['50 ml', '50 ml'], ['200 ml', '200 ml'], ['1 600 ml', '1 600 ml']], ['400 ÷ 8 = 50, and 50 × 2 = 100 ml.', '400 : 8 = 50 e 50 × 2 = 100 ml.']),
      q('Which situation is directly proportional?', 'Quale situazione è di proporzionalità diretta?', [['Kilograms of apples and their total cost', 'Chilogrammi di mele e il costo totale'], ['A person’s age and height', 'L’età e l’altezza di una persona'], ['The day of the week and the weather', 'Il giorno della settimana e il tempo atmosferico'], ['A shoe size and a phone number', 'Il numero di scarpe e un numero di telefono']], ['Double the kilograms means double the cost, at the same price per kg.', 'Il doppio dei chili costa il doppio, a parità di prezzo al kg.'])
    ]
  }, problemsTaunt),
  makeG5MathMission({
    id: 'g5m-classification', sec: '1.5', pages: '21', hue: 180,
    title: ['Classifications', 'Classificazioni'],
    topic: ['Sorting with Venn, Carroll and tree diagrams', 'Classificare con diagrammi di Eulero-Venn, di Carroll e ad albero'],
    demon: ['The Sorting Hat Gremlin', 'lo Gnomo Sparpagliatore'],
    tech: ['Logic Form · First Technique: Perfect Sort', 'Stile della Logica · Prima Tecnica: Ordine Perfetto'],
    lessons: [
      { vis: 'g5m-venn', text: [
        '<p>🗂️ To <b>classify</b> means to sort objects by a <b>property</b> (a criterion). With a <b>Venn diagram</b> each set is a closed loop; elements with both properties go in the <b>intersection</b>, where the loops overlap.</p>',
        '<p>🗂️ <b>Classificare</b> significa raggruppare oggetti in base a una <b>proprietà</b> (un criterio). Nel <b>diagramma di Eulero-Venn</b> ogni insieme è una linea chiusa; gli elementi con entrambe le proprietà stanno nell’<b>intersezione</b>, dove le linee si sovrappongono.</p>'
      ] },
      [
        '<p>📋 A <b>Carroll diagram</b> is a table: rows for one property and its opposite (e.g. even / NOT even), columns for another (e.g. greater than 10 / NOT greater than 10). Every number fits in exactly one box.</p>',
        '<p>📋 Il <b>diagramma di Carroll</b> è una tabella: nelle righe c’è una proprietà e la sua negazione (es. pari / NON pari), nelle colonne un’altra (es. maggiore di 10 / NON maggiore di 10). Ogni numero va in una sola casella.</p>'
      ],
      [
        '<p>🌳 A <b>tree diagram</b> asks one yes/no question at each branch. Is it a polygon? Yes → does it have 3 sides? Yes → triangle. It is very useful for sorting step by step.</p>',
        '<p>🌳 Il <b>diagramma ad albero</b> pone una domanda sì/no a ogni ramificazione. È un poligono? Sì → ha 3 lati? Sì → triangolo. È molto utile per classificare un passo alla volta.</p>'
      ]
    ],
    quiz: [
      q('Set A = even numbers, set B = numbers greater than 10. Where does 12 go?', 'Insieme A = numeri pari, insieme B = numeri maggiori di 10. Dove va il 12?', [['In the intersection of A and B', 'Nell’intersezione di A e B'], ['Only in A', 'Solo in A'], ['Only in B', 'Solo in B'], ['Outside both sets', 'Fuori da entrambi gli insiemi']], ['12 is even and greater than 10.', '12 è pari e maggiore di 10.']),
      q('Using the same sets, where does 7 go?', 'Con gli stessi insiemi, dove va il 7?', [['Outside both sets', 'Fuori da entrambi gli insiemi'], ['Only in A', 'Solo in A'], ['Only in B', 'Solo in B'], ['In the intersection', 'Nell’intersezione']], ['7 is odd and not greater than 10.', '7 è dispari e non è maggiore di 10.']),
      q('What is the region where two Venn loops overlap called?', 'Come si chiama la zona in cui due insiemi di Venn si sovrappongono?', [['Intersection', 'Intersezione'], ['Perimeter', 'Perimetro'], ['Quotient', 'Quoziente'], ['Diameter', 'Diametro']], ['Elements with both properties belong to the intersection.', 'Gli elementi con entrambe le proprietà appartengono all’intersezione.']),
      q('In a Carroll diagram, how many boxes can one element go in?', 'In un diagramma di Carroll, in quante caselle può andare un elemento?', [['Exactly one', 'In una sola'], ['Two', 'In due'], ['All of them', 'In tutte'], ['None', 'In nessuna']], ['Each row and column pair a property with its opposite, so every element has one place.', 'Righe e colonne abbinano una proprietà alla sua negazione, quindi ogni elemento ha un solo posto.'])
    ]
  }, problemsTaunt),
  makeG5MathMission({
    id: 'g5m-logic-statements', sec: '1.6', pages: '22–23', hue: 165,
    title: ['Statements and Connectives', 'Enunciati e connettivi'],
    topic: ['True and false statements; the connectives AND, OR, NOT', 'Enunciati veri e falsi; i connettivi E, O, NON'],
    demon: ['The Liar Lynx', 'la Lince Bugiarda'],
    tech: ['Logic Form · Second Technique: Truth Lens', 'Stile della Logica · Seconda Tecnica: Lente della Verità'],
    lessons: [
      [
        '<p>💬 A <b>statement</b> (enunciato) is a sentence that is either <b>true</b> or <b>false</b>. “Rome is the capital of Italy” is true. “7 is an even number” is false. “Close the door!” is <b>not</b> a statement: it is neither true nor false.</p>',
        '<p>💬 Un <b>enunciato</b> è una frase di cui si può dire con certezza se è <b>vera</b> o <b>falsa</b>. «Roma è la capitale d’Italia» è vera. «7 è un numero pari» è falsa. «Chiudi la porta!» <b>non</b> è un enunciato: non è né vera né falsa.</p>'
      ],
      [
        '<p>🔗 <b>Connectives</b> join statements:</p><ul><li><b>AND</b> (e): true only if <b>both</b> parts are true;</li><li><b>OR</b> (o): true if <b>at least one</b> part is true;</li><li><b>NOT</b> (non): turns true into false and false into true.</li></ul>',
        '<p>🔗 I <b>connettivi</b> uniscono gli enunciati:</p><ul><li><b>E</b>: l’enunciato è vero solo se <b>entrambe</b> le parti sono vere;</li><li><b>O</b>: è vero se <b>almeno una</b> parte è vera;</li><li><b>NON</b>: trasforma il vero in falso e il falso in vero.</li></ul>'
      ],
      [
        '<p>🧠 Examples: “8 is even AND greater than 5” → true. “3 is even OR 3 is odd” → true. “It is NOT true that a square has 5 sides” → true.</p><p>Logic helps you read problem texts and Invalsi questions precisely.</p>',
        '<p>🧠 Esempi: «8 è pari E maggiore di 5» → vero. «3 è pari O 3 è dispari» → vero. «NON è vero che il quadrato ha 5 lati» → vero.</p><p>La logica ti aiuta a leggere con precisione i testi dei problemi e le domande Invalsi.</p>'
      ]
    ],
    quiz: [
      q('Which sentence is a statement (true or false)?', 'Quale frase è un enunciato (vero o falso)?', [['9 is greater than 4', '9 è maggiore di 4'], ['What time is it?', 'Che ore sono?'], ['Open your book!', 'Apri il libro!'], ['How beautiful!', 'Che bello!']], ['Only “9 is greater than 4” can be judged true or false.', 'Solo «9 è maggiore di 4» si può giudicare vero o falso.']),
      q('“10 is even AND 10 is less than 5.” Is it true or false?', '«10 è pari E 10 è minore di 5.» È vero o falso?', [['False', 'Falso'], ['True', 'Vero'], ['Both', 'Entrambi'], ['It is not a statement', 'Non è un enunciato']], ['With AND both parts must be true, but 10 is not less than 5.', 'Con E devono essere vere entrambe le parti, ma 10 non è minore di 5.']),
      q('“A triangle has 3 sides OR 4 sides.” Is it true or false?', '«Un triangolo ha 3 lati O 4 lati.» È vero o falso?', [['True', 'Vero'], ['False', 'Falso'], ['Impossible to say', 'Non si può dire'], ['It is a question', 'È una domanda']], ['With OR, one true part is enough.', 'Con O basta che una parte sia vera.']),
      q('The statement “7 is even” is false. What is “7 is NOT even”?', 'L’enunciato «7 è pari» è falso. Com’è «7 NON è pari»?', [['True', 'Vero'], ['False', 'Falso'], ['Sometimes true', 'A volte vero'], ['Not a statement', 'Non è un enunciato']], ['NOT turns a false statement into a true one.', 'NON trasforma un enunciato falso in vero.'])
    ]
  }, problemsTaunt),
  makeG5MathMission({
    id: 'g5m-statistics-graphs', sec: '1.7', pages: '24–26, 28', hue: 150,
    title: ['Statistical Data and Graphs', 'Dati statistici e grafici'],
    topic: ['Surveys, frequency, qualitative and quantitative data; bar, line, pie and pictograms; graphs from the world', 'Indagini, frequenza, dati qualitativi e quantitativi; istogrammi, linee, aerogrammi e ideogrammi; grafici dal mondo'],
    demon: ['The Graph Smudger', 'lo Sbavatore di Grafici'],
    tech: ['Data Form · First Technique: Clear Chart', 'Stile dei Dati · Prima Tecnica: Grafico Nitido'],
    lessons: [
      { vis: 'g5m-bar-chart', text: [
        '<p>📋 <b>Statistics</b> collects and organises data with a <b>survey</b>. The <b>frequency</b> is how many times a datum appears. Data can be <b>qualitative</b> (words: favourite colour, sport) or <b>quantitative</b> (numbers: height, age, marks).</p>',
        '<p>📋 La <b>statistica</b> raccoglie e organizza i dati con un’<b>indagine</b>. La <b>frequenza</b> indica quante volte compare un dato. I dati possono essere <b>qualitativi</b> (parole: colore preferito, sport) o <b>quantitativi</b> (numeri: altezza, età, voti).</p>'
      ] },
      [
        '<p>📊 Choose the right graph:</p><ul><li><b>bar chart (histogram)</b>: compares frequencies;</li><li><b>pictogram</b>: uses symbols, each worth a number;</li><li><b>line graph</b>: shows how something changes over time;</li><li><b>pie chart (aerogramma)</b>: shows the parts of a whole, often as percentages.</li></ul>',
        '<p>📊 Scegli il grafico giusto:</p><ul><li>l’<b>istogramma</b>: confronta le frequenze;</li><li>l’<b>ideogramma</b>: usa simboli che valgono un certo numero;</li><li>il <b>diagramma cartesiano a linee</b>: mostra come qualcosa cambia nel tempo;</li><li>l’<b>aerogramma</b> (a torta): mostra le parti di un intero, spesso in percentuale.</li></ul>'
      ],
      [
        '<p>🌍 <b>Graphs from the world</b>: newspapers and websites use graphs to describe temperatures, populations and sports results. Always read the <b>title</b>, the <b>axes</b> and the <b>unit</b> before drawing conclusions — a graph can be misleading if the scale does not start at zero!</p>',
        '<p>🌍 <b>Grafici dal mondo</b>: giornali e siti usano grafici per descrivere temperature, popolazioni e risultati sportivi. Leggi sempre il <b>titolo</b>, gli <b>assi</b> e l’<b>unità di misura</b> prima di trarre conclusioni: un grafico può ingannare se la scala non parte da zero!</p>'
      ]
    ],
    quiz: [
      q('Which datum is qualitative?', 'Quale dato è qualitativo?', [['Favourite sport', 'Lo sport preferito'], ['Height in cm', 'L’altezza in cm'], ['Age in years', 'L’età in anni'], ['Number of siblings', 'Il numero di fratelli']], ['A favourite sport is expressed with words, not numbers.', 'Lo sport preferito si esprime con parole, non con numeri.']),
      q('Which graph best shows how a city’s temperature changes during a week?', 'Quale grafico mostra meglio come cambia la temperatura di una città durante una settimana?', [['A line graph', 'Un diagramma a linee'], ['A pie chart', 'Un aerogramma'], ['A Venn diagram', 'Un diagramma di Venn'], ['A tree diagram', 'Un diagramma ad albero']], ['Line graphs show change over time.', 'I grafici a linee mostrano un cambiamento nel tempo.']),
      q('In a pictogram each ★ is worth 4 pupils. How many pupils do 5 ★ represent?', 'In un ideogramma ogni ★ vale 4 alunni. Quanti alunni rappresentano 5 ★?', [['20', '20'], ['9', '9'], ['5', '5'], ['45', '45']], ['5 × 4 = 20 pupils.', '5 × 4 = 20 alunni.']),
      q('In a survey, “pizza” was chosen 8 times. What is 8?', 'In un’indagine «pizza» è stata scelta 8 volte. Che cos’è 8?', [['The frequency of “pizza”', 'La frequenza di «pizza»'], ['The mean', 'La media'], ['The total of the survey', 'Il totale dell’indagine'], ['A percentage', 'Una percentuale']], ['Frequency = how many times a value appears.', 'Frequenza = quante volte compare un valore.'])
    ]
  }, problemsTaunt),
  makeG5MathMission({
    id: 'g5m-mode-mean-median', sec: '1.8', pages: '27', hue: 135,
    title: ['Mode, Mean and Median', 'Indici statistici: moda, media, mediana'],
    topic: ['The three statistical indices and when to use them', 'I tre indici statistici e quando usarli'],
    demon: ['The Average Ogre', 'l’Orco della Media'],
    tech: ['Data Form · Second Technique: Centre Finder', 'Stile dei Dati · Seconda Tecnica: Trova il Centro'],
    lessons: [
      [
        '<p>🎯 Marks in a test: <b>6, 8, 7, 8, 9</b>.</p><ul><li><b>Mode</b>: the value with the highest frequency → <b>8</b> (it appears twice).</li><li>It works with qualitative data too: the most chosen colour is the mode.</li></ul>',
        '<p>🎯 Voti di una verifica: <b>6, 8, 7, 8, 9</b>.</p><ul><li><b>Moda</b>: il valore con la frequenza più alta → <b>8</b> (compare due volte).</li><li>Si usa anche con i dati qualitativi: il colore più scelto è la moda.</li></ul>'
      ],
      [
        '<p>➗ <b>Mean</b> (arithmetic average): add all values and divide by how many there are: (6 + 8 + 7 + 8 + 9) ÷ 5 = 38 ÷ 5 = <b>7.6</b>.</p><p>The mean only makes sense with <b>numbers</b>.</p>',
        '<p>➗ <b>Media aritmetica</b>: si sommano tutti i valori e si divide per quanti sono: (6 + 8 + 7 + 8 + 9) : 5 = 38 : 5 = <b>7,6</b>.</p><p>La media ha senso solo con dati <b>numerici</b>.</p>'
      ],
      [
        '<p>📏 <b>Median</b>: put the values <b>in order</b> and take the one in the middle: 6, 7, <b>8</b>, 8, 9 → median 8. With an even number of values, the median is the mean of the two middle values: 2, 4, 6, 10 → (4 + 6) ÷ 2 = <b>5</b>.</p>',
        '<p>📏 <b>Mediana</b>: metti i valori <b>in ordine</b> e prendi quello centrale: 6, 7, <b>8</b>, 8, 9 → mediana 8. Se i valori sono in numero pari, la mediana è la media dei due centrali: 2, 4, 6, 10 → (4 + 6) : 2 = <b>5</b>.</p>'
      ]
    ],
    quiz: [
      q('What is the mode of 3, 5, 5, 6, 9?', 'Qual è la moda di 3, 5, 5, 6, 9?', [['5', '5'], ['6', '6'], ['3', '3'], ['9', '9']], ['5 appears most often.', 'Il 5 compare più volte.']),
      q('What is the mean of 4, 6, 8?', 'Qual è la media di 4, 6, 8?', [['6', '6'], ['18', '18'], ['8', '8'], ['4', '4']], ['(4 + 6 + 8) ÷ 3 = 18 ÷ 3 = 6.', '(4 + 6 + 8) : 3 = 18 : 3 = 6.']),
      q('What is the median of 9, 2, 7, 4, 5?', 'Qual è la mediana di 9, 2, 7, 4, 5?', [['5', '5'], ['7', '7'], ['4', '4'], ['27', '27']], ['In order: 2, 4, 5, 7, 9; the middle value is 5.', 'In ordine: 2, 4, 5, 7, 9; il valore centrale è 5.']),
      q('Favourite colours: red, blue, red, green. Which index can you use?', 'Colori preferiti: rosso, blu, rosso, verde. Quale indice puoi usare?', [['The mode', 'La moda'], ['The mean', 'La media'], ['The median', 'La mediana'], ['None of them', 'Nessuno']], ['Colours are qualitative data: only the mode applies.', 'I colori sono dati qualitativi: si può usare solo la moda.'])
    ]
  }, problemsTaunt),
  makeG5MathMission({
    id: 'g5m-probability', sec: '1.9', pages: '29–30', hue: 120,
    title: ['Probability and Percentages', 'Probabilità e percentuali'],
    topic: ['Certain, possible and impossible events; probability as a fraction and a percentage', 'Eventi certi, possibili e impossibili; la probabilità come frazione e come percentuale'],
    demon: ['The Dice Trickster', 'il Truffatore dei Dadi'],
    tech: ['Data Form · Third Technique: Lucky Sense', 'Stile dei Dati · Terza Tecnica: Fiuto della Fortuna'],
    lessons: [
      [
        '<p>🎲 An event can be <b>certain</b> (it will surely happen), <b>impossible</b> (it can never happen) or <b>possible / probable</b> (it may happen).</p><p>Rolling a normal die: “a number less than 7” is certain; “an 8” is impossible; “a 6” is possible.</p>',
        '<p>🎲 Un evento può essere <b>certo</b> (accadrà sicuramente), <b>impossibile</b> (non può mai accadere) o <b>possibile / probabile</b> (può accadere).</p><p>Lanciando un dado normale: «un numero minore di 7» è certo; «un 8» è impossibile; «un 6» è possibile.</p>'
      ],
      [
        '<p>🔢 We measure probability with a fraction:</p><p style="text-align:center"><b>probability = favourable cases ÷ possible cases</b></p><p>A bag has 3 red and 1 blue marble. The probability of red is <b>3/4</b>; of blue, <b>1/4</b>. A certain event has probability 1; an impossible one, 0.</p>',
        '<p>🔢 La probabilità si misura con una frazione:</p><p style="text-align:center"><b>probabilità = casi favorevoli : casi possibili</b></p><p>Un sacchetto contiene 3 biglie rosse e 1 blu. La probabilità di estrarre una rossa è <b>3/4</b>; una blu, <b>1/4</b>. Un evento certo ha probabilità 1; uno impossibile, 0.</p>'
      ],
      [
        '<p>💯 Probability can also be written as a <b>percentage</b>: 3/4 = 75/100 = <b>75%</b>, 1/2 = 50%, 1/4 = 25%. Two events with the same probability are <b>equally probable</b>, like heads or tails when tossing a coin (50% each).</p>',
        '<p>💯 La probabilità si può scrivere anche in <b>percentuale</b>: 3/4 = 75/100 = <b>75%</b>, 1/2 = 50%, 1/4 = 25%. Due eventi con la stessa probabilità sono <b>equiprobabili</b>, come testa o croce lanciando una moneta (50% ciascuno).</p>'
      ]
    ],
    quiz: [
      q('Rolling a normal die, what is the probability of getting 5?', 'Lanciando un dado normale, qual è la probabilità di ottenere 5?', [['1/6', '1/6'], ['1/5', '1/5'], ['5/6', '5/6'], ['1/2', '1/2']], ['One favourable case out of 6 possible cases.', 'Un caso favorevole su 6 casi possibili.']),
      q('A bag has 3 red and 1 blue marble. What is the probability of red, as a percentage?', 'Un sacchetto ha 3 biglie rosse e 1 blu. Qual è la probabilità di estrarre una rossa, in percentuale?', [['75%', '75%'], ['25%', '25%'], ['30%', '30%'], ['3%', '3%']], ['3/4 = 75/100 = 75%.', '3/4 = 75/100 = 75%.']),
      q('Rolling a normal die, which event is impossible?', 'Lanciando un dado normale, quale evento è impossibile?', [['Getting 7', 'Ottenere 7'], ['Getting an even number', 'Ottenere un numero pari'], ['Getting 1', 'Ottenere 1'], ['Getting a number less than 7', 'Ottenere un numero minore di 7']], ['A die only has faces from 1 to 6.', 'Un dado ha solo facce da 1 a 6.']),
      q('Tossing a coin, heads and tails are…', 'Lanciando una moneta, testa e croce sono…', [['Equally probable', 'Equiprobabili'], ['Both impossible', 'Entrambe impossibili'], ['Both certain', 'Entrambe certe'], ['Heads is more probable', 'Testa è più probabile']], ['Each has probability 1/2 = 50%.', 'Ciascuna ha probabilità 1/2 = 50%.'])
    ]
  }, problemsTaunt),
  makeG5MathMission({
    id: 'g5m-problems-review', sec: '1.10', pages: '31–35', hue: 100,
    title: ['Check-Up: Problems, Data and Predictions', 'Adesso so: problemi, dati e previsioni'],
    topic: ['Exercises, summary map, test and Invalsi-style questions for the unit', 'Esercizi, mappa di sintesi, verifica e quesiti verso l’Invalsi dell’unità'],
    demon: ['The Unit Guardian of Data', 'il Guardiano dei Dati'],
    tech: ['Data Form · Mastery Seal: Problem Solver', 'Stile dei Dati · Sigillo di Maestria: Risolutore di Problemi'],
    lessons: [
      [
        '<p>🗺️ <b>Let’s see it clearly</b> — summary of the unit:</p><ul><li>problem = data + question; watch out for useless, missing and hidden data;</li><li>diagrams and expressions organise the solution; always check the result;</li><li>proportional problems: find the value of one unit first.</li></ul>',
        '<p>🗺️ <b>Vediamoci chiaro</b> — sintesi dell’unità:</p><ul><li>problema = dati + domanda; attenzione ai dati inutili, mancanti e nascosti;</li><li>diagrammi ed espressioni organizzano la soluzione; controlla sempre il risultato;</li><li>problemi proporzionali: trova prima il valore dell’unità.</li></ul>'
      ],
      [
        '<p>📊 Data and predictions:</p><ul><li>classify with Venn, Carroll and tree diagrams;</li><li>AND needs both parts true, OR needs at least one;</li><li>mode = most frequent, mean = sum ÷ number of values, median = middle value in order;</li><li>probability = favourable ÷ possible cases.</li></ul>',
        '<p>📊 Dati e previsioni:</p><ul><li>classifica con diagrammi di Venn, di Carroll e ad albero;</li><li>con E servono entrambe le parti vere, con O ne basta una;</li><li>moda = valore più frequente, media = somma : numero dei valori, mediana = valore centrale in ordine;</li><li>probabilità = casi favorevoli : casi possibili.</li></ul>'
      ],
      [
        '<p>🏁 <b>Towards Invalsi</b>: read every option before choosing, underline the key words of the question and, when you can, check your answer with a quick estimate. Ready for the unit test?</p>',
        '<p>🏁 <b>Verso l’Invalsi</b>: leggi tutte le opzioni prima di scegliere, sottolinea le parole chiave della domanda e, quando puoi, controlla la risposta con una stima veloce. Pronta e pronto per la verifica?</p>'
      ]
    ],
    quiz: [
      q('Points scored in 4 games: 10, 14, 6, 10. What is the mean?', 'Punti segnati in 4 partite: 10, 14, 6, 10. Qual è la media?', [['10', '10'], ['14', '14'], ['40', '40'], ['8', '8']], ['(10 + 14 + 6 + 10) ÷ 4 = 40 ÷ 4 = 10.', '(10 + 14 + 6 + 10) : 4 = 40 : 4 = 10.']),
      q('A spinner has 8 equal sectors, 2 of them yellow. What is the probability of yellow?', 'Una ruota ha 8 settori uguali, 2 gialli. Qual è la probabilità del giallo?', [['2/8 = 1/4', '2/8 = 1/4'], ['1/2', '1/2'], ['2/6', '2/6'], ['8/2', '8/2']], ['2 favourable out of 8 possible; 2/8 simplifies to 1/4.', '2 casi favorevoli su 8 possibili; 2/8 si semplifica in 1/4.']),
      q('3 kg of flour cost €4.50. How much do 5 kg cost?', '3 kg di farina costano 4,50 €. Quanto costano 5 kg?', [['€7.50', '7,50 €'], ['€6.50', '6,50 €'], ['€9.00', '9,00 €'], ['€22.50', '22,50 €']], ['1 kg costs 4.50 ÷ 3 = 1.50; 5 kg cost 1.50 × 5 = 7.50.', '1 kg costa 4,50 : 3 = 1,50; 5 kg costano 1,50 × 5 = 7,50.']),
      q('Which statement is true?', 'Quale enunciato è vero?', [['“15 is odd AND greater than 10”', '«15 è dispari E maggiore di 10»'], ['“15 is even OR less than 10”', '«15 è pari O minore di 10»'], ['“15 is NOT odd”', '«15 NON è dispari»'], ['“15 is even AND odd”', '«15 è pari E dispari»']], ['15 is odd and 15 > 10, so the AND statement is true.', '15 è dispari e 15 > 10, quindi l’enunciato con E è vero.'])
    ]
  }, problemsTaunt)
];
