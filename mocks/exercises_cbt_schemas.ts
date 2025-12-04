
import { TherapeuticExercise } from '../types';

export const CBT_SCHEMAS_EXERCISES: TherapeuticExercise[] = [
  {
    id: 'identificacao-modos',
    title: 'Identificação de Modos (Quem está no comando?)',
    description: 'Aprenda a reconhecer qual "parte" da sua personalidade está ativa no momento: a Criança Vulnerável, o Crítico Punitivo ou o Adulto Saudável.',
    category: 'Esquemas e Padrões',
    icon: '🎭',
    duration: '15 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Os Modos Esquema',
        content: 'Em momentos de estresse, podemos "regredir" para modos infantis ou críticos. \n- Criança Vulnerável: sente medo, solidão, inadequação. \n- Crítico Punitivo: voz interna que julga e pune. \n- Adulto Saudável: parte racional, compassiva e resolutiva.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'O Gatilho',
        content: 'O que aconteceu recentemente que mudou seu humor?',
        placeholder: 'A situação foi...'
      },
      {
        id: 3,
        type: 'checklist',
        title: 'Quem assumiu o controle?',
        content: 'Marque o que você sentiu/pensou:',
        options: [
          'Senti-me pequeno, frágil e sozinho (Criança Vulnerável)',
          'Senti raiva de mim mesmo e me xinguei (Crítico Punitivo)',
          'Fiquei defensivo ou ataquei os outros (Protetor Agressivo)',
          'Senti compaixão e tentei entender o problema (Adulto Saudável)'
        ]
      },
      {
        id: 4,
        type: 'instruction',
        title: 'Chamando o Adulto',
        content: 'Se você não marcou "Adulto Saudável", respire fundo. Imagine que uma versão sábia e forte de você entra na sala para cuidar da situação.'
      },
      {
        id: 5,
        type: 'writing',
        title: 'Ação do Adulto',
        content: 'O que o seu Adulto Saudável diria para acalmar a Criança ou silenciar o Crítico?',
        placeholder: 'O Adulto diz: "Está tudo bem, eu cuido disso..."'
      }
    ]
  },
  {
    id: 'carta-reparentalizacao',
    title: 'Carta de Reparentalização',
    description: 'Exercício de escrita terapêutica onde o seu "Eu Adulto" oferece o conforto e a validação que a "Criança Interior" precisava ter recebido.',
    category: 'Esquemas e Padrões',
    icon: '✉️',
    duration: '20-30 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Suprindo Necessidades',
        content: 'Muitos esquemas vêm de necessidades não atendidas na infância (segurança, afeto, limites). Agora, como adulto, você pode suprir essas necessidades para si mesmo.'
      },
      {
        id: 2,
        type: 'instruction',
        title: 'Conexão',
        content: 'Feche os olhos e imagine você mesmo quando criança, em um momento que se sentiu triste ou sozinho. Veja a expressão no rosto dessa criança.'
      },
      {
        id: 3,
        type: 'writing',
        title: 'A Carta',
        content: 'Escreva uma carta do seu Eu Atual para essa criança. Diga a ela o que ela precisava ouvir. Diga que ela é amada, que não é culpa dela e que você (o adulto) vai protegê-la agora.',
        placeholder: 'Querida(o) [seu nome], eu estou aqui com você...'
      },
      {
        id: 4,
        type: 'instruction',
        title: 'Leitura',
        content: 'Leia a carta em voz alta para si mesmo, com um tom de voz gentil e acolhedor. Permita-se sentir o conforto dessas palavras.'
      }
    ]
  },
  {
    id: 'quebrando-ciclo-esquema',
    title: 'Quebrando o Ciclo do Esquema',
    description: 'Mapeamento de como seus esquemas sabotam sua vida e planejamento de comportamentos opostos para enfraquecê-los.',
    category: 'Esquemas e Padrões',
    icon: '🔄',
    duration: '20 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'A Manutenção do Esquema',
        content: 'Esquemas se mantêm porque agimos de forma a confirmá-los. Ex: Se tenho esquema de abandono, sou ciumento, o que afasta o parceiro, confirmando o abandono. Precisamos quebrar esse ciclo.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'O Esquema Central',
        content: 'Qual é o padrão repetitivo que te atrapalha? (Ex: Fracasso, Abandono, Defectividade, Submissão).',
        placeholder: 'Meu esquema é...'
      },
      {
        id: 3,
        type: 'table_input',
        title: 'Mapeamento do Ciclo',
        content: 'Preencha como o ciclo acontece normalmente:',
        tableSettings: {
            columns: [
                'Gatilho (O que acontece)',
                'Reação do Esquema (O que faço)',
                'Resultado (Confirmação do Esquema)'
            ]
        }
      },
      {
        id: 4,
        type: 'writing',
        title: 'Planejando a Virada',
        content: 'Qual seria um comportamento SAUDÁVEL que quebraria esse ciclo? (Ex: Em vez de ter ciúmes, confiar. Em vez de desistir, persistir).',
        placeholder: 'Minha nova reação será...'
      },
      {
        id: 5,
        type: 'instruction',
        title: 'Compromisso',
        content: 'Agir contra o esquema vai parecer "errado" ou assustador no início. Isso é normal. Comprometa-se a testar o novo comportamento uma vez esta semana.'
      }
    ]
  }
];
