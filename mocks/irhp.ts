
import { InventoryForm } from '../types';

export const IRHP_INVENTORY: InventoryForm = {
  id: 'irhp',
  acronym: 'IRHP',
  name: 'Inventário de Regulação do Humor Positivo',
  objective: 'Avaliar a capacidade do indivíduo de perceber, manter e ampliar emoções positivas, otimismo, gratidão e estados de bem-estar subjetivo, bem como estratégias de regulação emocional adaptativas.',
  instructions: 'Leia cada afirmação e indique com que frequência você vivencia o comportamento ou sentimento descrito.',
  responseScale: [
    { value: 0, label: 'Nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre' },
  ],
  domains: [
    {
      id: 'positive_emotion_perception',
      name: 'Percepção de Emoções Positivas',
      icon: '🌟',
      description: 'Avalia consciência e atenção para emoções agradáveis e estados positivos.',
      questions: [
        { id: 67001, text: 'Percebo rapidamente quando estou feliz ou satisfeito(a).' },
        { id: 67002, text: 'Tenho dificuldade em notar momentos agradáveis no dia a dia.', isReversed: true },
        { id: 67003, text: 'Sinto gratidão com frequência pelas coisas boas da minha vida.' },
        { id: 67004, text: 'Reconheço pequenas conquistas e vitórias pessoais.' },
        { id: 67005, text: 'Raramente percebo emoções positivas, mesmo em situações boas.', isReversed: true },
        { id: 67006, text: 'Consigo identificar estados de prazer ou contentamento em atividades simples.' },
        { id: 67007, text: 'Sinto alegria ao vivenciar momentos positivos com outras pessoas.' },
      ],
    },
    {
      id: 'positive_emotion_amplification',
      name: 'Ampliação e Intensificação de Emoções Positivas',
      icon: '☀️',
      description: 'Avalia estratégias para prolongar ou intensificar experiências agradáveis.',
      questions: [
        { id: 67008, text: 'Busco atividades que aumentem minha sensação de prazer ou satisfação.' },
        { id: 67009, text: 'Frequentemente ignoro ou não valorizo emoções positivas.', isReversed: true },
        { id: 67010, text: 'Tendo a compartilhar boas experiências com outras pessoas para reforçar a sensação positiva.' },
        { id: 67011, text: 'Concentro-me em aspectos agradáveis de uma situação para aumentar meu bem-estar.' },
        { id: 67012, text: 'Tenho dificuldade em prolongar sentimentos positivos.', isReversed: true },
        { id: 67013, text: 'Pratico atividades que conscientemente melhoram meu humor.' },
        { id: 67014, text: 'Relembro experiências agradáveis para me sentir melhor em momentos difíceis.' },
      ],
    },
    {
      id: 'optimism_positive_expectation',
      name: 'Otimismo e Expectativa Positiva',
      icon: '😄',
      description: 'Avalia atitudes e pensamentos voltados ao futuro positivo e confiança em resultados benéficos.',
      questions: [
        { id: 67015, text: 'Acredito que coisas boas acontecem com frequência em minha vida.' },
        { id: 67016, text: 'Frequentemente espero resultados negativos em situações novas.', isReversed: true },
        { id: 67017, text: 'Confio que meus esforços gerarão consequências positivas.' },
        { id: 67018, text: 'Tenho dificuldade em ver o lado positivo de eventos desafiadores.', isReversed: true },
        { id: 67019, text: 'Frequentemente imagino experiências futuras agradáveis e motivadoras.' },
        { id: 67020, text: 'Cultivo pensamentos otimistas mesmo diante de obstáculos.' },
        { id: 67021, text: 'Sinto que minha vida é, em geral, satisfatória e promissora.' },
      ],
    },
    {
      id: 'positive_emotion_expression',
      name: 'Expressão e Compartilhamento de Emoções Positivas',
      icon: '💛',
      description: 'Avalia capacidade de expressar emoções positivas, reforçando bem-estar próprio e social.',
      questions: [
        { id: 67022, text: 'Compartilho facilmente alegria e entusiasmo com outras pessoas.' },
        { id: 67023, text: 'Frequentemente reprimo emoções agradáveis por vergonha ou medo.', isReversed: true },
        { id: 67024, text: 'Expressar sentimentos positivos aumenta meu bem-estar e o de outros.' },
        { id: 67025, text: 'Busco socializar para compartilhar bons momentos e sensações agradáveis.' },
        { id: 67026, text: 'Evito demonstrar emoções positivas mesmo em situações adequadas.', isReversed: true },
        { id: 67027, text: 'Me sinto motivado(a) a celebrar pequenas conquistas com os outros.' },
        { id: 67028, text: 'Minha expressão de felicidade contribui para meu equilíbrio emocional.' },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'Pontuação total: 0–112. Itens invertidos: 2, 5, 9, 12, 16, 18, 23, 26. Escores mais altos indicam maior capacidade de regulação positiva.',
    ranges: [
      { min: 0, max: 28, label: 'Baixa regulação positiva', description: 'Pouca percepção, manutenção ou amplificação de emoções positivas' },
      { min: 29, max: 56, label: 'Regulação moderada', description: 'Reconhecimento parcial, mas dificuldade em prolongar ou intensificar bem-estar' },
      { min: 57, max: 84, label: 'Regulação funcional', description: 'Boa consciência, ampliação e compartilhamento de emoções positivas' },
      { min: 85, max: 112, label: 'Regulação elevada', description: 'Alta capacidade de perceber, intensificar e expressar emoções positivas, promovendo bem-estar' },
    ],
  },
};