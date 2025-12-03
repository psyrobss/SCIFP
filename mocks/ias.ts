
import { InventoryForm } from '../types';

export const IAS_INVENTORY: InventoryForm = {
  id: 'ias',
  acronym: 'IAS',
  name: 'Inventário de Ansiedade Social',
  objective: 'Avaliar o nível de conforto ou desconforto em situações sociais, identificando sensibilidade ao julgamento, medo de exposição e padrões de evitação.',
  instructions: 'Leia cada frase e avalie o quanto ela descreve o que você pensa, sente ou faz na maioria das vezes, utilizando a escala de 1 a 7.',
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
      id: 'fear_of_evaluation',
      name: 'Sensibilidade à Avaliação',
      icon: '👀',
      description: 'Preocupação com a opinião alheia e receio de ser julgado negativamente.',
      interpretationLabels: {
        level_1: 'Baixa preocupação com julgamento.',
        level_2: 'Sensibilidade leve.',
        level_3: 'Preocupação moderada com a opinião alheia.',
        level_4: 'Alta sensibilidade e medo de crítica.',
      },
      questions: [
        { id: 77001, text: 'Fico nervoso(a) quando preciso falar em público.' },
        { id: 77002, text: 'Tenho receio de parecer inadequado(a) diante dos outros.' },
        { id: 77003, text: 'Evito ser o centro das atenções para não ser observado.' },
        { id: 77004, text: 'Sinto-me desconfortável se percebo que alguém está me olhando.' },
        { id: 77005, text: 'Preocupo-me bastante com o que os outros pensam de mim.' },
        { id: 77006, text: 'Tenho medo de cometer erros na frente de outras pessoas.' },
      ],
    },
    {
      id: 'social_avoidance',
      name: 'Retraimento e Evitação',
      icon: 'im',
      description: 'Tendência a evitar situações sociais para se proteger do desconforto.',
      interpretationLabels: {
        level_1: 'Participação social ativa.',
        level_2: 'Evitação seletiva.',
        level_3: 'Retraimento moderado.',
        level_4: 'Forte tendência ao isolamento por proteção.',
      },
      questions: [
        { id: 77007, text: 'Prefiro ficar em casa a ir em eventos sociais com desconhecidos.' },
        { id: 77008, text: 'Adio tarefas que envolvem falar com pessoas novas.' },
        { id: 77009, text: 'Tenho dificuldade em iniciar conversas por iniciativa própria.' },
        { id: 77010, text: 'Evito situações onde possa ser avaliado(a).' },
        { id: 77011, text: 'Quando estou em grupo, tento passar despercebido(a).' },
        { id: 77012, text: 'Sinto alívio quando compromissos sociais são cancelados.' },
      ],
    },
    {
      id: 'self_consciousness',
      name: 'Automonitoramento Excessivo',
      icon: '💭',
      description: 'Hábito de vigiar o próprio comportamento e criticar-se internamente durante ou após interações.',
      interpretationLabels: {
        level_1: 'Espontaneidade social.',
        level_2: 'Autoconsciência leve.',
        level_3: 'Monitoramento frequente.',
        level_4: 'Autocrítica social intensa.',
      },
      questions: [
        { id: 77013, text: 'Fico repassando na mente o que disse, achando que falei bobagem.' },
        { id: 77014, text: 'Acho que todos percebem quando estou nervoso(a).' },
        { id: 77015, text: 'Evito falar porque tenho medo de dizer algo errado.' },
        { id: 77016, text: 'Sinto vergonha de coisas pequenas que acontecem em interações.' },
        { id: 77017, text: 'Comparo meu desempenho social com o dos outros e me sinto pior.' },
        { id: 77018, text: 'Tenho dificuldade em ser espontâneo(a) por medo de errar.' },
      ],
    },
    {
      id: 'physiological_reactions',
      name: 'Reatividade Física',
      icon: '❤️',
      description: 'Sinais corporais de ansiedade (taquicardia, tremor, rubor) em contextos sociais.',
      interpretationLabels: {
        level_1: 'Conforto físico social.',
        level_2: 'Tensão leve.',
        level_3: 'Sintomas físicos perceptíveis.',
        level_4: 'Reação física intensa (luta/fuga).',
      },
      questions: [
        { id: 77019, text: 'Meu coração acelera antes de interações importantes.' },
        { id: 77020, text: 'Sinto tremores ou suor excessivo em situações sociais.' },
        { id: 77021, text: 'Tenho medo de ficar vermelho(a) e que os outros notem.' },
        { id: 77022, text: 'Sinto um "branco" na mente quando preciso falar.' },
        { id: 77023, text: 'Meu corpo fica tenso quando estou entre desconhecidos.' },
        { id: 77024, text: 'Evito contato visual por desconforto.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de desconforto em situações sociais. Escores mais altos sugerem maior sensibilidade e necessidade de estratégias de enfrentamento.',
    ranges: [
        { 
          min: 1, 
          max: 2.5, 
          label: 'Conforto Social', 
          description: 'O indivíduo sente-se à vontade na maioria das interações. A ansiedade social é baixa e não impede a realização de objetivos ou a conexão com outros.',
          recommendations: [
            'Aproveitar a facilidade social para networking.',
            'Apoiar pessoas mais tímidas em grupos.',
            'Continuar expondo-se a novos ambientes.'
          ]
        },
        { 
          min: 2.51, 
          max: 4.0, 
          label: 'Timidez ou Reserva', 
          description: 'Certo desconforto em situações novas ou de desempenho, mas que é superável. Pode haver preferência por ouvir a falar, sem prejuízo grave.',
          recommendations: [
            'Aceitar a própria natureza mais reservada (introversão não é defeito).',
            'Preparar-se levemente antes de exposições importantes.',
            'Focar na qualidade das conexões, não na quantidade.'
          ]
        },
        { 
          min: 4.01, 
          max: 5.5, 
          label: 'Ansiedade Social Moderada', 
          description: 'O medo do julgamento causa sofrimento e pode levar à evitação de algumas oportunidades. Existe um desejo de conexão, mas o medo interfere.',
          recommendations: [
            'Exposição gradual: enfrentar pequenas situações temidas propositalmente.',
            'Focar a atenção no ambiente/outro, em vez de em si mesmo (reduzir automonitoramento).',
            'Questionar pensamentos de "leitura de mente" ("eles estão me achando chato").'
          ]
        },
        { 
          min: 5.51, 
          max: 7, 
          label: 'Ansiedade Social Significativa', 
          description: 'Intenso desconforto e medo de avaliação negativa. A evitação pode estar restringindo a vida pessoal ou profissional. O sistema de alerta social está hiperativado.',
          recommendations: [
            'Terapia Cognitivo-Comportamental (TCC) para reestruturação cognitiva.',
            'Treinamento de habilidades sociais para aumentar a confiança.',
            'Práticas de autocompaixão para lidar com a vergonha.',
            'Considerar avaliação especializada para suporte adicional.'
          ]
        },
    ],
  },
};
