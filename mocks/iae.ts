
import { InventoryForm } from '../types';

export const IAE_INVENTORY: InventoryForm = {
  id: 'iae',
  acronym: 'IAE',
  name: 'Inventário de Autoestima e Autovalor',
  objective: 'Avaliar a percepção de valor pessoal, autoconfiança, aceitação de si mesmo e crítica interna.',
  instructions: 'Leia cada afirmação e indique o quanto ela descreve seu comportamento, pensamento ou sentimento em relação a si mesmo.',
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
      id: 'self_acceptance',
      name: 'Autoaceitação',
      icon: '🌟',
      description: 'Capacidade de aceitar as próprias características, emoções e corpo sem julgamento excessivo.',
      interpretationLabels: {
        level_1: 'Fragilidade significativa',
        level_2: 'Tendência a baixa autoestima',
        level_3: 'Autoestima funcional',
        level_4: 'Autoestima sólida / saudável',
      },
      questions: [
        { id: 43001, text: 'Sinto-me confortável com quem eu sou.' },
        { id: 43002, text: 'Aceito meus pontos fortes e fracos.' },
        { id: 43003, text: 'Frequentemente me comparo negativamente com os outros.', isReversed: true },
        { id: 43004, text: 'Sinto-me digno(a) de respeito e consideração.' },
        { id: 43005, text: 'Aceito minhas emoções, mesmo as negativas.' },
        { id: 43006, text: 'Tenho facilidade em reconhecer minhas conquistas.' },
        { id: 43007, text: 'Sinto-me bem comigo mesmo(a), mesmo quando falho.' },
      ],
    },
    {
      id: 'self_confidence_competence',
      name: 'Autoconfiança e Competência',
      icon: '💪',
      description: 'Crença na própria capacidade de lidar com desafios e reconhecimento do próprio valor, independentemente de conquistas.',
       interpretationLabels: {
        level_1: 'Fragilidade significativa',
        level_2: 'Tendência a baixa autoestima',
        level_3: 'Autoestima funcional',
        level_4: 'Autoestima sólida / saudável',
      },
      questions: [
        { id: 43008, text: 'Confio na minha capacidade de resolver problemas.' },
        { id: 43009, text: 'Sinto-me capaz de enfrentar desafios diários.' },
        { id: 43010, text: 'Evito assumir responsabilidades por medo de fracassar.', isReversed: true },
        { id: 43011, text: 'Sinto-me seguro(a) ao tomar decisões importantes.' },
        { id: 43012, text: 'Acredito em minha habilidade de atingir metas pessoais.' },
        { id: 43013, text: 'Tenho confiança para expressar minhas opiniões.' },
        { id: 43014, text: 'Sinto-me preparado(a) para lidar com situações novas.' },
      ],
    },
    {
      id: 'self_criticism_internal_standards',
      name: 'Autocrítica e Padrões Internos',
      icon: '⚖️',
      description: 'Tendência a se julgar severamente, estabelecer padrões inatingíveis e sentir vergonha por falhas.',
       interpretationLabels: {
        level_1: 'Fragilidade significativa',
        level_2: 'Tendência a baixa autoestima',
        level_3: 'Autoestima funcional',
        level_4: 'Autoestima sólida / saudável',
      },
      questions: [
        { id: 43015, text: 'Frequentemente me culpo por pequenos erros.', isReversed: true },
        { id: 43016, text: 'Consigo reconhecer quando estou sendo injusto(a) comigo mesmo(a).' },
        { id: 43017, text: 'Aceito que a perfeição não é necessária.' },
        { id: 43018, text: 'Sinto que mereço coisas boas na vida.' },
        { id: 43019, text: 'Critico-me excessivamente diante de falhas.', isReversed: true },
        { id: 43020, text: 'Consigo refletir sobre meus erros sem me punir.' },
        { id: 43021, text: 'Sou capaz de perdoar a mim mesmo(a) por decisões passadas.' },
      ],
    },
    {
      id: 'social_self_esteem',
      name: 'Relações e Autoestima Social',
      icon: '🤝',
      description: 'Nível de segurança e conforto em situações sociais, refletindo a confiança nas próprias opiniões e capacidades.',
       interpretationLabels: {
        level_1: 'Fragilidade significativa',
        level_2: 'Tendência a baixa autoestima',
        level_3: 'Autoestima funcional',
        level_4: 'Autoestima sólida / saudável',
      },
      questions: [
        { id: 43022, text: 'Sinto-me aceito(a) pelas pessoas importantes na minha vida.' },
        { id: 43023, text: 'Confio em mim mesmo(a) para estabelecer relacionamentos saudáveis.' },
        { id: 43024, text: 'Evito me colocar em situações sociais por medo de rejeição.', isReversed: true },
        { id: 43025, text: 'Sinto-me valorizado(a) em minhas interações sociais.' },
        { id: 43026, text: 'Acredito que meus sentimentos e opiniões são importantes.' },
        { id: 43027, text: 'Consigo manter limites saudáveis sem culpa.' },
        { id: 43028, text: 'Sinto-me seguro(a) em expressar minhas necessidades emocionais.' },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'A pontuação total (0–112) indica o nível de autoestima. Escores mais altos refletem maior autoestima.',
    subScoresDescription: 'Subescores por domínio podem ser calculados (média de 0-4) para análises específicas.',
    ranges: [
      { 
        min: 0, 
        max: 28, 
        label: 'Autoestima Muito Baixa', 
        description: 'Autoimagem negativa, insegurança acentuada e autocrítica severa. Pode haver esquiva social e medo de falhar.',
        recommendations: [
          'Intervenção terapêutica para fortalecer o "Eu".',
          'Identificar distorções cognitivas sobre si mesmo (ex: "sou um fracasso").',
          'Começar com pequenas metas alcançáveis para construir senso de competência.',
          'Trabalhar a assertividade e limites interpessoais.'
        ]
      },
      { 
        min: 29, 
        max: 56, 
        label: 'Autoestima Baixa', 
        description: 'Fragilidades na autoimagem e confiança. Tendência a depender da aprovação externa.',
        recommendations: [
          'Exercícios de autovalorização (listar qualidades e conquistas).',
          'Reduzir o perfeccionismo e aceitar erros como aprendizado.',
          'Praticar o autocuidado como forma de respeito a si mesmo.'
        ]
      },
      { 
        min: 57, 
        max: 84, 
        label: 'Autoestima Moderada', 
        description: 'Recursos adequados de autovalor, mas com vulnerabilidade a críticas ou estresse.',
        recommendations: [
          'Consolidar a autoeficácia através de desafios progressivos.',
          'Fortalecer a independência emocional.',
          'Manter diálogo interno compassivo.'
        ]
      },
      { 
        min: 85, 
        max: 112, 
        label: 'Autoestima Elevada', 
        description: 'Percepção positiva e realista de si mesmo. Confiança, autoaceitação e resiliência diante de críticas.',
        recommendations: [
          'Continuar investindo em crescimento pessoal.',
          'Usar a segurança pessoal para apoiar e empoderar outros.',
          'Manter a humildade e a abertura a feedbacks.'
        ]
      },
    ],
  },
};
