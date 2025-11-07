
import { InventoryForm } from '../types';

export const IELV_INVENTORY: InventoryForm = {
  id: 'ielv',
  acronym: 'IELV',
  name: 'Inventário de Estilo de Lazer e Equilíbrio Vida/Trabalho',
  objective: 'Avaliar o estilo de lazer do indivíduo, frequência e qualidade das atividades recreativas, engajamento em hobbies, e percepção de equilíbrio entre vida pessoal, trabalho e bem-estar.',
  instructions: 'As afirmações abaixo descrevem hábitos, atitudes e sentimentos sobre lazer, descanso e equilíbrio pessoal.\nIndique com que frequência cada item se aplica a você.',
  responseScale: [
    { value: 0, label: 'Nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre' },
  ],
  domains: [
    {
      id: 'leisure_frequency_diversity',
      name: 'Frequência e Diversidade de Atividades de Lazer',
      icon: '🕹',
      description: 'Avalia a regularidade com que o indivíduo se envolve em atividades recreativas e a variedade de experiências.',
      questions: [
        { id: 66001, text: 'Tenho hobbies ou atividades recreativas que pratico regularmente.' },
        { id: 66002, text: 'Experimento diferentes tipos de atividades de lazer para me divertir.' },
        { id: 66003, text: 'Raramente encontro tempo para meus hobbies.', isReversed: true },
        { id: 66004, text: 'Participo de atividades culturais, esportivas ou artísticas com frequência.' },
        { id: 66005, text: 'Sinto-me entediado(a) devido à falta de atividades recreativas.', isReversed: true },
        { id: 66006, text: 'Procuro experimentar novas formas de lazer quando possível.' },
        { id: 66007, text: 'Meu tempo livre é suficiente para realizar atividades que gosto.' },
      ],
    },
    {
      id: 'leisure_quality_satisfaction',
      name: 'Qualidade e Satisfação com Lazer',
      icon: '☯',
      description: 'Avalia a percepção de prazer, relaxamento e recuperação proporcionados pelo lazer.',
      questions: [
        { id: 66008, text: 'Sinto-me relaxado(a) e revigorado(a) após atividades de lazer.' },
        { id: 66009, text: 'Minhas atividades de lazer me proporcionam prazer e bem-estar.' },
        { id: 66010, text: 'Frequentemente realizo atividades de lazer que considero monótonas.', isReversed: true },
        { id: 66011, text: 'Me sinto energizado(a) e motivado(a) depois de meus hobbies.' },
        { id: 66012, text: 'Não consigo aproveitar meu tempo livre de maneira satisfatória.', isReversed: true },
        { id: 66013, text: 'O lazer contribui para meu equilíbrio emocional e mental.' },
        { id: 66014, text: 'Sinto-me frustrado(a) quando não posso realizar atividades recreativas.' },
      ],
    },
    {
      id: 'work_life_balance',
      name: 'Equilíbrio Vida/Trabalho',
      icon: '👥',
      description: 'Avalia percepção de equilíbrio entre demandas profissionais, pessoais e tempo de descanso.',
      questions: [
        { id: 66015, text: 'Consigo equilibrar bem meu tempo entre trabalho, estudo e lazer.' },
        { id: 66016, text: 'Frequentemente me sinto sobrecarregado(a) e sem tempo para mim.', isReversed: true },
        { id: 66017, text: 'Tenho tempo suficiente para relaxar após atividades profissionais ou acadêmicas.' },
        { id: 66018, text: 'Sinto que minha vida pessoal e profissional estão desequilibradas.', isReversed: true },
        { id: 66019, text: 'Organizo minhas responsabilidades de forma a garantir tempo para lazer.' },
        { id: 66020, text: 'Tenho dificuldade em desconectar do trabalho ou estudos para relaxar.', isReversed: true },
        { id: 66021, text: 'Sinto-me satisfeito(a) com a forma como distribuo meu tempo.' },
      ],
    },
    {
      id: 'leisure_engagement_autonomy',
      name: 'Engajamento e Autonomia no Lazer',
      icon: '🌟',
      description: 'Avalia iniciativa, liberdade de escolha e capacidade de criar experiências de lazer significativas.',
      questions: [
        { id: 66022, text: 'Escolho minhas atividades de lazer de acordo com meus interesses e valores.' },
        { id: 66023, text: 'Busco novas oportunidades de lazer por iniciativa própria.' },
        { id: 66024, text: 'Sinto-me limitado(a) nas escolhas de lazer devido a responsabilidades externas.', isReversed: true },
        { id: 66025, text: 'Participo de atividades de lazer que me desafiam ou estimulam.' },
        { id: 66026, text: 'Minha autonomia para decidir como utilizar o tempo livre é satisfatória.' },
        { id: 66027, text: 'Frequentemente realizo atividades de lazer por obrigação ou pressão externa.', isReversed: true },
        { id: 66028, text: 'Tenho liberdade para organizar meu tempo de lazer conforme desejo.' },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'A pontuação total (0–112) indica o nível de lazer e equilíbrio. Itens invertidos: 3, 5, 10, 12, 16, 18, 20, 24, 27.',
    ranges: [
      { min: 0, max: 28, label: 'Lazer limitado / desequilíbrio', description: 'Pouco envolvimento em atividades recreativas, desequilíbrio vida/trabalho' },
      { min: 29, max: 56, label: 'Lazer moderado', description: 'Participação irregular, prazer parcial, equilíbrio instável' },
      { min: 57, max: 84, label: 'Lazer funcional', description: 'Boa frequência, prazer consistente e equilíbrio adequado' },
      { min: 85, max: 112, label: 'Lazer pleno / equilíbrio elevado', description: 'Alta qualidade de lazer, engajamento pleno e ótimo equilíbrio vida/trabalho' },
    ],
  },
};