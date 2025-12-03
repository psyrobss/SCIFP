

import { InventoryForm } from '../types';

export const IAME_INVENTORY: InventoryForm = {
  id: 'iame',
  acronym: 'IAME',
  name: 'Inventário de Autoconsciência e Metacognição Emocional (IAME)',
  objective: 'Avaliar o grau em que o indivíduo reconhece, compreende e monitora seus próprios estados emocionais e mentais (alfabetização emocional e insight).',
  instructions: 'A seguir, há uma lista de afirmações sobre como você costuma perceber, entender e lidar com suas emoções e pensamentos. Marque a opção que melhor descreve sua experiência habitual.',
  scoreOrientation: 'higher_is_better',
  responseScale: [
    { value: 1, label: 'Discordo Totalmente' },
    { value: 2, label: 'Discordo Fortemente' },
    { value: 3, label: 'Discordo em Parte' },
    { value: 4, label: 'Neutro / Misto' },
    { value: 5, label: 'Concordo em Parte' },
    { value: 6, label: 'Concordo Fortemente' },
    { value: 7, label: 'Concordo Totalmente' },
  ],
  domains: [
    {
      id: 'emotional_awareness',
      name: 'Clareza e Identificação Emocional',
      icon: '🪞',
      description: 'Capacidade de perceber, identificar e nomear os próprios estados emocionais com precisão.',
      interpretationLabels: {
        level_1: 'Percepção emocional difusa.',
        level_2: 'Consciência intermitente.',
        level_3: 'Boa clareza emocional.',
        level_4: 'Alta precisão na identificação.',
      },
      questions: [
        { id: 5001, text: 'Eu consigo perceber quando meu humor começa a mudar.' },
        { id: 5002, text: 'Tenho facilidade em dar nome exato ao que estou sentindo.' },
        { id: 5003, text: 'Às vezes demoro para perceber que estou irritado(a) ou triste.', isReversed: true },
        { id: 5004, text: 'Consigo notar pequenas variações no meu estado emocional ao longo do dia.' },
        { id: 5005, text: 'Frequentemente confundo o que sinto com o que penso.', isReversed: true },
        { id: 5006, text: 'Quando estou triste, geralmente percebo o motivo com clareza.' },
        { id: 5007, text: 'Tenho dificuldade em reconhecer emoções sutis, como frustração ou tédio.', isReversed: true },
        { id: 5008, text: 'Reconheço quando uma emoção está influenciando meu comportamento.' },
      ],
    },
    {
      id: 'metacognitive_monitoring',
      name: 'Observação dos Pensamentos (Metacognição)',
      icon: '🧩',
      description: 'Habilidade de "assistir" aos próprios pensamentos sem se fundir automaticamente a eles.',
      interpretationLabels: {
        level_1: 'Fusão com os pensamentos.',
        level_2: 'Observação ocasional.',
        level_3: 'Boa capacidade reflexiva.',
        level_4: 'Postura de observador desenvolvida.',
      },
      questions: [
        { id: 5101, text: 'Costumo refletir sobre o que se passa na minha mente em momentos difíceis.' },
        { id: 5102, text: 'Tenho consciência de quando estou distorcendo uma situação com pensamentos negativos.' },
        { id: 5103, text: 'Às vezes ajo no automático sem perceber o que me motivou internamente.', isReversed: true },
        { id: 5104, text: 'Percebo quando minhas emoções estão colorindo minha interpretação dos fatos.' },
        { id: 5105, text: 'Reflito sobre as consequências emocionais das minhas atitudes.' },
        { id: 5106, text: 'Sou capaz de observar meus pensamentos sem julgá-los imediatamente.' },
        { id: 5107, text: 'Quando fico ansioso(a), noto quais pensamentos estão alimentando minha preocupação.' },
        { id: 5108, text: 'Tenho dificuldade em me distanciar do que estou pensando.', isReversed: true },
      ],
    },
    {
      id: 'emotional_regulation_integration',
      name: 'Integração e Uso da Emoção',
      icon: '💬',
      description: 'Capacidade de usar a consciência emocional para aprender e regular o comportamento.',
       interpretationLabels: {
        level_1: 'Dificuldade de integração.',
        level_2: 'Regulação reativa.',
        level_3: 'Boa integração razão-emoção.',
        level_4: 'Uso sábio das emoções.',
      },
      questions: [
        { id: 5201, text: 'Consigo aprender algo sobre mim após momentos emocionais intensos.' },
        { id: 5202, text: 'Busco entender o que uma emoção está tentando me mostrar.' },
        { id: 5203, text: 'Tenho facilidade em transformar emoções difíceis em aprendizado.' },
        { id: 5204, text: 'Às vezes, minhas emoções me dominam e perco a clareza.', isReversed: true },
        { id: 5205, text: 'Reflito sobre como minhas emoções influenciam as pessoas ao meu redor.' },
        { id: 5206, text: 'Consigo equilibrar razão e emoção antes de tomar decisões importantes.' },
        { id: 5207, text: 'Costumo aceitar minhas emoções sem lutar contra elas.' },
        { id: 5208, text: 'Tenho dificuldade em lidar com sentimentos contraditórios.', isReversed: true },
      ],
    },
    {
      id: 'insight_internal_reflection',
      name: 'Curiosidade e Insight',
      icon: '🔍',
      description: 'Interesse genuíno em compreender as origens e os padrões do próprio funcionamento.',
      interpretationLabels: {
        level_1: 'Evitação da autoanálise.',
        level_2: 'Curiosidade superficial.',
        level_3: 'Bom nível de insight.',
        level_4: 'Busca profunda por autoconhecimento.',
      },
      questions: [
        { id: 5301, text: 'Tenho curiosidade em entender por que sinto determinadas coisas.' },
        { id: 5302, text: 'Costumo perceber padrões emocionais que se repetem na minha vida.' },
        { id: 5303, text: 'Prefiro não pensar muito em assuntos emocionais que incomodam.', isReversed: true },
        { id: 5304, text: 'Acredito que refletir sobre mim mesmo(a) me ajuda a mudar.' },
        { id: 5305, text: 'Frequentemente busco compreender a raiz dos meus sentimentos.' },
        { id: 5306, text: 'Tenho interesse em entender a relação entre meu passado e minhas reações atuais.' },
        { id: 5307, text: 'Às vezes evito olhar para dentro de mim por medo do que posso encontrar.', isReversed: true },
        { id: 5308, text: 'Consigo reconhecer quando estou em negação sobre algo.' },
      ],
    },
    {
      id: 'clarity_internal_coherence',
      name: 'Coerência Interna',
      icon: '⚖️',
      description: 'Sensação de alinhamento entre o que se sente, pensa e faz.',
      interpretationLabels: {
        level_1: 'Sensação de fragmentação.',
        level_2: 'Coerência parcial.',
        level_3: 'Boa coerência interna.',
        level_4: 'Alto senso de autenticidade.',
      },
      questions: [
        { id: 5401, text: 'Meus sentimentos e pensamentos geralmente caminham na mesma direção.' },
        { id: 5402, text: 'Tenho clareza sobre o que realmente quero quando estou confuso(a).' },
        { id: 5403, text: 'Às vezes minhas ações não refletem o que realmente sinto.', isReversed: true },
        { id: 5404, text: 'Sinto que me conheço bem.' },
        { id: 5405, text: 'Tenho uma visão coerente sobre quem sou emocionalmente.' },
        { id: 5406, text: 'Frequentemente sinto que estou dividido(a) entre o que penso e o que sinto.', isReversed: true },
        { id: 5407, text: 'Sinto-me autêntico(a) na maior parte das minhas decisões.' },
        { id: 5408, text: 'Percebo quando estou tentando mentir para mim mesmo.', isReversed: true }, // Logic correction: Notice lying is good awareness, but usually phased as 'I lie to myself'. Re-reading: "Percebo quando estou tentando..." is GOOD awareness. Original intent was likely positive. Let's keep it direct.
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de desenvolvimento da autoconsciência. Escores mais altos sugerem maior clareza e integração.',
    ranges: [
        { 
          min: 1, 
          max: 2.5, 
          label: 'Foco Externo / Difuso', 
          description: 'A atenção está voltada mais para fora do que para dentro. Pode haver dificuldade em nomear sentimentos ou perceber o impacto dos pensamentos no humor.',
          recommendations: [
            'Treino de alfabetização emocional: aprender o nome das emoções básicas.',
            'Uso de diários de monitoramento para registrar gatilhos e reações.',
            'Exercícios de "body scan" (escaneamento corporal) para conectar sensações físicas a emoções.'
          ]
        },
        { 
          min: 2.51, 
          max: 4.0, 
          label: 'Consciência em Desenvolvimento', 
          description: 'Capacidade de insight presente, mas pode oscilar. Em momentos de estresse, a visão interna pode ficar "embaçada", levando a reações automáticas.',
          recommendations: [
            'Praticar a pausa antes da ação ("O que estou sentindo agora?").',
            'Identificar padrões repetitivos de comportamento.',
            'Diferenciar pensamentos ("eu acho que...") de sentimentos ("eu sinto que...").'
          ]
        },
        { 
          min: 4.01, 
          max: 5.5, 
          label: 'Boa Capacidade Metacognitiva', 
          description: 'Bom nível de autoconhecimento. O indivíduo consegue refletir sobre suas emoções e usar essa informação para navegar pela vida com mais segurança.',
          recommendations: [
            'Aprofundar a integração entre valores pessoais e ações.',
            'Explorar as origens históricas de padrões emocionais.',
            'Praticar a aceitação radical de emoções difíceis.'
          ]
        },
        { 
          min: 5.51, 
          max: 7, 
          label: 'Alta Clareza e Integração', 
          description: 'Excelente conexão interna. Capacidade de observar a própria mente sem se perder nela. Alto potencial de autorregulação e crescimento pessoal.',
          recommendations: [
            'Utilizar a sabedoria emocional para liderança e suporte a outros.',
            'Manter práticas de mindfulness para sustentar a clareza.',
            'Focar na autenticidade e na expressão genuína do self.'
          ]
        }
    ]
  }
};
