<div class="wrap">
  <header class="hud" id="hud"></header>
  <main id="app" aria-live="polite"></main>
</div>
<script>
/* ============ helpers ============ */
const $ = (s, el=document) => el.querySelector(s);
const $$ = (s, el=document) => [...el.querySelectorAll(s)];
const shuffle = a => { for (let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };
const C = {ink:'#0e0f22',panel:'#171935',p2:'#20234a',line:'#454a8e',text:'#eeecf8',muted:'#a9a8cc',ember:'#ff6a3d',data:'#45d8ff',sak:'#ff8fc0',good:'#4be39a',bad:'#ff4d6d',gold:'#ffd166'};
const REDUCED = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
let LANG = 'en';
/* L(['english','italiano']) picks the current language */
const L = x => Array.isArray(x) ? x[LANG==='it'?1:0] : x;
/* pill showing the term in the OTHER language */
const PILL = (en,it) => LANG==='it' ? `<span class="it" data-l="EN">${en}</span>` : `<span class="it" data-l="IT">${it}</span>`;
const H = (en,it) => `${LANG==='it'?it:en}${PILL(en,it)}`;
/* [[EN term|IT term]] markup inside lesson text */
const rich = s => s.replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g,(m,en,it)=>`<span class="term">${LANG==='it'?it:en}</span>${PILL(en,it)}`);
const cards = list => `<div class="grid3">${list.map(c=>`<div class="mini">${ICON(c[0])}<b>${L(c[1])}</b><span>${L(c[2])}</span></div>`).join('')}</div>`;

/* ============ icons (24px stroke) ============ */
const ICONS = {
  keyboard:'<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h0M10 10h0M14 10h0M18 10h0M7 14h10"/>',
  mouse:'<rect x="6" y="3" width="12" height="18" rx="6"/><path d="M12 7v4"/>',
  mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8"/>',
  webcam:'<circle cx="12" cy="10" r="7"/><circle cx="12" cy="10" r="3"/><path d="M8 21h8M12 17v4"/>',
  monitor:'<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
  speaker:'<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12"/>',
  printer:'<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><rect x="7" y="14" width="10" height="7"/>',
  touch:'<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
  headset:'<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="2" y="14" width="5" height="7" rx="1"/><rect x="17" y="14" width="5" height="7" rx="1"/><path d="M4.5 21c0 1.5 3 2 5.5 1.5"/>',
  scanner:'<rect x="2" y="11" width="20" height="9" rx="2"/><path d="M4 8l16-3M6 15h12"/>',
  sensor:'<path d="M12 3a2 2 0 0 0-2 2v9a4 4 0 1 0 4 0V5a2 2 0 0 0-2-2z"/><path d="M12 9v7"/>',
  projector:'<rect x="2" y="8" width="20" height="9" rx="2"/><circle cx="16" cy="12.5" r="2.5"/><path d="M5 12h5"/>',
  gamepad:'<path d="M6 8h12a4 4 0 0 1 4 4v2a3 3 0 0 1-5 2l-2-2H9l-2 2a3 3 0 0 1-5-2v-2a4 4 0 0 1 4-4z"/><path d="M7 10.5v3M5.5 12h3M16 12h0M18 13h0"/>',
  chip:'<rect x="6" y="6" width="12" height="12" rx="1"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
  ram:'<rect x="2" y="7" width="20" height="9" rx="1"/><path d="M5 10h3v3H5zM10.5 10h3v3h-3zM16 10h3v3h-3zM4 19v-3M8 19v-3M12 19v-3M16 19v-3M20 19v-3"/>',
  disc:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="M12 6a6 6 0 0 1 6 6"/>',
  cloud:'<path d="M7 18a5 5 0 1 1 1-9.9A6 6 0 0 1 19 10a4 4 0 0 1-1 8z"/>',
  hdd:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="11" r="5"/><path d="M12 11l4 6"/>',
  ssd:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9h4v6H7zM13 9h4v6h-4z"/>',
  usb:'<rect x="8" y="2" width="8" height="7"/><rect x="6" y="9" width="12" height="13" rx="2"/><path d="M10 5h0M14 5h0"/>',
  sd:'<path d="M6 2h9l4 4v16H6z"/><path d="M9 5v3M12 5v3M15 6v2"/>',
  tape:'<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="8" cy="12" r="2.5"/><circle cx="16" cy="12" r="2.5"/>',
  app:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M6 6.5h0M8.5 6.5h0"/>',
  shield:'<path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
  folder:'<path d="M3 6a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/>',
  file:'<path d="M6 2h8l4 4v16H6z"/><path d="M14 2v4h4M9 12h6M9 16h6"/>',
  image:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 17l-6-6-9 9"/>',
  music:'<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
  video:'<rect x="2" y="5" width="15" height="14" rx="2"/><path d="M17 10l5-3v10l-5-3z"/>',
  zip:'<path d="M6 2h12v20H6z"/><path d="M12 2v2M12 6v2M12 10v2M10 14h4v4h-4z"/>',
  layers:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  power:'<path d="M12 2v10M6.3 6.3a8 8 0 1 0 11.4 0"/>',
  fan:'<circle cx="12" cy="12" r="9"/><path d="M12 12c0-4 2-6 4-5s0 4-4 5zM12 12c4 0 6 2 5 4s-4 0-5-4zM12 12c0 4-2 6-4 5s0-4 4-5zM12 12c-4 0-6-2-5-4s4 0 5 4z"/>',
  gpu:'<rect x="2" y="6" width="20" height="11" rx="1"/><circle cx="8" cy="11.5" r="3"/><circle cx="16" cy="11.5" r="3"/><path d="M4 17v3M8 17v2M12 17v2"/>',
  psu:'<rect x="3" y="5" width="18" height="14" rx="1"/><circle cx="10" cy="12" r="4"/><path d="M17 9v6"/>',
  board:'<rect x="3" y="3" width="18" height="18" rx="1"/><rect x="7" y="7" width="6" height="6"/><path d="M16 6v8M18 6v8M6 17h12"/>',
  robot:'<rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 4v4M9 13h0M15 13h0M2 13h3M19 13h3"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  wifi:'<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/>',
  router:'<rect x="2" y="13" width="20" height="7" rx="2"/><path d="M6 16.5h0M10 16.5h0M7 13l-2-6M17 13l2-6"/>',
  mail:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 7l10 7 10-7"/>',
  search:'<circle cx="10" cy="10" r="6"/><path d="M15 15l6 6"/>',
  heart:'<path d="M12 20s-8-5-8-11a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 6-8 11-8 11z"/>',
  warn:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18h0"/>',
  recycle:'<path d="M7 19H4l3-5M17 19h3l-3-5M12 4l-2 3h4z"/><path d="M7 14l3-7M17 14l-3-7M7 19h10"/>',
  sat:'<rect x="9" y="9" width="6" height="6"/><path d="M3 5l4 4M17 15l4 4M5 3l4 4M15 17l4 4"/><path d="M15 9l3-3M6 18l3-3"/>',
  compass:'<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
  book:'<path d="M4 4h7a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4zM20 4h-5a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h5z"/>',
  bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  dna:'<path d="M7 2c0 6 10 8 10 14M17 2c0 6-10 8-10 14M7 22c0-2 1-4 3-5M17 22c0-2-1-4-3-5M8 6h8M8 12h8"/>',
  eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  puzzle:'<path d="M4 8h4a2 2 0 1 1 4 0h4v4a2 2 0 1 1 0 4v4H4z"/>',
  scale:'<path d="M12 3v18M5 7h14M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z"/>',
  key:'<circle cx="7" cy="14" r="4"/><path d="M10 12l10-8M17 7l2 2M15 9l2 2"/>',
  watch:'<rect x="6" y="6" width="12" height="12" rx="3"/><path d="M9 6V2h6v4M9 18v4h6v-4M12 10v2l1.5 1.5"/>',
  car:'<path d="M3 16v-4l2-5h14l2 5v4z"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>',
  home:'<path d="M3 11l9-8 9 8v10H3z"/><path d="M9 21v-6h6v6"/>',
  tower:'<path d="M12 10v12M8 22h8M9 14l3-4 3 4M5 6a10 10 0 0 1 14 0M8 8.5a5 5 0 0 1 8 0"/>',
};
const ICON = (k, cls='ico') => `<svg viewBox="0 0 24 24" class="${cls}" aria-hidden="true">${ICONS[k]||ICONS.chip}</svg>`;

/* ============ characters (all original) ============ */
function demonSVG(h, horns=2, eyes=2, cls='demon'){
  const body=`hsl(${h} 62% 42%)`, dark=`hsl(${h} 60% 18%)`, glow=`hsl(${(h+170)%360} 100% 72%)`;
  let hs='';
  for(let i=0;i<horns;i++){const x = horns===1?100: 62+i*(76/(horns-1)); const tip = 14+((i%2)*12)+(Math.abs(x-100)<12?-6:0);
    hs+=`<polygon points="${x-11},66 ${x+(x<100?-6:6)},${tip} ${x+11},66" fill="${dark}" stroke="${glow}" stroke-width="1.5"/>`;}
  let es='';
  for(let i=0;i<eyes;i++){const x = eyes===1?100: 72+i*(56/(eyes-1)); const y = eyes>2 && i%2 ? 92 : 102;
    es+=`<ellipse cx="${x}" cy="${y}" rx="11" ry="7" fill="${glow}"/><rect x="${x-1.6}" y="${y-6}" width="3.2" height="12" fill="${dark}"/>`;}
  let gl='';
  for(let i=0;i<6;i++){const x=30+((i*53)%140), y=40+((i*37)%130);
    gl+=`<rect class="blink" style="animation-delay:${i*.23}s" x="${x}" y="${y}" width="${6+(i%3)*4}" height="5" fill="${glow}" opacity=".7"/>`;}
  return `<svg viewBox="0 0 200 200" class="${cls}" aria-hidden="true"><g class="float">${hs}
    <path d="M40 122 Q38 56 100 50 Q162 56 160 122 Q160 176 132 180 L121 166 L110 182 L100 166 L90 182 L79 166 L68 180 Q40 176 40 122Z" fill="${body}" stroke="${dark}" stroke-width="5"/>
    <path d="M58 92 Q100 70 142 92" fill="none" stroke="${dark}" stroke-width="4" opacity=".6"/>
    ${es}
    <path d="M70 142 L80 133 L90 144 L100 133 L110 144 L120 133 L130 142" fill="none" stroke="${glow}" stroke-width="3.5" stroke-linejoin="round"/>
    ${gl}</g></svg>`;
}
const SENSEI = `<svg viewBox="0 0 64 64" class="avatar" aria-hidden="true"><polygon points="32,2 59,17 59,47 32,62 5,47 5,17" fill="#2a1830" stroke="${C.ember}" stroke-width="3"/><path d="M36 10 L20 36 H31 L26 54 L44 26 H33 Z" fill="${C.gold}"/></svg>`;
const YOU = () => `<svg viewBox="0 0 64 64" class="avatar" aria-hidden="true"><polygon points="32,2 59,17 59,47 32,62 5,47 5,17" fill="#10283a" stroke="${C.data}" stroke-width="3"/><text x="32" y="42" text-anchor="middle" font-family="Dela Gothic One, Arial Black, sans-serif" font-size="26" fill="${C.data}">${(S.name||'H').trim().charAt(0).toUpperCase()}</text></svg>`;
const HEART = on => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l9 10-9 10-9-10z" fill="${on?C.sak:'#2a2d5c'}" stroke="${on?'#fff':'#454a8e'}" stroke-width="1.2"/></svg>`;

/* ============ visuals ============ */
const VIS = {
/* ---------- general ---------- */
title(){
  let lines=''; for(let k=0;k<28;k++){const a=k/28*Math.PI*2; lines+=`<line x1="${320+Math.cos(a)*80}" y1="${115+Math.sin(a)*80}" x2="${320+Math.cos(a)*420}" y2="${115+Math.sin(a)*420}" stroke="${k%2?C.ember:C.data}" stroke-opacity=".18" stroke-width="${k%3+1}"/>`;}
  let hex=''; for(let i=0;i<6;i++){const a=Math.PI/3*i-Math.PI/2; hex+=`${320+Math.cos(a)*72},${115+Math.sin(a)*72} `;}
  return `<svg viewBox="0 0 640 230" class="dia" role="img" aria-label="Circuit Hunter Academy">${lines}
   <polygon points="${hex}" fill="${C.panel}" stroke="${C.ember}" stroke-width="4"/>
   <rect x="292" y="87" width="56" height="56" rx="6" fill="#262a5e" stroke="${C.data}" stroke-width="3"/>
   ${[0,1,2,3].map(i=>`<line x1="${300+i*13}" y1="80" x2="${300+i*13}" y2="87" stroke="${C.data}" stroke-width="3"/><line x1="${300+i*13}" y1="143" x2="${300+i*13}" y2="150" stroke="${C.data}" stroke-width="3"/>`).join('')}
   <path d="M262 175 L380 55" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M262 175 L380 55" stroke="${C.ember}" stroke-width="2" stroke-linecap="round" class="blink"/>
   <text x="320" y="122" text-anchor="middle" style="font-family:var(--display);font-size:20px;fill:${C.gold}">CPU</text>
   <text x="320" y="218" text-anchor="middle" class="lbl">CIRCUIT · HUNTER · ACADEMY</text></svg>`;
},
boss(){ return `<div style="display:flex;justify-content:center"><div style="width:min(240px,70%)">${demonSVG(275,5,3,'dia')}</div></div>`; },

/* ---------- ARC 1: algorithms ---------- */
infowords(){
  return `<div class="wordfx"><span class="a">INFORmazione</span><span class="op">+</span><span class="b">autoMATICA</span><span class="op">=</span><span>INFORMATICA</span></div>
   <p class="muted" style="text-align:center;margin-top:10px">${L(['information + automatic = computer science','informazione + automatica = informatica'])}</p>`;
},
recipe(){
  const st=L([['Fill a pot with water','Put the pot on the stove and boil the water','Put the noodles in a bowl','Pour the boiling water over the noodles','Wait 3 minutes','Add the seasoning and stir'],['Riempi una pentola d\'acqua','Metti la pentola sul fuoco e porta a ebollizione','Metti i noodles in una ciotola','Versa l\'acqua bollente sui noodles','Aspetta 3 minuti','Aggiungi il condimento e mescola']]);
  return `<div class="recipe"><div class="io"><b>IN</b><span>${L(['Input: water, noodle pack, seasoning','Input: acqua, confezione di noodles, condimento'])}</span></div>
   ${st.map((s,i)=>`<div><b>${i+1}</b><span>${s}</span></div>`).join('')}
   <div class="io"><b>OUT</b><span>${L(['Output: a bowl of ramen','Output: una ciotola di ramen'])}</span></div></div>`;
},
props(){ return cards([
  ['gear',['Finite','Finito'],['It must end after a limited number of steps.','Deve terminare dopo un numero limitato di passi.']],
  ['eye',['Unambiguous','Non ambiguo'],['Each step can be understood in only one way.','Ogni passo si può interpretare in un solo modo.']],
  ['bolt',['Executable','Eseguibile'],['Each step can really be carried out.','Ogni passo si può davvero eseguire.']],
  ['layers',['General','Generale'],['It solves a whole family of problems, not just one case.','Risolve un\'intera classe di problemi, non un solo caso.']],
  ['scale',['Deterministic','Deterministico'],['The same input always gives the same output.','Con gli stessi dati in ingresso dà sempre lo stesso risultato.']],
]);},
badalgo(){ return cards([
  ['warn',['"Add some salt."','"Aggiungi un po\' di sale."'],['How much is "some"? AMBIGUOUS.','Quanto è "un po\'"? AMBIGUO.']],
  ['warn',['"Keep stirring."','"Continua a mescolare."'],['Until when? Never stops: NOT FINITE.','Fino a quando? Non finisce mai: NON FINITO.']],
  ['warn',['"Fly to the shop."','"Vola fino al negozio."'],['Impossible: NOT EXECUTABLE.','Impossibile: NON ESEGUIBILE.']],
]);},
ct(){ return cards([
  ['puzzle',['Decomposition','Scomposizione'],['Break a big problem into smaller ones.','Dividere un problema grande in problemi più piccoli.']],
  ['eye',['Pattern recognition','Riconoscimento di schemi'],['Spot what problems have in common.','Notare cosa hanno in comune i problemi.']],
  ['layers',['Abstraction','Astrazione'],['Keep the important details, ignore the rest.','Tenere i dettagli importanti, ignorare il resto.']],
  ['gear',['Algorithms','Algoritmi'],['Write the step-by-step solution.','Scrivere la soluzione passo per passo.']],
]);},
sciences(){ return cards([
  ['dna',['Medicine & biology','Medicina e biologia'],['Computers read DNA and help doctors study scans.','I computer leggono il DNA e aiutano i medici ad analizzare le immagini.']],
  ['cloud',['Weather','Meteorologia'],['Simulations of the atmosphere make forecasts.','Simulazioni dell\'atmosfera producono le previsioni.']],
  ['sat',['Astronomy & physics','Astronomia e fisica'],['Analysing huge amounts of data from telescopes and experiments.','Analizzare enormi quantità di dati da telescopi ed esperimenti.']],
  ['music',['Art & music','Arte e musica'],['Digital drawing, animation, music production.','Disegno digitale, animazione, produzione musicale.']],
]);},
feed(){
  const posts=L([['Dance video','You watched 3 like it',96],['Anime clip','You liked 12 like it',91],['Friend\'s photo','You often comment',74],['News article','You rarely open these',22]],[['Video di ballo','Ne hai guardati 3 simili',96],['Clip anime','Ne hai messi 12 "mi piace"',91],['Foto di un\'amica','Commenti spesso',74],['Articolo di notizie','Li apri raramente',22]]);
  return `<div class="ladder">${posts.map(p=>`<div class="rung"><b>${p[2]}</b><span><b style="font-family:var(--body);color:var(--text)">${p[0]}</b> · ${p[1]}</span></div>`).join('')}</div>
   <p class="muted" style="margin-top:8px;font-size:14px">${L(['Example scores: the feed algorithm ranks posts and shows the highest first.','Punteggi di esempio: l\'algoritmo del feed ordina i post e mostra prima quelli col punteggio più alto.'])}</p>`;
},

/* ---------- ARC 2: encoding ---------- */
switches(){
  const bits=[1,0,1,1,0,0,1,0];
  return `<div class="bitrow">${bits.map(b=>`<div class="${b?'':'z'}"><svg viewBox="0 0 40 40" style="width:34px;height:34px"><circle cx="20" cy="20" r="14" fill="${b?C.gold:'#2a2d5c'}" ${b?'class="blink"':''}/></svg><b>${b}</b><small>${b?'ON':'OFF'}</small></div>`).join('')}</div>
   <p class="muted" style="text-align:center;margin-top:10px">${L(['8 switches = 8 bits = 1 byte','8 interruttori = 8 bit = 1 byte'])}</p>`;
},
places(){
  const v=[128,64,32,16,8,4,2,1], b=[0,0,0,0,1,1,0,1];
  return `<div class="bitrow">${v.map((x,i)=>`<div class="${b[i]?'':'z'}"><small>${x}</small><b>${b[i]}</b></div>`).join('')}</div>
   <p style="text-align:center;margin-top:12px;font-family:var(--mono);font-size:18px">00001101 → 8 + 4 + 1 = <span style="color:var(--gold)">13</span></p>`;
},
div2(){
  return `<div class="div2"><span>13 ÷ 2 = 6</span><span>${L(['remainder','resto'])}</span><span class="r">1</span><span>6 ÷ 2 = 3</span><span>${L(['remainder','resto'])}</span><span class="r">0</span><span>3 ÷ 2 = 1</span><span>${L(['remainder','resto'])}</span><span class="r">1</span><span>1 ÷ 2 = 0</span><span>${L(['remainder','resto'])}</span><span class="r">1</span></div>
   <p style="text-align:center;margin-top:12px">${L(['Read the remainders from the bottom up:','Leggi i resti dal basso verso l\'alto:'])} <b style="font-family:var(--mono);color:var(--gold);font-size:20px">1101</b></p>`;
},
units(){
  const R=L([[['1 bit','A single 0 or 1.'],['1 byte','8 bits. About one letter of text.'],['1 KB','kilobyte ≈ 1,000 bytes. A short text.'],['1 MB','megabyte ≈ 1,000 KB. About a minute of MP3 music.'],['1 GB','gigabyte ≈ 1,000 MB. Roughly an hour of standard video.'],['1 TB','terabyte ≈ 1,000 GB. A big hard drive.']],
    [['1 bit','Un solo 0 o 1.'],['1 byte','8 bit. Circa una lettera di testo.'],['1 KB','kilobyte ≈ 1.000 byte. Un breve testo.'],['1 MB','megabyte ≈ 1.000 KB. Circa un minuto di musica MP3.'],['1 GB','gigabyte ≈ 1.000 MB. Circa un\'ora di video normale.'],['1 TB','terabyte ≈ 1.000 GB. Un grande hard disk.']]]);
  return `<div class="ladder">${R.map(r=>`<div class="rung"><b>${r[0]}</b><span>${r[1]}</span></div>`).join('')}</div>
   <p class="muted" style="margin-top:10px;font-size:14px">${L(['Music and video sizes are rough examples. Many courses use 1 KB = 1,024 bytes (2¹⁰) instead of 1,000: check which one your book uses.','Le dimensioni di musica e video sono esempi indicativi. Molti libri usano 1 KB = 1.024 byte (2¹⁰) invece di 1.000: controlla quale usa il tuo libro.'])}</p>`;
},
asciitable(){
  let t=''; for(let c=65;c<=90;c++) t+=`<span><b>${String.fromCharCode(c)}</b> ${c}</span>`;
  return `<div class="atab">${t}<span><b>a</b> 97</span><span><b>␣</b> 32</span><span><b>0</b> 48</span><span><b>!</b> 33</span></div>`;
},
unicode(){
  const ch=['A','è','ñ','ß','Ж','Ω','あ','漢','한','ع','अ','😀'];
  return `<div class="cats" style="gap:8px">${ch.map(c=>`<span class="chip" style="font-size:24px;padding:6px 14px">${c}</span>`).join('')}</div>
   <p class="muted" style="text-align:center;margin-top:10px">${L(['Unicode: almost every character in every writing system, plus emoji','Unicode: quasi tutti i caratteri di ogni sistema di scrittura, più le emoji'])}</p>`;
},
pixels(){
  const g=['01100110','11111111','11111111','11111111','01111110','00111100','00011000','00000000'];
  return `<div class="twocol" style="align-items:center"><div style="display:flex;justify-content:center"><div class="pix">${g.join('').split('').map(b=>`<span class="b${b}">${b}</span>`).join('')}</div></div>
   <div><p>${L(['An 8 × 8 black-and-white image: 64 pixels, 1 bit each = 64 bits = 8 bytes.','Un\'immagine in bianco e nero di 8 × 8: 64 pixel, 1 bit ciascuno = 64 bit = 8 byte.'])}</p>
   <p class="muted" style="margin-top:8px">${L(['A Full HD screen is 1920 × 1080 ≈ 2 million pixels.','Uno schermo Full HD ha 1920 × 1080 ≈ 2 milioni di pixel.'])}</p></div></div>`;
},
rgbmix(){
  return `<svg viewBox="0 0 640 230" class="dia" role="img" aria-label="Red, green and blue light mixing">
   <g style="mix-blend-mode:screen"><circle cx="270" cy="95" r="70" fill="#ff0000"/><circle cx="370" cy="95" r="70" fill="#00ff00" style="mix-blend-mode:screen"/><circle cx="320" cy="160" r="70" fill="#0000ff" style="mix-blend-mode:screen"/></g>
   <text x="150" y="70" text-anchor="end">R 255,0,0</text><text x="490" y="70">G 0,255,0</text><text x="400" y="215">B 0,0,255</text>
   <text x="320" y="125" text-anchor="middle" style="fill:#000;font-size:12px">255,255,255</text></svg>
   <p class="muted" style="text-align:center">${L(['Mixing light: red + green = yellow, all three = white.','Mescolando la luce: rosso + verde = giallo, tutti e tre = bianco.'])}</p>`;
},
sampling(){
  let wave='M20 120'; for(let x=20;x<=620;x+=5) wave+=` L${x} ${120-70*Math.sin((x-20)/600*Math.PI*4)*Math.cos((x-20)/900)}`;
  let bars=''; for(let x=20;x<=620;x+=30){const y=120-70*Math.sin((x-20)/600*Math.PI*4)*Math.cos((x-20)/900); bars+=`<line x1="${x}" y1="120" x2="${x}" y2="${y}" stroke="${C.gold}" stroke-width="3"/><circle cx="${x}" cy="${y}" r="5" fill="${C.gold}"/>`;}
  return `<svg viewBox="0 0 640 250" class="dia" role="img" aria-label="Sound wave being sampled at regular intervals">
   <line x1="20" y1="120" x2="620" y2="120" stroke="${C.line}"/><path d="${wave}" fill="none" stroke="${C.data}" stroke-width="3"/>${bars}
   <text x="20" y="230" class="sm">${L(['blue = real sound wave · yellow = samples the computer stores as numbers','blu = onda sonora reale · giallo = campioni che il computer salva come numeri'])}</text></svg>`;
},
rle(){
  const row='WWWWWBBBWW';
  return `<div style="display:flex;flex-direction:column;align-items:center;gap:10px">
   <div style="display:flex;gap:3px">${row.split('').map(c=>`<span style="width:26px;height:26px;border-radius:4px;background:${c==='W'?'#eeecf8':'#15161f'};border:1px solid ${C.line}"></span>`).join('')}</div>
   <div class="codes">${row}</div><div style="color:var(--muted)">↓ ${L(['run-length encoding (lossless)','codifica run-length (senza perdita)'])}</div><div class="codes" style="color:var(--gold)">5W 3B 2W</div>
   <p class="muted">${L(['10 symbols become 6. Nothing is lost: you can rebuild the row exactly.','10 simboli diventano 6. Non si perde nulla: la riga si ricostruisce identica.'])}</p></div>`;
},
hex(){
  const d=[...'0123456789ABCDEF'];
  return `<div class="atab">${d.map((h,i)=>`<span><b>${h}</b> = ${i}</span>`).join('')}</div>
   <div class="swatches" style="margin-top:14px">${[['#FF0000'],['#00FF00'],['#0000FF'],['#FFD166'],['#FFFFFF'],['#000000']].map(([c])=>`<div class="swb"><div class="sw" style="width:70px;height:50px;background:${c}"></div>${c}</div>`).join('')}</div>`;
},
divide(){ return cards([
  ['wifi',['Access','Accesso'],['Fast internet and a device at home: not everyone has them.','Internet veloce e un dispositivo a casa: non tutti li hanno.']],
  ['book',['Skills','Competenze'],['Knowing how to use technology safely and well.','Saper usare la tecnologia in modo sicuro e consapevole.']],
  ['globe',['Where you live','Dove vivi'],['Gaps between countries, and between cities and the countryside.','Differenze tra Paesi, e tra città e zone rurali.']],
  ['user',['Age & income','Età e reddito'],['Older people and poorer families are more often left out.','Anziani e famiglie con meno risorse restano più spesso esclusi.']],
]);},

/* ---------- ARC 3: hardware ---------- */
ipos(){
  let keys=''; for(let r=0;r<3;r++) for(let c=0;c<7;c++) keys+=`<rect x="${32+c*16}" y="${108+r*16}" width="12" height="11" rx="2" fill="#3a3f7a"/>`;
  const dot=(path,d,delay,col)=>`<circle r="6" fill="${col}"><animateMotion dur="${d}s" begin="${delay}s" repeatCount="indefinite" path="${path}"/></circle>`;
  return `<svg viewBox="0 0 640 300" class="dia" role="img" aria-label="Input, process, output, storage">
   <text x="85" y="88" text-anchor="middle" class="lbl">1 · INPUT</text>
   <rect x="22" y="98" width="130" height="66" rx="8" fill="#262a5e" stroke="${C.line}" stroke-width="2"/>${keys}
   <text x="87" y="186" text-anchor="middle" class="sm">keyboard · tastiera</text>
   <text x="320" y="56" text-anchor="middle" class="lbl">2 · ${L(['PROCESS','ELABORAZIONE'])}</text>
   ${[0,1,2,3,4].map(i=>`<line x1="${276+i*22}" y1="62" x2="${276+i*22}" y2="72" stroke="${C.muted}" stroke-width="3"/><line x1="${276+i*22}" y1="188" x2="${276+i*22}" y2="198" stroke="${C.muted}" stroke-width="3"/>`).join('')}
   <rect x="262" y="72" width="116" height="116" rx="12" fill="#262a5e" stroke="${C.ember}" stroke-width="3"/>
   <text x="320" y="128" text-anchor="middle" style="font-family:var(--display);font-size:24px;fill:${C.text}">CPU</text>
   <text x="320" y="150" text-anchor="middle" class="sm">processore</text>
   <text x="555" y="72" text-anchor="middle" class="lbl">3 · OUTPUT</text>
   <rect x="490" y="82" width="130" height="86" rx="8" fill="#10283a" stroke="${C.line}" stroke-width="2"/>
   <text x="555" y="132" text-anchor="middle" style="font-family:var(--display);font-size:22px;fill:${C.data}" class="blink">${L(['Hi!','Ciao!'])}</text>
   <rect x="545" y="168" width="20" height="16" fill="${C.line}"/><rect x="525" y="184" width="60" height="6" rx="3" fill="${C.line}"/>
   <text x="555" y="208" text-anchor="middle" class="sm">monitor · schermo</text>
   <rect x="250" y="236" width="140" height="46" rx="8" fill="#262a5e" stroke="${C.line}" stroke-width="2"/>
   <text x="320" y="264" text-anchor="middle">SSD</text>
   <text x="470" y="264" text-anchor="middle" class="lbl">4 · ${L(['STORAGE','MEMORIA DI MASSA'])}</text>
   <path d="M152 131 H262" stroke="${C.data}" stroke-width="2" class="flow" fill="none"/>
   <path d="M378 131 H490" stroke="${C.data}" stroke-width="2" class="flow" fill="none"/>
   <path d="M305 198 V236" stroke="${C.gold}" stroke-width="2" class="flow" fill="none"/>
   <path d="M335 236 V198" stroke="${C.gold}" stroke-width="2" class="flow" fill="none"/>
   ${dot('M152 131 H262',1.4,0,C.data)}${dot('M378 131 H490',1.4,.7,C.data)}${dot('M305 198 V236',1.2,.3,C.gold)}${dot('M335 236 V198',1.2,.9,C.gold)}
  </svg>`;
},
hwsw(){
  return `<div class="twocol">
   <div class="panel"><h3>${H('Hardware','Hardware')}</h3><p class="muted" style="margin-bottom:10px">${L(['The physical parts. You can touch them.','Le parti fisiche. Si possono toccare.'])}</p>
     <div class="chips">${[['keyboard',['Keyboard','Tastiera']],['monitor',['Monitor','Monitor']],['chip',['CPU','CPU']],['ram',['RAM','RAM']],['ssd',['SSD','SSD']],['mouse',['Mouse','Mouse']]].map(([i,n])=>`<span class="chip">${ICON(i)}${L(n)}</span>`).join('')}</div></div>
   <div class="panel"><h3>${H('Software','Software')}</h3><p class="muted" style="margin-bottom:10px">${L(['Programs: lists of instructions. You can\'t touch them.','I programmi: elenchi di istruzioni. Non si possono toccare.'])}</p>
     <div class="chips">${[['layers',['Operating system','Sistema operativo']],['app',['Web browser','Browser']],['gamepad',['Games','Videogiochi']],['app',['Word processor','Videoscrittura']],['shield',['Antivirus','Antivirus']]].map(([i,n])=>`<span class="chip">${ICON(i)}${L(n)}</span>`).join('')}</div></div>
  </div>`;
},
vonneumann(){
  return `<svg viewBox="0 0 640 300" class="dia" role="img" aria-label="Von Neumann architecture: CPU, memory, input and output linked by a bus">
   <rect x="230" y="20" width="180" height="110" rx="12" fill="#262a5e" stroke="${C.ember}" stroke-width="3"/>
   <text x="320" y="48" text-anchor="middle" class="lbl">CPU</text>
   <rect x="248" y="60" width="70" height="52" rx="6" fill="#1b1d44" stroke="${C.line}"/><text x="283" y="91" text-anchor="middle" style="font-size:12px">CU</text>
   <rect x="324" y="60" width="70" height="52" rx="6" fill="#1b1d44" stroke="${C.line}"/><text x="359" y="91" text-anchor="middle" style="font-size:12px">ALU</text>
   <line x1="40" y1="190" x2="600" y2="190" stroke="${C.gold}" stroke-width="8" stroke-linecap="round"/><line x1="40" y1="190" x2="600" y2="190" stroke="#8a5a00" stroke-width="2" class="flow"/>
   <text x="600" y="178" text-anchor="end" style="fill:${C.gold}">BUS</text>
   <line x1="320" y1="130" x2="320" y2="190" stroke="${C.gold}" stroke-width="5"/>
   ${[[110,L(['MEMORY','MEMORIA']),L(['programs + data','programmi + dati'])],[320,'INPUT',L(['keyboard, mouse…','tastiera, mouse…'])],[530,'OUTPUT',L(['screen, printer…','schermo, stampante…'])]].map(([x,t,s])=>`<line x1="${x}" y1="190" x2="${x}" y2="220" stroke="${C.gold}" stroke-width="5"/><rect x="${x-90}" y="220" width="180" height="62" rx="10" fill="#262a5e" stroke="${C.data}" stroke-width="2"/><text x="${x}" y="246" text-anchor="middle" class="lbl">${t}</text><text x="${x}" y="268" text-anchor="middle" class="sm">${s}</text>`).join('')}
   <circle r="6" fill="${C.data}"><animateMotion dur="3s" repeatCount="indefinite" path="M110 220 V190 H320 V130"/></circle>
   <circle r="6" fill="${C.ember}"><animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" path="M320 130 V190 H530 V220"/></circle>
  </svg>`;
},
cpu(){
  let pins=''; for(let i=0;i<12;i++){pins+=`<line x1="${50+i*26}" y1="18" x2="${50+i*26}" y2="30" stroke="${C.muted}" stroke-width="3"/><line x1="${50+i*26}" y1="270" x2="${50+i*26}" y2="282" stroke="${C.muted}" stroke-width="3"/>`;}
  const rows=[['0001','ADD 5, 3'],['0002','SHOW'],['0003','ADD 8, 1'],['0004','…']];
  const rn=L([['Address','Instruction','Result'],['Indirizzo','Istruzione','Risultato']]);
  return `<svg viewBox="0 0 660 300" class="dia" role="img" aria-label="CPU with control unit, ALU and registers, connected to RAM by buses">${pins}
   <rect x="30" y="30" width="330" height="240" rx="14" fill="#1b1d44" stroke="${C.line}" stroke-width="2"/>
   <text x="46" y="54" class="lbl">CPU · ${L(['processor','processore'])}</text>
   <g id="clk"><circle cx="336" cy="48" r="7" fill="${C.gold}" class="pulse"/></g><text x="322" y="52" text-anchor="end" class="sm">clock</text>
   <g id="cu" class="part"><rect class="box" x="48" y="68" width="146" height="84" rx="8"/><text x="121" y="96" text-anchor="middle">${L(['Control Unit','Unità di controllo'])}</text><text x="121" y="114" text-anchor="middle" class="sm">CU</text><text id="cuT" x="121" y="138" text-anchor="middle" style="fill:${C.gold};font-size:12px">…</text></g>
   <g id="alu" class="part"><rect class="box" x="204" y="68" width="140" height="84" rx="8"/><text x="274" y="96" text-anchor="middle">ALU</text><text x="274" y="114" text-anchor="middle" class="sm">${L(['arithmetic logic unit','unità aritmetico-logica'])}</text><text id="aluT" x="274" y="138" text-anchor="middle" style="fill:${C.gold};font-size:12px">—</text></g>
   <g id="reg" class="part"><rect class="box" x="48" y="164" width="296" height="94" rx="8"/><text x="62" y="184" class="sm" style="fill:${C.text}">${L(['Registers','Registri'])}</text>
     ${rn.map((n,i)=>`<rect x="${60+i*94}" y="194" width="86" height="52" rx="6" fill="#121436" stroke="${C.line}"/><text x="${103+i*94}" y="210" text-anchor="middle" class="sm">${n}</text><text id="r${i+1}" x="${103+i*94}" y="234" text-anchor="middle" style="fill:${C.data};font-size:13px">—</text>`).join('')}</g>
   <g id="bus" class="part"><path d="M360 104 H452" stroke="${C.line}" stroke-width="4" fill="none" id="bus1"/><path d="M452 200 H360" stroke="${C.line}" stroke-width="4" fill="none" id="bus2"/>
     <text x="406" y="96" text-anchor="middle" class="sm">bus</text><text x="406" y="220" text-anchor="middle" class="sm">bus</text></g>
   <g id="ram"><rect x="452" y="30" width="190" height="240" rx="10" fill="#262a5e" stroke="#454a8e" stroke-width="2"/><text x="547" y="56" text-anchor="middle" class="lbl">RAM</text>
     ${rows.map((r,i)=>`<g id="row${i+1}" class="part"><rect class="box" x="466" y="${70+i*46}" width="162" height="38" rx="6"/><text x="476" y="${94+i*46}" class="sm">${r[0]}</text><text x="520" y="${94+i*46}" style="font-size:13px">${r[1]}</text></g>`).join('')}</g>
  </svg>`;
},
cores(){
  return `<div class="twocol">
   <div class="panel"><h3>${H('Clock speed','Frequenza di clock')}</h3>
     <div class="row" style="margin:8px 0 10px"><svg viewBox="0 0 160 50" style="width:160px;height:50px" aria-hidden="true"><path d="M0 40 H15 V10 H35 V40 H55 V10 H75 V40 H95 V10 H115 V40 H135 V10 H160" fill="none" stroke="${C.gold}" stroke-width="3" class="flow"/></svg></div>
     <p>${L(['The clock ticks to keep every part in step. 1 GHz = 1 billion ticks per second, so a 3.5 GHz CPU ticks about 3,500,000,000 times a second.','Il clock "batte il tempo" per tutte le parti. 1 GHz = 1 miliardo di cicli al secondo: una CPU a 3,5 GHz compie circa 3.500.000.000 cicli al secondo.'])}</p></div>
   <div class="panel"><h3>${H('Cores','Core')}</h3>
     <div class="cores" style="--n:4;max-width:220px;margin:8px 0 10px">${[0,1,2,3].map(i=>`<div class="core" style="animation-delay:${i*.4}s"></div>`).join('')}</div>
     <p>${L(['Each core is a separate processing unit. A 4-core CPU can work on 4 things at the same moment.','Ogni core è un\'unità di elaborazione separata. Una CPU a 4 core può lavorare su 4 cose nello stesso istante.'])}</p></div>
  </div>`;
},
board(){
  let traces=''; const T=['M80 120 H200','M330 105 H380','M460 120 H520','M265 170 V250','M400 210 V250','M330 160 Q360 230 420 250','M480 300 H580','M190 260 V300 H240'];
  T.forEach((d,i)=>traces+=`<path d="${d}" stroke="#3fae9c" stroke-width="2" fill="none" class="flow" style="animation-delay:${i*.15}s"/>`);
  const z=(k,inner)=>`<g class="zone" data-k="${k}" tabindex="0" role="button" aria-label="${L(BOARD[k].n)}">${inner}</g>`;
  const t=(x,y,s)=>`<text x="${x}" y="${y}" text-anchor="middle" class="sm" style="fill:#cfeee9">${s}</text>`;
  return `<svg viewBox="0 0 640 380" class="dia" role="img" aria-label="Motherboard">
   <rect x="10" y="10" width="620" height="360" rx="14" fill="#0f3a3c" stroke="#1f6261" stroke-width="2"/>${traces}
   ${z('io',`<rect x="22" y="30" width="58" height="180" rx="4" fill="#3b3f52" stroke="#6b7090" stroke-width="2"/>${t(51,228,L(['ports','porte']))}`)}
   ${z('cpu',`<rect x="200" y="40" width="130" height="130" rx="6" fill="#c9ccd8" stroke="#888ca6" stroke-width="2"/><rect x="222" y="62" width="86" height="86" fill="#9da1b6"/><text x="265" y="110" text-anchor="middle" style="fill:#111;font-size:13px">CPU</text>`)}
   ${z('ram',`<rect x="372" y="26" width="92" height="190" rx="4" fill="transparent" stroke="transparent" stroke-width="2"/>${[0,1,2,3].map(i=>`<rect x="${380+i*21}" y="32" width="12" height="178" rx="2" fill="#20234a" stroke="#4a4f80"/>`).join('')}${t(418,232,'RAM')}`)}
   ${z('psu',`<rect x="520" y="40" width="36" height="150" rx="3" fill="#20234a" stroke="#6b7090" stroke-width="2"/>${t(538,206,L(['power','alim.']))}`)}
   ${z('pcie',`<rect x="40" y="256" width="330" height="22" rx="3" fill="#20234a" stroke="#6b7090" stroke-width="2"/>${t(205,296,L(['PCIe x16 slot (graphics card)','slot PCIe x16 (scheda video)']))}`)}
   ${z('m2',`<rect x="400" y="256" width="150" height="22" rx="3" fill="#20234a" stroke="#6b7090" stroke-width="2"/>${t(475,296,'M.2')}`)}
   ${z('sata',`<rect x="580" y="226" width="36" height="66" rx="3" fill="#7a1f3a" stroke="#c2506f" stroke-width="2"/>${t(598,306,'SATA')}`)}
   ${z('bios',`<rect x="240" y="312" width="40" height="40" rx="3" fill="#15161f" stroke="#6b7090" stroke-width="2"/>${t(260,364,'BIOS')}`)}
   ${z('bat',`<circle cx="330" cy="332" r="20" fill="#c9ccd8" stroke="#888ca6" stroke-width="2"/><text x="330" y="337" text-anchor="middle" style="fill:#111;font-size:11px">CR2032</text>`)}
   ${z('chipset',`<rect x="410" y="312" width="56" height="44" rx="3" fill="#15161f" stroke="#6b7090" stroke-width="2"/>${t(438,338,'chipset')}`)}
   ${z('bus',`<rect x="100" y="312" width="100" height="40" rx="6" fill="rgba(63,174,156,.15)" stroke="#3fae9c" stroke-width="2" stroke-dasharray="4 4"/>${t(150,337,'bus')}`)}
  </svg><div class="narr" id="boardInfo"><b class="step">${L(['Tap a part','Tocca un componente'])}</b>${L(['Tap or click any part of the board to learn what it does.','Tocca o clicca un componente della scheda per scoprire a cosa serve.'])}</div>`;
},
psu(){
  return `<svg viewBox="0 0 640 260" class="dia" role="img" aria-label="Power supply converting AC to DC">
   <rect x="20" y="90" width="80" height="80" rx="10" fill="#d8dae8"/><circle cx="48" cy="130" r="6" fill="#333"/><circle cx="72" cy="130" r="6" fill="#333"/>
   <text x="60" y="196" text-anchor="middle" class="sm">${L(['wall socket','presa'])}</text><text x="60" y="212" text-anchor="middle" class="sm">AC ~230 V</text>
   <path d="M100 130 C130 100 150 160 180 130" stroke="${C.gold}" stroke-width="3" fill="none" class="flow"/>
   <rect x="180" y="70" width="160" height="120" rx="8" fill="#262a5e" stroke="${C.line}" stroke-width="2"/>
   <g class="spin"><circle cx="240" cy="130" r="38" fill="#15161f" stroke="${C.muted}" stroke-width="2"/>${[0,1,2,3,4].map(i=>`<path d="M240 130 L${240+34*Math.cos(i*1.256)} ${130+34*Math.sin(i*1.256)}" stroke="${C.muted}" stroke-width="7" stroke-linecap="round"/>`).join('')}</g>
   <text x="310" y="120" text-anchor="middle" style="font-family:var(--display);fill:${C.text}">PSU</text><text x="310" y="140" text-anchor="middle" class="sm">${L(['power supply','alimentatore'])}</text>
   ${[['12 V',L(['CPU + graphics card','CPU + scheda video']),90],['5 V',L(['USB + some drives','USB + alcuni dischi']),140],['3.3 V',L(['small chips','piccoli chip']),190]].map(([v,t,y])=>`<path d="M340 130 C380 130 380 ${y} 420 ${y}" stroke="${C.data}" stroke-width="3" fill="none" class="flow"/><text x="430" y="${y+5}" style="fill:${C.data}">${v} DC</text><text x="500" y="${y+5}" class="sm">→ ${t}</text>`).join('')}
   <text x="320" y="240" text-anchor="middle" class="sm">${L(['AC from the wall becomes low-voltage DC','la corrente alternata diventa continua a bassa tensione'])}</text></svg>`;
},
ramstick(){
  let chips=''; const apps=L([['Browser','Music','Essay','Game','Chat','Photos','OS','Free'],['Browser','Musica','Tema','Gioco','Chat','Foto','SO','Libera']]);
  for(let i=0;i<8;i++) chips+=`<rect x="${48+i*68}" y="48" width="56" height="58" rx="3" fill="#15161f" stroke="${i<7?C.data:C.line}" stroke-width="${i<7?2:1}"/><text x="${76+i*68}" y="82" text-anchor="middle" class="sm" style="fill:${i<7?C.data:C.muted}">${apps[i]}</text>`;
  let pins=''; for(let i=0;i<60;i++){ if(i===26) continue; pins+=`<rect x="${34+i*9.6}" y="128" width="6" height="18" fill="${C.gold}"/>`;}
  return `<svg viewBox="0 0 640 170" class="dia" role="img" aria-label="RAM stick">
   <rect x="24" y="30" width="592" height="120" rx="6" fill="#1a5a43" stroke="#2f8a68" stroke-width="2"/>${chips}${pins}
   <rect x="283" y="130" width="12" height="22" fill="${C.panel2}"/>
   <text x="34" y="22" class="lbl">${L(['RAM STICK','BANCO DI RAM'])}</text><text x="606" y="22" text-anchor="end" class="sm">${L(['what is open right now','ciò che è aperto adesso'])}</text></svg>`;
},
powercut(){
  return `<div class="pc">
    <div class="pc-box"><div class="pc-h">RAM<small>${L(['volatile','volatile'])}</small></div>
      <div class="files" id="ramFiles"><span class="file">${L(['essay_draft (NOT saved)','bozza_tema (NON salvata)'])}</span><span class="file">${L(['music player','lettore musicale'])}</span><span class="file">${L(['12 browser tabs','12 schede del browser'])}</span></div></div>
    <div class="pc-mid"><div class="power" id="pwr">${L(['POWER ON','ACCESO'])}</div><button class="btn" id="cut">${L(['Cut the power','Togli la corrente'])}</button></div>
    <div class="pc-box"><div class="pc-h">SSD<small>${L(['non-volatile','non volatile'])}</small></div>
      <div class="files"><span class="file">${L(['essay_v1 (saved)','tema_v1 (salvato)'])}</span><span class="file">${L(['photos','foto'])}</span><span class="file">${L(['games','giochi'])}</span></div></div>
  </div>`;
},
pyramid(){
  const Lv=L([[['Registers','inside the CPU · a few bytes · fastest'],['Cache','on the CPU chip · a few MB'],['RAM','e.g. 8–32 GB'],['Mass storage (SSD / HDD)','hundreds of GB to TB · slowest']],[['Registri','dentro la CPU · pochi byte · i più veloci'],['Cache','sul chip della CPU · pochi MB'],['RAM','es. 8–32 GB'],['Memoria di massa (SSD / HDD)','da centinaia di GB a TB · la più lenta']]]);
  const st=[['34%',C.ember],['50%','#ff9a5c'],['70%',C.gold],['92%',C.data]];
  return `<div class="pyr">${Lv.map((l,i)=>`<div class="lvl" style="--w:${st[i][0]};--c:${st[i][1]}">${l[0]}<small>${l[1]}</small></div>`).join('')}</div>
   <div class="pyr-axis"><span>${L(['Top: faster, smaller, more expensive','In alto: più veloce, più piccola, più costosa'])}</span><span>${L(['Bottom: slower, bigger, cheaper','In basso: più lenta, più grande, più economica'])}</span></div>`;
},
buses(){
  const B=[[L(['data bus','bus dati']),C.data,L(['carries the data itself','trasporta i dati'])],[L(['address bus','bus indirizzi']),C.gold,L(['says WHERE in memory','indica DOVE in memoria'])],[L(['control bus','bus di controllo']),C.sak,L(['says WHAT to do: read or write','indica COSA fare: leggere o scrivere'])]];
  return `<svg viewBox="0 0 640 250" class="dia" role="img" aria-label="Data, address and control buses between CPU, RAM and I/O">
   ${[[70,'CPU'],[320,'RAM'],[570,'I/O']].map(([x,t])=>`<rect x="${x-55}" y="20" width="110" height="60" rx="10" fill="#262a5e" stroke="${C.line}" stroke-width="2"/><text x="${x}" y="56" text-anchor="middle" class="lbl">${t}</text>`).join('')}
   ${B.map((b,i)=>{const y=120+i*42;return `<line x1="40" y1="${y}" x2="600" y2="${y}" stroke="${b[1]}" stroke-width="6" stroke-linecap="round" opacity=".35"/><line x1="40" y1="${y}" x2="600" y2="${y}" stroke="${b[1]}" stroke-width="3" class="flow" style="animation-delay:${i*.3}s"/>${[70,320,570].map(x=>`<line x1="${x}" y1="80" x2="${x}" y2="${y}" stroke="${b[1]}" stroke-width="1.5" opacity=".5"/>`).join('')}<text x="44" y="${y-8}" style="fill:${b[1]};font-size:13px">${b[0]}</text><text x="600" y="${y-8}" text-anchor="end" class="sm">${b[2]}</text>`;}).join('')}
  </svg>`;
},
hdd(){
  let tracks=''; for(let r=20;r<=92;r+=12) tracks+=`<circle cx="160" cy="135" r="${r}" fill="none" stroke="#8d93b8" stroke-opacity=".35"/>`;
  let cells=''; for(let r=0;r<4;r++) for(let c=0;c<6;c++) cells+=`<rect x="${410+c*32}" y="${70+r*32}" width="24" height="24" rx="3" fill="${C.data}" class="blink" style="animation-delay:${((r*6+c)*0.17)%1.4}s"/>`;
  return `<svg viewBox="0 0 640 280" class="dia" role="img" aria-label="Hard disk and SSD">
   <text x="160" y="22" text-anchor="middle" class="lbl">HDD · ${L(['HARD DISK','DISCO RIGIDO'])}</text>
   <rect x="40" y="32" width="240" height="220" rx="12" fill="#262a5e" stroke="${C.line}" stroke-width="2"/>
   <g class="spin"><circle cx="160" cy="135" r="98" fill="#8a8fb3"/>${tracks}<rect x="156" y="40" width="8" height="18" fill="${C.ember}"/><circle cx="160" cy="135" r="14" fill="#3a3f7a"/></g>
   <g style="transform-origin:258px 58px" class="swing2"><line x1="258" y1="58" x2="190" y2="120" stroke="#d8dae8" stroke-width="7" stroke-linecap="round"/><rect x="182" y="114" width="14" height="10" fill="${C.gold}"/></g>
   <circle cx="258" cy="58" r="12" fill="#3a3f7a" stroke="#d8dae8" stroke-width="2"/>
   <text x="160" y="272" text-anchor="middle" class="sm">${L(['spinning magnetic platter + read/write head','piatto magnetico rotante + testina di lettura/scrittura'])}</text>
   <text x="497" y="22" text-anchor="middle" class="lbl">SSD</text>
   <rect x="392" y="52" width="210" height="150" rx="10" fill="#15161f" stroke="${C.line}" stroke-width="2"/>${cells}
   <text x="497" y="232" text-anchor="middle" class="sm">${L(['flash memory chips · no moving parts','chip di memoria flash · nessuna parte mobile'])}</text>
   <style>.swing2{animation:swing2 2.6s ease-in-out infinite}@keyframes swing2{0%,100%{transform:rotate(0)}50%{transform:rotate(-22deg)}}</style>
  </svg>`;
},
optcloud(){
  return `<svg viewBox="0 0 640 260" class="dia" role="img" aria-label="Optical disc and cloud storage">
   <defs><radialGradient id="dg"><stop offset=".15" stop-color="#cfd3ff"/><stop offset=".5" stop-color="#ffb8e0"/><stop offset=".8" stop-color="#9fe9ff"/><stop offset="1" stop-color="#d9dcf5"/></radialGradient></defs>
   <text x="150" y="22" text-anchor="middle" class="lbl">${L(['OPTICAL','OTTICA'])}</text>
   <g class="spin"><circle cx="150" cy="120" r="80" fill="url(#dg)"/><circle cx="150" cy="120" r="14" fill="${C.panel2}"/><path d="M150 50 A70 70 0 0 1 220 120" stroke="#fff" stroke-opacity=".6" stroke-width="3" fill="none"/></g>
   <rect x="100" y="214" width="100" height="18" rx="4" fill="#3a3f7a"/>
   <line x1="190" y1="214" x2="190" y2="150" stroke="${C.bad}" stroke-width="4" class="blink"/>
   <text x="150" y="252" text-anchor="middle" class="sm">${L(['a laser reads tiny pits on the disc','un laser legge minuscoli solchi sul disco'])}</text>
   <text x="470" y="22" text-anchor="middle" class="lbl">CLOUD</text>
   <path d="M405 105 a32 32 0 0 1 12-60 a42 42 0 0 1 80-8 a30 30 0 0 1 40 30 a24 24 0 0 1-6 38z" fill="#262a5e" stroke="${C.data}" stroke-width="3"/>
   <text x="470" y="88" text-anchor="middle" class="sm" style="fill:${C.data}">internet</text>
   <path d="M470 108 V150" stroke="${C.data}" stroke-width="2" class="flow"/>
   ${[0,1,2].map(i=>`<rect x="${405+i*50}" y="150" width="40" height="84" rx="4" fill="#15161f" stroke="${C.line}"/>${[0,1,2,3].map(j=>`<rect x="${411+i*50}" y="${158+j*18}" width="28" height="10" rx="2" fill="#262a5e"/><circle cx="${434+i*50}" cy="${163+j*18}" r="2.5" fill="${C.good}" class="blink" style="animation-delay:${(i+j)*.2}s"/>`).join('')}`).join('')}
   <text x="470" y="252" text-anchor="middle" class="sm">${L(['your files on remote servers','i tuoi file su server remoti'])}</text></svg>`;
},
ioflow(){
  const col=(arr)=>`<div class="iocol">${arr.map(([i,n])=>`<span class="chip">${ICON(i)}${L(n)}</span>`).join('')}</div>`;
  return `<div class="ioflow">
   <div><div class="eyebrow" style="margin-bottom:8px">Input →</div>${col([['keyboard',['Keyboard','Tastiera']],['mouse',['Mouse','Mouse']],['mic',['Microphone','Microfono']],['webcam',['Webcam','Webcam']],['scanner',['Scanner','Scanner']]])}</div>
   <div class="iobox">${ICON('chip')}<b>Computer</b><span class="muted" style="font-size:13px">${L(['processes','elabora'])}</span></div>
   <div><div class="eyebrow" style="margin-bottom:8px;color:var(--ember)">→ Output</div>${col([['monitor',['Monitor','Monitor']],['speaker',['Speakers','Casse']],['printer',['Printer','Stampante']],['projector',['Projector','Proiettore']],['headset',['Headphones','Cuffie']]])}</div>
  </div>`;
},
both(){ return cards([
  ['touch',['Touchscreen','Touchscreen'],['You touch it (input) and it shows pictures (output).','Lo tocchi (input) e mostra immagini (output).']],
  ['headset',['Headset with mic','Cuffie con microfono'],['Mic = input, earphones = output.','Microfono = input, auricolari = output.']],
  ['gamepad',['Controller with vibration','Controller con vibrazione'],['Buttons = input, rumble = output.','Tasti = input, vibrazione = output.']],
  ['robot',['Robot','Robot'],['Sensors are inputs; motors and lights are outputs.','I sensori sono input; motori e luci sono output.']],
]);},
touch(){
  let grid=''; for(let i=0;i<9;i++){grid+=`<line x1="${140+i*45}" y1="40" x2="${140+i*45}" y2="220" stroke="${C.data}" stroke-opacity=".5"/>`;} for(let j=0;j<5;j++){grid+=`<line x1="140" y1="${40+j*45}" x2="500" y2="${40+j*45}" stroke="${C.sak}" stroke-opacity=".5"/>`;}
  return `<svg viewBox="0 0 640 260" class="dia" role="img" aria-label="Capacitive touchscreen grid sensing a finger">
   <rect x="120" y="20" width="400" height="220" rx="16" fill="#10283a" stroke="${C.line}" stroke-width="3"/>${grid}
   <circle cx="320" cy="130" r="26" fill="${C.gold}" opacity=".25" class="pulse"/><circle cx="320" cy="130" r="10" fill="${C.gold}"/>
   <path d="M330 250 C330 200 320 160 320 140" stroke="#e8c4a8" stroke-width="22" stroke-linecap="round" fill="none"/>
   <text x="530" y="60" class="sm">${L(['grid of electrodes','griglia di elettrodi'])}</text>
   <text x="530" y="140" style="fill:${C.gold};font-size:13px">x=4, y=2</text>
   <text x="20" y="140" class="sm">${L(['finger changes','il dito modifica'])}</text><text x="20" y="156" class="sm">${L(['the charge here','la carica qui'])}</text></svg>`;
},
earth(){ return cards([
  ['recycle',['E-waste (RAEE)','RAEE'],['Old computers are electronic waste. Take them to a collection point, never in normal rubbish.','I vecchi computer sono rifiuti elettronici (RAEE): vanno portati all\'isola ecologica, mai nell\'indifferenziato.']],
  ['chip',['Precious materials','Materiali preziosi'],['Recycling recovers copper, gold and other metals.','Il riciclo recupera rame, oro e altri metalli.']],
  ['warn',['Toxic parts','Parti tossiche'],['Batteries and some components can pollute soil and water.','Batterie e alcuni componenti possono inquinare terreno e acqua.']],
  ['bolt',['Moore\'s law','Legge di Moore'],['The number of transistors on a chip doubled about every 2 years. Today this is slowing down.','Il numero di transistor su un chip è raddoppiato circa ogni 2 anni. Oggi questa crescita sta rallentando.']],
]);},
gpu(){
  return `<div class="twocol">
   <div class="panel"><h3>CPU</h3><p class="muted" style="font-size:14px;margin-bottom:8px">${L(['A few powerful cores.','Pochi core potenti.'])}</p>
     <div class="cores" style="--n:4;max-width:200px">${[0,1,2,3].map(i=>`<div class="core" style="animation-delay:${i*.35}s"></div>`).join('')}</div></div>
   <div class="panel"><h3>${H('GPU','Scheda video')}</h3><p class="muted" style="font-size:14px;margin-bottom:8px">${L(['Thousands of small cores colouring pixels at the same time.','Migliaia di piccoli core che colorano i pixel contemporaneamente.'])}</p>
     <div class="cores" style="--n:12">${Array.from({length:48},(_,i)=>`<div class="core g" style="animation-delay:${((i%12)+Math.floor(i/12))*.08}s"></div>`).join('')}</div></div>
  </div>`;
},
journey(){
  const node=(k,x,y,label,it)=>`<g id="jn-${k}" class="part"><rect class="box" x="${x-58}" y="${y-30}" width="116" height="60" rx="10"/><text x="${x}" y="${y-2}" text-anchor="middle">${label}</text><text x="${x}" y="${y+16}" text-anchor="middle" class="sm">${it}</text></g>`;
  const P=JN;
  const wire=(a,b)=>`<line x1="${P[a][0]}" y1="${P[a][1]}" x2="${P[b][0]}" y2="${P[b][1]}" stroke="${C.line}" stroke-width="3" stroke-dasharray="5 6"/>`;
  return `<svg viewBox="0 0 710 330" class="dia" role="img" aria-label="Path of a key press through the computer">
   ${wire('kb','cpu')}${wire('cpu','ram')}${wire('cpu','gpu')}${wire('gpu','mon')}${wire('ram','ssd')}
   ${node('kb',...P.kb,L(['Keyboard','Tastiera']),'input')}${node('cpu',...P.cpu,'CPU',L(['processor','processore']))}${node('ram',...P.ram,'RAM',L(['memory','memoria']))}${node('gpu',...P.gpu,'GPU',L(['graphics','grafica']))}${node('ssd',...P.ssd,'SSD',L(['storage','archiviazione']))}
   <g id="jn-mon" class="part"><rect class="box" x="${P.mon[0]-58}" y="${P.mon[1]-40}" width="116" height="74" rx="8"/><text id="mscr" x="${P.mon[0]}" y="${P.mon[1]+8}" text-anchor="middle" style="font-family:var(--display);font-size:28px;fill:${C.data}"></text><text x="${P.mon[0]}" y="${P.mon[1]+56}" text-anchor="middle" class="sm">monitor</text></g>
   <g id="jdot" style="transform:translate(${P.kb[0]}px,${P.kb[1]}px);transition:transform .9s cubic-bezier(.5,0,.3,1)"><circle r="16" fill="none" stroke="${C.gold}" stroke-opacity=".5" class="pulse"/><circle r="9" fill="${C.gold}"/><text y="4" text-anchor="middle" style="font-size:10px;fill:#000">A</text></g>
  </svg>`;
},

/* ---------- ARC 4: OS & apps ---------- */
stack(){
  const Ls=L([[['You (the user)','click, type, tap'],['Application software','games, browser, word processor'],['Operating system','Windows, macOS, Linux, Android, iOS'],['Drivers + firmware','translators for each device'],['Hardware','CPU, RAM, storage, screen…']],[['Tu (l\'utente)','clicchi, scrivi, tocchi'],['Software applicativo','giochi, browser, videoscrittura'],['Sistema operativo','Windows, macOS, Linux, Android, iOS'],['Driver + firmware','traduttori per ogni dispositivo'],['Hardware','CPU, RAM, memoria di massa, schermo…']]]);
  const col=[C.sak,C.gold,C.ember,C.data,'#b6b9e0'];
  return `<div class="stack">${Ls.map((l,i)=>`${i?'<div class="arrowdown"><i></i></div>':''}<div class="layer" style="background:${col[i]}">${l[0]}<small>${l[1]}</small></div>`).join('')}</div>`;
},
osjobs(){ return cards([
  ['ram',['Manages memory','Gestisce la memoria'],['Decides which program gets which part of RAM.','Decide quale parte della RAM va a ogni programma.']],
  ['chip',['Manages processes','Gestisce i processi'],['Shares the CPU so many programs run at once.','Divide la CPU così più programmi girano insieme.']],
  ['folder',['Manages files','Gestisce i file'],['The file system: folders, saving, opening.','Il file system: cartelle, salvataggio, apertura.']],
  ['gear',['Controls devices','Controlla le periferiche'],['Talks to hardware through drivers.','Comunica con l\'hardware tramite i driver.']],
  ['app',['User interface','Interfaccia utente'],['Desktop, windows, icons, menus (GUI).','Desktop, finestre, icone, menu (GUI).']],
  ['lock',['Security','Sicurezza'],['User accounts, passwords, permissions.','Account utente, password, permessi.']],
]);},
process(){
  const P=L([['Music','Browser','Chat','Music','Browser','Chat','Music','Browser'],['Musica','Browser','Chat','Musica','Browser','Chat','Musica','Browser']]);
  const col={0:C.sak,1:C.gold,2:C.data};
  return `<div class="twocol" style="margin-bottom:14px">
    <div class="panel"><h3>${H('Program','Programma')}</h3><p>${L(['A file of instructions sitting on the disk. Not doing anything.','Un file di istruzioni salvato sul disco. Fermo.'])}</p></div>
    <div class="panel"><h3>${H('Process','Processo')}</h3><p>${L(['A program while it is running, loaded in RAM and using the CPU.','Un programma mentre è in esecuzione: caricato in RAM e usa la CPU.'])}</p></div></div>
   <div class="eyebrow" style="margin-bottom:6px">${L(['CPU time, sliced by the scheduler','Tempo della CPU, diviso dallo scheduler'])}</div>
   <div class="slices">${P.map((p,i)=>`<i style="background:${col[i%3]}">${p}</i>`).join('')}<span class="cursor"></span></div>
   <p class="muted" style="margin-top:8px;font-size:14px">${L(['Each slice lasts a few milliseconds, so it looks like everything runs at once.','Ogni fetta dura pochi millisecondi: sembra che tutto giri contemporaneamente.'])}</p>`;
},
tree(){
  return `<div class="twocol"><div class="panel tree">
    <div>${ICON('hdd','ico" style="width:16px;height:16px;vertical-align:-3px')} C:\\</div>
    <div>&nbsp;└ ${ICON('folder','ico" style="width:16px;height:16px;vertical-align:-3px')} ${L(['Users','Utenti'])}</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;└ ${ICON('folder','ico" style="width:16px;height:16px;vertical-align:-3px')} Hana</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├ ${ICON('folder','ico" style="width:16px;height:16px;vertical-align:-3px')} ${L(['Pictures','Immagini'])}</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└ ${ICON('folder','ico" style="width:16px;height:16px;vertical-align:-3px')} ${L(['Documents','Documenti'])}</div>
    <div class="hl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└ ${ICON('file','ico" style="width:16px;height:16px;vertical-align:-3px')} ${L(['essay','tema'])}.docx</div></div>
   <div><p>${L(['The file system arranges files in a tree of folders, starting from the root (C:\\ on Windows, / on Mac and Linux).','Il file system organizza i file in un albero di cartelle che parte dalla radice (C:\\ su Windows, / su Mac e Linux).'])}</p>
   <div class="path">C:\\${L(['Users','Utenti'])}\\Hana\\${L(['Documents','Documenti'])}\\<span style="color:var(--gold)">${L(['essay','tema'])}</span><span style="color:var(--sakura)">.docx</span></div>
   <p class="muted" style="font-size:14px;margin-top:6px">${L(['path · name · extension','percorso · nome · estensione'])}</p></div></div>`;
},
fileops(){ return cards([
  ['file',['Create & rename','Crea e rinomina'],['Give files clear names: verifica_storia_2026.docx, not doc1.docx.','Dai nomi chiari: verifica_storia_2026.docx, non doc1.docx.']],
  ['layers',['Copy','Copia'],['Makes a second copy. The original stays where it was.','Crea un secondo esemplare. L\'originale resta dov\'era.']],
  ['folder',['Move (cut & paste)','Sposta (taglia e incolla)'],['The file leaves the old folder and goes to the new one.','Il file lascia la vecchia cartella e va nella nuova.']],
  ['recycle',['Delete','Elimina'],['Goes to the Recycle Bin first, so you can still restore it.','Finisce prima nel Cestino, da cui puoi ancora ripristinarlo.']],
]);},
gui(){ return cards([
  ['app',['Windows','Finestre'],['Each program runs in its own window.','Ogni programma lavora nella sua finestra.']],
  ['image',['Icons','Icone'],['Little pictures for files, folders and apps.','Piccole immagini per file, cartelle e app.']],
  ['layers',['Menus','Menu'],['Lists of commands to choose from.','Elenchi di comandi tra cui scegliere.']],
  ['mouse',['Pointer','Puntatore'],['The arrow you move with the mouse or touchpad.','La freccia che muovi con mouse o touchpad.']],
]);},
apps(){ return cards([
  ['app',['Desktop apps','Applicazioni desktop'],['Word processors, spreadsheets, photo editors, games.','Videoscrittura, fogli di calcolo, fotoritocco, giochi.']],
  ['touch',['Mobile apps','App per dispositivi mobili'],['Downloaded from an app store, built for touch and small screens.','Si scaricano da uno store; pensate per il touch e gli schermi piccoli.']],
  ['lock',['Permissions','Autorizzazioni'],['Apps ask to use the camera, microphone or location. Only allow what makes sense.','Le app chiedono di usare fotocamera, microfono o posizione. Concedi solo ciò che ha senso.']],
  ['book',['Learning apps','App per imparare'],['Language apps use short lessons, repetition and points to keep you going.','Le app per le lingue usano lezioni brevi, ripetizione e punti per motivarti.']],
]);},
sensors(){
  return `<svg viewBox="0 0 640 260" class="dia" role="img" aria-label="Phone tilting with accelerometer, and satellites sending signals to a GNSS receiver">
   <g style="transform-origin:150px 140px" class="tilt"><rect x="110" y="60" width="80" height="150" rx="14" fill="#262a5e" stroke="${C.data}" stroke-width="3"/><rect x="120" y="78" width="60" height="110" rx="4" fill="#10283a"/><path d="M150 100 V160 M138 148 L150 160 L162 148" stroke="${C.gold}" stroke-width="3" fill="none"/></g>
   <text x="150" y="245" text-anchor="middle" class="sm">${L(['accelerometer: feels tilt and movement','accelerometro: sente inclinazione e movimento'])}</text>
   ${[[400,40],[500,25],[600,50],[450,90]].map(([x,y],i)=>`<g>${ICON('sat','ico" x="'+(x-14)+'" y="'+(y-14)+'" width="28" height="28" style="color:'+C.gold)}<line x1="${x}" y1="${y+14}" x2="500" y2="200" stroke="${C.gold}" stroke-width="1.5" class="flow" style="animation-delay:${i*.25}s"/></g>`).join('')}
   <circle cx="500" cy="205" r="10" fill="${C.data}"/><circle cx="500" cy="205" r="22" fill="none" stroke="${C.data}" class="pulse"/>
   <text x="500" y="245" text-anchor="middle" class="sm">${L(['GNSS: position from 4+ satellites','GNSS: posizione da 4 o più satelliti'])}</text>
   <style>.tilt{animation:tilt 3s ease-in-out infinite}@keyframes tilt{0%,100%{transform:rotate(0)}50%{transform:rotate(-80deg)}}</style></svg>`;
},
licences(){ return cards([
  ['lock',['Proprietary','Proprietario'],['You pay for a licence to USE it. The code is secret and you can\'t change it.','Paghi una licenza per USARLO. Il codice è segreto e non puoi modificarlo.']],
  ['heart',['Freeware','Freeware'],['Free to use, but the code is still closed.','Gratuito da usare, ma il codice resta chiuso.']],
  ['key',['Shareware','Shareware'],['Try it free for a while, then pay to keep using it.','Lo provi gratis per un periodo, poi paghi per continuare.']],
  ['globe',['Open source','Open source'],['The source code is public: anyone can study, change and share it (Linux, Firefox, LibreOffice).','Il codice sorgente è pubblico: chiunque può studiarlo, modificarlo e condividerlo (Linux, Firefox, LibreOffice).']],
]);},

/* ---------- ARC 5: networks ---------- */
comm(){
  return `<svg viewBox="0 0 640 220" class="dia" role="img" aria-label="Sender, channel, receiver">
   ${[[90,L(['SENDER','EMITTENTE']),'user'],[550,L(['RECEIVER','RICEVENTE']),'user']].map(([x,t,i])=>`<rect x="${x-70}" y="50" width="140" height="90" rx="12" fill="#262a5e" stroke="${C.line}" stroke-width="2"/><text x="${x}" y="105" text-anchor="middle" class="lbl">${t}</text>`).join('')}
   <path d="M160 95 H480" stroke="${C.data}" stroke-width="4" class="flow"/>
   <text x="320" y="80" text-anchor="middle" class="lbl">${L(['CHANNEL','CANALE'])}</text>
   <rect r="0" width="54" height="22" rx="4" fill="${C.gold}"><animateMotion dur="2.4s" repeatCount="indefinite" path="M160 84 H426"/></rect>
   <text x="320" y="130" text-anchor="middle" class="sm">${L(['message coded in bits (cable, Wi-Fi, fibre, 5G…)','messaggio codificato in bit (cavo, Wi-Fi, fibra, 5G…)'])}</text>
   <text x="320" y="190" text-anchor="middle" class="sm">${L(['A PROTOCOL = the shared rules both sides follow','PROTOCOLLO = le regole comuni che entrambi rispettano'])}</text></svg>`;
},
networks(){ return cards([
  ['home',['LAN','LAN'],['Local Area Network: devices in one home, school or office.','Rete locale: dispositivi in una casa, scuola o ufficio.']],
  ['globe',['WAN','WAN'],['Wide Area Network: links networks across cities and countries.','Rete geografica: collega reti tra città e Paesi.']],
  ['router',['Router','Router'],['Connects networks and chooses the route for each packet.','Collega reti diverse e sceglie il percorso di ogni pacchetto.']],
  ['wifi',['Wi-Fi','Wi-Fi'],['Connects devices to the LAN by radio waves.','Collega i dispositivi alla LAN con onde radio.']],
  ['key',['IP address','Indirizzo IP'],['Each device on the Internet has an address, like 192.168.1.10.','Ogni dispositivo in rete ha un indirizzo, ad esempio 192.168.1.10.']],
  ['bolt',['Speed','Velocità'],['Measured in bits per second: Mbps, Gbps.','Si misura in bit al secondo: Mbps, Gbps.']],
]);},
packets(){
  const R=[[230,60],[230,200],[410,60],[410,200],[320,130]];
  return `<svg viewBox="0 0 640 260" class="dia" role="img" aria-label="A message split into packets travelling through different routers">
   <rect x="20" y="100" width="100" height="60" rx="10" fill="#262a5e" stroke="${C.data}" stroke-width="2"/><text x="70" y="135" text-anchor="middle">${L(['You','Tu'])}</text>
   <rect x="520" y="100" width="100" height="60" rx="10" fill="#262a5e" stroke="${C.data}" stroke-width="2"/><text x="570" y="135" text-anchor="middle">${L(['Friend','Amica'])}</text>
   ${[['M120 130 L230 60'],['M120 130 L230 200'],['M230 60 L410 60'],['M230 200 L410 200'],['M230 60 L320 130'],['M320 130 L410 200'],['M410 60 L520 130'],['M410 200 L520 130'],['M120 130 L320 130'],['M320 130 L410 60']].map(([d])=>`<path d="${d}" stroke="${C.line}" stroke-width="3"/>`).join('')}
   ${R.map(([x,y])=>`<circle cx="${x}" cy="${y}" r="18" fill="#15161f" stroke="${C.muted}" stroke-width="2"/><text x="${x}" y="${y+4}" text-anchor="middle" class="sm">R</text>`).join('')}
   ${[['M120 130 L230 60 L410 60 L520 130',C.gold,'1',0],['M120 130 L320 130 L410 200 L520 130',C.sak,'2',.6],['M120 130 L230 200 L410 200 L520 130',C.data,'3',1.2]].map(([p,c,n,d])=>`<g><rect x="-11" y="-11" width="22" height="22" rx="4" fill="${c}"/><text y="5" text-anchor="middle" style="fill:#000;font-size:13px">${n}</text><animateMotion dur="3.6s" begin="${d}s" repeatCount="indefinite" path="${p}"/></g>`).join('')}
   <text x="320" y="250" text-anchor="middle" class="sm">${L(['R = router · packets can take different routes and are put back in order at the end','R = router · i pacchetti possono seguire strade diverse e vengono riordinati all\'arrivo'])}</text></svg>`;
},
url(){
  const parts=[['https://',C.sak],['www.school-example.it',C.gold],['/students/timetable.html',C.data]];
  return `<div class="url">${parts.map(([t,c])=>`<span style="--c:${c}">${t}</span>`).join('')}</div>
   <div class="legend"><div style="--c:${C.sak}"><i></i><span><b>${L(['Protocol','Protocollo'])}</b> · ${L(['HTTPS = encrypted, safer (padlock)','HTTPS = cifrato, più sicuro (lucchetto)'])}</span></div>
   <div style="--c:${C.gold}"><i></i><span><b>${L(['Domain','Dominio'])}</b> · ${L(['the site\'s name; .it = Italy','il nome del sito; .it = Italia'])}</span></div>
   <div style="--c:${C.data}"><i></i><span><b>${L(['Path','Percorso'])}</b> · ${L(['which page on the site','quale pagina del sito'])}</span></div></div>`;
},
webnet(){
  return `<div class="twocol">
   <div class="panel"><h3>Internet</h3><p>${L(['The physical network of networks: cables, routers, servers, connecting billions of devices. It carries email, games, video calls… and the Web.','La rete di reti fisica: cavi, router, server che collegano miliardi di dispositivi. Trasporta e-mail, giochi, videochiamate… e il Web.'])}</p></div>
   <div class="panel"><h3>World Wide Web</h3><p>${L(['A service that runs on the Internet: pages written in HTML, linked by hyperlinks, which you open with a browser. Invented by Tim Berners-Lee at CERN (1989).','Un servizio che funziona su Internet: pagine scritte in HTML, collegate da link, che apri con un browser. Inventato da Tim Berners-Lee al CERN (1989).'])}</p></div></div>`;
},
search(){ return cards([
  ['search',['Choose keywords','Scegli le parole chiave'],['"volcano eruption causes" works better than a long question.','"eruzione vulcano cause" funziona meglio di una domanda lunga.']],
  ['book',['Use "quotes"','Usa le "virgolette"'],['Search for an exact phrase: "von Neumann architecture".','Cerca una frase esatta: "architettura di von Neumann".']],
  ['eye',['Check the source','Verifica la fonte'],['Who wrote it? When? Is it an official or expert site?','Chi l\'ha scritto? Quando? È un sito ufficiale o esperto?']],
  ['layers',['Compare','Confronta'],['Confirm the information on at least two reliable sites.','Conferma l\'informazione su almeno due siti affidabili.']],
]);},
email(){
  return `<div class="panel" style="max-width:560px;margin:0 auto;font-size:15px">
   <div class="row" style="gap:6px"><b style="width:70px">${L(['From','Da'])}</b><span>hana<span style="color:var(--gold)">@</span>school-example.it</span></div>
   <div class="row" style="gap:6px"><b style="width:70px">${L(['To','A'])}</b><span>teacher@school-example.it</span></div>
   <div class="row" style="gap:6px"><b style="width:70px">Cc</b><span class="muted">${L(['copy: everyone sees it','copia: tutti la vedono'])}</span></div>
   <div class="row" style="gap:6px"><b style="width:70px">${L(['Bcc','Ccn'])}</b><span class="muted">${L(['hidden copy: others don\'t see these addresses','copia nascosta: gli altri non vedono questi indirizzi'])}</span></div>
   <div class="row" style="gap:6px"><b style="width:70px">${L(['Subject','Oggetto'])}</b><span>${L(['Science homework – Hana, 3B','Compiti di scienze – Hana, 3B'])}</span></div>
   <div class="row" style="gap:6px;margin-top:6px">${ICON('file','ico" style="width:18px;height:18px')}<span>${L(['attachment: report.pdf','allegato: relazione.pdf'])}</span></div></div>
   <p class="muted" style="text-align:center;margin-top:8px;font-size:14px">${L(['address = username @ domain','indirizzo = nome utente @ dominio'])}</p>`;
},
phishing(){ return cards([
  ['warn',['Urgent threats','Minacce urgenti'],['"Your account will be closed in 24 hours!"','"Il tuo account sarà chiuso entro 24 ore!"']],
  ['key',['Asks for passwords','Chiede la password'],['Real companies never ask for your password by email.','Le aziende vere non chiedono mai la password via e-mail.']],
  ['eye',['Strange sender or link','Mittente o link strani'],['Look closely: "amaz0n-security.xyz" is not the real site.','Guarda bene: "amaz0n-security.xyz" non è il sito vero.']],
  ['heart',['Too good to be true','Troppo bello per essere vero'],['"You won a free phone!" is bait.','"Hai vinto un telefono gratis!" è un\'esca.']],
]);},
netiquette(){ return cards([
  ['user',['Respect people','Rispetta le persone'],['Behind every screen there is a real person.','Dietro ogni schermo c\'è una persona reale.']],
  ['warn',['NO ALL CAPS','NIENTE MAIUSCOLE'],['Writing in capitals feels like SHOUTING.','Scrivere tutto in maiuscolo sembra URLARE.']],
  ['image',['Ask before posting','Chiedi prima di pubblicare'],['Never share photos of others without permission.','Non condividere foto di altri senza permesso.']],
  ['eye',['Your digital footprint','La tua impronta digitale'],['What you post can stay online for years.','Ciò che pubblichi può restare online per anni.']],
]);},
iot(){ return cards([
  ['tower',['5G','5G'],['5th-generation mobile network: much faster, very low delay, and many more devices connected at once.','Rete mobile di quinta generazione: molto più veloce, ritardo minimo e moltissimi dispositivi collegati insieme.']],
  ['home',['Smart home','Casa intelligente'],['Thermostats, lights and alarms you control from your phone.','Termostati, luci e allarmi che controlli dal telefono.']],
  ['watch',['Wearables','Dispositivi indossabili'],['Smartwatches that count steps and heartbeats.','Smartwatch che contano passi e battiti.']],
  ['car',['Connected cars & cities','Auto e città connesse'],['Sensors that report traffic, parking and air quality.','Sensori che segnalano traffico, parcheggi e qualità dell\'aria.']],
]);},
};
const JN = {kb:[90,240],cpu:[290,80],ram:[290,250],gpu:[480,160],mon:[620,80],ssd:[480,280]};

const BOARD = {
  cpu:{n:['CPU socket','Socket della CPU'],t:['Holds the CPU. Hundreds of tiny contacts connect the processor to the board. A cooler sits on top.','Ospita la CPU. Centinaia di piccoli contatti collegano il processore alla scheda. Sopra si monta il dissipatore.']},
  ram:{n:['RAM slots (DIMM)','Slot della RAM (DIMM)'],t:['RAM sticks click into these slots, close to the CPU so data travels quickly.','I banchi di RAM si inseriscono qui, vicino alla CPU, così i dati viaggiano velocemente.']},
  psu:{n:['24-pin power connector','Connettore di alimentazione a 24 pin'],t:['The big cable from the power supply (PSU) plugs in here.','Qui si collega il cavo principale dell\'alimentatore.']},
  pcie:{n:['PCIe x16 slot','Slot PCIe x16'],t:['Expansion slot. The graphics card (GPU) usually goes here.','Slot di espansione. Di solito qui va la scheda video (GPU).']},
  m2:{n:['M.2 slot','Slot M.2'],t:['A small, fast SSD lies flat on the board here. No cable needed.','Un SSD piccolo e veloce si monta qui, piatto sulla scheda, senza cavi.']},
  sata:{n:['SATA ports','Porte SATA'],t:['Cables from hard disks, some SSDs and DVD drives plug in here.','Qui si collegano i cavi di hard disk, alcuni SSD e lettori DVD.']},
  io:{n:['Rear I/O ports','Porte posteriori'],t:['USB, HDMI/DisplayPort for screens, Ethernet for the network, audio jacks.','USB, HDMI/DisplayPort per gli schermi, Ethernet per la rete, prese audio.']},
  bios:{n:['BIOS/UEFI chip','Chip BIOS/UEFI'],t:['Stores the firmware: the first program that runs when you switch on. It checks the hardware and starts the operating system.','Contiene il firmware: il primo programma che parte all\'accensione. Controlla l\'hardware e avvia il sistema operativo.']},
  bat:{n:['CMOS battery','Batteria tampone (CMOS)'],t:['Keeps the clock running and remembers settings while the PC is unplugged.','Mantiene l\'orologio e le impostazioni quando il PC è scollegato.']},
  chipset:{n:['Chipset','Chipset'],t:['A traffic controller helping the CPU talk to USB, storage and other parts.','Un "vigile" che aiuta la CPU a comunicare con USB, dischi e altri componenti.']},
  bus:{n:['Buses','Bus'],t:['The copper lines printed on the board: pathways carrying data, addresses and control signals.','Le piste di rame stampate sulla scheda: percorsi che trasportano dati, indirizzi e segnali di controllo.']},
};
