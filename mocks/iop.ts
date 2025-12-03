
import { InventoryForm } from '../types';

export const IOP_INVENTORY: InventoryForm = {
  id: 'iop',
  acronym: 'IOP',
  name: 'Inventário de Organização Psíquica',
  objective: 'Avaliar o nível de coesão interna, integração identitária e estabilidade emocional-estrutural do indivíduo, identificando padrões de funcionamento e recursos de estabilidade.',
  instructions: 'Abaixo estão descritas diversas afirmações sobre como você costuma perceber a si mesmo e reagir diante da situações. Marque o quanto cada uma delas se aplica a você na maior parte do tempo, sendo o mais honesto possível.',
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
      id: 'self_cohesion_continuity',
      name: 'Coesão e Continuidade do Self',
      icon: '🧠',
      description: 'Senso de identidade estável e contínuo ao longo do tempo e em diferentes situações.',
      interpretationLabels: {
        level_1: 'Sensação frequente de indefinição sobre si mesmo.',
        level_2: 'Oscilações na percepção da identidade.',
        level_3: 'Bom senso de continuidade pessoal.',
        level_4: 'Identidade sólida, integrada e estável.',
      },
      questions: [
        { id: 20001, text: 'Tenho uma noção clara de quem eu sou, independente de onde estou.' },
        { id: 20002, text: 'Mesmo em momentos difíceis, sinto que continuo sendo eu mesmo(a).' },
        { id: 20003, text: 'Minhas opiniões e valores fundamentais são estáveis.' },
        { id: 20004, text: 'Consigo integrar lados diferentes da minha personalidade (ex: ser sério e brincalhão) sem me sentir dividido.' },
        { id: 20005, text: 'Raramente sinto que sou uma pessoa “estranha” para mim mesmo(a).' },
      ],
    },
    {
      id: 'emotional_regulation_tolerance',
      name: 'Estabilidade e Tolerância Emocional',
      icon: '🌊',
      description: 'Capacidade de manejar emoções intensas sem perder o equilíbrio interno diante de frustrações.',
      interpretationLabels: {
        level_1: 'Alta reatividade e dificuldade de retorno ao equilíbrio.',
        level_2: 'Sensibilidade emocional acentuada sob pressão.',
        level_3: 'Boa capacidade de regulação na maioria das situações.',
        level_4: 'Elevada estabilidade e resiliência emocional.',
      },
      questions: [
        { id: 20101, text: 'Mesmo quando estou irritado(a) ou triste, consigo manter meu funcionamento básico.' },
        { id: 20102, text: 'Tenho consciência das minhas emoções e do que as desperta, sem ser dominado por elas.' },
        { id: 20103, text: 'Consigo me acalmar sozinho(a) após situações emocionalmente intensas.' },
        { id: 20104, text: 'Sinto-me capaz de lidar com frustrações sem perder o controle.' },
        { id: 20105, text: 'Evito reações impulsivas extremas quando algo me desagrada.' },
      ],
    },
    {
      id: 'psychological_realism_judgment',
      name: 'Percepção Realista e Clareza',
      icon: '🪞',
      description: 'Habilidade de diferenciar fatos objetivos de interpretações subjetivas ou emocionais.',
      interpretationLabels: {
        level_1: 'A emoção tende a colorir excessivamente a interpretação dos fatos.',
        level_2: 'Dificuldade ocasional em separar sentimentos de fatos.',
        level_3: 'Boa capacidade de análise realista.',
        level_4: 'Forte senso de realidade e objetividade.',
      },
      questions: [
        { id: 20201, text: 'Consigo perceber quando minhas emoções estão distorcendo minha visão dos fatos.' },
        { id: 20202, text: 'Tenho facilidade em diferenciar o que realmente aconteceu do que eu imaginei.' },
        { id: 20203, text: 'Evito tirar conclusões precipitadas sobre as intenções dos outros.' },
        { id: 20204, text: 'Reconheço quando estou projetando meus medos em uma situação.' },
        { id: 20205, text: 'Costumo avaliar de forma realista minhas próprias capacidades e limites.' },
      ],
    },
    {
      id: 'defense_mechanisms_integration',
      name: 'Flexibilidade de Enfrentamento',
      icon: '🧱',
      description: 'Uso de estratégias maduras para lidar com conflitos (ex: reflexão, diálogo) em vez de reações defensivas (ex: negação, projeção).',
      interpretationLabels: {
        level_1: 'Tendência a defesas rígidas (negar, culpar outros).',
        level_2: 'Enfrentamento misto, oscilando sob estresse.',
        level_3: 'Uso predominante de estratégias adaptativas.',
        level_4: 'Capacidade de enfrentar a realidade com flexibilidade.',
      },
      questions: [
        { id: 20301, text: 'Costumo enfrentar os problemas de frente, em vez de fingir que não existem.' },
        { id: 20302, text: 'Quando algo me incomoda, tento entender minha responsabilidade antes de culpar alguém.' },
        { id: 20303, text: 'Consigo ver que as pessoas têm qualidades e defeitos ao mesmo tempo (não são "só boas" ou "só más").' },
        { id: 20304, text: 'Evito pensar em situações de forma extremista ("tudo ou nada").' },
        { id: 20305, text: 'Quando me sinto ferido(a), tento compreender o que realmente está por trás do sentimento.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de integração e estabilidade da organização psíquica. Escores mais altos sugerem maior solidez e recursos adaptativos.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Necessidade de Estruturação e Apoio', 
        description: 'Indica desafios na manutenção da estabilidade interna e da autoimagem. Pode haver sensação frequente de confusão, vazio ou reatividade intensa em relacionamentos.',
        recommendations: [
          'Priorizar a estabilização emocional e a criação de rotinas seguras.',
          'Trabalhar a identificação de limites entre "eu" e o "outro".',
          'Evitar ambientes caóticos ou excessivamente estimulantes neste momento.',
          'Intervenções focadas no "aqui e agora" para fortalecer o senso de realidade.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Organização com Instabilidades Pontuais', 
        description: 'Funcionamento geral adaptativo, mas com vulnerabilidade a estressores. Em momentos de crise, pode haver oscilação na autoimagem ou uso de defesas mais rígidas (como ver as coisas "preto no branco").',
        recommendations: [
          'Identificar gatilhos específicos que geram desorganização emocional.',
          'Fortalecer a capacidade de "mentalização" (entender a mente do outro).',
          'Treinar a tolerância à ambivalência (aceitar sentimentos mistos).',
          'Monitorar o impacto do estresse na percepção de si mesmo.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Organização Psíquica Coesa', 
        description: 'Boa capacidade de integração e estabilidade. O indivíduo mantém o senso de identidade mesmo sob pressão e utiliza estratégias maduras para lidar com conflitos.',
        recommendations: [
          'Aprofundar o autoconhecimento e a análise de padrões sutis.',
          'Utilizar a estabilidade para assumir desafios de crescimento.',
          'Trabalhar aspectos de perfeccionismo ou autoexigência, se presentes.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Integração e Estabilidade', 
        description: 'Self coeso, identidade clara e excelente regulação emocional. Percepção realista e nuançada de si e dos outros, com alta resiliência.',
        recommendations: [
          'Manter práticas de desenvolvimento pessoal.',
          'Atuar como suporte ou modelo de estabilidade para outros.',
          'Focar em metas de longo prazo e legado pessoal.'
        ]
      },
    ],
  }
};
