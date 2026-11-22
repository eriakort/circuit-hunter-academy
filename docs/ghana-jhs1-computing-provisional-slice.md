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

The pilot contains four focused missions:

1. Computer systems: input, processing, output and storage.
2. Digital information and files: file names, folders and responsible reuse.
3. Algorithms and instructions: sequence, conditions, testing and debugging.
4. Safe and responsible computing: privacy, passwords, suspicious links and cyberbullying.

These topics are broad foundational computing themes, not a claim that they are a complete or exact restatement of the official JHS 1 Computing curriculum.

## Validation

Run:

- `bun test tests/ghanaJhs1ComputingData.test.ts`
- `bun test tests/curriculumRegistry.test.ts`
- `bun test tests/subjectRegistration.test.ts`
