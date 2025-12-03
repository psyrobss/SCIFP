

import { InventoryForm } from '../types';

export const IMC_INVENTORY: InventoryForm = {
  id: 'imc',
  acronym: 'IMC',
  name: 'Inventário de Metacognição Clínica',
  objective: 'Avaliar a relação do indivíduo com seus próprios pensamentos: o quanto ele consegue observá-los (desfusão) versus o quanto ele se sente controlado por eles (fusão), e sua capacidade de distinguir fatos de interpretações.',
  instructions: 'As afirmações abaixo descrevem maneiras de lidar com a própria mente. Marque o número que mais se aproxima da sua experiência pessoal nas últimas semanas.',
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
      id: 'mental_processes_awareness',
      name: 'Consciência dos Processos Mentais',
      icon: '🧠',
      description: 'Capacidade de perceber que se está pensando, notando distrações e mudanças de foco.',
      interpretationLabels: {
        level_1: 'Pensamento automático predominante.',
        level_2: 'Consciência intermitente.',
        level_3: 'Boa percepção do fluxo mental.',
        level_4: 'Alta consciência metacognitiva.',
      },
      questions: [
        { id: 9001, text: 'Percebo rapidamente quando minha mente começa a se distrair.' },
        { id: 9002, text: 'Consigo identificar quando um pensamento está influenciando meu humor.' },
        { id: 9003, text: 'Muitas vezes fico preso em pensamentos sem nem perceber.', isReversed: true },
        { id: 9004, text: 'Consigo notar quando começo a repetir a mesma ideia na cabeça.' },
        { id: 9005, text: 'Raramente noto o que se passa na minha mente até que já esteja ansioso(a).', isReversed: true },
        { id: 9006, text: 'Tenho consciência das mudanças sutis no meu estado mental.' },
        { id: 9007, text: 'Às vezes noto que meus pensamentos “correm sozinhos” e me levam junto.', isReversed: true },
        { id: 9008, text: 'Percebo o início de uma preocupação antes que ela me domine.' },
      ],
    },
    {
      id: 'internal_monitoring_observation',
      name: 'Postura de Observador (Desfusão)',
      icon: '🔍',
      description: 'Habilidade de olhar "para" os pensamentos e não "através" deles, mantendo distanciamento.',
      interpretationLabels: {
        level_1: 'Fusão total (pensamento = realidade).',
        level_2: 'Distanciamento difícil sob estresse.',
        level_3: 'Capacidade de observar sem reagir.',
        level_4: 'Postura de observador consolidada.',
      },
      questions: [
        { id: 9101, text: 'Consigo observar meus pensamentos sem acreditar automaticamente neles.' },
        { id: 9102, text: 'Tento entender de onde vem o que penso em vez de apenas aceitar.' },
        { id: 9103, text: 'Quando fico triste, consigo observar os pensamentos que surgem.' },
        { id: 9104, text: 'Às vezes me deixo levar pelas histórias que minha mente conta.', isReversed: true },
        { id: 9105, text: 'Consigo olhar para o que penso de modo curioso e analítico.' },
        { id: 9106, text: 'Quando estou irritado(a), percebo como minha mente tenta justificar a raiva.' },
        { id: 9107, text: 'Tenho dificuldade em apenas observar; sinto que preciso reagir aos pensamentos.', isReversed: true },
        { id: 9108, text: 'Às vezes consigo "assistir" aos meus pensamentos como se fosse um filme.' },
      ],
    },
    {
      id: 'cognitive_regulation_control',
      name: 'Flexibilidade e Redirecionamento',
      icon: '⚙️',
      description: 'Capacidade de gentilmente trazer a atenção de volta ou mudar o foco quando a mente entra em ciclos improdutivos.',
      interpretationLabels: {
        level_1: 'Dificuldade em sair de ciclos mentais.',
        level_2: 'Controle exige muito esforço.',
        level_3: 'Boa capacidade de redirecionar a atenção.',
        level_4: 'Alta flexibilidade cognitiva.',
      },
      questions: [
        { id: 9201, text: 'Quando percebo que um pensamento não ajuda, consigo deixá-lo ir.' },
        { id: 9202, text: 'Consigo interromper ruminações mudando meu foco de atenção.' },
        { id: 9203, text: 'Tenho dificuldade em parar de pensar em coisas que me preocupam.', isReversed: true },
        { id: 9204, text: 'Quando fico preso(a) em preocupações, encontro uma forma de sair.' },
        { id: 9205, text: 'Consigo mudar meu foco mental quando é necessário.' },
        { id: 9206, text: 'Quando fico ansioso(a), uso estratégias mentais para me centrar.' },
        { id: 9207, text: 'Às vezes meus pensamentos parecem incontroláveis.', isReversed: true },
        { id: 9208, text: 'Tenho recursos para lidar com ideias repetitivas.' },
      ],
    },
    {
      id: 'differentiation_thinking_feeling_acting',
      name: 'Diferenciação Pensar-Sentir-Agir',
      icon: '🧩',
      description: 'Clareza de que ter um pensamento não obriga a uma ação e que pensamento não é fato.',
      interpretationLabels: {
        level_1: 'Confusão entre evento mental e realidade.',
        level_2: 'Dificuldade em separar impulso de ação.',
        level_3: 'Boa distinção entre pensamento e fato.',
        level_4: 'Alta clareza sobre a natureza da mente.',
      },
      questions: [
        { id: 9301, text: 'Consigo perceber a diferença entre o que é um fato e o que é minha interpretação.' },
        { id: 9302, text: 'Às vezes ajo baseado no que pensei, como se fosse uma verdade absoluta.', isReversed: true },
        { id: 9303, text: 'Consigo sentir uma emoção ou pensar algo sem necessariamente agir sobre isso.' },
        { id: 9304, text: 'Quando algo me irrita, percebo primeiro o pensamento antes de reagir.' },
        { id: 9305, text: 'Às vezes confundo o que sinto com a realidade da situação.', isReversed: true },
        { id: 9306, text: 'Reconheço que pensar algo não torna aquilo verdadeiro.' },
        { id: 9307, text: 'Quando me sinto mal, lembro que é um estado passageiro, não quem eu sou.' },
        { id: 9308, text: 'Tenho clareza de que meus pensamentos são eventos mentais, não ordens.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de habilidade metacognitiva. Escores mais altos sugerem maior liberdade em relação aos próprios pensamentos.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Fusão Cognitiva (Imersão)', 
        description: 'Tendência a viver "dentro" dos pensamentos, tomando-os como realidade literal. Pode haver dificuldade em se distanciar de preocupações ou ruminações.',
        recommendations: [
          'Treino de Atenção Plena (Mindfulness): observar pensamentos como "nuvens no céu".',
          'Técnicas de Desfusão: usar a frase "Estou tendo o pensamento de que..."',
          'Psicoeducação: entender que pensamentos são apenas eventos mentais, não fatos.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Observação em Desenvolvimento', 
        description: 'Capacidade de perceber os pensamentos, mas ainda com tendência a lutar contra eles ou se engajar em momentos de estresse.',
        recommendations: [
          'Praticar o "modo observador" em situações de baixo estresse primeiro.',
          'Identificar os "gatilhos" que levam à fusão com o pensamento.',
          'Fortalecer a distinção entre fatos concretos e interpretações mentais.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Boa Capacidade Metacognitiva', 
        description: 'O indivíduo consegue monitorar sua mente e redirecionar a atenção quando necessário. Há um espaço saudável entre o pensar e o agir.',
        recommendations: [
          'Utilizar a metacognição para otimizar a resolução de problemas.',
          'Aplicar a flexibilidade mental em conflitos interpessoais.',
          'Manter práticas regulares de pausa e observação.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Flexibilidade Mental', 
        description: 'Excelente habilidade de se relacionar com a própria mente de forma leve e desapegada. Capacidade de não se prender a narrativas internas limitantes.',
        recommendations: [
          'Aprofundar práticas meditativas ou contemplativas.',
          'Ajudar outros a perceberem suas próprias armadilhas mentais.',
          'Cultivar a "mente de principiante" e a curiosidade.'
        ]
      },
    ],
  },
};
