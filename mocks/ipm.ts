
import { InventoryForm } from '../types';

export const IPM_INVENTORY: InventoryForm = {
  id: 'ipm',
  acronym: 'IPM',
  name: 'Inventário de Psychological Mindedness (IPM)',
  objective: 'Avaliar a capacidade de autorreflexão, insight e interesse pelos processos mentais e emocionais (próprios e alheios), fundamental para o processo psicoterapêutico e o autoconhecimento.',
  instructions: 'Indique o quanto cada afirmação descreve seu interesse e capacidade de refletir sobre pensamentos e sentimentos, utilizando a escala abaixo.',
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
      id: 'self_reflection_insight',
      name: 'Autorreflexão e Insight',
      icon: '💭',
      description: 'Interesse e habilidade em analisar os próprios motivos, conflitos e padrões de comportamento.',
      interpretationLabels: {
        level_1: 'Baixo interesse em autoanálise.',
        level_2: 'Reflexão ocasional ou superficial.',
        level_3: 'Boa capacidade reflexiva.',
        level_4: 'Alto insight e profundidade.',
      },
      questions: [
        { id: 33001, text: 'Consigo perceber quando algo dentro de mim está em conflito.' },
        { id: 33002, text: 'Tenho facilidade em reconhecer o motivo por trás das minhas reações emocionais.' },
        { id: 33003, text: 'Penso sobre o que minhas atitudes dizem sobre mim.' },
        { id: 33004, text: 'Quando cometo um erro, reflito sobre o que ele revela sobre meus padrões.' },
        { id: 33005, text: 'Consigo identificar como meu passado influencia meu comportamento atual.' },
        { id: 33006, text: 'Gosto de tentar compreender meus pensamentos e sentimentos em profundidade.' },
      ],
    },
    {
      id: 'emotional_awareness',
      name: 'Consciência dos Processos Internos',
      icon: '🧠',
      description: 'Habilidade de acessar e nomear estados internos complexos.',
      interpretationLabels: {
        level_1: 'Dificuldade de acesso interno.',
        level_2: 'Consciência intermitente.',
        level_3: 'Boa percepção interna.',
        level_4: 'Alta clareza e diferenciação.',
      },
      questions: [
        { id: 34001, text: 'Consigo distinguir entre diferentes emoções que sinto.' },
        { id: 34002, text: 'Percebo quando estou tentando evitar sentir algo difícil.' },
        { id: 34003, text: 'Sei nomear o que estou sentindo, mesmo em momentos de estresse.' },
        { id: 34004, text: 'Tenho facilidade em perceber o impacto das minhas emoções nas minhas ações.' },
        { id: 34005, text: 'Sinto quando estou emocionalmente sobrecarregado(a).' },
        { id: 34006, text: 'Consigo reconhecer quando uma emoção tem origem em algo antigo.' },
      ],
    },
    {
      id: 'empathy_interpersonal_understanding',
      name: 'Compreensão da Mente do Outro',
      icon: '🤝',
      description: 'Interesse em entender as motivações e sentimentos das outras pessoas (Teoria da Mente aplicada).',
      interpretationLabels: {
        level_1: 'Baixo interesse na mente alheia.',
        level_2: 'Compreensão limitada.',
        level_3: 'Boa empatia cognitiva.',
        level_4: 'Alta sofisticação interpessoal.',
      },
      questions: [
        { id: 35001, text: 'Consigo perceber o que os outros estão sentindo, mesmo quando não dizem.' },
        { id: 35002, text: 'Tento entender o ponto de vista das outras pessoas antes de reagir.' },
        { id: 35003, text: 'Tenho facilidade em perceber quando alguém está tentando esconder algo emocionalmente.' },
        { id: 35004, text: 'Sinto-me naturalmente inclinado(a) a compreender as motivações dos outros.' },
        { id: 35005, text: 'Tenho curiosidade sobre o mundo interno das pessoas.' },
        { id: 35006, text: 'Consigo colocar-me no lugar do outro sem perder meu próprio ponto de vista.' },
      ],
    },
    {
      id: 'openness_to_internal_exploration',
      name: 'Abertura à Experiência',
      icon: '🪞',
      description: 'Disposição para explorar aspectos novos ou difíceis da própria personalidade sem defesa excessiva.',
      interpretationLabels: {
        level_1: 'Resistência à autoexploração.',
        level_2: 'Abertura cautelosa.',
        level_3: 'Boa disposição para o novo.',
        level_4: 'Alta abertura e curiosidade.',
      },
      questions: [
        { id: 36001, text: 'Tenho interesse genuíno em compreender meus padrões e crenças.' },
        { id: 36002, text: 'Não fujo de reflexões que possam me causar desconforto.' },
        { id: 36003, text: 'Gosto de explorar aspectos de mim que ainda não entendo bem.' },
        { id: 36004, text: 'Aceito questionamentos que desafiam a imagem que tenho de mim.' },
        { id: 36005, text: 'Considero importante compreender o lado “sombrio” da minha personalidade.' },
        { id: 36006, text: 'Sinto-me confortável em olhar para dentro, mesmo quando encontro coisas difíceis.' },
      ],
    },
    {
      id: 'integration_application_of_insight',
      name: 'Integração e Mudança',
      icon: '🔍',
      description: 'Capacidade de usar o entendimento psicológico para promover mudanças reais na vida.',
      interpretationLabels: {
        level_1: 'Insight sem mudança (intelectualização).',
        level_2: 'Aplicação difícil ou rara.',
        level_3: 'Boa aplicação de insights.',
        level_4: 'Alta integração e transformação.',
      },
      questions: [
        { id: 37001, text: 'Quando descubro algo novo sobre mim, tento aplicar isso na prática.' },
        { id: 37002, text: 'Sinto que minha autoconsciência me ajuda a tomar melhores decisões.' },
        { id: 37003, text: 'Tento mudar comportamentos a partir do que aprendo sobre mim.' },
        { id: 37004, text: 'Uso o que compreendo sobre minhas emoções para lidar melhor com os outros.' },
        { id: 37005, text: 'Consigo transformar reflexões internas em ações concretas.' },
        { id: 37006, text: 'Sinto que minha capacidade de autoconhecimento cresce com o tempo.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o grau de "mentalidade psicológica". Escores altos sugerem aptidão para psicoterapias orientadas ao insight e autoconhecimento.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Foco Externo / Concreto', 
        description: 'Tendência a focar em fatos externos e ações, com menor interesse ou habilidade em analisar motivações internas. Pode haver preferência por soluções práticas e diretivas.',
        recommendations: [
          'Psicoeducação sobre a ligação entre pensamentos, emoções e comportamentos.',
          'Exercícios simples de auto-observação (ex: diário de humor).',
          'Focar em conexões concretas antes de interpretações abstratas.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Capacidade Reflexiva em Desenvolvimento', 
        description: 'Interesse moderado pelo mundo interno. O indivíduo consegue refletir, mas pode intelectualizar (falar sobre sentimentos sem senti-los) ou evitar temas muito profundos.',
        recommendations: [
          'Incentivar a pergunta "por quê?" diante de reações próprias.',
          'Conectar o insight intelectual com a experiência emocional sentida.',
          'Praticar a empatia cognitiva em situações sociais.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Boa Capacidade de Insight', 
        description: 'O indivíduo possui recursos sólidos para autoanálise e compreensão dos outros. Bom prognóstico para terapias que exigem elaboração pessoal.',
        recommendations: [
          'Aprofundar a análise de padrões repetitivos de vida.',
          'Explorar a relação terapêutica como fonte de aprendizado.',
          'Utilizar a compreensão para guiar mudanças comportamentais efetivas.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Mentalidade Psicológica', 
        description: 'Excelente capacidade de introspecção, empatia e integração. O indivíduo valoriza a vida mental e utiliza o autoconhecimento como ferramenta de crescimento contínuo.',
        recommendations: [
          'Utilizar essa capacidade para autonomia e autogestão emocional.',
          'Cuidar para não "analisar demais" (overthinking) em detrimento da vivência espontânea.',
          'Aplicar os insights para mentorar ou apoiar o desenvolvimento de outros.'
        ]
      },
    ],
  }
};
