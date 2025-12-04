
import { TherapeuticExercise } from '../types';

export const CBT_INTRUSIVE_EXERCISES: TherapeuticExercise[] = [
  {
    id: 'visualizacao-balao',
    title: 'Visualização do Balão (Desfusão)',
    description: 'Técnica de imaginação para treinar a habilidade de observar pensamentos intrusivos sem se apegar a eles, permitindo que passem naturalmente.',
    category: 'Pensamentos Intrusivos',
    icon: '🎈',
    duration: '10 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Você não é o seu pensamento',
        content: 'Pensamentos intrusivos são como eventos mentais passageiros. O problema não é ter o pensamento, mas sim "agarrá-lo" e lutar contra ele. Vamos praticar soltá-lo.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'Identificação',
        content: 'Qual pensamento, imagem ou memória está "grudado" na sua mente agora? Descreva-o brevemente.',
        placeholder: 'O pensamento é...'
      },
      {
        id: 3,
        type: 'instruction',
        title: 'Visualização',
        content: 'Feche os olhos. Imagine que você está em um campo aberto. Imagine que esse pensamento que você escreveu está escrito em um balão de hélio colorido que você segura na mão.'
      },
      {
        id: 4,
        type: 'breathing_guide',
        title: 'Soltando o Cordão',
        content: 'Respire fundo. Na expiração, imagine seus dedos se abrindo e soltando o cordão. Não empurre o balão. Apenas deixe-o ir. Observe-o ficando menor no céu até sumir.',
        breathingSettings: {
            inhale: 4,
            hold: 2,
            exhale: 6,
            holdAfter: 2
        }
      },
      {
        id: 5,
        type: 'writing',
        title: 'Reflexão',
        content: 'Como foi a sensação de ver o pensamento se afastando sem que você precisasse brigar com ele?',
        placeholder: 'Eu senti...'
      }
    ]
  },
  {
    id: 'visitante-inesperado',
    title: 'Acolhendo o Visitante Inesperado',
    description: 'Exercício metafórico para mudar a relação com pensamentos indesejados, tratando-os como visitas incômodas, mas inofensivas, em vez de invasores perigosos.',
    category: 'Pensamentos Intrusivos',
    icon: '🚪',
    duration: '15 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'A Metáfora da Casa',
        content: 'Imagine que sua mente é sua casa. Pensamentos intrusivos são como aquele vizinho chato ou vendedor que toca a campainha na hora errada. Você não precisa deixá-lo morar com você, mas bater a porta na cara dele só faz ele bater mais forte.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'Quem é o Visitante?',
        content: 'Dê um nome ou personagem para o pensamento repetitivo que te incomoda. Como ele se parece? O que ele diz? (Ex: "O Sr. Catástrofe", "A Tia Crítica").',
        placeholder: 'O visitante é...'
      },
      {
        id: 3,
        type: 'writing',
        title: 'O Diálogo de Acolhimento',
        content: 'Em vez de gritar "Vá embora!", experimente dizer: "Ah, é você de novo. Eu estou ocupado agora, mas você pode ficar sentado aí no canto se quiser. Não vou te servir chá, mas não vou te expulsar". Escreva o que você diria.',
        placeholder: 'Eu diria...'
      },
      {
        id: 4,
        type: 'instruction',
        title: 'Ação Consciente',
        content: 'Agora, volte sua atenção para o que você estava fazendo antes. O visitante ainda pode estar na sala, falando sozinho. Deixe-o falar. Você tem coisas mais importantes para fazer.'
      }
    ]
  },
  {
    id: 'repeticao-consciente',
    title: 'Repetição Consciente (Técnica do Tédio)',
    description: 'Uso da repetição massiva para retirar a carga emocional e o significado assustador de um pensamento ou palavra específica (Saciação Semântica).',
    category: 'Pensamentos Intrusivos',
    icon: '🔁',
    duration: '10 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Tirando o Poder',
        content: 'Palavras assustadoras só são assustadoras porque as evitamos. Se repetirmos uma palavra muitas vezes, ela perde o significado e vira apenas som.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'O Pensamento Assustador',
        content: 'Escreva uma frase curta ou palavra que resume seu medo atual (Ex: "Vou falhar", "Estou doente", "Sozinho").',
        placeholder: 'A frase é...'
      },
      {
        id: 3,
        type: 'range',
        title: 'Medição Inicial',
        content: 'De 0 a 10, quanto essa frase te incomoda ou assusta agora?',
        rangeSettings: {
            min: 0,
            max: 10,
            labelMin: 'Nada',
            labelMax: 'Pânico'
        }
      },
      {
        id: 4,
        type: 'instruction',
        title: 'Repetição',
        content: 'Durante os próximos 2 minutos, repita essa frase em voz alta (ou mentalmente), rápido e sem parar. Como se fosse uma música quebrada. Não analise, apenas repita o som.'
      },
      {
        id: 5,
        type: 'range',
        title: 'Reavaliação',
        content: 'Depois da repetição exaustiva, como você sente a frase agora? Ela pareceu perder o sentido ou ficar "boba"?',
        rangeSettings: {
            min: 0,
            max: 10,
            labelMin: 'Sem sentido/Tédio',
            labelMax: 'Ainda assustadora'
        }
      }
    ]
  }
];
