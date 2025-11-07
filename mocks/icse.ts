
import { InventoryForm } from '../types';

export const ICSE_INVENTORY: InventoryForm = {
  id: 'icse',
  acronym: 'ICSE',
  name: 'Inventário de Coerência do Self e Existência',
  objective: 'Avaliar o grau de alinhamento interno entre identidade, valores e propósito de vida, bem como a integração entre o self pessoal e o sentido existencial.\nO ICSE busca identificar conflitos entre o “eu que sou” e o “eu que quero ser”, analisando coerência, propósito e congruência entre crenças, emoções e ações.',
  instructions: 'Este inventário tem o objetivo de compreender como você percebe a coerência entre quem você é, o que acredita e o modo como vive.\n\nLeia atentamente cada frase e indique o quanto ela se aplica a você, usando a escala:',
  responseScale: [
    { value: 0, label: 'Nunca ou quase nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre ou sempre' },
  ],
  domains: [
    {
      id: 'internal_coherence_authenticity',
      name: 'Coerência Interna e Autenticidade',
      icon: '🌿',
      description: 'Avalia o quanto os pensamentos, emoções e ações da pessoa estão integrados e coerentes.',
      questions: [
        { id: 25001, text: 'Me sinto a mesma pessoa por dentro e por fora.' },
        { id: 25002, text: 'Às vezes ajo de forma contrária ao que acredito.' },
        { id: 25003, text: 'Sinto que minhas ações refletem meus valores.', isReversed: true },
        { id: 25004, text: 'Tenho dificuldade em entender o que realmente quero.' },
        { id: 25005, text: 'Costumo perceber um conflito entre o que penso e o que faço.' },
      ],
    },
    {
      id: 'existential_clarity_meaning',
      name: 'Clareza Existencial e Sentido de Vida',
      icon: '🔎',
      description: 'Explora a percepção de propósito, sentido e direção na existência.',
      questions: [
        { id: 25006, text: 'Tenho clareza sobre o que dá sentido à minha vida.', isReversed: true },
        { id: 25007, text: 'Frequentemente me pergunto qual é o propósito da minha existência.' },
        { id: 25008, text: 'Sinto que minha vida carece de um objetivo definido.' },
        { id: 25009, text: 'As decisões que tomo têm um significado pessoal profundo.', isReversed: true },
        { id: 25010, text: 'Às vezes vivo no “automático”, sem refletir sobre o sentido das coisas.' },
      ],
    },
    {
      id: 'congruence_values_behaviors',
      name: 'Congruência entre Valores e Comportamentos',
      icon: '🧩',
      description: 'Avalia o quanto a conduta da pessoa é consistente com seus princípios e crenças.',
      questions: [
        { id: 25011, text: 'Tento agir de acordo com o que considero certo.', isReversed: true },
        { id: 25012, text: 'Muitas vezes percebo que vivo de modo incoerente com o que defendo.' },
        { id: 25013, text: 'Tenho orgulho das escolhas que faço porque refletem meus valores.', isReversed: true },
        { id: 25014, text: 'Sinto que me adapto demais às circunstâncias, perdendo meus princípios.' },
        { id: 25015, text: 'Quando tomo decisões, penso se elas estão de acordo com meus valores.', isReversed: true },
      ],
    },
    {
      id: 'temporal_self_integration',
      name: 'Integração Temporal do Self',
      icon: '🪶',
      description: 'Explora a continuidade e integração entre o passado, o presente e o futuro.',
      questions: [
        { id: 25016, text: 'Tenho uma narrativa coerente sobre minha trajetória de vida.', isReversed: true },
        { id: 25017, text: 'Sinto que o meu “eu” do passado e o do presente são muito diferentes.' },
        { id: 25018, text: 'Consigo ver uma linha de continuidade nas minhas experiências.', isReversed: true },
        { id: 25019, text: 'Tenho dificuldade em conectar o que vivi com quem sou hoje.' },
        { id: 25020, text: 'As mudanças que vivi me deixaram mais confuso sobre quem sou.' },
      ],
    },
    {
      id: 'existential_unity_acceptance',
      name: 'Unidade Existencial e Aceitação',
      icon: '🌌',
      description: 'Avalia a integração entre aspectos racionais, emocionais e espirituais do self.',
      questions: [
        { id: 25021, text: 'Consigo aceitar contradições dentro de mim sem me sentir perdido.', isReversed: true },
        { id: 25022, text: 'Tenho dificuldade em aceitar partes de mim que não compreendo.' },
        { id: 25023, text: 'Sinto uma harmonia entre razão, emoção e espiritualidade.', isReversed: true },
        { id: 25024, text: 'Às vezes me sinto dividido entre várias formas de ser.' },
        { id: 25025, text: 'Estou aprendendo a viver de forma mais coerente com quem sou.', isReversed: true },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'A pontuação total (0-100) indica o nível de coerência existencial. Pontuações mais altas refletem menor coerência, com mais conflitos internos e falta de propósito.',
    notes: ['Itens que representam coerência e integração são revertidos na pontuação.'],
    ranges: [
       { min: 0, max: 25, label: 'Alta Coerência', description: 'Autenticidade, clareza existencial e forte congruência pessoal.' },
       { min: 26, max: 50, label: 'Coerência Funcional', description: 'Bom alinhamento interno, com conflitos pontuais ou situacionais.' },
       { min: 51, max: 75, label: 'Incoerência Moderada', description: 'Conflito perceptível entre valores e ações, com alguma falta de propósito.' },
       { min: 76, max: 100, label: 'Alta Incoerência', description: 'Fragmentação interna, falta de propósito e forte conflito entre valores e ações.' },
    ],
  },
};