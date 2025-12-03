
import { InventoryForm } from '../types';

export const IFE_INVENTORY: InventoryForm = {
  id: 'ife',
  acronym: 'IFE',
  name: 'Inventário de Função Executiva Emocional',
  objective: 'Avaliar a capacidade de usar a cognição para gerenciar emoções e usar as emoções para informar decisões (integração razão-emoção) em situações práticas.',
  instructions: 'Leia cada afirmação e indique o quanto ela descreve seu comportamento ou reação habitual em situações do dia a dia, usando a escala de 1 a 7.',
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
      id: 'emotional_planning',
      name: 'Planejamento Considerando o Afeto',
      icon: '🗓️',
      description: 'Capacidade de antecipar como situações futuras afetarão o estado emocional e se preparar para elas.',
      interpretationLabels: {
        level_1: 'Dificuldade em prever impacto emocional.',
        level_2: 'Planejamento emocional ocasional.',
        level_3: 'Bom preparo para demandas emocionais.',
        level_4: 'Alta antecipação e organização afetiva.',
      },
      questions: [
        { id: 40001, text: 'Consigo imaginar como vou me sentir em uma situação futura e me preparar.' },
        { id: 40002, text: 'Levo em conta meu nível de energia emocional ao planejar a semana.' },
        { id: 40003, text: 'Se sei que algo será estressante, organizo meu tempo para ter pausas.' },
        { id: 40004, text: 'Evito agendar muitas tarefas difíceis no mesmo dia para não me sobrecarregar.' },
        { id: 40005, text: 'Consigo definir prioridades mesmo quando estou ansioso(a).' },
        { id: 40006, text: 'Penso antecipadamente em como lidar com possíveis gatilhos emocionais.' },
        { id: 40007, text: 'Mantenho o foco em minhas metas de longo prazo, mesmo com oscilações de humor.' },
      ],
    },
    {
      id: 'impulse_control',
      name: 'Gerenciamento de Impulsos',
      icon: '🧘',
      description: 'Habilidade de criar um espaço entre o sentir e o agir, permitindo respostas mais escolhidas.',
      interpretationLabels: {
        level_1: 'Reatividade imediata aos estímulos.',
        level_2: 'Controle de impulsos requer muito esforço.',
        level_3: 'Boa capacidade de pausa e reflexão.',
        level_4: 'Excelente autorregulação e compostura.',
      },
      questions: [
        { id: 40008, text: 'Consigo "contar até dez" ou respirar antes de responder a uma provocação.' },
        { id: 40009, text: 'Percebo o impulso de agir, mas consigo escolher não segui-lo.' },
        { id: 40010, text: 'Evito tomar atitudes drásticas no calor do momento.' },
        { id: 40011, text: 'Consigo modular minha voz e gestos mesmo quando estou irritado(a).' },
        { id: 40012, text: 'Às vezes ajo puramente pela emoção e me arrependo depois.', isReversed: true },
        { id: 40013, text: 'Consigo tolerar a frustração sem desistir da tarefa imediatamente.' },
        { id: 40014, text: 'Resisto a tentações momentâneas em prol de objetivos maiores.' },
      ],
    },
    {
      id: 'emotional_decision_making',
      name: 'Tomada de Decisão Integrada',
      icon: '🧭',
      description: 'Capacidade de usar a emoção como informação útil na tomada de decisão, sem ser sequestrado por ela.',
      interpretationLabels: {
        level_1: 'Decisões dominadas pela emoção ou excessivamente frias.',
        level_2: 'Dificuldade em integrar razão e emoção.',
        level_3: 'Boas decisões ponderadas.',
        level_4: 'Alta sabedoria na tomada de decisão.',
      },
      questions: [
        { id: 40015, text: 'Considero tanto os fatos quanto meus sentimentos ao decidir.' },
        { id: 40016, text: 'Entendo que minhas emoções me dão pistas sobre o que é importante para mim.' },
        { id: 40017, text: 'Quando estou muito agitado(a), prefiro adiar decisões importantes.', isReversed: false }, // Corrected logic: this is a GOOD strategy (adaptive), so NOT reversed. High score = good.
        { id: 40018, text: 'Consigo pensar com clareza mesmo sentindo emoções fortes.' },
        { id: 40019, text: 'Não deixo o medo me impedir de fazer escolhas necessárias.' },
        { id: 40020, text: 'Avalio se minha vontade momentânea está alinhada com meus valores.' },
        { id: 40021, text: 'Sinto segurança nas decisões que tomo, pois elas fazem sentido racional e emocional.' },
      ],
    },
    {
      id: 'emotional_monitoring_flexibility',
      name: 'Monitoramento e Adaptação',
      icon: '🔄',
      description: 'Habilidade de checar o próprio estado interno e ajustar o comportamento conforme a necessidade.',
      interpretationLabels: {
        level_1: 'Dificuldade em perceber e ajustar o estado interno.',
        level_2: 'Adaptação lenta a mudanças de contexto.',
        level_3: 'Bom monitoramento e ajuste.',
        level_4: 'Alta fluidez e adaptação emocional.',
      },
      questions: [
        { id: 40022, text: 'Percebo quando estou ficando estressado(a) e preciso desacelerar.' },
        { id: 40023, text: 'Se uma estratégia não está funcionando, consigo mudar minha abordagem emocional.' },
        { id: 40024, text: 'Consigo transitar entre momentos de foco sério e momentos de descontração.' },
        { id: 40025, text: 'Reconheço quando minhas emoções estão distorcendo minha percepção.' },
        { id: 40026, text: 'Tenho facilidade em "virar a chave" e mudar de humor se a situação exigir.' },
        { id: 40027, text: 'Às vezes fico "preso" em um estado de humor e não consigo sair.', isReversed: true },
        { id: 40028, text: 'Adapto minha expressão emocional dependendo de com quem estou falando.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) reflete a competência na gestão executiva das emoções. Escores altos indicam boa integração.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Desafios na Regulação Executiva', 
        description: 'Pode haver dificuldade em "parar e pensar" sob estresse ou em planejar considerando o bem-estar emocional. Tendência a reagir no piloto automático.',
        recommendations: [
          'Usar apoios externos (agendas, alarmes) para reduzir a carga mental.',
          'Treinar a pausa obrigatória antes de responder a mensagens tensas.',
          'Simplificar a rotina para evitar fadiga decisória.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Função Executiva Emocional em Desenvolvimento', 
        description: 'Capacidade de controle e planejamento presente, mas pode falhar em momentos de cansaço ou alta intensidade emocional.',
        recommendations: [
          'Monitorar os níveis de energia ao longo do dia.',
          'Praticar a tomada de decisão em cenários de baixo risco.',
          'Validar a emoção antes de tentar resolvê-la racionalmente.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Boa Integração Razão-Emoção', 
        description: 'O indivíduo consegue gerenciar seus impulsos e usar suas emoções de forma inteligente na maior parte do tempo.',
        recommendations: [
          'Refinar a percepção de sutilezas emocionais.',
          'Aplicar essa habilidade em negociações ou liderança.',
          'Manter práticas de mindfulness para sustentar a clareza.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Competência Executiva Emocional', 
        description: 'Excelente habilidade de autorregulação, planejamento adaptativo e uso estratégico das emoções. Perfil equilibrado e eficaz.',
        recommendations: [
          'Atuar como mentor para pessoas com dificuldades de regulação.',
          'Gerenciar projetos complexos que envolvam gestão de pessoas.',
          'Continuar desafiando-se para manter a flexibilidade mental.'
        ]
      },
    ],
  },
};
