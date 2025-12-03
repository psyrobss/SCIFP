
import { InventoryForm } from '../types';

export const IAR_INVENTORY: InventoryForm = {
  id: 'iar',
  acronym: 'IAR',
  name: 'Inventário de Ajuste Relacional (Casal/Intimidade)',
  objective: 'Avaliar o funcionamento afetivo e interpessoal em relações íntimas, incluindo comunicação, empatia, intimidade emocional, satisfação e manejo de conflitos.',
  instructions: 'Leia cada afirmação e indique o quanto ela descreve seu comportamento e sentimentos habituais no relacionamento íntimo, utilizando a escala de 1 a 7.',
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
      id: 'communication_emotional_expression',
      name: 'Comunicação e Expressão Emocional',
      icon: '💬',
      description: 'Habilidade de expressar sentimentos, necessidades e opiniões de forma clara e respeitosa, e de ouvir o parceiro(a) sem julgamento.',
      interpretationLabels: {
        level_1: 'Comunicação bloqueada ou reativa.',
        level_2: 'Dificuldade de expressão clara.',
        level_3: 'Boa fluidez comunicativa.',
        level_4: 'Comunicação profunda e segura.',
      },
      questions: [
        { id: 33001, text: 'Consigo expressar sentimentos sem medo de magoar meu parceiro(a).' },
        { id: 33002, text: 'Sinto-me à vontade para discutir necessidades emocionais.' },
        { id: 33003, text: 'Evito falar sobre problemas para não criar conflito.', isReversed: true },
        { id: 33004, text: 'Consigo ouvir meu parceiro(a) sem julgar suas emoções.' },
        { id: 33005, text: 'Frequentemente compartilho pensamentos íntimos e preocupações.' },
        { id: 33006, text: 'Posso pedir ajuda ou apoio emocional quando preciso.' },
        { id: 33007, text: 'Minhas opiniões são respeitadas dentro do relacionamento.' },
      ],
    },
    {
      id: 'intimacy_connection',
      name: 'Intimidade e Conexão',
      icon: '💞',
      description: 'Capacidade de compartilhar vulnerabilidades, manter um vínculo emocional seguro e sentir proximidade afetiva.',
      interpretationLabels: {
        level_1: 'Distanciamento afetivo.',
        level_2: 'Conexão oscilante.',
        level_3: 'Vínculo seguro e próximo.',
        level_4: 'Intimidade profunda e nutritiva.',
      },
      questions: [
        { id: 33008, text: 'Sinto que posso me aproximar emocionalmente do meu parceiro(a).' },
        { id: 33009, text: 'Tenho momentos de proximidade e vínculo que me fazem sentir seguro(a).' },
        { id: 33010, text: 'Às vezes me distancio por medo de perder autonomia.', isReversed: true },
        { id: 33011, text: 'Consigo compartilhar vulnerabilidades sem medo de rejeição.' },
        { id: 33012, text: 'Meu parceiro(a) e eu temos um vínculo emocional satisfatório.' },
        { id: 33013, text: 'Sinto que estamos conectados mesmo quando fisicamente separados.' },
        { id: 33014, text: 'A intimidade emocional aumenta a confiança no relacionamento.' },
      ],
    },
    {
      id: 'empathy_understanding',
      name: 'Empatia e Compreensão',
      icon: '🤝',
      description: 'Habilidade de perceber as necessidades do outro, compreender seus sentimentos e equilibrar as próprias necessidades com as do parceiro(a).',
      interpretationLabels: {
        level_1: 'Dificuldade de compreensão mútua.',
        level_2: 'Empatia seletiva ou intermitente.',
        level_3: 'Boa sintonia e compreensão.',
        level_4: 'Alta ressonância empática.',
      },
      questions: [
        { id: 33015, text: 'Consigo compreender os sentimentos do meu parceiro(a) sem me confundir com os meus.' },
        { id: 33016, text: 'Tento perceber as necessidades do outro mesmo quando diferentes das minhas.' },
        { id: 33017, text: 'Fico frustrado(a) facilmente quando meu parceiro(a) não entende meus sentimentos.', isReversed: true },
        { id: 33018, text: 'Consigo reconhecer quando estou errado(a) e pedir desculpas.' },
        { id: 33019, text: 'Frequentemente consigo apoiar meu parceiro(a) em momentos difíceis.' },
        { id: 33020, text: 'Sinto empatia mesmo quando discordo do comportamento do outro.' },
        { id: 33021, text: 'Posso equilibrar minhas necessidades e as do parceiro(a).' },
      ],
    },
    {
      id: 'conflict_management_satisfaction',
      name: 'Gestão de Conflitos e Satisfação',
      icon: '⚖️',
      description: 'Capacidade de resolver desacordos de forma construtiva, negociar soluções e manter um nível de satisfação emocional geral na relação.',
      interpretationLabels: {
        level_1: 'Conflitos destrutivos ou não resolvidos.',
        level_2: 'Gestão de conflitos tensa.',
        level_3: 'Resolução funcional de problemas.',
        level_4: 'Crescimento através das divergências.',
      },
      questions: [
        { id: 33022, text: 'Conflitos são resolvidos de forma construtiva na relação.' },
        { id: 33023, text: 'Evito discussões desnecessárias para manter a harmonia.' },
        { id: 33024, text: 'Sinto satisfação com a forma como lidamos com problemas juntos.' },
        { id: 33025, text: 'Tenho dificuldade em negociar compromissos importantes.', isReversed: true },
        { id: 33026, text: 'Sinto que meu relacionamento é gratificante emocionalmente.' },
        { id: 33027, text: 'Posso expressar descontentamento sem prejudicar a relação.' },
        { id: 33028, text: 'Frequentemente conseguimos encontrar soluções que satisfaçam ambos.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica a qualidade do ajuste relacional. Escores mais altos sugerem maior satisfação, segurança e competência na relação.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Desafios no Vínculo', 
        description: 'A relação pode estar passando por um momento de tensão, desconexão ou conflito não resolvido. Há necessidade de restaurar a segurança e a comunicação.',
        recommendations: [
          'Estabelecer momentos de conversa sem distrações (sem telas).',
          'Praticar a "escuta reflexiva": repetir o que o outro disse antes de responder.',
          'Focar em expressar necessidades ("eu preciso") em vez de críticas ("você nunca").'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Ajuste em Desenvolvimento', 
        description: 'Existem áreas de funcionamento e carinho, mas também pontos de atrito ou distanciamento. A comunicação pode falhar em momentos de estresse.',
        recommendations: [
          'Identificar os "gatilhos" que transformam conversas em discussões.',
          'Aumentar a proporção de interações positivas (elogios, agradecimentos) para negativas.',
          'Negociar tempo de qualidade a dois.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Relacionamento Funcional', 
        description: 'Boa base de amizade e cooperação. O casal consegue resolver a maioria dos problemas e mantém um nível satisfatório de intimidade.',
        recommendations: [
          'Aprofundar a intimidade compartilhando sonhos e medos, não apenas logística.',
          'Manter a curiosidade sobre o mundo interno do parceiro.',
          'Celebrar as conquistas conjuntas.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Sintonia e Satisfação', 
        description: 'Relacionamento nutritivo, seguro e resiliente. Há um forte senso de "nós", com respeito à individualidade de cada um.',
        recommendations: [
          'Proteger o relacionamento contra a rotina excessiva.',
          'Servir como modelo de relacionamento saudável para outros (ex: filhos).',
          'Usar a segurança do vínculo para impulsionar o crescimento individual de ambos.'
        ]
      },
    ],
  },
};
