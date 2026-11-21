import React, { useRef } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { MoreDetails } from './MoreDetails';
import { useSmilPause } from './useSmilPause';

const NS = { stroke: 'none' } as const;
const Atom: React.FC<{ x: number; y: number; r: number; fill: string; label: string; dark?: boolean }> = ({ x, y, r, fill, label, dark }) => (
  <g transform={`translate(${x} ${y})`}><circle r={r} fill={fill} stroke="#2b2f2a" strokeWidth="2.5" /><text y="5" textAnchor="middle" className="sm-name" style={{ ...NS, fill: dark ? '#fff' : '#2b2f2a' }}>{label}</text></g>
);
const Jiggle: React.FC<{ dur?: number; amp?: number; begin?: number }> = ({ dur = 1.6, amp = 2.5, begin = 0 }) => (
  <animateTransform attributeName="transform" type="translate" additive="sum" values={`0 0;${amp} ${-amp};${-amp} ${amp};0 0`} dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" />
);

/* ---------- Binary compounds ---------- */
type Compound = { id: string; name: string; formula: string; elements: string[]; ratio: string; note: string };
export const COMPOUNDS: Compound[] = [
  { id: 'water', name: 'Water', formula: 'H₂O', elements: ['Hydrogen', 'Oxygen'], ratio: '2 hydrogen atoms : 1 oxygen atom', note: 'Each water molecule contains two hydrogen atoms chemically bonded to one oxygen atom.' },
  { id: 'co2', name: 'Carbon dioxide', formula: 'CO₂', elements: ['Carbon', 'Oxygen'], ratio: '1 carbon atom : 2 oxygen atoms', note: 'The small 2 applies to oxygen: one carbon atom is joined to two oxygen atoms in each molecule.' },
  { id: 'nacl', name: 'Sodium chloride', formula: 'NaCl', elements: ['Sodium', 'Chlorine'], ratio: '1 sodium ion : 1 chloride ion', note: 'Sodium chloride is ionic. Its solid is a repeating lattice of oppositely charged ions, not separate NaCl molecules.' },
  { id: 'mgo', name: 'Magnesium oxide', formula: 'MgO', elements: ['Magnesium', 'Oxygen'], ratio: '1 magnesium ion : 1 oxide ion', note: 'Magnesium and oxygen form oppositely charged ions in a repeating ionic lattice.' }
];
export const COMPOUND_STEPS: MotionStep[] = COMPOUNDS.map(c => ({ id: c.id, label: `${c.name} · ${c.formula}`, caption: `Elements present: ${c.elements.join(' and ')}. Particle ratio: ${c.ratio}. ${c.note}` }));

const Lattice: React.FC<{ pos: string; neg: string; posLabel: string; negLabel: string; anim: boolean }> = ({ pos, neg, posLabel, negLabel, anim }) => (
  <g>
    {[0, 1, 2].map(row => [0, 1, 2, 3].map(col => {
      const isPos = (row + col) % 2 === 0;
      return (
        <g key={`${row}${col}`} transform={`translate(${190 + col * 80} ${100 + row * 68})`}>
          <circle r={isPos ? 22 : 28} fill={isPos ? pos : neg} stroke="#2b2f2a" strokeWidth="2.5" />
          <text y="5" textAnchor="middle" className="sm-name" style={{ ...NS, fill: '#fff' }}>{isPos ? posLabel : negLabel}</text>
          {anim && <Jiggle dur={1.4 + ((row + col) % 3) * 0.3} amp={2} />}
        </g>
      );
    }))}
    <text x="320" y="302" textAnchor="middle" className="sm-note sm-note--dark">A repeating lattice of positive and negative ions (simplified model)</text>
  </g>
);

const CompoundArt: React.FC<{ id: string; playing: boolean; reducedMotion: boolean }> = ({ id, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, id);
  const anim = !reducedMotion;
  const c = COMPOUNDS.find(x => x.id === id) ?? COMPOUNDS[0];
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 320" role="img" aria-label={`${c.name}, ${c.formula}: ${c.ratio}`}>
      <rect width="640" height="320" fill="#eef3f8" />
      <text x="320" y="34" textAnchor="middle" className="sm-title">{c.name} · {c.formula} · {c.ratio}</text>
      <g key={id}>
        {id === 'water' && (
          <g>
            <g>
              <path d="M320 150 L210 230 M320 150 L430 230" stroke="#2b2f2a" strokeWidth="6" />
              <Atom x={320} y={150} r={46} fill="#e0574c" label="O" dark />
              <Atom x={210} y={230} r={28} fill="#f4f0e4" label="H" />
              <Atom x={430} y={230} r={28} fill="#f4f0e4" label="H" />
              {anim && <animateTransform attributeName="transform" type="rotate" values="-4 320 150;4 320 150;-4 320 150" dur="2.4s" repeatCount="indefinite" />}
            </g>
            <text x="320" y="300" textAnchor="middle" className="sm-note sm-note--dark">H — O — H</text>
          </g>
        )}
        {id === 'co2' && (
          <g>
            <g>
              <path d="M170 170 H470" stroke="#2b2f2a" strokeWidth="6" /><path d="M200 180 H440" stroke="#2b2f2a" strokeWidth="0" />
              <Atom x={170} y={170} r={42} fill="#e0574c" label="O" dark />
              <Atom x={320} y={170} r={36} fill="#4a4a46" label="C" dark />
              <Atom x={470} y={170} r={42} fill="#e0574c" label="O" dark />
              {anim && <animateTransform attributeName="transform" type="translate" values="0 0;6 0;0 0;-6 0;0 0" dur="1.6s" repeatCount="indefinite" />}
            </g>
            <text x="320" y="270" textAnchor="middle" className="sm-note sm-note--dark">O = C = O  (two oxygen atoms per carbon atom)</text>
          </g>
        )}
        {id === 'nacl' && <Lattice pos="#7a5aa0" neg="#3f9a5a" posLabel="Na⁺" negLabel="Cl⁻" anim={anim} />}
        {id === 'mgo' && <Lattice pos="#c0773a" neg="#d0463c" posLabel="Mg²⁺" negLabel="O²⁻" anim={anim} />}
      </g>
    </svg>
  );
};

export const CompoundScene: React.FC = () => (
  <MotionScene
    title="The Binary Compound Chemist"
    description="Read a chemical formula, identify its elements and compare the particle ratios in familiar compounds."
    steps={COMPOUND_STEPS}
    stepMs={5500}
    footer={
      <>
        <p>A binary compound contains two different elements chemically combined in a fixed ratio. Models are simplified representations of particles.</p>
        <MoreDetails summary="How to read a formula">
          <p>Element symbols begin with a capital letter. A second letter, if present, is lowercase: Na means sodium and Cl means chlorine.</p>
          <p>A small number after a symbol tells how many atoms of that element are represented. If there is no small number, the count is one.</p>
          <p>For ionic compounds, the formula shows the simplest whole-number ratio of ions in the lattice.</p>
          <p>Many binary compounds, such as sodium chloride and magnesium oxide, form a repeating ionic lattice: a regular arrangement of positive and negative ions.</p>
        </MoreDetails>
      </>
    }
  >
    {({ step, playing, reducedMotion }) => <CompoundArt id={step.id} playing={playing} reducedMotion={reducedMotion} />}
  </MotionScene>
);

/* ---------- pH scale ---------- */
type Sample = { id: string; name: string; ph: string; value: number; type: string; colour: string; litmus: string; reason: string };
export const SAMPLES: Sample[] = [
  { id: 'lemon', name: 'Lemon juice', ph: 'About 2', value: 2, type: 'Acidic', colour: '#e85b45', litmus: 'Blue litmus turns red.', reason: 'Citric acid makes lemon juice acidic.' },
  { id: 'vinegar', name: 'Vinegar', ph: 'About 3', value: 3, type: 'Acidic', colour: '#ed8b36', litmus: 'Blue litmus turns red.', reason: 'Vinegar is a water solution containing ethanoic acid.' },
  { id: 'water', name: 'Pure water', ph: 'About 7', value: 7, type: 'Neutral', colour: '#55a9dc', litmus: 'Neither red nor blue litmus changes colour.', reason: 'Pure water is neutral at about room temperature.' },
  { id: 'baking', name: 'Baking soda solution', ph: 'About 8–9', value: 8.5, type: 'Alkaline', colour: '#65a96c', litmus: 'Red litmus turns blue.', reason: 'A solution of sodium hydrogencarbonate is mildly alkaline.' },
  { id: 'soap', name: 'Soapy water', ph: 'About 9–10', value: 9.5, type: 'Alkaline', colour: '#8069bd', litmus: 'Red litmus turns blue.', reason: 'Many soap solutions are alkaline; the exact pH depends on the product and dilution.' }
];
export const PH_STEPS: MotionStep[] = SAMPLES.map(s => ({ id: s.id, label: s.name, caption: `pH ${s.ph} · ${s.type}. Indicator prediction: ${s.litmus} ${s.reason}` }));

const PhArt: React.FC<{ id: string; playing: boolean; reducedMotion: boolean }> = ({ id, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, id);
  const anim = !reducedMotion;
  const s = SAMPLES.find(x => x.id === id) ?? SAMPLES[0];
  const acid = s.type === 'Acidic';
  const alk = s.type === 'Alkaline';
  const paperEnd = acid ? '#d8453a' : alk ? '#3a6fd0' : (alk ? '#3a6fd0' : '#3a6fd0');
  const paperStart = acid ? '#3a6fd0' : '#d8453a';
  const markerX = 40 + (s.value / 14) * 560;
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 360" role="img" aria-label={`${s.name}: pH ${s.ph}, ${s.type}. ${s.litmus}`}>
      <rect width="640" height="360" fill="#eef3f8" />
      {/* pH scale */}
      {Array.from({ length: 15 }, (_, v) => (
        <g key={v}><rect x={40 + v * 37.33} y="30" width="37" height="30" fill={v < 7 ? '#e97855' : v === 7 ? '#62a9d5' : '#6cab78'} /><text x={58.5 + v * 37.33} y="50" textAnchor="middle" className="sm-note sm-note--dark">{v}</text></g>
      ))}
      <text x="60" y="78" className="sm-note sm-note--dark">Acidic</text><text x="320" y="78" textAnchor="middle" className="sm-note sm-note--dark">Neutral</text><text x="600" y="78" textAnchor="end" className="sm-note sm-note--dark">Alkaline</text>
      <g transform={`translate(${markerX} 96)`}><path d="M0 0 L-9 -16 H9 Z" fill="#2b2f2a" />{anim && <animateTransform attributeName="transform" type="translate" additive="replace" values={`${markerX} 96;${markerX} 104;${markerX} 96`} dur="1.4s" repeatCount="indefinite" />}</g>
      {/* beaker */}
      <path d="M220 150 V320 H420 V150" fill="none" stroke="#5c5a50" strokeWidth="4" />
      <rect x="222" y="200" width="196" height="118" fill={s.colour} opacity=".85" />
      <path d="M222 200 q24 -8 48 0 t48 0 t48 0 t48 0" fill="none" stroke="#fff" strokeWidth="3" opacity=".7">{anim && <animate attributeName="d" values="M222 200 q24 -8 48 0 t48 0 t48 0 t48 0;M222 200 q24 8 48 0 t48 0 t48 0 t48 0;M222 200 q24 -8 48 0 t48 0 t48 0 t48 0" dur="2.4s" repeatCount="indefinite" />}</path>
      <text x="320" y="345" textAnchor="middle" className="sm-title">{s.name}</text>
      {/* litmus paper */}
      <g key={id}>
        <g>
          <rect x="306" y="136" width="28" height="112" rx="3" fill={s.type === 'Neutral' ? '#3a6fd0' : paperStart} stroke="#2b2f2a" strokeWidth="2">
            {anim && s.type !== 'Neutral' && <animate attributeName="fill" values={`${paperStart};${paperStart};${paperEnd};${paperEnd}`} keyTimes="0;.45;.6;1" dur="5s" repeatCount="indefinite" />}
          </rect>
          {anim && <animateTransform attributeName="transform" type="translate" values="0 -14;0 44;0 44;0 -14" keyTimes="0;.35;.85;1" dur="5s" repeatCount="indefinite" />}
        </g>
      </g>
      <text x="440" y="196" className="sm-note sm-note--dark">{s.type === 'Neutral' ? 'No colour change' : acid ? 'Blue litmus turns red' : 'Red litmus turns blue'}</text>
      <text x="440" y="218" className="sm-note sm-note--dark">{s.type === 'Neutral' ? '(shown: blue paper)' : acid ? '(acid)' : '(alkali)'}</text>
    </svg>
  );
};

export const PhScene: React.FC = () => (
  <MotionScene
    title="The pH Scale Guardian"
    description="Investigate familiar aqueous solutions, read the pH scale and predict what litmus paper will show."
    steps={PH_STEPS}
    stepMs={5500}
    footer={
      <>
        <p>These are approximate teaching examples, not laboratory measurements. Never taste, mix or directly test household products.</p>
        <MoreDetails summary="Explore the pH scale">
          <p><b>0–6:</b> acidic · <b>7:</b> neutral · <b>8–14:</b> alkaline.</p>
          <p>A lower pH means a more acidic solution; a higher pH means a more alkaline solution. pH does not, by itself, tell you how concentrated an acid or alkali is.</p>
          <p>Blue litmus turns red in acid. Red litmus turns blue in alkali. Universal indicator shows a range of colours across the pH scale.</p>
        </MoreDetails>
        <MoreDetails summary="How can a salt form?">
          <p><b>Neutralisation:</b> acid + base → salt + water.</p>
          <p>Example: hydrochloric acid + sodium hydroxide → sodium chloride + water. In symbols: HCl + NaOH → NaCl + H₂O.</p>
          <p>The equation is a classroom model of a reaction. Do not try this reaction or handle acids and alkalis without a trained teacher, approved equipment and appropriate protective procedures.</p>
        </MoreDetails>
      </>
    }
  >
    {({ step, playing, reducedMotion }) => <PhArt id={step.id} playing={playing} reducedMotion={reducedMotion} />}
  </MotionScene>
);

/* ---------- Chemical bonding ---------- */
type Bond = { id: string; name: string; example: string; summary: string; detail: string; electronAction: string; structure: string };
export const BONDS: Bond[] = [
  { id: 'ionic', name: 'Ionic bonding', example: 'Sodium chloride (NaCl)', summary: 'Electrons are transferred from a metal atom to a non-metal atom. The resulting positive and negative ions attract.', detail: 'Sodium transfers one outer electron to chlorine. This forms Na⁺ and Cl⁻ ions, which attract and arrange in a giant ionic lattice.', electronAction: 'Transferred', structure: 'A repeating lattice of positive and negative ions' },
  { id: 'covalent', name: 'Covalent bonding', example: 'Water (H₂O)', summary: 'Non-metal atoms share pairs of electrons. The shared electrons attract the nuclei of the bonded atoms.', detail: 'In a water molecule, oxygen shares an electron pair with each of two hydrogen atoms. The simplified model shows two O–H covalent bonds.', electronAction: 'Shared in pairs', structure: 'Small molecules in water; other covalent substances can form giant networks' },
  { id: 'metallic', name: 'Metallic bonding', example: 'Copper (Cu)', summary: 'Positive metal ions are attracted to delocalised electrons that can move throughout the metallic structure.', detail: 'The mobile delocalised electrons help metals conduct electricity and heat. Layers of metal ions can also shift while metallic attraction remains.', electronAction: 'Delocalised and mobile', structure: 'Positive metal ions surrounded by delocalised electrons' }
];
export const BOND_STEPS: MotionStep[] = BONDS.map(b => ({ id: b.id, label: `${b.name} · ${b.example}`, caption: `${b.summary} What happens to the electrons? ${b.electronAction}. ${b.detail} Structure: ${b.structure}.` }));

const Electron: React.FC<{ path: string; dur: number; begin?: number; r?: number }> = ({ path, dur, begin = 0, r = 6 }) => (
  <circle r={r} fill="#2468a8" stroke="#fff" strokeWidth="1.5"><animateMotion dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" path={path} /></circle>
);
const fade = (from: number, to: number, dur: number, on = true) => (
  <animate attributeName="opacity" values={on ? '0;0;1;1' : '1;1;0;0'} keyTimes={`0;${from};${to};1`} dur={`${dur}s`} repeatCount="indefinite" />
);

const BondArt: React.FC<{ id: string; playing: boolean; reducedMotion: boolean }> = ({ id, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, id);
  const anim = !reducedMotion;
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 320" role="img" aria-label={`Chemical bonding: ${BONDS.find(b => b.id === id)?.name}`}>
      <rect width="640" height="320" fill="#eef3f8" />
      <g key={id}>
        {id === 'ionic' && (
          <g>
            <Atom x={170} y={160} r={52} fill="#7a5aa0" label="Na" dark />
            <Atom x={470} y={160} r={62} fill="#3f9a5a" label="Cl" dark />
            <g opacity="0">{fade(0.55, 0.65, 6)}<text x="170" y="250" textAnchor="middle" className="sm-title">Na⁺ (lost an electron)</text><text x="470" y="262" textAnchor="middle" className="sm-title">Cl⁻ (gained an electron)</text></g>
            <g opacity="1">{fade(0.5, 0.6, 6, false)}<text x="320" y="60" textAnchor="middle" className="sm-title">An outer electron is transferred from sodium to chlorine</text></g>
            <g opacity="0">{fade(0.55, 0.65, 6)}<text x="320" y="60" textAnchor="middle" className="sm-title">Opposite charges attract: an ionic bond</text><path d="M240 160 H400" stroke="#c0463c" strokeWidth="4" strokeDasharray="6 6" /></g>
            {anim && <circle r="8" fill="#2468a8" stroke="#fff" strokeWidth="2"><animateMotion dur="6s" repeatCount="indefinite" keyPoints="0;0;1;1" keyTimes="0;.15;.5;1" calcMode="linear" path="M215 160 H415" /></circle>}
            {!anim && <circle cx="300" cy="160" r="8" fill="#2468a8" />}
          </g>
        )}
        {id === 'covalent' && (
          <g>
            <path d="M320 150 L210 230 M320 150 L430 230" stroke="#c9c2b0" strokeWidth="18" strokeLinecap="round" />
            <Atom x={320} y={150} r={46} fill="#e0574c" label="O" dark />
            <Atom x={210} y={230} r={28} fill="#f4f0e4" label="H" />
            <Atom x={430} y={230} r={28} fill="#f4f0e4" label="H" />
            {anim && [0, 1].map(k => <React.Fragment key={k}>
              <Electron path="M265 190 q-8 8 0 16 t0 -16" dur={0.9} begin={-k * 0.45} />
              <Electron path="M375 190 q8 8 0 16 t0 -16" dur={0.9} begin={-k * 0.45} />
            </React.Fragment>)}
            {!anim && <g fill="#2468a8"><circle cx="265" cy="190" r="6" /><circle cx="375" cy="190" r="6" /></g>}
            <text x="320" y="60" textAnchor="middle" className="sm-title">Atoms share pairs of electrons: covalent bonds</text>
            <text x="320" y="296" textAnchor="middle" className="sm-note sm-note--dark">Two O–H bonds in a water molecule (H — O — H)</text>
          </g>
        )}
        {id === 'metallic' && (
          <g>
            {[0, 1, 2].map(r => [0, 1, 2, 3, 4].map(c => <Atom key={`${r}${c}`} x={140 + c * 90} y={110 + r * 70} r={24} fill="#c0773a" label="Cu⁺" dark />))}
            {anim && [0, 1, 2, 3, 4, 5].map(i => <Electron key={i} path={`M${100 + (i % 2) * 40} ${145 + (i % 3) * 70} C200 ${110 + i * 12} 300 ${190 - i * 8} 400 ${145 + (i % 2) * 70} S560 ${130 + i * 6} 540 ${145 + (i % 3) * 35}`} dur={5 + i * 0.7} begin={-i} r={5} />)}
            {!anim && <g fill="#2468a8">{[0, 1, 2, 3].map(i => <circle key={i} cx={180 + i * 90} cy={145} r="5" />)}</g>}
            <text x="320" y="46" textAnchor="middle" className="sm-title">Positive metal ions in a sea of delocalised electrons</text>
            <text x="320" y="304" textAnchor="middle" className="sm-note sm-note--dark">Mobile electrons let metals conduct electricity and heat</text>
          </g>
        )}
      </g>
    </svg>
  );
};

export const BondingScene: React.FC = () => (
  <MotionScene
    title="The Chemical Bonding Architect"
    description="Compare how atoms and ions are held together in ionic, covalent and metallic bonding."
    steps={BOND_STEPS}
    stepMs={7000}
    footer={
      <>
        <p>These diagrams are simplified models. They show the key idea for each bond type, not exact particle sizes, distances or three-dimensional structures.</p>
        <MoreDetails summary="Compare the three types">
          <p><b>Ionic:</b> electron transfer creates oppositely charged ions; electrostatic attraction holds the lattice together.</p>
          <p><b>Covalent:</b> non-metal atoms share pairs of electrons.</p>
          <p><b>Metallic:</b> positive metal ions are attracted to mobile, delocalised electrons.</p>
          <p>Remember: ionic bonding is not the same as covalent sharing, and metallic bonding is not simply electron transfer.</p>
        </MoreDetails>
      </>
    }
  >
    {({ step, playing, reducedMotion }) => <BondArt id={step.id} playing={playing} reducedMotion={reducedMotion} />}
  </MotionScene>
);
