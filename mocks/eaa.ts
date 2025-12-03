
import { InventoryForm } from '../types';

export const EAA_INVENTORY: InventoryForm = {
  id: 'eaa',
  acronym: 'EAA',
  name: 'Escala de Autoexpansão em Amizades (EAA)',
  objective: 'Avaliar o quanto as amizades contribuem para o crescimento pessoal, a aprendizagem de novas perspectivas e o enriquecimento da experiência de vida (conceito de autoexpansão).',
  instructions: 'Indique o quanto cada afirmação descreve sua experiência com seus amigos mais próximos na escala de 1 a 7.',
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
      id: 'personal_growth',
      name: 'Crescimento e Aprendizado',
      icon: '🌱',
      description: 'Capacidade de aprender, desenvolver habilidades e expandir a visão de mundo através das interações com amigos.',
      interpretationLabels: {
        level_1: 'Relações estagnadas.',
        level_2: 'Pouco aprendizado mútuo.',
        level_3: 'Bom estímulo ao crescimento.',
        level_4: 'Alta inspiração e desenvolvimento.',
      },
      questions: [
        { id: 41001, text: 'Aprendo coisas novas e interessantes através dos meus amigos.' },
        { id: 41002, text: 'Meus amigos me inspiram a desenvolver novas habilidades.' },
        { id: 41003, text: 'Sinto-me motivado(a) a ser uma pessoa melhor quando estou com eles.' },
        { id: 41004, text: 'Meus amigos ajudam a expandir minha visão sobre o mundo.' },
        { id: 41005, text: 'Crescer e evoluir ao lado de amigos é importante para mim.' },
        { id: 41006, text: 'Nossas conversas frequentemente me fazem pensar de forma diferente.' },
      ],
    },
    {
      id: 'exploration_experiences',
      name: 'Exploração e Novidade',
      icon: '🌍',
      description: 'Disposição para vivenciar novas experiências e sair da zona de conforto com o apoio dos amigos.',
      interpretationLabels: {
        level_1: 'Rotina social rígida.',
        level_2: 'Pouca novidade nas atividades.',
        level_3: 'Abertura a novas experiências.',
        level_4: 'Exploração ativa e aventuras.',
      },
      questions: [
        { id: 41007, text: 'Participo de atividades diferentes e inusitadas com meus amigos.' },
        { id: 41008, text: 'Eles me incentivam a sair da minha zona de conforto.' },
        { id: 41009, text: 'Gosto de experimentar coisas novas quando estamos juntos.' },
        { id: 41010, text: 'Frequentemente vivemos situações que viram boas histórias.' },
        { id: 41011, text: 'Meus amigos me apresentam novas perspectivas e ideias.' },
        { id: 41012, text: 'Buscamos desafios e aventuras compartilhadas.' },
      ],
    },
    {
      id: 'positive_emotions_engagement',
      name: 'Vitalidade e Emoção Positiva',
      icon: '😊',
      description: 'Capacidade de vivenciar alegria, entusiasmo e recarga energética através das amizades.',
      interpretationLabels: {
        level_1: 'Interações drenantes ou neutras.',
        level_2: 'Satisfação moderada.',
        level_3: 'Boa fonte de alegria.',
        level_4: 'Alto entusiasmo e vitalidade.',
      },
      questions: [
        { id: 41013, text: 'Sinto alegria genuína e entusiasmo ao interagir com amigos.' },
        { id: 41014, text: 'Estar com eles me ajuda a aliviar o estresse e recarregar.' },
        { id: 41015, text: 'Nossos momentos juntos aumentam meu bem-estar geral.' },
        { id: 41016, text: 'Sinto-me energizado(a) após passar tempo com meu grupo.' },
        { id: 41017, text: 'As conversas com amigos me deixam inspirado(a).' },
        { id: 41018, text: 'Rimos e nos divertimos com frequência.' },
        { id: 41019, text: 'Eles me motivam a manter uma atitude positiva diante da vida.' },
      ],
    },
    {
      id: 'autonomy_interpersonal_support',
      name: 'Suporte à Autonomia',
      icon: '🤝',
      description: 'Percepção de que os amigos apoiam a individualidade e oferecem uma base segura para ser quem se é.',
      interpretationLabels: {
        level_1: 'Sentimento de julgamento ou controle.',
        level_2: 'Apoio condicional.',
        level_3: 'Bom suporte e aceitação.',
        level_4: 'Total validação e segurança.',
      },
      questions: [
        { id: 41020, text: 'Meus amigos me ajudam a entender quem eu sou de verdade.' },
        { id: 41021, text: 'Posso contar com eles ao tomar decisões importantes.' },
        { id: 41022, text: 'Sinto que posso ser eu mesmo(a) sem medo de julgamento.' },
        { id: 41023, text: 'Eles me incentivam a ser independente e seguir meus sonhos.' },
        { id: 41024, text: 'Sinto segurança emocional para compartilhar minhas falhas.' },
        { id: 41025, text: 'Posso compartilhar meus planos mais ambiciosos com eles.' },
        { id: 41026, text: 'Nossa amizade equilibra bem o apoio com a liberdade pessoal.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de autoexpansão nas amizades. Escores altos sugerem relações que promovem crescimento e bem-estar.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Relações de Manutenção', 
        description: 'As amizades podem estar estagnadas, focadas apenas em rotina ou conveniência, sem gerar muito estímulo ou crescimento pessoal.',
        recommendations: [
          'Propor uma atividade nova para fazer com um amigo (sair da rotina).',
          'Buscar conhecer pessoas com interesses diferentes para oxigenar ideias.',
          'Iniciar conversas sobre temas mais profundos ou novos.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Conexão Moderada', 
        description: 'Há suporte e companhia, mas talvez falte intensidade ou novidade. A relação é estável, mas pode não estar sendo uma fonte ativa de inspiração no momento.',
        recommendations: [
          'Compartilhar um objetivo pessoal com amigos e pedir incentivo.',
          'Relembrar experiências divertidas do passado para reativar a conexão.',
          'Equilibrar o tempo de "desabafar problemas" com o tempo de "criar memórias".'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Amizades Enriquecedoras', 
        description: 'As relações são fontes de alegria e aprendizado. O indivíduo sente-se apoiado e estimulado a crescer através do convívio social.',
        recommendations: [
          'Manter a reciprocidade: garantir que você também estimule seus amigos.',
          'Planejar projetos ou viagens conjuntas.',
          'Valorizar a diversidade de opiniões dentro do grupo.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Autoexpansão Social', 
        description: 'As amizades são vibrantes, transformadoras e profundas. Existe uma forte sensação de que "sou uma pessoa melhor/maior" graças a esses vínculos.',
        recommendations: [
          'Celebrar ativamente a importância dessas pessoas em sua vida.',
          'Utilizar a energia do grupo para impulsionar causas ou metas maiores.',
          'Cuidar para manter a própria identidade mesmo na fusão do grupo.'
        ]
      },
    ],
  },
};
