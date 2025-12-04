
import { TherapeuticExercise } from '../types';

export const CBT_DECISION_EXERCISES: TherapeuticExercise[] = [
  {
    id: 'investimentos-passados',
    title: 'Avaliação de Investimentos Passados (Custos Irrecuperáveis)',
    description: 'Ferramenta para superar a armadilha de continuar em uma situação ruim apenas porque você já investiu tempo, dinheiro ou emoção nela (Falácia do Custo Irrecuperável).',
    category: 'Tomada de Decisão',
    icon: '💸',
    duration: '20 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'O que já foi, já foi',
        content: 'Muitas vezes continuamos em empregos, relacionamentos ou projetos ruins porque pensamos: "Já investi 5 anos nisso, não posso jogar fora". Na economia, isso é chamado de Custo Irrecuperável. O investimento passado não volta. A única questão que importa é: O que vai me trazer mais benefício DAQUI PARA FRENTE?'
      },
      {
        id: 2,
        type: 'writing',
        title: 'A Situação Atual',
        content: 'Descreva a situação em que você se sente preso devido ao investimento que já fez.',
        placeholder: 'Estou insistindo em...'
      },
      {
        id: 3,
        type: 'table_input',
        title: 'Análise de Custos e Benefícios Futuros',
        content: 'Esqueça o passado por um momento. Olhe apenas para o futuro. Preencha a tabela:',
        tableSettings: {
            columns: [
                'Se eu continuar (Custos Futuros)',
                'Se eu sair/mudar (Ganhos Futuros Potenciais)'
            ]
        }
      },
      {
        id: 4,
        type: 'instruction',
        title: 'Teste do Observador Externo',
        content: 'Imagine que você não tem nenhum histórico com essa situação. Você acabou de chegar hoje. Com base apenas nos prós e contras atuais, você entraria nessa situação agora?'
      },
      {
        id: 5,
        type: 'writing',
        title: 'Conclusão',
        content: 'Se você não tivesse investido nada até hoje, qual seria a decisão lógica a tomar agora?',
        placeholder: 'Eu decidiria...'
      }
    ]
  },
  {
    id: 'conselho-futuro',
    title: 'O Conselho do Eu Futuro',
    description: 'Exercício de perspectiva temporal para superar a impulsividade ou o medo imediato, conectando-se com a sabedoria do seu próprio futuro.',
    category: 'Tomada de Decisão',
    icon: '🔮',
    duration: '15 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'A Miopia do Presente',
        content: 'Quando estamos ansiosos ou tentados, focamos apenas no "agora" (alívio imediato). Isso nos impede de ver o que realmente queremos para nossa vida.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'O Dilema',
        content: 'Qual é a decisão difícil que você precisa tomar?',
        placeholder: 'Estou em dúvida entre...'
      },
      {
        id: 3,
        type: 'instruction',
        title: 'Viagem no Tempo (10 anos)',
        content: 'Feche os olhos. Imagine-se daqui a 10 anos. Você está mais sábio, mais experiente e já superou essa fase. Imagine esse "Eu Futuro" olhando para você hoje com compaixão.'
      },
      {
        id: 4,
        type: 'writing',
        title: 'A Perspectiva de 10 Anos',
        content: 'O que o seu Eu daqui a 10 anos diria sobre essa decisão? O que será importante para ele/ela lá na frente?',
        placeholder: 'Meu Eu do futuro diria: "Lembre-se que..."'
      },
      {
        id: 5,
        type: 'writing',
        title: 'A Perspectiva de 1 Minuto',
        content: 'Agora, pense no seu "Eu Impulsivo" que quer alívio no próximo minuto. O que ele quer fazer? (Geralmente é fugir ou buscar prazer imediato).',
        placeholder: 'Meu Eu de agora quer...'
      },
      {
        id: 6,
        type: 'range',
        title: 'Quem vai decidir?',
        content: 'De 0 a 10, quanto você quer deixar que a decisão seja tomada pelo "Eu do Futuro" (valores) em vez do "Eu de Agora" (impulso)?',
        rangeSettings: {
            min: 0,
            max: 10,
            labelMin: 'Eu Impulsivo',
            labelMax: 'Eu Futuro'
        }
      }
    ]
  },
  {
    id: 'pre-mortem',
    title: 'O "Pre-Mortem" (Visão de Futuro Inverso)',
    description: 'Diferente do otimismo cego, esta técnica estoica pede que você imagine que sua decisão já deu errado no futuro, para identificar riscos ocultos e preveni-los hoje.',
    category: 'Tomada de Decisão',
    icon: '☠️',
    duration: '20-25 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'O Poder do Pessimismo Estratégico',
        content: 'A maioria dos planos falha por excesso de confiança. O "Pre-Mortem" é uma autópsia feita antes da morte do projeto. Vamos assumir que deu errado para garantir que dê certo.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'A Decisão/Projeto',
        content: 'Qual é o plano ou decisão que você está prestes a tomar?',
        placeholder: 'Vou...'
      },
      {
        id: 3,
        type: 'instruction',
        title: 'A Catástrofe Imaginada',
        content: 'Imagine que se passaram 6 meses. O seu plano foi um FRACASSO TOTAL. Deu tudo errado. Sinta o peso disso. Não pergunte "se" deu errado, assuma que DEU.'
      },
      {
        id: 4,
        type: 'writing',
        title: 'A Autópsia',
        content: 'Olhando para trás (deste futuro imaginário), liste todas as causas que levaram a esse fracasso. O que você ignorou? Quem te atrapalhou? O que você deixou de fazer?',
        placeholder: 'Falhou porque eu ignorei... Falhou porque aconteceu...'
      },
      {
        id: 5,
        type: 'table_input',
        title: 'Plano de Prevenção',
        content: 'Agora volte para o presente. Para cada causa de fracasso que você listou, crie uma estratégia de prevenção AGORA.',
        tableSettings: {
            columns: [
                'Causa Provável do Fracasso',
                'Ação Preventiva Hoje'
            ]
        }
      },
      {
        id: 6,
        type: 'writing',
        title: 'Confiança Reavaliada',
        content: 'Com esse plano de prevenção em mãos, como você se sente sobre a decisão agora?',
        placeholder: 'Sinto-me mais...'
      }
    ]
  }
];
