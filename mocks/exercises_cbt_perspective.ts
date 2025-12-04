
import { TherapeuticExercise } from '../types';

export const CBT_PERSPECTIVE_EXERCISES: TherapeuticExercise[] = [
  {
    id: 'pizza-responsabilidade',
    title: 'Pizza da Responsabilidade (Reatribuição)',
    description: 'Ferramenta visual para combater a culpa excessiva. Ajuda a identificar todos os fatores que contribuíram para um problema, não apenas as suas ações.',
    category: 'Perspectiva e Realismo',
    icon: '🍕',
    duration: '15-20 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Você não é o centro do universo',
        content: 'Quando algo dá errado, tendemos a assumir 100% da culpa ("Eu sou um fracasso", "Eu estraguei tudo"). Mas raramente um evento tem uma única causa. Vamos investigar isso.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'O Evento',
        content: 'Qual é a situação negativa pela qual você está se culpando?',
        placeholder: 'Eu me culpo por...'
      },
      {
        id: 3,
        type: 'instruction',
        title: 'Identificando Fatores Externos',
        content: 'Pense como um detetive. Além de você, o que mais influenciou esse resultado? Considere:\n- Ações de outras pessoas\n- Sorte ou Acaso\n- Falta de informações na época\n- Cansaço ou estresse físico\n- Dificuldade da tarefa'
      },
      {
        id: 4,
        type: 'pie_chart',
        title: 'Dividindo a Pizza',
        content: 'Adicione fatias para cada fator que você identificou (ex: "Mau humor do chefe", "Trânsito", "Imprevisto"). Deixe a fatia da "Minha Culpa" para o final e veja o tamanho real dela.'
      },
      {
        id: 5,
        type: 'writing',
        title: 'Conclusão',
        content: 'Olhando para o gráfico agora: Você é realmente o único responsável por 100% do problema? O que isso muda na sua forma de se sentir?',
        placeholder: 'Percebo que...'
      }
    ]
  },
  {
    id: 'regua-perspectiva',
    title: 'A Régua da Perspectiva (Continuum)',
    description: 'Técnica para calibrar a intensidade da sua reação emocional, comparando o problema atual com os piores cenários possíveis da existência.',
    category: 'Perspectiva e Realismo',
    icon: '📏',
    duration: '10 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Catastrofização',
        content: 'Às vezes, um problema chato parece o fim do mundo. Nossa mente perde a escala. Vamos usar uma "Régua da Realidade" para medir o tamanho real desse problema.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'O Problema Atual',
        content: 'O que está te incomodando hoje?',
        placeholder: 'O problema é...'
      },
      {
        id: 3,
        type: 'range',
        title: 'Sensação Inicial',
        content: 'De 0 a 100, quão ruim isso parece para você agora?',
        rangeSettings: {
            min: 0,
            max: 100,
            labelMin: 'Nada',
            labelMax: 'Terrível'
        }
      },
      {
        id: 4,
        type: 'instruction',
        title: 'Calibrando a Régua',
        content: 'Agora vamos definir os extremos. \n0% = Um dia tranquilo na praia.\n100% = Uma catástrofe histórica (ex: Holocausto, Tsunami, Guerra Total). \n\nImagine realmente esses cenários de 100%.'
      },
      {
        id: 5,
        type: 'range',
        title: 'Reavaliação',
        content: 'Comparado com um cenário de catástrofe real (100%), onde o seu problema atual se encaixa na régua?',
        rangeSettings: {
            min: 0,
            max: 100,
            labelMin: 'Incômodo',
            labelMax: 'Catástrofe'
        }
      },
      {
        id: 6,
        type: 'writing',
        title: 'Reflexão',
        content: 'Isso significa que seu problema não dói? Não. Mas ele é suportável? É o fim do mundo ou apenas algo desagradável?',
        placeholder: 'Consigo ver que...'
      }
    ]
  },
  {
    id: 'inventario-recursos',
    title: 'Inventário de Recursos (O Que Ainda Posso Fazer)',
    description: 'Focar no que foi perdido gera depressão. Focar no que resta gera esperança. Este exercício muda o foco da perda para os recursos disponíveis.',
    category: 'Perspectiva e Realismo',
    icon: '🎒',
    duration: '15 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Visão de Túnel',
        content: 'Quando sofremos uma perda ou fracasso, nossa mente entra em "visão de túnel": só vemos o que deu errado. Vamos forçar a visão periférica para ver o que ainda está de pé.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'A Perda',
        content: 'O que você perdeu ou o que não deu certo? (Ex: Terminei o namoro, perdi o emprego, tirei nota baixa).',
        placeholder: 'Aconteceu que...'
      },
      {
        id: 3,
        type: 'checklist',
        title: 'Inventário do Que Resta',
        content: 'Marque o que você AINDA tem, apesar desse problema:',
        options: [
          'Minha saúde física básica',
          'Meus amigos ou família',
          'Minha inteligência e capacidade de aprender',
          'Meus sentidos (visão, audição, paladar)',
          'A natureza, o sol, o ar',
          'Música, filmes, livros',
          'Minha liberdade de escolha'
        ]
      },
      {
        id: 4,
        type: 'writing',
        title: 'Oportunidades',
        content: 'Dado que o problema aconteceu, existe alguma NOVA oportunidade que surgiu? (Ex: Mais tempo livre, chance de aprender algo novo, chance de conhecer gente nova).',
        placeholder: 'Talvez agora eu possa...'
      },
      {
        id: 5,
        type: 'instruction',
        title: 'Ação',
        content: 'Escolha uma das coisas que você "ainda tem" e faça uso dela hoje. Aproveite conscientemente.'
      }
    ]
  }
];
