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
                          "A student is asked to explain The computer cycle using a familiar computer task. What should they examine?",
                          "A uno studente viene chiesto di spiegare Il ciclo del computer usando un'attività informatica familiare. Che cosa dovrebbe osservare?"
                        ],
                        "steps": [
                          [
                            "1. Identify the component or process involved.",
                            "1. Individua il componente o il processo coinvolto."
                          ],
                          [
                            "2. Describe its role in the computer system.",
                            "2. Descrivi il suo ruolo nel sistema informatico."
                          ],
                          [
                            "3. Connect that role to the information or task being handled.",
                            "3. Collega quel ruolo alle informazioni o all'attività gestita."
                          ]
                        ],
                        "answer": [
                          "A computer accepts input, processes data, produces output and can store information for later use.",
                          "Un computer riceve input, elabora dati, produce output e può memorizzare informazioni per utilizzarle in seguito."
                        ]
                      },
                      "misconceptions": [
                        {
                          "belief": [
                            "This concept works exactly like every other computer component.",
                            "Questo concetto funziona esattamente come ogni altro componente del computer."
                          ],
                          "correction": [
                            "A computer accepts input, processes data, produces output and can store information for later use.",
                            "Un computer riceve input, elabora dati, produce output e può memorizzare informazioni per utilizzarle in seguito."
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
                          "A student is asked to explain Hardware and software using a familiar computer task. What should they examine?",
                          "A uno studente viene chiesto di spiegare Hardware e software usando un'attività informatica familiare. Che cosa dovrebbe osservare?"
                        ],
                        "steps": [
                          [
                            "1. Identify the component or process involved.",
                            "1. Individua il componente o il processo coinvolto."
                          ],
                          [
                            "2. Describe its role in the computer system.",
                            "2. Descrivi il suo ruolo nel sistema informatico."
                          ],
                          [
                            "3. Connect that role to the information or task being handled.",
                            "3. Collega quel ruolo alle informazioni o all'attività gestita."
                          ]
                        ],
                        "answer": [
                          "Hardware is the physical equipment; software is the programs and instructions that tell the equipment what to do.",
                          "L'hardware è la parte fisica; il software è l'insieme di programmi e istruzioni che indicano ai componenti cosa fare."
                        ]
                      },
                      "misconceptions": [
                        {
                          "belief": [
                            "This concept works exactly like every other computer component.",
                            "Questo concetto funziona esattamente come ogni altro componente del computer."
                          ],
                          "correction": [
                            "Hardware is the physical equipment; software is the programs and instructions that tell the equipment what to do.",
                            "L'hardware è la parte fisica; il software è l'insieme di programmi e istruzioni che indicano ai componenti cosa fare."
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
                          "A student is asked to explain The von Neumann architecture using a familiar computer task. What should they examine?",
                          "A uno studente viene chiesto di spiegare L'architettura di von Neumann usando un'attività informatica familiare. Che cosa dovrebbe osservare?"
                        ],
                        "steps": [
                          [
                            "1. Identify the component or process involved.",
                            "1. Individua il componente o il processo coinvolto."
                          ],
                          [
                            "2. Describe its role in the computer system.",
                            "2. Descrivi il suo ruolo nel sistema informatico."
                          ],
                          [
                            "3. Connect that role to the information or task being handled.",
                            "3. Collega quel ruolo alle informazioni o all'attività gestita."
                          ]
                        ],
                        "answer": [
                          "In the von Neumann model, instructions and data share main memory. The CPU processes instructions, input/output devices communicate with the outside world, and buses connect the components.",
                          "Nel modello di von Neumann, istruzioni e dati condividono la memoria centrale. La CPU esegue le istruzioni, le periferiche di input/output comunicano con l'esterno e i bus collegano i componenti."
                        ]
                      },
                      "misconceptions": [
                        {
                          "belief": [
                            "This concept works exactly like every other computer component.",
                            "Questo concetto funziona esattamente come ogni altro componente del computer."
                          ],
                          "correction": [
                            "In the von Neumann model, instructions and data share main memory. The CPU processes instructions, input/output devices communicate with the outside world, and buses connect the components.",
                            "Nel modello di von Neumann, istruzioni e dati condividono la memoria centrale. La CPU esegue le istruzioni, le periferiche di input/output comunicano con l'esterno e i bus collegano i componenti."
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
                          "A student is asked to explain The motherboard using a familiar computer task. What should they examine?",
                          "A uno studente viene chiesto di spiegare La scheda madre usando un'attività informatica familiare. Che cosa dovrebbe osservare?"
                        ],
                        "steps": [
                          [
                            "1. Identify the component or process involved.",
                            "1. Individua il componente o il processo coinvolto."
                          ],
                          [
                            "2. Describe its role in the computer system.",
                            "2. Descrivi il suo ruolo nel sistema informatico."
                          ],
                          [
                            "3. Connect that role to the information or task being handled.",
                            "3. Collega quel ruolo alle informazioni o all'attività gestita."
                          ]
                        ],
                        "answer": [
                          "The motherboard is the main circuit board. It provides connections and communication paths for the CPU, memory, storage and expansion devices.",
                          "La scheda madre è il circuito principale. Fornisce connessioni e percorsi di comunicazione per CPU, memoria, archiviazione e dispositivi di espansione."
                        ]
                      },
                      "misconceptions": [
                        {
                          "belief": [
                            "This concept works exactly like every other computer component.",
                            "Questo concetto funziona esattamente come ogni altro componente del computer."
                          ],
                          "correction": [
                            "The motherboard is the main circuit board. It provides connections and communication paths for the CPU, memory, storage and expansion devices.",
                            "La scheda madre è il circuito principale. Fornisce connessioni e percorsi di comunicazione per CPU, memoria, archiviazione e dispositivi di espansione."
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
                          "A student is asked to explain The power supply unit using a familiar computer task. What should they examine?",
                          "A uno studente viene chiesto di spiegare L'alimentatore usando un'attività informatica familiare. Che cosa dovrebbe osservare?"
                        ],
                        "steps": [
                          [
                            "1. Identify the component or process involved.",
                            "1. Individua il componente o il processo coinvolto."
                          ],
                          [
                            "2. Describe its role in the computer system.",
                            "2. Descrivi il suo ruolo nel sistema informatico."
                          ],
                          [
                            "3. Connect that role to the information or task being handled.",
                            "3. Collega quel ruolo alle informazioni o all'attività gestita."
                          ]
                        ],
                        "answer": [
                          "The PSU converts incoming alternating current into regulated low-voltage direct current required by computer components.",
                          "L'alimentatore converte la corrente alternata in ingresso in corrente continua regolata a bassa tensione, necessaria ai componenti del computer."
                        ]
                      },
                      "misconceptions": [
                        {
                          "belief": [
                            "This concept works exactly like every other computer component.",
                            "Questo concetto funziona esattamente come ogni altro componente del computer."
                          ],
                          "correction": [
                            "The PSU converts incoming alternating current into regulated low-voltage direct current required by computer components.",
                            "L'alimentatore converte la corrente alternata in ingresso in corrente continua regolata a bassa tensione, necessaria ai componenti del computer."
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
                          "A student is asked to explain The CPU and instruction cycle using a familiar computer task. What should they examine?",
                          "A uno studente viene chiesto di spiegare La CPU e il ciclo delle istruzioni usando un'attività informatica familiare. Che cosa dovrebbe osservare?"
                        ],
                        "steps": [
                          [
                            "1. Identify the component or process involved.",
                            "1. Individua il componente o il processo coinvolto."
                          ],
                          [
                            "2. Describe its role in the computer system.",
                            "2. Descrivi il suo ruolo nel sistema informatico."
                          ],
                          [
                            "3. Connect that role to the information or task being handled.",
                            "3. Collega quel ruolo alle informazioni o all'attività gestita."
                          ]
                        ],
                        "answer": [
                          "The CPU executes program instructions. Its control unit coordinates operations, the arithmetic logic unit performs calculations and logic, and registers hold small amounts of data in immediate use. The fetch–decode–execute cycle repeats as instructions run.",
                          "La CPU esegue le istruzioni dei programmi. L'unità di controllo coordina le operazioni, l'unità aritmetico-logica esegue calcoli e operazioni logiche e i registri conservano piccole quantità di dati in uso immediato. Il ciclo fetch–decode–execute si ripete durante l'esecuzione."
                        ]
                      },
                      "misconceptions": [
                        {
                          "belief": [
                            "This concept works exactly like every other computer component.",
                            "Questo concetto funziona esattamente come ogni altro componente del computer."
                          ],
                          "correction": [
                            "The CPU executes program instructions. Its control unit coordinates operations, the arithmetic logic unit performs calculations and logic, and registers hold small amounts of data in immediate use. The fetch–decode–execute cycle repeats as instructions run.",
                            "La CPU esegue le istruzioni dei programmi. L'unità di controllo coordina le operazioni, l'unità aritmetico-logica esegue calcoli e operazioni logiche e i registri conservano piccole quantità di dati in uso immediato. Il ciclo fetch–decode–execute si ripete durante l'esecuzione."
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
                          "A student is asked to explain Cores and clock speed using a familiar computer task. What should they examine?",
                          "A uno studente viene chiesto di spiegare Core e frequenza di clock usando un'attività informatica familiare. Che cosa dovrebbe osservare?"
                        ],
                        "steps": [
                          [
                            "1. Identify the component or process involved.",
                            "1. Individua il componente o il processo coinvolto."
                          ],
                          [
                            "2. Describe its role in the computer system.",
                            "2. Descrivi il suo ruolo nel sistema informatico."
                          ],
                          [
                            "3. Connect that role to the information or task being handled.",
                            "3. Collega quel ruolo alle informazioni o all'attività gestita."
                          ]
                        ],
                        "answer": [
                          "Clock speed describes the number of clock cycles per second, while cores are processing units within a CPU. Real performance also depends on architecture, workload and other factors.",
                          "La frequenza di clock indica il numero di cicli al secondo, mentre i core sono unità di elaborazione all'interno della CPU. Le prestazioni reali dipendono anche da architettura, carico di lavoro e altri fattori."
                        ]
                      },
                      "misconceptions": [
                        {
                          "belief": [
                            "This concept works exactly like every other computer component.",
                            "Questo concetto funziona esattamente come ogni altro componente del computer."
                          ],
                          "correction": [
                            "Clock speed describes the number of clock cycles per second, while cores are processing units within a CPU. Real performance also depends on architecture, workload and other factors.",
                            "La frequenza di clock indica il numero di cicli al secondo, mentre i core sono unità di elaborazione all'interno della CPU. Le prestazioni reali dipendono anche da architettura, carico di lavoro e altri fattori."
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
                          "A student is asked to explain RAM and volatility using a familiar computer task. What should they examine?",
                          "A uno studente viene chiesto di spiegare RAM e volatilità usando un'attività informatica familiare. Che cosa dovrebbe osservare?"
                        ],
                        "steps": [
                          [
                            "1. Identify the component or process involved.",
                            "1. Individua il componente o il processo coinvolto."
                          ],
                          [
                            "2. Describe its role in the computer system.",
                            "2. Descrivi il suo ruolo nel sistema informatico."
                          ],
                          [
                            "3. Connect that role to the information or task being handled.",
                            "3. Collega quel ruolo alle informazioni o all'attività gestita."
                          ]
                        ],
                        "answer": [
                          "RAM temporarily holds programs and data currently in use. It is volatile, so its contents are lost when power is removed.",
                          "La RAM conserva temporaneamente programmi e dati in uso. È volatile: il suo contenuto si perde quando viene tolta l'alimentazione."
                        ]
                      },
                      "misconceptions": [
                        {
                          "belief": [
                            "This concept works exactly like every other computer component.",
                            "Questo concetto funziona esattamente come ogni altro componente del computer."
                          ],
                          "correction": [
                            "RAM temporarily holds programs and data currently in use. It is volatile, so its contents are lost when power is removed.",
                            "La RAM conserva temporaneamente programmi e dati in uso. È volatile: il suo contenuto si perde quando viene tolta l'alimentazione."
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
                          "A student is asked to explain Cache and ROM using a familiar computer task. What should they examine?",
                          "A uno studente viene chiesto di spiegare Cache e ROM usando un'attività informatica familiare. Che cosa dovrebbe osservare?"
                        ],
                        "steps": [
                          [
                            "1. Identify the component or process involved.",
                            "1. Individua il componente o il processo coinvolto."
                          ],
                          [
                            "2. Describe its role in the computer system.",
                            "2. Descrivi il suo ruolo nel sistema informatico."
                          ],
                          [
                            "3. Connect that role to the information or task being handled.",
                            "3. Collega quel ruolo alle informazioni o all'attività gestita."
                          ]
                        ],
                        "answer": [
                          "Cache is small, very fast memory that keeps frequently needed data close to the CPU. ROM is non-volatile memory used to retain essential firmware.",
                          "La cache è una memoria piccola e molto veloce che conserva dati usati frequentemente vicino alla CPU. La ROM è una memoria non volatile usata per conservare firmware essenziale."
                        ]
                      },
                      "misconceptions": [
                        {
                          "belief": [
                            "This concept works exactly like every other computer component.",
                            "Questo concetto funziona esattamente come ogni altro componente del computer."
                          ],
                          "correction": [
                            "Cache is small, very fast memory that keeps frequently needed data close to the CPU. ROM is non-volatile memory used to retain essential firmware.",
                            "La cache è una memoria piccola e molto veloce che conserva dati usati frequentemente vicino alla CPU. La ROM è una memoria non volatile usata per conservare firmware essenziale."
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
                          "A student is asked to explain System buses using a familiar computer task. What should they examine?",
                          "A uno studente viene chiesto di spiegare I bus di sistema usando un'attività informatica familiare. Che cosa dovrebbe osservare?"
                        ],
                        "steps": [
                          [
                            "1. Identify the component or process involved.",
                            "1. Individua il componente o il processo coinvolto."
                          ],
                          [
                            "2. Describe its role in the computer system.",
                            "2. Descrivi il suo ruolo nel sistema informatico."
                          ],
                          [
                            "3. Connect that role to the information or task being handled.",
                            "3. Collega quel ruolo alle informazioni o all'attività gestita."
                          ]
                        ],
                        "answer": [
                          "The data bus carries data, the address bus identifies a location, and the control bus carries signals that coordinate operations.",
                          "Il bus dati trasporta i dati, il bus indirizzi identifica una posizione e il bus di controllo trasporta segnali che coordinano le operazioni."
                        ]
                      },
                      "misconceptions": [
                        {
                          "belief": [
                            "This concept works exactly like every other computer component.",
                            "Questo concetto funziona esattamente come ogni altro componente del computer."
                          ],
                          "correction": [
                            "The data bus carries data, the address bus identifies a location, and the control bus carries signals that coordinate operations.",
                            "Il bus dati trasporta i dati, il bus indirizzi identifica una posizione e il bus di controllo trasporta segnali che coordinano le operazioni."
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
                          "A student is asked to explain Mass storage using a familiar computer task. What should they examine?",
                          "A uno studente viene chiesto di spiegare Memoria di massa usando un'attività informatica familiare. Che cosa dovrebbe osservare?"
                        ],
                        "steps": [
                          [
                            "1. Identify the component or process involved.",
                            "1. Individua il componente o il processo coinvolto."
                          ],
                          [
                            "2. Describe its role in the computer system.",
                            "2. Descrivi il suo ruolo nel sistema informatico."
                          ],
                          [
                            "3. Connect that role to the information or task being handled.",
                            "3. Collega quel ruolo alle informazioni o all'attività gestita."
                          ]
                        ],
                        "answer": [
                          "Mass storage keeps files and programs when power is off. HDDs use magnetic disks, SSDs use flash memory, optical media use lasers, and cloud storage keeps data on remote systems.",
                          "La memoria di massa conserva file e programmi anche a computer spento. Gli HDD usano dischi magnetici, gli SSD memoria flash, i supporti ottici usano laser e il cloud conserva i dati su sistemi remoti."
                        ]
                      },
                      "misconceptions": [
                        {
                          "belief": [
                            "This concept works exactly like every other computer component.",
                            "Questo concetto funziona esattamente come ogni altro componente del computer."
                          ],
                          "correction": [
                            "Mass storage keeps files and programs when power is off. HDDs use magnetic disks, SSDs use flash memory, optical media use lasers, and cloud storage keeps data on remote systems.",
                            "La memoria di massa conserva file e programmi anche a computer spento. Gli HDD usano dischi magnetici, gli SSD memoria flash, i supporti ottici usano laser e il cloud conserva i dati su sistemi remoti."
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
                }
          ],
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
                          "A student is asked to explain Input and output peripherals using a familiar computer task. What should they examine?",
                          "A uno studente viene chiesto di spiegare Periferiche di input e output usando un'attività informatica familiare. Che cosa dovrebbe osservare?"
                        ],
                        "steps": [
                          [
                            "1. Identify the component or process involved.",
                            "1. Individua il componente o il processo coinvolto."
                          ],
                          [
                            "2. Describe its role in the computer system.",
                            "2. Descrivi il suo ruolo nel sistema informatico."
                          ],
                          [
                            "3. Connect that role to the information or task being handled.",
                            "3. Collega quel ruolo alle informazioni o all'attività gestita."
                          ]
                        ],
                        "answer": [
                          "Input devices send information to a computer; output devices present information from it. Some devices perform both roles.",
                          "I dispositivi di input inviano informazioni al computer; quelli di output presentano le informazioni elaborate. Alcuni dispositivi svolgono entrambi i ruoli."
                        ]
                      },
                      "misconceptions": [
                        {
                          "belief": [
                            "This concept works exactly like every other computer component.",
                            "Questo concetto funziona esattamente come ogni altro componente del computer."
                          ],
                          "correction": [
                            "Input devices send information to a computer; output devices present information from it. Some devices perform both roles.",
                            "I dispositivi di input inviano informazioni al computer; quelli di output presentano le informazioni elaborate. Alcuni dispositivi svolgono entrambi i ruoli."
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
                          "A student is asked to explain Capacitive touchscreens using a familiar computer task. What should they examine?",
                          "A uno studente viene chiesto di spiegare Touchscreen capacitivi usando un'attività informatica familiare. Che cosa dovrebbe osservare?"
                        ],
                        "steps": [
                          [
                            "1. Identify the component or process involved.",
                            "1. Individua il componente o il processo coinvolto."
                          ],
                          [
                            "2. Describe its role in the computer system.",
                            "2. Descrivi il suo ruolo nel sistema informatico."
                          ],
                          [
                            "3. Connect that role to the information or task being handled.",
                            "3. Collega quel ruolo alle informazioni o all'attività gestita."
                          ]
                        ],
                        "answer": [
                          "A capacitive screen detects a touch by sensing a change in the electrical field at its surface, typically caused by a conductive finger.",
                          "Uno schermo capacitivo rileva il tocco percependo una variazione del campo elettrico sulla superficie, in genere causata da un dito conduttivo."
                        ]
                      },
                      "misconceptions": [
                        {
                          "belief": [
                            "This concept works exactly like every other computer component.",
                            "Questo concetto funziona esattamente come ogni altro componente del computer."
                          ],
                          "correction": [
                            "A capacitive screen detects a touch by sensing a change in the electrical field at its surface, typically caused by a conductive finger.",
                            "Uno schermo capacitivo rileva il tocco percependo una variazione del campo elettrico sulla superficie, in genere causata da un dito conduttivo."
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
                          "A student is asked to explain E-waste and Moore's law using a familiar computer task. What should they examine?",
                          "A uno studente viene chiesto di spiegare RAEE e legge di Moore usando un'attività informatica familiare. Che cosa dovrebbe osservare?"
                        ],
                        "steps": [
                          [
                            "1. Identify the component or process involved.",
                            "1. Individua il componente o il processo coinvolto."
                          ],
                          [
                            "2. Describe its role in the computer system.",
                            "2. Descrivi il suo ruolo nel sistema informatico."
                          ],
                          [
                            "3. Connect that role to the information or task being handled.",
                            "3. Collega quel ruolo alle informazioni o all'attività gestita."
                          ]
                        ],
                        "answer": [
                          "Electronic waste should be collected and recycled responsibly to recover materials and reduce pollution. Moore's law describes a historical trend in the growth of transistor counts on integrated circuits; it is not a guarantee about every device's speed.",
                          "I rifiuti elettronici devono essere raccolti e riciclati correttamente per recuperare materiali e ridurre l'inquinamento. La legge di Moore descrive una tendenza storica nella crescita del numero di transistor nei circuiti integrati; non garantisce la velocità di ogni dispositivo."
                        ]
                      },
                      "misconceptions": [
                        {
                          "belief": [
                            "This concept works exactly like every other computer component.",
                            "Questo concetto funziona esattamente come ogni altro componente del computer."
                          ],
                          "correction": [
                            "Electronic waste should be collected and recycled responsibly to recover materials and reduce pollution. Moore's law describes a historical trend in the growth of transistor counts on integrated circuits; it is not a guarantee about every device's speed.",
                            "I rifiuti elettronici devono essere raccolti e riciclati correttamente per recuperare materiali e ridurre l'inquinamento. La legge di Moore descrive una tendenza storica nella crescita del numero di transistor nei circuiti integrati; non garantisce la velocità di ogni dispositivo."
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
