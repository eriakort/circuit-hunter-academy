import { Mission } from '../types';

export const ITALIAN_MISSIONS: Mission[] = [
  // =========================================================================
  // CEFR A1 - PRINCIPPIANTE (BEGINNER)
  // Arc 0: Saluti, Fonetica e Vita Quotidiana
  // =========================================================================
  {
    id: 'it_a1m1',
    arc: 0,
    sec: 'A1.1',
    pages: '1–12',
    hue: 140,
    horns: 1,
    eyes: 2,
    title: [
      'Ciao! Come ti chiami?',
      'Ciao! Come ti chiami?'
    ],
    topic: {en: 'Greetings, formal vs informal address, introducing yourself and basic dialogue', it: 'Saluti, registro formale e informale, presentarsi e dialogo di base', pt: 'Cumprimentos, tratamento formal e informal, apresentar-se e diálogo básico', es: 'Saludos, trato formal e informal, presentarse y diálogo básico', fr: 'Salutations, registre formel et informel, se présenter et dialogue de base', de: 'Begrüßungen, förmliche und informelle Anrede, sich vorstellen und einfache Dialoge'},
    demon: {en: 'Mute Glitch', it: 'Glitch del Silenzio', pt: 'Glitch do Silêncio', es: 'Glitch del Silencio', fr: 'Glitch du Silence', de: 'Glitch der Stille'},
    lore: {en: 'The Mute Glitch steals hunters’ voices. Break the silence with your first spoken Italian greeting!', it: 'Il Glitch del Silenzio ruba la voce dei cacciatori. Rompi il silenzio con il tuo primo saluto in italiano!', pt: 'O Glitch do Silêncio rouba a voz dos caçadores. Quebre o silêncio com o seu primeiro cumprimento falado em italiano!', es: 'El Glitch del Silencio roba la voz a los cazadores. ¡Rompe el silencio con tu primer saludo hablado en italiano!', fr: 'Le Glitch du Silence vole la voix des chasseurs. Brise le silence avec ta première salutation en italien !', de: 'Der Glitch der Stille stiehlt den Jägern die Stimme. Brich das Schweigen mit deiner ersten gesprochenen Begrüßung auf Italienisch!'},
    clearedMsg: {en: 'Your greeting echoed through the academy! You have mastered basic Italian introductions.', it: 'Il tuo saluto ha risuonato nell’accademia! Hai padroneggiato le presentazioni di base in italiano.', pt: 'O seu cumprimento ecoou pela academia! Você dominou as apresentações básicas em italiano.', es: '¡Tu saludo resonó en toda la academia! Has dominado las presentaciones básicas en italiano.', fr: 'Ta salutation a résonné dans toute l’académie ! Tu maîtrises les présentations de base en italien.', de: 'Deine Begrüßung hallte durch die Akademie! Du beherrschst jetzt die grundlegenden Vorstellungen auf Italienisch.'},
    tech: {en: 'Italian Greeting Technique', it: 'Stile del Saluto Italiano', pt: 'Técnica do Cumprimento Italiano', es: 'Técnica del Saludo Italiano', fr: 'Technique de la Salutation Italienne', de: 'Technik der italienischen Begrüßung'},
    scenes: [
      {
        who: 's',
        text: {en: '<p>Benvenuto all’Accademia! Italian is a musical, phonetic language where every vowel counts. Today you begin your journey through <b>CEFR A1</b>.</p><p>In Italy, greetings depend on who you are speaking to: <b>Ciao</b> is informal (friends, peers, family). <b>Buongiorno</b> and <b>Buonasera</b> are polite and formal.</p>', it: '<p>Benvenuto all’Accademia! L’italiano è una lingua musicale e fonetica, dove ogni vocale conta. Oggi inizi il tuo viaggio nel <b>QCER A1</b>.</p><p>In Italia, i saluti dipendono dal tuo interlocutore: <b>Ciao</b> è informale (amici, coetanei, familiari). <b>Buongiorno</b> e <b>Buonasera</b> sono formali e di cortesia.</p>', pt: '<p>Benvenuto all’Accademia! O italiano é uma língua musical e fonética, em que cada vogal conta. Hoje você começa a sua jornada pelo <b>QECR A1</b>.</p><p>Na Itália, os cumprimentos dependem de com quem você fala: <b>Ciao</b> é informal (amigos, colegas, família). <b>Buongiorno</b> e <b>Buonasera</b> são educados e formais.</p>', es: '<p>Benvenuto all’Accademia! El italiano es una lengua musical y fonética en la que cada vocal cuenta. Hoy comienzas tu viaje por el <b>MCER A1</b>.</p><p>En Italia, los saludos dependen de con quién hablas: <b>Ciao</b> es informal (amigos, compañeros, familia). <b>Buongiorno</b> y <b>Buonasera</b> son corteses y formales.</p>', fr: '<p>Benvenuto all’Accademia ! L’italien est une langue musicale et phonétique où chaque voyelle compte. Aujourd’hui commence ton voyage à travers le <b>CECRL A1</b>.</p><p>En Italie, les salutations dépendent de la personne à qui tu parles : <b>Ciao</b> est informel (amis, camarades, famille). <b>Buongiorno</b> et <b>Buonasera</b> sont polis et formels.</p>', de: '<p>Benvenuto all’Accademia! Italienisch ist eine melodische, phonetische Sprache, in der jeder Vokal zählt. Heute beginnt deine Reise durch <b>GER A1</b>.</p><p>In Italien hängt die Begrüßung davon ab, mit wem du sprichst: <b>Ciao</b> ist informell (Freunde, Gleichaltrige, Familie). <b>Buongiorno</b> und <b>Buonasera</b> sind höflich und förmlich.</p>'}
      },
      {
        who: 's',
        text: {en: '<p>To ask someone’s name:</p><ul><li><b>Informal:</b> <i>Come ti chiami?</i> → <i>Mi chiamo Marco.</i></li><li><b>Formal:</b> <i>Come si chiama?</i> → <i>Mi chiamo Dottor Rossi. Piacere di conoscerLa!</i></li></ul><p>Listen closely and speak with confidence!</p>', it: '<p>Per chiedere il nome a qualcuno:</p><ul><li><b>Informale:</b> <i>Come ti chiami?</i> → <i>Mi chiamo Marco.</i></li><li><b>Formale:</b> <i>Come si chiama?</i> → <i>Mi chiamo Dottor Rossi. Piacere di conoscerLa!</i></li></ul><p>Ascolta con attenzione e parla con sicurezza!</p>', pt: '<p>Para perguntar o nome de alguém:</p><ul><li><b>Informal:</b> <i>Come ti chiami?</i> → <i>Mi chiamo Marco.</i></li><li><b>Formal:</b> <i>Come si chiama?</i> → <i>Mi chiamo Dottor Rossi. Piacere di conoscerLa!</i></li></ul><p>Ouça com atenção e fale com confiança!</p>', es: '<p>Para preguntar el nombre de alguien:</p><ul><li><b>Informal:</b> <i>Come ti chiami?</i> → <i>Mi chiamo Marco.</i></li><li><b>Formal:</b> <i>Come si chiama?</i> → <i>Mi chiamo Dottor Rossi. Piacere di conoscerLa!</i></li></ul><p>¡Escucha con atención y habla con confianza!</p>', fr: '<p>Pour demander le nom de quelqu’un :</p><ul><li><b>Informel :</b> <i>Come ti chiami?</i> → <i>Mi chiamo Marco.</i></li><li><b>Formel :</b> <i>Come si chiama?</i> → <i>Mi chiamo Dottor Rossi. Piacere di conoscerLa!</i></li></ul><p>Écoute bien et parle avec assurance !</p>', de: '<p>So fragst du nach dem Namen:</p><ul><li><b>Informell:</b> <i>Come ti chiami?</i> → <i>Mi chiamo Marco.</i></li><li><b>Förmlich:</b> <i>Come si chiama?</i> → <i>Mi chiamo Dottor Rossi. Piacere di conoscerLa!</i></li></ul><p>Hör genau hin und sprich mit Selbstvertrauen!</p>'}
      },
      {
        who: 'd',
        text: {en: '<p>Silence! Foreign accents stumble on the rolling R and double consonants! You will never order coffee in Rome!</p>', it: '<p>Silenzio! Gli accenti stranieri inciampano sulla R arrotolata e sulle doppie! Non ordinerai mai un caffè a Roma!</p>', pt: '<p>Silêncio! Os sotaques estrangeiros tropeçam no R vibrante e nas consoantes duplas! Você nunca vai pedir um café em Roma!</p>', es: '<p>¡Silencio! ¡Los acentos extranjeros tropiezan con la R vibrante y las consonantes dobles! ¡Nunca pedirás un café en Roma!</p>', fr: '<p>Silence ! Les accents étrangers trébuchent sur le R roulé et les consonnes doubles ! Tu ne commanderas jamais un café à Rome !</p>', de: '<p>Stille! Ausländische Akzente stolpern über das gerollte R und die Doppelkonsonanten! Du wirst nie einen Kaffee in Rom bestellen!</p>'}
      },
      {
        who: 'y',
        text: {en: '<p>Watch me! <i>Buongiorno, mi chiamo Hunter e sono pronto a imparare l’italiano!</i></p>', it: '<p>Guardami! <i>Buongiorno, mi chiamo Hunter e sono pronto a imparare l’italiano!</i></p>', pt: '<p>Olhe para mim! <i>Buongiorno, mi chiamo Hunter e sono pronto a imparare l’italiano!</i></p>', es: '<p>¡Mírame! <i>Buongiorno, mi chiamo Hunter e sono pronto a imparare l’italiano!</i></p>', fr: '<p>Regarde-moi ! <i>Buongiorno, mi chiamo Hunter e sono pronto a imparare l’italiano!</i></p>', de: '<p>Schau mir zu! <i>Buongiorno, mi chiamo Hunter e sono pronto a imparare l’italiano!</i></p>'}
      }
    ],
    quiz: [
      {
        q: {en: 'Which greeting is appropriate when entering a doctor’s clinic or formal office in the morning?', it: 'Quale saluto è appropriato entrando nello studio di un medico o in un ufficio formale di mattina?', pt: 'Qual cumprimento é adequado ao entrar em um consultório médico ou em um escritório formal pela manhã?', es: '¿Qué saludo es adecuado al entrar en la consulta de un médico o en una oficina formal por la mañana?', fr: 'Quelle salutation convient en entrant le matin dans un cabinet médical ou un bureau formel ?', de: 'Welche Begrüßung passt, wenn du morgens eine Arztpraxis oder ein förmliches Büro betrittst?'},
        a: [
          ['Buongiorno', 'Buongiorno'],
          ['Ciao caro', 'Ciao caro'],
          ['Buonanotte', 'Buonanotte'],
          ['A presto bello', 'A presto bello']
        ],
        why: {en: 'Buongiorno is the universal polite and formal greeting for morning and afternoon.', it: 'Buongiorno è il saluto formale e di cortesia universale per la mattina e il pomeriggio.', pt: 'Buongiorno é o cumprimento educado e formal universal para a manhã e a tarde.', es: 'Buongiorno es el saludo cortés y formal universal para la mañana y la tarde.', fr: 'Buongiorno est la salutation polie et formelle universelle pour le matin et l’après-midi.', de: 'Buongiorno ist die allgemeine höfliche und förmliche Begrüßung für Vormittag und Nachmittag.'}
      },
      {
        q: {en: 'How do you politely reply when someone introduces themselves with "Piacere!"?', it: 'Come rispondi educatamente quando qualcuno si presenta dicendo "Piacere!"?', pt: 'Como você responde educadamente quando alguém se apresenta dizendo "Piacere!"?', es: '¿Cómo respondes con educación cuando alguien se presenta diciendo "Piacere!"?', fr: 'Comment réponds-tu poliment quand quelqu’un se présente en disant "Piacere!" ?', de: 'Wie antwortest du höflich, wenn sich jemand mit "Piacere!" vorstellt?'},
        a: [
          ['Piacere mio!', 'Piacere mio!'],
          ['Grazie mille!', 'Grazie mille!'],
          ['Prego signore!', 'Prego signore!'],
          ['Non c’è di che!', 'Non c’è di che!']
        ],
        why: {en: '"Piacere mio!" (The pleasure is mine!) is the natural standard Italian response.', it: '"Piacere mio!" è la risposta naturale e standard per ricambiare una presentazione.', pt: '"Piacere mio!" (O prazer é meu!) é a resposta italiana natural e padrão.', es: '"Piacere mio!" (¡El placer es mío!) es la respuesta italiana natural y habitual.', fr: '"Piacere mio!" (Tout le plaisir est pour moi !) est la réponse italienne naturelle et habituelle.', de: '"Piacere mio!" (Die Freude ist ganz meinerseits!) ist die natürliche, übliche italienische Antwort.'}
      },
      {
        q: {en: 'Which sentence correctly asks a peer or friend for their name?', it: 'Quale frase chiede correttamente il nome a un amico o coetaneo?', pt: 'Qual frase pergunta corretamente o nome a um colega ou amigo?', es: '¿Qué frase pregunta correctamente el nombre a un compañero o amigo?', fr: 'Quelle phrase demande correctement son nom à un camarade ou un ami ?', de: 'Welcher Satz fragt einen Gleichaltrigen oder Freund richtig nach seinem Namen?'},
        a: [
          ['Come ti chiami?', 'Come ti chiami?'],
          ['Come si chiama?', 'Come si chiama?'],
          ['Chi sei Lei?', 'Chi sei Lei?'],
          ['Quale è il nome di te?', 'Quale è il nome di te?']
        ],
        why: {en: '"Come ti chiami?" uses the informal second-person pronoun "ti" with the reflexive verb chiamarsi.', it: '"Come ti chiami?" usa il pronome informale di seconda persona "ti" col verbo chiamarsi.', pt: '"Come ti chiami?" usa o pronome informal de segunda pessoa "ti" com o verbo reflexivo chiamarsi.', es: '"Come ti chiami?" usa el pronombre informal de segunda persona "ti" con el verbo reflexivo chiamarsi.', fr: '"Come ti chiami?" utilise le pronom informel de deuxième personne "ti" avec le verbe pronominal chiamarsi.', de: '"Come ti chiami?" verwendet das informelle Pronomen der 2. Person "ti" mit dem reflexiven Verb chiamarsi.'}
      }
    ],
    learning: {
      version: 1,
      objectives: [
        {
          id: 'obj-it-a1m1-1',
          description: {en: 'Distinguish between formal (Lei) and informal (tu) greetings in Italian social contexts.', it: 'Distinguere tra saluti formali (Lei) e informali (tu) nei contesti sociali italiani.', pt: 'Distinguir entre cumprimentos formais (Lei) e informais (tu) nos contextos sociais italianos.', es: 'Distinguir entre saludos formales (Lei) e informales (tu) en los contextos sociales italianos.', fr: 'Distinguer les salutations formelles (Lei) et informelles (tu) dans les contextes sociaux italiens.', de: 'Förmliche (Lei) und informelle (tu) Begrüßungen in italienischen Alltagssituationen unterscheiden.'}
        },
        {
          id: 'obj-it-a1m1-2',
          description: {en: 'Pronounce and introduce yourself using "Mi chiamo..." and "Piacere di conoscerti".', it: 'Pronunciare e presentarsi usando "Mi chiamo..." e "Piacere di conoscerti".', pt: 'Pronunciar e apresentar-se usando "Mi chiamo..." e "Piacere di conoscerti".', es: 'Pronunciar y presentarse usando "Mi chiamo..." y "Piacere di conoscerti".', fr: 'Prononcer et se présenter avec "Mi chiamo..." et "Piacere di conoscerti".', de: 'Sich mit "Mi chiamo..." und "Piacere di conoscerti" vorstellen und richtig aussprechen.'}
        }
      ],
      prerequisites: [
        {en: 'Basic curiosity about Italian pronunciation and phonetic reading', it: 'Curiosità verso la pronuncia e la lettura fonetica italiana', pt: 'Curiosidade básica pela pronúncia italiana e pela leitura fonética', es: 'Curiosidad básica por la pronunciación italiana y la lectura fonética', fr: 'Une curiosité de base pour la prononciation italienne et la lecture phonétique', de: 'Grundlegendes Interesse an der italienischen Aussprache und am phonetischen Lesen'}
      ],
      concepts: [
        {
          id: 'concept-it-greetings',
          title: {en: 'Italian Formal vs Informal Register', it: 'Registro Formale vs Informale', pt: 'Registro formal vs informal em italiano', es: 'Registro formal vs informal en italiano', fr: 'Registre formel vs informel en italien', de: 'Förmliche vs. informelle Anrede im Italienischen'},
          explanation: {en: 'In Italian, choosing "tu" (informal) vs "Lei" (formal) is central to polite communication. With elders, professionals, or shopkeepers you do not know, use formal greetings (Buongiorno, Arrivederci, Come si chiama?). With classmates, friends, and peers, use "Ciao" and "Come ti chiami?".', it: 'In italiano, la scelta tra "tu" (informale) e "Lei" (formale) è fondamentale per la cortesia. Con persone anziane, professionisti o negozianti sconosciuti, usa forme di cortesia (Buongiorno, Arrivederci, Come si chiama?). Con compagni, amici e coetanei, usa "Ciao" e "Come ti chiami?".', pt: 'Em italiano, escolher entre "tu" (informal) e "Lei" (formal) é central para uma comunicação educada. Com pessoas mais velhas, profissionais ou comerciantes que você não conhece, use cumprimentos formais (Buongiorno, Arrivederci, Come si chiama?). Com colegas de classe, amigos e pessoas da sua idade, use "Ciao" e "Come ti chiami?".', es: 'En italiano, elegir entre "tu" (informal) y "Lei" (formal) es fundamental para una comunicación cortés. Con personas mayores, profesionales o dependientes que no conoces, usa saludos formales (Buongiorno, Arrivederci, Come si chiama?). Con compañeros de clase, amigos y personas de tu edad, usa "Ciao" y "Come ti chiami?".', fr: 'En italien, choisir entre "tu" (informel) et "Lei" (formel) est essentiel pour communiquer poliment. Avec les personnes âgées, les professionnels ou les commerçants que tu ne connais pas, utilise les salutations formelles (Buongiorno, Arrivederci, Come si chiama?). Avec tes camarades, tes amis et les gens de ton âge, utilise "Ciao" et "Come ti chiami?".', de: 'Im Italienischen ist die Wahl zwischen "tu" (informell) und "Lei" (förmlich) zentral für höfliche Kommunikation. Bei älteren Menschen, Fachleuten oder Verkäufern, die du nicht kennst, verwendest du förmliche Begrüßungen (Buongiorno, Arrivederci, Come si chiama?). Bei Mitschülern, Freunden und Gleichaltrigen verwendest du "Ciao" und "Come ti chiami?".'},
          workedExample: {
            scenario: {en: 'Meeting your Italian university professor for the first time.', it: 'Incontrare per la prima volta il tuo docente universitario italiano.', pt: 'Conhecer pela primeira vez o seu professor universitário italiano.', es: 'Conocer por primera vez a tu profesor universitario italiano.', fr: 'Rencontrer ton professeur d’université italien pour la première fois.', de: 'Deinen italienischen Universitätsprofessor zum ersten Mal treffen.'},
            steps: [
              {en: 'Step 1: Choose formal time-appropriate greeting: "Buongiorno, professore."', it: 'Passo 1: Scegli il saluto formale appropriato all’orario: "Buongiorno, professore."', pt: 'Passo 1: Escolha um cumprimento formal adequado ao horário: "Buongiorno, professore."', es: 'Paso 1: Elige un saludo formal adecuado a la hora: "Buongiorno, professore."', fr: 'Étape 1 : choisis une salutation formelle adaptée au moment de la journée : "Buongiorno, professore."', de: 'Schritt 1: Wähle eine förmliche, zur Tageszeit passende Begrüßung: "Buongiorno, professore."'},
              {en: 'Step 2: Introduce yourself politely: "Mi chiamo Luca Bianchi."', it: 'Passo 2: Presentati con cortesia: "Mi chiamo Luca Bianchi."', pt: 'Passo 2: Apresente-se com educação: "Mi chiamo Luca Bianchi."', es: 'Paso 2: Preséntate con educación: "Mi chiamo Luca Bianchi."', fr: 'Étape 2 : présente-toi poliment : "Mi chiamo Luca Bianchi."', de: 'Schritt 2: Stell dich höflich vor: "Mi chiamo Luca Bianchi."'},
              {en: 'Step 3: Express polite acknowledgement: "Piacere di conoscerLa."', it: 'Passo 3: Esprimi cortesia: "Piacere di conoscerLa."', pt: 'Passo 3: Mostre cortesia: "Piacere di conoscerLa."', es: 'Paso 3: Muestra cortesía: "Piacere di conoscerLa."', fr: 'Étape 3 : exprime ta politesse : "Piacere di conoscerLa."', de: 'Schritt 3: Zeige Höflichkeit: "Piacere di conoscerLa."'}
            ],
            answer: [
              '"Buongiorno professore, mi chiamo Luca Bianchi. Piacere di conoscerLa!"',
              '"Buongiorno professore, mi chiamo Luca Bianchi. Piacere di conoscerLa!"'
            ]
          },
          misconceptions: [
            {
              belief: {en: '"Ciao" can be used casually in every situation in Italy, including job interviews.', it: '"Ciao" può essere usato in ogni situazione in Italia, inclusi colloqui di lavoro.', pt: '"Ciao" pode ser usado casualmente em qualquer situação na Itália, inclusive em entrevistas de emprego.', es: '"Ciao" se puede usar de forma casual en cualquier situación en Italia, incluso en entrevistas de trabajo.', fr: '"Ciao" peut s’utiliser en toute situation en Italie, y compris lors d’un entretien d’embauche.', de: '"Ciao" kann in Italien in jeder Situation locker verwendet werden, auch im Vorstellungsgespräch.'},
              correction: {en: '"Ciao" is strictly informal. Using it with a stranger, an elder, or an interviewer sounds impolite.', it: '"Ciao" è strettamente informale. Usarlo con un estraneo o a un colloquio risulta scortese. Usa "Buongiorno" o "Salve".', pt: '"Ciao" é estritamente informal. Usá-lo com um desconhecido, uma pessoa mais velha ou um entrevistador soa mal-educado.', es: '"Ciao" es estrictamente informal. Usarlo con un desconocido, una persona mayor o un entrevistador suena descortés.', fr: '"Ciao" est strictement informel. L’utiliser avec un inconnu, une personne âgée ou un recruteur paraît impoli.', de: '"Ciao" ist rein informell. Gegenüber Fremden, älteren Menschen oder im Vorstellungsgespräch wirkt es unhöflich.'}
            }
          ]
        }
      ],
      summary: [
        {en: 'Use "Ciao" for friends and family; use "Buongiorno" or "Buonasera" for formal settings.', it: 'Usa "Ciao" per amici e famiglia; usa "Buongiorno" o "Buonasera" per contesti formali.', pt: 'Use "Ciao" com amigos e família; use "Buongiorno" ou "Buonasera" em contextos formais.', es: 'Usa "Ciao" con amigos y familia; usa "Buongiorno" o "Buonasera" en contextos formales.', fr: 'Utilise "Ciao" avec les amis et la famille ; utilise "Buongiorno" ou "Buonasera" dans les contextes formels.', de: 'Verwende "Ciao" bei Freunden und Familie; verwende "Buongiorno" oder "Buonasera" in förmlichen Situationen.'},
        {en: 'Introduce yourself with "Mi chiamo [Nome]" and reply with "Piacere!" or "Piacere mio!".', it: 'Presentati con "Mi chiamo [Nome]" e rispondi con "Piacere!" o "Piacere mio!".', pt: 'Apresente-se com "Mi chiamo [Nome]" e responda com "Piacere!" ou "Piacere mio!".', es: 'Preséntate con "Mi chiamo [Nome]" y responde con "Piacere!" o "Piacere mio!".', fr: 'Présente-toi avec "Mi chiamo [Nome]" et réponds par "Piacere!" ou "Piacere mio!".', de: 'Stell dich mit "Mi chiamo [Nome]" vor und antworte mit "Piacere!" oder "Piacere mio!".'}
      ],
      masteryAssessment: {
        title: {en: 'A1 Greetings Mastery Assessment', it: 'Valutazione di Padronanza: I Saluti', pt: 'Avaliação de domínio A1: cumprimentos', es: 'Evaluación de dominio A1: saludos', fr: 'Évaluation de maîtrise A1 : les salutations', de: 'Abschlusstest A1: Begrüßungen'},
        instructions: {en: 'Demonstrate flawless selection of Italian greetings and introductions across social scenarios.', it: 'Dimostra la corretta selezione di saluti e presentazioni in vari contesti sociali.', pt: 'Demonstre a escolha correta de cumprimentos e apresentações italianas em diferentes situações sociais.', es: 'Demuestra la elección correcta de saludos y presentaciones italianas en distintas situaciones sociales.', fr: 'Montre que tu choisis correctement les salutations et présentations italiennes dans différentes situations sociales.', de: 'Zeige, dass du italienische Begrüßungen und Vorstellungen in verschiedenen Situationen richtig auswählst.'},
        passingScore: 75,
        questions: [
          {
            q: {en: 'Which greeting is used specifically when going to sleep at night?', it: 'Quale saluto si usa specificamente quando si va a dormire la notte?', pt: 'Qual cumprimento é usado especificamente na hora de dormir à noite?', es: '¿Qué saludo se usa específicamente al irse a dormir por la noche?', fr: 'Quelle salutation utilise-t-on précisément au moment d’aller dormir le soir ?', de: 'Welche Begrüßung verwendet man speziell, wenn man abends schlafen geht?'},
            a: [
              ['Buonanotte', 'Buonanotte'],
              ['Buonasera', 'Buonasera'],
              ['Arrivederci', 'Arrivederci'],
              ['A domani mattina', 'A domani mattina']
            ],
            why: {en: 'Buonanotte is used only upon going to bed or ending the night.', it: 'Buonanotte si usa esclusivamente prima di andare a dormire.', pt: 'Buonanotte é usado apenas na hora de ir para a cama ou ao encerrar a noite.', es: 'Buonanotte se usa solo al irse a la cama o al terminar la noche.', fr: 'Buonanotte s’emploie seulement au moment d’aller se coucher ou en fin de soirée.', de: 'Buonanotte verwendet man nur beim Schlafengehen oder am Ende des Abends.'}
          },
          {
            q: {en: 'How do you say "See you tomorrow" in natural Italian?', it: 'Come si dice "See you tomorrow" in italiano naturale?', pt: 'Como se diz "Até amanhã" em italiano natural?', es: '¿Cómo se dice "Hasta mañana" en italiano natural?', fr: 'Comment dit-on "À demain" en italien naturel ?', de: 'Wie sagt man "Bis morgen" in natürlichem Italienisch?'},
            a: [
              ['A domani', 'A domani'],
              ['A presto sera', 'A presto sera'],
              ['Ci vediamo mai', 'Ci vediamo mai'],
              ['Addio per sempre', 'Addio per sempre']
            ],
            why: {en: '"A domani" translates directly to "until tomorrow / see you tomorrow".', it: '"A domani" significa arrivederci a domani.', pt: '"A domani" corresponde diretamente a "até amanhã".', es: '"A domani" equivale directamente a "hasta mañana".', fr: '"A domani" correspond directement à "à demain".', de: '"A domani" bedeutet direkt "bis morgen".'}
          }
        ]
      },
      techniqueUnlock: {
        id: 'tech-it-saluto',
        name: {en: 'Art of Saluto', it: 'Arte del Saluto', pt: 'A Arte do Saluto', es: 'El Arte del Saluto', fr: 'L’Art du Saluto', de: 'Die Kunst des Saluto'},
        description: {en: 'Instinctively wield formal and informal greetings with perfect phonetic cadence.', it: 'Usa con disinvoltura i saluti formali e informali con perfetta cadenza fonetica.', pt: 'Use por instinto cumprimentos formais e informais com uma cadência fonética perfeita.', es: 'Usa por instinto saludos formales e informales con una cadencia fonética perfecta.', fr: 'Manie d’instinct les salutations formelles et informelles avec une cadence phonétique parfaite.', de: 'Setze förmliche und informelle Begrüßungen instinktiv und mit perfektem Sprachrhythmus ein.'},
        xpReward: 30
      }
    }
  },

  {
    id: 'it_a1m2',
    arc: 0,
    sec: 'A1.2',
    pages: '13–24',
    hue: 155,
    horns: 2,
    eyes: 3,
    title: {en: 'The Secret Sounds of Italian: C, G, GLI & GN', it: 'I Suoni Segreti dell’Italiano: C, G, GLI e GN', pt: 'Os sons secretos do italiano: C, G, GLI e GN', es: 'Los sonidos secretos del italiano: C, G, GLI y GN', fr: 'Les sons secrets de l’italien : C, G, GLI et GN', de: 'Die geheimen Laute des Italienischen: C, G, GLI und GN'},
    topic: {en: 'Italian phonetics: hard vs soft C and G, the H (acca) rule, GLI, GN, and double consonants', it: 'Fonetica italiana: C e G dolci e dure, la regola dell’acca, GLI, GN e le doppie consonanti', pt: 'Fonética italiana: C e G duros e suaves, a regra do H (acca), GLI, GN e consoantes duplas', es: 'Fonética italiana: C y G fuertes y suaves, la regla de la H (acca), GLI, GN y consonantes dobles', fr: 'Phonétique italienne : C et G durs et doux, la règle du H (acca), GLI, GN et consonnes doubles', de: 'Italienische Phonetik: hartes und weiches C und G, die H-Regel (acca), GLI, GN und Doppelkonsonanten'},
    demon: {en: 'Consonant Phantom', it: 'Fantasma delle Consonanti', pt: 'Fantasma das Consoantes', es: 'Fantasma de las Consonantes', fr: 'Fantôme des Consonnes', de: 'Konsonanten-Phantom'},
    lore: {en: 'The Consonant Phantom swaps Chianti with Ciao and softens the crisp double consonants. Train your tongue to speak pure Italian!', it: 'Il Fantasma delle Consonanti scambia il Chianti col Ciao e ammorbidisce le doppie consonanti. Allena la lingua a pronunciare il vero italiano!', pt: 'O Fantasma das Consoantes troca Chianti por Ciao e amolece as consoantes duplas bem marcadas. Treine a sua língua para falar um italiano puro!', es: 'El Fantasma de las Consonantes cambia Chianti por Ciao y suaviza las consonantes dobles bien marcadas. ¡Entrena tu lengua para hablar un italiano puro!', fr: 'Le Fantôme des Consonnes confond Chianti et Ciao et adoucit les consonnes doubles bien nettes. Entraîne ta langue à parler un italien pur !', de: 'Das Konsonanten-Phantom vertauscht Chianti mit Ciao und verwischt die klaren Doppelkonsonanten. Trainiere deine Zunge für reines Italienisch!'},
    clearedMsg: {en: 'Your pronunciation is crisp and accurate! You can read and pronounce any written Italian word.', it: 'La tua pronuncia è impeccabile! Ora puoi leggere e pronunciare qualsiasi parola scritta in italiano.', pt: 'A sua pronúncia está nítida e precisa! Você consegue ler e pronunciar qualquer palavra italiana escrita.', es: '¡Tu pronunciación es nítida y precisa! Puedes leer y pronunciar cualquier palabra italiana escrita.', fr: 'Ta prononciation est nette et précise ! Tu sais lire et prononcer n’importe quel mot italien écrit.', de: 'Deine Aussprache ist klar und genau! Du kannst jedes geschriebene italienische Wort lesen und aussprechen.'},
    tech: {en: 'Phonetic Shield of Florence', it: 'Scudo Fonetico di Firenze', pt: 'Escudo Fonético de Florença', es: 'Escudo Fonético de Florencia', fr: 'Bouclier Phonétique de Florence', de: 'Phonetischer Schild von Florenz'},
    scenes: [
      {
        who: 's',
        text: {en: '<p>Italian spelling is almost 100% phonetic, but there is one golden rule you MUST master: the letters <b>C</b> and <b>G</b>!</p><ul><li>Before <b>E</b> and <b>I</b>: they are <b>SOFT</b> (<i>Ciao</i> = "chow", <i>Gelato</i> = "jeh-la-to").</li><li>Before <b>A, O, U</b>: they are <b>HARD</b> (<i>Casa</i> = "ka-sa", <i>Gatto</i> = "gat-to").</li><li>Insert an <b>H (acca)</b> before E or I to make them <b>HARD</b>: <i>Chianti</i> = "kee-an-tee", <i>Spaghetti</i> = "spa-get-tee"!</li></ul>', it: '<p>L’ortografia italiana è quasi al 100% fonetica, ma c’è una regola aurea da padroneggiare: le lettere <b>C</b> e <b>G</b>!</p><ul><li>Davanti a <b>E</b> e <b>I</b> sono <b>DOLCI</b> (<i>Ciao</i>, <i>Gelato</i>).</li><li>Davanti a <b>A, O, U</b> sono <b>DURE</b> (<i>Casa</i>, <i>Gatto</i>).</li><li>Inserisci una <b>H (acca)</b> prima di E o I per renderle <b>DURE</b>: <i>Chianti</i> ("k"), <i>Spaghetti</i> ("g dura")!</li></ul>', pt: '<p>A ortografia italiana é quase 100% fonética, mas há uma regra de ouro que você PRECISA dominar: as letras <b>C</b> e <b>G</b>!</p><ul><li>Antes de <b>E</b> e <b>I</b>: são <b>SUAVES</b> (<i>Ciao</i> = "tchau", <i>Gelato</i> = "dje-LA-to").</li><li>Antes de <b>A, O, U</b>: são <b>DURAS</b> (<i>Casa</i> = "KA-za", <i>Gatto</i> = "GAT-to").</li><li>Coloque um <b>H (acca)</b> antes de E ou I para torná-las <b>DURAS</b>: <i>Chianti</i> = "ki-AN-ti", <i>Spaghetti</i> = "spa-GUET-ti"!</li></ul>', es: '<p>La ortografía italiana es casi 100 % fonética, pero hay una regla de oro que DEBES dominar: ¡las letras <b>C</b> y <b>G</b>!</p><ul><li>Delante de <b>E</b> e <b>I</b>: son <b>SUAVES</b> (<i>Ciao</i> = "chao", <i>Gelato</i> = "dye-LA-to").</li><li>Delante de <b>A, O, U</b>: son <b>FUERTES</b> (<i>Casa</i> = "KA-sa", <i>Gatto</i> = "GAT-to").</li><li>Pon una <b>H (acca)</b> delante de E o I para hacerlas <b>FUERTES</b>: <i>Chianti</i> = "ki-AN-ti", <i>Spaghetti</i> = "spa-GUET-ti".</li></ul>', fr: '<p>L’orthographe italienne est presque 100 % phonétique, mais il y a une règle d’or que tu DOIS maîtriser : les lettres <b>C</b> et <b>G</b> !</p><ul><li>Devant <b>E</b> et <b>I</b> : elles sont <b>DOUCES</b> (<i>Ciao</i> = "tchao", <i>Gelato</i> = "djé-LA-to").</li><li>Devant <b>A, O, U</b> : elles sont <b>DURES</b> (<i>Casa</i> = "KA-za", <i>Gatto</i> = "GAT-to").</li><li>Ajoute un <b>H (acca)</b> devant E ou I pour les rendre <b>DURES</b> : <i>Chianti</i> = "ki-AN-ti", <i>Spaghetti</i> = "spa-GUÈT-ti" !</li></ul>', de: '<p>Die italienische Rechtschreibung ist fast 100 % phonetisch, aber eine goldene Regel MUSST du beherrschen: die Buchstaben <b>C</b> und <b>G</b>!</p><ul><li>Vor <b>E</b> und <b>I</b> sind sie <b>WEICH</b> (<i>Ciao</i> = "tschau", <i>Gelato</i> = "dsche-LA-to").</li><li>Vor <b>A, O, U</b> sind sie <b>HART</b> (<i>Casa</i> = "KA-sa", <i>Gatto</i> = "GAT-to").</li><li>Setze ein <b>H (acca)</b> vor E oder I, um sie <b>HART</b> zu machen: <i>Chianti</i> = "ki-AN-ti", <i>Spaghetti</i> = "spa-GET-ti"!</li></ul>'}
      },
      {
        who: 's',
        text: {en: '<p>Next, special consonant clusters:</p><ul><li><b>GLI</b>: produces the liquid sound in <i>famiglia</i> (like "million").</li><li><b>GN</b>: produces the nasal sound in <i>gnocchi</i>, <i>lasagna</i> (like "canyon").</li><li><b>SC + E/I</b>: produces the "sh" sound in <i>pesce</i>, <i>scena</i>.</li><li><b>Doppie (Double consonants)</b>: hold the sound twice as long! <i>Penne</i> (pasta) vs <i>Pene</i> (penal/pain)!</li></ul>', it: '<p>Poi i digrammi e trigrammi speciali:</p><ul><li><b>GLI</b>: suono laterale palatale in <i>famiglia</i>.</li><li><b>GN</b>: suono nasale palatale in <i>gnocchi</i>, <i>lasagna</i>.</li><li><b>SC + E/I</b>: suono fricativo in <i>pesce</i>, <i>scena</i>.</li><li><b>Doppie consonanti</b>: trattieni il suono il doppio del tempo! <i>Penne</i> vs <i>Pene</i>!</li></ul>', pt: '<p>Agora, os grupos de consoantes especiais:</p><ul><li><b>GLI</b>: produz o som líquido de <i>famiglia</i> (como o "lh" de "filho").</li><li><b>GN</b>: produz o som nasal de <i>gnocchi</i>, <i>lasagna</i> (como o "nh" de "banho").</li><li><b>SC + E/I</b>: produz o som de "x/ch" (como em "chave") em <i>pesce</i>, <i>scena</i>.</li><li><b>Doppie (consoantes duplas)</b>: segure o som pelo dobro do tempo! <i>Penne</i> (massa) vs <i>Pene</i> (pena)!</li></ul>', es: '<p>Ahora, los grupos de consonantes especiales:</p><ul><li><b>GLI</b>: produce el sonido líquido de <i>famiglia</i> (parecido a la "ll" tradicional de "calle").</li><li><b>GN</b>: produce el sonido nasal de <i>gnocchi</i>, <i>lasagna</i> (como la "ñ" de "año").</li><li><b>SC + E/I</b>: produce el sonido "sh" (como en inglés "show") en <i>pesce</i>, <i>scena</i>.</li><li><b>Doppie (consonantes dobles)</b>: ¡mantén el sonido el doble de tiempo! <i>Penne</i> (pasta) vs <i>Pene</i> (pena).</li></ul>', fr: '<p>Ensuite, les groupes de consonnes spéciaux :</p><ul><li><b>GLI</b> : donne le son mouillé de <i>famiglia</i> (proche du "li" de "million").</li><li><b>GN</b> : donne le son nasal de <i>gnocchi</i>, <i>lasagna</i> (comme le "gn" de "montagne").</li><li><b>SC + E/I</b> : donne le son "ch" (comme dans "chat") dans <i>pesce</i>, <i>scena</i>.</li><li><b>Doppie (consonnes doubles)</b> : tiens le son deux fois plus longtemps ! <i>Penne</i> (pâtes) vs <i>Pene</i> (peine) !</li></ul>', de: '<p>Als Nächstes die besonderen Konsonantengruppen:</p><ul><li><b>GLI</b>: erzeugt den weichen Laut in <i>famiglia</i> (ähnlich wie "lj" in "Million").</li><li><b>GN</b>: erzeugt den nasalen Laut in <i>gnocchi</i>, <i>lasagna</i> (wie "gn" in "Champagner").</li><li><b>SC + E/I</b>: erzeugt den "sch"-Laut (wie in "Schule") in <i>pesce</i>, <i>scena</i>.</li><li><b>Doppie (Doppelkonsonanten)</b>: halte den Laut doppelt so lang! <i>Penne</i> (Nudeln) vs <i>Pene</i> (Strafe/Schmerz)!</li></ul>'}
      }
    ],
    quiz: [
      {
        q: {en: 'How is the word "CHIAVE" (key) pronounced in Italian?', it: 'Come si pronuncia la parola "CHIAVE" in italiano?', pt: 'Como se pronuncia a palavra "CHIAVE" (chave) em italiano?', es: '¿Cómo se pronuncia la palabra "CHIAVE" (llave) en italiano?', fr: 'Comment se prononce le mot "CHIAVE" (clé) en italien ?', de: 'Wie wird das Wort "CHIAVE" (Schlüssel) auf Italienisch ausgesprochen?'},
        a: [
          {en: 'With a hard "K" sound: "KYA-veh"', it: 'Con suono "K" duro: "KYA-veh"', pt: 'Com um som duro de "K": "KIA-ve"', es: 'Con un sonido fuerte de "K": "KIA-ve"', fr: 'Avec un son dur "K" : "KIA-vé"', de: 'Mit hartem "K"-Laut: "KJA-we"'},
          {en: 'With an English "CH" sound: "CHYA-veh"', it: 'Con suono "CH" inglese: "CHYA-veh"', pt: 'Com o som de "CH" do inglês (como em "cheese"): "TCHIA-ve"', es: 'Con el sonido "CH" de "chocolate": "CHIA-ve"', fr: 'Avec le son "tch" (comme dans l’anglais "cheese") : "TCHIA-vé"', de: 'Mit englischem "CH"-Laut (wie in "cheese"): "TSCHA-we"'},
          {en: 'With a soft "SH" sound: "SHA-veh"', it: 'Con suono "SH" dolce: "SHA-veh"', pt: 'Com um som suave de "SH" ("x"): "XIA-ve"', es: 'Con un sonido suave "SH": "SHIA-ve"', fr: 'Avec un son doux "ch" : "CHIA-vé"', de: 'Mit weichem "SCH"-Laut: "SCHA-we"'},
          {en: 'The H is pronounced as an English aspirated H', it: 'La H viene aspirata all’inglese', pt: 'O H é pronunciado aspirado, como o H do inglês', es: 'La H se pronuncia aspirada, como la H del inglés', fr: 'Le H se prononce aspiré, comme le H anglais', de: 'Das H wird behaucht ausgesprochen wie im Englischen'}
        ],
        why: {en: 'In Italian, the letter H (acca) after C or G hardens the sound before E or I (C + H + I = "kee/kya"). The H itself is always silent.', it: 'In italiano, la lettera H dopo C o G indurisce il suono davanti a E o I. La H di per sé è sempre muta.', pt: 'Em italiano, a letra H (acca) depois de C ou G endurece o som antes de E ou I (C + H + I = "ki"). O próprio H é sempre mudo.', es: 'En italiano, la letra H (acca) después de C o G endurece el sonido delante de E o I (C + H + I = "ki"). La H en sí es siempre muda.', fr: 'En italien, la lettre H (acca) après C ou G durcit le son devant E ou I (C + H + I = "ki"). Le H lui-même est toujours muet.', de: 'Im Italienischen macht das H (acca) nach C oder G den Laut vor E oder I hart (C + H + I = "ki"). Das H selbst ist immer stumm.'}
      },
      {
        q: {en: 'Which word contains the liquid palatal sound like "million" in English?', it: 'Quale parola contiene il suono laterale palatale simile al "million" inglese?', pt: 'Qual palavra contém o som líquido palatal, como o "lh" de "filho"?', es: '¿Qué palabra contiene el sonido líquido palatal, como la "ll" tradicional de "calle"?', fr: 'Quel mot contient le son liquide palatal, proche du "li" de "million" ?', de: 'Welches Wort enthält den weichen palatalen Laut wie "lj" in "Million"?'},
        a: [
          ['Bottiglia', 'Bottiglia'],
          ['Gatto', 'Gatto'],
          ['Gnocchi', 'Gnocchi'],
          ['Amico', 'Amico']
        ],
        why: {en: '"GLI" in "bottiglia" and "famiglia" makes the palatal liquid sound.', it: '"GLI" in "bottiglia" e "famiglia" produce il caratteristico suono laterale palatale.', pt: '"GLI" em "bottiglia" e "famiglia" produz o som líquido palatal.', es: '"GLI" en "bottiglia" y "famiglia" produce el sonido líquido palatal.', fr: '"GLI" dans "bottiglia" et "famiglia" produit le son liquide palatal.', de: '"GLI" in "bottiglia" und "famiglia" erzeugt den weichen palatalen Laut.'}
      },
      {
        q: {en: 'Why are double consonants (doppie) critical in Italian pronunciation?', it: 'Perché le doppie consonanti sono fondamentali nella pronuncia italiana?', pt: 'Por que as consoantes duplas (doppie) são essenciais na pronúncia italiana?', es: '¿Por qué las consonantes dobles (doppie) son esenciales en la pronunciación italiana?', fr: 'Pourquoi les consonnes doubles (doppie) sont-elles essentielles dans la prononciation italienne ?', de: 'Warum sind Doppelkonsonanten (doppie) in der italienischen Aussprache so wichtig?'},
        a: [
          {en: 'They change both the rhythm and the meaning of words (e.g. casa vs cassa, note vs notte)', it: 'Cambiano sia il ritmo sia il significato delle parole (es. casa vs cassa, note vs notte)', pt: 'Mudam tanto o ritmo quanto o significado das palavras (ex.: casa vs cassa, note vs notte)', es: 'Cambian tanto el ritmo como el significado de las palabras (p. ej., casa vs cassa, note vs notte)', fr: 'Elles changent à la fois le rythme et le sens des mots (ex. : casa vs cassa, note vs notte)', de: 'Sie verändern sowohl den Rhythmus als auch die Bedeutung von Wörtern (z. B. casa vs cassa, note vs notte)'},
          {en: 'They are completely silent and never pronounced', it: 'Sono del tutto mute e non si pronunciano mai', pt: 'São completamente mudas e nunca se pronunciam', es: 'Son completamente mudas y nunca se pronuncian', fr: 'Elles sont complètement muettes et ne se prononcent jamais', de: 'Sie sind völlig stumm und werden nie ausgesprochen'},
          {en: 'They are only written for ancient decoration', it: 'Si scrivono solo per decorazione antica', pt: 'Só são escritas como decoração antiga', es: 'Solo se escriben como decoración antigua', fr: 'On les écrit seulement par décoration ancienne', de: 'Sie werden nur als alte Verzierung geschrieben'},
          {en: 'They only appear at the end of words', it: 'Appaiono solo alla fine delle parole', pt: 'Só aparecem no fim das palavras', es: 'Solo aparecen al final de las palabras', fr: 'Elles n’apparaissent qu’à la fin des mots', de: 'Sie kommen nur am Wortende vor'}
        ],
        why: {en: 'Double consonants in Italian are held for longer duration and change word meanings drastically (e.g. rosa/rossa, pala/palla).', it: 'Le doppie consonanti richiedono una tenuta più lunga e cambiano il significato lessicale.', pt: 'Em italiano, as consoantes duplas são mantidas por mais tempo e mudam totalmente o significado das palavras (ex.: rosa/rossa, pala/palla).', es: 'En italiano, las consonantes dobles se mantienen más tiempo y cambian por completo el significado de las palabras (p. ej., rosa/rossa, pala/palla).', fr: 'En italien, les consonnes doubles sont tenues plus longtemps et changent complètement le sens des mots (ex. : rosa/rossa, pala/palla).', de: 'Im Italienischen werden Doppelkonsonanten länger gehalten und verändern die Wortbedeutung grundlegend (z. B. rosa/rossa, pala/palla).'}
      }
    ],
    learning: {
      version: 1,
      objectives: [
        {
          id: 'obj-it-a1m2-1',
          description: {en: 'Master the hard vs soft pronunciation of C and G, understanding the silent H rule.', it: 'Padroneggiare la pronuncia dura e dolce di C e G, comprendendo la funzione dell’acca muta.', pt: 'Dominar a pronúncia dura e suave de C e G, entendendo a regra do H mudo.', es: 'Dominar la pronunciación fuerte y suave de C y G, entendiendo la regla de la H muda.', fr: 'Maîtriser la prononciation dure et douce de C et G, en comprenant la règle du H muet.', de: 'Die harte und weiche Aussprache von C und G beherrschen und die Regel vom stummen H verstehen.'}
        },
        {
          id: 'obj-it-a1m2-2',
          description: {en: 'Pronounce GLI, GN, SC and double consonants with authentic Italian phonetics.', it: 'Pronunciare GLI, GN, SC e le doppie consonanti con autentica fonetica italiana.', pt: 'Pronunciar GLI, GN, SC e consoantes duplas com fonética italiana autêntica.', es: 'Pronunciar GLI, GN, SC y consonantes dobles con fonética italiana auténtica.', fr: 'Prononcer GLI, GN, SC et les consonnes doubles avec une phonétique italienne authentique.', de: 'GLI, GN, SC und Doppelkonsonanten mit authentischer italienischer Aussprache sprechen.'}
        }
      ],
      concepts: [
        {
          id: 'concept-it-phonetics',
          title: {en: 'The Italian Phonetic Matrix: C, G, H', it: 'La Matrice Fonetica: C, G, H', pt: 'A matriz fonética italiana: C, G, H', es: 'La matriz fonética italiana: C, G, H', fr: 'La matrice phonétique italienne : C, G, H', de: 'Die italienische Lautmatrix: C, G, H'},
          explanation: {en: 'In English, "CH" sounds like cheese. In Italian, "CH" is the exact OPPOSITE: it represents a hard "K" sound before E and I (chitarra = kee-tar-ra, bruschetta = broos-KET-ta)! If you want the soft "ch" sound in Italian, you write C followed directly by I or E (ciao, cena).', it: 'In italiano, "CH" rappresenta il suono duro "K" davanti a E e I (chitarra, bruschetta)! Per ottenere il suono dolce, si scrive C seguita direttamente da I o E (ciao, cena).', pt: 'Em português, "CH" soa como em "chave". Em italiano, "CH" é exatamente o OPOSTO: representa um som duro de "K" antes de E e I (chitarra = ki-TAR-ra, bruschetta = brus-KET-ta)! Se você quiser o som suave "tch" em italiano, escreva C seguido diretamente de I ou E (ciao, cena).', es: 'En español, "CH" suena como en "chocolate". En italiano, "CH" es exactamente lo CONTRARIO: representa un sonido fuerte de "K" delante de E e I (chitarra = ki-TAR-ra, bruschetta = brus-KET-ta). Si quieres el sonido suave "ch" en italiano, escribe C seguida directamente de I o E (ciao, cena).', fr: 'En français, "CH" se prononce comme dans "chat". En italien, "CH" est exactement l’INVERSE : il représente un son dur "K" devant E et I (chitarra = ki-TAR-ra, bruschetta = brous-KÈT-ta) ! Pour obtenir le son doux "tch" en italien, on écrit C suivi directement de I ou E (ciao, cena).', de: 'Im Deutschen klingt "CH" wie in "ich" oder "Bach". Im Italienischen ist "CH" etwas ganz anderes: Es steht vor E und I für ein hartes "K" (chitarra = ki-TAR-ra, bruschetta = brus-KET-ta)! Für den weichen "tsch"-Laut schreibt man im Italienischen C direkt gefolgt von I oder E (ciao, cena).'},
          workedExample: {
            scenario: {en: 'Ordering bruschetta in an authentic Tuscan trattoria.', it: 'Ordinare una bruschetta in un’autentica trattoria toscana.', pt: 'Pedir uma bruschetta em uma autêntica trattoria toscana.', es: 'Pedir una bruschetta en una auténtica trattoria toscana.', fr: 'Commander une bruschetta dans une authentique trattoria toscane.', de: 'In einer echten toskanischen Trattoria eine Bruschetta bestellen.'},
            steps: [
              {en: 'Step 1: Notice the "SCH" spelling: S + C + H + E.', it: 'Passo 1: Nota la grafia "SCH": S + C + H + E.', pt: 'Passo 1: Repare na grafia "SCH": S + C + H + E.', es: 'Paso 1: Fíjate en la grafía "SCH": S + C + H + E.', fr: 'Étape 1 : remarque l’orthographe "SCH" : S + C + H + E.', de: 'Schritt 1: Achte auf die Schreibung "SCH": S + C + H + E.'},
              {en: 'Step 2: C + H + E = "keh" (never "sheh" or "cheh").', it: 'Passo 2: C + H + E = "ke" duro (mai "sce" o "ce").', pt: 'Passo 2: C + H + E = "ke" (nunca "xe" nem "tche").', es: 'Paso 2: C + H + E = "ke" (nunca "she" ni "che").', fr: 'Étape 2 : C + H + E = "ké" (jamais "ché" ni "tché").', de: 'Schritt 2: C + H + E = "ke" (nie "sche" oder "tsche").'},
              {en: 'Step 3: Double TT = snappy pause.', it: 'Passo 3: Doppia TT = pausa marcata.', pt: 'Passo 3: TT duplo = pausa rápida e marcada.', es: 'Paso 3: TT doble = pausa breve y marcada.', fr: 'Étape 3 : TT double = petite pause nette.', de: 'Schritt 3: Doppeltes TT = kurze, deutliche Pause.'},
              {en: 'Step 4: Pronounce: "broos-KET-ta".', it: 'Passo 4: Pronuncia: "brus-KET-ta".', pt: 'Passo 4: Pronuncie: "brus-KET-ta".', es: 'Paso 4: Pronuncia: "brus-KET-ta".', fr: 'Étape 4 : prononce : "brous-KÈT-ta".', de: 'Schritt 4: Sprich: "brus-KET-ta".'}
            ],
            answer: ['"Vorrei una bruschetta al pomodoro, per favore!"', '"Vorrei una bruschetta al pomodoro, per favore!"']
          }
        }
      ],
      summary: [
        {en: 'C/G + E/I = Soft (cena, gelato). C/G + H + E/I = Hard (chiave, ghirlanda).', it: 'C/G + E/I = Dolce (cena, gelato). C/G + H + E/I = Duro (chiave, ghirlanda).', pt: 'C/G + E/I = suave (cena, gelato). C/G + H + E/I = duro (chiave, ghirlanda).', es: 'C/G + E/I = suave (cena, gelato). C/G + H + E/I = fuerte (chiave, ghirlanda).', fr: 'C/G + E/I = doux (cena, gelato). C/G + H + E/I = dur (chiave, ghirlanda).', de: 'C/G + E/I = weich (cena, gelato). C/G + H + E/I = hart (chiave, ghirlanda).'},
        {en: 'GLI = liquid palatal ("famiglia"); GN = nasal palatal ("lasagna").', it: 'GLI = laterale palatale ("famiglia"); GN = nasale palatale ("lasagna").', pt: 'GLI = líquido palatal ("famiglia"); GN = nasal palatal ("lasagna").', es: 'GLI = líquido palatal ("famiglia"); GN = nasal palatal ("lasagna").', fr: 'GLI = liquide palatal ("famiglia") ; GN = nasal palatal ("lasagna").', de: 'GLI = weicher palataler Laut ("famiglia"); GN = nasaler palataler Laut ("lasagna").'},
        {en: 'Double consonants lengthen the consonant sound and can change meaning completely.', it: 'Le doppie allungano il suono consonantico e distinguono il significato.', pt: 'As consoantes duplas alongam o som da consoante e podem mudar completamente o significado.', es: 'Las consonantes dobles alargan el sonido de la consonante y pueden cambiar por completo el significado.', fr: 'Les consonnes doubles allongent le son de la consonne et peuvent changer complètement le sens.', de: 'Doppelkonsonanten verlängern den Konsonantenlaut und können die Bedeutung völlig verändern.'}
      ],
      masteryAssessment: {
        title: {en: 'Phonetics Mastery Test', it: 'Test di Padronanza Fonetica', pt: 'Teste de domínio de fonética', es: 'Prueba de dominio de fonética', fr: 'Test de maîtrise de la phonétique', de: 'Abschlusstest Phonetik'},
        instructions: {en: 'Identify the correct phonetic reading and stress placement for authentic Italian words.', it: 'Identifica la lettura fonetica corretta e la posizione dell’accento per parole italiane.', pt: 'Identifique a leitura fonética e a posição do acento corretas em palavras italianas autênticas.', es: 'Identifica la lectura fonética y la posición del acento correctas en palabras italianas auténticas.', fr: 'Identifie la lecture phonétique et la place de l’accent correctes dans des mots italiens authentiques.', de: 'Erkenne die richtige Aussprache und Betonung echter italienischer Wörter.'},
        passingScore: 80,
        questions: [
          {
            q: {en: 'Which word is pronounced with a hard "G" sound like in the English word "go"?', it: 'Quale parola si pronuncia con la "G" dura come in "go"?', pt: 'Qual palavra é pronunciada com um som duro de "G", como em "gato"?', es: '¿Qué palabra se pronuncia con un sonido fuerte de "G", como en "gato"?', fr: 'Quel mot se prononce avec un son dur "G", comme dans "gâteau" ?', de: 'Welches Wort wird mit hartem "G" wie in "gut" ausgesprochen?'},
            a: [
              ['Spaghetti', 'Spaghetti'],
              ['Gelato', 'Gelato'],
              ['Giro', 'Giro'],
              ['Giorno', 'Giorno']
            ],
            why: {en: 'The H in "spaghetti" (GH + E) makes the G sound hard.', it: 'La H in "spaghetti" (GH + E) rende la G dura.', pt: 'O H em "spaghetti" (GH + E) torna o som do G duro.', es: 'La H de "spaghetti" (GH + E) hace que la G suene fuerte.', fr: 'Le H de "spaghetti" (GH + E) rend le son du G dur.', de: 'Das H in "spaghetti" (GH + E) macht das G hart.'}
          }
        ]
      }
    }
  },

  {
    id: 'it_a1m3',
    arc: 0,
    sec: 'A1.3',
    pages: '25–38',
    hue: 45,
    horns: 1,
    eyes: 2,
    title: {en: 'Al Bar Italiano: Ordering & Essential Numbers', it: 'Al Bar Italiano: Ordinare e i Numeri Fondamentali', pt: 'No bar italiano: pedir e números essenciais', es: 'En el bar italiano: pedir y números esenciales', fr: 'Au bar italien : commander et les nombres essentiels', de: 'In der italienischen Bar: bestellen und wichtige Zahlen'},
    topic: {en: 'Ordering food and drink at an Italian cafe, courtesy formula "Vorrei", numbers 1–20, paying the check', it: 'Ordinare cibi e bevande al bar, la formula di cortesia "Vorrei", i numeri da 1 a 20, pagare il conto', pt: 'Pedir comida e bebida em um café italiano, a fórmula de cortesia "Vorrei", os números de 1 a 20 e pagar a conta', es: 'Pedir comida y bebida en un café italiano, la fórmula de cortesía "Vorrei", los números del 1 al 20 y pagar la cuenta', fr: 'Commander à manger et à boire dans un café italien, la formule de politesse "Vorrei", les nombres de 1 à 20 et payer l’addition', de: 'Essen und Getränke in einem italienischen Café bestellen, die Höflichkeitsformel "Vorrei", die Zahlen 1–20 und die Rechnung bezahlen'},
    demon: {en: 'Glitch Barista', it: 'Barista del Caos', pt: 'Glitch Barista', es: 'Glitch Barista', fr: 'Glitch Barista', de: 'Glitch-Barista'},
    lore: {en: 'The Glitch Barista serves cold espresso unless you speak the exact Italian courtesy formula. Order like a true local!', it: 'Il Barista del Caos serve espresso freddo a meno che tu non pronunci la perfetta formula di cortesia. Ordina come un vero italiano!', pt: 'O Glitch Barista serve espresso frio, a menos que você use a fórmula de cortesia italiana exata. Peça como um verdadeiro italiano!', es: 'El Glitch Barista sirve el espresso frío a menos que uses la fórmula de cortesía italiana exacta. ¡Pide como un auténtico italiano!', fr: 'Le Glitch Barista sert un espresso froid si tu n’utilises pas la formule de politesse italienne exacte. Commande comme un vrai Italien !', de: 'Der Glitch-Barista serviert kalten Espresso, wenn du nicht die genaue italienische Höflichkeitsformel benutzt. Bestell wie ein echter Einheimischer!'},
    clearedMsg: {en: 'The barista smiles and pours a velvety espresso. You have unlocked everyday conversational fluency at the counter!', it: 'Il barista sorride e ti serve un espresso cremoso. Hai sbloccato la fluidità quotidiana al banco!', pt: 'O barista sorri e serve um espresso aveludado. Você desbloqueou a fluência na conversa do dia a dia no balcão!', es: 'El barista sonríe y sirve un espresso aterciopelado. ¡Has desbloqueado la fluidez en la conversación cotidiana en la barra!', fr: 'Le barista sourit et te sert un espresso velouté. Tu as débloqué l’aisance dans les conversations du quotidien au comptoir !', de: 'Der Barista lächelt und schenkt einen samtigen Espresso ein. Du hast die Alltagsunterhaltung an der Theke freigeschaltet!'},
    tech: {en: 'Espresso Courtesy Strike', it: 'Colpo di Cortesia dell’Espresso', pt: 'Golpe da Cortesia do Espresso', es: 'Golpe de Cortesía del Espresso', fr: 'Frappe de Politesse Espresso', de: 'Espresso-Höflichkeitsschlag'},
    scenes: [
      {
        who: 's',
        text: {en: '<p>The Italian bar is the beating heart of social life. Here are the golden rules:</p><ul><li>Use <b>"Vorrei..."</b> (I would like...) instead of "Voglio" (I want). "Vorrei" is polite and pleasant.</li><li>Always conclude with <b>"per favore"</b> or <b>"per piacere"</b> (please).</li><li>Numbers 1–10: <i>uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci</i>.</li><li>To ask for the bill: <i>"Quanto pago?"</i> or <i>"Il conto, per favore!"</i></li></ul>', it: '<p>Il bar italiano è il cuore pulsante della vita sociale. Ecco le regole d’oro:</p><ul><li>Usa <b>"Vorrei..."</b> invece di "Voglio". "Vorrei" è gentile ed elegante.</li><li>Aggiungi sempre <b>"per favore"</b> o <b>"per piacere"</b>.</li><li>I numeri 1–10: <i>uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci</i>.</li><li>Per pagare: <i>"Quanto pago?"</i> oppure <i>"Il conto, per favore!"</i></li></ul>', pt: '<p>O bar italiano é o coração da vida social. Estas são as regras de ouro:</p><ul><li>Use <b>"Vorrei..."</b> (Eu gostaria...) em vez de "Voglio" (Eu quero). "Vorrei" é educado e agradável.</li><li>Termine sempre com <b>"per favore"</b> ou <b>"per piacere"</b> (por favor).</li><li>Números de 1 a 10: <i>uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci</i>.</li><li>Para pedir a conta: <i>"Quanto pago?"</i> ou <i>"Il conto, per favore!"</i></li></ul>', es: '<p>El bar italiano es el corazón de la vida social. Estas son las reglas de oro:</p><ul><li>Usa <b>"Vorrei..."</b> (Quisiera...) en lugar de "Voglio" (Quiero). "Vorrei" es cortés y agradable.</li><li>Termina siempre con <b>"per favore"</b> o <b>"per piacere"</b> (por favor).</li><li>Números del 1 al 10: <i>uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci</i>.</li><li>Para pedir la cuenta: <i>"Quanto pago?"</i> o <i>"Il conto, per favore!"</i></li></ul>', fr: '<p>Le bar italien est le cœur de la vie sociale. Voici les règles d’or :</p><ul><li>Dis <b>"Vorrei..."</b> (Je voudrais...) plutôt que "Voglio" (Je veux). "Vorrei" est poli et agréable.</li><li>Termine toujours par <b>"per favore"</b> ou <b>"per piacere"</b> (s’il vous plaît).</li><li>Les nombres de 1 à 10 : <i>uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci</i>.</li><li>Pour demander l’addition : <i>"Quanto pago?"</i> ou <i>"Il conto, per favore!"</i></li></ul>', de: '<p>Die italienische Bar ist das Herz des sozialen Lebens. Das sind die goldenen Regeln:</p><ul><li>Sag <b>"Vorrei..."</b> (Ich hätte gern...) statt "Voglio" (Ich will). "Vorrei" ist höflich und angenehm.</li><li>Beende die Bestellung immer mit <b>"per favore"</b> oder <b>"per piacere"</b> (bitte).</li><li>Zahlen 1–10: <i>uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci</i>.</li><li>Nach der Rechnung fragen: <i>"Quanto pago?"</i> oder <i>"Il conto, per favore!"</i></li></ul>'}
      }
    ],
    quiz: [
      {
        q: {en: 'What is the polite way to ask for a coffee and a croissant at the counter?', it: 'Qual è il modo cortese per chiedere un caffè e un cornetto al banco?', pt: 'Qual é a forma educada de pedir um café e um croissant no balcão?', es: '¿Cuál es la forma cortés de pedir un café y un cruasán en la barra?', fr: 'Quelle est la façon polie de demander un café et un croissant au comptoir ?', de: 'Wie bestellst du höflich einen Kaffee und ein Hörnchen an der Theke?'},
        a: [
          ['Vorrei un caffè e un cornetto, per favore.', 'Vorrei un caffè e un cornetto, per favore.'],
          ['Dammi un caffè e un cornetto subito!', 'Dammi un caffè e un cornetto subito!'],
          ['Voglio mangiare e bere adesso.', 'Voglio mangiare e bere adesso.'],
          ['Prendo qualcosa se voglio.', 'Prendo qualcosa se voglio.']
        ],
        why: {en: '"Vorrei... per favore" is the universally polite and elegant way to order in Italy.', it: '"Vorrei... per favore" è la formula di cortesia standard per ordinare.', pt: '"Vorrei... per favore" é a forma educada e elegante de pedir em qualquer lugar da Itália.', es: '"Vorrei... per favore" es la forma cortés y elegante de pedir en cualquier lugar de Italia.', fr: '"Vorrei... per favore" est la façon polie et élégante de commander partout en Italie.', de: '"Vorrei... per favore" ist überall in Italien die höfliche, elegante Art zu bestellen.'}
      },
      {
        q: {en: 'How do you say the number 15 in Italian?', it: 'Come si dice il numero 15 in italiano?', pt: 'Como se diz o número 15 em italiano?', es: '¿Cómo se dice el número 15 en italiano?', fr: 'Comment dit-on le nombre 15 en italien ?', de: 'Wie sagt man die Zahl 15 auf Italienisch?'},
        a: [
          ['Quindici', 'Quindici'],
          ['Dodici', 'Dodici'],
          ['Cinquanta', 'Cinquanta'],
          ['Diciassette', 'Diciassette']
        ],
        why: {en: '15 is "quindici" (11=undici, 12=dodici, 13=tredici, 14=quattordici, 15=quindici).', it: '15 si dice "quindici".', pt: '15 é "quindici" (11 = undici, 12 = dodici, 13 = tredici, 14 = quattordici, 15 = quindici).', es: '15 es "quindici" (11 = undici, 12 = dodici, 13 = tredici, 14 = quattordici, 15 = quindici).', fr: '15 se dit "quindici" (11 = undici, 12 = dodici, 13 = tredici, 14 = quattordici, 15 = quindici).', de: '15 heißt "quindici" (11 = undici, 12 = dodici, 13 = tredici, 14 = quattordici, 15 = quindici).'}
      }
    ]
  },

  // =========================================================================
  // CEFR A2 - ELEMENTARE (ELEMENTARY)
  // Arc 1: Il Passato e Orientarsi in Città
  // =========================================================================
  {
    id: 'it_a2m1',
    arc: 1,
    sec: 'A2.1',
    pages: '50–68',
    hue: 200,
    horns: 2,
    eyes: 2,
    title: [
      'Il Mio Weekend: Il Passato Prossimo',
      'Il Mio Weekend: Il Passato Prossimo'
    ],
    topic: {en: 'The Passato Prossimo tense: auxiliary choice (essere vs avere) and past participle agreement', it: 'Il passato prossimo: scelta dell’ausiliare (essere vs avere) e accordo del participio passato', pt: 'O passato prossimo: escolha do auxiliar (essere vs avere) e concordância do particípio passado', es: 'El passato prossimo: elección del auxiliar (essere vs avere) y concordancia del participio pasado', fr: 'Le passato prossimo : choix de l’auxiliaire (essere vs avere) et accord du participe passé', de: 'Das Passato prossimo: Wahl des Hilfsverbs (essere vs avere) und Angleichung des Partizips'},
    demon: {en: 'Auxiliary Specter', it: 'Spettro dell’Ausiliare', pt: 'Espectro do Auxiliar', es: 'Espectro del Auxiliar', fr: 'Spectre de l’Auxiliaire', de: 'Hilfsverb-Gespenst'},
    lore: {en: 'The Auxiliary Specter confuses "sono andato" with "ho andato". Master the two pillars of past actions to banish it!', it: 'Lo Spettro dell’Ausiliare confonde "sono andato" con "ho andato". Padroneggia i due pilastri del passato per sconfiggerlo!', pt: 'O Espectro do Auxiliar confunde "sono andato" com "ho andato". Domine os dois pilares das ações passadas para bani-lo!', es: 'El Espectro del Auxiliar confunde "sono andato" con "ho andato". ¡Domina los dos pilares de las acciones pasadas para desterrarlo!', fr: 'Le Spectre de l’Auxiliaire confond "sono andato" et "ho andato". Maîtrise les deux piliers des actions passées pour le bannir !', de: 'Das Hilfsverb-Gespenst verwechselt "sono andato" mit "ho andato". Beherrsche die zwei Säulen vergangener Handlungen, um es zu vertreiben!'},
    clearedMsg: {en: 'Splendido! You can narrate completed past events, trips, and weekend adventures with grammatical precision.', it: 'Splendido! Ora puoi narrare eventi passati, viaggi e fine settimana con precisione grammaticale.', pt: 'Splendido! Você consegue narrar fatos passados concluídos, viagens e aventuras de fim de semana com precisão gramatical.', es: 'Splendido! Puedes narrar hechos pasados terminados, viajes y aventuras de fin de semana con precisión gramatical.', fr: 'Splendido ! Tu sais raconter des événements passés, des voyages et des aventures du week-end avec précision grammaticale.', de: 'Splendido! Du kannst abgeschlossene Ereignisse, Reisen und Wochenendabenteuer grammatisch korrekt erzählen.'},
    tech: {en: 'Chronos Auxiliary Blade', it: 'Lama dell’Ausiliare del Tempo', pt: 'Lâmina Cronos do Auxiliar', es: 'Espada Cronos del Auxiliar', fr: 'Lame Chronos de l’Auxiliaire', de: 'Chronos-Klinge des Hilfsverbs'},
    scenes: [
      {
        who: 's',
        text: {en: '<p>Welcome to <b>CEFR A2</b>! To talk about what you did yesterday or last weekend, use the <b>Passato Prossimo</b>.</p><p>Formula: <b>Present of AVERE or ESSERE + Past Participle (-ato, -uto, -ito)</b>.</p><ul><li><b>Use AVERE:</b> for most transitive verbs (actions done to an object): <i>Ho mangiato una pizza. Ho letto un libro.</i> The participle does NOT change.</li><li><b>Use ESSERE:</b> for movement, state, change of status, and reflexives: <i>Sono andato a scuola. Maria è arrivata. Ci siamo divertiti.</i> With ESSERE, the participle MUST agree in gender and number (-o, -a, -i, -e)!</li></ul>', it: '<p>Benvenuto al <b>QCER A2</b>! Per parlare di ciò che hai fatto ieri o lo scorso weekend, usa il <b>Passato Prossimo</b>.</p><p>Formula: <b>Presente di AVERE o ESSERE + Participio Passato (-ato, -uto, -ito)</b>.</p><ul><li><b>Con AVERE:</b> per la maggior parte dei verbi transitivi: <i>Ho mangiato una pizza. Ho letto un libro.</i> Il participio termina normalmente in -o.</li><li><b>Con ESSERE:</b> per verbi di movimento, stato, cambiamento e riflessivi: <i>Sono andato a scuola. Maria è arrivata.</i> Con ESSERE il participio si accorda in genere e numero col soggetto (-o, -a, -i, -e)!</li></ul>', pt: '<p>Bem-vindo ao <b>QECR A2</b>! Para falar do que você fez ontem ou no fim de semana passado, use o <b>Passato Prossimo</b>.</p><p>Fórmula: <b>presente de AVERE ou ESSERE + particípio passado (-ato, -uto, -ito)</b>.</p><ul><li><b>Use AVERE:</b> com a maioria dos verbos transitivos (ações feitas sobre um objeto): <i>Ho mangiato una pizza. Ho letto un libro.</i> O particípio NÃO muda.</li><li><b>Use ESSERE:</b> com movimento, estado, mudança de condição e verbos reflexivos: <i>Sono andato a scuola. Maria è arrivata. Ci siamo divertiti.</i> Com ESSERE, o particípio PRECISA concordar em gênero e número (-o, -a, -i, -e)!</li></ul>', es: '<p>¡Bienvenido al <b>MCER A2</b>! Para hablar de lo que hiciste ayer o el fin de semana pasado, usa el <b>Passato Prossimo</b>.</p><p>Fórmula: <b>presente de AVERE o ESSERE + participio pasado (-ato, -uto, -ito)</b>.</p><ul><li><b>Usa AVERE:</b> con la mayoría de los verbos transitivos (acciones sobre un objeto): <i>Ho mangiato una pizza. Ho letto un libro.</i> El participio NO cambia.</li><li><b>Usa ESSERE:</b> con movimiento, estado, cambio de condición y verbos reflexivos: <i>Sono andato a scuola. Maria è arrivata. Ci siamo divertiti.</i> ¡Con ESSERE, el participio DEBE concordar en género y número (-o, -a, -i, -e)!</li></ul>', fr: '<p>Bienvenue au <b>CECRL A2</b> ! Pour parler de ce que tu as fait hier ou le week-end dernier, utilise le <b>Passato Prossimo</b>.</p><p>Formule : <b>présent de AVERE ou ESSERE + participe passé (-ato, -uto, -ito)</b>.</p><ul><li><b>Avec AVERE :</b> pour la plupart des verbes transitifs (actions sur un objet) : <i>Ho mangiato una pizza. Ho letto un libro.</i> Le participe NE change PAS.</li><li><b>Avec ESSERE :</b> pour le mouvement, l’état, le changement d’état et les verbes pronominaux : <i>Sono andato a scuola. Maria è arrivata. Ci siamo divertiti.</i> Avec ESSERE, le participe DOIT s’accorder en genre et en nombre (-o, -a, -i, -e) !</li></ul>', de: '<p>Willkommen bei <b>GER A2</b>! Um zu erzählen, was du gestern oder letztes Wochenende gemacht hast, verwendest du das <b>Passato Prossimo</b>.</p><p>Formel: <b>Präsens von AVERE oder ESSERE + Partizip Perfekt (-ato, -uto, -ito)</b>.</p><ul><li><b>Mit AVERE:</b> bei den meisten transitiven Verben (Handlungen mit Objekt): <i>Ho mangiato una pizza. Ho letto un libro.</i> Das Partizip bleibt UNVERÄNDERT.</li><li><b>Mit ESSERE:</b> bei Bewegung, Zustand, Zustandsänderung und reflexiven Verben: <i>Sono andato a scuola. Maria è arrivata. Ci siamo divertiti.</i> Mit ESSERE MUSS sich das Partizip in Geschlecht und Zahl anpassen (-o, -a, -i, -e)!</li></ul>'}
      }
    ],
    quiz: [
      {
        q: {en: 'Choose the grammatically correct sentence for a female speaker saying "Yesterday I went to Rome":', it: 'Scegli la frase corretta per una ragazza che dice "Yesterday I went to Rome":', pt: 'Escolha a frase gramaticalmente correta para uma falante dizer "Ontem eu fui a Roma":', es: 'Elige la frase gramaticalmente correcta para una hablante que dice "Ayer fui a Roma":', fr: 'Choisis la phrase grammaticalement correcte pour une locutrice qui dit "Hier, je suis allée à Rome" :', de: 'Wähle den grammatisch richtigen Satz für eine Sprecherin, die sagt: "Gestern bin ich nach Rom gefahren":'},
        a: [
          ['Ieri sono andata a Roma.', 'Ieri sono andata a Roma.'],
          ['Ieri ho andato a Roma.', 'Ieri ho andato a Roma.'],
          ['Ieri sono andato a Roma.', 'Ieri sono andato a Roma.'],
          ['Ieri ho andata a Roma.', 'Ieri ho andata a Roma.'],
        ],
        why: {en: '"Andare" is a verb of movement and takes the auxiliary "essere". With "essere", the past participle agrees with the feminine subject (andata).', it: '"Andare" è un verbo di movimento e richiede l’ausiliare "essere". Con "essere" il participio si accorda al femminile singolare (-a).', pt: '"Andare" é um verbo de movimento e usa o auxiliar "essere". Com "essere", o particípio passado concorda com o sujeito feminino (andata).', es: '"Andare" es un verbo de movimiento y lleva el auxiliar "essere". Con "essere", el participio pasado concuerda con el sujeto femenino (andata).', fr: '"Andare" est un verbe de mouvement qui prend l’auxiliaire "essere". Avec "essere", le participe passé s’accorde avec le sujet féminin (andata).', de: '"Andare" ist ein Verb der Bewegung und bildet das Perfekt mit "essere". Mit "essere" richtet sich das Partizip nach dem weiblichen Subjekt (andata).'}
      },
      {
        q: {en: 'Which sentence correctly describes drinking a cappuccino yesterday morning?', it: 'Quale frase descrive correttamente l’aver bevuto un cappuccino ieri mattina?', pt: 'Qual frase descreve corretamente ter tomado um cappuccino ontem de manhã?', es: '¿Qué frase describe correctamente haber tomado un capuchino ayer por la mañana?', fr: 'Quelle phrase décrit correctement le fait d’avoir bu un cappuccino hier matin ?', de: 'Welcher Satz beschreibt richtig, dass man gestern früh einen Cappuccino getrunken hat?'},
        a: [
          ['Ieri mattina ho bevuto un cappuccino.', 'Ieri mattina ho bevuto un cappuccino.'],
          ['Ieri mattina sono bevuto un cappuccino.', 'Ieri mattina sono bevuto un cappuccino.'],
          ['Ieri mattina ho bevuta un cappuccino.', 'Ieri mattina ho bevuta un cappuccino.'],
          ['Ieri mattina sono bevuta un cappuccino.', 'Ieri mattina sono bevuta un cappuccino.']
        ],
        why: {en: '"Bere" is transitive (drinks an object) and takes "avere" (ho bevuto).', it: '"Bere" è transitivo e richiede l’ausiliare "avere" (ho bevuto).', pt: '"Bere" é transitivo (bebe-se alguma coisa) e usa "avere" (ho bevuto).', es: '"Bere" es transitivo (se bebe algo) y lleva "avere" (ho bevuto).', fr: '"Bere" est transitif (on boit quelque chose) et prend "avere" (ho bevuto).', de: '"Bere" ist transitiv (man trinkt etwas) und steht mit "avere" (ho bevuto).'}
      }
    ],
    learning: {
      version: 1,
      objectives: [
        {
          id: 'obj-it-a2m1-1',
          description: {en: 'Select the correct auxiliary (essere vs avere) for common Italian verbs in passato prossimo.', it: 'Scegliere l’ausiliare corretto (essere o avere) per i verbi italiani al passato prossimo.', pt: 'Escolher o auxiliar correto (essere vs avere) para verbos italianos comuns no passato prossimo.', es: 'Elegir el auxiliar correcto (essere vs avere) para verbos italianos comunes en passato prossimo.', fr: 'Choisir le bon auxiliaire (essere vs avere) pour les verbes italiens courants au passato prossimo.', de: 'Für häufige italienische Verben im Passato prossimo das richtige Hilfsverb (essere vs avere) wählen.'},
        },
        {
          id: 'obj-it-a2m1-2',
          description: {en: 'Apply past participle gender and number agreement rules when auxiliary essere is used.', it: 'Applicare le regole di accordo del participio passato in genere e numero quando si usa essere.', pt: 'Aplicar a concordância de gênero e número do particípio passado quando se usa o auxiliar essere.', es: 'Aplicar la concordancia de género y número del participio pasado cuando se usa el auxiliar essere.', fr: 'Appliquer l’accord en genre et en nombre du participe passé avec l’auxiliaire essere.', de: 'Die Angleichung des Partizips in Geschlecht und Zahl anwenden, wenn das Hilfsverb essere verwendet wird.'}
        }
      ],
      concepts: [
        {
          id: 'concept-it-passato-prossimo',
          title: {en: 'Auxiliary Choice: The House of Essere', it: 'Scelta dell’Ausiliare: La Casa di Essere', pt: 'Escolha do auxiliar: a Casa do Essere', es: 'Elección del auxiliar: la Casa del Essere', fr: 'Choix de l’auxiliaire : la Maison d’Essere', de: 'Wahl des Hilfsverbs: das Haus von Essere'},
          explanation: {en: 'Think of the "House of Essere": verbs of entering, leaving, going, coming, staying, being born, and dying all live in this house and take ESSERE (andare, venire, entrare, uscire, salire, scendere, restare, nascere, morire). Almost all other active verbs take AVERE.', it: 'Pensa alla "Casa di Essere": i verbi di movimento, permanenza, nascita e morte (andare, venire, entrare, uscire, restare, nascere, morire) richiedono ESSERE. La maggior parte degli altri verbi prende AVERE.', pt: 'Pense na "Casa do Essere": os verbos de entrar, sair, ir, vir, ficar, nascer e morrer moram todos nessa casa e usam ESSERE (andare, venire, entrare, uscire, salire, scendere, restare, nascere, morire). Quase todos os outros verbos de ação usam AVERE.', es: 'Piensa en la "Casa del Essere": los verbos de entrar, salir, ir, venir, quedarse, nacer y morir viven todos en esta casa y llevan ESSERE (andare, venire, entrare, uscire, salire, scendere, restare, nascere, morire). Casi todos los demás verbos de acción llevan AVERE.', fr: 'Pense à la "Maison d’Essere" : les verbes entrer, sortir, aller, venir, rester, naître et mourir habitent tous cette maison et prennent ESSERE (andare, venire, entrare, uscire, salire, scendere, restare, nascere, morire). Presque tous les autres verbes d’action prennent AVERE.', de: 'Denk an das "Haus von Essere": Verben des Hineingehens, Hinausgehens, Gehens, Kommens, Bleibens, Geborenwerdens und Sterbens wohnen alle in diesem Haus und stehen mit ESSERE (andare, venire, entrare, uscire, salire, scendere, restare, nascere, morire). Fast alle anderen Handlungsverben stehen mit AVERE.'},
          workedExample: {
            scenario: {en: 'Two girls (Chiara and Sofia) describing their arrival at the train station.', it: 'Due ragazze (Chiara e Sofia) che descrivono il loro arrivo alla stazione.', pt: 'Duas garotas (Chiara e Sofia) descrevendo a chegada à estação de trem.', es: 'Dos chicas (Chiara y Sofia) describen su llegada a la estación de tren.', fr: 'Deux filles (Chiara et Sofia) racontent leur arrivée à la gare.', de: 'Zwei Mädchen (Chiara und Sofia) beschreiben ihre Ankunft am Bahnhof.'},
            steps: [
              {en: 'Step 1: Verb is "arrivare" (movement/destination) -> requires ESSERE.', it: 'Passo 1: Verbo "arrivare" -> ausiliare ESSERE.', pt: 'Passo 1: O verbo é "arrivare" (movimento/destino) -> exige ESSERE.', es: 'Paso 1: El verbo es "arrivare" (movimiento/destino) -> exige ESSERE.', fr: 'Étape 1 : le verbe est "arrivare" (mouvement/destination) -> il exige ESSERE.', de: 'Schritt 1: Das Verb ist "arrivare" (Bewegung/Ziel) -> verlangt ESSERE.'},
              {en: 'Step 2: Subject is "noi" (two girls, feminine plural) -> siamo.', it: 'Passo 2: Soggetto "noi" (femminile plurale) -> siamo.', pt: 'Passo 2: O sujeito é "noi" (duas garotas, feminino plural) -> siamo.', es: 'Paso 2: El sujeto es "noi" (dos chicas, femenino plural) -> siamo.', fr: 'Étape 2 : le sujet est "noi" (deux filles, féminin pluriel) -> siamo.', de: 'Schritt 2: Das Subjekt ist "noi" (zwei Mädchen, feminin Plural) -> siamo.'},
              {en: 'Step 3: Past participle "arrivato" must agree -> arrivate.', it: 'Passo 3: Accordo del participio -> arrivate.', pt: 'Passo 3: O particípio "arrivato" precisa concordar -> arrivate.', es: 'Paso 3: El participio "arrivato" debe concordar -> arrivate.', fr: 'Étape 3 : le participe "arrivato" doit s’accorder -> arrivate.', de: 'Schritt 3: Das Partizip "arrivato" muss sich anpassen -> arrivate.'}
            ],
            answer: ['"Chiara e io siamo arrivate alla stazione in orario."', '"Chiara e io siamo arrivate alla stazione in orario."']
          }
        }
      ],
      summary: [
        {en: 'AVERE + Participle in -o for transitive actions.', it: 'AVERE + participio invariato in -o per azioni transitive.', pt: 'AVERE + particípio em -o para ações transitivas.', es: 'AVERE + participio en -o para acciones transitivas.', fr: 'AVERE + participe en -o pour les actions transitives.', de: 'AVERE + Partizip auf -o bei transitiven Handlungen.'},
        {en: 'ESSERE + Participle agreeing in gender and number (-o, -a, -i, -e) for movement and status.', it: 'ESSERE + accordo in genere e numero per movimento e stato.', pt: 'ESSERE + particípio que concorda em gênero e número (-o, -a, -i, -e) para movimento e estado.', es: 'ESSERE + participio que concuerda en género y número (-o, -a, -i, -e) para movimiento y estado.', fr: 'ESSERE + participe accordé en genre et en nombre (-o, -a, -i, -e) pour le mouvement et l’état.', de: 'ESSERE + Partizip, angepasst in Geschlecht und Zahl (-o, -a, -i, -e), bei Bewegung und Zustand.'}
      ]
    }
  },

  {
    id: 'it_a2m2',
    arc: 1,
    sec: 'A2.2',
    pages: '69–84',
    hue: 220,
    horns: 1,
    eyes: 3,
    title: [
      'In Città: Indicazioni Stradali e Pronomi Diretti',
      'In Città: Indicazioni Stradali e Pronomi Diretti'
    ],
    topic: {en: 'Asking for and giving street directions, articulated prepositions (al, del, nel), direct object pronouns (lo, la, li, le) and partitive "ne"', it: 'Chiedere e dare indicazioni stradali, preposizioni articolate, pronomi diretti (lo, la, li, le) e partitivo "ne"', pt: 'Pedir e dar indicações na rua, preposições articuladas (al, del, nel), pronomes objeto direto (lo, la, li, le) e o partitivo "ne"', es: 'Pedir y dar indicaciones por la calle, preposiciones articuladas (al, del, nel), pronombres de objeto directo (lo, la, li, le) y el partitivo "ne"', fr: 'Demander et indiquer son chemin, prépositions contractées (al, del, nel), pronoms compléments d’objet direct (lo, la, li, le) et le partitif "ne"', de: 'Nach dem Weg fragen und den Weg erklären, Präpositionen mit Artikel (al, del, nel), direkte Objektpronomen (lo, la, li, le) und das partitive "ne"'},
    demon: {en: 'Labyrinth Demon', it: 'Demone del Labirinto', pt: 'Demônio do Labirinto', es: 'Demonio del Laberinto', fr: 'Démon du Labyrinthe', de: 'Labyrinth-Dämon'},
    lore: {en: 'Lost in the narrow alleys of Venice! Use articulated prepositions and direct pronouns to guide your fellow hunters to safety.', it: 'Perso tra le calli di Venezia! Usa le preposizioni articolate e i pronomi diretti per guidare i tuoi compagni alla salvezza.', pt: 'Perdidos nas ruelas estreitas de Veneza! Use as preposições articuladas e os pronomes diretos para guiar os seus companheiros caçadores até um lugar seguro.', es: '¡Perdidos en los estrechos callejones de Venecia! Usa las preposiciones articuladas y los pronombres directos para guiar a tus compañeros cazadores hasta un lugar seguro.', fr: 'Perdus dans les ruelles étroites de Venise ! Utilise les prépositions contractées et les pronoms directs pour guider tes compagnons chasseurs en lieu sûr.', de: 'Verirrt in den engen Gassen Venedigs! Nutze Präpositionen mit Artikel und direkte Pronomen, um deine Mitjäger in Sicherheit zu führen.'},
    clearedMsg: {en: 'You navigated the urban labyrinth with elegance. You can guide any traveler across Italian cities!', it: 'Hai navigato il labirinto urbano con eleganza. Ora puoi guidare qualsiasi viaggiatore nelle città italiane!', pt: 'Você atravessou o labirinto urbano com elegância. Agora consegue guiar qualquer viajante pelas cidades italianas!', es: 'Has recorrido el laberinto urbano con elegancia. ¡Puedes guiar a cualquier viajero por las ciudades italianas!', fr: 'Tu as traversé le labyrinthe urbain avec élégance. Tu peux guider n’importe quel voyageur dans les villes italiennes !', de: 'Du hast das Stadtlabyrinth elegant durchquert. Du kannst jetzt jeden Reisenden durch italienische Städte führen!'},
    tech: {en: 'Compass of Venice', it: 'Bussola di Venezia', pt: 'Bússola de Veneza', es: 'Brújula de Venecia', fr: 'Boussole de Venise', de: 'Kompass von Venedig'},
    scenes: [
      {
        who: 's',
        text: {en: '<p>Navigating Italian towns requires two key skills:</p><ul><li><b>Directions:</b> <i>Giri a destra</i> (turn right), <i>Giri a sinistra</i> (turn left), <i>Vada sempre dritto</i> (go straight ahead), <i>Attraversi la piazza</i> (cross the square).</li><li><b>Direct Object Pronouns (lo, la, li, le):</b> Replace a noun to avoid repetition: <i>Compri il pane? Sì, <b>lo</b> compro. Mangi le mele? Sì, <b>le</b> mangio.</i></li><li><b>The partitive "NE":</b> Replaces a quantity: <i>Quanti caffè bevi? <b>Ne</b> bevo due al giorno!</i> (I drink two of them a day).</li></ul>', it: '<p>Muoversi nelle città italiane richiede due abilità chiave:</p><ul><li><b>Indicazioni:</b> <i>Giri a destra</i>, <i>Giri a sinistra</i>, <i>Vada sempre dritto</i>, <i>Attraversi la piazza</i>.</li><li><b>Pronomi Diretti (lo, la, li, le):</b> Sostituiscono il complemento oggetto: <i>Compri il pane? Sì, <b>lo</b> compro. Mangi le mele? Sì, <b>le</b> mangio.</i></li><li><b>Il partitivo "NE":</b> Indica una quantità definita o parziale: <i>Quanti caffè bevi? <b>Ne</b> bevo due al giorno!</i></li></ul>', pt: '<p>Para se orientar nas cidades italianas são necessárias duas habilidades:</p><ul><li><b>Indicações:</b> <i>Giri a destra</i> (vire à direita), <i>Giri a sinistra</i> (vire à esquerda), <i>Vada sempre dritto</i> (siga sempre em frente), <i>Attraversi la piazza</i> (atravesse a praça).</li><li><b>Pronomes objeto direto (lo, la, li, le):</b> substituem um substantivo para evitar repetição: <i>Compri il pane? Sì, <b>lo</b> compro. Mangi le mele? Sì, <b>le</b> mangio.</i></li><li><b>O partitivo "NE":</b> substitui uma quantidade: <i>Quanti caffè bevi? <b>Ne</b> bevo due al giorno!</i> (Eu tomo dois por dia).</li></ul>', es: '<p>Para orientarte en las ciudades italianas necesitas dos habilidades clave:</p><ul><li><b>Indicaciones:</b> <i>Giri a destra</i> (gire a la derecha), <i>Giri a sinistra</i> (gire a la izquierda), <i>Vada sempre dritto</i> (siga todo recto), <i>Attraversi la piazza</i> (cruce la plaza).</li><li><b>Pronombres de objeto directo (lo, la, li, le):</b> sustituyen un sustantivo para no repetirlo: <i>Compri il pane? Sì, <b>lo</b> compro. Mangi le mele? Sì, <b>le</b> mangio.</i></li><li><b>El partitivo "NE":</b> sustituye una cantidad: <i>Quanti caffè bevi? <b>Ne</b> bevo due al giorno!</i> (Me tomo dos al día).</li></ul>', fr: '<p>Pour se repérer dans les villes italiennes, il faut deux compétences clés :</p><ul><li><b>Les indications :</b> <i>Giri a destra</i> (tournez à droite), <i>Giri a sinistra</i> (tournez à gauche), <i>Vada sempre dritto</i> (allez tout droit), <i>Attraversi la piazza</i> (traversez la place).</li><li><b>Les pronoms COD (lo, la, li, le) :</b> ils remplacent un nom pour éviter la répétition : <i>Compri il pane? Sì, <b>lo</b> compro. Mangi le mele? Sì, <b>le</b> mangio.</i></li><li><b>Le partitif "NE" :</b> il remplace une quantité : <i>Quanti caffè bevi? <b>Ne</b> bevo due al giorno!</i> (J’en bois deux par jour).</li></ul>', de: '<p>Um dich in italienischen Städten zurechtzufinden, brauchst du zwei Fähigkeiten:</p><ul><li><b>Wegbeschreibungen:</b> <i>Giri a destra</i> (biegen Sie rechts ab), <i>Giri a sinistra</i> (biegen Sie links ab), <i>Vada sempre dritto</i> (gehen Sie immer geradeaus), <i>Attraversi la piazza</i> (überqueren Sie den Platz).</li><li><b>Direkte Objektpronomen (lo, la, li, le):</b> Sie ersetzen ein Substantiv, um Wiederholungen zu vermeiden: <i>Compri il pane? Sì, <b>lo</b> compro. Mangi le mele? Sì, <b>le</b> mangio.</i></li><li><b>Das partitive "NE":</b> Es ersetzt eine Menge: <i>Quanti caffè bevi? <b>Ne</b> bevo due al giorno!</i> (Ich trinke zwei davon am Tag).</li></ul>'}
      }
    ],
    quiz: [
      {
        q: {en: 'Which pronoun correctly completes: "Hai visto Maria? Sì, ___ ho vista ieri in centro."', it: 'Quale pronome completa correttamente: "Hai visto Maria? Sì, ___ ho vista ieri in centro."', pt: 'Qual pronome completa corretamente: "Hai visto Maria? Sì, ___ ho vista ieri in centro."', es: '¿Qué pronombre completa correctamente: "Hai visto Maria? Sì, ___ ho vista ieri in centro."?', fr: 'Quel pronom complète correctement : "Hai visto Maria? Sì, ___ ho vista ieri in centro." ?', de: 'Welches Pronomen ergänzt richtig: "Hai visto Maria? Sì, ___ ho vista ieri in centro."?'},
        a: [
          ['l’ (la)', 'l’ (la)'],
          ['gli', 'gli'],
          ['ne', 'ne'],
          ['ci', 'ci']
        ],
        why: {en: '"Maria" is a feminine singular direct object. In the past with avere, "la" elides with ho ("l’ho vista") and the participle agrees with the direct pronoun.', it: '"Maria" è oggetto diretto femminile singolare. Con il passato di avere, "la" si elide in "l’" e il participio concorda (l’ho vista).', pt: '"Maria" é um objeto direto feminino singular. No passado com avere, "la" sofre elisão com ho ("l’ho vista") e o particípio concorda com o pronome direto.', es: '"Maria" es un objeto directo femenino singular. En pasado con avere, "la" se apostrofa con ho ("l’ho vista") y el participio concuerda con el pronombre directo.', fr: '"Maria" est un COD féminin singulier. Au passé avec avere, "la" s’élide devant ho ("l’ho vista") et le participe s’accorde avec le pronom direct.', de: '"Maria" ist ein weibliches direktes Objekt im Singular. In der Vergangenheit mit avere wird "la" vor ho apostrophiert ("l’ho vista"), und das Partizip richtet sich nach dem direkten Pronomen.'}
      },
      {
        q: {en: 'How do you say "I will take three of them, thank you" when buying oranges?', it: 'Come dici "I will take three of them, thank you" quando compri delle arance?', pt: 'Como se diz "Vou levar três, obrigado" ao comprar laranjas?', es: '¿Cómo se dice "Me llevo tres, gracias" al comprar naranjas?', fr: 'Comment dit-on "J’en prends trois, merci" en achetant des oranges ?', de: 'Wie sagt man "Ich nehme drei davon, danke", wenn man Orangen kauft?'},
        a: [
          ['Ne prendo tre, grazie.', 'Ne prendo tre, grazie.'],
          ['Li prendo tre, grazie.', 'Li prendo tre, grazie.'],
          ['Prendo essi tre, grazie.', 'Prendo essi tre, grazie.'],
          ['Ci prendo tre, grazie.', 'Ci prendo tre, grazie.']
        ],
        why: {en: 'The particle "ne" specifies a part or quantity of a previously mentioned item ("arance").', it: 'La particella "ne" si usa per esprimere una quantità di qualcosa citato in precedenza.', pt: 'A partícula "ne" indica uma parte ou quantidade de algo já mencionado ("arance").', es: 'La partícula "ne" indica una parte o cantidad de algo ya mencionado ("arance").', fr: 'La particule "ne" désigne une partie ou une quantité de quelque chose déjà mentionné ("arance").', de: 'Die Partikel "ne" bezeichnet einen Teil oder eine Menge von etwas bereits Genanntem ("arance").'}
      }
    ]
  },

  // =========================================================================
  // CEFR B1 - INTERMEDIO (INTERMEDIATE)
  // Arc 2: Futuro, Condizionale di Cortesia e Congiuntivo
  // =========================================================================
  {
    id: 'it_b1m1',
    arc: 2,
    sec: 'B1.1',
    pages: '100–118',
    hue: 350,
    horns: 2,
    eyes: 4,
    title: [
      'Progetti e Cortesia: Futuro e Condizionale Presente',
      'Progetti e Cortesia: Futuro e Condizionale Presente'
    ],
    topic: {en: 'Future Semplice (predictions, plans, hypotheses) and Condizionale Presente (polite requests, wishes, hypothetical situations)', it: 'Futuro semplice (previsioni, progetti, ipotesi) e condizionale presente (cortesia, desideri, situazioni ipotetiche)', pt: 'Futuro semplice (previsões, planos, hipóteses) e condizionale presente (pedidos educados, desejos, situações hipotéticas)', es: 'Futuro semplice (predicciones, planes, hipótesis) y condizionale presente (peticiones corteses, deseos, situaciones hipotéticas)', fr: 'Futuro semplice (prévisions, projets, hypothèses) et condizionale presente (demandes polies, souhaits, situations hypothétiques)', de: 'Futuro semplice (Vorhersagen, Pläne, Vermutungen) und Condizionale presente (höfliche Bitten, Wünsche, hypothetische Situationen)'},
    demon: {en: 'Uncertainty Mirage', it: 'Miraggio dell’Incertezza', pt: 'Miragem da Incerteza', es: 'Espejismo de la Incertidumbre', fr: 'Mirage de l’Incertitude', de: 'Trugbild der Ungewissheit'},
    lore: {en: 'The Mirage clouds future aspirations with doubt. Master the future tense and polite conditional to carve out your destiny!', it: 'Il Miraggio offusca i progetti futuri con il dubbio. Padroneggia il futuro e il condizionale di cortesia per tracciare il tuo destino!', pt: 'A Miragem cobre de dúvidas as aspirações para o futuro. Domine o futuro e o condicional de cortesia para traçar o seu destino!', es: 'El Espejismo nubla de dudas las aspiraciones futuras. ¡Domina el futuro y el condicional de cortesía para forjar tu destino!', fr: 'Le Mirage voile de doutes les aspirations futures. Maîtrise le futur et le conditionnel de politesse pour tracer ton destin !', de: 'Das Trugbild trübt Zukunftsträume mit Zweifeln. Beherrsche das Futur und den höflichen Konditional, um dein Schicksal selbst zu gestalten!'},
    clearedMsg: {en: 'Magnifico! You express future dreams, formulate polite proposals, and converse at B1 level with natural elegance.', it: 'Magnifico! Ora esprimi sogni futuri, formuli proposte cortesi e dialoghi al livello B1 con eleganza naturale.', pt: 'Magnifico! Você expressa sonhos para o futuro, faz propostas educadas e conversa no nível B1 com elegância natural.', es: 'Magnifico! Expresas sueños de futuro, formulas propuestas corteses y conversas a nivel B1 con elegancia natural.', fr: 'Magnifico ! Tu exprimes tes rêves d’avenir, tu formules des propositions polies et tu converses au niveau B1 avec une élégance naturelle.', de: 'Magnifico! Du drückst Zukunftsträume aus, formulierst höfliche Vorschläge und unterhältst dich auf B1-Niveau mit natürlicher Eleganz.'},
    tech: {en: 'Future Prism of Florence', it: 'Prisma del Futuro di Firenze', pt: 'Prisma do Futuro de Florença', es: 'Prisma del Futuro de Florencia', fr: 'Prisme du Futur de Florence', de: 'Zukunftsprisma von Florenz'},
    scenes: [
      {
        who: 's',
        text: {en: '<p>Welcome to <b>CEFR B1 (Intermedio)</b>! At this level, you move beyond basic transactions into nuanced, polite human relationships.</p><ul><li><b>Futuro Semplice (-rò, -rai, -rà, -remo, -rete, -ranno):</b> Used for future actions (<i>L’anno prossimo viaggerò in Italia</i>) and hypotheses/epistemic probability (<i>Che ore sono? Saranno le tre</i> = It must be around 3).</li><li><b>Condizionale Presente (-rei, -resti, -rebbe, -remmo, -reste, -rebbero):</b> Used for polite requests (<i>Vorrei un’informazione</i>, <i>Potrebbe aiutarmi?</i>) and personal desires (<i>Mi piacerebbe vivere a Firenze</i>).</li></ul>', it: '<p>Benvenuto al <b>QCER B1 (Intermedio)</b>! A questo livello superi le semplici transazioni pratiche ed entri nelle sfumature delle relazioni umane e della cortesia.</p><ul><li><b>Futuro Semplice:</b> Per progetti futuri (<i>L’anno prossimo viaggerò in Italia</i>) e ipotesi nel presente (<i>Saranno le tre</i>).</li><li><b>Condizionale Presente:</b> Per richieste cortesi (<i>Vorrei un’informazione</i>, <i>Potrebbe aiutarmi?</i>) e desideri personali (<i>Mi piacerebbe vivere a Firenze</i>).</li></ul>', pt: '<p>Bem-vindo ao <b>QECR B1 (Intermedio)</b>! Neste nível, você vai além das trocas básicas e entra em relações humanas mais sutis e educadas.</p><ul><li><b>Futuro Semplice (-rò, -rai, -rà, -remo, -rete, -ranno):</b> usado para ações futuras (<i>L’anno prossimo viaggerò in Italia</i>) e para hipóteses/probabilidade (<i>Che ore sono? Saranno le tre</i> = Devem ser umas três horas).</li><li><b>Condizionale Presente (-rei, -resti, -rebbe, -remmo, -reste, -rebbero):</b> usado para pedidos educados (<i>Vorrei un’informazione</i>, <i>Potrebbe aiutarmi?</i>) e desejos pessoais (<i>Mi piacerebbe vivere a Firenze</i>).</li></ul>', es: '<p>¡Bienvenido al <b>MCER B1 (Intermedio)</b>! En este nivel vas más allá de los intercambios básicos y entras en relaciones humanas más matizadas y corteses.</p><ul><li><b>Futuro Semplice (-rò, -rai, -rà, -remo, -rete, -ranno):</b> se usa para acciones futuras (<i>L’anno prossimo viaggerò in Italia</i>) y para hipótesis o probabilidad (<i>Che ore sono? Saranno le tre</i> = Serán las tres).</li><li><b>Condizionale Presente (-rei, -resti, -rebbe, -remmo, -reste, -rebbero):</b> se usa para peticiones corteses (<i>Vorrei un’informazione</i>, <i>Potrebbe aiutarmi?</i>) y deseos personales (<i>Mi piacerebbe vivere a Firenze</i>).</li></ul>', fr: '<p>Bienvenue au <b>CECRL B1 (Intermedio)</b> ! À ce niveau, tu dépasses les échanges de base pour entrer dans des relations humaines plus nuancées et polies.</p><ul><li><b>Futuro Semplice (-rò, -rai, -rà, -remo, -rete, -ranno) :</b> pour les actions futures (<i>L’anno prossimo viaggerò in Italia</i>) et les hypothèses ou probabilités (<i>Che ore sono? Saranno le tre</i> = Il doit être environ trois heures).</li><li><b>Condizionale Presente (-rei, -resti, -rebbe, -remmo, -reste, -rebbero) :</b> pour les demandes polies (<i>Vorrei un’informazione</i>, <i>Potrebbe aiutarmi?</i>) et les souhaits personnels (<i>Mi piacerebbe vivere a Firenze</i>).</li></ul>', de: '<p>Willkommen bei <b>GER B1 (Intermedio)</b>! Auf diesem Niveau gehst du über einfache Alltagssituationen hinaus und gestaltest feinere, höfliche Beziehungen.</p><ul><li><b>Futuro Semplice (-rò, -rai, -rà, -remo, -rete, -ranno):</b> für zukünftige Handlungen (<i>L’anno prossimo viaggerò in Italia</i>) und für Vermutungen (<i>Che ore sono? Saranno le tre</i> = Es wird wohl drei Uhr sein).</li><li><b>Condizionale Presente (-rei, -resti, -rebbe, -remmo, -reste, -rebbero):</b> für höfliche Bitten (<i>Vorrei un’informazione</i>, <i>Potrebbe aiutarmi?</i>) und persönliche Wünsche (<i>Mi piacerebbe vivere a Firenze</i>).</li></ul>'}
      }
    ],
    quiz: [
      {
        q: {en: 'Which sentence uses the polite conditional to ask a stranger for assistance on the train?', it: 'Quale frase usa il condizionale di cortesia per chiedere aiuto a un passeggero sul treno?', pt: 'Qual frase usa o condicional de cortesia para pedir ajuda a um desconhecido no trem?', es: '¿Qué frase usa el condicional de cortesía para pedir ayuda a un desconocido en el tren?', fr: 'Quelle phrase utilise le conditionnel de politesse pour demander de l’aide à un inconnu dans le train ?', de: 'Welcher Satz verwendet den höflichen Konditional, um im Zug einen Fremden um Hilfe zu bitten?'},
        a: [
          ['Scusi, potrebbe aiutarmi a sollevare questa valigia?', 'Scusi, potrebbe aiutarmi a sollevare questa valigia?'],
          ['Aiutami con la valigia subito!', 'Aiutami con la valigia subito!'],
          ['Devi prendere la mia valigia adesso.', 'Devi prendere la mia valigia adesso.'],
          ['Prendi la valigia se vuoi.', 'Prendi la valigia se vuoi.']
        ],
        why: {en: '"Potrebbe aiutarmi...?" uses the polite formal conditional of "potere" (could you please help me).', it: '"Potrebbe aiutarmi...?" usa il condizionale formale di cortesia del verbo potere.', pt: '"Potrebbe aiutarmi...?" usa o condicional formal de cortesia de "potere" (poderia me ajudar, por favor).', es: '"Potrebbe aiutarmi...?" usa el condicional formal de cortesía de "potere" (¿podría ayudarme, por favor?).', fr: '"Potrebbe aiutarmi...?" utilise le conditionnel de politesse formel de "potere" (pourriez-vous m’aider ?).', de: '"Potrebbe aiutarmi...?" verwendet den höflichen, förmlichen Konditional von "potere" (könnten Sie mir bitte helfen?).'}
      },
      {
        q: {en: 'What is the first-person plural future of the verb "partire" (we will depart)?', it: 'Qual è la prima persona plurale del futuro del verbo "partire" (we will depart)?', pt: 'Qual é a primeira pessoa do plural do futuro do verbo "partire" (nós partiremos)?', es: '¿Cuál es la primera persona del plural del futuro del verbo "partire" (nosotros partiremos)?', fr: 'Quelle est la première personne du pluriel du futur du verbe "partire" (nous partirons) ?', de: 'Wie lautet die 1. Person Plural Futur des Verbs "partire" (wir werden abreisen)?'},
        a: [
          ['Noi partiremo', 'Noi partiremo'],
          ['Noi partiremmo', 'Noi partiremmo'],
          ['Noi partiamo', 'Noi partiamo'],
          ['Noi partiranno', 'Noi partiranno']
        ],
        why: {en: 'Future endings have a single "m": partiremo. Double "mm" (partiremmo) is conditional!', it: 'Il futuro semplice ha una sola "m" (partiremo). La doppia "mm" (partiremmo) appartiene al condizionale presente.', pt: 'As terminações do futuro têm um só "m": partiremo. O duplo "mm" (partiremmo) é condicional!', es: 'Las terminaciones del futuro llevan una sola "m": partiremo. ¡La doble "mm" (partiremmo) es condicional!', fr: 'Les terminaisons du futur n’ont qu’un seul "m" : partiremo. Le double "mm" (partiremmo), c’est le conditionnel !', de: 'Die Futurendungen haben nur ein "m": partiremo. Doppeltes "mm" (partiremmo) ist Konditional!'}
      }
    ],
    learning: {
      version: 1,
      objectives: [
        {
          id: 'obj-it-b1m1-1',
          description: {en: 'Express future plans and hypotheses using regular and irregular futuro semplice.', it: 'Esprimere progetti futuri e ipotesi usando il futuro semplice regolare e irregolare.', pt: 'Expressar planos e hipóteses sobre o futuro usando o futuro semplice regular e irregular.', es: 'Expresar planes e hipótesis sobre el futuro con el futuro semplice regular e irregular.', fr: 'Exprimer des projets et des hypothèses avec le futuro semplice régulier et irrégulier.', de: 'Zukunftspläne und Vermutungen mit dem regelmäßigen und unregelmäßigen Futuro semplice ausdrücken.'},
        },
        {
          id: 'obj-it-b1m1-2',
          description: {en: 'Formulate courteous requests and express personal aspirations with condizionale presente.', it: 'Formulare richieste cortesi ed esprimere desideri personali con il condizionale presente.', pt: 'Formular pedidos educados e expressar aspirações pessoais com o condizionale presente.', es: 'Formular peticiones corteses y expresar aspiraciones personales con el condizionale presente.', fr: 'Formuler des demandes courtoises et exprimer des aspirations personnelles avec le condizionale presente.', de: 'Höfliche Bitten formulieren und persönliche Wünsche mit dem Condizionale presente ausdrücken.'}
        }
      ],
      concepts: [
        {
          id: 'concept-it-futuro-condizionale',
          title: {en: 'Distinguishing Futuro (-remo) and Condizionale (-remmo)', it: 'Distinguere Futuro (-remo) e Condizionale (-remmo)', pt: 'Distinguir futuro (-remo) e condizionale (-remmo)', es: 'Distinguir futuro (-remo) y condizionale (-remmo)', fr: 'Distinguer futuro (-remo) et condizionale (-remmo)', de: 'Futuro (-remo) und Condizionale (-remmo) unterscheiden'},
          explanation: {en: 'One of the most famous traps in Italian grammar! In the "noi" form: ONE M is FUTURE (Noi andremo = We will go). TWO M’s is CONDITIONAL (Noi andremmo = We would go). Listen carefully to the geminate double-M sound!', it: 'Uno dei tranelli più celebri dell’italiano! Alla forma "noi": UNA M indica il FUTURO (Noi andremo). LA DOPPIA M indica il CONDIZIONALE (Noi andremmo). Ascolta la differenza di pronuncia!', pt: 'Uma das armadilhas mais famosas da gramática italiana! Na forma "noi": UM M é FUTURO (Noi andremo = Nós iremos). DOIS M é CONDICIONAL (Noi andremmo = Nós iríamos). Ouça com atenção o som do M duplo!', es: '¡Una de las trampas más famosas de la gramática italiana! En la forma "noi": UNA M es FUTURO (Noi andremo = Iremos). DOS M es CONDICIONAL (Noi andremmo = Iríamos). ¡Escucha con atención el sonido de la M doble!', fr: 'L’un des pièges les plus célèbres de la grammaire italienne ! À la forme "noi" : UN SEUL M, c’est le FUTUR (Noi andremo = Nous irons). DEUX M, c’est le CONDITIONNEL (Noi andremmo = Nous irions). Écoute bien le son du M double !', de: 'Eine der bekanntesten Fallen der italienischen Grammatik! In der noi-Form gilt: EIN M ist FUTUR (Noi andremo = Wir werden gehen). ZWEI M sind KONDITIONAL (Noi andremmo = Wir würden gehen). Hör genau auf das doppelte M!'},
          workedExample: {
            scenario: {en: 'Politely inviting a colleague to a business lunch.', it: 'Invitare con cortesia un collega a un pranzo di lavoro.', pt: 'Convidar educadamente um colega para um almoço de negócios.', es: 'Invitar con cortesía a un compañero a una comida de trabajo.', fr: 'Inviter poliment un collègue à un déjeuner d’affaires.', de: 'Einen Kollegen höflich zu einem Geschäftsessen einladen.'},
            steps: [
              {en: 'Step 1: Choose polite conditional formula: "Le andrebbe di..." or "Vorrebbe...".', it: 'Passo 1: Scegli la formula di cortesia al condizionale.', pt: 'Passo 1: Escolha uma fórmula de cortesia no condicional: "Le andrebbe di..." ou "Vorrebbe...".', es: 'Paso 1: Elige una fórmula de cortesía en condicional: "Le andrebbe di..." o "Vorrebbe...".', fr: 'Étape 1 : choisis une formule de politesse au conditionnel : "Le andrebbe di..." ou "Vorrebbe...".', de: 'Schritt 1: Wähle eine höfliche Formel im Konditional: "Le andrebbe di..." oder "Vorrebbe...".'},
              {en: 'Step 2: Add the proposed activity: "pranzare insieme oggi?".', it: 'Passo 2: Aggiungi l’attività proposta.', pt: 'Passo 2: Acrescente a atividade proposta: "pranzare insieme oggi?".', es: 'Paso 2: Añade la actividad propuesta: "pranzare insieme oggi?".', fr: 'Étape 2 : ajoute l’activité proposée : "pranzare insieme oggi?".', de: 'Schritt 2: Füge die vorgeschlagene Aktivität hinzu: "pranzare insieme oggi?".'}
            ],
            answer: ['"Le andrebbe di pranzare insieme oggi per discutere il progetto?"', '"Le andrebbe di pranzare insieme oggi per discutere il progetto?"']
          }
        }
      ],
      summary: [
        {en: 'Futuro: -rò, -rai, -rà, -remo, -rete, -ranno (One "m" for noi).', it: 'Futuro: una sola "m" per noi (-remo).', pt: 'Futuro: -rò, -rai, -rà, -remo, -rete, -ranno (um só "m" para noi).', es: 'Futuro: -rò, -rai, -rà, -remo, -rete, -ranno (una sola "m" para noi).', fr: 'Futuro : -rò, -rai, -rà, -remo, -rete, -ranno (un seul "m" pour noi).', de: 'Futuro: -rò, -rai, -rà, -remo, -rete, -ranno (ein "m" bei noi).'},
        {en: 'Condizionale: -rei, -resti, -rebbe, -remmo, -reste, -rebbero (Double "mm" for noi).', it: 'Condizionale: doppia "mm" per noi (-remmo).', pt: 'Condizionale: -rei, -resti, -rebbe, -remmo, -reste, -rebbero (duplo "mm" para noi).', es: 'Condizionale: -rei, -resti, -rebbe, -remmo, -reste, -rebbero (doble "mm" para noi).', fr: 'Condizionale : -rei, -resti, -rebbe, -remmo, -reste, -rebbero (double "mm" pour noi).', de: 'Condizionale: -rei, -resti, -rebbe, -remmo, -reste, -rebbero (doppeltes "mm" bei noi).'}
      ]
    }
  },

  {
    id: 'it_b1m2',
    arc: 2,
    sec: 'B1.2',
    pages: '119–140',
    hue: 330,
    horns: 3,
    eyes: 4,
    title: [
      'Opinioni e Narrazione: Il Congiuntivo e i Doppi Pronomi',
      'Opinioni e Narrazione: Il Congiuntivo e i Doppi Pronomi'
    ],
    topic: {en: 'Present Subjunctive for expressing opinions and emotions (Penso che, Credo che, Spero che), and combined pronouns (me lo, glielo)', it: 'Il congiuntivo presente per opinioni ed emozioni (Penso che, Credo che, Spero che) e pronomi combinati (me lo, glielo)', pt: 'Congiuntivo presente para expressar opiniões e emoções (Penso che, Credo che, Spero che) e pronomes combinados (me lo, glielo)', es: 'Congiuntivo presente para expresar opiniones y emociones (Penso che, Credo che, Spero che) y pronombres combinados (me lo, glielo)', fr: 'Congiuntivo presente pour exprimer opinions et émotions (Penso che, Credo che, Spero che) et pronoms combinés (me lo, glielo)', de: 'Congiuntivo presente, um Meinungen und Gefühle auszudrücken (Penso che, Credo che, Spero che), und kombinierte Pronomen (me lo, glielo)'},
    demon: {en: 'Chimera of Subjunctive', it: 'Chimera del Congiuntivo', pt: 'Quimera do Subjuntivo', es: 'Quimera del Subjuntivo', fr: 'Chimère du Subjonctif', de: 'Chimäre des Konjunktivs'},
    lore: {en: 'The fearsome Chimera challenges anyone who dares express personal truth. Tame it by harnessing the subjunctive mood and fluid double pronouns!', it: 'La temibile Chimera sfida chiunque provi a esprimere la propria verità. Addomesticala padroneggiando il congiuntivo e i doppi pronomi!', pt: 'A temível Quimera desafia quem ousa expressar a sua verdade pessoal. Dome-a dominando o modo subjuntivo e os pronomes duplos com fluidez!', es: 'La temible Quimera desafía a quien se atreve a expresar su verdad personal. ¡Dómala dominando el modo subjuntivo y los pronombres dobles con fluidez!', fr: 'La redoutable Chimère défie quiconque ose exprimer sa vérité personnelle. Dompte-la en maîtrisant le subjonctif et les pronoms doubles avec aisance !', de: 'Die furchterregende Chimäre fordert jeden heraus, der seine persönliche Wahrheit ausspricht. Zähme sie, indem du den Konjunktiv und die Doppelpronomen fließend beherrschst!'},
    clearedMsg: {en: 'Bravissimo! You have conquered CEFR B1! You hold intelligent conversations, discuss opinions, and write with sophisticated style.', it: 'Bravissimo! Hai conquistato il QCER B1! Sostieni conversazioni stimolanti, esprimi opinioni e ti esprimi con eleganza.', pt: 'Bravissimo! Você conquistou o QECR B1! Você mantém conversas inteligentes, discute opiniões e escreve com estilo sofisticado.', es: 'Bravissimo! ¡Has conquistado el MCER B1! Mantienes conversaciones inteligentes, debates opiniones y escribes con un estilo sofisticado.', fr: 'Bravissimo ! Tu as conquis le CECRL B1 ! Tu mènes des conversations intelligentes, tu débats d’opinions et tu écris avec un style raffiné.', de: 'Bravissimo! Du hast GER B1 gemeistert! Du führst kluge Gespräche, diskutierst Meinungen und schreibst mit anspruchsvollem Stil.'},
    tech: {en: 'Subjunctive Harmony of Dante', it: 'Armonia del Congiuntivo di Dante', pt: 'Harmonia Subjuntiva de Dante', es: 'Armonía Subjuntiva de Dante', fr: 'Harmonie Subjonctive de Dante', de: 'Konjunktiv-Harmonie Dantes'},
    scenes: [
      {
        who: 's',
        text: {en: '<p>The crown jewel of Italian expression: the <b>Congiuntivo (Subjunctive)</b>! While the Indicativo expresses objective facts (<i>So che sei qui</i>), the Congiuntivo expresses the world of the mind: opinions, feelings, doubts, hopes, and desires.</p><ul><li><b>Trigger phrases:</b> <i>Penso che...</i>, <i>Credo che...</i>, <i>Dubito che...</i>, <i>Spero che...</i>, <i>È necessario che...</i></li><li><b>Present Subjunctive of ESSERE:</b> <i>io sia, tu sia, lui/lei sia, noi siamo, voi siate, loro siano</i>.</li><li><b>Present Subjunctive of AVERE:</b> <i>io abbia, tu abbia, lui/lei abbia, noi abbiamo, voi abbiate, loro abbiano</i>.</li><li><b>Combined Pronouns:</b> When indirect (mi, ti, gli) meets direct (lo, la, li, le), "i" becomes "e": <i>me lo dai? glielo dico io!</i></li></ul>', it: '<p>La gemma più luminosa dell’italiano: il <b>Congiuntivo</b>! Se l’indicativo esprime la certezza dei fatti (<i>So che sei qui</i>), il congiuntivo dà voce al mondo interiore: opinioni, emozioni, dubbi, speranze e desideri.</p><ul><li><b>Frasi che lo reggono:</b> <i>Penso che...</i>, <i>Credo che...</i>, <i>Dubito che...</i>, <i>Spero che...</i></li><li><b>Congiuntivo di ESSERE:</b> <i>che io sia, che tu sia, che lui sia, che noi siamo, che voi siate, che loro siano</i>.</li><li><b>Congiuntivo di AVERE:</b> <i>che io abbia, che tu abbia, che lui abbia, che noi abbiamo, che voi abbiate, che loro abbiano</i>.</li><li><b>Pronomi Combinati:</b> <i>me lo dai? glielo spiego io!</i></li></ul>', pt: '<p>A joia da coroa da expressão italiana: o <b>Congiuntivo (subjuntivo)</b>! Enquanto o indicativo expressa fatos objetivos (<i>So che sei qui</i>), o congiuntivo expressa o mundo da mente: opiniões, sentimentos, dúvidas, esperanças e desejos.</p><ul><li><b>Expressões que o exigem:</b> <i>Penso che...</i>, <i>Credo che...</i>, <i>Dubito che...</i>, <i>Spero che...</i>, <i>È necessario che...</i></li><li><b>Congiuntivo presente de ESSERE:</b> <i>io sia, tu sia, lui/lei sia, noi siamo, voi siate, loro siano</i>.</li><li><b>Congiuntivo presente de AVERE:</b> <i>io abbia, tu abbia, lui/lei abbia, noi abbiamo, voi abbiate, loro abbiano</i>.</li><li><b>Pronomes combinados:</b> quando um pronome indireto (mi, ti, gli) encontra um direto (lo, la, li, le), o "i" vira "e": <i>me lo dai? glielo dico io!</i></li></ul>', es: '<p>La joya de la corona de la expresión italiana: ¡el <b>Congiuntivo (subjuntivo)</b>! Mientras el indicativo expresa hechos objetivos (<i>So che sei qui</i>), el congiuntivo expresa el mundo de la mente: opiniones, sentimientos, dudas, esperanzas y deseos.</p><ul><li><b>Expresiones que lo exigen:</b> <i>Penso che...</i>, <i>Credo che...</i>, <i>Dubito che...</i>, <i>Spero che...</i>, <i>È necessario che...</i></li><li><b>Congiuntivo presente de ESSERE:</b> <i>io sia, tu sia, lui/lei sia, noi siamo, voi siate, loro siano</i>.</li><li><b>Congiuntivo presente de AVERE:</b> <i>io abbia, tu abbia, lui/lei abbia, noi abbiamo, voi abbiate, loro abbiano</i>.</li><li><b>Pronombres combinados:</b> cuando un pronombre indirecto (mi, ti, gli) se une a uno directo (lo, la, li, le), la "i" se convierte en "e": <i>me lo dai? glielo dico io!</i></li></ul>', fr: '<p>Le joyau de l’expression italienne : le <b>Congiuntivo (subjonctif)</b> ! Alors que l’indicatif exprime des faits objectifs (<i>So che sei qui</i>), le congiuntivo exprime le monde de la pensée : opinions, sentiments, doutes, espoirs et désirs.</p><ul><li><b>Expressions déclencheuses :</b> <i>Penso che...</i>, <i>Credo che...</i>, <i>Dubito che...</i>, <i>Spero che...</i>, <i>È necessario che...</i></li><li><b>Congiuntivo presente de ESSERE :</b> <i>io sia, tu sia, lui/lei sia, noi siamo, voi siate, loro siano</i>.</li><li><b>Congiuntivo presente de AVERE :</b> <i>io abbia, tu abbia, lui/lei abbia, noi abbiamo, voi abbiate, loro abbiano</i>.</li><li><b>Pronoms combinés :</b> quand un pronom indirect (mi, ti, gli) rencontre un pronom direct (lo, la, li, le), le "i" devient "e" : <i>me lo dai? glielo dico io!</i></li></ul>', de: '<p>Das Kronjuwel des italienischen Ausdrucks: der <b>Congiuntivo (Konjunktiv)</b>! Während der Indikativ objektive Tatsachen ausdrückt (<i>So che sei qui</i>), drückt der Congiuntivo die Welt der Gedanken aus: Meinungen, Gefühle, Zweifel, Hoffnungen und Wünsche.</p><ul><li><b>Auslösende Ausdrücke:</b> <i>Penso che...</i>, <i>Credo che...</i>, <i>Dubito che...</i>, <i>Spero che...</i>, <i>È necessario che...</i></li><li><b>Congiuntivo presente von ESSERE:</b> <i>io sia, tu sia, lui/lei sia, noi siamo, voi siate, loro siano</i>.</li><li><b>Congiuntivo presente von AVERE:</b> <i>io abbia, tu abbia, lui/lei abbia, noi abbiamo, voi abbiate, loro abbiano</i>.</li><li><b>Kombinierte Pronomen:</b> Trifft ein indirektes Pronomen (mi, ti, gli) auf ein direktes (lo, la, li, le), wird "i" zu "e": <i>me lo dai? glielo dico io!</i></li></ul>'}
      }
    ],
    quiz: [
      {
        q: {en: 'Which sentence correctly uses the subjunctive after an expression of opinion?', it: 'Quale frase usa correttamente il congiuntivo dopo un verbo di opinione?', pt: 'Qual frase usa corretamente o subjuntivo depois de uma expressão de opinião?', es: '¿Qué frase usa correctamente el subjuntivo después de una expresión de opinión?', fr: 'Quelle phrase emploie correctement le subjonctif après une expression d’opinion ?', de: 'Welcher Satz verwendet nach einem Meinungsausdruck richtig den Konjunktiv?'},
        a: [
          ['Penso che Marco sia una persona generosa.', 'Penso che Marco sia una persona generosa.'],
          ['Penso che Marco è una persona generosa.', 'Penso che Marco è una persona generosa.'],
          ['Penso che Marco sarà una persona generosa.', 'Penso che Marco sarà una persona generosa.'],
          ['Penso che Marco fosse una persona ieri.', 'Penso che Marco fosse una persona ieri.']
        ],
        why: {en: '"Penso che" expresses personal opinion and requires the subjunctive ("sia", not indicative "è").', it: '"Penso che" esprime un’opinione personale e richiede il congiuntivo presente ("sia").', pt: '"Penso che" expressa uma opinião pessoal e exige o subjuntivo ("sia", não o indicativo "è").', es: '"Penso che" expresa una opinión personal y exige el subjuntivo ("sia", no el indicativo "è").', fr: '"Penso che" exprime une opinion personnelle et exige le subjonctif ("sia", pas l’indicatif "è").', de: '"Penso che" drückt eine persönliche Meinung aus und verlangt den Konjunktiv ("sia", nicht den Indikativ "è").'}
      },
      {
        q: {en: 'How do you say "I will tell it to him / her" using a combined pronoun?', it: 'Come si dice "Lo dirò a lui / a lei" usando un pronome combinato?', pt: 'Como se diz "Eu vou dizer isso a ele / a ela" usando um pronome combinado?', es: '¿Cómo se dice "Se lo diré (a él / a ella)" usando un pronombre combinado?', fr: 'Comment dit-on "Je le lui dirai" avec un pronom combiné ?', de: 'Wie sagt man "Ich werde es ihm / ihr sagen" mit einem kombinierten Pronomen?'},
        a: [
          ['Glielo dirò domani.', 'Glielo dirò domani.'],
          ['Gli lo dirò domani.', 'Gli lo dirò domani.'],
          ['Le lo dirò domani.', 'Le lo dirò domani.'],
          ['Lo gli dirò domani.', 'Lo gli dirò domani.']
        ],
        why: {en: 'In Italian, "gli/le" + "lo" fuses into the single combined pronoun "glielo".', it: 'In italiano, l’unione di gli/le con lo dà origine al pronome combinato unico "glielo".', pt: 'Em italiano, "gli/le" + "lo" se fundem no pronome combinado único "glielo".', es: 'En italiano, "gli/le" + "lo" se funden en el pronombre combinado único "glielo".', fr: 'En italien, "gli/le" + "lo" fusionnent en un seul pronom combiné : "glielo".', de: 'Im Italienischen verschmelzen "gli/le" + "lo" zu dem einen kombinierten Pronomen "glielo".'}
      }
    ],
    learning: {
      version: 1,
      objectives: [
        {
          id: 'obj-it-b1m2-1',
          description: {en: 'Express subjective thoughts, doubts and wishes using the present subjunctive.', it: 'Esprimere pensieri soggettivi, dubbi e desideri usando il congiuntivo presente.', pt: 'Expressar pensamentos subjetivos, dúvidas e desejos usando o congiuntivo presente.', es: 'Expresar pensamientos subjetivos, dudas y deseos con el congiuntivo presente.', fr: 'Exprimer des pensées subjectives, des doutes et des souhaits avec le congiuntivo presente.', de: 'Subjektive Gedanken, Zweifel und Wünsche mit dem Congiuntivo presente ausdrücken.'},
        },
        {
          id: 'obj-it-b1m2-2',
          description: {en: 'Combine indirect and direct pronouns seamlessly in speech and writing.', it: 'Combinare pronomi indiretti e diretti in modo fluido nel parlato e nello scritto.', pt: 'Combinar pronomes indiretos e diretos com fluidez na fala e na escrita.', es: 'Combinar pronombres indirectos y directos con fluidez al hablar y al escribir.', fr: 'Combiner avec aisance pronoms indirects et directs à l’oral comme à l’écrit.', de: 'Indirekte und direkte Pronomen in Wort und Schrift flüssig kombinieren.'}
        }
      ],
      concepts: [
        {
          id: 'concept-it-congiuntivo-opinione',
          title: {en: 'The Subjunctive of Opinion & Emotion', it: 'Il Congiuntivo di Opinione ed Emozione', pt: 'O subjuntivo de opinião e emoção', es: 'El subjuntivo de opinión y emoción', fr: 'Le subjonctif d’opinion et d’émotion', de: 'Der Konjunktiv der Meinung und des Gefühls'},
          explanation: {en: 'Use the subjunctive whenever the main clause expresses: Opinion (Penso che, Credo che, Ritengo che), Doubt (Dubito che, Non sono sicuro che), Emotion (Sono felice che, Mi dispiace che), or Hope (Spero che, Mi auguro che).', it: 'Il congiuntivo si usa quando la frase principale esprime: Opinione (Penso che), Dubbio (Dubito che), Sentimento (Sono felice che) o Speranza (Spero che).', pt: 'Use o subjuntivo sempre que a oração principal expressar: opinião (Penso che, Credo che, Ritengo che), dúvida (Dubito che, Non sono sicuro che), emoção (Sono felice che, Mi dispiace che) ou esperança (Spero che, Mi auguro che).', es: 'Usa el subjuntivo siempre que la oración principal exprese: opinión (Penso che, Credo che, Ritengo che), duda (Dubito che, Non sono sicuro che), emoción (Sono felice che, Mi dispiace che) o esperanza (Spero che, Mi auguro che).', fr: 'Utilise le subjonctif chaque fois que la proposition principale exprime : une opinion (Penso che, Credo che, Ritengo che), un doute (Dubito che, Non sono sicuro che), une émotion (Sono felice che, Mi dispiace che) ou un espoir (Spero che, Mi auguro che).', de: 'Verwende den Konjunktiv immer dann, wenn der Hauptsatz ausdrückt: Meinung (Penso che, Credo che, Ritengo che), Zweifel (Dubito che, Non sono sicuro che), Gefühl (Sono felice che, Mi dispiace che) oder Hoffnung (Spero che, Mi auguro che).'},
          workedExample: {
            scenario: {en: 'Sharing an opinion on the best strategy for the Academy hunt.', it: 'Condividere un’opinione sulla strategia migliore per la caccia nell’Accademia.', pt: 'Dar uma opinião sobre a melhor estratégia para a caçada da Academia.', es: 'Dar una opinión sobre la mejor estrategia para la caza de la Academia.', fr: 'Donner son avis sur la meilleure stratégie pour la chasse de l’Académie.', de: 'Eine Meinung zur besten Strategie für die Jagd der Akademie äußern.'},
            steps: [
              {en: 'Step 1: Start with opinion verb: "Credo che...".', it: 'Passo 1: Inizia col verbo di opinione: "Credo che...".', pt: 'Passo 1: Comece com um verbo de opinião: "Credo che...".', es: 'Paso 1: Empieza con un verbo de opinión: "Credo che...".', fr: 'Étape 1 : commence par un verbe d’opinion : "Credo che...".', de: 'Schritt 1: Beginne mit einem Meinungsverb: "Credo che...".'},
              {en: 'Step 2: Subordinate clause verb is "essere" (subjunctive form: "sia").', it: 'Passo 2: Il verbo subordinato va al congiuntivo presente: "sia".', pt: 'Passo 2: O verbo da oração subordinada é "essere" (forma do subjuntivo: "sia").', es: 'Paso 2: El verbo de la subordinada es "essere" (forma de subjuntivo: "sia").', fr: 'Étape 2 : le verbe de la subordonnée est "essere" (forme au subjonctif : "sia").', de: 'Schritt 2: Das Verb im Nebensatz ist "essere" (Konjunktivform: "sia").'}
            ],
            answer: ['"Credo che questa sia la strategia più efficace."', '"Credo che questa sia la strategia più efficace."']
          }
        }
      ],
      summary: [
        {en: 'Use congiuntivo presente for opinions, emotions and uncertainty.', it: 'Usa il congiuntivo per opinioni, emozioni e incertezza.', pt: 'Use o congiuntivo presente para opiniões, emoções e incerteza.', es: 'Usa el congiuntivo presente para opiniones, emociones e incertidumbre.', fr: 'Utilise le congiuntivo presente pour les opinions, les émotions et l’incertitude.', de: 'Verwende den Congiuntivo presente für Meinungen, Gefühle und Unsicherheit.'},
        {en: 'Combined pronouns: mi+lo=me lo, ti+la=te la, gli/le+lo=glielo.', it: 'Pronomi combinati: mi+lo=me lo, ti+la=te la, gli/le+lo=glielo.', pt: 'Pronomes combinados: mi+lo=me lo, ti+la=te la, gli/le+lo=glielo.', es: 'Pronombres combinados: mi+lo=me lo, ti+la=te la, gli/le+lo=glielo.', fr: 'Pronoms combinés : mi+lo=me lo, ti+la=te la, gli/le+lo=glielo.', de: 'Kombinierte Pronomen: mi+lo=me lo, ti+la=te la, gli/le+lo=glielo.'}
      ]
    }
  }
];
