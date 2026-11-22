import { C, T, anim, frame, showDuring } from './sciViz';

/**
 * Motifs for the Ghana NaCCA Core Mathematics strands, redrawn large (English only, as all Ghana
 * content is). Each one is a single idea with a little motion: a number line with a hopping point,
 * a balance, a triangle and a bearing, a bar chart with a chance wheel, and the four strands together.
 */
export type GhanaStrandKey = 'number' | 'algebra' | 'geometry' | 'data' | 'mastery';

const H = 230;

const numberMotif = () => {
  const x = (v: number) => 320 + v * 85;
  let ticks = '';
  for (let v = -3; v <= 3; v++) ticks += `<line x1="${x(v)}" y1="106" x2="${x(v)}" y2="134" stroke="${C.text}" stroke-width="5" stroke-linecap="round"/>${T(x(v), 172, v < 0 ? '−' + Math.abs(v) : String(v), { size: 24, weight: 800 })}`;
  const neg = x(-2.5), root = x(Math.SQRT2);
  return frame('Numbers on a line',
    `${T(44, 56, 'ℝ', { size: 34, fill: C.data, weight: 800, anchor: 'start' })}
     <line x1="30" y1="120" x2="596" y2="120" stroke="${C.muted}" stroke-width="5" stroke-linecap="round"/><polygon points="618,120 598,110 598,130" fill="${C.muted}"/>${ticks}
     <circle cx="${neg.toFixed(1)}" cy="120" r="11" fill="${C.ember}"/>${T(neg, 84, '−2.5', { size: 26, fill: C.ember, weight: 800 })}
     <circle cx="${root.toFixed(1)}" cy="120" r="11" fill="${C.good}"/>${T(root, 84, '√2', { size: 28, fill: C.good, weight: 800 })}
     <circle cy="120" r="9" fill="${C.gold}" stroke="${C.text}" stroke-width="3"><animateMotion dur="5s" repeatCount="indefinite" path="M${neg.toFixed(1)} 120 H${root.toFixed(1)} H${neg.toFixed(1)}"/></circle>`, '', H);
};

const algebraMotif = () =>
  frame('A balance for x + 3 = 7',
    `<rect x="270" y="196" width="100" height="14" rx="7" fill="${C.muted}"/><line x1="320" y1="64" x2="320" y2="198" stroke="${C.muted}" stroke-width="8" stroke-linecap="round"/>
     <g><animateTransform attributeName="transform" type="rotate" values="-4 320 64;4 320 64;-4 320 64" dur="3.6s" repeatCount="indefinite"/>
       <line x1="130" y1="64" x2="510" y2="64" stroke="${C.text}" stroke-width="8" stroke-linecap="round"/>
       <line x1="160" y1="64" x2="160" y2="112" stroke="${C.text}" stroke-width="4"/><line x1="480" y1="64" x2="480" y2="112" stroke="${C.text}" stroke-width="4"/>
       <rect x="96" y="112" width="128" height="54" rx="12" fill="${C.data}" fill-opacity="0.22" stroke="${C.data}" stroke-width="4"/>${T(160, 150, 'x + 3', { size: 30, fill: C.data, weight: 800 })}
       <rect x="416" y="112" width="128" height="54" rx="12" fill="${C.ember}" fill-opacity="0.22" stroke="${C.ember}" stroke-width="4"/>${T(480, 150, '7', { size: 32, fill: C.ember, weight: 800 })}
     </g>
     ${T(320, 40, '=', { size: 34, weight: 800 })}${T(570, 214, 'x = 4', { size: 30, fill: C.good, weight: 800 })}`, '', H);

const geometryMotif = () => {
  const cx = 480, cy = 122, r = 64;
  return frame('A right triangle and a bearing',
    `<polygon points="60,186 270,186 270,50" fill="${C.good}" fill-opacity="0.14" stroke="${C.good}" stroke-width="5" stroke-linejoin="round"/>
     <path d="M258 186 V174 H270" fill="none" stroke="${C.text}" stroke-width="3"/>
     <path d="M110 186 A50 50 0 0 0 103 162" fill="none" stroke="${C.ember}" stroke-width="5"/>${T(132, 176, 'θ', { size: 30, fill: C.ember, weight: 800 })}
     ${T(138, 98, 'hyp', { size: 22, fill: C.muted })}${T(165, 214, 'adj', { size: 22, fill: C.muted })}${T(296, 126, 'opp', { size: 22, fill: C.muted, anchor: 'start' })}
     <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${C.gold}" stroke-width="5"/>
     <line x1="${cx}" y1="${cy}" x2="${cx}" y2="${cy - r - 10}" stroke="${C.text}" stroke-width="4" stroke-dasharray="6 6"/>${T(cx, 30, 'N', { size: 30, weight: 800 })}
     <g transform="translate(${cx} ${cy})"><line x1="0" y1="0" x2="0" y2="${-r}" stroke="${C.ember}" stroke-width="6" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" values="0;0;70;70;0" keyTimes="0;0.1;0.5;0.85;1" dur="6s" repeatCount="indefinite"/></line></g>
     <circle cx="${cx}" cy="${cy}" r="6" fill="${C.text}"/>${T(cx, 222, 'bearing', { size: 22, fill: C.muted })}`, '', H + 4);
};

const dataMotif = () => {
  const hs = [56, 88, 40, 104, 72];
  const bars = hs.map((h, i) => `<rect x="${50 + i * 64}" y="${190 - h}" width="48" height="${h}" rx="6" fill="${i % 2 ? C.ember : C.good}" fill-opacity="0.85"/>
    <rect x="${46 + i * 64}" y="${186 - h}" width="56" height="${h + 8}" rx="8" fill="none" stroke="${C.text}" stroke-width="4" opacity="0">${anim('opacity', '0;1;1;0;0', 7, 0, `keyTimes="0;${(0.03 + i * 0.16).toFixed(2)};${(0.14 + i * 0.16).toFixed(2)};${(0.18 + i * 0.16).toFixed(2)};1"`)}</rect>`).join('');
  const cx = 500, cy = 112, r = 66;
  return frame('Data and chance',
    `<line x1="36" y1="190" x2="372" y2="190" stroke="${C.muted}" stroke-width="5" stroke-linecap="round"/>${bars}
     <circle cx="${cx}" cy="${cy}" r="${r}" fill="${C.panel}" stroke="${C.gold}" stroke-width="5"/><path d="M${cx} ${cy - r} A${r} ${r} 0 0 1 ${cx} ${cy + r} Z" fill="${C.gold}" fill-opacity="0.55"/>
     ${T(cx, cy + 12, '½', { size: 40, weight: 800 })}
     <circle r="9" fill="${C.sakura}" stroke="${C.text}" stroke-width="3"><animateMotion dur="5s" repeatCount="indefinite" path="M${cx} ${cy - r} A${r} ${r} 0 1 1 ${cx - 0.01} ${cy - r}"/></circle>
     ${T(cx, 222, 'chance', { size: 22, fill: C.muted })}`, '', H + 4);
};

const masteryMotif = () => {
  const items: Array<[string, string, string]> = [['ℝ', 'Number', C.data], ['x', 'Algebra', C.ember], ['△', 'Geometry', C.good], ['▮', 'Data', C.gold]];
  const circles = items.map(([sym, name, col], i) => {
    const cx = 85 + i * 157;
    return `<circle cx="${cx}" cy="96" r="52" fill="${col}" fill-opacity="0.14" stroke="${col}" stroke-width="5">${anim('r', '52;58;52', 3, i * 0.4)}</circle>${T(cx, 112, sym, { size: 46, fill: col, weight: 800 })}${T(cx, 186, name, { size: 24, fill: col, weight: 800 })}`;
  }).join('');
  return frame('The four strands together', `${circles}${showDuring(0.1, 0.9, 6, `<line x1="137" y1="96" x2="188" y2="96" stroke="${C.muted}" stroke-width="4"/><line x1="294" y1="96" x2="345" y2="96" stroke="${C.muted}" stroke-width="4"/><line x1="451" y1="96" x2="502" y2="96" stroke="${C.muted}" stroke-width="4"/>`)}`, '', 220);
};

export const GHANA_MOTIFS: Record<GhanaStrandKey, () => string> = {
  number: numberMotif,
  algebra: algebraMotif,
  geometry: geometryMotif,
  data: dataMotif,
  mastery: masteryMotif
};
