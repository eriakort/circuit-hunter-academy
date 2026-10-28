
/* ============ v3 mini-games ============ */
/* --- password forge --- */
function gamePwd(sc,host,done){
  const common=['password','123456','qwerty','12345678','111111','abc123','iloveyou','admin','ciao','juventus','napoli','milan','inter','roma','00000'];
  host.innerHTML=`<div class="game"><div class="gtitle">${L(['Forge a strong password','Forgia una password forte'])}</div>
   <p class="muted">${L(['Practice only: never type a password you really use.','Solo allenamento: non scrivere mai una password che usi davvero.'])}</p>
   <input class="pw" id="pw" autocomplete="off" spellcheck="false" aria-label="password">
   <div class="meter"><i id="pm"></i></div><div id="pl" style="font-weight:800;min-height:24px"></div>
   <div class="checks" id="pc"></div><div class="fb" id="pF" aria-live="polite"></div></div>`;
  const rules=[[s=>s.length>=12,['At least 12 characters','Almeno 12 caratteri']],[s=>/[A-Z]/.test(s),['An uppercase letter','Una lettera maiuscola']],[s=>/[a-z]/.test(s),['A lowercase letter','Una lettera minuscola']],[s=>/\d/.test(s),['A number','Un numero']],[s=>/[^A-Za-z0-9]/.test(s),['A symbol (! ? - _ …)','Un simbolo (! ? - _ …)']],
    [s=>{const l=s.toLowerCase();return s.length>0&&!common.some(w=>l.includes(w))&&!(S.name&&l.includes(S.name.toLowerCase()));},['No common words, and not your name','Niente parole comuni, né il tuo nome']]];
  let fin=false;
  const upd=()=>{const s=$('#pw',host).value; const ok=rules.map(r=>r[0](s)); const n=ok.filter(Boolean).length;
    $('#pc',host).innerHTML=rules.map((r,i)=>`<span class="${ok[i]?'ok':'no'}">${ok[i]?'✓':'○'} ${L(r[1])}</span>`).join('');
    const col=n<3?C.bad:n<5?C.gold:C.good; $('#pm',host).style.width=(n/6*100)+'%'; $('#pm',host).style.background=col;
    $('#pl',host).textContent=s?L(n<3?['Weak','Debole']:n<5?['Medium','Media']:n<6?['Strong','Forte']:['Very strong','Fortissima']):''; $('#pl',host).style.color=col;
    if(n===6&&!fin){fin=true; const f=$('#pF',host); f.className='fb ok'; f.innerHTML=`<b>${L(['Unbreakable!','Indistruttibile!'])}</b> ${L(['Tip: a passphrase made of several words is long and easy to remember.','Consiglio: una frase fatta di più parole è lunga e facile da ricordare.'])}${xpNote(20)}`; award(20); done();}
  };
  $('#pw',host).oninput=upd; upd();
}

/* --- word-processor formatting --- */
function gameFormat(sc,host,done){
  const T=[
    {title:{b:1,i:0,u:0,al:'center',sz:24},body:{b:0,i:0,u:0,al:'left',sz:12}},
    {title:{b:1,i:0,u:1,al:'left',sz:20},body:{b:0,i:1,u:0,al:'justify',sz:12}},
    {title:{b:0,i:1,u:0,al:'right',sz:16},body:{b:1,i:0,u:0,al:'center',sz:16}},
  ];
  let r=0, part='title', st, misses=0;
  const fresh=()=>({title:{b:0,i:0,u:0,al:'left',sz:12},body:{b:0,i:0,u:0,al:'left',sz:12}});
  const css=f=>`font-weight:${f.b?700:400};font-style:${f.i?'italic':'normal'};text-decoration:${f.u?'underline':'none'};text-align:${f.al};font-size:${f.sz}px`;
  const doc=s=>`<div class="doc"><p class="t" style="${css(s.title)}">${L(['The Glitch Report','Il rapporto Glitch'])}</p><p class="bd" style="${css(s.body)}">${L(['Glitch Demons were seen in the computer lab. All hunters must report to the dojo after class.','Sono stati avvistati Demoni Glitch nel laboratorio di informatica. Tutte le cacciatrici devono presentarsi al dojo dopo le lezioni.'])}</p></div>`;
  const same=(a,b)=>['b','i','u','al','sz'].every(k=>a[k]===b[k]);
  const AL=[['left','⟸'],['center','≡'],['right','⟹'],['justify','☰']];
  const ALN={left:['left','a sinistra'],center:['centre','centrato'],right:['right','a destra'],justify:['justified','giustificato']};
  const draw=()=>{const f=st[part];
    host.innerHTML=`<div class="game"><div class="gtitle">${L(['Match the model','Copia il modello'])} (${r+1}/${T.length})</div>
     <div class="fmtgrid"><div><div class="eyebrow" style="margin-bottom:6px">${L(['Model','Modello'])}</div>${doc(T[r])}</div><div><div class="eyebrow" style="margin-bottom:6px">${L(['Your document','Il tuo documento'])}</div><div id="mine">${doc(st)}</div></div></div>
     <div class="toolbar"><span class="muted">${L(['Select:','Seleziona:'])}</span><button data-p="title" class="${part==='title'?'on':''}">${L(['Title','Titolo'])}</button><button data-p="body" class="${part==='body'?'on':''}">${L(['Body text','Testo'])}</button></div>
     <div class="toolbar"><button data-t="b" class="${f.b?'on':''}" aria-label="bold"><b>B</b></button><button data-t="i" class="${f.i?'on':''}" aria-label="italic"><i>I</i></button><button data-t="u" class="${f.u?'on':''}" aria-label="underline"><u>U</u></button>
       ${AL.map(([a,s])=>`<button data-a="${a}" class="${f.al===a?'on':''}" title="${L(ALN[a])}" aria-label="${L(ALN[a])}">${s}</button>`).join('')}
       <select id="fs" aria-label="${L(['font size','dimensione'])}">${[12,16,20,24].map(z=>`<option ${f.sz===z?'selected':''}>${z}</option>`).join('')}</select></div>
     <p class="muted" style="font-size:14px">${L(['Alignment buttons: left, centre, right, justified.','Pulsanti di allineamento: a sinistra, centrato, a destra, giustificato.'])}</p>
     <div class="fb" id="fF" aria-live="polite"></div></div>`;
    $$('[data-p]',host).forEach(b=>b.onclick=()=>{part=b.dataset.p;draw();});
    $$('[data-t]',host).forEach(b=>b.onclick=()=>{st[part][b.dataset.t]^=1;after();});
    $$('[data-a]',host).forEach(b=>b.onclick=()=>{st[part].al=b.dataset.a;after();});
    $('#fs',host).onchange=e=>{st[part].sz=+e.target.value;after();};
  };
  const after=()=>{draw(); misses++;
    if(same(st.title,T[r].title)&&same(st.body,T[r].body)){ const fb=$('#fF',host); fb.className='fb ok'; $$('.toolbar button,#fs',host).forEach(b=>b.disabled=true);
      if(r<T.length-1){fb.innerHTML=`<b>${L(['Perfect match!','Identico!'])}</b> <button class="btn cyan sm" id="fn" style="margin-left:6px">${L(['Next document','Prossimo documento'])}</button>`;$('#fn',host).onclick=()=>{r++;st=fresh();part='title';draw();};}
      else {fb.innerHTML=`<b>${L(['Formatting mastered!','Formattazione padroneggiata!'])}</b>${xpNote(20)}`;award(20);done();}}};
  st=fresh(); draw();
}

/* --- spreadsheet with real formulas --- */
const FN={SUM:'SUM',SOMMA:'SUM',AVERAGE:'AVG',MEDIA:'AVG',MAX:'MAX',MIN:'MIN',IF:'IF',SE:'IF',AND:'AND',E:'AND',OR:'OR',O:'OR',NOT:'NOT',NON:'NOT',SQRT:'SQRT',RADQ:'SQRT',POWER:'POW',POTENZA:'POW',COUNT:'COUNT','CONTA.NUMERI':'COUNT',ROUND:'ROUND',ARROTONDA:'ROUND',ABS:'ABS',ASS:'ABS'};
const SF={
  SUM:(...a)=>a.flat().filter(x=>typeof x==='number').reduce((s,x)=>s+x,0),
  AVG:(...a)=>{const v=a.flat().filter(x=>typeof x==='number');return v.reduce((s,x)=>s+x,0)/v.length;},
  MAX:(...a)=>Math.max(...a.flat().filter(x=>typeof x==='number')), MIN:(...a)=>Math.min(...a.flat().filter(x=>typeof x==='number')),
  IF:(c,a,b=false)=>c?a:b, AND:(...a)=>a.flat().every(Boolean), OR:(...a)=>a.flat().some(Boolean), NOT:x=>!x,
  SQRT:Math.sqrt, POW:Math.pow, COUNT:(...a)=>a.flat().filter(x=>typeof x==='number').length, ROUND:(x,n=0)=>Math.round(x*10**n)/10**n, ABS:Math.abs,
};
function colN(c){return c.charCodeAt(0)-64;}
function sheetEval(f,cells,depth=0){
  if(depth>25) throw new Error('loop');
  if(typeof f!=='string'||f[0]!=='=') return Array.isArray(f)?L(f):f;
  const src=f.slice(1); const semi=src.includes(';');
  const parts=src.split(/("[^"]*")/);
  const js=parts.map((p,i)=>{
    if(i%2) return JSON.stringify(p.slice(1,-1));
    let s=p.toUpperCase();
    if(semi) s=s.replace(/(\d),(\d)/g,'$1.$2').replace(/;/g,',');
    const fns=[]; s=s.replace(/([A-Z][A-Z0-9.]*)\s*\(/g,(m,n)=>{ if(!FN[n]) throw new Error('fn'); fns.push(FN[n]); return `\u0001${fns.length-1}\u0001(`; });
    const rgs=[]; s=s.replace(/\$?([A-Z])\$?(\d+)\s*:\s*\$?([A-Z])\$?(\d+)/g,(m,c1,r1,c2,r2)=>{rgs.push(`R("${c1}${r1}","${c2}${r2}")`);return `\u0002${rgs.length-1}\u0002`;});
    s=s.replace(/\$?([A-Z])\$?(\d+)/g,(m,c,r)=>`V("${c}${r}")`);
    s=s.replace(/\u0002(\d+)\u0002/g,(m,k)=>rgs[k]);
    s=s.replace(/<>/g,'!=').replace(/([^<>!=])=(?!=)/g,'$1==').replace(/\^/g,'**').replace(/&/g,'+');
    s=s.replace(/\u0001(\d+)\u0001/g,(m,k)=>'F.'+fns[k]);
    return s;
  }).join('');
  const bare=js.replace(/"(?:[^"\\]|\\.)*"/g,'').replace(/F\.[A-Z]+|\bV\b|\bR\b/g,'');
  if(/[^\d\s+\-*/().,<>=!]/.test(bare)) throw new Error('bad');
  const V=a=>{const x=cells[a]; if(x===undefined||x==='') return 0; return sheetEval(x,cells,depth+1);};
  const R=(a,b)=>{const out=[]; for(let c=colN(a[0]);c<=colN(b[0]);c++) for(let r=+a.slice(1);r<=+b.slice(1);r++) out.push(V(String.fromCharCode(64+c)+r)); return out;};
  const v=Function('F','V','R','"use strict";return ('+js+')')(SF,V,R);
  if(typeof v==='number'&&!isFinite(v)) throw new Error('nan');
  return v;
}
const shiftRows=(f,d)=>f.replace(/(?<![A-Z.])(\$?)([A-Z])(\$?)(\d+)/gi,(m,a,c,b,r)=>a+c+b+(b?r:(+r+d)));
const showV=v=>typeof v==='number'?String(Math.round(v*1e6)/1e6).replace('.',LANG==='it'?',':'.'):typeof v==='boolean'?(v?L(['TRUE','VERO']):L(['FALSE','FALSO'])):String(v);
const SHEETS={
  budget:{cols:2,cells:{A1:['Item','Voce'],B1:'€',A2:['Phone top-up','Ricarica telefono'],B2:15,A3:['Snacks','Merende'],B3:20,A4:['Bus pass','Abbonamento bus'],B4:12,A5:['Cinema','Cinema'],B5:18,A6:['Total spent','Totale spese'],A7:['Pocket money','Paghetta'],B7:80,A8:['Left over','Avanzo']},
    tasks:[{cell:'B6',expect:65,checks:[{set:{B3:30},expect:75}],text:['In B6, calculate the total spent (B2 to B5).','In B6 calcola il totale delle spese (da B2 a B5).'],hint:['Try =SUM(B2:B5)','Prova =SOMMA(B2:B5)']},
           {cell:'B8',expect:15,checks:[{set:{B7:100},expect:35}],text:['In B8, calculate what is left over: pocket money minus total spent.','In B8 calcola l\'avanzo: paghetta meno totale spese.'],hint:['Use cell addresses, not numbers: =B7-B6','Usa gli indirizzi delle celle, non i numeri: =B7-B6']}]},
  temp:{cols:2,cells:{A1:'°C',B1:'°F',A2:0,A3:25,A4:37,A5:100,A7:['Discount','Sconto'],B7:0.2,A8:['Price €','Prezzo €'],B8:['Sale price €','Prezzo scontato €'],A9:50,A10:30,A11:20},
    tasks:[{cell:'B2',expect:32,checks:[{set:{A2:10},expect:50}],fill:['B3','B4','B5'],text:['In B2, convert A2 to Fahrenheit: °F = °C × 9/5 + 32. It will be copied down automatically.','In B2 converti A2 in Fahrenheit: °F = °C × 9/5 + 32. Poi verrà copiata in basso automaticamente.'],hint:['=A2*9/5+32','=A2*9/5+32']},
           {cell:'B9',expect:40,checks:[{set:{B7:0.5},expect:25}],needs:/\$?B\$7/i,needMsg:['Correct value! But when copied down, B7 would move to B8, B9… Lock it: $B$7.','Valore giusto! Ma copiando in basso, B7 diventerebbe B8, B9… Bloccalo: $B$7.'],fill:['B10','B11'],text:['In B9, apply the discount in B7 to the price in A9. Use an absolute reference so it can be copied down.','In B9 applica lo sconto di B7 al prezzo di A9. Usa un riferimento assoluto, così si può copiare in basso.'],hint:['=A9*(1-$B$7)','=A9*(1-$B$7)']}]},
  logic:{cols:4,cells:{A1:['Name','Nome'],B1:['Grade','Voto'],C1:['Result','Esito'],A2:'Hana',B2:7,A3:'Luca',B3:5,A4:'Sara',B4:6,A6:'a',B6:'b',C6:'c',D6:'Δ',A7:1,B7:-5,C7:6},
    tasks:[{cell:'C2',expect:'OK',checks:[{set:{B2:5},expect:'NO'},{set:{B2:6},expect:'OK'}],fill:['C3','C4'],text:['In C2, show "OK" if the grade in B2 is at least 6, otherwise "NO".','In C2 mostra "OK" se il voto in B2 è almeno 6, altrimenti "NO".'],hint:['=IF(B2>=6;"OK";"NO")','=SE(B2>=6;"OK";"NO")']},
           {cell:'D7',expect:1,checks:[{set:{A7:2,B7:3,C7:-2},expect:25}],text:['In D7, calculate the discriminant Δ = b² − 4ac using A7, B7, C7.','In D7 calcola il discriminante Δ = b² − 4ac usando A7, B7, C7.'],hint:['=B7^2-4*A7*C7','=B7^2-4*A7*C7']}]},
};
function gameSheet(sc,host,done){
  const D=SHEETS[sc.set]; const cells={...D.cells}; let t=0, wrong=0; const filled={};
  const maxR=Math.max(...Object.keys(cells).concat(D.tasks.flatMap(x=>[x.cell,...(x.fill||[])])).map(a=>+a.slice(1)));
  const draw=()=>{const task=D.tasks[t];
    let rows=''; for(let r=1;r<=maxR;r++){ rows+=`<tr><th>${r}</th>`; for(let c=1;c<=D.cols;c++){const a=String.fromCharCode(64+c)+r; const raw=cells[a]; let v=''; try{v=raw===undefined?'':showV(sheetEval(raw,cells));}catch(e){v='#ERR';}
      const isTask=task&&a===task.cell; rows+=`<td class="${typeof raw==='number'||typeof raw==='string'&&raw[0]==='='?'':'txt'} ${isTask?'task':''} ${filled[a]?'done':''}" title="${typeof raw==='string'&&raw[0]==='='?raw:''}">${isTask?'?':v}</td>`;} rows+='</tr>'; }
    host.innerHTML=`<div class="game"><div class="gtitle">${L(['Live spreadsheet','Foglio di calcolo dal vivo'])}${task?` · ${t+1}/${D.tasks.length}`:''}</div>
     ${task?`<p>${L(task.text)}</p>`:''}
     <div class="sheetwrap"><table class="sheet"><tr><th></th>${Array.from({length:D.cols},(_,i)=>`<th>${String.fromCharCode(65+i)}</th>`).join('')}</tr>${rows}</table></div>
     ${task?`<form class="fbar" id="sf"><b>${task.cell}</b><input id="fx" autocomplete="off" spellcheck="false" placeholder="=…" aria-label="formula"><button class="btn sm" type="submit">${L(['Enter','Invio'])}</button></form>`:''}
     <div class="fb" id="shF" aria-live="polite"></div></div>`;
    if(task){ $('#sf',host).onsubmit=e=>{e.preventDefault(); check($('#fx',host).value.trim());}; }
  };
  const check=f=>{const task=D.tasks[t], fb=$('#shF',host); fb.className='fb no';
    const eq=(v,x)=>typeof x==='number'?(typeof v==='number'&&Math.abs(v-x)<1e-9):String(v).toUpperCase()===String(x).toUpperCase();
    if(!f.startsWith('=')){fb.textContent=L(['A formula must start with =','Una formula deve iniziare con =']);return;}
    let v; try{v=sheetEval(f,{...cells});}catch(e){fb.textContent=L(['The spreadsheet can\'t read that formula. Check brackets, cell names and separators.','Il foglio non riesce a leggere la formula. Controlla parentesi, nomi delle celle e separatori.']);wrong++;bump($('#fx',host));return;}
    if(!eq(v,task.expect)){wrong++;fb.innerHTML=`${L(['The result is','Il risultato è'])} <b>${showV(v)}</b>. ${L(['Not quite.','Non proprio.'])}${wrong>=2?` ${L(['Hint:','Suggerimento:'])} <code>${L(task.hint)}</code>`:''}`;bump($('#fx',host));return;}
    for(const ch of task.checks||[]){ const c2={...cells,...ch.set}; let v2; try{v2=sheetEval(f,c2);}catch(e){v2=null;}
      if(!eq(v2,ch.expect)){wrong++;fb.innerHTML=L(['Right number, but if the data changes your formula gives the wrong answer. Use cell addresses instead of typing the numbers.','Numero giusto, ma se cambiano i dati la formula sbaglia. Usa gli indirizzi delle celle invece di scrivere i numeri.'])+(wrong>=2?` ${L(['Hint:','Suggerimento:'])} <code>${L(task.hint)}</code>`:'');return;} }
    if(task.needs&&!task.needs.test(f)){wrong++;fb.textContent=L(task.needMsg);return;}
    cells[task.cell]=f; filled[task.cell]=1;
    (task.fill||[]).forEach(a=>{cells[a]=shiftRows(f,+a.slice(1)-+task.cell.slice(1)); filled[a]=1;});
    t++; draw(); const fb2=$('#shF',host); fb2.className='fb ok';
    fb2.innerHTML=`<b>${L(['Correct!','Esatto!'])}</b> ${task.fill?L(['Copied down with the fill handle: hover a green cell to see its formula.','Copiata in basso con il quadratino di riempimento: passa sopra una cella verde per vedere la formula.']):''}`;
    if(t>=D.tasks.length){ const xp=wrong>3?10:20; fb2.innerHTML+=`<br><b>${L(['Sheet complete!','Foglio completato!'])}</b>${xpNote(xp)}`; award(xp); done(); }
  };
  draw();
}

/* --- trace table --- */
function gameTrace(sc,host,done){
  const kw=L([['WHILE','END WHILE','WRITE'],['MENTRE','FINE MENTRE','SCRIVI']]);
  const code=`s ← 0\nx ← 1\n${kw[0]} x ≤ 4\n    s ← s + x\n    x ← x + 1\n${kw[1]}\n${kw[2]} s`;
  const ans=[[1,2],[3,3],[6,4],[10,5]];
  host.innerHTML=`<div class="game"><div class="gtitle">${L(['Fill in the trace table','Completa la tabella di traccia'])}</div>
   <pre class="code">${escH(code)}</pre>
   <p class="muted">${L(['Write the values of s and x at the END of each round of the loop.','Scrivi i valori di s e x alla FINE di ogni giro del ciclo.'])}</p>
   <table class="trace"><tr><th>${L(['round','giro'])}</th><th>s</th><th>x</th></tr><tr><td>${L(['start','inizio'])}</td><td>0</td><td>1</td></tr>
   ${ans.map((_,i)=>`<tr><td>${i+1}</td><td><input data-k="${i}-0" inputmode="numeric" aria-label="s ${i+1}"></td><td><input data-k="${i}-1" inputmode="numeric" aria-label="x ${i+1}"></td></tr>`).join('')}</table>
   <div class="row" style="justify-content:center"><span>${L(['Output (WRITE s):','Output (SCRIVI s):'])}</span><input class="ans" id="tout" style="width:90px" inputmode="numeric" aria-label="output"></div>
   <button class="btn" id="tchk">${L(['Check','Verifica'])}</button><div class="fb" id="tF" aria-live="polite"></div></div>`;
  let tries=0;
  $('#tchk',host).onclick=()=>{ tries++; let all=true;
    $$('input[data-k]',host).forEach(inp=>{const [i,j]=inp.dataset.k.split('-').map(Number); const ok=inp.value.trim()===String(ans[i][j]); inp.classList.toggle('ok',ok); inp.classList.toggle('no',!ok); if(!ok) all=false;});
    const o=$('#tout',host); const ok=o.value.trim()==='10'; o.style.borderColor=ok?C.good:C.bad; if(!ok) all=false;
    const fb=$('#tF',host);
    if(all){fb.className='fb ok';fb.innerHTML=`<b>${L(['Traced perfectly!','Traccia perfetta!'])}</b> ${L(['After round 4, x = 5 and 5 ≤ 4 is false, so the loop stops and writes 10.','Dopo il giro 4, x = 5 e 5 ≤ 4 è falso: il ciclo si ferma e scrive 10.'])}${xpNote(tries>2?10:20)}`;award(tries>2?10:20);$('#tchk',host).disabled=true;done();}
    else {fb.className='fb no';fb.textContent=L(['Red cells are wrong. Tip: in each round, first s gets s + x, then x goes up by 1.','Le celle rosse sono sbagliate. Suggerimento: in ogni giro prima s diventa s + x, poi x aumenta di 1.']);}
  };
}

/* --- predict the output --- */
function gamePredict(sc,host,done){
  const R=sc.rounds; let r=0, tries=0, score=0;
  const norm=s=>s.replace(/\r/g,'').split('\n').map(l=>l.replace(/\s+$/,'')).join('\n').trim();
  const draw=()=>{const q=R[r]; tries=0;
    host.innerHTML=`<div class="game"><div class="gtitle">${L(['Predict the output','Prevedi l\'output'])} (${r+1}/${R.length})</div>
     <pre class="code">${hl(L(q.code))}</pre>
     <label for="po" class="muted">${L(['What does Python print? (one line per print)','Cosa stampa Python? (una riga per ogni print)'])}</label>
     <textarea class="out" id="po" spellcheck="false" autocomplete="off"></textarea>
     <div class="row" style="justify-content:center"><button class="btn" id="pk">${L(['Run in my head','Esegui a mente'])}</button></div>
     <div class="fb" id="pF" aria-live="polite"></div></div>`;
    $('#pk',host).onclick=chk;
  };
  const next=()=>{ if(r<R.length-1){r++;draw();} else { const fb=$('#pF',host); fb.innerHTML+=`<br><b>${L(['All outputs predicted!','Tutti gli output previsti!'])}</b>${xpNote(score*4)}`; award(score*4); done(); } };
  const chk=()=>{const q=R[r], fb=$('#pF',host), got=norm($('#po',host).value), exp=norm(L(q.out)); tries++;
    if(got===exp){ if(tries===1) score++; fb.className='fb ok'; fb.innerHTML=`<b>${L(['Correct!','Esatto!'])}</b> ${L(q.why)}`; $('#pk',host).disabled=true;
      if(r<R.length-1){ fb.innerHTML+=` <button class="btn cyan sm" id="pn" style="margin-left:6px">${L(['Next','Avanti'])}</button>`; $('#pn',host).onclick=next; } else next(); return; }
    fb.className='fb no';
    let msg=L(['Not quite. Read the code line by line.','Non proprio. Leggi il codice riga per riga.']);
    if(got.replace(/,/g,'.')===exp) msg=L(['Almost! Python writes decimals with a dot, not a comma.','Quasi! Python scrive i decimali con il punto, non con la virgola.']);
    else if(got.replace(/["']/g,'')===exp.replace(/["']/g,'')&&got!==exp) msg=L(['Almost! print() doesn\'t show the quotes of a string.','Quasi! print() non mostra le virgolette di una stringa.']);
    fb.innerHTML=msg;
    if(tries>=2){ fb.innerHTML+=` <button class="btn ghost sm" id="ps" style="margin-left:6px">${L(['Show the answer','Mostra la risposta'])}</button>`;
      $('#ps',host).onclick=()=>{ $('#po',host).value=L(q.out); fb.className='fb ok'; fb.innerHTML=`<b>${L(['Answer:','Risposta:'])}</b> <code style="white-space:pre">${escH(L(q.out))}</code>. ${L(q.why)}`; $('#pk',host).disabled=true;
        if(r<R.length-1){ fb.innerHTML+=` <button class="btn cyan sm" id="pn" style="margin-left:6px">${L(['Next','Avanti'])}</button>`; $('#pn',host).onclick=next; } else next(); }; }
  };
  draw();
}

/* --- logic gates --- */
function gameGates(sc,host,done){
  const T=[{g:'AND',want:1},{g:'OR',want:0},{g:'NOT',want:1},{g:'OR',want:1,lock:{A:0}},{g:'AND',want:0,lock:{A:1}}];
  const OUT={AND:(a,b)=>a&b,OR:(a,b)=>a|b,NOT:a=>a?0:1};
  let t=0, A=0, B=0;
  const draw=()=>{const k=T[t]; const o=OUT[k.g](A,B);
    const rows=k.g==='NOT'?[[0],[1]]:[[0,0],[0,1],[1,0],[1,1]];
    host.innerHTML=`<div class="game"><div class="gtitle">${L(['Logic gates','Porte logiche'])} (${t+1}/${T.length})</div>
     <p>${k.lock?L([`Input A is stuck at ${k.lock.A}. `,`L'ingresso A è bloccato a ${k.lock.A}. `]):''}${L([`Make the <b>${k.g}</b> gate output <b>${k.want}</b>.`,`Fai uscire <b>${k.want}</b> dalla porta <b>${k.g}</b>.`])}</p>
     <div class="gatebox"><div style="display:flex;flex-direction:column;gap:8px"><button class="tog ${A?'on':''}" id="gA" ${k.lock?'disabled':''} aria-label="A">A=${A}</button>${k.g!=='NOT'?`<button class="tog ${B?'on':''}" id="gB" aria-label="B">B=${B}</button>`:''}</div>
      <span style="font:700 22px var(--display);color:var(--data);padding:0 10px">${k.g}</span><span style="color:var(--muted)">→</span><div class="lampout ${o?'on':''}">${o}</div></div>
     <table class="trace"><tr>${k.g==='NOT'?'<th>A</th>':'<th>A</th><th>B</th>'}<th>OUT</th></tr>${rows.map(rw=>{const cur=rw[0]===A&&(k.g==='NOT'||rw[1]===B);return `<tr style="${cur?'background:rgba(255,209,102,.18)':''}">${rw.map(x=>`<td>${x}</td>`).join('')}<td>${OUT[k.g](rw[0],rw[1]||0)}</td></tr>`;}).join('')}</table>
     <div class="fb" id="gF" aria-live="polite"></div></div>`;
    const ga=$('#gA',host); if(ga&&!k.lock) ga.onclick=()=>{A^=1;draw();};
    const gb=$('#gB',host); if(gb) gb.onclick=()=>{B^=1;draw();};
    if(o===k.want){ const fb=$('#gF',host); fb.className='fb ok'; $$('.tog',host).forEach(b=>b.disabled=true);
      if(t<T.length-1){ fb.innerHTML=`<b>${L(['Gate open!','Porta aperta!'])}</b> <button class="btn cyan sm" id="gn" style="margin-left:6px">${L(['Next gate','Prossima porta'])}</button>`; $('#gn',host).onclick=()=>{t++; const nk=T[t]; const combos=[[0,0],[0,1],[1,0],[1,1]].filter(c=>!nk.lock||c[0]===nk.lock.A); const st=combos.find(c=>OUT[nk.g](c[0],c[1])!==nk.want)||combos[0]; A=st[0]; B=st[1]; draw();}; }
      else { fb.innerHTML=`<b>${L(['All gates mastered!','Tutte le porte dominate!'])}</b>${xpNote(20)}`; award(20); done(); } }
  };
  draw();
}

/* --- stack & queue --- */
function gameStackQ(sc,host,done){
  const R=[
    {k:'stack',ops:[['push','A'],['push','B'],['push','C'],['pop']]},
    {k:'queue',ops:[['push','A'],['push','B'],['push','C'],['pop']]},
    {k:'stack',ops:[['push','A'],['push','B'],['pop'],['push','C'],['pop']]},
    {k:'queue',ops:[['push','A'],['push','B'],['pop'],['push','C'],['pop']]},
    {k:'stack',undo:true,ops:[['push','H'],['push','I'],['push','!'],['pop']]},
  ];
  let r=0, score=0;
  const sim=(k,ops)=>{const s=[]; let out=null; ops.forEach(o=>{ if(o[0]==='push') s.push(o[1]); else out=k==='stack'?s.pop():s.shift(); }); return {s,out};};
  const name=(k,op)=>k==='stack'?(op==='push'?'push':'pop'):(op==='push'?'enqueue':'dequeue');
  const draw=()=>{const q=R[r]; const before=sim(q.k,q.ops.slice(0,-1)); const choices=[...new Set(q.ops.filter(o=>o[1]).map(o=>o[1]))];
    host.innerHTML=`<div class="game"><div class="gtitle">${q.k==='stack'?L(['Stack (LIFO)','Pila (LIFO)']):L(['Queue (FIFO)','Coda (FIFO)'])} · ${r+1}/${R.length}</div>
     ${q.undo?`<p class="muted">${L(['You type H, I, ! — each keystroke is pushed onto the Undo stack. Then you press Ctrl+Z.','Scrivi H, I, ! — ogni tasto finisce sulla pila di Annulla. Poi premi Ctrl+Z.'])}</p>`:''}
     <div class="chips" style="justify-content:center">${q.ops.map((o,i)=>`<span class="chip" style="font-family:ui-monospace,monospace;${i===q.ops.length-1?'border-color:var(--gold);color:var(--gold)':''}">${name(q.k,o[0])}${o[1]?`(${o[1]})`:'()'}</span>`).join('')}</div>
     <div class="sq ${q.k==='stack'?'v':''}" id="sqv">${before.s.map(x=>`<span>${x}</span>`).join('')}</div>
     <p>${L(['Which item comes out with the last operation?','Quale elemento esce con l\'ultima operazione?'])}</p>
     <div class="cats">${choices.map(c=>`<button class="btn ghost" data-c="${c}">${c}</button>`).join('')}</div><div class="fb" id="qF" aria-live="polite"></div></div>`;
    let first=true;
    $$('[data-c]',host).forEach(b=>b.onclick=()=>{ const ans=sim(q.k,q.ops).out, fb=$('#qF',host);
      if(b.dataset.c===ans){ if(first) score++; $$('[data-c]',host).forEach(x=>x.disabled=true); b.classList.remove('ghost'); b.classList.add('right');
        const sp=[...$('#sqv',host).children].find(x=>x.textContent===ans); if(sp) sp.classList.add('out');
        fb.className='fb ok'; fb.innerHTML=`<b>${ans}!</b> ${q.k==='stack'?L(['Last in, first out.','L\'ultimo entrato esce per primo.']):L(['First in, first out.','Il primo entrato esce per primo.'])}`;
        if(r<R.length-1){fb.innerHTML+=` <button class="btn cyan sm" id="qn" style="margin-left:6px">${L(['Next','Avanti'])}</button>`;$('#qn',host).onclick=()=>{r++;draw();};}
        else {fb.innerHTML+=`<br><b>${L(['Data structures mastered!','Strutture dati dominate!'])}</b>${xpNote(score*4)}`;award(score*4);done();} }
      else { first=false; b.classList.remove('ghost'); b.classList.add('wrong'); b.disabled=true; bump(b); fb.className='fb no'; fb.textContent=q.k==='stack'?L(['In a stack, the item on TOP comes out.','In una pila esce l\'elemento in CIMA.']):L(['In a queue, the item at the FRONT comes out.','In una coda esce l\'elemento in TESTA.']); }
    });
  };
  draw();
}
