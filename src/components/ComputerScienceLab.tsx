import React, { useMemo, useState } from 'react';
import { Language } from '../types';

type Props = { missionId: string; lang: Language };
const t = (lang: Language, en: string, it: string) => lang === 'it' ? it : en;
const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

const lessons: Record<string, [string, string]> = {
  a1m1: ['Algorithm step builder', 'Costruttore di algoritmi'],
  a2m1: ['Binary number laboratory', 'Laboratorio dei numeri binari'],
  a2m2: ['Text encoding explorer', 'Esploratore della codifica del testo'],
  a2m3: ['Pixel and colour studio', 'Studio dei pixel e dei colori'],
  a2m4: ['Compression workshop', 'Officina della compressione'],
  a3m1: ['Inside the computer', 'Dentro il computer'],
  a3m2: ['CPU and motherboard lab', 'Laboratorio di CPU e scheda madre'],
  a3m3: ['Memory hierarchy explorer', 'Esploratore della gerarchia di memoria'],
  a3m4: ['Input and output studio', 'Studio di input e output'],
  a4m1: ['Operating system process desk', 'Postazione dei processi del sistema operativo'],
  a4m2: ['File system and folder workshop', 'Officina di file e cartelle'],
  a4m3: ['Application and mobile technology studio', 'Studio delle applicazioni e tecnologie mobili'],
  a5m1: ['Packet journey simulator', 'Simulatore del viaggio dei pacchetti'],
  c6m1: ['Password strength practice', 'Allenamento sulle password sicure'],
  c6m2: ['Malware response simulator', 'Simulatore di risposta ai malware'],
  c6m3: ['Backup and safe connection lab', 'Laboratorio di backup e connessioni sicure'],
  c7m1: ['Cloud services and sharing studio', 'Studio dei servizi cloud e della condivisione'],
  c7m2: ['Team collaboration mission control', 'Centro di controllo della collaborazione'],
  c9m1: ['Spreadsheet formula lab', 'Laboratorio delle formule'],
  c9m2: ['Cell reference simulator', 'Simulatore dei riferimenti di cella'],
  c9m3: ['IF function decision lab', 'Laboratorio della funzione SE'],
  c11m1: ['Flowchart builder', 'Costruttore di diagrammi di flusso'],
  c12m2: ['Python data type explorer', 'Esploratore dei tipi di dato Python'],
  c13m1: ['Python decision simulator', 'Simulatore delle decisioni Python'],
  c14m1: ['Loop trace laboratory', 'Laboratorio di tracciamento dei cicli'],
  c15m1: ['String index and slice lab', 'Laboratorio di indici e slicing'],
  c16m1: ['Function call workbench', 'Banco di prova delle funzioni']
};

const Panel: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="csl-panel"><h4>{title}</h4>{children}</div>
);
const Readout: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
  <div className="csl-readout"><small>{label}</small><strong>{value}</strong></div>
);
const Range: React.FC<{ label: string; value: number; min: number; max: number; onChange: (n: number) => void; step?: number }> =
  ({ label, value, min, max, onChange, step = 1 }) => (
    <label className="csl-range"><span>{label}<b>{value}</b></span><input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))}/></label>
  );

export const ComputerScienceLab: React.FC<Props> = ({ missionId, lang }) => {
  const [bits, setBits] = useState([0,0,0,0,1,1,0,1]);
  const [character, setCharacter] = useState('A');
  const [red, setRed] = useState(120);
  const [green, setGreen] = useState(180);
  const [blue, setBlue] = useState(240);
  const [runLength, setRunLength] = useState(5);
  const [cores, setCores] = useState(4);
  const [ram, setRam] = useState(8);
  const [packetCount, setPacketCount] = useState(4);
  const [route, setRoute] = useState('wifi');
  const [practicePassword, setPracticePassword] = useState('BlueFox!27');
  const [backupCopies, setBackupCopies] = useState(2);
  const [formulaA, setFormulaA] = useState(12);
  const [formulaB, setFormulaB] = useState(8);
  const [fillMode, setFillMode] = useState<'relative'|'absolute'>('relative');
  const [score, setScore] = useState(72);
  const [flowStep, setFlowStep] = useState(0);
  const [pythonValue, setPythonValue] = useState('42');
  const [temperature, setTemperature] = useState(18);
  const [loopLimit, setLoopLimit] = useState(5);
  const [loopStep, setLoopStep] = useState(0);
  const [sampleString, setSampleString] = useState('CIRCUIT');
  const [sliceStart, setSliceStart] = useState(1);
  const [sliceEnd, setSliceEnd] = useState(4);
  const [functionInput, setFunctionInput] = useState(5);
  const [processStep, setProcessStep] = useState(0);
  const [fileOperation, setFileOperation] = useState<'copy'|'move'|'rename'|'delete'>('copy');
  const [fileFeedback, setFileFeedback] = useState('');
  const [appTask, setAppTask] = useState<'write'|'calculate'|'draw'|'navigate'>('write');
  const [phoneTilt, setPhoneTilt] = useState(0);
  const [softwareLicence, setSoftwareLicence] = useState<'open'|'free'|'proprietary'>('open');
  const [cloudService, setCloudService] = useState<'saas'|'paas'|'iaas'>('saas');
  const [sharePermission, setSharePermission] = useState<'viewer'|'commenter'|'editor'>('viewer');
  const [shareAudience, setShareAudience] = useState<'specific'|'link'>('specific');
  const [meetingStep, setMeetingStep] = useState(0);
  const [micReady, setMicReady] = useState(false);
  const [cameraReady, setCameraReady] = useState(false);
  const [travelAvoided, setTravelAvoided] = useState(20);

  if (!lessons[missionId]) return null;
  const title = t(lang, lessons[missionId][0], lessons[missionId][1]);
  const binary = bits.reduce((n, bit, i) => n + bit * 2 ** (7-i), 0);
  const charCode = character.length ? character.codePointAt(0) ?? 0 : 0;
  const rle = useMemo(() => {
    const source = 'A'.repeat(runLength) + 'B'.repeat(8-runLength);
    const groups = source.match(/(.)\1*/g) ?? [];
    return { source, encoded: groups.map(group => group.length + group[0]).join(' ') };
  }, [runLength]);
  const passwordScore = Math.min(100, (practicePassword.length >= 12 ? 35 : practicePassword.length * 2.5) +
    (/[a-z]/.test(practicePassword) ? 10 : 0) + (/[A-Z]/.test(practicePassword) ? 10 : 0) +
    (/\\d/.test(practicePassword) ? 10 : 0) + (/[^A-Za-z0-9]/.test(practicePassword) ? 15 : 0) +
    (new Set(practicePassword).size >= 8 ? 20 : 0));
  const sliced = sampleString.slice(sliceStart, sliceEnd);
  const loopValues = Array.from({length: loopStep}, (_,i) => i);
  const osStepLabels = [
    t(lang,'You select an application icon.','Selezioni l’icona di un’applicazione.'),
    t(lang,'The operating system finds the program on storage.','Il sistema operativo trova il programma nella memoria di massa.'),
    t(lang,'The program is loaded into RAM and becomes a process.','Il programma viene caricato nella RAM e diventa un processo.'),
    t(lang,'The scheduler shares CPU time between active processes.','Lo scheduler distribuisce il tempo della CPU tra i processi attivi.'),
    t(lang,'A driver helps the operating system communicate with hardware.','Un driver aiuta il sistema operativo a comunicare con l’hardware.')
  ];
  const appTaskLabels = {
    write: t(lang,'Write a report','Scrivere una relazione'),
    calculate: t(lang,'Calculate a budget','Calcolare un budget'),
    draw: t(lang,'Create an illustration','Creare un’illustrazione'),
    navigate: t(lang,'Find a route','Trovare un percorso')
  };
  const appMatches = {
    write: t(lang,'Word processor','Programma di videoscrittura'),
    calculate: t(lang,'Spreadsheet','Foglio di calcolo'),
    draw: t(lang,'Graphics editor','Editor grafico'),
    navigate: t(lang,'Maps / navigation app','App di mappe e navigazione')
  };
  const cloudServiceDescriptions = {
    saas: t(lang,'Use a complete application hosted by a provider, such as webmail or an online document editor.','Usi un’applicazione completa ospitata da un fornitore, come la webmail o un editor di documenti online.'),
    paas: t(lang,'Use a managed platform to build and run your own applications without managing the underlying servers.','Usi una piattaforma gestita per creare ed eseguire applicazioni senza amministrare i server sottostanti.'),
    iaas: t(lang,'Rent computing infrastructure such as virtual machines, storage and networks; you manage the operating system and software.','Noleggi infrastruttura informatica come macchine virtuali, archiviazione e reti; gestisci sistema operativo e software.')
  };
  const permissionDescriptions = {
    viewer: t(lang,'Can view the file but cannot change its contents.','Può visualizzare il file ma non modificarne il contenuto.'),
    commenter: t(lang,'Can leave comments and suggestions without directly changing the original text.','Può lasciare commenti e suggerimenti senza modificare direttamente il testo originale.'),
    editor: t(lang,'Can change the file. Give this permission only to trusted collaborators who need it.','Può modificare il file. Concedi questa autorizzazione solo a collaboratori fidati che ne hanno bisogno.')
  };
  const meetingSteps = [
    t(lang,'Create an event in the shared calendar.','Crea un evento nell’agenda condivisa.'),
    t(lang,'Invite the group and add the video-call link.','Invita il gruppo e aggiungi il link della videochiamata.'),
    t(lang,'Everyone accepts or declines the invitation.','Tutti accettano o rifiutano l’invito.'),
    t(lang,'Join on time and check the camera and microphone.','Entra puntualmente e controlla webcam e microfono.'),
    t(lang,'Share your screen, agree on next steps and end the call.','Condividi lo schermo, concorda i prossimi passi e termina la chiamata.')
  ];
  const licenceDescriptions = {
    open: t(lang,'Open-source software makes its source code available under a licence that grants specific freedoms.','Il software open source rende disponibile il codice sorgente con una licenza che concede specifiche libertà.'),
    free: t(lang,'Freeware can be used without payment, but its source code is not necessarily available.','Il freeware si può usare senza pagare, ma il suo codice sorgente non è necessariamente disponibile.'),
    proprietary: t(lang,'Proprietary software is controlled by its owner and used under the terms of its licence.','Il software proprietario è controllato dal titolare e si usa secondo i termini della sua licenza.')
  };
  const flowLabels = [
    [t(lang,'Start','Inizio'),t(lang,'Read the number','Leggi il numero'),t(lang,'Is it even?','È pari?'),t(lang,'Print the answer','Stampa il risultato'),t(lang,'End','Fine')],
    [t(lang,'Inizio','Start'),t(lang,'Leggi il numero','Read the number'),t(lang,'È pari?','Is it even?'),t(lang,'Stampa il risultato','Print the answer'),t(lang,'Fine','End')]
  ][lang === 'it' ? 0 : 1];

  return <section className="cs-visual-lab" aria-label={t(lang,'Interactive computer science lab','Laboratorio interattivo di informatica')}>
    <header className="csl-heading">
      <span>COMPUTER SCIENCE LAB · LABORATORIO DI INFORMATICA</span>
      <h3>{title}</h3>
      <p>{t(lang,'Experiment with the controls. Predict what will happen, then check the result.','Sperimenta con i controlli. Prima prevedi il risultato, poi verificalo.')}</p>
    </header>
    <div className="csl-grid">
      <div className="csl-stage">
        {missionId === 'a1m1' && <Panel title={t(lang,'Build a clear algorithm','Costruisci un algoritmo chiaro')}>
          <div className="csl-steps">{[t(lang,'Input: receive a number','Input: ricevi un numero'),t(lang,'Process: multiply by 2','Elaborazione: moltiplica per 2'),t(lang,'Output: show the result','Output: mostra il risultato')].map((s,i)=><div key={s}><b>{i+1}</b>{s}</div>)}</div>
          <Readout label={t(lang,'Example input','Esempio di input')} value="6"/>
          <Readout label={t(lang,'Output','Risultato')} value="12"/>
          <p>{t(lang,'A good algorithm has a clear start, precise steps and an end.','Un buon algoritmo ha un inizio chiaro, passi precisi e una fine.')}</p>
        </Panel>}
        {missionId === 'a2m1' && <Panel title={t(lang,'Switch each bit on or off','Accendi o spegni ogni bit')}>
          <div className="csl-bit-grid">{bits.map((bit,i)=><button type="button" key={i} className={bit?'active':''} onClick={()=>setBits(old=>old.map((v,j)=>i===j?1-v:v))}><small>{2**(7-i)}</small><strong>{bit}</strong><small>{bit?'ON':'OFF'}</small></button>)}</div>
          <Readout label="Binary / Binario" value={bits.join('')}/><Readout label="Decimal / Decimale" value={binary}/>
          <p>{t(lang,'Each position is worth twice the position to its right. Add the values where the bit is 1.','Ogni posizione vale il doppio di quella alla sua destra. Somma i valori delle posizioni con bit uguale a 1.')}</p>
        </Panel>}
        {missionId === 'a2m2' && <Panel title={t(lang,'Turn a character into a code point','Trasforma un carattere in un codice')}>
          <label className="csl-input">{t(lang,'Try one character','Prova un carattere')}<input maxLength={2} value={character} onChange={e=>setCharacter(Array.from(e.target.value).slice(0,1).join(''))}/></label>
          <Readout label="Unicode code point" value={'U+'+charCode.toString(16).toUpperCase().padStart(4,'0')}/>
          <Readout label="Decimal value / Valore decimale" value={charCode}/>
          <p>{t(lang,'Unicode assigns a number to characters from many writing systems. ASCII is a smaller, older character set.','Unicode assegna un numero ai caratteri di molti sistemi di scrittura. ASCII è un insieme di caratteri più piccolo e più antico.')}</p>
        </Panel>}
        {missionId === 'a2m3' && <Panel title={t(lang,'Mix red, green and blue light','Mescola la luce rossa, verde e blu')}>
          <div className="csl-colour" style={{background:'rgb('+red+','+green+','+blue+')'}}/>
          <Range label="Red / Rosso" value={red} min={0} max={255} onChange={setRed}/><Range label="Green / Verde" value={green} min={0} max={255} onChange={setGreen}/><Range label="Blue / Blu" value={blue} min={0} max={255} onChange={setBlue}/>
          <Readout label="RGB" value={red+', '+green+', '+blue}/><Readout label="Hex" value={'#'+[red,green,blue].map(v=>v.toString(16).padStart(2,'0')).join('').toUpperCase()}/>
          <p>{t(lang,'Screens mix light (RGB). Equal high values move towards white; no light is black.','Gli schermi mescolano luce (RGB). Valori alti e uguali si avvicinano al bianco; senza luce si ottiene il nero.')}</p>
        </Panel>}
        {missionId === 'a2m4' && <Panel title={t(lang,'Compress a simple pattern','Comprimi un semplice schema')}>
          <div className="csl-symbols">{rle.source.split('').map((x,i)=><i key={i} className={x==='A'?'a':'b'}>{x}</i>)}</div>
          <Range label={t(lang,'Number of A symbols','Numero di simboli A')} value={runLength} min={1} max={7} onChange={setRunLength}/>
          <Readout label={t(lang,'Original data','Dati originali')} value={rle.source}/>
          <Readout label="RLE" value={rle.encoded}/>
          <p>{t(lang,'Run-length encoding stores a repeated symbol and its count. It is lossless: the original sequence can be rebuilt.','La codifica run-length memorizza un simbolo ripetuto e il suo conteggio. È senza perdita: la sequenza originale si può ricostruire.')}</p>
        </Panel>}
        {['a3m1','a3m2','a3m3','a3m4'].includes(missionId) && <Panel title={t(lang,'Follow the computer system','Segui il sistema del computer')}>
          <div className="csl-computer-flow"><span>INPUT</span><b>→</b><span className="cpu">CPU</span><b>↔</b><span>RAM</span><b>→</b><span>OUTPUT</span></div>
          <Range label={t(lang,'CPU cores (simplified)','Core CPU (semplificati)')} value={cores} min={1} max={16} onChange={setCores}/>
          <Range label={t(lang,'Installed RAM (GB)','RAM installata (GB)')} value={ram} min={2} max={32} onChange={setRam}/>
          <Readout label={t(lang,'Processing lanes (model)','Corsie di elaborazione (modello)')} value={cores}/>
          <Readout label={t(lang,'Memory capacity','Capacità della memoria')} value={ram+' GB'}/>
          <p>{missionId==='a3m3'?t(lang,'RAM is fast working memory. It is temporary: its contents are normally lost when power is off.','La RAM è una memoria di lavoro veloce. È temporanea: normalmente perde il contenuto quando manca alimentazione.'):missionId==='a3m4'?t(lang,'Input devices send data to the computer; output devices present results. A touchscreen can do both.','I dispositivi di input inviano dati al computer; quelli di output mostrano i risultati. Un touchscreen può svolgere entrambe le funzioni.'):t(lang,'The CPU processes instructions. RAM holds the data and programs currently in use.','La CPU elabora le istruzioni. La RAM contiene i dati e i programmi in uso.')}</p>
        </Panel>}
        {missionId === 'a5m1' && <Panel title={t(lang,'Send a message in packets','Invia un messaggio in pacchetti')}>
          <Range label={t(lang,'Number of packets','Numero di pacchetti')} value={packetCount} min={2} max={8} onChange={setPacketCount}/>
          <label className="csl-input">{t(lang,'Network route','Percorso di rete')}<select value={route} onChange={e=>setRoute(e.target.value)}><option value="wifi">Wi-Fi → Router → Internet</option><option value="ethernet">Ethernet → Switch → Router</option><option value="mobile">Mobile → Cell tower → Internet</option></select></label>
          <div className="csl-packets">{Array.from({length:packetCount},(_,i)=><span key={i}>{i+1}</span>)}</div>
          <Readout label={t(lang,'Route selected','Percorso scelto')} value={route==='wifi'?'Wi-Fi / Router':route==='ethernet'?'Ethernet / Switch':'Mobile / Tower'}/>
          <p>{t(lang,'Packets may travel through different network paths. The receiver uses packet information to reassemble the message.','I pacchetti possono attraversare percorsi diversi. Il destinatario usa le informazioni dei pacchetti per ricomporre il messaggio.')}</p>
        </Panel>}
        {missionId === 'c6m1' && <Panel title={t(lang,'Test a practice password only','Prova solo una password di esercizio')}>
          <label className="csl-input">{t(lang,'Example password (never use a real one)','Password di esempio (mai usarne una reale)')}<input type="text" autoComplete="off" value={practicePassword} onChange={e=>setPracticePassword(e.target.value)}/></label>
          <div className="csl-meter"><i style={{width:passwordScore+'%'}}/></div>
          <Readout label={t(lang,'Learning score (not a security audit)','Punteggio didattico (non è un controllo di sicurezza)')} value={passwordScore+'/100'}/>
          <p>{t(lang,'Length and variety help, but this simple score cannot tell whether a password has been reused or exposed. Use a password manager and unique passwords.','Lunghezza e varietà aiutano, ma questo punteggio semplice non rileva riutilizzi o password esposte. Usa un gestore di password e password uniche.')}</p>
        </Panel>}
        {missionId === 'c6m2' && <Panel title={t(lang,'Choose a safe response to a warning','Scegli una risposta sicura a un avviso')}>
          <div className="csl-steps"><div><b>1</b>{t(lang,'Stop interacting with the suspicious file.','Smetti di interagire con il file sospetto.')}</div><div><b>2</b>{t(lang,'Tell a trusted adult or the IT support team.','Avvisa un adulto di fiducia o il supporto IT.')}</div><div><b>3</b>{t(lang,'Follow the approved scan and recovery process.','Segui la procedura autorizzata di scansione e ripristino.')}</div></div>
          <Readout label={t(lang,'Key rule','Regola chiave')} value={t(lang,'Do not open it again','Non riaprirlo')}/>
          <p>{t(lang,'Do not try to investigate malware on a school or family device by yourself. Isolate it only if your organisation’s instructions say to do so.','Non cercare di analizzare un malware da solo su un dispositivo scolastico o familiare. Isolalo solo se previsto dalle istruzioni della tua organizzazione.')}</p>
        </Panel>}
        {missionId === 'c6m3' && <Panel title={t(lang,'Build a resilient backup plan','Crea un piano di backup resiliente')}>
          <Range label={t(lang,'Separate backup copies','Copie di backup separate')} value={backupCopies} min={1} max={4} onChange={setBackupCopies}/>
          <div className="csl-steps"><div><b>3</b>{t(lang,'Keep 3 copies of important data.','Conserva 3 copie dei dati importanti.')}</div><div><b>2</b>{t(lang,'Use 2 different types of storage.','Usa 2 tipi diversi di supporto.')}</div><div><b>1</b>{t(lang,'Keep 1 copy off-site or offline.','Conserva 1 copia fuori sede o offline.')}</div></div>
          <Readout label={t(lang,'Copies in your plan','Copie nel tuo piano')} value={backupCopies}/>
          <p>{t(lang,'A VPN can protect traffic on some networks, but it does not replace HTTPS, safe behaviour or backups.','Una VPN può proteggere il traffico su alcune reti, ma non sostituisce HTTPS, comportamenti sicuri o backup.')}</p>
        </Panel>}
        {['c9m1','c9m2','c9m3'].includes(missionId) && <Panel title={t(lang,'Change the values and see the formula update','Modifica i valori e osserva la formula aggiornarsi')}>
          <div className="csl-sheet"><div className="head">A</div><div className="head">B</div><div className="head">C</div><div>Item 1</div><div>{formulaA}</div><div>{formulaA*2}</div><div>Item 2</div><div>{formulaB}</div><div>{formulaB*2}</div><div className="sum">Total</div><div className="sum">{formulaA+formulaB}</div><div className="sum">{(formulaA+formulaB)*2}</div></div>
          <Range label="B2" value={formulaA} min={0} max={50} onChange={setFormulaA}/><Range label="B3" value={formulaB} min={0} max={50} onChange={setFormulaB}/>
          {missionId==='c9m2'&&<label className="csl-input">{t(lang,'Fill behaviour','Comportamento del riempimento')}<select value={fillMode} onChange={e=>setFillMode(e.target.value as typeof fillMode)}><option value="relative">{t(lang,'Relative reference: A1','Riferimento relativo: A1')}</option><option value="absolute">{t(lang,'Absolute reference: $A$1','Riferimento assoluto: $A$1')}</option></select></label>}
          <Readout label={missionId==='c9m3'?'=IF(B2>10,"High","Low")':'=SUM(B2:B3)'} value={missionId==='c9m3'?(formulaA>10?'High / Alto':'Low / Basso'):formulaA+formulaB}/>
          <p>{missionId==='c9m2'?(fillMode==='relative'?t(lang,'Relative references change when copied to another cell.','I riferimenti relativi cambiano quando la formula viene copiata in un’altra cella.'):t(lang,'Absolute references stay fixed when a formula is copied.','I riferimenti assoluti restano fissi quando si copia una formula.')):t(lang,'A spreadsheet recalculates formulas when input cells change.','Un foglio di calcolo ricalcola le formule quando cambiano le celle di input.')}</p>
        </Panel>}
        {missionId === 'c7m1' && <Panel title={t(lang,'Choose a cloud service and the safest sharing permission','Scegli un servizio cloud e l’autorizzazione di condivisione più sicura')}>
          <label className="csl-input">{t(lang,'Cloud service model','Modello di servizio cloud')}<select aria-label={t(lang,'Cloud service model','Modello di servizio cloud')} value={cloudService} onChange={e=>setCloudService(e.target.value as typeof cloudService)}>
            <option value="saas">SaaS</option><option value="paas">PaaS</option><option value="iaas">IaaS</option>
          </select></label>
          <Readout label={t(lang,'What the provider supplies','Cosa fornisce il provider')} value={cloudService.toUpperCase()}/>
          <p role="status">{cloudServiceDescriptions[cloudService]}</p>
          <label className="csl-input">{t(lang,'Permission for your collaborator','Autorizzazione per il collaboratore')}<select aria-label={t(lang,'Permission for your collaborator','Autorizzazione per il collaboratore')} value={sharePermission} onChange={e=>setSharePermission(e.target.value as typeof sharePermission)}>
            <option value="viewer">{t(lang,'Viewer','Visualizzatore')}</option><option value="commenter">{t(lang,'Commenter','Commentatore')}</option><option value="editor">{t(lang,'Editor','Editor')}</option>
          </select></label>
          <p>{permissionDescriptions[sharePermission]}</p>
          <label className="csl-input">{t(lang,'Who can open the link?','Chi può aprire il link?')}<select aria-label={t(lang,'Who can open the link?','Chi può aprire il link?')} value={shareAudience} onChange={e=>setShareAudience(e.target.value as typeof shareAudience)}>
            <option value="specific">{t(lang,'Only invited people','Solo le persone invitate')}</option><option value="link">{t(lang,'Anyone with the link','Chiunque abbia il link')}</option>
          </select></label>
          <p role="status">{shareAudience==='link'?t(lang,'Warning: the link can be forwarded. Check the permission and avoid public editing links.','Attenzione: il link può essere inoltrato. Controlla l’autorizzazione ed evita link pubblici con permesso di modifica.'):t(lang,'More restricted sharing keeps access limited to the people you invite.','La condivisione limitata permette l’accesso solo alle persone che inviti.')}</p>
        </Panel>}
        {missionId === 'c7m2' && <Panel title={t(lang,'Plan a team call and check your setup','Organizza una chiamata di gruppo e controlla la configurazione')}>
          <div className="csl-steps">{meetingSteps.map((step,i)=><div className={meetingStep===i?'current':''} key={i}><b>{i+1}</b>{step}</div>)}</div>
          <div className="csl-actions"><button type="button" onClick={()=>setMeetingStep(v=>Math.max(0,v-1))}>{t(lang,'Previous','Indietro')}</button><button type="button" onClick={()=>setMeetingStep(v=>Math.min(meetingSteps.length-1,v+1))} disabled={meetingStep===meetingSteps.length-1}>{t(lang,'Next meeting step','Passo successivo')}</button></div>
          <Readout label={t(lang,'Planning progress','Avanzamento organizzazione')} value={`${meetingStep+1} / ${meetingSteps.length}`}/>
          <label className="csl-input"><input type="checkbox" checked={cameraReady} onChange={e=>setCameraReady(e.target.checked)}/>{t(lang,'Camera tested','Webcam verificata')}</label>
          <label className="csl-input"><input type="checkbox" checked={micReady} onChange={e=>setMicReady(e.target.checked)}/>{t(lang,'Microphone tested','Microfono verificato')}</label>
          <p role="status">{cameraReady&&micReady?t(lang,'Pre-call check complete. You are ready to join.','Controllo pre-chiamata completato. Sei pronto per partecipare.'):t(lang,'Test both camera and microphone before an important call.','Verifica webcam e microfono prima di una chiamata importante.')}</p>
          <Range label={t(lang,'Travel avoided (km per participant)','Viaggio evitato (km per partecipante)')} value={travelAvoided} min={0} max={200} step={5} onChange={setTravelAvoided}/>
          <Readout label={t(lang,'Potential travel avoided for 4 people','Viaggio potenzialmente evitato per 4 persone')} value={`${travelAvoided*4} km`}/>
          <p>{t(lang,'Video calls can avoid some travel, but devices and data centres still use electricity. This is a simple illustration, not a carbon-footprint calculation.','Le videochiamate possono evitare alcuni viaggi, ma dispositivi e data center consumano comunque elettricità. È un esempio didattico, non un calcolo dell’impronta di carbonio.')}</p>
        </Panel>}
        {missionId === 'a4m1' && <Panel title={t(lang,'Follow an app from click to hardware','Segui un’app dal clic all’hardware')}>
          <div className="csl-steps">{osStepLabels.map((label,i)=><div className={processStep===i?'current':''} key={i}><b>{i+1}</b>{label}</div>)}</div>
          <div className="csl-actions"><button type="button" onClick={()=>setProcessStep(0)}>{t(lang,'Reset','Azzera')}</button><button type="button" onClick={()=>setProcessStep(v=>Math.min(osStepLabels.length-1,v+1))} disabled={processStep===osStepLabels.length-1}>{t(lang,'Next system step','Passo successivo')}</button></div>
          <Readout label={t(lang,'System stage','Fase del sistema')} value={(processStep+1)+' / '+osStepLabels.length}/>
          <p>{t(lang,'A program is stored as a file. When launched, it is loaded into RAM as a process; the operating system schedules its CPU time and uses drivers to control devices.','Un programma è memorizzato come file. Quando viene avviato, è caricato nella RAM come processo; il sistema operativo ne pianifica l’uso della CPU e utilizza i driver per controllare i dispositivi.')}</p>
        </Panel>}
        {missionId === 'a4m2' && <Panel title={t(lang,'Practise safe file and folder operations','Esercitati con le operazioni su file e cartelle')}>
          <div className="csl-file-tree"><div><b>📁 Academy</b></div><div className="indent"><b>📁 Projects</b></div><div className="indent deeper">📄 Report.docx</div><div className="indent deeper">📄 Budget.xlsx</div></div>
          <label className="csl-input">{t(lang,'Choose an operation','Scegli un’operazione')}<select value={fileOperation} onChange={e=>{setFileOperation(e.target.value as typeof fileOperation);setFileFeedback('');}}><option value="copy">{t(lang,'Copy','Copia')}</option><option value="move">{t(lang,'Move','Sposta')}</option><option value="rename">{t(lang,'Rename','Rinomina')}</option><option value="delete">{t(lang,'Delete','Elimina')}</option></select></label>
          <button type="button" onClick={()=>setFileFeedback(fileOperation==='copy'?t(lang,'A second copy is created; the original stays in Projects.','Viene creata una seconda copia; l’originale resta in Projects.'):fileOperation==='move'?t(lang,'The file is moved to the selected destination; it is no longer in its old folder.','Il file viene spostato nella destinazione scelta; non si trova più nella cartella precedente.'):fileOperation==='rename'?t(lang,'The file keeps its contents but receives a new name.','Il file conserva il contenuto ma riceve un nuovo nome.'):t(lang,'The file moves to the Recycle Bin first, where it may be restored.','Il file viene prima spostato nel Cestino, da cui può essere ripristinato.') )}>{t(lang,'Run example','Esegui esempio')}</button>
          {fileFeedback && <p role="status">{fileFeedback}</p>}
          <p>{t(lang,'A folder tree organises files. A path identifies where a file is stored; copying keeps the original, while moving changes its location.','Una struttura ad albero organizza i file. Un percorso indica dove si trova un file; copiare mantiene l’originale, mentre spostare ne cambia la posizione.')}</p>
        </Panel>}
        {missionId === 'a4m3' && <Panel title={t(lang,'Match apps, sensors and software licences','Abbina app, sensori e licenze software')}>
          <label className="csl-input">{t(lang,'What do you need to do?','Che cosa devi fare?')}<select value={appTask} onChange={e=>setAppTask(e.target.value as typeof appTask)}><option value="write">{appTaskLabels.write}</option><option value="calculate">{appTaskLabels.calculate}</option><option value="draw">{appTaskLabels.draw}</option><option value="navigate">{appTaskLabels.navigate}</option></select></label>
          <Readout label={t(lang,'Suitable application','Applicazione adatta')} value={appMatches[appTask]}/>
          <Range label={t(lang,'Phone tilt (degrees)','Inclinazione del telefono (gradi)')} value={phoneTilt} min={-45} max={45} onChange={setPhoneTilt}/>
          <Readout label={t(lang,'Accelerometer example','Esempio di accelerometro')} value={Math.abs(phoneTilt)>25?t(lang,'Tilt detected · rotate screen','Inclinazione rilevata · ruota lo schermo'):t(lang,'Nearly level · keep portrait view','Quasi in piano · mantieni la vista verticale')}/>
          <label className="csl-input">{t(lang,'Software licence type','Tipo di licenza software')}<select value={softwareLicence} onChange={e=>setSoftwareLicence(e.target.value as typeof softwareLicence)}><option value="open">Open source</option><option value="free">Freeware</option><option value="proprietary">{t(lang,'Proprietary','Proprietario')}</option></select></label>
          <p role="status">{licenceDescriptions[softwareLicence]}</p>
          <p>{t(lang,'Mobile apps can use sensors such as an accelerometer and location services. Always check what permissions an app requests.','Le app mobili possono usare sensori come l’accelerometro e i servizi di localizzazione. Controlla sempre quali autorizzazioni richiede un’app.')}</p>
        </Panel>}
        {missionId === 'c11m1' && <Panel title={t(lang,'Step through a simple flowchart','Segui un semplice diagramma di flusso')}>
          <div className="csl-steps">{flowLabels.map((label,i)=><div className={flowStep===i?'current':''} key={i}><b>{i+1}</b>{label}</div>)}</div>
          <div className="csl-actions"><button type="button" onClick={()=>setFlowStep(v=>Math.max(0,v-1))}>{t(lang,'Previous','Indietro')}</button><button type="button" onClick={()=>setFlowStep(v=>(v+1)%flowLabels.length)}>{t(lang,'Next step','Passo successivo')}</button></div>
          <Readout label={t(lang,'Current step','Passo attuale')} value={(flowStep+1)+' / '+flowLabels.length}/>
        </Panel>}
        {missionId === 'c12m2' && <Panel title={t(lang,'Explore Python value types','Esplora i tipi di dato Python')}>
          <label className="csl-input">{t(lang,'Try a value','Prova un valore')}<input value={pythonValue} onChange={e=>setPythonValue(e.target.value)}/></label>
          <Readout label="Python type (simple example)" value={pythonValue.trim()===''?'str':/^[-+]?\d+$/.test(pythonValue)?'int':/^[-+]?(\d+\.\d*|\.\d+)$/.test(pythonValue)?'float':/^(True|False)$/.test(pythonValue)?'bool':'str'}/>
          <p>{t(lang,'input() returns text. Convert it with int() or float() before doing arithmetic.','input() restituisce testo. Convertilo con int() o float() prima di eseguire calcoli.')}</p>
        </Panel>}
        {missionId === 'c13m1' && <Panel title={t(lang,'Test an if / else decision','Prova una decisione if / else')}>
          <Range label={t(lang,'Temperature (°C)','Temperatura (°C)')} value={temperature} min={-5} max={35} onChange={setTemperature}/>
          <div className="csl-code">if temperature &gt;= 20:<br/>　print("Warm")<br/>else:<br/>　print("Cool")</div>
          <Readout label="Output" value={temperature>=20?'Warm / Caldo':'Cool / Fresco'}/>
          <p>{t(lang,'The condition is checked first. Only one branch runs in this simple if / else structure.','Prima si verifica la condizione. In questa semplice struttura if / else viene eseguito un solo ramo.')}</p>
        </Panel>}
        {missionId === 'c14m1' && <Panel title={t(lang,'Advance a for loop one turn at a time','Avanza un ciclo for un giro alla volta')}>
          <Range label={t(lang,'range(stop)','range(fine)')} value={loopLimit} min={1} max={10} onChange={n=>{setLoopLimit(n);setLoopStep(0);}}/>
          <div className="csl-code">for i in range({loopLimit}):<br/>　print(i)</div>
          <div className="csl-packets">{loopValues.map(v=><span key={v}>{v}</span>)}</div>
          <div className="csl-actions"><button type="button" onClick={()=>setLoopStep(0)}>{t(lang,'Reset','Azzera')}</button><button type="button" onClick={()=>setLoopStep(v=>Math.min(loopLimit,v+1))}>{t(lang,'Next iteration','Iterazione successiva')}</button></div>
          <Readout label={t(lang,'Iterations completed','Iterazioni completate')} value={loopStep+'/'+loopLimit}/>
          <p>{t(lang,'range(stop) starts at 0 and does not include stop.','range(fine) parte da 0 e non include il valore finale.')}</p>
        </Panel>}
        {missionId === 'c15m1' && <Panel title={t(lang,'Explore indexes and slicing','Esplora indici e slicing')}>
          <label className="csl-input">{t(lang,'Text (up to 12 characters)','Testo (fino a 12 caratteri)')}<input maxLength={12} value={sampleString} onChange={e=>{setSampleString(e.target.value);setSliceStart(0);setSliceEnd(e.target.value.length);}}/></label>
          <div className="csl-indexes">{Array.from(sampleString).map((ch,i)=><span key={i}><b>{ch||'·'}</b><small>{i}</small></span>)}</div>
          <Range label={t(lang,'Start index','Indice iniziale')} value={sliceStart} min={0} max={sampleString.length} onChange={n=>{setSliceStart(n);setSliceEnd(v=>Math.max(v,n));}}/>
          <Range label={t(lang,'End index (excluded)','Indice finale (escluso)')} value={sliceEnd} min={0} max={sampleString.length} onChange={setSliceEnd}/>
          <Readout label={'text['+sliceStart+':'+sliceEnd+']'} value={sliced||'∅'}/>
          <p>{t(lang,'Indexes start at 0. The end index is excluded from a slice.','Gli indici partono da 0. L’indice finale è escluso dallo slicing.')}</p>
        </Panel>}
        {missionId === 'c16m1' && <Panel title={t(lang,'Call a reusable function','Chiama una funzione riutilizzabile')}>
          <Range label={t(lang,'Input x','Valore x')} value={functionInput} min={0} max={20} onChange={setFunctionInput}/>
          <div className="csl-code">def double(x):<br/>　return x * 2<br/><br/>double({functionInput})</div>
          <Readout label={t(lang,'Returned value','Valore restituito')} value={functionInput*2}/>
          <p>{t(lang,'A parameter receives the input. return sends the result back to the place where the function was called.','Un parametro riceve il valore in ingresso. return restituisce il risultato al punto in cui la funzione è stata chiamata.')}</p>
        </Panel>}
      </div>
      <aside className="csl-coach"><strong>{t(lang,'Hunter challenge','Sfida della cacciatrice')}</strong><p>{t(lang,'Before moving a control, say what you expect to happen. Then explain why the result changed.','Prima di modificare un controllo, prova a prevedere cosa succederà. Poi spiega perché il risultato è cambiato.')}</p><small>{t(lang,'Try it · Observe it · Explain it','Prova · Osserva · Spiega')}</small></aside>
    </div>
    <footer className="csl-footer">{t(lang,'These are learning models, not full hardware or security simulations.','Questi sono modelli didattici, non simulazioni complete dell’hardware o della sicurezza.')}</footer>
  </section>;
};
