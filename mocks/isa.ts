
import { InventoryForm } from '../types';

export const ISA_INVENTORY: InventoryForm = {
  id: 'isa',
  acronym: 'ISA',
  name: 'Inventário de Satisfação e Autoeficácia',
  objective: 'Avaliar o grau de satisfação pessoal e a percepção de competência para lidar com demandas da vida, desafios e metas (autoeficácia).',
  instructions: 'Leia as afirmações abaixo e marque o quanto cada uma descreve seu sentimento nas últimas semanas, utilizando a escala de 1 a 7.',
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
      id: 'perceived_self_efficacy',
      name: 'Autoeficácia Percebida',
      icon: '🎯',
      description: 'Crença na própria capacidade de organizar e executar as ações necessárias para alcançar objetivos.',
      interpretationLabels: {
        level_1: 'Baixa confiança na capacidade pessoal.',
        level_2: 'Confiança instável ou situacional.',
        level_3: 'Boa crença de autoeficácia.',
        level_4: 'Forte convicção de capacidade.',
      },
      questions: [
        { id: 19001, text: 'Acredito na minha capacidade de resolver situações difíceis.' },
        { id: 19002, text: 'Consigo manter o foco mesmo quando enfrento obstáculos.' },
        { id: 19003, text: 'Tenho iniciativa para lidar com o que precisa ser feito.' },
        { id: 19004, text: 'Sou capaz de aprender com os erros e tentar novamente.' },
        { id: 19005, text: 'Confio em mim mesmo(a) quando preciso tomar decisões importantes.' },
      ],
    },
    {
      id: 'personal_achievement_progress',
      name: 'Realização e Progresso',
      icon: '🌟',
      description: 'Sentimento de satisfação com as próprias conquistas e percepção de avanço.',
      interpretationLabels: {
        level_1: 'Sensação de estagnação.',
        level_2: 'Reconhecimento limitado de progresso.',
        level_3: 'Boa percepção de realização.',
        level_4: 'Alto senso de progresso e conquista.',
      },
      questions: [
        { id: 19101, text: 'Sinto que estou avançando em direção aos meus objetivos.' },
        { id: 19102, text: 'Tenho orgulho das conquistas que já alcancei.' },
        { id: 19103, text: 'Percebo que estou me tornando uma pessoa melhor com o tempo.' },
        { id: 19104, text: 'Tenho clareza de que meus esforços geram resultados.' },
        { id: 19105, text: 'Sinto satisfação por ver meu próprio crescimento.' },
      ],
    },
    {
      id: 'autonomy_persistence',
      name: 'Autonomia e Persistência',
      icon: '🧭',
      description: 'Capacidade de se automotivar e persistir na busca por objetivos sem depender de validação externa.',
      interpretationLabels: {
        level_1: 'Baixa persistência / Dependência.',
        level_2: 'Persistência oscilante.',
        level_3: 'Boa autonomia e disciplina.',
        level_4: 'Alta determinação e automotivação.',
      },
      questions: [
        { id: 19201, text: 'Sou capaz de manter meus planos mesmo quando surgem dificuldades.' },
        { id: 19202, text: 'Costumo terminar o que começo.' },
        { id: 19203, text: 'Tomo decisões sem depender excessivamente da aprovação dos outros.' },
        { id: 19204, text: 'Consigo me motivar mesmo quando não recebo apoio externo.' },
        { id: 19205, text: 'Tenho disciplina para seguir rotinas e compromissos pessoais.' },
      ],
    },
    {
      id: 'satisfaction_functional_self_esteem',
      name: 'Satisfação Pessoal',
      icon: '💬',
      description: 'Nível geral de contentamento com quem se é e com a vida que se leva.',
      interpretationLabels: {
        level_1: 'Insatisfação significativa.',
        level_2: 'Satisfação parcial.',
        level_3: 'Bom nível de satisfação.',
        level_4: 'Alta satisfação e aceitação.',
      },
      questions: [
        { id: 19301, text: 'Sinto-me satisfeito(a) com quem me tornei até hoje.' },
        { id: 19302, text: 'Acredito que faço bem as coisas que são importantes para mim.' },
        { id: 19303, text: 'Reconheço minhas qualidades e pontos fortes.' },
        { id: 19304, text: 'Tenho uma relação equilibrada entre autocrítica e autovalorização.' },
        { id: 19305, text: 'Sinto orgulho das atitudes que tomo no dia a dia.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de crença na própria eficácia. Escores altos correlacionam-se com maior resiliência e sucesso na obtenção de metas.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Insegurança e Dúvida', 
        description: 'Sensação de incapacidade diante dos desafios. Pode haver desânimo, evitação de tarefas difíceis ou foco excessivo nas falhas passadas.',
        recommendations: [
          'Recordar sucessos passados, mesmo que pequenos.',
          'Dividir grandes tarefas em passos minúsculos e realizáveis.',
          'Identificar modelos inspiradores (aprendizagem vicária).',
          'Celebrar o esforço, não apenas o resultado final.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Autoeficácia em Construção', 
        description: 'Confiança oscilante. O indivíduo acredita em si em áreas familiares, mas hesita diante do novo ou de obstáculos maiores.',
        recommendations: [
          'Focar no desenvolvimento de novas habilidades.',
          'Usar afirmações positivas realistas ("Eu posso aprender isso").',
          'Buscar feedback construtivo para ajustar a rota.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Confiança Funcional', 
        description: 'Boa percepção de competência. O indivíduo sente que tem recursos para lidar com a maioria das situações e se recupera bem de falhas.',
        recommendations: [
          'Assumir novos desafios que exijam um pouco mais de esforço.',
          'Ajudar outros a resolverem problemas.',
          'Manter o registro de progresso para sustentar a motivação.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Autoeficácia e Realização', 
        description: 'Forte convicção na própria capacidade de agência. O indivíduo encara problemas como desafios a serem superados e mantém alta persistência.',
        recommendations: [
          'Liderar projetos inovadores.',
          'Mentorar pessoas com baixa autoconfiança.',
          'Cuidar para não subestimar riscos devido ao excesso de confiança.'
        ]
      },
    ],
  }
};
