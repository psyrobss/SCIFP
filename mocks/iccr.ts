
import { InventoryForm } from '../types';

export const ICCR_INVENTORY: InventoryForm = {
  id: 'iccr',
  acronym: 'ICCR',
  name: 'Inventário de Comportamentos Compulsivos e Repetitivos',
  objective: 'Avaliar a presença e intensidade de padrões de pensamento e comportamento repetitivos, identificando áreas onde a rigidez ou a impulsividade podem estar afetando a qualidade de vida.',
  instructions: 'Abaixo estão afirmações sobre hábitos e pensamentos. Indique o quanto cada uma descreve sua experiência nas últimas semanas, usando a escala de 1 a 7.',
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
      id: 'intrusive_thoughts',
      name: 'Pensamentos Intrusivos',
      icon: '🔄',
      description: 'Presença de pensamentos recorrentes ou preocupações que surgem sem serem chamados e são difíceis de afastar.',
      interpretationLabels: {
        level_1: 'Fluxo mental tranquilo.',
        level_2: 'Preocupações ocasionais.',
        level_3: 'Pensamentos repetitivos frequentes.',
        level_4: 'Forte intrusão de pensamentos.',
      },
      questions: [
        { id: 17001, text: 'Tenho pensamentos indesejados que voltam repetidamente à minha mente.' },
        { id: 17002, text: 'Tento evitar certos pensamentos, mas eles retornam com força.' },
        { id: 17003, text: 'Me preocupo excessivamente com detalhes ou possibilidades improváveis.' },
        { id: 17004, text: 'Tenho dificuldade em “desligar” minha mente de uma ideia fixa.' },
        { id: 17005, text: 'Me sinto ansioso(a) quando não consigo controlar o rumo dos meus pensamentos.' },
      ],
    },
    {
      id: 'rituals_checking',
      name: 'Rituais e Verificações',
      icon: '🧼',
      description: 'Necessidade de realizar ações específicas ou conferências para sentir alívio ou segurança.',
      interpretationLabels: {
        level_1: 'Rotinas flexíveis.',
        level_2: 'Preferência por ordem/verificação.',
        level_3: 'Necessidade de rituais para alívio.',
        level_4: 'Rituais rígidos e frequentes.',
      },
      questions: [
        { id: 17101, text: 'Sinto necessidade de checar coisas várias vezes (portas, luzes, mensagens) para ter certeza.' },
        { id: 17102, text: 'Repito determinadas ações até sentir que estão “corretas” ou “seguras”.' },
        { id: 17103, text: 'Tenho pequenas manias que preciso seguir para me sentir bem.' },
        { id: 17104, text: 'Sinto desconforto ou ansiedade se sou impedido(a) de fazer uma verificação.' },
        { id: 17105, text: 'Levo mais tempo que o necessário em tarefas por causa do perfeccionismo ou repetição.' },
      ],
    },
    {
      id: 'impulsivity_loss_of_control',
      name: 'Impulsividade e Regulação',
      icon: '⚡',
      description: 'Dificuldade em resistir a impulsos imediatos ou interromper comportamentos que trazem gratificação rápida.',
      interpretationLabels: {
        level_1: 'Bom controle de impulsos.',
        level_2: 'Impulsividade situacional.',
        level_3: 'Dificuldade moderada de freio.',
        level_4: 'Sensação de perda de controle.',
      },
      questions: [
        { id: 17201, text: 'Às vezes ajo por impulso e me arrependo logo depois.' },
        { id: 17202, text: 'Tenho dificuldade em parar de fazer algo que sei que não é bom para mim.' },
        { id: 17203, text: 'Sinto uma urgência interna de agir para aliviar a tensão imediatamente.' },
        { id: 17204, text: 'Busco alívio rápido em comportamentos repetitivos (ex: comer, comprar, telas).' },
        { id: 17205, text: 'Tenho dificuldade em adiar a gratificação.' },
      ],
    },
    {
      id: 'awareness_impact',
      name: 'Impacto na Rotina',
      icon: '🧠',
      description: 'Percepção de como esses padrões afetam o dia a dia, o tempo e as relações.',
      interpretationLabels: {
        level_1: 'Sem impacto funcional.',
        level_2: 'Impacto leve.',
        level_3: 'Interferência notável na rotina.',
        level_4: 'Alto impacto na qualidade de vida.',
      },
      questions: [
        { id: 17301, text: 'Percebo que gasto muito tempo com preocupações ou hábitos repetitivos.' },
        { id: 17302, text: 'Sinto culpa ou frustração por não conseguir mudar certos comportamentos.' },
        { id: 17303, text: 'Esses hábitos acabam me atrasando ou atrapalhando minhas responsabilidades.' },
        { id: 17304, text: 'Já deixei de fazer coisas importantes por causa desses padrões.' },
        { id: 17305, text: 'Sinto que minha mente fica exausta com essas repetições.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica a intensidade dos padrões repetitivos e compulsivos. Escores mais altos sugerem maior rigidez e necessidade de estratégias de flexibilização.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Flexibilidade Comportamental', 
        description: 'Baixa presença de rituais ou pensamentos intrusivos. O indivíduo consegue lidar com a incerteza e mudar de foco com facilidade.',
        recommendations: [
          'Manter rotinas saudáveis sem rigidez.',
          'Praticar a atenção plena para manter a clareza mental.',
          'Continuar desenvolvendo tolerância à incerteza.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Tendências à Repetição', 
        description: 'Alguns hábitos ou preocupações podem surgir em momentos de estresse, servindo como tentativa de controle ou alívio da ansiedade.',
        recommendations: [
          'Identificar gatilhos de estresse que aumentam a necessidade de controle.',
          'Experimentar adiar a resposta compulsiva (pausa de 5 minutos).',
          'Questionar a utilidade real da preocupação excessiva.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Padrões Rígidos de Comportamento', 
        description: 'Presença frequente de pensamentos repetitivos ou necessidade de rituais que consomem energia e tempo. Pode haver desconforto significativo se a rotina for quebrada.',
        recommendations: [
          'Terapia Cognitivo-Comportamental para Prevenção de Resposta (EPR leve).',
          'Exercícios de exposição gradual ao desconforto sem realizar o ritual.',
          'Técnicas de "desfusão" para observar o pensamento sem obedecê-lo.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Compulsividade / Necessidade de Controle', 
        description: 'Padrões intensos de repetição, intrusão mental ou impulsividade que interferem na liberdade pessoal. O alívio da ansiedade é buscado através de rituais ou comportamentos.',
        recommendations: [
          'Avaliação clínica especializada para TOC ou transtornos de impulso.',
          'Focar na redução da ansiedade basal.',
          'Treinamento intensivo de flexibilidade psicológica.',
          'Envolver rede de apoio para reduzir a acomodação dos sintomas.'
        ]
      },
    ],
  }
};
