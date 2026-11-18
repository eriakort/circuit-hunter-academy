import React, { useState } from 'react';
import type { Language } from '../types';

type Props = { missionId: string; lang: Language };
const copy = (lang: Language, en: string, it: string) => lang === 'it' ? it : en;

export const MathGeometryLab: React.FC<Props> = ({ missionId, lang }) => {
  const [angle, setAngle] = useState(42);
  const [base, setBase] = useState(10);
  const [height, setHeight] = useState(6);
  const [legA, setLegA] = useState(3);
  const [legB, setLegB] = useState(4);
  const [length, setLength] = useState(8);
  const [width, setWidth] = useState(3);
  const [radius, setRadius] = useState(4);
  const [lastValue, setLastValue] = useState(10);
  const title: Record<string, [string, string]> = {
    m7m1: ['Angle explorer', 'Esploratore degli angoli'],
    m7m2: ['Triangle workbench', 'Banco di prova dei triangoli'],
    m7m3: ['Pythagorean triangle', 'Triangolo di Pitagora'],
    m7m4: ['Rectangle perimeter and area', 'Perimetro e area del rettangolo'],
    m7m5: ['Circle measurements', 'Misure del cerchio'],
    m7m6: ['Statistics explorer', 'Esploratore statistico']
  };
  if (!title[missionId]) return null;
  const heading = copy(lang, title[missionId][0], title[missionId][1]);
  const label = (en: string, it: string) => copy(lang, en, it);
  const control = (name: string, itName: string, value: number, min: number, max: number, set: (v: number) => void) =>
    <label className="ml-control" key={name}><span>{label(name, itName)}</span><input type="range" min={min} max={max} value={value} onChange={e => set(Number(e.target.value))}/><b>{value}</b></label>;
  let graphic: React.ReactNode;
  let result: string;
  if (missionId === 'm7m1') {
    const radians = angle * Math.PI / 180;
    const x = 150 + 90 * Math.cos(radians);
    const y = 120 - 90 * Math.sin(radians);
    graphic = <svg viewBox="0 0 300 150" role="img" aria-label={label('Angle diagram','Diagramma di un angolo')}><path d="M35 120 H270 M35 120 L35 20" fill="none" stroke="currentColor"/><path d={`M35 120 L${x} ${y}`} stroke="#ff8a45" strokeWidth="4"/><path d={`M75 120 A40 40 0 0 0 ${75 + 40*Math.cos(radians)} ${120 - 40*Math.sin(radians)}`} fill="none" stroke="#e5b94f" strokeWidth="3"/><text x="55" y="112" fill="currentColor">{angle}°</text></svg>;
    result = angle < 90 ? label('Acute angle','Angolo acuto') : angle === 90 ? label('Right angle','Angolo retto') : angle < 180 ? label('Obtuse angle','Angolo ottuso') : label('Straight angle','Angolo piatto');
  } else if (missionId === 'm7m2') {
    graphic = <svg viewBox="0 0 300 150" role="img" aria-label={label('Triangle with base and height','Triangolo con base e altezza')}><path d="M45 125 L250 125 L155 25 Z" fill="#4f9b82" fillOpacity=".18" stroke="#4f9b82" strokeWidth="3"/><path d="M155 25 V125" stroke="#e5b94f" strokeDasharray="5 4" strokeWidth="2"/><text x="145" y="143" fill="currentColor">{base} cm</text><text x="164" y="78" fill="currentColor">{height} cm</text></svg>;
    result = label(`A = (${base} × ${height}) ÷ 2 = ${(base*height/2).toFixed(1)} cm²`, `A = (${base} × ${height}) ÷ 2 = ${(base*height/2).toFixed(1)} cm²`);
  } else if (missionId === 'm7m3') {
    const hyp = Math.sqrt(legA*legA+legB*legB);
    graphic = <svg viewBox="0 0 300 150" role="img" aria-label={label('Right triangle','Triangolo rettangolo')}><path d="M55 120 H245 V35 Z" fill="#4f9b82" fillOpacity=".16" stroke="#4f9b82" strokeWidth="3"/><path d="M230 120 V105 H245" fill="none" stroke="#e5b94f" strokeWidth="2"/><text x="140" y="140" fill="currentColor">{legA}</text><text x="252" y="78" fill="currentColor">{legB}</text><text x="137" y="67" fill="currentColor">{hyp.toFixed(2)}</text></svg>;
    result = `c = √(${legA}² + ${legB}²) = ${hyp.toFixed(2)}`;
  } else if (missionId === 'm7m4') {
    graphic = <svg viewBox="0 0 300 150" role="img" aria-label={label('Rectangle','Rettangolo')}><rect x="65" y="25" width="170" height="95" fill="#4f9b82" fillOpacity=".18" stroke="#4f9b82" strokeWidth="3"/><text x="145" y="142" fill="currentColor">{length} cm</text><text x="242" y="76" fill="currentColor">{width} cm</text></svg>;
    result = `P = 2(${length} + ${width}) = ${2*(length+width)} cm · A = ${length*width} cm²`;
  } else if (missionId === 'm7m5') {
    graphic = <svg viewBox="0 0 300 150" role="img" aria-label={label('Circle with radius','Cerchio con raggio')}><circle cx="145" cy="75" r={radius*10} fill="#4f9b82" fillOpacity=".16" stroke="#4f9b82" strokeWidth="3"/><path d={`M145 75 H${145+radius*10}`} stroke="#e5b94f" strokeWidth="3"/><circle cx="145" cy="75" r="3" fill="currentColor"/><text x="150" y="66" fill="currentColor">r = {radius}</text></svg>;
    result = `d = ${2*radius} · C ≈ ${(2*Math.PI*radius).toFixed(2)} · A ≈ ${(Math.PI*radius*radius).toFixed(2)}`;
  } else {
    const values = [2, 3, 3, 7, lastValue].sort((x,y)=>x-y);
    const mean = values.reduce((sum,v)=>sum+v,0)/values.length;
    const median = values[2];
    const mode = values.filter(v=>values.filter(x=>x===v).length===Math.max(...values.map(x=>values.filter(y=>y===x).length)))[0];
    graphic = <svg viewBox="0 0 300 150" role="img" aria-label={label('Data values chart','Grafico dei dati')}>{values.map((v,i)=><g key={i}><rect x={38+i*50} y={120-v*3} width="28" height={v*3} rx="3" fill="#4f9b82"/><text x={52+i*50} y="140" textAnchor="middle" fill="currentColor">{v}</text></g>)}</svg>;
    result = `${label("Mean","Media")} ${mean.toFixed(1)} · ${label("Median","Mediana")} ${median} · ${label("Mode","Moda")} ${mode}`;
  }
  return <section className="math-lab" aria-label={label('Interactive geometry and statistics model','Modello interattivo di geometria e statistica')}>
    <header className="ml-heading"><span className="ml-kicker">GEOMETRY LAB · LABORATORIO DI GEOMETRIA</span><h3>{heading}</h3><p>{label('Change a value and observe how the diagram and calculation respond.','Modifica un valore e osserva come cambiano il diagramma e il calcolo.')}</p></header>
    <div className="ml-grid"><div className="ml-stage">{graphic}<div className="ml-result"><small>{label('Result','Risultato')}</small><strong>{result}</strong></div></div>
    <div className="ml-controls">
      {missionId === 'm7m1' && control('Angle in degrees','Angolo in gradi',angle,0,180,setAngle)}
      {missionId === 'm7m2' && <>{control('Base (cm)','Base (cm)',base,2,20,setBase)}{control('Height (cm)','Altezza (cm)',height,2,15,setHeight)}</>}
      {missionId === 'm7m3' && <>{control('First leg','Primo cateto',legA,1,12,setLegA)}{control('Second leg','Secondo cateto',legB,1,12,setLegB)}</>}
      {missionId === 'm7m4' && <>{control('Length (cm)','Lunghezza (cm)',length,2,20,setLength)}{control('Width (cm)','Larghezza (cm)',width,2,15,setWidth)}</>}
      {missionId === 'm7m5' && control('Radius (cm)','Raggio (cm)',radius,1,7,setRadius)}
      {missionId === 'm7m6' && control('Last data value','Ultimo valore',lastValue,1,30,setLastValue)}
    </div></div>
  </section>;
};
