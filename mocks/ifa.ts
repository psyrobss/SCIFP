
import { InventoryForm } from '../types';

export const IFA_INVENTORY: InventoryForm = {
  id: 'ifa',
  acronym: 'IFA',
  name: 'Inventário de Funcionamento Adaptativo',
  objective: 'Avaliar o grau de funcionamento adaptativo do indivíduo em domínios de autonomia, regulação comportamental, autocuidado e competência social. O instrumento busca identificar como o paciente se ajusta às demandas da vida cotidiana, mantém sua independência e regula suas ações de forma funcional.',
  instructions: 'Abaixo estão afirmações sobre comportamentos e atitudes do dia a dia. Leia cada item com atenção e marque o quanto cada afirmação descreve você nas últimas quatro semanas, utilizando a escala abaixo:',
  responseScale: [
    { value: 0, label: 'Nunca ou quase nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre ou sempre' },
  ],
  domains: [
    {
      id: 'autonomy_personal_management',
      name: 'Autonomia e Gestão da Vida Pessoal',
      icon: '🧩',
      description: 'Capacidade de organizar a própria rotina, tomar decisões e perseguir metas de forma independente.',
      interpretationLabels: {
        level_1: 'Baixa autonomia, com dependência de outros para organização.',
        level_2: 'Autonomia em desenvolvimento, com algumas dificuldades de gestão.',
        level_3: 'Boa capacidade de gerir a própria vida e tomar decisões.',
        level_4: 'Elevada autonomia e senso de direção pessoal.',
      },
      questions: [
        { id: 13001, text: 'Costumo organizar meus compromissos e prazos sem depender de outras pessoas.' },
        { id: 13002, text: 'Consigo lidar bem com imprevistos e mudanças de rotina.' },
        { id: 13003, text: 'Tenho clareza sobre minhas metas pessoais e consigo persegui-las com consistência.' },
        { id: 13004, text: 'Tomo decisões importantes de forma independente, mesmo quando recebo opiniões externas.' },
        { id: 13005, text: 'Sinto-me capaz de manter uma rotina estruturada por conta própria.' },
      ],
    },
    {
      id: 'behavioral_regulation_self_control',
      name: 'Regulação Comportamental e Autocontrole',
      icon: '⚖️',
      description: 'Habilidade de controlar impulsos, pensar antes de agir e manter o equilíbrio emocional em situações de estresse.',
      interpretationLabels: {
        level_1: 'Baixo autocontrole, com tendência a reações impulsivas.',
        level_2: 'Autocontrole inconsistente, com dificuldades sob pressão.',
        level_3: 'Bom nível de regulação comportamental e emocional.',
        level_4: 'Elevado autocontrole e capacidade de ponderar antes de agir.',
      },
      questions: [
        { id: 13101, text: 'Quando fico irritado(a), consigo me acalmar antes de agir.' },
        { id: 13102, text: 'Penso nas consequências antes de tomar decisões importantes.' },
        { id: 13103, text: 'Evito agir por impulso em situações emocionais.' },
        { id: 13104, text: 'Consigo manter o foco em tarefas mesmo quando perco o interesse inicial.' },
        { id: 13105, text: 'Tenho facilidade para retomar o equilíbrio depois de cometer um erro.' },
      ],
    },
    {
      id: 'self_care_personal_organization',
      name: 'Autocuidado e Organização Pessoal',
      icon: '🧼',
      description: 'Prática de hábitos saudáveis relacionados a sono, alimentação, higiene e organização do ambiente pessoal.',
      interpretationLabels: {
        level_1: 'Baixo nível de autocuidado, com hábitos negligenciados.',
        level_2: 'Autocuidado irregular, com inconsistências na rotina.',
        level_3: 'Bons hábitos de autocuidado e organização.',
        level_4: 'Elevado compromisso com a saúde e o bem-estar pessoal.',
      },
      questions: [
        { id: 13201, text: 'Cuido adequadamente da minha alimentação e hidratação.' },
        { id: 13202, text: 'Mantenho uma rotina regular de sono e descanso.' },
        { id: 13203, text: 'Tenho atenção com a limpeza e organização dos meus espaços pessoais.' },
        { id: 13204, text: 'Realizo atividades físicas ou de relaxamento com alguma frequência.' },
        { id: 13205, text: 'Busco ajuda quando percebo que minha saúde física ou mental está prejudicada.' },
      ],
    },
    {
      id: 'social_competence_adaptation',
      name: 'Competência e Adaptação Social',
      icon: '🧍‍♂️',
      description: 'Capacidade de interagir de forma respeitosa, compreender outras perspectivas e adaptar-se a diferentes contextos sociais.',
      interpretationLabels: {
        level_1: 'Baixa competência social, com dificuldades de interação.',
        level_2: 'Habilidades sociais em desenvolvimento, com dificuldades pontuais.',
        level_3: 'Boa capacidade de adaptação e interação social.',
        level_4: 'Elevada competência social, com facilidade de navegação em diferentes contextos.',
      },
      questions: [
        { id: 13301, text: 'Consigo compreender o ponto de vista das outras pessoas, mesmo quando discordo.' },
        { id: 13302, text: 'Lido bem com críticas sem me sentir excessivamente atacado(a).' },
        { id: 13303, text: 'Costumo me adaptar bem a diferentes ambientes ou grupos sociais.' },
        { id: 13304, text: 'Mantenho relações de confiança e respeito com pessoas próximas.' },
        { id: 13305, text: 'Sei equilibrar minhas necessidades com as dos outros nas interações diárias.' },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'A pontuação é a soma total das respostas (0-80). Pontuações mais altas indicam melhor funcionamento adaptativo.',
    ranges: [
      { min: 60, max: 80, label: 'Excelente funcionamento adaptativo', description: 'Alto grau de autonomia e regulação.' },
      { min: 40, max: 59, label: 'Funcionamento adequado', description: 'Boa adaptação com áreas pontuais a desenvolver.' },
      { min: 20, max: 39, label: 'Funcionamento moderado', description: 'Dificuldades consistentes em autorregulação e autonomia.' },
      { min: 0, max: 19, label: 'Funcionamento comprometido', description: 'Indícios de desorganização ou dependência significativa.' },
    ],
  }
};
