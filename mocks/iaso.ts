
import { InventoryForm } from '../types';

export const IASO_INVENTORY: InventoryForm = {
  id: 'iaso',
  acronym: 'IASO',
  name: 'Inventário de Assertividade e Sociabilidade',
  objective: 'Avaliar o grau de assertividade, abertura social e competência interpessoal do indivíduo, incluindo sua capacidade de expressar sentimentos, defender limites, iniciar e manter interações sociais de forma equilibrada e respeitosa.',
  instructions: 'Leia atentamente cada afirmação abaixo.\nMarque o quanto ela descreve você na maioria das situações, utilizando a escala:',
  responseScale: [
    { value: 0, label: 'Nunca ou quase nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre ou sempre' },
  ],
  domains: [
    {
      id: 'assertive_expression',
      name: 'Expressão Assertiva e Comunicação Clara',
      icon: '💬',
      description: 'Habilidade de comunicar pensamentos, sentimentos e necessidades de forma direta, honesta e respeitosa.',
      interpretationLabels: {
        level_1: 'Comunicação passiva, com dificuldade em se expressar.',
        level_2: 'Expressão inconsistente, com hesitação em se posicionar.',
        level_3: 'Boa capacidade de comunicação assertiva na maioria das situações.',
        level_4: 'Elevada assertividade, com comunicação clara e segura.',
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
      name: 'Autoconfiança e Postura Interpessoal',
      icon: '🧍',
      description: 'Nível de segurança e conforto em situações sociais, refletindo a confiança nas próprias opiniões e capacidades.',
      interpretationLabels: {
        level_1: 'Baixa autoconfiança, com insegurança em interações sociais.',
        level_2: 'Confiança situacional, com desconforto em novos contextos.',
        level_3: 'Boa autoconfiança na maioria das situações interpessoais.',
        level_4: 'Postura segura e confiante, com facilidade em se posicionar.',
      },
      questions: [
        { id: 14101, text: 'Sinto-me à vontade em situações sociais, mesmo com pessoas que não conheço bem.' },
        { id: 14102, text: 'Tenho facilidade em iniciar conversas com desconhecidos.' },
        { id: 14103, text: 'Costumo me posicionar com tranquilidade diante de pessoas com autoridade.' },
        { id: 14104, text: 'Acredito que minhas opiniões têm valor, mesmo quando são diferentes das demais.' },
        { id: 14105, text: 'Sinto-me confiante ao expressar minhas necessidades em público ou em grupo.' },
      ],
    },
    {
      id: 'sociability_openness',
      name: 'Sociabilidade e Abertura ao Contato',
      icon: '🫂',
      description: 'Disposição para iniciar interações, conhecer novas pessoas e participar de atividades sociais e em grupo.',
      interpretationLabels: {
        level_1: 'Tendência ao isolamento, com baixa iniciativa para o contato social.',
        level_2: 'Abertura social seletiva, preferindo ambientes familiares.',
        level_3: 'Boa disposição para interagir e participar de atividades sociais.',
        level_4: 'Elevada sociabilidade, com prazer em conhecer novas pessoas.',
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
      name: 'Gestão de Conflitos e Limites Interpessoais',
      icon: '⚖️',
      description: 'Capacidade de lidar com desacordos e críticas de forma construtiva, defendendo os próprios limites sem agressividade.',
      interpretationLabels: {
        level_1: 'Estilo de evitação de conflitos ou reação agressiva.',
        level_2: 'Dificuldade em lidar com críticas e desacordos de forma equilibrada.',
        level_3: 'Boa capacidade de gerenciar conflitos e defender limites.',
        level_4: 'Elevada habilidade para resolver conflitos de forma calma e construtiva.',
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
    type: 'sum',
    description: 'A pontuação é a soma total das respostas (0-80). Pontuações mais altas indicam melhor assertividade e sociabilidade.',
    ranges: [
      { min: 60, max: 80, label: 'Alta assertividade e sociabilidade', description: 'Boa autoconfiança, comunicação equilibrada e empatia.' },
      { min: 40, max: 59, label: 'Nível funcional', description: 'Assertividade adequada, com pequenas dificuldades situacionais.' },
      { min: 20, max: 39, label: 'Baixa assertividade ou retraimento', description: 'Tendência a evitação, submissão ou dificuldade de autoexpressão.' },
      { min: 0, max: 19, label: 'Dificuldade significativa', description: 'Padrões de comunicação passiva, agressiva ou evitativa recorrentes.' }
    ],
  }
};
