
import { InventoryForm } from '../types';

export const IASO_INVENTORY: InventoryForm = {
  id: 'iaso',
  acronym: 'IASO',
  name: 'Inventário de Assertividade e Sociabilidade',
  objective: 'Avaliar o grau de assertividade, abertura social e competência interpessoal, focando na capacidade de expressar sentimentos, defender limites e interagir de forma equilibrada.',
  instructions: 'Leia atentamente cada afirmação e marque o quanto ela descreve você na maioria das situações, utilizando a escala de 1 a 7.',
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
      id: 'assertive_expression',
      name: 'Expressão Assertiva',
      icon: '💬',
      description: 'Habilidade de comunicar pensamentos, sentimentos e necessidades de forma direta e respeitosa.',
      interpretationLabels: {
        level_1: 'Comunicação passiva ou agressiva.',
        level_2: 'Dificuldade em se posicionar.',
        level_3: 'Boa assertividade.',
        level_4: 'Comunicação clara e firme.',
      },
      questions: [
        { id: 14001, text: 'Consigo dizer o que penso mesmo quando os outros discordam.' },
        { id: 14002, text: 'Expresso meus sentimentos sem me sentir culpado(a) ou envergonhado(a).' },
        { id: 14003, text: 'Sei dizer “não” quando algo vai contra meus limites ou valores.' },
        { id: 14004, text: 'Quando preciso pedir algo, faço isso de forma direta e educada.' },
        { id: 14005, text: 'Consigo discordar sem ser agressivo(a) ou evasivo(a).' },
      ],
    },
    {
      id: 'self_confidence',
      name: 'Autoconfiança Social',
      icon: '🧍',
      description: 'Nível de segurança e conforto em situações sociais e confiança nas próprias opiniões.',
      interpretationLabels: {
        level_1: 'Insegurança social significativa.',
        level_2: 'Confiança situacional.',
        level_3: 'Boa segurança interpessoal.',
        level_4: 'Postura confiante e segura.',
      },
      questions: [
        { id: 14101, text: 'Sinto-me à vontade em situações sociais, mesmo com pessoas que não conheço bem.' },
        { id: 14102, text: 'Tenho facilidade em iniciar conversas com desconhecidos.' },
        { id: 14103, text: 'Costumo me posicionar com tranquilidade diante de pessoas com autoridade.' },
        { id: 14104, text: 'Acredito que minhas opiniões têm valor.' },
        { id: 14105, text: 'Sinto-me confiante ao expressar minhas necessidades em público.' },
      ],
    },
    {
      id: 'sociability_openness',
      name: 'Sociabilidade e Abertura',
      icon: '🫂',
      description: 'Disposição para iniciar interações, conhecer novas pessoas e participar de atividades sociais.',
      interpretationLabels: {
        level_1: 'Tendência ao isolamento.',
        level_2: 'Abertura social restrita.',
        level_3: 'Boa sociabilidade.',
        level_4: 'Alta abertura e iniciativa social.',
      },
      questions: [
        { id: 14201, text: 'Gosto de conhecer pessoas novas e ampliar meu círculo social.' },
        { id: 14202, text: 'Tenho prazer em participar de atividades em grupo.' },
        { id: 14203, text: 'Costumo demonstrar interesse genuíno pelas experiências dos outros.' },
        { id: 14204, text: 'Sinto-me confortável em ambientes sociais movimentados.' },
        { id: 14205, text: 'Busco manter contato regular com amigos e familiares.' },
      ],
    },
    {
      id: 'conflict_management',
      name: 'Gestão de Conflitos',
      icon: '⚖️',
      description: 'Capacidade de lidar com desacordos e críticas de forma construtiva e não reativa.',
      interpretationLabels: {
        level_1: 'Evitação ou reatividade em conflitos.',
        level_2: 'Dificuldade em gerenciar desacordos.',
        level_3: 'Boa gestão de conflitos.',
        level_4: 'Resolução construtiva e madura.',
      },
      questions: [
        { id: 14301, text: 'Procuro resolver conflitos de forma calma e racional.' },
        { id: 14302, text: 'Evito acumular ressentimentos e busco esclarecer mal-entendidos.' },
        { id: 14303, text: 'Consigo defender meus direitos sem desrespeitar o outro.' },
        { id: 14304, text: 'Aceito críticas sem reagir de forma defensiva ou agressiva.' },
        { id: 14305, text: 'Mantenho o autocontrole mesmo em discussões intensas.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de competência social e assertividade. Escores altos sugerem relações mais equilibradas e satisfatórias.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Inibição ou Passividade', 
        description: 'Dificuldade em expressar necessidades ou defender direitos. Pode haver tendência a concordar com tudo para evitar conflito ou, inversamente, reagir com agressividade defensiva.',
        recommendations: [
          'Treino de Assertividade: aprender a diferença entre passivo, agressivo e assertivo.',
          'Começar a expressar opiniões pequenas em ambientes seguros.',
          'Validar que suas necessidades são tão importantes quanto as dos outros.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Assertividade em Desenvolvimento', 
        description: 'Consegue se posicionar em algumas situações, mas pode travar diante de autoridade ou crítica. A sociabilidade pode depender do nível de familiaridade com o grupo.',
        recommendations: [
          'Praticar o "Não" sem justificar excessivamente.',
          'Expor-se gradualmente a situações sociais novas.',
          'Refletir sobre o medo do julgamento alheio.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Boa Competência Social', 
        description: 'Comunicação clara e respeitosa. O indivíduo consegue estabelecer limites e interagir bem na maioria dos contextos.',
        recommendations: [
          'Refinar a habilidade de negociação em conflitos complexos.',
          'Ampliar a rede de contatos profissionais ou pessoais.',
          'Manter a autenticidade nas interações.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Assertividade e Liderança', 
        description: 'Excelente habilidade de comunicação e influência. Sente-se seguro socialmente e resolve conflitos de forma construtiva.',
        recommendations: [
          'Assumir papéis de liderança ou mediação.',
          'Ajudar outros a desenvolverem suas habilidades sociais.',
          'Utilizar a influência para promover ambientes colaborativos.'
        ]
      },
    ],
  }
};
