
import { InventoryForm } from '../types';

export const IANA_INVENTORY: InventoryForm = {
  id: 'iana',
  acronym: 'IANA',
  name: 'Inventário de Alterações Neuropsicológicas Autorrelatadas (IANA)',
  objective: 'Identificar possíveis alterações cognitivas, emocionais e comportamentais percebidas pelo próprio indivíduo.',
  instructions: 'Leia cada afirmação e indique com que frequência ou intensidade ela ocorre atualmente.',
  responseScale: [
    { value: 0, label: 'Nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre' },
  ],
  domains: [
    {
      id: 'attention',
      name: 'Atenção e Concentração',
      icon: '🧩',
      description: 'Avalia a capacidade de manter o foco, filtrar distrações e sustentar o esforço mental em tarefas.',
      interpretationLabels: {
        level_1: 'Nenhuma dificuldade significativa de atenção.',
        level_2: 'Lapsos de atenção ocasionais, com baixo impacto.',
        level_3: 'Dificuldades de atenção persistentes e perceptíveis.',
        level_4: 'Dificuldades de atenção intensas com impacto funcional.',
      },
      questions: [
        { id: 101, text: 'Tenho dificuldade em manter a atenção em tarefas por muito tempo.' },
        { id: 102, text: 'Distrai-me facilmente com estímulos do ambiente.' },
        { id: 103, text: 'Sinto que minha mente “viaja” mesmo durante conversas.' },
        { id: 104, text: 'Tenho dificuldade em terminar tarefas iniciadas.' },
        { id: 105, text: 'Preciso reler várias vezes um texto para entendê-lo.' },
        { id: 106, text: 'Tenho dificuldade em fazer duas coisas ao mesmo tempo.' },
      ],
    },
    {
      id: 'memory',
      name: 'Memória',
      icon: '💭',
      description: 'Mede a percepção sobre a capacidade de reter e recuperar informações recentes e importantes do dia a dia.',
      interpretationLabels: {
        level_1: 'Nenhuma queixa de memória significativa.',
        level_2: 'Lapsos de memória leves e esporádicos.',
        level_3: 'Dificuldades de memória moderadas e recorrentes.',
        level_4: 'Queixas de memória intensas com impacto no cotidiano.',
      },
      questions: [
        { id: 201, text: 'Esqueço compromissos ou datas importantes.' },
        { id: 202, text: 'Tenho dificuldade em lembrar nomes de pessoas conhecidas.' },
        { id: 203, text: 'Esqueço o que fui fazer em um cômodo ao entrar nele.' },
        { id: 204, text: 'Tenho dificuldade em lembrar o que acabei de ler ou ouvir.' },
        { id: 205, text: 'Costumo perder objetos ou deixá-los em lugares errados.' },
        { id: 206, text: 'Tenho dificuldade em recordar acontecimentos recentes.' },
      ],
    },
    {
      id: 'language',
      name: 'Linguagem',
      icon: '🗣️',
      description: 'Avalia dificuldades na expressão verbal, compreensão e organização do discurso no cotidiano.',
      interpretationLabels: {
        level_1: 'Nenhuma dificuldade de linguagem relatada.',
        level_2: 'Dificuldades leves e pontuais na busca de palavras.',
        level_3: 'Dificuldades moderadas na expressão ou compreensão verbal.',
        level_4: 'Dificuldades de linguagem significativas e frequentes.',
      },
      questions: [
        { id: 301, text: 'Tenho dificuldade em encontrar palavras durante conversas.' },
        { id: 302, text: 'Troco palavras parecidas sem perceber (ex: “garfo” por “faca”).' },
        { id: 303, text: 'Tenho dificuldade em compreender textos ou instruções longas.' },
        { id: 304, text: 'Às vezes sinto que minhas frases saem confusas ou desconexas.' },
        { id: 305, text: 'Tenho dificuldade em compreender ironias ou duplos sentidos.' },
      ],
    },
    {
      id: 'executive_functions',
      name: 'Funções Executivas',
      icon: '⚙️',
      description: 'Mede a capacidade de planejamento, organização, tomada de decisão e controle de impulsos em atividades diárias.',
      interpretationLabels: {
        level_1: 'Bom funcionamento executivo.',
        level_2: 'Dificuldades leves de planejamento e organização.',
        level_3: 'Dificuldades executivas moderadas com impacto na rotina.',
        level_4: 'Dificuldades executivas intensas e disfuncionais.',
      },
      questions: [
        { id: 401, text: 'Tenho dificuldade em planejar ou organizar minhas atividades.' },
        { id: 402, text: 'Sinto-me sobrecarregado(a) com tarefas simples.' },
        { id: 403, text: 'Tenho dificuldade em tomar decisões.' },
        { id: 404, text: 'Costumo agir por impulso sem pensar nas consequências.' },
        { id: 405, text: 'Tenho dificuldade em controlar o tempo ou cumprir prazos.' },
        { id: 406, text: 'Tenho dificuldade em me adaptar a mudanças inesperadas.' },
      ],
    },
    {
      id: 'perception',
      name: 'Percepção e Processamento Visual/Espacial',
      icon: '🧍',
      description: 'Avalia dificuldades na interpretação de estímulos visuais, orientação espacial e reconhecimento de padrões.',
      interpretationLabels: {
        level_1: 'Nenhuma dificuldade visuoespacial relatada.',
        level_2: 'Dificuldades leves e ocasionais de percepção.',
        level_3: 'Dificuldades moderadas em tarefas visuoespaciais.',
        level_4: 'Dificuldades intensas de orientação e reconhecimento.',
      },
      questions: [
        { id: 501, text: 'Tenho dificuldade em perceber detalhes em imagens ou mapas.' },
        { id: 502, text: 'Tenho dificuldade em reconhecer rostos familiares.' },
        { id: 503, text: 'Confundo direita e esquerda com frequência.' },
        { id: 504, text: 'Tenho dificuldade em estacionar, desenhar ou montar objetos.' },
        { id: 505, text: 'Troco letras ou números parecidos ao ler ou escrever.' },
      ],
    },
    {
      id: 'emotion',
      name: 'Emoção e Regulação Afetiva',
      icon: '❤️',
      description: 'Mede a estabilidade do humor, a capacidade de regular emoções como raiva e ansiedade, e a expressão afetiva.',
      interpretationLabels: {
        level_1: 'Boa estabilidade e regulação emocional.',
        level_2: 'Labilidade emocional leve ou situacional.',
        level_3: 'Dificuldades moderadas de regulação do humor.',
        level_4: 'Instabilidade emocional intensa e frequente.',
      },
      questions: [
        { id: 601, text: 'Sinto variações bruscas de humor sem motivo claro.' },
        { id: 602, text: 'Fico irritado(a) com facilidade.' },
        { id: 603, text: 'Tenho dificuldade em controlar a ansiedade.' },
        { id: 604, text: 'Sinto-me desmotivado(a) ou sem energia.' },
        { id: 605, text: 'Tenho crises de choro ou sentimentos intensos repentinos.' },
        { id: 606, text: 'Tenho dificuldade em expressar o que sinto.' },
        { id: 607, text: 'Tenho me sentido emocionalmente mais sensível que o normal.' },
      ],
    },
    {
      id: 'behavior',
      name: 'Comportamento e Vida Social',
      icon: '🤝',
      description: 'Avalia o impacto das dificuldades percebidas no isolamento social, motivação para atividades e mudanças de hábito.',
      interpretationLabels: {
        level_1: 'Bom funcionamento social e comportamental.',
        level_2: 'Leve tendência ao isolamento ou desmotivação.',
        level_3: 'Dificuldades moderadas na interação social e motivação.',
        level_4: 'Forte impacto no funcionamento social e comportamental.',
      },
      questions: [
        { id: 701, text: 'Tenho evitado situações sociais por falta de energia ou paciência.' },
        { id: 702, text: 'As pessoas dizem que estou diferente no comportamento.' },
        { id: 703, text: 'Tenho me isolado ou preferido ficar sozinho(a).' },
        { id: 704, text: 'Tenho dificuldade em compreender as emoções dos outros.' },
        { id: 705, text: 'Tenho reações exageradas a pequenas frustrações.' },
        { id: 706, text: 'Tenho me sentido menos interessado(a) em atividades antes prazerosas.' },
        { id: 707, text: 'Tenho dificuldade em iniciar ou manter conversas.' },
        { id: 708, text: 'Tenho tido mudanças em meus hábitos alimentares ou de sono.' },
        { id: 709, text: 'Tenho perdido interesse por responsabilidades do dia a dia.' },
        { id: 710, text: 'Tenho sentido que “não sou mais o mesmo(a)” cognitivamente.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (0-4) indica a intensidade percebida das alterações neuropsicológicas.',
    ranges: [
      { 
        min: 0, 
        max: 0.9, 
        label: 'Funcionamento Cognitivo Preservado', 
        description: 'O indivíduo não relata queixas significativas. As falhas ocasionais estão dentro do esperado para o funcionamento cotidiano normal, provavelmente associadas a cansaço pontual ou distração, sem impacto funcional relevante.',
        recommendations: [
          'Manter estilo de vida ativo e cognitivamente estimulante.',
          'Praticar higiene do sono e atividade física regular para preservação cognitiva.',
          'Realizar check-up médico anual para monitoramento geral.'
        ]
      },
      { 
        min: 1, 
        max: 1.9, 
        label: 'Queixas Leves / Sintomas Subclínicos', 
        description: 'Relato de dificuldades leves ou esporádicas. Podem estar associadas a estresse, ansiedade leve, privação de sono ou sobrecarga momentânea. O impacto funcional é baixo, mas o indivíduo percebe mudanças sutis.',
        recommendations: [
          'Investigar qualidade do sono e níveis de estresse atuais.',
          'Utilizar estratégias externas de organização (agendas, lembretes).',
          'Monitorar se os sintomas aumentam em períodos de maior exigência.',
          'Considerar avaliação médica se houver histórico familiar de demência ou transtornos cognitivos.'
        ]
      },
      { 
        min: 2, 
        max: 2.9, 
        label: 'Alterações Moderadas / Sinal de Alerta', 
        description: 'Queixas frequentes em múltiplos domínios. Indica provável disfunção que afeta a eficiência no trabalho ou na vida social. Pode sugerir transtornos de humor (depressão/ansiedade) afetando a cognição, TDAH adulto ou início de declínio cognitivo leve, dependendo da idade e contexto.',
        recommendations: [
          'Recomenda-se avaliação neuropsicológica formal para investigar déficits objetivos.',
          'Avaliação psiquiátrica para descartar causas emocionais (depressão, ansiedade).',
          'Implementar rotinas estruturadas e reduzir a sobrecarga de tarefas.',
          'Treino cognitivo focado nas áreas de maior dificuldade (ex: atenção ou memória).'
        ]
      },
      { 
        min: 3, 
        max: 4, 
        label: 'Déficit Neuropsicológico Significativo', 
        description: 'Relato de falhas graves e frequentes com alto impacto funcional e prejuízo na autonomia ou desempenho. Sugere comprometimento neurológico, psiquiátrico severo ou exaustão cognitiva extrema (Burnout).',
        recommendations: [
          'Encaminhamento prioritário para neurologista e neuropsicólogo.',
          'Necessidade de suporte para atividades da vida diária se a autonomia estiver comprometida.',
          'Investigação de causas orgânicas, metabólicas ou neurológicas.',
          'Adaptação do ambiente para garantir segurança e funcionalidade.'
        ]
      },
    ],
  }
};