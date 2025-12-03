
import { InventoryForm } from '../types';

export const IES_INVENTORY: InventoryForm = {
  id: 'ies',
  acronym: 'IES',
  name: 'Inventário de Estilos de Sofrimento',
  objective: 'Identificar os padrões habituais de reação à dor emocional e frustração, compreendendo como você processa experiências difíceis.',
  instructions: 'As frases abaixo descrevem maneiras diferentes de sentir e reagir diante da dor ou frustração.\nMarque o quanto ela corresponde à sua experiência pessoal na maior parte do tempo.',
  scoreOrientation: 'higher_is_worse',
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
      id: 'self_critical_suffering',
      name: 'Estilo Internalizante (Autocrítica)',
      icon: '⚖️',
      description: 'Tendência a voltar a dor contra si mesmo, sentindo culpa, vergonha ou responsabilidade excessiva.',
      interpretationLabels: {
        level_1: 'Baixa tendência à autocrítica.',
        level_2: 'Autocrítica situacional.',
        level_3: 'Padrão moderado de internalização.',
        level_4: 'Forte internalização da dor (culpa/vergonha).',
      },
      questions: [
        { id: 11001, text: 'Quando algo dá errado, costumo me culpar excessivamente.' },
        { id: 11002, text: 'Sinto vergonha de ter emoções intensas.' },
        { id: 11003, text: 'Tenho dificuldade em me perdoar por erros passados.' },
        { id: 11004, text: 'Costumo pensar que minha dor é culpa minha.' },
        { id: 11005, text: 'Tenho medo de demonstrar fragilidade.' },
        { id: 11006, text: 'Às vezes sinto que mereço o que sofro.' },
        { id: 11007, text: 'Sinto que preciso estar sempre no controle para não errar.' },
        { id: 11008, text: 'Julgo meus sentimentos como fraqueza.' },
      ],
    },
    {
      id: 'avoidant_suffering',
      name: 'Estilo Evitativo (Supressão)',
      icon: '🚪',
      description: 'Tendência a se afastar, distrair ou negar a dor para não entrar em contato com a vulnerabilidade.',
      interpretationLabels: {
        level_1: 'Baixa evitação emocional.',
        level_2: 'Evitação leve ou situacional.',
        level_3: 'Padrão moderado de esquiva.',
        level_4: 'Forte evitação e supressão emocional.',
      },
      questions: [
        { id: 11101, text: 'Tento não pensar no que me faz sofrer.' },
        { id: 11102, text: 'Distrai-me com trabalho, telas ou tarefas para não sentir emoções difíceis.' },
        { id: 11103, text: 'Tenho medo de que, se eu sentir a dor, ela me destrua.' },
        { id: 11104, text: 'Finjo que está tudo bem para evitar conflitos.' },
        { id: 11105, text: 'Evito situações que possam me deixar vulnerável.' },
        { id: 11106, text: 'Tento controlar demais meus sentimentos para não perder o equilíbrio.' },
        { id: 11107, text: 'Tenho dificuldade em chorar ou demonstrar emoções.' },
        { id: 11108, text: 'Quando começo a sentir algo doloroso, mudo de assunto ou foco.' },
      ],
    },
    {
      id: 'dependent_suffering',
      name: 'Estilo Dependente (Busca de Apoio)',
      icon: '💞',
      description: 'Tendência a buscar regulação externa, conforto e validação de outras pessoas para lidar com a dor.',
      interpretationLabels: {
        level_1: 'Baixa dependência para regulação.',
        level_2: 'Busca de apoio equilibrada.',
        level_3: 'Dependência moderada de regulação externa.',
        level_4: 'Forte necessidade de apoio para lidar com a dor.',
      },
      questions: [
        { id: 11201, text: 'Quando sofro, preciso que alguém esteja comigo.' },
        { id: 11202, text: 'Tenho dificuldade em lidar sozinho com minhas emoções.' },
        { id: 11203, text: 'Busco aprovação para me sentir melhor emocionalmente.' },
        { id: 11204, text: 'Quando alguém me rejeita, sinto que perco o chão.' },
        { id: 11205, text: 'Preciso que as pessoas reconheçam o quanto estou mal.' },
        { id: 11206, text: 'Sinto que só melhoro quando alguém me conforta.' },
        { id: 11207, text: 'Tenho medo de ficar sozinho quando estou triste.' },
        { id: 11208, text: 'Evito discutir para não perder o apoio dos outros.' },
      ],
    },
    {
      id: 'controlled_dissociated_suffering',
      name: 'Estilo Racionalizado (Desconexão)',
      icon: '🧊',
      description: 'Tendência a analisar a dor intelectualmente, desconectando-se da experiência afetiva direta ("anestesia").',
      interpretationLabels: {
        level_1: 'Baixa racionalização da dor.',
        level_2: 'Leve tendência a intelectualizar.',
        level_3: 'Padrão moderado de desconexão.',
        level_4: 'Forte racionalização e distanciamento afetivo.',
      },
      questions: [
        { id: 11301, text: 'Tento lidar com o sofrimento de forma racional, sem me envolver emocionalmente.' },
        { id: 11302, text: 'Evito demonstrar o que sinto para não parecer fraco.' },
        { id: 11303, text: 'Sinto como se minhas emoções estivessem desligadas.' },
        { id: 11304, text: 'Prefiro resolver meus problemas sozinho e em silêncio.' },
        { id: 11305, text: 'Às vezes tenho dificuldade em sentir empatia pelas emoções dos outros.' },
        { id: 11306, text: 'Quando algo me machuca, não costumo demonstrar nada.' },
        { id: 11307, text: 'Tenho sensação de estar emocionalmente “entorpecido”.' },
        { id: 11308, text: 'Prefiro pensar do que sentir.' },
      ],
    },
    {
      id: 'existential_void_suffering',
      name: 'Estilo Existencial (Falta de Sentido)',
      icon: '🌫️',
      description: 'A dor é vivenciada como um vazio, falta de propósito ou desconexão com a vida.',
      interpretationLabels: {
        level_1: 'Baixo sofrimento existencial.',
        level_2: 'Questionamentos ocasionais.',
        level_3: 'Sensação moderada de vazio.',
        level_4: 'Forte sentimento de falta de sentido.',
      },
      questions: [
        { id: 11401, text: 'Às vezes sinto que minha vida perdeu o sentido.' },
        { id: 11402, text: 'Tenho a sensação de estar emocionalmente “vazio”.' },
        { id: 11403, text: 'Sinto que nada do que faço realmente me preenche.' },
        { id: 11404, text: 'Tenho dificuldade em encontrar propósito pessoal.' },
        { id: 11405, text: 'Às vezes me sinto desconectado de mim mesmo.' },
        { id: 11406, text: 'Sinto um tipo de dor que não sei explicar.' },
        { id: 11407, text: 'Tenho a sensação de estar vivendo no “modo automático”.' },
        { id: 11408, text: 'Sinto que nada me toca profundamente, nem mesmo coisas boas.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica a predominância de cada estilo de processamento do sofrimento.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Processamento Adaptativo', 
        description: 'Baixa utilização de mecanismos defensivos rígidos. O indivíduo tende a lidar com a dor de forma fluida e resiliente.',
        recommendations: [
          'Manter práticas de expressão emocional saudável.',
          'Valorizar a rede de apoio como complemento, não dependência.',
          'Praticar a aceitação ativa das emoções difíceis.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Mecanismos de Defesa Leves', 
        description: 'Uso ocasional de estratégias (como evitação ou racionalização) para lidar com o estresse, mas com capacidade de retorno ao equilíbrio.',
        recommendations: [
          'Observar em quais situações específicas a autocrítica ou o isolamento aumentam.',
          'Experimentar expressar sentimentos em um ambiente seguro (diário, terapia).',
          'Praticar a autocompaixão em momentos de falha.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Padrão de Enfrentamento Rígido', 
        description: 'Tendência consistente a usar um estilo específico (ex: culpar-se, isolar-se ou depender) que pode dificultar a resolução real do problema.',
        recommendations: [
          'Flexibilizar os modos de enfrentamento (ex: se tende a isolar, tentar aproximar; se tende a criticar, tentar acolher).',
          'Questionar crenças de que "sentir dor é perigoso" ou "sou culpado por sofrer".',
          'Técnicas de Mindfulness para observar a dor sem reagir automaticamente a ela.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Estilo de Sofrimento Intenso', 
        description: 'Alta predominância de mecanismos que podem perpetuar o mal-estar (vazio existencial, dissociação forte ou autocrítica punitiva).',
        recommendations: [
          'Intervenção psicoterapêutica focal para criar segurança interna.',
          'Terapia de Aceitação e Compromisso (ACT) para trabalhar a esquiva experiencial.',
          'Avaliação para quadros de humor se houver impacto funcional severo.',
          'Desenvolvimento de recursos de auto-acalmamento.'
        ]
      }
    ],
  }
};
