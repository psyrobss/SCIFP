
import { InventoryForm } from '../types';

export const IFA_INVENTORY: InventoryForm = {
  id: 'ifa',
  acronym: 'IFA',
  name: 'Inventário de Funcionamento Adaptativo',
  objective: 'Avaliar o grau de autonomia, regulação comportamental, autocuidado e competência para lidar com as demandas da vida cotidiana de forma independente e funcional.',
  instructions: 'Abaixo estão afirmações sobre comportamentos e atitudes do dia a dia. Leia cada item e marque o quanto ele descreve você nas últimas quatro semanas, utilizando a escala de 1 a 7.',
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
      id: 'autonomy_personal_management',
      name: 'Autonomia e Gestão Pessoal',
      icon: '🧩',
      description: 'Capacidade de organizar a própria rotina, tomar decisões e perseguir metas de forma independente.',
      interpretationLabels: {
        level_1: 'Dependência de terceiros.',
        level_2: 'Autonomia em desenvolvimento.',
        level_3: 'Boa gestão pessoal.',
        level_4: 'Alta autonomia e independência.',
      },
      questions: [
        { id: 13001, text: 'Costumo organizar meus compromissos e prazos sem depender de outras pessoas.' },
        { id: 13002, text: 'Consigo lidar bem com imprevistos e mudanças de rotina.' },
        { id: 13003, text: 'Tenho clareza sobre minhas metas pessoais e consigo persegui-las.' },
        { id: 13004, text: 'Tomo decisões importantes de forma independente.' },
        { id: 13005, text: 'Sinto-me capaz de manter uma rotina estruturada por conta própria.' },
      ],
    },
    {
      id: 'behavioral_regulation_self_control',
      name: 'Regulação Comportamental',
      icon: '⚖️',
      description: 'Habilidade de controlar impulsos, pensar antes de agir e manter o equilíbrio sob estresse.',
      interpretationLabels: {
        level_1: 'Dificuldade de controle de impulsos.',
        level_2: 'Regulação inconsistente.',
        level_3: 'Bom autocontrole.',
        level_4: 'Excelente regulação comportamental.',
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
      name: 'Autocuidado e Rotina',
      icon: '🧼',
      description: 'Prática de hábitos saudáveis relacionados a sono, alimentação, higiene e organização do ambiente.',
      interpretationLabels: {
        level_1: 'Negligência do autocuidado.',
        level_2: 'Autocuidado irregular.',
        level_3: 'Bons hábitos de saúde.',
        level_4: 'Rotina de autocuidado sólida.',
      },
      questions: [
        { id: 13201, text: 'Cuido adequadamente da minha alimentação e hidratação.' },
        { id: 13202, text: 'Mantenho uma rotina regular de sono e descanso.' },
        { id: 13203, text: 'Tenho atenção com a organização dos meus espaços pessoais.' },
        { id: 13204, text: 'Realizo atividades físicas ou de relaxamento com alguma frequência.' },
        { id: 13205, text: 'Busco ajuda quando percebo que minha saúde está prejudicada.' },
      ],
    },
    {
      id: 'social_competence_adaptation',
      name: 'Adaptação Social',
      icon: '🧍‍♂️',
      description: 'Capacidade de interagir, compreender perspectivas e adaptar-se a diferentes contextos sociais.',
      interpretationLabels: {
        level_1: 'Dificuldade de adaptação social.',
        level_2: 'Adaptação seletiva.',
        level_3: 'Boa competência social.',
        level_4: 'Alta adaptabilidade e facilidade social.',
      },
      questions: [
        { id: 13301, text: 'Consigo compreender o ponto de vista das outras pessoas, mesmo quando discordo.' },
        { id: 13302, text: 'Lido bem com críticas sem me sentir excessivamente atacado(a).' },
        { id: 13303, text: 'Costumo me adaptar bem a diferentes ambientes ou grupos.' },
        { id: 13304, text: 'Mantenho relações de confiança e respeito com pessoas próximas.' },
        { id: 13305, text: 'Sei equilibrar minhas necessidades com as dos outros.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de funcionamento adaptativo. Escores mais altos sugerem maior independência e eficácia na vida diária.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Necessidade de Suporte', 
        description: 'Indica desafios na gestão da rotina, autocuidado ou regulação emocional. O indivíduo pode se beneficiar de apoio externo para estruturar o dia a dia.',
        recommendations: [
          'Estabelecer rotinas básicas e previsíveis (horário de sono/acordar).',
          'Usar ferramentas de organização (alarmes, listas).',
          'Focar em uma pequena mudança de hábito por vez.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Adaptação em Desenvolvimento', 
        description: 'Funcionamento parcial. Algumas áreas estão preservadas, mas outras (ex: autocuidado ou controle de impulsos) podem falhar sob estresse ou cansaço.',
        recommendations: [
          'Identificar gatilhos que desorganizam a rotina.',
          'Fortalecer a rede de apoio para momentos de sobrecarga.',
          'Praticar o autocontrole em situações de baixo risco.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Funcionamento Adaptativo Eficaz', 
        description: 'Boa capacidade de gerir a própria vida. O indivíduo mantém hábitos saudáveis, cumpre responsabilidades e se relaciona bem na maioria das situações.',
        recommendations: [
          'Refinar o planejamento de longo prazo.',
          'Manter a consistência nos hábitos de autocuidado.',
          'Buscar desafios que estimulem o crescimento pessoal.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Autonomia e Adaptação', 
        description: 'Excelente nível de independência, regulação e competência social. O indivíduo navega com facilidade por diferentes contextos e cuida bem de si.',
        recommendations: [
          'Assumir papéis de liderança ou mentoria.',
          'Expandir horizontes e buscar novas experiências.',
          'Servir como modelo de equilíbrio e organização.'
        ]
      },
    ],
  }
};
