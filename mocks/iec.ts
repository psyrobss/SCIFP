
import { InventoryForm } from '../types';

export const IEC_INVENTORY: InventoryForm = {
  id: 'iec',
  acronym: 'IEC',
  name: 'Inventário de Estratégias Cognitivas (IEC)',
  objective: 'Mapear as ferramentas mentais utilizadas para lidar com pensamentos e emoções, identificando o equilíbrio entre estratégias de processamento repetitivo (ruminação) e estratégias de flexibilidade (aceitação, reavaliação).',
  instructions: 'As frases abaixo descrevem o que você costuma fazer com seus pensamentos em momentos difíceis. Indique a frequência de cada comportamento na escala de 1 a 7.',
  scoreOrientation: 'higher_is_worse',
  responseScale: [
    { value: 1, label: 'Nunca' },
    { value: 2, label: 'Raramente' },
    { value: 3, label: 'Às vezes' },
    { value: 4, label: 'Neutro / Misto' },
    { value: 5, label: 'Frequentemente' },
    { value: 6, label: 'Muito Frequentemente' },
    { value: 7, label: 'Quase Sempre' },
  ],
  domains: [
    {
      id: 'rumination',
      name: 'Ruminação e Pensamento Repetitivo',
      icon: '🔄',
      description: 'Tendência a focar repetidamente nos problemas, causas e consequências, sem chegar a uma solução.',
      interpretationLabels: {
        level_1: 'Baixa ruminação.',
        level_2: 'Ruminação leve/ocasional.',
        level_3: 'Padrão moderado de repetição.',
        level_4: 'Forte aprisionamento em pensamentos repetitivos.',
      },
      questions: [
        { id: 3801, text: 'Fico repetindo na mente o que deu errado em uma situação.' },
        { id: 3802, text: 'Tenho dificuldade em “desligar” dos pensamentos negativos.' },
        { id: 3803, text: 'Volto várias vezes ao mesmo assunto, mesmo sabendo que não resolve.' },
        { id: 3804, text: 'Reflito demais sobre o que as pessoas pensaram de mim.' },
        { id: 3805, text: 'Penso repetidamente no que poderia ter feito diferente no passado.' },
        { id: 3806, text: 'Tenho dificuldade em deixar para lá e seguir em frente.' },
      ],
    },
    {
      id: 'catastrophizing',
      name: 'Ampliação de Cenários (Catastrofização)',
      icon: '⚡',
      description: 'Hábito de antecipar os piores resultados possíveis ou superestimar o perigo de uma situação.',
      interpretationLabels: {
        level_1: 'Visão realista dos riscos.',
        level_2: 'Preocupação leve.',
        level_3: 'Tendência a ampliar riscos.',
        level_4: 'Forte foco no pior cenário possível.',
      },
      questions: [
        { id: 3901, text: 'Quando me preocupo, imagino logo o pior resultado possível.' },
        { id: 3902, text: 'Tenho tendência a exagerar a gravidade dos problemas.' },
        { id: 3903, text: 'Acredito que pequenos erros podem ter consequências desastrosas.' },
        { id: 3904, text: 'Quando algo ruim acontece, sinto que tudo vai desmoronar.' },
        { id: 3905, text: 'Sinto que não vou ter recursos para lidar com o futuro.' },
        { id: 3906, text: 'Transformo incertezas em ameaças concretas na minha mente.' },
      ],
    },
    {
      id: 'reappraisal',
      name: 'Reavaliação e Perspectiva (Adaptativo)',
      icon: '🔭',
      description: 'Capacidade de olhar a situação por outro ângulo, encontrando significados mais úteis ou equilibrados.',
      interpretationLabels: {
        level_1: 'Dificuldade em mudar a perspectiva.',
        level_2: 'Reavaliação pouco frequente.',
        level_3: 'Boa capacidade de reinterpretar.',
        level_4: 'Alta flexibilidade de perspectiva.',
      },
      questions: [
        { id: 4001, text: 'Tento encontrar um lado positivo ou um aprendizado na situação.', isReversed: true },
        { id: 4002, text: 'Busco ver o problema como um desafio a ser superado.', isReversed: true },
        { id: 4003, text: 'Quando estou chateado, tento pensar de uma forma que me acalme.', isReversed: true },
        { id: 4004, text: 'Lembro-me de que já superei coisas difíceis antes.', isReversed: true },
        { id: 4005, text: 'Tento colocar a situação em perspectiva (não é o fim do mundo).', isReversed: true },
        { id: 4006, text: 'Busco evidências reais antes de acreditar nos meus pensamentos negativos.', isReversed: true },
      ],
    },
    {
      id: 'self_criticism',
      name: 'Autocrítica e Julgamento',
      icon: '⚖️',
      description: 'Padrão de se avaliar de forma dura, focando em falhas e déficits pessoais.',
      interpretationLabels: {
        level_1: 'Autocobrança saudável.',
        level_2: 'Autocrítica leve.',
        level_3: 'Autocrítica moderada/frequente.',
        level_4: 'Julgamento severo e punitivo.',
      },
      questions: [
        { id: 4101, text: 'Sou muito duro(a) e exigente comigo mesmo(a).' },
        { id: 4102, text: 'Tenho dificuldade em aceitar minhas próprias falhas.' },
        { id: 4103, text: 'Critico-me mentalmente quando não atinjo minhas expectativas.' },
        { id: 4104, text: 'Fico com raiva de mim por não ser "melhor" ou "mais forte".' },
        { id: 4105, text: 'Comparo-me negativamente com outras pessoas.' },
        { id: 4106, text: 'Meus pensamentos sobre mim mesmo costumam ser de desaprovação.' },
      ],
    },
    {
      id: 'avoidance',
      name: 'Supressão e Evitação Cognitiva',
      icon: '🚫',
      description: 'Tentativa de não pensar, bloquear ou empurrar para longe pensamentos indesejados.',
      interpretationLabels: {
        level_1: 'Baixa evitação mental.',
        level_2: 'Evitação situacional.',
        level_3: 'Esforço moderado de supressão.',
        level_4: 'Forte tentativa de bloquear pensamentos.',
      },
      questions: [
        { id: 4201, text: 'Tento forçar minha mente a não pensar em coisas que me incomodam.' },
        { id: 4202, text: 'Ocupo meu tempo freneticamente para não ter que pensar.' },
        { id: 4203, text: 'Finjo que o problema não existe para ver se ele some.' },
        { id: 4204, text: 'Evito situações que possam disparar pensamentos ansiosos.' },
        { id: 4205, text: 'Tento "empurrar" os pensamentos ruins para fora da cabeça.' },
        { id: 4206, text: 'Uso distrações (celular, comida, etc.) para fugir da minha mente.' },
      ],
    },
    {
      id: 'acceptance',
      name: 'Aceitação e Desfusão (Adaptativo)',
      icon: '🍃',
      description: 'Habilidade de observar pensamentos sem reagir a eles ou tomá-los como verdades absolutas.',
      interpretationLabels: {
        level_1: 'Fusão total com os pensamentos.',
        level_2: 'Dificuldade em aceitar o fluxo mental.',
        level_3: 'Boa capacidade de observação.',
        level_4: 'Alta aceitação e distanciamento.',
      },
      questions: [
        { id: 4301, text: 'Entendo que pensamentos são apenas eventos mentais, não fatos.', isReversed: true },
        { id: 4302, text: 'Consigo observar meus pensamentos sem brigar com eles.', isReversed: true },
        { id: 4303, text: 'Aceito que não posso controlar tudo o que passa pela minha cabeça.', isReversed: true },
        { id: 4304, text: 'Permito que emoções desconfortáveis venham e vão.', isReversed: true },
        { id: 4305, text: 'Consigo me distanciar de um pensamento ("estou tendo o pensamento de que...").', isReversed: true },
        { id: 4306, text: 'Mantenho uma postura curiosa sobre o funcionamento da minha mente.', isReversed: true },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica a predominância de rigidez cognitiva. Escores altos sugerem maior uso de estratégias que mantêm o sofrimento (ruminação, evitação), enquanto domínios adaptativos (revertidos) indicam flexibilidade.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Flexibilidade Cognitiva', 
        description: 'Uso predominante de estratégias adaptativas como reavaliação e aceitação. A mente é vista como uma ferramenta, não como uma ameaça.',
        recommendations: [
          'Manter práticas de observação mental (mindfulness).',
          'Continuar exercitando a flexibilidade de perspectiva.',
          'Compartilhar estratégias de regulação com outros.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Processamento Misto', 
        description: 'Presença de algumas armadilhas mentais (preocupação leve, autocrítica), mas com recursos disponíveis para recuperar o equilíbrio.',
        recommendations: [
          'Identificar gatilhos específicos que ativam a ruminação.',
          'Treinar a pausa antes de acreditar em um pensamento automático.',
          'Praticar a autocompaixão nos momentos de falha.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Rigidez e Padrões Repetitivos', 
        description: 'Tendência a ficar preso em ciclos de pensamento (ruminação, preocupação) ou a lutar contra a própria mente (supressão). Isso consome muita energia.',
        recommendations: [
          'Terapia Cognitiva: registro de pensamentos e questionamento socrático.',
          'Técnicas de "Desfusão": ver o pensamento como um som ou imagem passageira.',
          'Focar na ação comprometida com valores, independente dos pensamentos.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Fusão Cognitiva e Rigidez Intensa', 
        description: 'Os pensamentos são vividos como verdades absolutas e ameaçadoras. Forte autocrítica e evitação experiencial. Risco de ansiedade elevada.',
        recommendations: [
          'Intervenção focada em aceitação e compromisso (ACT).',
          'Treino de atenção plena para reduzir a reatividade automática.',
          'Reduzir a luta contra os sintomas (paradoxo do controle).',
          'Desenvolvimento urgente de uma voz interna mais gentil.'
        ]
      },
    ],
  }
};
