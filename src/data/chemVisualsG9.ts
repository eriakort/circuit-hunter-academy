import type { Language } from '../types';
import { C, T, arrow, anim, move, frame, pick, showDuring, card, jiggle, drift, water } from './sciViz';

/**
 * Grade 9 Chemistry diagrams, redrawn large with motion that shows the idea. Keys are unchanged so
 * the lessons keep working. The facts shown are standard school chemistry; a teacher should still
 * skim the wording against the course text.
 */
type Builder = (lang: Language) => string;
const ch = (lang: Language) => (en: string, it: string) => pick(lang, en, it);

/** Three boxes in a row, 200 wide each, starting at x = 20. */
const col3 = (i: number) => 20 + i * 207;

export const CHEM9_BUILDERS: Record<string, Builder> = {
  /* States of matter: how the particles move */
  chemStates: lang => {
    const p = ch(lang);
    const solid = [0, 1, 2].flatMap(r => [0, 1, 2].map(c => jiggle(col3(0) + 52 + c * 48, 108 + r * 44, 17, C.data, 3, r * 3 + c))).join('');
    const liquid = [
      [col3(1) + 46, 130], [col3(1) + 98, 142], [col3(1) + 150, 126], [col3(1) + 64, 178], [col3(1) + 118, 184], [col3(1) + 160, 172], [col3(1) + 90, 104]
    ].map(([x, y], i) => drift([[x, y], [x + 18, y - 6], [x + 6, y + 10], [x - 14, y + 2]], 16, C.good, 3 + i * 0.3, -i * 0.4)).join('');
    const gas = [
      [col3(2) + 40, 110], [col3(2) + 150, 106], [col3(2) + 98, 150], [col3(2) + 42, 190], [col3(2) + 156, 196]
    ].map(([x, y], i) => drift([[x, y], [x + 70, y + 30], [x + 20, y + 80], [x - 20, y + 30]].map(([a, b]) => [Math.min(col3(2) + 172, Math.max(col3(2) + 28, a)), Math.min(220, Math.max(88, b))] as [number, number]), 12, C.gold, 1.5 + i * 0.25)).join('');
    return frame(p('States of matter', 'Stati della materia'),
      `${card(col3(0), 28, 200, 218, C.data)}${T(col3(0) + 100, 66, p('SOLID', 'SOLIDO'), { size: 26, fill: C.data, weight: 800 })}${solid}
      ${card(col3(1), 28, 200, 218, C.good)}${T(col3(1) + 100, 66, p('LIQUID', 'LIQUIDO'), { size: 26, fill: C.good, weight: 800 })}${liquid}
      ${card(col3(2), 28, 200, 218, C.gold)}${T(col3(2) + 100, 66, p('GAS', 'AERIFORME'), { size: 26, fill: C.gold, weight: 800 })}${gas}
      ${T(col3(0) + 100, 276, p('fixed place', 'posizioni fisse'), { size: 22 })}
      ${T(col3(1) + 100, 276, p('slide past', 'scorrono'), { size: 22 })}
      ${T(col3(2) + 100, 276, p('fly apart', 'si disperdono'), { size: 22 })}`,
      p('Same particles, different freedom to move', 'Stesse particelle, diversa libertà di movimento'), 330);
  },

  /* Physical vs chemical change */
  chemPhysVsChem: lang => {
    const p = ch(lang);
    const dur = 6;
    const phys = (x: number, spread: number) => [0, 1, 2].map(i => water(x + i * spread, 168 + (i % 2) * 22, 0.95)).join('');
    return frame(p('Physical and chemical change', 'Trasformazione fisica e chimica'),
      `${card(20, 24, 300, 252, C.data)}${T(170, 62, p('PHYSICAL', 'FISICA'), { size: 26, fill: C.data, weight: 800 })}
      ${T(170, 92, p('same molecules', 'stesse molecole'), { size: 22, fill: C.muted })}
      <g>${move('0 0;12 -6;0 0', 3)}${phys(80, 46)}</g>
      ${T(170, 256, 'H₂O → H₂O → H₂O', { size: 22 })}
      ${card(340, 24, 280, 252, C.ember)}${T(480, 62, p('CHEMICAL', 'CHIMICA'), { size: 26, fill: C.ember, weight: 800 })}
      ${T(480, 92, p('new molecules', 'nuove molecole'), { size: 22, fill: C.muted })}
      ${showDuring(0.02, 0.48, dur, `<g>${[0, 1].map(i => `<g transform="translate(${420 + i * 50} 160)"><circle r="12" fill="${C.sakura}"/><circle cx="14" cy="0" r="12" fill="${C.sakura}"/></g>`).join('')}<g transform="translate(540 160)"><circle r="13" fill="${C.data}"/><circle cx="16" cy="0" r="13" fill="${C.data}"/></g>${T(480, 214, 'H₂ + O₂', { size: 26, weight: 800 })}</g>`)}
      ${showDuring(0.52, 0.98, dur, `<g>${water(430, 160, 1.2, C.data)}${water(530, 160, 1.2, C.data)}${T(480, 214, 'H₂O', { size: 26, weight: 800, fill: C.good })}</g>`)}
      ${T(480, 256, p('atoms rearrange', 'gli atomi si riordinano'), { size: 22 })}`,
      p('A chemical change makes new substances', 'Nella trasformazione chimica nascono nuove sostanze'), 330);
  },

  /* Classification of matter: four dots travel down the branches of the tree */
  chemMixtures: lang => {
    const p = ch(lang);
    const run = (path: string, color: string, begin: number) =>
      `<circle r="9" fill="${color}"><animateMotion dur="2.4s" begin="${begin}s" repeatCount="indefinite" path="${path}" keyPoints="0;1;1" keyTimes="0;.7;1" calcMode="linear"/></circle>`;
    const leaf = (x: number, w: number, color: string, title: string, ex: string) =>
      `${card(x, 216, w, 84, color, 0.07)}${T(x + w / 2, 247, title, { size: 20, weight: 700 })}${T(x + w / 2, 281, ex, { size: 20, fill: C.muted })}`;
    return frame(p('Classification of matter', 'Classificazione della materia'),
      `${card(230, 18, 180, 52, C.gold)}${T(320, 52, p('MATTER', 'MATERIA'), { size: 26, fill: C.gold, weight: 800 })}
      <path d="M290 70 L137 112 M350 70 L451 112 M68 182 L68 216 M196 182 L196 216 M359 182 L359 216 M542 182 L542 216" stroke="${C.muted}" stroke-width="4" fill="none"/>
      ${card(12, 112, 250, 70, C.data)}${T(137, 142, p('PURE SUBSTANCE', 'SOSTANZA PURA'), { size: 23, fill: C.data, weight: 800 })}${T(137, 170, p('one formula', 'una formula'), { size: 20, fill: C.muted })}
      ${card(274, 112, 354, 70, C.ember)}${T(451, 142, p('MIXTURE', 'MISCUGLIO'), { size: 23, fill: C.ember, weight: 800 })}${T(451, 170, p('physical separation', 'separabile fisicamente'), { size: 20, fill: C.muted })}
      ${leaf(12, 112, C.data, p('Element', 'Elemento'), 'O₂, Fe')}${leaf(130, 132, C.data, p('Compound', 'Composto'), 'H₂O, NaCl')}
      ${leaf(274, 170, C.ember, p('Homogeneous', 'Omogeneo'), p('salt water', 'acqua e sale'))}${leaf(456, 172, C.ember, p('Heterogeneous', 'Eterogeneo'), p('oil + water', 'olio + acqua'))}
      ${run('M290 70 L137 112', C.data, 0)}${run('M350 70 L451 112', C.ember, 1.2)}`,
      p('Pure substance or mixture?', 'Sostanza pura o miscuglio?'), 350);
  },

  /* Two questions decide the class of any sample; a dot follows the answers */
  chemMixVsPure: lang => {
    const p = ch(lang);
    const q = (x: number, y: number, w: number, t1: string) => `${card(x, y, w, 64, C.gold)}${T(x + w / 2, y + 40, t1, { size: 23, weight: 800, fill: C.gold })}`;
    const res = (x: number, color: string, t1: string, t2: string) => `${card(x, 238, 200, 84, color)}${T(x + 100, 272, t1, { size: 19, weight: 800, fill: color })}${T(x + 100, 304, t2, { size: 20, fill: C.muted })}`;
    return frame(p('Is it pure or a mixture?', 'Pura o miscuglio?'),
      `${q(190, 20, 260, p('1. One formula?', '1. Una sola formula?'))}
      <path d="M260 84 L110 238 M380 84 L320 130" stroke="${C.muted}" stroke-width="4" fill="none"/>
      ${T(150, 150, p('YES', 'SÌ'), { size: 22, fill: C.good })}${T(366, 112, (lang === 'en' ? 'NO' : p('NO (decision)', 'NO')), { size: 22, fill: C.bad, anchor: 'start' })}
      ${q(210, 130, 220, p('2. Uniform?', '2. Uniforme?'))}
      <path d="M270 194 L330 238 M390 194 L520 238" stroke="${C.muted}" stroke-width="4" fill="none"/>
      ${T(292, 214, p('YES', 'SÌ'), { size: 22, fill: C.good, anchor: 'end' })}${T(470, 224, (lang === 'en' ? 'NO' : p('NO (decision)', 'NO')), { size: 22, fill: C.bad, anchor: 'start' })}
      ${res(10, C.data, p('PURE SUBSTANCE', 'SOSTANZA PURA'), 'Au · H₂O')}${res(220, C.good, p('HOMOGENEOUS', 'OMOGENEO'), p('salt water', 'acqua e sale'))}${res(430, C.ember, p('HETEROGENEOUS', 'ETEROGENEO'), p('sand + water', 'sabbia + acqua'))}
      <circle r="9" fill="${C.text}"><animateMotion dur="6s" repeatCount="indefinite" path="M320 20 L320 84 L320 130 L320 194 L330 238" keyPoints="0;.5;.5;1;1" keyTimes="0;.3;.5;.9;1" calcMode="linear"/></circle>`,
      p('Ask the two questions in order', 'Poni le due domande in ordine'), 372);
  },

  /* Four separation methods, each with its own small motion */
  chemSeparation: lang => {
    const p = ch(lang);
    const cell = (x: number, y: number, color: string, title: string, rule: string, art: string) =>
      `${card(x, y, 300, 138, color)}${art}${T(x + 200, y + 56, title, { size: 21, fill: color, weight: 800 })}${T(x + 200, y + 92, rule, { size: 20, fill: C.muted })}`;
    const filt = (x: number, y: number) => `<polygon points="${x + 22},${y + 28} ${x + 98},${y + 28} ${x + 60},${y + 78}" fill="none" stroke="${C.gold}" stroke-width="4"/>
      ${[0, 1, 2].map(i => `<circle cx="${x + 44 + i * 16}" cy="${y + 40 + (i % 2) * 6}" r="5" fill="${C.gold}"/>`).join('')}
      <circle cx="${x + 60}" cy="${y + 82}" r="5" fill="${C.data}">${anim('cy', `${y + 82};${y + 120}`, 1.4)}${anim('opacity', '1;1;0', 1.4)}</circle>`;
    const dist = (x: number, y: number) => `<circle cx="${x + 38}" cy="${y + 92}" r="26" fill="none" stroke="${C.good}" stroke-width="4"/>
      <circle cx="${x + 32}" cy="${y + 100}" r="5" fill="${C.good}">${anim('cy', `${y + 106};${y + 82}`, 1.4)}${anim('opacity', '1;0', 1.4)}</circle>
      <path d="M${x + 52} ${y + 70} L${x + 92} ${y + 50} L${x + 92} ${y + 110}" fill="none" stroke="${C.gold}" stroke-width="4" stroke-dasharray="6 6">${anim('stroke-dashoffset', '0;-24', 1)}</path>`;
    const centr = (x: number, y: number) => `<g transform="translate(${x + 60} ${y + 70})"><g>${move('0;360', 1.6, 0, '', 'rotate')}<line x1="-40" y1="0" x2="40" y2="0" stroke="${C.sakura}" stroke-width="6" stroke-linecap="round"/><rect x="32" y="-10" width="16" height="30" rx="4" fill="${C.sakura}"/><rect x="-48" y="-10" width="16" height="30" rx="4" fill="${C.sakura}"/></g><circle r="6" fill="${C.text}"/></g>`;
    const chrom = (x: number, y: number) => `<rect x="${x + 32}" y="${y + 20}" width="56" height="100" rx="8" fill="none" stroke="${C.ember}" stroke-width="4"/>
      ${[[C.data, 70, 2.2], [C.gold, 52, 3], [C.sakura, 36, 4]].map(([c, h, d], i) => `<circle cx="${x + 48 + i * 12}" cy="${y + 108}" r="6" fill="${c}">${anim('cy', `${y + 108};${y + 108 - +h}`, +d)}</circle>`).join('')}`;
    return frame(p('Separation methods', 'Metodi di separazione'),
      `${cell(14, 18, C.data, p('Filtration', 'Filtrazione'), p('by particle size', 'dimensione'), filt(14, 18))}${cell(326, 18, C.good, p('Distillation', 'Distillazione'), p('by boiling point', 'ebollizione'), dist(326, 18))}
      ${cell(14, 170, C.sakura, p('Centrifuge', 'Centrifuga'), p('by density', 'densità'), centr(14, 170))}${cell(326, 170, C.ember, p('Chromatography', 'Cromatografia'), p('by affinity', 'affinità'), chrom(326, 170))}`,
      '', 330);
  },

  /* Distillation apparatus: heat, vapour rises, condenser cools, pure liquid drips */
  chemDistillFlow: lang => {
    const p = ch(lang);
    return frame(p('Simple distillation', 'Distillazione semplice'),
      `<circle cx="120" cy="190" r="62" fill="${C.data}" fill-opacity=".15" stroke="${C.data}" stroke-width="5"/>
      <rect x="108" y="86" width="24" height="52" fill="none" stroke="${C.data}" stroke-width="5"/>
      ${[0, 1, 2].map(i => `<circle cx="${100 + i * 20}" cy="210" r="6" fill="${C.text}">${anim('cy', '218;170', 1.2, i * 0.4)}${anim('opacity', '1;0', 1.2, i * 0.4)}</circle>`).join('')}
      <path d="M120 112 L120 70 L360 70 L460 160" fill="none" stroke="${C.gold}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" opacity=".35"/>
      <path d="M120 112 L120 70 L360 70 L460 160" fill="none" stroke="${C.gold}" stroke-width="4" stroke-dasharray="10 10">${anim('stroke-dashoffset', '0;-40', 0.9)}</path>
      <g transform="translate(290 70)"><rect x="-40" y="-14" width="160" height="28" rx="14" fill="${C.data}" fill-opacity=".25"/></g>
      <path d="M460 160 L460 224" stroke="${C.good}" stroke-width="4"/>
      <circle cx="460" cy="190" r="6" fill="${C.good}">${anim('cy', '170;230', 1.1)}${anim('opacity', '1;1;0', 1.1)}</circle>
      <path d="M416 232 L416 296 L504 296 L504 232" fill="none" stroke="${C.good}" stroke-width="5"/>
      <rect x="418" y="270" width="84" height="24" fill="${C.good}" fill-opacity=".5">${anim('y', '290;262', 6)}${anim('height', '4;32', 6)}</rect>
      <g transform="translate(110 262)">${[0, 1, 2].map(i => `<path d="M${i * 22 - 22} 0 q6 -22 0 -34" fill="none" stroke="${C.ember}" stroke-width="6" stroke-linecap="round">${anim('opacity', '.2;1;.2', 0.55, i * 0.18)}</path>`).join('')}</g>
      ${T(120, 46, p('① heat', '① scalda'), { size: 24, fill: C.ember, weight: 800 })}${T(300, 46, p('② vapour rises', '② il vapore sale'), { size: 24, fill: C.gold, weight: 800 })}
      ${T(300, 118, p('③ cooled', '③ si raffredda'), { size: 24, fill: C.data, weight: 800 })}${T(560, 200, p('④ pure', '④ puro'), { size: 24, fill: C.good, weight: 800 })}`,
      p('Lower boiling point leaves first', 'Esce prima chi bolle a temperatura più bassa'), 340);
  },

  /* The three laws, each as a small picture */
  chemLaws: lang => {
    const p = ch(lang);
    const col = (i: number, color: string, name: string, year: string, art: string, line: string) =>
      `${card(col3(i), 18, 200, 292, color)}${T(col3(i) + 100, 54, name, { size: 24, fill: color, weight: 800 })}${T(col3(i) + 100, 82, year, { size: 20, fill: C.muted })}${art}${T(col3(i) + 100, 282, line, { size: 20 })}`;
    const x0 = col3(0), x1 = col3(1), x2 = col3(2);
    // Lavoisier: two pans of equal mass
    const lav = `<line x1="${x0 + 28}" y1="150" x2="${x0 + 172}" y2="150" stroke="${C.ember}" stroke-width="6" stroke-linecap="round"/><polygon points="${x0 + 84},210 ${x0 + 116},210 ${x0 + 100},152" fill="${C.muted}" fill-opacity=".6"/>
      <rect x="${x0 + 34}" y="118" width="46" height="32" rx="4" fill="${C.data}"/><rect x="${x0 + 120}" y="118" width="46" height="32" rx="4" fill="${C.good}"/>
      ${T(x0 + 57, 140, 'm', { size: 22, weight: 800 })}${T(x0 + 143, 140, 'm', { size: 22, weight: 800 })}${T(x0 + 100, 244, p('before = after', 'prima = dopo'), { size: 22, fill: C.gold, weight: 700 })}`;
    // Proust: bars 1 : 8
    const pro = `<rect x="${x1 + 40}" y="190" width="40" height="8" fill="${C.data}">${anim('height', '0;8;8', 4, 0, 'keyTimes="0;.4;1"')}</rect>
      <rect x="${x1 + 112}" y="126" width="40" height="72" fill="${C.ember}">${anim('height', '0;72;72', 4, 0, 'keyTimes="0;.5;1"')}${anim('y', '198;126;126', 4, 0, 'keyTimes="0;.5;1"')}</rect>
      ${T(x1 + 60, 224, '1 g H', { size: 22, fill: C.data })}${T(x1 + 132, 224, '8 g O', { size: 22, fill: C.ember })}${T(x1 + 100, 112, 'H₂O', { size: 26, weight: 800 })}`;
    // Dalton: O mass 16 vs 32 for the same carbon
    const dal = `<rect x="${x2 + 34}" y="170" width="44" height="28" fill="${C.data}"/><rect x="${x2 + 34}" y="150" width="44" height="20" fill="${C.gold}"/>
      <rect x="${x2 + 118}" y="170" width="44" height="28" fill="${C.data}"/><rect x="${x2 + 118}" y="122" width="44" height="48" fill="${C.gold}"/>
      ${T(x2 + 56, 224, 'CO', { size: 24, weight: 800 })}${T(x2 + 140, 224, 'CO₂', { size: 24, weight: 800 })}${T(x2 + 100, 114, '16 g : 32 g', { size: 21, fill: C.gold })}
      <g>${anim('opacity', '.5;1;.5', 2.4)}${T(x2 + 100, 254, '1 : 2', { size: 26, fill: C.gold, weight: 800 })}</g>`;
    return frame(p('Laws of chemical combination', 'Leggi ponderali'),
      `${col(0, C.data, 'Lavoisier', '1789', lav, p('mass kept', 'massa costante'))}${col(1, C.ember, 'Proust', '1799', pro, p('fixed ratio', 'rapporto fisso'))}${col(2, C.gold, 'Dalton', '1803', dal, p('whole numbers', 'numeri interi'))}`,
      '', 330);
  },

  /* Dalton: atoms join in whole numbers, like bricks */
  chemDaltonBlocks: lang => {
    const p = ch(lang);
    const dur = 5;
    const atomC = (y: number) => `<circle cx="200" cy="${y}" r="30" fill="${C.gold}"/>${T(200, y + 9, 'C', { size: 26, fill: '#1b0c06', weight: 800 })}`;
    // An oxygen atom that slides in and stops touching the carbon (carbon radius 30 + oxygen radius 26 = 56).
    const atomO = (y: number, from: number, to: number) => `<g>${move(`${from} 0;${to} 0;${to} 0;${from} 0`, dur, 0, '0;.4;.8;1')}<circle cx="0" cy="${y}" r="26" fill="${C.sakura}"/>${T(0, y + 9, 'O', { size: 24, fill: '#1b0c06', weight: 800 })}</g>`;
    return frame(p('Atoms join in whole numbers', 'Gli atomi si uniscono in numeri interi'),
      `${card(20, 18, 600, 120, C.data, 0.06)}${card(20, 150, 600, 120, C.data, 0.06)}
      ${atomC(78)}${atomO(78, 360, 256)}
      ${T(510, 70, 'CO', { size: 34, weight: 800 })}${T(510, 102, '1 C + 1 O', { size: 22, fill: C.muted })}
      ${atomC(210)}${atomO(210, 360, 256)}${atomO(210, 40, 144)}
      ${T(510, 202, 'CO₂', { size: 34, weight: 800 })}${T(510, 234, '1 C + 2 O', { size: 22, fill: C.muted })}
      ${T(320, 304, '12 g C : 16 g O   →   12 g C : 32 g O   (1 : 2)', { size: 22, fill: C.gold, weight: 700 })}`,
      '', 330);
  },

  /* The mole connects grams and particles */
  chemMole: lang => {
    const p = ch(lang);
    const box = (x: number, color: string, big: string, small: string, sub: string) =>
      `${card(x, 36, 160, 176, color)}${T(x + 80, 96, big, { size: 40, fill: color, weight: 800 })}${T(x + 80, 136, small, { size: 24 })}${T(x + 80, 174, sub, { size: 19, fill: C.muted })}`;
    const link = (x1: number, x2: number, t1: string, t2: string) =>
      `${T((x1 + x2) / 2, 82, t1, { size: 22, fill: C.gold, weight: 800 })}${arrow(x1, 100, x2, 100, C.gold, 6)}${arrow(x2, 140, x1, 140, C.gold, 6)}<circle r="6" fill="${C.text}"><animateMotion dur="1.8s" repeatCount="indefinite" path="M${x1} 100 L${x2} 100"/></circle><circle r="6" fill="${C.text}"><animateMotion dur="1.8s" begin="0.9s" repeatCount="indefinite" path="M${x2} 140 L${x1} 140"/></circle>${T((x1 + x2) / 2, 176, t2, { size: 22, fill: C.gold, weight: 800 })}`;
    return frame(p('The mole', 'La mole'),
      `${box(12, C.ember, 'm', p('mass', 'massa'), 'g')}${box(240, C.gold, 'n', p('moles', 'moli'), 'mol')}${box(468, C.good, 'N', p('particles', 'particelle'), p('atoms · molecules', 'atomi · molecole'))}
      ${link(176, 236, '÷ M', '× M')}${link(404, 464, '× Nₐ', '÷ Nₐ')}
      ${T(320, 252, 'n = m / M', { size: 28, weight: 800 })}${T(320, 292, 'N = n · Nₐ      Nₐ = 6.022 × 10²³ mol⁻¹', { size: 22, fill: C.muted })}`,
      '', 320);
  },

  /* A dozen is 12; a mole is a number far too big to count */
  chemAvogadroScale: lang => {
    const p = ch(lang);
    const dozen = Array.from({ length: 12 }, (_, i) => `<circle cx="${52 + (i % 6) * 44}" cy="${126 + Math.floor(i / 6) * 44}" r="16" fill="${C.ember}">${anim('opacity', '0;1;1', 3, i * 0.18, 'keyTimes="0;.2;1"')}</circle>`).join('');
    return frame(p('Dozen and mole', 'Dozzina e mole'),
      `${card(14, 20, 304, 244, C.ember)}${T(166, 58, p('1 DOZEN', '1 DOZZINA'), { size: 26, fill: C.ember, weight: 800 })}${dozen}${T(166, 236, '= 12', { size: 32, weight: 800 })}
      ${card(332, 20, 294, 244, C.good)}${T(479, 58, p('1 MOLE', '1 MOLE'), { size: 26, fill: C.good, weight: 800 })}
      ${T(479, 130, '6.022 × 10²³', { size: 38, fill: C.good, weight: 800 })}
      <g>${anim('opacity', '.4;1;.4', 2)}${T(479, 176, p('particles', 'particelle'), { size: 24 })}</g>
      ${T(479, 232, p('18 g of water = 1 mol', '18 g di acqua = 1 mol'), { size: 22, fill: C.muted })}
      ${T(320, 304, p('The mole counts particles, like a dozen counts eggs', 'La mole conta le particelle, come la dozzina conta le uova'), { size: 21, fill: C.muted })}`,
      '', 330);
  },

  /* Ideal gas: squeeze the piston, the pressure rises */
  chemGas: lang => {
    const p = ch(lang);
    const dur = 5;
    const parts = [[90, 150], [150, 190], [210, 130], [120, 230], [200, 240], [250, 180]].map(([x, y], i) =>
      `<circle r="11" fill="${C.gold}"><animate attributeName="cx" values="${x};${x + 60};${x - 10};${x}" dur="${0.9 + i * 0.12}s" repeatCount="indefinite"/><animate attributeName="cy" values="${y};${y + 28};${y - 18};${y}" dur="${1.1 + i * 0.1}s" repeatCount="indefinite"/></circle>`).join('');
    return frame(p('Gas under pressure', 'Gas sotto pressione'),
      `<rect x="50" y="40" width="270" height="250" rx="8" fill="none" stroke="${C.data}" stroke-width="6"/>
      <g>${move('0 0;0 70;0 70;0 0', dur, 0, '0;.45;.8;1')}<rect x="56" y="46" width="258" height="26" fill="${C.muted}"/><line x1="185" y1="20" x2="185" y2="46" stroke="${C.muted}" stroke-width="10"/></g>
      <clipPath id="gasclip"><rect x="56" y="76" width="258" height="208"/></clipPath><g clip-path="url(#gasclip)">${parts}</g>
      ${T(450, 80, p('Pressure', 'Pressione'), { size: 24 })}
      <rect x="400" y="96" width="100" height="14" rx="7" fill="none" stroke="${C.muted}" stroke-width="3"/><rect x="402" y="98" width="30" height="10" rx="5" fill="${C.ember}">${anim('width', '30;96;96;30', dur, 0, 'keyTimes="0;.45;.8;1"')}</rect>
      ${T(450, 164, p('Volume', 'Volume'), { size: 24 })}
      <rect x="400" y="180" width="100" height="14" rx="7" fill="none" stroke="${C.muted}" stroke-width="3"/><rect x="402" y="182" width="96" height="10" rx="5" fill="${C.data}">${anim('width', '96;30;30;96', dur, 0, 'keyTimes="0;.45;.8;1"')}</rect>
      ${T(450, 250, 'P · V = n · R · T', { size: 26, fill: C.gold, weight: 800 })}
      ${T(450, 282, p('T and n fixed: V ↓ → P ↑', 'T e n fissi: V ↓ → P ↑'), { size: 20, fill: C.muted })}`,
      '', 330);
  },

  /* Kelvin: a marker rises from absolute zero */
  chemKelvinScale: lang => {
    const p = ch(lang);
    const rows = [
      { y: 262, k: '0 K', c: '−273.15 °C', t: p('absolute zero', 'zero assoluto'), col: C.data },
      { y: 160, k: '273.15 K', c: '0 °C', t: p('ice melts', 'il ghiaccio fonde'), col: C.good },
      { y: 58, k: '373.15 K', c: '100 °C', t: p('water boils', 'l’acqua bolle'), col: C.ember }
    ];
    return frame(p('Kelvin scale', 'Scala Kelvin'),
      `<rect x="90" y="40" width="26" height="240" rx="13" fill="none" stroke="${C.muted}" stroke-width="4"/>
      <rect x="95" y="262" width="16" height="14" rx="7" fill="${C.ember}">${anim('y', '262;40;40;262', 8, 0, 'keyTimes="0;.7;.9;1"')}${anim('height', '14;236;236;14', 8, 0, 'keyTimes="0;.7;.9;1"')}</rect>
      ${rows.map(r => `<line x1="124" y1="${r.y}" x2="150" y2="${r.y}" stroke="${r.col}" stroke-width="5"/>${T(164, r.y - 6, r.k, { size: 28, fill: r.col, weight: 800, anchor: 'start' })}${T(164, r.y + 24, `${r.c} · ${r.t}`, { size: 20, fill: C.muted, anchor: 'start' })}`).join('')}
      ${T(470, 150, 'T(K) = t(°C) + 273.15', { size: 24, fill: C.gold, weight: 800, anchor: 'middle' })}
      ${T(470, 190, p('no negative kelvin', 'niente kelvin negativi'), { size: 20, fill: C.muted })}`,
      '', 320);
  },

  /* Four models of the atom with their key idea */
  chemAtomModels: lang => {
    const p = ch(lang);
    const w = 150, xs = [12, 170, 328, 486];
    const cell = (i: number, color: string, name: string, year: string, idea: string, art: string) =>
      `${card(xs[i], 20, w, 270, color)}${T(xs[i] + w / 2, 54, name, { size: 22, fill: color, weight: 800 })}${T(xs[i] + w / 2, 80, year, { size: 20, fill: C.muted })}${art}${T(xs[i] + w / 2, 250, idea, { size: 19 })}`;
    const cx = (i: number) => xs[i] + w / 2;
    const dalton = `<circle cx="${cx(0)}" cy="160" r="46" fill="${C.muted}" fill-opacity=".7"/>`;
    const thomson = `<circle cx="${cx(1)}" cy="160" r="48" fill="${C.gold}" fill-opacity=".35" stroke="${C.gold}" stroke-width="3"/>${[[-20, -14], [14, -22], [22, 12], [-10, 20], [-26, 6]].map(([dx, dy], k) => jiggle(cx(1) + dx, 160 + dy, 6, C.data, 2, k)).join('')}`;
    const ruth = `<circle cx="${cx(2)}" cy="160" r="9" fill="${C.ember}"/><ellipse cx="${cx(2)}" cy="160" rx="52" ry="22" fill="none" stroke="${C.line}" stroke-width="2"/><g transform="translate(${cx(2)} 160)"><g>${move('0;360', 3, 0, '', 'rotate')}<circle cx="52" cy="0" r="7" fill="${C.data}"/></g></g><g transform="translate(${cx(2)} 160) rotate(60)"><g>${move('0;360', 4, 0, '', 'rotate')}<circle cx="52" cy="0" r="7" fill="${C.data}"/></g></g>`;
    const bohr = `<circle cx="${cx(3)}" cy="160" r="9" fill="${C.ember}"/><circle cx="${cx(3)}" cy="160" r="26" fill="none" stroke="${C.line}" stroke-width="2"/><circle cx="${cx(3)}" cy="160" r="46" fill="none" stroke="${C.line}" stroke-width="2"/><g transform="translate(${cx(3)} 160)"><g>${move('0;360', 2.4, 0, '', 'rotate')}<circle cx="26" cy="0" r="6" fill="${C.data}"/></g></g><g transform="translate(${cx(3)} 160)"><g>${move('0;360', 4, 0, '', 'rotate')}<circle cx="46" cy="0" r="6" fill="${C.data}"/></g></g>`;
    return frame(p('Models of the atom', 'Modelli atomici'),
      `${cell(0, C.muted, 'Dalton', '1803', p('solid sphere', 'sfera piena'), dalton)}${cell(1, C.gold, 'Thomson', '1897', p('plum pudding', 'panettone'), thomson)}${cell(2, C.ember, 'Rutherford', '1911', p('tiny nucleus', 'nucleo piccolo'), ruth)}${cell(3, C.good, 'Bohr', '1913', p('energy levels', 'livelli energetici'), bohr)}`,
      '', 320);
  },

  /* Subshells: how many orbitals and electrons each holds */
  chemOrbitals: lang => {
    const p = ch(lang);
    const rows = [
      { n: 's', o: 1, e: 2, c: C.good }, { n: 'p', o: 3, e: 6, c: C.data }, { n: 'd', o: 5, e: 10, c: C.gold }, { n: 'f', o: 7, e: 14, c: C.sakura }
    ];
    const box = (x: number, y: number, c: string, k: number) =>
      `<rect x="${x}" y="${y}" width="36" height="40" rx="6" fill="${c}" fill-opacity=".12" stroke="${c}" stroke-width="3"/>${T(x + 18, y + 29, '↑↓', { size: 21, fill: c, weight: 800 })}`;
    return frame(p('Subshells and orbitals', 'Sottolivelli e orbitali'),
      `${rows.map((r, i) => { const y = 24 + i * 72; return `${T(46, y + 38, r.n, { size: 40, fill: r.c, weight: 800 })}
        ${Array.from({ length: r.o }, (_, k) => `<g opacity="0">${box(86 + k * 42, y, r.c, k)}${anim('opacity', '0;1;1', 4, k * 0.25 + i * 0.1, 'keyTimes="0;.15;1"')}</g>`).join('')}
        ${T(388, y + 29, p(`${r.o} orbital${r.o > 1 ? 's' : ''}`, `${r.o} orbital${r.o > 1 ? 'i' : 'e'}`), { size: 20, fill: C.muted, anchor: 'start' })}${T(500, y + 29, `max ${r.e} e⁻`, { size: 21, fill: r.c, weight: 800, anchor: 'start' })}`; }).join('')}`,
      p('Each orbital holds at most 2 electrons', 'Ogni orbitale contiene al massimo 2 elettroni'), 340);
  },

  /* Aufbau, Pauli, Hund */
  chemAufbauRules: lang => {
    const p = ch(lang);
    const hd = (i: number, color: string, t: string) => `${card(col3(i), 18, 200, 284, color)}${T(col3(i) + 100, 56, t, { size: 24, fill: color, weight: 800 })}`;
    const bx = (x: number, y: number, label: string, c: string) => `<rect x="${x}" y="${y}" width="48" height="52" rx="6" fill="none" stroke="${c}" stroke-width="3"/>${T(x + 24, y + 38, label, { size: 28, fill: c, weight: 800 })}`;
    const x0 = col3(0), x1 = col3(1), x2 = col3(2);
    const order = ['1s', '2s', '2p', '3s'];
    const aufbau = order.map((t, i) => `<g opacity="0">${T(x0 + 100, 108 + i * 42, t, { size: 28, weight: 800 })}${anim('opacity', '0;1;1', 4, i * 0.6, 'keyTimes="0;.1;1"')}</g>`).join('');
    const pauli = `${bx(x1 + 76, 116, '↑↓', C.data)}${T(x1 + 100, 202, p('max 2 per box', 'max 2 per casella'), { size: 19 })}${T(x1 + 100, 232, p('opposite spins', 'spin opposti'), { size: 19, fill: C.muted })}`;
    const hund = [0, 1, 2].map(i => `${bx(x2 + 20 + i * 56, 116, '↑', C.gold)}`).join('') + `${T(x2 + 100, 202, p('one each first', 'prima uno ciascuna'), { size: 19 })}${T(x2 + 100, 232, p('then pair up', 'poi si accoppiano'), { size: 19, fill: C.muted })}`;
    return frame(p('Filling electron orbitals', 'Riempimento degli orbitali'),
      `${hd(0, C.ember, 'AUFBAU')}${aufbau}${T(x0 + 100, 280, p('lowest energy first', 'energia bassa prima'), { size: 18, fill: C.muted })}
      ${hd(1, C.data, 'PAULI')}${pauli}${hd(2, C.gold, 'HUND')}${hund}`,
      '', 330);
  },

  /* Periodic table blocks and trends (periods 1 to 4) */
  chemPeriodic: lang => {
    const p = ch(lang);
    const cw = 28, x0 = 30, y0 = 80, rh = 36;
    const cell = (col: number, row: number, color: string) => `<rect x="${x0 + col * cw + 1}" y="${y0 + row * rh + 1}" width="${cw - 2}" height="${rh - 2}" rx="3" fill="${color}" fill-opacity=".28" stroke="${color}" stroke-width="1.5"/>`;
    const cells: string[] = [];
    for (let r = 0; r < 4; r++) {
      if (r === 0) { cells.push(cell(0, 0, C.ember), cell(17, 0, C.ember)); continue; }      // H and He
      cells.push(cell(0, r, C.ember), cell(1, r, C.ember));                                // s block
      for (let c = 12; c < 18; c++) cells.push(cell(c, r, C.data));                        // p block
    }
    for (let c = 2; c < 12; c++) cells.push(cell(c, 3, C.gold));                           // d block starts in period 4
    return frame(p('The periodic table', 'La tavola periodica'),
      `${cells.join('')}
      ${T(x0 + cw, 64, 's', { size: 24, fill: C.ember, weight: 800 })}${T(x0 + 7 * cw, 64, 'd', { size: 24, fill: C.gold, weight: 800 })}${T(x0 + 15 * cw, 64, 'p', { size: 24, fill: C.data, weight: 800 })}
      ${arrow(x0 + 4, 246, x0 + 18 * cw - 6, 246, C.good, 5)}${T(x0 + 9 * cw, 280, p('ionization energy · electronegativity ↑', 'en. di ionizzazione · elettronegatività ↑'), { size: 20, fill: C.good, weight: 700 })}
      ${arrow(x0 + 18 * cw + 26, 224, x0 + 18 * cw + 26, 90, C.good, 5)}
      ${arrow(x0 + 18 * cw + 62, 90, x0 + 18 * cw + 62, 224, C.sakura, 5)}${T(x0 + 18 * cw + 62, 252, p('radius', 'raggio'), { size: 20, fill: C.sakura, weight: 800 })}
      <circle r="9" fill="${C.text}" opacity=".9"><animate attributeName="cx" values="${x0 + 12.5 * cw};${x0 + 17.5 * cw};${x0 + 17.5 * cw}" keyTimes="0;.8;1" dur="4s" repeatCount="indefinite"/><animate attributeName="cy" values="${y0 + 3.5 * rh};${y0 + 1.5 * rh};${y0 + 1.5 * rh}" keyTimes="0;.8;1" dur="4s" repeatCount="indefinite"/></circle>`,
      p('Blocks s, d, p and the main trends', 'Blocchi s, d, p e andamenti principali'), 330);
  }
};
