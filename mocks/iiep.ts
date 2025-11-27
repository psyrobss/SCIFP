
import { InventoryForm } from '../types';

export const IIEP_INVENTORY: InventoryForm = {
  id: 'iiep',
  acronym: 'IIEP',
  name: 'Inventário de Inteligência Emocional Prática',
  objective: 'Avaliar a capacidade do indivíduo de perceber, compreender, regular e aplicar emoções de forma adaptativa em situações cotidianas, promovendo bem-estar pessoal e qualidade nas interações sociais.',
  instructions: 'Leia cada afirmação e indique com que frequência você vivencia o comportamento ou sentimento descrito.',
  scoreOrientation: 'higher_is_better',
  responseScale: [
    { value: 0, label: 'Nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre' },
  ],
  domains: [
    {
      id: 'emotional_perception',
      name: 'Percepção Emocional',
      icon: '🌟',
      description: 'Avalia a habilidade de reconhecer emoções próprias e alheias.',
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
      name: 'Compreensão Emocional',
      icon: '💡',
      description: 'Avalia a capacidade de compreender causas, consequências e interações das emoções.',
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
      name: 'Regulação Emocional',
      icon: '⚖️',
      description: 'Avalia habilidade de controlar, modular e responder adequadamente às emoções.',
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
      name: 'Aplicação Emocional',
      icon: '🌈',
      description: 'Avalia a utilização das emoções para tomada de decisões, resolução de problemas e interação social.',
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
    type: 'sum',
    description: 'Pontuação total: 0–112. Itens invertidos: 2, 4, 6, 9, 11, 14, 16, 18, 20, 23, 25, 28',
    ranges: [
      { 
        min: 0, 
        max: 28, 
        label: 'Baixa Inteligência Emocional (IE)', 
        description: 'Dificuldade significativa em perceber, compreender e regular emoções. Risco de conflitos interpessoais e decisões impulsivas.',
        recommendations: [
          'Alfabetização emocional básica: aprender a nomear e distinguir emoções.',
          'Monitoramento diário do humor e seus gatilhos.',
          'Treino de pausa antes de reagir (regulação básica).',
          'Buscar feedback de pessoas próximas sobre o próprio comportamento.'
        ]
      },
      { 
        min: 29, 
        max: 56, 
        label: 'Inteligência Emocional Moderada', 
        description: 'Algumas habilidades presentes, mas com inconsistência. Pode haver dificuldade em lidar com emoções complexas ou situações de alto estresse.',
        recommendations: [
          'Praticar a empatia ativa (escutar para entender, não para responder).',
          'Expandir o repertório de estratégias de regulação (além da distração ou supressão).',
          'Refletir sobre o papel das emoções nas decisões recentes.'
        ]
      },
      { 
        min: 57, 
        max: 84, 
        label: 'Inteligência Emocional Funcional', 
        description: 'Boa percepção e regulação na maioria das situações cotidianas. Relacionamentos saudáveis e tomada de decisão equilibrada.',
        recommendations: [
          'Aprofundar a compreensão das nuances emocionais dos outros.',
          'Utilizar emoções positivas para motivar a si mesmo e à equipe.',
          'Gerenciar conflitos de forma colaborativa.'
        ]
      },
      { 
        min: 85, 
        max: 112, 
        label: 'Inteligência Emocional Elevada', 
        description: 'Alta sofisticação emocional. Capacidade de usar emoções para facilitar o pensamento, liderar e navegar em dinâmicas sociais complexas.',
        recommendations: [
          'Atuar como mediador ou líder em situações emocionalmente carregadas.',
          'Continuar desenvolvendo a inteligência social e cultural.',
          'Manter práticas de autoconsciência para evitar excesso de confiança.'
        ]
      },
    ],
  },
};
