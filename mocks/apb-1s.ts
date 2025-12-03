
import { InventoryForm } from '../types';

export const APB1S_INVENTORY: InventoryForm = {
  id: 'apb-1s',
  acronym: 'APB-1s',
  name: 'Avaliação Psicológica Pós-bariátrica (1ª semana)',
  objective: 'Monitoramento precoce da adaptação emocional e comportamental na primeira semana pós-cirurgia, identificando sinais de risco, adesão e necessidade de suporte imediato.',
  instructions: 'Indique o quanto cada afirmação descreve como você tem se sentido e agido nestes primeiros dias após a cirurgia, usando a escala de 1 a 7.',
  scoreOrientation: 'higher_is_worse',
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
      id: 'emotional_distress',
      name: 'Angústia Emocional e Humor',
      icon: '😔',
      description: 'Presença de tristeza, irritabilidade, medo intenso ou arrependimento precoce.',
      interpretationLabels: {
        level_1: 'Estabilidade emocional.',
        level_2: 'Oscilação de humor esperada.',
        level_3: 'Angústia moderada.',
        level_4: 'Sinal de alerta emocional.',
      },
      questions: [
        { id: 78001, text: 'Tenho sentido tristeza profunda ou vontade de chorar frequente.' },
        { id: 78002, text: 'Sinto-me muito irritado(a) ou impaciente com as pessoas.' },
        { id: 78003, text: 'Tenho tido pensamentos de arrependimento por ter feito a cirurgia.' },
        { id: 78004, text: 'Sinto um medo exagerado de que algo ruim vá acontecer.' },
        { id: 78005, text: 'Meu humor está mudando muito rapidamente (altos e baixos).' },
      ],
    },
    {
      id: 'anxiety_body_concerns',
      name: 'Ansiedade e Preocupação Corporal',
      icon: '😟',
      description: 'Ansiedade focada na recuperação física, sintomas corporais ou medo de complicações.',
      interpretationLabels: {
        level_1: 'Tranquilidade com a recuperação.',
        level_2: 'Preocupação leve/normal.',
        level_3: 'Ansiedade elevada.',
        level_4: 'Ansiedade severa/hipocondríaca.',
      },
      questions: [
        { id: 78006, text: 'Estou excessivamente preocupado(a) com qualquer sensação no meu estômago.' },
        { id: 78007, text: 'Tenho dificuldade em dormir por causa de preocupações com a saúde.' },
        { id: 78008, text: 'Sinto-me tenso(a) e incapaz de relaxar.' },
        { id: 78009, text: 'Fico monitorando meu corpo o tempo todo em busca de problemas.' },
        { id: 78010, text: 'Tenho medo de não conseguir me adaptar à nova vida.' },
      ],
    },
    {
      id: 'eating_adaptation',
      name: 'Adaptação à Dieta e Impulsos',
      icon: '🍽️',
      description: 'Dificuldades em seguir a dieta líquida/pastosa, presença de fome emocional ou vontade de burlar regras.',
      interpretationLabels: {
        level_1: 'Boa adesão e controle.',
        level_2: 'Dificuldade leve de adaptação.',
        level_3: 'Luta contra impulsos alimentares.',
        level_4: 'Risco de comportamento alimentar desadaptativo.',
      },
      questions: [
        { id: 78011, text: 'Sinto uma vontade incontrolável de mastigar ou comer sólidos.' },
        { id: 78012, text: 'Tenho pensamentos sobre burlar a dieta recomendada.' },
        { id: 78013, text: 'Sinto "fome emocional" (vontade de comer por ansiedade), não física.' },
        { id: 78014, text: 'Acho muito difícil seguir as restrições alimentares atuais.' },
        { id: 78015, text: 'Tenho medo de nunca mais sentir prazer em comer.' },
      ],
    },
    {
      id: 'support_coping',
      name: 'Suporte e Enfrentamento (Recursos)',
      icon: '🤝',
      description: 'Percepção de apoio social e capacidade de manter uma atitude positiva (Invertido: nota alta = falta de recurso).',
      interpretationLabels: {
        level_1: 'Bom suporte e enfrentamento.',
        level_2: 'Necessidade de mais apoio.',
        level_3: 'Sensação de desamparo.',
        level_4: 'Isolamento e falta de recursos.',
      },
      questions: [
        { id: 78016, text: 'Sinto-me sozinho(a) neste processo de recuperação.' },
        { id: 78017, text: 'Sinto que ninguém entende o que estou passando.' },
        { id: 78018, text: 'Tenho dificuldade em pedir ajuda prática ou emocional.' },
        { id: 78019, text: 'Estou confiante de que vou superar esta fase inicial.', isReversed: true },
        { id: 78020, text: 'Sinto-me apoiado(a) pela minha família/amigos.', isReversed: true },
      ],
    },
    {
      id: 'risk_indicators',
      name: 'Indicadores de Risco (Atenção)',
      icon: '⚠️',
      description: 'Sinais de alerta para depressão grave, ideação suicida ou uso de substâncias.',
      interpretationLabels: {
        level_1: 'Ausência de risco imediato.',
        level_2: 'Sinal de alerta leve.',
        level_3: 'Risco moderado.',
        level_4: 'Risco elevado (intervenção imediata).',
      },
      questions: [
        { id: 78021, text: 'Tenho tido pensamentos de que não vale a pena viver.' },
        { id: 78022, text: 'Sinto um desespero profundo e sem saída.' },
        { id: 78023, text: 'Tenho vontade de usar álcool ou medicamentos para apagar a mente.' },
        { id: 78024, text: 'Sinto que perdi minha identidade com a cirurgia.' },
        { id: 78025, text: 'Vejo o futuro com total desesperança.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de dificuldade na adaptação pós-cirúrgica imediata. Escores altos em domínios específicos sinalizam áreas de intervenção prioritária.',
    notes: [
      'ATENÇÃO: Qualquer pontuação acima de 4 no domínio "Indicadores de Risco" exige contato imediato com a equipe de saúde mental.',
      'Sintomas emocionais intensos na primeira semana podem ser reativos (baby blues bariátrico), mas requerem monitoramento.'
    ],
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Adaptação Estável', 
        description: 'Recuperação emocional dentro do esperado. O paciente relata desconfortos normais, mas mantém o otimismo e a adesão ao tratamento.',
        recommendations: [
          'Reforçar comportamentos positivos e a adesão.',
          'Validar que pequenas oscilações de humor são normais nesta fase.',
          'Manter o acompanhamento nutricional e médico padrão.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Dificuldade de Adaptação Leve', 
        description: 'Sinais de ansiedade, irritabilidade ou luto pela comida ("mourning for food"). O paciente pode precisar de mais orientação e tranquilização.',
        recommendations: [
          'Psicoeducação sobre as fases emocionais da recuperação.',
          'Aumentar o suporte familiar/social.',
          'Técnicas de relaxamento para ansiedade leve.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Desconforto Emocional Moderado', 
        description: 'Dificuldades significativas em lidar com a dieta, humor deprimido ou ansiedade intensa. Risco de não adesão ou sofrimento psíquico.',
        recommendations: [
          'Consulta psicológica de suporte breve focada no "aqui e agora".',
          'Revisão das estratégias de enfrentamento.',
          'Monitoramento mais frequente (contato telefônico ou mensagem).'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Prioridade Clínica (Risco)', 
        description: 'Sinais de depressão, desesperança, impulsividade alimentar ou arrependimento intenso. Requer intervenção ativa da equipe multidisciplinar.',
        recommendations: [
          'Avaliação psiquiátrica e psicológica urgente.',
          'Mobilização da rede de apoio familiar.',
          'Investigação de segurança (risco de suicídio ou uso de substâncias).',
          'Plano de cuidados intensivo.'
        ]
      },
    ],
  },
};
