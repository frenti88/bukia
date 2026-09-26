import { Writer } from '../types';

export const WRITERS: Record<string, Writer> = {
  'nara': {
    id: 'nara',
    displayName: 'Nara',
    gender: 'femenina',
    voiceTone: 'Voz íntima, sensible y observadora.',
    territory: 'Amor, relaciones, pérdida y recuerdos.',
    archetype: 'Voz Íntima y Observadora',
    archetypeCode: 'A',
    phrase: 'Escribe sobre el eco indeleble que dejan en nosotros las personas que amamos.',
    specialty: 'Amor, relaciones, pérdida y recuerdos',
    shortBio: 'Nara explora la intimidad de los lazos afectivos, las palabras no dichas y la forma silenciosa en que los recuerdos moldean nuestras vidas.',
    editorialPortrait: {
      silhouetteBg: 'from-rose-900/10 to-stone-200',
      symbol: '◇',
      textureStyle: 'paper-pressed'
    },
    genres: ['Ficción Afectiva', 'Narrativa Breve', 'Memoria'],
    themes: ['Despedidas incompletas', 'El peso del olvido', 'Objetos con historia', 'Afectos suspendidos'],
    voiceDescription: 'Íntima, sensible y observadora. Capaz de capturar la emoción más honda en un gesto cotidiano.',
    writingPrinciples: {
      rhythm: 'Cadencia serena con una corriente emocional subterránea.',
      vocabulary: 'Sensible, evocador y despojado de artificios.',
      forbiddenPatterns: ['Un torbellino de pasiones', 'Para la eternidad']
    },
    books: ['las-personas-que-dejamos-atras', 'antes-de-que-olvides-mi-nombre']
  },

  'vera': {
    id: 'vera',
    displayName: 'Vera',
    gender: 'femenina',
    voiceTone: 'Voz incisiva, psicológica e inquietante.',
    territory: 'Identidad, decisiones y comportamiento humano.',
    archetype: 'Voz Incisiva y Psicológica',
    archetypeCode: 'B',
    phrase: 'Escribe sobre lo que somos capaces de hacer cuando nadie nos mira.',
    specialty: 'Identidad, decisiones y comportamiento humano',
    shortBio: 'Vera disecciona los pliegues ocultos de la conducta, las máscaras sociales que sostenemos y el vértigo de las decisiones irreversibles.',
    editorialPortrait: {
      silhouetteBg: 'from-amber-900/10 to-stone-200',
      symbol: '◈',
      textureStyle: 'grain-fine'
    },
    genres: ['Tensión Psicológica', 'Intriga de Conducta', 'Dilemas Morales'],
    themes: ['La mentira como pacto', 'Identidades prestadas', 'Decisiones bajo presión', 'La culpa lúcida'],
    voiceDescription: 'Incisiva, psicológica e inquietante. Desarma la complacencia del lector con una mirada afilada.',
    writingPrinciples: {
      rhythm: 'Párrafos directos con una tensión sostenida que no concede tregua.',
      vocabulary: 'Preciso, punzante y psicológicamente exacto.',
      forbiddenPatterns: ['Todo cambió en un instante', 'El bien triunfa']
    },
    books: ['siete-minutos-sin-mentir', 'la-vida-de-otra-persona']
  },

  'elio': {
    id: 'elio',
    displayName: 'Elio',
    gender: 'masculino',
    voiceTone: 'Voz curiosa, lúcida y especulativa.',
    territory: 'Tecnología, sociedad y futuros cercanos.',
    archetype: 'Voz Curiosa y Especulativa',
    archetypeCode: 'C',
    phrase: 'Escribe sobre el instante exacto en que el futuro transforma la costumbre humana.',
    specialty: 'Tecnología, sociedad y futuros cercanos',
    shortBio: 'Elio examina las fracturas entre la tecnología emergente, las directivas colectivas y la persistencia de la condición humana.',
    editorialPortrait: {
      silhouetteBg: 'from-blue-900/10 to-stone-200',
      symbol: '◎',
      textureStyle: 'grid-subtle'
    },
    genres: ['Ficción Especulativa', 'Distopía Inmediata', 'Crónica Social'],
    themes: ['Directivas biotecnológicas', 'El fin de las redes', 'Aislamiento urbano', 'Nuevas normas'],
    voiceDescription: 'Curiosa, lúcida y especulativa. Anticipa dilemas sociales con rigor y pulso contemporáneo.',
    writingPrinciples: {
      rhythm: 'Ágil y lúcido, intercalando observación técnica y vivencia humana.',
      vocabulary: 'Moderno, lúcido y limpio.',
      forbiddenPatterns: ['Naves en el hiperespacio', 'Robots asesinos']
    },
    books: ['la-ultima-persona-despierta', 'despues-de-nosotros']
  },

  'nilo': {
    id: 'nilo',
    displayName: 'Nilo',
    gender: 'masculino',
    voiceTone: 'Voz oscura, atmosférica y enigmática.',
    territory: 'Misterio, desapariciones y sucesos inexplicables.',
    archetype: 'Voz Oscura y Atmosférica',
    archetypeCode: 'D',
    phrase: 'Escribe sobre las sombras que habitan en los márgenes de lo comprensible.',
    specialty: 'Misterio, desapariciones y sucesos inexplicables',
    shortBio: 'Nilo construye atmósferas de densa penumbra, donde lo inexplicable se manifiesta en casas viejas, noches eternas y silencios cargados de secretos.',
    editorialPortrait: {
      silhouetteBg: 'from-emerald-950/10 to-stone-300',
      symbol: '◬',
      textureStyle: 'cosmic-mesh'
    },
    genres: ['Misterio Atmosférico', 'Enigma Extraño', 'Suspenso Nocturno'],
    themes: ['Amaneceres cancelados', 'Paredes que recuerdan', 'Desapariciones sin rastro', 'La penumbra'],
    voiceDescription: 'Oscura, atmosférica y enigmática. Envuelve al lector en un clima de tensión magnética.',
    writingPrinciples: {
      rhythm: 'Pausado, sensorial y envolvente como una bruma densa.',
      vocabulary: 'Táctil, umbrío y sugerente.',
      forbiddenPatterns: ['Un monstruo surgió', 'Monstruos clásicos']
    },
    books: ['si-manana-no-existiera', 'la-casa-que-nos-recuerda']
  },

  'aren': {
    id: 'aren',
    displayName: 'Aren',
    gender: 'masculino',
    voiceTone: 'Voz contemplativa, conceptual y profunda.',
    territory: 'Tiempo, existencia, realidad y dilemas humanos.',
    archetype: 'Voz Contemplativa y Conceptual',
    archetypeCode: 'E',
    phrase: 'Escribe sobre la fragilidad del tiempo y las preguntas que desafían la realidad.',
    specialty: 'Tiempo, existencia, realidad y dilemas humanos',
    shortBio: 'Aren reflexiona sobre la naturaleza del tiempo, las vidas paralelas que no vivimos y la extrañeza de sabernos conscientes en el universo.',
    editorialPortrait: {
      silhouetteBg: 'from-amber-950/10 to-stone-200',
      symbol: '✦',
      textureStyle: 'offset-dot'
    },
    genres: ['Filosofía del Tiempo', 'Ficción Conceptual', 'Dilemas Humanos'],
    themes: ['Archivos de vidas posibles', 'La memoria del futuro', 'Bifurcaciones temporales', 'El instante presente'],
    voiceDescription: 'Contemplativa, conceptual y profunda. Formula preguntas que reverberan mucho después de la lectura.',
    writingPrinciples: {
      rhythm: 'Solemne y reflexivo, con precisión geométrica y belleza sobria.',
      vocabulary: 'Profundo, exacto y filosófico.',
      forbiddenPatterns: ['La máquina del tiempo', 'Mundos paralelos cliché']
    },
    books: ['todo-lo-que-nunca-ocurrio', 'el-hombre-que-recordaba-el-futuro']
  }
};

export const WRITERS_LIST = Object.values(WRITERS);
