
import { InventoryForm } from '../types';

export const IFMSC_INVENTORY: InventoryForm = {
  id: 'ifmsc',
  acronym: 'IFMSC',
  name: 'Inventário de Fadiga Mental e Sobrecarga Cognitiva (IFMSC)',
  objective: 'Avaliar a percepção subjetiva de exaustão mental, lentificação cognitiva, dificuldade de recuperação e sensação de sobrecarga emocional ou intelectual no cotidiano.',
  instructions: 'As frases abaixo descrevem experiências mentais e cognitivas. Indique o grau de concordância com cada afirmação, considerando sua rotina recente (últimas 2 semanas).',
  responseScale: [
    { value: 1, label: 'Discordo Totalmente' },
    { value: 2, label: 'Discordo Fortemente' },
    { value: 3, label: 'Discordo em Parte' },
    { value: 4, label: 'Neutro / Às vezes' },
    { value: 5, label: 'Concordo em Parte' },
    { value: 6, label: 'Concordo Fortemente' },
    { value: 7, label: 'Concordo Totalmente' },
  ],
  domains: [
    {
      id: 'cognitive_exhaustion',
      name: 'Exaustão Cognitiva',
      icon: '⚡',
      description: 'Sensação de esgotamento mental, cansaço do raciocínio e dificuldade em manter o esforço intelectual.',
      interpretationLabels: {
        level_1: 'Energia cognitiva preservada.',
        level_2: 'Cansaço mental leve ou situacional.',
        level_3: 'Exaustão cognitiva frequente.',
        level_4: 'Esgotamento mental intenso.',
      },
      questions: [
        { id: 2301, text: 'Sinto minha mente cansada, mesmo sem ter feito grande esforço físico.' },
        { id: 2302, text: 'Tenho a sensação de que meu cérebro “não dá conta” de processar todas as informações.' },
        { id: 2303, text: 'Fico mentalmente exausto(a) depois de tarefas que antes eram simples.' },
        { id: 2304, text: 'Tenho dificuldade em pensar com clareza quando estou cansado(a).' },
        { id: 2305, text: 'Sinto que meu raciocínio desacelera significativamente ao longo do dia.' },
        { id: 2306, text: 'Sinto uma necessidade constante de pausas para "descansar a cabeça".' },
      ],
    },
    {
      id: 'mental_slowness_performance',
      name: 'Lentificação e Desempenho Mental',
      icon: '🧠',
      description: 'Percepção de lentidão no pensamento, dificuldade de compreensão e queda no desempenho de tarefas cognitivas.',
      interpretationLabels: {
        level_1: 'Desempenho mental ágil.',
        level_2: 'Leve lentificação sob demanda.',
        level_3: 'Lentidão perceptível no raciocínio.',
        level_4: 'Forte sensação de lentidão e bloqueio.',
      },
      questions: [
        { id: 2401, text: 'Sinto que estou pensando ou reagindo mais devagar que o meu normal.' },
        { id: 2402, text: 'Tenho dificuldade em compreender informações simples quando estou fadigado(a).' },
        { id: 2403, text: 'Esqueço facilmente o que acabei de fazer ou ler.' },
        { id: 2404, text: 'Tenho a sensação de que “nada entra na cabeça” ao tentar estudar ou trabalhar.' },
        { id: 2405, text: 'Demoro para iniciar tarefas cognitivas, mesmo as rotineiras.' },
        { id: 2406, text: 'Sinto que perco eficiência e cometo mais erros conforme o dia avança.' },
      ],
    },
    {
      id: 'mental_overload_saturation',
      name: 'Sobrecarga e Saturação Mental',
      icon: '🌀',
      description: 'Sensação de que a mente está "cheia", com excesso de informações e dificuldade em lidar com múltiplas demandas.',
      interpretationLabels: {
        level_1: 'Boa gestão de fluxo de informações.',
        level_2: 'Sensação ocasional de mente cheia.',
        level_3: 'Sobrecarga mental frequente.',
        level_4: 'Saturação mental intensa e bloqueante.',
      },
      questions: [
        { id: 2501, text: 'Tenho a sensação de que há “informação demais” na minha mente.' },
        { id: 2502, text: 'Sinto-me sobrecarregado(a) por estímulos, barulhos ou demandas simultâneas.' },
        { id: 2503, text: 'Tenho vontade de “desligar” de tudo e ficar em silêncio.' },
        { id: 2504, text: 'Sinto que minha mente está cheia, mesmo quando não estou produzindo muito.' },
        { id: 2505, text: 'Tenho dificuldade em lidar com múltiplas tarefas ou responsabilidades ao mesmo tempo.' },
        { id: 2506, text: 'Pequenas decisões parecem exigir um esforço mental desproporcional.' },
      ],
    },
    {
      id: 'mental_recovery_difficulty',
      name: 'Dificuldade de Recuperação Mental',
      icon: '💭',
      description: 'Percepção de que o descanso não é suficiente para restaurar a energia e a clareza mental.',
      interpretationLabels: {
        level_1: 'Boa recuperação após descanso.',
        level_2: 'Recuperação lenta em períodos intensos.',
        level_3: 'Dificuldade consistente de recuperação.',
        level_4: 'Sensação de fadiga crônica não reparada.',
      },
      questions: [
        { id: 2601, text: 'Mesmo após descansar, continuo me sentindo mentalmente cansado(a).' },
        { id: 2602, text: 'Tenho dificuldade em me concentrar mesmo após uma boa noite de sono.' },
        { id: 2603, text: 'Sinto que preciso de longos períodos de pausa para me recompor minimamente.' },
        { id: 2604, text: 'O cansaço mental parece acumular ao longo da semana.' },
        { id: 2605, text: 'Tenho sensação de que o descanso comum “não recarrega” minha bateria mental.' },
        { id: 2606, text: 'Acordo já com sensação de peso ou fadiga mental.' },
      ],
    },
    {
      id: 'emotional_functional_impact',
      name: 'Impacto Emocional e Funcional',
      icon: '❤️',
      description: 'Avalia como a fadiga mental afeta o humor, a irritabilidade, o prazer e o interesse pelas atividades diárias.',
      interpretationLabels: {
        level_1: 'Impacto emocional mínimo.',
        level_2: 'Irritabilidade leve ligada ao cansaço.',
        level_3: 'Impacto moderado no humor e relações.',
        level_4: 'Forte impacto funcional e emocional.',
      },
      questions: [
        { id: 2701, text: 'Fico irritado(a) com facilidade por causa do cansaço mental.' },
        { id: 2702, text: 'Tenho me sentido emocionalmente drenado(a).' },
        { id: 2703, text: 'Evito situações sociais que exijam esforço mental ou atenção.' },
        { id: 2704, text: 'Tenho sentido menos prazer em atividades cognitivas (ler, conversar, assistir filmes).' },
        { id: 2705, text: 'Tenho perdido o interesse em tarefas que antes realizava com facilidade.' },
        { id: 2706, text: 'Sinto que minha exaustão mental está afetando minha paciência com as pessoas.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) representa o nível de fadiga mental e sobrecarga cognitiva percebida.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Vigor Cognitivo / Baixa Fadiga', 
        description: 'Energia cognitiva preservada. O cansaço relatado é proporcional ao esforço e aliviado pelo descanso normal. Indica bom gerenciamento de recursos mentais.',
        recommendations: [
          'Manter rotina equilibrada entre foco e difusão (lazer).',
          'Preservar a higiene do sono.',
          'Continuar com atividades de "descompressão" diária.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Fadiga Mental Leve / Sinais de Alerta', 
        description: 'Sinais iniciais de cansaço mental, aparecendo geralmente ao final do dia ou após períodos de demanda. A recuperação ainda ocorre, mas requer atenção.',
        recommendations: [
          'Micro-pausas ativas durante o dia (levantar, esticar, beber água).',
          'Revisar a carga de trabalho e compromissos não essenciais.',
          'Digital Detox: reduzir tempo de tela fora do trabalho.',
          'Garantir finais de semana com descanso cognitivo real.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Sobrecarga Cognitiva Moderada', 
        description: 'Cansaço persistente que afeta o humor e a eficiência. Sensação de esforço aumentado para cumprir tarefas rotineiras. O sono pode não estar sendo totalmente reparador.',
        recommendations: [
          'Necessidade de reestruturação da rotina para incluir descanso obrigatório.',
          'Práticas de relaxamento profundo (Yoga Nidra, Meditação).',
          'Delegar tarefas e reduzir o nível de exigência temporariamente.',
          'Avaliação médica (check-up) para descartar causas fisiológicas.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Exaustão Cognitiva Significativa', 
        description: 'Esgotamento mental intenso. Sensação de saturação, dificuldade de concentração e irritabilidade. O descanso comum não recupera a energia rapidamente. Risco de Burnout.',
        recommendations: [
          'Afastamento temporário de estressores principais, se possível.',
          'Psicoterapia para manejo de estresse e prevenção de Burnout.',
          'Prioridade absoluta para a recuperação fisiológica (sono, nutrição).',
          'Evitar tomada de decisões importantes neste estado de fadiga.'
        ]
      },
    ],
  }
};
