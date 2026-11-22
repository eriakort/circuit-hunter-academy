# Ghana JHS 1–3 Science curriculum coverage audit

**Audit scope:** structural and learning-content integrity of the Ghana NaCCA Science content registered in Circuit Hunter Academy.

## Current registered coverage

| Grade | NaCCA strands registered | Missions |
|---|---:|---:|
| JHS 1 (Basic 7) | 5 of 5 | 22 |
| JHS 2 (Basic 8) | 5 of 5 | 22 |
| JHS 3 (Basic 9) | 5 of 5 | 25 |
| **Total** | **15 grade-strands** | **69** |

Each grade is expected to contain these five strands, in order:

1. Diversity of Matter
2. Cycles
3. Systems
4. Forces and Energy
5. Humans and the Environment

## Automated checks added

The audit reads the live application registries rather than maintaining a second, manually copied inventory. It verifies:

- Each JHS grade makes its Science subject selectable in the Ghana NaCCA curriculum.
- Each grade registers exactly five strands with the expected strand names and order.
- Every strand has at least one arc and at least one mission.
- Every registered arc has a mission and carries a NaCCA indicator reference.
- Registered mission totals match subject metadata: 22, 22 and 25.
- Science mission IDs are unique across JHS 1–3.
- Every mission has teaching/challenge scenes and at least five assessment questions.
- Every question has a prompt, feedback and non-empty answer choices.

Run the test with `bun test tests/ghanaJhsScienceCoverageAudit.test.ts`.

## Findings and limitations

**Structural coverage is present:** the repository registers all five Science strands for all three JHS grades, with 69 missions in total.

**This is not yet proof of complete indicator-level curriculum coverage.** The repository contains NaCCA indicator references in arc and mission metadata, but does not yet contain a canonical, versioned inventory of every official Basic 7, Basic 8 and Basic 9 Science indicator against which those references can be exhaustively reconciled. A reference appearing in a mission's `pages` field also does not by itself prove that every part of the indicator is taught or assessed.

## Indicator crosswalk status

A versioned NaCCA indicator crosswalk is now maintained in `src/data/ghanaJhsScienceIndicatorCrosswalk.ts` and documented in `docs/ghana-jhs-science-indicator-crosswalk.md`. Its candidate mappings remain subject to educator review. Automated metadata checks do not prove classroom delivery or mastery.

## Basic 9 Cycles practical-coverage increment (2026-11-19)

The JHS3 crop-maturity and animal-feed-selection lessons have been enriched against the outstanding Basic 9 Cycles indicators. Crop maturity now explicitly links the indicator about uses at different maturity stages to the crop lesson. Animal feed selection now links the growth-stage differentiation outcome and includes a supervised, safe feeding procedure with hygiene, water provision and observation records. A scenario question checks the practical sequence. These are candidate coverage improvements; the mappings remain `needs-review` until an educator confirms delivery and assessment quality in context.

Regression tests assert the indicator references, lesson evidence and practical assessment prompt.

## Basic 9 Forces and Energy practical-coverage increment (2026-11-19)

The light lesson now explains ray paths through a pinhole camera and includes a safe torch-and-screen investigation of umbra, penumbra, shadow size and sharpness. The forces lesson makes the action–reaction pair explicit and adds a supervised balloon-and-string demonstration. The agricultural tools lesson now guides learners through task analysis, sketching, material selection, safe supervised fabrication, joining, prototype testing and evaluation. The four indicator references (B9.4.1.2.2, B9.4.1.2.3, B9.4.4.1.2 and B9.4.5.1.3) are listed explicitly in mission metadata. These mappings remain candidates for educator review; automated tests verify metadata and instructional evidence, not classroom delivery.


## Ghana JHS Science instructional-visual audit (2026-11-19)

The live registry contains **69 missions**: Basic 7 (22), Basic 8 (22) and Basic 9 (25). A separate visual audit now distinguishes dedicated instructional visuals from generic challenge artwork and missing visuals. It deliberately does not count a battle scene as a scientific simulation.

Baseline findings from the 15 Ghana JHS Science lesson data modules:

| Visual category | Missions |
|---|---:|
| Dedicated instructional visual reference | 69 |
| Generic challenge illustration only | 0 |
| No visual reference at all | 0 |

All 69 current missions retain the shared `vis: 'demon'` challenge illustration and now also have dedicated instructional visuals: Basic 7 (22/22), Basic 8 (22/22) and Basic 9 (25/25). Each mission also has an interactive battle scene, but that is an assessment/game interaction rather than an instructional science visual. This distinction is important: the presence of an image or an interactive quiz does not mean that the scientific process itself has been visualised.

The reusable `GhanaScienceVisual` frame provides local React/SVG content with explicit play/pause and replay controls, keyboard-operable buttons, a static paused default, responsive layout and reduced-motion support. The Basic 7 Diversity of Matter pilot adds a particle-state temperature model, a selectable liquid-role explorer, a materials-and-properties comparator, and a plant/animal cell explorer. The follow-on Cycles pilot adds an interactive water-cycle and land-process explorer, a comparative housefly/maize/chicken life-cycle explorer, a Ghanaian crop-production journey, and a domestic-animal classification and welfare explorer. Interactions update the model or explanatory text; these are locally rendered and do not require an external service.

Run the checks with:

- `bun test tests/ghanaJhsScienceVisualAudit.test.ts`
- `bun test tests/ghanaJhsScienceCoverageAudit.test.ts`

Visual status meanings:

- **instructional-visual:** at least one dedicated, non-generic visual reference is attached to a teaching scene.
- **generic-only:** the mission has challenge/decorative artwork but no dedicated instructional visual.
- **missing:** no visual reference is attached.

The audit is a prioritisation aid, not an indicator-coverage or teaching-quality certification. It records the four pilot mission IDs explicitly and should be updated alongside each future visual implementation.


### Basic 7 Cycles instructional-visual increment (2026-11-19)

Four Basic 7 Cycles missions now include dedicated interactive teaching visuals:

- **Earth Systems:** learners select water-cycle stages and compare weathering with erosion, using Ghana examples such as rainfall, streams, Lake Volta, farms and vegetation cover.
- **Life Cycles:** learners compare housefly, maize and chicken development stage by stage, with a practical food-hygiene reminder for reducing fly contamination.
- **Crop Production:** learners explore land preparation, planting, crop care, harvesting and storage, with maize, cassava and cocoa examples.
- **Animal Production:** learners compare ruminants, monogastrics and poultry through feeding, welfare and community uses.

Each visual is locally rendered, keyboard-operable and bilingual (English/Italian). The additions do not alter mission gates, assessment questions or mastery logic. The visual audit now records eight dedicated Basic 7 visuals and 61 generic-only JHS Science missions.


### Basic 7 Systems instructional-visual increment (2026-11-19)

Four Basic 7 Systems missions now include dedicated interactive teaching visuals:

- **Human Body System:** learners follow food through the mouth, oesophagus, stomach and intestines, with the role of each organ explained.
- **Solar System:** learners select Mercury, Venus, Earth or Mars and compare the four inner planets in order from the Sun.
- **Ecosystem:** learners explore Ghanaian savanna and freshwater-pond food chains and inspect each organism's role in energy transfer.
- **Farming Systems:** learners compare crop rotation, mixed cropping, mixed farming, land rotation and organic farming, including possible benefits and local constraints.

The visuals use local React/SVG artwork, accessible controls and English-only explanations. They appear in the second teaching scene and do not alter mission gates, assessment questions or mastery logic. The audit now records twelve dedicated Basic 7 visuals and 57 generic-only JHS Science missions.


### Basic 7 Forces and Energy instructional-visual increment (2026-11-19)

Four Basic 7 Forces and Energy missions now include dedicated interactive teaching visuals:

- **Energy Forms:** learners select kinetic, gravitational potential, chemical, thermal, light, sound and electrical energy examples, including a rolling football, food, sunlight and water stored behind a Ghanaian dam.
- **Electricity Generation:** learners trace hydroelectric, thermal and solar photovoltaic generation, with Ghana examples such as Akosombo and Kpong and a comparison of environmental trade-offs.
- **Energy Conversion:** learners trace energy transfers in a torch, electric fan, charcoal stove and falling ball, reinforcing conservation rather than the misconception that energy disappears.
- **Force and Motion:** learners inspect forces in a football kick, a book resting on a desk, a slowing bicycle and a wheelbarrow, distinguishing balanced and unbalanced forces.

The visuals use local React/SVG artwork, accessible interactive controls and bilingual English/Italian explanations. They appear in the second teaching scene and do not alter mission gates, assessment questions or mastery logic. The audit now records sixteen dedicated Basic 7 visuals and 53 generic-only JHS Science missions. The fifth Forces and Energy mission, Agricultural Tools, remains in the next visual batch.


### Basic 7 Agricultural Tools instructional-visual increment (2026-11-19)

The fifth Basic 7 Forces and Energy mission, **The Farm Tool Engineer**, now has a dedicated interactive teaching visual. Learners match common farm tasks to hoes, cutlasses, rakes, wheelbarrows, watering cans and spades; inspect wedge, lever, wheel-and-axle and gravity principles; and complete a four-point safe-handling checklist. Examples include preparing soil, weeding, watering seedlings and moving harvested produce. The visual is bilingual English/Italian, uses local React/SVG artwork and accessible controls, and appears in the second teaching scene without changing mission gates, quizzes or mastery logic.

Basic 7 now has 17 dedicated instructional visuals; 52 of the 69 audited JHS Science missions remain generic-only (Basic 7: 17/5; Basic 8: 0/22; Basic 9: 0/25).


### Basic 7 Humans and the Environment instructional-visual increment (2026-11-19)

Four Basic 7 Humans and the Environment missions now include dedicated interactive teaching visuals:

- **Waste Management:** learners sort food scraps, paper, plastics, batteries and wastewater, then explore reduce, reuse, recycle and composting with safe disposal guidance.
- **Human Health:** learners connect vitamin A, vitamin C, vitamin D, protein and iron deficiencies to examples, then compare respiratory-particle and body-fluid transmission while learning that prevention depends on the disease.
- **Science and Industry:** learners explore agricultural science, medical laboratory science, engineering, environmental science and physics through the questions, evidence-based methods and community impact of each career.
- **Climate Change and Green Economy:** learners distinguish the natural greenhouse effect from its human-driven enhancement, explore forest carbon storage and compare solar power, hydropower and energy efficiency with their trade-offs.

The visuals use local React/SVG artwork, accessible interactive controls and bilingual English/Italian explanations. They appear in the second teaching scene and do not change mission gates, assessment questions or mastery logic. Basic 7 now has 22 dedicated instructional visuals; 47 of the 69 audited JHS Science missions remain generic-only (Basic 7: 22/0; Basic 8: 0/22; Basic 9: 0/25). The Humans and the Environment strand now has a dedicated visual for all five missions.


### Basic 7 Understanding the Environment visual (2026-11-19)

The final Basic 7 Humans and the Environment mission, **Understanding the Environment**, now has an interactive habitat and adaptation visual. Learners compare moist forest, Guinea savanna, river and wetland, and coastal/mangrove habitats; explore how roots, leaves, stems and gills support survival; and distinguish mutualism, parasitism and commensalism through examples. The content encourages careful observation and protection of living things. This completes dedicated instructional visuals for all five Basic 7 Humans and the Environment missions and brings Basic 7 coverage to 22 of 22 missions.


### Basic 8 Diversity of Matter instructional-visual increment (2026-11-19)

Three Basic 8 Diversity of Matter missions now include dedicated interactive teaching visuals:

- **Mixtures and Separation Techniques:** learners compare homogeneous solutions, suspensions, colloids and heterogeneous mixtures, then inspect filtration, evaporation, sieving and magnetic separation. Water-safety guidance distinguishes classroom separation from treatment that makes water safe to drink.
- **Atoms and the Periodic Table:** learners explore protons, neutrons and electrons, calculate particle counts from atomic and mass numbers, and compare a neutral atom with an ion.
- **Prokaryotic and Eukaryotic Cells:** learners compare bacteria with plant and animal cells, identify the membrane-bound nucleus, and examine structures shared by both cell types.

The visuals use local React/SVG artwork, keyboard-operable controls and bilingual English/Italian explanations. They appear in the second teaching scene and do not change mission gates, quizzes or mastery logic. At the time of this Diversity of Matter increment, the visual audit recorded 25 dedicated instructional visuals and 44 generic-only JHS Science missions (Basic 7: 22/0; Basic 8: 3/19; Basic 9: 0/25). Subsequent strand increments have since completed dedicated visuals for all 69 registered missions.


## Basic 8 Systems learning-evidence increment (2026-11-22)

The four existing Basic 8 Systems missions have been strengthened against the seven NaCCA indicators in Strand 3 (official curriculum printed pp. 64–68):

- **Human Body System — Teeth and Dental Health:** the lesson now includes a model-based task to label the crown, neck and root, sketch the four tooth types, and demonstrate gentle cleaning. Assessment now directly checks incisors, canines, premolars, molars, plaque and preventive cleaning.
- **Solar System — Outer Planets:** learners compare the gas giants and ice giants, distinguish Uranus's extreme axial tilt and Neptune's fast winds, and construct a labelled outer-planet model while identifying when it is not to scale.
- **Ecosystem — Feeding Relationships:** learners distinguish energy flow from matter cycling, construct a Ghanaian grassland or pond food web, and predict the effects of reduced sunlight or a population change.
- **Farming Systems:** learners plan a locally appropriate crop–animal–land combination and explain component contributions, including suitable crop residues and properly composted manure, while considering resource and animal-welfare trade-offs.

Each mission now has eight assessment questions (32 across the strand). The crosswalk records the official indicator wording and specific candidate lesson and question evidence for all seven Basic 8 Strand 3 indicators. **All seven remain `needs-review`**: automated checks verify that evidence is present and linked, but do not certify classroom delivery or learner performance.

The four missions retain their existing dedicated instructional visuals in the Science Motion registry. This increment changes lesson and assessment evidence, not mission gates, progress logic or visual registration.

Source: [NaCCA Science Common Core Programme Curriculum for JHS1 (B7)–JHS3 (B9), September 2020](https://nacca.gov.gh/wp-content/uploads/2023/06/SCIENCE.pdf), Basic 8 Strand 3.


## Basic 8 Forces and Energy learning-evidence increment (2026-11-22)

The five existing Basic 8 Forces and Energy missions have been expanded with curriculum-directed learning tasks and assessments, without changing mission gates or progression:

- **Energy Forms, Sources and Heat:** learners trace the dam-to-home hydroelectric pathway, compare solar, wind, hydro and biogas, research sustainable management challenges, and distinguish heat from temperature.
- **Electricity Transmission and Electronics:** learners draw the generation-to-consumer transmission flow chart and investigate a capacitor's charging/discharging action in a teacher-approved low-voltage DC circuit with a resistor and LED. Mains electricity and large/unknown capacitors are explicitly excluded.
- **Energy Conversion and Conservation:** learners conduct a school energy-use audit and create an evidence-based poster that distinguishes the scientific conservation principle from everyday efforts to reduce unnecessary energy use.
- **Magnetism, Force, Motion and Machines:** learners make and test a simple magnet, investigate magnetic force and trolley acceleration in relation to Newton's Second Law, and identify simple machines within complex machines.
- **Agricultural Tools:** learners create a labelled local tool album and practise selecting, using, cleaning and storing suitable tools during teacher-supervised school-garden activities.

Each mission now has eight assessment questions (40 across the strand). The crosswalk records all 13 Basic 8 Strand 4 indicator statements with official wording, source-page references, candidate teaching-scene references and assessment-question references. All 13 remain `needs-review`: automated tests check the evidence links and content, but do not certify classroom delivery or learner performance. Practical tasks such as circuit construction, magnet-making, trolley investigation and agricultural-tool use still require teacher observation.

All five missions retain their existing dedicated instructional visuals in the Science Motion registry. This increment adds teaching and assessment evidence; it does not alter mastery gates, progress logic or visual registration.

Source: NaCCA, *Science Common Core Programme Curriculum for JHS1 (B7)–JHS3 (B9)*, September 2020, Basic 8 Strand 4, printed pp. 69–76 (PDF pages 110–117).


## Basic 8 Humans and the Environment learning-evidence increment (2026-11-22)

The six existing Basic 8 Strand 5 missions now include a sixth teaching scene with an applied task and eight assessment questions each (48 questions across the strand):

- **Waste Management:** learners conduct a permission-based community waste survey, plan a supervised improvement activity and evaluate it against a baseline. Hazardous waste is handled only by trained adults.
- **Human Health:** learners create a sourced comparison of communicable diseases, transmission, symptoms, effects and prevention. Health-centre data must be authorised and anonymous; the lesson explicitly avoids stigma and diagnosis by symptoms alone.
- **Science and Industry:** learners build an innovation portfolio connecting science, technology and innovation to Ghana-relevant examples, checking source quality, access and environmental impacts.
- **Climate Change and Green Economy:** learners compare long-term climate evidence across tropical regions, distinguish adaptation from mitigation and propose measurable community actions.
- **Soils and Plants:** learners conduct a controlled comparison of labelled sandy, loamy and clayey soil samples, recording drainage and water retention with safe handling.
- **Rocks and Soil Formation:** learners create a labelled rock-identification guide from teacher-provided samples or safe photographs and explain how weathering contributes to soil formation.

The crosswalk now records official wording, printed source pages, candidate teaching-scene references and quiz-question references for all 11 Basic 8 Strand 5 indicators. All remain `needs-review`: automated checks confirm that candidate evidence links resolve, but do not certify practical performance, community projects or learner mastery.

Source: NaCCA, *Science Common Core Programme Curriculum for JHS1 (B7)–JHS3 (B9)*, September 2020, Basic 8 Strand 5, printed pp. 77–85 (PDF pages 118–126).


## Basic 9 Diversity of Matter learning-evidence increment (2026-11-22)

The five existing Basic 9 Strand 1 missions now include a fifth teaching scene with an applied model-building or observation task and eight assessment questions each (40 questions across the strand):

- **Binary Compounds:** learners build particle models with element-symbol cards and counters, write formulae, and distinguish molecular compounds from ionic lattices.
- **Acids, Bases and Salts:** learners conduct a supervised indicator and pH investigation with labelled low-risk samples, recording evidence and following chemical-safety procedures.
- **Chemical Bonding:** learners compare ionic electron transfer, covalent electron sharing and metallic delocalised-electron models, including model limitations.
- **Specialised Plant Cells:** learners observe or interpret prepared slides and micrographs, linking epidermal, guard, xylem and cambium structures to their functions.
- **Specialised Human Cells:** learners compare nerve, red blood, muscle and sperm cells through structure-to-function diagrams using respectful scientific language.

The seven Basic 9 Strand 1 indicators now include references to the added applied scene and expanded assessment questions. All remain `needs-review`; activities require teacher supervision and observation, and automated checks do not certify practical performance or mastery.

Source: NaCCA, *Science Common Core Programme Curriculum for JHS1 (B7)–JHS3 (B9)*, September 2020, Basic 9 Strand 1.

## Basic 9 Cycles applied-learning increment (2026-11-22)

The five existing Basic 9 Cycles missions now include an additional applied learning scene and eight assessment questions each (40 questions across the strand):

- **Nitrogen Cycle:** learners compare teacher-prepared soil evidence or root-nodule photographs, explain nitrogen-fixing legume associations and propose a crop-rotation plan. Unknown cultures and soil tasting are excluded.
- **Grasshopper Life Cycle:** learners build a labelled egg–nymph–adult sequence and create a crop-monitoring record using approved images or observations without disturbing organisms or applying pesticides.
- **Crop Maturity:** learners create a maturity-and-use matrix for maize, leafy vegetables and beans, recording harvest signs, intended use and storage considerations.
- **Animal Feed Preparation:** learners classify energy, protein, fibre and mineral ingredients and create a safe feed-preparation flow chart. Real rations require qualified adult review.
- **Animal Feed Selection:** learners compare animal profiles and use verified feed information to justify stage-appropriate ration choices, water needs and safe responses.

The crosswalk now links all 11 Basic 9 Strand 2 indicator records to the applied scene and expanded quiz evidence. All indicators remain `needs-review`; practical observation, local agricultural guidance and educator review are still required. The changes do not alter mastery gates or progression logic.

Source: NaCCA, *Science Common Core Programme Curriculum for JHS1 (B7)–JHS3 (B9)*, September 2020, Basic 9 Strand 2, printed pp. 97–100.

