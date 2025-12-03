
import { InventoryForm } from '../types';

export const IRHP_INVENTORY: InventoryForm = {
  id: 'irhp',
  acronym: 'IRHP',
  name: 'Inventário de Regulação do Humor Positivo',
  objective: 'Avaliar a capacidade de perceber, sustentar e amplificar emoções positivas (alegria, gratidão, interesse), bem como o uso de estratégias para cultivar bem-estar subjetivo.',
  instructions: 'Indique o quanto cada afirmação descreve sua experiência habitual em relação a sentimentos positivos e bem-estar, usando a escala abaixo.',
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
      id: 'positive_emotion_perception',
      name: 'Atenção ao Positivo',
      icon: '🌟',
      description: 'Habilidade de notar e valorizar pequenas alegrias e conquistas do cotidiano.',
      interpretationLabels: {
        level_1: 'Foco predominante no negativo.',
        level_2: 'Dificuldade em notar o positivo.',
        level_3: 'Boa percepção de eventos agradáveis.',
        level_4: 'Alta sensibilidade a experiências positivas.',
      },
      questions: [
        { id: 67001, text: 'Percebo rapidamente quando estou feliz ou satisfeito(a).' },
        { id: 67002, text: 'Tenho dificuldade em notar momentos agradáveis no dia a dia.', isReversed: true },
        { id: 67003, text: 'Sinto gratidão com frequência pelas coisas boas da minha vida.' },
        { id: 67004, text: 'Reconheço pequenas conquistas e vitórias pessoais.' },
        { id: 67005, text: 'Raramente percebo emoções positivas, mesmo em situações boas.', isReversed: true },
        { id: 67006, text: 'Consigo identificar estados de prazer ou contentamento em atividades simples.' },
        { id: 67007, text: 'Sinto alegria ao vivenciar momentos positivos com outras pessoas.' },
      ],
    },
    {
      id: 'positive_emotion_amplification',
      name: 'Ampliação e Savoring (Saborear)',
      icon: '☀️',
      description: 'Estratégias para prolongar ou intensificar experiências agradáveis, evitando que elas desapareçam rapidamente.',
      interpretationLabels: {
        level_1: 'Dificuldade em sustentar o bem-estar.',
        level_2: 'Bem-estar passageiro.',
        level_3: 'Capacidade de prolongar momentos bons.',
        level_4: 'Excelente habilidade de saborear a vida.',
      },
      questions: [
        { id: 67008, text: 'Busco atividades que aumentem minha sensação de prazer ou satisfação.' },
        { id: 67009, text: 'Frequentemente ignoro ou não valorizo emoções positivas.', isReversed: true },
        { id: 67010, text: 'Tendo a compartilhar boas experiências com outras pessoas para reforçar a sensação positiva.' },
        { id: 67011, text: 'Concentro-me em aspectos agradáveis de uma situação para aumentar meu bem-estar.' },
        { id: 67012, text: 'Tenho dificuldade em prolongar sentimentos positivos.', isReversed: true },
        { id: 67013, text: 'Pratico atividades que conscientemente melhoram meu humor.' },
        { id: 67014, text: 'Relembro experiências agradáveis para me sentir melhor em momentos difíceis.' },
      ],
    },
    {
      id: 'optimism_positive_expectation',
      name: 'Otimismo e Esperança',
      icon: '🌈',
      description: 'Tendência a esperar resultados favoráveis e manter uma visão construtiva sobre o futuro.',
      interpretationLabels: {
        level_1: 'Visão pessimista ou desesperançosa.',
        level_2: 'Otimismo frágil ou situacional.',
        level_3: 'Postura otimista funcional.',
        level_4: 'Forte senso de esperança e otimismo.',
      },
      questions: [
        { id: 67015, text: 'Acredito que coisas boas acontecem com frequência em minha vida.' },
        { id: 67016, text: 'Frequentemente espero resultados negativos em situações novas.', isReversed: true },
        { id: 67017, text: 'Confio que meus esforços gerarão consequências positivas.' },
        { id: 67018, text: 'Tenho dificuldade em ver o lado positivo de eventos desafiadores.', isReversed: true },
        { id: 67019, text: 'Frequentemente imagino experiências futuras agradáveis e motivadoras.' },
        { id: 67020, text: 'Cultivo pensamentos otimistas mesmo diante de obstáculos.' },
        { id: 67021, text: 'Sinto que minha vida é, em geral, satisfatória e promissora.' },
      ],
    },
    {
      id: 'positive_emotion_expression',
      name: 'Expressão da Alegria',
      icon: '😄',
      description: 'Capacidade de demonstrar e compartilhar felicidade, o que fortalece vínculos e o próprio bem-estar.',
      interpretationLabels: {
        level_1: 'Inibição da expressão positiva.',
        level_2: 'Expressão contida ou reservada.',
        level_3: 'Boa expressão de afeto positivo.',
        level_4: 'Expressão livre e contagiante de alegria.',
      },
      questions: [
        { id: 67022, text: 'Compartilho facilmente alegria e entusiasmo com outras pessoas.' },
        { id: 67023, text: 'Frequentemente reprimo emoções agradáveis por vergonha ou medo.', isReversed: true },
        { id: 67024, text: 'Expressar sentimentos positivos aumenta meu bem-estar e o de outros.' },
        { id: 67025, text: 'Busco socializar para compartilhar bons momentos e sensações agradáveis.' },
        { id: 67026, text: 'Evito demonstrar emoções positivas mesmo em situações adequadas.', isReversed: true },
        { id: 67027, text: 'Me sinto motivado(a) a celebrar pequenas conquistas com os outros.' },
        { id: 67028, text: 'Minha expressão de felicidade contribui para meu equilíbrio emocional.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica a competência em regular e manter o humor positivo. Escores altos sugerem maior bem-estar subjetivo.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Dificuldade na Vivência Positiva', 
        description: 'Pode haver uma tendência a não notar ou desvalorizar experiências boas (anedonia ou embotamento). A vida pode parecer "cinza" ou focada apenas em problemas.',
        recommendations: [
          'Ativação Comportamental: agendar atividades prazerosas simples, mesmo sem vontade inicial.',
          'Diário de Gratidão: registrar 3 coisas boas por dia para treinar o foco positivo.',
          'Mindfulness focado nos sentidos para aumentar a receptividade ao prazer.',
          'Investigação de crenças de que "sentir alegria é perigoso" ou "não mereço ser feliz".'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Regulação Positiva em Desenvolvimento', 
        description: 'Capacidade presente de sentir alegria, mas pode ser passageira ou depender muito de fatores externos. Dificuldade em "segurar" o bem-estar.',
        recommendations: [
          'Prática de "Savoring" (Saborear): prolongar conscientemente momentos bons (ex: comer devagar, admirar uma paisagem).',
          'Capitalização social: contar boas notícias para pessoas queridas para reviver a emoção.',
          'Visualização positiva do futuro para treinar a esperança.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Bem-Estar Funcional', 
        description: 'Boa capacidade de sentir e expressar gratidão, alegria e esperança. O indivíduo consegue usar emoções positivas para se recuperar do estresse.',
        recommendations: [
          'Cultivar a autocompaixão como fonte de afeto positivo.',
          'Engajar-se em atos de bondade ou altruísmo.',
          'Integrar práticas de apreciação da beleza na rotina diária.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Regulação Positiva (Florescimento)', 
        description: 'Alta competência em gerar e manter bem-estar. Perfil resiliente, otimista e capaz de contagiar positivamente o ambiente e encontrar sentido na vida.',
        recommendations: [
          'Utilizar a energia positiva para impulsionar metas de longo prazo.',
          'Mentorar outros em habilidades de inteligência emocional.',
          'Manter a prática de gratidão profunda e conexão com propósito.'
        ]
      },
    ],
  },
};
