
import { TherapeuticExercise } from '../types';

export const DBT_ADVANCED_EXERCISES: TherapeuticExercise[] = [
  {
    id: 'visualizacao-lugar-seguro',
    title: 'Visualização de um Lugar Seguro',
    description: 'Técnica de imaginação guiada para criar um refúgio mental seguro e tranquilo.',
    category: 'Tolerância ao Mal-Estar (Avançado)',
    icon: '🏝️',
    duration: '15-20 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Construindo um Santuário',
        content: 'Vamos construir um lugar onde você se sinta protegido. Pode ser real (uma praia que você foi) ou imaginário (uma cabana nas nuvens).'
      },
      {
        id: 2,
        type: 'instruction',
        title: 'Preparação',
        content: 'Sente-se confortavelmente. Feche os olhos. Respire fundo três vezes. Deixe o corpo pesar na cadeira.'
      },
      {
        id: 3,
        type: 'writing',
        title: 'O Lugar (Detalhes Sensoriais)',
        content: 'Descreva seu lugar seguro com detalhes. \n- O que você vê? (Cores, luz)\n- O que você ouve? (Vento, água, silêncio)\n- Qual a temperatura?',
        placeholder: 'Meu lugar é...'
      },
      {
        id: 4,
        type: 'instruction',
        title: 'Ancoragem',
        content: 'Imagine-se entrando nesse lugar agora. Sinta a segurança. Escolha uma palavra-chave (ex: "Paz", "Calma") para associar a essa imagem. Repita a palavra enquanto visualiza.'
      }
    ]
  },
  {
    id: 'relaxamento-controlado-deixas',
    title: 'Relaxamento Controlado por Deixas',
    description: 'Treinar o corpo para relaxar instantaneamente ao comando de uma palavra-chave.',
    category: 'Tolerância ao Mal-Estar (Avançado)',
    icon: '🔔',
    duration: '10 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Condicionamento',
        content: 'O objetivo é criar um reflexo: ao pensar na palavra, o corpo solta a tensão automaticamente.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'Sua Deixa',
        content: 'Escolha uma palavra curta e positiva (ex: "Paz", "Solta", "Calma").',
        placeholder: 'Minha palavra é...'
      },
      {
        id: 3,
        type: 'breathing_guide',
        title: 'Prática de Associação',
        content: 'Respire com o guia. Ao soltar o ar (expirar), diga a palavra mentalmente e solte os ombros.',
        breathingSettings: {
            inhale: 4,
            exhale: 6,
            holdAfter: 1
        }
      }
    ]
  },
  {
    id: 'redescobrindo-valores',
    title: 'Redescobrindo seus Valores',
    description: 'Identificar o que é importante para tolerar a dor com propósito e direção.',
    category: 'Valores e Propósito (DBT)',
    icon: '💎',
    duration: '20 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Valores vs. Metas',
        content: 'Metas são destinos (ex: casar, conseguir um emprego). Valores são direções (ex: ser amoroso, ser criativo). Valores nunca "acabam", você pode vivê-los hoje, mesmo na dor.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'Mapeamento de Áreas',
        content: 'O que é importante para você nestas áreas? Não o que você "deveria" fazer, mas o que seu coração valoriza.\n- Relações:\n- Trabalho/Educação:\n- Crescimento Pessoal:',
        placeholder: 'Eu valorizo...'
      },
      {
        id: 3,
        type: 'checklist',
        title: 'Ação Comprometida',
        content: 'Escolha uma pequena ação para hoje que esteja alinhada com um desses valores:',
        options: [
          'Ligar para alguém (Valor: Conexão)',
          'Ler 5 páginas (Valor: Aprendizado)',
          'Caminhar 10 min (Valor: Saúde)',
          'Arrumar a cama (Valor: Ordem)',
          'Ajudar alguém (Valor: Generosidade)'
        ]
      }
    ]
  },
  {
    id: 'ensaio-cognitivo',
    title: 'Ensaio Cognitivo (Exposição Imaginária)',
    description: 'Técnica avançada para praticar o enfrentamento de situações difíceis na imaginação antes que elas aconteçam.',
    category: 'Tolerância ao Mal-Estar (Avançado)',
    icon: '🎭',
    duration: '20-30 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'O Laboratório Mental',
        content: 'Muitas vezes sabemos o que fazer, mas na hora da emoção forte, esquecemos. O Ensaio Cognitivo treina seu cérebro para reagir bem sob estresse.'
      },
      {
        id: 2,
        type: 'writing',
        title: '1. O Cenário Temido',
        content: 'Descreva uma situação futura que te preocupa ou gera ansiedade/raiva. Onde você está? Quem está lá? O que acontece?',
        placeholder: 'A situação é...'
      },
      {
        id: 3,
        type: 'instruction',
        title: '2. Visualização do Gatilho',
        content: 'Feche os olhos. Imagine a cena vividamente. Veja as cores, ouça os sons. Imagine o momento exato que te chateia (o gatilho). Permita-se sentir a emoção subir levemente.'
      },
      {
        id: 4,
        type: 'range',
        title: '3. Monitoramento',
        content: 'Na sua imaginação, quão intensa está a emoção agora? (Pare se passar de 7 e use técnicas de relaxamento).',
        rangeSettings: {
            min: 0,
            max: 10,
            labelMin: 'Calmo',
            labelMax: 'Intenso'
        }
      },
      {
        id: 5,
        type: 'writing',
        title: '4. A Habilidade de Enfrentamento',
        content: 'Ainda na imaginação: Em vez de reagir como sempre (ex: gritar, fugir), imagine-se usando uma habilidade (ex: respiração, sair da sala, falar baixo). Descreva o que você faz no seu "filme mental".',
        placeholder: 'Eu me imagino...'
      },
      {
        id: 6,
        type: 'instruction',
        title: '5. O Desfecho',
        content: 'Visualize o resultado positivo de ter usado a habilidade. Veja-se lidando bem com a situação, sentindo orgulho de si mesmo. Respire fundo e abra os olhos.'
      }
    ]
  },
  {
    id: 'conexao-poder-superior',
    title: 'Conexão com o Universo (Poder Superior)',
    description: 'Exercícios para ampliar a perspectiva e sentir conexão com algo maior, reduzindo o foco excessivo no sofrimento individual.',
    category: 'Tolerância ao Mal-Estar (Avançado)',
    icon: '✨',
    duration: '10-15 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Perspectiva',
        content: 'Sentir-se parte de um todo maior ajuda a tolerar a dor. Isso não requer religião, apenas a percepção da vastidão da vida.'
      },
      {
        id: 2,
        type: 'checklist',
        title: 'Práticas de Conexão',
        content: 'Escolha uma para experimentar:',
        options: [
          'Olhar para as estrelas e imaginar que a luz delas viajou milhões de anos até você',
          'Ir à praia/parque e focar na imensidão do mar ou das árvores',
          'Imaginar suas raízes descendo até o centro da Terra',
          'Ler um texto sagrado ou filosófico que te inspire',
          'Contemplar a complexidade do seu próprio corpo (respiração, batimentos)'
        ]
      },
      {
        id: 3,
        type: 'writing',
        title: 'Reflexão',
        content: 'Ao se conectar com essa vastidão, como fica o tamanho do seu problema atual?',
        placeholder: 'Meu problema parece...'
      }
    ]
  }
];
