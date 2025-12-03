
import { InventoryForm } from '../types';

export const IAT_INVENTORY: InventoryForm = {
  id: 'iat',
  acronym: 'IAT',
  name: 'Inventário de Autoanálise e Insight Terapêutico',
  objective: 'Avaliar a capacidade de internalizar o processo terapêutico, gerando reflexões autônomas, conectando padrões e aplicando os insights na vida cotidiana.',
  instructions: 'As afirmações a seguir referem-se à sua experiência com a terapia e o autoconhecimento. Indique o quanto cada frase descreve seu comportamento habitual entre as sessões.',
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
      id: 'post_session_reflection',
      name: 'Reflexão e Continuidade',
      icon: '🧠',
      description: 'Habilidade de manter o processo terapêutico vivo fora da sessão, refletindo sobre o que foi discutido.',
      interpretationLabels: {
        level_1: 'Desconexão entre sessões.',
        level_2: 'Reflexão ocasional.',
        level_3: 'Boa continuidade reflexiva.',
        level_4: 'Processamento contínuo e profundo.',
      },
      questions: [
        { id: 5501, text: 'Costumo continuar pensando sobre os temas da terapia durante a semana.' },
        { id: 5502, text: 'Tento conectar o que falamos na sessão com o que acontece no meu dia a dia.' },
        { id: 5503, text: 'Geralmente "esqueço" a terapia assim que saio da sala.', isReversed: true },
        { id: 5504, text: 'Faço anotações ou registros mentais sobre insights importantes.' },
        { id: 5505, text: 'Relembro frases ou ideias do terapeuta quando enfrento uma situação difícil.' },
        { id: 5506, text: 'Quando algo mexe comigo na sessão, busco entender o porquê depois.' },
        { id: 5507, text: 'Sinto que o trabalho terapêutico acontece tanto dentro quanto fora da sessão.' },
        { id: 5508, text: 'As sessões despertam reflexões que duram dias.' },
      ],
    },
    {
      id: 'internal_insight_understanding',
      name: 'Insight e Conexão de Padrões',
      icon: '🧩',
      description: 'Capacidade de perceber ligações entre passado e presente, e entender as causas de comportamentos.',
      interpretationLabels: {
        level_1: 'Dificuldade em ver padrões.',
        level_2: 'Insights intelectuais pontuais.',
        level_3: 'Boa compreensão de padrões.',
        level_4: 'Visão integrada e profunda de si.',
      },
      questions: [
        { id: 5601, text: 'Consigo perceber como meu passado influencia minhas reações hoje.' },
        { id: 5602, text: 'Estou entendendo melhor a origem das minhas emoções.' },
        { id: 5603, text: 'Percebo "por que" ajo de certas maneiras que antes não entendia.' },
        { id: 5604, text: 'Tenho dificuldade em conectar os pontos da minha história.', isReversed: true },
        { id: 5605, text: 'A terapia me ajuda a enxergar coisas sobre mim que eu ignorava.' },
        { id: 5606, text: 'Identifico meus pensamentos automáticos quando eles surgem.' },
        { id: 5607, text: 'Percebo padrões repetitivos nos meus relacionamentos.' },
        { id: 5608, text: 'Às vezes entendo na teoria, mas não consigo sentir que é verdade.', isReversed: true },
      ],
    },
    {
      id: 'therapeutic_application_transfer',
      name: 'Aplicação Prática e Mudança',
      icon: '🛠️',
      description: 'Habilidade de traduzir o entendimento (insight) em mudanças reais de comportamento.',
      interpretationLabels: {
        level_1: 'Dificuldade de aplicação prática.',
        level_2: 'Mudança inconsistente.',
        level_3: 'Boa aplicação de aprendizados.',
        level_4: 'Transformação comportamental consistente.',
      },
      questions: [
        { id: 5701, text: 'Tento colocar em prática o que aprendo nas sessões.' },
        { id: 5702, text: 'Uso estratégias da terapia quando estou ansioso(a) ou triste.' },
        { id: 5703, text: 'Entendo o que preciso fazer, mas na hora H não consigo.', isReversed: true },
        { id: 5704, text: 'Tenho mudado comportamentos concretos por causa da terapia.' },
        { id: 5705, text: 'Observo minhas próprias reações como se fosse um observador externo.' },
        { id: 5706, text: 'Levo desafios do dia a dia para discutir na terapia.' },
        { id: 5707, text: 'Sinto que estou agindo de forma diferente do meu "velho eu".' },
        { id: 5708, text: 'Tenho dificuldade em lembrar das ferramentas terapêuticas no calor do momento.', isReversed: true },
      ],
    },
    {
      id: 'emotional_experiential_insight',
      name: 'Insight Emocional (Sentido)',
      icon: '❤️',
      description: 'Quando o entendimento não é apenas lógico, mas sentido emocionalmente ("cair a ficha").',
      interpretationLabels: {
        level_1: 'Insight apenas racional.',
        level_2: 'Conexão emocional ocasional.',
        level_3: 'Bons insights emocionais.',
        level_4: 'Integração profunda mente-emoção.',
      },
      questions: [
        { id: 5801, text: 'Quando descubro algo sobre mim, sinto isso no corpo e na emoção.' },
        { id: 5802, text: 'Muitas vezes entendo a lógica, mas meu sentimento não muda.', isReversed: true },
        { id: 5803, text: 'Tenho momentos de clareza que trazem alívio emocional.' },
        { id: 5804, text: 'Sinto que as peças do quebra-cabeça estão se encaixando.' },
        { id: 5805, text: 'Já tive momentos de "Ah, então é isso!" que mudaram minha perspectiva.' },
        { id: 5806, text: 'Percebo mudanças sutis na forma como sinto as coisas.' },
        { id: 5807, text: 'Sinto-me mais integrado(a) (cabeça e coração alinhados) após as sessões.' },
        { id: 5808, text: 'Ainda me sinto muito confuso(a) sobre meus sentimentos reais.', isReversed: true },
      ],
    },
    {
      id: 'reflective_autonomy',
      name: 'Autonomia Reflexiva ("Terapeuta Interno")',
      icon: '👤',
      description: 'Desenvolvimento da capacidade de se autoanalisar e se regular sem depender sempre do terapeuta.',
      interpretationLabels: {
        level_1: 'Alta dependência do terapeuta.',
        level_2: 'Autonomia emergente.',
        level_3: 'Boa capacidade de autoanálise.',
        level_4: 'Internalização da função terapêutica.',
      },
      questions: [
        { id: 5901, text: 'Consigo me fazer as perguntas certas quando estou com problemas.' },
        { id: 5902, text: 'Hoje consigo identificar meus padrões sem tanta ajuda.' },
        { id: 5903, text: 'Sinto que estou me tornando meu próprio terapeuta aos poucos.' },
        { id: 5904, text: 'Ainda preciso que o terapeuta me diga o que está acontecendo comigo.', isReversed: true },
        { id: 5905, text: 'Tenho desenvolvido uma voz interna mais sábia e compassiva.' },
        { id: 5906, text: 'Minha forma de pensar sobre mim mudou de forma duradoura.' },
        { id: 5907, text: 'Consigo me acalmar usando o que aprendi.' },
        { id: 5908, text: 'Continuo aprendendo sobre mim mesmo(a) mesmo fora da terapia.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de insight e aproveitamento terapêutico. Escores altos sugerem boa internalização do processo.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Foco Externo / Concreto', 
        description: 'A terapia pode estar sendo vivenciada de forma mais concreta ou pontual, com dificuldade em conectar sessões ou aprofundar reflexões. O foco tende a ser no alívio imediato.',
        recommendations: [
          'Usar um diário de terapia para registrar 1 aprendizado por sessão.',
          'Focar em insights pequenos e práticos antes de grandes interpretações.',
          'Explorar possíveis bloqueios emocionais que impedem a auto-observação.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Insight em Desenvolvimento', 
        description: 'Capacidade reflexiva presente, mas talvez inconsistente. Pode haver muito entendimento racional ("eu sei que faço isso"), mas dificuldade em sentir ou mudar (insight intelectual).',
        recommendations: [
          'Fazer a "ponte" entre a sessão e a vida real com tarefas comportamentais.',
          'Trabalhar a conexão corpo-mente para descer do racional para o emocional.',
          'Reforçar a autonomia na identificação de padrões.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Boa Capacidade Reflexiva', 
        description: 'O indivíduo consegue conectar passado e presente, aplicar aprendizados e se auto-observar com eficácia. A terapia está sendo integrada à vida.',
        recommendations: [
          'Estimular a pergunta: "O que essa situação diz sobre mim?".',
          'Focar na generalização dos ganhos para diversas áreas da vida.',
          'Validar a competência do paciente em resolver seus próprios dilemas.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Internalização e Autonomia', 
        description: 'Integração profunda. O paciente desenvolveu um "terapeuta interno" e usa a autoanálise como ferramenta contínua de crescimento. Alto potencial de alta ou espaçamento.',
        recommendations: [
          'Considerar espaçamento das sessões para testar a autonomia.',
          'Focar em manutenção de ganhos e prevenção de recaídas.',
          'Celebrar a consolidação da identidade terapêutica.'
        ]
      },
    ],
  }
};
