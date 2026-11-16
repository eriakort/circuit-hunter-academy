import type { ArcInfo, Mission, UnitInfo } from '../types';
import { makeMathAdvMission, q } from './mathAdvCommon';

export const MATH11_UNIT: UnitInfo = {
  title: ['Level 3 · 3°/4° Superiore (Functions, Conics, Log & Trig)', 'Livello 3 · 3°/4° Superiore (Funzioni, Coniche, Logaritmi e Trigonometria)'],
  ch: 'L3.1–L3.3',
  subject: 'math11'
};

export const MATH11_ARCS: ArcInfo[] = [
  {
    n: 1,
    unit: 0,
    subject: 'math11',
    title: ['Functions, Moduli & Irrational Algebra', 'Funzioni, Moduli e Equazioni Irrazionali'],
    pages: '1–116'
  },
  {
    n: 2,
    unit: 0,
    subject: 'math11',
    title: ['Analytic Geometry: The Conic Sections', 'Geometria Analitica: Le Coniche'],
    pages: '117–240'
  },
  {
    n: 3,
    unit: 0,
    subject: 'math11',
    title: ['Exponentials, Logarithms & Trigonometry', 'Esponenziali, Logaritmi e Trigonometria'],
    pages: '241–368'
  }
];

export const MATH11_MISSIONS: Mission[] = [
  // =========================================================================
  // CHAPTER 1: Functions, Moduli & Irrational Algebra
  // =========================================================================
  makeMathAdvMission({
    id: 'math_l3_m1',
    arc: 0,
    sec: 'L3.1',
    pages: '1–40',
    hue: 205,
    title: ['Real Functions: Domain, Parity & Inverse', 'Funzioni Reali: Dominio, Parità e Inversa'],
    topic: [
      'Domain rules (fractions, even roots, logs), even/odd symmetry, injective/bijective & inverse functions',
      'Dominio (C.E.), funzioni pari/dispari, iniettive/biettive, funzione composta e funzione inversa'
    ],
    demon: ['The Domain Gatekeeper', 'Il Guardiano del Dominio'],
    tech: ['Analysis Form · First Technique: Domain Lock', 'Stile dell’Analisi · Prima Tecnica: Filtro del Dominio'],
    lessons: [
      {
        vis: 'math11Functions',
        text: [
          '<p>Think of a function <b>y = f(x)</b> as a vending machine: every valid button press <i>x</i> delivers one exact snack <i>y</i>! The <b>domain</b> is the list of safe inputs that won’t break the machine: denominators ≠ 0, even roots ≥ 0, and log arguments &gt; 0.</p>',
          '<p>Pensa a una funzione <b>y = f(x)</b> come a un distributore automatico: a ogni tasto <i>x</i> ammesso corrisponde un solo risultato <i>y</i>! Il <b>dominio</b> sono gli ingressi sicuri: denominatori ≠ 0, radici pari ≥ 0 e argomenti dei logaritmi &gt; 0.</p>'
        ]
      },
      {
        vis: 'math11Functions',
        text: [
          '<p>Check graph symmetry in seconds: if <b>f(−x) = f(x)</b> (like x² or cos x), the function is <b>EVEN</b> (mirrors left–right across the y-axis). If <b>f(−x) = −f(x)</b> (like x³ or sin x), it is <b>ODD</b> (flips upside-down around the origin).</p>',
          '<p>Controlla la simmetria al volo: se <b>f(−x) = f(x)</b> (come x² o cos x), la funzione è <b>PARI</b> (specchiata rispetto all’asse y). Se <b>f(−x) = −f(x)</b> (come x³ o sin x), è <b>DISPARI</b> (simmetrica rispetto all’origine).</p>'
        ]
      },
      {
        vis: 'math11Functions',
        text: [
          '<p>A function is <b>bijective</b> (one-to-one and onto) if every horizontal line hits it once. Only bijective functions have an <b>inverse f⁻¹</b>, whose graph is simply the mirror reflection across the diagonal line <b>y = x</b>!</p>',
          '<p>Una funzione è <b>biettiva</b> (iniettiva e suriettiva) quando ogni retta orizzontale la tocca al massimo una volta. Solo le funzioni biettive hanno un’<b>inversa f⁻¹</b>, che sul grafico è il riflesso speculare rispetto alla bisettrice <b>y = x</b>!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Even Symmetry vs. Odd Symmetry', 'Funzione Pari vs. Funzione Dispari'],
      hint: [
        'Test what happens when you plug −x instead of x.',
        'Sostituisci −x al posto di x e osserva se il segno resta uguale o si capovolge.'
      ],
      cats: [
        ['Even: f(−x) = f(x)', 'Pari: f(−x) = f(x)'],
        ['Odd: f(−x) = −f(x)', 'Dispari: f(−x) = −f(x)']
      ],
      items: [
        { n: ['f(x) = x² + 3', 'f(x) = x² + 3'], i: 'layers', c: 0, why: ['(−x)² + 3 = x² + 3: symmetric across the y-axis.', '(−x)² + 3 = x² + 3: simmetrica rispetto all’asse y.'] },
        { n: ['f(x) = x³ − 2x', 'f(x) = x³ − 2x'], i: 'bolt', c: 1, why: ['(−x)³ − 2(−x) = −(x³ − 2x) = −f(x).', 'Tutte le potenze sono dispari: f(−x) = −f(x).'] },
        { n: ['f(x) = |x|', 'f(x) = |x|'], i: 'shield', c: 0, why: ['|−x| = |x| makes a symmetric V across the y-axis.', '|−x| = |x| forma una V simmetrica sull’asse y.'] },
        { n: ['f(x) = 1 / x', 'f(x) = 1 / x'], i: 'flow', c: 1, why: ['1/(−x) = −(1/x): origin symmetry.', '1/(−x) = −(1/x): simmetrica rispetto all’origine.'] }
      ]
    },
    taunt: [
      'Divide by zero, take √ of a negative—step inside my broken domain!',
      'Dividi per zero o metti un negativo sotto radice pari: il tuo dominio crollerà!'
    ],
    quiz: [
      q('Find the natural domain of f(x) = √(x − 2) / (x − 6).', 'Determina il dominio naturale di f(x) = √(x − 2) / (x − 6).', [
        ['x ≥ 2 with x ≠ 6', 'x ≥ 2 con x ≠ 6'],
        ['x > 2 with x ≠ 6', 'x > 2 con x ≠ 6'],
        ['All real numbers except 6', 'Tutti i reali tranne 6'],
        ['x ≥ 6', 'x ≥ 6']
      ], ['Numerator needs x − 2 ≥ 0 (x ≥ 2) AND denominator requires x − 6 ≠ 0 (x ≠ 6).', 'Radicando ≥ 0 impone x ≥ 2 e denominatore ≠ 0 esclude x = 6.']),
      q('Which property defines an ODD function?', 'Quale relazione definisce una funzione DISPARI?', [
        ['f(−x) = −f(x)', 'f(−x) = −f(x)'],
        ['f(−x) = f(x)', 'f(−x) = f(x)'],
        ['f(x) > 0 for all x', 'f(x) > 0 per ogni x'],
        ['f(0) = 1', 'f(0) = 1']
      ], ['An odd function flips sign when x flips sign, giving origin symmetry.', 'Una funzione dispari inverte il segno cambiando x in −x (simmetria centrale in O).']),
      q('If f(x) = 2x − 6, what is the inverse function f⁻¹(x)?', 'Se f(x) = 2x − 6, qual è la funzione inversa f⁻¹(x)?', [
        ['f⁻¹(x) = (x + 6) / 2', 'f⁻¹(x) = (x + 6) / 2'],
        ['f⁻¹(x) = 1 / (2x − 6)', 'f⁻¹(x) = 1 / (2x − 6)'],
        ['f⁻¹(x) = 2x + 6', 'f⁻¹(x) = 2x + 6'],
        ['f⁻¹(x) = (x − 6) / 2', 'f⁻¹(x) = (x − 6) / 2']
      ], ['Swap x and y: x = 2y − 6 → 2y = x + 6 → y = (x + 6)/2.', 'Scambia x e y: x = 2y − 6 → y = (x + 6)/2.']),
      q('Given f(x) = x + 3 and g(x) = x², what is the composite function g(f(x))?', 'Date f(x) = x + 3 e g(x) = x², quanto vale la funzione composta g(f(x))?', [
        ['(x + 3)²', '(x + 3)²'],
        ['x² + 3', 'x² + 3'],
        ['x² + 3x', 'x² + 3x'],
        ['(x² + 3)²', '(x² + 3)²']
      ], ['Apply f first (x + 3), then feed that whole result into g (square it) → (x + 3)².', 'Applica prima f (x + 3), poi passa il risultato a g → (x + 3)².']),
      q('Why is f(x) = x² (over all ℝ) NOT invertible unless we restrict its domain?', 'Perché f(x) = x² su tutto ℝ NON è invertibile senza restringere il dominio?', [
        ['It fails the horizontal line test (not injective: f(−2) = f(2) = 4)', 'Non è iniettiva (f(−2) = f(2) = 4)'],
        ['Its graph crosses the y-axis', 'Il grafico tocca l’asse y'],
        ['It has a denominator of zero', 'Ha un denominatore nullo'],
        ['Squaring numbers is never continuous', 'L’elevamento al quadrato non è continuo']
      ], ['Two inputs (−2 and +2) share output 4, so an inverse could not return a single x.', 'Due ingressi (−2 e +2) danno la stessa uscita 4: non si può invertire univocamente su tutto ℝ.'])
    ]
  }),

  makeMathAdvMission({
    id: 'math_l3_m2',
    arc: 0,
    sec: 'L3.2',
    pages: '41–78',
    hue: 266,
    title: ['Absolute Value & Fractional Sign Charts', 'Valore Assoluto e Disequazioni Fratte'],
    topic: [
      'Equations and inequalities with |f(x)|, geometric distance interpretation & sign-chart method',
      'Equazioni e disequazioni con moduli, interpretazione geometrica della distanza e quadro dei segni'
    ],
    demon: ['The Mirror Flipper', 'Il Ribalta-Moduli'],
    tech: ['Modulus Form · Second Technique: V-Graph Bounce', 'Stile del Modulo · Seconda Tecnica: Rimbalzo a V'],
    lessons: [
      {
        vis: 'math11AbsSign',
        text: [
          '<p>Remember: <b>|x − c|</b> simply means “how many steps away from <i>c</i> you are on the ruler”! So <b>|x − 2| &lt; 3</b> means staying strictly within 3 steps of 2 → <b>−1 &lt; x &lt; 5</b>! And <b>|x − 2| &gt; 3</b> means moving farther away: x &lt; −1 ∨ x &gt; 5.</p>',
          '<p>Ricorda: <b>|x − c|</b> misura semplicemente la “distanza da <i>c</i> sulla retta”! Quindi <b>|x − 2| &lt; 3</b> vuol dire restare a meno di 3 passi da 2 → <b>−1 &lt; x &lt; 5</b>! Invece <b>|x − 2| &gt; 3</b> chiede di stare più lontano: x &lt; −1 ∨ x &gt; 5.</p>'
        ]
      },
      {
        vis: 'math11AbsSign',
        text: [
          '<p>For an equation like <b>|2x − 1| = 5</b>, the inside can equal +5 or −5 (two branches: x = 3 or x = −2). Beware of <b>|A| = −4</b>: distance is never negative, so that equation is immediately <b>impossible</b>!</p>',
          '<p>In un’equazione come <b>|2x − 1| = 5</b>, l’interno può valere +5 oppure −5 (x = 3 oppure x = −2). Attento a <b>|A| = −4</b>: una distanza non è mai negativa, quindi è subito <b>impossibile</b>!</p>'
        ]
      },
      {
        vis: 'math11AbsSign',
        text: [
          '<p>For fractional inequalities like <b>N(x) / D(x) ≥ 0</b>, <b>NEVER cross-multiply</b> away the denominator D(x) because D changes sign! Always solve N ≥ 0 and D &gt; 0 separately, draw the <b>+ / − sign chart</b>, and keep intervals matching the goal sign.</p>',
          '<p>Nelle disequazioni fratte <b>N(x) / D(x) ≥ 0</b>, <b>MAI eliminare il denominatore D(x)</b> perché cambia segno! Studia separatamente N ≥ 0 e D &gt; 0 (escludendo D = 0), compila il <b>quadro dei segni + / −</b> e moltiplica i segni verticalmente.</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Absolute Value: Interval Inside vs. Rays Outside / Impossible', 'Moduli: Intervallo Interno vs. Esterni / Impossibile'],
      hint: [
        '|A| < k keeps you close (inside); |A| > k pushes you far (outside); |A| < 0 is impossible.',
        '|A| < k = intervallo interno; |A| > k = valori esterni; |A| < 0 = impossibile.'
      ],
      cats: [
        ['Single Bounded Interval', 'Intervallo Interno Limitato'],
        ['Two Outer Rays or Impossible', 'Valori Esterni o Impossibile']
      ],
      items: [
        { n: ['|x| ≤ 4  (−4 ≤ x ≤ 4)', '|x| ≤ 4  (−4 ≤ x ≤ 4)'], i: 'shield', c: 0, why: ['Distance from 0 is at most 4.', 'Distanza dallo zero minore o uguale a 4.'] },
        { n: ['|x − 1| > 5', '|x − 1| > 5'], i: 'bolt', c: 1, why: ['x − 1 < −5 or x − 1 > 5 → outer rays x < −4 ∨ x > 6.', 'Valori esterni: x < −4 ∨ x > 6.'] },
        { n: ['|2x + 3| < −2', '|2x + 3| < −2'], i: 'warn', c: 1, why: ['An absolute value is ≥ 0, never less than −2 (impossible!).', 'Un modulo è sempre ≥ 0, mai minore di −2 (impossibile!).'] },
        { n: ['|x − 5| < 2  (3 < x < 7)', '|x − 5| < 2  (3 < x < 7)'], i: 'eye', c: 0, why: ['Within 2 units of 5: 3 < x < 7.', 'Entro 2 unità da 5: 3 < x < 7.'] }
      ]
    },
    taunt: [
      'Cross-multiply that x in the denominator! One sneaky minus sign will doom your sign chart!',
      'Moltiplica pure per il denominatore con la x! Un solo segno meno rovescerà la tua disequazione!'
    ],
    quiz: [
      q('Solve the inequality |x − 3| ≤ 4.', 'Risolvi la disequazione |x − 3| ≤ 4.', [
        ['−1 ≤ x ≤ 7', '−1 ≤ x ≤ 7'],
        ['x ≤ −1 ∨ x ≥ 7', 'x ≤ −1 ∨ x ≥ 7'],
        ['3 ≤ x ≤ 7', '3 ≤ x ≤ 7'],
        ['−7 ≤ x ≤ 1', '−7 ≤ x ≤ 1']
      ], ['−4 ≤ x − 3 ≤ 4 → add 3 to all parts → −1 ≤ x ≤ 7.', '−4 ≤ x − 3 ≤ 4 → aggiungi 3 ovunque → −1 ≤ x ≤ 7.']),
      q('Solve the equation |2x − 5| = 3.', 'Risolvi l’equazione |2x − 5| = 3.', [
        ['x = 4 and x = 1', 'x = 4 e x = 1'],
        ['x = 4 only', 'Solo x = 4'],
        ['x = −4 and x = −1', 'x = −4 e x = −1'],
        ['No real solutions', 'Nessuna soluzione reale']
      ], ['2x − 5 = 3 gives x = 4; 2x − 5 = −3 gives 2x = 2 → x = 1.', '2x − 5 = 3 dà x = 4; 2x − 5 = −3 dà x = 1.']),
      q('Solve the fractional inequality (x − 2) / (x + 1) ≥ 0.', 'Risolvi la disequazione fratta (x − 2) / (x + 1) ≥ 0.', [
        ['x < −1 ∨ x ≥ 2', 'x < −1 ∨ x ≥ 2'],
        ['x ≤ −1 ∨ x ≥ 2', 'x ≤ −1 ∨ x ≥ 2'],
        ['−1 < x ≤ 2', '−1 < x ≤ 2'],
        ['x ≥ 2 only', 'Solo x ≥ 2']
      ], ['Sign chart: N ≥ 0 for x ≥ 2; D > 0 for x > −1 (strictly exclude x = −1). Quotient is ≥ 0 for x < −1 or x ≥ 2.', 'Quadro dei segni: N ≥ 0 per x ≥ 2; D > 0 per x > −1 (escludi x = −1). Positiva o nulla per x < −1 ∨ x ≥ 2.']),
      q('What is the solution set of |x + 7| = −3?', 'Qual è la soluzione di |x + 7| = −3?', [
        ['Impossible (∅)', 'Impossibile (∅)'],
        ['x = −10 and x = −4', 'x = −10 e x = −4'],
        ['x = −4', 'x = −4'],
        ['∀ x ∈ ℝ', '∀ x ∈ ℝ']
      ], ['An absolute value can never equal a negative number (−3).', 'Un valore assoluto è sempre ≥ 0: non può mai valere −3.']),
      q('Solve |x| > 2.', 'Risolvi |x| > 2.', [
        ['x < −2 ∨ x > 2', 'x < −2 ∨ x > 2'],
        ['−2 < x < 2', '−2 < x < 2'],
        ['x > 2 only', 'Solo x > 2'],
        ['x > −2', 'x > −2']
      ], ['Distance from 0 strictly greater than 2 means x < −2 or x > 2.', 'Distanza da 0 maggiore di 2: valori esterni x < −2 ∨ x > 2.'])
    ]
  }),

  makeMathAdvMission({
    id: 'math_l3_m3',
    arc: 0,
    sec: 'L3.3',
    pages: '79–116',
    hue: 18,
    title: ['Irrational Equations & Inequalities', 'Equazioni e Disequazioni Irrazionali'],
    topic: [
      'Solving √A(x) = B(x), squaring ghost-solution check & √A(x) < B(x) / > B(x) systems',
      'Equazioni √A(x) = B(x), verifica delle soluzioni estranee e disequazioni irrazionali < o >'
    ],
    demon: ['The Ghost Root Poltergeist', 'Il Fantasma delle Soluzioni Estranee'],
    tech: ['Radical Form · Third Technique: Sign-Guard Squaring', 'Stile Irrazionale · Terza Tecnica: Controllo di Concordanza'],
    lessons: [
      {
        vis: 'math11Irrational',
        text: [
          '<p>Watch why squaring both sides is dangerous! Consider <b>√x = −3</b>. Squaring both sides gives x = 9, YET √9 = +3 ≠ −3! Squaring creates “ghost solutions” whenever the right-hand side is negative.</p>',
          '<p>Ecco perché elevare al quadrato è rischioso! Guarda <b>√x = −3</b>: elevando al quadrato trovi x = 9, MA √9 = +3 ≠ −3! Il quadrato crea «soluzioni fantasma» quando il secondo membro è negativo.</p>'
        ]
      },
      {
        vis: 'math11Irrational',
        text: [
          '<p>The golden rule for <b>√A(x) = B(x)</b>: set <b>B(x) ≥ 0</b> (concordance of signs) AND <b>A(x) = [B(x)]²</b>! Notice you don’t even need A(x) ≥ 0 separately once A(x) equals a square [B(x)]² ≥ 0!</p>',
          '<p>La regola d’oro per <b>√A(x) = B(x)</b>: imponi <b>B(x) ≥ 0</b> (concordanza di segno) E poi risolvi <b>A(x) = [B(x)]²</b>! Se A è uguale a un quadrato, sarà automaticamente ≥ 0.</p>'
        ]
      },
      {
        vis: 'math11Irrational',
        text: [
          '<p>For inequalities: <b>√A &lt; B</b> needs ONE 3-part system (A ≥ 0, B &gt; 0, A &lt; B²). For <b>√A &gt; B</b>, split into TWO cases: either B &lt; 0 (then any valid A ≥ 0 wins automatically!) OR B ≥ 0 and A &gt; B².</p>',
          '<p>Per le disequazioni: <b>√A &lt; B</b> usa UN sistema (A ≥ 0, B &gt; 0, A &lt; B²). Invece <b>√A &gt; B</b> unisce DUE casi: o B &lt; 0 (basta che esista A ≥ 0, perché √A ≥ 0 batte sempre un negativo!), oppure B ≥ 0 e A &gt; B².</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Keep vs. Reject Candidate Root', 'Accetta vs. Scarta la Soluzione Candidata'],
      hint: [
        'Plug candidate x back into √A(x) = B(x) and verify A ≥ 0 AND B ≥ 0.',
        'Controlla se B(x) ≥ 0 e se il radicale esiste davvero per quel valore di x.'
      ],
      cats: [
        ['Valid Real Solution', 'Soluzione Reale Valida'],
        ['Extraneous / Impossible (Reject!)', 'Estranea o Impossibile (Scarta!)']
      ],
      items: [
        { n: ['√(x + 3) = x − 3 → test x = 6', '√(x + 3) = x − 3 → prova x = 6'], i: 'bolt', c: 0, why: ['√9 = 3 and 6 − 3 = 3: valid!', '√9 = 3 e 6 − 3 = 3: valida!'] },
        { n: ['√(x + 3) = x − 3 → test x = 1', '√(x + 3) = x − 3 → prova x = 1'], i: 'warn', c: 1, why: ['Left is √4 = +2, right is 1 − 3 = −2: ghost root!', 'A sinistra √4 = +2, a destra −2: soluzione estranea!'] },
        { n: ['∛(x − 1) = −2 → test x = −7', '∛(x − 1) = −2 → prova x = −7'], i: 'shield', c: 0, why: ['Odd cube roots allow negatives: ∛(−8) = −2 works!', 'Con indice dispari (cubica) −2 è valido: ∛(−8) = −2!'] },
        { n: ['√(2x + 1) = −5', '√(2x + 1) = −5'], i: 'warn', c: 1, why: ['A principal square root is never negative.', 'Una radice quadrata non può mai essere negativa.'] }
      ]
    },
    taunt: [
      'Square both sides blindly and watch my ghost solutions slip past your guards!',
      'Eleva pure al quadrato senza controllare il segno: le mie radici fantasma ti inganneranno!'
    ],
    quiz: [
      q('Solve the irrational equation √(x + 7) = x + 1.', 'Risolvi l’equazione irrazionale √(x + 7) = x + 1.', [
        ['x = 2 only (x = −3 is extraneous)', 'Solo x = 2 (x = −3 è estranea)'],
        ['x = 2 and x = −3', 'x = 2 e x = −3'],
        ['x = −3 only', 'Solo x = −3'],
        ['No real solutions', 'Nessuna soluzione reale']
      ], ['Squaring gives x + 7 = x² + 2x + 1 → x² + x − 6 = 0 → x = 2 or −3. Condition x + 1 ≥ 0 rejects −3, keeping x = 2.', 'x + 7 = (x+1)² dà x = 2 e x = −3; la condizione x + 1 ≥ 0 scarta −3.']),
      q('What is the solution of √(3x − 2) = −4?', 'Qual è la soluzione di √(3x − 2) = −4?', [
        ['Impossible (no solution)', 'Impossibile (nessuna soluzione)'],
        ['x = 6', 'x = 6'],
        ['x = 2/3', 'x = 2/3'],
        ['x = −14/3', 'x = −14/3']
      ], ['Square roots only output values ≥ 0, never −4.', 'Una radice di indice pari non è mai negativa.']),
      q('Solve the cube-root equation ∛(x + 5) = −2.', 'Risolvi l’equazione con radice cubica ∛(x + 5) = −2.', [
        ['x = −13', 'x = −13'],
        ['x = 3', 'x = 3'],
        ['Impossible in ℝ', 'Impossibile in ℝ'],
        ['x = −3', 'x = −3']
      ], ['Cube both sides (odd power has no sign restriction!): x + 5 = (−2)³ = −8 → x = −13.', 'Elevando al cubo (indice dispari): x + 5 = −8 → x = −13.']),
      q('Which condition system is equivalent to √A(x) < B(x)?', 'Quale sistema è equivalente alla disequazione √A(x) < B(x)?', [
        ['A(x) ≥ 0 ∧ B(x) > 0 ∧ A(x) < [B(x)]²', 'A(x) ≥ 0 ∧ B(x) > 0 ∧ A(x) < [B(x)]²'],
        ['A(x) < [B(x)]² only', 'Solo A(x) < [B(x)]²'],
        ['B(x) < 0 ∧ A(x) ≥ 0', 'B(x) < 0 ∧ A(x) ≥ 0'],
        ['A(x) > [B(x)]²', 'A(x) > [B(x)]²']
      ], ['Both A ≥ 0 (root exists) and B > 0 (must exceed a ≥ 0 root) must hold before squaring.', 'Servono C.E. (A ≥ 0), positività di B (B > 0) e poi quadrato (A < B²).']),
      q('Solve √(x − 1) > −2.', 'Risolvi la disequazione √(x − 1) > −2.', [
        ['x ≥ 1 (every x where the root exists)', 'x ≥ 1 (ovunque esista la radice)'],
        ['x > 5', 'x > 5'],
        ['Impossible', 'Impossibile'],
        ['1 ≤ x < 5', '1 ≤ x < 5']
      ], ['Whenever the root exists (x ≥ 1), its value is ≥ 0, which is ALWAYS > −2!', 'Appena la radice esiste (x ≥ 1), vale ≥ 0 ed è sempre maggiore di −2!'])
    ]
  }),

  // =========================================================================
  // CHAPTER 2: Analytic Geometry — Conic Sections
  // =========================================================================
  makeMathAdvMission({
    id: 'math_l3_m4',
    arc: 1,
    sec: 'L3.4',
    pages: '117–162',
    hue: 42,
    title: ['Parabola & Circle in the Cartesian Plane', 'Parabola e Circonferenza nel Piano'],
    topic: [
      'Parabola locus, vertex & focus/directrix; circle equation, center C(−a/2, −b/2) & radius',
      'Parabola come luogo geometrico (vertice, fuoco, direttrice); circonferenza (centro e raggio)'
    ],
    demon: ['The Off-Center Vortex', 'Il Vortice Fuori Centro'],
    tech: ['Conic Form · Fourth Technique: Vertex-Focus Lock', 'Stile delle Coniche · Quarta Tecnica: Vertice e Centro'],
    lessons: [
      {
        vis: 'math11ParabolaCircle',
        text: [
          '<p>A <b>parabola</b> (like a satellite dish!) concentrates incoming signals onto one special point: the <b>Focus F</b>, keeping every point equally distant from F and a straight line called the <b>directrix</b>. For <b>y = ax² + bx + c</b>, the vertex is at <b>x_V = −b / (2a)</b>!</p>',
          '<p>La <b>parabola</b> (come un’antenna parabolica!) ha tutti i punti equidistanti da un punto fisso <b>Fuoco F</b> e da una retta <b>direttrice</b>. In <b>y = ax² + bx + c</b>, l’asse e il vertice hanno ascissa <b>x_V = −b / (2a)</b>!</p>'
        ]
      },
      {
        vis: 'math11ParabolaCircle',
        text: [
          '<p>Look at coefficients a and c: <b>a &gt; 0</b> smiles upward (U), <b>a &lt; 0</b> frowns downward (∩), and bigger |a| makes it narrower! Meanwhile <b>c</b> is simply the y-intercept where the parabola crosses the y-axis.</p>',
          '<p>Guarda i coefficienti: se <b>a &gt; 0</b> la parabola sorride verso l’alto (U), se <b>a &lt; 0</b> verso il basso (∩), e più |a| è grande più è stretta! Il termine noto <b>c</b> è il punto di incontro con l’asse y.</p>'
        ]
      },
      {
        vis: 'math11ParabolaCircle',
        text: [
          '<p>A <b>circle</b> is every point at distance <i>r</i> from center C(x₀, y₀): <b>(x − x₀)² + (y − y₀)² = r²</b>. Expanded as <b>x² + y² + ax + by + c = 0</b>, always divide a and b by −2 to get center <b>C(−a/2, −b/2)</b> and radius <b>r = √(x₀² + y₀² − c)</b>!</p>',
          '<p>La <b>circonferenza</b> è il luogo dei punti a distanza <i>r</i> dal centro C(x₀, y₀): <b>(x − x₀)² + (y − y₀)² = r²</b>. In forma esplicita <b>x² + y² + ax + by + c = 0</b>, il centro è <b>C(−a/2, −b/2)</b> e il raggio è <b>r = √(x₀² + y₀² − c)</b>!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Read Parabola & Circle Parameters', 'Leggi i Parametri di Parabola e Circonferenza'],
      hint: [
        'For circles remember −a/2 and −b/2; for parabolas x_V = −b/(2a).',
        'Per la circonferenza dividi per −2; per la parabola usa x_V = −b/(2a).'
      ],
      cats: [
        ['True Statement', 'Affermazione Vera'],
        ['Trap / Mistake', 'Errore Frequente']
      ],
      items: [
        { n: ['x² + y² − 6x + 4y − 3 = 0 has center C(3, −2)', 'x² + y² − 6x + 4y − 3 = 0 ha centro C(3, −2)'], i: 'bolt', c: 0, why: ['−(−6)/2 = 3 and −4/2 = −2.', '−(−6)/2 = 3 e −4/2 = −2.'] },
        { n: ['x² + y² − 6x + 4y − 3 = 0 has center (−6, 4)', 'x² + y² − 6x + 4y − 3 = 0 ha centro (−6, 4)'], i: 'warn', c: 1, why: ['Forgot to divide a and b by −2!', 'Hai dimenticato di dividere a e b per −2!'] },
        { n: ['y = −2x² + 8x − 1 opens downward with x_V = 2', 'y = −2x² + 8x − 1 ha concavità in basso e x_V = 2'], i: 'shield', c: 0, why: ['a = −2 < 0 (downward) and x_V = −8 / (2·(−2)) = 2.', 'a = −2 < 0 (verso il basso) e x_V = −8/(−4) = 2.'] },
        { n: ['x² + y² + 10 = 0 is a real circle of radius √10', 'x² + y² + 10 = 0 è una circonferenza reale di raggio √10'], i: 'warn', c: 1, why: ['x₀² + y₀² − c = −10 < 0: imaginary/empty circle!', '0 + 0 − 10 = −10 < 0: non esiste alcuna circonferenza reale!'] }
      ]
    },
    taunt: [
      'Forget to divide by −2 for your circle center, and your compass will miss the target!',
      'Dimentica di dividere per −2 per trovare il centro e mancherai il bersaglio!'
    ],
    quiz: [
      q('Find the vertex V of the parabola y = x² − 6x + 5.', 'Trova il vertice V della parabola y = x² − 6x + 5.', [
        ['V(3, −4)', 'V(3, −4)'],
        ['V(−3, 32)', 'V(−3, 32)'],
        ['V(6, 5)', 'V(6, 5)'],
        ['V(3, 5)', 'V(3, 5)']
      ], ['x_V = −(−6)/(2·1) = 3; plug in x = 3 → y_V = 9 − 18 + 5 = −4.', 'x_V = 6/2 = 3; sostituendo: y_V = 9 − 18 + 5 = −4.']),
      q('Find the center C and radius r of the circle x² + y² − 4x + 2y − 4 = 0.', 'Trova centro C e raggio r di x² + y² − 4x + 2y − 4 = 0.', [
        ['C(2, −1) and r = 3', 'C(2, −1) e r = 3'],
        ['C(−4, 2) and r = 4', 'C(−4, 2) e r = 4'],
        ['C(−2, 1) and r = 3', 'C(−2, 1) e r = 3'],
        ['C(2, −1) and r = 9', 'C(2, −1) e r = 9']
      ], ['x₀ = 4/2 = 2, y₀ = −2/2 = −1; r = √(2² + (−1)² − (−4)) = √(4 + 1 + 4) = √9 = 3.', 'C(2, −1); r = √(4 + 1 + 4) = √9 = 3.']),
      q('Write the equation of the circle with center C(1, −3) and radius r = 5.', 'Scrivi l’equazione della circonferenza di centro C(1, −3) e raggio r = 5.', [
        ['(x − 1)² + (y + 3)² = 25', '(x − 1)² + (y + 3)² = 25'],
        ['(x + 1)² + (y − 3)² = 25', '(x + 1)² + (y − 3)² = 25'],
        ['(x − 1)² + (y + 3)² = 5', '(x − 1)² + (y + 3)² = 5'],
        ['x² + y² = 25', 'x² + y² = 25']
      ], ['Use (x − x₀)² + (y − y₀)² = r²: (x − 1)² + (y − (−3))² = 5² = 25.', 'Formula (x − x₀)² + (y − y₀)² = r² → (x − 1)² + (y + 3)² = 25.']),
      q('For parabola y = ax², what is the focus coordinate F?', 'Per la parabola con vertice nell’origine y = ax², quali sono le coordinate del fuoco F?', [
        ['F(0, 1 / (4a))', 'F(0, 1 / (4a))'],
        ['F(0, a)', 'F(0, a)'],
        ['F(1 / (4a), 0)', 'F(1 / (4a), 0)'],
        ['F(0, −1 / (2a))', 'F(0, −1 / (2a))']
      ], ['The focal distance from the vertex of y = ax² is p = 1/(4a), so F(0, 1/(4a)).', 'La distanza focale dal vertice di y = ax² vale 1/(4a), quindi F(0, 1/(4a)).']),
      q('If c = 0 in the circle equation x² + y² + ax + by + c = 0, what must be true?', 'Se c = 0 nell’equazione x² + y² + ax + by + c = 0, cosa è sempre vero?', [
        ['The circle passes through the origin (0, 0)', 'La circonferenza passa per l’origine (0, 0)'],
        ['The center lies at (0, 0)', 'Il centro è in (0, 0)'],
        ['The radius equals zero', 'Il raggio è zero'],
        ['The circle is tangent to x = 1', 'È tangente a x = 1']
      ], ['Plugging x = 0, y = 0 gives 0 + 0 + 0 + 0 + c = 0, which holds iff c = 0!', 'Sostituendo (0, 0) si ottiene 0 = 0 proprio perché c = 0!'])
    ]
  }),

  makeMathAdvMission({
    id: 'math_l3_m5',
    arc: 1,
    sec: 'L3.5',
    pages: '163–204',
    hue: 158,
    title: ['Ellipse & Hyperbola: Foci & Asymptotes', 'Ellisse e Iperbole: Fuochi e Asintoti'],
    topic: [
      'Canonical ellipse x²/a²+y²/b²=1, eccentricity e<1, hyperbola x²/a²−y²/b²=1, asymptotes & xy=k',
      'Ellisse canonica, eccentricità e < 1, iperbole canonica, asintoti e iperbole equilatera xy = k'
    ],
    demon: ['The Eccentric Weaver', 'Il Tessitore di Eccentricità'],
    tech: ['Orbital Form · Fifth Technique: Asymptote Frame', 'Stile Orbitale · Quinta Tecnica: Croce degli Asintoti'],
    lessons: [
      {
        vis: 'math11EllipseHyperbola',
        text: [
          '<p>Tie a loose string between two thumbtacks F₁ and F₂ and trace around with a pencil: you get an <b>ellipse</b> where <b>PF₁ + PF₂ = constant</b>! Its equation is <b>x²/a² + y²/b² = 1</b> (for a &gt; b: foci on x-axis with <b>c² = a² − b²</b>, eccentricity <b>e = c/a &lt; 1</b>).</p>',
          '<p>Fissa uno spago tra due puntine F₁ e F₂ e traccia una curva tesa: ottieni un’<b>ellisse</b>, dove <b>PF₁ + PF₂ = costante</b>! Equazione: <b>x²/a² + y²/b² = 1</b> (se a &gt; b: fuochi su asse x con <b>c² = a² − b²</b> ed eccentricità <b>e = c/a &lt; 1</b>).</p>'
        ]
      },
      {
        vis: 'math11EllipseHyperbola',
        text: [
          '<p>Flip the + sign to − and you get a <b>hyperbola</b>: <b>x²/a² − y²/b² = 1</b>, where the <i>difference</i> |PF₁ − PF₂| = 2a is constant! Its two branches open left & right and hug two X-shaped guide lines called <b>asymptotes: y = ±(b/a)x</b>.</p>',
          '<p>Cambia il + in − e nasce l’<b>iperbole</b>: <b>x²/a² − y²/b² = 1</b>, dove è costante la <i>differenza</i> |PF₁ − PF₂| = 2a! I suoi rami abbracciano due rette guida dette <b>asintoti: y = ±(b/a)x</b>.</p>'
        ]
      },
      {
        vis: 'math11EllipseHyperbola',
        text: [
          '<p>Watch the focus formula flip! For an ellipse, <b>c² = |a² − b²|</b> (smaller than a, so e &lt; 1). For a hyperbola, <b>c² = a² + b²</b> (bigger than a, so e &gt; 1)! And when a = b rotated 45°, we get inverse proportionality <b>xy = k</b>!</p>',
          '<p>Attenzione al segno di c! Nell’ellisse <b>c² = |a² − b²|</b> (quindi e &lt; 1). Nell’iperbole <b>c² = a² + b²</b> (quindi e &gt; 1)! E l’iperbole equilatera riferita ai propri asintoti è la nota legge inversa <b>xy = k</b>!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Ellipse (+) vs. Hyperbola (−)', 'Ellisse (+) vs. Iperbole (−)'],
      hint: [
        'Check the sign between x²/a² and y²/b², eccentricity e, and asymptotes.',
        'Osserva il segno tra x² e y², l’eccentricità e (<1 o >1) e la presenza di asintoti.'
      ],
      cats: [
        ['Ellipse (0 ≤ e < 1)', 'Ellisse (0 ≤ e < 1)'],
        ['Hyperbola (e > 1)', 'Iperbole (e > 1)']
      ],
      items: [
        { n: ['x²/25 + y²/16 = 1', 'x²/25 + y²/16 = 1'], i: 'shield', c: 0, why: ['Plus sign between x² and y² terms → bounded closed ellipse.', 'Segno + tra x² e y² → ellisse chiusa.'] },
        { n: ['x²/9 − y²/4 = 1', 'x²/9 − y²/4 = 1'], i: 'bolt', c: 1, why: ['Minus sign between x² and y² terms → open two-branch hyperbola.', 'Segno − tra x² e y² → iperbole a due rami.'] },
        { n: ['Has asymptotes y = ±(b/a)x', 'Ha asintoti y = ±(b/a)x'], i: 'flow', c: 1, why: ['Only the hyperbola approaches diagonal asymptotes.', 'Solo l’iperbole si avvicina agli asintoti.'] },
        { n: ['PF₁ + PF₂ = 2a (constant sum)', 'PF₁ + PF₂ = 2a (somma costante)'], i: 'eye', c: 0, why: ['Constant SUM defines an ellipse (planetary orbits!).', 'La somma costante definisce l’ellisse (orbite planetarie!).'] }
      ]
    },
    taunt: [
      'Plus or minus inside c²? Mix up ellipse and hyperbola foci and drift off orbit!',
      'Più o meno nella formula di c²? Confondi ellisse e iperbole e uscirai fuori orbita!'
    ],
    quiz: [
      q('For the ellipse x²/25 + y²/9 = 1, find semi-axes a, b and eccentricity e.', 'Per l’ellisse x²/25 + y²/9 = 1, calcola semiassi a, b ed eccentricità e.', [
        ['a = 5, b = 3, e = 4/5 = 0.8', 'a = 5, b = 3, e = 4/5 = 0,8'],
        ['a = 25, b = 9, e = 16/25', 'a = 25, b = 9, e = 16/25'],
        ['a = 5, b = 3, e = √34/5', 'a = 5, b = 3, e = √34/5'],
        ['a = 3, b = 5, e = 0.6', 'a = 3, b = 5, e = 0,6']
      ], ['a² = 25 → a = 5; b² = 9 → b = 3; c = √(25 − 9) = 4; e = c/a = 4/5 = 0.8.', 'a = 5, b = 3, c = √(25−9) = 4, quindi e = c/a = 4/5 = 0,8.']),
      q('What are the asymptote equations of the hyperbola x²/9 − y²/16 = 1?', 'Quali sono le equazioni degli asintoti dell’iperbole x²/9 − y²/16 = 1?', [
        ['y = ±(4/3)x', 'y = ±(4/3)x'],
        ['y = ±(3/4)x', 'y = ±(3/4)x'],
        ['y = ±(16/9)x', 'y = ±(16/9)x'],
        ['x = ±3 and y = ±4', 'x = ±3 e y = ±4']
      ], ['a = 3, b = 4 → asymptotes are y = ±(b/a)x = ±(4/3)x.', 'a = 3, b = 4 → asintoti y = ±(b/a)x = ±(4/3)x.']),
      q('Find the foci distance c for the hyperbola x²/16 − y²/9 = 1.', 'Trova la semidistanza focale c dell’iperbole x²/16 − y²/9 = 1.', [
        ['c = 5 (since c² = 16 + 9 = 25)', 'c = 5 (poiché c² = 16 + 9 = 25)'],
        ['c = √7', 'c = √7'],
        ['c = 7', 'c = 7'],
        ['c = 4', 'c = 4']
      ], ['For a hyperbola, c² = a² + b² = 16 + 9 = 25 → c = 5.', 'Per l’iperbole si somma: c² = a² + b² = 16 + 9 = 25 → c = 5.']),
      q('If an ellipse has eccentricity e = 0, what shape does it become?', 'Se un’ellisse ha eccentricità e = 0, che figura diventa?', [
        ['A circle (a = b, c = 0)', 'Una circonferenza (a = b, c = 0)'],
        ['A flat straight line', 'Un segmento piatto'],
        ['A parabola', 'Una parabola'],
        ['An equilateral hyperbola', 'Un’iperbole equilatera']
      ], ['When e = 0, both foci merge into the center (c = 0) and a = b, giving a circle.', 'Con e = 0 i due fuochi coincidono nel centro (c = 0) e si ottiene una circonferenza.']),
      q('Which graph represents the equilateral hyperbola xy = 6?', 'Quale proprietà vale per l’iperbole equilatera xy = 6?', [
        ['Asymptotes are the x- and y-axes; curve lies in Quadrants I and III', 'Gli asintoti sono gli assi cartesiani; rami nel 1° e 3° quadrante'],
        ['It passes through (0, 0)', 'Passa per l’origine (0, 0)'],
        ['It is a circle of radius √6', 'È una circonferenza di raggio √6'],
        ['Its branches lie only in Quadrant II', 'I rami stanno solo nel 2° quadrante']
      ], ['Since xy = 6 > 0, x and y share the same sign (Q1 and Q3), hugging both coordinate axes.', 'Con k = 6 > 0, x e y hanno segni concordi (I e III quadrante) con asintoti gli assi.'])
    ]
  }),

  makeMathAdvMission({
    id: 'math_l3_m6',
    arc: 1,
    sec: 'L3.6',
    pages: '205–240',
    hue: 292,
    title: ['Tangents, Line–Conic Intersections & Classifier', 'Tangenti, Intersezioni e Riconoscimento Coniche'],
    topic: [
      'Line–conic system discriminant (secant, tangent, external), d(C,r) = R & conic equation recognition',
      'Posizione retta–conica (Δ > 0, Δ = 0, Δ < 0), tangenti con d(C,r) = R e riconoscimento dell’equazione'
    ],
    demon: ['The Tangent Slicer', 'Il Taglia-Tangenti'],
    tech: ['Tangent Form · Sixth Technique: Delta-Zero Kiss', 'Stile Tangente · Sesta Tecnica: Bacio a Delta Zero'],
    lessons: [
      {
        vis: 'math11ConicsTangent',
        text: [
          '<p>How does a straight line meet ANY conic (parabola, circle, ellipse, hyperbola)? Solve the line + conic system into a quadratic in <i>x</i> and check Δ! <b>Δ &gt; 0</b> → secant (2 hits); <b>Δ = 0</b> → tangent (1 kissing touch!); <b>Δ &lt; 0</b> → external (0 hits).</p>',
          '<p>Come interagisce una retta con QUALSIASI conica? Metti a sistema retta e conica ottenendo un’equazione di 2° grado: <b>Δ &gt; 0</b> → secante (2 punti); <b>Δ = 0</b> → tangente (1 solo punto doppio!); <b>Δ &lt; 0</b> → esterna (0 punti).</p>'
        ]
      },
      {
        vis: 'math11ConicsTangent',
        text: [
          '<p>For a <b>circle</b> of center C and radius R, there is an even faster geometry shortcut: compute distance <b>d(C, line)</b>! The line is tangent iff <b>d = R</b>, secant if d &lt; R, and external if d &gt; R.</p>',
          '<p>Per una <b>circonferenza</b> di centro C e raggio R c’è una scorciatoia fulminea: calcola la distanza centro–retta <b>d(C, r)</b>! Tangente se <b>d = R</b>, secante se d &lt; R, esterna se d &gt; R.</p>'
        ]
      },
      {
        vis: 'math11ConicsTangent',
        text: [
          '<p>Identify any unrotated conic equation in half a second: <b>only x² or y²</b> → Parabola. <b>Same coeff x² + y²</b> → Circle. <b>Different positive coeffs (+x², +y²)</b> → Ellipse. <b>Opposite signs (+x², −y²)</b> → Hyperbola!</p>',
          '<p>Riconosci qualunque conica non ruotata in un secondo: <b>un solo termine al quadrato</b> → Parabola. <b>x² + y² uguali</b> → Circonferenza. <b>Segni concordi ma coefficienti diversi</b> → Ellisse. <b>Segni discordi</b> → Iperbole!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Identify the Conic by Its Equation', 'Riconosci la Conica dall’Equazione'],
      hint: [
        'Inspect the x² and y² coefficients and signs.',
        'Osserva i coefficienti e i segni davanti a x² e y².'
      ],
      cats: [
        ['Circle or Ellipse (+ same sign)', 'Circonferenza o Ellisse (+ concordi)'],
        ['Parabola (1 square) or Hyperbola (−)', 'Parabola (1 quadrato) o Iperbole (−)']
      ],
      items: [
        { n: ['4x² + 9y² = 36', '4x² + 9y² = 36'], i: 'shield', c: 0, why: ['Both squares are positive with different coefficients (4 ≠ 9): ellipse.', 'Entrambi i quadrati sono positivi ma 4 ≠ 9: ellisse.'] },
        { n: ['2x² + 2y² − 8x = 0', '2x² + 2y² − 8x = 0'], i: 'eye', c: 0, why: ['Equal positive coefficients on x² and y²: circle.', 'Coefficienti uguali e concordi su x² e y²: circonferenza.'] },
        { n: ['y = 3x² − 5x + 1', 'y = 3x² − 5x + 1'], i: 'bolt', c: 1, why: ['Only x is squared (no y² term): parabola.', 'Compare solo x² senza y²: parabola.'] },
        { n: ['5x² − 3y² = 15', '5x² − 3y² = 15'], i: 'warn', c: 1, why: ['Opposite signs (+5 and −3) between x² and y²: hyperbola.', 'Segni discordi tra x² e y²: iperbole.'] }
      ]
    },
    taunt: [
      '4x² + 9y² = 36—is it a circle? Misidentify one conic and my tangent slices straight through!',
      '4x² + 9y² = 36 è una circonferenza? Sbaglia una sola conica e sei fuori!'
    ],
    quiz: [
      q('What conic section is represented by 3x² + 3y² − 6x + 12y − 5 = 0?', 'Che conica rappresenta l’equazione 3x² + 3y² − 6x + 12y − 5 = 0?', [
        ['A circle', 'Una circonferenza'],
        ['An ellipse with unequal axes', 'Un’ellisse con assi diversi'],
        ['A hyperbola', 'Un’iperbole'],
        ['A parabola', 'Una parabola']
      ], ['x² and y² have equal non-zero coefficients (3 = 3), so dividing by 3 gives x² + y²... (circle).', 'I coefficienti di x² e y² sono uguali e concordi (3 = 3): è una circonferenza.']),
      q('What algebraic condition makes a line TANGENT to a parabola?', 'Quale condizione algebrica rende una retta TANGENTE a una parabola?', [
        ['The solving quadratic equation has discriminant Δ = 0', 'L’equazione risolvente del sistema ha Δ = 0'],
        ['The solving quadratic has Δ > 0', 'L’equazione risolvente ha Δ > 0'],
        ['The solving quadratic has Δ < 0', 'L’equazione risolvente ha Δ < 0'],
        ['The line must pass through the origin', 'La retta deve passare per l’origine']
      ], ['Tangent means exactly one shared point of multiplicity 2, which occurs iff Δ = 0.', 'Tangente significa un solo punto di intersezione doppio, cioè Δ = 0.']),
      q('For a circle of radius R = 5, if center-to-line distance is d = 3, the line is:', 'Per una circonferenza di raggio R = 5, se la distanza centro-retta vale d = 3, la retta è:', [
        ['Secant (cuts in 2 points)', 'Secante (taglia in 2 punti)'],
        ['Tangent (touches in 1 point)', 'Tangente (tocca in 1 punto)'],
        ['External (0 points)', 'Esterna (0 punti)'],
        ['An asymptote', 'Un asintoto']
      ], ['Since d = 3 < R = 5, the line enters inside the circle and crosses twice.', 'Poiché d = 3 < R = 5, la retta entra nel cerchio ed è secante.']),
      q('Identify the conic: 9x² − 4y² = 36.', 'Riconosci la conica: 9x² − 4y² = 36.', [
        ['Hyperbola', 'Iperbole'],
        ['Ellipse', 'Ellisse'],
        ['Circle', 'Circonferenza'],
        ['Parabola', 'Parabola']
      ], ['Dividing by 36 gives x²/4 − y²/9 = 1 (minus sign = hyperbola).', 'Dividendo per 36 si ottiene x²/4 − y²/9 = 1: segno meno = iperbole.']),
      q('How many tangent lines can be drawn to a circle from a point strictly OUTSIDE it?', 'Quante rette tangenti a una circonferenza passano per un punto ESTERNO ad essa?', [
        ['2 tangent lines', '2 rette tangenti'],
        ['1 tangent line', '1 sola retta tangente'],
        ['0 tangent lines', 'Nessuna retta tangente'],
        ['Infinitely many', 'Infinite']
      ], ['From an external point there are always 2 tangents (on the circle: 1; inside: 0).', 'Da un punto esterno escono sempre 2 tangenti (sul bordo: 1; interno: 0).'])
    ]
  }),

  // =========================================================================
  // CHAPTER 3: Exponentials, Logarithms & Trigonometry
  // =========================================================================
  makeMathAdvMission({
    id: 'math_l3_m7',
    arc: 2,
    sec: 'L3.7',
    pages: '241–284',
    hue: 142,
    title: ['Exponentials & Logarithms (with pH & Growth)', 'Esponenziali e Logaritmi (Crescita e pH)'],
    topic: [
      'a^x and log_a(x) graphs, inverse relationship, log laws, basic equations & real-world pH/growth',
      'Funzioni a^x e log_a(x), proprietà dei logaritmi, equazioni elementari, crescita esponenziale e pH'
    ],
    demon: ['The Growth Doubler', 'Il Raddoppiatore Esponenziale'],
    tech: ['Logarithm Form · Seventh Technique: Exponent Unlocker', 'Stile Logaritmico · Settima Tecnica: Sblocca-Esponente'],
    lessons: [
      {
        vis: 'math11ExpLog',
        text: [
          '<p>An <b>exponential function y = aˣ</b> (a &gt; 0, a ≠ 1) models things that multiply repeatedly—like bacteria doubling every hour! When <b>a &gt; 1</b> it rockets upward (always passing through <b>(0, 1)</b> and staying &gt; 0). When <b>0 &lt; a &lt; 1</b> it decays toward zero!</p>',
          '<p>La funzione <b>esponenziale y = aˣ</b> (con a &gt; 0, a ≠ 1) descrive fenomeni che si moltiplicano, come i batteri che raddoppiano! Se <b>a &gt; 1</b> cresce rapidissima passando per <b>(0, 1)</b> ed è sempre &gt; 0. Se <b>0 &lt; a &lt; 1</b> decresce verso zero!</p>'
        ]
      },
      {
        vis: 'math11ExpLog',
        text: [
          '<p>A <b>logarithm</b> simply asks: “What exponent turns base <i>a</i> into <i>b</i>?” So <b>logₐ(b) = x ⇔ aˣ = b</b>! Example: log₂(8) = 3 because 2³ = 8. Inside Chemistry, pH uses base-10 logs: <b>pH = −log₁₀[H⁺]</b>!</p>',
          '<p>Il <b>logaritmo</b> risponde a una sola domanda: «Quale esponente trasforma la base <i>a</i> in <i>b</i>?» Cioè <b>logₐ(b) = x ⇔ aˣ = b</b>! Esempio: log₂(8) = 3 perché 2³ = 8. Anche il pH in Chimica usa log₁₀: <b>pH = −log₁₀[H⁺]</b>!</p>'
        ]
      },
      {
        vis: 'math11ExpLog',
        text: [
          '<p>Logarithms turn multiplication into addition: <b>log(xy) = log x + log y</b>, <b>log(x/y) = log x − log y</b>, and <b>log(xⁿ) = n · log x</b>! Just remember the strict C.E.: you can ONLY take the log of a strictly positive number (<b>arg &gt; 0</b>).</p>',
          '<p>I logaritmi trasformano prodotti in somme e potenze in moltiplicazioni: <b>log(xy) = log x + log y</b>, <b>log(x/y) = log x − log y</b>, <b>log(xⁿ) = n · log x</b>! Ricorda la C.E. severa: l’argomento deve essere sempre <b>&gt; 0</b>!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Valid Log Law vs. Forbidden Algebra Move', 'Proprietà Vera dei Logaritmi vs. Errore'],
      hint: [
        'Logs split products/quotients/powers, NEVER sums inside log(x + y).',
        'I logaritmi spezzano prodotti/quozienti/potenze, MAI le somme interne log(x + y).'
      ],
      cats: [
        ['True Log Identity', 'Proprietà Valida'],
        ['Forbidden Trap (False)', 'Errore Vietato (Falso)']
      ],
      items: [
        { n: ['log(A · B) = log A + log B (A, B > 0)', 'log(A · B) = log A + log B (A, B > 0)'], i: 'bolt', c: 0, why: ['Exponents add when multiplying powers with the same base!', 'Gli esponenti si sommano quando moltiplichi le potenze!'] },
        { n: ['log(A + B) = log A + log B', 'log(A + B) = log A + log B'], i: 'warn', c: 1, why: ['Trap! Sums inside log(A + B) cannot be distributed.', 'Errore classico! log(A + B) non si può spezzare.'] },
        { n: ['log₂(1) = 0 and log₂(2) = 1', 'log₂(1) = 0 e log₂(2) = 1'], i: 'shield', c: 0, why: ['2⁰ = 1 and 2¹ = 2.', 'Perché 2⁰ = 1 e 2¹ = 2.'] },
        { n: ['log₁₀(0) = 1', 'log₁₀(0) = 1'], i: 'warn', c: 1, why: ['log(0) does not exist because 10ˣ is never 0!', 'log(0) non esiste perché 10ˣ è sempre > 0!'] }
      ]
    },
    taunt: [
      'Solve 2ˣ = −4 or split log(x + 2) into log x + log 2—fall right into my exponential trap!',
      'Risolvi 2ˣ = −4 o spezza log(x + 2) in log x + log 2: cadi nella mia trappola!'
    ],
    quiz: [
      q('Compute log₃(81).', 'Calcola il valore di log₃(81).', [
        ['4 (because 3⁴ = 81)', '4 (perché 3⁴ = 81)'],
        ['27', '27'],
        ['3', '3'],
        ['−4', '−4']
      ], ['Ask: 3 to what power equals 81? Since 3⁴ = 81, log₃(81) = 4.', '3 elevato a che cosa fa 81? 3⁴ = 81, quindi vale 4.']),
      q('Solve the exponential equation 2ˣ⁺¹ = 32.', 'Risolvi l’equazione esponenziale 2ˣ⁺¹ = 32.', [
        ['x = 4', 'x = 4'],
        ['x = 5', 'x = 5'],
        ['x = 15', 'x = 15'],
        ['x = 3', 'x = 3']
      ], ['Rewrite 32 = 2⁵, so x + 1 = 5 → x = 4.', 'Scrivi 32 come 2⁵, quindi x + 1 = 5 → x = 4.']),
      q('What is the solution of 5ˣ = −25 in ℝ?', 'Qual è la soluzione di 5ˣ = −25 in ℝ?', [
        ['Impossible (5ˣ is always > 0)', 'Impossibile (5ˣ è sempre > 0)'],
        ['x = −2', 'x = −2'],
        ['x = 2', 'x = 2'],
        ['x = −5', 'x = −5']
      ], ['Positive base raised to any real exponent is strictly positive, never −25.', 'Una potenza a base positiva è sempre strettamente positiva, mai −25.']),
      q('If [H⁺] = 10⁻⁴ M in Chemistry, what is pH = −log₁₀[H⁺]?', 'In Chimica, se [H⁺] = 10⁻⁴ M, quanto vale il pH = −log₁₀[H⁺]?', [
        ['pH = 4', 'pH = 4'],
        ['pH = −4', 'pH = −4'],
        ['pH = 10', 'pH = 10'],
        ['pH = 1/4', 'pH = 1/4']
      ], ['log₁₀(10⁻⁴) = −4, so pH = −(−4) = 4!', 'log₁₀(10⁻⁴) = −4, quindi pH = −(−4) = 4!']),
      q('Solve the logarithmic inequality log₁/₂(x) > 2 (with x > 0).', 'Risolvi la disequazione logaritmica log₁/₂(x) > 2 (con x > 0).', [
        ['0 < x < 1/4', '0 < x < 1/4'],
        ['x > 1/4', 'x > 1/4'],
        ['x > 4', 'x > 4'],
        ['0 < x < 4', '0 < x < 4']
      ], ['Base 1/2 < 1 reverses the inequality! x < (1/2)² = 1/4 combined with C.E. x > 0 gives 0 < x < 1/4.', 'La base 1/2 < 1 inverte il verso: x < (1/2)² = 1/4 insieme alla C.E. x > 0.'])
    ]
  }),

  makeMathAdvMission({
    id: 'math_l3_m8',
    arc: 2,
    sec: 'L3.8',
    pages: '285–326',
    hue: 274,
    title: ['Goniometry & the Unit Circle', 'Goniometria e Circonferenza Goniometrica'],
    topic: [
      'Radians vs. degrees, sin/cos/tan on unit circle, special angles & fundamental identity sin²α + cos²α = 1',
      'Gradi e radianti, seno, coseno e tangente sulla circonferenza goniometrica e prima relazione fondamentale'
    ],
    demon: ['The Radian Twister', 'Il Distorsore dei Radianti'],
    tech: ['Circle Form · Eighth Technique: Ferris Wheel Projection', 'Stile Goniometrico · Ottava Tecnica: Proiezione sulla Ruota'],
    lessons: [
      {
        vis: 'math11UnitCircle',
        text: [
          '<p>Imagine riding a Ferris wheel of radius <b>1</b> centered at (0, 0): the <b>unit circle</b>! As you rotate counterclockwise by angle α from the right horizontal spoke, your horizontal position is <b>cos α</b> and your height above the center is <b>sin α</b>!</p>',
          '<p>Immagina di salire su una ruota panoramica di raggio <b>1</b> centrata in (0, 0): la <b>circonferenza goniometrica</b>! Ruotando dell’angolo α, la tua coordinata orizzontale è <b>cos α</b> e la tua altezza dal centro è <b>sin α</b>!</p>'
        ]
      },
      {
        vis: 'math11UnitCircle',
        text: [
          '<p>Because radius = 1, Pythagoras inside the right triangle proves the <b>fundamental identity</b> forever: <b>sin²α + cos²α = 1</b>! That also explains why sin α and cos α stay trapped between <b>−1 and +1</b>.</p>',
          '<p>Poiché il raggio vale 1, Pitagora sul triangolino interno dimostra per sempre la <b>prima relazione fondamentale</b>: <b>sin²α + cos²α = 1</b>! Ecco perché seno e coseno restano sempre compresi tra <b>−1 e +1</b>.</p>'
        ]
      },
      {
        vis: 'math11UnitCircle',
        text: [
          '<p>In upper-secondary math, angles are measured in <b>radians</b>: one half-turn <b>180° = π rad</b>! Memorize the big four: 30° = <b>π/6</b>, 45° = <b>π/4</b>, 60° = <b>π/3</b>, 90° = <b>π/2</b>, and tangent is slope: <b>tan α = sin α / cos α</b>.</p>',
          '<p>Al triennio gli angoli si misurano in <b>radianti</b>: mezzo giro <b>180° = π rad</b>! Ricorda i quattro angoli chiave: 30° = <b>π/6</b>, 45° = <b>π/4</b>, 60° = <b>π/3</b>, 90° = <b>π/2</b>, e la tangente è la pendenza: <b>tan α = sin α / cos α</b>.</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Signs & Special Values on the Unit Circle', 'Segni e Valori Notevoli in Goniometria'],
      hint: [
        'cos α = x-coordinate (right +, left −); sin α = y-coordinate (up +, down −).',
        'cos α = ascissa x; sin α = ordinata y sulla circonferenza di raggio 1.'
      ],
      cats: [
        ['Positive Value (+)', 'Valore Positivo (+)'],
        ['Zero, Undefined or Negative (≤ 0)', 'Zero, Negativo o Indefinito']
      ],
      items: [
        { n: ['sin(90°) = sin(π/2) = +1', 'sin(90°) = sin(π/2) = +1'], i: 'bolt', c: 0, why: ['At the very top of the Ferris wheel, height y = +1!', 'In cima alla ruota goniometrica l’ordinata vale +1!'] },
        { n: ['cos(120°)  (2nd quadrant)', 'cos(120°)  (2° quadrante)'], i: 'warn', c: 1, why: ['In Quadrant II, x-coordinate cos is negative (−1/2)!', 'Nel 2° quadrante la x (coseno) è negativa (−1/2)!'] },
        { n: ['tan(45°) = tan(π/4) = +1', 'tan(45°) = tan(π/4) = +1'], i: 'shield', c: 0, why: ['sin(45°) = cos(45°) = √2/2, so their ratio is 1.', 'Seno e coseno sono uguali a √2/2, quindi tan(45°) = 1.'] },
        { n: ['cos(180°) = cos(π) = −1', 'cos(180°) = cos(π) = −1'], i: 'flow', c: 1, why: ['At 180°, the point sits on the far left at (−1, 0).', 'A 180° il punto si trova all’estremo sinistro (−1, 0).'] }
      ]
    },
    taunt: [
      'What is sin(α) if cos(α) = 3/5? Remember your quadrant sign or lose your footing!',
      'Quanto vale sin(α) se cos(α) = 3/5? Sbaglia il segno del quadrante e sei fuori!'
    ],
    quiz: [
      q('Convert 60° into radians.', 'Converti l’angolo di 60° in radianti.', [
        ['π / 3 rad', 'π / 3 rad'],
        ['π / 6 rad', 'π / 6 rad'],
        ['π / 4 rad', 'π / 4 rad'],
        ['2π / 3 rad', '2π / 3 rad']
      ], ['rad = 60° · π / 180° = π / 3.', '60° · π / 180° = π / 3 radianti.']),
      q('If α is in Quadrant I (0° < α < 90°) and sin α = 3/5, find cos α.', 'Se α è nel 1° quadrante e sin α = 3/5, quanto vale cos α?', [
        ['4/5', '4/5'],
        ['2/5', '2/5'],
        ['−4/5', '−4/5'],
        ['5/3', '5/3']
      ], ['cos α = +√(1 − (3/5)²) = √(16/25) = 4/5 (positive in Q1).', 'cos α = +√(1 − 9/25) = √(16/25) = 4/5 (positivo nel 1° quadrante).']),
      q('What are the exact values of sin(30°) and cos(30°)?', 'Quanto valgono esattamente sin(30°) e cos(30°)?', [
        ['sin 30° = 1/2,  cos 30° = √3/2', 'sin 30° = 1/2,  cos 30° = √3/2'],
        ['sin 30° = √3/2,  cos 30° = 1/2', 'sin 30° = √3/2,  cos 30° = 1/2'],
        ['sin 30° = √2/2,  cos 30° = √2/2', 'sin 30° = √2/2,  cos 30° = √2/2'],
        ['sin 30° = 1,  cos 30° = 0', 'sin 30° = 1,  cos 30° = 0']
      ], ['In a 30°–60°–90° half-equilateral triangle, the side opposite 30° is half the hypotenuse: sin 30° = 1/2.', 'Nel triangolo 30°-60°-90°, il cateto opposto a 30° è metà ipotenusa: sin 30° = 1/2 e cos 30° = √3/2.']),
      q('Where is tangent tan α = sin α / cos α UNDEFINED?', 'Per quali angoli (tra 0° e 360°) NON esiste la tangente tan α = sin α / cos α?', [
        ['90° and 270° (where cos α = 0)', '90° e 270° (dove cos α = 0)'],
        ['0° and 180° (where sin α = 0)', '0° e 180° (dove sin α = 0)'],
        ['45° and 225°', '45° e 225°'],
        ['Nowhere, tan α is defined everywhere', 'Da nessuna parte, esiste sempre']
      ], ['Division by zero occurs when cos α = 0, i.e., α = π/2 + kπ (90°, 270°).', 'Non si può dividere per zero quando cos α = 0, cioè a 90° e 270°.']),
      q('Which basic equation has NO real solution?', 'Quale equazione goniometrica elementare è IMPOSSIBILE?', [
        ['sin x = 1.5', 'sin x = 1,5'],
        ['cos x = −1', 'cos x = −1'],
        ['tan x = 10', 'tan x = 10'],
        ['sin x = 0', 'sin x = 0']
      ], ['Since −1 ≤ sin x ≤ 1 always, sin x can never reach 1.5 (unlike tan x, which spans all ℝ).', 'Seno e coseno oscillano tra −1 e +1: sin x non può mai valere 1,5!'])
    ]
  }),

  makeMathAdvMission({
    id: 'math_l3_m9',
    arc: 2,
    sec: 'L3.9',
    pages: '327–368',
    hue: 344,
    horns: 3,
    eyes: 3,
    boss: true,
    title: ['Solving Triangles: Sines, Carnot & Capstone (Boss)', 'Trigonometria dei Triangoli: Seni e Carnot (Boss)'],
    topic: [
      'Right-triangle trigonometry, Law of Sines, Carnot’s Cosine Theorem & triangle area formula',
      'Risoluzione dei triangoli rettangoli, teorema dei seni, teorema di Carnot (coseno) e formula dell’area'
    ],
    demon: ['Archon Carnot of the Three Angles', 'Arconte Carnot dei Tre Angoli'],
    tech: ['Master Form · Grade 11 Capstone: Universal Triangle Solver', 'Stile Maestro · Prova Triennio: Risolutore Universale'],
    lessons: [
      {
        vis: 'math11TriangleLaws',
        text: [
          '<p>In any <b>right triangle</b> with hypotenuse <i>c</i>: a leg equals <b>hypotenuse × sine</b> of the opposite angle (a = c·sin α), or <b>hypotenuse × cosine</b> of the adjacent angle (b = c·cos α)! That’s how engineers measure bridges and vectors in Physics.</p>',
          '<p>In ogni <b>triangolo rettangolo</b> di ipotenusa <i>c</i>: un cateto vale <b>ipotenusa × seno</b> dell’angolo opposto (a = c·sin α) oppure <b>ipotenusa × coseno</b> dell’angolo adiacente (b = c·cos α)! È la stessa legge usata in Fisica per scomporre i vettori.</p>'
        ]
      },
      {
        vis: 'math11TriangleLaws',
        text: [
          '<p>What if the triangle has NO 90° angle? Use the <b>Law of Sines</b> when you know a side–opposite angle pair: <b>a / sin α = b / sin β = c / sin γ</b>. And triangle area takes just two sides and the angle between them: <b>Area = ½ b · c · sin α</b>!</p>',
          '<p>E se il triangolo non è rettangolo? Usa il <b>Teorema dei Seni</b> quando conosci lato e angolo opposto: <b>a / sin α = b / sin β = c / sin γ</b>. E per l’area bastano due lati e l’angolo compreso: <b>Area = ½ b · c · sin α</b>!</p>'
        ]
      },
      {
        vis: 'math11TriangleLaws',
        text: [
          '<p>Know two sides <i>b, c</i> and the included angle α? Unleash <b>Carnot’s Cosine Theorem</b>: <b>a² = b² + c² − 2bc cos α</b>! Notice: when α = 90°, cos 90° = 0 and it reduces straight into Pythagoras!</p>',
          '<p>Conosci due lati <i>b, c</i> e l’angolo compreso α? Usa il <b>Teorema di Carnot (del coseno)</b>: <b>a² = b² + c² − 2bc cos α</b>! Nota che per α = 90°, cos 90° = 0 e Carnot si riduce proprio al Teorema di Pitagora!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Choose the Best Triangle Tool', 'Scegli lo Strumento Migliore per il Triangolo'],
      hint: [
        '2 sides + included angle → Carnot; side + opposite angle pair → Law of Sines.',
        '2 lati + angolo compreso → Carnot; coppia lato-angolo opposto → Teorema dei Seni.'
      ],
      cats: [
        ['Carnot’s Cosine Theorem (SAS / SSS)', 'Teorema di Carnot (LAL / LLL)'],
        ['Law of Sines or Right-Triangle Trig', 'Teorema dei Seni o Triangolo Rettangolo']
      ],
      items: [
        { n: ['Given b = 5, c = 8 and included angle α = 60°', 'Dati b = 5, c = 8 e angolo compreso α = 60°'], i: 'bolt', c: 0, why: ['SAS setup finds opposite side a directly via a² = b² + c² − 2bc cos 60°.', 'Con due lati e angolo compreso Carnot calcola subito il terzo lato a.'] },
        { n: ['Given a = 10, α = 30°, β = 45°', 'Dati a = 10, α = 30°, β = 45°'], i: 'flow', c: 1, why: ['Opposite pair (a, α) lets Law of Sines solve b = a sin β / sin α.', 'La coppia opposta (a, α) permette subito il Teorema dei Seni.'] },
        { n: ['Given all 3 sides (a = 7, b = 8, c = 9), find cos α', 'Dati tutti i 3 lati (7, 8, 9), trova cos α'], i: 'shield', c: 0, why: ['Rearrange Carnot: cos α = (b² + c² − a²) / (2bc).', 'Inverti Carnot: cos α = (b² + c² − a²) / (2bc).'] },
        { n: ['Right triangle: hypotenuse 20 and angle 30°', 'Triangolo rettangolo: ipotenusa 20 e angolo 30°'], i: 'eye', c: 1, why: ['Opposite leg is immediately 20 · sin 30° = 10.', 'Il cateto opposto vale subito 20 · sin 30° = 10.'] }
      ]
    },
    taunt: [
      'Functions, conics, logs, and Carnot stand between you and the Triennio crown—solve my triangle!',
      'Funzioni, coniche, logaritmi e Carnot ti sbarrano il passo: risolvi l’ultima sfida del triennio!'
    ],
    quiz: [
      q('In a right triangle with hypotenuse 12 cm and acute angle 30°, how long is the leg OPPOSITE 30°?', 'In un triangolo rettangolo con ipotenusa 12 cm e angolo acuto di 30°, quanto misura il cateto OPPOSTO a 30°?', [
        ['6 cm', '6 cm'],
        ['6√3 cm', '6√3 cm'],
        ['6√2 cm', '6√2 cm'],
        ['24 cm', '24 cm']
      ], ['Opposite leg = hypotenuse · sin 30° = 12 · (1/2) = 6 cm.', 'Cateto opposto = ipotenusa · sin 30° = 12 · 1/2 = 6 cm.']),
      q('Use Carnot’s Theorem: b = 5, c = 8, included angle α = 60° (cos 60° = 1/2). Find side a.', 'Applica Carnot: b = 5, c = 8, angolo compreso α = 60° (cos 60° = 1/2). Trova il lato a.', [
        ['7', '7'],
        ['√89', '√89'],
        ['√129', '√129'],
        ['49', '49']
      ], ['a² = 5² + 8² − 2(5)(8)(1/2) = 25 + 64 − 40 = 49 → a = 7.', 'a² = 25 + 64 − 2·5·8·(1/2) = 89 − 40 = 49 → a = 7.']),
      q('What is the area of a triangle with sides b = 6 cm, c = 10 cm, and included angle α = 30°?', 'Quanto vale l’area di un triangolo con lati 6 cm e 10 cm e angolo compreso di 30°?', [
        ['15 cm²', '15 cm²'],
        ['30 cm²', '30 cm²'],
        ['15√3 cm²', '15√3 cm²'],
        ['60 cm²', '60 cm²']
      ], ['Area = ½ · b · c · sin 30° = ½ · 6 · 10 · (1/2) = 15 cm².', 'Area = ½ · 6 · 10 · sin 30° = 30 · 1/2 = 15 cm².']),
      q('In a triangle, a = 10, α = 30° (sin 30° = 1/2), and β = 90° (sin 90° = 1). Find side b via Law of Sines.', 'In un triangolo a = 10, α = 30° e β = 90°. Trova b col Teorema dei Seni.', [
        ['b = 20', 'b = 20'],
        ['b = 5', 'b = 5'],
        ['b = 10√2', 'b = 10√2'],
        ['b = 10√3', 'b = 10√3']
      ], ['10 / sin 30° = b / sin 90° → 10 / 0.5 = b / 1 → b = 20.', '10 / (1/2) = b / 1 → b = 20.']),
      q('Capstone question: Which equation defines a hyperbola with vertices (±3, 0) and asymptotes y = ±(4/3)x?', 'Domanda finale: quale equazione descrive un’iperbole con vertici (±3, 0) e asintoti y = ±(4/3)x?', [
        ['x²/9 − y²/16 = 1', 'x²/9 − y²/16 = 1'],
        ['x²/9 + y²/16 = 1', 'x²/9 + y²/16 = 1'],
        ['x²/16 − y²/9 = 1', 'x²/16 − y²/9 = 1'],
        ['y²/9 − x²/16 = 1', 'y²/9 − x²/16 = 1']
      ], ['a = 3 (a² = 9) and b/a = 4/3 → b = 4 (b² = 16) with minus sign between x² and y².', 'a = 3 (a² = 9), b/a = 4/3 → b = 4 (b² = 16), forma x²/9 − y²/16 = 1.'])
    ]
  })
];
