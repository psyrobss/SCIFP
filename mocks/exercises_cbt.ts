
import { TherapeuticExercise } from '../types';

export const CBT_EXERCISES: TherapeuticExercise[] = [
  {
    id: 'registro-pensamentos',
    title: 'Registro de Pensamentos Disfuncionais (RPD)',
    description: 'Uma técnica fundamental da TCC para identificar e reestruturar pensamentos automáticos negativos.',
    category: 'Terapia Cognitivo-Comportamental',
    icon: '📝',
    duration: '15-20 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'O que é o RPD?',
        content: 'O Registro de Pensamentos Disfuncionais (RPD) é uma ferramenta para ajudar você a identificar o que passa pela sua cabeça em momentos de emoção intensa. Nossos pensamentos influenciam como nos sentimos e agimos.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'Situação',
        content: 'Descreva a situação que gerou desconforto. Onde você estava? O que estava fazendo? Com quem?',
        placeholder: 'Ex: Estava no trabalho, meu chefe passou e não me cumprimentou.'
      },
      {
        id: 3,
        type: 'writing',
        title: 'Emoção',
        content: 'O que você sentiu? Tente nomear a emoção (tristeza, raiva, ansiedade) e dar uma nota de 0 a 100 para a intensidade.',
        placeholder: 'Ex: Ansiedade (80%), Tristeza (50%).'
      },
      {
        id: 4,
        type: 'writing',
        title: 'Pensamento Automático',
        content: 'O que passou pela sua cabeça naquele exato momento? Qual foi a interpretação imediata?',
        placeholder: 'Ex: "Ele está bravo comigo", "Vou ser demitido", "Fiz algo errado".'
      },
      {
        id: 5,
        type: 'instruction',
        title: 'Análise de Evidências',
        content: 'Agora, pare e reflita: Existem provas reais de que esse pensamento é 100% verdadeiro? Existem outras explicações possíveis (ex: ele estava distraído, com pressa)?'
      },
      {
        id: 6,
        type: 'writing',
        title: 'Resposta Racional',
        content: 'Escreva uma forma alternativa e mais equilibrada de ver a situação, baseada nos fatos, não apenas no medo.',
        placeholder: 'Ex: "Talvez ele só estivesse preocupado com outra coisa e não me viu. Não tenho evidências de que fiz algo errado."'
      }
    ]
  }
];
