
import { InventoryForm } from '../types';

export const IAS_INVENTORY: InventoryForm = {
  id: 'ias',
  acronym: 'IAS',
  name: 'Inventário de Ansiedade Social',
  objective: 'Avaliar a intensidade, frequência e impacto da ansiedade social em situações de interação interpessoal, exposição e avaliação. O instrumento diferencia aspectos cognitivos (pensamentos automáticos e crenças), afetivos (medo, vergonha, tensão) e comportamentais (evitação e autocontrole excessivo).',
  instructions: 'Abaixo estão descritas diversas situações sociais.\nLeia cada frase e avalie o quanto ela representa o que você pensa, sente ou faz normalmente.\nResponda considerando como você se sente na maioria das vezes.\n\nUse a seguinte escala:\n1️⃣ Nunca ou quase nunca | 2️⃣ Raramente | 3️⃣ Às vezes | 4️⃣ Frequentemente | 5️⃣ Quase sempre ou sempre',
  responseScale: [
    { value: 1, label: 'Nunca ou quase nunca' },
    { value: 2, label: 'Raramente' },
    { value: 3, label: 'Às vezes' },
    { value: 4, label: 'Frequentemente' },
    { value: 5, label: 'Quase sempre ou sempre' },
  ],
  domains: [
    {
      id: 'fear_of_evaluation',
      name: 'Medo de Avaliação e Julgamento Social',
      icon: '🧩',
      description: 'Avalia o medo de ser julgado, criticado ou observado negativamente em situações sociais.',
      questions: [
        { id: 77001, text: 'Fico nervoso(a) quando preciso falar em público.' },
        { id: 77002, text: 'Tenho medo de parecer inadequado(a) ou estranho(a) diante dos outros.' },
        { id: 77003, text: 'Evito olhar diretamente para as pessoas em conversas.' },
        { id: 77004, text: 'Sinto-me envergonhado(a) se percebo que alguém está me observando.' },
        { id: 77005, text: 'Preocupo-me muito com o que os outros pensam de mim.' },
        { id: 77006, text: 'Tenho medo de ser criticado(a) mesmo quando faço o meu melhor.' },
      ],
    },
    {
      id: 'social_avoidance',
      name: 'Evitação e Retraimento Social',
      icon: '🗣️',
      description: 'Mede a tendência a evitar situações sociais para reduzir a ansiedade.',
      questions: [
        { id: 77007, text: 'Evito situações em que possa ser o centro das atenções.' },
        { id: 77008, text: 'Prefiro não participar de festas ou eventos sociais.' },
        { id: 77009, text: 'Adio tarefas que envolvem falar com pessoas desconhecidas.' },
        { id: 77010, text: 'Tenho dificuldade em iniciar conversas.' },
        { id: 77011, text: 'Evito conhecer novas pessoas por medo de ser rejeitado(a).' },
        { id: 77012, text: 'Quando estou em grupo, tento ficar em silêncio para não chamar atenção.' },
      ],
    },
    {
      id: 'self_consciousness',
      name: 'Autoconsciência e Autocrítica Social',
      icon: '💭',
      description: 'Avalia o foco excessivo em si mesmo e a autocrítica negativa durante e após interações sociais.',
      questions: [
        { id: 77013, text: 'Fico analisando como me comportei após interações sociais.' },
        { id: 77014, text: 'Acho que pareço ridículo(a) quando fico ansioso(a) diante dos outros.' },
        { id: 77015, text: 'Tenho a sensação de que todos percebem quando estou nervoso(a).' },
        { id: 77016, text: 'Evito falar porque acho que vou dizer algo errado.' },
        { id: 77017, text: 'Sinto vergonha até de coisas pequenas que digo.' },
        { id: 77018, text: 'Tenho pensamentos de que sou menos interessante que os outros.' },
      ],
    },
    {
      id: 'physiological_reactions',
      name: 'Reações Fisiológicas e Emocionais',
      icon: '❤️',
      description: 'Mede as respostas corporais e emocionais associadas à ansiedade social.',
      questions: [
        { id: 77019, text: 'Meu coração acelera quando estou diante de pessoas desconhecidas.' },
        { id: 77020, text: 'Sinto tremores ou suor em situações sociais.' },
        { id: 77021, text: 'Tenho medo de corar (ficar vermelho/a) em público.' },
        { id: 77022, text: 'Sinto uma tensão forte no corpo antes de interações importantes.' },
        { id: 77023, text: 'Em certas situações sociais, minha mente parece “travar”.' },
        { id: 77024, text: 'Evito contato visual quando estou ansioso(a).' },
      ],
    },
    {
        id: 'functional_impact',
        name: 'Impacto Funcional',
        icon: '⚙️',
        description: 'Avalia o prejuízo causado pela ansiedade social no funcionamento diário.',
        questions: [
          { id: 77025, text: 'A ansiedade social atrapalha meu trabalho, estudos ou relacionamentos.' },
          { id: 77026, text: 'Deixo de aproveitar oportunidades por medo de me expor.' },
          { id: 77027, text: 'Tenho consciência de que meu medo social é exagerado, mas não consigo controlá-lo.' },
          { id: 77028, text: 'Gostaria de ser mais confiante nas interações sociais.' },
        ],
      },
  ],
  scoring: {
    type: 'sum',
    description: 'Cálculo: somar os escores de todos os itens (1 a 5). Faixa de pontuação: 28 a 140 pontos.',
    notes: [
        "Psicoterapia cognitivo-comportamental: explorar crenças centrais (“sou inadequado”, “serei rejeitado”).",
        "Treino de habilidades sociais: incluir exposição gradual e reestruturação cognitiva.",
        "Monitoramento: pode ser reaplicado periodicamente para acompanhar progresso terapêutico."
    ],
    ranges: [
        { min: 28, max: 55, label: 'Muito baixa / ausente', description: 'Indica conforto em situações sociais.' },
        { min: 56, max: 83, label: 'Leve', description: 'Alguma autocrítica, mas manejo adequado.' },
        { min: 84, max: 111, label: 'Moderada', description: 'Ansiedade percebida e impactante em certos contextos.' },
        { min: 112, max: 140, label: 'Elevada / disfuncional', description: 'Evitação significativa e sofrimento psicológico.' },
    ],
  },
};
