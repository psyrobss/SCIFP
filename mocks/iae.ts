
import { InventoryForm } from '../types';

export const IAE_INVENTORY: InventoryForm = {
  id: 'iae',
  acronym: 'IAE',
  name: 'Inventário de Autoestima e Autovalor',
  objective: 'Mensurar a percepção de valor pessoal, a confiança nas próprias capacidades e a aceitação incondicional de si mesmo, diferenciando autoestima genuína de autocrítica.',
  instructions: 'Indique o quanto cada frase descreve seu sentimento ou pensamento habitual sobre si mesmo, utilizando a escala de 1 a 7.',
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
      id: 'self_acceptance',
      name: 'Aceitação Incondicional',
      icon: '🌟',
      description: 'Capacidade de se aceitar como é, com qualidades e defeitos, sem condicionar o valor pessoal ao desempenho.',
      interpretationLabels: {
        level_1: 'Dificuldade de autoaceitação.',
        level_2: 'Aceitação condicional (só se aceita quando acerta).',
        level_3: 'Boa autoaceitação.',
        level_4: 'Aceitação plena e incondicional.',
      },
      questions: [
        { id: 43001, text: 'Sinto-me confortável sendo quem eu sou.' },
        { id: 43002, text: 'Aceito meus pontos fracos sem me sentir inferior por causa deles.' },
        { id: 43003, text: 'Frequentemente me comparo com os outros e me sinto pior.', isReversed: true },
        { id: 43004, text: 'Acredito que mereço respeito simplesmente por ser humano.' },
        { id: 43005, text: 'Aceito minhas emoções, mesmo as que considero "negativas".' },
        { id: 43006, text: 'Não preciso ser perfeito(a) para gostar de mim mesmo(a).' },
        { id: 43007, text: 'Sinto-me em paz com a minha imagem no espelho.' },
      ],
    },
    {
      id: 'self_confidence_competence',
      name: 'Confiança na Competência',
      icon: '💪',
      description: 'Crença na própria habilidade de lidar com desafios, resolver problemas e alcançar objetivos (Autoeficácia).',
       interpretationLabels: {
        level_1: 'Sentimento de incapacidade.',
        level_2: 'Insegurança diante de desafios.',
        level_3: 'Confiança funcional.',
        level_4: 'Alta confiança e autoeficácia.',
      },
      questions: [
        { id: 43008, text: 'Confio na minha inteligência e capacidade para resolver problemas.' },
        { id: 43009, text: 'Sinto que dou conta dos desafios do meu dia a dia.' },
        { id: 43010, text: 'Muitas vezes evito assumir responsabilidades por medo de falhar.', isReversed: true },
        { id: 43011, text: 'Sinto-me seguro(a) ao tomar decisões importantes.' },
        { id: 43012, text: 'Acredito que, se me esforçar, consigo atingir minhas metas.' },
        { id: 43013, text: 'Tenho confiança para expressar minhas ideias e opiniões.' },
        { id: 43014, text: 'Sinto-me preparado(a) para lidar com mudanças e novidades.' },
      ],
    },
    {
      id: 'self_criticism_internal_standards',
      name: 'Flexibilidade com Padrões Internos',
      icon: '⚖️',
      description: 'Habilidade de manter padrões realistas e lidar com erros sem autocrítica destrutiva.',
       interpretationLabels: {
        level_1: 'Padrões rígidos e autocrítica severa.',
        level_2: 'Autocobrança excessiva.',
        level_3: 'Padrões realistas e flexíveis.',
        level_4: 'Relação saudável com expectativas.',
      },
      questions: [
        { id: 43015, text: 'Quando erro, fico me culpando por muito tempo.', isReversed: true },
        { id: 43016, text: 'Consigo reconhecer que errar faz parte do aprendizado.' },
        { id: 43017, text: 'Não deixo que um fracasso defina quem eu sou.' },
        { id: 43018, text: 'Sinto que sou "bom o suficiente" como sou agora.' },
        { id: 43019, text: 'Critico-me mentalmente de forma dura quando não atinjo minhas expectativas.', isReversed: true },
        { id: 43020, text: 'Consigo olhar para minhas falhas com curiosidade, em vez de julgamento.' },
        { id: 43021, text: 'Sou capaz de perdoar a mim mesmo(a) por decisões do passado.' },
      ],
    },
    {
      id: 'social_self_esteem',
      name: 'Segurança Social e Relacional',
      icon: '🤝',
      description: 'Sentimento de valor e aceitação nos relacionamentos interpessoais.',
       interpretationLabels: {
        level_1: 'Insegurança e medo de rejeição.',
        level_2: 'Dependência de aprovação.',
        level_3: 'Segurança relacional adequada.',
        level_4: 'Alta segurança e autonomia social.',
      },
      questions: [
        { id: 43022, text: 'Sinto que sou importante para as pessoas com quem convivo.' },
        { id: 43023, text: 'Acredito que sou uma companhia agradável.' },
        { id: 43024, text: 'Evito me expor socialmente por medo de ser julgado(a).', isReversed: true },
        { id: 43025, text: 'Sinto-me à vontade para ser eu mesmo(a) perto dos outros.' },
        { id: 43026, text: 'Acredito que meus sentimentos e necessidades importam tanto quanto os dos outros.' },
        { id: 43027, text: 'Consigo estabelecer limites sem sentir culpa excessiva.' },
        { id: 43028, text: 'Não preciso da aprovação de todos para me sentir bem.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) reflete o nível de autovalor. Escores mais altos indicam uma autoestima mais sólida e resiliente.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Autoestima Fragilizada', 
        description: 'Autoimagem negativa e insegurança. O indivíduo pode ser muito duro consigo mesmo, ter medo de falhar e depender excessivamente da aprovação alheia.',
        recommendations: [
          'Trabalhar a identificação e questionamento do "crítico interno".',
          'Começar com pequenas metas alcançáveis para reconstruir a confiança.',
          'Exercícios de autovalidação: reconhecer sentimentos e necessidades como legítimos.',
          'Focar em pontos fortes e valores pessoais, não apenas em desempenho.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Autoestima Oscilante', 
        description: 'O valor pessoal tende a depender de circunstâncias externas (sucesso, elogios). Há recursos, mas também vulnerabilidade a críticas ou contratempos.',
        recommendations: [
          'Separar o valor pessoal ("quem sou") do desempenho ("o que faço").',
          'Praticar a autocompaixão nos momentos de dificuldade.',
          'Reduzir o perfeccionismo e aceitar o "bom o suficiente".'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Autoestima Saudável', 
        description: 'Percepção positiva de si mesmo. A pessoa reconhece seu valor, confia em suas capacidades e lida bem com erros, mantendo o respeito por si mesma.',
        recommendations: [
          'Manter o diálogo interno positivo e realista.',
          'Continuar se desafiando em áreas novas para expandir a autoeficácia.',
          'Cultivar relacionamentos recíprocos e nutritivos.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Autovalor Sólido e Resiliente', 
        description: 'Crença profunda e estável no próprio valor. Alta resiliência emocional, autenticidade nos relacionamentos e aceitação incondicional de si.',
        recommendations: [
          'Utilizar essa base segura para apoiar o crescimento de outros.',
          'Manter a humildade e a abertura para feedback construtivo.',
          'Focar em propósito e contribuição, transcendendo o ego.'
        ]
      },
    ],
  },
};
