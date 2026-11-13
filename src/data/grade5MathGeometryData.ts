import type { Mission } from '../types';
import { makeG5MathMission, q, type Pair } from './grade5MathCommon';

const geometryTaunt = (demon: Pair): Pair => [
  `<p>📐 I am ${demon[0]}! I bend straight lines, shrink shapes and lose the formulas. Can you rebuild every figure?</p>`,
  `<p>📐 Sono ${demon[1]}! Piego le rette, deformo le figure e perdo le formule. Sai ricostruire ogni figura?</p>`
];

/** Spazio e figure · pages 118–164. */
export const GRADE5_MATH_GEOMETRY_MISSIONS: Mission[] = [
  makeG5MathMission({
    id: 'g5m-cartesian', sec: '5.1', pages: '119', hue: 160,
    title: ['The Cartesian Plane', 'Il piano cartesiano'],
    topic: ['Axes, origin and coordinates of points', 'Assi, origine e coordinate dei punti'],
    demon: ['The Lost Pointer', 'il Puntatore Smarrito'],
    tech: ['Space Form · First Technique: Exact Spot', 'Stile dello Spazio · Prima Tecnica: Punto Esatto'],
    lessons: [
      { vis: 'g5m-cartesian', text: [
        '<p>🗺️ The <b>Cartesian plane</b> has two perpendicular number lines: the horizontal <b>x-axis</b> (axis of the abscissas) and the vertical <b>y-axis</b> (axis of the ordinates). They meet at the <b>origin O (0, 0)</b>.</p>',
        '<p>🗺️ Il <b>piano cartesiano</b> è formato da due rette numerate perpendicolari: l’<b>asse x</b> orizzontale (asse delle ascisse) e l’<b>asse y</b> verticale (asse delle ordinate). Si incontrano nell’<b>origine O (0; 0)</b>.</p>'
      ] },
      [
        '<p>📍 Every point has two <b>coordinates</b>: first <b>x</b> (how far right), then <b>y</b> (how far up). A (3, 5) means 3 steps right and 5 steps up. Order matters: (5, 3) is a different point!</p>',
        '<p>📍 Ogni punto ha due <b>coordinate</b>: prima la <b>x</b> (quanto a destra), poi la <b>y</b> (quanto in alto). A (3; 5) significa 3 passi a destra e 5 in alto. L’ordine conta: (5; 3) è un altro punto!</p>'
      ],
      [
        '<p>🔷 Joining points draws shapes: A (1, 1), B (5, 1), C (5, 4), D (1, 4) form a <b>rectangle</b> with base 5 − 1 = 4 and height 4 − 1 = 3. The plane is used in maps, games and graphs.</p>',
        '<p>🔷 Unendo i punti si disegnano figure: A (1; 1), B (5; 1), C (5; 4), D (1; 4) formano un <b>rettangolo</b> con base 5 − 1 = 4 e altezza 4 − 1 = 3. Il piano cartesiano si usa nelle mappe, nei giochi e nei grafici.</p>'
      ]
    ],
    quiz: [
      q('Point A is 7 steps right and 4 steps up from the origin. What are its coordinates?', 'Il punto A è 7 passi a destra e 4 in alto rispetto all’origine. Quali sono le sue coordinate?', [['(7, 4)', '(7; 4)'], ['(4, 7)', '(4; 7)'], ['(7, 0)', '(7; 0)'], ['(11, 0)', '(11; 0)']], ['x comes first, then y.', 'Prima la x, poi la y.']),
      q('What are the coordinates of the origin?', 'Quali sono le coordinate dell’origine?', [['(0, 0)', '(0; 0)'], ['(1, 1)', '(1; 1)'], ['(0, 1)', '(0; 1)'], ['(10, 10)', '(10; 10)']], ['The axes meet at zero.', 'Gli assi si incontrano nello zero.']),
      q('Which axis is vertical?', 'Quale asse è verticale?', [['The y-axis (ordinates)', 'L’asse y (delle ordinate)'], ['The x-axis (abscissas)', 'L’asse x (delle ascisse)'], ['Both', 'Entrambi'], ['Neither', 'Nessuno']], ['x is horizontal, y is vertical.', 'La x è orizzontale, la y è verticale.']),
      q('A (1, 1), B (5, 1), C (5, 4), D (1, 4). How long is side AB?', 'A (1; 1), B (5; 1), C (5; 4), D (1; 4). Quanto è lungo il lato AB?', [['4', '4'], ['5', '5'], ['3', '3'], ['6', '6']], ['Same y; the x values differ by 5 − 1 = 4.', 'Stessa y; le x differiscono di 5 − 1 = 4.'])
    ]
  }, geometryTaunt),
  makeG5MathMission({
    id: 'g5m-isometries', sec: '5.2', pages: '120–122', hue: 175,
    title: ['Isometries: Translation, Rotation, Symmetry', 'Le isometrie: traslazione, rotazione, simmetria'],
    topic: ['Movements that keep shape and size', 'Movimenti che conservano forma e dimensioni'],
    demon: ['The Mirror Mimic', 'lo Specchio Imbroglione'],
    tech: ['Space Form · Second Technique: Perfect Move', 'Stile dello Spazio · Seconda Tecnica: Mossa Perfetta'],
    lessons: [
      [
        '<p>🔁 An <b>isometry</b> (“same measure”) moves a figure without changing its <b>shape</b> or <b>size</b>: the new figure is <b>congruent</b> to the old one. There are three: translation, rotation and symmetry.</p><p>➡️ <b>Translation</b>: the figure slides along a <b>vector</b>, an arrow that gives direction, sense and length (e.g. 5 squares to the right).</p>',
        '<p>🔁 Un’<b>isometria</b> («stessa misura») sposta una figura senza cambiarne la <b>forma</b> né le <b>dimensioni</b>: la nuova figura è <b>congruente</b> a quella di partenza. Sono tre: traslazione, rotazione e simmetria.</p><p>➡️ <b>Traslazione</b>: la figura scivola lungo un <b>vettore</b>, una freccia che indica direzione, verso e lunghezza (es. 5 quadretti a destra).</p>'
      ],
      [
        '<p>🔄 <b>Rotation</b>: the figure turns around a fixed point (the <b>centre of rotation</b>) by an <b>angle</b>, clockwise or anticlockwise. A rotation of 360° brings it back to the start; 90° is a quarter turn.</p>',
        '<p>🔄 <b>Rotazione</b>: la figura gira intorno a un punto fisso (il <b>centro di rotazione</b>) di un certo <b>angolo</b>, in senso orario o antiorario. Una rotazione di 360° la riporta al punto di partenza; 90° è un quarto di giro.</p>'
      ],
      [
        '<p>🪞 <b>Axial symmetry</b> (reflection): the figure is reflected in a line, the <b>axis of symmetry</b>, like in a mirror. Every point and its image are at the <b>same distance</b> from the axis. A square has 4 axes of symmetry; a rectangle 2; a circle infinitely many.</p>',
        '<p>🪞 <b>Simmetria assiale</b>: la figura si riflette rispetto a una retta, l’<b>asse di simmetria</b>, come in uno specchio. Ogni punto e il suo corrispondente sono alla <b>stessa distanza</b> dall’asse. Il quadrato ha 4 assi di simmetria; il rettangolo 2; il cerchio infiniti.</p>'
      ]
    ],
    quiz: [
      q('Which movement slides a figure along an arrow (vector)?', 'Quale movimento fa scivolare una figura lungo una freccia (vettore)?', [['Translation', 'Traslazione'], ['Rotation', 'Rotazione'], ['Symmetry', 'Simmetria'], ['Enlargement', 'Ingrandimento']], ['A translation is defined by a vector.', 'La traslazione è definita da un vettore.']),
      q('How many axes of symmetry does a square have?', 'Quanti assi di simmetria ha un quadrato?', [['4', '4'], ['2', '2'], ['1', '1'], ['0', '0']], ['Two through the midpoints of opposite sides and two along the diagonals.', 'Due passano per i punti medi dei lati opposti e due lungo le diagonali.']),
      q('After an isometry, the figure…', 'Dopo un’isometria la figura…', [['Has the same shape and size', 'Ha la stessa forma e le stesse dimensioni'], ['Becomes bigger', 'Diventa più grande'], ['Becomes smaller', 'Diventa più piccola'], ['Changes shape', 'Cambia forma']], ['Isometry means “same measure”.', 'Isometria significa «stessa misura».']),
      q('A rotation of 90° is…', 'Una rotazione di 90° è…', [['A quarter turn', 'Un quarto di giro'], ['Half a turn', 'Mezzo giro'], ['A full turn', 'Un giro completo'], ['No movement', 'Nessun movimento']], ['360° ÷ 4 = 90°.', '360° : 4 = 90°.'])
    ]
  }, geometryTaunt),
  makeG5MathMission({
    id: 'g5m-similarity-fractals', sec: '5.3', pages: '123, 126–127', hue: 190,
    title: ['Similarity, Fractals and Sierpinski’s Triangle', 'Similitudini, geometria frattale e triangolo di Sierpinski'],
    topic: ['Enlargements, reductions and scale; Maths on the Road: fractal geometry; STEM: Sierpinski’s triangle', 'Ingrandimenti, riduzioni e scala; Mate in viaggio: la geometria frattale; STEM: il triangolo di Sierpinski'],
    demon: ['The Shrink Ray', 'il Raggio Rimpicciolente'],
    tech: ['Space Form · Third Technique: Same Shape', 'Stile dello Spazio · Terza Tecnica: Stessa Forma'],
    lessons: [
      [
        '<p>🔍 Two figures are <b>similar</b> when they have the <b>same shape</b> but different size: angles stay the same, and all sides are multiplied by the same number. Doubling every side of a 3 cm × 2 cm rectangle gives a similar 6 cm × 4 cm rectangle. This is not an isometry, because the size changes.</p>',
        '<p>🔍 Due figure sono <b>simili</b> quando hanno la <b>stessa forma</b> ma dimensioni diverse: gli angoli restano uguali e tutti i lati vengono moltiplicati per lo stesso numero. Raddoppiando i lati di un rettangolo di 3 cm × 2 cm si ottiene un rettangolo simile di 6 cm × 4 cm. Non è un’isometria, perché le dimensioni cambiano.</p>'
      ],
      [
        '<p>🗺️ Maps and drawings use a <b>scale</b>: 1 : 100 means that 1 cm on paper is 100 cm = 1 m in reality. A room 5 cm long on the plan is 5 m long. On squared paper you can enlarge a picture by copying it on bigger squares.</p>',
        '<p>🗺️ Le carte e i disegni usano una <b>scala</b>: 1 : 100 significa che 1 cm sul foglio corrisponde a 100 cm = 1 m nella realtà. Una stanza lunga 5 cm sulla pianta è lunga 5 m. Sulla carta a quadretti puoi ingrandire un disegno ricopiandolo su quadretti più grandi.</p>'
      ],
      [
        '<p>❄️ <b>Fractals</b> are shapes made of smaller copies of themselves, like ferns, snowflakes and Romanesco broccoli. <b>STEM – Sierpinski’s triangle</b>: start with a triangle, join the midpoints of its sides and remove the middle triangle; repeat on each remaining triangle. The number of triangles grows 1, 3, 9, 27… (powers of 3).</p>',
        '<p>❄️ I <b>frattali</b> sono figure formate da copie più piccole di sé stesse, come le felci, i fiocchi di neve e il broccolo romanesco. <b>STEM – il triangolo di Sierpinski</b>: parti da un triangolo, unisci i punti medi dei lati e togli il triangolo centrale; ripeti su ogni triangolo rimasto. Il numero di triangoli cresce così: 1, 3, 9, 27… (potenze del 3).</p>'
      ]
    ],
    quiz: [
      q('On a 1 : 100 plan, a room is 5 cm long. How long is it in reality?', 'Su una pianta in scala 1 : 100 una stanza è lunga 5 cm. Quanto è lunga in realtà?', [['5 m', '5 m'], ['50 cm', '50 cm'], ['500 m', '500 m'], ['5 cm', '5 cm']], ['5 × 100 = 500 cm = 5 m.', '5 × 100 = 500 cm = 5 m.']),
      q('A 3 cm × 2 cm rectangle is enlarged by doubling every side. What are the new sides?', 'Un rettangolo di 3 cm × 2 cm viene ingrandito raddoppiando i lati. Quali sono i nuovi lati?', [['6 cm × 4 cm', '6 cm × 4 cm'], ['5 cm × 4 cm', '5 cm × 4 cm'], ['6 cm × 2 cm', '6 cm × 2 cm'], ['9 cm × 4 cm', '9 cm × 4 cm']], ['Every side is multiplied by 2.', 'Ogni lato si moltiplica per 2.']),
      q('Sierpinski’s triangle: how many triangles after 3 steps (1 → 3 → 9 → ?)', 'Triangolo di Sierpinski: quanti triangoli dopo 3 passaggi (1 → 3 → 9 → ?)', [['27', '27'], ['12', '12'], ['18', '18'], ['81', '81']], ['Each step multiplies by 3.', 'A ogni passaggio si moltiplica per 3.']),
      q('In two similar figures, what stays the same?', 'In due figure simili, che cosa resta uguale?', [['The angles', 'Gli angoli'], ['The lengths of the sides', 'Le lunghezze dei lati'], ['The area', 'L’area'], ['The perimeter', 'Il perimetro']], ['Similar figures have equal angles and proportional sides.', 'Le figure simili hanno angoli uguali e lati proporzionali.'])
    ]
  }, geometryTaunt),
  makeG5MathMission({
    id: 'g5m-lines-angles', sec: '5.4', pages: '128', hue: 205,
    title: ['Lines and Angles', 'Rette e angoli'],
    topic: ['Lines, rays, segments; parallel and perpendicular lines; classifying and measuring angles', 'Rette, semirette, segmenti; rette parallele e perpendicolari; classificare e misurare gli angoli'],
    demon: ['The Crooked Compass', 'la Bussola Storta'],
    tech: ['Space Form · Fourth Technique: True Angle', 'Stile dello Spazio · Quarta Tecnica: Angolo Esatto'],
    lessons: [
      { vis: 'g5m-angles', text: [
        '<p>📏 A <b>line</b> has no beginning and no end; a <b>ray</b> (semiretta) has a starting point; a <b>segment</b> has two endpoints and can be measured. Two lines in a plane can be <b>parallel</b> (they never meet) or <b>intersecting</b> (they meet at one point). Intersecting lines that form four right angles are <b>perpendicular</b>.</p>',
        '<p>📏 La <b>retta</b> non ha inizio né fine; la <b>semiretta</b> ha un’origine; il <b>segmento</b> ha due estremi e si può misurare. Due rette nel piano possono essere <b>parallele</b> (non si incontrano mai) o <b>incidenti</b> (si incontrano in un punto). Le rette incidenti che formano quattro angoli retti sono <b>perpendicolari</b>.</p>'
      ] },
      [
        '<p>📐 An <b>angle</b> is the part of the plane between two rays with the same origin (the <b>vertex</b>). We measure angles in <b>degrees (°)</b> with a <b>protractor</b>:</p><ul><li>acute: less than 90°</li><li>right: 90°</li><li>obtuse: between 90° and 180°</li><li>straight: 180°</li><li>full (round): 360°</li></ul>',
        '<p>📐 L’<b>angolo</b> è la parte di piano compresa tra due semirette con la stessa origine (il <b>vertice</b>). Gli angoli si misurano in <b>gradi (°)</b> con il <b>goniometro</b>:</p><ul><li>acuto: minore di 90°</li><li>retto: 90°</li><li>ottuso: tra 90° e 180°</li><li>piatto: 180°</li><li>giro: 360°</li></ul>'
      ],
      [
        '<p>➕ Angles can be added: two angles that together make 90° are <b>complementary</b> (30° + 60°); together 180° they are <b>supplementary</b> (110° + 70°). Words to remember: <b>horizontal</b>, <b>vertical</b>, <b>oblique</b>.</p>',
        '<p>➕ Gli angoli si possono sommare: due angoli che insieme formano 90° sono <b>complementari</b> (30° + 60°); che insieme formano 180° sono <b>supplementari</b> (110° + 70°). Parole da ricordare: <b>orizzontale</b>, <b>verticale</b>, <b>obliquo</b>.</p>'
      ]
    ],
    quiz: [
      q('An angle measures 135°. What kind is it?', 'Un angolo misura 135°. Di che tipo è?', [['Obtuse', 'Ottuso'], ['Acute', 'Acuto'], ['Right', 'Retto'], ['Straight', 'Piatto']], ['It is between 90° and 180°.', 'È compreso tra 90° e 180°.']),
      q('Two lines that never meet are…', 'Due rette che non si incontrano mai sono…', [['Parallel', 'Parallele'], ['Perpendicular', 'Perpendicolari'], ['Intersecting', 'Incidenti'], ['Oblique', 'Oblique']], ['Parallel lines keep the same distance.', 'Le rette parallele mantengono sempre la stessa distanza.']),
      q('What is the supplementary angle of 110°?', 'Qual è l’angolo supplementare di 110°?', [['70°', '70°'], ['250°', '250°'], ['20°', '20°'], ['90°', '90°']], ['180° − 110° = 70°.', '180° − 110° = 70°.']),
      q('Which tool measures angles?', 'Quale strumento misura gli angoli?', [['The protractor', 'Il goniometro'], ['The compass', 'Il compasso'], ['The scale', 'La bilancia'], ['The thermometer', 'Il termometro']], ['A protractor is marked in degrees.', 'Il goniometro è graduato in gradi.'])
    ]
  }, geometryTaunt),
  makeG5MathMission({
    id: 'g5m-polygons', sec: '5.5', pages: '129–131', hue: 220,
    title: ['Polygons and Their Classification', 'I poligoni e la loro classificazione'],
    topic: ['Elements of a polygon, convex and concave polygons, sum of angles, triangles and quadrilaterals', 'Elementi del poligono, poligoni convessi e concavi, somma degli angoli, triangoli e quadrilateri'],
    demon: ['The Broken-Line Bandit', 'il Bandito della Spezzata'],
    tech: ['Space Form · Fifth Technique: Shape Sorter', 'Stile dello Spazio · Quinta Tecnica: Smista-Figure'],
    lessons: [
      [
        '<p>⬠ A <b>polygon</b> is a part of the plane bounded by a <b>closed broken line</b> that does not cross itself. Its elements: <b>sides</b>, <b>vertices</b>, <b>angles</b> and <b>diagonals</b> (segments joining two non-consecutive vertices). It is <b>convex</b> if no diagonal goes outside; otherwise it is <b>concave</b>.</p>',
        '<p>⬠ Il <b>poligono</b> è la parte di piano delimitata da una <b>linea spezzata chiusa</b> non intrecciata. I suoi elementi: <b>lati</b>, <b>vertici</b>, <b>angoli</b> e <b>diagonali</b> (segmenti che uniscono due vertici non consecutivi). È <b>convesso</b> se nessuna diagonale esce dalla figura; altrimenti è <b>concavo</b>.</p>'
      ],
      [
        '<p>🔺 The angles of every triangle add up to <b>180°</b>; those of every quadrilateral to <b>360°</b>. Triangles by sides: <b>equilateral</b> (3 equal), <b>isosceles</b> (2 equal), <b>scalene</b> (all different). By angles: <b>acute</b>, <b>right-angled</b>, <b>obtuse</b>.</p>',
        '<p>🔺 La somma degli angoli di ogni triangolo è <b>180°</b>; di ogni quadrilatero <b>360°</b>. Triangoli secondo i lati: <b>equilatero</b> (3 uguali), <b>isoscele</b> (2 uguali), <b>scaleno</b> (tutti diversi). Secondo gli angoli: <b>acutangolo</b>, <b>rettangolo</b>, <b>ottusangolo</b>.</p>'
      ],
      [
        '<p>▱ Quadrilaterals: <b>trapezium</b> (one pair of parallel sides); <b>parallelogram</b> (two pairs). Special parallelograms: <b>rhomboid</b> (the general one), <b>rectangle</b> (4 right angles), <b>rhombus</b> (4 equal sides) and <b>square</b> (both!). A square is a special rectangle and also a special rhombus.</p>',
        '<p>▱ Quadrilateri: <b>trapezio</b> (una coppia di lati paralleli); <b>parallelogramma</b> (due coppie). Parallelogrammi particolari: <b>romboide</b> (quello generico), <b>rettangolo</b> (4 angoli retti), <b>rombo</b> (4 lati uguali) e <b>quadrato</b> (tutte e due le cose!). Il quadrato è un rettangolo particolare e anche un rombo particolare.</p>'
      ]
    ],
    quiz: [
      q('Two angles of a triangle measure 50° and 60°. How much is the third?', 'Due angoli di un triangolo misurano 50° e 60°. Quanto misura il terzo?', [['70°', '70°'], ['90°', '90°'], ['110°', '110°'], ['250°', '250°']], ['180° − (50° + 60°) = 70°.', '180° − (50° + 60°) = 70°.']),
      q('A triangle with exactly two equal sides is…', 'Un triangolo con esattamente due lati uguali è…', [['Isosceles', 'Isoscele'], ['Equilateral', 'Equilatero'], ['Scalene', 'Scaleno'], ['Right-angled', 'Rettangolo']], ['Isosceles = two equal sides.', 'Isoscele = due lati uguali.']),
      q('Which quadrilateral has only one pair of parallel sides?', 'Quale quadrilatero ha una sola coppia di lati paralleli?', [['The trapezium', 'Il trapezio'], ['The rectangle', 'Il rettangolo'], ['The rhombus', 'Il rombo'], ['The square', 'Il quadrato']], ['The others are parallelograms with two pairs.', 'Gli altri sono parallelogrammi con due coppie.']),
      q('What is the sum of the angles of any quadrilateral?', 'Qual è la somma degli angoli di un qualsiasi quadrilatero?', [['360°', '360°'], ['180°', '180°'], ['90°', '90°'], ['540°', '540°']], ['A diagonal splits it into two triangles: 2 × 180° = 360°.', 'Una diagonale lo divide in due triangoli: 2 × 180° = 360°.'])
    ]
  }, geometryTaunt),
  makeG5MathMission({
    id: 'g5m-rectangle-square', sec: '5.6', pages: '132–133', hue: 235,
    title: ['Perimeter and Area: Rectangle and Square', 'Perimetro e area: rettangolo e quadrato'],
    topic: ['Perimeter vs area, formulas and inverse formulas; same perimeter or same area', 'Perimetro e area, formule dirette e inverse; figure isoperimetriche ed equiestese'],
    demon: ['The Border Bender', 'il Piega-Bordi'],
    tech: ['Space Form · Sixth Technique: Inside and Around', 'Stile dello Spazio · Sesta Tecnica: Dentro e Intorno'],
    lessons: [
      { vis: 'g5m-area-formulas', text: [
        '<p>📏 The <b>perimeter</b> is the length of the border (in cm, m…). The <b>area</b> is the size of the surface inside (in cm², m²…). Rectangle: <b>P = (b + h) × 2</b>, <b>A = b × h</b>. Square: <b>P = l × 4</b>, <b>A = l × l</b>.</p>',
        '<p>📏 Il <b>perimetro</b> è la lunghezza del contorno (in cm, m…). L’<b>area</b> è l’estensione della superficie interna (in cm², m²…). Rettangolo: <b>P = (b + h) × 2</b>, <b>A = b × h</b>. Quadrato: <b>P = l × 4</b>, <b>A = l × l</b>.</p>'
      ] },
      [
        '<p>🔁 <b>Inverse formulas</b> find a missing measure: rectangle with A = 48 cm² and b = 8 cm → h = A ÷ b = <b>6 cm</b>. Square with P = 36 cm → l = P ÷ 4 = <b>9 cm</b>, so A = 81 cm².</p>',
        '<p>🔁 Le <b>formule inverse</b> servono a trovare una misura mancante: rettangolo con A = 48 cm² e b = 8 cm → h = A : b = <b>6 cm</b>. Quadrato con P = 36 cm → l = P : 4 = <b>9 cm</b>, quindi A = 81 cm².</p>'
      ],
      [
        '<p>🤔 Same perimeter does not mean same area! A 6 × 2 rectangle and a 4 × 4 square both have P = 16 cm (<b>isoperimetric</b>), but areas of 12 cm² and 16 cm². Figures with the same area are <b>equi-extended</b> (equiestese).</p>',
        '<p>🤔 Stesso perimetro non significa stessa area! Un rettangolo 6 × 2 e un quadrato 4 × 4 hanno entrambi P = 16 cm (<b>isoperimetrici</b>), ma aree di 12 cm² e 16 cm². Le figure con la stessa area si dicono <b>equiestese</b>.</p>'
      ]
    ],
    quiz: [
      q('A rectangle is 8 cm by 5 cm. What is its area?', 'Un rettangolo misura 8 cm per 5 cm. Qual è la sua area?', [['40 cm²', '40 cm²'], ['26 cm²', '26 cm²'], ['13 cm²', '13 cm²'], ['40 cm', '40 cm']], ['A = b × h = 8 × 5.', 'A = b × h = 8 × 5.']),
      q('The same 8 cm by 5 cm rectangle: what is its perimeter?', 'Lo stesso rettangolo di 8 cm per 5 cm: qual è il perimetro?', [['26 cm', '26 cm'], ['40 cm', '40 cm'], ['13 cm', '13 cm'], ['26 cm²', '26 cm²']], ['(8 + 5) × 2 = 26.', '(8 + 5) × 2 = 26.']),
      q('A square has a perimeter of 36 cm. What is its area?', 'Un quadrato ha il perimetro di 36 cm. Qual è la sua area?', [['81 cm²', '81 cm²'], ['36 cm²', '36 cm²'], ['144 cm²', '144 cm²'], ['9 cm²', '9 cm²']], ['l = 36 ÷ 4 = 9; A = 9 × 9 = 81.', 'l = 36 : 4 = 9; A = 9 × 9 = 81.']),
      q('A rectangle has A = 48 cm² and b = 8 cm. What is h?', 'Un rettangolo ha A = 48 cm² e b = 8 cm. Quanto misura h?', [['6 cm', '6 cm'], ['40 cm', '40 cm'], ['56 cm', '56 cm'], ['16 cm', '16 cm']], ['h = A ÷ b = 48 ÷ 8.', 'h = A : b = 48 : 8.'])
    ]
  }, geometryTaunt),
  makeG5MathMission({
    id: 'g5m-rhomboid-rhombus', sec: '5.7', pages: '134', hue: 250,
    title: ['Rhomboid and Rhombus', 'Romboide e rombo'],
    topic: ['Perimeter and area of the rhomboid (parallelogram) and of the rhombus', 'Perimetro e area del romboide (parallelogramma) e del rombo'],
    demon: ['The Slanted Shadow', 'l’Ombra Inclinata'],
    tech: ['Space Form · Seventh Technique: Slant Slice', 'Stile dello Spazio · Settima Tecnica: Taglio Obliquo'],
    lessons: [
      [
        '<p>▱ Cut a triangle off one end of a <b>rhomboid</b> and move it to the other end: you get a rectangle with the same base and height! So <b>A = b × h</b>, where h is the height (perpendicular), not the slanted side. <b>P = (b + side) × 2</b>.</p>',
        '<p>▱ Taglia un triangolo da un’estremità del <b>romboide</b> e spostalo dall’altra parte: ottieni un rettangolo con la stessa base e la stessa altezza! Quindi <b>A = b × h</b>, dove h è l’altezza (perpendicolare), non il lato obliquo. <b>P = (b + lato) × 2</b>.</p>'
      ],
      [
        '<p>◇ A <b>rhombus</b> has 4 equal sides and perpendicular diagonals: the <b>major diagonal D</b> and the <b>minor diagonal d</b>. It is half of the rectangle built on its diagonals: <b>A = D × d ÷ 2</b>. <b>P = l × 4</b>.</p>',
        '<p>◇ Il <b>rombo</b> ha 4 lati uguali e le diagonali perpendicolari: la <b>diagonale maggiore D</b> e la <b>diagonale minore d</b>. È la metà del rettangolo costruito sulle sue diagonali: <b>A = D × d : 2</b>. <b>P = l × 4</b>.</p>'
      ],
      [
        '<p>🧮 Examples: rhomboid with b = 10 cm and h = 6 cm → A = 60 cm². Rhombus with D = 12 cm and d = 8 cm → A = 12 × 8 ÷ 2 = <b>48 cm²</b>; if its side is 7.2 cm, P = 28.8 cm.</p>',
        '<p>🧮 Esempi: romboide con b = 10 cm e h = 6 cm → A = 60 cm². Rombo con D = 12 cm e d = 8 cm → A = 12 × 8 : 2 = <b>48 cm²</b>; se il lato misura 7,2 cm, P = 28,8 cm.</p>'
      ]
    ],
    quiz: [
      q('A rhombus has D = 12 cm and d = 8 cm. What is its area?', 'Un rombo ha D = 12 cm e d = 8 cm. Qual è la sua area?', [['48 cm²', '48 cm²'], ['96 cm²', '96 cm²'], ['20 cm²', '20 cm²'], ['40 cm²', '40 cm²']], ['12 × 8 ÷ 2 = 48.', '12 × 8 : 2 = 48.']),
      q('A rhomboid has b = 10 cm, h = 6 cm and slanted side 7 cm. What is its area?', 'Un romboide ha b = 10 cm, h = 6 cm e lato obliquo 7 cm. Qual è la sua area?', [['60 cm²', '60 cm²'], ['70 cm²', '70 cm²'], ['34 cm²', '34 cm²'], ['30 cm²', '30 cm²']], ['A = b × h; the slanted side is not used.', 'A = b × h; il lato obliquo non serve.']),
      q('Same rhomboid (b = 10 cm, side 7 cm): what is its perimeter?', 'Stesso romboide (b = 10 cm, lato 7 cm): qual è il perimetro?', [['34 cm', '34 cm'], ['60 cm', '60 cm'], ['17 cm', '17 cm'], ['32 cm', '32 cm']], ['(10 + 7) × 2 = 34.', '(10 + 7) × 2 = 34.']),
      q('A rhombus has a 5 cm side. What is its perimeter?', 'Un rombo ha il lato di 5 cm. Qual è il perimetro?', [['20 cm', '20 cm'], ['25 cm', '25 cm'], ['10 cm', '10 cm'], ['15 cm', '15 cm']], ['5 × 4 = 20.', '5 × 4 = 20.'])
    ]
  }, geometryTaunt),
  makeG5MathMission({
    id: 'g5m-trapezium', sec: '5.8', pages: '135', hue: 265,
    title: ['The Trapezium', 'Il trapezio'],
    topic: ['Types of trapezium, perimeter and area', 'Tipi di trapezio, perimetro e area'],
    demon: ['The Uneven Bridge', 'il Ponte Sbilenco'],
    tech: ['Space Form · Eighth Technique: Twin Bases', 'Stile dello Spazio · Ottava Tecnica: Basi Gemelle'],
    lessons: [
      [
        '<p>⏢ A <b>trapezium</b> has two parallel sides called <b>bases</b> (major B and minor b). It can be <b>scalene</b>, <b>isosceles</b> (equal oblique sides) or <b>right-angled</b> (one side perpendicular to the bases). Its perimeter is the sum of the four sides.</p>',
        '<p>⏢ Il <b>trapezio</b> ha due lati paralleli chiamati <b>basi</b> (maggiore B e minore b). Può essere <b>scaleno</b>, <b>isoscele</b> (lati obliqui uguali) o <b>rettangolo</b> (un lato perpendicolare alle basi). Il perimetro è la somma dei quattro lati.</p>'
      ],
      [
        '<p>🔄 Put two equal trapeziums side by side, one upside down: you get a rhomboid with base <b>B + b</b> and the same height. So one trapezium is half of it: <b>A = (B + b) × h ÷ 2</b>.</p>',
        '<p>🔄 Accosta due trapezi uguali, uno capovolto: ottieni un romboide con base <b>B + b</b> e la stessa altezza. Quindi un trapezio ne è la metà: <b>A = (B + b) × h : 2</b>.</p>'
      ],
      [
        '<p>🧮 Example: B = 14 cm, b = 8 cm, h = 5 cm → A = (14 + 8) × 5 ÷ 2 = 22 × 5 ÷ 2 = <b>55 cm²</b>. An isosceles trapezium with B = 14, b = 8 and oblique sides of 5 cm has P = 14 + 8 + 5 + 5 = 32 cm.</p>',
        '<p>🧮 Esempio: B = 14 cm, b = 8 cm, h = 5 cm → A = (14 + 8) × 5 : 2 = 22 × 5 : 2 = <b>55 cm²</b>. Un trapezio isoscele con B = 14, b = 8 e lati obliqui di 5 cm ha P = 14 + 8 + 5 + 5 = 32 cm.</p>'
      ]
    ],
    quiz: [
      q('B = 14 cm, b = 8 cm, h = 5 cm. What is the trapezium’s area?', 'B = 14 cm, b = 8 cm, h = 5 cm. Qual è l’area del trapezio?', [['55 cm²', '55 cm²'], ['110 cm²', '110 cm²'], ['27 cm²', '27 cm²'], ['560 cm²', '560 cm²']], ['(14 + 8) × 5 ÷ 2 = 55.', '(14 + 8) × 5 : 2 = 55.']),
      q('Which trapezium has two equal oblique sides?', 'Quale trapezio ha i due lati obliqui uguali?', [['Isosceles', 'Isoscele'], ['Right-angled', 'Rettangolo'], ['Scalene', 'Scaleno'], ['Equilateral', 'Equilatero']], ['Isosceles means two equal sides.', 'Isoscele significa due lati uguali.']),
      q('An isosceles trapezium: B = 14 cm, b = 8 cm, oblique sides 5 cm. Perimeter?', 'Trapezio isoscele: B = 14 cm, b = 8 cm, lati obliqui 5 cm. Perimetro?', [['32 cm', '32 cm'], ['27 cm', '27 cm'], ['22 cm', '22 cm'], ['37 cm', '37 cm']], ['14 + 8 + 5 + 5 = 32.', '14 + 8 + 5 + 5 = 32.']),
      q('Which formula gives the area of a trapezium?', 'Quale formula dà l’area del trapezio?', [['(B + b) × h ÷ 2', '(B + b) × h : 2'], ['B × b ÷ 2', 'B × b : 2'], ['(B + b) × 2', '(B + b) × 2'], ['B × h', 'B × h']], ['It is half of a rhomboid with base B + b.', 'È la metà di un romboide con base B + b.'])
    ]
  }, geometryTaunt),
  makeG5MathMission({
    id: 'g5m-triangle', sec: '5.9', pages: '136', hue: 280,
    title: ['The Triangle', 'Il triangolo'],
    topic: ['Base and height, perimeter and area of a triangle', 'Base e altezza, perimetro e area del triangolo'],
    demon: ['The Three-Horned Trickster', 'il Tricorno Ingannatore'],
    tech: ['Space Form · Ninth Technique: Half the Box', 'Stile dello Spazio · Nona Tecnica: Mezza Scatola'],
    lessons: [
      [
        '<p>🔺 Any side of a triangle can be the <b>base</b>; the <b>height</b> is the perpendicular segment from the opposite vertex to the base (or its extension). Every triangle has three heights.</p>',
        '<p>🔺 Qualsiasi lato del triangolo può essere la <b>base</b>; l’<b>altezza</b> è il segmento perpendicolare condotto dal vertice opposto alla base (o al suo prolungamento). Ogni triangolo ha tre altezze.</p>'
      ],
      [
        '<p>📐 Two equal triangles together form a parallelogram with the same base and height, so the triangle is half: <b>A = b × h ÷ 2</b>. Perimeter: add the three sides; for an equilateral triangle, <b>P = l × 3</b>.</p>',
        '<p>📐 Due triangoli uguali formano insieme un parallelogramma con la stessa base e la stessa altezza, quindi il triangolo ne è la metà: <b>A = b × h : 2</b>. Perimetro: somma dei tre lati; nel triangolo equilatero <b>P = l × 3</b>.</p>'
      ],
      [
        '<p>🧮 Example: b = 10 cm, h = 7 cm → A = 10 × 7 ÷ 2 = <b>35 cm²</b>. Inverse: if A = 24 cm² and b = 8 cm, then h = A × 2 ÷ b = <b>6 cm</b>. In a right-angled triangle the two sides of the right angle (legs) are base and height.</p>',
        '<p>🧮 Esempio: b = 10 cm, h = 7 cm → A = 10 × 7 : 2 = <b>35 cm²</b>. Formula inversa: se A = 24 cm² e b = 8 cm, allora h = A × 2 : b = <b>6 cm</b>. Nel triangolo rettangolo i due lati dell’angolo retto (cateti) sono base e altezza.</p>'
      ]
    ],
    quiz: [
      q('A triangle has b = 10 cm and h = 7 cm. What is its area?', 'Un triangolo ha b = 10 cm e h = 7 cm. Qual è la sua area?', [['35 cm²', '35 cm²'], ['70 cm²', '70 cm²'], ['17 cm²', '17 cm²'], ['34 cm²', '34 cm²']], ['10 × 7 ÷ 2 = 35.', '10 × 7 : 2 = 35.']),
      q('A triangle has A = 24 cm² and b = 8 cm. What is h?', 'Un triangolo ha A = 24 cm² e b = 8 cm. Quanto misura h?', [['6 cm', '6 cm'], ['3 cm', '3 cm'], ['16 cm', '16 cm'], ['192 cm', '192 cm']], ['h = 24 × 2 ÷ 8 = 6.', 'h = 24 × 2 : 8 = 6.']),
      q('An equilateral triangle has a 9 cm side. What is its perimeter?', 'Un triangolo equilatero ha il lato di 9 cm. Qual è il perimetro?', [['27 cm', '27 cm'], ['18 cm', '18 cm'], ['81 cm', '81 cm'], ['36 cm', '36 cm']], ['9 × 3 = 27.', '9 × 3 = 27.']),
      q('A right-angled triangle has legs of 6 cm and 8 cm. What is its area?', 'Un triangolo rettangolo ha i cateti di 6 cm e 8 cm. Qual è la sua area?', [['24 cm²', '24 cm²'], ['48 cm²', '48 cm²'], ['14 cm²', '14 cm²'], ['28 cm²', '28 cm²']], ['The legs are base and height: 6 × 8 ÷ 2 = 24.', 'I cateti sono base e altezza: 6 × 8 : 2 = 24.'])
    ]
  }, geometryTaunt),
  makeG5MathMission({
    id: 'g5m-complex-polygons', sec: '5.10', pages: '137, 142', hue: 295,
    title: ['Complex Polygons and Floor Plans', 'Poligoni complessi e planimetrie'],
    topic: ['Area by decomposition and subtraction; STEM: reading floor plans in scale', 'Area per scomposizione e per differenza; STEM: leggere le planimetrie in scala'],
    demon: ['The Jigsaw Jinn', 'il Genio del Puzzle'],
    tech: ['Space Form · Tenth Technique: Cut and Join', 'Stile dello Spazio · Decima Tecnica: Taglia e Unisci'],
    lessons: [
      [
        '<p>🧩 A <b>complex polygon</b> can be split into simpler shapes (rectangles, triangles, trapeziums). Its area is the <b>sum</b> of their areas. An L-shaped room made of a 6 m × 4 m rectangle and a 3 m × 2 m rectangle has A = 24 + 6 = <b>30 m²</b>.</p>',
        '<p>🧩 Un <b>poligono complesso</b> si può scomporre in figure più semplici (rettangoli, triangoli, trapezi). La sua area è la <b>somma</b> delle loro aree. Una stanza a forma di L formata da un rettangolo di 6 m × 4 m e uno di 3 m × 2 m ha A = 24 + 6 = <b>30 m²</b>.</p>'
      ],
      [
        '<p>➖ Sometimes it is easier to <b>subtract</b>: a 10 m × 8 m garden with a 2 m × 2 m pond has a lawn of 80 − 4 = <b>76 m²</b>. The perimeter of a complex polygon is still the length of its whole outline.</p>',
        '<p>➖ A volte conviene <b>sottrarre</b>: un giardino di 10 m × 8 m con una vasca di 2 m × 2 m ha un prato di 80 − 4 = <b>76 m²</b>. Il perimetro di un poligono complesso è sempre la lunghezza di tutto il contorno.</p>'
      ],
      [
        '<p>🏠 <b>STEM – floor plans</b> (planimetrie) are drawings of a home seen from above, in scale. On a 1 : 100 plan, a bedroom of 4 cm × 3 cm is 4 m × 3 m in reality, so its floor area is <b>12 m²</b>. Architects use plans to calculate tiles, paint and furniture space.</p>',
        '<p>🏠 <b>STEM – le planimetrie</b> sono disegni di una casa vista dall’alto, in scala. Su una pianta in scala 1 : 100 una camera di 4 cm × 3 cm misura in realtà 4 m × 3 m, quindi il pavimento ha un’area di <b>12 m²</b>. Gli architetti usano le planimetrie per calcolare piastrelle, vernice e spazio per i mobili.</p>'
      ]
    ],
    quiz: [
      q('An L-shape is made of a 6 m × 4 m and a 3 m × 2 m rectangle. What is its area?', 'Una figura a L è formata da un rettangolo di 6 m × 4 m e uno di 3 m × 2 m. Qual è la sua area?', [['30 m²', '30 m²'], ['24 m²', '24 m²'], ['15 m²', '15 m²'], ['36 m²', '36 m²']], ['24 + 6 = 30.', '24 + 6 = 30.']),
      q('A 10 m × 8 m garden has a 2 m × 2 m pond. What is the lawn area?', 'Un giardino di 10 m × 8 m ha una vasca di 2 m × 2 m. Qual è l’area del prato?', [['76 m²', '76 m²'], ['80 m²', '80 m²'], ['84 m²', '84 m²'], ['72 m²', '72 m²']], ['80 − 4 = 76.', '80 − 4 = 76.']),
      q('On a 1 : 100 plan, a room is 4 cm × 3 cm. What is its real area?', 'Su una pianta in scala 1 : 100 una camera misura 4 cm × 3 cm. Qual è la sua area reale?', [['12 m²', '12 m²'], ['12 cm²', '12 cm²'], ['120 m²', '120 m²'], ['1 200 m²', '1 200 m²']], ['4 m × 3 m = 12 m².', '4 m × 3 m = 12 m².']),
      q('How do you find the area of a complex polygon?', 'Come si trova l’area di un poligono complesso?', [['Split it into simple shapes and add (or subtract) their areas', 'Lo si scompone in figure semplici e si sommano (o sottraggono) le loro aree'], ['Multiply all its sides', 'Si moltiplicano tutti i lati'], ['Add all its sides', 'Si sommano tutti i lati'], ['It is impossible', 'È impossibile']], ['Decomposition is the key strategy.', 'La scomposizione è la strategia chiave.'])
    ]
  }, geometryTaunt),
  makeG5MathMission({
    id: 'g5m-regular-polygons', sec: '5.11', pages: '143–145', hue: 310,
    title: ['Regular Polygons and the Apothem', 'Poligoni regolari e apotema'],
    topic: ['Regular polygons, the apothem, the fixed number and the area formula', 'Poligoni regolari, apotema, numero fisso e formula dell’area'],
    demon: ['The Hexagon Hex', 'l’Incantesimo Esagonale'],
    tech: ['Space Form · Eleventh Technique: Centre Line', 'Stile dello Spazio · Undicesima Tecnica: Raggio Centrale'],
    lessons: [
      { vis: 'g5m-regular-polygon', text: [
        '<p>⬡ A polygon is <b>regular</b> when all its sides are equal <b>and</b> all its angles are equal: the equilateral triangle, the square, the regular pentagon, hexagon… A rhombus is not regular (its angles can differ), and neither is a rectangle (its sides can differ).</p>',
        '<p>⬡ Un poligono è <b>regolare</b> quando ha tutti i lati uguali <b>e</b> tutti gli angoli uguali: il triangolo equilatero, il quadrato, il pentagono regolare, l’esagono regolare… Il rombo non è regolare (gli angoli possono essere diversi) e nemmeno il rettangolo (i lati possono essere diversi).</p>'
      ] },
      [
        '<p>📏 The <b>apothem (a)</b> is the segment from the centre perpendicular to a side. For each kind of regular polygon, <b>a = side × fixed number</b>: about 0.289 for the triangle, 0.5 for the square, 0.688 for the pentagon, 0.866 for the hexagon. These fixed numbers are rounded.</p>',
        '<p>📏 L’<b>apotema (a)</b> è il segmento che va dal centro al lato, perpendicolare al lato. Per ogni tipo di poligono regolare <b>a = lato × numero fisso</b>: circa 0,289 per il triangolo, 0,5 per il quadrato, 0,688 per il pentagono, 0,866 per l’esagono. I numeri fissi sono valori arrotondati.</p>'
      ],
      [
        '<p>🧮 A regular polygon is made of equal triangles with height = apothem, so <b>A = P × a ÷ 2</b>. Pentagon with side 10 cm: P = 50 cm, a = 10 × 0.688 = 6.88 cm, A = 50 × 6.88 ÷ 2 = <b>172 cm²</b>.</p>',
        '<p>🧮 Un poligono regolare è formato da triangoli uguali con altezza uguale all’apotema, quindi <b>A = P × a : 2</b>. Pentagono con lato di 10 cm: P = 50 cm, a = 10 × 0,688 = 6,88 cm, A = 50 × 6,88 : 2 = <b>172 cm²</b>.</p>'
      ]
    ],
    quiz: [
      q('Regular pentagon: P = 50 cm, a = 6.88 cm. What is its area?', 'Pentagono regolare: P = 50 cm, a = 6,88 cm. Qual è la sua area?', [['172 cm²', '172 cm²'], ['344 cm²', '344 cm²'], ['56.88 cm²', '56,88 cm²'], ['86 cm²', '86 cm²']], ['50 × 6.88 ÷ 2 = 172.', '50 × 6,88 : 2 = 172.']),
      q('Which polygon is regular?', 'Quale poligono è regolare?', [['A square', 'Il quadrato'], ['A rectangle 5 × 3', 'Un rettangolo 5 × 3'], ['A scalene triangle', 'Un triangolo scaleno'], ['A trapezium', 'Un trapezio']], ['All sides and all angles of a square are equal.', 'Il quadrato ha tutti i lati e tutti gli angoli uguali.']),
      q('A regular hexagon has a 10 cm side (fixed number 0.866). What is its apothem?', 'Un esagono regolare ha il lato di 10 cm (numero fisso 0,866). Quanto misura l’apotema?', [['8.66 cm', '8,66 cm'], ['86.6 cm', '86,6 cm'], ['0.866 cm', '0,866 cm'], ['60 cm', '60 cm']], ['a = 10 × 0.866 = 8.66.', 'a = 10 × 0,866 = 8,66.']),
      q('What is the apothem?', 'Che cos’è l’apotema?', [['The segment from the centre perpendicular to a side', 'Il segmento dal centro perpendicolare a un lato'], ['A diagonal', 'Una diagonale'], ['Half the perimeter', 'Metà del perimetro'], ['The longest side', 'Il lato più lungo']], ['It plays the role of the height of each inner triangle.', 'Fa da altezza a ciascuno dei triangoli interni.'])
    ]
  }, geometryTaunt),
  makeG5MathMission({
    id: 'g5m-circle', sec: '5.12', pages: '146–147', hue: 325,
    title: ['The Circle and the Circumference', 'Il cerchio e la circonferenza'],
    topic: ['Centre, radius, diameter, chord, arc and sector', 'Centro, raggio, diametro, corda, arco e settore circolare'],
    demon: ['The Wobbly Wheel', 'la Ruota Traballante'],
    tech: ['Space Form · Twelfth Technique: Perfect Round', 'Stile dello Spazio · Dodicesima Tecnica: Tondo Perfetto'],
    lessons: [
      { vis: 'g5m-circle', text: [
        '<p>⭕ The <b>circumference</b> is a closed curved line whose points are all at the same distance from the <b>centre</b>. The <b>circle</b> is the part of the plane inside it. Draw them with a <b>compass</b>.</p>',
        '<p>⭕ La <b>circonferenza</b> è una linea curva chiusa i cui punti sono tutti alla stessa distanza dal <b>centro</b>. Il <b>cerchio</b> è la parte di piano racchiusa dalla circonferenza. Si disegnano con il <b>compasso</b>.</p>'
      ] },
      [
        '<p>📏 Elements: the <b>radius (r)</b> joins the centre to the circumference; the <b>diameter (d)</b> passes through the centre and is twice the radius: <b>d = r × 2</b>. A <b>chord</b> joins two points of the circumference; the diameter is the longest chord.</p>',
        '<p>📏 Elementi: il <b>raggio (r)</b> unisce il centro a un punto della circonferenza; il <b>diametro (d)</b> passa per il centro ed è il doppio del raggio: <b>d = r × 2</b>. La <b>corda</b> unisce due punti della circonferenza; il diametro è la corda più lunga.</p>'
      ],
      [
        '<p>🍕 An <b>arc</b> is a piece of the circumference. A <b>sector</b> is a slice of the circle between two radii, like a pizza slice. A diameter cuts the circle into two <b>semicircles</b>.</p>',
        '<p>🍕 L’<b>arco</b> è una parte di circonferenza. Il <b>settore circolare</b> è la parte di cerchio compresa tra due raggi, come una fetta di pizza. Un diametro divide il cerchio in due <b>semicerchi</b>.</p>'
      ]
    ],
    quiz: [
      q('The radius is 7 cm. How long is the diameter?', 'Il raggio misura 7 cm. Quanto misura il diametro?', [['14 cm', '14 cm'], ['3.5 cm', '3,5 cm'], ['7 cm', '7 cm'], ['21 cm', '21 cm']], ['d = r × 2.', 'd = r × 2.']),
      q('What is the longest chord of a circle?', 'Qual è la corda più lunga di una circonferenza?', [['The diameter', 'Il diametro'], ['The radius', 'Il raggio'], ['An arc', 'Un arco'], ['A sector', 'Un settore']], ['The diameter passes through the centre.', 'Il diametro passa per il centro.']),
      q('A slice of the circle between two radii is a…', 'La parte di cerchio compresa tra due raggi è un…', [['Sector', 'Settore circolare'], ['Chord', 'Corda'], ['Diameter', 'Diametro'], ['Vertex', 'Vertice']], ['Like a slice of pizza.', 'Come una fetta di pizza.']),
      q('Which tool draws a circumference?', 'Quale strumento disegna una circonferenza?', [['The compass', 'Il compasso'], ['The protractor', 'Il goniometro'], ['The set square', 'La squadra'], ['The ruler only', 'Solo il righello']], ['The compass keeps the same distance from the centre.', 'Il compasso mantiene la stessa distanza dal centro.'])
    ]
  }, geometryTaunt),
  makeG5MathMission({
    id: 'g5m-circumference-pi', sec: '5.13', pages: '148, 153', hue: 340,
    title: ['Measuring the Circumference and the Story of Pi', 'Misurare la circonferenza e la storia del pi greco'],
    topic: ['STEM: discovering π with string and cans; C = d × π; Maths on the Road: the history of π', 'STEM: scoprire π con spago e barattoli; C = d × π; Mate in viaggio: la storia del pi greco'],
    demon: ['The Endless Digit', 'la Cifra Infinita'],
    tech: ['Space Form · Thirteenth Technique: Pi Spiral', 'Stile dello Spazio · Tredicesima Tecnica: Spirale del Pi Greco'],
    lessons: [
      [
        '<p>🥫 <b>STEM experiment</b>: wrap a string around a can, measure it, then divide by the can’s diameter. Try with a plate and a coin: the result is always <b>a little more than 3</b>. This special number is called <b>π (pi)</b> ≈ <b>3.14</b>.</p>',
        '<p>🥫 <b>Esperimento STEM</b>: avvolgi uno spago intorno a un barattolo, misuralo e dividi per il diametro del barattolo. Prova con un piatto e una moneta: il risultato è sempre <b>poco più di 3</b>. Questo numero speciale si chiama <b>π (pi greco)</b> ≈ <b>3,14</b>.</p>'
      ],
      [
        '<p>📐 So the length of the circumference is <b>C = d × π</b> (or C = r × 2 × π). A wheel with d = 50 cm has C = 50 × 3.14 = <b>157 cm</b>. Inverse formula: d = C ÷ π → C = 31.4 cm gives d = 10 cm.</p>',
        '<p>📐 Quindi la lunghezza della circonferenza è <b>C = d × π</b> (oppure C = r × 2 × π). Una ruota con d = 50 cm ha C = 50 × 3,14 = <b>157 cm</b>. Formula inversa: d = C : π → C = 31,4 cm dà d = 10 cm.</p>'
      ],
      [
        '<p>📜 <b>Maths on the Road – the story of π</b>: ancient peoples already knew that the ratio was about 3. The Greek scientist <b>Archimedes</b> estimated π very precisely by drawing polygons with many sides inside and outside a circle. π has infinitely many decimal digits that never repeat in a pattern: 3.14159…</p>',
        '<p>📜 <b>Mate in viaggio – la storia del pi greco</b>: già i popoli antichi sapevano che il rapporto valeva circa 3. Lo scienziato greco <b>Archimede</b> stimò π con grande precisione disegnando poligoni con moltissimi lati dentro e fuori da un cerchio. π ha infinite cifre decimali che non si ripetono secondo uno schema: 3,14159…</p>'
      ]
    ],
    quiz: [
      q('A wheel has a diameter of 50 cm. How long is its circumference? (π = 3.14)', 'Una ruota ha il diametro di 50 cm. Quanto è lunga la circonferenza? (π = 3,14)', [['157 cm', '157 cm'], ['78.5 cm', '78,5 cm'], ['314 cm', '314 cm'], ['53.14 cm', '53,14 cm']], ['50 × 3.14 = 157.', '50 × 3,14 = 157.']),
      q('C = 31.4 cm. What is the diameter? (π = 3.14)', 'C = 31,4 cm. Quanto misura il diametro? (π = 3,14)', [['10 cm', '10 cm'], ['5 cm', '5 cm'], ['98.6 cm', '98,6 cm'], ['28.26 cm', '28,26 cm']], ['d = C ÷ π = 31.4 ÷ 3.14.', 'd = C : π = 31,4 : 3,14.']),
      q('A circle has r = 4 cm. What is its circumference? (π = 3.14)', 'Una circonferenza ha r = 4 cm. Quanto è lunga? (π = 3,14)', [['25.12 cm', '25,12 cm'], ['12.56 cm', '12,56 cm'], ['50.24 cm', '50,24 cm'], ['16 cm', '16 cm']], ['C = 4 × 2 × 3.14 = 25.12.', 'C = 4 × 2 × 3,14 = 25,12.']),
      q('Circumference ÷ diameter is always about…', 'Circonferenza : diametro vale sempre circa…', [['3.14', '3,14'], ['2', '2'], ['10', '10'], ['1.5', '1,5']], ['This ratio is the number π.', 'Questo rapporto è il numero π.'])
    ]
  }, geometryTaunt),
  makeG5MathMission({
    id: 'g5m-circle-area', sec: '5.14', pages: '149', hue: 355,
    title: ['The Area of the Circle', 'L’area del cerchio'],
    topic: ['A = r × r × π and solving problems with circles', 'A = r × r × π e problemi con il cerchio'],
    demon: ['The Pizza Pirate', 'il Pirata della Pizza'],
    tech: ['Space Form · Fourteenth Technique: Full Disc', 'Stile dello Spazio · Quattordicesima Tecnica: Disco Pieno'],
    lessons: [
      [
        '<p>🍕 Cut a circle into many thin sectors and arrange them alternately: they form almost a <b>rectangle</b> with base = half the circumference (r × π) and height = r. So the area of the circle is <b>A = r × r × π</b>.</p>',
        '<p>🍕 Taglia un cerchio in tanti settori sottili e disponili alternati: formano quasi un <b>rettangolo</b> con base = metà circonferenza (r × π) e altezza = r. Quindi l’area del cerchio è <b>A = r × r × π</b>.</p>'
      ],
      [
        '<p>🧮 Examples (π = 3.14): r = 5 cm → A = 5 × 5 × 3.14 = <b>78.5 cm²</b>. r = 10 cm → A = <b>314 cm²</b>. Careful: if you know the <b>diameter</b>, halve it first! d = 6 cm → r = 3 cm → A = 3 × 3 × 3.14 = <b>28.26 cm²</b>.</p>',
        '<p>🧮 Esempi (π = 3,14): r = 5 cm → A = 5 × 5 × 3,14 = <b>78,5 cm²</b>. r = 10 cm → A = <b>314 cm²</b>. Attenzione: se conosci il <b>diametro</b>, dimezzalo prima! d = 6 cm → r = 3 cm → A = 3 × 3 × 3,14 = <b>28,26 cm²</b>.</p>'
      ],
      [
        '<p>🧠 Don’t mix them up: the <b>circumference</b> is a length (cm), the <b>area</b> is a surface (cm²). A round table with r = 0.5 m has an area of 0.5 × 0.5 × 3.14 = <b>0.785 m²</b>.</p>',
        '<p>🧠 Non confonderle: la <b>circonferenza</b> è una lunghezza (cm), l’<b>area</b> è una superficie (cm²). Un tavolo rotondo con r = 0,5 m ha un’area di 0,5 × 0,5 × 3,14 = <b>0,785 m²</b>.</p>'
      ]
    ],
    quiz: [
      q('A circle has r = 5 cm. What is its area? (π = 3.14)', 'Un cerchio ha r = 5 cm. Qual è la sua area? (π = 3,14)', [['78.5 cm²', '78,5 cm²'], ['31.4 cm²', '31,4 cm²'], ['15.7 cm²', '15,7 cm²'], ['314 cm²', '314 cm²']], ['5 × 5 × 3.14 = 78.5.', '5 × 5 × 3,14 = 78,5.']),
      q('A circle has d = 6 cm. What is its area? (π = 3.14)', 'Un cerchio ha d = 6 cm. Qual è la sua area? (π = 3,14)', [['28.26 cm²', '28,26 cm²'], ['113.04 cm²', '113,04 cm²'], ['18.84 cm²', '18,84 cm²'], ['9.42 cm²', '9,42 cm²']], ['r = 3; 3 × 3 × 3.14 = 28.26.', 'r = 3; 3 × 3 × 3,14 = 28,26.']),
      q('Which unit is right for the area of a circle?', 'Quale unità è adatta per l’area di un cerchio?', [['cm²', 'cm²'], ['cm', 'cm'], ['cm³', 'cm³'], ['°', '°']], ['Area is a surface measure.', 'L’area è una misura di superficie.']),
      q('Which formula gives the area of a circle?', 'Quale formula dà l’area del cerchio?', [['r × r × π', 'r × r × π'], ['d × π', 'd × π'], ['r × 2 × π', 'r × 2 × π'], ['r × π ÷ 2', 'r × π : 2']], ['d × π and r × 2 × π give the circumference.', 'd × π e r × 2 × π danno la circonferenza.'])
    ]
  }, geometryTaunt),
  makeG5MathMission({
    id: 'g5m-solids', sec: '5.15', pages: '154–156', hue: 10,
    title: ['Solid Figures: Polyhedra, Solids of Rotation and Nets', 'I solidi: poliedri, solidi di rotazione e sviluppo'],
    topic: ['Faces, edges and vertices; cylinder, cone and sphere; nets of solids', 'Facce, spigoli e vertici; cilindro, cono e sfera; lo sviluppo dei solidi'],
    demon: ['The Box Bender', 'il Piega-Scatole'],
    tech: ['Space Form · Fifteenth Technique: Third Dimension', 'Stile dello Spazio · Quindicesima Tecnica: Terza Dimensione'],
    lessons: [
      { vis: 'g5m-solids', text: [
        '<p>🧊 <b>Polyhedra</b> are solids whose faces are all polygons: cube, cuboid (parallelepipedo), prisms and pyramids. Their elements are <b>faces</b>, <b>edges</b> (spigoli) and <b>vertices</b>. A cube has 6 faces, 12 edges and 8 vertices; a square-based pyramid has 5 faces, 8 edges and 5 vertices.</p>',
        '<p>🧊 I <b>poliedri</b> sono solidi con tutte le facce a forma di poligono: cubo, parallelepipedo, prismi e piramidi. I loro elementi sono <b>facce</b>, <b>spigoli</b> e <b>vertici</b>. Il cubo ha 6 facce, 12 spigoli e 8 vertici; la piramide a base quadrata ha 5 facce, 8 spigoli e 5 vertici.</p>'
      ] },
      [
        '<p>🌀 <b>Solids of rotation</b> have curved surfaces and are made by spinning a flat figure around an axis: a rectangle gives a <b>cylinder</b>, a right-angled triangle gives a <b>cone</b>, a semicircle gives a <b>sphere</b>. They are not polyhedra.</p>',
        '<p>🌀 I <b>solidi di rotazione</b> hanno superfici curve e si ottengono facendo ruotare una figura piana intorno a un asse: il rettangolo genera il <b>cilindro</b>, il triangolo rettangolo il <b>cono</b>, il semicerchio la <b>sfera</b>. Non sono poliedri.</p>'
      ],
      [
        '<p>✂️ The <b>net</b> (sviluppo) of a solid is the flat figure you get by unfolding its surface. A cube’s net is made of <b>6 equal squares</b>; a cylinder’s net is a rectangle plus two circles. Not every arrangement of 6 squares folds into a cube!</p>',
        '<p>✂️ Lo <b>sviluppo</b> di un solido è la figura piana che si ottiene «aprendo» la sua superficie. Lo sviluppo del cubo è formato da <b>6 quadrati uguali</b>; quello del cilindro da un rettangolo e due cerchi. Non tutte le disposizioni di 6 quadrati si chiudono in un cubo!</p>'
      ]
    ],
    quiz: [
      q('How many edges does a cube have?', 'Quanti spigoli ha un cubo?', [['12', '12'], ['6', '6'], ['8', '8'], ['24', '24']], ['4 on top, 4 on the bottom and 4 vertical.', '4 sopra, 4 sotto e 4 verticali.']),
      q('Which solid is NOT a polyhedron?', 'Quale solido NON è un poliedro?', [['The cylinder', 'Il cilindro'], ['The cube', 'Il cubo'], ['The pyramid', 'La piramide'], ['The prism', 'Il prisma']], ['A cylinder has curved surfaces.', 'Il cilindro ha superfici curve.']),
      q('Which flat figure spins to make a cone?', 'Quale figura piana, ruotando, genera un cono?', [['A right-angled triangle', 'Un triangolo rettangolo'], ['A rectangle', 'Un rettangolo'], ['A semicircle', 'Un semicerchio'], ['A square', 'Un quadrato']], ['Rotating a right-angled triangle around one leg makes a cone.', 'Facendo ruotare un triangolo rettangolo intorno a un cateto si ottiene un cono.']),
      q('How many faces does a square-based pyramid have?', 'Quante facce ha una piramide a base quadrata?', [['5', '5'], ['4', '4'], ['6', '6'], ['8', '8']], ['1 square base + 4 triangles.', '1 base quadrata + 4 triangoli.'])
    ]
  }, geometryTaunt),
  makeG5MathMission({
    id: 'g5m-solid-area', sec: '5.16', pages: '157–158', hue: 25,
    title: ['The Surface Area of Solids', 'L’area dei solidi'],
    topic: ['Lateral and total surface area of the cube and the cuboid', 'Superficie laterale e totale del cubo e del parallelepipedo'],
    demon: ['The Wrapping-Paper Wraith', 'lo Spettro della Carta Regalo'],
    tech: ['Space Form · Sixteenth Technique: Perfect Wrap', 'Stile dello Spazio · Sedicesima Tecnica: Incarto Perfetto'],
    lessons: [
      [
        '<p>🎁 How much paper do you need to wrap a box? You need the <b>surface area</b>: the area of its net. The <b>lateral surface (Sl)</b> is the area of the side faces; the <b>total surface (St)</b> also includes the two bases.</p>',
        '<p>🎁 Quanta carta serve per incartare una scatola? Serve l’<b>area della superficie</b>, cioè l’area del suo sviluppo. La <b>superficie laterale (Sl)</b> è l’area delle facce laterali; la <b>superficie totale (St)</b> comprende anche le due basi.</p>'
      ],
      [
        '<p>🧊 <b>Cube</b> with edge l: Sl = l × l × 4; St = l × l × 6. With l = 3 cm: Sl = 36 cm², St = <b>54 cm²</b>.</p>',
        '<p>🧊 <b>Cubo</b> con spigolo l: Sl = l × l × 4; St = l × l × 6. Con l = 3 cm: Sl = 36 cm², St = <b>54 cm²</b>.</p>'
      ],
      [
        '<p>📦 <b>Cuboid</b> with base 5 cm × 3 cm and height 4 cm: perimeter of the base = 16 cm; <b>Sl = P(base) × h</b> = 16 × 4 = 64 cm²; area of one base = 15 cm²; <b>St = Sl + 2 × A(base)</b> = 64 + 30 = <b>94 cm²</b>.</p>',
        '<p>📦 <b>Parallelepipedo</b> con base di 5 cm × 3 cm e altezza 4 cm: perimetro di base = 16 cm; <b>Sl = P(base) × h</b> = 16 × 4 = 64 cm²; area di una base = 15 cm²; <b>St = Sl + 2 × A(base)</b> = 64 + 30 = <b>94 cm²</b>.</p>'
      ]
    ],
    quiz: [
      q('A cube has a 3 cm edge. What is its total surface area?', 'Un cubo ha lo spigolo di 3 cm. Qual è la sua superficie totale?', [['54 cm²', '54 cm²'], ['36 cm²', '36 cm²'], ['27 cm²', '27 cm²'], ['18 cm²', '18 cm²']], ['3 × 3 × 6 = 54.', '3 × 3 × 6 = 54.']),
      q('A cuboid has base perimeter 16 cm and height 4 cm. What is its lateral surface?', 'Un parallelepipedo ha perimetro di base 16 cm e altezza 4 cm. Qual è la superficie laterale?', [['64 cm²', '64 cm²'], ['20 cm²', '20 cm²'], ['32 cm²', '32 cm²'], ['94 cm²', '94 cm²']], ['Sl = P(base) × h = 16 × 4.', 'Sl = P(base) × h = 16 × 4.']),
      q('Same cuboid: base 5 cm × 3 cm. What is its total surface?', 'Stesso parallelepipedo: base 5 cm × 3 cm. Qual è la superficie totale?', [['94 cm²', '94 cm²'], ['79 cm²', '79 cm²'], ['64 cm²', '64 cm²'], ['60 cm²', '60 cm²']], ['64 + 2 × 15 = 94.', '64 + 2 × 15 = 94.']),
      q('The total surface of a solid is…', 'La superficie totale di un solido è…', [['Lateral surface + area of the bases', 'Superficie laterale + area delle basi'], ['Only the bases', 'Solo le basi'], ['Its volume', 'Il suo volume'], ['The sum of its edges', 'La somma dei suoi spigoli']], ['It is the area of the whole net.', 'È l’area di tutto lo sviluppo.'])
    ]
  }, geometryTaunt),
  makeG5MathMission({
    id: 'g5m-volume', sec: '5.17', pages: '159–160', hue: 40,
    title: ['Volume and the Volume of Solids', 'Il volume e il volume dei solidi'],
    topic: ['Measuring volume with unit cubes; volume of the cube and the cuboid; link with capacity', 'Misurare il volume con i cubetti; volume del cubo e del parallelepipedo; legame con la capacità'],
    demon: ['The Space Swallower', 'l’Inghiotti-Spazio'],
    tech: ['Space Form · Seventeenth Technique: Fill the Box', 'Stile dello Spazio · Diciassettesima Tecnica: Riempi la Scatola'],
    lessons: [
      [
        '<p>🧱 The <b>volume</b> of a solid is how many <b>unit cubes</b> fit inside it. A box with 4 rows of 5 cubes on the bottom (20 cubes) and 3 layers holds 20 × 3 = <b>60 cubes</b>: if each is 1 cm³, the volume is 60 cm³.</p>',
        '<p>🧱 Il <b>volume</b> di un solido indica quanti <b>cubetti unitari</b> può contenere. Una scatola con 4 file da 5 cubetti sul fondo (20 cubetti) e 3 strati ne contiene 20 × 3 = <b>60</b>: se ognuno è di 1 cm³, il volume è 60 cm³.</p>'
      ],
      [
        '<p>📦 Formulas: <b>cuboid V = length × width × height</b> (= area of the base × height); <b>cube V = l × l × l</b>. A cube with a 4 cm edge has V = <b>64 cm³</b>. Volume is measured in cubic units (cm³, dm³, m³).</p>',
        '<p>📦 Formule: <b>parallelepipedo V = lunghezza × larghezza × altezza</b> (= area di base × altezza); <b>cubo V = l × l × l</b>. Un cubo con lo spigolo di 4 cm ha V = <b>64 cm³</b>. Il volume si misura in unità cubiche (cm³, dm³, m³).</p>'
      ],
      [
        '<p>💧 Remember 1 dm³ = 1 l: a fish tank of 5 dm × 3 dm × 2 dm has V = 30 dm³, so it can hold <b>30 litres</b> of water. Two different boxes can have the same volume: 6 × 2 × 5 = 60 and 3 × 4 × 5 = 60.</p>',
        '<p>💧 Ricorda 1 dm³ = 1 l: un acquario di 5 dm × 3 dm × 2 dm ha V = 30 dm³, quindi può contenere <b>30 litri</b> d’acqua. Due scatole diverse possono avere lo stesso volume: 6 × 2 × 5 = 60 e 3 × 4 × 5 = 60.</p>'
      ]
    ],
    quiz: [
      q('A cube has a 4 cm edge. What is its volume?', 'Un cubo ha lo spigolo di 4 cm. Qual è il suo volume?', [['64 cm³', '64 cm³'], ['16 cm³', '16 cm³'], ['12 cm³', '12 cm³'], ['96 cm³', '96 cm³']], ['4 × 4 × 4 = 64.', '4 × 4 × 4 = 64.']),
      q('A fish tank is 5 dm × 3 dm × 2 dm. How many litres can it hold?', 'Un acquario misura 5 dm × 3 dm × 2 dm. Quanti litri può contenere?', [['30 l', '30 l'], ['10 l', '10 l'], ['300 l', '300 l'], ['3 l', '3 l']], ['V = 30 dm³ and 1 dm³ = 1 l.', 'V = 30 dm³ e 1 dm³ = 1 l.']),
      q('A cuboid is 5 cm × 3 cm × 4 cm. What is its volume?', 'Un parallelepipedo misura 5 cm × 3 cm × 4 cm. Qual è il suo volume?', [['60 cm³', '60 cm³'], ['12 cm³', '12 cm³'], ['94 cm³', '94 cm³'], ['47 cm³', '47 cm³']], ['5 × 3 × 4 = 60.', '5 × 3 × 4 = 60.']),
      q('Which unit measures volume?', 'Quale unità misura il volume?', [['cm³', 'cm³'], ['cm²', 'cm²'], ['cm', 'cm'], ['kg', 'kg']], ['Volume uses cubic units.', 'Il volume si misura in unità cubiche.'])
    ]
  }, geometryTaunt),
  makeG5MathMission({
    id: 'g5m-geometry-review', sec: '5.18', pages: '124–125, 138–141, 150–152, 161–163', hue: 55,
    title: ['Check-Up: Space and Figures', 'Adesso so: spazio e figure'],
    topic: ['Problem solving, STEM geometric drawing, summary maps, tests and Invalsi-style questions', 'Problem solving, STEM disegno geometrico, mappe di sintesi, verifiche e quesiti verso l’Invalsi'],
    demon: ['The Unit Guardian of Shapes', 'il Guardiano delle Figure'],
    tech: ['Space Form · Mastery Seal: Shape Master', 'Stile dello Spazio · Sigillo di Maestria: Maestro delle Figure'],
    lessons: [
      { vis: 'g5m-area-formulas', text: [
        '<p>🗺️ <b>Let’s see it clearly</b> — key formulas: rectangle b × h; square l × l; rhomboid b × h; rhombus D × d ÷ 2; trapezium (B + b) × h ÷ 2; triangle b × h ÷ 2; regular polygon P × a ÷ 2; circumference d × π; circle r × r × π; cuboid volume l × w × h.</p>',
        '<p>🗺️ <b>Vediamoci chiaro</b> — formule chiave: rettangolo b × h; quadrato l × l; romboide b × h; rombo D × d : 2; trapezio (B + b) × h : 2; triangolo b × h : 2; poligono regolare P × a : 2; circonferenza d × π; cerchio r × r × π; volume del parallelepipedo a × b × c.</p>'
      ] },
      [
        '<p>✏️ <b>STEM – geometric drawing</b>: with ruler, set square and compass you can draw parallel and perpendicular lines, regular hexagons (the radius fits exactly 6 times around a circle) and rosettes. Precision in drawing helps precision in measuring.</p>',
        '<p>✏️ <b>STEM – disegno geometrico</b>: con riga, squadra e compasso puoi disegnare rette parallele e perpendicolari, esagoni regolari (il raggio si riporta esattamente 6 volte sulla circonferenza) e rosoni. La precisione nel disegno aiuta la precisione nella misura.</p>'
      ],
      [
        '<p>🏁 <b>Towards Invalsi</b>: draw a sketch and write the data on it, check that the units match (cm, cm², cm³), and use symmetry and isometries to reason about figures on a grid.</p>',
        '<p>🏁 <b>Verso l’Invalsi</b>: fai uno schizzo e scrivici sopra i dati, controlla che le unità corrispondano (cm, cm², cm³) e usa la simmetria e le isometrie per ragionare sulle figure su una griglia.</p>'
      ]
    ],
    quiz: [
      q('A square and a rectangle 8 cm × 2 cm have the same perimeter. What is the square’s side?', 'Un quadrato e un rettangolo di 8 cm × 2 cm hanno lo stesso perimetro. Quanto misura il lato del quadrato?', [['5 cm', '5 cm'], ['4 cm', '4 cm'], ['10 cm', '10 cm'], ['16 cm', '16 cm']], ['P = (8 + 2) × 2 = 20 cm; 20 ÷ 4 = 5 cm.', 'P = (8 + 2) × 2 = 20 cm; 20 : 4 = 5 cm.']),
      q('Which figure has area D × d ÷ 2?', 'Quale figura ha area D × d : 2?', [['The rhombus', 'Il rombo'], ['The trapezium', 'Il trapezio'], ['The rectangle', 'Il rettangolo'], ['The circle', 'Il cerchio']], ['D and d are the rhombus’s diagonals.', 'D e d sono le diagonali del rombo.']),
      q('A circular flower bed has r = 2 m. What is its area? (π = 3.14)', 'Un’aiuola circolare ha r = 2 m. Qual è la sua area? (π = 3,14)', [['12.56 m²', '12,56 m²'], ['6.28 m²', '6,28 m²'], ['25.12 m²', '25,12 m²'], ['4 m²', '4 m²']], ['2 × 2 × 3.14 = 12.56.', '2 × 2 × 3,14 = 12,56.']),
      q('Which unit fits “the amount of water in a pool”?', 'Quale unità è adatta per «la quantità d’acqua in una piscina»?', [['m³', 'm³'], ['m²', 'm²'], ['m', 'm'], ['°', '°']], ['A quantity of space (volume) uses cubic units.', 'Una quantità di spazio (volume) si misura in unità cubiche.'])
    ]
  }, geometryTaunt),
  makeG5MathMission({
    id: 'g5m-final-invalsi', sec: '5.19', pages: '164', hue: 70,
    title: ['Final Invalsi-Style Test', 'Verifica finale Invalsi'],
    topic: ['Mixed questions across Numbers, Space and Figures, Data and Predictions, Relations and Functions', 'Quesiti misti su Numeri, Spazio e figure, Dati e previsioni, Relazioni e funzioni'],
    demon: ['The Grand Examiner', 'il Grande Esaminatore'],
    tech: ['Academy Form · Graduation Seal: Grade 5 Mathematician', 'Stile dell’Accademia · Sigillo del Diploma: Matematica e Matematico di Quinta'],
    lessons: [
      [
        '<p>🎓 The Invalsi Grade 5 maths test mixes four areas: <b>Numbers</b>, <b>Space and Figures</b>, <b>Data and Predictions</b>, <b>Relations and Functions</b>. Questions ask you to <b>know</b>, to <b>solve problems</b> and to <b>argue</b> (explain why).</p>',
        '<p>🎓 La prova Invalsi di matematica di quinta mescola quattro ambiti: <b>Numeri</b>, <b>Spazio e figure</b>, <b>Dati e previsioni</b>, <b>Relazioni e funzioni</b>. Le domande ti chiedono di <b>conoscere</b>, di <b>risolvere problemi</b> e di <b>argomentare</b> (spiegare perché).</p>'
      ],
      [
        '<p>🧭 Strategy: read the whole question, underline the data, draw a sketch, estimate the answer, then calculate. In “argue” questions, choose the explanation that is <b>true and relevant</b>, not just a true sentence.</p>',
        '<p>🧭 Strategia: leggi tutta la domanda, sottolinea i dati, fai uno schizzo, stima la risposta e poi calcola. Nelle domande in cui devi argomentare scegli la spiegazione <b>vera e pertinente</b>, non solo una frase vera.</p>'
      ],
      [
        '<p>🌟 You have travelled through problems, numbers, fractions, measures and shapes. Face the Grand Examiner with calm and method: you are ready for middle school!</p>',
        '<p>🌟 Hai attraversato problemi, numeri, frazioni, misure e figure. Affronta il Grande Esaminatore con calma e metodo: sei pronta e pronto per la scuola media!</p>'
      ]
    ],
    taunt: [
      '<p>🎓 I am the Grand Examiner! I bring questions from every unit of Grade 5. Show me everything you have learned!</p>',
      '<p>🎓 Sono il Grande Esaminatore! Porto domande da tutte le unità della quinta. Mostrami tutto quello che hai imparato!</p>'
    ],
    quiz: [
      q('100 children need 6 kg of bread. How much bread do 75 children need?', 'Per 100 bambini servono 6 kg di pane. Quanto pane serve per 75 bambini?', [['4.5 kg', '4,5 kg'], ['4 kg', '4 kg'], ['5.5 kg', '5,5 kg'], ['8 kg', '8 kg']], ['75 is 3/4 of 100: 6 ÷ 4 × 3 = 4.5.', '75 è i 3/4 di 100: 6 : 4 × 3 = 4,5.']),
      q('Sandals and shoes cost €140 in total; the shoes cost €20 more. How much are the sandals?', 'Sandali e scarpe costano in tutto 140 €; le scarpe costano 20 € in più. Quanto costano i sandali?', [['€60', '60 €'], ['€70', '70 €'], ['€80', '80 €'], ['€120', '120 €']], ['(140 − 20) ÷ 2 = 60; shoes 80, total 140 ✓.', '(140 − 20) : 2 = 60; scarpe 80, totale 140 ✓.']),
      q('A recipe uses 20 g of mint for 200 ml of water. How much mint for 800 ml?', 'Una ricetta usa 20 g di menta per 200 ml d’acqua. Quanta menta per 800 ml?', [['80 g', '80 g'], ['40 g', '40 g'], ['60 g', '60 g'], ['160 g', '160 g']], ['800 is 4 times 200: 20 × 4 = 80.', '800 è 4 volte 200: 20 × 4 = 80.']),
      q('Boxes of pencils: the number is between 1 and 20, divisible by 2 and by 5, but not by 4. How many boxes?', 'Scatole di matite: il numero è compreso tra 1 e 20, divisibile per 2 e per 5, ma non per 4. Quante scatole?', [['10', '10'], ['20', '20'], ['15', '15'], ['5', '5']], ['Multiples of 10 up to 20: 10 and 20; 20 is divisible by 4, so 10.', 'Multipli di 10 fino a 20: 10 e 20; 20 è divisibile per 4, quindi 10.'])
    ]
  }, geometryTaunt)
];
