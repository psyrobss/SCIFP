
import { InventoryForm } from '../types';

export const ISSM_INVENTORY: InventoryForm = {
  id: 'issm',
  acronym: 'ISSM',
  name: 'Inventário de Sono, Saúde e Motivação',
  objective: 'Avaliar a base fisiológica e motivacional do bem-estar: qualidade do sono, nível de energia física e disposição para a ação.',
  instructions: 'Indique o quanto cada afirmação descreve seu estado físico e motivacional nas últimas semanas, usando a escala de 1 a 7.',
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
      id: 'sleep_quality',
      name: 'Qualidade do Sono',
      icon: '😴',
      description: 'Percepção de sono reparador, facilidade para adormecer e regularidade.',
      interpretationLabels: {
        level_1: 'Sono muito prejudicado.',
        level_2: 'Sono irregular ou pouco reparador.',
        level_3: 'Boa qualidade de sono.',
        level_4: 'Sono excelente e restaurador.',
      },
      questions: [
        { id: 16001, text: 'Tenho dificuldade para pegar no sono ou acordo várias vezes.', isReversed: true },
        { id: 16002, text: 'Acordo me sentindo descansado(a) e renovado(a).' },
        { id: 16003, text: 'Sinto sonolência excessiva durante o dia.', isReversed: true },
        { id: 16004, text: 'Meu sono é agitado ou interrompido por preocupações.', isReversed: true },
        { id: 16005, text: 'Consigo manter horários regulares de dormir e acordar.' },
      ],
    },
    {
      id: 'physical_vitality',
      name: 'Vitalidade e Energia Física',
      icon: '⚡',
      description: 'Nível de disposição física para enfrentar o dia, sem fadiga excessiva.',
      interpretationLabels: {
        level_1: 'Exaustão física constante.',
        level_2: 'Cansaço frequente.',
        level_3: 'Boa energia diária.',
        level_4: 'Alta vitalidade e vigor.',
      },
      questions: [
        { id: 16101, text: 'Tenho energia suficiente para todas as minhas atividades.' },
        { id: 16102, text: 'Sinto meu corpo pesado ou lento com frequência.', isReversed: true },
        { id: 16103, text: 'Tenho dores ou desconfortos físicos constantes.', isReversed: true },
        { id: 16104, text: 'Sinto disposição física ao acordar.' },
        { id: 16105, text: 'Minha energia se mantém estável ao longo do dia.' },
      ],
    },
    {
      id: 'motivation_drive',
      name: 'Motivação e Iniciativa',
      icon: '🔥',
      description: 'Desejo de agir, engajamento com tarefas e capacidade de sentir prazer na ação.',
      interpretationLabels: {
        level_1: 'Apatia e falta de iniciativa.',
        level_2: 'Motivação baixa/oscilante.',
        level_3: 'Boa motivação para agir.',
        level_4: 'Alto entusiasmo e proatividade.',
      },
      questions: [
        { id: 16201, text: 'Sinto vontade de realizar minhas tarefas do dia a dia.' },
        { id: 16202, text: 'Tenho procrastinado muito por falta de ânimo.', isReversed: true },
        { id: 16203, text: 'Sinto prazer e satisfação nas coisas que faço.' },
        { id: 16204, text: 'Tenho dificuldade em começar coisas novas.', isReversed: true },
        { id: 16205, text: 'Encaro meus compromissos com interesse.' },
      ],
    },
    {
      id: 'healthy_habits',
      name: 'Regulação de Hábitos',
      icon: '🥗',
      description: 'Manutenção de rotinas básicas de autocuidado (alimentação, movimento).',
      interpretationLabels: {
        level_1: 'Negligência de hábitos básicos.',
        level_2: 'Hábitos inconsistentes.',
        level_3: 'Bons hábitos de saúde.',
        level_4: 'Estilo de vida muito saudável.',
      },
      questions: [
        { id: 16301, text: 'Cuido da minha alimentação de forma consciente.' },
        { id: 16302, text: 'Pratico atividades físicas regularmente.' },
        { id: 16303, text: 'Tenho momentos de pausa e descanso na minha rotina.' },
        { id: 16304, text: 'Percebo quando meu corpo precisa de cuidado e atendo.', isReversed: false }, 
        { id: 16305, text: 'Tenho negligenciado minha saúde física recentemente.', isReversed: true },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de regulação fisiológica e motivacional. Escores altos sugerem boa saúde basal e vitalidade.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Desregulação Fisiológica/Motivacional', 
        description: 'Indica fadiga, problemas de sono ou desmotivação significativa. O "motor" biológico pode estar precisando de reparo urgente.',
        recommendations: [
          'Check-up médico para descartar causas orgânicas (tireoide, vitaminas).',
          'Higiene do sono rigorosa (horários, escuro, sem telas).',
          'Ativação comportamental: fazer pequenas coisas mesmo sem vontade inicial.',
          'Priorizar descanso passivo e ativo.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Energia Oscilante', 
        description: 'O indivíduo funciona, mas com esforço. Pode haver dias bons e dias de muito cansaço. A rotina pode estar desequilibrada.',
        recommendations: [
          'Regularizar horários de refeições e sono.',
          'Identificar "vampiros de energia" na rotina.',
          'Introduzir movimento físico leve (caminhada) para aumentar a energia.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Boa Vitalidade', 
        description: 'Nível de energia e saúde adequados para as demandas. Sono geralmente bom e motivação funcional para o dia a dia.',
        recommendations: [
          'Manter a consistência nos bons hábitos.',
          'Otimizar a alimentação para melhorar a performance mental.',
          'Monitorar sinais precoces de cansaço para evitar recaídas.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alto Vigor e Saúde', 
        description: 'Excelente estado de disposição física e mental. O sono é reparador e a motivação é alta. Base sólida para enfrentar desafios.',
        recommendations: [
          'Desafiar-se fisicamente ou intelectualmente.',
          'Utilizar o excesso de energia para projetos criativos.',
          'Servir de modelo de estilo de vida saudável.'
        ]
      },
    ],
  }
};
