// @ts-nocheck
import { Language, Mission, Scene } from "../types";
import { L as origL, PILL as origPILL, rich as origRich, cards as origCards, ICON, C, esc, demonSVG, U } from "../helpers";
import { VIS } from "./visuals";
import { JN, BOARD, ROBOT_LEVELS, BUILD, FN, SF } from "./gameData";

let LANG: Language = "en";
let CURRENT_MISSION: Mission;
let IN_FIRST_TIME = false;
let ON_AWARD = (xp: number) => {};
const REDUCED = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const $ = (s: string, el: any = document) => el.querySelector(s);
const $$ = (s: string, el: any = document) => [...el.querySelectorAll(s)];
const L = (x: any) => origL(x, LANG);
const shuffle = (a: any[]) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const inMissionFirstTime = () => IN_FIRST_TIME;
const award = (n: number) => ON_AWARD(n);

function initPowercut(done){
  let st=0; const b=$('#cut');
  b.onclick=()=>{
    if(st===0){ $('#ramFiles').classList.add('gone'); $('#pwr').textContent=L(['POWER OFF','SPENTO']); $('#pwr').classList.add('off'); b.textContent=L(['Turn the power back on','Riaccendi']); st=1; }
    else if(st===1){ $('#ramFiles').classList.remove('gone'); $('#ramFiles').innerHTML=`<span class="file" style="opacity:.7">${L(['(empty: the unsaved draft is gone)','(vuota: la bozza non salvata è sparita)'])}</span>`; $('#pwr').textContent=L(['POWER ON','ACCESO']); $('#pwr').classList.remove('off'); b.textContent=L(['Run it again','Riprova']); st=2; done(); }
    else renderScene();
  };
}
function initBoard(done){
  const info=$('#boardInfo');
  const zones=$$('.zone');
  const explored=new Set<string>();
  const total=zones.length;
  let completed=false;
  const updateProgress=()=>{
    const count=explored.size;
    const progress=L([`Components explored: ${count} / ${total}`,`Componenti esplorati: ${count} / ${total}`]);
    info.setAttribute('aria-live','polite');
    info.innerHTML+=`<p class="muted" style="margin-top:10px">${progress}</p>`;
    if(count===total && !completed){
      completed=true;
      info.innerHTML+=`<p class="fb ok">${L(['Board scan complete! You can continue.','Esplorazione completata! Puoi continuare.'])}</p>`;
      done();
    }
  };
  zones.forEach(z=>{
    const show=()=>{
      zones.forEach(o=>o.classList.remove('on'));
      z.classList.add('on');
      const d=BOARD[z.dataset.k];
      explored.add(z.dataset.k);
      info.innerHTML=`<b class="step">${L(d.n)}</b><p style="margin-top:6px">${L(d.t)}</p>`;
      updateProgress();
    };
    z.onclick=show;
    z.onkeydown=e=>{ if(e.key==='Enter'||e.key===' '){e.preventDefault();show();} };
  });
}
function stepper(host,steps,draw,done){
  host.insertAdjacentHTML('beforeend',`<div class="narr" id="sN" aria-live="polite"></div><div class="stepbar"><button class="btn ghost sm" id="sB">${L(U.prev)}</button><button class="btn cyan sm" id="sF">${L(U.next)}</button></div>`);
  let i=0; const go=()=>{const s=steps[i]; draw(s); $('#sN',host).innerHTML=`<b class="step">${L(s.h)}</b>${L(s.t)}`; $('#sB',host).disabled=i===0; $('#sF',host).disabled=i===steps.length-1; if(i===steps.length-1) done();};
  $('#sB',host).onclick=()=>{i--;go();}; $('#sF',host).onclick=()=>{i++;go();}; go();
}
function sceneFDE(sc,host,done){
  host.innerHTML=VIS.cpu();
  const ST=[
    {on:[],cu:'…',alu:'—',r:['0001','—','—'],h:['READY','PRONTI'],t:['The Address register points to RAM address 0001, where the next instruction waits.','Il registro Indirizzo punta all\'indirizzo 0001 della RAM, dove aspetta la prossima istruzione.']},
    {on:['row1','bus'],cu:'…',alu:'—',r:['0002','ADD 5, 3','—'],h:['1 · FETCH','1 · FETCH (prelievo)'],t:['The CPU copies the instruction at 0001 from RAM, along the bus, into its Instruction register. The Address register moves on to 0002.','La CPU copia l\'istruzione all\'indirizzo 0001 dalla RAM, attraverso il bus, nel registro Istruzione. Il registro Indirizzo passa a 0002.']},
    {on:['cu'],cu:'ADD → ALU',alu:'…',r:['0002','ADD 5, 3','—'],h:['2 · DECODE','2 · DECODE (decodifica)'],t:['The Control Unit reads "ADD 5, 3" and works out what it means: add two numbers. It gets the ALU ready.','L\'unità di controllo legge "ADD 5, 3" e capisce cosa significa: sommare due numeri. Prepara l\'ALU.']},
    {on:['alu','reg'],cu:'ADD → ALU',alu:'5 + 3 = 8',r:['0002','ADD 5, 3','8'],h:['3 · EXECUTE','3 · EXECUTE (esecuzione)'],t:['The ALU does the maths. The answer, 8, goes into the Result register.','L\'ALU fa il calcolo. Il risultato, 8, va nel registro Risultato.']},
    {on:['row2','bus'],cu:'…',alu:'—',r:['0003','SHOW','8'],h:['REPEAT','SI RICOMINCIA'],t:['The cycle starts again with the instruction at 0002. A modern CPU repeats this billions of times a second.','Il ciclo ricomincia con l\'istruzione all\'indirizzo 0002. Una CPU moderna lo ripete miliardi di volte al secondo.']},
  ];
  stepper(host,ST,s=>{
    ['cu','alu','reg','row1','row2'].forEach(id=>$('#'+id,host).classList.toggle('on',s.on.includes(id)));
    const busOn=s.on.includes('bus'); ['bus1','bus2'].forEach(id=>{const p=$('#'+id,host);p.setAttribute('stroke',busOn?C.ember:C.line);p.classList.toggle('flow',busOn);});
    $('#cuT',host).textContent=s.cu;$('#aluT',host).textContent=s.alu;s.r.forEach((v,k)=>$('#r'+(k+1),host).textContent=v);
  },done);
}
function sceneJourney(sc,host,done){
  host.innerHTML=VIS.journey();
  let stage=0, selectedInput=null, selectedOutput=null, completed=false, awarded=false;
  const inputs=[
    {id:'keyboard',label:['Keyboard','Tastiera'],detail:['Type a short note.','Scrivi una breve nota.'],node:'Keyboard'},
    {id:'microphone',label:['Microphone','Microfono'],detail:['Record a spoken reminder.','Registra un promemoria vocale.'],node:'Microphone'},
    {id:'touchscreen',label:['Touchscreen','Touchscreen'],detail:['Draw or tap a shape.','Disegna o tocca una forma.'],node:'Touchscreen'}
  ];
  const outputs=[
    {id:'monitor',label:['Monitor','Monitor'],detail:['Show text or an image.','Mostra testo o un’immagine.']},
    {id:'speaker',label:['Speakers','Altoparlanti'],detail:['Play recorded sound.','Riproduci il suono registrato.']},
    {id:'printer',label:['Printer','Stampante'],detail:['Produce a paper copy.','Stampa una copia su carta.']}
  ];
  const expectedOutput=()=>selectedInput==='microphone'?'speaker':'monitor';
  const setNodeLabel=(id,value)=>{
    const node=$('#jn-'+id,host);
    if(node){const labels=node.querySelectorAll('text');const label=id==='mon'?labels[labels.length-1]:labels[0];if(label)label.textContent=value;}
  };
  const activate=(keys,at,symbol='')=>{
    ['kb','cpu','ram','gpu','mon','ssd'].forEach(k=>{
      const el=$('#jn-'+k,host);
      if(el)el.classList.toggle('on',keys.includes(k));
    });
    const p=JN[at]||JN.kb, dot=$('#jdot',host);
    if(dot)dot.style.transform=`translate(${p[0]}px,${p[1]+(at==='mon'?-52:-38)}px)`;
    const screen=$('#mscr',host);if(screen)screen.textContent=symbol;
  };
  const button=(label,onClick,kind='ghost')=>{
    const b=document.createElement('button');b.type='button';b.className='btn '+kind+' sm';b.textContent=label;b.addEventListener('click',onClick);return b;
  };
  const panel=(heading,copy)=>{
    const wrap=document.createElement('div');wrap.className='game';
    const h=document.createElement('div');h.className='gtitle';h.textContent=heading;wrap.appendChild(h);
    const p=document.createElement('p');p.className='muted';p.textContent=copy;wrap.appendChild(p);
    return wrap;
  };
  const feedback=(parent,copy,ok=false)=>{
    const el=document.createElement('div');el.className='fb '+(ok?'ok':'no');el.setAttribute('aria-live','polite');el.textContent=copy;parent.appendChild(el);return el;
  };
  const choiceGroup=(parent,items,onChoose)=>{
    const group=document.createElement('div');group.className='cats';group.setAttribute('role','group');
    items.forEach(item=>group.appendChild(button(item.label,item.id?()=>onChoose(item.id):item.onClick,'ghost')));
    parent.appendChild(group);
  };
  const show=(heading,copy,keys,at,symbol='')=>{
    activate(keys,at,symbol);
    const wrap=panel(heading,copy);host.appendChild(wrap);return wrap;
  };
  const recapItems=(list,items)=>items.forEach(item=>{const li=document.createElement('li');li.textContent=item;list.appendChild(li);});
  const draw=()=>{
    host.querySelectorAll('.journey-task').forEach(el=>el.remove());
    if(stage===0){
      setNodeLabel('kb',L(['Input device','Periferica input']));
      setNodeLabel('mon',L(['Output','Output']));
      const wrap=show(L(['1 · Choose an input device','1 · Scegli una periferica di input']),
        L(['You are creating something to keep. How will information enter the computer?','Stai creando qualcosa da conservare. Come entreranno le informazioni nel computer?']),[], 'kb');
      wrap.classList.add('journey-task');
      choiceGroup(wrap,inputs.map(x=>({id:x.id,label:L(x.label)+' — '+L(x.detail)})),id=>{
        selectedInput=id;const item=inputs.find(x=>x.id===id);setNodeLabel('kb',L(item.label));stage=1;draw();
      });
    }else if(stage===1){
      const item=inputs.find(x=>x.id===selectedInput);
      const wrap=show(L(['2 · Input travels to the computer','2 · L’input entra nel computer']),
        L([item.label[0]+' captures your action and converts it into digital data (bits). The data travels through a connection and the system buses.',''+item.label[1]+' rileva la tua azione e la converte in dati digitali (bit). I dati viaggiano attraverso una connessione e i bus del sistema.']),['kb','cpu'],'cpu');
      wrap.classList.add('journey-task');
      wrap.appendChild(button(L(['Continue to processing','Continua all’elaborazione']),()=>{stage=2;draw();},'cyan'));
    }else if(stage===2){
      const wrap=show(L(['3 · What does the CPU do?','3 · Cosa fa la CPU?']),
        L(['The CPU fetches and decodes instructions, then executes them. RAM temporarily holds the open work and data the CPU is using. Choose the CPU’s main role.','La CPU preleva e decodifica le istruzioni, poi le esegue. La RAM conserva temporaneamente il lavoro aperto e i dati usati dalla CPU. Scegli il ruolo principale della CPU.']),['cpu','ram'],'ram');
      wrap.classList.add('journey-task');
      const fb=feedback(wrap,L(['Choose the best description.','Scegli la descrizione migliore.']));
      choiceGroup(wrap,[
        {id:'process',label:L(['Process instructions and data','Elaborare istruzioni e dati'])},
        {id:'save',label:L(['Keep files permanently','Conservare i file in modo permanente'])},
        {id:'display',label:L(['Show images on the screen','Mostrare immagini sullo schermo'])}
      ],id=>{
        if(id==='process'){fb.className='fb ok';fb.textContent=L(['Correct! The CPU processes; RAM temporarily holds the active work.','Corretto! La CPU elabora; la RAM conserva temporaneamente il lavoro attivo.']);const next=button(L(['Choose an output device','Scegli una periferica di output']),()=>{stage=3;draw();},'cyan');wrap.appendChild(next);next.focus();}
        else{fb.className='fb no';fb.textContent=L(['Not quite. The CPU executes instructions; storage and output devices have different jobs. Try again.','Non proprio. La CPU esegue istruzioni; memoria di massa e periferiche di output hanno funzioni diverse. Riprova.']);}
      });
    }else if(stage===3){
      const expected=expectedOutput();
      const wrap=show(L(['4 · Choose an output device','4 · Scegli una periferica di output']),
        L(['Your result is ready. Which device is the best match for this activity?','Il risultato è pronto. Quale dispositivo è più adatto a questa attività?']),['cpu','gpu','mon'],'mon',
        selectedInput==='microphone'?'♪':'A');
      wrap.classList.add('journey-task');
      const fb=feedback(wrap,L(['Choose the device that presents your result.','Scegli il dispositivo che presenta il risultato.']));
      choiceGroup(wrap,outputs.map(x=>({id:x.id,label:L(x.label)+' — '+L(x.detail)})),id=>{
        if(id===expected){selectedOutput=id;setNodeLabel('mon',L(outputs.find(x=>x.id===id).label));fb.className='fb ok';fb.textContent=L(['Correct! Output devices present information from the computer.','Corretto! Le periferiche di output presentano le informazioni elaborate dal computer.']);const next=button(L(['Decide whether to save','Decidi se salvare']),()=>{stage=4;draw();},'cyan');wrap.appendChild(next);next.focus();}
        else{fb.className='fb no';fb.textContent=L(['Try again. Match the output to the information you created.','Riprova. Abbina l’output alle informazioni che hai creato.']);}
      });
    }else if(stage===4){
      const wrap=show(L(['5 · Keep your work','5 · Conserva il tuo lavoro']),
        L(['You want to use this note, recording or drawing tomorrow. What should you do so it survives a power cut?','Vuoi usare domani questa nota, registrazione o disegno. Cosa devi fare perché non vada perso se manca la corrente?']),['ram','ssd'],'ssd');
      wrap.classList.add('journey-task');
      const fb=feedback(wrap,L(['Choose what happens to the work.','Scegli cosa succede al lavoro.']));
      choiceGroup(wrap,[
        {id:'save',label:L(['Save it to the SSD / storage','Salvalo su SSD / memoria di massa'])},
        {id:'ram',label:L(['Leave it only in RAM','Lascialo solo nella RAM'])}
      ],id=>{
        if(id==='save'){fb.className='fb ok';fb.textContent=L(['Correct! Saving copies data from volatile RAM to non-volatile storage.','Corretto! Il salvataggio copia i dati dalla RAM volatile alla memoria non volatile.']);const next=button(L(['Review the complete journey','Rivedi il percorso completo']),()=>{stage=5;draw();},'cyan');wrap.appendChild(next);next.focus();}
        else{fb.className='fb no';fb.textContent=L(['If the power is lost, RAM is cleared. Save the work to non-volatile storage.','Se manca la corrente, la RAM si svuota. Salva il lavoro nella memoria non volatile.']);}
      });
    }else{
      const wrap=show(L(['6 · Your complete data journey','6 · Il tuo percorso completo dei dati']),
        L(['Input → transfer → CPU processing ↔ RAM → output → storage. You made each decision and followed the data all the way through.','Input → trasferimento → elaborazione CPU ↔ RAM → output → memoria di massa. Hai preso ogni decisione e seguito i dati lungo tutto il percorso.']),['kb','cpu','ram','gpu','mon','ssd'],'ssd','✓');
      wrap.classList.add('journey-task');
      const recap=document.createElement('ol');recap.style.margin='12px 0';recap.style.paddingLeft='24px';
      recapItems(recap,[
        L([inputs.find(x=>x.id===selectedInput).label[0]+' sends information into the computer.',''+inputs.find(x=>x.id===selectedInput).label[1]+' invia informazioni al computer.']),
        L(['The CPU processes the data; RAM temporarily holds active work.','La CPU elabora i dati; la RAM conserva temporaneamente il lavoro attivo.']),
        L([outputs.find(x=>x.id===selectedOutput).label[0]+' presents the result.',''+outputs.find(x=>x.id===selectedOutput).label[1]+' presenta il risultato.']),
        L(['Saving copies the work to non-volatile storage.','Il salvataggio copia il lavoro nella memoria non volatile.'])
      ]);wrap.appendChild(recap);
      wrap.appendChild(button(L(['Complete activity','Completa attività']),()=>{if(!completed){completed=true;if(!awarded){awarded=true;award(25);}done();}},'cyan'));
    }
  };
  draw();
}

/* ============ mini-games ============ */
function bump(el){el.classList.remove('shake');void el.offsetWidth;el.classList.add('shake');}
const xpNote=n=>inMissionFirstTime()?` +${n} XP`:'';
function gameOrder(sc,host,done){
  const items=shuffle(sc.steps.map((t,i)=>({t:L(t),i}))); let next=0, misses=0;
  host.innerHTML=`<div class="game"><div class="gtitle">${L(sc.title)}</div><p class="muted">${L(['Tap the steps in the correct order.','Tocca i passi nell\'ordine giusto.'])}</p>
    <div class="ord"><div><div class="eyebrow" style="margin-bottom:8px">${L(['Your order','Il tuo ordine'])}</div><ol id="oP"></ol></div><div class="pool" id="oQ"></div></div><div class="fb" id="oF" aria-live="polite"></div></div>`;
  const fb=$('#oF',host);
  items.forEach(it=>{const b=document.createElement('button');b.className='btn'+(sc.code?' mono':'');b.textContent=it.t;
    b.onclick=()=>{
      if(it.i===next){next++;b.remove();const li=document.createElement('li');li.textContent=it.t;if(sc.code)li.className='mono';$('#oP',host).appendChild(li);
        fb.className='fb ok'; fb.textContent=L(['Correct!','Giusto!']);
        if(next===items.length){const xp=misses?10:20; fb.textContent=L(['Sequence complete!','Sequenza completa!'])+xpNote(xp); award(xp); done();}}
      else {misses++;bump(b);fb.className='fb no';fb.textContent=L(['Not yet. ','Non ancora. '])+L(sc.hint);}
    };$('#oQ',host).appendChild(b);});
}
function gameSort(sc,host,done){
  const items=shuffle(sc.items.slice()); let i=0, score=0;
  const draw=()=>{
    if(i>=items.length){host.innerHTML=`<div class="game"><div class="gtitle">${L(['Sorted!','Fatto!'])}</div><p>${L(['First-try score','Punteggio al primo tentativo'])}: <b>${score} / ${items.length}</b>.${xpNote(score*3)}</p><p class="muted">${L(['Press Continue when you\'re ready.','Premi Continua quando sei pronta.'])}</p></div>`;award(score*3);done();return;}
    const it=items[i]; let first=true;
    host.innerHTML=`<div class="game"><div class="gtitle">${L(sc.title)}</div><div class="count">${i+1} / ${items.length} · ${L(['score','punti'])} ${score}</div>
      <div class="item">${ICON(it.i)}<div class="iname">${L(it.n)}</div></div>
      <div class="cats">${sc.cats.map((c,k)=>`<button class="btn ghost cat" data-k="${k}">${L(c)}</button>`).join('')}</div>
      <div class="fb" id="sF" aria-live="polite"></div></div>`;
    const fb=$('#sF',host);
    $$('.cat',host).forEach(b=>b.onclick=()=>{
      if(+b.dataset.k===it.c){ if(first) score++; $$('.cat',host).forEach(x=>x.disabled=true); b.classList.remove('ghost'); b.classList.add('right');
        fb.className='fb ok'; fb.innerHTML=`<b>${L(['Yes!','Sì!'])}</b> ${L(it.why)} <div style="margin-top:10px"><button class="btn cyan sm" id="sN">${i===items.length-1?L(['Finish','Fine']):L(['Next item','Avanti'])}</button></div>`;
        $('#sN',host).onclick=()=>{i++;draw();}; $('#sN',host).focus({preventScroll:true}); }
      else { first=false; b.classList.remove('ghost'); b.classList.add('wrong'); b.disabled=true; bump(b); fb.className='fb no'; fb.textContent=L(['Not quite. Think again and try another one.','Non proprio. Ripensaci e prova un\'altra risposta.']); }
    });
  };
  draw();
}
function gameBuild(sc,host,done){
  let sel=null, placed=0, misses=0; const filled={};
  host.innerHTML=`<div class="game"><div class="gtitle">${L(['Build the PC','Monta il PC'])}</div><p class="muted">${L(['Pick a part, then tap where it belongs on the motherboard.','Scegli un componente, poi tocca il punto della scheda madre dove va montato.'])}</p>
    <div class="tray">${BUILD.parts.map(p=>`<button class="pbtn" data-k="${p.k}">${ICON(p.i)}${L(p.n)}</button>`).join('')}</div>
    <div class="board">${Object.entries(BUILD.slots).map(([k,n])=>`<button class="slot" data-k="${k}" style="grid-area:${k}">${L(n)}</button>`).join('')}</div>
    <div class="fb" id="bF" aria-live="polite"></div></div>`;
  const fb=$('#bF',host);
  $$('.pbtn',host).forEach(b=>b.onclick=()=>{$$('.pbtn',host).forEach(x=>x.classList.remove('sel'));b.classList.add('sel');sel=b.dataset.k;fb.className='fb';fb.textContent=L(['Holding: ','In mano: '])+b.textContent.trim();});
  $$('.slot',host).forEach(s=>s.onclick=()=>{
    const k=s.dataset.k; if(filled[k]) return;
    if(!sel){fb.className='fb no';fb.textContent=L(['Pick a part from the tray first.','Prima scegli un componente.']);bump(s);return;}
    if(sel==='cool'&&k==='cool'&&!filled.cpu){fb.className='fb no';fb.textContent=L(['The cooler sits on top of the CPU. Place the CPU first!','Il dissipatore va sopra la CPU. Prima monta la CPU!']);bump(s);return;}
    if(sel===k){filled[k]=true;placed++;const p=BUILD.parts.find(p=>p.k===k);s.classList.add('filled');s.innerHTML=`${L(p.n)}<br><small>${L(BUILD.slots[k])}</small>`;
      $(`.pbtn[data-k="${k}"]`,host).hidden=true; sel=null; fb.className='fb ok'; fb.textContent=L(BUILD.hint[k]);
      if(placed===BUILD.parts.length){const xp=misses>2?10:20;fb.innerHTML=`<b>${L(['The PC is built!','Il PC è montato!'])}</b>${xpNote(xp)}`;award(xp);done();}}
    else {misses++;bump(s);fb.className='fb no';fb.textContent=`${L(BUILD.slots[k])}? ${L(['Hint: ','Suggerimento: '])}${L(BUILD.hint[sel])}`;}
  });
}
/* --- robot algorithm game --- */
const ROBOT_LEVELS=[
  {n:5,start:[0,2,1],goal:[4,2],walls:[]},
  {n:5,start:[0,4,1],goal:[4,4],walls:[[2,2],[2,3],[2,4]]},
  {n:6,start:[0,5,1],goal:[5,0],walls:[[1,4],[1,5],[0,2],[1,2],[2,2],[4,3],[4,2],[4,1]]},
];
function gameRobot(sc,host,done){
  let lv=0, prog=[], running=false, totalErr=0;
  const CMD={F:['Forward','Avanti'],L:['Turn left','Gira a sinistra'],R:['Turn right','Gira a destra']};
  const SHORT={F:['FWD','AVANTI'],L:['LEFT','SX'],R:['RIGHT','DX']};
  const hero=d=>`<svg viewBox="0 0 40 40" class="hero" style="transform:rotate(${d*90}deg)"><polygon points="20,4 34,34 20,26 6,34" fill="${C.data}" stroke="#fff" stroke-width="2"/></svg>`;
  const draw=(pos,trail=[],crash=null)=>{
    const Lv=ROBOT_LEVELS[lv]; let cells='';
    for(let y=0;y<Lv.n;y++) for(let x=0;x<Lv.n;x++){
      const wall=Lv.walls.some(w=>w[0]===x&&w[1]===y), goal=Lv.goal[0]===x&&Lv.goal[1]===y, here=pos[0]===x&&pos[1]===y;
      const tr=trail.some(t=>t[0]===x&&t[1]===y), cr=crash&&crash[0]===x&&crash[1]===y;
      cells+=`<div class="rc ${wall?'wall':''} ${tr?'trail':''} ${cr?'crash':''}">${here?hero(pos[2]):goal?demonSVG((CURRENT_MISSION ? CURRENT_MISSION.hue : 220),2,2,''):''}</div>`;}
    $('#rg',host).style.setProperty('--n',Lv.n); $('#rg',host).innerHTML=cells;
  };
  const progHTML=(hl=-1)=>prog.length?prog.map((c,i)=>`<span class="cmd ${i===hl?'run':''}">${i+1}. ${L(SHORT[c])}</span>`).join(''):`<span class="muted" style="font-size:14px">${L(['Your algorithm is empty. Add commands below.','Il tuo algoritmo è vuoto. Aggiungi i comandi qui sotto.'])}</span>`;
  const setup=()=>{
    prog=[];
    host.innerHTML=`<div class="game"><div class="gtitle">${L(['Program the robot','Programma il robot'])} · ${L(['Level','Livello'])} ${lv+1}/3</div>
     <div class="robo"><div class="rgrid" id="rg"></div><div class="rside">
      <div class="eyebrow">${L(['Your algorithm','Il tuo algoritmo'])}</div><div class="prog" id="pg"></div>
      <div class="cmdbar">${Object.keys(CMD).map(k=>`<button class="btn ghost sm" data-c="${k}">${L(CMD[k])}</button>`).join('')}</div>
      <div class="cmdbar"><button class="btn sm" id="run">${L(['Run','Esegui'])}</button><button class="btn ghost sm" id="undo">${L(['Undo','Annulla'])}</button><button class="btn ghost sm" id="clr">${L(['Clear','Cancella'])}</button></div>
      <div class="fb" id="rF" aria-live="polite">${L(['The arrow shows which way the robot is facing.','La freccia indica la direzione in cui guarda il robot.'])}</div></div></div></div>`;
    draw(ROBOT_LEVELS[lv].start); $('#pg',host).innerHTML=progHTML();
    $$('[data-c]',host).forEach(b=>b.onclick=()=>{if(running||prog.length>=24)return;prog.push(b.dataset.c);$('#pg',host).innerHTML=progHTML();});
    $('#undo',host).onclick=()=>{if(running)return;prog.pop();$('#pg',host).innerHTML=progHTML();};
    $('#clr',host).onclick=()=>{if(running)return;prog=[];$('#pg',host).innerHTML=progHTML();draw(ROBOT_LEVELS[lv].start);};
    $('#run',host).onclick=run;
  };
  const run=()=>{
    if(running||!prog.length) return; running=true;
    const Lv=ROBOT_LEVELS[lv]; let [x,y,d]=Lv.start; const trail=[]; let i=0; const fb=$('#rF',host); fb.className='fb'; fb.textContent=L(['Running…','Esecuzione…']);
    const step=()=>{
      if(i>=prog.length){ running=false;
        if(x===Lv.goal[0]&&y===Lv.goal[1]) return win();
        totalErr++; fb.className='fb no'; fb.textContent=L(['The algorithm ended but the robot didn\'t reach the demon. Debug it: add or change commands.','L\'algoritmo è finito ma il robot non ha raggiunto il demone. Fai debug: aggiungi o cambia comandi.']); return; }
      const c=prog[i];
      if(c==='L') d=(d+3)%4; else if(c==='R') d=(d+1)%4;
      else { const nx=x+[0,1,0,-1][d], ny=y+[-1,0,1,0][d];
        if(nx<0||ny<0||nx>=Lv.n||ny>=Lv.n||Lv.walls.some(w=>w[0]===nx&&w[1]===ny)){ draw([x,y,d],trail,[Math.min(Math.max(nx,0),Lv.n-1),Math.min(Math.max(ny,0),Lv.n-1)]); $('#pg',host).innerHTML=progHTML(i);
          running=false; totalErr++; fb.className='fb no'; fb.textContent=L([`Bug at command ${i+1}: the robot crashed! Fix that step and run again.`,`Bug al comando ${i+1}: il robot si è schiantato! Correggi quel passo e riprova.`]); return; }
        trail.push([x,y]); x=nx; y=ny; }
      draw([x,y,d],trail); $('#pg',host).innerHTML=progHTML(i); i++;
      if(x===Lv.goal[0]&&y===Lv.goal[1]&&i>=prog.length){ running=false; return win(); }
      setTimeout(step,REDUCED?60:380);
    };
    const win=()=>{ fb.className='fb ok';
      if(lv<ROBOT_LEVELS.length-1){ fb.innerHTML=`<b>${L(['Demon reached!','Demone raggiunto!'])}</b> ${L([`Your algorithm used ${prog.length} commands.`,`Il tuo algoritmo ha usato ${prog.length} comandi.`])} <button class="btn cyan sm" id="nl" style="margin-left:6px">${L(['Next level','Livello successivo'])}</button>`; $('#nl',host).onclick=()=>{lv++;setup();}; }
      else { const xp=totalErr>3?15:25; fb.innerHTML=`<b>${L(['All three levels solved! You debugged like a pro.','Tutti e tre i livelli risolti! Hai fatto debug come una professionista.'])}</b>${xpNote(xp)}`; award(xp); done(); } };
    step();
  };
  setup();
}
/* --- binary lamps --- */
function gameBits(sc,host,done){
  const targets=[5,13,42,100,255]; let t=0; const on=[0,0,0,0,0,0,0,0]; const V=[128,64,32,16,8,4,2,1];
  const val=()=>on.reduce((s,b,i)=>s+b*V[i],0);
  const draw=()=>{
    host.innerHTML=`<div class="game"><div class="gtitle">${L(['Light the lamps','Accendi le lampade'])}</div>
     <p>${L(['Make the number','Forma il numero'])} <b class="big" style="font-size:28px;color:var(--gold)">${targets[t]}</b> <span class="muted">(${t+1}/${targets.length})</span></p>
     <div class="lamps">${V.map((v,i)=>`<button class="lamp ${on[i]?'on':''}" data-i="${i}" aria-pressed="${!!on[i]}"><i></i><b>${on[i]}</b><small>${v}</small></button>`).join('')}</div>
     <div class="big">${val()}</div><div class="muted" style="font-family:var(--mono)">${on.join('')}</div><div class="fb" id="bitF" aria-live="polite"></div></div>`;
    $$('.lamp',host).forEach(b=>b.onclick=()=>{const i=+b.dataset.i;on[i]=on[i]?0:1;check();});
  };
  const check=()=>{ draw(); const fb=$('#bitF',host);
    if(val()===targets[t]){ fb.className='fb ok';
      if(t<targets.length-1){ fb.innerHTML=`<b>${targets[t]} = ${on.join('')}</b> <button class="btn cyan sm" id="bn" style="margin-left:6px">${L(['Next number','Prossimo numero'])}</button>`; $$('.lamp',host).forEach(b=>b.disabled=true);
        $('#bn',host).onclick=()=>{t++;on.fill(0);draw();}; }
      else { fb.innerHTML=`<b>255 = 11111111. ${L(['All 8 bits on: the biggest number one byte can hold!','Tutti gli 8 bit accesi: il numero più grande che sta in un byte!'])}</b>${xpNote(20)}`; $$('.lamp',host).forEach(b=>b.disabled=true); award(20); done(); } }
    else if(val()>targets[t]){ fb.className='fb no'; fb.textContent=L(['Too big! Switch a lamp off.','Troppo grande! Spegni una lampada.']); } };
  draw();
}
/* --- ASCII decoder --- */
function gameAscii(sc,host,done){
  const R=[{w:L(['HERO','EROE']),bin:false},{w:'OK',bin:true},{w:L(['CODE','BUG']),bin:false}]; let r=0;
  const enc=(w,bin)=>w.split('').map(c=>bin?c.charCodeAt(0).toString(2).padStart(8,'0'):c.charCodeAt(0)).join('  ');
  const draw=()=>{const cur=R[r];
    host.innerHTML=`<div class="game"><div class="gtitle">${L(['Decode the secret scroll','Decifra la pergamena segreta'])} (${r+1}/${R.length})</div>
     <p class="muted">${cur.bin?L(['These codes are in binary. Turn each into decimal first (64 + 8 + 4 + 2 + 1…), then find the letter.','Questi codici sono in binario. Prima trasformali in decimale (64 + 8 + 4 + 2 + 1…), poi trova la lettera.']):L(['Each number is an ASCII code. Find the letters in the table.','Ogni numero è un codice ASCII. Trova le lettere nella tabella.'])}</p>
     <div class="codes">${enc(cur.w,cur.bin)}</div>
     <form id="af" class="row" style="justify-content:center"><input class="ans" id="ai" maxlength="8" autocomplete="off" aria-label="${L(['Your answer','La tua risposta'])}"><button class="btn" type="submit">${L(['Check','Verifica'])}</button></form>
     <div class="fb" id="aF" aria-live="polite"></div>${VIS.asciitable()}</div>`;
    $('#af',host).onsubmit=e=>{e.preventDefault();const v=$('#ai',host).value.trim().toUpperCase();const fb=$('#aF',host);
      if(v===cur.w){fb.className='fb ok';
        if(r<R.length-1){fb.innerHTML=`<b>${L(['Decoded!','Decifrato!'])}</b> <button class="btn cyan sm" id="an" style="margin-left:6px">${L(['Next scroll','Prossima pergamena'])}</button>`;$('#an',host).onclick=()=>{r++;draw();};}
        else {fb.innerHTML=`<b>${L(['All scrolls decoded!','Tutte le pergamene decifrate!'])}</b>${xpNote(20)}`;award(20);done();}}
      else {fb.className='fb no';fb.textContent=L(['Not quite. Check each code again in the table.','Non proprio. Ricontrolla ogni codice nella tabella.']);bump($('#ai',host));}};
  };
  draw();
}
/* --- RGB mixer --- */
function gameRGB(sc,host,done){
  const T=[{c:[255,255,0],n:['yellow','giallo'],h:['Mix red and green light.','Mescola luce rossa e verde.']},{c:[128,0,128],n:['purple','viola'],h:['Half red, half blue, no green.','Metà rosso, metà blu, niente verde.']},{c:[0,255,255],n:['cyan','ciano'],h:['Green + blue, no red.','Verde + blu, niente rosso.']},{c:[255,165,0],n:['orange','arancione'],h:['Lots of red, some green.','Tanto rosso, un po\' di verde.']}];
  let t=0; const v=[0,0,0]; const TOL=45;
  const hex=a=>'#'+a.map(x=>x.toString(16).padStart(2,'0')).join('').toUpperCase();
  const draw=()=>{const tg=T[t];
    host.innerHTML=`<div class="game"><div class="gtitle">${L(['Mix the light','Mescola la luce'])} (${t+1}/${T.length}): ${L(tg.n)}</div>
     <div class="swatches"><div class="swb"><div class="sw" style="background:rgb(${tg.c})"></div>${L(['target','obiettivo'])}</div><div class="swb"><div class="sw" id="mine" style="background:rgb(${v})"></div><span id="hx">${hex(v)}</span></div></div>
     <div class="sliders">${['R','G','B'].map((n,i)=>`<label for="s${i}"><b style="color:${['#ff6b6b','#5fe08a','#6aa8ff'][i]}">${n}</b><input type="range" id="s${i}" min="0" max="255" value="${v[i]}"><span id="v${i}">${v[i]}</span></label>`).join('')}</div>
     <p class="muted" style="font-size:14px">${L(['Hint: ','Suggerimento: '])}${L(tg.h)}</p><div class="fb" id="cF" aria-live="polite"></div></div>`;
    [0,1,2].forEach(i=>$('#s'+i,host).oninput=e=>{v[i]=+e.target.value;$('#v'+i,host).textContent=v[i];$('#mine',host).style.background=`rgb(${v})`;$('#hx',host).textContent=hex(v);test();});
  };
  const test=()=>{const tg=T[t]; if(!tg.c.every((x,i)=>Math.abs(x-v[i])<=TOL)) return; const fb=$('#cF',host); if(fb.dataset.ok) return; fb.dataset.ok=1; fb.className='fb ok';
    if(t<T.length-1){fb.innerHTML=`<b>${L(['Match!','Ci sei!'])}</b> ${L(['Exact code','Codice esatto'])}: rgb(${tg.c}) = ${hex(tg.c)} <button class="btn cyan sm" id="cn" style="margin-left:6px">${L(['Next colour','Prossimo colore'])}</button>`;$('#cn',host).onclick=()=>{t++;v.fill(0);draw();};}
    else {fb.innerHTML=`<b>${L(['Master of light!','Maestra della luce!'])}</b> rgb(${tg.c}) = ${hex(tg.c)}${xpNote(20)}`;award(20);done();}};
  draw();
}

/* ============ battle ============ */
let B=null, RESUME=null;



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


/* ============ PHYSICS mini-games (subject 'phys') ============
   Three interactive scene types, matching the engine's game(sc, host, done)
   contract. Tap/click based (not HTML5 drag) so they work on touch and are
   deterministic to test.
     vectors  — build a resultant, or resolve a vector into components, on a grid
     torque   — balance a lever beam by placing a weight at the right distance
     fluids   — buoyancy (float / sink) and hydrostatic pressure with depth
   They are wired into renderScene()'s G map and the gated list in 4_engine.js. */

/* ---- small SVG helpers (local to the physics games) ---- */
function vArrow(x1,y1,x2,y2,c){
  const ang=Math.atan2(y2-y1,x2-x1), h=11, s=6;
  const hx=x2-h*Math.cos(ang), hy=y2-h*Math.sin(ang);
  const p1x=hx-s*Math.sin(ang), p1y=hy+s*Math.cos(ang);
  const p2x=hx+s*Math.sin(ang), p2y=hy-s*Math.cos(ang);
  return `<line x1="${x1}" y1="${y1}" x2="${hx}" y2="${hy}" stroke="${c}" stroke-width="3.5" stroke-linecap="round"/><polygon points="${x2},${y2} ${p1x},${p1y} ${p2x},${p2y}" fill="${c}"/>`;
}
function vGridLines(N,X,Y){
  let g='';
  for(let i=0;i<=N;i++){
    g+=`<line x1="${X(i)}" y1="${Y(0)}" x2="${X(i)}" y2="${Y(N)}" stroke="var(--line)" stroke-width="1"/>`;
    g+=`<line x1="${X(0)}" y1="${Y(i)}" x2="${X(N)}" y2="${Y(i)}" stroke="var(--line)" stroke-width="1"/>`;
  }
  g+=`<line x1="${X(0)}" y1="${Y(0)}" x2="${X(N)}" y2="${Y(0)}" stroke="var(--muted)" stroke-width="2.5"/>`;
  g+=`<line x1="${X(0)}" y1="${Y(0)}" x2="${X(0)}" y2="${Y(N)}" stroke="var(--muted)" stroke-width="2.5"/>`;
  return g;
}

/* ---- Vectors: resultant (tip-to-tail) or components (resolve onto axes) ---- */
function gameVectors(sc,host,done){
  const mode=sc.mode||'resultant';
  const rounds=sc.rounds.slice(); let r=0, score=0;
  const N=sc.grid||6, unit=40, pad=26;
  const W=N*unit+pad*2, H=N*unit+pad*2;
  const X=gx=>pad+gx*unit, Y=gy=>H-pad-gy*unit;      // y points up
  const draw=()=>{
    if(r>=rounds.length){
      host.innerHTML=`<div class="game"><div class="gtitle">${L(['Vectors mastered!','Vettori padroneggiati!'])}</div><p>${L(['Score','Punteggio'])}: <b>${score} / ${rounds.length}</b>.${xpNote(score*4)}</p><p class="muted">${L(['Press Continue when you\'re ready.','Premi Continua quando sei pronta.'])}</p></div>`;
      award(score*4); done(); return;
    }
    const rd=rounds[r]; let step=0, first=true, targets, prompt, art='';
    if(mode==='resultant'){
      const [ax,ay]=rd.a,[bx,by]=rd.b;
      targets=[[ax+bx,ay+by]];
      prompt=L(['Add the two vectors tip-to-tail, then click the grid point where the resultant ends.','Somma i due vettori punta-coda, poi clicca il punto dove finisce la risultante.']);
      art=vArrow(X(0),Y(0),X(ax),Y(ay),'#45d8ff')+vArrow(X(ax),Y(ay),X(ax+bx),Y(ay+by),'#ff8fc0');
    } else {
      const [vx,vy]=rd.v;
      targets=[[vx,0],[0,vy]];
      prompt=L(['Click the x-component on the horizontal axis, then the y-component on the vertical axis.','Clicca la componente x sull\'asse orizzontale, poi la componente y sull\'asse verticale.']);
      art=vArrow(X(0),Y(0),X(vx),Y(vy),'#ff6a3d');
    }
    let nodes='';
    for(let gx=0;gx<=N;gx++) for(let gy=0;gy<=N;gy++)
      nodes+=`<circle class="vnode" data-x="${gx}" data-y="${gy}" cx="${X(gx)}" cy="${Y(gy)}" r="10"/>`;
    host.innerHTML=`<div class="game"><div class="gtitle">${L(sc.title)}</div><div class="count">${r+1} / ${rounds.length} · ${L(['score','punti'])} ${score}</div>
      <p class="muted" style="max-width:52ch">${prompt}</p>
      <div class="vwrap"><svg viewBox="0 0 ${W} ${H}" class="vgrid" role="img">${vGridLines(N,X,Y)}${art}${nodes}</svg></div>
      <div class="fb" id="vF" aria-live="polite"></div></div>`;
    const fb=$('#vF',host);
    $$('.vnode',host).forEach(nd=>nd.onclick=()=>{
      const gx=+nd.dataset.x, gy=+nd.dataset.y, t=targets[step];
      if(gx===t[0]&&gy===t[1]){
        nd.classList.add('hit'); step++;
        if(step>=targets.length){
          if(first) score++;
          const extra = mode==='resultant'
            ? L(['Magnitude = √('+(rd.a[0]+rd.b[0])+'² + '+(rd.a[1]+rd.b[1])+'²) = '+Math.round(Math.hypot(rd.a[0]+rd.b[0],rd.a[1]+rd.b[1])*100)/100+' units.','Modulo = √('+(rd.a[0]+rd.b[0])+'² + '+(rd.a[1]+rd.b[1])+'²) = '+Math.round(Math.hypot(rd.a[0]+rd.b[0],rd.a[1]+rd.b[1])*100)/100+' unità.'])
            : L(['Components: x = '+rd.v[0]+', y = '+rd.v[1]+'.','Componenti: x = '+rd.v[0]+', y = '+rd.v[1]+'.']);
          fb.className='fb ok'; fb.innerHTML=`<b>${L(['Right!','Giusto!'])}</b> ${L(rd.why)} ${extra}<div style="margin-top:10px"><button class="btn cyan sm" id="vN">${r===rounds.length-1?L(['Finish','Fine']):L(['Next','Avanti'])}</button></div>`;
          $('#vN',host).onclick=()=>{r++;draw();}; $('#vN',host).focus({preventScroll:true});
        } else { fb.className='fb'; fb.textContent=L(['Good — now the other component.','Bene — ora l\'altra componente.']); }
      } else { first=false; bump(nd); fb.className='fb no'; fb.textContent=L(['Not there. Follow the arrows.','Non lì. Segui le frecce.']); }
    });
  };
  draw();
}

/* ---- Torque: balance a lever. left moment (wl·dl) = right moment (wr·dr) ---- */
function gameTorque(sc,host,done){
  const rounds=sc.rounds.slice(); let r=0, score=0;
  const span=sc.span||5;                         // positions 1..span each side of the pivot
  const W=520, H=190, cx=W/2, pivotY=120, step=(cx-40)/span;
  const px=d=>cx+d*step;                          // d<0 left, d>0 right
  const weightBox=(x,y,label,c)=>`<g><rect x="${x-16}" y="${y-30}" width="32" height="26" rx="4" fill="${c}" opacity="0.85"/><text x="${x}" y="${y-11}" text-anchor="middle" font-size="12" font-weight="700" fill="#0b1020">${label}</text></g>`;
  const draw=()=>{
    if(r>=rounds.length){
      host.innerHTML=`<div class="game"><div class="gtitle">${L(['Balanced!','In equilibrio!'])}</div><p>${L(['Score','Punteggio'])}: <b>${score} / ${rounds.length}</b>.${xpNote(score*4)}</p><p class="muted">${L(['Press Continue when you\'re ready.','Premi Continua quando sei pronta.'])}</p></div>`;
      award(score*4); done(); return;
    }
    const rd=rounds[r]; const dr=rd.wl*rd.dl/rd.wr; let first=true;
    let slots='';
    for(let d=1;d<=span;d++) slots+=`<circle class="rpos" data-d="${d}" cx="${px(d)}" cy="${pivotY-5}" r="12"/>`;
    const beam=`<svg viewBox="0 0 ${W} ${H}" class="beam" role="img">
      <polygon points="${cx-22},${pivotY+40} ${cx+22},${pivotY+40} ${cx},${pivotY+2}" fill="var(--muted)"/>
      <line x1="40" y1="${pivotY-5}" x2="${W-40}" y2="${pivotY-5}" stroke="var(--ember)" stroke-width="7" stroke-linecap="round"/>
      ${[...Array(span)].map((_,i)=>`<text x="${px(-(i+1))}" y="${pivotY+28}" text-anchor="middle" font-size="11" fill="var(--muted)">${i+1}</text><text x="${px(i+1)}" y="${pivotY+28}" text-anchor="middle" font-size="11" fill="var(--muted)">${i+1}</text>`).join('')}
      ${weightBox(px(-rd.dl),pivotY-5,rd.wl,'#45d8ff')}
      ${slots}
    </svg>`;
    host.innerHTML=`<div class="game"><div class="gtitle">${L(sc.title)}</div><div class="count">${r+1} / ${rounds.length} · ${L(['score','punti'])} ${score}</div>
      <p class="muted" style="max-width:54ch">${L(['A '+rd.wl+' N weight sits '+rd.dl+' units left of the pivot. Click the distance on the right to place the '+rd.wr+' N weight so the beam balances.','Un peso di '+rd.wl+' N è a '+rd.dl+' unità a sinistra del perno. Clicca la distanza a destra dove mettere il peso di '+rd.wr+' N per far stare in equilibrio la leva.'])}</p>
      <div class="beamwrap">${beam}</div>
      <div class="fb" id="tF" aria-live="polite"></div></div>`;
    const fb=$('#tF',host);
    $$('.rpos',host).forEach(b=>b.onclick=()=>{
      const d=+b.dataset.d;
      if(d===dr){
        if(first) score++;
        $$('.rpos',host).forEach(x=>x.style.pointerEvents='none');
        b.classList.add('on');
        fb.className='fb ok'; fb.innerHTML=`<b>${L(['Balanced!','In equilibrio!'])}</b> ${rd.wl}×${rd.dl} = ${rd.wr}×${dr} = ${rd.wl*rd.dl} N·${L(['units','unità'])}. ${L(rd.why)}<div style="margin-top:10px"><button class="btn cyan sm" id="tN">${r===rounds.length-1?L(['Finish','Fine']):L(['Next','Avanti'])}</button></div>`;
        $('#tN',host).onclick=()=>{r++;draw();}; $('#tN',host).focus({preventScroll:true});
      } else {
        first=false; bump(b); fb.className='fb no';
        const side = rd.wr*d < rd.wl*rd.dl ? L(['too little — the left side still wins.','troppo poco — vince ancora la sinistra.']) : L(['too much — now the right side wins.','troppo — ora vince la destra.']);
        fb.textContent=`${rd.wr}×${d} = ${rd.wr*d}: ${side}`;
      }
    });
  };
  draw();
}

/* ---- Fluids: buoyancy (float/sink) and hydrostatic pressure (deepest = highest) ---- */
function gameFluids(sc,host,done){
  const mode=sc.mode||'float';
  const rounds=sc.rounds.slice(); let r=0, score=0;
  const finish=()=>{
    host.innerHTML=`<div class="game"><div class="gtitle">${mode==='float'?L(['Buoyancy solved!','Galleggiamento risolto!']):L(['Pressure read!','Pressione letta!'])}</div><p>${L(['Score','Punteggio'])}: <b>${score} / ${rounds.length}</b>.${xpNote(score*4)}</p><p class="muted">${L(['Press Continue when you\'re ready.','Premi Continua quando sei pronta.'])}</p></div>`;
    award(score*4); done();
  };
  const draw=()=>{
    if(r>=rounds.length){ finish(); return; }
    const rd=rounds[r]; let first=true;
    if(mode==='float'){
      const dens=rd.m/rd.v, floats=dens<1;                       // water = 1 g/cm³
      const nmE=Array.isArray(rd.name)?rd.name[0]:rd.name, nmI=Array.isArray(rd.name)?rd.name[1]:rd.name;
      host.innerHTML=`<div class="game"><div class="gtitle">${L(sc.title)}</div><div class="count">${r+1} / ${rounds.length} · ${L(['score','punti'])} ${score}</div>
        <div class="tank"><svg viewBox="0 0 260 150" role="img"><rect x="10" y="10" width="240" height="130" rx="8" fill="none" stroke="var(--line)"/><rect x="12" y="46" width="236" height="92" rx="6" fill="#45d8ff" opacity="0.16"/><line x1="12" y1="46" x2="248" y2="46" stroke="#45d8ff" stroke-width="2" opacity="0.6"/><rect x="112" y="${floats?34:92}" width="36" height="30" rx="5" fill="var(--ember)" opacity="0.9"/></svg></div>
        <p class="muted" style="max-width:52ch">${L([nmE+': mass '+rd.m+' g, volume '+rd.v+' cm³. Water has density 1 g/cm³. Will it float or sink?',nmI+': massa '+rd.m+' g, volume '+rd.v+' cm³. L\'acqua ha densità 1 g/cm³. Galleggia o affonda?'])}</p>
        <div class="cats"><button class="btn ghost fchoice" data-f="1">${L(['Floats','Galleggia'])}</button><button class="btn ghost fchoice" data-f="0">${L(['Sinks','Affonda'])}</button></div>
        <div class="fb" id="flF" aria-live="polite"></div></div>`;
      const fb=$('#flF',host);
      $$('.fchoice',host).forEach(b=>b.onclick=()=>{
        const pick=b.dataset.f==='1';
        if(pick===floats){
          if(first) score++;
          $$('.fchoice',host).forEach(x=>x.disabled=true); b.classList.remove('ghost'); b.classList.add('right');
          const dstr=(Math.round(dens*100)/100);
          fb.className='fb ok'; fb.innerHTML=`<b>${L(['Right!','Giusto!'])}</b> ${L(['density = '+rd.m+' ÷ '+rd.v+' = '+dstr+' g/cm³, '+(floats?'less':'more')+' than water, so it '+(floats?'floats':'sinks')+'.','densità = '+rd.m+' ÷ '+rd.v+' = '+dstr+' g/cm³, '+(floats?'minore':'maggiore')+' dell\'acqua, quindi '+(floats?'galleggia':'affonda')+'.'])}<div style="margin-top:10px"><button class="btn cyan sm" id="flN">${r===rounds.length-1?L(['Finish','Fine']):L(['Next','Avanti'])}</button></div>`;
          $('#flN',host).onclick=()=>{r++;draw();}; $('#flN',host).focus({preventScroll:true});
        } else { first=false; bump(b); b.disabled=true; b.classList.remove('ghost'); b.classList.add('wrong'); fb.className='fb no'; fb.textContent=L(['Not quite — compare its density with water first.','Non proprio — prima confronta la sua densità con l\'acqua.']); }
      });
    } else {                                                     // pressure: click deepest point
      const maxd=Math.max(...rd.points.map(p=>p.depth));
      const dots=rd.points.map(p=>`<circle class="pdot" data-depth="${p.depth}" cx="${p.x}" cy="${30+p.depth*18}" r="13"/><text x="${p.x}" y="${30+p.depth*18+4}" text-anchor="middle" font-size="10" fill="var(--text)" pointer-events="none">${String.fromCharCode(65+rd.points.indexOf(p))}</text>`).join('');
      host.innerHTML=`<div class="game"><div class="gtitle">${L(sc.title)}</div><div class="count">${r+1} / ${rounds.length} · ${L(['score','punti'])} ${score}</div>
        <div class="tank"><svg viewBox="0 0 260 170" role="img"><rect x="10" y="10" width="240" height="150" rx="8" fill="#45d8ff" opacity="0.14" stroke="var(--line)"/>${dots}</svg></div>
        <p class="muted" style="max-width:52ch">${L(['In the same liquid, pressure grows with depth (Stevin\'s law). Click the point under the greatest pressure.','Nello stesso liquido la pressione cresce con la profondità (legge di Stevino). Clicca il punto dove la pressione è maggiore.'])}</p>
        <div class="fb" id="flF" aria-live="polite"></div></div>`;
      const fb=$('#flF',host);
      $$('.pdot',host).forEach(b=>b.onclick=()=>{
        if(+b.dataset.depth===maxd){
          if(first) score++;
          $$('.pdot',host).forEach(x=>x.style.pointerEvents='none'); b.classList.add('on');
          fb.className='fb ok'; fb.innerHTML=`<b>${L(['Right!','Giusto!'])}</b> ${L(rd.why||['The deepest point feels the most pressure.','Il punto più profondo subisce la pressione maggiore.'])}<div style="margin-top:10px"><button class="btn cyan sm" id="flN">${r===rounds.length-1?L(['Finish','Fine']):L(['Next','Avanti'])}</button></div>`;
          $('#flN',host).onclick=()=>{r++;draw();}; $('#flN',host).focus({preventScroll:true});
        } else { first=false; bump(b); fb.className='fb no'; fb.textContent=L(['Deeper than that — pressure increases downward.','Più in profondità — la pressione aumenta verso il basso.']); }
      });
    }
  };
  draw();
}


export const MINI_GAMES: Record<string, (sc: any, host: HTMLElement, done: () => void) => void> = {
  order: gameOrder,
  sort: gameSort,
  build: gameBuild,
  fde: sceneFDE,
  journey: sceneJourney,
  robot: gameRobot,
  bits: gameBits,
  ascii: gameAscii,
  rgb: gameRGB,
  pwd: gamePwd,
  format: gameFormat,
  sheet: gameSheet,
  trace: gameTrace,
  predict: gamePredict,
  gates: gameGates,
  stackq: gameStackQ,
  vectors: gameVectors,
  torque: gameTorque,
  fluids: gameFluids,
};

export function runMiniGame(
  type: string,
  sc: Scene,
  host: HTMLElement,
  done: () => void,
  lang: Language,
  mission: Mission,
  isFirstTime: boolean,
  awardFn: (xp: number) => void
) {
  LANG = lang;
  CURRENT_MISSION = mission;
  IN_FIRST_TIME = isFirstTime;
  ON_AWARD = awardFn;
  if (type === "powercut") {
    initPowercut(done);
  } else if (type === "board") {
    initBoard(done);
  } else if (MINI_GAMES[type]) {
    MINI_GAMES[type](sc, host, done);
  }
}
