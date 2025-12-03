
import { InventoryForm } from '../types';

export const IEV_INVENTORY: InventoryForm = {
  id: 'iev',
  acronym: 'IEV',
  name: 'Inventário de Estilos de Vínculo',
  objective: 'Identificar os padrões de conexão emocional e estratégias de relacionamento, compreendendo como a pessoa equilibra intimidade, autonomia e segurança nos vínculos.',
  instructions: 'Leia cada frase e indique o quanto ela se aplica geralmente aos seus sentimentos e comportamentos em relacionamentos significativos na escala de 1 a 7.',
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
      id: 'secure_attachment',
      name: 'Segurança e Conexão (Estilo Seguro)',
      icon: '💖',
      orientation: 'higher_is_better', // Nota alta é BOM
      description: 'Capacidade de confiar, oferecer e receber apoio, mantendo o equilíbrio entre intimidade e autonomia.',
      interpretationLabels: {
        level_1: 'Dificuldade em confiar na segurança do vínculo.',
        level_2: 'Segurança relacional em desenvolvimento.',
        level_3: 'Boa capacidade de conexão e confiança.',
        level_4: 'Base segura sólida e interdependência saudável.',
      },
      questions: [
        { id: 30001, text: 'Sinto-me confortável ao depender de pessoas próximas.' },
        { id: 30002, text: 'Confio que os outros estarão disponíveis quando preciso.' },
        { id: 30003, text: 'Posso expressar meus sentimentos sem medo excessivo de rejeição.' },
        { id: 30004, text: 'Sinto-me confortável em receber apoio emocional.' },
        { id: 30005, text: 'Consigo manter relacionamentos próximos e satisfatórios.' },
        { id: 30006, text: 'Consigo equilibrar meu tempo sozinho com o tempo a dois.' },
        { id: 30007, text: 'Acredito que as pessoas importantes para mim querem o meu bem.' },
        { id: 30008, text: 'Sinto-me seguro(a) em compartilhar vulnerabilidades.' },
      ],
    },
    {
      id: 'anxious_attachment',
      name: 'Busca de Proximidade e Validação (Estilo Ansioso)',
      icon: '🫂',
      orientation: 'higher_is_worse', // Nota alta é ALERTA
      description: 'Tendência a buscar maior proximidade e reasseguramento para sentir-se seguro, podendo haver sensibilidade a sinais de distanciamento.',
      interpretationLabels: {
        level_1: 'Baixa necessidade de validação externa.',
        level_2: 'Necessidade ocasional de reasseguramento.',
        level_3: 'Frequente busca por proximidade e validação.',
        level_4: 'Intensa necessidade de conexão e sensibilidade a rejeição.',
      },
      questions: [
        { id: 30009, text: 'Sinto receio de que as pessoas importantes se afastem de mim.' },
        { id: 30010, text: 'Fico preocupado(a) se não recebo notícias de quem amo por um tempo.' },
        { id: 30011, text: 'Sinto-me mais seguro(a) quando tenho confirmação constante de afeto.' },
        { id: 30012, text: 'Às vezes sinto que me importo mais com a relação do que a outra pessoa.' },
        { id: 30013, text: 'Tenho dificuldade em confiar que sou valorizado(a) se não me disserem isso.' },
        { id: 30014, text: 'Fico inquieto(a) quando percebo o outro distante emocionalmente.' },
        { id: 30015, text: 'Tendo a interpretar silêncios como sinal de que algo está errado.' },
        { id: 30016, text: 'Invisto muita energia mental monitorando o estado dos meus relacionamentos.' },
      ],
    },
    {
      id: 'avoidant_attachment',
      name: 'Autossuficiência e Preservação (Estilo Evitativo)',
      icon: '🛡️',
      orientation: 'higher_is_worse', // Nota alta é ALERTA
      description: 'Preferência pela autonomia e autoapoio, com tendência a preservar o espaço pessoal quando a intimidade se torna intensa.',
      interpretationLabels: {
        level_1: 'Conforto com a dependência mútua.',
        level_2: 'Preferência leve por autonomia.',
        level_3: 'Valorização forte da independência e espaço pessoal.',
        level_4: 'Prioridade alta à autossuficiência e distanciamento emocional.',
      },
      questions: [
        { id: 30017, text: 'Prefiro resolver meus problemas sozinho(a) a pedir ajuda.' },
        { id: 30018, text: 'Sinto necessidade de proteger meu espaço quando alguém se aproxima demais.' },
        { id: 30019, text: 'Evito compartilhar sentimentos muito profundos para não me sentir exposto(a).' },
        { id: 30020, text: 'Sinto-me sufocado(a) quando há demanda excessiva por intimidade.' },
        { id: 30021, text: 'Valorizo minha independência acima de tudo nas relações.' },
        { id: 30022, text: 'Sinto que lidar com as emoções dos outros é exaustivo.' },
        { id: 30023, text: 'Mantenho uma certa reserva emocional, mesmo com pessoas próximas.' },
      ],
    },
    {
      id: 'ambivalent_attachment',
      name: 'Vigilância Relacional (Estilo Desorganizado/Ambivalente)',
      icon: '👁️',
      orientation: 'higher_is_worse', // Nota alta é ALERTA
      description: 'Padrão complexo onde coexistem o desejo de proximidade e o medo de se ferir, gerando reações de proteção e aproximação alternadas.',
      interpretationLabels: {
        level_1: 'Padrão relacional estável e previsível.',
        level_2: 'Alguma oscilação entre querer e temer a intimidade.',
        level_3: 'Sentimentos mistos frequentes sobre confiar nos outros.',
        level_4: 'Intensa ambivalência e vigilância em relações íntimas.',
      },
      questions: [
        { id: 30024, text: 'Às vezes quero estar perto, mas sinto medo quando isso acontece.' },
        { id: 30025, text: 'Minhas reações em relacionamentos podem ser imprevisíveis para mim mesmo(a).' },
        { id: 30026, text: 'Sinto dificuldade em relaxar totalmente e confiar, mesmo querendo muito.' },
        { id: 30027, text: 'Experimento momentos de muita esperança seguidos de muita desconfiança.' },
        { id: 30028, text: 'Sinto-me confuso(a) sobre se é seguro me entregar a uma relação.' },
        { id: 30029, text: 'Às vezes afasto quem amo para me proteger, e depois me arrependo.' },
        { id: 30030, text: 'Fico em estado de alerta constante esperando que algo dê errado na relação.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A análise é baseada no perfil predominante. Não há "certo" ou "errado", mas sim estratégias diferentes de buscar segurança.',
    ranges: [
        { 
          min: 1, 
          max: 7, 
          label: 'Análise de Perfil de Vínculo', 
          description: 'Observe as pontuações médias em cada domínio. O estilo com maior pontuação indica sua estratégia preferencial de conexão. É comum ter características de mais de um estilo.',
          recommendations: [
            'Segurança e Conexão (Alto): Indica uma base segura interna. Use isso para apoiar parceiros com estilos diferentes.',
            'Busca de Proximidade (Alto): Valide sua necessidade de conexão, mas pratique a auto-regulação e o auto-apoio.',
            'Autossuficiência (Alto): Respeite sua necessidade de espaço, mas tente comunicar isso verbalmente em vez de se afastar bruscamente.',
            'Vigilância Relacional (Alto): Trabalhe a construção de confiança gradual e a regulação do sistema de alerta em terapia.'
          ]
        }
    ],
  }
};
