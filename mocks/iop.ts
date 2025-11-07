
import { InventoryForm } from '../types';

export const IOP_INVENTORY: InventoryForm = {
  id: 'iop',
  acronym: 'IOP',
  name: 'Inventário de Organização Psíquica',
  objective: 'Avaliar o nível de coesão interna, integração identitária e estabilidade emocional-estrutural do indivíduo. O instrumento identifica padrões de funcionamento psicológico que variam de uma organização integrada (neurótica) até uma organização desorganizada (limítrofe ou fragmentada).',
  instructions: 'Abaixo estão descritas diversas afirmações sobre como você costuma perceber a si mesmo e reagir diante de situações. Marque o quanto cada uma delas se aplica a você na maior parte do tempo.',
  responseScale: [
    { value: 0, label: 'Nunca ou quase nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre ou sempre' },
  ],
  domains: [
    {
      id: 'self_cohesion_continuity',
      name: 'Coesão e Continuidade do Self',
      icon: '🧠',
      description: 'Senso de identidade estável e contínuo ao longo do tempo e em diferentes situações, com clareza sobre quem se é.',
      interpretationLabels: {
        level_1: 'Identidade difusa, com forte sensação de confusão ou fragmentação.',
        level_2: 'Identidade instável, com mudanças abruptas na percepção de si.',
        level_3: 'Bom senso de identidade, com estabilidade na maior parte do tempo.',
        level_4: 'Self coeso e integrado, com um claro e estável senso de identidade.',
      },
      questions: [
        { id: 20001, text: 'Tenho uma noção clara de quem eu sou.' },
        { id: 20002, text: 'Mesmo em momentos difíceis, sinto que continuo sendo eu mesmo(a).' },
        { id: 20003, text: 'Minhas opiniões e valores mudam pouco com o tempo.' },
        { id: 20004, text: 'Consigo integrar partes diferentes da minha personalidade.' },
        { id: 20005, text: 'Raramente sinto que sou uma pessoa “dividida” ou “confusa” sobre quem sou.' },
      ],
    },
    {
      id: 'emotional_regulation_tolerance',
      name: 'Regulação Emocional e Tolerância ao Afeto',
      icon: '🌊',
      description: 'Capacidade de manejar emoções intensas sem perder o controle, mantendo o equilíbrio interno diante de frustrações.',
      interpretationLabels: {
        level_1: 'Baixa tolerância ao afeto, com forte desregulação emocional.',
        level_2: 'Dificuldade em manejar emoções intensas, com reações impulsivas.',
        level_3: 'Boa capacidade de regulação emocional na maioria das situações.',
        level_4: 'Elevada estabilidade e resiliência emocional.',
      },
      questions: [
        { id: 20101, text: 'Mesmo quando estou irritado(a) ou triste, consigo me manter equilibrado(a).' },
        { id: 20102, text: 'Tenho consciência das minhas emoções e do que as desperta.' },
        { id: 20103, text: 'Consigo acalmar-me após situações emocionalmente intensas.' },
        { id: 20104, text: 'Sinto-me capaz de lidar com frustrações sem perder o controle.' },
        { id: 20105, text: 'Evito reações impulsivas quando algo me desagrada.' },
      ],
    },
    {
      id: 'psychological_realism_judgment',
      name: 'Realismo Psicológico e Julgamento de Realidade',
      icon: '🪞',
      description: 'Habilidade de diferenciar a realidade objetiva das interpretações subjetivas, especialmente sob estresse emocional.',
      interpretationLabels: {
        level_1: 'Percepção distorcida da realidade, com dificuldade em diferenciar interno e externo.',
        level_2: 'Julgamento de realidade afetado por estados emocionais intensos.',
        level_3: 'Boa capacidade de manter o senso de realidade, mesmo sob estresse.',
        level_4: 'Forte senso de realidade, com clara distinção entre fato e interpretação.',
      },
      questions: [
        { id: 20201, text: 'Consigo perceber quando minhas emoções influenciam a forma como interpreto algo.' },
        { id: 20202, text: 'Tenho facilidade em diferenciar o que é fato do que é suposição ou interpretação.' },
        { id: 20203, text: 'Evito tirar conclusões precipitadas sobre o comportamento dos outros.' },
        { id: 20204, text: 'Reconheço quando posso estar distorcendo uma situação por estar magoado(a).' },
        { id: 20205, text: 'Costumo avaliar de forma realista minhas próprias limitações e capacidades.' },
      ],
    },
    {
      id: 'defense_mechanisms_integration',
      name: 'Mecanismos de Defesa e Integração Interna',
      icon: '🧱',
      description: 'Uso de estratégias defensivas maduras (ex: compreensão, enfrentamento) em vez de primitivas (ex: negação, cisão).',
      interpretationLabels: {
        level_1: 'Uso predominante de defesas primitivas (cisão, projeção, negação).',
        level_2: 'Uso misto de defesas, com recurso a mecanismos primitivos sob estresse.',
        level_3: 'Uso predominante de defesas mais maduras e adaptativas.',
        level_4: 'Capacidade de enfrentar a realidade com defesas flexíveis e integradas.',
      },
      questions: [
        { id: 20301, text: 'Costumo enfrentar os problemas de forma direta, sem negar o que está acontecendo.' },
        { id: 20302, text: 'Quando algo me incomoda, tento entender o motivo antes de culpar alguém.' },
        { id: 20303, text: 'Consigo reconhecer aspectos bons e ruins em mim e nos outros ao mesmo tempo.' },
        { id: 20304, text: 'Evito pensar em situações de forma “tudo ou nada”.' },
        { id: 20305, text: 'Quando me sinto ferido(a), tento compreender o que realmente está por trás do sentimento.' },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'A pontuação é a soma total das respostas (0-80). Pontuações mais altas indicam uma organização psíquica mais integrada e estável.',
    ranges: [
      { min: 65, max: 80, label: 'Organização Integrada (neurótica)', description: 'Self coeso, defesas maduras, estabilidade emocional e percepção realista.' },
      { min: 45, max: 64, label: 'Organização Moderada (limítrofe alta)', description: 'Alguma oscilação afetiva, leve confusão identitária, boa capacidade de reflexão.' },
      { min: 25, max: 44, label: 'Organização Instável (limítrofe baixa)', description: 'Flutuação emocional, defesas primitivas ocasionais, dificuldades de integração.' },
      { min: 0, max: 24, label: 'Organização Fragmentada (pré-psicótica)', description: 'Self difuso, uso intenso de cisão/projeção, instabilidade acentuada e percepção distorcida.' }
    ],
  }
};
