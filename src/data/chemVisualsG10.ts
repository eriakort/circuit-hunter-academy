import type { Language } from '../types';
import { C, T, arrow, anim, move, frame, pick, showDuring, card, jiggle } from './sciViz';

const flow = (path: string, n: number, dur: number, r: number, color: string) =>
  Array.from({ length: n }, (_, i) => `<circle r="${r}" fill="${color}"><animateMotion dur="${dur}s" begin="-${(i * dur) / n}s" repeatCount="indefinite" path="${path}"/></circle>`).join('');

/**
 * Grade 10 Chemistry diagrams, redrawn large with motion that shows the idea. Keys are unchanged so
 * the lessons keep working. The facts are the standard school ones the old drawings already taught;
 * a teacher should still skim the wording against the course text.
 */
type Builder = (lang: Language) => string;
const ch = (lang: Language) => (en: string, it: string) => pick(lang, en, it);
const col3 = (i: number) => 20 + i * 207;

/** A bond-line group: n parallel lines between two points that blink in one after another. */
const bondLines = (x1: number, x2: number, y: number, n: number, color: string, dur: number) =>
  Array.from({ length: n }, (_, i) => {
    const yy = y + (i - (n - 1) / 2) * 12;
    return `<line x1="${x1}" y1="${yy}" x2="${x2}" y2="${yy}" stroke="${color}" stroke-width="5" stroke-linecap="round" opacity="0">${anim('opacity', '0;0;1;1;0', dur, 0, `keyTimes="0;${(0.05 + i * 0.2).toFixed(2)};${(0.15 + i * 0.2).toFixed(2)};0.9;1"`)}</line>`;
  }).join('');

export const CHEM10_BUILDERS: Record<string, Builder> = {
  /* Three bond types: what the electrons do */
  chemBonds: lang => {
    const p = ch(lang);
    const x0 = col3(0), x1 = col3(1), x2 = col3(2);
    const grid = [0, 1, 2].flatMap(r => [0, 1, 2].map(c => `<circle cx="${x2 + 46 + c * 54}" cy="${116 + r * 36}" r="13" fill="${C.gold}"/>`)).join('');
    const sea = [0, 1, 2, 3, 4].map(i => {
      const y = 134 + (i % 2) * 36;
      return `<circle r="6" fill="${C.data}">${anim('cx', `${x2 + 28 + i * 8};${x2 + 160 + i * 6};${x2 + 28 + i * 8}`, 2.6 + i * 0.4)}${anim('cy', `${y};${y + 12};${y}`, 1.4 + i * 0.3)}</circle>`;
    }).join('');
    return frame(p('Three kinds of chemical bond', 'Tre tipi di legame chimico'),
      `${card(x0, 24, 200, 250, C.ember)}${T(x0 + 100, 58, p('IONIC', 'IONICO'), { size: 26, fill: C.ember, weight: 800 })}${T(x0 + 100, 86, 'Δχ > 1.7', { size: 20, fill: C.muted })}
      <circle cx="${x0 + 58}" cy="152" r="30" fill="${C.ember}" fill-opacity="0.25" stroke="${C.ember}" stroke-width="3"/>${T(x0 + 58, 160, 'Na⁺', { size: 22, weight: 800 })}
      <circle cx="${x0 + 146}" cy="152" r="36" fill="${C.good}" fill-opacity="0.22" stroke="${C.good}" stroke-width="3"/>${T(x0 + 146, 160, 'Cl⁻', { size: 22, weight: 800 })}
      <circle r="7" fill="${C.gold}">${anim('cx', `${x0 + 84};${x0 + 112};${x0 + 112}`, 2.4, 0, 'keyTimes="0;.6;1"')}${anim('cy', '152;152;152', 2.4)}${anim('opacity', '1;1;0', 2.4, 0, 'keyTimes="0;.6;1"')}</circle>
      ${T(x0 + 100, 226, p('e⁻ jumps across', 'e⁻ si trasferisce'), { size: 20 })}${T(x0 + 100, 256, p('ions form a lattice', 'ioni in reticolo'), { size: 20, fill: C.muted })}
      ${card(x1, 24, 200, 250, C.data)}${T(x1 + 100, 58, p('COVALENT', 'COVALENTE'), { size: 26, fill: C.data, weight: 800 })}${T(x1 + 100, 86, 'Δχ ≤ 1.7', { size: 20, fill: C.muted })}
      <circle cx="${x1 + 66}" cy="152" r="34" fill="${C.data}" fill-opacity="0.2" stroke="${C.data}" stroke-width="3"/><circle cx="${x1 + 134}" cy="152" r="34" fill="${C.data}" fill-opacity="0.2" stroke="${C.data}" stroke-width="3"/>
      <g><circle cx="${x1 + 100}" cy="136" r="7" fill="${C.gold}"/><circle cx="${x1 + 100}" cy="168" r="7" fill="${C.gold}"/><animateTransform attributeName="transform" type="rotate" from="0 ${x1 + 100} 152" to="360 ${x1 + 100} 152" dur="2.2s" repeatCount="indefinite"/></g>
      ${T(x1 + 100, 226, p('e⁻ pair is shared', 'e⁻ condivisi'), { size: 20 })}${T(x1 + 100, 256, p('molecules', 'molecole'), { size: 20, fill: C.muted })}
      ${card(x2, 24, 200, 250, C.gold)}${T(x2 + 100, 58, p('METALLIC', 'METALLICO'), { size: 26, fill: C.gold, weight: 800 })}${T(x2 + 100, 86, p('metal + metal', 'metallo + metallo'), { size: 20, fill: C.muted })}
      ${grid}${sea}
      ${T(x2 + 100, 226, p('sea of free e⁻', 'mare di e⁻'), { size: 20 })}${T(x2 + 100, 256, p('conducts, bends', 'conduce e piega'), { size: 20, fill: C.muted })}`,
      p('What the electrons do sets the bond type', 'Il comportamento degli e⁻ decide il legame'), 330);
  },

  /* Polarity as a tug of war */
  chemPolarityTug: lang => {
    const p = ch(lang);
    const rows: Array<[number, string, string, string, string, string, number]> = [
      [70, C.good, p('TIE', 'PAREGGIO'), 'Δχ < 0.4', p('Nonpolar covalent', 'Covalente apolare'), 'mid', 0],
      [160, C.gold, p('LOPSIDED', 'SBILANCIATO'), 'Δχ 0.4 – 1.7', p('Polar covalent', 'Covalente polare'), 'near', 0],
      [250, C.ember, p('STOLEN', 'STRAPPATO'), 'Δχ > 1.7', p('Ionic bond', 'Legame ionico'), 'jump', 0]
    ];
    const body = rows.map(([y, color, title, range, kind, mode]) => {
      const L = 262, R = 372;
      const dotX = mode === 'mid' ? 317 : mode === 'near' ? 338 : 372;
      const dotAnim = mode === 'jump'
        ? `${anim('cx', `${L + 22};${L + 22};${R - 14};${R - 14}`, 3.2, 0, 'keyTimes="0;.15;.6;1"')}`
        : `${anim('cx', `${dotX - 5};${dotX + 5};${dotX - 5}`, 1.2)}`;
      return `<rect x="16" y="${y - 38}" width="608" height="76" rx="16" fill="${color}" fill-opacity="0.08" stroke="${color}" stroke-width="2"/>
        ${T(30, y - 2, title as string, { size: 22, fill: color as string, weight: 800, anchor: 'start' })}${T(30, y + 26, range as string, { size: 20, fill: C.muted, anchor: 'start' })}
        <circle cx="${L}" cy="${y}" r="26" fill="${color}" fill-opacity="0.3" stroke="${color}" stroke-width="3"/>
        <circle cx="${R}" cy="${y}" r="${mode === 'mid' ? 26 : 32}" fill="${color}" fill-opacity="0.3" stroke="${color}" stroke-width="3"/>
        <circle cy="${y}" r="8" fill="${C.text}" cx="${dotX}">${dotAnim}</circle>
        ${T(430, y + 7, kind as string, { size: 20, anchor: 'start', weight: 700 })}`;
    }).join('');
    return frame(p('Polarity as a tug of war', 'La polarità come tiro alla fune'), body,
      p('The bigger the Δχ, the harder one atom pulls', 'Più Δχ è grande, più un atomo tira'), 330);
  },

  /* VSEPR: electron pairs push apart */
  chemVSEPR: lang => {
    const p = ch(lang);
    // ligand atoms spread from a squeezed start to the final angle (the pairs push apart)
    const spread = (cx: number, cy: number, angles: number[], R: number, color: string, r: number, extra = '') =>
      angles.map(a => {
        const a0 = 90 + (a - 90) * 0.3;
        const f = (deg: number, rr: number) => [(cx + Math.cos(deg * Math.PI / 180) * rr).toFixed(1), (cy - Math.sin(deg * Math.PI / 180) * rr).toFixed(1)];
        const [x1, y1] = f(a0, R * 0.6), [x2, y2] = f(a, R);
        const dur = 3.2, k = 'keyTimes="0;.5;1"';
        return `<line x1="${cx}" y1="${cy}" stroke="${C.muted}" stroke-width="5" stroke-linecap="round"><animate attributeName="x2" values="${x1};${x2};${x2}" dur="${dur}s" repeatCount="indefinite" ${k}/><animate attributeName="y2" values="${y1};${y2};${y2}" dur="${dur}s" repeatCount="indefinite" ${k}/></line>
          <circle r="${r}" fill="${color}"><animate attributeName="cx" values="${x1};${x2};${x2}" dur="${dur}s" repeatCount="indefinite" ${k}/><animate attributeName="cy" values="${y1};${y2};${y2}" dur="${dur}s" repeatCount="indefinite" ${k}/></circle>${extra}`;
      }).join('');
    const w = 148, gx = (i: number) => 12 + i * 157;
    const cell = (i: number, color: string, name: string, angle: string, formula: string, draw: string) =>
      `${card(gx(i), 24, w, 262, color, 0.08)}${T(gx(i) + w / 2, 56, name, { size: 22, fill: color, weight: 800 })}${T(gx(i) + w / 2, 84, angle, { size: 20, fill: C.muted })}${draw}${T(gx(i) + w / 2, 264, formula, { size: 24, weight: 800 })}`;
    const c = (i: number) => gx(i) + w / 2;
    const lone = (cx: number, cy: number) => `<ellipse cx="${cx}" cy="${cy}" rx="14" ry="8" fill="${C.gold}" fill-opacity="0.5" stroke="${C.gold}" stroke-width="2.5">${anim('opacity', '0.4;1;0.4', 1.6)}</ellipse>`;
    return frame(p('Molecular shapes (VSEPR)', 'Forme delle molecole (VSEPR)'),
      `${cell(0, C.good, p('Linear', 'Lineare'), '180°', 'CO₂', `${spread(c(0), 168, [180, 0], 46, C.ember, 17)}<circle cx="${c(0)}" cy="168" r="20" fill="${C.text}"/>`)}
      ${cell(1, C.data, p('Trigonal', 'Trigonale'), '120°', 'BF₃', `${spread(c(1), 176, [90, 210, 330], 50, C.good, 14)}<circle cx="${c(1)}" cy="176" r="18" fill="${C.gold}"/>`)}
      ${cell(2, C.gold, p('Tetrahedral', 'Tetraedrica'), '109.5°', 'CH₄', `${spread(c(2), 172, [90, 205, 335, 270], 54, C.text, 13)}<circle cx="${c(2)}" cy="172" r="18" fill="${C.muted}"/>`)}
      ${cell(3, C.sakura, p('Bent', 'Piegata'), '104.5°', 'H₂O', `${lone(c(3) - 18, 122)}${lone(c(3) + 18, 122)}${spread(c(3), 156, [232, 308], 56, C.text, 13)}<circle cx="${c(3)}" cy="156" r="20" fill="${C.ember}"/>`)}`,
      p('Electron pairs push apart as far as possible', 'Le coppie di e⁻ si respingono al massimo'), 330);
  },

  /* Nomenclature: oxidation numbers and the ous/ic → ite/ate rule */
  chemNomenclature: lang => {
    const p = ch(lang);
    const row = (y: number, color: string, acid: string, an: string, salt: string, sn: string, suffix: string) =>
      `${card(16, y, 270, 92, color, 0.08)}${T(151, y + 40, acid, { size: 30, weight: 800 })}${T(151, y + 72, an + ' · ' + suffix.split(' → ')[0], { size: 20, fill: C.muted })}
      ${arrow(296, y + 46, 344, y + 46, color, 5)}
      ${card(354, y, 270, 92, color, 0.08)}${T(489, y + 40, salt, { size: 30, weight: 800 })}${T(489, y + 72, sn + ' · ' + suffix.split(' → ')[1], { size: 20, fill: C.muted })}
      <circle r="7" fill="${color}"><animateMotion dur="2.4s" repeatCount="indefinite" path="M296 ${y + 46} H344" begin="${y > 130 ? -1.2 : 0}s"/></circle>`;
    return frame(p('Naming acids and salts', 'Nomi di acidi e sali'),
      `${card(16, 22, 608, 62, C.gold, 0.1)}${T(320, 52, p('Charges add to zero', 'Le cariche sommano a zero'), { size: 22, fill: C.gold, weight: 800 })}${T(320, 76, 'HNO₂ : +1 +3 −2 −2 = 0', { size: 20, fill: C.muted })}
      ${row(100, C.data, 'HNO₂', p('nitrous acid', 'acido nitroso'), 'NaNO₂', p('sodium nitrite', 'nitrito di sodio'), p('-ous → -ite', '-oso → -ito'))}
      ${row(204, C.ember, 'HNO₃', p('nitric acid', 'acido nitrico'), 'NaNO₃', p('sodium nitrate', 'nitrato di sodio'), p('-ic → -ate', '-ico → -ato'))}`,
      p('Lower charge: -ous / -ite · higher: -ic / -ate', 'N.O. minore: -oso/-ito · maggiore: -ico/-ato'), 340);
  },

  /* Criss-cross: the charges swap and become subscripts */
  chemCrissCross: lang => {
    const p = ch(lang);
    const dur = 6;
    const fly = (txt: string, x: number, y: number, dx: number, dy: number, color: string) =>
      `<text x="${x}" y="${y}" text-anchor="middle" font-size="28" font-weight="800" fill="${color}" opacity="0">${txt}${move(`0 0;0 0;${dx} ${dy};${dx} ${dy}`, dur, 0, '0;.12;.5;1')}${anim('opacity', '0;1;1;0;0', dur, 0, 'keyTimes="0;.1;.5;.52;1"')}</text>`;
    return frame(p('The criss-cross rule', 'La regola dell’incrocio'),
      `${T(224, 112, 'Fe', { size: 48, weight: 800 })}${T(278, 88, '3+', { size: 26, fill: C.ember, weight: 800 })}
      ${T(396, 112, 'O', { size: 48, weight: 800 })}${T(430, 88, '2−', { size: 26, fill: C.data, weight: 800 })}
      ${fly('3', 278, 88, 90, 164, C.ember)}${fly('2', 430, 88, -110, 164, C.data)}
      ${T(320, 262, 'Fe₂O₃', { size: 52, weight: 800, fill: C.good })}
      ${T(320, 300, '2 × (+3) + 3 × (−2) = 0 ✓', { size: 22, fill: C.muted })}`,
      p('Swap the charges down: they become subscripts', 'Scambia le cariche: diventano indici'), 340);
  },

  /* Acids, bases and salts: three recipes */
  chemSaltFamily: lang => {
    const p = ch(lang);
    const dur = 9;
    const row = (i: number, color: string, title: string, eq: string) => {
      const y = 18 + i * 92;
      return `${card(16, y, 608, 82, color, 0.08)}${T(34, y + 30, title, { size: 22, fill: color, weight: 800, anchor: 'start' })}${T(320, y + 66, eq, { size: 28, weight: 800 })}
        <rect x="16" y="${y}" width="608" height="82" rx="16" fill="none" stroke="${color}" stroke-width="5" opacity="0">${anim('opacity', '0;0;1;1;0;0', dur, 0, `keyTimes="0;${(i / 3).toFixed(3)};${(i / 3 + 0.03).toFixed(3)};${((i + 1) / 3 - 0.03).toFixed(3)};${((i + 1) / 3).toFixed(3)};1"`)}</rect>`;
    };
    return frame(p('Oxides, acids, bases and salts', 'Ossidi, acidi, basi e sali'),
      `${row(0, C.data, p('Metal oxide + water → base', 'Ossido metallico + acqua → idrossido'), 'CaO + H₂O → Ca(OH)₂')}
      ${row(1, C.good, p('Non-metal oxide + water → acid', 'Anidride + acqua → ossiacido'), 'SO₃ + H₂O → H₂SO₄')}
      ${row(2, C.ember, p('Acid + base → salt + water', 'Acido + idrossido → sale + acqua'), 'H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O')}`,
      p('Each family makes the next one', 'Ogni famiglia genera la successiva'), 340);
  },

  /* Balancing: atoms are conserved */
  chemBalancing: lang => {
    const p = ch(lang);
    const H = [0, 1, 2, 3].map(i => [120 + i * 26, 124]), O = [0, 1].map(i => [250 + i * 36, 124]);
    const H2 = [0, 1, 2, 3].map(i => [394 + i * 26, 124]), O2 = [0, 1].map(i => [524 + i * 36, 124]);
    const fly = (from: number[], to: number[], r: number, color: string, begin: number) =>
      `<circle r="${r}" fill="${color}" opacity="0"><animateMotion dur="3s" begin="${begin}s" repeatCount="indefinite" path="M${from[0]} ${from[1]} L${to[0]} ${to[1]}"/>${anim('opacity', '0;1;1;0', 3, begin, 'keyTimes="0;.1;.85;1"')}</circle>`;
    const dots = (a: number[][], r: number, color: string) => a.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}"/>`).join('');
    const kinds: Array<[string, string, string, string]> = [
      [C.data, p('Synthesis', 'Sintesi'), 'A + B → AB', ''], [C.gold, p('Decomposition', 'Decomposizione'), 'AB → A + B', ''],
      [C.ember, p('Single swap', 'Scambio semplice'), 'A + BC → AC + B', ''], [C.sakura, p('Double swap', 'Doppio scambio'), 'AB + CD → AD + CB', '']
    ];
    const chips = kinds.map(([color, name, f], i) => {
      const x = 16 + (i % 2) * 308, y = 194 + Math.floor(i / 2) * 70;
      return `${card(x, y, 300, 62, color, 0.08)}${T(x + 150, y + 26, name, { size: 20, fill: color, weight: 800 })}${T(x + 150, y + 52, f, { size: 20 })}`;
    }).join('');
    return frame(p('Balancing equations', 'Bilanciare le reazioni'),
      `${T(320, 50, '2 H₂ + O₂ → 2 H₂O', { size: 34, weight: 800 })}
      ${T(320, 84, p('change coefficients, never subscripts', 'cambia i coefficienti, mai gli indici'), { size: 20, fill: C.muted })}
      ${dots(H, 10, C.text)}${dots(O, 16, C.ember)}${dots(H2, 10, C.text)}${dots(O2, 16, C.ember)}
      ${T(320, 136, '=', { size: 40, weight: 800, fill: C.good })}
      ${T(200, 170, '4 H · 2 O', { size: 22 })}${T(470, 170, '4 H · 2 O', { size: 22 })}
      ${H.map((h, i) => fly(h, H2[i], 8, C.gold, i * 0.4)).join('')}${O.map((o, i) => fly(o, O2[i], 12, C.gold, 1.6 + i * 0.4)).join('')}
      ${chips}`,
      '', 340);
  },

  /* Stoichiometry: mass → moles → moles → mass */
  chemStoich: lang => {
    const p = ch(lang);
    const bx = (i: number) => 12 + i * 168, W = 112, dur = 6;
    const boxes: Array<[string, string, string]> = [[p('Mass A', 'Massa A'), C.data, 'g'], [p('Moles A', 'Moli A'), C.gold, 'mol'], [p('Moles B', 'Moli B'), C.good, 'mol'], [p('Mass B', 'Massa B'), C.ember, 'g']];
    const b = boxes.map(([name, color, unit], i) =>
      `${card(bx(i), 40, W, 96, color, 0.1)}${T(bx(i) + W / 2, 82, name, { size: 22, fill: color, weight: 800 })}${T(bx(i) + W / 2, 114, unit, { size: 22, fill: C.muted })}
      <rect x="${bx(i)}" y="40" width="${W}" height="96" rx="16" fill="none" stroke="${color}" stroke-width="6" opacity="0">${anim('opacity', '0;0;1;1;0;0', dur, 0, `keyTimes="0;${(i / 4 + 0.01).toFixed(3)};${(i / 4 + 0.05).toFixed(3)};${((i + 1) / 4 - 0.02).toFixed(3)};${((i + 1) / 4 + 0.02).toFixed(3)};1"`)}</rect>`).join('');
    const arrows = [0, 1, 2].map(i => arrow(bx(i) + W + 4, 88, bx(i + 1) - 4, 88, C.gold, 4)).join('');
    const ops = [['÷', p('molar mass', 'massa molare')], ['×', p('mole ratio', 'rapporto molare')], ['×', p('molar mass', 'massa molare')]]
      .map(([sym, s], i) => `${T(bx(i) + W + 28, 168, sym, { size: 28, fill: C.gold, weight: 800 })}${T(bx(i) + W + 28, 196, s, { size: 20, fill: C.muted })}`).join('');
    return frame(p('Stoichiometry route', 'Percorso stechiometrico'),
      `${b}${arrows}${ops}
      ${[0, 1, 2].map(i => flow(`M${bx(i) + W + 4} 88 H${bx(i + 1) - 4}`, 2, 1.6, 6, C.text)).join('')}
      ${T(320, 246, p('Limiting reagent: smallest n ÷ coefficient', 'Reagente limitante: n ÷ coefficiente minore'), { size: 22, fill: C.gold, weight: 700 })}
      ${T(320, 276, p('% yield = actual ÷ theoretical × 100', 'Resa % = effettiva ÷ teorica × 100'), { size: 22 })}`,
      p('Always go through moles', 'Passa sempre dalle moli'), 340);
  },

  /* Solutions: three ways to say how concentrated */
  chemSolutions: lang => {
    const p = ch(lang);
    const x = [col3(0), col3(1), col3(2)], cx = (i: number) => x[i] + 100;
    const dots = (i: number, n: number, y0: number, spreadW: number, h: number) =>
      Array.from({ length: n }, (_, k) => jiggle(cx(i) - spreadW / 2 + 12 + (k % 3) * (spreadW / 3), y0 + 18 + Math.floor(k / 3) * (h / 2.2), 7, C.gold, 5, k)).join('');
    return frame(p('Concentration of solutions', 'Concentrazione delle soluzioni'),
      `${card(x[0], 20, 200, 256, C.data)}${T(cx(0), 54, p('MOLARITY', 'MOLARITÀ'), { size: 24, fill: C.data, weight: 800 })}${T(cx(0), 100, 'M = n / V', { size: 30, weight: 800 })}${T(cx(0), 130, 'mol / L', { size: 20, fill: C.muted })}
      <rect x="${cx(0) - 44}" y="156" width="88" height="112" rx="6" fill="${C.data}" fill-opacity="0.14" stroke="${C.data}" stroke-width="3"/>${dots(0, 5, 190, 76, 56)}
      ${card(x[1], 20, 200, 256, C.good)}${T(cx(1), 54, p('DILUTION', 'DILUIZIONE'), { size: 24, fill: C.good, weight: 800 })}${T(cx(1), 100, 'M₁V₁ = M₂V₂', { size: 28, weight: 800 })}${T(cx(1), 130, p('moles stay equal', 'le moli restano'), { size: 20, fill: C.muted })}
      <rect x="${cx(1) - 44}" y="156" width="88" height="112" rx="6" fill="none" stroke="${C.good}" stroke-width="3"/>
      <rect x="${cx(1) - 41}" width="82" fill="${C.good}" fill-opacity="0.2"><animate attributeName="y" values="226;180;226" dur="4s" repeatCount="indefinite"/><animate attributeName="height" values="39;85;39" dur="4s" repeatCount="indefinite"/></rect>${dots(1, 4, 190, 76, 56)}
      ${card(x[2], 20, 200, 256, C.gold)}${T(cx(2), 54, p('PERCENT', 'PERCENTUALE'), { size: 24, fill: C.gold, weight: 800 })}
      ${T(cx(2), 92, p('g solute', 'g soluto'), { size: 22 })}<line x1="${cx(2) - 70}" y1="104" x2="${cx(2) + 70}" y2="104" stroke="${C.text}" stroke-width="3"/>${T(cx(2), 130, p('g solution', 'g soluzione'), { size: 22 })}${T(cx(2), 162, '× 100', { size: 22, fill: C.muted })}
      <rect x="${cx(2) - 80}" y="196" width="160" height="40" rx="8" fill="${C.data}" fill-opacity="0.2" stroke="${C.data}" stroke-width="3"/>
      <rect x="${cx(2) - 80}" y="196" height="40" rx="8" fill="${C.gold}"><animate attributeName="width" values="30;100;30" dur="4s" repeatCount="indefinite"/></rect>
      ${T(cx(2), 266, p('solute / solution', 'soluto / soluzione'), { size: 20, fill: C.muted })}`,
      p('Same solute, three ways to measure it', 'Lo stesso soluto, tre modi di misurarlo'), 330);
  },

  /* A sandwich shows the limiting reagent */
  chemSandwichStoich: lang => {
    const p = ch(lang);
    const dur = 8;
    const bread = (cx: number, cy: number) => `<rect x="-24" y="-10" width="48" height="20" rx="8" fill="${C.gold}" fill-opacity="0.9"/>`;
    const cheese = `<rect x="-24" y="-6" width="48" height="12" rx="3" fill="${C.sakura}"/>`;
    const sup = (i: number) => [60 + (i % 3) * 66, 100 + Math.floor(i / 3) * 40];
    const supC = (j: number) => [60 + j * 66, 200];
    const hop = (start: number[], end: number[], from: number, to: number, content: string) => {
      const dx = end[0] - start[0], dy = end[1] - start[1];
      return `<g transform="translate(${start[0]} ${start[1]})"><g>${content}${move(`0 0;0 0;${dx} ${dy};${dx} ${dy};0 0`, dur, 0, `0;${from};${to};0.9;1`)}</g></g>`;
    };
    const items: string[] = [];
    [0, 1].forEach(s => {
      const X = 430 + s * 110, f = 0.08 + s * 0.3, t = f + 0.18;
      items.push(hop(sup(s * 2), [X, 262], f, t, bread(0, 0)));
      items.push(hop(supC(s), [X, 246], f, t, cheese));
      items.push(hop(sup(s * 2 + 1), [X, 230], f, t, bread(0, 0)));
    });
    const staticBread = [4, 5].map(i => `<g transform="translate(${sup(i)[0]} ${sup(i)[1]})">${bread(0, 0)}</g>`).join('');
    return frame(p('The limiting reagent as a sandwich', 'Il reagente limitante: il panino'),
      `${T(320, 40, p('2 bread + 1 cheese → 1 sandwich', '2 pane + 1 formaggio → 1 panino'), { size: 22, fill: C.gold, weight: 800 })}
      ${T(130, 78, p('6 bread · 2 cheese', '6 pane · 2 formaggio'), { size: 20, fill: C.muted })}
      ${staticBread}${items.join('')}
      ${showDuring(0.7, 0.97, dur, `${T(130, 262, p('cheese ran out first', 'finisce prima il formaggio'), { size: 20, fill: C.ember, weight: 800 })}${T(130, 290, p('= limiting reagent', '= reagente limitante'), { size: 20, fill: C.ember, weight: 800 })}`)}
      ${showDuring(0.7, 0.97, dur, T(485, 296, p('2 sandwiches', '2 panini'), { size: 22, fill: C.good, weight: 800 }))}`,
      p('The one that runs out first limits the product', 'Ciò che finisce prima limita il prodotto'), 340);
  },

  /* Dilution: same moles, more volume */
  chemDilutionPour: lang => {
    const p = ch(lang);
    const dur = 7;
    const lp = [[78, 196], [104, 196], [130, 196], [78, 222], [104, 222], [130, 222]];
    const rp = [[392, 124], [450, 148], [508, 118], [404, 200], [462, 214], [520, 192]];
    const dots = lp.map(([lx, ly], i) => {
      const [rx, ry] = rp[i];
      return `<circle r="9" fill="${C.gold}"><animate attributeName="cx" values="${lx};${lx};${rx};${rx};${lx}" dur="${dur}s" keyTimes="0;.15;.55;.9;1" repeatCount="indefinite"/><animate attributeName="cy" values="${ly};${ly};${ry};${ry};${ly}" dur="${dur}s" keyTimes="0;.15;.55;.9;1" repeatCount="indefinite"/></circle>`;
    }).join('');
    return frame(p('Dilution: same moles, more volume', 'Diluizione: stesse moli, più volume'),
      `<rect x="56" y="160" width="100" height="94" rx="6" fill="${C.data}" fill-opacity="0.4" stroke="${C.data}" stroke-width="3"/>
      <rect x="352" y="84" width="200" height="170" rx="6" fill="${C.data}" stroke="${C.data}" stroke-width="3"><animate attributeName="fill-opacity" values="0.4;0.4;0.1;0.1;0.4" dur="${dur}s" keyTimes="0;.15;.55;.9;1" repeatCount="indefinite"/></rect>
      ${dots}
      ${T(106, 142, '0.25 L', { size: 22 })}${T(452, 66, '1.0 L', { size: 22 })}
      ${arrow(176, 210, 336, 210, C.good, 5)}${T(256, 186, p('+ water', '+ acqua'), { size: 22, fill: C.good, weight: 800 })}${T(256, 246, p('same 0.5 mol', 'stesse 0.5 mol'), { size: 20, fill: C.gold, weight: 800 })}
      ${T(106, 284, 'M₁ = 2.0 M', { size: 22, fill: C.ember, weight: 800 })}${T(452, 284, 'M₂ = 0.5 M', { size: 22, fill: C.data, weight: 800 })}`,
      p('Solute moles do not change, only the volume', 'Le moli di soluto non cambiano, cambia il volume'), 340);
  }
};
