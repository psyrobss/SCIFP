
import { InventoryForm } from '../types';

export const IFEC_INVENTORY: InventoryForm = {
  id: 'ifec',
  acronym: 'IFEC',
  name: 'Inventário de Funções Executivas no Cotidiano (IFEC)',
  objective: 'Avaliar, por autorrelato, o funcionamento executivo percebido em situações cotidianas, incluindo planejamento, flexibilidade, autocontrole e monitoramento de desempenho.',
  instructions: 'A seguir, estão frases sobre como você costuma lidar com tarefas, decisões e situações do dia a dia. Marque a opção que melhor descreve o que geralmente acontece com você.',
  responseScale: [
    { value: 0, label: 'Nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre' },
  ],
  domains: [
    {
      id: 'planning_organization',
      name: 'Planejamento e Organização',
      icon: '🗓️',
      description: 'Mede a capacidade de estruturar tarefas, definir prioridades e gerenciar o tempo de forma eficaz.',
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
      description: 'Avalia a habilidade de se adaptar a mudanças, considerar diferentes perspectivas e alterar planos quando necessário.',
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
      name: 'Controle Inibitório e Autocontrole',
      icon: '⏱️',
      description: 'Mede a capacidade de conter impulsos, resistir a distrações e regular reações emocionais e comportamentais.',
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
      description: 'Avalia a habilidade de perceber os próprios erros, revisar o desempenho e ajustar o comportamento conforme necessário.',
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
      icon: '🧩',
      description: 'Mede a capacidade de iniciar tarefas de forma autônoma e superar a procrastinação.',
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
    description: 'A pontuação média (0-4) reflete o nível de disfunção executiva percebida. Escores mais altos indicam maiores dificuldades.',
    ranges: [
      { min: 0, max: 0.9, label: 'Funcionamento Executivo Eficaz', description: 'Alta capacidade de planejamento, flexibilidade e autocontrole.' },
      { min: 1, max: 1.9, label: 'Dificuldades Executivas Leves', description: 'Dificuldades pontuais, principalmente em situações de estresse.' },
      { min: 2, max: 2.9, label: 'Disfunção Executiva Moderada', description: 'Dificuldades persistentes com impacto na rotina e produtividade.' },
      { min: 3, max: 4, label: 'Disfunção Executiva Significativa', description: 'Forte impacto no funcionamento diário; sugere-se avaliação aprofundada.' },
    ],
  }
};
