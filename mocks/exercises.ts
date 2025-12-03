
import { TherapeuticExercise } from '../types';

export const ALL_EXERCISES: TherapeuticExercise[] = [
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
  },
  {
    id: 'respiracao-diafragmatica',
    title: 'Respiração Diafragmática',
    description: 'Técnica de relaxamento físico para reduzir a ansiedade aguda e ativar o sistema nervoso parassimpático.',
    category: 'Relaxamento e Mindfulness',
    icon: '🌬️',
    duration: '5-10 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Introdução',
        content: 'A respiração diafragmática ajuda a sinalizar para o seu corpo que você está seguro, reduzindo batimentos cardíacos e tensão muscular.'
      },
      {
        id: 2,
        type: 'instruction',
        title: 'Posição',
        content: 'Sente-se confortavelmente com as costas retas ou deite-se. Coloque uma mão sobre o peito e a outra sobre a barriga.'
      },
      {
        id: 3,
        type: 'instruction',
        title: 'O Movimento',
        content: 'Ao inspirar, tente fazer com que apenas a mão da barriga suba, mantendo a mão do peito parada. Imagine que está enchendo uma bexiga na barriga.'
      },
      {
        id: 4,
        type: 'instruction',
        title: 'Ritmo 4-2-6',
        content: 'Inspire pelo nariz contando até 4. Segure o ar por 2 segundos. Solte o ar pela boca lentamente contando até 6.'
      },
      {
        id: 5,
        type: 'writing',
        title: 'Registro Pós-Exercício',
        content: 'Como você se sente agora comparado ao início do exercício?',
        placeholder: 'Descreva sua sensação física e mental...'
      }
    ]
  }
];
