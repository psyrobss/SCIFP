
import { TherapeuticExercise } from '../types';

export const CBT_LOGIC_EXERCISES: TherapeuticExercise[] = [
  {
    id: '5-porques',
    title: 'A Técnica dos 5 Porquês (Causa Raiz)',
    description: 'Método simples e poderoso (usado na engenharia e terapia) para não tratar apenas o sintoma superficial de um problema, mas descobrir sua causa profunda.',
    category: 'Processamento Lógico',
    icon: '❓',
    duration: '10-15 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Cavando Mais Fundo',
        content: 'Muitas vezes tentamos resolver o problema errado. Se você tem "dor de cabeça" (problema), tomar remédio resolve hoje. Mas se a causa for "falta de óculos", o remédio não resolve amanhã. Vamos achar a causa raiz.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'O Problema Superficial',
        content: 'Qual é o problema que você está enfrentando?',
        placeholder: 'Ex: Cheguei atrasado no trabalho hoje.'
      },
      {
        id: 3,
        type: 'writing',
        title: '1º Por que?',
        content: 'Por que isso aconteceu?',
        placeholder: 'Porque acordei tarde.'
      },
      {
        id: 4,
        type: 'writing',
        title: '2º Por que?',
        content: 'E por que isso (a resposta anterior) aconteceu?',
        placeholder: 'Porque o alarme não tocou (ou eu não ouvi).'
      },
      {
        id: 5,
        type: 'writing',
        title: '3º Por que?',
        content: 'E por que isso aconteceu?',
        placeholder: 'Porque fui dormir muito tarde ontem.'
      },
      {
        id: 6,
        type: 'writing',
        title: '4º Por que?',
        content: 'E por que isso aconteceu?',
        placeholder: 'Porque fiquei ansioso rolando o feed do celular na cama.'
      },
      {
        id: 7,
        type: 'writing',
        title: '5º Por que? (Causa Raiz)',
        content: 'E por que isso aconteceu? (Aqui geralmente chegamos a uma emoção, crença ou hábito).',
        placeholder: 'Porque não tenho uma rotina de desligar as telas para desacelerar minha mente.'
      },
      {
        id: 8,
        type: 'instruction',
        title: 'Solução Real',
        content: 'A solução não é "tentar chegar cedo", é "criar um ritual noturno sem celular". Resolva o 5º porquê e o problema original desaparece.'
      }
    ]
  },
  {
    id: 'metodo-woop',
    title: 'Método WOOP (Contraste Mental)',
    description: 'Estratégia baseada em evidências para transformar desejos vagos em planos de ação concretos, contrastando o sonho com a realidade.',
    category: 'Processamento Lógico',
    icon: '🎯',
    duration: '15 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'O que é WOOP?',
        content: 'WOOP significa Wish (Desejo), Outcome (Resultado), Obstacle (Obstáculo), Plan (Plano). É mais eficaz que o "pensamento positivo" sozinho, pois prepara o cérebro para as barreiras reais.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'W - Wish (Desejo)',
        content: 'O que você quer realizar nas próximas 24 horas ou semana? Escolha algo desafiador mas possível.',
        placeholder: 'Eu desejo...'
      },
      {
        id: 3,
        type: 'writing',
        title: 'O - Outcome (Melhor Resultado)',
        content: 'Se você realizar esse desejo, qual será a MELHOR coisa que vai acontecer? Como você vai se sentir? Feche os olhos e imagine isso vividamente.',
        placeholder: 'O melhor resultado seria...'
      },
      {
        id: 4,
        type: 'writing',
        title: 'O - Obstacle (Obstáculo Interno)',
        content: 'Agora, volte para a realidade. O que existe DENTRO DE VOCÊ (emoção, hábito, crença) que pode te impedir? Seja honesto. Não culpe o mundo externo.',
        placeholder: 'Meu principal obstáculo interno é...'
      },
      {
        id: 5,
        type: 'writing',
        title: 'P - Plan (Plano Se... Então...)',
        content: 'Crie uma regra simples para quando o obstáculo surgir.\n"Se [obstáculo] acontecer, então eu vou [ação para superar]."',
        placeholder: 'Se eu sentir..., então eu vou...'
      }
    ]
  },
  {
    id: 'expandindo-o-foco',
    title: 'Expandindo o Foco (Viés de Confirmação)',
    description: 'Baseado na técnica de exame do viés de confirmação. Nossa mente tende a filtrar informações para confirmar o que já sentimos. Este exercício ajuda a retirar esses filtros.',
    category: 'Processamento Lógico',
    icon: '🔍',
    duration: '15-20 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'A Lente da Mente',
        content: 'Quando estamos chateados, nossa mente age como um "advogado de acusação", buscando apenas provas que confirmem que as coisas estão ruins, ignorando as provas contrárias. Vamos investigar se isso está acontecendo agora.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'O Pensamento ou Emoção Atual',
        content: 'Qual é a crença negativa ou sentimento que você está tendo agora? (Ex: "Sou um fracasso", "Nada dá certo", "Ninguém gosta de mim").',
        placeholder: 'Minha crença atual é...'
      },
      {
        id: 3,
        type: 'writing',
        title: 'O Que Você Viu (Filtro Negativo)',
        content: 'Liste as "provas" que sua mente coletou recentemente para confirmar essa crença. O que aconteceu que fez você pensar assim?',
        placeholder: 'Aconteceu que...'
      },
      {
        id: 4,
        type: 'writing',
        title: 'O Que Você Pode Ter Perdido',
        content: 'Agora, coloque os "óculos de cientista". Procure ativamente por fatos, mesmo que pequenos, que não se encaixam nessa crença negativa. Coisas neutras ou positivas que aconteceram e você ignorou ou desvalorizou.',
        placeholder: 'Fatos que ignorei ou minimizei...'
      },
      {
        id: 5,
        type: 'writing',
        title: 'Reinterpretação',
        content: 'Se você olhasse para a situação inteira (os fatos negativos E os fatos ignorados), qual seria uma conclusão mais justa e realista?',
        placeholder: 'Uma visão mais completa seria...'
      }
    ]
  },
  {
    id: 'verificacao-fatos',
    title: 'Verificação de Fatos (Erros de Lógica)',
    description: 'Baseado na identificação de falácias lógicas. Ajuda a distinguir entre o que sentimos ser verdade e o que os fatos sustentam.',
    category: 'Processamento Lógico',
    icon: '🕵️',
    duration: '20 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Sentimento não é Fato',
        content: 'Às vezes concluímos coisas baseados em como nos sentimos ("Sinto-me burro, logo sou burro"). Vamos checar a lógica por trás das suas conclusões.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'A Conclusão',
        content: 'A que conclusão negativa você chegou sobre si mesmo ou sobre o futuro?',
        placeholder: 'Concluí que...'
      },
      {
        id: 3,
        type: 'table_input',
        title: 'Análise das Premissas',
        content: 'Para essa conclusão ser verdadeira, quais "fatos" teriam que sustentá-la? E esses fatos são realmente verdadeiros?',
        tableSettings: {
            columns: [
                'Minha premissa (O que eu acho que causou isso)',
                'Isso é um fato ou uma suposição?',
                'Outra explicação possível'
            ]
        }
      },
      {
        id: 4,
        type: 'instruction',
        title: 'Teste de Universalidade',
        content: 'Pergunte a si mesmo: "Eu aplicaria essa mesma lógica severa a um amigo ou a qualquer outra pessoa na mesma situação?". Se a resposta for não, sua lógica contém um erro de "duplo padrão".'
      },
      {
        id: 5,
        type: 'writing',
        title: 'Conclusão Lógica',
        content: 'Baseado apenas nos fatos comprovados (não nas suposições), qual é a conclusão mais lógica?',
        placeholder: 'Logicamente, posso concluir que...'
      }
    ]
  }
];
