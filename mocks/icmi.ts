
import { InventoryForm } from '../types';

export const ICMI_INVENTORY: InventoryForm = {
  id: 'icmi',
  acronym: 'ICMI',
  name: 'Inventário de Consciência Moral e Integridade',
  objective: 'Avaliar o grau de consciência moral, coerência ética e autenticidade pessoal, identificando como o indivíduo se relaciona com valores, responsabilidade e integridade em suas ações cotidianas.',
  instructions: 'A seguir, há afirmações sobre sua forma de pensar, agir e se posicionar diante de decisões e dilemas do dia a dia.\nMarque o quanto cada uma representa você na maior parte do tempo.',
  responseScale: [
    { value: 0, label: 'Nunca ou quase nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre ou sempre' },
  ],
  domains: [
    {
      id: 'values_clarity',
      name: 'Clareza e Consistência de Valores',
      icon: '🧭',
      description: 'Avalia o quanto a pessoa conhece e mantém seus valores centrais, mesmo diante de pressões externas.',
      interpretationLabels: {
        level_1: 'Forte dificuldade em identificar ou manter valores.',
        level_2: 'Valores pouco claros ou inconsistentes.',
        level_3: 'Boa clareza e consistência de valores.',
        level_4: 'Valores centrais fortes e bem definidos.',
      },
      questions: [
        { id: 22001, text: 'Sei claramente quais são meus valores mais importantes.' },
        { id: 22002, text: 'Minhas escolhas refletem aquilo em que realmente acredito.' },
        { id: 22003, text: 'Tenho princípios que guiam minhas atitudes, mesmo quando ninguém está observando.' },
        { id: 22004, text: 'Evito agir apenas para agradar os outros, se isso contraria o que considero certo.' },
        { id: 22005, text: 'Tenho clareza sobre o que considero ético ou inaceitável.' },
      ],
    },
    {
      id: 'responsibility_authenticity',
      name: 'Responsabilidade e Autenticidade',
      icon: '🤝',
      description: 'Avalia o comprometimento com a verdade pessoal e com as consequências das próprias ações.',
      interpretationLabels: {
        level_1: 'Baixo senso de responsabilidade e autenticidade.',
        level_2: 'Responsabilidade inconsistente, com tendência a justificar erros.',
        level_3: 'Bom nível de responsabilidade e autenticidade.',
        level_4: 'Forte senso de responsabilidade e compromisso com a verdade.',
      },
      questions: [
        { id: 22101, text: 'Assumo meus erros quando percebo que causei algum prejuízo.' },
        { id: 22102, text: 'Procuro agir com transparência, mesmo que isso traga desconforto momentâneo.' },
        { id: 22103, text: 'Cumpro promessas e compromissos assumidos.' },
        { id: 22104, text: 'Não costumo justificar atitudes erradas com desculpas.' },
        { id: 22105, text: 'Procuro ser coerente entre o que falo e o que faço.' },
      ],
    },
    {
      id: 'ethical_empathy_justice',
      name: 'Empatia Ética e Justiça',
      icon: '🌱',
      description: 'Avalia a capacidade de reconhecer direitos, perspectivas e necessidades dos outros na tomada de decisão moral.',
      interpretationLabels: {
        level_1: 'Baixa empatia ética e consideração pelos outros.',
        level_2: 'Empatia limitada ou focada em interesses próprios.',
        level_3: 'Boa capacidade de considerar o impacto de suas ações nos outros.',
        level_4: 'Forte senso de justiça e empatia ética.',
      },
      questions: [
        { id: 22201, text: 'Penso nas consequências das minhas ações para as outras pessoas.' },
        { id: 22202, text: 'Procuro entender o ponto de vista dos outros antes de julgar.' },
        { id: 22203, text: 'Evito tirar vantagem de situações em que alguém possa sair prejudicado.' },
        { id: 22204, text: 'Sinto desconforto quando percebo injustiça, mesmo que não me afete diretamente.' },
        { id: 22205, text: 'Busco agir de forma justa, mesmo quando seria mais fácil fazer o contrário.' },
      ],
    },
    {
      id: 'internal_integrity_moral_self_criticism',
      name: 'Integridade Interna e Autocrítica Moral',
      icon: '🪞',
      description: 'Avalia o quanto o indivíduo se percebe íntegro e coerente, reconhecendo falhas sem se desvalorizar.',
      interpretationLabels: {
        level_1: 'Baixa integridade interna e autocrítica punitiva.',
        level_2: 'Integridade inconsistente, com autocrítica excessiva.',
        level_3: 'Bom senso de integridade e autocrítica construtiva.',
        level_4: 'Forte senso de integridade e capacidade de aprender com os erros.',
      },
      questions: [
        { id: 22301, text: 'Sinto-me em paz quando ajo de acordo com o que considero certo.' },
        { id: 22302, text: 'Consigo admitir quando ajo de forma incoerente com meus valores.' },
        { id: 22303, text: 'Penso com frequência sobre se minhas atitudes refletem quem realmente sou.' },
        { id: 22304, text: 'Tento aprender com situações em que não agi da melhor forma.' },
        { id: 22305, text: 'Esforço-me para alinhar cada vez mais meus atos aos meus princípios.' },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'A pontuação é a soma total das respostas (0-80). Pontuações mais altas indicam maior integridade moral.',
    subScoresDescription: 'A média por domínio pode ser calculada para uma análise mais detalhada.',
    ranges: [
      { min: 65, max: 80, label: 'Alta Integridade Ética', description: 'Valores claros, coerência entre fala e ação, empatia moral.' },
      { min: 45, max: 64, label: 'Integridade Funcional', description: 'Boa coerência ética, com pequenas falhas situacionais.' },
      { min: 25, max: 44, label: 'Inconsistência Ética Moderada', description: 'Conflito entre valores e conduta, racionalizações defensivas.' },
      { min: 0, max: 24, label: 'Fragmentação Moral', description: 'Falta de valores consistentes, tendência a negação ou justificação de condutas incoerentes.' },
    ],
  },
};