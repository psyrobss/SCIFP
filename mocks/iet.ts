
import { InventoryForm } from '../types';

export const IET_INVENTORY: InventoryForm = {
  id: 'iet',
  acronym: 'IET',
  name: 'Inventário de Espiritualidade e Transcendência',
  objective: 'Avaliar o grau de espiritualidade subjetiva, sentido de transcendência e conexão com dimensões que ultrapassam o self individual — sejam elas de natureza simbólica, filosófica, ética ou religiosa.',
  instructions: 'Este questionário investiga como você percebe sua relação com algo maior do que si mesmo. Não há respostas certas ou erradas. Responda de acordo com o quanto cada afirmação representa sua experiência pessoal na escala de 1 a 7.',
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
      id: 'connection_unity',
      name: 'Sentido de Conexão e Unidade',
      icon: '🌿',
      description: 'Avalia o sentimento de integração com o todo, a natureza ou o fluxo da vida.',
      interpretationLabels: {
        level_1: 'Sentimento de desconexão ou isolamento.',
        level_2: 'Conexão intermitente com o todo.',
        level_3: 'Bom senso de conexão e unidade.',
        level_4: 'Profundo sentimento de integração e unidade.',
      },
      questions: [
        { id: 26001, text: 'Sinto que faço parte de algo maior do que eu.' },
        { id: 26002, text: 'Tenho momentos em que percebo uma profunda união com a vida.' },
        { id: 26003, text: 'Às vezes sinto que estou desconectado do mundo ao meu redor.', isReversed: true },
        { id: 26004, text: 'Tenho experiências em que tudo parece estar interligado.' },
        { id: 26005, text: 'Costumo sentir que minha existência tem um lugar no universo.' },
      ],
    },
    {
      id: 'purpose_meaning',
      name: 'Propósito e Significado Transcendente',
      icon: '🔮',
      description: 'Investiga o quanto o indivíduo percebe um propósito que dá sentido à vida.',
      interpretationLabels: {
        level_1: 'Busca ativa por sentido.',
        level_2: 'Propósito em definição.',
        level_3: 'Bom senso de propósito transcendente.',
        level_4: 'Forte e claro senso de missão pessoal.',
      },
      questions: [
        { id: 26006, text: 'Sinto que há um propósito que orienta minha vida.' },
        { id: 26007, text: 'Frequentemente me pergunto “por que estou aqui” com sensação de dúvida.', isReversed: true },
        { id: 26008, text: 'Tenho clareza sobre o que me faz sentir parte de algo significativo.' },
        { id: 26009, text: 'Às vezes sinto que vivo sem direção ou propósito.', isReversed: true },
        { id: 26010, text: 'Busco viver de acordo com um sentido que vai além de mim mesmo.' },
      ],
    },
    {
      id: 'spiritual_experience',
      name: 'Experiência Espiritual e Ampliação',
      icon: '🌙',
      description: 'Avalia estados subjetivos de expansão, insight ou conexão interior profunda.',
      interpretationLabels: {
        level_1: 'Vivência focada no concreto.',
        level_2: 'Experiências de ampliação ocasionais.',
        level_3: 'Boa capacidade de acessar estados de paz.',
        level_4: 'Frequentes experiências de conexão profunda.',
      },
      questions: [
        { id: 26011, text: 'Já vivi momentos de profunda paz interior, difíceis de descrever.' },
        { id: 26012, text: 'Em certos momentos, sinto que minha mente se expande para algo maior.' },
        { id: 26013, text: 'Já tive experiências que mudaram minha forma de ver a vida.' },
        { id: 26014, text: 'Tenho dificuldade em acessar um estado de serenidade profunda.', isReversed: true },
        { id: 26015, text: 'Sinto que às vezes há uma sabedoria em mim que vai além do pensamento racional.' },
      ],
    },
    {
      id: 'ego_transcendence',
      name: 'Transcendência do Ego',
      icon: '🕊️',
      description: 'Explora a capacidade de ir além dos interesses pessoais, conectando-se a valores universais.',
      interpretationLabels: {
        level_1: 'Foco nas necessidades imediatas do self.',
        level_2: 'Esforço para transcender interesses pessoais.',
        level_3: 'Bom equilíbrio entre self e o todo.',
        level_4: 'Elevada capacidade de serviço e compaixão.',
      },
      questions: [
        { id: 26016, text: 'Sinto que minha vida é guiada por valores mais amplos do que meus desejos.' },
        { id: 26017, text: 'Tento agir pensando no bem comum.' },
        { id: 26018, text: 'Costumo me perceber preso em questões estritamente pessoais.', isReversed: true },
        { id: 26019, text: 'Sinto que a compaixão é uma força que orienta minhas ações.' },
        { id: 26020, text: 'Acredito que crescer espiritualmente envolve servir algo além de si mesmo.' },
      ],
    },
    {
      id: 'spiritual_integration',
      name: 'Integração e Autotransformação',
      icon: '💫',
      description: 'Avalia a integração das experiências espirituais com o cotidiano e a capacidade de transformação interior.',
      interpretationLabels: {
        level_1: 'Espiritualidade compartimentalizada.',
        level_2: 'Dificuldade em aplicar insights na prática.',
        level_3: 'Boa integração no dia a dia.',
        level_4: 'Espiritualidade como eixo de vida.',
      },
      questions: [
        { id: 26021, text: 'As experiências profundas que vivi mudaram minha forma de ser.' },
        { id: 26022, text: 'Busco aprender com cada dificuldade como parte do meu crescimento interior.' },
        { id: 26023, text: 'Às vezes tenho dificuldade em manter o equilíbrio entre o espiritual e o prático.', isReversed: true },
        { id: 26024, text: 'Sinto que estou me tornando uma pessoa mais consciente e compassiva.' },
        { id: 26025, text: 'Vejo minha trajetória como um processo de evolução pessoal.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de integração espiritual e sentido de transcendência. Escores mais altos refletem maior conexão e propósito.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Busca de Conexão', 
        description: 'Pode haver uma sensação de vazio existencial, desconexão ou foco excessivo em aspectos materiais/concretos da vida. Momento propício para explorar valores.',
        recommendations: [
          'Práticas de contemplação da natureza ou arte.',
          'Explorar literatura sobre sentido de vida e filosofia.',
          'Exercícios de gratidão para ampliar a percepção do "bom".'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Espiritualidade em Desenvolvimento', 
        description: 'Interesse por temas transcendentes e experiências ocasionais de conexão, mas talvez com dificuldade de integrar isso na rotina diária.',
        recommendations: [
          'Criar pequenos rituais diários de conexão (meditação, oração, silêncio).',
          'Buscar grupos ou comunidades com valores similares.',
          'Refletir sobre como trazer valores espirituais para o trabalho/relações.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Boa Integração Espiritual', 
        description: 'Conexão e propósito presentes de forma consistente. O indivíduo consegue utilizar sua espiritualidade como recurso de resiliência.',
        recommendations: [
          'Aprofundar o estudo ou prática de sua linha filosófica/espiritual.',
          'Engajar-se em serviço voluntário como expressão de valores.',
          'Praticar o não-julgamento e a aceitação no dia a dia.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Transcendência e Propósito', 
        description: 'Forte sentido de conexão, propósito e coerência ética. A vida é vivida com um senso de missão e serviço, com alta paz interior.',
        recommendations: [
          'Atuar como mentor ou guia para outros.',
          'Focar no legado e na transmissão de sabedoria.',
          'Manter a humildade ("mente de principiante") para continuar aprendendo.'
        ]
      },
    ],
  },
};
