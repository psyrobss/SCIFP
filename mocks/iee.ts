
import { InventoryForm } from '../types';

export const IEE_INVENTORY: InventoryForm = {
  id: 'iee',
  acronym: 'IEE',
  name: 'Inventário de Esquiva Experiencial',
  objective: 'Avaliar o grau em que o indivíduo evita, controla ou suprime experiências internas (emoções, pensamentos, memórias, sensações corporais) e o impacto dessa esquiva no funcionamento psicológico e interpessoal.',
  instructions: 'A seguir estão afirmações sobre como você lida com sentimentos e pensamentos difíceis. Leia com atenção e marque a opção que melhor descreve o quanto cada frase é verdadeira para você no seu cotidiano. Não existem respostas certas ou erradas — responda com sinceridade.',
  responseScale: [
    { value: 1, label: 'Nunca ou quase nunca' },
    { value: 2, label: 'Raramente' },
    { value: 3, label: 'Às vezes' },
    { value: 4, label: 'Frequentemente' },
    { value: 5, label: 'Quase sempre ou sempre' },
  ],
  domains: [
    {
      id: 'emotional_avoidance',
      name: 'Evitação Emocional (EE)',
      icon: '🧩',
      description: 'Tendência a evitar, suprimir ou se afastar de emoções negativas.',
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
      name: 'Supressão Cognitiva (SC)',
      icon: '💭',
      description: 'Esforço para controlar ou eliminar pensamentos, memórias ou imagens mentais indesejadas.',
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
      name: 'Evitação Corporal e Sensorial (ECS)',
      icon: '⚖️',
      description: 'Tendência a evitar ou ignorar sensações físicas desconfortáveis associadas a emoções.',
      questions: [
        { id: 76011, text: 'Evito perceber sensações físicas que me incomodam, como tensão ou batimentos rápidos.' },
        { id: 76012, text: 'Sinto-me desconfortável ao notar reações corporais ligadas à emoção (ex: coração acelerado).' },
        { id: 76013, text: 'Quando algo me causa desconforto físico, faço de tudo para ignorar.' },
        { id: 76014, text: 'Tenho dificuldade em tolerar o mal-estar físico associado à ansiedade.' },
        { id: 76015, text: 'Tento evitar qualquer sensação corporal que me lembre de situações difíceis.' },
      ],
    },
    {
      id: 'psychological_rigidity_control',
      name: 'Controle e Rigidez Psicológica (CRP)',
      icon: '🌪️',
      description: 'Necessidade de controlar rigidamente as experiências internas, acreditando que a falta de controle é perigosa.',
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
      name: 'Abertura e Aceitação Experiencial (AAE)',
      icon: '🌱',
      description: 'Capacidade de observar e acolher experiências internas sem julgamento (fator reverso).',
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
    type: 'sum',
    description: 'A pontuação total indica o nível de esquiva experiencial. Pontuações mais altas refletem maior tendência à evitação de experiências internas.',
    notes: [
      'Itens do fator "Abertura e Aceitação Experiencial (AAE)" são revertidos na pontuação (1=5, 2=4, etc.).'
    ],
    ranges: [
        { min: 25, max: 49, label: 'Baixa esquiva experiencial', description: 'Alta aceitação e flexibilidade psicológica.' },
        { min: 50, max: 74, label: 'Esquiva moderada', description: 'Tendência a controlar emoções e pensamentos, com algum impacto funcional.' },
        { min: 75, max: 100, label: 'Alta esquiva experiencial', description: 'Rigidez psicológica acentuada, com evitação frequente de experiências internas.' },
        { min: 101, max: 125, label: 'Esquiva clinicamente significativa', description: 'Padrão evitativo que provavelmente causa sofrimento emocional e comportamental elevado.' },
    ],
  },
};