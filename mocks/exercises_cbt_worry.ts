
import { TherapeuticExercise } from '../types';

export const CBT_WORRY_EXERCISES: TherapeuticExercise[] = [
  {
    id: 'filtro-preocupacao',
    title: 'O Filtro da Preocupação (Produtiva vs. Improdutiva)',
    description: 'Ferramenta para distinguir preocupações que exigem ação imediata daquelas que são apenas ruído mental, direcionando a energia para onde ela é útil.',
    category: 'Preocupação e Ansiedade',
    icon: '⚡',
    duration: '15 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Nem toda preocupação é igual',
        content: 'Algumas preocupações são sinais de alerta úteis ("Preciso pagar a conta"). Outras são ruídos inúteis ("E se o avião cair?"). O primeiro passo para se acalmar é saber a diferença.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'Identificação',
        content: 'Qual é a preocupação que está na sua mente agora? Tente descrevê-la.',
        placeholder: 'Estou preocupado com...'
      },
      {
        id: 3,
        type: 'checklist',
        title: 'Teste da Realidade',
        content: 'Marque apenas o que for VERDADE sobre essa preocupação:',
        options: [
          'É um problema que está acontecendo AGORA ou acontecerá muito em breve.',
          'É algo sobre o qual eu tenho controle direto.',
          'Existe uma ação concreta que eu posso tomar hoje para resolver.',
          'É uma previsão baseada em fatos, não em "E se...".'
        ]
      },
      {
        id: 4,
        type: 'instruction',
        title: 'Veredito',
        content: 'Se você marcou a maioria das opções acima, é uma PREOCUPAÇÃO PRODUTIVA -> Vá para o passo de Ação.\n\nSe você não marcou quase nada, é uma PREOCUPAÇÃO IMPRODUTIVA -> Vá para o passo de Aceitação.'
      },
      {
        id: 5,
        type: 'writing',
        title: 'Plano de Ação (Se Produtiva)',
        content: 'Se é um problema real, o que você vai fazer? Defina: O que, Quando e Como.',
        placeholder: 'Vou fazer...'
      },
      {
        id: 6,
        type: 'instruction',
        title: 'Estratégia de Aceitação (Se Improdutiva)',
        content: 'Se é um problema hipotético ("E se..."), não há nada a fazer. Tentar resolver um problema que não existe gera ansiedade. Diga a si mesmo: "Isso é apenas um pensamento, não um fato. Vou focar no presente".'
      }
    ]
  },
  {
    id: 'caixa-preocupacoes',
    title: 'A Caixa de Preocupações (Agendamento)',
    description: 'Técnica de adiamento da preocupação para evitar que ela domine o dia todo. Reserve um horário específico para se preocupar, liberando o resto do tempo.',
    category: 'Preocupação e Ansiedade',
    icon: '📦',
    duration: '10 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Adiar não é Ignorar',
        content: 'Tentar "não pensar" não funciona. Mas dizer "vou pensar nisso às 17h" funciona. Seu cérebro aceita relaxar se souber que o problema será atendido depois.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'Definindo o Horário',
        content: 'Escolha um horário de 20 minutos hoje (não perto da hora de dormir) para ser seu "Tempo de Preocupação".',
        placeholder: 'Meu horário será às...'
      },
      {
        id: 3,
        type: 'writing',
        title: 'Depositando a Preocupação',
        content: 'Qual pensamento está te incomodando agora? Escreva-o aqui para "tirar da cabeça" e colocar na "caixa".',
        placeholder: 'Preocupação: ...'
      },
      {
        id: 4,
        type: 'instruction',
        title: 'Compromisso',
        content: 'Diga para o pensamento: "Eu te ouvi. Já te anotei. Nós vamos conversar sobre isso às [seu horário], não agora. Agora estou ocupado vivendo".'
      },
      {
        id: 5,
        type: 'text',
        title: 'Durante o Tempo de Preocupação',
        content: 'Quando chegar a hora marcada: Leia suas preocupações. Se ainda forem relevantes, tente resolvê-las. Se não forem mais (o que é comum), jogue fora.'
      }
    ]
  },
  {
    id: 'teste-previsoes',
    title: 'Teste de Previsões (Diário de Futuro)',
    description: 'Método científico para testar a precisão da sua ansiedade. A maioria das catástrofes que imaginamos nunca acontece.',
    category: 'Preocupação e Ansiedade',
    icon: '🔮',
    duration: '15 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Você é um bom vidente?',
        content: 'A ansiedade adora fazer previsões catastróficas. Vamos registrar essas previsões para conferir depois se elas eram reais ou alarmes falsos.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'A Previsão',
        content: 'O que você teme que vá acontecer? Seja específico. (Ex: "Vou gaguejar na reunião e todos vão rir").',
        placeholder: 'Prevejo que...'
      },
      {
        id: 3,
        type: 'range',
        title: 'Certeza',
        content: 'De 0 a 100, quanta certeza você tem de que isso vai acontecer?',
        rangeSettings: {
            min: 0,
            max: 100,
            labelMin: 'Dúvida',
            labelMax: 'Certeza Absoluta'
        }
      },
      {
        id: 4,
        type: 'instruction',
        title: 'O Experimento',
        content: 'Vá e viva a situação. Não evite. A única maneira de saber a verdade é testando.'
      },
      {
        id: 5,
        type: 'table_input',
        title: 'Conferência (Preencher Depois)',
        content: 'Volte aqui depois do evento. O que realmente aconteceu?',
        tableSettings: {
            columns: [
                'O que eu Previ',
                'O que Realmente Aconteceu',
                'Minha previsão foi precisa?'
            ]
        }
      },
      {
        id: 6,
        type: 'writing',
        title: 'Aprendizado',
        content: 'O que esse resultado te ensina sobre a confiabilidade dos seus pensamentos ansiosos?',
        placeholder: 'Aprendi que...'
      }
    ]
  }
];
