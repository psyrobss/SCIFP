
import { InventoryForm } from '../types';

export const EAR_INVENTORY: InventoryForm = {
  id: 'ear',
  acronym: 'EAR',
  name: 'Escala de Autoexpansão em Relacionamento Romântico (EAR)',
  objective: 'Avaliar o quanto o relacionamento amoroso contribui para a expansão do self, trazendo novos conhecimentos, experiências, recursos e perspectivas.',
  instructions: 'Indique o quanto cada afirmação descreve sua experiência atual com seu parceiro(a), utilizando a escala de 1 a 7.',
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
      id: 'personal_growth',
      name: 'Aprendizado e Crescimento',
      icon: '🌱',
      description: 'O quanto o parceiro(a) agrega conhecimento, habilidades e perspectivas que enriquecem o self.',
      interpretationLabels: {
        level_1: 'Sensação de estagnação.',
        level_2: 'Pouco estímulo intelectual/pessoal.',
        level_3: 'Bom nível de aprendizado.',
        level_4: 'Forte sensação de evolução conjunta.',
      },
      questions: [
        { id: 42001, text: 'Aprendo muitas coisas novas através do meu parceiro(a).' },
        { id: 42002, text: 'Ele(a) me incentiva a desenvolver novas habilidades e interesses.' },
        { id: 42003, text: 'Sinto que me tornei uma pessoa mais interessante por causa desta relação.' },
        { id: 42004, text: 'O relacionamento me ajuda a ver o mundo de maneiras novas.' },
        { id: 42005, text: 'Crescer junto com meu parceiro(a) é uma prioridade para nós.' },
        { id: 42006, text: 'Sinto que absorvo qualidades positivas dele(a).' },
      ],
    },
    {
      id: 'exploration_experiences',
      name: 'Novidade e Aventura',
      icon: '🌍',
      description: 'Grau de exposição a novas experiências e desafios estimulantes proporcionados pela relação.',
      interpretationLabels: {
        level_1: 'Rotina monótona e previsível.',
        level_2: 'Pouca iniciativa para o novo.',
        level_3: 'Abertura a novas experiências.',
        level_4: 'Relacionamento dinâmico e estimulante.',
      },
      questions: [
        { id: 42007, text: 'Fazemos atividades diferentes e empolgantes juntos.' },
        { id: 42008, text: 'O relacionamento me dá coragem para sair da minha zona de conforto.' },
        { id: 42009, text: 'Gostamos de experimentar coisas novas (lugares, comidas, hobbies).' },
        { id: 42010, text: 'Nossa vida juntos tem uma dose saudável de surpresa e novidade.' },
        { id: 42011, text: 'Ele(a) me apresenta a mundos que eu não conhecia.' },
        { id: 42012, text: 'Buscamos ativamente quebrar a rotina.' },
      ],
    },
    {
      id: 'positive_emotions_engagement',
      name: 'Entusiasmo e Vitalidade',
      icon: '🔥',
      description: 'Nível de energia positiva, paixão e alegria gerados pela interação.',
      interpretationLabels: {
        level_1: 'Relação morna ou drenante.',
        level_2: 'Entusiasmo ocasional.',
        level_3: 'Boa vitalidade e alegria.',
        level_4: 'Alta paixão e energia.',
      },
      questions: [
        { id: 42013, text: 'Sinto entusiasmo e alegria ao interagir com meu parceiro(a).' },
        { id: 42014, text: 'Estar com ele(a) ajuda a aliviar meu estresse.' },
        { id: 42015, text: 'Nossos momentos juntos aumentam minha energia vital.' },
        { id: 42016, text: 'Sinto-me mais vivo(a) quando estamos conectados.' },
        { id: 42017, text: 'Conversas com meu parceiro(a) me deixam inspirado(a).' },
        { id: 42018, text: 'O relacionamento é uma fonte primária de felicidade para mim.' },
        { id: 42019, text: 'Sinto orgulho de estarmos juntos.' },
      ],
    },
    {
      id: 'autonomy_interpersonal_support',
      name: 'Expansão de Recursos e Apoio',
      icon: '⚓',
      description: 'Sensação de ter mais recursos (emocionais, sociais, materiais) para lidar com a vida graças à parceria.',
      interpretationLabels: {
        level_1: 'Sensação de limitação.',
        level_2: 'Apoio limitado.',
        level_3: 'Bom suporte mútuo.',
        level_4: 'Sentimento de "nós contra o mundo".',
      },
      questions: [
        { id: 42020, text: 'Sinto que sou capaz de realizar mais coisas tendo ele(a) ao meu lado.' },
        { id: 42021, text: 'Sei que posso contar com os recursos e habilidades dele(a) se precisar.' },
        { id: 42022, text: 'Sinto que posso explorar meus interesses sem medo de julgamento.' },
        { id: 42023, text: 'Ele(a) me apoia em meus projetos individuais.' },
        { id: 42024, text: 'Sinto-me mais seguro(a) para enfrentar a vida estando nessa relação.' },
        { id: 42025, text: 'Nossa união fortalece minha capacidade de lidar com problemas.' },
        { id: 42026, text: 'O relacionamento expande minhas possibilidades futuras.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de autoexpansão no relacionamento. Escores altos estão associados a maior satisfação conjugal e prevenção do tédio.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Baixa Autoexpansão (Estagnação)', 
        description: 'A relação pode estar caindo na rotina ou no tédio. Há pouca troca de novidades ou estímulo ao crescimento mútuo. Risco de desinteresse.',
        recommendations: [
          'Introduzir uma atividade nova semanal para fazerem juntos (Novelty).',
          'Conversar sobre sonhos e planos individuais, não apenas tarefas domésticas.',
          'Resgatar interesses que uniram o casal no início.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Expansão Moderada', 
        description: 'O relacionamento oferece estabilidade e algum conforto, mas pode carecer de "faísca" ou desafios novos. É funcional, mas pode ser mais vibrante.',
        recommendations: [
          'Planejar uma viagem ou projeto conjunto.',
          'Apoiar ativamente um hobby do parceiro.',
          'Surpreender o outro com pequenos gestos inesperados.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Relacionamento Enriquecedor', 
        description: 'Boa dinâmica de crescimento. O casal se diverte, aprende um com o outro e sente que a vida é melhor a dois.',
        recommendations: [
          'Manter o equilíbrio entre o tempo "nós" e o tempo "eu".',
          'Continuar investindo em experiências compartilhadas.',
          'Expressar gratidão pelo que o outro traz para sua vida.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Autoexpansão e Paixão', 
        description: 'Relacionamento altamente estimulante, fonte de grande alegria e evolução pessoal. Os parceiros sentem-se ampliados e fortalecidos pela união.',
        recommendations: [
          'Proteger esse espaço de conexão contra o estresse externo.',
          'Usar essa força conjunta para realizar metas ambiciosas.',
          'Cultivar a admiração mútua continuamente.'
        ]
      },
    ],
  },
};
