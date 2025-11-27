
import { InventoryForm } from '../types';

export const ISSM_INVENTORY: InventoryForm = {
  id: 'issm',
  acronym: 'ISSM',
  name: 'Inventário de Sono, Saúde e Motivação',
  objective: 'Avaliar a qualidade do sono, o equilíbrio físico e o nível de motivação geral do indivíduo, considerando aspectos fisiológicos, energéticos e psicocomportamentais. O instrumento permite identificar padrões de desequilíbrio sono-vigília, fadiga mental e queda motivacional, frequentes em condições de estresse, depressão ou desregulação funcional.',
  instructions: 'Abaixo estão afirmações sobre seu estado físico, hábitos e motivação pessoal. Responda considerando as últimas quatro semanas, utilizando a escala:',
  scoreOrientation: 'higher_is_better',
  responseScale: [
    { value: 0, label: 'Nunca ou quase nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre ou sempre' },
  ],
  domains: [
    {
      id: 'sleep_quality',
      name: 'Qualidade e Regulação do Sono',
      icon: '😴',
      description: 'Avalia a percepção sobre a qualidade do sono, incluindo dificuldades para adormecer, despertares e a sensação de descanso ao acordar.',
      interpretationLabels: {
        level_1: 'Forte dificuldade na regulação do sono.',
        level_2: 'Dificuldades moderadas de sono, com impacto no descanso.',
        level_3: 'Qualidade do sono razoável, com algumas dificuldades.',
        level_4: 'Boa qualidade e regulação do sono.',
      },
      questions: [
        { id: 16001, text: 'Tenho dificuldade para adormecer ou desperto várias vezes à noite.', isReversed: true },
        { id: 16002, text: 'Acordo com sensação de cansaço, mesmo após várias horas de sono.', isReversed: true },
        { id: 16003, text: 'Tenho horários irregulares para dormir e acordar.', isReversed: true },
        { id: 16004, text: 'Meu sono costuma ser leve ou interrompido por preocupações.', isReversed: true },
        { id: 16005, text: 'Sinto que meu sono realmente me recupera física e mentalmente.' },
      ],
    },
    {
      id: 'physical_health',
      name: 'Saúde Física e Energia Vital',
      icon: '💪',
      description: 'Mede o nível de energia, disposição física e a presença de hábitos saudáveis que sustentam o bem-estar corporal.',
      interpretationLabels: {
        level_1: 'Forte sensação de fadiga e baixa energia vital.',
        level_2: 'Nível de energia moderado, com cansaço frequente.',
        level_3: 'Boa disposição física, com alguma oscilação.',
        level_4: 'Elevado nível de energia e bem-estar físico.',
      },
      questions: [
        { id: 16101, text: 'Tenho energia suficiente para enfrentar as atividades do dia.' },
        { id: 16102, text: 'Sinto cansaço ou lentidão física sem causa aparente.', isReversed: true },
        { id: 16103, text: 'Tenho sentido dores musculares, tensão ou fadiga constante.', isReversed: true },
        { id: 16104, text: 'Mantenho hábitos saudáveis de alimentação, hidratação e movimento corporal.' },
        { id: 16105, text: 'Sinto que minha energia diminui rapidamente ao longo do dia.', isReversed: true },
      ],
    },
    {
      id: 'motivation_initiative',
      name: 'Motivação e Iniciativa',
      icon: '🔥',
      description: 'Avalia o nível de motivação, prazer e persistência para realizar tarefas cotidianas e perseguir objetivos pessoais.',
      interpretationLabels: {
        level_1: 'Forte desmotivação e dificuldade de iniciativa.',
        level_2: 'Motivação moderada, com procrastinação e perda de prazer.',
        level_3: 'Boa motivação e capacidade de persistência.',
        level_4: 'Elevado nível de motivação, iniciativa e prazer nas atividades.',
      },
      questions: [
        { id: 16201, text: 'Tenho me sentido motivado(a) para realizar minhas tarefas cotidianas.' },
        { id: 16202, text: 'Procrastino com frequência, mesmo em atividades importantes.', isReversed: true },
        { id: 16203, text: 'Sinto prazer e envolvimento nas coisas que faço.' },
        { id: 16204, text: 'Tenho dificuldade para começar atividades novas, mesmo que desejadas.', isReversed: true },
        { id: 16205, text: 'Mantenho meu foco e persistência mesmo quando surgem obstáculos.' },
      ],
    },
    {
      id: 'circadian_rhythm',
      name: 'Ritmo Circadiano e Regulação de Hábitos',
      icon: '🌤️',
      description: 'Mede a estabilidade da rotina diária e a consciência sobre como o ritmo corporal afeta o humor e o desempenho.',
      interpretationLabels: {
        level_1: 'Forte desregulação do ritmo circadiano e hábitos.',
        level_2: 'Rotina moderadamente instável, com variações de energia.',
        level_3: 'Boa estabilidade da rotina diária.',
        level_4: 'Excelente regulação de hábitos e consciência do ritmo corporal.',
      },
      questions: [
        { id: 16301, text: 'Mantenho uma rotina diária estável (alimentação, descanso, lazer).' },
        { id: 16302, text: 'Tenho percebido variações acentuadas de energia ao longo do dia.', isReversed: true },
        { id: 16303, text: 'Me sinto mais produtivo(a) em horários muito específicos do dia.' },
        { id: 16304, text: 'Tenho consciência de como o ritmo do meu corpo afeta meu humor e desempenho.' },
        { id: 16305, text: 'Tenho conseguido equilibrar períodos de esforço com momentos de recuperação.' },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'A pontuação é a soma total das respostas (0-80), após inverter os itens marcados. Pontuações mais altas indicam melhor regulação fisiológica e motivacional.',
    ranges: [
      { min: 60, max: 80, label: 'Equilíbrio fisiológico e motivacional elevado', description: 'Indica boa regulação corporal e energética.' },
      { min: 40, max: 59, label: 'Funcionamento saudável com pequenas disfunções', description: 'Leve oscilação entre cansaço e recuperação adequada.' },
      { min: 20, max: 39, label: 'Desregulação moderada', description: 'Dificuldades consistentes no sono, energia ou motivação.' },
      { min: 0, max: 19, label: 'Desgaste acentuado', description: 'Indícios de exaustão, desmotivação persistente e possível disfunção fisiológica.' }
    ],
  }
};
