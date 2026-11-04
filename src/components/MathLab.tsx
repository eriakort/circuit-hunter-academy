import React, { useState } from 'react';
import { Language } from '../types';

type Props = { missionId: string; lang: Language };
const text = (lang: Language, en: string, it: string) => lang === 'it' ? it : en;
const gcd = (x: number, y: number): number => y === 0 ? x : gcd(y, x % y);
const lcm = (x: number, y: number): number => Math.abs(x * y) / gcd(x, y);
const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));

function Control({ label, value, min, max, step = 1, onChange }: {
  label: string; value: number; min: number; max: number; step?: number; onChange: (n: number) => void;
}) {
  return <label className="ml-control"><span>{label}<b>{Number.isInteger(value) ? value : value.toFixed(2)}</b></span>
    <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))} />
    <small>{min}–{max}</small>
  </label>;
}
function Result({ label, value }: { label: string; value: string }) {
  return <div className="ml-result"><small>{label}</small><strong>{value}</strong></div>;
}
function NumberLine({ value, min = -10, max = 10, label }: { value: number; min?: number; max?: number; label: string }) {
  const x = 20 + ((clamp(value, min, max) - min) / (max - min)) * 260;
  return <svg viewBox="0 0 300 82" role="img" aria-label={label}>
    <path d="M20 37 H280 M20 37 l8 -5 M20 37 l8 5 M280 37 l-8 -5 M280 37 l-8 5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    {Array.from({ length: 11 }, (_, i) => {
      const tickX = 20 + i * 26;
      const tick = min + (max - min) * i / 10;
      return <g key={i}><path d={'M' + tickX + ' 32 v10'} stroke="currentColor" opacity=".55"/><text x={tickX} y="57" textAnchor="middle" fill="currentColor" fontSize="9">{Number.isInteger(tick) ? tick : tick.toFixed(1)}</text></g>;
    })}
    <path d={'M' + x + ' 13 V37'} stroke="#ff6a3d" strokeWidth="2.5"/><circle cx={x} cy="37" r="6" fill="#ff6a3d"/>
    <text x={x} y="10" textAnchor="middle" fill="#ff6a3d" fontSize="11" fontWeight="700">{Number(value.toFixed(2))}</text>
  </svg>;
}

const titles: Record<string, [string, string]> = {
  m1m1: ['Natural numbers explorer', 'Esploratore dei numeri naturali'],
  m1m2: ['Operations workbench', 'Banco di prova delle operazioni'],
  m1m3: ['See the properties of operations', 'Osserva le proprietà delle operazioni'],
  m1m4: ['Powers and prime factors', 'Potenze e fattori primi'],
  m1m5: ['Number sense challenge', 'Sfida del calcolo'],
  m1m6: ['Integer number line', 'Retta dei numeri interi'],
  m1m7: ['GCD and LCM builder', 'Costruttore di M.C.D. e m.c.m.'],
  m1m8: ['Divisibility checker', 'Verificatore di divisibilità'],
  m2m1: ['Fraction visualiser', 'Visualizzatore di frazioni'],
  m2m2: ['Fraction operations', 'Operazioni con le frazioni'],
  m2m3: ['Decimals and real numbers', 'Numeri decimali e reali'],
  m2m4: ['Compare rational numbers', 'Confronta i numeri razionali'],
  m2m5: ['Percentage explorer', 'Esploratore delle percentuali'],
  m2m6: ['Proportion scale', 'Scala delle proporzioni'],
  m2m7: ['Negative powers explorer', 'Esploratore delle potenze negative'],
  m2m8: ['Rounding and estimation', 'Arrotondamento e stima'],
  m3m1: ['Set membership', 'Appartenenza agli insiemi'],
  m3m2: ['Set operations', 'Operazioni tra insiemi'],
  m3m3: ['Subsets and power sets', 'Sottoinsiemi e insieme delle parti'],
  m3m4: ['Relations map', 'Mappa delle relazioni'],
  m3m5: ['Logic truth table', 'Tavola di verità'],
  m3m6: ['Explore a relation', 'Esplora una relazione'],
  m3m7: ['Quantifiers in action', 'I quantificatori in azione'],
  m4m1: ['Algebra substitution machine', 'Macchina della sostituzione algebrica'],
  m4m2: ['Combine like terms', 'Riduci i termini simili'],
  m5m1: ['Equation balance scale', 'Bilancia delle equazioni'],
  m5m2: ['Open the brackets', 'Sviluppa le parentesi'],
  m6m1: ['Inequality number line', 'Retta delle disequazioni']
};

export const MathLab: React.FC<Props> = ({ missionId, lang }) => {
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);
  const [c, setC] = useState(2);
  const [numerator, setNumerator] = useState(3);
  const [denominator, setDenominator] = useState(4);
  const [percent, setPercent] = useState(25);
  const [base, setBase] = useState(2);
  const [exponent, setExponent] = useState(3);
  const [integer, setInteger] = useState(-4);
  const [roundTo, setRoundTo] = useState(1);
  const [variable, setVariable] = useState(3);
  const [coefficient, setCoefficient] = useState(2);
  const [constant, setConstant] = useState(4);
  const [operation, setOperation] = useState<'+' | '-' | '×' | '÷'>('+');
  const [logicP, setLogicP] = useState(true);
  const [logicQ, setLogicQ] = useState(false);
  const [setMode, setSetMode] = useState<'union' | 'intersection' | 'difference'>('intersection');

  if (!titles[missionId]) return null;
  const title = text(lang, titles[missionId][0], titles[missionId][1]);
  const calc = operation === '+' ? a + b : operation === '-' ? a - b : operation === '×' ? a * b : a / b;
  const fraction = numerator / denominator;
  const power = Math.pow(base, exponent);
  const roundFactor = Math.pow(10, roundTo);
  const rounded = Math.round(variable * roundFactor) / roundFactor;
  const percentValue = 240 * percent / 100;
  const isNumberLine = ['m1m1','m1m6'].includes(missionId);
  const isFraction = ['m2m1','m2m2'].includes(missionId);
  const isSets = ['m3m1','m3m2','m3m3'].includes(missionId);
  const isEquation = ['m5m1','m5m2'].includes(missionId);
  const isAlgebra = ['m4m1','m4m2'].includes(missionId);

  return <section className="math-lab" aria-label={text(lang,'Interactive mathematics model','Modello interattivo di matematica')}>
    <header className="ml-heading">
      <span className="ml-kicker">MATH VISUAL LAB · LABORATORIO VISIVO DI MATEMATICA</span>
      <h3>{title}</h3>
      <p>{text(lang,'Move a control, watch the model change and explain the rule in your own words.','Modifica un controllo, osserva il modello e spiega la regola con parole tue.')}</p>
    </header>

    <div className="ml-grid">
      <div className="ml-stage">
        {isNumberLine && <><NumberLine value={missionId === 'm1m6' ? integer : variable} min={missionId === 'm1m6' ? -10 : 0} max={10} label={text(lang,'Number line with a highlighted value','Retta numerica con un valore evidenziato')}/><p>{missionId === 'm1m6' ? text(lang,'Numbers increase from left to right. The absolute value is the distance from zero.','I numeri aumentano da sinistra verso destra. Il valore assoluto è la distanza dallo zero.') : text(lang,'Natural numbers are used for counting: 0, 1, 2, 3, and so on.','I numeri naturali si usano per contare: 0, 1, 2, 3 e così via.')}</p></>}
        {missionId === 'm1m2' && <><div className="ml-operation"><span>{a}</span><b>{operation}</b><span>{b}</span><b>=</b><strong>{Number.isFinite(calc) ? calc : '—'}</strong></div><div className="ml-bars">{[a,b,Number.isFinite(calc)?Math.abs(calc):0].map((v,i)=><div key={i} className="ml-bar-row"><small>{['A','B','Result / Risultato'][i]}</small><i style={{width:clamp(v/20*100,2,100)+'%'}}/></div>)}</div><p>{text(lang,'Change the numbers and operation. Division by zero is not allowed.','Modifica i numeri e l’operazione. Non è possibile dividere per zero.')}</p></>}
        {missionId === 'm1m3' && <><div className="ml-distribute"><div>{a} × ({b} + {c})</div><div className="ml-area"><span style={{flex:b, minWidth:20}}>{a}×{b}</span><span style={{flex:c,minWidth:20}}>{a}×{c}</span></div><strong>{a*b} + {a*c} = {a*(b+c)}</strong></div><p>{text(lang,'The large rectangle is split into two smaller rectangles: a(b + c) = ab + ac.','Il rettangolo grande è diviso in due rettangoli più piccoli: a(b + c) = ab + ac.')}</p></>}
        {['m1m4','m2m7'].includes(missionId) && <><div className="ml-power"><span>{base}</span><sup>{missionId==='m2m7' ? -exponent : exponent}</sup></div><div className="ml-power-result">{missionId==='m2m7' ? '1 / '+base+'^'+exponent+' = '+(1/power).toFixed(4) : base+' × '.repeat(Math.max(0,exponent-1))+base+' = '+power}</div><p>{missionId==='m2m7' ? text(lang,'A negative exponent means reciprocal: a⁻ⁿ = 1 / aⁿ.','Un esponente negativo indica il reciproco: a⁻ⁿ = 1 / aⁿ.') : text(lang,'An exponent tells how many equal factors are multiplied.','L’esponente indica quante volte la base compare come fattore.')}</p></>}
        {missionId === 'm1m7' && <><div className="ml-factor-grid"><div><b>{a*b}</b><span>{text(lang,'First number','Primo numero')}</span></div><div><b>{a*c}</b><span>{text(lang,'Second number','Secondo numero')}</span></div></div><Result label={text(lang,'Greatest common divisor','Massimo comune divisore')} value={String(gcd(a*b,a*c))}/><Result label={text(lang,'Least common multiple','Minimo comune multiplo')} value={String(lcm(a*b,a*c))}/><p>{text(lang,'The GCD uses common prime factors with the lowest exponents; the LCM uses all prime factors with the highest exponents.','Il M.C.D. usa i fattori primi comuni con gli esponenti minimi; il m.c.m. usa tutti i fattori con gli esponenti massimi.')}</p></>}
        {missionId === 'm1m8' && <><div className="ml-digit">{a*b*c}</div><div className="ml-digit-sum">{String(a*b*c).split('').join(' + ')} = {String(a*b*c).split('').reduce((n,d)=>n+Number(d),0)}</div><div className="ml-divisibility">{[2,3,5,9,10].map(n=><span key={n}>{n}: <b>{(a*b*c)%n===0?text(lang,'yes','sì'):text(lang,'no','no')}</b></span>)}</div><p>{text(lang,'Check the last digit for 2, 5 and 10. Add the digits to test divisibility by 3 and 9.','Controlla l’ultima cifra per 2, 5 e 10. Somma le cifre per verificare la divisibilità per 3 e 9.')}</p></>}
        {missionId === 'm2m1' && <><div className="ml-fraction"><div className="ml-fraction-bar">{Array.from({length:denominator},(_,i)=><i key={i} className={i<numerator?'filled':''}/>)}</div><strong>{numerator}/{denominator} = {fraction.toFixed(3)}</strong></div><p>{text(lang,'The denominator divides the whole into equal parts; the numerator counts the selected parts.','Il denominatore divide l’intero in parti uguali; il numeratore conta le parti considerate.')}</p></>}
        {missionId === 'm2m2' && <><div className="ml-operation"><span>{numerator}/{denominator}</span><b>+</b><span>{a}/{b}</span></div><Result label={text(lang,'Common-denominator sum','Somma con denominatore comune')} value={(numerator*b+a*denominator)+' / '+(denominator*b)}/><p>{text(lang,'For addition, use a common denominator, add the numerators and keep the denominator.','Per sommare, usa un denominatore comune, somma i numeratori e mantieni il denominatore.')}</p></>}
        {missionId === 'm2m4' && <><div className="ml-operation"><span>{numerator}/{denominator}</span><b>{fraction > a/b ? '>' : fraction < a/b ? '<' : '='}</b><span>{a}/{b}</span></div><svg viewBox="0 0 300 75" role="img" aria-label={text(lang,'Two rational numbers on a zero-to-one number line','Due numeri razionali su una retta da zero a uno')}><path d="M20 35 H280" stroke="currentColor" strokeWidth="2"/><circle cx={20+clamp(fraction,0,1)*260} cy="35" r="6" fill="#45d8ff"/><circle cx={20+clamp(a/b,0,1)*260} cy="35" r="6" fill="#ff6a3d"/><text x="20" y="60" fill="currentColor" fontSize="10">0</text><text x="280" y="60" textAnchor="end" fill="currentColor" fontSize="10">1</text></svg><p>{text(lang,'Convert to a common denominator or compare the decimal values to order fractions.','Riduci allo stesso denominatore o confronta i valori decimali per ordinare le frazioni.')}</p></>}
        {missionId === 'm6m1' && <><svg viewBox="0 0 300 82" role="img" aria-label={text(lang,'Inequality solution ray on a number line','Semiretta delle soluzioni di una disequazione')}><path d="M20 37 H280" stroke="currentColor" strokeWidth="2"/><path d={'M'+(20+(integer+10)*13)+' 37 H280'} stroke="#45d8ff" strokeWidth="7" opacity=".35"/><circle cx={20+(integer+10)*13} cy="37" r="6" fill="var(--panel)" stroke="#ff6a3d" strokeWidth="3"/><path d="M270 29 L280 37 L270 45" fill="none" stroke="#45d8ff" strokeWidth="2"/><text x="20" y="62" fill="currentColor" fontSize="10">−10</text><text x="280" y="62" textAnchor="end" fill="currentColor" fontSize="10">10</text></svg><strong className="ml-eq-result">x &gt; {integer}</strong><p>{text(lang,'The open circle excludes the endpoint. The shaded ray shows values greater than the boundary.','Il cerchio vuoto esclude l’estremo. La semiretta colorata indica i valori maggiori del limite.')}</p></>}
        {missionId === 'm2m5' && <><div className="ml-percent"><div style={{width:percent+'%'}}/><b>{percent}%</b></div><Result label={text(lang,'Percent of 240','Percentuale di 240')} value={percentValue.toFixed(1)}/><p>{text(lang,'Percent means “out of 100”. Here the bar shows the selected part of the whole.','Percento significa “su 100”. La barra mostra la parte selezionata rispetto al totale.')}</p></>}
        {missionId === 'm2m6' && <><div className="ml-ratio"><span>{a}</span><b>:</b><span>{b}</span><b>=</b><span>{a*2}</span><b>:</b><span>{b*2}</span></div><p>{text(lang,'Multiply or divide both terms by the same non-zero number to create an equivalent ratio.','Moltiplica o dividi entrambi i termini per lo stesso numero diverso da zero per ottenere una proporzione equivalente.')}</p></>}
        {isSets && <><svg viewBox="0 0 300 150" role="img" aria-label={text(lang,'Two overlapping sets','Due insiemi sovrapposti')}><circle cx="118" cy="72" r="55" fill="#45d8ff" fillOpacity={setMode==='difference'?.45:.25} stroke="#45d8ff" strokeWidth="2"/><circle cx="182" cy="72" r="55" fill="#ff8fc0" fillOpacity={setMode==='union'?.45:.25} stroke="#ff8fc0" strokeWidth="2"/><text x="83" y="25" fill="currentColor" fontSize="12">A</text><text x="210" y="25" fill="currentColor" fontSize="12">B</text><text x="83" y="75" fill="currentColor" fontSize="12">1, 2</text><text x="150" y="75" fill="currentColor" fontSize="12" textAnchor="middle">3</text><text x="218" y="75" fill="currentColor" fontSize="12">4, 5</text></svg><p>{missionId==='m3m1'?text(lang,'An element belongs to a set when it satisfies the set description.','Un elemento appartiene a un insieme quando rispetta la descrizione dell’insieme.'):missionId==='m3m3'?text(lang,'A set with 3 elements has 2³ = 8 subsets, including the empty set and the set itself.','Un insieme con 3 elementi ha 2³ = 8 sottoinsiemi, compresi l’insieme vuoto e l’insieme stesso.'):text(lang,'Union includes elements in A or B; intersection includes only shared elements.','L’unione comprende gli elementi di A o B; l’intersezione comprende solo quelli comuni.')}</p></>}
        {missionId === 'm3m5' && <><div className="ml-logic"><span>P = {logicP?'V':'F'}</span><span>Q = {logicQ?'V':'F'}</span><strong>P ∧ Q = {logicP&&logicQ?'V':'F'}</strong><strong>P ∨ Q = {logicP||logicQ?'V':'F'}</strong><strong>¬P = {logicP?'F':'V'}</strong></div><p>{text(lang,'AND is true only when both statements are true. OR is true when at least one is true.','AND è vero solo quando entrambe le proposizioni sono vere. OR è vero quando almeno una è vera.')}</p></>}
        {missionId === 'm3m6' && <><div className="ml-mapping"><span>A: {a}, {b}, {c}</span><b>→</b><span>B: {a*2}, {b*2}, {c*2}</span></div><p>{text(lang,'A relation connects elements of one set to elements of another set.','Una relazione collega elementi di un insieme con elementi di un altro insieme.')}</p></>}
        {missionId === 'm3m7' && <><div className="ml-quantifiers"><strong>∀ x</strong><span>{text(lang,'for every x','per ogni x')}</span><strong>∃ x</strong><span>{text(lang,'there is at least one x','esiste almeno un x')}</span></div><p>{text(lang,'“Every student has a notebook” is universal; “There is a student wearing glasses” is existential.','“Ogni studente ha un quaderno” è universale; “Esiste uno studente con gli occhiali” è esistenziale.')}</p></>}
        {isAlgebra && <><div className="ml-algebra">{missionId==='m4m2'?<><span>{coefficient}x</span><b>+</b><span>{constant}x</span><b>=</b><strong>{coefficient+constant}x</strong></>:<><span>{coefficient} × {variable}</span><b>+</b><span>{constant}</span><b>=</b><strong>{coefficient*variable+constant}</strong></>}</div><p>{missionId==='m4m2'?text(lang,'Like terms have the same variable part: 2x + 3x = 5x. Constants combine with constants.','I termini simili hanno la stessa parte letterale: 2x + 3x = 5x. I termini noti si sommano tra loro.'):text(lang,'Substitute a number for the variable, then follow the order of operations.','Sostituisci un numero alla variabile, poi rispetta l’ordine delle operazioni.')}</p></>}
        {isEquation && <><div className="ml-balance"><div><span>{missionId==='m5m2'?coefficient+'(x + '+c+')':coefficient+'x + '+c}</span><b>⚖</b><span>{constant}</span></div><div className="ml-eq-result">x = {(missionId==='m5m2' ? constant/coefficient-c : (constant-c)/coefficient).toFixed(2)}</div></div><p>{missionId==='m5m2'?text(lang,'First expand the brackets with the distributive property, then collect like terms and isolate x.','Prima applica la proprietà distributiva alle parentesi, poi riduci i termini simili e isola x.'):text(lang,'An equation is balanced when both sides have the same value. Whatever you do to one side, do to the other.','Un’equazione è in equilibrio quando i due membri hanno lo stesso valore. Ciò che fai da una parte, fallo anche dall’altra.')}</p></>}
        {missionId === 'm2m8' && <><Result label={text(lang,'Original value','Valore iniziale')} value={variable.toFixed(3)}/><Result label={text(lang,'Rounded value','Valore arrotondato')} value={rounded.toFixed(3)}/><p>{text(lang,'Look at the digit immediately after the place you are rounding to: 5 or more rounds up.','Guarda la cifra subito dopo la posizione scelta: da 5 in poi si arrotonda per eccesso.')}</p></>}
        {missionId === 'm2m3' && <><div className="ml-decimal">{variable.toFixed(2).replace('.',',')}</div><p>{text(lang,'A decimal number can be placed on the number line between two integers. Every decimal has a place value.','Un numero decimale si colloca sulla retta tra due interi. Ogni cifra ha un valore posizionale.')}</p></>}
        {missionId === 'm3m4' && <><div className="ml-mapping"><span>A = {a}, {b}</span><b>↔</b><span>B = {b}, {c}</span></div><p>{text(lang,'A relation can be represented with arrows, ordered pairs or a table. A function gives each input exactly one output.','Una relazione si può rappresentare con frecce, coppie ordinate o una tabella. Una funzione associa a ogni input un solo output.')}</p></>}
        {missionId === 'm1m5' && <><div className="ml-operation"><span>{a}</span><b>×</b><span>{b}</span><b>+</b><strong>{a*b+c}</strong></div><p>{text(lang,'Remember the order: brackets, powers, multiplication/division, addition/subtraction.','Ricorda l’ordine: parentesi, potenze, moltiplicazioni/divisioni, addizioni/sottrazioni.')}</p></>}
      </div>

      <div className="ml-controls">
        {missionId==='m6m1'&&<Control label={text(lang,'Boundary value','Valore limite')} value={integer} min={-10} max={10} onChange={setInteger}/>}
        {['m1m1','m1m6'].includes(missionId) && <Control label={text(lang,'Number / value','Numero / valore')} value={missionId==='m1m6'?integer:variable} min={missionId==='m1m6'?-10:0} max={10} onChange={missionId==='m1m6'?setInteger:setVariable}/>}
        {missionId==='m1m2'&&<><Control label={text(lang,'First number','Primo numero')} value={a} min={0} max={20} onChange={setA}/><Control label={text(lang,'Second number','Secondo numero')} value={b} min={1} max={20} onChange={setB}/><label className="ml-control"><span>{text(lang,'Operation','Operazione')}</span><select value={operation} onChange={e=>setOperation(e.target.value as typeof operation)}><option>+</option><option>-</option><option>×</option><option>÷</option></select></label></>}
        {['m1m3','m1m7','m1m8','m3m6','m3m4','m1m5'].includes(missionId)&&<><Control label="a" value={a} min={1} max={9} onChange={setA}/><Control label="b" value={b} min={1} max={9} onChange={setB}/><Control label="c" value={c} min={1} max={9} onChange={setC}/></>}
        {['m1m4','m2m7'].includes(missionId)&&<><Control label={text(lang,'Base','Base')} value={base} min={2} max={5} onChange={setBase}/><Control label={text(lang,'Exponent','Esponente')} value={exponent} min={1} max={5} onChange={setExponent}/></>}
        {['m2m1','m2m2'].includes(missionId)&&<><Control label={text(lang,'Numerator','Numeratore')} value={numerator} min={1} max={10} onChange={n=>setNumerator(Math.min(n,denominator))}/><Control label={text(lang,'Denominator','Denominatore')} value={denominator} min={2} max={10} onChange={d=>{setDenominator(d);setNumerator(Math.min(numerator,d));}}/>{missionId==='m2m2'&&<><Control label={text(lang,'Second numerator','Secondo numeratore')} value={a} min={1} max={10} onChange={setA}/><Control label={text(lang,'Second denominator','Secondo denominatore')} value={b} min={2} max={10} onChange={setB}/></>}</>}
        {missionId==='m2m5'&&<Control label={text(lang,'Percentage','Percentuale')} value={percent} min={0} max={100} onChange={setPercent}/>}
        {missionId==='m2m6'&&<><Control label={text(lang,'First term','Primo termine')} value={a} min={1} max={10} onChange={setA}/><Control label={text(lang,'Second term','Secondo termine')} value={b} min={1} max={10} onChange={setB}/></>}
        {isSets&&<label className="ml-control"><span>{text(lang,'Highlight','Evidenzia')}</span><select value={setMode} onChange={e=>setSetMode(e.target.value as typeof setMode)}><option value="intersection">{text(lang,'Intersection','Intersezione')}</option><option value="union">{text(lang,'Union','Unione')}</option><option value="difference">{text(lang,'Difference A − B','Differenza A − B')}</option></select></label>}
        {missionId==='m3m5'&&<><label className="ml-check"><input type="checkbox" checked={logicP} onChange={e=>setLogicP(e.target.checked)}/> P {text(lang,'is true','è vera')}</label><label className="ml-check"><input type="checkbox" checked={logicQ} onChange={e=>setLogicQ(e.target.checked)}/> Q {text(lang,'is true','è vera')}</label></>}
        {isAlgebra&&<><Control label={text(lang,'Coefficient','Coefficiente')} value={coefficient} min={-5} max={5} onChange={setCoefficient}/><Control label={text(lang,'Variable x','Variabile x')} value={variable} min={-5} max={5} onChange={setVariable}/><Control label={text(lang,'Constant','Termine noto')} value={constant} min={-10} max={10} onChange={setConstant}/></>}
        {isEquation&&<><Control label={text(lang,'Coefficient of x','Coefficiente di x')} value={coefficient} min={1} max={8} onChange={setCoefficient}/><Control label={text(lang,'Right-side constant','Termine noto')} value={constant} min={1} max={20} onChange={setConstant}/><Control label={text(lang,'Value moved across','Valore da spostare')} value={c} min={0} max={10} onChange={setC}/></>}
        {missionId==='m2m8'&&<><Control label={text(lang,'Number to round','Numero da arrotondare')} value={variable} min={0} max={10} step={0.125} onChange={setVariable}/><Control label={text(lang,'Decimal places','Cifre decimali')} value={roundTo} min={0} max={3} onChange={setRoundTo}/></>}
        {missionId==='m2m3'&&<Control label={text(lang,'Decimal value','Numero decimale')} value={variable} min={0} max={10} step={0.1} onChange={setVariable}/>}
        {missionId==='m2m4'&&<><Control label={text(lang,'First numerator','Primo numeratore')} value={numerator} min={0} max={10} onChange={setNumerator}/><Control label={text(lang,'First denominator','Primo denominatore')} value={denominator} min={1} max={10} onChange={setDenominator}/><Control label={text(lang,'Second numerator','Secondo numeratore')} value={a} min={0} max={10} onChange={setA}/><Control label={text(lang,'Second denominator','Secondo denominatore')} value={b} min={1} max={10} onChange={setB}/></>}
      </div>
    </div>
    <footer className="ml-footnote">{text(lang,'Predict first, adjust one value, then describe the mathematical rule you can see.','Prima fai una previsione, modifica un valore e descrivi la regola matematica che osservi.')}</footer>
  </section>;
};
