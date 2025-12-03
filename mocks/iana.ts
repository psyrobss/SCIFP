
import { InventoryForm } from '../types';

export const IANA_INVENTORY: InventoryForm = {
  id: 'iana',
  acronym: 'IANA',
  name: 'Inventário de Alterações Neuropsicológicas Autorrelatadas (IANA)',
  objective: 'Identificar possíveis alterações cognitivas, emocionais e comportamentais percebidas pelo próprio indivíduo, com foco na funcionalidade diária.',
  instructions: 'Leia cada afirmação e indique o quanto ela corresponde à sua realidade atual. Não existem respostas certas ou erradas; seja o mais honesto possível consigo mesmo.',
  responseScale: [
    { value: 1, label: 'Discordo Totalmente' },
    { value: 2, label: 'Discordo Fortemente' },
    { value: 3, label: 'Discordo em Parte' },
    { value: 4, label: 'Neutro / Às vezes' },
    { value: 5, label: 'Concordo em Parte' },
    { value: 6, label: 'Concordo Fortemente' },
    { value: 7, label: 'Concordo Totalmente' },
  ],
  domains: [
    {
      id: 'attention',
      name: 'Atenção e Concentração',
      icon: '🧩',
      description: 'Avalia a capacidade de manter o foco, filtrar distrações e sustentar o esforço mental em tarefas.',
      interpretationLabels: {
        level_1: 'Atenção preservada e funcional.',
        level_2: 'Oscilações leves de atenção.',
        level_3: 'Desafios atencionais moderados.',
        level_4: 'Necessidade de suporte atencional significativo.',
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
        level_1: 'Memória funcional e preservada.',
        level_2: 'Lapsos de memória pontuais.',
        level_3: 'Dificuldades de memória recorrentes.',
        level_4: 'Impacto significativo na retenção de informações.',
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
      description: 'Avalia fluência verbal, compreensão e organização do discurso no cotidiano.',
      interpretationLabels: {
        level_1: 'Comunicação fluida e preservada.',
        level_2: 'Leves hesitações na busca de palavras.',
        level_3: 'Dificuldades moderadas de expressão.',
        level_4: 'Desafios significativos na comunicação verbal.',
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
      description: 'Mede a capacidade de planejamento, organização, tomada de decisão e flexibilidade.',
      interpretationLabels: {
        level_1: 'Bom gerenciamento executivo.',
        level_2: 'Desafios leves de organização.',
        level_3: 'Dificuldades executivas moderadas.',
        level_4: 'Disfunção executiva com impacto na rotina.',
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
      description: 'Avalia a interpretação de estímulos visuais, orientação espacial e reconhecimento.',
      interpretationLabels: {
        level_1: 'Percepção visuoespacial preservada.',
        level_2: 'Dificuldades perceptivas leves.',
        level_3: 'Desafios moderados de orientação.',
        level_4: 'Dificuldades significativas de reconhecimento/espaço.',
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
      description: 'Mede a estabilidade do humor e a capacidade de regular emoções.',
      interpretationLabels: {
        level_1: 'Boa estabilidade emocional.',
        level_2: 'Oscilações de humor situacionais.',
        level_3: 'Dificuldades moderadas de regulação.',
        level_4: 'Instabilidade emocional significativa.',
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
      description: 'Avalia o impacto das dificuldades cognitivas na interação social e motivação.',
      interpretationLabels: {
        level_1: 'Funcionamento social preservado.',
        level_2: 'Leve retraimento ou mudança de comportamento.',
        level_3: 'Impacto moderado na vida social.',
        level_4: 'Dificuldades comportamentais significativas.',
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
    description: 'A pontuação média (1-7) indica a intensidade percebida das alterações. Escores mais altos sugerem maior necessidade de investigação.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Funcionamento Cognitivo Preservado', 
        description: 'O perfil indica um funcionamento cognitivo e comportamental dentro do esperado. Queixas eventuais podem estar relacionadas a cansaço pontual, sem configurar um padrão clínico de déficit.',
        recommendations: [
          'Manter estilo de vida ativo e cognitivamente estimulante.',
          'Praticar higiene do sono e atividade física regular para preservação cognitiva.',
          'Realizar check-up médico anual para monitoramento geral.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Sinais de Alerta Leves / Sobrecarga', 
        description: 'Presença de algumas dificuldades cognitivas ou emocionais que podem estar associadas a estresse, ansiedade, privação de sono ou sobrecarga momentânea. Merece atenção preventiva.',
        recommendations: [
          'Investigar qualidade do sono e níveis de estresse atuais.',
          'Utilizar estratégias externas de organização (agendas, lembretes).',
          'Monitorar se os sintomas aumentam em períodos de maior exigência.',
          'Considerar avaliação médica se houver histórico familiar de transtornos cognitivos.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Alterações Moderadas / Necessidade de Investigação', 
        description: 'Relato de dificuldades frequentes em múltiplos domínios. Indica provável disfunção que afeta a eficiência no trabalho ou na vida social. Pode sugerir transtornos de humor afetando a cognição, TDAH ou outras condições.',
        recommendations: [
          'Recomenda-se avaliação neuropsicológica formal para investigar déficits objetivos.',
          'Avaliação psiquiátrica para descartar causas emocionais (depressão, ansiedade).',
          'Implementar rotinas estruturadas e reduzir a sobrecarga de tarefas.',
          'Treino cognitivo focado nas áreas de maior dificuldade (ex: atenção ou memória).'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Impacto Funcional Significativo', 
        description: 'Relato de dificuldades intensas e frequentes com alto impacto na autonomia ou desempenho. Sugere a necessidade de intervenção clínica prioritária para suporte e reabilitação.',
        recommendations: [
          'Encaminhamento prioritário para neurologista e neuropsicólogo.',
          'Avaliação de necessidade de suporte para atividades da vida diária.',
          'Investigação de causas orgânicas, metabólicas ou neurológicas.',
          'Adaptação do ambiente para garantir segurança e funcionalidade.'
        ]
      },
    ],
  }
};
