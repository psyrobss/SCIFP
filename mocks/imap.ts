
import { InventoryForm } from '../types';

export const IMAP_INVENTORY: InventoryForm = {
  id: 'imap',
  acronym: 'IMAP',
  name: 'Inventário de Mindfulness e Atenção Plena',
  objective: 'Avaliar a capacidade de manter a atenção no momento presente, observar pensamentos e emoções sem julgamento e agir com consciência no cotidiano.',
  instructions: 'Indique com que frequência cada afirmação descreve sua experiência habitual, utilizando a escala de 1 a 7.',
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
      id: 'present_attention',
      name: 'Atenção ao Presente',
      icon: '🌿',
      description: 'Capacidade de focar na experiência imediata (sensorial, interna ou externa) sem se perder em distrações.',
      interpretationLabels: {
        level_1: 'Mente dispersa ("piloto automático").',
        level_2: 'Atenção instável.',
        level_3: 'Boa presença no aqui e agora.',
        level_4: 'Alta estabilidade atencional.',
      },
      questions: [
        { id: 65001, text: 'Consigo prestar atenção plena ao que estou fazendo, sem me distrair.' },
        { id: 65002, text: 'Frequentemente me pego pensando em tarefas passadas ou futuras.', isReversed: true },
        { id: 65003, text: 'Percebo detalhes do ambiente que normalmente passariam despercebidos.' },
        { id: 65004, text: 'Tenho dificuldade de me concentrar no presente.', isReversed: true },
        { id: 65005, text: 'Sinto que minha mente divaga com frequência durante atividades rotineiras.', isReversed: true },
        { id: 65006, text: 'Consigo absorver totalmente a experiência de cada atividade que realizo.' },
        { id: 65007, text: 'Aprecio e noto pequenos detalhes do cotidiano que outras pessoas ignoram.' },
      ],
    },
    {
      id: 'thought_awareness',
      name: 'Desfusão e Observação',
      icon: '🧠',
      description: 'Habilidade de notar os pensamentos como eventos mentais passageiros, sem se identificar ou reagir automaticamente a eles.',
      interpretationLabels: {
        level_1: 'Fusão com pensamentos.',
        level_2: 'Observação difícil sob estresse.',
        level_3: 'Boa capacidade de observar.',
        level_4: 'Postura de observador desenvolvida.',
      },
      questions: [
        { id: 65008, text: 'Consigo perceber meus pensamentos sem julgá-los.' },
        { id: 65009, text: 'Frequentemente me identifico completamente com pensamentos negativos.', isReversed: true },
        { id: 65010, text: 'Sou capaz de observar ideias ou preocupações sem reagir impulsivamente.' },
        { id: 65011, text: 'Costumo criticar meus próprios pensamentos automaticamente.', isReversed: true },
        { id: 65012, text: 'Consigo notar quando minha mente cria histórias ou suposições.' },
        { id: 65013, text: 'Sinto dificuldade em reconhecer padrões de pensamento repetitivos.', isReversed: true },
        { id: 65014, text: 'Posso distanciar-me mentalmente de pensamentos que me perturbam.' },
      ],
    },
    {
      id: 'emotional_awareness',
      name: 'Aceitação Emocional',
      icon: '💛',
      description: 'Disposição para sentir e aceitar emoções, mesmo as difíceis, sem tentar suprimi-las ou evitá-las.',
      interpretationLabels: {
        level_1: 'Evitação ou supressão emocional.',
        level_2: 'Aceitação condicional.',
        level_3: 'Boa abertura emocional.',
        level_4: 'Alta aceitação e equanimidade.',
      },
      questions: [
        { id: 65015, text: 'Posso perceber minhas emoções sem me sentir sobrecarregado(a).' },
        { id: 65016, text: 'Evito reconhecer sentimentos desconfortáveis.', isReversed: true },
        { id: 65017, text: 'Aceito minhas emoções mesmo quando são negativas.' },
        { id: 65018, text: 'Frequentemente reprimo sentimentos para não incomodar os outros.', isReversed: true },
        { id: 65019, text: 'Conecto minhas sensações físicas com emoções que estou sentindo.' },
        { id: 65020, text: 'Consigo identificar rapidamente mudanças em meu estado emocional.' },
        { id: 65021, text: 'Costumo reagir emocionalmente antes de perceber como me sinto.', isReversed: true },
      ],
    },
    {
      id: 'conscious_engagement',
      name: 'Ação Consciente',
      icon: '🌟',
      description: 'Capacidade de agir com intenção e consciência, em vez de reagir por impulso ou hábito.',
      interpretationLabels: {
        level_1: 'Reatividade automática.',
        level_2: 'Consciência intermitente.',
        level_3: 'Ação intencional frequente.',
        level_4: 'Vida vivida com propósito e presença.',
      },
      questions: [
        { id: 65022, text: 'Tento agir de acordo com minhas intenções conscientes, não por impulso.' },
        { id: 65023, text: 'Aceito eventos que não posso controlar sem frustração excessiva.' },
        { id: 65024, text: 'Frequentemente ajo de forma automática sem prestar atenção ao que faço.', isReversed: true },
        { id: 65025, text: 'Consigo permanecer calmo(a) diante de situações desafiadoras.' },
        { id: 65026, text: 'Evito ou luto contra experiências internas desconfortáveis.', isReversed: true },
        { id: 65027, text: 'Busco envolver-me plenamente nas atividades, sem pressa ou distrações.' },
        { id: 65028, text: 'Costumo agir sem pensar nas consequências ou no momento presente.', isReversed: true },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de Mindfulness. Escores altos sugerem maior capacidade de viver no presente com equilíbrio.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Piloto Automático', 
        description: 'A mente tende a estar no passado ou no futuro, com pouca conexão com o agora. Pode haver reatividade emocional e julgamento frequente da própria experiência.',
        recommendations: [
          'Práticas breves de "respiração consciente" (3 minutos) várias vezes ao dia.',
          'Comer uma refeição por dia em silêncio e com atenção total.',
          'Notar 5 coisas visuais no ambiente quando se sentir disperso.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Atenção Plena em Desenvolvimento', 
        description: 'Há momentos de presença, mas o estresse facilmente traz de volta a distração ou a reatividade. O indivíduo reconhece a importância de estar presente.',
        recommendations: [
          'Body Scan (escaneamento corporal) para conectar mente e corpo.',
          'Observar pensamentos como "trens passando na estação" sem embarcar neles.',
          'Praticar a escuta atenta em conversas.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Estado de Mindfulness Funcional', 
        description: 'Boa capacidade de observar a própria mente e regular emoções. O indivíduo consegue pausar antes de reagir e aceita melhor o desconforto.',
        recommendations: [
          'Integrar mindfulness em atividades rotineiras (banho, caminhada).',
          'Aprofundar a prática de autocompaixão.',
          'Usar a consciência para fazer escolhas mais alinhadas com valores.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Consciência e Presença', 
        description: 'Estilo de vida consciente. Alta aceitação, não-julgamento e clareza mental. Capacidade de manter a calma e a compaixão mesmo em dificuldades.',
        recommendations: [
          'Práticas de meditação mais longas ou retiros.',
          'Levar a qualidade de presença para liderança ou ajuda a outros.',
          'Cultivar a "mente de principiante" continuamente.'
        ]
      },
    ],
  },
};
