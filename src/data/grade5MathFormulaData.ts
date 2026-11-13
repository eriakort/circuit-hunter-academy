import type { FormulaCard, SubjectTopic } from './formulaData';

/** Formula-book topics for Grade 5 Mathematics (classe quinta). */
export const GRADE5_MATH_TOPICS: SubjectTopic[] = [
  { id: 'g5-measures', subject: 'math5', name: ['Measures & Conversions', 'Misure ed equivalenze'] },
  { id: 'g5-plane-figures', subject: 'math5', name: ['Perimeter & Area of Polygons', 'Perimetro e area dei poligoni'] },
  { id: 'g5-circle-solids', subject: 'math5', name: ['Circle, Solids & Volume', 'Cerchio, solidi e volume'] },
  { id: 'g5-fractions-percent', subject: 'math5', name: ['Fractions & Percentages', 'Frazioni e percentuali'] },
  { id: 'g5-data-problems', subject: 'math5', name: ['Data, Probability & Problems', 'Dati, probabilità e problemi'] }
];

export const GRADE5_MATH_FORMULA_CARDS: FormulaCard[] = [
  {
    id: 'g5m-measure-ladders',
    subject: 'math5',
    topicId: 'g5-measures',
    category: 'math',
    title: ['Measure Tables & Conversions', 'Tabelle delle misure ed equivalenze'],
    formula: 'km hm dam m dm cm mm  ·  hl dal l dl cl ml  ·  Mg 100kg 10kg kg hg dag g',
    rules: [
      { name: ['Length, capacity, mass: steps of 10', 'Lunghezza, capacità, massa: di 10 in 10'], math: '1 m = 10 dm = 100 cm = 1 000 mm', desc: ['Each unit is 10 times the unit on its right.', 'Ogni unità è 10 volte quella alla sua destra.'] },
      { name: ['To a smaller unit', 'Verso un’unità più piccola'], math: '× 10, × 100, × 1 000', desc: ['One, two or three steps to the right: multiply (6 m × 100 = 600 cm).', 'Uno, due o tre passi a destra: moltiplica (6 m × 100 = 600 cm).'] },
      { name: ['To a bigger unit', 'Verso un’unità più grande'], math: '÷ 10, ÷ 100, ÷ 1 000', desc: ['One, two or three steps to the left: divide (9 500 cl ÷ 100 = 95 l).', 'Uno, due o tre passi a sinistra: dividi (9 500 cl : 100 = 95 l).'] }
    ],
    example: ['4 500 m = 4.5 km  ·  2.5 l = 2 500 ml  ·  750 g = 0.75 kg', '4 500 m = 4,5 km  ·  2,5 l = 2 500 ml  ·  750 g = 0,75 kg'],
    trap: ['Always convert to the same unit before adding or comparing measures!', 'Trasforma sempre le misure nella stessa unità prima di sommarle o confrontarle!']
  },
  {
    id: 'g5m-area-volume-units',
    subject: 'math5',
    topicId: 'g5-measures',
    category: 'math',
    title: ['Area and Volume Units', 'Unità di superficie e di volume'],
    formula: 'm² → dm²: × 100   ·   m³ → dm³: × 1 000   ·   1 dm³ = 1 l',
    rules: [
      { name: ['Area: steps of 100', 'Superficie: di 100 in 100'], math: '1 m² = 100 dm² = 10 000 cm²', desc: ['A 1 dm square holds 10 × 10 = 100 squares of 1 cm².', 'Un quadrato di 1 dm contiene 10 × 10 = 100 quadratini di 1 cm².'] },
      { name: ['Volume: steps of 1 000', 'Volume: di 1 000 in 1 000'], math: '1 m³ = 1 000 dm³ = 1 000 000 cm³', desc: ['A 1 dm cube holds 10 × 10 × 10 = 1 000 cubes of 1 cm³.', 'Un cubo di 1 dm contiene 10 × 10 × 10 = 1 000 cubetti di 1 cm³.'] },
      { name: ['Volume and capacity', 'Volume e capacità'], math: '1 dm³ = 1 l   ·   1 cm³ = 1 ml', desc: ['Useful for tanks, aquariums and bottles.', 'Utile per cisterne, acquari e bottiglie.'] }
    ],
    example: ['450 dm² = 4.5 m²  ·  2 m³ = 2 000 dm³ = 2 000 l', '450 dm² = 4,5 m²  ·  2 m³ = 2 000 dm³ = 2 000 l'],
    trap: ['1 m² is NOT 10 dm², and 1 m³ is NOT 100 dm³!', '1 m² NON è 10 dm² e 1 m³ NON è 100 dm³!']
  },
  {
    id: 'g5m-time-speed-trade',
    subject: 'math5',
    topicId: 'g5-measures',
    category: 'math',
    title: ['Time, Speed and Buying & Selling', 'Tempo, velocità e compravendita'],
    formula: '1 h = 60 min = 3 600 s  ·  v = s ÷ t  ·  profit = revenue − cost',
    rules: [
      { name: ['Time is not decimal', 'Il tempo non è decimale'], math: '1 day = 24 h · 1 week = 7 days = 168 h · 1 year = 365 days', desc: ['Convert with 60, 24, 7 and 12, not with 10.', 'Le equivalenze si fanno con 60, 24, 7 e 12, non con 10.'] },
      { name: ['Speed', 'Velocità'], math: 'v = s ÷ t   ·   s = v × t   ·   t = s ÷ v', desc: ['With v in km/h, s is in km and t in hours.', 'Con v in km/h, lo spazio va in km e il tempo in ore.'] },
      { name: ['Weight and money', 'Peso e denaro'], math: 'gross = net + tare   ·   revenue = cost + profit', desc: ['Loss = cost − revenue when revenue is smaller.', 'Perdita = spesa − ricavo quando il ricavo è minore.'] }
    ],
    example: ['120 km in 2 h → 60 km/h  ·  2 h 15 min = 135 min', '120 km in 2 h → 60 km/h  ·  2 h 15 min = 135 min']
  },
  {
    id: 'g5m-quadrilaterals',
    subject: 'math5',
    topicId: 'g5-plane-figures',
    category: 'math',
    title: ['Quadrilaterals: Perimeter and Area', 'Quadrilateri: perimetro e area'],
    formula: 'Rectangle b × h  ·  Square l × l  ·  Rhomboid b × h  ·  Rhombus D × d ÷ 2  ·  Trapezium (B + b) × h ÷ 2',
    rules: [
      { name: ['Rectangle and square', 'Rettangolo e quadrato'], math: 'P = (b + h) × 2 · A = b × h  ·  P = l × 4 · A = l × l', desc: ['Inverse: h = A ÷ b; l = P ÷ 4.', 'Formule inverse: h = A : b; l = P : 4.'] },
      { name: ['Rhomboid and rhombus', 'Romboide e rombo'], math: 'A = b × h  ·  A = D × d ÷ 2', desc: ['Use the perpendicular height, not the slanted side.', 'Usa l’altezza perpendicolare, non il lato obliquo.'] },
      { name: ['Trapezium', 'Trapezio'], math: 'A = (B + b) × h ÷ 2', desc: ['Two equal trapeziums form a rhomboid with base B + b.', 'Due trapezi uguali formano un romboide di base B + b.'] }
    ],
    example: ['Rhombus D = 12 cm, d = 8 cm → A = 48 cm²  ·  Trapezium B = 14, b = 8, h = 5 → A = 55 cm²', 'Rombo D = 12 cm, d = 8 cm → A = 48 cm²  ·  Trapezio B = 14, b = 8, h = 5 → A = 55 cm²'],
    trap: ['Perimeter is a length (cm); area is a surface (cm²).', 'Il perimetro è una lunghezza (cm); l’area è una superficie (cm²).']
  },
  {
    id: 'g5m-triangle-regular',
    subject: 'math5',
    topicId: 'g5-plane-figures',
    category: 'math',
    title: ['Triangles and Regular Polygons', 'Triangoli e poligoni regolari'],
    formula: 'Triangle A = b × h ÷ 2   ·   Regular polygon A = P × a ÷ 2,  a = l × fixed number',
    rules: [
      { name: ['Triangle', 'Triangolo'], math: 'A = b × h ÷ 2   ·   h = A × 2 ÷ b', desc: ['Angles of a triangle add up to 180°.', 'La somma degli angoli di un triangolo è 180°.'] },
      { name: ['Fixed numbers (rounded)', 'Numeri fissi (arrotondati)'], math: 'triangle 0.289 · square 0.5 · pentagon 0.688 · hexagon 0.866', desc: ['Apothem = side × fixed number.', 'Apotema = lato × numero fisso.'] }
    ],
    example: ['Pentagon l = 10 cm: P = 50 cm, a = 6.88 cm, A = 172 cm²', 'Pentagono l = 10 cm: P = 50 cm, a = 6,88 cm, A = 172 cm²']
  },
  {
    id: 'g5m-circle',
    subject: 'math5',
    topicId: 'g5-circle-solids',
    category: 'math',
    title: ['Circumference and Circle', 'Circonferenza e cerchio'],
    formula: 'd = r × 2   ·   C = d × π   ·   A = r × r × π   (π ≈ 3.14)',
    rules: [
      { name: ['Circumference (a length)', 'Circonferenza (una lunghezza)'], math: 'C = d × π = r × 2 × π   ·   d = C ÷ π', desc: ['π is the ratio circumference ÷ diameter.', 'π è il rapporto tra circonferenza e diametro.'] },
      { name: ['Circle (a surface)', 'Cerchio (una superficie)'], math: 'A = r × r × π', desc: ['If you know the diameter, halve it first.', 'Se conosci il diametro, dimezzalo prima.'] }
    ],
    example: ['r = 5 cm → C = 31.4 cm, A = 78.5 cm²', 'r = 5 cm → C = 31,4 cm, A = 78,5 cm²'],
    trap: ['Using the diameter instead of the radius in r × r × π makes the area 4 times too big!', 'Usare il diametro al posto del raggio in r × r × π rende l’area 4 volte troppo grande!']
  },
  {
    id: 'g5m-solids-volume',
    subject: 'math5',
    topicId: 'g5-circle-solids',
    category: 'math',
    title: ['Surface Area and Volume of Solids', 'Superficie e volume dei solidi'],
    formula: 'Cube St = l × l × 6, V = l × l × l   ·   Cuboid Sl = P(base) × h, V = a × b × c',
    rules: [
      { name: ['Cube', 'Cubo'], math: 'Sl = l × l × 4 · St = l × l × 6 · V = l × l × l', desc: ['6 faces, 12 edges, 8 vertices.', '6 facce, 12 spigoli, 8 vertici.'] },
      { name: ['Cuboid', 'Parallelepipedo'], math: 'Sl = P(base) × h · St = Sl + 2 × A(base) · V = A(base) × h', desc: ['Volume counts the unit cubes inside.', 'Il volume conta i cubetti unitari contenuti.'] }
    ],
    example: ['Cuboid 5 × 3 × 4 cm: Sl = 64 cm², St = 94 cm², V = 60 cm³', 'Parallelepipedo 5 × 3 × 4 cm: Sl = 64 cm², St = 94 cm², V = 60 cm³']
  },
  {
    id: 'g5m-fractions',
    subject: 'math5',
    topicId: 'g5-fractions-percent',
    category: 'math',
    title: ['Fractions of Quantities', 'Frazioni e quantità'],
    formula: 'Fraction of a number: ÷ denominator × numerator   ·   Whole from a fraction: ÷ numerator × denominator',
    rules: [
      { name: ['Equivalent fractions', 'Frazioni equivalenti'], math: 'a/b = (a × n)/(b × n) = (a ÷ n)/(b ÷ n)', desc: ['Multiply or divide both terms by the same number.', 'Moltiplica o dividi entrambi i termini per lo stesso numero.'] },
      { name: ['Fraction → decimal', 'Frazione → decimale'], math: 'a/b = a ÷ b   ·   3/4 = 0.75', desc: ['A fraction is a division.', 'Una frazione è una divisione.'] }
    ],
    example: ['3/5 of 40 = 24  ·  3/4 of the book = 30 pages → book = 40 pages', '3/5 di 40 = 24  ·  3/4 del libro = 30 pagine → libro = 40 pagine']
  },
  {
    id: 'g5m-percentages',
    subject: 'math5',
    topicId: 'g5-fractions-percent',
    category: 'math',
    title: ['Percentages and Discounts', 'Percentuali e sconti'],
    formula: 'x% of N = N ÷ 100 × x   ·   discounted price = price − discount',
    rules: [
      { name: ['Benchmark percentages', 'Percentuali di riferimento'], math: '50% = 1/2 · 25% = 1/4 · 75% = 3/4 · 10% = 1/10', desc: ['100% is the whole.', 'Il 100% è l’intero.'] }
    ],
    example: ['€50 with 20% off → discount €10 → pay €40', '50 € con lo sconto del 20% → sconto 10 € → paghi 40 €']
  },
  {
    id: 'g5m-data',
    subject: 'math5',
    topicId: 'g5-data-problems',
    category: 'math',
    title: ['Statistics and Probability', 'Statistica e probabilità'],
    formula: 'mean = sum ÷ number of values   ·   probability = favourable cases ÷ possible cases',
    rules: [
      { name: ['Mode and median', 'Moda e mediana'], math: 'mode = most frequent · median = middle value in order', desc: ['With an even number of values, the median is the mean of the two middle ones.', 'Con un numero pari di valori, la mediana è la media dei due centrali.'] },
      { name: ['Probability scale', 'Scala della probabilità'], math: 'impossible = 0 · certain = 1 (100%)', desc: ['Every other event is between 0 and 1.', 'Ogni altro evento è compreso tra 0 e 1.'] }
    ],
    example: ['6, 8, 7, 8, 9 → mode 8, median 8, mean 7.6  ·  die shows 5: 1/6', '6, 8, 7, 8, 9 → moda 8, mediana 8, media 7,6  ·  dado esce 5: 1/6']
  },
  {
    id: 'g5m-operations-order',
    subject: 'math5',
    topicId: 'g5-data-problems',
    category: 'math',
    title: ['Expressions, Properties and Divisibility', 'Espressioni, proprietà e divisibilità'],
    formula: '( ) → [ ] → { }   ·   × ÷ before + −   ·   divisible by 3 / 9: sum of digits',
    rules: [
      { name: ['Invariant property', 'Proprietà invariantiva'], math: '83 − 29 = 84 − 30  ·  7.5 ÷ 0.5 = 75 ÷ 5', desc: ['Change both terms in the same way.', 'Cambia entrambi i termini nello stesso modo.'] },
      { name: ['Divisibility', 'Divisibilità'], math: '2: even ending · 5: 0 or 5 · 4: last two digits · 25: 00, 25, 50, 75', desc: ['3 and 9: add the digits.', '3 e 9: somma le cifre.'] }
    ],
    example: ['5 + 3 × 4 = 17  ·  {[(2 + 3) × 4] − 5} ÷ 3 = 5', '5 + 3 × 4 = 17  ·  {[(2 + 3) × 4] − 5} : 3 = 5'],
    trap: ['Dividing by zero is impossible.', 'La divisione per zero è impossibile.']
  }
];
