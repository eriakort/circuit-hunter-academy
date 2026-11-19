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
- Every mission has teaching/challenge scenes and five assessment questions.
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
| Dedicated instructional visual reference | 0 |
| Generic challenge illustration only | 69 |
| No visual reference at all | 0 |

All 69 current missions use the shared `vis: 'demon'` challenge illustration. Each mission also has an interactive battle scene, but that is an assessment/game interaction rather than an instructional science visual. This distinction is important: the presence of an image or an interactive quiz does not mean that the scientific process itself has been visualised.

The new reusable `GhanaScienceVisual` frame provides local React/SVG content with explicit play/pause and replay controls, keyboard-operable buttons, a static paused default, responsive layout and reduced-motion support. It is a foundation for the next increment; it does not yet claim that any mission has been visually enriched.

Run the checks with:

- `bun test tests/ghanaJhsScienceVisualAudit.test.ts`
- `bun test tests/ghanaJhsScienceCoverageAudit.test.ts`

Visual status meanings:

- **instructional-visual:** at least one dedicated, non-generic visual reference is attached to a teaching scene.
- **generic-only:** the mission has challenge/decorative artwork but no dedicated instructional visual.
- **missing:** no visual reference is attached.

The audit is a baseline and prioritisation aid, not an indicator-coverage or teaching-quality certification.
