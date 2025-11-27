
import { InventoryForm } from '../types';

export const IPM_INVENTORY: InventoryForm = {
  id: 'ipm',
  acronym: 'IPM',
  name: 'Inventário de Psychological Mindedness (IPM)',
  objective: 'Avaliar a capacidade do indivíduo de observar, compreender e refletir sobre seus próprios estados mentais e os de outras pessoas — incluindo insight, autorreflexão, empatia e abertura emocional.',
  instructions: 'As frases abaixo descrevem atitudes e experiências relacionadas à capacidade de compreender a si mesmo(a) e os outros. Leia com atenção e marque o quanto elas se aplicam a você na maior parte do tempo.',
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
      id: 'self_reflection_insight',
      name: 'Autorreflexão e Insight',
      icon: '💭',
      description: 'Capacidade de observar e compreender os próprios conflitos, padrões de comportamento e motivações internas.',
      interpretationLabels: {
        level_1: 'Baixa capacidade de insight sobre si.',
        level_2: 'Insight em desenvolvimento, com reflexões ocasionais.',
        level_3: 'Boa capacidade de autorreflexão e compreensão interna.',
        level_4: 'Elevada capacidade de insight e conexão entre pensamento e emoção.',
      },
      questions: [
        { id: 3301, text: 'Consigo perceber quando algo dentro de mim está em conflito.' },
        { id: 3302, text: 'Tenho facilidade em reconhecer o motivo por trás das minhas reações emocionais.' },
        { id: 3303, text: 'Penso sobre o que minhas atitudes dizem sobre mim.' },
        { id: 3304, text: 'Quando cometo um erro, reflito sobre o que ele revela sobre meus padrões.' },
        { id: 3305, text: 'Consigo identificar como meu passado influencia meu comportamento atual.' },
        { id: 3306, text: 'Gosto de tentar compreender meus pensamentos e sentimentos em profundidade.' },
      ],
    },
    {
      id: 'emotional_awareness',
      name: 'Consciência Emocional',
      icon: '🧠',
      description: 'Habilidade de identificar, nomear e diferenciar os próprios estados emocionais com clareza.',
      interpretationLabels: {
        level_1: 'Baixa consciência sobre os próprios estados emocionais.',
        level_2: 'Consciência emocional superficial ou intermitente.',
        level_3: 'Boa capacidade de nomear e diferenciar emoções.',
        level_4: 'Elevada consciência e clareza sobre o mundo emocional interno.',
      },
      questions: [
        { id: 3401, text: 'Consigo distinguir entre diferentes emoções que sinto.' },
        { id: 3402, text: 'Percebo quando estou tentando evitar sentir algo difícil.' },
        { id: 3403, text: 'Sei nomear o que estou sentindo, mesmo em momentos de estresse.' },
        { id: 3404, text: 'Tenho facilidade em perceber o impacto das minhas emoções nas minhas ações.' },
        { id: 3405, text: 'Sinto quando estou emocionalmente sobrecarregado(a).' },
        { id: 3406, text: 'Consigo reconhecer quando uma emoção tem origem em algo antigo.' },
      ],
    },
    {
      id: 'empathy_interpersonal_understanding',
      name: 'Empatia e Compreensão Interpessoal',
      icon: '🤝',
      description: 'Capacidade de perceber, compreender e se interessar pelos estados mentais e emocionais de outras pessoas.',
      interpretationLabels: {
        level_1: 'Baixa capacidade de perceber o estado interno do outro.',
        level_2: 'Empatia presente, mas com dificuldade em compreender perspectivas diferentes.',
        level_3: 'Boa capacidade de se colocar no lugar do outro e compreender suas motivações.',
        level_4: 'Elevada empatia e sensibilidade para o mundo interpessoal.',
      },
      questions: [
        { id: 3501, text: 'Consigo perceber o que os outros estão sentindo, mesmo quando não dizem.' },
        { id: 3502, text: 'Tento entender o ponto de vista das outras pessoas antes de reagir.' },
        { id: 3503, text: 'Tenho facilidade em perceber quando alguém está tentando esconder algo emocionalmente.' },
        { id: 3504, text: 'Sinto-me naturalmente inclinado(a) a compreender as motivações dos outros.' },
        { id: 3505, text: 'Tenho curiosidade sobre o mundo interno das pessoas.' },
        { id: 3506, text: 'Consigo colocar-me no lugar do outro sem perder meu próprio ponto de vista.' },
      ],
    },
    {
      id: 'openness_to_internal_exploration',
      name: 'Abertura à Exploração Interna',
      icon: '🪞',
      description: 'Disposição e interesse em explorar o próprio mundo interno, mesmo que isso traga desconforto.',
      interpretationLabels: {
        level_1: 'Postura defensiva ou evitativa em relação à autoexploração.',
        level_2: 'Abertura limitada, com evitação de temas mais sensíveis.',
        level_3: 'Boa disposição para o autoconhecimento e para lidar com desconfortos internos.',
        level_4: 'Elevado interesse e curiosidade pelo mundo interno, aceitando suas complexidades.',
      },
      questions: [
        { id: 3601, text: 'Tenho interesse genuíno em compreender meus padrões e crenças.' },
        { id: 3602, text: 'Não fujo de reflexões que possam me causar desconforto.' },
        { id: 3603, text: 'Gosto de explorar aspectos de mim que ainda não entendo bem.' },
        { id: 3604, text: 'Aceito questionamentos que desafiam a imagem que tenho de mim.' },
        { id: 3605, text: 'Considero importante compreender o lado “sombrio” da minha personalidade.' },
        { id: 3606, text: 'Sinto-me confortável em olhar para dentro, mesmo quando encontro coisas difíceis.' },
      ],
    },
    {
      id: 'integration_application_of_insight',
      name: 'Integração e Aplicação do Insight',
      icon: '🔍',
      description: 'Capacidade de usar o autoconhecimento para promover mudanças práticas no comportamento e nas decisões.',
      interpretationLabels: {
        level_1: 'Dificuldade em traduzir insight em ação.',
        level_2: 'Compreensão intelectual com baixa aplicação prática.',
        level_3: 'Boa capacidade de usar o autoconhecimento para guiar ações.',
        level_4: 'Elevada integração entre insight e comportamento, promovendo crescimento contínuo.',
      },
      questions: [
        { id: 3701, text: 'Quando descubro algo novo sobre mim, tento aplicar isso na prática.' },
        { id: 3702, text: 'Sinto que minha autoconsciência me ajuda a tomar melhores decisões.' },
        { id: 3703, text: 'Tento mudar comportamentos a partir do que aprendo sobre mim.' },
        { id: 3704, text: 'Uso o que compreendo sobre minhas emoções para lidar melhor com os outros.' },
        { id: 3705, text: 'Consigo transformar reflexões internas em ações concretas.' },
        { id: 3706, text: 'Sinto que minha capacidade de autoconhecimento cresce com o tempo.' },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'O escore total (0-120) indica o nível de "Psychological Mindedness". Escores mais altos refletem maior capacidade de insight e autorreflexão.',
    ranges: [
      { 
        min: 0, 
        max: 39, 
        label: 'Baixa Psychological Mindedness', 
        description: 'Dificuldade em refletir sobre estados internos; tendência a focar em aspectos concretos e externos. Pode haver alexitimia ou pensamento operatório.',
        recommendations: [
          'Psicoeducação sobre emoções básicas e suas funções.',
          'Exercícios de monitoramento: "O que estou sentindo agora?" (várias vezes ao dia).',
          'Focar na conexão entre eventos externos e reações internas.'
        ]
      },
      { 
        min: 40, 
        max: 79, 
        label: 'Psychological Mindedness Moderada', 
        description: 'Capacidade de insight presente, mas pode ser limitada a certas áreas ou ser mais intelectual do que emocional.',
        recommendations: [
          'Aprofundar a reflexão: "Por que reagi assim? O que isso diz sobre minha história?".',
          'Praticar a empatia cognitiva: imaginar ativamente a mente do outro.',
          'Conectar insights intelectuais com a experiência emocional sentida no corpo.'
        ]
      },
      { 
        min: 80, 
        max: 120, 
        label: 'Alta Psychological Mindedness', 
        description: 'Forte capacidade de autorreflexão, insight, empatia e integração entre pensamento e sentimento. Bom prognóstico para psicoterapias orientadas ao insight.',
        recommendations: [
          'Utilizar essa capacidade para autoanálise contínua e crescimento autônomo.',
          'Cuidar para não intelectualizar excessivamente (ruminação analítica).',
          'Aplicar os insights para mudanças comportamentais concretas.'
        ]
      },
    ],
  }
};
