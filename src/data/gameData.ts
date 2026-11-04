import { SubjectInfo, UnitInfo, ArcInfo, Mission, Rank, CodexEntry } from "../types";
export const SUBJECTS: SubjectInfo[] = [
  {
    "id": "cs",
    "name": [
      "Computer Science",
      "Informatica"
    ],
    "blurb": [
      "How computers work — algorithms, data, hardware, networks, security and code.",
      "Come funzionano i computer — algoritmi, dati, hardware, reti, sicurezza e codice."
    ],
    "meta": [
      "3 units · 16 chapters · 44 missions",
      "3 unità · 16 capitoli · 44 missioni"
    ],
    "art": "<svg viewBox=\"0 0 120 120\" width=\"100%\" aria-hidden=\"true\"><defs><linearGradient id=\"csg\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#6ad1ff\"/><stop offset=\"1\" stop-color=\"#8a7bff\"/></linearGradient></defs><rect x=\"34\" y=\"34\" width=\"52\" height=\"52\" rx=\"8\" fill=\"none\" stroke=\"url(#csg)\" stroke-width=\"3\"/><rect x=\"48\" y=\"48\" width=\"24\" height=\"24\" rx=\"4\" fill=\"url(#csg)\" opacity=\".85\"/><line x1=\"44\" y1=\"34\" x2=\"44\" y2=\"22\" stroke=\"url(#csg)\" stroke-width=\"3\"/><line x1=\"44\" y1=\"86\" x2=\"44\" y2=\"98\" stroke=\"url(#csg)\" stroke-width=\"3\"/><line x1=\"34\" y1=\"44\" x2=\"22\" y2=\"44\" stroke=\"url(#csg)\" stroke-width=\"3\"/><line x1=\"86\" y1=\"44\" x2=\"98\" y2=\"44\" stroke=\"url(#csg)\" stroke-width=\"3\"/><line x1=\"60\" y1=\"34\" x2=\"60\" y2=\"22\" stroke=\"url(#csg)\" stroke-width=\"3\"/><line x1=\"60\" y1=\"86\" x2=\"60\" y2=\"98\" stroke=\"url(#csg)\" stroke-width=\"3\"/><line x1=\"34\" y1=\"60\" x2=\"22\" y2=\"60\" stroke=\"url(#csg)\" stroke-width=\"3\"/><line x1=\"86\" y1=\"60\" x2=\"98\" y2=\"60\" stroke=\"url(#csg)\" stroke-width=\"3\"/><line x1=\"76\" y1=\"34\" x2=\"76\" y2=\"22\" stroke=\"url(#csg)\" stroke-width=\"3\"/><line x1=\"76\" y1=\"86\" x2=\"76\" y2=\"98\" stroke=\"url(#csg)\" stroke-width=\"3\"/><line x1=\"34\" y1=\"76\" x2=\"22\" y2=\"76\" stroke=\"url(#csg)\" stroke-width=\"3\"/><line x1=\"86\" y1=\"76\" x2=\"98\" y2=\"76\" stroke=\"url(#csg)\" stroke-width=\"3\"/></svg>"
  },
  {
    "id": "phys",
    "name": [
      "Physics",
      "Fisica"
    ],
    "blurb": [
      "Measuring the world and the physics of equilibrium — quantities, vectors, forces, solids and fluids.",
      "Misurare il mondo e la fisica dell'equilibrio — grandezze, vettori, forze, solidi e fluidi."
    ],
    "meta": [
      "Il Walker · chapters 1–5 · prima",
      "Il Walker · capitoli 1–5 · prima"
    ],
    "art": "<svg viewBox=\"0 0 120 120\" width=\"100%\" aria-hidden=\"true\"><defs><linearGradient id=\"phg\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#ff9f45\"/><stop offset=\"1\" stop-color=\"#ff5d8f\"/></linearGradient></defs><ellipse cx=\"60\" cy=\"60\" rx=\"46\" ry=\"17\" fill=\"none\" stroke=\"url(#phg)\" stroke-width=\"3\" transform=\"rotate(32 60 60)\"/><ellipse cx=\"60\" cy=\"60\" rx=\"46\" ry=\"17\" fill=\"none\" stroke=\"url(#phg)\" stroke-width=\"3\" transform=\"rotate(-32 60 60)\"/><circle cx=\"60\" cy=\"60\" r=\"10\" fill=\"url(#phg)\"/><circle cx=\"99\" cy=\"81\" r=\"5.5\" fill=\"#ffd166\"/><circle cx=\"99\" cy=\"39\" r=\"5.5\" fill=\"#ffd166\"/></svg>"
  },
  {
    "id": "math",
    "name": [
      "Mathematics",
      "Matematica"
    ],
    "blurb": [
      "Numbers, sets, algebra, geometry and statistics — turn each topic into a technique.",
      "Numeri, insiemi, algebra, geometria e statistica — trasforma ogni argomento in una tecnica."
    ],
    "meta": [
      "6 chapters · 28 missions",
      "6 capitoli · 28 missioni"
    ],
    "art": "<svg viewBox=\"0 0 120 120\" width=\"100%\" aria-hidden=\"true\"><defs><linearGradient id=\"mg\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#ffd166\"/><stop offset=\"1\" stop-color=\"#ff6a3d\"/></linearGradient></defs><text x=\"60\" y=\"72\" text-anchor=\"middle\" font-family=\"Dela Gothic One, Arial Black, sans-serif\" font-size=\"42\" fill=\"url(#mg)\">∑</text></svg>"
  }
];

export const UNITS: UnitInfo[] = [
  {
    "title": [
      "Computers & Computing",
      "L'informatica e il computer"
    ],
    "ch": "1–6"
  },
  {
    "title": [
      "Working with Applications",
      "Lavorare con le applicazioni"
    ],
    "ch": "7–10"
  },
  {
    "title": [
      "Getting Started with Programming",
      "Iniziare a programmare"
    ],
    "ch": "11–16"
  },
  {
    "title": [
      "Physics · Measurement & Mechanics",
      "Fisica · Misura e meccanica"
    ],
    "ch": "1–5",
    "subject": "phys"
  },
  {
    "title": [
      "Numbers & Sets",
      "Numeri e insiemi"
    ],
    "ch": "1–3",
    "subject": "math"
  },
  {
    "title": [
      "Algebra",
      "Algebra"
    ],
    "ch": "4–10",
    "subject": "math"
  },
  {
    "title": [
      "Geometry & Statistics",
      "Geometria e statistica"
    ],
    "ch": "11 + G1–G4",
    "subject": "math"
  }
];

export const ARCS: ArcInfo[] = [
  {
    "n": 1,
    "title": [
      "Thinking in Algorithms",
      "Ragionare per algoritmi"
    ],
    "pages": "2–17"
  },
  {
    "n": 2,
    "title": [
      "Digital Data Encoding",
      "La codifica digitale dei dati"
    ],
    "pages": "19–47"
  },
  {
    "n": 3,
    "title": [
      "How a Computer Is Built",
      "Com'è fatto un computer"
    ],
    "pages": "48–71"
  },
  {
    "n": 4,
    "title": [
      "Operating Systems & Applications",
      "Sistemi operativi e applicazioni"
    ],
    "pages": "72–99"
  },
  {
    "n": 5,
    "title": [
      "Computer Networks & the Internet",
      "I computer in rete e Internet"
    ],
    "pages": "100–127"
  },
  {
    "n": 6,
    "unit": 0,
    "title": [
      "Cybersecurity",
      "La sicurezza informatica"
    ],
    "pages": "128–152"
  },
  {
    "n": 7,
    "unit": 1,
    "title": [
      "Cloud Computing & Online Collaboration",
      "Il cloud computing e la collaborazione online"
    ],
    "pages": "154–171"
  },
  {
    "n": 8,
    "unit": 1,
    "title": [
      "Word Processing",
      "L'elaborazione di testi"
    ],
    "pages": "172–205"
  },
  {
    "n": 9,
    "unit": 1,
    "title": [
      "Spreadsheets",
      "Il foglio elettronico"
    ],
    "pages": "206–243"
  },
  {
    "n": 10,
    "unit": 1,
    "title": [
      "Presentations",
      "Le presentazioni al computer"
    ],
    "pages": "244–270"
  },
  {
    "n": 11,
    "unit": 2,
    "title": [
      "Structured Programming",
      "La programmazione strutturata"
    ],
    "pages": "272–297"
  },
  {
    "n": 12,
    "unit": 2,
    "title": [
      "Programming Basics",
      "Le basi della programmazione"
    ],
    "pages": "298–325"
  },
  {
    "n": 13,
    "unit": 2,
    "title": [
      "Selection",
      "Le strutture di selezione"
    ],
    "pages": "326–345"
  },
  {
    "n": 14,
    "unit": 2,
    "title": [
      "Loops",
      "I cicli iterativi"
    ],
    "pages": "347–369"
  },
  {
    "n": 15,
    "unit": 2,
    "title": [
      "Strings, Lists & Files",
      "Introduzione a stringhe, liste e file"
    ],
    "pages": "370–403"
  },
  {
    "n": 16,
    "unit": 2,
    "title": [
      "Functions & Modules",
      "Introduzione a funzioni e moduli"
    ],
    "pages": "404–422"
  },
  {
    "n": 1,
    "unit": 3,
    "subject": "phys",
    "title": [
      "Physical Quantities",
      "Le grandezze fisiche"
    ],
    "pages": "1–30"
  },
  {
    "n": 2,
    "unit": 3,
    "subject": "phys",
    "title": [
      "Measurement & Data",
      "Misure e rappresentazioni"
    ],
    "pages": "31–58"
  },
  {
    "n": 3,
    "unit": 3,
    "subject": "phys",
    "title": [
      "Vectors & Forces",
      "I vettori e le forze"
    ],
    "pages": "59–88"
  },
  {
    "n": 4,
    "unit": 3,
    "subject": "phys",
    "title": [
      "Equilibrium of Solids",
      "L'equilibrio dei solidi"
    ],
    "pages": "89–116"
  },
  {
    "n": 5,
    "unit": 3,
    "subject": "phys",
    "title": [
      "Equilibrium of Fluids",
      "L'equilibrio dei fluidi"
    ],
    "pages": "117–146"
  },
  {
    "n": 1,
    "unit": 4,
    "subject": "math",
    "title": [
      "Natural & Integer Numbers",
      "Numeri naturali e numeri interi"
    ],
    "pages": "1–76"
  },
  {
    "n": 2,
    "unit": 4,
    "subject": "math",
    "title": [
      "Rational & Real Numbers",
      "Numeri razionali e numeri reali"
    ],
    "pages": "77–146"
  },
  {
    "n": 3,
    "unit": 4,
    "subject": "math",
    "title": [
      "Sets, Logic & Relations",
      "Insiemi, logica e relazioni"
    ],
    "pages": "147–222"
  },
  {
    "n": 1,
    "unit": 5,
    "subject": "math",
    "title": [
      "Algebraic Expressions",
      "Espressioni algebriche"
    ],
    "pages": "223–260"
  },
  {
    "n": 2,
    "unit": 5,
    "subject": "math",
    "title": [
      "Equations",
      "Equazioni"
    ],
    "pages": "261–310"
  },
  {
    "n": 3,
    "unit": 5,
    "subject": "math",
    "title": [
      "Inequalities",
      "Disequazioni"
    ],
    "pages": "311–350"
  }
];

export const MISSIONS: Mission[] = [
  {
    "id": "a1m1",
    "arc": 0,
    "sec": "1.1–1.2",
    "pages": "2–7",
    "hue": 200,
    "horns": 2,
    "eyes": 2,
    "title": [
      "The First Algorithm",
      "Il primo algoritmo"
    ],
    "topic": [
      "Computer science, coding and algorithms",
      "Informatica, coding e algoritmi"
    ],
    "demon": [
      "Chaos Imp",
      "Folletto del Caos"
    ],
    "tech": [
      "Logic Form · First Technique: Step-by-Step Slash",
      "Stile della Logica · Prima Tecnica: Fendente Passo-Passo"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "title",
        "text": [
          "<p>Welcome to Circuit Hunter Academy, {name}. I'm Sensei Kaito.</p><p>Glitch Demons have broken into the school's computers. They feed on confusion, and the only weapon that works against them is <b>understanding</b>. Your training follows your textbook: five arcs, one for each chapter.</p><p>We begin where every hunter begins: learning to think like a computer.</p>",
          "<p>Benvenuta alla Circuit Hunter Academy, {name}. Sono il Sensei Kaito.</p><p>I Demoni Glitch sono entrati nei computer della scuola. Si nutrono di confusione, e l'unica arma che funziona contro di loro è <b>capire</b>. Il tuo addestramento segue il libro di testo: cinque archi, uno per capitolo.</p><p>Cominciamo da dove comincia ogni cacciatrice: imparare a pensare come un computer.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "infowords",
        "text": [
          "<p>[[Computer science|informatica]] is the science of processing information automatically. The Italian word <i>informatica</i> comes from <b>information + automatic</b>.</p><p>[[Coding|coding]] means writing instructions that a computer can follow, using a programming language. But before you write any code, you must solve the problem in your head.</p>",
          "<p>L'[[Computer science|informatica]] è la scienza che elabora l'informazione in modo automatico. La parola viene da <b>informazione + automatica</b>.</p><p>Fare [[coding|coding]] significa scrivere istruzioni che un computer può eseguire, usando un linguaggio di programmazione. Ma prima di scrivere codice, il problema va risolto nella testa.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "recipe",
        "text": [
          "<p>An [[algorithm|algoritmo]] is a finite list of clear instructions that solves a problem.</p><p>A recipe is an algorithm. It has an <b>input</b> (the ingredients), <b>steps</b> (the method) and an <b>output</b> (the dish). Directions to school and the rules of a game are algorithms too.</p>",
          "<p>Un [[algorithm|algoritmo]] è un elenco finito di istruzioni chiare che risolve un problema.</p><p>Una ricetta è un algoritmo. Ha un <b>input</b> (gli ingredienti), dei <b>passi</b> (il procedimento) e un <b>output</b> (il piatto). Anche le indicazioni per andare a scuola o le regole di un gioco sono algoritmi.</p>"
        ]
      },
      {
        "who": "y",
        "vis": "recipe",
        "text": [
          "<p>So a computer is like a super-fast student who does exactly what it's told, and nothing more?</p>",
          "<p>Quindi un computer è come uno studente velocissimo che fa esattamente quello che gli dici, e niente di più?</p>"
        ]
      },
      {
        "who": "s",
        "vis": "recipe",
        "text": [
          "<p>Exactly. A computer has no common sense: if a step is missing or in the wrong place, it fails. I've scrambled the ramen algorithm. Put it back in order.</p>",
          "<p>Esatto. Un computer non ha buon senso: se un passo manca o è nel posto sbagliato, fallisce. Ho mescolato l'algoritmo del ramen. Rimettilo in ordine.</p>"
        ]
      },
      {
        "type": "order",
        "title": [
          "Order the ramen algorithm",
          "Ordina l'algoritmo del ramen"
        ],
        "steps": [
          [
            "Fill a pot with water",
            "Riempi una pentola d'acqua"
          ],
          [
            "Boil the water",
            "Porta l'acqua a ebollizione"
          ],
          [
            "Put the noodles in a bowl",
            "Metti i noodles in una ciotola"
          ],
          [
            "Pour the boiling water over the noodles",
            "Versa l'acqua bollente sui noodles"
          ],
          [
            "Wait 3 minutes",
            "Aspetta 3 minuti"
          ],
          [
            "Add the seasoning and stir",
            "Aggiungi il condimento e mescola"
          ]
        ],
        "hint": [
          "You can't pour water before it boils!",
          "Non puoi versare l'acqua prima che bolla!"
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Hehehe… I'm the Chaos Imp! I shuffle every instruction. Without order, your algorithms are useless!</p>",
          "<p>Ihihih… Sono il Folletto del Caos! Mescolo ogni istruzione. Senza ordine, i tuoi algoritmi non servono a niente!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "What is an algorithm?",
          "Che cos'è un algoritmo?"
        ],
        "a": [
          [
            "A finite list of clear instructions that solves a problem",
            "Un elenco finito di istruzioni chiare che risolve un problema"
          ],
          [
            "Any program written in Python",
            "Qualsiasi programma scritto in Python"
          ],
          [
            "A part of the CPU",
            "Una parte della CPU"
          ],
          [
            "A type of computer virus",
            "Un tipo di virus"
          ]
        ],
        "why": [
          "An algorithm is a precise, finite sequence of steps that solves a problem.",
          "Un algoritmo è una sequenza finita e precisa di passi che risolve un problema."
        ]
      },
      {
        "q": [
          "Where does the word \"informatica\" come from?",
          "Da dove viene la parola \"informatica\"?"
        ],
        "a": [
          [
            "Information + automatic",
            "Informazione + automatica"
          ],
          [
            "Internet + mathematics",
            "Internet + matematica"
          ],
          [
            "Informal + matrix",
            "Informale + matrice"
          ],
          [
            "Information + atom",
            "Informazione + atomo"
          ]
        ],
        "why": [
          "Informatica = INFORmazione autoMATICA: processing information automatically.",
          "Informatica = INFORmazione autoMATICA: elaborare l'informazione in modo automatico."
        ]
      },
      {
        "q": [
          "What is coding?",
          "Che cos'è il coding?"
        ],
        "a": [
          [
            "Writing instructions for a computer in a programming language",
            "Scrivere istruzioni per un computer con un linguaggio di programmazione"
          ],
          [
            "Repairing broken hardware",
            "Riparare l'hardware rotto"
          ],
          [
            "Building computer cases",
            "Costruire i case dei computer"
          ],
          [
            "Sending emails",
            "Inviare e-mail"
          ]
        ],
        "why": [
          "Coding = writing code, the instructions a computer can execute.",
          "Coding = scrivere codice, cioè istruzioni che il computer può eseguire."
        ]
      },
      {
        "q": [
          "Which of these is an everyday algorithm?",
          "Quale di questi è un algoritmo della vita quotidiana?"
        ],
        "a": [
          [
            "A cooking recipe",
            "Una ricetta di cucina"
          ],
          [
            "A photo of a cake",
            "La foto di una torta"
          ],
          [
            "A pencil",
            "Una matita"
          ],
          [
            "A chair",
            "Una sedia"
          ]
        ],
        "why": [
          "A recipe is a sequence of steps that turns an input (ingredients) into an output (the dish).",
          "Una ricetta è una sequenza di passi che trasforma un input (ingredienti) in un output (il piatto)."
        ]
      },
      {
        "q": [
          "Why must the steps be precise for a computer?",
          "Perché i passi devono essere precisi per un computer?"
        ],
        "a": [
          [
            "A computer can't guess what you mean",
            "Un computer non può indovinare cosa intendi"
          ],
          [
            "Computers are slow",
            "I computer sono lenti"
          ],
          [
            "Computers prefer long texts",
            "I computer preferiscono testi lunghi"
          ],
          [
            "They don't need to be precise",
            "Non serve che siano precisi"
          ]
        ],
        "why": [
          "Computers have no common sense: they do exactly what is written.",
          "I computer non hanno buon senso: fanno esattamente ciò che è scritto."
        ]
      },
      {
        "q": [
          "In the ramen algorithm, the noodles and water are…",
          "Nell'algoritmo del ramen, noodles e acqua sono…"
        ],
        "a": [
          [
            "The input",
            "L'input"
          ],
          [
            "The output",
            "L'output"
          ],
          [
            "The processor",
            "Il processore"
          ],
          [
            "A bug",
            "Un bug"
          ]
        ],
        "why": [
          "They are what goes IN to the algorithm. The finished ramen is the output.",
          "Sono ciò che ENTRA nell'algoritmo. Il ramen pronto è l'output."
        ]
      }
    ]
  },
  {
    "id": "a1m2",
    "arc": 0,
    "sec": "1.3",
    "pages": "8–10",
    "hue": 150,
    "horns": 3,
    "eyes": 2,
    "title": [
      "Rules of a Good Algorithm",
      "Le regole del buon algoritmo"
    ],
    "topic": [
      "Properties of algorithms, bugs and debugging",
      "Proprietà degli algoritmi, bug e debug"
    ],
    "demon": [
      "Infinite Loop Serpent",
      "Serpente del Ciclo Infinito"
    ],
    "tech": [
      "Logic Form · Second Technique: Precision Path",
      "Stile della Logica · Seconda Tecnica: Sentiero di Precisione"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "props",
        "text": [
          "<p>Not every list of steps is a good algorithm. A good algorithm is:</p><p>[[finite|finito]], [[unambiguous|non ambiguo]], [[executable|eseguibile]], [[general|generale]] and [[deterministic|deterministico]].</p><p>Your book may group these slightly differently. Check page 8 and use its exact words in tests.</p>",
          "<p>Non ogni elenco di passi è un buon algoritmo. Un buon algoritmo è:</p><p>[[finite|finito]], [[unambiguous|non ambiguo]], [[executable|eseguibile]], [[general|generale]] e [[deterministic|deterministico]].</p><p>Il tuo libro potrebbe raggrupparle in modo un po' diverso: controlla a pagina 8 e usa le sue parole nelle verifiche.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "badalgo",
        "text": [
          "<p>Here are three broken instructions. Each one breaks a different rule.</p><p>A mistake in an algorithm or program is called a [[bug|bug]]. Finding and fixing it is [[debugging|debug]].</p>",
          "<p>Ecco tre istruzioni sbagliate. Ognuna viola una regola diversa.</p><p>Un errore in un algoritmo o in un programma si chiama [[bug|bug]]. Trovarlo e correggerlo si dice fare [[debugging|debug]].</p>"
        ]
      },
      {
        "who": "s",
        "vis": "props",
        "text": [
          "<p>Time to program! This robot hunter understands only three commands: <b>Forward</b>, <b>Turn left</b>, <b>Turn right</b>.</p><p>Build an algorithm that leads it to the demon without crashing into walls. If it crashes, that's a bug: debug it and run again.</p>",
          "<p>Ora si programma! Questo robot cacciatore capisce solo tre comandi: <b>Avanti</b>, <b>Gira a sinistra</b>, <b>Gira a destra</b>.</p><p>Costruisci un algoritmo che lo porti dal demone senza sbattere contro i muri. Se sbatte, è un bug: fai debug e riprova.</p>"
        ]
      },
      {
        "type": "robot"
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Sssss… I am the Infinite Loop Serpent. I trap programs in loops that never, ever end!</p>",
          "<p>Sssss… Sono il Serpente del Ciclo Infinito. Intrappolo i programmi in cicli che non finiscono mai!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "\"Keep stirring\" with no end breaks which property?",
          "\"Continua a mescolare\" senza fine viola quale proprietà?"
        ],
        "a": [
          [
            "Finiteness",
            "Finitezza"
          ],
          [
            "Generality",
            "Generalità"
          ],
          [
            "Executability",
            "Eseguibilità"
          ],
          [
            "Input",
            "Input"
          ]
        ],
        "why": [
          "An algorithm must end after a finite number of steps.",
          "Un algoritmo deve terminare dopo un numero finito di passi."
        ]
      },
      {
        "q": [
          "\"Add a bit of salt\" breaks which property?",
          "\"Aggiungi un po' di sale\" viola quale proprietà?"
        ],
        "a": [
          [
            "Unambiguity",
            "Non ambiguità"
          ],
          [
            "Finiteness",
            "Finitezza"
          ],
          [
            "Generality",
            "Generalità"
          ],
          [
            "Speed",
            "Velocità"
          ]
        ],
        "why": [
          "\"A bit\" can be understood in many ways: the step is ambiguous.",
          "\"Un po'\" si può interpretare in tanti modi: il passo è ambiguo."
        ]
      },
      {
        "q": [
          "\"Walk through the wall\" breaks which property?",
          "\"Attraversa il muro\" viola quale proprietà?"
        ],
        "a": [
          [
            "Executability",
            "Eseguibilità"
          ],
          [
            "Finiteness",
            "Finitezza"
          ],
          [
            "Generality",
            "Generalità"
          ],
          [
            "Determinism",
            "Determinismo"
          ]
        ],
        "why": [
          "The step is impossible to carry out.",
          "Il passo è impossibile da eseguire."
        ]
      },
      {
        "q": [
          "An algorithm that adds ANY two numbers, not just 2 + 3, is…",
          "Un algoritmo che somma DUE NUMERI QUALSIASI, non solo 2 + 3, è…"
        ],
        "a": [
          [
            "General",
            "Generale"
          ],
          [
            "Ambiguous",
            "Ambiguo"
          ],
          [
            "Infinite",
            "Infinito"
          ],
          [
            "Not executable",
            "Non eseguibile"
          ]
        ],
        "why": [
          "It solves a whole class of problems.",
          "Risolve un'intera classe di problemi."
        ]
      },
      {
        "q": [
          "\"Deterministic\" means…",
          "\"Deterministico\" significa…"
        ],
        "a": [
          [
            "The same input always gives the same output",
            "Con gli stessi dati dà sempre lo stesso risultato"
          ],
          [
            "It is very fast",
            "È molto veloce"
          ],
          [
            "It uses random numbers",
            "Usa numeri casuali"
          ],
          [
            "It never ends",
            "Non finisce mai"
          ]
        ],
        "why": [
          "Same input, same steps, same result every time.",
          "Stessi dati, stessi passi, stesso risultato ogni volta."
        ]
      },
      {
        "q": [
          "What is a bug?",
          "Che cos'è un bug?"
        ],
        "a": [
          [
            "An error in an algorithm or program",
            "Un errore in un algoritmo o in un programma"
          ],
          [
            "A useful new feature",
            "Una nuova funzione utile"
          ],
          [
            "A fast processor",
            "Un processore veloce"
          ],
          [
            "A type of keyboard",
            "Un tipo di tastiera"
          ]
        ],
        "why": [
          "Finding and fixing bugs is called debugging.",
          "Trovare e correggere i bug si dice fare debug."
        ]
      }
    ]
  },
  {
    "id": "a1m3",
    "arc": 0,
    "sec": "1.4 + CLIL",
    "pages": "11–17",
    "hue": 330,
    "horns": 2,
    "eyes": 4,
    "title": [
      "Thinking Like a Computer",
      "Pensare come un computer"
    ],
    "topic": [
      "Computational thinking, CS and science, social-network algorithms",
      "Pensiero computazionale, informatica e scienze, algoritmi dei social"
    ],
    "demon": [
      "Feed Phantom",
      "Fantasma del Feed"
    ],
    "tech": [
      "Logic Form · Third Technique: Four-Pillar Strike",
      "Stile della Logica · Terza Tecnica: Colpo dei Quattro Pilastri"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "ct",
        "text": [
          "<p>[[Computational thinking|pensiero computazionale]] means solving problems the way a computer scientist does. It has four pillars:</p><p>[[decomposition|scomposizione]], [[pattern recognition|riconoscimento di schemi]], [[abstraction|astrazione]] and [[algorithms|algoritmi]].</p><p>This is the topic of the CLIL page on p. 17, in English.</p>",
          "<p>Il [[Computational thinking|pensiero computazionale]] è il modo di risolvere i problemi tipico dell'informatica. Ha quattro pilastri:</p><p>[[decomposition|scomposizione]], [[pattern recognition|riconoscimento di schemi]], [[abstraction|astrazione]] e [[algorithms|algoritmi]].</p><p>È l'argomento della pagina CLIL a p. 17, in inglese.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "sciences",
        "text": [
          "<p>Computer science works with every other science. Doctors, biologists, meteorologists, astronomers and artists all use computers to process huge amounts of data and to build simulations.</p>",
          "<p>L'informatica collabora con tutte le altre scienze. Medici, biologi, meteorologi, astronomi e artisti usano i computer per elaborare enormi quantità di dati e costruire simulazioni.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "feed",
        "text": [
          "<p>Social networks use algorithms too. The feed algorithm looks at what you like, watch, comment and how long you stay on each post. Then it ranks posts and shows you the \"best\" ones first.</p><p>The risk is a [[filter bubble|bolla di filtraggio]]: you only see things similar to what you already like. These apps are also designed to keep you scrolling. A real hunter stays in control.</p>",
          "<p>Anche i social network usano algoritmi. L'algoritmo del feed osserva cosa ti piace, cosa guardi, commenti e quanto tempo resti su ogni post. Poi ordina i post e ti mostra prima quelli \"migliori\".</p><p>Il rischio è la [[filter bubble|bolla di filtraggio]]: vedi solo cose simili a quelle che già ti piacciono. Queste app sono anche progettate per farti scorrere il più a lungo possibile. Una vera cacciatrice resta al comando.</p>"
        ]
      },
      {
        "type": "sort",
        "title": [
          "Which pillar is it?",
          "Quale pilastro è?"
        ],
        "cats": [
          [
            "Decomposition",
            "Scomposizione"
          ],
          [
            "Patterns",
            "Schemi"
          ],
          [
            "Abstraction",
            "Astrazione"
          ],
          [
            "Algorithm",
            "Algoritmo"
          ]
        ],
        "items": [
          {
            "n": [
              "Planning a school trip as: transport, food, tickets",
              "Organizzare una gita come: trasporto, cibo, biglietti"
            ],
            "i": "puzzle",
            "c": 0,
            "why": [
              "Splitting a big job into smaller parts is decomposition.",
              "Dividere un grande lavoro in parti più piccole è scomposizione."
            ]
          },
          {
            "n": [
              "Noticing every level's boss attacks in the same order",
              "Notare che il boss di ogni livello attacca sempre nello stesso ordine"
            ],
            "i": "eye",
            "c": 1,
            "why": [
              "Spotting what repeats is pattern recognition.",
              "Notare ciò che si ripete è riconoscimento di schemi."
            ]
          },
          {
            "n": [
              "A metro map that ignores real distances",
              "Una mappa della metro che ignora le distanze reali"
            ],
            "i": "layers",
            "c": 2,
            "why": [
              "Keeping only what matters (stops and lines) is abstraction.",
              "Tenere solo ciò che conta (fermate e linee) è astrazione."
            ]
          },
          {
            "n": [
              "Writing the exact steps for a robot to follow",
              "Scrivere i passi esatti che un robot deve seguire"
            ],
            "i": "robot",
            "c": 3,
            "why": [
              "A precise sequence of steps is an algorithm.",
              "Una sequenza precisa di passi è un algoritmo."
            ]
          },
          {
            "n": [
              "Breaking an essay into intro, body, conclusion",
              "Dividere un tema in introduzione, svolgimento, conclusione"
            ],
            "i": "file",
            "c": 0,
            "why": [
              "That is decomposition.",
              "È scomposizione."
            ]
          },
          {
            "n": [
              "Seeing that all your maths exercises use the same formula",
              "Accorgersi che tutti gli esercizi di matematica usano la stessa formula"
            ],
            "i": "eye",
            "c": 1,
            "why": [
              "That is a pattern.",
              "È uno schema."
            ]
          },
          {
            "n": [
              "Drawing a stick figure instead of a detailed person",
              "Disegnare un omino stilizzato invece di una persona dettagliata"
            ],
            "i": "user",
            "c": 2,
            "why": [
              "Leaving out details is abstraction.",
              "Togliere i dettagli è astrazione."
            ]
          },
          {
            "n": [
              "A recipe with numbered steps",
              "Una ricetta con passi numerati"
            ],
            "i": "book",
            "c": 3,
            "why": [
              "A recipe is an algorithm.",
              "Una ricetta è un algoritmo."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Scroll… scroll… scroll… I am the Feed Phantom. I'll keep you trapped in my bubble forever!</p>",
          "<p>Scorri… scorri… scorri… Sono il Fantasma del Feed. Ti terrò chiusa nella mia bolla per sempre!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "Breaking a big problem into smaller ones is called…",
          "Dividere un grande problema in problemi più piccoli si chiama…"
        ],
        "a": [
          [
            "Decomposition",
            "Scomposizione"
          ],
          [
            "Abstraction",
            "Astrazione"
          ],
          [
            "Compression",
            "Compressione"
          ],
          [
            "Debugging",
            "Debug"
          ]
        ],
        "why": [
          "Decomposition makes big problems manageable.",
          "La scomposizione rende gestibili i problemi grandi."
        ]
      },
      {
        "q": [
          "Ignoring unimportant details (like a metro map) is…",
          "Ignorare i dettagli inutili (come una mappa della metro) è…"
        ],
        "a": [
          [
            "Abstraction",
            "Astrazione"
          ],
          [
            "Decomposition",
            "Scomposizione"
          ],
          [
            "Pattern recognition",
            "Riconoscimento di schemi"
          ],
          [
            "A bug",
            "Un bug"
          ]
        ],
        "why": [
          "Abstraction keeps only what matters.",
          "L'astrazione tiene solo ciò che conta."
        ]
      },
      {
        "q": [
          "Noticing that several problems are similar is…",
          "Accorgersi che più problemi si somigliano è…"
        ],
        "a": [
          [
            "Pattern recognition",
            "Riconoscimento di schemi"
          ],
          [
            "Abstraction",
            "Astrazione"
          ],
          [
            "Coding",
            "Coding"
          ],
          [
            "Decomposition",
            "Scomposizione"
          ]
        ],
        "why": [
          "Spotting patterns lets you reuse solutions.",
          "Riconoscere schemi permette di riusare le soluzioni."
        ]
      },
      {
        "q": [
          "How does a social network decide which posts you see first?",
          "Come decide un social quali post mostrarti per primi?"
        ],
        "a": [
          [
            "An algorithm ranks posts using your activity",
            "Un algoritmo ordina i post in base alla tua attività"
          ],
          [
            "Completely at random",
            "Completamente a caso"
          ],
          [
            "In alphabetical order",
            "In ordine alfabetico"
          ],
          [
            "A teacher chooses them",
            "Li sceglie un insegnante"
          ]
        ],
        "why": [
          "Likes, views, comments and time spent all feed the ranking algorithm.",
          "Mi piace, visualizzazioni, commenti e tempo di permanenza alimentano l'algoritmo."
        ]
      },
      {
        "q": [
          "What is a \"filter bubble\"?",
          "Che cos'è una \"bolla di filtraggio\"?"
        ],
        "a": [
          [
            "Seeing only content similar to what you already like",
            "Vedere solo contenuti simili a quelli che ti piacciono già"
          ],
          [
            "A phone case",
            "Una custodia per il telefono"
          ],
          [
            "A photo filter",
            "Un filtro per le foto"
          ],
          [
            "A type of virus",
            "Un tipo di virus"
          ]
        ],
        "why": [
          "The feed keeps showing more of the same, so you may miss other views.",
          "Il feed continua a mostrare cose simili e rischi di perdere altri punti di vista."
        ]
      },
      {
        "q": [
          "Which is an example of CS helping another science?",
          "Quale è un esempio di informatica al servizio di un'altra scienza?"
        ],
        "a": [
          [
            "Computer simulations of the atmosphere for weather forecasts",
            "Simulazioni al computer dell'atmosfera per le previsioni meteo"
          ],
          [
            "Computers replacing all doctors",
            "Computer che sostituiscono tutti i medici"
          ],
          [
            "Printing a textbook",
            "Stampare un libro"
          ],
          [
            "Charging a phone",
            "Caricare un telefono"
          ]
        ],
        "why": [
          "Meteorology uses huge simulations run on computers.",
          "La meteorologia usa grandi simulazioni eseguite al computer."
        ]
      }
    ]
  },
  {
    "id": "a2m1",
    "arc": 1,
    "sec": "2.1–2.2",
    "pages": "19–28",
    "hue": 50,
    "horns": 2,
    "eyes": 2,
    "title": [
      "The Language of Light: Binary",
      "Il linguaggio della luce: il binario"
    ],
    "topic": [
      "Bits, bytes and the binary system",
      "Bit, byte e sistema binario"
    ],
    "demon": [
      "Bit Flipper",
      "Ribalta-Bit"
    ],
    "tech": [
      "Binary Form · First Technique: Eight-Bit Barrage",
      "Stile Binario · Prima Tecnica: Raffica a Otto Bit"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "switches",
        "text": [
          "<p>Inside a computer there are billions of tiny switches called transistors. Each one is either <b>on</b> or <b>off</b>: 1 or 0.</p><p>One 0 or 1 is a [[bit|bit]] (binary digit). Eight bits make a [[byte|byte]].</p><p>With 1 bit you get 2 combinations, with 2 bits 4, with 8 bits 2⁸ = <b>256</b>.</p>",
          "<p>Dentro un computer ci sono miliardi di minuscoli interruttori chiamati transistor. Ognuno è <b>acceso</b> o <b>spento</b>: 1 oppure 0.</p><p>Un singolo 0 o 1 è un [[bit|bit]] (binary digit, cifra binaria). Otto bit formano un [[byte|byte]].</p><p>Con 1 bit hai 2 combinazioni, con 2 bit 4, con 8 bit 2⁸ = <b>256</b>.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "places",
        "text": [
          "<p>Our everyday numbers use base 10: units, tens, hundreds. The [[binary system|sistema binario]] uses base 2, so each place is worth double the one on its right: 1, 2, 4, 8, 16, 32, 64, 128.</p><p>To read a binary number, add up the place values where there is a 1.</p>",
          "<p>I numeri di tutti i giorni sono in base 10: unità, decine, centinaia. Il [[binary system|sistema binario]] è in base 2: ogni posizione vale il doppio di quella alla sua destra: 1, 2, 4, 8, 16, 32, 64, 128.</p><p>Per leggere un numero binario, somma i valori delle posizioni dove c'è un 1.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "div2",
        "text": [
          "<p>To turn a decimal number into binary, keep dividing by 2 and write down the remainders. Then read them from the <b>bottom up</b>.</p><p>13 in binary is 1101.</p>",
          "<p>Per trasformare un numero decimale in binario, dividi per 2 più volte e annota i resti. Poi leggili <b>dal basso verso l'alto</b>.</p><p>13 in binario è 1101.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "units",
        "text": [
          "<p>Bytes are grouped into bigger units, like hunter ranks: [[kilobyte|kilobyte]], [[megabyte|megabyte]], [[gigabyte|gigabyte]], [[terabyte|terabyte]].</p><p>Now light up the lamps to make the numbers I ask for.</p>",
          "<p>I byte si raggruppano in unità più grandi, come i gradi dei cacciatori: [[kilobyte|kilobyte]], [[megabyte|megabyte]], [[gigabyte|gigabyte]], [[terabyte|terabyte]].</p><p>Ora accendi le lampade per formare i numeri che ti chiedo.</p>"
        ]
      },
      {
        "type": "bits"
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Flip! Flop! I'm the Bit Flipper. I turn your 1s into 0s and your numbers into nonsense!</p>",
          "<p>Flip! Flop! Sono il Ribalta-Bit. Trasformo i tuoi 1 in 0 e i tuoi numeri in sciocchezze!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "What is a bit?",
          "Che cos'è un bit?"
        ],
        "a": [
          [
            "A binary digit: 0 or 1",
            "Una cifra binaria: 0 o 1"
          ],
          [
            "8 bytes",
            "8 byte"
          ],
          [
            "A small computer",
            "Un piccolo computer"
          ],
          [
            "A letter of the alphabet",
            "Una lettera dell'alfabeto"
          ]
        ],
        "why": [
          "Bit = BInary digiT.",
          "Bit = BInary digiT, cifra binaria."
        ]
      },
      {
        "q": [
          "How many bits are in one byte?",
          "Quanti bit ci sono in un byte?"
        ],
        "a": [
          [
            "8",
            "8"
          ],
          [
            "2",
            "2"
          ],
          [
            "10",
            "10"
          ],
          [
            "16",
            "16"
          ]
        ],
        "why": [
          "1 byte = 8 bits.",
          "1 byte = 8 bit."
        ]
      },
      {
        "q": [
          "What is binary 101 in decimal?",
          "Quanto vale il binario 101 in decimale?"
        ],
        "a": [
          [
            "5",
            "5"
          ],
          [
            "101",
            "101"
          ],
          [
            "3",
            "3"
          ],
          [
            "6",
            "6"
          ]
        ],
        "why": [
          "101 = 4 + 0 + 1 = 5.",
          "101 = 4 + 0 + 1 = 5."
        ]
      },
      {
        "q": [
          "What is decimal 6 in binary?",
          "Come si scrive 6 in binario?"
        ],
        "a": [
          [
            "110",
            "110"
          ],
          [
            "011",
            "011"
          ],
          [
            "111",
            "111"
          ],
          [
            "100",
            "100"
          ]
        ],
        "why": [
          "6 = 4 + 2 → 110.",
          "6 = 4 + 2 → 110."
        ]
      },
      {
        "q": [
          "How many different values can 8 bits represent?",
          "Quanti valori diversi si possono rappresentare con 8 bit?"
        ],
        "a": [
          [
            "256",
            "256"
          ],
          [
            "8",
            "8"
          ],
          [
            "16",
            "16"
          ],
          [
            "1000",
            "1000"
          ]
        ],
        "why": [
          "2⁸ = 256 (from 0 to 255).",
          "2⁸ = 256 (da 0 a 255)."
        ]
      },
      {
        "q": [
          "Why do computers use binary?",
          "Perché i computer usano il binario?"
        ],
        "a": [
          [
            "Their circuits have two states: on and off",
            "I loro circuiti hanno due stati: acceso e spento"
          ],
          [
            "Binary looks nicer",
            "Il binario è più bello"
          ],
          [
            "Because of the keyboard",
            "Per colpa della tastiera"
          ],
          [
            "It uses fewer colours",
            "Usa meno colori"
          ]
        ],
        "why": [
          "Two states are easy and reliable to build with transistors.",
          "Due stati sono facili e affidabili da realizzare con i transistor."
        ]
      }
    ]
  },
  {
    "id": "a2m2",
    "arc": 1,
    "sec": "2.3",
    "pages": "29–30",
    "hue": 250,
    "horns": 3,
    "eyes": 2,
    "title": [
      "Secret Scrolls: Encoding Text",
      "Pergamene segrete: codificare il testo"
    ],
    "topic": [
      "ASCII and Unicode",
      "ASCII e Unicode"
    ],
    "demon": [
      "Garble Wraith",
      "Spettro Pasticcione"
    ],
    "tech": [
      "Binary Form · Second Technique: Cipher Seal",
      "Stile Binario · Seconda Tecnica: Sigillo del Codice"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "asciitable",
        "text": [
          "<p>A computer only understands numbers, so every character is stored as a number.</p><p>[[ASCII|ASCII]] (1963) uses <b>7 bits</b>, so it has 128 characters: English letters, digits, punctuation and control codes. A = 65, B = 66 … Z = 90, a = 97, space = 32.</p><p>Extended ASCII uses 8 bits, for 256 characters.</p>",
          "<p>Un computer capisce solo numeri, quindi ogni carattere viene salvato come un numero.</p><p>Il codice [[ASCII|ASCII]] (1963) usa <b>7 bit</b>, quindi ha 128 caratteri: lettere inglesi, cifre, punteggiatura e codici di controllo. A = 65, B = 66 … Z = 90, a = 97, spazio = 32.</p><p>L'ASCII esteso usa 8 bit, per 256 caratteri.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "unicode",
        "text": [
          "<p>But 128 characters aren't enough for the world. Where are è, ñ, Japanese kana or Arabic letters?</p><p>[[Unicode|Unicode]] gives a number to about 150,000 characters from almost every writing system, plus emoji. The common encoding [[UTF-8|UTF-8]] stores each character in 1 to 4 bytes, and the first 128 are the same as ASCII.</p>",
          "<p>Ma 128 caratteri non bastano per tutto il mondo. Dove sono è, ñ, i caratteri giapponesi o arabi?</p><p>[[Unicode|Unicode]] assegna un numero a circa 150.000 caratteri di quasi tutti i sistemi di scrittura, più le emoji. La codifica più diffusa, [[UTF-8|UTF-8]], salva ogni carattere in un numero di byte da 1 a 4, e i primi 128 coincidono con l'ASCII.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "asciitable",
        "text": [
          "<p>The Garble Wraith has left coded messages around the academy. Use the ASCII table to decode them.</p>",
          "<p>Lo Spettro Pasticcione ha lasciato messaggi in codice in tutta l'accademia. Usa la tabella ASCII per decifrarli.</p>"
        ]
      },
      {
        "type": "ascii"
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Gr8rbl… x#@!… I'm the Garble Wraith. I turn every letter into nonsense!</p>",
          "<p>Gr8rbl… x#@!… Sono lo Spettro Pasticcione. Trasformo ogni lettera in un pasticcio!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "How many bits does standard ASCII use per character?",
          "Quanti bit usa l'ASCII standard per carattere?"
        ],
        "a": [
          [
            "7 (128 characters)",
            "7 (128 caratteri)"
          ],
          [
            "2",
            "2"
          ],
          [
            "16",
            "16"
          ],
          [
            "64",
            "64"
          ]
        ],
        "why": [
          "2⁷ = 128 characters.",
          "2⁷ = 128 caratteri."
        ]
      },
      {
        "q": [
          "In ASCII, code 65 is…",
          "In ASCII, il codice 65 è…"
        ],
        "a": [
          [
            "A",
            "A"
          ],
          [
            "a",
            "a"
          ],
          [
            "Z",
            "Z"
          ],
          [
            "6",
            "6"
          ]
        ],
        "why": [
          "Capital letters start at A = 65.",
          "Le maiuscole partono da A = 65."
        ]
      },
      {
        "q": [
          "Why was Unicode created?",
          "Perché è nato Unicode?"
        ],
        "a": [
          [
            "ASCII couldn't represent the characters of all the world's languages",
            "L'ASCII non bastava per i caratteri di tutte le lingue del mondo"
          ],
          [
            "To make files bigger",
            "Per rendere i file più grandi"
          ],
          [
            "To store colours",
            "Per salvare i colori"
          ],
          [
            "To play sounds",
            "Per riprodurre suoni"
          ]
        ],
        "why": [
          "Unicode covers almost every writing system, plus emoji.",
          "Unicode copre quasi tutti i sistemi di scrittura, più le emoji."
        ]
      },
      {
        "q": [
          "Which character is NOT in standard 7-bit ASCII?",
          "Quale carattere NON è nell'ASCII standard a 7 bit?"
        ],
        "a": [
          [
            "è",
            "è"
          ],
          [
            "A",
            "A"
          ],
          [
            "7",
            "7"
          ],
          [
            "?",
            "?"
          ]
        ],
        "why": [
          "Accented letters like è need extended ASCII or Unicode.",
          "Le lettere accentate come è richiedono l'ASCII esteso o Unicode."
        ]
      },
      {
        "q": [
          "How does a computer store the letter \"B\"?",
          "Come salva un computer la lettera \"B\"?"
        ],
        "a": [
          [
            "As the number 66, in binary",
            "Come il numero 66, in binario"
          ],
          [
            "As a small picture",
            "Come una piccola immagine"
          ],
          [
            "As a sound",
            "Come un suono"
          ],
          [
            "It can't",
            "Non può"
          ]
        ],
        "why": [
          "B = 66 = 01000010 in binary.",
          "B = 66 = 01000010 in binario."
        ]
      },
      {
        "q": [
          "UTF-8 stores each character in…",
          "UTF-8 salva ogni carattere in…"
        ],
        "a": [
          [
            "1 to 4 bytes",
            "Da 1 a 4 byte"
          ],
          [
            "Exactly 1 bit",
            "Esattamente 1 bit"
          ],
          [
            "Always 8 bytes",
            "Sempre 8 byte"
          ],
          [
            "A whole kilobyte",
            "Un intero kilobyte"
          ]
        ],
        "why": [
          "Common characters take 1 byte; others take up to 4.",
          "I caratteri comuni occupano 1 byte, gli altri fino a 4."
        ]
      }
    ]
  },
  {
    "id": "a2m3",
    "arc": 1,
    "sec": "2.4–2.6",
    "pages": "31–39",
    "hue": 0,
    "horns": 4,
    "eyes": 3,
    "title": [
      "Pixels, Waves & Frames",
      "Pixel, onde e fotogrammi"
    ],
    "topic": [
      "Digital images, sound and video",
      "Immagini, suoni e video digitali"
    ],
    "demon": [
      "Pixel Ghoul",
      "Ghoul dei Pixel"
    ],
    "tech": [
      "Binary Form · Third Technique: Prism Burst",
      "Stile Binario · Terza Tecnica: Esplosione Prismatica"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "pixels",
        "text": [
          "<p>A digital image is a grid of tiny dots called [[pixels|pixel]]. In a black-and-white image, each pixel needs just 1 bit: 1 = coloured, 0 = empty.</p><p>[[Resolution|risoluzione]] is the number of pixels, like 1920 × 1080. More pixels = a sharper image, but a bigger file.</p>",
          "<p>Un'immagine digitale è una griglia di puntini chiamati [[pixels|pixel]]. In un'immagine in bianco e nero ogni pixel richiede solo 1 bit: 1 = colorato, 0 = vuoto.</p><p>La [[Resolution|risoluzione]] è il numero di pixel, ad esempio 1920 × 1080. Più pixel = immagine più nitida, ma file più grande.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "rgbmix",
        "text": [
          "<p>Colour pixels use [[RGB|RGB]]: a mix of <b>red</b>, <b>green</b> and <b>blue</b> light. Each channel goes from 0 to 255 (8 bits), so one pixel uses 24 bits, giving 256³ ≈ 16.7 million colours.</p><p>Images made of pixels are [[bitmap (raster)|bitmap (raster)]]. [[Vector graphics|grafica vettoriale]] stores shapes as maths (lines and curves) instead, so you can zoom without blur.</p>",
          "<p>I pixel a colori usano il modello [[RGB|RGB]]: un mix di luce <b>rossa</b>, <b>verde</b> e <b>blu</b>. Ogni canale va da 0 a 255 (8 bit), quindi un pixel usa 24 bit: 256³ ≈ 16,7 milioni di colori.</p><p>Le immagini fatte di pixel sono [[bitmap (raster)|bitmap (raster)]]. La [[Vector graphics|grafica vettoriale]] invece salva le forme come formule (linee e curve): puoi ingrandire senza sgranare.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "sampling",
        "text": [
          "<p>Sound is a wave. To digitise it, the computer measures the wave many times every second: this is [[sampling|campionamento]]. A music CD takes 44,100 samples per second (44.1 kHz) at 16 bits each.</p><p>[[Digital video|video digitale]] is a sequence of images called [[frames|fotogrammi]] shown quickly, for example 24, 30 or 60 frames per second (fps), plus the soundtrack.</p>",
          "<p>Il suono è un'onda. Per digitalizzarlo, il computer misura l'onda moltissime volte al secondo: è il [[sampling|campionamento]]. Un CD musicale prende 44.100 campioni al secondo (44,1 kHz), da 16 bit ciascuno.</p><p>Il [[Digital video|video digitale]] è una sequenza di immagini chiamate [[frames|fotogrammi]] mostrate velocemente, ad esempio 24, 30 o 60 fotogrammi al secondo (fps), più la colonna sonora.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "rgbmix",
        "text": [
          "<p>Now mix the light yourself. Move the sliders to match each target colour.</p>",
          "<p>Ora mescola tu la luce. Muovi i cursori per ottenere ogni colore richiesto.</p>"
        ]
      },
      {
        "type": "rgb"
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Krrrk… I am the Pixel Ghoul. I eat pixels and leave your photos blurry and grey!</p>",
          "<p>Krrrk… Sono il Ghoul dei Pixel. Mangio i pixel e lascio le tue foto sgranate e grigie!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "What is a pixel?",
          "Che cos'è un pixel?"
        ],
        "a": [
          [
            "The smallest dot of a digital image",
            "Il puntino più piccolo di un'immagine digitale"
          ],
          [
            "A type of camera",
            "Un tipo di fotocamera"
          ],
          [
            "A sound sample",
            "Un campione sonoro"
          ],
          [
            "A unit of speed",
            "Un'unità di velocità"
          ]
        ],
        "why": [
          "Images are grids of pixels.",
          "Le immagini sono griglie di pixel."
        ]
      },
      {
        "q": [
          "\"1920 × 1080\" describes an image's…",
          "\"1920 × 1080\" descrive di un'immagine la…"
        ],
        "a": [
          [
            "Resolution",
            "Risoluzione"
          ],
          [
            "Colour depth",
            "Profondità di colore"
          ],
          [
            "File name",
            "Nome del file"
          ],
          [
            "Frame rate",
            "Frequenza dei fotogrammi"
          ]
        ],
        "why": [
          "Width × height in pixels = resolution.",
          "Larghezza × altezza in pixel = risoluzione."
        ]
      },
      {
        "q": [
          "What does RGB stand for?",
          "Cosa significa RGB?"
        ],
        "a": [
          [
            "Red, Green, Blue",
            "Rosso, Verde, Blu (Red, Green, Blue)"
          ],
          [
            "Really Good Bits",
            "Really Good Bits"
          ],
          [
            "Red, Grey, Black",
            "Rosso, Grigio, Nero"
          ],
          [
            "Random Graphic Bytes",
            "Random Graphic Bytes"
          ]
        ],
        "why": [
          "Screens mix red, green and blue light.",
          "Gli schermi mescolano luce rossa, verde e blu."
        ]
      },
      {
        "q": [
          "Why does a vector image stay sharp when you zoom in?",
          "Perché un'immagine vettoriale resta nitida quando ingrandisci?"
        ],
        "a": [
          [
            "It is stored as mathematical shapes, not pixels",
            "È salvata come forme matematiche, non come pixel"
          ],
          [
            "It has more colours",
            "Ha più colori"
          ],
          [
            "It is always black and white",
            "È sempre in bianco e nero"
          ],
          [
            "It is compressed",
            "È compressa"
          ]
        ],
        "why": [
          "The computer redraws the shapes at any size.",
          "Il computer ridisegna le forme a qualsiasi dimensione."
        ]
      },
      {
        "q": [
          "Sampling a sound means…",
          "Campionare un suono significa…"
        ],
        "a": [
          [
            "Measuring the sound wave many times per second",
            "Misurare l'onda sonora molte volte al secondo"
          ],
          [
            "Playing it louder",
            "Riprodurlo più forte"
          ],
          [
            "Deleting the silence",
            "Cancellare i silenzi"
          ],
          [
            "Recording on tape",
            "Registrarlo su nastro"
          ]
        ],
        "why": [
          "Each measurement becomes a number stored in binary.",
          "Ogni misura diventa un numero salvato in binario."
        ]
      },
      {
        "q": [
          "A video at 60 fps shows…",
          "Un video a 60 fps mostra…"
        ],
        "a": [
          [
            "60 images per second",
            "60 immagini al secondo"
          ],
          [
            "60 seconds of video",
            "60 secondi di video"
          ],
          [
            "60 colours",
            "60 colori"
          ],
          [
            "60 pixels",
            "60 pixel"
          ]
        ],
        "why": [
          "fps = frames per second.",
          "fps = fotogrammi al secondo (frames per second)."
        ]
      }
    ]
  },
  {
    "id": "a2m4",
    "arc": 1,
    "sec": "2.7 + CLIL",
    "pages": "40–47",
    "hue": 90,
    "horns": 2,
    "eyes": 1,
    "title": [
      "Compression & Hexadecimal",
      "Compressione ed esadecimale"
    ],
    "topic": [
      "Data compression, the digital divide, hexadecimal",
      "Compressione dei dati, divario digitale, esadecimale"
    ],
    "demon": [
      "Bloat Golem",
      "Golem Gonfiato"
    ],
    "tech": [
      "Binary Form · Fourth Technique: Compression Crush",
      "Stile Binario · Quarta Tecnica: Schiacciata Compressa"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "rle",
        "text": [
          "<p>[[Compression|compressione]] makes files smaller, so they take less space and travel faster.</p><p>[[Lossless|senza perdita]] compression loses nothing: the original is rebuilt exactly (ZIP, PNG, FLAC).</p><p>[[Lossy|con perdita]] compression throws away details we barely notice (JPEG, MP3, MP4). Files get much smaller, but the lost details never come back.</p>",
          "<p>La [[Compression|compressione]] rende i file più piccoli: occupano meno spazio e viaggiano più veloci.</p><p>La compressione [[Lossless|senza perdita]] (lossless) non perde nulla: l'originale si ricostruisce identico (ZIP, PNG, FLAC).</p><p>La compressione [[Lossy|con perdita]] (lossy) elimina dettagli che quasi non notiamo (JPEG, MP3, MP4). I file diventano molto più piccoli, ma i dettagli persi non tornano più.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "hex",
        "text": [
          "<p>Long strings of 0s and 1s are hard to read, so programmers use [[hexadecimal|esadecimale]]: base 16, with digits 0–9 and A–F (A = 10 … F = 15).</p><p>One hex digit = 4 bits, so one byte = 2 hex digits: 1111 1111 = <b>FF</b> = 255. Web colours are written in hex: #FF0000 is pure red. This is the CLIL page on p. 47.</p>",
          "<p>Lunghe file di 0 e 1 sono difficili da leggere, quindi i programmatori usano l'[[hexadecimal|esadecimale]]: base 16, con le cifre 0–9 e A–F (A = 10 … F = 15).</p><p>Una cifra esadecimale = 4 bit, quindi un byte = 2 cifre: 1111 1111 = <b>FF</b> = 255. I colori del web si scrivono in esadecimale: #FF0000 è rosso puro. È la pagina CLIL a p. 47.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "divide",
        "text": [
          "<p>One last lesson, about people rather than bits. The [[digital divide|divario digitale]] is the gap between people who have devices, a good connection and digital skills, and people who don't.</p><p>It exists between countries, between cities and the countryside, and between generations. Schools, governments and cheaper technology all help to close it.</p>",
          "<p>Un'ultima lezione, sulle persone più che sui bit. Il [[digital divide|divario digitale]] è la distanza tra chi ha dispositivi, una buona connessione e competenze digitali, e chi non li ha.</p><p>Esiste tra Paesi, tra città e campagna e tra generazioni. Scuole, governi e tecnologia più economica aiutano a ridurlo.</p>"
        ]
      },
      {
        "type": "sort",
        "title": [
          "Lossless or lossy?",
          "Senza perdita o con perdita?"
        ],
        "cats": [
          [
            "Lossless",
            "Senza perdita"
          ],
          [
            "Lossy",
            "Con perdita"
          ]
        ],
        "items": [
          {
            "n": [
              "A ZIP folder of homework",
              "Una cartella ZIP di compiti"
            ],
            "i": "zip",
            "c": 0,
            "why": [
              "ZIP must give back every file exactly.",
              "Lo ZIP deve restituire ogni file identico."
            ]
          },
          {
            "n": [
              "A PNG screenshot",
              "Uno screenshot PNG"
            ],
            "i": "image",
            "c": 0,
            "why": [
              "PNG is lossless.",
              "PNG è senza perdita."
            ]
          },
          {
            "n": [
              "A JPEG holiday photo",
              "Una foto delle vacanze in JPEG"
            ],
            "i": "image",
            "c": 1,
            "why": [
              "JPEG drops tiny details to save space.",
              "JPEG elimina piccoli dettagli per risparmiare spazio."
            ]
          },
          {
            "n": [
              "An MP3 song",
              "Una canzone MP3"
            ],
            "i": "music",
            "c": 1,
            "why": [
              "MP3 removes sounds we hardly hear.",
              "L'MP3 elimina suoni che sentiamo appena."
            ]
          },
          {
            "n": [
              "A FLAC music file",
              "Un file musicale FLAC"
            ],
            "i": "music",
            "c": 0,
            "why": [
              "FLAC keeps every bit of the audio.",
              "FLAC conserva ogni bit dell'audio."
            ]
          },
          {
            "n": [
              "An MP4 streaming video",
              "Un video MP4 in streaming"
            ],
            "i": "video",
            "c": 1,
            "why": [
              "Video streaming uses lossy compression.",
              "Lo streaming video usa compressione con perdita."
            ]
          },
          {
            "n": [
              "A zipped program to install",
              "Un programma compresso da installare"
            ],
            "i": "zip",
            "c": 0,
            "why": [
              "Changing even one bit could break a program.",
              "Cambiare anche un solo bit potrebbe rompere un programma."
            ]
          },
          {
            "n": [
              "A voice message in a chat app",
              "Un messaggio vocale in chat"
            ],
            "i": "mic",
            "c": 1,
            "why": [
              "Voice messages are compressed with loss to stay small.",
              "I vocali sono compressi con perdita per restare leggeri."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>BLOOOAAT! I am the Bloat Golem! I swell every file until your disk explodes!</p>",
          "<p>GONFIOOO! Sono il Golem Gonfiato! Faccio gonfiare ogni file finché il disco esplode!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "Lossless compression means…",
          "Compressione senza perdita significa…"
        ],
        "a": [
          [
            "The original can be rebuilt exactly",
            "L'originale si ricostruisce identico"
          ],
          [
            "Some details are thrown away",
            "Alcuni dettagli vengono eliminati"
          ],
          [
            "The file gets bigger",
            "Il file diventa più grande"
          ],
          [
            "Only images can be compressed",
            "Si possono comprimere solo immagini"
          ]
        ],
        "why": [
          "Lossless = no information lost.",
          "Senza perdita = nessuna informazione persa."
        ]
      },
      {
        "q": [
          "Which format uses LOSSY compression?",
          "Quale formato usa compressione CON PERDITA?"
        ],
        "a": [
          [
            "JPEG",
            "JPEG"
          ],
          [
            "ZIP",
            "ZIP"
          ],
          [
            "PNG",
            "PNG"
          ],
          [
            "FLAC",
            "FLAC"
          ]
        ],
        "why": [
          "JPEG removes small details from photos.",
          "JPEG elimina piccoli dettagli dalle foto."
        ]
      },
      {
        "q": [
          "Why must a program be compressed lossless?",
          "Perché un programma va compresso senza perdita?"
        ],
        "a": [
          [
            "Changing even one bit could break it",
            "Cambiare anche un solo bit potrebbe romperlo"
          ],
          [
            "Programs are always small",
            "I programmi sono sempre piccoli"
          ],
          [
            "Lossy is illegal",
            "Con perdita è illegale"
          ],
          [
            "Programs are images",
            "I programmi sono immagini"
          ]
        ],
        "why": [
          "Instructions must stay exactly the same.",
          "Le istruzioni devono restare identiche."
        ]
      },
      {
        "q": [
          "What is hexadecimal FF in decimal?",
          "Quanto vale FF esadecimale in decimale?"
        ],
        "a": [
          [
            "255",
            "255"
          ],
          [
            "16",
            "16"
          ],
          [
            "100",
            "100"
          ],
          [
            "1515",
            "1515"
          ]
        ],
        "why": [
          "F = 15: 15 × 16 + 15 = 255.",
          "F = 15: 15 × 16 + 15 = 255."
        ]
      },
      {
        "q": [
          "The web colour #FFFFFF is…",
          "Il colore web #FFFFFF è…"
        ],
        "a": [
          [
            "White",
            "Bianco"
          ],
          [
            "Black",
            "Nero"
          ],
          [
            "Red",
            "Rosso"
          ],
          [
            "Blue",
            "Blu"
          ]
        ],
        "why": [
          "Red, green and blue all at maximum make white.",
          "Rosso, verde e blu al massimo danno il bianco."
        ]
      },
      {
        "q": [
          "What is the digital divide?",
          "Che cos'è il divario digitale?"
        ],
        "a": [
          [
            "The gap between people with and without access to technology and digital skills",
            "La distanza tra chi ha e chi non ha accesso alla tecnologia e competenze digitali"
          ],
          [
            "A broken screen",
            "Uno schermo rotto"
          ],
          [
            "Dividing by 2 in binary",
            "Dividere per 2 in binario"
          ],
          [
            "A type of compression",
            "Un tipo di compressione"
          ]
        ],
        "why": [
          "It is about access and skills, not maths.",
          "Riguarda accesso e competenze, non la matematica."
        ]
      },
      {
        "q": [
          "One hexadecimal digit represents how many bits?",
          "Quanti bit rappresenta una cifra esadecimale?"
        ],
        "a": [
          [
            "4",
            "4"
          ],
          [
            "8",
            "8"
          ],
          [
            "2",
            "2"
          ],
          [
            "16",
            "16"
          ]
        ],
        "why": [
          "16 = 2⁴, so 4 bits.",
          "16 = 2⁴, quindi 4 bit."
        ]
      }
    ]
  },
  {
    "id": "a3m1",
    "arc": 2,
    "sec": "3.1–3.2",
    "pages": "48–51",
    "hue": 200,
    "horns": 2,
    "eyes": 2,
    "title": [
      "Hardware, Software & von Neumann",
      "Hardware, software e von Neumann"
    ],
    "topic": [
      "What a computer is; the von Neumann architecture",
      "Che cos'è un computer; l'architettura di von Neumann"
    ],
    "learning": {
          "version": 1,
          "prerequisites": [
                [
                      "Know that a computer runs programs and works with information.",
                      "Sapere che un computer esegue programmi ed elabora informazioni."
                ]
          ],
          "objectives": [
                {
                      "id": "trace-computer-cycle",
                      "description": [
                            "Trace how a computer receives, processes, outputs and stores information.",
                            "Descrivere come un computer riceve, elabora, produce e memorizza informazioni."
                      ]
                },
                {
                      "id": "hardware-vs-software",
                      "description": [
                            "Distinguish physical hardware from the software instructions it runs.",
                            "Distinguere l'hardware fisico dalle istruzioni software che esegue."
                      ]
                },
                {
                      "id": "von-neumann-components",
                      "description": [
                            "Identify the main parts of the von Neumann architecture and explain the role of the bus.",
                            "Identificare i componenti principali dell'architettura di von Neumann e spiegare il ruolo del bus."
                      ]
                }
          ],
          "guidedPractice": [
  {
    "id": "guided-hardware-cycle",
    "title": [
      "Guided practice: computer systems",
      "Esercitazione guidata: sistemi informatici"
    ],
    "instructions": [
      "Answer both questions. If you get stuck, reveal the hint; an incorrect answer lets you try again.",
      "Rispondi a entrambe le domande. Se hai difficoltà, mostra il suggerimento; una risposta errata ti permette di riprovare."
    ],
    "sceneIndex": 0,
    "hints": [
      [
        "Follow the direction of information: what enters, what processes it, and what presents the result?",
        "Segui la direzione delle informazioni: cosa entra, cosa le elabora e cosa presenta il risultato?"
      ],
      [
        "Separate physical components from programs and instructions.",
        "Distingui i componenti fisici dai programmi e dalle istruzioni."
      ]
    ],
    "questions": [
      {
        "q": [
          "A student speaks into a microphone and sees their words appear on screen. Which sequence best describes the system?",
          "Uno studente parla in un microfono e vede le parole apparire sullo schermo. Quale sequenza descrive meglio il sistema?"
        ],
        "a": [
          [
            "Microphone input → processing → screen output",
            "Input microfono → elaborazione → output schermo"
          ],
          [
            "Screen input → storage → microphone output",
            "Input schermo → archiviazione → output microfono"
          ],
          [
            "CPU input → keyboard processing → RAM output",
            "Input CPU → elaborazione tastiera → output RAM"
          ]
        ],
        "why": [
          "The microphone sends information in, the computer processes it, and the screen presents the result.",
          "Il microfono invia informazioni, il computer le elabora e lo schermo presenta il risultato."
        ]
      },
      {
        "q": [
          "Which item is software rather than hardware?",
          "Quale elemento è software anziché hardware?"
        ],
        "a": [
          [
            "A word-processing application",
            "Un programma di videoscrittura"
          ],
          [
            "A keyboard",
            "Una tastiera"
          ],
          [
            "An SSD",
            "Un SSD"
          ]
        ],
        "why": [
          "An application is a set of instructions. A keyboard and SSD are physical components.",
          "Un'applicazione è un insieme di istruzioni. Tastiera e SSD sono componenti fisici."
        ]
      }
    ]
  }
],
          "independentPractice": [
  {
    "id": "independent-hardware-cycle",
    "title": [
      "Independent challenge: computer systems",
      "Sfida autonoma: sistemi informatici"
    ],
    "instructions": [
      "Solve each new situation without hints. Choose the best answer, then review the explanation.",
      "Risolvi ogni nuova situazione senza suggerimenti. Scegli la risposta migliore, poi leggi la spiegazione."
    ],
    "sceneIndex": 0,
    "questions": [
      {
        "q": [
          "A student edits a presentation, displays it on a projector and saves it. Which device is an output device?",
          "Uno studente modifica una presentazione, la mostra con un proiettore e la salva. Quale dispositivo è di output?"
        ],
        "a": [
          [
            "The projector",
            "Il proiettore"
          ],
          [
            "The keyboard",
            "La tastiera"
          ],
          [
            "The SSD",
            "L'SSD"
          ]
        ],
        "why": [
          "The projector presents information from the computer, so it is output. The keyboard is input and the SSD stores data.",
          "Il proiettore presenta le informazioni del computer, quindi è output. La tastiera è input e l'SSD memorizza i dati."
        ]
      },
      {
        "q": [
          "A computer follows instructions stored in memory. Which architecture principle does this describe?",
          "Un computer esegue istruzioni memorizzate in memoria. Quale principio architetturale descrive?"
        ],
        "a": [
          [
            "Stored-program concept",
            "Concetto di programma memorizzato"
          ],
          [
            "Touchscreen sensing",
            "Rilevamento touchscreen"
          ],
          [
            "Cloud synchronisation",
            "Sincronizzazione cloud"
          ]
        ],
        "why": [
          "The stored-program concept places program instructions and data in memory for the processor to use.",
          "Il concetto di programma memorizzato prevede che istruzioni e dati siano in memoria per essere utilizzati dal processore."
        ]
      },
      {
        "q": [
          "The CPU needs to read a memory location. Which bus carries the location identifier?",
          "La CPU deve leggere una posizione di memoria. Quale bus trasporta l'identificatore della posizione?"
        ],
        "a": [
          [
            "Address bus",
            "Bus degli indirizzi"
          ],
          [
            "Data bus",
            "Bus dei dati"
          ],
          [
            "Control bus",
            "Bus di controllo"
          ]
        ],
        "why": [
          "The address bus identifies where data should be read from or written to.",
          "Il bus degli indirizzi indica da dove leggere o dove scrivere i dati."
        ]
      }
    ]
  }
],
          "knowledgeCheck": [
            {
              "q": [
                "Which component processes instructions?",
                "Quale componente elabora le istruzioni?"
              ],
              "a": [
                [
                  "CPU",
                  "CPU"
                ],
                [
                  "Monitor",
                  "Monitor"
                ],
                [
                  "Keyboard",
                  "Tastiera"
                ]
              ],
              "why": [
                "The CPU processes instructions.",
                "La CPU elabora le istruzioni."
              ]
            },
            {
              "q": [
                "Which item is software?",
                "Quale elemento è software?"
              ],
              "a": [
                [
                  "A browser",
                  "Un browser"
                ],
                [
                  "A mouse",
                  "Un mouse"
                ],
                [
                  "A motherboard",
                  "Una scheda madre"
                ]
              ],
              "why": [
                "A browser is a program.",
                "Un browser è un programma."
              ]
            },
            {
              "q": [
                "Where are program instructions held while in use?",
                "Dove sono conservate le istruzioni mentre vengono usate?"
              ],
              "a": [
                [
                  "Main memory",
                  "Memoria principale"
                ],
                [
                  "Monitor",
                  "Monitor"
                ],
                [
                  "Printer",
                  "Stampante"
                ]
              ],
              "why": [
                "Instructions and data are stored in memory.",
                "Istruzioni e dati sono conservati in memoria."
              ]
            },
            {
              "q": [
                "What does a system bus do?",
                "Cosa fa un bus di sistema?"
              ],
              "a": [
                [
                  "Connect components and transfer signals",
                  "Collega componenti e trasferisce segnali"
                ],
                [
                  "Cool the CPU",
                  "Raffredda la CPU"
                ],
                [
                  "Display images",
                  "Visualizza immagini"
                ]
              ],
              "why": [
                "Buses enable communication between components.",
                "I bus permettono la comunicazione tra componenti."
              ]
            }
          ],
          "masteryAssessment": {
            "title": [
              "Hardware & computer systems mastery",
              "Padronanza di hardware e sistemi informatici"
            ],
            "instructions": [
              "Answer all five questions independently. You need at least 80% to unlock the battle.",
              "Rispondi autonomamente a tutte e cinque le domande. Serve almeno l'80% per sbloccare la battaglia."
            ],
            "passingScore": 80,
            "questionConceptIds": ["input-processing-output-storage", "hardware-and-software", "von-neumann-architecture", "von-neumann-architecture", "von-neumann-architecture"],
            "questions": [
              {
                "q": [
                  "A smart doorbell records a visitor and shows the video on a phone. Which sequence best describes the computer system?",
                  "Un campanello smart registra un visitatore e mostra il video su un telefono. Quale sequenza descrive meglio il sistema?"
                ],
                "a": [
                  [
                    "Camera input → processing → screen output",
                    "Input fotocamera → elaborazione → output schermo"
                  ],
                  [
                    "Screen input → storage → camera output",
                    "Input schermo → archiviazione → output fotocamera"
                  ],
                  [
                    "Output → processing → input",
                    "Output → elaborazione → input"
                  ],
                  [
                    "Storage → keyboard input → processing",
                    "Archiviazione → input tastiera → elaborazione"
                  ]
                ],
                "why": [
                  "The camera captures input, the system processes it, and the phone displays the result.",
                  "La fotocamera acquisisce l'input, il sistema lo elabora e il telefono mostra il risultato."
                ]
              },
              {
                "q": [
                  "Which item is software rather than hardware?",
                  "Quale elemento è software anziché hardware?"
                ],
                "a": [
                  [
                    "A spreadsheet application",
                    "Un'applicazione per fogli di calcolo"
                  ],
                  [
                    "A graphics card",
                    "Una scheda grafica"
                  ],
                  [
                    "A keyboard",
                    "Una tastiera"
                  ],
                  [
                    "A monitor",
                    "Un monitor"
                  ]
                ],
                "why": [
                  "An application is a set of programs and instructions, not a physical component.",
                  "Un'applicazione è un insieme di programmi e istruzioni, non un componente fisico."
                ]
              },
              {
                "q": [
                  "What is the key idea of the stored-program concept in von Neumann architecture?",
                  "Qual è l'idea fondamentale del concetto di programma memorizzato nell'architettura di von Neumann?"
                ],
                "a": [
                  [
                    "Instructions are stored in memory",
                    "Le istruzioni sono memorizzate in memoria"
                  ],
                  [
                    "Instructions are built permanently into the monitor",
                    "Le istruzioni sono incorporate permanentemente nel monitor"
                  ],
                  [
                    "Programs are stored only on the keyboard",
                    "I programmi sono memorizzati solo nella tastiera"
                  ],
                  [
                    "The CPU works without memory",
                    "La CPU funziona senza memoria"
                  ]
                ],
                "why": [
                  "The stored-program concept keeps program instructions in memory so the CPU can fetch them.",
                  "Il concetto di programma memorizzato mantiene le istruzioni in memoria affinché la CPU possa prelevarle."
                ]
              },
              {
                "q": [
                  "Which statement best describes the system bus?",
                  "Quale affermazione descrive meglio il bus di sistema?"
                ],
                "a": [
                  [
                    "It carries data, address and control signals between components",
                    "Trasporta dati, indirizzi e segnali di controllo tra i componenti"
                  ],
                  [
                    "It supplies electrical power from the wall",
                    "Fornisce energia elettrica dalla presa"
                  ],
                  [
                    "It displays images on the monitor",
                    "Visualizza immagini sul monitor"
                  ],
                  [
                    "It stores files permanently",
                    "Memorizza i file in modo permanente"
                  ]
                ],
                "why": [
                  "The system bus provides communication paths for data, addresses and control signals.",
                  "Il bus di sistema offre percorsi di comunicazione per dati, indirizzi e segnali di controllo."
                ]
              },
              {
                "q": [
                  "In a typical computer, which component carries out program instructions?",
                  "In un computer tipico, quale componente esegue le istruzioni dei programmi?"
                ],
                "a": [
                  [
                    "The CPU",
                    "La CPU"
                  ],
                  [
                    "The monitor",
                    "Il monitor"
                  ],
                  [
                    "The power supply",
                    "L'alimentatore"
                  ],
                  [
                    "The case fan",
                    "La ventola del case"
                  ]
                ],
                "why": [
                  "The CPU fetches, decodes and executes program instructions.",
                  "La CPU preleva, decodifica ed esegue le istruzioni dei programmi."
                ]
              }
            ]
          },
          "concepts": [
                {
                      "id": "input-processing-output-storage",
                      "title": [
                            "The computer cycle",
                            "Il ciclo del computer"
                      ],
                      "explanation": [
                            "A computer accepts input, processes data, produces output and can store information for later use.",
                            "Un computer riceve input, elabora dati, produce output e può memorizzare informazioni per utilizzarle in seguito."
                      ],
                      "sceneIndexes": [
                            0
                      ],
                      "visualKey": "ipos"
                ,
                      
                      "example": ["When you search for a video: the keyboard sends your query, the CPU and app process it, the screen displays results, and the browser may store history.","Quando cerchi un video: la tastiera invia la ricerca, CPU e app la elaborano, lo schermo mostra i risultati e il browser può salvare la cronologia."],
                      "workedExample": {
  "scenario": [
    "You type a search for a volcano video, press Enter, watch the result and save the link. Trace the computer cycle in this task.",
    "Digiti una ricerca per un video sui vulcani, premi Invio, guardi il risultato e salvi il link. Descrivi il ciclo del computer in questa attività."
  ],
  "steps": [
    [
      "1. Input: the keyboard sends the search words to the computer.",
      "1. Input: la tastiera invia le parole della ricerca al computer."
    ],
    [
      "2. Processing: the CPU runs the browser and search instructions to handle the request.",
      "2. Elaborazione: la CPU esegue il browser e le istruzioni di ricerca per gestire la richiesta."
    ],
    [
      "3. Output: the screen presents the search results and video.",
      "3. Output: lo schermo mostra i risultati e il video."
    ],
    [
      "4. Storage: saving the link writes information to storage so it can be used later.",
      "4. Memorizzazione: salvare il link scrive le informazioni in una memoria che potrai usare in seguito."
    ]
  ],
  "answer": [
    "The keyboard provides input, the CPU and software process it, the screen provides output, and storage keeps the saved link.",
    "La tastiera fornisce l'input, CPU e software lo elaborano, lo schermo produce l'output e la memoria conserva il link salvato."
  ]
},
                      "misconceptions": [
  {
    "belief": [
      "The monitor is the input because it is where I see the result.",
      "Il monitor è l'input perché è lì che vedo il risultato."
    ],
    "correction": [
      "The monitor presents information, so it is output. Input is information sent into the computer, such as search words typed on the keyboard.",
      "Il monitor presenta informazioni, quindi è output. L'input è l'informazione inviata al computer, ad esempio le parole digitate sulla tastiera."
    ]
  }
],
                      "knowledgePrompts": [
                        [
                          "Explain The computer cycle in your own words and give one practical example.",
                          "Spiega Il ciclo del computer con parole tue e fornisci un esempio pratico."
                        ]
                      ]
                },
                {
                      "id": "hardware-and-software",
                      "title": [
                            "Hardware and software",
                            "Hardware e software"
                      ],
                      "explanation": [
                            "Hardware is the physical equipment; software is the programs and instructions that tell the equipment what to do.",
                            "L'hardware è la parte fisica; il software è l'insieme di programmi e istruzioni che indicano ai componenti cosa fare."
                      ],
                      "sceneIndexes": [
                            1
                      ],
                      "visualKey": "hwsw"
                ,
                      
                      "example": ["A laptop's keyboard is hardware; the operating system and browser running on it are software.","La tastiera di un portatile è hardware; il sistema operativo e il browser che vi funzionano sono software."],
                      "workedExample": {
  "scenario": [
    "A student uses a laptop to write a report. Identify the hardware and software involved.",
    "Uno studente usa un portatile per scrivere una relazione. Individua l'hardware e il software coinvolti."
  ],
  "steps": [
    [
      "1. Find the physical parts: laptop, keyboard, screen and SSD.",
      "1. Individua le parti fisiche: portatile, tastiera, schermo e SSD."
    ],
    [
      "2. Identify the programs: operating system and word processor.",
      "2. Individua i programmi: sistema operativo e programma di videoscrittura."
    ],
    [
      "3. Explain how they work together: software gives instructions and hardware carries them out.",
      "3. Spiega come collaborano: il software fornisce istruzioni e l'hardware le esegue."
    ],
    [
      "4. Closing the word processor stops the program, but the keyboard remains a physical component.",
      "4. Chiudere il programma interrompe il software, ma la tastiera resta un componente fisico."
    ]
  ],
  "answer": [
    "The laptop, keyboard, screen and SSD are hardware. The operating system and word processor are software; they use the hardware to create and save the report.",
    "Il portatile, la tastiera, lo schermo e l'SSD sono hardware. Il sistema operativo e il programma di videoscrittura sono software e usano l'hardware per creare e salvare la relazione."
  ]
},
                      "misconceptions": [
  {
    "belief": [
      "A word processor is hardware because I use it on a laptop.",
      "Un programma di videoscrittura è hardware perché lo uso su un portatile."
    ],
    "correction": [
      "A word processor is software: it is a program, not a physical component. The keyboard and screen are hardware.",
      "Un programma di videoscrittura è software: è un programma, non un componente fisico. Tastiera e schermo sono hardware."
    ]
  }
],
                      "knowledgePrompts": [
                        [
                          "Explain Hardware and software in your own words and give one practical example.",
                          "Spiega Hardware e software con parole tue e fornisci un esempio pratico."
                        ]
                      ]
                },
                {
                      "id": "von-neumann-architecture",
                      "title": [
                            "The von Neumann architecture",
                            "L'architettura di von Neumann"
                      ],
                      "explanation": [
                            "In the von Neumann model, instructions and data share main memory. The CPU processes instructions, input/output devices communicate with the outside world, and buses connect the components.",
                            "Nel modello di von Neumann, istruzioni e dati condividono la memoria centrale. La CPU esegue le istruzioni, le periferiche di input/output comunicano con l'esterno e i bus collegano i componenti."
                      ],
                      "sceneIndexes": [
                            2
                      ],
                      "visualKey": "vonneumann"
                ,
                      
                      "example": ["A calculator program's instructions and values are held in main memory while the CPU fetches and executes the instructions.","Le istruzioni e i valori di un programma calcolatrice sono conservati nella memoria centrale mentre la CPU li preleva ed esegue."],
                      "workedExample": {
  "scenario": [
    "A computer opens a calculator app and works out 27 × 14. Use the von Neumann model to explain what happens.",
    "Un computer apre una calcolatrice e calcola 27 × 14. Usa il modello di von Neumann per spiegare cosa accade."
  ],
  "steps": [
    [
      "1. The calculator instructions and values 27 and 14 are loaded into main memory.",
      "1. Le istruzioni della calcolatrice e i valori 27 e 14 vengono caricati nella memoria centrale."
    ],
    [
      "2. The CPU fetches an instruction and its required data from memory.",
      "2. La CPU preleva dalla memoria un'istruzione e i dati necessari."
    ],
    [
      "3. The control unit coordinates the operation and the ALU performs the multiplication.",
      "3. L'unità di controllo coordina l'operazione e l'ALU esegue la moltiplicazione."
    ],
    [
      "4. Buses carry data, addresses and control signals; the result is sent to the display.",
      "4. I bus trasportano dati, indirizzi e segnali di controllo; il risultato viene inviato allo schermo."
    ]
  ],
  "answer": [
    "Instructions and data share main memory; the CPU fetches and executes instructions, while buses connect components and input/output devices communicate with the user.",
    "Istruzioni e dati condividono la memoria centrale; la CPU preleva ed esegue le istruzioni, mentre i bus collegano i componenti e le periferiche comunicano con l'utente."
  ]
},
                      "misconceptions": [
  {
    "belief": [
      "The CPU permanently stores every program and file.",
      "La CPU memorizza permanentemente ogni programma e file."
    ],
    "correction": [
      "The CPU processes instructions. Main memory holds the instructions and data currently needed; long-term files are kept in storage.",
      "La CPU elabora le istruzioni. La memoria centrale contiene istruzioni e dati necessari in quel momento; i file a lungo termine sono conservati nell'archiviazione."
    ]
  }
],
                      "knowledgePrompts": [
                        [
                          "Explain The von Neumann architecture in your own words and give one practical example.",
                          "Spiega L'architettura di von Neumann con parole tue e fornisci un esempio pratico."
                        ]
                      ]
                }
          ]
    },
    "demon": [
      "Static Imp",
      "Folletto Statico"
    ],
    "tech": [
      "Circuit Form · First Technique: Input–Output Slash",
      "Stile del Circuito · Prima Tecnica: Fendente Input–Output"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "ipos",
        "text": [
          "<p>A computer takes in data, works on it, gives back results and keeps data for later:</p><p><b>1.</b> [[Input|input]]: data goes in (you type).<br><b>2.</b> [[Processing|elaborazione]]: the CPU works on it.<br><b>3.</b> [[Output|output]]: results come out (letters on the screen).<br><b>4.</b> [[Storage|memorizzazione]]: data is kept (saved on the SSD).</p><p>Watch the dots: that's data moving between the parts.</p>",
          "<p>Un computer riceve dati, li elabora, restituisce risultati e conserva i dati per dopo:</p><p><b>1.</b> [[Input|input]]: i dati entrano (scrivi).<br><b>2.</b> [[Processing|elaborazione]]: la CPU li elabora.<br><b>3.</b> [[Output|output]]: escono i risultati (le lettere sullo schermo).<br><b>4.</b> [[Storage|memorizzazione]]: i dati vengono conservati (salvati sull'SSD).</p><p>Guarda i puntini: sono i dati che viaggiano tra le parti.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "hwsw",
        "text": [
          "<p>[[Hardware|hardware]] is the physical parts you can touch. [[Software|software]] is the programs: instructions that tell the hardware what to do.</p><p>Think of a hunter: hardware is the body and the sword, software is the training and the techniques. A sword with no technique does nothing.</p>",
          "<p>L'[[Hardware|hardware]] sono le parti fisiche, che si possono toccare. Il [[Software|software]] sono i programmi: istruzioni che dicono all'hardware cosa fare.</p><p>Pensa a una cacciatrice: l'hardware è il corpo e la spada, il software è l'allenamento e le tecniche. Una spada senza tecnica non serve a nulla.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "vonneumann",
        "text": [
          "<p>In 1945 the mathematician John von Neumann described the design that almost every computer still follows, the [[von Neumann architecture|architettura di von Neumann]]:</p><p>a <b>CPU</b>; a <b>central memory</b> that holds <b>both programs and data</b>; <b>input and output</b> devices; all linked by a [[bus|bus]].</p><p>Because the program sits in memory, you can change what the computer does just by loading a different program.</p>",
          "<p>Nel 1945 il matematico John von Neumann descrisse lo schema che quasi tutti i computer seguono ancora oggi, l'[[von Neumann architecture|architettura di von Neumann]]:</p><p>una <b>CPU</b>; una <b>memoria centrale</b> che contiene <b>sia i programmi sia i dati</b>; dispositivi di <b>input e output</b>; il tutto collegato da un [[bus|bus]].</p><p>Siccome il programma sta in memoria, puoi cambiare ciò che fa il computer semplicemente caricando un altro programma.</p>"
        ]
      },
      {
        "type": "sort",
        "title": [
          "Hardware or software?",
          "Hardware o software?"
        ],
        "cats": [
          [
            "Hardware",
            "Hardware"
          ],
          [
            "Software",
            "Software"
          ]
        ],
        "items": [
          {
            "n": [
              "Keyboard",
              "Tastiera"
            ],
            "i": "keyboard",
            "c": 0,
            "why": [
              "You can touch it: hardware.",
              "Si può toccare: hardware."
            ]
          },
          {
            "n": [
              "Web browser",
              "Browser"
            ],
            "i": "app",
            "c": 1,
            "why": [
              "A program: software.",
              "Un programma: software."
            ]
          },
          {
            "n": [
              "CPU",
              "CPU"
            ],
            "i": "chip",
            "c": 0,
            "why": [
              "A physical chip: hardware.",
              "Un chip fisico: hardware."
            ]
          },
          {
            "n": [
              "Operating system",
              "Sistema operativo"
            ],
            "i": "layers",
            "c": 1,
            "why": [
              "The most important software.",
              "Il software più importante."
            ]
          },
          {
            "n": [
              "Video game",
              "Videogioco"
            ],
            "i": "gamepad",
            "c": 1,
            "why": [
              "The game itself is a program.",
              "Il gioco in sé è un programma."
            ]
          },
          {
            "n": [
              "Monitor",
              "Monitor"
            ],
            "i": "monitor",
            "c": 0,
            "why": [
              "A physical device.",
              "Un dispositivo fisico."
            ]
          },
          {
            "n": [
              "Printer driver",
              "Driver della stampante"
            ],
            "i": "gear",
            "c": 1,
            "why": [
              "Drivers are small programs.",
              "I driver sono piccoli programmi."
            ]
          },
          {
            "n": [
              "RAM stick",
              "Banco di RAM"
            ],
            "i": "ram",
            "c": 0,
            "why": [
              "A physical memory module.",
              "Un modulo fisico di memoria."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Bzzzt! I'm the Static Imp. I scramble input and output so nobody can tell them apart!</p>",
          "<p>Bzzzt! Sono il Folletto Statico. Confondo input e output finché nessuno li distingue più!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "What is hardware?",
          "Che cos'è l'hardware?"
        ],
        "a": [
          [
            "The physical parts of a computer",
            "Le parti fisiche del computer"
          ],
          [
            "The programs on a computer",
            "I programmi del computer"
          ],
          [
            "Only the screen",
            "Solo lo schermo"
          ],
          [
            "The internet",
            "Internet"
          ]
        ],
        "why": [
          "Hardware = what you can touch.",
          "Hardware = ciò che puoi toccare."
        ]
      },
      {
        "q": [
          "Which of these is software?",
          "Quale di questi è software?"
        ],
        "a": [
          [
            "A web browser",
            "Un browser"
          ],
          [
            "A keyboard",
            "Una tastiera"
          ],
          [
            "A monitor",
            "Un monitor"
          ],
          [
            "A CPU",
            "Una CPU"
          ]
        ],
        "why": [
          "A browser is a program.",
          "Un browser è un programma."
        ]
      },
      {
        "q": [
          "In the von Neumann architecture, the central memory holds…",
          "Nell'architettura di von Neumann, la memoria centrale contiene…"
        ],
        "a": [
          [
            "Both programs and data",
            "Sia i programmi sia i dati"
          ],
          [
            "Only data",
            "Solo i dati"
          ],
          [
            "Only the operating system",
            "Solo il sistema operativo"
          ],
          [
            "Nothing: it is just a cable",
            "Niente: è solo un cavo"
          ]
        ],
        "why": [
          "Storing the program in memory is the key idea.",
          "Mettere il programma in memoria è l'idea chiave."
        ]
      },
      {
        "q": [
          "What connects the CPU, memory and I/O in von Neumann's design?",
          "Cosa collega CPU, memoria e I/O nello schema di von Neumann?"
        ],
        "a": [
          [
            "The bus",
            "Il bus"
          ],
          [
            "The monitor",
            "Il monitor"
          ],
          [
            "The keyboard",
            "La tastiera"
          ],
          [
            "The internet",
            "Internet"
          ]
        ],
        "why": [
          "Buses carry data, addresses and control signals.",
          "I bus trasportano dati, indirizzi e segnali di controllo."
        ]
      },
      {
        "q": [
          "What is the correct order of the cycle?",
          "Qual è l'ordine corretto del ciclo?"
        ],
        "a": [
          [
            "Input → Processing → Output",
            "Input → Elaborazione → Output"
          ],
          [
            "Output → Input → Processing",
            "Output → Input → Elaborazione"
          ],
          [
            "Processing → Output → Input",
            "Elaborazione → Output → Input"
          ],
          [
            "Input → Output → Processing",
            "Input → Output → Elaborazione"
          ]
        ],
        "why": [
          "Data comes in, is processed, then results go out.",
          "I dati entrano, vengono elaborati, poi escono i risultati."
        ]
      },
      {
        "q": [
          "You speak into a microphone on a video call. That is…",
          "Parli nel microfono durante una videochiamata. È…"
        ],
        "a": [
          [
            "Input",
            "Input"
          ],
          [
            "Output",
            "Output"
          ],
          [
            "Processing",
            "Elaborazione"
          ],
          [
            "Storage",
            "Memorizzazione"
          ]
        ],
        "why": [
          "Your voice goes INTO the computer.",
          "La tua voce ENTRA nel computer."
        ]
      }
    ]
  },
  {
    "id": "a3m2",
    "arc": 2,
    "sec": "3.3–3.4",
    "pages": "52–55",
    "hue": 20,
    "horns": 3,
    "eyes": 2,
    "title": [
      "The Core Flame: Motherboard & CPU",
      "La fiamma del nucleo: scheda madre e CPU"
    ],
    "topic": [
      "Motherboard, CPU, fetch–decode–execute",
      "Scheda madre, CPU, ciclo fetch–decode–execute"
    ],
    "learning": {
          "version": 1,
          "prerequisites": [
                [
                      "Understand the input–processing–output cycle and the difference between hardware and software.",
                      "Comprendere il ciclo input–elaborazione–output e la differenza tra hardware e software."
                ]
          ],
          "objectives": [
                {
                      "id": "motherboard-role",
                      "description": [
                            "Explain how the motherboard connects and allows computer components to communicate.",
                            "Spiegare come la scheda madre collega i componenti e permette loro di comunicare."
                      ]
                },
                {
                      "id": "power-supply-role",
                      "description": [
                            "Describe why a power supply converts mains AC into suitable DC power for components.",
                            "Descrivere perché l'alimentatore converte la corrente alternata di rete in corrente continua adatta ai componenti."
                      ]
                },
                {
                      "id": "cpu-components",
                      "description": [
                            "Identify the CPU's control unit, arithmetic logic unit and registers and describe their roles.",
                            "Identificare unità di controllo, unità aritmetico-logica e registri della CPU e descriverne i ruoli."
                      ]
                },
                {
                      "id": "cpu-performance",
                      "description": [
                            "Interpret clock speed and core count without assuming that GHz alone determines performance.",
                            "Interpretare frequenza di clock e numero di core senza presumere che i GHz da soli determinino le prestazioni."
                      ]
                },
                {
                      "id": "fetch-decode-execute",
                      "description": [
                            "Put fetch, decode and execute in the correct order and explain each stage.",
                            "Ordinare correttamente fetch, decode ed execute e spiegare ogni fase."
                      ]
                }
          ],
          "guidedPractice": [
  {
    "id": "guided-cpu-components",
    "title": [
      "Guided practice: motherboard and CPU",
      "Esercitazione guidata: scheda madre e CPU"
    ],
    "instructions": [
      "Use the hints to reason about the role of each component. Both answers must be correct to finish.",
      "Usa i suggerimenti per ragionare sul ruolo di ogni componente. Per completare, entrambe le risposte devono essere corrette."
    ],
    "sceneIndex": 0,
    "hints": [
      [
        "Think of the motherboard as the connection platform, not the component that executes instructions.",
        "Pensa alla scheda madre come alla piattaforma di collegamento, non al componente che esegue le istruzioni."
      ],
      [
        "Remember: the control unit directs; the ALU calculates.",
        "Ricorda: l'unità di controllo dirige; l'ALU calcola."
      ]
    ],
    "questions": [
      {
        "q": [
          "A new graphics card needs a compatible slot and a path to communicate with the CPU. Which component provides these connections?",
          "Una nuova scheda video ha bisogno di uno slot compatibile e di un percorso per comunicare con la CPU. Quale componente fornisce queste connessioni?"
        ],
        "a": [
          [
            "The motherboard",
            "La scheda madre"
          ],
          [
            "The power supply",
            "L'alimentatore"
          ],
          [
            "The CPU cache",
            "La cache della CPU"
          ]
        ],
        "why": [
          "The motherboard provides slots and communication pathways between components.",
          "La scheda madre fornisce slot e percorsi di comunicazione tra i componenti."
        ]
      },
      {
        "q": [
          "Which CPU component performs an addition such as 8 + 5?",
          "Quale componente della CPU esegue un'addizione come 8 + 5?"
        ],
        "a": [
          [
            "The arithmetic logic unit (ALU)",
            "L'unità aritmetico-logica (ALU)"
          ],
          [
            "The control unit",
            "L'unità di controllo"
          ],
          [
            "The power supply unit",
            "L'alimentatore"
          ]
        ],
        "why": [
          "The ALU performs arithmetic and logical operations; the control unit coordinates them.",
          "L'ALU esegue operazioni aritmetiche e logiche; l'unità di controllo le coordina."
        ]
      }
    ]
  }
],
          "independentPractice": [
  {
    "id": "independent-cpu-core",
    "title": [
      "Independent challenge: motherboard and CPU",
      "Sfida autonoma: scheda madre e CPU"
    ],
    "instructions": [
      "Apply what you learned to new hardware scenarios. No hints are available in this challenge.",
      "Applica ciò che hai imparato a nuovi scenari hardware. In questa sfida non sono disponibili suggerimenti."
    ],
    "sceneIndex": 0,
    "questions": [
      {
        "q": [
          "A PC turns off unexpectedly when the processor gets too hot. Which component helps remove heat from the CPU?",
          "Un PC si spegne improvvisamente quando il processore si surriscalda. Quale componente aiuta a rimuovere il calore dalla CPU?"
        ],
        "a": [
          [
            "CPU cooler",
            "Dissipatore della CPU"
          ],
          [
            "RAM module",
            "Modulo RAM"
          ],
          [
            "Network card",
            "Scheda di rete"
          ]
        ],
        "why": [
          "The cooler transfers heat away from the CPU to help keep it within a safe operating temperature.",
          "Il dissipatore trasferisce il calore lontano dalla CPU per mantenerla a una temperatura operativa sicura."
        ]
      },
      {
        "q": [
          "A processor has four cores. What does this most directly mean?",
          "Un processore ha quattro core. Che cosa significa più direttamente?"
        ],
        "a": [
          [
            "It has four processing cores that can work on tasks",
            "Ha quattro core di elaborazione che possono lavorare sulle attività"
          ],
          [
            "It has four hard drives",
            "Ha quattro dischi rigidi"
          ],
          [
            "It always runs at four times the speed",
            "Funziona sempre a una velocità quattro volte superiore"
          ]
        ],
        "why": [
          "More cores can handle multiple instruction streams, but performance also depends on clock speed, workload and design.",
          "Più core possono gestire più flussi di istruzioni, ma le prestazioni dipendono anche da frequenza, carico e progettazione."
        ]
      },
      {
        "q": [
          "During the fetch-decode-execute cycle, what happens during decode?",
          "Durante il ciclo fetch-decode-execute, che cosa accade durante decode?"
        ],
        "a": [
          [
            "The control unit interprets the instruction",
            "L'unità di controllo interpreta l'istruzione"
          ],
          [
            "The instruction is permanently saved to an SSD",
            "L'istruzione viene salvata permanentemente su un SSD"
          ],
          [
            "The monitor displays the instruction",
            "Il monitor visualizza l'istruzione"
          ]
        ],
        "why": [
          "Decode interprets the fetched instruction so the processor knows which operation to perform.",
          "Decode interpreta l'istruzione recuperata affinché il processore sappia quale operazione eseguire."
        ]
      }
    ]
  }
],
          "knowledgeCheck": [
            {
              "q": [
                "Which component connects CPU and RAM?",
                "Quale componente collega CPU e RAM?"
              ],
              "a": [
                [
                  "Motherboard",
                  "Scheda madre"
                ],
                [
                  "Power supply",
                  "Alimentatore"
                ],
                [
                  "SSD",
                  "SSD"
                ]
              ],
              "why": [
                "The motherboard connects components.",
                "La scheda madre collega i componenti."
              ]
            },
            {
              "q": [
                "What does the control unit do?",
                "Cosa fa l'unità di controllo?"
              ],
              "a": [
                [
                  "Coordinates instruction execution",
                  "Coordina l'esecuzione delle istruzioni"
                ],
                [
                  "Stores files permanently",
                  "Memorizza i file in modo permanente"
                ],
                [
                  "Displays graphics",
                  "Visualizza la grafica"
                ]
              ],
              "why": [
                "It directs CPU operations.",
                "Dirige le operazioni della CPU."
              ]
            },
            {
              "q": [
                "Which is the correct instruction cycle?",
                "Qual è il ciclo corretto delle istruzioni?"
              ],
              "a": [
                [
                  "Fetch, decode, execute",
                  "Fetch, decode, execute"
                ],
                [
                  "Decode, execute, fetch",
                  "Decode, execute, fetch"
                ],
                [
                  "Execute, fetch, decode",
                  "Execute, fetch, decode"
                ]
              ],
              "why": [
                "The CPU fetches, decodes, then executes.",
                "La CPU recupera, decodifica ed esegue."
              ]
            },
            {
              "q": [
                "What else affects CPU performance besides clock speed?",
                "Cos'altro influisce sulle prestazioni oltre alla frequenza?"
              ],
              "a": [
                [
                  "Cores and architecture",
                  "Core e architettura"
                ],
                [
                  "Case colour",
                  "Colore del case"
                ],
                [
                  "Screen size",
                  "Dimensione dello schermo"
                ]
              ],
              "why": [
                "Architecture and core count also matter.",
                "Contano anche architettura e numero di core."
              ]
            }
          ],
          "masteryAssessment": {
            "title": [
              "CPU & processing mastery",
              "Padronanza di CPU ed elaborazione"
            ],
            "instructions": [
              "Answer all five questions independently. You need at least 80% to unlock the battle.",
              "Rispondi autonomamente a tutte e cinque le domande. Serve almeno l'80% per sbloccare la battaglia."
            ],
            "passingScore": 80,
            "questionConceptIds": ["cpu-and-instruction-cycle", "cores-and-clock-speed", "cpu-and-instruction-cycle", "cpu-and-instruction-cycle", "power-supply"],
            "questions": [
              {
                "q": [
                  "Which sequence correctly describes the CPU instruction cycle?",
                  "Quale sequenza descrive correttamente il ciclo delle istruzioni della CPU?"
                ],
                "a": [
                  [
                    "Fetch → Decode → Execute",
                    "Prelievo → Decodifica → Esecuzione"
                  ],
                  [
                    "Decode → Execute → Fetch",
                    "Decodifica → Esecuzione → Prelievo"
                  ],
                  [
                    "Execute → Fetch → Decode",
                    "Esecuzione → Prelievo → Decodifica"
                  ],
                  [
                    "Fetch → Execute → Decode",
                    "Prelievo → Esecuzione → Decodifica"
                  ]
                ],
                "why": [
                  "The CPU retrieves an instruction, interprets it, and then carries it out.",
                  "La CPU preleva un'istruzione, la interpreta e poi la esegue."
                ]
              },
              {
                "q": [
                  "A processor runs at 2.5 GHz. What does this frequency represent?",
                  "Un processore funziona a 2,5 GHz. Che cosa rappresenta questa frequenza?"
                ],
                "a": [
                  [
                    "About 2.5 billion clock cycles per second",
                    "Circa 2,5 miliardi di cicli di clock al secondo"
                  ],
                  [
                    "2.5 billion bytes of RAM",
                    "2,5 miliardi di byte di RAM"
                  ],
                  [
                    "Exactly 2.5 programs at a time",
                    "Esattamente 2,5 programmi alla volta"
                  ],
                  [
                    "2.5 processor cores",
                    "2,5 core del processore"
                  ]
                ],
                "why": [
                  "A gigahertz is one billion hertz, and hertz means cycles per second.",
                  "Un gigahertz equivale a un miliardo di hertz e l'hertz indica i cicli al secondo."
                ]
              },
              {
                "q": [
                  "Which CPU component performs arithmetic calculations and logical comparisons?",
                  "Quale componente della CPU esegue calcoli aritmetici e confronti logici?"
                ],
                "a": [
                  [
                    "The ALU",
                    "L'ALU"
                  ],
                  [
                    "The control unit",
                    "L'unità di controllo"
                  ],
                  [
                    "The cache",
                    "La cache"
                  ],
                  [
                    "The clock",
                    "Il clock"
                  ]
                ],
                "why": [
                  "The arithmetic logic unit performs arithmetic and logical operations.",
                  "L'unità aritmetico-logica esegue operazioni aritmetiche e logiche."
                ]
              },
              {
                "q": [
                  "What is the main role of the CPU control unit?",
                  "Qual è il ruolo principale dell'unità di controllo della CPU?"
                ],
                "a": [
                  [
                    "Directing and coordinating instruction execution",
                    "Dirigere e coordinare l'esecuzione delle istruzioni"
                  ],
                  [
                    "Permanently storing user documents",
                    "Memorizzare permanentemente i documenti dell'utente"
                  ],
                  [
                    "Converting AC wall power to DC",
                    "Convertire la corrente alternata in continua"
                  ],
                  [
                    "Displaying pixels on the screen",
                    "Visualizzare i pixel sullo schermo"
                  ]
                ],
                "why": [
                  "The control unit coordinates the CPU's operations and control signals.",
                  "L'unità di controllo coordina le operazioni della CPU e i segnali di controllo."
                ]
              },
              {
                "q": [
                  "What does a computer power supply unit (PSU) do?",
                  "Che cosa fa l'alimentatore di un computer (PSU)?"
                ],
                "a": [
                  [
                    "Converts mains AC into regulated DC power",
                    "Converte la corrente alternata di rete in corrente continua regolata"
                  ],
                  [
                    "Executes software instructions",
                    "Esegue le istruzioni software"
                  ],
                  [
                    "Stores files when power is off",
                    "Memorizza i file quando manca corrente"
                  ],
                  [
                    "Cools the processor with liquid",
                    "Raffredda il processore con un liquido"
                  ]
                ],
                "why": [
                  "Computer components require regulated low-voltage DC power.",
                  "I componenti del computer richiedono corrente continua regolata a bassa tensione."
                ]
              }
            ]
          },
          "concepts": [
                {
                      "id": "motherboard",
                      "title": [
                            "The motherboard",
                            "La scheda madre"
                      ],
                      "explanation": [
                            "The motherboard is the main circuit board. It provides connections and communication paths for the CPU, memory, storage and expansion devices.",
                            "La scheda madre è il circuito principale. Fornisce connessioni e percorsi di comunicazione per CPU, memoria, archiviazione e dispositivi di espansione."
                      ],
                      "sceneIndexes": [
                            0
                      ],
                      "visualKey": "board"
                ,
                      
                      "example": ["A compatible motherboard provides the CPU socket, RAM slots and connectors for storage and expansion cards.","Una scheda madre compatibile offre il socket della CPU, gli slot RAM e i connettori per archiviazione e schede di espansione."],
                      "workedExample": {
  "scenario": [
    "You are checking whether a desktop PC can accept a new CPU, RAM kit and graphics card. What does the motherboard contribute?",
    "Stai verificando se un PC desktop può ospitare una nuova CPU, un kit RAM e una scheda video. Qual è il ruolo della scheda madre?"
  ],
  "steps": [
    [
      "1. Locate the CPU socket and check that it supports the processor.",
      "1. Individua il socket della CPU e verifica che sia compatibile con il processore."
    ],
    [
      "2. Check the DIMM slots and supported memory type for the RAM.",
      "2. Controlla gli slot DIMM e il tipo di memoria supportato per la RAM."
    ],
    [
      "3. Check the PCIe slot and available space for the graphics card.",
      "3. Controlla lo slot PCIe e lo spazio disponibile per la scheda video."
    ],
    [
      "4. The board provides physical connections and communication paths; it does not perform all processing itself.",
      "4. La scheda fornisce connessioni fisiche e percorsi di comunicazione; non esegue da sola tutta l'elaborazione."
    ]
  ],
  "answer": [
    "The motherboard connects the CPU, RAM, storage and expansion cards and provides pathways for communication. Compatibility depends on its sockets, slots and supported standards.",
    "La scheda madre collega CPU, RAM, archiviazione e schede di espansione e fornisce percorsi per la comunicazione. La compatibilità dipende da socket, slot e standard supportati."
  ]
},
                      "misconceptions": [
  {
    "belief": [
      "The motherboard is the component that performs all calculations.",
      "La scheda madre è il componente che esegue tutti i calcoli."
    ],
    "correction": [
      "The CPU executes instructions and calculations. The motherboard connects components and allows them to communicate.",
      "La CPU esegue istruzioni e calcoli. La scheda madre collega i componenti e permette loro di comunicare."
    ]
  }
],
                      "knowledgePrompts": [
                        [
                          "Explain The motherboard in your own words and give one practical example.",
                          "Spiega La scheda madre con parole tue e fornisci un esempio pratico."
                        ]
                      ]
                },
                {
                      "id": "power-supply",
                      "title": [
                            "The power supply unit",
                            "L'alimentatore"
                      ],
                      "explanation": [
                            "The PSU converts incoming alternating current into regulated low-voltage direct current required by computer components.",
                            "L'alimentatore converte la corrente alternata in ingresso in corrente continua regolata a bassa tensione, necessaria ai componenti del computer."
                      ],
                      "sceneIndexes": [
                            1
                      ],
                      "visualKey": "psu"
                ,
                      
                      "example": ["A desktop PSU converts mains AC into regulated DC outputs such as 12 V, 5 V and 3.3 V for components.","Un alimentatore desktop converte la corrente alternata di rete in uscite continue regolate, ad esempio 12 V, 5 V e 3,3 V, per i componenti."],
                      "workedExample": {
  "scenario": [
    "A desktop PC needs power for its CPU, motherboard, drives and graphics card. Explain the PSU's job.",
    "Un PC desktop ha bisogno di alimentazione per CPU, scheda madre, unità e scheda video. Spiega il compito dell'alimentatore."
  ],
  "steps": [
    [
      "1. Electricity from the wall is alternating current (AC).",
      "1. L'elettricità della presa è corrente alternata (CA)."
    ],
    [
      "2. The PSU converts AC into regulated direct-current (DC) outputs.",
      "2. L'alimentatore converte la CA in uscite regolate di corrente continua (CC)."
    ],
    [
      "3. It supplies the voltage required by components through power connectors.",
      "3. Fornisce le tensioni necessarie ai componenti tramite connettori di alimentazione."
    ],
    [
      "4. Choose a PSU with suitable connectors and sufficient capacity.",
      "4. Scegli un alimentatore con connettori adatti e potenza sufficiente."
    ]
  ],
  "answer": [
    "The PSU converts mains AC into regulated low-voltage DC and distributes it to computer components. It does not process program instructions.",
    "L'alimentatore converte la CA di rete in CC regolata a bassa tensione e la distribuisce ai componenti. Non elabora le istruzioni dei programmi."
  ]
},
                      "misconceptions": [
  {
    "belief": [
      "The PSU stores files and sends instructions to the CPU.",
      "L'alimentatore conserva file e invia istruzioni alla CPU."
    ],
    "correction": [
      "The PSU supplies electrical power. Storage devices keep files, and the CPU executes instructions.",
      "L'alimentatore fornisce energia elettrica. Le unità di archiviazione conservano i file e la CPU esegue le istruzioni."
    ]
  }
],
                      "knowledgePrompts": [
                        [
                          "Explain The power supply unit in your own words and give one practical example.",
                          "Spiega L'alimentatore con parole tue e fornisci un esempio pratico."
                        ]
                      ]
                },
                {
                      "id": "cpu-and-instruction-cycle",
                      "title": [
                            "The CPU and instruction cycle",
                            "La CPU e il ciclo delle istruzioni"
                      ],
                      "explanation": [
                            "The CPU executes program instructions. Its control unit coordinates operations, the arithmetic logic unit performs calculations and logic, and registers hold small amounts of data in immediate use. The fetch–decode–execute cycle repeats as instructions run.",
                            "La CPU esegue le istruzioni dei programmi. L'unità di controllo coordina le operazioni, l'unità aritmetico-logica esegue calcoli e operazioni logiche e i registri conservano piccole quantità di dati in uso immediato. Il ciclo fetch–decode–execute si ripete durante l'esecuzione."
                      ],
                      "sceneIndexes": [
                            2
                      ],
                      "visualKey": "cpu"
                ,
                      
                      "example": ["For an ADD instruction, the CPU fetches the instruction, decodes it and uses the ALU to add the values.","Per un'istruzione ADD, la CPU preleva l'istruzione, la decodifica e usa l'ALU per sommare i valori."],
                      "workedExample": {
  "scenario": [
    "A program adds 8 and 5, then compares the result with 10. Identify the CPU parts at work.",
    "Un programma somma 8 e 5, poi confronta il risultato con 10. Individua le parti della CPU coinvolte."
  ],
  "steps": [
    [
      "1. The control unit fetches the next instruction and coordinates the operation.",
      "1. L'unità di controllo preleva l'istruzione successiva e coordina l'operazione."
    ],
    [
      "2. The instruction is decoded so the CPU knows which operation and data are required.",
      "2. L'istruzione viene decodificata affinché la CPU sappia quale operazione e quali dati servono."
    ],
    [
      "3. Registers hold the values 8 and 5 for immediate use.",
      "3. I registri contengono i valori 8 e 5 per l'uso immediato."
    ],
    [
      "4. The ALU adds them to produce 13, then performs the comparison with 10.",
      "4. L'ALU li somma ottenendo 13, poi esegue il confronto con 10."
    ]
  ],
  "answer": [
    "The control unit coordinates fetch and decode, registers hold values in immediate use, and the ALU performs arithmetic and logical operations. The cycle repeats for further instructions.",
    "L'unità di controllo coordina prelievo e decodifica, i registri contengono i valori necessari nell'immediato e l'ALU esegue operazioni aritmetiche e logiche. Il ciclo si ripete per le istruzioni successive."
  ]
},
                      "misconceptions": [
  {
    "belief": [
      "The control unit performs every calculation itself.",
      "L'unità di controllo esegue da sola tutti i calcoli."
    ],
    "correction": [
      "The control unit coordinates and directs operations. The ALU performs arithmetic and logical calculations.",
      "L'unità di controllo coordina e dirige le operazioni. L'ALU esegue i calcoli aritmetici e logici."
    ]
  }
],
                      "knowledgePrompts": [
                        [
                          "Explain The CPU and instruction cycle in your own words and give one practical example.",
                          "Spiega La CPU e il ciclo delle istruzioni con parole tue e fornisci un esempio pratico."
                        ]
                      ]
                },
                {
                      "id": "cores-and-clock-speed",
                      "title": [
                            "Cores and clock speed",
                            "Core e frequenza di clock"
                      ],
                      "explanation": [
                            "Clock speed describes the number of clock cycles per second, while cores are processing units within a CPU. Real performance also depends on architecture, workload and other factors.",
                            "La frequenza di clock indica il numero di cicli al secondo, mentre i core sono unità di elaborazione all'interno della CPU. Le prestazioni reali dipendono anche da architettura, carico di lavoro e altri fattori."
                      ],
                      "sceneIndexes": [
                            3
                      ],
                      "visualKey": "cores"
                ,
                      
                      "example": ["Video encoding may benefit from multiple cores, while a lightly threaded task may depend more on single-core performance.","La codifica video può beneficiare di più core, mentre un'attività con pochi thread può dipendere maggiormente dalle prestazioni di un singolo core."],
                      "workedExample": {
  "scenario": [
    "CPU A has 4 cores at 4.0 GHz; CPU B has 8 cores at 3.2 GHz. Can you decide which is faster from these numbers alone?",
    "La CPU A ha 4 core a 4,0 GHz; la CPU B ha 8 core a 3,2 GHz. Puoi decidere quale sia più veloce solo da questi numeri?"
  ],
  "steps": [
    [
      "1. GHz describes billions of clock cycles per second, not completed tasks per second.",
      "1. GHz indica miliardi di cicli di clock al secondo, non attività completate al secondo."
    ],
    [
      "2. Each core can execute instructions, allowing more work to run in parallel.",
      "2. Ogni core può eseguire istruzioni, consentendo più attività in parallelo."
    ],
    [
      "3. Software that uses many cores may benefit from CPU B; a lightly threaded task may not.",
      "3. Un software che usa molti core può beneficiare della CPU B; un'attività con pochi thread potrebbe non farlo."
    ],
    [
      "4. Check architecture, cache, power limits and relevant benchmarks before deciding.",
      "4. Controlla architettura, cache, limiti energetici e benchmark pertinenti prima di decidere."
    ]
  ],
  "answer": [
    "Neither GHz nor core count alone proves which CPU is faster. Performance depends on the workload and other design factors, so compare relevant benchmarks.",
    "Né i GHz né il numero di core, da soli, dimostrano quale CPU sia più veloce. Le prestazioni dipendono dal carico e da altri fattori: confronta benchmark pertinenti."
  ]
},
                      "misconceptions": [
  {
    "belief": [
      "A CPU with the highest GHz is always the fastest.",
      "Una CPU con più GHz è sempre la più veloce."
    ],
    "correction": [
      "Clock speed is only one factor. Core count, architecture, cache, thermal limits and software parallelism also affect performance.",
      "La frequenza è solo uno dei fattori. Anche numero di core, architettura, cache, limiti termici e parallelismo del software influenzano le prestazioni."
    ]
  }
],
                      "knowledgePrompts": [
                        [
                          "Explain Cores and clock speed in your own words and give one practical example.",
                          "Spiega Core e frequenza di clock con parole tue e fornisci un esempio pratico."
                        ]
                      ]
                }
          ]
    },
    "demon": [
      "Lag Oni",
      "Oni del Lag"
    ],
    "tech": [
      "Circuit Form · Second Technique: Fetch-Decode-Execute Strike",
      "Stile del Circuito · Seconda Tecnica: Colpo Fetch-Decode-Execute"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "board",
        "init": "board",
        "text": [
          "<p>The [[motherboard|scheda madre]] is the main circuit board. Every part plugs into it, and it connects them all so they can work as one team.</p><p>Tap the parts of the board to learn each one.</p>",
          "<p>La [[motherboard|scheda madre]] è il circuito principale. Ogni componente si collega a lei, ed è lei che li unisce perché lavorino come una squadra.</p><p>Tocca le parti della scheda per conoscerle.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "psu",
        "text": [
          "<p>The [[power supply unit|alimentatore]] (PSU) feeds the team. The wall socket gives alternating current (AC) at about 230 V in Italy; the parts need low-voltage direct current (DC). The PSU converts it.</p>",
          "<p>L'[[power supply unit|alimentatore]] (PSU) dà energia alla squadra. La presa di casa fornisce corrente alternata (AC) a circa 230 V; i componenti hanno bisogno di corrente continua (DC) a bassa tensione. L'alimentatore la converte.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "cpu",
        "text": [
          "<p>The [[CPU|CPU]] or [[microprocessor|microprocessore]] is the brain. It carries out the instructions of every program. Inside it:</p><p>[[Control Unit|unità di controllo]] (CU): reads each instruction, works out what it means, and directs the others.<br>[[ALU|ALU]]: does the maths (+ − × ÷) and comparisons.<br>[[Registers|registri]]: tiny, super-fast memory cells for the data in use right now.</p>",
          "<p>La [[CPU|CPU]], o [[microprocessor|microprocessore]], è il cervello. Esegue le istruzioni di ogni programma. Al suo interno:</p><p>[[Control Unit|unità di controllo]] (CU): legge ogni istruzione, capisce cosa significa e coordina le altre parti.<br>[[ALU|ALU]] (unità aritmetico-logica): fa i calcoli (+ − × ÷) e i confronti.<br>[[Registers|registri]]: piccolissime celle di memoria velocissime per i dati in uso in quel momento.</p>"
        ]
      },
      {
        "type": "fde"
      },
      {
        "who": "s",
        "vis": "cores",
        "text": [
          "<p>Two numbers describe a CPU's power: [[clock speed|frequenza di clock]], in GHz (billions of cycles per second), and the number of [[cores|core]]. More cores = more instructions running in parallel.</p><p>The CPU gets hot, so it sits under a [[heat sink|dissipatore]] and a [[fan|ventola]].</p>",
          "<p>Due numeri descrivono la potenza di una CPU: la [[clock speed|frequenza di clock]], in GHz (miliardi di cicli al secondo), e il numero di [[cores|core]]. Più core = più istruzioni eseguite in parallelo.</p><p>La CPU si scalda, quindi è coperta da un [[heat sink|dissipatore]] con una [[fan|ventola]].</p>"
        ]
      },
      {
        "type": "build"
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Grrrr… I am the Lag Oni. I make every program sloooow!</p>",
          "<p>Grrrr… Sono l'Oni del Lag. Rendo ogni programma leeeento!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "What is the motherboard's main job?",
          "Qual è il compito principale della scheda madre?"
        ],
        "a": [
          [
            "To connect all the components",
            "Collegare tutti i componenti"
          ],
          [
            "To store your files",
            "Conservare i tuoi file"
          ],
          [
            "To show images",
            "Mostrare le immagini"
          ],
          [
            "To cool the CPU",
            "Raffreddare la CPU"
          ]
        ],
        "why": [
          "Everything plugs into the motherboard.",
          "Tutto si collega alla scheda madre."
        ]
      },
      {
        "q": [
          "What does CPU stand for?",
          "Cosa significa CPU?"
        ],
        "a": [
          [
            "Central Processing Unit",
            "Central Processing Unit (unità centrale di elaborazione)"
          ],
          [
            "Computer Power Unit",
            "Computer Power Unit"
          ],
          [
            "Central Program Utility",
            "Central Program Utility"
          ],
          [
            "Core Printing Unit",
            "Core Printing Unit"
          ]
        ],
        "why": [
          "CPU = Central Processing Unit.",
          "CPU = Central Processing Unit, unità centrale di elaborazione."
        ]
      },
      {
        "q": [
          "Which part of the CPU does calculations and comparisons?",
          "Quale parte della CPU fa calcoli e confronti?"
        ],
        "a": [
          [
            "ALU",
            "ALU"
          ],
          [
            "Control Unit",
            "Unità di controllo"
          ],
          [
            "Clock",
            "Clock"
          ],
          [
            "Fan",
            "Ventola"
          ]
        ],
        "why": [
          "ALU = Arithmetic Logic Unit.",
          "ALU = unità aritmetico-logica."
        ]
      },
      {
        "q": [
          "What is the correct order of the CPU cycle?",
          "Qual è l'ordine corretto del ciclo della CPU?"
        ],
        "a": [
          [
            "Fetch → Decode → Execute",
            "Fetch → Decode → Execute (prelievo → decodifica → esecuzione)"
          ],
          [
            "Decode → Fetch → Execute",
            "Decode → Fetch → Execute"
          ],
          [
            "Execute → Fetch → Decode",
            "Execute → Fetch → Decode"
          ],
          [
            "Fetch → Execute → Decode",
            "Fetch → Execute → Decode"
          ]
        ],
        "why": [
          "Get the instruction, understand it, do it. Repeat.",
          "Prendi l'istruzione, capiscila, eseguila. Ripeti."
        ]
      },
      {
        "q": [
          "A CPU runs at 3 GHz. That means about…",
          "Una CPU va a 3 GHz. Significa circa…"
        ],
        "a": [
          [
            "3 billion cycles per second",
            "3 miliardi di cicli al secondo"
          ],
          [
            "3 programs at once",
            "3 programmi insieme"
          ],
          [
            "3 GB of memory",
            "3 GB di memoria"
          ],
          [
            "3 cores",
            "3 core"
          ]
        ],
        "why": [
          "Giga = billion; hertz = per second.",
          "Giga = miliardo; hertz = al secondo."
        ]
      },
      {
        "q": [
          "What does the power supply (PSU) do?",
          "Cosa fa l'alimentatore?"
        ],
        "a": [
          [
            "Converts AC from the wall into low-voltage DC",
            "Converte la corrente alternata della presa in continua a bassa tensione"
          ],
          [
            "Processes instructions",
            "Esegue le istruzioni"
          ],
          [
            "Draws graphics",
            "Disegna la grafica"
          ],
          [
            "Stores the BIOS",
            "Conserva il BIOS"
          ]
        ],
        "why": [
          "Components need DC at low voltages.",
          "I componenti hanno bisogno di corrente continua a bassa tensione."
        ]
      },
      {
        "q": [
          "Why does a CPU need a heat sink and fan?",
          "Perché la CPU ha bisogno di dissipatore e ventola?"
        ],
        "a": [
          [
            "To stop it overheating",
            "Per evitare che si surriscaldi"
          ],
          [
            "To make it lighter",
            "Per renderla più leggera"
          ],
          [
            "To store data",
            "Per salvare dati"
          ],
          [
            "To connect the monitor",
            "Per collegare il monitor"
          ]
        ],
        "why": [
          "Heat slows the CPU down or makes it shut off.",
          "Il calore rallenta la CPU o la fa spegnere."
        ]
      }
    ]
  },
  {
    "id": "a3m3",
    "arc": 2,
    "sec": "3.5–3.7",
    "pages": "56–63",
    "hue": 280,
    "horns": 2,
    "eyes": 3,
    "title": [
      "Memory Palace: RAM, Bus & Storage",
      "Il palazzo della memoria: RAM, bus e memoria di massa"
    ],
    "topic": [
      "RAM, ROM, cache, buses, mass storage",
      "RAM, ROM, cache, bus, memoria di massa"
    ],
    "learning": {
          "version": 1,
          "prerequisites": [
                [
                      "Know that the CPU needs fast access to instructions and data and that computers store files for later use.",
                      "Sapere che la CPU deve accedere rapidamente a istruzioni e dati e che i computer conservano i file per utilizzarli in seguito."
                ]
          ],
          "objectives": [
                {
                      "id": "ram-volatility",
                      "description": [
                            "Explain the role of RAM and why it is volatile.",
                            "Spiegare il ruolo della RAM e perché è volatile."
                      ]
                },
                {
                      "id": "memory-types",
                      "description": [
                            "Compare cache, RAM, ROM and mass storage by purpose, speed and persistence.",
                            "Confrontare cache, RAM, ROM e memoria di massa per funzione, velocità e permanenza dei dati."
                      ]
                },
                {
                      "id": "bus-types",
                      "description": [
                            "Distinguish data, address and control buses by the information each carries.",
                            "Distinguere bus dati, indirizzi e controllo in base alle informazioni che trasportano."
                      ]
                },
                {
                      "id": "storage-technologies",
                      "description": [
                            "Compare HDD, SSD, optical media and cloud storage at a basic level.",
                            "Confrontare a livello introduttivo HDD, SSD, supporti ottici e archiviazione cloud."
                      ]
                }
          ],
          "guidedPractice": [
  {
    "id": "guided-memory-buses",
    "title": [
      "Guided practice: memory and buses",
      "Esercitazione guidata: memoria e bus"
    ],
    "instructions": [
      "Work through each situation. Reveal a hint if needed, then choose the best answer.",
      "Affronta ogni situazione. Se necessario, mostra un suggerimento, poi scegli la risposta migliore."
    ],
    "sceneIndex": 0,
    "hints": [
      [
        "Volatile memory needs power. Ask where the file was saved, not just where it was being edited.",
        "La memoria volatile ha bisogno di alimentazione. Chiediti dove era stato salvato il file, non solo dove veniva modificato."
      ],
      [
        "Use the three questions: where? what? how/when?",
        "Usa le tre domande: dove? cosa? come/quando?"
      ]
    ],
    "questions": [
      {
        "q": [
          "A power cut happens before a document is saved. Which copy is most likely to be lost?",
          "Manca la corrente prima che un documento venga salvato. Quale copia rischia maggiormente di andare persa?"
        ],
        "a": [
          [
            "The unsaved working data in RAM",
            "I dati di lavoro non salvati nella RAM"
          ],
          [
            "The saved copy on an SSD",
            "La copia salvata su un SSD"
          ],
          [
            "Firmware stored in non-volatile memory",
            "Il firmware conservato in memoria non volatile"
          ]
        ],
        "why": [
          "RAM is volatile. A saved SSD copy and non-volatile firmware normally remain without power.",
          "La RAM è volatile. Una copia salvata su SSD e il firmware in memoria non volatile normalmente restano anche senza alimentazione."
        ]
      },
      {
        "q": [
          "Which bus identifies the memory location the CPU wants to read?",
          "Quale bus identifica la posizione di memoria che la CPU vuole leggere?"
        ],
        "a": [
          [
            "The address bus",
            "Il bus indirizzi"
          ],
          [
            "The data bus",
            "Il bus dati"
          ],
          [
            "The control bus",
            "Il bus di controllo"
          ]
        ],
        "why": [
          "The address bus identifies the location; the data bus carries the value and control signals coordinate the operation.",
          "Il bus indirizzi identifica la posizione; il bus dati trasporta il valore e i segnali di controllo coordinano l'operazione."
        ]
      }
    ]
  }
],
          "independentPractice": [
  {
    "id": "independent-memory-buses",
    "title": [
      "Independent challenge: memory and storage",
      "Sfida autonoma: memoria e archiviazione"
    ],
    "instructions": [
      "Choose the best solution for each memory and storage situation. Work independently, then read the feedback.",
      "Scegli la soluzione migliore per ogni situazione relativa a memoria e archiviazione. Lavora in autonomia, poi leggi il feedback."
    ],
    "sceneIndex": 0,
    "questions": [
      {
        "q": [
          "A laptop needs to keep a saved file when the battery is removed. Where should the file be stored?",
          "Un portatile deve conservare un file salvato quando la batteria viene rimossa. Dove va memorizzato il file?"
        ],
        "a": [
          [
            "On an SSD",
            "Su un SSD"
          ],
          [
            "Only in RAM",
            "Solo nella RAM"
          ],
          [
            "Only in CPU cache",
            "Solo nella cache della CPU"
          ]
        ],
        "why": [
          "An SSD is non-volatile storage and retains saved data without power. RAM and cache are volatile.",
          "Un SSD è una memoria non volatile e conserva i dati senza alimentazione. RAM e cache sono volatili."
        ]
      },
      {
        "q": [
          "The CPU repeatedly uses the same small set of data. Which memory is designed to provide very fast access close to the CPU?",
          "La CPU utilizza ripetutamente lo stesso piccolo insieme di dati. Quale memoria è progettata per offrire un accesso molto rapido vicino alla CPU?"
        ],
        "a": [
          [
            "Cache",
            "Cache"
          ],
          [
            "Optical disc",
            "Disco ottico"
          ],
          [
            "USB flash drive",
            "Chiavetta USB"
          ]
        ],
        "why": [
          "CPU cache keeps frequently used data and instructions close to the processor to reduce access time.",
          "La cache della CPU mantiene dati e istruzioni usati frequentemente vicino al processore per ridurre i tempi di accesso."
        ]
      },
      {
        "q": [
          "A device wants to send the value 42 from memory to the CPU. Which bus carries the actual value?",
          "Un dispositivo vuole inviare il valore 42 dalla memoria alla CPU. Quale bus trasporta il valore effettivo?"
        ],
        "a": [
          [
            "Data bus",
            "Bus dei dati"
          ],
          [
            "Address bus",
            "Bus degli indirizzi"
          ],
          [
            "Control bus",
            "Bus di controllo"
          ]
        ],
        "why": [
          "The data bus carries the actual data. Address and control buses carry location and coordination signals.",
          "Il bus dei dati trasporta i dati effettivi. I bus degli indirizzi e di controllo trasportano segnali di posizione e coordinamento."
        ]
      }
    ]
  }
],
          "knowledgeCheck": [
            {
              "q": [
                "Why is RAM volatile?",
                "Perché la RAM è volatile?"
              ],
              "a": [
                [
                  "It loses data without power",
                  "Perde i dati senza alimentazione"
                ],
                [
                  "It stores files permanently",
                  "Conserva i file in modo permanente"
                ],
                [
                  "It is an optical disc",
                  "È un disco ottico"
                ]
              ],
              "why": [
                "RAM needs power to retain data.",
                "La RAM richiede alimentazione per conservare i dati."
              ]
            },
            {
              "q": [
                "Which memory is fastest and closest to CPU?",
                "Quale memoria è più veloce e vicina alla CPU?"
              ],
              "a": [
                [
                  "Cache",
                  "Cache"
                ],
                [
                  "SSD",
                  "SSD"
                ],
                [
                  "DVD",
                  "DVD"
                ]
              ],
              "why": [
                "Cache provides very fast access.",
                "La cache offre accesso molto rapido."
              ]
            },
            {
              "q": [
                "Which bus carries a memory location?",
                "Quale bus trasporta un indirizzo di memoria?"
              ],
              "a": [
                [
                  "Address bus",
                  "Bus degli indirizzi"
                ],
                [
                  "Data bus",
                  "Bus dati"
                ],
                [
                  "Control bus",
                  "Bus di controllo"
                ]
              ],
              "why": [
                "The address bus identifies a location.",
                "Il bus degli indirizzi identifica una posizione."
              ]
            },
            {
              "q": [
                "Which drive has no moving parts?",
                "Quale unità non ha parti in movimento?"
              ],
              "a": [
                [
                  "SSD",
                  "SSD"
                ],
                [
                  "HDD",
                  "HDD"
                ],
                [
                  "DVD drive",
                  "Lettore DVD"
                ]
              ],
              "why": [
                "An SSD uses flash memory.",
                "Un SSD usa memoria flash."
              ]
            }
          ],
          "masteryAssessment": {
            "title": [
              "Memory & storage mastery",
              "Padronanza di memoria e archiviazione"
            ],
            "instructions": [
              "Answer all five questions independently. You need at least 80% to unlock the battle.",
              "Rispondi autonomamente a tutte e cinque le domande. Serve almeno l'80% per sbloccare la battaglia."
            ],
            "passingScore": 80,
            "questionConceptIds": ["ram", "cache-and-rom", "mass-storage", "system-buses", "mass-storage"],
            "questions": [
              {
                "q": [
                  "What happens to the contents of ordinary RAM when the computer is switched off?",
                  "Che cosa succede ai contenuti della normale RAM quando il computer viene spento?"
                ],
                "a": [
                  [
                    "They are lost because RAM is volatile",
                    "Vengono persi perché la RAM è volatile"
                  ],
                  [
                    "They are copied automatically to the monitor",
                    "Vengono copiati automaticamente sul monitor"
                  ],
                  [
                    "They remain permanently in RAM",
                    "Rimangono permanentemente nella RAM"
                  ],
                  [
                    "They are converted into CPU instructions",
                    "Vengono convertiti in istruzioni della CPU"
                  ]
                ],
                "why": [
                  "Ordinary RAM needs power to retain its contents, so it is volatile.",
                  "La normale RAM ha bisogno di alimentazione per mantenere i contenuti, quindi è volatile."
                ]
              },
              {
                "q": [
                  "Why is CPU cache generally faster than main memory?",
                  "Perché la cache della CPU è generalmente più veloce della memoria principale?"
                ],
                "a": [
                  [
                    "It is very close to the CPU and built for fast access",
                    "È molto vicina alla CPU ed è progettata per accessi rapidi"
                  ],
                  [
                    "It stores data on spinning magnetic disks",
                    "Memorizza i dati su dischi magnetici rotanti"
                  ],
                  [
                    "It is connected through the internet",
                    "È collegata tramite Internet"
                  ],
                  [
                    "It has a larger capacity than an SSD",
                    "Ha una capacità maggiore di un SSD"
                  ]
                ],
                "why": [
                  "Cache is a small, fast memory located on or near the processor.",
                  "La cache è una memoria piccola e veloce situata sul processore o vicino ad esso."
                ]
              },
              {
                "q": [
                  "How does a typical SSD store data?",
                  "Come memorizza i dati un normale SSD?"
                ],
                "a": [
                  [
                    "In flash memory chips with no moving parts",
                    "In chip di memoria flash senza parti mobili"
                  ],
                  [
                    "Magnetically on spinning platters",
                    "Magneticamente su piatti rotanti"
                  ],
                  [
                    "Optically on a laser-read disc",
                    "Otticamente su un disco letto da un laser"
                  ],
                  [
                    "Temporarily inside the CPU registers only",
                    "Temporaneamente solo nei registri della CPU"
                  ]
                ],
                "why": [
                  "SSDs use flash memory, unlike HDDs with moving magnetic platters.",
                  "Gli SSD usano memoria flash, a differenza degli HDD con piatti magnetici mobili."
                ]
              },
              {
                "q": [
                  "Which bus carries the address of the memory location to access?",
                  "Quale bus trasporta l'indirizzo della posizione di memoria da raggiungere?"
                ],
                "a": [
                  [
                    "Address bus",
                    "Bus degli indirizzi"
                  ],
                  [
                    "Data bus",
                    "Bus dei dati"
                  ],
                  [
                    "Control bus",
                    "Bus di controllo"
                  ],
                  [
                    "Power bus",
                    "Bus di alimentazione"
                  ]
                ],
                "why": [
                  "The address bus identifies the memory location for a read or write operation.",
                  "Il bus degli indirizzi identifica la posizione di memoria per un'operazione di lettura o scrittura."
                ]
              },
              {
                "q": [
                  "How does a traditional hard disk drive (HDD) store data?",
                  "Come memorizza i dati un tradizionale disco rigido (HDD)?"
                ],
                "a": [
                  [
                    "Magnetically on rotating platters",
                    "Magneticamente su piatti rotanti"
                  ],
                  [
                    "In flash memory cells",
                    "In celle di memoria flash"
                  ],
                  [
                    "As light pulses in fibre-optic cable",
                    "Come impulsi luminosi in un cavo in fibra ottica"
                  ],
                  [
                    "Only in volatile CPU cache",
                    "Solo nella cache volatile della CPU"
                  ]
                ],
                "why": [
                  "An HDD uses magnetic surfaces on spinning platters and moving read/write heads.",
                  "Un HDD usa superfici magnetiche su piatti rotanti e testine di lettura/scrittura mobili."
                ]
              }
            ]
          },
          "concepts": [
                {
                      "id": "ram",
                      "title": [
                            "RAM and volatility",
                            "RAM e volatilità"
                      ],
                      "explanation": [
                            "RAM temporarily holds programs and data currently in use. It is volatile, so its contents are lost when power is removed.",
                            "La RAM conserva temporaneamente programmi e dati in uso. È volatile: il suo contenuto si perde quando viene tolta l'alimentazione."
                      ],
                      "sceneIndexes": [
                            0,
                            1
                      ],
                      "visualKey": "ramstick"
                ,
                      
                      "example": ["A document you are editing is held in working memory; saving it writes a persistent copy to an SSD or HDD.","Un documento che stai modificando è nella memoria di lavoro; salvarlo crea una copia persistente su SSD o HDD."],
                      "workedExample": {
  "scenario": [
    "You edit a presentation, leave it unsaved, and the computer suddenly loses power. What happens to the working copy?",
    "Modifichi una presentazione senza salvarla e il computer perde improvvisamente alimentazione. Cosa accade alla copia di lavoro?"
  ],
  "steps": [
    [
      "1. While editing, the open program and current presentation data are held in RAM.",
      "1. Durante la modifica, il programma aperto e i dati correnti della presentazione sono nella RAM."
    ],
    [
      "2. RAM is volatile memory and needs power to retain its contents.",
      "2. La RAM è una memoria volatile e ha bisogno di alimentazione per conservare il contenuto."
    ],
    [
      "3. When power is lost, unsaved data in RAM is lost.",
      "3. Quando manca l'alimentazione, i dati non salvati nella RAM si perdono."
    ],
    [
      "4. Saving writes a persistent copy to an SSD or HDD.",
      "4. Salvare scrive una copia permanente su SSD o HDD."
    ]
  ],
  "answer": [
    "The unsaved working copy in RAM is lost when power is removed. A saved copy on non-volatile storage remains.",
    "La copia di lavoro non salvata nella RAM si perde quando viene tolta l'alimentazione. Una copia salvata su memoria non volatile rimane disponibile."
  ]
},
                      "misconceptions": [
  {
    "belief": [
      "RAM keeps my files permanently even when the computer is unplugged.",
      "La RAM conserva i miei file in modo permanente anche quando il computer è scollegato."
    ],
    "correction": [
      "RAM is temporary and volatile. Use persistent storage such as an SSD or HDD to keep files when power is off.",
      "La RAM è temporanea e volatile. Per conservare i file a computer spento usa una memoria persistente come SSD o HDD."
    ]
  }
],
                      "knowledgePrompts": [
                        [
                          "Explain RAM and volatility in your own words and give one practical example.",
                          "Spiega RAM e volatilità con parole tue e fornisci un esempio pratico."
                        ]
                      ]
                },
                {
                      "id": "cache-and-rom",
                      "title": [
                            "Cache and ROM",
                            "Cache e ROM"
                      ],
                      "explanation": [
                            "Cache is small, very fast memory that keeps frequently needed data close to the CPU. ROM is non-volatile memory used to retain essential firmware.",
                            "La cache è una memoria piccola e molto veloce che conserva dati usati frequentemente vicino alla CPU. La ROM è una memoria non volatile usata per conservare firmware essenziale."
                      ],
                      "sceneIndexes": [
                            2
                      ],
                      "visualKey": "pyramid"
                ,
                      
                      "example": ["A CPU may find recently used data in cache; firmware stored in non-volatile memory helps a computer start.","La CPU può trovare nella cache dati usati di recente; il firmware conservato in memoria non volatile aiuta il computer ad avviarsi."],
                      "workedExample": {
  "scenario": [
    "A computer starts up and then repeatedly accesses the same instructions while running an application. Explain the roles of cache and ROM.",
    "Un computer si avvia e poi accede ripetutamente alle stesse istruzioni durante un'applicazione. Spiega i ruoli di cache e ROM."
  ],
  "steps": [
    [
      "1. Firmware in non-volatile memory helps initialise the computer during startup.",
      "1. Il firmware in memoria non volatile aiuta a inizializzare il computer durante l'avvio."
    ],
    [
      "2. While programs run, the CPU may need some data and instructions repeatedly.",
      "2. Durante l'esecuzione dei programmi, la CPU può aver bisogno più volte di alcuni dati e istruzioni."
    ],
    [
      "3. Cache keeps frequently needed information close to the CPU for faster access.",
      "3. La cache conserva le informazioni usate spesso vicino alla CPU per accedervi più rapidamente."
    ],
    [
      "4. Cache speeds access; ROM/firmware retains essential information without normal power.",
      "4. La cache velocizza l'accesso; la ROM/firmware conserva informazioni essenziali anche senza alimentazione normale."
    ]
  ],
  "answer": [
    "Cache is small, fast memory that reduces access time for frequently used data. ROM is non-volatile memory used to retain firmware or essential instructions.",
    "La cache è una memoria piccola e veloce che riduce il tempo di accesso ai dati frequenti. La ROM è una memoria non volatile usata per conservare firmware o istruzioni essenziali."
  ]
},
                      "misconceptions": [
  {
    "belief": [
      "Cache and ROM are both just extra RAM used for open apps.",
      "Cache e ROM sono entrambe semplicemente RAM aggiuntiva per le app aperte."
    ],
    "correction": [
      "Cache helps the CPU access frequently used data quickly, while ROM retains non-volatile firmware or essential instructions.",
      "La cache aiuta la CPU ad accedere rapidamente ai dati frequenti, mentre la ROM conserva firmware o istruzioni essenziali in modo non volatile."
    ]
  }
],
                      "knowledgePrompts": [
                        [
                          "Explain Cache and ROM in your own words and give one practical example.",
                          "Spiega Cache e ROM con parole tue e fornisci un esempio pratico."
                        ]
                      ]
                },
                {
                      "id": "system-buses",
                      "title": [
                            "System buses",
                            "I bus di sistema"
                      ],
                      "explanation": [
                            "The data bus carries data, the address bus identifies a location, and the control bus carries signals that coordinate operations.",
                            "Il bus dati trasporta i dati, il bus indirizzi identifica una posizione e il bus di controllo trasporta segnali che coordinano le operazioni."
                      ],
                      "sceneIndexes": [
                            3
                      ],
                      "visualKey": "buses"
                ,
                      
                      "example": ["When reading memory, the address bus identifies the location, control signals request a read, and the data bus carries the value back.","Durante una lettura della memoria, il bus indirizzi identifica la posizione, i segnali di controllo richiedono la lettura e il bus dati riporta il valore."],
                      "workedExample": {
  "scenario": [
    "The CPU needs to read a value from a particular memory location. Explain how the three system buses help.",
    "La CPU deve leggere un valore da una specifica posizione di memoria. Spiega come aiutano i tre bus di sistema."
  ],
  "steps": [
    [
      "1. The address bus carries the location the CPU wants to access.",
      "1. Il bus indirizzi trasporta la posizione a cui la CPU vuole accedere."
    ],
    [
      "2. The control bus carries signals such as read, write and timing to coordinate the operation.",
      "2. Il bus di controllo trasporta segnali come lettura, scrittura e temporizzazione per coordinare l'operazione."
    ],
    [
      "3. The data bus carries the value transferred between memory and the CPU.",
      "3. Il bus dati trasporta il valore trasferito tra memoria e CPU."
    ],
    [
      "4. Remember: where (address), what (data), and how/when (control).",
      "4. Ricorda: dove (indirizzo), cosa (dati) e come/quando (controllo)."
    ]
  ],
  "answer": [
    "The address bus identifies the location, the control bus coordinates the read operation, and the data bus carries the value returned from memory.",
    "Il bus indirizzi identifica la posizione, il bus di controllo coordina la lettura e il bus dati trasporta il valore restituito dalla memoria."
  ]
},
                      "misconceptions": [
  {
    "belief": [
      "The address bus carries the actual file contents.",
      "Il bus indirizzi trasporta il contenuto effettivo del file."
    ],
    "correction": [
      "The address bus identifies a location. The data bus carries the information stored there; control signals coordinate the transfer.",
      "Il bus indirizzi identifica una posizione. Il bus dati trasporta le informazioni conservate lì; i segnali di controllo coordinano il trasferimento."
    ]
  }
],
                      "knowledgePrompts": [
                        [
                          "Explain System buses in your own words and give one practical example.",
                          "Spiega I bus di sistema con parole tue e fornisci un esempio pratico."
                        ]
                      ]
                },
                {
                      "id": "mass-storage",
                      "title": [
                            "Mass storage",
                            "Memoria di massa"
                      ],
                      "explanation": [
                            "Mass storage keeps files and programs when power is off. HDDs use magnetic disks, SSDs use flash memory, optical media use lasers, and cloud storage keeps data on remote systems.",
                            "La memoria di massa conserva file e programmi anche a computer spento. Gli HDD usano dischi magnetici, gli SSD memoria flash, i supporti ottici usano laser e il cloud conserva i dati su sistemi remoti."
                      ],
                      "sceneIndexes": [
                            4,
                            5
                      ],
                      "visualKey": "hdd"
                ,
                      
                      "example": ["An SSD keeps your photos after shutdown; an HDD can also retain them using magnetic platters.","Un SSD conserva le foto dopo lo spegnimento; anche un HDD può conservarle usando piatti magnetici."],
                      "workedExample": {
  "scenario": [
    "You need to keep a 2 GB video after shutting down the computer and share it with a classmate. Compare storage choices.",
    "Devi conservare un video da 2 GB dopo aver spento il computer e condividerlo con un compagno. Confronta le opzioni di archiviazione."
  ],
  "steps": [
    [
      "1. Rule out RAM: it is temporary working memory, not long-term storage.",
      "1. Escludi la RAM: è memoria di lavoro temporanea, non archiviazione a lungo termine."
    ],
    [
      "2. An SSD stores data in flash memory and offers fast access with no moving parts.",
      "2. Un SSD conserva dati in memoria flash e offre accesso rapido senza parti mobili."
    ],
    [
      "3. An HDD stores data magnetically on spinning disks and may offer lower cost per GB.",
      "3. Un HDD conserva dati magneticamente su dischi rotanti e può costare meno per GB."
    ],
    [
      "4. Cloud storage keeps a copy on remote servers and enables network sharing; consider connection and privacy.",
      "4. Il cloud conserva una copia su server remoti e permette la condivisione in rete; considera connessione e privacy."
    ]
  ],
  "answer": [
    "An SSD or HDD can keep the video when power is off. Cloud storage can make it accessible to a classmate online; the best choice depends on speed, capacity, cost and sharing needs.",
    "Un SSD o HDD può conservare il video a computer spento. Il cloud può renderlo accessibile a un compagno online; la scelta dipende da velocità, capacità, costo e necessità di condivisione."
  ]
},
                      "misconceptions": [
  {
    "belief": [
      "Cloud storage means the file is stored inside the laptop's RAM.",
      "Il cloud significa che il file è conservato nella RAM del portatile."
    ],
    "correction": [
      "Cloud storage keeps data on remote computers accessed through a network. It is different from local RAM and disk storage.",
      "Il cloud conserva i dati su computer remoti accessibili tramite rete. È diverso dalla RAM locale e dall'archiviazione su disco locale."
    ]
  }
],
                      "knowledgePrompts": [
                        [
                          "Explain Mass storage in your own words and give one practical example.",
                          "Spiega Memoria di massa con parole tue e fornisci un esempio pratico."
                        ]
                      ]
                }
          ]
    },
    "demon": [
      "Amnesia Wraith",
      "Spettro dell'Amnesia"
    ],
    "tech": [
      "Circuit Form · Third Technique: Cache Flash Step",
      "Stile del Circuito · Terza Tecnica: Passo Lampo della Cache"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "ramstick",
        "text": [
          "<p>[[RAM|RAM]] (Random Access Memory) is the CPU's workbench. Every program and file you have <b>open right now</b> is copied into RAM, because it is much faster than storage. More RAM = more things open without slowing down.</p>",
          "<p>La [[RAM|RAM]] (Random Access Memory) è il banco di lavoro della CPU. Ogni programma e file <b>aperto in questo momento</b> viene copiato in RAM, perché è molto più veloce della memoria di massa. Più RAM = più cose aperte senza rallentare.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "powercut",
        "init": "powercut",
        "needDone": true,
        "text": [
          "<p>RAM's weakness: it is [[volatile|volatile]]. It <b>forgets everything when the power goes off</b>. Mass storage is [[non-volatile|non volatile]]: it keeps data with no power.</p><p>Try it: cut the power, then turn it back on.</p>",
          "<p>Il punto debole della RAM: è [[volatile|volatile]]. <b>Dimentica tutto quando manca la corrente</b>. La memoria di massa è [[non-volatile|non volatile]]: conserva i dati anche senza corrente.</p><p>Prova: togli la corrente, poi riaccendi.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "pyramid",
        "text": [
          "<p>[[Cache|cache]] is a small, very fast memory on the CPU chip that keeps copies of data used often.</p><p>[[ROM|ROM]] (Read-Only Memory) is non-volatile and holds the firmware (BIOS/UEFI) that starts the computer. In modern PCs it is usually a flash chip that can be updated.</p>",
          "<p>La [[Cache|cache]] è una memoria piccola e velocissima sul chip della CPU, che tiene copie dei dati usati spesso.</p><p>La [[ROM|ROM]] (Read-Only Memory, memoria di sola lettura) è non volatile e contiene il firmware (BIOS/UEFI) che avvia il computer. Nei PC moderni di solito è un chip flash aggiornabile.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "buses",
        "text": [
          "<p>The [[bus|bus]] is the set of connections that moves data between CPU, memory and devices. There are three kinds:</p><p>[[data bus|bus dati]]: carries the data. [[address bus|bus indirizzi]]: says <i>where</i> in memory. [[control bus|bus di controllo]]: says <i>what</i> to do (read or write). A wider bus (e.g. 64 bits) moves more data at once.</p>",
          "<p>Il [[bus|bus]] è l'insieme dei collegamenti che trasferisce i dati tra CPU, memoria e periferiche. Ne esistono tre tipi:</p><p>[[data bus|bus dati]]: trasporta i dati. [[address bus|bus indirizzi]]: indica <i>dove</i> in memoria. [[control bus|bus di controllo]]: indica <i>cosa</i> fare (leggere o scrivere). Un bus più largo (es. 64 bit) trasporta più dati alla volta.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "hdd",
        "text": [
          "<p>[[Mass storage|memoria di massa]] keeps files, apps and the operating system when the computer is off.</p><p>[[HDD|disco rigido]]: data stored <b>magnetically</b> on spinning platters, read by a moving head. Big and cheap, but slower.<br>[[SSD|SSD]]: <b>flash memory</b> chips, no moving parts. Faster, quieter, tougher.</p>",
          "<p>La [[Mass storage|memoria di massa]] conserva file, app e sistema operativo quando il computer è spento.</p><p>[[HDD|disco rigido]] (HDD): dati salvati in modo <b>magnetico</b> su piatti rotanti, letti da una testina mobile. Capiente ed economico, ma più lento.<br>[[SSD|SSD]]: chip di <b>memoria flash</b>, nessuna parte mobile. Più veloce, silenzioso e resistente.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "optcloud",
        "text": [
          "<p>[[Optical discs|dischi ottici]] (CD, DVD, Blu-ray) are read by a <b>laser</b>. [[Cloud storage|archiviazione cloud]] keeps your files on remote servers you reach over the internet.</p>",
          "<p>I [[Optical discs|dischi ottici]] (CD, DVD, Blu-ray) si leggono con un <b>laser</b>. L'[[Cloud storage|archiviazione cloud]] tiene i tuoi file su server remoti raggiungibili via internet.</p>"
        ]
      },
      {
        "type": "sort",
        "title": [
          "Volatile or non-volatile?",
          "Volatile o non volatile?"
        ],
        "cats": [
          [
            "Volatile",
            "Volatile"
          ],
          [
            "Non-volatile",
            "Non volatile"
          ]
        ],
        "items": [
          {
            "n": [
              "RAM",
              "RAM"
            ],
            "i": "ram",
            "c": 0,
            "why": [
              "RAM forgets everything without power.",
              "La RAM dimentica tutto senza corrente."
            ]
          },
          {
            "n": [
              "SSD",
              "SSD"
            ],
            "i": "ssd",
            "c": 1,
            "why": [
              "An SSD keeps files with no power.",
              "L'SSD conserva i file senza corrente."
            ]
          },
          {
            "n": [
              "ROM (firmware chip)",
              "ROM (chip del firmware)"
            ],
            "i": "chip",
            "c": 1,
            "why": [
              "ROM keeps the start-up firmware.",
              "La ROM conserva il firmware di avvio."
            ]
          },
          {
            "n": [
              "Cache",
              "Cache"
            ],
            "i": "chip",
            "c": 0,
            "why": [
              "Cache is very fast RAM: volatile.",
              "La cache è RAM velocissima: volatile."
            ]
          },
          {
            "n": [
              "Hard disk (HDD)",
              "Hard disk (HDD)"
            ],
            "i": "hdd",
            "c": 1,
            "why": [
              "Magnetic storage keeps data.",
              "La memoria magnetica conserva i dati."
            ]
          },
          {
            "n": [
              "USB flash drive",
              "Chiavetta USB"
            ],
            "i": "usb",
            "c": 1,
            "why": [
              "Flash memory keeps data.",
              "La memoria flash conserva i dati."
            ]
          },
          {
            "n": [
              "CPU registers",
              "Registri della CPU"
            ],
            "i": "chip",
            "c": 0,
            "why": [
              "Registers only work while powered.",
              "I registri funzionano solo con la corrente."
            ]
          },
          {
            "n": [
              "DVD",
              "DVD"
            ],
            "i": "disc",
            "c": 1,
            "why": [
              "Optical discs keep data with no power.",
              "I dischi ottici conservano i dati senza corrente."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Whoooo… I am the Amnesia Wraith. I'll pull the plug and your unsaved work will vanish!</p>",
          "<p>Uuuuh… Sono lo Spettro dell'Amnesia. Staccherò la spina e il tuo lavoro non salvato sparirà!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "What does \"volatile\" mean?",
          "Cosa significa \"volatile\"?"
        ],
        "a": [
          [
            "It loses its data when the power is off",
            "Perde i dati quando manca la corrente"
          ],
          [
            "It is very fast",
            "È molto veloce"
          ],
          [
            "It can never change",
            "Non può mai cambiare"
          ],
          [
            "It is online",
            "È online"
          ]
        ],
        "why": [
          "RAM is volatile.",
          "La RAM è volatile."
        ]
      },
      {
        "q": [
          "The power cuts out and your unsaved essay is gone. Why?",
          "Va via la corrente e il tema non salvato sparisce. Perché?"
        ],
        "a": [
          [
            "It was only in RAM",
            "Era solo in RAM"
          ],
          [
            "The CPU deleted it",
            "L'ha cancellato la CPU"
          ],
          [
            "The monitor was off",
            "Il monitor era spento"
          ],
          [
            "The ROM erased it",
            "L'ha cancellato la ROM"
          ]
        ],
        "why": [
          "Save to mass storage to keep your work.",
          "Salva sulla memoria di massa per conservare il lavoro."
        ]
      },
      {
        "q": [
          "What does ROM usually contain?",
          "Cosa contiene di solito la ROM?"
        ],
        "a": [
          [
            "The start-up firmware (BIOS/UEFI)",
            "Il firmware di avvio (BIOS/UEFI)"
          ],
          [
            "Your photos",
            "Le tue foto"
          ],
          [
            "Open browser tabs",
            "Le schede del browser aperte"
          ],
          [
            "The internet",
            "Internet"
          ]
        ],
        "why": [
          "Firmware starts the computer.",
          "Il firmware avvia il computer."
        ]
      },
      {
        "q": [
          "Which list goes from FASTEST to SLOWEST?",
          "Quale elenco va dal PIÙ VELOCE al PIÙ LENTO?"
        ],
        "a": [
          [
            "Registers → Cache → RAM → Mass storage",
            "Registri → Cache → RAM → Memoria di massa"
          ],
          [
            "Mass storage → RAM → Cache → Registers",
            "Memoria di massa → RAM → Cache → Registri"
          ],
          [
            "RAM → Registers → Storage → Cache",
            "RAM → Registri → Memoria di massa → Cache"
          ],
          [
            "Cache → Storage → RAM → Registers",
            "Cache → Memoria di massa → RAM → Registri"
          ]
        ],
        "why": [
          "Closer to the CPU = faster and smaller.",
          "Più vicino alla CPU = più veloce e più piccolo."
        ]
      },
      {
        "q": [
          "Which bus says WHERE in memory to read or write?",
          "Quale bus indica DOVE leggere o scrivere in memoria?"
        ],
        "a": [
          [
            "Address bus",
            "Bus indirizzi"
          ],
          [
            "Data bus",
            "Bus dati"
          ],
          [
            "Control bus",
            "Bus di controllo"
          ],
          [
            "School bus",
            "Scuolabus"
          ]
        ],
        "why": [
          "The address bus carries memory addresses.",
          "Il bus indirizzi trasporta gli indirizzi di memoria."
        ]
      },
      {
        "q": [
          "How does a hard disk (HDD) store data?",
          "Come salva i dati un hard disk (HDD)?"
        ],
        "a": [
          [
            "Magnetically on spinning platters",
            "In modo magnetico su piatti rotanti"
          ],
          [
            "With a laser",
            "Con un laser"
          ],
          [
            "In flash chips",
            "In chip flash"
          ],
          [
            "On remote servers",
            "Su server remoti"
          ]
        ],
        "why": [
          "A head reads magnetic tracks on the platters.",
          "Una testina legge le tracce magnetiche sui piatti."
        ]
      },
      {
        "q": [
          "Why is an SSD faster than an HDD?",
          "Perché un SSD è più veloce di un HDD?"
        ],
        "a": [
          [
            "It has no moving parts",
            "Non ha parti mobili"
          ],
          [
            "It spins faster",
            "Gira più veloce"
          ],
          [
            "It is bigger",
            "È più grande"
          ],
          [
            "It uses a laser",
            "Usa un laser"
          ]
        ],
        "why": [
          "No waiting for platters to spin or heads to move.",
          "Non deve aspettare che i piatti girino o la testina si sposti."
        ]
      }
    ]
  },
  {
    "id": "a3m4",
    "arc": 2,
    "sec": "3.8–3.9 + CLIL",
    "pages": "64–71",
    "hue": 320,
    "horns": 3,
    "eyes": 4,
    "title": [
      "Signals: Peripherals & Touchscreens",
      "Segnali: periferiche e touchscreen"
    ],
    "topic": [
      "Input/output devices, touchscreens, e-waste, Moore's law",
      "Periferiche di input e output, touchscreen, RAEE, legge di Moore"
    ],
    "learning": {
          "version": 1,
          "prerequisites": [
                [
                      "Understand input and output in the computer cycle and know that a computer communicates with its environment through devices.",
                      "Comprendere input e output nel ciclo del computer e sapere che il computer comunica con l'ambiente tramite dispositivi."
                ]
          ],
          "objectives": [
                {
                      "id": "classify-peripherals",
                      "description": [
                            "Classify common peripherals as input, output or both and justify each choice.",
                            "Classificare le periferiche comuni come input, output o entrambe e motivare la scelta."
                      ]
                },
                {
                      "id": "embedded-systems",
                      "description": [
                            "Identify how sensors provide input and actuators produce output in an interactive system.",
                            "Identificare come i sensori forniscono input e gli attuatori producono output in un sistema interattivo."
                      ]
                },
                {
                      "id": "capacitive-touchscreens",
                      "description": [
                            "Explain at a basic level how a capacitive touchscreen detects a touch.",
                            "Spiegare a livello introduttivo come un touchscreen capacitivo rileva il tocco."
                      ]
                },
                {
                      "id": "responsible-technology",
                      "description": [
                            "Describe responsible e-waste disposal and the basic idea behind Moore's law.",
                            "Descrivere il corretto smaltimento dei RAEE e il concetto di base della legge di Moore."
                      ]
                },
                {
                      "id": "graphics-processing",
                      "description": [
                            "Explain how a graphics processing unit accelerates graphics and image processing.",
                            "Spiegare come un'unità di elaborazione grafica accelera l'elaborazione di grafica e immagini."
                      ]
                }
          ],
          "guidedPractice": [
  {
    "id": "guided-peripherals-touch",
    "title": [
      "Guided practice: peripherals and touchscreens",
      "Esercitazione guidata: periferiche e touchscreen"
    ],
    "instructions": [
      "Classify each device by the direction of information. Use a hint if you need help.",
      "Classifica ogni dispositivo in base alla direzione delle informazioni. Usa un suggerimento se hai bisogno di aiuto."
    ],
    "sceneIndex": 0,
    "hints": [
      [
        "A microphone sends sound into the computer; headphones send sound out.",
        "Un microfono invia audio al computer; le cuffie inviano audio verso l'esterno."
      ],
      [
        "A capacitive screen detects a change in an electrical property, not simply pressure.",
        "Uno schermo capacitivo rileva una variazione elettrica, non semplicemente la pressione."
      ]
    ],
    "questions": [
      {
        "q": [
          "A headset has headphones and a microphone. How should it be classified?",
          "Una cuffia ha auricolari e microfono. Come dovrebbe essere classificata?"
        ],
        "a": [
          [
            "Both input and output",
            "Sia input sia output"
          ],
          [
            "Input only",
            "Solo input"
          ],
          [
            "Output only",
            "Solo output"
          ]
        ],
        "why": [
          "The microphone is input and the headphones are output, so the headset performs both roles.",
          "Il microfono è input e gli auricolari sono output, quindi la cuffia svolge entrambi i ruoli."
        ]
      },
      {
        "q": [
          "Why does a basic capacitive touchscreen usually detect a finger?",
          "Perché un touchscreen capacitivo di base rileva normalmente un dito?"
        ],
        "a": [
          [
            "The finger changes capacitance in the screen's electrical field",
            "Il dito modifica la capacità nel campo elettrico dello schermo"
          ],
          [
            "The finger presses a mechanical switch",
            "Il dito preme un interruttore meccanico"
          ],
          [
            "The screen reads the finger's fingerprint image",
            "Lo schermo legge l'immagine dell'impronta digitale"
          ]
        ],
        "why": [
          "A conductive finger changes capacitance; the controller detects and interprets the change as a touch.",
          "Un dito conduttivo modifica la capacità; il controller rileva e interpreta la variazione come un tocco."
        ]
      }
    ]
  }
],
          "independentPractice": [
  {
    "id": "independent-peripherals-touch",
    "title": [
      "Independent challenge: peripherals and touchscreens",
      "Sfida autonoma: periferiche e touchscreen"
    ],
    "instructions": [
      "Solve each real-world device scenario without hints. Use the feedback to check your reasoning.",
      "Risolvi ogni scenario reale sui dispositivi senza suggerimenti. Usa il feedback per verificare il tuo ragionamento."
    ],
    "sceneIndex": 0,
    "questions": [
      {
        "q": [
          "A student scans a paper worksheet and the computer receives a digital image. What role does the scanner perform?",
          "Uno studente acquisisce una scheda cartacea e il computer riceve un'immagine digitale. Quale ruolo svolge lo scanner?"
        ],
        "a": [
          [
            "Input",
            "Input"
          ],
          [
            "Output",
            "Output"
          ],
          [
            "Storage",
            "Archiviazione"
          ]
        ],
        "why": [
          "A scanner sends information into the computer, so it is an input device.",
          "Uno scanner invia informazioni al computer, quindi è un dispositivo di input."
        ]
      },
      {
        "q": [
          "Why can a capacitive touchscreen detect a finger but may not respond to an ordinary non-conductive plastic stylus?",
          "Perché un touchscreen capacitivo rileva un dito ma potrebbe non rispondere a uno stilo di plastica non conduttivo?"
        ],
        "a": [
          [
            "It senses changes in the screen's electrical field",
            "Rileva variazioni nel campo elettrico dello schermo"
          ],
          [
            "It measures only the force of a press",
            "Misura solo la forza della pressione"
          ],
          [
            "It reads fingerprints using a camera",
            "Legge le impronte digitali con una fotocamera"
          ]
        ],
        "why": [
          "A capacitive screen detects changes in capacitance caused by a conductive touch, rather than relying only on pressure.",
          "Uno schermo capacitivo rileva variazioni di capacità causate da un tocco conduttivo, senza basarsi solo sulla pressione."
        ]
      },
      {
        "q": [
          "A school replaces old computers. What is the most responsible way to handle devices that cannot be reused?",
          "Una scuola sostituisce i vecchi computer. Qual è il modo più responsabile di gestire i dispositivi che non possono essere riutilizzati?"
        ],
        "a": [
          [
            "Use an authorised e-waste recycling route",
            "Utilizzare un circuito autorizzato di riciclo dei RAEE"
          ],
          [
            "Put them in ordinary mixed waste",
            "Gettarli nei rifiuti indifferenziati"
          ],
          [
            "Leave them outdoors",
            "Lasciarli all'aperto"
          ]
        ],
        "why": [
          "Electronic waste should go through appropriate collection and recycling so materials can be recovered and hazardous substances managed safely.",
          "I rifiuti elettronici devono essere raccolti e riciclati correttamente per recuperare i materiali e gestire in sicurezza le sostanze pericolose."
        ]
      }
    ]
  }
],
          "knowledgeCheck": [
            {
              "q": [
                "A webcam sends video into a computer. It is what type?",
                "Una webcam invia video al computer. Che tipo è?"
              ],
              "a": [
                [
                  "Input",
                  "Input"
                ],
                [
                  "Output",
                  "Output"
                ],
                [
                  "Storage",
                  "Archiviazione"
                ]
              ],
              "why": [
                "A webcam sends information into the computer.",
                "Una webcam invia informazioni al computer."
              ]
            },
            {
              "q": [
                "Why is a touchscreen both input and output?",
                "Perché un touchscreen è input e output?"
              ],
              "a": [
                [
                  "It displays and detects touch",
                  "Visualizza e rileva il tocco"
                ],
                [
                  "It only stores data",
                  "Memorizza solo dati"
                ],
                [
                  "It only plays sound",
                  "Riproduce solo audio"
                ]
              ],
              "why": [
                "It displays content and detects user input.",
                "Visualizza contenuti e rileva l'input."
              ]
            },
            {
              "q": [
                "What does a capacitive screen detect?",
                "Cosa rileva uno schermo capacitivo?"
              ],
              "a": [
                [
                  "A change in capacitance",
                  "Una variazione di capacità elettrica"
                ],
                [
                  "Room temperature",
                  "La temperatura della stanza"
                ],
                [
                  "Sound waves",
                  "Onde sonore"
                ]
              ],
              "why": [
                "A finger changes local capacitance.",
                "Un dito modifica la capacità elettrica locale."
              ]
            },
            {
              "q": [
                "Where should an old phone be disposed of?",
                "Dove va smaltito un vecchio telefono?"
              ],
              "a": [
                [
                  "An authorised e-waste point",
                  "Un centro autorizzato RAEE"
                ],
                [
                  "General waste",
                  "Rifiuti indifferenziati"
                ],
                [
                  "Outdoors",
                  "All'aperto"
                ]
              ],
              "why": [
                "Electronics need appropriate recycling.",
                "I dispositivi elettronici richiedono riciclo adeguato."
              ]
            }
          ],
          "masteryAssessment": {
            "title": [
              "Devices & modern computing mastery",
              "Padronanza di dispositivi e informatica moderna"
            ],
            "instructions": [
              "Answer all five questions independently. You need at least 80% to unlock the battle.",
              "Rispondi autonomamente a tutte e cinque le domande. Serve almeno l'80% per sbloccare la battaglia."
            ],
            "passingScore": 80,
            "questionConceptIds": ["input-output-peripherals", "input-output-peripherals", "graphics-processing", "ewaste-and-moores-law", "ewaste-and-moores-law"],
            "questions": [
              {
                "q": [
                  "A touchscreen displays an image and detects a finger tap. Which roles does it perform?",
                  "Un touchscreen visualizza un'immagine e rileva il tocco di un dito. Quali ruoli svolge?"
                ],
                "a": [
                  [
                    "Both output and input",
                    "Sia output sia input"
                  ],
                  [
                    "Input only",
                    "Solo input"
                  ],
                  [
                    "Output only",
                    "Solo output"
                  ],
                  [
                    "Storage and processing only",
                    "Solo archiviazione ed elaborazione"
                  ]
                ],
                "why": [
                  "It outputs visual information and inputs touch commands.",
                  "Fornisce informazioni visive in output e riceve comandi tattili in input."
                ]
              },
              {
                "q": [
                  "In a smart thermostat, what is the role of a temperature sensor?",
                  "In un termostato smart, qual è il ruolo di un sensore di temperatura?"
                ],
                "a": [
                  [
                    "Input device",
                    "Dispositivo di input"
                  ],
                  [
                    "Output device",
                    "Dispositivo di output"
                  ],
                  [
                    "Permanent storage",
                    "Memoria permanente"
                  ],
                  [
                    "Power supply",
                    "Alimentatore"
                  ]
                ],
                "why": [
                  "The sensor sends measured temperature data into the system.",
                  "Il sensore invia i dati della temperatura misurata al sistema."
                ]
              },
              {
                "q": [
                  "What is the main job of a graphics processing unit (GPU)?",
                  "Qual è il compito principale di un'unità di elaborazione grafica (GPU)?"
                ],
                "a": [
                  [
                    "Processing graphics and image data",
                    "Elaborare grafica e dati delle immagini"
                  ],
                  [
                    "Storing files permanently",
                    "Memorizzare file in modo permanente"
                  ],
                  [
                    "Supplying power to every component",
                    "Fornire alimentazione a tutti i componenti"
                  ],
                  [
                    "Recording sound from a microphone",
                    "Registrare il suono da un microfono"
                  ]
                ],
                "why": [
                  "A GPU accelerates graphics-related processing and rendering.",
                  "Una GPU accelera l'elaborazione e il rendering legati alla grafica."
                ]
              },
              {
                "q": [
                  "What is the responsible way to dispose of an old computer?",
                  "Qual è il modo responsabile per smaltire un vecchio computer?"
                ],
                "a": [
                  [
                    "Take it to an approved e-waste collection or recycling point",
                    "Portarlo in un centro autorizzato di raccolta o riciclo RAEE"
                  ],
                  [
                    "Put it in ordinary household rubbish",
                    "Gettarlo nei rifiuti domestici indifferenziati"
                  ],
                  [
                    "Burn it to remove plastic parts",
                    "Bruciarlo per eliminare le parti in plastica"
                  ],
                  [
                    "Leave it outdoors for collection",
                    "Lasciarlo all'aperto perché venga raccolto"
                  ]
                ],
                "why": [
                  "Approved e-waste recycling safely handles hazardous materials and recovers reusable resources.",
                  "Il riciclo RAEE autorizzato gestisce in sicurezza i materiali pericolosi e recupera risorse riutilizzabili."
                ]
              },
              {
                "q": [
                  "Moore's law was historically an observation about what trend?",
                  "La legge di Moore era storicamente un'osservazione su quale tendenza?"
                ],
                "a": [
                  [
                    "The number of transistors on an integrated circuit roughly doubling over time",
                    "Il numero di transistor in un circuito integrato che raddoppia approssimativamente nel tempo"
                  ],
                  [
                    "The physical size of monitors doubling every year",
                    "Le dimensioni fisiche dei monitor che raddoppiano ogni anno"
                  ],
                  [
                    "The amount of RAM in every computer halving yearly",
                    "La quantità di RAM in ogni computer che si dimezza ogni anno"
                  ],
                  [
                    "Internet speed remaining constant for decades",
                    "La velocità di Internet che rimane costante per decenni"
                  ]
                ],
                "why": [
                  "Moore's law described a historical trend in transistor density, not monitor size or internet speed.",
                  "La legge di Moore descriveva una tendenza storica nella densità dei transistor, non nelle dimensioni dei monitor o nella velocità di Internet."
                ]
              }
            ]
          },
          "concepts": [
                {
                      "id": "input-output-peripherals",
                      "title": [
                            "Input and output peripherals",
                            "Periferiche di input e output"
                      ],
                      "explanation": [
                            "Input devices send information to a computer; output devices present information from it. Some devices perform both roles.",
                            "I dispositivi di input inviano informazioni al computer; quelli di output presentano le informazioni elaborate. Alcuni dispositivi svolgono entrambi i ruoli."
                      ],
                      "sceneIndexes": [
                            0,
                            1
                      ],
                      "visualKey": "ioflow"
                ,
                      
                      "example": ["A headset microphone sends sound into the computer (input), while its headphones play sound from the computer (output).","Il microfono di una cuffia invia audio al computer (input), mentre gli auricolari riproducono l'audio del computer (output)."],
                      "workedExample": {
  "scenario": [
    "A student joins an online lesson using a laptop, headset and webcam. Classify the devices by the direction of information.",
    "Uno studente partecipa a una lezione online usando portatile, cuffie con microfono e webcam. Classifica i dispositivi in base alla direzione delle informazioni."
  ],
  "steps": [
    [
      "1. The webcam sends video into the computer; the microphone sends sound in.",
      "1. La webcam invia video al computer; il microfono invia audio."
    ],
    [
      "2. The screen displays the lesson and headphones play sound out.",
      "2. Lo schermo mostra la lezione e le cuffie riproducono l'audio."
    ],
    [
      "3. A touchscreen can do both: display output and detect touch input.",
      "3. Un touchscreen può svolgere entrambe le funzioni: mostrare output e rilevare input tramite il tocco."
    ],
    [
      "4. Classify by following the direction of information.",
      "4. Classifica seguendo la direzione delle informazioni."
    ]
  ],
  "answer": [
    "The webcam and microphone are input devices; the screen and headphones are output devices. A touchscreen is both input and output.",
    "Webcam e microfono sono dispositivi di input; schermo e cuffie sono dispositivi di output. Un touchscreen svolge entrambe le funzioni."
  ]
},
                      "misconceptions": [
  {
    "belief": [
      "A headset is only output because it has headphones.",
      "Una cuffia è solo output perché ha gli auricolari."
    ],
    "correction": [
      "A headset with a microphone has both roles: the microphone is input and the headphones are output.",
      "Una cuffia con microfono svolge entrambe le funzioni: il microfono è input e gli auricolari sono output."
    ]
  }
],
                      "knowledgePrompts": [
                        [
                          "Explain Input and output peripherals in your own words and give one practical example.",
                          "Spiega Periferiche di input e output con parole tue e fornisci un esempio pratico."
                        ]
                      ]
                },
                {
                      "id": "capacitive-touchscreens",
                      "title": [
                            "Capacitive touchscreens",
                            "Touchscreen capacitivi"
                      ],
                      "explanation": [
                            "A capacitive screen detects a touch by sensing a change in the electrical field at its surface, typically caused by a conductive finger.",
                            "Uno schermo capacitivo rileva il tocco percependo una variazione del campo elettrico sulla superficie, in genere causata da un dito conduttivo."
                      ],
                      "sceneIndexes": [
                            2
                      ],
                      "visualKey": "touch",
                      "example": ["A finger changes the capacitance at a screen location; the controller interprets the change as a touch.","Un dito modifica la capacità elettrica in un punto dello schermo; il controller interpreta la variazione come un tocco."],
                      "workedExample": {
  "scenario": [
    "A phone registers a finger tap but does not respond to a non-conductive plastic stylus. Explain why.",
    "Un telefono registra il tocco di un dito ma non risponde a uno stilo di plastica non conduttivo. Spiega perché."
  ],
  "steps": [
    [
      "1. The screen maintains an electrical field across its surface.",
      "1. Lo schermo mantiene un campo elettrico sulla propria superficie."
    ],
    [
      "2. A conductive finger changes capacitance at the point of contact.",
      "2. Un dito conduttivo modifica la capacità elettrica nel punto di contatto."
    ],
    [
      "3. Sensors and the controller interpret that change as a touch location.",
      "3. Sensori e controller interpretano la variazione come una posizione di tocco."
    ],
    [
      "4. Ordinary plastic may not cause the conductive change required for detection.",
      "4. La normale plastica potrebbe non provocare la variazione conduttiva necessaria al rilevamento."
    ]
  ],
  "answer": [
    "A capacitive touchscreen detects changes in capacitance caused by a conductive object, usually a finger. The controller interprets the change as a touch.",
    "Un touchscreen capacitivo rileva variazioni di capacità causate da un oggetto conduttivo, di solito un dito. Il controller interpreta la variazione come un tocco."
  ]
},
                      "misconceptions": [
  {
    "belief": [
      "The screen detects pressure because the finger pushes a mechanical button underneath.",
      "Lo schermo rileva la pressione perché il dito preme un pulsante meccanico sottostante."
    ],
    "correction": [
      "A capacitive screen detects an electrical change, not simply pressure on a mechanical button. Resistive screens work differently.",
      "Uno schermo capacitivo rileva una variazione elettrica, non semplicemente la pressione su un pulsante meccanico. Gli schermi resistivi funzionano diversamente."
    ]
  }
],
                      "knowledgePrompts": [
                        [
                          "Explain Capacitive touchscreens in your own words and give one practical example.",
                          "Spiega Touchscreen capacitivi con parole tue e fornisci un esempio pratico."
                        ]
                      ]
                },
                {
                      "id": "graphics-processing",
                      "title": [
                            "Graphics processing",
                            "Elaborazione grafica"
                      ],
                      "explanation": [
                            "A graphics processing unit (GPU) is a specialised processor that handles graphics and image workloads. It can render images for display and accelerate parallel tasks; it does not replace the CPU for general-purpose instruction control.",
                            "Un'unità di elaborazione grafica (GPU) è un processore specializzato che gestisce grafica e immagini. Può renderizzare immagini da visualizzare e accelerare attività parallele; non sostituisce la CPU nel controllo generale delle istruzioni."
                      ],
                      "example": [
                            "A game uses the GPU to render a 3D scene while the CPU manages game logic and other general tasks.",
                            "Un videogioco usa la GPU per renderizzare una scena 3D mentre la CPU gestisce la logica del gioco e altre attività generali."
                      ],
                      "workedExample": {
                            "scenario": [
                                  "A laptop displays a detailed 3D game. Which processor is especially suited to rendering the graphics, and why?",
                                  "Un portatile mostra un videogioco 3D dettagliato. Quale processore è particolarmente adatto a renderizzare la grafica e perché?"
                            ],
                            "steps": [
                                  [
                                        "1. Identify the workload: many calculations are needed to draw pixels, textures and 3D objects.",
                                        "1. Individua il carico di lavoro: servono molti calcoli per disegnare pixel, texture e oggetti 3D."
                                  ],
                                  [
                                        "2. The GPU is designed to process many graphics operations efficiently, often in parallel.",
                                        "2. La GPU è progettata per elaborare in modo efficiente molte operazioni grafiche, spesso in parallelo."
                                  ],
                                  [
                                        "3. The CPU continues to manage general program instructions and game logic.",
                                        "3. La CPU continua a gestire le istruzioni generali del programma e la logica del gioco."
                                  ]
                            ],
                            "answer": [
                                  "The GPU handles graphics rendering and image processing, while the CPU manages general-purpose instructions and application logic.",
                                  "La GPU gestisce il rendering grafico e l'elaborazione delle immagini, mentre la CPU gestisce le istruzioni generali e la logica dell'applicazione."
                            ]
                      },
                      "knowledgePrompts": [
                            [
                                  "Explain the role of a GPU and give one example of a graphics workload.",
                                  "Spiega il ruolo di una GPU e fornisci un esempio di carico di lavoro grafico."
                            ]
                      ]
                },
                {
                      "id": "ewaste-and-moores-law",
                      "title": [
                            "E-waste and Moore's law",
                            "RAEE e legge di Moore"
                      ],
                      "explanation": [
                            "Electronic waste should be collected and recycled responsibly to recover materials and reduce pollution. Moore's law describes a historical trend in the growth of transistor counts on integrated circuits; it is not a guarantee about every device's speed.",
                            "I rifiuti elettronici devono essere raccolti e riciclati correttamente per recuperare materiali e ridurre l'inquinamento. La legge di Moore descrive una tendenza storica nella crescita del numero di transistor nei circuiti integrati; non garantisce la velocità di ogni dispositivo."
                      ],
                      "sceneIndexes": [
                            3
                      ],
                      "visualKey": "earth"
                ,
                      
                      "example": ["A school can securely erase and donate working laptops, then send unusable devices to an approved e-waste recycler.","Una scuola può cancellare in sicurezza e donare i portatili funzionanti, poi affidare i dispositivi inutilizzabili a un centro RAEE autorizzato."],
                      "workedExample": {
  "scenario": [
    "A school replaces an old computer and hears that newer chips contain many more transistors. Explain responsible disposal and Moore's law.",
    "Una scuola sostituisce un vecchio computer e scopre che i chip più recenti contengono molti più transistor. Spiega lo smaltimento responsabile e la legge di Moore."
  ],
  "steps": [
    [
      "1. Do not put electronic equipment in ordinary household waste; it may contain valuable and hazardous materials.",
      "1. Non gettare le apparecchiature elettroniche nei rifiuti comuni: possono contenere materiali preziosi e pericolosi."
    ],
    [
      "2. Reuse or donate working equipment where appropriate; send unusable devices to authorised e-waste collection or recycling.",
      "2. Riutilizza o dona le apparecchiature funzionanti quando possibile; porta quelle inutilizzabili a un servizio autorizzato di raccolta o riciclo RAEE."
    ],
    [
      "3. Moore's law describes a historical trend of rapid growth in transistor counts on integrated circuits, often described as doubling roughly every two years.",
      "3. La legge di Moore descrive una tendenza storica di rapida crescita del numero di transistor nei circuiti integrati, spesso descritta come un raddoppio circa ogni due anni."
    ],
    [
      "4. It does not guarantee that every computer's speed doubles on a fixed schedule.",
      "4. Non garantisce che la velocità di ogni computer raddoppi secondo una scadenza fissa."
    ]
  ],
  "answer": [
    "Reuse electronics where possible or take them to authorised e-waste recycling. Moore's law describes a historical trend in transistor density, not a guaranteed speed increase for every device.",
    "Riutilizza i dispositivi elettronici quando possibile o portali a un servizio autorizzato di riciclo RAEE. La legge di Moore descrive una tendenza storica della densità dei transistor, non un aumento garantito della velocità di ogni dispositivo."
  ]
},
                      "misconceptions": [
  {
    "belief": [
      "Moore's law says every computer becomes twice as fast every two years.",
      "La legge di Moore dice che ogni computer diventa due volte più veloce ogni due anni."
    ],
    "correction": [
      "Moore's law concerns historical growth in transistor counts on integrated circuits. It does not guarantee that overall computer performance doubles at that rate.",
      "La legge di Moore riguarda la crescita storica del numero di transistor nei circuiti integrati. Non garantisce che le prestazioni complessive raddoppino a quel ritmo."
    ]
  }
],
                      "knowledgePrompts": [
                        [
                          "Explain E-waste and Moore's law in your own words and give one practical example.",
                          "Spiega RAEE e legge di Moore con parole tue e fornisci un esempio pratico."
                        ]
                      ]
                }
          ]
    },
    "demon": [
      "Ghost Signal",
      "Segnale Fantasma"
    ],
    "tech": [
      "Circuit Form · Fourth Technique: I/O Twin Strike",
      "Stile del Circuito · Quarta Tecnica: Doppio Colpo I/O"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "ioflow",
        "text": [
          "<p>[[Peripherals|periferiche]] are the devices connected to the computer.</p><p>[[Input devices|periferiche di input]] send data <b>in</b>: keyboard, mouse, microphone, webcam, scanner, sensors.<br>[[Output devices|periferiche di output]] send results <b>out</b>: monitor, speakers, printer, projector, headphones.</p>",
          "<p>Le [[Peripherals|periferiche]] sono i dispositivi collegati al computer.</p><p>Le [[Input devices|periferiche di input]] fanno <b>entrare</b> dati: tastiera, mouse, microfono, webcam, scanner, sensori.<br>Le [[Output devices|periferiche di output]] fanno <b>uscire</b> i risultati: monitor, casse, stampante, proiettore, cuffie.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "both",
        "text": [
          "<p>Some devices are <b>input and output</b> at the same time. And many objects hide a computer inside: in a robot, [[sensors|sensori]] are inputs while motors and lights are outputs.</p>",
          "<p>Alcuni dispositivi sono <b>di input e di output</b> insieme. E molti oggetti nascondono un computer: in un robot i [[sensors|sensori]] sono input, mentre motori e luci sono output.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "touch",
        "text": [
          "<p>How does a [[touchscreen|touchscreen]] work? Most phones use a <b>capacitive</b> screen: an invisible grid of electrodes holds a tiny electric charge. Your finger conducts electricity, so it changes the charge at that point. The controller works out the coordinates and sends them to the CPU.</p><p>That's why it doesn't work with normal gloves!</p>",
          "<p>Come funziona un [[touchscreen|touchscreen]]? Quasi tutti i telefoni usano uno schermo <b>capacitivo</b>: una griglia invisibile di elettrodi mantiene una piccola carica elettrica. Il dito conduce elettricità e modifica la carica in quel punto. Il controller calcola le coordinate e le invia alla CPU.</p><p>Ecco perché non funziona con i guanti normali!</p>"
        ]
      },
      {
        "who": "s",
        "vis": "earth",
        "text": [
          "<p>Two more pages from your book. Old computers are [[e-waste|RAEE]] and must go to a proper collection point, so precious metals are recovered and toxic parts don't pollute.</p><p>[[Moore's law|legge di Moore]] (CLIL p. 71): for decades, the number of transistors on a chip doubled about every two years. Today chips are so tiny that this growth is slowing down.</p>",
          "<p>Altre due pagine del tuo libro. I vecchi computer sono [[e-waste|RAEE]] (rifiuti elettronici) e vanno portati nei centri di raccolta, così si recuperano i metalli preziosi e le parti tossiche non inquinano.</p><p>La [[Moore's law|legge di Moore]] (CLIL p. 71): per decenni il numero di transistor su un chip è raddoppiato circa ogni due anni. Oggi i chip sono così piccoli che questa crescita sta rallentando.</p>"
        ]
      },
      {
        "type": "journey"
      },
      {
        "type": "sort",
        "title": [
          "Input, output or both?",
          "Input, output o entrambi?"
        ],
        "cats": [
          [
            "Input",
            "Input"
          ],
          [
            "Output",
            "Output"
          ],
          [
            "Both",
            "Entrambi"
          ]
        ],
        "items": [
          {
            "n": [
              "Keyboard",
              "Tastiera"
            ],
            "i": "keyboard",
            "c": 0,
            "why": [
              "Key presses go IN.",
              "I tasti premuti ENTRANO."
            ]
          },
          {
            "n": [
              "Monitor",
              "Monitor"
            ],
            "i": "monitor",
            "c": 1,
            "why": [
              "It shows results: OUT.",
              "Mostra i risultati: ESCONO."
            ]
          },
          {
            "n": [
              "Microphone",
              "Microfono"
            ],
            "i": "mic",
            "c": 0,
            "why": [
              "Your voice goes IN.",
              "La tua voce ENTRA."
            ]
          },
          {
            "n": [
              "Speakers",
              "Casse"
            ],
            "i": "speaker",
            "c": 1,
            "why": [
              "Sound comes OUT.",
              "Il suono ESCE."
            ]
          },
          {
            "n": [
              "Touchscreen",
              "Touchscreen"
            ],
            "i": "touch",
            "c": 2,
            "why": [
              "Touch = input, display = output.",
              "Tocco = input, immagine = output."
            ]
          },
          {
            "n": [
              "Printer",
              "Stampante"
            ],
            "i": "printer",
            "c": 1,
            "why": [
              "Results go onto paper.",
              "I risultati finiscono su carta."
            ]
          },
          {
            "n": [
              "Webcam",
              "Webcam"
            ],
            "i": "webcam",
            "c": 0,
            "why": [
              "Video goes IN.",
              "Il video ENTRA."
            ]
          },
          {
            "n": [
              "Headset with microphone",
              "Cuffie con microfono"
            ],
            "i": "headset",
            "c": 2,
            "why": [
              "Mic in, sound out.",
              "Microfono dentro, suono fuori."
            ]
          },
          {
            "n": [
              "Temperature sensor",
              "Sensore di temperatura"
            ],
            "i": "sensor",
            "c": 0,
            "why": [
              "It measures the world: IN.",
              "Misura il mondo: ENTRA."
            ]
          },
          {
            "n": [
              "Projector",
              "Proiettore"
            ],
            "i": "projector",
            "c": 1,
            "why": [
              "Images go OUT onto a wall.",
              "Le immagini ESCONO sul muro."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Ooooo… I am the Ghost Signal. I twist every signal backwards!</p>",
          "<p>Ooooh… Sono il Segnale Fantasma. Rovescio ogni segnale!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "Which of these is an OUTPUT device?",
          "Quale di queste è una periferica di OUTPUT?"
        ],
        "a": [
          [
            "Printer",
            "Stampante"
          ],
          [
            "Keyboard",
            "Tastiera"
          ],
          [
            "Scanner",
            "Scanner"
          ],
          [
            "Microphone",
            "Microfono"
          ]
        ],
        "why": [
          "A printer puts results onto paper.",
          "La stampante porta i risultati su carta."
        ]
      },
      {
        "q": [
          "A touchscreen is…",
          "Un touchscreen è…"
        ],
        "a": [
          [
            "Both input and output",
            "Sia input sia output"
          ],
          [
            "Only input",
            "Solo input"
          ],
          [
            "Only output",
            "Solo output"
          ],
          [
            "Storage",
            "Memoria di massa"
          ]
        ],
        "why": [
          "It senses touch and displays images.",
          "Rileva il tocco e mostra immagini."
        ]
      },
      {
        "q": [
          "How does a capacitive touchscreen detect your finger?",
          "Come rileva il dito un touchscreen capacitivo?"
        ],
        "a": [
          [
            "Your finger changes the electric charge on a grid of electrodes",
            "Il dito modifica la carica elettrica su una griglia di elettrodi"
          ],
          [
            "A camera films your finger",
            "Una telecamera riprende il dito"
          ],
          [
            "It measures your finger's temperature",
            "Misura la temperatura del dito"
          ],
          [
            "It hears the tap",
            "Sente il rumore del tocco"
          ]
        ],
        "why": [
          "That is why normal gloves don't work: they don't conduct.",
          "Per questo i guanti normali non funzionano: non conducono."
        ]
      },
      {
        "q": [
          "What should you do with an old computer?",
          "Cosa devi fare con un vecchio computer?"
        ],
        "a": [
          [
            "Take it to an e-waste (RAEE) collection point",
            "Portarlo in un centro di raccolta RAEE"
          ],
          [
            "Put it in the normal rubbish",
            "Buttarlo nell'indifferenziato"
          ],
          [
            "Burn it",
            "Bruciarlo"
          ],
          [
            "Bury it in the garden",
            "Seppellirlo in giardino"
          ]
        ],
        "why": [
          "Recycling recovers metals and stops pollution.",
          "Il riciclo recupera i metalli ed evita l'inquinamento."
        ]
      },
      {
        "q": [
          "Moore's law says that…",
          "La legge di Moore dice che…"
        ],
        "a": [
          [
            "Transistors on a chip doubled about every 2 years",
            "I transistor su un chip raddoppiavano circa ogni 2 anni"
          ],
          [
            "Computers get heavier every year",
            "I computer diventano più pesanti ogni anno"
          ],
          [
            "Internet speed halves every year",
            "La velocità di internet si dimezza ogni anno"
          ],
          [
            "Screens double in size every month",
            "Gli schermi raddoppiano ogni mese"
          ]
        ],
        "why": [
          "It is an observation, now slowing down.",
          "È un'osservazione, che oggi sta rallentando."
        ]
      },
      {
        "q": [
          "A temperature sensor in a smart thermostat is…",
          "Un sensore di temperatura in un termostato smart è…"
        ],
        "a": [
          [
            "An input",
            "Un input"
          ],
          [
            "An output",
            "Un output"
          ],
          [
            "Software",
            "Software"
          ],
          [
            "Storage",
            "Memoria di massa"
          ]
        ],
        "why": [
          "Sensors send measurements IN.",
          "I sensori inviano misure IN ENTRATA."
        ]
      }
    ]
  },
  {
    "id": "a4m1",
    "arc": 3,
    "sec": "4.1–4.2",
    "pages": "72–75",
    "hue": 100,
    "horns": 2,
    "eyes": 2,
    "title": [
      "The Headmaster: Operating System",
      "Il preside: il sistema operativo"
    ],
    "topic": [
      "What the OS does; programs and processes",
      "Cosa fa il sistema operativo; programmi e processi"
    ],
    "demon": [
      "Driverless Phantom",
      "Fantasma Senza Driver"
    ],
    "tech": [
      "Kernel Form · First Technique: System Barrier",
      "Stile del Kernel · Prima Tecnica: Barriera di Sistema"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "stack",
        "text": [
          "<p>Software works in layers. You use <b>applications</b>; applications ask the [[operating system|sistema operativo]] for help; the OS uses [[drivers|driver]] to control the <b>hardware</b>.</p><p>Windows, macOS, Linux, Android and iOS are all operating systems.</p>",
          "<p>Il software lavora a strati. Tu usi le <b>applicazioni</b>; le applicazioni chiedono aiuto al [[operating system|sistema operativo]]; il sistema operativo usa i [[drivers|driver]] per controllare l'<b>hardware</b>.</p><p>Windows, macOS, Linux, Android e iOS sono tutti sistemi operativi.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "osjobs",
        "text": [
          "<p>The OS is the academy's headmaster. It organises everything so programs and users don't get in each other's way. Its jobs:</p>",
          "<p>Il sistema operativo è il preside dell'accademia. Organizza tutto perché programmi e utenti non si intralcino. Ecco i suoi compiti:</p>"
        ]
      },
      {
        "who": "s",
        "vis": "process",
        "text": [
          "<p>A [[program|programma]] is a file of instructions resting on the disk. When you run it, it is loaded into RAM and becomes a [[process|processo]].</p><p>The OS [[scheduler|scheduler]] gives each process a tiny slice of CPU time, switching so fast that everything seems to run at once. That's [[multitasking|multitasking]].</p>",
          "<p>Un [[program|programma]] è un file di istruzioni fermo sul disco. Quando lo avvii, viene caricato in RAM e diventa un [[process|processo]].</p><p>Lo [[scheduler|scheduler]] del sistema operativo dà a ogni processo una piccolissima fetta di tempo della CPU, cambiando così in fretta che tutto sembra funzionare insieme. È il [[multitasking|multitasking]].</p>"
        ]
      },
      {
        "type": "order",
        "title": [
          "What happens when you open an app?",
          "Cosa succede quando apri un'app?"
        ],
        "steps": [
          [
            "You double-click the app icon",
            "Fai doppio clic sull'icona dell'app"
          ],
          [
            "The OS finds the program file on the disk",
            "Il sistema operativo trova il file del programma sul disco"
          ],
          [
            "The OS copies the program into RAM",
            "Il sistema operativo copia il programma in RAM"
          ],
          [
            "The program becomes a process",
            "Il programma diventa un processo"
          ],
          [
            "The scheduler gives it turns on the CPU",
            "Lo scheduler gli assegna turni sulla CPU"
          ],
          [
            "The app's window appears",
            "Compare la finestra dell'app"
          ]
        ],
        "hint": [
          "A program must be in RAM before the CPU can run it.",
          "Un programma deve essere in RAM prima che la CPU possa eseguirlo."
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Hssss… I am the Driverless Phantom. I delete drivers so the OS can't talk to anything!</p>",
          "<p>Hssss… Sono il Fantasma Senza Driver. Cancello i driver così il sistema operativo non parla più con niente!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "Which of these is an operating system?",
          "Quale di questi è un sistema operativo?"
        ],
        "a": [
          [
            "Linux",
            "Linux"
          ],
          [
            "A spreadsheet",
            "Un foglio di calcolo"
          ],
          [
            "A printer",
            "Una stampante"
          ],
          [
            "A web page",
            "Una pagina web"
          ]
        ],
        "why": [
          "Linux, Windows, macOS, Android, iOS are operating systems.",
          "Linux, Windows, macOS, Android e iOS sono sistemi operativi."
        ]
      },
      {
        "q": [
          "Which is NOT a job of the operating system?",
          "Quale NON è un compito del sistema operativo?"
        ],
        "a": [
          [
            "Writing your essay for you",
            "Scrivere il tema al posto tuo"
          ],
          [
            "Managing memory",
            "Gestire la memoria"
          ],
          [
            "Managing files",
            "Gestire i file"
          ],
          [
            "Running several programs at once",
            "Far funzionare più programmi insieme"
          ]
        ],
        "why": [
          "Writing is your job, with an application.",
          "Scrivere è compito tuo, con un'applicazione."
        ]
      },
      {
        "q": [
          "What is a process?",
          "Che cos'è un processo?"
        ],
        "a": [
          [
            "A program while it is running",
            "Un programma in esecuzione"
          ],
          [
            "A file on a USB stick",
            "Un file su una chiavetta"
          ],
          [
            "A type of cable",
            "Un tipo di cavo"
          ],
          [
            "A broken program",
            "Un programma rotto"
          ]
        ],
        "why": [
          "A program becomes a process when it is loaded into RAM and runs.",
          "Un programma diventa processo quando è caricato in RAM e viene eseguito."
        ]
      },
      {
        "q": [
          "Multitasking means…",
          "Multitasking significa…"
        ],
        "a": [
          [
            "The OS shares the CPU so several processes seem to run at once",
            "Il sistema operativo divide la CPU e più processi sembrano funzionare insieme"
          ],
          [
            "Having two keyboards",
            "Avere due tastiere"
          ],
          [
            "Turning the computer on and off",
            "Accendere e spegnere il computer"
          ],
          [
            "Using only one program",
            "Usare un solo programma"
          ]
        ],
        "why": [
          "The scheduler switches between processes very quickly.",
          "Lo scheduler passa da un processo all'altro velocissimamente."
        ]
      },
      {
        "q": [
          "What is a device driver?",
          "Che cos'è un driver?"
        ],
        "a": [
          [
            "A program that lets the OS talk to a specific device",
            "Un programma che permette al sistema operativo di comunicare con un dispositivo"
          ],
          [
            "A person who fixes computers",
            "Una persona che ripara computer"
          ],
          [
            "A cable",
            "Un cavo"
          ],
          [
            "A type of RAM",
            "Un tipo di RAM"
          ]
        ],
        "why": [
          "Drivers translate between the OS and hardware.",
          "I driver fanno da traduttori tra sistema operativo e hardware."
        ]
      },
      {
        "q": [
          "Before the CPU can run a program, the program must be…",
          "Prima che la CPU possa eseguire un programma, il programma deve essere…"
        ],
        "a": [
          [
            "Loaded into RAM",
            "Caricato in RAM"
          ],
          [
            "Printed",
            "Stampato"
          ],
          [
            "Deleted",
            "Cancellato"
          ],
          [
            "Sent by email",
            "Inviato per e-mail"
          ]
        ],
        "why": [
          "The CPU fetches instructions from RAM.",
          "La CPU preleva le istruzioni dalla RAM."
        ]
      }
    ]
  },
  {
    "id": "a4m2",
    "arc": 3,
    "sec": "4.3–4.5",
    "pages": "76–84",
    "hue": 180,
    "horns": 3,
    "eyes": 2,
    "title": [
      "The Archive: Files, Folders & GUI",
      "L'archivio: file, cartelle e interfaccia"
    ],
    "topic": [
      "File system, graphical interface, working with files",
      "File system, interfaccia grafica, operare su file e cartelle"
    ],
    "demon": [
      "Lost-File Yokai",
      "Yokai dei File Perduti"
    ],
    "tech": [
      "Kernel Form · Second Technique: Path Tracker",
      "Stile del Kernel · Seconda Tecnica: Segugio del Percorso"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "tree",
        "text": [
          "<p>The [[file system|file system]] is how the OS organises data on the disk. Data lives in [[files|file]], and files live in [[folders|cartelle]] arranged as a tree.</p><p>The [[path|percorso]] is the address of a file. The [[extension|estensione]] after the dot says what type of file it is: .docx, .jpg, .mp3…</p>",
          "<p>Il [[file system|file system]] è il modo in cui il sistema operativo organizza i dati sul disco. I dati stanno nei [[files|file]], e i file stanno nelle [[folders|cartelle]], disposte ad albero.</p><p>Il [[path|percorso]] è l'indirizzo di un file. L'[[extension|estensione]] dopo il punto dice che tipo di file è: .docx, .jpg, .mp3…</p>"
        ]
      },
      {
        "who": "s",
        "vis": "gui",
        "text": [
          "<p>A [[graphical user interface|interfaccia grafica]] (GUI) lets you use the computer by clicking and tapping instead of typing commands. It is built from four elements, sometimes called <b>WIMP</b>: Windows, Icons, Menus, Pointer.</p>",
          "<p>L'[[graphical user interface|interfaccia grafica]] (GUI) ti permette di usare il computer cliccando e toccando, invece di scrivere comandi. È fatta di quattro elementi, detti a volte <b>WIMP</b>: finestre (Windows), icone, menu e puntatore.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "fileops",
        "text": [
          "<p>Working with files and folders: create, rename, [[copy|copia]], [[move|sposta]], delete. Copy leaves the original in place; move takes it away. Deleted files go to the [[Recycle Bin|Cestino]] first.</p>",
          "<p>Operare su file e cartelle: crea, rinomina, [[copy|copia]], [[move|sposta]], elimina. Copiare lascia l'originale al suo posto; spostare lo porta via. I file eliminati finiscono prima nel [[Recycle Bin|Cestino]].</p>"
        ]
      },
      {
        "type": "sort",
        "title": [
          "What type of file is it?",
          "Che tipo di file è?"
        ],
        "cats": [
          [
            "Document",
            "Documento"
          ],
          [
            "Image",
            "Immagine"
          ],
          [
            "Audio",
            "Audio"
          ],
          [
            "Video",
            "Video"
          ]
        ],
        "items": [
          {
            "n": [
              "essay.docx",
              "tema.docx"
            ],
            "i": "file",
            "c": 0,
            "why": [
              ".docx = word processor document.",
              ".docx = documento di videoscrittura."
            ]
          },
          {
            "n": [
              "holiday.jpg",
              "vacanze.jpg"
            ],
            "i": "image",
            "c": 1,
            "why": [
              ".jpg = photo (lossy image).",
              ".jpg = foto (immagine con perdita)."
            ]
          },
          {
            "n": [
              "song.mp3",
              "canzone.mp3"
            ],
            "i": "music",
            "c": 2,
            "why": [
              ".mp3 = compressed audio.",
              ".mp3 = audio compresso."
            ]
          },
          {
            "n": [
              "trailer.mp4",
              "trailer.mp4"
            ],
            "i": "video",
            "c": 3,
            "why": [
              ".mp4 = video.",
              ".mp4 = video."
            ]
          },
          {
            "n": [
              "notes.txt",
              "appunti.txt"
            ],
            "i": "file",
            "c": 0,
            "why": [
              ".txt = plain text.",
              ".txt = testo semplice."
            ]
          },
          {
            "n": [
              "screenshot.png",
              "screenshot.png"
            ],
            "i": "image",
            "c": 1,
            "why": [
              ".png = image (lossless).",
              ".png = immagine (senza perdita)."
            ]
          },
          {
            "n": [
              "report.pdf",
              "relazione.pdf"
            ],
            "i": "file",
            "c": 0,
            "why": [
              ".pdf = document that looks the same everywhere.",
              ".pdf = documento che appare uguale ovunque."
            ]
          },
          {
            "n": [
              "voice.wav",
              "voce.wav"
            ],
            "i": "mic",
            "c": 2,
            "why": [
              ".wav = uncompressed audio.",
              ".wav = audio non compresso."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Hihihi… I'm the Lost-File Yokai. I hide your homework in folders you'll never find!</p>",
          "<p>Ihihih… Sono lo Yokai dei File Perduti. Nascondo i tuoi compiti in cartelle che non troverai mai!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "What does the file system do?",
          "Cosa fa il file system?"
        ],
        "a": [
          [
            "Organises files and folders on the disk",
            "Organizza file e cartelle sul disco"
          ],
          [
            "Cools the computer",
            "Raffredda il computer"
          ],
          [
            "Connects to Wi-Fi",
            "Si collega al Wi-Fi"
          ],
          [
            "Prints documents",
            "Stampa documenti"
          ]
        ],
        "why": [
          "It is the OS's filing cabinet.",
          "È l'archivio del sistema operativo."
        ]
      },
      {
        "q": [
          "In \"foto.jpg\", what is \"jpg\"?",
          "In \"foto.jpg\", che cos'è \"jpg\"?"
        ],
        "a": [
          [
            "The extension (file type)",
            "L'estensione (tipo di file)"
          ],
          [
            "The folder",
            "La cartella"
          ],
          [
            "The path",
            "Il percorso"
          ],
          [
            "The size",
            "La dimensione"
          ]
        ],
        "why": [
          "The extension tells the OS which program opens the file.",
          "L'estensione dice al sistema operativo quale programma apre il file."
        ]
      },
      {
        "q": [
          "What is a path like C:\\Users\\Hana\\Documents\\essay.docx?",
          "Che cos'è un percorso come C:\\Utenti\\Hana\\Documenti\\tema.docx?"
        ],
        "a": [
          [
            "The address of the file in the folder tree",
            "L'indirizzo del file nell'albero delle cartelle"
          ],
          [
            "A web link",
            "Un link web"
          ],
          [
            "A password",
            "Una password"
          ],
          [
            "A virus",
            "Un virus"
          ]
        ],
        "why": [
          "It lists every folder from the root down to the file.",
          "Elenca ogni cartella dalla radice fino al file."
        ]
      },
      {
        "q": [
          "What is the difference between copy and move?",
          "Che differenza c'è tra copiare e spostare?"
        ],
        "a": [
          [
            "Copy keeps the original; move takes it away",
            "Copiare mantiene l'originale; spostare lo porta via"
          ],
          [
            "There is no difference",
            "Nessuna differenza"
          ],
          [
            "Move makes two copies",
            "Spostare crea due copie"
          ],
          [
            "Copy deletes the file",
            "Copiare cancella il file"
          ]
        ],
        "why": [
          "Move = cut + paste.",
          "Spostare = taglia + incolla."
        ]
      },
      {
        "q": [
          "What does GUI stand for?",
          "Cosa significa GUI?"
        ],
        "a": [
          [
            "Graphical User Interface",
            "Graphical User Interface (interfaccia grafica)"
          ],
          [
            "General Unit Input",
            "General Unit Input"
          ],
          [
            "Great Useful Internet",
            "Great Useful Internet"
          ],
          [
            "Graphics Upload Icon",
            "Graphics Upload Icon"
          ]
        ],
        "why": [
          "Windows, icons, menus and pointer.",
          "Finestre, icone, menu e puntatore."
        ]
      },
      {
        "q": [
          "You delete a file by mistake. Where can you often find it?",
          "Elimini un file per errore. Dove puoi spesso ritrovarlo?"
        ],
        "a": [
          [
            "In the Recycle Bin",
            "Nel Cestino"
          ],
          [
            "In the CPU",
            "Nella CPU"
          ],
          [
            "In the printer",
            "Nella stampante"
          ],
          [
            "It is gone forever",
            "È perso per sempre"
          ]
        ],
        "why": [
          "Until you empty the bin, you can restore it.",
          "Finché non svuoti il Cestino, puoi ripristinarlo."
        ]
      }
    ]
  },
  {
    "id": "a4m3",
    "arc": 3,
    "sec": "4.6–4.9 + CLIL",
    "pages": "85–99",
    "hue": 15,
    "horns": 4,
    "eyes": 2,
    "title": [
      "Apps, Sensors & Licences",
      "App, sensori e licenze"
    ],
    "topic": [
      "Application software, mobile apps, accelerometer, GNSS, copyright, open source",
      "Software applicativo, app, accelerometro, GNSS, copyright, open source"
    ],
    "demon": [
      "Pirate Oni",
      "Oni Pirata"
    ],
    "tech": [
      "Kernel Form · Third Technique: Licence Seal",
      "Stile del Kernel · Terza Tecnica: Sigillo della Licenza"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "apps",
        "text": [
          "<p>[[Application software|software applicativo]] helps <b>you</b> do a task: write, calculate, draw, play, learn. [[Mobile apps|app per dispositivi mobili]] are applications built for phones and tablets, downloaded from an app store.</p>",
          "<p>Il [[Application software|software applicativo]] aiuta <b>te</b> a svolgere un compito: scrivere, calcolare, disegnare, giocare, imparare. Le [[Mobile apps|app per dispositivi mobili]] sono applicazioni pensate per telefoni e tablet, scaricate da uno store.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "sensors",
        "text": [
          "<p>Phones are full of sensors. The [[accelerometer|accelerometro]] measures movement and tilt: it rotates the screen and counts your steps.</p><p>The [[GNSS receiver|ricevitore GNSS]] (Global Navigation Satellite System) picks up signals from satellites (GPS, Europe's Galileo and others) and uses at least four to calculate where you are.</p>",
          "<p>I telefoni sono pieni di sensori. L'[[accelerometer|accelerometro]] misura movimento e inclinazione: ruota lo schermo e conta i passi.</p><p>Il [[GNSS receiver|ricevitore GNSS]] (sistema satellitare globale di navigazione) riceve i segnali dei satelliti (GPS, l'europeo Galileo e altri) e ne usa almeno quattro per calcolare dove ti trovi.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "licences",
        "text": [
          "<p>Software is protected by [[copyright|diritto d'autore]]. When you install it you accept a [[licence|licenza d'uso]] that says what you may do. Copying paid software without permission is piracy, and it's illegal.</p><p>[[Open source|open source]] software (CLIL p. 99) publishes its source code so anyone can study, improve and share it.</p>",
          "<p>Il software è protetto dal [[copyright|diritto d'autore]]. Quando lo installi accetti una [[licence|licenza d'uso]] che dice cosa puoi farci. Copiare software a pagamento senza permesso è pirateria, ed è illegale.</p><p>Il software [[Open source|open source]] (CLIL p. 99) pubblica il codice sorgente: chiunque può studiarlo, migliorarlo e condividerlo.</p>"
        ]
      },
      {
        "type": "sort",
        "title": [
          "Which kind of licence?",
          "Che tipo di licenza?"
        ],
        "cats": [
          [
            "Proprietary",
            "Proprietario"
          ],
          [
            "Freeware",
            "Freeware"
          ],
          [
            "Shareware",
            "Shareware"
          ],
          [
            "Open source",
            "Open source"
          ]
        ],
        "items": [
          {
            "n": [
              "Linux: anyone can read and improve the code",
              "Linux: chiunque può leggere e migliorare il codice"
            ],
            "i": "globe",
            "c": 3,
            "why": [
              "Public source code = open source.",
              "Codice pubblico = open source."
            ]
          },
          {
            "n": [
              "A photo editor that costs €20 a month; code is secret",
              "Un fotoritocco da 20 € al mese; codice segreto"
            ],
            "i": "lock",
            "c": 0,
            "why": [
              "You pay for a licence to use closed software.",
              "Paghi una licenza per usare software chiuso."
            ]
          },
          {
            "n": [
              "A game demo that stops after 10 levels until you buy it",
              "Una demo che si blocca dopo 10 livelli finché non la compri"
            ],
            "i": "key",
            "c": 2,
            "why": [
              "Try first, pay later = shareware.",
              "Prima provi, poi paghi = shareware."
            ]
          },
          {
            "n": [
              "A free PDF reader whose code is secret",
              "Un lettore PDF gratuito con codice segreto"
            ],
            "i": "heart",
            "c": 1,
            "why": [
              "Free but closed = freeware.",
              "Gratis ma chiuso = freeware."
            ]
          },
          {
            "n": [
              "LibreOffice",
              "LibreOffice"
            ],
            "i": "globe",
            "c": 3,
            "why": [
              "LibreOffice is open source.",
              "LibreOffice è open source."
            ]
          },
          {
            "n": [
              "An office suite you buy with a licence key",
              "Una suite per ufficio acquistata con codice di licenza"
            ],
            "i": "lock",
            "c": 0,
            "why": [
              "Paid and closed = proprietary.",
              "A pagamento e chiuso = proprietario."
            ]
          },
          {
            "n": [
              "A free music player; you can't see or change its code",
              "Un lettore musicale gratuito; non puoi vederne il codice"
            ],
            "i": "heart",
            "c": 1,
            "why": [
              "Free to use, closed code = freeware.",
              "Gratis da usare, codice chiuso = freeware."
            ]
          },
          {
            "n": [
              "An antivirus with a 30-day free trial",
              "Un antivirus con 30 giorni di prova gratuita"
            ],
            "i": "key",
            "c": 2,
            "why": [
              "Trial then pay = shareware.",
              "Prova poi paga = shareware."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Yarrr! I'm the Pirate Oni! I copy software without permission and spread viruses inside it!</p>",
          "<p>Arrr! Sono l'Oni Pirata! Copio il software senza permesso e ci nascondo dentro i virus!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "Which is application software?",
          "Quale di questi è software applicativo?"
        ],
        "a": [
          [
            "A video editor",
            "Un programma di montaggio video"
          ],
          [
            "An operating system",
            "Un sistema operativo"
          ],
          [
            "A device driver",
            "Un driver"
          ],
          [
            "Firmware",
            "Il firmware"
          ]
        ],
        "why": [
          "It helps the user do a task.",
          "Aiuta l'utente a svolgere un compito."
        ]
      },
      {
        "q": [
          "What does a phone's accelerometer do?",
          "A cosa serve l'accelerometro del telefono?"
        ],
        "a": [
          [
            "Measures movement and tilt (e.g. rotates the screen)",
            "Misura movimento e inclinazione (es. ruota lo schermo)"
          ],
          [
            "Measures battery",
            "Misura la batteria"
          ],
          [
            "Takes photos",
            "Scatta foto"
          ],
          [
            "Connects to Wi-Fi",
            "Si collega al Wi-Fi"
          ]
        ],
        "why": [
          "It senses acceleration, including gravity.",
          "Rileva l'accelerazione, compresa la gravità."
        ]
      },
      {
        "q": [
          "How does a GNSS receiver find your position?",
          "Come trova la tua posizione un ricevitore GNSS?"
        ],
        "a": [
          [
            "Using signals from at least four satellites",
            "Usando i segnali di almeno quattro satelliti"
          ],
          [
            "By asking your friends",
            "Chiedendo ai tuoi amici"
          ],
          [
            "With the accelerometer only",
            "Solo con l'accelerometro"
          ],
          [
            "From the phone's colour",
            "Dal colore del telefono"
          ]
        ],
        "why": [
          "GPS and Galileo are GNSS systems.",
          "GPS e Galileo sono sistemi GNSS."
        ]
      },
      {
        "q": [
          "Open source software means…",
          "Software open source significa…"
        ],
        "a": [
          [
            "The source code is public and can be studied and changed",
            "Il codice sorgente è pubblico e si può studiare e modificare"
          ],
          [
            "It is always paid",
            "È sempre a pagamento"
          ],
          [
            "It has no licence at all",
            "Non ha nessuna licenza"
          ],
          [
            "It only runs online",
            "Funziona solo online"
          ]
        ],
        "why": [
          "Examples: Linux, Firefox, LibreOffice.",
          "Esempi: Linux, Firefox, LibreOffice."
        ]
      },
      {
        "q": [
          "Shareware is software that…",
          "Lo shareware è un software che…"
        ],
        "a": [
          [
            "You can try for free, then pay to keep using",
            "Puoi provare gratis, poi paghi per continuare"
          ],
          [
            "Is always free forever",
            "È sempre gratis per sempre"
          ],
          [
            "Has public code",
            "Ha il codice pubblico"
          ],
          [
            "Cannot be installed",
            "Non si può installare"
          ]
        ],
        "why": [
          "Try before you buy.",
          "Prima provi, poi compri."
        ]
      },
      {
        "q": [
          "Copying paid software without permission is…",
          "Copiare software a pagamento senza permesso è…"
        ],
        "a": [
          [
            "Piracy, which is illegal",
            "Pirateria, che è illegale"
          ],
          [
            "Open source",
            "Open source"
          ],
          [
            "Always allowed for students",
            "Sempre permesso agli studenti"
          ],
          [
            "A backup",
            "Un backup"
          ]
        ],
        "why": [
          "Software is protected by copyright.",
          "Il software è protetto dal diritto d'autore."
        ]
      }
    ]
  },
  {
    "id": "a5m1",
    "arc": 4,
    "sec": "5.1–5.2",
    "pages": "100–108",
    "hue": 230,
    "horns": 3,
    "eyes": 3,
    "title": [
      "The Net: Digital Communication",
      "La rete: comunicazione digitale"
    ],
    "topic": [
      "Communication, LAN, WAN, Internet, packets",
      "Comunicazione, LAN, WAN, Internet, pacchetti"
    ],
    "demon": [
      "Packet Thief",
      "Ladro di Pacchetti"
    ],
    "tech": [
      "Network Form · First Technique: Packet Storm",
      "Stile della Rete · Prima Tecnica: Tempesta di Pacchetti"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "comm",
        "text": [
          "<p>Every communication has a [[sender|emittente]], a [[receiver|ricevente]], a [[message|messaggio]] and a [[channel|canale]]. In digital communication the message is coded in bits, and both sides follow the same rules: a [[protocol|protocollo]].</p><p>Speed is measured in bits per second: Mbps, Gbps.</p>",
          "<p>Ogni comunicazione ha un [[sender|emittente]], un [[receiver|ricevente]], un [[message|messaggio]] e un [[channel|canale]]. Nella comunicazione digitale il messaggio è codificato in bit, ed entrambi seguono le stesse regole: un [[protocol|protocollo]].</p><p>La velocità si misura in bit al secondo: Mbps, Gbps.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "networks",
        "text": [
          "<p>A [[network|rete]] is a group of connected devices. A [[LAN|LAN]] covers one home, school or office; a [[WAN|WAN]] covers cities and countries. The [[Internet|Internet]] is a network of networks spanning the whole planet.</p><p>A [[router|router]] connects networks and chooses routes. Every device has an [[IP address|indirizzo IP]].</p>",
          "<p>Una [[network|rete]] è un insieme di dispositivi collegati. Una [[LAN|LAN]] copre una casa, una scuola o un ufficio; una [[WAN|WAN]] copre città e Paesi. [[Internet|Internet]] è una rete di reti che avvolge il pianeta.</p><p>Il [[router|router]] collega le reti e sceglie i percorsi. Ogni dispositivo ha un [[IP address|indirizzo IP]].</p>"
        ]
      },
      {
        "who": "s",
        "vis": "packets",
        "text": [
          "<p>Big messages are split into small [[packets|pacchetti]]. Each packet carries the sender's and receiver's IP addresses and a number. Routers pass them along, sometimes by different roads, and at the end they are put back in order. The rules for this are the protocols [[TCP/IP|TCP/IP]].</p>",
          "<p>I messaggi grandi vengono divisi in piccoli [[packets|pacchetti]]. Ogni pacchetto porta l'indirizzo IP di chi invia e di chi riceve e un numero. I router li inoltrano, a volte per strade diverse, e all'arrivo vengono rimessi in ordine. Le regole sono i protocolli [[TCP/IP|TCP/IP]].</p>"
        ]
      },
      {
        "type": "order",
        "title": [
          "How a message travels",
          "Come viaggia un messaggio"
        ],
        "steps": [
          [
            "You write a message and press Send",
            "Scrivi un messaggio e premi Invia"
          ],
          [
            "It is split into numbered packets",
            "Viene diviso in pacchetti numerati"
          ],
          [
            "Each packet gets the sender's and receiver's IP addresses",
            "Ogni pacchetto riceve gli indirizzi IP di mittente e destinatario"
          ],
          [
            "Routers forward the packets across the Internet",
            "I router inoltrano i pacchetti attraverso Internet"
          ],
          [
            "The packets arrive and are put back in order",
            "I pacchetti arrivano e vengono rimessi in ordine"
          ],
          [
            "Your friend reads the message",
            "La tua amica legge il messaggio"
          ]
        ],
        "hint": [
          "Split first, then address, then travel, then rebuild.",
          "Prima dividi, poi indirizza, poi viaggia, poi ricomponi."
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Snatch! I'm the Packet Thief. I'll grab your packets and your messages will never arrive!</p>",
          "<p>Preso! Sono il Ladro di Pacchetti. Ruberò i tuoi pacchetti e i messaggi non arriveranno mai!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "What is a protocol?",
          "Che cos'è un protocollo?"
        ],
        "a": [
          [
            "A set of shared rules for communicating",
            "Un insieme di regole comuni per comunicare"
          ],
          [
            "A type of cable",
            "Un tipo di cavo"
          ],
          [
            "A virus",
            "Un virus"
          ],
          [
            "A web page",
            "Una pagina web"
          ]
        ],
        "why": [
          "Both sides must follow the same rules.",
          "Entrambe le parti devono seguire le stesse regole."
        ]
      },
      {
        "q": [
          "A LAN is…",
          "Una LAN è…"
        ],
        "a": [
          [
            "A local network, e.g. in a school",
            "Una rete locale, ad es. in una scuola"
          ],
          [
            "The whole Internet",
            "Tutta Internet"
          ],
          [
            "A satellite",
            "Un satellite"
          ],
          [
            "A type of RAM",
            "Un tipo di RAM"
          ]
        ],
        "why": [
          "LAN = Local Area Network.",
          "LAN = Local Area Network, rete locale."
        ]
      },
      {
        "q": [
          "The Internet is…",
          "Internet è…"
        ],
        "a": [
          [
            "A worldwide network of networks",
            "Una rete mondiale di reti"
          ],
          [
            "A single big computer",
            "Un unico grande computer"
          ],
          [
            "A website",
            "Un sito web"
          ],
          [
            "A browser",
            "Un browser"
          ]
        ],
        "why": [
          "It links millions of networks.",
          "Collega milioni di reti."
        ]
      },
      {
        "q": [
          "What does a router do?",
          "Cosa fa un router?"
        ],
        "a": [
          [
            "Connects networks and forwards packets along a route",
            "Collega le reti e inoltra i pacchetti lungo un percorso"
          ],
          [
            "Prints documents",
            "Stampa documenti"
          ],
          [
            "Stores files forever",
            "Conserva file per sempre"
          ],
          [
            "Cools the network",
            "Raffredda la rete"
          ]
        ],
        "why": [
          "Routers direct internet traffic.",
          "I router dirigono il traffico di Internet."
        ]
      },
      {
        "q": [
          "Why are messages split into packets?",
          "Perché i messaggi vengono divisi in pacchetti?"
        ],
        "a": [
          [
            "Small packets travel efficiently and can take different routes",
            "I pacchetti piccoli viaggiano meglio e possono seguire strade diverse"
          ],
          [
            "To make them secret",
            "Per renderli segreti"
          ],
          [
            "Because cables are short",
            "Perché i cavi sono corti"
          ],
          [
            "To change the language",
            "Per cambiare lingua"
          ]
        ],
        "why": [
          "They are rebuilt in order at the destination.",
          "All'arrivo vengono ricomposti in ordine."
        ]
      },
      {
        "q": [
          "Internet speed is measured in…",
          "La velocità di Internet si misura in…"
        ],
        "a": [
          [
            "Bits per second (Mbps)",
            "Bit al secondo (Mbps)"
          ],
          [
            "Kilograms",
            "Chilogrammi"
          ],
          [
            "Pixels",
            "Pixel"
          ],
          [
            "Degrees",
            "Gradi"
          ]
        ],
        "why": [
          "e.g. 100 Mbps = 100 million bits per second.",
          "ad es. 100 Mbps = 100 milioni di bit al secondo."
        ]
      }
    ]
  },
  {
    "id": "a5m2",
    "arc": 4,
    "sec": "5.3–5.4 + CLIL",
    "pages": "109–113, 127",
    "hue": 60,
    "horns": 2,
    "eyes": 3,
    "title": [
      "Web Walker: Pages, Browsers & Search",
      "Viandante del Web: pagine, browser e ricerche"
    ],
    "topic": [
      "World Wide Web, URL, browser, searching well",
      "World Wide Web, URL, browser, fare ricerche"
    ],
    "demon": [
      "Rumour Kappa",
      "Kappa delle Bufale"
    ],
    "tech": [
      "Network Form · Second Technique: Hyperlink Leap",
      "Stile della Rete · Seconda Tecnica: Balzo del Link"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "webnet",
        "text": [
          "<p>The Internet and the Web are <b>not</b> the same thing. The [[World Wide Web|World Wide Web]] is one service that runs on the Internet: pages written in [[HTML|HTML]] and joined by [[hyperlinks|link]].</p><p>Tim Berners-Lee proposed it at CERN in 1989 (CLIL p. 127).</p>",
          "<p>Internet e il Web <b>non</b> sono la stessa cosa. Il [[World Wide Web|World Wide Web]] è uno dei servizi che funzionano su Internet: pagine scritte in [[HTML|HTML]] e collegate da [[hyperlinks|link]].</p><p>Tim Berners-Lee lo propose al CERN nel 1989 (CLIL p. 127).</p>"
        ]
      },
      {
        "who": "s",
        "vis": "url",
        "text": [
          "<p>Every page has an address, the [[URL|URL]]. A [[browser|browser]] (Chrome, Firefox, Safari, Edge) asks the server for the page and displays it.</p><p>Look for <b>https</b> and the padlock: the connection is encrypted.</p>",
          "<p>Ogni pagina ha un indirizzo, l'[[URL|URL]]. Il [[browser|browser]] (Chrome, Firefox, Safari, Edge) chiede la pagina al server e la mostra.</p><p>Cerca <b>https</b> e il lucchetto: la connessione è cifrata.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "search",
        "text": [
          "<p>A [[search engine|motore di ricerca]] finds pages that match your [[keywords|parole chiave]]. The real skill is judging what you find: who wrote it, when, and can you confirm it elsewhere? Fake news spreads fast.</p>",
          "<p>Un [[search engine|motore di ricerca]] trova le pagine che corrispondono alle tue [[keywords|parole chiave]]. La vera abilità è valutare ciò che trovi: chi l'ha scritto, quando, e lo puoi confermare altrove? Le bufale si diffondono in fretta.</p>"
        ]
      },
      {
        "type": "order",
        "title": [
          "Opening a web page",
          "Aprire una pagina web"
        ],
        "steps": [
          [
            "You type the URL and press Enter",
            "Scrivi l'URL e premi Invio"
          ],
          [
            "The browser looks up the server's IP address (DNS)",
            "Il browser cerca l'indirizzo IP del server (DNS)"
          ],
          [
            "The browser sends a request to the web server (HTTPS)",
            "Il browser invia una richiesta al server web (HTTPS)"
          ],
          [
            "The server sends back the HTML page",
            "Il server rimanda la pagina HTML"
          ],
          [
            "The browser draws the page on your screen",
            "Il browser disegna la pagina sullo schermo"
          ]
        ],
        "hint": [
          "The browser has to find the server before it can ask for the page.",
          "Il browser deve trovare il server prima di chiedergli la pagina."
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Did you hear?! I'm the Rumour Kappa, and I spread fake news faster than anyone can check it!</p>",
          "<p>Hai sentito?! Sono il Kappa delle Bufale, e diffondo notizie false più in fretta di quanto si possano verificare!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "Are the Internet and the Web the same thing?",
          "Internet e il Web sono la stessa cosa?"
        ],
        "a": [
          [
            "No: the Web is a service that runs on the Internet",
            "No: il Web è un servizio che funziona su Internet"
          ],
          [
            "Yes, exactly the same",
            "Sì, esattamente uguali"
          ],
          [
            "No: the Internet runs on the Web",
            "No: Internet funziona sul Web"
          ],
          [
            "The Web is a type of cable",
            "Il Web è un tipo di cavo"
          ]
        ],
        "why": [
          "Email and online games also use the Internet without being the Web.",
          "Anche e-mail e giochi online usano Internet senza essere il Web."
        ]
      },
      {
        "q": [
          "Who invented the World Wide Web?",
          "Chi ha inventato il World Wide Web?"
        ],
        "a": [
          [
            "Tim Berners-Lee, at CERN",
            "Tim Berners-Lee, al CERN"
          ],
          [
            "John von Neumann",
            "John von Neumann"
          ],
          [
            "Gordon Moore",
            "Gordon Moore"
          ],
          [
            "Nobody: it grew by itself",
            "Nessuno: è nato da solo"
          ]
        ],
        "why": [
          "He proposed it in 1989.",
          "Lo propose nel 1989."
        ]
      },
      {
        "q": [
          "In https://www.school-example.it/timetable.html, the domain is…",
          "In https://www.school-example.it/timetable.html, il dominio è…"
        ],
        "a": [
          [
            "www.school-example.it",
            "www.school-example.it"
          ],
          [
            "https://",
            "https://"
          ],
          [
            "/timetable.html",
            "/timetable.html"
          ],
          [
            ".html",
            ".html"
          ]
        ],
        "why": [
          "The domain is the site's name.",
          "Il dominio è il nome del sito."
        ]
      },
      {
        "q": [
          "What does the \"s\" in https mean for you?",
          "Cosa significa per te la \"s\" in https?"
        ],
        "a": [
          [
            "The connection is encrypted (secure)",
            "La connessione è cifrata (sicura)"
          ],
          [
            "The site is slow",
            "Il sito è lento"
          ],
          [
            "The site is for students",
            "Il sito è per studenti"
          ],
          [
            "The page is small",
            "La pagina è piccola"
          ]
        ],
        "why": [
          "Others can't read the data in transit.",
          "Altri non possono leggere i dati in viaggio."
        ]
      },
      {
        "q": [
          "Which is the best way to check information you found online?",
          "Qual è il modo migliore per verificare un'informazione trovata online?"
        ],
        "a": [
          [
            "Check the author and date, and confirm on other reliable sites",
            "Controllare autore e data e confermarla su altri siti affidabili"
          ],
          [
            "Believe it if it has many likes",
            "Crederci se ha molti mi piace"
          ],
          [
            "Share it quickly",
            "Condividerla subito"
          ],
          [
            "Believe the first result",
            "Credere al primo risultato"
          ]
        ],
        "why": [
          "Reliable sources and cross-checking beat popularity.",
          "Fonti affidabili e confronti valgono più della popolarità."
        ]
      },
      {
        "q": [
          "What language are web pages written in?",
          "In che linguaggio sono scritte le pagine web?"
        ],
        "a": [
          [
            "HTML",
            "HTML"
          ],
          [
            "ASCII",
            "ASCII"
          ],
          [
            "MP3",
            "MP3"
          ],
          [
            "GNSS",
            "GNSS"
          ]
        ],
        "why": [
          "HTML describes the page's structure.",
          "L'HTML descrive la struttura della pagina."
        ]
      }
    ]
  },
  {
    "id": "a5m3",
    "arc": 4,
    "sec": "5.5–5.6 + netiquette",
    "pages": "114–123",
    "hue": 300,
    "horns": 5,
    "eyes": 2,
    "title": [
      "Messenger Arts: Email, Social & Netiquette",
      "Arti del messaggero: e-mail, social e netiquette"
    ],
    "topic": [
      "Email, phishing, social networks, digital footprint, netiquette",
      "E-mail, phishing, social network, impronta digitale, netiquette"
    ],
    "demon": [
      "Phishing Hydra",
      "Idra del Phishing"
    ],
    "tech": [
      "Network Form · Third Technique: Shield of Netiquette",
      "Stile della Rete · Terza Tecnica: Scudo della Netiquette"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "email",
        "text": [
          "<p>An [[email address|indirizzo e-mail]] is <b>username @ domain</b>. Fields to know: To, Cc (copy), [[Bcc|Ccn]] (hidden copy), Subject and [[attachments|allegati]].</p><p>Write a clear subject and greet the person, especially when writing to teachers.</p>",
          "<p>Un [[email address|indirizzo e-mail]] è <b>nome utente @ dominio</b>. I campi da conoscere: A, Cc (copia), [[Bcc|Ccn]] (copia nascosta), Oggetto e [[attachments|allegati]].</p><p>Scrivi un oggetto chiaro e saluta la persona, soprattutto quando scrivi ai professori.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "phishing",
        "text": [
          "<p>[[Phishing|phishing]] is a fake message that pretends to come from a bank, shop or school to steal passwords or money. [[Spam|spam]] is unwanted mass email. Learn the warning signs.</p>",
          "<p>Il [[Phishing|phishing]] è un messaggio falso che finge di arrivare da una banca, un negozio o la scuola per rubare password o soldi. Lo [[Spam|spam]] è posta indesiderata inviata in massa. Impara i segnali di pericolo.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "netiquette",
        "text": [
          "<p>[[Social networks|social network]] connect people, but everything you post leaves a [[digital footprint|impronta digitale]]. Use privacy settings and think before you post.</p><p>[[Netiquette|netiquette]] is the set of good-manners rules for behaving online.</p>",
          "<p>I [[Social networks|social network]] mettono in contatto le persone, ma tutto ciò che pubblichi lascia un'[[digital footprint|impronta digitale]]. Usa le impostazioni della privacy e pensa prima di pubblicare.</p><p>La [[Netiquette|netiquette]] è l'insieme delle regole di buona educazione per comportarsi online.</p>"
        ]
      },
      {
        "type": "sort",
        "title": [
          "Good netiquette or not?",
          "Netiquette sì o no?"
        ],
        "cats": [
          [
            "Good netiquette",
            "Netiquette rispettata"
          ],
          [
            "Bad netiquette",
            "Netiquette violata"
          ]
        ],
        "items": [
          {
            "n": [
              "Writing a whole message in CAPITALS",
              "Scrivere un messaggio tutto in MAIUSCOLO"
            ],
            "i": "warn",
            "c": 1,
            "why": [
              "Capitals read as shouting.",
              "Il maiuscolo sembra urlare."
            ]
          },
          {
            "n": [
              "Asking a friend before posting a photo of them",
              "Chiedere a un'amica prima di pubblicare una sua foto"
            ],
            "i": "image",
            "c": 0,
            "why": [
              "Respect other people's privacy.",
              "Rispetta la privacy degli altri."
            ]
          },
          {
            "n": [
              "Forwarding a chain message to 50 people",
              "Inoltrare una catena a 50 persone"
            ],
            "i": "mail",
            "c": 1,
            "why": [
              "That's spam.",
              "È spam."
            ]
          },
          {
            "n": [
              "Writing a clear subject in an email to a teacher",
              "Scrivere un oggetto chiaro nell'e-mail al prof"
            ],
            "i": "mail",
            "c": 0,
            "why": [
              "Clear and polite.",
              "Chiaro ed educato."
            ]
          },
          {
            "n": [
              "Leaving a mean comment under a classmate's video",
              "Lasciare un commento cattivo sotto il video di un compagno"
            ],
            "i": "warn",
            "c": 1,
            "why": [
              "Offending people online is never OK, and can be cyberbullying.",
              "Offendere online non va mai bene, e può essere cyberbullismo."
            ]
          },
          {
            "n": [
              "Checking a news story before sharing it",
              "Verificare una notizia prima di condividerla"
            ],
            "i": "search",
            "c": 0,
            "why": [
              "Stops fake news spreading.",
              "Ferma la diffusione delle bufale."
            ]
          },
          {
            "n": [
              "Using Bcc for an email to many people who don't know each other",
              "Usare Ccn per un'e-mail a tante persone che non si conoscono"
            ],
            "i": "mail",
            "c": 0,
            "why": [
              "It protects everyone's addresses.",
              "Protegge gli indirizzi di tutti."
            ]
          },
          {
            "n": [
              "Sharing a friend's password as a joke",
              "Condividere per scherzo la password di un'amica"
            ],
            "i": "key",
            "c": 1,
            "why": [
              "Never share passwords, yours or others'.",
              "Mai condividere password, tue o di altri."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Click my link! Click it! I'm the Phishing Hydra. Every head sends a different fake message!</p>",
          "<p>Clicca il mio link! Cliccalo! Sono l'Idra del Phishing. Ogni testa manda un messaggio falso diverso!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "In hana@school-example.it, what comes after the @?",
          "In hana@school-example.it, cosa viene dopo la @?"
        ],
        "a": [
          [
            "The domain",
            "Il dominio"
          ],
          [
            "The password",
            "La password"
          ],
          [
            "The subject",
            "L'oggetto"
          ],
          [
            "The attachment",
            "L'allegato"
          ]
        ],
        "why": [
          "username @ domain.",
          "nome utente @ dominio."
        ]
      },
      {
        "q": [
          "What is Bcc (Ccn) used for?",
          "A cosa serve il campo Ccn (Bcc)?"
        ],
        "a": [
          [
            "Sending a copy without showing those addresses to others",
            "Inviare una copia senza mostrare quegli indirizzi agli altri"
          ],
          [
            "Sending faster",
            "Inviare più velocemente"
          ],
          [
            "Adding an attachment",
            "Aggiungere un allegato"
          ],
          [
            "Deleting the email",
            "Cancellare l'e-mail"
          ]
        ],
        "why": [
          "It protects people's privacy.",
          "Protegge la privacy delle persone."
        ]
      },
      {
        "q": [
          "An email says \"Your account will be closed! Send your password now!\" It is probably…",
          "Un'e-mail dice \"Il tuo account sarà chiuso! Invia subito la password!\" Probabilmente è…"
        ],
        "a": [
          [
            "Phishing",
            "Phishing"
          ],
          [
            "A real warning",
            "Un vero avviso"
          ],
          [
            "Netiquette",
            "Netiquette"
          ],
          [
            "A newsletter",
            "Una newsletter"
          ]
        ],
        "why": [
          "Urgency + asking for passwords = classic phishing.",
          "Urgenza + richiesta di password = phishing classico."
        ]
      },
      {
        "q": [
          "What is your digital footprint?",
          "Che cos'è la tua impronta digitale?"
        ],
        "a": [
          [
            "The trail of what you do and post online",
            "La traccia di ciò che fai e pubblichi online"
          ],
          [
            "Your fingerprint on the screen",
            "L'impronta del dito sullo schermo"
          ],
          [
            "Your computer's weight",
            "Il peso del tuo computer"
          ],
          [
            "A type of password",
            "Un tipo di password"
          ]
        ],
        "why": [
          "It can last for years.",
          "Può durare per anni."
        ]
      },
      {
        "q": [
          "Writing in ALL CAPITALS online means…",
          "Scrivere TUTTO IN MAIUSCOLO online significa…"
        ],
        "a": [
          [
            "Shouting",
            "Urlare"
          ],
          [
            "Being polite",
            "Essere educati"
          ],
          [
            "Writing faster",
            "Scrivere più veloce"
          ],
          [
            "Writing in code",
            "Scrivere in codice"
          ]
        ],
        "why": [
          "A basic netiquette rule.",
          "È una regola base della netiquette."
        ]
      },
      {
        "q": [
          "What is netiquette?",
          "Che cos'è la netiquette?"
        ],
        "a": [
          [
            "Good-manners rules for behaving online",
            "Le regole di buona educazione per comportarsi online"
          ],
          [
            "A network cable",
            "Un cavo di rete"
          ],
          [
            "An email program",
            "Un programma di posta"
          ],
          [
            "A social network",
            "Un social network"
          ]
        ],
        "why": [
          "Net + etiquette.",
          "Net (rete) + etiquette (galateo)."
        ]
      }
    ]
  },
  {
    "id": "a5m4",
    "arc": 4,
    "sec": "5.7 + final",
    "pages": "121–122",
    "hue": 275,
    "horns": 5,
    "eyes": 3,
    "boss": true,
    "title": [
      "The Connected World",
      "Il mondo connesso"
    ],
    "topic": [
      "5G, the Internet of Things, and the final battle",
      "5G, Internet delle cose e battaglia finale"
    ],
    "demon": [
      "Nullvoid, the Crash King",
      "Nullvoid, il Re del Crash"
    ],
    "tech": [
      "Final Form: Full System Burst",
      "Forma Finale: Esplosione di Sistema"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "iot",
        "text": [
          "<p>[[5G|5G]] is the fifth generation of mobile networks: much faster, with very low delay, and able to connect huge numbers of devices at once.</p><p>That makes the [[Internet of Things|Internet delle cose]] (IoT) possible: everyday objects with sensors that connect to the Internet, from smartwatches to thermostats to traffic lights.</p>",
          "<p>Il [[5G|5G]] è la quinta generazione delle reti mobili: molto più veloce, con un ritardo minimo e capace di collegare moltissimi dispositivi insieme.</p><p>Questo rende possibile l'[[Internet of Things|Internet delle cose]] (IoT): oggetti di tutti i giorni dotati di sensori e collegati a Internet, dagli smartwatch ai termostati ai semafori.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "boss",
        "text": [
          "<p>{name}… this is it. Nullvoid, the Crash King, is the source of every Glitch Demon. He will attack with everything: algorithms, binary, hardware, software, networks.</p><p>But you've trained for all of it. Remember: a computer works because all its parts work as one team. Go.</p>",
          "<p>{name}… ci siamo. Nullvoid, il Re del Crash, è l'origine di tutti i Demoni Glitch. Attaccherà con tutto: algoritmi, binario, hardware, software, reti.</p><p>Ma ti sei allenata per ognuno di questi. Ricorda: un computer funziona perché tutte le sue parti lavorano come una squadra. Vai.</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "What is the Internet of Things?",
          "Che cos'è l'Internet delle cose?"
        ],
        "a": [
          [
            "Everyday objects with sensors connected to the Internet",
            "Oggetti di tutti i giorni con sensori collegati a Internet"
          ],
          [
            "A list of websites",
            "Un elenco di siti web"
          ],
          [
            "A shop that sells computers",
            "Un negozio di computer"
          ],
          [
            "A type of cable",
            "Un tipo di cavo"
          ]
        ],
        "why": [
          "Smartwatches, smart thermostats, connected cars…",
          "Smartwatch, termostati smart, auto connesse…"
        ]
      },
      {
        "q": [
          "What does 5G improve?",
          "Cosa migliora il 5G?"
        ],
        "a": [
          [
            "Speed, lower delay, and more connected devices",
            "Velocità, ritardo minore e più dispositivi collegati"
          ],
          [
            "Screen colours",
            "I colori dello schermo"
          ],
          [
            "Battery size",
            "La dimensione della batteria"
          ],
          [
            "Keyboard layout",
            "La disposizione della tastiera"
          ]
        ],
        "why": [
          "5G = 5th generation mobile network.",
          "5G = rete mobile di quinta generazione."
        ]
      },
      {
        "q": [
          "An algorithm must be…",
          "Un algoritmo deve essere…"
        ],
        "a": [
          [
            "Finite and unambiguous",
            "Finito e non ambiguo"
          ],
          [
            "Long and secret",
            "Lungo e segreto"
          ],
          [
            "Written in English",
            "Scritto in inglese"
          ],
          [
            "Random",
            "Casuale"
          ]
        ],
        "why": [
          "Plus executable, general, deterministic.",
          "Più eseguibile, generale e deterministico."
        ]
      },
      {
        "q": [
          "What is binary 1010 in decimal?",
          "Quanto vale 1010 in binario in decimale?"
        ],
        "a": [
          [
            "10",
            "10"
          ],
          [
            "1010",
            "1010"
          ],
          [
            "5",
            "5"
          ],
          [
            "12",
            "12"
          ]
        ],
        "why": [
          "8 + 0 + 2 + 0 = 10.",
          "8 + 0 + 2 + 0 = 10."
        ]
      },
      {
        "q": [
          "Which code covers almost every language and emoji?",
          "Quale codifica comprende quasi tutte le lingue e le emoji?"
        ],
        "a": [
          [
            "Unicode",
            "Unicode"
          ],
          [
            "ASCII",
            "ASCII"
          ],
          [
            "RGB",
            "RGB"
          ],
          [
            "HTML",
            "HTML"
          ]
        ],
        "why": [
          "ASCII only has 128 characters.",
          "L'ASCII ha solo 128 caratteri."
        ]
      },
      {
        "q": [
          "MP3 and JPEG use…",
          "MP3 e JPEG usano…"
        ],
        "a": [
          [
            "Lossy compression",
            "Compressione con perdita"
          ],
          [
            "Lossless compression",
            "Compressione senza perdita"
          ],
          [
            "No compression",
            "Nessuna compressione"
          ],
          [
            "Hexadecimal only",
            "Solo esadecimale"
          ]
        ],
        "why": [
          "They drop details to save space.",
          "Eliminano dettagli per risparmiare spazio."
        ]
      },
      {
        "q": [
          "In von Neumann's design, programs are stored…",
          "Nello schema di von Neumann, i programmi sono conservati…"
        ],
        "a": [
          [
            "In memory, together with data",
            "In memoria, insieme ai dati"
          ],
          [
            "Inside the keyboard",
            "Nella tastiera"
          ],
          [
            "Only on paper",
            "Solo su carta"
          ],
          [
            "In the monitor",
            "Nel monitor"
          ]
        ],
        "why": [
          "The stored-program idea.",
          "È l'idea del programma memorizzato."
        ]
      },
      {
        "q": [
          "Your essay vanished after a power cut. Where was it?",
          "Il tema è sparito dopo un blackout. Dov'era?"
        ],
        "a": [
          [
            "Only in RAM",
            "Solo in RAM"
          ],
          [
            "On the SSD",
            "Sull'SSD"
          ],
          [
            "In ROM",
            "Nella ROM"
          ],
          [
            "In the cloud",
            "Nel cloud"
          ]
        ],
        "why": [
          "RAM is volatile.",
          "La RAM è volatile."
        ]
      },
      {
        "q": [
          "A program while it is running is called a…",
          "Un programma in esecuzione si chiama…"
        ],
        "a": [
          [
            "Process",
            "Processo"
          ],
          [
            "Driver",
            "Driver"
          ],
          [
            "Folder",
            "Cartella"
          ],
          [
            "Packet",
            "Pacchetto"
          ]
        ],
        "why": [
          "The OS manages processes.",
          "Il sistema operativo gestisce i processi."
        ]
      },
      {
        "q": [
          "Open source software means…",
          "Software open source significa…"
        ],
        "a": [
          [
            "Its code is public and can be changed",
            "Il codice è pubblico e modificabile"
          ],
          [
            "It is always paid",
            "È sempre a pagamento"
          ],
          [
            "It is a virus",
            "È un virus"
          ],
          [
            "It only works offline",
            "Funziona solo offline"
          ]
        ],
        "why": [
          "Linux and LibreOffice are examples.",
          "Linux e LibreOffice sono esempi."
        ]
      },
      {
        "q": [
          "On the Internet, messages travel as…",
          "Su Internet i messaggi viaggiano come…"
        ],
        "a": [
          [
            "Packets",
            "Pacchetti"
          ],
          [
            "Letters on paper",
            "Lettere di carta"
          ],
          [
            "Pixels",
            "Pixel"
          ],
          [
            "Processes",
            "Processi"
          ]
        ],
        "why": [
          "Packets are routed and reassembled.",
          "I pacchetti vengono instradati e ricomposti."
        ]
      },
      {
        "q": [
          "An email asking urgently for your password is…",
          "Un'e-mail che chiede urgentemente la tua password è…"
        ],
        "a": [
          [
            "Phishing",
            "Phishing"
          ],
          [
            "Netiquette",
            "Netiquette"
          ],
          [
            "A protocol",
            "Un protocollo"
          ],
          [
            "A driver",
            "Un driver"
          ]
        ],
        "why": [
          "Never give your password by email.",
          "Non dare mai la password via e-mail."
        ]
      }
    ]
  },
  {
    "id": "c6m1",
    "arc": 5,
    "sec": "6.1–6.2",
    "pages": "128–133",
    "hue": 350,
    "horns": 3,
    "eyes": 2,
    "title": [
      "Guarding the Gate: Threats & Passwords",
      "A guardia del portale: minacce e password"
    ],
    "topic": [
      "Information security, passwords, access control",
      "Sicurezza delle informazioni, password, controllo degli accessi"
    ],
    "demon": [
      "Password Leech",
      "Sanguisuga delle Password"
    ],
    "tech": [
      "Shield Form · First Technique: Passphrase Barrier",
      "Stile dello Scudo · Prima Tecnica: Barriera della Passphrase"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "cia",
        "text": [
          "<p>New arc, {name}: [[cybersecurity|sicurezza informatica]]. Protecting information means guarding three things: [[confidentiality|riservatezza]], [[integrity|integrità]] and [[availability|disponibilità]].</p><p>Threats can be accidents (a spilled drink, a lost phone), breakdowns, or attacks by criminals.</p>",
          "<p>Nuovo arco, {name}: la [[cybersecurity|sicurezza informatica]]. Proteggere le informazioni significa difendere tre cose: [[confidentiality|riservatezza]], [[integrity|integrità]] e [[availability|disponibilità]].</p><p>Le minacce possono essere incidenti (una bibita rovesciata, un telefono perso), guasti, oppure attacchi di criminali.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "pwdtips",
        "text": [
          "<p>[[Access control|controllo degli accessi]] decides who may enter. First you say who you are (username), then you prove it: [[authentication|autenticazione]]. Proof can be something you <b>know</b> (password), something you <b>have</b> (phone) or something you <b>are</b> (fingerprint).</p><p>Using two of them is [[two-factor authentication|autenticazione a due fattori]] (2FA).</p>",
          "<p>Il [[Access control|controllo degli accessi]] decide chi può entrare. Prima dici chi sei (nome utente), poi lo dimostri: è l'[[authentication|autenticazione]]. La prova può essere qualcosa che <b>sai</b> (password), che <b>hai</b> (telefono) o che <b>sei</b> (impronta digitale).</p><p>Usarne due insieme è l'[[two-factor authentication|autenticazione a due fattori]] (2FA).</p>"
        ]
      },
      {
        "who": "s",
        "vis": "pwdtips",
        "text": [
          "<p>Now forge a password strong enough to stop the Password Leech. <b>Don't type a password you really use!</b> This is just practice.</p>",
          "<p>Ora forgia una password abbastanza forte da fermare la Sanguisuga. <b>Non scrivere una password che usi davvero!</b> È solo un allenamento.</p>"
        ]
      },
      {
        "type": "pwd"
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Slurrrp… I'm the Password Leech. I suck up weak passwords like \"123456\" and \"qwerty\"!</p>",
          "<p>Slurrrp… Sono la Sanguisuga delle Password. Risucchio le password deboli come \"123456\" e \"qwerty\"!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "Which three things does information security protect?",
          "Quali tre cose protegge la sicurezza delle informazioni?"
        ],
        "a": [
          [
            "Confidentiality, integrity, availability",
            "Riservatezza, integrità, disponibilità"
          ],
          [
            "Speed, colour, size",
            "Velocità, colore, dimensione"
          ],
          [
            "Keyboard, mouse, screen",
            "Tastiera, mouse, schermo"
          ],
          [
            "RAM, ROM, cache",
            "RAM, ROM, cache"
          ]
        ],
        "why": [
          "Often called the CIA triad.",
          "Spesso chiamate \"triade RID\" (o CIA in inglese)."
        ]
      },
      {
        "q": [
          "Which password is strongest?",
          "Quale password è la più forte?"
        ],
        "a": [
          [
            "Ramen!Sotto-la-Luna7",
            "Ramen!Sotto-la-Luna7"
          ],
          [
            "123456",
            "123456"
          ],
          [
            "hana2011",
            "hana2011"
          ],
          [
            "password",
            "password"
          ]
        ],
        "why": [
          "Long, mixed, and not personal.",
          "Lunga, varia e non personale."
        ]
      },
      {
        "q": [
          "Two-factor authentication means…",
          "Autenticazione a due fattori significa…"
        ],
        "a": [
          [
            "Using two different proofs, e.g. password + code on your phone",
            "Usare due prove diverse, es. password + codice sul telefono"
          ],
          [
            "Typing the password twice",
            "Scrivere la password due volte"
          ],
          [
            "Having two accounts",
            "Avere due account"
          ],
          [
            "Using two keyboards",
            "Usare due tastiere"
          ]
        ],
        "why": [
          "Even if someone steals the password, they still need your phone.",
          "Anche se qualcuno ruba la password, gli serve ancora il tuo telefono."
        ]
      },
      {
        "q": [
          "A fingerprint used to unlock a phone is something you…",
          "L'impronta digitale per sbloccare il telefono è qualcosa che…"
        ],
        "a": [
          [
            "Are",
            "Sei"
          ],
          [
            "Know",
            "Sai"
          ],
          [
            "Have",
            "Hai"
          ],
          [
            "Forget",
            "Dimentichi"
          ]
        ],
        "why": [
          "Biometrics = something you are.",
          "La biometria = qualcosa che sei."
        ]
      },
      {
        "q": [
          "Why shouldn't you use the same password everywhere?",
          "Perché non usare la stessa password ovunque?"
        ],
        "a": [
          [
            "If one site is hacked, all your accounts are at risk",
            "Se un sito viene violato, tutti i tuoi account sono a rischio"
          ],
          [
            "It is too long",
            "È troppo lunga"
          ],
          [
            "Computers forget it",
            "I computer la dimenticano"
          ],
          [
            "It is illegal",
            "È illegale"
          ]
        ],
        "why": [
          "Attackers try leaked passwords on other sites.",
          "Gli attaccanti provano le password rubate su altri siti."
        ]
      },
      {
        "q": [
          "Which of these is a threat to data availability?",
          "Quale di questi minaccia la disponibilità dei dati?"
        ],
        "a": [
          [
            "A hard disk breaks and there is no backup",
            "Si rompe il disco e non c'è un backup"
          ],
          [
            "A long password",
            "Una password lunga"
          ],
          [
            "An antivirus update",
            "Un aggiornamento dell'antivirus"
          ],
          [
            "A locked screen",
            "Uno schermo bloccato"
          ]
        ],
        "why": [
          "The data exists but you can't reach it.",
          "I dati esistono ma non li puoi raggiungere."
        ]
      }
    ]
  },
  {
    "id": "c6m2",
    "arc": 5,
    "sec": "6.3–6.4 + CLIL",
    "pages": "134–139, 151",
    "hue": 120,
    "horns": 4,
    "eyes": 3,
    "title": [
      "The Malware Horde",
      "L'orda dei malware"
    ],
    "topic": [
      "Malware, antivirus, firewalls and network security",
      "Malware, antivirus, firewall e sicurezza delle reti"
    ],
    "demon": [
      "Ransom Oni",
      "Oni del Riscatto"
    ],
    "tech": [
      "Shield Form · Second Technique: Firewall Wall",
      "Stile dello Scudo · Seconda Tecnica: Muro Tagliafuoco"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "malware",
        "text": [
          "<p>[[Malware|malware]] (malicious software) is any program written to cause harm. Each type attacks differently.</p><p>The CLIL page (p. 151) tells the story of the 2017 ransomware attack that hit computers in 99 countries in a single day.</p>",
          "<p>Il [[Malware|malware]] (software malevolo) è qualsiasi programma scritto per fare danni. Ogni tipo attacca in modo diverso.</p><p>La pagina CLIL (p. 151) racconta l'attacco ransomware del 2017 che colpì computer in 99 Paesi in un solo giorno.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "netsec",
        "text": [
          "<p>Defences: an [[antivirus|antivirus]] scans files for known malware; a [[firewall|firewall]] filters network traffic; protected Wi-Fi uses [[encryption|cifratura]] (WPA2/WPA3); and [[updates|aggiornamenti]] close security holes.</p><p>The best defence is you: don't open strange attachments or install programs from unknown sites.</p>",
          "<p>Le difese: l'[[antivirus|antivirus]] cerca nei file i malware conosciuti; il [[firewall|firewall]] filtra il traffico di rete; il Wi-Fi protetto usa la [[encryption|cifratura]] (WPA2/WPA3); e gli [[updates|aggiornamenti]] chiudono le falle di sicurezza.</p><p>La difesa migliore sei tu: non aprire allegati strani e non installare programmi da siti sconosciuti.</p>"
        ]
      },
      {
        "type": "sort",
        "title": [
          "Name the malware",
          "Riconosci il malware"
        ],
        "cats": [
          [
            "Virus",
            "Virus"
          ],
          [
            "Worm",
            "Worm"
          ],
          [
            "Trojan",
            "Trojan"
          ],
          [
            "Ransomware",
            "Ransomware"
          ]
        ],
        "items": [
          {
            "n": [
              "Spreads when you open an infected file",
              "Si diffonde quando apri un file infetto"
            ],
            "i": "bug",
            "c": 0,
            "why": [
              "Viruses attach to files.",
              "I virus si attaccano ai file."
            ]
          },
          {
            "n": [
              "Copies itself from computer to computer over the network on its own",
              "Si copia da solo da un computer all'altro attraverso la rete"
            ],
            "i": "share",
            "c": 1,
            "why": [
              "Worms spread by themselves.",
              "I worm si diffondono da soli."
            ]
          },
          {
            "n": [
              "A \"free game\" that secretly installs malware",
              "Un \"gioco gratis\" che installa di nascosto un malware"
            ],
            "i": "gamepad",
            "c": 2,
            "why": [
              "Hidden inside something that looks useful.",
              "Nascosto dentro qualcosa che sembra utile."
            ]
          },
          {
            "n": [
              "\"Your files are encrypted. Pay to get them back.\"",
              "\"I tuoi file sono cifrati. Paga per riaverli.\""
            ],
            "i": "lock",
            "c": 3,
            "why": [
              "It holds your files for ransom.",
              "Tiene in ostaggio i tuoi file."
            ]
          },
          {
            "n": [
              "Infects a document and spreads when it is shared and opened",
              "Infetta un documento e si diffonde quando viene condiviso e aperto"
            ],
            "i": "file",
            "c": 0,
            "why": [
              "Needs a host file: virus.",
              "Ha bisogno di un file ospite: virus."
            ]
          },
          {
            "n": [
              "A fake \"video player update\" that opens a back door",
              "Un falso \"aggiornamento del lettore video\" che apre una porta nascosta"
            ],
            "i": "update",
            "c": 2,
            "why": [
              "Disguised as an update: Trojan.",
              "Travestito da aggiornamento: trojan."
            ]
          },
          {
            "n": [
              "Locks a hospital's computers and demands bitcoin",
              "Blocca i computer di un ospedale e chiede bitcoin"
            ],
            "i": "warn",
            "c": 3,
            "why": [
              "Classic ransomware.",
              "Ransomware classico."
            ]
          },
          {
            "n": [
              "Crawls through unpatched computers on a network by itself",
              "Si sposta da solo tra i computer non aggiornati di una rete"
            ],
            "i": "globe",
            "c": 1,
            "why": [
              "Self-spreading: worm.",
              "Si diffonde da solo: worm."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Pay up! I'm the Ransom Oni. I've locked every file in the academy. Want them back? That'll cost you!</p>",
          "<p>Paga! Sono l'Oni del Riscatto. Ho bloccato tutti i file dell'accademia. Li rivuoi? Ti costerà caro!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "What is malware?",
          "Che cos'è un malware?"
        ],
        "a": [
          [
            "Software written to cause harm",
            "Software scritto per fare danni"
          ],
          [
            "A broken mouse",
            "Un mouse rotto"
          ],
          [
            "A slow internet connection",
            "Una connessione lenta"
          ],
          [
            "A type of RAM",
            "Un tipo di RAM"
          ]
        ],
        "why": [
          "Malware = malicious software.",
          "Malware = software malevolo."
        ]
      },
      {
        "q": [
          "What does ransomware do?",
          "Cosa fa un ransomware?"
        ],
        "a": [
          [
            "Encrypts your files and demands money",
            "Cifra i tuoi file e chiede un riscatto"
          ],
          [
            "Shows ads",
            "Mostra pubblicità"
          ],
          [
            "Speeds up the PC",
            "Velocizza il PC"
          ],
          [
            "Backs up your files",
            "Fa il backup dei file"
          ]
        ],
        "why": [
          "Backups are the best protection against it.",
          "Il backup è la miglior protezione contro di esso."
        ]
      },
      {
        "q": [
          "A Trojan horse is…",
          "Un cavallo di Troia è…"
        ],
        "a": [
          [
            "Malware disguised as a useful program",
            "Un malware travestito da programma utile"
          ],
          [
            "A strong password",
            "Una password forte"
          ],
          [
            "A firewall",
            "Un firewall"
          ],
          [
            "A type of cable",
            "Un tipo di cavo"
          ]
        ],
        "why": [
          "Like the wooden horse in the Greek story.",
          "Come il cavallo di legno del mito greco."
        ]
      },
      {
        "q": [
          "What does a firewall do?",
          "Cosa fa un firewall?"
        ],
        "a": [
          [
            "Filters which network traffic can enter or leave",
            "Filtra il traffico di rete in entrata e in uscita"
          ],
          [
            "Cools the CPU",
            "Raffredda la CPU"
          ],
          [
            "Prints files",
            "Stampa i file"
          ],
          [
            "Makes passwords",
            "Crea password"
          ]
        ],
        "why": [
          "It acts like a guard at the network's gate.",
          "Fa da guardia all'ingresso della rete."
        ]
      },
      {
        "q": [
          "Why should you install updates?",
          "Perché installare gli aggiornamenti?"
        ],
        "a": [
          [
            "They fix security holes",
            "Chiudono le falle di sicurezza"
          ],
          [
            "They make the screen bigger",
            "Ingrandiscono lo schermo"
          ],
          [
            "They delete viruses' names",
            "Cancellano i nomi dei virus"
          ],
          [
            "They are optional decorations",
            "Sono solo decorazioni"
          ]
        ],
        "why": [
          "Many attacks use holes that were already fixed.",
          "Molti attacchi sfruttano falle già corrette."
        ]
      },
      {
        "q": [
          "Which Wi-Fi setting is safest at home?",
          "Quale impostazione Wi-Fi è più sicura a casa?"
        ],
        "a": [
          [
            "WPA2/WPA3 with a strong password",
            "WPA2/WPA3 con una password forte"
          ],
          [
            "No password",
            "Nessuna password"
          ],
          [
            "The router's default password",
            "La password predefinita del router"
          ],
          [
            "Your name as password",
            "Il tuo nome come password"
          ]
        ],
        "why": [
          "Encryption keeps neighbours and attackers out.",
          "La cifratura tiene fuori vicini e attaccanti."
        ]
      }
    ]
  },
  {
    "id": "c6m3",
    "arc": 5,
    "sec": "6.5–6.6 + VPN",
    "pages": "140–152",
    "hue": 200,
    "horns": 2,
    "eyes": 4,
    "title": [
      "Safe Paths: Browsing, Backup & VPN",
      "Sentieri sicuri: navigazione, backup e VPN"
    ],
    "topic": [
      "Safe browsing, backup, secure deletion, VPN, video surveillance debate",
      "Navigare sicuri, backup, cancellazione sicura, VPN, videosorveglianza"
    ],
    "demon": [
      "Data Devourer",
      "Divoratore di Dati"
    ],
    "tech": [
      "Shield Form · Third Technique: Triple Backup Seal",
      "Stile dello Scudo · Terza Tecnica: Sigillo del Triplo Backup"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "safeweb",
        "text": [
          "<p>Browsing safely: look for [[HTTPS|HTTPS]], be careful with [[cookies|cookie]], avoid logging in on open public Wi-Fi, and download only from official sources.</p>",
          "<p>Navigare sicuri: cerca l'[[HTTPS|HTTPS]], fai attenzione ai [[cookies|cookie]], evita di accedere agli account sul Wi-Fi pubblico aperto e scarica solo da fonti ufficiali.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "backup",
        "text": [
          "<p>A [[backup|backup]] is a copy of your data kept somewhere else. Hunters follow the 3-2-1 rule.</p><p>And when you throw away an old phone or disk: \"delete\" only hides files! [[Secure deletion|cancellazione sicura]] overwrites the data or does a factory reset with encryption so nobody can recover it.</p>",
          "<p>Il [[backup|backup]] è una copia dei dati conservata altrove. Le cacciatrici seguono la regola 3-2-1.</p><p>E quando butti un vecchio telefono o disco: \"elimina\" nasconde soltanto i file! La [[Secure deletion|cancellazione sicura]] sovrascrive i dati o ripristina il dispositivo con la cifratura, così nessuno può recuperarli.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "vpn",
        "text": [
          "<p>A [[VPN|VPN]] (Virtual Private Network) creates an encrypted tunnel between your device and a VPN server. Useful on public Wi-Fi.</p><p>Your book's real-world task is a debate on video surveillance: more safety, but less privacy. Think about both sides!</p>",
          "<p>Una [[VPN|VPN]] (rete privata virtuale) crea un tunnel cifrato tra il tuo dispositivo e un server VPN. Utile sul Wi-Fi pubblico.</p><p>Il compito di realtà del libro è un dibattito sulla videosorveglianza: più sicurezza, ma meno privacy. Pensa a entrambi i lati!</p>"
        ]
      },
      {
        "type": "sort",
        "title": [
          "Safe or risky?",
          "Sicuro o rischioso?"
        ],
        "cats": [
          [
            "Safe",
            "Sicuro"
          ],
          [
            "Risky",
            "Rischioso"
          ]
        ],
        "items": [
          {
            "n": [
              "Logging into your bank on café Wi-Fi without a VPN",
              "Accedere alla banca dal Wi-Fi del bar senza VPN"
            ],
            "i": "wifi",
            "c": 1,
            "why": [
              "Open networks can be spied on.",
              "Le reti aperte possono essere spiate."
            ]
          },
          {
            "n": [
              "Keeping a copy of your photos on an external disk and in the cloud",
              "Tenere le foto su un disco esterno e nel cloud"
            ],
            "i": "hdd",
            "c": 0,
            "why": [
              "That's the 3-2-1 rule.",
              "È la regola 3-2-1."
            ]
          },
          {
            "n": [
              "Downloading a game from a random site promising it free",
              "Scaricare un gioco da un sito qualsiasi che lo promette gratis"
            ],
            "i": "warn",
            "c": 1,
            "why": [
              "A common way to get Trojans.",
              "Un modo comune per prendersi un trojan."
            ]
          },
          {
            "n": [
              "Typing a password only on a page with https and the padlock",
              "Inserire la password solo su pagine con https e lucchetto"
            ],
            "i": "lock",
            "c": 0,
            "why": [
              "The connection is encrypted.",
              "La connessione è cifrata."
            ]
          },
          {
            "n": [
              "Selling an old phone after just deleting the photos",
              "Vendere un vecchio telefono dopo aver solo cancellato le foto"
            ],
            "i": "touch",
            "c": 1,
            "why": [
              "Deleted files can often be recovered. Do a full secure reset.",
              "I file cancellati spesso si recuperano. Fai un ripristino completo e sicuro."
            ]
          },
          {
            "n": [
              "Rejecting unnecessary cookies",
              "Rifiutare i cookie non necessari"
            ],
            "i": "eye",
            "c": 0,
            "why": [
              "Less tracking of what you do.",
              "Meno tracciamento di ciò che fai."
            ]
          },
          {
            "n": [
              "Clicking a pop-up saying \"Your PC is infected! Click here!\"",
              "Cliccare un pop-up che dice \"Il tuo PC è infetto! Clicca qui!\""
            ],
            "i": "warn",
            "c": 1,
            "why": [
              "Fake alerts are a classic trap.",
              "I falsi avvisi sono una trappola classica."
            ]
          },
          {
            "n": [
              "Turning on automatic updates",
              "Attivare gli aggiornamenti automatici"
            ],
            "i": "update",
            "c": 0,
            "why": [
              "Security holes get fixed quickly.",
              "Le falle vengono chiuse in fretta."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Crunch crunch… I'm the Data Devourer. No backup? Then your files are my dinner!</p>",
          "<p>Gnam gnam… Sono il Divoratore di Dati. Niente backup? Allora i tuoi file sono la mia cena!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "What is the 3-2-1 backup rule?",
          "Che cos'è la regola del backup 3-2-1?"
        ],
        "a": [
          [
            "3 copies, on 2 different media, 1 kept elsewhere",
            "3 copie, su 2 supporti diversi, 1 conservata altrove"
          ],
          [
            "Back up 3 times a day",
            "Fare il backup 3 volte al giorno"
          ],
          [
            "3 passwords for 2 accounts",
            "3 password per 2 account"
          ],
          [
            "Delete 3 files, keep 2",
            "Cancellare 3 file e tenerne 2"
          ]
        ],
        "why": [
          "If one copy is lost, the others survive.",
          "Se una copia si perde, le altre sopravvivono."
        ]
      },
      {
        "q": [
          "What does a VPN do?",
          "Cosa fa una VPN?"
        ],
        "a": [
          [
            "Creates an encrypted tunnel for your traffic",
            "Crea un tunnel cifrato per il tuo traffico"
          ],
          [
            "Makes the PC faster",
            "Rende il PC più veloce"
          ],
          [
            "Deletes viruses",
            "Cancella i virus"
          ],
          [
            "Prints securely",
            "Stampa in modo sicuro"
          ]
        ],
        "why": [
          "VPN = Virtual Private Network.",
          "VPN = rete privata virtuale."
        ]
      },
      {
        "q": [
          "When you \"delete\" a file normally…",
          "Quando \"elimini\" un file normalmente…"
        ],
        "a": [
          [
            "It can often still be recovered",
            "Spesso si può ancora recuperare"
          ],
          [
            "It is destroyed forever",
            "È distrutto per sempre"
          ],
          [
            "It is sent to the police",
            "Viene inviato alla polizia"
          ],
          [
            "It becomes a virus",
            "Diventa un virus"
          ]
        ],
        "why": [
          "Use secure deletion before giving a device away.",
          "Usa la cancellazione sicura prima di dare via un dispositivo."
        ]
      },
      {
        "q": [
          "What are cookies?",
          "Che cosa sono i cookie?"
        ],
        "a": [
          [
            "Small files websites save to remember you",
            "Piccoli file che i siti salvano per ricordarti"
          ],
          [
            "Viruses",
            "Virus"
          ],
          [
            "Passwords",
            "Password"
          ],
          [
            "Backups",
            "Backup"
          ]
        ],
        "why": [
          "Some are useful; others track you for advertising.",
          "Alcuni sono utili, altri ti tracciano per la pubblicità."
        ]
      },
      {
        "q": [
          "Why is public Wi-Fi risky?",
          "Perché il Wi-Fi pubblico è rischioso?"
        ],
        "a": [
          [
            "Others on the network may spy on unencrypted traffic",
            "Altri sulla rete possono spiare il traffico non cifrato"
          ],
          [
            "It is too fast",
            "È troppo veloce"
          ],
          [
            "It breaks phones",
            "Rompe i telefoni"
          ],
          [
            "It is always paid",
            "È sempre a pagamento"
          ]
        ],
        "why": [
          "Use HTTPS or a VPN.",
          "Usa HTTPS o una VPN."
        ]
      },
      {
        "q": [
          "Which is a sign of a safe login page?",
          "Quale è un segno di una pagina di accesso sicura?"
        ],
        "a": [
          [
            "https:// and a padlock, on the correct address",
            "https:// e il lucchetto, sull'indirizzo corretto"
          ],
          [
            "Lots of pop-ups",
            "Tanti pop-up"
          ],
          [
            "Spelling mistakes",
            "Errori di ortografia"
          ],
          [
            "A countdown timer",
            "Un conto alla rovescia"
          ]
        ],
        "why": [
          "Always check the domain too!",
          "Controlla sempre anche il dominio!"
        ]
      }
    ]
  },
  {
    "id": "c7m1",
    "arc": 6,
    "sec": "7.1–7.2",
    "pages": "154–160",
    "hue": 190,
    "horns": 2,
    "eyes": 2,
    "title": [
      "Castle in the Clouds",
      "Il castello tra le nuvole"
    ],
    "topic": [
      "Cloud services, sharing folders and files",
      "Servizi cloud, condivisione di cartelle e file"
    ],
    "demon": [
      "Overshare Sprite",
      "Folletto dello Strasharing"
    ],
    "tech": [
      "Sky Form · First Technique: Permission Lock",
      "Stile del Cielo · Prima Tecnica: Blocco dei Permessi"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "cloudmodels",
        "text": [
          "<p>Welcome to the second unit: working with applications. [[Cloud computing|cloud computing]] means using programs, storage and computing power on remote servers through the internet.</p><p>There are three main service models: [[SaaS|SaaS]], [[PaaS|PaaS]] and [[IaaS|IaaS]].</p>",
          "<p>Benvenuta nella seconda unità: lavorare con le applicazioni. Il [[Cloud computing|cloud computing]] significa usare programmi, spazio di archiviazione e potenza di calcolo su server remoti tramite internet.</p><p>Ci sono tre modelli principali: [[SaaS|SaaS]], [[PaaS|PaaS]] e [[IaaS|IaaS]].</p>"
        ]
      },
      {
        "who": "s",
        "vis": "share",
        "text": [
          "<p>In the cloud you can [[share|condividere]] files and folders. Choose the right [[permission|autorizzazione]] for each person: viewer, commenter or editor. A share link can be restricted to specific people or open to anyone who has it. Be careful with \"anyone with the link\"!</p>",
          "<p>Nel cloud puoi [[share|condividere]] file e cartelle. Scegli l'[[permission|autorizzazione]] giusta per ogni persona: visualizzatore, commentatore o editor. Un link di condivisione può essere limitato a persone precise o aperto a chiunque lo abbia. Attenzione a \"chiunque abbia il link\"!</p>"
        ]
      },
      {
        "type": "sort",
        "title": [
          "Which permission would you give?",
          "Quale autorizzazione daresti?"
        ],
        "cats": [
          [
            "Viewer",
            "Visualizzatore"
          ],
          [
            "Commenter",
            "Commentatore"
          ],
          [
            "Editor",
            "Editor"
          ]
        ],
        "items": [
          {
            "n": [
              "Your group partner who writes half the project",
              "La compagna di gruppo che scrive metà del progetto"
            ],
            "i": "user",
            "c": 2,
            "why": [
              "She needs to change the file.",
              "Deve poter modificare il file."
            ]
          },
          {
            "n": [
              "The teacher who should suggest corrections",
              "Il prof che deve suggerire correzioni"
            ],
            "i": "book",
            "c": 1,
            "why": [
              "Comments without changing your text.",
              "Commenta senza cambiare il testo."
            ]
          },
          {
            "n": [
              "Your grandparents who want to see holiday photos",
              "I nonni che vogliono vedere le foto delle vacanze"
            ],
            "i": "image",
            "c": 0,
            "why": [
              "They only need to look.",
              "Devono solo guardare."
            ]
          },
          {
            "n": [
              "A classmate checking your essay for typos and leaving notes",
              "Un compagno che controlla i refusi e lascia note"
            ],
            "i": "search",
            "c": 1,
            "why": [
              "Notes = comments.",
              "Note = commenti."
            ]
          },
          {
            "n": [
              "The whole class reading the final presentation",
              "Tutta la classe che legge la presentazione finale"
            ],
            "i": "slide",
            "c": 0,
            "why": [
              "Read-only is safest.",
              "Sola lettura è la scelta più sicura."
            ]
          },
          {
            "n": [
              "The co-author of your shared science report",
              "La coautrice della relazione di scienze condivisa"
            ],
            "i": "file",
            "c": 2,
            "why": [
              "Co-authors edit.",
              "I coautori modificano."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Hee hee! I'm the Overshare Sprite. I set every folder to \"anyone with the link can edit\"!</p>",
          "<p>Ih ih! Sono il Folletto dello Strasharing. Imposto ogni cartella su \"chiunque abbia il link può modificare\"!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "What is cloud computing?",
          "Che cos'è il cloud computing?"
        ],
        "a": [
          [
            "Using programs and storage on remote servers via the internet",
            "Usare programmi e archiviazione su server remoti via internet"
          ],
          [
            "Weather forecasting",
            "Le previsioni meteo"
          ],
          [
            "A type of monitor",
            "Un tipo di monitor"
          ],
          [
            "Programming in the rain",
            "Programmare sotto la pioggia"
          ]
        ],
        "why": [
          "The \"cloud\" is other people's data centres.",
          "La \"nuvola\" sono i data center di altri."
        ]
      },
      {
        "q": [
          "Webmail and online office suites are examples of…",
          "Webmail e suite per ufficio online sono esempi di…"
        ],
        "a": [
          [
            "SaaS",
            "SaaS"
          ],
          [
            "IaaS",
            "IaaS"
          ],
          [
            "Hardware",
            "Hardware"
          ],
          [
            "Firmware",
            "Firmware"
          ]
        ],
        "why": [
          "Ready-to-use software as a service.",
          "Software pronto all'uso come servizio."
        ]
      },
      {
        "q": [
          "A disadvantage of the cloud is…",
          "Uno svantaggio del cloud è…"
        ],
        "a": [
          [
            "You need an internet connection and trust a provider with your data",
            "Serve la connessione e devi affidare i dati a un fornitore"
          ],
          [
            "You can use it from any device",
            "Lo usi da qualsiasi dispositivo"
          ],
          [
            "Files are backed up",
            "I file sono salvati in copia"
          ],
          [
            "Easy sharing",
            "Condivisione facile"
          ]
        ],
        "why": [
          "The CLIL text (p. 171) asks: who does that server really serve?",
          "Il testo CLIL (p. 171) si chiede: chi serve davvero quel server?"
        ]
      },
      {
        "q": [
          "Your teacher should only read your work. Which permission?",
          "Il prof deve solo leggere il tuo lavoro. Quale autorizzazione?"
        ],
        "a": [
          [
            "Viewer",
            "Visualizzatore"
          ],
          [
            "Editor",
            "Editor"
          ],
          [
            "Owner",
            "Proprietario"
          ],
          [
            "Administrator",
            "Amministratore"
          ]
        ],
        "why": [
          "Give the minimum needed.",
          "Concedi il minimo necessario."
        ]
      },
      {
        "q": [
          "Why is \"anyone with the link can edit\" risky?",
          "Perché \"chiunque abbia il link può modificare\" è rischioso?"
        ],
        "a": [
          [
            "Anyone who gets the link could change or delete your work",
            "Chiunque riceva il link potrebbe modificare o cancellare il lavoro"
          ],
          [
            "It makes files bigger",
            "Rende i file più grandi"
          ],
          [
            "It slows the internet",
            "Rallenta internet"
          ],
          [
            "It is the safest option",
            "È l'opzione più sicura"
          ]
        ],
        "why": [
          "Links get forwarded.",
          "I link vengono inoltrati."
        ]
      },
      {
        "q": [
          "IaaS provides…",
          "L'IaaS fornisce…"
        ],
        "a": [
          [
            "Rented servers, storage and networks",
            "Server, archiviazione e reti in affitto"
          ],
          [
            "Ready-made games",
            "Giochi pronti"
          ],
          [
            "Printed manuals",
            "Manuali stampati"
          ],
          [
            "Only email",
            "Solo e-mail"
          ]
        ],
        "why": [
          "Infrastructure as a Service.",
          "Infrastruttura come servizio."
        ]
      }
    ]
  },
  {
    "id": "c7m2",
    "arc": 6,
    "sec": "7.3–7.4 + CLIL",
    "pages": "161–171",
    "hue": 30,
    "horns": 3,
    "eyes": 2,
    "title": [
      "Team Strike: Calendars & Video Calls",
      "Attacco di squadra: agende e videochiamate"
    ],
    "topic": [
      "Shared calendars, videoconferencing, environmental impact",
      "Agende condivise, videoconferenze, impatto ambientale"
    ],
    "demon": [
      "Mute-Button Gremlin",
      "Gremlin del Microfono"
    ],
    "tech": [
      "Sky Form · Second Technique: Team Sync",
      "Stile del Cielo · Seconda Tecnica: Sincronia di Squadra"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "calendar",
        "text": [
          "<p>An [[online calendar|agenda online]] keeps your appointments in the cloud and syncs them across your devices. You can [[invite|invitare]] people to an event and share a whole calendar with your group.</p>",
          "<p>Un'[[online calendar|agenda online]] tiene gli appuntamenti nel cloud e li sincronizza su tutti i dispositivi. Puoi [[invite|invitare]] persone a un evento e condividere un intero calendario con il gruppo.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "videocall",
        "text": [
          "<p>A [[videoconference|videoconferenza]] lets people meet with video and audio from anywhere. Hunters know the rules: mute when not speaking, share your screen to show work, use the chat to ask questions.</p><p>Your book also asks: are video calls good for the environment? Fewer trips, but data centres use energy too.</p>",
          "<p>La [[videoconference|videoconferenza]] permette di incontrarsi con audio e video da qualsiasi luogo. Le cacciatrici conoscono le regole: microfono spento quando non parli, condividi lo schermo per mostrare il lavoro, usa la chat per le domande.</p><p>Il libro chiede anche: le videochiamate fanno bene all'ambiente? Meno viaggi, ma anche i data center consumano energia.</p>"
        ]
      },
      {
        "type": "order",
        "title": [
          "Organise a group video call",
          "Organizza una videochiamata di gruppo"
        ],
        "steps": [
          [
            "Create an event in the shared calendar",
            "Crea un evento nell'agenda condivisa"
          ],
          [
            "Invite your group and add the video call link",
            "Invita il gruppo e aggiungi il link della videochiamata"
          ],
          [
            "Everyone accepts the invitation",
            "Tutti accettano l'invito"
          ],
          [
            "At the time, join the call and check camera and mic",
            "All'ora stabilita entra nella call e controlla webcam e microfono"
          ],
          [
            "Share your screen to present the work",
            "Condividi lo schermo per presentare il lavoro"
          ],
          [
            "Agree on next steps and end the call",
            "Decidete i prossimi passi e chiudete la call"
          ]
        ],
        "hint": [
          "You can't join a call nobody was invited to!",
          "Non puoi entrare in una call a cui nessuno è stato invitato!"
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>CAN YOU HEAR ME?! I'm the Mute-Button Gremlin. I unmute everyone at the worst moment!</p>",
          "<p>MI SENTITE?! Sono il Gremlin del Microfono. Riattivo il microfono a tutti nel momento peggiore!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "A big advantage of an online calendar is…",
          "Un grande vantaggio dell'agenda online è…"
        ],
        "a": [
          [
            "It syncs across devices and can be shared",
            "Si sincronizza su tutti i dispositivi e si può condividere"
          ],
          [
            "It works only on paper",
            "Funziona solo su carta"
          ],
          [
            "It never needs internet at all",
            "Non ha mai bisogno di internet"
          ],
          [
            "It deletes old events automatically forever",
            "Cancella per sempre gli eventi vecchi"
          ]
        ],
        "why": [
          "Everyone sees the same updated events.",
          "Tutti vedono gli stessi eventi aggiornati."
        ]
      },
      {
        "q": [
          "In a video call, when should you mute your microphone?",
          "In videochiamata, quando silenziare il microfono?"
        ],
        "a": [
          [
            "When you are not speaking",
            "Quando non stai parlando"
          ],
          [
            "Never",
            "Mai"
          ],
          [
            "Only when presenting",
            "Solo quando presenti"
          ],
          [
            "When others speak to you directly",
            "Quando gli altri ti parlano"
          ]
        ],
        "why": [
          "It avoids noise and echo.",
          "Evita rumori ed eco."
        ]
      },
      {
        "q": [
          "\"Share screen\" is used to…",
          "\"Condividi schermo\" serve a…"
        ],
        "a": [
          [
            "Show your document or slides to everyone",
            "Mostrare a tutti il tuo documento o le slide"
          ],
          [
            "Give away your computer",
            "Regalare il computer"
          ],
          [
            "Turn off the webcam",
            "Spegnere la webcam"
          ],
          [
            "Send a file by post",
            "Spedire un file per posta"
          ]
        ],
        "why": [
          "Everyone sees what is on your screen.",
          "Tutti vedono cosa c'è sul tuo schermo."
        ]
      },
      {
        "q": [
          "How can video calls help the environment?",
          "Come possono aiutare l'ambiente le videochiamate?"
        ],
        "a": [
          [
            "They avoid travel and its emissions",
            "Evitano viaggi e le loro emissioni"
          ],
          [
            "They plant trees",
            "Piantano alberi"
          ],
          [
            "They use no energy at all",
            "Non usano energia"
          ],
          [
            "They cool the planet",
            "Raffreddano il pianeta"
          ]
        ],
        "why": [
          "But servers still use electricity.",
          "Ma i server consumano comunque elettricità."
        ]
      },
      {
        "q": [
          "What is an invitation in an online calendar?",
          "Che cos'è un invito nell'agenda online?"
        ],
        "a": [
          [
            "A request for someone to join an event, which they can accept or decline",
            "Una richiesta di partecipare a un evento, che si può accettare o rifiutare"
          ],
          [
            "A virus",
            "Un virus"
          ],
          [
            "A password",
            "Una password"
          ],
          [
            "A printed card",
            "Un biglietto stampato"
          ]
        ],
        "why": [
          "The event appears in their calendar too.",
          "L'evento compare anche nel loro calendario."
        ]
      },
      {
        "q": [
          "Before an important video call you should…",
          "Prima di una videochiamata importante dovresti…"
        ],
        "a": [
          [
            "Test your camera, microphone and connection",
            "Provare webcam, microfono e connessione"
          ],
          [
            "Turn off the internet",
            "Spegnere internet"
          ],
          [
            "Uninstall the app",
            "Disinstallare l'app"
          ],
          [
            "Change your password",
            "Cambiare la password"
          ]
        ],
        "why": [
          "No surprises when it starts.",
          "Nessuna sorpresa all'inizio."
        ]
      }
    ]
  },
  {
    "id": "c8m1",
    "arc": 7,
    "sec": "8.1–8.2",
    "pages": "172–181",
    "hue": 260,
    "horns": 2,
    "eyes": 2,
    "title": [
      "The Scribe's Art: Word Processing",
      "L'arte dello scriba: videoscrittura"
    ],
    "topic": [
      "Word processors, formatting, saving and file formats",
      "Videoscrittura, formattazione, salvataggio e formati"
    ],
    "demon": [
      "Typo Tengu",
      "Tengu dei Refusi"
    ],
    "tech": [
      "Ink Form · First Technique: Perfect Format",
      "Stile dell'Inchiostro · Prima Tecnica: Formattazione Perfetta"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "wp",
        "text": [
          "<p>A [[word processor|programma di videoscrittura]] (Word, LibreOffice Writer, Google Docs) is for writing documents. Two separate jobs: <b>writing</b> the text and [[formatting|formattazione]] it: font, size, bold, italic, underline, colour, [[alignment|allineamento]] (left, centre, right, justified), spacing, lists and styles.</p>",
          "<p>Un [[word processor|programma di videoscrittura]] (Word, LibreOffice Writer, Google Documenti) serve a scrivere documenti. Due lavori diversi: <b>scrivere</b> il testo e [[formatting|formattarlo]]: carattere, dimensione, grassetto, corsivo, sottolineato, colore, [[alignment|allineamento]] (a sinistra, centrato, a destra, giustificato), interlinea, elenchi e stili.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "wpformats",
        "text": [
          "<p>Basic actions: save often, choose the right format, use copy/cut/paste, undo and find &amp; replace. Send a [[PDF|PDF]] when you want the document to look identical on every device.</p><p>Now format the document to match the model exactly.</p>",
          "<p>Le azioni di base: salva spesso, scegli il formato giusto, usa copia/taglia/incolla, annulla e trova e sostituisci. Invia un [[PDF|PDF]] quando vuoi che il documento appaia identico su ogni dispositivo.</p><p>Ora formatta il documento in modo che sia identico al modello.</p>"
        ]
      },
      {
        "type": "format"
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Teh quik brwon fox… I'm the Typo Tengu! I scramble your fonts and sprinkle typos everywhere!</p>",
          "<p>La vope verloce… Sono il Tengu dei Refusi! Mescolo i caratteri e spargo errori ovunque!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "Which is NOT formatting?",
          "Quale NON è formattazione?"
        ],
        "a": [
          [
            "Writing a new sentence",
            "Scrivere una nuova frase"
          ],
          [
            "Making a word bold",
            "Mettere una parola in grassetto"
          ],
          [
            "Centring a title",
            "Centrare un titolo"
          ],
          [
            "Changing the font size",
            "Cambiare la dimensione del carattere"
          ]
        ],
        "why": [
          "Formatting changes how text looks, not what it says.",
          "La formattazione cambia l'aspetto, non il contenuto."
        ]
      },
      {
        "q": [
          "\"Justified\" alignment means…",
          "L'allineamento \"giustificato\" significa…"
        ],
        "a": [
          [
            "Text lines up with both the left and right margins",
            "Il testo è allineato sia al margine sinistro sia al destro"
          ],
          [
            "Text is centred",
            "Il testo è centrato"
          ],
          [
            "Text is bold",
            "Il testo è in grassetto"
          ],
          [
            "Text is hidden",
            "Il testo è nascosto"
          ]
        ],
        "why": [
          "Like the columns of a newspaper.",
          "Come le colonne di un giornale."
        ]
      },
      {
        "q": [
          "Which format looks the same on every device?",
          "Quale formato appare uguale su ogni dispositivo?"
        ],
        "a": [
          [
            "PDF",
            "PDF"
          ],
          [
            "TXT",
            "TXT"
          ],
          [
            "MP3",
            "MP3"
          ],
          [
            "JPG of the text",
            "JPG del testo"
          ]
        ],
        "why": [
          "PDF keeps the layout fixed.",
          "Il PDF mantiene fissa l'impaginazione."
        ]
      },
      {
        "q": [
          "What does Ctrl+Z usually do?",
          "Cosa fa di solito Ctrl+Z?"
        ],
        "a": [
          [
            "Undo the last action",
            "Annulla l'ultima azione"
          ],
          [
            "Save",
            "Salva"
          ],
          [
            "Print",
            "Stampa"
          ],
          [
            "Close the program",
            "Chiude il programma"
          ]
        ],
        "why": [
          "Ctrl+Y (or Ctrl+Shift+Z) redoes.",
          "Ctrl+Y (o Ctrl+Maiusc+Z) ripristina."
        ]
      },
      {
        "q": [
          "You wrote \"Glich\" 20 times. The fastest fix is…",
          "Hai scritto \"Glich\" 20 volte. Il modo più veloce per correggere è…"
        ],
        "a": [
          [
            "Find and replace",
            "Trova e sostituisci"
          ],
          [
            "Retype the whole document",
            "Riscrivere tutto il documento"
          ],
          [
            "Print it and correct by hand",
            "Stamparlo e correggere a mano"
          ],
          [
            "Change the font",
            "Cambiare carattere"
          ]
        ],
        "why": [
          "One command changes every occurrence.",
          "Un solo comando cambia ogni occorrenza."
        ]
      },
      {
        "q": [
          ".odt is the format of…",
          ".odt è il formato di…"
        ],
        "a": [
          [
            "LibreOffice Writer documents",
            "I documenti di LibreOffice Writer"
          ],
          [
            "Spreadsheets only",
            "Solo fogli di calcolo"
          ],
          [
            "Music",
            "Musica"
          ],
          [
            "Videos",
            "Video"
          ]
        ],
        "why": [
          "OpenDocument Text, an open standard.",
          "OpenDocument Text, uno standard aperto."
        ]
      }
    ]
  },
  {
    "id": "c8m2",
    "arc": 7,
    "sec": "8.3–8.6 + health",
    "pages": "182–205",
    "hue": 160,
    "horns": 3,
    "eyes": 3,
    "title": [
      "Images, Tables & Healthy Habits",
      "Immagini, tabelle e buone abitudini"
    ],
    "topic": [
      "Images, tables, symbols, links, sharing and ergonomics",
      "Immagini, tabelle, simboli, link, condivisione ed ergonomia"
    ],
    "demon": [
      "Slouch Wraith",
      "Spettro della Postura"
    ],
    "tech": [
      "Ink Form · Second Technique: Layout Lotus",
      "Stile dell'Inchiostro · Seconda Tecnica: Loto dell'Impaginazione"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "wpextra",
        "text": [
          "<p>Documents get stronger with [[images|immagini]] (with [[text wrapping|disposizione del testo]]), [[tables|tabelle]], symbols and equations, and [[hyperlinks|collegamenti ipertestuali]]. When finished, you can export, print or send by email.</p>",
          "<p>I documenti diventano più efficaci con [[images|immagini]] (scegliendo la [[text wrapping|disposizione del testo]]), [[tables|tabelle]], simboli ed equazioni e [[hyperlinks|collegamenti ipertestuali]]. Alla fine puoi esportare, stampare o inviare per e-mail.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "ergo",
        "text": [
          "<p>Even hunters need to look after their bodies. [[Ergonomics|ergonomia]] is about using the computer without hurting your eyes, back or wrists: correct distance, screen height, posture, light, and regular breaks.</p>",
          "<p>Anche le cacciatrici devono prendersi cura del corpo. L'[[Ergonomics|ergonomia]] riguarda l'uso del computer senza affaticare occhi, schiena e polsi: distanza corretta, altezza dello schermo, postura, luce e pause regolari.</p>"
        ]
      },
      {
        "type": "sort",
        "title": [
          "Healthy habit or not?",
          "Buona abitudine o no?"
        ],
        "cats": [
          [
            "Healthy",
            "Corretta"
          ],
          [
            "Unhealthy",
            "Scorretta"
          ]
        ],
        "items": [
          {
            "n": [
              "Screen about an arm's length away",
              "Schermo a circa un braccio di distanza"
            ],
            "i": "monitor",
            "c": 0,
            "why": [
              "About 50–70 cm.",
              "Circa 50–70 cm."
            ]
          },
          {
            "n": [
              "Gaming for 4 hours without a break",
              "Giocare 4 ore senza pause"
            ],
            "i": "gamepad",
            "c": 1,
            "why": [
              "Take short breaks often.",
              "Fai spesso brevi pause."
            ]
          },
          {
            "n": [
              "Feet flat on the floor, back supported",
              "Piedi appoggiati a terra, schiena sostenuta"
            ],
            "i": "ergo",
            "c": 0,
            "why": [
              "Good posture.",
              "Postura corretta."
            ]
          },
          {
            "n": [
              "Laptop on your bed, neck bent down",
              "Portatile sul letto, collo piegato in giù"
            ],
            "i": "warn",
            "c": 1,
            "why": [
              "Strains your neck.",
              "Affatica il collo."
            ]
          },
          {
            "n": [
              "Every 20 minutes, look far away for 20 seconds",
              "Ogni 20 minuti guardare lontano per 20 secondi"
            ],
            "i": "eye",
            "c": 0,
            "why": [
              "Rests your eyes.",
              "Riposa gli occhi."
            ]
          },
          {
            "n": [
              "Window glare reflecting on the screen",
              "Riflessi della finestra sullo schermo"
            ],
            "i": "warn",
            "c": 1,
            "why": [
              "Glare tires your eyes. Move the screen sideways to the window.",
              "I riflessi stancano gli occhi. Metti lo schermo di lato alla finestra."
            ]
          },
          {
            "n": [
              "Wrists straight while typing",
              "Polsi dritti mentre scrivi"
            ],
            "i": "keyboard",
            "c": 0,
            "why": [
              "Avoids wrist pain.",
              "Evita dolori ai polsi."
            ]
          },
          {
            "n": [
              "Phone in bed right before sleeping",
              "Telefono a letto subito prima di dormire"
            ],
            "i": "touch",
            "c": 1,
            "why": [
              "Screens late at night can disturb sleep.",
              "Gli schermi di sera tardi possono disturbare il sonno."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Slouch… lower… lower… I'm the Slouch Wraith. Hunch over that screen for hours and you're mine!</p>",
          "<p>Piegati… più giù… più giù… Sono lo Spettro della Postura. Resta ingobbita sullo schermo per ore e sarai mia!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "\"Text wrapping\" decides…",
          "La \"disposizione del testo\" decide…"
        ],
        "a": [
          [
            "How text flows around an image",
            "Come il testo scorre attorno a un'immagine"
          ],
          [
            "The font size",
            "La dimensione del carattere"
          ],
          [
            "The page number",
            "Il numero di pagina"
          ],
          [
            "The file name",
            "Il nome del file"
          ]
        ],
        "why": [
          "Square, tight, behind, in front, in line…",
          "Incorniciato, ravvicinato, dietro, davanti, in linea…"
        ]
      },
      {
        "q": [
          "In a table, the box where a row and column meet is a…",
          "In una tabella, il riquadro dove si incontrano riga e colonna è una…"
        ],
        "a": [
          [
            "Cell",
            "Cella"
          ],
          [
            "Slide",
            "Slide"
          ],
          [
            "Folder",
            "Cartella"
          ],
          [
            "Pixel",
            "Pixel"
          ]
        ],
        "why": [
          "You can merge cells to make headers.",
          "Puoi unire celle per fare le intestazioni."
        ]
      },
      {
        "q": [
          "How far should your eyes be from the screen?",
          "A che distanza devono stare gli occhi dallo schermo?"
        ],
        "a": [
          [
            "About 50–70 cm",
            "Circa 50–70 cm"
          ],
          [
            "5 cm",
            "5 cm"
          ],
          [
            "3 metres",
            "3 metri"
          ],
          [
            "It doesn't matter",
            "Non importa"
          ]
        ],
        "why": [
          "About an arm's length.",
          "Circa la lunghezza di un braccio."
        ]
      },
      {
        "q": [
          "The top of the screen should be…",
          "Il bordo superiore dello schermo dovrebbe essere…"
        ],
        "a": [
          [
            "Around eye level",
            "All'altezza degli occhi"
          ],
          [
            "At your knees",
            "All'altezza delle ginocchia"
          ],
          [
            "On the ceiling",
            "Sul soffitto"
          ],
          [
            "Behind you",
            "Dietro di te"
          ]
        ],
        "why": [
          "So you don't bend your neck.",
          "Così non pieghi il collo."
        ]
      },
      {
        "q": [
          "A hyperlink in a document…",
          "Un collegamento ipertestuale in un documento…"
        ],
        "a": [
          [
            "Opens a web page or another part of the document when clicked",
            "Apre una pagina web o un'altra parte del documento quando ci clicchi"
          ],
          [
            "Makes text bold",
            "Mette il testo in grassetto"
          ],
          [
            "Deletes a page",
            "Cancella una pagina"
          ],
          [
            "Inserts a table",
            "Inserisce una tabella"
          ]
        ],
        "why": [
          "Links connect information.",
          "I link collegano le informazioni."
        ]
      },
      {
        "q": [
          "To write a fraction or a square root nicely, use…",
          "Per scrivere bene una frazione o una radice quadrata usa…"
        ],
        "a": [
          [
            "The equation editor",
            "L'editor di equazioni"
          ],
          [
            "Find and replace",
            "Trova e sostituisci"
          ],
          [
            "Spell check",
            "Il controllo ortografico"
          ],
          [
            "The printer",
            "La stampante"
          ]
        ],
        "why": [
          "It formats maths properly.",
          "Formatta correttamente la matematica."
        ]
      }
    ]
  },
  {
    "id": "c9m1",
    "arc": 8,
    "sec": "9.1–9.2",
    "pages": "206–216",
    "hue": 140,
    "horns": 2,
    "eyes": 2,
    "title": [
      "The Grid Dojo: Spreadsheet Basics",
      "Il dojo della griglia: basi del foglio di calcolo"
    ],
    "topic": [
      "Cells, formulas, a monthly budget and charts",
      "Celle, formule, un budget mensile e grafici"
    ],
    "demon": [
      "Miscount Mimic",
      "Mimic del Conto Sbagliato"
    ],
    "tech": [
      "Grid Form · First Technique: SUM Strike",
      "Stile della Griglia · Prima Tecnica: Colpo SOMMA"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "sheetvis",
        "text": [
          "<p>A [[spreadsheet|foglio di calcolo]] (Excel, LibreOffice Calc, Google Sheets) is a grid of [[cells|celle]]. Each cell has an [[address|indirizzo]]: column letter + row number, like B3.</p><p>A cell can hold text, a number, or a [[formula|formula]], which always starts with <b>=</b>. When a number changes, every formula updates by itself.</p>",
          "<p>Un [[spreadsheet|foglio di calcolo]] (Excel, LibreOffice Calc, Fogli Google) è una griglia di [[cells|celle]]. Ogni cella ha un [[address|indirizzo]]: lettera della colonna + numero della riga, come B3.</p><p>Una cella può contenere testo, un numero o una [[formula|formula]], che inizia sempre con <b>=</b>. Quando un numero cambia, tutte le formule si aggiornano da sole.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "charts",
        "text": [
          "<p>Spreadsheets also make [[charts|grafici]]. Pick the right one: bar charts compare, pie charts show parts of a whole, line charts show change over time.</p><p>Now build your monthly budget. Type real formulas: <b>=SUM(B2:B5)</b> works, and so does the Italian <b>=SOMMA(B2:B5)</b>.</p>",
          "<p>I fogli di calcolo creano anche [[charts|grafici]]. Scegli quello giusto: l'istogramma confronta, la torta mostra le parti di un intero, il grafico a linee mostra l'andamento nel tempo.</p><p>Ora costruisci il tuo budget mensile. Scrivi formule vere: funziona <b>=SOMMA(B2:B5)</b> e anche l'inglese <b>=SUM(B2:B5)</b>.</p>"
        ]
      },
      {
        "type": "sheet",
        "set": "budget"
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Two plus two is… five! I'm the Miscount Mimic. I sneak wrong numbers into every bill!</p>",
          "<p>Due più due fa… cinque! Sono il Mimic del Conto Sbagliato. Infilo numeri sbagliati in ogni conto!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "What is cell C4?",
          "Che cos'è la cella C4?"
        ],
        "a": [
          [
            "Column C, row 4",
            "Colonna C, riga 4"
          ],
          [
            "Row C, column 4",
            "Riga C, colonna 4"
          ],
          [
            "The 34th cell",
            "La 34ª cella"
          ],
          [
            "A chart",
            "Un grafico"
          ]
        ],
        "why": [
          "Letter = column, number = row.",
          "Lettera = colonna, numero = riga."
        ]
      },
      {
        "q": [
          "Every formula starts with…",
          "Ogni formula inizia con…"
        ],
        "a": [
          [
            "=",
            "="
          ],
          [
            "#",
            "#"
          ],
          [
            "@",
            "@"
          ],
          [
            "?",
            "?"
          ]
        ],
        "why": [
          "Without =, it is just text.",
          "Senza =, è solo testo."
        ]
      },
      {
        "q": [
          "What does =SUM(B2:B5) calculate?",
          "Cosa calcola =SOMMA(B2:B5)?"
        ],
        "a": [
          [
            "The total of B2, B3, B4 and B5",
            "Il totale di B2, B3, B4 e B5"
          ],
          [
            "B2 plus B5 only",
            "Solo B2 più B5"
          ],
          [
            "The average",
            "La media"
          ],
          [
            "The number of cells",
            "Il numero di celle"
          ]
        ],
        "why": [
          "B2:B5 is a range: from B2 to B5.",
          "B2:B5 è un intervallo: da B2 a B5."
        ]
      },
      {
        "q": [
          "To show how you spend your money as parts of the total, use a…",
          "Per mostrare come spendi i soldi come parti del totale usa un grafico…"
        ],
        "a": [
          [
            "Pie chart",
            "A torta"
          ],
          [
            "Line chart",
            "A linee"
          ],
          [
            "Scatter plot",
            "A dispersione"
          ],
          [
            "No chart",
            "Nessun grafico"
          ]
        ],
        "why": [
          "Pie = parts of a whole.",
          "Torta = parti di un intero."
        ]
      },
      {
        "q": [
          "You change B3 from 20 to 25. What happens to the total formula?",
          "Cambi B3 da 20 a 25. Cosa succede alla formula del totale?"
        ],
        "a": [
          [
            "It updates automatically",
            "Si aggiorna automaticamente"
          ],
          [
            "It must be retyped",
            "Va riscritta"
          ],
          [
            "It is deleted",
            "Viene cancellata"
          ],
          [
            "It shows an error",
            "Mostra un errore"
          ]
        ],
        "why": [
          "That's the power of spreadsheets.",
          "È la forza dei fogli di calcolo."
        ]
      },
      {
        "q": [
          "To show your height changing over the years, use a…",
          "Per mostrare come cambia la tua altezza negli anni usa un grafico…"
        ],
        "a": [
          [
            "Line chart",
            "A linee"
          ],
          [
            "Pie chart",
            "A torta"
          ],
          [
            "Table only",
            "Solo una tabella"
          ],
          [
            "Word cloud",
            "Nuvola di parole"
          ]
        ],
        "why": [
          "Line = change over time.",
          "Linee = andamento nel tempo."
        ]
      }
    ]
  },
  {
    "id": "c9m2",
    "arc": 8,
    "sec": "9.3–9.4",
    "pages": "217–224",
    "hue": 20,
    "horns": 3,
    "eyes": 2,
    "title": [
      "Fill Technique: Relative & Absolute",
      "Tecnica del riempimento: relativi e assoluti"
    ],
    "topic": [
      "Formulas, autofill, sorting, absolute references",
      "Formule, riempimento automatico, ordinamenti, riferimenti assoluti"
    ],
    "demon": [
      "Drift Djinn",
      "Djinn della Deriva"
    ],
    "tech": [
      "Grid Form · Second Technique: Dollar Lock",
      "Stile della Griglia · Seconda Tecnica: Blocco del Dollaro"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "autofill",
        "text": [
          "<p>Write a formula once, then drag the [[fill handle|quadratino di riempimento]] to copy it down. The references change by themselves: these are [[relative references|riferimenti relativi]].</p><p>Sometimes a cell must NOT move, like a discount rate. Lock it with dollar signs: <b>$B$10</b> is an [[absolute reference|riferimento assoluto]].</p>",
          "<p>Scrivi una formula una volta, poi trascina il [[fill handle|quadratino di riempimento]] per copiarla in basso. I riferimenti cambiano da soli: sono [[relative references|riferimenti relativi]].</p><p>A volte una cella NON deve muoversi, come la percentuale di sconto. Bloccala con il dollaro: <b>$B$10</b> è un [[absolute reference|riferimento assoluto]].</p>"
        ]
      },
      {
        "who": "s",
        "vis": "sheetvis",
        "text": [
          "<p>You can also [[sort|ordinare]] data, for example the world's tallest skyscrapers from highest to lowest. Select the whole table first, so each row stays together!</p><p>Now: convert temperatures from Celsius to Fahrenheit (°F = °C × 9/5 + 32), then apply a discount with an absolute reference.</p>",
          "<p>Puoi anche [[sort|ordinare]] i dati, per esempio i grattacieli più alti del mondo dal più alto al più basso. Seleziona prima tutta la tabella, così ogni riga resta unita!</p><p>Ora: converti le temperature da Celsius a Fahrenheit (°F = °C × 9/5 + 32), poi applica uno sconto con un riferimento assoluto.</p>"
        ]
      },
      {
        "type": "sheet",
        "set": "temp"
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Wheee! I'm the Drift Djinn. Copy a formula and I'll make every reference slide away!</p>",
          "<p>Uiii! Sono il Djinn della Deriva. Copia una formula e farò scivolare via ogni riferimento!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "You copy =A2*2 from B2 down to B3. It becomes…",
          "Copi =A2*2 da B2 a B3. Diventa…"
        ],
        "a": [
          [
            "=A3*2",
            "=A3*2"
          ],
          [
            "=A2*2",
            "=A2*2"
          ],
          [
            "=B3*2",
            "=B3*2"
          ],
          [
            "=A2*3",
            "=A2*3"
          ]
        ],
        "why": [
          "Relative references move with the formula.",
          "I riferimenti relativi si spostano con la formula."
        ]
      },
      {
        "q": [
          "What does the $ in $B$10 do?",
          "A cosa serve il $ in $B$10?"
        ],
        "a": [
          [
            "Locks the reference so it doesn't change when copied",
            "Blocca il riferimento così non cambia quando copi"
          ],
          [
            "Formats as euros",
            "Formatta in euro"
          ],
          [
            "Makes it bold",
            "Lo mette in grassetto"
          ],
          [
            "Deletes the cell",
            "Cancella la cella"
          ]
        ],
        "why": [
          "$ = absolute reference.",
          "$ = riferimento assoluto."
        ]
      },
      {
        "q": [
          "Which formula converts °C in A2 to °F?",
          "Quale formula converte i °C in A2 in °F?"
        ],
        "a": [
          [
            "=A2*9/5+32",
            "=A2*9/5+32"
          ],
          [
            "=A2+32*9/5",
            "=A2+32*9/5"
          ],
          [
            "=A2/9*5-32",
            "=A2/9*5-32"
          ],
          [
            "=9/5+32",
            "=9/5+32"
          ]
        ],
        "why": [
          "Multiply first, then add 32.",
          "Prima moltiplica, poi aggiungi 32."
        ]
      },
      {
        "q": [
          "Why select the whole table before sorting?",
          "Perché selezionare tutta la tabella prima di ordinare?"
        ],
        "a": [
          [
            "So each row's data stays together",
            "Così i dati di ogni riga restano uniti"
          ],
          [
            "To make it faster",
            "Per fare prima"
          ],
          [
            "To change the font",
            "Per cambiare carattere"
          ],
          [
            "It isn't necessary",
            "Non è necessario"
          ]
        ],
        "why": [
          "Otherwise names and heights get mixed up.",
          "Altrimenti nomi e altezze si mescolano."
        ]
      },
      {
        "q": [
          "The fill handle is used to…",
          "Il quadratino di riempimento serve a…"
        ],
        "a": [
          [
            "Copy a formula or series to nearby cells",
            "Copiare una formula o una serie nelle celle vicine"
          ],
          [
            "Delete rows",
            "Cancellare righe"
          ],
          [
            "Print",
            "Stampare"
          ],
          [
            "Insert a chart",
            "Inserire un grafico"
          ]
        ],
        "why": [
          "It also continues series like 1, 2, 3… or Mon, Tue…",
          "Continua anche le serie come 1, 2, 3… o lun, mar…"
        ]
      },
      {
        "q": [
          "In =A5*$C$1, which part changes when copied down?",
          "In =A5*$C$1, quale parte cambia copiando in basso?"
        ],
        "a": [
          [
            "A5",
            "A5"
          ],
          [
            "$C$1",
            "$C$1"
          ],
          [
            "Both",
            "Entrambe"
          ],
          [
            "Neither",
            "Nessuna"
          ]
        ],
        "why": [
          "Only the relative one moves.",
          "Si sposta solo quello relativo."
        ]
      }
    ]
  },
  {
    "id": "c9m3",
    "arc": 8,
    "sec": "9.5–9.7 + CLIL",
    "pages": "225–243",
    "hue": 300,
    "horns": 4,
    "eyes": 2,
    "title": [
      "Function Mastery: IF, Logic & What-If",
      "Maestria delle funzioni: SE, logica e what-if"
    ],
    "topic": [
      "Built-in functions, logical operators, binary conversion, simulations, Gini index",
      "Funzioni predefinite, operatori logici, conversioni binarie, simulazioni, indice di Gini"
    ],
    "demon": [
      "Paradox Kitsune",
      "Kitsune del Paradosso"
    ],
    "tech": [
      "Grid Form · Third Technique: IF-Branch Blade",
      "Stile della Griglia · Terza Tecnica: Lama del SE"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "sheetfn",
        "text": [
          "<p>Spreadsheets have hundreds of built-in [[functions|funzioni]]. The most powerful for hunters: [[IF|SE]], which chooses between two results depending on a condition, and the logical operators [[AND|E]] and [[OR|O]].</p><p>Italian Excel and LibreOffice use <b>;</b> between arguments: =SE(B2>=6;\"OK\";\"NO\"). English versions often use a comma.</p>",
          "<p>I fogli di calcolo hanno centinaia di [[functions|funzioni]] predefinite. Le più potenti: [[IF|SE]], che sceglie tra due risultati a seconda di una condizione, e gli operatori logici [[AND|E]] e [[OR|O]].</p><p>Excel e LibreOffice in italiano usano <b>;</b> tra gli argomenti: =SE(B2>=6;\"OK\";\"NO\").</p>"
        ]
      },
      {
        "who": "s",
        "vis": "sheetfn",
        "text": [
          "<p>With formulas you can build [[simulations|simulazioni]], like a population that grows each year, and ask \"[[what if|what if]]?\": change one input and see what happens.</p><p>Your book also uses a spreadsheet to compute the [[Gini index|indice di Gini]], which measures inequality.</p><p>Now: an IF that works for any grade, and the discriminant of a 2nd-degree equation (Δ = b² − 4ac).</p>",
          "<p>Con le formule puoi costruire [[simulations|simulazioni]], come una popolazione che cresce ogni anno, e chiederti \"[[what if|e se…?]]\": cambi un dato e vedi cosa succede.</p><p>Il libro usa il foglio di calcolo anche per calcolare l'[[Gini index|indice di Gini]], che misura la disuguaglianza.</p><p>Ora: una funzione SE che funzioni per qualsiasi voto, e il discriminante di un'equazione di 2° grado (Δ = b² − 4ac).</p>"
        ]
      },
      {
        "type": "sheet",
        "set": "logic"
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>If true then false, if false then true… I'm the Paradox Kitsune! Your conditions will tie themselves in knots!</p>",
          "<p>Se vero allora falso, se falso allora vero… Sono la Kitsune del Paradosso! Le tue condizioni si annoderanno!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "What does =IF(B2>=6;\"OK\";\"NO\") show if B2 is 5?",
          "Cosa mostra =SE(B2>=6;\"OK\";\"NO\") se B2 vale 5?"
        ],
        "a": [
          [
            "NO",
            "NO"
          ],
          [
            "OK",
            "OK"
          ],
          [
            "5",
            "5"
          ],
          [
            "An error",
            "Un errore"
          ]
        ],
        "why": [
          "5 ≥ 6 is false, so the second result.",
          "5 ≥ 6 è falso, quindi il secondo risultato."
        ]
      },
      {
        "q": [
          "=AND(A1>0;B1>0) is TRUE when…",
          "=E(A1>0;B1>0) è VERO quando…"
        ],
        "a": [
          [
            "Both A1 and B1 are greater than 0",
            "Sia A1 sia B1 sono maggiori di 0"
          ],
          [
            "At least one is greater than 0",
            "Almeno uno è maggiore di 0"
          ],
          [
            "Both are 0",
            "Entrambi valgono 0"
          ],
          [
            "Never",
            "Mai"
          ]
        ],
        "why": [
          "AND needs every condition true.",
          "E richiede che tutte le condizioni siano vere."
        ]
      },
      {
        "q": [
          "=OR(A1>0;B1>0) is TRUE when…",
          "=O(A1>0;B1>0) è VERO quando…"
        ],
        "a": [
          [
            "At least one of them is greater than 0",
            "Almeno uno dei due è maggiore di 0"
          ],
          [
            "Both are negative",
            "Entrambi sono negativi"
          ],
          [
            "Both are exactly 0",
            "Entrambi sono 0"
          ],
          [
            "Never",
            "Mai"
          ]
        ],
        "why": [
          "OR needs just one true condition.",
          "O richiede almeno una condizione vera."
        ]
      },
      {
        "q": [
          "What is a \"what-if\" analysis?",
          "Che cos'è un'analisi \"what if\"?"
        ],
        "a": [
          [
            "Changing an input to see how the results change",
            "Cambiare un dato per vedere come cambiano i risultati"
          ],
          [
            "Deleting the data",
            "Cancellare i dati"
          ],
          [
            "Printing a chart",
            "Stampare un grafico"
          ],
          [
            "Asking a teacher",
            "Chiedere al prof"
          ]
        ],
        "why": [
          "Great for simulations and planning.",
          "Utile per simulazioni e previsioni."
        ]
      },
      {
        "q": [
          "A Gini index of 0 means…",
          "Un indice di Gini pari a 0 significa…"
        ],
        "a": [
          [
            "Perfect equality: everyone has the same",
            "Uguaglianza perfetta: tutti hanno lo stesso"
          ],
          [
            "One person has everything",
            "Una persona ha tutto"
          ],
          [
            "There is no data",
            "Non ci sono dati"
          ],
          [
            "The formula is wrong",
            "La formula è sbagliata"
          ]
        ],
        "why": [
          "1 = maximum inequality.",
          "1 = massima disuguaglianza."
        ]
      },
      {
        "q": [
          "Which formula gives the discriminant if a, b, c are in A2, B2, C2?",
          "Quale formula dà il discriminante se a, b, c sono in A2, B2, C2?"
        ],
        "a": [
          [
            "=B2^2-4*A2*C2",
            "=B2^2-4*A2*C2"
          ],
          [
            "=A2^2-4*B2*C2",
            "=A2^2-4*B2*C2"
          ],
          [
            "=B2*2-4+A2+C2",
            "=B2*2-4+A2+C2"
          ],
          [
            "=SUM(A2:C2)",
            "=SOMMA(A2:C2)"
          ]
        ],
        "why": [
          "Δ = b² − 4ac; ^ means \"to the power of\".",
          "Δ = b² − 4ac; ^ significa \"elevato a\"."
        ]
      }
    ]
  },
  {
    "id": "c10m1",
    "arc": 9,
    "sec": "10.1–10.3",
    "pages": "244–256",
    "hue": 40,
    "horns": 2,
    "eyes": 3,
    "title": [
      "Stage Craft: Designing Slides",
      "Arte scenica: progettare le slide"
    ],
    "topic": [
      "Presentation apps, text, images, drawings and diagrams",
      "App per presentazioni, testo, immagini, disegni e schemi"
    ],
    "demon": [
      "Wall-of-Text Ogre",
      "Orco del Muro di Testo"
    ],
    "tech": [
      "Stage Form · First Technique: Clarity Flash",
      "Stile della Scena · Prima Tecnica: Lampo di Chiarezza"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "slides",
        "text": [
          "<p>[[Presentation software|software per presentazioni]] (PowerPoint, Impress, Google Slides, Keynote) builds a series of [[slides|diapositive]] to support a talk. Slides help the audience; they don't replace you.</p><p>Which slide works better?</p>",
          "<p>Il [[Presentation software|software per presentazioni]] (PowerPoint, Impress, Presentazioni Google, Keynote) crea una serie di [[slides|diapositive]] a supporto di un discorso. Le slide aiutano il pubblico, non ti sostituiscono.</p><p>Quale slide funziona meglio?</p>"
        ]
      },
      {
        "who": "s",
        "vis": "slidetips",
        "text": [
          "<p>Golden rules: few words, big readable fonts, strong [[contrast|contrasto]], one consistent [[theme|tema]], images that help explain, and [[diagrams|schemi]] built from shapes and arrows.</p>",
          "<p>Regole d'oro: poche parole, caratteri grandi e leggibili, forte [[contrast|contrasto]], un [[theme|tema]] coerente, immagini che aiutano a capire e [[diagrams|schemi]] fatti di forme e frecce.</p>"
        ]
      },
      {
        "type": "sort",
        "title": [
          "Good slide practice?",
          "Buona pratica per le slide?"
        ],
        "cats": [
          [
            "Do it",
            "Fallo"
          ],
          [
            "Avoid it",
            "Evitalo"
          ]
        ],
        "items": [
          {
            "n": [
              "Reading every word from the slide",
              "Leggere ogni parola dalla slide"
            ],
            "i": "slide",
            "c": 1,
            "why": [
              "Talk to the audience instead.",
              "Parla al pubblico."
            ]
          },
          {
            "n": [
              "One idea per slide with a clear title",
              "Un'idea per slide con un titolo chiaro"
            ],
            "i": "slide",
            "c": 0,
            "why": [
              "Easy to follow.",
              "Facile da seguire."
            ]
          },
          {
            "n": [
              "Yellow text on a white background",
              "Testo giallo su sfondo bianco"
            ],
            "i": "eye",
            "c": 1,
            "why": [
              "Too little contrast.",
              "Contrasto troppo basso."
            ]
          },
          {
            "n": [
              "A diagram instead of a long paragraph",
              "Uno schema invece di un lungo paragrafo"
            ],
            "i": "flow",
            "c": 0,
            "why": [
              "Pictures explain faster.",
              "Le immagini spiegano più in fretta."
            ]
          },
          {
            "n": [
              "Five different fonts and ten colours",
              "Cinque caratteri diversi e dieci colori"
            ],
            "i": "warn",
            "c": 1,
            "why": [
              "Keep one consistent theme.",
              "Mantieni un tema coerente."
            ]
          },
          {
            "n": [
              "Citing where your images come from",
              "Citare la fonte delle immagini"
            ],
            "i": "image",
            "c": 0,
            "why": [
              "Respect copyright.",
              "Rispetta il diritto d'autore."
            ]
          },
          {
            "n": [
              "Font size 10 for the main text",
              "Carattere di dimensione 10 per il testo principale"
            ],
            "i": "file",
            "c": 1,
            "why": [
              "Too small to read from the back.",
              "Troppo piccolo da leggere dal fondo."
            ]
          },
          {
            "n": [
              "Rehearsing before the real presentation",
              "Provare prima della presentazione vera"
            ],
            "i": "update",
            "c": 0,
            "why": [
              "Practice makes it smooth.",
              "Provare rende tutto più fluido."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>WORDS! MORE WORDS! I'm the Wall-of-Text Ogre. I cram 300 words onto every slide!</p>",
          "<p>PAROLE! ANCORA PAROLE! Sono l'Orco del Muro di Testo. Infilo 300 parole in ogni slide!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "What is the main purpose of slides?",
          "Qual è lo scopo principale delle slide?"
        ],
        "a": [
          [
            "To support the speaker and help the audience follow",
            "Sostenere chi parla e aiutare il pubblico a seguire"
          ],
          [
            "To replace the speaker",
            "Sostituire chi parla"
          ],
          [
            "To store files",
            "Archiviare file"
          ],
          [
            "To write essays",
            "Scrivere temi"
          ]
        ],
        "why": [
          "You are the presentation; slides help.",
          "La presentazione sei tu; le slide aiutano."
        ]
      },
      {
        "q": [
          "Which is best for readability?",
          "Cosa è meglio per la leggibilità?"
        ],
        "a": [
          [
            "Dark text on a light background with a large font",
            "Testo scuro su sfondo chiaro con carattere grande"
          ],
          [
            "Red text on green",
            "Testo rosso su verde"
          ],
          [
            "Tiny italic text",
            "Testo piccolo in corsivo"
          ],
          [
            "Light grey on white",
            "Grigio chiaro su bianco"
          ]
        ],
        "why": [
          "Strong contrast and size.",
          "Contrasto forte e dimensione adeguata."
        ]
      },
      {
        "q": [
          "A theme (or master slide) gives…",
          "Un tema (o schema diapositiva) dà…"
        ],
        "a": [
          [
            "A consistent style to all slides",
            "Uno stile coerente a tutte le slide"
          ],
          [
            "More memory",
            "Più memoria"
          ],
          [
            "Faster internet",
            "Internet più veloce"
          ],
          [
            "Automatic speech",
            "Un discorso automatico"
          ]
        ],
        "why": [
          "Same fonts, colours and layout everywhere.",
          "Stessi caratteri, colori e layout ovunque."
        ]
      },
      {
        "q": [
          "Using an image from the web in your slides, you should…",
          "Usando un'immagine dal web nelle slide dovresti…"
        ],
        "a": [
          [
            "Check you may use it and cite the source",
            "Verificare di poterla usare e citare la fonte"
          ],
          [
            "Never mention where it came from",
            "Non dire mai da dove viene"
          ],
          [
            "Make it blurry",
            "Sfocarla"
          ],
          [
            "Use only watermarked images",
            "Usare solo immagini con filigrana"
          ]
        ],
        "why": [
          "Images are protected by copyright too.",
          "Anche le immagini sono protette dal diritto d'autore."
        ]
      },
      {
        "q": [
          "To show the steps of a process on a slide, the best choice is…",
          "Per mostrare i passi di un processo su una slide, la scelta migliore è…"
        ],
        "a": [
          [
            "A diagram with shapes and arrows",
            "Uno schema con forme e frecce"
          ],
          [
            "A long paragraph",
            "Un lungo paragrafo"
          ],
          [
            "A video with no sound",
            "Un video senza audio"
          ],
          [
            "A blank slide",
            "Una slide vuota"
          ]
        ],
        "why": [
          "Diagrams make sequences clear.",
          "Gli schemi rendono chiare le sequenze."
        ]
      },
      {
        "q": [
          "Which program is used for presentations?",
          "Quale programma si usa per le presentazioni?"
        ],
        "a": [
          [
            "LibreOffice Impress",
            "LibreOffice Impress"
          ],
          [
            "LibreOffice Calc",
            "LibreOffice Calc"
          ],
          [
            "A web browser only",
            "Solo un browser"
          ],
          [
            "An antivirus",
            "Un antivirus"
          ]
        ],
        "why": [
          "Impress, PowerPoint, Google Slides, Keynote.",
          "Impress, PowerPoint, Presentazioni Google, Keynote."
        ]
      }
    ]
  },
  {
    "id": "c10m2",
    "arc": 9,
    "sec": "10.4–10.5 + task",
    "pages": "257–270",
    "hue": 10,
    "horns": 5,
    "eyes": 2,
    "boss": true,
    "title": [
      "Unit 2 Finale: The Live Presentation",
      "Finale Unità 2: la presentazione dal vivo"
    ],
    "topic": [
      "Tables, links, animations, audio/video, presenting remotely, open data",
      "Tabelle, link, animazioni, audio/video, presentare a distanza, open data"
    ],
    "demon": [
      "Deadline Dragon",
      "Drago della Scadenza"
    ],
    "tech": [
      "Stage Form · Final Technique: Grand Premiere",
      "Stile della Scena · Tecnica Finale: Grande Prima"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "slidefx",
        "text": [
          "<p>Finishing touches: [[tables|tabelle]] and [[hyperlinks|link]], [[transitions|transizioni]] between slides and [[animations|animazioni]] on objects, plus audio and video. Use effects to help understanding, not to show off.</p><p>Your book's real-world task uses [[open data|open data]] to build a presentation about young people in Italy.</p>",
          "<p>Ultimi ritocchi: [[tables|tabelle]] e [[hyperlinks|link]], [[transitions|transizioni]] tra le slide e [[animations|animazioni]] sugli oggetti, più audio e video. Usa gli effetti per aiutare a capire, non per stupire.</p><p>Il compito di realtà del libro usa gli [[open data|open data]] per costruire una presentazione sui giovani in Italia.</p>"
        ]
      },
      {
        "type": "order",
        "title": [
          "Prepare a great presentation",
          "Prepara una presentazione efficace"
        ],
        "steps": [
          [
            "Decide the goal and who the audience is",
            "Decidi lo scopo e chi è il pubblico"
          ],
          [
            "Collect information and data (e.g. open data)",
            "Raccogli informazioni e dati (es. open data)"
          ],
          [
            "Write an outline: one idea per slide",
            "Scrivi una scaletta: un'idea per slide"
          ],
          [
            "Build the slides with a consistent theme",
            "Crea le slide con un tema coerente"
          ],
          [
            "Add images, charts and only useful animations",
            "Aggiungi immagini, grafici e solo animazioni utili"
          ],
          [
            "Rehearse, then present (in person or by screen sharing)",
            "Prova, poi presenta (dal vivo o condividendo lo schermo)"
          ]
        ],
        "hint": [
          "Plan first, design later, rehearse last.",
          "Prima progetta, poi realizza, infine prova."
        ]
      },
      {
        "who": "s",
        "vis": "boss",
        "text": [
          "<p>{name}, this is the guardian of the second unit: the Deadline Dragon. It mixes everything from cloud, documents, spreadsheets and slides. Stay calm and strike precisely.</p>",
          "<p>{name}, questo è il guardiano della seconda unità: il Drago della Scadenza. Mescola tutto: cloud, documenti, fogli di calcolo e slide. Resta calma e colpisci con precisione.</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "What is the difference between a transition and an animation?",
          "Che differenza c'è tra transizione e animazione?"
        ],
        "a": [
          [
            "A transition is between slides; an animation is on an object inside a slide",
            "La transizione è tra le slide; l'animazione è su un oggetto dentro la slide"
          ],
          [
            "They are the same",
            "Sono la stessa cosa"
          ],
          [
            "Animations are only sounds",
            "Le animazioni sono solo suoni"
          ],
          [
            "Transitions delete slides",
            "Le transizioni cancellano le slide"
          ]
        ],
        "why": [
          "Use both with moderation.",
          "Usale entrambe con moderazione."
        ]
      },
      {
        "q": [
          "What are open data?",
          "Cosa sono gli open data?"
        ],
        "a": [
          [
            "Public data anyone can freely use",
            "Dati pubblici che chiunque può usare liberamente"
          ],
          [
            "Stolen data",
            "Dati rubati"
          ],
          [
            "Passwords",
            "Password"
          ],
          [
            "Unsaved files",
            "File non salvati"
          ]
        ],
        "why": [
          "E.g. statistics published by ISTAT.",
          "Es. le statistiche pubblicate dall'ISTAT."
        ]
      },
      {
        "q": [
          "Which permission lets a classmate change your shared file?",
          "Quale autorizzazione permette a un compagno di modificare il file condiviso?"
        ],
        "a": [
          [
            "Editor",
            "Editor"
          ],
          [
            "Viewer",
            "Visualizzatore"
          ],
          [
            "Commenter",
            "Commentatore"
          ],
          [
            "Guest",
            "Ospite"
          ]
        ],
        "why": [
          "Editors can modify.",
          "Gli editor possono modificare."
        ]
      },
      {
        "q": [
          "In a word processor, centring a title is an example of…",
          "In videoscrittura, centrare un titolo è un esempio di…"
        ],
        "a": [
          [
            "Formatting",
            "Formattazione"
          ],
          [
            "Saving",
            "Salvataggio"
          ],
          [
            "Sorting",
            "Ordinamento"
          ],
          [
            "Sharing",
            "Condivisione"
          ]
        ],
        "why": [
          "It changes appearance only.",
          "Cambia solo l'aspetto."
        ]
      },
      {
        "q": [
          "In a spreadsheet, =AVERAGE(C2:C6) calculates…",
          "Nel foglio di calcolo, =MEDIA(C2:C6) calcola…"
        ],
        "a": [
          [
            "The average of C2 to C6",
            "La media da C2 a C6"
          ],
          [
            "The total",
            "Il totale"
          ],
          [
            "The largest value",
            "Il valore massimo"
          ],
          [
            "The number of cells",
            "Il numero di celle"
          ]
        ],
        "why": [
          "AVERAGE = MEDIA in Italian.",
          "AVERAGE in inglese = MEDIA."
        ]
      },
      {
        "q": [
          "Copying =B2*$E$1 down one row gives…",
          "Copiando =B2*$E$1 una riga più in basso si ottiene…"
        ],
        "a": [
          [
            "=B3*$E$1",
            "=B3*$E$1"
          ],
          [
            "=B3*$E$2",
            "=B3*$E$2"
          ],
          [
            "=B2*$E$1",
            "=B2*$E$1"
          ],
          [
            "=C2*$F$1",
            "=C2*$F$1"
          ]
        ],
        "why": [
          "Only the relative reference moves.",
          "Si sposta solo il riferimento relativo."
        ]
      },
      {
        "q": [
          "Which chart shows parts of a whole?",
          "Quale grafico mostra le parti di un intero?"
        ],
        "a": [
          [
            "Pie chart",
            "A torta"
          ],
          [
            "Line chart",
            "A linee"
          ],
          [
            "Bar chart over time",
            "Istogramma nel tempo"
          ],
          [
            "Scatter plot",
            "A dispersione"
          ]
        ],
        "why": [
          "Pie slices add up to 100%.",
          "Le fette della torta sommano al 100%."
        ]
      },
      {
        "q": [
          "The healthiest screen distance is about…",
          "La distanza più sana dallo schermo è circa…"
        ],
        "a": [
          [
            "50–70 cm",
            "50–70 cm"
          ],
          [
            "10 cm",
            "10 cm"
          ],
          [
            "2 m",
            "2 m"
          ],
          [
            "It doesn't matter",
            "Non importa"
          ]
        ],
        "why": [
          "About an arm's length.",
          "Circa un braccio."
        ]
      }
    ]
  },
  {
    "id": "c11m1",
    "arc": 10,
    "sec": "11.1–11.2",
    "pages": "272–278",
    "hue": 210,
    "horns": 2,
    "eyes": 2,
    "title": [
      "Maps of Logic: Flowcharts",
      "Mappe della logica: diagrammi di flusso"
    ],
    "topic": [
      "Algorithms as flowcharts; variables, constants, input, output",
      "Algoritmi come diagrammi di flusso; variabili, costanti, input, output"
    ],
    "demon": [
      "Tangle Spider",
      "Ragno del Groviglio"
    ],
    "tech": [
      "Code Form · First Technique: Flowchart Path",
      "Stile del Codice · Prima Tecnica: Sentiero del Diagramma"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "flowsym",
        "text": [
          "<p>Welcome to the third unit: programming! Before writing code, hunters draw the algorithm as a [[flowchart|diagramma di flusso]]. Each shape has a meaning, and arrows show the order.</p>",
          "<p>Benvenuta nella terza unità: la programmazione! Prima di scrivere codice, le cacciatrici disegnano l'algoritmo come [[flowchart|diagramma di flusso]]. Ogni forma ha un significato e le frecce indicano l'ordine.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "flowex",
        "text": [
          "<p>The basic elements of every program: [[variables|variabili]] (named boxes whose value can change), [[constants|costanti]] (values that never change, like π), [[input|input]], [[output|output]] and [[assignment|assegnazione]], written <b>age ← 15</b> in flowcharts.</p>",
          "<p>Gli elementi di base di ogni programma: le [[variables|variabili]] (contenitori con un nome il cui valore può cambiare), le [[constants|costanti]] (valori che non cambiano mai, come π), l'[[input|input]], l'[[output|output]] e l'[[assignment|assegnazione]], scritta <b>età ← 15</b> nei diagrammi.</p>"
        ]
      },
      {
        "type": "sort",
        "title": [
          "Which flowchart shape?",
          "Quale blocco del diagramma?"
        ],
        "cats": [
          [
            "Oval (start/end)",
            "Ovale (inizio/fine)"
          ],
          [
            "Parallelogram (I/O)",
            "Parallelogramma (I/O)"
          ],
          [
            "Rectangle (process)",
            "Rettangolo (elaborazione)"
          ],
          [
            "Rhombus (decision)",
            "Rombo (decisione)"
          ]
        ],
        "items": [
          {
            "n": [
              "START",
              "INIZIO"
            ],
            "i": "flow",
            "c": 0,
            "why": [
              "Terminal blocks are ovals.",
              "I blocchi terminali sono ovali."
            ]
          },
          {
            "n": [
              "Read the student's age",
              "Leggi l'età dello studente"
            ],
            "i": "keyboard",
            "c": 1,
            "why": [
              "Reading = input.",
              "Leggere = input."
            ]
          },
          {
            "n": [
              "total ← price × 2",
              "totale ← prezzo × 2"
            ],
            "i": "gear",
            "c": 2,
            "why": [
              "A calculation or assignment.",
              "Un calcolo o un'assegnazione."
            ]
          },
          {
            "n": [
              "Is the grade ≥ 6?",
              "Il voto è ≥ 6?"
            ],
            "i": "scale",
            "c": 3,
            "why": [
              "A yes/no question.",
              "Una domanda sì/no."
            ]
          },
          {
            "n": [
              "Write \"Well done!\"",
              "Scrivi \"Brava!\""
            ],
            "i": "monitor",
            "c": 1,
            "why": [
              "Writing = output.",
              "Scrivere = output."
            ]
          },
          {
            "n": [
              "END",
              "FINE"
            ],
            "i": "flow",
            "c": 0,
            "why": [
              "Terminal.",
              "Terminale."
            ]
          },
          {
            "n": [
              "counter ← counter + 1",
              "contatore ← contatore + 1"
            ],
            "i": "gear",
            "c": 2,
            "why": [
              "Process.",
              "Elaborazione."
            ]
          },
          {
            "n": [
              "Is the password correct?",
              "La password è corretta?"
            ],
            "i": "key",
            "c": 3,
            "why": [
              "Decision.",
              "Decisione."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Skitter skitter… I'm the Tangle Spider. I knot your arrows until nobody can follow your logic!</p>",
          "<p>Zampetta zampetta… Sono il Ragno del Groviglio. Annodo le tue frecce finché nessuno segue più la logica!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "In a flowchart, a decision is drawn as a…",
          "In un diagramma di flusso, una decisione si disegna come…"
        ],
        "a": [
          [
            "Rhombus",
            "Rombo"
          ],
          [
            "Oval",
            "Ovale"
          ],
          [
            "Rectangle",
            "Rettangolo"
          ],
          [
            "Circle",
            "Cerchio"
          ]
        ],
        "why": [
          "It has a yes and a no exit.",
          "Ha un'uscita sì e una no."
        ]
      },
      {
        "q": [
          "Input and output blocks are…",
          "I blocchi di input e output sono…"
        ],
        "a": [
          [
            "Parallelograms",
            "Parallelogrammi"
          ],
          [
            "Ovals",
            "Ovali"
          ],
          [
            "Rhombuses",
            "Rombi"
          ],
          [
            "Triangles",
            "Triangoli"
          ]
        ],
        "why": [
          "Read and write.",
          "Leggi e scrivi."
        ]
      },
      {
        "q": [
          "What is a variable?",
          "Che cos'è una variabile?"
        ],
        "a": [
          [
            "A named container whose value can change",
            "Un contenitore con un nome il cui valore può cambiare"
          ],
          [
            "A value that never changes",
            "Un valore che non cambia mai"
          ],
          [
            "A type of loop",
            "Un tipo di ciclo"
          ],
          [
            "A flowchart arrow",
            "Una freccia del diagramma"
          ]
        ],
        "why": [
          "Like a labelled box.",
          "Come una scatola con un'etichetta."
        ]
      },
      {
        "q": [
          "π = 3.14159 used in a program is a…",
          "π = 3,14159 usato in un programma è una…"
        ],
        "a": [
          [
            "Constant",
            "Costante"
          ],
          [
            "Variable",
            "Variabile"
          ],
          [
            "Decision",
            "Decisione"
          ],
          [
            "Bug",
            "Bug"
          ]
        ],
        "why": [
          "Its value never changes.",
          "Il suo valore non cambia mai."
        ]
      },
      {
        "q": [
          "\"x ← x + 1\" means…",
          "\"x ← x + 1\" significa…"
        ],
        "a": [
          [
            "Increase x by 1 and store the result in x",
            "Aumenta x di 1 e salva il risultato in x"
          ],
          [
            "x is equal to x + 1 (impossible)",
            "x è uguale a x + 1 (impossibile)"
          ],
          [
            "Print x",
            "Stampa x"
          ],
          [
            "Delete x",
            "Cancella x"
          ]
        ],
        "why": [
          "The arrow is assignment, not equality.",
          "La freccia è assegnazione, non uguaglianza."
        ]
      },
      {
        "q": [
          "Every flowchart begins and ends with…",
          "Ogni diagramma di flusso inizia e finisce con…"
        ],
        "a": [
          [
            "Terminal (oval) blocks",
            "Blocchi terminali (ovali)"
          ],
          [
            "Decisions",
            "Decisioni"
          ],
          [
            "Loops",
            "Cicli"
          ],
          [
            "Tables",
            "Tabelle"
          ]
        ],
        "why": [
          "START and END.",
          "INIZIO e FINE."
        ]
      }
    ]
  },
  {
    "id": "c11m2",
    "arc": 10,
    "sec": "11.3–11.4",
    "pages": "279–287",
    "hue": 60,
    "horns": 3,
    "eyes": 2,
    "title": [
      "Branch & Loop",
      "Bivio e ciclo"
    ],
    "topic": [
      "Selection and iteration structures",
      "Strutture di selezione e di iterazione"
    ],
    "demon": [
      "Fork Hydra",
      "Idra del Bivio"
    ],
    "tech": [
      "Code Form · Second Technique: Branch & Loop Dance",
      "Stile del Codice · Seconda Tecnica: Danza del Bivio e del Ciclo"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "structures",
        "text": [
          "<p>Any algorithm can be built from just three structures (the Böhm–Jacopini theorem, 1966): [[sequence|sequenza]], [[selection|selezione]] and [[iteration|iterazione]].</p><p>This is [[structured programming|programmazione strutturata]]: no messy jumps, just these three building blocks.</p>",
          "<p>Qualsiasi algoritmo si può costruire con tre sole strutture (teorema di Böhm–Jacopini, 1966): [[sequence|sequenza]], [[selection|selezione]] e [[iteration|iterazione]].</p><p>È la [[structured programming|programmazione strutturata]]: niente salti disordinati, solo questi tre mattoncini.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "structures",
        "text": [
          "<p>[[Selection|selezione]] (IF… THEN… ELSE) chooses one path out of two.</p><p>[[Iteration|iterazione]] repeats steps. It can check the condition <b>before</b> each round (pre-condition, like <i>while</i>), <b>after</b> (post-condition, like <i>repeat… until</i>), or repeat a <b>fixed number</b> of times (<i>for</i>).</p>",
          "<p>La [[Selection|selezione]] (SE… ALLORA… ALTRIMENTI) sceglie una strada tra due.</p><p>L'[[Iteration|iterazione]] ripete dei passi. Può controllare la condizione <b>prima</b> di ogni giro (pre-condizione, come <i>while</i>), <b>dopo</b> (post-condizione, come <i>ripeti… finché</i>), oppure ripetere un <b>numero fisso</b> di volte (<i>for</i>).</p>"
        ]
      },
      {
        "type": "order",
        "title": [
          "Build the counting algorithm (count 1 to 3)",
          "Costruisci l'algoritmo che conta da 1 a 3"
        ],
        "steps": [
          [
            "START",
            "INIZIO"
          ],
          [
            "i ← 1",
            "i ← 1"
          ],
          [
            "Is i ≤ 3?  (if no → END)",
            "i ≤ 3?  (se no → FINE)"
          ],
          [
            "Write i",
            "Scrivi i"
          ],
          [
            "i ← i + 1, then go back to the question",
            "i ← i + 1, poi torna alla domanda"
          ],
          [
            "END",
            "FINE"
          ]
        ],
        "hint": [
          "Set the counter before you test it.",
          "Imposta il contatore prima di controllarlo."
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Left? Right? Left again? I'm the Fork Hydra. Every head points a different way!</p>",
          "<p>Sinistra? Destra? Ancora sinistra? Sono l'Idra del Bivio. Ogni testa indica una strada diversa!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "The three structures of structured programming are…",
          "Le tre strutture della programmazione strutturata sono…"
        ],
        "a": [
          [
            "Sequence, selection, iteration",
            "Sequenza, selezione, iterazione"
          ],
          [
            "Input, output, storage",
            "Input, output, memoria"
          ],
          [
            "CPU, RAM, bus",
            "CPU, RAM, bus"
          ],
          [
            "Start, middle, end",
            "Inizio, metà, fine"
          ]
        ],
        "why": [
          "Böhm–Jacopini theorem.",
          "Teorema di Böhm–Jacopini."
        ]
      },
      {
        "q": [
          "\"IF it rains THEN take an umbrella ELSE wear sunglasses\" is…",
          "\"SE piove ALLORA prendi l'ombrello ALTRIMENTI metti gli occhiali da sole\" è…"
        ],
        "a": [
          [
            "Selection",
            "Selezione"
          ],
          [
            "Iteration",
            "Iterazione"
          ],
          [
            "Sequence only",
            "Solo sequenza"
          ],
          [
            "A bug",
            "Un bug"
          ]
        ],
        "why": [
          "It chooses between two paths.",
          "Sceglie tra due strade."
        ]
      },
      {
        "q": [
          "\"Repeat 10 push-ups\" is an example of…",
          "\"Ripeti 10 flessioni\" è un esempio di…"
        ],
        "a": [
          [
            "Iteration with a fixed count",
            "Iterazione con numero fisso di ripetizioni"
          ],
          [
            "Selection",
            "Selezione"
          ],
          [
            "Input",
            "Input"
          ],
          [
            "A constant",
            "Una costante"
          ]
        ],
        "why": [
          "Like a for loop.",
          "Come un ciclo for."
        ]
      },
      {
        "q": [
          "A pre-condition loop checks the condition…",
          "Un ciclo a pre-condizione controlla la condizione…"
        ],
        "a": [
          [
            "Before each repetition",
            "Prima di ogni ripetizione"
          ],
          [
            "Only at the end",
            "Solo alla fine"
          ],
          [
            "Never",
            "Mai"
          ],
          [
            "Only once",
            "Una sola volta"
          ]
        ],
        "why": [
          "It may run zero times.",
          "Potrebbe non eseguire nemmeno un giro."
        ]
      },
      {
        "q": [
          "A post-condition loop (repeat… until) runs at least…",
          "Un ciclo a post-condizione (ripeti… finché) viene eseguito almeno…"
        ],
        "a": [
          [
            "Once",
            "Una volta"
          ],
          [
            "Zero times",
            "Zero volte"
          ],
          [
            "Ten times",
            "Dieci volte"
          ],
          [
            "Forever",
            "Per sempre"
          ]
        ],
        "why": [
          "It checks after the first round.",
          "Controlla dopo il primo giro."
        ]
      },
      {
        "q": [
          "A loop whose condition never becomes false is…",
          "Un ciclo la cui condizione non diventa mai falsa è…"
        ],
        "a": [
          [
            "An infinite loop",
            "Un ciclo infinito"
          ],
          [
            "A selection",
            "Una selezione"
          ],
          [
            "A constant",
            "Una costante"
          ],
          [
            "Perfect code",
            "Codice perfetto"
          ]
        ],
        "why": [
          "Something inside must change the condition.",
          "Qualcosa all'interno deve cambiare la condizione."
        ]
      }
    ]
  },
  {
    "id": "c11m3",
    "arc": 10,
    "sec": "11.5 + CLIL",
    "pages": "288–297",
    "hue": 330,
    "horns": 2,
    "eyes": 3,
    "title": [
      "The Trace Table Trial",
      "La prova della tabella di traccia"
    ],
    "topic": [
      "Trace tables, the first programmer, the scientific method",
      "Tabella di traccia, la prima programmatrice, il metodo scientifico"
    ],
    "demon": [
      "Ghost Variable",
      "Variabile Fantasma"
    ],
    "tech": [
      "Code Form · Third Technique: Trace Sight",
      "Stile del Codice · Terza Tecnica: Vista della Traccia"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "pioneers",
        "text": [
          "<p>A [[trace table|tabella di traccia]] follows an algorithm step by step, writing down the value of every variable after each step. It's how hunters find bugs without a computer.</p><p>The very first programmer did exactly this on paper: Ada Lovelace, in 1843.</p>",
          "<p>La [[trace table|tabella di traccia]] segue un algoritmo passo per passo, annotando il valore di ogni variabile dopo ogni passo. È così che le cacciatrici trovano i bug senza computer.</p><p>La prima programmatrice della storia lo faceva proprio così, su carta: Ada Lovelace, nel 1843.</p>"
        ]
      },
      {
        "type": "trace"
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Now you see my value… now you don't! I'm the Ghost Variable!</p>",
          "<p>Ora vedi il mio valore… ora non più! Sono la Variabile Fantasma!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "What is a trace table for?",
          "A cosa serve una tabella di traccia?"
        ],
        "a": [
          [
            "Following the values of variables step by step",
            "Seguire passo per passo i valori delle variabili"
          ],
          [
            "Drawing pictures",
            "Disegnare"
          ],
          [
            "Saving files",
            "Salvare file"
          ],
          [
            "Connecting to Wi-Fi",
            "Collegarsi al Wi-Fi"
          ]
        ],
        "why": [
          "It helps find logic errors.",
          "Aiuta a trovare errori logici."
        ]
      },
      {
        "q": [
          "Who is considered the first programmer?",
          "Chi è considerata la prima programmatrice?"
        ],
        "a": [
          [
            "Ada Lovelace",
            "Ada Lovelace"
          ],
          [
            "Grace Hopper",
            "Grace Hopper"
          ],
          [
            "Marie Curie",
            "Marie Curie"
          ],
          [
            "Tim Berners-Lee",
            "Tim Berners-Lee"
          ]
        ],
        "why": [
          "She wrote an algorithm for Babbage's Analytical Engine.",
          "Scrisse un algoritmo per la Macchina Analitica di Babbage."
        ]
      },
      {
        "q": [
          "s ← 0; for x from 1 to 3: s ← s + x. Final s?",
          "s ← 0; per x da 1 a 3: s ← s + x. Valore finale di s?"
        ],
        "a": [
          [
            "6",
            "6"
          ],
          [
            "3",
            "3"
          ],
          [
            "0",
            "0"
          ],
          [
            "4",
            "4"
          ]
        ],
        "why": [
          "0+1+2+3 = 6.",
          "0+1+2+3 = 6."
        ]
      },
      {
        "q": [
          "a ← 5; b ← a; a ← 2. What is b?",
          "a ← 5; b ← a; a ← 2. Quanto vale b?"
        ],
        "a": [
          [
            "5",
            "5"
          ],
          [
            "2",
            "2"
          ],
          [
            "7",
            "7"
          ],
          [
            "0",
            "0"
          ]
        ],
        "why": [
          "b copied 5 before a changed.",
          "b ha copiato 5 prima che a cambiasse."
        ]
      },
      {
        "q": [
          "x ← 10; WHILE x > 4: x ← x − 3. Final x?",
          "x ← 10; MENTRE x > 4: x ← x − 3. Valore finale di x?"
        ],
        "a": [
          [
            "4",
            "4"
          ],
          [
            "1",
            "1"
          ],
          [
            "7",
            "7"
          ],
          [
            "10",
            "10"
          ]
        ],
        "why": [
          "10 → 7 → 4, and 4 > 4 is false.",
          "10 → 7 → 4, e 4 > 4 è falso."
        ]
      },
      {
        "q": [
          "The CLIL page compares a flowchart to…",
          "La pagina CLIL paragona un diagramma di flusso a…"
        ],
        "a": [
          [
            "The scientific method",
            "Il metodo scientifico"
          ],
          [
            "A recipe book",
            "Un ricettario"
          ],
          [
            "A football match",
            "Una partita di calcio"
          ],
          [
            "A map of Italy",
            "Una cartina dell'Italia"
          ]
        ],
        "why": [
          "Hypothesis → experiment → is it confirmed? → …",
          "Ipotesi → esperimento → è confermata? → …"
        ]
      }
    ]
  },
  {
    "id": "c12m1",
    "arc": 11,
    "sec": "12.1–12.2 + CLIL",
    "pages": "298–306, 325",
    "hue": 50,
    "horns": 3,
    "eyes": 2,
    "title": [
      "Tongues of the Machine",
      "Le lingue della macchina"
    ],
    "topic": [
      "Programming languages, compilers, interpreters, Python",
      "Linguaggi di programmazione, compilatori, interpreti, Python"
    ],
    "demon": [
      "Babel Beast",
      "Bestia di Babele"
    ],
    "tech": [
      "Python Form · First Technique: Translator's Edge",
      "Stile Python · Prima Tecnica: Filo del Traduttore"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "langlevels",
        "text": [
          "<p>The CPU only understands [[machine language|linguaggio macchina]]: 0s and 1s. [[Assembly|assembly]] gives each instruction a short name. [[High-level languages|linguaggi ad alto livello]] like Python, Java or C read almost like English.</p>",
          "<p>La CPU capisce solo il [[machine language|linguaggio macchina]]: 0 e 1. L'[[Assembly|assembly]] dà a ogni istruzione un nome breve. I [[High-level languages|linguaggi ad alto livello]] come Python, Java o C si leggono quasi come l'inglese.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "compinterp",
        "text": [
          "<p>High-level code must be translated. A [[compiler|compilatore]] translates the whole program first; an [[interpreter|interprete]] translates and runs it line by line.</p><p>Grace Hopper built one of the first compilers (CLIL p. 325). And [[Python|Python]], created by Guido van Rossum and first released in 1991, is interpreted and designed to be easy to read.</p>",
          "<p>Il codice ad alto livello va tradotto. Il [[compiler|compilatore]] traduce prima tutto il programma; l'[[interpreter|interprete]] traduce ed esegue riga per riga.</p><p>Grace Hopper realizzò uno dei primi compilatori (CLIL p. 325). E [[Python|Python]], creato da Guido van Rossum e pubblicato nel 1991, è interpretato e pensato per essere facile da leggere.</p>"
        ]
      },
      {
        "type": "sort",
        "title": [
          "High-level or low-level?",
          "Alto livello o basso livello?"
        ],
        "cats": [
          [
            "High-level",
            "Alto livello"
          ],
          [
            "Low-level",
            "Basso livello"
          ]
        ],
        "items": [
          {
            "n": [
              "print(\"Ciao\")",
              "print(\"Ciao\")"
            ],
            "i": "python",
            "c": 0,
            "why": [
              "Python is high-level.",
              "Python è ad alto livello."
            ]
          },
          {
            "n": [
              "10110000 01100001",
              "10110000 01100001"
            ],
            "i": "chip",
            "c": 1,
            "why": [
              "Raw machine code.",
              "Puro linguaggio macchina."
            ]
          },
          {
            "n": [
              "MOV AL, 61h",
              "MOV AL, 61h"
            ],
            "i": "chip",
            "c": 1,
            "why": [
              "Assembly is low-level.",
              "L'assembly è a basso livello."
            ]
          },
          {
            "n": [
              "if score > 10: win()",
              "if score > 10: win()"
            ],
            "i": "code",
            "c": 0,
            "why": [
              "Readable like English.",
              "Leggibile quasi come l'inglese."
            ]
          },
          {
            "n": [
              "System.out.println(\"Hi\");  (Java)",
              "System.out.println(\"Hi\");  (Java)"
            ],
            "i": "code",
            "c": 0,
            "why": [
              "Java is high-level.",
              "Java è ad alto livello."
            ]
          },
          {
            "n": [
              "ADD R1, R2",
              "ADD R1, R2"
            ],
            "i": "chip",
            "c": 1,
            "why": [
              "An assembly instruction.",
              "Un'istruzione assembly."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Blorg zzt 0101 ¿qué? I'm the Babel Beast! Nobody understands anybody!</p>",
          "<p>Blorg zzt 0101 ¿qué? Sono la Bestia di Babele! Nessuno capisce nessuno!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "Which language does the CPU understand directly?",
          "Quale linguaggio capisce direttamente la CPU?"
        ],
        "a": [
          [
            "Machine language",
            "Il linguaggio macchina"
          ],
          [
            "Python",
            "Python"
          ],
          [
            "English",
            "L'inglese"
          ],
          [
            "HTML",
            "HTML"
          ]
        ],
        "why": [
          "Everything else must be translated.",
          "Tutto il resto va tradotto."
        ]
      },
      {
        "q": [
          "A compiler…",
          "Un compilatore…"
        ],
        "a": [
          [
            "Translates the whole program into machine code before it runs",
            "Traduce tutto il programma in linguaggio macchina prima di eseguirlo"
          ],
          [
            "Runs one line at a time",
            "Esegue una riga alla volta"
          ],
          [
            "Draws flowcharts",
            "Disegna diagrammi"
          ],
          [
            "Is a type of RAM",
            "È un tipo di RAM"
          ]
        ],
        "why": [
          "C and C++ are usually compiled.",
          "C e C++ di solito sono compilati."
        ]
      },
      {
        "q": [
          "Python is usually…",
          "Python di solito è…"
        ],
        "a": [
          [
            "Interpreted",
            "Interpretato"
          ],
          [
            "Compiled into a chip",
            "Compilato in un chip"
          ],
          [
            "Machine language",
            "Linguaggio macchina"
          ],
          [
            "Assembly",
            "Assembly"
          ]
        ],
        "why": [
          "The interpreter runs it line by line.",
          "L'interprete lo esegue riga per riga."
        ]
      },
      {
        "q": [
          "Who created Python?",
          "Chi ha creato Python?"
        ],
        "a": [
          [
            "Guido van Rossum",
            "Guido van Rossum"
          ],
          [
            "Ada Lovelace",
            "Ada Lovelace"
          ],
          [
            "Bill Gates",
            "Bill Gates"
          ],
          [
            "Grace Hopper",
            "Grace Hopper"
          ]
        ],
        "why": [
          "First released in 1991.",
          "Pubblicato per la prima volta nel 1991."
        ]
      },
      {
        "q": [
          "Grace Hopper is famous for…",
          "Grace Hopper è famosa per…"
        ],
        "a": [
          [
            "Building one of the first compilers",
            "Aver realizzato uno dei primi compilatori"
          ],
          [
            "Inventing the mouse",
            "Aver inventato il mouse"
          ],
          [
            "Founding a social network",
            "Aver fondato un social network"
          ],
          [
            "Discovering electricity",
            "Aver scoperto l'elettricità"
          ]
        ],
        "why": [
          "She also helped create COBOL.",
          "Contribuì anche a creare il COBOL."
        ]
      },
      {
        "q": [
          "Assembly language is…",
          "L'assembly è…"
        ],
        "a": [
          [
            "Low-level: short names for machine instructions",
            "A basso livello: nomi brevi per le istruzioni macchina"
          ],
          [
            "High-level, like Python",
            "Ad alto livello, come Python"
          ],
          [
            "A spreadsheet",
            "Un foglio di calcolo"
          ],
          [
            "A web browser",
            "Un browser"
          ]
        ],
        "why": [
          "One step above 0s and 1s.",
          "Un gradino sopra gli 0 e 1."
        ]
      }
    ]
  },
  {
    "id": "c12m2",
    "arc": 11,
    "sec": "12.3–12.4",
    "pages": "307–315",
    "hue": 220,
    "horns": 2,
    "eyes": 2,
    "title": [
      "First Spell: Hello, Python",
      "Primo incantesimo: ciao, Python"
    ],
    "topic": [
      "print, input, comments, variables and data types",
      "print, input, commenti, variabili e tipi di dato"
    ],
    "demon": [
      "Type-Mix Imp",
      "Folletto Mischiatipi"
    ],
    "tech": [
      "Python Form · Second Technique: Variable Bind",
      "Stile Python · Seconda Tecnica: Legame della Variabile"
    ],
    "scenes": [
      {
        "who": "s",
        "code": [
          "# my first program\nname = input(\"What is your name? \")\nprint(\"Hello,\", name)\nprint(\"Welcome to the academy!\")",
          "# il mio primo programma\nnome = input(\"Come ti chiami? \")\nprint(\"Ciao,\", nome)\nprint(\"Benvenuta all'accademia!\")"
        ],
        "text": [
          "<p>Your first Python spell! [[print()|print()]] writes on the screen; [[input()|input()]] asks the user to type something; lines starting with <b>#</b> are [[comments|commenti]] that Python ignores.</p><p>A [[variable|variabile]] is created by assigning a value with <b>=</b>.</p>",
          "<p>Il tuo primo incantesimo Python! [[print()|print()]] scrive sullo schermo; [[input()|input()]] chiede all'utente di scrivere qualcosa; le righe che iniziano con <b>#</b> sono [[comments|commenti]] che Python ignora.</p><p>Una [[variable|variabile]] si crea assegnandole un valore con <b>=</b>.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "pytypes",
        "code": [
          "age = int(input(\"Age? \"))   # input() always gives text!\nprint(age + 1)",
          "eta = int(input(\"Età? \"))   # input() restituisce sempre testo!\nprint(eta + 1)"
        ],
        "text": [
          "<p>Every value has a [[data type|tipo di dato]]: <b>int</b> (whole numbers), <b>float</b> (decimals), <b>str</b> (text, in quotes) and <b>bool</b> (True/False).</p><p>Watch out: <b>input()</b> always returns a str. To do maths, convert it with <b>int()</b> or <b>float()</b>. Variable names can't start with a digit or contain spaces.</p>",
          "<p>Ogni valore ha un [[data type|tipo di dato]]: <b>int</b> (numeri interi), <b>float</b> (decimali), <b>str</b> (testo, tra virgolette) e <b>bool</b> (True/False).</p><p>Attenzione: <b>input()</b> restituisce sempre una str. Per fare calcoli convertila con <b>int()</b> o <b>float()</b>. I nomi delle variabili non possono iniziare con una cifra né contenere spazi.</p>"
        ]
      },
      {
        "type": "predict",
        "rounds": [
          {
            "code": "print(\"Hello\", \"Hana\")",
            "out": "Hello Hana",
            "why": [
              "print separates items with a space.",
              "print separa gli elementi con uno spazio."
            ]
          },
          {
            "code": "x = 5\nx = x + 2\nprint(x)",
            "out": "7",
            "why": [
              "x becomes 5 + 2.",
              "x diventa 5 + 2."
            ]
          },
          {
            "code": "a = \"3\"\nb = \"4\"\nprint(a + b)",
            "out": "34",
            "why": [
              "They are strings: + joins them.",
              "Sono stringhe: il + le unisce."
            ]
          },
          {
            "code": "n = int(\"3\") + 4\nprint(n)",
            "out": "7",
            "why": [
              "int() turns \"3\" into the number 3.",
              "int() trasforma \"3\" nel numero 3."
            ]
          },
          {
            "code": "name = \"Ren\"\nprint(\"Hi \" + name + \"!\")",
            "out": "Hi Ren!",
            "why": [
              "+ joins strings without adding spaces.",
              "Il + unisce le stringhe senza aggiungere spazi."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>\"3\" + 4 = ERROR! Hahaha! I'm the Type-Mix Imp. I mix text and numbers until your program crashes!</p>",
          "<p>\"3\" + 4 = ERRORE! Ahahah! Sono il Folletto Mischiatipi. Mescolo testo e numeri finché il programma si blocca!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "What does print() do?",
          "Cosa fa print()?"
        ],
        "a": [
          [
            "Shows output on the screen",
            "Mostra un output sullo schermo"
          ],
          [
            "Sends to the printer",
            "Manda in stampa"
          ],
          [
            "Reads the keyboard",
            "Legge la tastiera"
          ],
          [
            "Saves a file",
            "Salva un file"
          ]
        ],
        "why": [
          "Despite the name, it doesn't use a printer!",
          "Nonostante il nome, non usa la stampante!"
        ]
      },
      {
        "q": [
          "input() always returns a value of type…",
          "input() restituisce sempre un valore di tipo…"
        ],
        "a": [
          [
            "str",
            "str"
          ],
          [
            "int",
            "int"
          ],
          [
            "float",
            "float"
          ],
          [
            "bool",
            "bool"
          ]
        ],
        "why": [
          "Convert with int() or float() for maths.",
          "Converti con int() o float() per i calcoli."
        ]
      },
      {
        "q": [
          "Which is a valid variable name?",
          "Quale nome di variabile è valido?"
        ],
        "a": [
          [
            "total_score",
            "punteggio_totale"
          ],
          [
            "2score",
            "2punti"
          ],
          [
            "total score",
            "punteggio totale"
          ],
          [
            "print",
            "print"
          ]
        ],
        "why": [
          "No leading digit, no spaces, not a keyword or built-in name.",
          "Niente cifra iniziale, niente spazi, non una parola riservata."
        ]
      },
      {
        "q": [
          "What type is 3.14?",
          "Di che tipo è 3.14?"
        ],
        "a": [
          [
            "float",
            "float"
          ],
          [
            "int",
            "int"
          ],
          [
            "str",
            "str"
          ],
          [
            "bool",
            "bool"
          ]
        ],
        "why": [
          "Decimal numbers are floats.",
          "I numeri decimali sono float."
        ]
      },
      {
        "q": [
          "A line starting with # is…",
          "Una riga che inizia con # è…"
        ],
        "a": [
          [
            "A comment, ignored by Python",
            "Un commento, ignorato da Python"
          ],
          [
            "An error",
            "Un errore"
          ],
          [
            "A loop",
            "Un ciclo"
          ],
          [
            "A variable",
            "Una variabile"
          ]
        ],
        "why": [
          "Comments explain the code to humans.",
          "I commenti spiegano il codice alle persone."
        ]
      },
      {
        "q": [
          "print(\"5\" + \"5\") shows…",
          "print(\"5\" + \"5\") mostra…"
        ],
        "a": [
          [
            "55",
            "55"
          ],
          [
            "10",
            "10"
          ],
          [
            "5 5",
            "5 5"
          ],
          [
            "An error",
            "Un errore"
          ]
        ],
        "why": [
          "Two strings are joined.",
          "Due stringhe vengono unite."
        ]
      }
    ]
  },
  {
    "id": "c12m3",
    "arc": 11,
    "sec": "12.5",
    "pages": "316–324",
    "hue": 0,
    "horns": 4,
    "eyes": 3,
    "title": [
      "Operator Kata",
      "Kata degli operatori"
    ],
    "topic": [
      "Arithmetic operators, precedence, keywords, the first bug",
      "Operatori aritmetici, precedenza, parole chiave, il primo bug"
    ],
    "demon": [
      "Moth of Mark II",
      "Falena del Mark II"
    ],
    "tech": [
      "Python Form · Third Technique: Modulo Slash",
      "Stile Python · Terza Tecnica: Fendente Modulo"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "pyops",
        "text": [
          "<p>Python's [[operators|operatori]]: + − * / for maths, <b>//</b> for [[integer division|divisione intera]], <b>%</b> for the [[remainder|resto]] (modulo), <b>**</b> for powers.</p><p>Precedence follows maths: ** first, then * / // %, then + −. Use brackets to be clear.</p>",
          "<p>Gli [[operators|operatori]] di Python: + − * / per i calcoli, <b>//</b> per la [[integer division|divisione intera]], <b>%</b> per il [[remainder|resto]] (modulo), <b>**</b> per le potenze.</p><p>La precedenza segue la matematica: prima **, poi * / // %, poi + −. Usa le parentesi per essere chiara.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "pioneers",
        "text": [
          "<p>[[Keywords|parole chiave]] like <b>if, else, for, while, def, True, False</b> have special meanings and can't be used as variable names.</p><p>And the word \"bug\"? In 1947 Grace Hopper's team found a real moth stuck in the Harvard Mark II computer, and taped it into the log book as the \"first actual case of bug being found\".</p>",
          "<p>Le [[Keywords|parole chiave]] come <b>if, else, for, while, def, True, False</b> hanno un significato speciale e non si possono usare come nomi di variabili.</p><p>E la parola \"bug\"? Nel 1947 il gruppo di Grace Hopper trovò una vera falena incastrata nel computer Harvard Mark II, e la attaccò sul registro come \"primo vero caso di bug trovato\".</p>"
        ]
      },
      {
        "type": "predict",
        "rounds": [
          {
            "code": "print(7 // 2)",
            "out": "3",
            "why": [
              "Integer division drops the decimals.",
              "La divisione intera elimina i decimali."
            ]
          },
          {
            "code": "print(7 % 2)",
            "out": "1",
            "why": [
              "7 = 2 × 3 + 1: the remainder is 1.",
              "7 = 2 × 3 + 1: il resto è 1."
            ]
          },
          {
            "code": "print(2 ** 3)",
            "out": "8",
            "why": [
              "2 × 2 × 2.",
              "2 × 2 × 2."
            ]
          },
          {
            "code": "print(7 / 2)",
            "out": "3.5",
            "why": [
              "/ always gives a float.",
              "/ dà sempre un float."
            ]
          },
          {
            "code": "print(2 + 3 * 4)",
            "out": "14",
            "why": [
              "Multiplication first: 2 + 12.",
              "Prima la moltiplicazione: 2 + 12."
            ]
          },
          {
            "code": "print(\"ha\" * 3)",
            "out": "hahaha",
            "why": [
              "* repeats a string.",
              "* ripete una stringa."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Flutter flutter… I'm the Moth of Mark II, the original bug! Every glitch in history descends from me!</p>",
          "<p>Frrr frrr… Sono la Falena del Mark II, il bug originale! Ogni glitch della storia discende da me!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "What does 10 % 3 give?",
          "Quanto fa 10 % 3?"
        ],
        "a": [
          [
            "1",
            "1"
          ],
          [
            "3",
            "3"
          ],
          [
            "3.33",
            "3.33"
          ],
          [
            "30",
            "30"
          ]
        ],
        "why": [
          "10 = 3 × 3 + 1.",
          "10 = 3 × 3 + 1."
        ]
      },
      {
        "q": [
          "What does 10 // 3 give?",
          "Quanto fa 10 // 3?"
        ],
        "a": [
          [
            "3",
            "3"
          ],
          [
            "1",
            "1"
          ],
          [
            "3.33",
            "3.33"
          ],
          [
            "13",
            "13"
          ]
        ],
        "why": [
          "Integer division.",
          "Divisione intera."
        ]
      },
      {
        "q": [
          "How do you check if n is even?",
          "Come controlli se n è pari?"
        ],
        "a": [
          [
            "n % 2 == 0",
            "n % 2 == 0"
          ],
          [
            "n / 2 == 0",
            "n / 2 == 0"
          ],
          [
            "n ** 2 == 0",
            "n ** 2 == 0"
          ],
          [
            "n // 2 == 1",
            "n // 2 == 1"
          ]
        ],
        "why": [
          "Even numbers have remainder 0 when divided by 2.",
          "I numeri pari hanno resto 0 diviso 2."
        ]
      },
      {
        "q": [
          "(2 + 3) * 4 equals…",
          "(2 + 3) * 4 è uguale a…"
        ],
        "a": [
          [
            "20",
            "20"
          ],
          [
            "14",
            "14"
          ],
          [
            "24",
            "24"
          ],
          [
            "9",
            "9"
          ]
        ],
        "why": [
          "Brackets first.",
          "Prima le parentesi."
        ]
      },
      {
        "q": [
          "Which word can't be a variable name?",
          "Quale parola non può essere un nome di variabile?"
        ],
        "a": [
          [
            "while",
            "while"
          ],
          [
            "score",
            "punteggio"
          ],
          [
            "hero_name",
            "nome_eroe"
          ],
          [
            "x2",
            "x2"
          ]
        ],
        "why": [
          "while is a keyword.",
          "while è una parola chiave."
        ]
      },
      {
        "q": [
          "The famous \"first bug\" was…",
          "Il famoso \"primo bug\" era…"
        ],
        "a": [
          [
            "A real moth in the Harvard Mark II",
            "Una vera falena nel Harvard Mark II"
          ],
          [
            "A virus on the internet",
            "Un virus su internet"
          ],
          [
            "A typo in Python",
            "Un errore di battitura in Python"
          ],
          [
            "A broken keyboard",
            "Una tastiera rotta"
          ]
        ],
        "why": [
          "Found in 1947 by Grace Hopper's team.",
          "Trovata nel 1947 dal gruppo di Grace Hopper."
        ]
      }
    ]
  },
  {
    "id": "c13m1",
    "arc": 12,
    "sec": "13.1–13.2",
    "pages": "326–332",
    "hue": 280,
    "horns": 3,
    "eyes": 2,
    "title": [
      "The Crossroads: if / elif / else",
      "Il crocevia: if / elif / else"
    ],
    "topic": [
      "Conditional statements, relational operators, nested selection, logical operators",
      "Istruzioni condizionali, operatori relazionali, selezioni annidate, operatori logici"
    ],
    "demon": [
      "Crossroads Oni",
      "Oni del Crocevia"
    ],
    "tech": [
      "Python Form · Fourth Technique: Elif Cascade",
      "Stile Python · Quarta Tecnica: Cascata Elif"
    ],
    "scenes": [
      {
        "who": "s",
        "code": [
          "grade = 7\nif grade >= 9:\n    print(\"Excellent\")\nelif grade >= 6:\n    print(\"Passed\")\nelse:\n    print(\"Try again\")",
          "voto = 7\nif voto >= 9:\n    print(\"Ottimo\")\nelif voto >= 6:\n    print(\"Sufficiente\")\nelse:\n    print(\"Riprova\")"
        ],
        "text": [
          "<p>In Python, selection uses [[if|if]], [[elif|elif]] and [[else|else]]. Notice the colon <b>:</b> and the [[indentation|indentazione]] (4 spaces): they show which lines belong to each branch.</p><p>[[Relational operators|operatori relazionali]]: == (equal), != (different), &lt;, &lt;=, &gt;, &gt;=. Don't confuse = (assign) with == (compare)!</p>",
          "<p>In Python la selezione usa [[if|if]], [[elif|elif]] ed [[else|else]]. Nota i due punti <b>:</b> e l'[[indentation|indentazione]] (4 spazi): indicano quali righe appartengono a ogni ramo.</p><p>[[Relational operators|operatori relazionali]]: == (uguale), != (diverso), &lt;, &lt;=, &gt;, &gt;=. Non confondere = (assegna) con == (confronta)!</p>"
        ]
      },
      {
        "who": "s",
        "vis": "pyops",
        "text": [
          "<p>You can put an if inside another if: [[nested selection|selezione annidata]]. Or combine conditions with the [[logical operators|operatori logici]] <b>and</b>, <b>or</b>, <b>not</b>.</p>",
          "<p>Puoi mettere un if dentro un altro if: è la [[nested selection|selezione annidata]]. Oppure combinare condizioni con gli [[logical operators|operatori logici]] <b>and</b>, <b>or</b>, <b>not</b>.</p>"
        ]
      },
      {
        "type": "predict",
        "rounds": [
          {
            "code": "age = 15\nif age >= 18:\n    print(\"adult\")\nelse:\n    print(\"minor\")",
            "out": "minor",
            "why": [
              "15 >= 18 is False.",
              "15 >= 18 è False."
            ]
          },
          {
            "code": "v = 7\nif v >= 9:\n    print(\"A\")\nelif v >= 6:\n    print(\"B\")\nelse:\n    print(\"C\")",
            "out": "B",
            "why": [
              "The first true branch wins.",
              "Vince il primo ramo vero."
            ]
          },
          {
            "code": "print(5 > 3 and 2 > 4)",
            "out": "False",
            "why": [
              "and needs both True.",
              "and richiede che siano entrambe True."
            ]
          },
          {
            "code": "x = 4\nprint(x % 2 == 0 or x > 10)",
            "out": "True",
            "why": [
              "The first part is True, so or is True.",
              "La prima parte è True, quindi or è True."
            ]
          },
          {
            "code": "print(not (3 == 3))",
            "out": "False",
            "why": [
              "3 == 3 is True; not flips it.",
              "3 == 3 è True; not lo inverte."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Which way, which way? I'm the Crossroads Oni. One wrong colon and your program takes the wrong road!</p>",
          "<p>Di qua o di là? Sono l'Oni del Crocevia. Un due punti sbagliato e il programma prende la strada sbagliata!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "Which operator checks if two values are equal?",
          "Quale operatore controlla se due valori sono uguali?"
        ],
        "a": [
          [
            "==",
            "=="
          ],
          [
            "=",
            "="
          ],
          [
            "!=",
            "!="
          ],
          [
            "=>",
            "=>"
          ]
        ],
        "why": [
          "= assigns; == compares.",
          "= assegna; == confronta."
        ]
      },
      {
        "q": [
          "What shows which lines belong to an if in Python?",
          "Cosa indica quali righe appartengono a un if in Python?"
        ],
        "a": [
          [
            "Indentation (spaces at the start)",
            "L'indentazione (spazi all'inizio)"
          ],
          [
            "Curly braces",
            "Le parentesi graffe"
          ],
          [
            "The colour of the text",
            "Il colore del testo"
          ],
          [
            "A semicolon",
            "Il punto e virgola"
          ]
        ],
        "why": [
          "Usually 4 spaces.",
          "Di solito 4 spazi."
        ]
      },
      {
        "q": [
          "elif means…",
          "elif significa…"
        ],
        "a": [
          [
            "\"else if\": another condition to check",
            "\"else if\": un'altra condizione da controllare"
          ],
          [
            "End of the program",
            "Fine del programma"
          ],
          [
            "A loop",
            "Un ciclo"
          ],
          [
            "An error",
            "Un errore"
          ]
        ],
        "why": [
          "Checked only if the ones before were False.",
          "Controllato solo se i precedenti erano False."
        ]
      },
      {
        "q": [
          "True and False gives…",
          "True and False dà…"
        ],
        "a": [
          [
            "False",
            "False"
          ],
          [
            "True",
            "True"
          ],
          [
            "None",
            "None"
          ],
          [
            "Error",
            "Errore"
          ]
        ],
        "why": [
          "and needs both True.",
          "and richiede entrambi True."
        ]
      },
      {
        "q": [
          "True or False gives…",
          "True or False dà…"
        ],
        "a": [
          [
            "True",
            "True"
          ],
          [
            "False",
            "False"
          ],
          [
            "None",
            "None"
          ],
          [
            "Error",
            "Errore"
          ]
        ],
        "why": [
          "or needs at least one True.",
          "or richiede almeno un True."
        ]
      },
      {
        "q": [
          "3 != 4 is…",
          "3 != 4 è…"
        ],
        "a": [
          [
            "True",
            "True"
          ],
          [
            "False",
            "False"
          ],
          [
            "7",
            "7"
          ],
          [
            "An error",
            "Un errore"
          ]
        ],
        "why": [
          "!= means \"different\".",
          "!= significa \"diverso\"."
        ]
      }
    ]
  },
  {
    "id": "c13m2",
    "arc": 12,
    "sec": "13.3–13.4 + CLIL",
    "pages": "333–345",
    "hue": 120,
    "horns": 2,
    "eyes": 4,
    "title": [
      "Logic Gates & match…case",
      "Porte logiche e match…case"
    ],
    "topic": [
      "Assignment operators, match…case, Boolean operators and logic gates, the Zen of Python",
      "Operatori di assegnamento, match…case, operatori booleani e porte logiche, lo Zen di Python"
    ],
    "demon": [
      "Gatekeeper Golem",
      "Golem Guardiano"
    ],
    "tech": [
      "Python Form · Fifth Technique: Boolean Gate",
      "Stile Python · Quinta Tecnica: Porta Booleana"
    ],
    "scenes": [
      {
        "who": "s",
        "code": [
          "points = 10\npoints += 5    # same as points = points + 5\npoints *= 2    # now 30\n\nmatch day:\n    case \"Sat\" | \"Sun\":\n        print(\"Weekend!\")\n    case _:\n        print(\"School day\")",
          "punti = 10\npunti += 5    # come punti = punti + 5\npunti *= 2    # ora 30\n\nmatch giorno:\n    case \"Sab\" | \"Dom\":\n        print(\"Weekend!\")\n    case _:\n        print(\"Giorno di scuola\")"
        ],
        "text": [
          "<p>[[Assignment operators|operatori di assegnamento]] are shortcuts: += −= *= /=.</p><p>[[match…case|match…case]] (Python 3.10 and later) compares a value with several cases; <b>case _</b> catches everything else.</p>",
          "<p>Gli [[Assignment operators|operatori di assegnamento]] sono scorciatoie: += −= *= /=.</p><p>[[match…case|match…case]] (da Python 3.10 in poi) confronta un valore con più casi; <b>case _</b> cattura tutti gli altri.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "gatesvis",
        "text": [
          "<p>Inside the CPU, and, or and not are real circuits: [[logic gates|porte logiche]] made of transistors. They work with 1 (true) and 0 (false), following [[Boolean|booleana]] algebra (named after George Boole).</p><p>The CLIL page shows \"The Zen of Python\": type <b>import this</b> in Python to read it. \"Simple is better than complex.\"</p>",
          "<p>Dentro la CPU, and, or e not sono circuiti veri: le [[logic gates|porte logiche]], fatte di transistor. Lavorano con 1 (vero) e 0 (falso), seguendo l'algebra [[Boolean|booleana]] (dal nome di George Boole).</p><p>La pagina CLIL mostra \"The Zen of Python\": scrivi <b>import this</b> in Python per leggerlo. \"Il semplice è meglio del complesso.\"</p>"
        ]
      },
      {
        "type": "gates"
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>None shall pass! I'm the Gatekeeper Golem. Only the right combination of 1s and 0s opens my gates!</p>",
          "<p>Nessuno passerà! Sono il Golem Guardiano. Solo la giusta combinazione di 1 e 0 apre le mie porte!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "After x = 4 and x += 3, x is…",
          "Dopo x = 4 e x += 3, x vale…"
        ],
        "a": [
          [
            "7",
            "7"
          ],
          [
            "3",
            "3"
          ],
          [
            "43",
            "43"
          ],
          [
            "12",
            "12"
          ]
        ],
        "why": [
          "x = x + 3.",
          "x = x + 3."
        ]
      },
      {
        "q": [
          "An AND gate outputs 1 when…",
          "Una porta AND dà 1 quando…"
        ],
        "a": [
          [
            "Both inputs are 1",
            "Entrambi gli ingressi sono 1"
          ],
          [
            "At least one input is 1",
            "Almeno un ingresso è 1"
          ],
          [
            "Both are 0",
            "Entrambi sono 0"
          ],
          [
            "Always",
            "Sempre"
          ]
        ],
        "why": [
          "Like Python's and.",
          "Come and in Python."
        ]
      },
      {
        "q": [
          "An OR gate with inputs 0 and 1 outputs…",
          "Una porta OR con ingressi 0 e 1 dà…"
        ],
        "a": [
          [
            "1",
            "1"
          ],
          [
            "0",
            "0"
          ],
          [
            "2",
            "2"
          ],
          [
            "10",
            "10"
          ]
        ],
        "why": [
          "At least one is 1.",
          "Almeno uno è 1."
        ]
      },
      {
        "q": [
          "A NOT gate with input 1 outputs…",
          "Una porta NOT con ingresso 1 dà…"
        ],
        "a": [
          [
            "0",
            "0"
          ],
          [
            "1",
            "1"
          ],
          [
            "2",
            "2"
          ],
          [
            "-1",
            "-1"
          ]
        ],
        "why": [
          "It flips the value.",
          "Inverte il valore."
        ]
      },
      {
        "q": [
          "In match…case, what does case _ do?",
          "In match…case, cosa fa case _?"
        ],
        "a": [
          [
            "Catches every value not matched before",
            "Cattura ogni valore non riconosciuto prima"
          ],
          [
            "Ends the program",
            "Termina il programma"
          ],
          [
            "Creates a variable named _",
            "Crea una variabile chiamata _ e basta"
          ],
          [
            "Nothing at all",
            "Niente"
          ]
        ],
        "why": [
          "Like a final else.",
          "Come un else finale."
        ]
      },
      {
        "q": [
          "Boolean algebra is named after…",
          "L'algebra booleana prende il nome da…"
        ],
        "a": [
          [
            "George Boole",
            "George Boole"
          ],
          [
            "Guido van Rossum",
            "Guido van Rossum"
          ],
          [
            "Ada Lovelace",
            "Ada Lovelace"
          ],
          [
            "A Python library",
            "Una libreria Python"
          ]
        ],
        "why": [
          "A 19th-century mathematician.",
          "Un matematico dell'Ottocento."
        ]
      }
    ]
  },
  {
    "id": "c14m1",
    "arc": 13,
    "sec": "14.1–14.2",
    "pages": "347–356",
    "hue": 170,
    "horns": 3,
    "eyes": 2,
    "title": [
      "The for Loop Spiral",
      "La spirale del ciclo for"
    ],
    "topic": [
      "for loops, range(), nested loops",
      "Ciclo for, range(), cicli annidati"
    ],
    "demon": [
      "Repeat Raijū",
      "Raijū della Ripetizione"
    ],
    "tech": [
      "Python Form · Sixth Technique: Hundred-Strike for",
      "Stile Python · Sesta Tecnica: Cento Colpi for"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "rangevis",
        "code": [
          "for i in range(3):\n    print(\"Strike\", i)",
          "for i in range(3):\n    print(\"Colpo\", i)"
        ],
        "text": [
          "<p>The [[for loop|ciclo for]] repeats a block for each value in a sequence. [[range()|range()]] makes the sequence: range(stop), range(start, stop) or range(start, stop, step). The stop is never included!</p>",
          "<p>Il [[for loop|ciclo for]] ripete un blocco per ogni valore di una sequenza. [[range()|range()]] crea la sequenza: range(fine), range(inizio, fine) oppure range(inizio, fine, passo). Il valore finale non è mai incluso!</p>"
        ]
      },
      {
        "who": "s",
        "code": [
          "for row in range(3):\n    for col in range(4):\n        print(\"*\", end=\"\")\n    print()",
          "for riga in range(3):\n    for col in range(4):\n        print(\"*\", end=\"\")\n    print()"
        ],
        "text": [
          "<p>A loop inside a loop is a [[nested loop|ciclo annidato]]: for each turn of the outer loop, the inner loop runs completely. This draws a 3 × 4 rectangle of stars. (<b>end=\"\"</b> stops print from going to a new line.)</p>",
          "<p>Un ciclo dentro un ciclo è un [[nested loop|ciclo annidato]]: per ogni giro del ciclo esterno, quello interno viene eseguito tutto. Questo disegna un rettangolo 3 × 4 di asterischi. (<b>end=\"\"</b> impedisce a print di andare a capo.)</p>"
        ]
      },
      {
        "type": "predict",
        "rounds": [
          {
            "code": "for i in range(3):\n    print(i)",
            "out": "0\n1\n2",
            "why": [
              "range(3) is 0, 1, 2.",
              "range(3) è 0, 1, 2."
            ]
          },
          {
            "code": "total = 0\nfor i in range(1, 5):\n    total += i\nprint(total)",
            "out": "10",
            "why": [
              "1 + 2 + 3 + 4.",
              "1 + 2 + 3 + 4."
            ]
          },
          {
            "code": "for c in \"Hi\":\n    print(c)",
            "out": "H\ni",
            "why": [
              "A for loop can go through a string letter by letter.",
              "Un for può scorrere una stringa lettera per lettera."
            ]
          },
          {
            "code": "for r in range(2):\n    for c in range(3):\n        print(\"*\", end=\"\")\n    print()",
            "out": "***\n***",
            "why": [
              "2 rows of 3 stars.",
              "2 righe di 3 asterischi."
            ]
          },
          {
            "code": "print(list(range(2, 10, 3)))",
            "out": "[2, 5, 8]",
            "why": [
              "Start 2, step 3, stop before 10.",
              "Parte da 2, passo 3, si ferma prima di 10."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Again! Again! AGAIN! I'm the Repeat Raijū. I'll make you count forever!</p>",
          "<p>Ancora! Ancora! ANCORA! Sono il Raijū della Ripetizione. Ti farò contare per sempre!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "range(5) produces…",
          "range(5) produce…"
        ],
        "a": [
          [
            "0, 1, 2, 3, 4",
            "0, 1, 2, 3, 4"
          ],
          [
            "1, 2, 3, 4, 5",
            "1, 2, 3, 4, 5"
          ],
          [
            "0, 1, 2, 3, 4, 5",
            "0, 1, 2, 3, 4, 5"
          ],
          [
            "5",
            "5"
          ]
        ],
        "why": [
          "Starts at 0, stops before 5.",
          "Parte da 0, si ferma prima di 5."
        ]
      },
      {
        "q": [
          "How many times does \"for i in range(2, 6):\" repeat?",
          "Quante volte ripete \"for i in range(2, 6):\"?"
        ],
        "a": [
          [
            "4",
            "4"
          ],
          [
            "6",
            "6"
          ],
          [
            "5",
            "5"
          ],
          [
            "2",
            "2"
          ]
        ],
        "why": [
          "2, 3, 4, 5.",
          "2, 3, 4, 5."
        ]
      },
      {
        "q": [
          "range(0, 10, 2) gives…",
          "range(0, 10, 2) dà…"
        ],
        "a": [
          [
            "0, 2, 4, 6, 8",
            "0, 2, 4, 6, 8"
          ],
          [
            "0, 2, 4, 6, 8, 10",
            "0, 2, 4, 6, 8, 10"
          ],
          [
            "2, 4, 6, 8, 10",
            "2, 4, 6, 8, 10"
          ],
          [
            "0, 10",
            "0, 10"
          ]
        ],
        "why": [
          "Step 2, 10 excluded.",
          "Passo 2, 10 escluso."
        ]
      },
      {
        "q": [
          "A loop inside another loop is…",
          "Un ciclo dentro un altro ciclo è…"
        ],
        "a": [
          [
            "A nested loop",
            "Un ciclo annidato"
          ],
          [
            "An infinite loop",
            "Un ciclo infinito"
          ],
          [
            "A syntax error",
            "Un errore di sintassi"
          ],
          [
            "A function",
            "Una funzione"
          ]
        ],
        "why": [
          "The inner loop runs fully for each outer turn.",
          "Il ciclo interno gira tutto per ogni giro esterno."
        ]
      },
      {
        "q": [
          "An outer loop of 3 and an inner loop of 4 run the inner body…",
          "Un ciclo esterno da 3 e uno interno da 4 eseguono il corpo interno…"
        ],
        "a": [
          [
            "12 times",
            "12 volte"
          ],
          [
            "7 times",
            "7 volte"
          ],
          [
            "3 times",
            "3 volte"
          ],
          [
            "4 times",
            "4 volte"
          ]
        ],
        "why": [
          "3 × 4.",
          "3 × 4."
        ]
      },
      {
        "q": [
          "When do you use a for loop?",
          "Quando usi un ciclo for?"
        ],
        "a": [
          [
            "When you know how many times to repeat, or loop over a sequence",
            "Quando sai quante volte ripetere, o scorri una sequenza"
          ],
          [
            "Never",
            "Mai"
          ],
          [
            "Only for if statements",
            "Solo per gli if"
          ],
          [
            "To define a function",
            "Per definire una funzione"
          ]
        ],
        "why": [
          "Counted iteration.",
          "Iterazione con contatore."
        ]
      }
    ]
  },
  {
    "id": "c14m2",
    "arc": 13,
    "sec": "14.3 + CLIL",
    "pages": "357–369",
    "hue": 240,
    "horns": 4,
    "eyes": 2,
    "title": [
      "The while Storm",
      "La tempesta del while"
    ],
    "topic": [
      "while loops, infinite loops, climate models, iterative design",
      "Ciclo while, cicli infiniti, modelli climatici, progettazione iterativa"
    ],
    "demon": [
      "Endless Storm Spirit",
      "Spirito della Tempesta Infinita"
    ],
    "tech": [
      "Python Form · Seventh Technique: Until-Victory Strike",
      "Stile Python · Settima Tecnica: Colpo Fino alla Vittoria"
    ],
    "scenes": [
      {
        "who": "s",
        "code": [
          "password = \"\"\nwhile password != \"ramen\":\n    password = input(\"Password? \")\nprint(\"Welcome, hunter!\")",
          "password = \"\"\nwhile password != \"ramen\":\n    password = input(\"Password? \")\nprint(\"Benvenuta, cacciatrice!\")"
        ],
        "text": [
          "<p>The [[while loop|ciclo while]] repeats <b>as long as</b> a condition is True. Use it when you don't know in advance how many repetitions you need.</p><p>Something inside must eventually make the condition False, or you get an [[infinite loop|ciclo infinito]].</p>",
          "<p>Il [[while loop|ciclo while]] ripete <b>finché</b> una condizione è True. Usalo quando non sai in anticipo quante ripetizioni servono.</p><p>Qualcosa all'interno deve prima o poi rendere falsa la condizione, altrimenti ottieni un [[infinite loop|ciclo infinito]].</p>"
        ]
      },
      {
        "who": "s",
        "vis": "climate",
        "text": [
          "<p>Loops power real science: climate models repeat physics calculations millions of times to predict the future climate. And designers work in loops too: [[iterative design|progettazione iterativa]] (CLIL p. 369).</p>",
          "<p>I cicli fanno funzionare la scienza vera: i modelli climatici ripetono calcoli fisici milioni di volte per prevedere il clima futuro. E anche i progettisti lavorano a cicli: è la [[iterative design|progettazione iterativa]] (CLIL p. 369).</p>"
        ]
      },
      {
        "type": "predict",
        "rounds": [
          {
            "code": "n = 3\nwhile n > 0:\n    print(n)\n    n -= 1\nprint(\"Go!\")",
            "out": "3\n2\n1\nGo!",
            "why": [
              "Counts down, then leaves the loop when n is 0.",
              "Conta alla rovescia ed esce quando n vale 0."
            ]
          },
          {
            "code": "x = 1\nwhile x < 20:\n    x = x * 2\nprint(x)",
            "out": "32",
            "why": [
              "1 → 2 → 4 → 8 → 16 → 32; 32 < 20 is False.",
              "1 → 2 → 4 → 8 → 16 → 32; 32 < 20 è False."
            ]
          },
          {
            "code": "count = 0\nwhile count != 3:\n    count += 1\nprint(count)",
            "out": "3",
            "why": [
              "Stops when count reaches 3.",
              "Si ferma quando count arriva a 3."
            ]
          },
          {
            "code": "i = 10\nwhile i < 5:\n    print(i)\nprint(\"done\")",
            "out": "done",
            "why": [
              "10 < 5 is False from the start: the body never runs.",
              "10 < 5 è False fin dall'inizio: il corpo non viene mai eseguito."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Rumble… rumble… I'm the Endless Storm Spirit. Forget to update your counter and I'll rage forever!</p>",
          "<p>Brontolio… brontolio… Sono lo Spirito della Tempesta Infinita. Dimentica di aggiornare il contatore e infurierò per sempre!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "A while loop repeats…",
          "Un ciclo while ripete…"
        ],
        "a": [
          [
            "As long as its condition is True",
            "Finché la sua condizione è True"
          ],
          [
            "Exactly 10 times",
            "Esattamente 10 volte"
          ],
          [
            "Only once",
            "Una sola volta"
          ],
          [
            "Until the computer turns off",
            "Finché il computer si spegne"
          ]
        ],
        "why": [
          "It checks before each repetition.",
          "Controlla prima di ogni ripetizione."
        ]
      },
      {
        "q": [
          "Why might this loop be infinite? while x > 0: print(x)",
          "Perché questo ciclo potrebbe essere infinito? while x > 0: print(x)"
        ],
        "a": [
          [
            "x never changes inside the loop",
            "x non cambia mai dentro il ciclo"
          ],
          [
            "print is wrong",
            "print è sbagliato"
          ],
          [
            "while needs a range",
            "while ha bisogno di range"
          ],
          [
            "It isn't infinite",
            "Non è infinito"
          ]
        ],
        "why": [
          "Add something like x -= 1.",
          "Aggiungi qualcosa come x -= 1."
        ]
      },
      {
        "q": [
          "When is while better than for?",
          "Quando while è meglio di for?"
        ],
        "a": [
          [
            "When you don't know how many repetitions you need",
            "Quando non sai quante ripetizioni servono"
          ],
          [
            "When you know the exact count",
            "Quando conosci il numero esatto"
          ],
          [
            "Never",
            "Mai"
          ],
          [
            "Only for strings",
            "Solo per le stringhe"
          ]
        ],
        "why": [
          "E.g. asking a password until it's right.",
          "Es. chiedere la password finché è giusta."
        ]
      },
      {
        "q": [
          "If the condition is False at the start, the while body runs…",
          "Se la condizione è False all'inizio, il corpo del while viene eseguito…"
        ],
        "a": [
          [
            "0 times",
            "0 volte"
          ],
          [
            "Once",
            "1 volta"
          ],
          [
            "Twice",
            "2 volte"
          ],
          [
            "Forever",
            "Per sempre"
          ]
        ],
        "why": [
          "It is a pre-condition loop.",
          "È un ciclo a pre-condizione."
        ]
      },
      {
        "q": [
          "n = 5; while n > 1: n = n - 2. Final n?",
          "n = 5; while n > 1: n = n - 2. Valore finale di n?"
        ],
        "a": [
          [
            "1",
            "1"
          ],
          [
            "-1",
            "-1"
          ],
          [
            "3",
            "3"
          ],
          [
            "5",
            "5"
          ]
        ],
        "why": [
          "5 → 3 → 1; 1 > 1 is False.",
          "5 → 3 → 1; 1 > 1 è False."
        ]
      },
      {
        "q": [
          "Iterative design means…",
          "La progettazione iterativa significa…"
        ],
        "a": [
          [
            "Build, test, improve, and repeat",
            "Costruire, provare, migliorare e ripetere"
          ],
          [
            "Design once and never change",
            "Progettare una volta e non cambiare mai"
          ],
          [
            "Copy someone else's design",
            "Copiare il progetto di altri"
          ],
          [
            "Use only for loops",
            "Usare solo cicli for"
          ]
        ],
        "why": [
          "Like a loop for people.",
          "Come un ciclo, ma per le persone."
        ]
      }
    ]
  },
  {
    "id": "c15m1",
    "arc": 14,
    "sec": "15.1–15.2",
    "pages": "370–378",
    "hue": 320,
    "horns": 2,
    "eyes": 3,
    "title": [
      "String Arts",
      "Le arti delle stringhe"
    ],
    "topic": [
      "Strings, indexes, slicing and string methods",
      "Stringhe, indici, slicing e metodi delle stringhe"
    ],
    "demon": [
      "Slice Serpent",
      "Serpente dello Slicing"
    ],
    "tech": [
      "Python Form · Eighth Technique: Slice Strike",
      "Stile Python · Ottava Tecnica: Colpo di Slicing"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "strindex",
        "text": [
          "<p>A [[string|stringa]] is a sequence of characters. Each has an [[index|indice]] starting from <b>0</b>; negative indexes count from the end. [[Slicing|slicing]] s[a:b] takes characters from a up to (not including) b. <b>len()</b> gives the length.</p>",
          "<p>Una [[string|stringa]] è una sequenza di caratteri. Ognuno ha un [[index|indice]] che parte da <b>0</b>; gli indici negativi contano dalla fine. Lo [[Slicing|slicing]] s[a:b] prende i caratteri da a fino a b escluso. <b>len()</b> dà la lunghezza.</p>"
        ]
      },
      {
        "who": "s",
        "code": [
          "s = \"glitch demon\"\nprint(s.upper())          # GLITCH DEMON\nprint(s.replace(\"demon\", \"hunter\"))\nprint(s.find(\"d\"))        # 7\nprint(s.split())          # ['glitch', 'demon']",
          "s = \"demone glitch\"\nprint(s.upper())          # DEMONE GLITCH\nprint(s.replace(\"demone\", \"cacciatrice\"))\nprint(s.find(\"g\"))        # 7\nprint(s.split())          # ['demone', 'glitch']"
        ],
        "text": [
          "<p>Strings are [[objects|oggetti]] with [[methods|metodi]]: upper(), lower(), replace(), find(), split()… Strings are [[immutable|immutabili]]: methods return a NEW string and leave the original unchanged.</p>",
          "<p>Le stringhe sono [[objects|oggetti]] con dei [[methods|metodi]]: upper(), lower(), replace(), find(), split()… Le stringhe sono [[immutable|immutabili]]: i metodi restituiscono una NUOVA stringa e lasciano invariata l'originale.</p>"
        ]
      },
      {
        "type": "predict",
        "rounds": [
          {
            "code": "s = \"Python\"\nprint(s[0], s[-1])",
            "out": "P n",
            "why": [
              "Index 0 is the first; -1 is the last.",
              "L'indice 0 è il primo; -1 è l'ultimo."
            ]
          },
          {
            "code": "print(\"Hana\"[1:3])",
            "out": "an",
            "why": [
              "Indexes 1 and 2.",
              "Indici 1 e 2."
            ]
          },
          {
            "code": "print(len(\"Glitch\"))",
            "out": "6",
            "why": [
              "6 characters.",
              "6 caratteri."
            ]
          },
          {
            "code": "print(\"demon\".upper())",
            "out": "DEMON",
            "why": [
              "upper() makes capitals.",
              "upper() mette in maiuscolo."
            ]
          },
          {
            "code": "print(\"ramen\".replace(\"r\", \"l\"))",
            "out": "lamen",
            "why": [
              "Every r becomes l.",
              "Ogni r diventa l."
            ]
          },
          {
            "code": "s = \"banana\"\nprint(s.find(\"n\"))",
            "out": "2",
            "why": [
              "The first n is at index 2.",
              "La prima n è all'indice 2."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Snip snip! I'm the Slice Serpent. Off-by-one, and your words come out chopped in the wrong place!</p>",
          "<p>Zac zac! Sono il Serpente dello Slicing. Sbagli di uno e le parole escono tagliate nel punto sbagliato!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "In s = \"HERO\", what is s[0]?",
          "In s = \"HERO\", cos'è s[0]?"
        ],
        "a": [
          [
            "\"H\"",
            "\"H\""
          ],
          [
            "\"E\"",
            "\"E\""
          ],
          [
            "\"O\"",
            "\"O\""
          ],
          [
            "An error",
            "Un errore"
          ]
        ],
        "why": [
          "Indexes start at 0.",
          "Gli indici partono da 0."
        ]
      },
      {
        "q": [
          "In s = \"HERO\", what is s[-1]?",
          "In s = \"HERO\", cos'è s[-1]?"
        ],
        "a": [
          [
            "\"O\"",
            "\"O\""
          ],
          [
            "\"H\"",
            "\"H\""
          ],
          [
            "\"R\"",
            "\"R\""
          ],
          [
            "An error",
            "Un errore"
          ]
        ],
        "why": [
          "-1 is the last character.",
          "-1 è l'ultimo carattere."
        ]
      },
      {
        "q": [
          "\"academy\"[0:3] is…",
          "\"academy\"[0:3] è…"
        ],
        "a": [
          [
            "\"aca\"",
            "\"aca\""
          ],
          [
            "\"acad\"",
            "\"acad\""
          ],
          [
            "\"cad\"",
            "\"cad\""
          ],
          [
            "\"my\"",
            "\"my\""
          ]
        ],
        "why": [
          "Indexes 0, 1, 2.",
          "Indici 0, 1, 2."
        ]
      },
      {
        "q": [
          "len(\"hi there\") is…",
          "len(\"hi there\") vale…"
        ],
        "a": [
          [
            "8",
            "8"
          ],
          [
            "7",
            "7"
          ],
          [
            "2",
            "2"
          ],
          [
            "9",
            "9"
          ]
        ],
        "why": [
          "The space counts too.",
          "Conta anche lo spazio."
        ]
      },
      {
        "q": [
          "Strings in Python are immutable. This means…",
          "In Python le stringhe sono immutabili. Significa che…"
        ],
        "a": [
          [
            "You can't change them in place; methods return new strings",
            "Non puoi modificarle; i metodi restituiscono nuove stringhe"
          ],
          [
            "They can't be printed",
            "Non si possono stampare"
          ],
          [
            "They are always empty",
            "Sono sempre vuote"
          ],
          [
            "They are numbers",
            "Sono numeri"
          ]
        ],
        "why": [
          "s.upper() doesn't change s.",
          "s.upper() non cambia s."
        ]
      },
      {
        "q": [
          "\"a,b,c\".split(\",\") gives…",
          "\"a,b,c\".split(\",\") dà…"
        ],
        "a": [
          [
            "['a', 'b', 'c']",
            "['a', 'b', 'c']"
          ],
          [
            "\"abc\"",
            "\"abc\""
          ],
          [
            "3",
            "3"
          ],
          [
            "['a,b,c']",
            "['a,b,c']"
          ]
        ],
        "why": [
          "split cuts the string into a list.",
          "split taglia la stringa in una lista."
        ]
      }
    ]
  },
  {
    "id": "c15m2",
    "arc": 14,
    "sec": "15.3–15.5 + CLIL",
    "pages": "379–403",
    "hue": 80,
    "horns": 3,
    "eyes": 3,
    "title": [
      "Scrolls & Lists: Lists, Matrices, Files",
      "Pergamene e liste: liste, matrici, file"
    ],
    "topic": [
      "Lists, matrices, writing and reading text files, arrays in science",
      "Liste, matrici, scrivere e leggere file di testo, array nella scienza"
    ],
    "demon": [
      "Index Out-of-Range Yokai",
      "Yokai dell'Indice Fuori Limite"
    ],
    "tech": [
      "Python Form · Ninth Technique: Matrix Barrage",
      "Stile Python · Nona Tecnica: Raffica della Matrice"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "listvis",
        "text": [
          "<p>A [[list|lista]] holds many values in order, in square brackets. Unlike strings, lists are [[mutable|modificabili]]: append(), remove(), sort()… A [[matrix|matrice]] is a list of lists: rows and columns, like a spreadsheet.</p><p>Scientists use huge [[arrays|array]] for images, climate data and genomes.</p>",
          "<p>Una [[list|lista]] contiene più valori in ordine, tra parentesi quadre. A differenza delle stringhe, le liste sono [[mutable|modificabili]]: append(), remove(), sort()… Una [[matrix|matrice]] è una lista di liste: righe e colonne, come un foglio di calcolo.</p><p>Gli scienziati usano enormi [[arrays|array]] per immagini, dati climatici e genomi.</p>"
        ]
      },
      {
        "who": "s",
        "code": [
          "with open(\"scores.txt\", \"w\") as f:   # w = write\n    f.write(\"Hana 95\\n\")\n\nwith open(\"scores.txt\", \"r\") as f:   # r = read\n    for line in f:\n        print(line.strip())",
          "with open(\"punti.txt\", \"w\") as f:   # w = scrittura\n    f.write(\"Hana 95\\n\")\n\nwith open(\"punti.txt\", \"r\") as f:   # r = lettura\n    for riga in f:\n        print(riga.strip())"
        ],
        "text": [
          "<p>Programs can save data in [[text files|file di testo]]. [[open()|open()]] opens a file in a mode: \"w\" write (overwrites), \"a\" append, \"r\" read. Using <b>with</b> closes the file automatically.</p>",
          "<p>I programmi possono salvare dati in [[text files|file di testo]]. [[open()|open()]] apre un file in una modalità: \"w\" scrittura (sovrascrive), \"a\" aggiunta in coda, \"r\" lettura. Usando <b>with</b> il file si chiude da solo.</p>"
        ]
      },
      {
        "type": "predict",
        "rounds": [
          {
            "code": "L = [3, 8, 1]\nL.append(5)\nprint(L)",
            "out": "[3, 8, 1, 5]",
            "why": [
              "append adds at the end.",
              "append aggiunge in fondo."
            ]
          },
          {
            "code": "L = [3, 8, 1]\nprint(L[1] + L[-1])",
            "out": "9",
            "why": [
              "8 + 1.",
              "8 + 1."
            ]
          },
          {
            "code": "m = [[1, 2], [3, 4]]\nprint(m[1][1])",
            "out": "4",
            "why": [
              "Row 1, column 1.",
              "Riga 1, colonna 1."
            ]
          },
          {
            "code": "print(sorted([5, 2, 9]))",
            "out": "[2, 5, 9]",
            "why": [
              "sorted returns a new sorted list.",
              "sorted restituisce una nuova lista ordinata."
            ]
          },
          {
            "code": "print(len(range(0, 10, 2)))",
            "out": "5",
            "why": [
              "0, 2, 4, 6, 8. A range is an immutable sequence (CLIL p. 403).",
              "0, 2, 4, 6, 8. Un range è una sequenza immutabile (CLIL p. 403)."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>IndexError! IndexError! I'm the Index Out-of-Range Yokai. Ask for item 10 of a 3-item list and I strike!</p>",
          "<p>IndexError! IndexError! Sono lo Yokai dell'Indice Fuori Limite. Chiedi l'elemento 10 di una lista da 3 e colpisco!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "team = [\"A\", \"B\", \"C\"]. What is team[1]?",
          "team = [\"A\", \"B\", \"C\"]. Cos'è team[1]?"
        ],
        "a": [
          [
            "\"B\"",
            "\"B\""
          ],
          [
            "\"A\"",
            "\"A\""
          ],
          [
            "\"C\"",
            "\"C\""
          ],
          [
            "An error",
            "Un errore"
          ]
        ],
        "why": [
          "Indexes start at 0.",
          "Gli indici partono da 0."
        ]
      },
      {
        "q": [
          "What does team.append(\"D\") do?",
          "Cosa fa team.append(\"D\")?"
        ],
        "a": [
          [
            "Adds \"D\" at the end of the list",
            "Aggiunge \"D\" in fondo alla lista"
          ],
          [
            "Deletes \"D\"",
            "Cancella \"D\""
          ],
          [
            "Sorts the list",
            "Ordina la lista"
          ],
          [
            "Prints \"D\"",
            "Stampa \"D\""
          ]
        ],
        "why": [
          "Lists are mutable.",
          "Le liste sono modificabili."
        ]
      },
      {
        "q": [
          "m = [[1, 2, 3], [4, 5, 6]]. What is m[0][2]?",
          "m = [[1, 2, 3], [4, 5, 6]]. Cos'è m[0][2]?"
        ],
        "a": [
          [
            "3",
            "3"
          ],
          [
            "2",
            "2"
          ],
          [
            "4",
            "4"
          ],
          [
            "6",
            "6"
          ]
        ],
        "why": [
          "Row 0, column 2.",
          "Riga 0, colonna 2."
        ]
      },
      {
        "q": [
          "open(\"notes.txt\", \"w\") will…",
          "open(\"note.txt\", \"w\") farà…"
        ],
        "a": [
          [
            "Open the file for writing, replacing its old content",
            "Aprire il file in scrittura, sostituendo il vecchio contenuto"
          ],
          [
            "Only read the file",
            "Solo leggere il file"
          ],
          [
            "Delete the computer",
            "Cancellare il computer"
          ],
          [
            "Print the file",
            "Stampare il file"
          ]
        ],
        "why": [
          "Use \"a\" to add without erasing.",
          "Usa \"a\" per aggiungere senza cancellare."
        ]
      },
      {
        "q": [
          "Why use \"with open(…) as f:\"?",
          "Perché usare \"with open(…) as f:\"?"
        ],
        "a": [
          [
            "It closes the file automatically",
            "Chiude il file automaticamente"
          ],
          [
            "It makes the file bigger",
            "Rende il file più grande"
          ],
          [
            "It encrypts the file",
            "Cifra il file"
          ],
          [
            "It is required for printing",
            "Serve per stampare"
          ]
        ],
        "why": [
          "Safer and cleaner.",
          "Più sicuro e ordinato."
        ]
      },
      {
        "q": [
          "Lists are mutable; strings are…",
          "Le liste sono modificabili; le stringhe sono…"
        ],
        "a": [
          [
            "Immutable",
            "Immutabili"
          ],
          [
            "Also mutable",
            "Anche loro modificabili"
          ],
          [
            "Numbers",
            "Numeri"
          ],
          [
            "Files",
            "File"
          ]
        ],
        "why": [
          "String methods return new strings.",
          "I metodi delle stringhe restituiscono nuove stringhe."
        ]
      }
    ]
  },
  {
    "id": "c16m1",
    "arc": 15,
    "sec": "16.1–16.2 + CLIL",
    "pages": "404–411, 421",
    "hue": 30,
    "horns": 3,
    "eyes": 2,
    "title": [
      "Summoning Functions",
      "Evocare le funzioni"
    ],
    "topic": [
      "Functions, parameters, return values, modules",
      "Funzioni, parametri, valori di ritorno, moduli"
    ],
    "demon": [
      "Copy-Paste Kappa",
      "Kappa del Copia-Incolla"
    ],
    "tech": [
      "Python Form · Tenth Technique: Function Summon",
      "Stile Python · Decima Tecnica: Evocazione della Funzione"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "funcvis",
        "code": [
          "def area(b, h):\n    return b * h\n\nprint(area(3, 4))   # 12\nprint(area(5, 2))   # 10",
          "def area(b, h):\n    return b * h\n\nprint(area(3, 4))   # 12\nprint(area(5, 2))   # 10"
        ],
        "text": [
          "<p>A [[function|funzione]] is a named block of code you can reuse. You create it with [[def|def]], give it [[parameters|parametri]], and it sends back a result with [[return|return]]. Then you [[call|chiamare]] it as many times as you like.</p><p>The CLIL page compares maths functions, like f(x) = 2x, with programming functions.</p>",
          "<p>Una [[function|funzione]] è un blocco di codice con un nome, da riutilizzare. La crei con [[def|def]], le dai dei [[parameters|parametri]] e restituisce un risultato con [[return|return]]. Poi puoi [[call|chiamarla]] tutte le volte che vuoi.</p><p>La pagina CLIL confronta le funzioni matematiche, come f(x) = 2x, con quelle della programmazione.</p>"
        ]
      },
      {
        "who": "s",
        "code": [
          "import math\nimport random\n\nprint(math.sqrt(49))          # 7.0\nprint(random.randint(1, 6))   # a dice roll",
          "import math\nimport random\n\nprint(math.sqrt(49))          # 7.0\nprint(random.randint(1, 6))   # un lancio di dado"
        ],
        "text": [
          "<p>A [[module|modulo]] is a file full of ready-made functions. <b>import</b> brings it into your program: math for maths, random for random numbers, and many more.</p><p>Now arrange the lines into a working program.</p>",
          "<p>Un [[module|modulo]] è un file pieno di funzioni pronte. <b>import</b> lo porta nel tuo programma: math per la matematica, random per i numeri casuali e molti altri.</p><p>Ora metti in ordine le righe per ottenere un programma funzionante.</p>"
        ]
      },
      {
        "type": "order",
        "code": true,
        "title": [
          "Arrange the program",
          "Metti in ordine il programma"
        ],
        "steps": [
          "import math",
          "def hypotenuse(a, b):",
          "    return math.sqrt(a**2 + b**2)",
          "h = hypotenuse(3, 4)",
          "print(h)"
        ],
        "hint": [
          "Import first, define before you call, print last.",
          "Prima import, definisci prima di chiamare, stampa per ultimo."
        ]
      },
      {
        "type": "predict",
        "rounds": [
          {
            "code": "def double(x):\n    return x * 2\nprint(double(4))",
            "out": "8",
            "why": [
              "4 × 2.",
              "4 × 2."
            ]
          },
          {
            "code": "def greet(name):\n    print(\"Hi\", name)\ngreet(\"Ren\")",
            "out": "Hi Ren",
            "why": [
              "The function prints directly.",
              "La funzione stampa direttamente."
            ]
          },
          {
            "code": "def f(x):\n    return x + 1\nprint(f(f(1)))",
            "out": "3",
            "why": [
              "f(1) = 2, then f(2) = 3.",
              "f(1) = 2, poi f(2) = 3."
            ]
          },
          {
            "code": "import math\nprint(math.sqrt(49))",
            "out": "7.0",
            "why": [
              "sqrt returns a float.",
              "sqrt restituisce un float."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Copy, paste, copy, paste! I'm the Copy-Paste Kappa. Why write a function when you can repeat the same code 50 times?</p>",
          "<p>Copia, incolla, copia, incolla! Sono il Kappa del Copia-Incolla. Perché scrivere una funzione quando puoi ripetere lo stesso codice 50 volte?</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "Which keyword creates a function in Python?",
          "Quale parola chiave crea una funzione in Python?"
        ],
        "a": [
          [
            "def",
            "def"
          ],
          [
            "func",
            "func"
          ],
          [
            "return",
            "return"
          ],
          [
            "make",
            "make"
          ]
        ],
        "why": [
          "def = define.",
          "def = define (definisci)."
        ]
      },
      {
        "q": [
          "What does return do?",
          "Cosa fa return?"
        ],
        "a": [
          [
            "Sends a value back to where the function was called",
            "Restituisce un valore a chi ha chiamato la funzione"
          ],
          [
            "Restarts the program",
            "Riavvia il programma"
          ],
          [
            "Prints on screen",
            "Stampa sullo schermo"
          ],
          [
            "Deletes the function",
            "Cancella la funzione"
          ]
        ],
        "why": [
          "The call takes the returned value.",
          "La chiamata assume il valore restituito."
        ]
      },
      {
        "q": [
          "In def area(b, h):, b and h are…",
          "In def area(b, h):, b e h sono…"
        ],
        "a": [
          [
            "Parameters",
            "Parametri"
          ],
          [
            "Modules",
            "Moduli"
          ],
          [
            "Keywords",
            "Parole chiave"
          ],
          [
            "Strings",
            "Stringhe"
          ]
        ],
        "why": [
          "They receive the values passed in.",
          "Ricevono i valori passati."
        ]
      },
      {
        "q": [
          "Why use functions?",
          "Perché usare le funzioni?"
        ],
        "a": [
          [
            "To reuse code and split a program into clear parts",
            "Per riusare il codice e dividere il programma in parti chiare"
          ],
          [
            "To make programs longer",
            "Per allungare i programmi"
          ],
          [
            "Because Python requires them",
            "Perché Python le richiede sempre"
          ],
          [
            "To slow the CPU",
            "Per rallentare la CPU"
          ]
        ],
        "why": [
          "Write once, call many times.",
          "Scrivi una volta, chiama tante volte."
        ]
      },
      {
        "q": [
          "import math lets you…",
          "import math ti permette di…"
        ],
        "a": [
          [
            "Use ready-made maths functions like math.sqrt()",
            "Usare funzioni matematiche pronte come math.sqrt()"
          ],
          [
            "Download a calculator",
            "Scaricare una calcolatrice"
          ],
          [
            "Delete numbers",
            "Cancellare numeri"
          ],
          [
            "Open a spreadsheet",
            "Aprire un foglio di calcolo"
          ]
        ],
        "why": [
          "Modules extend Python.",
          "I moduli estendono Python."
        ]
      },
      {
        "q": [
          "A function must be defined…",
          "Una funzione va definita…"
        ],
        "a": [
          [
            "Before it is called",
            "Prima di essere chiamata"
          ],
          [
            "After it is called",
            "Dopo essere stata chiamata"
          ],
          [
            "Inside print()",
            "Dentro print()"
          ],
          [
            "Only in a separate file",
            "Solo in un file separato"
          ]
        ],
        "why": [
          "Python reads top to bottom.",
          "Python legge dall'alto in basso."
        ]
      }
    ]
  },
  {
    "id": "c16m2",
    "arc": 15,
    "sec": "16.3 + final",
    "pages": "412–422",
    "hue": 275,
    "horns": 5,
    "eyes": 3,
    "boss": true,
    "title": [
      "Final Battle: Nullvoid's True Form",
      "Battaglia finale: la vera forma di Nullvoid"
    ],
    "topic": [
      "Building a project, stacks and queues (LIFO/FIFO), women in computing",
      "Creare un progetto, pile e code (LIFO/FIFO), parità di genere nell'informatica"
    ],
    "demon": [
      "Nullvoid, True Form",
      "Nullvoid, Vera Forma"
    ],
    "tech": [
      "Ultimate Form: Full-Stack Burst",
      "Forma Suprema: Esplosione Full-Stack"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "fifolifo",
        "text": [
          "<p>Big programs are built as a [[project|progetto]]: split the problem into functions, put related functions into modules, test each piece, then put them together. Decomposition, remember?</p><p>Two classic ways to store data: a [[stack|pila]] (LIFO) and a [[queue|coda]] (FIFO).</p>",
          "<p>I programmi grandi si costruiscono come un [[project|progetto]]: dividi il problema in funzioni, raggruppa le funzioni in moduli, prova ogni pezzo, poi mettili insieme. Scomposizione, ricordi?</p><p>Due modi classici di conservare i dati: la [[stack|pila]] (LIFO) e la [[queue|coda]] (FIFO).</p>"
        ]
      },
      {
        "type": "stackq"
      },
      {
        "who": "s",
        "vis": "pioneers",
        "text": [
          "<p>Your book's final task is a presentation on gender equality in computing. Women were there from the very beginning: Ada Lovelace, Grace Hopper, Margaret Hamilton… and today there are still far fewer women than men in the field. You can help change that, {name}.</p>",
          "<p>Il compito finale del libro è una presentazione sulla parità di genere nell'informatica. Le donne ci sono state fin dall'inizio: Ada Lovelace, Grace Hopper, Margaret Hamilton… e ancora oggi nel settore ci sono molte meno donne che uomini. Puoi contribuire a cambiare le cose, {name}.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "boss",
        "text": [
          "<p>Nullvoid has returned in his True Form, stronger than ever. He knows everything from all three units. So do you. This is the final battle, {name}. Go!</p>",
          "<p>Nullvoid è tornato nella sua Vera Forma, più forte che mai. Conosce tutto delle tre unità. Anche tu. È la battaglia finale, {name}. Vai!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "A stack works as…",
          "Una pila funziona come…"
        ],
        "a": [
          [
            "LIFO: last in, first out",
            "LIFO: l'ultimo entrato è il primo a uscire"
          ],
          [
            "FIFO: first in, first out",
            "FIFO: il primo entrato è il primo a uscire"
          ],
          [
            "Random order",
            "Ordine casuale"
          ],
          [
            "Alphabetical order",
            "Ordine alfabetico"
          ]
        ],
        "why": [
          "Like a pile of plates, or the Undo button.",
          "Come una pila di piatti, o il tasto Annulla."
        ]
      },
      {
        "q": [
          "A queue works as…",
          "Una coda funziona come…"
        ],
        "a": [
          [
            "FIFO: first in, first out",
            "FIFO: il primo entrato è il primo a uscire"
          ],
          [
            "LIFO: last in, first out",
            "LIFO: l'ultimo entrato è il primo a uscire"
          ],
          [
            "Biggest first",
            "Prima il più grande"
          ],
          [
            "Random order",
            "Ordine casuale"
          ]
        ],
        "why": [
          "Like a line at the canteen, or a printer queue.",
          "Come la fila in mensa, o la coda di stampa."
        ]
      },
      {
        "q": [
          "What does print(10 % 4) show?",
          "Cosa mostra print(10 % 4)?"
        ],
        "a": [
          [
            "2",
            "2"
          ],
          [
            "2.5",
            "2.5"
          ],
          [
            "4",
            "4"
          ],
          [
            "40",
            "40"
          ]
        ],
        "why": [
          "10 = 4 × 2 + 2.",
          "10 = 4 × 2 + 2."
        ]
      },
      {
        "q": [
          "for i in range(3) runs how many times?",
          "for i in range(3) quante volte viene eseguito?"
        ],
        "a": [
          [
            "3",
            "3"
          ],
          [
            "4",
            "4"
          ],
          [
            "2",
            "2"
          ],
          [
            "0",
            "0"
          ]
        ],
        "why": [
          "0, 1, 2.",
          "0, 1, 2."
        ]
      },
      {
        "q": [
          "\"Hunter\"[0] is…",
          "\"Hunter\"[0] è…"
        ],
        "a": [
          [
            "\"H\"",
            "\"H\""
          ],
          [
            "\"u\"",
            "\"u\""
          ],
          [
            "\"r\"",
            "\"r\""
          ],
          [
            "An error",
            "Un errore"
          ]
        ],
        "why": [
          "Index 0 is the first.",
          "L'indice 0 è il primo."
        ]
      },
      {
        "q": [
          "In a flowchart, a rhombus means…",
          "In un diagramma di flusso, il rombo indica…"
        ],
        "a": [
          [
            "A decision",
            "Una decisione"
          ],
          [
            "Start",
            "L'inizio"
          ],
          [
            "Input",
            "Un input"
          ],
          [
            "A function",
            "Una funzione"
          ]
        ],
        "why": [
          "Yes/no question.",
          "Domanda sì/no."
        ]
      },
      {
        "q": [
          "Which Python line compares two values?",
          "Quale riga Python confronta due valori?"
        ],
        "a": [
          [
            "if a == b:",
            "if a == b:"
          ],
          [
            "a = b",
            "a = b"
          ],
          [
            "def a(b):",
            "def a(b):"
          ],
          [
            "import a",
            "import a"
          ]
        ],
        "why": [
          "== compares; = assigns.",
          "== confronta; = assegna."
        ]
      },
      {
        "q": [
          "input() returns…",
          "input() restituisce…"
        ],
        "a": [
          [
            "A string",
            "Una stringa"
          ],
          [
            "An int",
            "Un int"
          ],
          [
            "A list",
            "Una lista"
          ],
          [
            "Nothing",
            "Niente"
          ]
        ],
        "why": [
          "Convert with int() for numbers.",
          "Converti con int() per i numeri."
        ]
      },
      {
        "q": [
          "A spreadsheet formula always starts with…",
          "Una formula del foglio di calcolo inizia sempre con…"
        ],
        "a": [
          [
            "=",
            "="
          ],
          [
            "$",
            "$"
          ],
          [
            "#",
            "#"
          ],
          [
            "def",
            "def"
          ]
        ],
        "why": [
          "=SUM(…), =SOMMA(…)",
          "=SOMMA(…), =SUM(…)"
        ]
      },
      {
        "q": [
          "Ransomware…",
          "Il ransomware…"
        ],
        "a": [
          [
            "Encrypts files and demands payment",
            "Cifra i file e chiede un riscatto"
          ],
          [
            "Speeds up the PC",
            "Velocizza il PC"
          ],
          [
            "Is a type of backup",
            "È un tipo di backup"
          ],
          [
            "Is a spreadsheet function",
            "È una funzione del foglio di calcolo"
          ]
        ],
        "why": [
          "Backups defeat it.",
          "Il backup lo sconfigge."
        ]
      },
      {
        "q": [
          "Python is…",
          "Python è…"
        ],
        "a": [
          [
            "A high-level, interpreted language",
            "Un linguaggio ad alto livello, interpretato"
          ],
          [
            "Machine language",
            "Linguaggio macchina"
          ],
          [
            "A spreadsheet app",
            "Un'app per fogli di calcolo"
          ],
          [
            "An operating system",
            "Un sistema operativo"
          ]
        ],
        "why": [
          "Created by Guido van Rossum.",
          "Creato da Guido van Rossum."
        ]
      },
      {
        "q": [
          "def f(x): return x * 3. What is f(4)?",
          "def f(x): return x * 3. Quanto vale f(4)?"
        ],
        "a": [
          [
            "12",
            "12"
          ],
          [
            "7",
            "7"
          ],
          [
            "43",
            "43"
          ],
          [
            "x3",
            "x3"
          ]
        ],
        "why": [
          "4 × 3.",
          "4 × 3."
        ]
      }
    ]
  },
  {
    "id": "p1m1",
    "arc": 16,
    "sec": "1.1–1.3",
    "pages": "2–18",
    "hue": 28,
    "horns": 3,
    "eyes": 2,
    "title": [
      "Measuring the World",
      "Misurare il mondo"
    ],
    "topic": [
      "Physical quantities, the SI, fundamental vs derived",
      "Grandezze fisiche, il SI, fondamentali e derivate"
    ],
    "demon": [
      "Unit Gremlin",
      "Gremlin delle Unità"
    ],
    "tech": [
      "Measure Form · First Technique: SI Strike",
      "Stile della Misura · Prima Tecnica: Colpo del SI"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "phQuant",
        "text": [
          "<p>Welcome to the physics wing, {name}. Same academy, new discipline.</p><p>Physics begins with <b>measuring</b>. A [[physical quantity|grandezza fisica]] is anything we can measure — a length, a time, a temperature. Measuring means comparing it with a [[unit of measurement|unità di misura]] and getting a number.</p>",
          "<p>Benvenuta nell'ala di fisica, {name}. Stessa accademia, nuova disciplina.</p><p>La fisica comincia dal <b>misurare</b>. Una [[physical quantity|grandezza fisica]] è tutto ciò che possiamo misurare — una lunghezza, un tempo, una temperatura. Misurare significa confrontarla con un'[[unit of measurement|unità di misura]] e ottenere un numero.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "phQuant",
        "text": [
          "<p>Scientists agree on one set of units: the [[International System|Sistema Internazionale]] (SI). It has seven [[fundamental quantities|grandezze fondamentali]] — among them <b>length</b> (metre, m), <b>mass</b> (kilogram, kg) and <b>time</b> (second, s).</p><p>Everything else is a [[derived quantity|grandezza derivata]], built from these: area is m², speed is m/s, density is kg/m³.</p><p>Very large or very small numbers are written in [[scientific notation|notazione scientifica]], like 3·10⁸ m/s.</p>",
          "<p>Gli scienziati si accordano su un insieme di unità: il [[International System|Sistema Internazionale]] (SI). Ha sette [[fundamental quantities|grandezze fondamentali]] — tra cui <b>lunghezza</b> (metro, m), <b>massa</b> (chilogrammo, kg) e <b>tempo</b> (secondo, s).</p><p>Tutto il resto è una [[derived quantity|grandezza derivata]], costruita da queste: l'area è m², la velocità è m/s, la densità è kg/m³.</p><p>I numeri molto grandi o molto piccoli si scrivono in [[scientific notation|notazione scientifica]], come 3·10⁸ m/s.</p>"
        ]
      },
      {
        "who": "y",
        "vis": "phQuant",
        "text": [
          "<p>So the fundamental ones are the \"building blocks\", and the derived ones are combinations of them?</p>",
          "<p>Quindi quelle fondamentali sono i \"mattoni\", e quelle derivate sono loro combinazioni?</p>"
        ]
      },
      {
        "who": "s",
        "vis": "phQuant",
        "text": [
          "<p>Exactly. The Unit Gremlin has scrambled a pile of quantities. Sort each one: is it <b>fundamental</b> or <b>derived</b>?</p>",
          "<p>Esatto. Il Gremlin delle Unità ha mescolato un mucchio di grandezze. Smista ciascuna: è <b>fondamentale</b> o <b>derivata</b>?</p>"
        ]
      },
      {
        "type": "sort",
        "title": [
          "Fundamental or derived?",
          "Fondamentale o derivata?"
        ],
        "cats": [
          [
            "Fundamental",
            "Fondamentale"
          ],
          [
            "Derived",
            "Derivata"
          ]
        ],
        "items": [
          {
            "n": [
              "Length (m)",
              "Lunghezza (m)"
            ],
            "i": "layers",
            "c": 0,
            "why": [
              "Length is one of the seven SI base quantities.",
              "La lunghezza è una delle sette grandezze base del SI."
            ]
          },
          {
            "n": [
              "Mass (kg)",
              "Massa (kg)"
            ],
            "i": "file",
            "c": 0,
            "why": [
              "Mass is a fundamental SI quantity, measured in kilograms.",
              "La massa è una grandezza fondamentale del SI, misurata in chilogrammi."
            ]
          },
          {
            "n": [
              "Time (s)",
              "Tempo (s)"
            ],
            "i": "book",
            "c": 0,
            "why": [
              "Time is fundamental; its unit is the second.",
              "Il tempo è fondamentale; la sua unità è il secondo."
            ]
          },
          {
            "n": [
              "Speed (m/s)",
              "Velocità (m/s)"
            ],
            "i": "robot",
            "c": 1,
            "why": [
              "Speed = length ÷ time, so it is derived.",
              "La velocità = lunghezza ÷ tempo, quindi è derivata."
            ]
          },
          {
            "n": [
              "Area (m²)",
              "Area (m²)"
            ],
            "i": "puzzle",
            "c": 1,
            "why": [
              "Area = length × length, a derived quantity.",
              "L'area = lunghezza × lunghezza, una grandezza derivata."
            ]
          },
          {
            "n": [
              "Density (kg/m³)",
              "Densità (kg/m³)"
            ],
            "i": "eye",
            "c": 1,
            "why": [
              "Density = mass ÷ volume, so it is derived.",
              "La densità = massa ÷ volume, quindi è derivata."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Grr… I'm the Unit Gremlin! I swap metres for miles and grams for ounces until nothing adds up!</p>",
          "<p>Grr… Sono il Gremlin delle Unità! Scambio metri con miglia e grammi con once finché non torna più niente!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "What is a physical quantity?",
          "Che cos'è una grandezza fisica?"
        ],
        "a": [
          [
            "Something that can be measured",
            "Qualcosa che si può misurare"
          ],
          [
            "A type of atom",
            "Un tipo di atomo"
          ],
          [
            "A unit of measurement",
            "Un'unità di misura"
          ],
          [
            "A scientific law",
            "Una legge scientifica"
          ]
        ],
        "why": [
          "A physical quantity is any property we can measure and express with a number and a unit.",
          "Una grandezza fisica è una proprietà che possiamo misurare ed esprimere con un numero e un'unità."
        ]
      },
      {
        "q": [
          "The SI unit of length is the…",
          "L'unità SI della lunghezza è il…"
        ],
        "a": [
          [
            "Metre",
            "Metro"
          ],
          [
            "Kilogram",
            "Chilogrammo"
          ],
          [
            "Second",
            "Secondo"
          ],
          [
            "Litre",
            "Litro"
          ]
        ],
        "why": [
          "Length is measured in metres (m) in the SI.",
          "La lunghezza si misura in metri (m) nel SI."
        ]
      },
      {
        "q": [
          "Which of these is a fundamental quantity?",
          "Quale di queste è una grandezza fondamentale?"
        ],
        "a": [
          [
            "Mass",
            "Massa"
          ],
          [
            "Speed",
            "Velocità"
          ],
          [
            "Area",
            "Area"
          ],
          [
            "Density",
            "Densità"
          ]
        ],
        "why": [
          "Mass is one of the seven SI base quantities; the others are derived.",
          "La massa è una delle sette grandezze base del SI; le altre sono derivate."
        ]
      },
      {
        "q": [
          "Speed (m/s) is a derived quantity because…",
          "La velocità (m/s) è una grandezza derivata perché…"
        ],
        "a": [
          [
            "It combines length and time",
            "Combina lunghezza e tempo"
          ],
          [
            "It cannot be measured",
            "Non si può misurare"
          ],
          [
            "It has no unit",
            "Non ha unità"
          ],
          [
            "It is always constant",
            "È sempre costante"
          ]
        ],
        "why": [
          "Speed = length ÷ time, so it is built from fundamental quantities.",
          "La velocità = lunghezza ÷ tempo, quindi è costruita da grandezze fondamentali."
        ]
      },
      {
        "q": [
          "How do you write 300 000 000 in scientific notation?",
          "Come si scrive 300.000.000 in notazione scientifica?"
        ],
        "a": [
          [
            "3 × 10⁸",
            "3 × 10⁸"
          ],
          [
            "3 × 10⁶",
            "3 × 10⁶"
          ],
          [
            "30 × 10⁷",
            "30 × 10⁷"
          ],
          [
            "0.3 × 10⁹",
            "0,3 × 10⁹"
          ]
        ],
        "why": [
          "Move the point so one non-zero digit stays before it: 3 × 10⁸.",
          "Si sposta la virgola lasciando una cifra diversa da zero davanti: 3 × 10⁸."
        ]
      },
      {
        "q": [
          "Why does science use the International System (SI)?",
          "Perché la scienza usa il Sistema Internazionale (SI)?"
        ],
        "a": [
          [
            "So measurements are comparable everywhere",
            "Così le misure sono confrontabili ovunque"
          ],
          [
            "Because it is older",
            "Perché è più antico"
          ],
          [
            "To make physics harder",
            "Per rendere la fisica più difficile"
          ],
          [
            "Only Italy uses it",
            "Lo usa solo l'Italia"
          ]
        ],
        "why": [
          "A shared set of units lets scientists everywhere compare results.",
          "Un insieme di unità condiviso permette a tutti gli scienziati di confrontare i risultati."
        ]
      }
    ]
  },
  {
    "id": "p1m2",
    "arc": 16,
    "sec": "1.4–1.5",
    "pages": "19–26",
    "hue": 48,
    "horns": 2,
    "eyes": 3,
    "title": [
      "Big and Small",
      "Grande e piccolo"
    ],
    "topic": [
      "Scientific notation and orders of magnitude",
      "Notazione scientifica e ordini di grandezza"
    ],
    "demon": [
      "Zero Swarm",
      "Sciame di Zeri"
    ],
    "tech": [
      "Measure Form · Second Technique: Powers of Ten",
      "Stile della Misura · Seconda Tecnica: Potenze di Dieci"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "phScale",
        "text": [
          "<p>Physics measures the atom and the galaxy with the same units, {name}. The numbers get unwieldy — so we tame them.</p><p>In [[scientific notation|notazione scientifica]] we write a number as a value between 1 and 10 times a power of ten: 384 000 000 m becomes 3.84·10⁸ m. A negative exponent means very small: 0.000 002 m = 2·10⁻⁶ m.</p>",
          "<p>La fisica misura l'atomo e la galassia con le stesse unità, {name}. I numeri diventano enormi — quindi li addomestichiamo.</p><p>In [[scientific notation|notazione scientifica]] scriviamo un numero come un valore tra 1 e 10 per una potenza di dieci: 384 000 000 m diventa 3,84·10⁸ m. Un esponente negativo indica qualcosa di molto piccolo: 0,000 002 m = 2·10⁻⁶ m.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "phScale",
        "text": [
          "<p>The [[order of magnitude|ordine di grandezza]] is just the power of ten closest to the number — a quick sense of its size. 540 is about 10³ (≈1000); 0.004 is about 10⁻³.</p><p>It lets you compare an ant and a whale at a glance: how many powers of ten apart are they?</p>",
          "<p>L'[[order of magnitude|ordine di grandezza]] è semplicemente la potenza di dieci più vicina al numero — un'idea rapida della sua dimensione. 540 è circa 10³ (≈1000); 0,004 è circa 10⁻³.</p><p>Ti permette di confrontare una formica e una balena a colpo d'occhio: quante potenze di dieci le separano?</p>"
        ]
      },
      {
        "who": "y",
        "vis": "phScale",
        "text": [
          "<p>So the exponent is basically \"how many zeros\", and the order of magnitude is the nearest round power?</p>",
          "<p>Quindi l'esponente è in pratica \"quanti zeri\", e l'ordine di grandezza è la potenza tonda più vicina?</p>"
        ]
      },
      {
        "who": "s",
        "vis": "phScale",
        "text": [
          "<p>Right. The Zero Swarm scrambled a set of lengths. Put them in order, smallest to largest, by their power of ten.</p>",
          "<p>Esatto. Lo Sciame di Zeri ha mescolato un insieme di lunghezze. Mettile in ordine, dalla più piccola alla più grande, secondo la loro potenza di dieci.</p>"
        ]
      },
      {
        "type": "order",
        "title": [
          "Order by size (small → large)",
          "Ordina per dimensione (piccolo → grande)"
        ],
        "hint": [
          "Compare the powers of ten.",
          "Confronta le potenze di dieci."
        ],
        "steps": [
          [
            "Radius of an atom · 10⁻¹⁰ m",
            "Raggio di un atomo · 10⁻¹⁰ m"
          ],
          [
            "Thickness of a hair · 10⁻⁴ m",
            "Spessore di un capello · 10⁻⁴ m"
          ],
          [
            "Height of a person · 10⁰ m",
            "Altezza di una persona · 10⁰ m"
          ],
          [
            "A marathon · 10⁴ m",
            "Una maratona · 10⁴ m"
          ],
          [
            "Radius of the Earth · 10⁷ m",
            "Raggio della Terra · 10⁷ m"
          ],
          [
            "Earth to the Sun · 10¹¹ m",
            "Terra-Sole · 10¹¹ m"
          ]
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Bzzt! I'm the Zero Swarm! I bury every number under a storm of zeros until you lose count!</p>",
          "<p>Bzzt! Sono lo Sciame di Zeri! Seppellisco ogni numero sotto una tempesta di zeri finché non perdi il conto!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "Write 52 000 in scientific notation.",
          "Scrivi 52 000 in notazione scientifica."
        ],
        "a": [
          [
            "5.2 × 10⁴",
            "5,2 × 10⁴"
          ],
          [
            "52 × 10³",
            "52 × 10³"
          ],
          [
            "5.2 × 10³",
            "5,2 × 10³"
          ],
          [
            "0.52 × 10⁵",
            "0,52 × 10⁵"
          ]
        ],
        "why": [
          "One non-zero digit before the point: 5.2 × 10⁴.",
          "Una cifra diversa da zero davanti alla virgola: 5,2 × 10⁴."
        ]
      },
      {
        "q": [
          "Write 0.00076 in scientific notation.",
          "Scrivi 0,00076 in notazione scientifica."
        ],
        "a": [
          [
            "7.6 × 10⁻⁴",
            "7,6 × 10⁻⁴"
          ],
          [
            "7.6 × 10⁴",
            "7,6 × 10⁴"
          ],
          [
            "76 × 10⁻³",
            "76 × 10⁻³"
          ],
          [
            "7.6 × 10⁻³",
            "7,6 × 10⁻³"
          ]
        ],
        "why": [
          "Move the point 4 places right, so the exponent is −4.",
          "Si sposta la virgola di 4 posti a destra, quindi l'esponente è −4."
        ]
      },
      {
        "q": [
          "What is the order of magnitude of 640?",
          "Qual è l'ordine di grandezza di 640?"
        ],
        "a": [
          [
            "10³",
            "10³"
          ],
          [
            "10²",
            "10²"
          ],
          [
            "10⁴",
            "10⁴"
          ],
          [
            "640",
            "640"
          ]
        ],
        "why": [
          "640 = 6.4 × 10²; since 6.4 ≥ 5 we round up to 10³.",
          "640 = 6,4 × 10²; poiché 6,4 ≥ 5 si arrotonda a 10³."
        ]
      },
      {
        "q": [
          "10⁶ is how many times bigger than 10³?",
          "10⁶ è quante volte più grande di 10³?"
        ],
        "a": [
          [
            "1000",
            "1000"
          ],
          [
            "3",
            "3"
          ],
          [
            "100",
            "100"
          ],
          [
            "2",
            "2"
          ]
        ],
        "why": [
          "10⁶ ÷ 10³ = 10³ = 1000.",
          "10⁶ ÷ 10³ = 10³ = 1000."
        ]
      },
      {
        "q": [
          "Which length has the largest order of magnitude?",
          "Quale lunghezza ha l'ordine di grandezza maggiore?"
        ],
        "a": [
          [
            "10⁷ m",
            "10⁷ m"
          ],
          [
            "10⁴ m",
            "10⁴ m"
          ],
          [
            "10⁰ m",
            "10⁰ m"
          ],
          [
            "10⁻² m",
            "10⁻² m"
          ]
        ],
        "why": [
          "The largest exponent wins: 10⁷.",
          "Vince l'esponente più grande: 10⁷."
        ]
      },
      {
        "q": [
          "Why is scientific notation useful in physics?",
          "Perché la notazione scientifica è utile in fisica?"
        ],
        "a": [
          [
            "It handles very large and very small numbers cleanly",
            "Gestisce con ordine numeri molto grandi e molto piccoli"
          ],
          [
            "It makes numbers exact",
            "Rende i numeri esatti"
          ],
          [
            "It removes all units",
            "Elimina tutte le unità"
          ],
          [
            "It only works for whole numbers",
            "Funziona solo con i numeri interi"
          ]
        ],
        "why": [
          "It compresses huge and tiny values into a short, comparable form.",
          "Comprime valori enormi e minuscoli in una forma breve e confrontabile."
        ]
      }
    ]
  ,
    "learning": {
      "version": 1,
      "objectives": [
        {
          "id": "p1m2-objective-1",
          "description": [
            "Write numbers in scientific notation",
            "Scrivere numeri in notazione scientifica"
          ],
          "successCriteria": [
            [
              "Explain the idea and apply it correctly in a short exercise.",
              "Spiegare il concetto e applicarlo correttamente in un breve esercizio."
            ]
          ]
        },
        {
          "id": "p1m2-objective-2",
          "description": [
            "Compare very large and very small quantities",
            "Confrontare grandezze molto grandi e molto piccole"
          ],
          "successCriteria": [
            [
              "Explain the idea and apply it correctly in a short exercise.",
              "Spiegare il concetto e applicarlo correttamente in un breve esercizio."
            ]
          ]
        }
      ],
      "prerequisites": [
        [
          "Review the key quantities and units from the previous mission.",
          "Ripassa le grandezze e le unità chiave della missione precedente."
        ]
      ],
      "concepts": [
        {
          "id": "standard-form",
          "title": [
            "Scientific notation",
            "Notazione scientifica"
          ],
          "explanation": [
            "Write a number as a × 10ⁿ, with 1 ≤ |a| < 10. Move the decimal point left for a positive exponent and right for a negative exponent.",
            "Scrivi un numero come a × 10ⁿ, con 1 ≤ |a| < 10. Sposta la virgola a sinistra per un esponente positivo e a destra per uno negativo."
          ],
          "example": [
            "Convert 45 000: move the decimal point four places left → 4.5 × 10⁴.",
            "Converti 45 000: sposta la virgola di quattro posti a sinistra → 4,5 × 10⁴."
          ],
          "workedExample": {
            "scenario": [
              "Convert 45 000: move the decimal point four places left → 4.5 × 10⁴.",
              "Converti 45 000: sposta la virgola di quattro posti a sinistra → 4,5 × 10⁴."
            ],
            "steps": [
              [
                "4.5 × 10⁴",
                "4,5 × 10⁴"
              ],
              [
                "The coefficient must be at least 1 and less than 10.",
                "Il coefficiente deve essere almeno 1 e minore di 10."
              ]
            ],
            "answer": [
              "The coefficient must be at least 1 and less than 10.",
              "Il coefficiente deve essere almeno 1 e minore di 10."
            ]
          },
          "misconceptions": [
            {
              "belief": [
                "A number such as 45 × 10³ is not in standard scientific notation.",
                "Un numero come 45 × 10³ non è scritto in notazione scientifica standard."
              ],
              "correction": [
                null,
                null
              ]
            }
          ],
          "knowledgePrompts": [
            [
              "Explain the key idea, then solve a new example.",
              "Spiega l'idea chiave, poi risolvi un nuovo esempio."
            ]
          ],
          "sceneIndexes": [
            0,
            1
          ]
        },
        {
          "id": "orders",
          "title": [
            "Orders of magnitude",
            "Ordini di grandezza"
          ],
          "explanation": [
            "Powers of ten help compare scales. With positive powers, a larger exponent means a larger number.",
            "Le potenze di dieci aiutano a confrontare le scale. Con esponenti positivi, un esponente maggiore indica un numero maggiore."
          ],
          "example": [
            "10⁶ is 1 000 times larger than 10³.",
            "10⁶ è 1 000 volte maggiore di 10³."
          ],
          "workedExample": {
            "scenario": [
              "10⁶ is 1 000 times larger than 10³.",
              "10⁶ è 1 000 volte maggiore di 10³."
            ],
            "steps": [
              [
                "10⁶ > 10³",
                "10⁶ > 10³"
              ],
              [
                "Compare the powers of ten first.",
                "Confronta prima le potenze di dieci."
              ]
            ],
            "answer": [
              "Compare the powers of ten first.",
              "Confronta prima le potenze di dieci."
            ]
          },
          "misconceptions": [
            {
              "belief": [
                "The exponent is not itself the value of the number.",
                "L'esponente non è il valore del numero."
              ],
              "correction": [
                null,
                null
              ]
            }
          ],
          "knowledgePrompts": [
            [
              "Explain the key idea, then solve a new example.",
              "Spiega l'idea chiave, poi risolvi un nuovo esempio."
            ]
          ],
          "sceneIndexes": [
            2
          ]
        }
      ],
      "guidedPractice": [
        {
          "id": "physics-1m2-guided",
          "title": [
            "Guided practice",
            "Esercitazione guidata"
          ],
          "instructions": [
            "Answer the first two questions. Use the worked examples and feedback to check each step.",
            "Rispondi alle prime due domande. Usa gli esempi svolti e il feedback per controllare ogni passaggio."
          ],
          "questions": [
            {
              "q": [
                "Write 72 000 in scientific notation.",
                "Scrivi 72 000 in notazione scientifica."
              ],
              "a": [
                [
                  "7.2 × 10⁴",
                  "7,2 × 10⁴"
                ],
                [
                  "72 × 10³",
                  "72 × 10³"
                ],
                [
                  "7.2 × 10³",
                  "7,2 × 10³"
                ],
                [
                  "0.72 × 10⁴",
                  "0,72 × 10⁴"
                ]
              ],
              "why": [
                "The decimal point moves four places left.",
                "La virgola si sposta di quattro posti a sinistra."
              ]
            },
            {
              "q": [
                "Which number is smallest?",
                "Quale numero è il più piccolo?"
              ],
              "a": [
                [
                  "2 × 10²",
                  "2 × 10²"
                ],
                [
                  "2 × 10⁴",
                  "2 × 10⁴"
                ],
                [
                  "2 × 10⁶",
                  "2 × 10⁶"
                ],
                [
                  "2 × 10³",
                  "2 × 10³"
                ]
              ],
              "why": [
                "With the same coefficient, the smallest exponent gives the smallest value.",
                "Con lo stesso coefficiente, l'esponente più piccolo dà il valore minore."
              ]
            }
          ],
          "hints": [
            [
              "Identify the quantity, rule or definition before calculating.",
              "Individua la grandezza, la regola o la definizione prima di calcolare."
            ],
            [
              "Check the unit and the direction or scale in your answer.",
              "Controlla l'unità e la direzione o la scala nella risposta."
            ]
          ],
          "sceneIndex": 3
        }
      ],
      "independentPractice": [
        {
          "id": "physics-1m2-independent",
          "title": [
            "Independent practice",
            "Esercitazione autonoma"
          ],
          "instructions": [
            "Answer without hints, then read the explanation and correct any mistake.",
            "Rispondi senza suggerimenti, poi leggi la spiegazione e correggi gli eventuali errori."
          ],
          "questions": [
            {
              "q": [
                "Write 0.0035 in scientific notation.",
                "Scrivi 0,0035 in notazione scientifica."
              ],
              "a": [
                [
                  "3.5 × 10⁻³",
                  "3,5 × 10⁻³"
                ],
                [
                  "3.5 × 10³",
                  "3,5 × 10³"
                ],
                [
                  "35 × 10⁻³",
                  "35 × 10⁻³"
                ],
                [
                  "0.35 × 10⁻²",
                  "0,35 × 10⁻²"
                ]
              ],
              "why": [
                "Move the decimal point three places right, so the exponent is −3.",
                "Sposta la virgola di tre posti a destra: l'esponente è −3."
              ]
            },
            {
              "q": [
                "Why is scientific notation useful?",
                "Perché è utile la notazione scientifica?"
              ],
              "a": [
                [
                  "It makes very large and small numbers easier to read.",
                  "Rende più facili da leggere numeri molto grandi e molto piccoli."
                ],
                [
                  "It changes the value.",
                  "Cambia il valore."
                ],
                [
                  "It removes the unit.",
                  "Elimina l'unità."
                ],
                [
                  "It works only for whole numbers.",
                  "Funziona solo con numeri interi."
                ]
              ],
              "why": [
                "It keeps the same value in a compact form.",
                "Mantiene lo stesso valore in una forma compatta."
              ]
            }
          ],
          "sceneIndex": 4
        }
      ],
      "knowledgeCheck": [
        {
          "q": [
            "Write 72 000 in scientific notation.",
            "Scrivi 72 000 in notazione scientifica."
          ],
          "a": [
            [
              "7.2 × 10⁴",
              "7,2 × 10⁴"
            ],
            [
              "72 × 10³",
              "72 × 10³"
            ],
            [
              "7.2 × 10³",
              "7,2 × 10³"
            ],
            [
              "0.72 × 10⁴",
              "0,72 × 10⁴"
            ]
          ],
          "why": [
            "The decimal point moves four places left.",
            "La virgola si sposta di quattro posti a sinistra."
          ]
        },
        {
          "q": [
            "Which number is smallest?",
            "Quale numero è il più piccolo?"
          ],
          "a": [
            [
              "2 × 10²",
              "2 × 10²"
            ],
            [
              "2 × 10⁴",
              "2 × 10⁴"
            ],
            [
              "2 × 10⁶",
              "2 × 10⁶"
            ],
            [
              "2 × 10³",
              "2 × 10³"
            ]
          ],
          "why": [
            "With the same coefficient, the smallest exponent gives the smallest value.",
            "Con lo stesso coefficiente, l'esponente più piccolo dà il valore minore."
          ]
        },
        {
          "q": [
            "Write 0.0035 in scientific notation.",
            "Scrivi 0,0035 in notazione scientifica."
          ],
          "a": [
            [
              "3.5 × 10⁻³",
              "3,5 × 10⁻³"
            ],
            [
              "3.5 × 10³",
              "3,5 × 10³"
            ],
            [
              "35 × 10⁻³",
              "35 × 10⁻³"
            ],
            [
              "0.35 × 10⁻²",
              "0,35 × 10⁻²"
            ]
          ],
          "why": [
            "Move the decimal point three places right, so the exponent is −3.",
            "Sposta la virgola di tre posti a destra: l'esponente è −3."
          ]
        },
        {
          "q": [
            "Why is scientific notation useful?",
            "Perché è utile la notazione scientifica?"
          ],
          "a": [
            [
              "It makes very large and small numbers easier to read.",
              "Rende più facili da leggere numeri molto grandi e molto piccoli."
            ],
            [
              "It changes the value.",
              "Cambia il valore."
            ],
            [
              "It removes the unit.",
              "Elimina l'unità."
            ],
            [
              "It works only for whole numbers.",
              "Funziona solo con numeri interi."
            ]
          ],
          "why": [
            "It keeps the same value in a compact form.",
            "Mantiene lo stesso valore in una forma compatta."
          ]
        }
      ],
      "summary": [
        [
          "Write a number as a × 10ⁿ, with 1 ≤ |a| < 10. Move the decimal point left for a positive exponent and right for a negative exponent.",
          "Scrivi un numero come a × 10ⁿ, con 1 ≤ |a| < 10. Sposta la virgola a sinistra per un esponente positivo e a destra per uno negativo."
        ],
        [
          "Powers of ten help compare scales. With positive powers, a larger exponent means a larger number.",
          "Le potenze di dieci aiutano a confrontare le scale. Con esponenti positivi, un esponente maggiore indica un numero maggiore."
        ]
      ],
      "masteryAssessment": {
        "title": [
          "Mastery trial",
          "Prova di maestria"
        ],
        "instructions": [
          "Apply the ideas independently. You need at least 75% to pass this mastery check.",
          "Applica le idee in autonomia. Serve almeno il 75% per superare questa verifica di maestria."
        ],
        "questions": [
          {
            "q": [
              "Write 72 000 in scientific notation.",
              "Scrivi 72 000 in notazione scientifica."
            ],
            "a": [
              [
                "7.2 × 10⁴",
                "7,2 × 10⁴"
              ],
              [
                "72 × 10³",
                "72 × 10³"
              ],
              [
                "7.2 × 10³",
                "7,2 × 10³"
              ],
              [
                "0.72 × 10⁴",
                "0,72 × 10⁴"
              ]
            ],
            "why": [
              "The decimal point moves four places left.",
              "La virgola si sposta di quattro posti a sinistra."
            ]
          },
          {
            "q": [
              "Which number is smallest?",
              "Quale numero è il più piccolo?"
            ],
            "a": [
              [
                "2 × 10²",
                "2 × 10²"
              ],
              [
                "2 × 10⁴",
                "2 × 10⁴"
              ],
              [
                "2 × 10⁶",
                "2 × 10⁶"
              ],
              [
                "2 × 10³",
                "2 × 10³"
              ]
            ],
            "why": [
              "With the same coefficient, the smallest exponent gives the smallest value.",
              "Con lo stesso coefficiente, l'esponente più piccolo dà il valore minore."
            ]
          },
          {
            "q": [
              "Write 0.0035 in scientific notation.",
              "Scrivi 0,0035 in notazione scientifica."
            ],
            "a": [
              [
                "3.5 × 10⁻³",
                "3,5 × 10⁻³"
              ],
              [
                "3.5 × 10³",
                "3,5 × 10³"
              ],
              [
                "35 × 10⁻³",
                "35 × 10⁻³"
              ],
              [
                "0.35 × 10⁻²",
                "0,35 × 10⁻²"
              ]
            ],
            "why": [
              "Move the decimal point three places right, so the exponent is −3.",
              "Sposta la virgola di tre posti a destra: l'esponente è −3."
            ]
          },
          {
            "q": [
              "Why is scientific notation useful?",
              "Perché è utile la notazione scientifica?"
            ],
            "a": [
              [
                "It makes very large and small numbers easier to read.",
                "Rende più facili da leggere numeri molto grandi e molto piccoli."
              ],
              [
                "It changes the value.",
                "Cambia il valore."
              ],
              [
                "It removes the unit.",
                "Elimina l'unità."
              ],
              [
                "It works only for whole numbers.",
                "Funziona solo con numeri interi."
              ]
            ],
            "why": [
              "It keeps the same value in a compact form.",
              "Mantiene lo stesso valore in una forma compatta."
            ]
          }
        ],
        "questionConceptIds": [
          "standard-form",
          "standard-form",
          "orders",
          "orders"
        ],
        "passingScore": 75
      },
      "techniqueUnlock": {
        "id": "physics-1m2-technique",
        "name": [
          "Physics Form · Applied Technique",
          "Stile della Fisica · Tecnica applicata"
        ],
        "description": [
          "Choose the correct physical model, show your reasoning and check units before striking.",
          "Scegli il modello fisico corretto, mostra il ragionamento e controlla le unità prima di colpire."
        ],
        "xpReward": 25
      }
    }},
  {
    "id": "p1m3",
    "arc": 16,
    "sec": "1.6–1.7",
    "pages": "27–30",
    "hue": 12,
    "horns": 4,
    "eyes": 2,
    "title": [
      "Built From the Basics",
      "Costruite dalle basi"
    ],
    "topic": [
      "Derived quantities: area, volume, density",
      "Grandezze derivate: area, volume, densità"
    ],
    "demon": [
      "Density Imp",
      "Folletto della Densità"
    ],
    "tech": [
      "Measure Form · Third Technique: Density Read",
      "Stile della Misura · Terza Tecnica: Lettura della Densità"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "phDensity",
        "text": [
          "<p>From the fundamental quantities we build [[derived quantities|grandezze derivate]], {name}. Multiply two lengths and you get <b>area</b> (m²); three lengths give <b>volume</b> (m³).</p><p>Divide mass by volume and you get [[density|densità]]: ρ = m / V, measured in kg/m³. It tells you how tightly packed the matter is.</p>",
          "<p>Dalle grandezze fondamentali costruiamo le [[derived quantities|grandezze derivate]], {name}. Moltiplica due lunghezze e ottieni l'<b>area</b> (m²); tre lunghezze danno il <b>volume</b> (m³).</p><p>Dividi la massa per il volume e ottieni la [[density|densità]]: ρ = m / V, misurata in kg/m³. Dice quanto è \"stipata\" la materia.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "phDensity",
        "text": [
          "<p>Two blocks of the same size can have very different masses — lead is far denser than wood. Density is why iron sinks and cork floats, as you'll see in chapter 5.</p><p>When you write a measured value, keep only the [[significant figures|cifre significative]] you really know: the certain digits plus the first uncertain one.</p>",
          "<p>Due blocchi della stessa dimensione possono avere masse molto diverse — il piombo è molto più denso del legno. La densità è il motivo per cui il ferro affonda e il sughero galleggia, come vedrai nel capitolo 5.</p><p>Quando scrivi un valore misurato, tieni solo le [[significant figures|cifre significative]] che conosci davvero: le cifre certe più la prima incerta.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "phDensity",
        "text": [
          "<p>The Density Imp mixed up a pile of quantities. Sort each: is it a <b>fundamental</b> quantity, or a <b>derived</b> one?</p>",
          "<p>Il Folletto della Densità ha mescolato un mucchio di grandezze. Smista ciascuna: è una grandezza <b>fondamentale</b> o <b>derivata</b>?</p>"
        ]
      },
      {
        "type": "sort",
        "title": [
          "Fundamental or derived?",
          "Fondamentale o derivata?"
        ],
        "cats": [
          [
            "Fundamental",
            "Fondamentale"
          ],
          [
            "Derived",
            "Derivata"
          ]
        ],
        "items": [
          {
            "n": [
              "Time (s)",
              "Tempo (s)"
            ],
            "i": "book",
            "c": 0,
            "why": [
              "Time is a base SI quantity.",
              "Il tempo è una grandezza base del SI."
            ]
          },
          {
            "n": [
              "Volume (m³)",
              "Volume (m³)"
            ],
            "i": "puzzle",
            "c": 1,
            "why": [
              "Volume = length × length × length.",
              "Il volume = lunghezza × lunghezza × lunghezza."
            ]
          },
          {
            "n": [
              "Mass (kg)",
              "Massa (kg)"
            ],
            "i": "file",
            "c": 0,
            "why": [
              "Mass is a base SI quantity.",
              "La massa è una grandezza base del SI."
            ]
          },
          {
            "n": [
              "Density (kg/m³)",
              "Densità (kg/m³)"
            ],
            "i": "layers",
            "c": 1,
            "why": [
              "Density = mass ÷ volume.",
              "La densità = massa ÷ volume."
            ]
          },
          {
            "n": [
              "Area (m²)",
              "Area (m²)"
            ],
            "i": "eye",
            "c": 1,
            "why": [
              "Area = length × length.",
              "L'area = lunghezza × lunghezza."
            ]
          },
          {
            "n": [
              "Length (m)",
              "Lunghezza (m)"
            ],
            "i": "robot",
            "c": 0,
            "why": [
              "Length is a base SI quantity.",
              "La lunghezza è una grandezza base del SI."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Heh! I'm the Density Imp! I make lead feel light and feathers feel heavy until your intuition breaks!</p>",
          "<p>Eh! Sono il Folletto della Densità! Faccio sembrare leggero il piombo e pesanti le piume finché la tua intuizione non crolla!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "Density is defined as…",
          "La densità è definita come…"
        ],
        "a": [
          [
            "mass ÷ volume",
            "massa ÷ volume"
          ],
          [
            "mass × volume",
            "massa × volume"
          ],
          [
            "volume ÷ mass",
            "volume ÷ massa"
          ],
          [
            "mass ÷ area",
            "massa ÷ area"
          ]
        ],
        "why": [
          "ρ = m / V.",
          "ρ = m / V."
        ]
      },
      {
        "q": [
          "The SI unit of volume is…",
          "L'unità SI del volume è…"
        ],
        "a": [
          [
            "m³",
            "m³"
          ],
          [
            "m²",
            "m²"
          ],
          [
            "kg",
            "kg"
          ],
          [
            "kg/m³",
            "kg/m³"
          ]
        ],
        "why": [
          "Volume is three lengths multiplied: m³.",
          "Il volume è tre lunghezze moltiplicate: m³."
        ]
      },
      {
        "q": [
          "A block has m = 200 g and V = 100 cm³. Its density is…",
          "Un blocco ha m = 200 g e V = 100 cm³. La sua densità è…"
        ],
        "a": [
          [
            "2 g/cm³",
            "2 g/cm³"
          ],
          [
            "0.5 g/cm³",
            "0,5 g/cm³"
          ],
          [
            "20 g/cm³",
            "20 g/cm³"
          ],
          [
            "100 g/cm³",
            "100 g/cm³"
          ]
        ],
        "why": [
          "ρ = 200 ÷ 100 = 2 g/cm³.",
          "ρ = 200 ÷ 100 = 2 g/cm³."
        ]
      },
      {
        "q": [
          "Area is a derived quantity because…",
          "L'area è una grandezza derivata perché…"
        ],
        "a": [
          [
            "it is two lengths multiplied",
            "è due lunghezze moltiplicate"
          ],
          [
            "it cannot be measured",
            "non si può misurare"
          ],
          [
            "it is a base SI unit",
            "è un'unità base del SI"
          ],
          [
            "it has no unit",
            "non ha unità"
          ]
        ],
        "why": [
          "Area = length × length, built from a fundamental quantity.",
          "L'area = lunghezza × lunghezza, costruita da una grandezza fondamentale."
        ]
      },
      {
        "q": [
          "How many significant figures are in 0.04050?",
          "Quante cifre significative ci sono in 0,04050?"
        ],
        "a": [
          [
            "4",
            "4"
          ],
          [
            "5",
            "5"
          ],
          [
            "3",
            "3"
          ],
          [
            "2",
            "2"
          ]
        ],
        "why": [
          "Leading zeros don't count; 4, 0, 5, 0 do → four.",
          "Gli zeri iniziali non contano; 4, 0, 5, 0 sì → quattro."
        ]
      },
      {
        "q": [
          "Why can two same-sized objects have different masses?",
          "Perché due oggetti delle stesse dimensioni possono avere masse diverse?"
        ],
        "a": [
          [
            "They have different densities",
            "Hanno densità diverse"
          ],
          [
            "They have different volumes",
            "Hanno volumi diversi"
          ],
          [
            "Mass does not exist",
            "La massa non esiste"
          ],
          [
            "They are the same mass",
            "Hanno la stessa massa"
          ]
        ],
        "why": [
          "Same volume but different density means different mass (m = ρ·V).",
          "Stesso volume ma densità diversa significa massa diversa (m = ρ·V)."
        ]
      }
    ]
  ,
    "learning": {
      "version": 1,
      "objectives": [
        {
          "id": "p1m3-objective-1",
          "description": [
            "Calculate area and volume from dimensions",
            "Calcolare area e volume dalle dimensioni"
          ],
          "successCriteria": [
            [
              "Explain the idea and apply it correctly in a short exercise.",
              "Spiegare il concetto e applicarlo correttamente in un breve esercizio."
            ]
          ]
        },
        {
          "id": "p1m3-objective-2",
          "description": [
            "Calculate and interpret density",
            "Calcolare e interpretare la densità"
          ],
          "successCriteria": [
            [
              "Explain the idea and apply it correctly in a short exercise.",
              "Spiegare il concetto e applicarlo correttamente in un breve esercizio."
            ]
          ]
        }
      ],
      "prerequisites": [
        [
          "Review the key quantities and units from the previous mission.",
          "Ripassa le grandezze e le unità chiave della missione precedente."
        ]
      ],
      "concepts": [
        {
          "id": "area-volume",
          "title": [
            "Area and volume",
            "Area e volume"
          ],
          "explanation": [
            "Area measures a surface; volume measures the space occupied. Rectangle area is A = l × w; rectangular volume is V = l × w × h.",
            "L'area misura una superficie; il volume misura lo spazio occupato. L'area del rettangolo è A = b × h; il volume del parallelepipedo è V = l × w × h."
          ],
          "example": [
            "A box measuring 2 m × 1 m × 0.5 m has V = 1 m³.",
            "Una scatola di 2 m × 1 m × 0,5 m ha V = 1 m³."
          ],
          "workedExample": {
            "scenario": [
              "A box measuring 2 m × 1 m × 0.5 m has V = 1 m³.",
              "Una scatola di 2 m × 1 m × 0,5 m ha V = 1 m³."
            ],
            "steps": [
              [
                "1 m³",
                "1 m³"
              ],
              [
                "Area uses square units; volume uses cubic units.",
                "L'area usa unità quadrate; il volume unità cubiche."
              ]
            ],
            "answer": [
              "Area uses square units; volume uses cubic units.",
              "L'area usa unità quadrate; il volume unità cubiche."
            ]
          },
          "misconceptions": [
            {
              "belief": [
                "Volume and surface area are not the same quantity.",
                "Volume e area della superficie non sono la stessa grandezza."
              ],
              "correction": [
                null,
                null
              ]
            }
          ],
          "knowledgePrompts": [
            [
              "Explain the key idea, then solve a new example.",
              "Spiega l'idea chiave, poi risolvi un nuovo esempio."
            ]
          ],
          "sceneIndexes": [
            0,
            1
          ]
        },
        {
          "id": "density",
          "title": [
            "Density",
            "Densità"
          ],
          "explanation": [
            "Density is mass divided by volume: ρ = m/V. It describes how much mass is packed into a given volume.",
            "La densità è la massa divisa per il volume: ρ = m/V. Descrive quanta massa è contenuta in un certo volume."
          ],
          "example": [
            "A 6 kg object occupying 2 m³ has density 3 kg/m³.",
            "Un corpo di 6 kg che occupa 2 m³ ha densità 3 kg/m³."
          ],
          "workedExample": {
            "scenario": [
              "A 6 kg object occupying 2 m³ has density 3 kg/m³.",
              "Un corpo di 6 kg che occupa 2 m³ ha densità 3 kg/m³."
            ],
            "steps": [
              [
                "3 kg/m³",
                "3 kg/m³"
              ],
              [
                "Divide mass by volume and include the compound unit.",
                "Dividi la massa per il volume e indica l'unità composta."
              ]
            ],
            "answer": [
              "Divide mass by volume and include the compound unit.",
              "Dividi la massa per il volume e indica l'unità composta."
            ]
          },
          "misconceptions": [
            {
              "belief": [
                "Density is not volume divided by mass.",
                "La densità non è il volume diviso per la massa."
              ],
              "correction": [
                null,
                null
              ]
            }
          ],
          "knowledgePrompts": [
            [
              "Explain the key idea, then solve a new example.",
              "Spiega l'idea chiave, poi risolvi un nuovo esempio."
            ]
          ],
          "sceneIndexes": [
            2
          ]
        }
      ],
      "guidedPractice": [
        {
          "id": "physics-1m3-guided",
          "title": [
            "Guided practice",
            "Esercitazione guidata"
          ],
          "instructions": [
            "Answer the first two questions. Use the worked examples and feedback to check each step.",
            "Rispondi alle prime due domande. Usa gli esempi svolti e il feedback per controllare ogni passaggio."
          ],
          "questions": [
            {
              "q": [
                "A rectangle is 4 m by 3 m. What is its area?",
                "Un rettangolo misura 4 m per 3 m. Qual è la sua area?"
              ],
              "a": [
                [
                  "12 m²",
                  "12 m²"
                ],
                [
                  "7 m²",
                  "7 m²"
                ],
                [
                  "12 m³",
                  "12 m³"
                ],
                [
                  "14 m²",
                  "14 m²"
                ]
              ],
              "why": [
                "Area = length × width = 4 × 3.",
                "Area = lunghezza × larghezza = 4 × 3."
              ]
            },
            {
              "q": [
                "Which unit is suitable for volume?",
                "Quale unità è adatta al volume?"
              ],
              "a": [
                [
                  "m³",
                  "m³"
                ],
                [
                  "m",
                  "m"
                ],
                [
                  "m²",
                  "m²"
                ],
                [
                  "kg",
                  "kg"
                ]
              ],
              "why": [
                "Volume is measured in cubic units.",
                "Il volume si misura in unità cubiche."
              ]
            }
          ],
          "hints": [
            [
              "Identify the quantity, rule or definition before calculating.",
              "Individua la grandezza, la regola o la definizione prima di calcolare."
            ],
            [
              "Check the unit and the direction or scale in your answer.",
              "Controlla l'unità e la direzione o la scala nella risposta."
            ]
          ],
          "sceneIndex": 3
        }
      ],
      "independentPractice": [
        {
          "id": "physics-1m3-independent",
          "title": [
            "Independent practice",
            "Esercitazione autonoma"
          ],
          "instructions": [
            "Answer without hints, then read the explanation and correct any mistake.",
            "Rispondi senza suggerimenti, poi leggi la spiegazione e correggi gli eventuali errori."
          ],
          "questions": [
            {
              "q": [
                "A mass of 6 kg occupies 2 m³. Find its density.",
                "Una massa di 6 kg occupa 2 m³. Calcola la densità."
              ],
              "a": [
                [
                  "3 kg/m³",
                  "3 kg/m³"
                ],
                [
                  "8 kg/m³",
                  "8 kg/m³"
                ],
                [
                  "12 kg/m³",
                  "12 kg/m³"
                ],
                [
                  "0.33 kg/m³",
                  "0,33 kg/m³"
                ]
              ],
              "why": [
                "ρ = m/V = 6/2 = 3 kg/m³.",
                "ρ = m/V = 6/2 = 3 kg/m³."
              ]
            },
            {
              "q": [
                "Which formula defines density?",
                "Quale formula definisce la densità?"
              ],
              "a": [
                [
                  "ρ = m/V",
                  "ρ = m/V"
                ],
                [
                  "ρ = V/m",
                  "ρ = V/m"
                ],
                [
                  "ρ = m × V",
                  "ρ = m × V"
                ],
                [
                  "ρ = m + V",
                  "ρ = m + V"
                ]
              ],
              "why": [
                "Density is mass divided by volume.",
                "La densità è la massa divisa per il volume."
              ]
            }
          ],
          "sceneIndex": 4
        }
      ],
      "knowledgeCheck": [
        {
          "q": [
            "A rectangle is 4 m by 3 m. What is its area?",
            "Un rettangolo misura 4 m per 3 m. Qual è la sua area?"
          ],
          "a": [
            [
              "12 m²",
              "12 m²"
            ],
            [
              "7 m²",
              "7 m²"
            ],
            [
              "12 m³",
              "12 m³"
            ],
            [
              "14 m²",
              "14 m²"
            ]
          ],
          "why": [
            "Area = length × width = 4 × 3.",
            "Area = lunghezza × larghezza = 4 × 3."
          ]
        },
        {
          "q": [
            "Which unit is suitable for volume?",
            "Quale unità è adatta al volume?"
          ],
          "a": [
            [
              "m³",
              "m³"
            ],
            [
              "m",
              "m"
            ],
            [
              "m²",
              "m²"
            ],
            [
              "kg",
              "kg"
            ]
          ],
          "why": [
            "Volume is measured in cubic units.",
            "Il volume si misura in unità cubiche."
          ]
        },
        {
          "q": [
            "A mass of 6 kg occupies 2 m³. Find its density.",
            "Una massa di 6 kg occupa 2 m³. Calcola la densità."
          ],
          "a": [
            [
              "3 kg/m³",
              "3 kg/m³"
            ],
            [
              "8 kg/m³",
              "8 kg/m³"
            ],
            [
              "12 kg/m³",
              "12 kg/m³"
            ],
            [
              "0.33 kg/m³",
              "0,33 kg/m³"
            ]
          ],
          "why": [
            "ρ = m/V = 6/2 = 3 kg/m³.",
            "ρ = m/V = 6/2 = 3 kg/m³."
          ]
        },
        {
          "q": [
            "Which formula defines density?",
            "Quale formula definisce la densità?"
          ],
          "a": [
            [
              "ρ = m/V",
              "ρ = m/V"
            ],
            [
              "ρ = V/m",
              "ρ = V/m"
            ],
            [
              "ρ = m × V",
              "ρ = m × V"
            ],
            [
              "ρ = m + V",
              "ρ = m + V"
            ]
          ],
          "why": [
            "Density is mass divided by volume.",
            "La densità è la massa divisa per il volume."
          ]
        }
      ],
      "summary": [
        [
          "Area measures a surface; volume measures the space occupied. Rectangle area is A = l × w; rectangular volume is V = l × w × h.",
          "L'area misura una superficie; il volume misura lo spazio occupato. L'area del rettangolo è A = b × h; il volume del parallelepipedo è V = l × w × h."
        ],
        [
          "Density is mass divided by volume: ρ = m/V. It describes how much mass is packed into a given volume.",
          "La densità è la massa divisa per il volume: ρ = m/V. Descrive quanta massa è contenuta in un certo volume."
        ]
      ],
      "masteryAssessment": {
        "title": [
          "Mastery trial",
          "Prova di maestria"
        ],
        "instructions": [
          "Apply the ideas independently. You need at least 75% to pass this mastery check.",
          "Applica le idee in autonomia. Serve almeno il 75% per superare questa verifica di maestria."
        ],
        "questions": [
          {
            "q": [
              "A rectangle is 4 m by 3 m. What is its area?",
              "Un rettangolo misura 4 m per 3 m. Qual è la sua area?"
            ],
            "a": [
              [
                "12 m²",
                "12 m²"
              ],
              [
                "7 m²",
                "7 m²"
              ],
              [
                "12 m³",
                "12 m³"
              ],
              [
                "14 m²",
                "14 m²"
              ]
            ],
            "why": [
              "Area = length × width = 4 × 3.",
              "Area = lunghezza × larghezza = 4 × 3."
            ]
          },
          {
            "q": [
              "Which unit is suitable for volume?",
              "Quale unità è adatta al volume?"
            ],
            "a": [
              [
                "m³",
                "m³"
              ],
              [
                "m",
                "m"
              ],
              [
                "m²",
                "m²"
              ],
              [
                "kg",
                "kg"
              ]
            ],
            "why": [
              "Volume is measured in cubic units.",
              "Il volume si misura in unità cubiche."
            ]
          },
          {
            "q": [
              "A mass of 6 kg occupies 2 m³. Find its density.",
              "Una massa di 6 kg occupa 2 m³. Calcola la densità."
            ],
            "a": [
              [
                "3 kg/m³",
                "3 kg/m³"
              ],
              [
                "8 kg/m³",
                "8 kg/m³"
              ],
              [
                "12 kg/m³",
                "12 kg/m³"
              ],
              [
                "0.33 kg/m³",
                "0,33 kg/m³"
              ]
            ],
            "why": [
              "ρ = m/V = 6/2 = 3 kg/m³.",
              "ρ = m/V = 6/2 = 3 kg/m³."
            ]
          },
          {
            "q": [
              "Which formula defines density?",
              "Quale formula definisce la densità?"
            ],
            "a": [
              [
                "ρ = m/V",
                "ρ = m/V"
              ],
              [
                "ρ = V/m",
                "ρ = V/m"
              ],
              [
                "ρ = m × V",
                "ρ = m × V"
              ],
              [
                "ρ = m + V",
                "ρ = m + V"
              ]
            ],
            "why": [
              "Density is mass divided by volume.",
              "La densità è la massa divisa per il volume."
            ]
          }
        ],
        "questionConceptIds": [
          "area-volume",
          "area-volume",
          "density",
          "density"
        ],
        "passingScore": 75
      },
      "techniqueUnlock": {
        "id": "physics-1m3-technique",
        "name": [
          "Physics Form · Applied Technique",
          "Stile della Fisica · Tecnica applicata"
        ],
        "description": [
          "Choose the correct physical model, show your reasoning and check units before striking.",
          "Scegli il modello fisico corretto, mostra il ragionamento e controlla le unità prima di colpire."
        ],
        "xpReward": 25
      }
    }},
  {
    "id": "p2m1",
    "arc": 17,
    "sec": "2.1–2.3",
    "pages": "32–44",
    "hue": 200,
    "horns": 2,
    "eyes": 4,
    "title": [
      "The Honest Ruler",
      "Il righello onesto"
    ],
    "topic": [
      "Instruments, sensitivity, errors and uncertainty",
      "Strumenti, sensibilità, errori e incertezza"
    ],
    "demon": [
      "Error Wraith",
      "Spettro dell'Errore"
    ],
    "tech": [
      "Measure Form · Fourth Technique: Error Bound",
      "Stile della Misura · Quarta Tecnica: Stima dell'Errore"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "phRuler",
        "text": [
          "<p>No measurement is perfect, {name}. Every instrument has a [[sensitivity|sensibilità]] — the smallest difference it can read (a ruler's smallest division) — and a maximum it can reach, its range (<i>portata</i>).</p><p>So we never report a bare number. We report a value plus an [[uncertainty|incertezza]]: 15.0 ± 0.1 cm. The true value lies inside that band.</p>",
          "<p>Nessuna misura è perfetta, {name}. Ogni strumento ha una [[sensitivity|sensibilità]] — la più piccola differenza che può leggere (la divisione più piccola di un righello) — e un massimo che può raggiungere, la sua <i>portata</i>.</p><p>Perciò non riportiamo mai un numero nudo. Riportiamo un valore più un'[[uncertainty|incertezza]]: 15,0 ± 0,1 cm. Il valore vero sta dentro quella banda.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "phRuler",
        "text": [
          "<p>To reduce random error we measure several times and take the [[mean|media]] — the average. The spread of the readings gives the [[absolute error|errore assoluto]] (half the range, in the same units).</p><p>Compared to the measurement itself it becomes the <b>relative error</b> (error ÷ value), often written as a percentage. A 1 cm error on 1000 cm is tiny; on 2 cm it is huge.</p>",
          "<p>Per ridurre l'errore casuale misuriamo più volte e prendiamo la [[mean|media]]. La dispersione delle letture dà l'[[absolute error|errore assoluto]] (metà dell'intervallo, nelle stesse unità).</p><p>Rispetto alla misura stessa diventa l'<b>errore relativo</b> (errore ÷ valore), spesso in percentuale. Un errore di 1 cm su 1000 cm è minimo; su 2 cm è enorme.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "phRuler",
        "text": [
          "<p>The Error Wraith jumbled the steps of a careful measurement. Put them back in order.</p>",
          "<p>Lo Spettro dell'Errore ha confuso i passi di una misura accurata. Rimettili in ordine.</p>"
        ]
      },
      {
        "type": "order",
        "title": [
          "How to measure well",
          "Come misurare bene"
        ],
        "hint": [
          "Think: prepare, repeat, combine, report.",
          "Pensa: prepara, ripeti, combina, riporta."
        ],
        "steps": [
          [
            "Choose an instrument with the right range and sensitivity",
            "Scegli uno strumento con portata e sensibilità adatte"
          ],
          [
            "Take the measurement several times",
            "Esegui la misura più volte"
          ],
          [
            "Calculate the mean of the readings",
            "Calcola la media delle letture"
          ],
          [
            "Estimate the absolute error from the spread",
            "Stima l'errore assoluto dalla dispersione"
          ],
          [
            "Report the value as mean ± error",
            "Riporta il valore come media ± errore"
          ]
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Hsss… I'm the Error Wraith! I whisper that your one quick reading is the exact truth — and lead you astray!</p>",
          "<p>Hsss… Sono lo Spettro dell'Errore! Sussurro che la tua unica lettura veloce è la verità esatta — e ti porto fuori strada!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "The sensitivity of an instrument is…",
          "La sensibilità di uno strumento è…"
        ],
        "a": [
          [
            "the smallest difference it can detect",
            "la più piccola differenza che può rilevare"
          ],
          [
            "its largest reading",
            "la sua lettura massima"
          ],
          [
            "its price",
            "il suo prezzo"
          ],
          [
            "its length",
            "la sua lunghezza"
          ]
        ],
        "why": [
          "Sensitivity = the smallest change the instrument can read.",
          "Sensibilità = la più piccola variazione che lo strumento legge."
        ]
      },
      {
        "q": [
          "Why report 15.0 ± 0.1 cm instead of just 15 cm?",
          "Perché riportare 15,0 ± 0,1 cm invece di solo 15 cm?"
        ],
        "a": [
          [
            "To show the uncertainty of the measure",
            "Per mostrare l'incertezza della misura"
          ],
          [
            "To make it look longer",
            "Per farlo sembrare più lungo"
          ],
          [
            "Because 15 is wrong",
            "Perché 15 è sbagliato"
          ],
          [
            "To remove the unit",
            "Per togliere l'unità"
          ]
        ],
        "why": [
          "The ± band states how precise the measurement is.",
          "La banda ± dice quanto è precisa la misura."
        ]
      },
      {
        "q": [
          "Readings 20, 22, 21, 21 cm. The mean is…",
          "Letture 20, 22, 21, 21 cm. La media è…"
        ],
        "a": [
          [
            "21 cm",
            "21 cm"
          ],
          [
            "22 cm",
            "22 cm"
          ],
          [
            "20 cm",
            "20 cm"
          ],
          [
            "84 cm",
            "84 cm"
          ]
        ],
        "why": [
          "(20+22+21+21) ÷ 4 = 84 ÷ 4 = 21 cm.",
          "(20+22+21+21) ÷ 4 = 84 ÷ 4 = 21 cm."
        ]
      },
      {
        "q": [
          "An error of 2 cm is most serious when the measured value is…",
          "Un errore di 2 cm è più grave quando il valore misurato è…"
        ],
        "a": [
          [
            "5 cm",
            "5 cm"
          ],
          [
            "200 cm",
            "200 cm"
          ],
          [
            "2000 cm",
            "2000 cm"
          ],
          [
            "50 cm",
            "50 cm"
          ]
        ],
        "why": [
          "Relative error = error ÷ value, largest when the value is smallest.",
          "Errore relativo = errore ÷ valore, massimo quando il valore è più piccolo."
        ]
      },
      {
        "q": [
          "Taking several measurements and averaging mainly reduces…",
          "Misurare più volte e fare la media riduce soprattutto…"
        ],
        "a": [
          [
            "random error",
            "l'errore casuale"
          ],
          [
            "the price",
            "il prezzo"
          ],
          [
            "the sensitivity",
            "la sensibilità"
          ],
          [
            "the unit",
            "l'unità"
          ]
        ],
        "why": [
          "Averaging repeated readings smooths out random fluctuations.",
          "La media di letture ripetute attenua le fluttuazioni casuali."
        ]
      },
      {
        "q": [
          "Relative error is calculated as…",
          "L'errore relativo si calcola come…"
        ],
        "a": [
          [
            "absolute error ÷ measured value",
            "errore assoluto ÷ valore misurato"
          ],
          [
            "value ÷ error",
            "valore ÷ errore"
          ],
          [
            "error × value",
            "errore × valore"
          ],
          [
            "error + value",
            "errore + valore"
          ]
        ],
        "why": [
          "Relative error = absolute error ÷ value (often ×100 for %).",
          "Errore relativo = errore assoluto ÷ valore (spesso ×100 per la %)."
        ]
      }
    ]
  ,
    "learning": {
      "version": 1,
      "objectives": [
        {
          "id": "p2m1-objective-1",
          "description": [
            "Choose a suitable instrument and read its scale",
            "Scegliere uno strumento adatto e leggerne la scala"
          ],
          "successCriteria": [
            [
              "Explain the idea and apply it correctly in a short exercise.",
              "Spiegare il concetto e applicarlo correttamente in un breve esercizio."
            ]
          ]
        },
        {
          "id": "p2m1-objective-2",
          "description": [
            "Explain measurement errors and uncertainty",
            "Spiegare errori e incertezza di misura"
          ],
          "successCriteria": [
            [
              "Explain the idea and apply it correctly in a short exercise.",
              "Spiegare il concetto e applicarlo correttamente in un breve esercizio."
            ]
          ]
        }
      ],
      "prerequisites": [
        [
          "Review the key quantities and units from the previous mission.",
          "Ripassa le grandezze e le unità chiave della missione precedente."
        ]
      ],
      "concepts": [
        {
          "id": "instruments",
          "title": [
            "Instruments and sensitivity",
            "Strumenti e sensibilità"
          ],
          "explanation": [
            "Choose an instrument with a suitable range and scale division. Sensitivity describes the smallest change it can detect.",
            "Scegli uno strumento con portata e divisione della scala adatte. La sensibilità descrive la più piccola variazione che può rilevare."
          ],
          "example": [
            "A ruler marked every millimetre can detect smaller length changes than one marked every centimetre.",
            "Un righello graduato ogni millimetro rileva variazioni più piccole rispetto a uno graduato ogni centimetro."
          ],
          "workedExample": {
            "scenario": [
              "A ruler marked every millimetre can detect smaller length changes than one marked every centimetre.",
              "Un righello graduato ogni millimetro rileva variazioni più piccole rispetto a uno graduato ogni centimetro."
            ],
            "steps": [
              [
                "1 mm is a finer division than 1 cm.",
                "1 mm è una divisione più fine di 1 cm."
              ],
              [
                "Read a scale at eye level to reduce parallax error.",
                "Leggi la scala all'altezza degli occhi per ridurre l'errore di parallasse."
              ]
            ],
            "answer": [
              "Read a scale at eye level to reduce parallax error.",
              "Leggi la scala all'altezza degli occhi per ridurre l'errore di parallasse."
            ]
          },
          "misconceptions": [
            {
              "belief": [
                "More decimal places do not automatically mean greater accuracy.",
                "Più cifre decimali non significano automaticamente maggiore accuratezza."
              ],
              "correction": [
                null,
                null
              ]
            }
          ],
          "knowledgePrompts": [
            [
              "Explain the key idea, then solve a new example.",
              "Spiega l'idea chiave, poi risolvi un nuovo esempio."
            ]
          ],
          "sceneIndexes": [
            0,
            1
          ]
        },
        {
          "id": "uncertainty",
          "title": [
            "Errors and uncertainty",
            "Errori e incertezza"
          ],
          "explanation": [
            "Random errors vary between readings; systematic errors shift readings consistently. Uncertainty describes the reasonable range around a measured value.",
            "Gli errori casuali variano tra le letture; quelli sistematici spostano le misure in modo costante. L'incertezza descrive l'intervallo ragionevole attorno a un valore misurato."
          ],
          "example": [
            "Repeat a measurement and compare readings. A constant offset can indicate a systematic error.",
            "Ripeti una misura e confronta le letture. Uno scostamento costante può indicare un errore sistematico."
          ],
          "workedExample": {
            "scenario": [
              "Repeat a measurement and compare readings. A constant offset can indicate a systematic error.",
              "Ripeti una misura e confronta le letture. Uno scostamento costante può indicare un errore sistematico."
            ],
            "steps": [
              [
                "Repeated readings reveal variation.",
                "Le misure ripetute rivelano le variazioni."
              ],
              [
                "Repeating helps reduce random uncertainty, not a persistent calibration error.",
                "Ripetere aiuta a ridurre l'incertezza casuale, non un errore persistente di calibrazione."
              ]
            ],
            "answer": [
              "Repeating helps reduce random uncertainty, not a persistent calibration error.",
              "Ripetere aiuta a ridurre l'incertezza casuale, non un errore persistente di calibrazione."
            ]
          },
          "misconceptions": [
            {
              "belief": [
                "Repeating a reading does not guarantee zero error.",
                "Ripetere una lettura non garantisce errore zero."
              ],
              "correction": [
                null,
                null
              ]
            }
          ],
          "knowledgePrompts": [
            [
              "Explain the key idea, then solve a new example.",
              "Spiega l'idea chiave, poi risolvi un nuovo esempio."
            ]
          ],
          "sceneIndexes": [
            2
          ]
        }
      ],
      "guidedPractice": [
        {
          "id": "physics-2m1-guided",
          "title": [
            "Guided practice",
            "Esercitazione guidata"
          ],
          "instructions": [
            "Answer the first two questions. Use the worked examples and feedback to check each step.",
            "Rispondi alle prime due domande. Usa gli esempi svolti e il feedback per controllare ogni passaggio."
          ],
          "questions": [
            {
              "q": [
                "What does instrument sensitivity describe?",
                "Che cosa descrive la sensibilità di uno strumento?"
              ],
              "a": [
                [
                  "The smallest change it can detect.",
                  "La più piccola variazione che può rilevare."
                ],
                [
                  "Its colour.",
                  "Il suo colore."
                ],
                [
                  "Its weight.",
                  "Il suo peso."
                ],
                [
                  "The largest object it can measure.",
                  "L'oggetto più grande che può misurare."
                ]
              ],
              "why": [
                "Sensitivity concerns the smallest detectable change.",
                "La sensibilità riguarda la più piccola variazione rilevabile."
              ]
            },
            {
              "q": [
                "How can you reduce parallax error?",
                "Come puoi ridurre l'errore di parallasse?"
              ],
              "a": [
                [
                  "Read the scale straight on at eye level.",
                  "Leggi la scala frontalmente, all'altezza degli occhi."
                ],
                [
                  "Look from the side.",
                  "Guarda di lato."
                ],
                [
                  "Tilt the ruler.",
                  "Inclina il righello."
                ],
                [
                  "Guess the reading.",
                  "Indovina la lettura."
                ]
              ],
              "why": [
                "Align your eye with the scale mark.",
                "Allinea l'occhio con la tacca della scala."
              ]
            }
          ],
          "hints": [
            [
              "Identify the quantity, rule or definition before calculating.",
              "Individua la grandezza, la regola o la definizione prima di calcolare."
            ],
            [
              "Check the unit and the direction or scale in your answer.",
              "Controlla l'unità e la direzione o la scala nella risposta."
            ]
          ],
          "sceneIndex": 3
        }
      ],
      "independentPractice": [
        {
          "id": "physics-2m1-independent",
          "title": [
            "Independent practice",
            "Esercitazione autonoma"
          ],
          "instructions": [
            "Answer without hints, then read the explanation and correct any mistake.",
            "Rispondi senza suggerimenti, poi leggi la spiegazione e correggi gli eventuali errori."
          ],
          "questions": [
            {
              "q": [
                "A balance always reads 0.2 kg too high. This is…",
                "Una bilancia indica sempre 0,2 kg in più. Si tratta di…"
              ],
              "a": [
                [
                  "a systematic error.",
                  "un errore sistematico."
                ],
                [
                  "a random error.",
                  "un errore casuale."
                ],
                [
                  "no error.",
                  "nessun errore."
                ],
                [
                  "a unit conversion.",
                  "una conversione di unità."
                ]
              ],
              "why": [
                "A repeated bias in one direction is systematic.",
                "Uno scostamento ripetuto in una direzione è sistematico."
              ]
            },
            {
              "q": [
                "Why repeat a measurement?",
                "Perché ripetere una misura?"
              ],
              "a": [
                [
                  "To observe variation and obtain a more reliable estimate.",
                  "Per osservare le variazioni e ottenere una stima più affidabile."
                ],
                [
                  "To guarantee zero error.",
                  "Per garantire errore zero."
                ],
                [
                  "To change the unit.",
                  "Per cambiare unità."
                ],
                [
                  "To make the object larger.",
                  "Per ingrandire l'oggetto."
                ]
              ],
              "why": [
                "Repeated readings help identify random variation.",
                "Le letture ripetute aiutano a individuare variazioni casuali."
              ]
            }
          ],
          "sceneIndex": 4
        }
      ],
      "knowledgeCheck": [
        {
          "q": [
            "What does instrument sensitivity describe?",
            "Che cosa descrive la sensibilità di uno strumento?"
          ],
          "a": [
            [
              "The smallest change it can detect.",
              "La più piccola variazione che può rilevare."
            ],
            [
              "Its colour.",
              "Il suo colore."
            ],
            [
              "Its weight.",
              "Il suo peso."
            ],
            [
              "The largest object it can measure.",
              "L'oggetto più grande che può misurare."
            ]
          ],
          "why": [
            "Sensitivity concerns the smallest detectable change.",
            "La sensibilità riguarda la più piccola variazione rilevabile."
          ]
        },
        {
          "q": [
            "How can you reduce parallax error?",
            "Come puoi ridurre l'errore di parallasse?"
          ],
          "a": [
            [
              "Read the scale straight on at eye level.",
              "Leggi la scala frontalmente, all'altezza degli occhi."
            ],
            [
              "Look from the side.",
              "Guarda di lato."
            ],
            [
              "Tilt the ruler.",
              "Inclina il righello."
            ],
            [
              "Guess the reading.",
              "Indovina la lettura."
            ]
          ],
          "why": [
            "Align your eye with the scale mark.",
            "Allinea l'occhio con la tacca della scala."
          ]
        },
        {
          "q": [
            "A balance always reads 0.2 kg too high. This is…",
            "Una bilancia indica sempre 0,2 kg in più. Si tratta di…"
          ],
          "a": [
            [
              "a systematic error.",
              "un errore sistematico."
            ],
            [
              "a random error.",
              "un errore casuale."
            ],
            [
              "no error.",
              "nessun errore."
            ],
            [
              "a unit conversion.",
              "una conversione di unità."
            ]
          ],
          "why": [
            "A repeated bias in one direction is systematic.",
            "Uno scostamento ripetuto in una direzione è sistematico."
          ]
        },
        {
          "q": [
            "Why repeat a measurement?",
            "Perché ripetere una misura?"
          ],
          "a": [
            [
              "To observe variation and obtain a more reliable estimate.",
              "Per osservare le variazioni e ottenere una stima più affidabile."
            ],
            [
              "To guarantee zero error.",
              "Per garantire errore zero."
            ],
            [
              "To change the unit.",
              "Per cambiare unità."
            ],
            [
              "To make the object larger.",
              "Per ingrandire l'oggetto."
            ]
          ],
          "why": [
            "Repeated readings help identify random variation.",
            "Le letture ripetute aiutano a individuare variazioni casuali."
          ]
        }
      ],
      "summary": [
        [
          "Choose an instrument with a suitable range and scale division. Sensitivity describes the smallest change it can detect.",
          "Scegli uno strumento con portata e divisione della scala adatte. La sensibilità descrive la più piccola variazione che può rilevare."
        ],
        [
          "Random errors vary between readings; systematic errors shift readings consistently. Uncertainty describes the reasonable range around a measured value.",
          "Gli errori casuali variano tra le letture; quelli sistematici spostano le misure in modo costante. L'incertezza descrive l'intervallo ragionevole attorno a un valore misurato."
        ]
      ],
      "masteryAssessment": {
        "title": [
          "Mastery trial",
          "Prova di maestria"
        ],
        "instructions": [
          "Apply the ideas independently. You need at least 75% to pass this mastery check.",
          "Applica le idee in autonomia. Serve almeno il 75% per superare questa verifica di maestria."
        ],
        "questions": [
          {
            "q": [
              "What does instrument sensitivity describe?",
              "Che cosa descrive la sensibilità di uno strumento?"
            ],
            "a": [
              [
                "The smallest change it can detect.",
                "La più piccola variazione che può rilevare."
              ],
              [
                "Its colour.",
                "Il suo colore."
              ],
              [
                "Its weight.",
                "Il suo peso."
              ],
              [
                "The largest object it can measure.",
                "L'oggetto più grande che può misurare."
              ]
            ],
            "why": [
              "Sensitivity concerns the smallest detectable change.",
              "La sensibilità riguarda la più piccola variazione rilevabile."
            ]
          },
          {
            "q": [
              "How can you reduce parallax error?",
              "Come puoi ridurre l'errore di parallasse?"
            ],
            "a": [
              [
                "Read the scale straight on at eye level.",
                "Leggi la scala frontalmente, all'altezza degli occhi."
              ],
              [
                "Look from the side.",
                "Guarda di lato."
              ],
              [
                "Tilt the ruler.",
                "Inclina il righello."
              ],
              [
                "Guess the reading.",
                "Indovina la lettura."
              ]
            ],
            "why": [
              "Align your eye with the scale mark.",
              "Allinea l'occhio con la tacca della scala."
            ]
          },
          {
            "q": [
              "A balance always reads 0.2 kg too high. This is…",
              "Una bilancia indica sempre 0,2 kg in più. Si tratta di…"
            ],
            "a": [
              [
                "a systematic error.",
                "un errore sistematico."
              ],
              [
                "a random error.",
                "un errore casuale."
              ],
              [
                "no error.",
                "nessun errore."
              ],
              [
                "a unit conversion.",
                "una conversione di unità."
              ]
            ],
            "why": [
              "A repeated bias in one direction is systematic.",
              "Uno scostamento ripetuto in una direzione è sistematico."
            ]
          },
          {
            "q": [
              "Why repeat a measurement?",
              "Perché ripetere una misura?"
            ],
            "a": [
              [
                "To observe variation and obtain a more reliable estimate.",
                "Per osservare le variazioni e ottenere una stima più affidabile."
              ],
              [
                "To guarantee zero error.",
                "Per garantire errore zero."
              ],
              [
                "To change the unit.",
                "Per cambiare unità."
              ],
              [
                "To make the object larger.",
                "Per ingrandire l'oggetto."
              ]
            ],
            "why": [
              "Repeated readings help identify random variation.",
              "Le letture ripetute aiutano a individuare variazioni casuali."
            ]
          }
        ],
        "questionConceptIds": [
          "instruments",
          "instruments",
          "uncertainty",
          "uncertainty"
        ],
        "passingScore": 75
      },
      "techniqueUnlock": {
        "id": "physics-2m1-technique",
        "name": [
          "Physics Form · Applied Technique",
          "Stile della Fisica · Tecnica applicata"
        ],
        "description": [
          "Choose the correct physical model, show your reasoning and check units before striking.",
          "Scegli il modello fisico corretto, mostra il ragionamento e controlla le unità prima di colpire."
        ],
        "xpReward": 25
      }
    }},
  {
    "id": "p2m2",
    "arc": 17,
    "sec": "2.4–2.5",
    "pages": "45–58",
    "hue": 280,
    "horns": 3,
    "eyes": 3,
    "title": [
      "Reading the Lines",
      "Leggere i grafici"
    ],
    "topic": [
      "Tables, graphs and proportionality",
      "Tabelle, grafici e proporzionalità"
    ],
    "demon": [
      "Graph Gremlin",
      "Gremlin dei Grafici"
    ],
    "tech": [
      "Measure Form · Fifth Technique: Graph Sight",
      "Stile della Misura · Quinta Tecnica: Vista dei Grafici"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "phGraph",
        "text": [
          "<p>Data comes alive as a graph, {name}. Two quantities can be linked in typical ways.</p><p>In [[direct proportionality|proporzionalità diretta]], one doubles when the other doubles: y = k·x. Its graph is a straight line through the origin.</p>",
          "<p>I dati prendono vita in un grafico, {name}. Due grandezze possono essere legate in modi tipici.</p><p>Nella [[direct proportionality|proporzionalità diretta]], una raddoppia quando l'altra raddoppia: y = k·x. Il suo grafico è una retta che passa per l'origine.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "phGraph",
        "text": [
          "<p>In [[inverse proportionality|proporzionalità inversa]], one halves when the other doubles — their product stays constant: y = k/x. Its graph is a curve (a hyperbola).</p><p>Recognising the shape tells you the law behind the data before you write a single formula.</p>",
          "<p>Nella [[inverse proportionality|proporzionalità inversa]], una si dimezza quando l'altra raddoppia — il loro prodotto resta costante: y = k/x. Il suo grafico è una curva (un'iperbole).</p><p>Riconoscere la forma ti svela la legge dietro i dati prima ancora di scrivere una formula.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "phGraph",
        "text": [
          "<p>The Graph Gremlin scrambled some relationships. Sort each: is it <b>direct</b> or <b>inverse</b> proportionality?</p>",
          "<p>Il Gremlin dei Grafici ha mescolato alcune relazioni. Smista ciascuna: è proporzionalità <b>diretta</b> o <b>inversa</b>?</p>"
        ]
      },
      {
        "type": "sort",
        "title": [
          "Direct or inverse?",
          "Diretta o inversa?"
        ],
        "cats": [
          [
            "Direct",
            "Diretta"
          ],
          [
            "Inverse",
            "Inversa"
          ]
        ],
        "items": [
          {
            "n": [
              "Double the fabric → double the cost",
              "Doppio tessuto → doppio costo"
            ],
            "i": "file",
            "c": 0,
            "why": [
              "Cost grows in step with amount: direct.",
              "Il costo cresce insieme alla quantità: diretta."
            ]
          },
          {
            "n": [
              "More workers → less time for the job",
              "Più operai → meno tempo per il lavoro"
            ],
            "i": "robot",
            "c": 1,
            "why": [
              "One up, the other down, product constant: inverse.",
              "Uno sale, l'altro scende, prodotto costante: inversa."
            ]
          },
          {
            "n": [
              "Straight line through the origin",
              "Retta per l'origine"
            ],
            "i": "layers",
            "c": 0,
            "why": [
              "y = k·x is direct proportionality.",
              "y = k·x è proporzionalità diretta."
            ]
          },
          {
            "n": [
              "Speed up → trip time goes down",
              "Più veloce → meno tempo di viaggio"
            ],
            "i": "eye",
            "c": 1,
            "why": [
              "For a fixed distance, time = distance ÷ speed: inverse.",
              "Per una distanza fissa, tempo = distanza ÷ velocità: inversa."
            ]
          },
          {
            "n": [
              "A hyperbola curve",
              "Una curva a iperbole"
            ],
            "i": "puzzle",
            "c": 1,
            "why": [
              "y = k/x graphs as a hyperbola: inverse.",
              "y = k/x si disegna come un'iperbole: inversa."
            ]
          },
          {
            "n": [
              "Twice the mass → twice the weight",
              "Doppia massa → doppio peso"
            ],
            "i": "book",
            "c": 0,
            "why": [
              "Weight = mass × g, a direct proportion.",
              "Peso = massa × g, proporzionalità diretta."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Hah! I'm the Graph Gremlin! I bend your straight lines into curves and flip your axes until the data lies!</p>",
          "<p>Ah! Sono il Gremlin dei Grafici! Piego le tue rette in curve e ribalto gli assi finché i dati mentono!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "The graph of a direct proportionality is…",
          "Il grafico di una proporzionalità diretta è…"
        ],
        "a": [
          [
            "a straight line through the origin",
            "una retta che passa per l'origine"
          ],
          [
            "a hyperbola",
            "un'iperbole"
          ],
          [
            "a horizontal line",
            "una retta orizzontale"
          ],
          [
            "a circle",
            "un cerchio"
          ]
        ],
        "why": [
          "y = k·x is a line through (0,0).",
          "y = k·x è una retta per (0,0)."
        ]
      },
      {
        "q": [
          "In inverse proportionality, the product x·y is…",
          "Nella proporzionalità inversa, il prodotto x·y è…"
        ],
        "a": [
          [
            "constant",
            "costante"
          ],
          [
            "zero",
            "zero"
          ],
          [
            "always growing",
            "sempre crescente"
          ],
          [
            "negative",
            "negativo"
          ]
        ],
        "why": [
          "y = k/x means x·y = k, a constant.",
          "y = k/x significa x·y = k, una costante."
        ]
      },
      {
        "q": [
          "If y = k·x and x triples, then y…",
          "Se y = k·x e x triplica, allora y…"
        ],
        "a": [
          [
            "also triples",
            "triplica anch'essa"
          ],
          [
            "halves",
            "si dimezza"
          ],
          [
            "stays the same",
            "resta uguale"
          ],
          [
            "becomes zero",
            "diventa zero"
          ]
        ],
        "why": [
          "Direct proportionality: y scales with x.",
          "Proporzionalità diretta: y scala con x."
        ]
      },
      {
        "q": [
          "6 workers finish in 4 h. How long for 8 workers (same work)?",
          "6 operai finiscono in 4 h. Quanto per 8 operai (stesso lavoro)?"
        ],
        "a": [
          [
            "3 h",
            "3 h"
          ],
          [
            "6 h",
            "6 h"
          ],
          [
            "4 h",
            "4 h"
          ],
          [
            "8 h",
            "8 h"
          ]
        ],
        "why": [
          "Inverse: 6×4 = 24; 24 ÷ 8 = 3 h.",
          "Inversa: 6×4 = 24; 24 ÷ 8 = 3 h."
        ]
      },
      {
        "q": [
          "A curve that falls as x grows, never touching the axes, is…",
          "Una curva che scende al crescere di x, senza mai toccare gli assi, è…"
        ],
        "a": [
          [
            "inverse proportionality",
            "proporzionalità inversa"
          ],
          [
            "direct proportionality",
            "proporzionalità diretta"
          ],
          [
            "a constant",
            "una costante"
          ],
          [
            "a straight line",
            "una retta"
          ]
        ],
        "why": [
          "The hyperbola y = k/x behaves this way.",
          "L'iperbole y = k/x si comporta così."
        ]
      },
      {
        "q": [
          "Why plot data on a graph at all?",
          "Perché mettere i dati su un grafico?"
        ],
        "a": [
          [
            "To see the relationship between the quantities",
            "Per vedere la relazione tra le grandezze"
          ],
          [
            "To hide the numbers",
            "Per nascondere i numeri"
          ],
          [
            "To change the units",
            "Per cambiare le unità"
          ],
          [
            "To make them exact",
            "Per renderli esatti"
          ]
        ],
        "why": [
          "A graph reveals the law linking the two quantities.",
          "Un grafico rivela la legge che lega le due grandezze."
        ]
      }
    ]
  ,
    "learning": {
      "version": 1,
      "objectives": [
        {
          "id": "p2m2-objective-1",
          "description": [
            "Organise measurements in tables and graphs",
            "Organizzare le misure in tabelle e grafici"
          ],
          "successCriteria": [
            [
              "Explain the idea and apply it correctly in a short exercise.",
              "Spiegare il concetto e applicarlo correttamente in un breve esercizio."
            ]
          ]
        },
        {
          "id": "p2m2-objective-2",
          "description": [
            "Recognise direct proportionality",
            "Riconoscere la proporzionalità diretta"
          ],
          "successCriteria": [
            [
              "Explain the idea and apply it correctly in a short exercise.",
              "Spiegare il concetto e applicarlo correttamente in un breve esercizio."
            ]
          ]
        }
      ],
      "prerequisites": [
        [
          "Review the key quantities and units from the previous mission.",
          "Ripassa le grandezze e le unità chiave della missione precedente."
        ]
      ],
      "concepts": [
        {
          "id": "graphs",
          "title": [
            "Tables and graphs",
            "Tabelle e grafici"
          ],
          "explanation": [
            "Tables organise paired values. Graphs show relationships: the independent variable is usually on the x-axis and the dependent variable on the y-axis.",
            "Le tabelle organizzano coppie di valori. I grafici mostrano relazioni: la variabile indipendente è di solito sull'asse x e quella dipendente sull'asse y."
          ],
          "example": [
            "For distance measured over time, put time on x and distance on y.",
            "Per una distanza misurata nel tempo, metti il tempo su x e la distanza su y."
          ],
          "workedExample": {
            "scenario": [
              "For distance measured over time, put time on x and distance on y.",
              "Per una distanza misurata nel tempo, metti il tempo su x e la distanza su y."
            ],
            "steps": [
              [
                "Label both axes and include units.",
                "Indica entrambi gli assi e inserisci le unità."
              ],
              [
                "A graph needs a clear scale and labelled axes.",
                "Un grafico richiede una scala chiara e assi etichettati."
              ]
            ],
            "answer": [
              "A graph needs a clear scale and labelled axes.",
              "Un grafico richiede una scala chiara e assi etichettati."
            ]
          },
          "misconceptions": [
            {
              "belief": [
                "Do not swap axes without checking which variable depends on the other.",
                "Non scambiare gli assi senza verificare quale variabile dipende dall'altra."
              ],
              "correction": [
                null,
                null
              ]
            }
          ],
          "knowledgePrompts": [
            [
              "Explain the key idea, then solve a new example.",
              "Spiega l'idea chiave, poi risolvi un nuovo esempio."
            ]
          ],
          "sceneIndexes": [
            0,
            1
          ]
        },
        {
          "id": "proportionality",
          "title": [
            "Direct proportionality",
            "Proporzionalità diretta"
          ],
          "explanation": [
            "Two quantities are directly proportional when y/x is constant: y = kx. The graph is a straight line through the origin.",
            "Due grandezze sono direttamente proporzionali quando y/x è costante: y = kx. Il grafico è una retta che passa per l'origine."
          ],
          "example": [
            "If each notebook costs €2, total cost C = 2n; doubling n doubles C.",
            "Se ogni quaderno costa 2 €, il costo totale C = 2n; raddoppiando n, raddoppia C."
          ],
          "workedExample": {
            "scenario": [
              "If each notebook costs €2, total cost C = 2n; doubling n doubles C.",
              "Se ogni quaderno costa 2 €, il costo totale C = 2n; raddoppiando n, raddoppia C."
            ],
            "steps": [
              [
                "The constant k is the ratio y/x.",
                "La costante k è il rapporto y/x."
              ],
              [
                "Direct proportionality has a constant ratio and a line through (0,0).",
                "La proporzionalità diretta ha rapporto costante e retta passante per (0,0)."
              ]
            ],
            "answer": [
              "Direct proportionality has a constant ratio and a line through (0,0).",
              "La proporzionalità diretta ha rapporto costante e retta passante per (0,0)."
            ]
          },
          "misconceptions": [
            {
              "belief": [
                "A straight line not through the origin is not direct proportionality.",
                "Una retta che non passa per l'origine non rappresenta proporzionalità diretta."
              ],
              "correction": [
                null,
                null
              ]
            }
          ],
          "knowledgePrompts": [
            [
              "Explain the key idea, then solve a new example.",
              "Spiega l'idea chiave, poi risolvi un nuovo esempio."
            ]
          ],
          "sceneIndexes": [
            2
          ]
        }
      ],
      "guidedPractice": [
        {
          "id": "physics-2m2-guided",
          "title": [
            "Guided practice",
            "Esercitazione guidata"
          ],
          "instructions": [
            "Answer the first two questions. Use the worked examples and feedback to check each step.",
            "Rispondi alle prime due domande. Usa gli esempi svolti e il feedback per controllare ogni passaggio."
          ],
          "questions": [
            {
              "q": [
                "Where is the independent variable usually plotted?",
                "Dove si rappresenta di solito la variabile indipendente?"
              ],
              "a": [
                [
                  "On the horizontal x-axis.",
                  "Sull'asse orizzontale x."
                ],
                [
                  "On the vertical y-axis.",
                  "Sull'asse verticale y."
                ],
                [
                  "Outside the graph.",
                  "Fuori dal grafico."
                ],
                [
                  "Only in the title.",
                  "Solo nel titolo."
                ]
              ],
              "why": [
                "The independent variable is usually placed on x.",
                "La variabile indipendente si colloca di solito su x."
              ]
            },
            {
              "q": [
                "What does one point on a graph represent?",
                "Che cosa rappresenta un punto su un grafico?"
              ],
              "a": [
                [
                  "A pair of values.",
                  "Una coppia di valori."
                ],
                [
                  "A unit only.",
                  "Solo un'unità."
                ],
                [
                  "A title.",
                  "Un titolo."
                ],
                [
                  "An instrument.",
                  "Uno strumento."
                ]
              ],
              "why": [
                "Each point links one x-value to one y-value.",
                "Ogni punto collega un valore di x a uno di y."
              ]
            }
          ],
          "hints": [
            [
              "Identify the quantity, rule or definition before calculating.",
              "Individua la grandezza, la regola o la definizione prima di calcolare."
            ],
            [
              "Check the unit and the direction or scale in your answer.",
              "Controlla l'unità e la direzione o la scala nella risposta."
            ]
          ],
          "sceneIndex": 3
        }
      ],
      "independentPractice": [
        {
          "id": "physics-2m2-independent",
          "title": [
            "Independent practice",
            "Esercitazione autonoma"
          ],
          "instructions": [
            "Answer without hints, then read the explanation and correct any mistake.",
            "Rispondi senza suggerimenti, poi leggi la spiegazione e correggi gli eventuali errori."
          ],
          "questions": [
            {
              "q": [
                "Which equation represents direct proportionality?",
                "Quale equazione rappresenta proporzionalità diretta?"
              ],
              "a": [
                [
                  "y = 4x",
                  "y = 4x"
                ],
                [
                  "y = x + 4",
                  "y = x + 4"
                ],
                [
                  "y = 4/x",
                  "y = 4/x"
                ],
                [
                  "y = x²",
                  "y = x²"
                ]
              ],
              "why": [
                "Direct proportionality has the form y = kx.",
                "La proporzionalità diretta ha forma y = kx."
              ]
            },
            {
              "q": [
                "A graph of direct proportionality passes through…",
                "Il grafico di proporzionalità diretta passa per…"
              ],
              "a": [
                [
                  "the origin (0,0).",
                  "l'origine (0,0)."
                ],
                [
                  "(0,5) only.",
                  "solo (0,5)."
                ],
                [
                  "every point on the y-axis.",
                  "tutti i punti dell'asse y."
                ],
                [
                  "no axes.",
                  "nessun asse."
                ]
              ],
              "why": [
                "When x is zero, y is also zero.",
                "Quando x è zero, anche y è zero."
              ]
            }
          ],
          "sceneIndex": 4
        }
      ],
      "knowledgeCheck": [
        {
          "q": [
            "Where is the independent variable usually plotted?",
            "Dove si rappresenta di solito la variabile indipendente?"
          ],
          "a": [
            [
              "On the horizontal x-axis.",
              "Sull'asse orizzontale x."
            ],
            [
              "On the vertical y-axis.",
              "Sull'asse verticale y."
            ],
            [
              "Outside the graph.",
              "Fuori dal grafico."
            ],
            [
              "Only in the title.",
              "Solo nel titolo."
            ]
          ],
          "why": [
            "The independent variable is usually placed on x.",
            "La variabile indipendente si colloca di solito su x."
          ]
        },
        {
          "q": [
            "What does one point on a graph represent?",
            "Che cosa rappresenta un punto su un grafico?"
          ],
          "a": [
            [
              "A pair of values.",
              "Una coppia di valori."
            ],
            [
              "A unit only.",
              "Solo un'unità."
            ],
            [
              "A title.",
              "Un titolo."
            ],
            [
              "An instrument.",
              "Uno strumento."
            ]
          ],
          "why": [
            "Each point links one x-value to one y-value.",
            "Ogni punto collega un valore di x a uno di y."
          ]
        },
        {
          "q": [
            "Which equation represents direct proportionality?",
            "Quale equazione rappresenta proporzionalità diretta?"
          ],
          "a": [
            [
              "y = 4x",
              "y = 4x"
            ],
            [
              "y = x + 4",
              "y = x + 4"
            ],
            [
              "y = 4/x",
              "y = 4/x"
            ],
            [
              "y = x²",
              "y = x²"
            ]
          ],
          "why": [
            "Direct proportionality has the form y = kx.",
            "La proporzionalità diretta ha forma y = kx."
          ]
        },
        {
          "q": [
            "A graph of direct proportionality passes through…",
            "Il grafico di proporzionalità diretta passa per…"
          ],
          "a": [
            [
              "the origin (0,0).",
              "l'origine (0,0)."
            ],
            [
              "(0,5) only.",
              "solo (0,5)."
            ],
            [
              "every point on the y-axis.",
              "tutti i punti dell'asse y."
            ],
            [
              "no axes.",
              "nessun asse."
            ]
          ],
          "why": [
            "When x is zero, y is also zero.",
            "Quando x è zero, anche y è zero."
          ]
        }
      ],
      "summary": [
        [
          "Tables organise paired values. Graphs show relationships: the independent variable is usually on the x-axis and the dependent variable on the y-axis.",
          "Le tabelle organizzano coppie di valori. I grafici mostrano relazioni: la variabile indipendente è di solito sull'asse x e quella dipendente sull'asse y."
        ],
        [
          "Two quantities are directly proportional when y/x is constant: y = kx. The graph is a straight line through the origin.",
          "Due grandezze sono direttamente proporzionali quando y/x è costante: y = kx. Il grafico è una retta che passa per l'origine."
        ]
      ],
      "masteryAssessment": {
        "title": [
          "Mastery trial",
          "Prova di maestria"
        ],
        "instructions": [
          "Apply the ideas independently. You need at least 75% to pass this mastery check.",
          "Applica le idee in autonomia. Serve almeno il 75% per superare questa verifica di maestria."
        ],
        "questions": [
          {
            "q": [
              "Where is the independent variable usually plotted?",
              "Dove si rappresenta di solito la variabile indipendente?"
            ],
            "a": [
              [
                "On the horizontal x-axis.",
                "Sull'asse orizzontale x."
              ],
              [
                "On the vertical y-axis.",
                "Sull'asse verticale y."
              ],
              [
                "Outside the graph.",
                "Fuori dal grafico."
              ],
              [
                "Only in the title.",
                "Solo nel titolo."
              ]
            ],
            "why": [
              "The independent variable is usually placed on x.",
              "La variabile indipendente si colloca di solito su x."
            ]
          },
          {
            "q": [
              "What does one point on a graph represent?",
              "Che cosa rappresenta un punto su un grafico?"
            ],
            "a": [
              [
                "A pair of values.",
                "Una coppia di valori."
              ],
              [
                "A unit only.",
                "Solo un'unità."
              ],
              [
                "A title.",
                "Un titolo."
              ],
              [
                "An instrument.",
                "Uno strumento."
              ]
            ],
            "why": [
              "Each point links one x-value to one y-value.",
              "Ogni punto collega un valore di x a uno di y."
            ]
          },
          {
            "q": [
              "Which equation represents direct proportionality?",
              "Quale equazione rappresenta proporzionalità diretta?"
            ],
            "a": [
              [
                "y = 4x",
                "y = 4x"
              ],
              [
                "y = x + 4",
                "y = x + 4"
              ],
              [
                "y = 4/x",
                "y = 4/x"
              ],
              [
                "y = x²",
                "y = x²"
              ]
            ],
            "why": [
              "Direct proportionality has the form y = kx.",
              "La proporzionalità diretta ha forma y = kx."
            ]
          },
          {
            "q": [
              "A graph of direct proportionality passes through…",
              "Il grafico di proporzionalità diretta passa per…"
            ],
            "a": [
              [
                "the origin (0,0).",
                "l'origine (0,0)."
              ],
              [
                "(0,5) only.",
                "solo (0,5)."
              ],
              [
                "every point on the y-axis.",
                "tutti i punti dell'asse y."
              ],
              [
                "no axes.",
                "nessun asse."
              ]
            ],
            "why": [
              "When x is zero, y is also zero.",
              "Quando x è zero, anche y è zero."
            ]
          }
        ],
        "questionConceptIds": [
          "graphs",
          "graphs",
          "proportionality",
          "proportionality"
        ],
        "passingScore": 75
      },
      "techniqueUnlock": {
        "id": "physics-2m2-technique",
        "name": [
          "Physics Form · Applied Technique",
          "Stile della Fisica · Tecnica applicata"
        ],
        "description": [
          "Choose the correct physical model, show your reasoning and check units before striking.",
          "Scegli il modello fisico corretto, mostra il ragionamento e controlla le unità prima di colpire."
        ],
        "xpReward": 25
      }
    }},
  {
    "id": "p3m1",
    "arc": 18,
    "sec": "3.1–3.3",
    "pages": "60–72",
    "hue": 210,
    "horns": 3,
    "eyes": 2,
    "title": [
      "Arrows of Force",
      "Frecce di forza"
    ],
    "topic": [
      "Scalars vs vectors; adding vectors",
      "Scalari e vettori; sommare i vettori"
    ],
    "demon": [
      "Vector Viper",
      "Vipera Vettoriale"
    ],
    "tech": [
      "Force Form · First Technique: Resultant Strike",
      "Stile della Forza · Prima Tecnica: Colpo Risultante"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "phVector",
        "text": [
          "<p>Some quantities need only a number — temperature, mass, time. We call them [[scalar|scalare]] quantities.</p><p>Others need a number <i>and</i> a direction: a push, a velocity, a force. These are [[vector|vettore]] quantities, drawn as arrows. The length is the size; the way it points is the direction.</p>",
          "<p>Alcune grandezze hanno bisogno solo di un numero — temperatura, massa, tempo. Le chiamiamo grandezze [[scalar|scalare]].</p><p>Altre richiedono un numero <i>e</i> una direzione: una spinta, una velocità, una forza. Sono grandezze [[vector|vettore]], disegnate come frecce. La lunghezza è il valore; il verso in cui punta è la direzione.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "phVector",
        "text": [
          "<p>To add two vectors we lay them [[tip-to-tail|punta-coda]]: start the second where the first ends. The [[resultant|risultante]] runs from the very start to the very end.</p><p>When they're at right angles, the resultant's length comes from Pythagoras: a 3 and a 4 give a resultant of 5.</p>",
          "<p>Per sommare due vettori li mettiamo [[tip-to-tail|punta-coda]]: il secondo parte dove finisce il primo. La [[resultant|risultante]] va dall'inizio assoluto alla fine assoluta.</p><p>Quando sono ad angolo retto, la lunghezza della risultante viene da Pitagora: un 3 e un 4 danno una risultante di 5.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "phVector",
        "text": [
          "<p>The Vector Viper scattered pairs of vectors across the grid. Add each pair tip-to-tail and click where the resultant ends.</p>",
          "<p>La Vipera Vettoriale ha sparso coppie di vettori sulla griglia. Somma ogni coppia punta-coda e clicca dove finisce la risultante.</p>"
        ]
      },
      {
        "type": "vectors",
        "mode": "resultant",
        "title": [
          "Build the resultant",
          "Costruisci la risultante"
        ],
        "grid": 6,
        "rounds": [
          {
            "a": [
              3,
              0
            ],
            "b": [
              0,
              4
            ],
            "why": [
              "3 east then 4 north lands at (3,4), a resultant of 5.",
              "3 a est poi 4 a nord arriva in (3,4), risultante 5."
            ]
          },
          {
            "a": [
              2,
              2
            ],
            "b": [
              2,
              1
            ],
            "why": [
              "Tip-to-tail: (2,2) then (2,1) ends at (4,3).",
              "Punta-coda: (2,2) poi (2,1) finisce in (4,3)."
            ]
          },
          {
            "a": [
              1,
              3
            ],
            "b": [
              3,
              0
            ],
            "why": [
              "(1,3) then (3,0) lands at (4,3).",
              "(1,3) poi (3,0) arriva in (4,3)."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Ssss! I'm the Vector Viper! I twist your arrows so forces point every way but the right one!</p>",
          "<p>Ssss! Sono la Vipera Vettoriale! Storco le tue frecce così le forze puntano ovunque tranne nel verso giusto!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "Which of these is a vector quantity?",
          "Quale di queste è una grandezza vettoriale?"
        ],
        "a": [
          [
            "Force",
            "Forza"
          ],
          [
            "Temperature",
            "Temperatura"
          ],
          [
            "Mass",
            "Massa"
          ],
          [
            "Time",
            "Tempo"
          ]
        ],
        "why": [
          "Force has size and direction, so it is a vector.",
          "La forza ha valore e direzione, quindi è un vettore."
        ]
      },
      {
        "q": [
          "A vector is drawn as…",
          "Un vettore si disegna come…"
        ],
        "a": [
          [
            "an arrow",
            "una freccia"
          ],
          [
            "a dot",
            "un punto"
          ],
          [
            "a circle",
            "un cerchio"
          ],
          [
            "a number only",
            "solo un numero"
          ]
        ],
        "why": [
          "The arrow's length is the magnitude, its direction the way it points.",
          "La lunghezza della freccia è il modulo, la direzione il verso in cui punta."
        ]
      },
      {
        "q": [
          "Two perpendicular forces of 6 N and 8 N give a resultant of…",
          "Due forze perpendicolari di 6 N e 8 N danno una risultante di…"
        ],
        "a": [
          [
            "10 N",
            "10 N"
          ],
          [
            "14 N",
            "14 N"
          ],
          [
            "2 N",
            "2 N"
          ],
          [
            "48 N",
            "48 N"
          ]
        ],
        "why": [
          "√(6² + 8²) = √100 = 10 N.",
          "√(6² + 8²) = √100 = 10 N."
        ]
      },
      {
        "q": [
          "To add vectors graphically you place them…",
          "Per sommare vettori graficamente li metti…"
        ],
        "a": [
          [
            "tip-to-tail",
            "punta-coda"
          ],
          [
            "tail-to-tail only",
            "coda-coda soltanto"
          ],
          [
            "at random",
            "a caso"
          ],
          [
            "on top of each other",
            "uno sopra l'altro"
          ]
        ],
        "why": [
          "Tip-to-tail: the resultant runs start-to-end.",
          "Punta-coda: la risultante va dall'inizio alla fine."
        ]
      },
      {
        "q": [
          "Two forces 3 N and 4 N act in the SAME direction. Resultant?",
          "Due forze 3 N e 4 N agiscono nella STESSA direzione. Risultante?"
        ],
        "a": [
          [
            "7 N",
            "7 N"
          ],
          [
            "5 N",
            "5 N"
          ],
          [
            "1 N",
            "1 N"
          ],
          [
            "12 N",
            "12 N"
          ]
        ],
        "why": [
          "Same direction: they simply add, 3 + 4 = 7 N.",
          "Stessa direzione: si sommano, 3 + 4 = 7 N."
        ]
      },
      {
        "q": [
          "The resultant of several vectors is…",
          "La risultante di più vettori è…"
        ],
        "a": [
          [
            "the single vector with the same total effect",
            "l'unico vettore con lo stesso effetto complessivo"
          ],
          [
            "the longest one",
            "il più lungo"
          ],
          [
            "always zero",
            "sempre zero"
          ],
          [
            "their average direction",
            "la loro direzione media"
          ]
        ],
        "why": [
          "The resultant replaces them all with one equivalent vector.",
          "La risultante li sostituisce tutti con un unico vettore equivalente."
        ]
      }
    ]
  ,
    "learning": {
      "version": 1,
      "objectives": [
        {
          "id": "p3m1-objective-1",
          "description": [
            "Distinguish scalar and vector quantities",
            "Distinguere grandezze scalari e vettoriali"
          ],
          "successCriteria": [
            [
              "Explain the idea and apply it correctly in a short exercise.",
              "Spiegare il concetto e applicarlo correttamente in un breve esercizio."
            ]
          ]
        },
        {
          "id": "p3m1-objective-2",
          "description": [
            "Add vectors along the same line",
            "Sommare vettori sulla stessa linea"
          ],
          "successCriteria": [
            [
              "Explain the idea and apply it correctly in a short exercise.",
              "Spiegare il concetto e applicarlo correttamente in un breve esercizio."
            ]
          ]
        }
      ],
      "prerequisites": [
        [
          "Review the key quantities and units from the previous mission.",
          "Ripassa le grandezze e le unità chiave della missione precedente."
        ]
      ],
      "concepts": [
        {
          "id": "scalar-vector",
          "title": [
            "Scalars and vectors",
            "Scalari e vettori"
          ],
          "explanation": [
            "A scalar has magnitude only, such as mass or time. A vector has magnitude, direction and sense, such as force or displacement.",
            "Uno scalare ha solo un valore, come massa o tempo. Un vettore ha modulo, direzione e verso, come forza o spostamento."
          ],
          "example": [
            "A 5 N force to the right is a vector; a mass of 5 kg is a scalar.",
            "Una forza di 5 N verso destra è un vettore; una massa di 5 kg è uno scalare."
          ],
          "workedExample": {
            "scenario": [
              "A 5 N force to the right is a vector; a mass of 5 kg is a scalar.",
              "Una forza di 5 N verso destra è un vettore; una massa di 5 kg è uno scalare."
            ],
            "steps": [
              [
                "A vector arrow shows magnitude by length and orientation by direction and sense.",
                "La freccia mostra il modulo con la lunghezza e l'orientamento con direzione e verso."
              ],
              [
                "A vector needs more information than a number alone.",
                "Un vettore richiede più informazioni di un semplice numero."
              ]
            ],
            "answer": [
              "A vector needs more information than a number alone.",
              "Un vettore richiede più informazioni di un semplice numero."
            ]
          },
          "misconceptions": [
            {
              "belief": [
                "A vector is not defined by magnitude alone.",
                "Un vettore non è definito dal solo modulo."
              ],
              "correction": [
                null,
                null
              ]
            }
          ],
          "knowledgePrompts": [
            [
              "Explain the key idea, then solve a new example.",
              "Spiega l'idea chiave, poi risolvi un nuovo esempio."
            ]
          ],
          "sceneIndexes": [
            0,
            1
          ]
        },
        {
          "id": "addition",
          "title": [
            "Adding vectors on one line",
            "Somma di vettori su una linea"
          ],
          "explanation": [
            "For the same direction, add magnitudes. For opposite directions, subtract magnitudes and keep the direction of the larger vector.",
            "Per lo stesso verso, somma i moduli. Per versi opposti, sottrai i moduli e mantieni il verso del vettore maggiore."
          ],
          "example": [
            "3 N right + 2 N right = 5 N right; 5 N right + 2 N left = 3 N right.",
            "3 N a destra + 2 N a destra = 5 N a destra; 5 N a destra + 2 N a sinistra = 3 N a destra."
          ],
          "workedExample": {
            "scenario": [
              "3 N right + 2 N right = 5 N right; 5 N right + 2 N left = 3 N right.",
              "3 N a destra + 2 N a destra = 5 N a destra; 5 N a destra + 2 N a sinistra = 3 N a destra."
            ],
            "steps": [
              [
                "Choose one direction as positive before adding signed values.",
                "Scegli una direzione come positiva prima di sommare i valori con segno."
              ],
              [
                "Opposite vectors can partly or completely cancel.",
                "Vettori opposti possono annullarsi in parte o completamente."
              ]
            ],
            "answer": [
              "Opposite vectors can partly or completely cancel.",
              "Vettori opposti possono annullarsi in parte o completamente."
            ]
          },
          "misconceptions": [
            {
              "belief": [
                "Do not add opposite-direction magnitudes without considering direction.",
                "Non sommare i moduli di versi opposti senza considerare la direzione."
              ],
              "correction": [
                null,
                null
              ]
            }
          ],
          "knowledgePrompts": [
            [
              "Explain the key idea, then solve a new example.",
              "Spiega l'idea chiave, poi risolvi un nuovo esempio."
            ]
          ],
          "sceneIndexes": [
            2
          ]
        }
      ],
      "guidedPractice": [
        {
          "id": "physics-3m1-guided",
          "title": [
            "Guided practice",
            "Esercitazione guidata"
          ],
          "instructions": [
            "Answer the first two questions. Use the worked examples and feedback to check each step.",
            "Rispondi alle prime due domande. Usa gli esempi svolti e il feedback per controllare ogni passaggio."
          ],
          "questions": [
            {
              "q": [
                "Which is a vector quantity?",
                "Quale è una grandezza vettoriale?"
              ],
              "a": [
                [
                  "Force.",
                  "Forza."
                ],
                [
                  "Mass.",
                  "Massa."
                ],
                [
                  "Time.",
                  "Tempo."
                ],
                [
                  "Temperature.",
                  "Temperatura."
                ]
              ],
              "why": [
                "Force has magnitude, direction and sense.",
                "La forza ha modulo, direzione e verso."
              ]
            },
            {
              "q": [
                "A vector is described by…",
                "Un vettore è descritto da…"
              ],
              "a": [
                [
                  "magnitude, direction and sense.",
                  "modulo, direzione e verso."
                ],
                [
                  "magnitude only.",
                  "solo modulo."
                ],
                [
                  "unit only.",
                  "solo unità."
                ],
                [
                  "colour and mass.",
                  "colore e massa."
                ]
              ],
              "why": [
                "A vector includes size and orientation.",
                "Un vettore comprende valore e orientamento."
              ]
            }
          ],
          "hints": [
            [
              "Identify the quantity, rule or definition before calculating.",
              "Individua la grandezza, la regola o la definizione prima di calcolare."
            ],
            [
              "Check the unit and the direction or scale in your answer.",
              "Controlla l'unità e la direzione o la scala nella risposta."
            ]
          ],
          "sceneIndex": 3
        }
      ],
      "independentPractice": [
        {
          "id": "physics-3m1-independent",
          "title": [
            "Independent practice",
            "Esercitazione autonoma"
          ],
          "instructions": [
            "Answer without hints, then read the explanation and correct any mistake.",
            "Rispondi senza suggerimenti, poi leggi la spiegazione e correggi gli eventuali errori."
          ],
          "questions": [
            {
              "q": [
                "4 N right plus 3 N right equals…",
                "4 N verso destra più 3 N verso destra equivale a…"
              ],
              "a": [
                [
                  "7 N right.",
                  "7 N verso destra."
                ],
                [
                  "1 N left.",
                  "1 N verso sinistra."
                ],
                [
                  "12 N right.",
                  "12 N verso destra."
                ],
                [
                  "7 N left.",
                  "7 N verso sinistra."
                ]
              ],
              "why": [
                "Same direction: add the magnitudes.",
                "Stesso verso: somma i moduli."
              ]
            },
            {
              "q": [
                "6 N right plus 2 N left equals…",
                "6 N verso destra più 2 N verso sinistra equivale a…"
              ],
              "a": [
                [
                  "4 N right.",
                  "4 N verso destra."
                ],
                [
                  "8 N right.",
                  "8 N verso destra."
                ],
                [
                  "4 N left.",
                  "4 N verso sinistra."
                ],
                [
                  "12 N left.",
                  "12 N verso sinistra."
                ]
              ],
              "why": [
                "Opposite directions: subtract and keep the larger vector's direction.",
                "Versi opposti: sottrai e mantieni il verso del vettore maggiore."
              ]
            }
          ],
          "sceneIndex": 4
        }
      ],
      "knowledgeCheck": [
        {
          "q": [
            "Which is a vector quantity?",
            "Quale è una grandezza vettoriale?"
          ],
          "a": [
            [
              "Force.",
              "Forza."
            ],
            [
              "Mass.",
              "Massa."
            ],
            [
              "Time.",
              "Tempo."
            ],
            [
              "Temperature.",
              "Temperatura."
            ]
          ],
          "why": [
            "Force has magnitude, direction and sense.",
            "La forza ha modulo, direzione e verso."
          ]
        },
        {
          "q": [
            "A vector is described by…",
            "Un vettore è descritto da…"
          ],
          "a": [
            [
              "magnitude, direction and sense.",
              "modulo, direzione e verso."
            ],
            [
              "magnitude only.",
              "solo modulo."
            ],
            [
              "unit only.",
              "solo unità."
            ],
            [
              "colour and mass.",
              "colore e massa."
            ]
          ],
          "why": [
            "A vector includes size and orientation.",
            "Un vettore comprende valore e orientamento."
          ]
        },
        {
          "q": [
            "4 N right plus 3 N right equals…",
            "4 N verso destra più 3 N verso destra equivale a…"
          ],
          "a": [
            [
              "7 N right.",
              "7 N verso destra."
            ],
            [
              "1 N left.",
              "1 N verso sinistra."
            ],
            [
              "12 N right.",
              "12 N verso destra."
            ],
            [
              "7 N left.",
              "7 N verso sinistra."
            ]
          ],
          "why": [
            "Same direction: add the magnitudes.",
            "Stesso verso: somma i moduli."
          ]
        },
        {
          "q": [
            "6 N right plus 2 N left equals…",
            "6 N verso destra più 2 N verso sinistra equivale a…"
          ],
          "a": [
            [
              "4 N right.",
              "4 N verso destra."
            ],
            [
              "8 N right.",
              "8 N verso destra."
            ],
            [
              "4 N left.",
              "4 N verso sinistra."
            ],
            [
              "12 N left.",
              "12 N verso sinistra."
            ]
          ],
          "why": [
            "Opposite directions: subtract and keep the larger vector's direction.",
            "Versi opposti: sottrai e mantieni il verso del vettore maggiore."
          ]
        }
      ],
      "summary": [
        [
          "A scalar has magnitude only, such as mass or time. A vector has magnitude, direction and sense, such as force or displacement.",
          "Uno scalare ha solo un valore, come massa o tempo. Un vettore ha modulo, direzione e verso, come forza o spostamento."
        ],
        [
          "For the same direction, add magnitudes. For opposite directions, subtract magnitudes and keep the direction of the larger vector.",
          "Per lo stesso verso, somma i moduli. Per versi opposti, sottrai i moduli e mantieni il verso del vettore maggiore."
        ]
      ],
      "masteryAssessment": {
        "title": [
          "Mastery trial",
          "Prova di maestria"
        ],
        "instructions": [
          "Apply the ideas independently. You need at least 75% to pass this mastery check.",
          "Applica le idee in autonomia. Serve almeno il 75% per superare questa verifica di maestria."
        ],
        "questions": [
          {
            "q": [
              "Which is a vector quantity?",
              "Quale è una grandezza vettoriale?"
            ],
            "a": [
              [
                "Force.",
                "Forza."
              ],
              [
                "Mass.",
                "Massa."
              ],
              [
                "Time.",
                "Tempo."
              ],
              [
                "Temperature.",
                "Temperatura."
              ]
            ],
            "why": [
              "Force has magnitude, direction and sense.",
              "La forza ha modulo, direzione e verso."
            ]
          },
          {
            "q": [
              "A vector is described by…",
              "Un vettore è descritto da…"
            ],
            "a": [
              [
                "magnitude, direction and sense.",
                "modulo, direzione e verso."
              ],
              [
                "magnitude only.",
                "solo modulo."
              ],
              [
                "unit only.",
                "solo unità."
              ],
              [
                "colour and mass.",
                "colore e massa."
              ]
            ],
            "why": [
              "A vector includes size and orientation.",
              "Un vettore comprende valore e orientamento."
            ]
          },
          {
            "q": [
              "4 N right plus 3 N right equals…",
              "4 N verso destra più 3 N verso destra equivale a…"
            ],
            "a": [
              [
                "7 N right.",
                "7 N verso destra."
              ],
              [
                "1 N left.",
                "1 N verso sinistra."
              ],
              [
                "12 N right.",
                "12 N verso destra."
              ],
              [
                "7 N left.",
                "7 N verso sinistra."
              ]
            ],
            "why": [
              "Same direction: add the magnitudes.",
              "Stesso verso: somma i moduli."
            ]
          },
          {
            "q": [
              "6 N right plus 2 N left equals…",
              "6 N verso destra più 2 N verso sinistra equivale a…"
            ],
            "a": [
              [
                "4 N right.",
                "4 N verso destra."
              ],
              [
                "8 N right.",
                "8 N verso destra."
              ],
              [
                "4 N left.",
                "4 N verso sinistra."
              ],
              [
                "12 N left.",
                "12 N verso sinistra."
              ]
            ],
            "why": [
              "Opposite directions: subtract and keep the larger vector's direction.",
              "Versi opposti: sottrai e mantieni il verso del vettore maggiore."
            ]
          }
        ],
        "questionConceptIds": [
          "scalar-vector",
          "scalar-vector",
          "addition",
          "addition"
        ],
        "passingScore": 75
      },
      "techniqueUnlock": {
        "id": "physics-3m1-technique",
        "name": [
          "Physics Form · Applied Technique",
          "Stile della Fisica · Tecnica applicata"
        ],
        "description": [
          "Choose the correct physical model, show your reasoning and check units before striking.",
          "Scegli il modello fisico corretto, mostra il ragionamento e controlla le unità prima di colpire."
        ],
        "xpReward": 25
      }
    }},
  {
    "id": "p3m2",
    "arc": 18,
    "sec": "3.4–3.6",
    "pages": "73–82",
    "hue": 20,
    "horns": 4,
    "eyes": 3,
    "title": [
      "Push, Pull, Stretch",
      "Spingi, tira, allunga"
    ],
    "topic": [
      "Forces: weight, elastic force, friction",
      "Le forze: peso, forza elastica, attrito"
    ],
    "demon": [
      "Friction Fiend",
      "Demone dell'Attrito"
    ],
    "tech": [
      "Force Form · Second Technique: Newton Grip",
      "Stile della Forza · Seconda Tecnica: Presa di Newton"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "phForce",
        "text": [
          "<p>A [[force|forza]] is a push or a pull — it can change an object's motion or shape. We measure it in [[newton|newton]] (N) with a [[dynamometer|dinamometro]], a calibrated spring.</p><p>The [[weight|forza-peso]] is the force of gravity on a mass: P = m·g, with g ≈ 9.8 N/kg. Mass (kg) and weight (N) are different things!</p>",
          "<p>Una [[force|forza]] è una spinta o una trazione — può cambiare il moto o la forma di un oggetto. La misuriamo in [[newton|newton]] (N) con un [[dynamometer|dinamometro]], una molla tarata.</p><p>La [[weight|forza-peso]] è la forza di gravità su una massa: P = m·g, con g ≈ 9,8 N/kg. Massa (kg) e peso (N) sono cose diverse!</p>"
        ]
      },
      {
        "who": "s",
        "vis": "phForce",
        "text": [
          "<p>A spring pulls back when stretched: the [[elastic force|forza elastica]] follows [[Hooke's law|legge di Hooke]], F = k·x — the more you stretch (x), the harder it pulls.</p><p>And when surfaces slide, [[friction|attrito]] resists the motion. It's why a pushed box eventually stops.</p>",
          "<p>Una molla tira indietro quando è allungata: la [[elastic force|forza elastica]] segue la [[Hooke's law|legge di Hooke]], F = k·x — più la allunghi (x), più forte tira.</p><p>E quando le superfici scorrono, l'[[friction|attrito]] si oppone al moto. È il motivo per cui una scatola spinta prima o poi si ferma.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "phForce",
        "text": [
          "<p>The Friction Fiend mixed up a pile of force facts. Sort each statement under the right force.</p>",
          "<p>Il Demone dell'Attrito ha mescolato un mucchio di fatti sulle forze. Smista ogni affermazione sotto la forza giusta.</p>"
        ]
      },
      {
        "type": "sort",
        "title": [
          "Which force?",
          "Quale forza?"
        ],
        "cats": [
          [
            "Weight",
            "Peso"
          ],
          [
            "Elastic",
            "Elastica"
          ],
          [
            "Friction",
            "Attrito"
          ]
        ],
        "items": [
          {
            "n": [
              "Pulls a mass toward the ground",
              "Tira una massa verso il suolo"
            ],
            "i": "file",
            "c": 0,
            "why": [
              "Gravity gives weight, P = m·g.",
              "La gravità dà il peso, P = m·g."
            ]
          },
          {
            "n": [
              "Follows F = k·x",
              "Segue F = k·x"
            ],
            "i": "layers",
            "c": 1,
            "why": [
              "Hooke's law describes the elastic force.",
              "La legge di Hooke descrive la forza elastica."
            ]
          },
          {
            "n": [
              "Stops a sliding box",
              "Ferma una scatola che scivola"
            ],
            "i": "robot",
            "c": 2,
            "why": [
              "Friction opposes sliding motion.",
              "L'attrito si oppone allo scorrimento."
            ]
          },
          {
            "n": [
              "Measured as m × g",
              "Si calcola come m × g"
            ],
            "i": "book",
            "c": 0,
            "why": [
              "Weight = mass × gravitational field g.",
              "Peso = massa × campo gravitazionale g."
            ]
          },
          {
            "n": [
              "Stronger the more a spring is stretched",
              "Più forte quanto più la molla è allungata"
            ],
            "i": "puzzle",
            "c": 1,
            "why": [
              "Elastic force grows with the stretch x.",
              "La forza elastica cresce con l'allungamento x."
            ]
          },
          {
            "n": [
              "Produces heat between rubbing surfaces",
              "Produce calore tra superfici che sfregano"
            ],
            "i": "eye",
            "c": 2,
            "why": [
              "Friction turns motion into heat.",
              "L'attrito trasforma il moto in calore."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Grrsh! I'm the Friction Fiend! I drag on everything that moves and burn your energy to waste heat!</p>",
          "<p>Grrsh! Sono il Demone dell'Attrito! Freno tutto ciò che si muove e brucio la tua energia in calore sprecato!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "The SI unit of force is the…",
          "L'unità SI della forza è il…"
        ],
        "a": [
          [
            "newton",
            "newton"
          ],
          [
            "kilogram",
            "chilogrammo"
          ],
          [
            "metre",
            "metro"
          ],
          [
            "joule",
            "joule"
          ]
        ],
        "why": [
          "Force is measured in newtons (N).",
          "La forza si misura in newton (N)."
        ]
      },
      {
        "q": [
          "A 5 kg mass weighs about… (g ≈ 9.8 N/kg)",
          "Una massa di 5 kg pesa circa… (g ≈ 9,8 N/kg)"
        ],
        "a": [
          [
            "49 N",
            "49 N"
          ],
          [
            "5 N",
            "5 N"
          ],
          [
            "9.8 N",
            "9,8 N"
          ],
          [
            "0.5 N",
            "0,5 N"
          ]
        ],
        "why": [
          "P = m·g = 5 × 9.8 ≈ 49 N.",
          "P = m·g = 5 × 9,8 ≈ 49 N."
        ]
      },
      {
        "q": [
          "Hooke's law for a spring is…",
          "La legge di Hooke per una molla è…"
        ],
        "a": [
          [
            "F = k·x",
            "F = k·x"
          ],
          [
            "F = m·g",
            "F = m·g"
          ],
          [
            "F = m·a",
            "F = m·a"
          ],
          [
            "F = k/x",
            "F = k/x"
          ]
        ],
        "why": [
          "Elastic force is proportional to the stretch: F = k·x.",
          "La forza elastica è proporzionale all'allungamento: F = k·x."
        ]
      },
      {
        "q": [
          "Mass and weight differ because…",
          "Massa e peso differiscono perché…"
        ],
        "a": [
          [
            "mass is in kg, weight is a force in N",
            "la massa è in kg, il peso è una forza in N"
          ],
          [
            "they are the same",
            "sono la stessa cosa"
          ],
          [
            "weight is in kg",
            "il peso è in kg"
          ],
          [
            "mass has direction",
            "la massa ha direzione"
          ]
        ],
        "why": [
          "Mass measures matter (kg); weight is the gravity force on it (N).",
          "La massa misura la materia (kg); il peso è la forza di gravità su di essa (N)."
        ]
      },
      {
        "q": [
          "Friction always acts…",
          "L'attrito agisce sempre…"
        ],
        "a": [
          [
            "against the motion",
            "contro il moto"
          ],
          [
            "in the direction of motion",
            "nel verso del moto"
          ],
          [
            "upward",
            "verso l'alto"
          ],
          [
            "toward the centre of the Earth",
            "verso il centro della Terra"
          ]
        ],
        "why": [
          "Friction opposes the relative sliding.",
          "L'attrito si oppone allo scorrimento relativo."
        ]
      },
      {
        "q": [
          "An instrument that measures force is the…",
          "Uno strumento che misura la forza è il…"
        ],
        "a": [
          [
            "dynamometer",
            "dinamometro"
          ],
          [
            "thermometer",
            "termometro"
          ],
          [
            "balance",
            "bilancia"
          ],
          [
            "ruler",
            "righello"
          ]
        ],
        "why": [
          "A dynamometer uses a calibrated spring to read force.",
          "Un dinamometro usa una molla tarata per leggere la forza."
        ]
      }
    ]
  ,
    "learning": {
      "version": 1,
      "objectives": [
        {
          "id": "p3m2-objective-1",
          "description": [
            "Describe the effects of forces",
            "Descrivere gli effetti delle forze"
          ],
          "successCriteria": [
            [
              "Explain the idea and apply it correctly in a short exercise.",
              "Spiegare il concetto e applicarlo correttamente in un breve esercizio."
            ]
          ]
        },
        {
          "id": "p3m2-objective-2",
          "description": [
            "Explain weight, elastic force and friction",
            "Spiegare peso, forza elastica e attrito"
          ],
          "successCriteria": [
            [
              "Explain the idea and apply it correctly in a short exercise.",
              "Spiegare il concetto e applicarlo correttamente in un breve esercizio."
            ]
          ]
        }
      ],
      "prerequisites": [
        [
          "Review the key quantities and units from the previous mission.",
          "Ripassa le grandezze e le unità chiave della missione precedente."
        ]
      ],
      "concepts": [
        {
          "id": "force-effects",
          "title": [
            "Forces and their effects",
            "Forze e loro effetti"
          ],
          "explanation": [
            "A force is an interaction that can change motion or shape. Force is measured in newtons (N).",
            "Una forza è un'interazione che può cambiare il moto o la forma. La forza si misura in newton (N)."
          ],
          "example": [
            "Pushing a stationary trolley can make it move; stretching a spring changes its shape.",
            "Spingere un carrello fermo può metterlo in moto; allungare una molla ne cambia la forma."
          ],
          "workedExample": {
            "scenario": [
              "Pushing a stationary trolley can make it move; stretching a spring changes its shape.",
              "Spingere un carrello fermo può metterlo in moto; allungare una molla ne cambia la forma."
            ],
            "steps": [
              [
                "A force can change speed, direction or shape.",
                "Una forza può cambiare velocità, direzione o forma."
              ],
              [
                "Forces arise from interactions between objects.",
                "Le forze derivano dalle interazioni tra oggetti."
              ]
            ],
            "answer": [
              "Forces arise from interactions between objects.",
              "Le forze derivano dalle interazioni tra oggetti."
            ]
          },
          "misconceptions": [
            {
              "belief": [
                "Force is not the same thing as motion.",
                "La forza non è la stessa cosa del moto."
              ],
              "correction": [
                null,
                null
              ]
            }
          ],
          "knowledgePrompts": [
            [
              "Explain the key idea, then solve a new example.",
              "Spiega l'idea chiave, poi risolvi un nuovo esempio."
            ]
          ],
          "sceneIndexes": [
            0,
            1
          ]
        },
        {
          "id": "weight-elastic-friction",
          "title": [
            "Weight, elasticity and friction",
            "Peso, elasticità e attrito"
          ],
          "explanation": [
            "Weight is gravitational force: P = mg. Elastic force acts when a spring is stretched or compressed. Friction opposes sliding or the tendency to slide.",
            "Il peso è la forza gravitazionale: P = mg. La forza elastica agisce quando una molla è allungata o compressa. L'attrito si oppone allo scorrimento o alla sua tendenza."
          ],
          "example": [
            "For m = 2 kg and g ≈ 9.8 N/kg, P ≈ 19.6 N downward.",
            "Per m = 2 kg e g ≈ 9,8 N/kg, P ≈ 19,6 N verso il basso."
          ],
          "workedExample": {
            "scenario": [
              "For m = 2 kg and g ≈ 9.8 N/kg, P ≈ 19.6 N downward.",
              "Per m = 2 kg e g ≈ 9,8 N/kg, P ≈ 19,6 N verso il basso."
            ],
            "steps": [
              [
                "Mass is measured in kg; weight is measured in N.",
                "La massa si misura in kg; il peso in N."
              ],
              [
                "Friction acts against relative motion between surfaces.",
                "L'attrito si oppone al moto relativo tra superfici."
              ]
            ],
            "answer": [
              "Friction acts against relative motion between surfaces.",
              "L'attrito si oppone al moto relativo tra superfici."
            ]
          },
          "misconceptions": [
            {
              "belief": [
                "Mass stays the same when gravitational field strength changes; weight can change.",
                "La massa resta uguale se cambia il campo gravitazionale; il peso può cambiare."
              ],
              "correction": [
                null,
                null
              ]
            }
          ],
          "knowledgePrompts": [
            [
              "Explain the key idea, then solve a new example.",
              "Spiega l'idea chiave, poi risolvi un nuovo esempio."
            ]
          ],
          "sceneIndexes": [
            2
          ]
        }
      ],
      "guidedPractice": [
        {
          "id": "physics-3m2-guided",
          "title": [
            "Guided practice",
            "Esercitazione guidata"
          ],
          "instructions": [
            "Answer the first two questions. Use the worked examples and feedback to check each step.",
            "Rispondi alle prime due domande. Usa gli esempi svolti e il feedback per controllare ogni passaggio."
          ],
          "questions": [
            {
              "q": [
                "What can a force change?",
                "Che cosa può cambiare una forza?"
              ],
              "a": [
                [
                  "An object's motion or shape.",
                  "Il moto o la forma di un oggetto."
                ],
                [
                  "Only its colour.",
                  "Solo il colore."
                ],
                [
                  "Only its temperature.",
                  "Solo la temperatura."
                ],
                [
                  "Nothing measurable.",
                  "Niente di misurabile."
                ]
              ],
              "why": [
                "Forces can change motion or deform objects.",
                "Le forze possono cambiare il moto o deformare gli oggetti."
              ]
            },
            {
              "q": [
                "What is the SI unit of force?",
                "Qual è l'unità SI della forza?"
              ],
              "a": [
                [
                  "newton (N)",
                  "newton (N)"
                ],
                [
                  "kilogram (kg)",
                  "chilogrammo (kg)"
                ],
                [
                  "metre (m)",
                  "metro (m)"
                ],
                [
                  "second (s)",
                  "secondo (s)"
                ]
              ],
              "why": [
                "Force is measured in newtons.",
                "La forza si misura in newton."
              ]
            }
          ],
          "hints": [
            [
              "Identify the quantity, rule or definition before calculating.",
              "Individua la grandezza, la regola o la definizione prima di calcolare."
            ],
            [
              "Check the unit and the direction or scale in your answer.",
              "Controlla l'unità e la direzione o la scala nella risposta."
            ]
          ],
          "sceneIndex": 3
        }
      ],
      "independentPractice": [
        {
          "id": "physics-3m2-independent",
          "title": [
            "Independent practice",
            "Esercitazione autonoma"
          ],
          "instructions": [
            "Answer without hints, then read the explanation and correct any mistake.",
            "Rispondi senza suggerimenti, poi leggi la spiegazione e correggi gli eventuali errori."
          ],
          "questions": [
            {
              "q": [
                "Which formula gives weight near Earth's surface?",
                "Quale formula calcola il peso vicino alla superficie terrestre?"
              ],
              "a": [
                [
                  "P = mg",
                  "P = mg"
                ],
                [
                  "P = m/g",
                  "P = m/g"
                ],
                [
                  "P = m + g",
                  "P = m + g"
                ],
                [
                  "P = g/m",
                  "P = g/m"
                ]
              ],
              "why": [
                "Weight equals mass multiplied by gravitational field strength.",
                "Il peso è la massa moltiplicata per l'intensità del campo gravitazionale."
              ]
            },
            {
              "q": [
                "Friction usually opposes…",
                "L'attrito si oppone di solito a…"
              ],
              "a": [
                [
                  "sliding or the tendency to slide.",
                  "lo scorrimento o la tendenza a scivolare."
                ],
                [
                  "mass.",
                  "la massa."
                ],
                [
                  "time.",
                  "il tempo."
                ],
                [
                  "temperature.",
                  "la temperatura."
                ]
              ],
              "why": [
                "Friction acts against relative motion between surfaces.",
                "L'attrito agisce contro il moto relativo tra superfici."
              ]
            }
          ],
          "sceneIndex": 4
        }
      ],
      "knowledgeCheck": [
        {
          "q": [
            "What can a force change?",
            "Che cosa può cambiare una forza?"
          ],
          "a": [
            [
              "An object's motion or shape.",
              "Il moto o la forma di un oggetto."
            ],
            [
              "Only its colour.",
              "Solo il colore."
            ],
            [
              "Only its temperature.",
              "Solo la temperatura."
            ],
            [
              "Nothing measurable.",
              "Niente di misurabile."
            ]
          ],
          "why": [
            "Forces can change motion or deform objects.",
            "Le forze possono cambiare il moto o deformare gli oggetti."
          ]
        },
        {
          "q": [
            "What is the SI unit of force?",
            "Qual è l'unità SI della forza?"
          ],
          "a": [
            [
              "newton (N)",
              "newton (N)"
            ],
            [
              "kilogram (kg)",
              "chilogrammo (kg)"
            ],
            [
              "metre (m)",
              "metro (m)"
            ],
            [
              "second (s)",
              "secondo (s)"
            ]
          ],
          "why": [
            "Force is measured in newtons.",
            "La forza si misura in newton."
          ]
        },
        {
          "q": [
            "Which formula gives weight near Earth's surface?",
            "Quale formula calcola il peso vicino alla superficie terrestre?"
          ],
          "a": [
            [
              "P = mg",
              "P = mg"
            ],
            [
              "P = m/g",
              "P = m/g"
            ],
            [
              "P = m + g",
              "P = m + g"
            ],
            [
              "P = g/m",
              "P = g/m"
            ]
          ],
          "why": [
            "Weight equals mass multiplied by gravitational field strength.",
            "Il peso è la massa moltiplicata per l'intensità del campo gravitazionale."
          ]
        },
        {
          "q": [
            "Friction usually opposes…",
            "L'attrito si oppone di solito a…"
          ],
          "a": [
            [
              "sliding or the tendency to slide.",
              "lo scorrimento o la tendenza a scivolare."
            ],
            [
              "mass.",
              "la massa."
            ],
            [
              "time.",
              "il tempo."
            ],
            [
              "temperature.",
              "la temperatura."
            ]
          ],
          "why": [
            "Friction acts against relative motion between surfaces.",
            "L'attrito agisce contro il moto relativo tra superfici."
          ]
        }
      ],
      "summary": [
        [
          "A force is an interaction that can change motion or shape. Force is measured in newtons (N).",
          "Una forza è un'interazione che può cambiare il moto o la forma. La forza si misura in newton (N)."
        ],
        [
          "Weight is gravitational force: P = mg. Elastic force acts when a spring is stretched or compressed. Friction opposes sliding or the tendency to slide.",
          "Il peso è la forza gravitazionale: P = mg. La forza elastica agisce quando una molla è allungata o compressa. L'attrito si oppone allo scorrimento o alla sua tendenza."
        ]
      ],
      "masteryAssessment": {
        "title": [
          "Mastery trial",
          "Prova di maestria"
        ],
        "instructions": [
          "Apply the ideas independently. You need at least 75% to pass this mastery check.",
          "Applica le idee in autonomia. Serve almeno il 75% per superare questa verifica di maestria."
        ],
        "questions": [
          {
            "q": [
              "What can a force change?",
              "Che cosa può cambiare una forza?"
            ],
            "a": [
              [
                "An object's motion or shape.",
                "Il moto o la forma di un oggetto."
              ],
              [
                "Only its colour.",
                "Solo il colore."
              ],
              [
                "Only its temperature.",
                "Solo la temperatura."
              ],
              [
                "Nothing measurable.",
                "Niente di misurabile."
              ]
            ],
            "why": [
              "Forces can change motion or deform objects.",
              "Le forze possono cambiare il moto o deformare gli oggetti."
            ]
          },
          {
            "q": [
              "What is the SI unit of force?",
              "Qual è l'unità SI della forza?"
            ],
            "a": [
              [
                "newton (N)",
                "newton (N)"
              ],
              [
                "kilogram (kg)",
                "chilogrammo (kg)"
              ],
              [
                "metre (m)",
                "metro (m)"
              ],
              [
                "second (s)",
                "secondo (s)"
              ]
            ],
            "why": [
              "Force is measured in newtons.",
              "La forza si misura in newton."
            ]
          },
          {
            "q": [
              "Which formula gives weight near Earth's surface?",
              "Quale formula calcola il peso vicino alla superficie terrestre?"
            ],
            "a": [
              [
                "P = mg",
                "P = mg"
              ],
              [
                "P = m/g",
                "P = m/g"
              ],
              [
                "P = m + g",
                "P = m + g"
              ],
              [
                "P = g/m",
                "P = g/m"
              ]
            ],
            "why": [
              "Weight equals mass multiplied by gravitational field strength.",
              "Il peso è la massa moltiplicata per l'intensità del campo gravitazionale."
            ]
          },
          {
            "q": [
              "Friction usually opposes…",
              "L'attrito si oppone di solito a…"
            ],
            "a": [
              [
                "sliding or the tendency to slide.",
                "lo scorrimento o la tendenza a scivolare."
              ],
              [
                "mass.",
                "la massa."
              ],
              [
                "time.",
                "il tempo."
              ],
              [
                "temperature.",
                "la temperatura."
              ]
            ],
            "why": [
              "Friction acts against relative motion between surfaces.",
              "L'attrito agisce contro il moto relativo tra superfici."
            ]
          }
        ],
        "questionConceptIds": [
          "force-effects",
          "force-effects",
          "weight-elastic-friction",
          "weight-elastic-friction"
        ],
        "passingScore": 75
      },
      "techniqueUnlock": {
        "id": "physics-3m2-technique",
        "name": [
          "Physics Form · Applied Technique",
          "Stile della Fisica · Tecnica applicata"
        ],
        "description": [
          "Choose the correct physical model, show your reasoning and check units before striking.",
          "Scegli il modello fisico corretto, mostra il ragionamento e controlla le unità prima di colpire."
        ],
        "xpReward": 25
      }
    }},
  {
    "id": "p3m3",
    "arc": 18,
    "sec": "3.7",
    "pages": "83–88",
    "hue": 230,
    "horns": 2,
    "eyes": 4,
    "title": [
      "Splitting the Arrow",
      "Scomporre la freccia"
    ],
    "topic": [
      "Resolving a vector into components",
      "Scomporre un vettore nelle componenti"
    ],
    "demon": [
      "Component Cutter",
      "Tagliatore di Componenti"
    ],
    "tech": [
      "Force Form · Third Technique: Component Split",
      "Stile della Forza · Terza Tecnica: Scomposizione"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "phVector",
        "text": [
          "<p>Adding vectors builds them up, {name}. We can also go the other way and break one apart.</p><p>Any vector can be split into two [[components|componenti]] along the axes: a horizontal (x) part and a vertical (y) part. Together they have the exact same effect as the original.</p>",
          "<p>Sommare i vettori li costruisce, {name}. Possiamo anche fare il contrario e scomporne uno.</p><p>Ogni vettore può essere diviso in due [[components|componenti]] lungo gli assi: una parte orizzontale (x) e una verticale (y). Insieme hanno esattamente lo stesso effetto dell'originale.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "phVector",
        "text": [
          "<p>This is how we handle a force on a slope: split the weight into one part along the ramp and one pressing into it. Each axis can then be treated on its own.</p><p>A vector reaching the point (4, 3) has an x-component of 4 and a y-component of 3. Read them straight off the grid.</p>",
          "<p>È così che trattiamo una forza su un piano inclinato: scomponi il peso in una parte lungo la rampa e una che preme su di essa. Ogni asse si tratta poi per conto suo.</p><p>Un vettore che arriva al punto (4, 3) ha componente x uguale a 4 e componente y uguale a 3. Leggile direttamente dalla griglia.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "phVector",
        "text": [
          "<p>The Component Cutter hid each vector's shadows. For every arrow, click its x-component on the horizontal axis, then its y-component on the vertical axis.</p>",
          "<p>Il Tagliatore di Componenti ha nascosto le ombre di ogni vettore. Per ogni freccia, clicca la componente x sull'asse orizzontale, poi la componente y sull'asse verticale.</p>"
        ]
      },
      {
        "type": "vectors",
        "mode": "components",
        "title": [
          "Resolve into components",
          "Scomponi nelle componenti"
        ],
        "grid": 6,
        "rounds": [
          {
            "v": [
              4,
              3
            ],
            "why": [
              "The arrow to (4,3) has x = 4 and y = 3.",
              "La freccia verso (4,3) ha x = 4 e y = 3."
            ]
          },
          {
            "v": [
              2,
              5
            ],
            "why": [
              "x = 2 across, y = 5 up.",
              "x = 2 in orizzontale, y = 5 in verticale."
            ]
          },
          {
            "v": [
              5,
              2
            ],
            "why": [
              "x = 5 across, y = 2 up.",
              "x = 5 in orizzontale, y = 2 in verticale."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Snik-snik! I'm the Component Cutter! I slice your vectors into useless pieces that don't add back up!</p>",
          "<p>Snik-snik! Sono il Tagliatore di Componenti! Taglio i tuoi vettori in pezzi inutili che non si ricompongono!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "Resolving a vector means…",
          "Scomporre un vettore significa…"
        ],
        "a": [
          [
            "splitting it into components along the axes",
            "dividerlo in componenti lungo gli assi"
          ],
          [
            "making it longer",
            "allungarlo"
          ],
          [
            "deleting it",
            "cancellarlo"
          ],
          [
            "turning it into a scalar",
            "trasformarlo in uno scalare"
          ]
        ],
        "why": [
          "Resolution breaks a vector into its x and y parts.",
          "La scomposizione divide un vettore nelle sue parti x e y."
        ]
      },
      {
        "q": [
          "A vector reaching (6, 8) has components…",
          "Un vettore che arriva in (6, 8) ha componenti…"
        ],
        "a": [
          [
            "x = 6, y = 8",
            "x = 6, y = 8"
          ],
          [
            "x = 8, y = 6",
            "x = 8, y = 6"
          ],
          [
            "x = 14, y = 0",
            "x = 14, y = 0"
          ],
          [
            "x = 7, y = 7",
            "x = 7, y = 7"
          ]
        ],
        "why": [
          "Read straight off the axes: x = 6, y = 8.",
          "Si leggono dagli assi: x = 6, y = 8."
        ]
      },
      {
        "q": [
          "The two components together have…",
          "Le due componenti insieme hanno…"
        ],
        "a": [
          [
            "the same effect as the original vector",
            "lo stesso effetto del vettore originale"
          ],
          [
            "no effect",
            "nessun effetto"
          ],
          [
            "double the effect",
            "il doppio dell'effetto"
          ],
          [
            "opposite effect",
            "effetto opposto"
          ]
        ],
        "why": [
          "Components are equivalent to the whole vector.",
          "Le componenti equivalgono all'intero vettore."
        ]
      },
      {
        "q": [
          "Splitting weight on a ramp is useful because…",
          "Scomporre il peso su una rampa è utile perché…"
        ],
        "a": [
          [
            "each axis can be studied separately",
            "ogni asse si studia separatamente"
          ],
          [
            "it removes gravity",
            "elimina la gravità"
          ],
          [
            "it doubles the force",
            "raddoppia la forza"
          ],
          [
            "it has no purpose",
            "non serve a nulla"
          ]
        ],
        "why": [
          "Resolving lets you handle along-ramp and into-ramp parts on their own.",
          "La scomposizione permette di trattare da sole la parte lungo la rampa e quella che vi preme."
        ]
      },
      {
        "q": [
          "A purely horizontal vector has a y-component of…",
          "Un vettore puramente orizzontale ha componente y uguale a…"
        ],
        "a": [
          [
            "0",
            "0"
          ],
          [
            "equal to x",
            "uguale a x"
          ],
          [
            "the whole length",
            "tutta la lunghezza"
          ],
          [
            "negative",
            "negativa"
          ]
        ],
        "why": [
          "No vertical part means y = 0.",
          "Nessuna parte verticale significa y = 0."
        ]
      },
      {
        "q": [
          "Components are measured along…",
          "Le componenti si misurano lungo…"
        ],
        "a": [
          [
            "the x and y axes",
            "gli assi x e y"
          ],
          [
            "a circle",
            "un cerchio"
          ],
          [
            "the vector itself",
            "il vettore stesso"
          ],
          [
            "no direction",
            "nessuna direzione"
          ]
        ],
        "why": [
          "Components lie along the chosen (usually x and y) axes.",
          "Le componenti giacciono lungo gli assi scelti (di solito x e y)."
        ]
      }
    ]
  ,
    "learning": {
      "version": 1,
      "objectives": [
        {
          "id": "p3m3-objective-1",
          "description": [
            "Resolve a vector into perpendicular components",
            "Scomporre un vettore in componenti perpendicolari"
          ],
          "successCriteria": [
            [
              "Explain the idea and apply it correctly in a short exercise.",
              "Spiegare il concetto e applicarlo correttamente in un breve esercizio."
            ]
          ]
        },
        {
          "id": "p3m3-objective-2",
          "description": [
            "Reconstruct a vector from its components",
            "Ricostruire un vettore dalle sue componenti"
          ],
          "successCriteria": [
            [
              "Explain the idea and apply it correctly in a short exercise.",
              "Spiegare il concetto e applicarlo correttamente in un breve esercizio."
            ]
          ]
        }
      ],
      "prerequisites": [
        [
          "Review the key quantities and units from the previous mission.",
          "Ripassa le grandezze e le unità chiave della missione precedente."
        ]
      ],
      "concepts": [
        {
          "id": "components",
          "title": [
            "Resolving a vector",
            "Scomporre un vettore"
          ],
          "explanation": [
            "For angle θ measured from the horizontal, Fx = F cos θ and Fy = F sin θ. The components are perpendicular sides of a right triangle.",
            "Per un angolo θ misurato dall'orizzontale, Fx = F cos θ e Fy = F sin θ. Le componenti sono i cateti perpendicolari di un triangolo rettangolo."
          ],
          "example": [
            "For F = 10 N at 30° above horizontal, Fx ≈ 8.66 N and Fy = 5 N.",
            "Per F = 10 N a 30° sopra l'orizzontale, Fx ≈ 8,66 N e Fy = 5 N."
          ],
          "workedExample": {
            "scenario": [
              "For F = 10 N at 30° above horizontal, Fx ≈ 8.66 N and Fy = 5 N.",
              "Per F = 10 N a 30° sopra l'orizzontale, Fx ≈ 8,66 N e Fy = 5 N."
            ],
            "steps": [
              [
                "Check which axis the angle is measured from before choosing sine or cosine.",
                "Controlla da quale asse è misurato l'angolo prima di scegliere seno o coseno."
              ],
              [
                "The components are projections of the original vector.",
                "Le componenti sono proiezioni del vettore originale."
              ]
            ],
            "answer": [
              "The components are projections of the original vector.",
              "Le componenti sono proiezioni del vettore originale."
            ]
          },
          "misconceptions": [
            {
              "belief": [
                "Do not swap sine and cosine without checking the angle reference.",
                "Non scambiare seno e coseno senza controllare il riferimento dell'angolo."
              ],
              "correction": [
                null,
                null
              ]
            }
          ],
          "knowledgePrompts": [
            [
              "Explain the key idea, then solve a new example.",
              "Spiega l'idea chiave, poi risolvi un nuovo esempio."
            ]
          ],
          "sceneIndexes": [
            0,
            1
          ]
        },
        {
          "id": "reconstruct",
          "title": [
            "Combining components",
            "Combinare le componenti"
          ],
          "explanation": [
            "For perpendicular components, the magnitude is F = √(Fx² + Fy²). The angle from the horizontal can be found using tan θ = Fy/Fx.",
            "Per componenti perpendicolari, il modulo è F = √(Fx² + Fy²). L'angolo rispetto all'orizzontale si trova con tan θ = Fy/Fx."
          ],
          "example": [
            "If Fx = 3 N and Fy = 4 N, F = √(9 + 16) = 5 N.",
            "Se Fx = 3 N e Fy = 4 N, F = √(9 + 16) = 5 N."
          ],
          "workedExample": {
            "scenario": [
              "If Fx = 3 N and Fy = 4 N, F = √(9 + 16) = 5 N.",
              "Se Fx = 3 N e Fy = 4 N, F = √(9 + 16) = 5 N."
            ],
            "steps": [
              [
                "Use Pythagoras for perpendicular components.",
                "Usa Pitagora per componenti perpendicolari."
              ],
              [
                "Signs show the direction along each chosen axis.",
                "I segni indicano il verso lungo ciascun asse scelto."
              ]
            ],
            "answer": [
              "Signs show the direction along each chosen axis.",
              "I segni indicano il verso lungo ciascun asse scelto."
            ]
          },
          "misconceptions": [
            {
              "belief": [
                "The components are not generally equal to the original magnitude.",
                "Le componenti non sono generalmente uguali al modulo originale."
              ],
              "correction": [
                null,
                null
              ]
            }
          ],
          "knowledgePrompts": [
            [
              "Explain the key idea, then solve a new example.",
              "Spiega l'idea chiave, poi risolvi un nuovo esempio."
            ]
          ],
          "sceneIndexes": [
            2
          ]
        }
      ],
      "guidedPractice": [
        {
          "id": "physics-3m3-guided",
          "title": [
            "Guided practice",
            "Esercitazione guidata"
          ],
          "instructions": [
            "Answer the first two questions. Use the worked examples and feedback to check each step.",
            "Rispondi alle prime due domande. Usa gli esempi svolti e il feedback per controllare ogni passaggio."
          ],
          "questions": [
            {
              "q": [
                "A vector is resolved into components along…",
                "Un vettore viene scomposto in componenti lungo…"
              ],
              "a": [
                [
                  "perpendicular axes.",
                  "assi perpendicolari."
                ],
                [
                  "the same line only.",
                  "solo la stessa linea."
                ],
                [
                  "a circle.",
                  "un cerchio."
                ],
                [
                  "random directions.",
                  "direzioni casuali."
                ]
              ],
              "why": [
                "Horizontal and vertical axes are perpendicular.",
                "Gli assi orizzontale e verticale sono perpendicolari."
              ]
            },
            {
              "q": [
                "For an angle measured from the horizontal, the horizontal component is…",
                "Per un angolo misurato dall'orizzontale, la componente orizzontale è…"
              ],
              "a": [
                [
                  "Fx = F cos θ",
                  "Fx = F cos θ"
                ],
                [
                  "Fx = F sin θ",
                  "Fx = F sin θ"
                ],
                [
                  "Fx = F tan θ",
                  "Fx = F tan θ"
                ],
                [
                  "Fx = F/θ",
                  "Fx = F/θ"
                ]
              ],
              "why": [
                "The adjacent side uses cosine.",
                "Il cateto adiacente usa il coseno."
              ]
            }
          ],
          "hints": [
            [
              "Identify the quantity, rule or definition before calculating.",
              "Individua la grandezza, la regola o la definizione prima di calcolare."
            ],
            [
              "Check the unit and the direction or scale in your answer.",
              "Controlla l'unità e la direzione o la scala nella risposta."
            ]
          ],
          "sceneIndex": 3
        }
      ],
      "independentPractice": [
        {
          "id": "physics-3m3-independent",
          "title": [
            "Independent practice",
            "Esercitazione autonoma"
          ],
          "instructions": [
            "Answer without hints, then read the explanation and correct any mistake.",
            "Rispondi senza suggerimenti, poi leggi la spiegazione e correggi gli eventuali errori."
          ],
          "questions": [
            {
              "q": [
                "If Fx = 3 N and Fy = 4 N, what is F?",
                "Se Fx = 3 N e Fy = 4 N, quanto vale F?"
              ],
              "a": [
                [
                  "5 N",
                  "5 N"
                ],
                [
                  "7 N",
                  "7 N"
                ],
                [
                  "1 N",
                  "1 N"
                ],
                [
                  "12 N",
                  "12 N"
                ]
              ],
              "why": [
                "F = √(3² + 4²) = 5 N.",
                "F = √(3² + 4²) = 5 N."
              ]
            },
            {
              "q": [
                "What does a negative component indicate?",
                "Che cosa indica una componente negativa?"
              ],
              "a": [
                [
                  "It points in the negative direction of that axis.",
                  "Punta nel verso negativo di quell'asse."
                ],
                [
                  "The vector is impossible.",
                  "Il vettore è impossibile."
                ],
                [
                  "The magnitude is zero.",
                  "Il modulo è zero."
                ],
                [
                  "The unit is wrong.",
                  "L'unità è sbagliata."
                ]
              ],
              "why": [
                "The sign records direction relative to the chosen axes.",
                "Il segno indica la direzione rispetto agli assi scelti."
              ]
            }
          ],
          "sceneIndex": 4
        }
      ],
      "knowledgeCheck": [
        {
          "q": [
            "A vector is resolved into components along…",
            "Un vettore viene scomposto in componenti lungo…"
          ],
          "a": [
            [
              "perpendicular axes.",
              "assi perpendicolari."
            ],
            [
              "the same line only.",
              "solo la stessa linea."
            ],
            [
              "a circle.",
              "un cerchio."
            ],
            [
              "random directions.",
              "direzioni casuali."
            ]
          ],
          "why": [
            "Horizontal and vertical axes are perpendicular.",
            "Gli assi orizzontale e verticale sono perpendicolari."
          ]
        },
        {
          "q": [
            "For an angle measured from the horizontal, the horizontal component is…",
            "Per un angolo misurato dall'orizzontale, la componente orizzontale è…"
          ],
          "a": [
            [
              "Fx = F cos θ",
              "Fx = F cos θ"
            ],
            [
              "Fx = F sin θ",
              "Fx = F sin θ"
            ],
            [
              "Fx = F tan θ",
              "Fx = F tan θ"
            ],
            [
              "Fx = F/θ",
              "Fx = F/θ"
            ]
          ],
          "why": [
            "The adjacent side uses cosine.",
            "Il cateto adiacente usa il coseno."
          ]
        },
        {
          "q": [
            "If Fx = 3 N and Fy = 4 N, what is F?",
            "Se Fx = 3 N e Fy = 4 N, quanto vale F?"
          ],
          "a": [
            [
              "5 N",
              "5 N"
            ],
            [
              "7 N",
              "7 N"
            ],
            [
              "1 N",
              "1 N"
            ],
            [
              "12 N",
              "12 N"
            ]
          ],
          "why": [
            "F = √(3² + 4²) = 5 N.",
            "F = √(3² + 4²) = 5 N."
          ]
        },
        {
          "q": [
            "What does a negative component indicate?",
            "Che cosa indica una componente negativa?"
          ],
          "a": [
            [
              "It points in the negative direction of that axis.",
              "Punta nel verso negativo di quell'asse."
            ],
            [
              "The vector is impossible.",
              "Il vettore è impossibile."
            ],
            [
              "The magnitude is zero.",
              "Il modulo è zero."
            ],
            [
              "The unit is wrong.",
              "L'unità è sbagliata."
            ]
          ],
          "why": [
            "The sign records direction relative to the chosen axes.",
            "Il segno indica la direzione rispetto agli assi scelti."
          ]
        }
      ],
      "summary": [
        [
          "For angle θ measured from the horizontal, Fx = F cos θ and Fy = F sin θ. The components are perpendicular sides of a right triangle.",
          "Per un angolo θ misurato dall'orizzontale, Fx = F cos θ e Fy = F sin θ. Le componenti sono i cateti perpendicolari di un triangolo rettangolo."
        ],
        [
          "For perpendicular components, the magnitude is F = √(Fx² + Fy²). The angle from the horizontal can be found using tan θ = Fy/Fx.",
          "Per componenti perpendicolari, il modulo è F = √(Fx² + Fy²). L'angolo rispetto all'orizzontale si trova con tan θ = Fy/Fx."
        ]
      ],
      "masteryAssessment": {
        "title": [
          "Mastery trial",
          "Prova di maestria"
        ],
        "instructions": [
          "Apply the ideas independently. You need at least 75% to pass this mastery check.",
          "Applica le idee in autonomia. Serve almeno il 75% per superare questa verifica di maestria."
        ],
        "questions": [
          {
            "q": [
              "A vector is resolved into components along…",
              "Un vettore viene scomposto in componenti lungo…"
            ],
            "a": [
              [
                "perpendicular axes.",
                "assi perpendicolari."
              ],
              [
                "the same line only.",
                "solo la stessa linea."
              ],
              [
                "a circle.",
                "un cerchio."
              ],
              [
                "random directions.",
                "direzioni casuali."
              ]
            ],
            "why": [
              "Horizontal and vertical axes are perpendicular.",
              "Gli assi orizzontale e verticale sono perpendicolari."
            ]
          },
          {
            "q": [
              "For an angle measured from the horizontal, the horizontal component is…",
              "Per un angolo misurato dall'orizzontale, la componente orizzontale è…"
            ],
            "a": [
              [
                "Fx = F cos θ",
                "Fx = F cos θ"
              ],
              [
                "Fx = F sin θ",
                "Fx = F sin θ"
              ],
              [
                "Fx = F tan θ",
                "Fx = F tan θ"
              ],
              [
                "Fx = F/θ",
                "Fx = F/θ"
              ]
            ],
            "why": [
              "The adjacent side uses cosine.",
              "Il cateto adiacente usa il coseno."
            ]
          },
          {
            "q": [
              "If Fx = 3 N and Fy = 4 N, what is F?",
              "Se Fx = 3 N e Fy = 4 N, quanto vale F?"
            ],
            "a": [
              [
                "5 N",
                "5 N"
              ],
              [
                "7 N",
                "7 N"
              ],
              [
                "1 N",
                "1 N"
              ],
              [
                "12 N",
                "12 N"
              ]
            ],
            "why": [
              "F = √(3² + 4²) = 5 N.",
              "F = √(3² + 4²) = 5 N."
            ]
          },
          {
            "q": [
              "What does a negative component indicate?",
              "Che cosa indica una componente negativa?"
            ],
            "a": [
              [
                "It points in the negative direction of that axis.",
                "Punta nel verso negativo di quell'asse."
              ],
              [
                "The vector is impossible.",
                "Il vettore è impossibile."
              ],
              [
                "The magnitude is zero.",
                "Il modulo è zero."
              ],
              [
                "The unit is wrong.",
                "L'unità è sbagliata."
              ]
            ],
            "why": [
              "The sign records direction relative to the chosen axes.",
              "Il segno indica la direzione rispetto agli assi scelti."
            ]
          }
        ],
        "questionConceptIds": [
          "components",
          "components",
          "reconstruct",
          "reconstruct"
        ],
        "passingScore": 75
      },
      "techniqueUnlock": {
        "id": "physics-3m3-technique",
        "name": [
          "Physics Form · Applied Technique",
          "Stile della Fisica · Tecnica applicata"
        ],
        "description": [
          "Choose the correct physical model, show your reasoning and check units before striking.",
          "Scegli il modello fisico corretto, mostra il ragionamento e controlla le unità prima di colpire."
        ],
        "xpReward": 25
      }
    }},
  {
    "id": "p4m1",
    "arc": 19,
    "sec": "4.1–4.3",
    "pages": "90–104",
    "hue": 40,
    "horns": 3,
    "eyes": 3,
    "title": [
      "Balance the Beam",
      "Bilancia la leva"
    ],
    "topic": [
      "Torque (moment of a force) and levers",
      "Momento di una forza e leve"
    ],
    "demon": [
      "Torque Troll",
      "Troll del Momento"
    ],
    "tech": [
      "Balance Form · First Technique: Moment Match",
      "Stile dell'Equilibrio · Prima Tecnica: Pareggio dei Momenti"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "phLever",
        "text": [
          "<p>For a solid that can turn, balance isn't just about forces — it's about turning effect, {name}.</p><p>The [[torque|momento]] (moment of a force) is force × distance from the pivot: M = F·d. A small force far out can turn as strongly as a big force up close.</p>",
          "<p>Per un solido che può ruotare, l'equilibrio non riguarda solo le forze — riguarda l'effetto rotante, {name}.</p><p>Il [[torque|momento]] (momento di una forza) è forza × distanza dal perno: M = F·d. Una piccola forza lontana può far ruotare con la stessa intensità di una grande forza vicina.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "phLever",
        "text": [
          "<p>A [[lever|leva]] turns on a [[fulcrum|fulcro]]. It balances when the turning effect on one side equals the turning effect on the other:</p><p><b>F₁·d₁ = F₂·d₂</b>. This is why a long bar lets you lift a heavy rock with a gentle push.</p>",
          "<p>Una [[lever|leva]] ruota su un [[fulcrum|fulcro]]. È in equilibrio quando l'effetto rotante da un lato è uguale a quello dall'altro:</p><p><b>F₁·d₁ = F₂·d₂</b>. Ecco perché una barra lunga ti permette di sollevare un masso pesante con una spinta leggera.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "phLever",
        "text": [
          "<p>The Torque Troll keeps tipping the beam. For each round, place the right-hand weight at the distance that makes the two moments equal.</p>",
          "<p>Il Troll del Momento continua a far pendere la leva. In ogni round, metti il peso di destra alla distanza che rende uguali i due momenti.</p>"
        ]
      },
      {
        "type": "torque",
        "title": [
          "Balance the lever",
          "Bilancia la leva"
        ],
        "span": 6,
        "rounds": [
          {
            "wl": 6,
            "dl": 2,
            "wr": 4,
            "why": [
              "6×2 = 12, so 4 N must sit at distance 3.",
              "6×2 = 12, quindi i 4 N vanno a distanza 3."
            ]
          },
          {
            "wl": 2,
            "dl": 6,
            "wr": 4,
            "why": [
              "2×6 = 12, so 4 N balances at distance 3.",
              "2×6 = 12, quindi i 4 N bilanciano a distanza 3."
            ]
          },
          {
            "wl": 5,
            "dl": 4,
            "wr": 10,
            "why": [
              "5×4 = 20, so 10 N balances at distance 2.",
              "5×4 = 20, quindi i 10 N bilanciano a distanza 2."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Hurr! I'm the Torque Troll! I lean on the long end of every lever and tip your careful balance over!</p>",
          "<p>Hurr! Sono il Troll del Momento! Mi appoggio sull'estremità lunga di ogni leva e rovescio il tuo equilibrio!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "The moment of a force is calculated as…",
          "Il momento di una forza si calcola come…"
        ],
        "a": [
          [
            "force × distance from the pivot",
            "forza × distanza dal perno"
          ],
          [
            "force ÷ distance",
            "forza ÷ distanza"
          ],
          [
            "force + distance",
            "forza + distanza"
          ],
          [
            "mass × speed",
            "massa × velocità"
          ]
        ],
        "why": [
          "M = F·d, the turning effect about the pivot.",
          "M = F·d, l'effetto rotante attorno al perno."
        ]
      },
      {
        "q": [
          "A lever balances when…",
          "Una leva è in equilibrio quando…"
        ],
        "a": [
          [
            "F₁·d₁ = F₂·d₂",
            "F₁·d₁ = F₂·d₂"
          ],
          [
            "F₁ = F₂",
            "F₁ = F₂"
          ],
          [
            "d₁ = d₂",
            "d₁ = d₂"
          ],
          [
            "F₁ + F₂ = 0",
            "F₁ + F₂ = 0"
          ]
        ],
        "why": [
          "Equal and opposite moments give rotational equilibrium.",
          "Momenti uguali e opposti danno l'equilibrio rotazionale."
        ]
      },
      {
        "q": [
          "A 10 N weight is 2 m from the pivot. To balance it at 5 m you need…",
          "Un peso di 10 N è a 2 m dal perno. Per bilanciarlo a 5 m serve…"
        ],
        "a": [
          [
            "4 N",
            "4 N"
          ],
          [
            "10 N",
            "10 N"
          ],
          [
            "25 N",
            "25 N"
          ],
          [
            "2 N",
            "2 N"
          ]
        ],
        "why": [
          "10×2 = 20; 20 ÷ 5 = 4 N.",
          "10×2 = 20; 20 ÷ 5 = 4 N."
        ]
      },
      {
        "q": [
          "Why is a long lever easier to use?",
          "Perché una leva lunga è più facile da usare?"
        ],
        "a": [
          [
            "A bigger distance makes a bigger moment for the same force",
            "Una distanza maggiore dà un momento maggiore a parità di forza"
          ],
          [
            "It weighs less",
            "Pesa meno"
          ],
          [
            "It removes gravity",
            "Elimina la gravità"
          ],
          [
            "It has no pivot",
            "Non ha perno"
          ]
        ],
        "why": [
          "M = F·d: more distance means more turning effect per newton.",
          "M = F·d: più distanza significa più effetto rotante per newton."
        ]
      },
      {
        "q": [
          "The fixed point a lever turns on is the…",
          "Il punto fisso attorno a cui ruota una leva è il…"
        ],
        "a": [
          [
            "fulcrum",
            "fulcro"
          ],
          [
            "resultant",
            "risultante"
          ],
          [
            "component",
            "componente"
          ],
          [
            "vector",
            "vettore"
          ]
        ],
        "why": [
          "The fulcrum is the pivot of the lever.",
          "Il fulcro è il perno della leva."
        ]
      },
      {
        "q": [
          "Two children balance a see-saw. The heavier one must sit…",
          "Due bambini bilanciano un'altalena. Il più pesante deve sedersi…"
        ],
        "a": [
          [
            "closer to the pivot",
            "più vicino al perno"
          ],
          [
            "farther from the pivot",
            "più lontano dal perno"
          ],
          [
            "exactly at the pivot",
            "esattamente sul perno"
          ],
          [
            "it doesn't matter",
            "non importa"
          ]
        ],
        "why": [
          "More weight needs less distance to match the moment.",
          "Più peso richiede meno distanza per pareggiare il momento."
        ]
      }
    ]
  ,
    "learning": {
      "version": 1,
      "objectives": [
        {
          "id": "p4m1-objective-1",
          "description": [
            "Calculate the moment of a force",
            "Calcolare il momento di una forza"
          ],
          "successCriteria": [
            [
              "Explain the idea and apply it correctly in a short exercise.",
              "Spiegare il concetto e applicarlo correttamente in un breve esercizio."
            ]
          ]
        },
        {
          "id": "p4m1-objective-2",
          "description": [
            "Explain how levers balance",
            "Spiegare come si equilibrano le leve"
          ],
          "successCriteria": [
            [
              "Explain the idea and apply it correctly in a short exercise.",
              "Spiegare il concetto e applicarlo correttamente in un breve esercizio."
            ]
          ]
        }
      ],
      "prerequisites": [
        [
          "Review the key quantities and units from the previous mission.",
          "Ripassa le grandezze e le unità chiave della missione precedente."
        ]
      ],
      "concepts": [
        {
          "id": "moment",
          "title": [
            "Moment of a force",
            "Momento di una forza"
          ],
          "explanation": [
            "The moment measures a force's turning effect: M = F × d, where d is the perpendicular distance from the pivot to the force's line of action.",
            "Il momento misura l'effetto rotatorio di una forza: M = F × d, dove d è la distanza perpendicolare dal fulcro alla retta d'azione della forza."
          ],
          "example": [
            "A 10 N force applied 0.5 m from a pivot gives M = 5 N·m.",
            "Una forza di 10 N applicata a 0,5 m dal fulcro dà M = 5 N·m."
          ],
          "workedExample": {
            "scenario": [
              "A 10 N force applied 0.5 m from a pivot gives M = 5 N·m.",
              "Una forza di 10 N applicata a 0,5 m dal fulcro dà M = 5 N·m."
            ],
            "steps": [
              [
                "Use the perpendicular distance, not any distance to the pivot.",
                "Usa la distanza perpendicolare, non una distanza qualsiasi dal fulcro."
              ],
              [
                "A larger force or longer arm creates a larger moment.",
                "Una forza maggiore o un braccio più lungo crea un momento maggiore."
              ]
            ],
            "answer": [
              "A larger force or longer arm creates a larger moment.",
              "Una forza maggiore o un braccio più lungo crea un momento maggiore."
            ]
          },
          "misconceptions": [
            {
              "belief": [
                "The moment is not just the force; the lever arm matters too.",
                "Il momento non è solo la forza: conta anche il braccio."
              ],
              "correction": [
                null,
                null
              ]
            }
          ],
          "knowledgePrompts": [
            [
              "Explain the key idea, then solve a new example.",
              "Spiega l'idea chiave, poi risolvi un nuovo esempio."
            ]
          ],
          "sceneIndexes": [
            0,
            1
          ]
        },
        {
          "id": "lever-balance",
          "title": [
            "Levers and balance",
            "Leve ed equilibrio"
          ],
          "explanation": [
            "In rotational balance, clockwise and anticlockwise moments are equal: F₁d₁ = F₂d₂.",
            "In equilibrio rotazionale, i momenti orario e antiorario sono uguali: F₁d₁ = F₂d₂."
          ],
          "example": [
            "20 N at 0.2 m balances 10 N at 0.4 m: both moments are 4 N·m.",
            "20 N a 0,2 m bilanciano 10 N a 0,4 m: entrambi i momenti sono 4 N·m."
          ],
          "workedExample": {
            "scenario": [
              "20 N at 0.2 m balances 10 N at 0.4 m: both moments are 4 N·m.",
              "20 N a 0,2 m bilanciano 10 N a 0,4 m: entrambi i momenti sono 4 N·m."
            ],
            "steps": [
              [
                "A longer arm needs less force for the same moment.",
                "Un braccio più lungo richiede meno forza per lo stesso momento."
              ],
              [
                "A lever balances moments, not necessarily equal forces.",
                "Una leva equilibra i momenti, non necessariamente forze uguali."
              ]
            ],
            "answer": [
              "A lever balances moments, not necessarily equal forces.",
              "Una leva equilibra i momenti, non necessariamente forze uguali."
            ]
          },
          "misconceptions": [
            {
              "belief": [
                "The pivot is the point about which the lever turns.",
                "Il fulcro è il punto attorno al quale ruota la leva."
              ],
              "correction": [
                null,
                null
              ]
            }
          ],
          "knowledgePrompts": [
            [
              "Explain the key idea, then solve a new example.",
              "Spiega l'idea chiave, poi risolvi un nuovo esempio."
            ]
          ],
          "sceneIndexes": [
            2
          ]
        }
      ],
      "guidedPractice": [
        {
          "id": "physics-4m1-guided",
          "title": [
            "Guided practice",
            "Esercitazione guidata"
          ],
          "instructions": [
            "Answer the first two questions. Use the worked examples and feedback to check each step.",
            "Rispondi alle prime due domande. Usa gli esempi svolti e il feedback per controllare ogni passaggio."
          ],
          "questions": [
            {
              "q": [
                "What is the formula for moment?",
                "Qual è la formula del momento?"
              ],
              "a": [
                [
                  "M = F × d",
                  "M = F × d"
                ],
                [
                  "M = F + d",
                  "M = F + d"
                ],
                [
                  "M = F/d",
                  "M = F/d"
                ],
                [
                  "M = d/F",
                  "M = d/F"
                ]
              ],
              "why": [
                "Moment equals force times perpendicular distance.",
                "Il momento è la forza per la distanza perpendicolare."
              ]
            },
            {
              "q": [
                "A 5 N force acts 2 m from a pivot. What is its moment?",
                "Una forza di 5 N agisce a 2 m dal fulcro. Qual è il momento?"
              ],
              "a": [
                [
                  "10 N·m",
                  "10 N·m"
                ],
                [
                  "7 N·m",
                  "7 N·m"
                ],
                [
                  "2.5 N·m",
                  "2,5 N·m"
                ],
                [
                  "3 N·m",
                  "3 N·m"
                ]
              ],
              "why": [
                "M = 5 × 2 = 10 N·m.",
                "M = 5 × 2 = 10 N·m."
              ]
            }
          ],
          "hints": [
            [
              "Identify the quantity, rule or definition before calculating.",
              "Individua la grandezza, la regola o la definizione prima di calcolare."
            ],
            [
              "Check the unit and the direction or scale in your answer.",
              "Controlla l'unità e la direzione o la scala nella risposta."
            ]
          ],
          "sceneIndex": 3
        }
      ],
      "independentPractice": [
        {
          "id": "physics-4m1-independent",
          "title": [
            "Independent practice",
            "Esercitazione autonoma"
          ],
          "instructions": [
            "Answer without hints, then read the explanation and correct any mistake.",
            "Rispondi senza suggerimenti, poi leggi la spiegazione e correggi gli eventuali errori."
          ],
          "questions": [
            {
              "q": [
                "When is a lever in rotational equilibrium?",
                "Quando una leva è in equilibrio rotazionale?"
              ],
              "a": [
                [
                  "Clockwise and anticlockwise moments are equal.",
                  "I momenti orario e antiorario sono uguali."
                ],
                [
                  "Both forces are zero.",
                  "Entrambe le forze sono zero."
                ],
                [
                  "The arms are equal.",
                  "I bracci sono uguali."
                ],
                [
                  "The pivot disappears.",
                  "Il fulcro scompare."
                ]
              ],
              "why": [
                "Equal opposite moments balance turning effects.",
                "Momenti opposti uguali bilanciano gli effetti rotatori."
              ]
            },
            {
              "q": [
                "Why can a longer lever arm help lift a load?",
                "Perché un braccio più lungo può aiutare a sollevare un carico?"
              ],
              "a": [
                [
                  "It produces a greater moment for the same force.",
                  "Produce un momento maggiore con la stessa forza."
                ],
                [
                  "It removes gravity.",
                  "Elimina la gravità."
                ],
                [
                  "It changes mass into force.",
                  "Trasforma la massa in forza."
                ],
                [
                  "It makes the pivot heavier.",
                  "Rende più pesante il fulcro."
                ]
              ],
              "why": [
                "Moment increases with perpendicular distance.",
                "Il momento aumenta con la distanza perpendicolare."
              ]
            }
          ],
          "sceneIndex": 4
        }
      ],
      "knowledgeCheck": [
        {
          "q": [
            "What is the formula for moment?",
            "Qual è la formula del momento?"
          ],
          "a": [
            [
              "M = F × d",
              "M = F × d"
            ],
            [
              "M = F + d",
              "M = F + d"
            ],
            [
              "M = F/d",
              "M = F/d"
            ],
            [
              "M = d/F",
              "M = d/F"
            ]
          ],
          "why": [
            "Moment equals force times perpendicular distance.",
            "Il momento è la forza per la distanza perpendicolare."
          ]
        },
        {
          "q": [
            "A 5 N force acts 2 m from a pivot. What is its moment?",
            "Una forza di 5 N agisce a 2 m dal fulcro. Qual è il momento?"
          ],
          "a": [
            [
              "10 N·m",
              "10 N·m"
            ],
            [
              "7 N·m",
              "7 N·m"
            ],
            [
              "2.5 N·m",
              "2,5 N·m"
            ],
            [
              "3 N·m",
              "3 N·m"
            ]
          ],
          "why": [
            "M = 5 × 2 = 10 N·m.",
            "M = 5 × 2 = 10 N·m."
          ]
        },
        {
          "q": [
            "When is a lever in rotational equilibrium?",
            "Quando una leva è in equilibrio rotazionale?"
          ],
          "a": [
            [
              "Clockwise and anticlockwise moments are equal.",
              "I momenti orario e antiorario sono uguali."
            ],
            [
              "Both forces are zero.",
              "Entrambe le forze sono zero."
            ],
            [
              "The arms are equal.",
              "I bracci sono uguali."
            ],
            [
              "The pivot disappears.",
              "Il fulcro scompare."
            ]
          ],
          "why": [
            "Equal opposite moments balance turning effects.",
            "Momenti opposti uguali bilanciano gli effetti rotatori."
          ]
        },
        {
          "q": [
            "Why can a longer lever arm help lift a load?",
            "Perché un braccio più lungo può aiutare a sollevare un carico?"
          ],
          "a": [
            [
              "It produces a greater moment for the same force.",
              "Produce un momento maggiore con la stessa forza."
            ],
            [
              "It removes gravity.",
              "Elimina la gravità."
            ],
            [
              "It changes mass into force.",
              "Trasforma la massa in forza."
            ],
            [
              "It makes the pivot heavier.",
              "Rende più pesante il fulcro."
            ]
          ],
          "why": [
            "Moment increases with perpendicular distance.",
            "Il momento aumenta con la distanza perpendicolare."
          ]
        }
      ],
      "summary": [
        [
          "The moment measures a force's turning effect: M = F × d, where d is the perpendicular distance from the pivot to the force's line of action.",
          "Il momento misura l'effetto rotatorio di una forza: M = F × d, dove d è la distanza perpendicolare dal fulcro alla retta d'azione della forza."
        ],
        [
          "In rotational balance, clockwise and anticlockwise moments are equal: F₁d₁ = F₂d₂.",
          "In equilibrio rotazionale, i momenti orario e antiorario sono uguali: F₁d₁ = F₂d₂."
        ]
      ],
      "masteryAssessment": {
        "title": [
          "Mastery trial",
          "Prova di maestria"
        ],
        "instructions": [
          "Apply the ideas independently. You need at least 75% to pass this mastery check.",
          "Applica le idee in autonomia. Serve almeno il 75% per superare questa verifica di maestria."
        ],
        "questions": [
          {
            "q": [
              "What is the formula for moment?",
              "Qual è la formula del momento?"
            ],
            "a": [
              [
                "M = F × d",
                "M = F × d"
              ],
              [
                "M = F + d",
                "M = F + d"
              ],
              [
                "M = F/d",
                "M = F/d"
              ],
              [
                "M = d/F",
                "M = d/F"
              ]
            ],
            "why": [
              "Moment equals force times perpendicular distance.",
              "Il momento è la forza per la distanza perpendicolare."
            ]
          },
          {
            "q": [
              "A 5 N force acts 2 m from a pivot. What is its moment?",
              "Una forza di 5 N agisce a 2 m dal fulcro. Qual è il momento?"
            ],
            "a": [
              [
                "10 N·m",
                "10 N·m"
              ],
              [
                "7 N·m",
                "7 N·m"
              ],
              [
                "2.5 N·m",
                "2,5 N·m"
              ],
              [
                "3 N·m",
                "3 N·m"
              ]
            ],
            "why": [
              "M = 5 × 2 = 10 N·m.",
              "M = 5 × 2 = 10 N·m."
            ]
          },
          {
            "q": [
              "When is a lever in rotational equilibrium?",
              "Quando una leva è in equilibrio rotazionale?"
            ],
            "a": [
              [
                "Clockwise and anticlockwise moments are equal.",
                "I momenti orario e antiorario sono uguali."
              ],
              [
                "Both forces are zero.",
                "Entrambe le forze sono zero."
              ],
              [
                "The arms are equal.",
                "I bracci sono uguali."
              ],
              [
                "The pivot disappears.",
                "Il fulcro scompare."
              ]
            ],
            "why": [
              "Equal opposite moments balance turning effects.",
              "Momenti opposti uguali bilanciano gli effetti rotatori."
            ]
          },
          {
            "q": [
              "Why can a longer lever arm help lift a load?",
              "Perché un braccio più lungo può aiutare a sollevare un carico?"
            ],
            "a": [
              [
                "It produces a greater moment for the same force.",
                "Produce un momento maggiore con la stessa forza."
              ],
              [
                "It removes gravity.",
                "Elimina la gravità."
              ],
              [
                "It changes mass into force.",
                "Trasforma la massa in forza."
              ],
              [
                "It makes the pivot heavier.",
                "Rende più pesante il fulcro."
              ]
            ],
            "why": [
              "Moment increases with perpendicular distance.",
              "Il momento aumenta con la distanza perpendicolare."
            ]
          }
        ],
        "questionConceptIds": [
          "moment",
          "moment",
          "lever-balance",
          "lever-balance"
        ],
        "passingScore": 75
      },
      "techniqueUnlock": {
        "id": "physics-4m1-technique",
        "name": [
          "Physics Form · Applied Technique",
          "Stile della Fisica · Tecnica applicata"
        ],
        "description": [
          "Choose the correct physical model, show your reasoning and check units before striking.",
          "Scegli il modello fisico corretto, mostra il ragionamento e controlla le unità prima di colpire."
        ],
        "xpReward": 25
      }
    }},
  {
    "id": "p4m2",
    "arc": 19,
    "sec": "4.4–4.6",
    "pages": "105–116",
    "hue": 160,
    "horns": 4,
    "eyes": 2,
    "title": [
      "Standing Steady",
      "Stare in piedi"
    ],
    "topic": [
      "Centre of gravity and types of equilibrium",
      "Baricentro e tipi di equilibrio"
    ],
    "demon": [
      "Tipping Phantom",
      "Fantasma del Ribaltamento"
    ],
    "tech": [
      "Balance Form · Second Technique: Centre Hold",
      "Stile dell'Equilibrio · Seconda Tecnica: Tenuta del Baricentro"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "phLever",
        "text": [
          "<p>Every object behaves as if its whole weight acted at one point: the [[centre of gravity|baricentro]]. A body stays put when that point is supported.</p><p>A wide base and a low centre of gravity make an object hard to tip — that's why racing cars are low and broad.</p>",
          "<p>Ogni oggetto si comporta come se tutto il suo peso agisse in un punto: il [[centre of gravity|baricentro]]. Un corpo resta fermo quando quel punto è sostenuto.</p><p>Una base larga e un baricentro basso rendono un oggetto difficile da ribaltare — per questo le auto da corsa sono basse e larghe.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "phLever",
        "text": [
          "<p>There are three kinds of balance. [[Stable equilibrium|equilibrio stabile]]: nudge it and it returns (a ball in a bowl). [[Unstable equilibrium|equilibrio instabile]]: nudge it and it runs away (a ball on a dome). [[Neutral equilibrium|equilibrio indifferente]]: nudge it and it just stays (a ball on a flat table).</p>",
          "<p>Ci sono tre tipi di equilibrio. [[Stable equilibrium|equilibrio stabile]]: lo sposti e ritorna (una pallina in una scodella). [[Unstable equilibrium|equilibrio instabile]]: lo sposti e scappa via (una pallina su una cupola). [[Neutral equilibrium|equilibrio indifferente]]: lo sposti e resta lì (una pallina su un tavolo piano).</p>"
        ]
      },
      {
        "who": "s",
        "vis": "phLever",
        "text": [
          "<p>The Tipping Phantom scrambled some examples. Sort each one by the kind of equilibrium it shows.</p>",
          "<p>Il Fantasma del Ribaltamento ha mescolato alcuni esempi. Smista ciascuno secondo il tipo di equilibrio che mostra.</p>"
        ]
      },
      {
        "type": "sort",
        "title": [
          "Which equilibrium?",
          "Quale equilibrio?"
        ],
        "cats": [
          [
            "Stable",
            "Stabile"
          ],
          [
            "Unstable",
            "Instabile"
          ],
          [
            "Neutral",
            "Indifferente"
          ]
        ],
        "items": [
          {
            "n": [
              "A ball resting in a bowl",
              "Una pallina ferma in una scodella"
            ],
            "i": "eye",
            "c": 0,
            "why": [
              "Displaced, it rolls back: stable.",
              "Spostata, ritorna: stabile."
            ]
          },
          {
            "n": [
              "A pencil balanced on its tip",
              "Una matita in equilibrio sulla punta"
            ],
            "i": "file",
            "c": 1,
            "why": [
              "The slightest nudge topples it: unstable.",
              "Il minimo urto la fa cadere: instabile."
            ]
          },
          {
            "n": [
              "A ball on a flat table",
              "Una pallina su un tavolo piano"
            ],
            "i": "layers",
            "c": 2,
            "why": [
              "Moved, it just stays: neutral.",
              "Spostata, resta ferma: indifferente."
            ]
          },
          {
            "n": [
              "A cone resting on its base",
              "Un cono appoggiato sulla base"
            ],
            "i": "book",
            "c": 0,
            "why": [
              "Wide base, low centre: returns upright, stable.",
              "Base larga, baricentro basso: ritorna dritto, stabile."
            ]
          },
          {
            "n": [
              "A cone balanced on its point",
              "Un cono in equilibrio sulla punta"
            ],
            "i": "puzzle",
            "c": 1,
            "why": [
              "Tiny tilt and it falls: unstable.",
              "Piccola inclinazione e cade: instabile."
            ]
          },
          {
            "n": [
              "A wheel rolling on level ground",
              "Una ruota che rotola su terreno piano"
            ],
            "i": "robot",
            "c": 2,
            "why": [
              "New position is just as balanced: neutral.",
              "La nuova posizione è ugualmente equilibrata: indifferente."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Woo! I'm the Tipping Phantom! I raise your centre of gravity and narrow your base until the smallest breeze topples you!</p>",
          "<p>Woo! Sono il Fantasma del Ribaltamento! Alzo il tuo baricentro e restringo la tua base finché il più piccolo soffio ti rovescia!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "The centre of gravity is the point where…",
          "Il baricentro è il punto in cui…"
        ],
        "a": [
          [
            "the whole weight can be taken to act",
            "si può pensare agisca tutto il peso"
          ],
          [
            "there is no mass",
            "non c'è massa"
          ],
          [
            "friction is largest",
            "l'attrito è massimo"
          ],
          [
            "the object is coldest",
            "l'oggetto è più freddo"
          ]
        ],
        "why": [
          "Weight behaves as if concentrated at the centre of gravity.",
          "Il peso si comporta come se fosse concentrato nel baricentro."
        ]
      },
      {
        "q": [
          "An object is hardest to tip when its centre of gravity is…",
          "Un oggetto è più difficile da ribaltare quando il baricentro è…"
        ],
        "a": [
          [
            "low, over a wide base",
            "basso, su una base larga"
          ],
          [
            "high, over a narrow base",
            "alto, su una base stretta"
          ],
          [
            "outside the object",
            "fuori dall'oggetto"
          ],
          [
            "moving",
            "in movimento"
          ]
        ],
        "why": [
          "Low centre + wide base = very stable.",
          "Baricentro basso + base larga = molto stabile."
        ]
      },
      {
        "q": [
          "A ball in a bowl shows which equilibrium?",
          "Una pallina in una scodella mostra quale equilibrio?"
        ],
        "a": [
          [
            "stable",
            "stabile"
          ],
          [
            "unstable",
            "instabile"
          ],
          [
            "neutral",
            "indifferente"
          ],
          [
            "none",
            "nessuno"
          ]
        ],
        "why": [
          "Displaced, it returns to the bottom: stable.",
          "Spostata, ritorna sul fondo: stabile."
        ]
      },
      {
        "q": [
          "A ball on a flat table shows…",
          "Una pallina su un tavolo piano mostra…"
        ],
        "a": [
          [
            "neutral equilibrium",
            "equilibrio indifferente"
          ],
          [
            "stable equilibrium",
            "equilibrio stabile"
          ],
          [
            "unstable equilibrium",
            "equilibrio instabile"
          ],
          [
            "no equilibrium",
            "nessun equilibrio"
          ]
        ],
        "why": [
          "Moved, it stays where it is: neutral.",
          "Spostata, resta dov'è: indifferente."
        ]
      },
      {
        "q": [
          "Unstable equilibrium means that after a small push the object…",
          "Equilibrio instabile significa che dopo una piccola spinta l'oggetto…"
        ],
        "a": [
          [
            "moves further away from its position",
            "si allontana dalla sua posizione"
          ],
          [
            "returns to its position",
            "torna alla sua posizione"
          ],
          [
            "stays in the new position",
            "resta nella nuova posizione"
          ],
          [
            "disappears",
            "sparisce"
          ]
        ],
        "why": [
          "In unstable equilibrium a nudge grows; it topples.",
          "Nell'equilibrio instabile l'urto si amplifica; l'oggetto cade."
        ]
      },
      {
        "q": [
          "Why do racing cars have a low, wide body?",
          "Perché le auto da corsa hanno una carrozzeria bassa e larga?"
        ],
        "a": [
          [
            "For a low centre of gravity and a wide base — more stability",
            "Per baricentro basso e base larga — più stabilità"
          ],
          [
            "To weigh more",
            "Per pesare di più"
          ],
          [
            "To go slower",
            "Per andare più piano"
          ],
          [
            "To remove friction",
            "Per togliere l'attrito"
          ]
        ],
        "why": [
          "Low centre of gravity + wide base resists tipping in corners.",
          "Baricentro basso + base larga resistono al ribaltamento in curva."
        ]
      }
    ]
  ,
    "learning": {
      "version": 1,
      "objectives": [
        {
          "id": "p4m2-objective-1",
          "description": [
            "Explain the centre of gravity and stability",
            "Spiegare il baricentro e la stabilità"
          ],
          "successCriteria": [
            [
              "Explain the idea and apply it correctly in a short exercise.",
              "Spiegare il concetto e applicarlo correttamente in un breve esercizio."
            ]
          ]
        },
        {
          "id": "p4m2-objective-2",
          "description": [
            "Distinguish three types of equilibrium",
            "Distinguere tre tipi di equilibrio"
          ],
          "successCriteria": [
            [
              "Explain the idea and apply it correctly in a short exercise.",
              "Spiegare il concetto e applicarlo correttamente in un breve esercizio."
            ]
          ]
        }
      ],
      "prerequisites": [
        [
          "Review the key quantities and units from the previous mission.",
          "Ripassa le grandezze e le unità chiave della missione precedente."
        ]
      ],
      "concepts": [
        {
          "id": "centre-gravity",
          "title": [
            "Centre of gravity",
            "Baricentro"
          ],
          "explanation": [
            "The centre of gravity is the point where an object's weight can be considered to act. A low centre of gravity and wide support base usually increase stability.",
            "Il baricentro è il punto in cui si può considerare applicato il peso di un oggetto. Un baricentro basso e una base d'appoggio ampia aumentano di solito la stabilità."
          ],
          "example": [
            "A wide, low stool is harder to tip than a tall, narrow one.",
            "Uno sgabello basso e largo è più difficile da ribaltare di uno alto e stretto."
          ],
          "workedExample": {
            "scenario": [
              "A wide, low stool is harder to tip than a tall, narrow one.",
              "Uno sgabello basso e largo è più difficile da ribaltare di uno alto e stretto."
            ],
            "steps": [
              [
                "An object tends to topple when the vertical line through its centre of gravity falls outside its support base.",
                "Un oggetto tende a ribaltarsi quando la verticale del baricentro cade fuori dalla base d'appoggio."
              ],
              [
                "The centre of gravity is not always at the geometric centre.",
                "Il baricentro non si trova sempre nel centro geometrico."
              ]
            ],
            "answer": [
              "The centre of gravity is not always at the geometric centre.",
              "Il baricentro non si trova sempre nel centro geometrico."
            ]
          },
          "misconceptions": [
            {
              "belief": [
                "Stability depends on the centre of gravity relative to the support base.",
                "La stabilità dipende dal baricentro rispetto alla base d'appoggio."
              ],
              "correction": [
                null,
                null
              ]
            }
          ],
          "knowledgePrompts": [
            [
              "Explain the key idea, then solve a new example.",
              "Spiega l'idea chiave, poi risolvi un nuovo esempio."
            ]
          ],
          "sceneIndexes": [
            0,
            1
          ]
        },
        {
          "id": "equilibrium-types",
          "title": [
            "Types of equilibrium",
            "Tipi di equilibrio"
          ],
          "explanation": [
            "Stable equilibrium returns after a small disturbance; unstable equilibrium moves farther away; neutral equilibrium stays in its new position.",
            "L'equilibrio stabile ritorna dopo una piccola perturbazione; quello instabile si allontana ulteriormente; quello indifferente resta nella nuova posizione."
          ],
          "example": [
            "A ball in a bowl is stable; on a hilltop it is unstable; on a flat surface it is neutral.",
            "Una palla in una conca è stabile; in cima a una collina è instabile; su una superficie piana è indifferente."
          ],
          "workedExample": {
            "scenario": [
              "A ball in a bowl is stable; on a hilltop it is unstable; on a flat surface it is neutral.",
              "Una palla in una conca è stabile; in cima a una collina è instabile; su una superficie piana è indifferente."
            ],
            "steps": [
              [
                "Think about what happens after a small push.",
                "Pensa a ciò che accade dopo una piccola spinta."
              ],
              [
                "The response to a small displacement defines the type of equilibrium.",
                "La risposta a un piccolo spostamento definisce il tipo di equilibrio."
              ]
            ],
            "answer": [
              "The response to a small displacement defines the type of equilibrium.",
              "La risposta a un piccolo spostamento definisce il tipo di equilibrio."
            ]
          },
          "misconceptions": [
            {
              "belief": [
                "Stable equilibrium describes the response to a small disturbance, not every possible force.",
                "L'equilibrio stabile descrive la risposta a una piccola perturbazione, non a qualsiasi forza."
              ],
              "correction": [
                null,
                null
              ]
            }
          ],
          "knowledgePrompts": [
            [
              "Explain the key idea, then solve a new example.",
              "Spiega l'idea chiave, poi risolvi un nuovo esempio."
            ]
          ],
          "sceneIndexes": [
            2
          ]
        }
      ],
      "guidedPractice": [
        {
          "id": "physics-4m2-guided",
          "title": [
            "Guided practice",
            "Esercitazione guidata"
          ],
          "instructions": [
            "Answer the first two questions. Use the worked examples and feedback to check each step.",
            "Rispondi alle prime due domande. Usa gli esempi svolti e il feedback per controllare ogni passaggio."
          ],
          "questions": [
            {
              "q": [
                "Where can an object's weight be considered to act?",
                "In quale punto si può considerare applicato il peso di un oggetto?"
              ],
              "a": [
                [
                  "At its centre of gravity.",
                  "Nel suo baricentro."
                ],
                [
                  "At every point equally.",
                  "In ogni punto allo stesso modo."
                ],
                [
                  "Only at its surface.",
                  "Solo sulla superficie."
                ],
                [
                  "Only at its support base.",
                  "Solo alla base d'appoggio."
                ]
              ],
              "why": [
                "The centre of gravity is the effective point of action of weight.",
                "Il baricentro è il punto efficace di applicazione del peso."
              ]
            },
            {
              "q": [
                "Which change usually increases stability?",
                "Quale cambiamento aumenta di solito la stabilità?"
              ],
              "a": [
                [
                  "Lower the centre of gravity and widen the base.",
                  "Abbassare il baricentro e allargare la base."
                ],
                [
                  "Raise the centre of gravity.",
                  "Alzare il baricentro."
                ],
                [
                  "Narrow the base.",
                  "Restringere la base."
                ],
                [
                  "Remove the support.",
                  "Togliere il supporto."
                ]
              ],
              "why": [
                "A low centre of gravity and wide base make tipping harder.",
                "Un baricentro basso e una base larga rendono più difficile il ribaltamento."
              ]
            }
          ],
          "hints": [
            [
              "Identify the quantity, rule or definition before calculating.",
              "Individua la grandezza, la regola o la definizione prima di calcolare."
            ],
            [
              "Check the unit and the direction or scale in your answer.",
              "Controlla l'unità e la direzione o la scala nella risposta."
            ]
          ],
          "sceneIndex": 3
        }
      ],
      "independentPractice": [
        {
          "id": "physics-4m2-independent",
          "title": [
            "Independent practice",
            "Esercitazione autonoma"
          ],
          "instructions": [
            "Answer without hints, then read the explanation and correct any mistake.",
            "Rispondi senza suggerimenti, poi leggi la spiegazione e correggi gli eventuali errori."
          ],
          "questions": [
            {
              "q": [
                "A ball in a bowl is an example of…",
                "Una palla in una conca è un esempio di…"
              ],
              "a": [
                [
                  "stable equilibrium.",
                  "equilibrio stabile."
                ],
                [
                  "unstable equilibrium.",
                  "equilibrio instabile."
                ],
                [
                  "neutral equilibrium.",
                  "equilibrio indifferente."
                ],
                [
                  "no gravity.",
                  "assenza di gravità."
                ]
              ],
              "why": [
                "After a small displacement, the ball tends to return.",
                "Dopo un piccolo spostamento, la palla tende a tornare."
              ]
            },
            {
              "q": [
                "A ball on a flat horizontal surface is approximately…",
                "Una palla su una superficie piana orizzontale è approssimativamente…"
              ],
              "a": [
                [
                  "in neutral equilibrium.",
                  "in equilibrio indifferente."
                ],
                [
                  "in unstable equilibrium.",
                  "in equilibrio instabile."
                ],
                [
                  "in stable equilibrium.",
                  "in equilibrio stabile."
                ],
                [
                  "without weight.",
                  "senza peso."
                ]
              ],
              "why": [
                "After a small move, it can remain in its new position.",
                "Dopo un piccolo spostamento, può restare nella nuova posizione."
              ]
            }
          ],
          "sceneIndex": 4
        }
      ],
      "knowledgeCheck": [
        {
          "q": [
            "Where can an object's weight be considered to act?",
            "In quale punto si può considerare applicato il peso di un oggetto?"
          ],
          "a": [
            [
              "At its centre of gravity.",
              "Nel suo baricentro."
            ],
            [
              "At every point equally.",
              "In ogni punto allo stesso modo."
            ],
            [
              "Only at its surface.",
              "Solo sulla superficie."
            ],
            [
              "Only at its support base.",
              "Solo alla base d'appoggio."
            ]
          ],
          "why": [
            "The centre of gravity is the effective point of action of weight.",
            "Il baricentro è il punto efficace di applicazione del peso."
          ]
        },
        {
          "q": [
            "Which change usually increases stability?",
            "Quale cambiamento aumenta di solito la stabilità?"
          ],
          "a": [
            [
              "Lower the centre of gravity and widen the base.",
              "Abbassare il baricentro e allargare la base."
            ],
            [
              "Raise the centre of gravity.",
              "Alzare il baricentro."
            ],
            [
              "Narrow the base.",
              "Restringere la base."
            ],
            [
              "Remove the support.",
              "Togliere il supporto."
            ]
          ],
          "why": [
            "A low centre of gravity and wide base make tipping harder.",
            "Un baricentro basso e una base larga rendono più difficile il ribaltamento."
          ]
        },
        {
          "q": [
            "A ball in a bowl is an example of…",
            "Una palla in una conca è un esempio di…"
          ],
          "a": [
            [
              "stable equilibrium.",
              "equilibrio stabile."
            ],
            [
              "unstable equilibrium.",
              "equilibrio instabile."
            ],
            [
              "neutral equilibrium.",
              "equilibrio indifferente."
            ],
            [
              "no gravity.",
              "assenza di gravità."
            ]
          ],
          "why": [
            "After a small displacement, the ball tends to return.",
            "Dopo un piccolo spostamento, la palla tende a tornare."
          ]
        },
        {
          "q": [
            "A ball on a flat horizontal surface is approximately…",
            "Una palla su una superficie piana orizzontale è approssimativamente…"
          ],
          "a": [
            [
              "in neutral equilibrium.",
              "in equilibrio indifferente."
            ],
            [
              "in unstable equilibrium.",
              "in equilibrio instabile."
            ],
            [
              "in stable equilibrium.",
              "in equilibrio stabile."
            ],
            [
              "without weight.",
              "senza peso."
            ]
          ],
          "why": [
            "After a small move, it can remain in its new position.",
            "Dopo un piccolo spostamento, può restare nella nuova posizione."
          ]
        }
      ],
      "summary": [
        [
          "The centre of gravity is the point where an object's weight can be considered to act. A low centre of gravity and wide support base usually increase stability.",
          "Il baricentro è il punto in cui si può considerare applicato il peso di un oggetto. Un baricentro basso e una base d'appoggio ampia aumentano di solito la stabilità."
        ],
        [
          "Stable equilibrium returns after a small disturbance; unstable equilibrium moves farther away; neutral equilibrium stays in its new position.",
          "L'equilibrio stabile ritorna dopo una piccola perturbazione; quello instabile si allontana ulteriormente; quello indifferente resta nella nuova posizione."
        ]
      ],
      "masteryAssessment": {
        "title": [
          "Mastery trial",
          "Prova di maestria"
        ],
        "instructions": [
          "Apply the ideas independently. You need at least 75% to pass this mastery check.",
          "Applica le idee in autonomia. Serve almeno il 75% per superare questa verifica di maestria."
        ],
        "questions": [
          {
            "q": [
              "Where can an object's weight be considered to act?",
              "In quale punto si può considerare applicato il peso di un oggetto?"
            ],
            "a": [
              [
                "At its centre of gravity.",
                "Nel suo baricentro."
              ],
              [
                "At every point equally.",
                "In ogni punto allo stesso modo."
              ],
              [
                "Only at its surface.",
                "Solo sulla superficie."
              ],
              [
                "Only at its support base.",
                "Solo alla base d'appoggio."
              ]
            ],
            "why": [
              "The centre of gravity is the effective point of action of weight.",
              "Il baricentro è il punto efficace di applicazione del peso."
            ]
          },
          {
            "q": [
              "Which change usually increases stability?",
              "Quale cambiamento aumenta di solito la stabilità?"
            ],
            "a": [
              [
                "Lower the centre of gravity and widen the base.",
                "Abbassare il baricentro e allargare la base."
              ],
              [
                "Raise the centre of gravity.",
                "Alzare il baricentro."
              ],
              [
                "Narrow the base.",
                "Restringere la base."
              ],
              [
                "Remove the support.",
                "Togliere il supporto."
              ]
            ],
            "why": [
              "A low centre of gravity and wide base make tipping harder.",
              "Un baricentro basso e una base larga rendono più difficile il ribaltamento."
            ]
          },
          {
            "q": [
              "A ball in a bowl is an example of…",
              "Una palla in una conca è un esempio di…"
            ],
            "a": [
              [
                "stable equilibrium.",
                "equilibrio stabile."
              ],
              [
                "unstable equilibrium.",
                "equilibrio instabile."
              ],
              [
                "neutral equilibrium.",
                "equilibrio indifferente."
              ],
              [
                "no gravity.",
                "assenza di gravità."
              ]
            ],
            "why": [
              "After a small displacement, the ball tends to return.",
              "Dopo un piccolo spostamento, la palla tende a tornare."
            ]
          },
          {
            "q": [
              "A ball on a flat horizontal surface is approximately…",
              "Una palla su una superficie piana orizzontale è approssimativamente…"
            ],
            "a": [
              [
                "in neutral equilibrium.",
                "in equilibrio indifferente."
              ],
              [
                "in unstable equilibrium.",
                "in equilibrio instabile."
              ],
              [
                "in stable equilibrium.",
                "in equilibrio stabile."
              ],
              [
                "without weight.",
                "senza peso."
              ]
            ],
            "why": [
              "After a small move, it can remain in its new position.",
              "Dopo un piccolo spostamento, può restare nella nuova posizione."
            ]
          }
        ],
        "questionConceptIds": [
          "centre-gravity",
          "centre-gravity",
          "equilibrium-types",
          "equilibrium-types"
        ],
        "passingScore": 75
      },
      "techniqueUnlock": {
        "id": "physics-4m2-technique",
        "name": [
          "Physics Form · Applied Technique",
          "Stile della Fisica · Tecnica applicata"
        ],
        "description": [
          "Choose the correct physical model, show your reasoning and check units before striking.",
          "Scegli il modello fisico corretto, mostra il ragionamento e controlla le unità prima di colpire."
        ],
        "xpReward": 25
      }
    }},
  {
    "id": "p5m1",
    "arc": 20,
    "sec": "5.1–5.3",
    "pages": "118–132",
    "hue": 190,
    "horns": 3,
    "eyes": 3,
    "title": [
      "Pressure in the Deep",
      "La pressione in profondità"
    ],
    "topic": [
      "Pressure, Pascal and Stevin",
      "Pressione, Pascal e Stevino"
    ],
    "demon": [
      "Pressure Kraken",
      "Kraken della Pressione"
    ],
    "tech": [
      "Fluid Form · First Technique: Depth Read",
      "Stile dei Fluidi · Prima Tecnica: Lettura della Profondità"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "phTank",
        "text": [
          "<p>A fluid can't be grabbed like a solid, {name}, so we describe it with [[pressure|pressione]]: force spread over an area, p = F/A, measured in [[pascal|pascal]] (Pa).</p><p>The same force on a small area gives high pressure — that's why a sharp knife cuts and a wide snowshoe doesn't sink.</p>",
          "<p>Un fluido non si afferra come un solido, {name}, quindi lo descriviamo con la [[pressure|pressione]]: forza distribuita su un'area, p = F/A, misurata in [[pascal|pascal]] (Pa).</p><p>La stessa forza su un'area piccola dà pressione alta — per questo un coltello affilato taglia e una racchetta da neve larga non affonda.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "phTank",
        "text": [
          "<p>In a liquid, [[Pascal's principle|principio di Pascal]] says pressure applied to an enclosed fluid is passed on everywhere equally — the basis of hydraulic brakes.</p><p>And [[Stevin's law|legge di Stevino]]: pressure grows with depth, p = ρ·g·h. Dive deeper and the water pushes harder on your ears.</p>",
          "<p>In un liquido, il [[Pascal's principle|principio di Pascal]] dice che la pressione applicata a un fluido chiuso si trasmette ovunque allo stesso modo — la base dei freni idraulici.</p><p>E la [[Stevin's law|legge di Stevino]]: la pressione cresce con la profondità, p = ρ·g·h. Scendi più in profondità e l'acqua spinge più forte sulle tue orecchie.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "phTank",
        "text": [
          "<p>The Pressure Kraken marked points at different depths. For each round, click the point where the pressure is greatest.</p>",
          "<p>Il Kraken della Pressione ha segnato punti a diverse profondità. In ogni round, clicca il punto dove la pressione è maggiore.</p>"
        ]
      },
      {
        "type": "fluids",
        "mode": "pressure",
        "title": [
          "Where is the pressure greatest?",
          "Dove è maggiore la pressione?"
        ],
        "rounds": [
          {
            "points": [
              {
                "x": 70,
                "depth": 1
              },
              {
                "x": 140,
                "depth": 5
              },
              {
                "x": 210,
                "depth": 3
              }
            ],
            "why": [
              "Deepest point, greatest pressure (Stevin).",
              "Punto più profondo, pressione maggiore (Stevino)."
            ]
          },
          {
            "points": [
              {
                "x": 70,
                "depth": 4
              },
              {
                "x": 140,
                "depth": 2
              },
              {
                "x": 210,
                "depth": 6
              }
            ],
            "why": [
              "Depth 6 beats depth 4 and 2.",
              "Profondità 6 batte 4 e 2."
            ]
          },
          {
            "points": [
              {
                "x": 70,
                "depth": 7
              },
              {
                "x": 140,
                "depth": 3
              },
              {
                "x": 210,
                "depth": 5
              }
            ],
            "why": [
              "Depth 7 is deepest, so highest pressure.",
              "Profondità 7 è la più profonda, quindi pressione massima."
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Glub! I'm the Pressure Kraken! I crush you harder the deeper you go and squeeze the air from your lungs!</p>",
          "<p>Glub! Sono il Kraken della Pressione! Ti schiaccio più forte man mano che scendi e ti strizzo l'aria dai polmoni!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "Pressure is defined as…",
          "La pressione è definita come…"
        ],
        "a": [
          [
            "force ÷ area",
            "forza ÷ area"
          ],
          [
            "force × area",
            "forza × area"
          ],
          [
            "mass ÷ volume",
            "massa ÷ volume"
          ],
          [
            "force ÷ time",
            "forza ÷ tempo"
          ]
        ],
        "why": [
          "p = F / A.",
          "p = F / A."
        ]
      },
      {
        "q": [
          "The SI unit of pressure is the…",
          "L'unità SI della pressione è il…"
        ],
        "a": [
          [
            "pascal",
            "pascal"
          ],
          [
            "newton",
            "newton"
          ],
          [
            "kilogram",
            "chilogrammo"
          ],
          [
            "joule",
            "joule"
          ]
        ],
        "why": [
          "Pressure is measured in pascals (Pa = N/m²).",
          "La pressione si misura in pascal (Pa = N/m²)."
        ]
      },
      {
        "q": [
          "Stevin's law says pressure in a liquid grows with…",
          "La legge di Stevino dice che la pressione in un liquido cresce con…"
        ],
        "a": [
          [
            "depth",
            "la profondità"
          ],
          [
            "width",
            "la larghezza"
          ],
          [
            "colour",
            "il colore"
          ],
          [
            "temperature only",
            "solo la temperatura"
          ]
        ],
        "why": [
          "p = ρ·g·h — deeper means more pressure.",
          "p = ρ·g·h — più profondo significa più pressione."
        ]
      },
      {
        "q": [
          "The same force on a smaller area produces…",
          "La stessa forza su un'area minore produce…"
        ],
        "a": [
          [
            "greater pressure",
            "pressione maggiore"
          ],
          [
            "less pressure",
            "pressione minore"
          ],
          [
            "the same pressure",
            "la stessa pressione"
          ],
          [
            "no pressure",
            "nessuna pressione"
          ]
        ],
        "why": [
          "p = F/A: smaller area, larger pressure.",
          "p = F/A: area minore, pressione maggiore."
        ]
      },
      {
        "q": [
          "Pascal's principle is the basis of…",
          "Il principio di Pascal è alla base di…"
        ],
        "a": [
          [
            "hydraulic systems",
            "sistemi idraulici"
          ],
          [
            "levers",
            "leve"
          ],
          [
            "thermometers",
            "termometri"
          ],
          [
            "pendulums",
            "pendoli"
          ]
        ],
        "why": [
          "Pressure transmitted equally drives hydraulic brakes and lifts.",
          "La pressione trasmessa in modo uguale muove freni e sollevatori idraulici."
        ]
      },
      {
        "q": [
          "Two points in the same tank: A is deeper than B. Then…",
          "Due punti nella stessa vasca: A è più profondo di B. Allora…"
        ],
        "a": [
          [
            "A has higher pressure",
            "A ha pressione maggiore"
          ],
          [
            "B has higher pressure",
            "B ha pressione maggiore"
          ],
          [
            "equal pressure",
            "pressione uguale"
          ],
          [
            "neither has pressure",
            "nessuno ha pressione"
          ]
        ],
        "why": [
          "Greater depth means greater pressure.",
          "Maggiore profondità significa maggiore pressione."
        ]
      }
    ]
  ,
    "learning": {
      "version": 1,
      "objectives": [
        {
          "id": "p5m1-objective-1",
          "description": [
            "Calculate pressure from force and area",
            "Calcolare la pressione da forza e area"
          ],
          "successCriteria": [
            [
              "Explain the idea and apply it correctly in a short exercise.",
              "Spiegare il concetto e applicarlo correttamente in un breve esercizio."
            ]
          ]
        },
        {
          "id": "p5m1-objective-2",
          "description": [
            "Explain pressure in fluids and at depth",
            "Spiegare la pressione nei fluidi e in profondità"
          ],
          "successCriteria": [
            [
              "Explain the idea and apply it correctly in a short exercise.",
              "Spiegare il concetto e applicarlo correttamente in un breve esercizio."
            ]
          ]
        }
      ],
      "prerequisites": [
        [
          "Review the key quantities and units from the previous mission.",
          "Ripassa le grandezze e le unità chiave della missione precedente."
        ]
      ],
      "concepts": [
        {
          "id": "pressure",
          "title": [
            "Pressure",
            "Pressione"
          ],
          "explanation": [
            "Pressure is perpendicular force divided by area: p = F/A. Its SI unit is the pascal (Pa), equal to N/m².",
            "La pressione è la forza perpendicolare divisa per l'area: p = F/A. L'unità SI è il pascal (Pa), pari a N/m²."
          ],
          "example": [
            "A 100 N force spread over 2 m² gives p = 50 Pa.",
            "Una forza di 100 N distribuita su 2 m² dà p = 50 Pa."
          ],
          "workedExample": {
            "scenario": [
              "A 100 N force spread over 2 m² gives p = 50 Pa.",
              "Una forza di 100 N distribuita su 2 m² dà p = 50 Pa."
            ],
            "steps": [
              [
                "The same force on a smaller area creates greater pressure.",
                "La stessa forza su un'area minore produce una pressione maggiore."
              ],
              [
                "Pressure increases with force and decreases as area increases.",
                "La pressione aumenta con la forza e diminuisce se aumenta l'area."
              ]
            ],
            "answer": [
              "Pressure increases with force and decreases as area increases.",
              "La pressione aumenta con la forza e diminuisce se aumenta l'area."
            ]
          },
          "misconceptions": [
            {
              "belief": [
                "Pressure is not the same as force; area matters.",
                "La pressione non è la stessa cosa della forza: conta l'area."
              ],
              "correction": [
                null,
                null
              ]
            }
          ],
          "knowledgePrompts": [
            [
              "Explain the key idea, then solve a new example.",
              "Spiega l'idea chiave, poi risolvi un nuovo esempio."
            ]
          ],
          "sceneIndexes": [
            0,
            1
          ]
        },
        {
          "id": "fluid-pressure",
          "title": [
            "Pressure in fluids: Pascal and Stevin",
            "Pressione nei fluidi: Pascal e Stevino"
          ],
          "explanation": [
            "Pascal's principle describes pressure transmission in a confined fluid. Stevin's law gives the depth contribution: p = ρgh.",
            "Il principio di Pascal descrive la trasmissione della pressione in un fluido confinato. La legge di Stevino dà il contributo della profondità: p = ρgh."
          ],
          "example": [
            "In the same liquid, pressure increases with depth because p = ρgh grows with h.",
            "Nello stesso liquido, la pressione aumenta con la profondità perché p = ρgh cresce con h."
          ],
          "workedExample": {
            "scenario": [
              "In the same liquid, pressure increases with depth because p = ρgh grows with h.",
              "Nello stesso liquido, la pressione aumenta con la profondità perché p = ρgh cresce con h."
            ],
            "steps": [
              [
                "At the same depth in the same static fluid, pressure is the same in the ideal case.",
                "Alla stessa profondità nello stesso fluido statico, nel caso ideale, la pressione è uguale."
              ],
              [
                "Stevin's depth pressure does not depend on the container's shape.",
                "La pressione idrostatica di Stevino non dipende dalla forma del recipiente."
              ]
            ],
            "answer": [
              "Stevin's depth pressure does not depend on the container's shape.",
              "La pressione idrostatica di Stevino non dipende dalla forma del recipiente."
            ]
          },
          "misconceptions": [
            {
              "belief": [
                null,
                null
              ],
              "correction": [
                null,
                null
              ]
            }
          ],
          "knowledgePrompts": [
            [
              "Explain the key idea, then solve a new example.",
              "Spiega l'idea chiave, poi risolvi un nuovo esempio."
            ]
          ],
          "sceneIndexes": [
            2
          ]
        }
      ],
      "guidedPractice": [
        {
          "id": "physics-5m1-guided",
          "title": [
            "Guided practice",
            "Esercitazione guidata"
          ],
          "instructions": [
            "Answer the first two questions. Use the worked examples and feedback to check each step.",
            "Rispondi alle prime due domande. Usa gli esempi svolti e il feedback per controllare ogni passaggio."
          ],
          "questions": [
            {
              "q": [
                "What is the formula for pressure?",
                "Qual è la formula della pressione?"
              ],
              "a": [
                [
                  "p = F/A",
                  "p = F/A"
                ],
                [
                  "p = F × A",
                  "p = F × A"
                ],
                [
                  "p = A/F",
                  "p = A/F"
                ],
                [
                  "p = F + A",
                  "p = F + A"
                ]
              ],
              "why": [
                "Pressure is perpendicular force divided by area.",
                "La pressione è la forza perpendicolare divisa per l'area."
              ]
            },
            {
              "q": [
                "What is the SI unit of pressure?",
                "Qual è l'unità SI della pressione?"
              ],
              "a": [
                [
                  "pascal (Pa)",
                  "pascal (Pa)"
                ],
                [
                  "newton (N)",
                  "newton (N)"
                ],
                [
                  "joule (J)",
                  "joule (J)"
                ],
                [
                  "kilogram (kg)",
                  "chilogrammo (kg)"
                ]
              ],
              "why": [
                "One pascal is one newton per square metre.",
                "Un pascal è un newton per metro quadrato."
              ]
            }
          ],
          "hints": [
            [
              "Identify the quantity, rule or definition before calculating.",
              "Individua la grandezza, la regola o la definizione prima di calcolare."
            ],
            [
              "Check the unit and the direction or scale in your answer.",
              "Controlla l'unità e la direzione o la scala nella risposta."
            ]
          ],
          "sceneIndex": 3
        }
      ],
      "independentPractice": [
        {
          "id": "physics-5m1-independent",
          "title": [
            "Independent practice",
            "Esercitazione autonoma"
          ],
          "instructions": [
            "Answer without hints, then read the explanation and correct any mistake.",
            "Rispondi senza suggerimenti, poi leggi la spiegazione e correggi gli eventuali errori."
          ],
          "questions": [
            {
              "q": [
                "Same force on a smaller area: pressure…",
                "Stessa forza su un'area minore: la pressione…"
              ],
              "a": [
                [
                  "increases.",
                  "aumenta."
                ],
                [
                  "decreases.",
                  "diminuisce."
                ],
                [
                  "becomes zero.",
                  "diventa zero."
                ],
                [
                  "becomes mass.",
                  "diventa massa."
                ]
              ],
              "why": [
                "For fixed force, pressure is inversely proportional to area.",
                "A forza costante, la pressione è inversamente proporzionale all'area."
              ]
            },
            {
              "q": [
                "According to Stevin's law, liquid pressure increases with…",
                "Secondo la legge di Stevino, la pressione di un liquido aumenta con…"
              ],
              "a": [
                [
                  "depth.",
                  "la profondità."
                ],
                [
                  "container colour.",
                  "il colore del recipiente."
                ],
                [
                  "container shape only.",
                  "solo la forma del recipiente."
                ],
                [
                  "surface area only.",
                  "solo l'area della superficie."
                ]
              ],
              "why": [
                "The depth h makes pressure grow deeper in the liquid.",
                "La profondità h fa aumentare la pressione nel liquido."
              ]
            }
          ],
          "sceneIndex": 4
        }
      ],
      "knowledgeCheck": [
        {
          "q": [
            "What is the formula for pressure?",
            "Qual è la formula della pressione?"
          ],
          "a": [
            [
              "p = F/A",
              "p = F/A"
            ],
            [
              "p = F × A",
              "p = F × A"
            ],
            [
              "p = A/F",
              "p = A/F"
            ],
            [
              "p = F + A",
              "p = F + A"
            ]
          ],
          "why": [
            "Pressure is perpendicular force divided by area.",
            "La pressione è la forza perpendicolare divisa per l'area."
          ]
        },
        {
          "q": [
            "What is the SI unit of pressure?",
            "Qual è l'unità SI della pressione?"
          ],
          "a": [
            [
              "pascal (Pa)",
              "pascal (Pa)"
            ],
            [
              "newton (N)",
              "newton (N)"
            ],
            [
              "joule (J)",
              "joule (J)"
            ],
            [
              "kilogram (kg)",
              "chilogrammo (kg)"
            ]
          ],
          "why": [
            "One pascal is one newton per square metre.",
            "Un pascal è un newton per metro quadrato."
          ]
        },
        {
          "q": [
            "Same force on a smaller area: pressure…",
            "Stessa forza su un'area minore: la pressione…"
          ],
          "a": [
            [
              "increases.",
              "aumenta."
            ],
            [
              "decreases.",
              "diminuisce."
            ],
            [
              "becomes zero.",
              "diventa zero."
            ],
            [
              "becomes mass.",
              "diventa massa."
            ]
          ],
          "why": [
            "For fixed force, pressure is inversely proportional to area.",
            "A forza costante, la pressione è inversamente proporzionale all'area."
          ]
        },
        {
          "q": [
            "According to Stevin's law, liquid pressure increases with…",
            "Secondo la legge di Stevino, la pressione di un liquido aumenta con…"
          ],
          "a": [
            [
              "depth.",
              "la profondità."
            ],
            [
              "container colour.",
              "il colore del recipiente."
            ],
            [
              "container shape only.",
              "solo la forma del recipiente."
            ],
            [
              "surface area only.",
              "solo l'area della superficie."
            ]
          ],
          "why": [
            "The depth h makes pressure grow deeper in the liquid.",
            "La profondità h fa aumentare la pressione nel liquido."
          ]
        }
      ],
      "summary": [
        [
          "Pressure is perpendicular force divided by area: p = F/A. Its SI unit is the pascal (Pa), equal to N/m².",
          "La pressione è la forza perpendicolare divisa per l'area: p = F/A. L'unità SI è il pascal (Pa), pari a N/m²."
        ],
        [
          "Pascal's principle describes pressure transmission in a confined fluid. Stevin's law gives the depth contribution: p = ρgh.",
          "Il principio di Pascal descrive la trasmissione della pressione in un fluido confinato. La legge di Stevino dà il contributo della profondità: p = ρgh."
        ]
      ],
      "masteryAssessment": {
        "title": [
          "Mastery trial",
          "Prova di maestria"
        ],
        "instructions": [
          "Apply the ideas independently. You need at least 75% to pass this mastery check.",
          "Applica le idee in autonomia. Serve almeno il 75% per superare questa verifica di maestria."
        ],
        "questions": [
          {
            "q": [
              "What is the formula for pressure?",
              "Qual è la formula della pressione?"
            ],
            "a": [
              [
                "p = F/A",
                "p = F/A"
              ],
              [
                "p = F × A",
                "p = F × A"
              ],
              [
                "p = A/F",
                "p = A/F"
              ],
              [
                "p = F + A",
                "p = F + A"
              ]
            ],
            "why": [
              "Pressure is perpendicular force divided by area.",
              "La pressione è la forza perpendicolare divisa per l'area."
            ]
          },
          {
            "q": [
              "What is the SI unit of pressure?",
              "Qual è l'unità SI della pressione?"
            ],
            "a": [
              [
                "pascal (Pa)",
                "pascal (Pa)"
              ],
              [
                "newton (N)",
                "newton (N)"
              ],
              [
                "joule (J)",
                "joule (J)"
              ],
              [
                "kilogram (kg)",
                "chilogrammo (kg)"
              ]
            ],
            "why": [
              "One pascal is one newton per square metre.",
              "Un pascal è un newton per metro quadrato."
            ]
          },
          {
            "q": [
              "Same force on a smaller area: pressure…",
              "Stessa forza su un'area minore: la pressione…"
            ],
            "a": [
              [
                "increases.",
                "aumenta."
              ],
              [
                "decreases.",
                "diminuisce."
              ],
              [
                "becomes zero.",
                "diventa zero."
              ],
              [
                "becomes mass.",
                "diventa massa."
              ]
            ],
            "why": [
              "For fixed force, pressure is inversely proportional to area.",
              "A forza costante, la pressione è inversamente proporzionale all'area."
            ]
          },
          {
            "q": [
              "According to Stevin's law, liquid pressure increases with…",
              "Secondo la legge di Stevino, la pressione di un liquido aumenta con…"
            ],
            "a": [
              [
                "depth.",
                "la profondità."
              ],
              [
                "container colour.",
                "il colore del recipiente."
              ],
              [
                "container shape only.",
                "solo la forma del recipiente."
              ],
              [
                "surface area only.",
                "solo l'area della superficie."
              ]
            ],
            "why": [
              "The depth h makes pressure grow deeper in the liquid.",
              "La profondità h fa aumentare la pressione nel liquido."
            ]
          }
        ],
        "questionConceptIds": [
          "pressure",
          "pressure",
          "fluid-pressure",
          "fluid-pressure"
        ],
        "passingScore": 75
      },
      "techniqueUnlock": {
        "id": "physics-5m1-technique",
        "name": [
          "Physics Form · Applied Technique",
          "Stile della Fisica · Tecnica applicata"
        ],
        "description": [
          "Choose the correct physical model, show your reasoning and check units before striking.",
          "Scegli il modello fisico corretto, mostra il ragionamento e controlla le unità prima di colpire."
        ],
        "xpReward": 25
      }
    }},
  {
    "id": "p5m2",
    "arc": 20,
    "sec": "5.4–5.6",
    "pages": "133–146",
    "hue": 170,
    "horns": 4,
    "eyes": 3,
    "title": [
      "Float or Sink",
      "Galleggia o affonda"
    ],
    "topic": [
      "Archimedes' principle and buoyancy",
      "Principio di Archimede e galleggiamento"
    ],
    "demon": [
      "Buoyancy Beast",
      "Bestia del Galleggiamento"
    ],
    "tech": [
      "Fluid Form · Second Technique: Archimedes Lift",
      "Stile dei Fluidi · Seconda Tecnica: Spinta di Archimede"
    ],
    "scenes": [
      {
        "who": "s",
        "vis": "phTank",
        "text": [
          "<p>Step into a full bath and water spills over, {name}. That spill is the key to floating.</p><p>[[Archimedes' principle|principio di Archimede]]: a body in a fluid feels an upward [[buoyant force|spinta di Archimede]] equal to the weight of the fluid it pushes out of the way.</p>",
          "<p>Entra in una vasca piena e l'acqua trabocca, {name}. Quel trabocco è la chiave del galleggiamento.</p><p>[[Archimedes' principle|principio di Archimede]]: un corpo in un fluido sente una [[buoyant force|spinta di Archimede]] verso l'alto pari al peso del fluido che sposta.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "phTank",
        "text": [
          "<p>Compare the object's [[density|densità]] with the fluid's. Less dense than water (< 1 g/cm³) and it floats; more dense and it sinks; equal and it hovers.</p><p>A steel ship floats because its hull shape makes its <i>average</i> density — steel plus all the air inside — less than water's.</p>",
          "<p>Confronta la [[density|densità]] dell'oggetto con quella del fluido. Meno densa dell'acqua (< 1 g/cm³) e galleggia; più densa e affonda; uguale e resta sospesa.</p><p>Una nave d'acciaio galleggia perché la forma dello scafo rende la sua densità <i>media</i> — acciaio più tutta l'aria dentro — minore di quella dell'acqua.</p>"
        ]
      },
      {
        "who": "s",
        "vis": "phTank",
        "text": [
          "<p>The Buoyancy Beast tossed objects into the water. For each one, work out its density from mass and volume, then decide: floats or sinks?</p>",
          "<p>La Bestia del Galleggiamento ha gettato oggetti in acqua. Per ciascuno, calcola la densità da massa e volume, poi decidi: galleggia o affonda?</p>"
        ]
      },
      {
        "type": "fluids",
        "mode": "float",
        "title": [
          "Float or sink?",
          "Galleggia o affonda?"
        ],
        "rounds": [
          {
            "name": [
              "Cork block",
              "Blocco di sughero"
            ],
            "m": 5,
            "v": 20,
            "why": [
              "",
              ""
            ]
          },
          {
            "name": [
              "Iron bolt",
              "Bullone di ferro"
            ],
            "m": 79,
            "v": 10,
            "why": [
              "",
              ""
            ]
          },
          {
            "name": [
              "Ice cube",
              "Cubetto di ghiaccio"
            ],
            "m": 9,
            "v": 10,
            "why": [
              "",
              ""
            ]
          },
          {
            "name": [
              "Glass marble",
              "Biglia di vetro"
            ],
            "m": 25,
            "v": 10,
            "why": [
              "",
              ""
            ]
          }
        ]
      },
      {
        "who": "d",
        "vis": "demon",
        "text": [
          "<p>Roar! I'm the Buoyancy Beast! I drag down what should float and bob up what should sink until the sea makes no sense!</p>",
          "<p>Roar! Sono la Bestia del Galleggiamento! Trascino giù ciò che dovrebbe galleggiare e faccio emergere ciò che dovrebbe affondare finché il mare non ha più senso!</p>"
        ]
      },
      {
        "type": "battle"
      }
    ],
    "quiz": [
      {
        "q": [
          "Archimedes' buoyant force equals…",
          "La spinta di Archimede è pari a…"
        ],
        "a": [
          [
            "the weight of the displaced fluid",
            "al peso del fluido spostato"
          ],
          [
            "the weight of the object",
            "al peso dell'oggetto"
          ],
          [
            "the volume of the object",
            "al volume dell'oggetto"
          ],
          [
            "zero",
            "a zero"
          ]
        ],
        "why": [
          "Buoyancy = weight of the fluid pushed aside.",
          "La spinta = peso del fluido spostato."
        ]
      },
      {
        "q": [
          "An object floats when its density is…",
          "Un oggetto galleggia quando la sua densità è…"
        ],
        "a": [
          [
            "less than the fluid's",
            "minore di quella del fluido"
          ],
          [
            "greater than the fluid's",
            "maggiore di quella del fluido"
          ],
          [
            "exactly zero",
            "esattamente zero"
          ],
          [
            "equal to its mass",
            "uguale alla sua massa"
          ]
        ],
        "why": [
          "Lower density than the fluid → it floats.",
          "Densità minore del fluido → galleggia."
        ]
      },
      {
        "q": [
          "A block has m = 60 g, V = 20 cm³. In water (1 g/cm³) it…",
          "Un blocco ha m = 60 g, V = 20 cm³. In acqua (1 g/cm³)…"
        ],
        "a": [
          [
            "sinks (density 3 g/cm³)",
            "affonda (densità 3 g/cm³)"
          ],
          [
            "floats",
            "galleggia"
          ],
          [
            "hovers",
            "resta sospeso"
          ],
          [
            "dissolves",
            "si scioglie"
          ]
        ],
        "why": [
          "ρ = 60 ÷ 20 = 3 g/cm³ > 1, so it sinks.",
          "ρ = 60 ÷ 20 = 3 g/cm³ > 1, quindi affonda."
        ]
      },
      {
        "q": [
          "Why does a steel ship float?",
          "Perché una nave d'acciaio galleggia?"
        ],
        "a": [
          [
            "Its average density (with the air inside) is less than water",
            "La sua densità media (con l'aria dentro) è minore dell'acqua"
          ],
          [
            "Steel is lighter than water",
            "L'acciaio è più leggero dell'acqua"
          ],
          [
            "It has no weight",
            "Non ha peso"
          ],
          [
            "Water has no density",
            "L'acqua non ha densità"
          ]
        ],
        "why": [
          "The hollow hull lowers the ship's overall density below water's.",
          "Lo scafo cavo abbassa la densità complessiva sotto quella dell'acqua."
        ]
      },
      {
        "q": [
          "Ice (0.9 g/cm³) placed in water will…",
          "Il ghiaccio (0,9 g/cm³) messo in acqua…"
        ],
        "a": [
          [
            "float, mostly submerged",
            "galleggia, quasi tutto immerso"
          ],
          [
            "sink to the bottom",
            "affonda sul fondo"
          ],
          [
            "dissolve instantly",
            "si scioglie all'istante"
          ],
          [
            "float completely above the surface",
            "galleggia tutto sopra la superficie"
          ]
        ],
        "why": [
          "Slightly less dense than water, so it floats low.",
          "Poco meno denso dell'acqua, quindi galleggia basso."
        ]
      },
      {
        "q": [
          "The buoyant force always points…",
          "La spinta di Archimede punta sempre…"
        ],
        "a": [
          [
            "upward",
            "verso l'alto"
          ],
          [
            "downward",
            "verso il basso"
          ],
          [
            "sideways",
            "di lato"
          ],
          [
            "toward the densest side",
            "verso il lato più denso"
          ]
        ],
        "why": [
          "Buoyancy acts upward, opposing weight.",
          "La spinta agisce verso l'alto, opponendosi al peso."
        ]
      }
    ]
  ,
    "learning": {
      "version": 1,
      "objectives": [
        {
          "id": "p5m2-objective-1",
          "description": [
            "Explain the buoyant force",
            "Spiegare la spinta idrostatica"
          ],
          "successCriteria": [
            [
              "Explain the idea and apply it correctly in a short exercise.",
              "Spiegare il concetto e applicarlo correttamente in un breve esercizio."
            ]
          ]
        },
        {
          "id": "p5m2-objective-2",
          "description": [
            "Apply Archimedes' principle to floating and sinking",
            "Applicare il principio di Archimede al galleggiamento e all'affondamento"
          ],
          "successCriteria": [
            [
              "Explain the idea and apply it correctly in a short exercise.",
              "Spiegare il concetto e applicarlo correttamente in un breve esercizio."
            ]
          ]
        }
      ],
      "prerequisites": [
        [
          "Review the key quantities and units from the previous mission.",
          "Ripassa le grandezze e le unità chiave della missione precedente."
        ]
      ],
      "concepts": [
        {
          "id": "buoyancy",
          "title": [
            "Buoyant force",
            "Spinta idrostatica"
          ],
          "explanation": [
            "A fluid exerts an upward buoyant force on an immersed object. The force is linked to the pressure difference between the lower and upper parts.",
            "Un fluido esercita una spinta verso l'alto su un corpo immerso. La forza è collegata alla differenza di pressione tra la parte inferiore e quella superiore."
          ],
          "example": [
            "A submerged block feels an upward push from the water.",
            "Un blocco immerso sente una spinta verso l'alto esercitata dall'acqua."
          ],
          "workedExample": {
            "scenario": [
              "A submerged block feels an upward push from the water.",
              "Un blocco immerso sente una spinta verso l'alto esercitata dall'acqua."
            ],
            "steps": [
              [
                "The buoyant force acts upward, opposite to weight.",
                "La spinta idrostatica è diretta verso l'alto, opposta al peso."
              ],
              [
                "Buoyancy exists in liquids and gases.",
                "La spinta idrostatica esiste nei liquidi e nei gas."
              ]
            ],
            "answer": [
              "Buoyancy exists in liquids and gases.",
              "La spinta idrostatica esiste nei liquidi e nei gas."
            ]
          },
          "misconceptions": [
            {
              "belief": [
                "Buoyancy is not caused by an object having no weight.",
                "Il galleggiamento non è dovuto all'assenza di peso del corpo."
              ],
              "correction": [
                null,
                null
              ]
            }
          ],
          "knowledgePrompts": [
            [
              "Explain the key idea, then solve a new example.",
              "Spiega l'idea chiave, poi risolvi un nuovo esempio."
            ]
          ],
          "sceneIndexes": [
            0,
            1
          ]
        },
        {
          "id": "archimedes",
          "title": [
            "Archimedes' principle",
            "Principio di Archimede"
          ],
          "explanation": [
            "The buoyant force equals the weight of the displaced fluid: Fb = ρfluid g Vdisplaced. A floating object is in vertical balance when buoyancy equals weight.",
            "La spinta idrostatica è uguale al peso del fluido spostato: Fb = ρfluido g Vspostato. Un corpo galleggiante è in equilibrio verticale quando la spinta è uguale al peso."
          ],
          "example": [
            "If 0.002 m³ of water is displaced, its mass is about 2 kg and its weight about 19.6 N.",
            "Se vengono spostati 0,002 m³ d'acqua, la sua massa è circa 2 kg e il suo peso circa 19,6 N."
          ],
          "workedExample": {
            "scenario": [
              "If 0.002 m³ of water is displaced, its mass is about 2 kg and its weight about 19.6 N.",
              "Se vengono spostati 0,002 m³ d'acqua, la sua massa è circa 2 kg e il suo peso circa 19,6 N."
            ],
            "steps": [
              [
                "Compare average object density with fluid density to predict floating or sinking in simple cases.",
                "Confronta la densità media del corpo con quella del fluido per prevedere se galleggia o affonda nei casi semplici."
              ],
              [
                "A floating object displaces fluid whose weight equals the object's weight.",
                "Un corpo galleggiante sposta fluido il cui peso è uguale al peso del corpo."
              ]
            ],
            "answer": [
              "A floating object displaces fluid whose weight equals the object's weight.",
              "Un corpo galleggiante sposta fluido il cui peso è uguale al peso del corpo."
            ]
          },
          "misconceptions": [
            {
              "belief": [
                "A large object does not automatically sink; shape and displaced volume matter.",
                "Un oggetto grande non affonda automaticamente: contano la forma e il volume spostato."
              ],
              "correction": [
                null,
                null
              ]
            }
          ],
          "knowledgePrompts": [
            [
              "Explain the key idea, then solve a new example.",
              "Spiega l'idea chiave, poi risolvi un nuovo esempio."
            ]
          ],
          "sceneIndexes": [
            2
          ]
        }
      ],
      "guidedPractice": [
        {
          "id": "physics-5m2-guided",
          "title": [
            "Guided practice",
            "Esercitazione guidata"
          ],
          "instructions": [
            "Answer the first two questions. Use the worked examples and feedback to check each step.",
            "Rispondi alle prime due domande. Usa gli esempi svolti e il feedback per controllare ogni passaggio."
          ],
          "questions": [
            {
              "q": [
                "In which direction does buoyant force act?",
                "In quale direzione agisce la spinta idrostatica?"
              ],
              "a": [
                [
                  "Upward.",
                  "Verso l'alto."
                ],
                [
                  "Downward only.",
                  "Solo verso il basso."
                ],
                [
                  "Sideways only.",
                  "Solo lateralmente."
                ],
                [
                  "It has no direction.",
                  "Non ha direzione."
                ]
              ],
              "why": [
                "Buoyant force acts upward on an immersed object.",
                "La spinta idrostatica agisce verso l'alto su un corpo immerso."
              ]
            },
            {
              "q": [
                "Archimedes' principle says buoyant force equals…",
                "Il principio di Archimede afferma che la spinta è uguale a…"
              ],
              "a": [
                [
                  "the weight of the displaced fluid.",
                  "il peso del fluido spostato."
                ],
                [
                  "the object's volume.",
                  "il volume dell'oggetto."
                ],
                [
                  "the object's mass.",
                  "la massa dell'oggetto."
                ],
                [
                  "atmospheric pressure.",
                  "la pressione atmosferica."
                ]
              ],
              "why": [
                "The displaced fluid's weight determines the buoyant force.",
                "Il peso del fluido spostato determina la spinta."
              ]
            }
          ],
          "hints": [
            [
              "Identify the quantity, rule or definition before calculating.",
              "Individua la grandezza, la regola o la definizione prima di calcolare."
            ],
            [
              "Check the unit and the direction or scale in your answer.",
              "Controlla l'unità e la direzione o la scala nella risposta."
            ]
          ],
          "sceneIndex": 3
        }
      ],
      "independentPractice": [
        {
          "id": "physics-5m2-independent",
          "title": [
            "Independent practice",
            "Esercitazione autonoma"
          ],
          "instructions": [
            "Answer without hints, then read the explanation and correct any mistake.",
            "Rispondi senza suggerimenti, poi leggi la spiegazione e correggi gli eventuali errori."
          ],
          "questions": [
            {
              "q": [
                "An object with average density lower than water will generally…",
                "Un oggetto con densità media minore di quella dell'acqua generalmente…"
              ],
              "a": [
                [
                  "float in water.",
                  "galleggia nell'acqua."
                ],
                [
                  "always sink.",
                  "affonda sempre."
                ],
                [
                  "have no weight.",
                  "non ha peso."
                ],
                [
                  "turn into water.",
                  "si trasforma in acqua."
                ]
              ],
              "why": [
                "A lower average density allows the object to float.",
                "Una densità media minore permette al corpo di galleggiare."
              ]
            },
            {
              "q": [
                "A floating object is in vertical balance when…",
                "Un corpo galleggiante è in equilibrio verticale quando…"
              ],
              "a": [
                [
                  "buoyant force equals its weight.",
                  "la spinta idrostatica è uguale al suo peso."
                ],
                [
                  "buoyant force is zero.",
                  "la spinta è zero."
                ],
                [
                  "its mass is zero.",
                  "la sua massa è zero."
                ],
                [
                  "water pressure is absent.",
                  "la pressione dell'acqua è assente."
                ]
              ],
              "why": [
                "Equal upward and downward forces give vertical equilibrium.",
                "Forze uguali verso l'alto e verso il basso danno equilibrio verticale."
              ]
            }
          ],
          "sceneIndex": 4
        }
      ],
      "knowledgeCheck": [
        {
          "q": [
            "In which direction does buoyant force act?",
            "In quale direzione agisce la spinta idrostatica?"
          ],
          "a": [
            [
              "Upward.",
              "Verso l'alto."
            ],
            [
              "Downward only.",
              "Solo verso il basso."
            ],
            [
              "Sideways only.",
              "Solo lateralmente."
            ],
            [
              "It has no direction.",
              "Non ha direzione."
            ]
          ],
          "why": [
            "Buoyant force acts upward on an immersed object.",
            "La spinta idrostatica agisce verso l'alto su un corpo immerso."
          ]
        },
        {
          "q": [
            "Archimedes' principle says buoyant force equals…",
            "Il principio di Archimede afferma che la spinta è uguale a…"
          ],
          "a": [
            [
              "the weight of the displaced fluid.",
              "il peso del fluido spostato."
            ],
            [
              "the object's volume.",
              "il volume dell'oggetto."
            ],
            [
              "the object's mass.",
              "la massa dell'oggetto."
            ],
            [
              "atmospheric pressure.",
              "la pressione atmosferica."
            ]
          ],
          "why": [
            "The displaced fluid's weight determines the buoyant force.",
            "Il peso del fluido spostato determina la spinta."
          ]
        },
        {
          "q": [
            "An object with average density lower than water will generally…",
            "Un oggetto con densità media minore di quella dell'acqua generalmente…"
          ],
          "a": [
            [
              "float in water.",
              "galleggia nell'acqua."
            ],
            [
              "always sink.",
              "affonda sempre."
            ],
            [
              "have no weight.",
              "non ha peso."
            ],
            [
              "turn into water.",
              "si trasforma in acqua."
            ]
          ],
          "why": [
            "A lower average density allows the object to float.",
            "Una densità media minore permette al corpo di galleggiare."
          ]
        },
        {
          "q": [
            "A floating object is in vertical balance when…",
            "Un corpo galleggiante è in equilibrio verticale quando…"
          ],
          "a": [
            [
              "buoyant force equals its weight.",
              "la spinta idrostatica è uguale al suo peso."
            ],
            [
              "buoyant force is zero.",
              "la spinta è zero."
            ],
            [
              "its mass is zero.",
              "la sua massa è zero."
            ],
            [
              "water pressure is absent.",
              "la pressione dell'acqua è assente."
            ]
          ],
          "why": [
            "Equal upward and downward forces give vertical equilibrium.",
            "Forze uguali verso l'alto e verso il basso danno equilibrio verticale."
          ]
        }
      ],
      "summary": [
        [
          "A fluid exerts an upward buoyant force on an immersed object. The force is linked to the pressure difference between the lower and upper parts.",
          "Un fluido esercita una spinta verso l'alto su un corpo immerso. La forza è collegata alla differenza di pressione tra la parte inferiore e quella superiore."
        ],
        [
          "The buoyant force equals the weight of the displaced fluid: Fb = ρfluid g Vdisplaced. A floating object is in vertical balance when buoyancy equals weight.",
          "La spinta idrostatica è uguale al peso del fluido spostato: Fb = ρfluido g Vspostato. Un corpo galleggiante è in equilibrio verticale quando la spinta è uguale al peso."
        ]
      ],
      "masteryAssessment": {
        "title": [
          "Mastery trial",
          "Prova di maestria"
        ],
        "instructions": [
          "Apply the ideas independently. You need at least 75% to pass this mastery check.",
          "Applica le idee in autonomia. Serve almeno il 75% per superare questa verifica di maestria."
        ],
        "questions": [
          {
            "q": [
              "In which direction does buoyant force act?",
              "In quale direzione agisce la spinta idrostatica?"
            ],
            "a": [
              [
                "Upward.",
                "Verso l'alto."
              ],
              [
                "Downward only.",
                "Solo verso il basso."
              ],
              [
                "Sideways only.",
                "Solo lateralmente."
              ],
              [
                "It has no direction.",
                "Non ha direzione."
              ]
            ],
            "why": [
              "Buoyant force acts upward on an immersed object.",
              "La spinta idrostatica agisce verso l'alto su un corpo immerso."
            ]
          },
          {
            "q": [
              "Archimedes' principle says buoyant force equals…",
              "Il principio di Archimede afferma che la spinta è uguale a…"
            ],
            "a": [
              [
                "the weight of the displaced fluid.",
                "il peso del fluido spostato."
              ],
              [
                "the object's volume.",
                "il volume dell'oggetto."
              ],
              [
                "the object's mass.",
                "la massa dell'oggetto."
              ],
              [
                "atmospheric pressure.",
                "la pressione atmosferica."
              ]
            ],
            "why": [
              "The displaced fluid's weight determines the buoyant force.",
              "Il peso del fluido spostato determina la spinta."
            ]
          },
          {
            "q": [
              "An object with average density lower than water will generally…",
              "Un oggetto con densità media minore di quella dell'acqua generalmente…"
            ],
            "a": [
              [
                "float in water.",
                "galleggia nell'acqua."
              ],
              [
                "always sink.",
                "affonda sempre."
              ],
              [
                "have no weight.",
                "non ha peso."
              ],
              [
                "turn into water.",
                "si trasforma in acqua."
              ]
            ],
            "why": [
              "A lower average density allows the object to float.",
              "Una densità media minore permette al corpo di galleggiare."
            ]
          },
          {
            "q": [
              "A floating object is in vertical balance when…",
              "Un corpo galleggiante è in equilibrio verticale quando…"
            ],
            "a": [
              [
                "buoyant force equals its weight.",
                "la spinta idrostatica è uguale al suo peso."
              ],
              [
                "buoyant force is zero.",
                "la spinta è zero."
              ],
              [
                "its mass is zero.",
                "la sua massa è zero."
              ],
              [
                "water pressure is absent.",
                "la pressione dell'acqua è assente."
              ]
            ],
            "why": [
              "Equal upward and downward forces give vertical equilibrium.",
              "Forze uguali verso l'alto e verso il basso danno equilibrio verticale."
            ]
          }
        ],
        "questionConceptIds": [
          "buoyancy",
          "buoyancy",
          "archimedes",
          "archimedes"
        ],
        "passingScore": 75
      },
      "techniqueUnlock": {
        "id": "physics-5m2-technique",
        "name": [
          "Physics Form · Applied Technique",
          "Stile della Fisica · Tecnica applicata"
        ],
        "description": [
          "Choose the correct physical model, show your reasoning and check units before striking.",
          "Scegli il modello fisico corretto, mostra il ragionamento e controlla le unità prima di colpire."
        ],
        "xpReward": 25
      }
    }},
  {
    "id": "m1m1",
    "arc": 21,
    "sec": "1.1",
    "pages": "1–6",
    "hue": 45,
    "horns": 2,
    "eyes": 1,
    "title": [
      "Natural Numbers",
      "Numeri naturali"
    ],
    "topic": [
      "Natural numbers, order and basic operations",
      "Numeri naturali, ordinamento e operazioni di base"
    ],
    
    
    "learning": {
      "version": 1,
      "prerequisites": [
        ["Know how to count to 20 and compare small numbers.", "Sapere contare fino a 20 e confrontare piccoli numeri."]
      ],
      "objectives": [
        {"id": "identify-natural", "description": ["Identify natural numbers and write ℕ.", "Riconoscere i numeri naturali e scrivere ℕ."]},
        {"id": "order-number-line", "description": ["Order natural numbers and place them on a half-line.", "Ordinare i numeri naturali e posizionarli su una semiretta."]},
        {"id": "zero-successor", "description": ["Explain that 0 has no predecessor and every number has a successor.", "Spiegare che lo 0 non ha precedente e che ogni numero ha un successivo."]}
      ],
      "concepts": [
        {
          "id": "natural-numbers",
          "title": ["Natural numbers and the half-line", "Numeri naturali e la semiretta"],
          "explanation": ["Natural numbers are 0, 1, 2, 3, 4, 5… The set is called ℕ. We can draw them on an oriented half-line: start at point O (zero) and always go right, equal steps. Between one number and the next there is no other natural number: that is why ℕ is discrete.", "I numeri naturali sono 0, 1, 2, 3, 4, 5… L’insieme si chiama ℕ. Possiamo disegnarli su una semiretta orientata: partiamo da un punto O (lo 0) e andiamo sempre verso destra, un passo uguale per ogni numero. Tra un numero e il successivo non c’è nessun altro numero naturale: per questo ℕ è discreto."],
          "example": ["Draw the half-line: O—1—2—3—4—5→. The predecessor of 4 is 3, the successor of 4 is 5. Zero has no predecessor.", "Disegna la semiretta: O—1—2—3—4—5→. Il precedente di 4 è 3, il successivo di 4 è 5. Lo 0 non ha precedente."],
          "workedExample": {
            "scenario": ["Place the numbers 0, 3, 1, 5 on the half-line and order them from smallest to largest.", "Posiziona sulla semiretta i numeri 0, 3, 1, 5 e ordinali dal più piccolo al più grande."],
            "steps": [
              ["1. Draw the half-line with an arrow to the right and mark the origin O.", "1. Disegna la semiretta con freccia a destra e segna l’origine O."],
              ["2. Mark points at equal distance: 0, then 1, 2, 3, 4, 5.", "2. Segna i punti a distanza uguale: 0, poi 1, 2, 3, 4, 5."],
              ["3. Evidenzia 0, 1, 3, 5.", "3. Highlight 0, 1, 3, 5."],
              ["4. Reading left to right gives the order: 0 < 1 < 3 < 5.", "4. Leggendo da sinistra a destra ottieni l’ordine: 0 < 1 < 3 < 5."]
            ],
            "answer": ["0, 1, 3, 5. On the half-line numbers always increase to the right.", "0, 1, 3, 5. Sulla semiretta i numeri crescono sempre verso destra."]
          },
          "misconceptions": [
            {"belief": ["Natural numbers start from 1.", "I numeri naturali partono da 1."], "correction": ["In this book ℕ includes 0. Zero is a natural number.", "In questo libro ℕ include lo 0. Lo zero è un numero naturale."]},
            {"belief": ["Between 2 and 3 there is another natural number.", "Tra 2 e 3 c’è un altro numero naturale."], "correction": ["No. ℕ is discrete: between two consecutive numbers there is no other natural number.", "No. ℕ è discreto: tra due numeri consecutivi non c’è nessun altro numero naturale."]}
          ],
          "knowledgePrompts": [
            ["Draw the half-line and explain to a classmate why 0 has no predecessor.", "Disegna la semiretta e spiega a un compagno perché lo 0 non ha precedente."]
          ]
        }
      ],
      "guidedPractice": [
        {"id": "gp-nat-1", "title": ["Guided practice", "Esercitazione guidata"], "instructions": ["Use a mental half-line to answer.", "Usa la semiretta mentale per rispondere."], "questions": [
          {"q": ["What is the successor of 7?", "Qual è il successivo di 7?"], "a": [["8", "8"], ["6", "6"], ["9", "9"], ["0", "0"]], "why": ["The successor is obtained by adding 1: 7 + 1 = 8.", "Il successivo si ottiene aggiungendo 1: 7 + 1 = 8."]}
        ]}
      ],
      "independentPractice": [
        {"id": "ip-nat-1", "title": ["Try on your own", "Prova da solo"], "instructions": ["Senza suggerimenti.", "Without hints."], "questions": [
          {"q": ["Order from smallest to largest: 5, 0, 2, 8.", "Ordina dal più piccolo al più grande: 5, 0, 2, 8."], "a": [["0, 2, 5, 8", "0, 2, 5, 8"], ["5, 2, 0, 8", "5, 2, 0, 8"], ["8, 5, 2, 0", "8, 5, 2, 0"], ["0, 5, 2, 8", "0, 5, 2, 8"]], "why": ["On the half-line we read left to right: 0 < 2 < 5 < 8.", "Sulla semiretta si legge da sinistra a destra: 0 < 2 < 5 < 8."]}
        ]}
      ],
      "knowledgeCheck": [
        {"q": ["Does 0 have a predecessor in ℕ?", "Lo 0 ha un precedente in ℕ?"], "a": [["No", "No"], ["Sì", "Yes"], ["Solo a volte", "Only sometimes"], ["Yes, it is -1", "Sì, è -1"]], "why": ["Zero is the first natural number: it has no predecessor.", "Lo zero è il primo numero naturale: non ha precedente."]}
      ],
      "summary": [
        ["ℕ = {0, 1, 2, 3, …}. It is ordered and discrete. It is represented on a half-line. 0 has no predecessor; every number has a successor.", "ℕ = {0, 1, 2, 3, …}. È ordinato e discreto. Si rappresenta su una semiretta. Lo 0 non ha precedente; ogni numero ha un successivo."]
      ],
            "masteryAssessment": {"title": ["Mastery check", "Verifica di padronanza"], "instructions": ["At least 75%.", "Almeno il 75%."], "passingScore": 75, "questions": [{"q": ["Successor of 9?", "Successivo di 9?"], "a": [["10","10"],["8","8"],["11","11"],["0","0"]], "why": ["+1.", "+1."]}, {"q": ["Does 0 have predecessor?", "0 ha precedente?"], "a": [["No","No"],["Sì","Yes"],["A volte","Sometimes"],["-1","-1"]], "why": ["Primo.", "First."]}]},
"techniqueUnlock": {
        "id": "step-by-step-slash",
        "name": ["Number Form · First Technique: Step-by-Step Slash", "Stile dei Numeri · Prima Tecnica: Fendente Passo-Passo"],
        "description": ["Break any number problem into clear steps, just like steps on the half-line.", "Scomponi ogni problema numerico in passi chiari, proprio come i passi sulla semiretta."],
        "xpReward": 25
      }
    },
"demon": [
      "Zero-Confusion Imp",
      "Folletto della Confusione dello Zero"
    ],
    "tech": [
      "Number Form · First Technique: Step-by-Step Slash",
      "Stile dei Numeri · Prima Tecnica: Fendente Passo-Passo"
    ],
        "scenes": [
      {"vis": "math-natural-line", "who": "s", "text": ["<p>Natural numbers are 0, 1, 2, 3, 4, 5… The set is called <b>ℕ</b>.</p><p>Draw a half-line: start at point O (zero) and always go right with equal steps.</p>", "<p>I numeri naturali sono 0, 1, 2, 3, 4, 5… L’insieme si chiama <b>ℕ</b>.</p><p>Disegna una semiretta: parti da un punto O (lo 0) e vai sempre a destra con passi uguali.</p>"]},
      {"who": "y", "text": ["<p>Between 2 and 3 there is no other natural number. That is why ℕ is <b>discrete</b>.</p>", "<p>Tra 2 e 3 non c’è nessun altro numero naturale. Per questo ℕ è <b>discreto</b>.</p>"]},
      {"who": "d", "text": ["<p>Zero has no predecessor. Every other number has one (the predecessor) and all have a successor.</p>", "<p>Lo 0 non ha precedente. Ogni altro numero ne ha uno (il precedente) e tutti hanno un successivo.</p>"]},
      {"who": "s", "text": ["<p>Try placing 0, 3, 1, 5 on the half-line and read them from left to right.</p>", "<p>Prova a posizionare 0, 3, 1, 5 sulla semiretta e leggili da sinistra a destra.</p>"]}
    ],
"quiz": [
      {
        "q": [
          "Which set symbol represents the natural numbers?",
          "Quale simbolo indica l’insieme dei numeri naturali?"
        ],
        "a": [
          ["ℕ", "ℕ"],
          ["ℤ", "ℤ"],
          ["ℚ", "ℚ"],
          ["ℝ", "ℝ"]
        ],
        "why": [
          "ℕ is the standard symbol for the set of natural numbers.",
          "ℕ è il simbolo standard per l’insieme dei numeri naturali."
        ]
      },
      {
        "q": [
          "Does 0 have a predecessor in ℕ?",
          "Lo 0 ha un precedente in ℕ?"
        ],
        "a": [
          ["No", "No"],
          ["Yes", "Sì"],
          ["Solo in alcune definizioni", "Only in some definitions"],
          ["Always", "Sempre"]
        ],
        "why": [
          "In the usual definition of ℕ that includes 0, zero has no predecessor.",
          "Nella definizione usuale di ℕ che include lo 0, lo zero non ha precedente."
        ]
      }
    ]
  },
  {
    "id": "m1m2",
    "arc": 21,
    "sec": "1.2",
    "pages": "7–14",
    "hue": 50,
    "horns": 2,
    "eyes": 2,
    "title": [
      "Operations & Expressions",
      "Operazioni ed espressioni"
    ],
    "topic": [
      "Addition, subtraction, multiplication, division and simple expressions with natural numbers",
      "Addizione, sottrazione, moltiplicazione, divisione e semplici espressioni con i numeri naturali"
    ],
    
    "learning": {
      "version": 1,
      "prerequisites": [["Know natural numbers and their order.", "Conoscere i numeri naturali e il loro ordine."]],
      "objectives": [
        {"id": "four-ops", "description": ["Perform addition, subtraction, multiplication and division in ℕ.", "Eseguire addizione, sottrazione, moltiplicazione e divisione in ℕ."]},
        {"id": "order-ops", "description": ["Follow the order of operations in expressions.", "Rispettare l’ordine delle operazioni nelle espressioni."]}
      ],
      "concepts": [
        {
          "id": "order-of-ops",
          "title": ["Order of operations", "Ordine delle operazioni"],
          "explanation": ["In an expression we do powers first, then multiplications and divisions (left to right), finally additions and subtractions. Imagine a queue: higher priority goes first.", "In un’espressione facciamo prima le potenze, poi moltiplicazioni e divisioni (da sinistra a destra), infine addizioni e sottrazioni. Immagina una coda: chi ha la priorità più alta passa prima."],
          "example": ["3 + 2 × 4 = 3 + 8 = 11 (not 20). Multiplication goes first.", "3 + 2 × 4 = 3 + 8 = 11 (non 20). La moltiplicazione passa prima."],
          "workedExample": {
            "scenario": ["Calculate 10 − 2 × 3 + 4.", "Calcola 10 − 2 × 3 + 4."],
            "steps": [
              ["1. Multiplication first: 2 × 3 = 6.", "1. Prima la moltiplicazione: 2 × 3 = 6."],
              ["2. The expression is now 10 − 6 + 4.", "2. Ora l’espressione è 10 − 6 + 4."],
              ["3. Left to right: 10 − 6 = 4, then 4 + 4 = 8.", "3. Da sinistra a destra: 10 − 6 = 4, poi 4 + 4 = 8."]
            ],
            "answer": ["8", "8"]
          },
          "misconceptions": [
            {"belief": ["We always go left to right with no priority.", "Si fa sempre da sinistra a destra, senza priorità."], "correction": ["No. Multiplication and division have priority over addition and subtraction.", "No. Moltiplicazione e divisione hanno priorità su addizione e sottrazione."]}
          ]
        }
      ],
      "guidedPractice": [{"id": "gp-ops", "title": ["Guided practice", "Esercitazione guidata"], "instructions": ["Calculate.", "Calcola."], "questions": [{"q": ["What is 12 ÷ 3 + 5?", "Quanto fa 12 ÷ 3 + 5?"], "a": [["9", "9"], ["4", "4"], ["20", "20"], ["1", "1"]], "why": ["Division first: 4 + 5 = 9.", "Prima la divisione: 4 + 5 = 9."]}]}],
      "independentPractice": [{"id": "ip-ops", "title": ["Try on your own", "Prova da solo"], "instructions": ["Senza suggerimenti.", "Without hints."], "questions": [{"q": ["What is 5 + 3 × 2?", "Quanto fa 5 + 3 × 2?"], "a": [["11", "11"], ["16", "16"], ["10", "10"], ["8", "8"]], "why": ["3 × 2 = 6, poi 5 + 6 = 11.", "3 × 2 = 6, then 5 + 6 = 11."]}]}],
      "knowledgeCheck": [{"q": ["What is done first in 8 − 2 × 3?", "Cosa si fa prima in 8 − 2 × 3?"], "a": [["Moltiplicazione", "Multiplication"], ["Sottrazione", "Subtraction"], ["Indifferente", "Either"], ["Addizione", "Addition"]], "why": ["La moltiplicazione ha la priorità.", "Multiplication has priority."]}],
      "summary": [["In expressions: powers → × and ÷ → + and −. Left to right when operations have the same priority.", "Nelle espressioni: potenze → × e ÷ → + e −. Da sinistra a destra quando le operazioni hanno la stessa priorità."]],
            "masteryAssessment": {"title": ["Mastery check", "Verifica di padronanza"], "instructions": ["At least 75%.", "Almeno il 75%."], "passingScore": 75, "questions": [{"q": ["6 + 2 × 3?", "6 + 2 × 3?"], "a": [["12","12"],["24","24"],["11","11"],["8","8"]], "why": ["× first.", "× first."]}]},
"techniqueUnlock": {"id": "order-slash", "name": ["Number Form · Second Technique: Order Slash", "Stile dei Numeri · Seconda Tecnica: Fendente dell’Ordine"], "description": ["Cut through any expression by respecting the correct priority.", "Taglia qualsiasi espressione rispettando la priorità corretta."], "xpReward": 25}
    },
"demon": ["Order-Chaos Imp", "Folletto del Caos dell'Ordine"],
    "tech": ["Number Form · Second Technique: Order Slash", "Stile dei Numeri · Seconda Tecnica: Fendente dell'Ordine"],
    "scenes": [
      {
        "who": "s",
        "text": ["<p>The four operations on natural numbers are addition, subtraction, multiplication and division.</p>", "<p>Le quattro operazioni sui numeri naturali sono addizione, sottrazione, moltiplicazione e divisione.</p>"]
      },
      {
        "who": "y",
        "text": ["<p>In an expression we always do × and ÷ before + and −.</p>", "<p>In un'espressione facciamo sempre × e ÷ prima di + e −.</p>"]
      }
    ],
    "quiz": [
      {
        "q": ["What is 5 + 3 × 2?", "Quanto fa 5 + 3 × 2?"],
        "a": [["11", "11"], ["16", "16"], ["10", "10"], ["8", "8"]],
        "why": ["Multiplication first: 3 × 2 = 6, then 5 + 6 = 11.", "Prima la moltiplicazione: 3 × 2 = 6, poi 5 + 6 = 11."]
      }
    ]
  },
  {
    "id": "m1m3",
    "arc": 21,
    "sec": "1.3",
    "pages": "15–20",
    "hue": 55,
    "horns": 3,
    "eyes": 2,
    "title": ["Properties of Operations", "Proprietà delle operazioni"],
    "topic": ["Commutative, associative and distributive properties", "Proprietà commutativa, associativa e distributiva"],
    
    "learning": {
      "version": 1,
      "prerequisites": [["Know the four operations.", "Conoscere le quattro operazioni."]],
      "objectives": [
        {"id": "use-properties", "description": ["Use the commutative, associative and distributive properties to simplify.", "Usare le proprietà commutativa, associativa e distributiva per semplificare."]}
      ],
      "concepts": [
        {
          "id": "distributive",
          "title": ["Distributive property", "Proprietà distributiva"],
          "explanation": ["Multiplication distributes over addition: a × (b + c) = a × b + a × c. It’s like handing out sweets to two groups.", "La moltiplicazione si distribuisce sull’addizione: a × (b + c) = a × b + a × c. È come distribuire le caramelle a due gruppi."],
          "example": ["7 × 12 = 7 × (10 + 2) = 70 + 14 = 84. Più facile a mente!", "7 × 12 = 7 × (10 + 2) = 70 + 14 = 84. Easier mentally!"],
          "workedExample": {
            "scenario": ["Calculate 6 × 15 using the distributive property.", "Calcola 6 × 15 usando la proprietà distributiva."],
            "steps": [
              ["1. Scrivi 15 = 10 + 5.", "1. Write 15 = 10 + 5."],
              ["2. 6 × (10 + 5) = 6 × 10 + 6 × 5.", "2. 6 × (10 + 5) = 6 × 10 + 6 × 5."],
              ["3. 60 + 30 = 90.", "3. 60 + 30 = 90."]
            ],
            "answer": ["90", "90"]
          },
          "misconceptions": [
            {"belief": ["The commutative property also works for subtraction.", "La proprietà commutativa vale anche per la sottrazione."], "correction": ["No. 5 − 3 ≠ 3 − 5. It only works for addition and multiplication.", "No. 5 − 3 ≠ 3 − 5. Vale solo per addizione e moltiplicazione."]}
          ]
        }
      ],
      "guidedPractice": [{"id": "gp-props", "title": ["Guided practice", "Esercitazione guidata"], "instructions": ["Identify the property.", "Riconosci la proprietà."], "questions": [{"q": ["Which property is 4 + 9 = 9 + 4?", "Quale proprietà è 4 + 9 = 9 + 4?"], "a": [["Commutativa", "Commutative"], ["Associativa", "Associative"], ["Distributiva", "Distributive"], ["Nessuna", "None"]], "why": ["We change the order of the addends.", "Si cambia l’ordine degli addendi."]}]}],
      "knowledgeCheck": [{"q": ["a × (b + c) è uguale a…", "a × (b + c) equals…"], "a": [["a × b + a × c", "a × b + a × c"], ["a + b × c", "a + b × c"], ["a × b × c", "a × b × c"], ["(a × b) + c", "(a × b) + c"]], "why": ["This is the distributive property.", "Questa è la proprietà distributiva."]}],
      "summary": [["The properties let us rearrange calculations without changing the result. The distributive property is very useful for mental calculation.", "Le proprietà ci permettono di riorganizzare i calcoli senza cambiare il risultato. La distributiva è molto utile per il calcolo mentale."]],
            "independentPractice": [{"id":"ip3","title":["Try alone", "Prova da solo"],"instructions":["Applica.","Apply."],"questions":[{"q":["8×13 con distributiva?","8×13 distributive?"],"a":[["104","104"],["96","96"],["112","112"],["100","100"]],"why":["80+24.","80+24."]}]}],
      "masteryAssessment": {"title": ["Verifica", "Check"], "instructions": ["75%.", "75%."], "passingScore": 75, "questions": [{"q": ["5+7=7+5 is…", "5+7=7+5 è…"], "a": [["Commutativa","Commutative"],["Associativa","Associative"],["Distributiva","Distributive"],["Nessuna","None"]], "why": ["Ordine.","Order."]}]},
"techniqueUnlock": {"id": "property-slash", "name": ["Number Form · Third Technique: Property Slash", "Stile dei Numeri · Terza Tecnica: Fendente delle Proprietà"], "description": ["Rewrite the calculation using the properties to make it easier.", "Riscrivi il calcolo usando le proprietà per renderlo più facile."], "xpReward": 25}
    },
"demon": ["Property Imp", "Folletto delle Proprietà"],
    "tech": ["Number Form · Third Technique: Property Slash", "Stile dei Numeri · Terza Tecnica: Fendente delle Proprietà"],
    "scenes": [
      {
        "who": "s",
        "text": ["<p>The commutative property says the order of the numbers does not change the result of addition or multiplication.</p>", "<p>La proprietà commutativa dice che l'ordine dei numeri non cambia il risultato di addizione o moltiplicazione.</p>"]
      },
      {
        "who": "d",
        "text": ["<p>The distributive property is especially useful for mental calculation.</p>", "<p>La proprietà distributiva è particolarmente utile per il calcolo mentale.</p>"]
      }
    ],
    "quiz": [
      {
        "q": ["Which property is 2 × (5 + 3) = 2 × 5 + 2 × 3?", "Quale proprietà è 2 × (5 + 3) = 2 × 5 + 2 × 3?"],
        "a": [["Distributive", "Distributiva"], ["Commutative", "Commutativa"], ["Associative", "Associativa"], ["None", "Nessuna"]],
        "why": ["Multiplication distributes over addition.", "La moltiplicazione si distribuisce sull'addizione."]
      }
    ]
  },
  {
    "id": "m2m1",
    "arc": 22,
    "sec": "2.1",
    "pages": "77–84",
    "hue": 180,
    "horns": 2,
    "eyes": 1,
    "title": ["Rational Numbers", "Numeri razionali"],
    "topic": ["Fractions and the set of rational numbers ℚ", "Frazioni e l'insieme dei numeri razionali ℚ"],
    
    "learning": {
      "version": 1,
      "prerequisites": [["Know natural numbers and the four operations.", "Conoscere i numeri naturali e le quattro operazioni."]],
      "objectives": [
        {"id": "identify-rationals", "description": ["Identify rational numbers and write ℚ.", "Riconoscere i numeri razionali e scrivere ℚ."]},
        {"id": "fraction-visual", "description": ["Represent a fraction as part of a whole or of a segment.", "Rappresentare una frazione come parte di un intero o di un segmento."]}
      ],
      "concepts": [
        {
          "id": "rational-visual",
          "title": ["Rational numbers and fractions", "Numeri razionali e frazioni"],
          "explanation": ["A rational number can be written as a fraction a/b with b ≠ 0. Imagine a pizza divided into b equal slices: a/b means taking a of those slices. The set of all rational numbers is called ℚ.", "Un numero razionale si può scrivere come frazione a/b con b ≠ 0. Immagina una pizza divisa in b fette uguali: a/b significa prendere a di quelle fette. L’insieme di tutti i numeri razionali si chiama ℚ."],
          "example": ["1/2 is half a pizza. 3/4 is three slices out of four. 0.5 = 1/2. √2 cannot be written as a fraction, so it is not rational.", "1/2 è mezza pizza. 3/4 sono tre fette su quattro. 0,5 = 1/2. √2 non si può scrivere come frazione, quindi non è razionale."],
          "workedExample": {
            "scenario": ["Draw 3/4 and explain why it is rational.", "Disegna 3/4 e spiega perché è razionale."],
            "steps": [
              ["1. Draw a rectangle and divide it into 4 equal parts.", "1. Disegna un rettangolo e dividilo in 4 parti uguali."],
              ["2. Colour 3 of those parts.", "2. Colora 3 di quelle parti."],
              ["3. Hai rappresentato 3/4.", "3. You have represented 3/4."],
              ["4. Since it is a fraction of two integers, it belongs to ℚ.", "4. Poiché è una frazione di due interi, appartiene a ℚ."]
            ],
            "answer": ["3/4 is rational because it is written as a fraction of two integers.", "3/4 è razionale perché si scrive come frazione di due interi."]
          },
          "misconceptions": [
            {"belief": ["0.5 is not a fraction.", "0,5 non è una frazione."], "correction": ["0.5 = 5/10 = 1/2, so it is rational.", "0,5 = 5/10 = 1/2, quindi è razionale."]}
          ]
        }
      ],
      "guidedPractice": [{"id": "gp-rat", "title": ["Guided practice", "Esercitazione guidata"], "instructions": ["Choose the answer.", "Scegli la risposta."], "questions": [{"q": ["Which of these is rational?", "Quale di questi è razionale?"], "a": [["2/5", "2/5"], ["√3", "√3"], ["π", "π"], ["√7", "√7"]], "why": ["2/5 is a fraction of two integers.", "2/5 è una frazione di due interi."]}]}],
      "knowledgeCheck": [{"q": ["The symbol for rational numbers is…", "Il simbolo dei numeri razionali è…"], "a": [["ℚ", "ℚ"], ["ℕ", "ℕ"], ["ℤ", "ℤ"], ["ℝ", "ℝ"]], "why": ["ℚ stands for rational numbers (quotient).", "ℚ indica i numeri razionali (quoziente)."]}],
      "summary": [["Rational numbers (ℚ) are all numbers that can be written as a fraction a/b with b ≠ 0. They are easy to visualise as parts of a whole.", "I numeri razionali (ℚ) sono tutti i numeri che si possono scrivere come frazione a/b con b ≠ 0. Si visualizzano bene come parti di un intero."]],
            "independentPractice": [{"id":"ip21","title":["Try alone", "Prova da solo"],"instructions":["Scegli.","Choose."],"questions":[{"q":["Razionale?","Rational?"],"a":[["3/7","3/7"],["√5","√5"],["π","π"],["√8","√8"]],"why":["Fraction.", "Frazione."]}]}],
      "masteryAssessment": {"title": ["Verifica", "Check"], "instructions": ["75%.", "75%."], "passingScore": 75, "questions": [{"q": ["Simbolo razionali?","Rationals symbol?"], "a": [["ℚ","ℚ"],["ℕ","ℕ"],["ℤ","ℤ"],["ℝ","ℝ"]], "why": ["ℚ.","ℚ."]}]},
"techniqueUnlock": {"id": "fraction-slash", "name": ["Number Form · Fourth Technique: Fraction Slash", "Stile dei Numeri · Quarta Tecnica: Fendente della Frazione"], "description": ["Rewrite any rational number as a clean fraction and visualise it.", "Riscrivi qualsiasi numero razionale come frazione pulita e visualizzala."], "xpReward": 25}
    },
"demon": ["Fraction Imp", "Folletto delle Frazioni"],
    "tech": ["Number Form · Fourth Technique: Fraction Slash", "Stile dei Numeri · Quarta Tecnica: Fendente della Frazione"],
        "scenes": [
      {"vis": "math-fractions-visual", "who": "s", "text": ["<p>A rational number can be written as a fraction <b>a/b</b> with b ≠ 0.</p><p>Imagine a pizza divided into b equal slices: a/b means taking a slices.</p>", "<p>Un numero razionale si può scrivere come frazione <b>a/b</b> con b ≠ 0.</p><p>Immagina una pizza divisa in b fette uguali: a/b significa prendere a fette.</p>"]},
      {"who": "y", "text": ["<p>0.5 = 1/2, so it is rational. √2 cannot be written as a fraction, so it is not.</p>", "<p>0,5 = 1/2, quindi è razionale. √2 non si può scrivere come frazione, quindi non lo è.</p>"]},
      {"who": "d", "text": ["<p>The set of all rational numbers is called <b>ℚ</b>.</p>", "<p>L’insieme di tutti i numeri razionali si chiama <b>ℚ</b>.</p>"]}
    ],
"quiz": [
      {
        "q": ["Is 0.5 a rational number?", "0,5 è un numero razionale?"],
        "a": [["Yes", "Sì"], ["No", "No"], ["Only sometimes", "Solo a volte"], ["Never", "Mai"]],
        "why": ["0.5 = 1/2, so it is rational.", "0,5 = 1/2, quindi è razionale."]
      }
    ]
  },
  {
    "id": "m3m1",
    "arc": 23,
    "sec": "3.1",
    "pages": "147–154",
    "hue": 270,
    "horns": 2,
    "eyes": 3,
    "title": ["Sets", "Insiemi"],
    "topic": ["What a set is, membership and basic set notation", "Che cos'è un insieme, appartenenza e notazione di base"],
    
    "learning": {
      "version": 1,
      "prerequisites": [["Know the sets ℕ, ℤ, ℚ.", "Conoscere gli insiemi ℕ, ℤ, ℚ."]],
      "objectives": [
        {"id": "describe-sets", "description": ["Describe a set by listing or by a property.", "Descrivere un insieme per elencazione o per proprietà."]},
        {"id": "membership", "description": ["Use the symbols ∈ and ∉ correctly.", "Usare correttamente i simboli ∈ e ∉."]}
      ],
      "concepts": [
        {
          "id": "sets-visual",
          "title": ["Sets and membership", "Insiemi e appartenenza"],
          "explanation": ["A set is a collection of distinct objects called elements. We can draw it as a cloud or a circle and put the elements inside. We write a ∈ A if a is inside, a ∉ A if it is outside.", "Un insieme è una collezione di oggetti distinti chiamati elementi. Possiamo disegnarlo come una nuvola o un cerchio e mettere gli elementi dentro. Scriviamo a ∈ A se a sta dentro, a ∉ A se sta fuori."],
          "example": ["A = {1, 2, 3}. Draw a circle with 1, 2 and 3 inside. Then 2 ∈ A and 5 ∉ A.", "A = {1, 2, 3}. Disegna un cerchio con 1, 2 e 3 dentro. Allora 2 ∈ A e 5 ∉ A."],
          "workedExample": {
            "scenario": ["Given A = {natural numbers less than 4}, list the elements and say if 3 ∈ A.", "Dato A = {numeri naturali minori di 4}, elenca gli elementi e di’ se 3 ∈ A."],
            "steps": [
              ["1. Natural numbers less than 4 are 0, 1, 2, 3.", "1. I numeri naturali minori di 4 sono 0, 1, 2, 3."],
              ["2. Quindi A = {0, 1, 2, 3}.", "2. So A = {0, 1, 2, 3}."],
              ["3. 3 is in the list, so 3 ∈ A.", "3. 3 è nell’elenco, quindi 3 ∈ A."]
            ],
            "answer": ["A = {0, 1, 2, 3} and 3 ∈ A.", "A = {0, 1, 2, 3} e 3 ∈ A."]
          },
          "misconceptions": [
            {"belief": ["A set can contain the same element twice.", "Un insieme può contenere lo stesso elemento due volte."], "correction": ["No. Elements of a set are always distinct. {1, 1, 2} is the same as {1, 2}.", "No. Gli elementi di un insieme sono sempre distinti. {1, 1, 2} è uguale a {1, 2}."]}
          ]
        }
      ],
      "guidedPractice": [{"id": "gp-set", "title": ["Guided practice", "Esercitazione guidata"], "instructions": ["Decidi.", "Decide."], "questions": [{"q": ["4 appartiene a {2, 4, 6}?", "Does 4 belong to {2, 4, 6}?"], "a": [["Sì", "Yes"], ["No", "No"], ["Only if even", "Solo se è pari"], ["Only if odd", "Solo se è dispari"]], "why": ["4 is listed in the set.", "4 è elencato nell’insieme."]}]}],
      "knowledgeCheck": [{"q": ["The symbol for “belongs to” is…", "Il simbolo “appartiene a” è…"], "a": [["∈", "∈"], ["∉", "∉"], ["⊂", "⊂"], ["∪", "∪"]], "why": ["∈ indica l’appartenenza.", "∈ indicates membership."]}],
      "summary": [["A set is a collection of distinct elements. It can be described by listing or by a property. We use ∈ and ∉ to say if an element is inside or outside.", "Un insieme è una collezione di elementi distinti. Si può descrivere per elencazione o per proprietà. Usiamo ∈ e ∉ per dire se un elemento sta dentro o fuori."]],
            "independentPractice": [{"id":"ip31","title":["Try alone", "Prova da solo"],"instructions":["Decidi.","Decide."],"questions":[{"q":["5 ∈ {1,3,5}?","5 ∈ {1,3,5}?"],"a":[["Sì","Yes"],["No","No"],["Solo dispari","Only odd"],["Solo primo","Only prime"]],"why":["Elencato.","Listed."]}]}],
      "masteryAssessment": {"title": ["Verifica", "Check"], "instructions": ["75%.", "75%."], "passingScore": 75, "questions": [{"q": ["Simbolo appartenenza?","Membership symbol?"], "a": [["∈","∈"],["∉","∉"],["⊂","⊂"],["∪","∪"]], "why": ["∈.","∈."]}]},
"techniqueUnlock": {"id": "set-slash", "name": ["Logic Form · First Technique: Set Slash", "Stile della Logica · Prima Tecnica: Fendente dell’Insieme"], "description": ["Clearly list or describe the elements and cut through the problem.", "Elenca o descrivi chiaramente gli elementi e taglia il problema."], "xpReward": 25}
    },
"demon": ["Empty-Set Imp", "Folletto dell'Insieme Vuoto"],
    "tech": ["Logic Form · First Technique: Set Slash", "Stile della Logica · Prima Tecnica: Fendente dell'Insieme"],
        "scenes": [
      {"vis": "math-venn-diagram", "who": "s", "text": ["<p>A set is a collection of distinct objects called elements.</p><p>Draw it as a circle and put the elements inside.</p>", "<p>Un insieme è una collezione di oggetti distinti chiamati elementi.</p><p>Disegnalo come un cerchio e metti gli elementi dentro.</p>"]},
      {"who": "y", "text": ["<p>We write <b>a ∈ A</b> if a is inside, <b>a ∉ A</b> if it is outside.</p>", "<p>Scriviamo <b>a ∈ A</b> se a sta dentro, <b>a ∉ A</b> se sta fuori.</p>"]},
      {"who": "d", "text": ["<p>Elements are always distinct: {1, 1, 2} is the same as {1, 2}.</p>", "<p>Gli elementi sono sempre distinti: {1, 1, 2} è uguale a {1, 2}.</p>"]}
    ],
"quiz": [
      {
        "q": ["Which of these is an empty set?", "Quale di questi è un insieme vuoto?"],
        "a": [["The set of natural numbers less than 0", "L'insieme dei numeri naturali minori di 0"], ["{0}", "{0}"], ["{1, 2}", "{1, 2}"], ["ℕ", "ℕ"]],
        "why": ["There are no natural numbers less than 0, so the set is empty.", "Non esistono numeri naturali minori di 0, quindi l'insieme è vuoto."]
      }
    ]
  },
  {
    "id": "m2m2",
    "arc": 22,
    "sec": "2.2",
    "pages": "85–96",
    "hue": 185,
    "horns": 2,
    "eyes": 2,
    "title": ["Operations with Rationals", "Operazioni con i razionali"],
    "topic": ["Addition, subtraction, multiplication and division of fractions", "Addizione, sottrazione, moltiplicazione e divisione di frazioni"],
    
    "learning": {
      "version": 1,
      "prerequisites": [["Know what a rational number is.", "Sapere che cos’è un numero razionale."]],
      "objectives": [
        {"id": "frac-ops", "description": ["Add, subtract, multiply and divide fractions.", "Addizionare, sottrarre, moltiplicare e dividere frazioni."]}
      ],
      "concepts": [
        {
          "id": "multiply-fractions",
          "title": ["Multiplying and dividing fractions", "Moltiplicazione e divisione di frazioni"],
          "explanation": ["To multiply fractions multiply numerators and denominators. To divide, multiply by the reciprocal (swap numerator and denominator of the second fraction).", "Per moltiplicare frazioni si moltiplicano numeratori e denominatori. Per dividere si moltiplica per il reciproco (si scambia numeratore e denominatore della seconda frazione)."],
          "example": ["2/3 × 4/5 = 8/15.  2/3 ÷ 1/6 = 2/3 × 6/1 = 4.", "2/3 × 4/5 = 8/15.  2/3 ÷ 1/6 = 2/3 × 6/1 = 4."],
          "workedExample": {
            "scenario": ["Calculate 1/2 × 3/4 and 3/5 ÷ 2/3.", "Calcola 1/2 × 3/4 e 3/5 ÷ 2/3."],
            "steps": [
              ["1. 1/2 × 3/4 = 3/8.", "1. 1/2 × 3/4 = 3/8."],
              ["2. 3/5 ÷ 2/3 = 3/5 × 3/2 = 9/10.", "2. 3/5 ÷ 2/3 = 3/5 × 3/2 = 9/10."]
            ],
            "answer": ["3/8 and 9/10", "3/8 e 9/10"]
          },
          "misconceptions": [
            {"belief": ["To multiply fractions we add the denominators.", "Per moltiplicare frazioni si sommano i denominatori."], "correction": ["No. We multiply both numerators and denominators.", "No. Si moltiplicano sia i numeratori sia i denominatori."]}
          ]
        }
      ],
      "guidedPractice": [{"id": "gp-fracops", "title": ["Guided practice", "Esercitazione guidata"], "instructions": ["Calculate.", "Calcola."], "questions": [{"q": ["What is 1/2 × 3/4?", "Quanto fa 1/2 × 3/4?"], "a": [["3/8", "3/8"], ["4/6", "4/6"], ["3/6", "3/6"], ["2/3", "2/3"]], "why": ["1×3 / 2×4 = 3/8.", "1×3 / 2×4 = 3/8."]}]}],
      "knowledgeCheck": [{"q": ["To divide by a fraction we…", "Per dividere per una frazione si…"], "a": [["Multiply by its reciprocal", "Moltiplica per il suo reciproco"], ["Add the denominators", "Somma i denominatori"], ["Subtract the numerators", "Sottrai i numeratori"], ["Niente di speciale", "Nothing special"]], "why": ["Dividing by a/b is the same as multiplying by b/a.", "Dividere per a/b equivale a moltiplicare per b/a."]}],
      "summary": [["Fraction multiplication: multiply across. Division: multiply by the reciprocal.", "Moltiplicazione di frazioni: moltiplica in croce. Divisione: moltiplica per il reciproco."]],
            "independentPractice": [{"id":"ip22","title":["Try alone", "Prova da solo"],"instructions":["Calculate.", "Calcola."],"questions":[{"q":["2/3 × 3/4?","2/3 × 3/4?"],"a":[["1/2","1/2"],["6/12","6/12"],["5/7","5/7"],["2/4","2/4"]],"why":["6/12=1/2.","6/12=1/2."]}]}],
      "masteryAssessment": {"title": ["Verifica", "Check"], "instructions": ["75%.", "75%."], "passingScore": 75, "questions": [{"q": ["1/2 ÷ 1/4?","1/2 ÷ 1/4?"], "a": [["2","2"],["1/8","1/8"],["1/2","1/2"],["4","4"]], "why": ["×4.","×4."]}]},
"techniqueUnlock": {"id": "reciprocal-slash", "name": ["Number Form · Fifth Technique: Reciprocal Slash", "Stile dei Numeri · Quinta Tecnica: Fendente del Reciproco"], "description": ["Turn any division of fractions into a multiplication by the reciprocal.", "Trasforma qualsiasi divisione di frazioni in una moltiplicazione per il reciproco."], "xpReward": 25}
    },
"demon": ["Denominator Imp", "Folletto del Denominatore"],
    "tech": ["Number Form · Fifth Technique: Reciprocal Slash", "Stile dei Numeri · Quinta Tecnica: Fendente del Reciproco"],
    "scenes": [{"who": "s", "text": ["<p>To multiply fractions, multiply the numerators together and the denominators together.</p>", "<p>Per moltiplicare frazioni si moltiplicano tra loro i numeratori e i denominatori.</p>"]}, {"who": "y", "text": ["<p>To divide by a fraction, multiply by its reciprocal.</p>", "<p>Per dividere per una frazione si moltiplica per il suo reciproco.</p>"]}],
    "quiz": [{"q": ["What is 2/3 ÷ 1/6?", "Quanto fa 2/3 ÷ 1/6?"], "a": [["4", "4"], ["1/9", "1/9"], ["2/18", "2/18"], ["12", "12"]], "why": ["2/3 × 6/1 = 12/3 = 4.", "2/3 × 6/1 = 12/3 = 4."]}]
  },
  {
    "id": "m2m3",
    "arc": 22,
    "sec": "2.3",
    "pages": "97–110",
    "hue": 190,
    "horns": 3,
    "eyes": 1,
    "title": ["Decimals and Real Numbers", "Decimali e numeri reali"],
    "topic": ["Decimal representation and the set of real numbers ℝ", "Rappresentazione decimale e l'insieme dei numeri reali ℝ"],
    
    "learning": {
      "version": 1,
      "prerequisites": [["Know rational numbers.", "Conoscere i numeri razionali."]],
      "objectives": [
        {"id": "decimals-reals", "description": ["Convert between fractions and decimals and recognise real numbers.", "Convertire tra frazioni e decimali e riconoscere i numeri reali."]}
      ],
      "concepts": [
        {
          "id": "reals-visual",
          "title": ["Decimals and real numbers", "Decimali e numeri reali"],
          "explanation": ["Every fraction can be written as a decimal (terminating or repeating). The real numbers ℝ also include irrationals such as √2 and π, which fill the entire number line.", "Ogni frazione si può scrivere come decimale (finito o periodico). I numeri reali ℝ comprendono anche gli irrazionali come √2 e π, che riempiono tutta la retta numerica."],
          "example": ["1/2 = 0.5. 1/3 = 0.333… √2 ≈ 1.414… is not repeating, so it is irrational but real.", "1/2 = 0,5. 1/3 = 0,333… √2 ≈ 1,414… non è periodico, quindi è irrazionale ma reale."],
          "workedExample": {
            "scenario": ["Decide whether 0.25 and √2 are rational.", "Stabilisci se 0,25 e √2 sono razionali."],
            "steps": [
              ["1. 0,25 = 25/100 = 1/4 → razionale.", "1. 0.25 = 25/100 = 1/4 → rational."],
              ["2. √2 cannot be written as a fraction of integers → irrational (but real).", "2. √2 non si può scrivere come frazione di interi → irrazionale (ma reale)."]
            ],
            "answer": ["0.25 is rational; √2 is irrational.", "0,25 è razionale; √2 è irrazionale."]
          }
        }
      ],
      "guidedPractice": [{"id": "gp-real", "title": ["Guided practice", "Esercitazione guidata"], "instructions": ["Scegli.", "Choose."], "questions": [{"q": ["Which number is irrational?", "Quale numero è irrazionale?"], "a": [["√2", "√2"], ["1/3", "1/3"], ["0,25", "0.25"], ["-7", "-7"]], "why": ["√2 cannot be written as a fraction.", "√2 non si può scrivere come frazione."]}]}],
      "knowledgeCheck": [{"q": ["Every rational number is also…", "Ogni numero razionale è anche…"], "a": [["Reale", "Real"], ["Irrazionale", "Irrational"], ["Naturale", "Natural"], ["Immaginario", "Imaginary"]], "why": ["ℚ ⊂ ℝ.", "ℚ ⊂ ℝ."]}],
      "summary": [["Real numbers fill the entire line. Rationals are those that can be written as a fraction; the others are irrational.", "I numeri reali riempiono tutta la retta. I razionali sono quelli che si scrivono come frazione; gli altri sono irrazionali."]],
            "independentPractice": [{"id":"ip23","title":["Try alone", "Prova da solo"],"instructions":["Scegli.","Choose."],"questions":[{"q":["Irrazionale?","Irrational?"],"a":[["√3","√3"],["0,75","0.75"],["2/5","2/5"],["-4","-4"]],"why":["√3.","√3."]}]}],
      "masteryAssessment": {"title": ["Verifica", "Check"], "instructions": ["75%.", "75%."], "passingScore": 75, "questions": [{"q": ["Is π real?", "π è reale?"], "a": [["Sì","Yes"],["No","No"],["A volte","Sometimes"],["Immaginario","Imaginary"]], "why": ["Sì.","Yes."]}]},
"techniqueUnlock": {"id": "number-line-slash", "name": ["Number Form · Sixth Technique: Number-Line Slash", "Stile dei Numeri · Sesta Tecnica: Fendente della Retta"], "description": ["Place any real number on the line and compare it.", "Posiziona qualsiasi numero reale sulla retta e confrontalo."], "xpReward": 25}
    },
"demon": ["Irrational Imp", "Folletto dell'Irrazionale"],
    "tech": ["Number Form · Sixth Technique: Number-Line Slash", "Stile dei Numeri · Sesta Tecnica: Fendente della Retta"],
    "scenes": [{"who": "s", "text": ["<p>Every fraction can be written as a decimal, terminating or repeating.</p>", "<p>Ogni frazione si può scrivere come decimale, finito o periodico.</p>"]}, {"who": "d", "text": ["<p>The real numbers fill the whole number line.</p>", "<p>I numeri reali riempiono tutta la retta numerica.</p>"]}],
    "quiz": [{"q": ["Is π a real number?", "π è un numero reale?"], "a": [["Yes", "Sì"], ["No", "No"], ["Only sometimes", "Solo a volte"], ["It is imaginary", "È immaginario"]], "why": ["π is irrational, therefore it is real.", "π è irrazionale, quindi è reale."]}]
  },
  {
    "id": "m3m2",
    "arc": 23,
    "sec": "3.2",
    "pages": "155–168",
    "hue": 275,
    "horns": 2,
    "eyes": 2,
    "title": ["Set Operations", "Operazioni tra insiemi"],
    "topic": ["Union, intersection and difference", "Unione, intersezione e differenza"],
    
    "learning": {
      "version": 1,
      "prerequisites": [["Know membership and sets.", "Conoscere l’appartenenza e gli insiemi."]],
      "objectives": [
        {"id": "set-ops", "description": ["Compute union, intersection and difference of two sets.", "Calcolare unione, intersezione e differenza di due insiemi."]}
      ],
      "concepts": [
        {
          "id": "ops-visual",
          "title": ["Union and intersection", "Unione e intersezione"],
          "explanation": ["Draw two overlapping circles. The union A ∪ B is everything in at least one circle. The intersection A ∩ B is only the overlapping part.", "Disegna due cerchi che si sovrappongono. L’unione A ∪ B è tutto ciò che sta in almeno uno dei due cerchi. L’intersezione A ∩ B è solo la parte sovrapposta."],
          "example": ["{1,2} ∪ {2,3} = {1,2,3}. {1,2} ∩ {2,3} = {2}.", "{1,2} ∪ {2,3} = {1,2,3}. {1,2} ∩ {2,3} = {2}."],
          "workedExample": {
            "scenario": ["Given A = {a,b} and B = {b,c}, compute A ∪ B and A ∩ B.", "Dati A = {a,b} e B = {b,c}, calcola A ∪ B e A ∩ B."],
            "steps": [
              ["1. Union: all distinct elements → {a,b,c}.", "1. Unione: tutti gli elementi distinti → {a,b,c}."],
              ["2. Intersection: only those in both → {b}.", "2. Intersezione: solo quelli in entrambi → {b}."]
            ],
            "answer": ["A ∪ B = {a,b,c}, A ∩ B = {b}.", "A ∪ B = {a,b,c}, A ∩ B = {b}."]
          }
        }
      ],
      "guidedPractice": [{"id": "gp-setops", "title": ["Guided practice", "Esercitazione guidata"], "instructions": ["Calculate.", "Calcola."], "questions": [{"q": ["What is {a,b} ∩ {b,c}?", "Quanto fa {a,b} ∩ {b,c}?"], "a": [["{b}", "{b}"], ["{a,b,c}", "{a,b,c}"], ["{a,c}", "{a,c}"], ["∅", "∅"]], "why": ["Only b is in both.", "Solo b sta in entrambi."]}]}],
      "knowledgeCheck": [{"q": ["A ∪ B is…", "A ∪ B è…"], "a": [["The set of elements in A or B", "L’insieme degli elementi in A o in B"], ["The set of elements in both", "L’insieme degli elementi in entrambi"], ["Sempre vuoto", "Always empty"], ["The same as A ∩ B", "Uguale a A ∩ B"]], "why": ["Union takes everything from either set.", "L’unione prende tutto da entrambi gli insiemi."]}],
      "summary": [["Union = everything, intersection = only the common part, difference = remove. They are easy to see with Venn diagrams.", "Unione = tutto, intersezione = solo il comune, differenza = togli. Si visualizzano bene con i diagrammi di Venn."]],
      "techniqueUnlock": {"id": "union-slash", "name": ["Logic Form · Second Technique: Union Slash", "Stile della Logica · Seconda Tecnica: Fendente dell’Unione"], "description": ["Combine or filter sets with union and intersection.", "Combina o filtra insiemi con unione e intersezione."], "xpReward": 25}
    },
"demon": ["Overlap Imp", "Folletto della Sovrapposizione"],
    "tech": ["Logic Form · Second Technique: Union Slash", "Stile della Logica · Seconda Tecnica: Fendente dell'Unione"],
    "scenes": [{"vis": "math-venn-diagram", "who": "s", "text": ["<p>The union of two sets contains every element that belongs to at least one of them.</p>", "<p>L'unione di due insiemi contiene ogni elemento che appartiene ad almeno uno di essi.</p>"]}, {"who": "y", "text": ["<p>The intersection contains only the elements that belong to both.</p>", "<p>L'intersezione contiene solo gli elementi che appartengono a entrambi.</p>"]}],
    "quiz": [{"q": ["What is {1,2,3} ∪ {3,4}?", "Quanto fa {1,2,3} ∪ {3,4}?"], "a": [["{1,2,3,4}", "{1,2,3,4}"], ["{3}", "{3}"], ["{1,2}", "{1,2}"], ["{4}", "{4}"]], "why": ["Union keeps every distinct element.", "L'unione tiene ogni elemento distinto."]}]
  },
  {
    "id": "m4m1",
    "arc": 24,
    "sec": "4.1",
    "pages": "223–232",
    "hue": 30,
    "horns": 2,
    "eyes": 1,
    "title": ["Algebraic Expressions", "Espressioni algebriche"],
    "topic": ["Variables, terms, coefficients, constants and evaluating expressions", "Variabili, termini, coefficienti, costanti e valutazione di espressioni"],
    "learning": {
      "version": 1,
      "prerequisites": [
        ["Know the order of operations and the four basic operations.", "Conoscere l'ordine delle operazioni e le quattro operazioni."]
      ],
      "objectives": [
        {
          "id": "read-expressions",
          "description": ["Identify variables, terms, coefficients and constant terms in simple algebraic expressions.", "Riconoscere variabili, termini, coefficienti e termini costanti nelle semplici espressioni algebriche."],
          "successCriteria": [
            ["I can explain what a letter represents in an expression.", "So spiegare che cosa rappresenta una lettera in un'espressione."],
            ["I can identify the coefficient and the constant term.", "So individuare il coefficiente e il termine costante."]
          ]
        },
        {
          "id": "evaluate-expressions",
          "description": ["Evaluate simple algebraic expressions by substituting values and following the order of operations.", "Calcolare semplici espressioni algebriche sostituendo i valori e rispettando l'ordine delle operazioni."],
          "successCriteria": [
            ["I replace each variable with its given value.", "Sostituisco ogni variabile con il valore assegnato."],
            ["I calculate the result in the correct order.", "Calcolo il risultato rispettando l'ordine corretto."]
          ]
        }
      ],
      "concepts": [
        {
          "id": "variables",
          "title": ["Variables and expressions", "Variabili ed espressioni"],
          "explanation": ["A variable is a letter that represents a number. It is like an empty box: the letter can take different values. An algebraic expression combines numbers, variables and operations. For example, 3x + 2 means three times x, then add 2.", "Una variabile è una lettera che rappresenta un numero. È come una casella vuota: la lettera può assumere valori diversi. Un'espressione algebrica combina numeri, variabili e operazioni. Per esempio, 3x + 2 significa tre volte x, poi si aggiunge 2."],
          "example": ["If x = 4, then 3x + 2 = 3 · 4 + 2 = 14.", "Se x = 4, allora 3x + 2 = 3 · 4 + 2 = 14."],
          "misconceptions": [
            {"belief": ["3x means 3 + x.", "3x significa 3 + x."], "correction": ["No. When a number and a letter are written next to each other, it means multiplication: 3x = 3 · x.", "No. Quando un numero e una lettera sono scritti vicini, significa moltiplicazione: 3x = 3 · x."]}
          ],
          "knowledgePrompts": [
            ["If x changes, can the value of 3x + 2 change too?", "Se x cambia, può cambiare anche il valore di 3x + 2?"]
          ],
          "visualKey": "algebra-parts"
        },
        {
          "id": "terms-coefficients",
          "title": ["Terms, coefficients and constants", "Termini, coefficienti e costanti"],
          "explanation": ["A term is a part of an expression separated by + or − signs. In 3x + 2, the terms are 3x and 2. The coefficient is the number multiplying the variable: here it is 3. The constant term has no variable: here it is 2.", "Un termine è una parte dell'espressione separata dai segni + o −. In 3x + 2, i termini sono 3x e 2. Il coefficiente è il numero che moltiplica la variabile: qui è 3. Il termine costante non contiene variabili: qui è 2."],
          "example": ["In 5a − 7, the coefficient is 5, the variable is a and the constant term is −7.", "In 5a − 7, il coefficiente è 5, la variabile è a e il termine costante è −7."],
          "misconceptions": [
            {"belief": ["The constant term in 5a − 7 is 7.", "Il termine costante in 5a − 7 è 7."], "correction": ["The sign belongs to the term. The constant term is −7, not +7.", "Il segno fa parte del termine. Il termine costante è −7, non +7."]}
          ],
          "visualKey": "algebra-parts"
        },
        {
          "id": "substitution",
          "title": ["Substitution: replacing a letter with a number", "Sostituzione: rimpiazzare una lettera con un numero"],
          "explanation": ["To evaluate an expression, replace every variable with its given value. Then calculate using the order of operations. Use brackets when the value is negative.", "Per calcolare un'espressione, sostituisci ogni variabile con il valore assegnato. Poi esegui i calcoli rispettando l'ordine delle operazioni. Usa le parentesi quando il valore è negativo."],
          "example": ["If x = 3, then 2x + 5 = 2 · 3 + 5 = 6 + 5 = 11.", "Se x = 3, allora 2x + 5 = 2 · 3 + 5 = 6 + 5 = 11."],
          "workedExample": {
            "scenario": ["A notebook costs x euros. You buy 3 notebooks and a pen that costs 2 euros. If x = 4, how much do you spend?", "Un quaderno costa x euro. Compri 3 quaderni e una penna che costa 2 euro. Se x = 4, quanto spendi?"],
            "steps": [
              ["Write the expression: 3x + 2. The 3 notebooks cost 3 times x; the pen costs 2 euros.", "Scrivi l'espressione: 3x + 2. I 3 quaderni costano 3 volte x; la penna costa 2 euro."],
              ["Replace x with 4: 3 · 4 + 2.", "Sostituisci x con 4: 3 · 4 + 2."],
              ["Multiply first: 12 + 2.", "Esegui prima la moltiplicazione: 12 + 2."],
              ["Add: 14.", "Somma: 14."]
            ],
            "answer": ["You spend 14 euros. The expression 3x + 2 describes the cost for any notebook price x.", "Spendi 14 euro. L'espressione 3x + 2 descrive il costo per qualsiasi prezzo x del quaderno."]
          },
          "misconceptions": [
            {"belief": ["If x = −2, then x² = −4.", "Se x = −2, allora x² = −4."], "correction": ["Use brackets: (−2)² = (−2) · (−2) = 4. The square of a negative number is positive.", "Usa le parentesi: (−2)² = (−2) · (−2) = 4. Il quadrato di un numero negativo è positivo."]}
          ],
          "sceneIndexes": [3],
          "visualKey": "algebra-substitution"
        }
      ],
      "guidedPractice": [
        {
          "id": "gp-alg",
          "title": ["Guided practice: read and evaluate", "Esercitazione guidata: riconosci e calcola"],
          "instructions": ["Choose the correct answer. Use the hint if you need help.", "Scegli la risposta corretta. Usa il suggerimento se hai bisogno di aiuto."],
          "sceneIndex": 2,
          "hints": [
            ["Remember: a number next to a letter means multiplication.", "Ricorda: un numero vicino a una lettera indica una moltiplicazione."],
            ["The coefficient is the number multiplying the letter.", "Il coefficiente è il numero che moltiplica la lettera."],
            ["Replace x with 4 first, then multiply before adding.", "Sostituisci prima x con 4, poi moltiplica prima di sommare."]
          ],
          "questions": [
            {"q": ["What does 4y mean?", "Che cosa significa 4y?"], "a": [["4 multiplied by y", "4 moltiplicato per y"], ["4 plus y", "4 più y"], ["y minus 4", "y meno 4"], ["y divided by 4", "y diviso 4"]], "why": ["A number written next to a variable means multiplication: 4y = 4 · y.", "Un numero scritto vicino a una variabile indica una moltiplicazione: 4y = 4 · y."]},
            {"q": ["In 6x + 9, what is the coefficient of x?", "In 6x + 9, qual è il coefficiente di x?"], "a": [["6", "6"], ["9", "9"], ["x", "x"], ["15", "15"]], "why": ["6 multiplies x, so 6 is the coefficient. 9 is the constant term.", "6 moltiplica x, quindi 6 è il coefficiente. 9 è il termine costante."]},
            {"q": ["If x = 4, what is 2x + 3?", "Se x = 4, quanto fa 2x + 3?"], "a": [["11", "11"], ["14", "14"], ["9", "9"], ["7", "7"]], "why": ["Replace x with 4: 2 · 4 + 3 = 8 + 3 = 11.", "Sostituisci x con 4: 2 · 4 + 3 = 8 + 3 = 11."]}
          ]
        }
      ],
      "independentPractice": [
        {
          "id": "ip-alg",
          "title": ["Independent practice", "Esercitazione autonoma"],
          "instructions": ["Solve each question without a hint. Read the explanation after answering.", "Risolvi ogni domanda senza suggerimenti. Leggi la spiegazione dopo aver risposto."],
          "sceneIndex": 4,
          "questions": [
            {"q": ["In 8a − 5, which part is the constant term?", "In 8a − 5, qual è il termine costante?"], "a": [["−5", "−5"], ["8", "8"], ["a", "a"], ["8a", "8a"]], "why": ["The constant term has no variable, and its sign is part of the term: −5.", "Il termine costante non contiene variabili e il suo segno fa parte del termine: −5."]},
            {"q": ["If y = 5, what is 3y − 4?", "Se y = 5, quanto fa 3y − 4?"], "a": [["11", "11"], ["19", "19"], ["7", "7"], ["15", "15"]], "why": ["3 · 5 − 4 = 15 − 4 = 11.", "3 · 5 − 4 = 15 − 4 = 11."]},
            {"q": ["If x = −2, what is x² + 3x?", "Se x = −2, quanto fa x² + 3x?"], "a": [["−2", "−2"], ["−10", "−10"], ["10", "10"], ["−1", "−1"]], "why": ["(−2)² + 3 · (−2) = 4 − 6 = −2. Remember the brackets when substituting a negative number.", "(−2)² + 3 · (−2) = 4 − 6 = −2. Ricorda le parentesi quando sostituisci un numero negativo."]}
          ]
        }
      ],
      "knowledgeCheck": [
        {"q": ["In 7m + 4, which number is the coefficient?", "In 7m + 4, quale numero è il coefficiente?"], "a": [["7", "7"], ["4", "4"], ["m", "m"], ["11", "11"]], "why": ["The coefficient multiplies the variable: 7m.", "Il coefficiente moltiplica la variabile: 7m."]},
        {"q": ["Which expression means 'five more than twice n'?", "Quale espressione significa 'cinque in più del doppio di n'?"], "a": [["2n + 5", "2n + 5"], ["5n + 2", "5n + 2"], ["2(n + 5)", "2(n + 5)"], ["n + 2 + 5", "n + 2 + 5"]], "why": ["Twice n is 2n; five more means add 5: 2n + 5.", "Il doppio di n è 2n; cinque in più significa aggiungere 5: 2n + 5."]},
        {"q": ["If a = 3, what is a² + 2a?", "Se a = 3, quanto fa a² + 2a?"], "a": [["15", "15"], ["12", "12"], ["11", "11"], ["9", "9"]], "why": ["3² + 2 · 3 = 9 + 6 = 15.", "3² + 2 · 3 = 9 + 6 = 15."]}
      ],
      "masteryAssessment": {
        "title": ["Algebra expressions mastery", "Prova di padronanza: espressioni algebriche"],
        "instructions": ["Answer all five questions independently. You need at least 80% to unlock the battle.", "Rispondi autonomamente a tutte e cinque le domande. Serve almeno l'80% per sbloccare la battaglia."],
        "passingScore": 80,
        "questionConceptIds": ["variables", "terms-coefficients", "variables", "substitution", "substitution"],
        "questions": [
          {"q": ["In 4x + 3, what is the coefficient?", "In 4x + 3, qual è il coefficiente?"], "a": [["4", "4"], ["3", "3"], ["x", "x"], ["7", "7"]], "why": ["4 multiplies x, so it is the coefficient.", "4 moltiplica x, quindi è il coefficiente."]},
          {"q": ["What is the constant term in 7a − 6?", "Qual è il termine costante in 7a − 6?"], "a": [["−6", "−6"], ["6", "6"], ["7", "7"], ["a", "a"]], "why": ["The constant term has no variable, and its sign is −: it is −6.", "Il termine costante non contiene variabili e il suo segno è −: è −6."]},
          {"q": ["Which expression means 'three less than twice x'?", "Quale espressione significa 'tre in meno del doppio di x'?"], "a": [["2x − 3", "2x − 3"], ["3 − 2x", "3 − 2x"], ["2(x − 3)", "2(x − 3)"], ["3x − 2", "3x − 2"]], "why": ["Twice x is 2x; three less means subtract 3: 2x − 3.", "Il doppio di x è 2x; tre in meno significa sottrarre 3: 2x − 3."]},
          {"q": ["If x = 5, what is 3x + 4?", "Se x = 5, quanto fa 3x + 4?"], "a": [["19", "19"], ["27", "27"], ["15", "15"], ["12", "12"]], "why": ["3 · 5 + 4 = 15 + 4 = 19.", "3 · 5 + 4 = 15 + 4 = 19."]},
          {"q": ["If x = −3, what is x² + 2x?", "Se x = −3, quanto fa x² + 2x?"], "a": [["3", "3"], ["−15", "−15"], ["−3", "−3"], ["15", "15"]], "why": ["(−3)² + 2 · (−3) = 9 − 6 = 3.", "(−3)² + 2 · (−3) = 9 − 6 = 3."]}
        ]
      },
      "summary": [
        ["A variable is a letter for a number. Terms are separated by + or −. The coefficient multiplies the variable; the constant term has no variable. To evaluate, substitute and follow the order of operations.", "Una variabile è una lettera che rappresenta un numero. I termini sono separati da + o −. Il coefficiente moltiplica la variabile; il termine costante non contiene variabili. Per calcolare, sostituisci e rispetta l'ordine delle operazioni."]
      ],
      "techniqueUnlock": {
        "id": "variable-slash",
        "name": ["Algebra Form · First Technique: Variable Slash", "Stile dell'Algebra · Prima Tecnica: Fendente della Variabile"],
        "description": ["Substitute values carefully, identify each part of an expression, and calculate in the right order.", "Sostituisci con attenzione i valori, riconosci ogni parte di un'espressione e calcola nell'ordine corretto."],
        "xpReward": 25
      }
    },
    "demon": ["Variable Imp", "Folletto della Variabile"],
    "tech": ["Algebra Form · First Technique: Variable Slash", "Stile dell'Algebra · Prima Tecnica: Fendente della Variabile"],
    "scenes": [
      {"who": "s", "text": ["<p>Today we learn to read algebra: letters are not mysterious. They are simply numbers whose values we may not know yet.</p>", "<p>Oggi impariamo a leggere l'algebra: le lettere non sono misteriose. Sono semplicemente numeri di cui forse non conosciamo ancora il valore.</p>"]},
      {"who": "y", "text": ["<p>Think of a variable as an empty box. If the box is called x, we can put a number inside it.</p><p><strong>x = 3</strong> means that the box contains 3.</p>", "<p>Pensa a una variabile come a una casella vuota. Se la casella si chiama x, possiamo inserirci un numero.</p><p><strong>x = 3</strong> significa che nella casella c'è 3.</p>"]},
      {"who": "s", "vis": "algebra-parts", "text": ["<p>Look at <strong>3x + 2</strong>. The expression has two terms: <strong>3x</strong> and <strong>2</strong>. The coefficient is <strong>3</strong>, the variable is <strong>x</strong>, and the constant term is <strong>2</strong>.</p><p>Remember: <strong>3x = 3 · x</strong>, not 3 + x.</p>", "<p>Osserva <strong>3x + 2</strong>. L'espressione ha due termini: <strong>3x</strong> e <strong>2</strong>. Il coefficiente è <strong>3</strong>, la variabile è <strong>x</strong> e il termine costante è <strong>2</strong>.</p><p>Ricorda: <strong>3x = 3 · x</strong>, non 3 + x.</p>"]},
      {"who": "y", "vis": "algebra-substitution", "text": ["<p>Now replace the letter with a number. If <strong>x = 4</strong>, then:</p><p><strong>3x + 2 = 3 · 4 + 2 = 12 + 2 = 14</strong>.</p><p>Multiply before adding.</p>", "<p>Ora sostituisci la lettera con un numero. Se <strong>x = 4</strong>, allora:</p><p><strong>3x + 2 = 3 · 4 + 2 = 12 + 2 = 14</strong>.</p><p>Moltiplica prima di sommare.</p>"]},
      {"who": "d", "vis": "algebra-parts", "text": ["<p>Common trap! In <strong>5a − 7</strong>, the constant term is <strong>−7</strong>, not +7. The sign belongs to the term.</p><p>If <strong>a = 2</strong>, then <strong>5 · 2 − 7 = 10 − 7 = 3</strong>.</p>", "<p>Errore frequente! In <strong>5a − 7</strong>, il termine costante è <strong>−7</strong>, non +7. Il segno fa parte del termine.</p><p>Se <strong>a = 2</strong>, allora <strong>5 · 2 − 7 = 10 − 7 = 3</strong>.</p>"]} ,
      {"type": "battle"}
    ],
    "quiz": [
      {"q": ["If x = 2, what is x² + 3x?", "Se x = 2, quanto fa x² + 3x?"], "a": [["10", "10"], ["8", "8"], ["14", "14"], ["7", "7"]], "why": ["2² + 3 · 2 = 4 + 6 = 10.", "2² + 3 · 2 = 4 + 6 = 10."]}
    ]
  },
  {
    "id": "m1m4",
    "arc": 21,
    "sec": "1.4",
    "pages": "21–32",
    "hue": 60,
    "horns": 2,
    "eyes": 1,
    "title": ["Powers and Divisibility", "Potenze e divisibilità"],
    "topic": ["Powers of natural numbers, multiples, divisors and prime numbers", "Potenze di numeri naturali, multipli, divisori e numeri primi"],
    
    "learning": {
      "version": 1,
      "prerequisites": [["Know the basic operations.", "Conoscere le operazioni di base."]],
      "objectives": [
        {"id": "powers", "description": ["Calculate simple powers.", "Calcolare semplici potenze."]},
        {"id": "primes", "description": ["Recognise prime numbers and divisors.", "Riconoscere i numeri primi e i divisori."]}
      ],
      "concepts": [
        {
          "id": "powers-visual",
          "title": ["Powers", "Potenze"],
          "explanation": ["A power aⁿ means multiplying a by itself n times. The exponent tells us how many times. Draw n groups of a dots.", "Una potenza aⁿ significa moltiplicare a per se stesso n volte. L’esponente dice quante volte. Disegna n gruppi di a pallini."],
          "example": ["2³ = 2 × 2 × 2 = 8. Three groups of two.", "2³ = 2 × 2 × 2 = 8. Tre gruppi di due."],
          "workedExample": {
            "scenario": ["Calculate 3² and 5¹.", "Calcola 3² e 5¹."],
            "steps": [
              ["1. 3² = 3 × 3 = 9.", "1. 3² = 3 × 3 = 9."],
              ["2. 5¹ = 5 (any number to the power 1 stays itself).", "2. 5¹ = 5 (qualsiasi numero elevato a 1 resta se stesso)."]
            ],
            "answer": ["9 and 5", "9 e 5"]
          },
          "misconceptions": [
            {"belief": ["2³ significa 2 × 3.", "2³ means 2 × 3."], "correction": ["No. The exponent tells how many times to multiply the base, not a product with the exponent.", "No. L’esponente indica quante volte moltiplicare la base, non un prodotto con l’esponente."]}
          ]
        }
      ],
      "guidedPractice": [{"id": "gp-pow", "title": ["Guided practice", "Esercitazione guidata"], "instructions": ["Calculate.", "Calcola."], "questions": [{"q": ["What is 4²?", "Quanto fa 4²?"], "a": [["16", "16"], ["8", "8"], ["6", "6"], ["12", "12"]], "why": ["4 × 4 = 16.", "4 × 4 = 16."]}]}],
      "knowledgeCheck": [{"q": ["Which of these is prime?", "Quale di questi è primo?"], "a": [["7", "7"], ["9", "9"], ["1", "1"], ["15", "15"]], "why": ["7 has only two divisors: 1 and 7.", "7 ha solo due divisori: 1 e 7."]}],
      "summary": [["A power is repeated multiplication. A prime number has exactly two distinct divisors: 1 and itself.", "Una potenza è una moltiplicazione ripetuta. Un numero primo ha esattamente due divisori distinti: 1 e se stesso."]],
            "independentPractice": [{"id":"ip4","title":["Try alone", "Prova da solo"],"instructions":["Calculate.", "Calcola."],"questions":[{"q":["5²?","5²?"],"a":[["25","25"],["10","10"],["7","7"],["15","15"]],"why":["5×5.","5×5."]}]}],
      "masteryAssessment": {"title": ["Verifica", "Check"], "instructions": ["75%.", "75%."], "passingScore": 75, "questions": [{"q": ["3²?","3²?"], "a": [["9","9"],["6","6"],["5","5"],["8","8"]], "why": ["9.","9."]}]},
"techniqueUnlock": {"id": "power-slash", "name": ["Number Form · Fourth Technique: Power Slash", "Stile dei Numeri · Quarta Tecnica: Fendente della Potenza"], "description": ["Break calculations into powers and recognise primes at a glance.", "Scomponi i calcoli in potenze e riconosci i primi a colpo d’occhio."], "xpReward": 25}
    },
"demon": ["Composite Imp", "Folletto del Composto"],
    "tech": ["Number Form · Fourth Technique: Power Slash", "Stile dei Numeri · Quarta Tecnica: Fendente della Potenza"],
    "scenes": [{"who": "s", "text": ["<p>A power is a short way to write repeated multiplication.</p>", "<p>Una potenza è un modo breve per scrivere una moltiplicazione ripetuta.</p>"]}, {"who": "y", "text": ["<p>A prime number has exactly two divisors: 1 and itself.</p>", "<p>Un numero primo ha esattamente due divisori: 1 e se stesso.</p>"]}, {"who": "d", "text": ["<p>1 is not prime and not composite.</p>", "<p>1 non è primo e non è composto.</p>"]}],
    "quiz": [{"q": ["What is 5²?", "Quanto fa 5²?"], "a": [["25", "25"], ["10", "10"], ["7", "7"], ["15", "15"]], "why": ["5 × 5 = 25.", "5 × 5 = 25."]}]
  },
  {
    "id": "m1m5",
    "arc": 21,
    "sec": "1.5",
    "pages": "33–40",
    "hue": 65,
    "horns": 3,
    "eyes": 2,
    "title": ["Chapter 1 Review", "Ripasso Capitolo 1"],
    "topic": ["Review of natural numbers, operations, properties and powers", "Ripasso di numeri naturali, operazioni, proprietà e potenze"],
    
    "learning": {
      "version": 1,
      "prerequisites": [["Having completed the previous Chapter 1 missions.", "Aver completato le missioni precedenti del Capitolo 1."]],
      "objectives": [
        {"id": "mixed-ch1", "description": ["Solve mixed calculations that combine order of operations, properties and powers.", "Risolvere calcoli misti che uniscono ordine delle operazioni, proprietà e potenze."]}
      ],
      "concepts": [
        {
          "id": "mixed-calc",
          "title": ["Calcoli misti", "Mixed calculations"],
          "explanation": ["When an expression contains powers, multiplications and additions, always follow the priority: powers first, then × and ÷, finally + and −.", "Quando in un’espressione compaiono potenze, moltiplicazioni e addizioni, segui sempre la priorità: prima potenze, poi × e ÷, infine + e −."],
          "example": ["2³ + 4 × 3 = 8 + 12 = 20.", "2³ + 4 × 3 = 8 + 12 = 20."],
          "workedExample": {
            "scenario": ["Calculate 3² + 2 × 4 − 1.", "Calcola 3² + 2 × 4 − 1."],
            "steps": [
              ["1. Power: 3² = 9.", "1. Potenza: 3² = 9."],
              ["2. Moltiplicazione: 2 × 4 = 8.", "2. Multiplication: 2 × 4 = 8."],
              ["3. Ora: 9 + 8 − 1 = 16.", "3. Now: 9 + 8 − 1 = 16."]
            ],
            "answer": ["16", "16"]
          }
        }
      ],
      "guidedPractice": [{"id": "gp-rev1", "title": ["Ripasso guidato", "Guided review"], "instructions": ["Calculate carefully.", "Calcola con attenzione."], "questions": [{"q": ["What is 2² × 3 + 1?", "Quanto fa 2² × 3 + 1?"], "a": [["13", "13"], ["10", "10"], ["7", "7"], ["16", "16"]], "why": ["4 × 3 + 1 = 13.", "4 × 3 + 1 = 13."]}]}],
      "knowledgeCheck": [{"q": ["What comes first in 6 + 2³?", "Cosa viene prima in 6 + 2³?"], "a": [["The power", "La potenza"], ["L’addizione", "The addition"], ["Indifferente", "Either"], ["The subtraction", "La sottrazione"]], "why": ["Powers are done before addition.", "Le potenze si fanno prima dell’addizione."]}],
      "summary": [["Chapter 1: ℕ, operations, properties, powers and primes. Always use the correct order and the properties to simplify.", "Capitolo 1: ℕ, operazioni, proprietà, potenze e primi. Usa sempre l’ordine corretto e le proprietà per semplificare."]],
            "independentPractice": [{"id":"ip5","title":["Try alone", "Prova da solo"],"instructions":["Calculate.", "Calcola."],"questions":[{"q":["2³ + 3×2?","2³ + 3×2?"],"a":[["14","14"],["16","16"],["10","10"],["20","20"]],"why":["8+6.","8+6."]}]}],
      "masteryAssessment": {"title": ["Verifica Cap.1", "Ch.1 check"], "instructions": ["80%.", "80%."], "passingScore": 80, "questions": [{"q": ["4² − 2×3?","4² − 2×3?"], "a": [["10","10"],["16","16"],["4","4"],["14","14"]], "why": ["16-6.","16-6."]}]},
"techniqueUnlock": {"id": "review-slash", "name": ["Number Form · Fifth Technique: Review Slash", "Stile dei Numeri · Quinta Tecnica: Fendente del Ripasso"], "description": ["Combina tutte le tecniche del Capitolo 1 in una sequenza pulita.", "Combine all Chapter 1 techniques into one clean sequence."], "xpReward": 30}
    },
"demon": ["Review Imp", "Folletto del Ripasso"],
    "tech": ["Number Form · Fifth Technique: Review Slash", "Stile dei Numeri · Quinta Tecnica: Fendente del Ripasso"],
    "scenes": [{"who": "s", "text": ["<p>This mission reviews everything from Chapter 1.</p>", "<p>Questa missione ripassa tutto il Capitolo 1.</p>"]}, {"who": "y", "text": ["<p>Remember: powers first, then multiplication and division, then addition and subtraction.</p>", "<p>Ricorda: prima le potenze, poi moltiplicazione e divisione, poi addizione e sottrazione.</p>"]}],
    "quiz": [{"q": ["What is 3² + 2 × 4?", "Quanto fa 3² + 2 × 4?"], "a": [["17", "17"], ["20", "20"], ["14", "14"], ["11", "11"]], "why": ["9 + 8 = 17.", "9 + 8 = 17."]}]
  },
  {
    "id": "m2m4",
    "arc": 22,
    "sec": "2.4",
    "pages": "111–122",
    "hue": 195,
    "horns": 2,
    "eyes": 2,
    "title": ["Comparing Rationals", "Confronto di razionali"],
    "topic": ["Ordering fractions and decimals on the number line", "Ordinare frazioni e decimali sulla retta numerica"],
    
    "learning": {
      "version": 1,
      "prerequisites": [["Know how to write rationals as fractions or decimals.", "Sapere scrivere i razionali come frazioni o decimali."]],
      "objectives": [
        {"id": "compare-rats", "description": ["Compare and order rational numbers on the line.", "Confrontare e ordinare numeri razionali sulla retta."]}
      ],
      "concepts": [
        {
          "id": "compare-visual",
          "title": ["Confronto di razionali", "Comparing rationals"],
          "explanation": ["To compare two fractions you can give them the same denominator or convert them to decimals and place them on the number line. The number further to the right is larger.", "Per confrontare due frazioni puoi ridurle allo stesso denominatore oppure convertirle in decimali e metterle sulla retta numerica. Il numero più a destra è il più grande."],
          "example": ["1/2 = 0.5 and 1/3 ≈ 0.333. On the line 0.333 is left of 0.5, so 1/3 < 1/2.", "1/2 = 0,5 e 1/3 ≈ 0,333. Sulla retta 0,333 sta a sinistra di 0,5, quindi 1/3 < 1/2."],
          "workedExample": {
            "scenario": ["Which is larger between 3/4 and 2/3?", "Qual è più grande tra 3/4 e 2/3?"],
            "steps": [
              ["1. 3/4 = 0,75.", "1. 3/4 = 0.75."],
              ["2. 2/3 ≈ 0,667.", "2. 2/3 ≈ 0.667."],
              ["3. 0.75 > 0.667, so 3/4 is larger.", "3. 0,75 > 0,667, quindi 3/4 è più grande."]
            ],
            "answer": ["3/4", "3/4"]
          }
        }
      ],
      "guidedPractice": [{"id": "gp-comp", "title": ["Guided practice", "Esercitazione guidata"], "instructions": ["Choose the larger one.", "Scegli il più grande."], "questions": [{"q": ["Which is larger: 3/4 or 2/3?", "Qual è più grande: 3/4 o 2/3?"], "a": [["3/4", "3/4"], ["2/3", "2/3"], ["They are equal", "Sono uguali"], ["Non si può dire", "Cannot tell"]], "why": ["0,75 > 0,667.", "0.75 > 0.667."]}]}],
      "knowledgeCheck": [{"q": ["On the number line numbers increase…", "Sulla retta numerica i numeri crescono…"], "a": [["Verso destra", "To the right"], ["Verso sinistra", "To the left"], ["Verso l’alto", "Upwards"], ["A caso", "Randomly"]], "why": ["The line is ordered from left to right.", "La retta è ordinata da sinistra a destra."]}],
      "summary": [["To compare rationals: same denominator or decimals. On the line the larger number is further right.", "Per confrontare razionali: stesso denominatore o decimali. Sulla retta il più grande sta più a destra."]],
            "independentPractice": [{"id":"ip24","title":["Try alone", "Prova da solo"],"instructions":["Confronta.","Compare."],"questions":[{"q":["Smaller: 1/4 or 1/5?", "Più piccolo: 1/4 o 1/5?"],"a":[["1/5","1/5"],["1/4","1/4"],["Uguali","Equal"],["Dipende","Depends"]],"why":["0.2<0.25.","0.2<0.25."]}]}],
      "masteryAssessment": {"title": ["Verifica", "Check"], "instructions": ["75%.", "75%."], "passingScore": 75, "questions": [{"q": ["Larger: 2/3 or 3/5?", "Più grande: 2/3 o 3/5?"], "a": [["2/3","2/3"],["3/5","3/5"],["Uguali","Equal"],["?","?"]], "why": ["0.667>0.6.","0.667>0.6."]}]},
"techniqueUnlock": {"id": "compare-slash", "name": ["Number Form · Seventh Technique: Compare Slash", "Stile dei Numeri · Settima Tecnica: Fendente del Confronto"], "description": ["Place and compare two rationals on the line in one go.", "Posiziona e confronta due razionali sulla retta in un colpo solo."], "xpReward": 25}
    },
"demon": ["Order Imp", "Folletto dell'Ordine"],
    "tech": ["Number Form · Seventh Technique: Compare Slash", "Stile dei Numeri · Settima Tecnica: Fendente del Confronto"],
    "scenes": [{"who": "s", "text": ["<p>To compare two fractions, rewrite them with the same denominator or as decimals.</p>", "<p>Per confrontare due frazioni riscrivile con lo stesso denominatore o come decimali.</p>"]}, {"who": "y", "text": ["<p>On the number line, larger numbers are always to the right.</p>", "<p>Sulla retta numerica i numeri più grandi stanno sempre a destra.</p>"]}],
    "quiz": [{"q": ["Which is smaller: 1/4 or 1/5?", "Qual è più piccolo: 1/4 o 1/5?"], "a": [["1/5", "1/5"], ["1/4", "1/4"], ["They are equal", "Sono uguali"], ["Depends", "Dipende"]], "why": ["1/5 = 0.2 < 0.25 = 1/4.", "1/5 = 0,2 < 0,25 = 1/4."]}]
  },
  {
    "id": "m2m5",
    "arc": 22,
    "sec": "2.5",
    "pages": "123–134",
    "hue": 200,
    "horns": 3,
    "eyes": 1,
    "title": ["Percentages", "Percentuali"],
    "topic": ["Percentages as fractions and decimals, calculating percentages", "Percentuali come frazioni e decimali, calcolo delle percentuali"],
    
    "learning": {
      "version": 1,
      "prerequisites": [["Know how to work with fractions and decimals.", "Sapere lavorare con frazioni e decimali."]],
      "objectives": [
        {"id": "percentages", "description": ["Convert percentages to fractions/decimals and calculate percentages of a quantity.", "Convertire percentuali in frazioni/decimali e calcolare percentuali di una quantità."]}
      ],
      "concepts": [
        {
          "id": "percent-visual",
          "title": ["Percentuali", "Percentages"],
          "explanation": ["Percent means “out of 100”. 25% = 25/100 = 0.25. To find 20% of a number multiply by 0.20 (or by 20 and divide by 100).", "Percento significa “su 100”. 25% = 25/100 = 0,25. Per trovare il 20% di un numero moltiplica per 0,20 (o per 20 e dividi per 100)."],
          "example": ["10% of 80 = 0.1 × 80 = 8. Imagine 80 sweets and take 1 out of 10.", "10% di 80 = 0,1 × 80 = 8. Immagina 80 caramelle e prendi 1 su 10."],
          "workedExample": {
            "scenario": ["Calculate 25% of 60.", "Calcola il 25% di 60."],
            "steps": [
              ["1. 25% = 0,25.", "1. 25% = 0.25."],
              ["2. 0,25 × 60 = 15.", "2. 0.25 × 60 = 15."]
            ],
            "answer": ["15", "15"]
          }
        }
      ],
      "guidedPractice": [{"id": "gp-perc", "title": ["Guided practice", "Esercitazione guidata"], "instructions": ["Calculate.", "Calcola."], "questions": [{"q": ["What is 10% of 80?", "Quanto è il 10% di 80?"], "a": [["8", "8"], ["10", "10"], ["18", "18"], ["0,8", "0.8"]], "why": ["0,1 × 80 = 8.", "0.1 × 80 = 8."]}]}],
      "knowledgeCheck": [{"q": ["50% is equal to…", "50% è uguale a…"], "a": [["1/2", "1/2"], ["1/5", "1/5"], ["2/5", "2/5"], ["1/50", "1/50"]], "why": ["50/100 = 1/2.", "50/100 = 1/2."]}],
      "summary": [["Percentages are fractions out of 100. Convert to a decimal and multiply to find a percentage of a quantity.", "Le percentuali sono frazioni su 100. Converti in decimale e moltiplica per trovare una percentuale di una quantità."]],
            "independentPractice": [{"id":"ip25","title":["Try alone", "Prova da solo"],"instructions":["Calculate.", "Calcola."],"questions":[{"q":["20% of 50?", "20% di 50?"],"a":[["10","10"],["20","20"],["5","5"],["25","25"]],"why":["0.2×50.","0.2×50."]}]}],
      "masteryAssessment": {"title": ["Verifica", "Check"], "instructions": ["75%.", "75%."], "passingScore": 75, "questions": [{"q": ["25% of 80?", "25% di 80?"], "a": [["20","20"],["25","25"],["16","16"],["40","40"]], "why": ["0.25×80.","0.25×80."]}]},
"techniqueUnlock": {"id": "percent-slash", "name": ["Number Form · Eighth Technique: Percent Slash", "Stile dei Numeri · Ottava Tecnica: Fendente della Percentuale"], "description": ["Turn any percentage into a decimal and cut through the calculation.", "Trasforma qualsiasi percentuale in decimale e taglia il calcolo."], "xpReward": 25}
    },
"demon": ["Percent Imp", "Folletto della Percentuale"],
    "tech": ["Number Form · Eighth Technique: Percent Slash", "Stile dei Numeri · Ottava Tecnica: Fendente della Percentuale"],
    "scenes": [{"who": "s", "text": ["<p>Percent means “out of 100”. 40% = 40/100 = 0.4.</p>", "<p>Percento significa “su 100”. 40% = 40/100 = 0,4.</p>"]}, {"who": "y", "text": ["<p>To find 15% of a number, multiply by 0.15.</p>", "<p>Per trovare il 15% di un numero moltiplica per 0,15.</p>"]}],
    "quiz": [{"q": ["What is 25% of 60?", "Quanto è il 25% di 60?"], "a": [["15", "15"], ["25", "25"], ["12", "12"], ["20", "20"]], "why": ["0.25 × 60 = 15.", "0,25 × 60 = 15."]}]
  },
  {
    "id": "m3m3",
    "arc": 23,
    "sec": "3.3",
    "pages": "169–180",
    "hue": 280,
    "horns": 2,
    "eyes": 2,
    "title": ["Subsets and Power Set", "Sottoinsiemi e insieme delle parti"],
    "topic": ["Subsets, proper subsets and the power set", "Sottoinsiemi, sottoinsiemi propri e insieme delle parti"],
    
    "learning": {
      "version": 1,
      "prerequisites": [["Know the basic set operations.", "Conoscere le operazioni di base sugli insiemi."]],
      "objectives": [
        {"id": "subsets", "description": ["Decide whether one set is a subset of another and count the subsets.", "Decidere se un insieme è sottoinsieme di un altro e contare i sottoinsiemi."]}
      ],
      "concepts": [
        {
          "id": "subset-visual",
          "title": ["Subsets", "Sottoinsiemi"],
          "explanation": ["A is a subset of B (A ⊆ B) if every element of A is also in B. The empty set is a subset of every set. A set with n elements has 2ⁿ subsets.", "A è sottoinsieme di B (A ⊆ B) se ogni elemento di A sta anche in B. L’insieme vuoto è sottoinsieme di tutti. Un insieme con n elementi ha 2ⁿ sottoinsiemi."],
          "example": ["{1,2} ⊆ {1,2,3}. The power set of {a,b} is {∅, {a}, {b}, {a,b}} (4 = 2²).", "{1,2} ⊆ {1,2,3}. L’insieme delle parti di {a,b} è {∅, {a}, {b}, {a,b}} (4 = 2²)."],
          "workedExample": {
            "scenario": ["How many subsets does {1,2,3} have?", "Quanti sottoinsiemi ha {1,2,3}?"],
            "steps": [
              ["1. n = 3 elements.", "1. n = 3 elementi."],
              ["2. 2³ = 8.", "2. 2³ = 8."]
            ],
            "answer": ["8 subsets", "8 sottoinsiemi"]
          }
        }
      ],
      "guidedPractice": [{"id": "gp-sub", "title": ["Guided practice", "Esercitazione guidata"], "instructions": ["Decidi.", "Decide."], "questions": [{"q": ["Is {1} a subset of {1,2,3}?", "{1} è sottoinsieme di {1,2,3}?"], "a": [["Sì", "Yes"], ["No", "No"], ["Only if 1 is prime", "Solo se 1 è primo"], ["Only the empty set", "Solo l’insieme vuoto"]], "why": ["Every element of {1} is in {1,2,3}.", "Ogni elemento di {1} sta in {1,2,3}."]}]}],
      "knowledgeCheck": [{"q": ["How many subsets does a set with 2 elements have?", "Quanti sottoinsiemi ha un insieme con 2 elementi?"], "a": [["4", "4"], ["2", "2"], ["3", "3"], ["8", "8"]], "why": ["2² = 4.", "2² = 4."]}],
      "summary": [["A ⊆ B if all elements of A are in B. A set with n elements has 2ⁿ subsets.", "A ⊆ B se tutti gli elementi di A stanno in B. Un insieme con n elementi ha 2ⁿ sottoinsiemi."]],
            "independentPractice": [{"id":"ip33","title":["Try alone", "Prova da solo"],"instructions":["Conta.","Count."],"questions":[{"q":["Subsets of {a,b}?", "Sottoinsiemi di {a,b}?"],"a":[["4","4"],["2","2"],["3","3"],["8","8"]],"why":["2²=4.","2²=4."]}]}],
      "masteryAssessment": {"title": ["Verifica", "Check"], "instructions": ["75%.", "75%."], "passingScore": 75, "questions": [{"q": ["Subsets of 3 elements?", "Sottoinsiemi di 3 elementi?"], "a": [["8","8"],["6","6"],["3","3"],["9","9"]], "why": ["2³=8.","2³=8."]}]},
"techniqueUnlock": {"id": "subset-slash", "name": ["Logic Form · Third Technique: Subset Slash", "Stile della Logica · Terza Tecnica: Fendente del Sottoinsieme"], "description": ["Decide subset relations and count the power set.", "Decidi le relazioni di sottoinsieme e conta l’insieme delle parti."], "xpReward": 25}
    },
"demon": ["Subset Imp", "Folletto del Sottoinsieme"],
    "tech": ["Logic Form · Third Technique: Subset Slash", "Stile della Logica · Terza Tecnica: Fendente del Sottoinsieme"],
    "scenes": [{"who": "s", "text": ["<p>A is a subset of B if every element of A also belongs to B.</p>", "<p>A è sottoinsieme di B se ogni elemento di A appartiene anche a B.</p>"]}, {"who": "y", "text": ["<p>The empty set is a subset of every set.</p>", "<p>L'insieme vuoto è sottoinsieme di ogni insieme.</p>"]}, {"who": "d", "text": ["<p>A set with n elements has 2ⁿ subsets.</p>", "<p>Un insieme con n elementi ha 2ⁿ sottoinsiemi.</p>"]}],
    "quiz": [{"q": ["How many subsets does {1,2,3} have?", "Quanti sottoinsiemi ha {1,2,3}?"], "a": [["8", "8"], ["6", "6"], ["3", "3"], ["9", "9"]], "why": ["2³ = 8.", "2³ = 8."]}]
  },
  {
    "id": "m3m4",
    "arc": 23,
    "sec": "3.4",
    "pages": "181–194",
    "hue": 285,
    "horns": 3,
    "eyes": 2,
    "title": ["Venn Diagrams and Relations", "Diagrammi di Venn e relazioni"],
    "topic": ["Using Venn diagrams to visualise set operations and simple relations", "Usare i diagrammi di Venn per visualizzare le operazioni e semplici relazioni"],
    
    "learning": {
      "version": 1,
      "prerequisites": [["Know union, intersection and subsets.", "Conoscere unione, intersezione e sottoinsiemi."]],
      "objectives": [
        {"id": "venn", "description": ["Read and draw simple Venn diagrams for two sets.", "Leggere e disegnare semplici diagrammi di Venn per due insiemi."]}
      ],
      "concepts": [
        {
          "id": "venn-visual",
          "title": ["Diagrammi di Venn", "Venn diagrams"],
          "explanation": ["Two overlapping circles. The overlapping part is the intersection. Everything covered by at least one circle is the union. The part of one circle outside the overlap is the difference.", "Due cerchi che si sovrappongono. La parte sovrapposta è l’intersezione. Tutto ciò che è coperto da almeno un cerchio è l’unione. La parte di un cerchio fuori dalla sovrapposizione è la differenza."],
          "example": ["If A and B overlap, the central zone is A ∩ B. The part of A outside the centre is A − B.", "Se A e B si sovrappongono, la zona centrale è A ∩ B. La zona di A fuori dal centro è A − B."],
          "workedExample": {
            "scenario": ["In a Venn diagram, where are the elements that are in A but not in B?", "In un diagramma di Venn, dove si trovano gli elementi che stanno in A ma non in B?"],
            "steps": [
              ["1. Look at circle A.", "1. Guarda il cerchio di A."],
              ["2. Exclude the part that overlaps B.", "2. Escludi la parte che si sovrappone a B."],
              ["3. That zone is A − B.", "3. Quella zona è A − B."]
            ],
            "answer": ["In the part of A outside the overlap.", "Nella parte di A fuori dalla sovrapposizione."]
          }
        }
      ],
      "guidedPractice": [{"id": "gp-venn", "title": ["Guided practice", "Esercitazione guidata"], "instructions": ["Interpreta.", "Interpret."], "questions": [{"q": ["The overlapping region represents…", "La regione sovrapposta rappresenta…"], "a": [["The intersection", "L’intersezione"], ["The union", "L’unione"], ["The empty set", "L’insieme vuoto"], ["The power set", "L’insieme delle parti"]], "why": ["The overlap contains the common elements.", "La sovrapposizione contiene gli elementi comuni."]}]}],
      "knowledgeCheck": [{"q": ["Which region shows elements in A but not in B?", "Quale regione mostra gli elementi in A ma non in B?"], "a": [["The part of A outside the overlap", "La parte di A fuori dalla sovrapposizione"], ["The overlap", "La sovrapposizione"], ["The part of B outside the overlap", "La parte di B fuori dalla sovrapposizione"], ["Fuori da entrambi i cerchi", "Outside both circles"]], "why": ["That region is A − B.", "Quella regione è A − B."]}],
      "summary": [["Venn diagrams make union, intersection and difference visible. The overlap is the intersection.", "I diagrammi di Venn rendono visibili unione, intersezione e differenza. La sovrapposizione è l’intersezione."]],
            "independentPractice": [{"id":"ip34","title":["Try alone", "Prova da solo"],"instructions":["Interpreta.","Interpret."],"questions":[{"q":["Part of A outside overlap?", "Parte di A fuori sovrapposizione?"],"a":[["A−B","A−B"],["A∩B","A∩B"],["A∪B","A∪B"],["B−A","B−A"]],"why":["Differenza.","Difference."]}]}],
      "masteryAssessment": {"title": ["Verifica", "Check"], "instructions": ["75%.", "75%."], "passingScore": 75, "questions": [{"q": ["Sovrapposizione = ?","Overlap = ?"], "a": [["Intersection", "Intersezione"],["Union", "Unione"],["Differenza","Difference"],["Vuoto","Empty"]], "why": ["∩.","∩."]}]},
"techniqueUnlock": {"id": "venn-slash", "name": ["Stile della Logica · Quarta Tecnica: Fendente di Venn", "Logic Form · Fourth Technique: Venn Slash"], "description": ["Visualise any two-set problem with a clean diagram.", "Visualizza qualsiasi problema a due insiemi con un diagramma pulito."], "xpReward": 25}
    },
"demon": ["Overlap Imp", "Folletto della Sovrapposizione"],
    "tech": ["Logic Form · Fourth Technique: Venn Slash", "Stile della Logica · Quarta Tecnica: Fendente di Venn"],
    "scenes": [{"who": "s", "text": ["<p>A Venn diagram uses circles to show how sets overlap.</p>", "<p>Un diagramma di Venn usa cerchi per mostrare come gli insiemi si sovrappongono.</p>"]}, {"who": "y", "text": ["<p>The overlapping region is the intersection.</p>", "<p>La regione sovrapposta è l'intersezione.</p>"]}, {"who": "d", "text": ["<p>Elements outside both circles belong to neither set.</p>", "<p>Gli elementi fuori da entrambi i cerchi non appartengono a nessuno dei due insiemi.</p>"]}],
    "quiz": [{"q": ["What does the overlap in a Venn diagram represent?", "Cosa rappresenta la sovrapposizione in un diagramma di Venn?"], "a": [["Intersection", "Intersezione"], ["Union", "Unione"], ["Difference", "Differenza"], ["Empty set", "Insieme vuoto"]], "why": ["The overlap contains elements common to both sets.", "La sovrapposizione contiene gli elementi comuni a entrambi gli insiemi."]}]
  },
  {
    "id": "m1m6",
    "arc": 21,
    "sec": "1.6",
    "pages": "41–52",
    "hue": 70,
    "horns": 2,
    "eyes": 1,
    "title": ["Integer Numbers", "Numeri interi"],
    "topic": ["Positive and negative integers, the set ℤ, and the number line", "Numeri interi positivi e negativi, l’insieme ℤ e la retta numerica"],
    "learning": {
      "version": 1,
      "prerequisites": [["Know natural numbers.", "Conoscere i numeri naturali."]],
      "objectives": [{"id": "integers", "description": ["Recognise integers and place them on the line.", "Riconoscere i numeri interi e posizionarli sulla retta."]}],
      "concepts": [{"id": "integers-visual", "title": ["Integers", "Numeri interi"], "explanation": ["Integers are … −3, −2, −1, 0, 1, 2, 3 … The set is called ℤ. They are represented on a full line, not only a half-line.", "I numeri interi sono … −3, −2, −1, 0, 1, 2, 3 … L’insieme si chiama ℤ. Si rappresentano su una retta completa, non solo una semiretta."], "example": ["−2 is left of 0. The predecessor of −3 is −4.", "−2 sta a sinistra dello 0. Il precedente di −3 è −4."], "workedExample": {"scenario": ["Place −2, 0, 3 on the line.", "Posiziona −2, 0, 3 sulla retta."], "steps": [["1. Draw the line with arrow to the right.", "1. Disegna la retta con freccia a destra."], ["2. Mark 0 in the centre.", "2. Segna lo 0 al centro."], ["3. −2 a sinistra, 3 a destra.", "3. −2 on the left, 3 on the right."]], "answer": ["−2 < 0 < 3.", "−2 < 0 < 3."]}, "misconceptions": [{"belief": ["Negative numbers are larger than positive ones.", "I numeri negativi sono più grandi dei positivi."], "correction": ["No. On the line negatives are left of 0, so they are smaller.", "No. Sulla retta i negativi stanno a sinistra dello 0, quindi sono più piccoli."]}]}],
      "guidedPractice": [{"id": "gp-int", "title": ["Guided practice", "Esercitazione guidata"], "instructions": ["Scegli.", "Choose."], "questions": [{"q": ["Which is larger: −5 or −2?", "Qual è più grande: −5 o −2?"], "a": [["−2", "−2"], ["−5", "−5"], ["Uguali", "Equal"], ["Dipende", "Depends"]], "why": ["−2 sta più a destra.", "−2 is further right."]}]}],
      "independentPractice": [{"id": "ip-int", "title": ["Try alone", "Prova da solo"], "instructions": ["Ordina.", "Order."], "questions": [{"q": ["Ordina: 1, −3, 0, −1.", "Order: 1, −3, 0, −1."], "a": [["−3, −1, 0, 1", "−3, −1, 0, 1"], ["1, 0, −1, −3", "1, 0, −1, −3"], ["0, −1, 1, −3", "0, −1, 1, −3"], ["−1, −3, 0, 1", "−1, −3, 0, 1"]], "why": ["Left to right on the line.", "Da sinistra a destra sulla retta."]}]}],
      "knowledgeCheck": [{"q": ["The symbol for integers is…", "Il simbolo degli interi è…"], "a": [["ℤ", "ℤ"], ["ℕ", "ℕ"], ["ℚ", "ℚ"], ["ℝ", "ℝ"]], "why": ["ℤ.", "ℤ."]}],
      "summary": [["ℤ = {…, −2, −1, 0, 1, 2, …}. It is represented on the full line. Negatives are left of 0.", "ℤ = {…, −2, −1, 0, 1, 2, …}. Si rappresenta sulla retta completa. I negativi stanno a sinistra dello 0."]],
      "masteryAssessment": {"title": ["Mastery check", "Verifica di padronanza"], "instructions": ["At least 75%.", "Almeno il 75%."], "passingScore": 75, "questions": [{"q": ["Which is smaller: −4 or −1?", "Qual è più piccolo: −4 o −1?"], "a": [["−4", "−4"], ["−1", "−1"], ["Uguali", "Equal"], ["Dipende", "Depends"]], "why": ["−4 sta più a sinistra.", "−4 is further left."]}]},
      "techniqueUnlock": {"id": "integer-slash", "name": ["Number Form · Sixth Technique: Integer Slash", "Stile dei Numeri · Sesta Tecnica: Fendente dell’Intero"], "description": ["Place any integer on the line and compare it.", "Posiziona qualsiasi intero sulla retta e confrontalo."], "xpReward": 25}
    },
    "demon": ["Negative Imp", "Folletto del Negativo"],
    "tech": ["Number Form · Sixth Technique: Integer Slash", "Stile dei Numeri · Sesta Tecnica: Fendente dell’Intero"],
    "scenes": [{"vis": "math-integers-line", "who": "s", "text": ["<p>Integers also include the negatives. The set is called ℤ.</p>", "<p>I numeri interi comprendono anche i negativi. L’insieme si chiama ℤ.</p>"]}, {"who": "y", "text": ["<p>On the line numbers increase from left to right. −5 < −2 < 0 < 3.</p>", "<p>Sulla retta i numeri crescono da sinistra a destra. −5 < −2 < 0 < 3.</p>"]}],
    "quiz": [{"q": ["Which is larger: −3 or 1?", "Qual è più grande: −3 o 1?"], "a": [["1", "1"], ["−3", "−3"], ["Uguali", "Equal"], ["Dipende", "Depends"]], "why": ["1 is right of −3.", "1 sta a destra di −3."]}]
  },
  {
    "id": "m2m6",
    "arc": 22,
    "sec": "2.6",
    "pages": "135–146",
    "hue": 205,
    "horns": 2,
    "eyes": 2,
    "title": ["Proportions", "Proporzioni"],
    "topic": ["What a proportion is and the fundamental property", "Che cos’è una proporzione e la proprietà fondamentale"],
    "learning": {
      "version": 1,
      "prerequisites": [["Know fractions and percentages.", "Conoscere le frazioni e le percentuali."]],
      "objectives": [{"id": "proportions", "description": ["Recognise a proportion and use the fundamental property.", "Riconoscere una proporzione e usare la proprietà fondamentale."]}],
      "concepts": [{"id": "prop-concept", "title": ["Proporzioni", "Proportions"], "explanation": ["A proportion is an equality of two ratios: a:b = c:d. The fundamental property says the product of the means equals the product of the extremes: a×d = b×c.", "Una proporzione è un’uguaglianza di due rapporti: a:b = c:d. La proprietà fondamentale dice che il prodotto dei medi è uguale al prodotto degli estremi: a×d = b×c."], "example": ["2:4 = 3:6 because 2×6 = 4×3 = 12.", "2:4 = 3:6 perché 2×6 = 4×3 = 12."], "workedExample": {"scenario": ["Check whether 3:5 = 6:10 is a proportion.", "Verifica se 3:5 = 6:10 è una proporzione."], "steps": [["1. Product of extremes: 3 × 10 = 30.", "1. Prodotto degli estremi: 3 × 10 = 30."], ["2. Prodotto dei medi: 5 × 6 = 30.", "2. Product of means: 5 × 6 = 30."], ["3. They are equal, so it is a proportion.", "3. Sono uguali, quindi è una proporzione."]], "answer": ["Sì, 3:5 = 6:10.", "Yes, 3:5 = 6:10."]}}],
      "guidedPractice": [{"id": "gp-prop", "title": ["Guided practice", "Esercitazione guidata"], "instructions": ["Verifica.", "Check."], "questions": [{"q": ["Is 2:3 = 4:6 a proportion?", "2:3 = 4:6 è una proporzione?"], "a": [["Sì", "Yes"], ["No", "No"], ["Only if even", "Solo se pari"], ["Dipende", "Depends"]], "why": ["2×6 = 3×4 = 12.", "2×6 = 3×4 = 12."]}]}],
      "independentPractice": [{"id": "ip-prop", "title": ["Try alone", "Prova da solo"], "instructions": ["Find the missing term.", "Trova il termine mancante."], "questions": [{"q": ["3:x = 6:8. What is x?", "3:x = 6:8. Quanto vale x?"], "a": [["4", "4"], ["2", "2"], ["5", "5"], ["6", "6"]], "why": ["3×8 = x×6 → 24 = 6x → x = 4.", "3×8 = x×6 → 24 = 6x → x = 4."]}]}],
      "knowledgeCheck": [{"q": ["In a:b = c:d the means are…", "In a:b = c:d i medi sono…"], "a": [["b and c", "b e c"], ["a and d", "a e d"], ["a and b", "a e b"], ["c and d", "c e d"]], "why": ["The means are the two middle terms.", "I medi sono i due termini centrali."]}],
      "summary": [["A proportion is an equality of ratios. Fundamental property: product of means = product of extremes.", "Una proporzione è un’uguaglianza di rapporti. La proprietà fondamentale: prodotto dei medi = prodotto degli estremi."]],
      "masteryAssessment": {"title": ["Mastery check", "Verifica di padronanza"], "instructions": ["At least 75%.", "Almeno il 75%."], "passingScore": 75, "questions": [{"q": ["4:6 = 2:3?", "4:6 = 2:3?"], "a": [["Sì", "Yes"], ["No", "No"], ["Only if integers", "Solo se interi"], ["Dipende", "Depends"]], "why": ["4×3 = 6×2 = 12.", "4×3 = 6×2 = 12."]}]},
      "techniqueUnlock": {"id": "proportion-slash", "name": ["Number Form · Ninth Technique: Proportion Slash", "Stile dei Numeri · Nona Tecnica: Fendente della Proporzione"], "description": ["Check or complete any proportion with the fundamental property.", "Verifica o completa qualsiasi proporzione con la proprietà fondamentale."], "xpReward": 25}
    },
    "demon": ["Ratio Imp", "Folletto del Rapporto"],
    "tech": ["Number Form · Ninth Technique: Proportion Slash", "Stile dei Numeri · Nona Tecnica: Fendente della Proporzione"],
    "scenes": [{"who": "s", "text": ["<p>A proportion is an equality of two ratios: a:b = c:d.</p>", "<p>Una proporzione è un’uguaglianza tra due rapporti: a:b = c:d.</p>"]}, {"who": "y", "text": ["<p>The fundamental property says that a × d = b × c.</p>", "<p>La proprietà fondamentale dice che a × d = b × c.</p>"]}],
    "quiz": [{"q": ["Is 2:4 = 5:10 a proportion?", "2:4 = 5:10 è una proporzione?"], "a": [["Sì", "Yes"], ["No", "No"], ["Solo a volte", "Only sometimes"], ["Mai", "Never"]], "why": ["2×10 = 4×5 = 20.", "2×10 = 4×5 = 20."]}]
  },
  {
    "id": "m3m5",
    "arc": 23,
    "sec": "3.5",
    "pages": "195–210",
    "hue": 290,
    "horns": 2,
    "eyes": 1,
    "title": ["Basic Logic", "Logica di base"],
    "topic": ["Propositions, negation, and, or", "Proposizioni, negazione, e, o"],
    "learning": {
      "version": 1,
      "prerequisites": [["Know sets and Venn diagrams.", "Conoscere gli insiemi e i diagrammi di Venn."]],
      "objectives": [{"id": "logic", "description": ["Recognise true or false propositions and use the connectives not, and, or.", "Riconoscere proposizioni vere o false e usare i connettivi non, e, o."]}],
      "concepts": [{"id": "logic-concept", "title": ["Propositions and connectives", "Proposizioni e connettivi"], "explanation": ["A proposition is a sentence that is true or false. Negation ¬p flips the value. p ∧ q (and) is true only if both are true. p ∨ q (or) is true if at least one is true.", "Una proposizione è una frase che è vera o falsa. La negazione ¬p inverte il valore. p ∧ q (e) è vera solo se entrambe sono vere. p ∨ q (o) è vera se almeno una è vera."], "example": ["“2 is even” is true. “2 is odd” is false. “2 is even and 3 is prime” is true.", "“2 è pari” è vera. “2 è dispari” è falsa. “2 è pari e 3 è primo” è vera."], "workedExample": {"scenario": ["p: “5 > 3” (true), q: “5 is even” (false). What are p ∧ q and p ∨ q?", "p: “5 > 3” (vera), q: “5 è pari” (falsa). Quanto valgono p ∧ q e p ∨ q?"], "steps": [["1. p ∧ q is true only if both are true → false.", "1. p ∧ q è vera solo se entrambe sono vere → falsa."], ["2. p ∨ q is true if at least one is true → true.", "2. p ∨ q è vera se almeno una è vera → vera."]], "answer": ["p ∧ q false, p ∨ q true.", "p ∧ q falsa, p ∨ q vera."]}}],
      "guidedPractice": [{"id": "gp-logic", "title": ["Guided practice", "Esercitazione guidata"], "instructions": ["Valuta.", "Evaluate."], "questions": [{"q": ["If p is true and q is false, p ∧ q is…", "Se p è vera e q è falsa, p ∧ q è…"], "a": [["False", "Falsa"], ["True", "Vera"], ["Dipende", "Depends"], ["Né vera né falsa", "Neither"]], "why": ["L’and richiede entrambe vere.", "And requires both true."]}]}],
      "independentPractice": [{"id": "ip-logic", "title": ["Try alone", "Prova da solo"], "instructions": ["Valuta.", "Evaluate."], "questions": [{"q": ["If p is false, ¬p is…", "Se p è falsa, ¬p è…"], "a": [["True", "Vera"], ["False", "Falsa"], ["Uguale a p", "Same as p"], ["Dipende", "Depends"]], "why": ["La negazione inverte.", "Negation flips."]}]}],
      "knowledgeCheck": [{"q": ["p ∨ q is true when…", "p ∨ q è vera quando…"], "a": [["At least one is true", "Almeno una è vera"], ["Both are true", "Entrambe sono vere"], ["Entrambe sono false", "Both are false"], ["None is true", "Nessuna è vera"]], "why": ["Or is true if at least one proposition is true.", "L’or è vero se almeno una proposizione è vera."]}],
      "summary": [["A proposition is true or false. ¬ flips, ∧ requires both true, ∨ requires at least one true.", "Una proposizione è vera o falsa. ¬ inverte, ∧ richiede entrambe vere, ∨ richiede almeno una vera."]],
      "masteryAssessment": {"title": ["Mastery check", "Verifica di padronanza"], "instructions": ["At least 75%.", "Almeno il 75%."], "passingScore": 75, "questions": [{"q": ["If p and q are both true, p ∧ q is…", "Se p e q sono entrambe vere, p ∧ q è…"], "a": [["True", "Vera"], ["False", "Falsa"], ["Dipende", "Depends"], ["Né vera né falsa", "Neither"]], "why": ["Entrambe vere → and vera.", "Both true → and true."]}]},
      "techniqueUnlock": {"id": "logic-slash", "name": ["Stile della Logica · Quinta Tecnica: Fendente Logico", "Logic Form · Fifth Technique: Logic Slash"], "description": ["Evaluate any compound proposition with not, and, or.", "Valuta qualsiasi proposizione composta con non, e, o."], "xpReward": 25}
    },
    "demon": ["Logic Imp", "Folletto della Logica"],
    "tech": ["Stile della Logica · Quinta Tecnica: Fendente Logico", "Logic Form · Fifth Technique: Logic Slash"],
    "scenes": [{"who": "s", "text": ["<p>A proposition is a sentence that can only be true or false.</p>", "<p>Una proposizione è una frase che può essere solo vera o falsa.</p>"]}, {"who": "y", "text": ["<p>“And” (∧) is true only if both parts are true. “Or” (∨) is true if at least one is true.</p>", "<p>“E” (∧) è vero solo se entrambe le parti sono vere. “O” (∨) è vero se almeno una è vera.</p>"]}],
    "quiz": [{"q": ["The negation of a true proposition is…", "La negazione di una proposizione vera è…"], "a": [["False", "Falsa"], ["True", "Vera"], ["The same", "Uguale"], ["Dipende", "Depends"]], "why": ["Negation flips the truth value.", "La negazione inverte il valore di verità."]}]
  },
  {
    "id": "m1m7",
    "arc": 21,
    "sec": "1.7",
    "pages": "53–64",
    "hue": 75,
    "horns": 2,
    "eyes": 2,
    "title": ["MCD and mcm", "MCD e mcm"],
    "topic": ["Greatest common divisor and least common multiple", "Massimo comune divisore e minimo comune multiplo"],
    "learning": {
      "version": 1,
      "prerequisites": [["Know multiples, divisors and primes.", "Conoscere multipli, divisori e numeri primi."]],
      "objectives": [{"id": "mcd-mcm", "description": ["Calculate GCD and LCM of two numbers.", "Calcolare MCD e mcm di due numeri."]}],
      "concepts": [{"id": "mcd-concept", "title": ["GCD and LCM", "MCD e mcm"], "explanation": ["The GCD is the largest common divisor. The LCM is the smallest common multiple. They can be found with prime factorisation.", "Il MCD è il più grande divisore comune. Il mcm è il più piccolo multiplo comune. Si possono trovare con la scomposizione in fattori primi."], "example": ["12 = 2²×3, 18 = 2×3². MCD = 2×3 = 6. mcm = 2²×3² = 36.", "12 = 2²×3, 18 = 2×3². GCD = 2×3 = 6. LCM = 2²×3² = 36."], "workedExample": {"scenario": ["Calculate GCD and LCM of 8 and 12.", "Calcola MCD e mcm di 8 e 12."], "steps": [["1. 8 = 2³, 12 = 2²×3.", "1. 8 = 2³, 12 = 2²×3."], ["2. MCD = 2² = 4.", "2. GCD = 2² = 4."], ["3. mcm = 2³×3 = 24.", "3. LCM = 2³×3 = 24."]], "answer": ["MCD = 4, mcm = 24.", "GCD = 4, LCM = 24."]}}],
      "guidedPractice": [{"id": "gp-mcd", "title": ["Guided practice", "Esercitazione guidata"], "instructions": ["Calculate.", "Calcola."], "questions": [{"q": ["GCD of 6 and 9?", "MCD di 6 e 9?"], "a": [["3", "3"], ["6", "6"], ["9", "9"], ["18", "18"]], "why": ["3 is the largest common divisor.", "3 è il più grande divisore comune."]}]}],
      "independentPractice": [{"id": "ip-mcd", "title": ["Try alone", "Prova da solo"], "instructions": ["Calculate.", "Calcola."], "questions": [{"q": ["LCM of 4 and 6?", "mcm di 4 e 6?"], "a": [["12", "12"], ["24", "24"], ["6", "6"], ["4", "4"]], "why": ["12 is the smallest common multiple.", "12 è il più piccolo multiplo comune."]}]}],
      "knowledgeCheck": [{"q": ["The GCD of two distinct primes is…", "Il MCD di due numeri primi distinti è…"], "a": [["1", "1"], ["Il loro prodotto", "Their product"], ["The smaller one", "Il più piccolo"], ["0", "0"]], "why": ["They have no common divisors except 1.", "Non hanno divisori comuni tranne 1."]}],
      "summary": [["GCD = largest common divisor. LCM = smallest common multiple. Found with prime factorisation.", "MCD = più grande divisore comune. mcm = più piccolo multiplo comune. Si trovano con la scomposizione in primi."]],
      "masteryAssessment": {"title": ["Mastery check", "Verifica di padronanza"], "instructions": ["At least 75%.", "Almeno il 75%."], "passingScore": 75, "questions": [{"q": ["GCD of 15 and 25?", "MCD di 15 e 25?"], "a": [["5", "5"], ["15", "15"], ["25", "25"], ["75", "75"]], "why": ["5.", "5."]}]},
      "techniqueUnlock": {"id": "mcd-slash", "name": ["Number Form · Seventh Technique: GCD Slash", "Stile dei Numeri · Settima Tecnica: Fendente MCD"], "description": ["Factorise into primes and find GCD and LCM on the fly.", "Scomponi in primi e trova MCD e mcm al volo."], "xpReward": 25}
    },
    "demon": ["Divisor Imp", "Folletto del Divisore"],
    "tech": ["Number Form · Seventh Technique: GCD Slash", "Stile dei Numeri · Settima Tecnica: Fendente MCD"],
    "scenes": [{"vis": "math-mcd-mcm", "who": "s", "text": ["<p>The greatest common divisor (GCD) is the largest number that divides both.</p>", "<p>Il massimo comune divisore (MCD) è il più grande numero che divide entrambi.</p>"]}, {"who": "y", "text": ["<p>The least common multiple (LCM) is the smallest number that is a multiple of both.</p>", "<p>Il minimo comune multiplo (mcm) è il più piccolo numero che è multiplo di entrambi.</p>"]}],
    "quiz": [{"q": ["GCD of 8 and 12?", "MCD di 8 e 12?"], "a": [["4", "4"], ["2", "2"], ["8", "8"], ["24", "24"]], "why": ["4 is the largest common divisor.", "4 è il più grande divisore comune."]}]
  },
  {
    "id": "m1m8",
    "arc": 21,
    "sec": "1.8",
    "pages": "65–76",
    "hue": 80,
    "horns": 3,
    "eyes": 1,
    "title": ["Divisibility Rules", "Regole di divisibilità"],
    "topic": ["Simple rules to check divisibility by 2, 3, 5, 9, 10", "Regole semplici per verificare la divisibilità per 2, 3, 5, 9, 10"],
    "learning": {
      "version": 1,
      "prerequisites": [["Know multiples and divisors.", "Conoscere multipli e divisori."]],
      "objectives": [{"id": "div-rules", "description": ["Use the divisibility rules for 2, 3, 5, 9 and 10.", "Usare le regole di divisibilità per 2, 3, 5, 9 e 10."]}],
      "concepts": [{"id": "div-rules-concept", "title": ["Regole di divisibilità", "Divisibility rules"], "explanation": ["A number is divisible by 2 if even, by 5 if it ends in 0 or 5, by 10 if it ends in 0, by 3 (and 9) if the sum of its digits is divisible by 3 (or 9).", "Un numero è divisibile per 2 se è pari, per 5 se finisce per 0 o 5, per 10 se finisce per 0, per 3 (e 9) se la somma delle cifre è divisibile per 3 (o 9)."], "example": ["123: 1+2+3=6, divisible by 3. 45 ends in 5, divisible by 5.", "123: 1+2+3=6, divisibile per 3. 45 finisce per 5, divisibile per 5."], "workedExample": {"scenario": ["Is 246 divisible by 2 and by 3?", "246 è divisibile per 2 e per 3?"], "steps": [["1. Ends in 6 → even → divisible by 2.", "1. Finisce per 6 → pari → divisibile per 2."], ["2. 2+4+6=12, 12÷3=4 → divisible by 3.", "2. 2+4+6=12, 12÷3=4 → divisibile per 3."]], "answer": ["Yes for both.", "Sì per entrambi."]}}],
      "guidedPractice": [{"id": "gp-div", "title": ["Guided practice", "Esercitazione guidata"], "instructions": ["Decidi.", "Decide."], "questions": [{"q": ["Is 315 divisible by 5?", "315 è divisibile per 5?"], "a": [["Sì", "Yes"], ["No", "No"], ["Only by 3", "Solo per 3"], ["Only by 2", "Solo per 2"]], "why": ["Finisce per 5.", "Ends in 5."]}]}],
      "independentPractice": [{"id": "ip-div", "title": ["Try alone", "Prova da solo"], "instructions": ["Verifica.", "Check."], "questions": [{"q": ["Is 144 divisible by 9?", "144 è divisibile per 9?"], "a": [["Sì", "Yes"], ["No", "No"], ["Only by 3", "Solo per 3"], ["Only by 2", "Solo per 2"]], "why": ["1+4+4=9, divisible by 9.", "1+4+4=9, divisibile per 9."]}]}],
      "knowledgeCheck": [{"q": ["A number is divisible by 10 if…", "Un numero è divisibile per 10 se…"], "a": [["Finisce per 0", "It ends in 0"], ["It is even", "È pari"], ["Digit sum is 10", "La somma delle cifre è 10"], ["Finisce per 5", "It ends in 5"]], "why": ["Deve finire per 0.", "It must end in 0."]}],
      "summary": [["Quick rules: 2 (even), 5 (0 or 5), 10 (0), 3 and 9 (digit sum).", "Regole rapide: 2 (pari), 5 (0 o 5), 10 (0), 3 e 9 (somma delle cifre)."]],
      "masteryAssessment": {"title": ["Mastery check", "Verifica di padronanza"], "instructions": ["At least 75%.", "Almeno il 75%."], "passingScore": 75, "questions": [{"q": ["Is 126 divisible by 3?", "126 è divisibile per 3?"], "a": [["Sì", "Yes"], ["No", "No"], ["Only by 2", "Solo per 2"], ["Only by 9", "Solo per 9"]], "why": ["1+2+6=9, divisible by 3.", "1+2+6=9, divisibile per 3."]}]},
      "techniqueUnlock": {"id": "div-slash", "name": ["Number Form · Eighth Technique: Divisibility Slash", "Stile dei Numeri · Ottava Tecnica: Fendente della Divisibilità"], "description": ["Check divisibility at a glance with the rules.", "Controlla la divisibilità a colpo d’occhio con le regole."], "xpReward": 25}
    },
    "demon": ["Digit Imp", "Folletto della Cifra"],
    "tech": ["Number Form · Eighth Technique: Divisibility Slash", "Stile dei Numeri · Ottava Tecnica: Fendente della Divisibilità"],
    "scenes": [{"who": "s", "text": ["<p>There are quick rules to know if a number is divisible by 2, 3, 5, 9 or 10 without dividing.</p>", "<p>Ci sono regole rapide per sapere se un numero è divisibile per 2, 3, 5, 9 o 10 senza fare la divisione.</p>"]}, {"who": "y", "text": ["<p>For 3 and 9 we add the digits. For 2, 5 and 10 we look at the last digit.</p>", "<p>Per 3 e 9 si somma le cifre. Per 2, 5 e 10 si guarda l’ultima cifra.</p>"]}],
    "quiz": [{"q": ["Which number is divisible by 9?", "Quale numero è divisibile per 9?"], "a": [["18", "18"], ["14", "14"], ["22", "22"], ["25", "25"]], "why": ["1+8=9.", "1+8=9."]}]
  },
  {
    "id": "m2m7",
    "arc": 22,
    "sec": "2.7",
    "pages": "147–158",
    "hue": 210,
    "horns": 2,
    "eyes": 1,
    "title": ["Powers with Negative Exponents", "Potenze con esponente negativo"],
    "topic": ["What a negative exponent means", "Che cosa significa un esponente negativo"],
    "learning": {
      "version": 1,
      "prerequisites": [["Know powers and fractions.", "Conoscere le potenze e le frazioni."]],
      "objectives": [{"id": "neg-exp", "description": ["Calculate powers with negative exponents.", "Calcolare potenze con esponente negativo."]}],
      "concepts": [{"id": "neg-exp-concept", "title": ["Negative exponent", "Esponente negativo"], "explanation": ["a⁻ⁿ = 1 / aⁿ (with a ≠ 0). A negative exponent means the reciprocal of the positive power.", "a⁻ⁿ = 1 / aⁿ (con a ≠ 0). L’esponente negativo indica il reciproco della potenza positiva."], "example": ["2⁻³ = 1 / 2³ = 1/8. 10⁻² = 1/100 = 0,01.", "2⁻³ = 1 / 2³ = 1/8. 10⁻² = 1/100 = 0.01."], "workedExample": {"scenario": ["Calculate 5⁻².", "Calcola 5⁻²."], "steps": [["1. 5⁻² = 1 / 5².", "1. 5⁻² = 1 / 5²."], ["2. 5² = 25.", "2. 5² = 25."], ["3. 1/25.", "3. 1/25."]], "answer": ["1/25", "1/25"]}}],
      "guidedPractice": [{"id": "gp-neg", "title": ["Guided practice", "Esercitazione guidata"], "instructions": ["Calculate.", "Calcola."], "questions": [{"q": ["What is 3⁻¹?", "Quanto fa 3⁻¹?"], "a": [["1/3", "1/3"], ["-3", "-3"], ["3", "3"], ["0", "0"]], "why": ["1/3¹ = 1/3.", "1/3¹ = 1/3."]}]}],
      "independentPractice": [{"id": "ip-neg", "title": ["Try alone", "Prova da solo"], "instructions": ["Calculate.", "Calcola."], "questions": [{"q": ["What is 10⁻³?", "Quanto fa 10⁻³?"], "a": [["0,001", "0.001"], ["-1000", "-1000"], ["1000", "1000"], ["0,1", "0.1"]], "why": ["1/1000 = 0,001.", "1/1000 = 0.001."]}]}],
      "knowledgeCheck": [{"q": ["a⁻ⁿ è uguale a…", "a⁻ⁿ equals…"], "a": [["1/aⁿ", "1/aⁿ"], ["-aⁿ", "-aⁿ"], ["aⁿ", "aⁿ"], ["0", "0"]], "why": ["It is the reciprocal of the positive power.", "È il reciproco della potenza positiva."]}],
      "summary": [["A negative exponent means the reciprocal: a⁻ⁿ = 1/aⁿ.", "Un esponente negativo indica il reciproco: a⁻ⁿ = 1/aⁿ."]],
      "masteryAssessment": {"title": ["Mastery check", "Verifica di padronanza"], "instructions": ["At least 75%.", "Almeno il 75%."], "passingScore": 75, "questions": [{"q": ["2⁻² = ?", "2⁻² = ?"], "a": [["1/4", "1/4"], ["-4", "-4"], ["4", "4"], ["1/2", "1/2"]], "why": ["1/4.", "1/4."]}]},
      "techniqueUnlock": {"id": "neg-exp-slash", "name": ["Number Form · Tenth Technique: Exponent Slash", "Stile dei Numeri · Decima Tecnica: Fendente dell’Esponente"], "description": ["Turn any negative exponent into a fraction.", "Trasforma qualsiasi esponente negativo in una frazione."], "xpReward": 25}
    },
    "demon": ["Exponent Imp", "Folletto dell’Esponente"],
    "tech": ["Number Form · Tenth Technique: Exponent Slash", "Stile dei Numeri · Decima Tecnica: Fendente dell’Esponente"],
    "scenes": [{"who": "s", "text": ["<p>A negative exponent means “take the reciprocal of the positive power”.</p>", "<p>Un esponente negativo significa “fai il reciproco della potenza positiva”.</p>"]}, {"who": "y", "text": ["<p>2⁻³ = 1/8. It is not a negative number!</p>", "<p>2⁻³ = 1/8. Non è un numero negativo!</p>"]}],
    "quiz": [{"q": ["What is 4⁻¹?", "Quanto fa 4⁻¹?"], "a": [["1/4", "1/4"], ["-4", "-4"], ["4", "4"], ["0", "0"]], "why": ["1/4.", "1/4."]}]
  },
  {
    "id": "m2m8",
    "arc": 22,
    "sec": "2.8",
    "pages": "159–170",
    "hue": 215,
    "horns": 3,
    "eyes": 2,
    "title": ["Approximate Calculation", "Calcolo approssimato"],
    "topic": ["Rounding and estimating results", "Arrotondamento e stima dei risultati"],
    "learning": {
      "version": 1,
      "prerequisites": [["Know decimals.", "Conoscere i decimali."]],
      "objectives": [{"id": "approx", "description": ["Round numbers and estimate the result of a calculation.", "Arrotondare numeri e stimare il risultato di un calcolo."]}],
      "concepts": [{"id": "approx-concept", "title": ["Arrotondamento", "Rounding"], "explanation": ["To round we look at the next digit: 0-4 leave it, 5-9 increase by 1. Estimating means replacing numbers with nearby easier values.", "Per arrotondare si guarda la cifra successiva: se è 0-4 si lascia, se è 5-9 si aumenta di 1. Stimare significa sostituire i numeri con valori vicini più facili."], "example": ["3.47 rounded to tenths is 3.5. 48 × 21 ≈ 50 × 20 = 1000.", "3,47 arrotondato ai decimi è 3,5. 48 × 21 ≈ 50 × 20 = 1000."], "workedExample": {"scenario": ["Round 6.38 to units and estimate 19 × 31.", "Arrotonda 6,38 alle unità e stima 19 × 31."], "steps": [["1. 6.38 → tenths digit is 3 < 5 → 6.", "1. 6,38 → la cifra dei decimi è 3 < 5 → 6."], ["2. 19 ≈ 20, 31 ≈ 30 → 20 × 30 = 600.", "2. 19 ≈ 20, 31 ≈ 30 → 20 × 30 = 600."]], "answer": ["6 and about 600.", "6 e circa 600."]}}],
      "guidedPractice": [{"id": "gp-approx", "title": ["Guided practice", "Esercitazione guidata"], "instructions": ["Arrotonda.", "Round."], "questions": [{"q": ["2,64 arrotondato ai decimi?", "2.64 rounded to tenths?"], "a": [["2,6", "2.6"], ["2,7", "2.7"], ["2,60", "2.60"], ["3", "3"]], "why": ["4 < 5, quindi resta 2,6.", "4 < 5, so it stays 2.6."]}]}],
      "independentPractice": [{"id": "ip-approx", "title": ["Try alone", "Prova da solo"], "instructions": ["Stima.", "Estimate."], "questions": [{"q": ["Stima 48 + 53.", "Estimate 48 + 53."], "a": [["100", "100"], ["90", "90"], ["110", "110"], ["80", "80"]], "why": ["50 + 50 = 100.", "50 + 50 = 100."]}]}],
      "knowledgeCheck": [{"q": ["To round we look at…", "Per arrotondare si guarda…"], "a": [["The next digit", "La cifra successiva"], ["Only the first digit", "Solo la prima cifra"], ["The number of digits", "Il numero di cifre"], ["Nothing", "Niente"]], "why": ["We look at the immediately following digit.", "Si guarda la cifra immediatamente successiva."]}],
      "summary": [["Rounding: 0-4 leave, 5-9 increase. Estimating: replace with nearby easy numbers.", "Arrotondare: 0-4 lascia, 5-9 aumenta. Stimare: sostituisci con numeri vicini facili."]],
      "masteryAssessment": {"title": ["Mastery check", "Verifica di padronanza"], "instructions": ["At least 75%.", "Almeno il 75%."], "passingScore": 75, "questions": [{"q": ["7,85 arrotondato alle unità?", "7.85 rounded to units?"], "a": [["8", "8"], ["7", "7"], ["7,9", "7.9"], ["7,8", "7.8"]], "why": ["8 ≥ 5 → 8.", "8 ≥ 5 → 8."]}]},
      "techniqueUnlock": {"id": "approx-slash", "name": ["Number Form · Eleventh Technique: Estimate Slash", "Stile dei Numeri · Undicesima Tecnica: Fendente della Stima"], "description": ["Round and estimate any calculation in seconds.", "Arrotonda e stima qualsiasi calcolo in pochi secondi."], "xpReward": 25}
    },
    "demon": ["Rounding Imp", "Folletto dell’Arrotondamento"],
    "tech": ["Number Form · Eleventh Technique: Estimate Slash", "Stile dei Numeri · Undicesima Tecnica: Fendente della Stima"],
    "scenes": [{"who": "s", "text": ["<p>Rounding means replacing a number with a nearby simpler one.</p>", "<p>Arrotondare significa sostituire un numero con uno vicino più semplice.</p>"]}, {"who": "y", "text": ["<p>If the next digit is 5 or more, we increase by 1. Otherwise we leave it.</p>", "<p>Se la cifra successiva è 5 o più, aumentiamo di 1. Altrimenti lasciamo com’è.</p>"]}],
    "quiz": [{"q": ["3.2 rounded to units is…", "3,2 arrotondato alle unità è…"], "a": [["3", "3"], ["4", "4"], ["3,0", "3.0"], ["2", "2"]], "why": ["2 < 5.", "2 < 5."]}]
  },
  {
    "id": "m3m6",
    "arc": 23,
    "sec": "3.6",
    "pages": "211–222",
    "hue": 295,
    "horns": 2,
    "eyes": 2,
    "title": ["Relations", "Relazioni"],
    "topic": ["What a relation is and simple examples", "Che cos’è una relazione e semplici esempi"],
    "learning": {
      "version": 1,
      "prerequisites": [["Know sets.", "Conoscere gli insiemi."]],
      "objectives": [{"id": "relations", "description": ["Recognise a relation between two sets and represent it.", "Riconoscere una relazione tra due insiemi e rappresentarla."]}],
      "concepts": [{"id": "rel-concept", "title": ["Relazioni", "Relations"], "explanation": ["A relation between two sets A and B is a way of linking some elements of A with some elements of B. It can be drawn with arrows.", "Una relazione tra due insiemi A e B è un modo di collegare alcuni elementi di A con alcuni elementi di B. Si può disegnare con frecce."], "example": ["A = {1,2}, B = {a,b}. The relation “is linked to” can send 1→a and 2→b.", "A = {1,2}, B = {a,b}. La relazione “è collegato a” può mandare 1→a e 2→b."], "workedExample": {"scenario": ["Draw the relation “is greater than” between {2,4} and {1,3}.", "Disegna la relazione “è maggiore di” tra {2,4} e {1,3}."], "steps": [["1. 2 > 1, quindi freccia 2→1.", "1. 2 > 1, so arrow 2→1."], ["2. 4 > 1 and 4 > 3, so arrows 4→1 and 4→3.", "2. 4 > 1 e 4 > 3, quindi frecce 4→1 e 4→3."]], "answer": ["Frecce: 2→1, 4→1, 4→3.", "Arrows: 2→1, 4→1, 4→3."]}}],
      "guidedPractice": [{"id": "gp-rel", "title": ["Guided practice", "Esercitazione guidata"], "instructions": ["Decidi.", "Decide."], "questions": [{"q": ["In the relation “is double of”, 6 is linked to…", "Nella relazione “è doppio di”, 6 è collegato a…"], "a": [["3", "3"], ["12", "12"], ["6", "6"], ["2", "2"]], "why": ["6 = 2 × 3.", "6 = 2 × 3."]}]}],
      "independentPractice": [{"id": "ip-rel", "title": ["Try alone", "Prova da solo"], "instructions": ["Collega.", "Link."], "questions": [{"q": ["In “is less than” between {1,3} and {2,4}, 1 is linked to…", "Nella relazione “è minore di” tra {1,3} e {2,4}, 1 è collegato a…"], "a": [["2 and 4", "2 e 4"], ["Solo 2", "Only 2"], ["Solo 4", "Only 4"], ["Nessuno", "None"]], "why": ["1 < 2 and 1 < 4.", "1 < 2 e 1 < 4."]}]}],
      "knowledgeCheck": [{"q": ["A relation links elements of…", "Una relazione collega elementi di…"], "a": [["Two sets", "Due insiemi"], ["Always one set", "Un solo insieme sempre"], ["Only numbers", "Solo numeri"], ["Solo lettere", "Only letters"]], "why": ["It can link elements of two sets (even the same one).", "Può collegare elementi di due insiemi (anche lo stesso)."]}],
      "summary": [["A relation links some elements of one set with some of another. It is well represented with arrows.", "Una relazione collega alcuni elementi di un insieme con alcuni di un altro. Si rappresenta bene con frecce."]],
      "masteryAssessment": {"title": ["Mastery check", "Verifica di padronanza"], "instructions": ["At least 75%.", "Almeno il 75%."], "passingScore": 75, "questions": [{"q": ["In the relation “is equal to”, every element is linked to…", "Nella relazione “è uguale a”, ogni elemento è collegato a…"], "a": [["Se stesso", "Itself"], ["Tutti", "Everyone"], ["Nessuno", "No one"], ["The next one", "Il successivo"]], "why": ["Only to itself.", "Solo a se stesso."]}]},
      "techniqueUnlock": {"id": "relation-slash", "name": ["Logic Form · Sixth Technique: Relation Slash", "Stile della Logica · Sesta Tecnica: Fendente della Relazione"], "description": ["Draw the arrows and read any relation.", "Disegna le frecce e leggi qualsiasi relazione."], "xpReward": 25}
    },
    "demon": ["Arrow Imp", "Folletto della Freccia"],
    "tech": ["Logic Form · Sixth Technique: Relation Slash", "Stile della Logica · Sesta Tecnica: Fendente della Relazione"],
    "scenes": [{"who": "s", "text": ["<p>A relation links some elements of one set with some of another.</p>", "<p>Una relazione collega alcuni elementi di un insieme con alcuni di un altro.</p>"]}, {"who": "y", "text": ["<p>It can be drawn with arrows from one set to the other.</p>", "<p>Si può disegnare con frecce da un insieme all’altro.</p>"]}],
    "quiz": [{"q": ["In the relation “is half of”, 4 is linked to…", "Nella relazione “è metà di”, 4 è collegato a…"], "a": [["8", "8"], ["2", "2"], ["4", "4"], ["16", "16"]], "why": ["4 is half of 8.", "4 è la metà di 8."]}]
  },
  {
    "id": "m3m7",
    "arc": 23,
    "sec": "3.7",
    "pages": "223–234",
    "hue": 300,
    "horns": 3,
    "eyes": 1,
    "title": ["Quantifiers", "Quantificatori"],
    "topic": ["For all and there exists", "Per ogni e esiste"],
    "learning": {
      "version": 1,
      "prerequisites": [["Know propositions.", "Conoscere le proposizioni."]],
      "objectives": [{"id": "quantifiers", "description": ["Use the quantifiers ∀ (for all) and ∃ (there exists).", "Usare i quantificatori ∀ (per ogni) e ∃ (esiste)."]}],
      "concepts": [{"id": "quant-concept", "title": ["Quantificatori", "Quantifiers"], "explanation": ["∀ means “for all”. ∃ means “there exists at least one”. They are used to talk about properties that hold for everyone or for someone.", "∀ significa “per ogni”. ∃ significa “esiste almeno uno”. Servono per parlare di proprietà che valgono per tutti o per qualcuno."], "example": ["∀ n ∈ ℕ, n + 0 = n. ∃ n ∈ ℕ tale che n > 100.", "∀ n ∈ ℕ, n + 0 = n. ∃ n ∈ ℕ such that n > 100."], "workedExample": {"scenario": ["The sentence “every natural number has a successor” is written with ∀ or ∃?", "La frase “ogni numero naturale ha un successivo” si scrive con ∀ o ∃?"], "steps": [["1. It talks about all natural numbers.", "1. Parla di tutti i numeri naturali."], ["2. Quindi si usa ∀.", "2. So we use ∀."]], "answer": ["∀ n ∈ ℕ, the successor of n exists.", "∀ n ∈ ℕ, esiste il successivo di n."]}}],
      "guidedPractice": [{"id": "gp-quant", "title": ["Guided practice", "Esercitazione guidata"], "instructions": ["Scegli.", "Choose."], "questions": [{"q": ["“There exists an even number” is written with…", "“Esiste un numero pari” si scrive con…"], "a": [["∃", "∃"], ["∀", "∀"], ["∈", "∈"], ["∉", "∉"]], "why": ["∃ significa esiste.", "∃ means there exists."]}]}],
      "independentPractice": [{"id": "ip-quant", "title": ["Try alone", "Prova da solo"], "instructions": ["Traduci.", "Translate."], "questions": [{"q": ["“For every x, x × 1 = x” uses…", "“Per ogni x, x × 1 = x” usa…"], "a": [["∀", "∀"], ["∃", "∃"], ["∈", "∈"], ["∪", "∪"]], "why": ["For every = ∀.", "Per ogni = ∀."]}]}],
      "knowledgeCheck": [{"q": ["∀ significa…", "∀ means…"], "a": [["For all", "Per ogni"], ["Esiste", "There exists"], ["Appartiene", "Belongs to"], ["Union", "Unione"]], "why": ["∀ = for all.", "∀ = per ogni."]}],
      "summary": [["∀ = for all, ∃ = there exists at least one. Used to talk about properties over whole sets.", "∀ = per ogni, ∃ = esiste almeno uno. Servono per parlare di proprietà su interi insiemi."]],
      "masteryAssessment": {"title": ["Mastery check", "Verifica di padronanza"], "instructions": ["At least 75%.", "Almeno il 75%."], "passingScore": 75, "questions": [{"q": ["∃ significa…", "∃ means…"], "a": [["Esiste", "There exists"], ["For all", "Per ogni"], ["Does not exist", "Non esiste"], ["Appartiene", "Belongs"]], "why": ["∃ = esiste.", "∃ = there exists."]}]},
      "techniqueUnlock": {"id": "quant-slash", "name": ["Stile della Logica · Settima Tecnica: Fendente del Quantificatore", "Logic Form · Seventh Technique: Quantifier Slash"], "description": ["Read and write sentences with ∀ and ∃.", "Leggi e scrivi frasi con ∀ e ∃."], "xpReward": 25}
    },
    "demon": ["Quantifier Imp", "Folletto del Quantificatore"],
    "tech": ["Stile della Logica · Settima Tecnica: Fendente del Quantificatore", "Logic Form · Seventh Technique: Quantifier Slash"],
    "scenes": [{"who": "s", "text": ["<p>∀ means “for all”. ∃ means “there exists at least one”.</p>", "<p>∀ significa “per ogni”. ∃ significa “esiste almeno uno”.</p>"]}, {"who": "y", "text": ["<p>They are used when we want to say something about all elements or about some of them.</p>", "<p>Servono quando vogliamo dire qualcosa su tutti gli elementi o su qualcuno di essi.</p>"]}],
    "quiz": [{"q": ["Which symbol means “for all”?", "Quale simbolo significa “per ogni”?"], "a": [["∀", "∀"], ["∃", "∃"], ["∈", "∈"], ["∉", "∉"]], "why": ["∀ = for all.", "∀ = per ogni."]}]
  },
  {
    "id": "m4m2",
    "arc": 24,
    "sec": "4.2",
    "pages": "233–244",
    "hue": 35,
    "horns": 2,
    "eyes": 2,
    "title": ["Simplifying Expressions", "Semplificazione di espressioni"],
    "topic": ["Combining like terms and using the distributive property", "Raggruppare termini simili e usare la proprietà distributiva"],
    "learning": {
      "version": 1,
      "prerequisites": [["Know variables and algebraic expressions.", "Conoscere le variabili e le espressioni algebriche."]],
      "objectives": [{"id": "simplify", "description": ["Simplify expressions by combining like terms.", "Semplificare espressioni raggruppando i termini simili."]}],
      "concepts": [{"id": "like-terms", "title": ["Like terms", "Termini simili"], "explanation": ["Like terms have the same variable part. They can be added or subtracted by adding the coefficients. The distributive property helps remove brackets.", "Termini simili hanno la stessa parte letterale. Si possono sommare o sottrarre sommando i coefficienti. La proprietà distributiva aiuta a togliere le parentesi."], "example": ["3x + 5x = 8x. 2(x + 3) = 2x + 6.", "3x + 5x = 8x. 2(x + 3) = 2x + 6."], "workedExample": {"scenario": ["Simplify 4x + 3 + 2x − 1.", "Semplifica 4x + 3 + 2x − 1."], "steps": [["1. Group the x terms: 4x + 2x = 6x.", "1. Raggruppa i termini con x: 4x + 2x = 6x."], ["2. Group the numbers: 3 − 1 = 2.", "2. Raggruppa i numeri: 3 − 1 = 2."], ["3. Result: 6x + 2.", "3. Risultato: 6x + 2."]], "answer": ["6x + 2", "6x + 2"]}}],
      "guidedPractice": [{"id": "gp-simp", "title": ["Guided practice", "Esercitazione guidata"], "instructions": ["Simplify.", "Semplifica."], "questions": [{"q": ["3a + 5a = ?", "3a + 5a = ?"], "a": [["8a", "8a"], ["15a", "15a"], ["8", "8"], ["a⁸", "a⁸"]], "why": ["3 + 5 = 8, the variable part stays a.", "3 + 5 = 8, la parte letterale resta a."]}]}],
      "independentPractice": [{"id": "ip-simp", "title": ["Try alone", "Prova da solo"], "instructions": ["Simplify.", "Semplifica."], "questions": [{"q": ["2(x + 4) = ?", "2(x + 4) = ?"], "a": [["2x + 8", "2x + 8"], ["2x + 4", "2x + 4"], ["x + 8", "x + 8"], ["6x", "6x"]], "why": ["Distribute the 2.", "Distribuisci il 2."]}]}],
      "knowledgeCheck": [{"q": ["Which are like terms?", "Quali sono termini simili?"], "a": [["3x and 5x", "3x e 5x"], ["3x and 5y", "3x e 5y"], ["3x and 3", "3x e 3"], ["x² and x", "x² e x"]], "why": ["They have the same variable part.", "Hanno la stessa parte letterale."]}],
      "summary": [["Like terms are added by adding coefficients. Use the distributive property to remove brackets.", "Termini simili si sommano sommando i coefficienti. Usa la distributiva per togliere le parentesi."]],
      "masteryAssessment": {"title": ["Mastery check", "Verifica di padronanza"], "instructions": ["At least 75%.", "Almeno il 75%."], "passingScore": 75, "questions": [{"q": ["5y − 2y + 3 = ?", "5y − 2y + 3 = ?"], "a": [["3y + 3", "3y + 3"], ["7y + 3", "7y + 3"], ["3y", "3y"], ["8y", "8y"]], "why": ["5y − 2y = 3y.", "5y − 2y = 3y."]}]},
      "techniqueUnlock": {"id": "simplify-slash", "name": ["Algebra Form · Second Technique: Simplify Slash", "Stile dell’Algebra · Seconda Tecnica: Fendente della Semplificazione"], "description": ["Group like terms and simplify any expression.", "Raggruppa i termini simili e semplifica qualsiasi espressione."], "xpReward": 25}
    },
    "demon": ["Like-Term Imp", "Folletto dei Termini Simili"],
    "tech": ["Algebra Form · Second Technique: Simplify Slash", "Stile dell’Algebra · Seconda Tecnica: Fendente della Semplificazione"],
    "scenes": [
      {"vis": "math-like-terms", "who": "s", "text": ["<p>Like terms have the same letter (or letters) with the same exponent.</p>", "<p>Termini simili hanno la stessa lettera (o le stesse lettere) con lo stesso esponente.</p>"]},
      {"who": "y", "text": ["<p>You can add them by adding only the coefficients: 3x + 5x = 8x.</p>", "<p>Puoi sommarli sommando solo i coefficienti: 3x + 5x = 8x.</p>"]},
      {"vis": "math-square-binomial", "who": "s", "text": ["<p>Watch out for the square of a binomial: <b>(a + b)² = a² + 2ab + b²</b>!</p><p>Never forget the middle term <b>+2ab</b>: it represents the two side rectangles in the geometric square dissection.</p>", "<p>Attenzione al quadrato di binomio: <b>(a + b)² = a² + 2ab + b²</b>!</p><p>Non dimenticare mai il doppio prodotto <b>+2ab</b>: rappresenta i due rettangoli laterali nella scomposizione geometrica del quadrato.</p>"]},
      {"vis": "math-diff-squares", "who": "y", "text": ["<p>For product of sum and difference: <b>(a + b)(a − b) = a² − b²</b>.</p><p>The opposite cross terms cancel out: +ab − ab = 0, leaving only the difference of two squares.</p>", "<p>Per la somma per differenza: <b>(a + b)(a − b) = a² − b²</b>.</p><p>I termini misti opposti si annullano: +ab − ab = 0, lasciando solo la differenza di due quadrati.</p>"]}
    ],
    "quiz": [{"q": ["4x + 7x = ?", "4x + 7x = ?"], "a": [["11x", "11x"], ["11", "11"], ["28x", "28x"], ["x¹¹", "x¹¹"]], "why": ["4 + 7 = 11.", "4 + 7 = 11."]}]
  },
  {
    "id": "m5m1",
    "arc": 25,
    "sec": "5.1",
    "pages": "261–272",
    "hue": 40,
    "horns": 2,
    "eyes": 1,
    "title": ["Linear Equations", "Equazioni lineari"],
    "topic": ["What an equation is and how to solve simple linear equations", "Che cos’è un’equazione e come risolvere semplici equazioni lineari"],
    "learning": {
      "version": 1,
      "prerequisites": [["Know how to simplify algebraic expressions.", "Saper semplificare espressioni algebriche."]],
      "objectives": [{"id": "solve-linear", "description": ["Solve linear equations of the form ax + b = c.", "Risolvere equazioni lineari del tipo ax + b = c."]}],
      "concepts": [{"id": "equations", "title": ["Linear equations", "Equazioni lineari"], "explanation": ["An equation is an equality with an unknown. To solve linear equations we use inverse operations: add or subtract the same number from both sides, then divide or multiply.", "Un’equazione è un’uguaglianza con un’incognita. Per risolvere equazioni lineari usiamo le operazioni inverse: togliamo o aggiungiamo lo stesso numero a entrambi i membri, poi dividiamo o moltiplichiamo."], "example": ["2x + 3 = 11 → 2x = 8 → x = 4.", "2x + 3 = 11 → 2x = 8 → x = 4."], "workedExample": {"scenario": ["Solve 3x − 5 = 10.", "Risolvi 3x − 5 = 10."], "steps": [["1. Add 5 to both sides: 3x = 15.", "1. Aggiungi 5 a entrambi i membri: 3x = 15."], ["2. Divide by 3: x = 5.", "2. Dividi per 3: x = 5."], ["3. Check: 3×5 − 5 = 10. Correct.", "3. Verifica: 3×5 − 5 = 10. Corretto."]], "answer": ["x = 5", "x = 5"]}}],
      "guidedPractice": [{"id": "gp-eq", "title": ["Guided practice", "Esercitazione guidata"], "instructions": ["Solve.", "Risolvi."], "questions": [{"q": ["x + 4 = 9. x = ?", "x + 4 = 9. x = ?"], "a": [["5", "5"], ["13", "13"], ["4", "4"], ["9", "9"]], "why": ["Subtract 4.", "Sottrai 4."]}]}],
      "independentPractice": [{"id": "ip-eq", "title": ["Try alone", "Prova da solo"], "instructions": ["Solve.", "Risolvi."], "questions": [{"q": ["2x = 14. x = ?", "2x = 14. x = ?"], "a": [["7", "7"], ["12", "12"], ["16", "16"], ["28", "28"]], "why": ["Divide by 2.", "Dividi per 2."]}]}],
      "knowledgeCheck": [{"q": ["To isolate x in 5x = 20 we…", "Per isolare x in 5x = 20 si…"], "a": [["Divide by 5", "Dividi per 5"], ["Subtract 5", "Sottrae 5"], ["Add 5", "Aggiunge 5"], ["Multiply by 5", "Moltiplica per 5"]], "why": ["The inverse of multiplication is division.", "L’operazione inversa della moltiplicazione è la divisione."]}],
      "summary": [["To solve a linear equation use inverse operations on both sides until the unknown is isolated. Always check by substituting.", "Per risolvere un’equazione lineare usa le operazioni inverse su entrambi i membri fino a isolare l’incognita. Controlla sempre sostituendo."]],
      "masteryAssessment": {"title": ["Mastery check", "Verifica di padronanza"], "instructions": ["At least 75%.", "Almeno il 75%."], "passingScore": 75, "questions": [{"q": ["4x + 2 = 18. x = ?", "4x + 2 = 18. x = ?"], "a": [["4", "4"], ["5", "5"], ["16", "16"], ["20", "20"]], "why": ["4x = 16 → x = 4.", "4x = 16 → x = 4."]}]},
      "techniqueUnlock": {"id": "equation-slash", "name": ["Algebra Form · Third Technique: Equation Slash", "Stile dell’Algebra · Terza Tecnica: Fendente dell’Equazione"], "description": ["Isolate the unknown with inverse operations.", "Isola l’incognita con le operazioni inverse."], "xpReward": 25}
    },
    "demon": ["Unknown Imp", "Folletto dell’Incognita"],
    "tech": ["Algebra Form · Third Technique: Equation Slash", "Stile dell’Algebra · Terza Tecnica: Fendente dell’Equazione"],
    "scenes": [{"vis": "math-equation-balance", "who": "s", "text": ["<p>An equation is an equality that contains an unknown (usually x).</p>", "<p>Un’equazione è un’uguaglianza che contiene un’incognita (di solito x).</p>"]}, {"who": "y", "text": ["<p>To solve it we do the inverse operations on both sides.</p>", "<p>Per risolverla facciamo le operazioni inverse su entrambi i membri.</p>"]}],
    "quiz": [{"q": ["x − 3 = 7. x = ?", "x − 3 = 7. x = ?"], "a": [["10", "10"], ["4", "4"], ["7", "7"], ["3", "3"]], "why": ["Aggiungi 3.", "Add 3."]}]
  },
  {
    "id": "m5m2",
    "arc": 25,
    "sec": "5.2",
    "pages": "273–286",
    "hue": 45,
    "horns": 3,
    "eyes": 2,
    "title": ["Equations with Brackets", "Equazioni con parentesi"],
    "topic": ["Solving linear equations that contain brackets", "Risolvere equazioni lineari che contengono parentesi"],
    "learning": {
      "version": 1,
      "prerequisites": [["Know how to solve simple linear equations and use the distributive property.", "Saper risolvere equazioni lineari semplici e usare la proprietà distributiva."]],
      "objectives": [{"id": "eq-brackets", "description": ["Solve linear equations with brackets.", "Risolvere equazioni lineari con parentesi."]}],
      "concepts": [{"id": "brackets-eq", "title": ["Equations with brackets", "Equazioni con parentesi"], "explanation": ["First remove the brackets with the distributive property, then proceed as with normal equations.", "Prima togli le parentesi con la proprietà distributiva, poi procedi come per le equazioni normali."], "example": ["2(x + 3) = 10 → 2x + 6 = 10 → 2x = 4 → x = 2.", "2(x + 3) = 10 → 2x + 6 = 10 → 2x = 4 → x = 2."], "workedExample": {"scenario": ["Solve 3(x − 2) = 9.", "Risolvi 3(x − 2) = 9."], "steps": [["1. Distribute: 3x − 6 = 9.", "1. Distribuisci: 3x − 6 = 9."], ["2. Add 6: 3x = 15.", "2. Aggiungi 6: 3x = 15."], ["3. Divide by 3: x = 5.", "3. Dividi per 3: x = 5."]], "answer": ["x = 5", "x = 5"]}}],
      "guidedPractice": [{"id": "gp-br", "title": ["Guided practice", "Esercitazione guidata"], "instructions": ["Solve.", "Risolvi."], "questions": [{"q": ["2(x + 1) = 8. x = ?", "2(x + 1) = 8. x = ?"], "a": [["3", "3"], ["4", "4"], ["2", "2"], ["7", "7"]], "why": ["2x + 2 = 8 → 2x = 6 → x = 3.", "2x + 2 = 8 → 2x = 6 → x = 3."]}]}],
      "independentPractice": [{"id": "ip-br", "title": ["Try alone", "Prova da solo"], "instructions": ["Solve.", "Risolvi."], "questions": [{"q": ["4(x − 1) = 12. x = ?", "4(x − 1) = 12. x = ?"], "a": [["4", "4"], ["3", "3"], ["2", "2"], ["5", "5"]], "why": ["4x − 4 = 12 → 4x = 16 → x = 4.", "4x − 4 = 12 → 4x = 16 → x = 4."]}]}],
      "knowledgeCheck": [{"q": ["Before solving an equation with brackets we…", "Prima di risolvere un’equazione con parentesi si…"], "a": [["Remove the brackets", "Toglie le parentesi"], ["Divide immediately", "Dividi subito"], ["Add the numbers", "Aggiunge i numeri"], ["Nothing", "Niente"]], "why": ["We use the distributive property.", "Si usa la proprietà distributiva."]}],
      "summary": [["With brackets: first distribute, then solve the linear equation as usual.", "Con le parentesi: prima distribuisci, poi risolvi l’equazione lineare come al solito."]],
      "masteryAssessment": {"title": ["Mastery check", "Verifica di padronanza"], "instructions": ["At least 75%.", "Almeno il 75%."], "passingScore": 75, "questions": [{"q": ["5(x + 2) = 25. x = ?", "5(x + 2) = 25. x = ?"], "a": [["3", "3"], ["5", "5"], ["4", "4"], ["2", "2"]], "why": ["5x + 10 = 25 → 5x = 15 → x = 3.", "5x + 10 = 25 → 5x = 15 → x = 3."]}]},
      "techniqueUnlock": {"id": "bracket-slash", "name": ["Stile dell’Algebra · Quarta Tecnica: Fendente della Parentesi", "Algebra Form · Fourth Technique: Bracket Slash"], "description": ["Open the brackets and solve the equation in one go.", "Apri le parentesi e risolvi l’equazione in un colpo solo."], "xpReward": 25}
    },
    "demon": ["Bracket Imp", "Folletto della Parentesi"],
    "tech": ["Stile dell’Algebra · Quarta Tecnica: Fendente della Parentesi", "Algebra Form · Fourth Technique: Bracket Slash"],
    "scenes": [{"who": "s", "text": ["<p>If the equation has brackets, first remove them with the distributive property.</p>", "<p>Se l’equazione ha parentesi, prima toglile con la proprietà distributiva.</p>"]}, {"who": "y", "text": ["<p>Then proceed as with a normal equation.</p>", "<p>Poi procedi come per un’equazione normale.</p>"]}],
    "quiz": [{"q": ["3(x + 2) = 15. x = ?", "3(x + 2) = 15. x = ?"], "a": [["3", "3"], ["5", "5"], ["4", "4"], ["2", "2"]], "why": ["3x + 6 = 15 → 3x = 9 → x = 3.", "3x + 6 = 15 → 3x = 9 → x = 3."]}]
  },
  {
    "id": "m6m1",
    "arc": 26,
    "sec": "6.1",
    "pages": "311–322",
    "hue": 50,
    "horns": 2,
    "eyes": 1,
    "title": ["Linear Inequalities", "Disequazioni lineari"],
    "topic": ["Solving simple linear inequalities", "Risolvere semplici disequazioni lineari"],
    "learning": {
      "version": 1,
      "prerequisites": [["Know how to solve linear equations.", "Saper risolvere equazioni lineari."]],
      "objectives": [{"id": "inequalities", "description": ["Solve linear inequalities and represent the solution on the line.", "Risolvere disequazioni lineari e rappresentare la soluzione sulla retta."]}],
      "concepts": [{"id": "ineq-concept", "title": ["Linear inequalities", "Disequazioni lineari"], "explanation": ["An inequality uses <, >, ≤ or ≥. It is solved like an equation, but if we multiply or divide by a negative number the symbol flips. The solution is an interval on the line.", "Una disequazione usa <, >, ≤ o ≥. Si risolve come un’equazione, ma se si moltiplica o divide per un numero negativo il verso del simbolo si inverte. La soluzione è un intervallo sulla retta."], "example": ["2x + 1 < 7 → 2x < 6 → x < 3. On the line: all numbers left of 3.", "2x + 1 < 7 → 2x < 6 → x < 3. Sulla retta: tutti i numeri a sinistra di 3."], "workedExample": {"scenario": ["Solve −2x > 6.", "Risolvi −2x > 6."], "steps": [["1. Divide by −2 and flip the symbol: x < −3.", "1. Dividi per −2 e inverti il simbolo: x < −3."], ["2. Solution: all numbers less than −3.", "2. Soluzione: tutti i numeri minori di −3."]], "answer": ["x < −3", "x < −3"]}}],
      "guidedPractice": [{"id": "gp-ineq", "title": ["Guided practice", "Esercitazione guidata"], "instructions": ["Solve.", "Risolvi."], "questions": [{"q": ["x + 5 > 8. x ?", "x + 5 > 8. x ?"], "a": [["x > 3", "x > 3"], ["x > 13", "x > 13"], ["x < 3", "x < 3"], ["x = 3", "x = 3"]], "why": ["Subtract 5.", "Sottrai 5."]}]}],
      "independentPractice": [{"id": "ip-ineq", "title": ["Try alone", "Prova da solo"], "instructions": ["Solve.", "Risolvi."], "questions": [{"q": ["3x ≤ 12. x ?", "3x ≤ 12. x ?"], "a": [["x ≤ 4", "x ≤ 4"], ["x ≤ 9", "x ≤ 9"], ["x ≥ 4", "x ≥ 4"], ["x = 4", "x = 4"]], "why": ["Divide by 3 (positive, direction stays).", "Dividi per 3 (positivo, il verso resta)."]}]}],
      "knowledgeCheck": [{"q": ["When we divide by a negative number the inequality direction…", "Quando si divide per un numero negativo il verso della disequazione…"], "a": [["Flips", "Si inverte"], ["Stays the same", "Resta uguale"], ["Becomes equal", "Diventa uguale"], ["Disappears", "Scompare"]], "why": ["We must flip the symbol.", "Bisogna invertire il simbolo."]}],
      "summary": [["Inequalities are solved like equations, but the direction flips if we multiply or divide by a negative. The solution is an interval.", "Le disequazioni si risolvono come le equazioni, ma il verso si inverte se si moltiplica o divide per un negativo. La soluzione è un intervallo."]],
      "masteryAssessment": {"title": ["Mastery check", "Verifica di padronanza"], "instructions": ["At least 75%.", "Almeno il 75%."], "passingScore": 75, "questions": [{"q": ["−x < 4. x ?", "−x < 4. x ?"], "a": [["x > −4", "x > −4"], ["x < −4", "x < −4"], ["x < 4", "x < 4"], ["x > 4", "x > 4"]], "why": ["Divide by −1 and flip.", "Dividi per −1 e inverti."]}]},
      "techniqueUnlock": {"id": "inequality-slash", "name": ["Algebra Form · Fifth Technique: Inequality Slash", "Stile dell’Algebra · Quinta Tecnica: Fendente della Disequazione"], "description": ["Solve the inequality and draw the interval on the line.", "Risolvi la disequazione e disegna l’intervallo sulla retta."], "xpReward": 25}
    },
    "demon": ["Inequality Imp", "Folletto della Disequazione"],
    "tech": ["Algebra Form · Fifth Technique: Inequality Slash", "Stile dell’Algebra · Quinta Tecnica: Fendente della Disequazione"],
    "scenes": [{"vis": "math-inequality-line", "who": "s", "text": ["<p>An inequality uses the symbols <, >, ≤, ≥ instead of equals.</p>", "<p>Una disequazione usa i simboli <, >, ≤, ≥ al posto dell’uguale.</p>"]}, {"who": "y", "text": ["<p>If you multiply or divide by a negative number, you must flip the direction of the symbol.</p>", "<p>Se moltiplichi o dividi per un numero negativo, devi invertire il verso del simbolo.</p>"]}],
    "quiz": [{"q": ["x − 2 ≥ 5. x ?", "x − 2 ≥ 5. x ?"], "a": [["x ≥ 7", "x ≥ 7"], ["x ≥ 3", "x ≥ 3"], ["x ≤ 7", "x ≤ 7"], ["x = 7", "x = 7"]], "why": ["Add 2.", "Aggiungi 2."]}]
  }

];

export const RANKS: Rank[] = [
  [
    0,
    [
      "Rookie Recruit",
      "Recluta"
    ]
  ],
  [
    250,
    [
      "Bronze Byte Hunter",
      "Cacciatrice di Bronzo"
    ]
  ],
  [
    800,
    [
      "Silver Circuit Hunter",
      "Cacciatrice d'Argento"
    ]
  ],
  [
    1600,
    [
      "Gold Core Hunter",
      "Cacciatrice d'Oro"
    ]
  ],
  [
    2700,
    [
      "Platinum Kernel Hunter",
      "Cacciatrice di Platino"
    ]
  ],
  [
    4000,
    [
      "Diamond Code Hunter",
      "Cacciatrice di Diamante"
    ]
  ],
  [
    5500,
    [
      "Legendary System Master",
      "Maestra Leggendaria del Sistema"
    ]
  ]
];

export const CODEX: CodexEntry[] = [
  [
    0,
    "Computer science",
    "Informatica",
    "The science of processing information automatically.",
    "La scienza che elabora l'informazione in modo automatico."
  ],
  [
    0,
    "Coding",
    "Coding",
    "Writing instructions for a computer in a programming language.",
    "Scrivere istruzioni per un computer con un linguaggio di programmazione."
  ],
  [
    0,
    "Algorithm",
    "Algoritmo",
    "A finite list of clear instructions that solves a problem.",
    "Un elenco finito di istruzioni chiare che risolve un problema."
  ],
  [
    1,
    "Finite / unambiguous",
    "Finito / non ambiguo",
    "Ends after limited steps / each step has only one meaning.",
    "Termina dopo un numero limitato di passi / ogni passo ha un solo significato."
  ],
  [
    1,
    "Executable / general",
    "Eseguibile / generale",
    "Each step can be done / solves a whole class of problems.",
    "Ogni passo si può eseguire / risolve un'intera classe di problemi."
  ],
  [
    1,
    "Deterministic",
    "Deterministico",
    "Same input → same output.",
    "Stessi dati → stesso risultato."
  ],
  [
    1,
    "Bug / debugging",
    "Bug / debug",
    "An error / finding and fixing it.",
    "Un errore / trovarlo e correggerlo."
  ],
  [
    2,
    "Computational thinking",
    "Pensiero computazionale",
    "Decomposition, pattern recognition, abstraction, algorithms.",
    "Scomposizione, riconoscimento di schemi, astrazione, algoritmi."
  ],
  [
    2,
    "Filter bubble",
    "Bolla di filtraggio",
    "Seeing only content similar to what you already like.",
    "Vedere solo contenuti simili a quelli che già ti piacciono."
  ],
  [
    3,
    "Bit",
    "Bit",
    "A binary digit: 0 or 1.",
    "Cifra binaria: 0 o 1."
  ],
  [
    3,
    "Byte",
    "Byte",
    "8 bits.",
    "8 bit."
  ],
  [
    3,
    "Binary system",
    "Sistema binario",
    "Base-2 number system: place values 1, 2, 4, 8, 16…",
    "Sistema in base 2: posizioni che valgono 1, 2, 4, 8, 16…"
  ],
  [
    4,
    "ASCII",
    "ASCII",
    "7-bit code for 128 characters. A = 65.",
    "Codice a 7 bit per 128 caratteri. A = 65."
  ],
  [
    4,
    "Unicode / UTF-8",
    "Unicode / UTF-8",
    "Code for almost every character in the world / stores each in 1–4 bytes.",
    "Codifica per quasi tutti i caratteri del mondo / salva ciascuno in 1–4 byte."
  ],
  [
    5,
    "Pixel / resolution",
    "Pixel / risoluzione",
    "Smallest image dot / number of pixels (e.g. 1920 × 1080).",
    "Puntino più piccolo dell'immagine / numero di pixel (es. 1920 × 1080)."
  ],
  [
    5,
    "RGB",
    "RGB",
    "Red, green, blue light, each 0–255.",
    "Luce rossa, verde, blu, ciascuna 0–255."
  ],
  [
    5,
    "Vector graphics",
    "Grafica vettoriale",
    "Images stored as mathematical shapes; no blur when zoomed.",
    "Immagini salvate come forme matematiche; non sgranano."
  ],
  [
    5,
    "Sampling",
    "Campionamento",
    "Measuring a sound wave many times per second.",
    "Misurare un'onda sonora molte volte al secondo."
  ],
  [
    5,
    "Frame rate (fps)",
    "Fotogrammi al secondo (fps)",
    "How many images per second a video shows.",
    "Quante immagini al secondo mostra un video."
  ],
  [
    6,
    "Lossless / lossy",
    "Senza perdita / con perdita",
    "Compression that keeps everything / that discards some detail.",
    "Compressione che conserva tutto / che elimina alcuni dettagli."
  ],
  [
    6,
    "Hexadecimal",
    "Esadecimale",
    "Base 16: 0–9, A–F. FF = 255.",
    "Base 16: 0–9, A–F. FF = 255."
  ],
  [
    6,
    "Digital divide",
    "Divario digitale",
    "Gap in access to technology and digital skills.",
    "Differenza di accesso alla tecnologia e di competenze digitali."
  ],
  [
    7,
    "Hardware / software",
    "Hardware / software",
    "Physical parts / programs.",
    "Parti fisiche / programmi."
  ],
  [
    7,
    "Von Neumann architecture",
    "Architettura di von Neumann",
    "CPU, memory with programs + data, I/O, bus.",
    "CPU, memoria con programmi + dati, I/O, bus."
  ],
  [
    8,
    "Motherboard",
    "Scheda madre",
    "Main circuit board connecting all components.",
    "Circuito principale che collega tutti i componenti."
  ],
  [
    8,
    "CPU / microprocessor",
    "CPU / microprocessore",
    "Executes program instructions: CU, ALU, registers.",
    "Esegue le istruzioni: unità di controllo, ALU, registri."
  ],
  [
    8,
    "Fetch–decode–execute",
    "Ciclo fetch–decode–execute",
    "The CPU's repeating cycle.",
    "Il ciclo che la CPU ripete continuamente."
  ],
  [
    8,
    "Clock speed",
    "Frequenza di clock",
    "Cycles per second, in GHz.",
    "Cicli al secondo, in GHz."
  ],
  [
    8,
    "Power supply (PSU)",
    "Alimentatore",
    "Converts AC mains to low-voltage DC.",
    "Converte la corrente alternata in continua a bassa tensione."
  ],
  [
    9,
    "RAM",
    "RAM",
    "Fast, volatile working memory.",
    "Memoria di lavoro veloce e volatile."
  ],
  [
    9,
    "ROM",
    "ROM",
    "Non-volatile memory with start-up firmware.",
    "Memoria non volatile con il firmware di avvio."
  ],
  [
    9,
    "Cache",
    "Cache",
    "Small, very fast memory on the CPU.",
    "Memoria piccola e velocissima sulla CPU."
  ],
  [
    9,
    "Bus",
    "Bus",
    "Pathways for data, addresses and control signals.",
    "Collegamenti per dati, indirizzi e segnali di controllo."
  ],
  [
    9,
    "Mass storage",
    "Memoria di massa",
    "Non-volatile storage: HDD, SSD, optical, cloud.",
    "Memoria non volatile: HDD, SSD, ottica, cloud."
  ],
  [
    10,
    "Peripheral",
    "Periferica",
    "A device connected to the computer: input, output or both.",
    "Dispositivo collegato al computer: input, output o entrambi."
  ],
  [
    10,
    "Capacitive touchscreen",
    "Touchscreen capacitivo",
    "Detects the finger by the change in electric charge.",
    "Rileva il dito dalla variazione di carica elettrica."
  ],
  [
    10,
    "E-waste",
    "RAEE",
    "Electronic waste; must be recycled properly.",
    "Rifiuti elettronici; vanno riciclati correttamente."
  ],
  [
    10,
    "Moore's law",
    "Legge di Moore",
    "Transistors per chip doubled about every 2 years.",
    "I transistor per chip raddoppiavano circa ogni 2 anni."
  ],
  [
    11,
    "Operating system",
    "Sistema operativo",
    "Manages memory, processes, files, devices, interface, security.",
    "Gestisce memoria, processi, file, periferiche, interfaccia, sicurezza."
  ],
  [
    11,
    "Process",
    "Processo",
    "A program while it is running.",
    "Un programma in esecuzione."
  ],
  [
    11,
    "Multitasking",
    "Multitasking",
    "Several processes sharing the CPU in turns.",
    "Più processi che si dividono la CPU a turno."
  ],
  [
    11,
    "Driver",
    "Driver",
    "Lets the OS talk to a specific device.",
    "Permette al sistema operativo di comunicare con un dispositivo."
  ],
  [
    12,
    "File system",
    "File system",
    "How files and folders are organised on a disk.",
    "Come sono organizzati file e cartelle su un disco."
  ],
  [
    12,
    "Path / extension",
    "Percorso / estensione",
    "Address of a file / file type after the dot.",
    "Indirizzo del file / tipo di file dopo il punto."
  ],
  [
    12,
    "GUI",
    "Interfaccia grafica (GUI)",
    "Windows, icons, menus, pointer.",
    "Finestre, icone, menu, puntatore."
  ],
  [
    13,
    "Application software",
    "Software applicativo",
    "Helps the user do a task.",
    "Aiuta l'utente a svolgere un compito."
  ],
  [
    13,
    "Accelerometer",
    "Accelerometro",
    "Measures movement and tilt.",
    "Misura movimento e inclinazione."
  ],
  [
    13,
    "GNSS",
    "GNSS",
    "Satellite positioning (GPS, Galileo…).",
    "Posizionamento satellitare (GPS, Galileo…)."
  ],
  [
    13,
    "Licence / copyright",
    "Licenza d'uso / diritto d'autore",
    "Rules for using software / legal protection of the work.",
    "Regole per usare il software / tutela legale dell'opera."
  ],
  [
    13,
    "Open source",
    "Open source",
    "Public source code anyone can study and change.",
    "Codice sorgente pubblico che chiunque può studiare e modificare."
  ],
  [
    14,
    "Protocol",
    "Protocollo",
    "Shared rules for communicating.",
    "Regole comuni per comunicare."
  ],
  [
    14,
    "LAN / WAN",
    "LAN / WAN",
    "Local network / wide-area network.",
    "Rete locale / rete geografica."
  ],
  [
    14,
    "Router",
    "Router",
    "Connects networks and forwards packets.",
    "Collega le reti e inoltra i pacchetti."
  ],
  [
    14,
    "IP address",
    "Indirizzo IP",
    "A device's address on a network.",
    "L'indirizzo di un dispositivo in rete."
  ],
  [
    14,
    "Packet",
    "Pacchetto",
    "A small numbered piece of a message.",
    "Piccola parte numerata di un messaggio."
  ],
  [
    15,
    "World Wide Web",
    "World Wide Web",
    "Linked HTML pages on the Internet (Berners-Lee, 1989).",
    "Pagine HTML collegate su Internet (Berners-Lee, 1989)."
  ],
  [
    15,
    "URL",
    "URL",
    "A web address: protocol + domain + path.",
    "Indirizzo web: protocollo + dominio + percorso."
  ],
  [
    15,
    "Browser",
    "Browser",
    "Program that requests and shows web pages.",
    "Programma che richiede e mostra le pagine web."
  ],
  [
    16,
    "Phishing",
    "Phishing",
    "Fake message designed to steal passwords or money.",
    "Messaggio falso per rubare password o denaro."
  ],
  [
    16,
    "Digital footprint",
    "Impronta digitale",
    "The trail you leave online.",
    "La traccia che lasci online."
  ],
  [
    16,
    "Netiquette",
    "Netiquette",
    "Good manners online.",
    "Buona educazione online."
  ],
  [
    17,
    "5G",
    "5G",
    "Fifth-generation mobile network.",
    "Rete mobile di quinta generazione."
  ],
  [
    17,
    "Internet of Things (IoT)",
    "Internet delle cose (IoT)",
    "Everyday objects connected to the Internet.",
    "Oggetti di tutti i giorni collegati a Internet."
  ],
  [
    18,
    "Confidentiality · integrity · availability",
    "Riservatezza · integrità · disponibilità",
    "The three goals of information security.",
    "I tre obiettivi della sicurezza delle informazioni."
  ],
  [
    18,
    "Authentication / 2FA",
    "Autenticazione / 2FA",
    "Proving who you are / using two different proofs.",
    "Dimostrare chi sei / usare due prove diverse."
  ],
  [
    19,
    "Malware",
    "Malware",
    "Software written to cause harm: virus, worm, Trojan, ransomware, spyware.",
    "Software scritto per fare danni: virus, worm, trojan, ransomware, spyware."
  ],
  [
    19,
    "Firewall",
    "Firewall",
    "Filters network traffic in and out.",
    "Filtra il traffico di rete in entrata e in uscita."
  ],
  [
    20,
    "Backup (3-2-1)",
    "Backup (3-2-1)",
    "3 copies, 2 media, 1 off-site.",
    "3 copie, 2 supporti, 1 altrove."
  ],
  [
    20,
    "VPN",
    "VPN",
    "Encrypted tunnel for your internet traffic.",
    "Tunnel cifrato per il traffico internet."
  ],
  [
    21,
    "Cloud computing (SaaS/PaaS/IaaS)",
    "Cloud computing (SaaS/PaaS/IaaS)",
    "Using remote software, platforms or infrastructure over the internet.",
    "Usare software, piattaforme o infrastrutture remote via internet."
  ],
  [
    21,
    "Sharing permissions",
    "Autorizzazioni di condivisione",
    "Viewer, commenter, editor.",
    "Visualizzatore, commentatore, editor."
  ],
  [
    22,
    "Online calendar",
    "Agenda online",
    "Cloud calendar synced across devices and shareable.",
    "Agenda nel cloud sincronizzata e condivisibile."
  ],
  [
    22,
    "Videoconference",
    "Videoconferenza",
    "Meeting with audio and video over the internet.",
    "Riunione con audio e video via internet."
  ],
  [
    23,
    "Formatting",
    "Formattazione",
    "Changing how text looks: font, size, bold, alignment.",
    "Cambiare l'aspetto del testo: carattere, dimensione, grassetto, allineamento."
  ],
  [
    23,
    "PDF",
    "PDF",
    "A document that looks the same on every device.",
    "Documento che appare uguale su ogni dispositivo."
  ],
  [
    24,
    "Text wrapping",
    "Disposizione del testo",
    "How text flows around an image.",
    "Come il testo scorre attorno a un'immagine."
  ],
  [
    24,
    "Ergonomics",
    "Ergonomia",
    "Using the computer without harming your body.",
    "Usare il computer senza danneggiare il corpo."
  ],
  [
    25,
    "Cell / cell address",
    "Cella / indirizzo di cella",
    "A box in the grid / column letter + row number (B3).",
    "Un riquadro della griglia / lettera della colonna + numero della riga (B3)."
  ],
  [
    25,
    "Formula",
    "Formula",
    "A calculation starting with =.",
    "Un calcolo che inizia con =."
  ],
  [
    26,
    "Relative reference",
    "Riferimento relativo",
    "Changes when the formula is copied (A2 → A3).",
    "Cambia quando la formula viene copiata (A2 → A3)."
  ],
  [
    26,
    "Absolute reference",
    "Riferimento assoluto",
    "Locked with $: $B$10.",
    "Bloccato con il $: $B$10."
  ],
  [
    27,
    "IF / AND / OR",
    "SE / E / O",
    "Choose a result from a condition / combine conditions.",
    "Scegliere un risultato in base a una condizione / combinare condizioni."
  ],
  [
    27,
    "What-if analysis",
    "Analisi what-if",
    "Changing inputs to see how results change.",
    "Cambiare i dati per vedere come cambiano i risultati."
  ],
  [
    27,
    "Gini index",
    "Indice di Gini",
    "Inequality measure from 0 (equal) to 1 (max inequality).",
    "Misura della disuguaglianza da 0 (uguaglianza) a 1 (massima disuguaglianza)."
  ],
  [
    28,
    "Slide / theme",
    "Diapositiva / tema",
    "One page of a presentation / a consistent style.",
    "Una pagina della presentazione / uno stile coerente."
  ],
  [
    29,
    "Transition / animation",
    "Transizione / animazione",
    "Effect between slides / effect on an object.",
    "Effetto tra le slide / effetto su un oggetto."
  ],
  [
    29,
    "Open data",
    "Open data",
    "Public data anyone can use freely.",
    "Dati pubblici utilizzabili liberamente."
  ],
  [
    30,
    "Flowchart",
    "Diagramma di flusso",
    "A drawing of an algorithm with standard shapes.",
    "Disegno di un algoritmo con forme standard."
  ],
  [
    30,
    "Variable / constant",
    "Variabile / costante",
    "A value that can change / one that cannot.",
    "Un valore che può cambiare / uno che non cambia."
  ],
  [
    31,
    "Sequence · selection · iteration",
    "Sequenza · selezione · iterazione",
    "The three structures of structured programming.",
    "Le tre strutture della programmazione strutturata."
  ],
  [
    32,
    "Trace table",
    "Tabella di traccia",
    "Records variable values step by step.",
    "Registra i valori delle variabili passo per passo."
  ],
  [
    33,
    "Compiler / interpreter",
    "Compilatore / interprete",
    "Translates all at once / line by line.",
    "Traduce tutto insieme / riga per riga."
  ],
  [
    33,
    "High-level language",
    "Linguaggio ad alto livello",
    "Readable code like Python, translated for the CPU.",
    "Codice leggibile come Python, tradotto per la CPU."
  ],
  [
    34,
    "print() / input()",
    "print() / input()",
    "Show output / read text from the user.",
    "Mostrare output / leggere testo dall'utente."
  ],
  [
    34,
    "Data types",
    "Tipi di dato",
    "int, float, str, bool.",
    "int, float, str, bool."
  ],
  [
    35,
    "// and %",
    "// e %",
    "Integer division / remainder.",
    "Divisione intera / resto."
  ],
  [
    35,
    "Keyword",
    "Parola chiave",
    "A reserved word like if, for, def.",
    "Una parola riservata come if, for, def."
  ],
  [
    36,
    "if / elif / else",
    "if / elif / else",
    "Python selection.",
    "La selezione in Python."
  ],
  [
    36,
    "Relational operators",
    "Operatori relazionali",
    "== != < <= > >=",
    "== != < <= > >="
  ],
  [
    37,
    "Logic gates",
    "Porte logiche",
    "AND, OR, NOT circuits that work with 1 and 0.",
    "Circuiti AND, OR, NOT che lavorano con 1 e 0."
  ],
  [
    37,
    "match…case",
    "match…case",
    "Compares a value with several cases (Python 3.10+).",
    "Confronta un valore con più casi (Python 3.10+)."
  ],
  [
    38,
    "for / range()",
    "for / range()",
    "Repeat for each value; range(stop) excludes stop.",
    "Ripete per ogni valore; range(fine) esclude la fine."
  ],
  [
    39,
    "while",
    "while",
    "Repeats while a condition is True.",
    "Ripete finché una condizione è True."
  ],
  [
    40,
    "Index / slicing",
    "Indice / slicing",
    "Position from 0 / s[a:b] takes a part.",
    "Posizione da 0 / s[a:b] prende una parte."
  ],
  [
    40,
    "String methods",
    "Metodi delle stringhe",
    "upper(), replace(), find(), split()…",
    "upper(), replace(), find(), split()…"
  ],
  [
    41,
    "List / matrix",
    "Lista / matrice",
    "Ordered values in [ ] / a list of lists.",
    "Valori ordinati tra [ ] / una lista di liste."
  ],
  [
    41,
    "open() modes",
    "Modalità di open()",
    "\"r\" read, \"w\" write, \"a\" append.",
    "\"r\" lettura, \"w\" scrittura, \"a\" aggiunta."
  ],
  [
    42,
    "Function / return",
    "Funzione / return",
    "Reusable named code / sends back a result.",
    "Codice riutilizzabile con un nome / restituisce un risultato."
  ],
  [
    42,
    "Module / import",
    "Modulo / import",
    "A file of ready-made functions / loading it.",
    "Un file di funzioni pronte / caricarlo."
  ],
  [
    43,
    "Stack (LIFO) / queue (FIFO)",
    "Pila (LIFO) / coda (FIFO)",
    "Last in first out / first in first out.",
    "L'ultimo entrato esce per primo / il primo entrato esce per primo."
  ],
  [
    44,
    "physical quantity",
    "grandezza fisica",
    "A property that can be measured and expressed with a number and a unit.",
    "Una proprietà che si può misurare ed esprimere con un numero e un'unità."
  ],
  [
    44,
    "unit of measurement",
    "unità di misura",
    "A reference amount a quantity is compared with (e.g. the metre).",
    "Una quantità di riferimento con cui si confronta una grandezza (es. il metro)."
  ],
  [
    44,
    "International System",
    "Sistema Internazionale",
    "The SI: the agreed set of units used by scientists worldwide.",
    "Il SI: l'insieme di unità condiviso dagli scienziati di tutto il mondo."
  ],
  [
    44,
    "fundamental quantities",
    "grandezze fondamentali",
    "The seven SI base quantities (length, mass, time, …) from which others are built.",
    "Le sette grandezze base del SI (lunghezza, massa, tempo, …) da cui si costruiscono le altre."
  ],
  [
    44,
    "derived quantity",
    "grandezza derivata",
    "A quantity built from fundamental ones, like speed (m/s) or density (kg/m³).",
    "Una grandezza costruita da quelle fondamentali, come velocità (m/s) o densità (kg/m³)."
  ],
  [
    44,
    "scientific notation",
    "notazione scientifica",
    "Writing a number as a value between 1 and 10 times a power of ten.",
    "Scrivere un numero come un valore tra 1 e 10 per una potenza di dieci."
  ],
  [
    45,
    "scientific notation",
    "notazione scientifica",
    "A number between 1 and 10 times a power of ten.",
    "Un numero tra 1 e 10 per una potenza di dieci."
  ],
  [
    45,
    "order of magnitude",
    "ordine di grandezza",
    "The power of ten closest to a number — a quick sense of its size.",
    "La potenza di dieci più vicina a un numero — un'idea rapida della sua dimensione."
  ],
  [
    46,
    "derived quantities",
    "grandezze derivate",
    "Quantities built from fundamental ones, like area, volume or density.",
    "Grandezze costruite da quelle fondamentali, come area, volume o densità."
  ],
  [
    46,
    "density",
    "densità",
    "Mass per unit volume: ρ = m / V, in kg/m³.",
    "Massa per unità di volume: ρ = m / V, in kg/m³."
  ],
  [
    46,
    "significant figures",
    "cifre significative",
    "The certain digits of a measurement plus the first uncertain one.",
    "Le cifre certe di una misura più la prima incerta."
  ],
  [
    47,
    "sensitivity",
    "sensibilità",
    "The smallest difference an instrument can detect.",
    "La più piccola differenza che uno strumento può rilevare."
  ],
  [
    47,
    "uncertainty",
    "incertezza",
    "The ± band around a measured value showing how precise it is.",
    "La banda ± attorno a un valore misurato che ne indica la precisione."
  ],
  [
    47,
    "mean",
    "media",
    "The average of several repeated measurements.",
    "La media di più misure ripetute."
  ],
  [
    47,
    "absolute error",
    "errore assoluto",
    "The uncertainty of a measurement in the same units as the value.",
    "L'incertezza di una misura, nelle stesse unità del valore."
  ],
  [
    48,
    "direct proportionality",
    "proporzionalità diretta",
    "y = k·x: one doubles when the other doubles; a line through the origin.",
    "y = k·x: una raddoppia quando l'altra raddoppia; una retta per l'origine."
  ],
  [
    48,
    "inverse proportionality",
    "proporzionalità inversa",
    "y = k/x: one halves when the other doubles; their product is constant.",
    "y = k/x: una si dimezza quando l'altra raddoppia; il loro prodotto è costante."
  ],
  [
    49,
    "scalar",
    "scalare",
    "A quantity given by a number alone, like mass or temperature.",
    "Una grandezza data da un solo numero, come massa o temperatura."
  ],
  [
    49,
    "vector",
    "vettore",
    "A quantity with both a value and a direction, drawn as an arrow.",
    "Una grandezza con valore e direzione, disegnata come una freccia."
  ],
  [
    49,
    "resultant",
    "risultante",
    "The single vector equivalent to the sum of several vectors.",
    "L'unico vettore equivalente alla somma di più vettori."
  ],
  [
    50,
    "force",
    "forza",
    "A push or pull that can change motion or shape, measured in newtons.",
    "Una spinta o trazione che può cambiare moto o forma, misurata in newton."
  ],
  [
    50,
    "weight",
    "forza-peso",
    "The gravity force on a mass: P = m·g.",
    "La forza di gravità su una massa: P = m·g."
  ],
  [
    50,
    "elastic force",
    "forza elastica",
    "A spring's restoring force, F = k·x (Hooke's law).",
    "La forza di richiamo di una molla, F = k·x (legge di Hooke)."
  ],
  [
    50,
    "friction",
    "attrito",
    "A force that resists sliding between surfaces.",
    "Una forza che si oppone allo scorrimento tra superfici."
  ],
  [
    51,
    "components",
    "componenti",
    "The parts of a vector along the x and y axes.",
    "Le parti di un vettore lungo gli assi x e y."
  ],
  [
    52,
    "torque",
    "momento",
    "The turning effect of a force: M = F·d.",
    "L'effetto rotante di una forza: M = F·d."
  ],
  [
    52,
    "lever",
    "leva",
    "A rigid bar that turns on a fulcrum; balances when F₁·d₁ = F₂·d₂.",
    "Una barra rigida che ruota su un fulcro; in equilibrio quando F₁·d₁ = F₂·d₂."
  ],
  [
    53,
    "centre of gravity",
    "baricentro",
    "The point where an object's whole weight can be taken to act.",
    "Il punto in cui si può pensare agisca tutto il peso di un oggetto."
  ],
  [
    53,
    "stable equilibrium",
    "equilibrio stabile",
    "Displaced slightly, the body returns to its position.",
    "Spostato di poco, il corpo torna alla sua posizione."
  ],
  [
    54,
    "pressure",
    "pressione",
    "Force spread over an area: p = F / A, in pascals.",
    "Forza distribuita su un'area: p = F / A, in pascal."
  ],
  [
    54,
    "Stevin's law",
    "legge di Stevino",
    "Pressure in a liquid grows with depth: p = ρ·g·h.",
    "La pressione in un liquido cresce con la profondità: p = ρ·g·h."
  ],
  [
    55,
    "Archimedes' principle",
    "principio di Archimede",
    "A body in a fluid feels an upward force equal to the displaced fluid's weight.",
    "Un corpo in un fluido sente una spinta verso l'alto pari al peso del fluido spostato."
  ],
  [
    55,
    "buoyant force",
    "spinta di Archimede",
    "The upward push of a fluid on a submerged body.",
    "La spinta verso l'alto di un fluido su un corpo immerso."
  ]
];

export const ROBOT_LEVELS = [
  {
    "n": 5,
    "start": [
      0,
      2,
      1
    ],
    "goal": [
      4,
      2
    ],
    "walls": []
  },
  {
    "n": 5,
    "start": [
      0,
      4,
      1
    ],
    "goal": [
      4,
      4
    ],
    "walls": [
      [
        2,
        2
      ],
      [
        2,
        3
      ],
      [
        2,
        4
      ]
    ]
  },
  {
    "n": 6,
    "start": [
      0,
      5,
      1
    ],
    "goal": [
      5,
      0
    ],
    "walls": [
      [
        1,
        4
      ],
      [
        1,
        5
      ],
      [
        0,
        2
      ],
      [
        1,
        2
      ],
      [
        2,
        2
      ],
      [
        4,
        3
      ],
      [
        4,
        2
      ],
      [
        4,
        1
      ]
    ]
  }
];

export const BOARD: Record<string, any> = {
  "cpu": {
    "n": [
      "CPU socket",
      "Socket della CPU"
    ],
    "t": [
      "Holds the CPU. Hundreds of tiny contacts connect the processor to the board. A cooler sits on top.",
      "Ospita la CPU. Centinaia di piccoli contatti collegano il processore alla scheda. Sopra si monta il dissipatore."
    ]
  },
  "ram": {
    "n": [
      "RAM slots (DIMM)",
      "Slot della RAM (DIMM)"
    ],
    "t": [
      "RAM sticks click into these slots, close to the CPU so data travels quickly.",
      "I banchi di RAM si inseriscono qui, vicino alla CPU, così i dati viaggiano velocemente."
    ]
  },
  "psu": {
    "n": [
      "24-pin power connector",
      "Connettore di alimentazione a 24 pin"
    ],
    "t": [
      "The big cable from the power supply (PSU) plugs in here.",
      "Qui si collega il cavo principale dell'alimentatore."
    ]
  },
  "pcie": {
    "n": [
      "PCIe x16 slot",
      "Slot PCIe x16"
    ],
    "t": [
      "Expansion slot. The graphics card (GPU) usually goes here.",
      "Slot di espansione. Di solito qui va la scheda video (GPU)."
    ]
  },
  "m2": {
    "n": [
      "M.2 slot",
      "Slot M.2"
    ],
    "t": [
      "A small, fast SSD lies flat on the board here. No cable needed.",
      "Un SSD piccolo e veloce si monta qui, piatto sulla scheda, senza cavi."
    ]
  },
  "sata": {
    "n": [
      "SATA ports",
      "Porte SATA"
    ],
    "t": [
      "Cables from hard disks, some SSDs and DVD drives plug in here.",
      "Qui si collegano i cavi di hard disk, alcuni SSD e lettori DVD."
    ]
  },
  "io": {
    "n": [
      "Rear I/O ports",
      "Porte posteriori"
    ],
    "t": [
      "USB, HDMI/DisplayPort for screens, Ethernet for the network, audio jacks.",
      "USB, HDMI/DisplayPort per gli schermi, Ethernet per la rete, prese audio."
    ]
  },
  "bios": {
    "n": [
      "BIOS/UEFI chip",
      "Chip BIOS/UEFI"
    ],
    "t": [
      "Stores the firmware: the first program that runs when you switch on. It checks the hardware and starts the operating system.",
      "Contiene il firmware: il primo programma che parte all'accensione. Controlla l'hardware e avvia il sistema operativo."
    ]
  },
  "bat": {
    "n": [
      "CMOS battery",
      "Batteria tampone (CMOS)"
    ],
    "t": [
      "Keeps the clock running and remembers settings while the PC is unplugged.",
      "Mantiene l'orologio e le impostazioni quando il PC è scollegato."
    ]
  },
  "chipset": {
    "n": [
      "Chipset",
      "Chipset"
    ],
    "t": [
      "A traffic controller helping the CPU talk to USB, storage and other parts.",
      "Un \"vigile\" che aiuta la CPU a comunicare con USB, dischi e altri componenti."
    ]
  },
  "bus": {
    "n": [
      "Buses",
      "Bus"
    ],
    "t": [
      "The copper lines printed on the board: pathways carrying data, addresses and control signals.",
      "Le piste di rame stampate sulla scheda: percorsi che trasportano dati, indirizzi e segnali di controllo."
    ]
  }
};

export const JN: Record<string, [number, number]> = {
  "kb": [
    90,
    240
  ],
  "cpu": [
    290,
    80
  ],
  "ram": [
    290,
    250
  ],
  "gpu": [
    480,
    160
  ],
  "mon": [
    620,
    80
  ],
  "ssd": [
    480,
    280
  ]
};

export const FN: Record<string, string> = {
  "SUM": "SUM",
  "SOMMA": "SUM",
  "AVERAGE": "AVG",
  "MEDIA": "AVG",
  "MAX": "MAX",
  "MIN": "MIN",
  "IF": "IF",
  "SE": "IF",
  "AND": "AND",
  "E": "AND",
  "OR": "OR",
  "O": "OR",
  "NOT": "NOT",
  "NON": "NOT",
  "SQRT": "SQRT",
  "RADQ": "SQRT",
  "POWER": "POW",
  "POTENZA": "POW",
  "COUNT": "COUNT",
  "CONTA.NUMERI": "COUNT",
  "ROUND": "ROUND",
  "ARROTONDA": "ROUND",
  "ABS": "ABS",
  "ASS": "ABS"
};

export const SF: Record<string, any> = {};

export const BUILD = {
  parts: [
    { k: 'cpu', n: ['CPU', 'CPU'], i: 'chip' },
    { k: 'cool', n: ['CPU cooler', 'Dissipatore'], i: 'fan' },
    { k: 'ram', n: ['RAM stick', 'Banco di RAM'], i: 'ram' },
    { k: 'gpu', n: ['Graphics card', 'Scheda video'], i: 'gpu' },
    { k: 'ssd', n: ['M.2 SSD', 'SSD M.2'], i: 'ssd' },
    { k: 'psu', n: ['PSU cable', 'Cavo alimentatore'], i: 'psu' }
  ],
  slots: {
    cpu: ['CPU socket', 'Socket CPU'],
    cool: ['Cooler mount (on top of the CPU)', 'Attacco dissipatore (sopra la CPU)'],
    ram: ['DIMM slots', 'Slot DIMM'],
    gpu: ['PCIe x16 slot', 'Slot PCIe x16'],
    ssd: ['M.2 slot', 'Slot M.2'],
    psu: ['24-pin power connector', 'Connettore 24 pin']
  },
  hint: {
    cpu: ['The processor sits in the square socket.', 'Il processore va nel socket quadrato.'],
    cool: ['The cooler sits on top of the CPU.', 'Il dissipatore va sopra la CPU.'],
    ram: ['RAM goes in the long thin DIMM slots.', 'La RAM va negli slot DIMM lunghi e sottili.'],
    gpu: ['The graphics card goes in the long PCIe slot.', 'La scheda video va nello slot PCIe lungo.'],
    ssd: ['An M.2 SSD lies flat in the small M.2 slot.', 'Un SSD M.2 si monta piatto nel piccolo slot M.2.'],
    psu: ["The PSU's big cable goes into the 24-pin connector.", "Il cavo grande dell'alimentatore va nel connettore a 24 pin."]
  }
};

// Grade 5 Science is appended after the existing Grade 9 catalogue so all legacy
// mission indexes and IDs remain stable.
import {
  GRADE5_SCIENCE_SUBJECT,
  GRADE5_SCIENCE_UNITS,
  GRADE5_SCIENCE_ARCS,
  GRADE5_SCIENCE_MISSIONS
} from './grade5ScienceData';

SUBJECTS.push(GRADE5_SCIENCE_SUBJECT);
const grade5ScienceUnitOffset = UNITS.length;
UNITS.push(...GRADE5_SCIENCE_UNITS);
const grade5ScienceArcOffset = ARCS.length;
ARCS.push(...GRADE5_SCIENCE_ARCS.map(arc => ({
  ...arc,
  unit: (arc.unit || 0) + grade5ScienceUnitOffset
})));
MISSIONS.push(...GRADE5_SCIENCE_MISSIONS.map(mission => ({
  ...mission,
  arc: mission.arc + grade5ScienceArcOffset
})));

// Grade 5 Science · The Universe is the next textbook unit (pages 7–25).
import { GRADE5_UNIVERSE_MISSIONS } from './grade5ScienceUniverseData';

const grade5UniverseUnitOffset = UNITS.length;
UNITS.push({
  title: ['The Universe', "L'Univers"],
  ch: '3–13',
  subject: 'science'
});
const grade5UniverseArcOffset = ARCS.length;
ARCS.push({
  n: 2,
  unit: grade5UniverseUnitOffset,
  subject: 'science',
  title: ['The Universe', "L'Univers"],
  pages: '7–25'
});
MISSIONS.push(...GRADE5_UNIVERSE_MISSIONS.map(mission => ({
  ...mission,
  arc: mission.arc + grade5UniverseArcOffset
})));

 
// Grade 5 Science · Energy and Forces is the third textbook unit (pages 27–49).
import { GRADE5_ENERGY_FORCES_MISSIONS } from './grade5ScienceEnergyForcesData';

const grade5EnergyForcesUnitOffset = UNITS.length;
UNITS.push({
  title: ['Energy and Forces', 'L’energia e le forze'],
  ch: '14–26',
  subject: 'science'
});
const grade5EnergyForcesArcOffset = ARCS.length;
ARCS.push({
  n: 3,
  unit: grade5EnergyForcesUnitOffset,
  subject: 'science',
  title: ['Energy and Forces', 'L’energia e le forze'],
  pages: '27–49'
});
MISSIONS.push(...GRADE5_ENERGY_FORCES_MISSIONS.map(mission => ({
  ...mission,
  arc: mission.arc + grade5EnergyForcesArcOffset
})));
