
import { InventoryForm } from '../types';

export const IQE_INVENTORY: InventoryForm = {
  id: 'iqe',
  acronym: 'IQE',
  name: 'Inventário de Qualidade Existencial',
  objective: 'Avaliar o grau de sentido, coerência interna e engajamento existencial do indivíduo, considerando sua percepção de propósito, valores, identidade e satisfação com a própria trajetória. O instrumento permite identificar áreas de vazio existencial, alienação de valores, baixa autorrealização ou distorções de propósito.',
  instructions: 'Abaixo estão afirmações sobre seu modo de ver a vida, seus objetivos e seu senso de propósito. Marque o quanto cada uma descreve você nas últimas semanas, usando a escala:',
  responseScale: [
    { value: 0, label: 'Nunca ou quase nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre ou sempre' },
  ],
  domains: [
    {
      id: 'meaning_purpose',
      name: 'Sentido e Propósito de Vida',
      icon: '🌱',
      description: 'Percepção de que a vida tem um significado, direção e metas que motivam e orientam as escolhas.',
      interpretationLabels: {
        level_1: 'Sensação de vazio ou falta de propósito.',
        level_2: 'Propósito de vida pouco claro ou inconsistente.',
        level_3: 'Bom senso de direção e significado na vida.',
        level_4: 'Forte e claro senso de propósito e missão pessoal.',
      },
      questions: [
        { id: 18001, text: 'Tenho clareza sobre o que dá sentido à minha vida.' },
        { id: 18002, text: 'Sinto que minhas escolhas refletem o que realmente valorizo.' },
        { id: 18003, text: 'Tenho metas que me motivam a seguir em frente.' },
        { id: 18004, text: 'Mesmo em momentos difíceis, mantenho uma noção de propósito.' },
        { id: 18005, text: 'As atividades que realizo diariamente têm valor pessoal para mim.' },
      ],
    },
    {
      id: 'coherence_integration',
      name: 'Coerência e Integração Interna',
      icon: '💫',
      description: 'Sensação de ser uma pessoa íntegra e autêntica, com alinhamento entre valores, pensamentos e ações.',
      interpretationLabels: {
        level_1: 'Sensação de fragmentação ou conflito interno.',
        level_2: 'Coerência parcial, com algumas contradições internas.',
        level_3: 'Bom senso de identidade e coerência pessoal.',
        level_4: 'Forte sentimento de integração e autenticidade.',
      },
      questions: [
        { id: 18101, text: 'Sinto que sou a mesma pessoa em diferentes contextos da vida.' },
        { id: 18102, text: 'Meus pensamentos e sentimentos costumam estar em sintonia.' },
        { id: 18103, text: 'Tenho clareza sobre quem sou, independentemente da opinião dos outros.' },
        { id: 18104, text: 'Meus comportamentos refletem meus princípios internos.' },
        { id: 18105, text: 'Sinto-me íntegro(a) e coerente com o que acredito.' },
      ],
    },
    {
      id: 'self_efficacy_realization',
      name: 'Autoeficácia e Realização Pessoal',
      icon: '💪',
      description: 'Crença na própria capacidade de superar desafios, alcançar metas e sentir orgulho da própria trajetória.',
      interpretationLabels: {
        level_1: 'Baixa confiança na própria capacidade de realização.',
        level_2: 'Confiança moderada, com dúvidas sobre a capacidade de superar desafios.',
        level_3: 'Boa sensação de competência e orgulho das próprias conquistas.',
        level_4: 'Forte crença na própria eficácia e capacidade de crescimento.',
      },
      questions: [
        { id: 18201, text: 'Sinto-me capaz de realizar o que me proponho.' },
        { id: 18202, text: 'Tenho orgulho do caminho que trilhei até aqui.' },
        { id: 18203, text: 'Consigo lidar com desafios sem perder a confiança em mim mesmo(a).' },
        { id: 18204, text: 'Tenho a sensação de estar crescendo como pessoa.' },
        { id: 18205, text: 'Reconheço meus esforços e conquistas, mesmo que pequenas.' },
      ],
    },
    {
      id: 'existential_satisfaction_connection',
      name: 'Satisfação Existencial e Conexão com a Vida',
      icon: '🌌',
      description: 'Sentimento de gratidão, apreciação pela vida e conexão com algo maior que si mesmo (natureza, espiritualidade, etc.).',
      interpretationLabels: {
        level_1: 'Sensação de desconexão, apatia ou insatisfação com a vida.',
        level_2: 'Satisfação e conexão limitadas ou ocasionais.',
        level_3: 'Bom nível de satisfação e capacidade de apreciar a vida.',
        level_4: 'Profundo sentimento de conexão, gratidão e vitalidade existencial.',
      },
      questions: [
        { id: 18301, text: 'Sinto que minha vida tem valor, mesmo com suas dificuldades.' },
        { id: 18302, text: 'Experimento momentos de gratidão e apreciação pela existência.' },
        { id: 18303, text: 'Tenho a sensação de estar conectado(a) com algo maior (vida, natureza, espiritualidade).' },
        { id: 18304, text: 'Sou capaz de encontrar beleza ou aprendizado em experiências adversas.' },
        { id: 18305, text: 'Sinto-me emocionalmente vivo(a) e presente no cotidiano.' },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'A pontuação é a soma total das respostas (0-80). Pontuações mais altas indicam maior qualidade existencial.',
    ranges: [
      { min: 60, max: 80, label: 'Alta qualidade existencial', description: 'Forte senso de propósito, coerência e vitalidade.' },
      { min: 40, max: 59, label: 'Equilíbrio funcional', description: 'Boa adaptação existencial com pequenas lacunas de sentido.' },
      { min: 20, max: 39, label: 'Vazio ou alienação moderada', description: 'Indícios de desorientação, desmotivação ou perda de propósito.' },
      { min: 0, max: 19, label: 'Comprometimento existencial', description: 'Sensação de vazio, desânimo ou falta de sentido de vida.' }
    ],
  }
};
