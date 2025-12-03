
import { InventoryForm } from '../types';

export const IFAA_INVENTORY: InventoryForm = {
  id: 'ifaa',
  acronym: 'IFAA',
  name: 'Inventário de Fluxo e Absorção em Atividades',
  objective: 'Avaliar a frequência e intensidade de estados de "Flow" (fluxo): engajamento total, foco profundo e prazer intrínseco na realização de atividades.',
  instructions: 'Pense nas atividades que você realiza (trabalho, hobbies, esportes). Indique com que frequência você vivencia as experiências descritas, usando a escala de 1 a 7.',
  scoreOrientation: 'higher_is_better',
  responseScale: [
    { value: 1, label: 'Nunca' },
    { value: 2, label: 'Raramente' },
    { value: 3, label: 'Às vezes' },
    { value: 4, label: 'Neutro / Misto' },
    { value: 5, label: 'Frequentemente' },
    { value: 6, label: 'Muito Frequentemente' },
    { value: 7, label: 'Sempre' },
  ],
  domains: [
    {
      id: 'concentration_immersion',
      name: 'Concentração e Imersão',
      icon: '⏱',
      description: 'Capacidade de foco intenso, perda da noção do tempo e fusão entre ação e consciência.',
      interpretationLabels: {
        level_1: 'Dificuldade de foco/imersão.',
        level_2: 'Imersão superficial.',
        level_3: 'Boa concentração.',
        level_4: 'Estado de fluxo profundo.',
      },
      questions: [
        { id: 64001, text: 'Quando estou em uma atividade que gosto, perco a noção do tempo.' },
        { id: 64002, text: 'Sinto que toda minha atenção está direcionada à tarefa que realizo.' },
        { id: 64003, text: 'É difícil me distrair durante atividades que considero desafiadoras.' },
        { id: 64004, text: 'Frequentemente me sinto disperso(a) ou desatento(a).', isReversed: true },
        { id: 64005, text: 'Experimento sensação de "estar dentro da atividade" sem esforço consciente.' },
        { id: 64006, text: 'Quando me envolvo em uma tarefa, esqueço preocupações externas.' },
        { id: 64007, text: 'A concentração que alcanço nas atividades é superficial.', isReversed: true },
      ],
    },
    {
      id: 'challenge_competence',
      name: 'Equilíbrio Desafio-Habilidade',
      icon: '⚡',
      description: 'Percepção de que as habilidades pessoais são adequadas para enfrentar os desafios da tarefa.',
      interpretationLabels: {
        level_1: 'Ansiedade (desafio > habilidade) ou Tédio (habilidade > desafio).',
        level_2: 'Desequilíbrio frequente.',
        level_3: 'Bom ajuste de desafio.',
        level_4: 'Equilíbrio ótimo (canal de fluxo).',
      },
      questions: [
        { id: 64008, text: 'Sinto que minhas habilidades são suficientes para lidar com desafios da atividade.' },
        { id: 64009, text: 'Gosto de atividades que exigem esforço, mas que posso realizar com competência.' },
        { id: 64010, text: 'Quando a tarefa é muito difícil, sinto-me desmotivado(a).', isReversed: true },
        { id: 64011, text: 'A dificuldade da atividade me motiva a melhorar meu desempenho.' },
        { id: 64012, text: 'Frequentemente me sinto incapaz de acompanhar atividades desafiadoras.', isReversed: true },
        { id: 64013, text: 'Sinto satisfação ao superar obstáculos durante a atividade.' },
        { id: 64014, text: 'Escolho atividades que se ajustam bem às minhas capacidades.' },
      ],
    },
    {
      id: 'absorption_pleasure',
      name: 'Prazer Autotélico',
      icon: '🎨',
      description: 'Realização da atividade pelo prazer inerente a ela, não apenas pelo resultado final.',
      interpretationLabels: {
        level_1: 'Atividade vista como obrigação.',
        level_2: 'Prazer moderado.',
        level_3: 'Satisfação na ação.',
        level_4: 'Êxtase e motivação intrínseca.',
      },
      questions: [
        { id: 64015, text: 'Sinto prazer intenso enquanto realizo minhas atividades favoritas.' },
        { id: 64016, text: 'A realização da tarefa me deixa energizado(a) e motivado(a).' },
        { id: 64017, text: 'Frequentemente perco a noção de esforço ao me concentrar plenamente.' },
        { id: 64018, text: 'Realizar atividades prazerosas costuma me entediar.', isReversed: true },
        { id: 64019, text: 'Sinto-me plenamente envolvido(a) e satisfeito(a) durante a atividade.' },
        { id: 64020, text: 'Experiencio alegria e entusiasmo ao completar tarefas significativas.' },
        { id: 64021, text: 'As atividades que realizo raramente me trazem prazer genuíno.', isReversed: true },
      ],
    },
    {
      id: 'autonomy_control',
      name: 'Senso de Controle e Autonomia',
      icon: '🌐',
      description: 'Sensação de exercer controle sobre as ações e o desenrolar da atividade.',
      interpretationLabels: {
        level_1: 'Sensação de falta de controle.',
        level_2: 'Controle limitado.',
        level_3: 'Bom senso de agência.',
        level_4: 'Domínio e autonomia total.',
      },
      questions: [
        { id: 64022, text: 'Sinto que posso decidir como realizar a atividade de forma independente.' },
        { id: 64023, text: 'Tomo iniciativa para tornar minhas tarefas mais interessantes.' },
        { id: 64024, text: 'A forma como realizo a atividade depende mais de outros do que de mim.', isReversed: true },
        { id: 64025, text: 'Posso ajustar o ritmo e a forma da atividade conforme minha vontade.' },
        { id: 64026, text: 'Sinto-me limitado(a) para experimentar diferentes abordagens na tarefa.', isReversed: true },
        { id: 64027, text: 'Tenho liberdade para explorar soluções criativas durante a atividade.' },
        { id: 64028, text: 'Sinto-me no controle da experiência e dos resultados da atividade.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica a propensão a entrar em estado de fluxo (flow). Escores altos sugerem alto engajamento e satisfação com a vida.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Dificuldade de Engajamento', 
        description: 'O indivíduo pode estar vivenciando tédio (tarefas muito fáceis) ou ansiedade (tarefas muito difíceis). Dificuldade em focar ou encontrar prazer na ação.',
        recommendations: [
          'Ajustar o nível de desafio das tarefas atuais.',
          'Eliminar distrações externas para facilitar o foco.',
          'Buscar atividades que tenham significado pessoal claro.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Engajamento Moderado', 
        description: 'Ocorre concentração e envolvimento, mas talvez de forma intermitente. O fluxo é interrompido por distrações ou autocrítica.',
        recommendations: [
          'Praticar a atenção plena na ação (mindfulness ativo).',
          'Definir metas claras para cada sessão de atividade.',
          'Reduzir a multitarefa.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Experiência de Fluxo Frequente', 
        description: 'Boa capacidade de absorção. O indivíduo consegue "mergulhar" no que faz, sentindo competência e prazer. Isso contribui para o bem-estar.',
        recommendations: [
          'Proteger os momentos de fluxo na agenda.',
          'Usar esse estado para tarefas criativas ou complexas.',
          'Observar quais atividades geram mais fluxo e priorizá-las.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Estado de Fluxo Elevado', 
        description: 'Alta integração entre consciência e ação. O indivíduo vive momentos frequentes de êxtase, clareza e desempenho ótimo.',
        recommendations: [
          'Desafiar-se ainda mais para expandir habilidades.',
          'Ensinar outros a encontrar paixão no que fazem.',
          'Garantir que o hiperfoco não negligencie outras áreas da vida (saúde, relações).'
        ]
      },
    ],
  },
};
