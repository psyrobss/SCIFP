
import { InventoryForm } from '../types';

export const IPLAD_INVENTORY: InventoryForm = {
  id: 'iplad',
  acronym: 'IPLAD',
  name: 'Inventário Psicológico para Lutadores de Alto Desempenho (IPLAD)',
  objective: 'Avaliar o perfil psicológico de atletas de luta em relação à: Força mental e resiliência competitiva, Autoconfiança e regulação emocional, Agressividade funcional e controle do impulso, Foco atencional e preparo psicológico, Receio ou ansiedade de competir. O instrumento auxilia no ajuste de estratégias mentais para maximizar desempenho e estabilidade emocional antes, durante e após a competição.',
  instructions: 'Leia cada afirmação e indique o quanto ela reflete o modo como você normalmente se comporta ou se sente em situações de treino e competição.\nResponda com sinceridade — não há respostas certas ou erradas.',
  scoreOrientation: 'higher_is_better',
  responseScale: [
    { value: 1, label: 'Nada verdadeiro' },
    { value: 2, label: 'Pouco verdadeiro' },
    { value: 3, label: 'Moderadamente verdadeiro' },
    { value: 4, label: 'Muito verdadeiro' },
    { value: 5, label: 'Totalmente verdadeiro' },
  ],
  domains: [
    {
      id: 'emotional_control_self_control',
      name: 'Controle Emocional e Autocontrole',
      icon: '🧘',
      description: 'Avalia a capacidade de manter a calma, o foco e o equilíbrio emocional em situações de pressão e combate.',
      interpretationSumRanges: [
        { min: 6, max: 13, label: 'Nível baixo (fragilidade psicológica neste domínio)', description: '' },
        { min: 14, max: 21, label: 'Nível moderado (consistência situacional, pode oscilar)', description: '' },
        { min: 22, max: 30, label: 'Nível alto (força psicológica e regulação eficiente)', description: '' }
      ],
      questions: [
        { id: 72001, text: 'Consigo manter a calma mesmo sob forte pressão no combate.' },
        { id: 72002, text: 'Quando cometo um erro, rapidamente retomo o foco.' },
        { id: 72003, text: 'Fico emocionalmente desorganizado após sofrer um golpe inesperado.', isReversed: true },
        { id: 72004, text: 'Mantenho o controle mesmo quando o adversário me provoca.' },
        { id: 72005, text: 'Tenho dificuldade em conter a raiva em momentos decisivos.', isReversed: true },
        { id: 72006, text: 'Utilizo técnicas mentais (respiração, foco, rotina) para me equilibrar emocionalmente.' },
      ],
    },
    {
      id: 'self_confidence_competence_belief',
      name: 'Autoconfiança e Crença de Competência',
      icon: '💪',
      description: 'Mede a convicção do atleta em seu potencial, treinamento e capacidade de vencer adversários.',
      interpretationSumRanges: [
        { min: 6, max: 13, label: 'Nível baixo (fragilidade psicológica neste domínio)', description: '' },
        { min: 14, max: 21, label: 'Nível moderado (consistência situacional, pode oscilar)', description: '' },
        { min: 22, max: 30, label: 'Nível alto (força psicológica e regulação eficiente)', description: '' }
      ],
      questions: [
        { id: 72007, text: 'Acredito totalmente na minha capacidade de vencer.' },
        { id: 72008, text: 'Sinto-me inseguro(a) antes de enfrentar adversários mais experientes.', isReversed: true },
        { id: 72009, text: 'Mesmo após derrotas, mantenho confiança no meu potencial.' },
        { id: 72010, text: 'Tenho dificuldade em acreditar que posso superar adversários fortes.', isReversed: true },
        { id: 72011, text: 'Confio na qualidade do meu treinamento.' },
        { id: 72012, text: 'Minhas emoções raramente abalam minha confiança.' },
      ],
    },
    {
      id: 'attentional_focus_mental_preparation',
      name: 'Foco Atencional e Preparação Mental',
      icon: '🎯',
      description: 'Avalia a capacidade de concentração, clareza mental e prontidão psicológica antes e durante a competição.',
      interpretationSumRanges: [
        { min: 6, max: 13, label: 'Nível baixo (fragilidade psicológica neste domínio)', description: '' },
        { min: 14, max: 21, label: 'Nível moderado (consistência situacional, pode oscilar)', description: '' },
        { min: 22, max: 30, label: 'Nível alto (força psicológica e regulação eficiente)', description: '' }
      ],
      questions: [
        { id: 72013, text: 'Durante o combate, consigo ignorar distrações externas.' },
        { id: 72014, text: 'Mantenho clareza mental para tomar decisões rápidas.' },
        { id: 72015, text: 'Perco a concentração facilmente com o público ou o ambiente.', isReversed: true },
        { id: 72016, text: 'Tenho uma rotina mental antes das lutas que me ajuda a focar.' },
        { id: 72017, text: 'Às vezes entro na luta sem estar mentalmente preparado.', isReversed: true },
        { id: 72018, text: 'Sei “entrar no modo competitivo” quando preciso performar.' },
      ],
    },
    {
      id: 'functional_aggression_determination',
      name: 'Agressividade Funcional e Determinação',
      icon: '🔥',
      description: 'Mede o uso controlado e estratégico da agressividade como energia competitiva e determinação para lutar.',
      interpretationSumRanges: [
        { min: 6, max: 13, label: 'Nível baixo (fragilidade psicológica neste domínio)', description: '' },
        { min: 14, max: 21, label: 'Nível moderado (consistência situacional, pode oscilar)', description: '' },
        { min: 22, max: 30, label: 'Nível alto (força psicológica e regulação eficiente)', description: '' }
      ],
      questions: [
        { id: 72019, text: 'Uso minha agressividade como energia para lutar melhor.' },
        { id: 72020, text: 'Minha raiva me atrapalha mais do que ajuda.', isReversed: true },
        { id: 72021, text: 'Sinto prazer em competir intensamente.' },
        { id: 72022, text: 'Entro para o combate com espírito de ataque e controle.' },
        { id: 72023, text: 'Tenho medo de machucar o adversário e isso me faz hesitar.', isReversed: true },
        { id: 72024, text: 'Uso a agressividade de forma inteligente, sem perder o controle.' },
      ],
    },
    {
      id: 'fear_competition_anxiety',
      name: 'Receio e Ansiedade de Competição',
      icon: '😟',
      description: 'Avalia a presença de medo, ansiedade e preocupações que podem prejudicar o desempenho competitivo.',
      interpretationSumRanges: [
        { min: 6, max: 13, label: 'Nível baixo (fragilidade psicológica neste domínio)', description: '' },
        { min: 14, max: 21, label: 'Nível moderado (consistência situacional, pode oscilar)', description: '' },
        { min: 22, max: 30, label: 'Nível alto (força psicológica e regulação eficiente)', description: '' }
      ],
      questions: [
        { id: 72025, text: 'Antes das competições, sinto um medo difícil de controlar.', isReversed: true },
        { id: 72026, text: 'Tenho receio de decepcionar meu treinador ou equipe.', isReversed: true },
        { id: 72027, text: 'Minhas mãos suam e fico tenso(a) antes de lutar.', isReversed: true },
        { id: 72028, text: 'Às vezes penso em evitar competir por medo de fracassar.', isReversed: true },
        { id: 72029, text: 'Consigo transformar o nervosismo em motivação.' },
        { id: 72030, text: 'O medo de errar me faz lutar abaixo do meu potencial.', isReversed: true },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'A pontuação total não possui uma interpretação direta. A análise principal é feita a partir dos escores de cada domínio, que indicam o nível de força ou fragilidade psicológica em cada área.',
    ranges: [],
    notes: ['Itens com (R) têm a pontuação invertida (5=1, 4=2, 3=3, 2=4, 1=5).'],
  }
};
