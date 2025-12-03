
import { TherapeuticExercise } from '../../../types';

export const MOOD_COGNITION_EXERCISES: TherapeuticExercise[] = [
  {
    id: 'registro-pensamentos-3-colunas',
    title: 'Registro de Pensamentos (3 Colunas)',
    description: 'Técnica clássica para identificar e capturar pensamentos automáticos no momento em que ocorrem, separando o fato da interpretação.',
    category: 'Flexibilidade Cognitiva',
    icon: '📝',
    duration: '15 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'A Lente da Mente',
        content: 'Nossos pensamentos não são fatos. Eles são interpretações. Quando estamos tristes ou ansiosos, essas interpretações tendem a ser distorcidas. O primeiro passo é colocá-las no papel.'
      },
      {
        id: 2,
        type: 'instruction',
        title: 'Como Preencher',
        content: 'Utilize a tabela abaixo para registrar eventos recentes. Tente preencher uma linha para cada situação que te causou uma mudança de humor.'
      },
      {
        id: 3,
        type: 'table_input',
        title: 'Tabela de Registro',
        content: 'Preencha as colunas com sinceridade:',
        tableSettings: {
            columns: [
                'Situação (O que aconteceu?)',
                'Emoção (O que senti? 0-100)',
                'Pensamento Automático (O que pensei?)'
            ]
        }
      },
      {
        id: 4,
        type: 'instruction',
        title: 'Análise',
        content: 'Agora olhe para o que escreveu na coluna de Pensamentos. Isso é uma verdade absoluta? Você teria esse mesmo pensamento se estivesse se sentindo bem? Reconheça isso como um "evento mental", não uma realidade imutável.'
      }
    ]
  },
  {
    id: 'tribunal-mental',
    title: 'O Tribunal Mental (Evidências)',
    description: 'Exercício para julgar a validade de um pensamento negativo, agindo como advogado de defesa e acusação para chegar a um veredito justo.',
    category: 'Flexibilidade Cognitiva',
    icon: '⚖️',
    duration: '20 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Julgando o Pensamento',
        content: 'Muitas vezes aceitamos nossos pensamentos negativos como verdades absolutas. Neste exercício, vamos colocá-los "no banco dos réus" e exigir provas reais.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'O Réu (Pensamento)',
        content: 'Qual é o pensamento que está te incomodando? (Ex: "Sou um fracasso", "Ninguém gosta de mim", "Nunca vou conseguir").',
        placeholder: 'O pensamento é...'
      },
      {
        id: 3,
        type: 'table_input',
        title: 'Apresentação de Provas',
        content: 'Preencha a tabela com FATOS (não sentimentos). \nAdvogado de Acusação: Por que o pensamento seria verdadeiro?\nAdvogado de Defesa: Quais fatos provam o contrário?',
        tableSettings: {
            columns: [
                'Evidências a Favor (Acusação)',
                'Evidências Contra (Defesa)'
            ]
        }
      },
      {
        id: 4,
        type: 'instruction',
        title: 'Análise do Juiz',
        content: 'Olhe para as duas colunas. A "Acusação" usou fatos ou apenas opiniões/sentimentos? A "Defesa" apresentou pontos válidos que você estava ignorando?'
      },
      {
        id: 5,
        type: 'writing',
        title: 'O Veredito (Pensamento Equilibrado)',
        content: 'Com base nas evidências dos dois lados, escreva uma nova conclusão mais justa e realista. (Ex: "Cometi um erro hoje, mas isso não faz de mim um fracasso total, pois tive sucessos em X e Y").',
        placeholder: 'A conclusão justa é...'
      }
    ]
  },
  {
    id: 'matriz-decisao-equilibrada',
    title: 'Tomada de Decisão Equilibrada (Matriz)',
    description: 'Ferramenta estruturada para evitar decisões impulsivas, avaliando os quatro quadrantes de consequências (Prós/Contras de Mudar e de Não Mudar).',
    category: 'Tomada de Decisão',
    icon: '⚖️',
    duration: '20-25 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Pausando a Impulsividade',
        content: 'Em momentos de alta energia ou desânimo, nossa visão tende a ficar "em túnel", focando apenas no alívio imediato. Esta matriz obriga o cérebro a processar a decisão por quatro ângulos diferentes.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'A Decisão em Questão',
        content: 'Descreva qual é a ação ou mudança que você está pensando em tomar. Seja específico.',
        placeholder: 'Estou pensando em...'
      },
      {
        id: 3,
        type: 'writing',
        title: '1. Vantagens de AGIR (Mudar)',
        content: 'Liste todos os benefícios de realizar essa ação. Considere o prazer imediato, o alívio, os ganhos financeiros ou sociais.',
        placeholder: 'Se eu fizer isso, ganho...'
      },
      {
        id: 4,
        type: 'writing',
        title: '2. Desvantagens de AGIR (Mudar)',
        content: 'Liste todos os custos e riscos de realizar essa ação. Considere as consequências a longo prazo, o impacto nas relações, na saúde e nas finanças.',
        placeholder: 'Se eu fizer isso, perco/arrisco...'
      },
      {
        id: 5,
        type: 'writing',
        title: '3. Vantagens de NÃO FAZER NADA (Manter Status Quo)',
        content: 'O que você ganha se deixar as coisas como estão? Considere a segurança, a estabilidade, a economia de energia.',
        placeholder: 'Se eu não fizer nada, garanto...'
      },
      {
        id: 6,
        type: 'writing',
        title: '4. Desvantagens de NÃO FAZER NADA (Manter Status Quo)',
        content: 'Qual é o custo de ficar na mesma situação? O que você perde por não agir? Considere a estagnação ou a manutenção da dor atual.',
        placeholder: 'Se eu não fizer nada, continuo sofrendo com...'
      },
      {
        id: 7,
        type: 'instruction',
        title: 'Análise e Peso',
        content: 'Regra de Ouro: Se a decisão pender para a mudança drástica, espere 24 a 48 horas. Se a lógica se mantiver após uma boa noite de sono, a decisão é provavelmente sólida.'
      }
    ]
  },
  {
    id: 'resolucao-problemas-estruturada',
    title: 'Resolução Estruturada de Problemas',
    description: 'Método passo a passo para sair da ruminação e da preocupação improdutiva, transformando problemas vagos em planos de ação concretos.',
    category: 'Flexibilidade Cognitiva',
    icon: '🧩',
    duration: '20-30 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Definir para Resolver',
        content: 'A preocupação gira em círculos. A resolução de problemas anda em linha reta. Primeiro, saia do "sentimento de problema" para a "definição do problema".'
      },
      {
        id: 2,
        type: 'writing',
        title: '1. Definição Clara',
        content: 'Descreva o problema de forma objetiva e comportamental. Evite julgamentos.\nCorreto: "Tenho 3 contas atrasadas". Incorreto: "Minha vida é um caos".',
        placeholder: 'O problema específico é...'
      },
      {
        id: 3,
        type: 'writing',
        title: '2. Brainstorming (Chuva de Ideias)',
        content: 'Gere o máximo de soluções possíveis. Vale tudo: soluções fáceis, difíceis, pedir ajuda, adiar. O objetivo é quantidade, não qualidade.',
        placeholder: 'Ideias...'
      },
      {
        id: 4,
        type: 'writing',
        title: '3. Seleção da Solução',
        content: 'Escolha a solução mais viável AGORA, que tenha menos consequências negativas.',
        placeholder: 'Vou tentar...'
      },
      {
        id: 5,
        type: 'writing',
        title: '4. Plano de Ação',
        content: 'O que será feito? Quando? Como? Quem está envolvido?',
        placeholder: 'Passo 1: ... Data: ...'
      },
      {
        id: 6,
        type: 'instruction',
        title: '5. Avaliação (Crucial)',
        content: 'Defina uma data para checar se funcionou. Se o problema não foi resolvido, não se culpe. Volte ao passo 3 e escolha outra solução da lista. Resolver problemas é um processo de tentativa e erro, não de mágica.'
      }
    ]
  },
  {
    id: 'pizza-responsabilidade',
    title: 'Pizza da Responsabilidade',
    description: 'Técnica interativa de reatribuição para lidar com culpa excessiva, distribuindo as causas de um evento de forma justa.',
    category: 'Flexibilidade Cognitiva',
    icon: '🍕',
    duration: '20 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'O Peso da Culpa',
        content: 'Tendemos a assumir 100% da culpa por eventos negativos. Mas raramente somos os únicos responsáveis. Existem outros fatores (sorte, outras pessoas, contexto).'
      },
      {
        id: 2,
        type: 'writing',
        title: 'O Evento',
        content: 'Descreva a situação pela qual você se culpa.',
        placeholder: 'Sinto-me culpado por...'
      },
      {
        id: 3,
        type: 'pie_chart',
        title: 'Distribuindo as Fatias',
        content: 'Adicione fatias para TODOS os fatores que contribuíram (ex: Cansaço, Falta de Informação, Ações de Outros, Acaso). Deixe sua fatia por último e veja o tamanho real dela.'
      }
    ]
  }
];
