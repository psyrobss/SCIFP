
import { InventoryForm } from '../types';

export const IEE_INVENTORY: InventoryForm = {
  id: 'iee',
  acronym: 'IEE',
  name: 'Inventário de Esquiva Experiencial',
  objective: 'Avaliar a tendência a evitar experiências internas (pensamentos, emoções, memórias) e o impacto dessa esquiva na flexibilidade psicológica.',
  instructions: 'Indique o quanto cada afirmação é verdadeira para você, refletindo como você lida com sentimentos e pensamentos difíceis, usando a escala de 1 a 7.',
  scoreOrientation: 'higher_is_worse',
  responseScale: [
    { value: 1, label: 'Nunca ou quase nunca' },
    { value: 2, label: 'Raramente' },
    { value: 3, label: 'Às vezes' },
    { value: 4, label: 'Frequentemente' },
    { value: 5, label: 'Muito Frequentemente' },
    { value: 6, label: 'Quase sempre' },
    { value: 7, label: 'Sempre' },
  ],
  domains: [
    {
      id: 'emotional_avoidance',
      name: 'Evitação Emocional',
      icon: '🧩',
      description: 'Esforço para não sentir emoções desconfortáveis, fugindo de situações ou suprimindo o afeto.',
      questions: [
        { id: 76001, text: 'Tento não sentir emoções negativas, mesmo quando elas surgem.' },
        { id: 76002, text: 'Evito situações que possam me deixar triste ou frustrado.' },
        { id: 76003, text: 'Quando fico com raiva, costumo me afastar ou me calar para não sentir mais.' },
        { id: 76004, text: 'Esforço-me para esconder o que realmente sinto das outras pessoas.' },
        { id: 76005, text: 'Tenho dificuldade em aceitar quando estou sofrendo emocionalmente.' },
      ],
    },
    {
      id: 'cognitive_suppression',
      name: 'Supressão de Pensamentos',
      icon: '💭',
      description: 'Tentativa de controlar ou eliminar pensamentos indesejados.',
      questions: [
        { id: 76006, text: 'Tento “desligar” pensamentos ruins assim que eles aparecem.' },
        { id: 76007, text: 'Procuro distrações para não pensar em problemas emocionais.' },
        { id: 76008, text: 'Às vezes, penso tanto em evitar algo que acabo ficando mais ansioso.' },
        { id: 76009, text: 'Tento controlar meus pensamentos para não perder o controle de mim mesmo.' },
        { id: 76010, text: 'Quando lembro de algo doloroso, mudo de assunto mentalmente.' },
      ],
    },
    {
      id: 'body_sensory_avoidance',
      name: 'Evitação de Sensações Físicas',
      icon: '⚖️',
      description: 'Intolerância a sensações corporais ligadas à ansiedade ou desconforto.',
      questions: [
        { id: 76011, text: 'Evito perceber sensações físicas que me incomodam, como tensão ou batimentos rápidos.' },
        { id: 76012, text: 'Sinto-me desconfortável ao notar reações corporais ligadas à emoção.' },
        { id: 76013, text: 'Quando algo me causa desconforto físico, faço de tudo para ignorar.' },
        { id: 76014, text: 'Tenho dificuldade em tolerar o mal-estar físico associado à ansiedade.' },
        { id: 76015, text: 'Tento evitar qualquer sensação corporal que me lembre de situações difíceis.' },
      ],
    },
    {
      id: 'psychological_rigidity_control',
      name: 'Rigidez e Controle',
      icon: '🌪️',
      description: 'Crença de que é necessário controlar a experiência interna para viver bem.',
      questions: [
        { id: 76016, text: 'Sinto necessidade de controlar o que sinto para não “perder o rumo”.' },
        { id: 76017, text: 'Acho perigoso deixar as emoções fluírem livremente.' },
        { id: 76018, text: 'Sinto que, se eu aceitar certas emoções, elas vão me dominar.' },
        { id: 76019, text: 'Esforço-me constantemente para manter a calma, mesmo quando algo me afeta.' },
        { id: 76020, text: 'A ideia de “aceitar o que sinto” me parece sinal de fraqueza.' },
      ],
    },
    {
      id: 'experiential_acceptance_openness',
      name: 'Aceitação e Abertura (Adaptativo)',
      icon: '🌱',
      description: 'Capacidade de acolher experiências internas sem julgamento (itens reversos).',
      questions: [
        { id: 76021, text: 'Tento observar minhas emoções sem julgá-las.', isReversed: true },
        { id: 76022, text: 'Quando algo me incomoda, permito que a sensação venha e vá.', isReversed: true },
        { id: 76023, text: 'Consigo conviver com emoções desagradáveis sem tentar mudá-las.', isReversed: true },
        { id: 76024, text: 'Tenho aprendido a acolher meus sentimentos em vez de lutar contra eles.', isReversed: true },
        { id: 76025, text: 'Encaro meus pensamentos e emoções como parte natural da vida.', isReversed: true },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de esquiva experiencial. Escores mais altos sugerem maior rigidez e evitação, enquanto escores baixos indicam maior flexibilidade psicológica.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Flexibilidade Psicológica', 
        description: 'Capacidade de estar em contato com o momento presente e com as experiências internas (boas ou ruins) sem defesa excessiva. O indivíduo age de acordo com seus valores.',
        recommendations: [
          'Manter a prática de aceitação radical.',
          'Utilizar a abertura emocional para aprofundar relacionamentos.',
          'Continuar agindo em direção ao que importa, mesmo com desconforto.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Esquiva Moderada', 
        description: 'Tendência a evitar desconfortos maiores, o que pode limitar algumas áreas da vida. O controle funciona em situações leves, mas falha sob estresse.',
        recommendations: [
          'Identificar "custos da esquiva": o que estou perdendo ao tentar não sentir?',
          'Praticar "ficar com a emoção" por pequenos períodos.',
          'Diferenciar dor (inevitável) de sofrimento (luta contra a dor).'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Rigidez Psicológica', 
        description: 'Esforço significativo para controlar pensamentos e sentimentos. A vida pode estar se estreitando para evitar gatilhos de ansiedade ou dor.',
        recommendations: [
          'Terapia de Aceitação e Compromisso (ACT).',
          'Exercícios de desfusão cognitiva ("estou tendo o pensamento de que...").',
          'Focar em ações valorizadas, independentemente do estado interno.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Esquiva Experiencial', 
        description: 'A luta contra a experiência interna é a prioridade, consumindo muita energia e restringindo severamente a vida. Alto risco de transtornos emocionais.',
        recommendations: [
          'Intervenção focada em aceitação e redução do controle.',
          'Mindfulness para desenvolver a posição de observador.',
          'Reconectar com valores perdidos devido à evitação.',
          'Validar que a tentativa de controle é o problema, não a solução.'
        ]
      },
    ],
  },
};
