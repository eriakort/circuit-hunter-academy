import React, { useState, type ReactNode } from 'react';
import type { Language } from '../types';
import { Analogy, pick, Readout, Slider } from './chemLabs/chemLabShared';

type Props = { missionId: string; lang: Language };
type Pair = [string, string];

const choices = (lang: Language, items: Pair[], selected: number, onSelect: (index: number) => void) => (
  <div className="cl-mode-tabs">
    {items.map(([en, it], index) => (
      <button key={en} type="button" className={selected === index ? 'active' : ''} onClick={() => onSelect(index)}>
        {pick(lang, en, it)}
      </button>
    ))}
  </div>
);

export const Grade5EcologyLab: React.FC<Props> = ({ missionId, lang }) => {
  const [selected, setSelected] = useState<Record<string, number>>({});
  const [amount, setAmount] = useState(3);
  const get = (key: string) => selected[key] ?? 0;
  const choose = (key: string, value: number) => setSelected(current => ({ ...current, [key]: value }));
  const text = (en: string, it: string) => pick(lang, en, it);
  const frame = (aria: string, title: string, description: string, visual: ReactNode, controls: ReactNode) => (
    <section className="chem-lab" aria-label={aria}>
      <header className="cl-heading">
        <span className="cl-kicker">{text('INTERACTIVE SCIENCE LAB', 'LABORATORIO INTERATTIVO DI SCIENZE')}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </header>
      <div className="cl-grid">
        <div className="cl-visual">{visual}</div>
        <div className="cl-controls">{controls}</div>
      </div>
    </section>
  );
  const svg = (label: string, children: ReactNode) => (
    <svg viewBox="0 0 360 205" role="img" aria-label={label}>
      <rect x="18" y="18" width="324" height="169" rx="18" fill="rgba(16,22,58,.95)" stroke="#8a7bff" />
      {children}
    </svg>
  );
  const analogy = (en: string, it: string) => <Analogy lang={lang} en={en} it={it} />;

  if (missionId === 'g5s-habitats') {
    const habitats: Pair[] = [['Dry desert', 'Deserto arido'], ['Cold Arctic', 'Artico freddo'], ['Freshwater pond', 'Stagno d’acqua dolce']];
    const organisms: Pair[] = [['Camel', 'Cammello'], ['Polar bear', 'Orso polare'], ['Duck', 'Anatra']];
    const features: Pair[] = [
      ['Broad feet and water-saving features help in dry places.', 'Zampe larghe e caratteristiche che limitano la perdita d’acqua aiutano nei luoghi aridi.'],
      ['Thick fur and a layer of fat help keep warm.', 'La folta pelliccia e uno strato di grasso aiutano a mantenere il calore.'],
      ['Webbed feet help it paddle through water.', 'Le zampe palmate aiutano a nuotare.']
    ];
    const i = get('habitat');
    return frame(text('Habitat Match Lab', 'Laboratorio degli habitat'), text('Match an Organism to Its Habitat', 'Abbina un organismo al suo habitat'), text('Explore a few features that help an organism live in a particular place. These are examples, not rules for every individual.', 'Esplora alcune caratteristiche che aiutano un organismo a vivere in un determinato luogo. Sono esempi, non regole valide per ogni individuo.'),
      svg(text('Animal adaptation and habitat model', 'Modello di adattamento e habitat'), <>
        <rect x="43" y="51" width="274" height="94" rx="18" fill={['rgba(255,209,102,.2)', 'rgba(69,216,255,.2)', 'rgba(56,239,125,.18)'][i]} stroke="#dfe7ff" strokeWidth="2" />
        {i === 0 ? <><circle cx="180" cy="89" r="20" fill="#ffd166"/><path d="M167 106Q180 91 193 106L202 129H158Z" fill="#d99b52"/><path d="M165 128L151 142M195 128L209 142" stroke="#ffd166" strokeWidth="6" strokeLinecap="round"/></> :
          i === 1 ? <><circle cx="180" cy="82" r="18" fill="#fff"/><path d="M156 105Q180 85 204 105L213 139H147Z" fill="#dfe7ff"/><circle cx="174" cy="80" r="2" fill="#10143a"/><circle cx="186" cy="80" r="2" fill="#10143a"/></> :
            <><ellipse cx="180" cy="105" rx="34" ry="22" fill="#ffd166"/><circle cx="209" cy="93" r="13" fill="#ffd166"/><path d="M222 93l15 5-15 5z" fill="#ff6a55"/><path d="M167 123v14M190 123v14" stroke="#ff6a55" strokeWidth="4"/></>}
        <text x="180" y="169" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800">{text(habitats[i][0], habitats[i][1])}</text>
      </>),
      <>{choices(lang, habitats, i, value => choose('habitat', value))}<Readout label={text('Example organism', 'Organismo di esempio')} value={text(organisms[i][0], organisms[i][1])}/><Readout label={text('Helpful feature', 'Caratteristica utile')} value={text(features[i][0], features[i][1])}/>{analogy('An adaptation is a feature that can help an organism meet the conditions of its habitat.', 'Un adattamento è una caratteristica che può aiutare un organismo ad affrontare le condizioni del suo habitat.')}</>);
  }

  if (missionId === 'g5s-food-chains') {
    const places: Pair[] = [['Meadow', 'Prato'], ['Pond', 'Stagno']];
    const chains: Pair[][] = [
      [['Grass', 'Erba'], ['Grasshopper', 'Cavalletta'], ['Frog', 'Rana'], ['Heron', 'Airone'], ['Fungi', 'Funghi']],
      [['Algae', 'Alghe'], ['Water flea', 'Pulce d’acqua'], ['Small fish', 'Pesce piccolo'], ['Heron', 'Airone'], ['Bacteria', 'Batteri']]
    ];
    const roles: Pair[][] = [
      [['Producer', 'Produttore'], ['Primary consumer', 'Consumatore primario'], ['Consumer', 'Consumatore'], ['Consumer', 'Consumatore'], ['Decomposer', 'Decompositore']],
      [['Producer', 'Produttore'], ['Consumer', 'Consumatore'], ['Consumer', 'Consumatore'], ['Consumer', 'Consumatore'], ['Decomposer', 'Decompositore']]
    ];
    const place = get('chain-place');
    const stage = get('chain-stage');
    const organisms = chains[place];
    return frame(text('Food Chain Energy Trail', 'Percorso dell’energia nella catena alimentare'), text('Follow the Food and Energy', 'Segui il cibo e l’energia'), text('Choose a habitat and tap each link. Arrows point from the food to the organism that eats it.', 'Scegli un habitat e tocca ogni anello. Le frecce vanno dal cibo all’organismo che lo mangia.'),
      svg(text('Interactive food chain with energy arrows', 'Catena alimentare interattiva con frecce dell’energia'), <>
        {organisms.slice(0, 4).map((organism, index) => {
          const x = 56 + index * 82;
          return <g key={organism[0]}>
            <circle cx={x} cy="91" r={stage === index ? 23 : 17} fill={stage === index ? '#38ef7d' : ['#38ef7d', '#ffd166', '#45d8ff', '#ff6a55'][index]} stroke="#fff" strokeWidth={stage === index ? 3 : 1} className={stage === index ? 'chem-anim-pulse' : ''} />
            <text x={x} y="96" textAnchor="middle" fill="#10143a" fontSize="12" fontWeight="900">{index + 1}</text>
            <text x={x} y="132" textAnchor="middle" fill="#fff" fontSize="9">{text(organism[0], organism[1])}</text>
            {index < 3 && <path d={`M${x + 23} 91H${x + 56}`} stroke="#ffd166" strokeWidth="3" markerEnd="url(#food-arrow)" />}
          </g>;
        })}
        <defs><marker id="food-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#ffd166"/></marker></defs>
        <path d="M300 151Q180 188 60 151" fill="none" stroke="#8a7bff" strokeWidth="2" strokeDasharray="5 5" />
        <text x="180" y="177" textAnchor="middle" fill="#fff" fontSize="10">{text('Decomposers return nutrients to the environment', 'I decompositori restituiscono nutrienti all’ambiente')}</text>
      </>),
      <>{choices(lang, places, place, value => { choose('chain-place', value); choose('chain-stage', 0); })}{choices(lang, organisms.slice(0, 4), stage, value => choose('chain-stage', value))}<Readout label={text('Role in this chain', 'Ruolo in questa catena')} value={text(roles[place][stage][0], roles[place][stage][1])}/><Readout label={text('Energy moves', 'L’energia passa')} value={text('From food to eater', 'Dal cibo a chi lo mangia')}/>{analogy('A food chain is one simple path; many paths join to form a food web.', 'Una catena alimentare è un percorso semplice; tanti percorsi formano una rete alimentare.')}</>);
  }

  if (missionId === 'g5s-biodiversity') {
    const variety = amount;
    const palette = ['#38ef7d', '#ffd166', '#45d8ff', '#ff5d8f', '#8a7bff'];
    const measures: Pair[] = [['Food sources', 'Fonti di cibo'], ['Shelter', 'Riparo'], ['Pollination', 'Impollinazione']];
    const i = get('benefit');
    return frame(text('Biodiversity Meadow Lab', 'Laboratorio del prato biodiverso'), text('Grow a Meadow Full of Life', 'Fai crescere un prato pieno di vita'), text('Change the variety in this illustrative meadow model. More kinds of living things can support different relationships in an ecosystem.', 'Cambia la varietà in questo modello illustrativo di prato. Più tipi di esseri viventi possono sostenere relazioni diverse in un ecosistema.'),
      svg(text('Illustrative meadow with different species', 'Prato illustrativo con specie diverse'), <>
        <circle cx="61" cy="52" r="19" fill="#ffd166" className="chem-anim-pulse"/>
        <path d="M35 145Q100 123 180 145T325 139V166H35Z" fill="rgba(56,239,125,.25)"/>
        {Array.from({ length: variety }, (_, index) => {
          const x = 68 + index * 54;
          const petal = palette[index % palette.length];
          return <g key={index} className="chem-anim-pulse" style={{ animationDelay: `${index * .12}s` }}>
            <path d={`M${x} 142V${103 + (index % 2) * 9}`} stroke="#38ef7d" strokeWidth="4" />
            <circle cx={x} cy={97 + (index % 2) * 9} r="9" fill={petal} />
            {[0,1,2,3].map(petalIndex => {
              const angle = petalIndex * Math.PI / 2;
              return <circle key={petalIndex} cx={x + Math.cos(angle) * 9} cy={97 + (index % 2) * 9 + Math.sin(angle) * 9} r="4" fill={petal} />;
            })}
          </g>;
        })}
        {variety > 1 && Array.from({ length: variety - 1 }, (_, index) => <g key={`bee-${index}`} transform={`translate(${103 + index * 43} ${74 + (index % 2) * 20})`}><ellipse rx="8" ry="5" fill="#ffd166"/><path d="M-3 -4V4M3 -4V4" stroke="#10143a" strokeWidth="2"/><path d="M-3 -5q0-7 6 0" fill="#dfe7ff"/></g>)}
      </>),
      <><Slider label={text('Kinds shown in this model', 'Tipi mostrati nel modello')} value={variety} min={1} max={5} step={1} unit="" lang={lang} onChange={setAmount}/><Readout label={text('Model variety', 'Varietà del modello')} value={`${variety} ${text('illustrative types', 'tipi illustrativi')}`}/>{choices(lang, measures, i, value => choose('benefit', value))}<Readout label={text('One ecosystem link', 'Un legame nell’ecosistema')} value={text(['Different organisms can provide different foods', 'Plants and animals use habitats for shelter', 'Many insects help pollinate flowers'][i], ['Organismi diversi possono offrire cibi diversi', 'Piante e animali usano gli habitat come riparo', 'Molti insetti aiutano a impollinare i fiori'][i])}/>{analogy('Biodiversity means variety of life. This simplified model does not measure real ecosystem health.', 'Biodiversità significa varietà della vita. Questo modello semplificato non misura la salute reale di un ecosistema.')}</>);
  }

  if (missionId === 'g5s-environment-care') {
    const actions: Pair[] = [['Reduce', 'Riduci'], ['Reuse', 'Riutilizza'], ['Recycle', 'Ricicla'], ['Save water', 'Risparmia acqua']];
    const i = get('action');
    const meaning: Pair[] = [
      ['Use less and avoid unnecessary waste.', 'Consuma meno ed evita gli sprechi inutili.'],
      ['Use an item again instead of throwing it away.', 'Usa di nuovo un oggetto invece di buttarlo.'],
      ['Sort suitable materials so they can be processed into new products.', 'Separa i materiali adatti perché possano essere trasformati in nuovi prodotti.'],
      ['Use only the water needed for a task.', 'Usa solo l’acqua necessaria per un’attività.']
    ];
    const icons = ['−', '↻', '♻', '💧'];
    return frame(text('Planet Protector Action Lab', 'Laboratorio delle azioni per il pianeta'), text('Choose a Helpful Planet Action', 'Scegli un’azione utile per il pianeta'), text('Explore practical ways to use resources carefully. Small choices work best when people and communities take part together.', 'Esplora modi pratici per usare le risorse con attenzione. I piccoli gesti funzionano meglio quando persone e comunità collaborano.'),
      svg(text('Environmental care action model', 'Modello di azioni per la tutela dell’ambiente'), <>
        <circle cx="180" cy="96" r="51" fill={['#38ef7d','#45d8ff','#ffd166','#45d8ff'][i]} className="chem-anim-pulse"/>
        <path d="M180 48C153 70 161 92 180 100C199 92 207 70 180 48Z" fill="#fff" opacity=".8"/>
        <path d="M180 98Q151 90 151 72M180 98Q210 90 210 72" fill="none" stroke="#10143a" strokeWidth="3"/>
        <circle cx="180" cy="97" r="16" fill="#10143a"/><text x="180" y="105" textAnchor="middle" fill="#fff" fontSize="23" fontWeight="900">{icons[i]}</text>
        <text x="180" y="170" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="800">{text(actions[i][0], actions[i][1])}</text>
      </>),
      <>{choices(lang, actions, i, value => choose('action', value))}<Readout label={text('What it means', 'Che cosa significa')} value={text(meaning[i][0], meaning[i][1])}/><Readout label={text('A safe example', 'Un esempio sicuro')} value={text(['Choose a reusable item when suitable', 'Use both sides of clean scrap paper', 'Follow local sorting instructions', 'Turn off a tap fully after use'][i], ['Scegli un oggetto riutilizzabile quando è adatto', 'Usa entrambi i lati di un foglio pulito da riutilizzare', 'Segui le istruzioni locali per la raccolta differenziata', 'Chiudi bene il rubinetto dopo l’uso'][i])}/>{analogy('The 3 Rs are Reduce, Reuse and Recycle. Choosing what to do depends on the item and local guidance.', 'Le 3 R sono Ridurre, Riutilizzare e Riciclare. La scelta dipende dall’oggetto e dalle indicazioni locali.')}</>);
  }

  if (missionId === 'g5s-scientific-investigation') {
    const variables: Pair[] = [['Sunlight', 'Luce solare'], ['Observation time', 'Tempo di osservazione'], ['Water access', 'Disponibilità d’acqua']];
    const i = get('variable');
    const questions: Pair[] = [
      ['Do we notice different organisms in sunny and shady spots?', 'Notiamo organismi diversi nei punti soleggiati e in quelli ombreggiati?'],
      ['Do we notice more clues when we observe for longer?', 'Notiamo più indizi se osserviamo più a lungo?'],
      ['Are plants growing in places with different water access?', 'Le piante crescono in luoghi con diversa disponibilità d’acqua?']
    ];
    const keep: Pair[] = [
      ['Use the same area size and observation time.', 'Usa la stessa area e lo stesso tempo di osservazione.'],
      ['Use the same area and observation method.', 'Usa la stessa area e lo stesso metodo di osservazione.'],
      ['Compare similar places and do not damage plants.', 'Confronta luoghi simili e non danneggiare le piante.']
    ];
    const evidence: Pair[] = [
      ['Record what you see in each place; do not guess.', 'Registra ciò che vedi in ogni luogo; non indovinare.'],
      ['Make a simple tally of clues you observe.', 'Segna con una tabella semplice gli indizi osservati.'],
      ['Draw or describe plant observations from a safe distance.', 'Disegna o descrivi le piante osservandole a distanza di sicurezza.']
    ];
    return frame(text('Habitat Scientist Investigation', 'Indagine scientifica sugli habitat'), text('Plan a Fair Habitat Investigation', 'Progetta un’indagine corretta su un habitat'), text('Choose one feature to investigate. Make a fair comparison, record real observations and look after living things.', 'Scegli una caratteristica da studiare. Fai un confronto corretto, registra osservazioni reali e rispetta gli esseri viventi.'),
      svg(text('Sunny and shady habitat observation plan', 'Piano di osservazione di habitat soleggiati e ombreggiati'), <>
        <rect x="43" y="54" width="126" height="83" rx="12" fill="rgba(255,209,102,.18)" stroke="#ffd166" strokeWidth="2"/>
        <rect x="191" y="54" width="126" height="83" rx="12" fill="rgba(138,123,255,.24)" stroke="#8a7bff" strokeWidth="2"/>
        <circle cx="106" cy="79" r="15" fill="#ffd166"/>
        <path d="M254 57v37M229 94h50M244 77l21 32M265 77l-21 32" stroke="#38ef7d" strokeWidth="5" strokeLinecap="round"/>
        {[0,1,2].map(n=><g key={n}><circle cx={79+n*23} cy="121" r="4" fill="#38ef7d"/><circle cx={227+n*23} cy="121" r="4" fill="#38ef7d"/></g>)}
        <text x="106" y="158" textAnchor="middle" fill="#fff" fontSize="12">{text('Sunny', 'Soleggiato')}</text><text x="254" y="158" textAnchor="middle" fill="#fff" fontSize="12">{text('Shady', 'Ombreggiato')}</text>
        <text x="180" y="181" textAnchor="middle" fill="#fff" fontSize="10">{text('Observe without touching wildlife', 'Osserva senza toccare la fauna')}</text>
      </>),
      <>{choices(lang, variables, i, value => choose('variable', value))}<Readout label={text('Investigation question', 'Domanda di ricerca')} value={text(questions[i][0], questions[i][1])}/><Readout label={text('Keep these conditions similar', 'Mantieni simili queste condizioni')} value={text(keep[i][0], keep[i][1])}/><Readout label={text('Record evidence', 'Registra le prove')} value={text(evidence[i][0], evidence[i][1])}/>{analogy('A prediction is a testable idea, not a result. Let observations guide your conclusion.', 'Una previsione è un’idea da verificare, non un risultato. Lascia che le osservazioni guidino la conclusione.')}</>);
  }

  return null;
};
