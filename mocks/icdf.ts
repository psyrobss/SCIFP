
import { InventoryForm } from '../types';

export const ICDF_INVENTORY: InventoryForm = {
  id: 'icdf',
  acronym: 'ICDF',
  name: 'Inventário de Correspondência entre Dizer e Fazer (ICDF)',
  objective: 'Avaliar o alinhamento entre valores, discurso e comportamento (coerência pessoal), identificando integridade e autenticidade.',
  instructions: 'Leia cada afirmação e indique o quanto ela representa o seu modo de agir habitual, utilizando a escala de 1 a 7.',
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
      id: 'personal_coherence',
      name: 'Coerência Pessoal',
      icon: '✅',
      description: 'Alinhamento consistente entre o que se diz (promessas, valores) e o que se faz.',
      interpretationLabels: {
        level_1: 'Desalinhamento frequente.',
        level_2: 'Coerência frágil.',
        level_3: 'Boa coerência.',
        level_4: 'Alta integridade discurso-ação.',
      },
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
      name: 'Percepção de Incoerência',
      icon: '🤔',
      description: 'Consciência sobre as próprias contradições e falhas em manter a palavra.',
      interpretationLabels: {
        level_1: 'Muitas contradições percebidas.',
        level_2: 'Incoerências frequentes.',
        level_3: 'Poucas contradições.',
        level_4: 'Rara percepção de incoerência.',
      },
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
      name: 'Responsabilidade e Correção',
      icon: '🔄',
      description: 'Capacidade de assumir erros e ajustar o comportamento para retomar a coerência.',
      interpretationLabels: {
        level_1: 'Evitação de responsabilidade.',
        level_2: 'Dificuldade de reparação.',
        level_3: 'Boa autorresponsabilidade.',
        level_4: 'Compromisso ativo com a integridade.',
      },
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
      name: 'Autenticidade sob Pressão',
      icon: '🎭',
      description: 'Capacidade de manter a coerência mesmo diante de pressão social para se conformar.',
      interpretationLabels: {
        level_1: 'Alta conformidade (camaleão).',
        level_2: 'Autenticidade oscilante.',
        level_3: 'Boa resistência à pressão.',
        level_4: 'Alta autenticidade pessoal.',
      },
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
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de correspondência entre dizer e fazer. Escores altos sugerem maior integridade e autenticidade.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Dissonância / Incoerência', 
        description: 'Desalinhamento significativo entre discurso e ação. Pode indicar conflito de valores, desejo de agradar ou dificuldade de autodisciplina.',
        recommendations: [
          'Identificar valores centrais e verificar se as ações atuais os refletem.',
          'Começar com pequenas promessas fáceis de cumprir para construir confiança.',
          'Aceitar que não é possível agradar a todos e focar na verdade pessoal.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Busca de Coerência', 
        description: 'O indivíduo valoriza a integridade, mas pode ceder à pressão social ou falhar na execução. A consciência da incoerência pode gerar culpa.',
        recommendations: [
          'Praticar a autocompaixão ao errar, focando na correção e não na punição.',
          'Observar situações onde a pressão social leva à incoerência.',
          'Refinar o discurso: prometer menos e entregar mais.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Coerência Funcional', 
        description: 'Bom nível de integridade. O indivíduo é confiável e suas ações geralmente correspondem às suas palavras. Falhas são ocasionais e assumidas.',
        recommendations: [
          'Manter a vigilância sobre a autenticidade em novos ambientes.',
          'Usar a coerência como base para liderança e confiança interpessoal.',
          'Continuar alinhando metas de longo prazo com valores.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Integridade e Autenticidade', 
        description: 'Forte alinhamento interno. A pessoa vive o que prega e inspira confiança. A autenticidade é mantida mesmo sob pressão.',
        recommendations: [
          'Servir de modelo de integridade para outros.',
          'Utilizar essa força para defender causas éticas.',
          'Manter a humildade para reconhecer que a coerência é um exercício diário.'
        ]
      },
    ],
  },
};
