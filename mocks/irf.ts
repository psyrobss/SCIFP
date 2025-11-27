
import { InventoryForm } from '../types';

export const IRF_INVENTORY: InventoryForm = {
  id: 'irf',
  acronym: 'IRF',
  name: 'Inventário de Resiliência e Flexibilidade Psicológica',
  objective: 'Avaliar a capacidade de recuperação emocional, adaptação a situações adversas e flexibilidade comportamental e cognitiva em diferentes contextos da vida.',
  instructions: 'Leia cada afirmação e assinale o quanto ela descreve seu comportamento ou pensamento na maior parte do tempo.',
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
      id: 'emotional_resilience',
      name: 'Resiliência Emocional',
      icon: '💪',
      description: 'Capacidade de se recuperar rapidamente após situações difíceis e manter a clareza de pensamento sob estresse.',
      interpretationLabels: {
        level_1: 'Fragilidade significativa na recuperação emocional.',
        level_2: 'Leve fragilidade, com recuperação emocional lenta.',
        level_3: 'Boa capacidade de recuperação emocional (funcional).',
        level_4: 'Alta resiliência emocional, um recurso sólido.',
      },
      questions: [
        { id: 31001, text: 'Consigo me recuperar rapidamente após situações emocionalmente difíceis.' },
        { id: 31002, text: 'Encaro desafios com calma, mesmo quando estou estressado(a).' },
        { id: 31003, text: 'Sinto que consigo lidar com mudanças inesperadas na minha vida.' },
        { id: 31004, text: 'Em momentos de frustração, consigo manter a clareza de pensamento.' },
        { id: 31005, text: 'Frequentemente consigo transformar dificuldades em aprendizado.' },
        { id: 31006, text: 'Quando algo não sai como planejado, consigo adaptar meus sentimentos.' },
        { id: 31007, text: 'Tenho confiança em minha capacidade de superar problemas emocionais.' },
      ],
    },
    {
      id: 'cognitive_flexibility',
      name: 'Flexibilidade Cognitiva',
      icon: '🔄',
      description: 'Habilidade de ver diferentes perspectivas, adaptar estratégias e lidar com ambiguidades e incertezas.',
      interpretationLabels: {
        level_1: 'Rigidez cognitiva significativa (fragilidade).',
        level_2: 'Leve rigidez, com dificuldade em mudar de perspectiva.',
        level_3: 'Boa capacidade de adaptação mental (funcional).',
        level_4: 'Alta flexibilidade cognitiva, um recurso sólido.',
      },
      questions: [
        { id: 31008, text: 'Consigo ver diferentes perspectivas antes de tomar decisões.' },
        { id: 31009, text: 'Adapto minhas estratégias quando percebo que algo não está funcionando.' },
        { id: 31010, text: 'Sou capaz de mudar meu ponto de vista quando necessário.' },
        { id: 31011, text: 'Evito insistir em soluções que claramente não estão dando certo.' },
        { id: 31012, text: 'Posso lidar bem com ambiguidades e incertezas.' },
        { id: 31013, text: 'Ajusto minhas expectativas quando a realidade muda.' },
        { id: 31014, text: 'Costumo encontrar soluções criativas para problemas inesperados.' },
      ],
    },
    {
      id: 'behavioral_flexibility',
      name: 'Flexibilidade Comportamental',
      icon: '🏃',
      description: 'Capacidade de ajustar ações, rotinas e hábitos de acordo com as demandas do ambiente.',
      interpretationLabels: {
        level_1: 'Fragilidade comportamental, com dificuldade em mudar rotinas.',
        level_2: 'Leve dificuldade em se adaptar a mudanças comportamentais.',
        level_3: 'Boa capacidade de ajuste comportamental (funcional).',
        level_4: 'Alta flexibilidade comportamental, um recurso sólido.',
      },
      questions: [
        { id: 31015, text: 'Consigo mudar minha rotina quando necessário sem sentir grande desconforto.' },
        { id: 31016, text: 'Ajusto meu comportamento de acordo com diferentes situações sociais.' },
        { id: 31017, text: 'Consigo lidar com críticas sem me sentir totalmente desestabilizado(a).' },
        { id: 31018, text: 'Posso assumir responsabilidades diferentes sem grande resistência.' },
        { id: 31019, text: 'Ajusto meus comportamentos quando percebo que prejudicam meus objetivos.' },
        { id: 31020, text: 'Sou capaz de alterar hábitos ou estratégias que não estão funcionando.' },
        { id: 31021, text: 'Posso lidar com imprevistos sem me sentir sobrecarregado(a).' },
      ],
    },
    {
      id: 'support_personal_resources',
      name: 'Suporte e Recursos Pessoais',
      icon: '🤝',
      description: 'Habilidade de utilizar recursos internos (habilidades) e externos (suporte social) para enfrentar adversidades.',
      interpretationLabels: {
        level_1: 'Fraca utilização de recursos de suporte (fragilidade).',
        level_2: 'Leve dificuldade em acessar ou pedir ajuda.',
        level_3: 'Bom uso de recursos internos e externos (funcional).',
        level_4: 'Forte rede de suporte e autoconfiança, um recurso sólido.',
      },
      questions: [
        { id: 31022, text: 'Consigo pedir ajuda quando necessário sem sentir vergonha.' },
        { id: 31023, text: 'Tenho recursos internos (habilidades, conhecimentos) que uso em situações difíceis.' },
        { id: 31024, text: 'Apoio de amigos/familiares me ajuda a superar momentos desafiadores.' },
        { id: 31025, text: 'Sinto que posso contar com minhas próprias estratégias de enfrentamento.' },
        { id: 31026, text: 'Busco alternativas práticas quando enfrento obstáculos.' },
        { id: 31027, text: 'Sou capaz de manter o equilíbrio emocional mesmo sob pressão.' },
        { id: 31028, text: 'Consigo identificar e usar meus pontos fortes para lidar com adversidades.' },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'A pontuação total (0–112) indica o nível geral de resiliência e flexibilidade psicológica. Escores mais altos refletem maior capacidade adaptativa.',
    subScoresDescription: 'Subescores por domínio podem ser calculados (média de 0-4) para análises específicas.',
    ranges: [
      { 
        min: 0, 
        max: 28, 
        label: 'Resiliência e Flexibilidade Muito Baixa', 
        description: 'Alta vulnerabilidade ao estresse, dificuldade significativa em se adaptar a mudanças e recuperação lenta após crises.',
        recommendations: [
          'Focar em construção de segurança básica e rotinas estáveis.',
          'Desenvolver tolerância ao mal-estar em pequenas doses.',
          'Buscar suporte terapêutico para fortalecer recursos de enfrentamento.'
        ]
      },
      { 
        min: 29, 
        max: 56, 
        label: 'Baixa Resiliência / Flexibilidade', 
        description: 'Capacidade limitada de enfrentar desafios complexos. Tendência à rigidez cognitiva ou comportamental sob pressão.',
        recommendations: [
          'Treinar a reavaliação cognitiva (ver problemas sob nova ótica).',
          'Praticar a aceitação de mudanças fora do controle.',
          'Ampliar o repertório de estratégias de solução de problemas.'
        ]
      },
      { 
        min: 57, 
        max: 84, 
        label: 'Resiliência e Flexibilidade Moderada', 
        description: 'Bom funcionamento em situações conhecidas, mas pode haver sobrecarga em crises intensas ou inéditas. Presença de recursos adaptativos.',
        recommendations: [
          'Fortalecer a rede de apoio social.',
          'Identificar e usar pontos fortes pessoais conscientemente.',
          'Praticar mindfulness para aumentar a flexibilidade mental.'
        ]
      },
      { 
        min: 85, 
        max: 112, 
        label: 'Alta Resiliência e Flexibilidade', 
        description: 'Excelente capacidade de adaptação, recuperação rápida (bouncing back) e crescimento pós-traumático. Flexibilidade mental e comportamental robusta.',
        recommendations: [
          'Utilizar a resiliência para assumir novos desafios e liderança.',
          'Servir como mentor ou suporte para outros em momentos de crise.',
          'Manter práticas de autocuidado para sustentar a alta performance.'
        ]
      },
    ],
  },
};
