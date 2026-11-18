import type { Mission, QuizQuestion } from '../types';

type Pair = [string, string];
type Answer = Pair;

const q = (en: string, it: string, answers: Answer[], why: Pair): QuizQuestion => ({
  q: [en, it],
  a: answers,
  why
});

interface EcologyInput {
  id: string;
  sec: string;
  hue: number;
  title: Pair;
  topic: Pair;
  demon: Pair;
  tech: Pair;
  lessons: [Pair, Pair, Pair];
  quiz: QuizQuestion[];
}

const makeMission = (item: EcologyInput): Mission => ({
  id: item.id,
  arc: 0,
  sec: item.sec,
  pages: 'Supplementary',
  hue: item.hue,
  horns: 2,
  eyes: 2,
  title: item.title,
  topic: item.topic,
  demon: item.demon,
  tech: item.tech,
  scenes: [
    { who: 's', vis: item.id, text: item.lessons[0] },
    { who: 's', vis: item.id, text: item.lessons[1] },
    { who: 's', vis: item.id, text: item.lessons[2] },
    { who: 'd', text: [
      `<p>🌿 I am ${item.demon[0]}! I have mixed up the relationships between living things and their environments. Can you restore the balance?</p>`,
      `<p>🌿 Sono ${item.demon[1]}! Ho confuso le relazioni tra gli esseri viventi e il loro ambiente. Sai ristabilire l'equilibrio?</p>`
    ] },
    { type: 'battle' }
  ],
  quiz: item.quiz
});

export const GRADE5_ECOLOGY_MISSIONS: Mission[] = [
  makeMission({
    id: 'g5s-ecosystems', sec: '1', hue: 145,
    title: ['Ecosystems: Living Together', 'Ecosistemi: vivere insieme'],
    topic: ['Living and non-living parts of an ecosystem; relationships between organisms', 'Componenti viventi e non viventi di un ecosistema; relazioni tra organismi'],
    demon: ['The Balance Breaker', 'Il Distruttore di Equilibri'],
    tech: ['Nature Form · Third Technique: Ecosystem Balance', 'Stile della Natura · Terza Tecnica: Equilibrio dell’Ecosistema'],
    lessons: [
      [
        '<p>An <b>ecosystem</b> is a place where living things interact with one another and with their surroundings. A forest, a pond, a meadow and even a garden can be ecosystems.</p><p>Living parts include plants, animals, fungi and tiny organisms. Non-living parts include sunlight, water, air, soil, rocks and temperature.</p>',
        '<p>Un <b>ecosistema</b> è un luogo in cui gli esseri viventi interagiscono tra loro e con ciò che li circonda. Un bosco, uno stagno, un prato e persino un giardino possono essere ecosistemi.</p><p>Le componenti viventi comprendono piante, animali, funghi e organismi minuscoli. Quelle non viventi comprendono luce, acqua, aria, suolo, rocce e temperatura.</p>'
      ],
      [
        '<p>Every organism depends on its environment. Plants need light, water, air and suitable soil. Animals need food, water, shelter and enough space. Organisms also affect one another: bees visit flowers, earthworms help the soil, and birds may eat insects.</p>',
        '<p>Ogni organismo dipende dal proprio ambiente. Le piante hanno bisogno di luce, acqua, aria e terreno adatto. Gli animali hanno bisogno di cibo, acqua, riparo e spazio sufficiente. Gli organismi influenzano anche gli altri: le api visitano i fiori, i lombrichi aiutano il terreno e gli uccelli possono mangiare insetti.</p>'
      ],
      [
        '<p>An ecosystem is connected like a team. If one part changes, other parts may be affected. For example, if a pond becomes polluted, plants and small animals may become unhealthy, and fish and birds may lose food.</p><p><b>Remember:</b> protecting an ecosystem means caring for both living things and the conditions they need.</p>',
        '<p>Un ecosistema è collegato come una squadra. Se una parte cambia, anche le altre possono risentirne. Per esempio, se uno stagno viene inquinato, piante e piccoli animali possono stare male e pesci e uccelli possono perdere il cibo.</p><p><b>Ricorda:</b> proteggere un ecosistema significa prendersi cura sia degli esseri viventi sia delle condizioni di cui hanno bisogno.</p>'
      ]
    ],
    quiz: [
      q('Which is a non-living part of a forest ecosystem?', 'Quale elemento non vivente fa parte di un ecosistema forestale?', [['Sunlight', 'La luce del Sole'], ['A fox', 'Una volpe'], ['A fern', 'Una felce'], ['A mushroom', 'Un fungo']], ['Sunlight is not alive, but it is essential for many organisms.', 'La luce del Sole non è viva, ma è essenziale per molti organismi.']),
      q('What is an ecosystem?', 'Che cos’è un ecosistema?', [['Living things interacting with their surroundings', 'Gli esseri viventi che interagiscono con l’ambiente'], ['Only all the animals in one place', 'Solo tutti gli animali di un luogo'], ['A single plant', 'Una sola pianta'], ['A weather forecast', 'Una previsione del tempo']], ['An ecosystem includes living organisms and non-living conditions.', 'Un ecosistema comprende organismi viventi e componenti non viventi.']),
      q('What could happen if a pond becomes polluted?', 'Che cosa potrebbe accadere se uno stagno si inquina?', [['Several organisms may be harmed', 'Diversi organismi possono essere danneggiati'], ['All animals become plants', 'Tutti gli animali diventano piante'], ['The water turns into soil', 'L’acqua diventa terreno'], ['Nothing can ever change', 'Nulla può mai cambiare']], ['Pollution can affect many connected parts of an ecosystem.', 'L’inquinamento può influenzare molte componenti collegate di un ecosistema.']),
      q('Which action helps protect an ecosystem?', 'Quale azione aiuta a proteggere un ecosistema?', [['Keeping habitats clean', 'Mantenere puliti gli habitat'], ['Leaving rubbish in a stream', 'Lasciare rifiuti in un ruscello'], ['Removing every plant', 'Rimuovere tutte le piante'], ['Wasting water', 'Sprecare acqua']], ['Clean habitats support the organisms that live there.', 'Gli habitat puliti sostengono gli organismi che vi vivono.'])
    ]
  }),
  makeMission({
    id: 'g5s-habitats', sec: '2', hue: 115,
    title: ['Habitats and Adaptations', 'Habitat e adattamenti'],
    topic: ['Habitats, needs of organisms and features that help them survive', 'Habitat, bisogni degli organismi e caratteristiche che li aiutano a sopravvivere'],
    demon: ['The Habitat Shifter', 'Il Muta-Habitat'],
    tech: ['Nature Form · Fourth Technique: Survival Features', 'Stile della Natura · Quarta Tecnica: Caratteristiche per Sopravvivere'],
    lessons: [
      [
        '<p>A <b>habitat</b> is the natural home of an organism. A pond, woodland, seashore, desert and mountain are different habitats. Each habitat has its own conditions, such as temperature, water, light and shelter.</p>',
        '<p>Un <b>habitat</b> è l’ambiente naturale in cui vive un organismo. Uno stagno, un bosco, una costa, un deserto e una montagna sono habitat diversi. Ogni habitat ha condizioni proprie, come temperatura, acqua, luce e ripari.</p>'
      ],
      [
        '<p>Living things have features that help them live in their habitats. A cactus has a thick stem that stores water and spines instead of broad leaves. A polar bear has thick fur and a layer of fat that help it stay warm. A duck has webbed feet that help it swim.</p>',
        '<p>Gli esseri viventi possiedono caratteristiche che li aiutano a vivere nei loro habitat. Il cactus ha un fusto spesso che conserva acqua e spine al posto delle foglie larghe. L’orso polare ha una folta pelliccia e uno strato di grasso che lo aiutano a stare al caldo. L’anatra ha zampe palmate che la aiutano a nuotare.</p>'
      ],
      [
        '<p>These helpful features are called <b>adaptations</b>. An adaptation makes it easier for an organism to survive in a particular environment. Not every animal can live in every habitat: a fish needs water, while a camel is well suited to dry places.</p><p>When habitats change too quickly, organisms may struggle to find food, water or shelter.</p>',
        '<p>Queste caratteristiche utili si chiamano <b>adattamenti</b>. Un adattamento facilita la sopravvivenza di un organismo in un determinato ambiente. Non tutti gli animali possono vivere in ogni habitat: un pesce ha bisogno dell’acqua, mentre il cammello è adatto ai luoghi aridi.</p><p>Quando gli habitat cambiano troppo rapidamente, gli organismi possono avere difficoltà a trovare cibo, acqua o riparo.</p>'
      ]
    ],
    quiz: [
      q('What is a habitat?', 'Che cos’è un habitat?', [['The natural home of an organism', 'L’ambiente naturale di un organismo'], ['A kind of food', 'Un tipo di cibo'], ['A body part', 'Una parte del corpo'], ['A planet', 'Un pianeta']], ['A habitat is the place where an organism lives.', 'L’habitat è il luogo in cui vive un organismo.']),
      q('Which feature helps a cactus live in dry places?', 'Quale caratteristica aiuta un cactus a vivere in luoghi aridi?', [['A thick stem that stores water', 'Un fusto spesso che conserva acqua'], ['Webbed feet', 'Zampe palmate'], ['Thick fur', 'Pelliccia folta'], ['Gills', 'Branchie']], ['The cactus stores water in its thick stem.', 'Il cactus conserva acqua nel fusto spesso.']),
      q('What is an adaptation?', 'Che cos’è un adattamento?', [['A feature that helps an organism survive', 'Una caratteristica che aiuta un organismo a sopravvivere'], ['A type of weather', 'Un tipo di clima'], ['A human-made building', 'Un edificio costruito dall’uomo'], ['A food chain', 'Una catena alimentare']], ['Adaptations help organisms meet the challenges of their habitats.', 'Gli adattamenti aiutano gli organismi ad affrontare le condizioni del loro habitat.']),
      q('Why might a fish struggle on dry land?', 'Perché un pesce potrebbe avere difficoltà sulla terraferma?', [['Its body is adapted to living in water', 'Il suo corpo è adatto a vivere nell’acqua'], ['It has feathers', 'Ha le piume'], ['It needs tree branches', 'Ha bisogno dei rami degli alberi'], ['It can only eat leaves', 'Può mangiare solo foglie']], ['A fish has adaptations such as gills for life in water.', 'Il pesce possiede adattamenti, come le branchie, per vivere nell’acqua.'])
    ]
  }),
  makeMission({
    id: 'g5s-food-chains', sec: '3', hue: 65,
    title: ['Food Chains: Who Eats Whom?', 'Catene alimentari: chi mangia chi?'],
    topic: ['Producers, consumers, decomposers and the flow of energy', 'Produttori, consumatori, decompositori e flusso dell’energia'],
    demon: ['The Food Web Tangler', 'L’Intreccia-Catene'],
    tech: ['Nature Form · Fifth Technique: Energy Trail', 'Stile della Natura · Quinta Tecnica: Percorso dell’Energia'],
    lessons: [
      [
        '<p>A <b>food chain</b> shows how energy passes from one living thing to another when organisms eat. A simple meadow chain is: grass → grasshopper → frog → heron.</p><p>The arrows point from the food to the organism that eats it. They show the direction in which energy moves.</p>',
        '<p>Una <b>catena alimentare</b> mostra come l’energia passa da un essere vivente all’altro attraverso il nutrimento. Una semplice catena del prato è: erba → cavalletta → rana → airone.</p><p>Le frecce vanno dal cibo all’organismo che lo mangia. Indicano la direzione in cui passa l’energia.</p>'
      ],
      [
        '<p><b>Producers</b>, such as green plants, make their own food using sunlight. <b>Consumers</b> get energy by eating plants or other animals. Herbivores eat plants, carnivores eat animals, and omnivores eat both.</p>',
        '<p>I <b>produttori</b>, come le piante verdi, producono il proprio nutrimento usando la luce solare. I <b>consumatori</b> ottengono energia mangiando piante o altri animali. Gli erbivori mangiano piante, i carnivori mangiano animali e gli onnivori mangiano entrambi.</p>'
      ],
      [
        '<p><b>Decomposers</b>, including many fungi and bacteria, break down dead organisms and waste. They return nutrients to the environment, where plants can use them again.</p><p>In nature, food chains connect to form food webs. If one population changes, others may be affected too.</p>',
        '<p>I <b>decompositori</b>, tra cui molti funghi e batteri, trasformano i resti degli organismi morti e i rifiuti. Restituiscono sostanze nutritive all’ambiente, che le piante possono utilizzare di nuovo.</p><p>In natura le catene alimentari si collegano e formano reti alimentari. Se una popolazione cambia, anche le altre possono risentirne.</p>'
      ]
    ],
    quiz: [
      q('In grass → rabbit → fox, which organism is the producer?', 'Nella catena erba → coniglio → volpe, qual è il produttore?', [['Grass', 'L’erba'], ['Rabbit', 'Il coniglio'], ['Fox', 'La volpe'], ['All three', 'Tutti e tre']], ['Green plants are producers because they make their own food.', 'Le piante verdi sono produttori perché fabbricano il proprio nutrimento.']),
      q('What do the arrows in a food chain show?', 'Che cosa indicano le frecce in una catena alimentare?', [['The direction energy passes', 'La direzione in cui passa l’energia'], ['The size of each animal', 'La dimensione di ogni animale'], ['Where rain falls', 'Dove cade la pioggia'], ['The age of organisms', 'L’età degli organismi']], ['Arrows point from food to the organism that eats it.', 'Le frecce vanno dal cibo all’organismo che lo mangia.']),
      q('Which organism is a decomposer?', 'Quale organismo è un decompositore?', [['A fungus', 'Un fungo'], ['A hawk', 'Un falco'], ['A rabbit', 'Un coniglio'], ['A grass plant', 'Una pianta d’erba']], ['Many fungi break down dead material and return nutrients.', 'Molti funghi decompongono i resti e restituiscono sostanze nutritive.']),
      q('What is an omnivore?', 'Che cos’è un onnivoro?', [['An animal that eats plants and animals', 'Un animale che mangia piante e animali'], ['An animal that eats only grass', 'Un animale che mangia solo erba'], ['A plant that makes seeds', 'Una pianta che produce semi'], ['A decomposer only', 'Solo un decompositore']], ['Omnivores eat both plant and animal food.', 'Gli onnivori mangiano sia alimenti vegetali sia animali.'])
    ]
  }),
  makeMission({
    id: 'g5s-biodiversity', sec: '4', hue: 175,
    title: ['Biodiversity: Many Forms of Life', 'Biodiversità: tante forme di vita'],
    topic: ['Variety of living things and why biodiversity matters', 'Varietà degli esseri viventi e importanza della biodiversità'],
    demon: ['The Same-World Shade', 'L’Ombra del Mondo Uguale'],
    tech: ['Nature Form · Sixth Technique: Life Variety', 'Stile della Natura · Sesta Tecnica: Varietà della Vita'],
    lessons: [
      [
        '<p><b>Biodiversity</b> means the variety of living things in a place or on Earth. It includes different plants, animals, fungi and tiny organisms, as well as the habitats where they live.</p><p>A meadow with many kinds of flowers, insects and birds has greater variety than a place where only one kind of plant grows.</p>',
        '<p>La <b>biodiversità</b> è la varietà degli esseri viventi in un luogo o sulla Terra. Comprende piante, animali, funghi e organismi minuscoli diversi, oltre agli habitat in cui vivono.</p><p>Un prato con molti tipi di fiori, insetti e uccelli presenta una varietà maggiore rispetto a un luogo in cui cresce una sola specie di pianta.</p>'
      ],
      [
        '<p>Living things depend on one another. Insects pollinate many flowers, plants provide food and shelter, and decomposers recycle nutrients. A wide variety of organisms can help an ecosystem stay healthy.</p>',
        '<p>Gli esseri viventi dipendono gli uni dagli altri. Gli insetti impollinano molti fiori, le piante offrono cibo e riparo e i decompositori riciclano le sostanze nutritive. Una grande varietà di organismi può aiutare un ecosistema a rimanere in salute.</p>'
      ],
      [
        '<p>Pollution, habitat destruction, climate change and overhunting can reduce biodiversity. We can help by protecting natural areas, planting native flowers, saving water and avoiding litter.</p><p><b>Small actions matter:</b> a school garden that welcomes insects can become a tiny safe place for wildlife.</p>',
        '<p>Inquinamento, distruzione degli habitat, cambiamento climatico e caccia eccessiva possono ridurre la biodiversità. Possiamo aiutare proteggendo le aree naturali, piantando fiori autoctoni, risparmiando acqua ed evitando di abbandonare rifiuti.</p><p><b>Anche i piccoli gesti contano:</b> un giardino scolastico che accoglie gli insetti può diventare un piccolo rifugio per la fauna.</p>'
      ]
    ],
    quiz: [
      q('What does biodiversity mean?', 'Che cosa significa biodiversità?', [['The variety of living things', 'La varietà degli esseri viventi'], ['Only the number of rocks', 'Solo il numero delle rocce'], ['The weather in one week', 'Il tempo atmosferico di una settimana'], ['The height of trees only', 'Solo l’altezza degli alberi']], ['Biodiversity describes the variety of life in an area or on Earth.', 'La biodiversità descrive la varietà della vita in un luogo o sulla Terra.']),
      q('Why are pollinating insects important?', 'Perché gli insetti impollinatori sono importanti?', [['They help many plants reproduce', 'Aiutano molte piante a riprodursi'], ['They make sunlight', 'Producono la luce solare'], ['They turn rocks into water', 'Trasformano le rocce in acqua'], ['They stop all plants growing', 'Impediscono la crescita di tutte le piante']], ['Pollinators help flowers produce seeds and fruits.', 'Gli impollinatori aiutano i fiori a produrre semi e frutti.']),
      q('Which action can reduce biodiversity?', 'Quale azione può ridurre la biodiversità?', [['Destroying natural habitats', 'Distruggere gli habitat naturali'], ['Protecting a wetland', 'Proteggere una zona umida'], ['Planting native flowers', 'Piantare fiori autoctoni'], ['Reducing litter', 'Ridurre i rifiuti abbandonati']], ['When habitats are destroyed, organisms can lose food and shelter.', 'Quando gli habitat vengono distrutti, gli organismi possono perdere cibo e riparo.']),
      q('Which school project can support local wildlife?', 'Quale progetto scolastico può aiutare la fauna locale?', [['Planting a garden with native flowers', 'Creare un giardino con fiori autoctoni'], ['Covering the soil with plastic waste', 'Coprire il terreno con rifiuti di plastica'], ['Removing every flowering plant', 'Eliminare tutte le piante con fiori'], ['Leaving taps running', 'Lasciare i rubinetti aperti']], ['Native flowers can provide food for local pollinators.', 'I fiori autoctoni possono offrire nutrimento agli impollinatori locali.'])
    ]
  }),
  makeMission({
    id: 'g5s-environment-care', sec: '5', hue: 195,
    title: ['Protecting Our Environment', 'Proteggere il nostro ambiente'],
    topic: ['Natural resources, pollution, waste reduction and responsible choices', 'Risorse naturali, inquinamento, riduzione dei rifiuti e scelte responsabili'],
    demon: ['The Waste Wave', 'L’Onda dei Rifiuti'],
    tech: ['Nature Form · Seventh Technique: Planet Protector', 'Stile della Natura · Settima Tecnica: Custode del Pianeta'],
    lessons: [
      [
        '<p>People use natural resources such as water, soil, forests, minerals and energy. Some resources can be renewed naturally, while others take a very long time to form. Using resources carefully helps protect the environment.</p>',
        '<p>Le persone utilizzano risorse naturali come acqua, suolo, foreste, minerali ed energia. Alcune risorse si rinnovano naturalmente, mentre altre impiegano moltissimo tempo a formarsi. Usare le risorse con attenzione aiuta a proteggere l’ambiente.</p>'
      ],
      [
        '<p><b>Pollution</b> happens when harmful substances or too much waste enter air, water or soil. We can prevent some pollution by walking, cycling or using public transport when possible, disposing of waste correctly and choosing reusable items.</p>',
        '<p>L’<b>inquinamento</b> si verifica quando sostanze dannose o troppi rifiuti entrano nell’aria, nell’acqua o nel suolo. Possiamo prevenire una parte dell’inquinamento camminando, andando in bicicletta o usando i mezzi pubblici quando possibile, smaltendo correttamente i rifiuti e scegliendo oggetti riutilizzabili.</p>'
      ],
      [
        '<p>The familiar 3 Rs are <b>Reduce, Reuse and Recycle</b>. Reduce means using less; reuse means using an item again; recycle means processing materials to make new products. Saving water and electricity also reduces waste.</p><p>Environmental care works best when families, schools, communities and governments work together.</p>',
        '<p>Le 3 R più conosciute sono <b>Ridurre, Riutilizzare e Riciclare</b>. Ridurre significa consumare meno; riutilizzare significa usare di nuovo un oggetto; riciclare significa trasformare i materiali per creare nuovi prodotti. Anche risparmiare acqua ed elettricità riduce gli sprechi.</p><p>La tutela dell’ambiente funziona meglio quando famiglie, scuole, comunità e istituzioni collaborano.</p>'
      ]
    ],
    quiz: [
      q('Which is a natural resource?', 'Quale elemento è una risorsa naturale?', [['Fresh water', 'L’acqua dolce'], ['A plastic wrapper', 'Un involucro di plastica'], ['A mobile phone app', 'Un’app per cellulare'], ['A paper clip', 'Una graffetta']], ['Fresh water occurs in nature and is essential for life.', 'L’acqua dolce si trova in natura ed è essenziale per la vita.']),
      q('What does “reuse” mean?', 'Che cosa significa “riutilizzare”?', [['Use an item again', 'Usare di nuovo un oggetto'], ['Throw everything away', 'Buttar via tutto'], ['Use more energy', 'Usare più energia'], ['Mix all waste together', 'Mescolare tutti i rifiuti']], ['Reusing gives an item another use instead of throwing it away.', 'Riutilizzare significa dare un nuovo uso a un oggetto invece di buttarlo.']),
      q('Which choice can help reduce air pollution?', 'Quale scelta può aiutare a ridurre l’inquinamento dell’aria?', [['Walking or cycling for a short journey', 'Camminare o andare in bici per un breve tragitto'], ['Burning rubbish', 'Bruciare i rifiuti'], ['Leaving a car engine running', 'Lasciare il motore acceso da fermo'], ['Wasting electricity', 'Sprecare elettricità']], ['Walking and cycling avoid exhaust emissions for that journey.', 'Camminare e andare in bicicletta evitano le emissioni del veicolo per quel tragitto.']),
      q('Which sequence names the 3 Rs?', 'Quale sequenza indica le 3 R?', [['Reduce, Reuse, Recycle', 'Ridurre, Riutilizzare, Riciclare'], ['Run, Read, Rest', 'Correre, Leggere, Riposare'], ['Repair, Remove, Replace', 'Riparare, Rimuovere, Sostituire'], ['Rain, River, Rock', 'Pioggia, Fiume, Roccia']], ['The 3 Rs help us reduce waste and use materials more carefully.', 'Le 3 R ci aiutano a ridurre i rifiuti e usare i materiali con più attenzione.'])
    ]
  }),
  makeMission({
    id: 'g5s-scientific-investigation', sec: '6', hue: 35,
    title: ['Be a Scientist: Investigate a Habitat', 'Diventa scienziata: esplora un habitat'],
    topic: ['Observation, fair tests, recording evidence and drawing conclusions', 'Osservazione, esperimenti corretti, raccolta di dati e conclusioni'],
    demon: ['The Guessing Fog', 'La Nebbia delle Ipotesi'],
    tech: ['Discovery Form · Third Technique: Evidence First', 'Stile della Scoperta · Terza Tecnica: Prima le Prove'],
    lessons: [
      [
        '<p>Scientists begin with a question they can investigate. For example: <b>Do we find the same tiny animals in sunny and shady parts of the school garden?</b> Make a prediction, but remember that a prediction is an idea to test, not a guaranteed answer.</p>',
        '<p>Le scienziate partono da una domanda che possono esplorare. Per esempio: <b>troviamo gli stessi piccoli animali nelle zone soleggiate e in quelle ombreggiate del giardino scolastico?</b> Formula una previsione, ma ricorda che è un’idea da verificare, non una risposta sicura.</p>'
      ],
      [
        '<p>Observe carefully and compare places fairly. Look for the same amount of time, use the same observation area and record what you see. Change only the feature you are investigating, such as sunlight, while keeping other conditions as similar as possible.</p>',
        '<p>Osserva con attenzione e confronta i luoghi in modo corretto. Dedica lo stesso tempo a ogni osservazione, usa un’area di osservazione uguale e registra ciò che vedi. Cambia solo la caratteristica che stai studiando, come la luce solare, mantenendo per quanto possibile simili le altre condizioni.</p>'
      ],
      [
        '<p>Record evidence in a table or labelled drawing. Then ask: what did I observe? Does the evidence support my prediction? What could I investigate next?</p><p><b>Safety and care:</b> observe living things without harming them. Do not taste or touch unknown organisms, and wash your hands after outdoor investigations.</p>',
        '<p>Registra le prove in una tabella o in un disegno con etichette. Poi chiediti: che cosa ho osservato? Le prove confermano la mia previsione? Che cosa potrei studiare in seguito?</p><p><b>Sicurezza e rispetto:</b> osserva gli esseri viventi senza danneggiarli. Non assaggiare né toccare organismi sconosciuti e lavati le mani dopo le attività all’aperto.</p>'
      ]
    ],
    quiz: [
      q('What is a scientific prediction?', 'Che cos’è una previsione scientifica?', [['An idea that can be tested', 'Un’idea che può essere verificata'], ['A result that must be true', 'Un risultato che deve essere vero'], ['A guess that never needs evidence', 'Un’ipotesi che non richiede prove'], ['A drawing only', 'Solo un disegno']], ['A prediction is an idea to test using observations or an experiment.', 'Una previsione è un’idea da verificare con osservazioni o esperimenti.']),
      q('How can you compare two garden areas fairly?', 'Come puoi confrontare correttamente due zone del giardino?', [['Observe each for the same amount of time', 'Osservare entrambe per lo stesso tempo'], ['Use different tools and times', 'Usare strumenti e tempi diversi'], ['Change many conditions at once', 'Cambiare molte condizioni insieme'], ['Record only surprising results', 'Registrare solo i risultati sorprendenti']], ['Keeping the method similar makes the comparison fairer.', 'Mantenere simile il metodo rende il confronto più corretto.']),
      q('Why should you record observations?', 'Perché devi registrare le osservazioni?', [['So you can use evidence to explain what happened', 'Per usare le prove e spiegare che cosa è successo'], ['So you can forget the results', 'Per dimenticare i risultati'], ['To change the results', 'Per modificare i risultati'], ['Because drawings are always required', 'Perché i disegni sono sempre obbligatori']], ['Records help you compare observations and draw a conclusion.', 'Le registrazioni aiutano a confrontare le osservazioni e formulare una conclusione.']),
      q('What is a safe way to study small animals outdoors?', 'Qual è un modo sicuro per studiare piccoli animali all’aperto?', [['Observe without harming or touching unknown organisms', 'Osservare senza danneggiare o toccare organismi sconosciuti'], ['Taste a leaf to identify it', 'Assaggiare una foglia per identificarla'], ['Pull apart nests', 'Distruggere i nidi'], ['Keep wild animals in a pocket', 'Tenere animali selvatici in tasca']], ['Respectful observation protects both the learner and wildlife.', 'L’osservazione rispettosa protegge sia chi studia sia gli animali.'])
    ]
  })
];
