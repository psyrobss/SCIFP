
import { TherapeuticExercise } from '../types';

export const CBT_RULES_EXERCISES: TherapeuticExercise[] = [
  {
    id: 'desafio-deveria',
    title: 'Desafio aos "Deveria" (Regras Rígidas)',
    description: 'Técnica para identificar e flexibilizar regras internas rígidas (ex: "Eu deveria ser perfeito") que geram culpa e frustração, transformando-as em preferências realistas.',
    category: 'Terapia Cognitivo-Comportamental',
    icon: '⚖️',
    duration: '20 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'O Peso do "Deveria"',
        content: 'Muitas vezes sofremos por causa de regras rígidas que impomos a nós mesmos ("Eu deveria saber tudo", "Eu não deveria sentir raiva"). Essas regras geralmente são irrealistas e injustas.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'Identificação',
        content: 'Qual afirmação do tipo "Eu deveria" ou "Eu tenho que" está te incomodando agora?',
        placeholder: 'Ex: "Eu deveria ter terminado esse trabalho ontem."'
      },
      {
        id: 3,
        type: 'writing',
        title: 'A Origem da Regra',
        content: 'De onde veio essa regra? Quem te ensinou isso? É uma lei universal ou algo que você aprendeu?',
        placeholder: 'Aprendi isso com...'
      },
      {
        id: 4,
        type: 'table_input',
        title: 'Custos e Benefícios da Regra',
        content: 'Vamos analisar se manter essa regra rígida te ajuda ou te atrapalha.',
        tableSettings: {
            columns: [
                'Vantagens de exigir isso de mim',
                'Desvantagens/Custos (emocionais, físicos)'
            ]
        }
      },
      {
        id: 5,
        type: 'instruction',
        title: 'O Duplo Padrão',
        content: 'Pergunte a si mesmo: "Eu aplicaria essa mesma regra rígida a um amigo querido na mesma situação?". Se a resposta for não, por que você está sendo tão duro consigo mesmo?'
      },
      {
        id: 6,
        type: 'writing',
        title: 'Reformulação (Preferência)',
        content: 'Tente reescrever a regra trocando "Eu deveria" por "Eu preferiria" ou "Seria bom se, mas...". Torne a regra mais flexível e realista.',
        placeholder: 'Ex: "Eu preferiria ter terminado, mas sou humano e vou focar no que posso fazer agora."'
      }
    ]
  },
  {
    id: 'progresso-vs-perfeicao',
    title: 'Progresso vs. Perfeição',
    description: 'Exercício para combater a paralisia do perfeccionismo, focando em passos incrementais e valorizando o esforço em vez do resultado idealizado.',
    category: 'Terapia Cognitivo-Comportamental',
    icon: '📈',
    duration: '15 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'A Armadilha da Perfeição',
        content: 'O perfeccionismo muitas vezes nos paralisa. Se não podemos fazer perfeito, não fazemos nada. O antídoto é focar no PROGRESSO.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'Área de Exigência',
        content: 'Em qual área ou tarefa você está exigindo perfeição de si mesmo hoje?',
        placeholder: 'Estou tentando ser perfeito em...'
      },
      {
        id: 3,
        type: 'table_input',
        title: 'Comparação de Mentalidade',
        content: 'Compare as consequências de buscar a perfeição versus buscar o progresso.',
        tableSettings: {
            columns: [
                'Se eu exigir Perfeição (Custos)',
                'Se eu aceitar o Progresso (Benefícios)'
            ]
        }
      },
      {
        id: 4,
        type: 'writing',
        title: 'Redefinindo o Sucesso',
        content: 'Como você definiria "sucesso" nessa tarefa se o critério fosse apenas progredir ou aprender, e não ser perfeito?',
        placeholder: 'Sucesso seria apenas...'
      },
      {
        id: 5,
        type: 'writing',
        title: 'Crédito pelo Esforço',
        content: 'Liste 3 pequenas coisas que você já fez ou pode fazer nessa área que contam como progresso, mesmo que sejam pequenas.',
        placeholder: '1.\n2.\n3.'
      }
    ]
  },
  {
    id: 'declaracao-direitos',
    title: 'Minha Declaração de Direitos',
    description: 'Baseado na técnica de Leahy, este exercício ajuda a estabelecer limites e afirmar sua dignidade humana contra pressupostos de submissão ou desvalorização.',
    category: 'Terapia Cognitivo-Comportamental',
    icon: '📜',
    duration: '15-20 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Dignidade Humana',
        content: 'Muitas vezes, nossas regras internas nos dizem que não temos o direito de sentir, pedir ou errar. Vamos corrigir isso criando sua "Declaração de Direitos".'
      },
      {
        id: 2,
        type: 'checklist',
        title: 'Reconhecendo Direitos Universais',
        content: 'Marque os direitos que você precisa se lembrar de que possui:',
        options: [
          'Tenho o direito de cometer erros.',
          'Tenho o direito de mudar de ideia.',
          'Tenho o direito de dizer "não" sem me sentir culpado.',
          'Tenho o direito de pedir o que quero (mesmo que me digam não).',
          'Tenho o direito de não ser responsável pelos problemas dos outros.',
          'Tenho o direito de sentir o que sinto (tristeza, raiva, medo).',
          'Tenho o direito de não ser perfeito.',
          'Tenho o direito de ser tratado com respeito.'
        ]
      },
      {
        id: 3,
        type: 'writing',
        title: 'Personalizando sua Declaração',
        content: 'Escreva uma declaração pessoal baseada em uma situação atual difícil. Comece com "Eu tenho o direito de..."',
        placeholder: 'Eu tenho o direito de...'
      },
      {
        id: 4,
        type: 'writing',
        title: 'Plano de Ação',
        content: 'Como você pode exercer esse direito hoje? O que você faria de diferente se realmente acreditasse nisso?',
        placeholder: 'Hoje, eu vou...'
      }
    ]
  }
];
