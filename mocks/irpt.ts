
import { InventoryForm } from '../types';

export const IRPT_INVENTORY: InventoryForm = {
  id: 'irpt',
  acronym: 'IRPT',
  name: 'Inventário de Resistência Psicoterápica (IRPT)',
  objective: 'Avaliar atitudes cognitivas, emocionais e comportamentais que refletem resistência ao processo psicoterápico — incluindo evitação emocional, desconfiança, dificuldade de entrega e controle excessivo sobre o processo.',
  instructions: 'As frases abaixo descrevem reações comuns que as pessoas podem ter durante um processo de autoconhecimento ou psicoterapia. Leia cada uma e marque o quanto elas se aplicam a você atualmente.',
  responseScale: [
    { value: 0, label: 'Nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre' },
  ],
  domains: [
    {
      id: 'emotional_avoidance',
      name: 'Evitação Emocional',
      icon: '🧩',
      description: 'Tendência a evitar o contato ou a expressão de sentimentos dolorosos e vulneráveis durante a terapia.',
      interpretationLabels: {
        level_1: 'Baixa evitação, com abertura para explorar emoções.',
        level_2: 'Evitação leve de temas mais sensíveis.',
        level_3: 'Evitação moderada, com dificuldade de aprofundamento emocional.',
        level_4: 'Forte padrão de evitação emocional que bloqueia o processo.',
      },
      questions: [
        { id: 2801, text: 'Evito falar de assuntos que me causam desconforto emocional.' },
        { id: 2802, text: 'Tento manter a conversa na terapia em temas neutros.' },
        { id: 2803, text: 'Tenho dificuldade em demonstrar emoções na frente do terapeuta.' },
        { id: 2804, text: 'Quando algo me emociona, tento mudar de assunto.' },
        { id: 2805, text: 'Sinto que perco o controle quando expresso sentimentos profundos.' },
        { id: 2806, text: 'Prefiro falar de fatos, e não de como me sinto.' },
      ],
    },
    {
      id: 'cognitive_resistance_rationalization',
      name: 'Resistência Cognitiva e Racionalização',
      icon: '🧠',
      description: 'Uso de justificativas lógicas e intelectualização para se defender de insights ou interpretações emocionais.',
      interpretationLabels: {
        level_1: 'Baixa resistência cognitiva, com abertura a novas perspectivas.',
        level_2: 'Leve tendência à racionalização para evitar vulnerabilidade.',
        level_3: 'Uso moderado da intelectualização como defesa.',
        level_4: 'Forte padrão de racionalização e resistência a insights.',
      },
      questions: [
        { id: 2901, text: 'Tento entender racionalmente meus problemas, em vez de senti-los.' },
        { id: 2902, text: 'Costumo justificar minhas atitudes para não parecer vulnerável.' },
        { id: 2903, text: 'Penso demais antes de responder às perguntas do terapeuta.' },
        { id: 2904, text: 'Tenho dificuldade em aceitar interpretações que me surpreendem.' },
        { id: 2905, text: 'Sinto necessidade de ter uma explicação lógica para tudo.' },
        { id: 2906, text: 'Às vezes percebo que uso argumentos para “me defender” na sessão.' },
      ],
    },
    {
      id: 'control_distrust',
      name: 'Controle e Desconfiança no Processo',
      icon: '🔒',
      description: 'Dificuldade em se entregar ao processo terapêutico, mantendo uma postura de controle ou desconfiança sobre o terapeuta.',
      interpretationLabels: {
        level_1: 'Alta confiança e entrega ao processo.',
        level_2: 'Leve desconfiança ou necessidade de controle.',
        level_3: 'Desconfiança moderada que limita a profundidade do trabalho.',
        level_4: 'Forte desconfiança e controle que impede a aliança terapêutica.',
      },
      questions: [
        { id: 3001, text: 'Tenho dificuldade em confiar totalmente no terapeuta.' },
        { id: 3002, text: 'Fico atento(a) a tudo o que o terapeuta diz, com medo de ser julgado(a).' },
        { id: 3003, text: 'Sinto vontade de “testar” o terapeuta para ver até onde posso ir.' },
        { id: 3004, text: 'Evito me expor por completo, mesmo sabendo que seria útil.' },
        { id: 3005, text: 'Sinto necessidade de controlar o rumo da sessão.' },
        { id: 3006, text: 'Desconfio das intenções do terapeuta em certas interpretações.' },
      ],
    },
    {
      id: 'ambivalence_fear_of_change',
      name: 'Ambivalência e Medo de Mudança',
      icon: '🌀',
      description: 'Conflito interno entre o desejo de mudar e o medo das consequências ou da perda da identidade atual.',
      interpretationLabels: {
        level_1: 'Baixa ambivalência, com forte desejo de mudança.',
        level_2: 'Leve ambivalência ou medo das consequências da mudança.',
        level_3: 'Ambivalência moderada que gera estagnação no processo.',
        level_4: 'Forte medo de mudança, com autossabotagem frequente.',
      },
      questions: [
        { id: 3101, text: 'Parte de mim quer mudar, mas outra parte resiste.' },
        { id: 3102, text: 'Sinto medo de descobrir coisas sobre mim que não quero ver.' },
        { id: 3103, text: 'Às vezes penso em desistir da terapia mesmo achando que me ajuda.' },
        { id: 3104, text: 'Tenho receio de que mudar signifique perder quem eu sou.' },
        { id: 3105, text: 'Evito reflexões que possam me obrigar a agir diferente.' },
        { id: 3106, text: 'Às vezes saboto o processo sem perceber.' },
      ],
    },
    {
      id: 'therapeutic_dependence_defensive_transference',
      name: 'Dependência Terapêutica e Transferência Defensiva',
      icon: '💬',
      description: 'Reações transferenciais que se manifestam como dependência excessiva, idealização ou hostilidade em relação ao terapeuta.',
      interpretationLabels: {
        level_1: 'Relação terapêutica autônoma e colaborativa.',
        level_2: 'Leve dependência ou idealização do terapeuta.',
        level_3: 'Padrões transferenciais moderados (idealização/raiva).',
        level_4: 'Forte dependência ou reações transferenciais defensivas.',
      },
      questions: [
        { id: 3201, text: 'Fico ansioso(a) quando o terapeuta falta ou atrasa.' },
        { id: 3202, text: 'Sinto que preciso da aprovação do terapeuta para me sentir bem.' },
        { id: 3203, text: 'Fico ressentido(a) quando o terapeuta aponta algo que não gosto.' },
        { id: 3204, text: 'Tenho medo de que o terapeuta me rejeite se eu discordar.' },
        { id: 3205, text: 'Sinto raiva do terapeuta quando me sinto criticado(a).' },
        { id: 3206, text: 'Às vezes idealizo o terapeuta e depois me decepciono facilmente.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (0-4) reflete a intensidade da resistência ao processo psicoterápico. Escores mais altos indicam maior resistência.',
    ranges: [
      { 
        min: 0, 
        max: 0.9, 
        label: 'Baixa Resistência (Alta Aliança)', 
        description: 'Postura aberta, colaborativa e engajada no processo terapêutico. Boa capacidade de entrar em contato com emoções.',
        recommendations: [
          'Aproveitar a abertura para aprofundar temas centrais.',
          'Manter a aliança terapêutica como base segura.',
          'Explorar áreas de maior vulnerabilidade com segurança.'
        ]
      },
      { 
        min: 1, 
        max: 1.9, 
        label: 'Resistência Leve ou Situacional', 
        description: 'Hesitações ou defesas pontuais, geralmente relacionadas a temas sensíveis específicos. Pode haver leve racionalização.',
        recommendations: [
          'Validar a dificuldade em abordar certos temas.',
          'Identificar quais assuntos geram mais esquiva.',
          'Normalizar a ambivalência sobre a mudança.'
        ]
      },
      { 
        min: 2, 
        max: 2.9, 
        label: 'Resistência Moderada', 
        description: 'Padrão consistente de evitação, controle ou desconfiança que impacta o progresso. Risco de estagnação ou intelectualização excessiva.',
        recommendations: [
          'Abordar a resistência explicitamente na sessão ("O que te impede de falar sobre isso?").',
          'Trabalhar a confiança na relação terapêutica.',
          'Focar no "aqui e agora" da relação com o terapeuta para entender padrões defensivos.'
        ]
      },
      { 
        min: 3, 
        max: 4, 
        label: 'Alta Resistência', 
        description: 'Forte oposição, racionalização ou evitação que pode inviabilizar o processo terapêutico. Possível medo intenso de vulnerabilidade ou mudança.',
        recommendations: [
          'Priorizar a segurança e a redução da ansiedade no setting terapêutico.',
          'Não forçar confrontações precoces; respeitar as defesas.',
          'Investigar crenças sobre o perigo de se abrir ou mudar.',
          'Avaliar se o método terapêutico atual é o mais adequado.'
        ]
      },
    ],
  }
};
