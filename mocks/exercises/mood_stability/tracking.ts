
import { TherapeuticExercise } from '../../../types';

export const MOOD_TRACKING_EXERCISES: TherapeuticExercise[] = [
  {
    id: 'mapeamento-historia',
    title: 'Mapeamento da Minha História (Gráfico da Vida)',
    description: 'Uma ferramenta visual para identificar padrões de longo prazo, conectando eventos de vida, níveis de estresse e flutuações de energia. Baseado na técnica de "Life Charting".',
    category: 'Estabilidade e Autoconhecimento',
    icon: '📈',
    duration: '30-40 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'O Objetivo do Mapeamento',
        content: 'O objetivo é ter uma visão panorâmica da sua vida para identificar gatilhos recorrentes e padrões sazonais. Muitas vezes, o que parece aleatório tem uma causa histórica ou ambiental.'
      },
      {
        id: 2,
        type: 'writing',
        title: '1. Definindo a Linha de Base',
        content: 'Pense em um período da sua vida onde você se sentiu estável, produtivo e "você mesmo". Descreva como era seu sono, sua rotina social e seu nível de energia nessa época. Isso servirá como sua referência de estabilidade.',
        placeholder: 'Quando estou no meu "normal", eu...'
      },
      {
        id: 3,
        type: 'writing',
        title: '2. Rastreando Picos de Alta Energia',
        content: 'Identifique momentos específicos no passado onde sua energia esteve muito acima do normal (agitação, pouca necessidade de sono, excesso de projetos, irritabilidade ou euforia). \n\nPara cada episódio, tente identificar: \n- O que estava acontecendo na vida (estresse, paixão, mudança de emprego)?\n- Houve mudança no sono antes disso?\n- Houve uso de substâncias ou medicamentos?',
        placeholder: 'Ano/Época: ... Evento Gatilho: ...'
      },
      {
        id: 4,
        type: 'writing',
        title: '3. Rastreando Vales de Baixa Energia',
        content: 'Agora, identifique os períodos de baixa energia, desânimo, inércia ou isolamento. \n\nPara cada episódio, pergunte-se:\n- Foi precedido por um período de alta energia (crash)?\n- Houve algum evento de perda, rejeição ou fracasso?\n- Houve interrupção de rotinas saudáveis?',
        placeholder: 'Ano/Época: ... Evento Gatilho: ...'
      },
      {
        id: 5,
        type: 'instruction',
        title: '4. Análise de Padrões',
        content: 'Observe o que você escreveu. Existem gatilhos que se repetem? (Ex: "Sempre fico agitado quando começo um projeto novo" ou "Sempre caio em inércia após o fim de um relacionamento").'
      },
      {
        id: 6,
        type: 'writing',
        title: 'Conclusão',
        content: 'Escreva qual é o principal padrão que você precisa vigiar no futuro.',
        placeholder: 'Meu principal padrão de alerta é...'
      }
    ]
  },
  {
    id: 'sinais-alerta-detalhado',
    title: 'Inventário de Sinais de Alerta (Pródromos)',
    description: 'Criação de uma lista personalizada de sinais sutis que indicam mudanças no estado mental, permitindo intervenção precoce antes de uma crise.',
    category: 'Estabilidade e Autoconhecimento',
    icon: '🚦',
    duration: '15-20 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'Por que monitorar?',
        content: 'A maioria das pessoas não percebe que está saindo do equilíbrio até que os sintomas sejam graves. No entanto, existem sinais sutis (pródromos) que aparecem dias ou semanas antes. Identificá-los permite agir rápido.'
      },
      {
        id: 2,
        type: 'range',
        title: 'Avaliação Atual de Energia',
        content: 'Como você classificaria seu nível de energia hoje?',
        rangeSettings: {
            min: 0,
            max: 10,
            labelMin: 'Exaustão Total',
            labelMax: 'Energia Extrema/Agitação'
        }
      },
      {
        id: 3,
        type: 'range',
        title: 'Avaliação de Sono',
        content: 'Quantas horas você dormiu na última noite?',
        rangeSettings: {
            min: 0,
            max: 12,
            labelMin: '0 horas',
            labelMax: '12+ horas'
        }
      },
      {
        id: 4,
        type: 'writing',
        title: '1. Meu "Eu" Estável',
        content: 'Descreva como você é quando está bem equilibrado:\n- Sono (quantas horas?): \n- Nível de atividade social: \n- Paciência/Irritabilidade: \n- Interesse em hobbies:',
        placeholder: 'Quando estou bem, eu...'
      },
      {
        id: 5,
        type: 'checklist',
        title: '2. Sinais de Aceleração (Alerta Laranja)',
        content: 'Marque o que acontece quando sua energia começa a subir (mesmo que pareça bom no início):',
        options: [
          'Dormir menos horas e não sentir falta (acordar com energia)',
          'Aumento na velocidade da fala ou do pensamento',
          'Impaciência com a "lentidão" das outras pessoas',
          'Sensação de que as cores estão mais vivas ou sons mais intensos',
          'Aumento repentino no interesse sexual ou social',
          'Gastar dinheiro com coisas que normalmente não compraria',
          'Começar vários projetos ao mesmo tempo',
          'Achar que tem "grandes ideias" ou soluções mágicas',
          'Ficar mais irritado ou argumentativo'
        ]
      },
      {
        id: 6,
        type: 'checklist',
        title: '3. Sinais de Desaceleração (Alerta Azul)',
        content: 'Marque o que acontece quando sua energia começa a cair:',
        options: [
          'Dificuldade para sair da cama ou iniciar tarefas simples',
          'Perda de interesse em coisas que normalmente gosta (anedonia)',
          'Evitar atender telefone ou responder mensagens',
          'Sensação de cansaço físico que não passa com descanso',
          'Apetite alterado (comer demais ou de menos)',
          'Pensamentos repetitivos sobre erros do passado ou culpa',
          'Sensação de que tudo exige um esforço enorme',
          'Descuido com a higiene pessoal ou aparência',
          'Sentimento de "vazio" ou indiferença'
        ]
      },
      {
        id: 7,
        type: 'instruction',
        title: 'Plano de Ação Imediato',
        content: 'Se você identificar 3 ou mais sinais de qualquer lista, ative seu protocolo de segurança: Regularize o sono imediatamente (use alarmes), reduza estímulos e adie decisões importantes por 48 horas.'
      }
    ]
  },
  {
    id: 'rastreador-ritmo',
    title: 'Rastreador de Ritmo Diário (SRM)',
    description: 'Ferramenta baseada na Teoria dos Ritmos Sociais para regular o relógio biológico e estabilizar o humor através da consistência nos eventos diários.',
    category: 'Estabilidade e Autoconhecimento',
    icon: '⏰',
    duration: '5-10 min',
    steps: [
      {
        id: 1,
        type: 'text',
        title: 'A Importância do Ritmo',
        content: 'Nosso cérebro precisa de sinais claros de tempo para regular o humor. Eventos sociais (refeições, conversas, trabalho) agem como "marcadores de tempo". Quanto mais regular for sua rotina, mais estável será seu humor.'
      },
      {
        id: 2,
        type: 'instruction',
        title: 'Os 5 Grandes Marcadores',
        content: 'Para estabilizar seu ritmo biológico, você deve tentar manter o mesmo horário (+/- 30 min) todos os dias para estes 5 eventos:'
      },
      {
        id: 3,
        type: 'writing',
        title: '1. Hora de Levantar',
        content: 'A que horas você saiu da cama hoje? (Não a hora que acordou, mas que levantou). A luz da manhã é o principal regulador do cérebro.',
        placeholder: 'Levantei às...'
      },
      {
        id: 4,
        type: 'writing',
        title: '2. Primeiro Contato Social',
        content: 'A que horas foi sua primeira interação significativa (falar com alguém, mensagem de texto, reunião)? O contato social "acorda" o cérebro.',
        placeholder: 'Primeiro contato às...'
      },
      {
        id: 5,
        type: 'writing',
        title: '3. Início das Atividades/Trabalho',
        content: 'A que horas você começou sua principal ocupação do dia (trabalho, estudo, cuidado da casa, voluntariado)?',
        placeholder: 'Comecei às...'
      },
      {
        id: 6,
        type: 'writing',
        title: '4. Jantar',
        content: 'A que horas você fez sua última refeição principal? A comida regula o metabolismo e prepara o corpo para a noite.',
        placeholder: 'Jantei às...'
      },
      {
        id: 7,
        type: 'writing',
        title: '5. Hora de Dormir',
        content: 'A que horas você apagou a luz para dormir? (A regularidade aqui é crucial para evitar episódios de humor).',
        placeholder: 'Fui dormir às...'
      },
      {
        id: 8,
        type: 'instruction',
        title: 'Avaliação de Estabilidade',
        content: 'Compare os horários de hoje com os de ontem. Se houver uma diferença maior que 2 horas, seu ritmo está instável. Meta: Tente ajustar para que a variação seja menor que 30 minutos amanhã.'
      }
    ]
  }
];
