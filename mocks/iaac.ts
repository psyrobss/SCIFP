
import { InventoryForm } from '../types';

export const IAAC_INVENTORY: InventoryForm = {
  id: 'iaac',
  acronym: 'IAAC',
  name: 'Inventário de Autoestima e Autocompaixão',
  objective: 'Avaliar os recursos de autoapoio, aceitação de si, autovalor e a capacidade de tratar a si mesmo com gentileza (autocompaixão) em vez de crítica.',
  instructions: 'Leia cada afirmação e assinale o quanto ela se aplica à sua forma de se tratar e se ver na maior parte do tempo.',
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
      id: 'global_self_esteem',
      name: 'Percepção de Valor Pessoal',
      icon: '🌟',
      description: 'Satisfação geral consigo mesmo e reconhecimento do próprio valor intrínseco.',
      interpretationLabels: {
        level_1: 'Dificuldade em reconhecer o próprio valor.',
        level_2: 'Autoestima instável ou condicional.',
        level_3: 'Boa percepção de valor pessoal.',
        level_4: 'Autoestima sólida e incondicional.',
      },
      questions: [
        { id: 29001, text: 'De modo geral, estou satisfeito(a) com a pessoa que sou.' },
        { id: 29002, text: 'Consigo ver minhas qualidades, tanto quanto vejo meus defeitos.' },
        { id: 29003, text: 'Às vezes sinto que não tenho valor.', isReversed: true },
        { id: 29004, text: 'Tenho orgulho das minhas pequenas e grandes conquistas.' },
        { id: 29005, text: 'Quando alguém me elogia, consigo aceitar e acreditar.' }, // Corrected: removed isReversed
        { id: 29006, text: 'Sinto que sou digno(a) de coisas boas.' },
      ],
    },
    {
      id: 'self_compassion',
      name: 'Autocompaixão e Autocuidado',
      icon: '❤️',
      description: 'Capacidade de oferecer a si mesmo o mesmo cuidado e compreensão que ofereceria a um amigo.',
      interpretationLabels: {
        level_1: 'Ausência de autocompaixão (autoculpabilização).',
        level_2: 'Autocompaixão baixa ou ocasional.',
        level_3: 'Boa capacidade de autocompaixão.',
        level_4: 'Postura autocompassiva consolidada.',
      },
      questions: [
        { id: 29007, text: 'Quando falho, tento ser compreensivo(a) comigo mesmo(a).' },
        { id: 29008, text: 'Nos momentos difíceis, procuro cuidar de mim com carinho.' },
        { id: 29009, text: 'Sou intolerante e duro(a) com meus próprios erros.', isReversed: true },
        { id: 29010, text: 'Tento me consolar da mesma forma que consolaria um amigo querido.' },
        { id: 29011, text: 'Aceito que ter limitações faz parte de ser humano.' },
        { id: 29012, text: 'Dou-me o direito de descansar quando estou cansado(a) ou triste.' },
      ],
    },
    {
      id: 'self_criticism_perfectionism',
      name: 'Manejo da Autocrítica',
      icon: '⚖️',
      description: 'Habilidade de lidar com padrões internos sem se punir ou se envergonhar (pontuação alta = baixa autocrítica tóxica).',
       interpretationLabels: {
        level_1: 'Autocrítica severa e punitiva.',
        level_2: 'Autocrítica frequente.',
        level_3: 'Autocrítica moderada/construtiva.',
        level_4: 'Relação saudável com erros.',
      },
      questions: [
        { id: 29013, text: 'Exijo de mim uma perfeição que não exijo dos outros.', isReversed: true },
        { id: 29014, text: 'Fico remoendo meus erros por muito tempo, sentindo vergonha.', isReversed: true },
        { id: 29015, text: 'Uso meus erros para aprender, não para me castigar.' },
        { id: 29016, text: 'Costumo me xingar ou me depreciar mentalmente quando erro.', isReversed: true },
        { id: 29017, text: 'Minha autoaceitação depende de eu ser bem-sucedido(a) em tudo.', isReversed: true },
        { id: 29018, text: 'Consigo separar quem eu sou do que eu faço (meu valor não depende só de acertos).' },
      ],
    },
    {
      id: 'self_acceptance',
      name: 'Aceitação Corporal e Emocional',
      icon: '🧘',
      description: 'Acolhimento da própria imagem e dos próprios sentimentos.',
       interpretationLabels: {
        level_1: 'Rejeição de si mesmo (corpo/emoções).',
        level_2: 'Aceitação parcial ou condicional.',
        level_3: 'Boa aceitação global.',
        level_4: 'Aceitação plena e integrada.',
      },
      questions: [
        { id: 29019, text: 'Aceito meu corpo como ele é, buscando saúde em vez de perfeição.' },
        { id: 29020, text: 'Permito-me sentir minhas emoções sem me julgar por elas.' },
        { id: 29021, text: 'Escondo quem sou ou o que sinto por medo de não gostarem de mim.', isReversed: true },
        { id: 29022, text: 'Acredito que posso evoluir sem precisar me odiar no presente.' },
        { id: 29023, text: 'Tenho vergonha de características minhas que não consigo mudar.', isReversed: true },
        { id: 29024, text: 'Sinto-me confortável na minha própria pele.' },
      ],
    },
    {
      id: 'self_efficacy_personal_value',
      name: 'Senso de Competência e Merecimento',
      icon: '💪',
      description: 'Confiança na capacidade de lidar com a vida e sentimento de merecimento.',
      interpretationLabels: {
        level_1: 'Sentimento de incompetência ou não-merecimento.',
        level_2: 'Dúvidas frequentes sobre a própria capacidade.',
        level_3: 'Confiança funcional e senso de merecimento.',
        level_4: 'Alta autoeficácia e segurança pessoal.',
      },
      questions: [
        { id: 29025, text: 'Confio que posso lidar com os desafios que aparecem.' },
        { id: 29026, text: 'Sinto que tenho recursos para buscar o que desejo.' },
        { id: 29027, text: 'Quando as coisas ficam difíceis, acredito na minha resiliência.' },
        { id: 29028, text: 'Às vezes sinto que sou uma fraude ou que não sou capaz.', isReversed: true },
        { id: 29029, text: 'Sinto que sou digno(a) de amor e respeito.' },
        { id: 29030, text: 'Reconheço que tenho valor, independente do que os outros pensam.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) reflete os recursos de autoestima e autocompaixão. Escores mais altos indicam uma relação mais amigável e fortalecedora consigo mesmo.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Necessidade de Auto-Acolhimento', 
        description: 'Indica uma relação interna marcada por crítica severa, cobrança ou sensação de inadequação. Pode haver dificuldade em se consolar em momentos de dor.',
        recommendations: [
          'Treinar a "Voz Compassiva": como eu falaria com uma criança ou amigo nessa situação?',
          'Identificar gatilhos de vergonha e autocrítica.',
          'Praticar o autocuidado básico (sono, alimentação) como ato de respeito a si.',
          'Terapia focada na Compaixão (CFT) pode ser muito benéfica.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Autoestima em Construção', 
        description: 'Oscilação entre momentos de aceitação e momentos de autojulgamento. A autoestima pode ser frágil ou dependente de aprovação externa e desempenho.',
        recommendations: [
          'Diário de Gratidão e Conquistas: registrar 3 coisas positivas sobre si por dia.',
          'Trabalhar a aceitação de que "errar é humano" (humanidade comum).',
          'Reduzir comparações sociais e focar no próprio progresso.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Autoestima e Autocompaixão Funcionais', 
        description: 'Bom nível de aceitação pessoal. O indivíduo reconhece seu valor e consegue lidar com falhas sem entrar em espirais de vergonha na maioria das vezes.',
        recommendations: [
          'Fortalecer a autoeficácia através de novos desafios.',
          'Manter o diálogo interno positivo.',
          'Cultivar relacionamentos que reforcem essa visão positiva.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Recursos Sólidos de Autoapoio', 
        description: 'Relação interna de amizade e suporte. Alta resiliência emocional, aceitação de imperfeições e crença incondicional no próprio valor.',
        recommendations: [
          'Utilizar essa base segura para arriscar e crescer.',
          'Apoiar outros a desenvolverem autocompaixão.',
          'Manter a humildade e a abertura para continuar aprendendo.'
        ]
      },
    ],
  },
};
