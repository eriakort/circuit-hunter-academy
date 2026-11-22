import type { Language } from '../types';
import { C, T, arrow, anim, move, frame, pick, showDuring, card } from './sciViz';

/**
 * Grade 11 Chemistry diagrams, redrawn large with motion that shows the idea. Keys are unchanged so
 * the lessons keep working. The facts are the standard school ones the old drawings already taught;
 * a teacher should still skim the wording against the course text.
 */
type Builder = (lang: Language) => string;
const ch = (lang: Language) => (en: string, it: string) => pick(lang, en, it);

/** Dots that travel along a path, staggered, to show heat or electrons moving. */
const flow = (path: string, n: number, dur: number, r: number, color: string, begin = 0) =>
  Array.from({ length: n }, (_, i) => `<circle r="${r}" fill="${color}"><animateMotion dur="${dur}s" begin="${begin - (i * dur) / n}s" repeatCount="indefinite" path="${path}"/></circle>`).join('');

export const CHEM11_BUILDERS: Record<string, Builder> = {
  /* Energy levels: exothermic and endothermic */
  chemThermo: lang => {
    const p = ch(lang);
    const panel = (x0: number, exo: boolean) => {
      const color = exo ? C.ember : C.data, yR = exo ? 124 : 214, yP = exo ? 214 : 124;
      const curve = `M${x0 + 100} ${yR} C${x0 + 140} ${yR} ${x0 + 150} ${yP} ${x0 + 190} ${yP}`;
      const heat = exo
        ? `<circle r="8" fill="${C.gold}" opacity="0"><animate attributeName="cx" values="${x0 + 160};${x0 + 280}" dur="2.4s" repeatCount="indefinite"/><animate attributeName="cy" values="170;140" dur="2.4s" repeatCount="indefinite"/>${anim('opacity', '0;1;0', 2.4)}</circle>`
        : `<circle r="8" fill="${C.gold}" opacity="0"><animate attributeName="cx" values="${x0 + 280};${x0 + 160}" dur="2.4s" repeatCount="indefinite"/><animate attributeName="cy" values="140;170" dur="2.4s" repeatCount="indefinite"/>${anim('opacity', '0;1;0', 2.4)}</circle>`;
      return `${card(x0, 24, 306, 262, color, 0.08)}${T(x0 + 153, 58, exo ? p('EXOTHERMIC', 'ESOTERMICA') : p('ENDOTHERMIC', 'ENDOTERMICA'), { size: 24, fill: color, weight: 800 })}
        ${T(x0 + 153, 84, exo ? 'ΔH < 0' : 'ΔH > 0', { size: 22, fill: C.muted })}
        <line x1="${x0 + 22}" y1="${yR}" x2="${x0 + 100}" y2="${yR}" stroke="${exo ? C.data : C.good}" stroke-width="6" stroke-linecap="round"/>
        <line x1="${x0 + 190}" y1="${yP}" x2="${x0 + 268}" y2="${yP}" stroke="${exo ? C.good : C.gold}" stroke-width="6" stroke-linecap="round"/>
        ${T(x0 + 61, yR + (exo ? -16 : 32), p('Reactants', 'Reagenti'), { size: 20 })}${T(x0 + 229, yP + (exo ? 32 : -16), p('Products', 'Prodotti'), { size: 20 })}
        <path d="${curve}" fill="none" stroke="${C.gold}" stroke-width="4"/>
        <circle r="9" fill="${C.text}"><animateMotion dur="3s" repeatCount="indefinite" path="${curve}"/></circle>
        ${heat}${T(x0 + 153, 274, exo ? p('heat flows out', 'il calore esce') : p('heat flows in', 'il calore entra'), { size: 20, fill: C.muted })}`;
    };
    return frame(p('Heat of reactions', 'Calore delle reazioni'), `${panel(14, true)}${panel(320, false)}`,
      p('Spontaneity: ΔG = ΔH − TΔS', 'Spontaneità: ΔG = ΔH − TΔS'), 340);
  },

  /* Kinetics: a catalyst lowers the energy barrier */
  chemKinetics: lang => {
    const p = ch(lang);
    const hi = 'M150 160 C200 160 215 50 300 50 C385 50 400 225 450 225 L600 225';
    const lo = 'M150 160 C190 160 220 104 300 104 C380 104 405 225 450 225 L600 225';
    return frame(p('How a catalyst speeds a reaction', 'Come il catalizzatore accelera'),
      `<line x1="30" y1="160" x2="150" y2="160" stroke="${C.data}" stroke-width="6" stroke-linecap="round"/>
      <line x1="450" y1="225" x2="610" y2="225" stroke="${C.good}" stroke-width="6" stroke-linecap="round"/>
      <path d="${hi}" fill="none" stroke="${C.ember}" stroke-width="4"/>
      <path d="${lo}" fill="none" stroke="${C.good}" stroke-width="4" stroke-dasharray="10 7"/>
      ${arrow(62, 158, 62, 54, C.ember, 4)}${T(78, 116, 'Eₐ', { size: 24, fill: C.ember, weight: 800, anchor: 'start' })}
      ${arrow(120, 158, 120, 108, C.good, 4)}${T(134, 134, 'Eₐ′', { size: 22, fill: C.good, weight: 800, anchor: 'start' })}
      ${T(90, 192, p('Reactants', 'Reagenti'), { size: 20 })}${T(530, 258, p('Products', 'Prodotti'), { size: 20 })}
      ${T(610, 38, p('no catalyst', 'senza catalizzatore'), { size: 20, fill: C.ember, weight: 800, anchor: 'end' })}${T(610, 64, p('with catalyst', 'con catalizzatore'), { size: 20, fill: C.good, weight: 800, anchor: 'end' })}
      <circle r="10" fill="${C.ember}"><animateMotion dur="5s" repeatCount="indefinite" path="${hi}"/></circle>
      <circle r="10" fill="${C.good}"><animateMotion dur="2.5s" repeatCount="indefinite" path="${lo}"/></circle>`,
      p('The catalyst lowers Eₐ, not ΔH', 'Il catalizzatore abbassa Eₐ, non ΔH'), 330);
  },

  /* Equilibrium: both rates equal; how it shifts */
  chemEquilibrium: lang => {
    const p = ch(lang);
    const cell = (i: number, color: string, text: string) => {
      const x = 16 + (i % 2) * 308, y = 176 + Math.floor(i / 2) * 58;
      return `${card(x, y, 300, 50, color, 0.08)}${T(x + 150, y + 32, text, { size: 20, weight: 700 })}`;
    };
    return frame(p('Dynamic equilibrium', 'Equilibrio dinamico'),
      `${T(72, 94, p('reactants', 'reagenti'), { size: 22, fill: C.data, weight: 800 })}${T(568, 94, p('products', 'prodotti'), { size: 22, fill: C.ember, weight: 800 })}
      ${arrow(150, 66, 490, 66, C.good, 6)}${arrow(490, 112, 150, 112, C.ember, 6)}
      ${flow('M150 66 H490', 3, 2.4, 7, C.text)}${flow('M490 112 H150', 3, 2.4, 7, C.text, 0.4)}
      ${T(320, 156, p('forward rate = reverse rate', 'v diretta = v inversa'), { size: 22, fill: C.gold, weight: 800 })}
      ${cell(0, C.data, p('+ reactant → shifts right', '+ reagente → verso destra'))}
      ${cell(1, C.ember, p('+ product → shifts left', '+ prodotto → verso sinistra'))}
      ${cell(2, C.good, p('P ↑ → fewer gas moles', 'P ↑ → meno moli di gas'))}
      ${cell(3, C.gold, p('T ↑ → endothermic side', 'T ↑ → verso l’endotermica'))}`,
      p('A catalyst is faster but shifts nothing', 'Il catalizzatore accelera ma non sposta'), 340);
  },

  /* Brønsted–Lowry: pass the proton */
  chemBronstedPass: lang => {
    const p = ch(lang);
    const dur = 6;
    return frame(p('Brønsted–Lowry: passing the proton', 'Brønsted–Lowry: il passaggio del protone'),
      `${T(110, 62, p('ACID', 'ACIDO'), { size: 24, fill: C.ember, weight: 800 })}${T(110, 90, p('gives H⁺', 'cede H⁺'), { size: 20, fill: C.muted })}
      ${T(500, 62, p('BASE', 'BASE'), { size: 24, fill: C.data, weight: 800 })}${T(500, 90, p('takes H⁺', 'accetta H⁺'), { size: 20, fill: C.muted })}
      <circle cx="110" cy="170" r="42" fill="${C.ember}" fill-opacity="0.25" stroke="${C.ember}" stroke-width="3"/>${T(110, 180, 'Cl', { size: 28, weight: 800 })}
      <circle cx="500" cy="176" r="38" fill="${C.data}" fill-opacity="0.25" stroke="${C.data}" stroke-width="3"/>${T(500, 186, 'O', { size: 28, weight: 800 })}
      <circle cx="470" cy="222" r="15" fill="${C.text}"/><circle cx="530" cy="222" r="15" fill="${C.text}"/>
      <g transform="translate(164 170)"><g><circle r="21" fill="${C.gold}"/>${T(0, 7, 'H⁺', { size: 20, weight: 800, fill: '#1b1b1b', extra: 'style="stroke:none"' })}${move('0 0;0 0;300 -52;300 -52;0 0', dur, 0, '0;.15;.55;.85;1')}</g></g>
      ${showDuring(0.58, 0.97, dur, `<circle cx="500" cy="126" r="15" fill="${C.gold}"/>`)}
      ${showDuring(0.0, 0.5, dur, T(320, 290, 'HCl + H₂O', { size: 28, weight: 800 }))}
      ${showDuring(0.56, 0.97, dur, T(320, 290, 'Cl⁻ + H₃O⁺', { size: 28, weight: 800, fill: C.good }))}`,
      p('The acid gives H⁺, the base takes it', 'L’acido cede H⁺, la base lo accetta'), 340);
  },

  /* pH scale: [H3O+] against [OH-] */
  chemAcidsPH: lang => {
    const p = ch(lang);
    const dur = 8, bx = 30, bw = 580;
    return frame(p('The pH scale', 'La scala del pH'),
      `<defs><linearGradient id="phgrad" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff6a3d"/><stop offset="0.35" stop-color="#ffd166"/><stop offset="0.5" stop-color="#38ef7d"/><stop offset="0.7" stop-color="#45d8ff"/><stop offset="1" stop-color="#7a5cff"/></linearGradient></defs>
      ${T(110, 48, p('ACIDIC', 'ACIDO'), { size: 24, fill: C.ember, weight: 800 })}${T(320, 48, p('NEUTRAL', 'NEUTRO'), { size: 24, fill: C.good, weight: 800 })}${T(530, 48, p('BASIC', 'BASICO'), { size: 24, fill: C.data, weight: 800 })}
      <rect x="${bx}" y="62" width="${bw}" height="38" rx="10" fill="url(#phgrad)"/>
      ${T(bx, 128, 'pH 0', { size: 20, anchor: 'start' })}${T(320, 128, 'pH 7', { size: 20 })}${T(bx + bw, 128, 'pH 14', { size: 20, anchor: 'end' })}
      <g><polygon points="${bx},112 ${bx - 12},138 ${bx + 12},138" fill="${C.text}"/>${move(`0 0;${bw} 0;0 0`, dur, 0, '0;.5;1')}</g>
      ${T(30, 196, 'H₃O⁺', { size: 22, fill: C.ember, weight: 800, anchor: 'start' })}
      <rect x="120" y="176" height="26" rx="6" fill="${C.ember}">${anim('width', '250;20;250', dur, 0, 'keyTimes="0;.5;1"')}</rect>
      ${T(30, 240, 'OH⁻', { size: 22, fill: C.data, weight: 800, anchor: 'start' })}
      <rect x="120" y="220" height="26" rx="6" fill="${C.data}">${anim('width', '20;250;20', dur, 0, 'keyTimes="0;.5;1"')}</rect>
      ${T(410, 198, 'pH = −log[H₃O⁺]', { size: 22, anchor: 'start', weight: 700 })}${T(410, 240, 'pH + pOH = 14', { size: 22, anchor: 'start', weight: 700 })}`,
      p('Lower pH means more H₃O⁺', 'pH più basso = più H₃O⁺'), 330);
  },

  /* Redox: electrons leave one atom and arrive at another */
  chemRedox: lang => {
    const p = ch(lang);
    const dur = 4.5;
    const side = (x0: number, color: string, title: string, eq: string, no: string, role: string) =>
      `${card(x0, 24, 300, 262, color, 0.08)}${T(x0 + 150, 58, title, { size: 24, fill: color, weight: 800 })}${T(x0 + 150, 210, eq, { size: 24, weight: 800 })}${T(x0 + 150, 242, no, { size: 22, fill: C.muted })}${T(x0 + 150, 272, role, { size: 20, fill: color, weight: 700 })}`;
    const e = (b: number) => `<circle r="8" fill="${C.gold}" opacity="0"><animateMotion dur="${dur}s" begin="${b}s" repeatCount="indefinite" path="M150 140 L490 140" keyPoints="0;0;1;1" keyTimes="0;.1;.45;1" calcMode="linear"/>${anim('opacity', '0;1;1;0;0', dur, b, 'keyTimes="0;.1;.45;.46;1"')}</circle>`;
    return frame(p('Redox: electrons on the move', 'Redox: elettroni in movimento'),
      `${side(14, C.ember, p('OXIDATION', 'OSSIDAZIONE'), 'Zn → Zn²⁺ + 2 e⁻', 'N.O.  0 → +2', p('reducing agent', 'agente riducente'))}
      ${side(326, C.data, p('REDUCTION', 'RIDUZIONE'), 'Cu²⁺ + 2 e⁻ → Cu', 'N.O.  +2 → 0', p('oxidizing agent', 'agente ossidante'))}
      <circle cx="110" cy="140" r="42" fill="${C.ember}" fill-opacity="0.25" stroke="${C.ember}" stroke-width="3"/>
      ${showDuring(0, 0.48, dur, T(110, 149, 'Zn', { size: 26, weight: 800 }))}${showDuring(0.5, 0.98, dur, T(110, 149, 'Zn²⁺', { size: 24, weight: 800 }))}
      <circle cx="530" cy="140" r="42" fill="${C.data}" fill-opacity="0.25" stroke="${C.data}" stroke-width="3"/>
      ${showDuring(0, 0.48, dur, T(530, 149, 'Cu²⁺', { size: 24, weight: 800 }))}${showDuring(0.5, 0.98, dur, T(530, 149, 'Cu', { size: 26, weight: 800 }))}
      ${e(0)}${e(0.3)}`,
      p('One atom loses e⁻, the other gains them', 'Uno perde e⁻, l’altro li acquista'), 340);
  },

  /* Galvanic (Daniell) cell */
  chemElectroCell: lang => {
    const p = ch(lang);
    const wire = 'M150 118 V66 H490 V118';
    const bridge = 'M205 190 V132 H435 V190';
    return frame(p('How a battery works (Daniell cell)', 'Come funziona una pila (Daniell)'),
      `<rect x="40" y="150" width="220" height="124" rx="10" fill="${C.muted}" fill-opacity="0.1" stroke="${C.line}" stroke-width="3"/>
      <rect x="380" y="150" width="220" height="124" rx="10" fill="${C.data}" fill-opacity="0.16" stroke="${C.line}" stroke-width="3"/>
      <rect x="140" y="118" width="20" height="130" rx="4" fill="${C.muted}"><animate attributeName="height" values="130;100;130" dur="6s" repeatCount="indefinite"/></rect>
      <rect x="480" y="118" width="20" height="130" rx="4" fill="${C.ember}"><animate attributeName="width" values="20;32;20" dur="6s" repeatCount="indefinite"/><animate attributeName="x" values="480;474;480" dur="6s" repeatCount="indefinite"/></rect>
      ${T(100, 214, 'Zn', { size: 24, weight: 800 })}${T(560, 214, 'Cu', { size: 24, weight: 800 })}
      <path d="${bridge}" fill="none" stroke="${C.gold}" stroke-opacity="0.4" stroke-width="16" stroke-linecap="round"/>
      ${flow(bridge, 3, 3, 5, C.good)}
      <path d="${wire}" fill="none" stroke="${C.muted}" stroke-width="5"/>
      ${flow(wire, 4, 3.2, 7, C.gold)}<circle cx="320" cy="66" r="36" fill="${C.panel}" stroke="${C.text}" stroke-width="3"/>${T(320, 73, '1.10 V', { size: 20, weight: 800 })}${T(214, 48, 'e⁻ →', { size: 20, fill: C.gold, weight: 800 })}
      ${T(150, 306, p('Anode −: Zn dissolves', 'Anodo −: Zn si scioglie'), { size: 20, fill: C.muted })}${T(490, 306, p('Cathode +: Cu grows', 'Catodo +: Cu si deposita'), { size: 20, fill: C.muted })}`,
      '', 340);
  },

  /* Organic: single, double, triple carbon bonds */
  chemOrganic: lang => {
    const p = ch(lang);
    const dur = 4;
    const row = (i: number, color: string, name: string, gen: string, ex: string, n: number) => {
      const y = 28 + i * 76, cy = y + 32;
      return `${card(16, y, 608, 66, color, 0.08)}${T(30, y + 28, name, { size: 22, fill: color, weight: 800, anchor: 'start' })}${T(30, y + 56, gen, { size: 20, fill: C.muted, anchor: 'start' })}
        <circle cx="340" cy="${cy}" r="22" fill="${C.muted}" fill-opacity="0.35" stroke="${color}" stroke-width="3"/><circle cx="426" cy="${cy}" r="22" fill="${C.muted}" fill-opacity="0.35" stroke="${color}" stroke-width="3"/>
        ${T(340, cy + 7, 'C', { size: 22, weight: 800 })}${T(426, cy + 7, 'C', { size: 22, weight: 800 })}
        ${Array.from({ length: n }, (_, k) => { const yy = cy + (k - (n - 1) / 2) * 12; return `<line x1="362" y1="${yy}" x2="404" y2="${yy}" stroke="${color}" stroke-width="5" stroke-linecap="round" opacity="0">${anim('opacity', '0;0;1;1;0', dur, 0, `keyTimes="0;${(0.05 + k * 0.2).toFixed(2)};${(0.15 + k * 0.2).toFixed(2)};0.9;1"`)}</line>`; }).join('')}
        ${T(608, cy + 8, ex, { size: 24, weight: 800, anchor: 'end' })}`;
    };
    return frame(p('Hydrocarbons', 'Idrocarburi'),
      `${row(0, C.good, p('Alkanes · -ane', 'Alcani · -ano'), 'CₙH₂ₙ₊₂', 'C₂H₆', 1)}
      ${row(1, C.data, p('Alkenes · -ene', 'Alcheni · -ene'), 'CₙH₂ₙ', 'C₂H₄', 2)}
      ${row(2, C.ember, p('Alkynes · -yne', 'Alchini · -ino'), 'CₙH₂ₙ₋₂', 'C₂H₂', 3)}
      ${T(320, 280, p('Groups: –OH alcohol · –CHO aldehyde · C=O ketone', 'Gruppi: –OH alcol · –CHO aldeide · C=O chetone'), { size: 20, fill: C.gold, weight: 700 })}`,
      p('More bonds between carbons, fewer hydrogens', 'Più legami tra C, meno idrogeni'), 340);
  },

  /* Esters and polymers */
  chemPolymers: lang => {
    const p = ch(lang);
    const dur = 6;
    const block = (cx: number, color: string, label: string, dx: number) =>
      `<g transform="translate(${cx} 160)"><g><rect x="-45" y="-28" width="90" height="56" rx="12" fill="${color}" fill-opacity="0.3" stroke="${color}" stroke-width="3"/>${T(0, 7, label, { size: 20, weight: 800 })}${move(`0 0;0 0;${dx} 0;${dx} 0;0 0`, dur, 0, '0;.1;.4;.9;1')}</g></g>`;
    const pill = (cx: number) =>
      `<rect x="${cx - 36}" y="146" width="72" height="44" rx="14" fill="${C.good}" fill-opacity="0.22" stroke="${C.good}" stroke-width="3"/>`;
    return frame(p('Esters and polymers', 'Esteri e polimeri'),
      `${card(14, 24, 306, 258, C.ember, 0.08)}${T(167, 58, p('ESTER', 'ESTERE'), { size: 24, fill: C.ember, weight: 800 })}${T(167, 86, p('fruity aromas', 'aromi di frutta'), { size: 20, fill: C.muted })}
      ${block(72, C.ember, p('Acid', 'Acido'), 50)}${block(262, C.data, p('Alcohol', 'Alcol'), -50)}
      <g opacity="0"><circle cx="167" cy="150" r="22" fill="${C.data}" fill-opacity="0.5" stroke="${C.data}" stroke-width="3"/>${T(167, 157, 'H₂O', { size: 18, weight: 800 })}${move('0 0;0 0;0 70;0 70', dur, 0, '0;.4;.7;1')}${anim('opacity', '0;0;1;1;0;0', dur, 0, 'keyTimes="0;.4;.42;.65;.72;1"')}</g>
      ${T(167, 254, p('drops one H₂O', 'perde una H₂O'), { size: 22, weight: 700 })}
      ${card(326, 24, 300, 258, C.good, 0.08)}${T(476, 58, p('POLYMER', 'POLIMERO'), { size: 24, fill: C.good, weight: 800 })}${T(476, 86, p('double bonds open', 'i doppi legami si aprono'), { size: 20, fill: C.muted })}
      ${[0, 1, 2].map(i => pill(376 + i * 100)).join('')}
      ${[0, 1, 2].map(i => `${showDuring(0, 0.48, dur, T(376 + i * 100, 176, 'C=C', { size: 22, weight: 800 }))}${showDuring(0.5, 0.98, dur, T(376 + i * 100, 176, 'C–C', { size: 22, weight: 800, fill: C.good }))}`).join('')}
      ${showDuring(0.5, 0.98, dur, [0, 1].map(i => `<line x1="${376 + i * 100 + 36}" y1="168" x2="${376 + i * 100 + 64}" y2="168" stroke="${C.good}" stroke-width="6" stroke-linecap="round"/>`).join(''))}
      ${T(476, 254, 'n C₂H₄ → (–C₂H₄–)ₙ', { size: 22, weight: 700 })}`,
      p('Small molecules join into big ones', 'Molecole piccole formano molecole grandi'), 340);
  }
};
