
import { InventoryForm } from '../types';

export const ISA_INVENTORY: InventoryForm = {
  id: 'isa',
  acronym: 'ISA',
  name: 'Inventário de Satisfação e Autoeficácia',
  objective: 'Avaliar o grau de satisfação pessoal e percepção de competência para lidar com demandas da vida cotidiana, desafios e metas. O ISA investiga a autoconfiança funcional, a persistência diante de obstáculos e o sentimento de realização, compondo uma medida de autorregulação e eficácia pessoal.',
  instructions: 'Leia as afirmações abaixo e marque o quanto cada uma descreve você nas últimas semanas.',
  scoreOrientation: 'higher_is_better',
  responseScale: [
    { value: 0, label: 'Nunca ou quase nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre ou sempre' },
  ],
  domains: [
    {
      id: 'perceived_self_efficacy',
      name: 'Autoeficácia Percebida',
      icon: '🎯',
      description: 'Crença na própria capacidade de organizar e executar as ações necessárias para alcançar objetivos e lidar com desafios.',
      interpretationLabels: {
        level_1: 'Baixa confiança na própria capacidade de lidar com desafios.',
        level_2: 'Confiança moderada, com dúvidas em situações novas ou difíceis.',
        level_3: 'Boa crença na própria capacidade de resolver problemas.',
        level_4: 'Forte senso de autoeficácia e confiança para superar obstáculos.',
      },
      questions: [
        { id: 19001, text: 'Acredito na minha capacidade de resolver situações difíceis.' },
        { id: 19002, text: 'Consigo manter o foco mesmo quando enfrento obstáculos.' },
        { id: 19003, text: 'Tenho iniciativa para lidar com o que precisa ser feito.' },
        { id: 19004, text: 'Sou capaz de aprender com os erros e tentar novamente.' },
        { id: 19005, text: 'Confio em mim mesmo(a) quando preciso tomar decisões importantes.' },
      ],
    },
    {
      id: 'personal_achievement_progress',
      name: 'Realização e Progresso Pessoal',
      icon: '🌟',
      description: 'Sentimento de satisfação com as próprias conquistas e a percepção de estar avançando em direção a metas pessoais.',
      interpretationLabels: {
        level_1: 'Sensação de estagnação ou insatisfação com as próprias realizações.',
        level_2: 'Reconhecimento limitado do próprio progresso.',
        level_3: 'Bom sentimento de realização e orgulho das conquistas.',
        level_4: 'Forte senso de progresso e satisfação com a própria trajetória.',
      },
      questions: [
        { id: 19101, text: 'Sinto que estou avançando em direção aos meus objetivos.' },
        { id: 19102, text: 'Tenho orgulho das conquistas que já alcancei.' },
        { id: 19103, text: 'Percebo que estou me tornando uma pessoa melhor com o tempo.' },
        { id: 19104, text: 'Tenho clareza de que meus esforços geram resultados.' },
        { id: 19105, text: 'Sinto satisfação por ver meu próprio progresso.' },
      ],
    },
    {
      id: 'autonomy_persistence',
      name: 'Autonomia e Persistência',
      icon: '🧭',
      description: 'Capacidade de se automotivar, manter a disciplina e persistir na busca por objetivos sem depender de validação externa.',
      interpretationLabels: {
        level_1: 'Baixa persistência, com tendência a desistir facilmente.',
        level_2: 'Persistência inconsistente, dependente de motivação externa.',
        level_3: 'Boa capacidade de autonomia e disciplina para concluir tarefas.',
        level_4: 'Elevada persistência e automotivação, mesmo diante de dificuldades.',
      },
      questions: [
        { id: 19201, text: 'Sou capaz de manter meus planos mesmo quando surgem dificuldades.' },
        { id: 19202, text: 'Costumo terminar o que começo.' },
        { id: 19203, text: 'Tomo decisões sem depender excessivamente da aprovação dos outros.' },
        { id: 19204, text: 'Consigo me motivar mesmo quando não recebo apoio externo.' },
        { id: 19205, text: 'Tenho disciplina para seguir rotinas e compromissos pessoais.' },
      ],
    },
    {
      id: 'satisfaction_functional_self_esteem',
      name: 'Satisfação e Autoestima Funcional',
      icon: '💬',
      description: 'Nível de satisfação geral consigo mesmo, reconhecendo as próprias qualidades e mantendo uma autoavaliação positiva.',
      interpretationLabels: {
        level_1: 'Baixa autoestima e insatisfação com quem se é.',
        level_2: 'Autoestima frágil, dependente de conquistas externas.',
        level_3: 'Boa autoestima, com reconhecimento das próprias qualidades.',
        level_4: 'Forte senso de autovalorização e satisfação pessoal.',
      },
      questions: [
        { id: 19301, text: 'Sinto-me satisfeito(a) com quem me tornei até hoje.' },
        { id: 19302, text: 'Acredito que faço bem as coisas que são importantes para mim.' },
        { id: 19303, text: 'Reconheço minhas qualidades e pontos fortes.' },
        { id: 19304, text: 'Tenho uma relação equilibrada entre autocrítica e autovalorização.' },
        { id: 19305, text: 'Sinto orgulho das atitudes que tomo no dia a dia.' },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'A pontuação é a soma total das respostas (0-80). Pontuações mais altas indicam maior satisfação e autoeficácia.',
    ranges: [
      { min: 60, max: 80, label: 'Alta autoeficácia e satisfação pessoal', description: 'Confiança elevada, motivação e equilíbrio funcional.' },
      { min: 40, max: 59, label: 'Bom funcionamento pessoal', description: 'Boa percepção de competência e realização, com pequenas áreas de dúvida.' },
      { min: 20, max: 39, label: 'Autoeficácia moderada', description: 'Insegurança pontual, frustração ou oscilação de confiança.' },
      { min: 0, max: 19, label: 'Baixa autoeficácia e satisfação', description: 'Desânimo, baixa autoconfiança e percepção negativa de desempenho pessoal.' }
    ],
  }
};