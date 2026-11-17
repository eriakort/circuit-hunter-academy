/**
 * “Tavole attive dei verbi”: full conjugation tables shown in the Italian grammar
 * lessons. Forms follow the textbook tables (L’albero delle storie 5 – Grammatica,
 * pp. 146–153); the persons are io, tu, egli, noi, voi, essi.
 */
export type Six = [string, string, string, string, string, string];

export interface VerbTable {
  title: string;
  indicativo: { simple: Array<[string, Six]>; compound: Array<[string, Six]> };
  congiuntivo: { simple: Array<[string, Six]>; compound: Array<[string, Six]> };
  condizionale: { simple: [string, Six]; compound: [string, Six] };
  imperativo: string[];
  infinito: [string, string];
  participio: [string, string];
  gerundio: [string, string];
}

export const PERSONS: Six = ['io', 'tu', 'egli', 'noi', 'voi', 'essi'];

const six = (...forms: string[]): Six => {
  if (forms.length !== 6) throw new Error(`Expected 6 forms, got ${forms.length}`);
  return forms as Six;
};

/** Compound forms: auxiliary forms + a participle (which may agree, e.g. stato/stati). */
const withPart = (aux: Six, singular: string, plural = singular): Six =>
  aux.map((a, i) => `${a} ${i < 3 ? singular : plural}`) as Six;

const AVERE_PRES = six('ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno');
const AVERE_IMPF = six('avevo', 'avevi', 'aveva', 'avevamo', 'avevate', 'avevano');
const AVERE_REM = six('ebbi', 'avesti', 'ebbe', 'avemmo', 'aveste', 'ebbero');
const AVERE_FUT = six('avrò', 'avrai', 'avrà', 'avremo', 'avrete', 'avranno');
const AVERE_CONG = six('abbia', 'abbia', 'abbia', 'abbiamo', 'abbiate', 'abbiano');
const AVERE_CONG_IMPF = six('avessi', 'avessi', 'avesse', 'avessimo', 'aveste', 'avessero');
const AVERE_COND = six('avrei', 'avresti', 'avrebbe', 'avremmo', 'avreste', 'avrebbero');

const ESSERE_PRES = six('sono', 'sei', 'è', 'siamo', 'siete', 'sono');
const ESSERE_IMPF = six('ero', 'eri', 'era', 'eravamo', 'eravate', 'erano');
const ESSERE_REM = six('fui', 'fosti', 'fu', 'fummo', 'foste', 'furono');
const ESSERE_FUT = six('sarò', 'sarai', 'sarà', 'saremo', 'sarete', 'saranno');
const ESSERE_CONG = six('sia', 'sia', 'sia', 'siamo', 'siate', 'siano');
const ESSERE_CONG_IMPF = six('fossi', 'fossi', 'fosse', 'fossimo', 'foste', 'fossero');
const ESSERE_COND = six('sarei', 'saresti', 'sarebbe', 'saremmo', 'sareste', 'sarebbero');

const avereTenses = (part: string) => ({
  pp: withPart(AVERE_PRES, part), tp: withPart(AVERE_IMPF, part), tr: withPart(AVERE_REM, part), fa: withPart(AVERE_FUT, part),
  cp: withPart(AVERE_CONG, part), ct: withPart(AVERE_CONG_IMPF, part), cdp: withPart(AVERE_COND, part)
});

const regular = (
  title: string,
  part: string,
  forms: { pres: Six; impf: Six; rem: Six; fut: Six; cong: Six; congImpf: Six; cond: Six; imp: string[]; inf: string; partPres: string; ger: string }
): VerbTable => {
  const c = avereTenses(part);
  return {
    title,
    indicativo: {
      simple: [['presente', forms.pres], ['imperfetto', forms.impf], ['passato remoto', forms.rem], ['futuro semplice', forms.fut]],
      compound: [['passato prossimo', c.pp], ['trapassato prossimo', c.tp], ['trapassato remoto', c.tr], ['futuro anteriore', c.fa]]
    },
    congiuntivo: {
      simple: [['presente', forms.cong], ['imperfetto', forms.congImpf]],
      compound: [['passato', c.cp], ['trapassato', c.ct]]
    },
    condizionale: { simple: ['presente', forms.cond], compound: ['passato', c.cdp] },
    imperativo: forms.imp,
    infinito: [forms.inf, `avere ${part}`],
    participio: [forms.partPres, part],
    gerundio: [forms.ger, `avendo ${part}`]
  };
};

export const VERB_TABLES: Record<string, VerbTable> = {
  essere: {
    title: 'Coniugazione propria: verbo ESSERE',
    indicativo: {
      simple: [['presente', ESSERE_PRES], ['imperfetto', ESSERE_IMPF], ['passato remoto', ESSERE_REM], ['futuro semplice', ESSERE_FUT]],
      compound: [
        ['passato prossimo', withPart(ESSERE_PRES, 'stato', 'stati')],
        ['trapassato prossimo', withPart(ESSERE_IMPF, 'stato', 'stati')],
        ['trapassato remoto', withPart(ESSERE_REM, 'stato', 'stati')],
        ['futuro anteriore', withPart(ESSERE_FUT, 'stato', 'stati')]
      ]
    },
    congiuntivo: {
      simple: [['presente', ESSERE_CONG], ['imperfetto', ESSERE_CONG_IMPF]],
      compound: [['passato', withPart(ESSERE_CONG, 'stato', 'stati')], ['trapassato', withPart(ESSERE_CONG_IMPF, 'stato', 'stati')]]
    },
    condizionale: { simple: ['presente', ESSERE_COND], compound: ['passato', withPart(ESSERE_COND, 'stato', 'stati')] },
    imperativo: ['sii (tu)', 'siate (voi)'],
    infinito: ['essere', 'essere stato'],
    participio: ['—', 'stato'],
    gerundio: ['essendo', 'essendo stato']
  },
  avere: {
    title: 'Coniugazione propria: verbo AVERE',
    indicativo: {
      simple: [['presente', AVERE_PRES], ['imperfetto', AVERE_IMPF], ['passato remoto', AVERE_REM], ['futuro semplice', AVERE_FUT]],
      compound: [['passato prossimo', avereTenses('avuto').pp], ['trapassato prossimo', avereTenses('avuto').tp], ['trapassato remoto', avereTenses('avuto').tr], ['futuro anteriore', avereTenses('avuto').fa]]
    },
    congiuntivo: {
      simple: [['presente', AVERE_CONG], ['imperfetto', AVERE_CONG_IMPF]],
      compound: [['passato', avereTenses('avuto').cp], ['trapassato', avereTenses('avuto').ct]]
    },
    condizionale: { simple: ['presente', AVERE_COND], compound: ['passato', avereTenses('avuto').cdp] },
    imperativo: ['abbi (tu)', 'abbiate (voi)'],
    infinito: ['avere', 'avere avuto'],
    participio: ['avente', 'avuto'],
    gerundio: ['avendo', 'avendo avuto']
  },
  amare: regular('Prima coniugazione: am-ARE', 'amato', {
    pres: six('amo', 'ami', 'ama', 'amiamo', 'amate', 'amano'),
    impf: six('amavo', 'amavi', 'amava', 'amavamo', 'amavate', 'amavano'),
    rem: six('amai', 'amasti', 'amò', 'amammo', 'amaste', 'amarono'),
    fut: six('amerò', 'amerai', 'amerà', 'ameremo', 'amerete', 'ameranno'),
    cong: six('ami', 'ami', 'ami', 'amiamo', 'amiate', 'amino'),
    congImpf: six('amassi', 'amassi', 'amasse', 'amassimo', 'amaste', 'amassero'),
    cond: six('amerei', 'ameresti', 'amerebbe', 'ameremmo', 'amereste', 'amerebbero'),
    imp: ['ama (tu)', 'amate (voi)'], inf: 'amare', partPres: 'amante', ger: 'amando'
  }),
  credere: regular('Seconda coniugazione: cred-ERE', 'creduto', {
    pres: six('credo', 'credi', 'crede', 'crediamo', 'credete', 'credono'),
    impf: six('credevo', 'credevi', 'credeva', 'credevamo', 'credevate', 'credevano'),
    rem: six('credetti', 'credesti', 'credette', 'credemmo', 'credeste', 'credettero'),
    fut: six('crederò', 'crederai', 'crederà', 'crederemo', 'crederete', 'crederanno'),
    cong: six('creda', 'creda', 'creda', 'crediamo', 'crediate', 'credano'),
    congImpf: six('credessi', 'credessi', 'credesse', 'credessimo', 'credeste', 'credessero'),
    cond: six('crederei', 'crederesti', 'crederebbe', 'crederemmo', 'credereste', 'crederebbero'),
    imp: ['credi (tu)', 'credete (voi)'], inf: 'credere', partPres: 'credente', ger: 'credendo'
  }),
  dormire: regular('Terza coniugazione: dorm-IRE', 'dormito', {
    pres: six('dormo', 'dormi', 'dorme', 'dormiamo', 'dormite', 'dormono'),
    impf: six('dormivo', 'dormivi', 'dormiva', 'dormivamo', 'dormivate', 'dormivano'),
    rem: six('dormii', 'dormisti', 'dormì', 'dormimmo', 'dormiste', 'dormirono'),
    fut: six('dormirò', 'dormirai', 'dormirà', 'dormiremo', 'dormirete', 'dormiranno'),
    cong: six('dorma', 'dorma', 'dorma', 'dormiamo', 'dormiate', 'dormano'),
    congImpf: six('dormissi', 'dormissi', 'dormisse', 'dormissimo', 'dormiste', 'dormissero'),
    cond: six('dormirei', 'dormiresti', 'dormirebbe', 'dormiremmo', 'dormireste', 'dormirebbero'),
    imp: ['dormi (tu)', 'dormite (voi)'], inf: 'dormire', partPres: 'dormente / dormiente', ger: 'dormendo'
  }),
  passiva: {
    title: 'Coniugazione passiva: ESSERE AMATO',
    indicativo: {
      simple: [
        ['presente', withPart(ESSERE_PRES, 'amato', 'amati')],
        ['imperfetto', withPart(ESSERE_IMPF, 'amato', 'amati')],
        ['passato remoto', withPart(ESSERE_REM, 'amato', 'amati')],
        ['futuro semplice', withPart(ESSERE_FUT, 'amato', 'amati')]
      ],
      compound: [
        ['passato prossimo', withPart(ESSERE_PRES, 'stato amato', 'stati amati')],
        ['trapassato prossimo', withPart(ESSERE_IMPF, 'stato amato', 'stati amati')],
        ['trapassato remoto', withPart(ESSERE_REM, 'stato amato', 'stati amati')],
        ['futuro anteriore', withPart(ESSERE_FUT, 'stato amato', 'stati amati')]
      ]
    },
    congiuntivo: {
      simple: [['presente', withPart(ESSERE_CONG, 'amato', 'amati')], ['imperfetto', withPart(ESSERE_CONG_IMPF, 'amato', 'amati')]],
      compound: [['passato', withPart(ESSERE_CONG, 'stato amato', 'stati amati')], ['trapassato', withPart(ESSERE_CONG_IMPF, 'stato amato', 'stati amati')]]
    },
    condizionale: { simple: ['presente', withPart(ESSERE_COND, 'amato', 'amati')], compound: ['passato', withPart(ESSERE_COND, 'stato amato', 'stati amati')] },
    imperativo: ['sii amato (tu)', 'siate amati (voi)'],
    infinito: ['essere amato', 'essere stato amato'],
    participio: ['—', 'amato'],
    gerundio: ['essendo amato', 'essendo stato amato']
  },
  lavarsi: (() => {
    const refl = six('mi', 'ti', 'si', 'ci', 'vi', 'si');
    const r = (forms: Six): Six => forms.map((f, i) => `${refl[i]} ${f}`) as Six;
    const rc = (aux: Six): Six => aux.map((a, i) => `${refl[i]} ${a} ${i < 3 ? 'lavato' : 'lavati'}`) as Six;
    return {
      title: 'Coniugazione riflessiva: LAVARSI',
      indicativo: {
        simple: [
          ['presente', r(six('lavo', 'lavi', 'lava', 'laviamo', 'lavate', 'lavano'))],
          ['imperfetto', r(six('lavavo', 'lavavi', 'lavava', 'lavavamo', 'lavavate', 'lavavano'))],
          ['passato remoto', r(six('lavai', 'lavasti', 'lavò', 'lavammo', 'lavaste', 'lavarono'))],
          ['futuro semplice', r(six('laverò', 'laverai', 'laverà', 'laveremo', 'laverete', 'laveranno'))]
        ],
        compound: [
          ['passato prossimo', rc(ESSERE_PRES)],
          ['trapassato prossimo', rc(ESSERE_IMPF)],
          ['trapassato remoto', rc(ESSERE_REM)],
          ['futuro anteriore', rc(ESSERE_FUT)]
        ]
      },
      congiuntivo: {
        simple: [
          ['presente', r(six('lavi', 'lavi', 'lavi', 'laviamo', 'laviate', 'lavino'))],
          ['imperfetto', r(six('lavassi', 'lavassi', 'lavasse', 'lavassimo', 'lavaste', 'lavassero'))]
        ],
        compound: [['passato', rc(ESSERE_CONG)], ['trapassato', rc(ESSERE_CONG_IMPF)]]
      },
      condizionale: {
        simple: ['presente', r(six('laverei', 'laveresti', 'laverebbe', 'laveremmo', 'lavereste', 'laverebbero'))],
        compound: ['passato', rc(ESSERE_COND)]
      },
      imperativo: ['lavati (tu)', 'lavatevi (voi)'],
      infinito: ['lavarsi', 'essersi lavato'],
      participio: ['—', 'lavatosi'],
      gerundio: ['lavandosi', 'essendosi lavato']
    } as VerbTable;
  })()
};

/** Common irregular verbs: [infinitive, presente (io), passato remoto (io / egli), participio passato]. */
export const IRREGULAR_VERBS: Array<[string, string, string, string]> = [
  ['andare', 'vado', 'andai / andò', 'andato'],
  ['bere', 'bevo', 'bevvi / bevve', 'bevuto'],
  ['dare', 'do', 'diedi / diede', 'dato'],
  ['dire', 'dico', 'dissi / disse', 'detto'],
  ['fare', 'faccio', 'feci / fece', 'fatto'],
  ['potere', 'posso', 'potei / poté', 'potuto'],
  ['rimanere', 'rimango', 'rimasi / rimase', 'rimasto'],
  ['sapere', 'so', 'seppi / seppe', 'saputo'],
  ['stare', 'sto', 'stetti / stette', 'stato'],
  ['tenere', 'tengo', 'tenni / tenne', 'tenuto'],
  ['uscire', 'esco', 'uscii / uscì', 'uscito'],
  ['vedere', 'vedo', 'vidi / vide', 'visto (veduto)'],
  ['venire', 'vengo', 'venni / venne', 'venuto'],
  ['volere', 'voglio', 'volli / volle', 'voluto']
];
