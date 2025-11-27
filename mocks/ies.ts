
import { InventoryForm } from '../types';

export const IES_INVENTORY: InventoryForm = {
  id: 'ies',
  acronym: 'IES',
  name: 'Inventário de Estilos de Sofrimento',
  objective: 'Avaliar os padrões psicológicos de sofrimento — a forma como o indivíduo vivencia, regula e expressa a dor emocional —, considerando dimensões como autocrítica, evitação, dependência, controle, vazio e resignação. O instrumento permite compreender como o paciente sofre e tenta se proteger, oferecendo dados clínicos úteis para ajustar estratégias terapêuticas e metacognitivas.',
  instructions: 'As frases abaixo descrevem maneiras diferentes de sentir e reagir diante da dor, frustração ou sofrimento emocional.\nLeia cada uma e marque o quanto ela corresponde à sua experiência pessoal na maior parte do tempo.',
  responseScale: [
    { value: 0, label: 'Nunca é verdade para mim' },
    { value: 1, label: 'Raramente é verdade para mim' },
    { value: 2, label: 'Às vezes é verdade para mim' },
    { value: 3, label: 'Frequentemente é verdade para mim' },
    { value: 4, label: 'Quase sempre é verdade para mim' },
  ],
  domains: [
    {
      id: 'self_critical_suffering',
      name: 'Sofrimento Autocrítico',
      icon: '⚖️',
      description: 'Padrão de sofrimento marcado pela culpa, vergonha e autojulgamento, onde a dor é internalizada como uma falha pessoal.',
      interpretationLabels: {
        level_1: 'Baixa tendência ao sofrimento autocrítico.',
        level_2: 'Sofrimento autocrítico leve ou situacional.',
        level_3: 'Padrão moderado de culpa e autojulgamento.',
        level_4: 'Forte padrão de sofrimento autocrítico, com vergonha e autopunição.',
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
      name: 'Sofrimento Evitativo',
      icon: '🚪',
      description: 'Tendência a negar, suprimir ou se distrair da dor emocional, evitando o contato com a própria vulnerabilidade.',
      interpretationLabels: {
        level_1: 'Baixo uso de estratégias evitativas.',
        level_2: 'Tendência leve a evitar ou suprimir emoções.',
        level_3: 'Padrão moderado de evitação emocional.',
        level_4: 'Forte padrão de evitação e negação do sofrimento.',
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
      name: 'Sofrimento Dependente',
      icon: '💞',
      description: 'A dor é vivenciada com uma forte necessidade de apoio externo, validação e conforto para ser manejada.',
      interpretationLabels: {
        level_1: 'Baixa dependência emocional para lidar com o sofrimento.',
        level_2: 'Busca por apoio externo de forma equilibrada.',
        level_3: 'Padrão moderado de dependência para regulação emocional.',
        level_4: 'Forte necessidade de validação e apoio externo para lidar com a dor.',
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
      name: 'Sofrimento Controlado ou Dissociado',
      icon: '🧊',
      description: 'Padrão de desconexão afetiva, onde o sofrimento é racionalizado e a expressão emocional é contida ou "anestesiada".',
      interpretationLabels: {
        level_1: 'Baixa tendência à dissociação ou controle excessivo.',
        level_2: 'Uso leve de racionalização para lidar com a dor.',
        level_3: 'Padrão moderado de desconexão emocional.',
        level_4: 'Forte padrão de sofrimento dissociado ou "anestesiado".',
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
      name: 'Sofrimento Existencial ou de Vazio',
      icon: '🌫️',
      description: 'A dor está ligada a uma sensação de falta de sentido, propósito ou conexão consigo mesmo e com a vida.',
      interpretationLabels: {
        level_1: 'Baixo nível de sofrimento existencial.',
        level_2: 'Questionamentos existenciais leves ou ocasionais.',
        level_3: 'Padrão moderado de vazio e falta de sentido.',
        level_4: 'Forte sensação de vazio existencial e desconexão.',
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
    description: 'A pontuação é a média das respostas (0-4), representando a intensidade e o estilo do sofrimento.',
    ranges: [
      { 
        min: 0, 
        max: 0.9, 
        label: 'Manejo Emocional Adaptativo', 
        description: 'O indivíduo demonstra boa capacidade de lidar com a dor e frustração, sem recorrer a mecanismos rígidos de evitação, culpa ou dependência.',
        recommendations: [
          'Manter práticas de autoconhecimento e expressão emocional saudável.',
          'Fortalecer a rede de apoio como fator de proteção.',
          'Praticar a aceitação ativa das emoções difíceis como parte da vida.'
        ]
      },
      { 
        min: 1, 
        max: 1.9, 
        label: 'Sofrimento Leve / Reativo', 
        description: 'Presença de alguns padrões desadaptativos (como leve evitação ou autocrítica) em momentos de maior estresse, mas com recuperação funcional.',
        recommendations: [
          'Identificar gatilhos que ativam a autocrítica ou a necessidade de isolamento.',
          'Praticar a autocompaixão em momentos de falha ou dor.',
          'Experimentar expressar sentimentos em um ambiente seguro (diário, terapia).'
        ]
      },
      { 
        min: 2, 
        max: 2.9, 
        label: 'Padrões Desadaptativos Moderados', 
        description: 'Tendência consistente a lidar com o sofrimento de forma que pode perpetuá-lo (ex: ruminar culpa, evitar contato, depender excessivamente). Requer atenção clínica.',
        recommendations: [
          'Psicoterapia para flexibilizar os modos de enfrentamento.',
          'Treinamento em Regulação Emocional para reduzir a necessidade de evitação.',
          'Questionar crenças de que "sentir dor é perigoso" ou "sou culpado por sofrer".',
          'Técnicas de Mindfulness para observar a dor sem se fundir a ela.'
        ]
      },
      { 
        min: 3, 
        max: 4, 
        label: 'Estilo de Sofrimento Disfuncional Severo', 
        description: 'Padrões rígidos e intensos de sofrimento (ex: vazio existencial profundo, dissociação forte ou autocrítica punitiva). Alto risco de agravamento clínico (depressão, ansiedade).',
        recommendations: [
          'Intervenção psicoterapêutica focal e intensiva.',
          'Terapia de Aceitação e Compromisso (ACT) para trabalhar a esquiva experiencial.',
          'Avaliação para quadros depressivos ou traumáticos.',
          'Desenvolvimento urgente de recursos de auto-acalmamento e segurança interna.'
        ]
      }
    ],
  }
};
