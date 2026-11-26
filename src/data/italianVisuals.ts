import type { Language } from '../types';
import { C, T, anim, frame } from './sciViz';

const L6 = (map: Partial<Record<Language, string>> & { en: string; it: string }, lang: Language): string =>
  map[lang] ?? map.en;

type VisualOut = { title: string; caption: string; svg: string };

const H = 230;

function cefrGreetingVisual(lang: Language): VisualOut {
  return {
    title: L6({ en: 'Formal vs Informal Greetings', it: 'Saluti formali e informali', pt: 'Cumprimentos formais e informais', es: 'Saludos formales e informales', fr: 'Salutations formelles et informelles', de: 'Förmliche vs. informelle Begrüßung' }, lang),
    caption: L6({ en: 'Choose tu (Ciao!) with friends and Lei (Buongiorno!) in polite settings', it: 'Usa il tu (Ciao!) con gli amici e il Lei (Buongiorno!) in contesti formali', pt: 'Use tu (Ciao!) com amigos e Lei (Buongiorno!) em situações formais', es: 'Usa tu (Ciao!) con amigos y Lei (Buongiorno!) en contextos formales', fr: 'Utilise tu (Ciao !) avec tes amis et Lei (Buongiorno !) en contexte formel', de: 'Verwende tu (Ciao!) mit Freunden und Lei (Buongiorno!) in förmlichen Situationen' }, lang),
    svg: frame(
      'Formal and informal Italian greeting bubbles',
      `<rect x="34" y="42" width="255" height="118" rx="18" fill="${C.data}" fill-opacity="0.14" stroke="${C.data}" stroke-width="3.5"/>
      ${T(161, 86, 'Ciao! Come ti chiami?', { size: 22, fill: C.data, weight: 800 })}
      ${T(161, 126, 'Informal · tu', { size: 18, fill: C.muted, weight: 700 })}
      <rect x="351" y="42" width="255" height="118" rx="18" fill="${C.gold}" fill-opacity="0.14" stroke="${C.gold}" stroke-width="3.5"/>
      ${T(478, 86, 'Buongiorno, come si chiama?', { size: 19, fill: C.gold, weight: 800 })}
      ${T(478, 126, 'Formal · Lei', { size: 18, fill: C.muted, weight: 700 })}
      <circle cx="320" cy="101" r="10" fill="${C.good}">${anim('cx', '296;344;296', 3.4, 0)}</circle>
      ${T(320, 198, 'Mi chiamo Marco · Piacere!', { size: 22, fill: C.good, weight: 800 })}`,
      '',
      H
    )
  };
}

function cefrNumbersCalendarVisual(lang: Language): VisualOut {
  return {
    title: L6({ en: 'Numbers, Days & Calendar', it: 'Numeri, giorni e calendario', pt: 'Números, dias e calendário', es: 'Números, días y calendario', fr: 'Nombres, jours et calendrier', de: 'Zahlen, Tage und Kalender' }, lang),
    caption: L6({ en: 'Reading prices, days of the week and clock times aloud in Italian', it: 'Leggere prezzi, giorni della settimana e orari in italiano', pt: 'Ler preços, dias da semana e horários em italiano', es: 'Leer precios, días de la semana y horas en italiano', fr: 'Lire les prix, les jours de la semaine et l’heure en italien', de: 'Preise, Wochentage und Uhrzeiten auf Italienisch lesen' }, lang),
    svg: frame(
      'Italian calendar days and Euro price tag',
      `${['LUN', 'MAR', 'MER', 'GIO', 'VEN']
        .map((day, i) => {
          const x = 44 + i * 74;
          return `<rect x="${x}" y="44" width="64" height="86" rx="10" fill="${i === 2 ? C.good : C.data}" fill-opacity="${i === 2 ? 0.25 : 0.12}" stroke="${i === 2 ? C.good : C.data}" stroke-width="2.5"/>
          ${T(x + 32, 78, day, { size: 17, fill: C.text, weight: 800 })}
          ${T(x + 32, 110, String(10 + i), { size: 22, fill: i === 2 ? C.good : C.data, weight: 800 })}`;
        })
        .join('')}
      <rect x="430" y="44" width="168" height="122" rx="16" fill="${C.gold}" fill-opacity="0.14" stroke="${C.gold}" stroke-width="3"/>
      ${T(514, 92, '€ 12,50', { size: 30, fill: C.gold, weight: 800 })}
      ${T(514, 134, 'dodici e cinquanta', { size: 16, fill: C.text, weight: 700 })}
      <circle cx="76" cy="154" r="7" fill="${C.ember}">${anim('cx', '76;372;76', 4.6, 0)}</circle>`,
      '',
      H
    )
  };
}

function cefrEssereAvereVisual(lang: Language): VisualOut {
  return {
    title: L6({ en: 'Essere, Avere & Family', it: 'Essere, Avere e la famiglia', pt: 'Essere, Avere e a família', es: 'Essere, Avere y la familia', fr: 'Essere, Avere et la famille', de: 'Essere, Avere und die Familie' }, lang),
    caption: L6({ en: 'Use essere for identity/origin and avere for age and family relationships', it: 'Usa essere per identità/origine e avere per età e famiglia', pt: 'Use essere para identidade/origem e avere para idade e família', es: 'Usa essere para identidad/origen y avere para edad y familia', fr: 'Utilise essere pour l’identité/origine et avere pour l’âge et la famille', de: 'Verwende essere für Identität/Herkunft und avere für Alter und Familie' }, lang),
    svg: frame(
      'Essere and Avere side by side with family examples',
      `<rect x="40" y="42" width="260" height="132" rx="16" fill="${C.data}" fill-opacity="0.14" stroke="${C.data}" stroke-width="3"/>
      ${T(170, 80, 'ESSERE (to be)', { size: 20, fill: C.data, weight: 800 })}
      ${T(170, 120, 'io sono · tu sei · lui/lei è', { size: 19, fill: C.text, weight: 700 })}
      ${T(170, 152, 'Sono di Roma', { size: 18, fill: C.good, weight: 800 })}
      <rect x="340" y="42" width="260" height="132" rx="16" fill="${C.gold}" fill-opacity="0.14" stroke="${C.gold}" stroke-width="3"/>
      ${T(470, 80, 'AVERE (to have)', { size: 20, fill: C.gold, weight: 800 })}
      ${T(470, 120, 'io ho · tu hai · lui/lei ha', { size: 19, fill: C.text, weight: 700 })}
      ${T(470, 152, 'Ho due sorelle', { size: 18, fill: C.ember, weight: 800 })}
      <circle cx="320" cy="108" r="8" fill="${C.good}">${anim('r', '7;12;7', 2.8, 0)}</circle>`,
      '',
      H
    )
  };
}

function cefrPassatoVisual(lang: Language): VisualOut {
  return {
    title: L6({ en: 'Passato Prossimo: Essere vs Avere', it: 'Passato prossimo: Essere o Avere', pt: 'Passato prossimo: Essere ou Avere', es: 'Passato prossimo: Essere o Avere', fr: 'Passato prossimo : Essere ou Avere', de: 'Passato prossimo: Essere vs. Avere' }, lang),
    caption: L6({ en: 'Movement/reflexive verbs take essere (and agree in ending); actions take avere', it: 'I verbi di movimento/riflessivi usano essere (con accordo); gli altri avere', pt: 'Verbos de movimento/reflexivos usam essere (concordando); ações usam avere', es: 'Verbos de movimiento/reflexivos usan essere (concuerdan); acciones usan avere', fr: 'Mouvement/réfléchis prennent essere (accord) ; actions prennent avere', de: 'Bewegungs-/Reflexivverben nutzen essere (mit Angleichung); andere avere' }, lang),
    svg: frame(
      'Weekend timeline showing passato prossimo auxiliaries',
      `<line x1="60" y1="156" x2="580" y2="156" stroke="${C.muted}" stroke-width="4"/>
      <rect x="52" y="44" width="248" height="88" rx="14" fill="${C.good}" fill-opacity="0.16" stroke="${C.good}" stroke-width="3"/>
      ${T(176, 80, 'sono andato / andata', { size: 20, fill: C.good, weight: 800 })}
      ${T(176, 112, 'Movement → essere', { size: 17, fill: C.text, weight: 700 })}
      <rect x="340" y="44" width="248" height="88" rx="14" fill="${C.data}" fill-opacity="0.16" stroke="${C.data}" stroke-width="3"/>
      ${T(464, 80, 'ho mangiato / visto', { size: 20, fill: C.data, weight: 800 })}
      ${T(464, 112, 'Direct action → avere', { size: 17, fill: C.text, weight: 700 })}
      <circle cx="140" cy="156" r="10" fill="${C.gold}">${anim('cx', '140;320;500;500', 4.5, 0)}</circle>
      ${T(140, 194, 'Ieri (Past)', { size: 18, fill: C.gold, weight: 800 })}
      ${T(500, 194, 'Oggi (Now)', { size: 18, fill: C.muted, weight: 700 })}`,
      '',
      H
    )
  };
}

function cefrDirectionsVisual(lang: Language): VisualOut {
  return {
    title: L6({ en: 'City Directions & Direct Pronouns', it: 'In città: indicazioni e pronomi diretti', pt: 'Na cidade: direções e pronomi diretti', es: 'En la ciudad: direcciones y pronomi diretti', fr: 'En ville : directions et pronoms directs', de: 'In der Stadt: Wegbeschreibung & Pronomen' }, lang),
    caption: L6({ en: 'Sempre dritto → a destra / a sinistra → alla stazione', it: 'Sempre dritto → a destra / a sinistra → fino alla stazione', pt: 'Sempre dritto → a destra / a sinistra → até a estação', es: 'Sempre dritto → a destra / a sinistra → hacia la estación', fr: 'Sempre dritto → a destra / a sinistra → jusqu’à la gare', de: 'Sempre dritto → a destra / a sinistra → bis zum Bahnhof' }, lang),
    svg: frame(
      'Animated street route map to the Italian train station',
      `<rect x="44" y="34" width="552" height="156" rx="16" fill="${C.panel}" stroke="${C.line}" stroke-width="2.5"/>
      <path d="M90 144 H320 V74 H520" fill="none" stroke="${C.gold}" stroke-width="6" stroke-dasharray="10 6" stroke-linecap="round"/>
      <circle r="10" fill="${C.good}" stroke="${C.text}" stroke-width="2.5"><animateMotion dur="4.8s" repeatCount="indefinite" path="M90 144 H320 V74 H520"/></circle>
      <circle cx="90" cy="144" r="8" fill="${C.data}"/>
      ${T(102, 174, 'Partenza', { size: 16, fill: C.data, weight: 800 })}
      ${T(205, 130, 'Sempre dritto', { size: 17, fill: C.text, weight: 700 })}
      ${T(392, 108, 'A sinistra ↑', { size: 17, fill: C.ember, weight: 800 })}
      <rect x="466" y="48" width="110" height="44" rx="10" fill="${C.good}" fill-opacity="0.22" stroke="${C.good}" stroke-width="2.5"/>
      ${T(521, 76, 'Stazione', { size: 18, fill: C.good, weight: 800 })}`,
      '',
      H
    )
  };
}

function cefrFutureConditionalVisual(lang: Language): VisualOut {
  return {
    title: L6({ en: 'Future Plans & Polite Requests', it: 'Progetti futuri e richieste gentili', pt: 'Planos futuros e pedidos educados', es: 'Planes futuros y peticiones corteses', fr: 'Projets futurs et demandes polies', de: 'Zukunftspläne und höfliche Bitten' }, lang),
    caption: L6({ en: 'Use Futuro Semplice for plans (domani partirò) and Condizionale for politeness (vorrei)', it: 'Usa il Futuro per i progetti (domani partirò) e il Condizionale per cortesia (vorrei)', pt: 'Use Futuro para planos (domani partirò) e Condizionale para cortesia (vorrei)', es: 'Usa Futuro para planes (domani partirò) y Condizionale por cortesía (vorrei)', fr: 'Utilise le Futuro pour les projets (domani partirò) et le Condizionale (vorrei)', de: 'Nutze Futuro für Pläne (domani partirò) und Condizionale für Höflichkeit (vorrei)' }, lang),
    svg: frame(
      'Future itinerary and polite conditional desk',
      `<rect x="40" y="42" width="260" height="128" rx="14" fill="${C.data}" fill-opacity="0.14" stroke="${C.data}" stroke-width="3"/>
      ${T(170, 80, 'FUTURO SEMPLICE', { size: 19, fill: C.data, weight: 800 })}
      ${T(170, 118, 'L’anno prossimo andrò', { size: 19, fill: C.text, weight: 700 })}
      ${T(170, 148, '-ò, -ai, -à, -emo, -ete, -anno', { size: 16, fill: C.muted, weight: 700 })}
      <rect x="340" y="42" width="260" height="128" rx="14" fill="${C.gold}" fill-opacity="0.14" stroke="${C.gold}" stroke-width="3"/>
      ${T(470, 80, 'CONDIZIONALE', { size: 19, fill: C.gold, weight: 800 })}
      ${T(470, 118, 'Vorrei prenotare un tavolo', { size: 18, fill: C.text, weight: 700 })}
      ${T(470, 148, 'Polite requests · vorrei / potrei', { size: 16, fill: C.good, weight: 700 })}
      <circle cx="320" cy="106" r="8" fill="${C.ember}">${anim('cx', '300;340;300', 3, 0)}</circle>`,
      '',
      H
    )
  };
}

function cefrSubjunctiveOpinionVisual(lang: Language): VisualOut {
  return {
    title: L6({ en: 'Opinions, Congiuntivo & Double Pronouns', it: 'Opinioni, congiuntivo e doppi pronomi', pt: 'Opiniões, subjuntivo e pronomes duplos', es: 'Opiniones, subjuntivo y pronombres dobles', fr: 'Opinions, subjonctif et doubles pronoms', de: 'Meinungen, Konjunktiv & Doppelpronomen' }, lang),
    caption: L6({ en: 'Penso che + congiuntivo expresses opinions; glielo combines indirect + direct pronouns', it: 'Penso che + congiuntivo esprime opinioni; glielo unisce due pronomi', pt: 'Penso che + congiuntivo expressa opiniões; glielo combina dois pronomes', es: 'Penso che + congiuntivo expresa opiniones; glielo combina dos pronombres', fr: 'Penso che + congiuntivo exprime l’opinion ; glielo combine deux pronoms', de: 'Penso che + congiuntivo drückt Meinungen aus; glielo verbindet zwei Pronomen' }, lang),
    svg: frame(
      'Subjunctive opinion bridge and combined pronoun fusion',
      `<rect x="44" y="46" width="160" height="72" rx="14" fill="${C.data}" fill-opacity="0.16" stroke="${C.data}" stroke-width="3"/>
      ${T(124, 89, 'Penso che', { size: 22, fill: C.data, weight: 800 })}
      <rect x="242" y="46" width="354" height="72" rx="14" fill="${C.good}" fill-opacity="0.16" stroke="${C.good}" stroke-width="3"/>
      ${T(419, 89, 'sia un’ottima idea!', { size: 22, fill: C.good, weight: 800 })}
      <rect x="114" y="142" width="412" height="54" rx="12" fill="${C.gold}" fill-opacity="0.16" stroke="${C.gold}" stroke-width="3"/>
      ${T(320, 176, 'gli + lo → glielo dico subito!', { size: 22, fill: C.gold, weight: 800 })}
      <circle cx="204" cy="82" r="7" fill="${C.gold}">${anim('cx', '204;242;204', 2.8, 0)}</circle>`,
      '',
      H
    )
  };
}

function quintaOrthographyVisual(lang: Language): VisualOut {
  return {
    title: L6({ en: 'Spelling, Syllables & Silent H', it: 'Ortografia, sillabe e la H', pt: 'Ortografia, sílabas e o H mudo', es: 'Ortografía, sílabas y la H muda', fr: 'Orthographe, syllabes et H muet', de: 'Rechtschreibung, Silben & stummes H' }, lang),
    caption: L6({ en: 'Spot how h distinguishes verb avere (ho/ha) and how syllables split double letters', it: 'Nota come la h distingue avere (ho/ha) e come le doppie si separano in sillabe', pt: 'Veja como o h diferencia o verbo avere (ho/ha) e a separação de sílabas', es: 'Observa cómo la h distingue el verbo avere (ho/ha) y cómo se dividen las sílabas', fr: 'Observe comment le h distingue avere (ho/ha) et comment couper les syllabes', de: 'Erkenne, wie h das Verb avere (ho/ha) unterscheidet und Silben getrennt werden' }, lang),
    svg: frame(
      'Syllable division and silent H comparison',
      `<rect x="44" y="38" width="260" height="122" rx="14" fill="${C.data}" fill-opacity="0.14" stroke="${C.data}" stroke-width="3"/>
      ${T(174, 78, 'pal-la · castel-lo', { size: 23, fill: C.data, weight: 800 })}
      ${T(174, 118, 'Double consonants split!', { size: 17, fill: C.text, weight: 700 })}
      <rect x="336" y="38" width="260" height="122" rx="14" fill="${C.gold}" fill-opacity="0.14" stroke="${C.gold}" stroke-width="3"/>
      ${T(466, 78, 'ho (verb) vs o (or)', { size: 22, fill: C.gold, weight: 800 })}
      ${T(466, 118, 'c’è · l’amica · è / e', { size: 19, fill: C.good, weight: 800 })}
      <circle cx="155" cy="96" r="7" fill="${C.ember}">${anim('cx', '132;212;132', 3.4, 0)}</circle>
      ${T(320, 198, 'ce/cie · gli/li · apostrophe vs truncation', { size: 19, fill: C.muted, weight: 700 })}`,
      '',
      H
    )
  };
}

function quintaLexiconVisual(lang: Language): VisualOut {
  return {
    title: L6({ en: 'Meaning Scales & Word Origins', it: 'Lessico, sfumature e origini delle parole', pt: 'Léxico, escalas de sentido e origens', es: 'Léxico, escalas de significado y orígenes', fr: 'Lexique, nuances et origines des mots', de: 'Wortschatz, Bedeutungsstufen & Herkunft' }, lang),
    caption: L6({ en: 'Compare synonyms along an intensity scale plus literal vs figurative senses', it: 'Confronta sinonimi in scala di intensità e senso proprio vs figurato', pt: 'Compare sinônimos em escala de intensidade e sentido próprio vs figurado', es: 'Compara sinónimos en escala de intensidad y sentido literal vs figurado', fr: 'Compare les synonymes par intensité et sens propre vs figuré', de: 'Vergleiche Synonyme auf einer Skala und wörtliche vs. bildliche Bedeutung' }, lang),
    svg: frame(
      'Semantic gradient scale from gelido to bollente',
      `<line x1="70" y1="102" x2="570" y2="102" stroke="${C.muted}" stroke-width="4"/>
      ${[
        ['gelido', 95, C.data],
        ['freddo', 205, C.data],
        ['tiepido', 320, C.good],
        ['caldo', 435, C.gold],
        ['bollente', 545, C.ember]
      ]
        .map(([w, x, col]) => `<circle cx="${x}" cy="102" r="14" fill="${col}" fill-opacity="0.3" stroke="${col}" stroke-width="3"/>${T(Number(x), 144, String(w), { size: 18, fill: String(col), weight: 800 })}`)
        .join('')}
      <circle cy="102" r="8" fill="${C.gold}">${anim('cx', '95;545;95', 5.2, 0)}</circle>
      ${T(320, 52, 'Gradazione di significato (Intensity gradient)', { size: 20, fill: C.text, weight: 800 })}
      ${T(320, 196, 'Latin roots · synonyms · literal & figurative usage', { size: 18, fill: C.muted, weight: 700 })}`,
      '',
      H
    )
  };
}

function quintaMorphologyVisual(lang: Language): VisualOut {
  return {
    title: L6({ en: 'Nouns, Adjectives & Agreement', it: 'Nomi, aggettivi e accordi', pt: 'Substantivos, adjetivos e concordância', es: 'Sustantivi, adjetivos y concordancia', fr: 'Noms, adjectifs et accords', de: 'Nomen, Adjektive & Kongruenz' }, lang),
    caption: L6({ en: 'Articles, nouns and adjectives snap together in gender (M/F) and number (S/P)', it: 'Articoli, nomi e aggettivi concordano per genere (M/F) e numero (S/P)', pt: 'Artigos, substantivos e adjetivos concordam em gênero (M/F) e número (S/P)', es: 'Artículos, sustantivos y adjetivos concuerdan en género y número', fr: 'Articles, noms et adjectifs s’accordent en genre et en nombre', de: 'Artikel, Nomen und Adjektive stimmen in Genus und Numerus überein' }, lang),
    svg: frame(
      'Italian article, noun and adjective ending agreement',
      `<rect x="52" y="54" width="144" height="72" rx="14" fill="${C.data}" fill-opacity="0.18" stroke="${C.data}" stroke-width="3"/>
      ${T(124, 98, 'gli / le', { size: 28, fill: C.data, weight: 800 })}
      <rect x="220" y="54" width="180" height="72" rx="14" fill="${C.gold}" fill-opacity="0.18" stroke="${C.gold}" stroke-width="3"/>
      ${T(310, 98, 'zaini / borse', { size: 24, fill: C.gold, weight: 800 })}
      <rect x="424" y="54" width="164" height="72" rx="14" fill="${C.good}" fill-opacity="0.18" stroke="${C.good}" stroke-width="3"/>
      ${T(506, 98, 'nuovi / nuove', { size: 22, fill: C.good, weight: 800 })}
      <line x1="124" y1="142" x2="506" y2="142" stroke="${C.good}" stroke-width="4" stroke-dasharray="8 5"/>
      <circle cx="124" cy="142" r="8" fill="${C.gold}">${anim('cx', '124;310;506;124', 4.2, 0)}</circle>
      ${T(320, 192, 'Comparativo & Superlativo (-issimo) · Pronomi', { size: 19, fill: C.muted, weight: 700 })}`,
      '',
      H
    )
  };
}

function quintaVerbsVisual(lang: Language): VisualOut {
  return {
    title: L6({ en: 'Verbs, Moods & Active/Passive Voice', it: 'Verbi, modi e forma attiva/passiva', pt: 'Verbos, modos e voz ativa/passiva', es: 'Verbos, modos y voz activa/pasiva', fr: 'Verbes, modes et voix active/passive', de: 'Verben, Modi & Aktiv/Passiv' }, lang),
    caption: L6({ en: 'Active voice: subject does the action; Passive voice: subject receives it with essere', it: 'Forma attiva: il soggetto compie l’azione; Passiva: la subisce con essere', pt: 'Voz ativa: o sujeito faz a ação; Passiva: o sujeito a recebe com essere', es: 'Voz activa: el sujeto realiza la acción; Pasiva: la recibe con essere', fr: 'Voix active : le sujet agit ; Passive : il subit l’action avec essere', de: 'Aktiv: Subjekt handelt; Passiv: Subjekt empfängt die Handlung mit essere' }, lang),
    svg: frame(
      'Active and passive verb voice swap with essere',
      `<rect x="48" y="42" width="544" height="58" rx="12" fill="${C.data}" fill-opacity="0.14" stroke="${C.data}" stroke-width="3"/>
      ${T(320, 79, 'Attiva: Luca legge il libro.', { size: 23, fill: C.data, weight: 800 })}
      <rect x="48" y="128" width="544" height="58" rx="12" fill="${C.good}" fill-opacity="0.14" stroke="${C.good}" stroke-width="3"/>
      ${T(320, 165, 'Passiva: Il libro è letto da Luca.', { size: 23, fill: C.good, weight: 800 })}
      <circle cx="96" cy="114" r="8" fill="${C.gold}">${anim('cx', '96;544;96', 4, 0)}</circle>`,
      '',
      H
    )
  };
}

function quintaSyntaxVisual(lang: Language): VisualOut {
  return {
    title: L6({ en: 'Core Sentence & Expansions', it: 'Frase minima ed espansioni', pt: 'Frase mínima e complementos', es: 'Oración mínima y complementos', fr: 'Phrase minimale et compléments', de: 'Kernsatz und Satzglieder' }, lang),
    caption: L6({ en: 'Build from Subject + Predicate (Chi fa cosa?), then snap Place, Time and Manner blocks', it: 'Parti da Soggetto + Predicato, poi aggiungi Luogo, Tempo, Modo e Mezzo', pt: 'Comece com Sujeito + Predicado e adicione Lugar, Tempo e Modo', es: 'Empieza con Sujeto + Predicado y añade Lugar, Tiempo y Modo', fr: 'Pars du Sujet + Prédicat, puis ajoute Lieu, Temps et Manière', de: 'Starte mit Subjekt + Prädikat und füge Ort, Zeit und Art hinzu' }, lang),
    svg: frame(
      'Sentence analysis building blocks: Subject, Predicate, Place, Time',
      `<rect x="34" y="46" width="128" height="72" rx="12" fill="${C.data}" fill-opacity="0.18" stroke="${C.data}" stroke-width="3"/>
      ${T(98, 80, 'Soggetto', { size: 17, fill: C.data, weight: 800 })}${T(98, 105, 'Giulia', { size: 20, fill: C.text, weight: 800 })}
      <rect x="176" y="46" width="142" height="72" rx="12" fill="${C.good}" fill-opacity="0.18" stroke="${C.good}" stroke-width="3"/>
      ${T(247, 80, 'Predicato', { size: 17, fill: C.good, weight: 800 })}${T(247, 105, 'legge', { size: 20, fill: C.text, weight: 800 })}
      <rect x="332" y="46" width="136" height="72" rx="12" fill="${C.gold}" fill-opacity="0.18" stroke="${C.gold}" stroke-width="3"/>
      ${T(400, 80, 'Oggetto', { size: 17, fill: C.gold, weight: 800 })}${T(400, 105, 'un libro', { size: 20, fill: C.text, weight: 800 })}
      <rect x="482" y="46" width="126" height="72" rx="12" fill="${C.ember}" fill-opacity="0.18" stroke="${C.ember}" stroke-width="3"/>
      ${T(545, 80, 'Luogo', { size: 17, fill: C.ember, weight: 800 })}${T(545, 105, 'a casa', { size: 20, fill: C.text, weight: 800 })}
      <circle cx="98" cy="146" r="8" fill="${C.gold}">${anim('cx', '98;247;400;545;98', 4.8, 0)}</circle>
      ${T(320, 192, 'Chi? (Soggetto) · Che cosa fa? (Predicato) · Dove? Quando?', { size: 18, fill: C.muted, weight: 700 })}`,
      '',
      H
    )
  };
}

export function getItalianMissionVisual(missionId: string, lang: Language): string | null {
  let out: VisualOut | null = null;

  if (missionId === 'it_a1m1') out = cefrGreetingVisual(lang);
  else if (missionId === 'it_a1m2') out = cefrNumbersCalendarVisual(lang);
  else if (missionId === 'it_a1m3') out = cefrEssereAvereVisual(lang);
  else if (missionId === 'it_a2m1') out = cefrPassatoVisual(lang);
  else if (missionId === 'it_a2m2') out = cefrDirectionsVisual(lang);
  else if (missionId === 'it_b1m1') out = cefrFutureConditionalVisual(lang);
  else if (missionId === 'it_b1m2') out = cefrSubjunctiveOpinionVisual(lang);
  else if (missionId.startsWith('itg5-')) {
    if (/(ce-cie|gli-gn|h-sillabe|apostrofo|accento|punteggiatura|ortografia)/.test(missionId)) {
      out = quintaOrthographyVisual(lang);
    } else if (/(vocabolario|relazioni|figurato|origini|lessico)/.test(missionId)) {
      out = quintaLexiconVisual(lang);
    } else if (/(nomi|articoli|aggettivi|possessivi|indefiniti|pronomi|avverbi|preposizioni|invariabili)/.test(missionId)) {
      out = quintaMorphologyVisual(lang);
    } else if (/(verbi|indicativo|congiuntivo|modi-indefiniti|transitivi|riflessivi|tavole)/.test(missionId)) {
      out = quintaVerbsVisual(lang);
    } else {
      out = quintaSyntaxVisual(lang);
    }
  }

  if (!out) return null;
  return `<figure class="ghmath-visual" style="margin:0;display:flex;flex-direction:column;align-items:center;gap:6px">
    ${out.svg}
    <figcaption style="text-align:center">
      <div style="font-family:var(--display, Georgia, serif);font-size:21px;color:var(--good)">${out.title}</div>
      <div class="muted" style="font-size:15px">${out.caption}</div>
    </figcaption>
  </figure>`;
}

export function getItalianListeningSceneSvg(
  theme: 'everyday' | 'travel' | 'work',
  isPlaying: boolean,
  lang: Language
): string {
  const barAnims = (baseH: number, idx: number) =>
    isPlaying ? anim('height', `${baseH};${baseH + 22};${Math.max(8, baseH - 8)};${baseH}`, 0.9 + idx * 0.15, 0) : '';

  const eq = [0, 1, 2, 3, 4]
    .map(i => {
      const x = 516 + i * 16;
      const h = 16 + (i % 3) * 14;
      return `<rect x="${x}" y="${108 - h}" width="10" height="${h}" rx="5" fill="${isPlaying ? C.good : C.muted}">${barAnims(h, i)}</rect>`;
    })
    .join('');

  if (theme === 'everyday') {
    const label = L6({ en: 'Everyday Italian · Espresso, Market & Home', it: 'Vita quotidiana · Caffè, mercato e casa', pt: 'Cotidiano · Café, mercado e casa', es: 'Vida cotidiana · Café, mercado y casa', fr: 'Vie quotidienne · Café, marché et maison', de: 'Alltag · Kaffee, Markt und Zuhause' }, lang);
    return frame(
      label,
      `<rect x="64" y="64" width="110" height="72" rx="16" fill="${C.gold}" fill-opacity="0.18" stroke="${C.gold}" stroke-width="3.5"/>
      <path d="M174 82 C202 82 202 122 174 122" fill="none" stroke="${C.gold}" stroke-width="4"/>
      <path d="M96 52 Q104 34 94 22 M122 52 Q130 34 120 22" fill="none" stroke="${C.ember}" stroke-width="3" stroke-linecap="round"/>
      ${T(119, 108, 'Caffè', { size: 20, fill: C.gold, weight: 800 })}
      ${T(336, 92, 'Buongiorno! Cosa prende?', { size: 22, fill: C.text, weight: 800 })}
      ${eq}`,
      label,
      190
    );
  }

  if (theme === 'travel') {
    const label = L6({ en: 'Travel & City · Trains, Piazzas & Directions', it: 'Viaggi e città · Treni, piazze e indicazioni', pt: 'Viagens · Trens, praças e direções', es: 'Viajes · Trenes, plazas y direcciones', fr: 'Voyages · Trains, places et directions', de: 'Reisen · Züge, Plätze & Wege' }, lang);
    return frame(
      label,
      `<rect x="52" y="54" width="164" height="74" rx="14" fill="${C.data}" fill-opacity="0.18" stroke="${C.data}" stroke-width="3.5"/>
      ${T(134, 98, 'BINARIO 4', { size: 20, fill: C.data, weight: 800 })}
      <circle cx="90" cy="140" r="10" fill="${C.muted}"/><circle cx="178" cy="140" r="10" fill="${C.muted}"/>
      ${T(350, 92, 'Treno per Ravenna · ore 9:15', { size: 21, fill: C.text, weight: 800 })}
      ${eq}`,
      label,
      190
    );
  }

  const label = L6({ en: 'Work & Emails · Office Calls & Interviews', it: 'Lavoro ed email · Ufficio, chiamate e colloqui', pt: 'Trabalho · Escritório, chamadas e emails', es: 'Trabajo · Oficina, llamadas y correos', fr: 'Travail · Bureau, appels et e-mails', de: 'Arbeit · Büro, Anrufe & E-Mails' }, lang);
  return frame(
    label,
    `<rect x="52" y="52" width="154" height="92" rx="12" fill="${C.good}" fill-opacity="0.16" stroke="${C.good}" stroke-width="3.5"/>
    <path d="M52 62 L129 108 L206 62" fill="none" stroke="${C.good}" stroke-width="3"/>
    ${T(129, 132, 'Email / Ufficio', { size: 16, fill: C.good, weight: 800 })}
    ${T(352, 92, 'Gentile collega, La ringrazio…', { size: 20, fill: C.text, weight: 800 })}
    ${eq}`,
    label,
    190
  );
}
