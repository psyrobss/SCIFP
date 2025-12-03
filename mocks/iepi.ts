
import { InventoryForm } from '../types';

export const IEPI_INVENTORY: InventoryForm = {
  id: 'iepi',
  acronym: 'IEPI',
  name: 'Inventário de Estilo de Personalidade Interpessoal',
  objective: 'Mapear os padrões habituais de interação social, identificando como você equilibra autonomia, conexão, controle e assertividade em seus relacionamentos.',
  instructions: 'Abaixo estão frases sobre como você costuma se comportar nas suas relações. Indique o quanto cada opção representa seu modo de ser na maioria das vezes.',
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
      id: 'interpersonal_empathy',
      name: 'Acolhimento e Empatia',
      icon: '💞',
      description: 'Disposição para oferecer apoio, demonstrar afeto e conectar-se emocionalmente.',
      questions: [
        { id: 7001, text: 'Gosto de ouvir as pessoas e entender o que elas sentem.' },
        { id: 7002, text: 'Tenho facilidade em me colocar no lugar do outro.' },
        { id: 7003, text: 'Às vezes pareço frio(a) ou distante, mesmo sem querer.', isReversed: true },
        { id: 7004, text: 'Me preocupo com o bem-estar das pessoas próximas.' },
        { id: 7005, text: 'Costumo demonstrar afeto de maneira aberta.' },
        { id: 7006, text: 'Tenho dificuldade em expressar carinho.', isReversed: true },
        { id: 7007, text: 'Sinto satisfação em ajudar e apoiar quem precisa.' },
        { id: 7008, text: 'Quando alguém está mal, sei como oferecer conforto.' },
      ],
    },
    {
      id: 'assertiveness_autonomy',
      name: 'Assertividade e Autonomia',
      icon: '⚖️',
      description: 'Habilidade de expressar opiniões e limites de forma clara e respeitosa.',
      questions: [
        { id: 7101, text: 'Consigo expressar minha opinião mesmo quando ela difere dos outros.' },
        { id: 7102, text: 'Tenho clareza sobre meus limites pessoais.' },
        { id: 7103, text: 'Às vezes cedo para evitar conflitos.', isReversed: true },
        { id: 7104, text: 'Consigo dizer “não” quando algo me incomoda.' },
        { id: 7105, text: 'Falo o que penso sem medo excessivo de rejeição.' },
        { id: 7106, text: 'Tenho dificuldade em defender meu ponto de vista.', isReversed: true },
        { id: 7107, text: 'Consigo equilibrar escutar o outro e manter minha posição.' },
        { id: 7108, text: 'Às vezes evito dizer o que penso para manter a paz.', isReversed: true },
      ],
    },
    {
      id: 'control_dominance',
      name: 'Liderança e Direção',
      icon: '🧩',
      description: 'Tendência a organizar interações e influenciar decisões (avaliado quanto ao equilíbrio, não excesso).',
      questions: [
        { id: 7201, text: 'Sinto-me confortável em assumir a liderança quando necessário.' },
        { id: 7202, text: 'Consigo delegar ou aceitar a direção de outros sem ansiedade.', isReversed: true }, // Revertido: ansiedade com falta de controle é ruim
        { id: 7203, text: 'Às vezes imponho minha vontade sem perceber.', isReversed: true },
        { id: 7204, text: 'Costumo organizar e direcionar conversas de forma construtiva.' },
        { id: 7205, text: 'Sinto desconforto quando percebo falta de clareza nas posições.' },
        { id: 7206, text: 'Tenho necessidade excessiva de saber o que os outros estão sentindo.', isReversed: true },
        { id: 7207, text: 'Às vezes sou percebido(a) como inflexível.', isReversed: true },
        { id: 7208, text: 'Fico frustrado(a) quando os outros não seguem o que considero correto.', isReversed: true },
      ],
    },
    {
      id: 'avoidance_withdrawal',
      name: 'Abertura e Conexão (vs. Evitação)',
      icon: '🌫️',
      description: 'Disposição para intimidade e enfrentamento de questões relacionais.',
      questions: [
        { id: 7301, text: 'Evito falar sobre meus sentimentos mais profundos.', isReversed: true },
        { id: 7302, text: 'Sinto-me confortável em depender emocionalmente de pessoas de confiança.' },
        { id: 7303, text: 'Quando me aproximo demais, acabo me afastando depois.', isReversed: true },
        { id: 7304, text: 'Prefiro lidar com meus problemas sozinho(a).', isReversed: true },
        { id: 7305, text: 'Às vezes me fecho quando alguém tenta se aproximar demais.', isReversed: true },
        { id: 7306, text: 'Consigo pedir ajuda quando preciso.' },
        { id: 7307, text: 'Fico desconfortável quando alguém demonstra muito afeto.', isReversed: true },
        { id: 7308, text: 'Evito me expor emocionalmente para não ser ferido(a).', isReversed: true },
      ],
    },
    {
      id: 'approval_seeking_rejection_sensitivity',
      name: 'Segurança Interpessoal (vs. Aprovação)',
      icon: '🔍',
      description: 'Nível de independência da opinião alheia e segurança frente a críticas.',
      questions: [
        { id: 7401, text: 'Preciso que as pessoas gostem de mim para me sentir bem.', isReversed: true },
        { id: 7402, text: 'Fico muito abalado(a) quando sou criticado(a).', isReversed: true },
        { id: 7403, text: 'Às vezes evito dar opinião por medo de ser julgado(a).', isReversed: true },
        { id: 7404, text: 'Sinto-me seguro(a) mesmo quando não sou validado(a) externamente.' },
        { id: 7405, text: 'Reflito demais sobre o que os outros pensam de mim.', isReversed: true },
        { id: 7406, text: 'Tenho medo de decepcionar as pessoas importantes para mim.', isReversed: true },
        { id: 7407, text: 'Às vezes mudo meu comportamento para agradar.', isReversed: true },
        { id: 7408, text: 'Sinto que meu valor independe da aprovação alheia.' },
      ],
    },
    {
      id: 'cooperation_flexibility',
      name: 'Cooperação e Flexibilidade',
      icon: '⚙️',
      description: 'Capacidade de colaborar, negociar e adaptar-se em situações de divergência.',
      questions: [
        { id: 7501, text: 'Consigo chegar a acordos mesmo em desacordos.' },
        { id: 7502, text: 'Busco compreender o ponto de vista dos outros antes de reagir.' },
        { id: 7503, text: 'Tenho dificuldade em aceitar opiniões diferentes das minhas.', isReversed: true },
        { id: 7504, text: 'Gosto de encontrar soluções que funcionem para todos.' },
        { id: 7505, text: 'Sei lidar com divergências sem transformar em conflito.' },
        { id: 7506, text: 'Tento reparar relações quando algo dá errado.' },
        { id: 7507, text: 'Às vezes insisto demais em ter razão.', isReversed: true },
        { id: 7508, text: 'Consigo mudar de posição quando percebo que o outro tem razão.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) reflete o estilo interpessoal. Escores mais altos indicam maior flexibilidade, assertividade e segurança nas relações.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Estilo Defensivo / Retraído', 
        description: 'Tendência a proteger-se nas relações, seja evitando intimidade, cedendo excessivamente ou reagindo com rigidez. Pode indicar insegurança social.',
        recommendations: [
          'Treinamento de Assertividade: praticar expressar necessidades de forma segura.',
          'Explorar o medo de rejeição ou julgamento em ambiente terapêutico.',
          'Começar com pequenas exposições sociais em ambientes seguros.',
          'Validar as próprias necessidades como legítimas.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Estilo Interpessoal em Desenvolvimento', 
        description: 'Capacidade de conexão presente, mas com oscilações. Pode haver conflito entre o desejo de agradar e a necessidade de autonomia, ou entre controle e entrega.',
        recommendations: [
          'Desenvolver a flexibilidade em situações de conflito (nem ceder, nem impor).',
          'Equilibrar o cuidado com o outro e o autocuidado.',
          'Observar padrões de repetição nas relações (ex: sempre assumir a culpa).'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Estilo Interpessoal Funcional', 
        description: 'Boas habilidades sociais. O indivíduo consegue navegar bem entre diferentes contextos, mantendo relações saudáveis na maior parte do tempo.',
        recommendations: [
          'Refinar a escuta ativa para aprofundar vínculos.',
          'Manter a autenticidade mesmo sob pressão social.',
          'Praticar a negociação ganha-ganha em conflitos mais complexos.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Competência Interpessoal', 
        description: 'Excelente equilíbrio entre empatia, assertividade e autenticidade. Capacidade de estabelecer vínculos seguros, profundos e recíprocos.',
        recommendations: [
          'Utilizar a competência social para mediar grupos ou liderar.',
          'Servir como modelo de comunicação saudável.',
          'Continuar investindo na qualidade e profundidade das relações íntimas.'
        ]
      },
    ],
  }
};
