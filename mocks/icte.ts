
import { InventoryForm } from '../types';

export const ICTE_INVENTORY: InventoryForm = {
  id: 'icte',
  acronym: 'ICTE',
  name: 'Inventário de Consciência Temporal e Existencial',
  objective: 'Avaliar como o indivíduo percebe, integra e se orienta em relação ao seu passado, presente e futuro — identificando padrões de fixação temporal, negação da história pessoal, dificuldades de presença ou falta de direção existencial.',
  instructions: 'Leia as frases abaixo e marque o quanto cada uma representa a forma como você tem se sentido nas últimas semanas.',
  responseScale: [
    { value: 0, label: 'Nunca ou quase nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre ou sempre' },
  ],
  domains: [
    {
      id: 'past_integration',
      name: 'Integração com o Passado',
      icon: '🪞',
      description: 'Capacidade de olhar para a própria história de forma realista e compreensiva, aprendendo com as experiências sem ficar preso a elas.',
      interpretationLabels: {
        level_1: 'Forte fixação no passado, com ruminação ou evitação.',
        level_2: 'Dificuldade em se reconciliar com a própria história.',
        level_3: 'Boa capacidade de integrar o passado de forma saudável.',
        level_4: 'Elevada aceitação e aprendizado com as experiências passadas.',
      },
      questions: [
        { id: 21001, text: 'Consigo olhar para meu passado com compreensão, mesmo quando há dor.' },
        { id: 21002, text: 'Sinto que aprendi com as experiências que vivi.' },
        { id: 21003, text: 'Tenho uma visão realista e equilibrada sobre o que aconteceu comigo.' },
        { id: 21004, text: 'Não fico preso(a) demais ao que já passou.' },
        { id: 21005, text: 'Sinto que meu passado faz parte de quem eu sou, sem me definir completamente.' },
      ],
    },
    {
      id: 'present_awareness',
      name: 'Presença e Consciência Atual',
      icon: '🌅',
      description: 'Habilidade de se conectar com o momento presente, vivenciando o aqui e agora com atenção e envolvimento.',
      interpretationLabels: {
        level_1: 'Baixa conexão com o presente, com mente distraída ou ausente.',
        level_2: 'Dificuldade em manter o foco no momento presente.',
        level_3: 'Boa capacidade de estar presente e consciente no dia a dia.',
        level_4: 'Elevado estado de presença e conexão com a experiência atual.',
      },
      questions: [
        { id: 21101, text: 'Tenho facilidade em perceber o que estou sentindo no momento.' },
        { id: 21102, text: 'Quando faço algo, consigo estar totalmente envolvido(a) na experiência.' },
        { id: 21103, text: 'Sinto-me conectado(a) com o aqui e agora.' },
        { id: 21104, text: 'Tenho momentos de pausa e reflexão ao longo do dia.' },
        { id: 21105, text: 'Evito ficar preso(a) em pensamentos automáticos ou distrações mentais.' },
      ],
    },
    {
      id: 'future_orientation',
      name: 'Projeção e Orientação para o Futuro',
      icon: '🌌',
      description: 'Capacidade de planejar, estabelecer metas e manter uma perspectiva de esperança e motivação em relação ao futuro.',
      interpretationLabels: {
        level_1: 'Visão pessimista ou ausência de perspectiva futura.',
        level_2: 'Dificuldade em planejar ou se sentir motivado pelo futuro.',
        level_3: 'Boa capacidade de estabelecer metas e manter a esperança.',
        level_4: 'Forte senso de direção e otimismo em relação ao futuro.',
      },
      questions: [
        { id: 21201, text: 'Tenho metas claras que orientam minhas ações.' },
        { id: 21202, text: 'Sinto-me motivado(a) pelo que quero construir no futuro.' },
        { id: 21203, text: 'Acredito que sou capaz de transformar planos em realidade.' },
        { id: 21204, text: 'Tenho esperança de que as coisas possam melhorar.' },
        { id: 21205, text: 'Consigo imaginar um futuro coerente com quem sou hoje.' },
      ],
    },
    {
      id: 'existential_meaning_continuity',
      name: 'Sentido Existencial e Continuidade Temporal',
      icon: '🔆',
      description: 'Percepção de que a vida tem um propósito e que a trajetória pessoal forma uma narrativa coerente e significativa.',
      interpretationLabels: {
        level_1: 'Sensação de falta de sentido e fragmentação da história de vida.',
        level_2: 'Busca por sentido, mas com dificuldade em encontrar uma narrativa coerente.',
        level_3: 'Bom senso de propósito e continuidade na trajetória de vida.',
        level_4: 'Profundo sentimento de significado e coerência existencial.',
      },
      questions: [
        { id: 21301, text: 'Sinto que minha vida tem um propósito maior.' },
        { id: 21302, text: 'As experiências que vivi me ajudam a compreender meu caminho atual.' },
        { id: 21303, text: 'Tenho consciência de estar construindo uma trajetória coerente.' },
        { id: 21304, text: 'Mesmo diante de dificuldades, encontro significado no que vivo.' },
        { id: 21305, text: 'Percebo minha história de vida como um processo contínuo de aprendizado.' },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'A pontuação é a soma total das respostas (0-80). Pontuações mais altas indicam maior integração temporal e existencial.',
    ranges: [
      { min: 65, max: 80, label: 'Integração Temporal Elevada', description: 'Senso de continuidade, propósito e presença equilibrada.' },
      { min: 45, max: 64, label: 'Consciência Temporal Funcional', description: 'Boa integração, com eventuais oscilações emocionais.' },
      { min: 25, max: 44, label: 'Fragmentação Moderada', description: 'Dificuldade em lidar com passado ou planejar o futuro; baixa presença.' },
      { min: 0, max: 24, label: 'Desconexão Temporal e Existencial', description: 'Vivência fragmentada, sem sentido de continuidade ou propósito.' }
    ],
  }
};
