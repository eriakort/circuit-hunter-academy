/* ============ PHYSICS content — Il Walker ch.1–5 (subject 'phys') ============
   Builds on 3f_physics.js (unit, ch.1 arc, mission p1m1, PHYS_U / PHYS_A0 / PHYS_M0).
   Adds the rest of ch.1 and chapters 2–5: arcs, ~11 missions, visuals, Codex.
   Mini-games: existing order/sort for ch.1–2; new vectors/torque/fluids for ch.3–5. */

/* physics mission index helper: PM(0)=p1m1, PM(1)=p1m2, … in push order */
const PM = n => PHYS_M0 + n;

/* ---------- visuals ---------- */
VIS.phScale = () => `<svg viewBox="0 0 320 150" role="img" aria-label="Orders of magnitude">
  <rect x="8" y="8" width="304" height="134" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
  <line x1="28" y1="78" x2="292" y2="78" stroke="var(--muted)" stroke-width="2"/>
  ${[['10⁻¹⁰','atom',40],['10⁰','human',120],['10⁷','Earth',196],['10²¹','galaxy',272]].map(([p,l,x])=>`<line x1="${x}" y1="70" x2="${x}" y2="86" stroke="var(--ember)" stroke-width="2.5"/><circle cx="${x}" cy="78" r="4" fill="var(--ember)"/><text x="${x}" y="60" text-anchor="middle" fill="var(--text)" font-size="12" font-weight="700">${p}</text><text x="${x}" y="104" text-anchor="middle" fill="var(--muted)" font-size="10">${l}</text>`).join('')}
  <text x="160" y="130" text-anchor="middle" fill="var(--muted)" font-size="11">${L(['Every step is ×10 — an order of magnitude','Ogni passo è ×10 — un ordine di grandezza'])}</text>
</svg>`;

VIS.phDensity = () => `<svg viewBox="0 0 320 150" role="img" aria-label="Density">
  <rect x="8" y="8" width="304" height="134" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
  ${[['var(--data)',70,6,'low'],['var(--ember)',160,22,'high']].map(([c,cx,dots,l])=>`<rect x="${cx-34}" y="44" width="68" height="68" rx="6" fill="none" stroke="${c}" stroke-width="2.5"/>${[...Array(dots)].map((_,i)=>`<circle cx="${cx-26+(i%5)*13}" cy="${52+Math.floor(i/5)*13}" r="3" fill="${c}"/>`).join('')}`).join('')}
  <text x="70" y="128" text-anchor="middle" fill="var(--muted)" font-size="11">${L(['less dense','meno densa'])}</text>
  <text x="160" y="128" text-anchor="middle" fill="var(--muted)" font-size="11">${L(['more dense','più densa'])}</text>
  <text x="258" y="70" fill="var(--text)" font-size="13" font-weight="700">ρ = m / V</text>
  <text x="258" y="92" fill="var(--muted)" font-size="10">kg/m³</text>
</svg>`;

VIS.phRuler = () => `<svg viewBox="0 0 320 150" role="img" aria-label="Measuring with a ruler">
  <rect x="8" y="8" width="304" height="134" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
  <rect x="30" y="86" width="260" height="26" rx="3" fill="none" stroke="var(--muted)" stroke-width="2"/>
  ${[...Array(27)].map((_,i)=>`<line x1="${30+i*10}" y1="86" x2="${30+i*10}" y2="${i%5?94:100}" stroke="var(--muted)" stroke-width="1.5"/>`).join('')}
  <rect x="40" y="58" width="150" height="20" rx="4" fill="var(--data)" opacity="0.5"/>
  <line x1="40" y1="48" x2="190" y2="48" stroke="var(--ember)" stroke-width="2"/>
  <text x="115" y="42" text-anchor="middle" fill="var(--text)" font-size="12" font-weight="700">15.0 ± 0.1 cm</text>
  <text x="160" y="130" text-anchor="middle" fill="var(--muted)" font-size="11">${L(['Every measure carries an uncertainty','Ogni misura porta con sé un\'incertezza'])}</text>
</svg>`;

VIS.phGraph = () => `<svg viewBox="0 0 320 150" role="img" aria-label="Proportionality graphs">
  <rect x="8" y="8" width="304" height="134" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
  <g>${[[30,'direct','var(--data)','M0 60 L60 0'],[176,'inverse','var(--ember)','M0 2 Q 10 55 58 58']].map(([ox,l,c,d])=>`<g transform="translate(${ox},34)"><line x1="0" y1="0" x2="0" y2="64" stroke="var(--muted)" stroke-width="1.5"/><line x1="0" y1="64" x2="80" y2="64" stroke="var(--muted)" stroke-width="1.5"/><path d="${d}" transform="translate(4,2)" fill="none" stroke="${c}" stroke-width="3"/></g>`).join('')}</g>
  <text x="70" y="128" text-anchor="middle" fill="var(--muted)" font-size="11">${L(['direct: y = k·x','diretta: y = k·x'])}</text>
  <text x="232" y="128" text-anchor="middle" fill="var(--muted)" font-size="11">${L(['inverse: y = k/x','inversa: y = k/x'])}</text>
</svg>`;

VIS.phVector = () => `<svg viewBox="0 0 320 150" role="img" aria-label="Scalar versus vector">
  <rect x="8" y="8" width="304" height="134" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
  <text x="90" y="50" text-anchor="middle" fill="var(--text)" font-size="22" font-weight="700">25 °C</text>
  <text x="90" y="118" text-anchor="middle" fill="var(--muted)" font-size="11">${L(['scalar: only a number','scalare: solo un numero'])}</text>
  <line x1="190" y1="70" x2="280" y2="40" stroke="var(--ember)" stroke-width="3.5"/>
  <polygon points="280,40 268,40 274,52" fill="var(--ember)"/>
  <text x="232" y="118" text-anchor="middle" fill="var(--muted)" font-size="11">${L(['vector: value + direction','vettore: valore + direzione'])}</text>
</svg>`;

VIS.phForce = () => `<svg viewBox="0 0 320 150" role="img" aria-label="Forces on a block">
  <rect x="8" y="8" width="304" height="134" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
  <line x1="40" y1="110" x2="280" y2="110" stroke="var(--muted)" stroke-width="2"/>
  <rect x="130" y="76" width="60" height="34" rx="4" fill="var(--panel)" stroke="var(--data)" stroke-width="2"/>
  <line x1="160" y1="110" x2="160" y2="138" stroke="var(--ember)" stroke-width="3"/><polygon points="160,138 154,128 166,128" fill="var(--ember)"/>
  <line x1="190" y1="93" x2="250" y2="93" stroke="var(--gold)" stroke-width="3"/><polygon points="250,93 240,88 240,98" fill="var(--gold)"/>
  <line x1="130" y1="93" x2="90" y2="93" stroke="var(--sakura)" stroke-width="3"/><polygon points="90,93 100,88 100,98" fill="var(--sakura)"/>
  <text x="160" y="150" text-anchor="middle" fill="var(--muted)" font-size="10">${L(['weight','peso'])}</text>
  <text x="240" y="82" text-anchor="middle" fill="var(--muted)" font-size="10">${L(['push','spinta'])}</text>
  <text x="96" y="82" text-anchor="middle" fill="var(--muted)" font-size="10">${L(['friction','attrito'])}</text>
</svg>`;

VIS.phLever = () => `<svg viewBox="0 0 320 150" role="img" aria-label="Lever and torque">
  <rect x="8" y="8" width="304" height="134" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
  <line x1="40" y1="84" x2="280" y2="84" stroke="var(--ember)" stroke-width="6" stroke-linecap="round"/>
  <polygon points="150,120 170,120 160,86" fill="var(--muted)"/>
  <rect x="48" y="66" width="30" height="18" rx="3" fill="var(--data)"/>
  <line x1="250" y1="84" x2="250" y2="54" stroke="var(--gold)" stroke-width="3"/><polygon points="250,54 244,64 256,64" fill="var(--gold)"/>
  <text x="105" y="112" text-anchor="middle" fill="var(--muted)" font-size="10">d₁</text>
  <text x="205" y="112" text-anchor="middle" fill="var(--muted)" font-size="10">d₂</text>
  <text x="160" y="140" text-anchor="middle" fill="var(--muted)" font-size="11">${L(['moment = force × distance','momento = forza × distanza'])}</text>
</svg>`;

VIS.phTank = () => `<svg viewBox="0 0 320 150" role="img" aria-label="Pressure in a fluid">
  <rect x="8" y="8" width="304" height="134" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
  <rect x="40" y="26" width="240" height="104" rx="6" fill="var(--data)" opacity="0.14" stroke="var(--line)"/>
  ${[[60,34,1],[60,70,3],[60,106,5]].map(([x,y,n])=>`${[...Array(n)].map((_,i)=>`<line x1="${x+i*14}" y1="${y}" x2="${x+i*14+9}" y2="${y}" stroke="var(--ember)" stroke-width="2.5"/><polygon points="${x+i*14+9},${y} ${x+i*14+4},${y-3} ${x+i*14+4},${y+3}" fill="var(--ember)"/>`).join('')}`).join('')}
  <rect x="210" y="40" width="34" height="26" rx="4" fill="var(--gold)" opacity="0.85"/>
  <text x="160" y="146" text-anchor="middle" fill="var(--muted)" font-size="11">${L(['deeper water pushes harder (Stevin)','più in profondità spinge di più (Stevino)'])}</text>
</svg>`;

/* ---------- Chapter 1 — remaining missions (arc PHYS_A0) ---------- */
MISSIONS.push(
{ id:'p1m2', arc:PHYS_A0, sec:'1.4–1.5', pages:'19–26', hue:48, horns:2, eyes:3,
  title:['Big and Small','Grande e piccolo'], topic:['Scientific notation and orders of magnitude','Notazione scientifica e ordini di grandezza'],
  demon:['Zero Swarm','Sciame di Zeri'], tech:['Measure Form · Second Technique: Powers of Ten','Stile della Misura · Seconda Tecnica: Potenze di Dieci'],
  scenes:[
   {who:'s', vis:'phScale', text:[`<p>Physics measures the atom and the galaxy with the same units, {name}. The numbers get unwieldy — so we tame them.</p><p>In [[scientific notation|notazione scientifica]] we write a number as a value between 1 and 10 times a power of ten: 384 000 000 m becomes 3.84·10⁸ m. A negative exponent means very small: 0.000 002 m = 2·10⁻⁶ m.</p>`,
     `<p>La fisica misura l'atomo e la galassia con le stesse unità, {name}. I numeri diventano enormi — quindi li addomestichiamo.</p><p>In [[scientific notation|notazione scientifica]] scriviamo un numero come un valore tra 1 e 10 per una potenza di dieci: 384 000 000 m diventa 3,84·10⁸ m. Un esponente negativo indica qualcosa di molto piccolo: 0,000 002 m = 2·10⁻⁶ m.</p>`]},
   {who:'s', vis:'phScale', text:[`<p>The [[order of magnitude|ordine di grandezza]] is just the power of ten closest to the number — a quick sense of its size. 540 is about 10³ (≈1000); 0.004 is about 10⁻³.</p><p>It lets you compare an ant and a whale at a glance: how many powers of ten apart are they?</p>`,
     `<p>L'[[order of magnitude|ordine di grandezza]] è semplicemente la potenza di dieci più vicina al numero — un'idea rapida della sua dimensione. 540 è circa 10³ (≈1000); 0,004 è circa 10⁻³.</p><p>Ti permette di confrontare una formica e una balena a colpo d'occhio: quante potenze di dieci le separano?</p>`]},
   {who:'y', vis:'phScale', text:[`<p>So the exponent is basically "how many zeros", and the order of magnitude is the nearest round power?</p>`,`<p>Quindi l'esponente è in pratica "quanti zeri", e l'ordine di grandezza è la potenza tonda più vicina?</p>`]},
   {who:'s', vis:'phScale', text:[`<p>Right. The Zero Swarm scrambled a set of lengths. Put them in order, smallest to largest, by their power of ten.</p>`,`<p>Esatto. Lo Sciame di Zeri ha mescolato un insieme di lunghezze. Mettile in ordine, dalla più piccola alla più grande, secondo la loro potenza di dieci.</p>`]},
   {type:'order', title:['Order by size (small → large)','Ordina per dimensione (piccolo → grande)'], hint:['Compare the powers of ten.','Confronta le potenze di dieci.'], steps:[
     ['Radius of an atom · 10⁻¹⁰ m','Raggio di un atomo · 10⁻¹⁰ m'],
     ['Thickness of a hair · 10⁻⁴ m','Spessore di un capello · 10⁻⁴ m'],
     ['Height of a person · 10⁰ m','Altezza di una persona · 10⁰ m'],
     ['A marathon · 10⁴ m','Una maratona · 10⁴ m'],
     ['Radius of the Earth · 10⁷ m','Raggio della Terra · 10⁷ m'],
     ['Earth to the Sun · 10¹¹ m','Terra-Sole · 10¹¹ m']]},
   {who:'d', vis:'demon', text:[`<p>Bzzt! I'm the Zero Swarm! I bury every number under a storm of zeros until you lose count!</p>`,`<p>Bzzt! Sono lo Sciame di Zeri! Seppellisco ogni numero sotto una tempesta di zeri finché non perdi il conto!</p>`]},
   {type:'battle'}],
  quiz:[
   {q:['Write 52 000 in scientific notation.','Scrivi 52 000 in notazione scientifica.'],a:[['5.2 × 10⁴','5,2 × 10⁴'],['52 × 10³','52 × 10³'],['5.2 × 10³','5,2 × 10³'],['0.52 × 10⁵','0,52 × 10⁵']],why:['One non-zero digit before the point: 5.2 × 10⁴.','Una cifra diversa da zero davanti alla virgola: 5,2 × 10⁴.']},
   {q:['Write 0.00076 in scientific notation.','Scrivi 0,00076 in notazione scientifica.'],a:[['7.6 × 10⁻⁴','7,6 × 10⁻⁴'],['7.6 × 10⁴','7,6 × 10⁴'],['76 × 10⁻³','76 × 10⁻³'],['7.6 × 10⁻³','7,6 × 10⁻³']],why:['Move the point 4 places right, so the exponent is −4.','Si sposta la virgola di 4 posti a destra, quindi l\'esponente è −4.']},
   {q:['What is the order of magnitude of 640?','Qual è l\'ordine di grandezza di 640?'],a:[['10³','10³'],['10²','10²'],['10⁴','10⁴'],['640','640']],why:['640 = 6.4 × 10²; since 6.4 ≥ 5 we round up to 10³.','640 = 6,4 × 10²; poiché 6,4 ≥ 5 si arrotonda a 10³.']},
   {q:['10⁶ is how many times bigger than 10³?','10⁶ è quante volte più grande di 10³?'],a:[['1000','1000'],['3','3'],['100','100'],['2','2']],why:['10⁶ ÷ 10³ = 10³ = 1000.','10⁶ ÷ 10³ = 10³ = 1000.']},
   {q:['Which length has the largest order of magnitude?','Quale lunghezza ha l\'ordine di grandezza maggiore?'],a:[['10⁷ m','10⁷ m'],['10⁴ m','10⁴ m'],['10⁰ m','10⁰ m'],['10⁻² m','10⁻² m']],why:['The largest exponent wins: 10⁷.','Vince l\'esponente più grande: 10⁷.']},
   {q:['Why is scientific notation useful in physics?','Perché la notazione scientifica è utile in fisica?'],a:[['It handles very large and very small numbers cleanly','Gestisce con ordine numeri molto grandi e molto piccoli'],['It makes numbers exact','Rende i numeri esatti'],['It removes all units','Elimina tutte le unità'],['It only works for whole numbers','Funziona solo con i numeri interi']],why:['It compresses huge and tiny values into a short, comparable form.','Comprime valori enormi e minuscoli in una forma breve e confrontabile.']},
  ]},

{ id:'p1m3', arc:PHYS_A0, sec:'1.6–1.7', pages:'27–30', hue:12, horns:4, eyes:2,
  title:['Built From the Basics','Costruite dalle basi'], topic:['Derived quantities: area, volume, density','Grandezze derivate: area, volume, densità'],
  demon:['Density Imp','Folletto della Densità'], tech:['Measure Form · Third Technique: Density Read','Stile della Misura · Terza Tecnica: Lettura della Densità'],
  scenes:[
   {who:'s', vis:'phDensity', text:[`<p>From the fundamental quantities we build [[derived quantities|grandezze derivate]], {name}. Multiply two lengths and you get <b>area</b> (m²); three lengths give <b>volume</b> (m³).</p><p>Divide mass by volume and you get [[density|densità]]: ρ = m / V, measured in kg/m³. It tells you how tightly packed the matter is.</p>`,
     `<p>Dalle grandezze fondamentali costruiamo le [[derived quantities|grandezze derivate]], {name}. Moltiplica due lunghezze e ottieni l'<b>area</b> (m²); tre lunghezze danno il <b>volume</b> (m³).</p><p>Dividi la massa per il volume e ottieni la [[density|densità]]: ρ = m / V, misurata in kg/m³. Dice quanto è "stipata" la materia.</p>`]},
   {who:'s', vis:'phDensity', text:[`<p>Two blocks of the same size can have very different masses — lead is far denser than wood. Density is why iron sinks and cork floats, as you'll see in chapter 5.</p><p>When you write a measured value, keep only the [[significant figures|cifre significative]] you really know: the certain digits plus the first uncertain one.</p>`,
     `<p>Due blocchi della stessa dimensione possono avere masse molto diverse — il piombo è molto più denso del legno. La densità è il motivo per cui il ferro affonda e il sughero galleggia, come vedrai nel capitolo 5.</p><p>Quando scrivi un valore misurato, tieni solo le [[significant figures|cifre significative]] che conosci davvero: le cifre certe più la prima incerta.</p>`]},
   {who:'s', vis:'phDensity', text:[`<p>The Density Imp mixed up a pile of quantities. Sort each: is it a <b>fundamental</b> quantity, or a <b>derived</b> one?</p>`,`<p>Il Folletto della Densità ha mescolato un mucchio di grandezze. Smista ciascuna: è una grandezza <b>fondamentale</b> o <b>derivata</b>?</p>`]},
   {type:'sort', title:['Fundamental or derived?','Fondamentale o derivata?'], cats:[['Fundamental','Fondamentale'],['Derived','Derivata']], items:[
     {n:['Time (s)','Tempo (s)'],i:'book',c:0,why:['Time is a base SI quantity.','Il tempo è una grandezza base del SI.']},
     {n:['Volume (m³)','Volume (m³)'],i:'puzzle',c:1,why:['Volume = length × length × length.','Il volume = lunghezza × lunghezza × lunghezza.']},
     {n:['Mass (kg)','Massa (kg)'],i:'file',c:0,why:['Mass is a base SI quantity.','La massa è una grandezza base del SI.']},
     {n:['Density (kg/m³)','Densità (kg/m³)'],i:'layers',c:1,why:['Density = mass ÷ volume.','La densità = massa ÷ volume.']},
     {n:['Area (m²)','Area (m²)'],i:'eye',c:1,why:['Area = length × length.','L\'area = lunghezza × lunghezza.']},
     {n:['Length (m)','Lunghezza (m)'],i:'robot',c:0,why:['Length is a base SI quantity.','La lunghezza è una grandezza base del SI.']}]},
   {who:'d', vis:'demon', text:[`<p>Heh! I'm the Density Imp! I make lead feel light and feathers feel heavy until your intuition breaks!</p>`,`<p>Eh! Sono il Folletto della Densità! Faccio sembrare leggero il piombo e pesanti le piume finché la tua intuizione non crolla!</p>`]},
   {type:'battle'}],
  quiz:[
   {q:['Density is defined as…','La densità è definita come…'],a:[['mass ÷ volume','massa ÷ volume'],['mass × volume','massa × volume'],['volume ÷ mass','volume ÷ massa'],['mass ÷ area','massa ÷ area']],why:['ρ = m / V.','ρ = m / V.']},
   {q:['The SI unit of volume is…','L\'unità SI del volume è…'],a:[['m³','m³'],['m²','m²'],['kg','kg'],['kg/m³','kg/m³']],why:['Volume is three lengths multiplied: m³.','Il volume è tre lunghezze moltiplicate: m³.']},
   {q:['A block has m = 200 g and V = 100 cm³. Its density is…','Un blocco ha m = 200 g e V = 100 cm³. La sua densità è…'],a:[['2 g/cm³','2 g/cm³'],['0.5 g/cm³','0,5 g/cm³'],['20 g/cm³','20 g/cm³'],['100 g/cm³','100 g/cm³']],why:['ρ = 200 ÷ 100 = 2 g/cm³.','ρ = 200 ÷ 100 = 2 g/cm³.']},
   {q:['Area is a derived quantity because…','L\'area è una grandezza derivata perché…'],a:[['it is two lengths multiplied','è due lunghezze moltiplicate'],['it cannot be measured','non si può misurare'],['it is a base SI unit','è un\'unità base del SI'],['it has no unit','non ha unità']],why:['Area = length × length, built from a fundamental quantity.','L\'area = lunghezza × lunghezza, costruita da una grandezza fondamentale.']},
   {q:['How many significant figures are in 0.04050?','Quante cifre significative ci sono in 0,04050?'],a:[['4','4'],['5','5'],['3','3'],['2','2']],why:['Leading zeros don\'t count; 4, 0, 5, 0 do → four.','Gli zeri iniziali non contano; 4, 0, 5, 0 sì → quattro.']},
   {q:['Why can two same-sized objects have different masses?','Perché due oggetti delle stesse dimensioni possono avere masse diverse?'],a:[['They have different densities','Hanno densità diverse'],['They have different volumes','Hanno volumi diversi'],['Mass does not exist','La massa non esiste'],['They are the same mass','Hanno la stessa massa']],why:['Same volume but different density means different mass (m = ρ·V).','Stesso volume ma densità diversa significa massa diversa (m = ρ·V).']},
  ]}
);

/* ---------- Chapter 2 — Misure e rappresentazioni ---------- */
const PHYS_A1 = ARCS.length;
ARCS.push({ n:2, unit:PHYS_U, subject:'phys', title:['Measurement & Data','Misure e rappresentazioni'], pages:'31–58' });
MISSIONS.push(
{ id:'p2m1', arc:PHYS_A1, sec:'2.1–2.3', pages:'32–44', hue:200, horns:2, eyes:4,
  title:['The Honest Ruler','Il righello onesto'], topic:['Instruments, sensitivity, errors and uncertainty','Strumenti, sensibilità, errori e incertezza'],
  demon:['Error Wraith','Spettro dell\'Errore'], tech:['Measure Form · Fourth Technique: Error Bound','Stile della Misura · Quarta Tecnica: Stima dell\'Errore'],
  scenes:[
   {who:'s', vis:'phRuler', text:[`<p>No measurement is perfect, {name}. Every instrument has a [[sensitivity|sensibilità]] — the smallest difference it can read (a ruler's smallest division) — and a maximum it can reach, its range (<i>portata</i>).</p><p>So we never report a bare number. We report a value plus an [[uncertainty|incertezza]]: 15.0 ± 0.1 cm. The true value lies inside that band.</p>`,
     `<p>Nessuna misura è perfetta, {name}. Ogni strumento ha una [[sensitivity|sensibilità]] — la più piccola differenza che può leggere (la divisione più piccola di un righello) — e un massimo che può raggiungere, la sua <i>portata</i>.</p><p>Perciò non riportiamo mai un numero nudo. Riportiamo un valore più un'[[uncertainty|incertezza]]: 15,0 ± 0,1 cm. Il valore vero sta dentro quella banda.</p>`]},
   {who:'s', vis:'phRuler', text:[`<p>To reduce random error we measure several times and take the [[mean|media]] — the average. The spread of the readings gives the [[absolute error|errore assoluto]] (half the range, in the same units).</p><p>Compared to the measurement itself it becomes the <b>relative error</b> (error ÷ value), often written as a percentage. A 1 cm error on 1000 cm is tiny; on 2 cm it is huge.</p>`,
     `<p>Per ridurre l'errore casuale misuriamo più volte e prendiamo la [[mean|media]]. La dispersione delle letture dà l'[[absolute error|errore assoluto]] (metà dell'intervallo, nelle stesse unità).</p><p>Rispetto alla misura stessa diventa l'<b>errore relativo</b> (errore ÷ valore), spesso in percentuale. Un errore di 1 cm su 1000 cm è minimo; su 2 cm è enorme.</p>`]},
   {who:'s', vis:'phRuler', text:[`<p>The Error Wraith jumbled the steps of a careful measurement. Put them back in order.</p>`,`<p>Lo Spettro dell'Errore ha confuso i passi di una misura accurata. Rimettili in ordine.</p>`]},
   {type:'order', title:['How to measure well','Come misurare bene'], hint:['Think: prepare, repeat, combine, report.','Pensa: prepara, ripeti, combina, riporta.'], steps:[
     ['Choose an instrument with the right range and sensitivity','Scegli uno strumento con portata e sensibilità adatte'],
     ['Take the measurement several times','Esegui la misura più volte'],
     ['Calculate the mean of the readings','Calcola la media delle letture'],
     ['Estimate the absolute error from the spread','Stima l\'errore assoluto dalla dispersione'],
     ['Report the value as mean ± error','Riporta il valore come media ± errore']]},
   {who:'d', vis:'demon', text:[`<p>Hsss… I'm the Error Wraith! I whisper that your one quick reading is the exact truth — and lead you astray!</p>`,`<p>Hsss… Sono lo Spettro dell'Errore! Sussurro che la tua unica lettura veloce è la verità esatta — e ti porto fuori strada!</p>`]},
   {type:'battle'}],
  quiz:[
   {q:['The sensitivity of an instrument is…','La sensibilità di uno strumento è…'],a:[['the smallest difference it can detect','la più piccola differenza che può rilevare'],['its largest reading','la sua lettura massima'],['its price','il suo prezzo'],['its length','la sua lunghezza']],why:['Sensitivity = the smallest change the instrument can read.','Sensibilità = la più piccola variazione che lo strumento legge.']},
   {q:['Why report 15.0 ± 0.1 cm instead of just 15 cm?','Perché riportare 15,0 ± 0,1 cm invece di solo 15 cm?'],a:[['To show the uncertainty of the measure','Per mostrare l\'incertezza della misura'],['To make it look longer','Per farlo sembrare più lungo'],['Because 15 is wrong','Perché 15 è sbagliato'],['To remove the unit','Per togliere l\'unità']],why:['The ± band states how precise the measurement is.','La banda ± dice quanto è precisa la misura.']},
   {q:['Readings 20, 22, 21, 21 cm. The mean is…','Letture 20, 22, 21, 21 cm. La media è…'],a:[['21 cm','21 cm'],['22 cm','22 cm'],['20 cm','20 cm'],['84 cm','84 cm']],why:['(20+22+21+21) ÷ 4 = 84 ÷ 4 = 21 cm.','(20+22+21+21) ÷ 4 = 84 ÷ 4 = 21 cm.']},
   {q:['An error of 2 cm is most serious when the measured value is…','Un errore di 2 cm è più grave quando il valore misurato è…'],a:[['5 cm','5 cm'],['200 cm','200 cm'],['2000 cm','2000 cm'],['50 cm','50 cm']],why:['Relative error = error ÷ value, largest when the value is smallest.','Errore relativo = errore ÷ valore, massimo quando il valore è più piccolo.']},
   {q:['Taking several measurements and averaging mainly reduces…','Misurare più volte e fare la media riduce soprattutto…'],a:[['random error','l\'errore casuale'],['the price','il prezzo'],['the sensitivity','la sensibilità'],['the unit','l\'unità']],why:['Averaging repeated readings smooths out random fluctuations.','La media di letture ripetute attenua le fluttuazioni casuali.']},
   {q:['Relative error is calculated as…','L\'errore relativo si calcola come…'],a:[['absolute error ÷ measured value','errore assoluto ÷ valore misurato'],['value ÷ error','valore ÷ errore'],['error × value','errore × valore'],['error + value','errore + valore']],why:['Relative error = absolute error ÷ value (often ×100 for %).','Errore relativo = errore assoluto ÷ valore (spesso ×100 per la %).']},
  ]},

{ id:'p2m2', arc:PHYS_A1, sec:'2.4–2.5', pages:'45–58', hue:280, horns:3, eyes:3,
  title:['Reading the Lines','Leggere i grafici'], topic:['Tables, graphs and proportionality','Tabelle, grafici e proporzionalità'],
  demon:['Graph Gremlin','Gremlin dei Grafici'], tech:['Measure Form · Fifth Technique: Graph Sight','Stile della Misura · Quinta Tecnica: Vista dei Grafici'],
  scenes:[
   {who:'s', vis:'phGraph', text:[`<p>Data comes alive as a graph, {name}. Two quantities can be linked in typical ways.</p><p>In [[direct proportionality|proporzionalità diretta]], one doubles when the other doubles: y = k·x. Its graph is a straight line through the origin.</p>`,
     `<p>I dati prendono vita in un grafico, {name}. Due grandezze possono essere legate in modi tipici.</p><p>Nella [[direct proportionality|proporzionalità diretta]], una raddoppia quando l'altra raddoppia: y = k·x. Il suo grafico è una retta che passa per l'origine.</p>`]},
   {who:'s', vis:'phGraph', text:[`<p>In [[inverse proportionality|proporzionalità inversa]], one halves when the other doubles — their product stays constant: y = k/x. Its graph is a curve (a hyperbola).</p><p>Recognising the shape tells you the law behind the data before you write a single formula.</p>`,
     `<p>Nella [[inverse proportionality|proporzionalità inversa]], una si dimezza quando l'altra raddoppia — il loro prodotto resta costante: y = k/x. Il suo grafico è una curva (un'iperbole).</p><p>Riconoscere la forma ti svela la legge dietro i dati prima ancora di scrivere una formula.</p>`]},
   {who:'s', vis:'phGraph', text:[`<p>The Graph Gremlin scrambled some relationships. Sort each: is it <b>direct</b> or <b>inverse</b> proportionality?</p>`,`<p>Il Gremlin dei Grafici ha mescolato alcune relazioni. Smista ciascuna: è proporzionalità <b>diretta</b> o <b>inversa</b>?</p>`]},
   {type:'sort', title:['Direct or inverse?','Diretta o inversa?'], cats:[['Direct','Diretta'],['Inverse','Inversa']], items:[
     {n:['Double the fabric → double the cost','Doppio tessuto → doppio costo'],i:'file',c:0,why:['Cost grows in step with amount: direct.','Il costo cresce insieme alla quantità: diretta.']},
     {n:['More workers → less time for the job','Più operai → meno tempo per il lavoro'],i:'robot',c:1,why:['One up, the other down, product constant: inverse.','Uno sale, l\'altro scende, prodotto costante: inversa.']},
     {n:['Straight line through the origin','Retta per l\'origine'],i:'layers',c:0,why:['y = k·x is direct proportionality.','y = k·x è proporzionalità diretta.']},
     {n:['Speed up → trip time goes down','Più veloce → meno tempo di viaggio'],i:'eye',c:1,why:['For a fixed distance, time = distance ÷ speed: inverse.','Per una distanza fissa, tempo = distanza ÷ velocità: inversa.']},
     {n:['A hyperbola curve','Una curva a iperbole'],i:'puzzle',c:1,why:['y = k/x graphs as a hyperbola: inverse.','y = k/x si disegna come un\'iperbole: inversa.']},
     {n:['Twice the mass → twice the weight','Doppia massa → doppio peso'],i:'book',c:0,why:['Weight = mass × g, a direct proportion.','Peso = massa × g, proporzionalità diretta.']}]},
   {who:'d', vis:'demon', text:[`<p>Hah! I'm the Graph Gremlin! I bend your straight lines into curves and flip your axes until the data lies!</p>`,`<p>Ah! Sono il Gremlin dei Grafici! Piego le tue rette in curve e ribalto gli assi finché i dati mentono!</p>`]},
   {type:'battle'}],
  quiz:[
   {q:['The graph of a direct proportionality is…','Il grafico di una proporzionalità diretta è…'],a:[['a straight line through the origin','una retta che passa per l\'origine'],['a hyperbola','un\'iperbole'],['a horizontal line','una retta orizzontale'],['a circle','un cerchio']],why:['y = k·x is a line through (0,0).','y = k·x è una retta per (0,0).']},
   {q:['In inverse proportionality, the product x·y is…','Nella proporzionalità inversa, il prodotto x·y è…'],a:[['constant','costante'],['zero','zero'],['always growing','sempre crescente'],['negative','negativo']],why:['y = k/x means x·y = k, a constant.','y = k/x significa x·y = k, una costante.']},
   {q:['If y = k·x and x triples, then y…','Se y = k·x e x triplica, allora y…'],a:[['also triples','triplica anch\'essa'],['halves','si dimezza'],['stays the same','resta uguale'],['becomes zero','diventa zero']],why:['Direct proportionality: y scales with x.','Proporzionalità diretta: y scala con x.']},
   {q:['6 workers finish in 4 h. How long for 8 workers (same work)?','6 operai finiscono in 4 h. Quanto per 8 operai (stesso lavoro)?'],a:[['3 h','3 h'],['6 h','6 h'],['4 h','4 h'],['8 h','8 h']],why:['Inverse: 6×4 = 24; 24 ÷ 8 = 3 h.','Inversa: 6×4 = 24; 24 ÷ 8 = 3 h.']},
   {q:['A curve that falls as x grows, never touching the axes, is…','Una curva che scende al crescere di x, senza mai toccare gli assi, è…'],a:[['inverse proportionality','proporzionalità inversa'],['direct proportionality','proporzionalità diretta'],['a constant','una costante'],['a straight line','una retta']],why:['The hyperbola y = k/x behaves this way.','L\'iperbole y = k/x si comporta così.']},
   {q:['Why plot data on a graph at all?','Perché mettere i dati su un grafico?'],a:[['To see the relationship between the quantities','Per vedere la relazione tra le grandezze'],['To hide the numbers','Per nascondere i numeri'],['To change the units','Per cambiare le unità'],['To make them exact','Per renderli esatti']],why:['A graph reveals the law linking the two quantities.','Un grafico rivela la legge che lega le due grandezze.']},
  ]}
);

/* ---------- Chapter 3 — I vettori e le forze ---------- */
const PHYS_A2 = ARCS.length;
ARCS.push({ n:3, unit:PHYS_U, subject:'phys', title:['Vectors & Forces','I vettori e le forze'], pages:'59–88' });
MISSIONS.push(
{ id:'p3m1', arc:PHYS_A2, sec:'3.1–3.3', pages:'60–72', hue:210, horns:3, eyes:2,
  title:['Arrows of Force','Frecce di forza'], topic:['Scalars vs vectors; adding vectors','Scalari e vettori; sommare i vettori'],
  demon:['Vector Viper','Vipera Vettoriale'], tech:['Force Form · First Technique: Resultant Strike','Stile della Forza · Prima Tecnica: Colpo Risultante'],
  scenes:[
   {who:'s', vis:'phVector', text:[`<p>Some quantities need only a number — temperature, mass, time. We call them [[scalar|scalare]] quantities.</p><p>Others need a number <i>and</i> a direction: a push, a velocity, a force. These are [[vector|vettore]] quantities, drawn as arrows. The length is the size; the way it points is the direction.</p>`,
     `<p>Alcune grandezze hanno bisogno solo di un numero — temperatura, massa, tempo. Le chiamiamo grandezze [[scalar|scalare]].</p><p>Altre richiedono un numero <i>e</i> una direzione: una spinta, una velocità, una forza. Sono grandezze [[vector|vettore]], disegnate come frecce. La lunghezza è il valore; il verso in cui punta è la direzione.</p>`]},
   {who:'s', vis:'phVector', text:[`<p>To add two vectors we lay them [[tip-to-tail|punta-coda]]: start the second where the first ends. The [[resultant|risultante]] runs from the very start to the very end.</p><p>When they're at right angles, the resultant's length comes from Pythagoras: a 3 and a 4 give a resultant of 5.</p>`,
     `<p>Per sommare due vettori li mettiamo [[tip-to-tail|punta-coda]]: il secondo parte dove finisce il primo. La [[resultant|risultante]] va dall'inizio assoluto alla fine assoluta.</p><p>Quando sono ad angolo retto, la lunghezza della risultante viene da Pitagora: un 3 e un 4 danno una risultante di 5.</p>`]},
   {who:'s', vis:'phVector', text:[`<p>The Vector Viper scattered pairs of vectors across the grid. Add each pair tip-to-tail and click where the resultant ends.</p>`,`<p>La Vipera Vettoriale ha sparso coppie di vettori sulla griglia. Somma ogni coppia punta-coda e clicca dove finisce la risultante.</p>`]},
   {type:'vectors', mode:'resultant', title:['Build the resultant','Costruisci la risultante'], grid:6, rounds:[
     {a:[3,0],b:[0,4],why:['3 east then 4 north lands at (3,4), a resultant of 5.','3 a est poi 4 a nord arriva in (3,4), risultante 5.']},
     {a:[2,2],b:[2,1],why:['Tip-to-tail: (2,2) then (2,1) ends at (4,3).','Punta-coda: (2,2) poi (2,1) finisce in (4,3).']},
     {a:[1,3],b:[3,0],why:['(1,3) then (3,0) lands at (4,3).','(1,3) poi (3,0) arriva in (4,3).']}]},
   {who:'d', vis:'demon', text:[`<p>Ssss! I'm the Vector Viper! I twist your arrows so forces point every way but the right one!</p>`,`<p>Ssss! Sono la Vipera Vettoriale! Storco le tue frecce così le forze puntano ovunque tranne nel verso giusto!</p>`]},
   {type:'battle'}],
  quiz:[
   {q:['Which of these is a vector quantity?','Quale di queste è una grandezza vettoriale?'],a:[['Force','Forza'],['Temperature','Temperatura'],['Mass','Massa'],['Time','Tempo']],why:['Force has size and direction, so it is a vector.','La forza ha valore e direzione, quindi è un vettore.']},
   {q:['A vector is drawn as…','Un vettore si disegna come…'],a:[['an arrow','una freccia'],['a dot','un punto'],['a circle','un cerchio'],['a number only','solo un numero']],why:['The arrow\'s length is the magnitude, its direction the way it points.','La lunghezza della freccia è il modulo, la direzione il verso in cui punta.']},
   {q:['Two perpendicular forces of 6 N and 8 N give a resultant of…','Due forze perpendicolari di 6 N e 8 N danno una risultante di…'],a:[['10 N','10 N'],['14 N','14 N'],['2 N','2 N'],['48 N','48 N']],why:['√(6² + 8²) = √100 = 10 N.','√(6² + 8²) = √100 = 10 N.']},
   {q:['To add vectors graphically you place them…','Per sommare vettori graficamente li metti…'],a:[['tip-to-tail','punta-coda'],['tail-to-tail only','coda-coda soltanto'],['at random','a caso'],['on top of each other','uno sopra l\'altro']],why:['Tip-to-tail: the resultant runs start-to-end.','Punta-coda: la risultante va dall\'inizio alla fine.']},
   {q:['Two forces 3 N and 4 N act in the SAME direction. Resultant?','Due forze 3 N e 4 N agiscono nella STESSA direzione. Risultante?'],a:[['7 N','7 N'],['5 N','5 N'],['1 N','1 N'],['12 N','12 N']],why:['Same direction: they simply add, 3 + 4 = 7 N.','Stessa direzione: si sommano, 3 + 4 = 7 N.']},
   {q:['The resultant of several vectors is…','La risultante di più vettori è…'],a:[['the single vector with the same total effect','l\'unico vettore con lo stesso effetto complessivo'],['the longest one','il più lungo'],['always zero','sempre zero'],['their average direction','la loro direzione media']],why:['The resultant replaces them all with one equivalent vector.','La risultante li sostituisce tutti con un unico vettore equivalente.']},
  ]},

{ id:'p3m2', arc:PHYS_A2, sec:'3.4–3.6', pages:'73–82', hue:20, horns:4, eyes:3,
  title:['Push, Pull, Stretch','Spingi, tira, allunga'], topic:['Forces: weight, elastic force, friction','Le forze: peso, forza elastica, attrito'],
  demon:['Friction Fiend','Demone dell\'Attrito'], tech:['Force Form · Second Technique: Newton Grip','Stile della Forza · Seconda Tecnica: Presa di Newton'],
  scenes:[
   {who:'s', vis:'phForce', text:[`<p>A [[force|forza]] is a push or a pull — it can change an object's motion or shape. We measure it in [[newton|newton]] (N) with a [[dynamometer|dinamometro]], a calibrated spring.</p><p>The [[weight|forza-peso]] is the force of gravity on a mass: P = m·g, with g ≈ 9.8 N/kg. Mass (kg) and weight (N) are different things!</p>`,
     `<p>Una [[force|forza]] è una spinta o una trazione — può cambiare il moto o la forma di un oggetto. La misuriamo in [[newton|newton]] (N) con un [[dynamometer|dinamometro]], una molla tarata.</p><p>La [[weight|forza-peso]] è la forza di gravità su una massa: P = m·g, con g ≈ 9,8 N/kg. Massa (kg) e peso (N) sono cose diverse!</p>`]},
   {who:'s', vis:'phForce', text:[`<p>A spring pulls back when stretched: the [[elastic force|forza elastica]] follows [[Hooke's law|legge di Hooke]], F = k·x — the more you stretch (x), the harder it pulls.</p><p>And when surfaces slide, [[friction|attrito]] resists the motion. It's why a pushed box eventually stops.</p>`,
     `<p>Una molla tira indietro quando è allungata: la [[elastic force|forza elastica]] segue la [[Hooke's law|legge di Hooke]], F = k·x — più la allunghi (x), più forte tira.</p><p>E quando le superfici scorrono, l'[[friction|attrito]] si oppone al moto. È il motivo per cui una scatola spinta prima o poi si ferma.</p>`]},
   {who:'s', vis:'phForce', text:[`<p>The Friction Fiend mixed up a pile of force facts. Sort each statement under the right force.</p>`,`<p>Il Demone dell'Attrito ha mescolato un mucchio di fatti sulle forze. Smista ogni affermazione sotto la forza giusta.</p>`]},
   {type:'sort', title:['Which force?','Quale forza?'], cats:[['Weight','Peso'],['Elastic','Elastica'],['Friction','Attrito']], items:[
     {n:['Pulls a mass toward the ground','Tira una massa verso il suolo'],i:'file',c:0,why:['Gravity gives weight, P = m·g.','La gravità dà il peso, P = m·g.']},
     {n:['Follows F = k·x','Segue F = k·x'],i:'layers',c:1,why:['Hooke\'s law describes the elastic force.','La legge di Hooke descrive la forza elastica.']},
     {n:['Stops a sliding box','Ferma una scatola che scivola'],i:'robot',c:2,why:['Friction opposes sliding motion.','L\'attrito si oppone allo scorrimento.']},
     {n:['Measured as m × g','Si calcola come m × g'],i:'book',c:0,why:['Weight = mass × gravitational field g.','Peso = massa × campo gravitazionale g.']},
     {n:['Stronger the more a spring is stretched','Più forte quanto più la molla è allungata'],i:'puzzle',c:1,why:['Elastic force grows with the stretch x.','La forza elastica cresce con l\'allungamento x.']},
     {n:['Produces heat between rubbing surfaces','Produce calore tra superfici che sfregano'],i:'eye',c:2,why:['Friction turns motion into heat.','L\'attrito trasforma il moto in calore.']}]},
   {who:'d', vis:'demon', text:[`<p>Grrsh! I'm the Friction Fiend! I drag on everything that moves and burn your energy to waste heat!</p>`,`<p>Grrsh! Sono il Demone dell'Attrito! Freno tutto ciò che si muove e brucio la tua energia in calore sprecato!</p>`]},
   {type:'battle'}],
  quiz:[
   {q:['The SI unit of force is the…','L\'unità SI della forza è il…'],a:[['newton','newton'],['kilogram','chilogrammo'],['metre','metro'],['joule','joule']],why:['Force is measured in newtons (N).','La forza si misura in newton (N).']},
   {q:['A 5 kg mass weighs about… (g ≈ 9.8 N/kg)','Una massa di 5 kg pesa circa… (g ≈ 9,8 N/kg)'],a:[['49 N','49 N'],['5 N','5 N'],['9.8 N','9,8 N'],['0.5 N','0,5 N']],why:['P = m·g = 5 × 9.8 ≈ 49 N.','P = m·g = 5 × 9,8 ≈ 49 N.']},
   {q:['Hooke\'s law for a spring is…','La legge di Hooke per una molla è…'],a:[['F = k·x','F = k·x'],['F = m·g','F = m·g'],['F = m·a','F = m·a'],['F = k/x','F = k/x']],why:['Elastic force is proportional to the stretch: F = k·x.','La forza elastica è proporzionale all\'allungamento: F = k·x.']},
   {q:['Mass and weight differ because…','Massa e peso differiscono perché…'],a:[['mass is in kg, weight is a force in N','la massa è in kg, il peso è una forza in N'],['they are the same','sono la stessa cosa'],['weight is in kg','il peso è in kg'],['mass has direction','la massa ha direzione']],why:['Mass measures matter (kg); weight is the gravity force on it (N).','La massa misura la materia (kg); il peso è la forza di gravità su di essa (N).']},
   {q:['Friction always acts…','L\'attrito agisce sempre…'],a:[['against the motion','contro il moto'],['in the direction of motion','nel verso del moto'],['upward','verso l\'alto'],['toward the centre of the Earth','verso il centro della Terra']],why:['Friction opposes the relative sliding.','L\'attrito si oppone allo scorrimento relativo.']},
   {q:['An instrument that measures force is the…','Uno strumento che misura la forza è il…'],a:[['dynamometer','dinamometro'],['thermometer','termometro'],['balance','bilancia'],['ruler','righello']],why:['A dynamometer uses a calibrated spring to read force.','Un dinamometro usa una molla tarata per leggere la forza.']},
  ]},

{ id:'p3m3', arc:PHYS_A2, sec:'3.7', pages:'83–88', hue:230, horns:2, eyes:4,
  title:['Splitting the Arrow','Scomporre la freccia'], topic:['Resolving a vector into components','Scomporre un vettore nelle componenti'],
  demon:['Component Cutter','Tagliatore di Componenti'], tech:['Force Form · Third Technique: Component Split','Stile della Forza · Terza Tecnica: Scomposizione'],
  scenes:[
   {who:'s', vis:'phVector', text:[`<p>Adding vectors builds them up, {name}. We can also go the other way and break one apart.</p><p>Any vector can be split into two [[components|componenti]] along the axes: a horizontal (x) part and a vertical (y) part. Together they have the exact same effect as the original.</p>`,
     `<p>Sommare i vettori li costruisce, {name}. Possiamo anche fare il contrario e scomporne uno.</p><p>Ogni vettore può essere diviso in due [[components|componenti]] lungo gli assi: una parte orizzontale (x) e una verticale (y). Insieme hanno esattamente lo stesso effetto dell'originale.</p>`]},
   {who:'s', vis:'phVector', text:[`<p>This is how we handle a force on a slope: split the weight into one part along the ramp and one pressing into it. Each axis can then be treated on its own.</p><p>A vector reaching the point (4, 3) has an x-component of 4 and a y-component of 3. Read them straight off the grid.</p>`,
     `<p>È così che trattiamo una forza su un piano inclinato: scomponi il peso in una parte lungo la rampa e una che preme su di essa. Ogni asse si tratta poi per conto suo.</p><p>Un vettore che arriva al punto (4, 3) ha componente x uguale a 4 e componente y uguale a 3. Leggile direttamente dalla griglia.</p>`]},
   {who:'s', vis:'phVector', text:[`<p>The Component Cutter hid each vector's shadows. For every arrow, click its x-component on the horizontal axis, then its y-component on the vertical axis.</p>`,`<p>Il Tagliatore di Componenti ha nascosto le ombre di ogni vettore. Per ogni freccia, clicca la componente x sull'asse orizzontale, poi la componente y sull'asse verticale.</p>`]},
   {type:'vectors', mode:'components', title:['Resolve into components','Scomponi nelle componenti'], grid:6, rounds:[
     {v:[4,3],why:['The arrow to (4,3) has x = 4 and y = 3.','La freccia verso (4,3) ha x = 4 e y = 3.']},
     {v:[2,5],why:['x = 2 across, y = 5 up.','x = 2 in orizzontale, y = 5 in verticale.']},
     {v:[5,2],why:['x = 5 across, y = 2 up.','x = 5 in orizzontale, y = 2 in verticale.']}]},
   {who:'d', vis:'demon', text:[`<p>Snik-snik! I'm the Component Cutter! I slice your vectors into useless pieces that don't add back up!</p>`,`<p>Snik-snik! Sono il Tagliatore di Componenti! Taglio i tuoi vettori in pezzi inutili che non si ricompongono!</p>`]},
   {type:'battle'}],
  quiz:[
   {q:['Resolving a vector means…','Scomporre un vettore significa…'],a:[['splitting it into components along the axes','dividerlo in componenti lungo gli assi'],['making it longer','allungarlo'],['deleting it','cancellarlo'],['turning it into a scalar','trasformarlo in uno scalare']],why:['Resolution breaks a vector into its x and y parts.','La scomposizione divide un vettore nelle sue parti x e y.']},
   {q:['A vector reaching (6, 8) has components…','Un vettore che arriva in (6, 8) ha componenti…'],a:[['x = 6, y = 8','x = 6, y = 8'],['x = 8, y = 6','x = 8, y = 6'],['x = 14, y = 0','x = 14, y = 0'],['x = 7, y = 7','x = 7, y = 7']],why:['Read straight off the axes: x = 6, y = 8.','Si leggono dagli assi: x = 6, y = 8.']},
   {q:['The two components together have…','Le due componenti insieme hanno…'],a:[['the same effect as the original vector','lo stesso effetto del vettore originale'],['no effect','nessun effetto'],['double the effect','il doppio dell\'effetto'],['opposite effect','effetto opposto']],why:['Components are equivalent to the whole vector.','Le componenti equivalgono all\'intero vettore.']},
   {q:['Splitting weight on a ramp is useful because…','Scomporre il peso su una rampa è utile perché…'],a:[['each axis can be studied separately','ogni asse si studia separatamente'],['it removes gravity','elimina la gravità'],['it doubles the force','raddoppia la forza'],['it has no purpose','non serve a nulla']],why:['Resolving lets you handle along-ramp and into-ramp parts on their own.','La scomposizione permette di trattare da sole la parte lungo la rampa e quella che vi preme.']},
   {q:['A purely horizontal vector has a y-component of…','Un vettore puramente orizzontale ha componente y uguale a…'],a:[['0','0'],['equal to x','uguale a x'],['the whole length','tutta la lunghezza'],['negative','negativa']],why:['No vertical part means y = 0.','Nessuna parte verticale significa y = 0.']},
   {q:['Components are measured along…','Le componenti si misurano lungo…'],a:[['the x and y axes','gli assi x e y'],['a circle','un cerchio'],['the vector itself','il vettore stesso'],['no direction','nessuna direzione']],why:['Components lie along the chosen (usually x and y) axes.','Le componenti giacciono lungo gli assi scelti (di solito x e y).']},
  ]}
);

/* ---------- Chapter 4 — L'equilibrio dei solidi ---------- */
const PHYS_A3 = ARCS.length;
ARCS.push({ n:4, unit:PHYS_U, subject:'phys', title:['Equilibrium of Solids','L\'equilibrio dei solidi'], pages:'89–116' });
MISSIONS.push(
{ id:'p4m1', arc:PHYS_A3, sec:'4.1–4.3', pages:'90–104', hue:40, horns:3, eyes:3,
  title:['Balance the Beam','Bilancia la leva'], topic:['Torque (moment of a force) and levers','Momento di una forza e leve'],
  demon:['Torque Troll','Troll del Momento'], tech:['Balance Form · First Technique: Moment Match','Stile dell\'Equilibrio · Prima Tecnica: Pareggio dei Momenti'],
  scenes:[
   {who:'s', vis:'phLever', text:[`<p>For a solid that can turn, balance isn't just about forces — it's about turning effect, {name}.</p><p>The [[torque|momento]] (moment of a force) is force × distance from the pivot: M = F·d. A small force far out can turn as strongly as a big force up close.</p>`,
     `<p>Per un solido che può ruotare, l'equilibrio non riguarda solo le forze — riguarda l'effetto rotante, {name}.</p><p>Il [[torque|momento]] (momento di una forza) è forza × distanza dal perno: M = F·d. Una piccola forza lontana può far ruotare con la stessa intensità di una grande forza vicina.</p>`]},
   {who:'s', vis:'phLever', text:[`<p>A [[lever|leva]] turns on a [[fulcrum|fulcro]]. It balances when the turning effect on one side equals the turning effect on the other:</p><p><b>F₁·d₁ = F₂·d₂</b>. This is why a long bar lets you lift a heavy rock with a gentle push.</p>`,
     `<p>Una [[lever|leva]] ruota su un [[fulcrum|fulcro]]. È in equilibrio quando l'effetto rotante da un lato è uguale a quello dall'altro:</p><p><b>F₁·d₁ = F₂·d₂</b>. Ecco perché una barra lunga ti permette di sollevare un masso pesante con una spinta leggera.</p>`]},
   {who:'s', vis:'phLever', text:[`<p>The Torque Troll keeps tipping the beam. For each round, place the right-hand weight at the distance that makes the two moments equal.</p>`,`<p>Il Troll del Momento continua a far pendere la leva. In ogni round, metti il peso di destra alla distanza che rende uguali i due momenti.</p>`]},
   {type:'torque', title:['Balance the lever','Bilancia la leva'], span:6, rounds:[
     {wl:6,dl:2,wr:4,why:['6×2 = 12, so 4 N must sit at distance 3.','6×2 = 12, quindi i 4 N vanno a distanza 3.']},
     {wl:2,dl:6,wr:4,why:['2×6 = 12, so 4 N balances at distance 3.','2×6 = 12, quindi i 4 N bilanciano a distanza 3.']},
     {wl:5,dl:4,wr:10,why:['5×4 = 20, so 10 N balances at distance 2.','5×4 = 20, quindi i 10 N bilanciano a distanza 2.']}]},
   {who:'d', vis:'demon', text:[`<p>Hurr! I'm the Torque Troll! I lean on the long end of every lever and tip your careful balance over!</p>`,`<p>Hurr! Sono il Troll del Momento! Mi appoggio sull'estremità lunga di ogni leva e rovescio il tuo equilibrio!</p>`]},
   {type:'battle'}],
  quiz:[
   {q:['The moment of a force is calculated as…','Il momento di una forza si calcola come…'],a:[['force × distance from the pivot','forza × distanza dal perno'],['force ÷ distance','forza ÷ distanza'],['force + distance','forza + distanza'],['mass × speed','massa × velocità']],why:['M = F·d, the turning effect about the pivot.','M = F·d, l\'effetto rotante attorno al perno.']},
   {q:['A lever balances when…','Una leva è in equilibrio quando…'],a:[['F₁·d₁ = F₂·d₂','F₁·d₁ = F₂·d₂'],['F₁ = F₂','F₁ = F₂'],['d₁ = d₂','d₁ = d₂'],['F₁ + F₂ = 0','F₁ + F₂ = 0']],why:['Equal and opposite moments give rotational equilibrium.','Momenti uguali e opposti danno l\'equilibrio rotazionale.']},
   {q:['A 10 N weight is 2 m from the pivot. To balance it at 5 m you need…','Un peso di 10 N è a 2 m dal perno. Per bilanciarlo a 5 m serve…'],a:[['4 N','4 N'],['10 N','10 N'],['25 N','25 N'],['2 N','2 N']],why:['10×2 = 20; 20 ÷ 5 = 4 N.','10×2 = 20; 20 ÷ 5 = 4 N.']},
   {q:['Why is a long lever easier to use?','Perché una leva lunga è più facile da usare?'],a:[['A bigger distance makes a bigger moment for the same force','Una distanza maggiore dà un momento maggiore a parità di forza'],['It weighs less','Pesa meno'],['It removes gravity','Elimina la gravità'],['It has no pivot','Non ha perno']],why:['M = F·d: more distance means more turning effect per newton.','M = F·d: più distanza significa più effetto rotante per newton.']},
   {q:['The fixed point a lever turns on is the…','Il punto fisso attorno a cui ruota una leva è il…'],a:[['fulcrum','fulcro'],['resultant','risultante'],['component','componente'],['vector','vettore']],why:['The fulcrum is the pivot of the lever.','Il fulcro è il perno della leva.']},
   {q:['Two children balance a see-saw. The heavier one must sit…','Due bambini bilanciano un\'altalena. Il più pesante deve sedersi…'],a:[['closer to the pivot','più vicino al perno'],['farther from the pivot','più lontano dal perno'],['exactly at the pivot','esattamente sul perno'],['it doesn\'t matter','non importa']],why:['More weight needs less distance to match the moment.','Più peso richiede meno distanza per pareggiare il momento.']},
  ]},

{ id:'p4m2', arc:PHYS_A3, sec:'4.4–4.6', pages:'105–116', hue:160, horns:4, eyes:2,
  title:['Standing Steady','Stare in piedi'], topic:['Centre of gravity and types of equilibrium','Baricentro e tipi di equilibrio'],
  demon:['Tipping Phantom','Fantasma del Ribaltamento'], tech:['Balance Form · Second Technique: Centre Hold','Stile dell\'Equilibrio · Seconda Tecnica: Tenuta del Baricentro'],
  scenes:[
   {who:'s', vis:'phLever', text:[`<p>Every object behaves as if its whole weight acted at one point: the [[centre of gravity|baricentro]]. A body stays put when that point is supported.</p><p>A wide base and a low centre of gravity make an object hard to tip — that's why racing cars are low and broad.</p>`,
     `<p>Ogni oggetto si comporta come se tutto il suo peso agisse in un punto: il [[centre of gravity|baricentro]]. Un corpo resta fermo quando quel punto è sostenuto.</p><p>Una base larga e un baricentro basso rendono un oggetto difficile da ribaltare — per questo le auto da corsa sono basse e larghe.</p>`]},
   {who:'s', vis:'phLever', text:[`<p>There are three kinds of balance. [[Stable equilibrium|equilibrio stabile]]: nudge it and it returns (a ball in a bowl). [[Unstable equilibrium|equilibrio instabile]]: nudge it and it runs away (a ball on a dome). [[Neutral equilibrium|equilibrio indifferente]]: nudge it and it just stays (a ball on a flat table).</p>`,
     `<p>Ci sono tre tipi di equilibrio. [[Stable equilibrium|equilibrio stabile]]: lo sposti e ritorna (una pallina in una scodella). [[Unstable equilibrium|equilibrio instabile]]: lo sposti e scappa via (una pallina su una cupola). [[Neutral equilibrium|equilibrio indifferente]]: lo sposti e resta lì (una pallina su un tavolo piano).</p>`]},
   {who:'s', vis:'phLever', text:[`<p>The Tipping Phantom scrambled some examples. Sort each one by the kind of equilibrium it shows.</p>`,`<p>Il Fantasma del Ribaltamento ha mescolato alcuni esempi. Smista ciascuno secondo il tipo di equilibrio che mostra.</p>`]},
   {type:'sort', title:['Which equilibrium?','Quale equilibrio?'], cats:[['Stable','Stabile'],['Unstable','Instabile'],['Neutral','Indifferente']], items:[
     {n:['A ball resting in a bowl','Una pallina ferma in una scodella'],i:'eye',c:0,why:['Displaced, it rolls back: stable.','Spostata, ritorna: stabile.']},
     {n:['A pencil balanced on its tip','Una matita in equilibrio sulla punta'],i:'file',c:1,why:['The slightest nudge topples it: unstable.','Il minimo urto la fa cadere: instabile.']},
     {n:['A ball on a flat table','Una pallina su un tavolo piano'],i:'layers',c:2,why:['Moved, it just stays: neutral.','Spostata, resta ferma: indifferente.']},
     {n:['A cone resting on its base','Un cono appoggiato sulla base'],i:'book',c:0,why:['Wide base, low centre: returns upright, stable.','Base larga, baricentro basso: ritorna dritto, stabile.']},
     {n:['A cone balanced on its point','Un cono in equilibrio sulla punta'],i:'puzzle',c:1,why:['Tiny tilt and it falls: unstable.','Piccola inclinazione e cade: instabile.']},
     {n:['A wheel rolling on level ground','Una ruota che rotola su terreno piano'],i:'robot',c:2,why:['New position is just as balanced: neutral.','La nuova posizione è ugualmente equilibrata: indifferente.']}]},
   {who:'d', vis:'demon', text:[`<p>Woo! I'm the Tipping Phantom! I raise your centre of gravity and narrow your base until the smallest breeze topples you!</p>`,`<p>Woo! Sono il Fantasma del Ribaltamento! Alzo il tuo baricentro e restringo la tua base finché il più piccolo soffio ti rovescia!</p>`]},
   {type:'battle'}],
  quiz:[
   {q:['The centre of gravity is the point where…','Il baricentro è il punto in cui…'],a:[['the whole weight can be taken to act','si può pensare agisca tutto il peso'],['there is no mass','non c\'è massa'],['friction is largest','l\'attrito è massimo'],['the object is coldest','l\'oggetto è più freddo']],why:['Weight behaves as if concentrated at the centre of gravity.','Il peso si comporta come se fosse concentrato nel baricentro.']},
   {q:['An object is hardest to tip when its centre of gravity is…','Un oggetto è più difficile da ribaltare quando il baricentro è…'],a:[['low, over a wide base','basso, su una base larga'],['high, over a narrow base','alto, su una base stretta'],['outside the object','fuori dall\'oggetto'],['moving','in movimento']],why:['Low centre + wide base = very stable.','Baricentro basso + base larga = molto stabile.']},
   {q:['A ball in a bowl shows which equilibrium?','Una pallina in una scodella mostra quale equilibrio?'],a:[['stable','stabile'],['unstable','instabile'],['neutral','indifferente'],['none','nessuno']],why:['Displaced, it returns to the bottom: stable.','Spostata, ritorna sul fondo: stabile.']},
   {q:['A ball on a flat table shows…','Una pallina su un tavolo piano mostra…'],a:[['neutral equilibrium','equilibrio indifferente'],['stable equilibrium','equilibrio stabile'],['unstable equilibrium','equilibrio instabile'],['no equilibrium','nessun equilibrio']],why:['Moved, it stays where it is: neutral.','Spostata, resta dov\'è: indifferente.']},
   {q:['Unstable equilibrium means that after a small push the object…','Equilibrio instabile significa che dopo una piccola spinta l\'oggetto…'],a:[['moves further away from its position','si allontana dalla sua posizione'],['returns to its position','torna alla sua posizione'],['stays in the new position','resta nella nuova posizione'],['disappears','sparisce']],why:['In unstable equilibrium a nudge grows; it topples.','Nell\'equilibrio instabile l\'urto si amplifica; l\'oggetto cade.']},
   {q:['Why do racing cars have a low, wide body?','Perché le auto da corsa hanno una carrozzeria bassa e larga?'],a:[['For a low centre of gravity and a wide base — more stability','Per baricentro basso e base larga — più stabilità'],['To weigh more','Per pesare di più'],['To go slower','Per andare più piano'],['To remove friction','Per togliere l\'attrito']],why:['Low centre of gravity + wide base resists tipping in corners.','Baricentro basso + base larga resistono al ribaltamento in curva.']},
  ]}
);

/* ---------- Chapter 5 — L'equilibrio dei fluidi ---------- */
const PHYS_A4 = ARCS.length;
ARCS.push({ n:5, unit:PHYS_U, subject:'phys', title:['Equilibrium of Fluids','L\'equilibrio dei fluidi'], pages:'117–146' });
MISSIONS.push(
{ id:'p5m1', arc:PHYS_A4, sec:'5.1–5.3', pages:'118–132', hue:190, horns:3, eyes:3,
  title:['Pressure in the Deep','La pressione in profondità'], topic:['Pressure, Pascal and Stevin','Pressione, Pascal e Stevino'],
  demon:['Pressure Kraken','Kraken della Pressione'], tech:['Fluid Form · First Technique: Depth Read','Stile dei Fluidi · Prima Tecnica: Lettura della Profondità'],
  scenes:[
   {who:'s', vis:'phTank', text:[`<p>A fluid can't be grabbed like a solid, {name}, so we describe it with [[pressure|pressione]]: force spread over an area, p = F/A, measured in [[pascal|pascal]] (Pa).</p><p>The same force on a small area gives high pressure — that's why a sharp knife cuts and a wide snowshoe doesn't sink.</p>`,
     `<p>Un fluido non si afferra come un solido, {name}, quindi lo descriviamo con la [[pressure|pressione]]: forza distribuita su un'area, p = F/A, misurata in [[pascal|pascal]] (Pa).</p><p>La stessa forza su un'area piccola dà pressione alta — per questo un coltello affilato taglia e una racchetta da neve larga non affonda.</p>`]},
   {who:'s', vis:'phTank', text:[`<p>In a liquid, [[Pascal's principle|principio di Pascal]] says pressure applied to an enclosed fluid is passed on everywhere equally — the basis of hydraulic brakes.</p><p>And [[Stevin's law|legge di Stevino]]: pressure grows with depth, p = ρ·g·h. Dive deeper and the water pushes harder on your ears.</p>`,
     `<p>In un liquido, il [[Pascal's principle|principio di Pascal]] dice che la pressione applicata a un fluido chiuso si trasmette ovunque allo stesso modo — la base dei freni idraulici.</p><p>E la [[Stevin's law|legge di Stevino]]: la pressione cresce con la profondità, p = ρ·g·h. Scendi più in profondità e l'acqua spinge più forte sulle tue orecchie.</p>`]},
   {who:'s', vis:'phTank', text:[`<p>The Pressure Kraken marked points at different depths. For each round, click the point where the pressure is greatest.</p>`,`<p>Il Kraken della Pressione ha segnato punti a diverse profondità. In ogni round, clicca il punto dove la pressione è maggiore.</p>`]},
   {type:'fluids', mode:'pressure', title:['Where is the pressure greatest?','Dove è maggiore la pressione?'], rounds:[
     {points:[{x:70,depth:1},{x:140,depth:5},{x:210,depth:3}],why:['Deepest point, greatest pressure (Stevin).','Punto più profondo, pressione maggiore (Stevino).']},
     {points:[{x:70,depth:4},{x:140,depth:2},{x:210,depth:6}],why:['Depth 6 beats depth 4 and 2.','Profondità 6 batte 4 e 2.']},
     {points:[{x:70,depth:7},{x:140,depth:3},{x:210,depth:5}],why:['Depth 7 is deepest, so highest pressure.','Profondità 7 è la più profonda, quindi pressione massima.']}]},
   {who:'d', vis:'demon', text:[`<p>Glub! I'm the Pressure Kraken! I crush you harder the deeper you go and squeeze the air from your lungs!</p>`,`<p>Glub! Sono il Kraken della Pressione! Ti schiaccio più forte man mano che scendi e ti strizzo l'aria dai polmoni!</p>`]},
   {type:'battle'}],
  quiz:[
   {q:['Pressure is defined as…','La pressione è definita come…'],a:[['force ÷ area','forza ÷ area'],['force × area','forza × area'],['mass ÷ volume','massa ÷ volume'],['force ÷ time','forza ÷ tempo']],why:['p = F / A.','p = F / A.']},
   {q:['The SI unit of pressure is the…','L\'unità SI della pressione è il…'],a:[['pascal','pascal'],['newton','newton'],['kilogram','chilogrammo'],['joule','joule']],why:['Pressure is measured in pascals (Pa = N/m²).','La pressione si misura in pascal (Pa = N/m²).']},
   {q:['Stevin\'s law says pressure in a liquid grows with…','La legge di Stevino dice che la pressione in un liquido cresce con…'],a:[['depth','la profondità'],['width','la larghezza'],['colour','il colore'],['temperature only','solo la temperatura']],why:['p = ρ·g·h — deeper means more pressure.','p = ρ·g·h — più profondo significa più pressione.']},
   {q:['The same force on a smaller area produces…','La stessa forza su un\'area minore produce…'],a:[['greater pressure','pressione maggiore'],['less pressure','pressione minore'],['the same pressure','la stessa pressione'],['no pressure','nessuna pressione']],why:['p = F/A: smaller area, larger pressure.','p = F/A: area minore, pressione maggiore.']},
   {q:['Pascal\'s principle is the basis of…','Il principio di Pascal è alla base di…'],a:[['hydraulic systems','sistemi idraulici'],['levers','leve'],['thermometers','termometri'],['pendulums','pendoli']],why:['Pressure transmitted equally drives hydraulic brakes and lifts.','La pressione trasmessa in modo uguale muove freni e sollevatori idraulici.']},
   {q:['Two points in the same tank: A is deeper than B. Then…','Due punti nella stessa vasca: A è più profondo di B. Allora…'],a:[['A has higher pressure','A ha pressione maggiore'],['B has higher pressure','B ha pressione maggiore'],['equal pressure','pressione uguale'],['neither has pressure','nessuno ha pressione']],why:['Greater depth means greater pressure.','Maggiore profondità significa maggiore pressione.']},
  ]},

{ id:'p5m2', arc:PHYS_A4, sec:'5.4–5.6', pages:'133–146', hue:170, horns:4, eyes:3,
  title:['Float or Sink','Galleggia o affonda'], topic:['Archimedes\' principle and buoyancy','Principio di Archimede e galleggiamento'],
  demon:['Buoyancy Beast','Bestia del Galleggiamento'], tech:['Fluid Form · Second Technique: Archimedes Lift','Stile dei Fluidi · Seconda Tecnica: Spinta di Archimede'],
  scenes:[
   {who:'s', vis:'phTank', text:[`<p>Step into a full bath and water spills over, {name}. That spill is the key to floating.</p><p>[[Archimedes' principle|principio di Archimede]]: a body in a fluid feels an upward [[buoyant force|spinta di Archimede]] equal to the weight of the fluid it pushes out of the way.</p>`,
     `<p>Entra in una vasca piena e l'acqua trabocca, {name}. Quel trabocco è la chiave del galleggiamento.</p><p>[[Archimedes' principle|principio di Archimede]]: un corpo in un fluido sente una [[buoyant force|spinta di Archimede]] verso l'alto pari al peso del fluido che sposta.</p>`]},
   {who:'s', vis:'phTank', text:[`<p>Compare the object's [[density|densità]] with the fluid's. Less dense than water (< 1 g/cm³) and it floats; more dense and it sinks; equal and it hovers.</p><p>A steel ship floats because its hull shape makes its <i>average</i> density — steel plus all the air inside — less than water's.</p>`,
     `<p>Confronta la [[density|densità]] dell'oggetto con quella del fluido. Meno densa dell'acqua (< 1 g/cm³) e galleggia; più densa e affonda; uguale e resta sospesa.</p><p>Una nave d'acciaio galleggia perché la forma dello scafo rende la sua densità <i>media</i> — acciaio più tutta l'aria dentro — minore di quella dell'acqua.</p>`]},
   {who:'s', vis:'phTank', text:[`<p>The Buoyancy Beast tossed objects into the water. For each one, work out its density from mass and volume, then decide: floats or sinks?</p>`,`<p>La Bestia del Galleggiamento ha gettato oggetti in acqua. Per ciascuno, calcola la densità da massa e volume, poi decidi: galleggia o affonda?</p>`]},
   {type:'fluids', mode:'float', title:['Float or sink?','Galleggia o affonda?'], rounds:[
     {name:['Cork block','Blocco di sughero'],m:5,v:20,why:['','']},
     {name:['Iron bolt','Bullone di ferro'],m:79,v:10,why:['','']},
     {name:['Ice cube','Cubetto di ghiaccio'],m:9,v:10,why:['','']},
     {name:['Glass marble','Biglia di vetro'],m:25,v:10,why:['','']}]},
   {who:'d', vis:'demon', text:[`<p>Roar! I'm the Buoyancy Beast! I drag down what should float and bob up what should sink until the sea makes no sense!</p>`,`<p>Roar! Sono la Bestia del Galleggiamento! Trascino giù ciò che dovrebbe galleggiare e faccio emergere ciò che dovrebbe affondare finché il mare non ha più senso!</p>`]},
   {type:'battle'}],
  quiz:[
   {q:['Archimedes\' buoyant force equals…','La spinta di Archimede è pari a…'],a:[['the weight of the displaced fluid','al peso del fluido spostato'],['the weight of the object','al peso dell\'oggetto'],['the volume of the object','al volume dell\'oggetto'],['zero','a zero']],why:['Buoyancy = weight of the fluid pushed aside.','La spinta = peso del fluido spostato.']},
   {q:['An object floats when its density is…','Un oggetto galleggia quando la sua densità è…'],a:[['less than the fluid\'s','minore di quella del fluido'],['greater than the fluid\'s','maggiore di quella del fluido'],['exactly zero','esattamente zero'],['equal to its mass','uguale alla sua massa']],why:['Lower density than the fluid → it floats.','Densità minore del fluido → galleggia.']},
   {q:['A block has m = 60 g, V = 20 cm³. In water (1 g/cm³) it…','Un blocco ha m = 60 g, V = 20 cm³. In acqua (1 g/cm³)…'],a:[['sinks (density 3 g/cm³)','affonda (densità 3 g/cm³)'],['floats','galleggia'],['hovers','resta sospeso'],['dissolves','si scioglie']],why:['ρ = 60 ÷ 20 = 3 g/cm³ > 1, so it sinks.','ρ = 60 ÷ 20 = 3 g/cm³ > 1, quindi affonda.']},
   {q:['Why does a steel ship float?','Perché una nave d\'acciaio galleggia?'],a:[['Its average density (with the air inside) is less than water','La sua densità media (con l\'aria dentro) è minore dell\'acqua'],['Steel is lighter than water','L\'acciaio è più leggero dell\'acqua'],['It has no weight','Non ha peso'],['Water has no density','L\'acqua non ha densità']],why:['The hollow hull lowers the ship\'s overall density below water\'s.','Lo scafo cavo abbassa la densità complessiva sotto quella dell\'acqua.']},
   {q:['Ice (0.9 g/cm³) placed in water will…','Il ghiaccio (0,9 g/cm³) messo in acqua…'],a:[['float, mostly submerged','galleggia, quasi tutto immerso'],['sink to the bottom','affonda sul fondo'],['dissolve instantly','si scioglie all\'istante'],['float completely above the surface','galleggia tutto sopra la superficie']],why:['Slightly less dense than water, so it floats low.','Poco meno denso dell\'acqua, quindi galleggia basso.']},
   {q:['The buoyant force always points…','La spinta di Archimede punta sempre…'],a:[['upward','verso l\'alto'],['downward','verso il basso'],['sideways','di lato'],['toward the densest side','verso il lato più denso']],why:['Buoyancy acts upward, opposing weight.','La spinta agisce verso l\'alto, opponendosi al peso.']},
  ]}
);

/* ---------- Codex terms (grouped by the mission that introduces them) ---------- */
CODEX.push(
  [PM(1),'scientific notation','notazione scientifica','A number between 1 and 10 times a power of ten.','Un numero tra 1 e 10 per una potenza di dieci.'],
  [PM(1),'order of magnitude','ordine di grandezza','The power of ten closest to a number — a quick sense of its size.','La potenza di dieci più vicina a un numero — un\'idea rapida della sua dimensione.'],
  [PM(2),'derived quantities','grandezze derivate','Quantities built from fundamental ones, like area, volume or density.','Grandezze costruite da quelle fondamentali, come area, volume o densità.'],
  [PM(2),'density','densità','Mass per unit volume: ρ = m / V, in kg/m³.','Massa per unità di volume: ρ = m / V, in kg/m³.'],
  [PM(2),'significant figures','cifre significative','The certain digits of a measurement plus the first uncertain one.','Le cifre certe di una misura più la prima incerta.'],
  [PM(3),'sensitivity','sensibilità','The smallest difference an instrument can detect.','La più piccola differenza che uno strumento può rilevare.'],
  [PM(3),'uncertainty','incertezza','The ± band around a measured value showing how precise it is.','La banda ± attorno a un valore misurato che ne indica la precisione.'],
  [PM(3),'mean','media','The average of several repeated measurements.','La media di più misure ripetute.'],
  [PM(3),'absolute error','errore assoluto','The uncertainty of a measurement in the same units as the value.','L\'incertezza di una misura, nelle stesse unità del valore.'],
  [PM(4),'direct proportionality','proporzionalità diretta','y = k·x: one doubles when the other doubles; a line through the origin.','y = k·x: una raddoppia quando l\'altra raddoppia; una retta per l\'origine.'],
  [PM(4),'inverse proportionality','proporzionalità inversa','y = k/x: one halves when the other doubles; their product is constant.','y = k/x: una si dimezza quando l\'altra raddoppia; il loro prodotto è costante.'],
  [PM(5),'scalar','scalare','A quantity given by a number alone, like mass or temperature.','Una grandezza data da un solo numero, come massa o temperatura.'],
  [PM(5),'vector','vettore','A quantity with both a value and a direction, drawn as an arrow.','Una grandezza con valore e direzione, disegnata come una freccia.'],
  [PM(5),'resultant','risultante','The single vector equivalent to the sum of several vectors.','L\'unico vettore equivalente alla somma di più vettori.'],
  [PM(6),'force','forza','A push or pull that can change motion or shape, measured in newtons.','Una spinta o trazione che può cambiare moto o forma, misurata in newton.'],
  [PM(6),'weight','forza-peso','The gravity force on a mass: P = m·g.','La forza di gravità su una massa: P = m·g.'],
  [PM(6),'elastic force','forza elastica','A spring\'s restoring force, F = k·x (Hooke\'s law).','La forza di richiamo di una molla, F = k·x (legge di Hooke).'],
  [PM(6),'friction','attrito','A force that resists sliding between surfaces.','Una forza che si oppone allo scorrimento tra superfici.'],
  [PM(7),'components','componenti','The parts of a vector along the x and y axes.','Le parti di un vettore lungo gli assi x e y.'],
  [PM(8),'torque','momento','The turning effect of a force: M = F·d.','L\'effetto rotante di una forza: M = F·d.'],
  [PM(8),'lever','leva','A rigid bar that turns on a fulcrum; balances when F₁·d₁ = F₂·d₂.','Una barra rigida che ruota su un fulcro; in equilibrio quando F₁·d₁ = F₂·d₂.'],
  [PM(9),'centre of gravity','baricentro','The point where an object\'s whole weight can be taken to act.','Il punto in cui si può pensare agisca tutto il peso di un oggetto.'],
  [PM(9),'stable equilibrium','equilibrio stabile','Displaced slightly, the body returns to its position.','Spostato di poco, il corpo torna alla sua posizione.'],
  [PM(10),'pressure','pressione','Force spread over an area: p = F / A, in pascals.','Forza distribuita su un\'area: p = F / A, in pascal.'],
  [PM(10),'Stevin\'s law','legge di Stevino','Pressure in a liquid grows with depth: p = ρ·g·h.','La pressione in un liquido cresce con la profondità: p = ρ·g·h.'],
  [PM(11),'Archimedes\' principle','principio di Archimede','A body in a fluid feels an upward force equal to the displaced fluid\'s weight.','Un corpo in un fluido sente una spinta verso l\'alto pari al peso del fluido spostato.'],
  [PM(11),'buoyant force','spinta di Archimede','The upward push of a fluid on a submerged body.','La spinta verso l\'alto di un fluido su un corpo immerso.']
);
