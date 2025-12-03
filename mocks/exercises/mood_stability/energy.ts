
import { TherapeuticExercise } from '../../../types';

export const MOOD_ENERGY_EXERCISES: TherapeuticExercise[] = [
  {
    id: 'lista-a-b',
    title: 'Foco e Priorização (Lista A/B)',
    description: 'Técnica para gerenciar a sensação de sobrecarga ou o excesso de ideias, estruturando as tarefas para reduzir a ansiedade e garantir o essencial.',
    category: 'Gerenciamento de Energia',
    icon: '📋',
    duration: '15 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'O Problema da Sobrecarga',
        content: 'Quando estamos acelerados, queremos fazer tudo. Quando estamos lentos, tudo parece demais. A Lista A/B ajuda a calibrar a expectativa à realidade da sua energia atual.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'Brainstorming (Descarregar a Mente)',
        content: 'Escreva TUDO o que você acha que "precisa" ou "quer" fazer. Tire da cabeça e coloque no papel, sem filtrar ou julgar a viabilidade agora.',
        placeholder: 'Minhas tarefas, ideias e obrigações...'
      },
      {
        id: 3,
        type: 'writing',
        title: 'Definindo a Lista A (O Essencial)',
        content: 'Selecione apenas 3 itens da lista anterior que são ABSOLUTAMENTE necessários para hoje ou que terão consequências graves imediatas se não forem feitos. \n\nCritério: Se você só fizesse isso hoje, o dia estaria salvo?',
        placeholder: '1. \n2. \n3. '
      },
      {
        id: 4,
        type: 'writing',
        title: 'Definindo a Lista B (O Desejável)',
        content: 'O restante dos itens vai para a Lista B. São coisas que você gostaria de fazer, mas podem esperar. \n\nRegra: Você só pode olhar para a Lista B depois de terminar a Lista A e se ainda tiver energia.',
        placeholder: 'Itens da Lista B...'
      },
      {
        id: 5,
        type: 'instruction',
        title: 'A Regra de Proteção',
        content: 'Se você sentir sua energia oscilar ou ficar irritado, corte a Lista B imediatamente. O descanso e o sono devem ser tratados como itens da "Lista A" (prioridade máxima) para manter a estabilidade.'
      }
    ]
  },
  {
    id: 'gta-quebrando-inercia',
    title: 'Quebrando a Inércia (Micro-Passos/GTA)',
    description: 'Técnica de Atribuição Gradual de Tarefas (Graded Task Assignment) para superar a paralisia, o desânimo ou a sensação de incapacidade.',
    category: 'Gerenciamento de Energia',
    icon: '🧱',
    duration: '15 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'A Lógica dos Micro-Passos',
        content: 'A inércia (dificuldade de começar) e a sensação de sobrecarga muitas vezes vêm de olhar para a tarefa inteira ("Limpar a casa"). O segredo é quebrar a tarefa em pedaços tão pequenos que seu cérebro não consiga dizer "não".'
      },
      {
        id: 2,
        type: 'writing',
        title: 'A Tarefa Bloqueada',
        content: 'Qual tarefa você está evitando ou sentindo incapaz de realizar hoje?',
        placeholder: 'A tarefa é...'
      },
      {
        id: 3,
        type: 'writing',
        title: 'Quebrando em Micro-Passos',
        content: 'Divida essa tarefa em passos minúsculos. \nExemplo: Em vez de "Lavar a louça", o passo 1 é "Ir até a pia". O passo 2 é "Colocar detergente na esponja". O passo 3 é "Lavar um copo".',
        placeholder: '1. \n2. \n3. \n4. '
      },
      {
        id: 4,
        type: 'writing',
        title: 'Previsão de Dificuldade',
        content: 'Para cada passo, dê uma nota de 0 a 100 de quão difícil você ACHA que será. \n(Isso é importante para calibrar sua expectativa).',
        placeholder: 'Dificuldade prevista para o passo 1: ...'
      },
      {
        id: 5,
        type: 'instruction',
        title: 'Ação e Verificação',
        content: 'Agora, faça APENAS o passo 1. Depois de fazer, pergunte-se: Foi tão difícil quanto eu previ? Geralmente, a dificuldade real é menor que a prevista. Se conseguir, faça o passo 2. Se não, pare e celebre o passo 1.'
      }
    ]
  },
  {
    id: 'regulacao-estimulos-sensoriais',
    title: 'Regulação de Estímulos e "Ruído"',
    description: 'Estratégias para gerenciar a superestimulação sensorial e social que pode acelerar o pensamento ou causar irritabilidade.',
    category: 'Gerenciamento de Energia',
    icon: '🎧',
    duration: '10 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'O Perigo da Superestimulação',
        content: 'Luzes, sons, telas, multidões e conversas intensas agem como estimulantes para o cérebro. Em momentos de vulnerabilidade, eles podem desencadear agitação ou esgotamento rápido.'
      },
      {
        id: 2,
        type: 'checklist',
        title: 'Inventário de Sobrecarga Atual',
        content: 'Marque o que está presente no seu ambiente ou rotina hoje:',
        options: [
          'Notificações de celular/email constantes',
          'Música alta, TV ligada ou barulho de fundo',
          'Luzes brancas fortes ou telas brilhantes à noite',
          'Várias abas do navegador abertas (multitarefa)',
          'Conversas intensas, discussões ou ambientes sociais cheios',
          'Uso de cafeína, açúcar ou energéticos',
          'Falta de tempo de silêncio ou pausa',
          'Desordem visual (bagunça) no ambiente'
        ]
      },
      {
        id: 3,
        type: 'checklist',
        title: 'Protocolo de Descompressão',
        content: 'Selecione ações para reduzir a carga sensorial AGORA:',
        options: [
          'Modo "Não Perturbe" no celular por 1 hora',
          'Apagar luzes de teto e usar abajur/luz indireta',
          'Ficar 5 minutos em silêncio absoluto (ou usar fones de cancelamento)',
          'Sair de um ambiente cheio e ir para um local vazio (banheiro, carro)',
          'Tomar um banho morno no escuro ou penumbra',
          'Praticar o olhar fixo em um ponto neutro por 2 minutos',
          'Fechar os olhos e cobri-los com as mãos (palming)'
        ]
      },
      {
        id: 4,
        type: 'instruction',
        title: 'Plano da Cinderela',
        content: 'Para eventos sociais: Estabeleça um horário fixo para ir embora ANTES de se sentir cansado ou superestimulado (ex: "Vou sair à meia-noite, não importa o quão bom esteja"). Isso preserva seu sono e estabilidade.'
      }
    ]
  },
  {
    id: 'previsao-obstaculos-habitos',
    title: 'Previsão de Obstáculos (Plano de Adesão)',
    description: 'Ferramenta para manter hábitos saudáveis (como medicação, sono ou exercícios) antecipando barreiras e criando planos de contingência.',
    category: 'Gerenciamento de Energia',
    icon: '🛡️',
    duration: '15-20 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Adesão Realista',
        content: 'Manter rotinas é difícil. O otimismo cego ("desta vez vai dar certo") geralmente falha. O sucesso vem de prever o que vai dar errado e ter um plano pronto.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'A Meta de Autocuidado',
        content: 'Qual hábito é crucial para sua estabilidade hoje? (Ex: Dormir às 23h, Tomar medicação, Caminhar 20min).',
        placeholder: 'Minha meta é...'
      },
      {
        id: 3,
        type: 'checklist',
        title: 'Identificação de Obstáculos Comuns',
        content: 'O que geralmente te atrapalha? Marque os mais frequentes:',
        options: [
          'Esquecimento / Distração',
          'Falta de vontade / Preguiça no momento',
          'Interrupção por outras pessoas / Demandas externas',
          'Mudança de rotina (viagem, fim de semana)',
          'Sensação de estar "bem demais" e não precisar mais',
          'Efeitos colaterais desconfortáveis',
          'Desorganização / Não ter o que precisa à mão'
        ]
      },
      {
        id: 4,
        type: 'writing',
        title: 'O Obstáculo Específico de Hoje',
        content: 'Pensando em hoje/amanhã, o que tem maior chance de te impedir?',
        placeholder: 'Provavelmente vou...'
      },
      {
        id: 5,
        type: 'writing',
        title: 'Plano de Contingência (Se... Então...)',
        content: 'Crie uma regra clara. "Se [obstáculo] acontecer, então eu vou [solução]". \nEx: "Se eu esquecer de manhã, tomo assim que chegar em casa". "Se estiver chovendo, faço alongamento na sala".',
        placeholder: 'Se..., então...'
      },
      {
        id: 6,
        type: 'instruction',
        title: 'Lembrete Visual',
        content: 'Coloque o remédio, o tênis ou o alarme em um lugar onde você seja OBRIGADO a tropeçar nele. Facilite o certo e dificulte o errado.'
      }
    ]
  },
  {
    id: 'acordo-estabilidade',
    title: 'Acordo de Estabilidade Pessoal',
    description: 'Um contrato consigo mesmo para definir regras de segurança e autocuidado antes que uma crise aconteça. Baseado no conceito de Contratos de Adesão.',
    category: 'Gerenciamento de Energia',
    icon: '🤝',
    duration: '25-30 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Por que fazer um acordo?',
        content: 'Quando estamos no meio de uma tempestade emocional ou de energia, é difícil tomar decisões racionais. Este acordo é feito pelo seu "eu estável" para proteger o seu "eu futuro".'
      },
      {
        id: 2,
        type: 'writing',
        title: '1. Meus Sinais de Perigo',
        content: 'Quais são os 3 sinais que indicam que estou saindo do equilíbrio? (Ex: Dormir menos de 5h, gastar demais, isolamento total).',
        placeholder: '1.\n2.\n3.'
      },
      {
        id: 3,
        type: 'writing',
        title: '2. Minhas Regras de Ouro',
        content: 'Quais regras eu me comprometo a seguir quando esses sinais aparecerem? (Ex: Entregar o cartão de crédito para alguém, não tomar álcool, ligar para o terapeuta).',
        placeholder: 'Se os sinais aparecerem, eu me comprometo a...'
      },
      {
        id: 4,
        type: 'writing',
        title: '3. Redução de Danos',
        content: 'Se eu não conseguir seguir tudo, qual é o mínimo absoluto que farei para me manter seguro? (Ex: Não dirigir, não postar em redes sociais).',
        placeholder: 'No mínimo, eu vou...'
      },
      {
        id: 5,
        type: 'writing',
        title: '4. Rede de Apoio',
        content: 'Quem são as pessoas que têm permissão para me avisar que não estou bem? O que elas devem fazer? (Ex: "Se eu ficar agressivo, por favor, saia de perto e me deixe acalmar").',
        placeholder: 'Pessoas autorizadas e instruções para elas...'
      },
      {
        id: 6,
        type: 'instruction',
        title: 'Assinatura Simbólica',
        content: 'Leia o que escreveu. Este é um compromisso com a sua saúde e liberdade. Imagine-se assinando este documento mentalmente. Você está no comando.'
      }
    ]
  },
  {
    id: 'inventario-recursos-estresse',
    title: 'Inventário de Recursos para Estresse',
    description: 'Mapeamento prático dos recursos internos e externos disponíveis para enfrentar crises, reduzindo a sensação de desamparo.',
    category: 'Gerenciamento de Energia',
    icon: '🎒',
    duration: '15 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Capacidade vs. Demanda',
        content: 'O estresse ocorre quando as demandas (problemas) parecem maiores que os recursos. Para reduzir o estresse, precisamos aumentar a percepção do que temos à nossa disposição.'
      },
      {
        id: 2,
        type: 'writing',
        title: 'O Estressor Atual',
        content: 'Qual é o problema ou situação que está drenando sua energia hoje?',
        placeholder: 'O problema é...'
      },
      {
        id: 3,
        type: 'checklist',
        title: 'Recursos Externos (O que eu tenho)',
        content: 'Marque o que você pode acessar:',
        options: [
          'Dinheiro/Reservas financeiras para emergência',
          'Amigos ou familiares que podem ouvir',
          'Pessoas que podem ajudar com tarefas práticas (ex: cuidar das crianças, carona)',
          'Profissionais (terapeuta, médico, advogado)',
          'Tempo livre (se reorganizar a agenda)',
          'Acesso à informação (internet, livros)',
          'Grupos de apoio ou comunidades'
        ]
      },
      {
        id: 4,
        type: 'checklist',
        title: 'Recursos Internos (Quem eu sou)',
        content: 'Marque suas forças pessoais que podem ajudar:',
        options: [
          'Paciência / Capacidade de esperar',
          'Criatividade para buscar soluções',
          'Persistência / Teimosia positiva',
          'Fé / Espiritualidade',
          'Inteligência / Capacidade de aprendizado',
          'Experiência (já passei por coisas piores)',
          'Humor (capacidade de rir da situação)',
          'Capacidade de organização'
        ]
      },
      {
        id: 5,
        type: 'writing',
        title: 'Plano de Mobilização',
        content: 'Olhe para os itens que você marcou. Como você pode usar 1 recurso interno e 1 recurso externo para lidar com o problema agora?',
        placeholder: 'Vou usar minha... e pedir ajuda para...'
      }
    ]
  }
];
