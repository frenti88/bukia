import { Writer } from '../types';

export const WRITERS: Record<string, Writer> = {
  'nara': {
    id: 'nara',
    displayName: 'Nara',
    gender: 'femenina',
    voiceTone: 'Voz íntima, sensible y observadora.',
    territory: 'Memoria, amor, ausencia y pérdida.',
    archetype: 'Voz Íntima y Observadora',
    archetypeCode: 'A',
    phrase: 'Escribe sobre la memoria, la pérdida y las personas que dejamos dentro de nosotros.',
    specialty: 'Memoria, pérdida, identidad y afecto',
    shortBio: 'Nara convierte premisas extrañas en historias profundamente personales, explorando la memoria, la ausencia y el peso del recuerdo.',
    editorialPortrait: {
      silhouetteBg: 'from-rose-900/10 to-stone-200',
      symbol: '◇',
      textureStyle: 'paper-pressed'
    },
    genres: ['Ficción Afectiva', 'Narrativa Breve', 'Memoria'],
    themes: ['El obituario como espejo', 'El peso del olvido', 'Afectos suspendidos', 'Identidad'],
    voiceDescription: 'Íntima, humana y melancólica sin sentimentalismo fácil. Observa lo que dejamos dentro de los demás.',
    writingPrinciples: {
      rhythm: 'Cadencia serena con una corriente emocional subterránea.',
      vocabulary: 'Sensible, evocador y despojado de artificios.',
      forbiddenPatterns: ['Un torbellino de pasiones', 'Para la eternidad']
    },
    publishedBookId: 'antes-de-que-olvides-mi-nombre',
    books: ['antes-de-que-olvides-mi-nombre', 'las-personas-que-dejamos-atras']
  },

  'aren': {
    id: 'aren',
    displayName: 'Aren',
    gender: 'masculino',
    voiceTone: 'Voz contemplativa, conceptual y profunda.',
    territory: 'Tiempo, destino, existencia y memoria.',
    archetype: 'Voz Contemplativa y Conceptual',
    archetypeCode: 'E',
    phrase: 'Escribe sobre el tiempo y las preguntas que aparecen cuando la realidad deja de obedecer sus propias reglas.',
    specialty: 'Tiempo, existencia, realidad y dilemas humanos',
    shortBio: 'Aren parte de ideas imposibles para terminar preguntando algo profundamente humano sobre la memoria y el futuro.',
    editorialPortrait: {
      silhouetteBg: 'from-amber-950/10 to-stone-200',
      symbol: '✦',
      textureStyle: 'offset-dot'
    },
    genres: ['Filosofía del Tiempo', 'Ficción Conceptual', 'Dilemas Humanos'],
    themes: ['La memoria del futuro', 'Límites temporales', 'El instante presente', 'Destino'],
    voiceDescription: 'Conceptual, contemplativo y existencial. Formula preguntas que reverberan mucho después de la lectura.',
    writingPrinciples: {
      rhythm: 'Solemne y reflexivo, con precisión geométrica y belleza sobria.',
      vocabulary: 'Profundo, exacto y filosófico.',
      forbiddenPatterns: ['La máquina del tiempo', 'Mundos paralelos cliché']
    },
    publishedBookId: 'el-hombre-que-recordaba-el-futuro',
    books: ['el-hombre-que-recordaba-el-futuro', 'todo-lo-que-nunca-ocurrio']
  },

  'elio': {
    id: 'elio',
    displayName: 'Elio',
    gender: 'masculino',
    voiceTone: 'Voz curiosa, lúcida y especulativa.',
    territory: 'Sociedad, tecnología cotidiana, extrañeza y obediencia.',
    archetype: 'Voz Curiosa y Especulativa',
    archetypeCode: 'C',
    phrase: 'Observa lo cotidiano hasta encontrar la anomalía escondida dentro.',
    specialty: 'Sociedad, tecnología, comportamiento colectivo y futuro cercano',
    shortBio: 'Elio toma elementos cotidianos y descubre dentro de ellos una anomalía colectiva fascinante.',
    editorialPortrait: {
      silhouetteBg: 'from-blue-900/10 to-stone-200',
      symbol: '◎',
      textureStyle: 'grid-subtle'
    },
    genres: ['Ficción Especulativa', 'Crónica Social', 'Distopía Inmediata'],
    themes: ['Directivas nocturnas', 'Obediencia colectiva', 'Aislamiento urbano', 'Anomalías'],
    voiceDescription: 'Lúcido, curioso y especulativo. Anticipa dilemas sociales con pulso contemporáneo.',
    writingPrinciples: {
      rhythm: 'Ágil y lúcido, intercalando observación técnica y vivencia humana.',
      vocabulary: 'Moderno, lúcido y limpio.',
      forbiddenPatterns: ['Naves en el hiperespacio', 'Robots asesinos']
    },
    publishedBookId: 'la-ultima-persona-despierta',
    books: ['la-ultima-persona-despierta', 'despues-de-nosotros']
  },

  'nilo': {
    id: 'nilo',
    displayName: 'Nilo',
    gender: 'masculino',
    voiceTone: 'Voz oscura, atmosférica y enigmática.',
    territory: 'Misterio, atmósfera, oscuridad y situaciones inexplicables.',
    archetype: 'Voz Oscura y Atmosférica',
    archetypeCode: 'D',
    phrase: 'Construye historias donde algo imposible ocurre y nadie puede explicar por qué.',
    specialty: 'Misterio, atmósfera, fenómenos inexplicables y oscuridad',
    shortBio: 'Nilo genera la sensación de que algo en el mundo dejó de funcionar y nadie sabe por qué.',
    editorialPortrait: {
      silhouetteBg: 'from-emerald-950/10 to-stone-300',
      symbol: '◬',
      textureStyle: 'cosmic-mesh'
    },
    genres: ['Misterio Atmosférico', 'Enigma Extraño', 'Suspenso Nocturno'],
    themes: ['Amaneceres cancelados', 'Medianoche permanente', 'La penumbra', 'El tiempo suspendido'],
    voiceDescription: 'Atmosférico, enigmático, oscuro y contenido. Tensión magnética que envuelve sin estridencias.',
    writingPrinciples: {
      rhythm: 'Pausado, sensorial y envolvente como una bruma densa.',
      vocabulary: 'Táctil, umbrío y sugerente.',
      forbiddenPatterns: ['Un monstruo surgió', 'Monstruos clásicos']
    },
    publishedBookId: 'si-manana-no-existiera',
    books: ['si-manana-no-existiera', 'la-casa-que-nos-recuerda']
  },

  'vera': {
    id: 'vera',
    displayName: 'Vera',
    gender: 'femenina',
    voiceTone: 'Voz incisiva, psicológica e inquietante.',
    territory: 'Psicología, poder, decisiones y tensión social.',
    archetype: 'Voz Incisiva y Psicológica',
    archetypeCode: 'B',
    phrase: 'Coloca a las personas bajo presión y observa lo que queda cuando desaparecen las convenciones.',
    specialty: 'Comportamiento, poder, decisiones, verdad e identidad',
    shortBio: 'Vera coloca a sus personajes bajo extrema tensión social para observar lo que ocurre cuando caen las máscaras.',
    editorialPortrait: {
      silhouetteBg: 'from-amber-900/10 to-stone-200',
      symbol: '◈',
      textureStyle: 'grain-fine'
    },
    genres: ['Tensión Psicológica', 'Intriga de Conducta', 'Dilemas Morales'],
    themes: ['Siete minutos de verdad', 'Máscaras diplomáticas', 'Presión social', 'Decisiones irreversibles'],
    voiceDescription: 'Incisiva, psicológica, directa e inquietante. Desarma la cortesía con precisión quirúrgica.',
    writingPrinciples: {
      rhythm: 'Párrafos directos con una tensión sostenida que no concede tregua.',
      vocabulary: 'Preciso, punzante y psicológicamente exacto.',
      forbiddenPatterns: ['Todo cambió en un instante', 'El bien triunfa']
    },
    publishedBookId: 'siete-minutos-sin-mentir',
    books: ['siete-minutos-sin-mentir', 'la-vida-de-otra-persona']
  }
};

// Orden editorial establecido para la presentación de los 5 autores
export const WRITERS_LIST = [
  WRITERS['nara'],
  WRITERS['aren'],
  WRITERS['elio'],
  WRITERS['nilo'],
  WRITERS['vera']
];
