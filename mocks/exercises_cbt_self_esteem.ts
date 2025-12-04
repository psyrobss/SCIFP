
import { TherapeuticExercise } from '../types';

export const CBT_SELF_ESTEEM_EXERCISES: TherapeuticExercise[] = [
  {
    id: 'diario-dados-positivos',
    title: 'Diário de Dados Positivos',
    description: 'A baixa autoestima funciona como um filtro que apaga suas qualidades. Este exercício força o cérebro a coletar "provas" diárias de que você tem valor.',
    category: 'Autoestima e Identidade',
    icon: '🌟',
    duration: '10 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'O Advogado de Defesa',
        content: 'Seu crítico interno é um promotor agressivo. Você precisa construir um "Advogado de Defesa" interno. A melhor defesa são as evidências. Vamos coletá-las.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'Pequenas Conquistas',
        content: 'Liste 3 coisas que você fez hoje (por menores que sejam) que foram positivas, úteis ou exigiram algum esforço.',
        placeholder: '1. Levantei no horário...\n2. Ajudei alguém...\n3. Terminei uma tarefa...'
      },
      {
        id: 3,
        type: 'writing',
        title: 'Qualidades Pessoais',
        content: 'Que qualidade sua essas ações demonstram? (Ex: Se lavou a louça, demonstra "cuidado" ou "disciplina". Se ouviu um amigo, demonstra "empatia").',
        placeholder: 'Isso mostra que eu sou...'
      },
      {
        id: 4,
        type: 'instruction',
        title: 'Desafio',
        content: 'Faça isso por 7 dias. Quando pensar "não faço nada direito", leia essa lista.'
      }
    ]
  },
  {
    id: 'pizza-identidade',
    title: 'A Pizza da Identidade (Diversificação)',
    description: 'Se sua autoestima depende apenas de uma coisa (ex: trabalho), qualquer falha é devastadora. Este exercício ajuda a diversificar suas fontes de valor.',
    category: 'Autoestima e Identidade',
    icon: '🍕',
    duration: '15 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Não coloque todos os ovos na mesma cesta',
        content: 'Pessoas com autoestima frágil geralmente apoiam todo seu valor em um único pilar (ex: ser atraente, ser rico, ser inteligente). Se esse pilar balança, tudo cai. Vamos expandir isso.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'Definindo os Papéis',
        content: 'Quem é você além do seu principal problema ou trabalho? (Ex: Amigo, Filho, Leitor, Amante da Natureza, Cozinheiro, Dono de Pet).',
        placeholder: 'Eu também sou...'
      },
      {
        id: 3,
        type: 'pie_chart',
        title: 'Distribuindo o Valor',
        content: 'Crie fatias para cada papel importante da sua vida. Quanto mais fatias você tiver, mais estável será sua autoestima. Se for mal no trabalho, ainda é um bom amigo, um bom corredor, etc.'
      },
      {
        id: 4,
        type: 'writing',
        title: 'Plano de Investimento',
        content: 'Escolha uma fatia "esquecida" da sua pizza. O que você pode fazer hoje para fortalecer esse lado da sua identidade?',
        placeholder: 'Vou dedicar tempo para...'
      }
    ]
  },
  {
    id: 'linha-tempo-superacao',
    title: 'Linha do Tempo de Superação',
    description: 'Resgate de memórias de resiliência para combater a sensação de incapacidade atual.',
    category: 'Autoestima e Identidade',
    icon: '🏆',
    duration: '20 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Você já sobreviveu a 100% dos seus dias ruins',
        content: 'Quando estamos mal, esquecemos nossa força. Vamos olhar para o retrovisor para lembrar quem você é.'
      },
      {
        id: 2,
        type: 'table_input',
        title: 'Arquivo de Vitórias',
        content: 'Liste 3 momentos difíceis do passado e o que você fez para superar.',
        tableSettings: {
            columns: [
                'A Dificuldade Passada',
                'O que eu fiz para aguentar/resolver',
                'Qual força pessoal usei?'
            ]
        }
      },
      {
        id: 3,
        type: 'writing',
        title: 'Aplicação no Presente',
        content: 'Olhe para a coluna "Qual força pessoal usei?". Como você pode aplicar essa MESMA força no seu problema de hoje?',
        placeholder: 'Posso usar minha...'
      }
    ]
  }
];
