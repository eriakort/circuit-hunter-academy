
/* ============ state ============ */
const SKEY='circuit-hunter-academy-v2';
let S={name:'',lang:'en',xp:0,cleared:{},seen:{},flawless:{}};
try{const raw=localStorage.getItem(SKEY); if(raw) S=Object.assign(S,JSON.parse(raw));}catch(e){}
LANG=S.lang||'en';
function save(){try{localStorage.setItem(SKEY,JSON.stringify(S));}catch(e){}}
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fill=t=>rich(L(t)).replace(/\{name\}/g,esc(S.name||'Hunter'));
const rankOf=xp=>{let r=RANKS[0];for(const x of RANKS) if(xp>=x[0]) r=x;return r;};
const nextRank=xp=>RANKS.find(r=>r[0]>xp);
function addXP(n){S.xp+=n;save();renderHUD();}
const app=$('#app');
let CUR={m:0,s:0}, VIEW='map';
const inMissionFirstTime=()=>!S.cleared[MISSIONS[CUR.m].id];
function award(n){ if(inMissionFirstTime()) addXP(n); }
function toTop(){ try{window.scrollTo({top:0,behavior:REDUCED?'auto':'smooth'});}catch(e){window.scrollTo(0,0);} }
function pauseSmil(){ if(REDUCED) $$('svg').forEach(s=>s.pauseAnimations&&s.pauseAnimations()); }
const isOpen=i=>{const m=MISSIONS[i]; const prev=MISSIONS[i-1]; return !prev||prev.arc!==m.arc||!!S.cleared[prev.id];};
const allCleared=()=>MISSIONS.every(m=>S.cleared[m.id]);
const U={
  missions:['Missions','Missioni'], codex:['Codex','Glossario'], dojo:['Dojo','Dojo'], cont:['Continue','Continua'], back:['Back','Indietro'], fight:['Fight!','Combatti!'],
  next:['Next step','Passo successivo'], prev:['Previous step','Passo precedente'], arc:['Arc','Arco'], mission:['Mission','Missione'], pages:['pp.','pp.'],
  ready:['Ready','Pronta'], locked:['Locked','Bloccata'], cleared:['Cleared','Superata'], flawless:['Cleared · flawless','Superata · perfetta'],
};

/* ============ HUD ============ */
function setLang(l){ if(LANG===l) return; LANG=l; S.lang=l; save(); rerender(); }
function rerender(){
  if(VIEW==='scene') renderScene(); else if(VIEW==='codex') renderCodex(); else if(VIEW==='ending') renderEnding();
  else if(VIEW==='battle' && B){ RESUME=B; if(B.dojo) startDojo(); else renderScene(); }
  else renderMap();
}
function renderHUD(){
  const r=rankOf(S.xp), nx=nextRank(S.xp), pct=nx?((S.xp-r[0])/(nx[0]-r[0]))*100:100;
  const anyClear=Object.keys(S.cleared).length>0;
  $('#hud').innerHTML=`<button class="brand" id="hHome">CIRCUIT <b>HUNTER</b> ACADEMY</button>
   <div class="hud-r">${S.name?`<div class="who-hud"><span class="nm">${esc(S.name)} · ${S.xp} XP</span><span class="rank">${L(r[1])}</span><div class="xpbar"><i style="width:${pct}%"></i></div></div>`:''}
   <div class="lang" role="group" aria-label="Language / Lingua"><button id="lEN" class="${LANG==='en'?'on':''}" aria-pressed="${LANG==='en'}">EN</button><button id="lIT" class="${LANG==='it'?'on':''}" aria-pressed="${LANG==='it'}">IT</button></div>
   <button class="btn ghost sm" id="hMap">${L(U.missions)}</button><button class="btn ghost sm" id="hCodex">${L(U.codex)}</button><button class="btn ghost sm" id="hDojo" ${anyClear?'':'disabled'}>${L(U.dojo)}</button></div>`;
  $('#hHome').onclick=$('#hMap').onclick=()=>renderMap();
  $('#hCodex').onclick=()=>renderCodex();
  $('#hDojo').onclick=()=>startDojo();
  $('#lEN').onclick=()=>setLang('en'); $('#lIT').onclick=()=>setLang('it');
}

/* ============ map ============ */
function renderMap(){
  VIEW='map'; renderHUD();
  if(!S.name){
    app.innerHTML=`<section class="hero card"><div><div class="eyebrow">${L(['Computer science · Foundations','Informatica · Le basi'])}</div><h1>Circuit Hunter <span>Academy</span></h1>
      <p class="lede">${L(['Glitch Demons have invaded the academy\'s computers. Learn how computers work, chapter by chapter, turn that knowledge into techniques, and drive them out.','I Demoni Glitch hanno invaso i computer dell\'accademia. Impara come funzionano i computer, capitolo per capitolo, trasforma ciò che impari in tecniche e scacciali.'])}</p>
      <form class="reg" id="regf" style="margin-top:16px"><label for="nm" class="eyebrow">${L(['Enter your hunter name','Scrivi il tuo nome da cacciatrice'])}</label><input id="nm" maxlength="20" autocomplete="off" placeholder="Hana"><button class="btn" type="submit">${L(['Join the academy','Entra nell\'accademia'])}</button>
      <span class="muted" style="font-size:14px">${L(['You can switch between English and Italian at any time with EN / IT at the top.','Puoi passare dall\'inglese all\'italiano in qualsiasi momento con EN / IT in alto.'])}</span></form></div>
      <div>${VIS.title()}</div></section>`;
    $('#regf').onsubmit=e=>{e.preventDefault();const v=$('#nm').value.trim();if(!v){$('#nm').focus();return;}S.name=v.slice(0,20);save();renderMap();};
    pauseSmil(); return;
  }
  const done=MISSIONS.filter(m=>S.cleared[m.id]).length;
  const nextI=MISSIONS.findIndex((m,i)=>!S.cleared[m.id]&&isOpen(i));
  app.innerHTML=`<section class="hero card"><div><div class="eyebrow">${L(['Welcome back','Bentornata'])}, ${esc(S.name)}</div><h1>Circuit Hunter <span>Academy</span></h1>
     <p class="lede">${allCleared()?L(['Every Glitch Demon is defeated. Keep your techniques sharp in the Dojo.','Tutti i Demoni Glitch sono sconfitti. Tieni allenate le tue tecniche nel Dojo.']):L([`${done} of ${MISSIONS.length} missions cleared. The book's three units are the tabs below; each arc is one chapter, and every arc's first mission is open, so you can start from the chapter you're studying in class.`,`${done} missioni superate su ${MISSIONS.length}. Le tre unità del libro sono le schede qui sotto; ogni arco è un capitolo, e la prima missione di ogni arco è già aperta: puoi partire dal capitolo che state studiando in classe.`])}</p>
     <div class="row" style="margin-top:14px">${allCleared()?`<button class="btn" id="goDojo">${L(['Train in the Dojo','Allenati nel Dojo'])}</button><button class="btn ghost" id="goCert">${L(['See certificate','Vedi il diploma'])}</button>`:nextI>=0?`<button class="btn" id="goNext">${L(U.mission)} ${MISSIONS[nextI].sec}: ${L(MISSIONS[nextI].title)}</button>`:''}</div></div>
     <div>${VIS.title()}</div></section>
   <nav class="units" aria-label="Units">${UNITS.map((u,ui)=>{const ms=MISSIONS.filter(m=>(ARCS[m.arc].unit||0)===ui); const dn=ms.filter(m=>S.cleared[m.id]).length;
      return `<button data-u="${ui}" class="${(S.unit||0)===ui?'on':''}" aria-pressed="${(S.unit||0)===ui}">${L(['Unit','Unità'])} ${ui+1} · ${L(u.title)}<small>${L(['ch.','cap.'])} ${u.ch} · ${dn}/${ms.length}</small></button>`;}).join('')}</nav>
   ${ARCS.map((a,ai)=>{ if((a.unit||0)!==(S.unit||0)) return ''; const ms=MISSIONS.map((m,i)=>[m,i]).filter(([m])=>m.arc===ai);
     return `<section class="arc"><div class="arc-h"><span class="n">${a.n}</span><h2>${L(a.title)}</h2><span class="pg">${L(['Chapter','Capitolo'])} ${a.n} · pp. ${a.pages}</span></div>
      <div class="missions">${ms.map(([m,i])=>{const open=isOpen(i), dn=S.cleared[m.id];
        return `<button class="mcard ${dn?'cleared':''}" data-i="${i}" ${open?'':'disabled'}>${demonSVG(m.hue,m.horns,m.eyes,'dm')}<span class="sec">§ ${m.sec} · pp. ${m.pages}</span><h3>${L(m.title)}</h3><span class="topic">${L(m.topic)}</span>
          <span class="badge ${dn?'ok':open?'go':'lock'}">${dn?L(S.flawless[m.id]?U.flawless:U.cleared):open?L(U.ready):L(U.locked)}</span></button>`;}).join('')}</div></section>`;}).join('')}
   <section class="card"><div class="eyebrow" style="margin-bottom:8px">${L(['Techniques learned','Tecniche apprese'])}</div>
     <div class="techlist">${done?MISSIONS.filter(m=>S.cleared[m.id]).map(m=>`<div>${L(m.tech)}</div>`).join(''):`<span class="muted">${L(['None yet. Clear a mission to learn your first technique.','Ancora nessuna. Supera una missione per imparare la prima tecnica.'])}</span>`}</div>
     <div class="row" style="margin-top:16px;justify-content:space-between"><span class="muted" style="font-size:13px">${L(['Progress is saved in this browser.','I progressi sono salvati in questo browser.'])}</span><button class="btn ghost sm" id="reset">${L(['Reset progress','Azzera i progressi'])}</button></div></section>`;
  $$('.mcard').forEach(b=>b.onclick=()=>openMission(+b.dataset.i));
  $$('[data-u]').forEach(b=>b.onclick=()=>{S.unit=+b.dataset.u;save();renderMap();});
  const gn=$('#goNext'); if(gn) gn.onclick=()=>openMission(nextI);
  const gd=$('#goDojo'); if(gd) gd.onclick=startDojo;
  const gc=$('#goCert'); if(gc) gc.onclick=renderEnding;
  let armed=false; $('#reset').onclick=e=>{ if(!armed){armed=true;e.target.textContent=L(['Tap again to erase everything','Tocca di nuovo per cancellare tutto']);e.target.style.borderColor='var(--bad)';return;}
    S={name:'',lang:LANG,xp:0,cleared:{},seen:{},flawless:{}};save();renderMap(); };
  pauseSmil();
}

/* ============ mission flow ============ */
function openMission(i){CUR={m:i,s:0};S.seen[i]=true;save();renderScene();}
function speaker(sc,M){
  if(sc.who==='y') return ['you',esc(S.name),YOU()];
  if(sc.who==='d') return ['demon',L(M.demon),demonSVG(M.hue,M.horns,M.eyes,'avatar')];
  return ['','Sensei Kaito',SENSEI];
}
function dialog(sc,M){const [c,n,av]=speaker(sc,M);return `<div class="dialog">${av}<div class="bubble ${c}"><div class="who">${n}</div>${fill(sc.text)}</div></div>`;}
const GUIDE={
  fde:['<p>Watch the CPU run one real instruction. Press <b>Next step</b> to go through the cycle: <b>fetch</b>, <b>decode</b>, <b>execute</b>.</p>','<p>Guarda la CPU eseguire una vera istruzione. Premi <b>Passo successivo</b> per seguire il ciclo: <b>fetch</b> (prelievo), <b>decode</b> (decodifica), <b>execute</b> (esecuzione).</p>'],
  journey:['<p>Now follow one key press on its journey through the whole computer. Press <b>Next step</b>. (Simplified: real computers do a few more steps in between, all in a fraction of a second.)</p>','<p>Ora segui il viaggio di un tasto premuto attraverso tutto il computer. Premi <b>Passo successivo</b>. (Versione semplificata: i computer veri fanno qualche passaggio in più, tutto in una frazione di secondo.)</p>'],
};
function renderScene(){
  VIEW='scene'; renderHUD();
  const M=MISSIONS[CUR.m], sc=M.scenes[CUR.s];
  const head=`<div class="mhead"><div><div class="eyebrow">${L(U.arc)} ${M.arc+1} · § ${M.sec} · pp. ${M.pages}</div><h2>${L(M.title)}</h2></div><div class="dots" aria-label="${CUR.s+1} / ${M.scenes.length}">${M.scenes.map((_,i)=>`<i class="${i<CUR.s?'done':i===CUR.s?'now':''}"></i>`).join('')}</div></div>`;
  if(sc.type==='battle'){VIEW='battle';app.innerHTML=head+'<div id="bt" style="display:flex;flex-direction:column;gap:14px"></div>';toTop();startBattle(M,$('#bt'));return;}
  const gated=(['order','sort','build','fde','journey','robot','bits','ascii','rgb','pwd','format','sheet','trace','predict','gates','stackq'].includes(sc.type)||sc.needDone)&&inMissionFirstTime();
  let body='';
  if(!sc.type){
    let v = sc.vis==='demon' ? `<div style="display:flex;justify-content:center"><div style="width:min(220px,60%)">${demonSVG(M.hue,M.horns,M.eyes,'dia')}</div></div>` : sc.vis ? VIS[sc.vis]() : '';
    if(sc.code) v += (v?'<div style="height:12px"></div>':'') + CODE(sc.code);
    body=`<div class="visual">${v}</div>${dialog(sc,M)}`;
  } else if(GUIDE[sc.type]){
    body=`${dialog({who:'s',text:GUIDE[sc.type]},M)}<div class="visual" id="gm"></div>`;
  } else body=`<div class="visual" id="gm"></div>`;
  const nxt=M.scenes[CUR.s+1];
  app.innerHTML=head+body+`<div class="nav"><button class="btn ghost" id="back">${CUR.s?L(U.back):L(U.missions)}</button><button class="btn" id="next" ${gated?'disabled':''}>${nxt&&nxt.type==='battle'?L(U.fight):L(U.cont)}</button></div>`;
  const done=()=>{$('#next').disabled=false;};
  const gm=$('#gm');
  const G={order:gameOrder,sort:gameSort,build:gameBuild,fde:sceneFDE,journey:sceneJourney,robot:gameRobot,bits:gameBits,ascii:gameAscii,rgb:gameRGB,pwd:gamePwd,format:gameFormat,sheet:gameSheet,trace:gameTrace,predict:gamePredict,gates:gameGates,stackq:gameStackQ};
  if(G[sc.type]) G[sc.type](sc,gm,done);
  if(sc.init==='powercut') initPowercut(done);
  if(sc.init==='board') initBoard();
  $('#back').onclick=()=>{ if(CUR.s){CUR.s--;renderScene();} else renderMap(); };
  $('#next').onclick=()=>{ CUR.s++; renderScene(); };
  toTop(); pauseSmil();
}

/* ============ interactive scenes ============ */
function initPowercut(done){
  let st=0; const b=$('#cut');
  b.onclick=()=>{
    if(st===0){ $('#ramFiles').classList.add('gone'); $('#pwr').textContent=L(['POWER OFF','SPENTO']); $('#pwr').classList.add('off'); b.textContent=L(['Turn the power back on','Riaccendi']); st=1; }
    else if(st===1){ $('#ramFiles').classList.remove('gone'); $('#ramFiles').innerHTML=`<span class="file" style="opacity:.7">${L(['(empty: the unsaved draft is gone)','(vuota: la bozza non salvata è sparita)'])}</span>`; $('#pwr').textContent=L(['POWER ON','ACCESO']); $('#pwr').classList.remove('off'); b.textContent=L(['Run it again','Riprova']); st=2; done(); }
    else renderScene();
  };
}
function initBoard(){
  const info=$('#boardInfo');
  $$('.zone').forEach(z=>{
    const show=()=>{ $$('.zone').forEach(o=>o.classList.remove('on')); z.classList.add('on'); const d=BOARD[z.dataset.k]; info.innerHTML=`<b class="step">${L(d.n)}</b><p style="margin-top:6px">${L(d.t)}</p>`; };
    z.onclick=show; z.onkeydown=e=>{ if(e.key==='Enter'||e.key===' '){e.preventDefault();show();} };
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
  const ST=[
    {at:'kb',on:['kb'],scr:'',h:['START','INIZIO'],t:['You press the A key. The keyboard turns it into a code of 0s and 1s.','Premi il tasto A. La tastiera lo trasforma in un codice di 0 e 1.']},
    {at:'cpu',on:['kb','cpu'],scr:'',h:['INPUT → CPU','INPUT → CPU'],t:['The code travels along the cable and the buses to the CPU. The operating system and the keyboard driver work out that it means "A".','Il codice viaggia lungo il cavo e i bus fino alla CPU. Il sistema operativo e il driver della tastiera capiscono che significa "A".']},
    {at:'ram',on:['cpu','ram'],scr:'',h:['RAM','RAM'],t:['Your document is open in RAM, so the CPU adds "A" there. Until you save, it only exists in volatile RAM!','Il documento è aperto in RAM, quindi la CPU aggiunge lì la "A". Finché non salvi, esiste solo nella RAM volatile!']},
    {at:'gpu',on:['cpu','gpu'],scr:'',h:['CPU → GPU','CPU → GPU'],t:['The CPU asks the GPU to draw the letter. The GPU works out the colour of every pixel of the "A".','La CPU chiede alla GPU di disegnare la lettera. La GPU calcola il colore di ogni pixel della "A".']},
    {at:'mon',on:['gpu','mon'],scr:'A',h:['OUTPUT','OUTPUT'],t:['The picture goes through the HDMI or DisplayPort cable to the monitor. The A appears!','L\'immagine passa dal cavo HDMI o DisplayPort al monitor. Compare la A!']},
    {at:'ssd',on:['ram','ssd'],scr:'A',h:['STORAGE','MEMORIA DI MASSA'],t:['You press Ctrl+S. The document is copied from RAM to the SSD. Now it is safe even in a power cut.','Premi Ctrl+S. Il documento viene copiato dalla RAM all\'SSD. Ora è al sicuro anche se va via la corrente.']},
  ];
  stepper(host,ST,s=>{
    ['kb','cpu','ram','gpu','mon','ssd'].forEach(k=>$('#jn-'+k,host).classList.toggle('on',s.on.includes(k)));
    const p=JN[s.at]; $('#jdot',host).style.transform=`translate(${p[0]}px,${p[1]+(s.at==='mon'?-52:-38)}px)`;
    $('#mscr',host).textContent=s.scr;
  },done);
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
      cells+=`<div class="rc ${wall?'wall':''} ${tr?'trail':''} ${cr?'crash':''}">${here?hero(pos[2]):goal?demonSVG(MISSIONS[CUR.m].hue,2,2,''):''}</div>`;}
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
function startBattle(M,host,opts={}){
  VIEW='battle';
  const res=RESUME; RESUME=null;
  if(res){ B=Object.assign(res,{host}); M=B.M; }
  else { const qs=shuffle((opts.qs||M.quiz).map(q=>({...q}))); B={M,host,queue:qs,total:qs.length,hp:qs.length,hearts:4,maxH:4,dojo:!!opts.dojo}; }
  const techShort=B.dojo?L(['Training Strike!','Colpo d\'allenamento!']):L(M.tech).split(':').pop().trim()+'!';
  host.innerHTML=`<div class="arena" id="arena"><div class="shout" id="shout">${techShort}</div>
     <div class="hunter">${YOU()}<div class="hn">${esc(S.name)}</div><div class="eyebrow">${L(['Spirit','Spirito'])}</div><div class="hearts" id="hearts"></div><div class="muted" style="font-size:13px">${B.dojo?L(['Mixed review from cleared missions','Ripasso misto dalle missioni superate']):L(M.tech)}</div></div>
     <div class="foe" id="foe">${demonSVG(M.hue,M.horns,M.eyes,'demon')}<div class="slash"></div><div class="fname">${L(M.demon)}</div><div class="hp"><i id="hpbar"></i></div><div class="hp-l" id="hpl"></div></div></div>
   <div class="card qcard" id="qc"></div>`;
  bars(); if(B.hp===0) win(); else if(B.hearts===0) lose(); else nextQ(); pauseSmil();
}
function bars(){
  $('#hearts').innerHTML=Array.from({length:B.maxH},(_,i)=>HEART(i<B.hearts)).join('');
  $('#hpbar').style.width=(B.hp/B.total*100)+'%';
  $('#hpl').textContent=`HP ${B.hp} / ${B.total}`;
}
function nextQ(){
  const q=B.queue[0]; const opts=shuffle(q.a.map((t,i)=>({t:L(t),ok:i===0})));
  $('#qc').innerHTML=`<div class="eyebrow">${B.dojo?L(['Training','Allenamento']):L(['Battle','Battaglia'])} · ${L(['strike','colpo'])} ${B.total-B.hp+1} / ${B.total}</div><div class="qtext">${L(q.q)}</div>
    <div class="opts">${opts.map((o,i)=>`<button class="opt" data-i="${i}">${o.t}</button>`).join('')}</div><div id="qfb" aria-live="polite"></div>`;
  $$('.opt').forEach(b=>b.onclick=()=>answer(q,opts,+b.dataset.i,b));
}
function answer(q,opts,i,btn){
  $$('.opt').forEach((b,k)=>{b.disabled=true;if(opts[k].ok)b.classList.add('right');});
  const ok=opts[i].ok, right=opts.find(o=>o.ok).t;
  if(ok){
    B.queue.shift(); B.hp--;
    if(B.dojo) addXP(5); else award(10);
    const foe=$('#foe'); foe.classList.remove('hit'); void foe.offsetWidth; foe.classList.add('hit');
    const sh=$('#shout'); sh.classList.remove('show'); void sh.offsetWidth; sh.classList.add('show');
    $('#qfb').innerHTML=`<div class="why"><b>${L(['Direct hit!','Colpo a segno!'])}</b> ${L(q.why)}</div>`;
  } else {
    btn.classList.add('wrong'); B.hearts--; B.queue.push(B.queue.shift());
    const ar=$('#arena'); ar.classList.remove('ouch'); void ar.offsetWidth; ar.classList.add('ouch');
    $('#qfb').innerHTML=`<div class="why"><b>${L(['The demon strikes back!','Il demone contrattacca!'])}</b> ${L(['The answer is','La risposta è'])} "${right}". ${L(q.why)}<br><span class="muted">${L(['This question will come back later in the fight.','Questa domanda tornerà più avanti nello scontro.'])}</span></div>`;
  }
  bars();
  const nb=document.createElement('button'); nb.className='btn'; nb.style.marginTop='12px';
  nb.textContent=B.hp===0?L(['Final strike!','Colpo finale!']):B.hearts===0?'…':L(['Next strike','Prossimo colpo']);
  nb.onclick=()=>{ if(B.hp===0) win(); else if(B.hearts===0) lose(); else nextQ(); };
  $('#qfb').appendChild(nb); nb.focus({preventScroll:true});
}
function lose(){
  const M=B.M, d=B.dojo;
  B.host.innerHTML=`<div class="card result"><div style="width:min(180px,50%)">${demonSVG(M.hue,M.horns,M.eyes,'dia')}</div><h2>${L(['The demon escaped','Il demone è fuggito'])}</h2>
    <p class="muted" style="max-width:52ch">${L(['Your spirit ran out. Every hunter retreats sometimes, and every question you missed was explained, so you\'re stronger now. Try again, or review the lesson first.','Il tuo spirito si è esaurito. Ogni cacciatrice a volte si ritira, e ogni domanda sbagliata è stata spiegata: ora sei più forte. Riprova, oppure ripassa prima la lezione.'])}</p>
    <div class="row" style="justify-content:center"><button class="btn" id="again">${L(['Fight again','Combatti ancora'])}</button>${d?'':`<button class="btn ghost" id="rev">${L(['Review the lesson','Ripassa la lezione'])}</button>`}<button class="btn ghost" id="map">${L(U.missions)}</button></div></div>`;
  B=null; VIEW='result';
  $('#again').onclick=()=>{ if(d) startDojo(); else renderScene(); };
  const r=$('#rev'); if(r) r.onclick=()=>{CUR.s=0;renderScene();};
  $('#map').onclick=renderMap; pauseSmil();
}
function win(){
  const M=B.M, host=B.host;
  if(B.dojo){ B=null; VIEW='result';
    host.innerHTML=`<div class="card result"><h2>${L(['Training complete','Allenamento completato'])}</h2><p>${L(['Short, regular practice is how techniques stick.','Allenarsi poco ma spesso è il modo per fissare le tecniche.'])}</p>
      <div class="row" style="justify-content:center"><button class="btn" id="again">${L(['Train again','Allenati ancora'])}</button><button class="btn ghost" id="map">${L(U.missions)}</button></div></div>`;
    $('#again').onclick=startDojo; $('#map').onclick=renderMap; return;
  }
  const first=!S.cleared[M.id], flawless=B.hearts===B.maxH; let gained=0;
  if(first){ gained=50+(flawless?25:0); S.cleared[M.id]=true; if(flawless) S.flawless[M.id]=true; addXP(gained); save(); }
  else if(flawless && !S.flawless[M.id]){ S.flawless[M.id]=true; save(); }
  B=null; VIEW='result';
  if(allCleared() && first){ renderEnding(); return; }
  const ni=CUR.m+1, nxtOpen=ni<MISSIONS.length&&isOpen(ni);
  host.innerHTML=`<div class="card result"><div class="eyebrow">${L(['Demon defeated','Demone sconfitto'])}</div><h2>${L(M.demon)} ${L(['is sealed!','è sigillato!'])}</h2>
    <p>${L(['Technique learned','Tecnica appresa'])}</p><div class="tech">${L(M.tech)}</div>
    <p class="muted">${first?`+${gained} XP${flawless?L([' (including +25 flawless bonus)',' (compreso il bonus perfezione +25)']):''}`:L(['Replay complete. XP is only awarded the first time.','Replay completato. I punti XP si ottengono solo la prima volta.'])}</p>
    <div class="row" style="justify-content:center">${nxtOpen?`<button class="btn" id="nx">${L(['Next','Avanti'])}: ${L(MISSIONS[ni].title)}</button>`:''}<button class="btn ${nxtOpen?'ghost':''}" id="map">${L(U.missions)}</button></div></div>`;
  const nb=$('#nx'); if(nb) nb.onclick=()=>openMission(ni); $('#map').onclick=renderMap; toTop();
}
function renderEnding(){
  VIEW='ending'; renderHUD();
  const d=new Date().toLocaleDateString(LANG==='it'?'it-IT':'en-GB',{day:'numeric',month:'long',year:'numeric'});
  app.innerHTML=`<div class="cert"><div class="eyebrow">Circuit Hunter Academy · ${L(['Certificate of mastery','Diploma di maestria'])}</div>
     <div style="width:min(200px,50%)">${demonSVG(275,5,3,'dia')}</div>
     <p>${L([`All ${MISSIONS.length} missions cleared and every Glitch Demon sealed by`,`Tutte le ${MISSIONS.length} missioni superate e tutti i Demoni Glitch sigillati da`])}</p><div class="nm">${esc(S.name)}</div>
     <p class="rank" style="font-size:15px">${L(rankOf(S.xp)[1])} · ${S.xp} XP</p><p class="muted">${d}</p>
     <div class="techlist" style="margin-top:6px">${MISSIONS.map(m=>`<div>${L(m.tech)}</div>`).join('')}</div></div>
   <div class="card"><p>${L(['You have covered all 16 chapters: from algorithms and hardware to spreadsheets and Python. Keep it fresh with a few rounds in the Dojo each week, and look through the Codex before tests.','Hai completato tutti i 16 capitoli: dagli algoritmi e l\'hardware ai fogli di calcolo e Python. Tieniti in allenamento con qualche round nel Dojo ogni settimana e sfoglia il Glossario prima delle verifiche.'])}</p>
     <div class="row" style="margin-top:12px"><button class="btn" id="dj">Dojo</button><button class="btn ghost" id="cx">${L(U.codex)}</button><button class="btn ghost" id="mp">${L(U.missions)}</button></div></div>`;
  $('#dj').onclick=startDojo; $('#cx').onclick=renderCodex; $('#mp').onclick=renderMap; toTop(); pauseSmil();
}

/* ============ dojo ============ */
function startDojo(){
  renderHUD();
  const pool=MISSIONS.filter(m=>S.cleared[m.id]).flatMap(m=>m.quiz);
  if(!pool.length){renderMap();return;}
  const qs=shuffle(pool.slice()).slice(0,8);
  const dummy={demon:['Training Dummy','Manichino d\'allenamento'],hue:220,horns:1,eyes:1,tech:['Training','Allenamento'],quiz:qs};
  app.innerHTML=`<div class="mhead"><div><div class="eyebrow">Dojo · ${L(['mixed review','ripasso misto'])}</div><h2>${L(['Training Hall','Sala d\'allenamento'])}</h2></div></div><div id="bt" style="display:flex;flex-direction:column;gap:14px"></div>`;
  startBattle(dummy,$('#bt'),{dojo:true,qs}); toTop();
}

/* ============ codex ============ */
function renderCodex(){
  VIEW='codex'; renderHUD();
  app.innerHTML=`<div class="mhead"><div><div class="eyebrow">${L(['Hunter\'s Codex · English + Italiano','Glossario della cacciatrice · Italiano + English'])}</div><h2>${L(U.codex)}</h2></div></div>
    <p class="muted" style="max-width:62ch">${L(['Every key term, with its Italian name. Terms unlock when you open the mission that teaches them.','Tutti i termini chiave, con il nome in inglese. Si sbloccano quando apri la missione che li spiega.'])}</p>
    <input class="codex-search" id="cxq" placeholder="${L(['Search a term (English or Italian)','Cerca un termine (italiano o inglese)'])}" autocomplete="off"><div id="cxl" style="display:flex;flex-direction:column;gap:18px"></div>`;
  const list=()=>{ const q=$('#cxq').value.trim().toLowerCase();
    $('#cxl').innerHTML=MISSIONS.map((m,mi)=>{ const seen=S.seen[mi];
      const es=CODEX.filter(e=>e[0]===mi&&(!q||(seen&&e.slice(1).join(' ').toLowerCase().includes(q))));
      if(!es.length) return '';
      return `<div class="cx-group"><h3>§ ${m.sec} · ${L(m.title)}</h3><div class="cx">${es.map(e=>seen?`<div class="cx-e"><b>${LANG==='it'?e[2]:e[1]}</b>${PILL(e[1],e[2])}<p>${LANG==='it'?e[4]:e[3]}</p></div>`:`<div class="cx-e locked"><b>???</b><p>${L(['Unlocks in','Si sblocca in'])} § ${m.sec}.</p></div>`).join('')}</div></div>`;}).join('')||`<p class="muted">${L(['No terms match that search.','Nessun termine corrisponde alla ricerca.'])}</p>`; };
  $('#cxq').oninput=list; list(); toTop();
}


