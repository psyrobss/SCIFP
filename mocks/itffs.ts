
import { InventoryForm } from '../types';

export const ITFFS_INVENTORY: InventoryForm = {
  id: 'itffs',
  acronym: 'ITFFS',
  name: 'Inventário de Tolerância à Frustração e Frustração Social',
  objective: 'Avaliar a capacidade de lidar com obstáculos, atrasos, contratempos e desafios interpessoais de forma adaptativa, mantendo o equilíbrio emocional e a persistência.',
  instructions: 'Leia cada afirmação e indique com que frequência você vivencia o comportamento ou sentimento descrito ao enfrentar situações frustrantes, usando a escala abaixo.',
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
      id: 'general_frustration',
      name: 'Manejo de Obstáculos Gerais',
      icon: '🚧',
      description: 'Capacidade de tolerar atrasos, imprevistos e barreiras sem desorganização emocional.',
      interpretationLabels: {
        level_1: 'Baixa tolerância a imprevistos.',
        level_2: 'Dificuldade moderada com obstáculos.',
        level_3: 'Boa gestão de contratempos.',
        level_4: 'Alta resiliência diante de barreiras.',
      },
      questions: [
        { id: 68001, text: 'Consigo lidar calmamente com atrasos ou contratempos.' },
        { id: 68002, text: 'Frequentemente fico irritado(a) quando as coisas não saem como planejado.', isReversed: true },
        { id: 68003, text: 'Aceito mudanças inesperadas sem frustração excessiva.' },
        { id: 68004, text: 'Sinto dificuldade em controlar minha irritação diante de pequenos problemas.', isReversed: true },
        { id: 68005, text: 'Procuro soluções construtivas quando algo me impede de alcançar um objetivo.' },
        { id: 68006, text: 'Reajo de forma exagerada a falhas ou erros cotidianos.', isReversed: true },
        { id: 68007, text: 'Sou capaz de esperar e manter a paciência diante de dificuldades.' },
      ],
    },
    {
      id: 'interpersonal_frustration',
      name: 'Resiliência Interpessoal',
      icon: '👥',
      description: 'Habilidade de lidar com conflitos, críticas ou comportamentos alheios desagradáveis sem reatividade excessiva.',
      interpretationLabels: {
        level_1: 'Alta sensibilidade a conflitos.',
        level_2: 'Reatividade social moderada.',
        level_3: 'Bom equilíbrio em situações tensas.',
        level_4: 'Excelente manejo de frustrações sociais.',
      },
      questions: [
        { id: 68008, text: 'Posso aceitar críticas sem sentir raiva ou tristeza excessiva.' },
        { id: 68009, text: 'Fico facilmente frustrado(a) quando outros não cumprem suas promessas.', isReversed: true },
        { id: 68010, text: 'Consigo manter o equilíbrio emocional em discussões ou desentendimentos.' },
        { id: 68011, text: 'Costumo reagir impulsivamente quando me sinto injustiçado(a).', isReversed: true },
        { id: 68012, text: 'Aceito opiniões divergentes sem frustração intensa.' },
        { id: 68013, text: 'Sinto dificuldade em lidar com rejeição ou desaprovação social.', isReversed: true },
        { id: 68014, text: 'Posso dialogar de forma calma mesmo em situações tensas ou conflitantes.' },
      ],
    },
    {
      id: 'emotional_control',
      name: 'Regulação Emocional sob Pressão',
      icon: '🧘',
      description: 'Capacidade de usar estratégias para acalmar a si mesmo e evitar explosões emocionais.',
      interpretationLabels: {
        level_1: 'Dificuldade de autorregulação.',
        level_2: 'Controle emocional instável.',
        level_3: 'Boa capacidade de autoacalmamento.',
        level_4: 'Alta estabilidade emocional.',
      },
      questions: [
        { id: 68015, text: 'Consigo respirar fundo e me acalmar quando algo me frustra.' },
        { id: 68016, text: 'Frequentemente explodo ou reajo com irritação.', isReversed: true },
        { id: 68017, text: 'Posso refletir antes de reagir a situações frustrantes.' },
        { id: 68018, text: 'Sinto que perco o controle facilmente em situações difíceis.', isReversed: true },
        { id: 68019, text: 'Tenho estratégias pessoais para reduzir sentimentos de frustração.' },
        { id: 68020, text: 'Reajo com raiva ou tristeza intensa mesmo em problemas pequenos.', isReversed: true },
        { id: 68021, text: 'Consigo aceitar limitações sem ressentimento prolongado.' },
      ],
    },
    {
      id: 'persistence_resilience',
      name: 'Persistência e Continuidade',
      icon: '🔥',
      description: 'Capacidade de manter o esforço e o foco na meta, mesmo quando surgem dificuldades.',
      interpretationLabels: {
        level_1: 'Tendência a desistir facilmente.',
        level_2: 'Persistência condicional ao sucesso.',
        level_3: 'Boa tenacidade diante de desafios.',
        level_4: 'Alta determinação e resiliência.',
      },
      questions: [
        { id: 68022, text: 'Continuo tentando alcançar meus objetivos mesmo quando encontro barreiras.' },
        { id: 68023, text: 'Desisto facilmente quando as coisas se tornam difíceis.', isReversed: true },
        { id: 68024, text: 'Posso adaptar meu comportamento para superar frustrações sem perder motivação.' },
        { id: 68025, text: 'Sinto-me desmotivado(a) diante de contratempos repetidos.', isReversed: true },
        { id: 68026, text: 'Encaro desafios sociais ou profissionais como oportunidades de aprendizado.' },
        { id: 68027, text: 'Evito situações desafiadoras por medo de frustração.', isReversed: true },
        { id: 68028, text: 'Persisto em tarefas importantes mesmo quando enfrento dificuldades significativas.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de tolerância à frustração. Escores mais altos sugerem maior capacidade de adaptação e persistência.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Sensibilidade à Frustração', 
        description: 'Pode haver dificuldade significativa em lidar com o não-atendimento de expectativas, levando a reações de irritação, desistência ou desânimo. Importante acolher o desconforto sem julgamento.',
        recommendations: [
          'Treino de habilidades de tolerância ao mal-estar (DBT).',
          'Identificar pensamentos de "tudo ou nada" ou exigências rígidas.',
          'Praticar a exposição gradual a pequenos desconfortos.',
          'Técnicas de respiração para reduzir a ativação imediata da raiva.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Tolerância em Desenvolvimento', 
        description: 'Capacidade de lidar com frustrações menores, mas desafios maiores ou acumulados podem gerar sobrecarga. Pode haver tendência a evitar situações difíceis.',
        recommendations: [
          'Reestruturação cognitiva: ver o obstáculo como desafio, não ameaça.',
          'Desenvolver paciência através de práticas de mindfulness.',
          'Focar na resolução de problemas em vez de na reação emocional.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Tolerância Funcional', 
        description: 'Boa capacidade de navegar por contratempos. O indivíduo sente a frustração, mas consegue manter o controle e buscar alternativas construtivas.',
        recommendations: [
          'Fortalecer a resiliência focando no aprendizado com o erro.',
          'Praticar a aceitação radical de situações incontroláveis.',
          'Manter a perspectiva de longo prazo em projetos difíceis.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Resiliência e Persistência', 
        description: 'Excelente controle emocional e tenacidade. Capacidade de transformar a energia da frustração em motivação para superar barreiras.',
        recommendations: [
          'Utilizar a estabilidade emocional para mediar conflitos em grupos.',
          'Assumir liderança em projetos complexos ou desafiadores.',
          'Servir de modelo de regulação para outras pessoas.'
        ]
      },
    ],
  },
};
