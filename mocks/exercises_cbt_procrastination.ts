
import { TherapeuticExercise } from '../types';

export const CBT_PROCRASTINATION_EXERCISES: TherapeuticExercise[] = [
  {
    id: 'regra-5-minutos',
    title: 'A Regra dos 5 Minutos',
    description: 'Técnica comportamental clássica para superar a paralisia inicial. O objetivo não é terminar a tarefa, é apenas começar.',
    category: 'Procrastinação e Foco',
    icon: '⏱️',
    duration: '5 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'O Muro do Início',
        content: 'A parte mais difícil de qualquer tarefa é começar. Nossa mente cria um "muro" imaginando que a tarefa será horrível e interminável. Vamos enganar o cérebro diminuindo o compromisso.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'A Tarefa Temida',
        content: 'Qual é a tarefa que você está adiando?',
        placeholder: 'Preciso fazer...'
      },
      {
        id: 3,
        type: 'instruction',
        title: 'O Acordo',
        content: 'Você concorda em fazer essa tarefa por APENAS 5 minutos? \n\nRegra: Depois de 5 minutos, você tem permissão total para parar se quiser. Sem culpa. Mas você precisa fazer os 5 minutos.'
      },
      {
        id: 4,
        type: 'checklist',
        title: 'Preparação',
        content: 'Prepare o terreno agora:',
        options: [
          'Eliminei as distrações (celular longe)',
          'Tenho o material necessário na minha frente',
          'Vou colocar um cronômetro para 5 minutos'
        ]
      },
      {
        id: 5,
        type: 'instruction',
        title: 'Ação',
        content: 'Inicie o cronômetro e comece AGORA. Pare de ler isso e vá. Volte aqui em 5 minutos.'
      },
      {
        id: 6,
        type: 'writing',
        title: 'Pós-Experiência',
        content: 'Passaram os 5 minutos? Foi tão horrível quanto você imaginava? Você quer parar ou consegue fazer mais um pouco?',
        placeholder: 'Na verdade...'
      }
    ]
  },
  {
    id: 'desconstruindo-desculpas',
    title: 'Desconstruindo Desculpas de Procrastinação',
    description: 'Exercício cognitivo para identificar e refutar as permissões internas que nos damos para não fazer o que precisa ser feito.',
    category: 'Procrastinação e Foco',
    icon: '🤔',
    duration: '15 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'As Mentiras que Contamos',
        content: 'A procrastinação se alimenta de pensamentos permissivos ("faço depois", "preciso estar inspirado"). Vamos identificar e responder a esses pensamentos.'
      },
      {
        id: 2,
        type: 'table_input',
        title: 'Batalha de Argumentos',
        content: 'Na esquerda, escreva o que sua mente diz para te convencer a parar. Na direita, escreva uma resposta realista e madura.',
        tableSettings: {
            columns: [
                'A Desculpa (O que a mente diz)',
                'A Realidade (O contra-argumento)'
            ]
        }
      },
      {
        id: 3,
        type: 'instruction',
        title: 'Exemplos Comuns',
        content: 'Desculpa: "Estou muito cansado agora." -> Realidade: "Posso fazer 10 minutos mesmo cansado, e me sentirei melhor por ter feito."\nDesculpa: "Faço amanhã cedo." -> Realidade: "Amanhã terei outras coisas. O \'eu de amanhã\' ficará sobrecarregado."'
      },
      {
        id: 4,
        type: 'writing',
        title: 'Compromisso',
        content: 'Qual é a desculpa que você NÃO vai aceitar de si mesmo hoje?',
        placeholder: 'Hoje não vou cair na desculpa de que...'
      }
    ]
  },
  {
    id: 'tarefa-imperfeita',
    title: 'O Experimento da Imperfeição',
    description: 'Muitas vezes procrastinamos porque queremos fazer perfeito. Este exercício prescreve o erro deliberado para desbloquear a ação.',
    category: 'Procrastinação e Foco',
    icon: '🎨',
    duration: '20 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Feito é melhor que perfeito',
        content: 'O perfeccionismo é o pai da procrastinação. Se você exige excelência o tempo todo, a tarefa fica pesada demais. Vamos tentar fazer algo "mal feito" de propósito.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'A Tarefa',
        content: 'O que você precisa fazer (escrever um email, lavar louça, redigir um texto)?',
        placeholder: 'A tarefa é...'
      },
      {
        id: 3,
        type: 'instruction',
        title: 'A Meta Medíocre',
        content: 'Sua meta agora é fazer um rascunho RUIM. \n- Se for texto, escreva com erros e sem formatação.\n- Se for arrumação, faça apenas o "grosso", deixe cantos sujos.\n- O objetivo é completar a tarefa com qualidade nota 5, não 10.'
      },
      {
        id: 4,
        type: 'writing',
        title: 'Execução',
        content: 'Vá e faça sua "versão rascunho" agora. Como foi se permitir baixar a régua?',
        placeholder: 'Foi...'
      },
      {
        id: 5,
        type: 'text',
        title: 'Conclusão',
        content: 'Geralmente, uma vez que temos um "rascunho ruim", é muito fácil melhorá-lo depois. É muito mais fácil editar uma página ruim do que uma página em branco.'
      }
    ]
  }
];
