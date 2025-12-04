
import { TherapeuticExercise } from '../types';

export const CBT_EMOTIONAL_SCHEMAS_EXERCISES: TherapeuticExercise[] = [
  {
    id: 'mitos-emocionais',
    title: 'Desmascarando Mitos Emocionais',
    description: 'Identificação e correção de crenças falsas sobre as emoções que aumentam o sofrimento (ex: "sentir é sinal de fraqueza").',
    category: 'Esquemas Emocionais',
    icon: '🤔',
    duration: '15 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'O que você pensa sobre o que sente?',
        content: 'Muitas vezes, o problema não é a tristeza, mas o que pensamos sobre ela ("eu não deveria estar triste"). Isso é o esquema emocional.'
      },
      {
        id: 2,
        type: 'checklist',
        title: 'Identificando seus Mitos',
        content: 'Marque quais dessas regras rígidas você aplica a si mesmo:',
        options: [
          'Eu deveria estar feliz o tempo todo.',
          'Se eu demonstrar fraqueza, as pessoas vão me rejeitar.',
          'Homens/Mulheres fortes não choram.',
          'Se eu começar a sentir essa dor, vou enlouquecer.',
          'Meus sentimentos não fazem sentido.',
          'Sou o único que se sente assim (todos estão bem, menos eu).',
          'Tenho que controlar minhas emoções imediatamente.'
        ]
      },
      {
        id: 3,
        type: 'writing',
        title: 'Desafiando o Mito',
        content: 'Escolha um mito que você marcou. Se um amigo querido sentisse isso, você diria isso a ele? Escreva uma resposta mais compassiva e realista.',
        placeholder: 'A verdade é que...'
      },
      {
        id: 4,
        type: 'text',
        title: 'Fato',
        content: 'Todas as emoções são universais. Ninguém é feliz o tempo todo. Sentir dor é parte de ser humano, não um defeito de fabricação.'
      }
    ]
  },
  {
    id: 'a-onda-emocional',
    title: 'A Onda Emocional (Impermanência)',
    description: 'Exercício de visualização para combater a crença de que a emoção será eterna ou insuportável.',
    category: 'Esquemas Emocionais',
    icon: '🌊',
    duration: '10 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'A Natureza da Emoção',
        content: 'Muitos têm medo de sentir porque acham que a emoção vai subir infinitamente até explodir. A neurociência mostra que toda emoção é como uma onda: ela sobe, atinge um pico e, se não a alimentarmos com pensamentos, ela desce sozinha.'
      },
      {
        id: 2,
        type: 'breathing_guide',
        title: 'Surfando a Onda',
        content: 'Imagine a emoção atual como uma onda no mar. Não tente parar a onda (isso afoga). Apenas boie ou surfe nela. Respire e observe.',
        breathingSettings: {
            inhale: 4,
            hold: 2,
            exhale: 6,
            holdAfter: 0
        }
      },
      {
        id: 3,
        type: 'writing',
        title: 'Monitoramento',
        content: 'Observe a emoção agora. Ela mudou? Aumentou? Diminuiu? Mudou de lugar no corpo? Apenas descreva, lembrando que "isso também passará".',
        placeholder: 'A onda está...'
      }
    ]
  },
  {
    id: 'validacao-sentir',
    title: 'Auto-Validação do Sentir',
    description: 'Prática para interromper o ciclo de auto-invalidação ("eu não deveria sentir isso") que gera culpa secundária.',
    category: 'Esquemas Emocionais',
    icon: '❤️',
    duration: '10 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'O Problema da Invalidação',
        content: 'Quando dizemos "que besteira estar triste por isso", criamos um segundo problema: a vergonha de estar triste. Validar é aceitar que o sentimento existe.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'Nomeando',
        content: 'O que você está sentindo? Dê um nome simples (tristeza, medo, raiva, inveja).',
        placeholder: 'Sinto...'
      },
      {
        id: 3,
        type: 'writing',
        title: 'O Contexto (Por que faz sentido?)',
        content: 'Complete a frase: "Faz sentido eu sentir isso porque..." (Liste os motivos: histórico, cansaço, o evento em si). Dê-se o direito de sentir.',
        placeholder: 'Faz sentido porque...'
      },
      {
        id: 4,
        type: 'instruction',
        title: 'A Frase de Validação',
        content: 'Repita para si mesmo: "É permitido sentir isso. Eu não preciso gostar da sensação, mas posso permitir que ela esteja aqui por enquanto."'
      }
    ]
  }
];
