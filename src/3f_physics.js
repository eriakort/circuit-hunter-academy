/* ============ PHYSICS — Il Walker, primo biennio (subject 'phys') ============
   Phase 0: the physics unit + Chapter 1, one full mission, to prove the
   subject pipeline end to end. Chapters 1–5 content follows. */

/* ---- a physics visual: the SI base units ---- */
VIS.phQuant = () => `<svg viewBox="0 0 320 180" role="img" aria-label="SI base units">
  <defs><linearGradient id="pq" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff9f45"/><stop offset="1" stop-color="#ff5d8f"/></linearGradient></defs>
  <rect x="8" y="8" width="304" height="164" rx="14" fill="var(--panel2)" stroke="var(--line)"/>
  <g transform="translate(40,54)"><rect x="-26" y="0" width="52" height="22" rx="3" fill="none" stroke="url(#pq)" stroke-width="2.5"/>${[0,1,2,3,4].map(i=>`<line x1="${-26+i*13}" y1="0" x2="${-26+i*13}" y2="${i%2?8:12}" stroke="url(#pq)" stroke-width="2"/>`).join('')}<text x="0" y="46" text-anchor="middle" fill="var(--text)" font-size="20" font-weight="700">m</text><text x="0" y="64" text-anchor="middle" fill="var(--muted)" font-size="11">metre</text></g>
  <g transform="translate(160,54)"><path d="M-22 22 h44 l-8 -22 h-28 z" fill="none" stroke="url(#pq)" stroke-width="2.5"/><circle cx="0" cy="6" r="6" fill="url(#pq)"/><text x="0" y="46" text-anchor="middle" fill="var(--text)" font-size="20" font-weight="700">kg</text><text x="0" y="64" text-anchor="middle" fill="var(--muted)" font-size="11">kilogram</text></g>
  <g transform="translate(280,54)"><circle cx="0" cy="11" r="18" fill="none" stroke="url(#pq)" stroke-width="2.5"/><line x1="0" y1="11" x2="0" y2="-1" stroke="url(#pq)" stroke-width="2.5"><animateTransform attributeName="transform" type="rotate" from="0 0 11" to="360 0 11" dur="6s" repeatCount="indefinite"/></line><line x1="0" y1="11" x2="9" y2="11" stroke="url(#pq)" stroke-width="2"/><text x="0" y="46" text-anchor="middle" fill="var(--text)" font-size="20" font-weight="700">s</text><text x="0" y="64" text-anchor="middle" fill="var(--muted)" font-size="11">second</text></g>
  <text x="160" y="152" text-anchor="middle" fill="var(--muted)" font-size="12">${L(['Length · Mass · Time — three of the seven SI base quantities','Lunghezza · Massa · Tempo — tre delle sette grandezze base del SI'])}</text>
</svg>`;

/* ---- unit + chapter 1 arc ---- */
UNITS.push({ title:['Physics · Measurement & Mechanics','Fisica · Misura e meccanica'], ch:'1–5', subject:'phys' });
const PHYS_U = UNITS.length - 1;
const PHYS_A0 = ARCS.length;
ARCS.push(
  { n:1, unit:PHYS_U, subject:'phys', title:['Physical Quantities','Le grandezze fisiche'], pages:'1–30' },
);

const PHYS_M0 = MISSIONS.length;
MISSIONS.push(
{ id:'p1m1', arc:PHYS_A0, sec:'1.1–1.3', pages:'2–18', hue:28, horns:3, eyes:2,
  title:['Measuring the World','Misurare il mondo'], topic:['Physical quantities, the SI, fundamental vs derived','Grandezze fisiche, il SI, fondamentali e derivate'],
  demon:['Unit Gremlin','Gremlin delle Unità'], tech:['Measure Form · First Technique: SI Strike','Stile della Misura · Prima Tecnica: Colpo del SI'],
  scenes:[
   {who:'s', vis:'phQuant', text:[`<p>Welcome to the physics wing, {name}. Same academy, new discipline.</p><p>Physics begins with <b>measuring</b>. A [[physical quantity|grandezza fisica]] is anything we can measure — a length, a time, a temperature. Measuring means comparing it with a [[unit of measurement|unità di misura]] and getting a number.</p>`,
     `<p>Benvenuta nell'ala di fisica, {name}. Stessa accademia, nuova disciplina.</p><p>La fisica comincia dal <b>misurare</b>. Una [[physical quantity|grandezza fisica]] è tutto ciò che possiamo misurare — una lunghezza, un tempo, una temperatura. Misurare significa confrontarla con un'[[unit of measurement|unità di misura]] e ottenere un numero.</p>`]},
   {who:'s', vis:'phQuant', text:[`<p>Scientists agree on one set of units: the [[International System|Sistema Internazionale]] (SI). It has seven [[fundamental quantities|grandezze fondamentali]] — among them <b>length</b> (metre, m), <b>mass</b> (kilogram, kg) and <b>time</b> (second, s).</p><p>Everything else is a [[derived quantity|grandezza derivata]], built from these: area is m², speed is m/s, density is kg/m³.</p><p>Very large or very small numbers are written in [[scientific notation|notazione scientifica]], like 3·10⁸ m/s.</p>`,
     `<p>Gli scienziati si accordano su un insieme di unità: il [[International System|Sistema Internazionale]] (SI). Ha sette [[fundamental quantities|grandezze fondamentali]] — tra cui <b>lunghezza</b> (metro, m), <b>massa</b> (chilogrammo, kg) e <b>tempo</b> (secondo, s).</p><p>Tutto il resto è una [[derived quantity|grandezza derivata]], costruita da queste: l'area è m², la velocità è m/s, la densità è kg/m³.</p><p>I numeri molto grandi o molto piccoli si scrivono in [[scientific notation|notazione scientifica]], come 3·10⁸ m/s.</p>`]},
   {who:'y', vis:'phQuant', text:[`<p>So the fundamental ones are the "building blocks", and the derived ones are combinations of them?</p>`,`<p>Quindi quelle fondamentali sono i "mattoni", e quelle derivate sono loro combinazioni?</p>`]},
   {who:'s', vis:'phQuant', text:[`<p>Exactly. The Unit Gremlin has scrambled a pile of quantities. Sort each one: is it <b>fundamental</b> or <b>derived</b>?</p>`,`<p>Esatto. Il Gremlin delle Unità ha mescolato un mucchio di grandezze. Smista ciascuna: è <b>fondamentale</b> o <b>derivata</b>?</p>`]},
   {type:'sort', title:['Fundamental or derived?','Fondamentale o derivata?'], cats:[['Fundamental','Fondamentale'],['Derived','Derivata']], items:[
     {n:['Length (m)','Lunghezza (m)'],i:'layers',c:0,why:['Length is one of the seven SI base quantities.','La lunghezza è una delle sette grandezze base del SI.']},
     {n:['Mass (kg)','Massa (kg)'],i:'file',c:0,why:['Mass is a fundamental SI quantity, measured in kilograms.','La massa è una grandezza fondamentale del SI, misurata in chilogrammi.']},
     {n:['Time (s)','Tempo (s)'],i:'book',c:0,why:['Time is fundamental; its unit is the second.','Il tempo è fondamentale; la sua unità è il secondo.']},
     {n:['Speed (m/s)','Velocità (m/s)'],i:'robot',c:1,why:['Speed = length ÷ time, so it is derived.','La velocità = lunghezza ÷ tempo, quindi è derivata.']},
     {n:['Area (m²)','Area (m²)'],i:'puzzle',c:1,why:['Area = length × length, a derived quantity.','L\'area = lunghezza × lunghezza, una grandezza derivata.']},
     {n:['Density (kg/m³)','Densità (kg/m³)'],i:'eye',c:1,why:['Density = mass ÷ volume, so it is derived.','La densità = massa ÷ volume, quindi è derivata.']}]},
   {who:'d', vis:'demon', text:[`<p>Grr… I'm the Unit Gremlin! I swap metres for miles and grams for ounces until nothing adds up!</p>`,`<p>Grr… Sono il Gremlin delle Unità! Scambio metri con miglia e grammi con once finché non torna più niente!</p>`]},
   {type:'battle'}],
  quiz:[
   {q:['What is a physical quantity?','Che cos\'è una grandezza fisica?'],a:[['Something that can be measured','Qualcosa che si può misurare'],['A type of atom','Un tipo di atomo'],['A unit of measurement','Un\'unità di misura'],['A scientific law','Una legge scientifica']],why:['A physical quantity is any property we can measure and express with a number and a unit.','Una grandezza fisica è una proprietà che possiamo misurare ed esprimere con un numero e un\'unità.']},
   {q:['The SI unit of length is the…','L\'unità SI della lunghezza è il…'],a:[['Metre','Metro'],['Kilogram','Chilogrammo'],['Second','Secondo'],['Litre','Litro']],why:['Length is measured in metres (m) in the SI.','La lunghezza si misura in metri (m) nel SI.']},
   {q:['Which of these is a fundamental quantity?','Quale di queste è una grandezza fondamentale?'],a:[['Mass','Massa'],['Speed','Velocità'],['Area','Area'],['Density','Densità']],why:['Mass is one of the seven SI base quantities; the others are derived.','La massa è una delle sette grandezze base del SI; le altre sono derivate.']},
   {q:['Speed (m/s) is a derived quantity because…','La velocità (m/s) è una grandezza derivata perché…'],a:[['It combines length and time','Combina lunghezza e tempo'],['It cannot be measured','Non si può misurare'],['It has no unit','Non ha unità'],['It is always constant','È sempre costante']],why:['Speed = length ÷ time, so it is built from fundamental quantities.','La velocità = lunghezza ÷ tempo, quindi è costruita da grandezze fondamentali.']},
   {q:['How do you write 300 000 000 in scientific notation?','Come si scrive 300.000.000 in notazione scientifica?'],a:[['3 × 10⁸','3 × 10⁸'],['3 × 10⁶','3 × 10⁶'],['30 × 10⁷','30 × 10⁷'],['0.3 × 10⁹','0,3 × 10⁹']],why:['Move the point so one non-zero digit stays before it: 3 × 10⁸.','Si sposta la virgola lasciando una cifra diversa da zero davanti: 3 × 10⁸.']},
   {q:['Why does science use the International System (SI)?','Perché la scienza usa il Sistema Internazionale (SI)?'],a:[['So measurements are comparable everywhere','Così le misure sono confrontabili ovunque'],['Because it is older','Perché è più antico'],['To make physics harder','Per rendere la fisica più difficile'],['Only Italy uses it','Lo usa solo l\'Italia']],why:['A shared set of units lets scientists everywhere compare results.','Un insieme di unità condiviso permette a tutti gli scienziati di confrontare i risultati.']},
  ]}
);

CODEX.push(
  [PHYS_M0,'physical quantity','grandezza fisica','A property that can be measured and expressed with a number and a unit.','Una proprietà che si può misurare ed esprimere con un numero e un\'unità.'],
  [PHYS_M0,'unit of measurement','unità di misura','A reference amount a quantity is compared with (e.g. the metre).','Una quantità di riferimento con cui si confronta una grandezza (es. il metro).'],
  [PHYS_M0,'International System','Sistema Internazionale','The SI: the agreed set of units used by scientists worldwide.','Il SI: l\'insieme di unità condiviso dagli scienziati di tutto il mondo.'],
  [PHYS_M0,'fundamental quantities','grandezze fondamentali','The seven SI base quantities (length, mass, time, …) from which others are built.','Le sette grandezze base del SI (lunghezza, massa, tempo, …) da cui si costruiscono le altre.'],
  [PHYS_M0,'derived quantity','grandezza derivata','A quantity built from fundamental ones, like speed (m/s) or density (kg/m³).','Una grandezza costruita da quelle fondamentali, come velocità (m/s) o densità (kg/m³).'],
  [PHYS_M0,'scientific notation','notazione scientifica','Writing a number as a value between 1 and 10 times a power of ten.','Scrivere un numero come un valore tra 1 e 10 per una potenza di dieci.']
);
