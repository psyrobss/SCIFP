
import { InventoryForm } from '../types';

export const ICDF_INVENTORY: InventoryForm = {
  id: 'icdf',
  acronym: 'ICDF',
  name: 'Inventário de Correspondência entre Dizer e Fazer (ICDF)',
  objective: 'Avaliar o alinhamento entre o que o indivíduo afirma (valores, intenções, promessas ou compromissos) e o que efetivamente realiza em seu comportamento cotidiano. Mede tanto a consistência comportamental quanto a autopercepção de coerência.',
  instructions: 'Leia cada afirmação e indique o quanto ela representa o seu modo de agir, utilizando a seguinte escala:',
  responseScale: [
    { value: 1, label: 'Nunca' },
    { value: 2, label: 'Raramente' },
    { value: 3, label: 'Às vezes' },
    { value: 4, label: 'Frequentemente' },
    { value: 5, label: 'Sempre' },
  ],
  domains: [
    {
      id: 'personal_coherence',
      name: 'Coerência Pessoal',
      icon: '✅',
      description: 'Avalia o alinhamento entre promessas, valores e ações.',
      questions: [
        { id: 73001, text: 'Cumpro o que prometo, mesmo quando é difícil.' },
        { id: 73002, text: 'O que eu digo sobre mim combina com o que as pessoas veem nas minhas ações.' },
        { id: 73003, text: 'Quando defendo um valor, ajo de forma compatível com ele.' },
        { id: 73004, text: 'Procuro manter minhas palavras e atitudes alinhadas.' },
        { id: 73005, text: 'Evito justificar comportamentos que contradizem o que acredito.' },
      ],
    },
    {
      id: 'incoherence_self_perception',
      name: 'Autopercepção de Incoerência',
      icon: '🤔',
      description: 'Mede a consciência sobre as próprias inconsistências entre discurso e prática.',
      questions: [
        { id: 73006, text: 'Percebo que às vezes falo coisas que não coloco em prática.', isReversed: true },
        { id: 73007, text: 'Já defendi uma ideia apenas para agradar os outros, sem realmente acreditar nela.', isReversed: true },
        { id: 73008, text: 'Tenho dificuldade em manter minhas promessas pessoais.', isReversed: true },
        { id: 73009, text: 'Mudo de opinião facilmente quando minhas ações não correspondem ao que digo.', isReversed: true },
        { id: 73010, text: 'Sinto desconforto quando percebo que não ajo conforme o que prego.', isReversed: true },
      ],
    },
    {
      id: 'responsibility_self_regulation',
      name: 'Responsabilidade e Autorregulação',
      icon: '🔄',
      description: 'Avalia a capacidade de assumir e corrigir as próprias incoerências.',
      questions: [
        { id: 73011, text: 'Admito quando falho em cumprir algo que prometi.' },
        { id: 73012, text: 'Esforço-me para corrigir inconsistências entre o que digo e o que faço.' },
        { id: 73013, text: 'Peço desculpas quando percebo que não agi conforme o que disse que faria.' },
        { id: 73014, text: 'Busco aprender com minhas incoerências.' },
        { id: 73015, text: 'Tenho orgulho quando ajo de forma coerente com minhas palavras.' },
      ],
    },
    {
      id: 'social_pressure_authenticity',
      name: 'Pressão Social e Autenticidade',
      icon: '🎭',
      description: 'Mede o impacto da pressão social na coerência entre valores e comportamento.',
      questions: [
        { id: 73016, text: 'Às vezes digo o que os outros esperam, mesmo sem acreditar realmente.', isReversed: true },
        { id: 73017, text: 'Sinto necessidade de agradar, mesmo que isso me leve a agir contra meus valores.', isReversed: true },
        { id: 73018, text: 'Em grupos, adapto meu discurso para evitar conflito.', isReversed: true },
        { id: 73019, text: 'Tenho medo de ser visto como incoerente, mesmo quando ajo com autenticidade.', isReversed: true },
        { id: 73020, text: 'Valorizo mais a honestidade comigo mesmo do que a aprovação dos outros.' },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'A pontuação total indica o nível de correspondência entre o discurso e a ação. Pontuações mais altas refletem maior coerência.',
    notes: [
      'Itens de "Autopercepção de Incoerência" e os quatro primeiros de "Pressão Social" são revertidos. A pontuação é calculada de 20 a 100.'
    ],
    ranges: [
        { min: 80, max: 100, label: 'Alta correspondência', description: 'Coerência autêntica e estável entre discurso e ação.' },
        { min: 60, max: 79, label: 'Boa coerência', description: 'Lapsos ocasionais, comumente sob pressão social.' },
        { min: 40, max: 59, label: 'Coerência moderada', description: 'Presença de contradições internas que podem gerar desconforto ou conflito.' },
        { min: 20, max: 39, label: 'Incoerência significativa', description: 'Desalinhamento marcante entre dizer e fazer, com possível dissociação entre valores e conduta.' },
    ],
  },
};
