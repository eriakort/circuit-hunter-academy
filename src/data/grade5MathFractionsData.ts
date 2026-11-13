import type { Mission } from '../types';
import { makeG5MathMission, q, type Pair } from './grade5MathCommon';

const fractionsTaunt = (demon: Pair): Pair => [
  `<p>🍰 I am ${demon[0]}! I cut wholes into unequal pieces and swap numerators with denominators. Can you share things fairly?</p>`,
  `<p>🍰 Sono ${demon[1]}! Taglio gli interi in parti diverse e scambio numeratori e denominatori. Sai fare le parti giuste?</p>`
];

/** Frazioni e numeri decimali · pages 76–95. */
export const GRADE5_MATH_FRACTIONS_MISSIONS: Mission[] = [
  makeG5MathMission({
    id: 'g5m-fractions', sec: '3.1', pages: '77–78', hue: 15,
    title: ['Fractions and Their Classes', 'Le frazioni e la loro classificazione'],
    topic: ['Unit, proper, improper and apparent fractions; complementary fractions', 'Frazioni unitarie, proprie, improprie e apparenti; frazioni complementari'],
    demon: ['The Uneven Slicer', 'l’Affettatore Storto'],
    tech: ['Fraction Form · First Technique: Fair Slice', 'Stile delle Frazioni · Prima Tecnica: Fetta Giusta'],
    lessons: [
      { vis: 'g5m-fraction-bar', text: [
        '<p>🍫 To <b>fractionate</b> a whole means to split it into <b>equal parts</b>. The <b>denominator</b> (below the line) says into how many parts; the <b>numerator</b> (above) says how many parts are taken. A fraction with numerator 1, like 1/5, is a <b>unit fraction</b>.</p>',
        '<p>🍫 <b>Frazionare</b> un intero significa dividerlo in <b>parti uguali</b>. Il <b>denominatore</b> (sotto la linea di frazione) dice in quante parti; il <b>numeratore</b> (sopra) dice quante parti si prendono. Una frazione con numeratore 1, come 1/5, è una <b>frazione unitaria</b>.</p>'
      ] },
      [
        '<p>🗂️ Classifying fractions:</p><ul><li><b>proper</b>: numerator &lt; denominator → less than 1 whole (3/4);</li><li><b>improper</b>: numerator &gt; denominator → more than 1 whole (7/4);</li><li><b>apparent</b>: numerator is a multiple of the denominator → whole numbers (8/4 = 2, 5/5 = 1).</li></ul>',
        '<p>🗂️ Classificare le frazioni:</p><ul><li><b>proprie</b>: numeratore &lt; denominatore → meno di un intero (3/4);</li><li><b>improprie</b>: numeratore &gt; denominatore → più di un intero (7/4);</li><li><b>apparenti</b>: il numeratore è multiplo del denominatore → rappresentano interi (8/4 = 2, 5/5 = 1).</li></ul>'
      ],
      [
        '<p>🧩 Two fractions are <b>complementary</b> if together they make the whole: 3/8 and 5/8 (3/8 + 5/8 = 8/8 = 1). If you eat 3/8 of a pizza, 5/8 is left.</p>',
        '<p>🧩 Due frazioni sono <b>complementari</b> se insieme formano l’intero: 3/8 e 5/8 (3/8 + 5/8 = 8/8 = 1). Se mangi 3/8 di una pizza, ne restano 5/8.</p>'
      ]
    ],
    quiz: [
      q('Which fraction is improper?', 'Quale frazione è impropria?', [['9/4', '9/4'], ['3/4', '3/4'], ['8/4', '8/4'], ['1/4', '1/4']], ['9 > 4 and 9 is not a multiple of 4, so it is more than one whole.', '9 > 4 e 9 non è multiplo di 4, quindi è più di un intero.']),
      q('Which fraction is apparent?', 'Quale frazione è apparente?', [['12/3', '12/3'], ['3/12', '3/12'], ['13/3', '13/3'], ['2/3', '2/3']], ['12/3 = 4, a whole number.', '12/3 = 4, un numero intero.']),
      q('What is the complementary fraction of 3/8?', 'Qual è la frazione complementare di 3/8?', [['5/8', '5/8'], ['3/5', '3/5'], ['8/3', '8/3'], ['1/8', '1/8']], ['3/8 + 5/8 = 8/8 = 1 whole.', '3/8 + 5/8 = 8/8 = 1 intero.']),
      q('In 5/9, what does the 9 tell us?', 'In 5/9, che cosa indica il 9?', [['Into how many equal parts the whole is split', 'In quante parti uguali si divide l’intero'], ['How many parts are taken', 'Quante parti si prendono'], ['How many wholes there are', 'Quanti interi ci sono'], ['The remainder', 'Il resto']], ['The denominator tells the number of equal parts.', 'Il denominatore indica il numero di parti uguali.'])
    ]
  }, fractionsTaunt),
  makeG5MathMission({
    id: 'g5m-equivalent-fractions', sec: '3.2', pages: '79', hue: 30,
    title: ['Equivalent Fractions', 'Frazioni equivalenti'],
    topic: ['Building equivalent fractions and simplifying to lowest terms', 'Costruire frazioni equivalenti e ridurre ai minimi termini'],
    demon: ['The Twin Trickster', 'il Gemello Ingannatore'],
    tech: ['Fraction Form · Second Technique: Twin Parts', 'Stile delle Frazioni · Seconda Tecnica: Parti Gemelle'],
    lessons: [
      [
        '<p>👯 <b>Equivalent fractions</b> represent the <b>same quantity</b> with different numbers: 1/2 = 2/4 = 4/8. Half a pizza is the same as two quarters!</p>',
        '<p>👯 Le <b>frazioni equivalenti</b> rappresentano la <b>stessa quantità</b> con numeri diversi: 1/2 = 2/4 = 4/8. Mezza pizza è uguale a due quarti di pizza!</p>'
      ],
      [
        '<p>✖️ To build an equivalent fraction, <b>multiply or divide numerator and denominator by the same number</b> (the invariant property again!): 3/5 → (3 × 4)/(5 × 4) = 12/20.</p>',
        '<p>✖️ Per ottenere una frazione equivalente <b>moltiplica o dividi numeratore e denominatore per lo stesso numero</b> (ancora la proprietà invariantiva!): 3/5 → (3 × 4)/(5 × 4) = 12/20.</p>'
      ],
      [
        '<p>✂️ <b>Simplifying</b>: divide both terms by a common divisor until it is no longer possible. 18/24 → ÷ 2 → 9/12 → ÷ 3 → <b>3/4</b>. A fraction that cannot be simplified further is in its <b>lowest terms</b> (ridotta ai minimi termini).</p>',
        '<p>✂️ <b>Semplificare</b>: dividi entrambi i termini per un divisore comune finché non è più possibile. 18/24 → : 2 → 9/12 → : 3 → <b>3/4</b>. Una frazione che non si può più semplificare è <b>ridotta ai minimi termini</b>.</p>'
      ]
    ],
    quiz: [
      q('Which fraction is equivalent to 3/5?', 'Quale frazione è equivalente a 3/5?', [['12/20', '12/20'], ['6/8', '6/8'], ['5/3', '5/3'], ['3/10', '3/10']], ['Multiply both terms by 4.', 'Moltiplico entrambi i termini per 4.']),
      q('Simplify 18/24 to its lowest terms.', 'Riduci 18/24 ai minimi termini.', [['3/4', '3/4'], ['9/12', '9/12'], ['6/8', '6/8'], ['2/3', '2/3']], ['Divide both terms by 6: 18 ÷ 6 = 3 and 24 ÷ 6 = 4.', 'Divido entrambi i termini per 6: 18 : 6 = 3 e 24 : 6 = 4.']),
      q('Which pair is NOT equivalent?', 'Quale coppia NON è equivalente?', [['2/3 and 3/4', '2/3 e 3/4'], ['1/2 and 4/8', '1/2 e 4/8'], ['2/5 and 4/10', '2/5 e 4/10'], ['3/9 and 1/3', '3/9 e 1/3']], ['2/3 = 8/12 while 3/4 = 9/12.', '2/3 = 8/12 mentre 3/4 = 9/12.']),
      q('Complete: 4/7 = ?/21', 'Completa: 4/7 = ?/21', [['12', '12'], ['18', '18'], ['7', '7'], ['4', '4']], ['7 × 3 = 21, so 4 × 3 = 12.', '7 × 3 = 21, quindi 4 × 3 = 12.'])
    ]
  }, fractionsTaunt),
  makeG5MathMission({
    id: 'g5m-compare-fractions', sec: '3.3', pages: '80', hue: 45,
    title: ['Comparing Fractions', 'Confrontare le frazioni'],
    topic: ['Same denominator, same numerator, different denominators; adding fractions with the same denominator', 'Stesso denominatore, stesso numeratore, denominatori diversi; addizioni di frazioni con lo stesso denominatore'],
    demon: ['The Scale Tipper', 'il Ribalta-Bilance'],
    tech: ['Fraction Form · Third Technique: Balanced Scale', 'Stile delle Frazioni · Terza Tecnica: Bilancia Esatta'],
    lessons: [
      [
        '<p>⚖️ <b>Same denominator</b>: the fraction with the bigger numerator is bigger: 5/8 &gt; 3/8.</p><p><b>Same numerator</b>: the fraction with the <b>smaller</b> denominator is bigger, because its parts are larger: 1/3 &gt; 1/5 (a third of a cake is bigger than a fifth).</p>',
        '<p>⚖️ <b>Stesso denominatore</b>: è maggiore la frazione con il numeratore più grande: 5/8 &gt; 3/8.</p><p><b>Stesso numeratore</b>: è maggiore la frazione con il denominatore <b>più piccolo</b>, perché le sue parti sono più grandi: 1/3 &gt; 1/5 (un terzo di torta è più di un quinto).</p>'
      ],
      [
        '<p>🔁 <b>Different denominators</b>: turn them into equivalent fractions with the same denominator. 2/3 and 3/4 → 8/12 and 9/12 → so <b>3/4 &gt; 2/3</b>. You can also compare their decimal values: 0.66… and 0.75.</p>',
        '<p>🔁 <b>Denominatori diversi</b>: trasformale in frazioni equivalenti con lo stesso denominatore. 2/3 e 3/4 → 8/12 e 9/12 → quindi <b>3/4 &gt; 2/3</b>. Puoi anche confrontare i loro valori decimali: 0,66… e 0,75.</p>'
      ],
      [
        '<p>➕ With the <b>same denominator</b>, add or subtract only the numerators: 2/7 + 3/7 = 5/7; 7/9 − 4/9 = 3/9 = 1/3. The denominator stays the same because the size of the parts does not change.</p>',
        '<p>➕ Con lo <b>stesso denominatore</b> si addizionano o si sottraggono solo i numeratori: 2/7 + 3/7 = 5/7; 7/9 − 4/9 = 3/9 = 1/3. Il denominatore resta uguale perché la grandezza delle parti non cambia.</p>'
      ]
    ],
    quiz: [
      q('Which fraction is bigger: 1/3 or 1/5?', 'Quale frazione è maggiore: 1/3 o 1/5?', [['1/3', '1/3'], ['1/5', '1/5'], ['They are equal', 'Sono uguali'], ['It cannot be decided', 'Non si può stabilire']], ['Same numerator: the smaller denominator gives bigger parts.', 'Stesso numeratore: il denominatore più piccolo dà parti più grandi.']),
      q('Which is bigger: 2/3 or 3/4?', 'Quale è maggiore: 2/3 o 3/4?', [['3/4', '3/4'], ['2/3', '2/3'], ['They are equal', 'Sono uguali'], ['Neither is a fraction', 'Nessuna delle due è una frazione']], ['8/12 < 9/12.', '8/12 < 9/12.']),
      q('What is 2/7 + 3/7?', 'Quanto fa 2/7 + 3/7?', [['5/7', '5/7'], ['5/14', '5/14'], ['6/7', '6/7'], ['1/7', '1/7']], ['Add the numerators, keep the denominator.', 'Si sommano i numeratori, il denominatore resta uguale.']),
      q('Order from smallest: 5/8, 1/8, 7/8', 'Ordina dalla più piccola: 5/8, 1/8, 7/8', [['1/8, 5/8, 7/8', '1/8, 5/8, 7/8'], ['7/8, 5/8, 1/8', '7/8, 5/8, 1/8'], ['5/8, 1/8, 7/8', '5/8, 1/8, 7/8'], ['1/8, 7/8, 5/8', '1/8, 7/8, 5/8']], ['Same denominator: order the numerators 1 < 5 < 7.', 'Stesso denominatore: ordino i numeratori 1 < 5 < 7.'])
    ]
  }, fractionsTaunt),
  makeG5MathMission({
    id: 'g5m-fractions-decimals', sec: '3.4', pages: '81–82', hue: 60,
    title: ['Fractions and Decimal Numbers', 'Frazioni e numeri decimali'],
    topic: ['Decimal fractions, converting fractions to decimals and placing them on the number line', 'Frazioni decimali, trasformare frazioni in numeri decimali e collocarle sulla retta'],
    demon: ['The Line Jumper', 'il Saltaretta'],
    tech: ['Fraction Form · Fourth Technique: Two Faces', 'Stile delle Frazioni · Quarta Tecnica: Due Volti'],
    lessons: [
      [
        '<p>🔟 <b>Decimal fractions</b> have denominator 10, 100, 1 000…: 7/10 = 0.7; 35/100 = 0.35; 4/1 000 = 0.004. The number of zeros in the denominator equals the number of decimal places.</p>',
        '<p>🔟 Le <b>frazioni decimali</b> hanno denominatore 10, 100, 1 000…: 7/10 = 0,7; 35/100 = 0,35; 4/1 000 = 0,004. Il numero di zeri del denominatore è uguale al numero di cifre decimali.</p>'
      ],
      [
        '<p>➗ Any fraction is a <b>division</b>: numerator ÷ denominator. 3/4 = 3 ÷ 4 = <b>0.75</b>; 1/2 = 0.5; 1/5 = 0.2; 7/4 = 1.75. Or find an equivalent decimal fraction: 3/4 = 75/100 = 0.75.</p>',
        '<p>➗ Ogni frazione è una <b>divisione</b>: numeratore : denominatore. 3/4 = 3 : 4 = <b>0,75</b>; 1/2 = 0,5; 1/5 = 0,2; 7/4 = 1,75. Oppure trova una frazione decimale equivalente: 3/4 = 75/100 = 0,75.</p>'
      ],
      [
        '<p>📏 On the <b>number line</b>, 7/4 = 1.75 lies <b>between 1.5 and 2</b>. Improper fractions are always to the right of 1. This is a typical Invalsi question!</p>',
        '<p>📏 Sulla <b>retta dei numeri</b> 7/4 = 1,75 si trova <b>tra 1,5 e 2</b>. Le frazioni improprie stanno sempre a destra dell’1. È una domanda tipica delle prove Invalsi!</p>'
      ]
    ],
    quiz: [
      q('Which decimal equals 3/4?', 'Quale numero decimale è uguale a 3/4?', [['0.75', '0,75'], ['0.34', '0,34'], ['3.4', '3,4'], ['0.43', '0,43']], ['3 ÷ 4 = 0.75.', '3 : 4 = 0,75.']),
      q('Which fraction equals 0.035?', 'Quale frazione è uguale a 0,035?', [['35/1 000', '35/1 000'], ['35/100', '35/100'], ['35/10', '35/10'], ['3/5', '3/5']], ['Three decimal places → thousandths.', 'Tre cifre decimali → millesimi.']),
      q('Where is 7/4 on the number line?', 'Dove si trova 7/4 sulla retta dei numeri?', [['Between 1.5 and 2', 'Tra 1,5 e 2'], ['Between 0 and 1', 'Tra 0 e 1'], ['Between 7 and 8', 'Tra 7 e 8'], ['Between 1 and 1.5', 'Tra 1 e 1,5']], ['7/4 = 1.75.', '7/4 = 1,75.']),
      q('What is 1/5 as a decimal?', 'Quanto vale 1/5 come numero decimale?', [['0.2', '0,2'], ['0.5', '0,5'], ['0.15', '0,15'], ['5.1', '5,1']], ['1/5 = 2/10 = 0.2.', '1/5 = 2/10 = 0,2.'])
    ]
  }, fractionsTaunt),
  makeG5MathMission({
    id: 'g5m-fraction-of-quantity', sec: '3.5', pages: '83', hue: 75,
    title: ['From the Whole to the Fraction', 'Dall’intero alla frazione'],
    topic: ['Calculating the fraction of a quantity', 'Calcolare la frazione di una quantità'],
    demon: ['The Portion Pilferer', 'il Ruba-Porzioni'],
    tech: ['Fraction Form · Fifth Technique: Exact Portion', 'Stile delle Frazioni · Quinta Tecnica: Porzione Esatta'],
    lessons: [
      [
        '<p>🍬 To find a <b>fraction of a quantity</b>: <b>divide by the denominator</b> (to find one part) and <b>multiply by the numerator</b> (to take the parts you need).</p><p>3/5 of 40 sweets → 40 ÷ 5 = 8 (one fifth) → 8 × 3 = <b>24</b>.</p>',
        '<p>🍬 Per calcolare la <b>frazione di una quantità</b>: <b>dividi per il denominatore</b> (trovi una parte) e <b>moltiplica per il numeratore</b> (prendi le parti che ti servono).</p><p>3/5 di 40 caramelle → 40 : 5 = 8 (un quinto) → 8 × 3 = <b>24</b>.</p>'
      ],
      [
        '<p>🧮 It works with measures and money too: 2/3 of 1.5 kg = 1.5 ÷ 3 × 2 = <b>1 kg</b>; 3/4 of €60 = 60 ÷ 4 × 3 = <b>€45</b>.</p>',
        '<p>🧮 Funziona anche con le misure e il denaro: 2/3 di 1,5 kg = 1,5 : 3 × 2 = <b>1 kg</b>; 3/4 di 60 € = 60 : 4 × 3 = <b>45 €</b>.</p>'
      ],
      [
        '<p>📚 Problem: “A class of 24 pupils: 5/8 like football. How many do <b>not</b> like football?” 24 ÷ 8 × 5 = 15 like it; 24 − 15 = <b>9</b> do not. Or use the complementary fraction: 3/8 of 24 = 9.</p>',
        '<p>📚 Problema: «In una classe di 24 alunni i 5/8 amano il calcio. Quanti <b>non</b> lo amano?» 24 : 8 × 5 = 15 lo amano; 24 − 15 = <b>9</b> no. Oppure usa la frazione complementare: 3/8 di 24 = 9.</p>'
      ]
    ],
    quiz: [
      q('What is 3/5 of 40?', 'Quanto sono i 3/5 di 40?', [['24', '24'], ['8', '8'], ['15', '15'], ['120', '120']], ['40 ÷ 5 = 8; 8 × 3 = 24.', '40 : 5 = 8; 8 × 3 = 24.']),
      q('What is 3/4 of €60?', 'Quanto sono i 3/4 di 60 €?', [['€45', '45 €'], ['€15', '15 €'], ['€20', '20 €'], ['€80', '80 €']], ['60 ÷ 4 = 15; 15 × 3 = 45.', '60 : 4 = 15; 15 × 3 = 45.']),
      q('24 pupils: 5/8 like football. How many do not?', '24 alunni: i 5/8 amano il calcio. Quanti non lo amano?', [['9', '9'], ['15', '15'], ['3', '3'], ['5', '5']], ['3/8 of 24 = 24 ÷ 8 × 3 = 9.', 'I 3/8 di 24 = 24 : 8 × 3 = 9.']),
      q('What is 2/3 of 1.5 kg?', 'Quanto sono i 2/3 di 1,5 kg?', [['1 kg', '1 kg'], ['0.5 kg', '0,5 kg'], ['3 kg', '3 kg'], ['1.2 kg', '1,2 kg']], ['1.5 ÷ 3 = 0.5; 0.5 × 2 = 1.', '1,5 : 3 = 0,5; 0,5 × 2 = 1.'])
    ]
  }, fractionsTaunt),
  makeG5MathMission({
    id: 'g5m-whole-from-fraction', sec: '3.6', pages: '84', hue: 90,
    title: ['From the Fraction to the Whole', 'Dalla frazione all’intero'],
    topic: ['Finding the whole when a fractional part is known', 'Trovare l’intero conoscendo il valore di una sua parte frazionaria'],
    demon: ['The Missing-Whole Wraith', 'lo Spettro dell’Intero Perduto'],
    tech: ['Fraction Form · Sixth Technique: Rebuild the Whole', 'Stile delle Frazioni · Sesta Tecnica: Ricomponi l’Intero'],
    lessons: [
      [
        '<p>🔄 This is the <b>inverse</b> problem: we know the value of a fraction and look for the whole. Do the opposite operations: <b>divide by the numerator</b>, then <b>multiply by the denominator</b>.</p>',
        '<p>🔄 È il problema <b>inverso</b>: conosciamo il valore di una frazione e cerchiamo l’intero. Esegui le operazioni inverse: <b>dividi per il numeratore</b>, poi <b>moltiplica per il denominatore</b>.</p>'
      ],
      [
        '<p>📘 “3/4 of a book is 30 pages. How many pages does the book have?” 30 ÷ 3 = 10 (one quarter) → 10 × 4 = <b>40 pages</b>.</p><p>Draw it: 4 equal boxes, 3 of them hold 30 pages in total, so each box holds 10.</p>',
        '<p>📘 «I 3/4 di un libro sono 30 pagine. Quante pagine ha il libro?» 30 : 3 = 10 (un quarto) → 10 × 4 = <b>40 pagine</b>.</p><p>Disegnalo: 4 caselle uguali, 3 caselle contengono in tutto 30 pagine, quindi ogni casella ne contiene 10.</p>'
      ],
      [
        '<p>✔️ <b>Check</b> by going forwards: 3/4 of 40 = 40 ÷ 4 × 3 = 30 ✓. A quick sanity check: the whole must be <b>bigger</b> than a proper fraction of it.</p>',
        '<p>✔️ <b>Verifica</b> tornando avanti: i 3/4 di 40 = 40 : 4 × 3 = 30 ✓. Controllo veloce: l’intero deve essere <b>maggiore</b> di una sua frazione propria.</p>'
      ]
    ],
    quiz: [
      q('3/4 of a book is 30 pages. How many pages does the book have?', 'I 3/4 di un libro sono 30 pagine. Quante pagine ha il libro?', [['40', '40'], ['22.5', '22,5'], ['120', '120'], ['33', '33']], ['30 ÷ 3 = 10; 10 × 4 = 40.', '30 : 3 = 10; 10 × 4 = 40.']),
      q('2/5 of a sum of money is €18. What is the whole sum?', 'I 2/5 di una somma sono 18 €. Qual è la somma intera?', [['€45', '45 €'], ['€36', '36 €'], ['€90', '90 €'], ['€7.20', '7,20 €']], ['18 ÷ 2 = 9; 9 × 5 = 45.', '18 : 2 = 9; 9 × 5 = 45.']),
      q('1/6 of a group is 7 children. How many children are in the group?', '1/6 di un gruppo sono 7 bambini. Quanti bambini ci sono nel gruppo?', [['42', '42'], ['13', '13'], ['36', '36'], ['49', '49']], ['7 × 6 = 42.', '7 × 6 = 42.']),
      q('To find the whole from a fraction, what do you do first?', 'Per trovare l’intero da una frazione, che cosa fai per prima cosa?', [['Divide by the numerator', 'Divido per il numeratore'], ['Divide by the denominator', 'Divido per il denominatore'], ['Add numerator and denominator', 'Sommo numeratore e denominatore'], ['Multiply by the numerator', 'Moltiplico per il numeratore']], ['Dividing by the numerator gives the value of one part.', 'Dividendo per il numeratore trovi il valore di una parte.'])
    ]
  }, fractionsTaunt),
  makeG5MathMission({
    id: 'g5m-percentages', sec: '3.7', pages: '85–87', hue: 105,
    title: ['Fractions, Percentages and Surveys', 'Frazioni, percentuali e indagini'],
    topic: ['Percentages as hundredths, calculating percentages and the STEM “100% survey”', 'La percentuale come centesimi, il calcolo delle percentuali e l’indagine STEM «al 100%»'],
    demon: ['The Percent Phantom', 'il Fantasma del Per Cento'],
    tech: ['Fraction Form · Seventh Technique: Hundred Eyes', 'Stile delle Frazioni · Settima Tecnica: Cento Occhi'],
    lessons: [
      { vis: 'g5m-percent-grid', text: [
        '<p>💯 A <b>percentage</b> is a fraction with denominator 100: 25% = 25/100 = 0.25. Useful equivalences: 50% = 1/2; 25% = 1/4; 75% = 3/4; 10% = 1/10; 100% = the whole.</p>',
        '<p>💯 La <b>percentuale</b> è una frazione con denominatore 100: 25% = 25/100 = 0,25. Equivalenze utili: 50% = 1/2; 25% = 1/4; 75% = 3/4; 10% = 1/10; 100% = l’intero.</p>'
      ] },
      [
        '<p>🧮 To calculate a percentage, treat it like a fraction: <b>÷ 100 × percentage</b>. 15% of 80 = 80 ÷ 100 × 15 = <b>12</b>. A shortcut: 10% is “divide by 10”, so 20% of 45 = 4.5 × 2 = <b>9</b>.</p>',
        '<p>🧮 Per calcolare una percentuale trattala come una frazione: <b>: 100 × percentuale</b>. Il 15% di 80 = 80 : 100 × 15 = <b>12</b>. Scorciatoia: il 10% è «dividi per 10», quindi il 20% di 45 = 4,5 × 2 = <b>9</b>.</p>'
      ],
      [
        '<p>📊 <b>STEM – a 100% survey</b>: 20 pupils choose their favourite fruit: 10 apple, 6 banana, 4 orange. As percentages: 10/20 = 50%, 6/20 = 30%, 4/20 = 20%. The total is always <b>100%</b>: perfect for a pie chart!</p>',
        '<p>📊 <b>STEM – indagini al 100%</b>: 20 alunni scelgono il frutto preferito: 10 mela, 6 banana, 4 arancia. In percentuale: 10/20 = 50%, 6/20 = 30%, 4/20 = 20%. Il totale è sempre <b>100%</b>: perfetto per un aerogramma!</p>'
      ]
    ],
    quiz: [
      q('What is 15% of 80?', 'Quanto è il 15% di 80?', [['12', '12'], ['15', '15'], ['8', '8'], ['65', '65']], ['80 ÷ 100 × 15 = 12.', '80 : 100 × 15 = 12.']),
      q('Which fraction equals 75%?', 'Quale frazione è uguale al 75%?', [['3/4', '3/4'], ['7/5', '7/5'], ['1/4', '1/4'], ['75/10', '75/10']], ['75/100 simplifies to 3/4.', '75/100 si semplifica in 3/4.']),
      q('6 out of 20 pupils chose banana. What percentage is that?', '6 alunni su 20 hanno scelto la banana. Che percentuale è?', [['30%', '30%'], ['6%', '6%'], ['20%', '20%'], ['60%', '60%']], ['6/20 = 30/100 = 30%.', '6/20 = 30/100 = 30%.']),
      q('What is 50% of 36?', 'Quanto è il 50% di 36?', [['18', '18'], ['50', '50'], ['36', '36'], ['72', '72']], ['50% is one half: 36 ÷ 2 = 18.', 'Il 50% è la metà: 36 : 2 = 18.'])
    ]
  }, fractionsTaunt),
  makeG5MathMission({
    id: 'g5m-managing-money', sec: '3.8', pages: '88–89', hue: 120,
    title: ['Civic Education: Managing Money', 'Educazione civica: gestire il denaro'],
    topic: ['Budgets, discounts and simple economy problems', 'Bilancio, sconti e problemi di economia'],
    demon: ['The Impulse Buyer', 'lo Spendaccione'],
    tech: ['Fraction Form · Eighth Technique: Wise Wallet', 'Stile delle Frazioni · Ottava Tecnica: Portafoglio Saggio'],
    lessons: [
      [
        '<p>👛 Managing money means planning: a <b>budget</b> compares the money you have (income) with what you plan to spend (expenses). If expenses are smaller than income, you can <b>save</b>. Saving €2 a week for a year (52 weeks) gives €104.</p>',
        '<p>👛 Gestire il denaro significa fare progetti: un <b>bilancio</b> confronta i soldi che hai (entrate) con quelli che pensi di spendere (uscite). Se le uscite sono minori delle entrate puoi <b>risparmiare</b>. Risparmiando 2 € alla settimana per un anno (52 settimane) metti da parte 104 €.</p>'
      ],
      [
        '<p>🏷️ A <b>discount</b> (sconto) is usually a percentage of the original price. A jacket costs €50 with a 20% discount: discount = 50 ÷ 100 × 20 = €10; <b>discounted price</b> = 50 − 10 = <b>€40</b>.</p>',
        '<p>🏷️ Lo <b>sconto</b> è di solito una percentuale del prezzo iniziale. Una giacca costa 50 € con lo sconto del 20%: sconto = 50 : 100 × 20 = 10 €; <b>prezzo scontato</b> = 50 − 10 = <b>40 €</b>.</p>'
      ],
      [
        '<p>🛒 A responsible consumer compares the <b>unit price</b>: 6 yoghurts for €3.00 (€0.50 each) are cheaper than 4 for €2.40 (€0.60 each). Ask yourself: do I really need it? Can I reuse or share it?</p>',
        '<p>🛒 Un consumatore responsabile confronta il <b>prezzo unitario</b>: 6 yogurt a 3,00 € (0,50 € l’uno) costano meno di 4 yogurt a 2,40 € (0,60 € l’uno). Chiediti: mi serve davvero? Posso riutilizzarlo o condividerlo?</p>'
      ]
    ],
    quiz: [
      q('A €50 jacket has a 20% discount. What is the discounted price?', 'Una giacca da 50 € ha lo sconto del 20%. Qual è il prezzo scontato?', [['€40', '40 €'], ['€30', '30 €'], ['€10', '10 €'], ['€48', '48 €']], ['Discount €10; 50 − 10 = 40.', 'Sconto 10 €; 50 − 10 = 40.']),
      q('Which offer is cheaper per yoghurt?', 'Quale offerta costa meno per ogni yogurt?', [['6 for €3.00', '6 a 3,00 €'], ['4 for €2.40', '4 a 2,40 €'], ['They cost the same', 'Costano uguale'], ['It cannot be calculated', 'Non si può calcolare']], ['€0.50 each against €0.60 each.', '0,50 € l’uno contro 0,60 € l’uno.']),
      q('Saving €2 a week, how much do you save in 52 weeks?', 'Risparmiando 2 € alla settimana, quanto metti da parte in 52 settimane?', [['€104', '104 €'], ['€54', '54 €'], ['€26', '26 €'], ['€520', '520 €']], ['2 × 52 = 104.', '2 × 52 = 104.']),
      q('Income €30, expenses €22. How much is left to save?', 'Entrate 30 €, uscite 22 €. Quanto resta da risparmiare?', [['€8', '8 €'], ['€52', '52 €'], ['€12', '12 €'], ['€22', '22 €']], ['30 − 22 = 8.', '30 − 22 = 8.'])
    ]
  }, fractionsTaunt),
  makeG5MathMission({
    id: 'g5m-fractions-review', sec: '3.9', pages: '90–95', hue: 135,
    title: ['Check-Up: Fractions and Decimals', 'Adesso so: frazioni e numeri decimali'],
    topic: ['Exercises, summary map, test and Invalsi-style questions for the unit', 'Esercizi, mappa di sintesi, verifica e quesiti verso l’Invalsi dell’unità'],
    demon: ['The Unit Guardian of Fractions', 'il Guardiano delle Frazioni'],
    tech: ['Fraction Form · Mastery Seal: Fraction Master', 'Stile delle Frazioni · Sigillo di Maestria: Maestro delle Frazioni'],
    lessons: [
      [
        '<p>🗺️ <b>Let’s see it clearly</b>: proper, improper, apparent and complementary fractions; equivalent fractions and simplifying; comparing; decimal fractions; fraction of a quantity (÷ denominator × numerator) and the whole from a fraction (÷ numerator × denominator).</p>',
        '<p>🗺️ <b>Vediamoci chiaro</b>: frazioni proprie, improprie, apparenti e complementari; frazioni equivalenti e semplificazione; confronto; frazioni decimali; frazione di una quantità (: denominatore × numeratore) e intero dalla frazione (: numeratore × denominatore).</p>'
      ],
      [
        '<p>💯 Percentages are hundredths: x% of a number = number ÷ 100 × x. Discounted price = price − discount. Compare unit prices before buying.</p>',
        '<p>💯 Le percentuali sono centesimi: x% di un numero = numero : 100 × x. Prezzo scontato = prezzo − sconto. Confronta i prezzi unitari prima di comprare.</p>'
      ],
      [
        '<p>🏁 <b>Towards Invalsi</b>: draw a bar to visualise fractions, change fractions into decimals to compare them, and check that a part is never bigger than its whole (unless the fraction is improper).</p>',
        '<p>🏁 <b>Verso l’Invalsi</b>: disegna una barra per visualizzare le frazioni, trasforma le frazioni in decimali per confrontarle e controlla che una parte non sia mai più grande del suo intero (a meno che la frazione sia impropria).</p>'
      ]
    ],
    quiz: [
      q('Order from smallest: 0.6, 1/2, 3/4', 'Ordina dal più piccolo: 0,6; 1/2; 3/4', [['1/2, 0.6, 3/4', '1/2; 0,6; 3/4'], ['0.6, 1/2, 3/4', '0,6; 1/2; 3/4'], ['3/4, 0.6, 1/2', '3/4; 0,6; 1/2'], ['1/2, 3/4, 0.6', '1/2; 3/4; 0,6']], ['0.5 < 0.6 < 0.75.', '0,5 < 0,6 < 0,75.']),
      q('A bike costs €240 with a 25% discount. How much do you pay?', 'Una bici costa 240 € con lo sconto del 25%. Quanto paghi?', [['€180', '180 €'], ['€60', '60 €'], ['€215', '215 €'], ['€200', '200 €']], ['25% of 240 = 60; 240 − 60 = 180.', 'Il 25% di 240 = 60; 240 − 60 = 180.']),
      q('2/3 of a bottle is 500 ml. How much does the full bottle hold?', 'I 2/3 di una bottiglia sono 500 ml. Quanto contiene la bottiglia piena?', [['750 ml', '750 ml'], ['333 ml', '333 ml'], ['1 000 ml', '1 000 ml'], ['1 500 ml', '1 500 ml']], ['500 ÷ 2 = 250; 250 × 3 = 750.', '500 : 2 = 250; 250 × 3 = 750.']),
      q('Which fraction is equivalent to 0.4?', 'Quale frazione è equivalente a 0,4?', [['2/5', '2/5'], ['1/4', '1/4'], ['4/100', '4/100'], ['4/5', '4/5']], ['0.4 = 4/10 = 2/5.', '0,4 = 4/10 = 2/5.'])
    ]
  }, fractionsTaunt)
];
