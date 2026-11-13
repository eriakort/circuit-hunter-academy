import type { Mission } from '../types';
import { makeG5MathMission, q, type Pair } from './grade5MathCommon';

const numbersTaunt = (demon: Pair): Pair => [
  `<p>🔢 I am ${demon[0]}! I swap digits, hide zeros and break the rules of calculation. Can you keep every number in its place?</p>`,
  `<p>🔢 Sono ${demon[1]}! Scambio le cifre, nascondo gli zeri e rompo le regole del calcolo. Sai tenere ogni numero al suo posto?</p>`
];

/** Numeri · pages 36–75. */
export const GRADE5_MATH_NUMBERS_MISSIONS: Mission[] = [
  makeG5MathMission({
    id: 'g5m-natural-numbers', sec: '2.1', pages: '37', hue: 20,
    title: ['Natural Numbers', 'I numeri naturali'],
    topic: ['Our decimal positional system: classes, orders and place value', 'Il sistema di numerazione decimale e posizionale: classi, ordini e valore posizionale'],
    demon: ['The Digit Swapper', 'lo Scambiacifre'],
    tech: ['Number Form · First Technique: True Place', 'Stile dei Numeri · Prima Tecnica: Posto Giusto'],
    lessons: [
      { vis: 'g5m-place-value', text: [
        '<p>🔢 The <b>natural numbers</b> are 0, 1, 2, 3, … and they never end. We write them with only <b>ten digits</b> (0–9) because our system is <b>decimal</b>: 10 units make 1 ten, 10 tens make 1 hundred, and so on.</p>',
        '<p>🔢 I <b>numeri naturali</b> sono 0, 1, 2, 3, … e non finiscono mai. Li scriviamo con solo <b>dieci cifre</b> (da 0 a 9) perché il nostro sistema è <b>decimale</b>: 10 unità formano 1 decina, 10 decine formano 1 centinaio, e così via.</p>'
      ] },
      [
        '<p>📍 The system is also <b>positional</b>: the value of a digit depends on its <b>place</b>. In 555 the three 5s are worth 500, 50 and 5.</p><p>Places are grouped in threes called <b>classes</b>: units (u, da, h), thousands (uk, dak, hk), millions… Each class has three <b>orders</b>: units, tens, hundreds.</p>',
        '<p>📍 Il sistema è anche <b>posizionale</b>: il valore di una cifra dipende dal <b>posto</b> che occupa. In 555 i tre 5 valgono 500, 50 e 5.</p><p>Le posizioni si raggruppano a tre a tre in <b>classi</b>: unità semplici (u, da, h), migliaia (uk, dak, hk), milioni… Ogni classe ha tre <b>ordini</b>: unità, decine, centinaia.</p>'
      ],
      [
        '<p>🧩 We can <b>decompose</b> a number: 46 208 = 4 dak + 6 uk + 2 h + 0 da + 8 u = 40 000 + 6 000 + 200 + 8.</p><p>The <b>0</b> is important: it keeps an empty place. Without it, 46 208 would become 4 628!</p>',
        '<p>🧩 Possiamo <b>scomporre</b> un numero: 46 208 = 4 dak + 6 uk + 2 h + 0 da + 8 u = 40 000 + 6 000 + 200 + 8.</p><p>Lo <b>0</b> è importante: segna un posto vuoto. Senza di esso 46 208 diventerebbe 4 628!</p>'
      ]
    ],
    quiz: [
      q('In 46 208, what is the value of the digit 6?', 'In 46 208, quanto vale la cifra 6?', [['6 000', '6 000'], ['600', '600'], ['60 000', '60 000'], ['6', '6']], ['The 6 is in the thousands place (uk).', 'Il 6 è al posto delle unità di migliaia (uk).']),
      q('Which number is 3 dak + 5 h + 9 u?', 'Quale numero è 3 dak + 5 h + 9 u?', [['30 509', '30 509'], ['3 509', '3 509'], ['359', '359'], ['30 590', '30 590']], ['30 000 + 500 + 9 = 30 509; zeros fill the empty places.', '30 000 + 500 + 9 = 30 509; gli zeri occupano i posti vuoti.']),
      q('How many tens are there in 1 thousand?', 'Quante decine ci sono in 1 migliaio?', [['100', '100'], ['10', '10'], ['1 000', '1 000'], ['1', '1']], ['1 000 ÷ 10 = 100 tens.', '1 000 : 10 = 100 decine.']),
      q('Why is our number system called positional?', 'Perché il nostro sistema di numerazione si dice posizionale?', [['A digit’s value depends on its place', 'Il valore di una cifra dipende dal posto che occupa'], ['It uses only the digit 0', 'Usa solo la cifra 0'], ['Numbers are written in a circle', 'I numeri si scrivono in cerchio'], ['Every digit always has the same value', 'Ogni cifra ha sempre lo stesso valore']], ['The same digit 5 can mean 5, 50 or 500 depending on its place.', 'La stessa cifra 5 può valere 5, 50 o 500 a seconda del posto.'])
    ]
  }, numbersTaunt),
  makeG5MathMission({
    id: 'g5m-roman-numerals', sec: '2.2', pages: '38–39', hue: 35,
    title: ['Maths on the Road: Roman Numerals', 'Mate in viaggio: i numeri romani'],
    topic: ['Roman numerals and comparing number systems', 'I numeri romani e i sistemi di numerazione a confronto'],
    demon: ['The Centurion of Confusion', 'il Centurione della Confusione'],
    tech: ['Number Form · Second Technique: Ancient Script', 'Stile dei Numeri · Seconda Tecnica: Scrittura Antica'],
    lessons: [
      [
        '<p>🏛️ The ancient Romans used <b>letters</b> as numerals: <b>I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1 000</b>. You still see them on clocks, monuments and in the names of centuries (the XXI century).</p>',
        '<p>🏛️ Gli antichi Romani usavano delle <b>lettere</b> come simboli numerici: <b>I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1 000</b>. Li vedi ancora su orologi, monumenti e nei nomi dei secoli (il XXI secolo).</p>'
      ],
      [
        '<p>📜 The rules:</p><ul><li>a symbol to the <b>right</b> of an equal or bigger one is <b>added</b>: VI = 6, XX = 20;</li><li>I, X, C written to the <b>left</b> of a bigger symbol are <b>subtracted</b>: IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900;</li><li>the same symbol is repeated at most <b>three times</b>.</li></ul>',
        '<p>📜 Le regole:</p><ul><li>un simbolo a <b>destra</b> di uno uguale o maggiore si <b>somma</b>: VI = 6, XX = 20;</li><li>I, X, C scritti a <b>sinistra</b> di un simbolo maggiore si <b>sottraggono</b>: IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900;</li><li>uno stesso simbolo si ripete al massimo <b>tre volte</b>.</li></ul>'
      ],
      [
        '<p>⚖️ <b>Systems compared</b>: the Roman system is <b>additive</b> and not positional, and it has <b>no zero</b>, so long calculations are hard. Our Indo-Arabic decimal system uses positions and the zero, which make written calculation much easier. Example: 2 026 = MMXXVI.</p>',
        '<p>⚖️ <b>Sistemi a confronto</b>: il sistema romano è <b>additivo</b>, non è posizionale e <b>non ha lo zero</b>, quindi i calcoli lunghi sono difficili. Il nostro sistema decimale indo-arabico usa le posizioni e lo zero, che rendono molto più semplice il calcolo scritto. Esempio: 2 026 = MMXXVI.</p>'
      ]
    ],
    quiz: [
      q('What number is XLIX?', 'Quale numero è XLIX?', [['49', '49'], ['51', '51'], ['69', '69'], ['41', '41']], ['XL = 40 and IX = 9, so 49.', 'XL = 40 e IX = 9, quindi 49.']),
      q('How do you write 2 026 in Roman numerals?', 'Come si scrive 2 026 in numeri romani?', [['MMXXVI', 'MMXXVI'], ['MMXXIV', 'MMXXIV'], ['MCMXXVI', 'MCMXXVI'], ['MMVVXXI', 'MMVVXXI']], ['MM = 2 000, XX = 20, VI = 6.', 'MM = 2 000, XX = 20, VI = 6.']),
      q('Which symbol did the Roman system NOT have?', 'Quale simbolo NON esisteva nel sistema romano?', [['A symbol for zero', 'Un simbolo per lo zero'], ['A symbol for 5', 'Un simbolo per il 5'], ['A symbol for 100', 'Un simbolo per il 100'], ['A symbol for 1 000', 'Un simbolo per il 1 000']], ['The Romans had no zero; that is one reason it is not positional.', 'I Romani non avevano lo zero; è uno dei motivi per cui il sistema non è posizionale.']),
      q('What is CD?', 'Quanto vale CD?', [['400', '400'], ['600', '600'], ['150', '150'], ['500', '500']], ['C before D is subtracted: 500 − 100 = 400.', 'C prima di D si sottrae: 500 − 100 = 400.'])
    ]
  }, numbersTaunt),
  makeG5MathMission({
    id: 'g5m-big-numbers', sec: '2.3', pages: '40–41', hue: 50,
    title: ['Huge Numbers: Millions and Billions', 'Numeri grandissimi: milioni e miliardi'],
    topic: ['Reading, writing, representing and comparing very large numbers', 'Leggere, scrivere, rappresentare e confrontare numeri molto grandi'],
    demon: ['The Zero Hoarder', 'l’Accumulatore di Zeri'],
    tech: ['Number Form · Third Technique: Giant Step', 'Stile dei Numeri · Terza Tecnica: Passo da Gigante'],
    lessons: [
      [
        '<p>🌌 After the thousands come the <b>millions</b> class (um, dam, hm) and the <b>billions</b> class (ug, dag, hg — <i>miliardi</i>).</p><ul><li>1 million = 1 000 000 = a thousand thousands</li><li>1 billion = 1 000 000 000 = a thousand millions</li></ul>',
        '<p>🌌 Dopo le migliaia vengono la classe dei <b>milioni</b> (um, dam, hm) e quella dei <b>miliardi</b> (ug, dag, hg).</p><ul><li>1 milione = 1 000 000 = mille migliaia</li><li>1 miliardo = 1 000 000 000 = mille milioni</li></ul>'
      ],
      [
        '<p>📖 To read a big number, split it into classes of three digits from the <b>right</b>: 5 204 380 017 reads “five billion, two hundred and four million, three hundred and eighty thousand and seventeen”. Leave a small space between classes.</p>',
        '<p>📖 Per leggere un numero grande dividilo in classi di tre cifre partendo da <b>destra</b>: 5 204 380 017 si legge «cinque miliardi duecentoquattro milioni trecentoottantamila diciassette». Lascia un piccolo spazio tra una classe e l’altra.</p>'
      ],
      [
        '<p>⚖️ To <b>compare</b> numbers: the one with <b>more digits</b> is bigger. With the same number of digits, compare digit by digit from the <b>left</b> until two digits differ: 3 450 000 &gt; 3 405 000 because in the ten-thousands place 5 &gt; 0.</p>',
        '<p>⚖️ Per <b>confrontare</b> i numeri: è maggiore quello con <b>più cifre</b>. Con lo stesso numero di cifre si confronta partendo da <b>sinistra</b>, cifra per cifra, finché se ne trova una diversa: 3 450 000 &gt; 3 405 000 perché alle decine di migliaia 5 &gt; 0.</p>'
      ]
    ],
    quiz: [
      q('How many millions make 1 billion?', 'Quanti milioni formano 1 miliardo?', [['1 000', '1 000'], ['100', '100'], ['10', '10'], ['1 000 000', '1 000 000']], ['1 billion = 1 000 000 000 = 1 000 × 1 000 000.', '1 miliardo = 1 000 000 000 = 1 000 × 1 000 000.']),
      q('Which number is bigger?', 'Quale numero è maggiore?', [['7 080 000', '7 080 000'], ['7 008 000', '7 008 000'], ['780 000', '780 000'], ['7 000 800', '7 000 800']], ['780 000 has fewer digits. The others all have 7 millions and 0 hundred-thousands; in the ten-thousands place 8 is the largest digit.', '780 000 ha meno cifre. Gli altri hanno tutti 7 milioni e 0 centinaia di migliaia; alle decine di migliaia 8 è la cifra maggiore.']),
      q('How do you write “twelve million, four thousand”?', 'Come si scrive «dodici milioni quattromila»?', [['12 004 000', '12 004 000'], ['12 400 000', '12 400 000'], ['124 000', '124 000'], ['1 204 000', '1 204 000']], ['12 in the millions class, 004 in the thousands, 000 in the units.', '12 nella classe dei milioni, 004 in quella delle migliaia, 000 nelle unità.']),
      q('In 5 204 380 017, which digit is in the billions place (ug)?', 'In 5 204 380 017, quale cifra è al posto delle unità di miliardi (ug)?', [['5', '5'], ['2', '2'], ['4', '4'], ['0', '0']], ['The 10-digit number begins with the billions: 5.', 'Il numero di 10 cifre inizia con i miliardi: 5.'])
    ]
  }, numbersTaunt),
  makeG5MathMission({
    id: 'g5m-powers', sec: '2.4', pages: '42–44', hue: 65,
    title: ['Powers', 'Le potenze'],
    topic: ['Base and exponent, powers of 10, polynomial notation and the Pythagoras tree (STEM)', 'Base ed esponente, potenze del 10, scrittura polinomiale e l’albero di Pitagora (STEM)'],
    demon: ['The Exponent Hydra', 'l’Idra degli Esponenti'],
    tech: ['Number Form · Fourth Technique: Power Surge', 'Stile dei Numeri · Quarta Tecnica: Ondata di Potenza'],
    lessons: [
      [
        '<p>⚡ A <b>power</b> is a short way to write a multiplication of equal factors: 2 × 2 × 2 = <b>2³</b>. The <b>base</b> (2) is the repeated factor; the <b>exponent</b> (3) says how many times it is repeated. 2³ = 8, 5² = 25 (“five squared”), 4³ = 64 (“four cubed”).</p><p>Careful: 2³ is NOT 2 × 3!</p>',
        '<p>⚡ La <b>potenza</b> è un modo breve di scrivere una moltiplicazione di fattori uguali: 2 × 2 × 2 = <b>2³</b>. La <b>base</b> (2) è il fattore che si ripete; l’<b>esponente</b> (3) dice quante volte si ripete. 2³ = 8, 5² = 25 («cinque alla seconda»), 4³ = 64 («quattro alla terza»).</p><p>Attenzione: 2³ NON è 2 × 3!</p>'
      ],
      [
        '<p>🔟 <b>Powers of 10</b>: 10² = 100, 10³ = 1 000, 10⁶ = 1 000 000 — the exponent tells how many zeros follow the 1. Any number to the power 1 is itself (7¹ = 7), and any number other than 0 to the power 0 is 1 (10⁰ = 1).</p><p><b>Polynomial notation</b>: 3 456 = 3 × 10³ + 4 × 10² + 5 × 10¹ + 6 × 10⁰.</p>',
        '<p>🔟 <b>Potenze del 10</b>: 10² = 100, 10³ = 1 000, 10⁶ = 1 000 000 — l’esponente indica quanti zeri seguono l’1. Un numero elevato a 1 è uguale a sé stesso (7¹ = 7) e ogni numero diverso da 0 elevato a 0 vale 1 (10⁰ = 1).</p><p><b>Scrittura polinomiale</b>: 3 456 = 3 × 10³ + 4 × 10² + 5 × 10¹ + 6 × 10⁰.</p>'
      ],
      [
        '<p>🌳 <b>STEM – the Pythagoras tree</b>: start with a square, place a right-angled triangle on top and build two smaller squares on its other sides; repeat on every new square. Each step <b>doubles</b> the number of new squares: 1, 2, 4, 8, 16… that is 2⁰, 2¹, 2², 2³, 2⁴. Powers make the tree grow!</p>',
        '<p>🌳 <b>STEM – l’albero di Pitagora</b>: parti da un quadrato, appoggia sopra un triangolo rettangolo e costruisci due quadrati più piccoli sugli altri lati; ripeti su ogni nuovo quadrato. A ogni passo i nuovi quadrati <b>raddoppiano</b>: 1, 2, 4, 8, 16… cioè 2⁰, 2¹, 2², 2³, 2⁴. Sono le potenze a far crescere l’albero!</p>'
      ]
    ],
    quiz: [
      q('What is 3⁴?', 'Quanto vale 3⁴?', [['81', '81'], ['12', '12'], ['7', '7'], ['64', '64']], ['3 × 3 × 3 × 3 = 81.', '3 × 3 × 3 × 3 = 81.']),
      q('How do you write 1 000 000 as a power of 10?', 'Come si scrive 1 000 000 come potenza di 10?', [['10⁶', '10⁶'], ['10⁵', '10⁵'], ['10⁷', '10⁷'], ['6¹⁰', '6¹⁰']], ['There are six zeros after the 1.', 'Dopo l’1 ci sono sei zeri.']),
      q('In 5², what is the exponent?', 'In 5², qual è l’esponente?', [['2', '2'], ['5', '5'], ['25', '25'], ['10', '10']], ['The small raised number is the exponent.', 'Il numero piccolo in alto è l’esponente.']),
      q('Which number is 2 × 10³ + 7 × 10¹ + 4?', 'Quale numero è 2 × 10³ + 7 × 10¹ + 4?', [['2 074', '2 074'], ['2 704', '2 704'], ['274', '274'], ['20 704', '20 704']], ['2 000 + 70 + 4 = 2 074 (no hundreds).', '2 000 + 70 + 4 = 2 074 (nessuna centinaia).'])
    ]
  }, numbersTaunt),
  makeG5MathMission({
    id: 'g5m-negative-numbers', sec: '2.5', pages: '46–47', hue: 210,
    title: ['Integers: Positive and Negative Numbers', 'I numeri relativi'],
    topic: ['Negative numbers in temperatures, altitudes and floors; the number line', 'Numeri negativi nelle temperature, nelle altitudini e nei piani; la retta dei numeri'],
    demon: ['The Frost Sprite', 'lo Spirito del Gelo'],
    tech: ['Number Form · Fifth Technique: Below Zero', 'Stile dei Numeri · Quinta Tecnica: Sotto Zero'],
    lessons: [
      { vis: 'g5m-number-line', text: [
        '<p>🌡️ Some quantities go <b>below zero</b>. On a winter morning the thermometer can show <b>−3 °C</b> (“minus three”). Numbers with a sign are called <b>integers</b> (numeri relativi): positive (+1, +2, …), negative (−1, −2, …) and 0, which is neither.</p>',
        '<p>🌡️ Alcune grandezze scendono <b>sotto lo zero</b>. In una mattina d’inverno il termometro può segnare <b>−3 °C</b> («meno tre»). I numeri con il segno si chiamano <b>numeri relativi</b>: positivi (+1, +2, …), negativi (−1, −2, …) e lo 0, che non è né positivo né negativo.</p>'
      ] },
      [
        '<p>📏 On the <b>number line</b> negative numbers are on the left of 0, positive on the right. A number on the right is always <b>bigger</b>: −1 &gt; −5, because −1 is closer to 0. Real-life examples: altitude below sea level, underground car-park floors (−1, −2), bank overdrafts.</p>',
        '<p>📏 Sulla <b>retta dei numeri</b> i negativi stanno a sinistra dello 0, i positivi a destra. Un numero più a destra è sempre <b>maggiore</b>: −1 &gt; −5, perché −1 è più vicino allo 0. Esempi reali: altitudine sotto il livello del mare, piani interrati del parcheggio (−1, −2), un conto in rosso.</p>'
      ],
      [
        '<p>🧮 To find the <b>difference</b> between two temperatures, count the steps on the line: from −4 °C to +3 °C the temperature rises by 4 + 3 = <b>7 degrees</b>. From +2 °C, falling by 5 degrees, you reach −3 °C.</p>',
        '<p>🧮 Per trovare la <b>differenza</b> tra due temperature conta i passi sulla retta: da −4 °C a +3 °C la temperatura sale di 4 + 3 = <b>7 gradi</b>. Da +2 °C, scendendo di 5 gradi, si arriva a −3 °C.</p>'
      ]
    ],
    quiz: [
      q('Which number is the greatest?', 'Quale numero è il maggiore?', [['−1', '−1'], ['−4', '−4'], ['−10', '−10'], ['−7', '−7']], ['−1 is the closest to zero, so it is on the right of the others.', '−1 è il più vicino allo zero, quindi sta a destra degli altri.']),
      q('The temperature goes from −4 °C to +3 °C. By how many degrees did it rise?', 'La temperatura passa da −4 °C a +3 °C. Di quanti gradi è salita?', [['7', '7'], ['1', '1'], ['−1', '−1'], ['12', '12']], ['4 steps up to 0, then 3 more: 7.', '4 passi fino a 0, poi altri 3: 7.']),
      q('It is +2 °C and the temperature falls by 5 degrees. What does the thermometer show?', 'Ci sono +2 °C e la temperatura scende di 5 gradi. Che cosa segna il termometro?', [['−3 °C', '−3 °C'], ['+3 °C', '+3 °C'], ['−7 °C', '−7 °C'], ['+7 °C', '+7 °C']], ['2 − 5 = −3.', '2 − 5 = −3.']),
      q('A lift goes from floor +3 down to floor −2. How many floors does it travel?', 'Un ascensore scende dal piano +3 al piano −2. Quanti piani percorre?', [['5', '5'], ['1', '1'], ['3', '3'], ['6', '6']], ['3 floors down to 0, then 2 more: 5.', '3 piani fino allo 0, poi altri 2: 5.'])
    ]
  }, numbersTaunt),
  makeG5MathMission({
    id: 'g5m-decimals', sec: '2.6', pages: '48', hue: 225,
    title: ['Decimal Numbers', 'I numeri decimali'],
    topic: ['Tenths, hundredths, thousandths; reading, writing and comparing decimals', 'Decimi, centesimi, millesimi; leggere, scrivere e confrontare i numeri decimali'],
    demon: ['The Comma Kidnapper', 'il Rapitore di Virgole'],
    tech: ['Number Form · Sixth Technique: Fine Split', 'Stile dei Numeri · Sesta Tecnica: Divisione Fine'],
    lessons: [
      [
        '<p>🔍 If we split 1 unit into 10 equal parts we get <b>tenths</b> (d), into 100 parts <b>hundredths</b> (c), into 1 000 parts <b>thousandths</b> (m).</p><p>A decimal number has an <b>integer part</b> and a <b>decimal part</b>, separated by the decimal point (in Italian, a <b>comma</b>): in 23.875 the 8 is 8 tenths, the 7 is 7 hundredths, the 5 is 5 thousandths.</p>',
        '<p>🔍 Se dividiamo 1 unità in 10 parti uguali otteniamo i <b>decimi</b> (d), in 100 parti i <b>centesimi</b> (c), in 1 000 parti i <b>millesimi</b> (m).</p><p>Un numero decimale ha una <b>parte intera</b> e una <b>parte decimale</b>, separate dalla <b>virgola</b>: in 23,875 l’8 vale 8 decimi, il 7 vale 7 centesimi e il 5 vale 5 millesimi.</p>'
      ],
      [
        '<p>0️⃣ Zeros at the <b>end</b> of the decimal part do not change the value: 0.5 = 0.50 = 0.500. Zeros <b>inside</b> do: 0.05 is different from 0.5.</p><p>Equivalences: 1 u = 10 d = 100 c = 1 000 m.</p>',
        '<p>0️⃣ Gli zeri alla <b>fine</b> della parte decimale non cambiano il valore: 0,5 = 0,50 = 0,500. Gli zeri <b>in mezzo</b> invece sì: 0,05 è diverso da 0,5.</p><p>Equivalenze: 1 u = 10 d = 100 c = 1 000 m.</p>'
      ],
      [
        '<p>⚖️ To compare decimals, first compare the <b>integer parts</b>; if they are equal, compare tenths, then hundredths… 2.5 &gt; 2.45 because 5 tenths &gt; 4 tenths — the longer number is not always bigger! Tip: add zeros to get the same number of decimal places: 2.50 vs 2.45.</p>',
        '<p>⚖️ Per confrontare i decimali confronta prima le <b>parti intere</b>; se sono uguali confronta i decimi, poi i centesimi… 2,5 &gt; 2,45 perché 5 decimi &gt; 4 decimi: il numero più lungo non è sempre il maggiore! Trucco: aggiungi zeri per avere lo stesso numero di cifre decimali: 2,50 e 2,45.</p>'
      ]
    ],
    quiz: [
      q('Which is bigger: 2.5 or 2.45?', 'Quale è maggiore: 2,5 o 2,45?', [['2.5', '2,5'], ['2.45', '2,45'], ['They are equal', 'Sono uguali'], ['It cannot be decided', 'Non si può stabilire']], ['2.50 > 2.45: 5 tenths beat 4 tenths.', '2,50 > 2,45: 5 decimi superano 4 decimi.']),
      q('In 23.875, what is the value of the digit 7?', 'In 23,875, quanto vale la cifra 7?', [['7 hundredths', '7 centesimi'], ['7 tenths', '7 decimi'], ['7 thousandths', '7 millesimi'], ['7 units', '7 unità']], ['It is in the second place after the decimal point.', 'È al secondo posto dopo la virgola.']),
      q('Which number equals 0.5?', 'Quale numero è uguale a 0,5?', [['0.50', '0,50'], ['0.05', '0,05'], ['5.0', '5,0'], ['0.005', '0,005']], ['Zeros at the end of the decimal part do not change the value.', 'Gli zeri alla fine della parte decimale non cambiano il valore.']),
      q('How many thousandths are there in 1 tenth?', 'Quanti millesimi ci sono in 1 decimo?', [['100', '100'], ['10', '10'], ['1 000', '1 000'], ['1', '1']], ['1 d = 10 c = 100 m.', '1 d = 10 c = 100 m.'])
    ]
  }, numbersTaunt),
  makeG5MathMission({
    id: 'g5m-rounding', sec: '2.7', pages: '49', hue: 240,
    title: ['Numbers to Round', 'Numeri da approssimare'],
    topic: ['Rounding whole and decimal numbers to a given place', 'Arrotondare numeri interi e decimali a un ordine dato'],
    demon: ['The Fuzzy Fog', 'la Nebbia Sfocata'],
    tech: ['Number Form · Seventh Technique: Smart Round', 'Stile dei Numeri · Settima Tecnica: Arrotondamento Furbo'],
    lessons: [
      [
        '<p>🎯 To <b>round</b> means to replace a number with a simpler one that is close to it. Look at the digit <b>right after</b> the place you are rounding to:</p><ul><li>0, 1, 2, 3, 4 → round <b>down</b> (the digit stays);</li><li>5, 6, 7, 8, 9 → round <b>up</b> (add 1).</li></ul>',
        '<p>🎯 <b>Arrotondare</b> significa sostituire un numero con uno più semplice e vicino. Guarda la cifra <b>subito dopo</b> l’ordine a cui arrotondi:</p><ul><li>0, 1, 2, 3, 4 → arrotondi <b>per difetto</b> (la cifra resta uguale);</li><li>5, 6, 7, 8, 9 → arrotondi <b>per eccesso</b> (aggiungi 1).</li></ul>'
      ],
      [
        '<p>🔢 Whole numbers: 2 649 to the nearest hundred → look at the tens (4) → <b>2 600</b>. 2 649 to the nearest ten → look at the units (9) → <b>2 650</b>.</p>',
        '<p>🔢 Numeri interi: 2 649 arrotondato alle centinaia → guardo le decine (4) → <b>2 600</b>. 2 649 arrotondato alle decine → guardo le unità (9) → <b>2 650</b>.</p>'
      ],
      [
        '<p>💶 Decimals: 3.47 to the nearest tenth → look at the hundredths (7) → <b>3.5</b>. €12.38 to the nearest euro → look at the tenths (3) → <b>€12</b>. Rounding is the base of <b>estimating</b>: 4.9 × 3.1 is about 5 × 3 = 15.</p>',
        '<p>💶 Decimali: 3,47 arrotondato ai decimi → guardo i centesimi (7) → <b>3,5</b>. 12,38 € arrotondato all’euro → guardo i decimi (3) → <b>12 €</b>. L’arrotondamento è la base della <b>stima</b>: 4,9 × 3,1 è circa 5 × 3 = 15.</p>'
      ]
    ],
    quiz: [
      q('Round 2 649 to the nearest hundred.', 'Arrotonda 2 649 alle centinaia.', [['2 600', '2 600'], ['2 700', '2 700'], ['2 650', '2 650'], ['3 000', '3 000']], ['The tens digit is 4, so round down.', 'La cifra delle decine è 4, quindi per difetto.']),
      q('Round 3.47 to the nearest tenth.', 'Arrotonda 3,47 ai decimi.', [['3.5', '3,5'], ['3.4', '3,4'], ['3.0', '3,0'], ['4', '4']], ['The hundredths digit is 7, so round up.', 'La cifra dei centesimi è 7, quindi per eccesso.']),
      q('Round 15 850 to the nearest thousand.', 'Arrotonda 15 850 alle migliaia.', [['16 000', '16 000'], ['15 000', '15 000'], ['15 900', '15 900'], ['20 000', '20 000']], ['The hundreds digit is 8, so round up.', 'La cifra delle centinaia è 8, quindi per eccesso.']),
      q('Which is the best estimate of 4.9 × 3.1?', 'Qual è la stima migliore di 4,9 × 3,1?', [['About 15', 'Circa 15'], ['About 8', 'Circa 8'], ['About 150', 'Circa 150'], ['About 1.5', 'Circa 1,5']], ['Round to 5 × 3 = 15.', 'Arrotondo a 5 × 3 = 15.'])
    ]
  }, numbersTaunt),
  makeG5MathMission({
    id: 'g5m-add-subtract', sec: '2.8', pages: '52', hue: 255,
    title: ['Addition and Subtraction', 'Addizione e sottrazione'],
    topic: ['Column addition and subtraction with whole and decimal numbers', 'Addizioni e sottrazioni in colonna con numeri interi e decimali'],
    demon: ['The Misaligned Column', 'la Colonna Storta'],
    tech: ['Calculation Form · First Technique: Straight Columns', 'Stile del Calcolo · Prima Tecnica: Colonne Diritte'],
    lessons: [
      [
        '<p>➕ In <b>addition</b> the numbers are called <b>addends</b> and the result is the <b>sum</b>. In <b>subtraction</b> we have the <b>minuend</b> minus the <b>subtrahend</b>, and the result is the <b>difference</b>. Subtraction is the inverse of addition.</p>',
        '<p>➕ Nell’<b>addizione</b> i numeri si chiamano <b>addendi</b> e il risultato è la <b>somma</b> (o totale). Nella <b>sottrazione</b> abbiamo il <b>minuendo</b> meno il <b>sottraendo</b>, e il risultato è la <b>differenza</b> (o resto). La sottrazione è l’operazione inversa dell’addizione.</p>'
      ],
      [
        '<p>📐 With decimals, <b>line up the decimal points</b> (units under units, tenths under tenths) and fill empty places with zeros:</p><p style="text-align:center;font-family:monospace">&nbsp;&nbsp;15.40<br>−&nbsp;&nbsp;7.85<br>=&nbsp;&nbsp;7.55</p><p>Remember the carries and the borrows!</p>',
        '<p>📐 Con i decimali <b>incolonna le virgole</b> (unità sotto unità, decimi sotto decimi) e completa i posti vuoti con degli zeri:</p><p style="text-align:center;font-family:monospace">&nbsp;&nbsp;15,40<br>−&nbsp;&nbsp;7,85<br>=&nbsp;&nbsp;7,55</p><p>Ricorda i riporti e i prestiti!</p>'
      ],
      [
        '<p>✔️ <b>Check</b> a subtraction with an addition: 7.55 + 7.85 = 15.40 ✓. Check an addition by swapping the addends: the sum does not change.</p>',
        '<p>✔️ <b>Verifica</b> una sottrazione con un’addizione: 7,55 + 7,85 = 15,40 ✓. Verifica un’addizione scambiando gli addendi: la somma non cambia.</p>'
      ]
    ],
    quiz: [
      q('What is 15.4 − 7.85?', 'Quanto fa 15,4 − 7,85?', [['7.55', '7,55'], ['8.45', '8,45'], ['7.45', '7,45'], ['8.55', '8,55']], ['15.40 − 7.85 = 7.55.', '15,40 − 7,85 = 7,55.']),
      q('What is 3.7 + 12.45 + 0.8?', 'Quanto fa 3,7 + 12,45 + 0,8?', [['16.95', '16,95'], ['16.22', '16,22'], ['13.30', '13,30'], ['17.05', '17,05']], ['3.70 + 12.45 + 0.80 = 16.95.', '3,70 + 12,45 + 0,80 = 16,95.']),
      q('In 50 − 18 = 32, what is 18 called?', 'In 50 − 18 = 32, come si chiama 18?', [['Subtrahend', 'Sottraendo'], ['Minuend', 'Minuendo'], ['Difference', 'Differenza'], ['Addend', 'Addendo']], ['The number subtracted is the subtrahend.', 'Il numero che si toglie è il sottraendo.']),
      q('Which addition checks 92.6 − 40.3 = 52.3?', 'Quale addizione verifica 92,6 − 40,3 = 52,3?', [['52.3 + 40.3 = 92.6', '52,3 + 40,3 = 92,6'], ['92.6 + 40.3 = 132.9', '92,6 + 40,3 = 132,9'], ['52.3 + 92.6 = 144.9', '52,3 + 92,6 = 144,9'], ['40.3 + 40.3 = 80.6', '40,3 + 40,3 = 80,6']], ['Difference + subtrahend = minuend.', 'Differenza + sottraendo = minuendo.'])
    ]
  }, numbersTaunt),
  makeG5MathMission({
    id: 'g5m-multiply-divide', sec: '2.9', pages: '53', hue: 270,
    title: ['Multiplication and Division', 'Moltiplicazione e divisione'],
    topic: ['Multiplying with decimals; division with remainder; terms of the operations', 'Moltiplicare con i decimali; la divisione con il resto; i termini delle operazioni'],
    demon: ['The Remainder Rascal', 'il Briccone del Resto'],
    tech: ['Calculation Form · Second Technique: Times and Shares', 'Stile del Calcolo · Seconda Tecnica: Volte e Parti'],
    lessons: [
      [
        '<p>✖️ In <b>multiplication</b> the numbers are <b>factors</b> and the result is the <b>product</b>. To multiply decimals, multiply as if they were whole numbers, then count the <b>total number of decimal places</b> in the factors and place the point: 2.5 × 1.2 → 25 × 12 = 300 → 2 decimal places → <b>3.00 = 3</b>.</p>',
        '<p>✖️ Nella <b>moltiplicazione</b> i numeri sono i <b>fattori</b> e il risultato è il <b>prodotto</b>. Per moltiplicare i decimali, moltiplica come se fossero interi, poi conta le <b>cifre decimali in tutto</b> nei fattori e metti la virgola: 2,5 × 1,2 → 25 × 12 = 300 → 2 cifre decimali → <b>3,00 = 3</b>.</p>'
      ],
      [
        '<p>➗ In <b>division</b> the <b>dividend</b> is divided by the <b>divisor</b>; the result is the <b>quotient</b>, and what is left over is the <b>remainder</b>. 47 ÷ 5 = 9 remainder 2. The remainder must always be <b>smaller than the divisor</b>.</p>',
        '<p>➗ Nella <b>divisione</b> il <b>dividendo</b> si divide per il <b>divisore</b>; il risultato è il <b>quoziente</b> e ciò che avanza è il <b>resto</b>. 47 : 5 = 9 con resto 2. Il resto deve essere sempre <b>minore del divisore</b>.</p>'
      ],
      [
        '<p>✔️ Check a division: <b>quotient × divisor + remainder = dividend</b>: 9 × 5 + 2 = 47 ✓. With a two-digit divisor, estimate: 384 ÷ 12 → about 400 ÷ 12 ≈ 33; the exact answer is <b>32</b> (32 × 12 = 384).</p>',
        '<p>✔️ Verifica una divisione: <b>quoziente × divisore + resto = dividendo</b>: 9 × 5 + 2 = 47 ✓. Con il divisore a due cifre fai una stima: 384 : 12 → circa 400 : 12 ≈ 33; il risultato esatto è <b>32</b> (32 × 12 = 384).</p>'
      ]
    ],
    quiz: [
      q('What is 2.5 × 1.2?', 'Quanto fa 2,5 × 1,2?', [['3', '3'], ['30', '30'], ['0.3', '0,3'], ['2.7', '2,7']], ['25 × 12 = 300 with 2 decimal places: 3.00.', '25 × 12 = 300 con 2 cifre decimali: 3,00.']),
      q('What is 47 ÷ 5?', 'Quanto fa 47 : 5?', [['9 remainder 2', '9 con resto 2'], ['9 remainder 7', '9 con resto 7'], ['8 remainder 7', '8 con resto 7'], ['9 exactly', '9 esatto']], ['9 × 5 = 45 and 47 − 45 = 2.', '9 × 5 = 45 e 47 − 45 = 2.']),
      q('What is 384 ÷ 12?', 'Quanto fa 384 : 12?', [['32', '32'], ['31', '31'], ['42', '42'], ['3.2', '3,2']], ['32 × 12 = 384.', '32 × 12 = 384.']),
      q('A division has divisor 6. Which remainder is impossible?', 'Una divisione ha divisore 6. Quale resto è impossibile?', [['7', '7'], ['0', '0'], ['5', '5'], ['3', '3']], ['The remainder must be smaller than the divisor.', 'Il resto deve essere minore del divisore.'])
    ]
  }, numbersTaunt),
  makeG5MathMission({
    id: 'g5m-times-10-100-1000', sec: '2.10', pages: '54', hue: 285,
    title: ['Multiplying and Dividing by 10, 100, 1 000', 'Moltiplicare e dividere per 10, 100, 1 000'],
    topic: ['Shifting digits and the decimal point', 'Spostare le cifre e la virgola'],
    demon: ['The Slippery Point', 'la Virgola Scivolosa'],
    tech: ['Calculation Form · Third Technique: Point Shift', 'Stile del Calcolo · Terza Tecnica: Salto di Virgola'],
    lessons: [
      [
        '<p>➡️ Multiplying by <b>10, 100, 1 000</b> makes every digit worth 10, 100, 1 000 times more: the digits move <b>1, 2, 3 places to the left</b>. With decimals, the point moves <b>right</b>: 3.45 × 10 = 34.5; 3.45 × 100 = 345; 3.45 × 1 000 = 3 450 (add a zero when places run out).</p>',
        '<p>➡️ Moltiplicando per <b>10, 100, 1 000</b> ogni cifra vale 10, 100, 1 000 volte di più: le cifre si spostano di <b>1, 2, 3 posti verso sinistra</b>. Con i decimali la virgola si sposta a <b>destra</b>: 3,45 × 10 = 34,5; 3,45 × 100 = 345; 3,45 × 1 000 = 3 450 (aggiungi uno zero se mancano i posti).</p>'
      ],
      [
        '<p>⬅️ Dividing by <b>10, 100, 1 000</b> moves the point <b>1, 2, 3 places to the left</b>: 72 ÷ 10 = 7.2; 72 ÷ 100 = 0.72; 72 ÷ 1 000 = <b>0.072</b> (write zeros to fill empty places).</p>',
        '<p>⬅️ Dividendo per <b>10, 100, 1 000</b> la virgola si sposta di <b>1, 2, 3 posti verso sinistra</b>: 72 : 10 = 7,2; 72 : 100 = 0,72; 72 : 1 000 = <b>0,072</b> (scrivi degli zeri per riempire i posti vuoti).</p>'
      ],
      [
        '<p>📏 This is the secret of <b>measure conversions</b>: 6 m × 100 = 600 cm; 9 500 cl ÷ 100 = 95 l. Each step in the measure tables is a jump of one place.</p>',
        '<p>📏 Questo è il segreto delle <b>equivalenze</b>: 6 m × 100 = 600 cm; 9 500 cl : 100 = 95 l. Ogni passo nelle tabelle delle misure è un salto di un posto.</p>'
      ]
    ],
    quiz: [
      q('What is 3.45 × 100?', 'Quanto fa 3,45 × 100?', [['345', '345'], ['34.5', '34,5'], ['3 450', '3 450'], ['0.0345', '0,0345']], ['The point moves two places to the right.', 'La virgola si sposta di due posti a destra.']),
      q('What is 72 ÷ 1 000?', 'Quanto fa 72 : 1 000?', [['0.072', '0,072'], ['0.72', '0,72'], ['7.2', '7,2'], ['72 000', '72 000']], ['The point moves three places to the left, filling with zeros.', 'La virgola si sposta di tre posti a sinistra, riempiendo con degli zeri.']),
      q('What is 0.6 × 1 000?', 'Quanto fa 0,6 × 1 000?', [['600', '600'], ['60', '60'], ['6 000', '6 000'], ['0.006', '0,006']], ['0.6 → 6 → 60 → 600.', '0,6 → 6 → 60 → 600.']),
      q('What is 5.8 ÷ 10?', 'Quanto fa 5,8 : 10?', [['0.58', '0,58'], ['58', '58'], ['0.058', '0,058'], ['5.08', '5,08']], ['The point moves one place to the left.', 'La virgola si sposta di un posto a sinistra.'])
    ]
  }, numbersTaunt),
  makeG5MathMission({
    id: 'g5m-properties', sec: '2.11', pages: '55–57', hue: 300,
    title: ['Properties of the Operations; 0 and 1', 'Le proprietà delle operazioni; lo 0 e l’1'],
    topic: ['Commutative, associative, distributive and invariant properties; the special roles of 0 and 1', 'Proprietà commutativa, associativa, distributiva e invariantiva; il ruolo speciale di 0 e 1'],
    demon: ['The Rule Breaker', 'l’Infrangiregole'],
    tech: ['Calculation Form · Fourth Technique: Clever Swap', 'Stile del Calcolo · Quarta Tecnica: Scambio Furbo'],
    lessons: [
      [
        '<p>🔄 <b>Addition and multiplication</b>:</p><ul><li><b>commutative</b>: change the order, the result does not change (8 + 5 = 5 + 8; 4 × 7 = 7 × 4);</li><li><b>associative</b>: group differently (25 × 4 × 7 = 100 × 7 = 700);</li><li><b>distributive</b> (multiplication): 6 × 23 = 6 × 20 + 6 × 3 = 120 + 18 = 138.</li></ul>',
        '<p>🔄 <b>Addizione e moltiplicazione</b>:</p><ul><li><b>commutativa</b>: cambiando l’ordine il risultato non cambia (8 + 5 = 5 + 8; 4 × 7 = 7 × 4);</li><li><b>associativa</b>: si possono raggruppare i termini (25 × 4 × 7 = 100 × 7 = 700);</li><li><b>distributiva</b> (moltiplicazione): 6 × 23 = 6 × 20 + 6 × 3 = 120 + 18 = 138.</li></ul>'
      ],
      [
        '<p>⚖️ <b>Subtraction and division</b> are not commutative, but they have the <b>invariant property</b>:</p><ul><li>subtraction: add or subtract the same number to both terms → 83 − 29 = 84 − 30 = 54;</li><li>division: multiply or divide both terms by the same number → 600 ÷ 20 = 60 ÷ 2 = 30.</li></ul>',
        '<p>⚖️ <b>Sottrazione e divisione</b> non sono commutative, ma hanno la <b>proprietà invariantiva</b>:</p><ul><li>sottrazione: aggiungendo o togliendo lo stesso numero a entrambi i termini la differenza non cambia → 83 − 29 = 84 − 30 = 54;</li><li>divisione: moltiplicando o dividendo entrambi i termini per lo stesso numero il quoziente non cambia → 600 : 20 = 60 : 2 = 30.</li></ul>'
      ],
      [
        '<p>0️⃣1️⃣ <b>0 and 1</b>: n + 0 = n; n − 0 = n; n × 1 = n; n ÷ 1 = n; n × 0 = 0; 0 ÷ n = 0 (n not 0). And remember: <b>dividing by 0 is impossible</b>!</p>',
        '<p>0️⃣1️⃣ <b>Lo 0 e l’1</b>: n + 0 = n; n − 0 = n; n × 1 = n; n : 1 = n; n × 0 = 0; 0 : n = 0 (con n diverso da 0). E ricorda: <b>la divisione per 0 è impossibile</b>!</p>'
      ]
    ],
    quiz: [
      q('Which property is used in 6 × 23 = 6 × 20 + 6 × 3?', 'Quale proprietà si usa in 6 × 23 = 6 × 20 + 6 × 3?', [['Distributive', 'Distributiva'], ['Commutative', 'Commutativa'], ['Invariant', 'Invariantiva'], ['Associative', 'Associativa']], ['The multiplication is distributed over the parts of 23.', 'La moltiplicazione si distribuisce sulle parti di 23.']),
      q('Using the invariant property, 83 − 29 equals…', 'Applicando la proprietà invariantiva, 83 − 29 è uguale a…', [['84 − 30', '84 − 30'], ['83 − 30', '83 − 30'], ['82 − 30', '82 − 30'], ['29 − 83', '29 − 83']], ['Add 1 to both terms: the difference stays 54.', 'Aggiungo 1 a entrambi i termini: la differenza resta 54.']),
      q('What is 0 × 358?', 'Quanto fa 0 × 358?', [['0', '0'], ['358', '358'], ['1', '1'], ['It is impossible', 'È impossibile']], ['Any number multiplied by 0 gives 0.', 'Qualsiasi numero moltiplicato per 0 dà 0.']),
      q('Which operation is impossible?', 'Quale operazione è impossibile?', [['9 ÷ 0', '9 : 0'], ['0 ÷ 9', '0 : 9'], ['9 × 0', '9 × 0'], ['9 − 0', '9 − 0']], ['You cannot divide by zero.', 'Non si può dividere per zero.'])
    ]
  }, numbersTaunt),
  makeG5MathMission({
    id: 'g5m-decimal-division', sec: '2.12', pages: '58', hue: 315,
    title: ['Division with Decimal Numbers', 'Divisioni con i numeri decimali'],
    topic: ['Decimal dividend, decimal divisor, and continuing a division after the point', 'Dividendo decimale, divisore decimale e divisione con quoziente decimale'],
    demon: ['The Divisor Phantom', 'il Fantasma del Divisore'],
    tech: ['Calculation Form · Fifth Technique: Clean Divide', 'Stile del Calcolo · Quinta Tecnica: Divisione Pulita'],
    lessons: [
      [
        '<p>🟦 <b>Decimal dividend</b>: divide as usual and, when you reach the point in the dividend, put the point in the quotient: 9.6 ÷ 4 = <b>2.4</b>.</p>',
        '<p>🟦 <b>Dividendo decimale</b>: esegui la divisione come al solito e, quando arrivi alla virgola del dividendo, metti la virgola nel quoziente: 9,6 : 4 = <b>2,4</b>.</p>'
      ],
      [
        '<p>🟪 <b>Decimal divisor</b>: use the invariant property to make the divisor a whole number. Multiply <b>both</b> terms by 10, 100… : 7.5 ÷ 0.5 = 75 ÷ 5 = <b>15</b>; 4.2 ÷ 0.06 = 420 ÷ 6 = <b>70</b>.</p>',
        '<p>🟪 <b>Divisore decimale</b>: usa la proprietà invariantiva per rendere intero il divisore. Moltiplica <b>entrambi</b> i termini per 10, 100… : 7,5 : 0,5 = 75 : 5 = <b>15</b>; 4,2 : 0,06 = 420 : 6 = <b>70</b>.</p>'
      ],
      [
        '<p>🔁 <b>Going past the point</b>: if a whole-number division has a remainder, you can continue by adding a point and zeros: 7 ÷ 4 = 1 remainder 3 → 7.00 ÷ 4 = <b>1.75</b>. This is how we share €7 among 4 friends!</p>',
        '<p>🔁 <b>Andare oltre la virgola</b>: se una divisione tra interi ha resto, puoi continuare aggiungendo la virgola e degli zeri: 7 : 4 = 1 con resto 3 → 7,00 : 4 = <b>1,75</b>. È così che si dividono 7 € fra 4 amici!</p>'
      ]
    ],
    quiz: [
      q('What is 9.6 ÷ 4?', 'Quanto fa 9,6 : 4?', [['2.4', '2,4'], ['24', '24'], ['2.04', '2,04'], ['0.24', '0,24']], ['96 tenths ÷ 4 = 24 tenths = 2.4.', '96 decimi : 4 = 24 decimi = 2,4.']),
      q('What is 7.5 ÷ 0.5?', 'Quanto fa 7,5 : 0,5?', [['15', '15'], ['1.5', '1,5'], ['3.75', '3,75'], ['150', '150']], ['Multiply both by 10: 75 ÷ 5 = 15.', 'Moltiplico entrambi per 10: 75 : 5 = 15.']),
      q('€7 are shared equally among 4 friends. How much does each get?', '7 € vengono divisi in parti uguali fra 4 amici. Quanto riceve ciascuno?', [['€1.75', '1,75 €'], ['€1.30', '1,30 €'], ['€1.03', '1,03 €'], ['€2.25', '2,25 €']], ['7.00 ÷ 4 = 1.75.', '7,00 : 4 = 1,75.']),
      q('To calculate 4.2 ÷ 0.06, which equal division can you do?', 'Per calcolare 4,2 : 0,06, quale divisione equivalente puoi eseguire?', [['420 ÷ 6', '420 : 6'], ['42 ÷ 6', '42 : 6'], ['4.2 ÷ 6', '4,2 : 6'], ['420 ÷ 60', '420 : 60']], ['Multiply both terms by 100: 420 ÷ 6 = 70.', 'Moltiplico entrambi i termini per 100: 420 : 6 = 70.'])
    ]
  }, numbersTaunt),
  makeG5MathMission({
    id: 'g5m-mental-estimates', sec: '2.13', pages: '59–61', hue: 330,
    title: ['Mental Strategies, the Calculator and Estimates', 'Strategie di calcolo, calcolatrice e stime'],
    topic: ['Decimal mental-calculation strategies, using a calculator wisely (STEM) and keeping estimates under control', 'Strategie di calcolo decimale, saper usare la calcolatrice (STEM) e stime sotto controllo'],
    demon: ['The Button Masher', 'lo Smanettone'],
    tech: ['Calculation Form · Sixth Technique: Quick Mind', 'Stile del Calcolo · Sesta Tecnica: Mente Rapida'],
    lessons: [
      [
        '<p>🧠 <b>Mental-calculation tricks</b>:</p><ul><li>× 5 = × 10 then ÷ 2 → 48 × 5 = 480 ÷ 2 = 240;</li><li>× 9 = × 10 minus the number → 9 × 23 = 230 − 23 = 207;</li><li>+ 99 = + 100 − 1 → 99 + 47 = 146;</li><li>use friendly pairs: 25 × 4 = 100; 0.5 + 0.5 = 1.</li></ul>',
        '<p>🧠 <b>Trucchi di calcolo mentale</b>:</p><ul><li>× 5 = × 10 e poi : 2 → 48 × 5 = 480 : 2 = 240;</li><li>× 9 = × 10 meno il numero → 9 × 23 = 230 − 23 = 207;</li><li>+ 99 = + 100 − 1 → 99 + 47 = 146;</li><li>usa le coppie amiche: 25 × 4 = 100; 0,5 + 0,5 = 1.</li></ul>'
      ],
      [
        '<p>🖩 <b>STEM – using the calculator</b>: it is fast but only does what you type. Before pressing “=”, make an <b>estimate</b>, so you notice typing mistakes. On many calculators the decimal key is “.”, even in Italy. Choose: mental calculation for easy numbers, written calculation or calculator for long ones.</p>',
        '<p>🖩 <b>STEM – saper usare la calcolatrice</b>: è veloce ma esegue solo ciò che digiti. Prima di premere «=» fai una <b>stima</b>, così ti accorgi degli errori di battitura. Su molte calcolatrici il tasto dei decimali è «.», anche in Italia. Scegli tu: calcolo mentale per i numeri facili, calcolo scritto o calcolatrice per quelli lunghi.</p>'
      ],
      [
        '<p>🎯 <b>Estimates under control</b>: round the numbers and calculate quickly. 398 + 205 ≈ 400 + 200 = 600. 31 × 19 ≈ 30 × 20 = 600. If the calculator shows 6 027 for 31 × 19, the estimate tells you something went wrong (the right answer is 589).</p>',
        '<p>🎯 <b>Stime sotto controllo</b>: arrotonda i numeri e calcola velocemente. 398 + 205 ≈ 400 + 200 = 600. 31 × 19 ≈ 30 × 20 = 600. Se la calcolatrice mostra 6 027 per 31 × 19, la stima ti avverte che qualcosa non va (il risultato giusto è 589).</p>'
      ]
    ],
    quiz: [
      q('What is 48 × 5, calculated as × 10 then ÷ 2?', 'Quanto fa 48 × 5, calcolato come × 10 e poi : 2?', [['240', '240'], ['480', '480'], ['200', '200'], ['2 400', '2 400']], ['48 × 10 = 480; 480 ÷ 2 = 240.', '48 × 10 = 480; 480 : 2 = 240.']),
      q('What is 9 × 23?', 'Quanto fa 9 × 23?', [['207', '207'], ['230', '230'], ['217', '217'], ['193', '193']], ['230 − 23 = 207.', '230 − 23 = 207.']),
      q('Which is the best estimate of 398 + 205?', 'Qual è la stima migliore di 398 + 205?', [['600', '600'], ['500', '500'], ['700', '700'], ['6 000', '6 000']], ['400 + 200 = 600.', '400 + 200 = 600.']),
      q('A calculator shows 6 027 for 31 × 19. What should you think?', 'La calcolatrice mostra 6 027 per 31 × 19. Che cosa devi pensare?', [['It is wrong: the estimate is about 600', 'È sbagliato: la stima è circa 600'], ['It is right: calculators never fail', 'È giusto: le calcolatrici non sbagliano mai'], ['It is right because 6 027 is odd', 'È giusto perché 6 027 è dispari'], ['Nothing: estimates are useless', 'Niente: le stime non servono']], ['30 × 20 = 600, far from 6 027: a key was pressed wrongly.', '30 × 20 = 600, lontano da 6 027: è stato premuto un tasto sbagliato.'])
    ]
  }, numbersTaunt),
  makeG5MathMission({
    id: 'g5m-expressions', sec: '2.14', pages: '64–65', hue: 345,
    title: ['Arithmetic Expressions', 'Le espressioni aritmetiche'],
    topic: ['Order of operations and brackets ( ), [ ], { }', 'Ordine delle operazioni e parentesi tonde, quadre e graffe'],
    demon: ['The Bracket Bandit', 'il Bandito delle Parentesi'],
    tech: ['Calculation Form · Seventh Technique: Right Order', 'Stile del Calcolo · Settima Tecnica: Ordine Giusto'],
    lessons: [
      [
        '<p>📝 An <b>expression</b> is a chain of operations. Without brackets: first <b>× and ÷</b> (in order from left to right), then <b>+ and −</b> (from left to right).</p><p>5 + 3 × 4 = 5 + 12 = <b>17</b> (not 32!).</p>',
        '<p>📝 Un’<b>espressione</b> è una catena di operazioni. Senza parentesi: prima <b>× e :</b> (nell’ordine da sinistra a destra), poi <b>+ e −</b> (da sinistra a destra).</p><p>5 + 3 × 4 = 5 + 12 = <b>17</b> (non 32!).</p>'
      ],
      [
        '<p>🧷 <b>Brackets</b> come first: round ( ), then square [ ], then curly { }.</p><p>{[(2 + 3) × 4] − 5} ÷ 3<br>= {[5 × 4] − 5} ÷ 3<br>= {20 − 5} ÷ 3<br>= 15 ÷ 3 = <b>5</b></p>',
        '<p>🧷 Le <b>parentesi</b> hanno la precedenza: prima le tonde ( ), poi le quadre [ ], infine le graffe { }.</p><p>{[(2 + 3) × 4] − 5} : 3<br>= {[5 × 4] − 5} : 3<br>= {20 − 5} : 3<br>= 15 : 3 = <b>5</b></p>'
      ],
      [
        '<p>✍️ Work <b>one step per line</b> and copy the parts you have not calculated yet. Expressions can also describe problems: “I buy 2 books at €8 and a pen at €3, paying with €20” → 20 − (2 × 8 + 3) = 20 − 19 = <b>€1</b> change.</p>',
        '<p>✍️ Esegui <b>un passaggio per riga</b> e ricopia le parti non ancora calcolate. Le espressioni possono anche descrivere problemi: «compro 2 libri da 8 € e una penna da 3 €, pagando con 20 €» → 20 − (2 × 8 + 3) = 20 − 19 = <b>1 €</b> di resto.</p>'
      ]
    ],
    quiz: [
      q('What is 5 + 3 × 4?', 'Quanto vale 5 + 3 × 4?', [['17', '17'], ['32', '32'], ['20', '20'], ['12', '12']], ['Multiplication first: 3 × 4 = 12; then 5 + 12 = 17.', 'Prima la moltiplicazione: 3 × 4 = 12; poi 5 + 12 = 17.']),
      q('What is (5 + 3) × 4?', 'Quanto vale (5 + 3) × 4?', [['32', '32'], ['17', '17'], ['27', '27'], ['12', '12']], ['Brackets first: 8 × 4 = 32.', 'Prima le parentesi: 8 × 4 = 32.']),
      q('What is {[(2 + 3) × 4] − 5} ÷ 3?', 'Quanto vale {[(2 + 3) × 4] − 5} : 3?', [['5', '5'], ['15', '15'], ['3', '3'], ['20', '20']], ['(5 × 4 − 5) ÷ 3 = 15 ÷ 3 = 5.', '(5 × 4 − 5) : 3 = 15 : 3 = 5.']),
      q('What is 20 − 12 ÷ 4 + 1?', 'Quanto vale 20 − 12 : 4 + 1?', [['18', '18'], ['3', '3'], ['16', '16'], ['4', '4']], ['12 ÷ 4 = 3; 20 − 3 + 1 = 18.', '12 : 4 = 3; 20 − 3 + 1 = 18.'])
    ]
  }, numbersTaunt),
  makeG5MathMission({
    id: 'g5m-multiples-divisors', sec: '2.15', pages: '66', hue: 5,
    title: ['Multiples and Divisors', 'Multipli e divisori'],
    topic: ['Finding multiples and divisors of a number', 'Trovare i multipli e i divisori di un numero'],
    demon: ['The Table Twister', 'il Torcitabelline'],
    tech: ['Number Form · Eighth Technique: Hidden Family', 'Stile dei Numeri · Ottava Tecnica: Famiglia Nascosta'],
    lessons: [
      [
        '<p>👨‍👩‍👧 The <b>multiples</b> of a number are the results of its times table: multiples of 4 → 0, 4, 8, 12, 16, 20… They are <b>infinite</b>. Every number is a multiple of itself and of 1.</p>',
        '<p>👨‍👩‍👧 I <b>multipli</b> di un numero sono i risultati della sua tabellina: multipli di 4 → 0, 4, 8, 12, 16, 20… Sono <b>infiniti</b>. Ogni numero è multiplo di sé stesso e di 1.</p>'
      ],
      [
        '<p>🔑 A <b>divisor</b> of a number divides it <b>exactly</b> (remainder 0). Divisors of 12 → 1, 2, 3, 4, 6, 12. The divisors of a number are <b>finite</b>: 1 and the number itself are always among them.</p>',
        '<p>🔑 Un <b>divisore</b> di un numero lo divide <b>esattamente</b> (resto 0). Divisori di 12 → 1, 2, 3, 4, 6, 12. I divisori di un numero sono in numero <b>finito</b>: tra loro ci sono sempre l’1 e il numero stesso.</p>'
      ],
      [
        '<p>🔁 Multiples and divisors are two sides of the same coin: if 24 is a multiple of 6, then 6 is a divisor of 24. To list divisors, look for <b>pairs</b>: 24 = 1 × 24 = 2 × 12 = 3 × 8 = 4 × 6.</p>',
        '<p>🔁 Multipli e divisori sono due facce della stessa medaglia: se 24 è multiplo di 6, allora 6 è divisore di 24. Per trovare i divisori cerca le <b>coppie</b>: 24 = 1 × 24 = 2 × 12 = 3 × 8 = 4 × 6.</p>'
      ]
    ],
    quiz: [
      q('Which number is a multiple of 7?', 'Quale numero è multiplo di 7?', [['63', '63'], ['45', '45'], ['37', '37'], ['17', '17']], ['63 = 7 × 9.', '63 = 7 × 9.']),
      q('Which list contains all the divisors of 18?', 'Quale elenco contiene tutti i divisori di 18?', [['1, 2, 3, 6, 9, 18', '1, 2, 3, 6, 9, 18'], ['1, 2, 3, 9', '1, 2, 3, 9'], ['2, 3, 6, 9', '2, 3, 6, 9'], ['18, 36, 54', '18, 36, 54']], ['18 = 1 × 18 = 2 × 9 = 3 × 6.', '18 = 1 × 18 = 2 × 9 = 3 × 6.']),
      q('If 40 is a multiple of 8, then…', 'Se 40 è multiplo di 8, allora…', [['8 is a divisor of 40', '8 è divisore di 40'], ['40 is a divisor of 8', '40 è divisore di 8'], ['8 is a multiple of 40', '8 è multiplo di 40'], ['40 has no divisors', '40 non ha divisori']], ['Multiple and divisor are the same relationship read in two ways.', 'Multiplo e divisore sono la stessa relazione letta in due modi.']),
      q('How many multiples does a number have?', 'Quanti multipli ha un numero?', [['Infinitely many', 'Infiniti'], ['Ten', 'Dieci'], ['As many as its divisors', 'Tanti quanti i suoi divisori'], ['Only one', 'Uno solo']], ['The times table never ends.', 'La tabellina non finisce mai.'])
    ]
  }, numbersTaunt),
  makeG5MathMission({
    id: 'g5m-divisibility', sec: '2.16', pages: '67', hue: 15,
    title: ['Divisibility Rules', 'Criteri di divisibilità'],
    topic: ['Rules for 2, 3, 4, 5, 9, 10, 25, 100', 'Criteri di divisibilità per 2, 3, 4, 5, 9, 10, 25, 100'],
    demon: ['The Lock of Remainders', 'il Lucchetto dei Resti'],
    tech: ['Number Form · Ninth Technique: Instant Test', 'Stile dei Numeri · Nona Tecnica: Prova Istantanea'],
    lessons: [
      [
        '<p>🔓 A number is divisible by:</p><ul><li><b>2</b> if its last digit is even (0, 2, 4, 6, 8);</li><li><b>5</b> if it ends in 0 or 5;</li><li><b>10</b> if it ends in 0; <b>100</b> if it ends in 00;</li><li><b>4</b> if its last two digits form a multiple of 4 (or are 00): 316 → 16 ✓;</li><li><b>25</b> if it ends in 00, 25, 50 or 75.</li></ul>',
        '<p>🔓 Un numero è divisibile per:</p><ul><li><b>2</b> se l’ultima cifra è pari (0, 2, 4, 6, 8);</li><li><b>5</b> se termina con 0 o 5;</li><li><b>10</b> se termina con 0; <b>100</b> se termina con 00;</li><li><b>4</b> se le ultime due cifre formano un multiplo di 4 (o sono 00): 316 → 16 ✓;</li><li><b>25</b> se termina con 00, 25, 50 o 75.</li></ul>'
      ],
      [
        '<p>➕ For <b>3</b> and <b>9</b> add the digits: a number is divisible by 3 if the <b>sum of its digits</b> is a multiple of 3, and by 9 if the sum is a multiple of 9.</p><p>471 → 4 + 7 + 1 = 12 → divisible by 3, not by 9. 738 → 7 + 3 + 8 = 18 → divisible by 3 and by 9.</p>',
        '<p>➕ Per il <b>3</b> e il <b>9</b> somma le cifre: un numero è divisibile per 3 se la <b>somma delle sue cifre</b> è multiplo di 3, e per 9 se la somma è multiplo di 9.</p><p>471 → 4 + 7 + 1 = 12 → divisibile per 3, non per 9. 738 → 7 + 3 + 8 = 18 → divisibile per 3 e per 9.</p>'
      ],
      [
        '<p>🧩 Rules save time in problems: “Can 72 pupils form teams of 3 with nobody left out?” 7 + 2 = 9 → yes, 72 ÷ 3 = 24 teams. Combine rules: a number divisible by both 2 and 3 is divisible by 6.</p>',
        '<p>🧩 I criteri fanno risparmiare tempo nei problemi: «72 alunni possono formare squadre da 3 senza che nessuno resti escluso?» 7 + 2 = 9 → sì, 72 : 3 = 24 squadre. Combina i criteri: un numero divisibile sia per 2 sia per 3 è divisibile per 6.</p>'
      ]
    ],
    quiz: [
      q('Which number is divisible by 3?', 'Quale numero è divisibile per 3?', [['471', '471'], ['472', '472'], ['475', '475'], ['467', '467']], ['4 + 7 + 1 = 12, a multiple of 3.', '4 + 7 + 1 = 12, multiplo di 3.']),
      q('Which number is divisible by 4?', 'Quale numero è divisibile per 4?', [['316', '316'], ['318', '318'], ['322', '322'], ['314', '314']], ['Its last two digits, 16, are a multiple of 4.', 'Le ultime due cifre, 16, sono multiplo di 4.']),
      q('738 is divisible by…', '738 è divisibile per…', [['2, 3 and 9', '2, 3 e 9'], ['5 and 10', '5 e 10'], ['only 2', 'solo 2'], ['4 and 25', '4 e 25']], ['It is even, and 7 + 3 + 8 = 18, a multiple of 3 and of 9.', 'È pari e 7 + 3 + 8 = 18, multiplo di 3 e di 9.']),
      q('Which number is divisible by 25?', 'Quale numero è divisibile per 25?', [['1 375', '1 375'], ['1 355', '1 355'], ['1 320', '1 320'], ['1 305', '1 305']], ['It ends in 75.', 'Termina con 75.'])
    ]
  }, numbersTaunt),
  makeG5MathMission({
    id: 'g5m-primes', sec: '2.17', pages: '68–69', hue: 30,
    title: ['Prime Numbers and Prime Factorisation', 'Numeri primi e scomposizione in fattori primi'],
    topic: ['Prime and composite numbers, the sieve of Eratosthenes (Maths on the Road) and factor trees', 'Numeri primi e composti, il crivello di Eratostene (Mate in viaggio) e la scomposizione in fattori primi'],
    demon: ['The Composite Colossus', 'il Colosso Composto'],
    tech: ['Number Form · Tenth Technique: Prime Sieve', 'Stile dei Numeri · Decima Tecnica: Setaccio dei Primi'],
    lessons: [
      [
        '<p>💎 A <b>prime number</b> has <b>exactly two divisors</b>: 1 and itself. 2, 3, 5, 7, 11, 13, 17, 19, 23, 29… are prime. Numbers with more than two divisors are <b>composite</b> (12 has six). <b>1 is not prime</b> (it has only one divisor), and <b>2</b> is the only even prime.</p>',
        '<p>💎 Un <b>numero primo</b> ha <b>esattamente due divisori</b>: 1 e sé stesso. 2, 3, 5, 7, 11, 13, 17, 19, 23, 29… sono primi. I numeri con più di due divisori sono <b>composti</b> (12 ne ha sei). <b>L’1 non è primo</b> (ha un solo divisore) e il <b>2</b> è l’unico numero primo pari.</p>'
      ],
      [
        '<p>🏺 <b>Maths on the Road – an ancient method for primes</b>: the Greek scholar <b>Eratosthenes</b>, who lived more than 2 000 years ago, invented a “sieve”. Write the numbers from 2 to 100; circle 2 and cross out its multiples; circle 3 and cross out its multiples; continue with 5 and 7. The numbers left are the primes up to 100 — there are 25 of them.</p>',
        '<p>🏺 <b>Mate in viaggio – un metodo antico per i numeri primi</b>: lo studioso greco <b>Eratostene</b>, vissuto più di 2 000 anni fa, ideò un «crivello» (un setaccio). Scrivi i numeri da 2 a 100; cerchia il 2 e cancella i suoi multipli; cerchia il 3 e cancella i suoi multipli; continua con 5 e 7. I numeri rimasti sono i primi fino a 100: sono 25.</p>'
      ],
      [
        '<p>🌲 Every composite number can be written as a product of primes (<b>prime factorisation</b>). Use a factor tree or divide by the smallest primes: 60 ÷ 2 = 30, 30 ÷ 2 = 15, 15 ÷ 3 = 5, 5 ÷ 5 = 1 → 60 = 2 × 2 × 3 × 5 = <b>2² × 3 × 5</b>.</p>',
        '<p>🌲 Ogni numero composto si può scrivere come prodotto di numeri primi (<b>scomposizione in fattori primi</b>). Usa l’albero dei fattori o dividi per i primi più piccoli: 60 : 2 = 30, 30 : 2 = 15, 15 : 3 = 5, 5 : 5 = 1 → 60 = 2 × 2 × 3 × 5 = <b>2² × 3 × 5</b>.</p>'
      ]
    ],
    quiz: [
      q('Which number is prime?', 'Quale numero è primo?', [['29', '29'], ['27', '27'], ['21', '21'], ['39', '39']], ['29 has only the divisors 1 and 29.', '29 ha solo i divisori 1 e 29.']),
      q('What is the prime factorisation of 60?', 'Qual è la scomposizione in fattori primi di 60?', [['2² × 3 × 5', '2² × 3 × 5'], ['6 × 10', '6 × 10'], ['2 × 30', '2 × 30'], ['4 × 15', '4 × 15']], ['Only primes are allowed: 2 × 2 × 3 × 5.', 'Sono ammessi solo fattori primi: 2 × 2 × 3 × 5.']),
      q('Why is 1 not a prime number?', 'Perché 1 non è un numero primo?', [['It has only one divisor', 'Ha un solo divisore'], ['It is even', 'È pari'], ['It is too big', 'È troppo grande'], ['It has three divisors', 'Ha tre divisori']], ['A prime needs exactly two different divisors.', 'Un numero primo deve avere esattamente due divisori diversi.']),
      q('In the sieve of Eratosthenes, what do you cross out after circling 3?', 'Nel crivello di Eratostene, che cosa cancelli dopo aver cerchiato il 3?', [['The other multiples of 3', 'Gli altri multipli di 3'], ['All odd numbers', 'Tutti i numeri dispari'], ['The divisors of 3', 'I divisori di 3'], ['The number 3', 'Il numero 3']], ['Multiples of 3 (6, 9, 12…) cannot be prime.', 'I multipli di 3 (6, 9, 12…) non possono essere primi.'])
    ]
  }, numbersTaunt),
  makeG5MathMission({
    id: 'g5m-numbers-review', sec: '2.18', pages: '70–75', hue: 45,
    title: ['Check-Up: Numbers and Civic Education', 'Adesso so: numeri ed educazione civica'],
    topic: ['Summary map, unit test, Invalsi-style questions and “Numbers to think about” (civic education)', 'Mappa di sintesi, verifica, verso l’Invalsi e «Numeri per riflettere» (educazione civica)'],
    demon: ['The Unit Guardian of Numbers', 'il Guardiano dei Numeri'],
    tech: ['Number Form · Mastery Seal: Number Master', 'Stile dei Numeri · Sigillo di Maestria: Maestro dei Numeri'],
    lessons: [
      [
        '<p>🗺️ <b>Let’s see it clearly</b>: classes and orders; Roman numerals; powers (base, exponent); integers on the number line; decimals; rounding; the four operations and their properties; × and ÷ by 10, 100, 1 000; expressions with brackets; multiples, divisors, divisibility rules and prime numbers.</p>',
        '<p>🗺️ <b>Vediamoci chiaro</b>: classi e ordini; numeri romani; potenze (base ed esponente); numeri relativi sulla retta; numeri decimali; arrotondamenti; le quattro operazioni e le loro proprietà; × e : per 10, 100, 1 000; espressioni con le parentesi; multipli, divisori, criteri di divisibilità e numeri primi.</p>'
      ],
      [
        '<p>💧 <b>Civic education – numbers to think about</b>: numbers help us understand real choices. Imagine a dripping tap wastes about 5 litres of water a day: in a week that is 5 × 7 = 35 l, in a year 5 × 365 = 1 825 l! (These are example numbers: real amounts depend on the tap.) Calculating helps us decide to save resources.</p>',
        '<p>💧 <b>Educazione civica – numeri per riflettere</b>: i numeri ci aiutano a capire scelte reali. Immagina che un rubinetto che gocciola sprechi circa 5 litri d’acqua al giorno: in una settimana sono 5 × 7 = 35 l, in un anno 5 × 365 = 1 825 l! (Sono numeri di esempio: le quantità reali dipendono dal rubinetto.) Calcolare ci aiuta a decidere di risparmiare le risorse.</p>'
      ],
      [
        '<p>🏁 <b>Towards Invalsi</b>: in number questions, watch the place of each digit and the decimal point, estimate before calculating and use the inverse operation to check. Ready?</p>',
        '<p>🏁 <b>Verso l’Invalsi</b>: nelle domande sui numeri fai attenzione al posto di ogni cifra e alla virgola, stima prima di calcolare e usa l’operazione inversa per controllare. Pronta e pronto?</p>'
      ]
    ],
    quiz: [
      q('Which decimal is 15 tens and 86 thousandths?', 'Quale numero decimale corrisponde a 15 decine e 86 millesimi?', [['150.086', '150,086'], ['15.86', '15,86'], ['150.86', '150,86'], ['1 586', '1 586']], ['15 tens = 150; 86 thousandths = 0.086.', '15 decine = 150; 86 millesimi = 0,086.']),
      q('Which number added to itself gives 2.5?', 'Quale numero sommato a sé stesso dà 2,5?', [['1.25', '1,25'], ['1.5', '1,5'], ['1.2', '1,2'], ['5', '5']], ['1.25 + 1.25 = 2.5, that is 2.5 ÷ 2.', '1,25 + 1,25 = 2,5, cioè 2,5 : 2.']),
      q('A tap wastes 5 l of water a day. How much in a week?', 'Un rubinetto spreca 5 l d’acqua al giorno. Quanti in una settimana?', [['35 l', '35 l'], ['12 l', '12 l'], ['50 l', '50 l'], ['1 825 l', '1 825 l']], ['5 × 7 = 35.', '5 × 7 = 35.']),
      q('Is 3 a divisor of 72? Why?', 'Il 3 è divisore di 72? Perché?', [['Yes, because 7 + 2 = 9 is a multiple of 3', 'Sì, perché 7 + 2 = 9 è multiplo di 3'], ['No, because 72 is even', 'No, perché 72 è pari'], ['No, because 72 does not end in 3', 'No, perché 72 non termina con 3'], ['Yes, because 72 ends in 2', 'Sì, perché 72 termina con 2']], ['Divisibility by 3 depends on the sum of the digits: 72 ÷ 3 = 24.', 'La divisibilità per 3 dipende dalla somma delle cifre: 72 : 3 = 24.'])
    ]
  }, numbersTaunt)
];
