import React, { useRef, useState } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { ChoiceRow } from './ChoiceRow';
import { MoreDetails } from './MoreDetails';
import { useSmilPause } from './useSmilPause';

export type Device = { id: string; title: string; input: string; useful: string; other: string; steps: string[] };
export const CHAIN_DEVICES: Device[] = [
  { id: 'battery', title: 'Battery', input: 'Chemical energy', useful: 'Electrical energy', other: 'Some energy is transferred as thermal energy because of internal resistance.', steps: ['Chemical', 'Electrical'] },
  { id: 'lamp', title: 'Electric lamp', input: 'Electrical energy', useful: 'Light energy', other: 'Thermal energy also spreads into the surroundings.', steps: ['Electrical', 'Light + thermal'] },
  { id: 'fan', title: 'Electric fan', input: 'Electrical energy', useful: 'Kinetic energy in the moving blades and air', other: 'Sound and thermal energy are also transferred to the surroundings.', steps: ['Electrical', 'Kinetic + sound + thermal'] },
  { id: 'solar', title: 'Solar panel', input: 'Light energy', useful: 'Electrical energy', other: 'Some incoming light is reflected or not converted by the panel.', steps: ['Light', 'Electrical'] },
  { id: 'hydro', title: 'Hydroelectric station', input: 'Gravitational potential energy of stored water', useful: 'Electrical energy', other: 'Some energy is transferred as sound and thermal energy during the process.', steps: ['Gravitational potential', 'Kinetic', 'Mechanical', 'Electrical'] }
];

const wrap = (text: string, max = 13): string[] => {
  const lines: string[] = [];
  let line = '';
  text.split(' ').forEach(word => {
    if (line && (line + ' ' + word).length > max) { lines.push(line); line = word; } else line = line ? `${line} ${word}` : word;
  });
  if (line) lines.push(line);
  return lines;
};

const COLOURS: Record<string, string> = { Thermal: '#e0763a', Friction: '#9a8a78', Chemical: '#58a05a', Electrical: '#d1a62a', Light: '#f2b93b', Kinetic: '#4a90c0', Mechanical: '#7a8794', Gravitational: '#8a6a3a' };
const colourFor = (label: string) => COLOURS[label.split(' ')[0]] ?? '#d1a62a';
const Y = 190;

export const ChainArt: React.FC<{ device: Device; stepIndex: number; playing: boolean; reducedMotion: boolean }> = ({ device, stepIndex, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, device.id, stepIndex);
  const anim = !reducedMotion;
  const n = device.steps.length;
  const width = n === 4 ? 112 : 130;
  const xs = n === 2 ? [150, 490] : n === 3 ? [110, 320, 530] : [80, 227, 413, 560].map((x, i) => [85, 235, 385, 535][i]);
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 340" role="img" aria-label={`${device.title}: ${device.steps.join(' to ')}. ${device.steps[stepIndex]} is selected.`}>
      <rect width="640" height="340" fill="#f3efe6" />
      <text x="320" y="30" textAnchor="middle" className="sm-title">{device.title}: energy changes form, it does not vanish</text>
      {xs.slice(0, -1).map((x, i) => (
        <g key={i}>
          <path d={`M${x + width / 2 + 4} ${Y} H${xs[i + 1] - width / 2 - 4}`} className={`sm-link${stepIndex === i + 1 ? ' is-active' : ''}`} />
          {anim && [0, 1, 2].map(k => <circle key={k} r="7" fill={colourFor(device.steps[i])} stroke="#fff" strokeWidth="2"><animateMotion dur="2.4s" begin={`${-k * 0.8}s`} repeatCount="indefinite" path={`M${x + width / 2 + 4} ${Y} H${xs[i + 1] - width / 2 - 4}`} /></circle>)}
          {anim && [0, 1].map(k => <circle key={`w${k}`} r="5" fill="#ff8a4d" opacity=".9"><animateMotion dur="2.6s" begin={`${-k * 1.3}s`} repeatCount="indefinite" path={`M${(x + xs[i + 1]) / 2} ${Y - 40} V${Y - 112}`} /><animate attributeName="opacity" values=".9;0" dur="2.6s" begin={`${-k * 1.3}s`} repeatCount="indefinite" /></circle>)}
        </g>
      ))}
      {xs.map((x, i) => (
        <g key={i}>
          <rect x={x - width / 2} y={Y - 52} width={width} height="104" rx="16" fill={colourFor(device.steps[i])} opacity={i === stepIndex ? 1 : 0.55} stroke={i === stepIndex ? '#2b2f2a' : 'none'} strokeWidth="4" />
          {wrap(device.steps[i]).map((line, k, all) => <text key={k} x={x} y={Y + 5 + (k - (all.length - 1) / 2) * 16} textAnchor="middle" className="sm-name sm-name--sm">{line}</text>)}
        </g>
      ))}
      <text x={xs[0]} y={Y + 80} textAnchor="middle" className="sm-note sm-note--dark">Input</text>
      <text x={xs[n - 1]} y={Y + 80} textAnchor="middle" className="sm-note sm-note--dark">Output</text>
      <text x="320" y="86" textAnchor="middle" className="sm-force" fill="#c0463c">Orange: thermal (and sound) energy spreads to the surroundings</text>
    </svg>
  );
};

const PAIRS: [number, number][] = [[100, 80], [200, 150], [500, 350]];

export const EnergyChainScene: React.FC = () => {
  const [id, setId] = useState('fan');
  const [pair, setPair] = useState(0);
  const device = CHAIN_DEVICES.find(d => d.id === id) ?? CHAIN_DEVICES[0];
  const steps: MotionStep[] = device.steps.map((label, i) => ({
    id: `${device.id}-${i}`, label,
    caption: i === 0 ? `Input: ${device.input}.` : i === device.steps.length - 1 ? `Useful output: ${device.useful}. Other transfers: ${device.other}` : `Energy passes through this form on the way to electricity. ${device.other}`
  }));
  const [input, useful] = PAIRS[pair];
  const efficiency = (useful / input) * 100;
  return (
    <MotionScene
      key={device.id}
      title="The Energy Transformation Alchemist"
      description="Trace energy changes in everyday devices, distinguish conversion from conservation, and calculate efficiency."
      steps={steps}
      stepMs={4500}
      extraControls={
        <>
          <ChoiceRow label="Device" options={CHAIN_DEVICES.map(d => ({ id: d.id, label: d.title }))} value={id} onChange={setId} />
          <div className="gh-jhs1-science-interaction">
            <strong>Calculate energy efficiency</strong>
            <ChoiceRow label="Energy input and useful output" options={PAIRS.map(([i, u], k) => ({ id: String(k), label: `${i} J in, ${u} J useful` }))} value={String(pair)} onChange={k => setPair(Number(k))} />
            <div className="gh-jhs1-science-readout" aria-live="polite">
              <strong>Efficiency: {efficiency.toFixed(0)}%</strong>
              <p>({useful} J ÷ {input} J) × 100% = {efficiency.toFixed(0)}%.</p>
              <p>Energy transferred in other ways: {input - useful} J. The useful output cannot be greater than the total input.</p>
            </div>
          </div>
        </>
      }
      footer={
        <>
          <p>Energy is conserved: it is transferred between stores and forms, not created or destroyed. Use only safe, teacher-approved classroom equipment for demonstrations.</p>
          <MoreDetails summary="Conversion is not conservation">
            <p><b>Energy conversion</b> is a change from one form to another, such as electrical energy becoming light and thermal energy in a lamp.</p>
            <p><b>Conservation of energy</b> means the total energy in a closed system remains constant. Energy that spreads into the surroundings has not disappeared; it has become less useful for the task.</p>
            <p>For a fan, electrical input becomes useful movement plus sound and thermal transfers. All the energy transfers must be accounted for.</p>
          </MoreDetails>
          <MoreDetails summary="Check the key ideas">
            <p><b>Battery:</b> chemical energy → electrical energy. <b>Lamp:</b> electrical → light + thermal energy. <b>Fan:</b> electrical → kinetic + sound + thermal energy.</p>
            <p><b>Solar panel:</b> light → electrical energy. <b>Hydroelectric station:</b> gravitational potential → kinetic → mechanical → electrical energy.</p>
            <p><b>Efficiency:</b> useful output divided by total input, multiplied by 100%.</p>
          </MoreDetails>
        </>
      }
    >
      {({ stepIndex, playing, reducedMotion }) => <ChainArt device={device} stepIndex={stepIndex} playing={playing} reducedMotion={reducedMotion} />}
    </MotionScene>
  );
};
