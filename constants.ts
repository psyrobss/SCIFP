import { Module } from './types';

export const MODULES: Module[] = [
  {
    id: 1,
    title: 'MÓDULO 1 – COGNITIVO-NEUROPSICOLÓGICO',
    description: 'Inventários de percepção cognitiva e funcionamento mental',
    inventories: [
      { id: 1, icon: '✅', acronym: 'IANA', name: 'Inventário de Alterações Neuropsicológicas' },
      { id: 2, icon: '✅', acronym: 'IFEC', name: 'Inventário de Funções Executivas no Cotidiano' },
      { id: 3, icon: '✅', acronym: 'IAPM', name: 'Inventário de Atenção e Processamento Mental' },
      { id: 4, icon: '✅', acronym: 'IFMSC', name: 'Inventário de Fadiga Mental e Sobrecarga Cognitiva' },
    ],
  },
  {
    id: 2,
    title: 'MÓDULO 2 – REGULAÇÃO EMOCIONAL E PERSONALIDADE FUNCIONAL',
    description: 'Explora mecanismos afetivos, autorregulação e estilo emocional',
    inventories: [
      { id: 5, icon: '✅', acronym: 'IRECI', name: 'Inventário de Regulação Emocional e Controle de Impulsos' },
      { id: 6, icon: '✅', acronym: 'IAAE', name: 'Inventário de Alexitimia e Consciência Emocional' },
      { id: 7, icon: '✅', acronym: 'IEPI', name: 'Inventário de Estilo de Personalidade Interpessoal' },
      { id: 8, icon: '✅', acronym: 'IEVA', name: 'Inventário de Esquemas e Vulnerabilidades Afetivas' },
      { id: 23, icon: '✅', acronym: 'IES', name: 'Inventário de Estilos de Sofrimento' },
      { id: 26, icon: '✅', acronym: 'IOP', name: 'Inventário de Organização Psíquica' },
    ],
  },
  {
    id: 3,
    title: 'MÓDULO 3 – PROCESSOS TERAPÊUTICOS E METACOGNITIVOS',
    description: 'Instrumentos voltados à compreensão e manejo dentro da TCC e terapias integrativas',
    inventories: [
      { id: 9, icon: '✅', acronym: 'IPM', name: 'Inventário de Psychological Mindedness (IPM)' },
      { id: 10, icon: '✅', acronym: 'IRPT', name: 'Inventário de Resistência Psicoterápica' },
      { id: 11, icon: '✅', acronym: 'IEC', name: 'Inventário de Estratégias Cognitivas' },
      { id: 12, icon: '✅', acronym: 'IAC', name: 'Inventário de Aliança e Colaboração Terapêutica' },
      { id: 13, icon: '✅', acronym: 'IAT', name: 'Inventário de Autoanálise e Insight Terapêutico' },
      { id: 20, icon: '✅', acronym: 'IAEC', name: 'Inventário de Autocrítica e Esquemas Centrais' },
      { id: 21, icon: '✅', acronym: 'IAME', name: 'Inventário de Autoconsciência e Metacognição Emocional' },
      { id: 22, icon: '✅', acronym: 'IMC', name: 'Inventário de Metacognição Clínica' },
      { id: 24, icon: '✅', acronym: 'IQE', name: 'Inventário de Qualidade Existencial' },
      { id: 27, icon: '✅', acronym: 'ICTE', name: 'Inventário de Consciência Temporal e Existencial' },
    ],
  },
  {
    id: 4,
    title: 'MÓDULO 4 – FUNCIONAMENTO SOCIAL E ADAPTATIVO',
    description: 'Instrumentos para avaliar integração, empatia e enfrentamento social',
    inventories: [
      { id: 14, icon: '✅', acronym: 'IAPE', name: 'Inventário de Processamento Emocional e Empatia' },
      { id: 15, icon: '✅', acronym: 'IFA', name: 'Inventário de Funcionamento Adaptativo' },
      { id: 16, icon: '✅', acronym: 'IASO', name: 'Inventário de Assertividade e Sociabilidade' },
      { id: 25, icon: '✅', acronym: 'ISA', name: 'Inventário de Satisfação e Autoeficácia' },
    ],
  },
  {
    id: 5,
    title: 'MÓDULO 5 – SAÚDE MENTAL E COMPORTAMENTOS DE RISCO',
    description: 'Instrumentos para triagem clínica e psicoeducacional',
    inventories: [
      { id: 17, icon: '✅', acronym: 'IDSE', name: 'Inventário de Sintomas de Estresse e Exaustão' },
      { id: 18, icon: '✅', acronym: 'ISSM', name: 'Inventário de Sono, Saúde e Motivação' },
      { id: 19, icon: '✅', acronym: 'ICCR', name: 'Inventário de Comportamentos Compulsivos e Repetitivos' },
    ],
  },
];