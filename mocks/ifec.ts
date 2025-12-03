
import { InventoryForm } from '../types';

export const IFEC_INVENTORY: InventoryForm = {
  id: 'ifec',
  acronym: 'IFEC',
  name: 'Inventário de Funções Executivas no Cotidiano (IFEC)',
  objective: 'Avaliar o funcionamento executivo percebido em situações cotidianas, focando na capacidade de autogerenciamento, planejamento e regulação.',
  instructions: 'Para cada frase, escolha a opção que melhor descreve como você lida com as situações do dia a dia. Seja honesto sobre suas facilidades e dificuldades.',
  responseScale: [
    { value: 1, label: 'Discordo Totalmente' },
    { value: 2, label: 'Discordo Fortemente' },
    { value: 3, label: 'Discordo em Parte' },
    { value: 4, label: 'Neutro / Às vezes' },
    { value: 5, label: 'Concordo em Parte' },
    { value: 6, label: 'Concordo Fortemente' },
    { value: 7, label: 'Concordo Totalmente' },
  ],
  domains: [
    {
      id: 'planning_organization',
      name: 'Planejamento e Organização',
      icon: '🗓️',
      description: 'Capacidade de estruturar tarefas e gerenciar o tempo.',
      interpretationLabels: {
        level_1: 'Planejamento eficaz.',
        level_2: 'Desorganização ocasional.',
        level_3: 'Dificuldades frequentes de organização.',
        level_4: 'Desafios significativos em planejamento.',
      },
      questions: [
        { id: 1301, text: 'Tenho dificuldade em organizar minhas tarefas diárias.' },
        { id: 1302, text: 'Costumo subestimar o tempo necessário para fazer as coisas.' },
        { id: 1303, text: 'Tenho dificuldade em definir prioridades.' },
        { id: 1304, text: 'Começo várias tarefas sem terminar nenhuma.' },
        { id: 1305, text: 'Tenho dificuldade em manter uma rotina estruturada.' },
        { id: 1306, text: 'Esqueço compromissos ou atividades importantes por falta de planejamento.' },
      ],
    },
    {
      id: 'cognitive_flexibility',
      name: 'Flexibilidade Cognitiva',
      icon: '🔄',
      description: 'Habilidade de se adaptar a mudanças e alterar planos.',
      interpretationLabels: {
        level_1: 'Boa flexibilidade e adaptação.',
        level_2: 'Leve resistência a mudanças.',
        level_3: 'Dificuldade moderada de adaptação.',
        level_4: 'Rigidez cognitiva significativa.',
      },
      questions: [
        { id: 1401, text: 'Tenho dificuldade em mudar de plano quando algo dá errado.' },
        { id: 1402, text: 'Fico confuso(a) quando preciso adaptar-me a novas situações.' },
        { id: 1403, text: 'Sinto-me incomodado(a) quando algo não sai exatamente como planejei.' },
        { id: 1404, text: 'Tenho dificuldade em ver um problema de diferentes maneiras.' },
        { id: 1405, text: 'Fico preso(a) a uma única forma de resolver as coisas.' },
        { id: 1406, text: 'Tenho dificuldade em aceitar mudanças inesperadas.' },
      ],
    },
    {
      id: 'inhibitory_control',
      name: 'Controle Inibitório',
      icon: '⏱️',
      description: 'Capacidade de conter impulsos e regular reações.',
      interpretationLabels: {
        level_1: 'Bom autocontrole.',
        level_2: 'Impulsividade ocasional.',
        level_3: 'Dificuldade moderada de inibição.',
        level_4: 'Desafios significativos de autocontrole.',
      },
      questions: [
        { id: 1501, text: 'Falo sem pensar nas consequências.' },
        { id: 1502, text: 'Tenho dificuldade em conter impulsos ou reações emocionais.' },
        { id: 1503, text: 'Interrompo os outros com frequência em conversas.' },
        { id: 1504, text: 'Faço coisas automaticamente e só depois percebo que não deveria.' },
        { id: 1505, text: 'Tenho dificuldade em resistir a distrações durante tarefas importantes.' },
        { id: 1506, text: 'Tenho dificuldade em esperar minha vez em situações sociais.' },
      ],
    },
    {
      id: 'monitoring_self_correction',
      name: 'Monitoramento e Autocorreção',
      icon: '📊',
      description: 'Habilidade de perceber erros e ajustar o comportamento.',
      interpretationLabels: {
        level_1: 'Dificuldade em perceber e corrigir erros.',
        level_2: 'Monitoramento inconsistente.',
        level_3: 'Boa capacidade de automonitoramento.',
        level_4: 'Excelente capacidade de autocorreção.',
      },
      questions: [
        { id: 1601, text: 'Percebo rapidamente quando cometo erros.', isReversed: true },
        { id: 1602, text: 'Costumo revisar minhas tarefas para verificar se estão corretas.', isReversed: true },
        { id: 1603, text: 'Tenho dificuldade em perceber quando minha atenção diminui.' },
        { id: 1604, text: 'Continuo insistindo em algo mesmo quando percebo que não está dando certo.' },
        { id: 1605, text: 'Consigo avaliar o quanto fui eficaz em uma tarefa.', isReversed: true },
        { id: 1606, text: 'Tenho dificuldade em ajustar meu comportamento conforme o feedback que recebo.' },
      ],
    },
    {
      id: 'initiation_motivation',
      name: 'Iniciação e Motivação',
      icon: '🚀',
      description: 'Capacidade de iniciar tarefas de forma autônoma.',
      interpretationLabels: {
        level_1: 'Alta iniciativa e motivação.',
        level_2: 'Procrastinação leve ou ocasional.',
        level_3: 'Dificuldade frequente para iniciar tarefas.',
        level_4: 'Inércia ou procrastinação significativa.',
      },
      questions: [
        { id: 1701, text: 'Tenho dificuldade em começar tarefas, mesmo as simples.' },
        { id: 1702, text: 'Procrastino mesmo quando sei o que devo fazer.' },
        { id: 1703, text: 'Sinto-me desmotivado(a) para iniciar atividades rotineiras.' },
        { id: 1704, text: 'Preciso de pressão externa (prazo, cobrança) para agir.' },
        { id: 1705, text: 'Adio compromissos até o último momento possível.' },
        { id: 1706, text: 'Tenho dificuldade em dar o primeiro passo em projetos ou decisões.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) reflete o perfil executivo. Escores mais altos em itens diretos indicam maiores desafios executivos.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Funcionamento Executivo Eficaz', 
        description: 'Indica boa capacidade de autogerenciamento, planejamento e flexibilidade. O indivíduo provavelmente consegue lidar bem com demandas cotidianas sem suporte externo intensivo.',
        recommendations: [
          'Manter desafios cognitivos para preservar a função executiva.',
          'Pode atuar como mentor ou organizador em contextos de grupo.',
          'Continuar utilizando estratégias intuitivas de organização.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Desafios Executivos Leves', 
        description: 'Falhas ocasionais na organização ou controle de impulsos, geralmente exacerbadas por cansaço ou estresse. Não chega a comprometer gravemente a independência, mas pode gerar retrabalho.',
        recommendations: [
          'Uso de ferramentas externas (agendas, apps de tarefas) para reduzir carga mental.',
          'Técnicas de "time-blocking" para melhorar a gestão do tempo.',
          'Mindfulness para melhorar o foco e reduzir a reatividade sob estresse.',
          'Higiene do sono para otimizar o funcionamento frontal.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Disfunção Executiva Moderada', 
        description: 'Dificuldades consistentes em iniciar tarefas, manter o foco ou regular impulsos. Impacto perceptível na produtividade e na gestão doméstica. Comum em quadros de TDAH ou sobrecarga cognitiva.',
        recommendations: [
          'Avaliação clínica para transtornos de déficit de atenção.',
          'Terapia Cognitivo-Comportamental (TCC) focada em treino de habilidades executivas.',
          'Quebrar tarefas complexas em passos menores (micro-passos).',
          'Externalizar a motivação (trabalhar com parceiros de responsabilidade).'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Disfunção Executiva Significativa', 
        description: 'Prejuízo acentuado na capacidade de autogerenciamento. Dificuldade marcante em iniciar, planejar e concluir atividades. Requer suporte externo e estratégias compensatórias robustas.',
        recommendations: [
          'Avaliação neuropsicológica e psiquiátrica urgente.',
          'Reabilitação neuropsicológica focada em compensação de déficits.',
          'Suporte familiar ou profissional para estruturação do ambiente e rotina.',
          'Simplificação do ambiente para reduzir distrações e demandas de decisão.'
        ]
      },
    ],
  }
};
