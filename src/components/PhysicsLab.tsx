import React, { useState } from 'react';
import { Language } from '../types';

type Props = { missionId: string; lang: Language };

const copy = (lang: Language, en: string, it: string) => lang === 'it' ? it : en;
const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

function Slider({ label, value, min, max, step = 1, unit = '', onChange }: {
  label: string; value: number; min: number; max: number; step?: number; unit?: string; onChange: (n: number) => void;
}) {
  return <label className="pl-control">
    <span>{label}<b>{Number.isInteger(value) ? value : value.toFixed(1)} {unit}</b></span>
    <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))} />
    <small>{min}–{max} {unit}</small>
  </label>;
}

function Readout({ label, value, note }: { label: string; value: string; note?: string }) {
  return <div className="pl-readout"><small>{label}</small><strong>{value}</strong>{note && <em>{note}</em>}</div>;
}

const Arrow = ({ x1, y1, x2, y2, color, label }: { x1:number;y1:number;x2:number;y2:number;color:string;label:string }) => (
  <g>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="4" strokeLinecap="round" />
    <path d={`M ${x2} ${y2} l -9 -4 l 2 9 z`} fill={color} />
    <text x={x2 + 7} y={y2 - 7} fill={color} fontSize="11" fontWeight="700">{label}</text>
  </g>
);

export const PhysicsLab: React.FC<Props> = ({ missionId, lang }) => {
  const [exponent, setExponent] = useState(-6);
  const [mass, setMass] = useState(300);
  const [volume, setVolume] = useState(150);
  const [reading, setReading] = useState(12.4);
  const [resolution, setResolution] = useState(0.1);
  const [graphMode, setGraphMode] = useState<'direct'|'inverse'>('direct');
  const [constant, setConstant] = useState(3);
  const [inputX, setInputX] = useState(4);
  const [vx, setVx] = useState(3);
  const [vy, setVy] = useState(4);
  const [force, setForce] = useState(6);
  const [springK, setSpringK] = useState(2);
  const [vectorMagnitude, setVectorMagnitude] = useState(10);
  const [angle, setAngle] = useState(35);
  const [leftForce, setLeftForce] = useState(8);
  const [leftDistance, setLeftDistance] = useState(2);
  const [rightForce, setRightForce] = useState(4);
  const [rightDistance, setRightDistance] = useState(3);
  const [baseWidth, setBaseWidth] = useState(60);
  const [cgOffset, setCgOffset] = useState(0);
  const [depth, setDepth] = useState(4);
  const [liquidDensity, setLiquidDensity] = useState(1000);
  const [objectDensity, setObjectDensity] = useState(700);
  const [objectVolume, setObjectVolume] = useState(0.002);

  const titleById: Record<string, [string,string]> = {
    p1m2:['Powers of ten explorer','Esploratore delle potenze di dieci'],
    p1m3:['Density workbench','Banco di prova della densità'],
    p2m1:['Precision and uncertainty bench','Banco di precisione e incertezza'],
    p2m2:['Build a relationship graph','Costruisci il grafico di una relazione'],
    p3m1:['Vector resultant simulator','Simulatore della risultante vettoriale'],
    p3m2:['Spring and force simulator','Simulatore di molla e forza'],
    p3m3:['Resolve a vector into components','Scomponi un vettore nelle componenti'],
    p4m1:['Balance the lever','Bilancia la leva'],
    p4m2:['Centre of gravity and stability','Baricentro e stabilità'],
    p5m1:['Pressure with depth','Pressione con la profondità'],
    p5m2:['Will it float?','Galleggia o affonda?']
  };
  if (!titleById[missionId]) return null;

  const density = mass / volume;
  const xEnd = 28 + inputX * 22;
  const yValue = graphMode === 'direct' ? constant * inputX : constant / inputX;
  const maxGraphY = graphMode === 'direct' ? 30 : 12;
  const resultant = Math.hypot(vx, vy);
  const radians = angle * Math.PI / 180;
  const compX = vectorMagnitude * Math.cos(radians);
  const compY = vectorMagnitude * Math.sin(radians);
  const leftMoment = leftForce * leftDistance;
  const rightMoment = rightForce * rightDistance;
  const pressureKpa = liquidDensity * 9.81 * depth / 1000;
  const weightN = objectDensity * objectVolume * 9.81;
  const buoyancyN = liquidDensity * objectVolume * 9.81;
  const floats = objectDensity < liquidDensity;
  const stability = Math.abs(cgOffset) <= baseWidth / 2;

  return <section className="physics-lab" aria-label={copy(lang,'Interactive physics experiment','Esperimento interattivo di fisica')}>
    <div className="pl-heading">
      <span className="pl-kicker">PHYSICS VISUAL LAB · LABORATORIO DI FISICA</span>
      <h3>{copy(lang, titleById[missionId][0], titleById[missionId][1])}</h3>
      <p>{copy(lang,'Change the controls, observe the model and explain what changed.','Modifica i controlli, osserva il modello e spiega che cosa è cambiato.')}</p>
    </div>

    {missionId === 'p1m2' && <div className="pl-grid">
      <div className="pl-visual">
        <div className="pl-number"><span>3.2 × 10</span><b>{exponent}</b></div>
        <div className="pl-scale"><span>10⁻⁹</span><i style={{left:`${((exponent+9)/18)*100}%`}}/><span>10⁹</span></div>
        <p>{copy(lang,'Move the exponent. Positive powers make large numbers; negative powers make tiny numbers.','Sposta l’esponente. Le potenze positive rappresentano numeri grandi; quelle negative numeri piccolissimi.')}</p>
        <Readout label={copy(lang,'Decimal value','Valore decimale')} value={(3.2 * Math.pow(10, exponent)).toExponential(2)} />
      </div>
      <div className="pl-controls"><Slider label={copy(lang,'Power of ten','Potenza di dieci')} value={exponent} min={-9} max={9} onChange={setExponent}/><Readout label={copy(lang,'Order of magnitude','Ordine di grandezza')} value={`10^${exponent}`}/></div>
    </div>}

    {missionId === 'p1m3' && <div className="pl-grid">
      <div className="pl-visual"><div className="pl-cube" style={{transform:`scale(${clamp(density/2,0.55,1.5)})`}}/><Readout label={copy(lang,'Calculated density','Densità calcolata')} value={`${density.toFixed(2)} g/cm³`} note={density < 1 ? copy(lang,'Less dense than water','Meno denso dell’acqua') : copy(lang,'More dense than water','Più denso dell’acqua')}/><p>{copy(lang,'Density tells us how much mass is packed into each unit of volume.','La densità indica quanta massa è contenuta in ogni unità di volume.')}</p></div>
      <div className="pl-controls"><Slider label={copy(lang,'Mass','Massa')} value={mass} min={100} max={1000} step={10} unit="g" onChange={setMass}/><Slider label={copy(lang,'Volume','Volume')} value={volume} min={50} max={500} step={10} unit="cm³" onChange={setVolume}/><div className="pl-formula">ρ = m ÷ V = {mass} ÷ {volume}</div></div>
    </div>}

    {missionId === 'p2m1' && <div className="pl-grid">
      <div className="pl-visual"><div className="pl-ruler"><div className="pl-ruler-ticks">{Array.from({length:41},(_,i)=><i key={i} style={{height:i%10===0?30:i%5===0?21:12}}/>)}</div><div className="pl-ruler-pointer" style={{left:`${reading/20*100}%`}}/><span>0 cm</span><span>20 cm</span></div><Readout label={copy(lang,'Recorded measurement','Misura registrata')} value={`${reading.toFixed(1)} ± ${(resolution/2).toFixed(2)} cm`}/><p>{copy(lang,'A finer scale division allows a smaller reading uncertainty.','Una divisione più piccola permette un’incertezza di lettura minore.')}</p></div>
      <div className="pl-controls"><Slider label={copy(lang,'Position on ruler','Posizione sul righello')} value={reading} min={0} max={20} step={0.1} unit="cm" onChange={setReading}/><label className="pl-control"><span>{copy(lang,'Smallest division','Divisione minima')}</span><select value={resolution} onChange={e=>setResolution(Number(e.target.value))}><option value="1">1 cm</option><option value="0.5">0.5 cm</option><option value="0.1">0.1 cm</option><option value="0.01">0.01 cm</option></select></label><Readout label={copy(lang,'Half-division uncertainty','Incertezza: metà divisione')} value={`± ${(resolution/2).toFixed(2)} cm`}/></div>
    </div>}

    {missionId === 'p2m2' && <div className="pl-grid">
      <div className="pl-visual"><svg viewBox="0 0 300 210" role="img" aria-label={copy(lang,'Interactive proportionality graph','Grafico interattivo di proporzionalità')}><path d="M30 12 V180 H286" fill="none" stroke="currentColor" strokeWidth="1.5"/><text x="286" y="198" fill="currentColor" textAnchor="end" fontSize="11">x</text><text x="18" y="14" fill="currentColor" fontSize="11">y</text>{Array.from({length:5},(_,i)=><line key={i} x1="30" y1={180-i*38} x2="285" y2={180-i*38} stroke="currentColor" opacity=".12"/>)}<path d={Array.from({length:60},(_,i)=>{const x=i/59*10+0.2;const y=graphMode==='direct'?constant*x:constant/x;return `${i?'L':'M'} ${30+x*24} ${180-clamp(y/maxGraphY,0,1)*160}`;}).join(' ')} fill="none" stroke="#45d8ff" strokeWidth="3"/><circle cx={30+inputX*22} cy={180-clamp(yValue/maxGraphY,0,1)*160} r="5" fill="#ff6a3d"/></svg><Readout label="y" value={yValue.toFixed(2)}/><p>{graphMode==='direct'?copy(lang,'A straight line through the origin: y = k × x.','Una retta che passa per l’origine: y = k × x.'):copy(lang,'A curved graph: y = k ÷ x. The product stays constant.','Un grafico curvo: y = k ÷ x. Il prodotto resta costante.')}</p></div>
      <div className="pl-controls"><label className="pl-control"><span>{copy(lang,'Relationship','Relazione')}</span><select value={graphMode} onChange={e=>setGraphMode(e.target.value as 'direct'|'inverse')}><option value="direct">{copy(lang,'Direct proportionality','Proporzionalità diretta')}</option><option value="inverse">{copy(lang,'Inverse proportionality','Proporzionalità inversa')}</option></select></label><Slider label={copy(lang,'Constant k','Costante k')} value={constant} min={1} max={5} onChange={setConstant}/><Slider label="x" value={inputX} min={1} max={10} onChange={setInputX}/><Readout label={copy(lang,'Current coordinates','Coordinate attuali')} value={`(${inputX}, ${yValue.toFixed(1)})`}/></div>
    </div>}

    {missionId === 'p3m1' && <div className="pl-grid">
      <div className="pl-visual"><svg viewBox="0 0 300 230" role="img" aria-label={copy(lang,'Two perpendicular vectors and their resultant','Due vettori perpendicolari e la loro risultante')}><path d="M25 190 H280 M45 210 V15" stroke="currentColor" opacity=".45"/><path d={`M45 190 L${45+vx*18} 190 L${45+vx*18} ${190-vy*18} Z`} fill="#45d8ff" opacity=".13"/><Arrow x1={45} y1={190} x2={45+vx*18} y2={190} color="#45d8ff" label="A"/><Arrow x1={45+vx*18} y1={190} x2={45+vx*18} y2={190-vy*18} color="#ff8fc0" label="B"/><Arrow x1={45} y1={190} x2={45+vx*18} y2={190-vy*18} color="#ffd166" label="R"/></svg><Readout label={copy(lang,'Resultant magnitude','Modulo della risultante')} value={`${resultant.toFixed(2)} N`} note={copy(lang,'Pythagoras: √(A² + B²)','Pitagora: √(A² + B²)')}/></div>
      <div className="pl-controls"><Slider label={copy(lang,'Horizontal vector A','Vettore orizzontale A')} value={vx} min={0} max={10} unit="N" onChange={setVx}/><Slider label={copy(lang,'Vertical vector B','Vettore verticale B')} value={vy} min={0} max={10} unit="N" onChange={setVy}/><div className="pl-formula">R = √({vx}² + {vy}²) = {resultant.toFixed(2)} N</div></div>
    </div>}

    {missionId === 'p3m2' && <div className="pl-grid">
      <div className="pl-visual"><svg viewBox="0 0 300 180" role="img" aria-label={copy(lang,'Spring extending under a force','Molla che si allunga sotto una forza')}><path d="M35 20 H265" stroke="currentColor" opacity=".5"/><path d={`M150 22 ${Array.from({length:12},(_,i)=>`L ${i%2?166:134} ${35+i*(clamp(force/springK,0,8)*8+5)}`).join(' ')} L150 ${35+12*(clamp(force/springK,0,8)*8+5)}`} fill="none" stroke="#45d8ff" strokeWidth="3"/><rect x="128" y={`${45+12*(clamp(force/springK,0,8)*8+5)}`} width="44" height="28" rx="5" fill="#ff6a3d"/><text x="150" y="165" fill="currentColor" fontSize="12" textAnchor="middle">x = F / k</text></svg><Readout label={copy(lang,'Spring extension','Allungamento della molla')} value={`${(force/springK).toFixed(2)} cm`}/><p>{copy(lang,'Double the force and the extension doubles, as long as the spring stays elastic.','Raddoppia la forza e raddoppia l’allungamento, finché la molla resta elastica.')}</p></div>
      <div className="pl-controls"><Slider label={copy(lang,'Applied force','Forza applicata')} value={force} min={0} max={10} unit="N" onChange={setForce}/><Slider label={copy(lang,'Spring constant','Costante elastica')} value={springK} min={1} max={5} unit="N/cm" onChange={setSpringK}/><div className="pl-formula">F = k × x → x = {force} ÷ {springK}</div></div>
    </div>}

    {missionId === 'p3m3' && <div className="pl-grid">
      <div className="pl-visual"><svg viewBox="0 0 300 220" role="img" aria-label={copy(lang,'Vector with horizontal and vertical components','Vettore con componenti orizzontale e verticale')}><path d="M30 190 H280 M45 205 V15" stroke="currentColor" opacity=".4"/><Arrow x1={45} y1={190} x2={45+compX*16} y2={190-compY*16} color="#ffd166" label="V"/><Arrow x1={45} y1={190} x2={45+compX*16} y2={190} color="#45d8ff" label="Vx"/><Arrow x1={45+compX*16} y1={190} x2={45+compX*16} y2={190-compY*16} color="#ff8fc0" label="Vy"/></svg><Readout label="Vx" value={`${compX.toFixed(2)}`}/><Readout label="Vy" value={`${compY.toFixed(2)}`}/></div>
      <div className="pl-controls"><Slider label={copy(lang,'Vector magnitude','Modulo del vettore')} value={vectorMagnitude} min={1} max={12} unit="N" onChange={setVectorMagnitude}/><Slider label={copy(lang,'Angle from horizontal','Angolo rispetto all’orizzontale')} value={angle} min={0} max={90} unit="°" onChange={setAngle}/><div className="pl-formula">Vx = V cos θ · Vy = V sin θ</div></div>
    </div>}

    {missionId === 'p4m1' && <div className="pl-grid">
      <div className="pl-visual"><svg viewBox="0 0 300 170" role="img" aria-label={copy(lang,'Lever with two forces and a pivot','Leva con due forze e un fulcro')}><path d="M22 85 H278" stroke="#ffd166" strokeWidth="7" strokeLinecap="round"/><path d="M150 90 L130 125 H170 Z" fill="#45d8ff"/><path d={`M${150-leftDistance*30} 85 V35 M${150+rightDistance*30} 85 V35`} stroke="#ff8fc0" strokeWidth="3"/><text x={150-leftDistance*30} y="25" fill="currentColor" textAnchor="middle" fontSize="11">{leftForce} N</text><text x={150+rightDistance*30} y="25" fill="currentColor" textAnchor="middle" fontSize="11">{rightForce} N</text></svg><Readout label={copy(lang,'Left moment','Momento sinistro')} value={`${leftMoment.toFixed(1)} N·m`}/><Readout label={copy(lang,'Right moment','Momento destro')} value={`${rightMoment.toFixed(1)} N·m`}/><p>{Math.abs(leftMoment-rightMoment)<0.1?copy(lang,'Balanced! Clockwise and anticlockwise moments are equal.','In equilibrio! I momenti orari e antiorari sono uguali.'):leftMoment>rightMoment?copy(lang,'The left side turns down. Increase the right moment to balance it.','Il lato sinistro scende. Aumenta il momento destro per bilanciarlo.'):copy(lang,'The right side turns down. Increase the left moment to balance it.','Il lato destro scende. Aumenta il momento sinistro per bilanciarlo.')}</p></div>
      <div className="pl-controls"><Slider label={copy(lang,'Left force','Forza sinistra')} value={leftForce} min={1} max={12} unit="N" onChange={setLeftForce}/><Slider label={copy(lang,'Left distance','Distanza sinistra')} value={leftDistance} min={1} max={5} unit="m" onChange={setLeftDistance}/><Slider label={copy(lang,'Right force','Forza destra')} value={rightForce} min={1} max={12} unit="N" onChange={setRightForce}/><Slider label={copy(lang,'Right distance','Distanza destra')} value={rightDistance} min={1} max={5} unit="m" onChange={setRightDistance}/></div>
    </div>}

    {missionId === 'p4m2' && <div className="pl-grid">
      <div className="pl-visual"><svg viewBox="0 0 300 190" role="img" aria-label={copy(lang,'Object support base and centre of gravity projection','Base di appoggio e proiezione del baricentro')}><path d={`M${150-baseWidth} 155 H${150+baseWidth}`} stroke="#45d8ff" strokeWidth="7" strokeLinecap="round"/><rect x="110" y="45" width="80" height="110" rx="8" fill="#ff6a3d" opacity=".7"/><path d={`M150 45 L${150+cgOffset} 155`} stroke="#ffd166" strokeDasharray="5 4" strokeWidth="2"/><circle cx={150+cgOffset} cy="45" r="7" fill="#ffd166"/><text x="150" y="178" textAnchor="middle" fill="currentColor" fontSize="11">{copy(lang,'support base','base di appoggio')}</text></svg><Readout label={copy(lang,'Stability check','Verifica della stabilità')} value={stability?copy(lang,'Stable','Stabile'):copy(lang,'Tipping risk','Rischio di ribaltamento')}/><p>{copy(lang,'The vertical line through the centre of gravity must fall inside the support base.','La verticale del baricentro deve cadere all’interno della base di appoggio.')}</p></div>
      <div className="pl-controls"><Slider label={copy(lang,'Half-width of support base','Semilarghezza della base')} value={baseWidth} min={10} max={90} unit="cm" onChange={setBaseWidth}/><Slider label={copy(lang,'Centre-of-gravity offset','Spostamento del baricentro')} value={cgOffset} min={-100} max={100} unit="cm" onChange={setCgOffset}/></div>
    </div>}

    {missionId === 'p5m1' && <div className="pl-grid">
      <div className="pl-visual"><svg viewBox="0 0 300 210" role="img" aria-label={copy(lang,'Water tank showing depth and pressure','Serbatoio con profondità e pressione')}><rect x="45" y="18" width="210" height="170" rx="5" fill="#45d8ff" opacity=".14" stroke="#45d8ff" strokeWidth="2"/><path d="M47 20 H253 V188 H47 Z" fill="#45d8ff" opacity=".08"/><path d={`M45 ${20+depth/10*165} H255`} stroke="#ff6a3d" strokeWidth="3"/><circle cx="150" cy={20+depth/10*165} r="7" fill="#ff6a3d"/><text x="160" y={15+depth/10*165} fill="currentColor" fontSize="11">{depth.toFixed(1)} m</text></svg><Readout label={copy(lang,'Hydrostatic pressure (gauge)','Pressione idrostatica (relativa)')} value={`${pressureKpa.toFixed(2)} kPa`}/><p>p = ρ × g × h</p></div>
      <div className="pl-controls"><Slider label={copy(lang,'Depth','Profondità')} value={depth} min={0} max={10} step={0.5} unit="m" onChange={setDepth}/><label className="pl-control"><span>{copy(lang,'Liquid','Liquido')}</span><select value={liquidDensity} onChange={e=>setLiquidDensity(Number(e.target.value))}><option value="1000">{copy(lang,'Water (1000 kg/m³)','Acqua (1000 kg/m³)')}</option><option value="800">{copy(lang,'Oil (800 kg/m³)','Olio (800 kg/m³)')}</option><option value="1200">{copy(lang,'Dense liquid (1200 kg/m³)','Liquido denso (1200 kg/m³)')}</option></select></label><Readout label={copy(lang,'Pressure at this depth','Pressione a questa profondità')} value={`${pressureKpa.toFixed(2)} kPa`}/></div>
    </div>}

    {missionId === 'p5m2' && <div className="pl-grid">
      <div className="pl-visual"><svg viewBox="0 0 300 190" role="img" aria-label={copy(lang,'Object floating or sinking in water','Oggetto che galleggia o affonda nell’acqua')}><rect x="35" y="18" width="230" height="155" rx="8" fill="#45d8ff" opacity=".13" stroke="#45d8ff"/><path d="M37 65 Q60 60 82 65 T127 65 T172 65 T217 65 T263 65" fill="none" stroke="#45d8ff" strokeWidth="3"/><rect x="125" y={floats?52:120} width="50" height="40" rx="6" fill="#ff6a3d"/><path d={`M150 102 V${floats?92:120}`} stroke="#ffd166" strokeWidth="3"/></svg><Readout label={copy(lang,'Object behaviour','Comportamento dell’oggetto')} value={floats?copy(lang,'Floats','Galleggia'):objectDensity===liquidDensity?copy(lang,'Suspended','In sospensione'):copy(lang,'Sinks','Affonda')}/><Readout label={copy(lang,'Buoyant force','Spinta di Archimede')} value={`${buoyancyN.toFixed(2)} N`}/><Readout label={copy(lang,'Object weight','Peso dell’oggetto')} value={`${weightN.toFixed(2)} N`}/><p>{copy(lang,'The buoyant force equals the weight of displaced liquid.','La spinta di Archimede è uguale al peso del liquido spostato.')}</p></div>
      <div className="pl-controls"><Slider label={copy(lang,'Object density','Densità dell’oggetto')} value={objectDensity} min={200} max={1600} step={50} unit="kg/m³" onChange={setObjectDensity}/><Slider label={copy(lang,'Displaced volume','Volume immerso')} value={objectVolume} min={0.001} max={0.01} step={0.001} unit="m³" onChange={setObjectVolume}/><Readout label={copy(lang,'Water density','Densità dell’acqua')} value="1000 kg/m³"/></div>
    </div>}

    <div className="pl-footnote">{copy(lang,'Try changing one variable at a time. Predict the result before moving the slider, then explain it using the formula.','Prova a cambiare una variabile alla volta. Prevedi il risultato prima di spostare il cursore, poi spiegalo usando la formula.')}</div>
  </section>;
};
