
import { InventoryForm } from '../types';

export const IEV_INVENTORY: InventoryForm = {
  id: 'iev',
  acronym: 'IEV',
  name: 'Inventário de Estilos de Vínculo',
  objective: 'Identificar padrões de apego interpessoal em adultos, avaliando tendências de apego seguro, ansioso/hiperativo, evitativo/independente, e ambivalente/desorganizado, para uso clínico em psicoterapia individual ou orientação psicoeducativa.',
  instructions: 'Leia cada frase e indique o quanto ela se aplica geralmente aos seus sentimentos e comportamentos em relacionamentos significativos.',
  responseScale: [
    { value: 0, label: 'Nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre / Sempre' },
  ],
  domains: [
    {
      id: 'secure_attachment',
      name: 'Apego Seguro',
      icon: '💖',
      description: 'Padrões funcionais e resilientes, com conforto na intimidade e autonomia.',
      questions: [
        { id: 30001, text: 'Sinto-me confortável ao depender de pessoas próximas.' },
        { id: 30002, text: 'Confio que os outros estarão disponíveis quando preciso.' },
        { id: 30003, text: 'Posso expressar meus sentimentos sem medo de rejeição.' },
        { id: 30004, text: 'Sinto-me confortável em receber apoio emocional.' },
        { id: 30005, text: 'Tenho relacionamentos próximos e satisfatórios.' },
        { id: 30006, text: 'Consigo equilibrar autonomia e proximidade.' },
        { id: 30007, text: 'Confio na estabilidade das pessoas importantes para mim.' },
        { id: 30008, text: 'Sinto-me seguro(a) em compartilhar vulnerabilidades.' },
      ],
    },
    {
      id: 'anxious_attachment',
      name: 'Apego Ansioso/Hiperativo',
      icon: '😟',
      description: 'Tendência à dependência emocional, com busca intensa por proximidade e medo de abandono.',
      questions: [
        { id: 30009, text: 'Sinto medo de que as pessoas importantes me abandonem.' },
        { id: 30010, text: 'Fico preocupado(a) se meus relacionamentos não são constantes.' },
        { id: 30011, text: 'Preciso de muita confirmação e atenção de quem amo.' },
        { id: 30012, text: 'Às vezes exagero em demonstrar sentimentos para manter proximidade.' },
        { id: 30013, text: 'Tenho dificuldade em confiar que os outros me valorizam.' },
        { id: 30014, text: 'Fico ansioso(a) quando o outro se distancia emocionalmente.' },
        { id: 30015, text: 'Interpreto sinais neutros como rejeição.' },
        { id: 30016, text: 'Sinto que meus relacionamentos dependem muito do meu esforço.' },
      ],
    },
    {
      id: 'avoidant_attachment',
      name: 'Apego Evitativo/Independente',
      icon: '🚶‍♂️',
      description: 'Dificuldade com intimidade e dependência, com preferência por autonomia e distanciamento emocional.',
      questions: [
        { id: 30017, text: 'Prefiro manter distância emocional para não me machucar.' },
        { id: 30018, text: 'Tenho dificuldade em depender de alguém.' },
        { id: 30019, text: 'Evito compartilhar sentimentos íntimos com os outros.' },
        { id: 30020, text: 'Sinto-me desconfortável com proximidade emocional intensa.' },
        { id: 30021, text: 'Às vezes me afasto mesmo de pessoas que amo.' },
        { id: 30022, text: 'Sinto que posso lidar melhor sozinho(a) do que pedir ajuda.' },
        { id: 30023, text: 'Evito compromisso ou intimidade por medo de perda de autonomia.' },
      ],
    },
    {
      id: 'ambivalent_attachment',
      name: 'Apego Ambivalente/Desorganizado',
      icon: '❓',
      description: 'Padrão inconsistente, com uma mistura de desejo por proximidade e medo, levando a comportamentos contraditórios.',
      questions: [
        { id: 30024, text: 'Às vezes desejo proximidade, mas também me afasto por medo.' },
        { id: 30025, text: 'Minhas emoções em relacionamentos são imprevisíveis.' },
        { id: 30026, text: 'Sinto dificuldade em confiar totalmente, mesmo que queira.' },
        { id: 30027, text: 'Experimento altos e baixos emocionais frequentes nos vínculos.' },
        { id: 30028, text: 'Sinto-me confuso(a) sobre o que quero nas relações.' },
        { id: 30029, text: 'Às vezes me comporto de forma contraditória com quem amo.' },
        { id: 30030, text: 'Posso reagir de forma exagerada ou defensiva sem perceber.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A interpretação principal é baseada na pontuação média de cada domínio. O estilo com maior pontuação tende a ser o predominante.',
    ranges: [
        { 
          min: 0, 
          max: 4, 
          label: 'Análise Qualitativa dos Estilos de Vínculo', 
          description: 'Este inventário não gera uma pontuação única de "bom" ou "ruim". Em vez disso, observe qual dos domínios abaixo apresenta a maior pontuação média para identificar o estilo de apego predominante.',
          recommendations: [
            'Se o Apego Seguro for baixo: Trabalhar a construção de confiança e a "base segura" na terapia.',
            'Se o Apego Ansioso for alto: Focar em regulação emocional, autonomia e redução da necessidade de validação constante.',
            'Se o Apego Evitativo for alto: Explorar o medo da vulnerabilidade e incentivar pequenos passos de aproximação emocional.',
            'Se o Apego Ambivalente for alto: Trabalhar a estabilidade, a coerência interna e o processamento de traumas relacionais passados.'
          ]
        }
    ],
  }
};
