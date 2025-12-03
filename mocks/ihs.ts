
import { InventoryForm } from '../types';

export const IHS_INVENTORY: InventoryForm = {
  id: 'ihs',
  acronym: 'IHS',
  name: 'Inventário de Habilidades Sociais Clínicas',
  objective: 'Avaliar competências sociais centrais para interação interpessoal funcional: comunicação, empatia, iniciação de relações, gestão de conflitos e cooperação.',
  instructions: 'Abaixo estão frases sobre como você costuma se comportar e interagir. Leia cada frase e assinale a opção que melhor representa como você geralmente age nas últimas 4 semanas, usando a escala de 1 a 7.',
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
      id: 'assertive_communication',
      name: 'Comunicação Assertiva',
      icon: '💬',
      description: 'Habilidade de expressar pensamentos e sentimentos de forma direta e respeitosa, defendendo direitos próprios.',
      interpretationLabels: {
        level_1: 'Comunicação passiva ou inibida.',
        level_2: 'Assertividade inconsistente.',
        level_3: 'Boa comunicação assertiva.',
        level_4: 'Alta assertividade e clareza.',
      },
      questions: [
        { id: 27001, text: 'Consigo expressar minhas opiniões de forma clara, mesmo quando discordo.' },
        { id: 27002, text: 'Tenho dificuldade em dizer "não" a pedidos que não quero atender.', isReversed: true },
        { id: 27003, text: 'Sei como pedir favores ou fazer solicitações de forma educada.' },
        { id: 27004, text: 'Quando algo me incomoda, consigo comunicar meu desconforto de maneira construtiva.' },
        { id: 27005, text: 'Evito dar minha opinião para não gerar conflitos.', isReversed: true },
      ],
    },
    {
      id: 'empathy_listening',
      name: 'Empatia e Escuta Ativa',
      icon: '👂',
      description: 'Capacidade de ouvir atentamente, compreender a perspectiva do outro e demonstrar interesse.',
      interpretationLabels: {
        level_1: 'Dificuldade de escuta.',
        level_2: 'Escuta seletiva.',
        level_3: 'Boa escuta empática.',
        level_4: 'Excelente acolhimento e compreensão.',
      },
      questions: [
        { id: 27006, text: 'Procuro entender o ponto de vista da outra pessoa antes de responder.' },
        { id: 27007, text: 'Demonstro interesse genuíno pelo que os outros estão dizendo.' },
        { id: 27008, text: 'Enquanto alguém fala, costumo pensar no que vou dizer em seguida.', isReversed: true },
        { id: 27009, text: 'Consigo perceber e validar os sentimentos de outras pessoas.' },
        { id: 27010, text: 'Tenho dificuldade em me concentrar totalmente no que o outro fala.', isReversed: true },
      ],
    },
    {
      id: 'relationship_initiation_maintenance',
      name: 'Iniciação e Manutenção de Vínculos',
      icon: '🤝',
      description: 'Habilidade de fazer novos contatos e manter relacionamentos saudáveis ao longo do tempo.',
      interpretationLabels: {
        level_1: 'Isolamento ou dificuldade de contato.',
        level_2: 'Iniciativa social baixa.',
        level_3: 'Boa capacidade de socialização.',
        level_4: 'Facilidade em criar e manter laços.',
      },
      questions: [
        { id: 27011, text: 'Sinto-me à vontade para iniciar conversas com pessoas que não conheço.' },
        { id: 27012, text: 'Tenho dificuldade em manter contato com amigos e conhecidos.', isReversed: true },
        { id: 27013, text: 'Sei como demonstrar interesse para construir uma nova amizade.' },
        { id: 27014, text: 'Evito eventos sociais onde não conheço ninguém.', isReversed: true },
        { id: 27015, text: 'Consigo manter conversas fluindo de forma natural.' },
      ],
    },
    {
      id: 'conflict_management_negotiation',
      name: 'Negociação e Manejo de Conflitos',
      icon: '⚖️',
      description: 'Capacidade de lidar com desacordos, negociar soluções e aceitar críticas.',
      interpretationLabels: {
        level_1: 'Reatividade ou esquiva em conflitos.',
        level_2: 'Dificuldade de negociação.',
        level_3: 'Boa gestão de divergências.',
        level_4: 'Alta competência em resolução de conflitos.',
      },
      questions: [
        { id: 27016, text: 'Quando surge um desacordo, busco uma solução boa para ambos.' },
        { id: 27017, text: 'Consigo manter a calma e o respeito durante uma discussão.' },
        { id: 27018, text: 'Costumo ceder facilmente só para evitar confrontos.', isReversed: true },
        { id: 27019, text: 'Sei como defender meus limites de forma firme, mas respeitosa.' },
        { id: 27020, text: 'Lido bem com críticas construtivas sem me sentir atacado(a).' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o repertório de habilidades sociais. Escores altos sugerem competência interpessoal e facilidade de adaptação.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Déficit em Habilidades Sociais', 
        description: 'Dificuldades significativas em interação, podendo gerar isolamento, mal-entendidos ou conflitos frequentes. Pode haver ansiedade social associada.',
        recommendations: [
          'Treinamento de Habilidades Sociais (THS) focado em comportamentos básicos (olhar, tom de voz).',
          'Role-play (ensaio) de situações sociais simples.',
          'Identificar pensamentos que bloqueiam a interação ("vão rir de mim").'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Habilidades em Desenvolvimento', 
        description: 'O indivíduo possui recursos básicos, mas pode falhar em situações mais complexas ou emocionalmente carregadas (ex: receber críticas).',
        recommendations: [
          'Praticar a escuta ativa conscientemente.',
          'Aprender técnicas de comunicação não-violenta (CNV).',
          'Observar e modelar pessoas socialmente habilidosas.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Bom Repertório Social', 
        description: 'Habilidades adequadas para a maioria das situações cotidianas. Consegue fazer amigos, trabalhar em equipe e defender seus direitos.',
        recommendations: [
          'Refinar a assertividade em situações de alta pressão.',
          'Expandir o círculo social para grupos diversos.',
          'Praticar a empatia profunda em relacionamentos íntimos.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Competência Social', 
        description: 'Excelente desenvoltura, liderança e inteligência interpessoal. Capacidade de mediar conflitos e criar conexões profundas.',
        recommendations: [
          'Assumir posições que exijam negociação ou gestão de pessoas.',
          'Ensinar ou mentorar outros em habilidades de comunicação.',
          'Utilizar a influência social para causas positivas.'
        ]
      },
    ],
  }
};
