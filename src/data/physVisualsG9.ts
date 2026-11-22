import type { Language } from '../types';
import { C, T, arrow, anim, move, frame, pick, showDuring } from './sciViz';

/**
 * Grade 9 Physics diagrams, redrawn large with motion that shows the idea. Keys are unchanged so the
 * lessons that use them keep working. The facts shown are standard school physics.
 */
type Builder = (lang: Language) => string;

const ph = (lang: Language) => (en: string, it: string) => pick(lang, en, it);

export const PHYS_VISUAL_BUILDERS: Record<string, Builder> = {
  /* Three SI base quantities, each with something moving */
  phQuant: lang => {
    const p = ph(lang);
    const col = (x: number, color: string, sym: string, unit: string, qty: string, art: string) =>
      `<rect x="${x}" y="24" width="190" height="248" rx="16" fill="${color}" fill-opacity=".1" stroke="${color}" stroke-width="3"/>
      ${art}
      ${T(x + 95, 192, sym, { size: 54, fill: color, weight: 800 })}
      ${T(x + 95, 224, unit, { size: 24 })}
      ${T(x + 95, 258, qty, { size: 20, fill: C.muted })}`;
    // Length: a bar grows along a ruler.
    const length = (x: number) => `<rect x="${x + 22}" y="68" width="146" height="26" rx="4" fill="none" stroke="${C.data}" stroke-width="3"/>
      ${[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => `<line x1="${x + 26 + i * 16}" y1="68" x2="${x + 26 + i * 16}" y2="${i % 2 ? 80 : 88}" stroke="${C.data}" stroke-width="2"/>`).join('')}
      <rect x="${x + 22}" y="112" width="20" height="28" rx="3" fill="${C.data}">${anim('width', '20;146;146;20', 4, 0, 'keyTimes="0;.5;.9;1"')}</rect>`;
    // Mass: a balance rocks.
    const mass = (x: number) => `<polygon points="${x + 75},148 ${x + 115},148 ${x + 95},112" fill="${C.gold}" fill-opacity=".5" stroke="${C.gold}" stroke-width="3"/>
      <g transform="translate(${x + 95} 112)"><g>${move('-6;6;-6', 3.2, 0, '', 'rotate')}<line x1="-62" y1="0" x2="62" y2="0" stroke="${C.gold}" stroke-width="6" stroke-linecap="round"/><rect x="-70" y="-28" width="34" height="28" rx="4" fill="${C.gold}"/><rect x="36" y="-28" width="34" height="28" rx="4" fill="${C.gold}" fill-opacity=".4"/></g></g>`;
    // Time: a clock hand turns.
    const time = (x: number) => `<g transform="translate(${x + 95} 108)"><circle r="50" fill="none" stroke="${C.sakura}" stroke-width="4"/>
      ${[0, 90, 180, 270].map(a => `<line x1="0" y1="-50" x2="0" y2="-40" stroke="${C.sakura}" stroke-width="4" transform="rotate(${a})"/>`).join('')}
      <line x1="0" y1="0" x2="0" y2="-38" stroke="${C.sakura}" stroke-width="5" stroke-linecap="round">${move('0;360', 4, 0, '', 'rotate')}</line><circle r="6" fill="${C.sakura}"/></g>`;
    return frame(p('SI base quantities', 'Grandezze fondamentali del SI'),
      col(20, C.data, 'm', p('metre', 'metro'), p('length', 'lunghezza'), length(20))
      + col(225, C.gold, 'kg', p('kilogram', 'chilogrammo'), p('mass', 'massa'), mass(225))
      + col(430, C.sakura, 's', p('second', 'secondo'), p('time', 'tempo'), time(430)),
      p('Three of the 7 SI base quantities', 'Tre delle 7 grandezze base del SI'), 330);
  },

  /* Orders of magnitude: a spotlight moves along a power-of-ten scale */
  phScale: lang => {
    const p = ph(lang);
    const stops = [
      { x: 90, e: '10⁻¹⁰ m', n: p('atom', 'atomo'), c: C.data },
      { x: 250, e: '10⁰ m', n: p('human', 'persona'), c: C.good },
      { x: 410, e: '10⁷ m', n: p('Earth', 'Terra'), c: C.gold },
      { x: 570, e: '10²¹ m', n: p('galaxy', 'galassia'), c: C.sakura }
    ];
    const dur = 8;
    const marks = stops.map(s => `<circle cx="${s.x}" cy="150" r="12" fill="${s.c}"/>${T(s.x, 200, s.n, { size: 24, fill: s.c, weight: 700 })}${T(s.x, 232, s.e, { size: 22 })}`).join('');
    const spot = `<circle cx="90" cy="150" r="26" fill="none" stroke="${C.text}" stroke-width="5">
      <animate attributeName="cx" values="90;90;250;250;410;410;570;570;90" keyTimes="0;.1;.25;.35;.5;.6;.75;.9;1" dur="${dur}s" repeatCount="indefinite"/></circle>`;
    return frame(p('Orders of magnitude', 'Ordini di grandezza'),
      `<line x1="50" y1="150" x2="610" y2="150" stroke="${C.muted}" stroke-width="5" stroke-linecap="round"/>${marks}${spot}
      ${T(320, 70, p('Each step is ×10', 'Ogni passo è ×10'), { size: 30, fill: C.gold, weight: 800 })}
      ${T(320, 108, p('one order of magnitude', 'un ordine di grandezza'), { size: 22, fill: C.muted })}`,
      p('From the atom to a galaxy: about 31 orders of magnitude', 'Dall’atomo alla galassia: circa 31 ordini di grandezza'));
  },

  /* Density: same volume, more particles */
  phDensity: lang => {
    const p = ph(lang);
    const box = (x: number, color: string, n: number, name: string) => {
      const cols = Math.ceil(Math.sqrt(n)), cell = 150 / (cols + 1);
      const dots = Array.from({ length: n }, (_, i) => {
        const cx = x + 5 + cell * (1 + (i % cols)), cy = 70 + cell * (1 + Math.floor(i / cols));
        const d = 3 + (i % 3);
        return `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="8" fill="${color}">${anim('cx', `${cx.toFixed(1)};${(cx + d).toFixed(1)};${(cx - d).toFixed(1)};${cx.toFixed(1)}`, 0.7 + (i % 4) * 0.1)}${anim('cy', `${cy.toFixed(1)};${(cy - d).toFixed(1)};${(cy + d).toFixed(1)};${cy.toFixed(1)}`, 0.8 + (i % 3) * 0.1)}</circle>`;
      }).join('');
      return `<rect x="${x}" y="70" width="160" height="160" rx="10" fill="${color}" fill-opacity=".08" stroke="${color}" stroke-width="4"/>${dots}
        ${T(x + 80, 262, name, { size: 24, fill: color, weight: 700 })}`;
    };
    return frame(p('Density', 'Densità'),
      `${T(180, 44, p('same volume', 'stesso volume'), { size: 24, fill: C.muted })}
      ${box(40, C.data, 5, p('less dense', 'meno denso'))}${box(220, C.ember, 12, p('more dense', 'più denso'))}
      ${T(520, 140, 'ρ = m / V', { size: 40, fill: C.gold, weight: 800 })}${T(520, 182, 'kg/m³', { size: 26, fill: C.muted })}`,
      p('More mass in the same volume means a higher density', 'Più massa nello stesso volume significa densità maggiore'));
  },

  /* Direct vs inverse proportionality, with a point moving on each graph */
  phGraph: lang => {
    const p = ph(lang);
    const g = (ox: number, color: string, path: string, motion: string, title: string, rule: string) =>
      `<g transform="translate(${ox} 0)"><line x1="40" y1="50" x2="40" y2="220" stroke="${C.muted}" stroke-width="4"/><line x1="40" y1="220" x2="270" y2="220" stroke="${C.muted}" stroke-width="4"/>
      ${T(26, 62, 'y', { size: 22, fill: C.muted, anchor: 'end' })}${T(274, 250, 'x', { size: 22, fill: C.muted, anchor: 'start' })}
      <path d="${path}" fill="none" stroke="${color}" stroke-width="6" stroke-linecap="round"/>
      <circle r="10" fill="${C.text}" stroke="${color}" stroke-width="4"><animateMotion dur="5s" repeatCount="indefinite" path="${path}" keyPoints="0;1;0" keyTimes="0;.5;1" calcMode="linear"/></circle>
      ${T(155, 278, title, { size: 24, fill: color, weight: 800 })}${T(155, 306, rule, { size: 20, fill: C.muted })}</g>`;
    return frame(p('Direct and inverse proportion', 'Proporzionalità diretta e inversa'),
      g(10, C.data, 'M40 220 L260 60', '', p('Direct: y = k·x', 'Diretta: y = k·x'), p('x doubles → y doubles', 'x raddoppia → y raddoppia'))
      + g(320, C.ember, 'M60 60 C 80 150 140 200 270 212', '', p('Inverse: y = k/x', 'Inversa: y = k/x'), p('x doubles → y halves', 'x raddoppia → y dimezza')),
      '', 330);
  },

  /* Measuring with uncertainty */
  phRuler: lang => {
    const p = ph(lang);
    const ticks = Array.from({ length: 31 }, (_, i) => `<line x1="${70 + i * 17}" y1="206" x2="${70 + i * 17}" y2="${i % 10 === 0 ? 232 : i % 2 === 0 ? 224 : 216}" stroke="${C.text}" stroke-width="${i % 10 === 0 ? 3 : 2}"/>`).join('');
    return frame(p('Measurement and uncertainty', 'Misura e incertezza'),
      `<rect x="62" y="196" width="536" height="48" rx="6" fill="none" stroke="${C.muted}" stroke-width="3"/>${ticks}
      ${[0, 5, 10, 15].map(n => T(70 + n * 2 * 17, 270, String(n), { size: 20, fill: C.muted })).join('')}
      <rect x="70" y="150" width="${15 * 2 * 17}" height="30" rx="5" fill="${C.data}" fill-opacity=".75"/>
      ${T(70 + 15 * 2 * 17 + 18, 176, 'cm', { size: 20, fill: C.muted, anchor: 'start' })}
      <g>${anim('opacity', '1;.35;1', 2.4)}<rect x="${70 + 15 * 2 * 17 - 6}" y="124" width="12" height="76" fill="${C.gold}" fill-opacity=".55"/></g>
      <line x1="${70 + 15 * 2 * 17 - 22}" y1="112" x2="${70 + 15 * 2 * 17 + 22}" y2="112" stroke="${C.gold}" stroke-width="5" stroke-linecap="round">${anim('x1', `${70 + 15 * 2 * 17 - 10};${70 + 15 * 2 * 17 - 26};${70 + 15 * 2 * 17 - 10}`, 2.4)}${anim('x2', `${70 + 15 * 2 * 17 + 10};${70 + 15 * 2 * 17 + 26};${70 + 15 * 2 * 17 + 10}`, 2.4)}</line>
      ${T(320, 62, '15.0 ± 0.1 cm', { size: 44, fill: C.gold, weight: 800 })}
      ${T(320, 96, p('best value ± uncertainty', 'valore migliore ± incertezza'), { size: 22, fill: C.muted })}`,
      p('Every measurement carries an uncertainty', 'Ogni misura ha un’incertezza'));
  },

  /* Scalar vs vector: the arrow turns, its size stays the same */
  phVector: lang => {
    const p = ph(lang);
    return frame(p('Scalar and vector', 'Grandezza scalare e vettoriale'),
      `<rect x="24" y="24" width="270" height="236" rx="16" fill="${C.data}" fill-opacity=".1" stroke="${C.data}" stroke-width="3"/>
      ${T(159, 62, p('SCALAR', 'SCALARE'), { size: 24, fill: C.data, weight: 800 })}
      ${T(159, 150, '25 °C', { size: 60, weight: 800 })}
      ${T(159, 200, p('only a number', 'solo un numero'), { size: 24 })}
      ${T(159, 232, p('+ a unit', '+ un’unità'), { size: 20, fill: C.muted })}
      <rect x="346" y="24" width="270" height="236" rx="16" fill="${C.ember}" fill-opacity=".1" stroke="${C.ember}" stroke-width="3"/>
      ${T(481, 62, p('VECTOR', 'VETTORE'), { size: 24, fill: C.ember, weight: 800 })}
      <g transform="translate(440 134)"><circle r="4" fill="${C.muted}"/>
        <g>${move('-40;45;-40;-40', 6, 0, '0;.4;.8;1', 'rotate')}${arrow(0, 0, 100, 0, C.ember, 8)}</g></g>
      ${T(481, 214, p('number + direction', 'numero + direzione'), { size: 24 })}
      ${T(481, 244, p('turn it: a new vector', 'ruotalo: un nuovo vettore'), { size: 20, fill: C.muted })}`,
      p('Vectors need a direction as well as a size', 'I vettori hanno una direzione oltre alla misura'), 330);
  },

  /* Forces on a block: push beats friction, the block slides */
  phForce: lang => {
    const p = ph(lang);
    const dur = 5;
    return frame(p('Forces on a block', 'Forze su un blocco'),
      `<line x1="30" y1="226" x2="610" y2="226" stroke="${C.muted}" stroke-width="5" stroke-linecap="round"/>
      <g>${move('0 0;0 0;60 0;60 0;0 0', dur, 0, '0;.25;.75;.9;1')}
        <rect x="240" y="150" width="130" height="76" rx="8" fill="${C.panel}" stroke="${C.data}" stroke-width="5"/>
        ${T(305, 198, 'm', { size: 34, weight: 800 })}
        ${arrow(305, 226, 305, 296, C.ember, 7)}${T(305 + 14, 292, p('weight', 'peso'), { size: 22, fill: C.ember, anchor: 'start' })}
        ${arrow(305, 150, 305, 86, C.good, 7)}${T(305 + 14, 104, p('normal', 'normale'), { size: 22, fill: C.good, anchor: 'start' })}
        ${arrow(240, 188, 168, 188, C.sakura, 7)}${T(168, 168, p('friction', 'attrito'), { size: 22, fill: C.sakura })}
        <g>${arrow(370, 188, 470, 188, C.gold, 7)}${anim('opacity', '.3;1;1;.3', dur, 0, 'keyTimes="0;.25;.75;1"')}</g>${T(470, 168, p('push', 'spinta'), { size: 22, fill: C.gold })}
      </g>
      ${T(320, 44, p('push > friction → the block accelerates', 'spinta > attrito → il blocco accelera'), { size: 26, fill: C.gold, weight: 800 })}`,
      '', 320);
  },

  /* A lever: the beam rocks and settles level when the moments are equal */
  phLever: lang => {
    const p = ph(lang);
    return frame(p('Lever and moment', 'Leva e momento'),
      `<polygon points="290,250 350,250 320,170" fill="${C.muted}" fill-opacity=".6" stroke="${C.muted}" stroke-width="3"/>
      <g transform="translate(320 170)"><g>${move('-9;6;-3;1;0;0;-9', 6, 0, '0;.2;.35;.5;.6;.9;1', 'rotate')}
        <line x1="-270" y1="0" x2="270" y2="0" stroke="${C.ember}" stroke-width="12" stroke-linecap="round"/>
        <rect x="-240" y="-62" width="80" height="62" rx="6" fill="${C.data}"/>${T(-200, -22, 'F₁', { size: 28, weight: 800 })}
        ${arrow(210, -4, 210, -96, C.gold, 8)}${T(210, -108, 'F₂', { size: 28, fill: C.gold, weight: 800 })}
        <line x1="-200" y1="26" x2="0" y2="26" stroke="${C.data}" stroke-width="3"/>${T(-100, 56, 'd₁', { size: 24, fill: C.data })}
        <line x1="0" y1="26" x2="210" y2="26" stroke="${C.gold}" stroke-width="3"/>${T(105, 56, 'd₂', { size: 24, fill: C.gold })}
      </g></g>
      ${T(320, 292, 'F₁ · d₁ = F₂ · d₂', { size: 34, fill: C.gold, weight: 800 })}`,
      p('Equal moments → the lever is balanced', 'Momenti uguali → la leva è in equilibrio'), 360);
  },

  /* Pressure grows with depth: a probe sinks and the arrows lengthen */
  phTank: lang => {
    const p = ph(lang);
    const dur = 6;
    const levels = [{ y: 90, n: 1 }, { y: 150, n: 2 }, { y: 210, n: 3 }];
    return frame(p('Pressure in a liquid', 'Pressione in un liquido'),
      `<rect x="70" y="54" width="250" height="220" rx="10" fill="${C.data}" fill-opacity=".16" stroke="${C.data}" stroke-width="4"/>
      <line x1="70" y1="54" x2="320" y2="54" stroke="${C.data}" stroke-width="4"/>
      ${levels.map(l => `<g>${arrow(86 + 38 * l.n + 18, l.y, 78, l.y, C.ember, 7)}</g>`).join('')}
      <g>${move('0 0;0 150;0 150;0 0', dur, 0, '0;.6;.8;1')}<rect x="258" y="64" width="46" height="34" rx="6" fill="${C.gold}"/></g>
      ${T(500, 100, 'p = ρ · g · h', { size: 38, fill: C.gold, weight: 800 })}
      ${T(500, 146, p('deeper', 'più in basso'), { size: 24 })}${T(500, 176, p('= more pressure', '= più pressione'), { size: 24 })}
      ${arrow(346, 70, 346, 262, C.muted, 3)}${T(366, 170, 'h', { size: 28, fill: C.muted, anchor: 'start' })}`,
      p('Stevin’s law: pressure grows with depth', 'Legge di Stevino: la pressione cresce con la profondità'), 320);
  }
};
