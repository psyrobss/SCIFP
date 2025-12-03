
import { TherapeuticExercise } from '../types';

export const DBT_INTERPERSONAL_EXERCISES: TherapeuticExercise[] = [
  {
    id: 'direitos-legitimos',
    title: 'Seus Direitos Legítimos',
    description: 'Uma lista para lembrar você do seu valor e importância como ser humano. Muitas vezes, evitamos pedir o que precisamos porque esquecemos que temos esses direitos.',
    category: 'Efetividade Interpessoal (DBT)',
    icon: '📜',
    duration: '5-10 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Instruções',
        content: 'Muitas pessoas crescem em ambientes que invalidam suas necessidades. Leia a lista abaixo. Marque os direitos que você precisa se lembrar de exercer hoje.'
      },
      {
        id: 2,
        type: 'checklist',
        title: 'Lista de Direitos',
        content: 'Eu tenho o direito de:',
        options: [
          'Precisar dos outros (não preciso me bastar sempre).',
          'Me colocar em primeiro lugar às vezes.',
          'Sentir e expressar minhas emoções ou minha dor.',
          'Ser o juiz final das minhas crenças e aceitá-las como legítimas.',
          'Ter minhas próprias opiniões e convicções.',
          'Ter minha própria experiência, mesmo que seja diferente da dos outros.',
          'Protestar contra qualquer tratamento ou crítica que me pareça ruim.',
          'Negociar mudanças.',
          'Pedir ajuda ou apoio emocional (mesmo que nem sempre eu obtenha).',
          'Dizer "não" (e isso não me torna uma pessoa má ou egoísta).',
          'Não me justificar para os outros.',
          'Não assumir a responsabilidade pelos problemas de outra pessoa.',
          'Escolher não reagir a uma situação.',
          'Às vezes, incomodar ou decepcionar os outros.'
        ]
      },
      {
        id: 3,
        type: 'writing',
        title: 'Reflexão',
        content: 'Qual desses direitos é o mais difícil para você aceitar? Por que?',
        placeholder: 'Tenho dificuldade em aceitar que tenho direito a...'
      }
    ]
  },
  {
    id: 'afirmacoes-com-eu',
    title: 'Comunicação Assertiva: Afirmações com "Eu"',
    description: 'Técnica para transformar acusações ("Você me irrita") em expressões de sentimento ("Eu me sinto irritado"), reduzindo a defesa do outro.',
    category: 'Efetividade Interpessoal (DBT)',
    icon: '🗣️',
    duration: '15 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'O Problema do "Você"',
        content: 'Frases que começam com "Você" (ex: "Você nunca me escuta", "Você me deixa louco") são percebidas como ataques. O outro para de ouvir e começa a se defender. A solução é falar sobre COMO VOCÊ SE SENTE, não sobre o que o outro é.'
      },
      {
        id: 2,
        type: 'instruction',
        title: 'Fórmula da Assertividade',
        content: 'Use esta estrutura: \n1. "Eu me sinto..." (diga a emoção, ex: triste, irritado).\n2. "Quando..." (descreva o fato sem julgar, ex: você chega tarde).\n3. "Eu gostaria/preciso..." (faça um pedido específico).'
      },
      {
        id: 3,
        type: 'writing',
        title: 'Prática: Situação Atual',
        content: 'Pense em algo que alguém fez que te chateou. Escreva a frase "antiga" (acusatória) que você teria vontade de dizer.',
        placeholder: 'Ex: "Você é muito egoísta e nunca me ajuda!"'
      },
      {
        id: 4,
        type: 'writing',
        title: 'Prática: Transformação',
        content: 'Agora, reescreva essa frase usando a estrutura "Eu me sinto... Quando...".',
        placeholder: 'Ex: "Eu me sinto sobrecarregada quando vejo a louça suja na pia. Eu gostaria que você lavasse sua parte."'
      },
      {
        id: 5,
        type: 'checklist',
        title: 'Verificação de Armadilhas',
        content: 'Verifique se sua nova frase caiu em alguma armadilha:',
        options: [
          'Eu usei "Eu sinto que você..."? (Isso é um julgamento disfarçado, não um sentimento)',
          'Eu julguei o outro? (ex: "Quando você age como idiota")',
          'Eu fui vago no pedido? (ex: "Quero que seja mais legal")',
          'Minha frase expressa vulnerabilidade real?'
        ]
      }
    ]
  }
];
