

import { InventoryForm } from '../types';

export const IVM_INVENTORY: InventoryForm = {
  id: 'ivm',
  acronym: 'IVM',
  name: 'Inventário de Vontade e Motivação',
  objective: 'Avaliar o nível de energia vital, propósito, direção de esforço e persistência, refletindo o quanto o indivíduo sente-se movido por metas significativas e capaz de manter engajamento diante de desafios.',
  instructions: 'As frases abaixo descrevem atitudes e sentimentos relacionados à vontade e motivação pessoal.\nMarque o quanto cada uma representa você nas últimas semanas.',
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
      id: 'vital_energy_initiative',
      name: 'Energia Vital e Iniciativa',
      icon: '⚡',
      description: 'Avalia o impulso interno para agir, disposição física e mental para o cotidiano.',
      interpretationLabels: {
        level_1: 'Forte sensação de apatia e baixa energia.',
        level_2: 'Energia vital reduzida, com pouca iniciativa.',
        level_3: 'Bom nível de energia e disposição.',
        level_4: 'Elevada energia vital e iniciativa para agir.',
      },
      questions: [
        { id: 23001, text: 'Sinto-me energizado(a) para realizar minhas atividades diárias.' },
        { id: 23002, text: 'Tenho disposição para começar novas tarefas ou projetos.' },
        { id: 23003, text: 'Mesmo quando estou cansado(a), encontro forças para seguir.' },
        { id: 23004, text: 'Sinto uma vontade interna de crescer e me desenvolver.' },
        { id: 23005, text: 'Tenho uma energia constante que me ajuda a enfrentar desafios.' },
      ],
    },
    {
      id: 'direction_purpose',
      name: 'Direção e Propósito',
      icon: '🎯',
      description: 'Avalia o grau de clareza sobre objetivos, metas e sentido de realização pessoal.',
      interpretationLabels: {
        level_1: 'Forte sensação de falta de direção e propósito.',
        level_2: 'Metas pouco claras ou sem significado pessoal.',
        level_3: 'Bom senso de direção e metas claras.',
        level_4: 'Forte clareza de propósito e objetivos bem definidos.',
      },
      questions: [
        { id: 23101, text: 'Sei o que quero alcançar na vida.' },
        { id: 23102, text: 'Minhas metas refletem aquilo que considero importante.' },
        { id: 23103, text: 'Tenho uma visão clara de onde quero chegar.' },
        { id: 23104, text: 'Sinto que há um propósito guiando minhas decisões.' },
        { id: 23105, text: 'Minhas escolhas costumam ter coerência com o que valorizo.' },
      ],
    },
    {
      id: 'persistence_resilience',
      name: 'Persistência e Resiliência Motivacional',
      icon: '💪',
      description: 'Avalia a capacidade de manter esforço e foco diante de frustrações e obstáculos.',
      interpretationLabels: {
        level_1: 'Baixa persistência, com tendência a desistir facilmente.',
        level_2: 'Dificuldade em manter o esforço diante de obstáculos.',
        level_3: 'Boa capacidade de persistência e resiliência.',
        level_4: 'Elevada persistência e capacidade de superar frustrações.',
      },
      questions: [
        { id: 23201, text: 'Continuo tentando, mesmo quando as coisas não dão certo de imediato.' },
        { id: 23202, text: 'Encaro dificuldades como parte natural do processo de crescimento.' },
        { id: 23203, text: 'Não desisto facilmente dos meus objetivos.' },
        { id: 23204, text: 'Reajo de forma construtiva diante de contratempos.' },
        { id: 23205, text: 'Quando erro, tento aprender e recomeçar com mais clareza.' },
      ],
    },
    {
      id: 'autonomy_self_regulation',
      name: 'Autonomia e Autorregulação Motivacional',
      icon: '🔄',
      description: 'Avalia o equilíbrio entre autodireção, autodisciplina e motivação intrínseca.',
      interpretationLabels: {
        level_1: 'Baixa autonomia, com forte dependência de estímulos externos.',
        level_2: 'Dificuldade de autodisciplina e foco.',
        level_3: 'Boa capacidade de autorregulação e disciplina.',
        level_4: 'Elevada autonomia e motivação intrínseca.',
      },
      questions: [
        { id: 23301, text: 'Faço o que precisa ser feito, mesmo sem depender de estímulos externos.' },
        { id: 23302, text: 'Consigo manter o foco nas minhas metas sem me distrair com facilidade.' },
        { id: 23303, text: 'Sou capaz de organizar meu tempo e prioridades para avançar nos meus planos.' },
        { id: 23304, text: 'Sinto que minhas ações vêm de uma vontade genuína, não apenas de obrigação.' },
        { id: 23305, text: 'Tenho iniciativa para mudar o que precisa ser mudado em minha vida.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de motivação e vontade. Escores mais altos refletem maior disposição e clareza de metas.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Apatia ou Desmotivação', 
        description: 'Perda de sentido, inércia, baixa vitalidade e ausência de metas. Pode indicar necessidade de cuidar da saúde mental ou física.',
        recommendations: [
          'Investigar causas físicas ou emocionais da falta de energia.',
          'Estabelecer micro-metas diárias muito fáceis de cumprir.',
          'Reconectar-se com atividades que antes davam prazer.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Motivação Flutuante', 
        description: 'Falta de foco, energia instável ou desistência fácil diante de obstáculos. A vontade existe, mas a disciplina falha.',
        recommendations: [
          'Clarificar o "porquê" por trás dos objetivos.',
          'Criar um ambiente que favoreça a ação (reduzir distrações).',
          'Trabalhar a tolerância à frustração.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Motivação Funcional', 
        description: 'Boa disposição e clareza de metas, com leves oscilações. O indivíduo consegue manter a rotina e buscar seus objetivos.',
        recommendations: [
          'Desafiar-se com metas um pouco mais ambiciosas.',
          'Manter o equilíbrio entre esforço e descanso para evitar burnout.',
          'Celebrar o progresso consistente.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Determinação e Vontade', 
        description: 'Energia estável, metas claras e persistência consistente. Forte senso de agência e capacidade de realização.',
        recommendations: [
          'Liderar projetos ou inspirar outros.',
          'Focar em legado e impacto de longo prazo.',
          'Garantir que a alta motivação não vire obsessão ou rigidez.'
        ]
      },
    ],
  },
};
