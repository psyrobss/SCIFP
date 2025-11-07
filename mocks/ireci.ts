
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
      questions: [
        { id: 901, text: 'Tenho dificuldade em identificar o que estou sentindo.' },
        { id: 902, text: 'Sinto emoções confusas, sem saber ao certo por quê.' },
        { id: 903, text: 'Reconheço rapidamente quando minhas emoções começam a mudar.', isReversed: true },
        { id: 904, text: 'Tenho facilidade em perceber as reações físicas associadas às minhas emoções (ex: coração acelerado, tensão).', isReversed: true },
        { id: 905, text: 'Às vezes percebo que agi emocionalmente sem ter notado o que estava sentindo.' },
      ],
    },
    {
      id: 'regulation_strategies',
      name: 'Estratégias de Regulação Emocional',
      icon: '🧘',
      description: 'Avalia o uso de estratégias adaptativas para manejar emoções, como a calma, a reavaliação cognitiva e o autocontrole.',
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
      { min: 0, max: 0.9, label: 'Regulação Emocional Eficaz', description: 'Boa capacidade de consciência, controle e manejo emocional.' },
      { min: 1, max: 1.9, label: 'Dificuldades Leves de Regulação', description: 'Reações impulsivas ou dificuldades emocionais em situações de alto estresse.' },
      { min: 2, max: 2.9, label: 'Desregulação Moderada', description: 'Dificuldades persistentes em controlar reações e regular emoções, com impacto interpessoal.' },
      { min: 3, max: 4, label: 'Desregulação Significativa', description: 'Padrão de instabilidade emocional e impulsividade com forte impacto funcional.' },
    ],
  }
};
