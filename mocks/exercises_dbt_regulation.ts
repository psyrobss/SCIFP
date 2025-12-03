
import { TherapeuticExercise } from '../types';

export const DBT_REGULATION_EXERCISES: TherapeuticExercise[] = [
  {
    id: 'acao-oposta',
    title: 'Ação Oposta',
    description: 'Técnica para mudar uma emoção indesejada agindo de forma contrária ao impulso que ela gera. Use quando a emoção não se justifica pelos fatos ou não é efetiva.',
    category: 'Regulação Emocional (DBT)',
    icon: '🔄',
    duration: '20 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Como funciona?',
        content: 'Toda emoção gera um impulso de ação. Se você segue o impulso, a emoção aumenta. Se você faz o oposto (com corpo, palavras e pensamentos), a emoção diminui.'
      },
      {
        id: 2,
        type: 'instruction',
        title: 'RAIVA (Impulso: Atacar)',
        content: 'Ação Oposta:\n1. Afaste-se um pouco.\n2. Use um tom de voz baixo e suave.\n3. Tente ter empatia pela outra pessoa.\n4. Relaxe as mãos (abra os punhos).'
      },
      {
        id: 3,
        type: 'instruction',
        title: 'MEDO (Impulso: Fugir)',
        content: 'Ação Oposta:\n1. Aproxime-se do que você teme (se for seguro).\n2. Mantenha o contato visual.\n3. Estufe o peito, levante a cabeça (postura de confiança).\n4. Faça o que você está evitando.'
      },
      {
        id: 4,
        type: 'instruction',
        title: 'TRISTEZA (Impulso: Isolar-se)',
        content: 'Ação Oposta:\n1. Ative-se! Saia da cama.\n2. Faça coisas que te davam prazer antes (mesmo sem vontade).\n3. Mantenha a postura ereta.\n4. Fale com pessoas.'
      },
      {
        id: 5,
        type: 'writing',
        title: 'Seu Planejamento',
        content: 'Escolha uma emoção atual. Qual é o impulso? Qual será sua Ação Oposta específica?',
        placeholder: 'Sinto... Impulso de... Vou fazer o oposto:...'
      }
    ]
  },
  {
    id: 'higiene-do-sono',
    title: 'Checklist de Higiene do Sono',
    description: 'Guia prático para regular o ciclo circadiano e reduzir vulnerabilidade emocional.',
    category: 'Regulação Emocional (DBT)',
    icon: '😴',
    duration: '5 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'O Sono e a Emoção',
        content: 'A falta de sono é o gatilho número 1 para desregulação emocional. Proteger seu sono é proteger sua mente.'
      },
      {
        id: 2,
        type: 'checklist',
        title: 'Checklist Noturno',
        content: 'Comprometa-se com:',
        options: [
          'Sem cafeína após as 14h/16h',
          'Sem telas (celular/TV) 1h antes de deitar',
          'Quarto escuro e fresco',
          'Usar a cama APENAS para dormir e sexo',
          'Se não dormir em 20min, levantar e fazer algo chato',
          'Acordar no mesmo horário todo dia (mesmo se dormiu mal)'
        ]
      }
    ]
  },
  {
    id: 'analise-comportamental',
    title: 'Análise Comportamental (Cadeia)',
    description: 'Ferramenta detalhada para entender o que causou um comportamento problemático, traçando a sequência de eventos passo a passo.',
    category: 'Regulação Emocional (DBT)',
    icon: '🔗',
    duration: '20-30 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'O Filme em Câmera Lenta',
        content: 'Vamos analisar um evento como se fosse um filme, quadro a quadro, para entender onde as coisas saíram do trilho.'
      },
      {
        id: 2,
        type: 'writing',
        title: '1. O Comportamento Problema',
        content: 'Qual foi exatamente a ação que você quer analisar? Seja específico e não julgue. (Ex: "Comi 3 barras de chocolate", não "Fui um porco").',
        placeholder: 'Eu fiz...'
      },
      {
        id: 3,
        type: 'writing',
        title: '2. Fatores de Vulnerabilidade (O cenário)',
        content: 'O que te deixou sensível ANTES do problema começar? (Fome, cansaço, doença, estresse no trabalho, briga anterior, falta de remédio?).',
        placeholder: 'Eu estava vulnerável porque...'
      },
      {
        id: 4,
        type: 'writing',
        title: '3. O Gatilho (Ação Inicial)',
        content: 'Qual foi o evento exato que disparou a cadeia? (Uma fala de alguém, um pensamento, um evento externo).',
        placeholder: 'O gatilho foi...'
      },
      {
        id: 5,
        type: 'writing',
        title: '4. A Cadeia (Elo por Elo)',
        content: 'Descreva a sequência: Pensamento -> Emoção -> Sensação Física -> Ação Menor -> Ação Maior. Como uma coisa levou à outra?',
        placeholder: 'Pensei X, senti Y, meu corpo ficou tenso, então eu...'
      },
      {
        id: 6,
        type: 'writing',
        title: '5. Consequências',
        content: 'O que aconteceu depois? (Imediatamente e a longo prazo). Como você se sentiu? Como afetou os outros?',
        placeholder: 'A consequência foi...'
      },
      {
        id: 7,
        type: 'writing',
        title: '6. Soluções e Prevenção',
        content: 'Olhe para os elos da cadeia. Onde você poderia ter agido diferente? Que habilidade poderia ter quebrado a corrente no início?',
        placeholder: 'Na próxima vez, vou...'
      }
    ]
  }
];
