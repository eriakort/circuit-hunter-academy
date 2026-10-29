
/* ============ Race mode: multiplayer over Supabase Realtime (Broadcast + Presence) ============
   No database tables are used. Players in the same room share a Realtime channel:
   - Presence: who is in the room (the earliest joiner is the host)
   - Broadcast: "start" (mission + random seed), "progress" (each answer), "lobby" (back to lobby)
   Every client builds the same question order from the seed, so nothing else needs syncing. */
const RACE_QTIME=20000, RACE_MAX=8, RACE_SB_VERSION='2.117.3';
const RACE={net:null,code:'',me:null,players:{},progress:{},state:'home',run:null,err:'',busy:false,awarded:false,tick:null,pending:false};
const raceCfg=()=>{const c=window.RACE_CONFIG||{}; return c.url&&c.anonKey&&!/YOUR[-_]/i.test(c.url+c.anonKey)?c:null;};
function rng(seed){let a=seed>>>0;return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
function sshuffle(arr,r){for(let i=arr.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}return arr;}
const hueOf=s=>{let h=0;for(const c of String(s))h=(h*31+c.charCodeAt(0))%360;return h;};
const raceAvatar=(name,hue,cls='avatar')=>`<svg viewBox="0 0 64 64" class="${cls}" aria-hidden="true"><polygon points="32,2 59,17 59,47 32,62 5,47 5,17" fill="hsl(${hue} 55% 22%)" stroke="hsl(${hue} 90% 65%)" stroke-width="4"/><text x="32" y="42" text-anchor="middle" font-family="Dela Gothic One, Arial Black, sans-serif" font-size="26" fill="hsl(${hue} 90% 70%)">${esc((name||'?').trim().charAt(0).toUpperCase())}</text></svg>`;
function raceQuestions(missionId,seed){
  const r=rng(seed);
  const pool=missionId==='mix'?sshuffle(MISSIONS.flatMap(m=>m.quiz),r).slice(0,10):sshuffle(MISSIONS.find(m=>m.id===missionId).quiz.slice(),r);
  return pool.map(q=>({q,order:sshuffle([0,1,2,3],r)}));
}
function loadSupabase(){
  return new Promise((res,rej)=>{
    if(window.supabase&&window.supabase.createClient) return res(window.supabase);
    const tryLoad=(src,next)=>{const s=document.createElement('script');s.src=src;s.onload=()=>window.supabase&&window.supabase.createClient?res(window.supabase):next();s.onerror=next;document.head.appendChild(s);};
    tryLoad('vendor/supabase.js',()=>tryLoad(`https://cdn.jsdelivr.net/npm/@supabase/supabase-js@${RACE_SB_VERSION}/dist/umd/supabase.js`,()=>rej(new Error('load'))));
  });
}
let SB_CLIENT=null;
async function raceConnect(code,onPresence,onMsg){
  if(window.RACE_TRANSPORT) return window.RACE_TRANSPORT(code,RACE.me,onPresence,onMsg); /* test hook */
  const cfg=raceCfg(); if(!cfg) throw new Error('config');
  const sb=await loadSupabase();
  SB_CLIENT=SB_CLIENT||sb.createClient(cfg.url,cfg.anonKey);
  const ch=SB_CLIENT.channel('cha-race-'+code,{config:{presence:{key:RACE.me.id},broadcast:{self:false}}});
  ch.on('presence',{event:'sync'},()=>{const st=ch.presenceState(), ps={}; Object.entries(st).forEach(([k,arr])=>{if(arr&&arr[0]) ps[k]=arr[0];}); onPresence(ps);});
  ['start','progress','lobby'].forEach(ev=>ch.on('broadcast',{event:ev},({payload})=>onMsg(ev,payload)));
  await new Promise((res,rej)=>{let ok=false; const t=setTimeout(()=>{if(!ok)rej(new Error('timeout'));},12000);
    ch.subscribe(async st=>{ if(st==='SUBSCRIBED'&&!ok){ok=true;clearTimeout(t);try{await ch.track(RACE.me);}catch(e){} res();} else if(!ok&&(st==='CHANNEL_ERROR'||st==='TIMED_OUT'||st==='CLOSED')){clearTimeout(t);rej(new Error(st));} });});
  return {send:(ev,payload)=>ch.send({type:'broadcast',event:ev,payload}),leave:()=>{try{SB_CLIENT.removeChannel(ch);}catch(e){}}};
}
const racePlayers=()=>Object.entries(RACE.players).map(([id,p])=>({...p,id})).sort((a,b)=>a.joinedAt-b.joinedAt||(a.id<b.id?-1:1));
const raceHost=()=>{const p=racePlayers()[0];return p&&p.id;};
const iAmHost=()=>RACE.me&&raceHost()===RACE.me.id;

/* ---- networking events ---- */
function onPresence(ps){
  RACE.players=ps;
  const list=racePlayers();
  if(list.length>RACE_MAX&&list.findIndex(p=>p.id===RACE.me.id)>=RACE_MAX){ raceLeave(L(['That room is full (8 players).','La stanza è piena (8 giocatori).'])); return; }
  if(VIEW!=='race') return;
  if(RACE.state==='running'||RACE.state==='done') updateTrack(); else renderRace();
}
function onMsg(ev,p){
  if(ev==='start') beginRace(p);
  else if(ev==='progress'){
    if(!RACE.run||p.raceId!==RACE.run.raceId){ if(RACE.state==='lobby'&&!RACE.busy){RACE.busy=true; if(VIEW==='race') renderRace();} return; }
    RACE.progress[p.id]=p; updateTrack(); checkAllDone();
  }
  else if(ev==='lobby'){ toLobby(); }
}

/* ---- actions ---- */
async function raceJoin(code,create){
  code=code.toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,6);
  if(code.length<4){RACE.err=L(['Room codes have 4 characters.','I codici stanza hanno 4 caratteri.']);renderRace();return;}
  if(!S.name){renderMap();return;}
  RACE.me={id:Math.random().toString(36).slice(2,10),name:S.name,joinedAt:Date.now()+(create?0:1),hue:hueOf(S.name+Math.random())};
  RACE.err=''; RACE.pending=true; renderRace();
  try{ RACE.net=await raceConnect(code,onPresence,onMsg); RACE.code=code; RACE.state='lobby'; RACE.busy=false; RACE.pending=false; renderRace(); }
  catch(e){ RACE.pending=false; RACE.net=null;
    RACE.err=e.message==='config'?'config':L(['Couldn\'t connect to the race server. Inside the Claude preview, live connections are blocked: open the GitHub Pages version. Otherwise check config.js and your internet connection.','Impossibile collegarsi al server della gara. Nell\'anteprima di Claude le connessioni in tempo reale sono bloccate: apri la versione su GitHub Pages. Altrimenti controlla config.js e la connessione a internet.']);
    renderRace(); }
}
function raceLeave(msg){
  if(RACE.net) RACE.net.leave();
  clearInterval(RACE.tick);
  Object.assign(RACE,{net:null,code:'',players:{},progress:{},state:'home',run:null,busy:false,err:msg||''});
  if(VIEW==='race') renderRace();
}
function raceStart(){
  if(!iAmHost()) return;
  const mid=$('#rmis').value;
  const p={raceId:Math.random().toString(36).slice(2,9),missionId:mid,seed:Math.floor(Math.random()*2**31)};
  RACE.net.send('start',p); beginRace(p);
}
function beginRace(p){
  clearInterval(RACE.tick);
  const qs=raceQuestions(p.missionId,p.seed);
  RACE.run={...p,qs,i:0,score:0,correct:0,answered:false,qStart:0,startLocal:performance.now()+3600,done:false};
  RACE.progress={}; RACE.awarded=false; RACE.busy=false;
  racePlayers().forEach(pl=>RACE.progress[pl.id]={id:pl.id,name:pl.name,hue:pl.hue,raceId:p.raceId,idx:0,score:0,correct:0,done:false});
  RACE.state='countdown'; VIEW='race'; renderRace();
  const cd=()=>{ if(!RACE.run||RACE.run.raceId!==p.raceId) return; const left=RACE.run.startLocal-performance.now();
    if(left<=0){ RACE.state='running'; RACE.run.qStart=performance.now(); renderRace(); RACE.tick=setInterval(raceTick,200); return; }
    const el=$('#rcd'); if(el){ const n=String(Math.ceil(left/1200)); if(el.textContent!==n){el.textContent=n; el.style.animation='none'; void el.offsetWidth; el.style.animation='';} }
    setTimeout(cd,100); };
  cd();
}
function raceTick(){
  const R=RACE.run; if(!R||RACE.state!=='running'||R.answered) return;
  const left=Math.max(0,RACE_QTIME-(performance.now()-R.qStart));
  const bar=$('#rtime'); if(bar) bar.style.width=(left/RACE_QTIME*100)+'%';
  if(left<=0) raceAnswer(-1);
}
function raceAnswer(k){
  const R=RACE.run; if(!R||R.answered||RACE.state!=='running') return;
  R.answered=true; const el=performance.now()-R.qStart; const cur=R.qs[R.i];
  const ok=k>=0&&cur.order[k]===0;
  if(ok){R.correct++; R.score+=100+Math.round(50*Math.max(0,1-el/RACE_QTIME));}
  $$('.opt').forEach((b,j)=>{b.disabled=true; if(cur.order[j]===0) b.classList.add('right'); else if(j===k) b.classList.add('wrong');});
  const fb=$('#rfb'); if(fb){ fb.className='fb '+(ok?'ok':'no'); fb.textContent=ok?L(['Hit!','Colpito!']):(k<0?L(['Time\'s up!','Tempo scaduto!']):L(['Missed!','Mancato!'])); }
  const done=R.i+1>=R.qs.length;
  if(done){R.done=true; R.finishMs=Math.round(performance.now()-R.startLocal);}
  const mine={id:RACE.me.id,name:RACE.me.name,hue:RACE.me.hue,raceId:R.raceId,idx:R.i+1,score:R.score,correct:R.correct,done,finishMs:R.finishMs||null};
  RACE.progress[RACE.me.id]=mine; RACE.net&&RACE.net.send('progress',mine); updateTrack();
  setTimeout(()=>{ if(RACE.run!==R) return;
    if(done){ clearInterval(RACE.tick); RACE.state='done'; renderRace(); checkAllDone(); }
    else { R.i++; R.answered=false; R.qStart=performance.now(); if(VIEW==='race') renderRace(); } },1300);
}
function raceStandings(){
  const ids=new Set(RACE.run?Object.keys(RACE.progress):Object.keys(RACE.players));
  return [...ids].map(id=>RACE.progress[id]||{id,name:(RACE.players[id]||{}).name,hue:(RACE.players[id]||{}).hue,idx:0,score:0,correct:0,done:false})
    .filter(p=>p.name).sort((a,b)=>b.score-a.score||(a.finishMs||1e12)-(b.finishMs||1e12));
}
function checkAllDone(){
  if(!RACE.run||RACE.state!=='done') return;
  const racers=Object.keys(RACE.progress).filter(id=>RACE.players[id]||id===RACE.me.id);
  const all=racers.every(id=>RACE.progress[id].done);
  if(all&&!RACE.awarded){ RACE.awarded=true; const st=raceStandings(); const R=RACE.run;
    let xp=R.correct*3; if(st.length>1&&st[0].id===RACE.me.id) xp+=25; addXP(xp); RACE.lastXP=xp;
    if(VIEW==='race') renderRace(); }
}
function toLobby(){ clearInterval(RACE.tick); RACE.run=null; RACE.progress={}; RACE.state=RACE.net?'lobby':'home'; RACE.busy=false; if(VIEW==='race') renderRace(); }

/* ---- rendering ---- */
function trackHTML(){
  const R=RACE.run, n=R?R.qs.length:1;
  return raceStandings().map(p=>{const pct=Math.min(1,(p.idx||0)/n); const me=RACE.me&&p.id===RACE.me.id;
    return `<div class="lane ${me?'me':''}"><span class="nm">${esc(p.name)}${p.done?' ✓':''}</span><span class="flag"></span><span class="sc">${p.score}</span>
      <span class="runner" style="left:calc(${(pct*100).toFixed(1)}% - ${pct*46}px)">${raceAvatar(p.name,p.hue,'')}</span></div>`;}).join('');
}
function updateTrack(){ const t=$('#rtrack'); if(t) t.innerHTML=trackHTML(); }
function missionOptions(){
  let h=`<option value="mix">${L(['Mixed review: 10 questions from every chapter','Ripasso misto: 10 domande da tutti i capitoli'])}</option>`;
  UNITS.forEach((u,ui)=>{ h+=`<optgroup label="${L(['Unit','Unità'])} ${ui+1} · ${esc(L(u.title))}">`;
    MISSIONS.forEach(m=>{ if((ARCS[m.arc].unit||0)===ui) h+=`<option value="${m.id}">§ ${m.sec} · ${esc(L(m.title))}</option>`; }); h+='</optgroup>'; });
  return h;
}
function renderRace(){
  VIEW='race'; renderHUD();
  const head=`<div class="mhead"><div><div class="eyebrow">${L(['Multiplayer','Multigiocatore'])}</div><h2>${L(['Race Arena','Arena della Gara'])}</h2></div>${RACE.code?`<button class="btn ghost sm" id="rleave">${L(['Leave room','Esci dalla stanza'])}</button>`:''}</div>`;
  let body='';
  if(RACE.state==='home'){
    const cfgMissing=!raceCfg()&&!window.RACE_TRANSPORT;
    body=`<div class="card" style="display:flex;flex-direction:column;gap:14px">
      <p>${L(['Race your friends through any mission. Everyone gets the same questions at the same time; faster correct answers score more.','Sfida le tue amiche in qualsiasi missione. Tutte ricevono le stesse domande nello stesso momento; le risposte giuste più veloci valgono di più.'])}</p>
      ${cfgMissing?`<div class="why"><b>${L(['Not connected yet.','Non ancora collegata.'])}</b> ${L(['The arena needs a free Supabase project. Add its URL and anon key to config.js (see the README), then play from the GitHub Pages link.','L\'arena ha bisogno di un progetto Supabase gratuito. Aggiungi URL e chiave anon in config.js (vedi il README), poi gioca dal link di GitHub Pages.'])}</div>`:''}
      ${RACE.err&&RACE.err!=='config'?`<div class="fb no">${esc(RACE.err)}</div>`:''}
      ${RACE.err==='config'?`<div class="fb no">${L(['config.js has no Supabase URL and key yet.','config.js non contiene ancora URL e chiave di Supabase.'])}</div>`:''}
      <div class="twocol"><div class="panel" style="display:flex;flex-direction:column;gap:10px"><h3>${L(['Create a room','Crea una stanza'])}</h3><p class="muted">${L(['You\'ll be the host and choose the mission.','Sarai tu a ospitare e scegliere la missione.'])}</p>
        <button class="btn" id="rcreate" ${RACE.pending?'disabled':''}>${RACE.pending?L(['Connecting…','Connessione…']):L(['Create room','Crea stanza'])}</button></div>
       <form class="panel" id="rjoinf" style="display:flex;flex-direction:column;gap:10px"><h3>${L(['Join a room','Entra in una stanza'])}</h3><label for="rcode" class="muted">${L(['Room code','Codice stanza'])}</label>
        <input id="rcode" class="ans" maxlength="4" autocomplete="off" placeholder="ABCD" style="width:100%"><button class="btn cyan" type="submit" ${RACE.pending?'disabled':''}>${L(['Join','Entra'])}</button></form></div></div>`;
  } else if(RACE.state==='lobby'){
    const host=iAmHost(), list=racePlayers();
    body=`<div class="card" style="display:flex;flex-direction:column;gap:14px;align-items:center;text-align:center">
      <div class="eyebrow">${L(['Room code: share it with your friends','Codice stanza: condividilo con le amiche'])}</div><div class="race-code">${RACE.code}</div>
      <div class="plist" style="width:100%;max-width:420px">${list.map((p,i)=>`<div class="pl">${raceAvatar(p.name,p.hue)}<b style="flex:1;text-align:left">${esc(p.name)}${p.id===RACE.me.id?` <span class="muted">(${L(['you','tu'])})</span>`:''}</b>${i===0?`<span class="badge go">${L(['host','host'])}</span>`:''}</div>`).join('')}</div>
      <p class="muted">${list.length}/${RACE_MAX} ${L(['players','giocatori'])}</p>
      ${RACE.busy?`<div class="fb">${L(['A race is already running in this room. You\'ll join the next one.','In questa stanza è già in corso una gara. Parteciperai alla prossima.'])}</div>`:''}
      ${host?`<label for="rmis" class="eyebrow">${L(['Choose the mission','Scegli la missione'])}</label><select id="rmis" class="race-sel">${missionOptions()}</select>
        <button class="btn" id="rgo">${L(['Start the race!','Inizia la gara!'])}</button>`:`<p>${L(['Waiting for the host to start…','In attesa che l\'host faccia partire la gara…'])}</p>`}</div>`;
  } else if(RACE.state==='countdown'){
    body=`<div class="card" style="display:flex;flex-direction:column;gap:12px;align-items:center"><div class="eyebrow">${L(['Get ready','Preparati'])}</div><div class="countdown" id="rcd">3</div>
      <div class="lanes" id="rtrack" style="width:100%">${trackHTML()}</div></div>`;
  } else if(RACE.state==='running'){
    const R=RACE.run, cur=R.qs[R.i];
    body=`<div class="lanes" id="rtrack">${trackHTML()}</div>
     <div class="card qcard"><div class="row" style="justify-content:space-between"><span class="eyebrow">${L(['Question','Domanda'])} ${R.i+1} / ${R.qs.length}</span><span class="rank">${R.score} pts</span></div>
      <div class="timer"><i id="rtime" style="width:${Math.max(0,100-(performance.now()-R.qStart)/RACE_QTIME*100)}%"></i></div>
      <div class="qtext">${L(cur.q.q)}</div>
      <div class="opts">${cur.order.map((o,j)=>`<button class="opt" data-k="${j}">${L(cur.q.a[o])}</button>`).join('')}</div><div class="fb" id="rfb" aria-live="polite"></div></div>`;
  } else if(RACE.state==='done'){
    const st=raceStandings(), all=RACE.awarded, host=iAmHost();
    const top=st.slice(0,3), order=[1,0,2].filter(i=>top[i]);
    body=`<div class="card result">${all?`<div class="eyebrow">${L(['Final results','Classifica finale'])}</div>
       <div class="podium">${order.map(i=>`<div>${raceAvatar(top[i].name,top[i].hue)}<b>${esc(top[i].name)}</b><span class="rank">${top[i].score}</span><div class="blk" style="height:${[90,64,44][i]}px;background:${[C.gold,'#c9ccd8','#d08a4e'][i]}">${i+1}</div></div>`).join('')}</div>
       <p class="muted">${L(['You earned','Hai guadagnato'])} +${RACE.lastXP||0} XP</p>`:`<div class="eyebrow">${L(['You finished!','Hai finito!'])}</div><p>${L(['Waiting for the other racers…','In attesa delle altre concorrenti…'])}</p>`}
      <div class="lanes" id="rtrack" style="width:100%">${trackHTML()}</div>
      <table class="trace" style="width:100%;max-width:420px"><tr><th>#</th><th>${L(['Name','Nome'])}</th><th>${L(['Correct','Giuste'])}</th><th>${L(['Points','Punti'])}</th></tr>${st.map((p,i)=>`<tr><td>${i+1}</td><td style="text-align:left">${esc(p.name)}</td><td>${p.correct}/${RACE.run.qs.length}</td><td>${p.score}</td></tr>`).join('')}</table>
      <div class="row" style="justify-content:center">${host?`<button class="btn" id="rlobby">${L(['New race','Nuova gara'])}</button>`:`<span class="muted">${L(['The host can start a new race.','L\'host può avviare una nuova gara.'])}</span>`}</div></div>`;
  }
  app.innerHTML=head+body;
  const on=(id,f)=>{const e=$(id); if(e) e.onclick=f;};
  on('#rleave',()=>raceLeave());
  on('#rcreate',()=>{ const A='ABCDEFGHJKMNPQRSTUVWXYZ23456789'; let c=''; for(let i=0;i<4;i++) c+=A[Math.floor(Math.random()*A.length)]; raceJoin(c,true); });
  const jf=$('#rjoinf'); if(jf) jf.onsubmit=e=>{e.preventDefault(); raceJoin($('#rcode').value,false);};
  on('#rgo',raceStart);
  on('#rlobby',()=>{ RACE.net&&RACE.net.send('lobby',{}); toLobby(); });
  $$('.opt[data-k]').forEach(b=>b.onclick=()=>raceAnswer(+b.dataset.k));
  pauseSmil();
}
window.addEventListener('pagehide',()=>{ if(RACE.net) RACE.net.leave(); });
