
import { InventoryForm } from '../types';

export const ICDFC_INVENTORY: InventoryForm = {
  id: 'icdf-c',
  acronym: 'ICDF-C',
  name: 'Inventário de Correspondência entre Dizer e Fazer – Versão Clínica (Paciente)',
  objective: 'Explorar a autopercepção do paciente sobre sua própria coerência, promover insight e identificar padrões de dissonância entre valores, intenções e comportamento.',
  instructions: 'Responda pensando no seu dia a dia, nas promessas que faz e nas atitudes que realiza.\nUse a escala:\n1️⃣ Nunca | 2️⃣ Raramente | 3️⃣ Às vezes | 4️⃣ Frequentemente | 5️⃣ Sempre',
  responseScale: [
    { value: 1, label: 'Nunca' },
    { value: 2, label: 'Raramente' },
    { value: 3, label: 'Às vezes' },
    { value: 4, label: 'Frequentemente' },
    { value: 5, label: 'Sempre' },
  ],
  domains: [
    {
      id: 'internal_coherence',
      name: 'Coerência Interna',
      icon: '🌱',
      description: 'Avalia o quanto a pessoa sente que age de acordo com seus princípios e valores.',
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
      name: 'Autocrítica e Reflexão',
      icon: '🔍',
      description: 'Mede a capacidade de perceber, admitir e corrigir as próprias inconsistências.',
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
      description: 'Avalia o impacto da pressão social e da necessidade de agradar na coerência pessoal.',
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
      name: 'Autorresponsabilidade e Ação',
      icon: '💪',
      description: 'Mede o comprometimento ativo com a coerência e a aplicação de insights no comportamento.',
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
    type: 'sum',
    description: 'A pontuação total indica o nível de coerência percebida. Pontuações mais altas refletem maior coerência.',
    notes: [
      'Itens do fator "Influência Externa" são revertidos (1=5, 2=4, etc.). A pontuação é calculada de 20 a 100.'
    ],
    ranges: [
        { min: 80, max: 100, label: 'Elevada coerência', description: 'Elevada coerência entre discurso e prática.' },
        { min: 60, max: 79, label: 'Coerência predominante', description: 'Coerência predominante, mas vulnerável a contextos sociais.' },
        { min: 40, max: 59, label: 'Inconsistência moderada', description: 'Conflitos de valor ou esquiva de desconforto.' },
        { min: 20, max: 39, label: 'Coerência baixa', description: 'Tendência a autojustificação e incongruência.' },
        { min: 0, max: 19, label: 'Marcada dissociação', description: 'Marcada dissociação entre fala e ação; investigar padrões evitativos, manipulatórios ou de autoengano.' },
    ],
  },
};