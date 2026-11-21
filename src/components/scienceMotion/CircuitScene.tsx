import React, { useRef, useState } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { ChoiceRow } from './ChoiceRow';
import { MoreDetails } from './MoreDetails';
import { useSmilPause } from './useSmilPause';

export const CIRCUIT_STEPS: MotionStep[] = [
  { id: 'series', label: 'Series circuit', caption: 'Components share one path. The same current passes through each component, and the supply voltage is shared between them. If one lamp is removed or fails, the path opens and all lamps go out.' },
  { id: 'parallel', label: 'Parallel circuit', caption: 'Each branch is connected across the supply, so each branch has the supply voltage. If one branch opens, another branch can still work. The total current from the supply is the sum of the currents in the branches.' },
  { id: 'ohm', label: "Ohm's law", caption: "For an ohmic conductor at constant temperature: voltage (V) = current (I) × resistance (R). For the same voltage, increasing resistance reduces current." },
  { id: 'parts', label: 'Electronic components', caption: 'A resistor limits current, a diode allows current mainly in one direction, an LED is a diode that produces light, and a capacitor stores separated electric charge.' }
];

type Part = 'resistor' | 'diode' | 'led' | 'capacitor';
const PARTS: Record<Part, { title: string; role: string; note: string }> = {
  resistor: { title: 'Resistor', role: 'Limits current in a circuit.', note: 'Resistance is measured in ohms (Ω). A resistor can protect a component by limiting current.' },
  diode: { title: 'Diode', role: 'Allows current mainly in one direction.', note: 'A diode is forward-biased when connected in its conducting direction. Reverse connection greatly reduces current in a simple model.' },
  led: { title: 'Light-emitting diode (LED)', role: 'Produces light when current flows in the correct direction.', note: 'An LED is a diode. It needs the correct polarity and a suitable current-limiting resistor.' },
  capacitor: { title: 'Capacitor', role: 'Stores separated electric charge.', note: 'A capacitor charges when connected to a supply and can discharge through a suitable circuit.' }
};

const Charge: React.FC<{ path: string; dur: number; begin: number; hide?: string }> = ({ path, dur, begin, hide }) => (
  <circle r="6" className="sm-energy" opacity={hide ? undefined : 1}>
    <animateMotion dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" path={path} />
    {hide && <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.49;.5;1" dur="8s" repeatCount="indefinite" />}
  </circle>
);
const Lamp: React.FC<{ x: number; y: number; lit: boolean; label: string; off?: boolean; vertical?: boolean }> = ({ x, y, lit, label, off, vertical }) => (
  <g transform={`translate(${x} ${y})`}>
    <circle r="26" fill="#fff6c8" opacity={lit ? 0.9 : 0.25} stroke="none">
      {lit && off === true && <animate attributeName="opacity" values=".9;.9;.1;.1" keyTimes="0;.49;.5;1" dur="8s" repeatCount="indefinite" />}
    </circle>
    <circle r="17" fill="#fff" stroke="#2b2f2a" strokeWidth="3" />
    <path d="M-11 -11 L11 11 M11 -11 L-11 11" stroke="#2b2f2a" strokeWidth="3" />
    <text x={vertical ? 34 : 0} y={vertical ? 5 : 40} textAnchor={vertical ? 'start' : 'middle'} className="sm-note sm-note--dark">{label}</text>
  </g>
);
const Cell: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x} ${y})`}><rect x="-18" y="-22" width="36" height="44" fill="#f3efe6" stroke="none" /><path d="M-14 -16 H14" stroke="#2b2f2a" strokeWidth="3" /><path d="M-7 -4 H7" stroke="#2b2f2a" strokeWidth="6" /><path d="M-14 8 H14" stroke="#2b2f2a" strokeWidth="3" /><path d="M-7 18 H7" stroke="#2b2f2a" strokeWidth="6" />
    <text x="-26" y="4" textAnchor="end" className="sm-note sm-note--dark">Cell</text></g>
);

const SERIES = 'M60 70 H580 V290 H60 Z';
const Series: React.FC<{ anim: boolean }> = ({ anim }) => (
  <g>
    <path d={SERIES} fill="none" stroke="#2b2f2a" strokeWidth="4" />
    <Cell x={60} y={180} />
    <Lamp x={230} y={70} lit label="Lamp 1" off />
    <Lamp x={410} y={70} lit label="Lamp 2" off />
    {anim && Array.from({ length: 8 }, (_, i) => <Charge key={i} path={SERIES} dur={4} begin={-i * 0.5} hide="series" />)}
    <g opacity="0">
      {anim && <animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.49;.5;1" dur="8s" repeatCount="indefinite" />}
      <rect x="150" y="150" width="340" height="60" rx="12" fill="#fff" stroke="#c0463c" strokeWidth="3" />
      <text x="320" y="176" textAnchor="middle" className="sm-force" fill="#c0463c">Lamp 2 fails: the path opens</text>
      <text x="320" y="198" textAnchor="middle" className="sm-force" fill="#c0463c">and every lamp goes out</text>
    </g>
  </g>
);

const LOOP1 = 'M60 70 H250 V290 H60 Z';
const LOOP2 = 'M60 70 H450 V290 H60 Z';
const Parallel: React.FC<{ anim: boolean }> = ({ anim }) => (
  <g>
    <path d="M60 70 H450 M60 290 H450 M60 70 V290 M250 70 V290 M450 70 V290" fill="none" stroke="#2b2f2a" strokeWidth="4" />
    <Cell x={60} y={180} />
    <Lamp x={250} y={180} lit label="Branch 1" off vertical />
    <Lamp x={450} y={180} lit label="Branch 2" vertical />
    {anim && Array.from({ length: 5 }, (_, i) => <Charge key={`a${i}`} path={LOOP1} dur={3.2} begin={-i * 0.64} hide="p" />)}
    {anim && Array.from({ length: 8 }, (_, i) => <Charge key={`b${i}`} path={LOOP2} dur={5} begin={-i * 0.62} />)}
    <g opacity="0">
      {anim && <animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.49;.5;1" dur="8s" repeatCount="indefinite" />}
      <rect x="116" y="120" width="116" height="120" rx="10" fill="#fff" stroke="#c0463c" strokeWidth="3" opacity=".9" />
      <text x="174" y="164" textAnchor="middle" className="sm-force" fill="#c0463c">Branch 1</text><text x="174" y="184" textAnchor="middle" className="sm-force" fill="#c0463c">opens</text>
    </g>
    <text x="490" y="236" className="sm-force" fill="#2f6a31">Branch 2 still works</text>
  </g>
);

const Ohm: React.FC<{ anim: boolean; volts: number; ohms: number }> = ({ anim, volts, ohms }) => {
  const current = volts / ohms;
  const dur = Math.max(1.2, 9 / current);
  const count = Math.max(3, Math.min(10, Math.round(current * 2)));
  return (
    <g>
      <path d={SERIES} fill="none" stroke="#2b2f2a" strokeWidth="4" />
      <Cell x={60} y={180} />
      <text x="34" y="214" textAnchor="end" className="sm-force" fill="#1f7a4f">{volts} V</text>
      <rect x="260" y="50" width="120" height="40" rx="6" fill="#d9b66a" stroke="#2b2f2a" strokeWidth="3" />
      <text x="320" y="76" textAnchor="middle" className="sm-force" fill="#2b2f2a" style={{ stroke: 'none' }}>{ohms} Ω</text>
      <text x="320" y="40" textAnchor="middle" className="sm-note sm-note--dark">Resistor</text>
      {anim && Array.from({ length: count }, (_, i) => <Charge key={`${volts}-${ohms}-${i}`} path={SERIES} dur={dur} begin={-i * (dur / count)} />)}
      <rect x="150" y="150" width="340" height="60" rx="12" fill="#fff" stroke="#1f7a4f" strokeWidth="3" />
      <text x="320" y="176" textAnchor="middle" className="sm-force" fill="#1f7a4f">I = V ÷ R = {volts} ÷ {ohms}</text>
      <text x="320" y="198" textAnchor="middle" className="sm-force" fill="#1f7a4f">= {current.toFixed(2)} A</text>
    </g>
  );
};

const PartsArt: React.FC<{ anim: boolean; part: Part; forward: boolean }> = ({ anim, part, forward }) => {
  const blocked = (part === 'diode' || part === 'led') && !forward;
  const flowPath = forward ? SERIES : 'M60 70 V290 H580 V70 Z';
  const lit = part === 'led' && forward;
  return (
    <g key={`${part}-${forward}`}>
      <path d={SERIES} fill="none" stroke="#2b2f2a" strokeWidth="4" />
      <Cell x={60} y={180} />
      <g transform="translate(320 70)">
        <rect x="-40" y="-26" width="80" height="52" fill="#f3efe6" stroke="none" />
        {part === 'resistor' && <rect x="-34" y="-14" width="68" height="28" rx="4" fill="#d9b66a" stroke="#2b2f2a" strokeWidth="3" />}
        {(part === 'diode' || part === 'led') && <g transform={forward ? undefined : 'scale(-1 1)'}><path d="M-18 -18 V18 L16 0 Z" fill="#fff" stroke="#2b2f2a" strokeWidth="3" /><path d="M18 -18 V18" stroke="#2b2f2a" strokeWidth="4" /></g>}
        {part === 'led' && <circle r="34" fill="#ffe36a" opacity={lit ? 0.75 : 0} />}
        {part === 'capacitor' && <g><path d="M-8 -22 V22 M8 -22 V22" stroke="#2b2f2a" strokeWidth="5" /><text x="-20" y="-6" className="sm-force" fill="#c0463c">+</text><text x="14" y="-6" className="sm-force" fill="#2468a8">−</text>
          {anim && <rect x="-8" y="-22" width="16" height="44" fill="#3f9fc3" opacity="0"><animate attributeName="opacity" values="0;.7;.7;0" keyTimes="0;.5;.9;1" dur="5s" repeatCount="indefinite" /></rect>}</g>}
        <text y="48" textAnchor="middle" className="sm-note sm-note--dark">{PARTS[part].title}</text>
      </g>
      {anim && !blocked && Array.from({ length: part === 'resistor' ? 5 : 8 }, (_, i) => <Charge key={i} path={flowPath} dur={part === 'resistor' ? 7 : 4} begin={-i * (part === 'resistor' ? 1.4 : 0.5)} />)}
      {blocked && (
        <g stroke="#c0463c" strokeWidth="6" strokeLinecap="round"><path d="M300 130 L340 170 M340 130 L300 170" /></g>
      )}
      <text x="320" y="240" textAnchor="middle" className="sm-force" fill="#2b2f2a">{blocked ? 'Reverse direction: current is blocked' : part === 'capacitor' ? 'Charge builds up on the plates, then flow stops' : part === 'led' ? 'Forward direction: the LED lights' : part === 'diode' ? 'Forward direction: current can flow' : 'Current is limited'}</text>
    </g>
  );
};

const CircuitArt: React.FC<{ stepId: string; playing: boolean; reducedMotion: boolean; volts: number; ohms: number; part: Part; forward: boolean }> = ({ stepId, playing, reducedMotion, volts, ohms, part, forward }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, stepId, volts, ohms, part, forward);
  const anim = !reducedMotion;
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 320" role="img" aria-label={`Circuits: ${CIRCUIT_STEPS.find(s => s.id === stepId)?.label}`}>
      <rect width="640" height="320" fill="#f3efe6" />
      <g key={stepId}>
        {stepId === 'series' && <Series anim={anim} />}
        {stepId === 'parallel' && <Parallel anim={anim} />}
        {stepId === 'ohm' && <Ohm anim={anim} volts={volts} ohms={ohms} />}
        {stepId === 'parts' && <PartsArt anim={anim} part={part} forward={forward} />}
      </g>
    </svg>
  );
};

export const CircuitScene: React.FC = () => {
  const [volts, setVolts] = useState(12);
  const [ohms, setOhms] = useState(4);
  const [part, setPart] = useState<Part>('resistor');
  const [forward, setForward] = useState(true);
  const selected = PARTS[part];
  const current = volts / ohms;
  return (
    <MotionScene
      title="The Circuit Systems Engineer"
      description="Compare series and parallel circuits, calculate current with Ohm’s law and explore common electronic components."
      steps={CIRCUIT_STEPS}
      stepMs={8000}
      extraControls={
        <>
          <div className="gh-jhs1-science-interaction">
            <strong>Ohm’s law (used in step 3)</strong>
            <ChoiceRow label="Voltage" options={[6, 9, 12].map(v => ({ id: String(v), label: `${v} V` }))} value={String(volts)} onChange={v => setVolts(Number(v))} />
            <ChoiceRow label="Resistance" options={[2, 4, 6].map(r => ({ id: String(r), label: `${r} Ω` }))} value={String(ohms)} onChange={r => setOhms(Number(r))} />
            <div className="gh-jhs1-science-readout" aria-live="polite">
              <strong>Current: {current.toFixed(2)} A</strong>
              <p>I = V ÷ R = {volts} V ÷ {ohms} Ω = {current.toFixed(2)} A.</p>
            </div>
          </div>
          <div className="gh-jhs1-science-interaction">
            <strong>Identify an electronic component (used in step 4)</strong>
            <ChoiceRow label="Component" options={(Object.keys(PARTS) as Part[]).map(p => ({ id: p, label: p === 'led' ? 'LED' : PARTS[p].title.split(' ')[0] }))} value={part} onChange={p => setPart(p as Part)} />
            {(part === 'diode' || part === 'led') && <ChoiceRow label="Direction" options={[{ id: 'f', label: 'Forward direction' }, { id: 'r', label: 'Reverse direction' }]} value={forward ? 'f' : 'r'} onChange={d => setForward(d === 'f')} />}
            <div className="gh-jhs1-science-readout" aria-live="polite">
              <strong>{selected.title}</strong>
              <p>{selected.role}</p>
              <p>{selected.note}</p>
            </div>
          </div>
        </>
      }
      footer={
        <>
          <p>Use only low-voltage cells or approved classroom circuit kits. Never connect a learning circuit to mains electricity. Check component ratings and ask a teacher to inspect the circuit before switching it on.</p>
          <MoreDetails summary="Check the key ideas">
            <p><b>Series:</b> one path; the same current flows through every component.</p>
            <p><b>Parallel:</b> separate branches; each branch has the supply voltage across it.</p>
            <p><b>Resistor:</b> limits current. <b>Diode:</b> conducts mainly in one direction.</p>
            <p><b>Light-emitting diode (LED):</b> emits light when correctly connected. <b>Capacitor:</b> stores and releases electric charge.</p>
            <p><b>Forward direction:</b> a diode can conduct when correctly connected. <b>Reverse direction:</b> it normally blocks current in this basic circuit model.</p>
          </MoreDetails>
        </>
      }
    >
      {({ step, playing, reducedMotion }) => <CircuitArt stepId={step.id} playing={playing} reducedMotion={reducedMotion} volts={volts} ohms={ohms} part={part} forward={forward} />}
    </MotionScene>
  );
};
