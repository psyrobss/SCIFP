
import { InventoryForm } from '../types';

export const IAPM_INVENTORY: InventoryForm = {
  id: 'iapm',
  acronym: 'IAPM',
  name: 'Inventário de Atenção e Processamento Mental (IAPM)',
  objective: 'Avaliar, por autorrelato, o nível de atenção, vigilância, velocidade de processamento e clareza mental no cotidiano.',
  instructions: 'A seguir, estão frases sobre como você costuma perceber sua atenção e capacidade mental em diferentes situações. Marque a opção que melhor descreve o que ocorre com você na maioria dos dias.',
  responseScale: [
    { value: 0, label: 'Nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre' },
  ],
  domains: [
    {
      id: 'sustained_attention',
      name: 'Atenção Sustentada',
      icon: '🎯',
      description: 'Capacidade de manter o foco em uma tarefa ou estímulo por um período prolongado sem se distrair.',
      interpretationLabels: {
        level_1: 'Excelente capacidade de atenção sustentada.',
        level_2: 'Dificuldades leves para manter o foco por longos períodos.',
        level_3: 'Dificuldade moderada de concentração em tarefas monótonas.',
        level_4: 'Forte dificuldade em sustentar a atenção, com alto nível de distração.',
      },
      questions: [
        { id: 1801, text: 'Tenho dificuldade em manter o foco por longos períodos.' },
        { id: 1802, text: 'Percebo que minha mente “desliga” durante tarefas monótonas.' },
        { id: 1803, text: 'Perco a concentração facilmente mesmo em atividades simples.' },
        { id: 1804, text: 'Fico cansado(a) mentalmente após alguns minutos de leitura.' },
        { id: 1805, text: 'Tenho dificuldade em continuar prestando atenção quando algo se torna repetitivo.' },
        { id: 1806, text: 'Costumo “viajar” nos próprios pensamentos durante conversas ou filmes.' },
      ],
    },
    {
      id: 'processing_speed',
      name: 'Velocidade de Processamento',
      icon: '⚡',
      description: 'Agilidade para compreender, organizar e responder a informações recebidas do ambiente.',
      interpretationLabels: {
        level_1: 'Velocidade de processamento mental ágil e eficiente.',
        level_2: 'Leve lentidão para processar informações novas.',
        level_3: 'Lentidão moderada no raciocínio e na organização de pensamentos.',
        level_4: 'Forte sensação de lentidão mental com impacto funcional.',
      },
      questions: [
        { id: 1901, text: 'Preciso de mais tempo que o normal para compreender informações novas.' },
        { id: 1902, text: 'Tenho a sensação de que meu raciocínio está mais lento que antes.' },
        { id: 1903, text: 'Demoro para responder quando alguém fala comigo.' },
        { id: 1904, text: 'Preciso de mais tempo para organizar meus pensamentos antes de agir.' },
        { id: 1905, text: 'Sinto-me “mentalmente devagar” em situações que exigem rapidez.' },
        { id: 1906, text: 'Tenho dificuldade em acompanhar conversas rápidas ou dinâmicas.' },
      ],
    },
    {
      id: 'attention_switching',
      name: 'Alternância Atencional (Flexibilidade do Foco)',
      icon: '🔄',
      description: 'Habilidade de mudar o foco de atenção entre diferentes tarefas ou estímulos de forma eficiente.',
      interpretationLabels: {
        level_1: 'Excelente flexibilidade e alternância de foco.',
        level_2: 'Dificuldade leve para alternar entre tarefas ou após interrupções.',
        level_3: 'Dificuldade moderada em lidar com múltiplas demandas simultâneas.',
        level_4: 'Forte dificuldade de alternância atencional, com confusão mental.',
      },
      questions: [
        { id: 2001, text: 'Tenho dificuldade em mudar de uma tarefa para outra sem me confundir.' },
        { id: 2002, text: 'Quando interrompido(a), demoro a retomar o raciocínio anterior.' },
        { id: 2003, text: 'Fico desorientado(a) quando preciso lidar com várias demandas simultâneas.' },
        { id: 2004, text: 'Tenho dificuldade em alternar entre pensar, ouvir e escrever ao mesmo tempo.' },
        { id: 2005, text: 'Sinto-me “travado(a)” quando há várias coisas competindo por minha atenção.' },
        { id: 2006, text: 'Tenho dificuldade em retornar ao foco depois de uma distração.' },
      ],
    },
    {
      id: 'selective_attention',
      name: 'Atenção Seletiva e Filtragem de Estímulos',
      icon: '🧩',
      description: 'Capacidade de focar em um estímulo relevante enquanto ignora outras distrações ao redor.',
      interpretationLabels: {
        level_1: 'Excelente capacidade de filtrar distrações.',
        level_2: 'Leve dificuldade em ignorar estímulos irrelevantes.',
        level_3: 'Dificuldade moderada de concentração em ambientes com distrações.',
        level_4: 'Forte sensibilidade a distrações, com sobrecarga sensorial.',
      },
      questions: [
        { id: 2101, text: 'Tenho dificuldade em ignorar ruídos, pessoas ou distrações ao redor.' },
        { id: 2102, text: 'Qualquer barulho ou movimento me tira a concentração.' },
        { id: 2103, text: 'Tenho dificuldade em manter o foco em locais com muitas pessoas.' },
        { id: 2104, text: 'Presto atenção em detalhes irrelevantes e perco o foco no essencial.' },
        { id: 2105, text: 'Tenho dificuldade em manter a atenção mesmo em tarefas prazerosas.' },
        { id: 2106, text: 'Tenho sensação de “sobrecarga” em ambientes muito estimulantes.' },
      ],
    },
    {
      id: 'mental_clarity',
      name: 'Clareza Mental e Consciência Cognitiva',
      icon: '💭',
      description: 'Percepção de um pensamento organizado, nítido e livre de confusão ou "nevoeiro mental".',
      interpretationLabels: {
        level_1: 'Alta clareza mental e pensamento organizado.',
        level_2: 'Sensação ocasional de "nevoeiro mental" ou confusão.',
        level_3: 'Sensação moderada e frequente de mente "enevoada" ou lenta.',
        level_4: 'Forte sensação de confusão mental e sobrecarga.',
      },
      questions: [
        { id: 2201, text: 'Tenho sensação de “mente enevoada” ou confusa.' },
        { id: 2202, text: 'Às vezes parece que meu pensamento está “embaçado” ou lento.' },
        { id: 2203, text: 'Tenho dificuldade em perceber quando começo a me distrair.' },
        { id: 2204, text: 'Tenho a sensação de que estou presente fisicamente, mas “ausente” mentalmente.' },
        { id: 2205, text: 'Tenho dificuldade em perceber o quanto minha atenção varia ao longo do dia.' },
        { id: 2206, text: 'Sinto que minha mente está sobrecarregada e difícil de organizar.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (0-4) indica a intensidade das dificuldades de atenção e processamento mental. Escores mais altos sugerem maiores déficits.',
    ranges: [
      { min: 0, max: 0.9, label: 'Atenção e Processamento Preservados', description: 'Funcionamento atencional robusto e clareza mental.' },
      { min: 1, max: 1.9, label: 'Dificuldades Atencionais Leves', description: 'Lapsos de atenção ocasionais, principalmente sob fadiga.' },
      { min: 2, max: 2.9, label: 'Dificuldades Atencionais Moderadas', description: 'Dificuldades persistentes de foco e processamento com impacto na performance.' },
      { min: 3, max: 4, label: 'Dificuldades Atencionais Severas', description: 'Sintomas consistentes com déficits atencionais significativos (ex: TDAH, sobrecarga cognitiva).' },
    ],
  }
};