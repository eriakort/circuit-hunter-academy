import { TaggedQuestion } from '../types';

export const CH2_QUESTIONS: TaggedQuestion[] = [
  {
    id: 'phys-ch2-01',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 17,
    missionId: 'phys_q_ch2',
    chapterTitle: ['Measurement & Data', 'Misure e rappresentazioni'],
    missionTitle: ['Instrument Sensitivity', 'Sensibilità di uno strumento'],
    q: [
      'What is meant by the "sensitivity" (resolution) of a measuring instrument?',
      'Che cosa si intende per "sensibilità" di uno strumento di misura?'
    ],
    a: [
      ['The smallest variation of the quantity that the instrument can detect', 'La più piccola variazione della grandezza che lo strumento è in grado di rilevare'],
      ['The maximum value of the quantity the instrument can measure', 'Il massimo valore della grandezza che lo strumento può misurare'],
      ['How quickly the instrument responds to a change', 'La rapidità con cui lo strumento risponde a una variazione'],
      ['The percentage error guaranteed by the manufacturer', 'L\'errore percentuale garantito dal costruttore']
    ],
    why: [
      'Sensitivity (or resolution) is the smallest change in the measured quantity that produces an observable response. The maximum measurable value is called the range (or full scale / portata).',
      'La sensibilità è la minima differenza della grandezza misurata che lo strumento può apprezzare. Il massimo valore misurabile si chiama invece portata.'
    ]
  },
  {
    id: 'phys-ch2-02',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 17,
    missionId: 'phys_q_ch2',
    chapterTitle: ['Measurement & Data', 'Misure e rappresentazioni'],
    missionTitle: ['Systematic vs Random Errors', 'Errori sistematici e casuali'],
    q: [
      'An improperly zeroed balance always adds +0.5 g to every reading. What type of error is this?',
      'Una bilancia non azzerata correttamente aggiunge sempre +0,5 g a ogni pesata. Di che tipo di errore si tratta?'
    ],
    a: [
      ['Systematic error', 'Errore sistematico'],
      ['Random error', 'Errore casuale (accidentale)'],
      ['Human error that cannot be corrected', 'Errore umano non correggibile'],
      ['Quantum uncertainty', 'Incertezza quantistica']
    ],
    why: [
      'A systematic error always alters measurements in the same direction (always too high or always too low) due to faulty calibration, zero-point offset, or experimental flaw.',
      'Un errore sistematico si ripete sempre nello stesso verso (per eccesso o per difetto) ed è causato da difetti dello strumento (come il mancato azzeramento) o del metodo.'
    ]
  },
  {
    id: 'phys-ch2-03',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 17,
    missionId: 'phys_q_ch2',
    chapterTitle: ['Measurement & Data', 'Misure e rappresentazioni'],
    missionTitle: ['Maximum Half-Spread', 'Semidispersione massima'],
    q: [
      'Five repeated length measurements yield: 12.1 cm, 12.3 cm, 12.2 cm, 12.5 cm, 12.1 cm. What is the maximum half-spread (uncertainty)?',
      'Cinque misure ripetute di una lunghezza danno: 12,1 cm; 12,3 cm; 12,2 cm; 12,5 cm; 12,1 cm. Qual è la semidispersione massima?'
    ],
    a: [
      ['0.2 cm', '0,2 cm'],
      ['0.4 cm', '0,4 cm'],
      ['0.1 cm', '0,1 cm'],
      ['0.05 cm', '0,05 cm']
    ],
    why: [
      'Half-spread = (x_max - x_min) / 2 = (12.5 - 12.1) / 2 = 0.4 / 2 = 0.2 cm.',
      'La semidispersione massima si calcola come: e_a = (x_max - x_min) / 2 = (12,5 - 12,1) / 2 = 0,4 / 2 = 0,2 cm.'
    ]
  },
  {
    id: 'phys-ch2-04',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 17,
    missionId: 'phys_q_ch2',
    chapterTitle: ['Measurement & Data', 'Misure e rappresentazioni'],
    missionTitle: ['Relative Error Calculation', 'Calcolo dell\'errore relativo'],
    q: [
      'A distance is measured as d = (200 ± 2) m. What is the relative percentage error?',
      'Una distanza è misurata come d = (200 ± 2) m. Qual è l\'errore relativo percentuale?'
    ],
    a: [
      ['1%', '1%'],
      ['2%', '2%'],
      ['0.01%', '0,01%'],
      ['0.1%', '0,1%']
    ],
    why: [
      'Relative error = Δd / d = 2 / 200 = 0.01. Multiplying by 100 gives 1%.',
      'L\'errore relativo è e_r = Δd / d = 2 / 200 = 0,01. Moltiplicando per 100 si ottiene l\'errore percentuale: 1%.'
    ]
  },
  {
    id: 'phys-ch2-05',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 17,
    missionId: 'phys_q_ch2',
    chapterTitle: ['Measurement & Data', 'Misure e rappresentazioni'],
    missionTitle: ['Significant Figures Rules', 'Regole delle cifre significative'],
    q: [
      'How many significant figures are in the measurement 0.007050 m?',
      'Quante cifre significative contiene la misura 0,007050 m?'
    ],
    a: [
      ['4', '4'],
      ['7', '7'],
      ['3', '3'],
      ['5', '5']
    ],
    why: [
      'Leading zeros are not significant. The digits 7, 0, 5, and the trailing 0 are significant, giving 4 significant figures (7050).',
      'Gli zeri a sinistra non sono significativi (servono solo a posizionare la virgola). Le cifre 7, 0, 5 e lo zero finale a destra sono significativi, per un totale di 4 cifre significative.'
    ]
  },
  {
    id: 'phys-ch2-06',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 17,
    missionId: 'phys_q_ch2',
    chapterTitle: ['Measurement & Data', 'Misure e rappresentazioni'],
    missionTitle: ['Error Propagation: Sum', 'Propagazione errori nella somma'],
    q: [
      'Two sticks of lengths L₁ = (15.2 ± 0.1) cm and L₂ = (8.4 ± 0.2) cm are placed end to end. What is the total length with uncertainty?',
      'Due aste di lunghezza L₁ = (15,2 ± 0,1) cm e L₂ = (8,4 ± 0,2) cm vengono affiancate. Qual è la lunghezza totale con incertezza?'
    ],
    a: [
      ['(23.6 ± 0.3) cm', '(23,6 ± 0,3) cm'],
      ['(23.6 ± 0.1) cm', '(23,6 ± 0,1) cm'],
      ['(23.6 ± 0.2) cm', '(23,6 ± 0,2) cm'],
      ['(23.6 ± 0.02) cm', '(23,6 ± 0,02) cm']
    ],
    why: [
      'In a sum or difference, the absolute uncertainties add: L = 15.2 + 8.4 = 23.6 cm, and ΔL = 0.1 + 0.2 = 0.3 cm.',
      'Nella somma e nella differenza, gli errori assoluti si sommano: L = 15,2 + 8,4 = 23,6 cm e ΔL = 0,1 + 0,2 = 0,3 cm.'
    ]
  },
  {
    id: 'phys-ch2-07',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 17,
    missionId: 'phys_q_ch2',
    chapterTitle: ['Measurement & Data', 'Misure e rappresentazioni'],
    missionTitle: ['Error Propagation: Product', 'Propagazione errori nel prodotto'],
    q: [
      'When calculating area from length and width (A = L · W), how is the total relative error determined?',
      'Nel calcolo dell\'area di un rettangolo (A = L · W), come si determina l\'errore relativo totale?'
    ],
    a: [
      ['By adding the relative errors of L and W', 'Sommando gli errori relativi di L e W'],
      ['By adding the absolute errors of L and W', 'Sommando gli errori assoluti di L e W'],
      ['By multiplying the absolute errors of L and W', 'Moltiplicando gli errori assoluti di L e W'],
      ['By taking the larger of the two relative errors', 'Prendendo il maggiore tra i due errori relativi']
    ],
    why: [
      'For products and quotients, relative errors add: e_r(A) = e_r(L) + e_r(W).',
      'Nel prodotto e nel quoziente di grandezze, gli errori relativi si sommano: e_r(A) = e_r(L) + e_r(W).'
    ]
  },
  {
    id: 'phys-ch2-08',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 17,
    missionId: 'phys_q_ch2',
    chapterTitle: ['Measurement & Data', 'Misure e rappresentazioni'],
    missionTitle: ['Direct Proportionality', 'Proporzionalità diretta'],
    q: [
      'Two quantities x and y are directly proportional (y = k · x). What happens to y if x triples?',
      'Due grandezze x e y sono direttamente proporzionali (y = k · x). Se x triplica, che cosa succede a y?'
    ],
    a: [
      ['y triples', 'y triplica'],
      ['y is divided by 3', 'y si divide per 3'],
      ['y increases by a factor of 9', 'y diventa 9 volte più grande'],
      ['y remains constant', 'y rimane costante']
    ],
    why: [
      'In direct proportionality, multiplying x by any factor n multiplies y by the same factor n.',
      'Nella proporzionalità diretta, moltiplicando la variabile indipendente x per un fattore n, anche y risulta moltiplicata per lo stesso fattore n.'
    ]
  },
  {
    id: 'phys-ch2-09',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 17,
    missionId: 'phys_q_ch2',
    chapterTitle: ['Measurement & Data', 'Misure e rappresentazioni'],
    missionTitle: ['Inverse Proportionality Graph', 'Grafico della proporzionalità inversa'],
    q: [
      'What curve represents inverse proportionality (y = k / x) on a Cartesian plane?',
      'Quale curva rappresenta una proporzionalità inversa (y = k / x) nel piano cartesiano?'
    ],
    a: [
      ['A branch of an equilateral hyperbola', 'Un ramo di iperbole equilatera'],
      ['A parabola passing through the origin', 'Una parabola passante per l\'origine'],
      ['A straight line passing through the origin', 'Una retta passante per l\'origine'],
      ['A circle centered at the origin', 'Una circonferenza con centro nell\'origine']
    ],
    why: [
      'Inverse proportionality has equation y = k/x (or x · y = k). Its graph in the first quadrant is a branch of an equilateral hyperbola asymptotically approaching both axes.',
      'La relazione y = k / x corrisponde geometricamente a un ramo di iperbole equilatera nel primo quadrante, con gli assi cartesiani come asintoti.'
    ]
  },
  {
    id: 'phys-ch2-10',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 17,
    missionId: 'phys_q_ch2',
    chapterTitle: ['Measurement & Data', 'Misure e rappresentazioni'],
    missionTitle: ['Quadratic Proportionality', 'Proporzionalità quadratica'],
    q: [
      'If kinetic energy is quadratically proportional to speed (K = ½ m v²), what happens to kinetic energy if speed doubles?',
      'Se l\'energia cinetica è proporzionale al quadrato della velocità (K = ½ m v²), che cosa succede a K se la velocità raddoppia?'
    ],
    a: [
      ['It quadruples (increases by factor 4)', 'Quadruplica (diventa 4 volte più grande)'],
      ['It doubles', 'Raddoppia'],
      ['It increases by factor 8', 'Diventa 8 volte più grande'],
      ['It remains unchanged', 'Rimane invariata']
    ],
    why: [
      'Because speed is squared: (2v)² = 4v². The energy increases by a factor of 4.',
      'Poiché la velocità compare al quadrato: (2v)² = 4v². Raddoppiando la velocità, l\'energia cinetica quadruplica.'
    ]
  },
  {
    id: 'phys-ch2-11',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 17,
    missionId: 'phys_q_ch2',
    chapterTitle: ['Measurement & Data', 'Misure e rappresentazioni'],
    missionTitle: ['Linear Relationship', 'Dipendenza lineare'],
    q: [
      'A graph shows a straight line that intersects the vertical y-axis at y = 5, not at the origin. What type of relationship is this?',
      'Il grafico di un fenomeno è una retta che interseca l\'asse verticale delle y in y = 5 (non passa per l\'origine). Che relazione è?'
    ],
    a: [
      ['Linear dependence (y = m · x + q)', 'Dipendenza lineare (y = m · x + q)'],
      ['Direct proportionality', 'Proporzionalità diretta'],
      ['Inverse proportionality', 'Proporzionalità inversa'],
      ['Quadratic proportionality', 'Proporzionalità quadratica']
    ],
    why: [
      'A straight line not passing through the origin represents linear dependence y = mx + q (where q ≠ 0 is the y-intercept), distinct from direct proportionality where q = 0.',
      'Una retta che non passa per l\'origine rappresenta una dipendenza lineare (y = mx + q, con intercetta q ≠ 0). Nella proporzionalità diretta la retta passa necessariamente per l\'origine (q = 0).'
    ]
  },
  {
    id: 'phys-ch2-12',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 17,
    missionId: 'phys_q_ch2',
    chapterTitle: ['Measurement & Data', 'Misure e rappresentazioni'],
    missionTitle: ['Slope Meaning', 'Pendenza di una retta'],
    q: [
      'In a position vs time graph (s on y-axis in metres, t on x-axis in seconds) of uniform motion, what physical quantity does the slope represent?',
      'In un grafico spazio-tempo (s sull\'asse y in metri, t sull\'asse x in secondi) di un moto uniforme, che grandezza rappresenta la pendenza della retta?'
    ],
    a: [
      ['Speed (v = Δs / Δt in m/s)', 'Velocità (v = Δs / Δt in m/s)'],
      ['Acceleration (in m/s²)', 'Accelerazione (in m/s²)'],
      ['Total distance (in m)', 'Distanza percorsa (in m)'],
      ['Force (in N)', 'Forza (in N)']
    ],
    why: [
      'Slope = Δy / Δx = Δs / Δt, which is speed in metres per second.',
      'La pendenza è il rapporto tra variazione verticale e orizzontale: Δs / Δt, che corrisponde alla velocità.'
    ]
  },
  {
    id: 'phys-ch2-13',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 17,
    missionId: 'phys_q_ch2',
    chapterTitle: ['Measurement & Data', 'Misure e rappresentazioni'],
    missionTitle: ['Precision vs Accuracy', 'Accuratezza e precisione'],
    q: [
      'An archer shoots 5 arrows that all cluster very tightly together, but far from the bullseye. The archer is:',
      'Un arciere scocca 5 frecce che si conficcano tutte vicinissime tra loro, ma lontano dal centro del bersaglio. L\'arciere è:'
    ],
    a: [
      ['Precise, but not accurate', 'Preciso, ma non accurato'],
      ['Accurate, but not precise', 'Accurato, ma non preciso'],
      ['Both accurate and precise', 'Sia accurato sia preciso'],
      ['Neither accurate nor precise', 'Né accurato né preciso']
    ],
    why: [
      'Precision reflects repeatability and agreement among measurements (tight grouping). Accuracy reflects closeness to the true reference value (the bullseye).',
      'La precisione indica quanto le misure siano vicine tra loro (bassa dispersione casuale). L\'accuratezza indica quanto la media sia vicina al valore vero.'
    ]
  },
  {
    id: 'phys-ch2-14',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 17,
    missionId: 'phys_q_ch2',
    chapterTitle: ['Measurement & Data', 'Misure e rappresentazioni'],
    missionTitle: ['Significant Figures Multiplication', 'Cifre significative nel prodotto'],
    q: [
      'Calculate the area of a rectangle with length 14.2 m and width 3.1 m. How should the result be rounded?',
      'Calcola l\'area di un rettangolo con base 14,2 m e altezza 3,1 m. Come va arrotondato il risultato?'
    ],
    a: [
      ['44 m² (2 significant figures)', '44 m² (2 cifre significative)'],
      ['44.02 m² (4 significant figures)', '44,02 m² (4 cifre significative)'],
      ['44.0 m² (3 significant figures)', '44,0 m² (3 cifre significative)'],
      ['40 m² (1 significant figure)', '40 m² (1 cifra significativa)']
    ],
    why: [
      '14.2 has 3 sig figs, while 3.1 has only 2 sig figs. In multiplication, the result must match the factor with the fewest sig figs (2): 14.2 × 3.1 = 44.02 → 44 m².',
      '14,2 ha 3 cifre significative, mentre 3,1 ne ha solo 2. Nel prodotto il risultato finale deve avere lo stesso numero di cifre significative del fattore che ne ha meno: 14,2 × 3,1 = 44,02 → 44 m².'
    ]
  },
  {
    id: 'phys-ch2-15',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 17,
    missionId: 'phys_q_ch2',
    chapterTitle: ['Measurement & Data', 'Misure e rappresentazioni'],
    missionTitle: ['Measurement Result Format', 'Scrittura formale della misura'],
    q: [
      'A measurement gives a mean value of 45.832 cm with an absolute uncertainty of 0.2 cm. What is the correct formal representation?',
      'Una misura fornisce una media di 45,832 cm con un\'incertezza assoluta di 0,2 cm. Qual è la corretta scrittura formale?'
    ],
    a: [
      ['(45.8 ± 0.2) cm', '(45,8 ± 0,2) cm'],
      ['(45.832 ± 0.2) cm', '(45,832 ± 0,2) cm'],
      ['(46 ± 0.2) cm', '(46 ± 0,2) cm'],
      ['(45.83 ± 0.2) cm', '(45,83 ± 0,2) cm']
    ],
    why: [
      'The uncertainty has its first significant digit at the tenths place (0.2). Therefore the mean value must be rounded to the same place: 45.8 cm.',
      'L\'incertezza è data con una sola cifra significativa (al decimo di centimetro: 0,2). Il valore medio deve essere arrotondato alla stessa posizione decimale: 45,8 cm.'
    ]
  },
  {
    id: 'phys-ch2-16',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 17,
    missionId: 'phys_q_ch2',
    chapterTitle: ['Measurement & Data', 'Misure e rappresentazioni'],
    missionTitle: ['Error Propagation: Division', 'Propagazione errori nella divisione'],
    q: [
      'A runner travels distance d with 2% relative uncertainty in time t with 1% relative uncertainty. What is the relative uncertainty in speed (v = d / t)?',
      'Un corridore percorre una distanza d con incertezza del 2% in un tempo t con incertezza dell\'1%. Qual è l\'incertezza relativa percentuale della velocità (v = d / t)?'
    ],
    a: [
      ['3%', '3%'],
      ['1%', '1%'],
      ['2%', '2%'],
      ['0.5%', '0,5%']
    ],
    why: [
      'For division, the relative uncertainties sum together: e_r(v) = e_r(d) + e_r(t) = 2% + 1% = 3%.',
      'Nel quoziente gli errori relativi si sommano (non si sottraggono): e_r(v) = e_r(d) + e_r(t) = 2% + 1% = 3%.'
    ]
  },
  {
    id: 'phys-ch2-17',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 17,
    missionId: 'phys_q_ch2',
    chapterTitle: ['Measurement & Data', 'Misure e rappresentazioni'],
    missionTitle: ['Error Bar Meaning', 'Significato delle barre di errore'],
    q: [
      'What do the vertical and horizontal error bars on a experimental data point in a graph represent?',
      'Che cosa rappresentano i trattini (barre di errore) verticali e orizzontali tracciati attorno a un punto sperimentale in un grafico?'
    ],
    a: [
      ['The range of uncertainty [x - Δx, x + Δx] and [y - Δy, y + Δy]', 'L\'intervallo di incertezza [x - Δx, x + Δx] e [y - Δy, y + Δy]'],
      ['The speed at which the point moves', 'La velocità con cui il punto si muove nel piano'],
      ['The deviation from the theoretical model', 'La deviazione rispetto al modello teorico'],
      ['The number of trials conducted', 'Il numero di prove effettuate']
    ],
    why: [
      'Error bars visually define the uncertainty rectangle within which the true value is expected to lie with high confidence.',
      'Le barre di errore delimitano il rettangolo di incertezza attorno al punto misurato, indicando l\'intervallo in cui cade il valore vero.'
    ]
  },
  {
    id: 'phys-ch2-18',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 17,
    missionId: 'phys_q_ch2',
    chapterTitle: ['Measurement & Data', 'Misure e rappresentazioni'],
    missionTitle: ['Calibration and Scale Reading', 'Portata e scala dello strumento'],
    q: [
      'A ruler has millimeter marks (sensitivity = 1 mm) and a length of 30 cm. What are its sensitivity and range (portata)?',
      'Un righello ha tacche millimetriche e una lunghezza di 30 cm. Quali sono la sua sensibilità e la sua portata?'
    ],
    a: [
      ['Sensitivity: 1 mm (0.1 cm); Range: 30 cm', 'Sensibilità: 1 mm (0,1 cm); Portata: 30 cm'],
      ['Sensitivity: 30 cm; Range: 1 mm', 'Sensibilità: 30 cm; Portata: 1 mm'],
      ['Sensitivity: 0.5 mm; Range: 300 cm', 'Sensibilità: 0,5 mm; Portata: 300 cm'],
      ['Sensitivity: 1 cm; Range: 30 cm', 'Sensibilità: 1 cm; Portata: 30 cm']
    ],
    why: [
      'Sensitivity is the smallest division (1 mm = 0.1 cm), while range (portata) is the maximum measurable length (30 cm).',
      'La sensibilità è la minima divisione della scala (1 mm), mentre la portata è il massimo valore misurabile senza spostare lo strumento (30 cm).'
    ]
  },
  {
    id: 'phys-ch2-19',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 17,
    missionId: 'phys_q_ch2',
    chapterTitle: ['Measurement & Data', 'Misure e rappresentazioni'],
    missionTitle: ['Linear Equation y-intercept', 'Intercetta dell\'equazione lineare'],
    q: [
      'In the linear equation y = 3x + 8, what does the value 8 represent on the graph?',
      'Nell\'equazione lineare y = 3x + 8, che cosa rappresenta il valore 8 sul grafico?'
    ],
    a: [
      ['The y-intercept (value of y when x = 0)', 'L\'ordinata all\'origine (valore di y quando x = 0)'],
      ['The slope (rate of change)', 'La pendenza della retta'],
      ['The x-intercept where y = 0', 'Il punto di intersezione con l\'asse delle ascisse x'],
      ['The maximum possible value of y', 'Il valore massimo che y può assumere']
    ],
    why: [
      'In y = mx + q, q is the y-intercept (the point (0, q) where the line crosses the y-axis), and m is the slope.',
      'Nell\'equazione y = mx + q, il termine noto q è l\'ordinata all\'origine (punto (0, q) in cui la retta interseca l\'asse y), mentre m è il coefficiente angolare.'
    ]
  },
  {
    id: 'phys-ch2-20',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 17,
    missionId: 'phys_q_ch2',
    chapterTitle: ['Measurement & Data', 'Misure e rappresentazioni'],
    missionTitle: ['Parallax Error', 'Errore di parallasse'],
    q: [
      'Reading an analog meter or graduated cylinder from an angle above or below eye level causes what type of error?',
      'Leggere una scala graduata o un termometro guardando dall\'alto o dal basso anziché perpendicolarmente genera quale errore?'
    ],
    a: [
      ['Parallax error (a systematic error)', 'Errore di parallasse (un errore sistematico)'],
      ['Thermal fluctuation error', 'Errore per fluttuazione termica'],
      ['Statistical quantum error', 'Errore statistico quantistico'],
      ['Zero-point error', 'Errore di fondo scala']
    ],
    why: [
      'Parallax error occurs when the line of sight is not perpendicular to the scale, consistently displacing the apparent index position in one direction (a systematic human-procedure error).',
      'L\'errore di parallasse si verifica quando lo sguardo non è perpendicolare alla scala graduata, producendo una lettura sistematicamente errata.'
    ]
  }
];
