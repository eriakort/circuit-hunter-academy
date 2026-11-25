// Support-language text for the app shell, mission map header and grade labels.
// Order of each value: [pt, es, fr, de]. Draft text pending native-speaker review.
import type { UiRow } from './uiTranslationsA';

export const UI_E: Record<string, UiRow> = {
  'Skip to main content': ['Ir para o conteúdo principal', 'Saltar al contenido principal', 'Aller au contenu principal', 'Zum Hauptinhalt springen'],
  'Section: ': ['Seção: ', 'Sección: ', 'Section : ', 'Bereich: '],
  'GRADE 5 · CURRENT SUBJECT': ['5º ANO · DISCIPLINA ATUAL', '5.º CURSO · ASIGNATURA ACTUAL', 'CM2 · MATIÈRE ACTUELLE', 'KLASSE 5 · AKTUELLES FACH'],
  'GRADE 9 · CURRENT SUBJECT': ['9º ANO · DISCIPLINA ATUAL', '9.º CURSO · ASIGNATURA ACTUAL', '3E · MATIÈRE ACTUELLE', 'KLASSE 9 · AKTUELLES FACH'],
  'GRADE 10 · CURRENT SUBJECT': ['10º ANO · DISCIPLINA ATUAL', '10.º CURSO · ASIGNATURA ACTUAL', '2DE · MATIÈRE ACTUELLE', 'KLASSE 10 · AKTUELLES FACH'],
  'GRADE 11 · CURRENT SUBJECT': ['11º ANO · DISCIPLINA ATUAL', '11.º CURSO · ASIGNATURA ACTUAL', '1RE · MATIÈRE ACTUELLE', 'KLASSE 11 · AKTUELLES FACH'],
  '{done} of {total} missions cleared. The units are the tabs below; each arc is one chapter, and every arc\'s first mission is open, so you can start from the chapter you\'re studying in class.': [
    '{done} de {total} missões concluídas. As unidades são as abas abaixo; cada arco é um capítulo, e a primeira missão de cada arco já está aberta, então você pode começar pelo capítulo que está estudando na aula.',
    '{done} de {total} misiones superadas. Las unidades son las pestañas de abajo; cada arco es un capítulo, y la primera misión de cada arco ya está abierta, así que puedes empezar por el capítulo que estudias en clase.',
    '{done} missions réussies sur {total}. Les unités sont les onglets ci-dessous ; chaque arc est un chapitre, et la première mission de chaque arc est déjà ouverte : vous pouvez commencer par le chapitre étudié en classe.',
    '{done} von {total} Missionen geschafft. Die Einheiten sind die Reiter unten; jeder Bogen ist ein Kapitel, und die erste Mission jedes Bogens ist schon offen, sodass du mit dem Kapitel beginnen kannst, das ihr im Unterricht behandelt.',
  ],
  'Every mission integrates dialogue simulation, Web Speech pronunciation scoring, and oral challenges.': ['Cada missão integra simulação de diálogos, avaliação de pronúncia com Web Speech e desafios orais.', 'Cada misión integra simulación de diálogos, evaluación de pronunciación con Web Speech y retos orales.', 'Chaque mission intègre des dialogues simulés, une évaluation de la prononciation avec Web Speech et des défis oraux.', 'Jede Mission enthält Dialogsimulationen, Aussprachebewertung mit Web Speech und mündliche Aufgaben.'],
  'None yet. Clear a mission to learn your first technique.': ['Nenhuma ainda. Conclua uma missão para aprender sua primeira técnica.', 'Ninguna todavía. Supera una misión para aprender tu primera técnica.', 'Aucune pour l’instant. Réussissez une mission pour apprendre votre première technique.', 'Noch keine. Schließe eine Mission ab, um deine erste Technik zu lernen.'],
};

Object.assign(UI_E, {
  'Main content': ['Conteúdo principal', 'Contenido principal', 'Contenu principal', 'Hauptinhalt'],
  'Grade selection': ['Escolha da série', 'Elección del curso', 'Choix de la classe', 'Klassenstufenauswahl'],
  'Subject selection': ['Escolha da disciplina', 'Elección de la asignatura', 'Choix de la matière', 'Fachauswahl'],
  'Mission': ['Missão', 'Misión', 'Mission', 'Mission'],
  'Challenge': ['Desafio', 'Desafío', 'Défi', 'Herausforderung'],
  'Challenge results': ['Resultados do desafio', 'Resultados del desafío', 'Résultats du défi', 'Ergebnisse der Herausforderung'],
  'Mission complete': ['Missão concluída', 'Misión completada', 'Mission terminée', 'Mission abgeschlossen'],
  'Knowledge test': ['Teste de conhecimento', 'Prueba de conocimiento', 'Test de connaissances', 'Wissenstest'],
  'Physics checkpoint': ['Ponto de controle de Física', 'Punto de control de Física', 'Point de contrôle de physique', 'Physik-Checkpoint'],
  'Computer Science checkpoint': ['Ponto de controle de Informática', 'Punto de control de Informática', 'Point de contrôle d’informatique', 'Informatik-Checkpoint'],
  'Applied Computer Science trial': ['Prova de Informática aplicada', 'Prueba de Informática aplicada', 'Épreuve d’informatique appliquée', 'Prüfung Angewandte Informatik'],
  'Italian oral trial': ['Prova oral de italiano', 'Prueba oral de italiano', 'Épreuve orale d’italien', 'Mündliche Italienischprüfung'],
  'Italian speaking lab': ['Laboratório de fala em italiano', 'Laboratorio de conversación en italiano', 'Labo d’expression orale en italien', 'Italienisches Sprechlabor'],
  'Italian grammar training': ['Treino de gramática italiana', 'Entrenamiento de gramática italiana', 'Entraînement de grammaire italienne', 'Italienisches Grammatiktraining'],
  'Italian listening lab': ['Laboratório de escuta em italiano', 'Laboratorio de escucha en italiano', 'Labo d’écoute en italien', 'Italienisches Hörlabor'],
});
