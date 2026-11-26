import type { Language } from '../../types';

export type Grade5MathLabMode =
  | 'place-powers'
  | 'roman-numerals'
  | 'number-rounding'
  | 'operations-order'
  | 'factors-primes'
  | 'fractions-decimals'
  | 'percentages-money'
  | 'metric-time'
  | 'speed-trade'
  | 'problems-proportion'
  | 'logic-venn'
  | 'data-averages'
  | 'probability-spinner'
  | 'cartesian-isometry'
  | 'angles-regular'
  | 'plane-areas'
  | 'circle-solids';

export interface Grade5MathLabSpec {
  mode: Grade5MathLabMode;
  title: [string, string];
  prompt: [string, string];
  footnote: [string, string];
}

const SPECS: Record<string, Grade5MathLabSpec> = {
  'g5m-warmup-numbers': {
    mode: 'place-powers',
    title: ['Place value & number builder', 'Valore posizionale e costruttore numerico'],
    prompt: ['Adjust digits and powers of 10 to compose a natural or big number.', 'Modifica le cifre e le potenze di 10 per scomporre e comporre un numero.'],
    footnote: ['Each place is worth 10 times the place immediately to its right.', 'Ogni posizione vale 10 volte quella subito alla sua destra.']
  },
  'g5m-warmup-measure-problems': {
    mode: 'problems-proportion',
    title: ['4-step problem & unit scaler', 'Problemi in 4 passi e scala unitaria'],
    prompt: ['Scale quantities from 1 unit and check the expression step by step.', 'Calcola il valore di 1 unità e verifica il risultato dell’espressione.'],
    footnote: ['Always check that the unit of your answer matches the question.', 'Controlla sempre che l’unità di misura della risposta risponda alla domanda.']
  },
  'g5m-problem-method': {
    mode: 'problems-proportion',
    title: ['Problem solver & unit planner', 'Pianificatore di problemi e unità'],
    prompt: ['Change unit price and quantity to test your solution plan.', 'Cambia il prezzo unitario e la quantità per verificare il piano risolutivo.'],
    footnote: ['Read the question twice, list known data, plan operations and verify.', 'Leggi due volte, elenca i dati utili, imposta le operazioni e verifica.']
  },
  'g5m-problem-diagrams': {
    mode: 'operations-order',
    title: ['Diagram to arithmetic expression', 'Dal diagramma all’espressione'],
    prompt: ['Toggle brackets and adjust terms to compare two ways to write a problem.', 'Attiva o togli le parentesi e osserva come cambia il risultato finale.'],
    footnote: ['Brackets force addition or subtraction to run before multiplication.', 'Le parentesi eseguono addizione o sottrazione prima della moltiplicazione.']
  },
  'g5m-problem-strategies': {
    mode: 'operations-order',
    title: ['Compare two solution paths', 'Due strategie, stesso risultato'],
    prompt: ['See how a single combined expression matches a step-by-step calculation.', 'Osserva come un’espressione unica corrisponde al calcolo passo per passo.'],
    footnote: ['Different valid paths lead to the exact same answer.', 'Percorsi diversi ma corretti portano allo stesso risultato.']
  },
  'g5m-proportional': {
    mode: 'problems-proportion',
    title: ['Unitary method & direct proportion', 'Riduzione all’unità e proporzionalità'],
    prompt: ['Start with a bundle cost, find the cost of 1 item, then scale up.', 'Parti dal pacco, trova il costo di 1 oggetto e moltiplica per la richiesta.'],
    footnote: ['Equal quantities scale directly: double the items, double the price.', 'Grandezze direttamente proporzionali: raddoppiano gli oggetti, raddoppia il costo.']
  },
  'g5m-classification': {
    mode: 'logic-venn',
    title: ['Venn diagram classifier', 'Classificatore di Eulero-Venn'],
    prompt: ['Test numbers for Even and > 10 to sort them into regions.', 'Verifica se un numero è pari e maggiore di 10 per collocarlo nel diagramma.'],
    footnote: ['The overlapping centre contains elements satisfying both rules.', 'La zona centrale contiene gli elementi che rispettano entrambe le regole.']
  },
  'g5m-logic-statements': {
    mode: 'logic-venn',
    title: ['Statements and connectives lab', 'Laboratorio di enunciati e connettivi'],
    prompt: ['Flip P and Q to evaluate NOT, AND and OR statements live.', 'Cambia Vero e Falso di P e Q per valutare NON, E e O.'],
    footnote: ['AND needs both true; OR needs at least one true.', 'E richiede entrambe vere; O richiede almeno una proposizione vera.']
  },
  'g5m-statistics-graphs': {
    mode: 'data-averages',
    title: ['Bar chart & data table studio', 'Studio di istogrammi e tabelle dati'],
    prompt: ['Adjust the 5th bar to watch frequencies and the average line shift.', 'Modifica la quinta barra per osservare frequenza e linea della media.'],
    footnote: ['Bar height encodes frequency directly on the vertical scale.', 'L’altezza di ogni barra rappresenta la frequenza sulla scala verticale.']
  },
  'g5m-mode-mean-median': {
    mode: 'data-averages',
    title: ['Mode, median & mean calculator', 'Calcolatore di moda, mediana e media'],
    prompt: ['Change values to compare the mode, middle value and arithmetic mean.', 'Modifica i valori per confrontare moda, valore centrale e media aritmetica.'],
    footnote: ['Sort the dataset first before identifying the median.', 'Ordina sempre i dati dal più piccolo al più grande prima di trovare la mediana.']
  },
  'g5m-probability': {
    mode: 'probability-spinner',
    title: ['Probability & percentage spinner', 'Ruota della probabilità e percentuali'],
    prompt: ['Set favourable vs total sectors and run random spins to test predictions.', 'Imposta i settori favorevoli sui totali ed esegui lanci sperimentali.'],
    footnote: ['With more trials, experimental percentage approaches theoretical P.', 'All’aumentare delle prove la frequenza sperimentale si avvicina a P.']
  },
  'g5m-problems-review': {
    mode: 'problems-proportion',
    title: ['Problems & data check-up', 'Verifica: problemi e dati'],
    prompt: ['Test proportional reasoning and step-by-step verification.', 'Metti alla prova il metodo per risolvere problemi proporzionali.'],
    footnote: ['Re-read the question after calculating to check units and plausibility.', 'Rileggi la domanda finale per controllare unità e plausibilità.']
  },
  'g5m-natural-numbers': {
    mode: 'place-powers',
    title: ['Place value & polynomial form', 'Valore posizionale e forma polinomiale'],
    prompt: ['Move digits across units, tens, hundreds and thousands.', 'Sposta le cifre tra unità, decine, centinaia e migliaia.'],
    footnote: ['Every digit’s value equals digit × its power of 10.', 'Il valore di ogni cifra è dato dalla cifra per la sua potenza di 10.']
  },
  'g5m-roman-numerals': {
    mode: 'roman-numerals',
    title: ['Roman numeral converter', 'Convertitore dei numeri romani'],
    prompt: ['Slide any number up to 2026 to see additive and subtractive Roman symbols.', 'Scegli un numero fino a 2026 per scomporlo in simboli romani.'],
    footnote: ['A smaller symbol before a larger one subtracts (IV = 4, IX = 9, XL = 40).', 'Un simbolo minore prima di uno maggiore sottrae (IV = 4, IX = 9, XL = 40).']
  },
  'g5m-big-numbers': {
    mode: 'place-powers',
    title: ['Millions & billions composer', 'Compositore di milioni e miliardi'],
    prompt: ['Raise powers of 10 up to 10⁹ to explore huge numbers.', 'Esplora le potenze di 10 fino a 10⁹ per leggere i grandi numeri.'],
    footnote: ['Group digits in threes from the right into units, thousands, millions and billions.', 'Raggruppa a tre a tre da destra: unità, migliaia, milioni, miliardi.']
  },
  'g5m-powers': {
    mode: 'place-powers',
    title: ['Powers & exponents workbench', 'Banco di lavoro sulle potenze'],
    prompt: ['Change base and exponent to watch repeated multiplication grow.', 'Modifica base ed esponente per osservare la moltiplicazione ripetuta.'],
    footnote: ['An exponent counts how many times the base is used as a factor.', 'L’esponente indica quante volte la base è moltiplicata per se stessa.']
  },
  'g5m-negative-numbers': {
    mode: 'number-rounding',
    title: ['Integer number line', 'Retta dei numeri interi'],
    prompt: ['Move the marker left and right across zero to compare relative numbers.', 'Sposta il cursore a destra e sinistra dello zero per confrontare i numeri relativi.'],
    footnote: ['Numbers further right on the line are always greater.', 'Sulla retta orientata il numero più a destra è sempre il maggiore.']
  },
  'g5m-decimals': {
    mode: 'number-rounding',
    title: ['Decimals & place explorer', 'Esploratore dei numeri decimali'],
    prompt: ['Adjust tenths and hundredths and see their exact point on the scale.', 'Varia decimi e centesimi per vedere la posizione esatta sulla retta.'],
    footnote: ['Zeroes at the far right of a decimal do not change its value.', 'Gli zeri finali dopo le cifre decimali non cambiano il valore del numero.']
  },
  'g5m-rounding': {
    mode: 'number-rounding',
    title: ['Rounding hill & estimator', 'Arrotondamento e stima'],
    prompt: ['Adjust the decimal value to test rounding to the nearest unit or tenth.', 'Cambia il numero decimale per osservare l’arrotondamento per difetto o eccesso.'],
    footnote: ['If the next digit is 0–4 round down; if 5–9 round up.', 'Con la cifra seguente 0–4 arrotonda per difetto; con 5–9 per eccesso.']
  },
  'g5m-add-subtract': {
    mode: 'operations-order',
    title: ['Addition, subtraction & inverse check', 'Addizione, sottrazione e prova'],
    prompt: ['Change both terms and verify using the inverse operation.', 'Cambia i termini ed esegui la prova con l’operazione inversa.'],
    footnote: ['Adding the same number to minuend and subtrahend leaves the difference unchanged.', 'Proprietà invariantiva: aggiungere o togliere lo stesso numero non cambia la differenza.']
  },
  'g5m-multiply-divide': {
    mode: 'operations-order',
    title: ['Multiplication, division & remainders', 'Moltiplicazione, divisione e resto'],
    prompt: ['Adjust dividend and divisor to verify quotient × divisor + remainder.', 'Modifica dividendo e divisore per verificare quoziente × divisore + resto.'],
    footnote: ['The remainder is always strictly smaller than the divisor.', 'Il resto è sempre minore del divisore.']
  },
  'g5m-times-10-100-1000': {
    mode: 'number-rounding',
    title: ['× 10, × 100, × 1 000 place shifter', 'Sposta-virgola × 10, × 100, × 1 000'],
    prompt: ['Slide a decimal number and apply × 10, × 100 or ÷ 10 shifts.', 'Scegli un decimale e osserva lo spostamento con × 10, × 100 o : 10.'],
    footnote: ['Each factor of 10 shifts the decimal point one step to the right.', 'Ogni × 10 sposta la virgola di un posto verso destra (e : 10 verso sinistra).']
  },
  'g5m-properties': {
    mode: 'operations-order',
    title: ['Operation properties lab', 'Laboratorio sulle proprietà delle operazioni'],
    prompt: ['Split rectangles with the distributive property a × (b + c) = a×b + a×c.', 'Dividi il rettangolo con la proprietà distributiva a × (b + c) = a×b + a×c.'],
    footnote: ['Breaking a factor into parts makes mental multiplication fast and exact.', 'Scomporre un fattore rende il calcolo mentale rapido e preciso.']
  },
  'g5m-decimal-division': {
    mode: 'operations-order',
    title: ['Decimal division verifier', 'Verificatore delle divisioni decimali'],
    prompt: ['Scale both dividend and divisor by 10 to clear decimal divisors.', 'Applica la proprietà invariantiva per rendere intero il divisore.'],
    footnote: ['Multiplying both dividend and divisor by 10 or 100 keeps the quotient identical.', 'Moltiplicando dividendo e divisore per 10 o 100 il quoziente non cambia.']
  },
  'g5m-mental-estimates': {
    mode: 'number-rounding',
    title: ['Mental calculation & estimation', 'Calcolo mentale e stima'],
    prompt: ['Compare exact decimal values with rounded estimates before calculating.', 'Confronta il valore esatto con la sua stima arrotondata.'],
    footnote: ['Estimating first helps spot misplaced decimal points immediately.', 'Stimare prima del calcolo evita errori grossolani di ordine di grandezza.']
  },
  'g5m-expressions': {
    mode: 'operations-order',
    title: ['Arithmetic expression evaluator', 'Valutatore di espressioni aritmetiche'],
    prompt: ['Compare a × (b + c) vs a × b + c with step-by-step highlights.', 'Confronta a × (b + c) e a × b + c rispettando la precedenza delle operazioni.'],
    footnote: ['Always evaluate brackets first, then × and ÷, then + and −.', 'Esegui prima le parentesi, poi moltiplicazioni e divisioni, infine somme e sottrazioni.']
  },
  'g5m-multiples-divisors': {
    mode: 'factors-primes',
    title: ['Multiples & divisors explorer', 'Esploratore di multipli e divisori'],
    prompt: ['Pick two numbers to list their divisors, first multiples, GCD and LCM.', 'Scegli due numeri per vedere divisori, primi multipli, M.C.D. e m.c.m.'],
    footnote: ['Every number divides itself and is a multiple of 1.', 'Ogni numero è divisore di se stesso ed è multiplo di 1.']
  },
  'g5m-divisibility': {
    mode: 'factors-primes',
    title: ['Divisibility rules tester', 'Tester dei criteri di divisibilità'],
    prompt: ['Inspect the last digit and digit sum to test division by 2, 3, 5, 9 and 10.', 'Controlla ultima cifra e somma delle cifre per verificare 2, 3, 5, 9 e 10.'],
    footnote: ['If a number is divisible by both 2 and 3, it is divisible by 6.', 'Se un numero è divisibile sia per 2 sia per 3, è divisibile per 6.']
  },
  'g5m-primes': {
    mode: 'factors-primes',
    title: ['Prime numbers & factorisation lab', 'Numeri primi e scomposizione'],
    prompt: ['Slide a number from 2 to 60 to reveal its prime factorisation and divisors.', 'Scegli un numero da 2 a 60 per vedere i suoi fattori primi e i divisori.'],
    footnote: ['Every composite number factors uniquely into prime numbers.', 'Ogni numero composto si scompone in fattori primi in modo unico.']
  },
  'g5m-numbers-review': {
    mode: 'operations-order',
    title: ['Numbers check-up bench', 'Verifica: numeri ed espressioni'],
    prompt: ['Practice operation priorities and properties together.', 'Ripassa proprietà delle operazioni e precedenze nelle espressioni.'],
    footnote: ['Check inverse operations and brackets at every step.', 'Controlla operazioni inverse e parentesi in ogni passaggio.']
  },
  'g5m-fractions': {
    mode: 'fractions-decimals',
    title: ['Fraction unit & bar builder', 'Unità frazionaria e barra delle frazioni'],
    prompt: ['Set numerator and denominator to classify proper, improper and apparent fractions.', 'Modifica numeratore e denominatore per distinguere frazioni proprie, improprie e apparenti.'],
    footnote: ['Proper fractions are < 1; improper are > 1; apparent equal whole numbers.', 'Le proprie sono < 1; le improprie > 1; le apparenti valgono un numero intero.']
  },
  'g5m-equivalent-fractions': {
    mode: 'fractions-decimals',
    title: ['Equivalent fraction scaler', 'Frazioni equivalenti e semplificazione'],
    prompt: ['See how multiplying numerator and denominator by the same number preserves value.', 'Osserva la frazione ridotta ai minimi termini e la sua forma equivalente.'],
    footnote: ['Dividing both terms by their GCD yields the simplest fraction.', 'Dividendo numeratore e denominatore per il M.C.D. ottieni i minimi termini.']
  },
  'g5m-compare-fractions': {
    mode: 'fractions-decimals',
    title: ['Fraction comparator', 'Confronto tra frazioni'],
    prompt: ['Compare your fraction against 1/2 and convert to decimals to order cleanly.', 'Confronta la frazione con 1/2 e trasforma in numero decimale.'],
    footnote: ['Two fractions share the same size when their decimal values match.', 'Due frazioni rappresentano la stessa quantità quando hanno uguale valore decimale.']
  },
  'g5m-fractions-decimals': {
    mode: 'fractions-decimals',
    title: ['Fractions ↔ decimals converter', 'Frazioni e numeri decimali'],
    prompt: ['Divide numerator by denominator and watch the fraction become a decimal.', 'Esegui numeratore : denominatore per passare dalla frazione al decimale.'],
    footnote: ['Decimal fractions have denominators 10, 100 or 1 000.', 'Le frazioni decimali hanno al denominatore 10, 100 o 1 000.']
  },
  'g5m-fraction-of-quantity': {
    mode: 'fractions-decimals',
    title: ['Whole → fraction calculator', 'Dall’intero alla frazione'],
    prompt: ['Pick a whole quantity, divide into equal parts and take n parts.', 'Scegli l’intero, dividilo per il denominatore e moltiplica per il numeratore.'],
    footnote: ['First find 1/d of the whole, then multiply by the numerator.', 'Trova prima l’unità frazionaria (1/d) e poi moltiplica per il numeratore.']
  },
  'g5m-whole-from-fraction': {
    mode: 'fractions-decimals',
    title: ['Fraction → whole reconstructor', 'Dalla frazione all’intero'],
    prompt: ['Given the value of the fraction part, rebuild the complete 100% whole.', 'Conoscendo la parte frazionaria, ricostruisci l’intero completo.'],
    footnote: ['Divide the part by the numerator, then multiply by the denominator.', 'Dividi la parte per il numeratore e moltiplica per il denominatore.']
  },
  'g5m-percentages': {
    mode: 'percentages-money',
    title: ['10×10 percentage grid lab', 'Griglia 10×10 delle percentuali'],
    prompt: ['Change percentage to view the grid, fraction, decimal and amount of a price.', 'Varia la percentuale per vedere griglia, frazione, decimale e importo.'],
    footnote: ['p% means p parts out of 100 (p/100).', 'p% significa p parti su 100 (p/100).']
  },
  'g5m-managing-money': {
    mode: 'percentages-money',
    title: ['Discounts, savings & civic budget', 'Sconti, risparmi e bilancio personale'],
    prompt: ['Test how a percentage discount changes both savings and final cost.', 'Prova come uno sconto percentuale cambia risparmio e prezzo finale.'],
    footnote: ['Compare percentage discounts on the real original price before buying.', 'Calcola sempre lo sconto sul prezzo iniziale per confrontare due offerte.']
  },
  'g5m-fractions-review': {
    mode: 'fractions-decimals',
    title: ['Fractions & decimals check-up', 'Verifica: frazioni e decimali'],
    prompt: ['Explore fractions, equivalents and quantities of a whole.', 'Ripassa equivalenze tra frazioni, decimali e frazione di un numero.'],
    footnote: ['Fraction = division between numerator and denominator.', 'Ogni frazione rappresenta la divisione tra numeratore e denominatore.']
  },
  'g5m-what-is-measuring': {
    mode: 'metric-time',
    title: ['Metric ladder & equivalences', 'Scala delle misure ed equivalenze'],
    prompt: ['Choose the measurement category and move one step larger or smaller.', 'Scegli la grandezza e osserva i passaggi tra multipli e sottomultipli.'],
    footnote: ['To a smaller unit multiply; to a larger unit divide.', 'Verso un’unità più piccola moltiplica; verso una più grande dividi.']
  },
  'g5m-length': {
    mode: 'metric-time',
    title: ['Length converter (km ↔ mm)', 'Convertitore di lunghezza (km ↔ mm)'],
    prompt: ['Convert metres into kilometres, decimetres, centimetres and millimetres.', 'Trasforma i metri in chilometri, decimetri, centimetri e millimetri.'],
    footnote: ['Each length step multiplies or divides by 10.', 'Ogni passaggio nelle misure di lunghezza vale × 10 oppure : 10.']
  },
  'g5m-capacity': {
    mode: 'metric-time',
    title: ['Capacity converter (hl ↔ ml)', 'Convertitore di capacità (hl ↔ ml)'],
    prompt: ['Convert litres across hectolitres, decalitres, decilitres and millilitres.', 'Trasforma i litri tra ettolitri, decalitri, decilitri e millilitri.'],
    footnote: ['Each capacity step multiplies or divides by 10.', 'Ogni gradino nelle misure di capacità vale × 10 o : 10.']
  },
  'g5m-mass': {
    mode: 'metric-time',
    title: ['Mass converter (Mg ↔ g)', 'Convertitore di massa (Mg ↔ g)'],
    prompt: ['Convert kilograms into tonnes (Mg), hectograms, decagrams and grams.', 'Trasforma i chilogrammi in megagrammi (tonnellate), etti e grammi.'],
    footnote: ['Gross weight = Net weight + Tare.', 'Peso lordo = Peso netto + Tara.']
  },
  'g5m-area-units': {
    mode: 'metric-time',
    title: ['Square area units (× 100 steps)', 'Misure di superficie (passi × 100)'],
    prompt: ['Convert square metres (m²) into dm² and cm² — two zeros per step!', 'Trasforma m² in dm² e cm²: due posti per ogni gradino!'],
    footnote: ['Area has 2 dimensions, so every unit step multiplies or divides by 100.', 'La superficie ha 2 dimensioni: ogni passo vale × 100 o : 100.']
  },
  'g5m-volume-units': {
    mode: 'metric-time',
    title: ['Cubic volume units (× 1 000 steps)', 'Misure di volume (passi × 1 000)'],
    prompt: ['Convert cubic metres (m³) into dm³ (= litres!) and cm³.', 'Trasforma m³ in dm³ (= litri!) e cm³: tre posti per ogni gradino.'],
    footnote: ['1 dm³ equals 1 litre; every step multiplies or divides by 1 000.', '1 dm³ equivale a 1 litro; ogni passaggio vale × 1 000 o : 1 000.']
  },
  'g5m-time': {
    mode: 'metric-time',
    title: ['Time converter (base 60)', 'Misure di tempo (base 60)'],
    prompt: ['Convert hours and minutes to seconds using × 60 steps.', 'Trasforma ore e minuti in secondi con i passaggi in base 60.'],
    footnote: ['Time is not decimal: 1 h = 60 min and 1 min = 60 s.', 'Il tempo non è decimale: 1 h = 60 min e 1 min = 60 s.']
  },
  'g5m-speed': {
    mode: 'speed-trade',
    title: ['Distance, time & speed lab', 'Laboratorio spazio, tempo e velocità'],
    prompt: ['Adjust speed and travel time to track total distance along the journey bar.', 'Regola velocità e tempo di viaggio per calcolare lo spazio percorso.'],
    footnote: ['Distance = speed × time · Speed = distance ÷ time.', 'Spazio = velocità × tempo · Velocità = spazio : tempo.']
  },
  'g5m-money-trade': {
    mode: 'speed-trade',
    title: ['Trade calculator: profit & loss', 'Compravendita: spesa, ricavo e guadagno'],
    prompt: ['Adjust cost and selling price to see profit or loss immediately.', 'Modifica spesa e ricavo per osservare subito guadagno o perdita.'],
    footnote: ['When revenue > cost you earn a profit (revenue − cost).', 'Se il ricavo supera la spesa c’è guadagno (ricavo − spesa).']
  },
  'g5m-exchange-online': {
    mode: 'speed-trade',
    title: ['Currency exchange & total cost lab', 'Cambio di valuta e costi totali'],
    prompt: ['Convert euros at custom rates and compare total costs cleanly.', 'Converti euro al tasso scelto e confronta il costo finale.'],
    footnote: ['Multiply euros by the rate to convert; divide to return to euros.', 'Moltiplica per il tasso di cambio o dividi per tornare alla valuta base.']
  },
  'g5m-measure-review': {
    mode: 'metric-time',
    title: ['Measurement check-up converter', 'Verifica sulle equivalenze'],
    prompt: ['Switch between length, mass, capacity, area and volume units.', 'Esercitati con le equivalenze su tutte le scale di misura.'],
    footnote: ['Count steps carefully: ×10 for length/mass/capacity, ×100 for area, ×1000 for volume.', 'Conta i gradini: ×10 lineari, ×100 superficie, ×1000 volume.']
  },
  'g5m-cartesian': {
    mode: 'cartesian-isometry',
    title: ['Interactive Cartesian plane', 'Piano cartesiano interattivo'],
    prompt: ['Move horizontal x and vertical y coordinates to plot point A.', 'Sposta ascissa x e ordinata y per posizionare il punto A sul piano.'],
    footnote: ['Always read x across first, then y up.', 'Leggi sempre prima la coordinata orizzontale x, poi la verticale y.']
  },
  'g5m-isometries': {
    mode: 'cartesian-isometry',
    title: ['Isometry transformer (slide, mirror, turn)', 'Trasformazioni isometriche interattive'],
    prompt: ['Switch between Translation, Symmetry and Rotation to move shape A → A′.', 'Alterna traslazione, simmetria e rotazione per trasformare A in A′.'],
    footnote: ['An isometry shifts or turns a figure while keeping distances equal.', 'Ogni isometria sposta o ruota la figura senza deformarla.']
  },
  'g5m-similarity-fractals': {
    mode: 'angles-regular',
    title: ['Scale factor & regular similarity', 'Scala, similitudine e poligoni'],
    prompt: ['Scale side length while keeping all angles of the regular polygon constant.', 'Varia la scala dei lati mantenendo invariati gli angoli del poligono.'],
    footnote: ['Similar shapes have equal angles and proportional side lengths.', 'Figure simili hanno gli stessi angoli e lati in proporzione.']
  },
  'g5m-lines-angles': {
    mode: 'angles-regular',
    title: ['Live protractor & angle classifier', 'Goniometro e classificatore di angoli'],
    prompt: ['Sweep the angle arm from 15° to 180° to test acute, right, obtuse and straight angles.', 'Ruota il lato da 15° a 180° per vedere angolo acuto, retto, ottuso e piatto.'],
    footnote: ['90° is a right angle; 180° is a straight angle; 360° is a full turn.', '90° è l’angolo retto; 180° l’angolo piatto; 360° l’angolo giro.']
  },
  'g5m-polygons': {
    mode: 'angles-regular',
    title: ['Polygon sides, interior angles & perimeter', 'Poligoni: lati, angoli interni e perimetro'],
    prompt: ['Choose 3 to 8 sides to inspect interior angle sum (n − 2) × 180°.', 'Scegli da 3 a 8 lati per esplorare somma degli angoli e perimetro.'],
    footnote: ['Any n-gon splits into (n − 2) triangles from one vertex.', 'Ogni poligono di n lati si divide in (n − 2) triangoli.']
  },
  'g5m-rectangle-square': {
    mode: 'plane-areas',
    title: ['Rectangle & square perimeter and area', 'Perimetro e area: rettangolo e quadrato'],
    prompt: ['Adjust base b and height h to compare perimeter and area live.', 'Varia base b e altezza h per osservare subito perimetro e area.'],
    footnote: ['Perimeter measures the boundary (cm); area covers the surface (cm²).', 'Il perimetro misura il contorno (cm); l’area la superficie interna (cm²).']
  },
  'g5m-rhomboid-rhombus': {
    mode: 'plane-areas',
    title: ['Rhomboid & rhombus area workbench', 'Banco di lavoro: romboide e rombo'],
    prompt: ['Toggle between rhomboid (b × h) and rhombus ((D × d) ÷ 2).', 'Scegli tra romboide (b × h) e rombo ((D × d) : 2).'],
    footnote: ['A rhombus’s diagonals cut its bounding rectangle exactly in half.', 'Le diagonali del rombo dividono esattamente a metà il rettangolo circoscritto.']
  },
  'g5m-trapezium': {
    mode: 'plane-areas',
    title: ['Trapezium area explorer', 'Esploratore dell’area del trapezio'],
    prompt: ['Change major base B, minor base b and height h to compute (B + b) × h ÷ 2.', 'Modifica base maggiore B, base minore b e altezza h.'],
    footnote: ['Think of a trapezium as half a parallelogram of base B + b.', 'Un trapezio è la metà di un parallelogramma di base B + b.']
  },
  'g5m-triangle': {
    mode: 'plane-areas',
    title: ['Triangle base × height explorer', 'Esploratore di base e altezza del triangolo'],
    prompt: ['Change base b and height h to see how (b × h) ÷ 2 stays half the rectangle.', 'Cambia base b e altezza h: l’area resta metà del rettangolo corrispondente.'],
    footnote: ['Height is always perpendicular to the chosen base.', 'L’altezza è sempre perpendicolare alla base scelta.']
  },
  'g5m-complex-polygons': {
    mode: 'plane-areas',
    title: ['Composite L-shape area builder', 'Scomposizione di poligoni complessi'],
    prompt: ['Combine two rectangles to find the total perimeter and area of an L-plan.', 'Unisci due rettangoli per calcolare l’area totale di una pianta a L.'],
    footnote: ['Break complex floor plans into non-overlapping rectangles before adding.', 'Dividi la figura complessa in rettangoli semplici prima di sommare le aree.']
  },
  'g5m-regular-polygons': {
    mode: 'angles-regular',
    title: ['Regular polygon & apothem calculator', 'Poligoni regolari e apotema'],
    prompt: ['Pick side count and side length to compute apothem and area P × a ÷ 2.', 'Scegli numero di lati e misura del lato per calcolare apotema e area P × a : 2.'],
    footnote: ['Each regular polygon splits into n identical triangles of height a.', 'Ogni poligono regolare è formato da n triangoli uguali di altezza a (apotema).']
  },
  'g5m-circle': {
    mode: 'circle-solids',
    title: ['Circle parts, circumference & area', 'Cerchio: raggio, diametro e circonferenza'],
    prompt: ['Adjust radius r to watch diameter, circumference and area update.', 'Varia il raggio r per calcolare diametro, circonferenza e area.'],
    footnote: ['Diameter is always twice the radius (d = 2r).', 'Il diametro è sempre il doppio del raggio (d = 2r).']
  },
  'g5m-circumference-pi': {
    mode: 'circle-solids',
    title: ['Pi & circumference explorer', 'Pi greco e misura della circonferenza'],
    prompt: ['Vary diameter d and verify that C ÷ d is always ≈ 3.14.', 'Varia il diametro d e verifica che il rapporto C : d vale sempre circa 3,14.'],
    footnote: ['C = d × π = 2 × r × π.', 'C = d × π = 2 × r × π.']
  },
  'g5m-circle-area': {
    mode: 'circle-solids',
    title: ['Circle area builder (r × r × π)', 'Costruttore dell’area del cerchio'],
    prompt: ['Notice how squaring radius r makes area grow quadratically.', 'Osserva come l’area cresce con r × r × π.'],
    footnote: ['Doubling the radius multiplies the area by 4.', 'Raddoppiando il raggio, l’area del cerchio diventa 4 volte più grande.']
  },
  'g5m-solids': {
    mode: 'circle-solids',
    title: ['3D cuboid & prism explorer', 'Esploratore dei solidi 3D'],
    prompt: ['Switch to Solids mode and adjust length, width and height.', 'Passa ai solidi e regola lunghezza, larghezza e altezza.'],
    footnote: ['A cuboid has 6 rectangular faces, 12 edges and 8 vertices.', 'Un parallelepipedo rettangolo ha 6 facce, 12 spigoli e 8 vertici.']
  },
  'g5m-solid-area': {
    mode: 'circle-solids',
    title: ['Surface area of solids lab', 'Laboratorio sulla superficie dei solidi'],
    prompt: ['Adjust the 3 dimensions of a box to separate lateral and total surface area.', 'Varia le 3 dimensioni per confrontare superficie laterale e totale.'],
    footnote: ['Total surface = lateral surface + 2 × base area.', 'Superficie totale = superficie laterale + 2 × area di base.']
  },
  'g5m-volume': {
    mode: 'circle-solids',
    title: ['Volume & cubic capacity explorer', 'Volume in unità cubiche e litri'],
    prompt: ['Change length, width and height (cm or dm) to stack unit cubes live.', 'Modifica le dimensioni (cm o dm) per riempire il solido di cubetti unitari.'],
    footnote: ['V = l × w × h · Every 1 000 cm³ equals 1 litre.', 'V = l × p × h · Ogni 1 000 cm³ corrispondono a 1 litro.']
  },
  'g5m-geometry-review': {
    mode: 'plane-areas',
    title: ['Geometry formulas review bench', 'Ripasso completo delle aree'],
    prompt: ['Switch between shapes to compare perimeter and area formulas side by side.', 'Alterna le figure piane per confrontare formule di perimetro e area.'],
    footnote: ['Check whether the question asks for linear length (cm) or square area (cm²).', 'Controlla sempre se il problema chiede una lunghezza (cm) o una superficie (cm²).']
  },
  'g5m-final-invalsi': {
    mode: 'probability-spinner',
    title: ['Invalsi check-up: chance & reasoning', 'Allenamento Invalsi: logica e probabilità'],
    prompt: ['Experiment with fractions, percentages and outcomes before the final battle.', 'Sperimenta con frazioni, percentuali e previsioni prima della prova finale.'],
    footnote: ['Every Invalsi problem combines reading carefully with clear visual models.', 'Ogni quesito Invalsi unisce lettura attenta dei dati e modelli visivi chiari.']
  }
};

export const ALL_GRADE5_MATH_LAB_IDS = Object.keys(SPECS);

export function getGrade5MathLabSpec(missionId: string): Grade5MathLabSpec | null {
  return SPECS[missionId] ?? null;
}

export const g5Txt = (lang: Language, en: string, it: string) => (lang === 'it' ? it : en);
export const g5Dec = (lang: Language, val: number, digits = 2) => {
  const s = Number.isInteger(val) ? String(val) : val.toFixed(digits);
  return lang === 'it' ? s.replace(/\./g, ',') : s;
};
export const g5Div = (lang: Language) => (lang === 'it' ? ':' : '÷');
export const g5Coord = (lang: Language, x: number, y: number) =>
  lang === 'it' ? `(${x}; ${y})` : `(${x}, ${y})`;
