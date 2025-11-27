
import { InventoryForm } from '../types';

export const IAT_INVENTORY: InventoryForm = {
  id: 'iat',
  acronym: 'IAT',
  name: 'Inventário de Autoanálise e Insight Terapêutico',
  objective: 'O IAT avalia o grau em que o indivíduo reflete sobre suas experiências terapêuticas, reconhece padrões emocionais e cognitivos emergentes no processo e integra aprendizados obtidos nas sessões. Ele mede autoanálise reflexiva, insight terapêutico e transferência da compreensão para a vida real — capacidades fundamentais para a evolução na psicoterapia.',
  instructions: 'As afirmações a seguir se referem à maneira como você costuma pensar e refletir sobre suas sessões de terapia e sobre o que aprende nelas. Leia cada frase com atenção e marque a opção que melhor descreve o quanto ela corresponde à sua experiência. Seja honesto e pense em seu processo terapêutico atual ou mais recente.',
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
      id: 'post_session_reflection',
      name: 'Reflexão Pós-Sessão',
      icon: '🪞',
      description: 'Habilidade de continuar processando mentalmente os conteúdos e emoções que surgiram durante a sessão de terapia.',
      interpretationLabels: {
        level_1: 'Baixa reflexão sobre o conteúdo das sessões.',
        level_2: 'Reflexão superficial ou ocasional.',
        level_3: 'Boa capacidade de refletir e elaborar os temas terapêuticos.',
        level_4: 'Elevada reflexão, com aprofundamento contínuo dos insights.',
      },
      questions: [
        { id: 5501, text: 'Depois das sessões, costumo pensar sobre o que foi falado.' },
        { id: 5502, text: 'Reflito sobre como as conversas na terapia se aplicam à minha vida diária.' },
        { id: 5503, text: 'Às vezes evito pensar na sessão porque me deixa desconfortável.', isReversed: true },
        { id: 5504, text: 'Costumo escrever, anotar ou refletir mentalmente sobre os temas que emergem na terapia.' },
        { id: 5505, text: 'Tento lembrar de expressões ou ideias que o(a) terapeuta destacou.' },
        { id: 5506, text: 'Quando algo mexe comigo na sessão, busco entender o porquê.' },
        { id: 5507, text: 'Às vezes saio da terapia e tento esquecer o assunto rapidamente.', isReversed: true },
        { id: 5508, text: 'As sessões despertam reflexões que continuam por dias.' },
      ],
    },
    {
      id: 'internal_insight_understanding',
      name: 'Insight e Compreensão Interna',
      icon: '🧩',
      description: 'Capacidade de conectar experiências passadas com padrões atuais e compreender as origens de seus sentimentos e comportamentos.',
      interpretationLabels: {
        level_1: 'Baixa capacidade de obter novos insights sobre si.',
        level_2: 'Compreensão intelectual com dificuldade de aprofundamento.',
        level_3: 'Bons insights sobre padrões de comportamento e emoções.',
        level_4: 'Elevada capacidade de compreender as raízes de seus padrões.',
      },
      questions: [
        { id: 5601, text: 'A terapia me ajuda a perceber relações entre meu passado e meus comportamentos atuais.' },
        { id: 5602, text: 'Tenho conseguido entender melhor as origens das minhas emoções.' },
        { id: 5603, text: 'Sinto que compreendo o motivo de reagir de certas formas.' },
        { id: 5604, text: 'Tenho dificuldade em entender o que o(a) terapeuta tenta me mostrar.', isReversed: true },
        { id: 5605, text: 'As sessões me fazem enxergar coisas sobre mim que eu não via antes.' },
        { id: 5606, text: 'Consigo identificar pensamentos automáticos que surgem em situações difíceis.' },
        { id: 5607, text: 'Percebo padrões repetitivos no que eu conto durante as sessões.' },
        { id: 5608, text: 'Às vezes sinto que entendo racionalmente, mas não emocionalmente.', isReversed: true },
      ],
    },
    {
      id: 'therapeutic_application_transfer',
      name: 'Aplicação e Transferência Terapêutica',
      icon: '💬',
      description: 'Habilidade de aplicar os aprendizados e as estratégias da terapia na vida cotidiana, fora do consultório.',
      interpretationLabels: {
        level_1: 'Dificuldade em aplicar os aprendizados da terapia.',
        level_2: 'Aplicação inconsistente ou apenas em situações específicas.',
        level_3: 'Boa capacidade de transferir os aprendizados para a vida diária.',
        level_4: 'Elevada integração, com mudanças consistentes no comportamento.',
      },
      questions: [
        { id: 5701, text: 'Tento colocar em prática o que aprendo nas sessões.' },
        { id: 5702, text: 'Consigo usar o que aprendo na terapia quando enfrento dificuldades.' },
        { id: 5703, text: 'Às vezes entendo o que preciso fazer, mas não consigo aplicar.', isReversed: true },
        { id: 5704, text: 'Já percebi mudanças positivas em meu comportamento desde que comecei a terapia.' },
        { id: 5705, text: 'Tento observar minhas reações fora da terapia, como faço nas sessões.' },
        { id: 5706, text: 'Reflito sobre as situações do cotidiano da mesma forma que na terapia.' },
        { id: 5707, text: 'Sinto que consigo me “auto-observar” como aprendi em sessão.' },
        { id: 5708, text: 'Às vezes esqueço completamente o que foi trabalhado até a próxima sessão.', isReversed: true },
      ],
    },
    {
      id: 'emotional_experiential_insight',
      name: 'Insight Emocional e Experiencial',
      icon: '🔍',
      description: 'Capacidade de não apenas entender racionalmente, mas também sentir a mudança emocional que o insight proporciona.',
      interpretationLabels: {
        level_1: 'Predomínio de insights intelectuais sem impacto emocional.',
        level_2: 'Insights emocionais raros ou superficiais.',
        level_3: 'Boa capacidade de conectar entendimento com sentimento.',
        level_4: 'Elevada integração, com insights que geram alívio e mudança emocional profunda.',
      },
      questions: [
        { id: 5801, text: 'Quando entendo algo sobre mim, consigo sentir isso profundamente.' },
        { id: 5802, text: 'Às vezes compreendo algo, mas não sinto que isso realmente mudou.', isReversed: true },
        { id: 5803, text: 'Tenho momentos de clareza emocional durante ou após as sessões.' },
        { id: 5804, text: 'Sinto alívio quando percebo o significado de certos sentimentos.' },
        { id: 5805, text: 'Já vivi momentos de “ficha caindo” na terapia.' },
        { id: 5806, text: 'Percebo mudanças emocionais sutis quando entendo algo sobre meu comportamento.' },
        { id: 5807, text: 'Às vezes entendo racionalmente, mas continuo sentindo o mesmo.', isReversed: true },
        { id: 5808, text: 'Tenho a sensação de integração entre o que penso e o que sinto após as sessões.' },
      ],
    },
    {
      id: 'reflective_autonomy_generalization',
      name: 'Autonomia Reflexiva e Generalização',
      icon: '⚖️',
      description: 'Desenvolvimento de uma capacidade interna de auto-observação e análise, tornando-se seu próprio "terapeuta interno".',
      interpretationLabels: {
        level_1: 'Dependência do terapeuta para gerar insights.',
        level_2: 'Autonomia reflexiva em desenvolvimento, mas ainda limitada.',
        level_3: 'Boa capacidade de autoanálise e observação fora das sessões.',
        level_4: 'Elevada autonomia, com internalização do processo terapêutico.',
      },
      questions: [
        { id: 5901, text: 'Tenho aprendido a me observar mesmo fora das sessões.' },
        { id: 5902, text: 'Hoje consigo identificar meus padrões emocionais sem tanta ajuda.' },
        { id: 5903, text: 'A terapia me ensinou a reconhecer sinais precoces de sofrimento.' },
        { id: 5904, text: 'Às vezes dependo do(a) terapeuta para perceber o que está acontecendo comigo.', isReversed: true },
        { id: 5905, text: 'Tenho desenvolvido uma capacidade própria de autoanálise.' },
        { id: 5906, text: 'Percebo que minha forma de pensar sobre mim mesmo mudou desde o início da terapia.' },
        { id: 5907, text: 'Consigo refletir sobre meus problemas com mais profundidade do que antes.' },
        { id: 5908, text: 'Continuo aplicando aprendizados da terapia mesmo quando não estou em acompanhamento.' },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'O escore total (0–160) indica o nível global de autoanálise e insight terapêutico.',
    subScoresDescription: 'Subescores por domínio podem ser calculados para avaliar áreas específicas de reflexão e integração terapêutica.',
    ranges: [
      { 
        min: 0, 
        max: 39, 
        label: 'Baixo Insight / Reflexão Limitada', 
        description: 'Dificuldade em refletir sobre o processo, tendência a ver a terapia como algo externo ou intelectual. Mudanças podem ser lentas devido à falta de internalização.',
        recommendations: [
          'Estimular o uso de diários terapêuticos para registrar reflexões pós-sessão.',
          'Focar em insights menores e concretos antes de interpretações profundas.',
          'Explorar possíveis bloqueios emocionais que impedem a auto-observação.'
        ]
      },
      { 
        min: 40, 
        max: 79, 
        label: 'Insight em Desenvolvimento', 
        description: 'Capacidade reflexiva presente, mas talvez inconsistente ou focada mais no nível racional (insight intelectual) do que no emocional.',
        recommendations: [
          'Incentivar a "ponte" entre a sessão e a vida diária (tarefas comportamentais).',
          'Trabalhar a conexão entre pensamento e emoção sentida no corpo.',
          'Reforçar a autonomia do paciente na identificação de padrões.'
        ]
      },
      { 
        min: 80, 
        max: 119, 
        label: 'Boa Capacidade de Insight', 
        description: 'O paciente consegue conectar passado e presente, aplicar aprendizados e se auto-observar com eficácia.',
        recommendations: [
          'Aprofundar a autonomia: "O que você acha que isso significa?".',
          'Focar na generalização dos ganhos para diversas áreas da vida.',
          'Validar a capacidade do paciente de ser seu próprio terapeuta.'
        ]
      },
      { 
        min: 120, 
        max: 160, 
        label: 'Elevada Capacidade de Autoanálise', 
        description: 'Integração profunda de insights emocionais e cognitivos. O processo terapêutico foi internalizado, permitindo crescimento contínuo e autônomo.',
        recommendations: [
          'Considerar espaçamento das sessões ou alta terapêutica, se os objetivos clínicos foram atingidos.',
          'Focar em manutenção de ganhos e prevenção de recaídas.',
          'Celebrar a autonomia e a consolidação da identidade terapêutica.'
        ]
      }
    ]
  }
};
