
import { InventoryForm } from '../types';

export const IAAE_INVENTORY: InventoryForm = {
  id: 'iaae',
  acronym: 'IAAE',
  name: 'Inventário de Alexitimia e Consciência Emocional',
  objective: 'Avaliar o estilo de processamento emocional, focando na capacidade de identificar, nomear e utilizar as emoções de forma adaptativa.',
  instructions: 'As afirmações abaixo tratam de como você percebe e lida com suas emoções. Leia cada uma e assinale o quanto ela descreve o seu funcionamento habitual.',
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
      id: 'emotional_identification',
      name: 'Identificação Emocional',
      icon: '💭',
      description: 'Capacidade de reconhecer e diferenciar os próprios estados emocionais no momento em que ocorrem.',
      interpretationLabels: {
        level_1: 'Processamento difuso/concreto.',
        level_2: 'Dificuldade em distinguir nuances.',
        level_3: 'Boa identificação emocional.',
        level_4: 'Alta clareza e diferenciação.',
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
        level_1: 'Vocabulário emocional restrito.',
        level_2: 'Dificuldade em verbalizar sentimentos.',
        level_3: 'Boa expressão verbal das emoções.',
        level_4: 'Fluência e precisão na linguagem emocional.',
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
        level_1: 'Regulação reativa ou supressiva.',
        level_2: 'Oscilação no controle emocional.',
        level_3: 'Regulação funcional.',
        level_4: 'Alta integração e equilíbrio.',
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
        level_1: 'Desconexão psicossomática.',
        level_2: 'Percepção física difusa.',
        level_3: 'Boa leitura dos sinais corporais.',
        level_4: 'Alta sintonia mente-corpo.',
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
        level_1: 'Pensamento emocional polarizado.',
        level_2: 'Dificuldade com sentimentos mistos.',
        level_3: 'Capacidade de sustentar ambivalência.',
        level_4: 'Visão sofisticada e complexa das emoções.',
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
    description: 'A pontuação média (1-7) indica o estilo de processamento emocional. Escores mais altos sugerem maior clareza e integração (menor alexitimia).',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Processamento Emocional Concreto', 
        description: 'Tendência a focar em fatos externos ou sensações físicas difusas, com dificuldade em nomear sentimentos subjetivos (Traços de Alexitimia). Pode haver somatização.',
        recommendations: [
          'Treinamento básico de alfabetização emocional: usar listas de palavras para emoções.',
          'Focar no "onde" sente a emoção no corpo para começar a identificação.',
          'Validar que "não saber o que sente" é um ponto de partida aceitável.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Consciência Emocional em Desenvolvimento', 
        description: 'Reconhecimento de emoções básicas (alegria, tristeza, raiva), mas confusão em situações complexas ou sob estresse. O foco pode oscilar.',
        recommendations: [
          'Praticar a pausa reflexiva: "O que estou sentindo agora?" durante o dia.',
          'Diferenciar sentimentos de pensamentos ("Sinto que..." vs "Penso que...").',
          'Expandir o vocabulário para além de "bem" ou "mal".'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Boa Clareza Emocional', 
        description: 'Capacidade funcional de identificar e comunicar sentimentos. O indivíduo utiliza suas emoções como informações úteis para navegar na vida.',
        recommendations: [
          'Aprofundar a compreensão de emoções mistas ou ambivalentes.',
          'Utilizar a clareza emocional para melhorar a comunicação em relacionamentos.',
          'Praticar a aceitação de emoções difíceis sem tentar "consertá-las" imediatamente.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Inteligência Intrapessoal', 
        description: 'Sofisticação na leitura dos próprios estados internos. Alta integração entre corpo, mente e emoção. Capacidade de insights profundos.',
        recommendations: [
          'Utilizar essa habilidade para liderança, mentoria ou atividades criativas.',
          'Manter práticas de autocuidado para evitar sobrecarga por excesso de sensibilidade.',
          'Explorar a conexão entre valores pessoais e estados emocionais.'
        ]
      },
    ],
  }
};
