import type { ArcInfo, Mission, UnitInfo } from '../types';
import { makeMathAdvMission, q } from './mathAdvCommon';

export const MATH10_UNIT: UnitInfo = {
  title: ['Level 2 · 2° Superiore (Systems, Quadratics & Euclid)', 'Livello 2 · 2° Superiore (Sistemi, 2° Grado ed Euclide)'],
  ch: 'L2.1–L2.3',
  subject: 'math10'
};

export const MATH10_ARCS: ArcInfo[] = [
  {
    n: 1,
    unit: 0,
    subject: 'math10',
    title: ['Linear Systems, Radicals & Line', 'Sistemi Lineari, Radicali e Retta'],
    pages: '1–118'
  },
  {
    n: 2,
    unit: 0,
    subject: 'math10',
    title: ['Quadratic Equations & Inequalities', 'Equazioni e Disequazioni di 2° Grado'],
    pages: '119–226'
  },
  {
    n: 3,
    unit: 0,
    subject: 'math10',
    title: ['Euclidean Theorems & Probability', 'Teoremi di Euclide e Probabilità'],
    pages: '227–320'
  }
];

export const MATH10_MISSIONS: Mission[] = [
  // =========================================================================
  // CHAPTER 1: Linear Systems, Radicals & Cartesian Line
  // =========================================================================
  makeMathAdvMission({
    id: 'math_l2_m1',
    arc: 0,
    sec: 'L2.1',
    pages: '1–38',
    hue: 192,
    title: ['Linear Systems & Line Intersections', 'Sistemi Lineari e Incontro di Rette'],
    topic: [
      '2×2 linear systems, substitution, elimination, Cramer determinants & geometric meaning',
      'Sistemi lineari 2×2, sostituzione, riduzione, metodo di Cramer e significato geometrico'
    ],
    demon: ['The Parallel Phantom', 'Lo Spettro dei Binari Paralleli'],
    tech: ['Grid Form · First Technique: Intersection Lock', 'Stile della Rete · Prima Tecnica: Punto d’Incontro'],
    lessons: [
      {
        vis: 'math10Systems',
        text: [
          '<p>Imagine two trains travelling along straight tracks on a map, {name}. Finding a solution to a <b>2×2 linear system</b> simply means finding the exact station <b>(x, y)</b> where both tracks cross at the same time!</p>',
          '<p>Immagina due treni che viaggiano su binari rettilinei su una mappa, {name}. Risolvere un <b>sistema lineare 2×2</b> significa trovare la stazione esatta <b>(x, y)</b> dove entrambi i binari si incrociano!</p>'
        ]
      },
      {
        vis: 'math10Systems',
        text: [
          '<p>Three things can happen: (1) tracks cross once → <b>determined</b> (D = a₁b₂ − a₂b₁ ≠ 0); (2) parallel tracks never meet → <b>impossible</b> (a₁/a₂ = b₁/b₂ ≠ c₁/c₂); (3) same track drawn twice → <b>indeterminate</b> (infinitely many solutions).</p>',
          '<p>Possono succedere tre cose: (1) i binari si incrociano una volta → <b>determinato</b> (D ≠ 0); (2) binari paralleli che non si toccano mai → <b>impossibile</b>; (3) la stessa retta scritta due volte → <b>indeterminato</b> (infinite soluzioni).</p>'
        ]
      },
      {
        vis: 'math10Systems',
        text: [
          '<p>Pick your favorite tool: <b>Substitution</b> isolates one letter and drops it into the other equation; <b>Reduction (elimination)</b> adds equations vertically to cancel a letter; <b>Cramer</b> uses determinant D = a₁b₂ − a₂b₁ directly.</p>',
          '<p>Scegli lo strumento più rapido: <b>Sostituzione</b> isola un’incognita e la inserisce nell’altra; <b>Riduzione</b> somma le equazioni in colonna per cancellare una lettera; <b>Cramer</b> usa il determinante D = a₁b₂ − a₂b₁.</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Classify Linear System Behavior', 'Classifica il Comportamento dei Sistemi'],
      hint: [
        'Compare the slopes (a₁/a₂ vs b₁/b₂) and intercepts (c₁/c₂).',
        'Confronta i rapporti dei coefficienti a₁/a₂, b₁/b₂ e c₁/c₂.'
      ],
      cats: [
        ['Has Solutions (Determined or ∞)', 'Ha Soluzioni (Determinato o ∞)'],
        ['Impossible (0 Solutions)', 'Impossibile (0 Soluzioni)']
      ],
      items: [
        { n: ['2x + y = 5 and x − y = 1 (D ≠ 0)', '2x + y = 5 e x − y = 1 (D ≠ 0)'], i: 'bolt', c: 0, why: ['Non-zero determinant D = −3 guarantees one crossing point (2, 1).', 'Determinante D = −3 ≠ 0 garantisce un unico punto d’incontro (2, 1).'] },
        { n: ['x + 2y = 4 and x + 2y = 9', 'x + 2y = 4 e x + 2y = 9'], i: 'warn', c: 1, why: ['The same sum x + 2y cannot equal both 4 and 9: parallel tracks!', 'La stessa somma x + 2y non può valere sia 4 sia 9: rette parallele!'] },
        { n: ['2x − 4y = 6 and x − 2y = 3', '2x − 4y = 6 e x − 2y = 3'], i: 'layers', c: 0, why: ['Both represent the exact same line (infinite solutions).', 'Entrambe le equazioni descrivono la stessa retta (infinite soluzioni).'] },
        { n: ['3x − y = 2 and 6x − 2y = 7', '3x − y = 2 e 6x − 2y = 7'], i: 'shield', c: 1, why: ['3/6 = (−1)/(−2) ≠ 2/7 gives two distinct parallel lines.', 'I coefficienti di x e y sono proporzionali ma i termini noti no: parallele distinte.'] },
        { n: ['y = 3x + 1 and y = −x + 5', 'y = 3x + 1 e y = −x + 5'], i: 'eye', c: 0, why: ['Different slopes (3 and −1) must intersect at (1, 4).', 'Pendenze diverse (3 e −1) si incontrano necessariamente in (1, 4).'] }
      ]
    },
    taunt: [
      'My twin rails run parallel forever—you will never find an intersection point!',
      'I miei binari corrono paralleli per sempre: non troverai mai il punto d’incrocio!'
    ],
    quiz: [
      q('Solve the system: x + y = 9 and x − y = 3.', 'Risolvi il sistema: x + y = 9 e x − y = 3.', [
        ['x = 6, y = 3', 'x = 6, y = 3'],
        ['x = 3, y = 6', 'x = 3, y = 6'],
        ['x = 5, y = 4', 'x = 5, y = 4'],
        ['No solution', 'Nessuna soluzione']
      ], ['Add both equations: 2x = 12 → x = 6, then 6 + y = 9 → y = 3.', 'Sommando le due equazioni: 2x = 12 → x = 6, poi y = 9 − 6 = 3.']),
      q('Geometrically, what is an IMPOSSIBLE 2×2 linear system?', 'Geometricamente, che cosa rappresenta un sistema lineare 2×2 IMPOSSIBILE?', [
        ['Two distinct parallel lines that never intersect', 'Due rette parallele e distinte che non si incontrano mai'],
        ['Two perpendicular lines crossing at 90°', 'Due rette perpendicolari a 90°'],
        ['Two coincident lines overlapping everywhere', 'Due rette coincidenti punto per punto'],
        ['A parabola intersecting the x-axis twice', 'Una parabola che taglia l’asse x due volte']
      ], ['Same slope m₁ = m₂ with different y-intercepts q₁ ≠ q₂ gives zero common points.', 'Stessa pendenza m₁ = m₂ con quota diversa q₁ ≠ q₂ non ha punti in comune.']),
      q('For a₁x + b₁y = c₁ and a₂x + b₂y = c₂, when is Cramer’s system determined?', 'Quando un sistema lineare è determinato con il metodo di Cramer?', [
        ['When D = a₁b₂ − a₂b₁ ≠ 0', 'Quando D = a₁b₂ − a₂b₁ ≠ 0'],
        ['When D = 0 and Dx ≠ 0', 'Quando D = 0 e Dx ≠ 0'],
        ['When all constants c₁ and c₂ are zero', 'Quando entrambi i termini noti sono zero'],
        ['Only when a₁ = b₂', 'Solo quando a₁ = b₂']
      ], ['Dividing Dx/D and Dy/D requires a non-zero denominator D ≠ 0.', 'Per calcolare x = Dx/D e y = Dy/D serve che D sia diverso da zero.']),
      q('What kind of system is 2x + 3y = 6 and 4x + 6y = 12?', 'Che tipo di sistema è 2x + 3y = 6 e 4x + 6y = 12?', [
        ['Indeterminate (coincident lines, infinitely many solutions)', 'Indeterminato (rette coincidenti, infinite soluzioni)'],
        ['Impossible (parallel distinct lines)', 'Impossibile (rette parallele distinte)'],
        ['Determined with unique solution (2, 3)', 'Determinato con unica soluzione (2, 3)'],
        ['Quadratic system of degree 4', 'Sistema di quarto grado']
      ], ['The second equation is simply 2 times the first: every ratio 2/4 = 3/6 = 6/12 = 1/2 matches.', 'La seconda equazione è il doppio della prima: tutti i coefficienti sono in rapporto 1/2.']),
      q('Solve by substitution: y = 2x and 3x + y = 15.', 'Risolvi per sostituzione: y = 2x e 3x + y = 15.', [
        ['x = 3, y = 6', 'x = 3, y = 6'],
        ['x = 6, y = 3', 'x = 6, y = 3'],
        ['x = 5, y = 10', 'x = 5, y = 10'],
        ['x = 2, y = 9', 'x = 2, y = 9']
      ], ['Replace y with 2x: 3x + 2x = 15 → 5x = 15 → x = 3 and y = 6.', 'Sostituendo y = 2x: 3x + 2x = 15 → 5x = 15 → x = 3 e y = 6.'])
    ]
  }),

  makeMathAdvMission({
    id: 'math_l2_m2',
    arc: 0,
    sec: 'L2.2',
    pages: '39–78',
    hue: 174,
    title: ['Radicals, Conditions & Rationalization', 'Radicali, C.E. e Razionalizzazione'],
    topic: [
      'Root index, existence conditions (C.E.), simplifying radicals & rationalizing denominators',
      'Indice di radice, condizioni di esistenza (C.E.), trasporto fuori radice e razionalizzazione'
    ],
    demon: ['The Surd Splitter', 'Lo Spezza-Radici'],
    tech: ['Root Form · Second Technique: Clean Denominator', 'Stile delle Radici · Seconda Tecnica: Razionalizzazione'],
    lessons: [
      {
        vis: 'math10Radicals',
        text: [
          '<p>A radical <b>√[n]{A}</b> asks: “What number raised to power <i>n</i> gives A?” Think of <b>even roots</b> (like √A) as picky security guards: in ℝ they only let in <b>A ≥ 0</b>. <b>Odd roots</b> (like ∛−8 = −2) welcome negative numbers too!</p>',
          '<p>Un radicale <b>√[n]{A}</b> chiede: «Quale numero elevato a <i>n</i> dà A?» Le <b>radici di indice pari</b> (come √A) accettano in ℝ solo <b>A ≥ 0</b>. Le <b>radici dispari</b> (come ∛−8 = −2) funzionano anche coi negativi!</p>'
        ]
      },
      {
        vis: 'math10Radicals',
        text: [
          '<p>To simplify √72, hunt for the biggest hidden square factor: 72 = 36 · 2, so √72 = <b>6√2</b>! And only <i>like radicals</i> (same index and same radicand) can be added: 3√2 + 5√2 = 8√2, while √2 + √3 stays separate.</p>',
          '<p>Per semplificare √72, cerca il quadrato perfetto nascosto: 72 = 36 · 2, quindi √72 = <b>6√2</b>! Inoltre si sommano solo i <i>radicali simili</i>: 3√2 + 5√2 = 8√2, mentre √2 + √3 non si uniscono.</p>'
        ]
      },
      {
        vis: 'math10Radicals',
        text: [
          '<p>Never leave a square root trapped downstairs in a fraction denominator! Multiply top and bottom by √a (for single terms like 6/√3 = 2√3) or by the conjugate <b>(√a + √b)</b> when there is a binomial below.</p>',
          '<p>Non lasciare radici al denominatore! Razionalizza moltiplicando numeratore e denominatore per √a (caso 6/√3 = 2√3) oppure per il fattore coniugato <b>(√a + √b)</b> se sotto c’è una somma o differenza.</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['True Radical Rules vs. Common Traps', 'Regole Vere dei Radicali vs. Errori Trappola'],
      hint: [
        'Test rules with real numbers like 9 and 16: does √(9+16) equal 3+4?',
        'Prova con numeri semplici come 9 e 16: √(9+16) fa davvero 3+4?'
      ],
      cats: [
        ['Always Valid Rule', 'Regola Sempre Valida'],
        ['Classic Trap (False)', 'Errore Classico (Falso)']
      ],
      items: [
        { n: ['√(a · b) = √a · √b (for a, b ≥ 0)', '√(a · b) = √a · √b (per a, b ≥ 0)'], i: 'bolt', c: 0, why: ['Products and quotients distribute cleanly across roots.', 'Prodotto e quoziente si possono sempre distribuire sotto radice.'] },
        { n: ['√(a + b) = √a + √b', '√(a + b) = √a + √b'], i: 'warn', c: 1, why: ['Trap! √(9 + 16) = √25 = 5, whereas √9 + √16 = 3 + 4 = 7.', 'Errore! √(9 + 16) = 5, mentre √9 + √16 = 3 + 4 = 7.'] },
        { n: ['√(x²) = |x| for every real x', '√(x²) = |x| per ogni x reale'], i: 'shield', c: 0, why: ['Because √((-5)²) = √25 = +5 = |−5|.', 'Perché √((-5)²) = √25 = +5 = |−5|.'] },
        { n: ['√(x − 4) exists for x = 0 in ℝ', '√(x − 4) esiste per x = 0 in ℝ'], i: 'warn', c: 1, why: ['At x = 0 the radicand is −4 < 0; C.E. requires x ≥ 4.', 'Con x = 0 il radicando è −4 < 0; la C.E. impone x ≥ 4.'] },
        { n: ['1/√2 = √2 / 2', '1/√2 = √2 / 2'], i: 'eye', c: 0, why: ['Multiplying top and bottom by √2 clears the root cleanly.', 'Moltiplicando sopra e sotto per √2 si ottiene √2 / 2.'] }
      ]
    },
    taunt: [
      'Go ahead, split √(a + b) into √a + √b—everyone falls for my favorite trap!',
      'Dai, spezza √(a + b) in √a + √b… quasi tutti cadono nella mia trappola preferita!'
    ],
    quiz: [
      q('What is the existence condition (C.E.) in ℝ for √(x − 5)?', 'Qual è la condizione di esistenza (C.E.) in ℝ per √(x − 5)?', [
        ['x ≥ 5', 'x ≥ 5'],
        ['x > 5 strictly', 'x > 5 strettamente'],
        ['All real numbers ℝ', 'Tutti i numeri reali ℝ'],
        ['x ≤ 5', 'x ≤ 5']
      ], ['An even (square) root requires its radicand ≥ 0: x − 5 ≥ 0 → x ≥ 5.', 'Una radice di indice pari richiede radicando non negativo: x − 5 ≥ 0 → x ≥ 5.']),
      q('Simplify √50 into standard radical form.', 'Semplifica √50 portando i fattori fuori radice.', [
        ['5√2', '5√2'],
        ['2√5', '2√5'],
        ['25√2', '25√2'],
        ['10√5', '10√5']
      ], ['50 = 25 · 2, and √25 = 5, leaving 5√2.', '50 = 25 · 2 e √25 = 5, quindi √50 = 5√2.']),
      q('Rationalize the denominator of 6 / √3.', 'Razionalizza il denominatore di 6 / √3.', [
        ['2√3', '2√3'],
        ['6√3', '6√3'],
        ['3√2', '3√2'],
        ['2 / √3', '2 / √3']
      ], ['(6 · √3) / (√3 · √3) = 6√3 / 3 = 2√3.', '(6 · √3) / (√3 · √3) = 6√3 / 3 = 2√3.']),
      q('What is the real value of ∛(−27)?', 'Quanto vale nei numeri reali ∛(−27)?', [
        ['−3', '−3'],
        ['Does not exist in ℝ', 'Non esiste in ℝ'],
        ['+3 only', 'Solo +3'],
        ['−9', '−9']
      ], ['Odd roots preserve sign: (−3)³ = −27, so ∛(−27) = −3.', 'Le radici di indice dispari mantengono il segno: (−3)³ = −27.']),
      q('Simplify the expression: 4√3 + 2√12 − √3.', 'Semplifica l’espressione: 4√3 + 2√12 − √3.', [
        ['7√3', '7√3'],
        ['5√3', '5√3'],
        ['3√12', '3√12'],
        ['6√3', '6√3']
      ], ['Since √12 = 2√3, 2√12 = 4√3. Then (4 + 4 − 1)√3 = 7√3.', 'Poiché √12 = 2√3, abbiamo 4√3 + 4√3 − √3 = 7√3.'])
    ]
  }),

  makeMathAdvMission({
    id: 'math_l2_m3',
    arc: 0,
    sec: 'L2.3',
    pages: '79–118',
    hue: 210,
    title: ['Cartesian Plane & Straight Lines', 'Piano Cartesiano e Retta'],
    topic: [
      'Distance, midpoint, slope m, explicit/implicit line equations, parallel & perpendicular lines',
      'Distanza tra due punti, punto medio, coefficiente angolare m, rette parallele e perpendicolari'
    ],
    demon: ['The Slope Shifter', 'Il Deviatore di Pendenza'],
    tech: ['Axis Form · Third Technique: Orthogonal Cut', 'Stile degli Assi · Terza Tecnica: Taglio Ortogonale'],
    lessons: [
      {
        vis: 'math10CartesianLine',
        text: [
          '<p>In the Cartesian plane, every point A(x₁, y₁) and B(x₂, y₂) forms a tiny right triangle! Pythagoras gives the distance <b>d = √[(x₂ − x₁)² + (y₂ − y₁)²]</b>, and the halfway point is simply the average: <b>M = ((x₁+x₂)/2, (y₁+y₂)/2)</b>.</p>',
          '<p>Nel piano cartesiano, due punti A(x₁, y₁) e B(x₂, y₂) formano un triangolo rettangolo! Pitagora dà la distanza <b>d = √[(x₂ − x₁)² + (y₂ − y₁)²]</b> e il punto medio è la semplice media aritmetica: <b>M = ((x₁+x₂)/2, (y₁+y₂)/2)</b>.</p>'
        ]
      },
      {
        vis: 'math10CartesianLine',
        text: [
          '<p>A straight line in explicit form is <b>y = mx + q</b>. Think of <b>q</b> as the starting floor on the y-axis, and <b>m = Δy/Δx</b> as the staircase steepness: positive climbs up-right, negative slopes down, and m = 0 is completely flat!</p>',
          '<p>La retta in forma esplicita è <b>y = mx + q</b>. Pensa a <b>q</b> come al piano di partenza sull’asse y, e a <b>m = Δy/Δx</b> come alla ripidezza della scala: positivo sale, negativo scende, m = 0 è perfettamente orizzontale!</p>'
        ]
      },
      {
        vis: 'math10CartesianLine',
        text: [
          '<p>Two lines are <b>parallel</b> when they share the exact same slope (<b>m₁ = m₂</b>). They are <b>perpendicular (90°)</b> when their slopes are opposite reciprocals: <b>m₂ = −1 / m₁</b> (so m₁ · m₂ = −1).</p>',
          '<p>Due rette sono <b>parallele</b> quando hanno lo stesso coefficiente angolare (<b>m₁ = m₂</b>). Sono <b>perpendicolari (90°)</b> quando una pendenza è l’antireciproco dell’altra: <b>m₂ = −1 / m₁</b> (cioè m₁ · m₂ = −1).</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Parallel vs. Perpendicular Line Pairs', 'Rette Parallele vs. Rette Perpendicolari'],
      hint: [
        'Compare m₁ and m₂: equal slopes mean parallel, product −1 means 90° perpendicular.',
        'Confronta m₁ e m₂: uguali = parallele, prodotto −1 = perpendicolari.'
      ],
      cats: [
        ['Parallel (m₁ = m₂)', 'Parallele (m₁ = m₂)'],
        ['Perpendicular (m₁ · m₂ = −1)', 'Perpendicolari (m₁ · m₂ = −1)']
      ],
      items: [
        { n: ['y = 3x + 1 and y = 3x − 7', 'y = 3x + 1 e y = 3x − 7'], i: 'layers', c: 0, why: ['Both have slope m = 3.', 'Entrambe hanno m = 3.'] },
        { n: ['y = 2x + 4 and y = −½x + 1', 'y = 2x + 4 e y = −½x + 1'], i: 'bolt', c: 1, why: ['2 · (−1/2) = −1: 90° intersection!', '2 · (−1/2) = −1: si tagliano a 90°!'] },
        { n: ['y = −4x and y = −4x + 9', 'y = −4x e y = −4x + 9'], i: 'flow', c: 0, why: ['Both share slope m = −4.', 'Entrambe hanno m = −4.'] },
        { n: ['y = (2/3)x and y = −(3/2)x + 5', 'y = (2/3)x e y = −(3/2)x + 5'], i: 'shield', c: 1, why: ['(2/3) · (−3/2) = −1 (flipped fraction + opposite sign).', '(2/3) · (−3/2) = −1 (frazione capovolta e segno opposto).'] },
        { n: ['x = 2 and y = 5 (axes direction)', 'x = 2 e y = 5'], i: 'eye', c: 1, why: ['A vertical line and a horizontal line always meet at 90°.', 'Una retta verticale e una orizzontale sono sempre perpendicolari.'] }
      ]
    },
    taunt: [
      'Flip the sign, forget the reciprocal—my perpendicular lines will twist your compass!',
      'Scambia un segno o dimentica il reciproco e le mie rette perpendicolari ti faranno perdere la bussola!'
    ],
    quiz: [
      q('Find the slope m of the line passing through A(1, 2) and B(4, 11).', 'Calcola il coefficiente angolare m della retta per A(1, 2) e B(4, 11).', [
        ['m = 3', 'm = 3'],
        ['m = 1/3', 'm = 1/3'],
        ['m = 9', 'm = 9'],
        ['m = −3', 'm = −3']
      ], ['m = (y₂ − y₁)/(x₂ − x₁) = (11 − 2)/(4 − 1) = 9/3 = 3.', 'm = (11 − 2)/(4 − 1) = 9/3 = 3.']),
      q('Which slope is perpendicular to the line y = (2/5)x − 1?', 'Quale retta è perpendicolare a y = (2/5)x − 1?', [
        ['y = −(5/2)x + 3', 'y = −(5/2)x + 3'],
        ['y = (5/2)x + 3', 'y = (5/2)x + 3'],
        ['y = −(2/5)x + 3', 'y = −(2/5)x + 3'],
        ['y = (2/5)x + 7', 'y = (2/5)x + 7']
      ], ['Perpendicular slopes satisfy m₁ · m₂ = −1, so flip 2/5 and negate → −5/2.', 'L’antireciproco di 2/5 è −5/2 (capovolto e cambiato di segno).']),
      q('What is the distance between P(1, 1) and Q(4, 5)?', 'Qual è la distanza tra P(1, 1) e Q(4, 5)?', [
        ['5', '5'],
        ['7', '7'],
        ['√7', '√7'],
        ['25', '25']
      ], ['d = √[(4 − 1)² + (5 − 1)²] = √(9 + 16) = √25 = 5.', 'd = √[(4 − 1)² + (5 − 1)²] = √(9 + 16) = 5.']),
      q('What is the midpoint M of segment AB with A(−2, 6) and B(8, 2)?', 'Qual è il punto medio M tra A(−2, 6) e B(8, 2)?', [
        ['(3, 4)', '(3, 4)'],
        ['(5, 2)', '(5, 2)'],
        ['(6, 8)', '(6, 8)'],
        ['(−5, 4)', '(−5, 4)']
      ], ['M = ((−2 + 8)/2, (6 + 2)/2) = (6/2, 8/2) = (3, 4).', 'M = ((−2 + 8)/2, (6 + 2)/2) = (3, 4).']),
      q('Find the slope m of the implicit line 6x + 2y − 10 = 0.', 'Trova il coefficiente angolare m della retta 6x + 2y − 10 = 0.', [
        ['m = −3', 'm = −3'],
        ['m = +3', 'm = +3'],
        ['m = −1/3', 'm = −1/3'],
        ['m = 5', 'm = 5']
      ], ['Rewrite as 2y = −6x + 10 → y = −3x + 5, so m = −a/b = −3.', 'Esplicitando: 2y = −6x + 10 → y = −3x + 5, quindi m = −3.'])
    ]
  }),

  // =========================================================================
  // CHAPTER 2: Quadratic Equations & Inequalities
  // =========================================================================
  makeMathAdvMission({
    id: 'math_l2_m4',
    arc: 1,
    sec: 'L2.4',
    pages: '119–158',
    hue: 38,
    title: ['Quadratic Equations & Discriminant Δ', 'Equazioni di 2° Grado e Discriminante Δ'],
    topic: [
      'Pure, spurious & complete quadratics, quadratic formula & discriminant Δ',
      'Equazioni pure, spurie e complete, formula risolutiva e discriminante Δ'
    ],
    demon: ['The Negative Delta Demon', 'Il Demone del Delta Negativo'],
    tech: ['Quadratic Form · Fourth Technique: Delta Strike', 'Stile Quadratico · Quarta Tecnica: Colpo del Delta'],
    lessons: [
      {
        vis: 'math10QuadraticDelta',
        text: [
          '<p>In a degree-2 equation <b>ax² + bx + c = 0</b> (a ≠ 0), check shortcuts before using the big formula! If c = 0 (<i>spurious</i> like x² − 5x = 0), factor out x → one root is always <b>x = 0</b>! If b = 0 (<i>pure</i> like x² = 9), take ±√ → <b>x = ±3</b>.</p>',
          '<p>In un’equazione di 2° grado <b>ax² + bx + c = 0</b>, controlla le scorciatoie! Se c = 0 (<i>spuria</i>: x² − 5x = 0), raccogli x → una soluzione è sempre <b>x = 0</b>! Se b = 0 (<i>pura</i>: x² = 9), estrai ±√ → <b>x = ±3</b>.</p>'
        ]
      },
      {
        vis: 'math10QuadraticDelta',
        text: [
          '<p>When all three terms a, b, c are present, unleash the universal quadratic formula: <b>x = (−b ± √Δ) / (2a)</b>, where the <b>discriminant Δ = b² − 4ac</b> acts like a radar telling you how many times the parabola hits the ground!</p>',
          '<p>Quando a, b, c sono tutti presenti, usa la formula risolutiva: <b>x = (−b ± √Δ) / (2a)</b>, dove il <b>discriminante Δ = b² − 4ac</b> funziona come un radar che conta quante volte la parabola tocca l’asse x!</p>'
        ]
      },
      {
        vis: 'math10QuadraticDelta',
        text: [
          '<p><b>Δ &gt; 0</b> → two distinct real roots. <b>Δ = 0</b> → one double root (a perfect square like (x − 3)² = 0). <b>Δ &lt; 0</b> → impossible in ℝ because you cannot take the real square root of a negative number!</p>',
          '<p><b>Δ &gt; 0</b> → due soluzioni reali distinte. <b>Δ = 0</b> → una soluzione doppia (quadrato perfetto). <b>Δ &lt; 0</b> → nessuna soluzione in ℝ perché la radice di un numero negativo non è reale!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Fastest Strategy by Quadratic Type', 'Strategia più Rapida per Equazioni di 2° Grado'],
      hint: [
        'Look for missing b (pure) or missing c (spurious) before calculating Δ.',
        'Cerca se manca b (pura) o c (spuria) prima di usare la formula completa.'
      ],
      cats: [
        ['Shortcut (Factor x or Isolate x²)', 'Scorciatoia (Raccogli x o Isola x²)'],
        ['Check Δ = b² − 4ac (Complete / No Real)', 'Formula con Δ (Completa / Impossibile)']
      ],
      items: [
        { n: ['3x² − 12x = 0 (spurious)', '3x² − 12x = 0 (spuria)'], i: 'bolt', c: 0, why: ['Factor 3x(x − 4) = 0 immediately gives x = 0 and x = 4.', 'Raccogliendo 3x(x − 4) = 0 trovi subito x = 0 e x = 4.'] },
        { n: ['2x² − 18 = 0 (pure)', '2x² − 18 = 0 (pura)'], i: 'eye', c: 0, why: ['Isolate x² = 9 → x = ±3 with zero Δ formula needed.', 'Isoli x² = 9 → x = ±3 senza calcolare il Δ.'] },
        { n: ['x² − 6x + 9 = 0 (Δ = 0)', 'x² − 6x + 9 = 0 (Δ = 0)'], i: 'shield', c: 1, why: ['Δ = 36 − 36 = 0 → double root x = 3 from (x − 3)² = 0.', 'Δ = 0: radice doppia x = 3.'] },
        { n: ['x² + 2x + 5 = 0 (Δ < 0)', 'x² + 2x + 5 = 0 (Δ < 0)'], i: 'warn', c: 1, why: ['Δ = 4 − 20 = −16 < 0 → impossible in ℝ.', 'Δ = −16 < 0 → nessuna soluzione reale.'] },
        { n: ['x² − 7x + 10 = 0', 'x² − 7x + 10 = 0'], i: 'layers', c: 1, why: ['Complete quadratic: Δ = 49 − 40 = 9 → x = 2, 5.', 'Equazione completa: Δ = 9 → x = 2 e x = 5.'] }
      ]
    },
    taunt: [
      'A negative discriminant makes your square root explode—surrender to x² + 4 = 0!',
      'Un discriminante negativo manda in fumo la tua radice quadrata: arrenditi!'
    ],
    quiz: [
      q('Solve 2x² − 7x + 3 = 0.', 'Risolvi 2x² − 7x + 3 = 0.', [
        ['x = 3 and x = 1/2', 'x = 3 e x = 1/2'],
        ['x = −3 and x = −1/2', 'x = −3 e x = −1/2'],
        ['x = 3 and x = 2', 'x = 3 e x = 2'],
        ['No real solutions', 'Nessuna soluzione reale']
      ], ['Δ = 49 − 24 = 25, √Δ = 5 → x = (7 ± 5)/4 → x₁ = 3, x₂ = 2/4 = 1/2.', 'Δ = 49 − 24 = 25 → x = (7 ± 5)/4 → 3 e 1/2.']),
      q('How many real solutions does x² + 4x + 7 = 0 have?', 'Quante soluzioni reali ha l’equazione x² + 4x + 7 = 0?', [
        ['0 real solutions (Δ = −12 < 0)', '0 soluzioni reali (Δ = −12 < 0)'],
        ['1 double real solution', '1 soluzione reale doppia'],
        ['2 distinct real solutions', '2 soluzioni reali distinte'],
        ['Infinitely many solutions', 'Infinite soluzioni']
      ], ['Δ = 4² − 4(1)(7) = 16 − 28 = −12 < 0, so no real solutions.', 'Δ = 16 − 28 = −12 < 0: impossibile in ℝ.']),
      q('Solve the spurious equation 5x² − 15x = 0.', 'Risolvi l’equazione spuria 5x² − 15x = 0.', [
        ['x = 0 and x = 3', 'x = 0 e x = 3'],
        ['x = 3 only', 'Solo x = 3'],
        ['x = ±3', 'x = ±3'],
        ['x = 0 and x = −3', 'x = 0 e x = −3']
      ], ['Factor 5x(x − 3) = 0: by zero-product property either x = 0 or x = 3.', 'Raccogliendo 5x(x − 3) = 0 si ottiene x = 0 oppure x = 3.']),
      q('What condition on Δ guarantees two EQUAL (double) real roots?', 'Quale condizione su Δ garantisce due soluzioni reali coincidenti (una radice doppia)?', [
        ['Δ = 0', 'Δ = 0'],
        ['Δ > 0', 'Δ > 0'],
        ['Δ < 0', 'Δ < 0'],
        ['b = 0', 'b = 0']
      ], ['When Δ = 0, (−b ± 0)/(2a) collapses to a single double root −b/(2a).', 'Con Δ = 0 la formula (±√0) dà un’unica radice doppia −b/(2a).']),
      q('Solve the pure equation 4x² − 25 = 0.', 'Risolvi l’equazione pura 4x² − 25 = 0.', [
        ['x = ± 5/2', 'x = ± 5/2'],
        ['x = +5/2 only', 'Solo x = +5/2'],
        ['x = ± 25/4', 'x = ± 25/4'],
        ['No real solutions', 'Nessuna soluzione reale']
      ], ['x² = 25/4 → taking both square roots gives x = ±5/2.', 'x² = 25/4 → estraendo la radice si ottiene x = ±5/2.'])
    ]
  }),

  makeMathAdvMission({
    id: 'math_l2_m5',
    arc: 1,
    sec: 'L2.5',
    pages: '159–192',
    hue: 28,
    title: ['Viète’s Rules, Factoring & Degree-2 Systems', 'Regole di Viète, Scomposizione e Sistemi 2° Grado'],
    topic: [
      'Sum and product of roots, factoring ax²+bx+c, biquadratic & degree-2 systems',
      'Somma e prodotto delle radici, scomposizione del trinomio, biquadratiche e sistemi di 2° grado'
    ],
    demon: ['The Symmetric Hydra', 'L’Idra Simmetrica'],
    tech: ['Viète Form · Fifth Technique: Instant Sum-Product', 'Stile di Viète · Quinta Tecnica: Somma-Prodotto'],
    lessons: [
      {
        vis: 'math10VieteSystems',
        text: [
          '<p>François Viète found a magic X-ray for quadratics: without even solving ax² + bx + c = 0, when Δ ≥ 0 the sum of the two roots is always <b>S = x₁ + x₂ = −b/a</b> and their product is <b>P = x₁ · x₂ = c/a</b>!</p>',
          '<p>François Viète scoprì una scorciatoia geniale: in ax² + bx + c = 0 (con Δ ≥ 0), la somma delle radici è sempre <b>S = x₁ + x₂ = −b/a</b> e il loro prodotto è <b>P = x₁ · x₂ = c/a</b>!</p>'
        ]
      },
      {
        vis: 'math10VieteSystems',
        text: [
          '<p>This works backwards too! Want an equation with roots 3 and 7? Just plug S = 10 and P = 21 into <b>x² − Sx + P = 0</b> → x² − 10x + 21 = 0. And any trinomial factors cleanly as <b>a(x − x₁)(x − x₂)</b>!</p>',
          '<p>Vale anche al contrario! Vuoi un’equazione con soluzioni 3 e 7? Metti S = 10 e P = 21 in <b>x² − Sx + P = 0</b> → x² − 10x + 21 = 0. Ogni trinomio si scompone così: <b>a(x − x₁)(x − x₂)</b>!</p>'
        ]
      },
      {
        vis: 'math10VieteSystems',
        text: [
          '<p>In a <b>degree-2 system</b> (e.g., a straight line intersecting a parabola), isolate one letter from the degree-1 equation, substitute it into the degree-2 equation, solve the quadratic, and recover both (x, y) pairs!</p>',
          '<p>Nei <b>sistemi di 2° grado</b> (es. retta + parabola), ricava una variabile dall’equazione di 1° grado, sostituiscila in quella di 2° grado, trova i valori e ricostruisci le coppie (x, y)!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Sum & Product Quick-Check', 'Verifica Rapida Somma e Prodotto'],
      hint: [
        'For x² + bx + c = 0, S = −b and P = c.',
        'Per x² + bx + c = 0 (a = 1), S = −b e P = c.'
      ],
      cats: [
        ['Correct S = −b/a & P = c/a', 'Valori S e P Corretti'],
        ['Sign or Formula Error', 'Errore di Segno o Formula']
      ],
      items: [
        { n: ['x² − 7x + 12 = 0 → S = 7, P = 12', 'x² − 7x + 12 = 0 → S = 7, P = 12'], i: 'bolt', c: 0, why: ['−(−7)/1 = 7 and 12/1 = 12 (roots 3 and 4).', '−(−7)/1 = 7 e 12/1 = 12 (radici 3 e 4).'] },
        { n: ['x² + 5x + 6 = 0 → S = +5, P = 6', 'x² + 5x + 6 = 0 → S = +5, P = 6'], i: 'warn', c: 1, why: ['Trap! S = −b/a = −5, NOT +5 (roots are −2 and −3).', 'Errore di segno! S = −b/a = −5, non +5.'] },
        { n: ['2x² − 8x + 6 = 0 → S = 4, P = 3', '2x² − 8x + 6 = 0 → S = 4, P = 3'], i: 'shield', c: 0, why: ['−(−8)/2 = 4 and 6/2 = 3.', '−(−8)/2 = 4 e 6/2 = 3.'] },
        { n: ['x⁴ − 5x² + 4 = 0 → solve via t = x²', 'x⁴ − 5x² + 4 = 0 → risolvi con t = x²'], i: 'layers', c: 0, why: ['Biquadratic substitution t = x² yields t = 1, 4 → x = ±1, ±2.', 'Con t = x² ottieni t = 1, 4 → x = ±1, ±2.'] }
      ]
    },
    taunt: [
      'Try finding the roots of 2x² − 14x + 20 without solving the quadratic—watch your signs!',
      'Prova a trovare somma e prodotto di 2x² − 14x + 20 senza sbagliare a dividere per a!'
    ],
    quiz: [
      q('Without solving, what are the sum S and product P of the roots of 3x² − 12x + 6 = 0?', 'Senza risolvere, quanto valgono somma S e prodotto P delle radici di 3x² − 12x + 6 = 0?', [
        ['S = 4, P = 2', 'S = 4, P = 2'],
        ['S = −4, P = 2', 'S = −4, P = 2'],
        ['S = 12, P = 6', 'S = 12, P = 6'],
        ['S = 4, P = −2', 'S = 4, P = −2']
      ], ['S = −b/a = 12/3 = 4 and P = c/a = 6/3 = 2.', 'S = −b/a = 12/3 = 4 e P = c/a = 6/3 = 2.']),
      q('Write a quadratic equation whose solutions are x₁ = 2 and x₂ = 5.', 'Scrivi un’equazione di 2° grado che ha per soluzioni x₁ = 2 e x₂ = 5.', [
        ['x² − 7x + 10 = 0', 'x² − 7x + 10 = 0'],
        ['x² + 7x + 10 = 0', 'x² + 7x + 10 = 0'],
        ['x² − 10x + 7 = 0', 'x² − 10x + 7 = 0'],
        ['x² − 3x − 10 = 0', 'x² − 3x − 10 = 0']
      ], ['S = 2 + 5 = 7 and P = 2 · 5 = 10 → x² − Sx + P = x² − 7x + 10 = 0.', 'S = 7 e P = 10 → x² − Sx + P = x² − 7x + 10 = 0.']),
      q('Factor the trinomial 2x² − 10x + 12 using its roots (2 and 3).', 'Scomponi il trinomio 2x² − 10x + 12 usando le sue radici (2 e 3).', [
        ['2(x − 2)(x − 3)', '2(x − 2)(x − 3)'],
        ['(x − 2)(x − 3)', '(x − 2)(x − 3)'],
        ['2(x + 2)(x + 3)', '2(x + 2)(x + 3)'],
        ['(2x − 2)(2x − 3)', '(2x − 2)(2x − 3)']
      ], ['Never drop the leading coefficient a = 2 in a(x − x₁)(x − x₂)!', 'Non dimenticare mai il coefficiente a = 2 nella formula a(x − x₁)(x − x₂)!']),
      q('Solve the biquadratic equation x⁴ − 13x² + 36 = 0.', 'Risolvi l’equazione biquadratica x⁴ − 13x² + 36 = 0.', [
        ['x = ±2 and x = ±3', 'x = ±2 e x = ±3'],
        ['x = 4 and x = 9 only', 'Solo x = 4 e x = 9'],
        ['x = +2 and x = +3 only', 'Solo x = +2 e x = +3'],
        ['No real solutions', 'Nessuna soluzione reale']
      ], ['Let t = x²: t² − 13t + 36 = 0 → t = 4 or t = 9 → x = ±2, ±3.', 'Poni t = x²: t = 4 oppure t = 9 → x = ±2, ±3.']),
      q('Find the intersections of the system: y = x² and y = x + 6.', 'Trova le intersezioni del sistema: y = x² e y = x + 6.', [
        ['(−2, 4) and (3, 9)', '(−2, 4) e (3, 9)'],
        ['(2, 4) and (−3, 9)', '(2, 4) e (−3, 9)'],
        ['(0, 6) and (6, 36)', '(0, 6) e (6, 36)'],
        ['Only (3, 9)', 'Solo (3, 9)']
      ], ['Set x² = x + 6 → x² − x − 6 = 0 → x = −2 (y = 4) and x = 3 (y = 9).', 'x² = x + 6 → x² − x − 6 = 0 → x = −2 (y = 4) e x = 3 (y = 9).'])
    ]
  }),

  makeMathAdvMission({
    id: 'math_l2_m6',
    arc: 1,
    sec: 'L2.6',
    pages: '193–226',
    hue: 12,
    title: ['Quadratic Inequalities & Parabola Method', 'Disequazioni di 2° Grado (Metodo della Parabola)'],
    topic: [
      'Solving ax²+bx+c > 0 or < 0 via parabola sketch, special Δ ≤ 0 cases & systems',
      'Disequazioni di 2° grado intere con la parabola, casi Δ = 0 e Δ < 0, sistemi di disequazioni'
    ],
    demon: ['The Interval Inverter', 'L’Inverti-Intervalli'],
    tech: ['Parabola Form · Sixth Technique: Outside vs. Inside Scan', 'Stile Parabola · Sesta Tecnica: Interni o Esterni'],
    lessons: [
      {
        vis: 'math10QuadraticSign',
        text: [
          '<p>Think of a happy-face parabola <b>y = ax² + bx + c (with a &gt; 0)</b> as a roller-coaster dipping under sea level (the x-axis) between its two roots x₁ and x₂! Where is the track <b>above sea level (&gt; 0)</b>? <b>Outside</b> the roots (x &lt; x₁ ∨ x &gt; x₂)!</p>',
          '<p>Immagina la parabola con la concavità verso l’alto (<b>a &gt; 0</b>) come una valle che scende sotto il livello del mare (l’asse x) tra le due radici x₁ e x₂! Dove si trova <b>sopra l’acqua (&gt; 0)</b>? Nei valori <b>esterni</b> (x &lt; x₁ ∨ x &gt; x₂)!</p>'
        ]
      },
      {
        vis: 'math10QuadraticSign',
        text: [
          '<p>Where is it <b>underwater (&lt; 0)</b>? Strictly <b>between</b> the roots: <b>x₁ &lt; x &lt; x₂</b>. Step 1 is always making sure <b>a &gt; 0</b> (if a is negative, multiply by −1 and flip &lt; / &gt; first!).</p>',
          '<p>Dove si trova <b>sotto l’acqua (&lt; 0)</b>? Esattamente nei valori <b>interni</b>: <b>x₁ &lt; x &lt; x₂</b>. Primo passo fondamentale: rendi sempre positivo <b>a &gt; 0</b> (se è negativo, cambia tutti i segni e inverti il verso!).</p>'
        ]
      },
      {
        vis: 'math10QuadraticSign',
        text: [
          '<p>Watch the <b>Δ &lt; 0</b> miracle: with a &gt; 0, the whole parabola floats above the x-axis! So ax² + bx + c &gt; 0 is true for <b>ALL x ∈ ℝ</b> (e.g. x² + 1 &gt; 0), while x² + 1 &lt; 0 is <b>impossible</b>!</p>',
          '<p>Attento al caso <b>Δ &lt; 0</b> con a &gt; 0: la parabola galleggia tutta sopra l’asse x! Quindi ax² + bx + c &gt; 0 è vera <b>∀ x ∈ ℝ</b> (es. x² + 1 &gt; 0), mentre x² + 1 &lt; 0 è <b>impossibile</b>!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Pick the Solution Set Shape (with a > 0)', 'Scegli la Forma delle Soluzioni (con a > 0)'],
      hint: [
        'Sketch the U-shaped parabola: above the axis (> 0) or below (< 0)?',
        'Immagina la U della parabola: sopra l’asse (> 0) o sotto l’asse (< 0)?'
      ],
      cats: [
        ['External / All ℝ (Above Axis)', 'Esterni / ∀ x ∈ ℝ (Sopra l’Asse)'],
        ['Internal / Empty (Below Axis)', 'Interni / Nessuna (Sotto l’Asse)']
      ],
      items: [
        { n: ['x² − 9 > 0', 'x² − 9 > 0'], i: 'bolt', c: 0, why: ['Roots ±3, > 0 asks for above axis → x < −3 ∨ x > 3.', 'Radici ±3, > 0 chiede valori esterni: x < −3 ∨ x > 3.'] },
        { n: ['x² − 9 < 0', 'x² − 9 < 0'], i: 'flow', c: 1, why: ['Roots ±3, < 0 asks for underwater → −3 < x < 3.', 'Radici ±3, < 0 chiede valori interni: −3 < x < 3.'] },
        { n: ['x² + 4 > 0 (Δ < 0)', 'x² + 4 > 0 (Δ < 0)'], i: 'shield', c: 0, why: ['x² + 4 is always ≥ 4 > 0 for every real x!', 'Un quadrato + 4 è sempre positivo ∀ x ∈ ℝ!'] },
        { n: ['x² + 4 < 0 (Δ < 0)', 'x² + 4 < 0 (Δ < 0)'], i: 'warn', c: 1, why: ['Can x² + 4 ever be negative in ℝ? Impossible (∅)!', 'x² + 4 non può mai essere negativo in ℝ (∅)!'] },
        { n: ['(x − 3)² ≤ 0 (Δ = 0)', '(x − 3)² ≤ 0 (Δ = 0)'], i: 'eye', c: 1, why: ['Never negative, equals 0 only at a single point x = 3.', 'Non è mai minore di zero; vale 0 solo nel punto x = 3.'] }
      ]
    },
    taunt: [
      'With x² − 5x + 6 < 0, do you choose outside or inside the roots? One slip and you drown!',
      'In x² − 5x + 6 < 0 scegli valori esterni o interni? Un solo errore e sei sconfitto!'
    ],
    quiz: [
      q('Solve the inequality: x² − 5x + 6 < 0.', 'Risolvi la disequazione: x² − 5x + 6 < 0.', [
        ['2 < x < 3', '2 < x < 3'],
        ['x < 2 ∨ x > 3', 'x < 2 ∨ x > 3'],
        ['−3 < x < −2', '−3 < x < −2'],
        ['∀ x ∈ ℝ', '∀ x ∈ ℝ']
      ], ['Roots are 2 and 3. With a = 1 > 0, "< 0" takes the inside interval: 2 < x < 3.', 'Le radici sono 2 e 3; con a > 0 il segno "< 0" prende i valori interni: 2 < x < 3.']),
      q('Solve the inequality: x² − 4 ≥ 0.', 'Risolvi la disequazione: x² − 4 ≥ 0.', [
        ['x ≤ −2 ∨ x ≥ 2', 'x ≤ −2 ∨ x ≥ 2'],
        ['−2 ≤ x ≤ 2', '−2 ≤ x ≤ 2'],
        ['x ≥ 2 only', 'Solo x ≥ 2'],
        ['No real solutions', 'Nessuna soluzione reale']
      ], ['Roots are ±2; ≥ 0 takes the outer rays including endpoints.', 'Le radici sono ±2; ≥ 0 richiede valori esterni compresi gli estremi.']),
      q('What is the solution of −x² + 9 > 0?', 'Qual è la soluzione di −x² + 9 > 0?', [
        ['−3 < x < 3', '−3 < x < 3'],
        ['x < −3 ∨ x > 3', 'x < −3 ∨ x > 3'],
        ['x > 3', 'x > 3'],
        ['Impossible', 'Impossibile']
      ], ['Multiply by −1 and flip sign: x² − 9 < 0 → inside interval −3 < x < 3!', 'Cambia segno e inverti il verso: x² − 9 < 0 → −3 < x < 3!']),
      q('What is the solution set of (x − 4)² > 0?', 'Qual è l’insieme delle soluzioni di (x − 4)² > 0?', [
        ['∀ x ∈ ℝ with x ≠ 4', '∀ x ∈ ℝ con x ≠ 4'],
        ['Only x = 4', 'Solo x = 4'],
        ['∀ x ∈ ℝ (including 4)', '∀ x ∈ ℝ (incluso 4)'],
        ['No real solutions', 'Nessuna soluzione reale']
      ], ['A square is always > 0 except at x = 4 where (4 − 4)² = 0.', 'Un quadrato è sempre > 0 tranne nel vertice x = 4 dove si annulla.']),
      q('What is the solution of x² + 16 < 0 in ℝ?', 'Qual è la soluzione di x² + 16 < 0 in ℝ?', [
        ['Impossible (empty set ∅)', 'Impossibile (insieme vuoto ∅)'],
        ['−4 < x < 4', '−4 < x < 4'],
        ['x < −4 ∨ x > 4', 'x < −4 ∨ x > 4'],
        ['∀ x ∈ ℝ', '∀ x ∈ ℝ']
      ], ['x² ≥ 0 for every real number, so x² + 16 ≥ 16 can never be < 0.', 'x² + 16 è sempre almeno 16, quindi mai negativo in ℝ.'])
    ]
  }),

  // =========================================================================
  // CHAPTER 3: Euclidean Theorems, Similarity & Probability
  // =========================================================================
  makeMathAdvMission({
    id: 'math_l2_m7',
    arc: 2,
    sec: 'L2.7',
    pages: '227–260',
    hue: 150,
    title: ['Pythagoras & Euclid’s 1st & 2nd Theorems', 'Pitagora e 1° e 2° Teorema di Euclide'],
    topic: [
      'Right-triangle projections on the hypotenuse, Euclid’s 1st and 2nd theorems & Pythagoras',
      'Proiezioni dei cateti sull’ipotenusa, primo e secondo teorema di Euclide e Pitagora'
    ],
    demon: ['The Hypotenuse Warden', 'Il Guardiano dell’Ipotenusa'],
    tech: ['Euclid Form · Seventh Technique: Projection Balance', 'Stile di Euclide · Settima Tecnica: Proiezione Ortogonale'],
    lessons: [
      {
        vis: 'math10EuclidPythagoras',
        text: [
          '<p>Drop the altitude <b>h</b> from the 90° corner of a right triangle straight down onto hypotenuse <b>a</b>. Like two shadows cast from overhead sun, the hypotenuse splits into two projections <b>p₁</b> and <b>p₂</b> (so a = p₁ + p₂)!</p>',
          '<p>Traccia l’altezza <b>h</b> dall’angolo retto fino all’ipotenusa <b>a</b>. Come due ombre proiettate dal sole a picco, l’ipotenusa si divide nelle due proiezioni <b>p₁</b> e <b>p₂</b> (quindi a = p₁ + p₂)!</p>'
        ]
      },
      {
        vis: 'math10EuclidPythagoras',
        text: [
          '<p><b>Euclid’s 1st Theorem</b> says the square on a leg equals the rectangle made by the full hypotenuse and its own shadow: <b>b² = a · p₁</b> (and <b>c² = a · p₂</b>). Adding them even proves Pythagoras: b² + c² = a(p₁ + p₂) = a²!</p>',
          '<p>Il <b>1° Teorema di Euclide</b> dice che il quadrato su un cateto equivale al rettangolo tra tutta l’ipotenusa e la sua proiezione: <b>b² = a · p₁</b> (e <b>c² = a · p₂</b>). Sommandoli dimostri anche Pitagora: b² + c² = a(p₁ + p₂) = a²!</p>'
        ]
      },
      {
        vis: 'math10EuclidPythagoras',
        text: [
          '<p><b>Euclid’s 2nd Theorem</b> connects the two shadows directly to the altitude: <b>h² = p₁ · p₂</b> (the altitude is the mean proportional between the two projections!). Example: shadows 4 and 9 give h = √(4 · 9) = 6.</p>',
          '<p>Il <b>2° Teorema di Euclide</b> lega l’altezza alle due proiezioni: <b>h² = p₁ · p₂</b> (l’altezza è medio proporzionale tra le due proiezioni!). Esempio: con proiezioni 4 e 9, h = √(4 · 9) = 6.</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Match Formula to Euclidean Law', 'Abbina la Formula al Teorema Giusto'],
      hint: [
        '1st Euclid uses leg + full hypotenuse; 2nd Euclid uses altitude h + both projections p₁, p₂.',
        'Il 1° Teorema usa cateto e ipotenusa; il 2° usa altezza h e le due proiezioni.'
      ],
      cats: [
        ['1st Euclid / Pythagoras', '1° Euclide / Pitagora'],
        ['2nd Euclid (Altitude Law)', '2° Teorema di Euclide']
      ],
      items: [
        { n: ['h² = p₁ · p₂', 'h² = p₁ · p₂'], i: 'bolt', c: 1, why: ['Euclid’s 2nd Theorem links altitude h to both projections.', 'Il 2° Teorema lega l’altezza h alle due proiezioni.'] },
        { n: ['b² = a · p₁', 'b² = a · p₁'], i: 'shield', c: 0, why: ['Euclid’s 1st Theorem relates leg b, hypotenuse a, and shadow p₁.', 'Il 1° Teorema lega cateto, ipotenusa e proiezione.'] },
        { n: ['p₁ : h = h : p₂', 'p₁ : h = h : p₂'], i: 'eye', c: 1, why: ['Proportion form of Euclid’s 2nd Theorem (h² = p₁ · p₂).', 'Forma proporzionale del 2° Teorema di Euclide.'] },
        { n: ['a² = b² + c²', 'a² = b² + c²'], i: 'layers', c: 0, why: ['Pythagorean theorem for right triangles.', 'Teorema di Pitagora per triangoli rettangoli.'] }
      ]
    },
    taunt: [
      'You know the two shadows p₁ and p₂—let us see if you can rebuild the triangle height!',
      'Conosci le due proiezioni sull’ipotenusa: vediamo se riesci a risalire all’altezza!'
    ],
    quiz: [
      q('In a right triangle, the projections of the legs on the hypotenuse are p₁ = 4 cm and p₂ = 9 cm. Find altitude h.', 'In un triangolo rettangolo le proiezioni dei cateti sull’ipotenusa misurano 4 cm e 9 cm. Trova l’altezza h.', [
        ['6 cm', '6 cm'],
        ['13 cm', '13 cm'],
        ['36 cm', '36 cm'],
        ['6.5 cm', '6,5 cm']
      ], ['By Euclid’s 2nd Theorem, h² = p₁ · p₂ = 4 · 9 = 36 → h = 6 cm.', 'Per il 2° Teorema di Euclide: h² = 4 · 9 = 36 → h = 6 cm.']),
      q('Hypotenuse a = 25 cm and projection p₁ = 9 cm. Find leg b using Euclid’s 1st Theorem.', 'Ipotenusa a = 25 cm e proiezione p₁ = 9 cm. Trova il cateto b col 1° Teorema di Euclide.', [
        ['15 cm', '15 cm'],
        ['12 cm', '12 cm'],
        ['16 cm', '16 cm'],
        ['20 cm', '20 cm']
      ], ['b² = a · p₁ = 25 · 9 = 225 → b = √225 = 15 cm.', 'b² = 25 · 9 = 225 → b = 15 cm.']),
      q('If a triangle has sides 6 cm, 8 cm, and 10 cm, what type of triangle is it?', 'Un triangolo ha lati 6 cm, 8 cm e 10 cm. Di che triangolo si tratta?', [
        ['Right triangle (6² + 8² = 10²)', 'Triangolo rettangolo (6² + 8² = 10²)'],
        ['Equilateral triangle', 'Triangolo equilatero'],
        ['Obtuse triangle', 'Triangolo ottusangolo'],
        ['Impossible triangle', 'Triangolo impossibile']
      ], ['36 + 64 = 100 = 10² satisfies Pythagoras’ converse, so it is a right triangle.', '36 + 64 = 100 = 10²: per l’inverso di Pitagora è rettangolo.']),
      q('For a square of side L, what is the exact diagonal length?', 'Per un quadrato di lato L, quanto vale esattamente la diagonale?', [
        ['L√2', 'L√2'],
        ['2L', '2L'],
        ['L√3', 'L√3'],
        ['L / 2', 'L / 2']
      ], ['Diagonal d = √(L² + L²) = √(2L²) = L√2.', 'Diagonale d = √(L² + L²) = L√2.']),
      q('In an equilateral triangle of side 6 cm, what is the height h?', 'In un triangolo equilatero di lato 6 cm, quanto misura l’altezza h?', [
        ['3√3 cm', '3√3 cm'],
        ['3√2 cm', '3√2 cm'],
        ['6 cm', '6 cm'],
        ['3 cm', '3 cm']
      ], ['Half-base is 3, hypotenuse is 6: h = √(6² − 3²) = √27 = 3√3 cm.', 'Metà base è 3: h = √(6² − 3²) = √27 = 3√3 cm.'])
    ]
  }),

  makeMathAdvMission({
    id: 'math_l2_m8',
    arc: 2,
    sec: 'L2.8',
    pages: '261–290',
    hue: 245,
    title: ['Thales, Similarity & Circle Theorems', 'Talete, Similitudine e Circonferenza'],
    topic: [
      'Thales parallel segments, similar triangles & area scaling k², inscribed vs. central angles',
      'Teorema di Talete, triangoli simili (rapporto k e k² per le aree), angoli al centro e alla circonferenza'
    ],
    demon: ['The Scale Deceiver', 'L’Ingannatore di Scale'],
    tech: ['Circle Form · Eighth Technique: Similarity Ratio', 'Stile del Cerchio · Ottava Tecnica: Rapporto di Similitudine'],
    lessons: [
      {
        vis: 'math10ThalesCircle',
        text: [
          '<p><b>Thales’ Theorem</b> says parallel rungs cut any two ladders into matching proportions: <b>AB : BC = A’B’ : B’C’</b>! This makes triangles with equal angles <b>similar</b>—exact scale models of each other.</p>',
          '<p>Il <b>Teorema di Talete</b> afferma che un fascio di rette parallele taglia due trasversali in segmenti direttamente proporzionali: <b>AB : BC = A’B’ : B’C’</b>! Da qui nascono i triangoli <b>simili</b> (stessa forma, scala k).</p>'
        ]
      },
      {
        vis: 'math10ThalesCircle',
        text: [
          '<p>Watch the <b>scaling law</b> carefully! If you double every side of a shape (k = 2), its perimeter doubles (×2), but its <b>AREA multiplies by k² = 4</b>! Imagine four small tiles needed to build one 2×-wider square.</p>',
          '<p>Attenzione alla <b>legge di scala</b>! Se raddoppi i lati di una figura (k = 2), il perimetro raddoppia (×2), ma l’<b>AREA diventa k² = 4 volte</b> più grande! Servono infatti 4 piastrelle per fare un quadrato di lato doppio.</p>'
        ]
      },
      {
        vis: 'math10ThalesCircle',
        text: [
          '<p>Inside any circle, a <b>central angle</b> (vertex at center O) is always <b>twice (2×)</b> the <b>inscribed angle</b> standing on the same arc! That’s why every triangle inscribed in a <b>semicircle</b> (180° / 2) is always a <b>90° right triangle</b>!</p>',
          '<p>In una circonferenza, ogni <b>angolo al centro</b> è sempre il <b>doppio (2×)</b> dell’<b>angolo alla circonferenza</b> che insiste sullo stesso arco! Ecco perché ogni triangolo inscritto in una <b>semicirconferenza</b> (180° / 2) è sempre rettangolo (<b>90°</b>)!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Length Ratio (k) vs. Area Ratio (k²)', 'Rapporto Lineare (k) vs. Rapporto delle Aree (k²)'],
      hint: [
        '1D lengths (sides, perimeters, altitudes) scale by k; 2D areas scale by k².',
        'Le lunghezze (lati, perimetri, altezze) scalano di k; le aree scalano di k².'
      ],
      cats: [
        ['Scales by k (1D)', 'Scala di k (Lunghezze)'],
        ['Scales by k² (2D)', 'Scala di k² (Aree)']
      ],
      items: [
        { n: ['Perimeter of a similar triangle', 'Perimetro di un triangolo simile'], i: 'flow', c: 0, why: ['Perimeter is a 1D sum of sides, so it scales by k.', 'Il perimetro è una misura lineare: scala di k.'] },
        { n: ['Surface area of a similar polygon', 'Area di un poligono simile'], i: 'layers', c: 1, why: ['Area is length × height, so both factors multiply by k → k²!', 'L’area è prodotto di due lunghezze: scala di k²!'] },
        { n: ['Altitude or median of similar triangles', 'Altezza o mediana corrispondente'], i: 'bolt', c: 0, why: ['Corresponding altitudes and medians are lengths, scaling by k.', 'Altezze e mediane sono lunghezze lineari: scalano di k.'] },
        { n: ['Pizza area when diameter triples (3×)', 'Area della pizza se triplichi il diametro'], i: 'shield', c: 1, why: ['Tripling radius gives 3² = 9 times as much pizza!', 'Triplicando il diametro ottieni 3² = 9 volte più pizza!'] }
      ]
    },
    taunt: [
      'Double the side, double the area—right? Step into my scaling trap!',
      'Raddoppi il lato e raddoppi l’area, giusto? Cadi pure nel mio tranello!'
    ],
    quiz: [
      q('Two similar triangles have side ratio k = 3. What is the ratio of their AREAS?', 'Due triangoli simili hanno rapporto tra i lati k = 3. Qual è il rapporto tra le loro AREE?', [
        ['9 (k² = 3²)', '9 (k² = 3²)'],
        ['3', '3'],
        ['6', '6'],
        ['27', '27']
      ], ['Areas of similar figures scale as the square of the linear ratio: k² = 3² = 9.', 'Le aree di figure simili stanno tra loro come il quadrato del rapporto di similitudine: 3² = 9.']),
      q('A central angle measures 110°. How big is an inscribed angle on the same arc?', 'Un angolo al centro misura 110°. Quanto misura l’angolo alla circonferenza sullo stesso arco?', [
        ['55°', '55°'],
        ['220°', '220°'],
        ['110°', '110°'],
        ['70°', '70°']
      ], ['An inscribed angle is always half of its central angle: 110° / 2 = 55°.', 'L’angolo alla circonferenza è la metà del corrispondente angolo al centro: 110° / 2 = 55°.']),
      q('What is always true about a triangle inscribed in a semicircle with the diameter as one side?', 'Cosa vale sempre per un triangolo inscritto in una semicirconferenza con il diametro come lato?', [
        ['It is a right triangle (90° opposite the diameter)', 'È un triangolo rettangolo (90° opposto al diametro)'],
        ['It is always equilateral', 'È sempre equilatero'],
        ['Its perimeter equals πd', 'Il perimetro vale πd'],
        ['It has an obtuse angle of 120°', 'Ha un angolo ottuso di 120°']
      ], ['The central angle of a semicircle is 180°, so the inscribed angle is 180°/2 = 90°.', 'L’angolo al centro del diametro è 180°, quindi l’angolo inscritto è 90°.']),
      q('By Thales’ Theorem, three parallels cut two lines into segments 4, 6 on line 1 and 6, x on line 2. Find x.', 'Per il teorema di Talete, tre parallele tagliano segmenti 4 e 6 su r₁ e 6, x su r₂. Trova x.', [
        ['x = 9', 'x = 9'],
        ['x = 8', 'x = 8'],
        ['x = 4', 'x = 4'],
        ['x = 12', 'x = 12']
      ], ['4 : 6 = 6 : x → x = (6 · 6) / 4 = 36 / 4 = 9.', '4 : 6 = 6 : x → x = 36 / 4 = 9.']),
      q('In any quadrilateral inscribed in a circle, what is the sum of two opposite angles?', 'In un quadrilatero inscritto in una circonferenza, quanto vale la somma di due angoli opposti?', [
        ['180° (supplementary)', '180° (supplementari)'],
        ['90° (complementary)', '90° (complementari)'],
        ['360°', '360°'],
        ['120°', '120°']
      ], ['Their central angles cover the full 360° circle, so half of 360° = 180°.', 'I rispettivi angoli al centro coprono tutto l’angolo giro (360°), quindi la metà è 180°.'])
    ]
  }),

  makeMathAdvMission({
    id: 'math_l2_m9',
    arc: 2,
    sec: 'L2.9',
    pages: '291–320',
    hue: 332,
    horns: 3,
    eyes: 3,
    boss: true,
    title: ['Probability & Combined Trial (Boss)', 'Probabilità e Sfida Finale (Boss)'],
    topic: [
      'Classical & frequentist probability, complement rule, union/intersection & independent trials',
      'Probabilità classica e frequentista, evento contrario, unione/intersezione e prove indipendenti'
    ],
    demon: ['Lord Alea, the Chance Architect', 'Lord Alea, l’Architetto del Caso'],
    tech: ['Master Form · Grade 10 Capstone: Probability Shield', 'Stile Maestro · Prova 2° Sup.: Scudo della Probabilità'],
    lessons: [
      {
        vis: 'math10Probability',
        text: [
          '<p>Probability turns luck into exact numbers between <b>0 (impossible)</b> and <b>1 (certain)</b>! Count equally likely outcomes: <b>P(E) = favorable outcomes ÷ total possible outcomes</b>. And the opposite event is effortless: <b>P(not E) = 1 − P(E)</b>!</p>',
          '<p>La probabilità trasforma il caso in un numero tra <b>0 (impossibile)</b> e <b>1 (certo)</b>! Con casi equiprobabili: <b>P(E) = casi favorevoli ÷ casi possibili</b>. E per l’evento contrario basta sottrarre da 1: <b>P(Ē) = 1 − P(E)</b>!</p>'
        ]
      },
      {
        vis: 'math10Probability',
        text: [
          '<p>Watch the <b>OR vs. AND rule</b>! For “A <b>OR</b> B” (union): <b>P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</b> (subtract the overlap so you don’t count any card twice!). For “A <b>AND</b> B” on independent steps (like flipping two coins): <b>multiply P(A) · P(B)</b>!</p>',
          '<p>Attento a <b>O (unione) vs. E (intersezione)</b>! Per «A <b>O</b> B»: <b>P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</b> (togli la parte comune per non contarla due volte!). Per «A <b>E</b> B» in prove indipendenti (due lanci): <b>moltiplica P(A) · P(B)</b>!</p>'
        ]
      },
      {
        vis: 'math10Probability',
        text: [
          '<p>Why do casinos and simulations trust probability? By the <b>Law of Large Numbers</b> (<i>frequentist view</i>), as you repeat a fair experiment hundreds or thousands of times, the observed relative frequency f/N settles closer and closer to the theoretical P(E)!</p>',
          '<p>Per la <b>Legge dei Grandi Numeri</b> (<i>concezione frequentista</i>), ripetendo un esperimento centinaia o migliaia di volte, la frequenza relativa osservata f/N si stabilizza intorno alla probabilità teorica P(E)!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Add (+ / Union) vs. Multiply (· / Independent Steps)', 'Somma (Unione O) vs. Moltiplica (Prove Ripetute E)'],
      hint: [
        'One single draw with "A or B" adds; consecutive independent steps "First A, then B" multiply.',
        'Una singola estrazione con "A oppure B" somma; eventi successivi "prima A poi B" moltiplicano.'
      ],
      cats: [
        ['Union OR (Add, subtract overlap)', 'Unione O (Somma, togli intersezione)'],
        ['Sequence AND (Multiply)', 'Sequenza E (Moltiplica)']
      ],
      items: [
        { n: ['Rolling an even OR > 4 on one die', 'Uscita di un pari O > 4 con un dado'], i: 'bolt', c: 0, why: ['Single roll with OR: {2,4,6} ∪ {5,6} = {2,4,5,6} → P = 4/6.', 'Lancio singolo con O: 3/6 + 2/6 − 1/6 = 4/6.'] },
        { n: ['Flipping Heads twice in a row', 'Ottenere Testa due volte di fila'], i: 'flow', c: 1, why: ['Two independent flips: 1/2 × 1/2 = 1/4.', 'Due lanci indipendenti: 1/2 × 1/2 = 1/4.'] },
        { n: ['Drawing a Heart OR a King (1 card)', 'Estrarre una carta di Cuori O un Re'], i: 'layers', c: 0, why: ['Subtract the King of Hearts once so it is not double-counted!', 'Sottrai il Re di Cuori per non contarlo due volte!'] },
        { n: ['Rolling two 6s on two dice', 'Fare doppio 6 con due dadi'], i: 'shield', c: 1, why: ['1/6 × 1/6 = 1/36.', '1/6 × 1/6 = 1/36.'] }
      ]
    },
    taunt: [
      'I have mastered linear systems, Δ, Euclid, and dice—prove your Grade 10 math mastery!',
      'Domino sistemi, discriminante Δ, Euclide e dadi: dimostra la tua maestria di 2ª Superiore!'
    ],
    quiz: [
      q('A bag contains 3 red, 5 blue, and 2 green marbles. What is the probability of drawing a marble that is NOT red?', 'Un’urna contiene 3 palline rosse, 5 blu e 2 verdi. Qual è la probabilità di estrarre una pallina NON rossa?', [
        ['7/10 (or 0.7)', '7/10 (oppure 0,7)'],
        ['3/10', '3/10'],
        ['5/10', '5/10'],
        ['1/3', '1/3']
      ], ['Total = 10 marbles; P(red) = 3/10, so P(not red) = 1 − 3/10 = 7/10.', 'Totale = 10 palline; P(rossa) = 3/10, quindi P(non rossa) = 1 − 3/10 = 7/10.']),
      q('Two fair 6-sided dice are rolled. What is the probability that the sum equals 7?', 'Lanciando due dadi equi a 6 facce, qual è la probabilità che la somma sia 7?', [
        ['6/36 = 1/6', '6/36 = 1/6'],
        ['1/36', '1/36'],
        ['7/36', '7/36'],
        ['1/12', '1/12']
      ], ['Out of 36 pairs, six sum to 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) → 6/36 = 1/6.', 'Su 36 coppie, 6 danno somma 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) → 1/6.']),
      q('From a standard 52-card deck, what is P(Heart OR King)? (13 Hearts, 4 Kings, 1 King of Hearts)', 'Da un mazzo da 52 carte, qual è P(Cuori O Re)? (13 Cuori, 4 Re, 1 Re di Cuori)', [
        ['16/52 = 4/13', '16/52 = 4/13'],
        ['17/52', '17/52'],
        ['13/52', '13/52'],
        ['52/52', '52/52']
      ], ['P(H ∪ K) = 13/52 + 4/52 − 1/52 = 16/52 = 4/13.', 'P(C ∪ R) = 13/52 + 4/52 − 1/52 = 16/52 = 4/13.']),
      q('A coin is tossed 3 times independently. What is the probability of getting AT LEAST one Head?', 'Lanciando una moneta 3 volte, qual è la probabilità di ottenere ALMENO una Testa?', [
        ['7/8', '7/8'],
        ['1/8', '1/8'],
        ['3/8', '3/8'],
        ['1/2', '1/2']
      ], ['Use the complement! Only TTT has zero Heads (1/8), so 1 − 1/8 = 7/8.', 'Usa il complementare! Solo CCC non ha alcuna Testa (1/8), quindi 1 − 1/8 = 7/8.']),
      q('Combined review: A parabola-like quadratic x² − 5x + 4 ≤ 0 gives integer solutions. How many integers satisfy it?', 'Verifica finale: quanti numeri interi soddisfano x² − 5x + 4 ≤ 0?', [
        ['4 integers (1, 2, 3, 4)', '4 numeri interi (1, 2, 3, 4)'],
        ['2 integers (1 and 4)', '2 numeri interi (1 e 4)'],
        ['3 integers (2, 3, 4)', '3 numeri interi (2, 3, 4)'],
        ['Infinitely many integers', 'Infiniti numeri interi']
      ], ['(x − 1)(x − 4) ≤ 0 holds for 1 ≤ x ≤ 4, which includes 1, 2, 3, and 4.', '(x − 1)(x − 4) ≤ 0 vale per 1 ≤ x ≤ 4: gli interi sono 1, 2, 3 e 4.'])
    ]
  })
];
