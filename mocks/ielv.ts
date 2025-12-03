
import { InventoryForm } from '../types';

export const IELV_INVENTORY: InventoryForm = {
  id: 'ielv',
  acronym: 'IELV',
  name: 'Inventário de Estilo de Lazer e Equilíbrio Vida/Trabalho',
  objective: 'Mapear a qualidade do tempo livre, a capacidade de desconexão das obrigações e o equilíbrio entre produtividade e recuperação (lazer restaurador).',
  instructions: 'Avalie o quanto cada frase descreve sua rotina e sentimentos atuais em relação ao seu tempo livre e equilíbrio de vida, usando a escala de 1 a 7.',
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
      id: 'disconnection_ability',
      name: 'Capacidade de Desconexão',
      icon: '📴',
      description: 'Habilidade de se desligar mental e emocionalmente das obrigações de trabalho/estudo durante o tempo livre.',
      interpretationLabels: {
        level_1: 'Incapacidade de desligar (ruminação).',
        level_2: 'Desconexão difícil.',
        level_3: 'Boa separação de papéis.',
        level_4: 'Desconexão total e restauradora.',
      },
      questions: [
        { id: 66001, text: 'Consigo esquecer os problemas do trabalho quando estou em casa/lazer.' },
        { id: 66002, text: 'Verifico e-mails ou mensagens de trabalho fora do expediente com frequência.', isReversed: true },
        { id: 66003, text: 'Sinto culpa quando não estou sendo produtivo.', isReversed: true },
        { id: 66004, text: 'Minha mente continua "trabalhando" mesmo quando tento relaxar.', isReversed: true },
        { id: 66005, text: 'Consigo estar mentalmente presente nos momentos de diversão.' },
        { id: 66006, text: 'Tenho rituais que me ajudam a mudar do "modo trabalho" para o "modo descanso".' },
        { id: 66007, text: 'Respeito meus próprios limites de horário.' },
      ],
    },
    {
      id: 'leisure_quality',
      name: 'Qualidade e Variedade do Lazer',
      icon: '🎨',
      description: 'Riqueza das experiências de lazer (ativo, passivo, social, criativo) e satisfação com elas.',
      interpretationLabels: {
        level_1: 'Lazer pobre ou inexistente.',
        level_2: 'Lazer monótono/passivo.',
        level_3: 'Lazer diversificado e agradável.',
        level_4: 'Lazer enriquecedor e fluído.',
      },
      questions: [
        { id: 66008, text: 'Tenho hobbies ou interesses que pratico regularmente.' },
        { id: 66009, text: 'Meu lazer se resume a descansar por exaustão (ex: apenas dormir/TV).', isReversed: true },
        { id: 66010, text: 'Sinto-me energizado(a) e feliz durante minhas atividades de lazer.' },
        { id: 66011, text: 'Busco novidades e experiências diferentes no meu tempo livre.' },
        { id: 66012, text: 'Sinto que meu tempo livre passa voando de forma agradável.' },
        { id: 66013, text: 'Tenho um bom equilíbrio entre lazer ativo (fazer algo) e passivo (relaxar).' },
        { id: 66014, text: 'Sinto tédio ou vazio nos fins de semana.', isReversed: true },
      ],
    },
    {
      id: 'balance_satisfaction',
      name: 'Satisfação com o Equilíbrio',
      icon: '⚖️',
      description: 'Percepção subjetiva de harmonia entre as diferentes áreas da vida.',
      interpretationLabels: {
        level_1: 'Sensação de sobrecarga constante.',
        level_2: 'Desequilíbrio frequente.',
        level_3: 'Bom gerenciamento de tempo.',
        level_4: 'Harmonia e satisfação plena.',
      },
      questions: [
        { id: 66015, text: 'Sinto que dedico tempo suficiente para mim mesmo(a).' },
        { id: 66016, text: 'Minha vida pessoal está sendo prejudicada pelo trabalho.', isReversed: true },
        { id: 66017, text: 'Consigo dar atenção à minha família/amigos tanto quanto gostaria.' },
        { id: 66018, text: 'Sinto-me constantemente correndo contra o relógio.', isReversed: true },
        { id: 66019, text: 'Estou satisfeito(a) com a forma como distribuo meu tempo.' },
        { id: 66020, text: 'Tenho tempo para cuidar da minha saúde e bem-estar.' },
        { id: 66021, text: 'Muitas vezes cancelo lazer por causa de obrigações.', isReversed: true },
      ],
    },
    {
      id: 'recovery_restoration',
      name: 'Recuperação e Restauração',
      icon: '🔋',
      description: 'Eficácia do tempo livre em repor as energias físicas e mentais gastas.',
      interpretationLabels: {
        level_1: 'Fadiga crônica não recuperada.',
        level_2: 'Recuperação insuficiente.',
        level_3: 'Boa reposição de energias.',
        level_4: 'Alta vitalidade e restauração.',
      },
      questions: [
        { id: 66022, text: 'Volto ao trabalho/estudo me sentindo descansado(a) após o fim de semana.' },
        { id: 66023, text: 'Mesmo depois de folgas, continuo me sentindo cansado(a).', isReversed: true },
        { id: 66024, text: 'Meu tempo livre me ajuda a lidar com o estresse da semana.' },
        { id: 66025, text: 'Sinto que minha bateria mental recarrega quando me divirto.' },
        { id: 66026, text: 'Durmo bem e acordo com disposição.' },
        { id: 66027, text: 'Tenho momentos de silêncio e calma na minha rotina.' },
        { id: 66028, text: 'O lazer me ajuda a ter novas ideias e perspectivas.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica a qualidade do equilíbrio vida-trabalho. Escores altos sugerem boa capacidade de recuperação e satisfação pessoal.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Desequilíbrio e Sobrecarga', 
        description: 'A vida está dominada por obrigações, com pouco espaço para recuperação. Risco de exaustão e perda de identidade fora do trabalho.',
        recommendations: [
          'Estabelecer limites rígidos de horário para trabalho.',
          'Agendar "compromissos consigo mesmo" que não podem ser cancelados.',
          'Praticar o "nadismo" (fazer nada) sem culpa por alguns minutos.',
          'Reduzir o tempo de tela para melhorar a qualidade do descanso.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Lazer Insuficiente', 
        description: 'O tempo livre existe, mas pode estar sendo mal aproveitado (ex: telas, preocupação) ou ser insuficiente para a recuperação total.',
        recommendations: [
          'Buscar um hobby ativo que engaje a mente e o corpo.',
          'Melhorar a transição trabalho-casa (ritual de desconexão).',
          'Avaliar se o perfeccionismo está roubando tempo de descanso.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Equilíbrio Funcional', 
        description: 'Bom balanço entre dever e prazer. O indivíduo consegue descansar e se divertir, mantendo a saúde mental e a produtividade sustentável.',
        recommendations: [
          'Planejar pequenas viagens ou eventos para ter algo a esperar.',
          'Diversificar as atividades de lazer (social, físico, cultural).',
          'Proteger o sono como pilar fundamental da recuperação.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Estilo de Vida Harmonioso', 
        description: 'Excelente integração. O lazer é fonte de nutrição profunda, criatividade e alegria. Alta capacidade de estar presente em cada momento.',
        recommendations: [
          'Manter a priorização do bem-estar.',
          'Inspirar colegas e familiares a valorizarem o descanso.',
          'Usar a energia renovada para projetos pessoais de significado.'
        ]
      },
    ],
  },
};
