import type { ArcInfo, Mission, UnitInfo } from '../types';
import { makeHistGeoMission, q } from './histGeoCommon';

export const HIST11_UNIT: UnitInfo = {
  title: ['Level 3 · Modern Age & Revolutions', 'Livello 3 · Età Moderna e Rivoluzioni'],
  ch: 'Cap. 1–3',
  subject: 'hist11'
};

export const HIST11_ARCS: ArcInfo[] = [
  {
    n: 1,
    unit: 0,
    subject: 'hist11',
    title: ['Renaissance, Oceans & Fractured Faith', 'Rinascimento, Oceani e Fede Divisa'],
    pages: '1–135'
  },
  {
    n: 2,
    unit: 0,
    subject: 'hist11',
    title: ['Science, Reason & Early Factories', 'Scienza, Ragione e Prime Fabbriche'],
    pages: '136–260'
  },
  {
    n: 3,
    unit: 0,
    subject: 'hist11',
    title: ['Atlantic Revolutions & Italian Risorgimento', 'Rivoluzioni Atlantiche e Risorgimento'],
    pages: '261–380'
  }
];

export const HIST11_MISSIONS: Mission[] = [
  makeHistGeoMission({
    id: 'hist_l3_m1',
    arc: 0,
    sec: '1.1',
    pages: '6–45',
    hue: 34,
    horns: 2,
    eyes: 2,
    title: ['Humanism, Renaissance & Printing Press', 'Umanesimo, Rinascimento e Stampa'],
    topic: ['Philology, perspective art, Medici patronage & Gutenberg', 'Filologia, prospettiva, mecenatismo dei Medici e Gutenberg'],
    demon: ['Inky Censor', 'Censore d’Inchiostro'],
    tech: ['Movable-Type Lens', 'Lente a Caratteri Mobili'],
    lessons: [
      {
        vis: 'hg11_humanism_philology',
        text: [
          'Picture discovering an ancient manuscript where someone copied a paragraph slightly wrong a century ago. <b>Humanists</b> like Petrarch and Lorenzo Valla acted like text detectives (<b>philology</b>), comparing manuscripts to recover authentic classical Latin and Greek—most famously proving the "Donation of Constantine" was a medieval forgery.',
          'Immagina di trovare un manoscritto antico copiato con un errore un secolo fa. Gli <b>umanisti</b> come Petrarca e Lorenzo Valla fecero i detective dei testi (<b>filologia</b>), smascherando persino il falso medievale della "Donazione di Costantino".'
        ]
      },
      {
        vis: 'hg11_renaissance_perspective',
        text: [
          'In Florence, Milan, Venice, and Rome, wealthy patrons like Lorenzo de’ Medici funded artists and engineers. <b>Brunelleschi</b> invented geometric <b>linear perspective</b>—making flat walls look 3D as lines converge at a vanishing point—while <b>Leonardo da Vinci</b> combined dissection, hydraulics, and painting.',
          'A Firenze, Milano, Venezia e Roma mecenati come Lorenzo il Magnifico sostennero artisti e ingegneri. <b>Brunelleschi</b> inventò la <b>prospettiva lineare</b> geometrica e <b>Leonardo da Vinci</b> unì anatomia, ingegneria e pittura.'
        ]
      },
      {
        vis: 'hg11_gutenberg_press',
        text: [
          'Around 1455, <b>Johannes Gutenberg</b> combined reusable metal letters, oil-based ink, and a screw press. Copying one book used to take a monk months; now Venice’s Aldo Manuzio printed pocket-sized classics by the thousands—turning Europe into the internet of 1500.',
          'Intorno al 1455 <b>Johannes Gutenberg</b> unì caratteri mobili metallici, inchiostro oleoso e torchio. Ciò che richiedeva mesi di copiatura ora circolava in migliaia di copie: Aldo Manuzio a Venezia inventò persino il formato tascabile.'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Renaissance Lab · Art or Text?', 'Laboratorio Rinascimento · Arte o Testo?'],
      hint: ['Match each breakthrough to Visual/Civic Art or Text & Ideas.', 'Abbina ogni innovazione ad Arte Visiva oppure Testi e Idee.'],
      cats: [['Visual & Spatial Art', 'Arte Visiva e Spazio'], ['Texts, Print & Thought', 'Testi, Stampa e Pensiero']],
      items: [
        { n: ['Brunelleschi linear perspective', 'Prospettiva lineare di Brunelleschi'], i: '📐', c: 0, why: ['Geometric vanishing point creating 3D depth on a 2D surface.', 'Punto di fuga geometrico che crea profondità 3D su superficie piana.'] },
        { n: ['Valla philological critique', 'Critica filologica di Valla'], i: '🔎', c: 1, why: ['Analyzed Latin vocabulary and dates to expose forged documents.', 'Analizzò lessico e date latine per smascherare documenti falsi.'] },
        { n: ['Gutenberg movable metal type', 'Caratteri mobili di Gutenberg'], i: '🖨️', c: 1, why: ['Multiplied books rapidly across European universities and workshops.', 'Moltiplicò rapidamente i libri in tutta Europa.'] },
        { n: ['Medici patronage in Florence', 'Mecenatismo dei Medici a Firenze'], i: '🏛️', c: 0, why: ['Funded domes, sculptures, and public architecture as civic pride.', 'Finanziò cupole, sculture e architetture civiche.'] }
      ]
    },
    taunt: [
      'A single scribe writes slowly—why fear little lead letters on wood?',
      'Un amanuense scrive piano: perché temere poche letterine di piombo?'
    ],
    quiz: [
      q(
        'How did Lorenzo Valla prove the "Donation of Constantine" was a forgery?',
        'Come dimostrò Lorenzo Valla che la "Donazione di Costantino" era un falso?',
        [
          ['Through philology, noticing Latin terms and references centuries later than Constantine', 'Con la filologia, trovando termini latini e riferimenti posteriori a Costantino'],
          ['By digging up Roman coins near Naples', 'Scavando monete romane vicino a Napoli'],
          ['By translating Arabic astronomy charts', 'Traducendo carte astronomiche arabe'],
          ['By interviewing eyewitnesses in Constantinople', 'Intervistando testimoni a Costantinopoli']
        ],
        ['Philology compares language and historical context to verify when a document was truly written.', 'La filologia confronta lingua e contesto storico per verificare la vera data di un documento.']
      ),
      q(
        'What mathematical breakthrough did Filippo Brunelleschi introduce to Renaissance painting and architecture?',
        'Quale innovazione matematica introdusse Filippo Brunelleschi nell’arte rinascimentale?',
        [
          ['Linear perspective with a vanishing point', 'La prospettiva lineare con punto di fuga'],
          ['Watercolor pigment mixing', 'La miscela di pigmenti ad acquerello'],
          ['Gothic pointed arches', 'Gli archi a sesto acuto gotici'],
          ['Byzantine gold-leaf flatness', 'La bidimensionalità a fondo oro bizantina']
        ],
        ['Linear perspective lets lines converge toward a horizon point so flat paintings mirror 3D eye vision.', 'La prospettiva lineare fa convergere le linee verso un punto di fuga simulando la vista 3D.']
      ),
      q(
        'Why did Gutenberg’s movable-type press transform European society after 1455?',
        'Perché la stampa a caratteri mobili di Gutenberg trasformò l’Europa dopo il 1455?',
        [
          ['Books became cheaper, faster to copy, and widely shared across borders', 'I libri divennero più economici, rapidi da riprodurre e diffusi ovunque'],
          ['It eliminated the need for paper completely', 'Eliminò del tutto il bisogno di carta'],
          ['It restricted reading strictly to monasteries', 'Limitò la lettura solo ai monasteri'],
          ['It replaced spoken dialects overnight with Greek', 'Sostituì i dialetti parlati col greco in una notte']
        ],
        ['Cheap, abundant printed books accelerated literacy, science, and religious debate.', 'Libri economici e numerosi accelerarono alfabetizzazione, scienza e dibattiti religiosi.']
      ),
      q(
        'Who pioneered compact, italic-font "pocket books" (tascabili) in Venice around 1501?',
        'Chi lanciò a Venezia intorno al 1501 i libri tascabili in carattere corsivo?',
        [
          ['Aldo Manuzio', 'Aldo Manuzio'],
          ['Marco Polo', 'Marco Polo'],
          ['Girolamo Savonarola', 'Girolamo Savonarola'],
          ['Niccolò Copernicus', 'Niccolò Copernico']
        ],
        ['Aldo Manuzio’s Aldine Press made portable classics affordable for travelers and students.', 'La stamperia aldina di Aldo Manuzio rese i classici portatili e accessibili a studenti e viaggiatori.']
      )
    ]
  }),
  makeHistGeoMission({
    id: 'hist_l3_m2',
    arc: 0,
    sec: '1.2',
    pages: '46–89',
    hue: 196,
    horns: 2,
    eyes: 2,
    title: ['Oceanic Voyages & Columbian Exchange', 'Viaggi Oceanici e Scambio Colombiano'],
    topic: ['Caravel, astrolabe, 1492/1498 & Old–New World exchange', 'Caravella, astrolabio, 1492/1498 e Scambio Colombiano'],
    demon: ['Storm Kraken', 'Kraken delle Rotte'],
    tech: ['Astrolabe Navigator', 'Rotta dell’Astrolabio'],
    lessons: [
      {
        vis: 'hg11_caravel_instruments',
        text: [
          'After 1453 the Ottoman Empire controlled key land routes to Asia, pushing Portugal and Spain toward the Atlantic. Using ocean-ready <b>caravels</b> (combining square sails for wind speed and triangular lateen sails for steering), the magnetic <b>compass</b>, and the <b>astrolabe</b>, sailors finally dared cross open oceans.',
          'Dopo il 1453 l’Impero Ottomano controllava le rotte terrestri verso l’Asia, spingendo Portogallo e Spagna sull’Atlantico. Con le <b>caravelle</b> (vele quadre e latine), <b>bussola</b> e <b>astrolabio</b> i marinai affrontarono l’oceano aperto.'
        ]
      },
      {
        vis: 'hg11_voyages_routes',
        text: [
          'Two sea highways opened at once: <b>Bartolomeu Dias</b> and <b>Vasco da Gama</b> (1498) rounded Africa to reach India, while <b>Christopher Columbus</b> (1492) sailed west seeking Asia and reached the Americas. In 1519–1522, <b>Magellan</b>’s expedition completed the first circumnavigation of the globe.',
          'Si aprirono due grandi rotte: <b>Vasco da Gama</b> (1498) circumnavigò l’Africa fino all’India, mentre <b>Cristoforo Colombo</b> (1492) navigò a ovest raggiungendo le Americhe. Nel 1519–1522 la spedizione di <b>Magellano</b> compì il primo giro del mondo.'
        ]
      },
      {
        vis: 'hg11_columbian_exchange',
        text: [
          'The <b>Columbian Exchange</b> reshaped every kitchen and ecosystem on Earth: the Americas gave Europe tomatoes, potatoes, corn, and cacao—imagine Italian pizza without tomatoes!—while Europeans brought horses, wheat, cattle, and tragically devastating diseases that decimated Indigenous empires alongside forced plantation labor and the Atlantic slave trade.',
          'Lo <b>Scambio Colombiano</b> rivoluzionò diete ed ecosistemi: dall’America arrivarono pomodoro, patata, mais e cacao (pensa alla pizza italiana senza pomodoro!), mentre dall’Europa giunsero cavalli, grano, bovini e gravi epidemie che decimarono le civiltà americane insieme alla tratta atlantica degli schiavi.'
        ]
      }
    ],
    taunt: [
      'Sail past the horizon and your tiny ships will drop off the edge!',
      'Oltrepassa l’orizzonte e le tue piccole navi cadranno nel vuoto!'
    ],
    quiz: [
      q(
        'Which pair of ingredients arrived in Italy ONLY after Columbus’s 1492 voyages?',
        'Quali due ingredienti arrivarono in Italia SOLO dopo i viaggi di Colombo del 1492?',
        [
          ['Tomatoes and potatoes', 'Pomodoro e patata'],
          ['Olive oil and wheat', 'Olio d’oliva e grano'],
          ['Grapes and garlic', 'Uva e aglio'],
          ['Pork and sheep milk cheese', 'Maiale e formaggio pecorino']
        ],
        ['Tomatoes, potatoes, maize, and cacao originated in the Americas before crossing in the Columbian Exchange.', 'Pomodoro, patata, mais e cacao sono originari delle Americhe e arrivarono con lo Scambio Colombiano.']
      ),
      q(
        'What nautical innovation allowed caravels to sail both with tailwinds and angled crosswinds?',
        'Quale innovazione navale permise alle caravelle di sfruttare sia il vento in poppa sia i venti laterali?',
        [
          ['Combining square sails with triangular lateen sails plus rudder', 'Combinare vele quadre e vele latine triangolari con il timone'],
          ['Steam engines powered by coal boilers', 'Motori a vapore alimentati a carbone'],
          ['Submarine ballast tanks', 'Serbatoi di zavorra sottomarini'],
          ['GPS radio beacons', 'Fari radio satellitari']
        ],
        ['Square sails gave power downwind while triangular lateen sails allowed tacking against coastal winds.', 'Le vele quadre davano spinta e le vele latine triangolari permettevano di bordeggiare controvento.']
      ),
      q(
        'Which Portuguese navigator reached India in 1498 by sailing around Africa’s Cape of Good Hope?',
        'Quale navigatore portoghese raggiunse l’India nel 1498 doppiando il Capo di Buona Speranza?',
        [
          ['Vasco da Gama', 'Vasco da Gama'],
          ['Amerigo Vespucci', 'Amerigo Vespucci'],
          ['Hernán Cortés', 'Hernán Cortés'],
          ['John Cabot (Giovanni Caboto)', 'Giovanni Caboto']
        ],
        ['Vasco da Gama connected Lisbon directly to Calicut in India by sea in 1498.', 'Vasco da Gama collegò Lisbona a Calicut in India via mare nel 1498.']
      ),
      q(
        'What catastrophic demographic impact did European contact cause on Indigenous populations in the Americas?',
        'Quale catastrofico impatto demografico causò il contatto europeo sulle popolazioni indigene americane?',
        [
          ['Massive population collapse driven by unfamiliar Old World diseases and forced labor', 'Un crollo demografico enorme causato da epidemie sconosciute e lavoro forzato'],
          ['Immediate peaceful equality across all colonies', 'Uguaglianza pacifica immediata in tutte le colonie'],
          ['Complete extinction of horses in North America', 'Estinzione totale dei cavalli europei'],
          ['Total ban on sugar and silver mining', 'Divieto assoluto di miniere d’argento e canna da zucchero']
        ],
        ['Lack of immunity to smallpox and measles, combined with conquest and forced labor, decimated Indigenous societies.', 'La mancanza di difese contro vaiolo e morbillo, unita a conquista e sfruttamento, decimò gli indigeni.']
      )
    ]
  }),
  makeHistGeoMission({
    id: 'hist_l3_m3',
    arc: 0,
    sec: '1.3',
    pages: '90–135',
    hue: 280,
    horns: 3,
    eyes: 2,
    title: ['Protestant Reformation & Counter-Reformation', 'Riforma Protestante e Controriforma'],
    topic: ['95 Theses (1517), Calvin, Council of Trent & 1555 Peace', '95 Tesi (1517), Calvino, Concilio di Trento e Pace del 1555'],
    demon: ['Schism Inquisitor', 'Inquisitore dello Scisma'],
    tech: ['Trent Dialectic', 'Dialettica di Trento'],
    lessons: [
      {
        vis: 'hg11_luther_95_theses',
        text: [
          'In 1517, German monk <b>Martin Luther</b> protested the sale of paid "indulgences" (certificates promising shorter purgatory to fund St. Peter’s Basilica). Printed pamphlets carried his <b>95 Theses</b> across Germany within weeks, arguing salvation comes through faith alone (<i>sola fide</i>) and reading the Bible in vernacular German.',
          'Nel 1517 il monaco tedesco <b>Martin Lutero</b> contestò la vendita delle indulgenze con le celebri <b>95 Tesi</b>, diffuse rapidamente grazie alla stampa. Lutero sostenne la salvezza per sola fede (<i>sola fide</i>) e tradusse la Bibbia in tedesco.'
        ]
      },
      {
        vis: 'hg11_europe_confessions',
        text: [
          'Western Christianity split into rival branches: <b>Lutheranism</b> in Northern Germany and Scandinavia, <b>Calvinism</b> (emphasizing predestination and disciplined work ethic in Geneva and Switzerland), and <b>Anglicanism</b> under Henry VIII in England. After bloody German wars, the <b>Peace of Augsburg (1555)</b> introduced <i>cuius regio, eius religio</i>.',
          'La cristianità occidentale si divise: <b>Luteranesimo</b> nel Nord Europa, <b>Calvinismo</b> a Ginevra (predestinazione ed etica del lavoro) e <b>Anglicanesimo</b> in Inghilterra con Enrico VIII. La <b>Pace di Augusta (1555)</b> fissò la regola <i>cuius regio, eius religio</i>.'
        ]
      },
      {
        vis: 'hg11_council_of_trent',
        text: [
          'The Catholic Church answered at the <b>Council of Trent (1545–1563)</b>: it ended indulgence abuses and required trained priests in seminaries (Catholic Reform), while reaffirming seven sacraments and Papal authority and using the <b>Index of Forbidden Books</b> and the Roman Inquisition (Counter-Reformation).',
          'La Chiesa Cattolica rispose con il <b>Concilio di Trento (1545–1563)</b>: abolì gli abusi delle indulgenze e istituì i seminari per i preti (Riforma Cattolica), riaffermando però i sette sacramenti, l’autorità papale, l’<b>Indice dei Libri Proibiti</b> e l’Inquisizione (Controriforma).'
        ]
      }
    ],
    taunt: [
      'One Latin dogma for all—no local Bibles allowed!',
      'Un solo dogma in latino per tutti: niente Bibbie nelle lingue parlate!'
    ],
    quiz: [
      q(
        'What immediate practice triggered Martin Luther’s 95 Theses in 1517?',
        'Quale pratica scatenò le 95 Tesi di Martin Lutero nel 1517?',
        [
          ['The sale of Papal indulgences in exchange for money', 'La vendita delle indulgenze papali in cambio di denaro'],
          ['The invention of mechanical clocks', 'L’invenzione degli orologi meccanici'],
          ['The construction of Venice’s Arsenal', 'La costruzione dell’Arsenale di Venezia'],
          ['The Peace of Westphalia treaty', 'Il trattato della Pace di Vestfalia']
        ],
        ['Luther condemned buying forgiveness with money and argued faith and Scripture come first.', 'Lutero condannò l’acquisto del perdono spirituale col denaro, ponendo al centro fede e Scrittura.']
      ),
      q(
        'What did the 1555 Peace of Augsburg rule ("cuius regio, eius religio") mean in practice?',
        'Cosa significava in pratica la regola della Pace di Augusta del 1555 ("cuius regio, eius religio")?',
        [
          ['Each German ruler chose Catholic or Lutheran faith for their subjects', 'Ogni principe tedesco sceglieva cattolicesimo o luteranesimo per i propri sudditi'],
          ['Every individual citizen had full religious freedom across all states', 'Ogni singolo cittadino aveva piena libertà religiosa ovunque'],
          ['Italy joined the Ottoman Empire', 'L’Italia entrò nell’Impero Ottomano'],
          ['Catholic bishops banned all printing presses worldwide', 'I vescovi vietarono tutte le stamperie nel mondo']
        ],
        ['It recognized Lutheran princes legally while giving dissenters only the right to emigrate.', 'Riconobbe i principi luterani lasciando ai sudditi dissenzienti solo il diritto di emigrare.']
      ),
      q(
        'Which dual action characterized the Council of Trent (1545–1563)?',
        'Quale doppia azione caratterizzò il Concilio di Trento (1545–1563)?',
        [
          ['Ending corruption & creating seminaries while tightening Catholic doctrine and censorship', 'Correggere gli abusi e creare seminari, irrigidendo dottrina e censura'],
          ['Accepting Calvinist predestination as Catholic law', 'Accettare la predestinazione calvinista come dogma cattolico'],
          ['Moving the Vatican permanently to Madrid', 'Trasferire definitivamente il Vaticano a Madrid'],
          ['Dissolving all monastic orders like the Jesuits', 'Sciogliere tutti gli ordini religiosi inclusi i Gesuiti']
        ],
        ['Trent reformed clergy discipline while holding firm against Protestant theology.', 'Trento riformò la disciplina del clero mantenendo salda la teologia cattolica.']
      ),
      q(
        'Why did Luther’s message spread far faster than medieval heresies like the Waldensians?',
        'Perché il messaggio di Lutero si diffuse molto più velocemente delle eresie medievali?',
        [
          ['Because Gutenberg’s printing press turned pamphlets in German into mass media', 'Perché la stampa di Gutenberg trasformò i volantini in tedesco in un mezzo di massa'],
          ['Because television broadcasts existed in Wittenberg', 'Perché a Wittenberg esistevano trasmissioni televisive'],
          ['Because Rome ordered every monastery to promote Luther', 'Perché Roma ordinò ai monasteri di promuovere Lutero'],
          ['Because German peasants sailed to Lisbon', 'Perché i contadini tedeschi navigarono fino a Lisbona']
        ],
        ['Printed vernacular leaflets and woodcut cartoons reached artisans, nobles, and towns across Europe.', 'Volantini stampati in volgare e xilografie raggiunsero artigiani, principi e città in tutta Europa.']
      )
    ]
  }),
  makeHistGeoMission({
    id: 'hist_l3_m4',
    arc: 1,
    sec: '2.1',
    pages: '136–180',
    hue: 208,
    horns: 2,
    eyes: 3,
    title: ['Scientific Revolution & Power of the State', 'Rivoluzione Scientifica e Stati Assoluti'],
    topic: ['Galileo, Newton, Versailles Absolutism vs English Parliament', 'Galileo, Newton, Assolutismo a Versailles vs Parlamento Inglese'],
    demon: ['Dogma Eclipse', 'Eclissi del Dogma'],
    tech: ['Sidereus Telescope', 'Cannocchiale di Galileo'],
    lessons: [
      {
        vis: 'hg11_galileo_method',
        text: [
          'For centuries people accepted Aristotle’s word without testing it—like believing heavy balls always fall faster than light ones. <b>Galileo Galilei</b> championed the modern <b>scientific method</b>: observe, hypothesize, run a repeatable experiment written in mathematics ("the book of nature"), and verify—aiming his telescope at Jupiter’s moons in 1609.',
          'Per secoli ci si fidò dell’autorità di Aristotele senza esperimenti. <b>Galileo Galilei</b> fondò il <b>metodo scientifico</b> moderno: osservare, formulare un’ipotesi, fare esperimenti ripetibili in linguaggio matematico e verificare, puntando il cannocchiale sulle lune di Giove nel 1609.'
        ]
      },
      {
        vis: 'hg11_absolutism_versailles',
        text: [
          'While astronomy reshaped the sky, Europe built two rival models of government. In France, <b>Louis XIV</b> ("Sun King") perfected <b>absolutism</b> at Versailles, keeping nobles busy with court etiquette while royal bureaucrats ran taxes and armies.',
          'Mentre l’astronomia cambiava il cielo, in Europa nacquero due modelli politici opposti. In Francia <b>Luigi XIV</b> ("Re Sole") realizzò l’<b>assolutismo</b> a Versailles, controllando i nobili a corte mentre gli intendenti gestivano tasse ed esercito.'
        ]
      },
      {
        vis: 'hg11_bill_of_rights',
        text: [
          'Across the Channel, England’s Parliament pushed back! After two 17th-century revolutions, the <b>Bill of Rights (1689)</b> forged a <b>constitutional monarchy</b>: the king could no longer impose taxes or suspend laws without Parliament—planting the seed of modern representative democracy.',
          'Oltremanica il Parlamento inglese reagì. Dopo due rivoluzioni seicentesche, il <b>Bill of Rights (1689)</b> creò la <b>monarchia costituzionale</b>: il re non poteva imporre tasse né sospendere leggi senza il Parlamento, ponendo le basi della democrazia rappresentativa.'
        ]
      }
    ],
    taunt: [
      'Why test nature with telescopes when ancient books already hold all answers?',
      'Perché osservare col cannocchiale quando i vecchi libri dicono già tutto?'
    ],
    quiz: [
      q(
        'What are the core steps of Galileo Galilei’s experimental scientific method?',
        'Quali sono i passaggi chiave del metodo sperimentale di Galileo Galilei?',
        [
          ['Careful observation, mathematical hypothesis, controlled experiment, and verification', 'Osservazione attenta, ipotesi matematica, esperimento controllato e verifica'],
          ['Accepting ancient authority blindly without measurement', 'Accettare l’autorità antica senza misurazioni'],
          ['Casting horoscopes before sea voyages', 'Tracciare oroscopi prima dei viaggi in mare'],
          ['Banning telescopes from universities', 'Vietare i cannocchiali nelle università']
        ],
        ['Galileo replaced blind appeal to authority ("ipse dixit") with testable mathematical laws.', 'Galileo sostituì il principio di autorità con leggi matematiche verificabili sperimentalmente.']
      ),
      q(
        'Why did Galileo’s observation of Jupiter’s four moons (1609–1610) challenge the Ptolemaic model?',
        'Perché l’osservazione delle lune di Giove da parte di Galileo mise in crisi il modello tolemaico?',
        [
          ['It proved not everything orbits Earth, supporting Copernicus’s heliocentric view', 'Dimostrò che non tutto ruota attorno alla Terra, sostenendo il modello eliocentrico'],
          ['It proved the Sun is colder than the Moon', 'Dimostrò che il Sole è più freddo della Luna'],
          ['It showed Mars was flat', 'Mostrò che Marte era piatto'],
          ['It stopped ships from crossing the Pacific', 'Impedì alle navi di attraversare il Pacifico']
        ],
        ['Seeing moons orbit Jupiter showed Earth is not the sole center of cosmic motion.', 'Vedere lune ruotare attorno a Giove provò che la Terra non è l’unico centro di rotazione.']
      ),
      q(
        'How did the English Bill of Rights (1689) differ from Louis XIV’s French absolutism?',
        'In che cosa il Bill of Rights inglese (1689) differiva dall’assolutismo di Luigi XIV?',
        [
          ['It placed Parliament and law above arbitrary royal power', 'Pose il Parlamento e la legge al di sopra dell’arbitrio del sovrano'],
          ['It crowned Louis XIV king of London too', 'Incoronò Luigi XIV anche re a Londra'],
          ['It abolished all courts and elections', 'Abolì tutti i tribunali e le elezioni'],
          ['It declared taxes must double every year', 'Stabilì che le tasse raddoppiassero ogni anno']
        ],
        ['Whereas Louis XIV concentrated law and taxation in royal hands, 1689 England bound the Crown to Parliament.', 'Mentre Luigi XIV concentrava ogni potere sul re, il 1689 vincolò la Corona inglese al Parlamento.']
      ),
      q(
        'How did Versailles serve as a political instrument for Louis XIV?',
        'Come funzionò la reggia di Versailles come strumento politico per Luigi XIV?',
        [
          ['Luring high nobles into court life stripped them of independent local power', 'Attirando l’alta nobiltà a corte la privò di potere autonomo nelle province'],
          ['It hosted English parliamentary elections', 'Ospitava le elezioni del Parlamento inglese'],
          ['It served solely as a grain warehouse for peasants', 'Era solo un magazzino di grano per i contadini'],
          ['It was a naval shipyard on the Mediterranean', 'Era un cantiere navale sul Mediterraneo']
        ],
        ['At Versailles, etiquette replaced rebellion: nobles competed for royal favor instead of building armies.', 'A Versailles l’etichetta sostituì le rivolte: i nobili cercavano favori invece di armare eserciti.']
      )
    ]
  }),
  makeHistGeoMission({
    id: 'hist_l3_m5',
    arc: 1,
    sec: '2.2',
    pages: '181–220',
    hue: 48,
    horns: 2,
    eyes: 2,
    title: ['Enlightenment & Cesare Beccaria', 'Illuminismo e Cesare Beccaria'],
    topic: ['Montesquieu separation of powers, Encyclopedia & Beccaria', 'Separazione dei poteri di Montesquieu, Enciclopedia e Beccaria'],
    demon: ['Torture Shadow', 'Ombra del Supplizio'],
    tech: ['Beacon of Reason', 'Faro della Ragione'],
    lessons: [
      {
        vis: 'hg11_montesquieu_powers',
        text: [
          'Think of your school: if the same single person wrote the rules, acted as referee, AND handed out punishments with zero appeal, chaos would follow! French Enlightenment thinker <b>Montesquieu</b> proposed splitting state authority into three checks: <b>Legislative</b> (makes laws), <b>Executive</b> (governs), and <b>Judicial</b> (independent judges).',
          'Pensa a una partita in cui una sola persona scrive le regole, arbitra E punisce senza appello! <b>Montesquieu</b> propose la <b>separazione dei poteri</b>: <b>Legislativo</b> (fa le leggi), <b>Esecutivo</b> (governa) e <b>Giudiziario</b> (giudici indipendenti) che si controllano a vicenda.'
        ]
      },
      {
        vis: 'hg11_encyclopedie_ideas',
        text: [
          'Philosophers used the "light of reason" to challenge superstition and inherited privilege. <b>Voltaire</b> defended freedom of speech and religious tolerance; <b>Rousseau</b> argued power belongs to the people’s social contract; <b>Diderot & d’Alembert</b> compiled the 28-volume <i>Encyclopédie</i> so craftspeople and citizens alike could access knowledge.',
          'Gli illuministi usarono la ragione contro privilegi e superstizioni. <b>Voltaire</b> difese tolleranza e libertà di parola; <b>Rousseau</b> fondò la sovranità popolare; <b>Diderot e d’Alembert</b> pubblicarono l’<i>Encyclopédie</i> per diffondere scienza e mestieri a tutti.'
        ]
      },
      {
        vis: 'hg11_beccaria_justice',
        text: [
          'Milanese thinker <b>Cesare Beccaria</b> shook Europe in 1764 with <i>On Crimes and Punishments</i> (<i>Dei delitti e delle pene</i>): torture forces innocent people in pain to say anything, and the death penalty neither deters nor fits humane justice. Thanks to him, the <b>Grand Duchy of Tuscany (1786)</b> became the first modern state in history to abolish the death penalty!',
          'Il milanese <b>Cesare Beccaria</b> sconvolse l’Europa nel 1764 con <i>Dei delitti e delle pene</i>: la tortura estorce confessioni false agli innocenti e la pena di morte non è giusta né utile. Ispirato da lui, il <b>Granducato di Toscana (1786)</b> fu il primo Stato moderno ad abolire la pena di morte!'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Enlightenment Salon · Match Thinker & Legacy', 'Salotto Illuminista · Pensatore e Idea'],
      hint: ['Sort each Enlightenment idea into Political Liberty or Law & Justice.', 'Dividi le idee tra Libertà Politica oppure Legge e Giustizia.'],
      cats: [['State & Citizen Liberty', 'Stato e Libertà Civili'], ['Criminal Justice Reform', 'Riforma della Giustizia']],
      items: [
        { n: ['Montesquieu: 3 separate branches', 'Montesquieu: 3 poteri separati'], i: '⚖️', c: 0, why: ['Legislative, Executive, and Judicial balance prevent tyranny.', 'Potere legislativo, esecutivo e giudiziario frenano la tirannia.'] },
        { n: ['Beccaria: end torture & death penalty', 'Beccaria: stop a tortura e pena di morte'], i: '📜', c: 1, why: ['Punishment must be proportionate and prevent crime, not exact revenge.', 'La pena deve essere proporzionata e preventiva, mai vendetta.'] },
        { n: ['Tuscany Penal Code (1786)', 'Codice Leopoldino in Toscana (1786)'], i: '🏛️', c: 1, why: ['First modern state to abolish capital punishment worldwide.', 'Primo Stato moderno al mondo ad abolire la pena capitale.'] },
        { n: ['Voltaire: freedom of thought & press', 'Voltaire: libertà di pensiero e stampa'], i: '🕯️', c: 0, why: ['Protected religious tolerance and open public criticism.', 'Difese tolleranza religiosa e libera circolazione delle idee.'] }
      ]
    },
    taunt: [
      'Confess under fear and chains—who needs open trials or fair laws?',
      'Confessa sotto paura e catene: a che servono processi giusti?'
    ],
    quiz: [
      q(
        'According to Montesquieu, why must Legislative, Executive, and Judicial powers stay separate?',
        'Secondo Montesquieu, perché i poteri Legislativo, Esecutivo e Giudiziario devono restare separati?',
        [
          ['So each branch checks the others and no ruler holds unchecked tyranny', 'Affinché i poteri si controllino a vicenda evitando la tirannia'],
          ['To triple the king’s personal salary', 'Per triplicare lo stipendio personale del re'],
          ['To abolish written constitutions forever', 'Per abolire per sempre le costituzioni scritte'],
          ['To let judges command naval fleets', 'Per far comandare le flotte militari ai giudici']
        ],
        ['Dividing power prevents abuse because "power stops power" through constitutional checks.', 'Dividere i poteri impedisce abusi: "il potere frena il potere".']
      ),
      q(
        'Which historic milestone was achieved by the Grand Duchy of Tuscany in 1786 under Cesare Beccaria’s influence?',
        'Quale primato storico raggiunse il Granducato di Toscana nel 1786 ispirato da Cesare Beccaria?',
        [
          ['It became the first modern state to abolish the death penalty and torture', 'Fu il primo Stato moderno ad abolire la pena di morte e la tortura'],
          ['It launched the first steam railway across the Alps', 'Inaugurò la prima ferrovia a vapore alpina'],
          ['It unified Italy under a single parliament in Turin', 'Unificò l’Italia sotto un unico parlamento a Torino'],
          ['It banned printed newspapers throughout Florence', 'Vietò tutti i giornali stampati a Firenze']
        ],
        ['Pietro Leopoldo’s 1786 Leopoldina Code turned Beccaria’s Milanese treatise into law.', 'Il Codice Leopoldino del 1786 tradusse in legge le idee di Beccaria.']
      ),
      q(
        'Why did Diderot and d’Alembert publish the Encyclopédie (1751–1772)?',
        'Perché Diderot e d’Alembert pubblicarono l’Encyclopédie (1751–1772)?',
        [
          ['To gather scientific, technical, and philosophical knowledge openly for public progress', 'Per raccogliere sapere scientifico, tecnico e filosofico a servizio del progresso'],
          ['To hide medieval alchemy recipes in Latin only', 'Per nascondere ricette alchemiche solo in latino'],
          ['To enforce absolute monarchy censorship', 'Per rafforzare la censura dell’assolutismo'],
          ['To replace all European workshops with monasteries', 'Per sostituire tutte le botteghe con monasteri']
        ],
        ['Even skilled craftsmen’s tools were illustrated alongside philosophy to honor useful knowledge.', 'Persino gli attrezzi degli artigiani erano illustrati per valorizzare il sapere utile.']
      ),
      q(
        'What did Jean-Jacques Rousseau mean by "popular sovereignty" in The Social Contract?',
        'Cosa intendeva Jean-Jacques Rousseau con "sovranità popolare" ne Il contratto sociale?',
        [
          ['Legitimate laws express the general will of citizens, not royal birthright', 'Le leggi legittime nascono dalla volontà dei cittadini, non dal diritto divino del re'],
          ['Only hereditary dukes may vote', 'Solo i duchi ereditari possono votare'],
          ['Machines should govern factories without workers', 'Le macchine devono governare le fabbriche senza operai'],
          ['Citizens should surrender every right to one conqueror', 'I cittadini devono cedere ogni diritto a un conquistatore']
        ],
        ['Rousseau argued free citizens are both authors and subjects of the laws they agree to follow.', 'Per Rousseau i cittadini liberi sono autori e destinatari delle leggi comuni.']
      )
    ]
  }),
  makeHistGeoMission({
    id: 'hist_l3_m6',
    arc: 1,
    sec: '2.3',
    pages: '221–260',
    hue: 22,
    horns: 2,
    eyes: 2,
    title: ['First Industrial Revolution (1760–1830)', 'Prima Rivoluzione Industriale'],
    topic: ['James Watt steam engine, textiles, coal & factory cities', 'Macchina a vapore di Watt, tessile, carbone e città-fabbrica'],
    demon: ['Soot Piston', 'Pistone di Fuliggine'],
    tech: ['Watt Steam Valve', 'Valvola di James Watt'],
    lessons: [
      {
        vis: 'hg11_watt_steam_engine',
        text: [
          'For all human history, work depended on muscles, wind, or falling water—if a river froze, the mill stopped. Around 1769 <b>James Watt</b> perfected the <b>steam engine</b>: burning coal boiled water into pressurized steam that pushed pistons around the clock, anywhere.',
          'Per millenni il lavoro dipese da muscoli, vento o acqua. Intorno al 1769 <b>James Watt</b> perfezionò la <b>macchina a vapore</b>: bruciando carbone, il vapore muoveva pistoni ininterrottamente ovunque, senza dipendere dai fiumi.'
        ]
      },
      {
        vis: 'hg11_factory_textiles',
        text: [
          'Why did the revolution start in <b>Britain</b>? Coal and iron sat near canals, colonial trade supplied raw cotton, and parliamentary enclosures pushed rural workers toward fast-growing cities like <b>Manchester</b> ("Cottonopolis"). Mechanized looms multiplied cloth output dozens of times over.',
          'Perché partì in <b>Gran Bretagna</b>? Carbone e ferro erano vicini, le colonie fornivano cotone e le recinzioni agricole spinsero i contadini verso città industriali come <b>Manchester</b>. I telai meccanici moltiplicarono la produzione tessile.'
        ]
      },
      {
        vis: 'hg11_industrial_society',
        text: [
          'Steam soon jumped onto iron rails with <b>Stephenson’s Rocket locomotive (1829)</b>, shrinking days of carriage travel into hours. Yet factory clocks brought brutal 14-hour shifts, child labor, and smoky tenements—sparking early <b>trade unions</b> to fight for safer hours and fair pay.',
          'Il vapore salì presto sui binari con la locomotiva di <b>Stephenson (1829)</b>, accorciando viaggi di giorni in poche ore. Ma le fabbriche imposero turni di 14 ore, lavoro minorile e quartieri inquinati, facendo nascere i primi <b>sindacati</b> operai.'
        ]
      }
    ],
    taunt: [
      'Eighteen gears spinning faster than human hands—obey the factory whistle!',
      'Diciotto ingranaggi più veloci dell’uomo: obbedisci al fischio della fabbrica!'
    ],
    quiz: [
      q(
        'How did James Watt’s steam engine break the geographical limit of watermills?',
        'In che modo la macchina a vapore di James Watt superò il limite dei mulini ad acqua?',
        [
          ['Factories could be built near coal and cities without needing rushing rivers', 'Le fabbriche poterono sorgere vicino a carbone e città senza dipendere dai fiumi'],
          ['It ran purely on cold mountain ice', 'Funzionava solo con ghiaccio alpino'],
          ['It only powered sailing ships without coal', 'Alimentava solo velieri senza carbone'],
          ['It eliminated iron smelting altogether', 'Eliminò la fusione del ferro']
        ],
        ['Burning coal converted thermal energy into continuous mechanical rotation anywhere.', 'Il carbone trasformava energia termica in movimento meccanico continuo ovunque.']
      ),
      q(
        'Which sector led Britain’s First Industrial Revolution alongside coal and iron?',
        'Quale settore trainò la Prima Rivoluzione Industriale britannica insieme a carbone e ferro?',
        [
          ['Mechanized cotton textiles', 'L’industria tessile meccanizzata del cotone'],
          ['Silicon semiconductor microchips', 'I microchip al silicio'],
          ['Commercial passenger aviation', 'L’aviazione civile commerciale'],
          ['Solar photovoltaic panels', 'I pannelli solari fotovoltaici']
        ],
        ['Spinning jennies and power looms mechanized cotton cloth before steam transformed rail transport.', 'Filatoi meccanici e telai a vapore rivoluzionarono il cotone prima dei trasporti ferroviari.']
      ),
      q(
        'What major social hardship emerged inside early industrial cities like Manchester?',
        'Quale grave problema sociale emerse nelle prime città industriali come Manchester?',
        [
          ['Exhausting 12–14 hour shifts, child labor, low wages, and overcrowded housing', 'Turni massacranti di 12–14 ore, lavoro minorile, bassi salari e sovraffollamento'],
          ['Complete lack of any textile output', 'Mancanza totale di produzione tessile'],
          ['Universal 4-day weekend laws from day one', 'Settimana corta di 4 giorni garantita dal primo giorno'],
          ['Disappearance of cities as everyone returned to farming', 'Scomparsa delle città con ritorno totale alle campagne']
        ],
        ['Rapid urbanization outpaced housing and worker protections until labor unions organized reforms.', 'L’urbanizzazione rapida precedette le tutele sul lavoro fino alla nascita dei sindacati.']
      ),
      q(
        'How did railways like the 1830 Liverpool–Manchester line reshape daily life?',
        'Come cambiarono la vita quotidiana le prime ferrovie come la Liverpool–Manchester del 1830?',
        [
          ['They slashed transport time and cost for raw materials, goods, and passengers', 'Ridussero drasticamente tempi e costi di trasporto per merci, carbone e passeggeri'],
          ['They carried only royal letters once a year', 'Trasportavano solo lettere reali una volta l’anno'],
          ['They halted all overseas maritime shipping', 'Fermarono ogni commercio marittimo'],
          ['They relied on horse-drawn wooden sleds only', 'Usavano solo slitte trainate da cavalli']
        ],
        ['Steam locomotives integrated regional markets and standardized national clock time.', 'Le locomotive integrarono i mercati nazionali e resero necessario un orario standard.']
      )
    ]
  }),
  makeHistGeoMission({
    id: 'hist_l3_m7',
    arc: 2,
    sec: '3.1',
    pages: '261–320',
    hue: 350,
    horns: 3,
    eyes: 2,
    title: ['American & French Revolutions + Napoleon', 'Rivoluzione Americana, Francese e Napoleone'],
    topic: ['1776 Declaration, 1789 Rights of Man & Napoleonic Code', 'Dichiarazione 1776, Diritti dell’Uomo 1789 e Codice Napoleonico'],
    demon: ['Tyrant of the Bastille', 'Tiranno della Bastiglia'],
    tech: ['Citizen Tricolor', 'Tricolore dei Diritti'],
    lessons: [
      {
        vis: 'hg11_american_revolution',
        text: [
          'In 1776, Britain’s 13 North American colonies said "No taxation without representation!" and signed the <b>Declaration of Independence</b>—turning Enlightenment ideas into reality by proclaiming unalienable rights (life, liberty, pursuit of happiness) and launching the <b>U.S. Constitution (1787)</b> as a federal republic.',
          'Nel 1776 le 13 colonie nordamericane proclamarono l’indipendenza ("Niente tasse senza rappresentanza!"), traducendo l’Illuminismo in diritti inalienabili e nella prima repubblica federale con separazione dei poteri (<b>Costituzione 1787</b>).'
        ]
      },
      {
        vis: 'hg11_french_1789',
        text: [
          'In 1789 France was broke while peasants paid crushing taxes and nobles/clergy paid almost none. On <b>July 14, 1789</b> Parisians stormed the <b>Bastille</b>, and the National Assembly passed the <b>Declaration of the Rights of Man and of the Citizen</b>: all citizens are equal before the law—ending feudal privileges forever.',
          'Nel 1789 in Francia il Terzo Stato pagava tasse schiaccianti mentre clero e nobiltà erano esenti. Il <b>14 luglio 1789</b> il popolo prese la <b>Bastiglia</b> e l’Assemblea approvò la <b>Dichiarazione dei Diritti dell’Uomo e del Cittadino</b>: tutti uguali davanti alla legge!'
        ]
      },
      {
        vis: 'hg11_napoleon_code',
        text: [
          'After revolutionary turmoil and the Terror under Robespierre, general <b>Napoleon Bonaparte</b> took power (1799) and reshaped Europe. Even after his military defeat at Waterloo (1815), his <b>Civil Code (1804)</b>—legal equality for citizens, property rights, civil marriage, and abolition of feudal dues—remained the backbone of European and Italian law.',
          'Dopo il Terrore di Robespierre, <b>Napoleone Bonaparte</b> prese il potere nel 1799 e ridisegnò l’Europa. Anche dopo Waterloo (1815), il <b>Codice Civile (1804)</b>—uguaglianza giuridica, proprietà e abolizione del feudalesimo—restò il pilastro del diritto europeo.'
        ]
      }
    ],
    taunt: [
      'Born a noble, die a ruler; born a peasant, pay forever!',
      'Nato nobile, comanda sempre; nato contadino, paga in eterno!'
    ],
    quiz: [
      q(
        'What rallying slogan expressed the American colonists’ protest against British taxes?',
        'Quale slogan riassumeva la protesta dei coloni americani contro le tasse britanniche?',
        [
          ['No taxation without representation', 'Niente tasse senza rappresentanza parlamentare'],
          ['All roads lead to Paris', 'Tutte le strade portano a Parigi'],
          ['L’État, c’est moi', 'Lo Stato sono io'],
          ['One crop, one empire', 'Un solo raccolto, un solo impero']
        ],
        ['Colonists objected to paying taxes voted by a London Parliament where they had no elected MPs.', 'I coloni rifiutavano imposte decise da un Parlamento di Londra dove non avevano rappresentanti.']
      ),
      q(
        'What inequality inside France’s Three Estates triggered the 1789 French Revolution?',
        'Quale disuguaglianza tra i Tre Stati francesi scatenò la Rivoluzione del 1789?',
        [
          ['Clergy and nobility were mostly tax-exempt while the Third Estate bore the tax burden', 'Clero e nobiltà erano quasi esenti dalle tasse che ricadevano sul Terzo Stato'],
          ['Peasants held 90% of royal ministerial posts', 'I contadini occupavano il 90% dei ministeri reali'],
          ['Nobles were banned from owning any land', 'Ai nobili era vietato possedere terre'],
          ['Everyone already voted equally by secret ballot', 'Tutti votavano già a scrutinio segreto']
        ],
        ['The 98% Third Estate carried national taxation while having only one collective vote out of three.', 'Il Terzo Stato (98% della popolazione) sosteneva il fisco ma contava un solo voto su tre agli Stati Generali.']
      ),
      q(
        'Why does the 1804 Napoleonic Civil Code still matter in modern Europe and Italy?',
        'Perché il Codice Civile napoleonico del 1804 è ancora fondamentale in Europa e in Italia?',
        [
          ['It codified equality before the law, abolition of feudalism, and clear civil property rules', 'Sancì l’uguaglianza davanti alla legge, la fine del feudalesimo e regole civili moderne'],
          ['It restored medieval serfdom across Italy', 'Ripristinò la servitù della gleba in Italia'],
          ['It abolished all courts and judges', 'Abolì tutti i tribunali civili'],
          ['It forced every citizen to become a soldier for life', 'Obbligò ogni cittadino a fare il soldato a vita']
        ],
        ['Even post-1815 monarchs kept much of Napoleon’s modern legal framework.', 'Anche dopo il 1815 gran parte dell’Europa mantenne l’impianto giuridico moderno del Codice Civile.']
      ),
      q(
        'Which historic event happened on July 14, 1789 in Paris?',
        'Quale evento storico avvenne il 14 luglio 1789 a Parigi?',
        [
          ['The storming of the Bastille fortress-prison', 'La presa della fortezza-prigione della Bastiglia'],
          ['The Battle of Waterloo', 'La Battaglia di Waterloo'],
          ['The signing of the 1555 Peace of Augsburg', 'La firma della Pace di Augusta'],
          ['Galileo’s telescope demonstration in Venice', 'La dimostrazione del cannocchiale di Galileo']
        ],
        ['Capturing the Bastille symbolized the collapse of royal absolutism in France.', 'La presa della Bastiglia simboleggiò la caduta dell’assolutismo regio in Francia.']
      )
    ]
  }),
  makeHistGeoMission({
    id: 'hist_l3_m8',
    arc: 2,
    sec: '3.2 · BOSS',
    pages: '321–380',
    hue: 145,
    horns: 4,
    eyes: 3,
    boss: true,
    title: ['Italian Risorgimento & Unity (1861–1870)', 'Risorgimento Italiano e Unità (1861–1870)'],
    topic: ['Mazzini, 1848 Statuto, Cavour, Garibaldi 1000 & 1861 Kingdom', 'Mazzini, Statuto 1848, Cavour, Spedizione dei Mille e Unità 1861'],
    demon: ['Fragmented Crown', 'Corona Divisa'],
    tech: ['Tricolore Synthesis', 'Sintesi del Risorgimento'],
    lessons: [
      {
        vis: 'hg11_divided_italy_1815',
        text: [
          'After Napoleon fell, the 1815 Congress of Vienna carved Italy back into seven divided states—Austria ruled Lombardy-Venetia, Bourbons ruled the Two Sicilies, and the Pope ruled central Italy. Think of trying to send a parcel across Italy and paying customs taxes seven times! Young patriots dreamed of one free <b>nation</b>.',
          'Dopo Napoleone, il Congresso di Vienna (1815) ridivise l’Italia in sette Stati: l’Austria dominava il Lombardo-Veneto, i Borbone il Sud e il Papa il Centro. I patrioti sognavano un’unica <b>nazione</b> libera da dogane interne e dominazione straniera.'
        ]
      },
      {
        vis: 'hg11_risorgimento_leaders',
        text: [
          'Unifying Italy took three very different strategies working together like gears in one watch: <b>Giuseppe Mazzini</b> inspired hearts with <i>Giovine Italia</i> ("Young Italy") for a democratic republic; Piedmont’s <b>Camillo Cavour</b> used clever diplomacy, railways, and alliances (Crimean War + France 1859); and <b>Giuseppe Garibaldi</b> led 1,000 red-shirt volunteers south in 1860!',
          'L’Unità nacque da tre strategie diverse ma complementari: <b>Giuseppe Mazzini</b> accese gli animi con la <i>Giovine Italia</i> repubblicana; <b>Camillo di Cavour</b> usò diplomazia, modernizzazione e alleanza con la Francia (1859); <b>Giuseppe Garibaldi</b> guidò i <b>Mille</b> nel 1860!'
        ]
      },
      {
        vis: 'hg11_unification_timeline_1861',
        text: [
          'On <b>October 26, 1860</b> at Teano, Garibaldi handed southern Italy over to King Vittorio Emanuele II to avoid civil war. On <b>March 17, 1861</b> the <b>Kingdom of Italy</b> was proclaimed (extending Piedmont’s 1848 <i>Statuto Albertino</i>), followed by Veneto (1866) and Rome (<b>1870</b>, Porta Pia) as the capital.',
          'Il <b>26 ottobre 1860</b> a Teano Garibaldi consegnò il Sud a Vittorio Emanuele II per evitare una guerra civile. Il <b>17 marzo 1861</b> fu proclamato il <b>Regno d’Italia</b> (con lo <i>Statuto Albertino</i>), completato con Veneto (1866) e Roma capitale (<b>1870</b>, breccia di Porta Pia).'
        ]
      }
    ],
    taunt: [
      'Seven rival courts, foreign Austrian fortresses, and three quarreling Italian visions—unity is impossible!',
      'Sette corti rivali, fortezze austriache e tre visioni italiane diverse: l’unità è impossibile!'
    ],
    quiz: [
      q(
        'How did Mazzini, Cavour, and Garibaldi each contribute a distinct piece to Italian unification?',
        'Quale ruolo distinto svolsero Mazzini, Cavour e Garibaldi per l’Unità d’Italia?',
        [
          ['Mazzini built national ideals, Cavour orchestrated diplomacy & alliances, Garibaldi liberated the South militarily', 'Mazzini diffuse l’ideale nazionale, Cavour guidò diplomazia e alleanze, Garibaldi liberò il Sud con i Mille'],
          ['All three served as Austrian governors in Milan', 'Tutti e tre furono governatori austriaci a Milano'],
          ['Garibaldi opposed unity and fought for Bourbon Naples', 'Garibaldi combatté per difendere il Regno borbonico'],
          ['Cavour abolished railways and telegraphs in Piedmont', 'Cavour demolì ferrovie e telegrafi in Piemonte']
        ],
        ['Ideals (Mazzini), diplomacy (Cavour), and volunteer courage (Garibaldi) combined into 1861 unity.', 'Ideale nazionale (Mazzini), diplomazia (Cavour) e impresa dei Mille (Garibaldi) si unirono nel 1861.']
      ),
      q(
        'What happened on March 17, 1861 in Turin?',
        'Che cosa avvenne il 17 marzo 1861 a Torino?',
        [
          ['The unified Kingdom of Italy was officially proclaimed under Vittorio Emanuele II', 'Venne proclamato ufficialmente il Regno d’Italia con re Vittorio Emanuele II'],
          ['Christopher Columbus set sail from Genoa', 'Cristoforo Colombo salpò da Genova'],
          ['The Council of Trent opened its first session', 'Si aprì il Concilio di Trento'],
          ['James Watt patented the coal steam engine', 'James Watt brevettò la macchina a vapore']
        ],
        ['After northern plebiscites and Garibaldi’s 1860 southern campaign, the Italian Parliament proclaimed unity in 1861.', 'Dopo i plebisciti e la Spedizione dei Mille, il Parlamento proclamò l’Unità d’Italia il 17 marzo 1861.']
      ),
      q(
        'Which historic compromise occurred at Teano on October 26, 1860?',
        'Quale incontro storico avvenne a Teano il 26 ottobre 1860?',
        [
          ['Garibaldi handed over the liberated South to Vittorio Emanuele II to preserve national unity', 'Garibaldi consegnò il Sud liberato a Vittorio Emanuele II per salvare l’unità nazionale'],
          ['Austria annexed Rome and Naples', 'L’Austria annesse Roma e Napoli'],
          ['Napoleon III signed the Peace of Augsburg', 'Napoleone III firmò la Pace di Augusta'],
          ['Venice declared independence from Europe', 'Venezia dichiarò l’indipendenza dall’Europa']
        ],
        ['Garibaldi put Italy’s unity above his own republican preferences at the Teano handshake.', 'A Teano Garibaldi antepose l’unità italiana alle proprie convinzioni repubblicane.']
      ),
      q(
        'Which two territories completed Italian territorial unification between 1866 and 1870?',
        'Quali due territori completarono l’unificazione territoriale italiana tra il 1866 e il 1870?',
        [
          ['Veneto (1866) and Rome (1870)', 'Il Veneto (1866) e Roma (1870)'],
          ['Piedmont (1866) and Sicily (1870)', 'Piemonte (1866) e Sicilia (1870)'],
          ['Milan (1866) and Florence (1870)', 'Milano (1866) e Firenze (1870)'],
          ['Corsica (1866) and Malta (1870)', 'Corsica (1866) e Malta (1870)']
        ],
        ['Veneto joined after 1866 and Rome entered through Porta Pia in September 1870, becoming the capital.', 'Il Veneto entrò nel 1866 e Roma fu riunita nel settembre 1870 divenendo capitale.']
      )
    ]
  })
];
