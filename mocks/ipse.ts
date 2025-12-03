
import { InventoryForm } from '../types';

export const IPSE_INVENTORY: InventoryForm = {
  id: 'ipse',
  acronym: 'IPSE',
  name: 'Inventário de Propósito de Vida e Sentido Existencial',
  objective: 'Avaliar o grau de clareza, direção e coerência existencial, medindo o quanto o indivíduo percebe significado em sua vida e alinhamento em suas ações.',
  instructions: 'Indique o quanto cada afirmação expressa seu sentimento e pensamento sobre sua vida na maior parte do tempo, usando a escala de 1 a 7.',
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
      id: 'purpose_clarity',
      name: 'Clareza de Propósito',
      icon: '🌱',
      description: 'Capacidade de identificar metas de vida pessoalmente significativas.',
       interpretationLabels: {
        level_1: 'Sensação de vazio ou confusão.',
        level_2: 'Propósito vago.',
        level_3: 'Boa definição de direção.',
        level_4: 'Alta clareza de propósito.',
      },
      questions: [
        { id: 48001, text: 'Tenho uma visão clara sobre o que quero alcançar na vida.' },
        { id: 48002, text: 'Sei o que dá sentido às minhas escolhas e decisões diárias.' },
        { id: 48003, text: 'Meus objetivos refletem quem eu realmente sou.' },
        { id: 48004, text: 'Tenho consciência de meus valores e princípios fundamentais.' },
        { id: 48005, text: 'Quando enfrento obstáculos, lembro-me do meu propósito maior.' },
        { id: 48006, text: 'As metas que sigo fazem sentido para mim, não apenas para os outros.' },
        { id: 48007, text: 'Frequentemente me sinto perdido(a) quanto à direção que quero seguir.', isReversed: true },
      ],
    },
    {
      id: 'existential_engagement',
      name: 'Engajamento Existencial',
      icon: '🔥',
      description: 'Nível de motivação e dedicação a causas ou projetos percebidos como valiosos.',
       interpretationLabels: {
        level_1: 'Desengajamento ou apatia.',
        level_2: 'Engajamento superficial.',
        level_3: 'Envolvimento ativo.',
        level_4: 'Paixão e dedicação plena.',
      },
      questions: [
        { id: 48008, text: 'Sinto-me motivado(a) por algo maior do que eu mesmo(a).' },
        { id: 48009, text: 'Tenho metas que me inspiram e me fazem levantar todos os dias.' },
        { id: 48010, text: 'Dedico energia a causas ou projetos que considero significativos.' },
        { id: 48011, text: 'Tenho disciplina e foco porque acredito no que estou fazendo.' },
        { id: 48012, text: 'Consigo lidar melhor com dificuldades quando percebo sentido no esforço.' },
        { id: 48013, text: 'As pequenas ações do meu dia refletem meu propósito de vida.' },
        { id: 48014, text: 'Às vezes me pergunto se o que faço realmente importa.', isReversed: true },
      ],
    },
    {
      id: 'existential_coherence',
      name: 'Coerência de Vida',
      icon: '🌌',
      description: 'Alinhamento entre valores internos e ações externas (autenticidade).',
       interpretationLabels: {
        level_1: 'Conflito interno ou incoerência.',
        level_2: 'Dissonância ocasional.',
        level_3: 'Boa coerência vida-valores.',
        level_4: 'Alta integridade e harmonia.',
      },
      questions: [
        { id: 48015, text: 'Minhas decisões estão alinhadas com meus valores mais profundos.' },
        { id: 48016, text: 'Sinto que há coerência entre o que penso, sinto e faço.' },
        { id: 48017, text: 'Vivo de acordo com o que considero essencial.' },
        { id: 48018, text: 'Minhas ações refletem o tipo de pessoa que quero ser.' },
        { id: 48019, text: 'Busco aprender com as dificuldades para dar mais sentido à minha existência.' },
        { id: 48020, text: 'Frequentemente sinto contradição entre o que acredito e o que faço.', isReversed: true },
        { id: 48021, text: 'Tenho um sentimento de harmonia interna quando sigo meu caminho.' },
      ],
    },
    {
      id: 'transcendence_meaning',
      name: 'Transcendência',
      icon: '🌠',
      description: 'Capacidade de encontrar significado além do self imediato.',
       interpretationLabels: {
        level_1: 'Visão centrada no imediato/material.',
        level_2: 'Percepção limitada de transcendência.',
        level_3: 'Conexão com significados amplos.',
        level_4: 'Profundo senso de conexão e legado.',
      },
      questions: [
        { id: 48022, text: 'Acredito que minha vida faz parte de uma história maior.' },
        { id: 48023, text: 'Tenho momentos de profunda conexão com a vida.' },
        { id: 48024, text: 'Vejo propósito até mesmo nas experiências difíceis.' },
        { id: 48025, text: 'Sinto que minha existência tem um papel no mundo.' },
        { id: 48026, text: 'As experiências de beleza e gratidão me fazem sentir que a vida vale a pena.' },
        { id: 48027, text: 'Costumo refletir sobre o legado que quero deixar.' },
        { id: 48028, text: 'Às vezes sinto que nada tem realmente sentido.', isReversed: true },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica a intensidade do senso de propósito. Escores mais altos refletem maior plenitude e direção existencial.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Vazio Existencial / Busca', 
        description: 'Sensação de desorientação, falta de significado ou apatia. Comum em períodos de transição ou crise, onde os valores antigos já não servem mais.',
        recommendations: [
          'Investigação de valores: O que é inegociável para mim?',
          'Pequenos atos de sentido: ajudar alguém, cuidar de algo (planta, pet).',
          'Leitura de obras inspiradoras (ex: Victor Frankl) para ressignificar o sofrimento.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Sentido em Construção', 
        description: 'Existem áreas de significado, mas falta uma narrativa coesa que integre a vida. Pode haver dúvida sobre o caminho profissional ou pessoal.',
        recommendations: [
          'Experimentação: testar novos hobbies ou projetos sem compromisso inicial.',
          'Reflexão sobre a história de vida: conectar pontos do passado com o presente.',
          'Focar no "para quem" eu faço as coisas, não só no "o quê".'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Vida com Propósito', 
        description: 'O indivíduo sente que sua vida tem direção e valor. Consegue tomar decisões alinhadas e sente satisfação na maior parte do tempo.',
        recommendations: [
          'Refinar o alinhamento: eliminar atividades que drenam energia sem sentido.',
          'Aprofundar relações que compartilhem dos mesmos valores.',
          'Praticar a gratidão pela jornada percorrida.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Plenitude Existencial', 
        description: 'Alto nível de coerência, vitalidade e transcendência. A pessoa vive sua "missão" e sente-se parte de algo maior.',
        recommendations: [
          'Focar em generatividade: passar o conhecimento adiante.',
          'Liderar iniciativas que tragam impacto social ou comunitário.',
          'Manter a conexão espiritual ou filosófica como fonte de nutrição.'
        ]
      },
    ],
  },
};
