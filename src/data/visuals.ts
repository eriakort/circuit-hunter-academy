// @ts-nocheck
import { Language } from "../types";
import { L as origL, PILL as origPILL, H as origH, rich as origRich, cards as origCards, ICON, C, esc, demonSVG, hl } from "../helpers";
import { JN, BOARD, ROBOT_LEVELS } from "./gameData";

let currentLang: Language = "en";
const L: any = (x: any) => origL(x, currentLang);
const PILL = (en: string, it: string) => origPILL(en, it, currentLang);
const H = (en: string, it: string) => origH(en, it, currentLang);
const rich = (s: string) => origRich(s, currentLang);
const cards = (list: any) => origCards(list, currentLang);

export const VIS: Record<string, () => string> = {
  "title": function title(){
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
  "boss": function boss(){ return `<div style="display:flex;justify-content:center"><div style="width:min(240px,70%)">${demonSVG(275,5,3,'dia')}</div></div>`; },
  "infowords": function infowords(){
  return `<div class="wordfx"><span class="a">INFORmazione</span><span class="op">+</span><span class="b">autoMATICA</span><span class="op">=</span><span>INFORMATICA</span></div>
   <p class="muted" style="text-align:center;margin-top:10px">${L(['information + automatic = computer science','informazione + automatica = informatica'])}</p>`;
},
  "recipe": function recipe(){
  const st=L([['Fill a pot with water','Put the pot on the stove and boil the water','Put the noodles in a bowl','Pour the boiling water over the noodles','Wait 3 minutes','Add the seasoning and stir'],['Riempi una pentola d\'acqua','Metti la pentola sul fuoco e porta a ebollizione','Metti i noodles in una ciotola','Versa l\'acqua bollente sui noodles','Aspetta 3 minuti','Aggiungi il condimento e mescola']]);
  return `<div class="recipe"><div class="io"><b>IN</b><span>${L(['Input: water, noodle pack, seasoning','Input: acqua, confezione di noodles, condimento'])}</span></div>
   ${st.map((s,i)=>`<div><b>${i+1}</b><span>${s}</span></div>`).join('')}
   <div class="io"><b>OUT</b><span>${L(['Output: a bowl of ramen','Output: una ciotola di ramen'])}</span></div></div>`;
},
  "props": function props(){ return cards([
  ['gear',['Finite','Finito'],['It must end after a limited number of steps.','Deve terminare dopo un numero limitato di passi.']],
  ['eye',['Unambiguous','Non ambiguo'],['Each step can be understood in only one way.','Ogni passo si può interpretare in un solo modo.']],
  ['bolt',['Executable','Eseguibile'],['Each step can really be carried out.','Ogni passo si può davvero eseguire.']],
  ['layers',['General','Generale'],['It solves a whole family of problems, not just one case.','Risolve un\'intera classe di problemi, non un solo caso.']],
  ['scale',['Deterministic','Deterministico'],['The same input always gives the same output.','Con gli stessi dati in ingresso dà sempre lo stesso risultato.']],
]);},
  "badalgo": function badalgo(){ return cards([
  ['warn',['"Add some salt."','"Aggiungi un po\' di sale."'],['How much is "some"? AMBIGUOUS.','Quanto è "un po\'"? AMBIGUO.']],
  ['warn',['"Keep stirring."','"Continua a mescolare."'],['Until when? Never stops: NOT FINITE.','Fino a quando? Non finisce mai: NON FINITO.']],
  ['warn',['"Fly to the shop."','"Vola fino al negozio."'],['Impossible: NOT EXECUTABLE.','Impossibile: NON ESEGUIBILE.']],
]);},
  "ct": function ct(){ return cards([
  ['puzzle',['Decomposition','Scomposizione'],['Break a big problem into smaller ones.','Dividere un problema grande in problemi più piccoli.']],
  ['eye',['Pattern recognition','Riconoscimento di schemi'],['Spot what problems have in common.','Notare cosa hanno in comune i problemi.']],
  ['layers',['Abstraction','Astrazione'],['Keep the important details, ignore the rest.','Tenere i dettagli importanti, ignorare il resto.']],
  ['gear',['Algorithms','Algoritmi'],['Write the step-by-step solution.','Scrivere la soluzione passo per passo.']],
]);},
  "sciences": function sciences(){ return cards([
  ['dna',['Medicine & biology','Medicina e biologia'],['Computers read DNA and help doctors study scans.','I computer leggono il DNA e aiutano i medici ad analizzare le immagini.']],
  ['cloud',['Weather','Meteorologia'],['Simulations of the atmosphere make forecasts.','Simulazioni dell\'atmosfera producono le previsioni.']],
  ['sat',['Astronomy & physics','Astronomia e fisica'],['Analysing huge amounts of data from telescopes and experiments.','Analizzare enormi quantità di dati da telescopi ed esperimenti.']],
  ['music',['Art & music','Arte e musica'],['Digital drawing, animation, music production.','Disegno digitale, animazione, produzione musicale.']],
]);},
  "feed": function feed(){
  const posts=L([['Dance video','You watched 3 like it',96],['Anime clip','You liked 12 like it',91],['Friend\'s photo','You often comment',74],['News article','You rarely open these',22]],[['Video di ballo','Ne hai guardati 3 simili',96],['Clip anime','Ne hai messi 12 "mi piace"',91],['Foto di un\'amica','Commenti spesso',74],['Articolo di notizie','Li apri raramente',22]]);
  return `<div class="ladder">${posts.map(p=>`<div class="rung"><b>${p[2]}</b><span><b style="font-family:var(--body);color:var(--text)">${p[0]}</b> · ${p[1]}</span></div>`).join('')}</div>
   <p class="muted" style="margin-top:8px;font-size:14px">${L(['Example scores: the feed algorithm ranks posts and shows the highest first.','Punteggi di esempio: l\'algoritmo del feed ordina i post e mostra prima quelli col punteggio più alto.'])}</p>`;
},
  "switches": function switches(){
  const bits=[1,0,1,1,0,0,1,0];
  return `<div class="bitrow">${bits.map(b=>`<div class="${b?'':'z'}"><svg viewBox="0 0 40 40" style="width:34px;height:34px"><circle cx="20" cy="20" r="14" fill="${b?C.gold:'#2a2d5c'}" ${b?'class="blink"':''}/></svg><b>${b}</b><small>${b?'ON':'OFF'}</small></div>`).join('')}</div>
   <p class="muted" style="text-align:center;margin-top:10px">${L(['8 switches = 8 bits = 1 byte','8 interruttori = 8 bit = 1 byte'])}</p>`;
},
  "places": function places(){
  const v=[128,64,32,16,8,4,2,1], b=[0,0,0,0,1,1,0,1];
  return `<div class="bitrow">${v.map((x,i)=>`<div class="${b[i]?'':'z'}"><small>${x}</small><b>${b[i]}</b></div>`).join('')}</div>
   <p style="text-align:center;margin-top:12px;font-family:var(--mono);font-size:18px">00001101 → 8 + 4 + 1 = <span style="color:var(--gold)">13</span></p>`;
},
  "div2": function div2(){
  return `<div class="div2"><span>13 ÷ 2 = 6</span><span>${L(['remainder','resto'])}</span><span class="r">1</span><span>6 ÷ 2 = 3</span><span>${L(['remainder','resto'])}</span><span class="r">0</span><span>3 ÷ 2 = 1</span><span>${L(['remainder','resto'])}</span><span class="r">1</span><span>1 ÷ 2 = 0</span><span>${L(['remainder','resto'])}</span><span class="r">1</span></div>
   <p style="text-align:center;margin-top:12px">${L(['Read the remainders from the bottom up:','Leggi i resti dal basso verso l\'alto:'])} <b style="font-family:var(--mono);color:var(--gold);font-size:20px">1101</b></p>`;
},
  "units": function units(){
  const R=L([[['1 bit','A single 0 or 1.'],['1 byte','8 bits. About one letter of text.'],['1 KB','kilobyte ≈ 1,000 bytes. A short text.'],['1 MB','megabyte ≈ 1,000 KB. About a minute of MP3 music.'],['1 GB','gigabyte ≈ 1,000 MB. Roughly an hour of standard video.'],['1 TB','terabyte ≈ 1,000 GB. A big hard drive.']],
    [['1 bit','Un solo 0 o 1.'],['1 byte','8 bit. Circa una lettera di testo.'],['1 KB','kilobyte ≈ 1.000 byte. Un breve testo.'],['1 MB','megabyte ≈ 1.000 KB. Circa un minuto di musica MP3.'],['1 GB','gigabyte ≈ 1.000 MB. Circa un\'ora di video normale.'],['1 TB','terabyte ≈ 1.000 GB. Un grande hard disk.']]]);
  return `<div class="ladder">${R.map(r=>`<div class="rung"><b>${r[0]}</b><span>${r[1]}</span></div>`).join('')}</div>
   <p class="muted" style="margin-top:10px;font-size:14px">${L(['Music and video sizes are rough examples. Many courses use 1 KB = 1,024 bytes (2¹⁰) instead of 1,000: check which one your book uses.','Le dimensioni di musica e video sono esempi indicativi. Molti libri usano 1 KB = 1.024 byte (2¹⁰) invece di 1.000: controlla quale usa il tuo libro.'])}</p>`;
},
  "asciitable": function asciitable(){
  let t=''; for(let c=65;c<=90;c++) t+=`<span><b>${String.fromCharCode(c)}</b> ${c}</span>`;
  return `<div class="atab">${t}<span><b>a</b> 97</span><span><b>␣</b> 32</span><span><b>0</b> 48</span><span><b>!</b> 33</span></div>`;
},
  "unicode": function unicode(){
  const ch=['A','è','ñ','ß','Ж','Ω','あ','漢','한','ع','अ','😀'];
  return `<div class="cats" style="gap:8px">${ch.map(c=>`<span class="chip" style="font-size:24px;padding:6px 14px">${c}</span>`).join('')}</div>
   <p class="muted" style="text-align:center;margin-top:10px">${L(['Unicode: almost every character in every writing system, plus emoji','Unicode: quasi tutti i caratteri di ogni sistema di scrittura, più le emoji'])}</p>`;
},
  "pixels": function pixels(){
  const g=['01100110','11111111','11111111','11111111','01111110','00111100','00011000','00000000'];
  return `<div class="twocol" style="align-items:center"><div style="display:flex;justify-content:center"><div class="pix">${g.join('').split('').map(b=>`<span class="b${b}">${b}</span>`).join('')}</div></div>
   <div><p>${L(['An 8 × 8 black-and-white image: 64 pixels, 1 bit each = 64 bits = 8 bytes.','Un\'immagine in bianco e nero di 8 × 8: 64 pixel, 1 bit ciascuno = 64 bit = 8 byte.'])}</p>
   <p class="muted" style="margin-top:8px">${L(['A Full HD screen is 1920 × 1080 ≈ 2 million pixels.','Uno schermo Full HD ha 1920 × 1080 ≈ 2 milioni di pixel.'])}</p></div></div>`;
},
  "rgbmix": function rgbmix(){
  return `<svg viewBox="0 0 640 230" class="dia" role="img" aria-label="Red, green and blue light mixing">
   <g style="mix-blend-mode:screen"><circle cx="270" cy="95" r="70" fill="#ff0000"/><circle cx="370" cy="95" r="70" fill="#00ff00" style="mix-blend-mode:screen"/><circle cx="320" cy="160" r="70" fill="#0000ff" style="mix-blend-mode:screen"/></g>
   <text x="150" y="70" text-anchor="end">R 255,0,0</text><text x="490" y="70">G 0,255,0</text><text x="400" y="215">B 0,0,255</text>
   <text x="320" y="125" text-anchor="middle" style="fill:#000;font-size:12px">255,255,255</text></svg>
   <p class="muted" style="text-align:center">${L(['Mixing light: red + green = yellow, all three = white.','Mescolando la luce: rosso + verde = giallo, tutti e tre = bianco.'])}</p>`;
},
  "sampling": function sampling(){
  let wave='M20 120'; for(let x=20;x<=620;x+=5) wave+=` L${x} ${120-70*Math.sin((x-20)/600*Math.PI*4)*Math.cos((x-20)/900)}`;
  let bars=''; for(let x=20;x<=620;x+=30){const y=120-70*Math.sin((x-20)/600*Math.PI*4)*Math.cos((x-20)/900); bars+=`<line x1="${x}" y1="120" x2="${x}" y2="${y}" stroke="${C.gold}" stroke-width="3"/><circle cx="${x}" cy="${y}" r="5" fill="${C.gold}"/>`;}
  return `<svg viewBox="0 0 640 250" class="dia" role="img" aria-label="Sound wave being sampled at regular intervals">
   <line x1="20" y1="120" x2="620" y2="120" stroke="${C.line}"/><path d="${wave}" fill="none" stroke="${C.data}" stroke-width="3"/>${bars}
   <text x="20" y="230" class="sm">${L(['blue = real sound wave · yellow = samples the computer stores as numbers','blu = onda sonora reale · giallo = campioni che il computer salva come numeri'])}</text></svg>`;
},
  "rle": function rle(){
  const row='WWWWWBBBWW';
  return `<div style="display:flex;flex-direction:column;align-items:center;gap:10px">
   <div style="display:flex;gap:3px">${row.split('').map(c=>`<span style="width:26px;height:26px;border-radius:4px;background:${c==='W'?'#eeecf8':'#15161f'};border:1px solid ${C.line}"></span>`).join('')}</div>
   <div class="codes">${row}</div><div style="color:var(--muted)">↓ ${L(['run-length encoding (lossless)','codifica run-length (senza perdita)'])}</div><div class="codes" style="color:var(--gold)">5W 3B 2W</div>
   <p class="muted">${L(['10 symbols become 6. Nothing is lost: you can rebuild the row exactly.','10 simboli diventano 6. Non si perde nulla: la riga si ricostruisce identica.'])}</p></div>`;
},
  "hex": function hex(){
  const d=[...'0123456789ABCDEF'];
  return `<div class="atab">${d.map((h,i)=>`<span><b>${h}</b> = ${i}</span>`).join('')}</div>
   <div class="swatches" style="margin-top:14px">${[['#FF0000'],['#00FF00'],['#0000FF'],['#FFD166'],['#FFFFFF'],['#000000']].map(([c])=>`<div class="swb"><div class="sw" style="width:70px;height:50px;background:${c}"></div>${c}</div>`).join('')}</div>`;
},
  "divide": function divide(){ return cards([
  ['wifi',['Access','Accesso'],['Fast internet and a device at home: not everyone has them.','Internet veloce e un dispositivo a casa: non tutti li hanno.']],
  ['book',['Skills','Competenze'],['Knowing how to use technology safely and well.','Saper usare la tecnologia in modo sicuro e consapevole.']],
  ['globe',['Where you live','Dove vivi'],['Gaps between countries, and between cities and the countryside.','Differenze tra Paesi, e tra città e zone rurali.']],
  ['user',['Age & income','Età e reddito'],['Older people and poorer families are more often left out.','Anziani e famiglie con meno risorse restano più spesso esclusi.']],
]);},
  "ipos": function ipos(){
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
  "hwsw": function hwsw(){
  return `<div class="twocol">
   <div class="panel"><h3>${H('Hardware','Hardware')}</h3><p class="muted" style="margin-bottom:10px">${L(['The physical parts. You can touch them.','Le parti fisiche. Si possono toccare.'])}</p>
     <div class="chips">${[['keyboard',['Keyboard','Tastiera']],['monitor',['Monitor','Monitor']],['chip',['CPU','CPU']],['ram',['RAM','RAM']],['ssd',['SSD','SSD']],['mouse',['Mouse','Mouse']]].map(([i,n])=>`<span class="chip">${ICON(i)}${L(n)}</span>`).join('')}</div></div>
   <div class="panel"><h3>${H('Software','Software')}</h3><p class="muted" style="margin-bottom:10px">${L(['Programs: lists of instructions. You can\'t touch them.','I programmi: elenchi di istruzioni. Non si possono toccare.'])}</p>
     <div class="chips">${[['layers',['Operating system','Sistema operativo']],['app',['Web browser','Browser']],['gamepad',['Games','Videogiochi']],['app',['Word processor','Videoscrittura']],['shield',['Antivirus','Antivirus']]].map(([i,n])=>`<span class="chip">${ICON(i)}${L(n)}</span>`).join('')}</div></div>
  </div>`;
},
  "vonneumann": function vonneumann(){
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
  "cpu": function cpu(){
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
  "cores": function cores(){
  return `<div class="twocol">
   <div class="panel"><h3>${H('Clock speed','Frequenza di clock')}</h3>
     <div class="row" style="margin:8px 0 10px"><svg viewBox="0 0 160 50" style="width:160px;height:50px" aria-hidden="true"><path d="M0 40 H15 V10 H35 V40 H55 V10 H75 V40 H95 V10 H115 V40 H135 V10 H160" fill="none" stroke="${C.gold}" stroke-width="3" class="flow"/></svg></div>
     <p>${L(['The clock ticks to keep every part in step. 1 GHz = 1 billion ticks per second, so a 3.5 GHz CPU ticks about 3,500,000,000 times a second.','Il clock "batte il tempo" per tutte le parti. 1 GHz = 1 miliardo di cicli al secondo: una CPU a 3,5 GHz compie circa 3.500.000.000 cicli al secondo.'])}</p></div>
   <div class="panel"><h3>${H('Cores','Core')}</h3>
     <div class="cores" style="--n:4;max-width:220px;margin:8px 0 10px">${[0,1,2,3].map(i=>`<div class="core" style="animation-delay:${i*.4}s"></div>`).join('')}</div>
     <p>${L(['Each core is a separate processing unit. A 4-core CPU can work on 4 things at the same moment.','Ogni core è un\'unità di elaborazione separata. Una CPU a 4 core può lavorare su 4 cose nello stesso istante.'])}</p></div>
  </div>`;
},
  "board": function board(){
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
  "psu": function psu(){
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
  "ramstick": function ramstick(){
  let chips=''; const apps=L([['Browser','Music','Essay','Game','Chat','Photos','OS','Free'],['Browser','Musica','Tema','Gioco','Chat','Foto','SO','Libera']]);
  for(let i=0;i<8;i++) chips+=`<rect x="${48+i*68}" y="48" width="56" height="58" rx="3" fill="#15161f" stroke="${i<7?C.data:C.line}" stroke-width="${i<7?2:1}"/><text x="${76+i*68}" y="82" text-anchor="middle" class="sm" style="fill:${i<7?C.data:C.muted}">${apps[i]}</text>`;
  let pins=''; for(let i=0;i<60;i++){ if(i===26) continue; pins+=`<rect x="${34+i*9.6}" y="128" width="6" height="18" fill="${C.gold}"/>`;}
  return `<svg viewBox="0 0 640 170" class="dia" role="img" aria-label="RAM stick">
   <rect x="24" y="30" width="592" height="120" rx="6" fill="#1a5a43" stroke="#2f8a68" stroke-width="2"/>${chips}${pins}
   <rect x="283" y="130" width="12" height="22" fill="${C.panel2}"/>
   <text x="34" y="22" class="lbl">${L(['RAM STICK','BANCO DI RAM'])}</text><text x="606" y="22" text-anchor="end" class="sm">${L(['what is open right now','ciò che è aperto adesso'])}</text></svg>`;
},
  "powercut": function powercut(){
  return `<div class="pc">
    <div class="pc-box"><div class="pc-h">RAM<small>${L(['volatile','volatile'])}</small></div>
      <div class="files" id="ramFiles"><span class="file">${L(['essay_draft (NOT saved)','bozza_tema (NON salvata)'])}</span><span class="file">${L(['music player','lettore musicale'])}</span><span class="file">${L(['12 browser tabs','12 schede del browser'])}</span></div></div>
    <div class="pc-mid"><div class="power" id="pwr">${L(['POWER ON','ACCESO'])}</div><button class="btn" id="cut">${L(['Cut the power','Togli la corrente'])}</button></div>
    <div class="pc-box"><div class="pc-h">SSD<small>${L(['non-volatile','non volatile'])}</small></div>
      <div class="files"><span class="file">${L(['essay_v1 (saved)','tema_v1 (salvato)'])}</span><span class="file">${L(['photos','foto'])}</span><span class="file">${L(['games','giochi'])}</span></div></div>
  </div>`;
},
  "pyramid": function pyramid(){
  const Lv=L([[['Registers','inside the CPU · a few bytes · fastest'],['Cache','on the CPU chip · a few MB'],['RAM','e.g. 8–32 GB'],['Mass storage (SSD / HDD)','hundreds of GB to TB · slowest']],[['Registri','dentro la CPU · pochi byte · i più veloci'],['Cache','sul chip della CPU · pochi MB'],['RAM','es. 8–32 GB'],['Memoria di massa (SSD / HDD)','da centinaia di GB a TB · la più lenta']]]);
  const st=[['34%',C.ember],['50%','#ff9a5c'],['70%',C.gold],['92%',C.data]];
  return `<div class="pyr">${Lv.map((l,i)=>`<div class="lvl" style="--w:${st[i][0]};--c:${st[i][1]}">${l[0]}<small>${l[1]}</small></div>`).join('')}</div>
   <div class="pyr-axis"><span>${L(['Top: faster, smaller, more expensive','In alto: più veloce, più piccola, più costosa'])}</span><span>${L(['Bottom: slower, bigger, cheaper','In basso: più lenta, più grande, più economica'])}</span></div>`;
},
  "buses": function buses(){
  const B=[[L(['data bus','bus dati']),C.data,L(['carries the data itself','trasporta i dati'])],[L(['address bus','bus indirizzi']),C.gold,L(['says WHERE in memory','indica DOVE in memoria'])],[L(['control bus','bus di controllo']),C.sak,L(['says WHAT to do: read or write','indica COSA fare: leggere o scrivere'])]];
  return `<svg viewBox="0 0 640 250" class="dia" role="img" aria-label="Data, address and control buses between CPU, RAM and I/O">
   ${[[70,'CPU'],[320,'RAM'],[570,'I/O']].map(([x,t])=>`<rect x="${x-55}" y="20" width="110" height="60" rx="10" fill="#262a5e" stroke="${C.line}" stroke-width="2"/><text x="${x}" y="56" text-anchor="middle" class="lbl">${t}</text>`).join('')}
   ${B.map((b,i)=>{const y=120+i*42;return `<line x1="40" y1="${y}" x2="600" y2="${y}" stroke="${b[1]}" stroke-width="6" stroke-linecap="round" opacity=".35"/><line x1="40" y1="${y}" x2="600" y2="${y}" stroke="${b[1]}" stroke-width="3" class="flow" style="animation-delay:${i*.3}s"/>${[70,320,570].map(x=>`<line x1="${x}" y1="80" x2="${x}" y2="${y}" stroke="${b[1]}" stroke-width="1.5" opacity=".5"/>`).join('')}<text x="44" y="${y-8}" style="fill:${b[1]};font-size:13px">${b[0]}</text><text x="600" y="${y-8}" text-anchor="end" class="sm">${b[2]}</text>`;}).join('')}
  </svg>`;
},
  "hdd": function hdd(){
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
  "optcloud": function optcloud(){
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
  "ioflow": function ioflow(){
  const col=(arr)=>`<div class="iocol">${arr.map(([i,n])=>`<span class="chip">${ICON(i)}${L(n)}</span>`).join('')}</div>`;
  return `<div class="ioflow">
   <div><div class="eyebrow" style="margin-bottom:8px">Input →</div>${col([['keyboard',['Keyboard','Tastiera']],['mouse',['Mouse','Mouse']],['mic',['Microphone','Microfono']],['webcam',['Webcam','Webcam']],['scanner',['Scanner','Scanner']]])}</div>
   <div class="iobox">${ICON('chip')}<b>Computer</b><span class="muted" style="font-size:13px">${L(['processes','elabora'])}</span></div>
   <div><div class="eyebrow" style="margin-bottom:8px;color:var(--ember)">→ Output</div>${col([['monitor',['Monitor','Monitor']],['speaker',['Speakers','Casse']],['printer',['Printer','Stampante']],['projector',['Projector','Proiettore']],['headset',['Headphones','Cuffie']]])}</div>
  </div>`;
},
  "both": function both(){ return cards([
  ['touch',['Touchscreen','Touchscreen'],['You touch it (input) and it shows pictures (output).','Lo tocchi (input) e mostra immagini (output).']],
  ['headset',['Headset with mic','Cuffie con microfono'],['Mic = input, earphones = output.','Microfono = input, auricolari = output.']],
  ['gamepad',['Controller with vibration','Controller con vibrazione'],['Buttons = input, rumble = output.','Tasti = input, vibrazione = output.']],
  ['robot',['Robot','Robot'],['Sensors are inputs; motors and lights are outputs.','I sensori sono input; motori e luci sono output.']],
]);},
  "touch": function touch(){
  let grid=''; for(let i=0;i<9;i++){grid+=`<line x1="${140+i*45}" y1="40" x2="${140+i*45}" y2="220" stroke="${C.data}" stroke-opacity=".5"/>`;} for(let j=0;j<5;j++){grid+=`<line x1="140" y1="${40+j*45}" x2="500" y2="${40+j*45}" stroke="${C.sak}" stroke-opacity=".5"/>`;}
  return `<svg viewBox="0 0 640 260" class="dia" role="img" aria-label="Capacitive touchscreen grid sensing a finger">
   <rect x="120" y="20" width="400" height="220" rx="16" fill="#10283a" stroke="${C.line}" stroke-width="3"/>${grid}
   <circle cx="320" cy="130" r="26" fill="${C.gold}" opacity=".25" class="pulse"/><circle cx="320" cy="130" r="10" fill="${C.gold}"/>
   <path d="M330 250 C330 200 320 160 320 140" stroke="#e8c4a8" stroke-width="22" stroke-linecap="round" fill="none"/>
   <text x="530" y="60" class="sm">${L(['grid of electrodes','griglia di elettrodi'])}</text>
   <text x="530" y="140" style="fill:${C.gold};font-size:13px">x=4, y=2</text>
   <text x="20" y="140" class="sm">${L(['finger changes','il dito modifica'])}</text><text x="20" y="156" class="sm">${L(['the charge here','la carica qui'])}</text></svg>`;
},
  "earth": function earth(){ return cards([
  ['recycle',['E-waste (RAEE)','RAEE'],['Old computers are electronic waste. Take them to a collection point, never in normal rubbish.','I vecchi computer sono rifiuti elettronici (RAEE): vanno portati all\'isola ecologica, mai nell\'indifferenziato.']],
  ['chip',['Precious materials','Materiali preziosi'],['Recycling recovers copper, gold and other metals.','Il riciclo recupera rame, oro e altri metalli.']],
  ['warn',['Toxic parts','Parti tossiche'],['Batteries and some components can pollute soil and water.','Batterie e alcuni componenti possono inquinare terreno e acqua.']],
  ['bolt',['Moore\'s law','Legge di Moore'],['The number of transistors on a chip doubled about every 2 years. Today this is slowing down.','Il numero di transistor su un chip è raddoppiato circa ogni 2 anni. Oggi questa crescita sta rallentando.']],
]);},
  "gpu": function gpu(){
  return `<div class="twocol">
   <div class="panel"><h3>CPU</h3><p class="muted" style="font-size:14px;margin-bottom:8px">${L(['A few powerful cores.','Pochi core potenti.'])}</p>
     <div class="cores" style="--n:4;max-width:200px">${[0,1,2,3].map(i=>`<div class="core" style="animation-delay:${i*.35}s"></div>`).join('')}</div></div>
   <div class="panel"><h3>${H('GPU','Scheda video')}</h3><p class="muted" style="font-size:14px;margin-bottom:8px">${L(['Thousands of small cores colouring pixels at the same time.','Migliaia di piccoli core che colorano i pixel contemporaneamente.'])}</p>
     <div class="cores" style="--n:12">${Array.from({length:48},(_,i)=>`<div class="core g" style="animation-delay:${((i%12)+Math.floor(i/12))*.08}s"></div>`).join('')}</div></div>
  </div>`;
},
  "journey": function journey(){
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
  "stack": function stack(){
  const Ls=L([[['You (the user)','click, type, tap'],['Application software','games, browser, word processor'],['Operating system','Windows, macOS, Linux, Android, iOS'],['Drivers + firmware','translators for each device'],['Hardware','CPU, RAM, storage, screen…']],[['Tu (l\'utente)','clicchi, scrivi, tocchi'],['Software applicativo','giochi, browser, videoscrittura'],['Sistema operativo','Windows, macOS, Linux, Android, iOS'],['Driver + firmware','traduttori per ogni dispositivo'],['Hardware','CPU, RAM, memoria di massa, schermo…']]]);
  const col=[C.sak,C.gold,C.ember,C.data,'#b6b9e0'];
  return `<div class="stack">${Ls.map((l,i)=>`${i?'<div class="arrowdown"><i></i></div>':''}<div class="layer" style="background:${col[i]}">${l[0]}<small>${l[1]}</small></div>`).join('')}</div>`;
},
  "osjobs": function osjobs(){ return cards([
  ['ram',['Manages memory','Gestisce la memoria'],['Decides which program gets which part of RAM.','Decide quale parte della RAM va a ogni programma.']],
  ['chip',['Manages processes','Gestisce i processi'],['Shares the CPU so many programs run at once.','Divide la CPU così più programmi girano insieme.']],
  ['folder',['Manages files','Gestisce i file'],['The file system: folders, saving, opening.','Il file system: cartelle, salvataggio, apertura.']],
  ['gear',['Controls devices','Controlla le periferiche'],['Talks to hardware through drivers.','Comunica con l\'hardware tramite i driver.']],
  ['app',['User interface','Interfaccia utente'],['Desktop, windows, icons, menus (GUI).','Desktop, finestre, icone, menu (GUI).']],
  ['lock',['Security','Sicurezza'],['User accounts, passwords, permissions.','Account utente, password, permessi.']],
]);},
  "process": function process(){
  const P=L([['Music','Browser','Chat','Music','Browser','Chat','Music','Browser'],['Musica','Browser','Chat','Musica','Browser','Chat','Musica','Browser']]);
  const col={0:C.sak,1:C.gold,2:C.data};
  return `<div class="twocol" style="margin-bottom:14px">
    <div class="panel"><h3>${H('Program','Programma')}</h3><p>${L(['A file of instructions sitting on the disk. Not doing anything.','Un file di istruzioni salvato sul disco. Fermo.'])}</p></div>
    <div class="panel"><h3>${H('Process','Processo')}</h3><p>${L(['A program while it is running, loaded in RAM and using the CPU.','Un programma mentre è in esecuzione: caricato in RAM e usa la CPU.'])}</p></div></div>
   <div class="eyebrow" style="margin-bottom:6px">${L(['CPU time, sliced by the scheduler','Tempo della CPU, diviso dallo scheduler'])}</div>
   <div class="slices">${P.map((p,i)=>`<i style="background:${col[i%3]}">${p}</i>`).join('')}<span class="cursor"></span></div>
   <p class="muted" style="margin-top:8px;font-size:14px">${L(['Each slice lasts a few milliseconds, so it looks like everything runs at once.','Ogni fetta dura pochi millisecondi: sembra che tutto giri contemporaneamente.'])}</p>`;
},
  "tree": function tree(){
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
  "fileops": function fileops(){ return cards([
  ['file',['Create & rename','Crea e rinomina'],['Give files clear names: verifica_storia_2026.docx, not doc1.docx.','Dai nomi chiari: verifica_storia_2026.docx, non doc1.docx.']],
  ['layers',['Copy','Copia'],['Makes a second copy. The original stays where it was.','Crea un secondo esemplare. L\'originale resta dov\'era.']],
  ['folder',['Move (cut & paste)','Sposta (taglia e incolla)'],['The file leaves the old folder and goes to the new one.','Il file lascia la vecchia cartella e va nella nuova.']],
  ['recycle',['Delete','Elimina'],['Goes to the Recycle Bin first, so you can still restore it.','Finisce prima nel Cestino, da cui puoi ancora ripristinarlo.']],
]);},
  "gui": function gui(){ return cards([
  ['app',['Windows','Finestre'],['Each program runs in its own window.','Ogni programma lavora nella sua finestra.']],
  ['image',['Icons','Icone'],['Little pictures for files, folders and apps.','Piccole immagini per file, cartelle e app.']],
  ['layers',['Menus','Menu'],['Lists of commands to choose from.','Elenchi di comandi tra cui scegliere.']],
  ['mouse',['Pointer','Puntatore'],['The arrow you move with the mouse or touchpad.','La freccia che muovi con mouse o touchpad.']],
]);},
  "apps": function apps(){ return cards([
  ['app',['Desktop apps','Applicazioni desktop'],['Word processors, spreadsheets, photo editors, games.','Videoscrittura, fogli di calcolo, fotoritocco, giochi.']],
  ['touch',['Mobile apps','App per dispositivi mobili'],['Downloaded from an app store, built for touch and small screens.','Si scaricano da uno store; pensate per il touch e gli schermi piccoli.']],
  ['lock',['Permissions','Autorizzazioni'],['Apps ask to use the camera, microphone or location. Only allow what makes sense.','Le app chiedono di usare fotocamera, microfono o posizione. Concedi solo ciò che ha senso.']],
  ['book',['Learning apps','App per imparare'],['Language apps use short lessons, repetition and points to keep you going.','Le app per le lingue usano lezioni brevi, ripetizione e punti per motivarti.']],
]);},
  "sensors": function sensors(){
  return `<svg viewBox="0 0 640 260" class="dia" role="img" aria-label="Phone tilting with accelerometer, and satellites sending signals to a GNSS receiver">
   <g style="transform-origin:150px 140px" class="tilt"><rect x="110" y="60" width="80" height="150" rx="14" fill="#262a5e" stroke="${C.data}" stroke-width="3"/><rect x="120" y="78" width="60" height="110" rx="4" fill="#10283a"/><path d="M150 100 V160 M138 148 L150 160 L162 148" stroke="${C.gold}" stroke-width="3" fill="none"/></g>
   <text x="150" y="245" text-anchor="middle" class="sm">${L(['accelerometer: feels tilt and movement','accelerometro: sente inclinazione e movimento'])}</text>
   ${[[400,40],[500,25],[600,50],[450,90]].map(([x,y],i)=>`<g>${ICON('sat','ico" x="'+(x-14)+'" y="'+(y-14)+'" width="28" height="28" style="color:'+C.gold)}<line x1="${x}" y1="${y+14}" x2="500" y2="200" stroke="${C.gold}" stroke-width="1.5" class="flow" style="animation-delay:${i*.25}s"/></g>`).join('')}
   <circle cx="500" cy="205" r="10" fill="${C.data}"/><circle cx="500" cy="205" r="22" fill="none" stroke="${C.data}" class="pulse"/>
   <text x="500" y="245" text-anchor="middle" class="sm">${L(['GNSS: position from 4+ satellites','GNSS: posizione da 4 o più satelliti'])}</text>
   <style>.tilt{animation:tilt 3s ease-in-out infinite}@keyframes tilt{0%,100%{transform:rotate(0)}50%{transform:rotate(-80deg)}}</style></svg>`;
},
  "licences": function licences(){ return cards([
  ['lock',['Proprietary','Proprietario'],['You pay for a licence to USE it. The code is secret and you can\'t change it.','Paghi una licenza per USARLO. Il codice è segreto e non puoi modificarlo.']],
  ['heart',['Freeware','Freeware'],['Free to use, but the code is still closed.','Gratuito da usare, ma il codice resta chiuso.']],
  ['key',['Shareware','Shareware'],['Try it free for a while, then pay to keep using it.','Lo provi gratis per un periodo, poi paghi per continuare.']],
  ['globe',['Open source','Open source'],['The source code is public: anyone can study, change and share it (Linux, Firefox, LibreOffice).','Il codice sorgente è pubblico: chiunque può studiarlo, modificarlo e condividerlo (Linux, Firefox, LibreOffice).']],
]);},
  "comm": function comm(){
  return `<svg viewBox="0 0 640 220" class="dia" role="img" aria-label="Sender, channel, receiver">
   ${[[90,L(['SENDER','EMITTENTE']),'user'],[550,L(['RECEIVER','RICEVENTE']),'user']].map(([x,t,i])=>`<rect x="${x-70}" y="50" width="140" height="90" rx="12" fill="#262a5e" stroke="${C.line}" stroke-width="2"/><text x="${x}" y="105" text-anchor="middle" class="lbl">${t}</text>`).join('')}
   <path d="M160 95 H480" stroke="${C.data}" stroke-width="4" class="flow"/>
   <text x="320" y="80" text-anchor="middle" class="lbl">${L(['CHANNEL','CANALE'])}</text>
   <rect r="0" width="54" height="22" rx="4" fill="${C.gold}"><animateMotion dur="2.4s" repeatCount="indefinite" path="M160 84 H426"/></rect>
   <text x="320" y="130" text-anchor="middle" class="sm">${L(['message coded in bits (cable, Wi-Fi, fibre, 5G…)','messaggio codificato in bit (cavo, Wi-Fi, fibra, 5G…)'])}</text>
   <text x="320" y="190" text-anchor="middle" class="sm">${L(['A PROTOCOL = the shared rules both sides follow','PROTOCOLLO = le regole comuni che entrambi rispettano'])}</text></svg>`;
},
  "networks": function networks(){ return cards([
  ['home',['LAN','LAN'],['Local Area Network: devices in one home, school or office.','Rete locale: dispositivi in una casa, scuola o ufficio.']],
  ['globe',['WAN','WAN'],['Wide Area Network: links networks across cities and countries.','Rete geografica: collega reti tra città e Paesi.']],
  ['router',['Router','Router'],['Connects networks and chooses the route for each packet.','Collega reti diverse e sceglie il percorso di ogni pacchetto.']],
  ['wifi',['Wi-Fi','Wi-Fi'],['Connects devices to the LAN by radio waves.','Collega i dispositivi alla LAN con onde radio.']],
  ['key',['IP address','Indirizzo IP'],['Each device on the Internet has an address, like 192.168.1.10.','Ogni dispositivo in rete ha un indirizzo, ad esempio 192.168.1.10.']],
  ['bolt',['Speed','Velocità'],['Measured in bits per second: Mbps, Gbps.','Si misura in bit al secondo: Mbps, Gbps.']],
]);},
  "packets": function packets(){
  const R=[[230,60],[230,200],[410,60],[410,200],[320,130]];
  return `<svg viewBox="0 0 640 260" class="dia" role="img" aria-label="A message split into packets travelling through different routers">
   <rect x="20" y="100" width="100" height="60" rx="10" fill="#262a5e" stroke="${C.data}" stroke-width="2"/><text x="70" y="135" text-anchor="middle">${L(['You','Tu'])}</text>
   <rect x="520" y="100" width="100" height="60" rx="10" fill="#262a5e" stroke="${C.data}" stroke-width="2"/><text x="570" y="135" text-anchor="middle">${L(['Friend','Amica'])}</text>
   ${[['M120 130 L230 60'],['M120 130 L230 200'],['M230 60 L410 60'],['M230 200 L410 200'],['M230 60 L320 130'],['M320 130 L410 200'],['M410 60 L520 130'],['M410 200 L520 130'],['M120 130 L320 130'],['M320 130 L410 60']].map(([d])=>`<path d="${d}" stroke="${C.line}" stroke-width="3"/>`).join('')}
   ${R.map(([x,y])=>`<circle cx="${x}" cy="${y}" r="18" fill="#15161f" stroke="${C.muted}" stroke-width="2"/><text x="${x}" y="${y+4}" text-anchor="middle" class="sm">R</text>`).join('')}
   ${[['M120 130 L230 60 L410 60 L520 130',C.gold,'1',0],['M120 130 L320 130 L410 200 L520 130',C.sak,'2',.6],['M120 130 L230 200 L410 200 L520 130',C.data,'3',1.2]].map(([p,c,n,d])=>`<g><rect x="-11" y="-11" width="22" height="22" rx="4" fill="${c}"/><text y="5" text-anchor="middle" style="fill:#000;font-size:13px">${n}</text><animateMotion dur="3.6s" begin="${d}s" repeatCount="indefinite" path="${p}"/></g>`).join('')}
   <text x="320" y="250" text-anchor="middle" class="sm">${L(['R = router · packets can take different routes and are put back in order at the end','R = router · i pacchetti possono seguire strade diverse e vengono riordinati all\'arrivo'])}</text></svg>`;
},
  "url": function url(){
  const parts=[['https://',C.sak],['www.school-example.it',C.gold],['/students/timetable.html',C.data]];
  return `<div class="url">${parts.map(([t,c])=>`<span style="--c:${c}">${t}</span>`).join('')}</div>
   <div class="legend"><div style="--c:${C.sak}"><i></i><span><b>${L(['Protocol','Protocollo'])}</b> · ${L(['HTTPS = encrypted, safer (padlock)','HTTPS = cifrato, più sicuro (lucchetto)'])}</span></div>
   <div style="--c:${C.gold}"><i></i><span><b>${L(['Domain','Dominio'])}</b> · ${L(['the site\'s name; .it = Italy','il nome del sito; .it = Italia'])}</span></div>
   <div style="--c:${C.data}"><i></i><span><b>${L(['Path','Percorso'])}</b> · ${L(['which page on the site','quale pagina del sito'])}</span></div></div>`;
},
  "webnet": function webnet(){
  return `<div class="twocol">
   <div class="panel"><h3>Internet</h3><p>${L(['The physical network of networks: cables, routers, servers, connecting billions of devices. It carries email, games, video calls… and the Web.','La rete di reti fisica: cavi, router, server che collegano miliardi di dispositivi. Trasporta e-mail, giochi, videochiamate… e il Web.'])}</p></div>
   <div class="panel"><h3>World Wide Web</h3><p>${L(['A service that runs on the Internet: pages written in HTML, linked by hyperlinks, which you open with a browser. Invented by Tim Berners-Lee at CERN (1989).','Un servizio che funziona su Internet: pagine scritte in HTML, collegate da link, che apri con un browser. Inventato da Tim Berners-Lee al CERN (1989).'])}</p></div></div>`;
},
  "search": function search(){ return cards([
  ['search',['Choose keywords','Scegli le parole chiave'],['"volcano eruption causes" works better than a long question.','"eruzione vulcano cause" funziona meglio di una domanda lunga.']],
  ['book',['Use "quotes"','Usa le "virgolette"'],['Search for an exact phrase: "von Neumann architecture".','Cerca una frase esatta: "architettura di von Neumann".']],
  ['eye',['Check the source','Verifica la fonte'],['Who wrote it? When? Is it an official or expert site?','Chi l\'ha scritto? Quando? È un sito ufficiale o esperto?']],
  ['layers',['Compare','Confronta'],['Confirm the information on at least two reliable sites.','Conferma l\'informazione su almeno due siti affidabili.']],
]);},
  "email": function email(){
  return `<div class="panel" style="max-width:560px;margin:0 auto;font-size:15px">
   <div class="row" style="gap:6px"><b style="width:70px">${L(['From','Da'])}</b><span>hana<span style="color:var(--gold)">@</span>school-example.it</span></div>
   <div class="row" style="gap:6px"><b style="width:70px">${L(['To','A'])}</b><span>teacher@school-example.it</span></div>
   <div class="row" style="gap:6px"><b style="width:70px">Cc</b><span class="muted">${L(['copy: everyone sees it','copia: tutti la vedono'])}</span></div>
   <div class="row" style="gap:6px"><b style="width:70px">${L(['Bcc','Ccn'])}</b><span class="muted">${L(['hidden copy: others don\'t see these addresses','copia nascosta: gli altri non vedono questi indirizzi'])}</span></div>
   <div class="row" style="gap:6px"><b style="width:70px">${L(['Subject','Oggetto'])}</b><span>${L(['Science homework – Hana, 3B','Compiti di scienze – Hana, 3B'])}</span></div>
   <div class="row" style="gap:6px;margin-top:6px">${ICON('file','ico" style="width:18px;height:18px')}<span>${L(['attachment: report.pdf','allegato: relazione.pdf'])}</span></div></div>
   <p class="muted" style="text-align:center;margin-top:8px;font-size:14px">${L(['address = username @ domain','indirizzo = nome utente @ dominio'])}</p>`;
},
  "phishing": function phishing(){ return cards([
  ['warn',['Urgent threats','Minacce urgenti'],['"Your account will be closed in 24 hours!"','"Il tuo account sarà chiuso entro 24 ore!"']],
  ['key',['Asks for passwords','Chiede la password'],['Real companies never ask for your password by email.','Le aziende vere non chiedono mai la password via e-mail.']],
  ['eye',['Strange sender or link','Mittente o link strani'],['Look closely: "amaz0n-security.xyz" is not the real site.','Guarda bene: "amaz0n-security.xyz" non è il sito vero.']],
  ['heart',['Too good to be true','Troppo bello per essere vero'],['"You won a free phone!" is bait.','"Hai vinto un telefono gratis!" è un\'esca.']],
]);},
  "netiquette": function netiquette(){ return cards([
  ['user',['Respect people','Rispetta le persone'],['Behind every screen there is a real person.','Dietro ogni schermo c\'è una persona reale.']],
  ['warn',['NO ALL CAPS','NIENTE MAIUSCOLE'],['Writing in capitals feels like SHOUTING.','Scrivere tutto in maiuscolo sembra URLARE.']],
  ['image',['Ask before posting','Chiedi prima di pubblicare'],['Never share photos of others without permission.','Non condividere foto di altri senza permesso.']],
  ['eye',['Your digital footprint','La tua impronta digitale'],['What you post can stay online for years.','Ciò che pubblichi può restare online per anni.']],
]);},
  "iot": function iot(){ return cards([
  ['tower',['5G','5G'],['5th-generation mobile network: much faster, very low delay, and many more devices connected at once.','Rete mobile di quinta generazione: molto più veloce, ritardo minimo e moltissimi dispositivi collegati insieme.']],
  ['home',['Smart home','Casa intelligente'],['Thermostats, lights and alarms you control from your phone.','Termostati, luci e allarmi che controlli dal telefono.']],
  ['watch',['Wearables','Dispositivi indossabili'],['Smartwatches that count steps and heartbeats.','Smartwatch che contano passi e battiti.']],
  ['car',['Connected cars & cities','Auto e città connesse'],['Sensors that report traffic, parking and air quality.','Sensori che segnalano traffico, parcheggi e qualità dell\'aria.']],
]);},
  "cia": function cia(){ return cards([
  ['lock',['Confidentiality','Riservatezza'],['Only the right people can read the data.','Solo le persone autorizzate possono leggere i dati.']],
  ['shield',['Integrity','Integrità'],['Data is not changed or damaged without permission.','I dati non vengono modificati o danneggiati senza permesso.']],
  ['power',['Availability','Disponibilità'],['Data and services work when you need them.','Dati e servizi funzionano quando servono.']],
  ['warn',['Threats','Minacce'],['Human mistakes, attacks by criminals, breakdowns, fires and floods.','Errori umani, attacchi di criminali, guasti, incendi e alluvioni.']],
]);},
  "pwdtips": function pwdtips(){ return cards([
  ['key',['Long','Lunga'],['At least 12 characters. A passphrase like "Ramen!Sotto-la-Luna7" is strong and easy to remember.','Almeno 12 caratteri. Una frase come "Ramen!Sotto-la-Luna7" è forte e facile da ricordare.']],
  ['layers',['Mixed','Varia'],['Upper and lower case letters, numbers and symbols.','Maiuscole, minuscole, numeri e simboli.']],
  ['warn',['Not personal','Non personale'],['No names, birthdays, pets, "123456" or "password".','Niente nomi, compleanni, animali, "123456" o "password".']],
  ['lock',['One per account + 2FA','Una per account + 2FA'],['Never reuse passwords. Two-factor authentication adds a code from your phone.','Non riusare le password. L\'autenticazione a due fattori aggiunge un codice dal telefono.']],
]);},
  "malware": function malware(){ return cards([
  ['bug',['Virus','Virus'],['Attaches to files and spreads when they are opened.','Si attacca ai file e si diffonde quando vengono aperti.']],
  ['share',['Worm','Worm'],['Copies itself across networks by itself.','Si copia da solo attraverso le reti.']],
  ['gamepad',['Trojan horse','Cavallo di Troia'],['Looks like a useful program but hides malware.','Sembra un programma utile ma nasconde un malware.']],
  ['lock',['Ransomware','Ransomware'],['Encrypts your files and demands money to unlock them.','Cifra i tuoi file e chiede un riscatto per sbloccarli.']],
  ['eye',['Spyware','Spyware'],['Secretly watches what you do and steals data.','Spia di nascosto cosa fai e ruba dati.']],
  ['image',['Adware','Adware'],['Floods you with unwanted ads.','Ti riempie di pubblicità indesiderata.']],
]);},
  "netsec": function netsec(){ return cards([
  ['shield',['Antivirus','Antivirus'],['Scans files and blocks known malware. Keep it updated.','Analizza i file e blocca i malware conosciuti. Va tenuto aggiornato.']],
  ['wall',['Firewall','Firewall'],['A filter that decides which network traffic may enter or leave.','Un filtro che decide quale traffico di rete può entrare o uscire.']],
  ['wifi',['Protected Wi-Fi','Wi-Fi protetto'],['Use WPA2/WPA3 encryption and change the router\'s default password.','Usa la cifratura WPA2/WPA3 e cambia la password predefinita del router.']],
  ['update',['Updates','Aggiornamenti'],['Updates fix security holes. Install them!','Gli aggiornamenti chiudono le falle di sicurezza. Installali!']],
]);},
  "safeweb": function safeweb(){ return cards([
  ['lock',['HTTPS padlock','Lucchetto HTTPS'],['Type passwords only on encrypted sites.','Inserisci password solo su siti cifrati.']],
  ['eye',['Cookies & privacy','Cookie e privacy'],['Cookies remember you; accept only the necessary ones.','I cookie ti ricordano; accetta solo quelli necessari.']],
  ['wifi',['Public Wi-Fi','Wi-Fi pubblico'],['Avoid logging in to important accounts on open networks.','Evita di accedere ad account importanti su reti aperte.']],
  ['file',['Downloads','Download'],['Download only from official sites and stores.','Scarica solo da siti e store ufficiali.']],
]);},
  "backup": function backup(){
  return `<div class="grid3">${[['3',['copies of your data','copie dei dati'],['the original + 2 backups','l\'originale + 2 backup']],['2',['different media','supporti diversi'],['e.g. laptop + external disk','es. portatile + disco esterno']],['1',['copy off-site','copia altrove'],['e.g. in the cloud','es. nel cloud']]].map(([n,a,b])=>`<div class="mini" style="align-items:center;text-align:center"><b style="font-family:var(--display);font-size:42px;color:var(--gold);font-weight:400">${n}</b><b>${L(a)}</b><span>${L(b)}</span></div>`).join('')}</div>
   <p class="muted" style="margin-top:10px;font-size:14px;text-align:center">${L(['The 3-2-1 backup rule','La regola del backup 3-2-1'])}</p>`;
},
  "vpn": function vpn(){
  return `<svg viewBox="0 0 640 220" class="dia" role="img" aria-label="VPN encrypted tunnel">
   <rect x="20" y="80" width="100" height="60" rx="10" fill="#262a5e" stroke="${C.data}" stroke-width="2"/><text x="70" y="115" text-anchor="middle">${L(['You','Tu'])}</text>
   <rect x="400" y="80" width="100" height="60" rx="10" fill="#262a5e" stroke="${C.gold}" stroke-width="2"/><text x="450" y="115" text-anchor="middle" style="font-size:12px">VPN server</text>
   <rect x="540" y="80" width="80" height="60" rx="10" fill="#262a5e" stroke="${C.line}" stroke-width="2"/><text x="580" y="115" text-anchor="middle" style="font-size:12px">${L(['website','sito'])}</text>
   <path d="M120 95 H400 M120 125 H400" stroke="${C.good}" stroke-width="3"/><rect x="120" y="95" width="280" height="30" fill="${C.good}" opacity=".12"/>
   <path d="M500 110 H540" stroke="${C.line}" stroke-width="3"/>
   ${[0,1,2].map(i=>`<g><rect x="-10" y="-7" width="20" height="14" rx="3" fill="${C.good}"/>${'<path d="M-4 -1 V-4 a4 4 0 0 1 8 0 V-1" stroke="#032" fill="none" stroke-width="1.5"/>'}<animateMotion dur="2.4s" begin="${i*.8}s" repeatCount="indefinite" path="M125 110 H395"/></g>`).join('')}
   <text x="260" y="80" text-anchor="middle" style="fill:${C.good}">${L(['encrypted tunnel','tunnel cifrato'])}</text>
   <text x="260" y="170" text-anchor="middle" class="sm">${L(['on public Wi-Fi, others can\'t read what travels inside the tunnel','sul Wi-Fi pubblico, gli altri non possono leggere ciò che viaggia nel tunnel'])}</text></svg>`;
},
  "cloudmodels": function cloudmodels(){ return cards([
  ['app',['SaaS · Software as a Service','SaaS · Software come servizio'],['Ready apps in the browser: webmail, online office, school platforms.','App pronte nel browser: webmail, office online, piattaforme scolastiche.']],
  ['layers',['PaaS · Platform','PaaS · Piattaforma'],['A platform where developers build and run their own apps.','Una piattaforma dove gli sviluppatori creano ed eseguono le loro app.']],
  ['hdd',['IaaS · Infrastructure','IaaS · Infrastruttura'],['Rented servers, storage and networks.','Server, memoria e reti in affitto.']],
  ['warn',['Pros & cons','Pro e contro'],['Use from any device and never lose files; but you need internet and you trust someone else with your data.','Usi qualsiasi dispositivo e non perdi i file; ma serve internet e affidi i tuoi dati a qualcun altro.']],
]);},
  "share": function share(){
  const P=[[['Viewer','Visualizzatore'],['can only read','può solo leggere']],[['Commenter','Commentatore'],['can read and add comments','può leggere e commentare']],[['Editor','Editor'],['can change the file','può modificare il file']]];
  return `<div class="panel" style="max-width:520px;margin:0 auto"><div class="row" style="justify-content:space-between"><b>${ICON('folder','ico" style="width:20px;height:20px;vertical-align:-4px;color:var(--data)')} ${L(['Science project','Progetto di scienze'])}</b><span class="badge go">${L(['Share','Condividi'])}</span></div>
   ${[['Hana','Editor'],['Luca',L(['Commenter','Commentatore'])],[L(['Teacher','Prof.']),L(['Viewer','Visualizzatore'])]].map(([n,r])=>`<div class="row" style="justify-content:space-between;margin-top:8px;border-top:1px solid var(--line);padding-top:8px"><span>${ICON('user','ico" style="width:18px;height:18px;vertical-align:-3px')} ${n}</span><span class="muted">${r}</span></div>`).join('')}</div>
   <div class="legend">${P.map((p,i)=>`<div style="--c:${[C.data,C.gold,C.ember][i]}"><i></i><span><b>${L(p[0])}</b> · ${L(p[1])}</span></div>`).join('')}</div>`;
},
  "calendar": function calendar(){
  const d=L([['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],['Lun','Mar','Mer','Gio','Ven','Sab','Dom']]);
  const ev={3:L(['Maths test','Verifica mate']),9:L(['Group call 16:00','Call di gruppo 16:00']),12:L(['Hand in project','Consegna progetto'])};
  return `<div class="cal">${d.map(x=>`<div class="h">${x}</div>`).join('')}${Array.from({length:14},(_,i)=>`<div>${i+1}${ev[i+1]?`<em>${ev[i+1]}</em>`:''}</div>`).join('')}</div>
   <p class="muted" style="text-align:center;margin-top:8px;font-size:14px">${L(['A shared calendar: everyone in the group sees the same events and gets reminders.','Un calendario condiviso: tutto il gruppo vede gli stessi eventi e riceve promemoria.'])}</p>`;
},
  "videocall": function videocall(){ return cards([
  ['camera',['Camera & mic','Webcam e microfono'],['Mute when you\'re not speaking. Check your background.','Silenzia il microfono quando non parli. Controlla lo sfondo.']],
  ['share',['Share screen','Condividi schermo'],['Show a document or slides to everyone.','Mostra un documento o le slide a tutti.']],
  ['mail',['Chat & hand raise','Chat e alzata di mano'],['Ask questions without interrupting.','Fai domande senza interrompere.']],
  ['recycle',['Environment','Ambiente'],['Calls avoid travel and its CO₂, but data centres also use energy.','Le call evitano viaggi e CO₂, ma anche i data center consumano energia.']],
]);},
  "wp": function wp(){
  return `<div class="panel" style="padding:10px"><div class="toolbar" style="justify-content:flex-start;margin-bottom:8px"><button>B</button><button><i>I</i></button><button><u>U</u></button><select aria-label="size"><option>12</option></select><button>≡</button><button>${ICON('image','ico" style="width:16px;height:16px')}</button><button>${ICON('table','ico" style="width:16px;height:16px')}</button></div>
   <div class="doc"><h3 class="t" style="text-align:center;font-family:Georgia,serif;font-size:22px">${L(['The Glitch Report','Il rapporto Glitch'])}</h3><p class="bd" style="text-align:justify">${L(['A word processor lets you write, edit and format text: <b>bold</b>, <i>italic</i>, <u>underline</u>, font size, alignment, paragraphs, lists and styles.','Un programma di videoscrittura ti permette di scrivere, modificare e formattare il testo: <b>grassetto</b>, <i>corsivo</i>, <u>sottolineato</u>, dimensione del carattere, allineamento, paragrafi, elenchi e stili.'])}</p></div></div>`;
},
  "wpformats": function wpformats(){ return cards([
  ['file',['.docx / .odt','.docx / .odt'],['Editable documents (Word / LibreOffice Writer).','Documenti modificabili (Word / LibreOffice Writer).']],
  ['book',['.pdf','.pdf'],['Looks the same on every device; good for sending and printing.','Appare uguale su ogni dispositivo; ideale per inviare e stampare.']],
  ['search',['Find & replace','Trova e sostituisci'],['Change a word everywhere in one go.','Cambia una parola ovunque in un colpo solo.']],
  ['update',['Undo (Ctrl+Z)','Annulla (Ctrl+Z)'],['Your best friend when something goes wrong.','La tua migliore amica quando qualcosa va storto.']],
]);},
  "wpextra": function wpextra(){ return cards([
  ['image',['Images','Immagini'],['Insert, resize and choose text wrapping (around, behind, in line).','Inserisci, ridimensiona e scegli il testo a capo (intorno, dietro, in linea).']],
  ['table',['Tables','Tabelle'],['Rows and columns of cells; you can merge cells and add borders.','Righe e colonne di celle; puoi unire celle e aggiungere bordi.']],
  ['bolt',['Symbols & equations','Simboli ed equazioni'],['Insert Ω, ≠, π and use the equation editor for maths.','Inserisci Ω, ≠, π e usa l\'editor di equazioni per la matematica.']],
  ['share',['Share, link, export','Condividi, collega, esporta'],['Add hyperlinks, export to PDF, print, or send by email.','Aggiungi link, esporta in PDF, stampa o invia per e-mail.']],
]);},
  "ergo": function ergo(){
  return `<svg viewBox="0 0 640 260" class="dia" role="img" aria-label="Good posture at a computer">
   <rect x="380" y="60" width="150" height="100" rx="6" fill="#10283a" stroke="${C.data}" stroke-width="3"/><rect x="445" y="160" width="20" height="40" fill="${C.line}"/><rect x="300" y="200" width="300" height="10" fill="${C.line}"/>
   <circle cx="160" cy="70" r="24" fill="#e8c4a8"/><path d="M160 94 V170 M160 120 L230 150 L300 190 M160 170 L240 170 L240 240 M160 170 L160 240" stroke="#e8c4a8" stroke-width="12" stroke-linecap="round" fill="none"/>
   <rect x="120" y="170" width="70" height="10" fill="${C.muted}"/><rect x="185" y="100" width="10" height="80" fill="${C.muted}"/>
   <path d="M184 66 L380 66" stroke="${C.gold}" stroke-width="2" stroke-dasharray="6 6"/><text x="282" y="58" text-anchor="middle" style="fill:${C.gold};font-size:12px">${L(['top of screen at eye level','bordo alto dello schermo all\'altezza degli occhi'])}</text>
   <path d="M184 120 L380 120" stroke="${C.data}" stroke-width="2"/><text x="282" y="112" text-anchor="middle" style="fill:${C.data};font-size:12px">${L(['about 50–70 cm','circa 50–70 cm'])}</text>
   <text x="240" y="236" class="sm">${L(['feet flat, back supported','piedi a terra, schiena appoggiata'])}</text></svg>
   <p class="muted" style="text-align:center;font-size:14px">${L(['20-20-20: every 20 minutes, look at something 20 feet (about 6 m) away for 20 seconds.','20-20-20: ogni 20 minuti guarda qualcosa a 6 metri di distanza per 20 secondi.'])}</p>`;
},
  "sheetvis": function sheetvis(){
  const rows=[[L(['Item','Voce']),'€'],[L(['Phone','Telefono']),'15'],[L(['Snacks','Merende']),'20'],['Bus','12'],[L(['Total','Totale']),'=SUM(B2:B4)']];
  return `<div class="fbar" style="margin:0 auto 10px"><b>B5</b><input value="=SUM(B2:B4)" readonly aria-label="formula bar"></div>
   <div class="sheetwrap"><table class="sheet"><tr><th></th><th>A</th><th style="background:#ffe9a8">B</th><th>C</th></tr>
   ${rows.map((r,i)=>`<tr><th ${i===2?'style="background:#ffe9a8"':''}>${i+1}</th><td class="txt">${r[0]}</td><td class="${i===4?'task':''}" ${i===2?'style="background:#fff6d6"':''}>${i===4?'47':r[1]}</td><td></td></tr>`).join('')}</table></div>
   <p class="muted" style="text-align:center;font-size:14px;margin-top:8px">${L(['Columns are letters, rows are numbers. B3 is column B, row 3. Formulas start with =.','Le colonne sono lettere, le righe numeri. B3 è colonna B, riga 3. Le formule iniziano con =.'])}</p>`;
},
  "charts": function charts(){
  const v=[15,20,12];
  return `<svg viewBox="0 0 640 210" class="dia" role="img" aria-label="Bar, pie and line charts">
   ${v.map((x,i)=>`<rect x="${40+i*50}" y="${160-x*5}" width="34" height="${x*5}" fill="${[C.data,C.gold,C.ember][i]}"/>`).join('')}<line x1="30" y1="160" x2="200" y2="160" stroke="${C.muted}"/>
   <text x="115" y="190" text-anchor="middle" class="sm">${L(['bar: compare values','istogramma: confronta valori'])}</text>
   <circle cx="320" cy="100" r="60" fill="${C.data}"/><path d="M320 100 L320 40 A60 60 0 0 1 377 118 Z" fill="${C.gold}"/><path d="M320 100 L377 118 A60 60 0 0 1 300 157 Z" fill="${C.ember}"/>
   <text x="320" y="190" text-anchor="middle" class="sm">${L(['pie: parts of a whole','torta: parti di un intero'])}</text>
   <polyline points="450,140 490,120 530,130 570,80 610,60" fill="none" stroke="${C.good}" stroke-width="4"/><line x1="440" y1="160" x2="620" y2="160" stroke="${C.muted}"/>
   <text x="530" y="190" text-anchor="middle" class="sm">${L(['line: change over time','linee: andamento nel tempo'])}</text></svg>`;
},
  "autofill": function autofill(){
  return `<div class="twocol"><div class="panel"><h3>${H('Relative reference','Riferimento relativo')}</h3><p class="code" style="white-space:pre">B2: =A2*9/5+32
B3: =A3*9/5+32
B4: =A4*9/5+32</p><p class="muted" style="font-size:14px;margin-top:6px">${L(['Drag the fill handle down: the row number changes by itself.','Trascina il quadratino di riempimento: il numero di riga cambia da solo.'])}</p></div>
   <div class="panel"><h3>${H('Absolute reference','Riferimento assoluto')}</h3><p class="code" style="white-space:pre">B11: =A11*(1-$B$10)
B12: =A12*(1-$B$10)
B13: =A13*(1-$B$10)</p><p class="muted" style="font-size:14px;margin-top:6px">${L(['The $ locks the cell: B10 (the discount) stays fixed.','Il $ blocca la cella: B10 (lo sconto) resta fisso.'])}</p></div></div>`;
},
  "sheetfn": function sheetfn(){ return cards([
  ['chart',['SUM · AVERAGE · MAX · MIN','SOMMA · MEDIA · MAX · MIN'],['Totals, averages, highest and lowest value of a range.','Totale, media, valore massimo e minimo di un intervallo.']],
  ['scale',['IF','SE'],['=IF(B2>=6;"OK";"NO") chooses between two results.','=SE(B2>=6;"OK";"NO") sceglie tra due risultati.']],
  ['layers',['AND · OR','E · O'],['Combine conditions: =AND(B2>=6;C2>=6).','Combinano condizioni: =E(B2>=6;C2>=6).']],
  ['gear',['What-if & simulation','Analisi what-if e simulazioni'],['Change one input (e.g. birth rate) and watch the whole model update.','Cambia un dato (es. natalità) e guarda tutto il modello aggiornarsi.']],
  ['chip',['DEC2BIN · BIN2DEC','DECIMALE.BINARIO · BINARIO.DECIMALE'],['Convert numbers between decimal and binary.','Convertono numeri tra decimale e binario.']],
  ['user',['Gini index','Indice di Gini'],['Measures inequality: 0 = everyone has the same, 1 = one person has everything.','Misura la disuguaglianza: 0 = tutti hanno lo stesso, 1 = una persona ha tutto.']],
]);},
  "slides": function slides(){
  return `<div class="twocol"><div><div class="eyebrow" style="color:var(--bad);margin-bottom:6px">${L(['Bad slide','Slide sbagliata'])}</div>
   <div class="slide" style="background:#ffef3b;color:#ff3df2"><h4 style="font-family:cursive">${L(['MY PROJECT ABOUT VOLCANOES!!!','IL MIO PROGETTO SUI VULCANI!!!'])}</h4><p>${L(['Volcanoes are openings in the Earth\'s crust where magma, gases and ash escape. There are many types such as shield volcanoes, stratovolcanoes, cinder cones and calderas, and they form at plate boundaries or hotspots, and eruptions can be explosive or effusive depending on…','I vulcani sono aperture nella crosta terrestre da cui escono magma, gas e cenere. Ne esistono molti tipi come vulcani a scudo, stratovulcani, coni di scorie e caldere, e si formano ai margini delle placche o nei punti caldi, e le eruzioni possono essere esplosive o effusive a seconda…'])}</p></div></div>
   <div><div class="eyebrow" style="color:var(--good);margin-bottom:6px">${L(['Good slide','Slide efficace'])}</div>
   <div class="slide" style="background:#14213d;color:#fff"><h4>${L(['Two kinds of eruption','Due tipi di eruzione'])}</h4><p style="font-size:12px">• ${L(['Explosive: ash and gas','Esplosiva: cenere e gas'])}<br>• ${L(['Effusive: lava flows','Effusiva: colate di lava'])}</p><div style="flex:1;border-radius:6px;background:linear-gradient(135deg,#e85d04,#370617)"></div></div></div></div>`;
},
  "slidetips": function slidetips(){ return cards([
  ['slide',['Few words','Poche parole'],['Key points only; you do the talking.','Solo i punti chiave; il resto lo dici tu.']],
  ['eye',['Contrast','Contrasto'],['Dark text on light background, or the opposite. Big fonts.','Testo scuro su sfondo chiaro, o viceversa. Caratteri grandi.']],
  ['layers',['Theme / master','Tema / schema'],['One consistent style for all slides.','Uno stile coerente per tutte le slide.']],
  ['image',['Images with credit','Immagini con fonte'],['Use images you may use, and say where they come from.','Usa immagini che puoi usare e indica la fonte.']],
]);},
  "slidefx": function slidefx(){ return cards([
  ['slide',['Transition','Transizione'],['The effect BETWEEN one slide and the next.','L\'effetto TRA una slide e la successiva.']],
  ['bolt',['Animation','Animazione'],['The effect on an OBJECT inside a slide (a title flying in).','L\'effetto su un OGGETTO dentro la slide (un titolo che entra).']],
  ['video',['Audio & video','Audio e video'],['Embed short clips; check they play before presenting.','Inserisci brevi clip; prova che funzionino prima di presentare.']],
  ['share',['Presenting remotely','Presentare a distanza'],['Share your screen in a video call; presenter view shows your notes.','Condividi lo schermo in videochiamata; la visualizzazione relatore mostra le tue note.']],
  ['chart',['Open data','Open data'],['Public data (e.g. from ISTAT) anyone can use in charts and reports.','Dati pubblici (es. dell\'ISTAT) che chiunque può usare in grafici e relazioni.']],
  ['globe',['Prezi','Prezi'],['A zooming canvas instead of a row of slides.','Una tela con zoom invece di una fila di slide.']],
]);},
  "flowsym": function flowsym(){
  const y=60;
  return `<svg viewBox="0 0 640 170" class="dia" role="img" aria-label="Flowchart symbols">
   <rect x="20" y="${y-25}" width="120" height="50" rx="25" fill="#262a5e" stroke="${C.good}" stroke-width="3"/><text x="80" y="${y+5}" text-anchor="middle">START / END</text>
   <polygon points="190,${y-25} 320,${y-25} 300,${y+25} 170,${y+25}" fill="#262a5e" stroke="${C.sak}" stroke-width="3"/><text x="245" y="${y+5}" text-anchor="middle">INPUT / OUTPUT</text>
   <rect x="350" y="${y-25}" width="120" height="50" fill="#262a5e" stroke="${C.data}" stroke-width="3"/><text x="410" y="${y+5}" text-anchor="middle">x ← x + 1</text>
   <polygon points="560,${y-34} 620,${y} 560,${y+34} 500,${y}" fill="#262a5e" stroke="${C.gold}" stroke-width="3"/><text x="560" y="${y+5}" text-anchor="middle">x > 5 ?</text>
   ${[[80,L(['terminal (oval)','terminale (ovale)'])],[245,L(['input/output (parallelogram)','input/output (parallelogramma)'])],[410,L(['process (rectangle)','elaborazione (rettangolo)'])],[560,L(['decision (rhombus)','decisione (rombo)'])]].map(([x,t])=>`<text x="${x}" y="130" text-anchor="middle" class="sm">${t}</text>`).join('')}</svg>`;
},
  "flowex": function flowex(){
  return `<svg viewBox="0 0 640 400" class="dia" role="img" aria-label="Flowchart: read age, decide if adult">
   <defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="${C.muted}"/></marker></defs>
   <rect x="260" y="10" width="120" height="40" rx="20" fill="#262a5e" stroke="${C.good}" stroke-width="2"/><text x="320" y="35" text-anchor="middle">START</text>
   <polygon points="250,80 410,80 390,120 230,120" fill="#262a5e" stroke="${C.sak}" stroke-width="2"/><text x="320" y="105" text-anchor="middle">${L(['read age','leggi età'])}</text>
   <polygon points="320,150 400,190 320,230 240,190" fill="#262a5e" stroke="${C.gold}" stroke-width="2"/><text x="320" y="195" text-anchor="middle">${L(['age ≥ 18 ?','età ≥ 18 ?'])}</text>
   <polygon points="70,270 230,270 210,310 50,310" fill="#262a5e" stroke="${C.sak}" stroke-width="2"/><text x="140" y="295" text-anchor="middle">${L(['write "adult"','scrivi "adulto"'])}</text>
   <polygon points="430,270 590,270 570,310 410,310" fill="#262a5e" stroke="${C.sak}" stroke-width="2"/><text x="500" y="295" text-anchor="middle">${L(['write "minor"','scrivi "minorenne"'])}</text>
   <rect x="260" y="350" width="120" height="40" rx="20" fill="#262a5e" stroke="${C.good}" stroke-width="2"/><text x="320" y="375" text-anchor="middle">END</text>
   <g stroke="${C.muted}" stroke-width="2" fill="none" marker-end="url(#ar)"><path d="M320 50 V78"/><path d="M320 120 V148"/><path d="M240 190 H140 V268"/><path d="M400 190 H500 V268"/><path d="M140 310 V370 H258"/><path d="M500 310 V370 H382"/></g>
   <text x="180" y="182" style="fill:${C.good}">${L(['yes','sì'])}</text><text x="430" y="182" style="fill:${C.bad}">no</text></svg>`;
},
  "structures": function structures(){
  const box=(x,y,t,c)=>`<rect x="${x-45}" y="${y-14}" width="90" height="28" rx="4" fill="#262a5e" stroke="${c}" stroke-width="2"/><text x="${x}" y="${y+5}" text-anchor="middle" style="font-size:12px">${t}</text>`;
  const dia=(x,y)=>`<polygon points="${x},${y-20} ${x+40},${y} ${x},${y+20} ${x-40},${y}" fill="#262a5e" stroke="${C.gold}" stroke-width="2"/><text x="${x}" y="${y+4}" text-anchor="middle" style="font-size:11px">?</text>`;
  return `<svg viewBox="0 0 640 260" class="dia" role="img" aria-label="Sequence, selection and iteration">
   <g stroke="${C.muted}" stroke-width="2">
    <line x1="110" y1="64" x2="110" y2="96"/><line x1="110" y1="124" x2="110" y2="156"/>
    <line x1="280" y1="80" x2="320" y2="80"/><line x1="360" y1="80" x2="400" y2="80"/><line x1="280" y1="80" x2="280" y2="136"/><line x1="400" y1="80" x2="400" y2="136"/><line x1="280" y1="164" x2="280" y2="200"/><line x1="400" y1="164" x2="400" y2="200"/><line x1="280" y1="200" x2="400" y2="200"/>
    <line x1="540" y1="100" x2="540" y2="136"/><path d="M540 164 V200 H610 V60 H540 V80" fill="none"/><line x1="580" y1="80" x2="620" y2="80"/></g>
   ${box(110,50,'A',C.data)}${box(110,110,'B',C.data)}${box(110,170,'C',C.data)}
   ${dia(340,80)}${box(280,150,L(['if yes','se sì']),C.data)}${box(400,150,L(['if no','se no']),C.data)}
   ${dia(540,80)}${box(540,150,L(['repeat','ripeti']),C.data)}
   <text x="110" y="240" text-anchor="middle" class="lbl">${L(['SEQUENCE','SEQUENZA'])}</text><text x="340" y="240" text-anchor="middle" class="lbl">${L(['SELECTION','SELEZIONE'])}</text><text x="540" y="240" text-anchor="middle" class="lbl">${L(['ITERATION','ITERAZIONE'])}</text></svg>`;
},
  "pioneers": function pioneers(){ return cards([
  ['woman',['Ada Lovelace (1815–1852)','Ada Lovelace (1815–1852)'],['Wrote what is considered the first computer program, for Babbage\'s Analytical Engine (1843).','Scrisse quello che è considerato il primo programma, per la Macchina Analitica di Babbage (1843).']],
  ['woman',['Grace Hopper (1906–1992)','Grace Hopper (1906–1992)'],['Built one of the first compilers and helped create COBOL.','Realizzò uno dei primi compilatori e contribuì a creare il COBOL.']],
  ['bug',['The first "bug" (1947)','Il primo "bug" (1947)'],['A real moth found stuck in the Harvard Mark II computer and taped into the log book.','Una vera falena trovata incastrata nel computer Harvard Mark II e attaccata al registro.']],
  ['woman',['Margaret Hamilton','Margaret Hamilton'],['Led the team that wrote the software for the Apollo Moon missions.','Guidò il team che scrisse il software delle missioni Apollo sulla Luna.']],
]);},
  "langlevels": function langlevels(){
  const Lv=[[['High-level language','Linguaggio ad alto livello'],'print("Hi")',C.good],[['Assembly','Assembly'],'MOV AL, 48h',C.gold],[['Machine language','Linguaggio macchina'],'10110000 01001000',C.ember]];
  return `<div class="stack">${Lv.map((l,i)=>`${i?'<div class="arrowdown"><i></i></div>':''}<div class="layer" style="background:${l[2]}">${L(l[0])}<small style="font-family:ui-monospace,monospace">${l[1]}</small></div>`).join('')}</div>
   <p class="muted" style="text-align:center;margin-top:8px;font-size:14px">${L(['Top: easy for people. Bottom: what the CPU actually runs.','In alto: facile per le persone. In basso: ciò che la CPU esegue davvero.'])}</p>`;
},
  "compinterp": function compinterp(){
  return `<div class="twocol"><div class="panel"><h3>${H('Compiler','Compilatore')}</h3><p>${L(['Translates the WHOLE program into machine code first, then you run it. Fast to run. (C, C++)','Traduce TUTTO il programma in linguaggio macchina, poi lo esegui. Veloce in esecuzione. (C, C++)'])}</p></div>
   <div class="panel"><h3>${H('Interpreter','Interprete')}</h3><p>${L(['Translates and runs the program ONE LINE at a time. Easy to test. (Python)','Traduce ed esegue il programma UNA RIGA alla volta. Facile da provare. (Python)'])}</p></div></div>`;
},
  "pytypes": function pytypes(){ return `<div class="ops">${[['int','7, -3, 2026'],['float','3.14, 0.5'],['str','"Hana", \'42\''],['bool','True, False']].map(([t,e])=>`<div><b>${t}</b>${e}</div>`).join('')}</div>`;},
  "pyops": function pyops(){ return `<div class="ops">${[['+',L(['add','somma'])],['-',L(['subtract','sottrae'])],['*',L(['multiply','moltiplica'])],['/',L(['divide (float)','divide (decimale)'])],['//',L(['integer division','divisione intera'])],['%',L(['remainder','resto'])],['**',L(['power','potenza'])],['==',L(['equal to','uguale a'])],['!=',L(['not equal','diverso da'])],['< <= > >=',L(['compare','confronti'])],['+=',L(['add and assign','somma e assegna'])],['and or not',L(['logic','logica'])]].map(([o,t])=>`<div><b>${o}</b>${t}</div>`).join('')}</div>`;},
  "gatesvis": function gatesvis(){
  return `<svg viewBox="0 0 640 200" class="dia" role="img" aria-label="AND, OR, NOT logic gates">
   <path d="M60 40 H110 A40 40 0 0 1 110 120 H60 Z" fill="#262a5e" stroke="${C.data}" stroke-width="3"/><text x="95" y="86" text-anchor="middle">AND</text>
   <path d="M260 40 Q330 40 360 80 Q330 120 260 120 Q285 80 260 40 Z" fill="#262a5e" stroke="${C.gold}" stroke-width="3"/><text x="315" y="86" text-anchor="middle">OR</text>
   <path d="M480 45 L550 80 L480 115 Z" fill="#262a5e" stroke="${C.sak}" stroke-width="3"/><circle cx="558" cy="80" r="8" fill="#262a5e" stroke="${C.sak}" stroke-width="3"/><text x="505" y="86" text-anchor="middle" style="font-size:12px">NOT</text>
   <text x="95" y="160" text-anchor="middle" class="sm">${L(['1 only if BOTH are 1','1 solo se ENTRAMBI sono 1'])}</text>
   <text x="310" y="160" text-anchor="middle" class="sm">${L(['1 if AT LEAST ONE is 1','1 se ALMENO UNO è 1'])}</text>
   <text x="520" y="160" text-anchor="middle" class="sm">${L(['flips 0 ↔ 1','inverte 0 ↔ 1'])}</text></svg>`;
},
  "rangevis": function rangevis(){
  return `<div class="idx">${[0,1,2,3,4].map(i=>`<div><b>${i}</b></div>`).join('')}</div>
   <p style="text-align:center;margin-top:8px;font-family:ui-monospace,monospace">range(5) → 0, 1, 2, 3, 4 · range(2, 8, 2) → 2, 4, 6</p>
   <p class="muted" style="text-align:center;font-size:14px">${L(['The stop number is never included!','Il numero finale non è mai incluso!'])}</p>`;
},
  "climate": function climate(){ return cards([
  ['cloud',['Climate models','Modelli climatici'],['Supercomputers divide the planet into a grid and repeat the physics equations for every cell, step after step: a giant loop.','I supercomputer dividono il pianeta in una griglia e ripetono le equazioni della fisica per ogni cella, passo dopo passo: un ciclo gigante.']],
  ['loop',['Iterative design','Progettazione iterativa'],['Build → test → improve → repeat. Designers work in loops too.','Costruisci → prova → migliora → ripeti. Anche i progettisti lavorano a cicli.']],
  ['warn',['Infinite loop','Ciclo infinito'],['If the while condition never becomes False, the loop never ends.','Se la condizione del while non diventa mai False, il ciclo non finisce mai.']],
]);},
  "strindex": function strindex(){
  const w='PYTHON';
  return `<div class="idx">${w.split('').map((c,i)=>`<div><small>${i}</small><b>${c}</b><small class="neg">${i-w.length}</small></div>`).join('')}</div>
   <pre class="code" style="margin-top:10px">${hl('s = "PYTHON"\nprint(s[0])     # P\nprint(s[-1])    # N\nprint(s[1:4])   # YTH\nprint(len(s))   # 6')}</pre>`;
},
  "listvis": function listvis(){
  return `<div class="twocol"><div><div class="eyebrow" style="margin-bottom:6px">${L(['list','lista'])}</div><div class="idx">${['"Hana"','"Luca"','"Sara"'].map((c,i)=>`<div><small>${i}</small><b style="width:auto;padding:0 8px;font-size:14px">${c}</b></div>`).join('')}</div>
   <pre class="code" style="margin-top:8px">${hl('team = ["Hana", "Luca", "Sara"]\nteam.append("Ren")\nprint(len(team))   # 4')}</pre></div>
   <div><div class="eyebrow" style="margin-bottom:6px">${L(['matrix (list of lists)','matrice (lista di liste)'])}</div>
   <pre class="code">${hl('m = [[1, 2, 3],\n     [4, 5, 6]]\nprint(m[1][0])   # 4')}</pre></div></div>`;
},
  "funcvis": function funcvis(){
  return `<svg viewBox="0 0 640 170" class="dia" role="img" aria-label="A function takes parameters and returns a result">
   <rect x="20" y="60" width="130" height="50" rx="8" fill="#262a5e" stroke="${C.data}" stroke-width="2"/><text x="85" y="90" text-anchor="middle">3, 4</text><text x="85" y="135" text-anchor="middle" class="sm">${L(['arguments','argomenti'])}</text>
   <path d="M150 85 H230" stroke="${C.data}" stroke-width="3" class="flow"/>
   <rect x="230" y="40" width="180" height="90" rx="12" fill="#3b2440" stroke="${C.ember}" stroke-width="3"/><text x="320" y="80" text-anchor="middle" style="font-family:ui-monospace,monospace">area(b, h)</text><text x="320" y="104" text-anchor="middle" class="sm">return b * h</text>
   <path d="M410 85 H490" stroke="${C.gold}" stroke-width="3" class="flow"/>
   <rect x="490" y="60" width="130" height="50" rx="8" fill="#262a5e" stroke="${C.gold}" stroke-width="2"/><text x="555" y="90" text-anchor="middle">12</text><text x="555" y="135" text-anchor="middle" class="sm">${L(['return value','valore restituito'])}</text></svg>`;
},
  "fifolifo": function fifolifo(){
  return `<div class="twocol"><div class="panel"><h3>${H('Stack (LIFO)','Pila (LIFO)')}</h3><div class="sq v"><span>A</span><span>B</span><span class="out">C</span></div><p style="margin-top:8px">${L(['Last In, First Out: like a pile of plates. The Undo button works like this.','Last In, First Out (l\'ultimo entrato è il primo a uscire): come una pila di piatti. Il tasto Annulla funziona così.'])}</p></div>
   <div class="panel"><h3>${H('Queue (FIFO)','Coda (FIFO)')}</h3><div class="sq"><span class="out">A</span><span>B</span><span>C</span></div><p style="margin-top:8px">${L(['First In, First Out: like a line at the canteen. A printer queue works like this.','First In, First Out (il primo entrato è il primo a uscire): come la fila in mensa. La coda di stampa funziona così.'])}</p></div></div>`;
},
  "titlePhys": () => {
  let lines=''; for(let k=0;k<28;k++){const a=k/28*Math.PI*2; lines+=`<line x1="${320+Math.cos(a)*80}" y1="${115+Math.sin(a)*80}" x2="${320+Math.cos(a)*420}" y2="${115+Math.sin(a)*420}" stroke="${k%2?'#ff6a3d':'#ff8fc0'}" stroke-opacity=".16" stroke-width="${k%3+1}"/>`;}
  let hex=''; for(let i=0;i<6;i++){const a=Math.PI/3*i-Math.PI/2; hex+=`${320+Math.cos(a)*72},${115+Math.sin(a)*72} `;}
  const pt=(t,rot)=>{const x=52*Math.cos(t), y=20*Math.sin(t), r=rot*Math.PI/180; return [320+x*Math.cos(r)-y*Math.sin(r), 115+x*Math.sin(r)+y*Math.cos(r)];};
  const orbit=rot=>`<ellipse cx="320" cy="115" rx="52" ry="20" fill="none" stroke="url(#phcrest)" stroke-width="3" transform="rotate(${rot} 320 115)"/>`;
  const e1=pt(0,32), e2=pt(0,-32);
  return `<svg viewBox="0 0 640 230" class="dia" role="img" aria-label="Circuit Hunter Academy — Physics">
   <defs><linearGradient id="phcrest" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff9f45"/><stop offset="1" stop-color="#ff5d8f"/></linearGradient></defs>
   ${lines}
   <polygon points="${hex}" fill="#171935" stroke="#ff6a3d" stroke-width="4"/>
   ${orbit(32)}${orbit(-32)}
   <circle cx="320" cy="115" r="11" fill="url(#phcrest)"/>
   <circle cx="${e1[0].toFixed(1)}" cy="${e1[1].toFixed(1)}" r="6" fill="#ffd166"/>
   <circle cx="${e2[0].toFixed(1)}" cy="${e2[1].toFixed(1)}" r="6" fill="#ffd166"/>
   <path d="M262 175 L380 55" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M262 175 L380 55" stroke="#ff6a3d" stroke-width="2" stroke-linecap="round" class="blink"/>
   <text x="320" y="218" text-anchor="middle" class="lbl">CIRCUIT · HUNTER · ACADEMY</text></svg>`;
},
  "phQuant": () => `<svg viewBox="0 0 320 180" role="img" aria-label="SI base units">
  <defs><linearGradient id="pq" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff9f45"/><stop offset="1" stop-color="#ff5d8f"/></linearGradient></defs>
  <rect x="8" y="8" width="304" height="164" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
  <g transform="translate(40,54)"><rect x="-26" y="0" width="52" height="22" rx="3" fill="none" stroke="url(#pq)" stroke-width="2.5"/>${[0,1,2,3,4].map(i=>`<line x1="${-26+i*13}" y1="0" x2="${-26+i*13}" y2="${i%2?8:12}" stroke="url(#pq)" stroke-width="2"/>`).join('')}<text x="0" y="46" text-anchor="middle" fill="var(--text)" font-size="20" font-weight="700">m</text><text x="0" y="64" text-anchor="middle" fill="var(--muted)" font-size="11">metre</text></g>
  <g transform="translate(160,54)"><path d="M-22 22 h44 l-8 -22 h-28 z" fill="none" stroke="url(#pq)" stroke-width="2.5"/><circle cx="0" cy="6" r="6" fill="url(#pq)"/><text x="0" y="46" text-anchor="middle" fill="var(--text)" font-size="20" font-weight="700">kg</text><text x="0" y="64" text-anchor="middle" fill="var(--muted)" font-size="11">kilogram</text></g>
  <g transform="translate(280,54)"><circle cx="0" cy="11" r="18" fill="none" stroke="url(#pq)" stroke-width="2.5"/><line x1="0" y1="11" x2="0" y2="-1" stroke="url(#pq)" stroke-width="2.5"><animateTransform attributeName="transform" type="rotate" from="0 0 11" to="360 0 11" dur="6s" repeatCount="indefinite"/></line><line x1="0" y1="11" x2="9" y2="11" stroke="url(#pq)" stroke-width="2"/><text x="0" y="46" text-anchor="middle" fill="var(--text)" font-size="20" font-weight="700">s</text><text x="0" y="64" text-anchor="middle" fill="var(--muted)" font-size="11">second</text></g>
  <text x="160" y="141" text-anchor="middle" fill="var(--text)" font-size="12" font-weight="700">${L(['Length · Mass · Time','Lunghezza · Massa · Tempo'])}</text>
  <text x="160" y="157" text-anchor="middle" fill="var(--muted)" font-size="10.5">${L(['three of the seven SI base quantities','tre delle sette grandezze base del SI'])}</text>
</svg>`,
  "phScale": () => `<svg viewBox="0 0 320 150" role="img" aria-label="Orders of magnitude">
  <rect x="8" y="8" width="304" height="134" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
  <line x1="28" y1="78" x2="292" y2="78" stroke="var(--muted)" stroke-width="2"/>
  ${[['10⁻¹⁰','atom',40],['10⁰','human',120],['10⁷','Earth',196],['10²¹','galaxy',272]].map(([p,l,x])=>`<line x1="${x}" y1="70" x2="${x}" y2="86" stroke="var(--ember)" stroke-width="2.5"/><circle cx="${x}" cy="78" r="4" fill="var(--ember)"/><text x="${x}" y="60" text-anchor="middle" fill="var(--text)" font-size="12" font-weight="700">${p}</text><text x="${x}" y="104" text-anchor="middle" fill="var(--muted)" font-size="10">${l}</text>`).join('')}
  <text x="160" y="130" text-anchor="middle" fill="var(--muted)" font-size="11">${L(['Every step is ×10 — an order of magnitude','Ogni passo è ×10 — un ordine di grandezza'])}</text>
</svg>`,
  "phDensity": () => `<svg viewBox="0 0 320 150" role="img" aria-label="Density">
  <rect x="8" y="8" width="304" height="134" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
  ${[['var(--data)',70,6,'low'],['var(--ember)',160,22,'high']].map(([c,cx,dots,l])=>`<rect x="${cx-34}" y="44" width="68" height="68" rx="6" fill="none" stroke="${c}" stroke-width="2.5"/>${[...Array(dots)].map((_,i)=>`<circle cx="${cx-26+(i%5)*13}" cy="${52+Math.floor(i/5)*13}" r="3" fill="${c}"/>`).join('')}`).join('')}
  <text x="70" y="128" text-anchor="middle" fill="var(--muted)" font-size="11">${L(['less dense','meno densa'])}</text>
  <text x="160" y="128" text-anchor="middle" fill="var(--muted)" font-size="11">${L(['more dense','più densa'])}</text>
  <text x="258" y="70" fill="var(--text)" font-size="13" font-weight="700">ρ = m / V</text>
  <text x="258" y="92" fill="var(--muted)" font-size="10">kg/m³</text>
</svg>`,
  "phRuler": () => `<svg viewBox="0 0 320 150" role="img" aria-label="Measuring with a ruler">
  <rect x="8" y="8" width="304" height="134" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
  <rect x="30" y="86" width="260" height="26" rx="3" fill="none" stroke="var(--muted)" stroke-width="2"/>
  ${[...Array(27)].map((_,i)=>`<line x1="${30+i*10}" y1="86" x2="${30+i*10}" y2="${i%5?94:100}" stroke="var(--muted)" stroke-width="1.5"/>`).join('')}
  <rect x="40" y="58" width="150" height="20" rx="4" fill="var(--data)" opacity="0.5"/>
  <line x1="40" y1="48" x2="190" y2="48" stroke="var(--ember)" stroke-width="2"/>
  <text x="115" y="42" text-anchor="middle" fill="var(--text)" font-size="12" font-weight="700">15.0 ± 0.1 cm</text>
  <text x="160" y="130" text-anchor="middle" fill="var(--muted)" font-size="11">${L(['Every measure carries an uncertainty','Ogni misura porta con sé un\'incertezza'])}</text>
</svg>`,
  "phGraph": () => `<svg viewBox="0 0 320 150" role="img" aria-label="Proportionality graphs">
  <rect x="8" y="8" width="304" height="134" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
  <g>${[[30,'direct','var(--data)','M0 60 L60 0'],[176,'inverse','var(--ember)','M0 2 Q 10 55 58 58']].map(([ox,l,c,d])=>`<g transform="translate(${ox},34)"><line x1="0" y1="0" x2="0" y2="64" stroke="var(--muted)" stroke-width="1.5"/><line x1="0" y1="64" x2="80" y2="64" stroke="var(--muted)" stroke-width="1.5"/><path d="${d}" transform="translate(4,2)" fill="none" stroke="${c}" stroke-width="3"/></g>`).join('')}</g>
  <text x="70" y="128" text-anchor="middle" fill="var(--muted)" font-size="11">${L(['direct: y = k·x','diretta: y = k·x'])}</text>
  <text x="232" y="128" text-anchor="middle" fill="var(--muted)" font-size="11">${L(['inverse: y = k/x','inversa: y = k/x'])}</text>
</svg>`,
  "phVector": () => `<svg viewBox="0 0 320 150" role="img" aria-label="Scalar versus vector">
  <rect x="8" y="8" width="304" height="134" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
  <text x="90" y="50" text-anchor="middle" fill="var(--text)" font-size="22" font-weight="700">25 °C</text>
  <text x="90" y="118" text-anchor="middle" fill="var(--muted)" font-size="11">${L(['scalar: only a number','scalare: solo un numero'])}</text>
  <line x1="190" y1="70" x2="280" y2="40" stroke="var(--ember)" stroke-width="3.5"/>
  <polygon points="280,40 268,40 274,52" fill="var(--ember)"/>
  <text x="232" y="118" text-anchor="middle" fill="var(--muted)" font-size="11">${L(['vector: value + direction','vettore: valore + direzione'])}</text>
</svg>`,
  "phForce": () => `<svg viewBox="0 0 320 150" role="img" aria-label="Forces on a block">
  <rect x="8" y="8" width="304" height="134" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
  <line x1="40" y1="110" x2="280" y2="110" stroke="var(--muted)" stroke-width="2"/>
  <rect x="130" y="76" width="60" height="34" rx="4" fill="var(--panel)" stroke="var(--data)" stroke-width="2"/>
  <line x1="160" y1="110" x2="160" y2="138" stroke="var(--ember)" stroke-width="3"/><polygon points="160,138 154,128 166,128" fill="var(--ember)"/>
  <line x1="190" y1="93" x2="250" y2="93" stroke="var(--gold)" stroke-width="3"/><polygon points="250,93 240,88 240,98" fill="var(--gold)"/>
  <line x1="130" y1="93" x2="90" y2="93" stroke="var(--sakura)" stroke-width="3"/><polygon points="90,93 100,88 100,98" fill="var(--sakura)"/>
  <text x="160" y="150" text-anchor="middle" fill="var(--muted)" font-size="10">${L(['weight','peso'])}</text>
  <text x="240" y="82" text-anchor="middle" fill="var(--muted)" font-size="10">${L(['push','spinta'])}</text>
  <text x="96" y="82" text-anchor="middle" fill="var(--muted)" font-size="10">${L(['friction','attrito'])}</text>
</svg>`,
  "phLever": () => `<svg viewBox="0 0 320 150" role="img" aria-label="Lever and torque">
  <rect x="8" y="8" width="304" height="134" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
  <line x1="40" y1="84" x2="280" y2="84" stroke="var(--ember)" stroke-width="6" stroke-linecap="round"/>
  <polygon points="150,120 170,120 160,86" fill="var(--muted)"/>
  <rect x="48" y="66" width="30" height="18" rx="3" fill="var(--data)"/>
  <line x1="250" y1="84" x2="250" y2="54" stroke="var(--gold)" stroke-width="3"/><polygon points="250,54 244,64 256,64" fill="var(--gold)"/>
  <text x="105" y="112" text-anchor="middle" fill="var(--muted)" font-size="10">d₁</text>
  <text x="205" y="112" text-anchor="middle" fill="var(--muted)" font-size="10">d₂</text>
  <text x="160" y="140" text-anchor="middle" fill="var(--muted)" font-size="11">${L(['moment = force × distance','momento = forza × distanza'])}</text>
</svg>`,
  "phTank": () => `<svg viewBox="0 0 320 150" role="img" aria-label="Pressure in a fluid">
  <rect x="8" y="8" width="304" height="134" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
  <rect x="40" y="26" width="240" height="104" rx="6" fill="var(--data)" opacity="0.14" stroke="var(--line)"/>
  ${[[60,34,1],[60,70,3],[60,106,5]].map(([x,y,n])=>`${[...Array(n)].map((_,i)=>`<line x1="${x+i*14}" y1="${y}" x2="${x+i*14+9}" y2="${y}" stroke="var(--ember)" stroke-width="2.5"/><polygon points="${x+i*14+9},${y} ${x+i*14+4},${y-3} ${x+i*14+4},${y+3}" fill="var(--ember)"/>`).join('')}`).join('')}
  <rect x="210" y="40" width="34" height="26" rx="4" fill="var(--gold)" opacity="0.85"/>
  <text x="160" y="146" text-anchor="middle" fill="var(--muted)" font-size="11">${L(['deeper water pushes harder (Stevin)','più in profondità spinge di più (Stevino)'])}</text>
</svg>`,
  "algebra-parts": function algebraParts(){
    return `<svg viewBox="0 0 640 210" class="dia" role="img" aria-label="Parts of the algebraic expression 3x plus 2">
      <text x="320" y="35" text-anchor="middle" class="lbl">${L(['ONE EXPRESSION · TWO TERMS','UN’ESPRESSIONE · DUE TERMINI'])}</text>
      <rect x="112" y="58" width="188" height="104" rx="14" fill="var(--data)" opacity=".16" stroke="var(--data)" stroke-width="2"/>
      <rect x="340" y="58" width="188" height="104" rx="14" fill="var(--gold)" opacity=".13" stroke="var(--gold)" stroke-width="2"/>
      <text x="206" y="111" text-anchor="middle" style="font-size:38px;font-weight:800;fill:var(--text)">3x</text>
      <text x="434" y="111" text-anchor="middle" style="font-size:38px;font-weight:800;fill:var(--text)">+ 2</text>
      <text x="206" y="143" text-anchor="middle" class="sm">${L(['coefficient 3 · variable x','coefficiente 3 · variabile x'])}</text>
      <text x="434" y="143" text-anchor="middle" class="sm">${L(['constant term','termine costante'])}</text>
      <text x="320" y="190" text-anchor="middle" class="sm">${L(['3x means 3 × x','3x significa 3 × x'])}</text>
    </svg>`;
  },
  "algebra-substitution": function algebraSubstitution(){
    return `<div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:7px;align-items:stretch;text-align:center">
      ${[['1',['SUBSTITUTE','SOSTITUISCI'],'x = 4'],['2',['MULTIPLY','MOLTIPLICA'],'3 × 4 = 12'],['3',['KEEP + 2','MANTIENI + 2'],'12 + 2'],['4',['ANSWER','RISULTATO'],'14']].map(([n,label,value])=>`<div style="padding:12px 5px;border:1px solid var(--line);border-radius:12px;background:var(--panel2)"><div style="font-size:12px;color:var(--muted)">STEP ${n}</div><strong style="display:block;margin:8px 0;color:var(--gold)">${L(label)}</strong><div style="font-size:18px;font-weight:800;color:var(--text)">${value}</div></div>`).join('')}
    </div><p class="muted" style="text-align:center;margin-top:10px">${L(['Replace the letter, then follow the order of operations.','Sostituisci la lettera, poi rispetta l’ordine delle operazioni.'])}</p>`;
  },
  "math-natural-line": function mathNaturalLine(){
    return `<svg viewBox="0 0 640 180" class="dia" role="img" aria-label="Natural numbers on the half-line">
      <text x="320" y="32" text-anchor="middle" class="lbl">${L(['THE NATURAL NUMBERS SET ℕ','L’INSIEME DEI NUMERI NATURALI ℕ'])}</text>
      <rect x="20" y="48" width="600" height="118" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
      <line x1="60" y1="95" x2="570" y2="95" stroke="var(--muted)" stroke-width="3"/>
      <polygon points="580,95 565,88 565,102" fill="var(--muted)"/>
      ${[0,1,2,3,4,5,6].map(i => {
        const x = 90 + i * 70;
        return `<circle cx="${x}" cy="95" r="5" fill="${i===0?'var(--ember)':'var(--gold)'}"/>
        <line x1="${x}" y1="88" x2="${x}" y2="102" stroke="${i===0?'var(--ember)':'var(--gold)'}" stroke-width="2"/>
        <text x="${x}" y="125" text-anchor="middle" fill="var(--text)" font-size="16" font-weight="700">${i}</text>`;
      }).join('')}
      <text x="585" y="125" text-anchor="middle" fill="var(--gold)" font-size="20" font-weight="700">…</text>
      <text x="320" y="152" text-anchor="middle" class="sm" fill="var(--muted)">${L(['Starts at 0 (no predecessor) · Infinite towards the right · Discrete (no natural between 2 and 3)','Inizia da 0 (nessun precedente) · Infinito verso destra · Discreto (nessun naturale tra 2 e 3)'])}</text>
    </svg>`;
  },
  "math-integers-line": function mathIntegersLine(){
    return `<svg viewBox="0 0 640 195" class="dia" role="img" aria-label="Integers line showing positive and negative numbers">
      <text x="320" y="28" text-anchor="middle" class="lbl">${L(['THE INTEGERS SET ℤ (POSITIVE & NEGATIVE)','L’INSIEME DEI NUMERI INTERI RELATIVI ℤ'])}</text>
      <rect x="20" y="42" width="600" height="142" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
      <polygon points="40,95 55,88 55,102" fill="var(--ember)"/>
      <line x1="45" y1="95" x2="595" y2="95" stroke="var(--line)" stroke-width="3"/>
      <polygon points="600,95 585,88 585,102" fill="var(--data)"/>
      ${[-4,-3,-2,-1,0,1,2,3,4].map((v, idx) => {
        const x = 80 + idx * 60;
        const col = v < 0 ? 'var(--ember)' : v > 0 ? 'var(--data)' : 'var(--gold)';
        return `<circle cx="${x}" cy="95" r="4.5" fill="${col}"/>
        <text x="${x}" y="120" text-anchor="middle" fill="${col}" font-size="14" font-weight="700">${v > 0 ? '+'+v : v}</text>`;
      }).join('')}
      <!-- Jump from -3 to +2 -->
      <path d="M 140 85 Q 260 48 380 85" fill="none" stroke="var(--gold)" stroke-width="2.5" stroke-dasharray="5,3"/>
      <polygon points="380,85 370,78 375,90" fill="var(--gold)"/>
      <text x="260" y="62" text-anchor="middle" fill="var(--gold)" font-size="13" font-weight="700">+ 5 passi a destra / steps right</text>
      <text x="320" y="162" text-anchor="middle" class="sm">${L(['(-3) + (+5) = +2 · Add: move RIGHT · Subtract: move LEFT · (-) × (-) = (+)','(-3) + (+5) = +2 · Somma: verso DESTRA · Sottrai: verso SINISTRA · (-) × (-) = (+)'])}</text>
    </svg>`;
  },
  "math-mcd-mcm": function mathMcdMcm(){
    return `<svg viewBox="0 0 640 215" class="dia" role="img" aria-label="MCD and mcm prime factor diagram for 12 and 18">
      <text x="320" y="26" text-anchor="middle" class="lbl">${L(['M.C.D. (GREATEST COMMON DIVISOR) & m.c.m. (LEAST COMMON MULTIPLE)','M.C.D. E m.c.m. CON I FATTORI PRIMI (12 e 18)'])}</text>
      <rect x="20" y="38" width="600" height="168" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
      <!-- Circle 12 -->
      <circle cx="260" cy="110" r="62" fill="var(--data)" opacity=".18" stroke="var(--data)" stroke-width="2"/>
      <!-- Circle 18 -->
      <circle cx="380" cy="110" r="62" fill="var(--ember)" opacity=".18" stroke="var(--ember)" stroke-width="2"/>
      <!-- Factor 2 for 12 only -->
      <text x="228" y="115" text-anchor="middle" fill="var(--data)" font-size="20" font-weight="800">2</text>
      <text x="228" y="70" text-anchor="middle" fill="var(--data)" font-size="13" font-weight="700">12 = 2² × 3</text>
      <!-- Intersection: factors 2 and 3 -->
      <rect x="296" y="80" width="48" height="60" rx="8" fill="var(--gold)" opacity=".25" stroke="var(--gold)" stroke-width="1.5"/>
      <text x="320" y="104" text-anchor="middle" fill="var(--gold)" font-size="18" font-weight="800">2</text>
      <text x="320" y="128" text-anchor="middle" fill="var(--gold)" font-size="18" font-weight="800">3</text>
      <!-- Factor 3 for 18 only -->
      <text x="412" y="115" text-anchor="middle" fill="var(--ember)" font-size="20" font-weight="800">3</text>
      <text x="412" y="70" text-anchor="middle" fill="var(--ember)" font-size="13" font-weight="700">18 = 2 × 3²</text>
      <!-- Summary labels -->
      <text x="120" y="186" text-anchor="middle" fill="var(--gold)" font-size="13" font-weight="700">M.C.D.(12, 18) = 2 × 3 = 6</text>
      <text x="520" y="186" text-anchor="middle" fill="var(--sakura)" font-size="13" font-weight="700">m.c.m.(12, 18) = 2² × 3² = 36</text>
      <text x="320" y="186" text-anchor="middle" fill="var(--muted)" font-size="11">${L(['M.C.D. = common with min exponent · m.c.m. = all with max exponent','M.C.D. = solo comuni con esponente min · m.c.m. = tutti con esponente max'])}</text>
    </svg>`;
  },
  "math-fractions-visual": function mathFractionsVisual(){
    return `<svg viewBox="0 0 640 210" class="dia" role="img" aria-label="Equivalent fractions 1/2 = 2/4 = 4/8">
      <text x="320" y="26" text-anchor="middle" class="lbl">${L(['EQUIVALENT FRACTIONS: SAME QUANTITY, DIFFERENT SLICES','FRAZIONI EQUIVALENTI: STESSA QUANTITÀ, PARTI DIVERSE'])}</text>
      <rect x="20" y="38" width="600" height="162" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
      <!-- Fraction Bar 1/2 -->
      <g transform="translate(140, 56)">
        <text x="-40" y="24" fill="var(--text)" font-size="16" font-weight="800">1/2</text>
        <rect x="0" y="6" width="360" height="26" rx="4" fill="none" stroke="var(--line)" stroke-width="2"/>
        <rect x="0" y="6" width="180" height="26" rx="4" fill="var(--data)" opacity=".75"/>
        <line x1="180" y1="6" x2="180" y2="32" stroke="var(--text)" stroke-width="2"/>
        <text x="390" y="24" fill="var(--muted)" font-size="12">50% = 0.5</text>
      </g>
      <!-- Fraction Bar 2/4 -->
      <g transform="translate(140, 96)">
        <text x="-40" y="24" fill="var(--text)" font-size="16" font-weight="800">2/4</text>
        <rect x="0" y="6" width="360" height="26" rx="4" fill="none" stroke="var(--line)" stroke-width="2"/>
        <rect x="0" y="6" width="180" height="26" rx="4" fill="var(--gold)" opacity=".75"/>
        <line x1="90" y1="6" x2="90" y2="32" stroke="var(--line)" stroke-width="1.5"/>
        <line x1="180" y1="6" x2="180" y2="32" stroke="var(--text)" stroke-width="2"/>
        <line x1="270" y1="6" x2="270" y2="32" stroke="var(--line)" stroke-width="1.5"/>
        <text x="390" y="24" fill="var(--muted)" font-size="12">50% = 0.5</text>
      </g>
      <!-- Fraction Bar 4/8 -->
      <g transform="translate(140, 136)">
        <text x="-40" y="24" fill="var(--text)" font-size="16" font-weight="800">4/8</text>
        <rect x="0" y="6" width="360" height="26" rx="4" fill="none" stroke="var(--line)" stroke-width="2"/>
        <rect x="0" y="6" width="180" height="26" rx="4" fill="var(--ember)" opacity=".75"/>
        ${[45,90,135,180,225,270,315].map(x => `<line x1="${x}" y1="6" x2="${x}" y2="32" stroke="${x===180?'var(--text)':'var(--line)'}" stroke-width="${x===180?2:1}"/>`).join('')}
        <text x="390" y="24" fill="var(--muted)" font-size="12">50% = 0.5</text>
      </g>
      <text x="320" y="188" text-anchor="middle" class="sm" fill="var(--gold)">${L(['Invariant Property: multiply or divide both top and bottom by the same number!','Proprietà Invariantiva: moltiplica o dividi sopra e sotto per lo stesso numero!'])}</text>
    </svg>`;
  },
  "math-venn-diagram": function mathVennDiagram(){
    return `<svg viewBox="0 0 640 210" class="dia" role="img" aria-label="Venn diagrams for intersection and union">
      <text x="320" y="26" text-anchor="middle" class="lbl">${L(['SETS: INTERSECTION (A ∩ B) vs UNION (A ∪ B)','INSIEMI: INTERSEZIONE (A ∩ B) vs UNIONE (A ∪ B)'])}</text>
      <rect x="20" y="38" width="600" height="162" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
      <!-- Left side: Intersection -->
      <g transform="translate(160, 105)">
        <circle cx="-35" cy="0" r="50" fill="none" stroke="var(--data)" stroke-width="2"/>
        <circle cx="35" cy="0" r="50" fill="none" stroke="var(--ember)" stroke-width="2"/>
        <!-- Shaded intersection -->
        <path d="M 0 -35 A 50 50 0 0 1 0 35 A 50 50 0 0 1 0 -35 Z" fill="var(--gold)" opacity=".8"/>
        <text x="-55" y="-35" fill="var(--data)" font-weight="700">A</text>
        <text x="50" y="-35" fill="var(--ember)" font-weight="700">B</text>
        <text x="0" y="65" text-anchor="middle" fill="var(--gold)" font-size="14" font-weight="800">A ∩ B (${L(['INTERSECTION / AND','INTERSEZIONE / E'])})</text>
        <text x="0" y="80" text-anchor="middle" fill="var(--muted)" font-size="11">${L(['Elements in BOTH A and B','Elementi in ENTRAMBI'])}</text>
      </g>
      <!-- Right side: Union -->
      <g transform="translate(480, 105)">
        <circle cx="-35" cy="0" r="50" fill="var(--sakura)" opacity=".35" stroke="var(--data)" stroke-width="2"/>
        <circle cx="35" cy="0" r="50" fill="var(--sakura)" opacity=".35" stroke="var(--ember)" stroke-width="2"/>
        <text x="-55" y="-35" fill="var(--data)" font-weight="700">A</text>
        <text x="50" y="-35" fill="var(--ember)" font-weight="700">B</text>
        <text x="0" y="65" text-anchor="middle" fill="var(--sakura)" font-size="14" font-weight="800">A ∪ B (${L(['UNION / OR','UNIONE / O'])})</text>
        <text x="0" y="80" text-anchor="middle" fill="var(--muted)" font-size="11">${L(['Elements in A, B, or both','TUTTI gli elementi uniti'])}</text>
      </g>
    </svg>`;
  },
  "math-like-terms": function mathLikeTerms(){
    return `<svg viewBox="0 0 640 215" class="dia" role="img" aria-label="Similar monomials like terms illustration">
      <text x="320" y="26" text-anchor="middle" class="lbl">${L(['SIMILAR MONOMIALS (LIKE TERMS): SAME LITERAL PART','MONOMI SIMILI: STESSA PARTE LETTERALE'])}</text>
      <rect x="20" y="38" width="600" height="168" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
      <!-- Left side: Like Terms (OK) -->
      <rect x="40" y="52" width="260" height="110" rx="10" fill="var(--data)" opacity=".12" stroke="var(--good)" stroke-width="1.5"/>
      <text x="170" y="78" text-anchor="middle" fill="var(--good)" font-size="14" font-weight="800">✓ ${L(['LIKE TERMS (ADD COEFFICIENTS)','TERMINI SIMILI (SOMMA I NUMERI)'])}</text>
      <text x="170" y="112" text-anchor="middle" style="font-size:24px;font-weight:800;fill:var(--text)">3a² + 5a² = <tspan fill="var(--gold)">8a²</tspan></text>
      <text x="170" y="142" text-anchor="middle" class="sm" fill="var(--muted)">${L(['Literal part a² stays identical!','La parte letterale a² rimane intatta!'])}</text>
      <!-- Right side: Not Like Terms (NO) -->
      <rect x="340" y="52" width="260" height="110" rx="10" fill="var(--bad)" opacity=".10" stroke="var(--bad)" stroke-width="1.5"/>
      <text x="470" y="78" text-anchor="middle" fill="var(--bad)" font-size="14" font-weight="800">✗ ${L(['NOT SIMILAR (DO NOT COMBINE!)','NON SIMILI (NON SOMMARE!)'])}</text>
      <text x="470" y="112" text-anchor="middle" style="font-size:24px;font-weight:800;fill:var(--bad)">3a² + 2a ≠ 5a³</text>
      <text x="470" y="142" text-anchor="middle" class="sm" fill="var(--muted)">${L(['Apples and pears: exponents differ!','Mele e pere: esponenti diversi!'])}</text>
      <text x="320" y="192" text-anchor="middle" class="sm" fill="var(--gold)">${L(['Rule: to add or subtract monomials, only the coefficient changes!','Regola d’oro: per sommare monomi simili, somma solo i coefficienti numerici!'])}</text>
    </svg>`;
  },
  "math-square-binomial": function mathSquareBinomial(){
    return `<svg viewBox="0 0 640 240" class="dia" role="img" aria-label="Geometric proof of square of a binomial a plus b squared">
      <text x="320" y="24" text-anchor="middle" class="lbl">${L(['SPECIAL PRODUCT: (a + b)² = a² + 2ab + b²','PRODOTTO NOTEVOLE: (a + b)² = a² + 2ab + b²'])}</text>
      <rect x="20" y="34" width="600" height="198" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
      <!-- Geometric Square on Left -->
      <g transform="translate(60, 48)">
        <!-- a² square -->
        <rect x="0" y="0" width="80" height="80" fill="var(--data)" opacity=".75" stroke="var(--line)"/>
        <text x="40" y="46" text-anchor="middle" fill="#fff" font-size="20" font-weight="800">a²</text>
        <!-- ab top-right -->
        <rect x="80" y="0" width="40" height="80" fill="var(--sakura)" opacity=".75" stroke="var(--line)"/>
        <text x="100" y="46" text-anchor="middle" fill="#fff" font-size="15" font-weight="800">ab</text>
        <!-- ab bottom-left -->
        <rect x="0" y="80" width="80" height="40" fill="var(--sakura)" opacity=".75" stroke="var(--line)"/>
        <text x="40" y="106" text-anchor="middle" fill="#fff" font-size="15" font-weight="800">ab</text>
        <!-- b² square -->
        <rect x="80" y="80" width="40" height="40" fill="var(--gold)" opacity=".85" stroke="var(--line)"/>
        <text x="100" y="106" text-anchor="middle" fill="#fff" font-size="15" font-weight="800">b²</text>
        <!-- Side labels -->
        <text x="40" y="-8" text-anchor="middle" fill="var(--data)" font-weight="700">a</text>
        <text x="100" y="-8" text-anchor="middle" fill="var(--gold)" font-weight="700">b</text>
      </g>
      <!-- Explanation on Right -->
      <g transform="translate(240, 60)">
        <text x="0" y="24" fill="var(--text)" font-size="20" font-weight="800">(a + b)² = a² + <tspan fill="var(--sakura)">2ab</tspan> + b²</text>
        <text x="0" y="55" fill="var(--gold)" font-size="14" font-weight="700">1° termine al quadrato: a²</text>
        <text x="0" y="75" fill="var(--sakura)" font-size="14" font-weight="700">DOPPIO PRODOTTO: 2 × a × b = 2ab</text>
        <text x="0" y="95" fill="var(--data)" font-size="14" font-weight="700">2° termine al quadrato: b²</text>
        <rect x="0" y="112" width="360" height="36" rx="6" fill="var(--bad)" opacity=".15" stroke="var(--bad)"/>
        <text x="180" y="135" text-anchor="middle" fill="var(--bad)" font-size="13" font-weight="800">ATTENZIONE AL TRANELLO: (a+b)² ≠ a² + b² !</text>
      </g>
      <text x="320" y="222" text-anchor="middle" class="sm" fill="var(--muted)">${L(['The two pink rectangles form the double product +2ab: never forget it!','I due rettangoli rosa formano il doppio prodotto +2ab: non dimenticarlo mai!'])}</text>
    </svg>`;
  },
  "math-diff-squares": function mathDiffSquares(){
    return `<svg viewBox="0 0 640 210" class="dia" role="img" aria-label="Difference of squares (a plus b)(a minus b) = a squared minus b squared">
      <text x="320" y="26" text-anchor="middle" class="lbl">${L(['SPECIAL PRODUCT: (a + b)(a − b) = a² − b²','PRODOTTO NOTEVOLE: SOMMA PER DIFFERENZA'])}</text>
      <rect x="20" y="38" width="600" height="162" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
      <g transform="translate(60, 60)">
        <!-- a² square with b² cut out -->
        <rect x="0" y="0" width="110" height="110" fill="var(--data)" opacity=".7"/>
        <rect x="75" y="75" width="35" height="35" fill="var(--panel2)" stroke="var(--bad)" stroke-dasharray="3,3"/>
        <text x="92" y="98" text-anchor="middle" fill="var(--bad)" font-size="12" font-weight="700">−b²</text>
        <text x="45" y="55" text-anchor="middle" fill="#fff" font-size="22" font-weight="800">a²</text>
      </g>
      <g transform="translate(240, 75)">
        <text x="0" y="25" fill="var(--text)" font-size="22" font-weight="800">(a + b)(a − b) = <tspan fill="var(--gold)">a² − b²</tspan></text>
        <text x="0" y="60" fill="var(--muted)" font-size="14">${L(['The inner products cancel out: (+ab) + (-ab) = 0!','I prodotti interni si elidono: (+ab) + (-ab) = 0!'])}</text>
        <text x="0" y="85" fill="var(--gold)" font-size="14" font-weight="700">Esempio: (x + 3)(x − 3) = x² − 9</text>
        <text x="0" y="108" fill="var(--data)" font-size="14" font-weight="700">Esempio: (2x + 1)(2x − 1) = 4x² − 1</text>
      </g>
    </svg>`;
  },
  "math-equation-balance": function mathEquationBalance(){
    return `<svg viewBox="0 0 640 220" class="dia" role="img" aria-label="Equation two-pan balance scale principle">
      <text x="320" y="24" text-anchor="middle" class="lbl">${L(['THE BALANCE PRINCIPLE FOR EQUATIONS (1st EQUIVALENCE PRINCIPLE)','IL PRINCIPIO DELLA BILANCIA (1° PRINCIPIO DI EQUIVALENZA)'])}</text>
      <rect x="20" y="34" width="600" height="176" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
      <!-- Fulcrum triangle -->
      <polygon points="320,130 305,160 335,160" fill="var(--gold)"/>
      <!-- Balance beam -->
      <line x1="120" y1="130" x2="520" y2="130" stroke="var(--gold)" stroke-width="4"/>
      <!-- Left Pan (x + 3) -->
      <line x1="180" y1="130" x2="180" y2="155" stroke="var(--line)" stroke-width="2"/>
      <ellipse cx="180" cy="155" rx="65" ry="12" fill="var(--data)" opacity=".25" stroke="var(--data)" stroke-width="2"/>
      <!-- Box x and 3 dots -->
      <rect x="140" y="115" width="34" height="34" rx="6" fill="var(--ember)" stroke="#fff" stroke-width="1.5"/>
      <text x="157" y="138" text-anchor="middle" fill="#fff" font-size="18" font-weight="800">x</text>
      <circle cx="190" cy="132" r="8" fill="var(--gold)"/>
      <circle cx="205" cy="132" r="8" fill="var(--gold)"/>
      <circle cx="198" cy="116" r="8" fill="var(--gold)"/>
      <text x="180" y="98" text-anchor="middle" fill="var(--text)" font-size="18" font-weight="800">x + 3</text>
      <!-- Equal Sign in Middle -->
      <text x="320" y="110" text-anchor="middle" fill="var(--gold)" font-size="28" font-weight="900">=</text>
      <!-- Right Pan (7 dots) -->
      <line x1="460" y1="130" x2="460" y2="155" stroke="var(--line)" stroke-width="2"/>
      <ellipse cx="460" cy="155" rx="65" ry="12" fill="var(--data)" opacity=".25" stroke="var(--data)" stroke-width="2"/>
      <text x="460" y="98" text-anchor="middle" fill="var(--text)" font-size="18" font-weight="800">7</text>
      ${[0,1,2,3,4,5,6].map(i => `<circle cx="${435 + (i%4)*17}" cy="${118 + Math.floor(i/4)*16}" r="7" fill="var(--gold)"/>`).join('')}
      <!-- Bottom explanation -->
      <text x="320" y="194" text-anchor="middle" class="sm" fill="var(--gold)">${L(['Subtract 3 from BOTH sides: x + 3 − 3 = 7 − 3  ⟹  x = 4!','Togli 3 da ENTRAMBI i piatti della bilancia: x + 3 − 3 = 7 − 3  ⟹  x = 4!'])}</text>
    </svg>`;
  },
  "math-inequality-line": function mathInequalityLine(){
    return `<svg viewBox="0 0 640 215" class="dia" role="img" aria-label="Why multiplying by negative reverses inequality direction">
      <text x="320" y="24" text-anchor="middle" class="lbl">${L(['WHY INEQUALITIES FLIP WHEN MULTIPLIED BY A NEGATIVE NUMBER','PERCHÉ LE DISEQUAZIONI CAMBIANO VERSO CON IL MENO (× −1)'])}</text>
      <rect x="20" y="34" width="600" height="172" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
      <line x1="60" y1="90" x2="580" y2="90" stroke="var(--line)" stroke-width="2.5"/>
      <polygon points="585,90 575,85 575,95" fill="var(--muted)"/>
      <!-- Origin 0 -->
      <circle cx="320" cy="90" r="5" fill="var(--muted)"/>
      <text x="320" y="112" text-anchor="middle" fill="var(--muted)" font-size="14" font-weight="700">0</text>
      <!-- Top: 2 < 5 -->
      <circle cx="390" cy="90" r="5" fill="var(--data)"/>
      <text x="390" y="112" text-anchor="middle" fill="var(--data)" font-size="15" font-weight="700">+2</text>
      <circle cx="490" cy="90" r="5" fill="var(--data)"/>
      <text x="490" y="112" text-anchor="middle" fill="var(--data)" font-size="15" font-weight="700">+5</text>
      <text x="440" y="68" text-anchor="middle" fill="var(--data)" font-size="16" font-weight="800">2 &lt; 5 (2 sta a sinistra di 5)</text>
      <!-- Bottom: -5 < -2 means -2 > -5 -->
      <circle cx="250" cy="90" r="5" fill="var(--ember)"/>
      <text x="250" y="112" text-anchor="middle" fill="var(--ember)" font-size="15" font-weight="700">−2</text>
      <circle cx="150" cy="90" r="5" fill="var(--ember)"/>
      <text x="150" y="112" text-anchor="middle" fill="var(--ember)" font-size="15" font-weight="700">−5</text>
      <!-- Arrow showing flip -->
      <path d="M 440 76 Q 320 135 200 135" fill="none" stroke="var(--gold)" stroke-width="2" stroke-dasharray="4,3"/>
      <polygon points="200,135 210,130 210,140" fill="var(--gold)"/>
      <text x="200" y="162" text-anchor="middle" fill="var(--ember)" font-size="16" font-weight="800">−2 &gt; −5 (−2 sta a destra di −5!)</text>
      <text x="320" y="192" text-anchor="middle" class="sm" fill="var(--gold)">${L(['Golden Rule: whenever you multiply or divide by a negative number, FLIP the sign! (< becomes >)','Regola d’oro: se moltiplichi o dividi per un numero negativo, INVERTI subito il verso! (< diventa >)'])}</text>
    </svg>`;
  },
};

export function getVisualHtml(key: string, lang: Language): string {
  currentLang = lang;
  if (VIS[key]) return VIS[key]();
  return "";
}
