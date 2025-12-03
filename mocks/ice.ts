
import { InventoryForm } from '../types';

export const ICE_INVENTORY: InventoryForm = {
  id: 'ice',
  acronym: 'ICE',
  name: 'Inventário de Curiosidade e Exploração',
  objective: 'Avaliar a propensão do indivíduo a buscar novas experiências, explorar ideias, questionar o status quo e aprender continuamente.',
  instructions: 'As frases a seguir descrevem atitudes e comportamentos de exploração. Indique com que frequência cada item se aplica a você, usando a escala de 1 a 7.',
  scoreOrientation: 'higher_is_better',
  responseScale: [
    { value: 1, label: 'Nunca' },
    { value: 2, label: 'Raramente' },
    { value: 3, label: 'Às vezes' },
    { value: 4, label: 'Neutro / Misto' },
    { value: 5, label: 'Frequentemente' },
    { value: 6, label: 'Muito Frequentemente' },
    { value: 7, label: 'Sempre' },
  ],
  domains: [
    {
      id: 'cognitive_curiosity',
      name: 'Curiosidade Cognitiva',
      icon: '🧠',
      description: 'Interesse intrínseco em aprender, investigar conceitos e entender como as coisas funcionam.',
      interpretationLabels: {
        level_1: 'Baixo interesse intelectual.',
        level_2: 'Curiosidade seletiva.',
        level_3: 'Boa curiosidade cognitiva.',
        level_4: 'Alta avidez por conhecimento.',
      },
      questions: [
        { id: 63001, text: 'Gosto de aprender coisas novas, mesmo que sejam complexas.' },
        { id: 63002, text: 'Frequentemente me pergunto como e por que algo acontece.' },
        { id: 63003, text: 'Busco ativamente informações sobre tópicos desconhecidos.' },
        { id: 63004, text: 'Sinto dificuldade em me interessar por assuntos novos.', isReversed: true },
        { id: 63005, text: 'Adoro explorar ideias e teorias diferentes das minhas.' },
        { id: 63006, text: 'Sinto-me motivado(a) a descobrir soluções para problemas que nunca enfrentei.' },
        { id: 63007, text: 'Gosto de questionar minhas próprias crenças para entender melhor.' },
      ],
    },
    {
      id: 'experiential_curiosity',
      name: 'Curiosidade Experiencial',
      icon: '🌐',
      description: 'Disposição para vivenciar novas sensações, lugares e culturas.',
      interpretationLabels: {
        level_1: 'Preferência pelo familiar.',
        level_2: 'Abertura moderada.',
        level_3: 'Busca ativa de novidades.',
        level_4: 'Alta exploração vivencial.',
      },
      questions: [
        { id: 63008, text: 'Procuro experimentar atividades novas, mesmo fora da minha zona de conforto.' },
        { id: 63009, text: 'Gosto de viajar ou conhecer lugares desconhecidos.' },
        { id: 63010, text: 'Tento novas comidas, músicas ou culturas quando posso.' },
        { id: 63011, text: 'Evito experiências desconhecidas por medo ou insegurança.', isReversed: true },
        { id: 63012, text: 'Busco desafios que me permitam aprender fazendo.' },
        { id: 63013, text: 'Costumo me entusiasmar com novidades no meu cotidiano.' },
        { id: 63014, text: 'Prefiro seguir rotinas conhecidas a explorar o novo.', isReversed: true },
      ],
    },
    {
      id: 'social_exploration',
      name: 'Exploração Social',
      icon: '🧩',
      description: 'Interesse em conhecer pessoas diferentes e compreender perspectivas alheias.',
      interpretationLabels: {
        level_1: 'Círculo social fechado.',
        level_2: 'Interesse social moderado.',
        level_3: 'Boa abertura social.',
        level_4: 'Alta curiosidade interpessoal.',
      },
      questions: [
        { id: 63015, text: 'Gosto de conversar com pessoas que têm experiências diferentes das minhas.' },
        { id: 63016, text: 'Tento compreender pontos de vista distintos antes de formar minha opinião.' },
        { id: 63017, text: 'Procuro aprender com as histórias de vida de outras pessoas.' },
        { id: 63018, text: 'Evito interações sociais novas por receio de desconforto.', isReversed: true },
        { id: 63019, text: 'Sinto-me motivado(a) a participar de grupos ou comunidades para expandir horizontes.' },
        { id: 63020, text: 'Costumo me aproximar de pessoas que podem me ensinar algo novo.' },
        { id: 63021, text: 'Evito conhecer pessoas desconhecidas mesmo quando há oportunidade.', isReversed: true },
      ],
    },
    {
      id: 'self_development_motivation',
      name: 'Motivação para Crescimento',
      icon: '🌟',
      description: 'Desejo de evoluir pessoalmente e expandir o próprio potencial.',
      interpretationLabels: {
        level_1: 'Estagnação ou acomodação.',
        level_2: 'Crescimento reativo.',
        level_3: 'Busca de melhoria.',
        level_4: 'Foco contínuo em evolução.',
      },
      questions: [
        { id: 63022, text: 'Estou constantemente buscando melhorar minhas habilidades.' },
        { id: 63023, text: 'Tenho prazer em desenvolver novos talentos ou competências.' },
        { id: 63024, text: 'Procuro cursos, leituras ou atividades que ampliem meu conhecimento.' },
        { id: 63025, text: 'Evito investir tempo em meu autodesenvolvimento.', isReversed: true },
        { id: 63026, text: 'Busco feedback e reflexão sobre minhas experiências para crescer.' },
        { id: 63027, text: 'Estou aberto(a) a mudar minha forma de pensar diante de novas informações.' },
        { id: 63028, text: 'Acredito que a aprendizagem contínua é essencial para minha vida.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de abertura e curiosidade. Escores altos estão associados a maior adaptabilidade e satisfação com a vida.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Preferência pela Estabilidade', 
        description: 'Tendência a manter o conhecido e evitar o novo. Pode indicar conforto com a rotina, mas também risco de estagnação ou rigidez mental.',
        recommendations: [
          'Introduzir pequenas novidades na rotina (ex: um caminho diferente, um prato novo).',
          'Ler sobre um assunto que normalmente não interessaria.',
          'Validar que a segurança é importante, mas o crescimento exige risco calculado.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Abertura Moderada', 
        description: 'Interesse pontual por novidades, geralmente dentro de áreas familiares. O indivíduo explora quando se sente seguro.',
        recommendations: [
          'Aprofundar um hobby existente.',
          'Conversar com alguém de uma área profissional diferente.',
          'Aceitar convites para eventos sociais fora do círculo habitual.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Mente Curiosa e Ativa', 
        description: 'Boa disposição para aprender e vivenciar coisas novas. O indivíduo vê o desconhecido como oportunidade, não ameaça.',
        recommendations: [
          'Iniciar um projeto de aprendizado de longo prazo (idioma, instrumento).',
          'Viajar ou explorar a própria cidade com "olhar de turista".',
          'Manter um diário de aprendizados.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Perfil Explorador', 
        description: 'Alta avidez por conhecimento e experiências. A curiosidade é um motor central da vida, impulsionando a criatividade e a adaptação.',
        recommendations: [
          'Canalizar a curiosidade para inovação ou solução de problemas.',
          'Mentorar outros, compartilhando o vasto repertório adquirido.',
          'Cuidar para não dispersar energia em interesses excessivos (foco).'
        ]
      },
    ],
  },
};
