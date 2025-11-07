
import { InventoryForm } from '../types';

export const IVM_INVENTORY: InventoryForm = {
  id: 'ivm',
  acronym: 'IVM',
  name: 'Inventário de Vontade e Motivação',
  objective: 'Avaliar o nível de energia vital, propósito, direção de esforço e persistência, refletindo o quanto o indivíduo sente-se movido por metas significativas e capaz de manter engajamento diante de desafios.',
  instructions: 'As frases abaixo descrevem atitudes e sentimentos relacionados à vontade e motivação pessoal.\nMarque o quanto cada uma representa você nas últimas semanas.',
  responseScale: [
    { value: 0, label: 'Nunca ou quase nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre ou sempre' },
  ],
  domains: [
    {
      id: 'vital_energy_initiative',
      name: 'Energia Vital e Iniciativa',
      icon: '⚡',
      description: 'Avalia o impulso interno para agir, disposição física e mental para o cotidiano.',
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
    type: 'sum',
    description: 'A pontuação total (0-80) indica o nível de motivação e vontade. Escores mais altos refletem maior disposição e clareza de metas.',
    subScoresDescription: 'A média por domínio pode ser calculada para uma análise mais detalhada.',
    ranges: [
      { min: 65, max: 80, label: 'Alta Motivação e Direção de Vontade', description: 'Energia estável, metas claras e persistência consistente.' },
      { min: 45, max: 64, label: 'Motivação Funcional', description: 'Boa disposição e clareza de metas, com leves oscilações.' },
      { min: 25, max: 44, label: 'Motivação Reduzida', description: 'Falta de foco, energia instável ou desistência fácil.' },
      { min: 0, max: 24, label: 'Desmotivação ou Apatia', description: 'Perda de sentido, inércia, baixa vitalidade e ausência de metas.' },
    ],
  },
};
