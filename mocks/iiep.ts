
import { InventoryForm } from '../types';

export const IIEP_INVENTORY: InventoryForm = {
  id: 'iiep',
  acronym: 'IIEP',
  name: 'Inventário de Inteligência Emocional Prática',
  objective: 'Avaliar a competência no uso das emoções para facilitar o pensamento, a tomada de decisão e a gestão de relacionamentos no cotidiano.',
  instructions: 'Para cada afirmação, indique o quanto ela descreve sua capacidade de lidar com emoções na prática, utilizando a escala abaixo.',
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
      id: 'emotional_perception',
      name: 'Percepção e Identificação',
      icon: '👁️',
      description: 'Habilidade de reconhecer com precisão emoções em si mesmo e nos outros através de pistas verbais e não verbais.',
      interpretationLabels: {
        level_1: 'Dificuldade em ler sinais emocionais.',
        level_2: 'Percepção limitada ou imprecisa.',
        level_3: 'Boa leitura emocional.',
        level_4: 'Alta acuidade perceptiva.',
      },
      questions: [
        { id: 69001, text: 'Consigo identificar rapidamente como me sinto em diferentes situações.' },
        { id: 69002, text: 'Tenho dificuldade em perceber minhas próprias emoções.', isReversed: true },
        { id: 69003, text: 'Percebo facilmente o estado emocional de outras pessoas.' },
        { id: 69004, text: 'Frequentemente interpreto mal os sentimentos de quem me cerca.', isReversed: true },
        { id: 69005, text: 'Reconheço sinais físicos e comportamentais relacionados às minhas emoções.' },
        { id: 69006, text: 'Tenho dificuldade em identificar emoções complexas em mim ou nos outros.', isReversed: true },
        { id: 69007, text: 'Posso notar mudanças sutis no humor de outras pessoas.' },
      ],
    },
    {
      id: 'emotional_understanding',
      name: 'Compreensão e Análise',
      icon: '💡',
      description: 'Capacidade de entender as causas, as consequências e a evolução das emoções ao longo do tempo.',
      interpretationLabels: {
        level_1: 'Confusão sobre causas emocionais.',
        level_2: 'Compreensão superficial.',
        level_3: 'Bom entendimento de padrões.',
        level_4: 'Análise emocional sofisticada.',
      },
      questions: [
        { id: 69008, text: 'Consigo entender por que sinto certas emoções em determinadas situações.' },
        { id: 69009, text: 'Tenho dificuldade em compreender padrões emocionais em mim ou nos outros.', isReversed: true },
        { id: 69010, text: 'Posso antecipar como certas situações podem afetar meu humor.' },
        { id: 69011, text: 'Frequentemente não consigo relacionar emoções a eventos específicos.', isReversed: true },
        { id: 69012, text: 'Reconheço como minhas emoções podem influenciar meu comportamento e decisões.' },
        { id: 69013, text: 'Entender as emoções alheias me ajuda a interagir melhor socialmente.' },
        { id: 69014, text: 'Tenho dificuldade em compreender a complexidade das emoções humanas.', isReversed: true },
      ],
    },
    {
      id: 'emotional_regulation',
      name: 'Regulação e Gerenciamento',
      icon: '⚖️',
      description: 'Habilidade de modular a intensidade e a duração das emoções para atingir objetivos.',
      interpretationLabels: {
        level_1: 'Dificuldade de controle emocional.',
        level_2: 'Regulação inconsistente.',
        level_3: 'Boa capacidade de gerenciamento.',
        level_4: 'Excelente autorregulação.',
      },
      questions: [
        { id: 69015, text: 'Consigo me acalmar rapidamente quando me sinto irritado(a) ou ansioso(a).' },
        { id: 69016, text: 'Frequentemente perco o controle diante de emoções intensas.', isReversed: true },
        { id: 69017, text: 'Posso escolher respostas adequadas em situações emocionalmente desafiadoras.' },
        { id: 69018, text: 'Tenho dificuldade em lidar com sentimentos negativos de forma construtiva.', isReversed: true },
        { id: 69019, text: 'Uso estratégias eficazes para reduzir impacto de emoções negativas.' },
        { id: 69020, text: 'Permitir-me sentir emoções negativas sempre leva a comportamentos desadaptativos.', isReversed: true },
        { id: 69021, text: 'Sinto-me capaz de manter o equilíbrio emocional mesmo em situações estressantes.' },
      ],
    },
    {
      id: 'emotional_application',
      name: 'Aplicação e Facilitação',
      icon: '🚀',
      description: 'Uso inteligente das emoções para priorizar pensamentos, motivar-se e influenciar o ambiente.',
      interpretationLabels: {
        level_1: 'Emoções atrapalham o desempenho.',
        level_2: 'Uso limitado da emoção como recurso.',
        level_3: 'Uso funcional das emoções.',
        level_4: 'Alta eficácia na aplicação emocional.',
      },
      questions: [
        { id: 69022, text: 'Uso minhas emoções para tomar decisões mais conscientes e acertadas.' },
        { id: 69023, text: 'Frequentemente deixo que sentimentos negativos interfiram em minhas escolhas.', isReversed: true },
        { id: 69024, text: 'Posso utilizar minha empatia para melhorar relacionamentos interpessoais.' },
        { id: 69025, text: 'Tenho dificuldade em aplicar emoções positivas para motivar-me ou aos outros.', isReversed: true },
        { id: 69026, text: 'Ajusto meu comportamento emocional para situações sociais de forma adequada.' },
        { id: 69027, text: 'Emoções bem gerenciadas me ajudam a lidar com desafios pessoais.' },
        { id: 69028, text: 'Frequentemente ignoro minhas emoções na tomada de decisões importantes.', isReversed: true },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) reflete o nível de Inteligência Emocional Prática. Escores mais altos indicam maior competência socioemocional.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Desenvolvimento Inicial de IE', 
        description: 'Dificuldades em reconhecer ou gerenciar emoções podem causar atritos interpessoais ou decisões reativas. Importante focar no básico da alfabetização emocional.',
        recommendations: [
          'Treinar a identificação: "O que estou sentindo agora?" (usar lista de emoções).',
          'Monitorar gatilhos que levam a reações automáticas.',
          'Praticar a pausa antes de reagir (regulação básica).',
          'Buscar feedback de pessoas de confiança sobre seu impacto emocional.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Competência Emocional em Construção', 
        description: 'Algumas habilidades estão presentes, mas podem falhar sob estresse. Pode haver boa percepção, mas dificuldade na regulação, ou vice-versa.',
        recommendations: [
          'Praticar a escuta empática (focar no outro sem julgar).',
          'Expandir o repertório de estratégias de enfrentamento (além da evitação).',
          'Refletir sobre como o humor influencia a tomada de decisão.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Inteligência Emocional Funcional', 
        description: 'Bom nível de adaptação. O indivíduo navega bem no mundo social, entende suas motivações e consegue se recompor de aborrecimentos na maioria das vezes.',
        recommendations: [
          'Aprofundar a compreensão de emoções complexas e mistas.',
          'Utilizar emoções positivas para impulsionar a motivação própria e da equipe.',
          'Praticar a assertividade empática em conflitos.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Inteligência Emocional', 
        description: 'Excelente capacidade de integração entre emoção e razão. Habilidade de liderança, mediação de conflitos e autogestão sofisticada.',
        recommendations: [
          'Atuar como facilitador ou mentor em seu ambiente.',
          'Desenvolver a inteligência cultural e sistêmica.',
          'Manter a humildade e a curiosidade sobre o mundo interno dos outros.'
        ]
      },
    ],
  },
};
