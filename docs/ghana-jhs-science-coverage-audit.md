# Ghana JHS 1–3 Science curriculum coverage audit

**Audit scope:** structural and learning-content integrity of the Ghana NaCCA Science content registered in Circuit Hunter Academy.

## Current registered coverage

| Grade | NaCCA strands registered | Missions |
|---|---:|---:|
| JHS 1 (Basic 7) | 5 of 5 | 21 |
| JHS 2 (Basic 8) | 5 of 5 | 22 |
| JHS 3 (Basic 9) | 5 of 5 | 25 |
| **Total** | **15 grade-strands** | **68** |

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
- Registered mission totals match subject metadata: 21, 22 and 25.
- Science mission IDs are unique across JHS 1–3.
- Every mission has teaching/challenge scenes and five assessment questions.
- Every question has a prompt, feedback and non-empty answer choices.

Run the test with `bun test tests/ghanaJhsScienceCoverageAudit.test.ts`.

## Findings and limitations

**Structural coverage is present:** the repository registers all five Science strands for all three JHS grades, with 68 missions in total.

**This is not yet proof of complete indicator-level curriculum coverage.** The repository contains NaCCA indicator references in arc and mission metadata, but does not yet contain a canonical, versioned inventory of every official Basic 7, Basic 8 and Basic 9 Science indicator against which those references can be exhaustively reconciled. A reference appearing in a mission's `pages` field also does not by itself prove that every part of the indicator is taught or assessed.

## Recommended next audit increment

Create a versioned NaCCA indicator crosswalk for Basic 7–9 Science, sourced from the official curriculum document. For each indicator, record the strand, learning expectation, linked arc and mission, teaching-scene evidence, and assessment-question evidence. Mark indicators as **covered**, **partially covered**, or **not yet covered**. This will distinguish topic presence from genuine curriculum mastery and expose precise content gaps before SHS Science expansion.

## Basic 9 Cycles practical-coverage increment (2026-11-19)

The JHS3 crop-maturity and animal-feed-selection lessons have been enriched against the outstanding Basic 9 Cycles indicators. Crop maturity now explicitly links the indicator about uses at different maturity stages to the crop lesson. Animal feed selection now links the growth-stage differentiation outcome and includes a supervised, safe feeding procedure with hygiene, water provision and observation records. A scenario question checks the practical sequence. These are candidate coverage improvements; the mappings remain `needs-review` until an educator confirms delivery and assessment quality in context.

Regression tests assert the indicator references, lesson evidence and practical assessment prompt.
