import type { Mission, QuizQuestion } from '../types';

type Pair = [string, string];

const q = (en: string, it: string, answers: Pair[], why: Pair): QuizQuestion => ({
  q: [en, it],
  a: answers,
  why
});

interface MissionInput {
  id: string;
  sec: string;
  pages: string;
  hue: number;
  title: Pair;
  topic: Pair;
  demon: Pair;
  tech: Pair;
  lessons: [Pair, Pair, Pair];
  quiz: QuizQuestion[];
}

const makeMission = (item: MissionInput): Mission => ({
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
      '<p>⚡ I am ' + item.demon[0] + '! I have scrambled the science of energy and forces. Can you put the facts back in order?</p>',
      '<p>⚡ Sono ' + item.demon[1] + '! Ho confuso la scienza dell’energia e delle forze. Sai rimettere in ordine le informazioni?</p>'
    ] },
    { type: 'battle' }
  ],
  quiz: item.quiz
});

export const GRADE5_ENERGY_FORCES_MISSIONS: Mission[] = [
  makeMission({
    id: 'g5e-what-is-energy', sec: '1', pages: '27–29', hue: 45,
    title: ['What Is Energy?', 'Che cos’è l’energia?'],
    topic: ['Energy, its forms and how it changes', 'L’energia, le sue forme e le sue trasformazioni'],
    demon: ['The Energy Eater', 'Il Divoratore di Energia'],
    tech: ['Energy Form · First Technique: Power-Up', 'Stile dell’Energia · Prima Tecnica: Carica Energetica'],
    lessons: [
      [
        '<p>⚡ <b>Energy</b> makes changes possible. It helps a moving bicycle keep moving, a lamp produce light and our bodies run and think. We cannot usually see energy itself, but we can observe what it does.</p><p>Energy can be transferred from one object or system to another. It can also change from one form to another.</p>',
        '<p>⚡ L’<b>energia</b> rende possibili i cambiamenti. Aiuta una bicicletta a muoversi, una lampada a fare luce e il nostro corpo a correre e pensare. Di solito non vediamo l’energia direttamente, ma osserviamo i suoi effetti.</p><p>L’energia può passare da un corpo o sistema a un altro e può trasformarsi da una forma a un’altra.</p>'
      ],
      [
        '<p>🔥 There are different forms of energy. <b>Thermal</b> energy is related to temperature; <b>light</b> energy travels as light; <b>sound</b> energy comes from vibrations; <b>electrical</b> energy is associated with electric charges; <b>chemical</b> energy is stored in fuels and food; <b>kinetic</b> energy belongs to moving objects; <b>potential</b> energy is stored because of position or shape.</p>',
        '<p>🔥 Esistono diverse forme di energia. L’energia <b>termica</b> è legata alla temperatura; quella <b>luminosa</b> viaggia con la luce; quella <b>sonora</b> nasce dalle vibrazioni; quella <b>elettrica</b> è legata alle cariche elettriche; quella <b>chimica</b> è immagazzinata nei combustibili e nel cibo; quella <b>cinetica</b> appartiene ai corpi in movimento; quella <b>potenziale</b> è energia immagazzinata per la posizione o la forma.</p>'
      ],
      [
        '<p>🔄 Energy often changes form. In a torch, chemical energy in the battery becomes electrical energy, then light and thermal energy. In our bodies, chemical energy from food helps muscles move and also produces heat.</p><p><b>Remember:</b> energy is not created from nothing or simply destroyed. It is transferred or transformed. Some often spreads into the surroundings as thermal energy.</p>',
        '<p>🔄 L’energia spesso cambia forma. In una torcia, l’energia chimica della batteria diventa energia elettrica e poi energia luminosa e termica. Nel nostro corpo, l’energia chimica del cibo aiuta i muscoli a muoversi e produce anche calore.</p><p><b>Ricorda:</b> l’energia non nasce dal nulla e non scompare: si trasferisce o si trasforma. Una parte si diffonde spesso nell’ambiente sotto forma di calore.</p>'
      ]
    ],
    quiz: [
      q('What does energy make possible?', 'Che cosa rende possibile l’energia?', [['Changes and actions', 'Cambiamenti e azioni'], ['Only darkness', 'Solo il buio'], ['The disappearance of matter', 'La scomparsa della materia'], ['Nothing at all', 'Niente'],], ['Energy makes movement, heating, light and many other changes possible.', 'L’energia rende possibili il movimento, il riscaldamento, la luce e molti altri cambiamenti.']),
      q('Which is a form of energy?', 'Quale è una forma di energia?', [['Thermal energy', 'Energia termica'], ['A kilogram', 'Un chilogrammo'], ['A metre', 'Un metro'], ['A litre', 'Un litro']], ['Thermal energy is related to the temperature of a system.', 'L’energia termica è legata alla temperatura di un sistema.']),
      q('What happens to energy in a torch?', 'Che cosa succede all’energia in una torcia?', [['It changes from chemical to electrical, light and thermal energy', 'Si trasforma da chimica a elettrica, luminosa e termica'], ['It disappears completely', 'Scompare completamente'], ['It becomes matter', 'Diventa materia'], ['It changes only into sound', 'Si trasforma solo in suono']], ['The battery stores chemical energy that is transformed when the torch is switched on.', 'La batteria immagazzina energia chimica che si trasforma quando si accende la torcia.']),
      q('Which energy is associated with a moving ball?', 'Quale energia è associata a una palla in movimento?', [['Kinetic energy', 'Energia cinetica'], ['Chemical energy only', 'Solo energia chimica'], ['Sound energy only', 'Solo energia sonora'], ['Nuclear energy', 'Energia nucleare']], ['Kinetic energy is the energy of motion.', 'L’energia cinetica è l’energia del movimento.'])
    ]
  }),
  makeMission({
    id: 'g5e-energy-sources', sec: '2', pages: '30–31', hue: 105,
    title: ['Where Does Energy Come From?', 'Da dove viene l’energia?'],
    topic: ['Renewable and non-renewable energy sources', 'Fonti di energia rinnovabili e non rinnovabili'],
    demon: ['The Empty Power Plant', 'La Centrale Senza Energia'],
    tech: ['Energy Form · Second Technique: Source Sorter', 'Stile dell’Energia · Seconda Tecnica: Classificatore di Fonti'],
    lessons: [
      [
        '<p>🌞 An <b>energy source</b> is something from which we obtain useful energy. The Sun is the main source of energy for many processes on Earth. Other sources include wind, moving water, fuels and heat from inside Earth.</p><p>People use energy to heat homes, travel, make products and power devices.</p>',
        '<p>🌞 Una <b>fonte di energia</b> è ciò da cui ricaviamo energia utile. Il Sole è la principale fonte di energia per molti processi sulla Terra. Altre fonti sono il vento, l’acqua in movimento, i combustibili e il calore interno della Terra.</p><p>Usiamo energia per riscaldare le case, viaggiare, produrre oggetti e alimentare dispositivi.</p>'
      ],
      [
        '<p>♻️ <b>Renewable sources</b> are naturally replenished on a human timescale. They include sunlight, wind, flowing water, geothermal heat and sustainably managed biomass. Solar panels turn sunlight into electricity; wind turbines use moving air; hydroelectric plants use moving water.</p>',
        '<p>♻️ Le fonti <b>rinnovabili</b> si ricostituiscono naturalmente in tempi compatibili con la vita umana. Comprendono luce solare, vento, acqua in movimento, calore geotermico e biomassa gestita in modo sostenibile. I pannelli solari trasformano la luce in elettricità; le pale eoliche sfruttano il vento; le centrali idroelettriche usano l’acqua in movimento.</p>'
      ],
      [
        '<p>🛢️ <b>Non-renewable sources</b>, such as coal, oil, natural gas and uranium, are limited or take extremely long to form. Burning coal, oil and gas releases greenhouse gases and air pollutants. Every source has advantages and impacts, so saving energy and choosing cleaner options matter.</p><p><b>Try this:</b> list three ways your family or school could use less electricity without making activities unsafe.</p>',
        '<p>🛢️ Le fonti <b>non rinnovabili</b>, come carbone, petrolio, gas naturale e uranio, sono limitate oppure impiegano tempi lunghissimi per formarsi. Bruciare carbone, petrolio e gas libera gas serra e sostanze inquinanti. Ogni fonte ha vantaggi e impatti: per questo è importante risparmiare energia e scegliere soluzioni più pulite.</p><p><b>Prova:</b> elenca tre modi in cui la famiglia o la scuola possono consumare meno elettricità senza rendere insicure le attività.</p>'
      ]
    ],
    quiz: [
      q('Which is a renewable energy source?', 'Quale è una fonte di energia rinnovabile?', [['Wind', 'Il vento'], ['Coal', 'Il carbone'], ['Petrol', 'Il petrolio'], ['Natural gas', 'Il gas naturale']], ['Wind is naturally replenished by atmospheric processes.', 'Il vento si rinnova naturalmente grazie ai processi atmosferici.']),
      q('What do solar panels use?', 'Che cosa utilizzano i pannelli solari?', [['Sunlight', 'La luce del Sole'], ['Coal', 'Il carbone'], ['Petrol', 'Il petrolio'], ['Moving rocks', 'Rocce in movimento']], ['Solar panels convert sunlight into electrical energy.', 'I pannelli solari trasformano la luce solare in energia elettrica.']),
      q('Why are fossil fuels called non-renewable?', 'Perché i combustibili fossili sono detti non rinnovabili?', [['They take millions of years to form and are limited', 'Si formano in milioni di anni e sono limitati'], ['They grow back every day', 'Ricrescono ogni giorno'], ['They are made by wind turbines', 'Sono prodotti dalle pale eoliche'], ['They contain no energy', 'Non contengono energia']], ['Coal, oil and gas form over geological timescales.', 'Carbone, petrolio e gas si formano in tempi geologici.']),
      q('Which action helps save energy?', 'Quale azione aiuta a risparmiare energia?', [['Switching off lights when they are not needed', 'Spegnere le luci quando non servono'], ['Leaving every device on', 'Lasciare accesi tutti i dispositivi'], ['Opening the fridge for a long time', 'Tenere aperto a lungo il frigorifero'], ['Heating an empty room', 'Riscaldare una stanza vuota']], ['Using only the energy we need reduces waste.', 'Usare solo l’energia necessaria riduce gli sprechi.'])
    ]
  }),
  makeMission({
    id: 'g5e-electricity', sec: '3', pages: '32–33', hue: 215,
    title: ['Electricity in Everyday Life', 'L’energia elettrica nella vita quotidiana'],
    topic: ['Electricity, simple circuits and responsible energy use', 'Elettricità, circuiti semplici e uso responsabile dell’energia'],
    demon: ['The Short-Circuit Sprite', 'Lo Spiritello del Cortocircuito'],
    tech: ['Energy Form · Third Technique: Circuit Builder', 'Stile dell’Energia · Terza Tecnica: Costruttore di Circuiti'],
    lessons: [
      [
        '<p>🔌 <b>Electrical energy</b> is essential in homes, schools and hospitals. Electric current is the movement of electric charges through a suitable path. A battery can provide energy to move charges around a circuit.</p><p>Electricity can power lamps, computers, motors and many other devices.</p>',
        '<p>🔌 L’<b>energia elettrica</b> è fondamentale nelle case, nelle scuole e negli ospedali. La corrente elettrica è il movimento di cariche elettriche lungo un percorso adatto. Una batteria può fornire l’energia necessaria per far muovere le cariche in un circuito.</p><p>L’elettricità alimenta lampade, computer, motori e molti altri dispositivi.</p>'
      ],
      [
        '<p>💡 A simple circuit needs a source of electrical energy, connecting wires and a device such as a lamp. The path must be <b>closed</b> for current to flow. A switch opens or closes the path. If a wire is disconnected, the circuit is open and the lamp goes out.</p><p>A material that lets current pass easily is a <b>conductor</b>, such as copper. A material that resists the flow is an <b>insulator</b>, such as rubber or plastic.</p>',
        '<p>💡 Un circuito semplice ha bisogno di una fonte di energia elettrica, fili di collegamento e un dispositivo come una lampadina. Il percorso deve essere <b>chiuso</b> perché passi la corrente. Un interruttore apre o chiude il percorso. Se un filo è scollegato, il circuito è aperto e la lampadina si spegne.</p><p>Un materiale che lascia passare facilmente la corrente è un <b>conduttore</b>, come il rame. Un materiale che ostacola il passaggio è un <b>isolante</b>, come la gomma o la plastica.</p>'
      ],
      [
        '<p>⚠️ Electricity can be dangerous. Never experiment with wall sockets, mains electricity, damaged cables or wet hands. Classroom circuit activities must use only approved low-voltage batteries and teacher-approved equipment. Never put objects into sockets.</p><p>🌱 <b>Educazione civica:</b> switch off lights and devices when appropriate, choose efficient appliances and avoid wasting electricity.</p>',
        '<p>⚠️ L’elettricità può essere pericolosa. Non fare mai esperimenti con prese domestiche, corrente di rete, cavi danneggiati o mani bagnate. Le attività in classe devono usare soltanto batterie a bassa tensione approvate e materiali autorizzati dall’insegnante. Non inserire mai oggetti nelle prese.</p><p>🌱 <b>Educazione civica:</b> spegni luci e dispositivi quando è opportuno, scegli apparecchi efficienti ed evita gli sprechi di elettricità.</p>'
      ]
    ],
    quiz: [
      q('What must happen for current to flow in a simple circuit?', 'Che cosa deve accadere perché passi corrente in un circuito semplice?', [['The circuit must be closed', 'Il circuito deve essere chiuso'], ['The wire must be broken', 'Il filo deve essere interrotto'], ['The switch must always be open', 'L’interruttore deve essere sempre aperto'], ['The battery must be wet', 'La batteria deve essere bagnata']], ['A closed path allows current to flow through the circuit.', 'Un percorso chiuso permette alla corrente di attraversare il circuito.']),
      q('Which material is a good electrical conductor?', 'Quale materiale è un buon conduttore elettrico?', [['Copper', 'Il rame'], ['Rubber', 'La gomma'], ['Dry plastic', 'La plastica asciutta'], ['Wood', 'Il legno']], ['Copper allows electric charges to move easily.', 'Il rame permette alle cariche elettriche di muoversi facilmente.']),
      q('What does a switch do?', 'Che cosa fa un interruttore?', [['Opens or closes a circuit', 'Apre o chiude un circuito'], ['Creates sunlight', 'Crea luce solare'], ['Changes copper into plastic', 'Trasforma il rame in plastica'], ['Stops gravity', 'Ferma la gravità']], ['A switch controls whether the circuit path is open or closed.', 'Un interruttore controlla se il percorso del circuito è aperto o chiuso.']),
      q('Which electrical safety rule is correct?', 'Quale regola di sicurezza elettrica è corretta?', [['Use only approved low-voltage classroom kits', 'Usare solo kit didattici a bassa tensione approvati'], ['Experiment inside wall sockets', 'Fare esperimenti nelle prese'], ['Touch damaged cables', 'Toccare cavi danneggiati'], ['Use electrical devices with wet hands', 'Usare dispositivi elettrici con le mani bagnate']], ['Mains electricity and damaged cables are dangerous; classroom experiments need approved low-voltage equipment.', 'La corrente domestica e i cavi danneggiati sono pericolosi: gli esperimenti richiedono materiali approvati a bassa tensione.'])
    ]
  }),
  makeMission({
    id: 'g5e-light-colours', sec: '4', pages: '34–35', hue: 55,
    title: ['Light and Colours', 'La luce e i colori'],
    topic: ['Light sources, white light, colour and seeing objects', 'Sorgenti luminose, luce bianca, colori e visione degli oggetti'],
    demon: ['The Colour Thief', 'Il Ladro di Colori'],
    tech: ['Energy Form · Fourth Technique: Rainbow Vision', 'Stile dell’Energia · Quarta Tecnica: Vista Arcobaleno'],
    lessons: [
      [
        '<p>🌈 <b>Light</b> is a form of energy. A luminous object, such as the Sun or a lamp, produces its own light. The Moon and a book are not luminous: we see them because they reflect light from another source.</p><p>Light travels in straight lines through a uniform transparent material and can travel through empty space.</p>',
        '<p>🌈 La <b>luce</b> è una forma di energia. Un corpo luminoso, come il Sole o una lampada, produce luce propria. La Luna e un libro non sono luminosi: li vediamo perché riflettono la luce di un’altra sorgente.</p><p>La luce si propaga in linea retta in un mezzo trasparente e uniforme e può viaggiare anche nel vuoto.</p>'
      ],
      [
        '<p>🔴⚪ White light looks colourless, but it is made of many colours. A prism can separate white light into a band of colours called a <b>spectrum</b>. A rainbow forms when sunlight is refracted, reflected and dispersed by water droplets.</p><p>Red, green and blue are the primary colours of light in the additive colour model used by screens.</p>',
        '<p>🔴⚪ La luce bianca sembra senza colore, ma è composta da molti colori. Un prisma può separarla in una fascia di colori chiamata <b>spettro</b>. L’arcobaleno si forma quando la luce solare viene rifratta, riflessa e dispersa dalle gocce d’acqua.</p><p>Rosso, verde e blu sono i colori primari della luce nel modello additivo usato dagli schermi.</p>'
      ],
      [
        '<p>🎨 We see an object because light reaches our eyes from it. A red apple appears red because it reflects more red light and absorbs much of the other colours. A white object reflects much of the visible light; a black object absorbs much of it.</p><p><b>Try:</b> look at a colourful object in sunlight and then in a dim room. Does the amount of light change how clearly you see its colour?</p>',
        '<p>🎨 Vediamo un oggetto perché la luce da esso raggiunge i nostri occhi. Una mela appare rossa perché riflette soprattutto la luce rossa e assorbe gran parte degli altri colori. Un oggetto bianco riflette molta luce visibile; uno nero ne assorbe molta.</p><p><b>Prova:</b> osserva un oggetto colorato alla luce del Sole e poi in una stanza poco illuminata. La quantità di luce cambia quanto chiaramente vedi il suo colore?</p>'
      ]
    ],
    quiz: [
      q('Which object produces its own light?', 'Quale oggetto produce luce propria?', [['The Sun', 'Il Sole'], ['The Moon', 'La Luna'], ['A mirror', 'Uno specchio'], ['A book', 'Un libro']], ['The Sun is a luminous object; the Moon reflects sunlight.', 'Il Sole è un corpo luminoso; la Luna riflette la luce solare.']),
      q('What can a prism do to white light?', 'Che cosa può fare un prisma alla luce bianca?', [['Separate it into colours', 'Separarla nei diversi colori'], ['Turn it into sound', 'Trasformarla in suono'], ['Make it disappear', 'Farla scomparire'], ['Turn it into electricity directly', 'Trasformarla direttamente in elettricità']], ['A prism disperses white light into its spectrum.', 'Un prisma disperde la luce bianca nel suo spettro.']),
      q('Why does a red object look red?', 'Perché un oggetto rosso appare rosso?', [['It reflects red light towards our eyes', 'Riflette luce rossa verso i nostri occhi'], ['It produces red sound', 'Produce suono rosso'], ['It absorbs all light', 'Assorbe tutta la luce'], ['It has no interaction with light', 'Non interagisce con la luce']], ['The colour we see depends on the light an object reflects.', 'Il colore che vediamo dipende dalla luce riflessa dall’oggetto.']),
      q('Which are the additive primary colours of light?', 'Quali sono i colori primari additivi della luce?', [['Red, green and blue', 'Rosso, verde e blu'], ['Red, yellow and black', 'Rosso, giallo e nero'], ['Green, orange and purple', 'Verde, arancione e viola'], ['White, grey and black', 'Bianco, grigio e nero']], ['Screens combine red, green and blue light.', 'Gli schermi combinano luce rossa, verde e blu.'])
    ]
  }),
  makeMission({
    id: 'g5e-light-phenomena', sec: '5', pages: '36', hue: 195,
    title: ['When Light Meets Materials', 'Quando la luce incontra i materiali'],
    topic: ['Reflection, refraction, transparent, translucent and opaque materials', 'Riflessione, rifrazione, materiali trasparenti, traslucidi e opachi'],
    demon: ['The Mirror Maze', 'Il Labirinto degli Specchi'],
    tech: ['Energy Form · Fifth Technique: Light Path', 'Stile dell’Energia · Quinta Tecnica: Percorso della Luce'],
    lessons: [
      [
        '<p>🪞 When light hits a surface, some of it may bounce back. This is <b>reflection</b>. A smooth mirror reflects light in an organised way and can form a clear image. Rough surfaces scatter light in many directions.</p>',
        '<p>🪞 Quando la luce colpisce una superficie, una parte può tornare indietro: è la <b>riflessione</b>. Uno specchio liscio riflette la luce in modo ordinato e può formare un’immagine nitida. Le superfici ruvide diffondono la luce in molte direzioni.</p>'
      ],
      [
        '<p>🥤 When light passes from one transparent material into another, it can change direction. This is called <b>refraction</b>. A straw in a glass of water can look bent because light changes direction as it leaves the water and enters the air.</p><p>Lenses use refraction to help focus light, for example in glasses, cameras and magnifying glasses.</p>',
        '<p>🥤 Quando la luce passa da un materiale trasparente a un altro, può cambiare direzione. Questo fenomeno si chiama <b>rifrazione</b>. Una cannuccia in un bicchiere d’acqua può sembrare piegata perché la luce cambia direzione passando dall’acqua all’aria.</p><p>Le lenti sfruttano la rifrazione per concentrare la luce, per esempio negli occhiali, nelle macchine fotografiche e nelle lenti d’ingrandimento.</p>'
      ],
      [
        '<p>🔦 Materials interact with light in different ways. <b>Transparent</b> materials let light pass through clearly, like clean glass. <b>Translucent</b> materials let light through but scatter it, like frosted glass. <b>Opaque</b> materials do not let light pass through, like wood.</p><p>Opaque objects can create shadows when they block light.</p>',
        '<p>🔦 I materiali interagiscono con la luce in modi diversi. I materiali <b>trasparenti</b> lasciano passare la luce in modo nitido, come il vetro pulito. Quelli <b>traslucidi</b> lasciano passare la luce ma la diffondono, come il vetro smerigliato. Quelli <b>opachi</b> non lasciano passare la luce, come il legno.</p><p>Gli oggetti opachi possono creare ombre quando bloccano la luce.</p>'
      ]
    ],
    quiz: [
      q('What is reflection?', 'Che cos’è la riflessione?', [['Light bouncing off a surface', 'La luce che rimbalza su una superficie'], ['Light becoming sound', 'La luce che diventa suono'], ['A material producing gravity', 'Un materiale che produce gravità'], ['The movement of water only', 'Solo il movimento dell’acqua']], ['Reflection occurs when light returns from a surface.', 'La riflessione avviene quando la luce torna indietro da una superficie.']),
      q('Why can a straw look bent in water?', 'Perché una cannuccia può sembrare piegata nell’acqua?', [['Refraction changes the direction of light', 'La rifrazione cambia la direzione della luce'], ['The straw changes shape', 'La cannuccia cambia forma'], ['Water creates a mirror image only', 'L’acqua crea solo un’immagine speculare'], ['Sound bends the straw', 'Il suono piega la cannuccia']], ['Light changes direction when it passes between water and air.', 'La luce cambia direzione passando tra acqua e aria.']),
      q('Which material is translucent?', 'Quale materiale è traslucido?', [['Frosted glass', 'Vetro smerigliato'], ['Clear window glass', 'Vetro trasparente'], ['A wooden board', 'Una tavola di legno'], ['A metal sheet', 'Una lamina di metallo']], ['Frosted glass lets light through but scatters it.', 'Il vetro smerigliato lascia passare la luce ma la diffonde.']),
      q('What is needed to make a shadow?', 'Che cosa serve per formare un’ombra?', [['An object blocking light', 'Un oggetto che blocca la luce'], ['A sound source only', 'Solo una sorgente sonora'], ['A magnet', 'Un magnete'], ['A battery with no lamp', 'Una batteria senza lampada']], ['A shadow forms where an object blocks light from reaching a surface.', 'Un’ombra si forma dove un oggetto impedisce alla luce di raggiungere una superficie.'])
    ]
  }),
  makeMission({
    id: 'g5e-stem-light', sec: '6', pages: '37', hue: 300,
    title: ['STEM: Shadows and a Colour Wheel', 'STEM: Ombre e disco di Newton'],
    topic: ['Investigating shadows and mixing colours of light', 'Esplorare le ombre e la composizione della luce bianca'],
    demon: ['The Shadow Shifter', 'Il Cambia-Ombre'],
    tech: ['Energy Form · Sixth Technique: Experiment Lab', 'Stile dell’Energia · Sesta Tecnica: Laboratorio Sperimentale'],
    lessons: [
      [
        '<p>🧪 <b>Investigation 1 – Shadows:</b> place a torch, an opaque object and a sheet of paper in a line. Shine the torch towards the paper and observe the shadow. Move the object closer to the torch, then closer to the paper. How does the shadow change?</p>',
        '<p>🧪 <b>Esperimento 1 – Le ombre:</b> metti in linea una torcia, un oggetto opaco e un foglio. Punta la torcia verso il foglio e osserva l’ombra. Avvicina l’oggetto alla torcia e poi al foglio. Come cambia l’ombra?</p>'
      ],
      [
        '<p>📏 Keep the torch and paper in fixed positions and change only the object’s position. Record the size and sharpness of each shadow. A nearby object can make a larger shadow. The result also depends on the size and distance of the light source.</p><p>Never shine a torch or any bright light into someone’s eyes.</p>',
        '<p>📏 Tieni fermi la torcia e il foglio e cambia soltanto la posizione dell’oggetto. Registra la grandezza e la nitidezza di ogni ombra. Un oggetto vicino alla sorgente luminosa può produrre un’ombra più grande. Il risultato dipende anche dalla dimensione e dalla distanza della sorgente.</p><p>Non puntare mai una torcia o una luce intensa negli occhi di qualcuno.</p>'
      ],
      [
        '<p>🎡 <b>Investigation 2 – Newton’s disc:</b> make a paper circle divided into rainbow-coloured sectors. Ask an adult to help attach it securely to a pencil or safe spinner. When it spins quickly, the colours may blend and the disc can look pale or whitish. This demonstrates how colours of light can combine; the result depends on the colours, speed and lighting.</p>',
        '<p>🎡 <b>Esperimento 2 – Il disco di Newton:</b> prepara un cerchio di carta diviso in settori colorati come l’arcobaleno. Chiedi a un adulto di fissarlo in modo sicuro a una matita o a una trottola adatta. Quando gira velocemente, i colori possono mescolarsi e il disco può apparire chiaro o biancastro. L’esperimento mostra come i colori della luce possono combinarsi; il risultato dipende dai colori, dalla velocità e dall’illuminazione.</p>'
      ]
    ],
    quiz: [
      q('What blocks light to make a shadow?', 'Che cosa blocca la luce per creare un’ombra?', [['An opaque object', 'Un oggetto opaco'], ['A transparent window only', 'Solo una finestra trasparente'], ['A sound wave', 'Un’onda sonora'], ['A magnet', 'Un magnete']], ['An opaque object blocks light from reaching part of a surface.', 'Un oggetto opaco impedisce alla luce di raggiungere una parte della superficie.']),
      q('What should stay fixed in a fair shadow investigation?', 'Che cosa deve restare fermo in un esperimento corretto sulle ombre?', [['The torch and the paper while you move the object', 'La torcia e il foglio mentre sposti l’oggetto'], ['Every object at once', 'Tutti gli oggetti contemporaneamente'], ['Nothing at all', 'Niente'], ['The room temperature only', 'Solo la temperatura della stanza']], ['Changing one factor at a time makes the comparison clearer.', 'Cambiare un solo fattore alla volta rende più chiaro il confronto.']),
      q('What can happen when a Newton’s disc spins quickly?', 'Che cosa può accadere quando il disco di Newton gira velocemente?', [['Its colours can blend and look pale', 'I colori possono mescolarsi e apparire chiari'], ['It becomes a real star', 'Diventa una vera stella'], ['It produces magnetic force', 'Produce forza magnetica'], ['It stops reflecting all light', 'Smette di riflettere tutta la luce']], ['The spinning sectors blend in our vision and may appear whitish.', 'I settori in rotazione si mescolano nella nostra visione e possono apparire biancastri.']),
      q('Which is a safe experiment rule?', 'Quale è una regola di sicurezza?', [['Never shine bright light into someone’s eyes', 'Non puntare mai una luce intensa negli occhi'], ['Look directly into the Sun', 'Guardare direttamente il Sole'], ['Swing tools near faces', 'Agitare strumenti vicino ai visi'], ['Run with scissors', 'Correre con le forbici']], ['Bright light can harm eyes; keep experiments controlled and safe.', 'La luce intensa può danneggiare gli occhi: gli esperimenti devono essere controllati e sicuri.'])
    ]
  }),
  makeMission({
    id: 'g5e-sound', sec: '7', pages: '38–39', hue: 185,
    title: ['Sound: Vibrations We Can Hear', 'Il suono: vibrazioni che possiamo sentire'],
    topic: ['Sound production, vibration, pitch, loudness and propagation', 'Produzione del suono, vibrazioni, altezza, intensità e propagazione'],
    demon: ['The Silent Monster', 'Il Mostro Silenzioso'],
    tech: ['Energy Form · Seventh Technique: Sound Detective', 'Stile dell’Energia · Settima Tecnica: Detective del Suono'],
    lessons: [
      [
        '<p>🎵 <b>Sound</b> is produced by vibrations. When a guitar string vibrates, it makes nearby air vibrate. These vibrations travel through a material as sound waves and can reach our ears.</p><p>Sound needs a medium, such as air, water or a solid, to travel. It cannot travel through a vacuum.</p>',
        '<p>🎵 Il <b>suono</b> è prodotto dalle vibrazioni. Quando vibra una corda di chitarra, fa vibrare anche l’aria vicina. Queste vibrazioni si propagano in un materiale come onde sonore e possono raggiungere le nostre orecchie.</p><p>Il suono ha bisogno di un mezzo, come aria, acqua o un solido, per propagarsi. Non viaggia nel vuoto.</p>'
      ],
      [
        '<p>🥁 Two important properties are <b>pitch</b> and <b>loudness</b>. Pitch tells us whether a sound is high or low and depends mainly on vibration frequency. Loudness tells us whether it seems quiet or loud and is related to the strength of the sound wave.</p><p>A faster vibration usually produces a higher-pitched sound.</p>',
        '<p>🥁 Due caratteristiche importanti sono <b>altezza</b> e <b>intensità</b>. L’altezza ci dice se un suono è acuto o grave e dipende soprattutto dalla frequenza delle vibrazioni. L’intensità ci dice se il suono sembra debole o forte ed è legata all’ampiezza dell’onda sonora.</p><p>Una vibrazione più rapida produce di solito un suono più acuto.</p>'
      ],
      [
        '<p>📣 Sound can be reflected, absorbed or transmitted. An echo is a sound reflected by a surface and heard again. Soft materials such as curtains can absorb some sound; hard surfaces often reflect it.</p><p><b>Care for hearing:</b> avoid very loud sounds and keep headphones at a safe volume.</p>',
        '<p>📣 Il suono può essere riflesso, assorbito o trasmesso. L’eco è un suono riflesso da una superficie e udito di nuovo. Materiali morbidi come le tende possono assorbire parte del suono; le superfici dure spesso lo riflettono.</p><p><b>Proteggi l’udito:</b> evita i suoni molto forti e mantieni le cuffie a un volume sicuro.</p>'
      ]
    ],
    quiz: [
      q('What produces sound?', 'Che cosa produce il suono?', [['Vibrations', 'Le vibrazioni'], ['Stillness', 'L’immobilità'], ['Magnetism only', 'Solo il magnetismo'], ['A shadow', 'Un’ombra']], ['Sound begins when an object vibrates.', 'Il suono nasce quando un oggetto vibra.']),
      q('Can sound travel through a vacuum?', 'Il suono può viaggiare nel vuoto?', [['No, it needs a medium', 'No, ha bisogno di un mezzo'], ['Yes, faster than light', 'Sì, più velocemente della luce'], ['Only when it is loud', 'Solo quando è forte'], ['Only at night', 'Solo di notte']], ['Sound needs matter such as air, water or a solid to carry vibrations.', 'Il suono ha bisogno di materia, come aria, acqua o un solido, per trasportare le vibrazioni.']),
      q('What mainly determines whether a sound is high or low?', 'Che cosa determina soprattutto se un suono è acuto o grave?', [['Frequency of vibration', 'Frequenza della vibrazione'], ['Colour of the object', 'Colore dell’oggetto'], ['Room brightness', 'Luminosità della stanza'], ['Object weight only', 'Solo il peso dell’oggetto']], ['Higher vibration frequency usually means higher pitch.', 'Una frequenza di vibrazione maggiore corrisponde di solito a un suono più acuto.']),
      q('What is an echo?', 'Che cos’è un’eco?', [['A reflected sound', 'Un suono riflesso'], ['A colour of light', 'Un colore della luce'], ['A type of magnet', 'Un tipo di magnete'], ['A shadow', 'Un’ombra']], ['An echo is sound that reflects from a surface and returns.', 'L’eco è un suono che si riflette su una superficie e ritorna.'])
    ]
  }),
  makeMission({
    id: 'g5e-forces', sec: '8', pages: '40', hue: 15,
    title: ['Forces: Pushes and Pulls', 'Le forze: spinte e trazioni'],
    topic: ['Effects of forces, contact and non-contact forces, friction and gravity', 'Effetti delle forze, forze di contatto e a distanza, attrito e gravità'],
    demon: ['The Motion Mixer', 'Il Confusore del Movimento'],
    tech: ['Force Form · First Technique: Motion Control', 'Stile della Forza · Prima Tecnica: Controllo del Movimento'],
    lessons: [
      [
        '<p>💪 A <b>force</b> is a push or a pull. Forces can make an object start moving, stop, speed up, slow down or change direction. They can also change an object’s shape, for example when you squeeze a sponge.</p><p>We measure force in <b>newtons (N)</b> using an instrument called a force meter or spring balance.</p>',
        '<p>💪 Una <b>forza</b> è una spinta o una trazione. Le forze possono mettere in movimento un oggetto, fermarlo, accelerarlo, rallentarlo o cambiarne la direzione. Possono anche cambiarne la forma, per esempio quando schiacci una spugna.</p><p>La forza si misura in <b>newton (N)</b> con uno strumento chiamato dinamometro.</p>'
      ],
      [
        '<p>🧲 Some forces need objects to touch: these are <b>contact forces</b>, such as a hand pushing a door or friction between shoes and the floor. Other forces can act at a distance, such as gravity and magnetism.</p><p><b>Friction</b> acts between surfaces that touch and usually opposes sliding. It helps us walk, but it can also slow moving objects.</p>',
        '<p>🧲 Alcune forze richiedono il contatto tra gli oggetti: sono le <b>forze di contatto</b>, come una mano che spinge una porta o l’attrito tra le scarpe e il pavimento. Altre forze agiscono a distanza, come la gravità e il magnetismo.</p><p>L’<b>attrito</b> agisce tra superfici a contatto e di solito si oppone allo scorrimento. Ci aiuta a camminare, ma può anche rallentare gli oggetti in movimento.</p>'
      ],
      [
        '<p>🍎 <b>Gravity</b> is an attractive force between objects that have mass. Earth’s gravity pulls objects towards its centre and gives them weight. Mass measures how much matter an object contains; weight is the gravitational force acting on it.</p><p>Forces can work together. A book resting on a table is pulled down by gravity while the table pushes upwards.</p>',
        '<p>🍎 La <b>gravità</b> è una forza di attrazione tra oggetti che hanno massa. La gravità terrestre attira gli oggetti verso il centro della Terra e dà loro un peso. La massa misura quanta materia contiene un oggetto; il peso è la forza gravitazionale che agisce su di esso.</p><p>Le forze possono agire insieme. Un libro appoggiato sul tavolo è attirato verso il basso dalla gravità, mentre il tavolo lo spinge verso l’alto.</p>'
      ]
    ],
    quiz: [
      q('What is a force?', 'Che cos’è una forza?', [['A push or a pull', 'Una spinta o una trazione'], ['A colour', 'Un colore'], ['A type of sound', 'Un tipo di suono'], ['A unit of temperature', 'Un’unità di temperatura']], ['Forces are pushes or pulls that can change motion or shape.', 'Le forze sono spinte o trazioni che possono cambiare il movimento o la forma.']),
      q('Which is a non-contact force?', 'Quale è una forza a distanza?', [['Gravity', 'La gravità'], ['A hand pushing a box', 'Una mano che spinge una scatola'], ['Friction between shoes and floor', 'L’attrito tra scarpe e pavimento'], ['A foot kicking a ball', 'Un piede che calcia una palla']], ['Gravity acts at a distance between masses.', 'La gravità agisce a distanza tra masse.']),
      q('What does friction usually do?', 'Che cosa fa di solito l’attrito?', [['Opposes sliding between touching surfaces', 'Si oppone allo scorrimento tra superfici a contatto'], ['Make objects invisible', 'Rende invisibili gli oggetti'], ['Create light from nothing', 'Crea luce dal nulla'], ['Remove all mass', 'Elimina tutta la massa']], ['Friction opposes relative motion between surfaces in contact.', 'L’attrito si oppone al movimento relativo tra superfici a contatto.']),
      q('What is the difference between mass and weight?', 'Qual è la differenza tra massa e peso?', [['Mass measures matter; weight is gravitational force', 'La massa misura la materia; il peso è una forza gravitazionale'], ['They always mean exactly the same thing', 'Significano sempre esattamente la stessa cosa'], ['Mass is measured in newtons', 'La massa si misura in newton'], ['Weight never changes anywhere', 'Il peso non cambia mai in nessun luogo']], ['Mass is measured in kilograms; weight is a force measured in newtons.', 'La massa si misura in chilogrammi; il peso è una forza misurata in newton.'])
    ]
  }),
  makeMission({
    id: 'g5e-magnetism', sec: '9', pages: '41–42', hue: 265,
    title: ['The Magnetic Force', 'La forza magnetica'],
    topic: ['Magnets, poles, magnetic fields and magnetic materials', 'Magneti, poli, campi magnetici e materiali magnetici'],
    demon: ['The Magnetic Trickster', 'Il Burlone Magnetico'],
    tech: ['Force Form · Second Technique: Pole Finder', 'Stile della Forza · Seconda Tecnica: Cerca-Poli'],
    lessons: [
      [
        '<p>🧲 A <b>magnet</b> can attract some materials, especially iron and many types of steel. Every magnet has two poles: a north pole and a south pole. The magnetic effect is strongest near the poles.</p><p>A magnet can act without touching an object. The region where its magnetic force can act is called its <b>magnetic field</b>.</p>',
        '<p>🧲 Un <b>magnete</b> può attirare alcuni materiali, soprattutto il ferro e molti tipi di acciaio. Ogni magnete ha due poli: un polo nord e un polo sud. L’effetto magnetico è più forte vicino ai poli.</p><p>Un magnete può agire senza toccare un oggetto. La regione in cui può agire la sua forza si chiama <b>campo magnetico</b>.</p>'
      ],
      [
        '<p>🧭 The poles interact in a predictable way: <b>opposite poles attract</b> and <b>like poles repel</b>. So north attracts south, while north repels north and south repels south.</p><p>A compass contains a small magnetised needle that turns to line up with Earth’s magnetic field.</p>',
        '<p>🧭 I poli interagiscono in modo prevedibile: i <b>poli opposti si attraggono</b> e i <b>poli uguali si respingono</b>. Quindi nord attira sud, mentre nord respinge nord e sud respinge sud.</p><p>Una bussola contiene un piccolo ago magnetizzato che si orienta secondo il campo magnetico terrestre.</p>'
      ],
      [
        '<p>🔍 Not every metal is magnetic. Iron, nickel and cobalt are common magnetic materials; copper, aluminium, wood, paper and plastic are not attracted like iron by an ordinary classroom magnet.</p><p>Never place strong magnets near medical devices or electronic equipment without adult guidance. Keep small magnets away from young children because swallowing them is dangerous.</p>',
        '<p>🔍 Non tutti i metalli sono magnetici. Ferro, nichel e cobalto sono materiali magnetici comuni; rame, alluminio, legno, carta e plastica non vengono attirati come il ferro da un normale magnete didattico.</p><p>Non avvicinare magneti potenti a dispositivi medici o apparecchi elettronici senza la guida di un adulto. Tieni i piccoli magneti lontani dai bambini piccoli: ingerirli è pericoloso.</p>'
      ]
    ],
    quiz: [
      q('What happens when two north poles are brought together?', 'Che cosa succede avvicinando due poli nord?', [['They repel', 'Si respingono'], ['They attract', 'Si attraggono'], ['They disappear', 'Scompaiono'], ['They become south poles', 'Diventano poli sud']], ['Like magnetic poles repel each other.', 'I poli magnetici uguali si respingono.']),
      q('Which material is attracted by an ordinary magnet?', 'Quale materiale viene attirato da un normale magnete?', [['Iron', 'Il ferro'], ['Paper', 'La carta'], ['Wood', 'Il legno'], ['Plastic', 'La plastica']], ['Iron is a magnetic material.', 'Il ferro è un materiale magnetico.']),
      q('What is a magnetic field?', 'Che cos’è un campo magnetico?', [['The region where magnetic forces can act', 'La regione in cui possono agire le forze magnetiche'], ['A type of sound wave', 'Un tipo di onda sonora'], ['The colour of a magnet', 'Il colore di un magnete'], ['A battery compartment', 'Un vano per batterie']], ['A magnetic field describes the region where magnetic effects can be detected.', 'Il campo magnetico descrive la regione in cui si possono rilevare effetti magnetici.']),
      q('How does a compass work?', 'Come funziona una bussola?', [['A magnetised needle aligns with Earth’s magnetic field', 'Un ago magnetizzato si orienta secondo il campo magnetico terrestre'], ['It measures temperature', 'Misura la temperatura'], ['It follows the Sun only', 'Segue solo il Sole'], ['It detects sound', 'Rileva il suono']], ['The compass needle is a small magnet that aligns with Earth’s field.', 'L’ago della bussola è un piccolo magnete che si orienta secondo il campo terrestre.'])
    ]
  }),
  makeMission({
    id: 'g5e-stem-magnets', sec: '10', pages: '42', hue: 130,
    title: ['STEM: Which Objects Are Magnetic?', 'STEM: Quali oggetti sono magnetici?'],
    topic: ['Testing materials and recording evidence', 'Sperimentare i materiali e registrare le osservazioni'],
    demon: ['The False Attractor', 'Il Falso Attrattore'],
    tech: ['Force Form · Third Technique: Material Tester', 'Stile della Forza · Terza Tecnica: Tester dei Materiali'],
    lessons: [
      [
        '<p>🧪 <b>Question:</b> which everyday materials are attracted to a magnet? Make a prediction before testing. Gather a classroom magnet and safe objects such as a steel paper clip, aluminium foil, a copper coin, a wooden pencil, paper and plastic.</p>',
        '<p>🧪 <b>Domanda:</b> quali materiali di uso quotidiano vengono attirati da un magnete? Fai una previsione prima di iniziare. Raccogli un magnete didattico e oggetti sicuri come una graffetta d’acciaio, un foglio di alluminio, una moneta di rame, una matita di legno, carta e plastica.</p>'
      ],
      [
        '<p>📋 Bring the magnet close to each object without touching it. Record “attracted” or “not attracted” in a table. Test each object in the same way and repeat any result that seems uncertain.</p><p>Do not test electrical devices, bank cards, medical devices, sharp objects or unknown items.</p>',
        '<p>📋 Avvicina il magnete a ogni oggetto senza toccarlo. Registra “attratto” o “non attratto” in una tabella. Prova ogni oggetto nello stesso modo e ripeti i risultati che sembrano incerti.</p><p>Non sperimentare su dispositivi elettrici, carte bancarie, dispositivi medici, oggetti appuntiti o materiali sconosciuti.</p>'
      ],
      [
        '<p>📊 Compare your results with your predictions. A paper clip made of steel is usually attracted; aluminium foil, copper, wood, paper and plastic are not attracted by an ordinary classroom magnet.</p><p><b>Science skill:</b> a good conclusion uses the evidence you collected. If a result surprises you, check the object’s material before changing your explanation.</p>',
        '<p>📊 Confronta i risultati con le previsioni. Una graffetta d’acciaio viene di solito attirata; foglio di alluminio, rame, legno, carta e plastica non sono attirati da un normale magnete didattico.</p><p><b>Abilità scientifica:</b> una buona conclusione usa le prove raccolte. Se un risultato ti sorprende, verifica il materiale dell’oggetto prima di cambiare la spiegazione.</p>'
      ]
    ],
    quiz: [
      q('What should you do before testing an object?', 'Che cosa dovresti fare prima di provare un oggetto?', [['Make a prediction', 'Fare una previsione'], ['Hide the result', 'Nascondere il risultato'], ['Change all the objects', 'Cambiare tutti gli oggetti'], ['Guess after testing only', 'Indovinare solo dopo la prova']], ['A prediction helps you compare expectations with evidence.', 'Una previsione ti aiuta a confrontare le aspettative con le prove.']),
      q('Which object is usually attracted to a classroom magnet?', 'Quale oggetto viene di solito attirato da un magnete didattico?', [['A steel paper clip', 'Una graffetta d’acciaio'], ['A wooden pencil', 'Una matita di legno'], ['A sheet of paper', 'Un foglio di carta'], ['A plastic ruler', 'Un righello di plastica']], ['Steel usually contains iron and is attracted to a magnet.', 'L’acciaio contiene di solito ferro ed è attirato da un magnete.']),
      q('Why should you repeat an uncertain test?', 'Perché dovresti ripetere una prova incerta?', [['To check whether the result is reliable', 'Per verificare se il risultato è attendibile'], ['To change the answer randomly', 'Per cambiare la risposta a caso'], ['To make the magnet disappear', 'Per far sparire il magnete'], ['To avoid recording evidence', 'Per evitare di registrare le prove']], ['Repeating helps identify mistakes and increases confidence in observations.', 'Ripetere aiuta a individuare errori e aumenta la fiducia nelle osservazioni.']),
      q('What makes a scientific conclusion strong?', 'Che cosa rende solida una conclusione scientifica?', [['Evidence from the test', 'Le prove raccolte durante l’esperimento'], ['A guess without testing', 'Un’ipotesi senza prove'], ['A favourite answer', 'La risposta preferita'], ['A colourful drawing only', 'Solo un disegno colorato']], ['A conclusion should be supported by observations and recorded results.', 'Una conclusione deve essere sostenuta dalle osservazioni e dai risultati registrati.'])
    ]
  }),
  makeMission({
    id: 'g5e-levers', sec: '11', pages: '43', hue: 25,
    title: ['STEM: Levers Make Work Easier', 'STEM: Le leve facilitano il lavoro'],
    topic: ['Levers, fulcrum, effort, load and everyday examples', 'Leve, fulcro, forza applicata, carico ed esempi quotidiani'],
    demon: ['The Heavy Lifter', 'Il Sollevatore Gigante'],
    tech: ['Force Form · Fourth Technique: Lever Master', 'Stile della Forza · Quarta Tecnica: Maestro delle Leve'],
    lessons: [
      [
        '<p>⚖️ A <b>lever</b> is a simple machine: a rigid bar that turns around a fixed point called the <b>fulcrum</b>. A lever can help us lift or move a load with less effort or in a more convenient way.</p><p>The three important parts are the fulcrum, the effort (the force we apply) and the load (what we want to move).</p>',
        '<p>⚖️ Una <b>leva</b> è una macchina semplice: un’asta rigida che ruota intorno a un punto fisso chiamato <b>fulcro</b>. Una leva può aiutarci a sollevare o spostare un carico con meno sforzo o in modo più comodo.</p><p>Le tre parti importanti sono il fulcro, la forza applicata (lo sforzo) e il carico (ciò che vogliamo spostare).</p>'
      ],
      [
        '<p>🛠️ In a first-class lever, the fulcrum is between the effort and the load: a seesaw and scissors are examples. In a second-class lever, the load is between the fulcrum and effort: a wheelbarrow is an example. In a third-class lever, the effort is between the fulcrum and load: tweezers and the human forearm are examples.</p>',
        '<p>🛠️ In una leva di primo genere, il fulcro si trova tra la forza applicata e il carico: altalena a bilico e forbici ne sono esempi. In una leva di secondo genere, il carico è tra fulcro e forza: la carriola è un esempio. In una leva di terzo genere, la forza è tra fulcro e carico: pinzette e avambraccio umano ne sono esempi.</p>'
      ],
      [
        '<p>📐 A lever’s effect depends on the distances from the fulcrum. Applying effort farther from the fulcrum can make it easier to turn the lever. Levers do not remove the work needed; they can change the size or direction of the force and the distance over which it acts.</p><p><b>Try:</b> with an adult, balance a ruler on a safe rounded support and compare how easy it is to lift a small load when you push near or far from the fulcrum.</p>',
        '<p>📐 L’effetto di una leva dipende dalle distanze dal fulcro. Applicare la forza più lontano dal fulcro può rendere più facile far ruotare la leva. Le leve non eliminano il lavoro necessario: possono cambiare l’intensità o la direzione della forza e la distanza su cui agisce.</p><p><b>Prova:</b> con un adulto, bilancia un righello su un supporto arrotondato e confronta quanto è facile sollevare un piccolo carico spingendo vicino o lontano dal fulcro.</p>'
      ]
    ],
    quiz: [
      q('What is the fixed turning point of a lever called?', 'Come si chiama il punto fisso intorno al quale ruota una leva?', [['Fulcrum', 'Fulcro'], ['Load', 'Carico'], ['Battery', 'Batteria'], ['Magnet', 'Magnete']], ['The fulcrum is the point around which a lever turns.', 'Il fulcro è il punto intorno al quale ruota una leva.']),
      q('Which is an example of a first-class lever?', 'Quale è un esempio di leva di primo genere?', [['A seesaw', 'Un’altalena a bilico'], ['A wheelbarrow', 'Una carriola'], ['Tweezers', 'Delle pinzette'], ['A ramp', 'Una rampa']], ['In a seesaw, the fulcrum is between the effort and the load.', 'In un’altalena a bilico, il fulcro si trova tra forza e carico.']),
      q('Where is the load in a second-class lever?', 'Dove si trova il carico in una leva di secondo genere?', [['Between the fulcrum and the effort', 'Tra il fulcro e la forza applicata'], ['Beyond the effort only', 'Solo oltre la forza applicata'], ['At the centre of the Earth', 'Al centro della Terra'], ['There is no load', 'Non c’è carico']], ['A wheelbarrow has the load between the wheel (fulcrum) and the effort at the handles.', 'Nella carriola il carico si trova tra la ruota (fulcro) e la forza applicata ai manici.']),
      q('What can happen when effort is applied farther from the fulcrum?', 'Che cosa può succedere applicando la forza più lontano dal fulcro?', [['It can become easier to turn the lever', 'Può diventare più facile far ruotare la leva'], ['The lever loses its mass', 'La leva perde la sua massa'], ['Gravity disappears', 'La gravità scompare'], ['The load becomes invisible', 'Il carico diventa invisibile']], ['A longer effort arm can reduce the force needed to balance a given load.', 'Un braccio della forza più lungo può ridurre la forza necessaria per equilibrare un dato carico.'])
    ]
  }),
  makeMission({
    id: 'g5e-geopark-review', sec: '12', pages: '44–49', hue: 160,
    title: ['Science in Our Landscape: Review', 'La scienza nel paesaggio: ripasso'],
    topic: ['UNESCO Geopark, energy and forces concept map, final review', 'Geoparco UNESCO, mappa di energia e forze, verifica finale'],
    demon: ['The Final Force Field', 'Il Campo di Forza Finale'],
    tech: ['Force Form · Final Technique: Science Mastery', 'Stile della Forza · Tecnica Finale: Maestria Scientifica'],
    lessons: [
      [
        '<p>🌍 <b>UNESCO Global Geoparks</b> are areas with important geological heritage. The Colline Metallifere area in Tuscany is known for its mining history and rich geological landscape. Rocks and minerals help scientists understand how Earth has changed over time.</p><p>Protecting geological heritage means learning about the landscape and treating natural sites responsibly.</p>',
        '<p>🌍 I <b>Geoparchi Mondiali UNESCO</b> sono aree con un patrimonio geologico importante. L’area delle Colline Metallifere in Toscana è conosciuta per la storia mineraria e il paesaggio geologico. Rocce e minerali aiutano gli scienziati a capire come è cambiata la Terra nel tempo.</p><p>Proteggere il patrimonio geologico significa conoscere il territorio e rispettare i luoghi naturali.</p>'
      ],
      [
        '<p>🗺️ <b>Concept map – Energy:</b> energy makes changes possible → forms include thermal, light, sound, electrical, chemical, kinetic and potential → sources can be renewable or non-renewable → energy can be transferred and transformed.</p><p><b>Concept map – Light and sound:</b> light travels through space and can reflect or refract; sound is produced by vibrations and needs a material medium.</p>',
        '<p>🗺️ <b>Mappa – Energia:</b> l’energia rende possibili i cambiamenti → le forme comprendono termica, luminosa, sonora, elettrica, chimica, cinetica e potenziale → le fonti possono essere rinnovabili o non rinnovabili → l’energia si può trasferire e trasformare.</p><p><b>Mappa – Luce e suono:</b> la luce viaggia nello spazio e può riflettersi o rifrangersi; il suono nasce dalle vibrazioni e ha bisogno di un mezzo materiale.</p>'
      ],
      [
        '<p>🧭 <b>Concept map – Forces:</b> forces are pushes or pulls → they can change motion or shape → contact forces include friction → non-contact forces include gravity and magnetism → simple machines such as levers help us apply forces.</p><p><b>Self-check:</b> explain one energy transformation, draw a simple safe circuit, describe how a shadow forms, and identify the fulcrum, effort and load on a lever. Then take the final challenge!</p>',
        '<p>🧭 <b>Mappa – Forze:</b> le forze sono spinte o trazioni → possono cambiare il movimento o la forma → tra le forze di contatto c’è l’attrito → tra quelle a distanza ci sono gravità e magnetismo → macchine semplici come le leve ci aiutano ad applicare le forze.</p><p><b>Autovalutazione:</b> spiega una trasformazione di energia, disegna un circuito semplice e sicuro, descrivi come nasce un’ombra e indica fulcro, forza e carico di una leva. Poi affronta la verifica finale!</p>'
      ]
    ],
    quiz: [
      q('Which is a renewable energy source?', 'Quale è una fonte di energia rinnovabile?', [['Sunlight', 'La luce solare'], ['Coal', 'Il carbone'], ['Oil', 'Il petrolio'], ['Natural gas', 'Il gas naturale']], ['Sunlight is naturally replenished and can be used by solar panels.', 'La luce solare si rinnova naturalmente e può essere utilizzata dai pannelli solari.']),
      q('What is needed for a simple electric circuit to work?', 'Che cosa serve perché funzioni un circuito elettrico semplice?', [['A closed conducting path and an energy source', 'Un percorso conduttore chiuso e una fonte di energia'], ['A broken wire', 'Un filo interrotto'], ['Only a plastic ruler', 'Solo un righello di plastica'], ['A shadow', 'Un’ombra']], ['A closed path and a source such as a battery allow current to flow.', 'Un percorso chiuso e una fonte come una batteria permettono il passaggio della corrente.']),
      q('What produces sound?', 'Che cosa produce il suono?', [['Vibrations', 'Le vibrazioni'], ['Reflections of light', 'Le riflessioni della luce'], ['Magnetic poles', 'I poli magnetici'], ['A lever', 'Una leva']], ['Sound is produced by vibrating objects.', 'Il suono è prodotto da oggetti che vibrano.']),
      q('Which force acts between masses without direct contact?', 'Quale forza agisce tra le masse senza contatto diretto?', [['Gravity', 'La gravità'], ['Friction', 'L’attrito'], ['A hand push', 'Una spinta della mano'], ['A kick', 'Un calcio']], ['Gravity is an attractive force that acts at a distance.', 'La gravità è una forza attrattiva che agisce a distanza.']),
      q('What happens between opposite magnetic poles?', 'Che cosa succede tra poli magnetici opposti?', [['They attract', 'Si attraggono'], ['They repel', 'Si respingono'], ['They become invisible', 'Diventano invisibili'], ['They stop being magnets', 'Smettono di essere magneti']], ['A north pole attracts a south pole.', 'Un polo nord attira un polo sud.']),
      q('What is the fulcrum of a lever?', 'Che cos’è il fulcro di una leva?', [['The fixed turning point', 'Il punto fisso di rotazione'], ['The object being lifted', 'L’oggetto sollevato'], ['The battery', 'La batteria'], ['The light source', 'La sorgente luminosa']], ['The lever rotates around the fulcrum.', 'La leva ruota intorno al fulcro.']),
      q('What happens when light is refracted?', 'Che cosa succede quando la luce viene rifratta?', [['It changes direction as it passes between materials', 'Cambia direzione passando tra materiali diversi'], ['It becomes a sound wave', 'Diventa un’onda sonora'], ['It stops existing', 'Smette di esistere'], ['It creates a magnetic pole', 'Crea un polo magnetico']], ['Refraction is the change in direction of light when it passes between materials.', 'La rifrazione è il cambiamento di direzione della luce quando passa tra materiali diversi.']),
      q('Why should we protect hearing?', 'Perché dobbiamo proteggere l’udito?', [['Very loud sounds can damage hearing', 'I suoni molto forti possono danneggiare l’udito'], ['Sound is always harmless', 'Il suono è sempre innocuo'], ['Ears do not detect vibrations', 'Le orecchie non rilevano vibrazioni'], ['Headphones create gravity', 'Le cuffie creano gravità']], ['Avoiding excessive sound levels helps protect our hearing.', 'Evitare livelli sonori eccessivi aiuta a proteggere l’udito.'])
    ]
  })
];
