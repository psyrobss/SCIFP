
import { InventoryForm } from '../types';

export const IFPM_INVENTORY: InventoryForm = {
  id: 'ifpm',
  acronym: 'IFPM',
  name: 'Inventário de Planejamento Futuro e Projeção de Metas',
  objective: 'Avaliar a capacidade do indivíduo de estabelecer metas, planejar ações futuras, prever obstáculos e organizar estratégias para alcançar objetivos pessoais e profissionais de forma estruturada e realista.',
  instructions: 'Leia cada afirmação e indique com que frequência você vivencia o comportamento ou atitude descrita ao pensar ou agir em direção a objetivos futuros.',
  responseScale: [
    { value: 0, label: 'Nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre' },
  ],
  domains: [
    {
      id: 'goal_setting',
      name: 'Estabelecimento de Metas',
      icon: '📌',
      description: 'Avalia a habilidade de definir objetivos claros, específicos e realistas.',
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
      description: 'Avalia a capacidade de estruturar ações, prazos e estratégias para atingir metas.',
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
      name: 'Previsão de Obstáculos e Soluções',
      icon: '🎯',
      description: 'Avalia a capacidade de antecipar dificuldades e criar estratégias para superá-las.',
      questions: [
        { id: 70015, text: 'Consigo identificar possíveis obstáculos antes de iniciar um projeto.' },
        { id: 70016, text: 'Frequentemente não consigo prever problemas que surgem em meus planos.', isReversed: true },
        { id: 70017, text: 'Crio alternativas para contornar dificuldades antecipadas.' },
        { id: 70018, text: 'Reajo de forma excessiva quando imprevistos comprometem meus planos.', isReversed: true },
        { id: 70019, text: 'Considero riscos e consequências ao tomar decisões relacionadas às metas.' },
        { id: 70020, text: 'Sinto dificuldade em planejar soluções para situações imprevistas.', isReversed: true },
        { id: 70021, text: 'Mantenho a calma e foco quando encontro obstáculos inesperados.' },
      ],
    },
    {
      id: 'motivation_persistence',
      name: 'Motivação e Persistência',
      icon: '🚀',
      description: 'Avalia a capacidade de manter esforço, comprometimento e disciplina até alcançar objetivos.',
      questions: [
        { id: 70022, text: 'Persisto nos meus objetivos mesmo quando encontro dificuldades.' },
        { id: 70023, text: 'Desisto facilmente de metas quando surgem desafios.', isReversed: true },
        { id: 70024, text: 'Sinto-me motivado(a) a alcançar minhas metas diariamente.' },
        { id: 70025, text: 'Frequentemente procrastino ou adio tarefas importantes.', isReversed: true },
        { id: 70026, text: 'Consigo manter disciplina e foco mesmo em atividades monótonas ou desafiadoras.' },
        { id: 70027, text: 'Busco recompensas e feedbacks para me manter engajado(a) em meus objetivos.' },
        { id: 70028, text: 'Meu comprometimento com metas pessoais ou profissionais é instável.', isReversed: true },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'Pontuação total: 0–112. Itens invertidos: 2, 4, 6, 9, 11, 13, 16, 18, 20, 23, 25, 28.',
    ranges: [
      { min: 0, max: 28, label: 'Muito baixo', description: 'Dificuldade significativa em estabelecer metas, planejar e persistir' },
      { min: 29, max: 56, label: 'Baixo', description: 'Habilidades iniciais, inconsistentes na projeção e planejamento de metas' },
      { min: 57, max: 84, label: 'Funcional', description: 'Boa capacidade de definir objetivos, planejar e manter esforço consistente' },
      { min: 85, max: 112, label: 'Elevado', description: 'Alta competência em planejamento estratégico, antecipação de obstáculos e persistência' },
    ],
  },
};