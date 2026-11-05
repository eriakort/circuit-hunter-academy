# Computer Science checkpoint pilot: repository audit and topic map

## Repository audit

- The Grade 9 Computer Science curriculum is already organized into 16 chapters and 44 missions.
- `src/components/ComputerScienceLab.tsx` already provides mission-specific interactive practice for algorithms, binary data, text encoding, RGB images, compression, computer hardware, networking, cybersecurity, spreadsheets and Python. The checkpoint supplements these lesson activities; it does not replace them.
- The existing Physics checkpoint provides the reusable product pattern: four themed stages, 12 bilingual questions, a 10/12 pass mark, persisted attempts and best score, and a one-time 50 XP completion reward.
- The current Playwright workflow installs Chromium before running E2E tests. The recent local test failures were caused by the local environment not having the Playwright Chromium binary installed, not by an application assertion failure.
- Playwright generated files were accidentally committed under `test-results/`. They have been removed and `test-results/` plus `playwright-report/` are now ignored.

## Pilot scope

The first Computer Science checkpoint focuses on the four foundational strands already taught in the opening curriculum. It is available only in Grade 9 Computer Science after all 15 prerequisite missions below have been cleared.

| Mini-game | Existing mission coverage | Learning focus |
| --- | --- | --- |
| Algorithm Dojo | `a1m1–a1m3` | Algorithms, ordered instructions, input/process/output and flowcharts |
| Binary Data Forge | `a2m1–a2m4` | Bits and bytes, binary values, character encoding, digital media and compression |
| Hardware Core Reactor | `a3m1–a3m4` | Computer architecture, CPU, motherboard, RAM, storage, buses and peripherals |
| Network Gateway | `a5m1–a5m4` | LAN/WAN, Internet, packets, Web, browsers, communication and netiquette |

## Assessment design

- 4 mini-games × 3 questions = 12 questions.
- Questions, answer options and feedback are bilingual (English/Italian).
- At least 10 correct answers are required to pass.
- First successful completion awards 50 XP once; replaying cannot award the same reward again.
- Attempts, best score, last score and completion are stored through the existing checkpoint progress model.

## Deliberately deferred

Cybersecurity (`c6m1–c6m3`), spreadsheets (`c9m1–c9m3`), flowchart/trace-table extensions (`c11m1–c11m3`) and Python (`c12m1–c16m2`) remain outside this first foundations checkpoint. They already have mission content and interactive labs. A later checkpoint can assess these strands after the foundations pilot has been reviewed.
