
import { InventoryForm } from '../types';

export const IHS_INVENTORY: InventoryForm = {
  id: 'ihs',
  acronym: 'IHS',
  name: 'Inventário de Habilidades Sociais Clínicas',
  objective: 'Avaliar competências sociais centrais para interação interpessoal funcional: comunicação (assertividade e clareza), empatia e escuta, iniciação e manutenção de relações, gestão de conflitos e estabelecimento de limites, cooperação e trabalho em grupo.',
  instructions: 'Abaixo estão frases sobre como você costuma se comportar e interagir com outras pessoas. Leia cada frase e assinale a opção que melhor representa como você geralmente age nas últimas 4 semanas.',
  scoreOrientation: 'higher_is_better',
  responseScale: [
    { value: 0, label: 'Nunca ou quase nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre / Sempre' },
  ],
  domains: [
    {
      id: 'assertive_communication',
      name: 'Comunicação Assertiva e Clareza',
      icon: '💬',
      description: 'Habilidade de expressar pensamentos, sentimentos e necessidades de forma direta e respeitosa, defendendo os próprios direitos sem violar os dos outros.',
      interpretationLabels: {
        level_1: 'Comunicação passiva, com dificuldade de expressão.',
        level_2: 'Assertividade inconsistente, com hesitação.',
        level_3: 'Boa capacidade de comunicação assertiva.',
        level_4: 'Elevada assertividade, com comunicação clara e segura.',
      },
      questions: [
        { id: 27001, text: 'Consigo expressar minhas opiniões de forma clara, mesmo quando discordo de alguém.' },
        { id: 27002, text: 'Tenho dificuldade em dizer "não" a pedidos que não quero ou não posso atender.', isReversed: true },
        { id: 27003, text: 'Sei como pedir favores ou fazer solicitações de forma direta e educada.' },
        { id: 27004, text: 'Quando algo me incomoda, consigo comunicar meu desconforto de maneira construtiva.' },
        { id: 27005, text: 'Evito dar minha opinião para não gerar conflitos.', isReversed: true },
      ],
    },
    {
      id: 'empathy_listening',
      name: 'Empatia e Escuta Ativa',
      icon: '👂',
      description: 'Capacidade de ouvir atentamente, compreender a perspectiva do outro e demonstrar interesse genuíno.',
      interpretationLabels: {
        level_1: 'Baixa capacidade de escuta e compreensão do outro.',
        level_2: 'Escuta inconsistente, com dificuldade em se conectar.',
        level_3: 'Boa capacidade de escuta empática.',
        level_4: 'Elevada empatia e habilidade de escuta ativa.',
      },
      questions: [
        { id: 27006, text: 'Procuro entender o ponto de vista da outra pessoa antes de responder.' },
        { id: 27007, text: 'Demonstro interesse genuíno pelo que os outros estão dizendo.' },
        { id: 27008, text: 'Enquanto alguém fala, costumo pensar no que vou dizer em seguida.', isReversed: true },
        { id: 27009, text: 'Consigo perceber e validar os sentimentos de outras pessoas.' },
        { id: 27010, text: 'Tenho dificuldade em me concentrar totalmente no que o outro está falando.', isReversed: true },
      ],
    },
    {
      id: 'relationship_initiation_maintenance',
      name: 'Iniciação e Manutenção de Relações',
      icon: '🤝',
      description: 'Habilidade de iniciar conversas, fazer novas amizades e manter vínculos sociais de forma saudável.',
      interpretationLabels: {
        level_1: 'Forte dificuldade em iniciar e manter relações.',
        level_2: 'Iniciativa social inconsistente ou com ansiedade.',
        level_3: 'Boa capacidade de se conectar e manter amizades.',
        level_4: 'Elevada competência para construir e nutrir vínculos.',
      },
      questions: [
        { id: 27011, text: 'Sinto-me à vontade para iniciar conversas com pessoas que não conheço.' },
        { id: 27012, text: 'Tenho dificuldade em manter contato com amigos e conhecidos.', isReversed: true },
        { id: 27013, text: 'Sei como demonstrar interesse para construir uma nova amizade.' },
        { id: 27014, text: 'Evito eventos sociais onde não conheço ninguém.', isReversed: true },
        { id: 27015, text: 'Consigo manter conversas fluindo de forma natural.' },
      ],
    },
    {
      id: 'conflict_management_negotiation',
      name: 'Gestão de Conflitos e Negociação',
      icon: '⚖️',
      description: 'Capacidade de lidar com desacordos de forma construtiva, negociar soluções e defender os próprios limites.',
      interpretationLabels: {
        level_1: 'Estilo evitativo ou agressivo em conflitos.',
        level_2: 'Dificuldade em gerenciar desacordos de forma equilibrada.',
        level_3: 'Boa capacidade de negociação e resolução de conflitos.',
        level_4: 'Elevada habilidade para mediar e resolver conflitos.',
      },
      questions: [
        { id: 27016, text: 'Quando surge um desacordo, busco uma solução que seja boa para ambos os lados.' },
        { id: 27017, text: 'Consigo manter a calma e o respeito durante uma discussão.' },
        { id: 27018, text: 'Costumo ceder facilmente para evitar confrontos.', isReversed: true },
        { id: 27019, text: 'Sei como defender meus limites de forma firme, mas respeitosa.' },
        { id: 27020, text: 'Lido bem com críticas construtivas sem me sentir atacado(a).' },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'A pontuação é a soma total das respostas (0-80), após inverter os itens marcados. Pontuações mais altas indicam melhores habilidades sociais.',
    ranges: [
      { min: 60, max: 80, label: 'Habilidades Sociais Elevadas', description: 'Comunicação assertiva, boa empatia e gestão de conflitos eficaz.' },
      { min: 40, max: 59, label: 'Habilidades Sociais Adequadas', description: 'Bom funcionamento na maioria das situações, com áreas a aprimorar.' },
      { min: 20, max: 39, label: 'Dificuldades Sociais Moderadas', description: 'Insegurança, passividade ou reatividade em interações sociais.' },
      { min: 0, max: 19, label: 'Déficit Significativo em Habilidades Sociais', description: 'Dificuldades acentuadas que podem levar ao isolamento ou conflitos recorrentes.' }
    ],
  }
};