import { Mission } from "../types";

/**
 * Physics Foundations extension for the opening measurement chapter.
 * Keeps the original missions intact while adding mass, SI prefixes,
 * time conversion, Cartesian coordinates and functions.
 */
export const PHYSICS_FOUNDATION_MISSIONS: Mission[] = [
  {
    id: "p1m4",
    arc: 16,
    sec: "1.8",
    pages: "31",
    hue: 330,
    horns: 2,
    eyes: 3,
    title: ["Mass, Time & the SI Toolkit", "Massa, tempo e strumenti del SI"],
    topic: [
      "Mass measurement, SI prefixes and time conversions",
      "Misura della massa, prefissi SI e conversioni del tempo"
    ],
    demon: ["The Unit Shifter", "Il Mutaunità"],
    tech: [
      "Measure Form · Fourth Technique: Balance and Convert",
      "Stile della Misura · Quarta Tecnica: Bilancia e converti"
    ],
    scenes: [
      {
        who: "s",
        vis: "phQuant",
        text: [
          "<p>Every measurement needs a number and a unit, {name}. The SI has <b>seven base quantities</b>: length (metre, m), mass (kilogram, kg), time (second, s), electric current (ampere, A), temperature (kelvin, K), amount of substance (mole, mol) and luminous intensity (candela, cd).</p><p>Think of them as seven building blocks. Other quantities, such as speed and area, are made by combining them.</p>",
          "<p>Ogni misura ha bisogno di un numero e di un'unità, {name}. Il SI ha <b>sette grandezze fondamentali</b>: lunghezza (metro, m), massa (chilogrammo, kg), tempo (secondo, s), corrente elettrica (ampere, A), temperatura (kelvin, K), quantità di sostanza (mole, mol) e intensità luminosa (candela, cd).</p><p>Sono sette mattoni di base. Le altre grandezze, come velocità e area, si ottengono combinandole.</p>"
        ]
      },
      {
        who: "s",
        vis: "phQuant",
        text: [
          "<p>Prefixes tell us how a unit is scaled. <b>kilo</b> means 1,000 times the unit (1 km = 1,000 m); <b>centi</b> means one hundredth (1 cm = 0.01 m); <b>milli</b> means one thousandth (1 ms = 0.001 s).</p><p>Other useful steps: mega = 10⁶, giga = 10⁹, micro = 10⁻⁶ and nano = 10⁻⁹. A prefix changes the size of the unit, not the kind of quantity.</p>",
          "<p>I prefissi indicano quanto vale un'unità. <b>Chilo</b> significa 1.000 volte l'unità (1 km = 1.000 m); <b>centi</b> significa un centesimo (1 cm = 0,01 m); <b>milli</b> significa un millesimo (1 ms = 0,001 s).</p><p>Altri passaggi utili: mega = 10⁶, giga = 10⁹, micro = 10⁻⁶ e nano = 10⁻⁹. Il prefisso cambia la dimensione dell'unità, non il tipo di grandezza.</p>"
        ]
      },
      {
        who: "y",
        vis: "phQuant",
        text: [
          "<p>So 1 kilometre and 1,000 metres describe the same length, just with different units?</p>",
          "<p>Quindi 1 chilometro e 1.000 metri indicano la stessa lunghezza, ma con unità diverse?</p>"
        ]
      },
      {
        who: "s",
        vis: "phQuant",
        text: [
          "<p>Exactly. Now meet <b>mass</b>: operationally, we measure it with a balance. Its SI unit is the kilogram (kg). Since 20 May 2019, the kilogram has been defined using the fixed value of the Planck constant, not a special metal cylinder.</p><p>Mass is not weight. Mass stays the same on Earth and on the Moon; weight is the gravitational force on that mass, so it changes when gravity changes: <b>weight = mass × gravitational field strength</b>.</p>",
          "<p>Esatto. Ora conosciamo la <b>massa</b>: operativamente, la misuriamo con una bilancia. La sua unità SI è il chilogrammo (kg). Dal 20 maggio 2019 il chilogrammo è definito usando il valore fissato della costante di Planck, non un particolare cilindro metallico.</p><p>La massa non è il peso. La massa resta uguale sulla Terra e sulla Luna; il peso è la forza di gravità che agisce sulla massa, quindi cambia se cambia la gravità: <b>peso = massa × intensità del campo gravitazionale</b>.</p>"
        ]
      },
      {
        who: "s",
        vis: "phScale",
        text: [
          "<p>Masses range from tiny particles to enormous space objects. A basketball is about 0.6 kg, an adult about 70 kg, a car about 1,200 kg, Earth about 5.97 × 10²⁴ kg and an electron about 9.11 × 10⁻³¹ kg.</p><p>These examples show why powers of ten are useful: the same unit, kilogram, can describe an electron and a planet.</p>",
          "<p>Le masse vanno da particelle minuscole a enormi oggetti nello spazio. Una palla da basket ha una massa di circa 0,6 kg, un adulto circa 70 kg, un'automobile circa 1.200 kg, la Terra circa 5,97 × 10²⁴ kg e un elettrone circa 9,11 × 10⁻³¹ kg.</p><p>Questi esempi mostrano perché servono le potenze di dieci: la stessa unità, il chilogrammo, descrive sia un elettrone sia un pianeta.</p>"
        ]
      },
      {
        who: "s",
        vis: "phQuant",
        text: [
          "<p>Time is also a base quantity. To convert 42 days into seconds, break the conversion into steps: 1 day = 24 hours; 1 hour = 60 minutes; 1 minute = 60 seconds.</p><p>So 42 × 24 × 60 × 60 = <b>3,628,800 s</b> = 3.6288 × 10⁶ s. Keep the units with each step so you can see what cancels.</p>",
          "<p>Anche il tempo è una grandezza fondamentale. Per convertire 42 giorni in secondi, procedi per passaggi: 1 giorno = 24 ore; 1 ora = 60 minuti; 1 minuto = 60 secondi.</p><p>Quindi 42 × 24 × 60 × 60 = <b>3.628.800 s</b> = 3,6288 × 10⁶ s. Scrivi le unità a ogni passaggio per controllare le conversioni.</p>"
        ]
      },
      {
        type: "sort",
        title: ["Sort the SI prefixes", "Classifica i prefissi SI"],
        hint: [
          "Place each prefix in the correct group: larger or smaller than the base unit.",
          "Inserisci ogni prefisso nel gruppo corretto: multipli o sottomultipli dell'unità."
        ],
        cats: [["Multiples (greater than 1)", "Multipli (maggiori di 1)"], ["Submultiples (less than 1)", "Sottomultipli (minori di 1)"]],
        items: [
          { n: ["kilo (k) = 10³", "chilo (k) = 10³"], i: "layers", c: 0, why: ["10³ = 1,000, so it is a multiple.", "10³ = 1.000, quindi è un multiplo."] },
          { n: ["mega (M) = 10⁶", "mega (M) = 10⁶"], i: "zap", c: 0, why: ["10⁶ is greater than one.", "10⁶ è maggiore di uno."] },
          { n: ["centi (c) = 10⁻²", "centi (c) = 10⁻²"], i: "ruler", c: 1, why: ["10⁻² = 0.01, one hundredth.", "10⁻² = 0,01, un centesimo."] },
          { n: ["milli (m) = 10⁻³", "milli (m) = 10⁻³"], i: "clock", c: 1, why: ["10⁻³ = 0.001, one thousandth.", "10⁻³ = 0,001, un millesimo."] },
          { n: ["micro (μ) = 10⁻⁶", "micro (μ) = 10⁻⁶"], i: "eye", c: 1, why: ["A negative exponent gives a fraction of the base unit.", "Un esponente negativo indica una frazione dell'unità base."] },
          { n: ["giga (G) = 10⁹", "giga (G) = 10⁹"], i: "star", c: 0, why: ["10⁹ is one billion times the base unit.", "10⁹ equivale a un miliardo di volte l'unità base."] }
        ]
      },
      {
        who: "d",
        vis: "demon",
        text: [
          "<p>I'm the Unit Shifter! I swap prefixes, kilograms and seconds until every measurement is wrong. Keep the unit with the number and you can catch me!</p>",
          "<p>Sono il Mutaunità! Scambio prefissi, chilogrammi e secondi finché ogni misura diventa sbagliata. Tieni sempre l'unità accanto al numero e potrai smascherarmi!</p>"
        ]
      },
      { type: "battle" }
    ],
    quiz: [
      {
        q: ["Which is the SI base unit of mass?", "Qual è l'unità fondamentale SI della massa?"],
        a: [["Kilogram (kg)", "Chilogrammo (kg)"], ["Gram (g)", "Grammo (g)"], ["Newton (N)", "Newton (N)"], ["Pound (lb)", "Libbra (lb)"]],
        why: ["The kilogram is the SI base unit for mass.", "Il chilogrammo è l'unità fondamentale SI della massa."]
      },
      {
        q: ["A person's mass on the Moon compared with Earth is…", "La massa di una persona sulla Luna rispetto alla Terra è…"],
        a: [["the same", "la stessa"], ["six times larger", "sei volte maggiore"], ["one sixth", "un sesto"], ["zero", "zero"]],
        why: ["Mass does not depend on the local gravitational field; weight does.", "La massa non dipende dal campo gravitazionale locale; il peso sì."]
      },
      {
        q: ["What does the prefix milli- mean?", "Che cosa significa il prefisso milli-?"],
        a: [["10⁻³", "10⁻³"], ["10³", "10³"], ["10⁻⁶", "10⁻⁶"], ["10⁶", "10⁶"]],
        why: ["Milli means one thousandth of the base unit.", "Milli significa un millesimo dell'unità base."]
      },
      {
        q: ["How many seconds are in one day?", "Quanti secondi ci sono in un giorno?"],
        a: [["86,400 s", "86.400 s"], ["8,640 s", "8.640 s"], ["864 s", "864 s"], ["864,000 s", "864.000 s"]],
        why: ["24 × 60 × 60 = 86,400 seconds.", "24 × 60 × 60 = 86.400 secondi."]
      },
      {
        q: ["42 days are equal to…", "42 giorni equivalgono a…"],
        a: [["3,628,800 s", "3.628.800 s"], ["362,880 s", "362.880 s"], ["36,288,000 s", "36.288.000 s"], ["42,000 s", "42.000 s"]],
        why: ["42 × 24 × 60 × 60 = 3,628,800 seconds.", "42 × 24 × 60 × 60 = 3.628.800 secondi."]
      },
      {
        q: ["Since 2019, the kilogram is defined using a fixed value of…", "Dal 2019, il chilogrammo è definito usando un valore fissato della…"],
        a: [["Planck constant", "costante di Planck"], ["gravitational constant", "costante gravitazionale"], ["Avogadro number", "numero di Avogadro"], ["speed of sound", "velocità del suono"]],
        why: ["The modern SI definition fixes the Planck constant h.", "La definizione moderna del SI fissa la costante di Planck h."]
      }
    ]
  },
  {
    id: "p1m5",
    arc: 16,
    sec: "1.9",
    pages: "31",
    hue: 260,
    horns: 3,
    eyes: 2,
    title: ["Cartesian Graphs & Functions", "Grafici cartesiani e funzioni"],
    topic: [
      "Coordinates, axes, quadrants and relationships between variables",
      "Coordinate, assi, quadranti e relazioni tra variabili"
    ],
    demon: ["The Axis Trickster", "L'Ingannassi"],
    tech: [
      "Measure Form · Fifth Technique: Coordinate Sight",
      "Stile della Misura · Quinta Tecnica: Vista delle coordinate"
    ],
    scenes: [
      {
        who: "s",
        vis: "phGraph",
        text: [
          "<p>A Cartesian graph is a map for numbers, {name}. Two perpendicular number lines meet at the <b>origin</b> (0, 0). The horizontal axis is x (the abscissa); the vertical axis is y (the ordinate).</p><p>A point is written (x, y): move along x first, then up or down along y. For example, A(3, 4) means 3 units right and 4 units up.</p>",
          "<p>Un grafico cartesiano è una mappa dei numeri, {name}. Due rette numeriche perpendicolari si incontrano nell'<b>origine</b> (0, 0). L'asse orizzontale è x (ascissa); quello verticale è y (ordinata).</p><p>Un punto si scrive (x; y): prima ci si sposta lungo x, poi in alto o in basso lungo y. Per esempio, A(3; 4) significa 3 unità a destra e 4 in alto.</p>"
        ]
      },
      {
        who: "s",
        vis: "phGraph",
        text: [
          "<p>The axes divide the plane into four <b>quadrants</b>, numbered counter-clockwise. In quadrant I both coordinates are positive; in II x is negative and y positive; in III both are negative; in IV x is positive and y negative.</p><p>Remember the order: x first, y second. The point (−2, 3) is not the same as (3, −2).</p>",
          "<p>Gli assi dividono il piano in quattro <b>quadranti</b>, numerati in senso antiorario. Nel quadrante I entrambe le coordinate sono positive; nel II x è negativa e y positiva; nel III entrambe sono negative; nel IV x è positiva e y negativa.</p><p>Ricorda l'ordine: prima x, poi y. Il punto (−2; 3) non è uguale a (3; −2).</p>"
        ]
      },
      {
        who: "y",
        vis: "phGraph",
        text: [
          "<p>And when we say y is a function of x, does that mean every x has just one matching y?</p>",
          "<p>E quando diciamo che y è funzione di x, significa che a ogni x corrisponde un solo valore di y?</p>"
        ]
      },
      {
        who: "s",
        vis: "phGraph",
        text: [
          "<p>Exactly. x is the <b>independent variable</b>; y is the <b>dependent variable</b>. Imagine a cyclist moving at a steady 4 metres per second: distance depends on time, so d = 4t. At 1, 2 and 3 seconds, the distances are 4, 8 and 12 metres.</p><p>On a distance–time graph, time goes on the x-axis and distance on the y-axis. Each point shows one measured pair.</p>",
          "<p>Esatto. x è la <b>variabile indipendente</b>; y è la <b>variabile dipendente</b>. Immagina una ciclista che procede a 4 metri al secondo: la distanza dipende dal tempo, quindi d = 4t. Dopo 1, 2 e 3 secondi, le distanze sono 4, 8 e 12 metri.</p><p>In un grafico spazio-tempo, il tempo va sull'asse x e la distanza sull'asse y. Ogni punto rappresenta una coppia di valori misurati.</p>"
        ]
      },
      {
        type: "order",
        title: ["Plot a point correctly", "Rappresenta correttamente un punto"],
        hint: [
          "Put the steps in order for plotting A(3, 2).",
          "Metti in ordine i passaggi per rappresentare A(3; 2)."
        ],
        steps: [
          ["Start at the origin (0, 0).", "Parti dall'origine (0; 0)."],
          ["Move 3 units right along the x-axis.", "Spostati di 3 unità a destra sull'asse x."],
          ["Move 2 units up, parallel to the y-axis.", "Spostati di 2 unità verso l'alto, parallelamente all'asse y."],
          ["Mark the point A(3, 2).", "Segna il punto A(3; 2)."]
        ]
      },
      {
        who: "d",
        vis: "demon",
        text: [
          "<p>I'm the Axis Trickster! I swap x and y, flip the signs and hide the origin. Read the coordinates in order and you will see through my tricks.</p>",
          "<p>Sono l'Ingannassi! Scambio x e y, cambio i segni e nascondo l'origine. Leggi le coordinate nell'ordine giusto e smaschererai i miei trucchi.</p>"
        ]
      },
      { type: "battle" }
    ],
    quiz: [
      {
        q: ["Which axis is horizontal?", "Quale asse è orizzontale?"],
        a: [["The x-axis", "L'asse x"], ["The y-axis", "L'asse y"], ["The origin", "L'origine"], ["Neither axis", "Nessuno dei due assi"]],
        why: ["The x-axis is horizontal; the y-axis is vertical.", "L'asse x è orizzontale; l'asse y è verticale."]
      },
      {
        q: ["What does the point (3, 4) mean?", "Che cosa indica il punto (3; 4)?"],
        a: [["3 right, then 4 up", "3 a destra, poi 4 in alto"], ["4 right, then 3 up", "4 a destra, poi 3 in alto"], ["3 left, then 4 down", "3 a sinistra, poi 4 in basso"], ["4 left, then 3 up", "4 a sinistra, poi 3 in alto"]],
        why: ["Coordinates are written (x, y): x first, y second.", "Le coordinate si scrivono (x; y): prima x, poi y."]
      },
      {
        q: ["In which quadrant are both x and y negative?", "In quale quadrante x e y sono entrambe negative?"],
        a: [["III", "III"], ["I", "I"], ["II", "II"], ["IV", "IV"]],
        why: ["Quadrant III is the lower-left region: both coordinates are negative.", "Il quadrante III è in basso a sinistra: entrambe le coordinate sono negative."]
      },
      {
        q: ["If y is a function of x, each value of x has…", "Se y è funzione di x, a ogni valore di x corrisponde…"],
        a: [["exactly one value of y", "un solo valore di y"], ["two or more values of y", "due o più valori di y"], ["no value of y", "nessun valore di y"], ["always the same y", "sempre lo stesso valore di y"]],
        why: ["A function assigns one unique output y to each allowed input x.", "Una funzione associa un unico valore di uscita y a ogni valore ammesso di x."]
      },
      {
        q: ["For a cyclist moving at 4 m/s, how far does she travel in 3 s?", "Una ciclista viaggia a 4 m/s. Quanta strada percorre in 3 s?"],
        a: [["12 m", "12 m"], ["7 m", "7 m"], ["1.3 m", "1,3 m"], ["4 m", "4 m"]],
        why: ["d = speed × time = 4 × 3 = 12 m.", "s = velocità × tempo = 4 × 3 = 12 m."]
      },
      {
        q: ["On a distance–time graph, which quantity normally goes on the x-axis?", "In un grafico spazio-tempo, quale grandezza si mette normalmente sull'asse x?"],
        a: [["Time", "Il tempo"], ["Distance", "La distanza"], ["Mass", "La massa"], ["Temperature", "La temperatura"]],
        why: ["Time is the independent variable, so it goes on the x-axis.", "Il tempo è la variabile indipendente, quindi si mette sull'asse x."]
      }
    ]
  }
];
