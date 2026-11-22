# Ghana JHS 1 Computing provisional pilot

This repository now registers a small, English-only **JHS 1 Computing** pilot in the Ghana NaCCA pathway.

## Curriculum source status

The direct NaCCA/JHS Computing Common Core Programme document was not available through the repository’s prior research pass: the NaCCA host could not resolve. Automated checks also found no public GitHub copy to verify the exact JHS Computing source. The curriculum-host and public-source checks did not provide a reliable official document for this implementation.

Because an authoritative JHS Computing document could not be verified, this first slice is **provisional**:

- it does not invent strand counts, NaCCA indicator IDs or source pages;
- it is limited to JHS 1;
- it does not claim complete NaCCA alignment;
- it leaves JHS 2, JHS 3, SHS and the Italian Computer Science pathway unchanged;
- arc metadata explicitly records `source verification pending`.

## Registered first slice

The pilot contains sixteen focused missions:

1. Computer systems: input, processing, output and storage.
2. Digital information and files: file names, folders and responsible reuse.
3. Algorithms and instructions: sequence, conditions, testing and debugging.
4. Safe and responsible computing: privacy, passwords, suspicious links and cyberbullying.
5. Binary data: bits, place values and interpreting a bit pattern.
6. Networks: connections, routes and message packets.
7. Applications: choosing a tool for reports, surveys and presentations.
8. Device care: safe handling, comfortable screen use and breaks.
9. Programming: arranging instructions and tracing a repeat block.
10. Data: recording a class survey in a table and comparing counts in a bar chart.
11. Search and research: use focused terms and check authorship, dates and evidence.
12. Collaboration: choose appropriate access for shared class work and credit contributions.
13. Documents: use a clear title, headings, readable paragraphs and consistent formatting.
14. Spreadsheets: organise values in cells and calculate a total with a formula.
15. Accessibility: use helpful image descriptions and captions, and avoid relying on colour alone.
16. Troubleshooting: describe a problem, try a safe check and ask for help when needed.

Each mission now has a Ghana-specific interactive visual on its second teaching scene. Learners can trace computer-system stages, sort sample files, test an algorithm condition, respond to a suspicious message, toggle binary bits, send a network message, match an application to a task, adjust an illustrative screen position, trace repeated program instructions, update survey counts, inspect source clues, choose sharing permissions, compare document layouts, recalculate a spreadsheet total, select useful image descriptions, or try a safe troubleshooting check. The diagrams are locally rendered; motion respects the site's reduced-motion setting.

These topics are broad foundational computing themes, not a claim that they are a complete or exact restatement of the official JHS 1 Computing curriculum.

## Validation

Run:

- `bun test tests/ghanaJhs1ComputingData.test.ts`
- `bun test tests/curriculumRegistry.test.ts`
- `bun test tests/subjectRegistration.test.ts`
- `bun run test:e2e -- tests/e2e/ghana-jhs1-computing.spec.ts`
