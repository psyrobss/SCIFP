
import { InventoryForm } from '../types';

export const IFMSC_INVENTORY: InventoryForm = {
  id: 'ifmsc',
  acronym: 'IFMSC',
  name: 'Inventário de Fadiga Mental e Sobrecarga Cognitiva (IFMSC)',
  objective: 'Avaliar a percepção subjetiva de exaustão mental, lentificação cognitiva, dificuldade de recuperação e sensação de sobrecarga emocional ou intelectual no cotidiano.',
  instructions: 'As frases abaixo descrevem experiências mentais e cognitivas comuns em situações de estresse, excesso de trabalho, ou esgotamento emocional. Marque a opção que melhor descreve o que ocorre com você na maior parte dos dias.',
  responseScale: [
    { value: 0, label: 'Nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre' },
  ],
  domains: [
    {
      id: 'cognitive_exhaustion',
      name: 'Exaustão Cognitiva',
      icon: '⚡',
      description: 'Sensação de esgotamento mental, cansaço do raciocínio e dificuldade em manter o esforço intelectual.',
      interpretationLabels: {
        level_1: 'Nenhuma exaustão cognitiva significativa.',
        level_2: 'Cansaço mental leve após esforço intenso.',
        level_3: 'Exaustão cognitiva moderada e persistente.',
        level_4: 'Forte sensação de esgotamento mental.',
      },
      questions: [
        { id: 2301, text: 'Sinto minha mente cansada, mesmo sem esforço físico.' },
        { id: 2302, text: 'Tenho a sensação de que meu cérebro “não dá conta” de processar tudo.' },
        { id: 2303, text: 'Fico mentalmente exausto(a) depois de pequenas tarefas.' },
        { id: 2304, text: 'Tenho dificuldade em pensar com clareza quando estou cansado(a).' },
        { id: 2305, text: 'Sinto que meu raciocínio desacelera ao longo do dia.' },
        { id: 2306, text: 'Tenho necessidade de pausas mentais constantes.' },
      ],
    },
    {
      id: 'mental_slowness_performance',
      name: 'Lentificação e Desempenho Mental',
      icon: '🧠',
      description: 'Percepção de lentidão no pensamento, dificuldade de compreensão e queda no desempenho de tarefas cognitivas.',
      interpretationLabels: {
        level_1: 'Desempenho mental preservado e ágil.',
        level_2: 'Leve lentificação cognitiva sob fadiga.',
        level_3: 'Lentidão moderada com impacto no desempenho.',
        level_4: 'Forte sensação de lentidão e queda no desempenho.',
      },
      questions: [
        { id: 2401, text: 'Sinto que estou pensando ou reagindo mais devagar que o normal.' },
        { id: 2402, text: 'Tenho dificuldade em compreender informações simples quando estou cansado(a).' },
        { id: 2403, text: 'Esqueço facilmente o que acabei de fazer ou ler.' },
        { id: 2404, text: 'Tenho a sensação de que “nada entra na cabeça”.' },
        { id: 2405, text: 'Demoro para iniciar tarefas cognitivas, mesmo as fáceis.' },
        { id: 2406, text: 'Sinto que perco eficiência conforme o dia avança.' },
      ],
    },
    {
      id: 'mental_overload_saturation',
      name: 'Sobrecarga e Saturação Mental',
      icon: '🌀',
      description: 'Sensação de que a mente está "cheia", com excesso de informações e dificuldade em lidar com múltiplas demandas.',
      interpretationLabels: {
        level_1: 'Nenhuma sensação de sobrecarga mental.',
        level_2: 'Sensação leve de sobrecarga em situações de alta demanda.',
        level_3: 'Sobrecarga mental moderada e frequente.',
        level_4: 'Forte sensação de saturação e sobrecarga mental.',
      },
      questions: [
        { id: 2501, text: 'Tenho a sensação de que há “informação demais” na minha mente.' },
        { id: 2502, text: 'Sinto-me sobrecarregado(a) por estímulos, sons ou demandas simultâneas.' },
        { id: 2503, text: 'Tenho vontade de “desligar” de tudo por um tempo.' },
        { id: 2504, text: 'Sinto que minha mente está cheia, mesmo sem estar produzindo muito.' },
        { id: 2505, text: 'Tenho dificuldade em lidar com múltiplas tarefas ou responsabilidades.' },
        { id: 2506, text: 'Pequenas decisões parecem exigir esforço mental excessivo.' },
      ],
    },
    {
      id: 'mental_recovery_difficulty',
      name: 'Dificuldade de Recuperação Mental',
      icon: '💭',
      description: 'Percepção de que o descanso não é suficiente para restaurar a energia e a clareza mental.',
      interpretationLabels: {
        level_1: 'Boa capacidade de recuperação mental após descanso.',
        level_2: 'Recuperação mental um pouco mais lenta que o normal.',
        level_3: 'Dificuldade moderada em se recuperar, mesmo após descanso.',
        level_4: 'Forte sensação de que o descanso não restaura a energia mental.',
      },
      questions: [
        { id: 2601, text: 'Mesmo após descansar, continuo me sentindo mentalmente cansado(a).' },
        { id: 2602, text: 'Tenho dificuldade em me concentrar mesmo após uma boa noite de sono.' },
        { id: 2603, text: 'Sinto que preciso de longos períodos de pausa para me recompor.' },
        { id: 2604, text: 'O cansaço mental parece não passar completamente.' },
        { id: 2605, text: 'Tenho sensação de que o descanso “não recarrega” minha energia mental.' },
        { id: 2606, text: 'Acordo já com sensação de fadiga mental.' },
      ],
    },
    {
      id: 'emotional_functional_impact',
      name: 'Impacto Emocional e Funcional',
      icon: '❤️',
      description: 'Avalia como a fadiga mental afeta o humor, a irritabilidade, o prazer e o interesse pelas atividades diárias.',
      interpretationLabels: {
        level_1: 'Nenhum impacto emocional ou funcional significativo.',
        level_2: 'Impacto leve no humor e irritabilidade.',
        level_3: 'Impacto moderado no humor, prazer e relacionamentos.',
        level_4: 'Forte impacto emocional e funcional, com perda de interesse.',
      },
      questions: [
        { id: 2701, text: 'Fico irritado(a) com facilidade por causa do cansaço mental.' },
        { id: 2702, text: 'Tenho me sentido emocionalmente esgotado(a).' },
        { id: 2703, text: 'Evito situações que exigem esforço mental.' },
        { id: 2704, text: 'Tenho sentido menos prazer em atividades cognitivas (ler, estudar, conversar).' },
        { id: 2705, text: 'Tenho perdido o interesse em tarefas que antes eram fáceis.' },
        { id: 2706, text: 'Sinto que minha exaustão mental está afetando meu humor e relacionamentos.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (0-4) representa o nível de fadiga mental e sobrecarga cognitiva percebida. Escores mais altos indicam maior exaustão.',
    ranges: [
      { 
        min: 0, 
        max: 0.9, 
        label: 'Sem Fadiga Mental Significativa', 
        description: 'Energia cognitiva preservada. O cansaço relatado é proporcional ao esforço e aliviado pelo descanso normal.',
        recommendations: [
          'Manter rotina equilibrada entre trabalho e lazer.',
          'Preservar sono de qualidade.',
          'Praticar atividades de "descompressão" diária.'
        ]
      },
      { 
        min: 1, 
        max: 1.9, 
        label: 'Fadiga Mental Leve', 
        description: 'Sinais iniciais de cansaço mental, aparecendo geralmente ao final do dia ou após semanas intensas. A recuperação ainda ocorre, mas pode demorar um pouco mais.',
        recommendations: [
          'Micro-pausas ativas durante o dia (levantar, esticar, beber água).',
          'Revisar a carga de trabalho e compromissos.',
          'Digital Detox: reduzir tempo de tela fora do trabalho.',
          'Garantir finais de semana livres de obrigações mentais intensas.'
        ]
      },
      { 
        min: 2, 
        max: 2.9, 
        label: 'Sobrecarga Cognitiva Moderada', 
        description: 'Cansaço persistente que afeta o humor e a produtividade. Sensação de "arrastar-se" para cumprir tarefas. O sono pode não ser totalmente reparador. Risco aumentado de erros e irritabilidade.',
        recommendations: [
          'Necessidade de reestruturação da rotina para incluir descanso obrigatório.',
          'Avaliar níveis de estresse crônico.',
          'Práticas de relaxamento profundo ou meditação.',
          'Delegar tarefas e reduzir o nível de exigência temporariamente.',
          'Avaliação médica para descartar causas físicas (anemia, tireoide).'
        ]
      },
      { 
        min: 3, 
        max: 4, 
        label: 'Exaustão Cognitiva Severa (Risco de Burnout)', 
        description: 'Esgotamento mental profundo. Sensação de colapso, incapacidade de concentração, apatia ou despersonalização. O descanso comum não recupera a energia. Alto risco para Síndrome de Burnout.',
        recommendations: [
          'Afastamento temporário de estressores, se possível (licença, férias).',
          'Psicoterapia para manejo de Burnout.',
          'Acompanhamento psiquiátrico pode ser necessário.',
          'Prioridade absoluta para a recuperação fisiológica e mental.',
          'Evitar tomada de decisões importantes neste estado.'
        ]
      },
    ],
  }
};