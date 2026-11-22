import type { Language } from '../types';
import { CHEM9_BUILDERS } from './chemVisualsG9';

/** Diagrams redrawn large and clear (see sciViz.ts); these take priority over the older drawings below. */
const CHEM_REDRAWN: Record<string, (lang: Language) => string> = { ...CHEM9_BUILDERS };

export const CHEM_VISUAL_KEYS = [
  'chemStates',
  'chemMixtures',
  'chemSeparation',
  'chemLaws',
  'chemMole',
  'chemGas',
  'chemAtomModels',
  'chemOrbitals',
  'chemPeriodic',
  'chemBonds',
  'chemVSEPR',
  'chemNomenclature',
  'chemBalancing',
  'chemStoich',
  'chemSolutions',
  'chemThermo',
  'chemKinetics',
  'chemEquilibrium',
  'chemAcidsPH',
  'chemRedox',
  'chemOrganic',
  'chemPhysVsChem',
  'chemMixVsPure',
  'chemDistillFlow',
  'chemDaltonBlocks',
  'chemAvogadroScale',
  'chemKelvinScale',
  'chemAufbauRules',
  'chemPolarityTug',
  'chemCrissCross',
  'chemSaltFamily',
  'chemSandwichStoich',
  'chemDilutionPour',
  'chemBronstedPass',
  'chemElectroCell',
  'chemPolymers'
] as const;

export type ChemVisualKey = typeof CHEM_VISUAL_KEYS[number];

const pick = (lang: Language, en: string, it: string) => (lang === 'it' ? it : en);

export function getChemVisual(key: string, lang: Language): string | null {
  const redrawn = CHEM_REDRAWN[key];
  if (redrawn) return redrawn(lang);
  switch (key) {
    case 'chemStates':
      return `<svg viewBox="0 0 640 215" class="dia" width="100%" aria-hidden="true">
        <rect x="14" y="18" width="180" height="170" rx="14" fill="rgba(106,209,255,.08)" stroke="#45d8ff" stroke-width="2"/>
        <text x="104" y="42" text-anchor="middle" fill="#45d8ff" font-size="14" font-weight="800">${pick(lang, 'SOLID', 'SOLIDO')}</text>
        <g fill="#45d8ff">
          <circle cx="72" cy="82" r="10" class="chem-anim-vibrate" style="animation-delay:-0.0s"/><circle cx="104" cy="82" r="10" class="chem-anim-vibrate" style="animation-delay:-0.37s"/><circle cx="136" cy="82" r="10" class="chem-anim-vibrate" style="animation-delay:-0.74s"/>
          <circle cx="72" cy="114" r="10" class="chem-anim-vibrate" style="animation-delay:-1.11s"/><circle cx="104" cy="114" r="10" class="chem-anim-vibrate" style="animation-delay:-1.48s"/><circle cx="136" cy="114" r="10" class="chem-anim-vibrate" style="animation-delay:-1.85s"/>
          <circle cx="72" cy="146" r="10" class="chem-anim-vibrate" style="animation-delay:-0.02s"/><circle cx="104" cy="146" r="10" class="chem-anim-vibrate" style="animation-delay:-0.39s"/><circle cx="136" cy="146" r="10" class="chem-anim-vibrate" style="animation-delay:-0.76s"/>
        </g>
        <text x="104" y="176" text-anchor="middle" class="sm">${pick(lang, 'Fixed shape & volume', 'Forma e volume propri')}</text>

        <rect x="230" y="18" width="180" height="170" rx="14" fill="rgba(56,239,125,.08)" stroke="#38ef7d" stroke-width="2"/>
        <text x="320" y="42" text-anchor="middle" fill="#38ef7d" font-size="14" font-weight="800">${pick(lang, 'LIQUID', 'LIQUIDO')}</text>
        <g fill="#38ef7d">
          <circle cx="272" cy="108" r="10" class="chem-anim-float" style="animation-delay:-0.0s"/><circle cx="305" cy="114" r="10" class="chem-anim-float" style="animation-delay:-0.37s"/><circle cx="338" cy="105" r="10" class="chem-anim-float" style="animation-delay:-0.74s"/><circle cx="368" cy="118" r="10" class="chem-anim-float" style="animation-delay:-1.11s"/>
          <circle cx="284" cy="138" r="10" class="chem-anim-float" style="animation-delay:-1.48s"/><circle cx="320" cy="144" r="10" class="chem-anim-float" style="animation-delay:-1.85s"/><circle cx="354" cy="142" r="10" class="chem-anim-float" style="animation-delay:-0.02s"/>
          <circle cx="298" cy="84" r="10" class="chem-anim-float" style="animation-delay:-0.39s"/><circle cx="342" cy="82" r="10" class="chem-anim-float" style="animation-delay:-0.76s"/>
        </g>
        <text x="320" y="176" text-anchor="middle" class="sm">${pick(lang, 'Fixed volume, flows', 'Volume proprio, scorre')}</text>

        <rect x="446" y="18" width="180" height="170" rx="14" fill="rgba(255,209,102,.08)" stroke="#ffd166" stroke-width="2"/>
        <text x="536" y="42" text-anchor="middle" fill="#ffd166" font-size="14" font-weight="800">${pick(lang, 'GAS', 'AERIFORME')}</text>
        <g fill="#ffd166">
          <circle cx="478" cy="72" r="8" class="chem-anim-bounce" style="animation-delay:-0.0s"/><circle cx="576" cy="68" r="8" class="chem-anim-bounce" style="animation-delay:-0.37s"/>
          <circle cx="520" cy="104" r="8" class="chem-anim-bounce" style="animation-delay:-0.74s"/><circle cx="592" cy="130" r="8" class="chem-anim-bounce" style="animation-delay:-1.11s"/>
          <circle cx="486" cy="142" r="8" class="chem-anim-bounce" style="animation-delay:-1.48s"/><circle cx="548" cy="148" r="8" class="chem-anim-bounce" style="animation-delay:-1.85s"/>
        </g>
        <path d="M488 76 l14 10 M570 76 l-14 12 M526 108 l16 -8" stroke="#ffd166" stroke-width="2" stroke-dasharray="3 2"/>
        <text x="536" y="176" text-anchor="middle" class="sm">${pick(lang, 'Fills entire container', 'Occupa tutto il recipiente')}</text>
      </svg>`;

    case 'chemMixtures':
      return `<svg viewBox="0 0 640 210" class="dia" width="100%" aria-hidden="true">
        <rect x="210" y="10" width="220" height="42" rx="10" fill="rgba(255,255,255,.06)" stroke="#ffd166" stroke-width="2"/>
        <text x="320" y="36" text-anchor="middle" fill="#ffd166" font-size="15" font-weight="800">${pick(lang, 'MATTER', 'LA MATERIA')}</text>
        <line x1="250" y1="52" x2="155" y2="82" stroke="#99a8cc" stroke-width="2"/>
        <line x1="390" y1="52" x2="485" y2="82" stroke="#99a8cc" stroke-width="2"/>

        <rect x="30" y="82" width="250" height="114" rx="12" fill="rgba(69,216,255,.08)" stroke="#45d8ff" stroke-width="2"/>
        <text x="155" y="106" text-anchor="middle" fill="#45d8ff" font-size="14" font-weight="800">${pick(lang, 'PURE SUBSTANCES', 'SOSTANZE PURE')}</text>
        <text x="155" y="130" text-anchor="middle" class="sm">${pick(lang, '• Elements (O₂, Fe, Au)', '• Elementi (O₂, Fe, Au)')}</text>
        <text x="155" y="152" text-anchor="middle" class="sm">${pick(lang, '• Compounds (H₂O, NaCl)', '• Composti (H₂O, NaCl)')}</text>
        <text x="155" y="178" text-anchor="middle" fill="#7bd88f" font-size="12" font-weight="700">${pick(lang, 'Fixed formula & melting point', 'Formula e T fusione costanti')}</text>

        <rect x="360" y="82" width="250" height="114" rx="12" fill="rgba(255,106,61,.08)" stroke="#ff6a3d" stroke-width="2"/>
        <text x="485" y="106" text-anchor="middle" fill="#ff6a3d" font-size="14" font-weight="800">${pick(lang, 'MIXTURES', 'MISCUGLI')}</text>
        <text x="485" y="130" text-anchor="middle" class="sm">${pick(lang, '• Homogeneous (1 phase: salt water)', '• Omogenei (1 fase: acqua e sale)')}</text>
        <text x="485" y="152" text-anchor="middle" class="sm">${pick(lang, '• Heterogeneous (2+ phases: sand+water)', '• Eterogenei (2+ fasi: acqua e sabbia)')}</text>
        <text x="485" y="178" text-anchor="middle" fill="#ffd166" font-size="12" font-weight="700">${pick(lang, 'Physical separation possible', 'Separabili con metodi fisici')}</text>
      
        <rect x="30" y="82" width="250" height="114" rx="12" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.5000" dur="4.0s" begin="0.0s" repeatCount="indefinite"/></rect><rect x="360" y="82" width="250" height="114" rx="12" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.5000" dur="4.0s" begin="2.0s" repeatCount="indefinite"/></rect>
        <circle r="4" fill="#99a8cc"><animateMotion dur="1.6s" begin="0s" repeatCount="indefinite" path="M250 52 L155 82"/></circle><circle r="4" fill="#99a8cc"><animateMotion dur="1.6s" begin="0.4s" repeatCount="indefinite" path="M390 52 L485 82"/></circle>
      </svg>`;

    case 'chemSeparation':
      return `<svg viewBox="0 0 640 205" class="dia" width="100%" aria-hidden="true">
        <rect x="14" y="20" width="142" height="162" rx="12" fill="rgba(69,216,255,.07)" stroke="#45d8ff" stroke-width="2"/>
        <text x="85" y="46" text-anchor="middle" fill="#45d8ff" font-size="13" font-weight="800">${pick(lang, 'Filtration', 'Filtrazione')}</text>
        <polygon points="55,66 115,66 85,108" fill="none" stroke="#ffd166" stroke-width="2"/>
        <line x1="85" y1="108" x2="85" y2="128" stroke="#45d8ff" stroke-width="2"/>
        <circle cx="72" cy="72" r="3" fill="#ffd166"/><circle cx="85" cy="78" r="3" fill="#ffd166"/><circle cx="96" cy="72" r="3" fill="#ffd166"/>
        <circle cx="85" cy="110" r="3" fill="#45d8ff"><animate attributeName="cy" values="110;134" dur="1.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.8;1" dur="1.3s" repeatCount="indefinite"/></circle><circle cx="85" cy="110" r="3" fill="#45d8ff"><animate attributeName="cy" values="110;134" dur="1.3s" begin="-.65s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.8;1" dur="1.3s" begin="-.65s" repeatCount="indefinite"/></circle>
        <text x="85" y="152" text-anchor="middle" class="sm">${pick(lang, 'Particle size', 'Dimensione particelle')}</text>
        <text x="85" y="170" text-anchor="middle" class="sm">${pick(lang, 'Solid + Liquid', 'Solido + Liquido')}</text>

        <rect x="170" y="20" width="142" height="162" rx="12" fill="rgba(56,239,125,.07)" stroke="#38ef7d" stroke-width="2"/>
        <text x="241" y="46" text-anchor="middle" fill="#38ef7d" font-size="13" font-weight="800">${pick(lang, 'Distillation', 'Distillazione')}</text>
        <circle cx="222" cy="96" r="18" fill="none" stroke="#38ef7d" stroke-width="2"/>
        <circle cx="216" cy="102" r="2.5" fill="#38ef7d" class="chem-anim-bubble"/><circle cx="228" cy="104" r="2.5" fill="#38ef7d" class="chem-anim-bubble" style="animation-delay:-.7s"/>
        <path d="M236 82 L268 94 L268 122" fill="none" stroke="#ffd166" stroke-width="2" class="chem-anim-dash"/>
        <text x="241" y="152" text-anchor="middle" class="sm">${pick(lang, 'Boiling point', 'Punto di ebollizione')}</text>
        <text x="241" y="170" text-anchor="middle" class="sm">${pick(lang, 'Solutions', 'Soluzioni')}</text>

        <rect x="326" y="20" width="142" height="162" rx="12" fill="rgba(255,209,102,.07)" stroke="#ffd166" stroke-width="2"/>
        <text x="397" y="46" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="800">${pick(lang, 'Centrifugation', 'Centrifugazione')}</text>
        <circle cx="397" cy="96" r="22" fill="none" stroke="#ffd166" stroke-width="2" stroke-dasharray="6 4" class="chem-anim-orbit-fast" style="transform-box:fill-box;transform-origin:center"/>
        <text x="397" y="101" text-anchor="middle" fill="#ffd166" font-size="12" font-weight="800">RPM</text>
        <text x="397" y="152" text-anchor="middle" class="sm">${pick(lang, 'Density diff.', 'Differenza densità')}</text>
        <text x="397" y="170" text-anchor="middle" class="sm">${pick(lang, 'Suspensions', 'Sospensioni')}</text>

        <rect x="482" y="20" width="144" height="162" rx="12" fill="rgba(255,93,143,.07)" stroke="#ff5d8f" stroke-width="2"/>
        <text x="554" y="46" text-anchor="middle" fill="#ff5d8f" font-size="13" font-weight="800">${pick(lang, 'Chromatography', 'Cromatografia')}</text>
        <rect x="536" y="64" width="36" height="60" rx="4" fill="none" stroke="#ff5d8f" stroke-width="2"/>
        <circle cx="554" cy="78" r="4" fill="#45d8ff"><animate attributeName="cy" values="120;78;78" keyTimes="0;.75;1" dur="4s" repeatCount="indefinite"/></circle><circle cx="554" cy="96" r="4" fill="#ffd166"><animate attributeName="cy" values="120;96;96" keyTimes="0;.75;1" dur="4s" repeatCount="indefinite"/></circle><circle cx="554" cy="112" r="4" fill="#38ef7d"><animate attributeName="cy" values="120;112;112" keyTimes="0;.75;1" dur="4s" repeatCount="indefinite"/></circle>
        <text x="554" y="152" text-anchor="middle" class="sm">${pick(lang, 'Affinity / speed', 'Affinità tra fasi')}</text>
        <text x="554" y="170" text-anchor="middle" class="sm">${pick(lang, 'Pigments & inks', 'Pigmenti e inchiostri')}</text>
      </svg>`;

    case 'chemLaws':
      return `<svg viewBox="0 0 640 210" class="dia" width="100%" aria-hidden="true">
        <rect x="16" y="18" width="194" height="174" rx="12" fill="rgba(56,239,125,.08)" stroke="#38ef7d" stroke-width="2"/>
        <text x="113" y="44" text-anchor="middle" fill="#38ef7d" font-size="14" font-weight="800">Lavoisier (1789)</text>
        <text x="113" y="72" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">${pick(lang, 'Mass Conservation', 'Conservazione massa')}</text>
        <text x="113" y="106" text-anchor="middle" fill="#ffd166" font-size="14" font-weight="800">m(reag.) = m(prod.)</text>
        <text x="113" y="142" text-anchor="middle" class="sm">${pick(lang, '2 g H₂ + 16 g O₂ → 18 g H₂O', '2 g H₂ + 16 g O₂ → 18 g H₂O')}</text>
        <text x="113" y="168" text-anchor="middle" class="sm">${pick(lang, '(in a closed system)', '(in sistema chiuso)')}</text>

        <rect x="223" y="18" width="194" height="174" rx="12" fill="rgba(69,216,255,.08)" stroke="#45d8ff" stroke-width="2"/>
        <text x="320" y="44" text-anchor="middle" fill="#45d8ff" font-size="14" font-weight="800">Proust (1799)</text>
        <text x="320" y="72" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">${pick(lang, 'Definite Proportions', 'Proporzioni definite')}</text>
        <text x="320" y="106" text-anchor="middle" fill="#ffd166" font-size="14" font-weight="800">${pick(lang, 'Constant mass ratio', 'Rapporto di massa fisso')}</text>
        <text x="320" y="142" text-anchor="middle" class="sm">${pick(lang, 'In H₂O: always 1 g H : 8 g O', 'In H₂O: sempre 1 g H : 8 g O')}</text>
        <text x="320" y="168" text-anchor="middle" class="sm">${pick(lang, 'Any pure sample matches', 'Vale per ogni campione puro')}</text>

        <rect x="430" y="18" width="194" height="174" rx="12" fill="rgba(255,209,102,.08)" stroke="#ffd166" stroke-width="2"/>
        <text x="527" y="44" text-anchor="middle" fill="#ffd166" font-size="14" font-weight="800">Dalton (1803)</text>
        <text x="527" y="72" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">${pick(lang, 'Multiple Proportions', 'Proporzioni multiple')}</text>
        <text x="527" y="106" text-anchor="middle" fill="#38ef7d" font-size="14" font-weight="800">${pick(lang, 'Small whole-number ratios', 'Rapporti tra interi piccoli')}</text>
        <text x="527" y="142" text-anchor="middle" class="sm">CO (12 g C : 16 g O)</text>
        <text x="527" y="168" text-anchor="middle" class="sm">CO₂ (12 g C : 32 g O → 1:2)</text>
      
        <rect x="16" y="18" width="194" height="174" rx="12" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="0.0s" repeatCount="indefinite"/></rect><rect x="223" y="18" width="194" height="174" rx="12" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="2.0s" repeatCount="indefinite"/></rect><rect x="430" y="18" width="194" height="174" rx="12" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="4.0s" repeatCount="indefinite"/></rect>
      </svg>`;

    case 'chemMole':
      return `<svg viewBox="0 0 640 205" class="dia" width="100%" aria-hidden="true">
        <rect x="20" y="44" width="165" height="114" rx="14" fill="rgba(69,216,255,.1)" stroke="#45d8ff" stroke-width="2"/>
        <text x="102" y="82" text-anchor="middle" fill="#45d8ff" font-size="15" font-weight="800">${pick(lang, 'MASS (m)', 'MASSA (m)')}</text>
        <text x="102" y="110" text-anchor="middle" fill="#ffffff" font-size="13">grams (g)</text>
        <text x="102" y="138" text-anchor="middle" class="sm">m = n × M</text>

        <rect x="232" y="28" width="176" height="146" rx="16" fill="rgba(255,209,102,.12)" stroke="#ffd166" stroke-width="2.5"/>
        <text x="320" y="68" text-anchor="middle" fill="#ffd166" font-size="17" font-weight="800">${pick(lang, '1 MOLE (n)', '1 MOLE (n)')}</text>
        <text x="320" y="98" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">n = m / M</text>
        <text x="320" y="124" text-anchor="middle" fill="#38ef7d" font-size="13" font-weight="700">N = n × Nₐ</text>
        <text x="320" y="152" text-anchor="middle" class="sm">${pick(lang, '6.022 × 10²³ particles', '6,022 × 10²³ particelle')}</text>

        <rect x="455" y="44" width="165" height="114" rx="14" fill="rgba(56,239,125,.1)" stroke="#38ef7d" stroke-width="2"/>
        <text x="537" y="82" text-anchor="middle" fill="#38ef7d" font-size="15" font-weight="800">${pick(lang, 'PARTICLES (N)', 'PARTICELLE (N)')}</text>
        <text x="537" y="110" text-anchor="middle" fill="#ffffff" font-size="13">${pick(lang, 'atoms / molecules', 'atomi / molecole')}</text>
        <text x="537" y="138" text-anchor="middle" class="sm">÷ M | × Nₐ</text>

        <line x1="186" y1="100" x2="230" y2="100" stroke="#ffd166" stroke-width="2.5"/>
        <line x1="410" y1="100" x2="454" y2="100" stroke="#ffd166" stroke-width="2.5"/>
      
        <rect x="20" y="44" width="165" height="114" rx="14" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="0.0s" repeatCount="indefinite"/></rect><rect x="232" y="28" width="176" height="146" rx="16" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="2.0s" repeatCount="indefinite"/></rect><rect x="455" y="44" width="165" height="114" rx="14" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="4.0s" repeatCount="indefinite"/></rect>
        <circle r="4" fill="#ffd166"><animateMotion dur="1.2s" begin="0s" repeatCount="indefinite" path="M186 100 H230"/></circle><circle r="4" fill="#ffd166"><animateMotion dur="1.2s" begin="0.6s" repeatCount="indefinite" path="M230 100 H186"/></circle><circle r="4" fill="#ffd166"><animateMotion dur="1.2s" begin="0.3s" repeatCount="indefinite" path="M410 100 H454"/></circle><circle r="4" fill="#ffd166"><animateMotion dur="1.2s" begin="0.9s" repeatCount="indefinite" path="M454 100 H410"/></circle>
      </svg>`;

    case 'chemGas':
      return `<svg viewBox="0 0 640 205" class="dia" width="100%" aria-hidden="true">
        <rect x="24" y="20" width="592" height="165" rx="14" fill="rgba(69,216,255,.07)" stroke="#45d8ff" stroke-width="2"/>
        <text x="320" y="54" text-anchor="middle" fill="#ffd166" font-size="22" font-weight="800" class="chem-anim-pulse">P · V = n · R · T</text>
        <text x="320" y="82" text-anchor="middle" class="sm">${pick(lang, 'R = 0.0821 L·atm/(mol·K)  |  T(K) = t(°C) + 273.15', 'R = 0,0821 L·atm/(mol·K)  |  T(K) = t(°C) + 273,15')}</text>
        <rect x="48" y="102" width="165" height="62" rx="10" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.15)"/>
        <text x="130" y="126" text-anchor="middle" fill="#45d8ff" font-size="13" font-weight="700">Boyle (T cost.)</text>
        <text x="130" y="148" text-anchor="middle" class="sm">P₁V₁ = P₂V₂</text>
        <rect x="238" y="102" width="165" height="62" rx="10" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.15)"/>
        <text x="320" y="126" text-anchor="middle" fill="#38ef7d" font-size="13" font-weight="700">Charles (P cost.)</text>
        <text x="320" y="148" text-anchor="middle" class="sm">V₁ / T₁ = V₂ / T₂</text>
        <rect x="428" y="102" width="165" height="62" rx="10" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.15)"/>
        <text x="510" y="126" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="700">${pick(lang, 'Molar Vol. (STP)', 'Volume Molare (STP)')}</text>
        <text x="510" y="148" text-anchor="middle" class="sm">${pick(lang, '1 mol = 22.4 L', '1 mol = 22,4 L')}</text>
      
        <rect x="48" y="102" width="165" height="62" rx="10" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="0.0s" repeatCount="indefinite"/></rect><rect x="238" y="102" width="165" height="62" rx="10" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="2.0s" repeatCount="indefinite"/></rect><rect x="428" y="102" width="165" height="62" rx="10" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="4.0s" repeatCount="indefinite"/></rect>
      </svg>`;

    case 'chemAtomModels':
      return `<svg viewBox="0 0 640 205" class="dia" width="100%" aria-hidden="true">
        <g transform="translate(20,24)">
          <rect width="136" height="156" rx="12" fill="rgba(255,255,255,.04)" stroke="#99a8cc" stroke-width="1.5"/>
          <circle cx="68" cy="70" r="24" fill="#99a8cc" opacity="0.6"/>
          <text x="68" y="122" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="800">Dalton (1803)</text>
          <text x="68" y="142" text-anchor="middle" class="sm">${pick(lang, 'Solid sphere', 'Sfera indivisibile')}</text>
        </g>
        <g transform="translate(174,24)">
          <rect width="136" height="156" rx="12" fill="rgba(255,209,102,.06)" stroke="#ffd166" stroke-width="1.5"/>
          <circle cx="68" cy="70" r="24" fill="rgba(255,209,102,.28)" stroke="#ffd166" stroke-width="2"/>
          <circle cx="58" cy="64" r="4" fill="#45d8ff" class="chem-anim-vibrate"/><circle cx="77" cy="74" r="4" fill="#45d8ff" class="chem-anim-vibrate" style="animation-delay:-.1s"/><circle cx="66" cy="82" r="4" fill="#45d8ff" class="chem-anim-vibrate" style="animation-delay:-.2s"/>
          <text x="68" y="122" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="800">Thomson (1897)</text>
          <text x="68" y="142" text-anchor="middle" class="sm">${pick(lang, 'Plum pudding (e⁻)', 'Panettone (e⁻)')}</text>
        </g>
        <g transform="translate(328,24)">
          <rect width="136" height="156" rx="12" fill="rgba(255,106,61,.06)" stroke="#ff6a3d" stroke-width="1.5"/>
          <circle cx="68" cy="70" r="7" fill="#ff6a3d"/>
          <ellipse cx="68" cy="70" rx="34" ry="13" fill="none" stroke="#45d8ff" stroke-width="1.5" transform="rotate(28 68 70)"/>
          <ellipse cx="68" cy="70" rx="34" ry="13" fill="none" stroke="#45d8ff" stroke-width="1.5" transform="rotate(-28 68 70)"/>
          <g transform="rotate(28 68 70)"><circle r="3.5" fill="#ffd166"><animateMotion dur="2.4s" repeatCount="indefinite" path="M102 70 A34 13 0 1 1 34 70 A34 13 0 1 1 102 70"/></circle></g>
          <g transform="rotate(-28 68 70)"><circle r="3.5" fill="#ffd166"><animateMotion dur="3.1s" repeatCount="indefinite" path="M102 70 A34 13 0 1 0 34 70 A34 13 0 1 0 102 70"/></circle></g>
          <text x="68" y="122" text-anchor="middle" fill="#ff6a3d" font-size="13" font-weight="800">Rutherford (1911)</text>
          <text x="68" y="142" text-anchor="middle" class="sm">${pick(lang, 'Dense + nucleus', 'Nucleo denso + vuoto')}</text>
        </g>
        <g transform="translate(482,24)">
          <rect width="138" height="156" rx="12" fill="rgba(56,239,125,.08)" stroke="#38ef7d" stroke-width="2"/>
          <circle cx="69" cy="70" r="6" fill="#ffd166"/>
          <circle cx="69" cy="70" r="20" fill="none" stroke="#38ef7d" stroke-width="1.5"/>
          <circle cx="69" cy="70" r="34" fill="none" stroke="#45d8ff" stroke-width="1.5"/>
          <circle cx="89" cy="70" r="3.5" fill="#45d8ff"><animateTransform attributeName="transform" type="rotate" from="0 69 70" to="360 69 70" dur="2.6s" repeatCount="indefinite"/></circle><circle cx="35" cy="70" r="3.5" fill="#45d8ff"><animateTransform attributeName="transform" type="rotate" from="0 69 70" to="360 69 70" dur="4.2s" repeatCount="indefinite"/></circle>
          <text x="69" y="122" text-anchor="middle" fill="#38ef7d" font-size="13" font-weight="800">Bohr (1913)</text>
          <text x="69" y="142" text-anchor="middle" class="sm">${pick(lang, 'Quantized levels', 'Orbitali / livelli n')}</text>
        </g>
      </svg>`;

    case 'chemOrbitals':
      return `<svg viewBox="0 0 640 205" class="dia" width="100%" aria-hidden="true">
        <rect x="18" y="18" width="604" height="170" rx="14" fill="rgba(106,209,255,.06)" stroke="#45d8ff" stroke-width="2"/>
        <text x="320" y="46" text-anchor="middle" fill="#ffd166" font-size="15" font-weight="800">${pick(lang, 'Subshells & Electron Capacity (Aufbau · Pauli · Hund)', 'Sottolivelli e Capacità Elettronica (Aufbau · Pauli · Hund)')}</text>
        <g transform="translate(42,64)">
          <rect width="120" height="96" rx="10" fill="rgba(56,239,125,.12)" stroke="#38ef7d"/>
          <text x="60" y="34" text-anchor="middle" fill="#38ef7d" font-size="20" font-weight="800" class="chem-anim-pulse" style="animation-delay:0.0s">s</text>
          <text x="60" y="60" text-anchor="middle" fill="#ffffff" font-size="13">${pick(lang, '1 orbital', '1 orbitale')}</text>
          <text x="60" y="80" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="700">max 2 e⁻</text>
        </g>
        <g transform="translate(184,64)">
          <rect width="120" height="96" rx="10" fill="rgba(69,216,255,.12)" stroke="#45d8ff"/>
          <text x="60" y="34" text-anchor="middle" fill="#45d8ff" font-size="20" font-weight="800" class="chem-anim-pulse" style="animation-delay:0.45s">p</text>
          <text x="60" y="60" text-anchor="middle" fill="#ffffff" font-size="13">${pick(lang, '3 orbitals', '3 orbitali')}</text>
          <text x="60" y="80" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="700">max 6 e⁻</text>
        </g>
        <g transform="translate(326,64)">
          <rect width="120" height="96" rx="10" fill="rgba(255,209,102,.12)" stroke="#ffd166"/>
          <text x="60" y="34" text-anchor="middle" fill="#ffd166" font-size="20" font-weight="800" class="chem-anim-pulse" style="animation-delay:0.9s">d</text>
          <text x="60" y="60" text-anchor="middle" fill="#ffffff" font-size="13">${pick(lang, '5 orbitals', '5 orbitali')}</text>
          <text x="60" y="80" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="700">max 10 e⁻</text>
        </g>
        <g transform="translate(468,64)">
          <rect width="120" height="96" rx="10" fill="rgba(255,93,143,.12)" stroke="#ff5d8f"/>
          <text x="60" y="34" text-anchor="middle" fill="#ff5d8f" font-size="20" font-weight="800" class="chem-anim-pulse" style="animation-delay:1.35s">f</text>
          <text x="60" y="60" text-anchor="middle" fill="#ffffff" font-size="13">${pick(lang, '7 orbitals', '7 orbitali')}</text>
          <text x="60" y="80" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="700">max 14 e⁻</text>
        </g>
      </svg>`;

    case 'chemPeriodic':
      return `<svg viewBox="0 0 640 210" class="dia" width="100%" aria-hidden="true">
        <rect x="24" y="34" width="84" height="132" rx="8" fill="rgba(255,106,61,.16)" stroke="#ff6a3d" stroke-width="2"/>
        <text x="66" y="106" text-anchor="middle" fill="#ff6a3d" font-size="14" font-weight="800">${pick(lang, 's-block', 'Blocco s')}</text>
        <rect x="116" y="78" width="212" height="88" rx="8" fill="rgba(255,209,102,.12)" stroke="#ffd166" stroke-width="2"/>
        <text x="222" y="126" text-anchor="middle" fill="#ffd166" font-size="14" font-weight="800">${pick(lang, 'd-block (Transition)', 'Blocco d (Transizione)')}</text>
        <rect x="336" y="34" width="160" height="132" rx="8" fill="rgba(69,216,255,.14)" stroke="#45d8ff" stroke-width="2"/>
        <text x="416" y="106" text-anchor="middle" fill="#45d8ff" font-size="14" font-weight="800">${pick(lang, 'p-block', 'Blocco p')}</text>
        <rect x="504" y="34" width="46" height="132" rx="8" fill="rgba(56,239,125,.16)" stroke="#38ef7d" stroke-width="2"/>
        <text x="527" y="106" text-anchor="middle" fill="#38ef7d" font-size="12" font-weight="800">18</text>
        <!-- Trend arrows -->
        <line x1="120" y1="20" x2="490" y2="20" stroke="#38ef7d" stroke-width="2.5"/>
        <polygon points="490,20 480,15 480,25" fill="#38ef7d"/>
        <text x="305" y="14" text-anchor="middle" fill="#38ef7d" font-size="12" font-weight="700">${pick(lang, 'Ionization Energy & Electronegativity ↑', 'Energia di Ionizzazione ed Elettronegatività ↑')}</text>
        <line x1="585" y1="45" x2="585" y2="165" stroke="#ffd166" stroke-width="2.5"/>
        <polygon points="585,165 580,155 590,155" fill="#ffd166"/>
        <text x="585" y="185" text-anchor="middle" fill="#ffd166" font-size="11" font-weight="700">${pick(lang, 'Radius ↑', 'Raggio ↑')}</text>
      
        <rect x="24" y="34" width="84" height="132" rx="8" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.2500" dur="8.0s" begin="0.0s" repeatCount="indefinite"/></rect><rect x="116" y="78" width="212" height="88" rx="8" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.2500" dur="8.0s" begin="2.0s" repeatCount="indefinite"/></rect><rect x="336" y="34" width="160" height="132" rx="8" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.2500" dur="8.0s" begin="4.0s" repeatCount="indefinite"/></rect><rect x="504" y="34" width="46" height="132" rx="8" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.2500" dur="8.0s" begin="6.0s" repeatCount="indefinite"/></rect>
        <circle r="5" fill="#38ef7d"><animateMotion dur="2.4s" begin="0s" repeatCount="indefinite" path="M120 20 H490"/></circle><circle r="5" fill="#ffd166"><animateMotion dur="2s" begin="0s" repeatCount="indefinite" path="M585 45 V165"/></circle>
      </svg>`;

    case 'chemBonds':
      return `<svg viewBox="0 0 640 210" class="dia" width="100%" aria-hidden="true">
        <rect x="14" y="18" width="194" height="174" rx="12" fill="rgba(255,106,61,.08)" stroke="#ff6a3d" stroke-width="2"/>
        <text x="111" y="42" text-anchor="middle" fill="#ff6a3d" font-size="14" font-weight="800">${pick(lang, 'IONIC (Δχ > 1.7)', 'IONICO (Δχ > 1,7)')}</text>
        <circle cx="76" cy="94" r="18" fill="rgba(255,106,61,.25)" stroke="#ff6a3d" stroke-width="2"/>
        <text x="76" y="99" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="800">Na⁺</text>
        <circle cx="146" cy="94" r="22" fill="rgba(56,239,125,.22)" stroke="#38ef7d" stroke-width="2"/>
        <text x="146" y="99" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="800">Cl⁻</text>
        <path d="M96 82 Q111 66 124 80" fill="none" stroke="#ffd166" stroke-width="2"/>
        <circle r="4" fill="#ffd166"><animateMotion dur="1.8s" repeatCount="indefinite" path="M96 82 Q111 66 124 80"/></circle>
        <text x="111" y="142" text-anchor="middle" class="sm">${pick(lang, 'Electron transfer → lattice', 'Trasferimento e⁻ → reticolo')}</text>
        <text x="111" y="166" text-anchor="middle" class="sm">${pick(lang, 'Brittle, conducts molten/aq', 'Fragile, conduce fuso/in H₂O')}</text>

        <rect x="223" y="18" width="194" height="174" rx="12" fill="rgba(69,216,255,.08)" stroke="#45d8ff" stroke-width="2"/>
        <text x="320" y="42" text-anchor="middle" fill="#45d8ff" font-size="14" font-weight="800">${pick(lang, 'COVALENT (Δχ ≤ 1.7)', 'COVALENTE (Δχ ≤ 1,7)')}</text>
        <circle cx="294" cy="94" r="20" fill="rgba(69,216,255,.2)" stroke="#45d8ff" stroke-width="2"/>
        <circle cx="346" cy="94" r="20" fill="rgba(69,216,255,.2)" stroke="#45d8ff" stroke-width="2"/>
        <circle cx="320" cy="90" r="3.5" fill="#ffd166"><animateTransform attributeName="transform" type="rotate" from="0 320 95" to="360 320 95" dur="1.6s" repeatCount="indefinite"/></circle><circle cx="320" cy="100" r="3.5" fill="#ffd166"><animateTransform attributeName="transform" type="rotate" from="0 320 95" to="360 320 95" dur="1.6s" repeatCount="indefinite"/></circle>
        <text x="320" y="142" text-anchor="middle" class="sm">${pick(lang, 'Nonpolar < 0.4 | Polar 0.4–1.7', 'Puro < 0,4 | Polare 0,4–1,7')}</text>
        <text x="320" y="166" text-anchor="middle" class="sm">${pick(lang, 'Shared electron pairs', 'Coppie di elettroni condivise')}</text>

        <rect x="432" y="18" width="194" height="174" rx="12" fill="rgba(255,209,102,.08)" stroke="#ffd166" stroke-width="2"/>
        <text x="529" y="42" text-anchor="middle" fill="#ffd166" font-size="14" font-weight="800">${pick(lang, 'METALLIC', 'METALLICO')}</text>
        <g fill="#ffd166">
          <circle cx="484" cy="80" r="11"/><circle cx="529" cy="80" r="11"/><circle cx="574" cy="80" r="11"/>
          <circle cx="484" cy="112" r="11"/><circle cx="529" cy="112" r="11"/><circle cx="574" cy="112" r="11"/>
        </g>
        <g fill="#45d8ff">
          <circle cx="506" cy="96" r="3"><animate attributeName="cx" values="506;528;506" dur="3s" repeatCount="indefinite"/></circle><circle cx="552" cy="96" r="3"><animate attributeName="cx" values="552;574;552" dur="3.6s" repeatCount="indefinite"/></circle><circle cx="464" cy="96" r="3"><animate attributeName="cx" values="464;486;464" dur="2.8s" repeatCount="indefinite"/></circle><circle cx="594" cy="96" r="3"><animate attributeName="cx" values="594;572;594" dur="3.3s" repeatCount="indefinite"/></circle>
        </g>
        <text x="529" y="142" text-anchor="middle" class="sm">${pick(lang, 'Cations + sea of e⁻', 'Cationi + mare di e⁻')}</text>
        <text x="529" y="166" text-anchor="middle" class="sm">${pick(lang, 'Malleable & conductive', 'Malleabile e conduttore')}</text>
      </svg>`;

    case 'chemVSEPR':
      return `<svg viewBox="0 0 640 210" class="dia" width="100%" aria-hidden="true">
        <rect x="14" y="18" width="144" height="174" rx="12" fill="rgba(56,239,125,.08)" stroke="#38ef7d" stroke-width="2"/>
        <text x="86" y="42" text-anchor="middle" fill="#38ef7d" font-size="13" font-weight="800">${pick(lang, 'Linear · 180°', 'Lineare · 180°')}</text>
        <line x1="40" y1="95" x2="132" y2="95" stroke="#45d8ff" stroke-width="3"/>
        <circle cx="40" cy="95" r="9" fill="#ff6a3d" class="chem-anim-pulse" style="animation-delay:0.0s"/><circle cx="86" cy="95" r="11" fill="#ffffff" class="chem-anim-pulse" style="animation-delay:1.5s"/><circle cx="132" cy="95" r="9" fill="#ff6a3d" class="chem-anim-pulse" style="animation-delay:1.2s"/>
        <text x="86" y="144" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="700">CO₂, BeCl₂</text>
        <text x="86" y="168" text-anchor="middle" class="sm">${pick(lang, '2 bond pairs', '2 coppie di legame')}</text>

        <rect x="170" y="18" width="144" height="174" rx="12" fill="rgba(69,216,255,.08)" stroke="#45d8ff" stroke-width="2"/>
        <text x="242" y="42" text-anchor="middle" fill="#45d8ff" font-size="13" font-weight="800">${pick(lang, 'Trig. Planar · 120°', 'Trigonale · 120°')}</text>
        <line x1="242" y1="98" x2="242" y2="62" stroke="#45d8ff" stroke-width="2.5"/>
        <line x1="242" y1="98" x2="210" y2="118" stroke="#45d8ff" stroke-width="2.5"/>
        <line x1="242" y1="98" x2="274" y2="118" stroke="#45d8ff" stroke-width="2.5"/>
        <circle cx="242" cy="98" r="10" fill="#ffd166" class="chem-anim-pulse" style="animation-delay:0.9s"/><circle cx="242" cy="62" r="8" fill="#38ef7d" class="chem-anim-pulse" style="animation-delay:0.6s"/><circle cx="210" cy="118" r="8" fill="#38ef7d" class="chem-anim-pulse" style="animation-delay:0.3s"/><circle cx="274" cy="118" r="8" fill="#38ef7d" class="chem-anim-pulse" style="animation-delay:0.0s"/>
        <text x="242" y="148" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="700">BF₃, SO₃</text>
        <text x="242" y="168" text-anchor="middle" class="sm">${pick(lang, '3 bond pairs', '3 coppie di legame')}</text>

        <rect x="326" y="18" width="144" height="174" rx="12" fill="rgba(255,209,102,.08)" stroke="#ffd166" stroke-width="2"/>
        <text x="398" y="42" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="800">${pick(lang, 'Tetrahedral · 109.5°', 'Tetraedrica · 109,5°')}</text>
        <line x1="398" y1="96" x2="398" y2="62" stroke="#ffd166" stroke-width="2.5"/>
        <line x1="398" y1="96" x2="366" y2="116" stroke="#ffd166" stroke-width="2.5"/>
        <line x1="398" y1="96" x2="430" y2="116" stroke="#ffd166" stroke-width="2.5"/>
        <line x1="398" y1="96" x2="414" y2="124" stroke="#ffd166" stroke-width="2"/>
        <circle cx="398" cy="96" r="10" fill="#99a8cc" class="chem-anim-pulse" style="animation-delay:1.5s"/><circle cx="398" cy="62" r="7" fill="#ffffff" class="chem-anim-pulse" style="animation-delay:1.2s"/><circle cx="366" cy="116" r="7" fill="#ffffff" class="chem-anim-pulse" style="animation-delay:0.9s"/><circle cx="430" cy="116" r="7" fill="#ffffff" class="chem-anim-pulse" style="animation-delay:0.6s"/><circle cx="414" cy="124" r="6" fill="#ffffff"/>
        <text x="398" y="150" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="700">CH₄, CCl₄</text>
        <text x="398" y="168" text-anchor="middle" class="sm">${pick(lang, '4 bond pairs', '4 coppie di legame')}</text>

        <rect x="482" y="18" width="144" height="174" rx="12" fill="rgba(255,93,143,.08)" stroke="#ff5d8f" stroke-width="2"/>
        <text x="554" y="42" text-anchor="middle" fill="#ff5d8f" font-size="13" font-weight="800">${pick(lang, 'Bent · 104.5°', 'Piegata · 104,5°')}</text>
        <ellipse cx="542" cy="72" rx="9" ry="5" fill="rgba(255,209,102,.35)" stroke="#ffd166"/>
        <ellipse cx="566" cy="72" rx="9" ry="5" fill="rgba(255,209,102,.35)" stroke="#ffd166"/>
        <line x1="554" y1="94" x2="526" y2="120" stroke="#45d8ff" stroke-width="2.5"/>
        <line x1="554" y1="94" x2="582" y2="120" stroke="#45d8ff" stroke-width="2.5"/>
        <circle cx="554" cy="94" r="10" fill="#ff6a3d" class="chem-anim-pulse" style="animation-delay:0.3s"/><circle cx="526" cy="120" r="7" fill="#ffffff" class="chem-anim-pulse" style="animation-delay:0.0s"/><circle cx="582" cy="120" r="7" fill="#ffffff" class="chem-anim-pulse" style="animation-delay:1.5s"/>
        <text x="554" y="150" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="700">H₂O (2+2)</text>
        <text x="554" y="168" text-anchor="middle" class="sm">${pick(lang, 'Lone pairs compress angle', 'Coppie solitarie comprimono')}</text>
      </svg>`;

    case 'chemNomenclature':
      return `<svg viewBox="0 0 640 210" class="dia" width="100%" aria-hidden="true">
        <rect x="14" y="16" width="612" height="44" rx="10" fill="rgba(255,209,102,.1)" stroke="#ffd166" stroke-width="2"/>
        <text x="320" y="43" text-anchor="middle" fill="#ffd166" font-size="14" font-weight="800">${pick(lang, 'Oxidation Numbers Sum = 0 (neutral compound) or Ion Charge', 'Somma Numeri di Ossidazione = 0 (molecola) o Carica dello Ione')}</text>

        <rect x="14" y="74" width="194" height="118" rx="12" fill="rgba(69,216,255,.08)" stroke="#45d8ff" stroke-width="2"/>
        <text x="111" y="98" text-anchor="middle" fill="#45d8ff" font-size="13" font-weight="800">${pick(lang, 'Binary Compounds', 'Composti Binari')}</text>
        <text x="111" y="122" text-anchor="middle" class="sm">${pick(lang, 'Metal + O → Basic Oxide', 'Metallo + O → Ossido Basico')}</text>
        <text x="111" y="144" text-anchor="middle" class="sm">${pick(lang, 'Nonmetal + O → Acidic Oxide', 'Non metallo + O → Anidride')}</text>
        <text x="111" y="166" text-anchor="middle" class="sm">${pick(lang, 'Salts: -ide (FeCl₂ / FeCl₃)', 'Sali: -uro (Cloruro di...)')}</text>

        <rect x="223" y="74" width="194" height="118" rx="12" fill="rgba(56,239,125,.08)" stroke="#38ef7d" stroke-width="2"/>
        <text x="320" y="98" text-anchor="middle" fill="#38ef7d" font-size="13" font-weight="800">${pick(lang, 'Hydroxides & Oxyacids', 'Idrossidi e Ossiacidi')}</text>
        <text x="320" y="122" text-anchor="middle" class="sm">${pick(lang, 'Base: M(OH)ₙ  NaOH, Ca(OH)₂', 'Idrossidi: M(OH)ₙ  NaOH')}</text>
        <text x="320" y="144" text-anchor="middle" class="sm">${pick(lang, 'Lower ox.: -ous / Higher: -ic', 'N.O. minore: -oso / magg.: -ico')}</text>
        <text x="320" y="166" text-anchor="middle" class="sm">HNO₂ (-oso) · HNO₃ (-ico)</text>

        <rect x="432" y="74" width="194" height="118" rx="12" fill="rgba(255,106,61,.08)" stroke="#ff6a3d" stroke-width="2"/>
        <text x="529" y="98" text-anchor="middle" fill="#ff6a3d" font-size="13" font-weight="800">${pick(lang, 'Ternary Salts', 'Sali Ternari')}</text>
        <text x="529" y="124" text-anchor="middle" fill="#ffd166" font-size="14" font-weight="800">-oso → -ito  |  -ico → -ato</text>
        <text x="529" y="148" text-anchor="middle" class="sm">HNO₂ → NaNO₂ (${pick(lang, 'nitrite', 'nitrito')})</text>
        <text x="529" y="168" text-anchor="middle" class="sm">HNO₃ → NaNO₃ (${pick(lang, 'nitrate', 'nitrato')})</text>
      
        <rect x="14" y="74" width="194" height="118" rx="12" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="0.0s" repeatCount="indefinite"/></rect><rect x="223" y="74" width="194" height="118" rx="12" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="2.0s" repeatCount="indefinite"/></rect><rect x="432" y="74" width="194" height="118" rx="12" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="4.0s" repeatCount="indefinite"/></rect>
      </svg>`;

    case 'chemBalancing':
      return `<svg viewBox="0 0 640 205" class="dia" width="100%" aria-hidden="true">
        <rect x="18" y="16" width="604" height="72" rx="12" fill="rgba(56,239,125,.09)" stroke="#38ef7d" stroke-width="2"/>
        <text x="320" y="46" text-anchor="middle" fill="#ffd166" font-size="20" font-weight="800">2 H₂  +  O₂   →   2 H₂O</text>
        <text x="320" y="72" text-anchor="middle" class="sm">${pick(lang, 'Reactants: 4 H, 2 O   =   Products: 4 H, 2 O  (Only change coefficients, NEVER subscripts!)', 'Reagenti: 4 H, 2 O   =   Prodotti: 4 H, 2 O  (Modifica solo i coefficienti, MAI gli indici!)')}</text>

        <rect x="18" y="104" width="142" height="84" rx="10" fill="rgba(69,216,255,.08)" stroke="#45d8ff"/>
        <text x="89" y="130" text-anchor="middle" fill="#45d8ff" font-size="13" font-weight="800">${pick(lang, 'Synthesis', 'Sintesi')}</text>
        <text x="89" y="154" text-anchor="middle" fill="#ffffff" font-size="13">A + B → AB</text>
        <text x="89" y="174" text-anchor="middle" class="sm">2Mg + O₂ → 2MgO</text>

        <rect x="172" y="104" width="142" height="84" rx="10" fill="rgba(255,209,102,.08)" stroke="#ffd166"/>
        <text x="243" y="130" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="800">${pick(lang, 'Decomposition', 'Decomposizione')}</text>
        <text x="243" y="154" text-anchor="middle" fill="#ffffff" font-size="13">AB → A + B</text>
        <text x="243" y="174" text-anchor="middle" class="sm">CaCO₃ → CaO+CO₂</text>

        <rect x="326" y="104" width="142" height="84" rx="10" fill="rgba(255,106,61,.08)" stroke="#ff6a3d"/>
        <text x="397" y="130" text-anchor="middle" fill="#ff6a3d" font-size="13" font-weight="800">${pick(lang, 'Single Displ.', 'Scambio Semplice')}</text>
        <text x="397" y="154" text-anchor="middle" fill="#ffffff" font-size="13">A + BC → AC + B</text>
        <text x="397" y="174" text-anchor="middle" class="sm">Zn + 2HCl → ZnCl₂+H₂</text>

        <rect x="480" y="104" width="142" height="84" rx="10" fill="rgba(255,93,143,.08)" stroke="#ff5d8f"/>
        <text x="551" y="130" text-anchor="middle" fill="#ff5d8f" font-size="13" font-weight="800">${pick(lang, 'Double Displ.', 'Doppio Scambio')}</text>
        <text x="551" y="154" text-anchor="middle" fill="#ffffff" font-size="13">AB + CD → AD + CB</text>
        <text x="551" y="174" text-anchor="middle" class="sm">HCl + NaOH → NaCl+H₂O</text>
      
        <rect x="18" y="104" width="142" height="84" rx="10" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.2500" dur="7.2s" begin="0.0s" repeatCount="indefinite"/></rect><rect x="172" y="104" width="142" height="84" rx="10" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.2500" dur="7.2s" begin="1.8s" repeatCount="indefinite"/></rect><rect x="326" y="104" width="142" height="84" rx="10" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.2500" dur="7.2s" begin="3.6s" repeatCount="indefinite"/></rect><rect x="480" y="104" width="142" height="84" rx="10" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.2500" dur="7.2s" begin="5.4s" repeatCount="indefinite"/></rect>
      </svg>`;

    case 'chemStoich':
      return `<svg viewBox="0 0 640 205" class="dia" width="100%" aria-hidden="true">
        <rect x="18" y="34" width="128" height="86" rx="12" fill="rgba(69,216,255,.1)" stroke="#45d8ff" stroke-width="2"/>
        <text x="82" y="64" text-anchor="middle" fill="#45d8ff" font-size="14" font-weight="800">${pick(lang, 'Mass A (g)', 'Massa A (g)')}</text>
        <text x="82" y="92" text-anchor="middle" class="sm">÷ M(A)</text>

        <rect x="174" y="34" width="128" height="86" rx="12" fill="rgba(255,209,102,.12)" stroke="#ffd166" stroke-width="2"/>
        <text x="238" y="64" text-anchor="middle" fill="#ffd166" font-size="14" font-weight="800">${pick(lang, 'Moles A (nₐ)', 'Moli A (nₐ)')}</text>
        <text x="238" y="92" text-anchor="middle" class="sm">× coeff(B)/coeff(A)</text>

        <rect x="338" y="34" width="128" height="86" rx="12" fill="rgba(56,239,125,.12)" stroke="#38ef7d" stroke-width="2"/>
        <text x="402" y="64" text-anchor="middle" fill="#38ef7d" font-size="14" font-weight="800">${pick(lang, 'Moles B (n_B)', 'Moli B (n_B)')}</text>
        <text x="402" y="92" text-anchor="middle" class="sm">× M(B)</text>

        <rect x="494" y="34" width="128" height="86" rx="12" fill="rgba(255,106,61,.1)" stroke="#ff6a3d" stroke-width="2"/>
        <text x="558" y="64" text-anchor="middle" fill="#ff6a3d" font-size="14" font-weight="800">${pick(lang, 'Mass B (g)', 'Massa B (g)')}</text>
        <text x="558" y="92" text-anchor="middle" class="sm">${pick(lang, 'Theoretical', 'Resa teorica')}</text>

        <line x1="146" y1="77" x2="174" y2="77" stroke="#ffd166" stroke-width="2.5"/>
        <line x1="302" y1="77" x2="338" y2="77" stroke="#ffd166" stroke-width="2.5"/>
        <line x1="466" y1="77" x2="494" y2="77" stroke="#ffd166" stroke-width="2.5"/>

        <rect x="48" y="138" width="544" height="48" rx="10" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.15)"/>
        <text x="320" y="167" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="700">${pick(lang, 'Limiting Reagent = smallest n/coeff  |  % Yield = (actual / theoretical) × 100', 'Reagente Limitante = n/coeff minore  |  Resa % = (effettiva / teorica) × 100')}</text>
      
        <rect x="18" y="34" width="128" height="86" rx="12" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.2500" dur="6.0s" begin="0.0s" repeatCount="indefinite"/></rect><rect x="174" y="34" width="128" height="86" rx="12" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.2500" dur="6.0s" begin="1.5s" repeatCount="indefinite"/></rect><rect x="338" y="34" width="128" height="86" rx="12" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.2500" dur="6.0s" begin="3.0s" repeatCount="indefinite"/></rect><rect x="494" y="34" width="128" height="86" rx="12" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.2500" dur="6.0s" begin="4.5s" repeatCount="indefinite"/></rect>
        <circle r="4" fill="#ffd166"><animateMotion dur="1.5s" begin="0s" repeatCount="indefinite" path="M146 77 H174"/></circle><circle r="4" fill="#ffd166"><animateMotion dur="1.5s" begin="0.4s" repeatCount="indefinite" path="M302 77 H338"/></circle><circle r="4" fill="#ffd166"><animateMotion dur="1.5s" begin="0.8s" repeatCount="indefinite" path="M466 77 H494"/></circle>
      </svg>`;

    case 'chemSolutions':
      return `<svg viewBox="0 0 640 205" class="dia" width="100%" aria-hidden="true">
        <rect x="20" y="20" width="186" height="165" rx="14" fill="rgba(69,216,255,.08)" stroke="#45d8ff" stroke-width="2"/>
        <text x="113" y="48" text-anchor="middle" fill="#45d8ff" font-size="15" font-weight="800">${pick(lang, 'MOLARITY (M)', 'MOLARITÀ (M)')}</text>
        <text x="113" y="90" text-anchor="middle" fill="#ffd166" font-size="21" font-weight="800">M = n / V(L)</text>
        <text x="113" y="128" text-anchor="middle" class="sm">${pick(lang, 'n = moles of solute', 'n = moli di soluto')}</text>
        <text x="113" y="152" text-anchor="middle" class="sm">${pick(lang, 'V = litres of SOLUTION', 'V = litri di SOLUZIONE')}</text>

        <rect x="227" y="20" width="186" height="165" rx="14" fill="rgba(56,239,125,.08)" stroke="#38ef7d" stroke-width="2"/>
        <text x="320" y="48" text-anchor="middle" fill="#38ef7d" font-size="15" font-weight="800">${pick(lang, 'DILUTION', 'DILUIZIONE')}</text>
        <text x="320" y="90" text-anchor="middle" fill="#ffd166" font-size="19" font-weight="800">M₁ · V₁ = M₂ · V₂</text>
        <text x="320" y="128" text-anchor="middle" class="sm">${pick(lang, 'Solute moles stay constant', 'Le moli di soluto restano uguali')}</text>
        <text x="320" y="152" text-anchor="middle" class="sm">${pick(lang, 'Adding solvent lowers M', 'Aggiungere solvente abbassa M')}</text>

        <rect x="434" y="20" width="186" height="165" rx="14" fill="rgba(255,209,102,.08)" stroke="#ffd166" stroke-width="2"/>
        <text x="527" y="48" text-anchor="middle" fill="#ffd166" font-size="15" font-weight="800">${pick(lang, 'PERCENT (% m/m)', 'PERCENTUALE (% m/m)')}</text>
        <text x="527" y="88" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="800">(m_solute / m_solution) × 100</text>
        <text x="527" y="128" text-anchor="middle" class="sm">${pick(lang, 'm_solution = m_solute + m_solvent', 'm_soluz = m_soluto + m_solvente')}</text>
        <text x="527" y="152" text-anchor="middle" class="sm">${pick(lang, '% m/V = g solute / 100 mL', '% m/V = g soluto / 100 mL')}</text>
      
        <rect x="20" y="20" width="186" height="165" rx="14" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="0.0s" repeatCount="indefinite"/></rect><rect x="227" y="20" width="186" height="165" rx="14" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="2.0s" repeatCount="indefinite"/></rect><rect x="434" y="20" width="186" height="165" rx="14" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="4.0s" repeatCount="indefinite"/></rect>
      </svg>`;

    case 'chemThermo':
      return `<svg viewBox="0 0 640 210" class="dia" width="100%" aria-hidden="true">
        <rect x="16" y="18" width="296" height="174" rx="12" fill="rgba(255,106,61,.08)" stroke="#ff6a3d" stroke-width="2"/>
        <text x="164" y="42" text-anchor="middle" fill="#ff6a3d" font-size="14" font-weight="800">${pick(lang, 'EXOTHERMIC (ΔH < 0)', 'ESOTERMICA (ΔH < 0)')}</text>
        <line x1="48" y1="74" x2="122" y2="74" stroke="#45d8ff" stroke-width="3"/>
        <text x="85" y="65" text-anchor="middle" fill="#45d8ff" font-size="12" font-weight="700">${pick(lang, 'Reactants', 'Reagenti')}</text>
        <line x1="204" y1="138" x2="278" y2="138" stroke="#38ef7d" stroke-width="3"/>
        <text x="241" y="158" text-anchor="middle" fill="#38ef7d" font-size="12" font-weight="700">${pick(lang, 'Products', 'Prodotti')}</text>
        <path d="M122 74 C150 74, 176 138, 204 138" fill="none" stroke="#ffd166" stroke-width="2.5"/>
        <line x1="164" y1="74" x2="164" y2="138" stroke="#ff6a3d" stroke-width="2" stroke-dasharray="4 3"/>
        <text x="164" y="176" text-anchor="middle" class="sm">${pick(lang, 'Heat released · ΔG = ΔH − TΔS', 'Libera calore · ΔG = ΔH − TΔS')}</text>

        <rect x="328" y="18" width="296" height="174" rx="12" fill="rgba(69,216,255,.08)" stroke="#45d8ff" stroke-width="2"/>
        <text x="476" y="42" text-anchor="middle" fill="#45d8ff" font-size="14" font-weight="800">${pick(lang, 'ENDOTHERMIC (ΔH > 0)', 'ENDOTERMICA (ΔH > 0)')}</text>
        <line x1="360" y1="138" x2="434" y2="138" stroke="#38ef7d" stroke-width="3"/>
        <text x="397" y="158" text-anchor="middle" fill="#38ef7d" font-size="12" font-weight="700">${pick(lang, 'Reactants', 'Reagenti')}</text>
        <line x1="516" y1="74" x2="590" y2="74" stroke="#ffd166" stroke-width="3"/>
        <text x="553" y="65" text-anchor="middle" fill="#ffd166" font-size="12" font-weight="700">${pick(lang, 'Products', 'Prodotti')}</text>
        <path d="M434 138 C462 138, 488 74, 516 74" fill="none" stroke="#ffd166" stroke-width="2.5"/>
        <line x1="476" y1="138" x2="476" y2="74" stroke="#45d8ff" stroke-width="2" stroke-dasharray="4 3"/>
        <text x="476" y="176" text-anchor="middle" class="sm">${pick(lang, 'Heat absorbed · ΔG < 0 spontaneous', 'Assorbe calore · ΔG < 0 spontanea')}</text>
      
        <circle r="5" fill="#ffd166"><animateMotion dur="3.2s" begin="0s" repeatCount="indefinite" path="M48 74 H122 C150 74 176 138 204 138 H278"/></circle><circle r="5" fill="#ffd166"><animateMotion dur="3.2s" begin="0s" repeatCount="indefinite" path="M360 138 H434 C462 138 488 74 516 74 H590"/></circle>
      </svg>`;

    case 'chemKinetics':
      return `<svg viewBox="0 0 640 210" class="dia" width="100%" aria-hidden="true">
        <rect x="18" y="16" width="604" height="178" rx="14" fill="rgba(56,239,125,.06)" stroke="#38ef7d" stroke-width="2"/>
        <line x1="68" y1="166" x2="588" y2="166" stroke="#99a8cc" stroke-width="2"/>
        <line x1="68" y1="36" x2="68" y2="166" stroke="#99a8cc" stroke-width="2"/>
        <path d="M88 118 C165 118, 220 34, 295 34 C370 34, 415 148, 540 148" fill="none" stroke="#ff6a3d" stroke-width="3"/>
        <path d="M88 118 C175 118, 225 78, 295 78 C365 78, 415 148, 540 148" fill="none" stroke="#38ef7d" stroke-width="3" stroke-dasharray="6 4"/>
        <circle r="5" fill="#ff6a3d"><animateMotion dur="4s" repeatCount="indefinite" path="M88 118 C165 118, 220 34, 295 34 C370 34, 415 148, 540 148"/></circle>
        <circle r="5" fill="#38ef7d"><animateMotion dur="2.4s" repeatCount="indefinite" path="M88 118 C175 118, 225 78, 295 78 C365 78, 415 148, 540 148"/></circle>
        <text x="115" y="108" fill="#45d8ff" font-size="12" font-weight="700">${pick(lang, 'Reactants', 'Reagenti')}</text>
        <text x="510" y="138" fill="#ffd166" font-size="12" font-weight="700">${pick(lang, 'Products', 'Prodotti')}</text>
        <text x="295" y="28" text-anchor="middle" fill="#ff6a3d" font-size="12" font-weight="800">${pick(lang, 'Uncatalyzed Eₐ', 'Eₐ senza catalizzatore')}</text>
        <text x="295" y="96" text-anchor="middle" fill="#38ef7d" font-size="12" font-weight="800">${pick(lang, 'Catalyzed Eₐ′ (lower!)', 'Eₐ′ catalizzata (più bassa!)')}</text>
        <text x="340" y="185" text-anchor="middle" class="sm">${pick(lang, 'Catalysts lower Eₐ and speed rate without changing ΔH', 'I catalizzatori abbassano Eₐ senza modificare ΔH')}</text>
      </svg>`;

    case 'chemEquilibrium':
      return `<svg viewBox="0 0 640 210" class="dia" width="100%" aria-hidden="true">
        <rect x="18" y="18" width="604" height="58" rx="12" fill="rgba(255,209,102,.1)" stroke="#ffd166" stroke-width="2"/>
        <text x="320" y="42" text-anchor="middle" fill="#ffd166" font-size="17" font-weight="800">a A + b B  ⇌  c C + d D     K_eq = [C]ᶜ[D]ᵈ / ([A]ᵃ[B]ᵇ)</text>
        <text x="320" y="64" text-anchor="middle" class="sm">${pick(lang, 'Dynamic equilibrium: forward rate = reverse rate (pure solids & liquids omitted from K)', 'Equilibrio dinamico: v_diretta = v_inversa (solidi e liquidi puri esclusi da K)')}</text>

        <rect x="18" y="92" width="192" height="100" rx="10" fill="rgba(69,216,255,.08)" stroke="#45d8ff"/>
        <text x="114" y="116" text-anchor="middle" fill="#45d8ff" font-size="13" font-weight="800">${pick(lang, 'Concentration', 'Concentrazione')}</text>
        <text x="114" y="142" text-anchor="middle" class="sm">${pick(lang, 'Add reactant → shifts right', 'Aggiungi reagente → destra')}</text>
        <text x="114" y="164" text-anchor="middle" class="sm">${pick(lang, 'Add product → shifts left', 'Aggiungi prodotto → sinistra')}</text>

        <rect x="224" y="92" width="192" height="100" rx="10" fill="rgba(56,239,125,.08)" stroke="#38ef7d"/>
        <text x="320" y="116" text-anchor="middle" fill="#38ef7d" font-size="13" font-weight="800">${pick(lang, 'Pressure (Gases)', 'Pressione (Gas)')}</text>
        <text x="320" y="142" text-anchor="middle" class="sm">${pick(lang, 'Higher P → fewer gas moles', 'P ↑ → lato con meno moli')}</text>
        <text x="320" y="164" text-anchor="middle" class="sm">${pick(lang, 'Lower P → more gas moles', 'P ↓ → lato con più moli')}</text>

        <rect x="430" y="92" width="192" height="100" rx="10" fill="rgba(255,106,61,.08)" stroke="#ff6a3d"/>
        <text x="526" y="116" text-anchor="middle" fill="#ff6a3d" font-size="13" font-weight="800">${pick(lang, 'Temperature (changes K!)', 'Temperatura (varia K!)')}</text>
        <text x="526" y="142" text-anchor="middle" class="sm">${pick(lang, 'T ↑ favors endothermic', 'T ↑ favorisce endotermica')}</text>
        <text x="526" y="164" text-anchor="middle" class="sm">${pick(lang, 'Catalyst causes NO shift', 'Catalizzatore: NESSUN shift')}</text>
      
        <rect x="18" y="92" width="192" height="100" rx="10" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="0.0s" repeatCount="indefinite"/></rect><rect x="224" y="92" width="192" height="100" rx="10" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="2.0s" repeatCount="indefinite"/></rect><rect x="430" y="92" width="192" height="100" rx="10" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="4.0s" repeatCount="indefinite"/></rect>
        <circle r="3.5" fill="#38ef7d"><animateMotion dur="1.8s" begin="0s" repeatCount="indefinite" path="M230 80 H410"/></circle><circle r="3.5" fill="#ff6a3d"><animateMotion dur="1.8s" begin="0.9s" repeatCount="indefinite" path="M410 86 H230"/></circle>
      </svg>`;

    case 'chemAcidsPH':
      return `<svg viewBox="0 0 640 205" class="dia" width="100%" aria-hidden="true">
        <defs>
          <linearGradient id="phgrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#ff5d8f"/><stop offset="50%" stop-color="#38ef7d"/><stop offset="100%" stop-color="#45d8ff"/>
          </linearGradient>
        </defs>
        <rect x="32" y="34" width="576" height="28" rx="10" fill="url(#phgrad)"/>
        <text x="48" y="53" fill="#0b1026" font-size="13" font-weight="800">pH 0</text>
        <text x="320" y="53" text-anchor="middle" fill="#0b1026" font-size="13" font-weight="800">${pick(lang, '7 NEUTRAL', '7 NEUTRO')}</text>
        <text x="592" y="53" text-anchor="end" fill="#0b1026" font-size="13" font-weight="800">pH 14</text>

        <rect x="32" y="80" width="184" height="104" rx="12" fill="rgba(255,93,143,.09)" stroke="#ff5d8f"/>
        <text x="124" y="106" text-anchor="middle" fill="#ff5d8f" font-size="14" font-weight="800">${pick(lang, 'ACIDIC (pH < 7)', 'ACIDO (pH < 7)')}</text>
        <text x="124" y="132" text-anchor="middle" class="sm">[H₃O⁺] &gt; 10⁻⁷ M</text>
        <text x="124" y="156" text-anchor="middle" class="sm">${pick(lang, 'Brønsted proton donor', 'Donatore di protoni H⁺')}</text>

        <rect x="228" y="80" width="184" height="104" rx="12" fill="rgba(56,239,125,.09)" stroke="#38ef7d"/>
        <text x="320" y="106" text-anchor="middle" fill="#38ef7d" font-size="14" font-weight="800">${pick(lang, 'FORMULAS (25 °C)', 'FORMULE (25 °C)')}</text>
        <text x="320" y="132" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="700">pH = −log₁₀[H₃O⁺]</text>
        <text x="320" y="156" text-anchor="middle" class="sm">pH + pOH = 14 · MₐVₐ = M_bV_b</text>

        <rect x="424" y="80" width="184" height="104" rx="12" fill="rgba(69,216,255,.09)" stroke="#45d8ff"/>
        <text x="516" y="106" text-anchor="middle" fill="#45d8ff" font-size="14" font-weight="800">${pick(lang, 'BASIC (pH > 7)', 'BASICO (pH > 7)')}</text>
        <text x="516" y="132" text-anchor="middle" class="sm">[OH⁻] &gt; [H₃O⁺]</text>
        <text x="516" y="156" text-anchor="middle" class="sm">${pick(lang, 'Brønsted proton acceptor', 'Accettore di protoni H⁺')}</text>
      
        <rect x="32" y="80" width="184" height="104" rx="12" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="0.0s" repeatCount="indefinite"/></rect><rect x="228" y="80" width="184" height="104" rx="12" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="2.0s" repeatCount="indefinite"/></rect><rect x="424" y="80" width="184" height="104" rx="12" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="4.0s" repeatCount="indefinite"/></rect>
        <circle cy="70" r="5" fill="#ffffff" stroke="#ffd166" stroke-width="2"><animate attributeName="cx" values="48;320;592;320;48" dur="9s" repeatCount="indefinite"/></circle>
      </svg>`;

    case 'chemRedox':
      return `<svg viewBox="0 0 640 205" class="dia" width="100%" aria-hidden="true">
        <rect x="20" y="22" width="286" height="162" rx="14" fill="rgba(255,106,61,.08)" stroke="#ff6a3d" stroke-width="2"/>
        <text x="163" y="48" text-anchor="middle" fill="#ff6a3d" font-size="15" font-weight="800">${pick(lang, 'OXIDATION (Anode)', 'OSSIDAZIONE (Anodo)')}</text>
        <text x="163" y="82" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="700">Zn(s) → Zn²⁺(aq) + 2 e⁻</text>
        <text x="163" y="118" text-anchor="middle" class="sm">${pick(lang, 'Loses electrons · O.N. increases (0 → +2)', 'Perde elettroni · N.O. aumenta (0 → +2)')}</text>
        <text x="163" y="148" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="700">${pick(lang, 'Reducing agent', 'Agente riducente')}</text>

        <rect x="334" y="22" width="286" height="162" rx="14" fill="rgba(69,216,255,.08)" stroke="#45d8ff" stroke-width="2"/>
        <text x="477" y="48" text-anchor="middle" fill="#45d8ff" font-size="15" font-weight="800">${pick(lang, 'REDUCTION (Cathode)', 'RIDUZIONE (Catodo)')}</text>
        <text x="477" y="82" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="700">Cu²⁺(aq) + 2 e⁻ → Cu(s)</text>
        <text x="477" y="118" text-anchor="middle" class="sm">${pick(lang, 'Gains electrons · O.N. decreases (+2 → 0)', 'Acquista elettroni · N.O. diminuisce (+2 → 0)')}</text>
        <text x="477" y="148" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="700">${pick(lang, 'Oxidizing agent', 'Agente ossidante')}</text>

        <path d="M294 66 H346" stroke="#ffd166" stroke-width="3"/>
        <polygon points="348,66 338,60 338,72" fill="#ffd166"/>
        <text x="320" y="56" text-anchor="middle" fill="#ffd166" font-size="12" font-weight="800">2 e⁻</text>
        <circle r="4" fill="#ffd166"><animateMotion dur="1.5s" begin="0s" repeatCount="indefinite" path="M280 66 H360"/></circle><circle r="4" fill="#ffd166"><animateMotion dur="1.5s" begin="0.75s" repeatCount="indefinite" path="M280 66 H360"/></circle>
      </svg>`;

    case 'chemOrganic':
      return `<svg viewBox="0 0 640 210" class="dia" width="100%" aria-hidden="true">
        <rect x="16" y="16" width="194" height="84" rx="10" fill="rgba(56,239,125,.08)" stroke="#38ef7d"/>
        <text x="113" y="40" text-anchor="middle" fill="#38ef7d" font-size="13" font-weight="800">${pick(lang, 'Alkanes (CₙH₂ₙ₊₂)', 'Alcani (CₙH₂ₙ₊₂)')}</text>
        <text x="113" y="64" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="700">C–C · sp³ (109,5°)</text>
        <text x="113" y="84" text-anchor="middle" class="sm">${pick(lang, 'Saturated · -ane / -ano', 'Saturi · -ano (CH₄, C₂H₆)')}</text>

        <rect x="223" y="16" width="194" height="84" rx="10" fill="rgba(69,216,255,.08)" stroke="#45d8ff"/>
        <text x="320" y="40" text-anchor="middle" fill="#45d8ff" font-size="13" font-weight="800">${pick(lang, 'Alkenes (CₙH₂ₙ)', 'Alcheni (CₙH₂ₙ)')}</text>
        <text x="320" y="64" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="700">C=C · sp² (120°)</text>
        <text x="320" y="84" text-anchor="middle" class="sm">${pick(lang, 'Double bond · -ene', 'Doppio legame · -ene (C₂H₄)')}</text>

        <rect x="430" y="16" width="194" height="84" rx="10" fill="rgba(255,209,102,.08)" stroke="#ffd166"/>
        <text x="527" y="40" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="800">${pick(lang, 'Alkynes (CₙH₂ₙ₋₂)', 'Alchini (CₙH₂ₙ₋₂)')}</text>
        <text x="527" y="64" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="700">C≡C · sp (180°)</text>
        <text x="527" y="84" text-anchor="middle" class="sm">${pick(lang, 'Triple bond · -yne / -ino', 'Triplo legame · -ino (C₂H₂)')}</text>

        <rect x="16" y="114" width="608" height="80" rx="12" fill="rgba(255,93,143,.07)" stroke="#ff5d8f"/>
        <text x="320" y="138" text-anchor="middle" fill="#ff5d8f" font-size="13" font-weight="800">${pick(lang, 'KEY FUNCTIONAL GROUPS', 'GRUPPI FUNZIONALI PRINCIPALI')}</text>
        <text x="320" y="164" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">–OH (${pick(lang, 'Alcohol', 'Alcol')})  ·  –CHO (${pick(lang, 'Aldehyde', 'Aldeide')})  ·  C=O (${pick(lang, 'Ketone', 'Chetone')})  ·  –COOH (${pick(lang, 'Carb. Acid', 'Acido Carb.')})  ·  –NH₂ (${pick(lang, 'Amine', 'Ammina')})</text>
        <text x="320" y="184" text-anchor="middle" class="sm">${pick(lang, 'Benzene C₆H₆: aromatic delocalized ring', 'Benzene C₆H₆: anello aromatico delocalizzato')}</text>
      
        <rect x="16" y="16" width="194" height="84" rx="10" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.2500" dur="7.2s" begin="0.0s" repeatCount="indefinite"/></rect><rect x="223" y="16" width="194" height="84" rx="10" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.2500" dur="7.2s" begin="1.8s" repeatCount="indefinite"/></rect><rect x="430" y="16" width="194" height="84" rx="10" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.2500" dur="7.2s" begin="3.6s" repeatCount="indefinite"/></rect><rect x="16" y="114" width="608" height="80" rx="12" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.2500" dur="7.2s" begin="5.4s" repeatCount="indefinite"/></rect>
      </svg>`;

    case 'chemPhysVsChem':
      return `<svg viewBox="0 0 640 205" class="dia" width="100%" aria-hidden="true">
        <rect x="18" y="18" width="292" height="168" rx="14" fill="rgba(69,216,255,.08)" stroke="#45d8ff" stroke-width="2"/>
        <text x="164" y="44" text-anchor="middle" fill="#45d8ff" font-size="14" font-weight="800">${pick(lang, 'PHYSICAL CHANGE (Same Outfit)', 'TRASFORMAZIONE FISICA (Stessa Formula)')}</text>
        <text x="164" y="82" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="800" class="chem-anim-float">🧊 H₂O  →  💧 H₂O  →  ☁️ H₂O</text>
        <text x="164" y="118" text-anchor="middle" class="sm">${pick(lang, 'Molecules stay intact — only spacing & speed change', 'Le molecole restano intatte: cambia solo quanto si muovono')}</text>
        <text x="164" y="152" text-anchor="middle" fill="#38ef7d" font-size="12" font-weight="700">${pick(lang, 'Easy to reverse (freeze back to ice!)', 'Reversibile (ricongeli e torna ghiaccio!)')}</text>

        <rect x="330" y="18" width="292" height="168" rx="14" fill="rgba(255,106,61,.08)" stroke="#ff6a3d" stroke-width="2"/>
        <text x="476" y="44" text-anchor="middle" fill="#ff6a3d" font-size="14" font-weight="800">${pick(lang, 'CHEMICAL CHANGE (New Molecules!)', 'REAZIONE CHIMICA (Sostanze Nuove!)')}</text>
        <text x="476" y="82" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="800" class="chem-anim-pulse">🪵 + O₂  🔥→  🌫️ CO₂ + H₂O</text>
        <text x="476" y="118" text-anchor="middle" class="sm">${pick(lang, 'Old bonds break & atoms build brand-new molecules', 'I vecchi legami si spezzano e nascono molecole diverse')}</text>
        <text x="476" y="152" text-anchor="middle" fill="#ffd166" font-size="12" font-weight="700">${pick(lang, 'Signs: gas bubbles, new color, heat, or precipitate', 'Indizi: bollicine, cambio colore, calore o solido nuovo')}</text>
      </svg>`;

    case 'chemMixVsPure':
      return `<svg viewBox="0 0 640 205" class="dia" width="100%" aria-hidden="true">
        <rect x="20" y="20" width="600" height="44" rx="10" fill="rgba(255,209,102,.1)" stroke="#ffd166" stroke-width="2"/>
        <text x="320" y="47" text-anchor="middle" fill="#ffd166" font-size="14" font-weight="800">${pick(lang, 'QUICK DETECTIVE TEST: Pick apart any sample in 2 questions!', 'TEST RAPIDO IN 2 DOMANDE: Riconosci qualsiasi materiale!')}</text>

        <rect x="20" y="80" width="186" height="106" rx="12" fill="rgba(69,216,255,.08)" stroke="#45d8ff"/>
        <text x="113" y="106" text-anchor="middle" fill="#45d8ff" font-size="13" font-weight="800">${pick(lang, '1. Just ONE formula?', '1. Ha UNA sola formula?')}</text>
        <text x="113" y="132" text-anchor="middle" class="sm">${pick(lang, 'YES → Pure Substance', 'SÌ → Sostanza Pura')}</text>
        <text x="113" y="156" text-anchor="middle" class="sm">Au (${pick(lang, 'Element', 'Elemento')}), H₂O (${pick(lang, 'Comp.', 'Comp.')})</text>

        <rect x="227" y="80" width="186" height="106" rx="12" fill="rgba(56,239,125,.08)" stroke="#38ef7d"/>
        <text x="320" y="106" text-anchor="middle" fill="#38ef7d" font-size="13" font-weight="800">${pick(lang, '2. Looks 100% smooth?', '2. È tutto uniforme?')}</text>
        <text x="320" y="132" text-anchor="middle" class="sm">${pick(lang, 'YES → Homogeneous Mix', 'SÌ → Miscuglio Omogeneo')}</text>
        <text x="320" y="156" text-anchor="middle" class="sm">${pick(lang, 'Salt water, air, steel', 'Acqua+sale, aria, acciaio')}</text>

        <rect x="434" y="80" width="186" height="106" rx="12" fill="rgba(255,106,61,.08)" stroke="#ff6a3d"/>
        <text x="527" y="106" text-anchor="middle" fill="#ff6a3d" font-size="13" font-weight="800">${pick(lang, 'See layers / specks?', 'Vedi strati o granelli?')}</text>
        <text x="527" y="132" text-anchor="middle" class="sm">${pick(lang, 'YES → Heterogeneous', 'SÌ → Eterogeneo')}</text>
        <text x="527" y="156" text-anchor="middle" class="sm">${pick(lang, 'Oil+water, sand+water', 'Olio+acqua, sabbia+acqua')}</text>
      
        <rect x="20" y="80" width="186" height="106" rx="12" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="0.0s" repeatCount="indefinite"/></rect><rect x="227" y="80" width="186" height="106" rx="12" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="2.0s" repeatCount="indefinite"/></rect><rect x="434" y="80" width="186" height="106" rx="12" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="4.0s" repeatCount="indefinite"/></rect>
      </svg>`;

    case 'chemDistillFlow':
      return `<svg viewBox="0 0 640 205" class="dia" width="100%" aria-hidden="true">
        <rect x="20" y="34" width="136" height="136" rx="12" fill="rgba(255,106,61,.1)" stroke="#ff6a3d" stroke-width="2"/>
        <text x="88" y="64" text-anchor="middle" fill="#ff6a3d" font-size="13" font-weight="800">${pick(lang, 'STEP 1: Boil', 'PASSO 1: Bolli')}</text>
        <text x="88" y="96" text-anchor="middle" fill="#ffffff" font-size="22" class="chem-anim-flame">🔥 ♨️</text>
        <text x="88" y="132" text-anchor="middle" class="sm">${pick(lang, 'Lower-boiling liquid', 'Evapora prima il liquido')}</text>
        <text x="88" y="150" text-anchor="middle" class="sm">${pick(lang, 'turns to vapor first', 'che bolle a T minore')}</text>

        <rect x="180" y="34" width="136" height="136" rx="12" fill="rgba(255,209,102,.1)" stroke="#ffd166" stroke-width="2"/>
        <text x="248" y="64" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="800">${pick(lang, 'STEP 2: Rise', 'PASSO 2: Sale')}</text>
        <text x="248" y="96" text-anchor="middle" fill="#ffffff" font-size="22" class="chem-anim-float">💨 →</text>
        <text x="248" y="132" text-anchor="middle" class="sm">${pick(lang, 'Salt or heavy dyes', 'Sale o coloranti pesanti')}</text>
        <text x="248" y="150" text-anchor="middle" class="sm">${pick(lang, 'stay behind in flask', 'restano nel pallone')}</text>

        <rect x="340" y="34" width="136" height="136" rx="12" fill="rgba(69,216,255,.1)" stroke="#45d8ff" stroke-width="2"/>
        <text x="408" y="64" text-anchor="middle" fill="#45d8ff" font-size="13" font-weight="800">${pick(lang, 'STEP 3: Cool', 'PASSO 3: Raffredda')}</text>
        <text x="408" y="96" text-anchor="middle" fill="#ffffff" font-size="22" class="chem-anim-float" style="animation-delay:-1s">❄️ 💧</text>
        <text x="408" y="132" text-anchor="middle" class="sm">${pick(lang, 'Cold water tube', 'Il tubo freddo condensa')}</text>
        <text x="408" y="150" text-anchor="middle" class="sm">${pick(lang, 'condenses steam back', 'il vapore in gocce')}</text>

        <rect x="500" y="34" width="120" height="136" rx="12" fill="rgba(56,239,125,.1)" stroke="#38ef7d" stroke-width="2"/>
        <circle r="3" fill="#ffd166"><animateMotion dur="1.4s" begin="0s" repeatCount="indefinite" path="M156 102 H180"/></circle><circle r="3" fill="#ffd166"><animateMotion dur="1.4s" begin="0.4s" repeatCount="indefinite" path="M316 102 H340"/></circle><circle r="3" fill="#ffd166"><animateMotion dur="1.4s" begin="0.8s" repeatCount="indefinite" path="M476 102 H500"/></circle>
        <text x="560" y="64" text-anchor="middle" fill="#38ef7d" font-size="13" font-weight="800">${pick(lang, 'PURE!', 'PURO!')}</text>
        <text x="560" y="96" text-anchor="middle" fill="#ffffff" font-size="22" class="chem-anim-pulse">🧪</text>
        <text x="560" y="132" text-anchor="middle" class="sm">${pick(lang, 'Pure distillate', 'Distillato puro')}</text>
        <text x="560" y="150" text-anchor="middle" class="sm">${pick(lang, 'collected clean', 'raccolto pulito')}</text>
      </svg>`;

    case 'chemDaltonBlocks':
      return `<svg viewBox="0 0 640 205" class="dia" width="100%" aria-hidden="true">
        <rect x="20" y="20" width="600" height="44" rx="10" fill="rgba(56,239,125,.1)" stroke="#38ef7d" stroke-width="2"/>
        <text x="320" y="47" text-anchor="middle" fill="#38ef7d" font-size="14" font-weight="800">${pick(lang, 'WHY LAWS WORK: Atoms snap together like whole Lego bricks!', 'PERCHÉ VALGONO LE LEGGI: Gli atomi sono mattoncini indivisibili!')}</text>
        <rect x="36" y="84" width="268" height="100" rx="12" fill="rgba(69,216,255,.08)" stroke="#45d8ff"/>
        <text x="170" y="110" text-anchor="middle" fill="#45d8ff" font-size="14" font-weight="800">CO (${pick(lang, '1 Carbon + 1 Oxygen', '1 Carbonio + 1 Ossigeno')})</text>
        <circle cx="145" cy="146" r="16" fill="#99a8cc" class="chem-anim-float" style="animation-delay:0.0s"/><circle cx="185" cy="146" r="14" fill="#ff5d8f" class="chem-anim-float" style="animation-delay:1.9s"/>
        <text x="170" y="176" text-anchor="middle" class="sm">12 g C : 16 g O</text>

        <rect x="336" y="84" width="268" height="100" rx="12" fill="rgba(255,209,102,.08)" stroke="#ffd166"/>
        <text x="470" y="110" text-anchor="middle" fill="#ffd166" font-size="14" font-weight="800">CO₂ (${pick(lang, '1 Carbon + 2 Oxygen', '1 Carbonio + 2 Ossigeni')})</text>
        <circle cx="432" cy="146" r="14" fill="#ff5d8f" class="chem-anim-float" style="animation-delay:1.4s"/><circle cx="470" cy="146" r="16" fill="#99a8cc" class="chem-anim-float" style="animation-delay:0.9s"/><circle cx="508" cy="146" r="14" fill="#ff5d8f" class="chem-anim-float" style="animation-delay:0.4s"/>
        <text x="470" y="176" text-anchor="middle" class="sm">12 g C : 32 g O  →  16 : 32 = 1 : 2</text>
      </svg>`;

    case 'chemAvogadroScale':
      return `<svg viewBox="0 0 640 205" class="dia" width="100%" aria-hidden="true">
        <rect x="20" y="24" width="286" height="156" rx="14" fill="rgba(69,216,255,.08)" stroke="#45d8ff" stroke-width="2"/>
        <text x="163" y="54" text-anchor="middle" fill="#45d8ff" font-size="15" font-weight="800">${pick(lang, 'EVERYDAY: 1 DOZEN', 'TUTTI I GIORNI: 1 DOZZINA')}</text>
        <text x="163" y="88" text-anchor="middle" fill="#ffd166" font-size="22" font-weight="800">= 12 ${pick(lang, 'items', 'oggetti')}</text>
        <text x="163" y="122" text-anchor="middle" class="sm">${pick(lang, '12 ping-pong balls = light', '12 palline da ping-pong = leggere')}</text>
        <text x="163" y="146" text-anchor="middle" class="sm">${pick(lang, '12 bowling balls = heavy!', '12 palle da bowling = pesanti!')}</text>

        <rect x="334" y="24" width="286" height="156" rx="14" fill="rgba(56,239,125,.08)" stroke="#38ef7d" stroke-width="2"/>
        <text x="477" y="54" text-anchor="middle" fill="#38ef7d" font-size="15" font-weight="800">${pick(lang, 'CHEMISTRY: 1 MOLE', 'IN CHIMICA: 1 MOLE')}</text>
        <text x="477" y="88" text-anchor="middle" fill="#ffd166" font-size="20" font-weight="800">${pick(lang, '= 6.022 × 10²³ items', '= 6,022 × 10²³ unità')}</text>
        <text x="477" y="122" text-anchor="middle" class="sm">${pick(lang, '1 mol H₂O = 18 g (light molecule)', '1 mol H₂O = 18 g (molecola leggera)')}</text>
        <text x="477" y="146" text-anchor="middle" class="sm">${pick(lang, '1 mol CO₂ = 44 g (heavier molecule)', '1 mol CO₂ = 44 g (molecola più pesante)')}</text>
      
        <rect x="20" y="24" width="286" height="156" rx="14" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.5000" dur="5.0s" begin="0.0s" repeatCount="indefinite"/></rect><rect x="334" y="24" width="286" height="156" rx="14" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.5000" dur="5.0s" begin="2.5s" repeatCount="indefinite"/></rect>
      </svg>`;

    case 'chemKelvinScale':
      return `<svg viewBox="0 0 640 205" class="dia" width="100%" aria-hidden="true">
        <rect x="24" y="22" width="592" height="160" rx="14" fill="rgba(255,209,102,.07)" stroke="#ffd166" stroke-width="2"/>
        <text x="320" y="52" text-anchor="middle" fill="#ffd166" font-size="15" font-weight="800">${pick(lang, 'WHY KELVIN (K)? Gas formulas NEVER want negative °C or 0 °C division!', 'PERCHÉ I KELVIN (K)? Con i °C negativi o 0 °C la formula esploderebbe!')}</text>
        <line x1="80" y1="98" x2="560" y2="98" stroke="#45d8ff" stroke-width="4" stroke-linecap="round"/>
        <circle cx="110" cy="98" r="8" fill="#45d8ff"/><text x="110" y="82" text-anchor="middle" fill="#45d8ff" font-size="12" font-weight="800">0 K</text><text x="110" y="126" text-anchor="middle" class="sm">${pick(lang, '−273.15 °C', '−273,15 °C')}</text><text x="110" y="144" text-anchor="middle" class="sm">${pick(lang, 'Atoms stop!', 'Atomi fermi!')}</text>
        <circle cx="320" cy="98" r="8" fill="#38ef7d"/><text x="320" y="82" text-anchor="middle" fill="#38ef7d" font-size="12" font-weight="800">${pick(lang, '273.15 K', '273,15 K')}</text><text x="320" y="126" text-anchor="middle" class="sm">0 °C (${pick(lang, 'Ice', 'Ghiaccio')})</text>
        <circle cx="520" cy="98" r="8" fill="#ff6a3d"/><text x="520" y="82" text-anchor="middle" fill="#ff6a3d" font-size="12" font-weight="800">${pick(lang, '373.15 K', '373,15 K')}</text><text x="520" y="126" text-anchor="middle" class="sm">100 °C (${pick(lang, 'Boil', 'Bolle')})</text>
        <text x="320" y="168" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="800">T(K) = t(°C) + ${pick(lang, '273.15', '273,15')}</text>
      
        <circle cy="98" r="6" fill="#ffd166" stroke="#fff" stroke-width="1.5"><animate attributeName="cx" values="110;320;520;320;110" dur="7s" repeatCount="indefinite"/></circle>
      </svg>`;

    case 'chemAufbauRules':
      return `<svg viewBox="0 0 640 205" class="dia" width="100%" aria-hidden="true">
        <rect x="20" y="20" width="186" height="164" rx="12" fill="rgba(56,239,125,.08)" stroke="#38ef7d" stroke-width="2"/>
        <text x="113" y="48" text-anchor="middle" fill="#38ef7d" font-size="14" font-weight="800">1. AUFBAU</text>
        <text x="113" y="82" text-anchor="middle" fill="#ffd166" font-size="18" font-weight="800">1s → 2s → 2p</text>
        <text x="113" y="122" text-anchor="middle" class="sm">${pick(lang, 'Fill lowest energy floor', 'Riempi prima i piani bassi')}</text>
        <text x="113" y="144" text-anchor="middle" class="sm">${pick(lang, 'before climbing higher', 'poi sali di energia')}</text>

        <rect x="227" y="20" width="186" height="164" rx="12" fill="rgba(69,216,255,.08)" stroke="#45d8ff" stroke-width="2"/>
        <text x="320" y="48" text-anchor="middle" fill="#45d8ff" font-size="14" font-weight="800">2. PAULI</text>
        <text x="320" y="84" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="800">[ ↑↓ ]</text>
        <text x="320" y="122" text-anchor="middle" class="sm">${pick(lang, 'Max 2 electrons per box', 'Max 2 elettroni per casella')}</text>
        <text x="320" y="144" text-anchor="middle" class="sm">${pick(lang, 'with OPPOSITE spins', 'e con spin OPPOSTI!')}</text>

        <rect x="434" y="20" width="186" height="164" rx="12" fill="rgba(255,209,102,.08)" stroke="#ffd166" stroke-width="2"/>
        <text x="527" y="48" text-anchor="middle" fill="#ffd166" font-size="14" font-weight="800">3. HUND</text>
        <text x="527" y="84" text-anchor="middle" fill="#38ef7d" font-size="18" font-weight="800">[↑] [↑] [↑]</text>
        <text x="527" y="122" text-anchor="middle" class="sm">${pick(lang, 'Take empty p-seats alone', 'Prima 1 elettrone per stanza')}</text>
        <text x="527" y="144" text-anchor="middle" class="sm">${pick(lang, 'before sharing any box!', 'poi ci si accoppia!')}</text>
      
        <rect x="20" y="20" width="186" height="164" rx="12" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="0.0s" repeatCount="indefinite"/></rect><rect x="227" y="20" width="186" height="164" rx="12" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="2.0s" repeatCount="indefinite"/></rect><rect x="434" y="20" width="186" height="164" rx="12" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="4.0s" repeatCount="indefinite"/></rect>
      </svg>`;

    case 'chemPolarityTug':
      return `<svg viewBox="0 0 640 205" class="dia" width="100%" aria-hidden="true">
        <rect x="18" y="20" width="190" height="164" rx="12" fill="rgba(56,239,125,.08)" stroke="#38ef7d"/>
        <text x="113" y="46" text-anchor="middle" fill="#38ef7d" font-size="13" font-weight="800">${pick(lang, 'TIE: Δχ < 0.4', 'PAREGGIO: Δχ < 0,4')}</text>
        <text x="113" y="84" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="800">Cl — : — Cl</text>
                <line x1="60" y1="102" x2="166" y2="102" stroke="rgba(255,255,255,.18)" stroke-width="2"/><circle cy="102" r="4.5" fill="#ffd166"><animate attributeName="cx" values="113;106;120;113" dur="1.6s" repeatCount="indefinite"/></circle>
        <text x="113" y="124" text-anchor="middle" class="sm">${pick(lang, 'Equal pull on electrons', 'Stessa forza sugli e⁻')}</text>
        <text x="113" y="148" text-anchor="middle" fill="#ffd166" font-size="12" font-weight="700">${pick(lang, 'Nonpolar covalent', 'Covalente apolare')}</text>

        <rect x="225" y="20" width="190" height="164" rx="12" fill="rgba(69,216,255,.08)" stroke="#45d8ff"/>
        <text x="320" y="46" text-anchor="middle" fill="#45d8ff" font-size="13" font-weight="800">${pick(lang, 'LOPSIDED: 0.4–1.7', 'SBILANCIATO: 0,4–1,7')}</text>
        <text x="320" y="84" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="800">H(δ⁺) —— :Cl(δ⁻)</text>
                <line x1="268" y1="102" x2="372" y2="102" stroke="rgba(255,255,255,.18)" stroke-width="2"/><circle cy="102" r="4.5" fill="#ffd166"><animate attributeName="cx" values="330;346;338;350;330" dur="2.4s" repeatCount="indefinite"/></circle>
        <text x="320" y="124" text-anchor="middle" class="sm">${pick(lang, 'One atom hogs electrons', 'Un atomo tira di più')}</text>
        <text x="320" y="148" text-anchor="middle" fill="#ffd166" font-size="12" font-weight="700">${pick(lang, 'Polar covalent', 'Covalente polare')}</text>

        <rect x="432" y="20" width="190" height="164" rx="12" fill="rgba(255,106,61,.08)" stroke="#ff6a3d"/>
        <text x="527" y="46" text-anchor="middle" fill="#ff6a3d" font-size="13" font-weight="800">${pick(lang, 'STOLEN: Δχ > 1.7', 'STRAPPATO: Δχ > 1,7')}</text>
        <text x="527" y="84" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="800">[Na]⁺  [:Cl:]⁻</text>
                <line x1="475" y1="102" x2="580" y2="102" stroke="rgba(255,255,255,.18)" stroke-width="2"/><circle cy="102" r="4.5" fill="#ffd166"><animate attributeName="cx" values="490;490;565;565;490" dur="3s" repeatCount="indefinite"/></circle>
        <text x="527" y="124" text-anchor="middle" class="sm">${pick(lang, 'Electron jumps completely', 'Trasferimento netto di e⁻')}</text>
        <text x="527" y="148" text-anchor="middle" fill="#ffd166" font-size="12" font-weight="700">${pick(lang, 'Ionic bond', 'Legame ionico')}</text>
      </svg>`;

    case 'chemCrissCross':
      return `<svg viewBox="0 0 640 205" class="dia" width="100%" aria-hidden="true">
        <rect x="30" y="22" width="580" height="160" rx="14" fill="rgba(56,239,125,.07)" stroke="#38ef7d" stroke-width="2"/>
        <text x="320" y="48" text-anchor="middle" fill="#ffd166" font-size="15" font-weight="800">${pick(lang, 'EASY CRISS-CROSS TRICK: Swap charges down so total = 0!', 'TRUCCO DELL’INCROCIO: Scambia le cariche in basso e ottieni 0!')}</text>
        <text x="235" y="92" text-anchor="middle" fill="#ff6a3d" font-size="24" font-weight="800">Fe³⁺</text>
        <text x="405" y="92" text-anchor="middle" fill="#45d8ff" font-size="24" font-weight="800">O²⁻</text>
        <path d="M250 100 L388 134" stroke="#ffd166" stroke-width="2.5"/><circle r="4" fill="#ffd166"><animateMotion dur="2s" begin="0s" repeatCount="indefinite" path="M250 100 L388 134"/></circle>
        <path d="M388 100 L250 134" stroke="#38ef7d" stroke-width="2.5"/><circle r="4" fill="#38ef7d"><animateMotion dur="2s" begin="1s" repeatCount="indefinite" path="M388 100 L250 134"/></circle>
        <text x="320" y="158" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="800">Fe₂O₃</text>
        <text x="515" y="152" text-anchor="middle" class="sm">2×(+3) + 3×(−2) = 0 ✓</text>
      </svg>`;

    case 'chemSaltFamily':
      return `<svg viewBox="0 0 640 205" class="dia" width="100%" aria-hidden="true">
        <rect x="20" y="26" width="174" height="150" rx="12" fill="rgba(69,216,255,.08)" stroke="#45d8ff"/>
        <text x="107" y="54" text-anchor="middle" fill="#45d8ff" font-size="13" font-weight="800">${pick(lang, 'BASE RECIPE', 'RICETTA BASE')}</text>
        <text x="107" y="88" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="700">CaO + H₂O</text>
        <text x="107" y="114" text-anchor="middle" fill="#ffd166" font-size="16" font-weight="800">→ Ca(OH)₂</text>
        <text x="107" y="148" text-anchor="middle" class="sm">${pick(lang, 'Hydroxide (OH)', 'Idrossido (OH)')}</text>

        <rect x="233" y="26" width="174" height="150" rx="12" fill="rgba(255,93,143,.08)" stroke="#ff5d8f"/>
        <text x="320" y="54" text-anchor="middle" fill="#ff5d8f" font-size="13" font-weight="800">${pick(lang, 'OXYACID RECIPE', 'RICETTA OSSIACIDO')}</text>
        <text x="320" y="88" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="700">SO₃ + H₂O</text>
        <text x="320" y="114" text-anchor="middle" fill="#ffd166" font-size="16" font-weight="800">→ H₂SO₄</text>
        <text x="320" y="148" text-anchor="middle" class="sm">${pick(lang, '-ous (low) / -ic (high)', '-oso (basso) / -ico (alto)')}</text>

        <rect x="446" y="26" width="174" height="150" rx="12" fill="rgba(56,239,125,.08)" stroke="#38ef7d"/>
        <text x="533" y="54" text-anchor="middle" fill="#38ef7d" font-size="13" font-weight="800">${pick(lang, 'TERNARY SALT', 'SALE TERNARIO')}</text>
        <text x="533" y="88" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">${pick(lang, 'Acid + Base → Salt', 'Acido + Base → Sale')}</text>
        <text x="533" y="118" text-anchor="middle" fill="#ffd166" font-size="15" font-weight="800">-oso→-ito | -ico→-ato</text>
        <text x="533" y="148" text-anchor="middle" class="sm">H₂SO₄ → Na₂SO₄</text>
      
        <rect x="20" y="26" width="174" height="150" rx="12" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="0.0s" repeatCount="indefinite"/></rect><rect x="233" y="26" width="174" height="150" rx="12" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="2.0s" repeatCount="indefinite"/></rect><rect x="446" y="26" width="174" height="150" rx="12" style="fill:none;stroke:#ff6a3d;stroke-width:3" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;0.3333" dur="6.0s" begin="4.0s" repeatCount="indefinite"/></rect>
      </svg>`;

    case 'chemSandwichStoich':
      return `<svg viewBox="0 0 640 205" class="dia" width="100%" aria-hidden="true">
        <rect x="20" y="22" width="600" height="160" rx="14" fill="rgba(255,209,102,.08)" stroke="#ffd166" stroke-width="2"/>
        <text x="320" y="50" text-anchor="middle" fill="#ffd166" font-size="15" font-weight="800">${pick(lang, 'LIMITING REAGENT ANALOGY: Making Cheese Sandwiches!', 'ANALOGIA DEL PANINO: Cos’è il Reagente Limitante?')}</text>
        <text x="320" y="92" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="800" class="chem-anim-float">🍞🍞 (6)  +  🧀 (2)   →   🥪 (2)  +  ${pick(lang, '🍞🍞 leftover!', '🍞🍞 avanzate!')}</text>
        <text x="320" y="130" text-anchor="middle" class="sm">${pick(lang, 'Recipe: 2 Bread + 1 Cheese → 1 Sandwich. Even with 6 slices of bread, only 2 cheeses = max 2 sandwiches!', 'Ricetta: 2 Fette + 1 Formaggio = 1 Panino. Hai 6 fette ma solo 2 formaggi → fai solo 2 panini!')}</text>
        <text x="320" y="160" text-anchor="middle" fill="#38ef7d" font-size="13" font-weight="800" class="chem-anim-pulse">${pick(lang, 'Cheese runs out first = LIMITING REAGENT! Bread = EXCESS.', 'Il formaggio finisce per primo = LIMITANTE! Il pane = IN ECCESSO.')}</text>
      </svg>`;

    case 'chemDilutionPour':
      return `<svg viewBox="0 0 640 205" class="dia" width="100%" aria-hidden="true">
        <rect x="34" y="24" width="230" height="156" rx="14" fill="rgba(255,93,143,.14)" stroke="#ff5d8f" stroke-width="2"/>
        <text x="149" y="54" text-anchor="middle" fill="#ff5d8f" font-size="14" font-weight="800">${pick(lang, 'CONCENTRATED (M₁ = 2.0 M)', 'CONCENTRATA (M₁ = 2,0 M)')}</text>
        <text x="149" y="94" text-anchor="middle" fill="#ffffff" font-size="20">${pick(lang, '●●●●●● (0.5 mol)', '●●●●●● (0,5 mol)')}</text>
        <text x="149" y="132" text-anchor="middle" class="sm">${pick(lang, 'Packed tight in 0.25 L', 'Molto concentrata in 0,25 L')}</text>

        <text x="320" y="98" text-anchor="middle" fill="#45d8ff" font-size="20" font-weight="800">+ H₂O →</text>
        <path d="M290 112 H350" stroke="#45d8ff" stroke-width="2" class="chem-anim-dash" fill="none"/><circle r="3" fill="#45d8ff"><animateMotion dur="1.2s" begin="0s" repeatCount="indefinite" path="M290 112 H350"/></circle><circle r="3" fill="#45d8ff"><animateMotion dur="1.2s" begin="0.6s" repeatCount="indefinite" path="M290 112 H350"/></circle>

        <rect x="376" y="24" width="230" height="156" rx="14" fill="rgba(69,216,255,.1)" stroke="#45d8ff" stroke-width="2"/>
        <text x="491" y="54" text-anchor="middle" fill="#45d8ff" font-size="14" font-weight="800">${pick(lang, 'DILUTED (M₂ = 0.5 M)', 'DILUITA (M₂ = 0,5 M)')}</text>
        <text x="491" y="94" text-anchor="middle" fill="#ffffff" font-size="20">${pick(lang, '●  ●  ●  ●  ●  ● (0.5 mol)', '●  ●  ●  ●  ●  ● (0,5 mol)')}</text>
        <text x="491" y="132" text-anchor="middle" class="sm">${pick(lang, 'Exact SAME 6 dots in 1.0 L!', 'STESSI 6 punti in 1,0 L!')}</text>
        <text x="491" y="156" text-anchor="middle" fill="#ffd166" font-size="13" font-weight="800">M₁ · V₁ = M₂ · V₂</text>
      </svg>`;

    case 'chemBronstedPass':
      return `<svg viewBox="0 0 640 205" class="dia" width="100%" aria-hidden="true">
        <rect x="20" y="22" width="600" height="160" rx="14" fill="rgba(255,93,143,.07)" stroke="#ff5d8f" stroke-width="2"/>
        <text x="320" y="50" text-anchor="middle" fill="#ffd166" font-size="15" font-weight="800">${pick(lang, 'BRØNSTED–LOWRY: Pass the H⁺ Proton Ball!', 'BRØNSTED–LOWRY: Passaggio del protone H⁺!')}</text>
        <rect x="52" y="76" width="160" height="62" rx="10" fill="rgba(255,93,143,.16)" stroke="#ff5d8f"/>
        <text x="132" y="104" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="800">HCl (${pick(lang, 'Acid', 'Acido')})</text>
        <text x="132" y="126" text-anchor="middle" class="sm">${pick(lang, 'Throws H⁺ → Cl⁻', 'Dona H⁺ → Cl⁻')}</text>

        <text x="275" y="110" text-anchor="middle" fill="#ffd166" font-size="18" font-weight="800">— H⁺ →</text>
        <circle r="8" fill="#ffd166" stroke="#fff" stroke-width="1.5"><animateMotion dur="2.4s" repeatCount="indefinite" path="M200 96 Q275 50 350 96" keyPoints="0;1;1" keyTimes="0;.6;1" calcMode="linear"/></circle>

        <rect x="336" y="76" width="248" height="62" rx="10" fill="rgba(69,216,255,.16)" stroke="#45d8ff"/>
        <text x="460" y="104" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="800">H₂O (${pick(lang, 'Base', 'Base')}) → H₃O⁺</text>
        <text x="460" y="126" text-anchor="middle" class="sm">${pick(lang, 'Catches H⁺ (conjugate acid!)', 'Accetta H⁺ (acido coniugato!)')}</text>
        <text x="320" y="166" text-anchor="middle" fill="#38ef7d" font-size="12.5" font-weight="700">${pick(lang, 'Strong acids react 100% · Weak acids (CH₃COOH) only ionize partially ⇌', 'Acidi forti ionizzano al 100% · Acidi deboli solo in parte ⇌')}</text>
      </svg>`;

    case 'chemElectroCell':
      return `<svg viewBox="0 0 640 205" class="dia" width="100%" aria-hidden="true">
        <rect x="20" y="20" width="600" height="164" rx="14" fill="rgba(69,216,255,.07)" stroke="#45d8ff" stroke-width="2"/>
        <text x="320" y="48" text-anchor="middle" fill="#ffd166" font-size="15" font-weight="800">${pick(lang, 'HOW A BATTERY WORKS (Daniell Cell = +1.10 V)', 'COME FUNZIONA UNA PILA (Pila Daniell = +1,10 V)')}</text>
        <rect x="44" y="70" width="210" height="92" rx="10" fill="rgba(255,106,61,.12)" stroke="#ff6a3d"/>
        <text x="149" y="96" text-anchor="middle" fill="#ff6a3d" font-size="14" font-weight="800">ANODE (−) · Zn</text>
        <text x="149" y="120" text-anchor="middle" class="sm">${pick(lang, 'Loses e⁻ → Zn²⁺ dissolves', 'Perde e⁻ → Zn si scioglie')}</text>
        <text x="149" y="144" text-anchor="middle" fill="#ffd166" font-size="12" font-weight="700">OXIDATION (O.N. ↑)</text>

        <text x="320" y="106" text-anchor="middle" fill="#ffd166" font-size="15" font-weight="800">e⁻ ──→</text>
        <path d="M258 112 H382" stroke="#ffd166" stroke-width="2" class="chem-anim-dash" fill="none"/><circle r="4" fill="#ffd166"><animateMotion dur="1.6s" begin="0s" repeatCount="indefinite" path="M258 112 H382"/></circle><circle r="4" fill="#ffd166"><animateMotion dur="1.6s" begin="0.8s" repeatCount="indefinite" path="M258 112 H382"/></circle>
        <text x="320" y="132" text-anchor="middle" class="sm">${pick(lang, 'Wire + Salt Bridge', 'Filo + Ponte Salino')}</text>

        <rect x="386" y="70" width="210" height="92" rx="10" fill="rgba(56,239,125,.12)" stroke="#38ef7d"/>
        <text x="491" y="96" text-anchor="middle" fill="#38ef7d" font-size="14" font-weight="800">CATHODE (+) · Cu</text>
        <text x="491" y="120" text-anchor="middle" class="sm">${pick(lang, 'Gains e⁻ → solid Cu grows!', 'Prende e⁻ → si deposita Cu!')}</text>
        <text x="491" y="144" text-anchor="middle" fill="#ffd166" font-size="12" font-weight="700">REDUCTION (O.N. ↓)</text>
      </svg>`;

    case 'chemPolymers':
      return `<svg viewBox="0 0 640 205" class="dia" width="100%" aria-hidden="true">
        <rect x="18" y="20" width="292" height="164" rx="12" fill="rgba(255,93,143,.08)" stroke="#ff5d8f" stroke-width="2"/>
        <text x="164" y="46" text-anchor="middle" fill="#ff5d8f" font-size="14" font-weight="800">${pick(lang, 'ESTERS (Fruity Scents!)', 'ESTERI (Aromi di Frutta!)')}</text>
        <text x="164" y="84" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="700">${pick(lang, 'Acid + Alcohol', 'Acido + Alcol')}</text>
        <text x="164" y="114" text-anchor="middle" fill="#ffd166" font-size="16" font-weight="800" class="chem-anim-float">→ Ester + H₂O 🍌🍍</text>
        <text x="164" y="152" text-anchor="middle" class="sm">${pick(lang, 'Condensation drops 1 water molecule', 'Condensazione: elimina 1 H₂O')}</text>

        <rect x="330" y="20" width="292" height="164" rx="12" fill="rgba(56,239,125,.08)" stroke="#38ef7d" stroke-width="2"/>
        <text x="476" y="46" text-anchor="middle" fill="#38ef7d" font-size="14" font-weight="800">${pick(lang, 'POLYMERS (Giant Chains!)', 'POLIMERI (Lunghe Catene!)')}</text>
        <text x="476" y="84" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="700">n (CH₂=CH₂) → [–CH₂–CH₂–]ₙ</text>
        <text x="476" y="116" text-anchor="middle" fill="#ffd166" font-size="14" font-weight="800" class="chem-anim-pulse">🔗 — 🔗 — 🔗 — 🔗</text>
        <text x="476" y="152" text-anchor="middle" class="sm">${pick(lang, 'Double bonds open to link Lego chains', 'I doppi legami si aprono in catena')}</text>
      </svg>`;

    default:
      return null;
  }
}
