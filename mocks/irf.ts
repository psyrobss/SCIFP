
import { InventoryForm } from '../types';

export const IRF_INVENTORY: InventoryForm = {
  id: 'irf',
  acronym: 'IRF',
  name: 'Inventário de Resiliência e Flexibilidade Psicológica',
  objective: 'Mapear a capacidade de adaptação, recuperação e aprendizado diante de adversidades, identificando os recursos internos disponíveis para lidar com o estresse.',
  instructions: 'Leia cada afirmação e assinale o quanto ela descreve seu comportamento ou pensamento na maior parte do tempo, usando a escala de 1 a 7.',
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
      id: 'emotional_resilience',
      name: 'Recuperação Emocional',
      icon: '💪',
      description: 'Capacidade de retomar o equilíbrio e a clareza após vivenciar emoções intensas ou situações difíceis.',
      interpretationLabels: {
        level_1: 'Necessidade de fortalecer recursos de recuperação.',
        level_2: 'Recuperação emocional em desenvolvimento.',
        level_3: 'Boa capacidade de restabelecer o equilíbrio.',
        level_4: 'Alta resiliência e estabilidade emocional.',
      },
      questions: [
        { id: 31001, text: 'Consigo me recuperar razoavelmente bem após um dia difícil.' },
        { id: 31002, text: 'Mesmo estressado(a), consigo manter uma perspectiva funcional das coisas.' },
        { id: 31003, text: 'Sinto que possuo ferramentas internas para lidar com mudanças inesperadas.' },
        { id: 31004, text: 'Em momentos de frustração, consigo evitar que o sentimento me paralise.' },
        { id: 31005, text: 'Consigo extrair aprendizados mesmo de situações dolorosas.' },
        { id: 31006, text: 'Tenho paciência comigo mesmo(a) enquanto processo sentimentos difíceis.' },
        { id: 31007, text: 'Confio que serei capaz de superar a maioria dos problemas que enfrento.' },
      ],
    },
    {
      id: 'cognitive_flexibility',
      name: 'Flexibilidade Cognitiva e Adaptação',
      icon: '🔄',
      description: 'Habilidade de ajustar o pensamento, ver diferentes ângulos e mudar de estratégia quando necessário.',
      interpretationLabels: {
        level_1: 'Preferência por rotinas fixas e previsibilidade.',
        level_2: 'Alguma dificuldade em mudar de ideia ou plano.',
        level_3: 'Boa capacidade de adaptação mental.',
        level_4: 'Alta flexibilidade e abertura a novas perspectivas.',
      },
      questions: [
        { id: 31008, text: 'Consigo considerar diferentes pontos de vista antes de tomar uma decisão.' },
        { id: 31009, text: 'Se um plano falha, consigo pensar rapidamente em uma alternativa.' },
        { id: 31010, text: 'Estou disposto(a) a mudar de opinião diante de novas informações.' },
        { id: 31011, text: 'Não fico insistindo na mesma estratégia se percebo que não funciona.' },
        { id: 31012, text: 'Consigo lidar com situações em que as regras não são totalmente claras.' },
        { id: 31013, text: 'Ajusto minhas expectativas conforme a realidade se apresenta.' },
        { id: 31014, text: 'Encontro soluções criativas para problemas do dia a dia.' },
      ],
    },
    {
      id: 'behavioral_flexibility',
      name: 'Ajuste Comportamental',
      icon: '🏃',
      description: 'Capacidade de alterar ações e hábitos para responder melhor às demandas do ambiente.',
      interpretationLabels: {
        level_1: 'Dificuldade em alterar comportamentos habituais.',
        level_2: 'Adaptação comportamental requer esforço significativo.',
        level_3: 'Bom ajuste de ações ao contexto.',
        level_4: 'Fluidez e facilidade em adaptar o comportamento.',
      },
      questions: [
        { id: 31015, text: 'Consigo alterar minha rotina sem sentir grande desconforto.' },
        { id: 31016, text: 'Sei me comportar adequadamente em diferentes ambientes sociais.' },
        { id: 31017, text: 'Uso o feedback que recebo para melhorar minhas atitudes.' },
        { id: 31018, text: 'Posso assumir novas responsabilidades quando a situação exige.' },
        { id: 31019, text: 'Percebo quando um comportamento meu está atrapalhando e tento mudar.' },
        { id: 31020, text: 'Estou aberto(a) a experimentar novas formas de fazer as coisas.' },
        { id: 31021, text: 'Lido com imprevistos focando na solução, não apenas no problema.' },
      ],
    },
    {
      id: 'support_personal_resources',
      name: 'Uso de Recursos e Suporte',
      icon: '🤝',
      description: 'Habilidade de identificar e utilizar ajudas internas (forças pessoais) e externas (rede de apoio).',
      interpretationLabels: {
        level_1: 'Tendência ao isolamento em crises.',
        level_2: 'Dificuldade ocasional em pedir ou aceitar ajuda.',
        level_3: 'Bom uso de recursos de suporte.',
        level_4: 'Excelente mobilização de recursos e rede de apoio.',
      },
      questions: [
        { id: 31022, text: 'Sei pedir ajuda quando percebo que não dou conta sozinho(a).' },
        { id: 31023, text: 'Reconheço minhas qualidades e as utilizo a meu favor.' },
        { id: 31024, text: 'Aceito o apoio de amigos e familiares em momentos difíceis.' },
        { id: 31025, text: 'Tenho estratégias pessoais que me ajudam a relaxar e focar.' },
        { id: 31026, text: 'Busco informações ou orientação quando enfrento algo novo.' },
        { id: 31027, text: 'Consigo me automotivar lembrando de superações passadas.' },
        { id: 31028, text: 'Entendo que precisar de outros é parte da força humana, não fraqueza.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de recursos de resiliência disponíveis. Escores altos sugerem boa adaptabilidade.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Resiliência em Construção', 
        description: 'Momento de maior vulnerabilidade a estressores. Pode haver sensação de sobrecarga diante de mudanças. É importante focar em segurança e pequenos passos.',
        recommendations: [
          'Estabelecer rotinas previsíveis para reduzir a ansiedade.',
          'Identificar uma pessoa de confiança para suporte.',
          'Validar as dificuldades atuais sem autocrítica excessiva.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Recursos Adaptativos em Desenvolvimento', 
        description: 'Capacidade funcional de lidar com o cotidiano, mas desafios maiores podem exigir mais esforço. Há espaço para ampliar a flexibilidade mental.',
        recommendations: [
          'Praticar o "Plano B": pensar em alternativas para situações simples.',
          'Exercícios de respiração para momentos de tensão.',
          'Relembrar situações passadas que foram superadas.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Boa Capacidade de Resiliência', 
        description: 'O indivíduo possui recursos sólidos para enfrentar adversidades. Consegue equilibrar persistência com adaptação na maioria das vezes.',
        recommendations: [
          'Refinar o autoconhecimento sobre quais estratégias funcionam melhor.',
          'Ampliar a rede de contatos e interesses.',
          'Praticar a aceitação ativa daquilo que não se pode controlar.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Flexibilidade e Recursos', 
        description: 'Excelente repertório de enfrentamento. Capacidade de ver crises como oportunidades e de se recuperar com agilidade (bouncing back).',
        recommendations: [
          'Utilizar a própria experiência para mentoria ou apoio a outros.',
          'Manter práticas de autocuidado para sustentar a alta performance.',
          'Continuar buscando desafios que estimulem o crescimento.'
        ]
      },
    ],
  },
};
