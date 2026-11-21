import React, { useRef, useState } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { ChoiceRow } from './ChoiceRow';
import { useSmilPause } from './useSmilPause';

type Atom = { id: string; name: string; symbol: string; z: number; a: number; electrons: number[]; charge: string };

export const ATOMS: Atom[] = [
  { id: 'hydrogen', name: 'Hydrogen', symbol: 'H', z: 1, a: 1, electrons: [1], charge: 'neutral' },
  { id: 'carbon', name: 'Carbon', symbol: 'C', z: 6, a: 12, electrons: [2, 4], charge: 'neutral' },
  { id: 'oxygen', name: 'Oxygen', symbol: 'O', z: 8, a: 16, electrons: [2, 6], charge: 'neutral' },
  { id: 'sodium', name: 'Sodium', symbol: 'Na', z: 11, a: 23, electrons: [2, 8, 1], charge: 'neutral' },
  { id: 'chloride', name: 'Chloride ion', symbol: 'Cl⁻', z: 17, a: 35, electrons: [2, 8, 8], charge: '−1 (gained one electron)' }
];

export const ATOM_STEPS: MotionStep[] = [
  { id: 'protons', label: 'Protons', caption: 'Protons are positively charged and sit in the nucleus. The number of protons is the atomic number.' },
  { id: 'neutrons', label: 'Neutrons', caption: 'Neutrons have no charge and also sit in the nucleus. Neutrons = mass number − atomic number.' },
  { id: 'electrons', label: 'Electrons', caption: 'Electrons are negatively charged and move around the nucleus. A neutral atom has as many electrons as protons; an ion has gained or lost electrons.' }
];

const CX = 220, CY = 170;
const SHELLS = [{ r: 52, s: 3 }, { r: 88, s: 6 }, { r: 124, s: 10 }];

const AtomArt: React.FC<{ atom: Atom; stepId: string; playing: boolean; reducedMotion: boolean }> = ({ atom, stepId, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, atom.id);
  const neutrons = atom.a - atom.z;
  const electronCount = atom.electrons.reduce((sum, n) => sum + n, 0);
  const dim = (type: string) => (stepId === type ? 1 : 0.28);
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 340" role="img" aria-label={`Model of ${atom.name} (${atom.symbol}): ${atom.z} protons, ${neutrons} neutrons and ${electronCount} electrons. ${stepId} highlighted.`}>
      <rect width="640" height="340" fill="#14243d" />
      {SHELLS.slice(0, atom.electrons.length).map((shell, i) => <circle key={i} cx={CX} cy={CY} r={shell.r} fill="none" stroke="#ffffff" strokeOpacity=".22" strokeDasharray="3 5" />)}
      {/* Nucleus */}
      <g>
        {Array.from({ length: atom.a }, (_, i) => {
          const r = 6.4 * Math.sqrt(i + 0.5) + 1;
          const angle = i * 2.39996;
          const proton = Math.floor(((i + 1) * atom.z) / atom.a) > Math.floor((i * atom.z) / atom.a);
          return <circle key={i} cx={CX + r * Math.cos(angle)} cy={CY + r * Math.sin(angle)} r="6.8" fill={proton ? '#e0524a' : '#9aa4ad'} stroke="#14243d" strokeWidth="1" opacity={dim(proton ? 'protons' : 'neutrons')} />;
        })}
      </g>
      {/* Electrons orbit their shells */}
      {atom.electrons.map((count, shellIndex) => (
        <g key={shellIndex} opacity={dim('electrons')}>
          {!reducedMotion && <animateTransform attributeName="transform" type="rotate" from={`0 ${CX} ${CY}`} to={`360 ${CX} ${CY}`} dur={`${SHELLS[shellIndex].s}s`} repeatCount="indefinite" />}
          {Array.from({ length: count }, (_, i) => {
            const a = (i * 2 * Math.PI) / count;
            return <circle key={i} cx={CX + SHELLS[shellIndex].r * Math.cos(a)} cy={CY + SHELLS[shellIndex].r * Math.sin(a)} r="6" fill="#4cc3ff" stroke="#fff" strokeWidth="1.5" />;
          })}
        </g>
      ))}
      <text x={CX} y="326" textAnchor="middle" className="sm-atom-note">Not to scale: the nucleus is far smaller than the whole atom</text>

      {/* Legend with counts */}
      <g transform="translate(420 90)">
        <text x="0" y="-20" className="sm-atom-title">{atom.name} · {atom.symbol}</text>
        {[
          { id: 'protons', colour: '#e0524a', label: 'Protons (+)', n: atom.z },
          { id: 'neutrons', colour: '#9aa4ad', label: 'Neutrons (0)', n: neutrons },
          { id: 'electrons', colour: '#4cc3ff', label: 'Electrons (−)', n: electronCount }
        ].map((row, i) => (
          <g key={row.id} transform={`translate(0 ${i * 44})`} opacity={dim(row.id)}>
            <circle cx="10" cy="8" r="9" fill={row.colour} />
            <text x="30" y="14" className="sm-atom-row">{row.label}: {row.n}</text>
          </g>
        ))}
        <text x="0" y="158" className="sm-atom-note">Atomic number {atom.z} · Mass number {atom.a}</text>
        <text x="0" y="178" className="sm-atom-note">Charge: {atom.charge}</text>
      </g>
    </svg>
  );
};

export const AtomScene: React.FC = () => {
  const [id, setId] = useState('sodium');
  const atom = ATOMS.find(a => a.id === id) ?? ATOMS[0];
  const electrons = atom.electrons.reduce((sum, n) => sum + n, 0);
  return (
    <MotionScene
      title="The Atomic Structure Navigator"
      description="Explore subatomic particles, atomic number, mass number and ions."
      steps={ATOM_STEPS}
      stepMs={5500}
      extraControls={
        <>
          <ChoiceRow label="Atom or ion" options={ATOMS.map(a => ({ id: a.id, label: `${a.name} (${a.symbol})` }))} value={atom.id} onChange={setId} />
          <div className="gh-jhs1-science-readout" aria-live="polite">
            <strong>{atom.name} · {atom.symbol}</strong>
            <p>Atomic number (protons): {atom.z}</p>
            <p>Mass number: {atom.a}</p>
            <p>Neutrons = mass number − atomic number: {atom.a - atom.z}</p>
            <p>Electrons: {electrons} · Charge: {atom.charge}</p>
          </div>
        </>
      }
      footer="The periodic table is ordered by increasing atomic number (proton number). Electrons are shown in shells holding 2, then 8, then 8 in this simple model."
    >
      {({ step, playing, reducedMotion }) => <AtomArt atom={atom} stepId={step.id} playing={playing} reducedMotion={reducedMotion} />}
    </MotionScene>
  );
};
