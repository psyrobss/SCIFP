
import { InventoryForm } from '../types';

export const IQVL_INVENTORY: InventoryForm = {
  id: 'iqvl',
  acronym: 'IQVL',
  name: 'Inventário de Qualidade de Vida e Lazer',
  objective: 'Avaliar a percepção subjetiva de bem-estar, satisfação com a vida e o equilíbrio entre responsabilidades e momentos de recuperação/prazer.',
  instructions: 'Indique o quanto cada afirmação descreve sua experiência de vida atual (últimos 3 meses), utilizando a escala de 1 a 7.',
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
      id: 'life_satisfaction',
      name: 'Satisfação Geral',
      icon: '😊',
      description: 'Avaliação global sobre o contentamento com a própria trajetória e condições de vida atuais.',
      interpretationLabels: {
        level_1: 'Insatisfação global.',
        level_2: 'Satisfação parcial/baixa.',
        level_3: 'Boa satisfação com a vida.',
        level_4: 'Alta realização e contentamento.',
      },
      questions: [
        { id: 44001, text: 'Sinto-me satisfeito(a) com a minha vida como um todo.' },
        { id: 44002, text: 'Tenho alcançado as metas que são importantes para mim.' },
        { id: 44003, text: 'Sinto que minha vida tem sentido e valor.' },
        { id: 44004, text: 'Se pudesse reviver minha vida, mudaria pouca coisa.' },
        { id: 44005, text: 'As condições da minha vida são excelentes.' },
        { id: 44006, text: 'Sinto gratidão pelas oportunidades que tive.' },
        { id: 44007, text: 'Estou feliz com o rumo que as coisas estão tomando.' },
      ],
    },
    {
      id: 'leisure_engagement',
      name: 'Lazer e Recuperação',
      icon: '🎨',
      description: 'Frequência e qualidade do tempo dedicado a atividades que geram prazer, descanso e renovação.',
      interpretationLabels: {
        level_1: 'Ausência de lazer.',
        level_2: 'Lazer escasso ou passivo.',
        level_3: 'Lazer regular e prazeroso.',
        level_4: 'Vida rica em atividades gratificantes.',
      },
      questions: [
        { id: 44008, text: 'Dedico tempo regularmente a hobbies e atividades que amo.' },
        { id: 44009, text: 'Consigo me desconectar das obrigações para relaxar de verdade.' },
        { id: 44010, text: 'Tenho momentos de diversão e leveza na minha rotina.' },
        { id: 44011, text: 'Sinto-me renovado(a) após meus momentos de lazer.' },
        { id: 44012, text: 'Priorizo atividades que me trazem alegria, não apenas produtividade.' },
        { id: 44013, text: 'Tenho interesses variados fora do trabalho/estudo.' },
        { id: 44014, text: 'Sinto que meu tempo livre é bem aproveitado.' },
      ],
    },
    {
      id: 'physical_vitality',
      name: 'Vitalidade Física e Saúde',
      icon: '💪',
      description: 'Percepção de energia, disposição física e ausência de desconfortos limitantes.',
      interpretationLabels: {
        level_1: 'Exaustão ou mal-estar físico.',
        level_2: 'Energia baixa.',
        level_3: 'Boa disposição física.',
        level_4: 'Alta vitalidade e saúde percebida.',
      },
      questions: [
        { id: 44015, text: 'Tenho energia suficiente para fazer tudo o que quero.' },
        { id: 44016, text: 'Sinto-me fisicamente bem na maior parte do tempo.' },
        { id: 44017, text: 'Meu sono é reparador e acordo descansado(a).' },
        { id: 44018, text: 'Cuido do meu corpo (alimentação, movimento) com carinho.' },
        { id: 44019, text: 'Raramente deixo de fazer coisas por cansaço ou dor.' },
        { id: 44020, text: 'Sinto meu corpo como um aliado, não um obstáculo.' },
        { id: 44021, text: 'Tenho vigor para enfrentar o dia.' },
      ],
    },
    {
      id: 'social_support',
      name: 'Qualidade dos Vínculos',
      icon: '🤝',
      description: 'Satisfação com a rede de apoio, amizades e qualidade das interações sociais.',
      interpretationLabels: {
        level_1: 'Isolamento ou conflito.',
        level_2: 'Apoio social limitado.',
        level_3: 'Bons relacionamentos.',
        level_4: 'Rede de apoio nutritiva e segura.',
      },
      questions: [
        { id: 44022, text: 'Tenho pessoas com quem posso contar em momentos difíceis.' },
        { id: 44023, text: 'Sinto-me amado(a) e valorizado(a) pelas pessoas próximas.' },
        { id: 44024, text: 'Estou satisfeito(a) com a qualidade das minhas amizades.' },
        { id: 44025, text: 'Sinto que pertenço a uma comunidade ou grupo.' },
        { id: 44026, text: 'Minhas relações familiares (ou escolhidas) são fonte de apoio.' },
        { id: 44027, text: 'Não me sinto sozinho(a) no mundo.' },
        { id: 44028, text: 'Tenho interações sociais prazerosas com frequência.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) reflete a qualidade de vida percebida. Escores altos indicam bem-estar subjetivo elevado e equilíbrio.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Necessidade de Revitalização', 
        description: 'Indicadores de insatisfação, fadiga ou isolamento. A rotina pode estar drenando mais energia do que repõe. Risco de esgotamento.',
        recommendations: [
          'Priorizar o descanso e a recuperação básica (sono, alimentação).',
          'Identificar uma pequena atividade prazerosa para reintroduzir na rotina.',
          'Buscar reconexão com pelo menos uma pessoa de confiança.',
          'Avaliar se há sintomas depressivos que exigem atenção clínica.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Qualidade de Vida em Oscilação', 
        description: 'Existem áreas funcionais, mas o bem-estar não é constante. Pode haver desequilíbrio entre dever (trabalho) e prazer (lazer).',
        recommendations: [
          'Proteger horários de lazer na agenda como se fossem reuniões importantes.',
          'Praticar exercícios físicos leves para aumentar a vitalidade.',
          'Refletir sobre quais áreas da vida estão sendo negligenciadas.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Boa Qualidade de Vida', 
        description: 'Nível satisfatório de bem-estar. O indivíduo sente-se geralmente bem, com bons relacionamentos e momentos de alegria, lidando bem com o estresse.',
        recommendations: [
          'Manter a consistência nos hábitos saudáveis.',
          'Planejar momentos especiais (viagens, eventos) para manter o entusiasmo.',
          'Cultivar a gratidão pelas coisas boas já presentes.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alto Bem-Estar e Florescimento', 
        description: 'Excelente percepção de vida. O indivíduo sente-se realizado, cheio de energia e conectado. Vive com propósito e prazer.',
        recommendations: [
          'Compartilhar essa vitalidade ajudando outros.',
          'Buscar novos desafios para continuar crescendo.',
          'Servir de inspiração para um estilo de vida equilibrado.'
        ]
      },
    ],
  },
};
