

import { InventoryForm } from '../types';

export const IQE_INVENTORY: InventoryForm = {
  id: 'iqe',
  acronym: 'IQE',
  name: 'Inventário de Qualidade Existencial',
  objective: 'Avaliar o grau de sentido, coerência interna e engajamento existencial, considerando a percepção de propósito, valores e satisfação com a trajetória de vida.',
  instructions: 'Abaixo estão afirmações sobre seu modo de ver a vida e seus valores. Marque o quanto cada uma descreve você nas últimas semanas, usando a escala de 1 a 7.',
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
      id: 'meaning_purpose',
      name: 'Sentido e Propósito',
      icon: '🌱',
      description: 'Percepção de que a vida tem direção e significado que motivam as escolhas.',
      interpretationLabels: {
        level_1: 'Sensação de vazio ou desorientação.',
        level_2: 'Propósito indefinido.',
        level_3: 'Bom senso de direção.',
        level_4: 'Forte senso de propósito.',
      },
      questions: [
        { id: 18001, text: 'Tenho clareza sobre o que dá sentido à minha vida.' },
        { id: 18002, text: 'Sinto que minhas escolhas refletem o que realmente valorizo.' },
        { id: 18003, text: 'Tenho metas que me motivam a seguir em frente.' },
        { id: 18004, text: 'Mesmo em momentos difíceis, mantenho uma noção de "para que" estou vivendo.' },
        { id: 18005, text: 'As atividades que realizo diariamente têm valor pessoal para mim.' },
      ],
    },
    {
      id: 'coherence_integration',
      name: 'Coerência e Autenticidade',
      icon: '💫',
      description: 'Sensação de alinhamento entre valores, pensamentos e ações (integridade).',
      interpretationLabels: {
        level_1: 'Sensação de fragmentação.',
        level_2: 'Conflitos internos frequentes.',
        level_3: 'Boa coerência pessoal.',
        level_4: 'Alta integridade e autenticidade.',
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
      name: 'Realização e Agência',
      icon: '💪',
      description: 'Sentimento de capacidade para construir a própria vida e orgulho da trajetória.',
      interpretationLabels: {
        level_1: 'Sentimento de estagnação.',
        level_2: 'Dúvidas sobre a própria capacidade.',
        level_3: 'Boa sensação de realização.',
        level_4: 'Forte crença na capacidade de crescimento.',
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
      name: 'Apreciação e Conexão',
      icon: '🌌',
      description: 'Capacidade de sentir gratidão, conexão com a vida e apreciação do momento.',
      interpretationLabels: {
        level_1: 'Apatia ou desconexão.',
        level_2: 'Satisfação ocasional.',
        level_3: 'Boa capacidade de apreciar a vida.',
        level_4: 'Profundo sentimento de conexão e gratidão.',
      },
      questions: [
        { id: 18301, text: 'Sinto que minha vida tem valor, mesmo com suas dificuldades.' },
        { id: 18302, text: 'Experimento momentos de gratidão pela simples existência.' },
        { id: 18303, text: 'Tenho a sensação de estar conectado(a) com algo além de mim mesmo(a).' },
        { id: 18304, text: 'Sou capaz de encontrar aprendizado em experiências adversas.' },
        { id: 18305, text: 'Sinto-me emocionalmente vivo(a) e presente no cotidiano.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica a qualidade existencial percebida. Escores mais altos refletem maior senso de propósito e coerência.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Busca de Sentido e Direção', 
        description: 'Pode haver uma sensação de vazio, dúvida sobre o caminho a seguir ou de estar vivendo no "piloto automático". Momento propício para reavaliar prioridades.',
        recommendations: [
          'Reflexão sobre valores: "O que é realmente importante para mim hoje?".',
          'Pequenas ações de sentido: identificar uma atividade diária que traga satisfação pessoal.',
          'Investigar se há sintomas de desânimo ou apatia que precisam de cuidado.',
          'Conectar-se com a natureza ou arte para estimular a sensibilidade.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Definição de Propósito em Curso', 
        description: 'Existem áreas de satisfação, mas também dúvidas ou conflitos sobre a direção da vida. Pode haver incongruência entre o que se valoriza e como se gasta o tempo.',
        recommendations: [
          'Analisar a rotina: quanto tempo dedico ao que realmente importa?',
          'Buscar novos interesses ou projetos que despertem vitalidade.',
          'Trabalhar a aceitação de incertezas como parte da jornada.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Equilíbrio e Coerência', 
        description: 'Boa adaptação existencial. O indivíduo sente que sua vida tem valor e consegue alinhar suas ações aos seus princípios na maior parte do tempo.',
        recommendations: [
          'Aprofundar a conexão com metas de longo prazo.',
          'Praticar a gratidão para fortalecer a satisfação.',
          'Considerar formas de contribuição ou voluntariado.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Plenitude e Sentido', 
        description: 'Forte senso de propósito, vitalidade e conexão. A vida é percebida como significativa e autêntica. O indivíduo sente-se integrado.',
        recommendations: [
          'Manter a autenticidade e inspirar outros.',
          'Focar no legado e na generatividade (cuidar das próximas gerações).',
          'Cultivar a transcendência e a sabedoria.'
        ]
      },
    ],
  }
};
