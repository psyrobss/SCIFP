
import { InventoryForm } from '../types';

export const IERET_INVENTORY: InventoryForm = {
  id: 'ier-et',
  acronym: 'IER-ET',
  name: 'Inventário de Expressão da Raiva – Estado e Traço',
  objective: 'Avaliar a intensidade, frequência e forma de expressão da raiva, diferenciando entre a experiência momentânea (Estado), a predisposição temperamental (Traço) e as estratégias de controle.',
  instructions: 'Leia cada afirmação e marque o quanto ela descreve como você se sente neste momento (para Raiva-Estado) e como você geralmente se sente (para Raiva-Traço), usando a escala de 1 a 7.',
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
      id: 'anger_state',
      name: 'Raiva-Estado (Intensidade Atual)',
      icon: '😡',
      description: 'Nível de ativação da raiva em situações recentes ou no momento presente.',
      interpretationLabels: {
        level_1: 'Calma e estabilidade.',
        level_2: 'Irritação leve.',
        level_3: 'Raiva moderada.',
        level_4: 'Intensa ativação de raiva.',
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
      name: 'Raiva-Traço (Temperamento)',
      icon: '💢',
      description: 'Tendência geral a perceber situações como provocadoras e responder com irritação.',
      interpretationLabels: {
        level_1: 'Temperamento calmo.',
        level_2: 'Reatividade ocasional.',
        level_3: 'Temperamento reativo.',
        level_4: 'Alta predisposição à raiva.',
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
      name: 'Expressão e Regulação',
      icon: '🧘',
      description: 'Forma como a raiva é gerenciada: se é internalizada (guardada), externalizada (agressão) ou controlada (assertividade).',
      interpretationLabels: {
        level_1: 'Regulação adaptativa.',
        level_2: 'Controle funcional.',
        level_3: 'Dificuldade de modulação.',
        level_4: 'Desregulação ou supressão excessiva.',
      },
      questions: [
        { id: 71021, text: 'Descarrego minha raiva em objetos ou ações físicas.' },
        { id: 71022, text: 'Falo de forma agressiva quando estou irritado.' },
        { id: 71023, text: 'Tento compreender o motivo da minha raiva antes de agir.', isReversed: true },
        { id: 71024, text: 'Guardo o que sinto, sem demonstrar (raiva para dentro).' },
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
    type: 'average',
    description: 'A pontuação média (1-7) indica o perfil de manejo da raiva. Escores altos sugerem maior intensidade e dificuldade de regulação.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Manejo Saudável da Raiva', 
        description: 'O indivíduo vivencia a raiva como uma emoção passageira e informativa, sem ser dominado por ela. Utiliza estratégias assertivas para resolver conflitos.',
        recommendations: [
          'Validar a raiva como sinal de limites violados.',
          'Manter a prática de comunicação não-violenta.',
          'Utilizar a energia da raiva para ações de mudança construtiva.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Irritabilidade Situacional', 
        description: 'Reações de raiva aparecem em contextos de estresse ou cansaço. O controle geralmente funciona, mas pode falhar se houver acúmulo de tensão.',
        recommendations: [
          'Monitorar o nível de estresse basal ("copo cheio").',
          'Praticar pausas preventivas antes de atingir o limite.',
          'Expressar insatisfações antes que elas virem ressentimento.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Dificuldades de Regulação da Raiva', 
        description: 'Padrão frequente de irritação, hostilidade ou "engolir sapos" (raiva internalizada). Pode haver impacto nas relações e na saúde física (tensão).',
        recommendations: [
          'Técnicas de "Time-out": sair de cena para esfriar a cabeça.',
          'Identificar pensamentos gatilho (ex: "isso não é justo!").',
          'Canalização física: exercícios intensos para descarga de adrenalina.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Reatividade Intensa / Desregulação', 
        description: 'A raiva é vivida com grande intensidade, podendo levar a comportamentos impulsivos, agressivos ou autodestrutivos. Alto custo emocional.',
        recommendations: [
          'Protocolo de gerenciamento da raiva (Anger Management).',
          'Avaliação para transtornos do humor ou controle de impulsos.',
          'Treino intensivo de tolerância ao mal-estar.',
          'Foco na segurança e na reparação de danos relacionais.'
        ]
      },
    ],
  },
};
