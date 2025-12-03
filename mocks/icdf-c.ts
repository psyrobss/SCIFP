
import { InventoryForm } from '../types';

export const ICDFC_INVENTORY: InventoryForm = {
  id: 'icdf-c',
  acronym: 'ICDF-C',
  name: 'Inventário de Correspondência entre Dizer e Fazer – Versão Clínica',
  objective: 'Ferramenta de autoavaliação para pacientes em terapia, focada na percepção da própria coerência, responsabilidade pessoal e autenticidade.',
  instructions: 'Responda pensando no seu dia a dia, nas promessas que faz e nas atitudes que realiza, usando a escala de 1 a 7.',
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
      id: 'internal_coherence',
      name: 'Coerência Interna',
      icon: '🌱',
      description: 'Sensação de alinhamento entre princípios internos e ações externas.',
      questions: [
        { id: 75001, text: 'Sinto que ajo de acordo com meus princípios.' },
        { id: 75002, text: 'Minhas ações refletem o que acredito ser certo.' },
        { id: 75003, text: 'Cumpro o que prometo a mim mesmo.' },
        { id: 75004, text: 'Quando falo algo, procuro agir conforme minhas palavras.' },
        { id: 75005, text: 'Tenho orgulho da minha coerência pessoal.' },
      ],
    },
    {
      id: 'self_criticism_reflection',
      name: 'Reflexão e Autocrítica',
      icon: '🔍',
      description: 'Capacidade de perceber e admitir falhas na própria coerência.',
      questions: [
        { id: 75006, text: 'Às vezes percebo que minhas atitudes contradizem o que digo.' },
        { id: 75007, text: 'Sinto desconforto quando percebo que não cumpri o que prometi.' },
        { id: 75008, text: 'Tento entender por que às vezes não ajo como gostaria.' },
        { id: 75009, text: 'Admito quando ajo de forma incoerente.' },
        { id: 75010, text: 'Tento corrigir meus comportamentos desalinhados.' },
      ],
    },
    {
      id: 'external_influence',
      name: 'Influência Externa',
      icon: '🎭',
      description: 'Impacto da necessidade de aprovação na autenticidade.',
      questions: [
        { id: 75011, text: 'Mudo meu discurso para agradar as pessoas.', isReversed: true },
        { id: 75012, text: 'Tenho medo de parecer incoerente.', isReversed: true },
        { id: 75013, text: 'Às vezes ajo de forma diferente para evitar críticas.', isReversed: true },
        { id: 75014, text: 'Evito dizer o que penso para não gerar conflito.', isReversed: true },
        { id: 75015, text: 'Sinto-me dividido entre agradar os outros e ser verdadeiro.', isReversed: true },
      ],
    },
    {
      id: 'self_responsibility_action',
      name: 'Ação e Autorresponsabilidade',
      icon: '💪',
      description: 'Compromisso ativo em agir conforme o que se aprende e acredita.',
      questions: [
        { id: 75016, text: 'Coloco em prática o que aprendo sobre mim.' },
        { id: 75017, text: 'Esforço-me para manter coerência mesmo em situações difíceis.' },
        { id: 75018, text: 'Aceito minhas falhas sem me justificar.' },
        { id: 75019, text: 'Tenho metas claras e ajo em direção a elas.' },
        { id: 75020, text: 'A coerência entre o que digo e o que faço é uma meta pessoal importante.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica a autopercepção de coerência. Escores mais altos sugerem maior senso de integridade.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Percepção de Incoerência', 
        description: 'O paciente sente que não está vivendo de acordo com o que diz ou acredita. Pode haver conflito interno, culpa ou sensação de falsidade.',
        recommendations: [
          'Trabalhar a autoaceitação para reduzir a necessidade de "máscaras".',
          'Identificar um pequeno valor para colocar em prática hoje.',
          'Explorar o medo por trás da incoerência (medo de rejeição, fracasso?).'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Busca de Alinhamento', 
        description: 'Esforço consciente para ser coerente, com sucessos e falhas. A pressão externa ainda influencia bastante as decisões.',
        recommendations: [
          'Fortalecer a voz interna frente às demandas externas.',
          'Celebrar momentos de autenticidade.',
          'Usar o diário para monitorar a coerência diária.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Coerência Satisfatória', 
        description: 'Sentimento de integridade na maior parte do tempo. O paciente confia em si mesmo e sente que suas ações refletem seus valores.',
        recommendations: [
          'Refinar a coerência em áreas mais desafiadoras da vida.',
          'Manter a prática de autorreflexão.',
          'Valorizar a honestidade consigo mesmo.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Integridade Percebida', 
        description: 'Forte senso de autenticidade e responsabilidade. O paciente sente-se "inteiro" e age com convicção.',
        recommendations: [
          'Usar essa força para inspirar e liderar.',
          'Manter a flexibilidade para não se tornar rígido.',
          'Continuar o processo de crescimento pessoal com base na verdade.'
        ]
      },
    ],
  },
};
