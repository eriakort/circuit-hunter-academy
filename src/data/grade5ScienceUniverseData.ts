import type { Mission, QuizQuestion } from '../types';

type BilingualPair = [string, string];
type Answer = BilingualPair;

const question = (en: string, it: string, answers: Answer[], explanation: BilingualPair): QuizQuestion => ({
  q: [en, it],
  a: answers,
  why: explanation
});

interface UniverseMissionInput {
  id: string;
  sec: string;
  pages: string;
  hue: number;
  title: BilingualPair;
  topic: BilingualPair;
  demon: BilingualPair;
  tech: BilingualPair;
  lessons: [BilingualPair, BilingualPair, BilingualPair];
  quiz: QuizQuestion[];
}

const makeMission = (item: UniverseMissionInput): Mission => ({
  id: item.id,
  arc: 0,
  sec: item.sec,
  pages: item.pages,
  hue: item.hue,
  horns: 2,
  eyes: 2,
  title: item.title,
  topic: item.topic,
  demon: item.demon,
  tech: item.tech,
  scenes: [
    { who: 's', text: item.lessons[0] },
    { who: 's', text: item.lessons[1] },
    { who: 's', text: item.lessons[2] },
    { who: 'd', text: [
      `<p>🌠 I am ${item.demon[0]}! I have mixed up the facts about the Universe. Show me what you have learned!</p>`,
      `<p>🌠 Sono ${item.demon[1]}! Ho confuso le informazioni sull'Universo. Dimostrami ciò che hai imparato!</p>`
    ] },
    { type: 'battle' }
  ],
  quiz: item.quiz
});

export const GRADE5_UNIVERSE_MISSIONS: Mission[] = [
  makeMission({
    id: 'g5u-sky',
    sec: '1',
    pages: '7',
    hue: 225,
    title: ['The Sky Beyond Earth', 'Il cielo oltre la Terra'],
    topic: ['The sky, atmosphere and observation of space', "Il cielo, l'atmosfera e l'osservazione dello spazio"],
    demon: ['The Cloud of Confusion', 'La Nuvola della Confusione'],
    tech: ['Cosmos Form · First Technique: Sky Scanner', 'Stile del Cosmo · Prima Tecnica: Scanner del Cielo'],
    lessons: [
      [
        '<p>🌌 Look up on a clear night. You may see the <b>Moon, stars and planets</b>. They are objects in space, also called <b>celestial bodies</b>.</p><p>Space is enormous. The stars look tiny because they are very far away. The Sun is also a star, but it looks much bigger and brighter because it is much closer to Earth than the other stars we see.</p>',
        '<p>🌌 Guarda il cielo in una notte serena. Puoi vedere la <b>Luna, le stelle e i pianeti</b>. Sono oggetti nello spazio, chiamati anche <b>corpi celesti</b>.</p><p>Lo spazio è immenso. Le stelle sembrano piccole perché sono molto lontane. Anche il Sole è una stella, ma appare molto più grande e luminoso perché è molto più vicino alla Terra rispetto alle altre stelle che vediamo.</p>'
      ],
      [
        '<p>☁️ During the day, the <b>atmosphere</b> makes the sky appear blue. It is the layer of gases surrounding Earth. It gives us air to breathe and helps protect life.</p><p>Clouds, rain and wind are weather phenomena in the atmosphere. Beyond it lies outer space, where there is no breathable air like the air near the ground.</p>',
        '<p>☁️ Di giorno, l'<b>atmosfera</b> fa apparire azzurro il cielo. È lo strato di gas che circonda la Terra. Ci fornisce l'aria da respirare e contribuisce a proteggere la vita.</p><p>Nuvole, pioggia e vento sono fenomeni atmosferici. Oltre l'atmosfera si trova lo spazio, dove non c'è aria respirabile come quella vicino al suolo.</p>'
      ],
      [
        '<p>🔭 We study the sky with our eyes and with instruments. A <b>telescope</b> collects light and helps us observe distant objects. Satellites and space probes carry instruments into space and send information back to Earth.</p><p><b>Remember:</b> looking at the sky means looking at objects at very different distances and sometimes seeing light that began its journey long ago.</p>',
        '<p>🔭 Studiamo il cielo con gli occhi e con strumenti. Un <b>telescopio</b> raccoglie la luce e ci aiuta a osservare oggetti lontani. Satelliti e sonde spaziali portano strumenti nello spazio e inviano informazioni alla Terra.</p><p><b>Ricorda:</b> osservando il cielo vediamo oggetti a distanze molto diverse e, a volte, luce partita molto tempo fa.</p>'
      ]
    ],
    quiz: [
      question('What is a celestial body?', 'Che cos’è un corpo celeste?', [['A natural object in space', 'Un oggetto naturale nello spazio'], ['A cloud in the atmosphere', 'Una nuvola nell’atmosfera'], ['A type of weather', 'Un tipo di fenomeno meteorologico'], ['A mountain on Earth', 'Una montagna sulla Terra']], ['Planets, stars and moons are examples of celestial bodies.', 'Pianeti, stelle e lune sono esempi di corpi celesti.']),
      question('What is the Sun?', 'Che cos’è il Sole?', [['A star', 'Una stella'], ['A planet', 'Un pianeta'], ['A satellite made by humans', 'Un satellite artificiale'], ['A comet', 'Una cometa']], ['The Sun is the star at the centre of our Solar System.', 'Il Sole è la stella al centro del nostro Sistema solare.']),
      question('What surrounds Earth?', 'Che cosa circonda la Terra?', [['The atmosphere', 'L’atmosfera'], ['The asteroid belt', 'La fascia degli asteroidi'], ['The rings of Saturn', 'Gli anelli di Saturno'], ['The Milky Way only', 'Solo la Via Lattea']], ['Earth is surrounded by a layer of gases called the atmosphere.', 'La Terra è circondata da uno strato di gas chiamato atmosfera.']),
      question('Which instrument helps us observe distant celestial objects?', 'Quale strumento ci aiuta a osservare corpi celesti lontani?', [['A telescope', 'Un telescopio'], ['A thermometer', 'Un termometro'], ['A compass', 'Una bussola'], ['A ruler', 'Un righello']], ['A telescope collects light from distant objects.', 'Il telescopio raccoglie la luce degli oggetti lontani.'])
    ]
  }),
  makeMission({
    id: 'g5u-big-bang',
    sec: '2',
    pages: '8–9',
    hue: 265,
    title: ['From the Big Bang to the Stars', 'Dal Big Bang alle stelle'],
    topic: ['The origin and expansion of the Universe; galaxies and stars', "L'origine e l'espansione dell'Universo; galassie e stelle"],
    demon: ['The Time Twister', 'Il Torcitore del Tempo'],
    tech: ['Cosmos Form · Second Technique: Cosmic Timeline', 'Stile del Cosmo · Seconda Tecnica: Linea del Tempo Cosmica'],
    lessons: [
      [
        '<p>⏳ Scientists think the Universe began about <b>13.8 billion years ago</b> in an extremely hot and dense state. The name of the scientific model describing its early expansion is the <b>Big Bang</b>.</p><p>The Big Bang was not an explosion into empty space. It describes the expansion of space itself. The Universe has continued to expand and change.</p>',
        '<p>⏳ Gli scienziati ritengono che l'Universo abbia avuto inizio circa <b>13,8 miliardi di anni fa</b>, in uno stato estremamente caldo e denso. Il modello scientifico che descrive la sua prima espansione si chiama <b>Big Bang</b>.</p><p>Il Big Bang non fu un'esplosione dentro uno spazio vuoto: descrive l'espansione dello spazio stesso. L'Universo ha continuato a espandersi e a cambiare.</p>'
      ],
      [
        '<p>✨ As the Universe expanded, it cooled. Over a very long time, matter gathered under gravity. The first stars formed, and groups of stars, gas and dust became <b>galaxies</b>.</p><p>Our Solar System is inside a galaxy called the <b>Milky Way</b>. It contains hundreds of billions of stars.</p>',
        '<p>✨ Mentre l'Universo si espandeva, si raffreddava. In tempi lunghissimi, la materia si raccolse grazie alla gravità. Si formarono le prime stelle e gli insiemi di stelle, gas e polveri diventarono <b>galassie</b>.</p><p>Il nostro Sistema solare si trova in una galassia chiamata <b>Via Lattea</b>, che contiene centinaia di miliardi di stelle.</p>'
      ],
      [
        '<p>🌟 A <b>star</b> is a huge sphere of very hot gas that produces light and heat. A <b>galaxy</b> is a vast group of stars, gas and dust held together by gravity.</p><p><b>Timeline:</b> early expanding Universe → first atoms → first stars → galaxies → our Solar System. These events happened over billions of years.</p>',
        '<p>🌟 Una <b>stella</b> è un'enorme sfera di gas molto caldo che produce luce e calore. Una <b>galassia</b> è un vasto insieme di stelle, gas e polveri tenuto insieme dalla gravità.</p><p><b>Linea del tempo:</b> Universo in espansione → primi atomi → prime stelle → galassie → Sistema solare. Questi eventi si sono svolti in miliardi di anni.</p>'
      ]
    ],
    quiz: [
      question('About how old is the Universe?', 'Quanti anni ha circa l’Universo?', [['13.8 billion years', '13,8 miliardi di anni'], ['13.8 million years', '13,8 milioni di anni'], ['4.6 million years', '4,6 milioni di anni'], ['100,000 years', '100.000 anni']], ['The current scientific estimate is about 13.8 billion years.', 'La stima scientifica attuale è di circa 13,8 miliardi di anni.']),
      question('What does the Big Bang model describe?', 'Che cosa descrive il modello del Big Bang?', [['The expansion of the Universe from an early hot, dense state', 'L’espansione dell’Universo da uno stato iniziale caldo e denso'], ['A star exploding inside the Sun', 'Una stella che esplode dentro il Sole'], ['The formation of Earth only', 'Solo la formazione della Terra'], ['A collision between two planets', 'Uno scontro tra due pianeti']], ['The Big Bang describes the early expansion of space and the Universe.', "Il Big Bang descrive l'espansione iniziale dello spazio e dell'Universo."]),
      question('What is a galaxy?', 'Che cos’è una galassia?', [['A huge group of stars, gas and dust', 'Un enorme insieme di stelle, gas e polveri'], ['A single planet', 'Un singolo pianeta'], ['A moon orbiting Earth', 'Una luna che orbita intorno alla Terra'], ['A cloud in our atmosphere', 'Una nuvola nella nostra atmosfera']], ['Galaxies contain stars, gas and dust held together by gravity.', 'Le galassie contengono stelle, gas e polveri legati dalla gravità.']),
      question('In which galaxy is our Solar System?', 'In quale galassia si trova il Sistema solare?', [['The Milky Way', 'La Via Lattea'], ['Andromeda', 'Andromeda'], ['The Whirlpool Galaxy', 'La Galassia Vortice'], ['Orion', 'Orione']], ['Our Solar System is part of the Milky Way.', 'Il Sistema solare fa parte della Via Lattea.'])
    ]
  }),
  makeMission({
    id: 'g5u-solar-system',
    sec: '3',
    pages: '10–11',
    hue: 35,
    title: ['Our Solar System', 'Il Sistema solare'],
    topic: ['The Sun, eight planets, dwarf planets and smaller bodies', 'Il Sole, gli otto pianeti, i pianeti nani e i corpi minori'],
    demon: ['The Orbit Juggler', 'Il Giocoliere delle Orbite'],
    tech: ['Cosmos Form · Third Technique: Planetary Order', 'Stile del Cosmo · Terza Tecnica: Ordine Planetario'],
    lessons: [
      [
        '<p>☀️ The <b>Solar System</b> is made up of the Sun and all the objects held near it by gravity. The Sun is at its centre and provides most of the light and heat that reach the planets.</p><p>Eight planets travel around the Sun on paths called <b>orbits</b>.</p>',
        '<p>☀️ Il <b>Sistema solare</b> è formato dal Sole e da tutti gli oggetti che gli restano vicini grazie alla gravità. Il Sole si trova al centro e fornisce gran parte della luce e del calore che raggiungono i pianeti.</p><p>Otto pianeti viaggiano intorno al Sole seguendo percorsi chiamati <b>orbite</b>.</p>'
      ],
      [
        '<p>🪐 From the Sun outwards, the planets are: <b>Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune</b>.</p><p>Mercury, Venus, Earth and Mars are rocky inner planets. Jupiter and Saturn are gas giants. Uranus and Neptune are ice giants.</p>',
        '<p>🪐 Partendo dal Sole, i pianeti sono: <b>Mercurio, Venere, Terra, Marte, Giove, Saturno, Urano e Nettuno</b>.</p><p>Mercurio, Venere, Terra e Marte sono pianeti rocciosi interni. Giove e Saturno sono giganti gassosi. Urano e Nettuno sono giganti ghiacciati.</p>'
      ],
      [
        '<p>☄️ The Solar System also contains <b>dwarf planets</b> such as Pluto, moons, asteroids, comets and meteoroids. Asteroids are mostly rocky; comets contain ice and dust and can develop bright tails when they approach the Sun.</p><p><b>Model:</b> Sun → Mercury → Venus → Earth → Mars → asteroid belt → Jupiter → Saturn → Uranus → Neptune. The distances are enormous, so drawings are not to scale.</p>',
        '<p>☄️ Nel Sistema solare ci sono anche <b>pianeti nani</b> come Plutone, satelliti naturali, asteroidi, comete e meteoroidi. Gli asteroidi sono soprattutto rocciosi; le comete contengono ghiaccio e polveri e possono sviluppare code luminose quando si avvicinano al Sole.</p><p><b>Schema:</b> Sole → Mercurio → Venere → Terra → Marte → fascia degli asteroidi → Giove → Saturno → Urano → Nettuno. Le distanze sono enormi: i disegni non sono in scala.</p>'
      ]
    ],
    quiz: [
      question('How many planets orbit the Sun?', 'Quanti pianeti orbitano intorno al Sole?', [['Eight', 'Otto'], ['Seven', 'Sette'], ['Nine', 'Nove'], ['Twelve', 'Dodici']], ['There are eight recognised planets in our Solar System.', 'Nel Sistema solare sono riconosciuti otto pianeti.']),
      question('Which planet is closest to the Sun?', 'Qual è il pianeta più vicino al Sole?', [['Mercury', 'Mercurio'], ['Earth', 'Terra'], ['Mars', 'Marte'], ['Neptune', 'Nettuno']], ['Mercury is the innermost planet.', 'Mercurio è il pianeta più interno.']),
      question('Which planet is famous for its large ring system?', 'Quale pianeta è famoso per il suo grande sistema di anelli?', [['Saturn', 'Saturno'], ['Mercury', 'Mercurio'], ['Venus', 'Venere'], ['Mars', 'Marte']], ['Saturn has a spectacular system of rings made mostly of ice and rock.', 'Saturno possiede un sistema spettacolare di anelli formati soprattutto da ghiaccio e roccia.']),
      question('What is a comet mainly made of?', 'Di che cosa è composta soprattutto una cometa?', [['Ice and dust', 'Ghiaccio e polveri'], ['Liquid iron', 'Ferro liquido'], ['Only oxygen', 'Solo ossigeno'], ['Solid gold', 'Oro solido']], ['Comets contain ice, dust and rocky material.', 'Le comete contengono ghiaccio, polveri e materiale roccioso.'])
    ]
  }),
  makeMission({
    id: 'g5u-earth-movements',
    sec: '4',
    pages: '12–13',
    hue: 155,
    title: ['Earth in Motion', 'La Terra e i suoi movimenti'],
    topic: ['Rotation, revolution, day and night, and the seasons', 'Rotazione, rivoluzione, giorno e notte e stagioni'],
    demon: ['The Season Shifter', 'Il Cambia-Stagioni'],
    tech: ['Cosmos Form · Fourth Technique: Day–Year Balance', 'Stile del Cosmo · Quarta Tecnica: Equilibrio Giorno–Anno'],
    lessons: [
      [
        '<p>🌍 Earth has two important movements. <b>Rotation</b> is the spinning of Earth around its own axis. One rotation takes about <b>24 hours</b> and gives us day and night.</p><p>The side facing the Sun has daylight. The side turned away from the Sun has night.</p>',
        '<p>🌍 La Terra compie due movimenti importanti. La <b>rotazione</b> è il movimento della Terra intorno al proprio asse. Una rotazione dura circa <b>24 ore</b> e produce il giorno e la notte.</p><p>La parte rivolta verso il Sole è illuminata; quella opposta si trova al buio.</p>'
      ],
      [
        '<p>☀️ <b>Revolution</b> is Earth’s movement around the Sun. One complete revolution takes about <b>365 days and 6 hours</b>, which is one year. Every four years, the extra hours add up to an extra day in a leap year.</p><p>Earth follows an orbit around the Sun while its axis remains tilted.</p>',
        '<p>☀️ La <b>rivoluzione</b> è il movimento della Terra intorno al Sole. Un giro completo dura circa <b>365 giorni e 6 ore</b>, cioè un anno. Ogni quattro anni circa, le ore in più formano un giorno aggiuntivo nell'anno bisestile.</p><p>La Terra segue un'orbita intorno al Sole e il suo asse rimane inclinato.</p>'
      ],
      [
        '<p>🍂 The <b>seasons</b> are mainly caused by Earth’s tilted axis as it revolves around the Sun. When a hemisphere is tilted towards the Sun, it receives more direct sunlight and has longer days: it is summer there. The opposite hemisphere has winter.</p><p><b>Important:</b> seasons are not caused by Earth being much closer to or farther from the Sun.</p>',
        '<p>🍂 Le <b>stagioni</b> dipendono soprattutto dall'inclinazione dell'asse terrestre mentre la Terra gira intorno al Sole. Quando un emisfero è inclinato verso il Sole, riceve raggi più diretti e ha giornate più lunghe: lì è estate. Nell'emisfero opposto è inverno.</p><p><b>Attenzione:</b> le stagioni non sono causate principalmente dalla maggiore o minore distanza dal Sole.</p>'
      ]
    ],
    quiz: [
      question('What causes day and night?', 'Che cosa provoca il giorno e la notte?', [['Earth’s rotation', 'La rotazione terrestre'], ['Earth’s revolution', 'La rivoluzione terrestre'], ['The Moon’s phases', 'Le fasi lunari'], ['The movement of clouds', 'Il movimento delle nuvole']], ['Earth rotates, so different places turn towards and away from the Sun.', 'La Terra ruota e così le diverse zone si rivolgono verso il Sole o se ne allontanano.']),
      question('How long does one rotation take?', 'Quanto dura una rotazione?', [['About 24 hours', 'Circa 24 ore'], ['About one month', 'Circa un mese'], ['About one year', 'Circa un anno'], ['About 12 years', 'Circa 12 anni']], ['One rotation takes approximately 24 hours.', 'Una rotazione dura circa 24 ore.']),
      question('How long does Earth take to orbit the Sun?', 'Quanto impiega la Terra a orbitare intorno al Sole?', [['About one year', 'Circa un anno'], ['One day', 'Un giorno'], ['One week', 'Una settimana'], ['One hour', 'Un’ora']], ['One revolution takes about 365 days and 6 hours.', 'Una rivoluzione dura circa 365 giorni e 6 ore.']),
      question('What is the main cause of the seasons?', 'Qual è la causa principale delle stagioni?', [['Earth’s tilted axis as it orbits the Sun', 'L’asse terrestre inclinato mentre la Terra orbita intorno al Sole'], ['The daily rotation alone', 'La sola rotazione quotidiana'], ['The Moon blocking sunlight', 'La Luna che blocca la luce solare'], ['Changes in the Sun’s size', 'I cambiamenti delle dimensioni del Sole']], ['The tilt changes the angle and duration of sunlight during the year.', "L'inclinazione cambia l'angolo e la durata dell'illuminazione durante l'anno.'])
    ]
  }),
  makeMission({
    id: 'g5u-moon',
    sec: '5',
    pages: '14',
    hue: 205,
    title: ['Our Moon', 'La Luna'],
    topic: ['The Moon as Earth’s natural satellite and its phases', 'La Luna come satellite naturale della Terra e le sue fasi'],
    demon: ['The Moon Muddler', 'Il Confonditore Lunare'],
    tech: ['Cosmos Form · Fifth Technique: Lunar Phase Finder', 'Stile del Cosmo · Quinta Tecnica: Trova-Fasi Lunari'],
    lessons: [
      [
        '<p>🌙 The <b>Moon</b> is Earth’s natural satellite. It does not make its own light: we see sunlight reflected from its surface. The Moon travels around Earth in an orbit.</p><p>It takes about 27.3 days to complete one orbit relative to the stars. The cycle of phases takes about 29.5 days.</p>',
        '<p>🌙 La <b>Luna</b> è il satellite naturale della Terra. Non produce luce propria: vediamo la luce del Sole riflessa dalla sua superficie. La Luna si muove intorno alla Terra seguendo un'orbita.</p><p>Impiega circa 27,3 giorni per completare un'orbita rispetto alle stelle. Il ciclo delle fasi dura circa 29,5 giorni.</p>'
      ],
      [
        '<p>🌓 The Moon seems to change shape during the month. These changing appearances are called <b>phases</b>. The main phases are new Moon, first quarter, full Moon and last quarter.</p><p>We see different portions of the Moon’s sunlit half as the Moon moves around Earth.</p>',
        '<p>🌓 Durante il mese la Luna sembra cambiare forma. Questi aspetti si chiamano <b>fasi lunari</b>. Le fasi principali sono Luna nuova, primo quarto, Luna piena e ultimo quarto.</p><p>Vediamo porzioni diverse della metà illuminata della Luna mentre essa si muove intorno alla Terra.</p>'
      ],
      [
        '<p>🔦 Imagine a lamp as the Sun, a ball as the Moon and your head as Earth. Keep the lamp shining on the ball and move the ball around you: the lit part you can see changes.</p><p><b>Remember:</b> the phases are not caused by Earth’s shadow. Earth’s shadow is involved in a lunar eclipse.</p>',
        '<p>🔦 Immagina una lampada come il Sole, una palla come la Luna e la tua testa come la Terra. Illumina la palla e spostala intorno a te: cambia la parte illuminata che riesci a vedere.</p><p><b>Ricorda:</b> le fasi non sono causate dall'ombra della Terra. L'ombra terrestre interviene durante un'eclissi di Luna.</p>'
      ]
    ],
    quiz: [
      question('What is the Moon?', 'Che cos’è la Luna?', [['Earth’s natural satellite', 'Il satellite naturale della Terra'], ['A star', 'Una stella'], ['A planet larger than Earth', 'Un pianeta più grande della Terra'], ['A galaxy', 'Una galassia']], ['The Moon is the natural satellite that orbits Earth.', 'La Luna è il satellite naturale che orbita intorno alla Terra.']),
      question('Where does moonlight come from?', 'Da dove proviene la luce lunare?', [['Sunlight reflected by the Moon', 'Dalla luce del Sole riflessa dalla Luna'], ['Fire inside the Moon', 'Da un fuoco all’interno della Luna'], ['Earth’s cities only', 'Solo dalle città della Terra'], ['The stars behind it', 'Dalle stelle che si trovano dietro']], ['The Moon reflects sunlight; it does not produce its own visible light.', 'La Luna riflette la luce solare: non produce luce propria visibile.']),
      question('What causes the phases of the Moon?', 'Che cosa causa le fasi lunari?', [['The changing view of its sunlit half as it orbits Earth', 'La diversa porzione illuminata che vediamo mentre orbita intorno alla Terra'], ['Earth’s shadow every night', 'L’ombra della Terra ogni notte'], ['Clouds covering the Moon', 'Le nuvole che coprono la Luna'], ['The Moon changing its real shape', 'La Luna che cambia forma davvero']], ['We see different portions of the Moon’s illuminated half during its orbit.', 'Durante l’orbita vediamo porzioni diverse della metà illuminata della Luna.']),
      question('Which phase shows the Moon’s visible face fully illuminated?', 'In quale fase la faccia visibile della Luna è tutta illuminata?', [['Full Moon', 'Luna piena'], ['New Moon', 'Luna nuova'], ['First quarter', 'Primo quarto'], ['Last quarter', 'Ultimo quarto']], ['At full Moon, the side facing Earth appears fully lit.', 'Durante la Luna piena, il lato rivolto verso la Terra appare completamente illuminato.'])
    ]
  }),
  makeMission({
    id: 'g5u-eclipses',
    sec: '6',
    pages: '15',
    hue: 245,
    title: ['Eclipses: Shadows in Space', 'Le eclissi: ombre nello spazio'],
    topic: ['Solar and lunar eclipses and the alignment of celestial bodies', 'Eclissi di Sole e di Luna e allineamento dei corpi celesti'],
    demon: ['The Shadow Trickster', 'L’Ingannatore delle Ombre'],
    tech: ['Cosmos Form · Sixth Technique: Eclipse Alignment', 'Stile del Cosmo · Sesta Tecnica: Allineamento dell’Eclissi'],
    lessons: [
      [
        '<p>🌑 An <b>eclipse</b> happens when the Sun, Earth and Moon line up so that one body blocks some or all of the light reaching another.</p><p>There are two main types: a <b>solar eclipse</b> and a <b>lunar eclipse</b>. They do not happen every month because the Moon’s orbit is slightly tilted compared with Earth’s orbit around the Sun.</p>',
        '<p>🌑 Un'<b>eclissi</b> si verifica quando Sole, Terra e Luna si allineano e un corpo blocca in parte o del tutto la luce che raggiunge un altro corpo.</p><p>Esistono due tipi principali: <b>eclissi di Sole</b> ed <b>eclissi di Luna</b>. Non avvengono ogni mese perché l'orbita lunare è leggermente inclinata rispetto al piano dell'orbita terrestre.</p>'
      ],
      [
        '<p>☀️ During a <b>solar eclipse</b>, the Moon moves between the Sun and Earth. The Moon’s shadow falls on a small area of Earth. Never look directly at the Sun during an eclipse without certified solar viewing protection.</p>',
        '<p>☀️ Durante un'<b>eclissi di Sole</b>, la Luna passa tra il Sole e la Terra. L'ombra della Luna cade su una piccola zona terrestre. Non guardare mai direttamente il Sole durante un'eclissi senza appositi filtri certificati per l'osservazione solare.</p>'
      ],
      [
        '<p>🌕 During a <b>lunar eclipse</b>, Earth moves between the Sun and Moon. Earth’s shadow falls on the Moon. A lunar eclipse can be watched safely with the naked eye.</p><p><b>Quick memory trick:</b> solar = Moon’s shadow on Earth; lunar = Earth’s shadow on the Moon.</p>',
        '<p>🌕 Durante un'<b>eclissi di Luna</b>, la Terra si trova tra il Sole e la Luna. L'ombra della Terra si proietta sulla Luna. Un'eclissi lunare si può osservare in sicurezza a occhio nudo.</p><p><b>Trucco per ricordare:</b> eclissi solare = ombra della Luna sulla Terra; eclissi lunare = ombra della Terra sulla Luna.</p>'
      ]
    ],
    quiz: [
      question('What is between the Sun and Earth during a solar eclipse?', 'Che cosa si trova tra il Sole e la Terra durante un’eclissi solare?', [['The Moon', 'La Luna'], ['Mars', 'Marte'], ['Jupiter', 'Giove'], ['A cloud', 'Una nuvola']], ['The Moon blocks sunlight and casts its shadow on Earth.', 'La Luna blocca la luce solare e proietta la propria ombra sulla Terra.']),
      question('Whose shadow falls on the Moon during a lunar eclipse?', 'Di chi è l’ombra che cade sulla Luna durante un’eclissi lunare?', [['Earth’s', 'Della Terra'], ['The Sun’s', 'Del Sole'], ['Mars’s', 'Di Marte'], ['Venus’s', 'Di Venere']], ['Earth is between the Sun and Moon, so its shadow falls on the Moon.', 'La Terra si trova tra il Sole e la Luna e la sua ombra cade sulla Luna.']),
      question('Why do eclipses not happen every month?', 'Perché le eclissi non avvengono ogni mese?', [['The Moon’s orbit is tilted', 'L’orbita della Luna è inclinata'], ['The Sun turns off', 'Il Sole si spegne'], ['Earth stops rotating', 'La Terra smette di ruotare'], ['The Moon disappears', 'La Luna scompare']], ['The orbital tilt means perfect alignment happens only at certain times.', "L'inclinazione orbitale fa sì che l'allineamento avvenga solo in determinati momenti."]),
      question('Which eclipse is safe to watch with the naked eye?', 'Quale eclissi si può osservare a occhio nudo in sicurezza?', [['A lunar eclipse', 'Un’eclissi di Luna'], ['A solar eclipse', 'Un’eclissi di Sole'], ['Both by staring at the Sun', 'Entrambe fissando il Sole'], ['Neither ever', 'Mai nessuna delle due']], ['A lunar eclipse is safe to view; a solar eclipse needs certified protection.', "Un'eclissi lunare è sicura da osservare; per quella solare servono protezioni certificate.'])
    ]
  }),
  makeMission({
    id: 'g5u-gravity',
    sec: '7',
    pages: '16',
    hue: 15,
    title: ['The Force of Gravity', 'La forza di gravità'],
    topic: ['Gravity, mass, weight and orbital motion', 'Gravità, massa, peso e movimento orbitale'],
    demon: ['The Falling Illusion', 'L’Illusione della Caduta'],
    tech: ['Cosmos Form · Seventh Technique: Gravity Anchor', 'Stile del Cosmo · Settima Tecnica: Ancora Gravitazionale'],
    lessons: [
      [
        '<p>🍎 <b>Gravity</b> is an attractive force between objects that have mass. Earth’s gravity pulls objects towards its centre. It keeps us on the ground and helps hold the atmosphere around our planet.</p><p>Gravity also keeps the Moon in orbit around Earth and the planets in orbit around the Sun.</p>',
        '<p>🍎 La <b>gravità</b> è una forza di attrazione tra oggetti che hanno massa. La gravità terrestre attira gli oggetti verso il centro della Terra. Ci mantiene sul terreno e contribuisce a trattenere l'atmosfera intorno al pianeta.</p><p>La gravità mantiene anche la Luna in orbita intorno alla Terra e i pianeti in orbita intorno al Sole.</p>'
      ],
      [
        '<p>⚖️ <b>Mass</b> tells us how much matter an object contains and is measured in kilograms (kg). <b>Weight</b> is the force of gravity acting on that mass and is measured in newtons (N).</p><p>Your mass stays almost the same on Earth and the Moon, but your weight is smaller on the Moon because lunar gravity is weaker.</p>',
        '<p>⚖️ La <b>massa</b> indica quanta materia contiene un corpo e si misura in chilogrammi (kg). Il <b>peso</b> è la forza di gravità che agisce su quella massa e si misura in newton (N).</p><p>La tua massa rimane quasi uguale sulla Terra e sulla Luna, ma il tuo peso sulla Luna è minore perché la gravità lunare è più debole.</p>'
      ],
      [
        '<p>🛰️ An orbit is a curved path followed by one object around another because of gravity and its forward motion. Astronauts on the International Space Station are still affected by Earth’s gravity; they appear weightless because they and the station are continuously falling around Earth together.</p><p><b>Remember:</b> gravity does not disappear in space.</p>',
        '<p>🛰️ Un'orbita è il percorso curvo seguito da un corpo intorno a un altro grazie alla gravità e al suo movimento in avanti. Gli astronauti sulla Stazione Spaziale Internazionale sono ancora attratti dalla gravità terrestre; sembrano senza peso perché loro e la stazione stanno cadendo continuamente intorno alla Terra insieme.</p><p><b>Ricorda:</b> nello spazio la gravità non scompare.</p>'
      ]
    ],
    quiz: [
      question('What does gravity do?', 'Che cosa fa la gravità?', [['Attracts objects with mass', 'Attira gli oggetti che hanno massa'], ['Makes all objects glow', 'Fa brillare tutti gli oggetti'], ['Stops time', 'Ferma il tempo'], ['Removes mass', 'Elimina la massa']], ['Gravity is an attractive force between masses.', 'La gravità è una forza di attrazione tra masse.']),
      question('Which unit is used for mass?', 'Quale unità si usa per misurare la massa?', [['Kilogram (kg)', 'Chilogrammo (kg)'], ['Newton (N)', 'Newton (N)'], ['Metre (m)', 'Metro (m)'], ['Second (s)', 'Secondo (s)']], ['Mass is commonly measured in kilograms.', 'La massa si misura comunemente in chilogrammi.']),
      question('Which unit is used for weight as a force?', 'Quale unità si usa per il peso inteso come forza?', [['Newton (N)', 'Newton (N)'], ['Kilogram (kg)', 'Chilogrammo (kg)'], ['Litre (L)', 'Litro (L)'], ['Degree (°)', 'Grado (°)']], ['Weight is a force and is measured in newtons.', 'Il peso è una forza e si misura in newton.']),
      question('Why do planets orbit the Sun?', 'Perché i pianeti orbitano intorno al Sole?', [['Gravity bends their paths while they move forward', 'La gravità curva il loro percorso mentre si muovono in avanti'], ['The Sun pushes them with light only', 'Il Sole li spinge solo con la luce'], ['They are attached by strings', 'Sono attaccati con dei fili'], ['There is no gravity in space', 'Nello spazio non esiste la gravità']], ['Gravity and forward motion together produce orbital paths.', 'La gravità e il movimento in avanti producono insieme le orbite.'])
    ]
  }),
  makeMission({
    id: 'g5u-constellations',
    sec: '8',
    pages: '17',
    hue: 285,
    title: ['Patterns in the Stars', 'Le costellazioni'],
    topic: ['Constellations, star patterns and navigation', 'Costellazioni, figure stellari e orientamento'],
    demon: ['The Star Scrambler', 'Il Mescolatore di Stelle'],
    tech: ['Cosmos Form · Eighth Technique: Star Mapper', 'Stile del Cosmo · Ottava Tecnica: Mappa Stellare'],
    lessons: [
      [
        '<p>⭐ A <b>constellation</b> is an officially recognised area of the sky. People also imagine lines between some stars to make patterns that look like people, animals or objects.</p><p>Famous constellations include Orion, Ursa Major and Cassiopeia.</p>',
        '<p>⭐ Una <b>costellazione</b> è una regione del cielo riconosciuta ufficialmente. Le persone immaginano anche linee tra alcune stelle per creare figure che ricordano persone, animali o oggetti.</p><p>Tra le costellazioni famose ci sono Orione, l'Orsa Maggiore e Cassiopea.</p>'
      ],
      [
        '<p>🧭 Stars appear to move across the sky during the night because Earth rotates. In the Northern Hemisphere, the <b>North Star (Polaris)</b> appears close to the direction of the north celestial pole and can help us find north.</p><p>The stars in a constellation are usually at very different distances from Earth. They only look close together in our sky.</p>',
        '<p>🧭 Le stelle sembrano muoversi nel cielo durante la notte perché la Terra ruota. Nell'emisfero nord, la <b>Stella Polare</b> appare vicina alla direzione del polo nord celeste e può aiutarci a trovare il nord.</p><p>Le stelle di una costellazione si trovano spesso a distanze molto diverse dalla Terra: sembrano vicine solo nel cielo che osserviamo.</p>'
      ],
      [
        '<p>📍 Constellations help astronomers describe and map the sky. In the past, people used star patterns to navigate and organise calendars. Today, astronomers use precise maps and coordinates as well as constellation names.</p><p><b>Observation tip:</b> find a dark, safe place, let your eyes adjust, and use a star chart to identify patterns.</p>',
        '<p>📍 Le costellazioni aiutano gli astronomi a descrivere e mappare il cielo. In passato, le persone usavano le figure stellari per orientarsi e organizzare i calendari. Oggi gli astronomi utilizzano mappe precise e coordinate, oltre ai nomi delle costellazioni.</p><p><b>Consiglio:</b> scegli un luogo buio e sicuro, lascia abituare gli occhi e usa una carta stellare per riconoscere le figure.</p>'
      ]
    ],
    quiz: [
      question('What is a constellation?', 'Che cos’è una costellazione?', [['A recognised region of the sky', 'Una regione del cielo riconosciuta'], ['A group of planets orbiting Earth', 'Un gruppo di pianeti che orbita intorno alla Terra'], ['A cloud of rain', 'Una nuvola di pioggia'], ['A single satellite', 'Un singolo satellite']], ['Constellations are defined regions of the sky associated with star patterns.', 'Le costellazioni sono regioni definite del cielo associate a figure stellari.']),
      question('Which star helps people find north in the Northern Hemisphere?', 'Quale stella aiuta a trovare il nord nell’emisfero settentrionale?', [['Polaris (the North Star)', 'Polaris (la Stella Polare)'], ['Sirius', 'Sirio'], ['The Sun at midnight', 'Il Sole a mezzanotte'], ['Betelgeuse only', 'Solo Betelgeuse']], ['Polaris appears close to the north celestial pole.', 'Polaris appare vicina al polo nord celeste.']),
      question('Why do stars seem to move across the night sky?', 'Perché le stelle sembrano muoversi nel cielo notturno?', [['Earth rotates', 'La Terra ruota'], ['The stars orbit Earth every day', 'Le stelle orbitano intorno alla Terra ogni giorno'], ['The Moon pulls them across the sky', 'La Luna le trascina nel cielo'], ['The atmosphere carries them', 'L’atmosfera le trasporta']], ['Earth’s rotation makes the stars appear to move.', 'La rotazione terrestre fa sembrare che le stelle si muovano.']),
      question('Are stars in the same constellation necessarily close together in space?', 'Le stelle della stessa costellazione sono necessariamente vicine nello spazio?', [['No, they can be at very different distances', 'No, possono trovarsi a distanze molto diverse'], ['Yes, they touch each other', 'Sì, si toccano'], ['Yes, they are all the same size', 'Sì, hanno tutte la stessa dimensione'], ['Only during winter', 'Solo durante l’inverno']], ['A constellation is a pattern from our viewpoint; its stars can be far apart.', 'Una costellazione è una figura vista dalla Terra: le sue stelle possono essere molto lontane tra loro.'])
    ]
  }),
  makeMission({
    id: 'g5u-space-exploration',
    sec: '9',
    pages: '18',
    hue: 190,
    title: ['STEM: Exploring Space', 'STEM: L’esplorazione spaziale'],
    topic: ['Rockets, satellites, probes, astronauts and responsible exploration', 'Razzi, satelliti, sonde, astronauti ed esplorazione responsabile'],
    demon: ['The Space Debris Swarm', 'Lo Sciame dei Detriti Spaziali'],
    tech: ['Cosmos Form · Ninth Technique: Mission Planner', 'Stile del Cosmo · Nona Tecnica: Pianificatore di Missione'],
    lessons: [
      [
        '<p>🚀 Space exploration uses science and engineering to study places beyond Earth. <b>Rockets</b> provide the thrust needed to carry spacecraft beyond the atmosphere. A spacecraft may carry people, instruments or robots.</p><p>Engineers plan a mission by defining its goal, route, equipment, power supply and communication system.</p>',
        '<p>🚀 L'esplorazione spaziale usa scienza e tecnologia per studiare luoghi oltre la Terra. I <b>razzi</b> forniscono la spinta necessaria per portare i veicoli spaziali oltre l'atmosfera. Un veicolo può trasportare persone, strumenti o robot.</p><p>Gli ingegneri progettano una missione definendo obiettivo, percorso, strumenti, alimentazione e sistema di comunicazione.</p>'
      ],
      [
        '<p>🛰️ An <b>artificial satellite</b> is a human-made object placed in orbit. Satellites help with communication, weather forecasts, navigation and observing Earth. A <b>space probe</b> is a robotic spacecraft sent to investigate the Moon, planets, asteroids or other targets.</p>',
        '<p>🛰️ Un <b>satellite artificiale</b> è un oggetto costruito dall'uomo e messo in orbita. I satelliti aiutano nelle comunicazioni, nelle previsioni del tempo, nella navigazione e nell'osservazione della Terra. Una <b>sonda spaziale</b> è un veicolo robotico inviato a studiare la Luna, i pianeti, gli asteroidi o altri obiettivi.</p>'
      ],
      [
        '<p>👩‍🚀 Astronauts work in spacecraft and space stations. They need training, teamwork, careful planning and systems that provide air, water, food and protection.</p><p><b>STEM challenge:</b> plan a small robotic mission to study a planet. Choose one scientific question, one instrument to collect data, a way to send results home and one safety or environmental risk to reduce.</p>',
        '<p>👩‍🚀 Gli astronauti lavorano nei veicoli e nelle stazioni spaziali. Hanno bisogno di addestramento, lavoro di squadra, pianificazione e sistemi che forniscano aria, acqua, cibo e protezione.</p><p><b>Sfida STEM:</b> progetta una piccola missione robotica per studiare un pianeta. Scegli una domanda scientifica, uno strumento per raccogliere dati, un modo per inviare i risultati a casa e un rischio per la sicurezza o l'ambiente da ridurre.</p>'
      ]
    ],
    quiz: [
      question('What provides the thrust to launch a spacecraft?', 'Che cosa fornisce la spinta per lanciare un veicolo spaziale?', [['A rocket', 'Un razzo'], ['A telescope', 'Un telescopio'], ['A parachute alone', 'Un solo paracadute'], ['A weather balloon only', 'Solo un pallone meteorologico']], ['Rockets provide the thrust needed for launch.', 'I razzi forniscono la spinta necessaria al lancio.']),
      question('Which is a use of artificial satellites?', 'Qual è un utilizzo dei satelliti artificiali?', [['Weather forecasting', 'Previsioni meteorologiche'], ['Growing roots', 'Far crescere le radici'], ['Making rain', 'Produrre pioggia'], ['Stopping Earth’s rotation', 'Fermare la rotazione terrestre']], ['Satellites collect data and support weather forecasts.', 'I satelliti raccolgono dati e aiutano nelle previsioni meteorologiche.']),
      question('What is a space probe?', 'Che cos’è una sonda spaziale?', [['A robotic spacecraft for investigation', 'Un veicolo spaziale robotico per le esplorazioni'], ['A type of planet', 'Un tipo di pianeta'], ['A constellation', 'Una costellazione'], ['A space suit', 'Una tuta spaziale']], ['Probes carry instruments to study distant objects.', 'Le sonde trasportano strumenti per studiare oggetti lontani.']),
      question('Which is important when planning a space mission?', 'Che cosa è importante quando si pianifica una missione spaziale?', [['A goal, instruments and communication plan', 'Un obiettivo, strumenti e un piano di comunicazione'], ['Ignoring power and safety', 'Ignorare alimentazione e sicurezza'], ['Sending no instruments', 'Non inviare strumenti'], ['Changing the goal every minute', 'Cambiare obiettivo ogni minuto']], ['A mission needs a clear goal and suitable systems and equipment.', 'Una missione ha bisogno di un obiettivo chiaro e di sistemi e strumenti adeguati.'])
    ]
  }),
  makeMission({
    id: 'g5u-foucault',
    sec: '10',
    pages: '19',
    hue: 45,
    title: ['STEM: The Foucault Pendulum', 'STEM: Il pendolo di Foucault'],
    topic: ['A pendulum experiment that demonstrates Earth’s rotation', 'Un esperimento con il pendolo che dimostra la rotazione terrestre'],
    demon: ['The Rotation Reverser', 'L’Invertitore della Rotazione'],
    tech: ['Cosmos Form · Tenth Technique: Rotation Detector', 'Stile del Cosmo · Decima Tecnica: Rilevatore di Rotazione'],
    lessons: [
      [
        '<p>🔔 A <b>pendulum</b> is a weight hanging from a fixed point so it can swing back and forth. If it is pulled gently to one side and released, gravity makes it swing through a repeated path.</p><p>A Foucault pendulum is very long and carefully set up so its direction of swing can be observed over many hours.</p>',
        '<p>🔔 Un <b>pendolo</b> è un peso appeso a un punto fisso, libero di oscillare avanti e indietro. Se viene spostato delicatamente da un lato e lasciato andare, la gravità lo fa oscillare lungo un percorso ripetuto.</p><p>Il pendolo di Foucault è molto lungo ed è costruito in modo da poter osservare la direzione delle oscillazioni per molte ore.</p>'
      ],
      [
        '<p>🌍 The pendulum tends to keep swinging in nearly the same plane while Earth rotates beneath it. To an observer standing on Earth, the direction of the swing appears to change slowly during the day.</p><p>This is a demonstration that Earth rotates. The apparent turning is fastest at the poles and is not observed in the same way at the equator.</p>',
        '<p>🌍 Il pendolo tende a oscillare quasi sullo stesso piano mentre la Terra ruota sotto di esso. Per chi osserva dalla Terra, la direzione dell'oscillazione sembra cambiare lentamente durante la giornata.</p><p>È una dimostrazione della rotazione terrestre. La rotazione apparente del piano è più rapida ai poli e non si osserva nello stesso modo all'equatore.</p>'
      ],
      [
        '<p>🧪 <b>Try a simple pendulum:</b> tie a small, safe weight to a string, hold the string at a fixed point, move the weight a little to one side and release it gently. Keep people and fragile objects away.</p><p>Measure the time for ten swings. Change the string length and compare. A short pendulum swings faster than a long one. This classroom activity studies pendulum motion; it does not reproduce the full Foucault demonstration.</p>',
        '<p>🧪 <b>Prova un pendolo semplice:</b> lega un piccolo peso sicuro a un filo, tieni il filo fermo in un punto, sposta poco il peso di lato e lascialo andare delicatamente. Tieni lontane persone e oggetti fragili.</p><p>Misura il tempo di dieci oscillazioni. Cambia la lunghezza del filo e confronta i risultati. Un pendolo corto oscilla più rapidamente di uno lungo. Questa attività studia il moto del pendolo, ma non riproduce l'intera dimostrazione di Foucault.</p>'
      ]
    ],
    quiz: [
      question('What is a pendulum?', 'Che cos’è un pendolo?', [['A weight that swings from a fixed point', 'Un peso che oscilla da un punto fisso'], ['A planet orbiting the Sun', 'Un pianeta che orbita intorno al Sole'], ['A type of telescope', 'Un tipo di telescopio'], ['A magnetic compass', 'Una bussola magnetica']], ['A pendulum is a suspended weight that can swing.', 'Un pendolo è un peso sospeso che può oscillare.']),
      question('What does the Foucault pendulum demonstrate?', 'Che cosa dimostra il pendolo di Foucault?', [['Earth’s rotation', 'La rotazione terrestre'], ['The Moon’s phases', 'Le fasi lunari'], ['The Big Bang', 'Il Big Bang'], ['The speed of sound', 'La velocità del suono']], ['Its swing direction appears to change because Earth rotates beneath it.', 'La direzione dell’oscillazione sembra cambiare perché la Terra ruota sotto il pendolo.']),
      question('What happens when the string of a simple pendulum is made shorter?', 'Che cosa succede quando si accorcia il filo di un pendolo semplice?', [['It swings faster', 'Oscilla più rapidamente'], ['It stops gravity', 'Ferma la gravità'], ['It becomes a planet', 'Diventa un pianeta'], ['It no longer moves', 'Non si muove più']], ['A shorter pendulum has a shorter period and swings faster.', 'Un pendolo più corto ha un periodo minore e oscilla più rapidamente.']),
      question('What should you do during the classroom experiment?', 'Che cosa devi fare durante l’esperimento in classe?', [['Keep the swing area clear and release gently', 'Tenere libera l’area di oscillazione e lasciare andare delicatamente'], ['Swing the weight near someone’s face', 'Far oscillare il peso vicino al viso di qualcuno'], ['Use a heavy object over glass', 'Usare un oggetto pesante sopra il vetro'], ['Pull the string until it breaks', 'Tirare il filo fino a romperlo']], ['A clear area and gentle release make the activity safer.', 'Un’area libera e un rilascio delicato rendono l’attività più sicura.'])
    ]
  }),
  makeMission({
    id: 'g5u-review',
    sec: '11',
    pages: '20–25',
    hue: 320,
    title: ['Universe Review: Mission Complete', 'Ripasso dell’Universo: missione compiuta'],
    topic: ['Review, concept map and end-of-unit knowledge check', 'Ripasso, mappa dei concetti e verifica finale'],
    demon: ['The Final Cosmic Glitch', 'Il Glitch Cosmico Finale'],
    tech: ['Cosmos Form · Final Technique: Universe Mastery', 'Stile del Cosmo · Tecnica Finale: Maestria dell’Universo'],
    lessons: [
      [
        '<p>🗺️ Let’s connect the ideas. The Universe contains galaxies; galaxies contain stars and other objects. Our Solar System is in the Milky Way. The Sun is a star, and eight planets orbit it.</p><p>Earth rotates to make day and night and revolves around the Sun in one year. Its tilted axis helps produce the seasons.</p>',
        '<p>🗺️ Colleghiamo le idee. L'Universo contiene galassie; le galassie contengono stelle e altri oggetti. Il Sistema solare si trova nella Via Lattea. Il Sole è una stella e otto pianeti gli orbitano intorno.</p><p>La Terra ruota causando il giorno e la notte e compie una rivoluzione intorno al Sole in un anno. L'inclinazione del suo asse contribuisce a produrre le stagioni.</p>'
      ],
      [
        '<p>🌙 The Moon orbits Earth and reflects sunlight. Its phases depend on the changing view of its illuminated half. Eclipses happen when the Sun, Earth and Moon line up. Gravity keeps planets and moons in orbit.</p>',
        '<p>🌙 La Luna orbita intorno alla Terra e riflette la luce solare. Le sue fasi dipendono dalla diversa porzione illuminata che vediamo. Le eclissi avvengono quando Sole, Terra e Luna si allineano. La gravità mantiene pianeti e satelliti nelle loro orbite.</p>'
      ],
      [
        '<p>🔭 We explore space with telescopes, satellites, probes and crewed spacecraft. Constellations help us map the sky. The Foucault pendulum provides evidence of Earth’s rotation.</p><p><b>Self-check:</b> Can you explain one idea using a drawing, one using an example from everyday life, and one using a scientific model? Then take the final challenge!</p>',
        '<p>🔭 Esploriamo lo spazio con telescopi, satelliti, sonde e veicoli con equipaggio. Le costellazioni ci aiutano a mappare il cielo. Il pendolo di Foucault fornisce una prova della rotazione terrestre.</p><p><b>Autovalutazione:</b> sai spiegare un'idea con un disegno, una con un esempio della vita quotidiana e una con un modello scientifico? Poi affronta la verifica finale!</p>'
      ]
    ],
    quiz: [
      question('Which statement about the Big Bang is correct?', 'Quale affermazione sul Big Bang è corretta?', [['It describes the early expansion of the Universe', 'Descrive l’espansione iniziale dell’Universo'], ['It was an explosion inside the Sun', 'Fu un’esplosione dentro il Sole'], ['It explains only Earth’s seasons', 'Spiega solo le stagioni terrestri'], ['It happens every night', 'Avviene ogni notte']], ['The Big Bang model describes the early expansion of the Universe.', "Il modello del Big Bang descrive l'espansione iniziale dell'Universo."]),
      question('Which planet is third from the Sun?', 'Qual è il terzo pianeta a partire dal Sole?', [['Earth', 'Terra'], ['Venus', 'Venere'], ['Mars', 'Marte'], ['Jupiter', 'Giove']], ['The order begins Mercury, Venus, Earth.', 'L’ordine inizia con Mercurio, Venere, Terra.']),
      question('What causes day and night?', 'Che cosa causa il giorno e la notte?', [['Earth’s rotation', 'La rotazione terrestre'], ['Earth’s revolution', 'La rivoluzione terrestre'], ['The Moon’s orbit', 'L’orbita lunare'], ['The seasons', 'Le stagioni']], ['Earth rotates once in about 24 hours.', 'La Terra ruota in circa 24 ore.']),
      question('Why does the Moon shine?', 'Perché la Luna brilla?', [['It reflects sunlight', 'Riflette la luce del Sole'], ['It is a star', 'È una stella'], ['It burns fuel', 'Brucia combustibile'], ['It reflects Earth’s core', 'Riflette il nucleo terrestre']], ['The Moon reflects light from the Sun.', 'La Luna riflette la luce del Sole.']),
      question('During a lunar eclipse, what is between the Sun and Moon?', 'Durante un’eclissi lunare, che cosa si trova tra il Sole e la Luna?', [['Earth', 'La Terra'], ['Mars', 'Marte'], ['Venus', 'Venere'], ['Mercury', 'Mercurio']], ['Earth’s shadow falls on the Moon.', 'L’ombra della Terra cade sulla Luna.']),
      question('What is the difference between mass and weight?', 'Qual è la differenza tra massa e peso?', [['Mass is matter; weight is gravitational force', 'La massa è quantità di materia; il peso è una forza gravitazionale'], ['They are exactly the same', 'Sono esattamente la stessa cosa'], ['Weight is measured in kilograms only', 'Il peso si misura solo in chilogrammi'], ['Mass changes every day', 'La massa cambia ogni giorno']], ['Mass is measured in kilograms; weight is a force measured in newtons.', 'La massa si misura in chilogrammi; il peso è una forza misurata in newton.']),
      question('What does the Foucault pendulum show?', 'Che cosa mostra il pendolo di Foucault?', [['Earth rotates', 'La Terra ruota'], ['The Sun orbits Earth', 'Il Sole orbita intorno alla Terra'], ['The Moon makes its own light', 'La Luna produce luce propria'], ['Stars are all the same distance away', 'Le stelle sono tutte alla stessa distanza']], ['The apparent change in its swing direction is evidence of Earth’s rotation.', 'Il cambiamento apparente della direzione di oscillazione è una prova della rotazione terrestre.']),
      question('Which object is designed to investigate another planet without a crew?', 'Quale oggetto è progettato per studiare un altro pianeta senza equipaggio?', [['A space probe', 'Una sonda spaziale'], ['A constellation', 'Una costellazione'], ['A cloud', 'Una nuvola'], ['A moon phase', 'Una fase lunare']], ['A robotic space probe carries instruments to investigate its target.', 'Una sonda spaziale robotica trasporta strumenti per studiare il proprio obiettivo.'])
    ]
  })
];
