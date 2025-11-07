
import { InventoryForm } from '../types';

export const EAR_INVENTORY: InventoryForm = {
  id: 'ear',
  acronym: 'EAR',
  name: 'Escala de Autoexpansão em Relacionamento Romântico (EAR)',
  objective: 'Avaliar a extensão em que o indivíduo se expande pessoalmente, emocional e cognitivamente, através de um parceiro romântico.',
  instructions: 'Leia cada afirmação e indique o quanto ela descreve seu comportamento ou sentimentos habituais com seu parceiro romântico.',
  responseScale: [
    { value: 0, label: 'Nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre' },
  ],
  domains: [
    {
      id: 'personal_growth',
      name: 'Crescimento Pessoal',
      icon: '🌱',
      description: 'Capacidade de aprender, desenvolver habilidades e expandir a visão de mundo através da interação com o parceiro(a).',
      questions: [
        { id: 42001, text: 'Aprendo coisas novas através do meu parceiro(a).' },
        { id: 42002, text: 'Meu parceiro(a) me incentiva a desenvolver habilidades e interesses.' },
        { id: 42003, text: 'Sinto-me motivado(a) a melhorar pessoalmente pelo relacionamento.' },
        { id: 42004, text: 'O relacionamento me ajuda a ampliar minha visão de mundo.' },
        { id: 42005, text: 'Crescer junto do parceiro é importante para mim.' },
        { id: 42006, text: 'Interações com meu parceiro(a) me fazem explorar novos interesses.' },
      ],
    },
    {
      id: 'exploration_experiences',
      name: 'Exploração e Experiências',
      icon: '🌍',
      description: 'Disposição para participar de novas atividades, sair da zona de conforto e se aventurar em novas experiências com o parceiro(a).',
      questions: [
        { id: 42007, text: 'Participo de atividades novas ou diferentes com meu parceiro(a).' },
        { id: 42008, text: 'O relacionamento me incentiva a sair da minha zona de conforto.' },
        { id: 42009, text: 'Gosto de experimentar novas experiências com meu parceiro(a).' },
        { id: 42010, text: 'Frequentemente tentamos coisas novas juntos.' },
        { id: 42011, text: 'Meu parceiro(a) me apresenta novas perspectivas e ideias.' },
        { id: 42012, text: 'Busco desafios e experiências conjuntas no relacionamento.' },
      ],
    },
    {
      id: 'positive_emotions_engagement',
      name: 'Emoções Positivas e Engajamento',
      icon: '😊',
      description: 'Capacidade de vivenciar alegria, entusiasmo e bem-estar emocional através da interação com o parceiro(a).',
      questions: [
        { id: 42013, text: 'Sinto alegria e entusiasmo ao interagir com meu parceiro(a).' },
        { id: 42014, text: 'O relacionamento ajuda a lidar melhor com emoções negativas.' },
        { id: 42015, text: 'Momentos com meu parceiro aumentam meu bem-estar emocional.' },
        { id: 42016, text: 'Sinto-me energizado(a) após passar tempo juntos.' },
        { id: 42017, text: 'Conversas e experiências com meu parceiro me inspiram.' },
        { id: 42018, text: 'O relacionamento contribui para minha satisfação pessoal.' },
        { id: 42019, text: 'Interações com meu parceiro(a) me motivam a agir positivamente.' },
      ],
    },
    {
      id: 'autonomy_interpersonal_support',
      name: 'Autonomia e Apoio Interpessoal',
      icon: '🤝',
      description: 'Equilíbrio entre o desenvolvimento da autonomia pessoal e a busca por apoio emocional seguro no relacionamento.',
      questions: [
        { id: 42020, text: 'Meu parceiro(a) me ajuda a me conhecer melhor.' },
        { id: 42021, text: 'Posso contar com ele(a) em decisões importantes.' },
        { id: 42022, text: 'Sinto que posso explorar interesses sem julgamento.' },
        { id: 42023, text: 'Ele(a) me incentiva a ser independente, mas próximo(a) emocionalmente.' },
        { id: 42024, text: 'Sinto segurança emocional ao buscar apoio no relacionamento.' },
        { id: 42025, text: 'Posso compartilhar planos e ambições com meu parceiro(a).' },
        { id: 42026, text: 'O relacionamento ajuda a equilibrar autonomia e vínculo íntimo.' },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'A pontuação total (0–104) indica o nível de autoexpansão no relacionamento romântico.',
    subScoresDescription: 'Subescores por domínio podem ser calculados (média de 0-4) para análises específicas.',
    ranges: [
      { min: 0, max: 26, label: 'Baixa autoexpansão no relacionamento romântico', description: '' },
      { min: 27, max: 52, label: 'Tendência moderada à baixa', description: '' },
      { min: 53, max: 78, label: 'Nível médio / funcional', description: '' },
      { min: 79, max: 104, label: 'Alta autoexpansão', description: 'Crescimento pessoal, engajamento e aprendizado emocional no relacionamento.' },
    ],
  },
};