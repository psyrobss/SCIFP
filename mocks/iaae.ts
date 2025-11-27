
import { InventoryForm } from '../types';

export const IAAE_INVENTORY: InventoryForm = {
  id: 'iaae',
  acronym: 'IAAE',
  name: 'Inventário de Alexitimia e Consciência Emocional',
  objective: 'Avaliar o grau de consciência, diferenciação e expressão emocional. Uma pontuação ALTA indica BOA consciência emocional e baixa alexitimia.',
  instructions: 'As afirmações abaixo tratam de como você percebe e lida com suas emoções. Leia cada uma e assinale o quanto ela é verdadeira para você na maior parte do tempo:',
  scoreOrientation: 'higher_is_better',
  responseScale: [
    { value: 0, label: 'Nunca é verdade para mim' },
    { value: 1, label: 'Raramente é verdade para mim' },
    { value: 2, label: 'Às vezes é verdade para mim' },
    { value: 3, label: 'Frequentemente é verdade para mim' },
    { value: 4, label: 'Quase sempre é verdade para mim' },
  ],
  domains: [
    {
      id: 'emotional_identification',
      name: 'Identificação Emocional',
      icon: '💭',
      description: 'Capacidade de reconhecer e diferenciar os próprios estados emocionais no momento em que ocorrem.',
      interpretationLabels: {
        level_1: 'Forte dificuldade em reconhecer o que sente (traços alexitímicos).',
        level_2: 'Dificuldade em identificar emoções, com sentimentos confusos.',
        level_3: 'Boa capacidade de identificação, com raras confusões.',
        level_4: 'Elevada capacidade de identificar e diferenciar emoções.',
      },
      questions: [
        { id: 10001, text: 'Às vezes sinto algo, mas não sei dizer o que é.', isReversed: true },
        { id: 10002, text: 'Consigo identificar com clareza o que estou sentindo.' },
        { id: 10003, text: 'Fico confuso sobre minhas emoções.', isReversed: true },
        { id: 10004, text: 'Sei distinguir quando estou irritado, triste ou ansioso.' },
        { id: 10005, text: 'Às vezes me sinto “anestesiado” emocionalmente.', isReversed: true },
        { id: 10006, text: 'Percebo mudanças sutis no meu estado emocional.' },
        { id: 10007, text: 'Tenho dificuldade em saber o motivo exato de um mal-estar emocional.', isReversed: true },
        { id: 10008, text: 'Reconheço facilmente quando algo me afeta emocionalmente.' },
      ],
    },
    {
      id: 'emotional_naming_language',
      name: 'Nomeação e Linguagem Emocional',
      icon: '🪞',
      description: 'Habilidade de usar palavras para descrever e expressar os próprios sentimentos de forma clara.',
      interpretationLabels: {
        level_1: 'Forte dificuldade em verbalizar emoções, com comunicação mais concreta.',
        level_2: 'Dificuldade em encontrar palavras para descrever o que sente.',
        level_3: 'Boa capacidade de expressar sentimentos simples.',
        level_4: 'Elevada capacidade de verbalizar emoções com precisão.',
      },
      questions: [
        { id: 10101, text: 'Tenho facilidade em descrever o que sinto.' },
        { id: 10102, text: 'Quando estou triste ou irritado, não sei explicar o motivo.', isReversed: true },
        { id: 10103, text: 'Posso falar sobre meus sentimentos sem dificuldade.' },
        { id: 10104, text: 'Às vezes só percebo o que senti depois de muito tempo.', isReversed: true },
        { id: 10105, text: 'Consigo usar palavras precisas para expressar emoções complexas.' },
        { id: 10106, text: 'É difícil encontrar palavras certas para o que sinto.', isReversed: true },
        { id: 10107, text: 'Sei expressar emoções de forma clara quando quero me comunicar.' },
        { id: 10108, text: 'Sinto que meus sentimentos “não cabem em palavras”.', isReversed: true },
      ],
    },
    {
      id: 'emotional_regulation_integration',
      name: 'Regulação e Integração Emocional',
      icon: '⚙️',
      description: 'Capacidade de manejar emoções intensas e utilizá-las de forma construtiva para orientar decisões.',
      interpretationLabels: {
        level_1: 'Forte desregulação, com emoções que dominam o comportamento.',
        level_2: 'Dificuldade em manejar emoções, com tendência a reações impulsivas.',
        level_3: 'Boa capacidade de regulação, com raras perdas de controle.',
        level_4: 'Elevada capacidade de regulação e equilíbrio emocional.',
      },
      questions: [
        { id: 10201, text: 'Quando sinto emoções fortes, consigo entender o que as causou.' },
        { id: 10202, text: 'Tenho dificuldade em controlar minhas reações emocionais.', isReversed: true },
        { id: 10203, text: 'Consigo pensar com clareza mesmo quando estou abalado.' },
        { id: 10204, text: 'Minhas emoções às vezes me dominam completamente.', isReversed: true },
        { id: 10205, text: 'Sei usar o que sinto para orientar minhas decisões.' },
        { id: 10206, text: 'Tenho crises emocionais que não entendo.', isReversed: true },
        { id: 10207, text: 'Reconheço o que preciso quando estou mal.' },
        { id: 10208, text: 'Mesmo em situações difíceis, consigo manter equilíbrio emocional.' },
      ],
    },
    {
      id: 'body_emotion_connection',
      name: 'Conexão Corpo–Emoção',
      icon: '🌧️',
      description: 'Habilidade de perceber e associar as sensações físicas (tensão, taquicardia) com os estados emocionais.',
      interpretationLabels: {
        level_1: 'Forte desconexão corpo-emoção, com tendência à somatização.',
        level_2: 'Dificuldade em associar sintomas físicos com estados emocionais.',
        level_3: 'Boa capacidade de conectar corpo e emoção.',
        level_4: 'Elevada consciência sobre as manifestações corporais das emoções.',
      },
      questions: [
        { id: 10301, text: 'Percebo as sensações do meu corpo quando fico ansioso ou com medo.' },
        { id: 10302, text: 'Às vezes sinto desconfortos físicos e não sei se são emoções.', isReversed: true },
        { id: 10303, text: 'Consigo associar batimentos cardíacos ou tensão muscular às minhas emoções.' },
        { id: 10304, text: 'Tenho dificuldade em saber se um sintoma é físico ou emocional.', isReversed: true },
        { id: 10305, text: 'Reconheço sinais corporais de emoção, como frio na barriga ou nó na garganta.' },
        { id: 10306, text: 'Meu corpo reage emocionalmente antes que eu perceba o que sinto.', isReversed: true },
        { id: 10307, text: 'Sinto o corpo desligado das minhas emoções.', isReversed: true },
        { id: 10308, text: 'Consigo perceber quando o corpo tenta me avisar de algo emocionalmente.' },
      ],
    },
    {
      id: 'complex_emotional_awareness',
      name: 'Consciência Emocional Complexa',
      icon: '🔎',
      description: 'Capacidade de reconhecer e tolerar emoções ambivalentes ou contraditórias (ex: amor e raiva simultaneamente).',
      interpretationLabels: {
        level_1: 'Visão simplificada das emoções, com dificuldade em tolerar ambivalência.',
        level_2: 'Dificuldade em lidar com emoções contraditórias.',
        level_3: 'Boa capacidade de reconhecer sentimentos mistos.',
        level_4: 'Elevada capacidade de integrar emoções complexas e ambivalentes.',
      },
      questions: [
        { id: 10401, text: 'Percebo quando sinto emoções misturadas, como amor e raiva ao mesmo tempo.' },
        { id: 10402, text: 'Às vezes não entendo por que posso sentir coisas opostas ao mesmo tempo.', isReversed: true },
        { id: 10403, text: 'Consigo identificar camadas diferentes dentro de uma emoção.' },
        { id: 10404, text: 'Acho difícil entender emoções contraditórias.', isReversed: true },
        { id: 10405, text: 'Tenho consciência de como minhas emoções mudam durante o dia.' },
        { id: 10406, text: 'As emoções às vezes me parecem confusas e sem sentido.', isReversed: true },
        { id: 10407, text: 'Consigo refletir sobre como certas emoções se transformam em outras.' },
        { id: 10408, text: 'Tenho clareza sobre como minhas emoções se conectam às minhas necessidades.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (0-4) indica o nível de Consciência Emocional. Escores MAIS ALTOS indicam MAIOR CONSCIÊNCIA e MENOR ALEXITIMIA.',
    ranges: [
      { 
        min: 0, 
        max: 1.9, 
        label: 'Baixa Consciência (Traços de Alexitimia)', 
        description: 'Dificuldade acentuada em perceber, nomear e integrar emoções. Tendência ao pensamento concreto e somatização.',
        recommendations: [
          'Treinamento básico de alfabetização emocional (nomear emoções básicas).',
          'Uso da "Roda das Emoções" para ampliar o vocabulário afetivo.',
          'Focar nas sensações corporais como pistas para identificar emoções.',
          'Psicoterapia focada na conexão mente-corpo.'
        ]
      },
      { 
        min: 2, 
        max: 2.9, 
        label: 'Consciência Emocional Moderada', 
        description: 'Reconhecimento parcial das emoções. Pode haver confusão em situações complexas ou sob estresse.',
        recommendations: [
          'Praticar a pausa reflexiva: "O que estou sentindo agora?".',
          'Diário de emoções para identificar padrões e gatilhos.',
          'Diferenciar sentimentos mistos (ex: raiva e tristeza ao mesmo tempo).'
        ]
      },
      { 
        min: 3, 
        max: 4, 
        label: 'Consciência Emocional Elevada', 
        description: 'Alta clareza emocional, boa capacidade de nomeação, integração e uso da emoção para orientar decisões.',
        recommendations: [
          'Utilizar a inteligência emocional para liderança e gestão de conflitos.',
          'Aprofundar a compreensão de emoções complexas e existenciais.',
          'Praticar a validação emocional com outras pessoas (empatia).'
        ]
      },
    ],
  }
};
