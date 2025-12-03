
import { TherapeuticExercise } from '../types';

export const MINDFULNESS_EXERCISES: TherapeuticExercise[] = [
  {
    id: 'mente-sabia',
    title: 'Encontrando a Mente Sábia',
    description: 'Aprenda a equilibrar a Razão (lógica) e a Emoção (sentimentos) para acessar sua Mente Sábia (intuição profunda).',
    category: 'Mindfulness (DBT)',
    icon: '🦉',
    duration: '10 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Os Três Estados Mentais',
        content: 'Na DBT, temos três estados: \n1. Mente Racional (lógica, fria, fatos).\n2. Mente Emocional (quente, impulsiva, guiada pelo humor).\n3. Mente Sábia (o equilíbrio, a intuição profunda que sabe o que é verdade).'
      },
      {
        id: 2,
        type: 'instruction',
        title: 'Respiração',
        content: 'Sente-se confortavelmente. Respire fundo. Imagine que ao inspirar você pergunta para si mesmo: "O que é sábio fazer agora?".'
      },
      {
        id: 3,
        type: 'instruction',
        title: 'Visualização',
        content: 'Imagine dois círculos se sobrepondo. Um é a Razão, o outro a Emoção. O espaço no meio, onde eles se encontram, é a Mente Sábia. Tente focar sua atenção nesse centro, talvez na região do estômago ou coração.'
      },
      {
        id: 4,
        type: 'writing',
        title: 'Consulta',
        content: 'Traga um problema atual. O que sua Mente Racional diz ("devo fazer X")? O que sua Mente Emocional diz ("quero fazer Y")? Agora, pergunte à Mente Sábia: Qual é o caminho do meio?',
        placeholder: 'Minha intuição sábia diz...'
      }
    ]
  },
  {
    id: 'respiracao-diafragmatica',
    title: 'Respiração Diafragmática (Paced Breathing)',
    description: 'Técnica de relaxamento físico com guia visual para reduzir a ansiedade aguda e ativar o sistema nervoso parassimpático.',
    category: 'Relaxamento e Mindfulness',
    icon: '🌬️',
    duration: '5-10 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Acalmando o Sistema',
        content: 'A respiração diafragmática (abdominal) envia um sinal de segurança para o cérebro. É impossível estar em pânico e respirar profundamente ao mesmo tempo.'
      },
      {
        id: 2,
        type: 'instruction',
        title: 'Posição',
        content: 'Coloque uma mão no peito e outra na barriga. O objetivo é fazer a mão da barriga subir, enquanto a do peito fica parada.'
      },
      {
        id: 3,
        type: 'breathing_guide',
        title: 'Siga a Animação',
        content: 'Sincronize sua respiração com o círculo abaixo. Inspire pelo nariz quando expandir, expire pela boca quando contrair.',
        breathingSettings: {
            inhale: 4,
            hold: 2,
            exhale: 6,
            holdAfter: 0
        }
      },
      {
        id: 4,
        type: 'writing',
        title: 'Registro',
        content: 'Faça isso por 2 a 3 minutos. Como está seu corpo agora em comparação com o início?',
        placeholder: 'Sinto-me...'
      }
    ]
  },
  {
    id: 'foco-unico-objeto',
    title: 'Focar em um Único Objeto',
    description: 'Treino básico de atenção plena para disciplinar a mente e reduzir a dispersão ("mente de macaco").',
    category: 'Mindfulness (DBT)',
    icon: '🍎',
    duration: '5 min',
    steps: [
      {
        id: 1,
        type: 'instruction',
        title: 'Escolha o Objeto',
        content: 'Pegue um objeto pequeno (uma caneta, uma pedra, uma fruta, uma xícara). Coloque-o à sua frente ou segure-o.'
      },
      {
        id: 2,
        type: 'instruction',
        title: 'Observar (Visual)',
        content: 'Olhe para ele como se fosse a primeira vez que o vê. Note a cor, a luz refletida, as sombras, as imperfeições. Não pense "é uma maçã", apenas veja as formas e cores.'
      },
      {
        id: 3,
        type: 'instruction',
        title: 'Descrever (Mentalmente)',
        content: 'Descreva para si mesmo apenas os fatos observáveis: "é redondo", "tem uma mancha escura", "é frio", "áspero". Evite julgamentos como "é bonito" ou "é feio".'
      },
      {
        id: 4,
        type: 'instruction',
        title: 'Participar (Tato)',
        content: 'Feche os olhos. Sinta a textura, a temperatura, o peso. Gire-o nas mãos. Esteja totalmente presente com o objeto.'
      },
      {
        id: 5,
        type: 'writing',
        title: 'Reflexão',
        content: 'Sua mente divagou? Para onde ela foi? Como foi trazer a atenção de volta gentilmente?',
        placeholder: 'Minha experiência foi...'
      }
    ]
  },
  {
    id: 'bondade-amorosa',
    title: 'Meditação da Bondade Amorosa',
    description: 'Prática para cultivar sentimentos de bondade, compaixão e calor humano por si mesmo e pelos outros (Loving-Kindness).',
    category: 'Mindfulness (DBT)',
    icon: '🙏',
    duration: '10-15 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'O Objetivo',
        content: 'Esta prática ajuda a reduzir a raiva, o julgamento e o isolamento. Consiste em enviar desejos de bem-estar silenciosamente.'
      },
      {
        id: 2,
        type: 'instruction',
        title: '1. Para Você Mesmo',
        content: 'Sente-se, feche os olhos. Traga a consciência para seu coração. Repita mentalmente: \n"Que eu tenha paz."\n"Que eu tenha segurança."\n"Que eu tenha saúde."\n"Que eu seja feliz e livre do sofrimento."'
      },
      {
        id: 3,
        type: 'instruction',
        title: '2. Para Alguém Querido',
        content: 'Pense em alguém que você ama ou admira. Visualize essa pessoa sorrindo. Repita:\n"Que você tenha paz."\n"Que você tenha segurança."\n"Que você tenha saúde."\n"Que você seja feliz."'
      },
      {
        id: 4,
        type: 'instruction',
        title: '3. Para uma Pessoa Neutra',
        content: 'Pense em alguém que você vê mas não conhece bem (ex: caixa do mercado, vizinho). Reconheça que ela também quer ser feliz. Envie os mesmos votos para ela.'
      },
      {
        id: 5,
        type: 'instruction',
        title: '4. Para uma Pessoa Difícil (Opcional)',
        content: 'Se sentir-se pronto, pense em alguém com quem tem dificuldade. Tente ver além do comportamento, vendo o ser humano que sofre. Envie votos de que ela encontre paz (e assim pare de causar sofrimento).'
      }
    ]
  },
  {
    id: 'observar-descrever',
    title: 'Observar e Descrever (Fatos vs. Julgamentos)',
    description: 'Aprenda a separar o que realmente aconteceu (fatos) das interpretações que sua mente cria (julgamentos), reduzindo o sofrimento emocional.',
    category: 'Mindfulness (DBT)',
    icon: '📝',
    duration: '15 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'O Que vs. Como',
        content: 'Muitas vezes sofremos não pelo que aconteceu, mas pela história que contamos sobre o que aconteceu. Vamos separar os fatos das opiniões.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'O Evento',
        content: 'Pense em uma situação recente que te chateou. Descreva-a como se fosse um juiz ou uma câmera de vídeo. Apenas o que pode ser visto ou ouvido.',
        placeholder: 'Fato: Ele chegou às 20h30. Fato: Eu disse "estou chateada".'
      },
      {
        id: 3,
        type: 'writing',
        title: 'Os Julgamentos',
        content: 'Agora, identifique os julgamentos que sua mente adicionou (palavras como "sempre", "nunca", "egoísta", "ruim", "deveria").',
        placeholder: 'Julgamento: "Ele não se importa", "Isso é injusto"...'
      },
      {
        id: 4,
        type: 'instruction',
        title: 'Descrição Não-Julgadora',
        content: 'Tente reescrever a situação removendo os adjetivos de julgamento. Substitua "Ele foi grosso" por "Ele falou em um tom de voz alto". Substitua "Eu fui estúpida" por "Eu derrubei o copo".'
      },
      {
        id: 5,
        type: 'writing',
        title: 'Efeito',
        content: 'Como a emoção muda quando você foca apenas na descrição dos fatos, sem o peso do julgamento?',
        placeholder: 'A emoção parece...'
      }
    ]
  }
];
