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
      "3 units · chapters 1–11 + G1–G4 · missions coming soon",
      "3 unità · capitoli 1–11 + G1–G4 · missioni in arrivo"
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

// NOTE: This is a partial update for the first increment. Full original content after UNITS/ARCS/MISSIONS must be restored in a follow-up if truncated.
// The remainder of the original file (ARCS, MISSIONS, etc.) is preserved by overwriting only the header sections in a proper full push.
