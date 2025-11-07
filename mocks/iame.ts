

import { InventoryForm } from '../types';

export const IAME_INVENTORY: InventoryForm = {
  id: 'iame',
  acronym: 'IAME',
  name: 'Inventário de Autoconsciência e Metacognição Emocional (IAME)',
  objective: 'Avaliar o grau em que o indivíduo reconhece, compreende e monitora seus próprios estados emocionais e mentais. O instrumento busca identificar níveis de metacognição emocional, consciência afetiva e capacidade de reflexão sobre si mesmo, fatores centrais para o autoconhecimento e a regulação emocional eficaz.',
  instructions: 'A seguir, há uma lista de afirmações sobre como você costuma perceber, entender e lidar com suas emoções e pensamentos. Leia cada frase com atenção e marque a opção que melhor descreve como isso costuma acontecer na sua vida.',
  responseScale: [
    { value: 0, label: 'Nunca é verdade para mim' },
    { value: 1, label: 'Raramente é verdade para mim' },
    { value: 2, label: 'Às vezes é verdade para mim' },
    { value: 3, label: 'Frequentemente é verdade para mim' },
    { value: 4, label: 'Quase sempre é verdade para mim' },
  ],
  domains: [
    {
      id: 'emotional_awareness',
      name: 'Consciência Emocional',
      icon: '🪞',
      description: 'Capacidade de perceber, identificar e nomear os próprios estados emocionais com clareza.',
      interpretationLabels: {
        level_1: 'Baixa capacidade de reconhecer as próprias emoções.',
        level_2: 'Consciência emocional superficial ou intermitente.',
        level_3: 'Boa capacidade de nomear e diferenciar sentimentos.',
        level_4: 'Elevada consciência e clareza sobre o mundo emocional interno.',
      },
      questions: [
        { id: 5001, text: 'Eu consigo perceber quando meu humor começa a mudar.' },
        { id: 5002, text: 'Tenho facilidade em dar nome ao que estou sentindo.' },
        { id: 5003, text: 'Às vezes demoro para perceber que estou irritado(a).', isReversed: true },
        { id: 5004, text: 'Consigo notar pequenas variações no meu estado emocional ao longo do dia.' },
        { id: 5005, text: 'Frequentemente confundo o que sinto com o que penso.', isReversed: true },
        { id: 5006, text: 'Quando estou triste, geralmente percebo o motivo com clareza.' },
        { id: 5007, text: 'Tenho dificuldade em reconhecer emoções sutis, como frustração ou tédio.', isReversed: true },
        { id: 5008, text: 'Reconheço quando uma emoção está influenciando meu comportamento.' },
      ],
    },
    {
      id: 'metacognitive_monitoring',
      name: 'Monitoramento Metacognitivo',
      icon: '🧩',
      description: 'Habilidade de observar os próprios pensamentos e emoções, reconhecendo seus padrões e distorções.',
      interpretationLabels: {
        level_1: 'Baixa capacidade de observar os próprios pensamentos.',
        level_2: 'Monitoramento ocasional, com tendência à fusão cognitiva.',
        level_3: 'Boa capacidade de refletir sobre os próprios processos mentais.',
        level_4: 'Elevada habilidade de observar a mente sem julgamento.',
      },
      questions: [
        { id: 5101, text: 'Costumo refletir sobre o que se passa na minha mente em momentos difíceis.' },
        { id: 5102, text: 'Tenho consciência de quando estou distorcendo uma situação com pensamentos negativos.' },
        { id: 5103, text: 'Às vezes ajo sem perceber o que me motivou internamente.', isReversed: true },
        { id: 5104, text: 'Percebo quando minhas emoções distorcem minha interpretação dos fatos.' },
        { id: 5105, text: 'Reflito sobre as consequências emocionais das minhas atitudes.' },
        { id: 5106, text: 'Sou capaz de observar meus pensamentos sem julgá-los.' },
        { id: 5107, text: 'Quando fico ansioso(a), noto o que está alimentando minha preocupação.' },
        { id: 5108, text: 'Tenho dificuldade em identificar quando estou reagindo automaticamente.', isReversed: true },
      ],
    },
    {
      id: 'emotional_regulation_integration',
      name: 'Regulação e Integração Emocional',
      icon: '💬',
      description: 'Capacidade de usar a consciência emocional para regular reações e integrar aprendizados para o crescimento pessoal.',
       interpretationLabels: {
        level_1: 'Baixa capacidade de regular as próprias emoções.',
        level_2: 'Regulação reativa, com dificuldade de usar a emoção de forma construtiva.',
        level_3: 'Boa capacidade de equilibrar razão e emoção nas decisões.',
        level_4: 'Elevada habilidade de transformar emoções em crescimento e autoconhecimento.',
      },
      questions: [
        { id: 5201, text: 'Consigo aprender algo sobre mim após momentos emocionais intensos.' },
        { id: 5202, text: 'Busco entender o que uma emoção está tentando me mostrar.' },
        { id: 5203, text: 'Tenho facilidade em transformar emoções difíceis em crescimento pessoal.' },
        { id: 5204, text: 'Às vezes, minhas emoções me dominam completamente.', isReversed: true },
        { id: 5205, text: 'Reflito sobre como minhas emoções influenciam as pessoas ao meu redor.' },
        { id: 5206, text: 'Consigo equilibrar razão e emoção antes de tomar decisões importantes.' },
        { id: 5207, text: 'Costumo aceitar minhas emoções sem lutar contra elas.' },
        { id: 5208, text: 'Tenho dificuldade em integrar emoções contraditórias, como amor e raiva.', isReversed: true },
      ],
    },
    {
      id: 'insight_internal_reflection',
      name: 'Insight e Reflexão Interna',
      icon: '🔍',
      description: 'Interesse e curiosidade em compreender as origens e os padrões dos próprios sentimentos e comportamentos.',
      interpretationLabels: {
        level_1: 'Postura evitativa em relação à autorreflexão.',
        level_2: 'Reflexão superficial, com evitação de temas mais profundos.',
        level_3: 'Bom nível de curiosidade e interesse pelo autoconhecimento.',
        level_4: 'Elevada capacidade de insight, buscando compreender as raízes de seus padrões.',
      },
      questions: [
        { id: 5301, text: 'Tenho curiosidade em entender por que sinto determinadas emoções.' },
        { id: 5302, text: 'Costumo perceber padrões emocionais que se repetem na minha vida.' },
        { id: 5303, text: 'Evito pensar em assuntos emocionais que me incomodam.', isReversed: true },
        { id: 5304, text: 'Refletir sobre mim mesmo(a) me ajuda a mudar.' },
        { id: 5305, text: 'Frequentemente busco compreender as origens dos meus sentimentos.' },
        { id: 5306, text: 'Tenho interesse em entender a relação entre meu passado e minhas reações atuais.' },
        { id: 5307, text: 'Às vezes evito olhar para dentro de mim por medo do que posso encontrar.', isReversed: true },
        { id: 5308, text: 'Consigo reconhecer quando estou em negação sobre algo emocionalmente difícil.' },
      ],
    },
    {
      id: 'clarity_internal_coherence',
      name: 'Clareza e Coerência Interna',
      icon: '⚖️',
      description: 'Sensação de alinhamento e autenticidade entre pensamentos, sentimentos e ações.',
      interpretationLabels: {
        level_1: 'Sensação de fragmentação e conflito interno.',
        level_2: 'Coerência parcial, com conflitos entre o que pensa, sente e faz.',
        level_3: 'Boa clareza sobre os próprios valores e sentimentos.',
        level_4: 'Elevado senso de coerência, integração e autenticidade pessoal.',
      },
      questions: [
        { id: 5401, text: 'Meus sentimentos e pensamentos geralmente caminham na mesma direção.' },
        { id: 5402, text: 'Tenho clareza sobre o que realmente quero quando estou confuso(a).' },
        { id: 5403, text: 'Às vezes minhas ações não refletem o que realmente sinto.', isReversed: true },
        { id: 5404, text: 'Sinto que entendo a mim mesmo(a) com profundidade.' },
        { id: 5405, text: 'Tenho uma visão coerente sobre quem sou emocionalmente.' },
        { id: 5406, text: 'Frequentemente sinto que estou dividido(a) entre o que penso e o que sinto.', isReversed: true },
        { id: 5407, text: 'Sinto-me autêntico(a) na maior parte das minhas decisões emocionais.' },
        { id: 5408, text: 'Percebo quando estou tentando negar uma parte de mim.' },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'O escore total (0–160) representa o nível geral de autoconsciência e metacognição emocional.',
    subScoresDescription: 'Subescores por domínio podem ser calculados para análises específicas (p.ex., insight vs. regulação emocional).',
    ranges: [
        { min: 0, max: 40, label: 'Baixa autoconsciência', description: 'Baixa autoconsciência emocional e rigidez metacognitiva.' },
        { min: 41, max: 80, label: 'Consciência limitada', description: 'Consciência emocional limitada; dificuldade em reconhecer e refletir sobre emoções.' },
        { min: 81, max: 120, label: 'Boa capacidade', description: 'Boa capacidade de insight e regulação emocional, com possíveis áreas de conflito interno.' },
        { min: 121, max: 160, label: 'Elevada metacognição', description: 'Elevada metacognição emocional; bom equilíbrio entre reflexão, emoção e ação.' }
    ]
  }
};
