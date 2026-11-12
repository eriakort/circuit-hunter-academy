# Computer Science interactive labs: operating systems and applications

## Scope

This increment extends the existing mission-level Computer Science visual lab into Chapter 4, **Operating Systems & Applications**. It supplements the bilingual lessons and does not replace their scenes, knowledge checks or mastery gates.

## Mission-to-lab mapping

| Mission | Learning focus | Interactive practice |
| --- | --- | --- |
| `a4m1` — The Headmaster: Operating System | Applications, operating systems, programs versus processes, RAM, scheduling and drivers | Step through an app launch from selecting its icon to OS scheduling and hardware communication |
| `a4m2` — The Archive: Files, Folders & GUI | File systems, folder trees, paths, GUI and file operations | Explore a sample folder tree and simulate copy, move, rename and delete operations |
| `a4m3` — Apps, Sensors & Licences | Application software, mobile apps, accelerometer, GNSS, copyright and software licences | Match tasks to application types, experiment with phone tilt, and compare open-source, freeware and proprietary licences |

## Design and safety notes

- All learner-facing instructions and feedback are available in English and Italian.
- File actions are simulated against a teaching example; they do not access or modify the learner's device.
- The accelerometer control is a simplified model, not a live sensor reading.
- The licence activity distinguishes open source from freeware and proprietary software; it does not imply that free-of-charge software is automatically open source.
- The existing visual lab coach prompt encourages prediction, observation and explanation.

## Verification

Playwright coverage checks the operating-system process flow, file-operation feedback in Italian, task-to-application matching and licence explanations. The repository CI remains the merge gate for build, helper tests, question-bank tests and the complete E2E suite.
