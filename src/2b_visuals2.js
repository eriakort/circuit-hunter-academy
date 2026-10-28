
/* ============ v3: code highlighting + extra icons + visuals for chapters 6–16 ============ */
const escH=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function hl(src){
  return escH(src).replace(/(#.*$)|("[^"\n]*"|'[^'\n]*')|\b(def|return|if|elif|else|for|while|in|not|and|or|True|False|None|import|from|with|as|match|case|break|continue|pass)\b|\b(print|input|int|float|str|bool|len|range|type|open|round|abs|max|min|sum)\b(?=\()|\b(\d+(?:\.\d+)?)\b/gm,
    (m,c,s,k,f,n)=>c?`<span class="c">${c}</span>`:s?`<span class="s">${s}</span>`:k?`<span class="k">${k}</span>`:f?`<span class="f">${f}</span>`:`<span class="n">${n}</span>`);
}
const CODE = src => `<pre class="code">${hl(L(src))}</pre>`;
Object.assign(ICONS,{
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M7 14h3v3H7z"/>',
  camera:'<rect x="2" y="7" width="15" height="11" rx="2"/><path d="M17 11l5-3v9l-5-3z"/>',
  table:'<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 9h18M3 14h18M9 4v16M15 4v16"/>',
  slide:'<rect x="2" y="4" width="20" height="13" rx="1"/><path d="M12 17v4M8 21h8M6 8h8M6 12h5"/>',
  code:'<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
  bug:'<ellipse cx="12" cy="13" rx="5" ry="7"/><path d="M12 6V3M7 10H3M7 15H3M17 10h4M17 15h4M9 4l1 2M15 4l-1 2"/>',
  chart:'<path d="M3 20h18M6 16v-5M11 16V7M16 16v-8M20 16v-3"/>',
  ergo:'<circle cx="8" cy="4" r="2"/><path d="M8 6v7h6l2 7M8 13l-3 7M12 9h9M17 9v-5"/>',
  vpn:'<rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><path d="M12 15v2"/>',
  wall:'<rect x="2" y="4" width="20" height="16"/><path d="M2 9h20M2 14h20M8 4v5M16 4v5M5 9v5M12 9v5M19 9v5M8 14v6M16 14v6"/>',
  update:'<path d="M20 12a8 8 0 1 1-3-6.3M20 4v5h-5"/>',
  share:'<circle cx="6" cy="12" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M8.6 10.5l6.8-3.5M8.6 13.5l6.8 3.5"/>',
  python:'<path d="M12 3c-4 0-4 2-4 3v2h4v1H6c-2 0-3 1.5-3 4s1 4 3 4h2v-2c0-2 1-3 3-3h4c1.5 0 2-1 2-2V6c0-2-2-3-5-3z"/><path d="M12 21c4 0 4-2 4-3v-2h-4v-1h6c2 0 3-1.5 3-4"/><circle cx="10" cy="5.5" r=".5"/>',
  flow:'<rect x="8" y="2" width="8" height="4" rx="2"/><path d="M12 6v3M12 9l4 3-4 3-4-3zM12 15v3"/><rect x="8" y="18" width="8" height="4"/>',
  loop:'<path d="M17 2l3 3-3 3"/><path d="M4 11V9a4 4 0 0 1 4-4h12M7 22l-3-3 3-3"/><path d="M20 13v2a4 4 0 0 1-4 4H4"/>',
  woman:'<circle cx="12" cy="7" r="4"/><path d="M5 21a7 7 0 0 1 14 0M8 7c0-4 8-4 8 0"/>',
  queue:'<rect x="2" y="9" width="5" height="6" rx="1"/><rect x="9.5" y="9" width="5" height="6" rx="1"/><rect x="17" y="9" width="5" height="6" rx="1"/>',
  stack:'<rect x="6" y="3" width="12" height="5" rx="1"/><rect x="6" y="10" width="12" height="5" rx="1"/><rect x="6" y="17" width="12" height="5" rx="1"/>',
});
Object.assign(VIS,{
/* ---------- Ch 6 security ---------- */
cia(){ return cards([
  ['lock',['Confidentiality','Riservatezza'],['Only the right people can read the data.','Solo le persone autorizzate possono leggere i dati.']],
  ['shield',['Integrity','Integrità'],['Data is not changed or damaged without permission.','I dati non vengono modificati o danneggiati senza permesso.']],
  ['power',['Availability','Disponibilità'],['Data and services work when you need them.','Dati e servizi funzionano quando servono.']],
  ['warn',['Threats','Minacce'],['Human mistakes, attacks by criminals, breakdowns, fires and floods.','Errori umani, attacchi di criminali, guasti, incendi e alluvioni.']],
]);},
pwdtips(){ return cards([
  ['key',['Long','Lunga'],['At least 12 characters. A passphrase like "Ramen!Sotto-la-Luna7" is strong and easy to remember.','Almeno 12 caratteri. Una frase come "Ramen!Sotto-la-Luna7" è forte e facile da ricordare.']],
  ['layers',['Mixed','Varia'],['Upper and lower case letters, numbers and symbols.','Maiuscole, minuscole, numeri e simboli.']],
  ['warn',['Not personal','Non personale'],['No names, birthdays, pets, "123456" or "password".','Niente nomi, compleanni, animali, "123456" o "password".']],
  ['lock',['One per account + 2FA','Una per account + 2FA'],['Never reuse passwords. Two-factor authentication adds a code from your phone.','Non riusare le password. L\'autenticazione a due fattori aggiunge un codice dal telefono.']],
]);},
malware(){ return cards([
  ['bug',['Virus','Virus'],['Attaches to files and spreads when they are opened.','Si attacca ai file e si diffonde quando vengono aperti.']],
  ['share',['Worm','Worm'],['Copies itself across networks by itself.','Si copia da solo attraverso le reti.']],
  ['gamepad',['Trojan horse','Cavallo di Troia'],['Looks like a useful program but hides malware.','Sembra un programma utile ma nasconde un malware.']],
  ['lock',['Ransomware','Ransomware'],['Encrypts your files and demands money to unlock them.','Cifra i tuoi file e chiede un riscatto per sbloccarli.']],
  ['eye',['Spyware','Spyware'],['Secretly watches what you do and steals data.','Spia di nascosto cosa fai e ruba dati.']],
  ['image',['Adware','Adware'],['Floods you with unwanted ads.','Ti riempie di pubblicità indesiderata.']],
]);},
netsec(){ return cards([
  ['shield',['Antivirus','Antivirus'],['Scans files and blocks known malware. Keep it updated.','Analizza i file e blocca i malware conosciuti. Va tenuto aggiornato.']],
  ['wall',['Firewall','Firewall'],['A filter that decides which network traffic may enter or leave.','Un filtro che decide quale traffico di rete può entrare o uscire.']],
  ['wifi',['Protected Wi-Fi','Wi-Fi protetto'],['Use WPA2/WPA3 encryption and change the router\'s default password.','Usa la cifratura WPA2/WPA3 e cambia la password predefinita del router.']],
  ['update',['Updates','Aggiornamenti'],['Updates fix security holes. Install them!','Gli aggiornamenti chiudono le falle di sicurezza. Installali!']],
]);},
safeweb(){ return cards([
  ['lock',['HTTPS padlock','Lucchetto HTTPS'],['Type passwords only on encrypted sites.','Inserisci password solo su siti cifrati.']],
  ['eye',['Cookies & privacy','Cookie e privacy'],['Cookies remember you; accept only the necessary ones.','I cookie ti ricordano; accetta solo quelli necessari.']],
  ['wifi',['Public Wi-Fi','Wi-Fi pubblico'],['Avoid logging in to important accounts on open networks.','Evita di accedere ad account importanti su reti aperte.']],
  ['file',['Downloads','Download'],['Download only from official sites and stores.','Scarica solo da siti e store ufficiali.']],
]);},
backup(){
  return `<div class="grid3">${[['3',['copies of your data','copie dei dati'],['the original + 2 backups','l\'originale + 2 backup']],['2',['different media','supporti diversi'],['e.g. laptop + external disk','es. portatile + disco esterno']],['1',['copy off-site','copia altrove'],['e.g. in the cloud','es. nel cloud']]].map(([n,a,b])=>`<div class="mini" style="align-items:center;text-align:center"><b style="font-family:var(--display);font-size:42px;color:var(--gold);font-weight:400">${n}</b><b>${L(a)}</b><span>${L(b)}</span></div>`).join('')}</div>
   <p class="muted" style="margin-top:10px;font-size:14px;text-align:center">${L(['The 3-2-1 backup rule','La regola del backup 3-2-1'])}</p>`;
},
vpn(){
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
/* ---------- Ch 7 cloud ---------- */
cloudmodels(){ return cards([
  ['app',['SaaS · Software as a Service','SaaS · Software come servizio'],['Ready apps in the browser: webmail, online office, school platforms.','App pronte nel browser: webmail, office online, piattaforme scolastiche.']],
  ['layers',['PaaS · Platform','PaaS · Piattaforma'],['A platform where developers build and run their own apps.','Una piattaforma dove gli sviluppatori creano ed eseguono le loro app.']],
  ['hdd',['IaaS · Infrastructure','IaaS · Infrastruttura'],['Rented servers, storage and networks.','Server, memoria e reti in affitto.']],
  ['warn',['Pros & cons','Pro e contro'],['Use from any device and never lose files; but you need internet and you trust someone else with your data.','Usi qualsiasi dispositivo e non perdi i file; ma serve internet e affidi i tuoi dati a qualcun altro.']],
]);},
share(){
  const P=[[['Viewer','Visualizzatore'],['can only read','può solo leggere']],[['Commenter','Commentatore'],['can read and add comments','può leggere e commentare']],[['Editor','Editor'],['can change the file','può modificare il file']]];
  return `<div class="panel" style="max-width:520px;margin:0 auto"><div class="row" style="justify-content:space-between"><b>${ICON('folder','ico" style="width:20px;height:20px;vertical-align:-4px;color:var(--data)')} ${L(['Science project','Progetto di scienze'])}</b><span class="badge go">${L(['Share','Condividi'])}</span></div>
   ${[['Hana','Editor'],['Luca',L(['Commenter','Commentatore'])],[L(['Teacher','Prof.']),L(['Viewer','Visualizzatore'])]].map(([n,r])=>`<div class="row" style="justify-content:space-between;margin-top:8px;border-top:1px solid var(--line);padding-top:8px"><span>${ICON('user','ico" style="width:18px;height:18px;vertical-align:-3px')} ${n}</span><span class="muted">${r}</span></div>`).join('')}</div>
   <div class="legend">${P.map((p,i)=>`<div style="--c:${[C.data,C.gold,C.ember][i]}"><i></i><span><b>${L(p[0])}</b> · ${L(p[1])}</span></div>`).join('')}</div>`;
},
calendar(){
  const d=L([['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],['Lun','Mar','Mer','Gio','Ven','Sab','Dom']]);
  const ev={3:L(['Maths test','Verifica mate']),9:L(['Group call 16:00','Call di gruppo 16:00']),12:L(['Hand in project','Consegna progetto'])};
  return `<div class="cal">${d.map(x=>`<div class="h">${x}</div>`).join('')}${Array.from({length:14},(_,i)=>`<div>${i+1}${ev[i+1]?`<em>${ev[i+1]}</em>`:''}</div>`).join('')}</div>
   <p class="muted" style="text-align:center;margin-top:8px;font-size:14px">${L(['A shared calendar: everyone in the group sees the same events and gets reminders.','Un calendario condiviso: tutto il gruppo vede gli stessi eventi e riceve promemoria.'])}</p>`;
},
videocall(){ return cards([
  ['camera',['Camera & mic','Webcam e microfono'],['Mute when you\'re not speaking. Check your background.','Silenzia il microfono quando non parli. Controlla lo sfondo.']],
  ['share',['Share screen','Condividi schermo'],['Show a document or slides to everyone.','Mostra un documento o le slide a tutti.']],
  ['mail',['Chat & hand raise','Chat e alzata di mano'],['Ask questions without interrupting.','Fai domande senza interrompere.']],
  ['recycle',['Environment','Ambiente'],['Calls avoid travel and its CO₂, but data centres also use energy.','Le call evitano viaggi e CO₂, ma anche i data center consumano energia.']],
]);},
/* ---------- Ch 8 word processing ---------- */
wp(){
  return `<div class="panel" style="padding:10px"><div class="toolbar" style="justify-content:flex-start;margin-bottom:8px"><button>B</button><button><i>I</i></button><button><u>U</u></button><select aria-label="size"><option>12</option></select><button>≡</button><button>${ICON('image','ico" style="width:16px;height:16px')}</button><button>${ICON('table','ico" style="width:16px;height:16px')}</button></div>
   <div class="doc"><h3 class="t" style="text-align:center;font-family:Georgia,serif;font-size:22px">${L(['The Glitch Report','Il rapporto Glitch'])}</h3><p class="bd" style="text-align:justify">${L(['A word processor lets you write, edit and format text: <b>bold</b>, <i>italic</i>, <u>underline</u>, font size, alignment, paragraphs, lists and styles.','Un programma di videoscrittura ti permette di scrivere, modificare e formattare il testo: <b>grassetto</b>, <i>corsivo</i>, <u>sottolineato</u>, dimensione del carattere, allineamento, paragrafi, elenchi e stili.'])}</p></div></div>`;
},
wpformats(){ return cards([
  ['file',['.docx / .odt','.docx / .odt'],['Editable documents (Word / LibreOffice Writer).','Documenti modificabili (Word / LibreOffice Writer).']],
  ['book',['.pdf','.pdf'],['Looks the same on every device; good for sending and printing.','Appare uguale su ogni dispositivo; ideale per inviare e stampare.']],
  ['search',['Find & replace','Trova e sostituisci'],['Change a word everywhere in one go.','Cambia una parola ovunque in un colpo solo.']],
  ['update',['Undo (Ctrl+Z)','Annulla (Ctrl+Z)'],['Your best friend when something goes wrong.','La tua migliore amica quando qualcosa va storto.']],
]);},
wpextra(){ return cards([
  ['image',['Images','Immagini'],['Insert, resize and choose text wrapping (around, behind, in line).','Inserisci, ridimensiona e scegli il testo a capo (intorno, dietro, in linea).']],
  ['table',['Tables','Tabelle'],['Rows and columns of cells; you can merge cells and add borders.','Righe e colonne di celle; puoi unire celle e aggiungere bordi.']],
  ['bolt',['Symbols & equations','Simboli ed equazioni'],['Insert Ω, ≠, π and use the equation editor for maths.','Inserisci Ω, ≠, π e usa l\'editor di equazioni per la matematica.']],
  ['share',['Share, link, export','Condividi, collega, esporta'],['Add hyperlinks, export to PDF, print, or send by email.','Aggiungi link, esporta in PDF, stampa o invia per e-mail.']],
]);},
ergo(){
  return `<svg viewBox="0 0 640 260" class="dia" role="img" aria-label="Good posture at a computer">
   <rect x="380" y="60" width="150" height="100" rx="6" fill="#10283a" stroke="${C.data}" stroke-width="3"/><rect x="445" y="160" width="20" height="40" fill="${C.line}"/><rect x="300" y="200" width="300" height="10" fill="${C.line}"/>
   <circle cx="160" cy="70" r="24" fill="#e8c4a8"/><path d="M160 94 V170 M160 120 L230 150 L300 190 M160 170 L240 170 L240 240 M160 170 L160 240" stroke="#e8c4a8" stroke-width="12" stroke-linecap="round" fill="none"/>
   <rect x="120" y="170" width="70" height="10" fill="${C.muted}"/><rect x="185" y="100" width="10" height="80" fill="${C.muted}"/>
   <path d="M184 66 L380 66" stroke="${C.gold}" stroke-width="2" stroke-dasharray="6 6"/><text x="282" y="58" text-anchor="middle" style="fill:${C.gold};font-size:12px">${L(['top of screen at eye level','bordo alto dello schermo all\'altezza degli occhi'])}</text>
   <path d="M184 120 L380 120" stroke="${C.data}" stroke-width="2"/><text x="282" y="112" text-anchor="middle" style="fill:${C.data};font-size:12px">${L(['about 50–70 cm','circa 50–70 cm'])}</text>
   <text x="240" y="236" class="sm">${L(['feet flat, back supported','piedi a terra, schiena appoggiata'])}</text></svg>
   <p class="muted" style="text-align:center;font-size:14px">${L(['20-20-20: every 20 minutes, look at something 20 feet (about 6 m) away for 20 seconds.','20-20-20: ogni 20 minuti guarda qualcosa a 6 metri di distanza per 20 secondi.'])}</p>`;
},
/* ---------- Ch 9 spreadsheets ---------- */
sheetvis(){
  const rows=[[L(['Item','Voce']),'€'],[L(['Phone','Telefono']),'15'],[L(['Snacks','Merende']),'20'],['Bus','12'],[L(['Total','Totale']),'=SUM(B2:B4)']];
  return `<div class="fbar" style="margin:0 auto 10px"><b>B5</b><input value="=SUM(B2:B4)" readonly aria-label="formula bar"></div>
   <div class="sheetwrap"><table class="sheet"><tr><th></th><th>A</th><th style="background:#ffe9a8">B</th><th>C</th></tr>
   ${rows.map((r,i)=>`<tr><th ${i===2?'style="background:#ffe9a8"':''}>${i+1}</th><td class="txt">${r[0]}</td><td class="${i===4?'task':''}" ${i===2?'style="background:#fff6d6"':''}>${i===4?'47':r[1]}</td><td></td></tr>`).join('')}</table></div>
   <p class="muted" style="text-align:center;font-size:14px;margin-top:8px">${L(['Columns are letters, rows are numbers. B3 is column B, row 3. Formulas start with =.','Le colonne sono lettere, le righe numeri. B3 è colonna B, riga 3. Le formule iniziano con =.'])}</p>`;
},
charts(){
  const v=[15,20,12];
  return `<svg viewBox="0 0 640 210" class="dia" role="img" aria-label="Bar, pie and line charts">
   ${v.map((x,i)=>`<rect x="${40+i*50}" y="${160-x*5}" width="34" height="${x*5}" fill="${[C.data,C.gold,C.ember][i]}"/>`).join('')}<line x1="30" y1="160" x2="200" y2="160" stroke="${C.muted}"/>
   <text x="115" y="190" text-anchor="middle" class="sm">${L(['bar: compare values','istogramma: confronta valori'])}</text>
   <circle cx="320" cy="100" r="60" fill="${C.data}"/><path d="M320 100 L320 40 A60 60 0 0 1 377 118 Z" fill="${C.gold}"/><path d="M320 100 L377 118 A60 60 0 0 1 300 157 Z" fill="${C.ember}"/>
   <text x="320" y="190" text-anchor="middle" class="sm">${L(['pie: parts of a whole','torta: parti di un intero'])}</text>
   <polyline points="450,140 490,120 530,130 570,80 610,60" fill="none" stroke="${C.good}" stroke-width="4"/><line x1="440" y1="160" x2="620" y2="160" stroke="${C.muted}"/>
   <text x="530" y="190" text-anchor="middle" class="sm">${L(['line: change over time','linee: andamento nel tempo'])}</text></svg>`;
},
autofill(){
  return `<div class="twocol"><div class="panel"><h3>${H('Relative reference','Riferimento relativo')}</h3><p class="code" style="white-space:pre">B2: =A2*9/5+32
B3: =A3*9/5+32
B4: =A4*9/5+32</p><p class="muted" style="font-size:14px;margin-top:6px">${L(['Drag the fill handle down: the row number changes by itself.','Trascina il quadratino di riempimento: il numero di riga cambia da solo.'])}</p></div>
   <div class="panel"><h3>${H('Absolute reference','Riferimento assoluto')}</h3><p class="code" style="white-space:pre">B11: =A11*(1-$B$10)
B12: =A12*(1-$B$10)
B13: =A13*(1-$B$10)</p><p class="muted" style="font-size:14px;margin-top:6px">${L(['The $ locks the cell: B10 (the discount) stays fixed.','Il $ blocca la cella: B10 (lo sconto) resta fisso.'])}</p></div></div>`;
},
sheetfn(){ return cards([
  ['chart',['SUM · AVERAGE · MAX · MIN','SOMMA · MEDIA · MAX · MIN'],['Totals, averages, highest and lowest value of a range.','Totale, media, valore massimo e minimo di un intervallo.']],
  ['scale',['IF','SE'],['=IF(B2>=6;"OK";"NO") chooses between two results.','=SE(B2>=6;"OK";"NO") sceglie tra due risultati.']],
  ['layers',['AND · OR','E · O'],['Combine conditions: =AND(B2>=6;C2>=6).','Combinano condizioni: =E(B2>=6;C2>=6).']],
  ['gear',['What-if & simulation','Analisi what-if e simulazioni'],['Change one input (e.g. birth rate) and watch the whole model update.','Cambia un dato (es. natalità) e guarda tutto il modello aggiornarsi.']],
  ['chip',['DEC2BIN · BIN2DEC','DECIMALE.BINARIO · BINARIO.DECIMALE'],['Convert numbers between decimal and binary.','Convertono numeri tra decimale e binario.']],
  ['user',['Gini index','Indice di Gini'],['Measures inequality: 0 = everyone has the same, 1 = one person has everything.','Misura la disuguaglianza: 0 = tutti hanno lo stesso, 1 = una persona ha tutto.']],
]);},
/* ---------- Ch 10 presentations ---------- */
slides(){
  return `<div class="twocol"><div><div class="eyebrow" style="color:var(--bad);margin-bottom:6px">${L(['Bad slide','Slide sbagliata'])}</div>
   <div class="slide" style="background:#ffef3b;color:#ff3df2"><h4 style="font-family:cursive">${L(['MY PROJECT ABOUT VOLCANOES!!!','IL MIO PROGETTO SUI VULCANI!!!'])}</h4><p>${L(['Volcanoes are openings in the Earth\'s crust where magma, gases and ash escape. There are many types such as shield volcanoes, stratovolcanoes, cinder cones and calderas, and they form at plate boundaries or hotspots, and eruptions can be explosive or effusive depending on…','I vulcani sono aperture nella crosta terrestre da cui escono magma, gas e cenere. Ne esistono molti tipi come vulcani a scudo, stratovulcani, coni di scorie e caldere, e si formano ai margini delle placche o nei punti caldi, e le eruzioni possono essere esplosive o effusive a seconda…'])}</p></div></div>
   <div><div class="eyebrow" style="color:var(--good);margin-bottom:6px">${L(['Good slide','Slide efficace'])}</div>
   <div class="slide" style="background:#14213d;color:#fff"><h4>${L(['Two kinds of eruption','Due tipi di eruzione'])}</h4><p style="font-size:12px">• ${L(['Explosive: ash and gas','Esplosiva: cenere e gas'])}<br>• ${L(['Effusive: lava flows','Effusiva: colate di lava'])}</p><div style="flex:1;border-radius:6px;background:linear-gradient(135deg,#e85d04,#370617)"></div></div></div></div>`;
},
slidetips(){ return cards([
  ['slide',['Few words','Poche parole'],['Key points only; you do the talking.','Solo i punti chiave; il resto lo dici tu.']],
  ['eye',['Contrast','Contrasto'],['Dark text on light background, or the opposite. Big fonts.','Testo scuro su sfondo chiaro, o viceversa. Caratteri grandi.']],
  ['layers',['Theme / master','Tema / schema'],['One consistent style for all slides.','Uno stile coerente per tutte le slide.']],
  ['image',['Images with credit','Immagini con fonte'],['Use images you may use, and say where they come from.','Usa immagini che puoi usare e indica la fonte.']],
]);},
slidefx(){ return cards([
  ['slide',['Transition','Transizione'],['The effect BETWEEN one slide and the next.','L\'effetto TRA una slide e la successiva.']],
  ['bolt',['Animation','Animazione'],['The effect on an OBJECT inside a slide (a title flying in).','L\'effetto su un OGGETTO dentro la slide (un titolo che entra).']],
  ['video',['Audio & video','Audio e video'],['Embed short clips; check they play before presenting.','Inserisci brevi clip; prova che funzionino prima di presentare.']],
  ['share',['Presenting remotely','Presentare a distanza'],['Share your screen in a video call; presenter view shows your notes.','Condividi lo schermo in videochiamata; la visualizzazione relatore mostra le tue note.']],
  ['chart',['Open data','Open data'],['Public data (e.g. from ISTAT) anyone can use in charts and reports.','Dati pubblici (es. dell\'ISTAT) che chiunque può usare in grafici e relazioni.']],
  ['globe',['Prezi','Prezi'],['A zooming canvas instead of a row of slides.','Una tela con zoom invece di una fila di slide.']],
]);},
/* ---------- Ch 11 structured programming ---------- */
flowsym(){
  const y=60;
  return `<svg viewBox="0 0 640 170" class="dia" role="img" aria-label="Flowchart symbols">
   <rect x="20" y="${y-25}" width="120" height="50" rx="25" fill="#262a5e" stroke="${C.good}" stroke-width="3"/><text x="80" y="${y+5}" text-anchor="middle">START / END</text>
   <polygon points="190,${y-25} 320,${y-25} 300,${y+25} 170,${y+25}" fill="#262a5e" stroke="${C.sak}" stroke-width="3"/><text x="245" y="${y+5}" text-anchor="middle">INPUT / OUTPUT</text>
   <rect x="350" y="${y-25}" width="120" height="50" fill="#262a5e" stroke="${C.data}" stroke-width="3"/><text x="410" y="${y+5}" text-anchor="middle">x ← x + 1</text>
   <polygon points="560,${y-34} 620,${y} 560,${y+34} 500,${y}" fill="#262a5e" stroke="${C.gold}" stroke-width="3"/><text x="560" y="${y+5}" text-anchor="middle">x > 5 ?</text>
   ${[[80,L(['terminal (oval)','terminale (ovale)'])],[245,L(['input/output (parallelogram)','input/output (parallelogramma)'])],[410,L(['process (rectangle)','elaborazione (rettangolo)'])],[560,L(['decision (rhombus)','decisione (rombo)'])]].map(([x,t])=>`<text x="${x}" y="130" text-anchor="middle" class="sm">${t}</text>`).join('')}</svg>`;
},
flowex(){
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
structures(){
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
pioneers(){ return cards([
  ['woman',['Ada Lovelace (1815–1852)','Ada Lovelace (1815–1852)'],['Wrote what is considered the first computer program, for Babbage\'s Analytical Engine (1843).','Scrisse quello che è considerato il primo programma, per la Macchina Analitica di Babbage (1843).']],
  ['woman',['Grace Hopper (1906–1992)','Grace Hopper (1906–1992)'],['Built one of the first compilers and helped create COBOL.','Realizzò uno dei primi compilatori e contribuì a creare il COBOL.']],
  ['bug',['The first "bug" (1947)','Il primo "bug" (1947)'],['A real moth found stuck in the Harvard Mark II computer and taped into the log book.','Una vera falena trovata incastrata nel computer Harvard Mark II e attaccata al registro.']],
  ['woman',['Margaret Hamilton','Margaret Hamilton'],['Led the team that wrote the software for the Apollo Moon missions.','Guidò il team che scrisse il software delle missioni Apollo sulla Luna.']],
]);},
/* ---------- Ch 12 programming basics ---------- */
langlevels(){
  const Lv=[[['High-level language','Linguaggio ad alto livello'],'print("Hi")',C.good],[['Assembly','Assembly'],'MOV AL, 48h',C.gold],[['Machine language','Linguaggio macchina'],'10110000 01001000',C.ember]];
  return `<div class="stack">${Lv.map((l,i)=>`${i?'<div class="arrowdown"><i></i></div>':''}<div class="layer" style="background:${l[2]}">${L(l[0])}<small style="font-family:ui-monospace,monospace">${l[1]}</small></div>`).join('')}</div>
   <p class="muted" style="text-align:center;margin-top:8px;font-size:14px">${L(['Top: easy for people. Bottom: what the CPU actually runs.','In alto: facile per le persone. In basso: ciò che la CPU esegue davvero.'])}</p>`;
},
compinterp(){
  return `<div class="twocol"><div class="panel"><h3>${H('Compiler','Compilatore')}</h3><p>${L(['Translates the WHOLE program into machine code first, then you run it. Fast to run. (C, C++)','Traduce TUTTO il programma in linguaggio macchina, poi lo esegui. Veloce in esecuzione. (C, C++)'])}</p></div>
   <div class="panel"><h3>${H('Interpreter','Interprete')}</h3><p>${L(['Translates and runs the program ONE LINE at a time. Easy to test. (Python)','Traduce ed esegue il programma UNA RIGA alla volta. Facile da provare. (Python)'])}</p></div></div>`;
},
pytypes(){ return `<div class="ops">${[['int','7, -3, 2026'],['float','3.14, 0.5'],['str','"Hana", \'42\''],['bool','True, False']].map(([t,e])=>`<div><b>${t}</b>${e}</div>`).join('')}</div>`;},
pyops(){ return `<div class="ops">${[['+',L(['add','somma'])],['-',L(['subtract','sottrae'])],['*',L(['multiply','moltiplica'])],['/',L(['divide (float)','divide (decimale)'])],['//',L(['integer division','divisione intera'])],['%',L(['remainder','resto'])],['**',L(['power','potenza'])],['==',L(['equal to','uguale a'])],['!=',L(['not equal','diverso da'])],['< <= > >=',L(['compare','confronti'])],['+=',L(['add and assign','somma e assegna'])],['and or not',L(['logic','logica'])]].map(([o,t])=>`<div><b>${o}</b>${t}</div>`).join('')}</div>`;},
/* ---------- Ch 13 selection ---------- */
gatesvis(){
  return `<svg viewBox="0 0 640 200" class="dia" role="img" aria-label="AND, OR, NOT logic gates">
   <path d="M60 40 H110 A40 40 0 0 1 110 120 H60 Z" fill="#262a5e" stroke="${C.data}" stroke-width="3"/><text x="95" y="86" text-anchor="middle">AND</text>
   <path d="M260 40 Q330 40 360 80 Q330 120 260 120 Q285 80 260 40 Z" fill="#262a5e" stroke="${C.gold}" stroke-width="3"/><text x="315" y="86" text-anchor="middle">OR</text>
   <path d="M480 45 L550 80 L480 115 Z" fill="#262a5e" stroke="${C.sak}" stroke-width="3"/><circle cx="558" cy="80" r="8" fill="#262a5e" stroke="${C.sak}" stroke-width="3"/><text x="505" y="86" text-anchor="middle" style="font-size:12px">NOT</text>
   <text x="95" y="160" text-anchor="middle" class="sm">${L(['1 only if BOTH are 1','1 solo se ENTRAMBI sono 1'])}</text>
   <text x="310" y="160" text-anchor="middle" class="sm">${L(['1 if AT LEAST ONE is 1','1 se ALMENO UNO è 1'])}</text>
   <text x="520" y="160" text-anchor="middle" class="sm">${L(['flips 0 ↔ 1','inverte 0 ↔ 1'])}</text></svg>`;
},
/* ---------- Ch 14 loops ---------- */
rangevis(){
  return `<div class="idx">${[0,1,2,3,4].map(i=>`<div><b>${i}</b></div>`).join('')}</div>
   <p style="text-align:center;margin-top:8px;font-family:ui-monospace,monospace">range(5) → 0, 1, 2, 3, 4 · range(2, 8, 2) → 2, 4, 6</p>
   <p class="muted" style="text-align:center;font-size:14px">${L(['The stop number is never included!','Il numero finale non è mai incluso!'])}</p>`;
},
climate(){ return cards([
  ['cloud',['Climate models','Modelli climatici'],['Supercomputers divide the planet into a grid and repeat the physics equations for every cell, step after step: a giant loop.','I supercomputer dividono il pianeta in una griglia e ripetono le equazioni della fisica per ogni cella, passo dopo passo: un ciclo gigante.']],
  ['loop',['Iterative design','Progettazione iterativa'],['Build → test → improve → repeat. Designers work in loops too.','Costruisci → prova → migliora → ripeti. Anche i progettisti lavorano a cicli.']],
  ['warn',['Infinite loop','Ciclo infinito'],['If the while condition never becomes False, the loop never ends.','Se la condizione del while non diventa mai False, il ciclo non finisce mai.']],
]);},
/* ---------- Ch 15 strings & lists ---------- */
strindex(){
  const w='PYTHON';
  return `<div class="idx">${w.split('').map((c,i)=>`<div><small>${i}</small><b>${c}</b><small class="neg">${i-w.length}</small></div>`).join('')}</div>
   <pre class="code" style="margin-top:10px">${hl('s = "PYTHON"\nprint(s[0])     # P\nprint(s[-1])    # N\nprint(s[1:4])   # YTH\nprint(len(s))   # 6')}</pre>`;
},
listvis(){
  return `<div class="twocol"><div><div class="eyebrow" style="margin-bottom:6px">${L(['list','lista'])}</div><div class="idx">${['"Hana"','"Luca"','"Sara"'].map((c,i)=>`<div><small>${i}</small><b style="width:auto;padding:0 8px;font-size:14px">${c}</b></div>`).join('')}</div>
   <pre class="code" style="margin-top:8px">${hl('team = ["Hana", "Luca", "Sara"]\nteam.append("Ren")\nprint(len(team))   # 4')}</pre></div>
   <div><div class="eyebrow" style="margin-bottom:6px">${L(['matrix (list of lists)','matrice (lista di liste)'])}</div>
   <pre class="code">${hl('m = [[1, 2, 3],\n     [4, 5, 6]]\nprint(m[1][0])   # 4')}</pre></div></div>`;
},
/* ---------- Ch 16 functions ---------- */
funcvis(){
  return `<svg viewBox="0 0 640 170" class="dia" role="img" aria-label="A function takes parameters and returns a result">
   <rect x="20" y="60" width="130" height="50" rx="8" fill="#262a5e" stroke="${C.data}" stroke-width="2"/><text x="85" y="90" text-anchor="middle">3, 4</text><text x="85" y="135" text-anchor="middle" class="sm">${L(['arguments','argomenti'])}</text>
   <path d="M150 85 H230" stroke="${C.data}" stroke-width="3" class="flow"/>
   <rect x="230" y="40" width="180" height="90" rx="12" fill="#3b2440" stroke="${C.ember}" stroke-width="3"/><text x="320" y="80" text-anchor="middle" style="font-family:ui-monospace,monospace">area(b, h)</text><text x="320" y="104" text-anchor="middle" class="sm">return b * h</text>
   <path d="M410 85 H490" stroke="${C.gold}" stroke-width="3" class="flow"/>
   <rect x="490" y="60" width="130" height="50" rx="8" fill="#262a5e" stroke="${C.gold}" stroke-width="2"/><text x="555" y="90" text-anchor="middle">12</text><text x="555" y="135" text-anchor="middle" class="sm">${L(['return value','valore restituito'])}</text></svg>`;
},
fifolifo(){
  return `<div class="twocol"><div class="panel"><h3>${H('Stack (LIFO)','Pila (LIFO)')}</h3><div class="sq v"><span>A</span><span>B</span><span class="out">C</span></div><p style="margin-top:8px">${L(['Last In, First Out: like a pile of plates. The Undo button works like this.','Last In, First Out (l\'ultimo entrato è il primo a uscire): come una pila di piatti. Il tasto Annulla funziona così.'])}</p></div>
   <div class="panel"><h3>${H('Queue (FIFO)','Coda (FIFO)')}</h3><div class="sq"><span class="out">A</span><span>B</span><span>C</span></div><p style="margin-top:8px">${L(['First In, First Out: like a line at the canteen. A printer queue works like this.','First In, First Out (il primo entrato è il primo a uscire): come la fila in mensa. La coda di stampa funziona così.'])}</p></div></div>`;
},
});
