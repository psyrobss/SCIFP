
import { InventoryForm } from '../types';

export const IRECI_INVENTORY: InventoryForm = {
  id: 'ireci',
  acronym: 'IRECI',
  name: 'Inventário de Regulação Emocional e Controle de Impulsos (IRECI)',
  objective: 'Avaliar como o indivíduo percebe e gerencia suas emoções, impulsos e reações comportamentais no cotidiano, identificando estratégias funcionais e áreas de vulnerabilidade.',
  instructions: 'As afirmações abaixo descrevem reações emocionais e comportamentais. Indique o quanto cada frase se aplica a você na maior parte do tempo, sendo honesto consigo mesmo.',
  responseScale: [
    { value: 1, label: 'Discordo Totalmente' },
    { value: 2, label: 'Discordo Fortemente' },
    { value: 3, label: 'Discordo em Parte' },
    { value: 4, label: 'Neutro / Às vezes' },
    { value: 5, label: 'Concordo em Parte' },
    { value: 6, label: 'Concordo Fortemente' },
    { value: 7, label: 'Concordo Totalmente' },
  ],
  domains: [
    {
      id: 'impulsivity',
      name: 'Impulsividade e Reatividade',
      icon: '💢',
      description: 'Tendência a agir sem pensar, reagir intensamente a estímulos e dificuldade em conter respostas imediatas.',
      interpretationLabels: {
        level_1: 'Bom controle de impulsos.',
        level_2: 'Impulsividade leve/situacional.',
        level_3: 'Dificuldade moderada de controle.',
        level_4: 'Impulsividade acentuada.',
      },
      questions: [
        { id: 801, text: 'Digo ou faço coisas no calor do momento e depois me arrependo.' },
        { id: 802, text: 'Tenho dificuldade em conter a raiva quando me sinto provocado(a).' },
        { id: 803, text: 'Reajo de forma muito intensa a situações que outros consideram pequenas.' },
        { id: 804, text: 'Quando estou nervoso(a), tenho dificuldade em pensar nas consequências.' },
        { id: 805, text: 'Tenho dificuldade em parar um comportamento impulsivo (ex: comer, comprar, falar) depois que começo.' },
        { id: 806, text: 'Tomo decisões precipitadas quando estou emocionalmente abalado(a).' },
      ],
    },
    {
      id: 'emotional_awareness',
      name: 'Consciência Emocional',
      icon: '🌊',
      description: 'Capacidade de identificar, nomear e compreender os próprios estados emocionais (Nota: Itens invertidos para indicar dificuldade).',
      interpretationLabels: {
        level_1: 'Alta consciência emocional.',
        level_2: 'Boa consciência, lapsos pontuais.',
        level_3: 'Dificuldade em identificar emoções.',
        level_4: 'Baixa consciência / confusão emocional.',
      },
      questions: [
        { id: 901, text: 'Muitas vezes não sei dizer exatamente o que estou sentindo.' },
        { id: 902, text: 'Sinto um turbilhão de emoções confusas e difíceis de separar.' },
        { id: 903, text: 'Consigo perceber rapidamente quando meu humor começa a mudar.', isReversed: true },
        { id: 904, text: 'Entendo o que minhas reações físicas (ex: tensão, taquicardia) dizem sobre meu estado emocional.', isReversed: true },
        { id: 905, text: 'Às vezes percebo que agi por emoção sem nem notar que estava sentindo aquilo.' },
      ],
    },
    {
      id: 'regulation_strategies',
      name: 'Estratégias de Regulação (Déficit)',
      icon: '🧘',
      description: 'Uso de estratégias para manejar emoções. (Nota: Pontuação alta aqui indica DIFICULDADE/Falta de estratégia, pois os itens positivos são invertidos).',
      interpretationLabels: {
        level_1: 'Estratégias eficazes presentes.',
        level_2: 'Uso inconsistente de estratégias.',
        level_3: 'Estratégias limitadas.',
        level_4: 'Falta significativa de recursos de regulação.',
      },
      questions: [
        { id: 1001, text: 'Consigo me acalmar sozinho(a) quando estou chateado(a).', isReversed: true },
        { id: 1002, text: 'Tento ver a situação por outro ângulo para me sentir melhor.', isReversed: true },
        { id: 1003, text: 'Busco entender o motivo das minhas emoções em vez de apenas reagir.', isReversed: true },
        { id: 1004, text: 'Quando estou estressado(a), consigo usar técnicas para relaxar (respirar, dar um tempo).', isReversed: true },
        { id: 1005, text: 'Sei o que fazer para melhorar meu humor quando estou triste.', isReversed: true },
        { id: 1006, text: 'Tenho rituais ou hábitos saudáveis que me ajudam a manter o equilíbrio.', isReversed: true },
      ],
    },
    {
      id: 'regulation_difficulties',
      name: 'Dificuldade de Recuperação e Ruminação',
      icon: '🌀',
      description: 'Tendência a ficar preso em estados emocionais negativos e dificuldade de retomar o equilíbrio.',
      interpretationLabels: {
        level_1: 'Recuperação rápida.',
        level_2: 'Recuperação um pouco lenta.',
        level_3: 'Ruminação e dificuldade moderada.',
        level_4: 'Dificuldade severa de recuperação.',
      },
      questions: [
        { id: 1101, text: 'Quando fico chateado(a), demoro muito tempo para me recuperar.' },
        { id: 1102, text: 'Sinto que minhas emoções "grudam" e não consigo me livrar delas.' },
        { id: 1103, text: 'Tenho dificuldade em me concentrar em outras coisas quando estou preocupado(a).' },
        { id: 1104, text: 'Fico remoendo acontecimentos passados repetidamente.' },
        { id: 1105, text: 'Tenho dificuldade em retomar minhas atividades depois de um aborrecimento.' },
        { id: 1106, text: 'Sinto que minhas emoções são fortes demais para eu controlar.' },
      ],
    },
    {
      id: 'interpersonal_impact',
      name: 'Impacto Interpessoal',
      icon: '🤝',
      description: 'Como a desregulação afeta as relações e a autoimagem.',
      interpretationLabels: {
        level_1: 'Baixo impacto nas relações.',
        level_2: 'Impacto leve ou ocasional.',
        level_3: 'Conflitos frequentes por questões emocionais.',
        level_4: 'Prejuízo significativo nos relacionamentos.',
      },
      questions: [
        { id: 1201, text: 'Pessoas próximas dizem que sou "explosivo(a)" ou "emocional demais".' },
        { id: 1202, text: 'Tenho evitado interações sociais por medo de perder o controle.' },
        { id: 1203, text: 'Frequentemente sinto culpa ou vergonha depois de expressar minhas emoções.' },
        { id: 1204, text: 'Sinto que minhas reações emocionais prejudicam meus relacionamentos.' },
        { id: 1205, text: 'Acho difícil explicar para os outros o que estou sentindo de forma calma.' },
        { id: 1206, text: 'Tenho medo de que, se eu começar a chorar ou gritar, não vou conseguir parar.' },
        { id: 1207, text: 'Sinto que as pessoas "pisam em ovos" ao meu redor.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de dificuldade na regulação emocional. Escores mais altos sugerem maiores desafios.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Regulação Emocional Eficaz', 
        description: 'Boa capacidade de consciência, controle e manejo emocional. O indivíduo recupera-se bem de estressores e usa estratégias adaptativas.',
        recommendations: [
          'Manter práticas de autocuidado e atenção plena.',
          'Servir como modelo de regulação em ambientes familiares ou de trabalho.',
          'Continuar aprimorando a inteligência emocional em situações complexas.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Desafios Leves de Regulação', 
        description: 'Reações impulsivas ou dificuldades emocionais aparecem principalmente em situações de alto estresse, cansaço ou gatilhos específicos.',
        recommendations: [
          'Identificar e monitorar gatilhos específicos (HALT: Hunger, Anger, Lonely, Tired).',
          'Praticar técnicas de "pausa" (contar até 10, respiração) antes de reagir.',
          'Melhorar a higiene do sono e reduzir estimulantes.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Desregulação Emocional Moderada', 
        description: 'Dificuldades persistentes em controlar impulsos e regular a intensidade emocional. Impacto visível nos relacionamentos e na autoimagem. Risco de ruminação.',
        recommendations: [
          'Terapia Cognitivo-Comportamental (TCC) para reestruturação cognitiva.',
          'Treino de Habilidades Sociais para expressão adequada de emoções.',
          'Práticas regulares de Mindfulness para aumentar a janela de tolerância.',
          'Diário de emoções para aumentar a consciência dos padrões.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Desregulação Significativa', 
        description: 'Padrão de instabilidade emocional, impulsividade ou dificuldade severa de recuperação. Forte impacto funcional e interpessoal. Requer atenção clínica.',
        recommendations: [
          'Avaliação clínica aprofundada (psicológica/psiquiátrica).',
          'Terapia Dialética Comportamental (DBT) focada em tolerância ao mal-estar.',
          'Estratégias de contenção de danos para comportamentos impulsivos.',
          'Fortalecimento urgente da rede de apoio.'
        ]
      },
    ],
  }
};
