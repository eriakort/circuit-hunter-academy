import type { Mission } from '../types';
import { makeG5MathMission, q, type Pair } from './grade5MathCommon';

const measureTaunt = (demon: Pair): Pair => [
  `<p>📏 I am ${demon[0]}! I mix up metres and litres and move every unit to the wrong column. Can you convert without mistakes?</p>`,
  `<p>📏 Sono ${demon[1]}! Confondo metri e litri e sposto ogni unità nella colonna sbagliata. Sai fare le equivalenze senza errori?</p>`
];

/** Misura · pages 96–117. */
export const GRADE5_MATH_MEASURE_MISSIONS: Mission[] = [
  makeG5MathMission({
    id: 'g5m-what-is-measuring', sec: '4.1', pages: '97', hue: 190,
    title: ['What Does Measuring Mean?', 'Che cosa significa misurare?'],
    topic: ['Quantities, units of measure and the International System', 'Grandezze, unità di misura e Sistema Internazionale'],
    demon: ['The Spanner of Spans', 'il Misuratore a Spanne'],
    tech: ['Measure Form · First Technique: True Unit', 'Stile della Misura · Prima Tecnica: Unità Vera'],
    lessons: [
      [
        '<p>📐 <b>To measure</b> a quantity means to <b>compare</b> it with another quantity of the same kind chosen as the <b>unit of measure</b>, and count how many times the unit fits. A measure is always a <b>number + a unit</b>: “12” alone means nothing, “12 m” does!</p>',
        '<p>📐 <b>Misurare</b> una grandezza significa <b>confrontarla</b> con un’altra grandezza dello stesso tipo scelta come <b>unità di misura</b>, e contare quante volte l’unità vi è contenuta. Una misura è sempre <b>numero + unità di misura</b>: «12» da solo non dice nulla, «12 m» sì!</p>'
      ],
      [
        '<p>🦶 In the past people measured with <b>arbitrary units</b> such as hand spans, feet and steps, but they change from person to person. To understand each other, we use <b>conventional units</b>, the same everywhere: the <b>International System (SI)</b>.</p>',
        '<p>🦶 In passato si misurava con <b>unità arbitrarie</b> come spanne, piedi e passi, che però cambiano da persona a persona. Per capirci tutti usiamo <b>unità convenzionali</b>, uguali dappertutto: il <b>Sistema Internazionale (SI)</b>.</p>'
      ],
      [
        '<p>🌍 Main units you meet in Grade 5: <b>metre</b> (length), <b>litre</b> (capacity), <b>kilogram</b> (mass), <b>square metre</b> (area), <b>cubic metre</b> (volume), <b>second</b> (time). The <b>euro</b> is the unit of value (money) in Italy. Most of these units are <b>decimal</b>: they go up and down by 10, 100, 1 000.</p>',
        '<p>🌍 Le principali unità che incontri in quinta: <b>metro</b> (lunghezza), <b>litro</b> (capacità), <b>chilogrammo</b> (massa), <b>metro quadrato</b> (superficie), <b>metro cubo</b> (volume), <b>secondo</b> (tempo). L’<b>euro</b> è l’unità di valore (moneta) in Italia. Quasi tutte queste unità sono <b>decimali</b>: crescono e diminuiscono di 10, 100, 1 000.</p>'
      ]
    ],
    quiz: [
      q('What does measuring mean?', 'Che cosa significa misurare?', [['Comparing a quantity with a chosen unit', 'Confrontare una grandezza con un’unità scelta'], ['Guessing a number', 'Indovinare un numero'], ['Writing any number', 'Scrivere un numero qualsiasi'], ['Using only your feet', 'Usare solo i piedi']], ['A measure tells how many times the unit fits in the quantity.', 'La misura dice quante volte l’unità è contenuta nella grandezza.']),
      q('Why do we use conventional units?', 'Perché usiamo unità convenzionali?', [['They are the same for everyone', 'Sono uguali per tutti'], ['They are longer', 'Sono più lunghe'], ['They were invented yesterday', 'Sono state inventate ieri'], ['They change from person to person', 'Cambiano da persona a persona']], ['Shared units let everyone understand the same measure.', 'Unità condivise permettono a tutti di capire la stessa misura.']),
      q('Which unit measures time in the SI?', 'Quale unità misura il tempo nel SI?', [['The second', 'Il secondo'], ['The litre', 'Il litro'], ['The metre', 'Il metro'], ['The gram', 'Il grammo']], ['The SI unit of time is the second (s).', 'L’unità del tempo nel SI è il secondo (s).']),
      q('Which of these is a complete measure?', 'Quale di queste è una misura completa?', [['25 kg', '25 kg'], ['25', '25'], ['kilograms', 'chilogrammi'], ['very heavy', 'molto pesante']], ['A measure needs a number and a unit.', 'Una misura ha bisogno di un numero e di un’unità.'])
    ]
  }, measureTaunt),
  makeG5MathMission({
    id: 'g5m-length', sec: '4.2', pages: '98', hue: 205,
    title: ['Measures of Length', 'Misure di lunghezza'],
    topic: ['The metre, its multiples and submultiples; conversions', 'Il metro, i suoi multipli e sottomultipli; le equivalenze'],
    demon: ['The Stretchy Ribbon', 'il Nastro Elastico'],
    tech: ['Measure Form · Second Technique: Metre March', 'Stile della Misura · Seconda Tecnica: Marcia del Metro'],
    lessons: [
      { vis: 'g5m-length-table', text: [
        '<p>📏 The unit of length is the <b>metre (m)</b>. Multiples: <b>dam</b> (10 m), <b>hm</b> (100 m), <b>km</b> (1 000 m). Submultiples: <b>dm</b> (0.1 m), <b>cm</b> (0.01 m), <b>mm</b> (0.001 m). Each unit is <b>10 times</b> the one on its right.</p>',
        '<p>📏 L’unità di misura della lunghezza è il <b>metro (m)</b>. Multipli: <b>dam</b> (10 m), <b>hm</b> (100 m), <b>km</b> (1 000 m). Sottomultipli: <b>dm</b> (0,1 m), <b>cm</b> (0,01 m), <b>mm</b> (0,001 m). Ogni unità è <b>10 volte</b> quella alla sua destra.</p>'
      ] },
      { vis: 'g5m-equivalences', text: [
        '<p>🔁 <b>Conversions</b> (equivalenze): to go to a <b>smaller</b> unit <b>multiply</b> by 10, 100, 1 000 (one, two, three steps); to go to a <b>bigger</b> unit <b>divide</b>. 6 m × 100 = 600 cm; 4 500 m ÷ 1 000 = 4.5 km.</p>',
        '<p>🔁 <b>Equivalenze</b>: per passare a un’unità <b>più piccola moltiplica</b> per 10, 100, 1 000 (uno, due, tre passi); per passare a un’unità <b>più grande dividi</b>. 6 m × 100 = 600 cm; 4 500 m : 1 000 = 4,5 km.</p>'
      ] },
      [
        '<p>🧭 Choose the right unit: km for distances between towns, m for a classroom, cm for a pencil, mm for an ant. Before adding lengths, convert them to the <b>same unit</b>: 1.2 m + 35 cm = 120 cm + 35 cm = 155 cm.</p>',
        '<p>🧭 Scegli l’unità adatta: km per le distanze tra città, m per un’aula, cm per una matita, mm per una formica. Prima di sommare delle lunghezze trasformale nella <b>stessa unità</b>: 1,2 m + 35 cm = 120 cm + 35 cm = 155 cm.</p>'
      ]
    ],
    quiz: [
      q('Convert: 4 500 m = ? km', 'Completa l’equivalenza: 4 500 m = ? km', [['4.5 km', '4,5 km'], ['45 km', '45 km'], ['0.45 km', '0,45 km'], ['450 km', '450 km']], ['From m to km: three steps, ÷ 1 000.', 'Da m a km: tre passi, : 1 000.']),
      q('Convert: 3.7 dm = ? mm', 'Completa l’equivalenza: 3,7 dm = ? mm', [['370 mm', '370 mm'], ['37 mm', '37 mm'], ['3 700 mm', '3 700 mm'], ['0.37 mm', '0,37 mm']], ['From dm to mm: two steps, × 100.', 'Da dm a mm: due passi, × 100.']),
      q('What is 1.2 m + 35 cm?', 'Quanto fa 1,2 m + 35 cm?', [['155 cm', '155 cm'], ['36.2 cm', '36,2 cm'], ['47 cm', '47 cm'], ['1.55 cm', '1,55 cm']], ['1.2 m = 120 cm; 120 + 35 = 155 cm.', '1,2 m = 120 cm; 120 + 35 = 155 cm.']),
      q('Which unit is best for the distance between Rome and Milan?', 'Quale unità è più adatta per la distanza tra Roma e Milano?', [['Kilometre', 'Chilometro'], ['Centimetre', 'Centimetro'], ['Millimetre', 'Millimetro'], ['Decimetre', 'Decimetro']], ['Large distances are measured in km.', 'Le grandi distanze si misurano in km.'])
    ]
  }, measureTaunt),
  makeG5MathMission({
    id: 'g5m-capacity', sec: '4.3', pages: '99', hue: 220,
    title: ['Measures of Capacity', 'Misure di capacità'],
    topic: ['The litre, its multiples and submultiples', 'Il litro, i suoi multipli e sottomultipli'],
    demon: ['The Leaky Bucket', 'il Secchio Bucato'],
    tech: ['Measure Form · Third Technique: Full Flask', 'Stile della Misura · Terza Tecnica: Borraccia Piena'],
    lessons: [
      { vis: 'g5m-capacity-table', text: [
        '<p>🥤 <b>Capacity</b> is how much a container can hold. Its unit is the <b>litre (l)</b>. Multiples: <b>dal</b> (10 l) and <b>hl</b> (100 l). Submultiples: <b>dl</b> (0.1 l), <b>cl</b> (0.01 l), <b>ml</b> (0.001 l).</p>',
        '<p>🥤 La <b>capacità</b> è quanto liquido può contenere un recipiente. La sua unità è il <b>litro (l)</b>. Multipli: <b>dal</b> (10 l) ed <b>hl</b> (100 l). Sottomultipli: <b>dl</b> (0,1 l), <b>cl</b> (0,01 l), <b>ml</b> (0,001 l).</p>'
      ] },
      [
        '<p>🔁 The table works exactly like the metre table: 9 500 cl ÷ 100 = <b>95 l</b>; 2.5 l × 1 000 = <b>2 500 ml</b>; 3 hl = <b>300 l</b>.</p>',
        '<p>🔁 La tabella funziona proprio come quella del metro: 9 500 cl : 100 = <b>95 l</b>; 2,5 l × 1 000 = <b>2 500 ml</b>; 3 hl = <b>300 l</b>.</p>'
      ],
      [
        '<p>🧃 Everyday capacities: a spoon ≈ 5 ml, a can 33 cl, a water bottle 1.5 l, a bathtub about 1–2 hl. Problem: “How many 25 cl glasses can you fill with a 1.5 l bottle?” 1.5 l = 150 cl; 150 ÷ 25 = <b>6 glasses</b>.</p>',
        '<p>🧃 Capacità di tutti i giorni: un cucchiaino ≈ 5 ml, una lattina 33 cl, una bottiglia d’acqua 1,5 l, una vasca da bagno circa 1–2 hl. Problema: «Quanti bicchieri da 25 cl riempi con una bottiglia da 1,5 l?» 1,5 l = 150 cl; 150 : 25 = <b>6 bicchieri</b>.</p>'
      ]
    ],
    quiz: [
      q('Convert: 9 500 cl = ? l', 'Completa l’equivalenza: 9 500 cl = ? l', [['95 l', '95 l'], ['950 l', '950 l'], ['9.5 l', '9,5 l'], ['950 000 l', '950 000 l']], ['From cl to l: two steps, ÷ 100.', 'Da cl a l: due passi, : 100.']),
      q('Convert: 2.5 l = ? ml', 'Completa l’equivalenza: 2,5 l = ? ml', [['2 500 ml', '2 500 ml'], ['250 ml', '250 ml'], ['25 ml', '25 ml'], ['0.0025 ml', '0,0025 ml']], ['× 1 000.', '× 1 000.']),
      q('How many 25 cl glasses can you fill with 1.5 l?', 'Quanti bicchieri da 25 cl riempi con 1,5 l?', [['6', '6'], ['4', '4'], ['60', '60'], ['15', '15']], ['1.5 l = 150 cl; 150 ÷ 25 = 6.', '1,5 l = 150 cl; 150 : 25 = 6.']),
      q('How many litres are 3 hl?', 'Quanti litri sono 3 hl?', [['300 l', '300 l'], ['30 l', '30 l'], ['3 000 l', '3 000 l'], ['0.03 l', '0,03 l']], ['1 hl = 100 l.', '1 hl = 100 l.'])
    ]
  }, measureTaunt),
  makeG5MathMission({
    id: 'g5m-mass', sec: '4.4', pages: '100–101', hue: 235,
    title: ['Measures of Mass (Weight)', 'Misure di massa (peso)'],
    topic: ['The kilogram and the gram; gross weight, net weight and tare', 'Il chilogrammo e il grammo; peso lordo, peso netto e tara'],
    demon: ['The Tipsy Scale', 'la Bilancia Ubriaca'],
    tech: ['Measure Form · Fourth Technique: Steady Scale', 'Stile della Misura · Quarta Tecnica: Bilancia Ferma'],
    lessons: [
      { vis: 'g5m-mass-table', text: [
        '<p>⚖️ The unit of <b>mass</b> is the <b>kilogram (kg)</b>. Bigger: 10 kg, 100 kg and the <b>megagram (Mg)</b> = 1 000 kg, also called a <b>tonne</b>. Smaller: <b>hg</b> (0.1 kg), <b>dag</b> (0.01 kg), <b>g</b> (0.001 kg). The gram has its own submultiples: <b>dg, cg, mg</b>.</p>',
        '<p>⚖️ L’unità di misura della <b>massa</b> è il <b>chilogrammo (kg)</b>. Multipli: 10 kg, 100 kg e il <b>megagrammo (Mg)</b> = 1 000 kg, chiamato anche <b>tonnellata</b>. Sottomultipli: <b>hg</b> (0,1 kg), <b>dag</b> (0,01 kg), <b>g</b> (0,001 kg). Il grammo ha a sua volta i sottomultipli <b>dg, cg, mg</b>.</p>'
      ] },
      [
        '<p>🔁 Conversions: 1 kg = 10 hg = 100 dag = 1 000 g. 2.4 kg = <b>2 400 g</b>; 750 g = <b>0.75 kg</b>; 3 hg = <b>300 g</b>; 1 g = 1 000 mg.</p>',
        '<p>🔁 Equivalenze: 1 kg = 10 hg = 100 dag = 1 000 g. 2,4 kg = <b>2 400 g</b>; 750 g = <b>0,75 kg</b>; 3 hg = <b>300 g</b>; 1 g = 1 000 mg.</p>'
      ],
      [
        '<p>📦 When we weigh goods in a container:</p><ul><li><b>gross weight</b> = goods + container;</li><li><b>net weight</b> = the goods only;</li><li><b>tare</b> = the container.</li></ul><p><b>Gross = net + tare</b>. A jar of honey: gross 520 g, tare 120 g → net 520 − 120 = <b>400 g</b>.</p>',
        '<p>📦 Quando pesiamo una merce in un contenitore:</p><ul><li><b>peso lordo</b> = merce + contenitore;</li><li><b>peso netto</b> = solo la merce;</li><li><b>tara</b> = il contenitore.</li></ul><p><b>Peso lordo = peso netto + tara</b>. Un vasetto di miele: lordo 520 g, tara 120 g → netto 520 − 120 = <b>400 g</b>.</p>'
      ]
    ],
    quiz: [
      q('Convert: 2.4 kg = ? g', 'Completa l’equivalenza: 2,4 kg = ? g', [['2 400 g', '2 400 g'], ['240 g', '240 g'], ['24 g', '24 g'], ['24 000 g', '24 000 g']], ['From kg to g: × 1 000.', 'Da kg a g: × 1 000.']),
      q('A honey jar: gross 520 g, tare 120 g. What is the net weight?', 'Un vasetto di miele: peso lordo 520 g, tara 120 g. Qual è il peso netto?', [['400 g', '400 g'], ['640 g', '640 g'], ['120 g', '120 g'], ['420 g', '420 g']], ['Net = gross − tare = 520 − 120.', 'Netto = lordo − tara = 520 − 120.']),
      q('How many kilograms is 1 Mg (a tonne)?', 'Quanti chilogrammi è 1 Mg (una tonnellata)?', [['1 000 kg', '1 000 kg'], ['100 kg', '100 kg'], ['10 kg', '10 kg'], ['1 000 000 kg', '1 000 000 kg']], ['1 Mg = 1 000 kg.', '1 Mg = 1 000 kg.']),
      q('Convert: 750 g = ? kg', 'Completa l’equivalenza: 750 g = ? kg', [['0.75 kg', '0,75 kg'], ['7.5 kg', '7,5 kg'], ['75 kg', '75 kg'], ['0.075 kg', '0,075 kg']], ['÷ 1 000.', ': 1 000.'])
    ]
  }, measureTaunt),
  makeG5MathMission({
    id: 'g5m-area-units', sec: '4.5', pages: '104', hue: 250,
    title: ['Measures of Area', 'Misure di superficie'],
    topic: ['The square metre and conversions in steps of 100', 'Il metro quadrato e le equivalenze di 100 in 100'],
    demon: ['The Floor Flipper', 'il Ribalta-Pavimenti'],
    tech: ['Measure Form · Fifth Technique: Square Step', 'Stile della Misura · Quinta Tecnica: Passo Quadrato'],
    lessons: [
      { vis: 'g5m-area-table', text: [
        '<p>🟩 <b>Area</b> (superficie) is the size of the space inside a flat shape. Its unit is the <b>square metre (m²)</b>: a square with sides of 1 m. Multiples: dam², hm², km²; submultiples: dm², cm², mm².</p>',
        '<p>🟩 L’<b>area</b> è l’estensione della superficie racchiusa da una figura piana. La sua unità è il <b>metro quadrato (m²)</b>: un quadrato con il lato di 1 m. Multipli: dam², hm², km²; sottomultipli: dm², cm², mm².</p>'
      ] },
      [
        '<p>💯 Why do we move in steps of <b>100</b>? A square of 1 dm × 1 dm contains 10 × 10 = <b>100</b> squares of 1 cm². So 1 m² = 100 dm² = 10 000 cm². To go to the next unit, <b>× 100</b> or <b>÷ 100</b>: in the table each unit has <b>two digits</b>.</p>',
        '<p>💯 Perché si procede di <b>100</b> in 100? Un quadrato di 1 dm × 1 dm contiene 10 × 10 = <b>100</b> quadratini di 1 cm². Quindi 1 m² = 100 dm² = 10 000 cm². Per passare all’unità vicina si fa <b>× 100</b> o <b>: 100</b>: nella tabella ogni unità occupa <b>due cifre</b>.</p>'
      ],
      [
        '<p>🌾 Examples: 3 m² = 300 dm² = 30 000 cm²; 450 dm² = 4.5 m². For fields we use <b>agrarian measures</b>: the <b>hectare (ha)</b> = 1 hm² = 10 000 m².</p>',
        '<p>🌾 Esempi: 3 m² = 300 dm² = 30 000 cm²; 450 dm² = 4,5 m². Per i campi si usano le <b>misure agrarie</b>: l’<b>ettaro (ha)</b> = 1 hm² = 10 000 m².</p>'
      ]
    ],
    quiz: [
      q('Convert: 1 m² = ? dm²', 'Completa l’equivalenza: 1 m² = ? dm²', [['100 dm²', '100 dm²'], ['10 dm²', '10 dm²'], ['1 000 dm²', '1 000 dm²'], ['0.1 dm²', '0,1 dm²']], ['Area units go in steps of 100.', 'Le unità di superficie vanno di 100 in 100.']),
      q('Convert: 450 dm² = ? m²', 'Completa l’equivalenza: 450 dm² = ? m²', [['4.5 m²', '4,5 m²'], ['45 m²', '45 m²'], ['0.45 m²', '0,45 m²'], ['45 000 m²', '45 000 m²']], ['One step towards the bigger unit: ÷ 100.', 'Un passo verso l’unità più grande: : 100.']),
      q('Convert: 3 m² = ? cm²', 'Completa l’equivalenza: 3 m² = ? cm²', [['30 000 cm²', '30 000 cm²'], ['300 cm²', '300 cm²'], ['3 000 cm²', '3 000 cm²'], ['300 000 cm²', '300 000 cm²']], ['Two steps: × 100 × 100 = × 10 000.', 'Due passi: × 100 × 100 = × 10 000.']),
      q('How many square metres is 1 hectare?', 'Quanti metri quadrati è 1 ettaro?', [['10 000 m²', '10 000 m²'], ['100 m²', '100 m²'], ['1 000 m²', '1 000 m²'], ['1 000 000 m²', '1 000 000 m²']], ['1 ha = 1 hm² = 10 000 m².', '1 ha = 1 hm² = 10 000 m².'])
    ]
  }, measureTaunt),
  makeG5MathMission({
    id: 'g5m-volume-units', sec: '4.6', pages: '105', hue: 265,
    title: ['Measures of Volume', 'Misure di volume'],
    topic: ['The cubic metre, steps of 1 000 and the link between dm³ and litres', 'Il metro cubo, le equivalenze di 1 000 in 1 000 e il legame tra dm³ e litri'],
    demon: ['The Box Squasher', 'lo Schiaccia-Scatole'],
    tech: ['Measure Form · Sixth Technique: Cube Power', 'Stile della Misura · Sesta Tecnica: Potenza del Cubo'],
    lessons: [
      { vis: 'g5m-volume-table', text: [
        '<p>🧊 <b>Volume</b> is the space a solid takes up. Its unit is the <b>cubic metre (m³)</b>: a cube with edges of 1 m. Multiples: dam³, hm³, km³; submultiples: dm³, cm³, mm³.</p>',
        '<p>🧊 Il <b>volume</b> è lo spazio occupato da un solido. La sua unità è il <b>metro cubo (m³)</b>: un cubo con lo spigolo di 1 m. Multipli: dam³, hm³, km³; sottomultipli: dm³, cm³, mm³.</p>'
      ] },
      [
        '<p>🔢 A cube of 1 dm × 1 dm × 1 dm contains 10 × 10 × 10 = <b>1 000</b> small cubes of 1 cm³. So volume units go in steps of <b>1 000</b>: 1 m³ = 1 000 dm³; 1 dm³ = 1 000 cm³. Each unit has <b>three digits</b> in the table.</p>',
        '<p>🔢 Un cubo di 1 dm × 1 dm × 1 dm contiene 10 × 10 × 10 = <b>1 000</b> cubetti di 1 cm³. Perciò le unità di volume procedono di <b>1 000</b> in 1 000: 1 m³ = 1 000 dm³; 1 dm³ = 1 000 cm³. Nella tabella ogni unità occupa <b>tre cifre</b>.</p>'
      ],
      [
        '<p>💧 A very useful link: <b>1 dm³ = 1 l</b> and <b>1 cm³ = 1 ml</b>. A tank of 2 m³ holds 2 000 dm³ = <b>2 000 l</b> of water.</p>',
        '<p>💧 Un legame utilissimo: <b>1 dm³ = 1 l</b> e <b>1 cm³ = 1 ml</b>. Una cisterna di 2 m³ contiene 2 000 dm³ = <b>2 000 l</b> d’acqua.</p>'
      ]
    ],
    quiz: [
      q('Convert: 1 m³ = ? dm³', 'Completa l’equivalenza: 1 m³ = ? dm³', [['1 000 dm³', '1 000 dm³'], ['100 dm³', '100 dm³'], ['10 dm³', '10 dm³'], ['10 000 dm³', '10 000 dm³']], ['Volume units go in steps of 1 000.', 'Le unità di volume vanno di 1 000 in 1 000.']),
      q('A 2 m³ tank holds how many litres?', 'Una cisterna di 2 m³ contiene quanti litri?', [['2 000 l', '2 000 l'], ['200 l', '200 l'], ['20 l', '20 l'], ['2 l', '2 l']], ['2 m³ = 2 000 dm³ and 1 dm³ = 1 l.', '2 m³ = 2 000 dm³ e 1 dm³ = 1 l.']),
      q('Convert: 5 000 cm³ = ? dm³', 'Completa l’equivalenza: 5 000 cm³ = ? dm³', [['5 dm³', '5 dm³'], ['50 dm³', '50 dm³'], ['500 dm³', '500 dm³'], ['0.5 dm³', '0,5 dm³']], ['÷ 1 000.', ': 1 000.']),
      q('How many ml is 1 cm³?', 'Quanti ml corrispondono a 1 cm³?', [['1 ml', '1 ml'], ['10 ml', '10 ml'], ['100 ml', '100 ml'], ['1 000 ml', '1 000 ml']], ['1 cm³ = 1 ml.', '1 cm³ = 1 ml.'])
    ]
  }, measureTaunt),
  makeG5MathMission({
    id: 'g5m-time', sec: '4.7', pages: '106', hue: 280,
    title: ['Measures of Time', 'Misure di tempo'],
    topic: ['Seconds, minutes, hours, days, years and centuries; non-decimal conversions', 'Secondi, minuti, ore, giorni, anni e secoli; equivalenze non decimali'],
    demon: ['The Clock Scrambler', 'lo Sconvolgi-Orologi'],
    tech: ['Measure Form · Seventh Technique: Time Keeper', 'Stile della Misura · Settima Tecnica: Custode del Tempo'],
    lessons: [
      { vis: 'g5m-time-table', text: [
        '<p>⏱️ The SI unit of time is the <b>second (s)</b>. But time is <b>not decimal</b>: 1 min = 60 s; 1 h = 60 min = 3 600 s; 1 day = 24 h; 1 week = 7 days = 168 h; 1 year = 12 months = 365 days (366 in a leap year); 1 century = 100 years.</p>',
        '<p>⏱️ L’unità di misura del tempo è il <b>secondo (s)</b>. Ma il tempo <b>non è decimale</b>: 1 min = 60 s; 1 h = 60 min = 3 600 s; 1 giorno = 24 h; 1 settimana = 7 giorni = 168 h; 1 anno = 12 mesi = 365 giorni (366 negli anni bisestili); 1 secolo = 100 anni.</p>'
      ] },
      [
        '<p>🔁 Conversions use 60, 24, 7…: 2 h 15 min = 2 × 60 + 15 = <b>135 min</b>; 200 min = 3 h 20 min (200 ÷ 60 = 3 remainder 20). Sports times use tenths and hundredths of a second: 9.58 s.</p>',
        '<p>🔁 Le equivalenze usano 60, 24, 7…: 2 h 15 min = 2 × 60 + 15 = <b>135 min</b>; 200 min = 3 h 20 min (200 : 60 = 3 con resto 20). Nello sport si usano decimi e centesimi di secondo: 9,58 s.</p>'
      ],
      [
        '<p>🕑 <b>Durations</b>: a film starts at 17:45 and ends at 19:20. From 17:45 to 18:00 = 15 min; from 18:00 to 19:20 = 1 h 20 min; total <b>1 h 35 min</b>. Months have 30 or 31 days; February has 28 or 29.</p>',
        '<p>🕑 <b>Durate</b>: un film inizia alle 17:45 e finisce alle 19:20. Dalle 17:45 alle 18:00 = 15 min; dalle 18:00 alle 19:20 = 1 h 20 min; in tutto <b>1 h 35 min</b>. I mesi hanno 30 o 31 giorni; febbraio ne ha 28 o 29.</p>'
      ]
    ],
    quiz: [
      q('Convert: 2 h 15 min = ? min', 'Completa l’equivalenza: 2 h 15 min = ? min', [['135 min', '135 min'], ['215 min', '215 min'], ['120 min', '120 min'], ['35 min', '35 min']], ['2 × 60 + 15 = 135.', '2 × 60 + 15 = 135.']),
      q('A film runs from 17:45 to 19:20. How long is it?', 'Un film va dalle 17:45 alle 19:20. Quanto dura?', [['1 h 35 min', '1 h 35 min'], ['1 h 75 min', '1 h 75 min'], ['2 h 35 min', '2 h 35 min'], ['1 h 25 min', '1 h 25 min']], ['15 min to 18:00, then 1 h 20 min.', '15 min fino alle 18:00, poi 1 h 20 min.']),
      q('How many seconds are in 1 hour?', 'Quanti secondi ci sono in 1 ora?', [['3 600', '3 600'], ['60', '60'], ['600', '600'], ['360', '360']], ['60 × 60 = 3 600.', '60 × 60 = 3 600.']),
      q('How many hours are in one week?', 'Quante ore ci sono in una settimana?', [['168', '168'], ['148', '148'], ['24', '24'], ['70', '70']], ['7 × 24 = 168.', '7 × 24 = 168.'])
    ]
  }, measureTaunt),
  makeG5MathMission({
    id: 'g5m-speed', sec: '4.8', pages: '107', hue: 295,
    title: ['Distance, Time and Speed', 'Spazio, tempo e velocità'],
    topic: ['Average speed in km/h and calculating distance or time', 'La velocità media in km/h e il calcolo dello spazio o del tempo'],
    demon: ['The Speed Demon', 'il Demone della Velocità'],
    tech: ['Measure Form · Eighth Technique: Swift Travel', 'Stile della Misura · Ottava Tecnica: Viaggio Veloce'],
    lessons: [
      [
        '<p>🚗 <b>Speed</b> tells how much distance is covered in one unit of time. A car travelling 120 km in 2 h has an <b>average speed</b> of 120 ÷ 2 = <b>60 km/h</b> (kilometres per hour).</p><p style="text-align:center"><b>speed = distance ÷ time</b></p>',
        '<p>🚗 La <b>velocità</b> indica quanto spazio si percorre nell’unità di tempo. Un’auto che percorre 120 km in 2 h ha una <b>velocità media</b> di 120 : 2 = <b>60 km/h</b> (chilometri orari).</p><p style="text-align:center"><b>velocità = spazio : tempo</b></p>'
      ],
      [
        '<p>🔁 The same relationship gives the other two formulas:</p><ul><li><b>distance = speed × time</b> → a cyclist at 15 km/h for 3 h covers 45 km;</li><li><b>time = distance ÷ speed</b> → 240 km at 80 km/h take 3 h.</li></ul>',
        '<p>🔁 Dalla stessa relazione si ricavano le altre due formule:</p><ul><li><b>spazio = velocità × tempo</b> → un ciclista a 15 km/h per 3 h percorre 45 km;</li><li><b>tempo = spazio : velocità</b> → 240 km a 80 km/h richiedono 3 h.</li></ul>'
      ],
      [
        '<p>🐢 Units must match: if speed is in km/h, distance must be in km and time in hours. Half an hour is 0.5 h: at 60 km/h in 30 min you travel 60 × 0.5 = <b>30 km</b>. Fast walking is about 5 km/h.</p>',
        '<p>🐢 Le unità devono corrispondere: se la velocità è in km/h, lo spazio va in km e il tempo in ore. Mezz’ora è 0,5 h: a 60 km/h in 30 min percorri 60 × 0,5 = <b>30 km</b>. Camminando a passo svelto si va a circa 5 km/h.</p>'
      ]
    ],
    quiz: [
      q('A car travels 120 km in 2 h. What is its average speed?', 'Un’auto percorre 120 km in 2 h. Qual è la sua velocità media?', [['60 km/h', '60 km/h'], ['240 km/h', '240 km/h'], ['122 km/h', '122 km/h'], ['118 km/h', '118 km/h']], ['120 ÷ 2 = 60.', '120 : 2 = 60.']),
      q('A cyclist rides at 15 km/h for 3 h. How far does she go?', 'Una ciclista pedala a 15 km/h per 3 h. Quanta strada fa?', [['45 km', '45 km'], ['5 km', '5 km'], ['18 km', '18 km'], ['12 km', '12 km']], ['15 × 3 = 45.', '15 × 3 = 45.']),
      q('How long does a 240 km trip take at 80 km/h?', 'Quanto dura un viaggio di 240 km a 80 km/h?', [['3 h', '3 h'], ['4 h', '4 h'], ['2 h', '2 h'], ['320 h', '320 h']], ['240 ÷ 80 = 3.', '240 : 80 = 3.']),
      q('At 60 km/h, how far do you travel in 30 minutes?', 'A 60 km/h, quanta strada percorri in 30 minuti?', [['30 km', '30 km'], ['1 800 km', '1 800 km'], ['2 km', '2 km'], ['90 km', '90 km']], ['30 min = 0.5 h; 60 × 0.5 = 30.', '30 min = 0,5 h; 60 × 0,5 = 30.'])
    ]
  }, measureTaunt),
  makeG5MathMission({
    id: 'g5m-money-trade', sec: '4.9', pages: '108–109', hue: 310,
    title: ['Measures of Value and Buying and Selling', 'Misure di valore e compravendita'],
    topic: ['The euro; cost, revenue, profit and loss', 'L’euro; spesa, ricavo, guadagno e perdita'],
    demon: ['The Crafty Merchant', 'il Mercante Furbetto'],
    tech: ['Measure Form · Ninth Technique: Fair Trade', 'Stile della Misura · Nona Tecnica: Scambio Onesto'],
    lessons: [
      { vis: 'g5m-trade', text: [
        '<p>💶 The <b>euro (€)</b> is the unit of value used in Italy and in many European countries. 1 € = 100 cents (c), so euros work like decimals: €3.45 = 3 euros and 45 cents. Coins go from 1 cent to €2; notes from €5 to €500 — although the €500 note is no longer issued.</p>',
        '<p>💶 L’<b>euro (€)</b> è l’unità di valore usata in Italia e in molti Paesi europei. 1 € = 100 centesimi (c), quindi gli euro funzionano come i decimali: 3,45 € = 3 euro e 45 centesimi. Le monete vanno da 1 centesimo a 2 €; le banconote da 5 € a 500 €, anche se la banconota da 500 € non viene più emessa.</p>'
      ] },
      [
        '<p>🏪 In buying and selling:</p><ul><li><b>cost</b> (spesa): what the shopkeeper pays to buy goods;</li><li><b>revenue</b> (ricavo): what she receives when she sells them;</li><li><b>profit</b> (guadagno) = revenue − cost, when revenue &gt; cost;</li><li><b>loss</b> (perdita) = cost − revenue, when revenue &lt; cost.</li></ul>',
        '<p>🏪 Nella compravendita:</p><ul><li><b>spesa</b>: ciò che il commerciante paga per comprare la merce;</li><li><b>ricavo</b>: ciò che incassa quando la vende;</li><li><b>guadagno</b> = ricavo − spesa, quando il ricavo è maggiore della spesa;</li><li><b>perdita</b> = spesa − ricavo, quando il ricavo è minore della spesa.</li></ul>'
      ],
      [
        '<p>🧮 A fruit seller buys 20 kg of cherries at €4 per kg and sells them at €6.50 per kg. Cost = 20 × 4 = €80; revenue = 20 × 6.50 = €130; profit = 130 − 80 = <b>€50</b>. Also: revenue = cost + profit.</p>',
        '<p>🧮 Un fruttivendolo compra 20 kg di ciliegie a 4 € al kg e le rivende a 6,50 € al kg. Spesa = 20 × 4 = 80 €; ricavo = 20 × 6,50 = 130 €; guadagno = 130 − 80 = <b>50 €</b>. Vale anche: ricavo = spesa + guadagno.</p>'
      ]
    ],
    quiz: [
      q('Cost €80, revenue €130. What is the profit?', 'Spesa 80 €, ricavo 130 €. Qual è il guadagno?', [['€50', '50 €'], ['€210', '210 €'], ['€30', '30 €'], ['€80', '80 €']], ['Profit = revenue − cost.', 'Guadagno = ricavo − spesa.']),
      q('Cost €200, revenue €170. What happened?', 'Spesa 200 €, ricavo 170 €. Che cosa è successo?', [['A loss of €30', 'Una perdita di 30 €'], ['A profit of €30', 'Un guadagno di 30 €'], ['A profit of €370', 'Un guadagno di 370 €'], ['Nothing changed', 'Non è cambiato nulla']], ['Revenue is less than cost: 200 − 170 = 30 lost.', 'Il ricavo è minore della spesa: 200 − 170 = 30 di perdita.']),
      q('How many cents are €3.45?', 'Quanti centesimi sono 3,45 €?', [['345', '345'], ['3 450', '3 450'], ['34.5', '34,5'], ['45', '45']], ['€1 = 100 c, so 3.45 × 100 = 345.', '1 € = 100 c, quindi 3,45 × 100 = 345.']),
      q('Cost €60 and profit €25. What is the revenue?', 'Spesa 60 € e guadagno 25 €. Qual è il ricavo?', [['€85', '85 €'], ['€35', '35 €'], ['€60', '60 €'], ['€25', '25 €']], ['Revenue = cost + profit = 60 + 25.', 'Ricavo = spesa + guadagno = 60 + 25.'])
    ]
  }, measureTaunt),
  makeG5MathMission({
    id: 'g5m-exchange-online', sec: '4.10', pages: '110–111', hue: 325,
    title: ['Currency Exchange and Shopping Online', 'Cambi monetari e acquisti online'],
    topic: ['Maths on the Road: converting currencies; civic education: buying safely online', 'Mate in viaggio: cambiare valuta; educazione civica: acquistare online in sicurezza'],
    demon: ['The Fake Shop Phantom', 'il Fantasma del Negozio Falso'],
    tech: ['Measure Form · Tenth Technique: Smart Traveller', 'Stile della Misura · Decima Tecnica: Viaggiatore Esperto'],
    lessons: [
      [
        '<p>✈️ <b>Maths on the Road – currency exchange</b>: abroad you may need another currency (dollars, pounds, francs…). The <b>exchange rate</b> says how much of the other currency you get for €1. Rates change every day, so problems give you the rate to use.</p>',
        '<p>✈️ <b>Mate in viaggio – cambi monetari</b>: all’estero può servire un’altra valuta (dollari, sterline, franchi…). Il <b>tasso di cambio</b> dice quanta valuta straniera ricevi per 1 €. I tassi cambiano ogni giorno, quindi nei problemi ti viene dato il tasso da usare.</p>'
      ],
      [
        '<p>🔁 With an example rate of <b>€1 = 1.10 dollars</b>: €50 → 50 × 1.10 = <b>55 dollars</b> (multiply). 22 dollars → 22 ÷ 1.10 = <b>€20</b> (divide). It is a proportional problem, like those in Unit 1!</p>',
        '<p>🔁 Con un tasso di esempio di <b>1 € = 1,10 dollari</b>: 50 € → 50 × 1,10 = <b>55 dollari</b> (moltiplico). 22 dollari → 22 : 1,10 = <b>20 €</b> (divido). È un problema di proporzionalità, come quelli dell’unità 1!</p>'
      ],
      [
        '<p>🛍️ <b>Civic education – buying online</b>: always shop with an adult; compare the <b>total price</b> (item + shipping); check the shop is trustworthy and the address is secure; never share passwords. A €18 book with €4.90 shipping costs €22.90 in total: maybe the €21 bookshop nearby is cheaper!</p>',
        '<p>🛍️ <b>Educazione civica – acquisti online</b>: compra sempre insieme a un adulto; confronta il <b>prezzo totale</b> (articolo + spedizione); controlla che il negozio sia affidabile e il sito sicuro; non comunicare mai le password. Un libro da 18 € con 4,90 € di spedizione costa in tutto 22,90 €: forse la libreria vicina che lo vende a 21 € è più conveniente!</p>'
      ]
    ],
    quiz: [
      q('Example rate: €1 = 1.10 dollars. How many dollars for €50?', 'Tasso di esempio: 1 € = 1,10 dollari. Quanti dollari per 50 €?', [['55', '55'], ['45.45', '45,45'], ['51.10', '51,10'], ['5.50', '5,50']], ['50 × 1.10 = 55.', '50 × 1,10 = 55.']),
      q('Same rate: how many euros are 22 dollars?', 'Stesso tasso: quanti euro sono 22 dollari?', [['€20', '20 €'], ['€24.20', '24,20 €'], ['€22', '22 €'], ['€2', '2 €']], ['22 ÷ 1.10 = 20.', '22 : 1,10 = 20.']),
      q('A book costs €18 online plus €4.90 shipping. What is the total?', 'Un libro costa 18 € online più 4,90 € di spedizione. Qual è il totale?', [['€22.90', '22,90 €'], ['€13.10', '13,10 €'], ['€18.49', '18,49 €'], ['€22.09', '22,09 €']], ['18 + 4.90 = 22.90.', '18 + 4,90 = 22,90.']),
      q('Which behaviour is safe when shopping online?', 'Quale comportamento è sicuro negli acquisti online?', [['Buying with an adult on a trusted site', 'Comprare con un adulto su un sito affidabile'], ['Sharing your password with the shop', 'Comunicare la password al negozio'], ['Choosing the first site you see', 'Scegliere il primo sito che compare'], ['Ignoring shipping costs', 'Ignorare le spese di spedizione']], ['Safety and comparing total prices come first.', 'Prima vengono la sicurezza e il confronto dei prezzi totali.'])
    ]
  }, measureTaunt),
  makeG5MathMission({
    id: 'g5m-measure-review', sec: '4.11', pages: '112–117', hue: 340,
    title: ['Check-Up: Measure', 'Adesso so: la misura'],
    topic: ['Exercises, problem solving, summary map, test and Invalsi-style questions', 'Esercizi, problem solving, mappa di sintesi, verifica e quesiti verso l’Invalsi'],
    demon: ['The Unit Guardian of Measures', 'il Guardiano delle Misure'],
    tech: ['Measure Form · Mastery Seal: Measure Master', 'Stile della Misura · Sigillo di Maestria: Maestro della Misura'],
    lessons: [
      { vis: 'g5m-equivalences', text: [
        '<p>🗺️ <b>Let’s see it clearly</b>: length, capacity and mass go in steps of <b>10</b>; area in steps of <b>100</b>; volume in steps of <b>1 000</b>. To a smaller unit → multiply; to a bigger unit → divide. Time uses 60, 24, 7, 12…</p>',
        '<p>🗺️ <b>Vediamoci chiaro</b>: lunghezza, capacità e massa vanno di <b>10</b> in 10; la superficie di <b>100</b> in 100; il volume di <b>1 000</b> in 1 000. Verso un’unità più piccola → moltiplica; verso un’unità più grande → dividi. Il tempo usa 60, 24, 7, 12…</p>'
      ] },
      [
        '<p>🧮 Key formulas: gross = net + tare; speed = distance ÷ time; profit = revenue − cost; 1 dm³ = 1 l. Convert everything to the <b>same unit</b> before calculating.</p>',
        '<p>🧮 Formule chiave: lordo = netto + tara; velocità = spazio : tempo; guadagno = ricavo − spesa; 1 dm³ = 1 l. Trasforma tutto nella <b>stessa unità</b> prima di calcolare.</p>'
      ],
      [
        '<p>🏁 <b>Towards Invalsi</b>: estimate whether a measure is reasonable (a door is about 2 m high, a glass holds about 20–25 cl), and read the unit in every option before answering.</p>',
        '<p>🏁 <b>Verso l’Invalsi</b>: valuta se una misura è ragionevole (una porta è alta circa 2 m, un bicchiere contiene circa 20–25 cl) e leggi l’unità di misura in ogni opzione prima di rispondere.</p>'
      ]
    ],
    quiz: [
      q('Which conversion is correct?', 'Quale equivalenza è corretta?', [['3.5 m² = 350 dm²', '3,5 m² = 350 dm²'], ['3.5 m² = 35 dm²', '3,5 m² = 35 dm²'], ['3.5 m³ = 350 dm³', '3,5 m³ = 350 dm³'], ['3.5 l = 35 ml', '3,5 l = 35 ml']], ['Area: × 100 per step. (3.5 m³ = 3 500 dm³; 3.5 l = 3 500 ml.)', 'Superficie: × 100 per ogni passo. (3,5 m³ = 3 500 dm³; 3,5 l = 3 500 ml.)']),
      q('A crate of apples weighs 12.5 kg gross; the crate weighs 1.5 kg. What is the net weight?', 'Una cassetta di mele pesa 12,5 kg lordi; la cassetta pesa 1,5 kg. Qual è il peso netto?', [['11 kg', '11 kg'], ['14 kg', '14 kg'], ['10.5 kg', '10,5 kg'], ['12.5 kg', '12,5 kg']], ['12.5 − 1.5 = 11.', '12,5 − 1,5 = 11.']),
      q('A train leaves at 08:50 and arrives at 11:05. How long is the trip?', 'Un treno parte alle 08:50 e arriva alle 11:05. Quanto dura il viaggio?', [['2 h 15 min', '2 h 15 min'], ['3 h 15 min', '3 h 15 min'], ['2 h 55 min', '2 h 55 min'], ['3 h 45 min', '3 h 45 min']], ['10 min to 09:00, 2 h to 11:00, 5 min more: 2 h 15 min.', '10 min fino alle 09:00, 2 h fino alle 11:00, altri 5 min: 2 h 15 min.']),
      q('Which height is reasonable for a classroom door?', 'Quale altezza è ragionevole per la porta di un’aula?', [['2.1 m', '2,1 m'], ['21 m', '21 m'], ['2.1 cm', '2,1 cm'], ['0.21 m', '0,21 m']], ['A door is a little taller than an adult: about 2 m.', 'Una porta è un po’ più alta di un adulto: circa 2 m.'])
    ]
  }, measureTaunt)
];
