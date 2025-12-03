
import { InventoryForm } from '../types';

export const ICSA_INVENTORY: InventoryForm = {
  id: 'icsa',
  acronym: 'ICSA',
  name: 'Inventário de Competência Social Avançada',
  objective: 'Avaliar o grau de sofisticação, flexibilidade e eficácia das habilidades sociais complexas: leitura de contexto, diplomacia, influência e regulação interpessoal.',
  instructions: 'Leia atentamente e indique com que frequência essas atitudes descrevem seu comportamento em situações sociais complexas, usando a escala de 1 a 7.',
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
      id: 'strategic_communication',
      name: 'Clareza e Adaptação Comunicativa',
      icon: '💬',
      description: 'Habilidade de ajustar a linguagem e o tom ao interlocutor e ao contexto para garantir o entendimento e evitar ruídos.',
      interpretationLabels: {
        level_1: 'Comunicação rígida ou pouco clara.',
        level_2: 'Adaptação básica.',
        level_3: 'Boa eficácia comunicativa.',
        level_4: 'Comunicação sofisticada e adaptável.',
      },
      questions: [
        { id: 60001, text: 'Consigo expressar ideias complexas de forma que diferentes pessoas entendam.' },
        { id: 60002, text: 'Adapto meu tom de voz e vocabulário dependendo de com quem estou falando.' },
        { id: 60003, text: 'Sei ouvir atentamente antes de formular minha resposta.' },
        { id: 60004, text: 'Busco ser direto(a) e assertivo(a), sem perder a gentileza.' },
        { id: 60005, text: 'Consigo dar feedbacks difíceis de maneira construtiva e acolhedora.' },
        { id: 60006, text: 'Tenho dificuldade em encontrar as palavras certas em momentos de tensão.', isReversed: true },
        { id: 60007, text: 'Percebo rapidamente quando minha mensagem não foi bem compreendida e reformulo.' },
      ],
    },
    {
      id: 'negotiation_conflict_resolution',
      name: 'Diplomacia e Gestão de Conflitos',
      icon: '⚖️',
      description: 'Capacidade de navegar por divergências, mediar disputas e encontrar soluções ganha-ganha.',
      interpretationLabels: {
        level_1: 'Evitação ou confronto destrutivo.',
        level_2: 'Dificuldade em mediar.',
        level_3: 'Boa capacidade de negociação.',
        level_4: 'Alta diplomacia e resolução.',
      },
      questions: [
        { id: 60008, text: 'Em conflitos, busco genuinamente compreender os interesses de todos os lados.' },
        { id: 60009, text: 'Consigo manter a calma e o raciocínio mesmo quando atacado verbalmente.' },
        { id: 60010, text: 'Tenho facilidade em propor soluções que satisfaçam partes opostas.' },
        { id: 60011, text: 'Não tenho medo de abordar temas delicados para resolver um problema.' },
        { id: 60012, text: 'Consigo desarmar situações tensas com humor ou empatia.' },
        { id: 60013, text: 'Reajo defensivamente quando alguém discorda de mim.', isReversed: true },
        { id: 60014, text: 'Vejo o conflito como uma oportunidade de melhorar a relação ou o processo.' },
      ],
    },
    {
      id: 'social_intelligence_reading',
      name: 'Leitura Social e Empatia Estratégica',
      icon: '👀',
      description: 'Habilidade de ler "nas entrelinhas", perceber dinâmicas de grupo e intenções não verbalizadas.',
      interpretationLabels: {
        level_1: 'Dificuldade em ler o ambiente.',
        level_2: 'Leitura social superficial.',
        level_3: 'Boa percepção de dinâmicas.',
        level_4: 'Alta inteligência social.',
      },
      questions: [
        { id: 60015, text: 'Percebo sutilezas na linguagem corporal que indicam o que a pessoa realmente sente.' },
        { id: 60016, text: 'Consigo entender as "regras não ditas" de um novo ambiente social.' },
        { id: 60017, text: 'Identifico rapidamente quem tem influência ou liderança em um grupo.' },
        { id: 60018, text: 'Sei quando é hora de falar e quando é hora de silenciar.' },
        { id: 60019, text: 'Capto o "clima" de uma reunião assim que entro na sala.' },
        { id: 60020, text: 'Às vezes sou ingênuo(a) sobre as intenções das pessoas.', isReversed: true },
        { id: 60021, text: 'Uso minha percepção para facilitar a interação e deixar os outros à vontade.' },
      ],
    },
    {
      id: 'influence_cooperation',
      name: 'Influência e Cooperação',
      icon: '🤝',
      description: 'Capacidade de mobilizar pessoas, inspirar colaboração e construir alianças.',
      interpretationLabels: {
        level_1: 'Dificuldade em engajar outros.',
        level_2: 'Influência limitada.',
        level_3: 'Boa capacidade de cooperação.',
        level_4: 'Liderança inspiradora e agregadora.',
      },
      questions: [
        { id: 60022, text: 'Consigo motivar pessoas a trabalharem juntas por um objetivo comum.' },
        { id: 60023, text: 'Tenho facilidade em fazer conexões e networking.' },
        { id: 60024, text: 'As pessoas costumam confiar nas minhas sugestões e liderança.' },
        { id: 60025, text: 'Sou flexível para ajustar meu papel no grupo conforme a necessidade.' },
        { id: 60026, text: 'Sei como valorizar a contribuição de cada pessoa na equipe.' },
        { id: 60027, text: 'Tenho dificuldade em delegar ou confiar nos outros.', isReversed: true },
        { id: 60028, text: 'Promovo um ambiente de respeito e inclusão onde estou.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de competência social avançada. Escores altos refletem inteligência interpessoal e liderança.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Desafios na Interação Complexa', 
        description: 'Pode haver dificuldade em ler o ambiente ou adaptar-se a situações sociais nuançadas. Risco de mal-entendidos ou gafes sociais.',
        recommendations: [
          'Observar mais e falar menos em ambientes novos (calibragem).',
          'Estudar linguagem corporal e microexpressões.',
          'Pedir feedback para pessoas de confiança sobre sua comunicação.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Competência Social em Desenvolvimento', 
        description: 'Habilidades funcionais para o dia a dia, mas pode faltar estratégia ou sutileza em negociações difíceis ou política organizacional.',
        recommendations: [
          'Treinar a preparação antes de conversas difíceis.',
          'Focar em interesses comuns durante conflitos.',
          'Expandir a rede de contatos para praticar a adaptabilidade.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Habilidade Social Eficaz', 
        description: 'O indivíduo navega bem na maioria dos contextos sociais e profissionais. É visto como alguém agradável, cooperativo e claro.',
        recommendations: [
          'Refinar a capacidade de influência e persuasão ética.',
          'Atuar como mediador informal em conflitos de terceiros.',
          'Mentorar colegas mais juniores em soft skills.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Inteligência Social e Diplomacia', 
        description: 'Excelente leitura de cenário e manejo de relações. Capacidade de liderar, inspirar e resolver impasses complexos com elegância.',
        recommendations: [
          'Assumir posições de liderança estratégica.',
          'Gerir crises que envolvam múltiplos stakeholders.',
          'Utilizar o capital social para promover mudanças sistêmicas.'
        ]
      },
    ],
  },
};
