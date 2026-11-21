import type { Language } from '../types';

/**
 * Diagrams for the Grade 5 History missions added to follow the whole textbook
 * "Che meraviglia! Storia 5". Each is three coloured panels; the shared History/Geography motion
 * helper (histGeoMotion.ts) lights the panels up in turn.
 */
type Pair = [string, string];
type Column = { title: Pair; lines: [Pair, Pair, Pair] };

const l = (lang: Language, p: Pair) => (lang === 'it' ? p[1] : p[0]);

const panel = (x: number, y: number, w: number, h: number, stroke: string, bg = 'rgba(255,255,255,0.03)') =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${bg}" stroke="${stroke}" stroke-width="1.6"/>`;

const COLOURS: Array<[string, string]> = [
  ['#45d8ff', 'rgba(69,216,255,0.08)'],
  ['#ffd166', 'rgba(255,209,102,0.08)'],
  ['#38ef7d', 'rgba(56,239,125,0.08)']
];

/** A diagram made of two or three side-by-side panels, each with a heading and three short lines. */
/** Shrinks a line a little when it would not fit the panel width (panels are ~194px for three columns). */
const fit = (text: string, base: number, width: number) => Math.max(9, Math.min(base, Math.floor((width - 14) / (text.length * 0.54) * 10) / 10));

const columns = (label: string, cols: Column[], lang: Language) => {
  const n = cols.length;
  const gap = 10;
  const w = Math.floor((604 - gap * (n - 1)) / n);
  const body = cols
    .map((c, i) => {
      const x = 18 + i * (w + gap);
      const cx = x + w / 2;
      const [stroke, bg] = COLOURS[i % COLOURS.length];
      return `${panel(x, 16, w, 182, stroke, bg)}
    <text x="${cx}" y="46" text-anchor="middle" fill="${stroke}" font-weight="800" font-size="${fit(l(lang, c.title), 14, w)}">${l(lang, c.title)}</text>
    <text x="${cx}" y="82" text-anchor="middle" font-size="${fit(l(lang, c.lines[0]), 13, w)}">${l(lang, c.lines[0])}</text>
    <text x="${cx}" y="116" text-anchor="middle" class="sm" font-size="${fit(l(lang, c.lines[1]), 12, w)}">${l(lang, c.lines[1])}</text>
    <text x="${cx}" y="148" text-anchor="middle" class="sm" font-size="${fit(l(lang, c.lines[2]), 12, w)}">${l(lang, c.lines[2])}</text>`;
    })
    .join('\n');
  return `<svg viewBox="0 0 640 215" class="dia" role="img" aria-label="${label}">${body}</svg>`;
};

const C = (title: Pair, a: Pair, b: Pair, c: Pair): Column => ({ title, lines: [a, b, c] });

export const HIST_VISUAL_BUILDERS_G5_EXPANSION: Record<string, (lang: Language) => string> = {
  /* ---- Rivers, seas and Mycenae ---- */
  hg5_rivers_seas: lang => columns('Civilisations of the rivers and of the seas', [
    C(['RIVERS', 'FIUMI'], ['Nile · Tigris · Euphrates', 'Nilo · Tigri · Eufrate'], ['Flooding left rich soil', 'Le piene davano terra fertile'], ['Farming fed big cities', 'I campi sfamavano le città']),
    C(['SEAS', 'MARI'], ['Phoenicians · Cretans', 'Fenici · Cretesi'], ['Ships carried goods', 'Le navi portavano merci'], ['Ports and trade routes', 'Porti e rotte commerciali']),
    C(['GREEKS', 'GRECI'], ['Land of coasts and islands', 'Terra di coste e isole'], ['Little flat farmland', 'Poca terra da coltivare'], ['So they sailed and traded', 'Così commerciavano per mare'])
  ], lang),
  hg5_mycenae: lang => columns('The fortress-city of Mycenae', [
    C(['WALLS', 'MURA'], ['Huge stone blocks', 'Enormi blocchi di pietra'], ['Built on a hill', 'Costruita su un’altura'], ['Protected the palace', 'Proteggevano il palazzo']),
    C(['LION GATE', 'PORTA DEI LEONI'], ['Main gate of Mycenae', 'Ingresso principale di Micene'], ['Two lions carved above', 'Due leoni scolpiti sopra'], ['Still standing today', 'Ancora in piedi oggi']),
    C(['SOCIETY', 'SOCIETÀ'], ['A king in the palace', 'Un re nel palazzo'], ['Warriors and officials', 'Guerrieri e funzionari'], ['Farmers and craftsmen', 'Contadini e artigiani'])
  ], lang),
  hg5_mycenae_gold: lang => columns('Gold, writing and trade of the Mycenaeans', [
    C(['ROYAL TOMBS', 'TOMBE REALI'], ['Rich burials of princes', 'Ricche sepolture di principi'], ['Gold masks and cups', 'Maschere e coppe d’oro'], ['Weapons of bronze', 'Armi di bronzo']),
    C(['WRITING', 'SCRITTURA'], ['Linear B tablets', 'Tavolette in lineare B'], ['An early form of Greek', 'Una forma antica di greco'], ['Lists of goods', 'Elenchi di merci']),
    C(['ACTIVITIES', 'ATTIVITÀ'], ['Farming and herding', 'Agricoltura e allevamento'], ['Bronze and pottery', 'Bronzo e ceramiche'], ['Trade across the sea', 'Commerci per mare'])
  ], lang),

  /* ---- Colonies, Persians and the Peloponnesian War ---- */
  hg5_greek_colonies: lang => columns('Greek colonies around the Mediterranean', [
    C(['WHY?', 'PERCHÉ?'], ['Too many people', 'Troppa gente'], ['Little farmland', 'Poca terra coltivabile'], ['New markets for trade', 'Nuovi mercati per i commerci']),
    C(['WHERE?', 'DOVE?'], ['Southern Italy & Sicily', 'Sud Italia e Sicilia'], ['Coasts of France', 'Coste della Francia'], ['Shores of the Black Sea', 'Rive del Mar Nero']),
    C(['EXAMPLES', 'ESEMPI'], ['Syracuse', 'Siracusa'], ['Naples', 'Napoli'], ['Marseille', 'Marsiglia'])
  ], lang),
  hg5_persian_wars: lang => columns('The Persian Wars', [
    C(['THE PERSIANS', 'I PERSIANI'], ['A huge empire', 'Un impero immenso'], ['Wanted to conquer Greece', 'Volevano conquistare i Greci'], ['Many soldiers and ships', 'Molti soldati e navi']),
    C(['KEY BATTLES', 'BATTAGLIE CHIAVE'], ['Marathon · 490 BC', 'Maratona · 490 a.C.'], ['Thermopylae · 480 BC', 'Termopili · 480 a.C.'], ['Salamis · 480 BC', 'Salamina · 480 a.C.']),
    C(['RESULT', 'ESITO'], ['Greeks united', 'I Greci si unirono'], ['Persians pushed back', 'I Persiani furono respinti'], ['Athens grew powerful', 'Atene divenne potente'])
  ], lang),
  hg5_peloponnesian_war: lang => columns('The Peloponnesian War', [
    C(['ATHENS + ALLIES', 'ATENE + ALLEATI'], ['Strong navy', 'Forte flotta'], ['Rich from trade', 'Ricca grazie ai commerci'], ['Democratic', 'Democratica']),
    C(['SPARTA + ALLIES', 'SPARTA + ALLEATI'], ['Strong land army', 'Forte esercito di terra'], ['Led the Peloponnese', 'Guidava il Peloponneso'], ['Ruled by kings & elders', 'Re e anziani al governo']),
    C(['431–404 BC', '431–404 a.C.'], ['A long war', 'Una lunga guerra'], ['Sparta won', 'Vinse Sparta'], ['Greek cities weakened', 'Le poleis si indebolirono'])
  ], lang),

  /* ---- Macedonians and the Hellenistic age ---- */
  hg5_macedonia_phalanx: lang => columns('Macedonia and its army', [
    C(['MACEDONIA', 'MACEDONIA'], ['North of Greece', 'A nord della Grecia'], ['Ruled by a king', 'Governata da un re'], ['Philip II made it strong', 'Filippo II la rese forte']),
    C(['THE PHALANX', 'LA FALANGE'], ['Soldiers close together', 'Soldati ben serrati'], ['Very long spears', 'Lunghissime lance'], ['Hard to break through', 'Difficile da sfondare']),
    C(['THE CAVALRY', 'LA CAVALLERIA'], ['Fast horsemen', 'Cavalieri veloci'], ['Struck the enemy’s side', 'Colpivano di fianco il nemico'], ['Worked with the phalanx', 'Agiva con la falange'])
  ], lang),
  hg5_alexander_empire: lang => columns('Alexander the Great and his empire', [
    C(['THE KING', 'IL RE'], ['King at about 20', 'Re a circa 20 anni'], ['Pupil of Aristotle', 'Allievo di Aristotele'], ['A brave commander', 'Un comandante coraggioso']),
    C(['CONQUESTS', 'CONQUISTE'], ['Persian Empire', 'Impero persiano'], ['Egypt', 'Egitto'], ['Lands up to India', 'Terre fino all’India']),
    C(['AFTER HIM', 'DOPO DI LUI'], ['Died young in 323 BC', 'Morì giovane nel 323 a.C.'], ['Generals shared the empire', 'I generali si divisero tutto'], ['New kingdoms appeared', 'Nacquero nuovi regni'])
  ], lang),
  hg5_hellenistic_age: lang => columns('The Hellenistic age', [
    C(['MIXED CULTURES', 'CULTURE MESCOLATE'], ['Greek and local ways', 'Usi greci e locali'], ['Greek spoken widely', 'Il greco molto parlato'], ['New cities founded', 'Nuove città fondate']),
    C(['ALEXANDRIA', 'ALESSANDRIA'], ['City in Egypt', 'Città in Egitto'], ['A great library', 'Una grande biblioteca'], ['The Pharos lighthouse', 'Il faro di Pharos']),
    C(['SCIENCE', 'SCIENZA'], ['Scholars met and studied', 'Studiosi si incontravano'], ['Geometry: Euclid', 'Geometria: Euclide'], ['Ideas travelled far', 'Le idee viaggiavano lontano'])
  ], lang),

  /* ---- More Italic peoples ---- */
  hg5_north_italic: lang => columns('Peoples of northern Italy', [
    C(['THE CELTS', 'I CELTI'], ['Lived in the Po valley', 'Vivevano nella Valpadana'], ['Skilled with iron', 'Abili con il ferro'], ['Called Gauls by Romans', 'Chiamati Galli dai Romani']),
    C(['THE CAMUNI', 'I CAMUNI'], ['Val Camonica', 'Val Camonica'], ['Thousands of rock carvings', 'Migliaia di incisioni'], ['Scenes of daily life', 'Scene di vita quotidiana']),
    C(['VENETI & LIGURI', 'VENETI E LIGURI'], ['Veneti: horses and trade', 'Veneti: cavalli e commerci'], ['Liguri: hills and coast', 'Liguri: colline e coste'], ['Each had its own customs', 'Ognuno con i propri costumi'])
  ], lang),
  hg5_bronze_iron_villages: lang => columns('Villages of the Bronze and Iron Ages', [
    C(['TERRAMARICOLI', 'TERRAMARICOLI'], ['Po plain, Bronze Age', 'Pianura padana, Bronzo'], ['Raised earth platforms', 'Piattaforme di terra rialzate'], ['Embankment and ditch', 'Terrapieno e fossato']),
    C(['VILLANOVANS', 'VILLANOVIANI'], ['Early Iron Age', 'Prima Età del Ferro'], ['Cremation in urns', 'Cremazione in urne'], ['Close to the first Etruscans', 'Vicini ai primi Etruschi']),
    C(['LEGACY', 'EREDITÀ'], ['Tools and weapons', 'Attrezzi e armi'], ['Pottery and urns', 'Ceramiche e urne'], ['Clues for archaeologists', 'Indizi per gli archeologi'])
  ], lang),
  hg5_south_islands: lang => columns('Peoples of the south and of the islands', [
    C(['SANNITI', 'SANNITI'], ['Mountains of the south', 'Montagne del sud'], ['Brave warriors', 'Guerrieri coraggiosi'], ['Fought Rome for years', 'Combatterono Roma per anni']),
    C(['LUCANI', 'LUCANI'], ['Lived in Lucania', 'Vivevano in Lucania'], ['Farmers and herders', 'Contadini e pastori'], ['Neighbours of the Greeks', 'Vicini dei Greci']),
    C(['SARDI', 'SARDI'], ['Island of Sardinia', 'Isola di Sardegna'], ['Built stone nuraghi', 'Costruirono nuraghi di pietra'], ['Skilled bronze workers', 'Abili lavoratori del bronzo'])
  ], lang),

  /* ---- Rome conquers Italy and the Mediterranean ---- */
  hg5_roman_conquest_italy: lang => columns('Rome conquers Italy', [
    C(['NEIGHBOURS', 'I VICINI'], ['Latins and Etruscans', 'Latini ed Etruschi'], ['Samnites in the hills', 'Sanniti sulle montagne'], ['Greek cities in the south', 'Città greche del sud']),
    C(['HOW ROME WON', 'COME VINSE ROMA'], ['Strong legions', 'Legioni forti'], ['Alliances with the beaten', 'Alleanze con i vinti'], ['Roads linking the lands', 'Strade che univano le terre']),
    C(['RESULT', 'RISULTATO'], ['Rome ruled the peninsula', 'Roma dominava la penisola'], ['Allies sent soldiers', 'Gli alleati mandavano soldati'], ['Ready to look overseas', 'Pronta a guardare oltremare'])
  ], lang),
  hg5_punic_wars: lang => columns('The Punic Wars', [
    C(['CARTHAGE', 'CARTAGINE'], ['City in North Africa', 'Città del Nord Africa'], ['Rich sea traders', 'Ricchi mercanti di mare'], ['Strong fleet', 'Forte flotta']),
    C(['HANNIBAL', 'ANNIBALE'], ['Crossed the Alps', 'Attraversò le Alpi'], ['Brought war elephants', 'Portò elefanti da guerra'], ['Won battles in Italy', 'Vinse battaglie in Italia']),
    C(['ROME WINS', 'VINCE ROMA'], ['Scipio won at Zama', 'Scipione vinse a Zama'], ['202 BC', '202 a.C.'], ['Carthage destroyed, 146 BC', 'Cartagine distrutta, 146 a.C.'])
  ], lang),
  hg5_provinces_navy: lang => columns('Provinces and the Roman navy', [
    C(['THE NAVY', 'LA FLOTTA'], ['Rome built ships', 'Roma costruì navi'], ['To fight Carthage at sea', 'Per sfidare Cartagine in mare'], ['Boarding bridges helped', 'Ponti d’abbordaggio aiutavano']),
    C(['PROVINCES', 'LE PROVINCE'], ['Lands outside Italy', 'Terre fuori dall’Italia'], ['Ruled by Roman officials', 'Governate da magistrati'], ['Paid taxes to Rome', 'Pagavano tributi a Roma']),
    C(['BENEFITS', 'VANTAGGI'], ['Wealth flowed to Rome', 'La ricchezza arrivava a Roma'], ['Slaves and grain arrived', 'Arrivavano schiavi e grano'], ['Safer sea routes', 'Rotte marittime più sicure'])
  ], lang),

  /* ---- Caesar and the end of the Republic ---- */
  hg5_republic_crisis: lang => columns('The crisis of the Republic', [
    C(['UNEQUAL WEALTH', 'DISUGUAGLIANZE'], ['A few grew very rich', 'Pochi diventarono ricchissimi'], ['Many farmers lost land', 'Molti contadini persero terra'], ['Poor crowds in the city', 'Folle di poveri in città']),
    C(['POWERFUL GENERALS', 'GENERALI POTENTI'], ['Armies loyal to a leader', 'Eserciti fedeli al capo'], ['Rivals fought for power', 'I rivali si contendevano il potere'], ['The Senate lost control', 'Il Senato perse il controllo']),
    C(['CIVIL WARS', 'GUERRE CIVILI'], ['Romans fought Romans', 'Romani contro Romani'], ['Years of unrest', 'Anni di disordini'], ['Calls for a strong ruler', 'Si chiedeva un capo forte'])
  ], lang),
  hg5_caesar_gaul: lang => columns('Julius Caesar', [
    C(['GAUL', 'LA GALLIA'], ['Conquered Gaul', 'Conquistò la Gallia'], ['58 to 50 BC', 'Dal 58 al 50 a.C.'], ['Won fame and loyal legions', 'Ottenne fama e legioni fedeli']),
    C(['THE RUBICON', 'IL RUBICONE'], ['Crossed it with his army', 'Lo attraversò con l’esercito'], ['49 BC', '49 a.C.'], ['Civil war began', 'Iniziò la guerra civile']),
    C(['DICTATOR', 'DITTATORE'], ['Beat his rival Pompey', 'Sconfisse il rivale Pompeo'], ['Held great power alone', 'Ebbe grande potere da solo'], ['Many senators feared him', 'Molti senatori lo temevano'])
  ], lang),
  hg5_caesar_ides: lang => columns('From Caesar to Augustus', [
    C(['44 BC', '44 a.C.'], ['The Ides of March', 'Le Idi di marzo'], ['Senators killed Caesar', 'I senatori uccisero Cesare'], ['They feared a king', 'Temevano un re']),
    C(['NEW WARS', 'NUOVE GUERRE'], ['Civil wars again', 'Di nuovo guerre civili'], ['Caesar’s heir: Octavian', 'L’erede di Cesare: Ottaviano'], ['He defeated his rivals', 'Sconfisse i rivali']),
    C(['27 BC', '27 a.C.'], ['Octavian became Augustus', 'Ottaviano divenne Augusto'], ['The Empire began', 'Iniziò l’Impero'], ['Peace after the wars', 'La pace dopo le guerre'])
  ], lang),

  /* ---- Christianity and the fall of the Western Empire ---- */
  hg5_christianity: lang => columns('Christianity in the Roman Empire', [
    C(['ORIGINS', 'LE ORIGINI'], ['Began in Judea', 'Nacque in Giudea'], ['Teachings of Jesus', 'Insegnamenti di Gesù'], ['Spread by his followers', 'Diffuso dai suoi seguaci']),
    C(['SPREADING', 'LA DIFFUSIONE'], ['Along Roman roads and seas', 'Lungo strade e mari romani'], ['Into many cities', 'In molte città'], ['Persecuted at times', 'A volte perseguitato']),
    C(['FREEDOM', 'LA LIBERTÀ'], ['Edict of Milan, 313', 'Editto di Milano, 313'], ['Constantine allowed worship', 'Costantino concesse il culto'], ['Later the state religion', 'Poi religione di Stato'])
  ], lang),
  hg5_empire_division: lang => columns('An empire in difficulty and divided', [
    C(['TROUBLES', 'I PROBLEMI'], ['Civil wars', 'Guerre civili'], ['Invasions on the borders', 'Invasioni ai confini'], ['Money problems', 'Problemi economici']),
    C(['TWO PARTS', 'DUE PARTI'], ['West: Rome, later Ravenna', 'Ovest: Roma, poi Ravenna'], ['East: capital Constantinople', 'Est: Costantinopoli'], ['Each with its own emperor', 'Ognuna con un imperatore']),
    C(['WHY DIVIDE?', 'PERCHÉ DIVIDERE?'], ['Too big for one ruler', 'Troppo grande per un capo'], ['Easier to defend', 'Più facile da difendere'], ['Faster decisions', 'Decisioni più rapide'])
  ], lang),
  hg5_fall_western_empire: lang => columns('The fall of the Western Roman Empire', [
    C(['INVASIONS', 'LE INVASIONI'], ['Goths, Vandals, Franks', 'Goti, Vandali, Franchi'], ['Entered the empire', 'Entrarono nell’impero'], ['Rome sacked in 410', 'Roma saccheggiata nel 410']),
    C(['476 AD', '476 d.C.'], ['Odoacer deposed the emperor', 'Odoacre depose l’imperatore'], ['Romulus Augustulus', 'Romolo Augustolo'], ['End of the West', 'Fine dell’Occidente']),
    C(['THE EAST', 'L’ORIENTE'], ['Empire went on', 'L’impero continuò'], ['Capital Constantinople', 'Capitale Costantinopoli'], ['Lasted about 1000 years', 'Durò circa mille anni'])
  ], lang)
};
