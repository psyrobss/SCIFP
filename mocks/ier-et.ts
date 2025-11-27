
import { InventoryForm } from '../types';

export const IERET_INVENTORY: InventoryForm = {
  id: 'ier-et',
  acronym: 'IER-ET',
  name: 'Inventário de Expressão da Raiva – Estado e Traço',
  objective: 'Avaliar a intensidade, frequência e forma de expressão da raiva, diferenciando entre: Raiva-Estado: experiência emocional momentânea, reativa a situações específicas. Raiva-Traço: predisposição estável a perceber situações como provocadoras e reagir com raiva. Controle e Expressão: formas de manejar ou externalizar a raiva (internamente, externamente ou de modo controlado).',
  instructions: 'Leia cada afirmação e marque o quanto ela descreve como você se sente neste momento (para Raiva-Estado) e como você geralmente se sente (para Raiva-Traço).',
  scoreOrientation: 'higher_is_worse',
  responseScale: [
    { value: 0, label: 'Nada verdadeiro' },
    { value: 1, label: 'Pouco verdadeiro' },
    { value: 2, label: 'Moderadamente verdadeiro' },
    { value: 3, label: 'Muito verdadeiro' },
    { value: 4, label: 'Totalmente verdadeiro' },
  ],
  domains: [
    {
      id: 'anger_state',
      name: 'Raiva-Estado',
      icon: '😡',
      description: 'Avalia a intensidade e duração da raiva em situações recentes.',
      interpretationLabels: {
        level_1: 'Baixa intensidade momentânea de raiva.',
        level_2: 'Intensidade leve.',
        level_3: 'Intensidade moderada.',
        level_4: 'Intensidade alta.',
      },
      questions: [
        { id: 71001, text: 'Neste momento, sinto meu corpo tenso ou pronto para reagir.' },
        { id: 71002, text: 'Sinto vontade de gritar ou descarregar algo.' },
        { id: 71003, text: 'Sinto irritação crescente sem motivo claro.' },
        { id: 71004, text: 'Tenho dificuldade de conter palavras duras quando me provocam.' },
        { id: 71005, text: 'Estou frustrado e sinto que poderia explodir.' },
        { id: 71006, text: 'Percebo minha respiração acelerada quando fico com raiva.' },
        { id: 71007, text: 'Tenho vontade de me afastar rapidamente das pessoas.' },
        { id: 71008, text: 'Sinto que minha raiva me domina por instantes.' },
        { id: 71009, text: 'Consigo me acalmar com relativa facilidade.', isReversed: true },
        { id: 71010, text: 'Mesmo irritado, mantenho o controle do que digo.', isReversed: true },
      ],
    },
    {
      id: 'anger_trait',
      name: 'Raiva-Traço',
      icon: '💢',
      description: 'Mede a tendência geral a sentir raiva e o limiar de reatividade.',
      interpretationLabels: {
        level_1: 'Baixa tendência à irritabilidade.',
        level_2: 'Tendência leve.',
        level_3: 'Tendência moderada.',
        level_4: 'Alta tendência à irritabilidade e agressividade.',
      },
      questions: [
        { id: 71011, text: 'Costumo me irritar com pequenos contratempos.' },
        { id: 71012, text: 'Tenho baixa paciência em situações lentas.' },
        { id: 71013, text: 'As pessoas dizem que sou impulsivo quando fico bravo.' },
        { id: 71014, text: 'Guardo ressentimentos por muito tempo.' },
        { id: 71015, text: 'Fico tenso ao ser criticado.' },
        { id: 71016, text: 'Evito demonstrar raiva, mas fico remoendo internamente.' },
        { id: 71017, text: 'Reajo com calma mesmo sob pressão.', isReversed: true },
        { id: 71018, text: 'Tenho facilidade em perdoar depois de discussões.', isReversed: true },
        { id: 71019, text: 'Quando me ofendem, sinto vontade de revidar.' },
        { id: 71020, text: 'Sinto que minha raiva é difícil de controlar.' },
      ],
    },
    {
      id: 'anger_expression_control',
      name: 'Expressão e Controle da Raiva',
      icon: '🧘',
      description: 'Avalia a direção da raiva (interna, externa) e o grau de regulação emocional.',
      interpretationLabels: {
        level_1: 'Bom controle e expressão adaptativa.',
        level_2: 'Controle funcional com dificuldades pontuais.',
        level_3: 'Dificuldades moderadas de controle e expressão.',
        level_4: 'Baixo controle e expressão desadaptativa.',
      },
      questions: [
        { id: 71021, text: 'Descarrego minha raiva em objetos ou ações físicas.' },
        { id: 71022, text: 'Falo de forma agressiva quando estou irritado.' },
        { id: 71023, text: 'Tento compreender o motivo da minha raiva antes de agir.', isReversed: true },
        { id: 71024, text: 'Guardo o que sinto, sem demonstrar.' },
        { id: 71025, text: 'Busco respirar fundo ou me afastar quando sinto raiva.', isReversed: true },
        { id: 71026, text: 'Fico em silêncio, mas imagino respostas agressivas.' },
        { id: 71027, text: 'Canalizo minha raiva para atividades produtivas.', isReversed: true },
        { id: 71028, text: 'Culpo outras pessoas pelo que sinto.' },
        { id: 71029, text: 'Consigo discutir com firmeza sem perder o controle.', isReversed: true },
        { id: 71030, text: 'Depois de uma briga, continuo revivendo o que aconteceu.' },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'A pontuação total é a soma de todos os itens (0-120). Os escores de domínio também são a soma dos itens de cada domínio (0-40).',
    subScoresDescription: 'Raiva-Estado (Itens 1–10): Intensidade momentânea. Raiva-Traço (Itens 11–20): Predisposição temperamental. Expressão/Controle (Itens 21–30): Estilo de manejo.',
    ranges: [
      { 
        min: 0, 
        max: 29, 
        label: 'Baixa Raiva / Controle Elevado', 
        description: 'Indivíduo relata pouca experiência de raiva ou forte controle. Pode indicar calma genuína ou supressão emocional excessiva.',
        recommendations: [
          'Investigar se há negação da raiva ("engolir sapos").',
          'Treinar assertividade para expressar insatisfações de forma saudável.',
          'Validar a raiva como uma emoção legítima de proteção de limites.'
        ]
      },
      { 
        min: 30, 
        max: 59, 
        label: 'Raiva Moderada / Funcional', 
        description: 'Experiência de raiva proporcional aos eventos, com capacidade de controle razoável. Expressão geralmente adequada.',
        recommendations: [
          'Monitorar gatilhos específicos de irritação.',
          'Usar a raiva como sinal para resolver problemas ou estabelecer limites.',
          'Praticar técnicas de descompressão após eventos estressantes.'
        ]
      },
      { 
        min: 60, 
        max: 89, 
        label: 'Raiva Elevada / Dificuldade de Controle', 
        description: 'Frequente irritabilidade e reações intensas. Risco de prejuízo nas relações interpessoais e decisões impulsivas.',
        recommendations: [
          'Terapia focada no manejo da raiva (Anger Management).',
          'Identificar pensamentos distorcidos (ex: "isso é injusto", "eles deveriam...").',
          'Técnicas de relaxamento muscular e respiração diafragmática.',
          'Canalização física da energia agressiva (exercícios).'
        ]
      },
      { 
        min: 90, 
        max: 120, 
        label: 'Raiva Crônica e Desadaptativa', 
        description: 'Padrão severo de hostilidade, agressividade (verbal ou física) ou raiva internalizada (rancor). Alto risco para saúde física e social.',
        recommendations: [
          'Avaliação psicológica e psiquiátrica aprofundada.',
          'Intervenção prioritária para segurança (se houver risco de agressão).',
          'Treinamento intensivo de habilidades de regulação emocional.',
          'Investigar comorbidades como depressão ou transtornos de personalidade.'
        ]
      },
    ],
    notes: ['Itens com (R) têm a pontuação invertida (0=4, 1=3, 2=2, 3=1, 4=0).'],
  },
};
