import type { Mission } from '../types';
import { makeHistGeoMission, q } from './histGeoCommon';

/**
 * Grade 5 History missions added so the course follows the whole textbook
 * "Che meraviglia! Storia 5" (Tiziana Canali, Raffaello Scuola): the first civilisations and the
 * Mycenaeans, the Greek wars, the Macedonians, the Italic peoples, Rome's conquests, Caesar, and
 * Christianity with the fall of the Western Empire.
 *
 * Drafted from the book's table of contents and well-established facts, NOT from the text of its
 * pages: a teacher should check names, dates and wording against the cited pages.
 */
const lesson = (vis: string, en: string, it: string) => ({ vis, text: [`<p>${en}</p>`, `<p>${it}</p>`] as [string, string] });

export const HIST5_EXPANSION_MISSIONS: Mission[] = [
  /* ------------------------------------------------------------------ m5 */
  makeHistGeoMission({
    id: 'hist_g5_m5',
    arc: 0,
    sec: 'H5.5',
    pages: '4–21',
    hue: 40,
    title: ['Rivers, Seas & Mycenae', 'Fiumi, mari e Micene'],
    topic: ['River and sea civilisations, the Mycenaeans and their fortress-city', 'Civiltà dei fiumi e dei mari, i Micenei e la loro città-fortezza'],
    demon: ['Fortress Phantom', 'Fantasma della Fortezza'],
    tech: ['Scroll Form · Lion Gate', 'Stile Pergamena · Porta dei Leoni'],
    lessons: [
      lesson('hg5_rivers_seas',
        'The first great civilisations grew beside <b>rivers</b>: the Egyptians along the Nile, and the peoples of Mesopotamia between the Tigris and the Euphrates. When the rivers flooded they left rich soil, so farmers could grow enough food for big cities. Other peoples, like the Phoenicians, the Cretans and the Greeks, lived by the <b>sea</b> and travelled in ships to trade.',
        'Le prime grandi civiltà nacquero lungo i <b>fiumi</b>: gli Egizi lungo il Nilo e i popoli della Mesopotamia tra il Tigri e l’Eufrate. Quando i fiumi straripavano lasciavano terra fertile, così i contadini producevano cibo per intere città. Altri popoli, come i Fenici, i Cretesi e i Greci, vivevano vicino al <b>mare</b> e viaggiavano con le navi per commerciare.'),
      lesson('hg5_mycenae',
        'In Greece, long before Athens and Sparta, the <b>Mycenaeans</b> built a fortress-city called Mycenae on a hill. Its thick stone walls protected the king’s palace, and the main entrance, the <b>Lion Gate</b>, was decorated with two carved lions. The king ruled with warriors and officials, while farmers and craftsmen worked the land and made goods.',
        'In Grecia, molto prima di Atene e di Sparta, i <b>Micenei</b> costruirono su un’altura la città-fortezza di Micene. Le spesse mura di pietra proteggevano il palazzo del re e l’ingresso principale, la <b>Porta dei Leoni</b>, era decorato con due leoni scolpiti. Il re governava con guerrieri e funzionari, mentre contadini e artigiani lavoravano la terra e producevano oggetti.'),
      lesson('hg5_mycenae_gold',
        'Rich Mycenaean graves hold gold masks, cups and bronze weapons. The Mycenaeans also wrote on clay tablets in a script called <b>Linear B</b>, an early form of Greek, mostly to list goods and supplies for the palace. They farmed, made bronze objects and pottery, and traded across the sea.',
        'Le ricche tombe micenee contengono maschere e coppe d’oro e armi di bronzo. I Micenei scrivevano anche su tavolette d’argilla con la scrittura chiamata <b>lineare B</b>, una forma antica di greco, soprattutto per elencare le merci e le provviste del palazzo. Coltivavano, lavoravano il bronzo, facevano ceramiche e commerciavano per mare.')
    ],
    sort: {
      type: 'sort',
      title: ['River or sea civilisation?', 'Civiltà del fiume o del mare?'],
      hint: ['Sort each clue to the kind of civilisation it describes.', 'Abbina ogni indizio al tipo di civiltà.'],
      cats: [['River civilisations', 'Civiltà dei fiumi'], ['Sea civilisations', 'Civiltà dei mari']],
      items: [
        { n: ['The Nile floods and leaves rich soil', 'Il Nilo straripa e lascia terra fertile'], i: 'droplet', c: 0, why: ['River floods made farming rich and reliable.', 'Le piene dei fiumi rendevano l’agricoltura ricca e sicura.'] },
        { n: ['Phoenician ships carry goods to far ports', 'Navi fenicie portano merci in porti lontani'], i: 'ship', c: 1, why: ['The Phoenicians lived by sea trade.', 'I Fenici vivevano di commercio marittimo.'] },
        { n: ['Land between the Tigris and the Euphrates', 'Terra tra il Tigri e l’Eufrate'], i: 'map', c: 0, why: ['Mesopotamia means “between the rivers”.', 'Mesopotamia significa “tra i fiumi”.'] },
        { n: ['Harbours on the coasts and islands of Greece', 'Porti sulle coste e sulle isole della Grecia'], i: 'globe', c: 1, why: ['Greece’s coasts pushed people to sail and trade.', 'Le coste della Grecia spingevano la gente a navigare e commerciare.'] }
      ]
    },
    taunt: ['<p>Walls and gates are useless! Nobody ever needed a fortress.</p>', '<p>Mura e porte non servono a niente! Nessuno ha mai avuto bisogno di una fortezza.</p>'],
    quiz: [
      q('Why did the first great civilisations grow beside rivers?', 'Perché le prime grandi civiltà nacquero lungo i fiumi?', [
        ['Floods left fertile soil and water for crops', 'Le piene lasciavano terra fertile e acqua per i campi'],
        ['Rivers kept enemies away forever', 'I fiumi tenevano lontani i nemici per sempre'],
        ['There was no farming near seas', 'Vicino ai mari non si coltivava'],
        ['Rivers were made of gold', 'I fiumi erano fatti d’oro']
      ], ['Rich soil and water made large harvests possible.', 'Terra fertile e acqua rendevano possibili grandi raccolti.']),
      q('What was the Lion Gate?', 'Che cos’era la Porta dei Leoni?', [
        ['The main entrance of Mycenae, decorated with two lions', 'L’ingresso principale di Micene, decorato con due leoni'],
        ['A temple on the island of Crete', 'Un tempio sull’isola di Creta'],
        ['A Roman arena', 'Un’arena romana'],
        ['A harbour in Egypt', 'Un porto in Egitto']
      ], ['The gate is still standing at Mycenae today.', 'La porta si trova ancora a Micene.']),
      q('What did the Mycenaeans write with Linear B?', 'Che cosa scrivevano i Micenei con la lineare B?', [
        ['Lists of goods and supplies on clay tablets', 'Elenchi di merci e provviste su tavolette d’argilla'],
        ['Long novels on paper', 'Lunghi romanzi su carta'],
        ['Letters by email', 'Lettere per posta elettronica'],
        ['Roman laws', 'Leggi romane']
      ], ['Linear B was an early form of Greek used for palace records.', 'La lineare B era una forma antica di greco usata per i registri del palazzo.']),
      q('Which precious metal were the Mycenaean funeral masks made of?', 'Di quale metallo prezioso erano fatte le maschere funerarie micenee?', [
        ['Gold', 'Oro'], ['Plastic', 'Plastica'], ['Aluminium', 'Alluminio'], ['Wood only', 'Solo legno']
      ], ['Gold masks and cups were found in royal graves at Mycenae.', 'Maschere e coppe d’oro sono state trovate nelle tombe reali di Micene.'])
    ]
  }),

  /* ------------------------------------------------------------------ m6 */
  makeHistGeoMission({
    id: 'hist_g5_m6',
    arc: 1,
    sec: 'H5.6',
    pages: '42–49',
    hue: 18,
    title: ['Colonies, Persians & the Great War', 'Colonie, Persiani e la grande guerra'],
    topic: ['Greek colonies, the Persian Wars and the Peloponnesian War', 'Le colonie greche, le guerre persiane e la guerra del Peloponneso'],
    demon: ['Armada Shade', 'Ombra dell’Armata'],
    tech: ['Scroll Form · Marathon Run', 'Stile Pergamena · Corsa di Maratona'],
    lessons: [
      lesson('hg5_greek_colonies',
        'Greece had little flat farmland and many people, so Greek cities sent groups of settlers across the sea to found <b>colonies</b>. Colonies grew up in southern Italy and Sicily, on the coasts of France and around the Black Sea. Syracuse, Naples and Marseille began as Greek colonies. They were new markets for trade, and Greek culture spread with them.',
        'La Grecia aveva poca terra pianeggiante e molta gente, così le città greche mandarono gruppi di coloni oltremare a fondare <b>colonie</b>. Sorsero colonie nel Sud Italia e in Sicilia, sulle coste della Francia e intorno al Mar Nero. Siracusa, Napoli e Marsiglia nacquero come colonie greche. Erano nuovi mercati per i commerci e con loro si diffuse la cultura greca.'),
      lesson('hg5_persian_wars',
        'The huge <b>Persian Empire</b> wanted to conquer the Greek cities. In 490 BC the Athenians won the battle of <b>Marathon</b>. In 480 BC the Spartan king Leonidas and his men held the narrow pass of <b>Thermopylae</b>, and the Greek fleet won at <b>Salamis</b>. The poleis had joined forces, the Persians were pushed back, and Athens became very powerful.',
        'Il vasto <b>impero persiano</b> voleva conquistare le città greche. Nel 490 a.C. gli Ateniesi vinsero la battaglia di <b>Maratona</b>. Nel 480 a.C. il re spartano Leonida e i suoi uomini difesero lo stretto passo delle <b>Termopili</b> e la flotta greca vinse a <b>Salamina</b>. Le poleis si erano unite, i Persiani furono respinti e Atene divenne molto potente.'),
      lesson('hg5_peloponnesian_war',
        'After the Persian Wars, Athens and Sparta became rivals. Athens had a strong navy and led many allies; Sparta had a strong land army and led the cities of the Peloponnese. Their long <b>Peloponnesian War</b> lasted from 431 to 404 BC. Sparta won, but the war left all the Greek cities weaker.',
        'Dopo le guerre persiane, Atene e Sparta diventarono rivali. Atene aveva una forte flotta e guidava molti alleati; Sparta aveva un forte esercito di terra e guidava le città del Peloponneso. La lunga <b>guerra del Peloponneso</b> durò dal 431 al 404 a.C. Vinse Sparta, ma la guerra lasciò tutte le città greche più deboli.')
    ],
    sort: {
      type: 'sort',
      title: ['Persian Wars or Peloponnesian War?', 'Guerre persiane o guerra del Peloponneso?'],
      hint: ['Which war does each clue belong to?', 'A quale guerra appartiene ogni indizio?'],
      cats: [['Persian Wars', 'Guerre persiane'], ['Peloponnesian War', 'Guerra del Peloponneso']],
      items: [
        { n: ['Greek cities unite against a huge empire', 'Le città greche si uniscono contro un grande impero'], i: 'shield', c: 0, why: ['The Greeks faced the Persians together.', 'I Greci affrontarono insieme i Persiani.'] },
        { n: ['Athens and Sparta fight each other', 'Atene e Sparta si combattono'], i: 'scale', c: 1, why: ['The two strongest poleis led opposing sides.', 'Le due poleis più forti guidavano schieramenti opposti.'] },
        { n: ['The battle of Marathon, 490 BC', 'La battaglia di Maratona, 490 a.C.'], i: 'trophy', c: 0, why: ['Marathon was an Athenian victory over Persia.', 'Maratona fu una vittoria ateniese sulla Persia.'] },
        { n: ['It ended with weaker Greek cities', 'Finì con città greche più deboli'], i: 'warn', c: 1, why: ['The long war exhausted the poleis.', 'La lunga guerra logorò le poleis.'] }
      ]
    },
    taunt: ['<p>The Greek cities will never agree on anything. Easy prey!</p>', '<p>Le città greche non si metteranno mai d’accordo. Facile preda!</p>'],
    quiz: [
      q('What is a colony?', 'Che cos’è una colonia?', [
        ['A new settlement founded by people from another land', 'Un nuovo insediamento fondato da gente venuta da un’altra terra'],
        ['A kind of warship', 'Un tipo di nave da guerra'],
        ['A school for athletes', 'Una scuola per atleti'],
        ['A Roman road', 'Una strada romana']
      ], ['Greek cities founded colonies across the Mediterranean.', 'Le città greche fondarono colonie in tutto il Mediterraneo.']),
      q('In 490 BC the Athenians won a famous battle at which place?', 'Nel 490 a.C. gli Ateniesi vinsero una famosa battaglia in quale luogo?', [
        ['Marathon', 'Maratona'], ['Pompeii', 'Pompei'], ['Zama', 'Zama'], ['Alexandria', 'Alessandria']
      ], ['Marathon was a key Greek victory over the Persians.', 'Maratona fu una vittoria greca decisiva sui Persiani.']),
      q('What did Leonidas and his men do at Thermopylae?', 'Che cosa fecero Leonida e i suoi uomini alle Termopili?', [
        ['They held a narrow pass against a much larger Persian army', 'Difesero uno stretto passo contro un esercito persiano molto più numeroso'],
        ['They built the Parthenon', 'Costruirono il Partenone'],
        ['They founded Naples', 'Fondarono Napoli'],
        ['They crossed the Alps', 'Attraversarono le Alpi']
      ], ['The narrow pass let a few soldiers delay a huge army.', 'Lo stretto passo permetteva a pochi soldati di rallentare un enorme esercito.']),
      q('What was the result of the Peloponnesian War?', 'Quale fu il risultato della guerra del Peloponneso?', [
        ['Sparta won, but the Greek cities were left weaker', 'Vinse Sparta, ma le città greche rimasero più deboli'],
        ['Athens conquered all of Italy', 'Atene conquistò tutta l’Italia'],
        ['The Persians took Athens at once', 'I Persiani presero subito Atene'],
        ['Rome won the war', 'Vinse Roma']
      ], ['The war lasted from 431 to 404 BC.', 'La guerra durò dal 431 al 404 a.C.'])
    ]
  }),

  /* ------------------------------------------------------------------ m7 */
  makeHistGeoMission({
    id: 'hist_g5_m7',
    arc: 2,
    sec: 'H5.7',
    pages: '50–61',
    hue: 48,
    title: ['Alexander & the Hellenistic World', 'Alessandro e il mondo ellenistico'],
    topic: ['Macedonia, Alexander the Great and the spread of Greek culture', 'La Macedonia, Alessandro Magno e la diffusione della cultura greca'],
    demon: ['Empire Splitter', 'Spezzaimperi'],
    tech: ['Scroll Form · Phalanx Shield', 'Stile Pergamena · Scudo della Falange'],
    lessons: [
      lesson('hg5_macedonia_phalanx',
        '<b>Macedonia</b> lay north of Greece and was ruled by a king. King Philip II made its army the strongest of the time. The soldiers fought in the <b>phalanx</b>, standing close together with very long spears, while fast horsemen struck the enemy’s side.',
        'La <b>Macedonia</b> si trovava a nord della Grecia ed era governata da un re. Il re Filippo II rese il suo esercito il più forte dell’epoca. I soldati combattevano nella <b>falange</b>, ben serrati con lunghissime lance, mentre veloci cavalieri colpivano il nemico di fianco.'),
      lesson('hg5_alexander_empire',
        'Philip’s son, <b>Alexander the Great</b>, became king at about 20. He defeated the Persian Empire, conquered Egypt and led his army as far as India. He died young, in 323 BC, and his generals divided the empire into new kingdoms.',
        'Il figlio di Filippo, <b>Alessandro Magno</b>, divenne re a circa 20 anni. Sconfisse l’impero persiano, conquistò l’Egitto e portò il suo esercito fino all’India. Morì giovane, nel 323 a.C., e i suoi generali si divisero l’impero in nuovi regni.'),
      lesson('hg5_hellenistic_age',
        'In the lands Alexander conquered, Greek and local customs mixed. This is called the <b>Hellenistic age</b>. Greek became a widely spoken language and new cities were founded. The most famous was <b>Alexandria</b> in Egypt, with its great library and its lighthouse, the Pharos. Scholars such as the mathematician Euclid worked there.',
        'Nelle terre conquistate da Alessandro, usi greci e locali si mescolarono. Questo periodo si chiama <b>età ellenistica</b>. Il greco divenne una lingua molto parlata e furono fondate nuove città. La più famosa fu <b>Alessandria</b> d’Egitto, con la sua grande biblioteca e il suo faro, il Pharos. Vi lavorarono studiosi come il matematico Euclide.')
    ],
    sort: {
      type: 'sort',
      title: ['Army or culture?', 'Esercito o cultura?'],
      hint: ['Is each clue about Alexander’s army or about the Hellenistic culture that followed?', 'Ogni indizio riguarda l’esercito di Alessandro o la cultura ellenistica che seguì?'],
      cats: [['Macedonian army', 'Esercito macedone'], ['Hellenistic culture', 'Cultura ellenistica']],
      items: [
        { n: ['Soldiers with very long spears in tight rows', 'Soldati con lunghissime lance in file serrate'], i: 'shield', c: 0, why: ['That is the phalanx.', 'Questa è la falange.'] },
        { n: ['A great library in Alexandria', 'Una grande biblioteca ad Alessandria'], i: 'book', c: 1, why: ['The library made Alexandria a city of scholars.', 'La biblioteca fece di Alessandria una città di studiosi.'] },
        { n: ['Fast horsemen strike the enemy’s side', 'Cavalieri veloci colpiscono il nemico di fianco'], i: 'footprints', c: 0, why: ['The cavalry worked together with the phalanx.', 'La cavalleria agiva insieme alla falange.'] },
        { n: ['Greek spoken from Egypt to far lands', 'Il greco parlato dall’Egitto a terre lontane'], i: 'chat', c: 1, why: ['Greek became a common language across many lands.', 'Il greco divenne una lingua comune in molte terre.'] }
      ]
    },
    taunt: ['<p>An empire that big can never be split up. It will last forever!</p>', '<p>Un impero così grande non si dividerà mai. Durerà per sempre!</p>'],
    quiz: [
      q('How old was Alexander the Great when he became king?', 'Quanti anni aveva Alessandro Magno quando divenne re?', [
        ['About 20', 'Circa 20'], ['About 60', 'Circa 60'], ['About 10', 'Circa 10'], ['About 80', 'Circa 80']
      ], ['Alexander became king very young and led his army himself.', 'Alessandro divenne re molto giovane e guidò di persona il suo esercito.']),
      q('What happened to Alexander’s empire after he died?', 'Che cosa accadde all’impero di Alessandro dopo la sua morte?', [
        ['His generals divided it into kingdoms', 'I suoi generali lo divisero in regni'],
        ['It became a Roman province at once', 'Divenne subito una provincia romana'],
        ['It stayed united for a thousand years', 'Rimase unito per mille anni'],
        ['It sank into the sea', 'Affondò nel mare']
      ], ['After 323 BC several Hellenistic kingdoms appeared.', 'Dopo il 323 a.C. nacquero diversi regni ellenistici.']),
      q('What does “Hellenistic” describe?', 'Che cosa indica la parola “ellenistico”?', [
        ['Greek culture mixed with local cultures in the conquered lands', 'La cultura greca mescolata con le culture locali delle terre conquistate'],
        ['Only the city of Sparta', 'Solo la città di Sparta'],
        ['The Roman army', 'L’esercito romano'],
        ['A kind of pottery from Etruria', 'Un tipo di ceramica dell’Etruria']
      ], ['The Hellenistic age spread Greek language and ideas far from Greece.', 'L’età ellenistica diffuse lingua e idee greche lontano dalla Grecia.']),
      q('Which famous lighthouse stood at Alexandria?', 'Quale famoso faro sorgeva ad Alessandria?', [
        ['The Pharos', 'Il Pharos'], ['The Parthenon', 'Il Partenone'], ['The Colosseum', 'Il Colosseo'], ['The Lion Gate', 'La Porta dei Leoni']
      ], ['The Pharos guided ships into the harbour of Alexandria.', 'Il Pharos guidava le navi nel porto di Alessandria.'])
    ]
  }),

  /* ------------------------------------------------------------------ m8 */
  makeHistGeoMission({
    id: 'hist_g5_m8',
    arc: 3,
    sec: 'H5.8',
    pages: '62–75',
    hue: 30,
    title: ['More Italic Peoples', 'Altri popoli italici'],
    topic: ['Celts, Camuni, Veneti, Liguri, Terramaricoli, Villanovans, Samnites and Sardinians', 'Celti, Camuni, Veneti, Liguri, Terramaricoli, Villanoviani, Sanniti e Sardi'],
    demon: ['Mosaic Shifter', 'Mutamosaico'],
    tech: ['Scroll Form · Rock Carver', 'Stile Pergamena · Incisore di Rocce'],
    lessons: [
      lesson('hg5_north_italic',
        'Northern Italy was home to many peoples. The <b>Celts</b> lived in the Po valley and were skilled with iron; the Romans called them Gauls. The <b>Camuni</b> in Val Camonica carved thousands of drawings on rocks showing daily life. The <b>Veneti</b> were known as horse breeders and traders, and the <b>Liguri</b> lived in the hills and along the coast.',
        'Il Nord Italia ospitava molti popoli. I <b>Celti</b> vivevano nella Valpadana ed erano abili con il ferro; i Romani li chiamavano Galli. I <b>Camuni</b> in Val Camonica incisero sulle rocce migliaia di disegni che mostrano la vita quotidiana. I <b>Veneti</b> erano noti come allevatori di cavalli e commercianti e i <b>Liguri</b> abitavano le colline e le coste.'),
      lesson('hg5_bronze_iron_villages',
        'In the Po plain the <b>Terramaricoli</b> of the Bronze Age built villages on raised platforms of earth, protected by an embankment and a ditch. Later, in the early Iron Age, the <b>Villanovans</b> cremated their dead and kept the ashes in urns. Their culture was close to that of the first Etruscans. Tools, weapons and pottery are the clues archaeologists use to study them.',
        'Nella pianura padana i <b>Terramaricoli</b> dell’Età del Bronzo costruirono villaggi su piattaforme di terra rialzate, protetti da un terrapieno e da un fossato. Più tardi, nella prima Età del Ferro, i <b>Villanoviani</b> cremavano i morti e conservavano le ceneri in urne. La loro cultura era vicina a quella dei primi Etruschi. Attrezzi, armi e ceramiche sono gli indizi che gli archeologi usano per studiarli.'),
      lesson('hg5_south_islands',
        'In the mountains of the south lived the <b>Samnites</b>, brave warriors who fought Rome for many years. The <b>Lucani</b> lived in Lucania and were farmers and herders, neighbours of the Greek colonies. On the island of Sardinia the <b>Sardi</b> built the stone towers called <b>nuraghi</b> and were skilled bronze workers.',
        'Sulle montagne del sud vivevano i <b>Sanniti</b>, coraggiosi guerrieri che combatterono Roma per molti anni. I <b>Lucani</b> vivevano in Lucania ed erano contadini e pastori, vicini delle colonie greche. Nell’isola di Sardegna i <b>Sardi</b> costruirono le torri di pietra chiamate <b>nuraghi</b> ed erano abili lavoratori del bronzo.')
    ],
    sort: {
      type: 'sort',
      title: ['North or south and islands?', 'Nord oppure sud e isole?'],
      hint: ['Where did each people live?', 'Dove viveva ciascun popolo?'],
      cats: [['North of Italy', 'Nord Italia'], ['South and islands', 'Sud e isole']],
      items: [
        { n: ['Camuni and their rock carvings', 'I Camuni e le loro incisioni rupestri'], i: 'mountain', c: 0, why: ['Val Camonica is in the Alps of the north.', 'La Val Camonica è nelle Alpi del nord.'] },
        { n: ['Samnites in the southern mountains', 'I Sanniti sulle montagne del sud'], i: 'shield', c: 1, why: ['The Samnites lived in the mountains of the south.', 'I Sanniti vivevano sulle montagne del sud.'] },
        { n: ['Veneti, horse breeders and traders', 'I Veneti, allevatori di cavalli e commercianti'], i: 'coin', c: 0, why: ['The Veneti lived in the north-east.', 'I Veneti vivevano nel nord-est.'] },
        { n: ['Sardi and their stone nuraghi', 'I Sardi e i loro nuraghi di pietra'], i: 'stone', c: 1, why: ['Nuraghi are typical of Sardinia.', 'I nuraghi sono tipici della Sardegna.'] }
      ]
    },
    taunt: ['<p>All these peoples are exactly the same, so there is nothing to learn!</p>', '<p>Questi popoli sono tutti uguali, quindi non c’è niente da imparare!</p>'],
    quiz: [
      q('What do the rock carvings of Val Camonica show?', 'Che cosa mostrano le incisioni rupestri della Val Camonica?', [
        ['Scenes of daily life such as farming and hunting', 'Scene di vita quotidiana come agricoltura e caccia'],
        ['Roman emperors', 'Imperatori romani'],
        ['Maps of Africa', 'Mappe dell’Africa'],
        ['Computer games', 'Videogiochi']
      ], ['The carvings help us understand how the Camuni lived.', 'Le incisioni ci aiutano a capire come vivevano i Camuni.']),
      q('Which Italic people fought Rome for years from the mountains of the south?', 'Quale popolo italico combatté Roma per anni dalle montagne del sud?', [
        ['The Samnites', 'I Sanniti'], ['The Veneti', 'I Veneti'], ['The Camuni', 'I Camuni'], ['The Liguri', 'I Liguri']
      ], ['The Samnites were tough mountain warriors.', 'I Sanniti erano duri guerrieri di montagna.']),
      q('The Terramaricoli belong to which age?', 'A quale età appartengono i Terramaricoli?', [
        ['The Bronze Age', 'L’Età del Bronzo'], ['The Space Age', 'L’età dello spazio'], ['The age of the emperors', 'L’età degli imperatori'], ['The Hellenistic age', 'L’età ellenistica']
      ], ['They lived in the Po plain during the Bronze Age.', 'Vivevano nella pianura padana durante l’Età del Bronzo.']),
      q('Which people lived in the north-west of Italy, in the hills and along the coast around Genoa?', 'Quale popolo viveva nel nord-ovest d’Italia, sulle colline e lungo la costa intorno a Genova?', [
        ['The Liguri', 'I Liguri'], ['The Sanniti', 'I Sanniti'], ['The Lucani', 'I Lucani'], ['The Sardi', 'I Sardi']
      ], ['The region of Liguria is named after them.', 'La regione Liguria prende il nome da loro.'])
    ]
  }),

  /* ------------------------------------------------------------------ m9 */
  makeHistGeoMission({
    id: 'hist_g5_m9',
    arc: 4,
    sec: 'H5.9',
    pages: '100–107',
    hue: 12,
    title: ['Rome Conquers the Mediterranean', 'Roma conquista il Mediterraneo'],
    topic: ['The conquest of Italy, the army and camp, the Punic Wars and the provinces', 'La conquista dell’Italia, l’esercito e l’accampamento, le guerre puniche e le province'],
    demon: ['Elephant Rider', 'Cavaliere degli Elefanti'],
    tech: ['Scroll Form · Legion Camp', 'Stile Pergamena · Accampamento della Legione'],
    lessons: [
      lesson('hg5_roman_conquest_italy',
        'Step by step Rome defeated its neighbours: Latins, Etruscans, Samnites and the Greek cities of the south. Its strong <b>legions</b> won the wars, and Rome often made allies of the people it beat, who sent soldiers to the Roman army. New roads linked the conquered lands. At the end of each day’s march the soldiers built a fortified <b>camp</b>.',
        'Passo dopo passo Roma sconfisse i suoi vicini: Latini, Etruschi, Sanniti e le città greche del sud. Le sue forti <b>legioni</b> vincevano le guerre e Roma spesso faceva alleati i popoli sconfitti, che mandavano soldati all’esercito romano. Nuove strade collegavano le terre conquistate. Alla fine di ogni giornata di marcia i soldati costruivano un <b>accampamento</b> fortificato.'),
      lesson('hg5_punic_wars',
        'Across the sea, <b>Carthage</b> in North Africa was a rich city of sea traders with a strong fleet. Rome and Carthage fought three wars, called the <b>Punic Wars</b>. The Carthaginian general <b>Hannibal</b> crossed the Alps with elephants and won battles in Italy. In 202 BC the Roman general Scipio beat him at <b>Zama</b>, and in 146 BC Rome destroyed Carthage.',
        'Oltre il mare, <b>Cartagine</b> in Nord Africa era una ricca città di mercanti con una forte flotta. Roma e Cartagine combatterono tre guerre, dette <b>guerre puniche</b>. Il generale cartaginese <b>Annibale</b> attraversò le Alpi con gli elefanti e vinse battaglie in Italia. Nel 202 a.C. il generale romano Scipione lo sconfisse a <b>Zama</b> e nel 146 a.C. Roma distrusse Cartagine.'),
      lesson('hg5_provinces_navy',
        'To fight Carthage at sea Rome built a navy. Conquered lands outside Italy became <b>provinces</b>, ruled by Roman officials and paying taxes to Rome. Wealth, grain and slaves flowed to Rome, and with a strong fleet the sea routes became safer.',
        'Per combattere Cartagine in mare Roma costruì una flotta. Le terre conquistate fuori dall’Italia diventarono <b>province</b>, governate da magistrati romani e tenute a pagare tributi a Roma. A Roma affluivano ricchezze, grano e schiavi e, con una flotta forte, le rotte marittime divennero più sicure.')
    ],
    sort: {
      type: 'sort',
      title: ['Rome or Carthage?', 'Roma o Cartagine?'],
      hint: ['Which side does each clue describe?', 'Quale schieramento descrive ogni indizio?'],
      cats: [['Rome', 'Roma'], ['Carthage', 'Cartagine']],
      items: [
        { n: ['Hannibal crosses the Alps with elephants', 'Annibale attraversa le Alpi con gli elefanti'], i: 'mountain', c: 1, why: ['Hannibal was a Carthaginian general.', 'Annibale era un generale cartaginese.'] },
        { n: ['Disciplined legions and fortified camps', 'Legioni disciplinate e accampamenti fortificati'], i: 'shield', c: 0, why: ['The legion was the core of the Roman army.', 'La legione era il cuore dell’esercito romano.'] },
        { n: ['A rich trading city in North Africa', 'Una ricca città commerciale del Nord Africa'], i: 'ship', c: 1, why: ['Carthage grew rich by sea trade.', 'Cartagine si arricchì con il commercio marittimo.'] },
        { n: ['Scipio wins the battle of Zama', 'Scipione vince la battaglia di Zama'], i: 'trophy', c: 0, why: ['Scipio was the Roman general at Zama.', 'Scipione era il generale romano a Zama.'] }
      ]
    },
    taunt: ['<p>Elephants cannot cross mountains, and Carthage can never be beaten!</p>', '<p>Gli elefanti non attraversano le montagne e Cartagine non si può battere!</p>'],
    quiz: [
      q('What was the battle of Zama?', 'Che cos’era la battaglia di Zama?', [
        ['The 202 BC battle in which Scipio defeated Hannibal', 'La battaglia del 202 a.C. in cui Scipione sconfisse Annibale'],
        ['A Greek sports festival', 'Una festa sportiva greca'],
        ['The fall of Pompeii', 'La caduta di Pompei'],
        ['A battle against the Celts', 'Una battaglia contro i Celti']
      ], ['Zama ended the Second Punic War in Rome’s favour.', 'Zama chiuse la seconda guerra punica a favore di Roma.']),
      q('What happened to Carthage in 146 BC?', 'Che cosa accadde a Cartagine nel 146 a.C.?', [
        ['Rome destroyed it', 'Roma la distrusse'], ['It conquered Rome', 'Conquistò Roma'], ['It became Greek', 'Divenne greca'], ['It moved to Egypt', 'Si trasferì in Egitto']
      ], ['The Third Punic War ended with the destruction of Carthage.', 'La terza guerra punica si concluse con la distruzione di Cartagine.']),
      q('How did Rome often treat the Italian peoples it defeated?', 'Come trattava spesso Roma i popoli italici sconfitti?', [
        ['It made them allies who sent soldiers to the Roman army', 'Ne faceva alleati che mandavano soldati all’esercito romano'],
        ['It sent them all to Africa', 'Li mandava tutti in Africa'],
        ['It gave them the Roman throne', 'Dava loro il trono di Roma'],
        ['It never allowed them to farm', 'Non permetteva loro di coltivare']
      ], ['Alliances helped Rome keep a huge army.', 'Le alleanze aiutavano Roma a mantenere un esercito enorme.']),
      q('Why did Rome build a navy during the Punic Wars?', 'Perché Roma costruì una flotta durante le guerre puniche?', [
        ['To fight Carthage at sea', 'Per combattere Cartagine in mare'], ['To race against Athens', 'Per gareggiare con Atene'], ['To build the Colosseum', 'Per costruire il Colosseo'], ['To explore the Alps', 'Per esplorare le Alpi']
      ], ['Carthage had a strong fleet, so Rome needed one too.', 'Cartagine aveva una flotta forte, quindi serviva anche a Roma.'])
    ]
  }),

  /* ------------------------------------------------------------------ m10 */
  makeHistGeoMission({
    id: 'hist_g5_m10',
    arc: 4,
    sec: 'H5.10',
    pages: '108–115',
    hue: 358,
    title: ['Caesar & the End of the Republic', 'Cesare e la fine della Repubblica'],
    topic: ['The crisis of the Republic, the civil wars and Julius Caesar', 'La crisi della Repubblica, le guerre civili e Giulio Cesare'],
    demon: ['Rubicon Shadow', 'Ombra del Rubicone'],
    tech: ['Scroll Form · Laurel Crown', 'Stile Pergamena · Corona d’Alloro'],
    lessons: [
      lesson('hg5_republic_crisis',
        'As Rome grew rich, a few families became very wealthy while many farmers lost their land and crowded into the city. Powerful generals commanded armies loyal to them, and rivals fought to command. The Senate lost control, and <b>civil wars</b>, Romans fighting Romans, broke out. Many people wanted a strong ruler.',
        'Mentre Roma si arricchiva, poche famiglie divennero ricchissime e molti contadini persero la terra e si affollarono in città. Generali potenti comandavano eserciti fedeli a loro e i rivali si contendevano il comando. Il Senato perse il controllo e scoppiarono le <b>guerre civili</b>, Romani contro Romani. Molti volevano un capo forte.'),
      lesson('hg5_caesar_gaul',
        '<b>Julius Caesar</b> conquered Gaul between 58 and 50 BC and won fame and loyal legions. In 49 BC he crossed the river <b>Rubicon</b> with his army, and a civil war began. He beat his rival Pompey and held great power alone as dictator, which worried many senators.',
        '<b>Giulio Cesare</b> conquistò la Gallia tra il 58 e il 50 a.C. e ottenne fama e legioni fedeli. Nel 49 a.C. attraversò con l’esercito il fiume <b>Rubicone</b> e iniziò una guerra civile. Sconfisse il rivale Pompeo e ottenne da solo un grande potere come dittatore, cosa che preoccupava molti senatori.'),
      lesson('hg5_caesar_ides',
        'On the Ides of March, 44 BC, a group of senators killed Caesar because they feared he would become king. New civil wars followed. Caesar’s heir, <b>Octavian</b>, defeated his rivals, and in 27 BC he took the name <b>Augustus</b>. The Republic had ended and the Empire had begun.',
        'Alle Idi di marzo del 44 a.C. un gruppo di senatori uccise Cesare perché temeva che diventasse re. Seguirono nuove guerre civili. L’erede di Cesare, <b>Ottaviano</b>, sconfisse i rivali e nel 27 a.C. prese il nome di <b>Augusto</b>. La Repubblica era finita e l’Impero era cominciato.')
    ],
    sort: {
      type: 'sort',
      title: ['Republic or Empire?', 'Repubblica o Impero?'],
      hint: ['Which kind of government does each clue describe?', 'Quale forma di governo descrive ogni indizio?'],
      cats: [['Republic', 'Repubblica'], ['Empire', 'Impero']],
      items: [
        { n: ['Two consuls are elected every year', 'Ogni anno si eleggono due consoli'], i: 'vote', c: 0, why: ['Yearly consuls shared power in the Republic.', 'I consoli annuali dividevano il potere nella Repubblica.'] },
        { n: ['One emperor holds lasting power', 'Un solo imperatore detiene un potere duraturo'], i: 'crown', c: 1, why: ['Augustus was the first emperor.', 'Augusto fu il primo imperatore.'] },
        { n: ['The Senate and the assemblies share power', 'Il Senato e le assemblee dividono il potere'], i: 'users', c: 0, why: ['The Republic spread power among many.', 'La Repubblica distribuiva il potere tra molti.'] },
        { n: ['Began in 27 BC with Augustus', 'Iniziò nel 27 a.C. con Augusto'], i: 'star', c: 1, why: ['The Empire began when Octavian became Augustus.', 'L’Impero iniziò quando Ottaviano divenne Augusto.'] }
      ]
    },
    taunt: ['<p>A man with a loyal army can do anything. Why obey the Senate?</p>', '<p>Chi ha un esercito fedele può fare tutto. Perché obbedire al Senato?</p>'],
    quiz: [
      q('Which river did Caesar cross with his army in 49 BC, starting a civil war?', 'Quale fiume attraversò Cesare con il suo esercito nel 49 a.C., dando inizio a una guerra civile?', [
        ['The Rubicon', 'Il Rubicone'], ['The Nile', 'Il Nilo'], ['The Po', 'Il Po'], ['The Euphrates', 'L’Eufrate']
      ], ['Crossing the Rubicon with an army meant war against the Senate.', 'Attraversare il Rubicone con un esercito significava guerra contro il Senato.']),
      q('Who was Caesar’s main rival in the civil war?', 'Chi era il principale rivale di Cesare nella guerra civile?', [
        ['Pompey', 'Pompeo'], ['Hannibal', 'Annibale'], ['Alexander', 'Alessandro'], ['Leonidas', 'Leonida']
      ], ['Caesar defeated Pompey and gained great power.', 'Cesare sconfisse Pompeo e ottenne grande potere.']),
      q('What happened on the Ides of March, 44 BC?', 'Che cosa accadde alle Idi di marzo del 44 a.C.?', [
        ['Senators killed Julius Caesar', 'I senatori uccisero Giulio Cesare'], ['Pompeii was buried', 'Pompei fu sepolta'], ['Carthage was destroyed', 'Cartagine fu distrutta'], ['Rome was founded', 'Roma fu fondata']
      ], ['They feared Caesar wanted to be king.', 'Temevano che Cesare volesse farsi re.']),
      q('Who won the civil wars after Caesar’s death and began the Empire?', 'Chi vinse le guerre civili dopo la morte di Cesare e diede inizio all’Impero?', [
        ['Octavian, later called Augustus', 'Ottaviano, poi chiamato Augusto'], ['Romulus', 'Romolo'], ['Constantine', 'Costantino'], ['Scipio', 'Scipione']
      ], ['In 27 BC Octavian took the name Augustus.', 'Nel 27 a.C. Ottaviano prese il nome di Augusto.'])
    ]
  }),

  /* ------------------------------------------------------------------ m11 */
  makeHistGeoMission({
    id: 'hist_g5_m11',
    arc: 5,
    sec: 'H5.11',
    pages: '128–137',
    hue: 330,
    title: ['Christianity & the Fall of the West', 'Il cristianesimo e la fine dell’Occidente'],
    topic: ['Christianity, the crisis and division of the Empire, the invasions and 476 AD', 'Il cristianesimo, la crisi e la divisione dell’Impero, le invasioni e il 476 d.C.'],
    demon: ['Twilight Emperor', 'Imperatore del Crepuscolo'],
    tech: ['Scroll Form · Last Eagle', 'Stile Pergamena · Ultima Aquila'],
    lessons: [
      lesson('hg5_christianity',
        '<b>Christianity</b> began in Judea, a Roman province, with the teachings of Jesus, and his followers spread it. It travelled along Roman roads and seas into many cities. At times Christians were persecuted. In 313 AD Emperor Constantine, with the <b>Edict of Milan</b>, allowed them to worship freely, and later Christianity became the state religion.',
        'Il <b>cristianesimo</b> nacque in Giudea, una provincia romana, con gli insegnamenti di Gesù e fu diffuso dai suoi seguaci. Viaggiò lungo le strade e i mari romani fino a molte città. A volte i cristiani furono perseguitati. Nel 313 d.C. l’imperatore Costantino, con l’<b>Editto di Milano</b>, permise loro di praticare liberamente il culto e più tardi il cristianesimo divenne religione di Stato.'),
      lesson('hg5_empire_division',
        'The Empire faced troubles: civil wars, invasions on its borders and money problems. It was too big to be ruled by one man, so it was divided in two parts. The <b>West</b> had its capital at Rome, later at Ravenna; the <b>East</b> had its capital at <b>Constantinople</b>. Each had its own emperor.',
        'L’Impero affrontò molti problemi: guerre civili, invasioni ai confini e difficoltà economiche. Era troppo grande per essere governato da un solo uomo, perciò fu diviso in due parti. L’<b>Occidente</b> aveva la capitale a Roma, poi a Ravenna; l’<b>Oriente</b> aveva la capitale a <b>Costantinopoli</b>. Ognuna aveva un proprio imperatore.'),
      lesson('hg5_fall_western_empire',
        'Peoples the Romans called <b>barbarians</b>, such as the Goths, Vandals and Franks, entered the Western Empire, and Rome itself was sacked in 410 AD. In <b>476 AD</b> the chief Odoacer deposed the last Western emperor, Romulus Augustulus. The West had fallen, but the Eastern Empire, with Constantinople as its capital, went on for about a thousand years.',
        'Popoli che i Romani chiamavano <b>barbari</b>, come Goti, Vandali e Franchi, entrarono nell’Impero d’Occidente e la stessa Roma fu saccheggiata nel 410 d.C. Nel <b>476 d.C.</b> il capo Odoacre depose l’ultimo imperatore d’Occidente, Romolo Augustolo. L’Occidente era caduto, ma l’Impero d’Oriente, con capitale Costantinopoli, continuò per circa mille anni.')
    ],
    sort: {
      type: 'sort',
      title: ['West or East?', 'Occidente o Oriente?'],
      hint: ['Which half of the Roman Empire does each clue describe?', 'Quale metà dell’Impero romano descrive ogni indizio?'],
      cats: [['Western Empire', 'Impero d’Occidente'], ['Eastern Empire', 'Impero d’Oriente']],
      items: [
        { n: ['Capital at Constantinople', 'Capitale a Costantinopoli'], i: 'building', c: 1, why: ['Constantinople was the Eastern capital.', 'Costantinopoli era la capitale d’Oriente.'] },
        { n: ['Ended in 476 AD', 'Finì nel 476 d.C.'], i: 'warn', c: 0, why: ['The last Western emperor was deposed in 476.', 'L’ultimo imperatore d’Occidente fu deposto nel 476.'] },
        { n: ['Lasted about a thousand more years', 'Durò ancora circa mille anni'], i: 'star', c: 1, why: ['The East survived long after the West.', 'L’Oriente sopravvisse a lungo dopo l’Occidente.'] },
        { n: ['Capital moved from Rome to Ravenna', 'Capitale spostata da Roma a Ravenna'], i: 'map', c: 0, why: ['Ravenna became the Western capital.', 'Ravenna divenne la capitale d’Occidente.'] }
      ]
    },
    taunt: ['<p>Great empires never fall! Rome will stand forever.</p>', '<p>I grandi imperi non cadono mai! Roma durerà per sempre.</p>'],
    quiz: [
      q('In which Roman province did Christianity begin?', 'In quale provincia romana nacque il cristianesimo?', [
        ['Judea', 'Giudea'], ['Gaul', 'Gallia'], ['Sardinia', 'Sardegna'], ['Etruria', 'Etruria']
      ], ['Jesus taught in Judea, which was ruled by Rome.', 'Gesù insegnò in Giudea, che era governata da Roma.']),
      q('Who deposed the last Western Roman emperor in 476 AD?', 'Chi depose l’ultimo imperatore romano d’Occidente nel 476 d.C.?', [
        ['Odoacer', 'Odoacre'], ['Scipio', 'Scipione'], ['Augustus', 'Augusto'], ['Alexander', 'Alessandro']
      ], ['The emperor’s name was Romulus Augustulus.', 'L’imperatore si chiamava Romolo Augustolo.']),
      q('What happened to the Eastern Roman Empire after 476 AD?', 'Che cosa accadde all’Impero romano d’Oriente dopo il 476 d.C.?', [
        ['It continued for about a thousand years', 'Continuò per circa mille anni'], ['It ended the same year', 'Finì lo stesso anno'], ['It moved to Carthage', 'Si trasferì a Cartagine'], ['It became Etruscan', 'Divenne etrusco']
      ], ['Its capital Constantinople stayed strong for centuries.', 'La sua capitale Costantinopoli restò forte per secoli.']),
      q('Which problems troubled the late Roman Empire?', 'Quali problemi affliggevano il tardo Impero romano?', [
        ['Civil wars, invasions and money troubles', 'Guerre civili, invasioni e difficoltà economiche'], ['Too few roads only', 'Solo troppo poche strade'], ['A lack of emperors', 'La mancanza di imperatori'], ['Too many Olympic Games', 'Troppe Olimpiadi']
      ], ['These troubles weakened the empire, especially in the West.', 'Questi problemi indebolirono l’impero, soprattutto in Occidente.'])
    ],
    boss: true
  })
];
