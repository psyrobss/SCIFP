
import { InventoryForm } from '../types';

export const IRPT_INVENTORY: InventoryForm = {
  id: 'irpt',
  acronym: 'IRPT',
  name: 'Inventário de Resistência Psicoterápica (IRPT)',
  objective: 'Avaliar atitudes e sentimentos que podem dificultar o aprofundamento no processo terapêutico, compreendendo-os como mecanismos de proteção, ambivalência ou necessidade de segurança.',
  instructions: 'As frases abaixo descrevem reações comuns durante processos de autoconhecimento. Indique o quanto cada uma se aplica ao seu momento atual, sendo honesto sobre seus sentimentos.',
  scoreOrientation: 'higher_is_worse',
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
      id: 'emotional_avoidance',
      name: 'Proteção Emocional (Evitação)',
      icon: '🛡️',
      description: 'Tendência a evitar o contato com sentimentos dolorosos como forma de autopreservação.',
      interpretationLabels: {
        level_1: 'Alta abertura emocional.',
        level_2: 'Evitação leve de temas sensíveis.',
        level_3: 'Necessidade moderada de proteção.',
        level_4: 'Forte barreira de proteção emocional.',
      },
      questions: [
        { id: 2801, text: 'Evito falar de assuntos que me causam desconforto emocional.' },
        { id: 2802, text: 'Tento manter a conversa na terapia em temas neutros ou superficiais.' },
        { id: 2803, text: 'Tenho dificuldade em demonstrar emoções na frente do terapeuta.' },
        { id: 2804, text: 'Quando algo me emociona, tento mudar de assunto rapidamente.' },
        { id: 2805, text: 'Sinto que perco o controle se expressar sentimentos profundos.' },
        { id: 2806, text: 'Prefiro falar de fatos e lógica, e não de como me sinto.' },
      ],
    },
    {
      id: 'cognitive_resistance_rationalization',
      name: 'Racionalização e Intelectualização',
      icon: '🧠',
      description: 'Uso da lógica e da explicação racional para manter distância da experiência emocional direta.',
      interpretationLabels: {
        level_1: 'Equilíbrio entre pensar e sentir.',
        level_2: 'Tendência leve à racionalização.',
        level_3: 'Uso frequente da lógica como defesa.',
        level_4: 'Forte intelectualização para evitar o sentir.',
      },
      questions: [
        { id: 2901, text: 'Tento explicar racionalmente meus problemas para não ter que senti-los.' },
        { id: 2902, text: 'Costumo justificar minhas atitudes para não parecer vulnerável.' },
        { id: 2903, text: 'Penso e elaboro muito a resposta antes de falar na terapia.' },
        { id: 2904, text: 'Tenho dificuldade em aceitar interpretações que fogem da minha lógica.' },
        { id: 2905, text: 'Sinto necessidade de ter uma explicação teórica para tudo o que vivo.' },
        { id: 2906, text: 'Às vezes uso argumentos inteligentes para não entrar em contato com a dor.' },
      ],
    },
    {
      id: 'control_distrust',
      name: 'Necessidade de Controle e Segurança',
      icon: '🔒',
      description: 'Dificuldade em confiar no processo ou no terapeuta, gerando uma necessidade de controlar o andamento das sessões.',
      interpretationLabels: {
        level_1: 'Alta confiança e entrega.',
        level_2: 'Leve receio ou cautela.',
        level_3: 'Desconfiança moderada e controle.',
        level_4: 'Forte necessidade de controle por insegurança.',
      },
      questions: [
        { id: 3001, text: 'Tenho dificuldade em confiar totalmente no processo terapêutico.' },
        { id: 3002, text: 'Fico muito atento(a) ao que digo, com receio de ser julgado(a).' },
        { id: 3003, text: 'Sinto vontade de “testar” o terapeuta para ver se é seguro.' },
        { id: 3004, text: 'Evito me expor por completo, mesmo sabendo que seria útil.' },
        { id: 3005, text: 'Sinto necessidade de controlar os temas da sessão para me sentir seguro(a).' },
        { id: 3006, text: 'Fico desconfiado(a) sobre as reais intenções do terapeuta.' },
      ],
    },
    {
      id: 'ambivalence_fear_of_change',
      name: 'Ambivalência e Receio da Mudança',
      icon: '⚖️',
      description: 'Conflito interno natural entre o desejo de melhorar e o medo das consequências de mudar.',
      interpretationLabels: {
        level_1: 'Forte desejo de mudança.',
        level_2: 'Leve hesitação sobre mudar.',
        level_3: 'Ambivalência moderada (querer e não querer).',
        level_4: 'Forte medo das consequências da mudança.',
      },
      questions: [
        { id: 3101, text: 'Parte de mim quer mudar, mas outra parte tem muito medo.' },
        { id: 3102, text: 'Sinto receio de descobrir coisas sobre mim que não quero ver.' },
        { id: 3103, text: 'Às vezes penso em parar a terapia quando os assuntos ficam difíceis.' },
        { id: 3104, text: 'Tenho receio de que mudar signifique perder quem eu sou.' },
        { id: 3105, text: 'Evito reflexões que possam me obrigar a tomar atitudes diferentes.' },
        { id: 3106, text: 'Às vezes sinto que eu mesmo(a) saboto meu progresso.' },
      ],
    },
    {
      id: 'therapeutic_dependence_defensive_transference',
      name: 'Dinâmica Relacional (Transferência)',
      icon: '💬',
      description: 'Reações emocionais intensas em relação ao terapeuta, como idealização, dependência ou hostilidade defensiva.',
      interpretationLabels: {
        level_1: 'Relação colaborativa e autônoma.',
        level_2: 'Leve dependência ou idealização.',
        level_3: 'Padrões relacionais moderados (ex: busca de aprovação).',
        level_4: 'Forte reatividade ou dependência na relação terapêutica.',
      },
      questions: [
        { id: 3201, text: 'Fico excessivamente ansioso(a) com a opinião do meu terapeuta.' },
        { id: 3202, text: 'Sinto que preciso da aprovação do terapeuta para me sentir bem.' },
        { id: 3203, text: 'Fico ressentido(a) ou na defensiva quando o terapeuta aponta algo difícil.' },
        { id: 3204, text: 'Tenho medo de que o terapeuta me rejeite se eu discordar.' },
        { id: 3205, text: 'Sinto raiva quando não me sinto compreendido(a) imediatamente.' },
        { id: 3206, text: 'Às vezes espero que o terapeuta tenha respostas mágicas para mim.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica a intensidade dos mecanismos de proteção ativados. Pontuações altas não são "erros", mas sinalizam onde o paciente precisa de mais segurança.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Abertura e Colaboração', 
        description: 'O paciente se sente seguro e disposto a explorar questões profundas. A aliança terapêutica parece sólida e permite vulnerabilidade.',
        recommendations: [
          'Aproveitar o momento para aprofundar temas centrais.',
          'Reforçar a coragem de se expor.',
          'Explorar áreas de maior sensibilidade com segurança.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Hesitação e Cautela', 
        description: 'Existem defesas leves ou situacionais. O paciente pode intelectualizar ou evitar certos tópicos, mas mantém o vínculo funcional.',
        recommendations: [
          'Validar a dificuldade em abordar certos temas ("Faz sentido ser difícil falar disso").',
          'Identificar quais assuntos específicos geram mais esquiva.',
          'Normalizar a ambivalência sobre a mudança.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Necessidade de Segurança (Proteção Moderada)', 
        description: 'Mecanismos de defesa ativos (racionalização, evitação, desconfiança) que protegem o paciente de angústias maiores. Indica que o ritmo pode estar rápido demais.',
        recommendations: [
          'Abordar a "resistência" com curiosidade empática, não confronto.',
          'Focar no fortalecimento do vínculo e da confiança antes de aprofundar.',
          'Trabalhar no "aqui e agora" da relação terapêutica.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Proteção Intensa / Bloqueio', 
        description: 'Forte ativação de defesas para preservar a integridade psíquica. O paciente pode sentir-se ameaçado pela mudança ou pela intimidade da terapia.',
        recommendations: [
          'Priorizar a redução da ansiedade e o restabelecimento da segurança.',
          'Respeitar as defesas: elas estão lá por um motivo.',
          'Investigar crenças sobre o perigo de se abrir ou mudar.',
          'Avaliar se o método terapêutico precisa ser ajustado.'
        ]
      },
    ],
  }
};
