
import { InventoryForm } from '../types';

export const IECAD_INVENTORY: InventoryForm = {
  id: 'iecad',
  acronym: 'IECAD',
  name: 'Inventário de Empatia Cognitiva e Afetiva Diferenciada',
  objective: 'Avaliar e distinguir os componentes da empatia: a capacidade de entender (cognitiva), sentir (afetiva) e regular a resposta emocional diante do outro.',
  instructions: 'Para cada frase, indique o quanto ela descreve sua maneira habitual de reagir às experiências das outras pessoas, usando a escala de 1 a 7.',
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
      id: 'cognitive_empathy',
      name: 'Empatia Cognitiva (Tomada de Perspectiva)',
      icon: '🧠',
      description: 'Capacidade de intelectualmente compreender o ponto de vista, as intenções e os pensamentos de outra pessoa.',
      interpretationLabels: {
        level_1: 'Dificuldade em mudar de perspectiva.',
        level_2: 'Compreensão limitada do outro.',
        level_3: 'Boa tomada de perspectiva.',
        level_4: 'Alta compreensão da mente alheia.',
      },
      questions: [
        { id: 61001, text: 'Consigo imaginar facilmente como é estar na pele de outra pessoa.' },
        { id: 61002, text: 'Tento olhar para os dois lados de uma discussão antes de julgar.' },
        { id: 61003, text: 'Entendo por que alguém agiu de certa forma, mesmo que eu não concorde.' },
        { id: 61004, text: 'Tenho dificuldade em ver as coisas sob a ótica dos outros.', isReversed: true },
        { id: 61005, text: 'Consigo prever como alguém vai reagir com base no que sei sobre ela.' },
        { id: 61006, text: 'Quando estou chateado com alguém, tento entender o motivo dele(a).' },
        { id: 61007, text: 'Percebo quando alguém está dizendo uma coisa mas pensando outra.' },
      ],
    },
    {
      id: 'affective_empathy',
      name: 'Empatia Afetiva (Ressonância)',
      icon: '💓',
      description: 'Capacidade de responder emocionalmente ao estado do outro, sentindo preocupação ou contágio emocional.',
      interpretationLabels: {
        level_1: 'Baixa reatividade emocional ao outro.',
        level_2: 'Ressonância ocasional.',
        level_3: 'Boa conexão afetiva.',
        level_4: 'Alta sensibilidade e compaixão.',
      },
      questions: [
        { id: 61008, text: 'Sinto-me triste quando vejo alguém chorando.' },
        { id: 61009, text: 'As emoções das pessoas ao meu redor tendem a me contagiar.' },
        { id: 61010, text: 'Fico perturbado(a) ao presenciar o sofrimento alheio.' },
        { id: 61011, text: 'Às vezes pareço frio(a) porque não sinto o que os outros sentem.', isReversed: true },
        { id: 61012, text: 'Tenho sentimentos de ternura e preocupação por pessoas em dificuldade.' },
        { id: 61013, text: 'A alegria dos outros me faz sentir bem também.' },
        { id: 61014, text: 'Fico tenso(a) quando estou em um ambiente onde as pessoas estão nervosas.' },
      ],
    },
    {
      id: 'interpersonal_regulation',
      name: 'Regulação Emocional Interpessoal',
      icon: '🛡️',
      description: 'Habilidade de manter o próprio equilíbrio ao lidar com as emoções dos outros, evitando a exaustão (distress) empática.',
      interpretationLabels: {
        level_1: 'Sobrecarregado pelas emoções alheias.',
        level_2: 'Dificuldade de separação eu-outro.',
        level_3: 'Bom manejo da empatia.',
        level_4: 'Empatia saudável e sustentável.',
      },
      questions: [
        { id: 61015, text: 'Consigo consolar alguém sem ficar desesperado(a) junto.' },
        { id: 61016, text: 'Sei quando preciso me proteger emocionalmente para não absorver problemas.' },
        { id: 61017, text: 'Perco o controle emocional quando vejo alguém sofrendo muito.', isReversed: true },
        { id: 61018, text: 'Consigo separar o que é meu sentimento do que é do outro.' },
        { id: 61019, text: 'Sinto-me drenado(a) e exausto(a) depois de ouvir desabafos.', isReversed: true },
        { id: 61020, text: 'Mantenho a calma para poder ajudar efetivamente quem precisa.' },
        { id: 61021, text: 'Evito pessoas tristes porque não sei lidar com a emoção delas.', isReversed: true },
      ],
    },
    {
      id: 'prosocial_motivation',
      name: 'Motivação Pró-Social',
      icon: '🤝',
      description: 'Desejo e disposição de agir para beneficiar ou ajudar os outros, impulsionado pela empatia.',
      interpretationLabels: {
        level_1: 'Pouca iniciativa de ajuda.',
        level_2: 'Ajuda reativa.',
        level_3: 'Boa disposição para apoiar.',
        level_4: 'Forte compromisso altruísta.',
      },
      questions: [
        { id: 61022, text: 'Gosto de fazer coisas para que os outros se sintam melhor.' },
        { id: 61023, text: 'Ofereço ajuda mesmo quando não me pedem.' },
        { id: 61024, text: 'Sinto satisfação em ser útil para meus amigos e comunidade.' },
        { id: 61025, text: 'Às vezes deixo de ajudar por achar que não é problema meu.', isReversed: true },
        { id: 61026, text: 'Estou disposto(a) a abrir mão do meu conforto para ajudar alguém em crise.' },
        { id: 61027, text: 'Defendo pessoas que estão sendo tratadas injustamente.' },
        { id: 61028, text: 'Acredito que cuidar uns dos outros é fundamental.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) descreve o perfil empático. O ideal é o equilíbrio entre sentir (afetiva), entender (cognitiva) e regular.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Empatia Restrita / Distanciamento', 
        description: 'Dificuldade em conectar-se com a experiência do outro, seja por falta de compreensão (cognitiva) ou de ressonância (afetiva). Pode parecer frio ou autocentrado.',
        recommendations: [
          'Treinar a "leitura de mente": tentar adivinhar o que personagens de filmes estão pensando.',
          'Focar na escuta sem interrupção.',
          'Explorar se o distanciamento é uma defesa contra a dor.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Empatia Desregulada', 
        description: 'Pode haver muita sensibilidade ao sofrimento alheio (contágio emocional), mas com dificuldade de regular isso, gerando angústia pessoal (personal distress) em vez de ajuda eficaz.',
        recommendations: [
          'Técnicas de "grounding" (aterramento) para voltar ao próprio corpo.',
          'Diferenciação eu-outro: visualizar uma barreira protetora saudável.',
          'Focar na ação de ajuda prática para sair da paralisia emocional.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Empatia Funcional', 
        description: 'Bom equilíbrio. O indivíduo compreende e sente com o outro, mas consegue manter sua estabilidade na maioria das vezes. É um bom ouvinte e apoiador.',
        recommendations: [
          'Refinar a empatia cognitiva para entender perspectivas muito diferentes das suas.',
          'Praticar a compaixão (desejo de aliviar o sofrimento) como evolução da empatia.',
          'Cuidar para não assumir responsabilidades que não são suas.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Competência Empática', 
        description: 'Excelente capacidade de sintonização e compreensão profunda. Consegue navegar por emoções intensas de terceiros com sabedoria e oferecer suporte de qualidade.',
        recommendations: [
          'Atuar em profissões ou papéis de cuidado e liderança.',
          'Ensinar habilidades de comunicação empática.',
          'Praticar o autocuidado rigoroso para prevenir a fadiga por compaixão.'
        ]
      },
    ],
  },
};
