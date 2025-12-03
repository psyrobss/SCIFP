
import { InventoryForm } from '../types';

export const IAAP_INVENTORY: InventoryForm = {
  id: 'iaap',
  acronym: 'IAAP',
  name: 'Inventário de Autodeterminação e Agência Pessoal',
  objective: 'Avaliar o senso de autonomia, controle interno, iniciativa e responsabilidade pessoal sobre as próprias escolhas e vida.',
  instructions: 'Indique com que frequência as afirmações abaixo descrevem o que você realmente sente ou faz em relação às suas decisões de vida, usando a escala de 1 a 7.',
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
      id: 'autonomy_authenticity',
      name: 'Autonomia e Autenticidade',
      icon: '🧩',
      description: 'Capacidade de agir de acordo com os próprios valores e não apenas por pressão externa.',
      interpretationLabels: {
        level_1: 'Alta conformidade externa.',
        level_2: 'Autonomia limitada.',
        level_3: 'Boa autenticidade.',
        level_4: 'Alta autonomia pessoal.',
      },
      questions: [
        { id: 49001, text: 'Sinto que minhas decisões refletem quem eu realmente sou.' },
        { id: 49002, text: 'Quando escolho algo, considero o que é importante para mim, não só o que esperam.' },
        { id: 49003, text: 'Tenho liberdade interna para agir de acordo com meus princípios.' },
        { id: 49004, text: 'Evito tomar decisões apenas para agradar os outros.' },
        { id: 49005, text: 'Consigo dizer “não” quando algo vai contra meus valores.' },
        { id: 49006, text: 'Frequentemente ajo por pressão, mesmo sem concordar.', isReversed: true },
        { id: 49007, text: 'Tenho clareza sobre o que quero, mesmo quando discordam de mim.' },
      ],
    },
    {
      id: 'agency_proactivity',
      name: 'Agência e Proatividade',
      icon: '🧠',
      description: 'Senso de ser o autor das próprias ações e capacidade de iniciar mudanças.',
      interpretationLabels: {
        level_1: 'Passividade ou vitimização.',
        level_2: 'Iniciativa reativa.',
        level_3: 'Boa proatividade.',
        level_4: 'Forte senso de agência.',
      },
      questions: [
        { id: 49008, text: 'Eu tomo a iniciativa quando quero que algo aconteça.' },
        { id: 49009, text: 'Sinto que tenho poder real de mudar aspectos da minha vida.' },
        { id: 49010, text: 'Sou capaz de transformar ideias em ações concretas.' },
        { id: 49011, text: 'Busco soluções em vez de esperar que os outros resolvam.' },
        { id: 49012, text: 'Encaro desafios como oportunidades de exercer minha vontade.' },
        { id: 49013, text: 'Tenho dificuldade em começar projetos por conta própria.', isReversed: true },
        { id: 49014, text: 'Quando algo dá errado, procuro aprender e tentar de novo.' },
      ],
    },
    {
      id: 'responsibility_self_regulation',
      name: 'Responsabilidade e Disciplina',
      icon: '⚖️',
      description: 'Comprometimento com as consequências das próprias escolhas e capacidade de autogestão.',
       interpretationLabels: {
        level_1: 'Dificuldade em assumir responsabilidade.',
        level_2: 'Responsabilidade oscilante.',
        level_3: 'Bom nível de compromisso.',
        level_4: 'Alta autorresponsabilidade.',
      },
      questions: [
        { id: 49015, text: 'Cumpro o que prometo a mim mesmo, mesmo quando é difícil.' },
        { id: 49016, text: 'Assumo responsabilidade total por minhas escolhas e erros.' },
        { id: 49017, text: 'Tenho disciplina para concluir o que começo.' },
        { id: 49018, text: 'Planejo minhas ações de forma consciente.' },
        { id: 49019, text: 'Quando percebo que algo não está funcionando, ajusto meu comportamento.' },
        { id: 49020, text: 'Costumo culpar as circunstâncias quando as coisas não dão certo.', isReversed: true },
        { id: 49021, text: 'Busco manter coerência entre meu discurso e minha prática.' },
      ],
    },
    {
      id: 'self_confidence_internal_control',
      name: 'Locus de Controle Interno',
      icon: '🔥',
      description: 'Crença de que se tem influência sobre os resultados da própria vida.',
       interpretationLabels: {
        level_1: 'Sensação de impotência.',
        level_2: 'Dúvida sobre a própria influência.',
        level_3: 'Crença funcional na capacidade.',
        level_4: 'Forte convicção de controle pessoal.',
      },
      questions: [
        { id: 49022, text: 'Confio na minha capacidade de lidar com o que vier.' },
        { id: 49023, text: 'Tenho segurança para tomar decisões importantes.' },
        { id: 49024, text: 'Acredito que sou o principal responsável pelo rumo da minha vida.' },
        { id: 49025, text: 'Sinto que posso influenciar os resultados do meu esforço.' },
        { id: 49026, text: 'Mantenho a confiança mesmo diante de atrasos.' },
        { id: 49027, text: 'Sinto que minha vida é controlada pela sorte ou pelos outros.', isReversed: true },
        { id: 49028, text: 'Sinto-me autor(a) do meu próprio destino.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de autodeterminação. Escores altos refletem maior autonomia, responsabilidade e protagonismo.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Dependência Externa / Passividade', 
        description: 'Tendência a deixar que outros ou as circunstâncias decidam o rumo da vida. Pode haver sentimento de impotência ou vitimização.',
        recommendations: [
          'Fortalecer a tomada de pequenas decisões diárias.',
          'Trabalhar a distinção entre o que é "meu" e o que é "do outro".',
          'Assumir responsabilidade por pequenas tarefas para construir confiança.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Autonomia em Desenvolvimento', 
        description: 'Desejo de independência existe, mas a confiança ou a disciplina podem falhar. Ainda há sensibilidade à pressão social.',
        recommendations: [
          'Identificar áreas onde se sente mais livre e expandir a partir delas.',
          'Praticar dizer "não" a demandas que não fazem sentido pessoal.',
          'Refletir sobre medos associados a assumir a responsabilidade.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Boa Capacidade de Agência', 
        description: 'O indivíduo se sente capaz de influenciar sua vida e assume as consequências de suas escolhas. É proativo na maioria das situações.',
        recommendations: [
          'Definir projetos de médio prazo que exijam autogestão.',
          'Reforçar a conexão entre esforço pessoal e resultados obtidos.',
          'Manter a vigilância para não cair no piloto automático.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Autodeterminação', 
        description: 'Protagonismo pleno. A pessoa vive de forma autêntica, guiada por valores internos e com forte senso de responsabilidade e poder pessoal.',
        recommendations: [
          'Usar a autonomia para criar, liderar e inovar.',
          'Apoiar o empoderamento de pessoas ao redor.',
          'Buscar desafios que exijam alto nível de autorregulação.'
        ]
      },
    ],
  },
};
