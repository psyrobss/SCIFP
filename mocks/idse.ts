
import { InventoryForm } from '../types';

export const IDSE_INVENTORY: InventoryForm = {
  id: 'idse',
  acronym: 'IDSE',
  name: 'Inventário de Sintomas de Estresse e Exaustão',
  objective: 'Avaliar a intensidade da sobrecarga física, emocional e cognitiva, identificando sinais precoces de esgotamento e a necessidade de recuperação.',
  instructions: 'Indique o quanto cada afirmação descreve como você tem se sentido nas últimas semanas, usando a escala de 1 a 7.',
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
      id: 'emotional_fatigue',
      name: 'Sobrecarga Emocional',
      icon: '💭',
      description: 'Sensação de estar drenado emocionalmente, com pavio curto ou dificuldade de acolher novas demandas.',
      interpretationLabels: {
        level_1: 'Energia emocional preservada.',
        level_2: 'Cansaço leve.',
        level_3: 'Sobrecarga moderada.',
        level_4: 'Esgotamento emocional intenso.',
      },
      questions: [
        { id: 15001, text: 'Sinto-me emocionalmente esgotado(a) no final do dia.' },
        { id: 15002, text: 'Tenho menos paciência do que o normal com as pessoas.' },
        { id: 15003, text: 'Tenho dificuldade em relaxar mesmo nos momentos de folga.' },
        { id: 15004, text: 'Sinto-me pressionado(a) por excesso de responsabilidades.' },
        { id: 15005, text: 'A sensação é de que estou no meu limite emocional.' },
        { id: 15006, text: 'Pequenos problemas parecem maiores do que realmente são.' },
      ],
    },
    {
      id: 'cognitive_symptoms',
      name: 'Fadiga Mental e Foco',
      icon: '🧠',
      description: 'Impacto do estresse na clareza mental, memória e capacidade de concentração.',
      interpretationLabels: {
        level_1: 'Clareza mental boa.',
        level_2: 'Dispersão ocasional.',
        level_3: 'Dificuldade de foco notável.',
        level_4: 'Confusão mental e falhas de memória.',
      },
      questions: [
        { id: 15101, text: 'Tenho dificuldade para manter o foco em tarefas que exigem atenção.' },
        { id: 15102, text: 'Minha memória recente parece estar falhando mais que o normal.' },
        { id: 15103, text: 'Sinto minha mente "nebulosa" ou lenta para tomar decisões.' },
        { id: 15104, text: 'Esqueço compromissos ou detalhes por distração.' },
        { id: 15105, text: 'Tenho a sensação de ter "muitas abas abertas" no cérebro ao mesmo tempo.' },
      ],
    },
    {
      id: 'physiological_reactions',
      name: 'Sinais Físicos de Tensão',
      icon: '⚡',
      description: 'Manifestações do estresse no corpo, como tensão muscular, alterações de sono e fadiga.',
      interpretationLabels: {
        level_1: 'Corpo relaxado.',
        level_2: 'Tensão muscular leve.',
        level_3: 'Sintomas físicos frequentes.',
        level_4: 'Corpo em estado de alerta constante.',
      },
      questions: [
        { id: 15201, text: 'Sinto dores musculares, tensão nos ombros ou bruxismo.' },
        { id: 15202, text: 'Meu sono não tem sido reparador (acordo cansado).' },
        { id: 15203, text: 'Sinto um cansaço físico que não passa com repouso rápido.' },
        { id: 15204, text: 'Tenho sintomas como taquicardia ou aperto no peito quando estressado.' },
        { id: 15205, text: 'Sinto que meu corpo está sempre "ligado" ou acelerado.' },
      ],
    },
    {
      id: 'demotivation',
      name: 'Desengajamento (Cinismo)',
      icon: '🛡️',
      description: 'Perda de interesse, distanciamento ou atitude negativa em relação às atividades (sinal de burnout).',
      interpretationLabels: {
        level_1: 'Engajamento mantido.',
        level_2: 'Perda leve de interesse.',
        level_3: 'Desmotivação clara.',
        level_4: 'Apatia ou cinismo acentuado.',
      },
      questions: [
        { id: 15301, text: 'Tenho perdido o entusiasmo pelo meu trabalho ou estudos.' },
        { id: 15302, text: 'Faço as coisas no "modo automático", sem envolvimento real.' },
        { id: 15303, text: 'Tenho vontade de me isolar e não interagir com ninguém.' },
        { id: 15304, text: 'Sinto que meu esforço não vale a pena.' },
        { id: 15305, text: 'Tenho me tornado mais crítico ou negativo em relação a tudo.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) reflete o nível de estresse percebido. Escores altos indicam risco de exaustão e necessidade de autocuidado.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Nível de Estresse Gerenciável', 
        description: 'O indivíduo lida com as demandas do dia a dia sem sinais significativos de desgaste. O corpo e a mente conseguem se recuperar nos períodos de descanso.',
        recommendations: [
          'Manter as práticas atuais de lazer e descanso.',
          'Monitorar períodos de pico de trabalho para prevenir acúmulo.',
          'Continuar investindo em hobbies e relações sociais.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Sinais de Alerta / Tensão', 
        description: 'Presença de sintomas leves de sobrecarga. Pode haver irritabilidade, cansaço no fim do dia ou tensão muscular. O corpo está pedindo atenção.',
        recommendations: [
          'Revisar a rotina e identificar o que pode ser delegado ou eliminado.',
          'Melhorar a higiene do sono.',
          'Introduzir micro-pausas ativas durante o dia.',
          'Praticar exercícios físicos leves para descarregar a tensão.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Sobrecarga Significativa', 
        description: 'O estresse está afetando o funcionamento e o bem-estar. Dificuldade de concentração, sono prejudicado e desmotivação podem estar presentes. Risco de adoecimento.',
        recommendations: [
          'Prioridade máxima para recuperação: sono e nutrição.',
          'Considerar terapia para manejo de estresse.',
          'Estabelecer limites claros entre trabalho e vida pessoal (desconexão).',
          'Avaliar a necessidade de férias ou redução de ritmo.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Estado de Exaustão (Risco de Burnout)', 
        description: 'Sinais de esgotamento físico e mental intenso. Os recursos de enfrentamento estão saturados. Pode haver cinismo ou sensação de incapacidade.',
        recommendations: [
          'Busca urgente de avaliação profissional (médica/psicológica).',
          'Afastamento temporário dos estressores, se possível.',
          'Foco total em saúde e restauração.',
          'Reavaliação profunda do estilo de vida e carreira.'
        ]
      },
    ],
  }
};
