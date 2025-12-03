
import { InventoryForm } from '../types';

export const IFPM_INVENTORY: InventoryForm = {
  id: 'ifpm',
  acronym: 'IFPM',
  name: 'Inventário de Planejamento Futuro e Projeção de Metas',
  objective: 'Avaliar a capacidade de estabelecer metas, planejar ações futuras, prever obstáculos e organizar estratégias de forma estruturada e realista.',
  instructions: 'Indique com que frequência você vivencia os comportamentos descritos ao pensar ou agir em direção aos seus objetivos futuros, usando a escala de 1 a 7.',
  scoreOrientation: 'higher_is_better',
  responseScale: [
    { value: 1, label: 'Nunca' },
    { value: 2, label: 'Raramente' },
    { value: 3, label: 'Às vezes' },
    { value: 4, label: 'Neutro / Misto' },
    { value: 5, label: 'Frequentemente' },
    { value: 6, label: 'Muito Frequentemente' },
    { value: 7, label: 'Sempre' },
  ],
  domains: [
    {
      id: 'goal_setting',
      name: 'Estabelecimento de Metas',
      icon: '📌',
      description: 'Habilidade de definir objetivos claros, específicos e realistas.',
      interpretationLabels: {
        level_1: 'Dificuldade em definir metas.',
        level_2: 'Metas vagas ou inconstantes.',
        level_3: 'Boa definição de objetivos.',
        level_4: 'Metas claras e estratégicas.',
      },
      questions: [
        { id: 70001, text: 'Consigo definir metas claras para curto, médio e longo prazo.' },
        { id: 70002, text: 'Frequentemente inicio projetos sem ter objetivos bem definidos.', isReversed: true },
        { id: 70003, text: 'Planejo minhas atividades diárias visando atingir objetivos maiores.' },
        { id: 70004, text: 'Tenho dificuldade em identificar prioridades e objetivos pessoais.', isReversed: true },
        { id: 70005, text: 'Consigo estabelecer metas que sejam alcançáveis e desafiadoras ao mesmo tempo.' },
        { id: 70006, text: 'Sinto-me perdido(a) sem metas claras a seguir.', isReversed: true },
        { id: 70007, text: 'Revisito e ajusto meus objetivos regularmente conforme necessário.' },
      ],
    },
    {
      id: 'planning_organization',
      name: 'Planejamento e Organização',
      icon: '🛠️',
      description: 'Capacidade de estruturar ações, prazos e estratégias para atingir metas.',
      interpretationLabels: {
        level_1: 'Desorganização e improviso excessivo.',
        level_2: 'Planejamento básico ou reativo.',
        level_3: 'Boa organização de tarefas.',
        level_4: 'Planejamento estruturado e eficiente.',
      },
      questions: [
        { id: 70008, text: 'Consigo organizar minhas tarefas de forma eficiente para alcançar meus objetivos.' },
        { id: 70009, text: 'Frequentemente deixo tarefas importantes sem planejamento prévio.', isReversed: true },
        { id: 70010, text: 'Estabeleço prazos realistas para cumprir minhas metas.' },
        { id: 70011, text: 'Tenho dificuldade em priorizar ações de acordo com sua importância.', isReversed: true },
        { id: 70012, text: 'Planejo antecipadamente os recursos necessários para atingir meus objetivos.' },
        { id: 70013, text: 'Evito planejar, preferindo agir impulsivamente.', isReversed: true },
        { id: 70014, text: 'Adapto meu planejamento quando surgem imprevistos ou obstáculos.' },
      ],
    },
    {
      id: 'obstacle_prediction',
      name: 'Previsão de Obstáculos',
      icon: '🎯',
      description: 'Capacidade de antecipar dificuldades e criar planos de contingência (estratégias "se-então").',
      interpretationLabels: {
        level_1: 'Visão excessivamente otimista ou ingênua.',
        level_2: 'Dificuldade em prever problemas.',
        level_3: 'Boa antecipação de riscos.',
        level_4: 'Preparo estratégico para adversidades.',
      },
      questions: [
        { id: 70015, text: 'Consigo identificar possíveis obstáculos antes de iniciar um projeto.' },
        { id: 70016, text: 'Frequentemente sou surpreendido(a) por problemas que poderia ter previsto.', isReversed: true },
        { id: 70017, text: 'Crio alternativas (Plano B) para contornar dificuldades antecipadas.' },
        { id: 70018, text: 'Reajo de forma desproporcional quando imprevistos comprometem meus planos.', isReversed: true },
        { id: 70019, text: 'Considero riscos e consequências ao tomar decisões relacionadas às metas.' },
        { id: 70020, text: 'Sinto dificuldade em pensar em soluções para situações imprevistas.', isReversed: true },
        { id: 70021, text: 'Mantenho a calma e o foco na solução quando encontro obstáculos.' },
      ],
    },
    {
      id: 'motivation_persistence',
      name: 'Motivação e Persistência',
      icon: '🚀',
      description: 'Capacidade de manter esforço, disciplina e engajamento ao longo do tempo.',
      interpretationLabels: {
        level_1: 'Desistência fácil ou procrastinação.',
        level_2: 'Motivação oscilante.',
        level_3: 'Boa persistência.',
        level_4: 'Alta determinação e disciplina.',
      },
      questions: [
        { id: 70022, text: 'Persisto nos meus objetivos mesmo quando encontro dificuldades.' },
        { id: 70023, text: 'Desisto facilmente de metas quando surgem desafios ou tédio.', isReversed: true },
        { id: 70024, text: 'Sinto-me motivado(a) a alcançar minhas metas diariamente.' },
        { id: 70025, text: 'Frequentemente procrastino ou adio tarefas importantes.', isReversed: true },
        { id: 70026, text: 'Consigo manter disciplina e foco mesmo em atividades monótonas.' },
        { id: 70027, text: 'Busco recompensas e feedbacks para me manter engajado(a) em meus objetivos.' },
        { id: 70028, text: 'Meu comprometimento com metas pessoais ou profissionais é instável.', isReversed: true },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica a competência em planejamento e execução de metas. Escores altos refletem maior agência e organização.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Dificuldade de Planejamento', 
        description: 'Desafios em estruturar o futuro, possivelmente vivendo de forma reativa ou impulsiva. Pode haver dificuldade em visualizar passos concretos para atingir sonhos.',
        recommendations: [
          'Começar com a técnica SMART para metas (Específica, Mensurável, Alcançável, Relevante, Temporal).',
          'Usar ferramentas visuais (calendários, quadros) para tornar o futuro mais concreto.',
          'Focar em micro-hábitos diários em vez de grandes projetos distantes.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Planejamento em Desenvolvimento', 
        description: 'Capacidade de definir metas existe, mas a execução ou a previsão de obstáculos pode falhar. Risco de desmotivação quando os planos não saem como esperado.',
        recommendations: [
          'Praticar a previsão de obstáculos ("O que pode dar errado e o que farei se isso acontecer?").',
          'Dividir grandes objetivos em etapas menores e comemorar cada uma.',
          'Revisar semanalmente o progresso para ajustar a rota.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Competência em Planejamento', 
        description: 'Bom nível de organização e visão de futuro. O indivíduo consegue traçar rotas e manter-se nelas, lidando razoavelmente bem com imprevistos.',
        recommendations: [
          'Refinar a gestão do tempo para aumentar a eficiência.',
          'Alinhar as metas de curto prazo com o propósito de vida de longo prazo.',
          'Desenvolver resiliência para lidar com frustrações maiores.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Agência e Visão de Futuro', 
        description: 'Excelente habilidade de transformar sonhos em realidade através de planejamento estratégico e persistência. Perfil proativo e realizador.',
        recommendations: [
          'Assumir liderança em projetos coletivos.',
          'Mentorar outras pessoas em organização e produtividade.',
          'Garantir que o foco no futuro não prejudique a vivência do presente (mindfulness).'
        ]
      },
    ],
  },
};
