import React from 'react';
import type { Language } from '../types';
import { pick } from './chemLabs/chemLabShared';
import {
  CartesianLineSlopeLab,
  EuclidTriangleLab,
  LinearSystemCrosserLab,
  ProbabilityUrnLab,
  QuadraticDeltaLab,
  QuadraticInequalityLab,
  RadicalSimplifierLab,
  ThalesCircleLab,
  VieteSumProductLab
} from './mathAdvLabs/Math10Labs';
import {
  ConicTangentLab,
  EllipseHyperbolaLab,
  ExpLogMirrorLab,
  FunctionsSymmetryLab,
  IrrationalSquaringLab,
  ModulusVGraphLab,
  ParabolaCircleBuilderLab,
  TriangleCarnotLab,
  UnitCircleFerrisLab
} from './mathAdvLabs/Math11Labs';

type Props = { missionId: string; lang: Language };

export const MATH_ADV_LAB_META: Record<string, { title: [string, string]; subtitle: [string, string]; note: [string, string] }> = {
  math_l2_m1: {
    title: ['Interactive Linear System Crosser', 'Esploratore Interattivo di Sistemi Lineari'],
    subtitle: ['Slide slopes and intercepts to see intersecting, parallel, and coincident lines.', 'Muovi pendenze e quote per osservare rette incidenti, parallele o coincidenti.'],
    note: ['D ≠ 0 gives 1 unique point; equal slopes either yield 0 or ∞ solutions.', 'D ≠ 0 dà 1 punto unico; stessa pendenza dà 0 oppure ∞ soluzioni.']
  },
  math_l2_m2: {
    title: ['Interactive Radical Simplifier & Existence Guard', 'Semplificatore di Radicali e Guardia C.E.'],
    subtitle: ['Test even vs. odd roots with negative radicands and pull perfect powers outside.', 'Prova indici pari e dispari con radicandi negativi ed estrai le potenze perfette.'],
    note: ['Square roots require radicand ≥ 0 in ℝ; cube roots accept any real number.', 'Le radici pari richiedono radicando ≥ 0 in ℝ; le dispari valgono su tutto ℝ.']
  },
  math_l2_m3: {
    title: ['Cartesian Slope, Distance & Orthogonal Lab', 'Laboratorio Pendenza, Distanza e Perpendicolari'],
    subtitle: ['Move points A and B and compare parallel vs. 90° perpendicular helper lines.', 'Sposta i punti A e B e confronta la retta parallela e la perpendicolare a 90°.'],
    note: ['Parallel lines share slope m; perpendicular lines obey m₁ · m₂ = −1.', 'Le parallele hanno stesso m; le perpendicolari soddisfano m₁ · m₂ = −1.']
  },
  math_l2_m4: {
    title: ['Quadratic Δ & Parabola Root Explorer', 'Esploratore del Discriminante Δ e Radici'],
    subtitle: ['Adjust a, b, and c to watch roots split, merge at Δ = 0, or disappear at Δ < 0.', 'Regola a, b e c per vedere le radici separarsi, fondersi a Δ = 0 o sparire a Δ < 0.'],
    note: ['Δ = b² − 4ac counts real x-intercepts: 2, 1 double, or 0.', 'Δ = b² − 4ac conta le intersezioni reali: 2, 1 doppia o 0.']
  },
  math_l2_m5: {
    title: ['Viète Sum & Product Equation Builder', 'Costruttore Rapido di Equazioni con Viète'],
    subtitle: ['Pick roots x₁ and x₂ and see S = x₁ + x₂ and P = x₁ · x₂ rebuild x² − Sx + P = 0.', 'Scegli x₁ e x₂ e osserva come S e P ricostruiscono x² − Sx + P = 0.'],
    note: ['For ax² + bx + c = 0, x₁ + x₂ = −b/a and x₁ · x₂ = c/a.', 'Per ax² + bx + c = 0 valgono sempre S = −b/a e P = c/a.']
  },
  math_l2_m6: {
    title: ['Quadratic Inequality Sign & Interval Plotter', 'Laboratorio Grafico delle Disequazioni di 2° Grado'],
    subtitle: ['Toggle > 0 vs. < 0 and shift the roots to shade outside vs. inside intervals.', 'Alterna > 0 e < 0 e sposta le radici per colorare valori esterni e interni.'],
    note: ['With a > 0: > 0 takes outer intervals, < 0 takes the interval between roots.', 'Con a > 0: > 0 prende i valori esterni, < 0 quelli interni tra le radici.']
  },
  math_l2_m7: {
    title: ['Euclid’s 1st & 2nd Theorem Projection Simulator', 'Simulatore di Euclide sulle Proiezioni'],
    subtitle: ['Change hypotenuse projections p₁ and p₂ to compute altitude h and legs live.', 'Modifica le proiezioni p₁ e p₂ per calcolare subito altezza h e cateti.'],
    note: ['h² = p₁ · p₂ (2nd Euclid) and b² = a · p₁ (1st Euclid).', 'h² = p₁ · p₂ (2° Euclide) e b² = a · p₁ (1° Euclide).']
  },
  math_l2_m8: {
    title: ['Circle Angles & Similarity Area Scaling Lab', 'Laboratorio Angoli nel Cerchio e Scala delle Aree'],
    subtitle: ['Vary the central angle to watch the inscribed angle halve and test area scaling k².', 'Varia l’angolo al centro per vedere l’angolo inscritto dimezzarsi e il fattore k².'],
    note: ['Inscribed = ½ central; scaling sides by k scales area by k².', 'Inscritto = metà del centro; scalando i lati di k l’area cresce di k².']
  },
  math_l2_m9: {
    title: ['Probability Urn & Law of Large Numbers Simulator', 'Simulatore d’Urna e Legge dei Grandi Numeri'],
    subtitle: ['Run repeated simulated draws and watch experimental frequency converge to P(E).', 'Avvia estrazioni simulate e osserva la frequenza convergere verso P(E).'],
    note: ['P(E) = favorable/total and P(not E) = 1 − P(E).', 'P(E) = favorevoli/possibili e P(Ē) = 1 − P(E).']
  },
  math_l3_m1: {
    title: ['Function Domain, Parity & Inverse Explorer', 'Esploratore di Dominio, Parità e Inversa'],
    subtitle: ['Switch functions to inspect domain restrictions, even/odd symmetry, and mirror y = x.', 'Cambia funzione per osservare dominio, parità pari/dispari e riflessione su y = x.'],
    note: ['f(−x) = f(x) is Even; f(−x) = −f(x) is Odd.', 'f(−x) = f(x) è Pari; f(−x) = −f(x) è Dispari.']
  },
  math_l3_m2: {
    title: ['Absolute Value V-Graph & Distance Solver', 'Grafico a V del Modulo e Distanza'],
    subtitle: ['Slide center c and limit k to see |x − c| < k vs. |x − c| > k.', 'Regola centro c e soglia k per visualizzare |x − c| < k e > k.'],
    note: ['|x − c| measures distance from c on the number line.', '|x − c| misura la distanza da c sulla retta reale.']
  },
  math_l3_m3: {
    title: ['Irrational Equation Squaring & Ghost Root Detector', 'Rilevatore di Soluzioni Estranee (Irrazionali)'],
    subtitle: ['Shift line B(x) below zero to see why squaring creates extraneous ghost roots.', 'Abbassa la retta B(x) sotto zero per vedere nascere le soluzioni fantasma.'],
    note: ['Always enforce B(x) ≥ 0 before squaring √A(x) = B(x).', 'Imponi sempre B(x) ≥ 0 prima di elevare al quadrato √A(x) = B(x).']
  },
  math_l3_m4: {
    title: ['Interactive Parabola & Circle Builder', 'Costruttore Interattivo di Parabola e Circonferenza'],
    subtitle: ['Translate center/vertex (x₀, y₀) and inspect live standard equations.', 'Trasla centro o vertice (x₀, y₀) e leggi subito le equazioni canoniche.'],
    note: ['Circle center C(−a/2, −b/2); parabola vertex x_V = −b/(2a).', 'Centro circonferenza C(−a/2, −b/2); vertice parabola x_V = −b/(2a).']
  },
  math_l3_m5: {
    title: ['Ellipse & Hyperbola Foci & Asymptote Lab', 'Laboratorio di Ellisse e Iperbole'],
    subtitle: ['Compare c² = |a² − b²| (ellipse) vs. c² = a² + b² (hyperbola) and asymptotes.', 'Confronta c² = |a² − b²| (ellisse) con c² = a² + b² (iperbole) e gli asintoti.'],
    note: ['Ellipse has e < 1; hyperbola has e > 1 and asymptotes y = ±(b/a)x.', 'Ellisse ha e < 1; iperbole ha e > 1 e asintoti y = ±(b/a)x.']
  },
  math_l3_m6: {
    title: ['Line–Circle Secant, Tangent & External Sweeper', 'Posizione Retta–Circonferenza (Δ = 0, d = R)'],
    subtitle: ['Sweep the horizontal line across the circle to capture the tangent point at d = R.', 'Scorri la retta sulla circonferenza per cogliere la tangenza esatta a d = R.'],
    note: ['Tangent occurs when d(C, line) = R and Δ = 0.', 'Tangenza esatta quando d(C, retta) = R e Δ = 0.']
  },
  math_l3_m7: {
    title: ['Exponential–Logarithm Mirror & pH Lab', 'Specchio Esponenziale–Logaritmo e Scala pH'],
    subtitle: ['Compare base > 1 vs. 0 < base < 1 across the y = x symmetry line.', 'Confronta base > 1 e 0 < base < 1 rispetto alla bisettrice y = x.'],
    note: ['aˣ = b ⇔ x = logₐ(b) with argument b > 0.', 'aˣ = b ⇔ x = logₐ(b) con argomento b > 0.']
  },
  math_l3_m8: {
    title: ['Animated Unit Circle Ferris Wheel', 'Ruota Goniometrica Animata (sin, cos, tan)'],
    subtitle: ['Rotate angle α from 0° to 360° and watch cos α, sin α, and sin²α + cos²α = 1.', 'Ruota l’angolo α da 0° a 360° per osservare cos α, sin α e la relazione fondamentale.'],
    note: ['Point P(cos α, sin α) always satisfies x² + y² = 1.', 'Il punto P(cos α, sin α) soddisfa sempre cos²α + sin²α = 1.']
  },
  math_l3_m9: {
    title: ['Carnot’s Cosine Theorem & Area Solver', 'Risolutore di Triangoli (Carnot e Area)'],
    subtitle: ['Adjust two sides and angle γ to watch side a and area update live.', 'Modifica due lati e l’angolo γ per calcolare subito il lato a e l’area.'],
    note: ['a² = b² + c² − 2bc cos γ and Area = ½ b · c · sin γ.', 'a² = b² + c² − 2bc cos γ e Area = ½ b · c · sin γ.']
  }
};

export const MathAdvancedLab: React.FC<Props> = ({ missionId, lang }) => {
  const meta = MATH_ADV_LAB_META[missionId];
  if (!meta) return null;

  const renderLab = () => {
    switch (missionId) {
      case 'math_l2_m1': return <LinearSystemCrosserLab lang={lang} />;
      case 'math_l2_m2': return <RadicalSimplifierLab lang={lang} />;
      case 'math_l2_m3': return <CartesianLineSlopeLab lang={lang} />;
      case 'math_l2_m4': return <QuadraticDeltaLab lang={lang} />;
      case 'math_l2_m5': return <VieteSumProductLab lang={lang} />;
      case 'math_l2_m6': return <QuadraticInequalityLab lang={lang} />;
      case 'math_l2_m7': return <EuclidTriangleLab lang={lang} />;
      case 'math_l2_m8': return <ThalesCircleLab lang={lang} />;
      case 'math_l2_m9': return <ProbabilityUrnLab lang={lang} />;
      case 'math_l3_m1': return <FunctionsSymmetryLab lang={lang} />;
      case 'math_l3_m2': return <ModulusVGraphLab lang={lang} />;
      case 'math_l3_m3': return <IrrationalSquaringLab lang={lang} />;
      case 'math_l3_m4': return <ParabolaCircleBuilderLab lang={lang} />;
      case 'math_l3_m5': return <EllipseHyperbolaLab lang={lang} />;
      case 'math_l3_m6': return <ConicTangentLab lang={lang} />;
      case 'math_l3_m7': return <ExpLogMirrorLab lang={lang} />;
      case 'math_l3_m8': return <UnitCircleFerrisLab lang={lang} />;
      case 'math_l3_m9': return <TriangleCarnotLab lang={lang} />;
      default: return null;
    }
  };

  return (
    <section className="chem-lab math-adv-lab" aria-label={pick(lang, 'Interactive mathematics lab', 'Laboratorio interattivo di matematica')}>
      <header className="cl-heading">
        <span className="cl-kicker">
          {pick(lang, 'INTERACTIVE MATH LAB · 2° & 3°/4° SUPERIORE', 'LABORATORIO INTERATTIVO DI MATEMATICA · 2° & 3°/4° SUPERIORE')}
        </span>
        <h3>{pick(lang, meta.title[0], meta.title[1])}</h3>
        <p>{pick(lang, meta.subtitle[0], meta.subtitle[1])}</p>
      </header>
      {renderLab()}
      <footer className="cl-footnote">{pick(lang, meta.note[0], meta.note[1])}</footer>
    </section>
  );
};
