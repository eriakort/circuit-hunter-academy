import React, { useRef } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { MoreDetails } from './MoreDetails';
import { useSmilPause } from './useSmilPause';

const Tok: React.FC<{ path: string; dur: number; begin?: number; fill: string; r?: number }> = ({ path, dur, begin = 0, fill, r = 5 }) => (
  <circle r={r} fill={fill} stroke="#fff" strokeWidth="1.5"><animateMotion dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" path={path} /></circle>
);
const Cap: React.FC<{ x: number; y: number; text: string; anchor?: 'start' | 'middle' | 'end' }> = ({ x, y, text, anchor = 'middle' }) => (
  <text x={x} y={y} textAnchor={anchor} className="sm-note sm-note--dark">{text}</text>
);

/* ---------- Plant cells ---------- */
type CellInfo = { id: string; name: string; clue: string; structure: string; function: string };
export const PLANT_CELLS: CellInfo[] = [
  { id: 'epidermal', name: 'Epidermal cells', clue: 'Protective covering', structure: 'Closely packed cells form the plant surface. A waxy cuticle often covers the epidermis.', function: 'Protect the plant and help reduce water loss. Root hair cells absorb water and mineral ions.' },
  { id: 'guard', name: 'Guard cells', clue: 'Stomatal control', structure: 'A pair of curved cells surrounds a pore called a stoma. Their water content changes their shape.', function: 'Open and close the stoma to regulate gas exchange and water vapour loss.' },
  { id: 'xylem', name: 'Xylem vessels', clue: 'Water transport', structure: 'Hollow, tube-like vessels are joined end to end. Thickened walls help support the plant.', function: 'Transport water and dissolved mineral ions from roots through the plant.' },
  { id: 'cambium', name: 'Cambium cells', clue: 'Growth in thickness', structure: 'A thin layer of dividing cells in many dicotyledonous stems and roots.', function: 'Produce new vascular tissues and help stems and roots grow thicker.' }
];
const toSteps = (cells: CellInfo[]): MotionStep[] => cells.map(c => ({ id: c.id, label: `${c.name} · ${c.clue}`, caption: `Structure: ${c.structure} Function: ${c.function}` }));
export const PLANT_STEPS = toSteps(PLANT_CELLS);

const OPEN = 'M240 150 C240 110 330 110 330 150 C330 190 240 190 240 150 Z';
const PlantCellArt: React.FC<{ id: string; playing: boolean; reducedMotion: boolean }> = ({ id, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, id);
  const anim = !reducedMotion;
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 320" role="img" aria-label={`Specialised plant cell: ${PLANT_CELLS.find(c => c.id === id)?.name}`}>
      <rect width="640" height="320" fill="#eef5e6" />
      <g key={id}>
        {id === 'epidermal' && (
          <g>
            <rect x="60" y="120" width="520" height="14" fill="#e8d37a" /><Cap x={320} y={108} text="Waxy cuticle" />
            {Array.from({ length: 6 }, (_, i) => <rect key={i} x={60 + i * 87} y="134" width="85" height="90" rx="6" fill="#bfe0a0" stroke="#4f8a3a" strokeWidth="3" />)}
            {anim && [0, 1, 2, 3].map(i => <circle key={i} r="6" fill="#3f9fc3"><animateMotion dur="3s" begin={`${-i * 0.75}s`} repeatCount="indefinite" path={`M${120 + i * 120} 200 V150 L${130 + i * 120} 126 L${116 + i * 120} 150`} /></circle>)}
            <Cap x={320} y={260} text="Closely packed cells protect the surface; the cuticle helps reduce water loss" />
          </g>
        )}
        {id === 'guard' && (
          <g>
            <ellipse cx="250" cy="140" rx="66" ry="24" fill="#6fae3f" stroke="#2f6a31" strokeWidth="4">{anim && <animate attributeName="cy" values="140;112;112;140;140" keyTimes="0;.25;.55;.8;1" dur="6s" repeatCount="indefinite" />}</ellipse>
            <ellipse cx="250" cy="160" rx="66" ry="24" fill="#6fae3f" stroke="#2f6a31" strokeWidth="4">{anim && <animate attributeName="cy" values="160;188;188;160;160" keyTimes="0;.25;.55;.8;1" dur="6s" repeatCount="indefinite" />}</ellipse>
            <ellipse cx="250" cy="150" rx="40" ry="1" fill="#1d3b24">{anim && <animate attributeName="ry" values="1;14;14;1;1" keyTimes="0;.25;.55;.8;1" dur="6s" repeatCount="indefinite" />}</ellipse>
            <text x="250" y="152" textAnchor="middle" className="sm-note" style={{ fill: '#fff', stroke: 'none', fontSize: 10 }}>stoma</text>
            {anim && [0, 1, 2].map(i => <circle key={i} r="5" fill="#3f9fc3" opacity="0"><animateMotion dur="2s" begin={`${-i * 0.66}s`} repeatCount="indefinite" path="M250 250 V50" /><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.2;.3;.55;.65;1" dur="6s" repeatCount="indefinite" /></circle>)}
            <Cap x={400} y={110} text="Guard cells swell: pore opens" anchor="start" />
            <Cap x={400} y={132} text="Guard cells relax: pore closes" anchor="start" />
            <Cap x={400} y={176} text="Water vapour and gases pass" anchor="start" /><Cap x={400} y={198} text="through the open pore" anchor="start" />
            <Cap x={320} y={290} text="Water content changes the shape of the guard cells and opens or closes the stoma" />
          </g>
        )}
        {id === 'xylem' && (
          <g>
            <path d="M270 40 V280 M370 40 V280" stroke="#8a5a2b" strokeWidth="10" />
            {[70, 120, 170, 220, 260].map(y => <path key={y} d={`M262 ${y} H378`} stroke="#8a5a2b" strokeWidth="5" strokeDasharray="4 8" />)}
            <rect x="275" y="40" width="90" height="240" fill="#cfe6f2" opacity=".6" />
            {anim && [0, 1, 2, 3, 4].map(i => <Tok key={i} path={`M${300 + (i % 3) * 20} 270 V50`} dur={3.6} begin={-i * 0.72} fill="#3f9fc3" />)}
            <Cap x={400} y={80} text="Water and mineral ions move up" anchor="start" /><Cap x={400} y={260} text="from the roots" anchor="start" />
            <Cap x={240} y={160} text="Thick walls" anchor="end" /><Cap x={240} y={182} text="give support" anchor="end" />
          </g>
        )}
        {id === 'cambium' && (
          <g>
            {Array.from({ length: 5 }, (_, i) => <rect key={i} x={70 + i * 100} y="100" width="90" height="46" rx="4" fill="#d9c07a" stroke="#8a7a3a" strokeWidth="3" />)}
            {Array.from({ length: 5 }, (_, i) => (
              <g key={i}>
                <rect x={70 + i * 100} y="160" width="90" height="40" rx="4" fill="#9fd08a" stroke="#4f8a3a" strokeWidth="3">
                  {anim && i === 2 && <animate attributeName="width" values="90;90;44;90" keyTimes="0;.3;.6;1" dur="6s" repeatCount="indefinite" />}
                </rect>
                {i === 2 && <rect x="316" y="160" width="44" height="40" rx="4" fill="#9fd08a" stroke="#4f8a3a" strokeWidth="3" opacity="0">{anim && <animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.5;.6;1" dur="6s" repeatCount="indefinite" />}</rect>}
              </g>
            ))}
            {Array.from({ length: 5 }, (_, i) => <rect key={i} x={70 + i * 100} y="214" width="90" height="46" rx="4" fill="#c9b38a" stroke="#7a6a4a" strokeWidth="3" />)}
            <Cap x={320} y={86} text="New tissue on the outside" /><Cap x={320} y={284} text="New tissue on the inside" />
            <Cap x={320} y={306} text="Cambium cells divide, so the stem or root grows thicker" />
          </g>
        )}
      </g>
    </svg>
  );
};

export const PlantCellScene: React.FC = () => (
  <MotionScene
    title="The Plant Cell Specialist"
    description="Explore how specialised plant cells are adapted to protect, regulate, transport and support growth."
    steps={PLANT_STEPS}
    stepMs={6500}
    footer={
      <>
        <p>These are simplified teaching models. Real plant cells have more structures and vary in shape and arrangement.</p>
        <MoreDetails summary="Follow the plant's transport and control">
          <p><b>Roots → xylem → leaves:</b> water and dissolved mineral ions move upwards through xylem vessels.</p>
          <p><b>Leaf surface:</b> epidermal cells protect the leaf, while guard cells adjust the opening of stomata.</p>
          <p><b>Stem and root growth:</b> cambium divides to make new vascular tissues and contributes to growth in thickness.</p>
          <p><b>Differentiation</b> is the process by which cells develop specialised structures and functions.</p>
        </MoreDetails>
      </>
    }
  >
    {({ step, playing, reducedMotion }) => <PlantCellArt id={step.id} playing={playing} reducedMotion={reducedMotion} />}
  </MotionScene>
);

/* ---------- Human cells ---------- */
export const HUMAN_CELLS: CellInfo[] = [
  { id: 'nerve', name: 'Nerve cell (neurone)', clue: 'Transmit signals', structure: 'A long axon carries electrical impulses over a distance. Branched ends connect with other cells.', function: 'Transmit electrical signals so the brain, spinal cord and nerves can coordinate body activities.' },
  { id: 'red-blood', name: 'Red blood cell', clue: 'Carry oxygen', structure: 'A flexible, biconcave disc contains haemoglobin. A mature human red blood cell has no nucleus.', function: 'Carry oxygen from the lungs to body tissues using haemoglobin.' },
  { id: 'muscle', name: 'Muscle cell', clue: 'Produce movement', structure: 'Elongated cells contain contractile protein fibres that slide past one another.', function: 'Shorten to generate force, helping move body parts and maintain posture.' },
  { id: 'sperm', name: 'Sperm cell', clue: 'Deliver genetic material', structure: 'The head contains genetic material; the midpiece has many mitochondria; a tail (flagellum) helps the cell swim.', function: 'Deliver male genetic material to an egg during fertilisation.' }
];
export const HUMAN_STEPS = toSteps(HUMAN_CELLS);

const TAIL_A = 'M0 0 q30 -18 60 0 t60 0 t60 0';
const TAIL_B = 'M0 0 q30 18 60 0 t60 0 t60 0';
const HumanCellArt: React.FC<{ id: string; playing: boolean; reducedMotion: boolean }> = ({ id, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, id);
  const anim = !reducedMotion;
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 320" role="img" aria-label={`Specialised human cell: ${HUMAN_CELLS.find(c => c.id === id)?.name}`}>
      <rect width="640" height="320" fill="#f6eee8" />
      <g key={id}>
        {id === 'nerve' && (
          <g>
            <circle cx="110" cy="160" r="38" fill="#e9b6a0" stroke="#a0523a" strokeWidth="3" /><circle cx="110" cy="160" r="14" fill="#a0523a" />
            <path d="M72 140 l-34 -28 M72 160 h-42 M74 180 l-34 28" stroke="#a0523a" strokeWidth="5" strokeLinecap="round" fill="none" />
            <path d="M148 160 H520" stroke="#a0523a" strokeWidth="9" strokeLinecap="round" />
            {[190, 260, 330, 400, 470].map(x => <rect key={x} x={x} y="150" width="46" height="20" rx="9" fill="#f6e0a0" stroke="#b09040" strokeWidth="2" />)}
            <path d="M520 160 l36 -24 M520 160 h44 M520 160 l36 24" stroke="#a0523a" strokeWidth="5" strokeLinecap="round" fill="none" />
            {anim && <circle r="14" fill="#f2b93b" stroke="#fff" strokeWidth="3"><animateMotion dur="2.6s" repeatCount="indefinite" path="M110 160 H540" /></circle>}
            <Cap x={110} y={226} text="Cell body" /><Cap x={330} y={206} text="Axon carries electrical impulses" /><Cap x={540} y={206} text="Branched ends" />
            <Cap x={320} y={290} text="The impulse travels along the long axon to other cells" />
          </g>
        )}
        {id === 'red-blood' && (
          <g>
            <rect x="0" y="100" width="640" height="130" fill="#f3b8b0" /><path d="M0 100 H640 M0 230 H640" stroke="#b5392f" strokeWidth="5" />
            {anim && [0, 1, 2, 3].map(i => (
              <g key={i}>
                <g><ellipse rx="34" ry="30" fill="#c8312a" stroke="#7a1d18" strokeWidth="3" /><ellipse rx="12" ry="9" fill="#9a2018" />
                  <animateMotion dur="7s" begin={`${-i * 1.75}s`} repeatCount="indefinite" path={`M-50 ${130 + (i % 2) * 70} H690`} /></g>
              </g>
            ))}
            {!anim && <g><ellipse cx="200" cy="165" rx="34" ry="30" fill="#c8312a" /><ellipse cx="200" cy="165" rx="12" ry="9" fill="#9a2018" /></g>}
            {anim && [0, 1, 2].map(i => <circle key={i} r="6" fill="#3f9fc3" stroke="#fff" strokeWidth="1.5"><animateMotion dur="7s" begin={`${-i * 2.3 - 0.6}s`} repeatCount="indefinite" path={`M-50 ${150 + i * 25} H690`} /></circle>)}
            <Cap x={320} y={78} text="Biconcave disc: flexible, no nucleus, contains haemoglobin" />
            <Cap x={320} y={270} text="Blue: oxygen carried from the lungs to body tissues" />
          </g>
        )}
        {id === 'muscle' && (
          <g>
            <g transform="translate(320 160)"><g>{anim && <animateTransform attributeName="transform" type="scale" values="1 1;.8 1.1;1 1" dur="2.8s" repeatCount="indefinite" />}<g transform="translate(-320 -160)">
            <rect x="60" y="110" width="520" height="100" rx="40" fill="#e0867a" stroke="#a0392f" strokeWidth="4" />
            {Array.from({ length: 4 }, (_, row) => (
              <g key={row}>{Array.from({ length: 9 }, (_, i) => <rect key={i} x={110 + i * 50} y={122 + row * 22} width="14" height="14" rx="2" fill="#a0392f" opacity=".6" />)}</g>
            ))}
            </g></g></g>
            <path d="M30 160 H60 M580 160 H610" stroke="#a0392f" strokeWidth="5" />
            {anim && <g><path d="M60 250 h40 M60 250 l12 -8 M60 250 l12 8 M580 250 h-40 M580 250 l-12 -8 M580 250 l-12 8" stroke="#2468a8" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0"><animate attributeName="opacity" values="0;1;0" keyTimes="0;.5;1" dur="2.8s" repeatCount="indefinite" /></path></g>}
            <Cap x={320} y={86} text="Contractile protein fibres slide past one another" />
            <Cap x={320} y={290} text="The cell shortens (contracts) and relaxes, producing force" />
          </g>
        )}
        {id === 'sperm' && (
          <g>
            <g>
              <ellipse cx="420" cy="160" rx="34" ry="22" fill="#f4f0e4" stroke="#7a6a5a" strokeWidth="3" /><ellipse cx="428" cy="160" rx="18" ry="12" fill="#b9a2c9" />
              <rect x="334" y="152" width="52" height="16" rx="6" fill="#e9b949" stroke="#a9811b" strokeWidth="2" />
              <g transform="translate(334 160) scale(-1 1)"><path d={TAIL_A} fill="none" stroke="#7a6a5a" strokeWidth="4" strokeLinecap="round">{anim && <animate attributeName="d" values={`${TAIL_A};${TAIL_B};${TAIL_A}`} dur=".8s" repeatCount="indefinite" />}</path></g>
              <Cap x={440} y={118} text="Head: genetic material" /><Cap x={360} y={206} text="Midpiece: many mitochondria" /><Cap x={250} y={146} text="Tail (flagellum)" />
              <path d="M470 160 h40 M510 160 l-10 -7 M510 160 l-10 7" stroke="#2468a8" strokeWidth="4" fill="none" strokeLinecap="round" />
              {anim && <animateTransform attributeName="transform" type="translate" values="-200 0;60 0" dur="6s" repeatCount="indefinite" />}
            </g>
            <Cap x={320} y={290} text="The tail helps the cell swim to deliver genetic material" />
          </g>
        )}
      </g>
    </svg>
  );
};

export const HumanCellScene: React.FC = () => (
  <MotionScene
    title="The Human Cell Function Ranger"
    description="Compare specialised human cells and discover how their structures help them perform different jobs."
    steps={HUMAN_STEPS}
    stepMs={6500}
    footer={
      <>
        <p>Simplified teaching models: real cells have detailed three-dimensional structures. Cell diagrams are not drawn to scale.</p>
        <MoreDetails summary="From cells to body systems">
          <p><b>Cells → tissues → organs → organ systems:</b> specialised cells with related functions work together at increasingly larger levels of organisation.</p>
          <p><b>Nerve cells</b> coordinate activities by transmitting signals; <b>red blood cells</b> transport oxygen; <b>muscle cells</b> produce force and movement.</p>
          <p><b>Sperm cells</b> are reproductive cells. Their head, mitochondria-rich midpiece and tail each contribute to their role in fertilisation.</p>
          <p><b>Differentiation</b> is the process by which cells develop specialised structures and functions.</p>
          <p><b>Specialised structures:</b> a nerve cell has a long axon to carry impulses; a red blood cell contains haemoglobin to carry oxygen; a muscle cell contains contractile protein fibres; and a sperm cell has a mitochondria-rich midpiece and a tail (flagellum) for movement.</p>
        </MoreDetails>
      </>
    }
  >
    {({ step, playing, reducedMotion }) => <HumanCellArt id={step.id} playing={playing} reducedMotion={reducedMotion} />}
  </MotionScene>
);
