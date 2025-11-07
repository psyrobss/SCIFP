
import { InventoryForm } from '../types';

export const ITFFS_INVENTORY: InventoryForm = {
  id: 'itffs',
  acronym: 'ITFFS',
  name: 'Inventário de Tolerância à Frustração e Frustração Social',
  objective: 'Avaliar a capacidade do indivíduo de lidar com frustrações, obstáculos, atrasos, contratempos e desafios interpessoais de forma adaptativa, sem reações impulsivas ou emocionais desproporcionais.',
  instructions: 'Leia cada afirmação e indique com que frequência você vivencia o comportamento ou sentimento descrito ao enfrentar situações frustrantes ou desafiadoras socialmente.',
  responseScale: [
    { value: 0, label: 'Nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre' },
  ],
  domains: [
    {
      id: 'general_frustration',
      name: 'Frustração Geral e Obstáculos',
      icon: '🔹',
      description: 'Avalia a tolerância do indivíduo frente a obstáculos, atrasos ou situações inesperadas.',
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
      name: 'Frustração Interpessoal',
      icon: '🔹',
      description: 'Avalia reações diante de conflitos sociais, críticas ou rejeição.',
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
      name: 'Controle Emocional e Regulação',
      icon: '🔹',
      description: 'Avalia habilidade de regular emoções negativas diante de frustração.',
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
      name: 'Persistência e Resiliência',
      icon: '🔹',
      description: 'Avalia capacidade de continuar esforços apesar de obstáculos ou dificuldades sociais.',
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
    type: 'sum',
    description: 'Pontuação total: 0–112. Itens invertidos: 2, 4, 6, 9, 11, 13, 16, 18, 20, 23, 25, 27.',
    ranges: [
      { min: 0, max: 28, label: 'Muito baixa', description: 'Dificuldade significativa em lidar com frustração, impulsividade emocional, baixa resiliência' },
      { min: 29, max: 56, label: 'Baixa', description: 'Algumas dificuldades em tolerar frustrações e contratempos' },
      { min: 57, max: 84, label: 'Funcional', description: 'Capacidade adequada de lidar com obstáculos e situações sociais desafiadoras' },
      { min: 85, max: 112, label: 'Alta', description: 'Excelente tolerância à frustração, controle emocional e persistência' },
    ],
  },
};