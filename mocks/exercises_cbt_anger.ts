
import { TherapeuticExercise } from '../types';

export const CBT_ANGER_EXERCISES: TherapeuticExercise[] = [
  {
    id: 'termometro-raiva',
    title: 'O Termômetro da Raiva (Sinais Precoces)',
    description: 'Aprenda a identificar os sinais físicos e mentais da raiva antes que ela atinja o ponto de explosão, permitindo intervenção precoce.',
    category: 'Regulação da Raiva',
    icon: '🌡️',
    duration: '10-15 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'A Raiva é Escalável',
        content: 'Ninguém vai de "calmo" para "furioso" em zero segundos. Existem sinais de aviso. Se você perceber a raiva no nível 3 ou 4, é fácil controlar. No nível 10, é quase impossível.'
      },
      {
        id: 2,
        type: 'checklist',
        title: 'Sinais no Corpo',
        content: 'O que seu corpo faz quando a irritação começa? Marque seus sinais:',
        options: [
          'Mandíbula ou punhos cerrados',
          'Calor no rosto ou pescoço',
          'Respiração curta e rápida',
          'Tensão nos ombros',
          'Batimento cardíaco acelerado',
          'Agitação nas pernas',
          'Vontade de andar de um lado para o outro'
        ]
      },
      {
        id: 3,
        type: 'checklist',
        title: 'Sinais na Mente',
        content: 'O que passa pela sua cabeça?',
        options: [
          'Pensamentos de "Isso não é justo!"',
          'Xingamentos mentais',
          'Fantasia de vingança ou resposta agressiva',
          'Visão de túnel (só vejo o problema)',
          'Pensamento de "Ele/Ela deveria..."'
        ]
      },
      {
        id: 4,
        type: 'range',
        title: 'Monitoramento Atual',
        content: 'Neste exato momento, onde você está no seu termômetro?',
        rangeSettings: {
            min: 0,
            max: 10,
            labelMin: 'Zen',
            labelMax: 'Explosão'
        }
      },
      {
        id: 5,
        type: 'instruction',
        title: 'Plano de Resfriamento',
        content: 'Se você marcou acima de 4 no passo anterior, faça uma pausa AGORA. Saia do ambiente, beba água gelada ou faça 10 respirações profundas. Não tente resolver o problema enquanto estiver "quente".'
      }
    ]
  },
  {
    id: 'custo-beneficio-raiva',
    title: 'Custo-Benefício da Raiva',
    description: 'Análise racional para verificar se a raiva está servindo aos seus interesses ou trabalhando contra você.',
    category: 'Regulação da Raiva',
    icon: '⚖️',
    duration: '15 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'A Raiva é Útil?',
        content: 'A raiva nos dá uma sensação temporária de poder e justiça. Mas, a longo prazo, ela costuma cobrar um preço alto. Vamos calcular se vale a pena manter essa raiva.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'A Situação',
        content: 'Por quem ou pelo que você está com raiva agora?',
        placeholder: 'Estou com raiva de...'
      },
      {
        id: 3,
        type: 'table_input',
        title: 'A Contabilidade da Raiva',
        content: 'Preencha os custos e benefícios de expressar essa raiva de forma agressiva.',
        tableSettings: {
            columns: [
                'Vantagens da Raiva (O que ganho?)',
                'Custos da Raiva (O que perco/pioro?)'
            ]
        }
      },
      {
        id: 4,
        type: 'instruction',
        title: 'Análise dos Custos',
        content: 'Olhe para a coluna dos Custos. A raiva está afetando sua saúde? Seus relacionamentos? Sua reputação? Seu emprego? A vantagem momentânea de "desabafar" compensa esses custos?'
      },
      {
        id: 5,
        type: 'writing',
        title: 'Alternativa Assertiva',
        content: 'Existe uma maneira de pedir o que você quer sem os custos da agressividade? Escreva um pedido calmo.',
        placeholder: 'Eu poderia dizer: "Eu fico chateado quando..., eu gostaria que..."'
      }
    ]
  },
  {
    id: 'o-que-esta-por-baixo',
    title: 'O Iceberg da Raiva (Emoções Secundárias)',
    description: 'Técnica para identificar as emoções vulneráveis (medo, tristeza, vergonha) que a raiva costuma encobrir e proteger.',
    category: 'Regulação da Raiva',
    icon: '🧊',
    duration: '20 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'A Raiva como Escudo',
        content: 'A raiva é muitas vezes uma "emoção secundária". Ela surge para proteger sentimentos mais dolorosos e vulneráveis. É mais fácil sentir raiva do que sentir que fomos rejeitados ou que estamos com medo.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'A Superfície',
        content: 'O que te deixou com raiva? O que você pensou que foi injusto?',
        placeholder: 'Fiquei com raiva porque...'
      },
      {
        id: 3,
        type: 'checklist',
        title: 'Mergulhando no Iceberg',
        content: 'Se tirássemos a raiva da frente, o que sobraria? Marque o que pode estar lá no fundo:',
        options: [
          'Medo de perder a pessoa ou o emprego',
          'Sentimento de rejeição ou não ser amado',
          'Vergonha ou humilhação',
          'Sentimento de desrespeito ou desvalorização',
          'Tristeza ou mágoa',
          'Exaustão/Cansaço',
          'Sentimento de impotência'
        ]
      },
      {
        id: 4,
        type: 'writing',
        title: 'Validando a Vulnerabilidade',
        content: 'Escolha a emoção que você marcou acima. Tente escrever uma frase sobre isso. (Ex: "Na verdade, não estou só com raiva, estou com medo de que ele não goste mais de mim").',
        placeholder: 'A verdade é que eu sinto...'
      },
      {
        id: 5,
        type: 'instruction',
        title: 'Ação',
        content: 'Comunicar a emoção primária (vulnerabilidade) geralmente gera empatia no outro. Comunicar a raiva (ataque) gera defesa. Tente falar sobre a dor, não sobre o ataque.'
      }
    ]
  }
];
