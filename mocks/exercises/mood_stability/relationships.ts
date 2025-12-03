
import { TherapeuticExercise } from '../../../types';

export const MOOD_RELATIONSHIPS_EXERCISES: TherapeuticExercise[] = [
  {
    id: 'circulo-apoio-limites',
    title: 'Círculo de Apoio e Limites',
    description: 'Mapeamento da rede social para identificar quem nutre sua estabilidade e quem drena sua energia, estabelecendo limites saudáveis.',
    category: 'Estabilidade Relacional',
    icon: '⭕',
    duration: '20-25 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Gerenciando a Energia Social',
        content: 'As pessoas ao nosso redor influenciam diretamente nossa estabilidade. Algumas acalmam, outras estimulam ou estressam. É vital saber quem é quem para gerenciar sua energia.'
      },
      {
        id: 2,
        type: 'writing',
        title: '1. O Círculo Íntimo (Alta Confiança)',
        content: 'Quem são as pessoas com quem você pode ser totalmente vulnerável? Aquelas que não julgam seus momentos de baixa ou alta energia e oferecem segurança.',
        placeholder: 'Nomes:'
      },
      {
        id: 3,
        type: 'writing',
        title: '2. O Círculo Prático (Os "Fazedores")',
        content: 'Quem são as pessoas que talvez não entendam tudo sobre emoções, mas são ótimas para ajuda prática (sair, fazer tarefas, trabalhar junto)?',
        placeholder: 'Nomes:'
      },
      {
        id: 4,
        type: 'writing',
        title: '3. Identificando Estressores (Emoção Expressa)',
        content: 'Quem são as pessoas que, mesmo com boa intenção, tendem a ser críticas, intrusivas ou excessivamente emocionais, drenando sua energia?',
        placeholder: 'Nomes:'
      },
      {
        id: 5,
        type: 'checklist',
        title: '4. Estratégias de Limites',
        content: 'Para as pessoas do grupo 3 (Estressores), quais limites você precisa estabelecer para se proteger?',
        options: [
          'Limitar o tempo de contato (ex: visitas curtas)',
          'Não compartilhar detalhes íntimos ou planos futuros',
          'Evitar tópicos polêmicos (política, doenças)',
          'Encontrar apenas em locais públicos ou neutros',
          'Não atender o telefone após certo horário',
          'Usar a técnica do "Disco Arranhado" para dizer não sem explicar',
          'Encerrar a interação educadamente quando sentir irritação'
        ]
      },
      {
        id: 6,
        type: 'writing',
        title: 'Plano de Ação Social',
        content: 'Para a próxima semana: Com quem você vai buscar mais contato para se nutrir? E de quem você precisa se distanciar um pouco para se proteger?',
        placeholder: 'Vou me aproximar de... e limitar tempo com...'
      }
    ]
  },
  {
    id: 'script-assertividade',
    title: 'Roteiro para Conversas Difíceis (D.E.S.C.)',
    description: 'Técnica de Role-Play (ensaio) para estruturar pedidos ou estabelecer limites sem ser agressivo nem passivo.',
    category: 'Estabilidade Relacional',
    icon: '🗣️',
    duration: '20 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Planejando a Fala',
        content: 'Em momentos de estresse, é comum sermos agressivos ("Você sempre...") ou passivos (calar). Este roteiro ajuda a manter o foco no problema, não na pessoa.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'A Situação',
        content: 'Com quem você precisa falar? Qual é o problema específico?',
        placeholder: 'Preciso falar com... sobre...'
      },
      {
        id: 3,
        type: 'writing',
        title: 'D - Descrever (Os Fatos)',
        content: 'Descreva a situação de forma objetiva, como uma câmera filmaria. Sem julgamentos ou adjetivos.\n(Errado: "Você é preguiçoso". Certo: "A louça ficou na pia por 2 dias").',
        placeholder: 'Quando acontece...'
      },
      {
        id: 4,
        type: 'writing',
        title: 'E - Expressar (Sentimentos)',
        content: 'Diga como isso faz você se sentir, usando frases com "Eu".\n(Ex: "Eu me sinto sobrecarregado", "Eu fico preocupado").',
        placeholder: 'Eu me sinto...'
      },
      {
        id: 5,
        type: 'writing',
        title: 'S - Solicitar (O Pedido)',
        content: 'Peça claramente o que você quer que aconteça. Seja específico e positivo.\n(Ex: "Gostaria que você lavasse a louça após o jantar", não "Pare de ser bagunceiro").',
        placeholder: 'Eu gostaria que...'
      },
      {
        id: 6,
        type: 'writing',
        title: 'C - Consequências (Positivas)',
        content: 'Explique por que isso seria bom para a relação ou para ambos.\n(Ex: "Assim teremos a noite livre para descansar", "Isso me deixaria mais calmo").',
        placeholder: 'Isso seria bom porque...'
      },
      {
        id: 7,
        type: 'instruction',
        title: 'Ensaio Mental',
        content: 'Leia seu roteiro completo em voz alta para si mesmo. Imagine-se dizendo isso com calma e firmeza.'
      }
    ]
  }
];
