import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type Props={missionId:string};
const Choice=({active,children,onClick}:{active:boolean;children:React.ReactNode;onClick:()=>void})=><button type="button" className={`gh-jhs1-science-choice${active?' is-active':''}`} aria-pressed={active} onClick={onClick}>{children}</button>;

const Mixtures:React.FC=()=>=>{
 const [sample,setSample]=useState('salt'),[method,setMethod]=useState('filter');
 const samples:Record<string,{name:string,kind:string,detail:string}>={
 salt:{name:'Salt water',kind:'Homogeneous solution',detail:'Salt is the solute and water is the solvent. Evaporation can recover the dissolved salt.'},
 sand:{name:'Sand and water',kind:'Heterogeneous suspension',detail:'Sand does not dissolve. Let it settle, then decant or use filtration.'},
 oil:{name:'Oil and water',kind:'Heterogeneous mixture',detail:'The liquids form separate layers because they are immiscible and have different densities. A separating funnel can help.'},
 milk:{name:'Milk',kind:'Colloid',detail:'Tiny dispersed droplets make milk a colloid. Colloids can scatter light (Tyndall effect).'}
 };
 const methods:Record<string,string>={filter:'Filtration retains insoluble solids while liquid passes through.',evaporate:'Evaporation removes a liquid and can leave a dissolved solid behind.',sieve:'Sieving separates solids with different particle sizes.',magnet:'A magnet attracts magnetic materials such as iron from a mixture.'};
 const s=samples[sample];
 return <GhanaScienceVisual title={'The Mixture Separation Engineer'} description={'Identify mixture types and choose a separation method based on physical properties.'} lang="en" caption={'Never assume a classroom filter makes unsafe water drinkable. Follow trusted water-treatment guidance.'}>
 <svg viewBox="0 0 300 90" role="img" aria-label={'Mixture separation apparatus'}><path d="M30 15h55l-20 35v20H50V50z" fill="#7bdff2" stroke="#326b65" strokeWidth="2"/><path d="M145 15h55v45h-55z" fill="#e9b949" stroke="#326b65" strokeWidth="2"/><path d="M222 20h48v48h-48z" fill="#d6a6d6" stroke="#326b65" strokeWidth="2"/><path d="M38 38h39M153 35h39M230 42h32" stroke="#326b65" strokeWidth="3"/></svg>
 <div className="gh-jhs1-science-interaction"><h4>{'Investigate a mixture'}</h4><div className="gh-jhs1-science-choices">{Object.entries(samples).map(([k,v])=><Choice key={k} active={sample===k} onClick={()=>setSample(k)}>{v.name}</Choice>)}</div><div className="gh-jhs1-science-readout" aria-live="polite"><strong>{s.name} · {s.kind}</strong><p>{s.detail}</p></div><h4>{'Choose a separation technique'}</h4><div className="gh-jhs1-science-choices">{Object.entries(methods).map(([k,v])=><Choice key={k} active={method===k} onClick={()=>setMethod(k)}>{k==='filter'?'Filtration':k==='evaporate'?'Evaporation':k==='sieve'?'Sieving':'Magnetic separation'}</Choice>)}</div><div className="gh-jhs1-science-readout" aria-live="polite">{methods[method]}</div></div>
 </GhanaScienceVisual>;
};

const Atoms:React.FC=()=>=>{
 const [element,setElement]=useState('sodium');
 const atoms:Record<string,{name:string,symbol:string,z:number,a:number,charge:string}>={hydrogen:{name:'Hydrogen',symbol:'H',z:1,a:1,charge:'neutral'},carbon:{name:'Carbon',symbol:'C',z:6,a:12,charge:'neutral'},oxygen:{name:'Oxygen',symbol:'O',z:8,a:16,charge:'neutral'},sodium:{name:'Sodium',symbol:'Na',z:11,a:23,charge:'neutral'},chloride:{name:'Chloride ion',symbol:'Cl⁻',z:17,a:35,charge:'−1 (gained one electron)'}};
 const a=atoms[element],electrons=a.z+(element==='chloride'?1:0);
 return <GhanaScienceVisual title={'The Atomic Structure Navigator'} description={'Explore subatomic particles, atomic number, mass number and ions.'} lang="en" caption={'The periodic table is ordered by increasing atomic number (proton number).'}>
 <svg viewBox="0 0 300 110" role="img" aria-label={'Simplified atom model'}><ellipse cx="150" cy="55" rx="94" ry="34" fill="none" stroke="#7bdff2" strokeWidth="2"/><ellipse cx="150" cy="55" rx="94" ry="34" fill="none" stroke="#7bdff2" strokeWidth="2" transform="rotate(60 150 55)"/><circle cx="150" cy="55" r="15" fill="#e9b949"/><circle cx="242" cy="55" r="5" fill="#78a9a0"/><circle cx="105" cy="16" r="5" fill="#78a9a0"/></svg>
 <div className="gh-jhs1-science-interaction"><h4>{'Select an atom or ion'}</h4><div className="gh-jhs1-science-choices">{Object.entries(atoms).map(([k,v])=><Choice key={k} active={element===k} onClick={()=>setElement(k)}>{v.name} ({v.symbol})</Choice>)}</div><div className="gh-jhs1-science-readout" aria-live="polite"><strong>{a.name} · {a.symbol}</strong><p>{'Atomic number (protons)'}: {a.z}</p><p>{'Mass number'}: {a.a}</p><p>{'Neutrons = mass number − atomic number'}: {a.a-a.z}</p><p>{'Electrons'}: {electrons} · {'Charge'}: {a.charge}</p></div></div>
 </GhanaScienceVisual>;
};

const Cells:React.FC=()=>=>{
 const [kind,setKind]=useState('bacteria');
 const cells:Record<string,{name:string,nucleus:string,examples:string,shared:string}>={bacteria:{name:'Prokaryotic cell',nucleus:'No membrane-bound nucleus; DNA is in a nucleoid region.',examples:'Bacteria',shared:'Cell membrane, cytoplasm, ribosomes and genetic material.'},plant:{name:'Plant eukaryotic cell',nucleus:'Has a membrane-bound nucleus and membrane-bound organelles.',examples:'Plants; photosynthetic tissues often contain chloroplasts, and plant cells typically have a cellulose wall and large vacuole.',shared:'Cell membrane, cytoplasm, ribosomes and genetic material.'},animal:{name:'Animal eukaryotic cell',nucleus:'Has a membrane-bound nucleus and membrane-bound organelles.',examples:'Animals, including humans.',shared:'Cell membrane, cytoplasm, ribosomes and genetic material.'}};
 const c=cells[kind];
 return <GhanaScienceVisual title={'The Cell Type Investigator'} description={'Compare prokaryotic and eukaryotic cells and identify structures shared by both.'} lang="en" caption={'Some microorganisms are useful, while others can cause disease. Handwashing and safe food handling reduce risk.'}>
 <svg viewBox="0 0 300 100" role="img" aria-label={'Simplified cell diagrams'}><ellipse cx="75" cy="50" rx="48" ry="30" fill="#d9c7a4" stroke="#326b65" strokeWidth="3"/><path d="M42 47q20-22 55 2" stroke="#326b65" strokeWidth="3" fill="none"/><circle cx="220" cy="50" r="34" fill="#a6d8b5" stroke="#326b65" strokeWidth="3"/><circle cx="220" cy="50" r="12" fill="#7d6ba6"/><circle cx="205" cy="38" r="4" fill="#e9b949"/></svg>
 <div className="gh-jhs1-science-interaction"><h4>{'Inspect a cell type'}</h4><div className="gh-jhs1-science-choices">{Object.entries(cells).map(([k,v])=><Choice key={k} active={kind===k} onClick={()=>setKind(k)}>{v.name}</Choice>)}</div><div className="gh-jhs1-science-readout" aria-live="polite"><strong>{c.name}</strong><p>{c.nucleus}</p><p><b>{'Examples and features'}:</b> {c.examples}</p><p><b>{'Structures shared by both cell types'}:</b> {c.shared}</p></div></div>
 </GhanaScienceVisual>;
};

export const GhanaJhs2DiversityVisual:React.FC<Props>=({missionId})=>{
 if(missionId==='gh-jhs2-science-mixture-separation') return <Mixtures />;
 if(missionId==='gh-jhs2-science-atomic-structure') return <Atoms />;
 if(missionId==='gh-jhs2-science-cell-types') return <Cells />;
 return null;
};
