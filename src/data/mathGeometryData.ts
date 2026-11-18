import type { Mission, QuizQuestion, LearningConcept } from '../types';

type Pair = [string, string];
type GeometryTopic = {
  id: string; title: Pair; topic: Pair; demon: Pair; technique: Pair;
  concepts: [LearningConcept, LearningConcept];
  questions: QuizQuestion[];
  summary: Pair[];
};

const q = (en: string, it: string, answers: [Pair, Pair, Pair, Pair], why: Pair): QuizQuestion =>
  ({ q: [en, it], a: answers, why });
const a = (en: string, it: string): Pair => [en, it];

const topics: GeometryTopic[] = [
  {
    id: 'm7m1',
    title: a('Angles and parallel lines', 'Angoli e rette parallele'),
    topic: a('Measure angles and use angle relationships to solve problems.', 'Misurare gli angoli e usare le loro relazioni per risolvere problemi.'),
    demon: a('The Angle Tangle', 'Il Groviglio degli Angoli'),
    technique: a('Geometry Form · Angle Focus', 'Stile della Geometria · Fuoco sugli Angoli'),
    concepts: [
      { id: 'angle-types', title: a('Recognise and measure angles', 'Riconoscere e misurare gli angoli'), explanation: a('An angle measures the turn between two rays. An acute angle is smaller than 90°, a right angle is 90°, an obtuse angle is between 90° and 180°, and a straight angle is 180°.', 'Un angolo misura l’apertura tra due semirette. Un angolo acuto è minore di 90°, retto misura 90°, ottuso è tra 90° e 180°, piatto misura 180°.'), workedExample: { scenario: a('Classify an angle measuring 128°.', 'Classifica un angolo che misura 128°.'), steps: [a('Compare 128° with 90°.', 'Confronta 128° con 90°.'), a('It is larger than 90° but smaller than 180°.', 'È maggiore di 90° ma minore di 180°.'), a('Therefore it is an obtuse angle.', 'Quindi è un angolo ottuso.')], answer: a('128° is obtuse.', '128° è un angolo ottuso.') }, misconceptions: [{ belief: a('An angle is larger when its arms are longer.', 'Un angolo è più grande quando i suoi lati sono più lunghi.'), correction: a('Angle size depends on the opening, not the length of its arms.', 'L’ampiezza dipende dall’apertura, non dalla lunghezza dei lati.') }] },
      { id: 'angle-pairs', title: a('Complementary and supplementary angles', 'Angoli complementari e supplementari'), explanation: a('Complementary angles add to 90°. Supplementary angles add to 180°. Vertically opposite angles are equal.', 'Due angoli sono complementari se la somma è 90°. Sono supplementari se la somma è 180°. Gli angoli opposti al vertice sono congruenti.'), workedExample: { scenario: a('One angle on a straight line is 67°. Find the adjacent angle.', 'Un angolo adiacente su una linea retta misura 67°. Trova l’altro angolo.'), steps: [a('Angles on a straight line add to 180°.', 'Gli angoli adiacenti su una linea retta sommano 180°.'), a('Subtract: 180° − 67° = 113°.', 'Sottrai: 180° − 67° = 113°.')], answer: a('The adjacent angle is 113°.', 'L’angolo adiacente misura 113°.') } }
    ],
    questions: [
      q('An angle of 42° is…', 'Un angolo di 42° è…', [a('acute', 'acuto'),a('right', 'retto'),a('obtuse', 'ottuso'),a('straight', 'piatto')], a('42° is less than 90°.', '42° è minore di 90°.')),
      q('What is the complement of 35°?', 'Qual è il complementare di 35°?', [a('55°','55°'),a('145°','145°'),a('65°','65°'),a('35°','35°')], a('90° − 35° = 55°.', '90° − 35° = 55°.')),
      q('What is the supplement of 124°?', 'Qual è il supplementare di 124°?', [a('56°','56°'),a('66°','66°'),a('124°','124°'),a('236°','236°')], a('180° − 124° = 56°.', '180° − 124° = 56°.')),
      q('Vertically opposite angles are…', 'Gli angoli opposti al vertice sono…', [a('equal','congruenti'),a('always 90°','sempre retti'),a('always supplementary','sempre supplementari'),a('always acute','sempre acuti')], a('Opposite angles formed by intersecting lines have equal measure.', 'Gli angoli opposti formati da due rette che si intersecano hanno la stessa ampiezza.')),
      q('A straight angle measures…', 'Un angolo piatto misura…', [a('180°','180°'),a('90°','90°'),a('360°','360°'),a('45°','45°')], a('A straight angle is half a full turn: 180°.', 'L’angolo piatto è metà giro: 180°.'))
    ],
    summary: [a('Classify angles by size. Complementary angles total 90°; supplementary angles total 180°; vertically opposite angles are equal.', 'Classifica gli angoli in base all’ampiezza. Gli angoli complementari sommano 90°; i supplementari 180°; gli opposti al vertice sono congruenti.')]
  },
  {
    id: 'm7m2',
    title: a('Triangles and their properties', 'Triangoli e loro proprietà'),
    topic: a('Classify triangles and calculate missing angles, perimeter and area.', 'Classificare i triangoli e calcolare angoli mancanti, perimetro e area.'),
    demon: a('The Triangle Trickster', 'L’Imbroglione dei Triangoli'),
    technique: a('Geometry Form · Three-Side Insight', 'Stile della Geometria · Intuizione dei Tre Lati'),
    concepts: [
      { id: 'triangle-classification', title: a('Classify triangles', 'Classificare i triangoli'), explanation: a('By sides, triangles are equilateral (three equal sides), isosceles (two equal sides) or scalene (no equal sides). By angles, they are acute, right or obtuse.', 'In base ai lati, i triangoli sono equilateri (tre lati uguali), isosceli (due lati uguali) o scaleni (nessun lato uguale). In base agli angoli, sono acutangoli, rettangoli o ottusangoli.'), workedExample: { scenario: a('A triangle has sides 5 cm, 5 cm and 8 cm. Classify it by sides.', 'Un triangolo ha lati di 5 cm, 5 cm e 8 cm. Classificalo in base ai lati.'), steps: [a('Compare the three side lengths.', 'Confronta le lunghezze dei tre lati.'), a('Two sides are equal: 5 cm and 5 cm.', 'Due lati sono uguali: 5 cm e 5 cm.')], answer: a('It is an isosceles triangle.', 'È un triangolo isoscele.') } },
      { id: 'triangle-angle-sum', title: a('The angle sum and area', 'Somma degli angoli e area'), explanation: a('The interior angles of every triangle add to 180°. Its area is base × perpendicular height ÷ 2.', 'La somma degli angoli interni di ogni triangolo è 180°. L’area è base × altezza relativa ÷ 2.'), workedExample: { scenario: a('A triangle has angles 48° and 72°. Find the third angle.', 'Un triangolo ha angoli di 48° e 72°. Trova il terzo angolo.'), steps: [a('Add the known angles: 48° + 72° = 120°.', 'Somma gli angoli noti: 48° + 72° = 120°.'), a('Subtract from 180°: 180° − 120° = 60°.', 'Sottrai da 180°: 180° − 120° = 60°.')], answer: a('The third angle is 60°.', 'Il terzo angolo misura 60°.') } }
    ],
    questions: [
      q('A triangle with three equal sides is…', 'Un triangolo con tre lati uguali è…', [a('equilateral','equilatero'),a('isosceles','isoscele'),a('scalene','scaleno'),a('right','rettangolo')], a('Equilateral means all three sides are equal.', 'Equilatero significa che tutti e tre i lati sono uguali.')),
      q('The interior angles of a triangle add to…', 'La somma degli angoli interni di un triangolo è…', [a('180°','180°'),a('90°','90°'),a('270°','270°'),a('360°','360°')], a('A triangle forms a straight angle when its angles are put together.', 'Gli angoli di un triangolo, messi insieme, formano un angolo piatto.')),
      q('Two angles are 35° and 85°. What is the third?', 'Due angoli misurano 35° e 85°. Quanto misura il terzo?', [a('60°','60°'),a('50°','50°'),a('70°','70°'),a('95°','95°')], a('180° − 35° − 85° = 60°.', '180° − 35° − 85° = 60°.')),
      q('A triangle has base 10 cm and height 6 cm. Its area is…', 'Un triangolo ha base 10 cm e altezza 6 cm. La sua area è…', [a('30 cm²','30 cm²'),a('60 cm²','60 cm²'),a('16 cm²','16 cm²'),a('32 cm²','32 cm²')], a('Area = (10 × 6) ÷ 2 = 30 cm².', 'Area = (10 × 6) ÷ 2 = 30 cm².')),
      q('A triangle with one 90° angle is…', 'Un triangolo con un angolo di 90° è…', [a('right-angled','rettangolo'),a('acute','acutangolo'),a('obtuse','ottusangolo'),a('equilateral','equilatero')], a('A right-angled triangle has one right angle.', 'Un triangolo rettangolo ha un angolo retto.'))
    ],
    summary: [a('Triangle angles total 180°. Area = base × height ÷ 2. Classify by sides and by angles.', 'Gli angoli di un triangolo sommano 180°. Area = base × altezza ÷ 2. Classifica in base ai lati e agli angoli.')]
  },
  {
    id: 'm7m3',
    title: a('The Pythagorean theorem', 'Il teorema di Pitagora'),
    topic: a('Use the theorem to find a missing side in a right-angled triangle.', 'Usare il teorema per trovare un lato mancante in un triangolo rettangolo.'),
    demon: a('The Hypotenuse Hunter', 'Il Cacciatore di Ipotenuse'),
    technique: a('Geometry Form · Right-Angle Resonance', 'Stile della Geometria · Risonanza dell’Angolo Retto'),
    concepts: [
      { id: 'pythagorean-rule', title: a('Legs and hypotenuse', 'Cateti e ipotenusa'), explanation: a('In a right-angled triangle, the hypotenuse is opposite the 90° angle and is the longest side. If the legs are a and b and the hypotenuse is c, then a² + b² = c².', 'In un triangolo rettangolo, l’ipotenusa è opposta all’angolo di 90° ed è il lato più lungo. Se i cateti sono a e b e l’ipotenusa è c, allora a² + b² = c².'), workedExample: { scenario: a('The legs measure 3 cm and 4 cm. Find the hypotenuse.', 'I cateti misurano 3 cm e 4 cm. Trova l’ipotenusa.'), steps: [a('Write the rule: c² = 3² + 4².', 'Scrivi la regola: c² = 3² + 4².'), a('Calculate: c² = 9 + 16 = 25.', 'Calcola: c² = 9 + 16 = 25.'), a('Take the square root: c = √25 = 5.', 'Calcola la radice quadrata: c = √25 = 5.')], answer: a('The hypotenuse is 5 cm.', 'L’ipotenusa misura 5 cm.') }, misconceptions: [{ belief: a('The hypotenuse is next to the right angle.', 'L’ipotenusa è uno dei lati che formano l’angolo retto.'), correction: a('The hypotenuse is opposite the right angle and is the longest side.', 'L’ipotenusa è opposta all’angolo retto ed è il lato più lungo.') }] },
      { id: 'pythagorean-converse', title: a('Check whether a triangle is right-angled', 'Verificare se un triangolo è rettangolo'), explanation: a('If the longest side c satisfies a² + b² = c², the triangle is right-angled. Compare the squares; do not compare the side lengths directly.', 'Se il lato maggiore c soddisfa a² + b² = c², il triangolo è rettangolo. Confronta i quadrati, non direttamente le lunghezze dei lati.'), workedExample: { scenario: a('Could sides 6, 8 and 10 form a right-angled triangle?', 'I lati 6, 8 e 10 possono formare un triangolo rettangolo?'), steps: [a('The longest side is 10.', 'Il lato maggiore è 10.'), a('6² + 8² = 36 + 64 = 100 = 10².', '6² + 8² = 36 + 64 = 100 = 10².')], answer: a('Yes, it is right-angled.', 'Sì, è rettangolo.') } }
    ],
    questions: [
      q('Which side is the hypotenuse?', 'Quale lato è l’ipotenusa?', [a('The side opposite the right angle','Il lato opposto all’angolo retto'),a('The shortest side','Il lato più corto'),a('Any side','Un lato qualsiasi'),a('A side next to the right angle','Un lato adiacente all’angolo retto')], a('The hypotenuse is opposite 90° and is the longest side.', 'L’ipotenusa è opposta a 90° ed è il lato più lungo.')),
      q('Which formula is Pythagoras’ theorem?', 'Qual è la formula del teorema di Pitagora?', [a('a² + b² = c²','a² + b² = c²'),a('a + b = c','a + b = c'),a('2a + 2b = c','2a + 2b = c'),a('a² − b² = c²','a² − b² = c²')], a('The squares of the legs add to the square of the hypotenuse.', 'La somma dei quadrati dei cateti è uguale al quadrato dell’ipotenusa.')),
      q('The legs are 5 and 12. The hypotenuse is…', 'I cateti sono 5 e 12. L’ipotenusa è…', [a('13','13'),a('17','17'),a('12','12'),a('10','10')], a('√(25 + 144) = √169 = 13.', '√(25 + 144) = √169 = 13.')),
      q('A right triangle has hypotenuse 10 and one leg 6. The other leg is…', 'Un triangolo rettangolo ha ipotenusa 10 e un cateto 6. L’altro cateto è…', [a('8','8'),a('4','4'),a('16','16'),a('6','6')], a('√(10² − 6²) = √64 = 8.', '√(10² − 6²) = √64 = 8.')),
      q('For sides 7, 24 and 25, what does 7² + 24² equal?', 'Per i lati 7, 24 e 25, quanto vale 7² + 24²?', [a('625','625'),a('576','576'),a('49','49'),a('25','25')], a('49 + 576 = 625 = 25².', '49 + 576 = 625 = 25².'))
    ],
    summary: [a('In a right triangle, a² + b² = c². The hypotenuse is opposite the right angle. Use the converse to test a triangle.', 'In un triangolo rettangolo, a² + b² = c². L’ipotenusa è opposta all’angolo retto. Usa il teorema inverso per verificare un triangolo.')]
  },
  {
    id: 'm7m4',
    title: a('Quadrilaterals and perimeter', 'Quadrilateri e perimetro'),
    topic: a('Identify common quadrilaterals and calculate perimeter and area.', 'Riconoscere i quadrilateri e calcolare perimetro e area.'),
    demon: a('The Shape Shifter', 'Il Mutaforme'),
    technique: a('Geometry Form · Shape Recognition', 'Stile della Geometria · Riconoscimento delle Forme'),
    concepts: [
      { id: 'quadrilateral-families', title: a('Families of quadrilaterals', 'Famiglie di quadrilateri'), explanation: a('A quadrilateral has four sides. A parallelogram has two pairs of parallel opposite sides; a rectangle has four right angles; a rhombus has four equal sides; a square has both properties.', 'Un quadrilatero ha quattro lati. Un parallelogramma ha due coppie di lati opposti paralleli; un rettangolo ha quattro angoli retti; un rombo ha quattro lati uguali; un quadrato possiede entrambe le proprietà.'), workedExample: { scenario: a('A shape has four equal sides and four right angles. Name it.', 'Una figura ha quattro lati uguali e quattro angoli retti. Come si chiama?'), steps: [a('Four equal sides describe a rhombus.', 'Quattro lati uguali descrivono un rombo.'), a('Four right angles describe a rectangle.', 'Quattro angoli retti descrivono un rettangolo.')], answer: a('It is a square.', 'È un quadrato.') } },
      { id: 'perimeter-area', title: a('Perimeter and area', 'Perimetro e area'), explanation: a('Perimeter is the total distance around a shape. Area measures the surface inside it. For a rectangle, P = 2(l + w) and A = l × w.', 'Il perimetro è la lunghezza totale del contorno. L’area misura la superficie interna. Per un rettangolo, P = 2(b + h) e A = b × h.'), workedExample: { scenario: a('A rectangle is 8 cm long and 3 cm wide.', 'Un rettangolo è lungo 8 cm e largo 3 cm.'), steps: [a('Perimeter: 2 × (8 + 3) = 22 cm.', 'Perimetro: 2 × (8 + 3) = 22 cm.'), a('Area: 8 × 3 = 24 cm².', 'Area: 8 × 3 = 24 cm².')], answer: a('P = 22 cm; A = 24 cm².', 'P = 22 cm; A = 24 cm².') } }
    ],
    questions: [
      q('How many sides does a quadrilateral have?', 'Quanti lati ha un quadrilatero?', [a('4','4'),a('3','3'),a('5','5'),a('6','6')], a('The prefix quadri- means four.', 'Il prefisso quadri- significa quattro.')),
      q('Which shape has four right angles?', 'Quale figura ha quattro angoli retti?', [a('rectangle','rettangolo'),a('any rhombus','qualsiasi rombo'),a('any trapezium','qualsiasi trapezio'),a('any parallelogram','qualsiasi parallelogramma')], a('A rectangle has four right angles.', 'Un rettangolo ha quattro angoli retti.')),
      q('A rectangle is 9 cm by 4 cm. Its perimeter is…', 'Un rettangolo misura 9 cm per 4 cm. Il suo perimetro è…', [a('26 cm','26 cm'),a('36 cm','36 cm'),a('13 cm','13 cm'),a('18 cm','18 cm')], a('P = 2 × (9 + 4) = 26 cm.', 'P = 2 × (9 + 4) = 26 cm.')),
      q('The area of a 7 cm × 5 cm rectangle is…', 'L’area di un rettangolo 7 cm × 5 cm è…', [a('35 cm²','35 cm²'),a('24 cm²','24 cm²'),a('12 cm²','12 cm²'),a('70 cm²','70 cm²')], a('Area = length × width = 7 × 5 = 35 cm².', 'Area = base × altezza = 7 × 5 = 35 cm².')),
      q('A square has…', 'Un quadrato ha…', [a('four equal sides and four right angles','quattro lati uguali e quattro angoli retti'),a('only two equal sides','solo due lati uguali'),a('no parallel sides','nessun lato parallelo'),a('three sides','tre lati')], a('A square is both a rectangle and a rhombus.', 'Un quadrato è sia un rettangolo sia un rombo.'))
    ],
    summary: [a('A quadrilateral has four sides. Perimeter measures the boundary; area measures the surface. For a rectangle: P = 2(l + w), A = l × w.', 'Un quadrilatero ha quattro lati. Il perimetro misura il contorno; l’area misura la superficie. Per un rettangolo: P = 2(b + h), A = b × h.')]
  },
  {
    id: 'm7m5',
    title: a('Circles and circumference', 'Cerchio e circonferenza'),
    topic: a('Understand radius, diameter, circumference and circle area.', 'Comprendere raggio, diametro, circonferenza e area del cerchio.'),
    demon: a('The Circle Spinner', 'Il Cerchio Rotante'),
    technique: a('Geometry Form · Circle Orbit', 'Stile della Geometria · Orbita Circolare'),
    concepts: [
      { id: 'circle-parts', title: a('Radius and diameter', 'Raggio e diametro'), explanation: a('The radius goes from the centre to the circumference. The diameter passes through the centre and equals twice the radius: d = 2r.', 'Il raggio va dal centro alla circonferenza. Il diametro passa per il centro e misura il doppio del raggio: d = 2r.'), workedExample: { scenario: a('A circle has radius 4 cm. Find its diameter.', 'Un cerchio ha raggio 4 cm. Trova il diametro.'), steps: [a('Use d = 2r.', 'Usa d = 2r.'), a('d = 2 × 4 = 8 cm.', 'd = 2 × 4 = 8 cm.')], answer: a('The diameter is 8 cm.', 'Il diametro misura 8 cm.') } },
      { id: 'circle-measures', title: a('Circumference and area', 'Circonferenza e area'), explanation: a('The circumference is C = 2πr (or πd). The area is A = πr². Use π ≈ 3.14 when an approximate decimal is needed.', 'La circonferenza è C = 2πr (oppure πd). L’area è A = πr². Usa π ≈ 3,14 quando serve un valore decimale approssimato.'), workedExample: { scenario: a('A circle has radius 3 cm. Estimate its circumference.', 'Un cerchio ha raggio 3 cm. Stima la circonferenza.'), steps: [a('Use C = 2πr.', 'Usa C = 2πr.'), a('C ≈ 2 × 3.14 × 3 = 18.84 cm.', 'C ≈ 2 × 3,14 × 3 = 18,84 cm.')], answer: a('The circumference is about 18.84 cm.', 'La circonferenza misura circa 18,84 cm.') } }
    ],
    questions: [
      q('The diameter is…', 'Il diametro è…', [a('twice the radius','il doppio del raggio'),a('half the radius','la metà del raggio'),a('equal to the circumference','uguale alla circonferenza'),a('always 1 cm','sempre 1 cm')], a('d = 2r.', 'd = 2r.')),
      q('A circle has radius 5 cm. Its diameter is…', 'Un cerchio ha raggio 5 cm. Il suo diametro è…', [a('10 cm','10 cm'),a('5 cm','5 cm'),a('15 cm','15 cm'),a('25 cm','25 cm')], a('d = 2 × 5 = 10 cm.', 'd = 2 × 5 = 10 cm.')),
      q('Which formula gives circumference?', 'Quale formula calcola la circonferenza?', [a('2πr','2πr'),a('πr²','πr²'),a('r²','r²'),a('4r','4r')], a('Circumference is the distance around the circle: 2πr.', 'La circonferenza è la lunghezza del contorno: 2πr.')),
      q('The area of a circle with radius 2 cm is…', 'L’area di un cerchio con raggio 2 cm è…', [a('4π cm²','4π cm²'),a('2π cm²','2π cm²'),a('8π cm²','8π cm²'),a('π cm²','π cm²')], a('A = π × 2² = 4π cm².', 'A = π × 2² = 4π cm².')),
      q('Which quantity is measured in square centimetres?', 'Quale grandezza si misura in centimetri quadrati?', [a('area','area'),a('radius','raggio'),a('diameter','diametro'),a('circumference','circonferenza')], a('Area measures a surface, so its units are squared.', 'L’area misura una superficie, quindi le sue unità sono al quadrato.'))
    ],
    summary: [a('Diameter d = 2r. Circumference C = 2πr. Area A = πr². Keep length units and area units distinct.', 'Diametro d = 2r. Circonferenza C = 2πr. Area A = πr². Distingui le unità di lunghezza da quelle di superficie.')]
  },
  {
    id: 'm7m6',
    title: a('Statistics: mean, median and mode', 'Statistica: media, mediana e moda'),
    topic: a('Summarise a small data set and interpret what each measure tells you.', 'Riassumere un piccolo insieme di dati e interpretare le misure di tendenza centrale.'),
    demon: a('The Data Distorter', 'Il Distorsore dei Dati'),
    technique: a('Number Form · Data Sense', 'Stile dei Numeri · Senso dei Dati'),
    concepts: [
      { id: 'central-tendency', title: a('Mean, median and mode', 'Media, mediana e moda'), explanation: a('The mean is the sum divided by the number of values. The median is the middle value after sorting. The mode is the value that appears most often.', 'La media è la somma dei valori divisa per il loro numero. La mediana è il valore centrale dopo aver ordinato i dati. La moda è il valore che compare più spesso.'), workedExample: { scenario: a('Find the mean, median and mode of 2, 3, 3, 7, 10.', 'Trova media, mediana e moda di 2, 3, 3, 7, 10.'), steps: [a('Mean: (2 + 3 + 3 + 7 + 10) ÷ 5 = 5.', 'Media: (2 + 3 + 3 + 7 + 10) ÷ 5 = 5.'), a('The ordered middle value is 3.', 'Il valore centrale ordinato è 3.'), a('The most frequent value is 3.', 'Il valore più frequente è 3.')], answer: a('Mean 5; median 3; mode 3.', 'Media 5; mediana 3; moda 3.') } },
      { id: 'range-outliers', title: a('Range and unusual values', 'Campo di variazione e valori anomali'), explanation: a('The range is maximum minus minimum. An unusually large or small value can pull the mean, while the median is often more resistant.', 'Il campo di variazione è massimo meno minimo. Un valore molto grande o piccolo può spostare la media, mentre la mediana spesso ne risente meno.'), workedExample: { scenario: a('Compare 4, 5, 5, 6, 30 with 4, 5, 5, 6, 7.', 'Confronta 4, 5, 5, 6, 30 con 4, 5, 5, 6, 7.'), steps: [a('Both sets have median 5.', 'Entrambi gli insiemi hanno mediana 5.'), a('The value 30 makes the first mean much larger.', 'Il valore 30 rende molto più alta la media del primo insieme.')], answer: a('The median better represents the typical value when an extreme value is present.', 'In presenza di un valore estremo, la mediana può rappresentare meglio il valore tipico.') } }
    ],
    questions: [
      q('The mean is found by…', 'La media si calcola…', [a('sum ÷ number of values','somma ÷ numero dei valori'),a('largest − smallest','massimo − minimo'),a('choosing the middle value','scegliendo il valore centrale'),a('choosing the most frequent value','scegliendo il valore più frequente')], a('Add all values and divide by how many values there are.', 'Somma tutti i valori e dividi per quanti sono.')),
      q('What is the median of 1, 4, 6, 8, 9?', 'Qual è la mediana di 1, 4, 6, 8, 9?', [a('6','6'),a('4','4'),a('8','8'),a('5.6','5,6')], a('The middle value in the ordered list is 6.', 'Il valore centrale della lista ordinata è 6.')),
      q('What is the mode of 2, 2, 3, 5, 5, 5, 8?', 'Qual è la moda di 2, 2, 3, 5, 5, 5, 8?', [a('5','5'),a('2','2'),a('3','3'),a('8','8')], a('5 appears more often than any other value.', 'Il 5 compare più volte di ogni altro valore.')),
      q('What is the range of 3, 7, 9, 12?', 'Qual è il campo di variazione di 3, 7, 9, 12?', [a('9','9'),a('12','12'),a('15','15'),a('3','3')], a('Range = 12 − 3 = 9.', 'Campo di variazione = 12 − 3 = 9.')),
      q('Which measure is often less affected by one extreme value?', 'Quale misura è spesso meno influenzata da un valore estremo?', [a('median','mediana'),a('mean','media'),a('range','campo di variazione'),a('maximum','massimo')], a('The median depends on position in the ordered list, not the size of every value.', 'La mediana dipende dalla posizione nella lista ordinata, non dalla grandezza di ogni valore.'))
    ],
    summary: [a('Mean = sum ÷ count; median = middle after sorting; mode = most frequent; range = maximum − minimum.', 'Media = somma ÷ quantità; mediana = valore centrale dopo l’ordinamento; moda = valore più frequente; campo di variazione = massimo − minimo.')]
  }
];

const buildMission = (topic: GeometryTopic, index: number): Mission => {
  const [first, second] = topic.concepts;
  const knowledgeCheck = topic.questions.slice(0, 3);
  const independent = topic.questions.slice(3);
  return {
    id: topic.id, arc: 0, sec: `G.${index + 1}`, pages: 'Geometry enrichment',
    hue: 185 + index * 13, horns: 2, eyes: 2, title: topic.title, topic: topic.topic,
    demon: topic.demon, tech: topic.tech, boss: index === topics.length - 1,
    scenes: [
      { who: 's', vis: 'math-geometry', text: [`<p><b>${topic.title[0]}</b></p><p>${topic.topic[0]}</p>`, `<p><b>${topic.title[1]}</b></p><p>${topic.topic[1]}</p>`] },
      { who: 's', text: [`<p>${first.title[0]}</p><p>${first.explanation[0]}</p>`, `<p>${first.title[1]}</p><p>${first.explanation[1]}</p>`] },
      { who: 'y', text: [`<p>${second.title[0]}</p><p>${second.explanation[0]}</p>`, `<p>${second.title[1]}</p><p>${second.explanation[1]}</p>`] },
      { who: 'd', text: [`<p>Use the worked example, then explain why each step is valid.</p>`, `<p>Segui l’esempio svolto e spiega perché ogni passaggio è corretto.</p>`] }
    ],
    quiz: topic.questions,
    learning: {
      version: 1,
      prerequisites: [a('Be comfortable with basic arithmetic and reading simple diagrams.', 'Saper eseguire calcoli di base e leggere semplici diagrammi.')],
      objectives: [
        { id: `${topic.id}-objective-1`, description: a(`Explain the key ideas in ${topic.title[0].toLowerCase()}.`, `Spiegare le idee fondamentali di ${topic.title[1].toLowerCase()}.`) },
        { id: `${topic.id}-objective-2`, description: a('Solve a practical problem and show the steps clearly.', 'Risolvere un problema pratico mostrando chiaramente i passaggi.') }
      ],
      concepts: topic.concepts,
      guidedPractice: [{ id: `${topic.id}-guided`, title: a('Guided practice', 'Esercitazione guidata'), instructions: a('Try the first questions and read the explanation after each answer.', 'Prova le prime domande e leggi la spiegazione dopo ogni risposta.'), questions: knowledgeCheck }],
      independentPractice: [{ id: `${topic.id}-independent`, title: a('Try it yourself', 'Prova da solo'), instructions: a('Solve without looking at the worked example first.', 'Risolvi senza guardare prima l’esempio svolto.'), questions: independent }],
      knowledgeCheck,
      summary: topic.summary,
      masteryAssessment: { title: a('Geometry mastery check', 'Verifica di padronanza'), instructions: a('Score at least 75% to demonstrate mastery.', 'Raggiungi almeno il 75% per dimostrare la padronanza.'), questions: topic.questions, passingScore: 75 },
      techniqueUnlock: { id: `${topic.id}-technique`, name: topic.tech, description: a('Use a clear diagram, choose the right rule and show each step before your final strike.', 'Usa un diagramma chiaro, scegli la regola corretta e mostra ogni passaggio prima del colpo finale.'), xpReward: 25 }
    }
  };
};

export const MATH_GEOMETRY_MISSIONS: Mission[] = topics.map(buildMission);
