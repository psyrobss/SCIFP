

import { InventoryForm } from '../types';

export const ICSE_INVENTORY: InventoryForm = {
  id: 'icse',
  acronym: 'ICSE',
  name: 'Inventário de Coerência do Self e Existência',
  objective: 'Avaliar o grau de alinhamento interno entre identidade, valores e propósito de vida, bem como a integração entre o self pessoal e o sentido existencial.',
  instructions: 'Este inventário tem o objetivo de compreender como você percebe a coerência entre quem você é, o que acredita e o modo como vive.\nLeia atentamente cada frase e indique o quanto ela se aplica a você, usando a escala:',
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
      id: 'internal_coherence_authenticity',
      name: 'Coerência Interna e Autenticidade',
      icon: '🌿',
      description: 'Avalia o quanto os pensamentos, emoções e ações da pessoa estão integrados e coerentes.',
      interpretationLabels: {
        level_1: 'Forte incoerência e falta de autenticidade.',
        level_2: 'Incoerência moderada, com conflitos internos.',
        level_3: 'Boa coerência e autenticidade.',
        level_4: 'Elevada coerência e integração interna.',
      },
      questions: [
        { id: 25001, text: 'Me sinto a mesma pessoa por dentro e por fora.' },
        { id: 25002, text: 'Às vezes ajo de forma contrária ao que acredito.', isReversed: true },
        { id: 25003, text: 'Sinto que minhas ações refletem meus valores.' },
        { id: 25004, text: 'Tenho dificuldade em entender o que realmente quero.', isReversed: true },
        { id: 25005, text: 'Costumo perceber um conflito entre o que penso e o que faço.', isReversed: true },
      ],
    },
    {
      id: 'existential_clarity_meaning',
      name: 'Clareza Existencial e Sentido de Vida',
      icon: '🔎',
      description: 'Explora a percepção de propósito, sentido e direção na existência.',
      interpretationLabels: {
        level_1: 'Forte sensação de vazio e falta de propósito.',
        level_2: 'Propósito de vida pouco claro ou indefinido.',
        level_3: 'Bom senso de direção e significado.',
        level_4: 'Elevada clareza existencial e forte senso de propósito.',
      },
      questions: [
        { id: 25006, text: 'Tenho clareza sobre o que dá sentido à minha vida.' },
        { id: 25007, text: 'Frequentemente me pergunto qual é o propósito da minha existência (com sensação de dúvida).', isReversed: true },
        { id: 25008, text: 'Sinto que minha vida carece de um objetivo definido.', isReversed: true },
        { id: 25009, text: 'As decisões que tomo têm um significado pessoal profundo.' },
        { id: 25010, text: 'Às vezes vivo no “automático”, sem refletir sobre o sentido das coisas.', isReversed: true },
      ],
    },
    {
      id: 'congruence_values_behaviors',
      name: 'Congruência entre Valores e Comportamentos',
      icon: '🧩',
      description: 'Avalia o quanto a conduta da pessoa é consistente com seus princípios e crenças.',
      interpretationLabels: {
        level_1: 'Forte incongruência entre valores e comportamentos.',
        level_2: 'Incongruência moderada, com ações que contradizem valores.',
        level_3: 'Boa congruência e alinhamento entre valores e ações.',
        level_4: 'Elevada congruência e consistência de comportamento.',
      },
      questions: [
        { id: 25011, text: 'Tento agir de acordo com o que considero certo.' },
        { id: 25012, text: 'Muitas vezes percebo que vivo de modo incoerente com o que defendo.', isReversed: true },
        { id: 25013, text: 'Tenho orgulho das escolhas que faço porque refletem meus valores.' },
        { id: 25014, text: 'Sinto que me adapto demais às circunstâncias, perdendo meus princípios.', isReversed: true },
        { id: 25015, text: 'Quando tomo decisões, penso se elas estão de acordo com meus valores.' },
      ],
    },
    {
      id: 'temporal_self_integration',
      name: 'Integração Temporal do Self',
      icon: '🪶',
      description: 'Explora a continuidade e integração entre o passado, o presente e o futuro.',
      interpretationLabels: {
        level_1: 'Forte sensação de fragmentação temporal.',
        level_2: 'Dificuldade em conectar passado, presente e futuro.',
        level_3: 'Boa integração e senso de continuidade da história de vida.',
        level_4: 'Elevada integração temporal e narrativa de vida coerente.',
      },
      questions: [
        { id: 25016, text: 'Tenho uma narrativa coerente sobre minha trajetória de vida.' },
        { id: 25017, text: 'Sinto que o meu “eu” do passado e o do presente são muito diferentes (desconexão).', isReversed: true },
        { id: 25018, text: 'Consigo ver uma linha de continuidade nas minhas experiências.' },
        { id: 25019, text: 'Tenho dificuldade em conectar o que vivi com quem sou hoje.', isReversed: true },
        { id: 25020, text: 'As mudanças que vivi me deixaram mais confuso sobre quem sou.', isReversed: true },
      ],
    },
    {
      id: 'existential_unity_acceptance',
      name: 'Unidade Existencial e Aceitação',
      icon: '🌌',
      description: 'Avalia a integração entre aspectos racionais, emocionais e espirituais do self.',
      interpretationLabels: {
        level_1: 'Forte sensação de divisão interna e falta de aceitação.',
        level_2: 'Dificuldade em aceitar e integrar contradições internas.',
        level_3: 'Boa capacidade de aceitação e unidade existencial.',
        level_4: 'Elevado senso de unidade e aceitação das complexidades do self.',
      },
      questions: [
        { id: 25021, text: 'Consigo aceitar contradições dentro de mim sem me sentir perdido.' },
        { id: 25022, text: 'Tenho dificuldade em aceitar partes de mim que não compreendo.', isReversed: true },
        { id: 25023, text: 'Sinto uma harmonia entre razão, emoção e espiritualidade.' },
        { id: 25024, text: 'Às vezes me sinto dividido entre várias formas de ser.', isReversed: true },
        { id: 25025, text: 'Estou aprendendo a viver de forma mais coerente com quem sou.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de coerência existencial. Pontuações mais altas refletem maior integridade, autenticidade e sentido de propósito.',
    notes: ['Itens que representam incoerência, dúvida ou fragmentação são invertidos na pontuação.'],
    ranges: [
       { 
         min: 1, 
         max: 2.5, 
         label: 'Fragmentação Existencial', 
         description: 'Fragmentação interna, falta de propósito e forte conflito entre valores e ações. Pode haver sensação de vazio ou de viver uma "vida falsa".',
         recommendations: [
           'Trabalho focado na descoberta de valores pessoais.',
           'Reduzir a dissonância cognitiva através de pequenas ações coerentes.',
           'Explorar a autenticidade em um ambiente seguro.'
         ]
       },
       { 
         min: 2.51, 
         max: 4.0, 
         label: 'Busca de Coerência', 
         description: 'Conflito perceptível entre valores e ações, com alguma falta de propósito. O indivíduo deseja ser coerente, mas cede a pressões externas.',
         recommendations: [
           'Identificar as pressões sociais que impedem a autenticidade.',
           'Praticar a tomada de decisão baseada em princípios.',
           'Fortalecer o "Eu Observador" para notar contradições sem julgamento.'
         ]
       },
       { 
         min: 4.01, 
         max: 5.5, 
         label: 'Coerência Funcional', 
         description: 'Bom alinhamento interno, com conflitos pontuais ou situacionais. O indivíduo geralmente vive de acordo com o que acredita.',
         recommendations: [
           'Refinar a sintonia fina entre intuição e razão.',
           'Manter a vigilância sobre a integridade em situações desafiadoras.',
           'Aprofundar o sentido de propósito.'
         ]
       },
       { 
         min: 5.51, 
         max: 7, 
         label: 'Alta Coerência e Integração', 
         description: 'Autenticidade, clareza existencial e forte congruência pessoal. Sentimento de unidade e paz interior.',
         recommendations: [
           'Viver como exemplo de integridade.',
           'Dedicar-se a causas maiores que o self.',
           'Manter a humildade e a abertura ao crescimento contínuo.'
         ]
       },
    ],
  },
};
