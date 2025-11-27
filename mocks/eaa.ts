
import { InventoryForm } from '../types';

export const EAA_INVENTORY: InventoryForm = {
  id: 'eaa',
  acronym: 'EAA',
  name: 'Escala de Autoexpansão em Amizades (EAA)',
  objective: 'Avaliar a extensão em que o indivíduo busca crescimento pessoal, aprendizagem, experiências e emoções positivas através de amizades próximas.',
  instructions: 'Leia cada afirmação e indique o quanto ela descreve seu comportamento ou sentimentos habituais com amigos próximos.',
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
      id: 'personal_growth',
      name: 'Crescimento Pessoal',
      icon: '🌱',
      description: 'Capacidade de aprender, desenvolver habilidades e expandir a visão de mundo através das interações com amigos.',
      questions: [
        { id: 41001, text: 'Aprendo coisas novas através de amigos próximos.' },
        { id: 41002, text: 'Amigos me inspiram a desenvolver habilidades ou hobbies.' },
        { id: 41003, text: 'Sinto-me motivado(a) a melhorar pessoalmente quando estou com meus amigos.' },
        { id: 41004, text: 'Amigos me ajudam a expandir minha visão de mundo.' },
        { id: 41005, text: 'Sinto que crescer ao lado de amigos é importante para mim.' },
        { id: 41006, text: 'Interações com amigos me fazem explorar novos interesses.' },
      ],
    },
    {
      id: 'exploration_experiences',
      name: 'Exploração e Experiências',
      icon: '🌍',
      description: 'Disposição para participar de novas atividades, sair da zona de conforto e se aventurar em novas experiências sociais com amigos.',
      questions: [
        { id: 41007, text: 'Participo de atividades novas ou diferentes com amigos.' },
        { id: 41008, text: 'Amigos me incentivam a sair da minha zona de conforto.' },
        { id: 41009, text: 'Gosto de experimentar coisas novas quando estou com amigos.' },
        { id: 41010, text: 'Frequentemente me aventuro em novas experiências sociais.' },
        { id: 41011, text: 'Amigos me apresentam novas perspectivas e ideias.' },
        { id: 41012, text: 'Busco situações desafiadoras junto aos meus amigos.' },
      ],
    },
    {
      id: 'positive_emotions_engagement',
      name: 'Emoções Positivas e Engajamento',
      icon: '😊',
      description: 'Capacidade de vivenciar alegria, entusiasmo e bem-estar emocional através das interações com amigos.',
      questions: [
        { id: 41013, text: 'Sinto alegria e entusiasmo ao interagir com amigos próximos.' },
        { id: 41014, text: 'Amigos me ajudam a lidar melhor com emoções negativas.' },
        { id: 41015, text: 'Experiências com amigos aumentam meu bem-estar emocional.' },
        { id: 41016, text: 'Sinto-me energizado(a) após passar tempo com meus amigos.' },
        { id: 41017, text: 'As conversas com amigos me deixam inspirado(a).' },
        { id: 41018, text: 'Amigos próximos contribuem para minha satisfação pessoal.' },
        { id: 41019, text: 'Interações sociais com amigos me motivam a agir positivamente.' },
      ],
    },
    {
      id: 'autonomy_interpersonal_support',
      name: 'Autonomia e Apoio Interpessoal',
      icon: '🤝',
      description: 'Equilíbrio entre o desenvolvimento da autonomia pessoal e a busca por apoio emocional seguro nas amizades.',
      questions: [
        { id: 41020, text: 'Amigos me ajudam a me conhecer melhor.' },
        { id: 41021, text: 'Posso contar com meus amigos ao tomar decisões importantes.' },
        { id: 41022, text: 'Sinto que posso explorar meus interesses sem julgamento.' },
        { id: 41023, text: 'Amigos me incentivam a ser independente, mas próximo(a) emocionalmente.' },
        { id: 41024, text: 'Sinto segurança emocional ao buscar apoio de amigos.' },
        { id: 41025, text: 'Posso compartilhar meus planos e ambições com amigos próximos.' },
        { id: 41026, text: 'Amigos me ajudam a equilibrar autonomia e vínculo social.' },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'A pontuação total (0–104) indica o nível de autoexpansão social em amizades.',
    subScoresDescription: 'Subescores por domínio podem ser calculados (média de 0-4) para análises específicas.',
    ranges: [
      { min: 0, max: 26, label: 'Baixa autoexpansão social em amizades', description: '' },
      { min: 27, max: 52, label: 'Tendência moderada à baixa', description: '' },
      { min: 53, max: 78, label: 'Nível médio / funcional', description: '' },
      { min: 79, max: 104, label: 'Alta autoexpansão social', description: 'Aprendizado, crescimento e engajamento positivo.' },
    ],
  },
};
