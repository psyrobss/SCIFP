
import { InventoryForm } from '../types';

export const ITIA_INVENTORY: InventoryForm = {
  id: 'itia',
  acronym: 'ITIA',
  name: 'Inventário de Tolerância à Incerteza e Ambiguidade',
  objective: 'Avaliar a capacidade de lidar com situações onde não há respostas claras, tolerando o "não saber" sem ansiedade paralisante e mantendo a abertura para novas informações.',
  instructions: 'Leia cada afirmação e indique o quanto ela descreve seu modo habitual de lidar com o desconhecido, usando a escala de 1 a 7.',
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
      id: 'anxiety_uncertainty_comfort',
      name: 'Conforto com o Desconhecido',
      icon: '🌫️',
      description: 'Capacidade de permanecer calmo e funcional mesmo quando não se tem todas as respostas ou garantias.',
      interpretationLabels: {
        level_1: 'Forte necessidade de certeza e controle.',
        level_2: 'Desconforto com a falta de garantias.',
        level_3: 'Aceitação funcional da incerteza.',
        level_4: 'Tranquilidade diante do desconhecido.',
      },
      questions: [
        { id: 45001, text: 'Sinto-me muito ansioso(a) quando não sei exatamente o que vai acontecer.', isReversed: true },
        { id: 45002, text: 'Consigo aceitar que algumas perguntas não têm respostas imediatas.' },
        { id: 45003, text: 'A falta de previsibilidade me perturba profundamente.', isReversed: true },
        { id: 45004, text: 'Consigo relaxar mesmo sem ter controle total sobre o futuro.' },
        { id: 45005, text: 'Evito situações novas se não tiver certeza de como serão.', isReversed: true },
        { id: 45006, text: 'Confio na minha capacidade de lidar com o inesperado.' },
        { id: 45007, text: 'Acho estimulante não saber exatamente como o dia vai terminar.' },
      ],
    },
    {
      id: 'cognitive_flexibility_coping',
      name: 'Adaptação e Flexibilidade',
      icon: '🌱',
      description: 'Habilidade de ajustar planos e expectativas quando a realidade muda ou as informações são contraditórias.',
      interpretationLabels: {
        level_1: 'Rigidez e resistência a mudanças.',
        level_2: 'Adaptação lenta ou com resistência.',
        level_3: 'Boa capacidade de ajuste.',
        level_4: 'Alta fluidez e adaptação.',
      },
      questions: [
        { id: 45008, text: 'Tenho facilidade em mudar meus planos de última hora.' },
        { id: 45009, text: 'Quando enfrento um problema confuso, busco várias soluções possíveis.' },
        { id: 45010, text: 'Fico frustrado(a) se as coisas não saem exatamente como planejei.', isReversed: true },
        { id: 45011, text: 'Consigo improvisar quando necessário.' },
        { id: 45012, text: 'Aceito que existem diferentes maneiras de ver a mesma situação.' },
        { id: 45013, text: 'Ajusto minhas expectativas sem sentir que fracassei.' },
        { id: 45014, text: 'Consigo agir mesmo sem ter todas as informações disponíveis.' },
      ],
    },
    {
      id: 'decision_making_ambiguity',
      name: 'Decisão sob Ambiguidade',
      icon: '⚖️',
      description: 'Capacidade de fazer escolhas e avançar, mesmo sem ter 100% de certeza sobre o resultado.',
      interpretationLabels: {
        level_1: 'Paralisia por análise ou indecisão.',
        level_2: 'Hesitação frequente por medo de errar.',
        level_3: 'Capacidade funcional de decisão.',
        level_4: 'Decisão confiante mesmo em cenários incertos.',
      },
      questions: [
        { id: 45015, text: 'Consigo tomar decisões mesmo quando o cenário é incerto.' },
        { id: 45016, text: 'Adio escolhas até ter certeza absoluta de que não vou errar.', isReversed: true },
        { id: 45017, text: 'Aceito que toda decisão envolve algum risco.' },
        { id: 45018, text: 'Fico paralisado(a) quando tenho opções demais ou informações confusas.', isReversed: true },
        { id: 45019, text: 'Confio na minha intuição quando a lógica não é suficiente.' },
        { id: 45020, text: 'Preciso de garantias antes de me comprometer com algo.', isReversed: true },
        { id: 45021, text: 'Consigo avançar passo a passo, mesmo sem ver o caminho todo.' },
      ],
    },
    {
      id: 'resilience_self_efficacy_uncertainty',
      name: 'Confiança na Resolução',
      icon: '⚓',
      description: 'Crença de que, independentemente do que acontecer, será possível lidar com a situação.',
      interpretationLabels: {
        level_1: 'Sentimento de impotência diante do novo.',
        level_2: 'Insegurança sobre a própria capacidade de lidar.',
        level_3: 'Confiança adequada na resolução de problemas.',
        level_4: 'Forte senso de autoeficácia diante do imprevisto.',
      },
      questions: [
        { id: 45022, text: 'Se algo der errado, sei que vou conseguir lidar com isso.' },
        { id: 45023, text: 'Vejo o desconhecido como uma oportunidade de aprendizado.' },
        { id: 45024, text: 'Sinto-me vulnerável e desprotegido(a) quando as coisas mudam.', isReversed: true },
        { id: 45025, text: 'Mantenho o otimismo mesmo em situações confusas.' },
        { id: 45026, text: 'Desafios inesperados me motivam a ser criativo(a).' },
        { id: 45027, text: 'Tenho recursos internos para navegar em tempos difíceis.' },
        { id: 45028, text: 'Consigo tolerar a sensação de dúvida sem entrar em pânico.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de tolerância à incerteza. Escores mais altos sugerem maior flexibilidade e menor ansiedade diante do desconhecido.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Preferência por Estrutura e Previsibilidade', 
        description: 'O indivíduo sente-se muito mais seguro em ambientes controlados e rotinas claras. A incerteza gera ansiedade significativa e busca por garantias.',
        recommendations: [
          'Validar a necessidade de segurança, introduzindo pequenas variações na rotina gradualmente.',
          'Questionar a crença de que "preocupação previne problemas".',
          'Focar no que está sob controle imediato e aceitar o restante.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Tolerância à Incerteza em Desenvolvimento', 
        description: 'Capacidade de lidar com pequenas surpresas, mas grandes ambiguidades ainda geram estresse ou paralisia. Pode haver tendência a procrastinar decisões difíceis.',
        recommendations: [
          'Praticar a tomada de decisão "boa o suficiente" (satisficing) em vez de perfeita.',
          'Exercícios de mindfulness para observar a ansiedade sem reagir a ela.',
          'Delegar tarefas para treinar a confiança no outro e no processo.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Boa Navegação na Ambiguidade', 
        description: 'Conforto funcional com o imprevisto. O indivíduo adapta-se bem a mudanças e consegue tomar decisões com informações parciais sem sofrimento excessivo.',
        recommendations: [
          'Reforçar a confiança na capacidade de improvisação.',
          'Experimentar atividades novas que envolvam risco calculado ou novidade.',
          'Utilizar essa habilidade para mediar conflitos ou situações complexas.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Abertura ao Desconhecido', 
        description: 'Perfil altamente adaptável e resiliente. Vê a incerteza como campo de possibilidade e criatividade. Lida com riscos com calma e confiança.',
        recommendations: [
          'Envolver-se em projetos de inovação ou empreendedorismo.',
          'Liderar em contextos de mudança ou crise.',
          'Manter a prudência para não subestimar riscos reais devido à alta confiança.'
        ]
      },
    ],
  },
};
