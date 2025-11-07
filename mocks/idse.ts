
import { InventoryForm } from '../types';

export const IDSE_INVENTORY: InventoryForm = {
  id: 'idse',
  acronym: 'IDSE',
  name: 'Inventário de Sintomas de Estresse e Exaustão',
  objective: 'Avaliar a presença e a intensidade de sintomas físicos, emocionais, cognitivos e comportamentais relacionados ao estresse crônico, sobrecarga e esgotamento psicológico. O instrumento visa identificar precocemente sinais de desgaste e auxiliar na diferenciação entre fadiga adaptativa e exaustão disfuncional.',
  instructions: 'Abaixo estão descritas situações e experiências comuns em períodos de sobrecarga. Indique o quanto cada afirmação se aplica a você nas últimas quatro semanas, usando a escala:',
  responseScale: [
    { value: 0, label: 'Nunca ou quase nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre ou sempre' },
  ],
  domains: [
    {
      id: 'emotional_fatigue',
      name: 'Cansaço Emocional e Sobrecarga Psíquica',
      icon: '💭',
      description: 'Sensação de esgotamento emocional, irritabilidade e dificuldade em relaxar devido à sobrecarga de responsabilidades.',
      questions: [
        { id: 15001, text: 'Sinto-me emocionalmente esgotado(a) no final do dia.' },
        { id: 15002, text: 'Tenho sentido menos paciência com situações ou pessoas cotidianas.' },
        { id: 15003, text: 'Tenho dificuldade em relaxar mesmo quando tenho tempo livre.' },
        { id: 15004, text: 'Sinto-me frequentemente sobrecarregado(a) pelas minhas responsabilidades.' },
        { id: 15005, text: 'Tenho a sensação de que “não dou conta” do que preciso fazer.' },
      ],
    },
    {
      id: 'cognitive_symptoms',
      name: 'Sintomas Cognitivos e Dificuldade de Concentração',
      icon: '🧠',
      description: 'Impacto do estresse na capacidade de foco, memória e clareza mental para tomar decisões.',
      questions: [
        { id: 15101, text: 'Tenho dificuldade para manter o foco em tarefas simples.' },
        { id: 15102, text: 'Sinto que minha memória recente está pior.' },
        { id: 15103, text: 'Tenho dificuldade para organizar pensamentos e tomar decisões.' },
        { id: 15104, text: 'Esqueço compromissos ou detalhes importantes com frequência.' },
        { id: 15105, text: 'Sinto minha mente “cheia” ou confusa em grande parte do tempo.' },
      ],
    },
    {
      id: 'physiological_reactions',
      name: 'Reações Fisiológicas e Sinais Corporais',
      icon: '⚡',
      description: 'Manifestações físicas do estresse, como tensão muscular, problemas de sono e fadiga corporal.',
      questions: [
        { id: 15201, text: 'Tenho notado aumento de tensão muscular, dores ou rigidez.' },
        { id: 15202, text: 'Meu sono tem sido irregular ou pouco reparador.' },
        { id: 15203, text: 'Tenho sentido fadiga física, mesmo sem grande esforço.' },
        { id: 15204, text: 'Percebo palpitações, aperto no peito ou respiração curta em momentos de pressão.' },
        { id: 15205, text: 'Meu corpo parece em “alerta constante”, como se eu nunca desligasse.' },
      ],
    },
    {
      id: 'demotivation',
      name: 'Desmotivação e Redução de Interesse',
      icon: '💬',
      description: 'Perda de entusiasmo, prazer e interesse por atividades que antes eram motivadoras, tanto pessoais quanto profissionais.',
      questions: [
        { id: 15301, text: 'Tenho sentido menos entusiasmo pelas coisas que antes me motivavam.' },
        { id: 15302, text: 'Faço as tarefas mais por obrigação do que por vontade.' },
        { id: 15303, text: 'Tenho notado queda no interesse por interações sociais.' },
        { id: 15304, text: 'Tenho dificuldade para sentir prazer mesmo em momentos agradáveis.' },
        { id: 15305, text: 'Sinto que meu esforço raramente é recompensado ou reconhecido.' },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'A pontuação é a soma total das respostas (0-80). Pontuações mais altas indicam maior nível de estresse e exaustão.',
    ranges: [
      { min: 60, max: 80, label: 'Estresse severo/exaustão clínica', description: 'Indica necessidade de avaliação psicológica aprofundada e possível intervenção imediata.' },
      { min: 40, max: 59, label: 'Estresse elevado', description: 'Sinais de sobrecarga significativa; recomenda-se monitoramento e estratégias de enfrentamento.' },
      { min: 20, max: 39, label: 'Estresse moderado', description: 'Níveis situacionais de tensão; observar gatilhos e padrão de recuperação.' },
      { min: 0, max: 19, label: 'Estresse leve', description: 'Boa regulação emocional e fisiológica na maioria das situações.' }
    ],
  }
};
