
import { InventoryForm } from '../types';

export const IAPM_INVENTORY: InventoryForm = {
  id: 'iapm',
  acronym: 'IAPM',
  name: 'Inventário de Atenção e Processamento Mental (IAPM)',
  objective: 'Avaliar o nível de atenção, vigilância, velocidade de processamento e clareza mental no cotidiano, identificando padrões de funcionamento.',
  instructions: 'Indique o grau de concordância com as frases abaixo, baseando-se em como você se sente na maioria dos dias.',
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
      id: 'sustained_attention',
      name: 'Atenção Sustentada',
      icon: '🎯',
      description: 'Capacidade de manter o foco em uma tarefa por tempo prolongado.',
      interpretationLabels: {
        level_1: 'Foco sustentado preservado.',
        level_2: 'Leve dispersão em tarefas longas.',
        level_3: 'Dificuldade moderada de concentração.',
        level_4: 'Desafios significativos de atenção sustentada.',
      },
      questions: [
        { id: 1801, text: 'Tenho dificuldade em manter o foco por longos períodos.' },
        { id: 1802, text: 'Percebo que minha mente “desliga” durante tarefas monótonas.' },
        { id: 1803, text: 'Perco a concentração facilmente mesmo em atividades simples.' },
        { id: 1804, text: 'Fico cansado(a) mentalmente após alguns minutos de leitura.' },
        { id: 1805, text: 'Tenho dificuldade em continuar prestando atenção quando algo se torna repetitivo.' },
        { id: 1806, text: 'Costumo “viajar” nos próprios pensamentos durante conversas ou filmes.' },
      ],
    },
    {
      id: 'processing_speed',
      name: 'Velocidade de Processamento',
      icon: '⚡',
      description: 'Agilidade para compreender, organizar e responder a informações.',
      interpretationLabels: {
        level_1: 'Processamento mental ágil.',
        level_2: 'Leve lentidão em situações novas.',
        level_3: 'Lentidão moderada de raciocínio.',
        level_4: 'Processamento significativamente lentificado.',
      },
      questions: [
        { id: 1901, text: 'Preciso de mais tempo que o normal para compreender informações novas.' },
        { id: 1902, text: 'Tenho a sensação de que meu raciocínio está mais lento que antes.' },
        { id: 1903, text: 'Demoro para responder quando alguém fala comigo.' },
        { id: 1904, text: 'Preciso de mais tempo para organizar meus pensamentos antes de agir.' },
        { id: 1905, text: 'Sinto-me “mentalmente devagar” em situações que exigem rapidez.' },
        { id: 1906, text: 'Tenho dificuldade em acompanhar conversas rápidas ou dinâmicas.' },
      ],
    },
    {
      id: 'attention_switching',
      name: 'Alternância Atencional',
      icon: '🔄',
      description: 'Habilidade de mudar o foco entre tarefas eficientemente.',
      interpretationLabels: {
        level_1: 'Boa flexibilidade de foco.',
        level_2: 'Leve dificuldade em alternar tarefas.',
        level_3: 'Dificuldade moderada com múltiplas demandas.',
        level_4: 'Rigidez ou confusão na alternância.',
      },
      questions: [
        { id: 2001, text: 'Tenho dificuldade em mudar de uma tarefa para outra sem me confundir.' },
        { id: 2002, text: 'Quando interrompido(a), demoro a retomar o raciocínio anterior.' },
        { id: 2003, text: 'Fico desorientado(a) quando preciso lidar com várias demandas simultâneas.' },
        { id: 2004, text: 'Tenho dificuldade em alternar entre pensar, ouvir e escrever ao mesmo tempo.' },
        { id: 2005, text: 'Sinto-me “travado(a)” quando há várias coisas competindo por minha atenção.' },
        { id: 2006, text: 'Tenho dificuldade em retornar ao foco depois de uma distração.' },
      ],
    },
    {
      id: 'selective_attention',
      name: 'Atenção Seletiva',
      icon: '🧩',
      description: 'Capacidade de focar no relevante e ignorar distrações.',
      interpretationLabels: {
        level_1: 'Boa filtragem de distrações.',
        level_2: 'Sensibilidade leve a ruídos.',
        level_3: 'Distratibilidade moderada em ambientes cheios.',
        level_4: 'Alta vulnerabilidade a distrações externas.',
      },
      questions: [
        { id: 2101, text: 'Tenho dificuldade em ignorar ruídos, pessoas ou distrações ao redor.' },
        { id: 2102, text: 'Qualquer barulho ou movimento me tira a concentração.' },
        { id: 2103, text: 'Tenho dificuldade em manter o foco em locais com muitas pessoas.' },
        { id: 2104, text: 'Presto atenção em detalhes irrelevantes e perco o foco no essencial.' },
        { id: 2105, text: 'Tenho dificuldade em manter a atenção mesmo em tarefas prazerosas.' },
        { id: 2106, text: 'Tenho sensação de “sobrecarga” em ambientes muito estimulantes.' },
      ],
    },
    {
      id: 'mental_clarity',
      name: 'Clareza Mental',
      icon: '💭',
      description: 'Percepção de pensamento organizado e lúcido.',
      interpretationLabels: {
        level_1: 'Pensamento claro e organizado.',
        level_2: 'Sensação ocasional de confusão.',
        level_3: '“Nevoeiro mental” moderado.',
        level_4: 'Sensação frequente de confusão ou mente “cheia”.',
      },
      questions: [
        { id: 2201, text: 'Tenho sensação de “mente enevoada” ou confusa.' },
        { id: 2202, text: 'Às vezes parece que meu pensamento está “embaçado” ou lento.' },
        { id: 2203, text: 'Tenho dificuldade em perceber quando começo a me distrair.' },
        { id: 2204, text: 'Tenho a sensação de que estou presente fisicamente, mas “ausente” mentalmente.' },
        { id: 2205, text: 'Tenho dificuldade em perceber o quanto minha atenção varia ao longo do dia.' },
        { id: 2206, text: 'Sinto que minha mente está sobrecarregada e difícil de organizar.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o perfil de atenção. Pontuações mais altas sugerem maiores desafios no processamento mental.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Atenção e Processamento Eficientes', 
        description: 'Boa capacidade de foco, seleção de estímulos e velocidade de pensamento. Consegue lidar bem com ambientes ruidosos e multitarefas ocasionais.',
        recommendations: [
          'Manter hábitos que favorecem a neuroplasticidade (leitura, aprendizado).',
          'Utilizar momentos de alta clareza mental para tarefas complexas.',
          'Pausas regulares para evitar fadiga futura.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Oscilações Atencionais Leves', 
        description: 'Lapsos de atenção ocasionais ou distratibilidade em ambientes estimulantes. Pode ser resultado de cansaço, desinteresse ou uso excessivo de telas.',
        recommendations: [
          'Técnica Pomodoro (foco intervalado) para tarefas longas.',
          'Reduzir multitarefas: focar em uma coisa de cada vez.',
          'Limitar notificações digitais durante o trabalho/estudo.',
          'Avaliar qualidade do sono.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Dificuldades Atencionais Moderadas', 
        description: 'Dificuldades persistentes de concentração e organização mental. Sensação frequente de "mente cheia". Impacta a produtividade e pode gerar erros por descuido.',
        recommendations: [
          'Avaliação clínica para transtornos de atenção ou ansiosos.',
          'Adaptação do ambiente de trabalho (fones de cancelamento de ruído, organização).',
          'Prática de Mindfulness para treinar o retorno ao foco.',
          'Escrever tudo: não confiar apenas na memória de trabalho.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Desafios Significativos de Processamento', 
        description: 'Prejuízo acentuado na capacidade de processar informações, manter o foco ou alternar tarefas. Sensação de confusão mental intensa ou "nevoeiro".',
        recommendations: [
          'Avaliação neurológica e psiquiátrica indicada.',
          'Investigar causas metabólicas (ex: vitaminas, tireoide) e sono.',
          'Repouso cognitivo e redução de estímulos.',
          'Simplificação da rotina diária até a recuperação.'
        ]
      },
    ],
  }
};
