// Automated playthrough of every mission. Usage: node tests/playthrough.js en|it  (needs: npm i playwright)
const {chromium}=require('playwright');
const lang=process.argv[2]||'en';
(async()=>{
 const b=await chromium.launch(); const p=await b.newPage({viewport:{width:400,height:900}});
 await p.emulateMedia({reducedMotion:'reduce'});
 const errs=[]; p.on('pageerror',e=>errs.push(e.message)); p.on('console',m=>{if(m.type()==='error'&&!m.text().includes('ERR_TUNNEL'))errs.push(m.text())});
 const html=require('fs').readFileSync(require('path').join(__dirname,'..','index.html'),'utf8');
 await p.setContent(html,{waitUntil:'domcontentloaded'});
 await p.waitForTimeout(300);
 if(lang==='it') await p.click('#lIT');
 await p.fill('#nm','Hana'); await p.click('#regf button');
 const sol=['FFFF','LFFFRFFFFRFFF','LFFRFFFLFFFRFF'];
 const N=await p.evaluate(()=>MISSIONS.length);
 for(let m=0;m<N;m++){
  await p.evaluate(i=>openMission(i),m);
  for(let guard=0;guard<40;guard++){
   const sc=await p.evaluate(()=>{const s=MISSIONS[CUR.m].scenes[CUR.s];return s.type||'talk'});
   if(sc==='battle'){
     for(let g=0;g<40;g++){
       const done=await p.evaluate(()=>{ if(!document.querySelector('.opt')) return true;
         const q=B.queue[0]; const btns=[...document.querySelectorAll('.opt')]; const r=btns.find(x=>x.textContent===L(q.a[0])); r.click(); document.querySelector('#qfb .btn').click(); return false;});
       if(done) break;
     }
     break;
   }
   if(sc==='robot'){
     for(let lv=0;lv<3;lv++){ for(const c of sol[lv]) await p.click(`[data-c="${c}"]`); await p.click('#run'); await p.waitForTimeout(sol[lv].length*80+300); if(lv<2) await p.click('#nl'); }
   }
   if(sc==='pwd'){ await p.fill('#pw','Kz!8mQ#2vLp9xw'); }
   if(sc==='sheet'){
     const set=await p.evaluate(()=>MISSIONS[CUR.m].scenes[CUR.s].set);
     const F={budget:{en:['=SUM(B2:B5)','=B7-B6'],it:['=SOMMA(B2:B5)','=B7-B6']},temp:{en:['=A2*9/5+32','=A9*(1-$B$7)'],it:['=A2*9/5+32','=A9*(1-$B$7)']},logic:{en:['=IF(B2>=6,"OK","NO")','=B7^2-4*A7*C7'],it:['=SE(B2>=6;"OK";"NO")','=B7^2-4*A7*C7']}}[set][lang];
     for(const f of F){ await p.fill('#fx',f); await p.click('#sf button'); }
   }
   await p.evaluate(()=>{
     const sc=MISSIONS[CUR.m].scenes[CUR.s];
     const clk=s=>{const e=document.querySelector(s); if(e) e.click(); return !!e;};
     if(sc.type==='order'){ sc.steps.forEach(t=>[...document.querySelectorAll('#oQ .btn')].find(b=>b.textContent===L(t)).click()); }
     if(sc.type==='fde'){ for(let i=0;i<5;i++) clk('#sF'); }
     if(sc.type==='journey'){ for(let i=0;i<6;i++) clk('#sF'); }
     if(sc.init==='powercut'){ clk('#cut'); clk('#cut'); }
     if(sc.init==='board'){ document.querySelector('.zone').dispatchEvent(new MouseEvent('click',{bubbles:true})); }
     if(sc.type==='build'){ for(const k of ['cpu','cool','ram','gpu','ssd','psu']){ clk(`.pbtn[data-k="${k}"]`); clk(`.slot[data-k="${k}"]`); } }
     if(sc.type==='sort'){ for(let i=0;i<sc.items.length;i++){ const name=document.querySelector('.iname').textContent; const it=sc.items.find(x=>L(x.n)===name); clk(`.cat[data-k="${it.c}"]`); clk('#sN'); } }
     if(sc.type==='bits'){ for(const t of [5,13,42,100,255]){ const V=[128,64,32,16,8,4,2,1]; V.forEach((v,i)=>{ if(t&v) clk(`.lamp[data-i="${i}"]`); }); clk('#bn'); } }
     if(sc.type==='ascii'){ const W=LANG==='it'?['EROE','OK','BUG']:['HERO','OK','CODE']; for(const w of W){ document.querySelector('#ai').value=w; document.querySelector('#af').requestSubmit(); clk('#an'); } }
     if(sc.type==='rgb'){ for(const c of [[255,255,0],[128,0,128],[0,255,255],[255,165,0]]){ c.forEach((v,i)=>{const s=document.querySelector('#s'+i); s.value=v; s.dispatchEvent(new Event('input'));}); clk('#cn'); } }
     if(sc.type==='format'){ const T=[{title:{b:1,i:0,u:0,al:'center',sz:24},body:{b:0,i:0,u:0,al:'left',sz:12}},{title:{b:1,i:0,u:1,al:'left',sz:20},body:{b:0,i:1,u:0,al:'justify',sz:12}},{title:{b:0,i:1,u:0,al:'right',sz:16},body:{b:1,i:0,u:0,al:'center',sz:16}}];
       for(const t of T){ for(const part of ['title','body']){ clk(`[data-p="${part}"]`); const f=t[part]; for(const k of ['b','i','u']) if(f[k]) clk(`[data-t="${k}"]`); if(f.al!=='left') clk(`[data-a="${f.al}"]`); if(f.sz!==12){const s=document.querySelector('#fs'); if(s){s.value=String(f.sz); s.dispatchEvent(new Event('change'));}} } clk('#fn'); } }
     if(sc.type==='trace'){ const A=[[1,2],[3,3],[6,4],[10,5]]; document.querySelectorAll('input[data-k]').forEach(i=>{const [a,b]=i.dataset.k.split('-');i.value=A[a][b];}); document.querySelector('#tout').value='10'; clk('#tchk'); }
     if(sc.type==='predict'){ for(const q of sc.rounds){ document.querySelector('#po').value=L(q.out); clk('#pk'); clk('#pn'); } }
     if(sc.type==='gates'){ for(let t=0;t<5;t++){ for(let k=0;k<6 && !document.querySelector('#gF.ok');k++){ const a=document.querySelector('#gA:not([disabled])'), bb=document.querySelector('#gB:not([disabled])'); if(k%2===0&&bb) bb.click(); else if(a) a.click(); else if(bb) bb.click(); } clk('#gn'); } }
     if(sc.type==='stackq'){ for(let r=0;r<5;r++){ for(const b of [...document.querySelectorAll('[data-c]')]){ if(document.querySelector('#qF.ok')) break; b.click(); } clk('#qn'); } }
   });
   const dis=await p.evaluate(()=>document.querySelector('#next').disabled);
   if(dis){console.log('STUCK',m,await p.evaluate(()=>[MISSIONS[CUR.m].id,CUR.s,MISSIONS[CUR.m].scenes[CUR.s].type, (document.querySelector('.fb')||{}).textContent]));break;}
   await p.click('#next');
  }
 }
 console.log(lang,'xp',await p.evaluate(()=>S.xp),'cleared',await p.evaluate(()=>Object.keys(S.cleared).length),'/',N,'view',await p.evaluate(()=>VIEW));
 console.log('scrollWidth',await p.evaluate(()=>document.documentElement.scrollWidth));
 console.log('ERR',errs); await b.close();
 if(errs.length) process.exit(1);
})();
