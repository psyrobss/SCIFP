
import { TherapeuticExercise } from '../types';

export const DBT_DISTRESS_EXERCISES: TherapeuticExercise[] = [
  {
    id: 'tipp-fisiologico',
    title: 'Habilidades TIPP (Fisiológicas)',
    description: 'Técnicas para alterar a química do corpo rapidamente e reduzir a excitação emocional extrema.',
    category: 'Tolerância ao Mal-Estar (DBT)',
    icon: '⚡',
    duration: '10 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'T - Temperatura (Reflexo de Mergulho)',
        content: 'Mergulhar o rosto em água gelada ativa o sistema parassimpático (reflexo de mergulho), baixando a frequência cardíaca imediatamente. \n1. Encha uma bacia com água gelada (ou use uma bolsa de gelo com toalha). \n2. Prenda a respiração. \n3. Mergulhe o rosto (ou coloque o gelo nos olhos/bochechas) por 30 segundos.'
      },
      {
        id: 2,
        type: 'text',
        title: 'I - Intenso Exercício',
        content: 'Para acalmar o corpo agitado, você precisa exauri-lo. \nFaça 20 minutos de exercício intenso para queimar o cortisol: correr, polichinelos, flexões, subir escadas rapidamente. O objetivo é cansar fisicamente.'
      },
      {
        id: 3,
        type: 'breathing_guide',
        title: 'P - Paced Breathing (Respiração Compassada)',
        content: 'Respire em um ritmo lento e constante. Siga a animação abaixo para reduzir a ansiedade:',
        breathingSettings: {
            inhale: 4,
            exhale: 6
        }
      },
      {
        id: 4,
        type: 'text',
        title: 'P - Paired Muscle Relaxation (Relaxamento Muscular)',
        content: 'Enquanto inspira, tensione os músculos do corpo (mãos, ombros, pernas). Enquanto expira, solte a tensão de uma vez e diga mentalmente "Relaxe". Percorra o corpo todo.'
      }
    ]
  },
  {
    id: 'estrategia-raia',
    title: 'Estratégia RAIA (STOP)',
    description: 'Estratégia de emergência para impedir a impulsividade. Não aja, apenas pare e observe.',
    category: 'Tolerância ao Mal-Estar (DBT)',
    icon: '🛑',
    duration: '10-15 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'O que é a RAIA?',
        content: 'A RAIA não é uma habilidade para resolver problemas, é uma habilidade para impedir que você piore as coisas. Use quando suas emoções estiverem extremas (acima de 7 numa escala de 10) e você sentir impulsos de agir.'
      },
      {
        id: 2,
        type: 'instruction',
        title: 'R - Relaxar (Pare!)',
        content: 'Pare o que está fazendo. Congele. Não mova um músculo. Não diga mais nada. Imagine que você é uma estátua. Diga mentalmente "PARE!". Se você agir agora, será guiado apenas pela emoção extrema.'
      },
      {
        id: 3,
        type: 'instruction',
        title: 'A - Avaliar (Dê um passo atrás)',
        content: 'Dê um passo físico para trás ou respire fundo. Desgrude da situação. Imagine que você está assistindo a cena de uma varanda ou tela de cinema. Respire fundo 3 vezes para oxigenar o cérebro.'
      },
      {
        id: 4,
        type: 'writing',
        title: 'I - (Estabelecer) Intenção',
        content: 'Pergunte-se: Qual é a minha meta agora? Eu quero piorar a situação ou quero sair dela com dignidade? Qual é o meu objetivo de longo prazo?',
        placeholder: 'Minha intenção agora é...'
      },
      {
        id: 5,
        type: 'writing',
        title: 'A - Agir com Consciência',
        content: 'Aja com base na sua intenção, não na sua emoção. Faça o que é efetivo. Pergunte à sua Mente Sábia: "Qual a atitude mais saudável que posso tomar agora?".',
        placeholder: 'Vou fazer o seguinte...'
      }
    ]
  },
  {
    id: 'grande-lista-prazer',
    title: 'A Grande Lista de Atividades Prazerosas',
    description: 'Checklist completa de atividades para ativação comportamental e distração.',
    category: 'Tolerância ao Mal-Estar (DBT)',
    icon: '🎉',
    duration: 'Livre',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Ativação Comportamental',
        content: 'Fazer algo que provoca uma sensação boa é a melhor forma de se distrair de emoções dolorosas. Você não precisa esperar a vontade aparecer. Marque o que você pode fazer.'
      },
      {
        id: 2,
        type: 'checklist',
        title: 'Interação Social e Contato',
        content: 'Atividades envolvendo outras pessoas:',
        options: [
          'Falar com um amigo ao telefone',
          'Visitar um amigo',
          'Convidar um amigo para ir à sua casa',
          'Mandar mensagens de texto ou e-mails para amigos',
          'Organizar uma festa',
          'Ir ao parque local e se juntar a uma partida ou observar',
          'Ir a um evento esportivo',
          'Jogar um jogo com um amigo',
          'Bater papo on-line',
          'Ligar para um serviço de prevenção ao suicídio e conversar (se necessário)',
          'Escrever uma carta para um amigo ou parente',
          'Telefonar para alguém da família com quem não fala há muito tempo',
          'Entrar para um clube',
          'Passar um tempo com alguém que você ama, respeita ou admira',
          'Escrever uma carta para alguém que tornou sua vida melhor (mesmo sem enviar)'
        ]
      },
      {
        id: 3,
        type: 'checklist',
        title: 'Atividades Físicas e Natureza',
        content: 'Movimento e ar livre:',
        options: [
          'Praticar exercício físico',
          'Levantar peso',
          'Praticar ioga, tai chi ou pilates',
          'Alongar os músculos',
          'Sair de casa e observar as nuvens',
          'Dar uma corrida leve',
          'Andar de bicicleta',
          'Fazer trilha',
          'Praticar um esporte radical (surfe, escalada, caiaque)',
          'Sair de casa e brincar com seu animal de estimação',
          'Passear no parque com o cachorro de um amigo',
          'Dar banho no seu animal de estimação',
          'Sair para observar os pássaros e outros bichos',
          'Plantar um jardim',
          'Trabalhar ao ar livre',
          'Dar uma volta de carro, bicicleta ou transporte público',
          'Sair de casa, mesmo que seja apenas para sentar ao ar livre'
        ]
      },
      {
        id: 4,
        type: 'checklist',
        title: 'Lazer, Cultura e Hobbies',
        content: 'Entretenimento e criatividade:',
        options: [
          'Jogar algo sozinho (solitária, videogame)',
          'Ir ao cinema',
          'Ver televisão',
          'Ouvir rádio',
          'Jogar Paciência',
          'Jogar videogame',
          'Visitar seus sites preferidos',
          'Visitar sites doidos e fazer uma lista deles',
          'Criar seu próprio site ou blog',
          'Montar um quebra-cabeça',
          'Ir à biblioteca ou livraria',
          'Visitar um museu ou galeria de arte',
          'Ler um livro, revista, artigo ou poema que gosta',
          'Ler uma revista de fofocas bem fútil',
          'Escrever um poema, conto ou roteiro',
          'Escrever no diário',
          'Tocar um instrumento musical',
          'Compor uma música',
          'Ouvir música animada e alegre',
          'Tocar música alto e dançar',
          'Decorar falas de filme ou letra de música',
          'Fazer um filme ou vídeo com o celular',
          'Tirar fotos',
          'Entrar para um grupo de teatro ou coral',
          'Tricotar, fazer crochê ou costurar',
          'Desenhar',
          'Pintar um quadro (com pincel ou dedos)'
        ]
      },
      {
        id: 5,
        type: 'checklist',
        title: 'Autocuidado e Pessoal',
        content: 'Cuidar de si mesmo:',
        options: [
          'Ir às compras',
          'Ir ao cabeleireiro',
          'Passar o dia no spa',
          'Tomar um café ou chá na sua cafeteria preferida',
          'Pintar as unhas',
          'Mudar a cor do cabelo',
          'Tomar um banho de espuma (banheira ou chuveiro)',
          'Receber uma massagem',
          'Fazer uma lista de 10 coisas nas quais você é bom',
          'Escrever uma carta afetuosa para si mesmo',
          'Planejar uma viagem (mesmo imaginária)',
          'Dormir ou tirar um cochilo',
          'Comer chocolate ou algo que adore',
          'Tomar seu sorvete preferido',
          'Preparar seu prato favorito',
          'Preparar uma receita nova',
          'Comer fora',
          'Rezar ou meditar',
          'Escrever uma carta para Deus',
          'Fazer uma lista de 10 coisas que gostaria de realizar antes de morrer'
        ]
      },
      {
        id: 6,
        type: 'checklist',
        title: 'Produtividade e Organização',
        content: 'Colocar a vida em ordem:',
        options: [
          'Vender na internet algo que não quer mais',
          'Arrumar seu carro, moto ou bicicleta',
          'Inscrever-se em uma matéria ou curso',
          'Montar um álbum de recortes',
          'Limpar o quarto ou a casa',
          'Arrumar o guarda-roupa e doar peças',
          'Redecorar um cômodo',
          'Organizar livros, playlists ou computador',
          'Traçar um plano de carreira',
          'Polir sapatos ou joias',
          'Lavar o banheiro',
          'Pagar as contas',
          'Fazer uma lista de tarefas pendentes'
        ]
      }
    ]
  },
  {
    id: 'autoacalmar-5-sentidos',
    title: 'Autoacalmar-se com os 5 Sentidos',
    description: 'Técnicas sensoriais para trazer conforto e paz, tratando a si mesmo com gentileza.',
    category: 'Tolerância ao Mal-Estar (DBT)',
    icon: '🕯️',
    duration: '10-15 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'O Objetivo',
        content: 'O objetivo de se autoacalmar é oferecer algum grau de paz e alívio da dor, para que você possa decidir seus próximos passos. É também uma forma de tratar a si mesmo com compaixão.'
      },
      {
        id: 2,
        type: 'checklist',
        title: 'Visão',
        content: 'Marque o que você pode experimentar:',
        options: [
          'Folhear revistas e livros para recortar imagens que lhe agradem',
          'Encontrar um lugar bonito (parque, museu) e observar',
          'Olhar para uma foto de algo que o deixe calmo (mar, montanha)',
          'Ir à livraria e olhar livros de arte ou fotografia (ex: Ansel Adams)',
          'Desenhar ou pintar uma imagem agradável',
          'Levar consigo a foto de alguém que você ame'
        ]
      },
      {
        id: 3,
        type: 'checklist',
        title: 'Audição',
        content: 'Experimente estes sons:',
        options: [
          'Ouvir uma música suave ou instrumental',
          'Ouvir audiolivros (ouvir alguém contando uma história)',
          'Ligar a TV em um programa entediante ou sedativo (nada agitado)',
          'Ouvir um podcast relaxante ou programa de entrevistas neutro',
          'Abrir a janela e ouvir os sons lá fora (ou sons da natureza no celular)',
          'Ouvir ruído branco (ventilador, máquina de som)',
          'Ouvir o som de água corrente (fonte portátil ou torneira)',
          'Ouvir uma meditação guiada'
        ]
      },
      {
        id: 4,
        type: 'checklist',
        title: 'Olfato',
        content: 'Odores evocam memórias e sentimentos antigos:',
        options: [
          'Acender velas aromáticas ou incenso',
          'Usar óleos aromáticos, perfumes ou colônias',
          'Recortar cartões perfumados de revistas e levar na bolsa',
          'Ir a uma padaria ou restaurante sentir o cheiro',
          'Assar biscoitos ou bolo (cheiro de comida caseira)',
          'Sentir cheiro de grama ou ar livre',
          'Comprar flores frescas',
          'Abraçar alguém cujo cheiro traz calma'
        ]
      },
      {
        id: 5,
        type: 'checklist',
        title: 'Paladar',
        content: 'Deguste com atenção plena:',
        options: [
          'Degustar sua refeição preferida devagar',
          'Levar pirulitos ou chicletes na bolsa',
          'Comer algo tranquilizador (sorvete, chocolate, pudim)',
          'Beber algo aconchegante (chá, café, chocolate quente)',
          'Chupar um cubo de gelo ou picolé sentindo derreter',
          'Comprar uma fruta fresca suculenta'
        ]
      },
      {
        id: 6,
        type: 'checklist',
        title: 'Tato',
        content: 'Sensações na pele:',
        options: [
          'Carregar algo macio ou aveludado no bolso para tocar',
          'Tomar um banho quente ou frio (sentir a água)',
          'Passar loção ou creme no corpo',
          'Receber uma massagem ou fazer automassagem',
          'Brincar com um animal de estimação (sentir o pelo)',
          'Vestir roupas confortáveis (moletom, jeans velho)',
          'Sentar em uma cadeira muito confortável',
          'Escovar os cabelos por um longo tempo'
        ]
      }
    ]
  },
  {
    id: 'distracao-accepts',
    title: 'Plano de Distração (ACCEPTS)',
    description: 'Técnicas para tolerar a dor desviando o foco. Não é evitar para sempre, é sobreviver ao momento.',
    category: 'Tolerância ao Mal-Estar (DBT)',
    icon: '🧩',
    duration: '15 min',
    steps: [
      {
        id: 1,
        type: 'checklist',
        title: 'A - Activities (Atividades)',
        content: 'Envolva-se em atividades neutras que ocupem a mente:',
        options: [
          'Limpar a casa',
          'Ligar para alguém',
          'Jogar um jogo',
          'Trabalhar',
          'Escrever',
          'Cozinhar'
        ]
      },
      {
        id: 2,
        type: 'checklist',
        title: 'C - Contributing (Contribuir)',
        content: 'Foque em outra pessoa:',
        options: [
          'Fazer algo bom para alguém',
          'Elogiar alguém',
          'Fazer trabalho voluntário',
          'Ajudar um amigo',
          'Fazer uma surpresa'
        ]
      },
      {
        id: 3,
        type: 'checklist',
        title: 'C - Comparisons (Comparações)',
        content: 'Ganhe perspectiva:',
        options: [
          'Comparar-se com quem está em situação pior',
          'Comparar com um momento em que você estava pior do que agora',
          'Ler sobre desastres ou problemas alheios (para ver que o seu é manejável)'
        ]
      },
      {
        id: 4,
        type: 'checklist',
        title: 'E - Emotions (Emoções Opostas)',
        content: 'Gere uma emoção diferente da atual:',
        options: [
          'Ver um filme de comédia (se está triste)',
          'Ouvir música relaxante (se está ansioso)',
          'Ver um filme de terror (se está apático)',
          'Ler uma história emocionante'
        ]
      },
      {
        id: 5,
        type: 'checklist',
        title: 'P - Pushing away (Afastar)',
        content: 'Empurre a dor para longe temporariamente:',
        options: [
          'Colocar a dor numa caixa imaginária na estante',
          'Construir um muro imaginário entre você e a situação',
          'Recusar-se a pensar nisso agora (marcar hora para pensar depois)',
          'Gritar "PARE!" mentalmente'
        ]
      },
      {
        id: 6,
        type: 'checklist',
        title: 'T - Thoughts (Pensamentos)',
        content: 'Ocupe a mente com outra coisa:',
        options: [
          'Contar até 100',
          'Contar azulejos ou janelas',
          'Repetir a letra de uma música',
          'Resolver um quebra-cabeça',
          'Assistir um documentário complexo'
        ]
      },
      {
        id: 7,
        type: 'checklist',
        title: 'S - Sensations (Sensações)',
        content: 'Use sensações físicas fortes:',
        options: [
          'Segurar gelo na mão',
          'Apertar uma bolinha de borracha',
          'Tomar um banho muito quente ou frio',
          'Ouvir música muito alta',
          'Colocar um elástico no pulso e puxar levemente'
        ]
      }
    ]
  }
];
