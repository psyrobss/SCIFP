
import { InventoryForm } from '../types';

export const IAC_INVENTORY: InventoryForm = {
  id: 'iac',
  acronym: 'IAC',
  name: 'Inventário de Aliança e Colaboração Terapêutica (IAC)',
  objective: 'Avaliar a qualidade do vínculo entre paciente e terapeuta, focando na confiança, no alinhamento de objetivos e na sensação de parceria e segurança.',
  instructions: 'As frases a seguir são sobre sua experiência na terapia. Indique o quanto cada uma descreve o que você sente em relação ao seu terapeuta e ao trabalho que fazem juntos.',
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
      id: 'affective_bond_trust',
      name: 'Vínculo Afetivo e Confiança',
      icon: '🤝',
      description: 'Sensação de ser aceito, compreendido e de poder confiar no terapeuta.',
      interpretationLabels: {
        level_1: 'Dificuldade de conexão e confiança.',
        level_2: 'Vínculo em construção, com reservas.',
        level_3: 'Boa confiança e aceitação.',
        level_4: 'Vínculo sólido e seguro.',
      },
      questions: [
        { id: 6001, text: 'Sinto que meu terapeuta realmente se importa com meu bem-estar.' },
        { id: 6002, text: 'Sinto-me seguro(a) para falar sobre qualquer assunto na sessão.' },
        { id: 6003, text: 'Às vezes sinto que ele(a) não me entende verdadeiramente.', isReversed: true },
        { id: 6004, text: 'Sinto-me aceito(a) mesmo quando mostro meus lados difíceis.' },
        { id: 6005, text: 'Confio na competência e nas intenções do meu terapeuta.' },
        { id: 6006, text: 'Tenho receio de ser julgado(a) se for totalmente honesto(a).', isReversed: true },
        { id: 6007, text: 'Sinto que sou ouvido(a) com atenção e respeito.' },
        { id: 6008, text: 'Posso ser eu mesmo(a) durante as sessões.' },
      ],
    },
    {
      id: 'collaboration_goals',
      name: 'Colaboração e Alinhamento de Metas',
      icon: '🎯',
      description: 'Percepção de trabalho em equipe e clareza sobre os objetivos da terapia.',
      interpretationLabels: {
        level_1: 'Desalinhamento de objetivos.',
        level_2: 'Colaboração parcial ou passiva.',
        level_3: 'Bom trabalho em equipe.',
        level_4: 'Parceria ativa e objetivos compartilhados.',
      },
      questions: [
        { id: 6101, text: 'Sinto que eu e meu terapeuta trabalhamos como uma equipe.' },
        { id: 6102, text: 'Entendo claramente o que estamos tentando alcançar.' },
        { id: 6103, text: 'Às vezes não vejo sentido nas atividades propostas.', isReversed: true },
        { id: 6104, text: 'Sinto que participo das decisões sobre o tratamento.' },
        { id: 6105, text: 'Estamos alinhados sobre quais são os problemas mais importantes.' },
        { id: 6106, text: 'Tenho clareza sobre o meu papel na minha própria melhora.' },
        { id: 6107, text: 'Às vezes sinto que estamos "andando em círculos".', isReversed: true },
        { id: 6108, text: 'Percebo um esforço conjunto para o meu progresso.' },
      ],
    },
    {
      id: 'communication_attunement',
      name: 'Sintonia e Comunicação',
      icon: '📡',
      description: 'Fluidez na comunicação e sensação de estar "na mesma página".',
      interpretationLabels: {
        level_1: 'Ruídos frequentes na comunicação.',
        level_2: 'Sintonia intermitente.',
        level_3: 'Boa comunicação e entendimento.',
        level_4: 'Alta sintonia e fluidez.',
      },
      questions: [
        { id: 6201, text: 'O terapeuta explica as coisas de um jeito que faz sentido para mim.' },
        { id: 6202, text: 'Sinto que ele(a) capta o que estou sentindo, às vezes antes de eu falar.' },
        { id: 6203, text: 'Às vezes saio da sessão confuso(a) sobre o que conversamos.', isReversed: true },
        { id: 6204, text: 'Nossa conversa flui de maneira natural.' },
        { id: 6205, text: 'Temos uma linguagem comum e nos entendemos bem.' },
        { id: 6206, text: 'Se há um mal-entendido, conseguimos esclarecer facilmente.' },
        { id: 6207, text: 'Sinto que ele(a) interpreta minhas falas de jeito errado.', isReversed: true },
        { id: 6208, text: 'As sessões me ajudam a organizar o que penso e sinto.' },
      ],
    },
    {
      id: 'growth_safety',
      name: 'Segurança para o Crescimento',
      icon: '🌱',
      description: 'Percepção da terapia como um espaço seguro que impulsiona a mudança.',
      interpretationLabels: {
        level_1: 'Insegurança ou estagnação.',
        level_2: 'Crescimento tímido ou cauteloso.',
        level_3: 'Sensação clara de progresso.',
        level_4: 'Ambiente transformador e seguro.',
      },
      questions: [
        { id: 6301, text: 'Sinto que a terapia está me ajudando a mudar para melhor.' },
        { id: 6302, text: 'Sinto-me mais capaz de lidar com meus problemas graças às sessões.' },
        { id: 6303, text: 'Às vezes sinto que não estou saindo do lugar.', isReversed: true },
        { id: 6304, text: 'Sinto-me encorajado(a) a experimentar novos comportamentos.' },
        { id: 6305, text: 'A terapia é um lugar onde posso recarregar minhas energias.' },
        { id: 6306, text: 'Sinto segurança para enfrentar temas dolorosos aqui.' },
        { id: 6307, text: 'Às vezes penso em desistir por frustração.', isReversed: true },
        { id: 6308, text: 'Estou desenvolvendo novas perspectivas sobre mim mesmo(a).' },
      ],
    },
    {
      id: 'autonomy_mutual_respect',
      name: 'Respeito à Autonomia',
      icon: '⚖️',
      description: 'Equilíbrio entre apoio e independência, validando a capacidade do paciente.',
      interpretationLabels: {
        level_1: 'Dependência ou falta de voz.',
        level_2: 'Autonomia em desenvolvimento.',
        level_3: 'Relação de respeito mútuo.',
        level_4: 'Forte incentivo à autonomia.',
      },
      questions: [
        { id: 6401, text: 'Sinto que o terapeuta acredita na minha capacidade de mudar.' },
        { id: 6402, text: 'Tenho liberdade para discordar dele(a) sem problemas.' },
        { id: 6403, text: 'Às vezes sinto que dependo demais da opinião dele(a).', isReversed: true },
        { id: 6404, text: 'Minhas opiniões e valores são respeitados.' },
        { id: 6405, text: 'Sei que o sucesso da terapia também depende de mim.' },
        { id: 6406, text: 'Ele(a) me ajuda a encontrar minhas próprias respostas.' },
        { id: 6407, text: 'Sinto que estamos construindo o caminho juntos.' },
        { id: 6408, text: 'Consigo expressar se algo na terapia não está funcionando para mim.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) reflete a força da Aliança Terapêutica. Escores altos indicam uma parceria sólida e eficaz.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Desafios na Conexão', 
        description: 'Indica dificuldades no estabelecimento do vínculo, confiança ou alinhamento. Pode haver sensação de distância ou incompreensão. Requer atenção prioritária.',
        recommendations: [
          'Conversar abertamente sobre como está se sentindo na relação terapêutica.',
          'Clarificar expectativas e objetivos: o que você espera da terapia?',
          'Avaliar se houve alguma ruptura ou mal-entendido não resolvido.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Aliança em Construção', 
        description: 'Vínculo existente, mas com oscilações. Pode haver momentos de boa conexão intercalados com dúvidas ou hesitação em se aprofundar.',
        recommendations: [
          'Praticar dar feedback ao terapeuta sobre o que funciona ou não.',
          'Focar em construir segurança antes de entrar em temas traumáticos.',
          'Validar o próprio tempo de abertura.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Boa Parceria Terapêutica', 
        description: 'Relação colaborativa e funcional. O paciente sente-se geralmente compreendido e apoiado, permitindo o trabalho clínico efetivo.',
        recommendations: [
          'Manter a transparência sobre o processo.',
          'Usar a segurança da relação para arriscar novos comportamentos.',
          'Monitorar periodicamente o alinhamento das metas.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Aliança Sólida e Transformadora', 
        description: 'Excelente sintonia, confiança profunda e colaboração ativa. A própria relação terapêutica serve como modelo de vínculo seguro e corretivo.',
        recommendations: [
          'Aprofundar o trabalho em padrões relacionais complexos.',
          'Preparar para a internalização do "terapeuta interno" (autonomia).',
          'Usar a relação para reparar feridas de apego antigas.'
        ]
      },
    ],
  }
};
