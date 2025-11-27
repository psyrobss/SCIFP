
import { InventoryForm } from '../types';

export const IFE_INVENTORY: InventoryForm = {
  id: 'ife',
  acronym: 'IFE',
  name: 'Inventário de Função Executiva Emocional',
  objective: 'Avaliar a integração entre funções executivas cognitivas e regulação emocional, incluindo planejamento, controle de impulsos, tomada de decisão e monitoramento emocional em situações cotidianas.',
  instructions: 'Leia cada afirmação e indique o quanto ela descreve seu comportamento ou reação habitual em situações do dia a dia.',
  scoreOrientation: 'higher_is_better',
  responseScale: [
    { value: 0, label: 'Nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre' },
  ],
  domains: [
    {
      id: 'emotional_planning',
      name: 'Planejamento e Organização Emocional',
      icon: '🗓️',
      description: 'Capacidade de antecipar reações emocionais e organizar ações de forma adaptativa, mesmo sob pressão.',
      interpretationLabels: {
        level_1: 'Fragilidade clínica',
        level_2: 'Leve deficiência',
        level_3: 'Funcional / adequada',
        level_4: 'Alto recurso / competência sólida',
      },
      questions: [
        { id: 40001, text: 'Consigo prever como vou me sentir em situações importantes.' },
        { id: 40002, text: 'Planejo ações levando em conta meu estado emocional.' },
        { id: 40003, text: 'Organizo minhas tarefas mesmo sob pressão emocional.' },
        { id: 40004, text: 'Costumo definir prioridades sem deixar as emoções atrapalharem.' },
        { id: 40005, text: 'Evito tomar decisões impulsivas em momentos de tensão.' },
        { id: 40006, text: 'Consigo antecipar problemas e preparar estratégias de enfrentamento.' },
        { id: 40007, text: 'Mantenho metas claras mesmo diante de emoções intensas.' },
      ],
    },
    {
      id: 'impulse_control',
      name: 'Controle de Impulsos e Autorregulação',
      icon: '🧘',
      description: 'Habilidade de conter reações imediatas, modular respostas emocionais e lidar com frustrações de forma construtiva.',
      interpretationLabels: {
        level_1: 'Fragilidade clínica',
        level_2: 'Leve deficiência',
        level_3: 'Funcional / adequada',
        level_4: 'Alto recurso / competência sólida',
      },
      questions: [
        { id: 40008, text: 'Consigo controlar reações impulsivas em situações estressantes.' },
        { id: 40009, text: 'Frequentemente consigo respirar e pausar antes de reagir.' },
        { id: 40010, text: 'Evito explodir emocionalmente em discussões ou conflitos.' },
        { id: 40011, text: 'Sinto que posso modular minhas respostas emocionais conforme a situação.' },
        { id: 40012, text: 'Às vezes, deixo a raiva ou frustração atrapalhar meu julgamento.', isReversed: true },
        { id: 40013, text: 'Posso lidar com frustração sem perder o foco nas tarefas.' },
        { id: 40014, text: 'Consigo resistir a comportamentos prejudiciais mesmo sob pressão emocional.' },
      ],
    },
    {
      id: 'emotional_decision_making',
      name: 'Tomada de Decisão Emocional',
      icon: '🧭',
      description: 'Capacidade de equilibrar razão e emoção ao fazer escolhas, considerando consequências emocionais e evitando decisões precipitadas.',
      interpretationLabels: {
        level_1: 'Fragilidade clínica',
        level_2: 'Leve deficiência',
        level_3: 'Funcional / adequada',
        level_4: 'Alto recurso / competência sólida',
      },
      questions: [
        { id: 40015, text: 'Levo em conta minhas emoções ao tomar decisões importantes.' },
        { id: 40016, text: 'Frequentemente considero consequências emocionais antes de agir.' },
        { id: 40017, text: 'Tomo decisões precipitadas quando estou muito ansioso(a).', isReversed: true },
        { id: 40018, text: 'Sou capaz de equilibrar razão e emoção ao avaliar opções.' },
        { id: 40019, text: 'Consigo decidir sem me deixar paralisar por medo ou insegurança.' },
        { id: 40020, text: 'Posso escolher estratégias de ação adequadas mesmo em crises emocionais.' },
        { id: 40021, text: 'Me sinto seguro(a) ao tomar decisões importantes, mesmo sob pressão.' },
      ],
    },
    {
      id: 'emotional_monitoring_flexibility',
      name: 'Monitoramento e Flexibilidade Emocional',
      icon: '🔄',
      description: 'Habilidade de perceber mudanças no estado emocional, ajustar estratégias e lidar com múltiplas demandas emocionais de forma adaptativa.',
      interpretationLabels: {
        level_1: 'Fragilidade clínica',
        level_2: 'Leve deficiência',
        level_3: 'Funcional / adequada',
        level_4: 'Alto recurso / competência sólida',
      },
      questions: [
        { id: 40022, text: 'Consigo perceber rapidamente quando meu estado emocional muda.' },
        { id: 40023, text: 'Ajusto minha estratégia quando percebo que as emoções estão interferindo.' },
        { id: 40024, text: 'Sou capaz de lidar com múltiplas demandas emocionais ao mesmo tempo.' },
        { id: 40025, text: 'Posso alternar comportamentos de acordo com o contexto emocional.' },
        { id: 40026, text: 'Frequentemente reconheço padrões em minhas respostas emocionais.' },
        { id: 40027, text: 'Às vezes fico preso(a) em emoções negativas sem conseguir me adaptar.', isReversed: true },
        { id: 40028, text: 'Sou flexível ao lidar com mudanças emocionais inesperadas.' },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'A pontuação total (0–112) indica o nível geral de função executiva emocional. Escores mais altos refletem maior competência na integração entre cognição e afeto.',
    subScoresDescription: 'Subescores por domínio podem ser calculados (média de 0-4) para análises específicas.',
    ranges: [
      { 
        min: 0, 
        max: 28, 
        label: 'Função Executiva Emocional Muito Baixa', 
        description: 'Dificuldade significativa em planejar, controlar impulsos e tomar decisões sob ativação emocional. O indivíduo tende a ser reativo e ter dificuldade em manter metas quando está estressado.',
        recommendations: [
          'Treinamento de habilidades de "Parar e Pensar" antes de agir.',
          'Uso de estratégias externas de regulação (listas, lembretes visuais) em momentos de crise.',
          'Terapia focada em controle de impulsos e regulação emocional.',
          'Simplificar o ambiente para reduzir a sobrecarga de decisões.'
        ]
      },
      { 
        min: 29, 
        max: 56, 
        label: 'Baixa Função Executiva Emocional', 
        description: 'Presença de fragilidades no monitoramento e adaptação emocional. Pode haver rigidez ou desorganização quando as emoções são intensas.',
        recommendations: [
          'Praticar o planejamento antecipado de situações emocionalmente desafiadoras (Planos "Se-Então").',
          'Desenvolver o hábito de monitorar o estado emocional regularmente.',
          'Exercícios de respiração para recuperar o acesso ao córtex pré-frontal sob estresse.'
        ]
      },
      { 
        min: 57, 
        max: 84, 
        label: 'Função Executiva Emocional Moderada', 
        description: 'Recursos adequados na maioria das situações cotidianas. Pode haver falhas pontuais em momentos de alta pressão ou fadiga, mas com capacidade de recuperação.',
        recommendations: [
          'Refinar a tomada de decisão integrando intuição e lógica.',
          'Aumentar o repertório de flexibilidade emocional em situações novas.',
          'Manter rotinas de autocuidado para preservar a energia executiva.'
        ]
      },
      { 
        min: 85, 
        max: 112, 
        label: 'Função Executiva Emocional Elevada', 
        description: 'Excelente capacidade de planejamento, regulação e flexibilidade emocional. O indivíduo consegue utilizar as emoções como informações úteis para navegar em problemas complexos.',
        recommendations: [
          'Utilizar essa competência para liderança e gestão de crises.',
          'Mentorar outros no desenvolvimento de regulação emocional.',
          'Continuar desafiando-se em ambientes complexos que exijam alta adaptação.'
        ]
      },
    ],
  },
};
