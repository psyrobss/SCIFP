
import { InventoryForm } from '../types';

export const IPLAD_INVENTORY: InventoryForm = {
  id: 'iplad',
  acronym: 'IPLAD',
  name: 'Inventário Psicológico para Lutadores de Alto Desempenho (IPLAD)',
  objective: 'Avaliar o perfil psicológico de atletas de luta em relação à força mental, resiliência, autoconfiança e regulação emocional antes e durante a competição.',
  instructions: 'Leia cada afirmação e indique o quanto ela reflete o modo como você normalmente se comporta ou se sente em situações de treino e competição, usando a escala de 1 a 7.',
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
      id: 'emotional_control_self_control',
      name: 'Controle Emocional e Foco',
      icon: '🧘',
      description: 'Capacidade de manter a calma e a clareza mental sob pressão de combate.',
      interpretationLabels: {
        level_1: 'Alta instabilidade emocional.',
        level_2: 'Controle oscilante sob pressão.',
        level_3: 'Bom controle emocional.',
        level_4: 'Blindagem emocional de elite.',
      },
      questions: [
        { id: 72001, text: 'Consigo manter a calma mesmo sob forte pressão no combate.' },
        { id: 72002, text: 'Quando cometo um erro, rapidamente retomo o foco.' },
        { id: 72003, text: 'Fico emocionalmente desorganizado após sofrer um golpe inesperado.', isReversed: true },
        { id: 72004, text: 'Mantenho o controle mesmo quando o adversário me provoca.' },
        { id: 72005, text: 'Tenho dificuldade em conter a raiva em momentos decisivos.', isReversed: true },
        { id: 72006, text: 'Utilizo técnicas mentais (respiração, foco) para me equilibrar.' },
      ],
    },
    {
      id: 'self_confidence_competence_belief',
      name: 'Autoconfiança Competitiva',
      icon: '💪',
      description: 'Crença inabalável no próprio potencial e preparação.',
      interpretationLabels: {
        level_1: 'Insegurança significativa.',
        level_2: 'Confiança frágil diante de desafios.',
        level_3: 'Confiança sólida.',
        level_4: 'Autoconfiança inabalável.',
      },
      questions: [
        { id: 72007, text: 'Acredito totalmente na minha capacidade de vencer.' },
        { id: 72008, text: 'Sinto-me inseguro(a) antes de enfrentar adversários experientes.', isReversed: true },
        { id: 72009, text: 'Mesmo após derrotas, mantenho confiança no meu potencial.' },
        { id: 72010, text: 'Tenho dificuldade em acreditar que posso superar os melhores.', isReversed: true },
        { id: 72011, text: 'Confio na qualidade do meu treinamento.' },
        { id: 72012, text: 'Minhas emoções raramente abalam minha certeza de vitória.' },
      ],
    },
    {
      id: 'attentional_focus_mental_preparation',
      name: 'Preparo Mental e Concentração',
      icon: '🎯',
      description: 'Habilidade de bloquear distrações e entrar no estado de fluxo.',
      interpretationLabels: {
        level_1: 'Dispersão fácil.',
        level_2: 'Foco inconsistente.',
        level_3: 'Boa concentração.',
        level_4: 'Foco tipo "laser".',
      },
      questions: [
        { id: 72013, text: 'Durante o combate, consigo ignorar a torcida e o barulho.' },
        { id: 72014, text: 'Mantenho clareza mental para tomar decisões rápidas.' },
        { id: 72015, text: 'Perco a concentração facilmente com fatores externos.', isReversed: true },
        { id: 72016, text: 'Tenho uma rotina mental pré-luta que funciona.' },
        { id: 72017, text: 'Às vezes entro na luta "frio" ou disperso.', isReversed: true },
        { id: 72018, text: 'Sei ativar meu estado de alerta máximo quando preciso.' },
      ],
    },
    {
      id: 'functional_aggression_determination',
      name: 'Determinação e Agressividade Funcional',
      icon: '🔥',
      description: 'Uso estratégico da energia agressiva para dominar o combate.',
      interpretationLabels: {
        level_1: 'Passividade ou inibição.',
        level_2: 'Agressividade reativa (perda de controle).',
        level_3: 'Boa assertividade física.',
        level_4: 'Determinação combativa controlada.',
      },
      questions: [
        { id: 72019, text: 'Uso minha agressividade como energia para lutar melhor.' },
        { id: 72020, text: 'Minha raiva me atrapalha mais do que ajuda.', isReversed: true },
        { id: 72021, text: 'Sinto prazer no desafio do combate intenso.' },
        { id: 72022, text: 'Entro para o combate com espírito de imposição.' },
        { id: 72023, text: 'Tenho receio de machucar ou ser machucado, o que me trava.', isReversed: true },
        { id: 72024, text: 'Uso a força de forma inteligente, sem desperdício.' },
      ],
    },
    {
      id: 'fear_competition_anxiety',
      name: 'Manejo da Ansiedade Pré-Competitiva',
      icon: '⚡',
      description: 'Capacidade de transformar o nervosismo em prontidão, sem ser paralisado pelo medo.',
      interpretationLabels: {
        level_1: 'Ansiedade paralisante.',
        level_2: 'Nervosismo que afeta o desempenho.',
        level_3: 'Ansiedade controlada.',
        level_4: 'Ativação ótima (flow).',
      },
      questions: [
        { id: 72025, text: 'Antes das competições, sinto um medo que me trava.', isReversed: true },
        { id: 72026, text: 'O medo de decepcionar os outros me pressiona demais.', isReversed: true },
        { id: 72027, text: 'Sinto sintomas físicos de ansiedade que atrapalham meu aquecimento.', isReversed: true },
        { id: 72028, text: 'Às vezes penso em desistir antes da hora por nervosismo.', isReversed: true },
        { id: 72029, text: 'Consigo transformar o "frio na barriga" em adrenalina útil.' },
        { id: 72030, text: 'O medo de errar me faz lutar de forma defensiva.', isReversed: true },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de preparo psicológico para o combate. Escores altos refletem mentalidade de alto rendimento.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Fragilidade Psicológica Competitiva', 
        description: 'O atleta pode ter boa técnica, mas o fator mental está comprometendo o desempenho. Risco de "travar" na hora da luta ou desistir diante de adversidades.',
        recommendations: [
          'Trabalho de base em autoconfiança: reforçar pontos fortes técnicos.',
          'Técnicas de regulação de ansiedade (respiração diafragmática).',
          'Ressignificar a competição como desafio, não ameaça.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Preparo Mental em Desenvolvimento', 
        description: 'Existem recursos mentais, mas eles oscilam. O atleta pode lutar bem quando está ganhando, mas desestabilizar se começar perdendo ou se o adversário surpreender.',
        recommendations: [
          'Treino de simulação de cenários adversos (começar o treino em desvantagem).',
          'Rotinas pré-competição para estabilizar o estado mental.',
          'Focagem na performance (execução) e não no resultado (vitória).'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Força Mental Consistente', 
        description: 'Bom nível de controle e foco. O atleta consegue aplicar o que treinou na maioria das vezes e lida bem com a pressão competitiva regular.',
        recommendations: [
          'Refinar o diálogo interno para ser mais estratégico e menos crítico.',
          'Visualização mental (imagética) de lutas perfeitas.',
          'Análise pós-luta focada em aprendizado emocional.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Mentalidade de Campeão', 
        description: 'Alto nível de resiliência, foco e determinação. O atleta cresce na adversidade e usa a pressão a seu favor. Controle emocional de elite.',
        recommendations: [
          'Manter a humildade e a "mente de principiante" para continuar evoluindo.',
          'Liderar pelo exemplo na equipe.',
          'Focar em recuperação mental (descanso) para evitar burnout.'
        ]
      },
    ],
  }
};
