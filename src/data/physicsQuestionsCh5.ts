import { TaggedQuestion } from '../types';

export const CH5_QUESTIONS: TaggedQuestion[] = [
  {
    id: 'phys-ch5-01',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 20,
    missionId: 'phys_q_ch5',
    chapterTitle: ['Equilibrium of Fluids', "L'equilibrio dei fluidi"],
    missionTitle: ['Pascal\'s Principle', 'Principio di Pascal'],
    q: [
      'What does Pascal\'s principle state regarding confined liquids?',
      'Che cosa afferma il principio di Pascal per i liquidi racchiusi in un recipiente?'
    ],
    a: [
      ['A pressure applied to a confined liquid is transmitted undiminished throughout the fluid and to the container walls', 'La pressione esercitata su una superficie di un liquido si trasmette inalterata in ogni punto del liquido e sulle pareti'],
      ['Pressure is only transmitted downwards in the direction of gravity', 'La pressione si trasmette solo verso il basso nella direzione della gravità'],
      ['Liquids expand to fill the entire container like gases', 'I liquidi si espandono fino a occupare tutto il volume del recipiente come i gas'],
      ['Pressure decreases with the square of the distance from the piston', 'La pressione diminuisce con il quadrato della distanza dal pistone']
    ],
    why: [
      'Pascal\'s principle states that an external pressure applied to an enclosed incompressible fluid is transmitted equally in all directions throughout the entire fluid.',
      'Il principio di Pascal stabilisce che la pressione esercitata in un punto di un fluido incomprimibile si propaga con la stessa intensità in tutte le direzioni e perpendicolarmente a ogni superficie di contatto.'
    ]
  },
  {
    id: 'phys-ch5-02',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 20,
    missionId: 'phys_q_ch5',
    chapterTitle: ['Equilibrium of Fluids', "L'equilibrio dei fluidi"],
    missionTitle: ['Hydraulic Lift Calculation', 'Torchio idraulico'],
    q: [
      'In a hydraulic lift, the small piston has an area of 10 cm² and the large piston has an area of 500 cm². Pushing the small piston with 100 N produces what lifting force on the large piston?',
      'In un torchio idraulico, il pistone piccolo ha area 10 cm² e quello grande 500 cm². Applicando 100 N sul pistone piccolo, quale forza di sollevamento si ottiene su quello grande?'
    ],
    a: [
      ['5 000 N', '5 000 N'],
      ['500 N', '500 N'],
      ['2 N', '2 N'],
      ['50 000 N', '50 000 N']
    ],
    why: [
      'Since pressure is equal (F₁ / S₁ = F₂ / S₂): F₂ = F₁ · (S₂ / S₁) = 100 N × (500 / 10) = 100 N × 50 = 5 000 N. The force is amplified 50-fold.',
      'Poiché la pressione si trasmette uguale (p = F₁ / S₁ = F₂ / S₂): F₂ = F₁ · (S₂ / S₁) = 100 × (500 / 10) = 5 000 N. La forza viene moltiplicata per 50.'
    ]
  },
  {
    id: 'phys-ch5-03',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 20,
    missionId: 'phys_q_ch5',
    chapterTitle: ['Equilibrium of Fluids', "L'equilibrio dei fluidi"],
    missionTitle: ['Stevin\'s Law Depth Dependence', 'Legge di Stevino'],
    q: [
      'According to Stevin\'s law (p = ρ · g · h), what happens to hydrostatic pressure as a diver doubles their depth h below the water surface?',
      'Secondo la legge di Stevino (p = ρ · g · h), che cosa accade alla pressione idrostatica del liquido se un sub raddoppia la profondità h?'
    ],
    a: [
      ['Hydrostatic pressure doubles (direct proportionality to depth)', 'La pressione idrostatica raddoppia (è direttamente proporzionale alla profondità)'],
      ['Hydrostatic pressure quadruples', 'La pressione idrostatica quadruplica'],
      ['Hydrostatic pressure is halved', 'La pressione idrostatica si dimezza'],
      ['Hydrostatic pressure remains constant', 'La pressione idrostatica non varia']
    ],
    why: [
      'Hydrostatic pressure is directly proportional to depth h: doubling depth h doubles the weight of the water column above, doubling pressure p = ρgh.',
      'La pressione idrostatica dovuta al peso del liquido è direttamente proporzionale alla profondità h: raddoppiando h, la pressione dovuta al liquido raddoppia.'
    ]
  },
  {
    id: 'phys-ch5-04',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 20,
    missionId: 'phys_q_ch5',
    chapterTitle: ['Equilibrium of Fluids', "L'equilibrio dei fluidi"],
    missionTitle: ['Hydrostatic Paradox', 'Paradosso idrostatico'],
    q: [
      'Three vases with completely different shapes have the same bottom area and are filled with water to the same height h. How does the water force on the bottom compare?',
      'Tre vasi di forma completamente diversa hanno la stessa area di base e sono riempiti d\'acqua fino alla stessa altezza h. Come si confrontano le forze esercitate dall\'acqua sul fondo?'
    ],
    a: [
      ['The force is identical on all three bottoms (F = p · S = ρ · g · h · S)', 'La forza è identica sul fondo di tutti e tre i recipienti (F = p · S = ρghS)'],
      ['The widest vase always has the greatest force on its bottom', 'Il vaso più largo e svasato ha sempre la forza maggiore sul fondo'],
      ['The narrowest vase has the greatest force on its bottom', 'Il vaso più stretto ha la forza maggiore sul fondo'],
      ['The force depends on the total weight of water inside the vase', 'La forza sul fondo dipende dalla massa totale di acqua contenuta nel vaso']
    ],
    why: [
      'This is the hydrostatic paradox: pressure on the bottom depends only on depth h and density ρ (p = ρgh). Since area S is identical, force F = p · S is identical in all vases regardless of shape or total volume of water.',
      'È il paradosso idrostatico: la pressione sul fondo dipende unicamente dall\'altezza del liquido h (p = ρgh). A parità di superficie di base S, la forza F = p · S è identica in tutti i vasi.'
    ]
  },
  {
    id: 'phys-ch5-05',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 20,
    missionId: 'phys_q_ch5',
    chapterTitle: ['Equilibrium of Fluids', "L'equilibrio dei fluidi"],
    missionTitle: ['Communicating Vessels Different Liquids', 'Vasi comunicanti con liquidi diversi'],
    q: [
      'In a U-tube communicating vessel with water (ρ₁ = 1 000 kg/m³) and oil (ρ₂ = 800 kg/m³), which column will stand taller above the interface?',
      'In un tubo a U con acqua (ρ₁ = 1 000 kg/m³) e olio non miscibile (ρ₂ = 800 kg/m³), quale colonna di liquido sarà più alta sopra il livello di separazione?'
    ],
    a: [
      ['The oil column, because less dense liquids require greater height for equal pressure (h₁/h₂ = ρ₂/ρ₁)', 'La colonna d\'olio, perché un liquido meno denso richiede un\'altezza maggiore per equilibrare la pressione (h₁/h₂ = ρ₂/ρ₁)'],
      ['The water column, because it is denser', 'La colonna d\'acqua, perché è più densa'],
      ['Both columns must reach the exact same height', 'Entrambe le colonne raggiungono esattamente la stessa altezza'],
      ['Oil cannot balance water in a U-tube', 'L\'olio non può stare in equilibrio con l\'acqua']
    ],
    why: [
      'At equilibrium, pressures at the interface balance: ρ₁ · g · h₁ = ρ₂ · g · h₂ → h₁ / h₂ = ρ₂ / ρ₁. The less dense liquid (oil) requires a taller column to exert the same pressure.',
      'All\'interfaccia di separazione le pressioni idrostatiche devono eguagliarsi: ρ₁ · h₁ = ρ₂ · h₂. Le altezze sono inversamente proporzionali alle densità: il liquido meno denso (olio) raggiunge un livello più alto.'
    ]
  },
  {
    id: 'phys-ch5-06',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 20,
    missionId: 'phys_q_ch5',
    chapterTitle: ['Equilibrium of Fluids', "L'equilibrio dei fluidi"],
    missionTitle: ['Torricelli Mercury Height', 'Esperienza di Torricelli'],
    q: [
      'In Torricelli\'s famous barometer experiment at sea level, why did the mercury column stand at approximately 76 cm?',
      'Nella celebre esperienza di Torricelli a livello del mare, perché la colonna di mercurio si ferma a circa 76 cm?'
    ],
    a: [
      ['The hydrostatic pressure of 76 cm of mercury balances the external atmospheric pressure', 'La pressione idrostatica di 76 cm di mercurio bilancia esattamente la pressione atmosferica esterna'],
      ['Because 76 cm was the maximum length of Torricelli\'s glass tube', 'Perché 76 cm era la lunghezza massima del tubo di vetro di Torricelli'],
      ['Because mercury vaporizes above 76 cm', 'Perché il mercurio evapora oltre i 76 cm'],
      ['Because gravity stops acting above 76 cm', 'Perché la gravità smette di agire al di sopra di 76 cm']
    ],
    why: [
      'Atmospheric pressure pushing on the open pool supports the weight of the mercury column inside the vacuum tube: p_atm = ρ_Hg · g · h = 13600 × 9.81 × 0.76 ≈ 101 300 Pa.',
      'La pressione atmosferica che grava sulla vaschetta sostiene il peso della colonna di mercurio: p_atm = ρ_Hg · g · h = 13600 kg/m³ × 9,81 m/s² × 0,76 m ≈ 101 300 Pa.'
    ]
  },
  {
    id: 'phys-ch5-07',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 20,
    missionId: 'phys_q_ch5',
    chapterTitle: ['Equilibrium of Fluids', "L'equilibrio dei fluidi"],
    missionTitle: ['Torricelli Water Tube Height', 'Barometro ad acqua'],
    q: [
      'If Torricelli had used water (density 1 000 kg/m³) instead of mercury (13 600 kg/m³), roughly how tall would the column have to be?',
      'Se Torricelli avesse usato acqua (densità 1 000 kg/m³) al posto del mercurio (13 600 kg/m³), quanto dovrebbe essere alta circa la colonna?'
    ],
    a: [
      ['Approximately 10.3 metres', 'Circa 10,3 metri'],
      ['76 centimetres', '76 centimetri'],
      ['1 metre', '1 metro'],
      ['76 metres', '76 metri']
    ],
    why: [
      'Since water is 13.6 times less dense than mercury, the column must be 13.6 times taller: h = 0.76 m × 13.6 ≈ 10.33 m.',
      'Essendo l\'acqua 13,6 volte meno densa del mercurio, per produrre la stessa pressione occorre una colonna 13,6 volte più alta: 0,76 m × 13,6 ≈ 10,33 m.'
    ]
  },
  {
    id: 'phys-ch5-08',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 20,
    missionId: 'phys_q_ch5',
    chapterTitle: ['Equilibrium of Fluids', "L'equilibrio dei fluidi"],
    missionTitle: ['Archimedes Principle Origin', 'Origine fisica della spinta di Archimede'],
    q: [
      'What is the fundamental physical cause of the upward Archimedes buoyant force on a submerged body?',
      'Qual è l\'origine fisica microscopica della spinta verso l\'alto di Archimede su un corpo immerso?'
    ],
    a: [
      ['Hydrostatic pressure increases with depth, so upward pressure on the bottom face exceeds downward pressure on the top face', 'La pressione idrostatica aumenta con la profondità, quindi la pressione dal basso verso l\'alto sul fondo è maggiore di quella dall\'alto sul tetto'],
      ['The body repels fluid molecules by electrostatic charge', 'Il corpo respinge le molecole del fluido mediante carica elettrostatica'],
      ['Fluids possess negative gravitational mass', 'I fluidi possiedono massa gravitazionale negativa'],
      ['Friction against the surrounding fluid pushes upward', 'L\'attrito contro il fluido circostante spinge verso l\'alto']
    ],
    why: [
      'Because pressure increases with depth (p = ρgh), the bottom of any submerged object experiences higher upward pressure than the downward pressure on its top. The net vertical pressure difference creates the upward buoyant force.',
      'Poiché la pressione idrostatica cresce con la profondità, la base inferiore del corpo subisce una pressione diretta verso l\'alto maggiore rispetto a quella che preme verso il basso sulla base superiore. La risultante è la spinta di Archimede.'
    ]
  },
  {
    id: 'phys-ch5-09',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 20,
    missionId: 'phys_q_ch5',
    chapterTitle: ['Equilibrium of Fluids', "L'equilibrio dei fluidi"],
    missionTitle: ['Archimedes Force Calculation', 'Calcolo della spinta di Archimede'],
    q: [
      'A solid with volume V = 0.002 m³ (2 L) is completely submerged in water (ρ = 1 000 kg/m³, g = 9.8 N/kg). What buoyant force does it experience?',
      'Un solido di volume V = 0,002 m³ (2 litri) è completamente immerso in acqua (ρ = 1 000 kg/m³, g = 9,8 N/kg). Qual è la spinta di Archimede?'
    ],
    a: [
      ['19.6 N', '19,6 N'],
      ['2 N', '2 N'],
      ['196 N', '196 N'],
      ['0.002 N', '0,002 N']
    ],
    why: [
      'F_A = ρ_fluid · V · g = 1 000 kg/m³ × 0.002 m³ × 9.8 N/kg = 2 kg × 9.8 N/kg = 19.6 N (equal to the weight of 2 L of displaced water).',
      'La spinta di Archimede vale F_A = ρ · V · g = 1 000 kg/m³ × 0,002 m³ × 9,8 N/kg = 19,6 N (pari al peso dei 2 kg d\'acqua spostata).'
    ]
  },
  {
    id: 'phys-ch5-10',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 20,
    missionId: 'phys_q_ch5',
    chapterTitle: ['Equilibrium of Fluids', "L'equilibrio dei fluidi"],
    missionTitle: ['Floating Condition Ratio', 'Condizione di galleggiamento'],
    q: [
      'A block of wood has a density of 600 kg/m³. When floating in freshwater (1 000 kg/m³), what fraction of its total volume is submerged?',
      'Un blocco di legno ha densità 600 kg/m³. Quando galleggia in acqua dolce (1 000 kg/m³), quale frazione del suo volume totale è immersa?'
    ],
    a: [
      ['60% (V_sub / V_tot = ρ_body / ρ_fluid)', '60% (V_immerso / V_totale = ρ_corpo / ρ_fluido)'],
      ['40%', '40%'],
      ['100%', '100%'],
      ['6%', '6%']
    ],
    why: [
      'For a floating body in equilibrium, buoyant force balances weight: ρ_fluid · V_sub · g = ρ_body · V_tot · g → V_sub / V_tot = ρ_body / ρ_fluid = 600 / 1000 = 0.60 (60%).',
      'All\'equilibrio il peso uguaglia la spinta di Archimede: ρ_legno · V_tot · g = ρ_acqua · V_imm · g. Da cui V_imm / V_tot = 600 / 1000 = 0,60 (il 60% è immerso, il 40% emerge).'
    ]
  },
  {
    id: 'phys-ch5-11',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 20,
    missionId: 'phys_q_ch5',
    chapterTitle: ['Equilibrium of Fluids', "L'equilibrio dei fluidi"],
    missionTitle: ['Why Steel Ships Float', 'Galleggiamento delle navi in acciaio'],
    q: [
      'Steel has a density of about 7 800 kg/m³, yet huge steel ships easily float on water. Why?',
      'L\'acciaio ha una densità di circa 7 800 kg/m³, eppure le enormi navi di acciaio galleggiano facilmente. Perché?'
    ],
    a: [
      ['The ship\'s hollow hull encloses a huge volume of air, making its average density lower than water', 'Lo scafo cavo racchiude una grande quantità d\'aria, rendendo la densità media complessiva della nave inferiore a quella dell\'acqua'],
      ['Salt in the ocean makes steel water-repellent', 'Il sale dell\'oceano rende l\'acciaio idrorepellente'],
      ['Ocean waves create constant upward aerodynamic lift', 'Le onde marine creano una portanza aerodinamica costante'],
      ['Water surface tension holds the steel hull up', 'La tensione superficiale dell\'acqua sostiene lo scafo di acciaio']
    ],
    why: [
      'Flotation depends on overall average density (total mass divided by total volume of displacement). The enclosed air volume makes the ship\'s average density well below 1 000 kg/m³.',
      'Il galleggiamento dipende dalla densità media complessiva (massa totale divisa per il volume totale dello scafo immerso). L\'aria interna rende la nave nel suo complesso molto meno densa dell\'acqua.'
    ]
  },
  {
    id: 'phys-ch5-12',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 20,
    missionId: 'phys_q_ch5',
    chapterTitle: ['Equilibrium of Fluids', "L'equilibrio dei fluidi"],
    missionTitle: ['Atmospheric Pressure Unit Bar', 'Unità bar e atmosfera'],
    q: [
      'In meteorology and engineering, 1 bar is defined as exactly how many Pascals?',
      'In meteorologia e ingegneria, a quanti Pascal corrisponde esattamente 1 bar?'
    ],
    a: [
      ['100 000 Pa (10⁵ Pa)', '100 000 Pa (10⁵ Pa)'],
      ['1 000 Pa (10³ Pa)', '1 000 Pa (10³ Pa)'],
      ['101 325 Pa', '101 325 Pa'],
      ['1 000 000 Pa (10⁶ Pa)', '1 000 000 Pa (10⁶ Pa)']
    ],
    why: [
      '1 bar = 100 000 Pa = 10⁵ Pa = 100 kPa. Standard atmospheric pressure is 1.01325 bar (1013.25 mbar / hPa).',
      'Per definizione 1 bar = 10⁵ Pa = 100 000 Pa. La pressione atmosferica standard a livello del mare vale 1,013 bar = 1013 hPa.'
    ]
  },
  {
    id: 'phys-ch5-13',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 20,
    missionId: 'phys_q_ch5',
    chapterTitle: ['Equilibrium of Fluids', "L'equilibrio dei fluidi"],
    missionTitle: ['Submarine Buoyancy Control', 'Funzionamento dei sottomarini'],
    q: [
      'How does a submarine dive down or surface back up in seawater?',
      'In che modo un sottomarino si immerge o riemerge in mare?'
    ],
    a: [
      ['It floods ballast tanks with water to increase average density to sink, and uses compressed air to blow water out to float', 'Riempie d\'acqua i serbatoi di zavorra per aumentare la densità media e scendere, ed espelle l\'acqua con aria compressa per risalire'],
      ['It increases engine power downward', 'Aumenta la potenza dei motori verso il basso'],
      ['It expands its metal hull to change outer shape', 'Allarga lo scafo metallico per cambiare forma'],
      ['It modifies water temperature around its hull', 'Modifica la temperatura dell\'acqua circostante']
    ],
    why: [
      'By filling ballast tanks with seawater, the submarine\'s average density exceeds seawater (ρ > ρ_water), causing it to sink. Blown with compressed air, water is ejected, lowering density below seawater (ρ < ρ_water) to float.',
      'Regolando l\'acqua nei serbatoi di zavorra, il sottomarino varia la propria densità media: imbarcando acqua diventa più denso dell\'acqua di mare e scende; svuotandoli con aria compressa diventa meno denso e risale.'
    ]
  },
  {
    id: 'phys-ch5-14',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 20,
    missionId: 'phys_q_ch5',
    chapterTitle: ['Equilibrium of Fluids', "L'equilibrio dei fluidi"],
    missionTitle: ['Pressure at 10m Sea Depth', 'Pressione a 10 metri sott\'acqua'],
    q: [
      'Approximately what is the absolute total pressure experienced by a scuba diver at a depth of 10 metres in seawater (ρ ≈ 1 000 kg/m³, p_atm ≈ 10⁵ Pa)?',
      'A quale pressione totale assoluta è sottoposto un subacqueo a 10 metri di profondità in mare (ρ ≈ 1 000 kg/m³, p_atm ≈ 10⁵ Pa)?'
    ],
    a: [
      ['Approximately 2 atm (≈ 2 × 10⁵ Pa)', 'Circa 2 atm (≈ 2 × 10⁵ Pa)'],
      ['Approximately 1 atm (10⁵ Pa)', 'Circa 1 atm (10⁵ Pa)'],
      ['Approximately 10 atm', 'Circa 10 atm'],
      ['Approximately 0.5 atm', 'Circa 0,5 atm']
    ],
    why: [
      'A 10 m column of water exerts roughly 1 atm of hydrostatic pressure (ρgh = 1000 × 9.8 × 10 ≈ 9.8 × 10⁴ Pa ≈ 1 atm). Adding the atmospheric pressure on the surface (1 atm) gives a total of approximately 2 atm.',
      'Una colonna d\'acqua alta 10 m genera circa 1 atmosfera di pressione idrostatica (ρgh ≈ 10⁵ Pa). Sommando la pressione atmosferica in superficie (1 atm), a 10 m di profondità la pressione totale raddoppia: circa 2 atm.'
    ]
  },
  {
    id: 'phys-ch5-15',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 20,
    missionId: 'phys_q_ch5',
    chapterTitle: ['Equilibrium of Fluids', "L'equilibrio dei fluidi"],
    missionTitle: ['Density of Saltwater vs Freshwater', 'Galleggiamento in acqua salata'],
    q: [
      'Why does a swimmer or boat float noticeably higher in the salty Dead Sea than in an ordinary freshwater swimming pool?',
      'Perché un nuotatore o una barca galleggiano molto più in alto nel Mar Morto (salatissimo) rispetto a una piscina d\'acqua dolce?'
    ],
    a: [
      ['Saltwater has a higher density, so less volume of water must be displaced to balance the swimmer\'s weight', 'L\'acqua salata ha una densità maggiore, quindi occorre spostare un volume minore di liquido per equilibrare il peso'],
      ['Salt reduces the swimmer\'s gravitational mass', 'Il sale riduce la massa gravitazionale del nuotatore'],
      ['Saltwater has lower hydrostatic pressure', 'L\'acqua salata ha una pressione idrostatica minore'],
      ['Salt crystals create an upward magnetic force', 'I cristalli di sale generano una forza magnetica verso l\'alto']
    ],
    why: [
      'Since F_A = ρ_fluid · V_sub · g = Weight, if density ρ_fluid is higher, the submerged volume V_sub required to balance weight is smaller (less of the body sinks).',
      'Poiché il peso è costante, da P = ρ_fluido · V_imm · g si vede che maggiore è la densità del liquido (come nell\'acqua ad alta salinità), minore è il volume che deve immergersi per sostenerlo.'
    ]
  },
  {
    id: 'phys-ch5-16',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 20,
    missionId: 'phys_q_ch5',
    chapterTitle: ['Equilibrium of Fluids', "L'equilibrio dei fluidi"],
    missionTitle: ['Atmospheric Pressure Altitude Trend', 'Pressione atmosferica e altitudine'],
    q: [
      'As a hiker climbs a tall mountain from sea level up to 3 000 m, how does atmospheric pressure change?',
      'Mentre un escursionista sale su un\'alta montagna da 0 m a 3 000 m di quota, come varia la pressione atmosferica?'
    ],
    a: [
      ['It decreases, because the column of air above the hiker becomes shorter and less dense', 'Diminuisce, perché la colonna d\'aria sovrastante diventa più corta e meno densa'],
      ['It increases, because cold air is heavier', 'Aumenta, perché l\'aria fredda in quota è più pesante'],
      ['It remains constant everywhere in the atmosphere', 'Rimane costante in qualunque punto dell\'atmosfera'],
      ['It drops immediately to zero at 1 000 m', 'Crolla immediatamente a zero superati i 1 000 m']
    ],
    why: [
      'Atmospheric pressure is caused by the weight of air above. As altitude increases, there is less overlying air, and air density decreases, causing atmospheric pressure to drop.',
      'La pressione atmosferica è dovuta al peso dell\'aria sovrastante. Salendo di quota lo spessore dell\'atmosfera sopra la nostra testa diminuisce e l\'aria si rarefà, facendo calare la pressione.'
    ]
  },
  {
    id: 'phys-ch5-17',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 20,
    missionId: 'phys_q_ch5',
    chapterTitle: ['Equilibrium of Fluids', "L'equilibrio dei fluidi"],
    missionTitle: ['Liquids vs Gases Compressibility', 'Comprimibilità di liquidi e gas'],
    q: [
      'Why are hydraulic brakes in automobiles filled with oil rather than air?',
      'Perché i freni idraulici delle automobili sono riempiti di liquido (olio) anziché di aria?'
    ],
    a: [
      ['Liquids are practically incompressible, transmitting force instantly, while air compresses and absorbs the motion', 'I liquidi sono praticamente incomprimibili e trasmettono la pressione istantaneamente, mentre l\'aria si comprimerebbe assorbendo la spinta'],
      ['Liquids create zero friction against the brake pads', 'I liquidi non creano alcun attrito contro i dischi'],
      ['Air would freeze at normal room temperature', 'L\'aria congelerebbe a temperatura ambiente'],
      ['Liquid molecules have higher electrical conductivity', 'Le molecole liquide hanno una conduttività elettrica più elevata']
    ],
    why: [
      'Liquids have fixed volume (incompressible) so any push at the pedal transfers immediately to the calipers. Air would compress like a sponge, causing spongy brake failure.',
      'I liquidi hanno volume proprio e sono incomprimibili, trasmettendo all\'istante la pressione dal pedale alle pinze. L\'aria invece si comprimerebbe riducendo o annullando la frenata.'
    ]
  },
  {
    id: 'phys-ch5-18',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 20,
    missionId: 'phys_q_ch5',
    chapterTitle: ['Equilibrium of Fluids', "L'equilibrio dei fluidi"],
    missionTitle: ['Iceberg Submerged Fraction', 'Galleggiamento di un iceberg'],
    q: [
      'Ice has a density of 920 kg/m³ and seawater has 1 025 kg/m³. Approximately what percentage of an iceberg is hidden underwater?',
      'Il ghiaccio ha una densità di 920 kg/m³ e l\'acqua di mare di 1 025 kg/m³. Quale percentuale circa di un iceberg rimane nascosta sott\'acqua?'
    ],
    a: [
      ['Approximately 90% (89.8%)', 'Circa il 90% (89,8%)'],
      ['Approximately 50%', 'Circa il 50%'],
      ['Approximately 10%', 'Circa il 10%'],
      ['Approximately 75%', 'Circa il 75%']
    ],
    why: [
      'V_sub / V_tot = ρ_ice / ρ_seawater = 920 / 1025 ≈ 0.898 = 89.8%. Roughly 90% of an iceberg is underwater, giving rise to the saying "tip of the iceberg".',
      'La frazione immersa è V_imm / V_tot = 920 / 1025 ≈ 0,898 = 89,8%. Circa il 90% dell\'iceberg è sommerso, motivo per cui ciò che emerge è solo la "punta dell\'iceberg".'
    ]
  },
  {
    id: 'phys-ch5-19',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 20,
    missionId: 'phys_q_ch5',
    chapterTitle: ['Equilibrium of Fluids', "L'equilibrio dei fluidi"],
    missionTitle: ['Hydraulic Jack Work Conservation', 'Lavoro nel torchio idraulico'],
    q: [
      'In an ideal hydraulic lift, the large piston multiplies force by 20. How does the distance moved by the large piston compare to the small piston?',
      'In un torchio idraulico ideale il pistone grande moltiplica la forza per 20. Come è lo spostamento del pistone grande rispetto a quello piccolo?'
    ],
    a: [
      ['The large piston moves 1/20th the distance of the small piston (conservation of energy / work)', 'Il pistone grande si sposta di 1/20 rispetto al pistone piccolo (conservazione dell\'energia e del volume)'],
      ['The large piston moves 20 times further', 'Il pistone grande si sposta 20 volte di più'],
      ['Both pistons move the exact same distance', 'I due pistoni compiono esattamente lo stesso spostamento'],
      ['The large piston does not move at all', 'Il pistone grande non si muove affatto']
    ],
    why: [
      'Volume displaced is conserved (V = S₁ · d₁ = S₂ · d₂). Since S₂ = 20 · S₁, d₂ = d₁ / 20. Mechanical work input equals work output (W = F · d): force is multiplied at the cost of distance.',
      'Il volume di liquido spostato si conserva: S₁ · d₁ = S₂ · d₂. Se la forza aumenta di 20 volte, lo spostamento deve ridursi di 20 volte, rispettando il principio di conservazione del lavoro meccanico.'
    ]
  },
  {
    id: 'phys-ch5-20',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 20,
    missionId: 'phys_q_ch5',
    chapterTitle: ['Equilibrium of Fluids', "L'equilibrio dei fluidi"],
    missionTitle: ['Pressure at Liquid Interface in Open Container', 'Pressione assoluta e idrostatica'],
    q: [
      'To calculate the absolute total pressure at depth h in an open pool, why must atmospheric pressure p_0 be added to Stevin\'s term ρgh?',
      'Per calcolare la pressione totale assoluta alla profondità h in una piscina aperta, perché alla legge di Stevino (ρgh) si somma la pressione atmosferica p_0?'
    ],
    a: [
      ['By Pascal\'s principle, atmospheric pressure pushing on the pool surface transmits undiminished to all depths', 'Per il principio di Pascal, la pressione atmosferica che grava sulla superficie libera si trasmette inalterata a ogni profondità'],
      ['Because atmospheric air dissolves in water', 'Perché l\'aria atmosferica si scioglie nell\'acqua'],
      ['Because gravity is doubled by air', 'Perché la gravità viene raddoppiata dall\'aria'],
      ['Because water molecules expand in air', 'Perché le molecole d\'acqua si espandono nell\'aria']
    ],
    why: [
      'By Pascal\'s principle, the atmospheric pressure p_0 acting on the surface of the liquid is transmitted uniformly to every point throughout the fluid. Total pressure is p = p_0 + ρgh.',
      'Poiché la superficie libera dell\'acqua è a contatto con l\'atmosfera, per il principio di Pascal tale pressione p_0 si trasmette a tutto il liquido. La pressione totale è la somma: p = p_0 + ρgh.'
    ]
  }
];
