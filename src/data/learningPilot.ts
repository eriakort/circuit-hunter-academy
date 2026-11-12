import type { LearningTechniqueUnlock } from '../types';

export interface LearningPilotDefinition {
  summary: [string, string][];
  techniqueUnlock: LearningTechniqueUnlock;
}

/**
 * Smart Learning 2.3 pilot: structured mission briefings and earned techniques
 * for the four Computer Hardware & Architecture missions.
 */
export const HARDWARE_LEARNING_PILOT: Record<string, LearningPilotDefinition> = {
  a3m1: {
    summary: [
      ['A computer transforms input into useful output, guided by software. The von Neumann model stores instructions and data in memory and connects its components through buses.',
       'Un computer trasforma l’input in un output utile, guidato dal software. Il modello di von Neumann memorizza istruzioni e dati e collega i componenti tramite i bus.']
    ],
    techniqueUnlock: {
      id: 'input-output-slash',
      name: ['Input–Output Slash', 'Fendente Input–Output'],
      description: ['Trace information from input through processing to output and storage. Your first Circuit Form is ready.',
        'Segui le informazioni dall’input, attraverso l’elaborazione, fino all’output e alla memoria. La tua prima Forma Circuito è pronta.'],
      xpReward: 25
    }
  },
  a3m2: {
    summary: [
      ['The motherboard connects the system, the power supply delivers suitable power, and the CPU runs instructions through fetch, decode and execute.',
       'La scheda madre collega il sistema, l’alimentatore fornisce energia adeguata e la CPU esegue le istruzioni tramite fetch, decode ed execute.']
    ],
    techniqueUnlock: {
      id: 'execution-strike',
      name: ['Execution Strike', 'Colpo di Esecuzione'],
      description: ['Use the fetch–decode–execute cycle to explain how the CPU carries out instructions.',
        'Usa il ciclo fetch–decode–execute per spiegare come la CPU esegue le istruzioni.'],
      xpReward: 25
    }
  },
  a3m3: {
    summary: [
      ['RAM holds active data, cache speeds up access, ROM preserves essential instructions, buses carry signals, and storage keeps files when power is off.',
       'La RAM contiene i dati attivi, la cache accelera l’accesso, la ROM conserva istruzioni essenziali, i bus trasportano segnali e l’archiviazione mantiene i file anche senza alimentazione.']
    ],
    techniqueUnlock: {
      id: 'cache-flash-step',
      name: ['Cache Flash Step', 'Passo Lampo della Cache'],
      description: ['Choose the right memory or storage technology for speed, capacity and persistence.',
        'Scegli la tecnologia di memoria o archiviazione più adatta in base a velocità, capacità e persistenza.'],
      xpReward: 25
    }
  },
  a3m4: {
    summary: [
      ['Peripherals let a computer interact with the world. Touchscreens combine input and output, while responsible design considers accessibility, e-waste and technological change.',
       'Le periferiche permettono al computer di interagire con il mondo. I touchscreen combinano input e output, mentre una progettazione responsabile considera accessibilità, RAEE e cambiamento tecnologico.']
    ],
    techniqueUnlock: {
      id: 'io-twin-strike',
      name: ['I/O Twin Strike', 'Doppio Fendente I/O'],
      description: ['Identify how devices send information to a computer, receive information from it, or do both.',
        'Riconosci come i dispositivi inviano informazioni al computer, le ricevono o svolgono entrambe le funzioni.'],
      xpReward: 25
    }
  },
  m4m1: {
    summary: [
      ['A variable is a letter for a number. Read each term, identify its coefficient and constant, then substitute values and calculate in the correct order.',
       'Una variabile è una lettera che rappresenta un numero. Riconosci ogni termine, individua coefficiente e costante, poi sostituisci i valori e calcola nell’ordine corretto.']
    ],
    techniqueUnlock: {
      id: 'variable-slash',
      name: ['Algebra Form · First Technique: Variable Slash', 'Stile dell’Algebra · Prima Tecnica: Fendente della Variabile'],
      description: ['Read, substitute and evaluate algebraic expressions with confidence.',
        'Leggi, sostituisci e calcola le espressioni algebriche con sicurezza.'],
      xpReward: 25
    }
  },
};
