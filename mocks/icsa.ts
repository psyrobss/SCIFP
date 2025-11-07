
import { InventoryForm } from '../types';

export const ICSA_INVENTORY: InventoryForm = {
  id: 'icsa',
  acronym: 'ICSA',
  name: 'Inventário de Competência Social Avançada',
  objective: 'Avaliar o grau de sofisticação, flexibilidade e eficácia das habilidades sociais complexas do indivíduo — incluindo empatia estratégica, negociação, regulação interpessoal, adaptabilidade comunicativa e resolução de conflitos.',
  instructions: 'As frases a seguir descrevem atitudes e comportamentos que podem ocorrer nas relações interpessoais.\nLeia atentamente e indique com que frequência essas situações se aplicam a você.',
  responseScale: [
    { value: 0, label: 'Nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre' },
  ],
  domains: [
    {
      id: 'strategic_communication',
      name: 'Comunicação Estratégica e Clareza Interpessoal',
      icon: '💬',
      description: 'Avalia a habilidade de expressar pensamentos e sentimentos de modo claro, adaptando a linguagem ao contexto.',
      questions: [
        { id: 60001, text: 'Consigo expressar minhas ideias sem gerar mal-entendidos.' },
        { id: 60002, text: 'Adapto meu modo de falar conforme a pessoa ou situação.' },
        { id: 60003, text: 'Sei ouvir o outro antes de responder.' },
        { id: 60004, text: 'Busco ser direto(a), mas sem parecer agressivo(a).' },
        { id: 60005, text: 'Consigo dar feedbacks construtivos sem ofender.' },
        { id: 60006, text: 'Tenho dificuldade em expressar o que realmente penso em conversas difíceis.', isReversed: true },
        { id: 60007, text: 'Costumo perceber quando minha comunicação não está sendo clara.' },
      ],
    },
    {
      id: 'negotiation_conflict_resolution',
      name: 'Negociação e Resolução de Conflitos',
      icon: '⚖️',
      description: 'Avalia a capacidade de lidar com divergências de forma madura e colaborativa.',
      questions: [
        { id: 60008, text: 'Em situações de conflito, busco compreender os dois lados.' },
        { id: 60009, text: 'Mantenho o autocontrole quando alguém discorda de mim.' },
        { id: 60010, text: 'Procuro soluções que beneficiem a todos os envolvidos.' },
        { id: 60011, text: 'Evito entrar em discussões desnecessárias.' },
        { id: 60012, text: 'Tenho facilidade para chegar a acordos mesmo com pessoas difíceis.' },
        { id: 60013, text: 'Quando alguém me confronta, costumo reagir de forma impulsiva.', isReversed: true },
        { id: 60014, text: 'Aprendo com os conflitos em vez de apenas evitá-los.' },
      ],
    },
    {
      id: 'strategic_empathy_social_intelligence',
      name: 'Empatia Estratégica e Inteligência Social',
      icon: '🤝',
      description: 'Avalia a capacidade de ler emoções e intenções dos outros e responder de modo ajustado e empático.',
      questions: [
        { id: 60015, text: 'Percebo facilmente mudanças sutis no tom de voz ou expressão das pessoas.' },
        { id: 60016, text: 'Consigo entender o que os outros sentem mesmo quando não dizem diretamente.' },
        { id: 60017, text: 'Adapto meu comportamento conforme o estado emocional da outra pessoa.' },
        { id: 60018, text: 'Tenho empatia, mas consigo manter meus próprios limites.' },
        { id: 60019, text: 'Leio bem o “clima emocional” em grupos.' },
        { id: 60020, text: 'Fico confuso(a) com as reações emocionais dos outros.', isReversed: true },
        { id: 60021, text: 'Sei usar empatia para melhorar o entendimento mútuo.' },
      ],
    },
    {
      id: 'flexibility_social_cooperation',
      name: 'Flexibilidade e Cooperação Social',
      icon: '🌍',
      description: 'Avalia adaptação a contextos sociais, cooperação, trabalho em equipe e abertura à diversidade.',
      questions: [
        { id: 60022, text: 'Trabalho bem com pessoas de estilos diferentes do meu.' },
        { id: 60023, text: 'Tenho facilidade para me integrar a novos grupos.' },
        { id: 60024, text: 'Gosto de cooperar em projetos coletivos.' },
        { id: 60025, text: 'Sou capaz de ajustar meu papel conforme as necessidades do grupo.' },
        { id: 60026, text: 'Aceito críticas sem me sentir pessoalmente atacado(a).' },
        { id: 60027, text: 'Tenho dificuldade em colaborar quando não estou no controle.', isReversed: true },
        { id: 60028, text: 'Valorizo a diversidade de opiniões e perspectivas.' },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'A pontuação total (0–112) indica o nível de competência social. Itens com (R) são invertidos. Escores mais altos refletem maior competência.',
    ranges: [
      { min: 0, max: 28, label: 'Baixa competência social', description: 'Comunicação confusa, reatividade interpessoal, dificuldade de empatia' },
      { min: 29, max: 56, label: 'Competência social limitada', description: 'Boa intenção, mas com falhas em assertividade e flexibilidade' },
      { min: 57, max: 84, label: 'Competência social funcional', description: 'Assertividade equilibrada, empatia e regulação emocional em interações' },
      { min: 85, max: 112, label: 'Competência social avançada', description: 'Alta adaptabilidade, empatia estratégica, habilidades de liderança social' },
    ],
  },
};