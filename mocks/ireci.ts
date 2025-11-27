
import { InventoryForm } from '../types';

export const IRECI_INVENTORY: InventoryForm = {
  id: 'ireci',
  acronym: 'IRECI',
  name: 'Inventário de Regulação Emocional e Controle de Impulsos (IRECI)',
  objective: 'Avaliar como o indivíduo percebe e gerencia suas emoções, impulsos e reações comportamentais no cotidiano.',
  instructions: 'Abaixo estão várias afirmações sobre como você costuma reagir emocionalmente em diferentes situações. Marque a opção que melhor descreve o que costuma acontecer com você na maior parte do tempo.',
  responseScale: [
    { value: 0, label: 'Nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre' },
  ],
  domains: [
    {
      id: 'impulsivity',
      name: 'Impulsividade e Controle de Reações',
      icon: '💢',
      description: 'Avalia a tendência a agir sem pensar, reagir de forma intensa e a dificuldade em conter respostas imediatas.',
      interpretationLabels: {
        level_1: 'Bom controle de impulsos e reações.',
        level_2: 'Impulsividade leve ou em situações de alto estresse.',
        level_3: 'Dificuldades moderadas de controle, com reações intensas.',
        level_4: 'Padrão de impulsividade acentuado e disfuncional.',
      },
      questions: [
        { id: 801, text: 'Digo ou faço coisas sem pensar nas consequências.' },
        { id: 802, text: 'Tenho dificuldade em conter a raiva quando me sinto provocado(a).' },
        { id: 803, text: 'Reajo de forma intensa a situações pequenas.' },
        { id: 804, text: 'Quando fico nervoso(a), falo ou ajo de modo que depois me arrependo.' },
        { id: 805, text: 'Tenho dificuldade em parar um comportamento quando começo (comer, falar, comprar, jogar etc.).' },
        { id: 806, text: 'Tomo decisões precipitadas quando estou emocionalmente abalado(a).' },
      ],
    },
    {
      id: 'emotional_awareness',
      name: 'Consciência Emocional',
      icon: '🌊',
      description: 'Mede a capacidade de identificar, nomear e compreender os próprios estados emocionais e suas causas.',
      interpretationLabels: {
        level_1: 'Elevada dificuldade de identificar e compreender emoções.',
        level_2: 'Consciência emocional superficial ou intermitente.',
        level_3: 'Boa capacidade de nomear e diferenciar emoções.',
        level_4: 'Elevada consciência e clareza sobre o mundo emocional interno.',
      },
      questions: [
        { id: 901, text: 'Tenho dificuldade em identificar o que estou sentindo.' },
        { id: 902, text: 'Sinto emoções confusas, sem saber ao certo por quê.' },
        { id: 903, text: 'Reconheço rapidamente quando minhas emoções começam a mudar.', isReversed: true },
        { id: 904, text: 'Tenho facilidade em perceber as reações físicas associadas às minhas emoções (ex: coração acelerado).', isReversed: true },
        { id: 905, text: 'Às vezes percebo que agi emocionalmente sem ter notado o que estava sentindo.' },
      ],
    },
    {
      id: 'regulation_strategies',
      name: 'Estratégias de Regulação Emocional',
      icon: '🧘',
      description: 'Avalia o uso de estratégias adaptativas para manejar emoções, como a calma, a reavaliação cognitiva e o autocontrole.',
      interpretationLabels: {
        level_1: 'Repertório de estratégias de regulação bem desenvolvido.',
        level_2: 'Uso consistente de estratégias, com algumas dificuldades.',
        level_3: 'Repertório de estratégias limitado ou pouco utilizado.',
        level_4: 'Baixo uso de estratégias adaptativas de regulação.',
      },
      questions: [
        { id: 1001, text: 'Tento respirar fundo ou me acalmar antes de reagir.', isReversed: true },
        { id: 1002, text: 'Consigo me afastar de situações quando percebo que estou prestes a perder o controle.', isReversed: true },
        { id: 1003, text: 'Busco compreender o motivo por trás das minhas emoções.', isReversed: true },
        { id: 1004, text: 'Tento transformar pensamentos negativos em algo mais equilibrado.', isReversed: true },
        { id: 1005, text: 'Quando fico irritado(a) ou triste, consigo me acalmar sozinho(a).', isReversed: true },
        { id: 1006, text: 'Tenho estratégias pessoais que me ajudam a lidar com emoções difíceis.', isReversed: true },
      ],
    },
    {
      id: 'regulation_difficulties',
      name: 'Dificuldades em Regulação e Persistência Emocional',
      icon: '🌀',
      description: 'Mede a tendência a ficar preso em estados emocionais negativos, com dificuldade de recuperação e foco.',
      interpretationLabels: {
        level_1: 'Boa capacidade de recuperação emocional.',
        level_2: 'Dificuldades leves em se recuperar de estados negativos.',
        level_3: 'Tendência a ruminação e persistência de emoções negativas.',
        level_4: 'Forte dificuldade de regulação, com emoções que persistem e dominam.',
      },
      questions: [
        { id: 1101, text: 'Quando fico triste, demoro muito para me recuperar.' },
        { id: 1102, text: 'Sinto que pequenas frustrações acabam comigo emocionalmente.' },
        { id: 1103, text: 'Tenho dificuldade em me concentrar quando estou com raiva ou preocupado(a).' },
        { id: 1104, text: 'Quando algo dá errado, fico remoendo o acontecimento por muito tempo.' },
        { id: 1105, text: 'Tenho dificuldade em retomar o foco depois de um conflito.' },
        { id: 1106, text: 'Tenho a sensação de que as minhas emoções controlam minhas ações.' },
      ],
    },
    {
      id: 'interpersonal_impact',
      name: 'Impacto Interpessoal e Autopercepção',
      icon: '🤝',
      description: 'Avalia como a desregulação emocional impacta as relações sociais e a percepção que o indivíduo tem de si mesmo.',
      interpretationLabels: {
        level_1: 'Baixo impacto da desregulação nas relações.',
        level_2: 'Impacto leve e ocasional nos relacionamentos.',
        level_3: 'Impacto moderado e perceptível nas relações e na autoimagem.',
        level_4: 'Forte impacto negativo nas relações e na autopercepção.',
      },
      questions: [
        { id: 1201, text: 'As pessoas dizem que sou “explosivo(a)” ou “intenso(a)”.' },
        { id: 1202, text: 'Tenho me afastado de pessoas por medo de reagir mal.' },
        { id: 1203, text: 'Sinto culpa depois de reagir impulsivamente.' },
        { id: 1204, text: 'Tenho medo de perder o controle emocional em público.' },
        { id: 1205, text: 'Tenho sentido que as pessoas me evitam por causa do meu humor.' },
        { id: 1206, text: 'Acho difícil explicar minhas emoções para os outros.' },
        { id: 1207, text: 'Sinto que minhas reações emocionais prejudicam meus relacionamentos.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (0-4) indica o nível de desregulação emocional. Escores mais altos sugerem maiores dificuldades de regulação e controle de impulsos.',
    ranges: [
      { 
        min: 0, 
        max: 0.9, 
        label: 'Regulação Emocional Eficaz', 
        description: 'Boa capacidade de consciência, controle e manejo emocional. O indivíduo recupera-se rapidamente de estressores.',
        recommendations: [
          'Manter práticas de autocuidado e atenção plena.',
          'Servir como modelo de regulação em ambientes familiares ou de trabalho.',
          'Continuar desenvolvendo a inteligência emocional em situações complexas.'
        ]
      },
      { 
        min: 1, 
        max: 1.9, 
        label: 'Dificuldades Leves de Regulação', 
        description: 'Reações impulsivas ou dificuldades emocionais aparecem principalmente em situações de alto estresse ou cansaço.',
        recommendations: [
          'Identificar gatilhos específicos que levam à desregulação.',
          'Praticar técnicas de "pausa" antes de reagir (contar até 10, respiração diafragmática).',
          'Melhorar a higiene do sono e reduzir estimulantes.'
        ]
      },
      { 
        min: 2, 
        max: 2.9, 
        label: 'Desregulação Moderada', 
        description: 'Dificuldades persistentes em controlar reações e regular emoções. Impacto visível nos relacionamentos e na autoimagem.',
        recommendations: [
          'Psicoterapia (TCC ou Terapia do Esquema) para identificação de padrões.',
          'Treinamento de Habilidades Sociais e Assertividade.',
          'Práticas regulares de Mindfulness para aumentar a janela de tolerância ao estresse.',
          'Diário de emoções para monitorar padrões de reatividade.'
        ]
      },
      { 
        min: 3, 
        max: 4, 
        label: 'Desregulação Significativa', 
        description: 'Padrão de instabilidade emocional e impulsividade com forte impacto funcional. Pode indicar traços de Transtorno de Personalidade ou Transtornos de Humor.',
        recommendations: [
          'Avaliação psicológica e psiquiátrica aprofundada.',
          'Terapia Dialética Comportamental (DBT) focada em regulação emocional e tolerância ao mal-estar.',
          'Estratégias de contenção de danos para comportamentos impulsivos.',
          'Rede de apoio para momentos de crise.'
        ]
      },
    ],
  }
};
