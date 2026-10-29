// Two-player Race test. Uses a BroadcastChannel stand-in for Supabase so it runs offline.
// Usage: node tests/race.js   (serves the repo on http://localhost:8765)
const {chromium}=require('playwright'); const {spawn}=require('child_process'); const path=require('path');
const MOCK=`window.RACE_TRANSPORT=async(code,me,onPresence,onMsg)=>{
  const bc=new BroadcastChannel('mock-race-'+code); const peers={[me.id]:me}; const emit=()=>onPresence({...peers});
  bc.onmessage=e=>{const m=e.data;
    if(m.t==='join'){peers[m.me.id]=m.me; bc.postMessage({t:'here',me}); emit();}
    else if(m.t==='here'){peers[m.me.id]=m.me; emit();}
    else if(m.t==='leave'){delete peers[m.id]; emit();}
    else onMsg(m.ev,m.payload);};
  bc.postMessage({t:'join',me}); setTimeout(emit,0);
  return {send:(ev,payload)=>bc.postMessage({ev,payload}),leave:()=>{bc.postMessage({t:'leave',id:me.id});bc.close();}};};`;
(async()=>{
  const srv=spawn('python3',['-m','http.server','8765'],{cwd:path.join(__dirname,'..'),stdio:'ignore'});
  await new Promise(r=>setTimeout(r,800));
  const b=await chromium.launch(); const ctx=await b.newContext({viewport:{width:400,height:900}}); await ctx.addInitScript(MOCK); await ctx.route(/fonts\.(googleapis|gstatic)\.com/,r=>r.abort());
  const errs=[]; const mk=async(name)=>{const p=await ctx.newPage(); p.on('pageerror',e=>errs.push(name+': '+e.message));
    await p.goto('http://localhost:8765/index.html',{waitUntil:'domcontentloaded'}); await p.waitForSelector('#app section');
    await p.evaluate(n=>{S.name=n;renderMap();},name); await p.click('#hRace'); return p;};
  const A=await mk('Hana'), Bp=await mk('Luca');
  await A.click('#rcreate'); await A.waitForSelector('.race-code'); const code=await A.textContent('.race-code');
  await Bp.fill('#rcode',code); await Bp.click('#rjoinf button'); await Bp.waitForSelector('.race-code');
  await A.waitForFunction(()=>document.querySelectorAll('.pl').length===2);
  console.log('lobby ok, code',code,'B sees host button?',!!(await Bp.$('#rgo')),'A host?',!!(await A.$('#rgo')));
  await A.selectOption('#rmis','c12m3'); await A.click('#rgo');
  await A.waitForSelector('#rcd'); await Bp.waitForSelector('#rcd');
  await A.waitForSelector('.opt[data-k]',{timeout:8000}); await Bp.waitForSelector('.opt[data-k]',{timeout:8000});
  const n=await A.evaluate(()=>RACE.run.qs.length);
  for(let i=0;i<n;i++){
    for(const [p,good] of [[A,true],[Bp,i%2===0]]){
      await p.waitForFunction(i=>RACE.run&&RACE.run.i===i&&!RACE.run.answered&&document.querySelector('.opt[data-k]:not([disabled])'),i,{timeout:5000});
      const k=await p.evaluate(g=>{const o=RACE.run.qs[RACE.run.i].order; return g?o.indexOf(0):o.indexOf(1);},good);
      await p.click(`.opt[data-k="${k}"]`);
    }
  }
  await A.waitForFunction(()=>RACE.awarded,{timeout:8000}); await Bp.waitForFunction(()=>RACE.awarded,{timeout:8000});
  const res=await A.evaluate(()=>raceStandings().map(p=>p.name+':'+p.score+':'+p.correct));
  console.log('standings',res,'A xp',await A.evaluate(()=>RACE.lastXP),'B xp',await Bp.evaluate(()=>RACE.lastXP));
  await A.screenshot({path:path.join(require('os').tmpdir(),'race-podium.png'),fullPage:true});
  await A.click('#rlobby'); await Bp.waitForSelector('.race-code'); console.log('back to lobby ok');
  await Bp.click('#rleave'); await A.waitForFunction(()=>document.querySelectorAll('.pl').length===1); console.log('leave ok');
  await A.click('#lIT'); console.log('IT lobby text:',(await A.textContent('.eyebrow')).trim());
  console.log('ERR',errs); await b.close(); srv.kill(); if(errs.length) process.exit(1);
})().catch(e=>{console.error(e);process.exit(1);});
