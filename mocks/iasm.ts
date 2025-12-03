
import { InventoryForm } from '../types';

export const IASM_INVENTORY: InventoryForm = {
  id: 'iasm',
  acronym: 'IASM',
  name: 'Inventário de Autogestão de Saúde Mental',
  objective: 'Avaliar a capacidade do indivíduo de gerenciar seu próprio bem-estar emocional, monitorar sintomas, aderir a cuidados e utilizar estratégias de enfrentamento de forma autônoma.',
  instructions: 'Indique o quanto cada afirmação descreve sua atitude e comportamento em relação ao cuidado com sua saúde mental, usando a escala de 1 a 7.',
  scoreOrientation: 'higher_is_better',
  responseScale: [
    { value: 1, label: 'Discordo Totalmente' },
    { value: 2, label: 'Discordo Fortemente' },
    { value: 3, label: 'Discordo em Parte' },
    { value: 4, label: 'Neutro / Misto' },
    { value: 5, label: 'Concordo em Parte' },
    { value: 6, label: 'Concordo Fortemente' },
    { value: 7, label: 'Concordo Totalmente' },
  ],
  domains: [
    {
      id: 'self_monitoring',
      name: 'Automonitoramento e Consciência',
      icon: '🧠',
      description: 'Capacidade de observar a si mesmo, identificar sinais precoces de estresse ou desregulação e reconhecer necessidades.',
      interpretationLabels: {
        level_1: 'Desconexão dos próprios sinais.',
        level_2: 'Monitoramento inconsistente.',
        level_3: 'Boa percepção de sinais.',
        level_4: 'Alta consciência preventiva.',
      },
      questions: [
        { id: 46001, text: 'Consigo perceber quando meu nível de estresse está aumentando antes de chegar no limite.' },
        { id: 46002, text: 'Reconheço os gatilhos que costumam piorar meu humor ou ansiedade.' },
        { id: 46003, text: 'Muitas vezes só percebo que estou mal quando já estou em crise.', isReversed: true },
        { id: 46004, text: 'Estou atento(a) a mudanças no meu sono ou apetite como sinais de alerta.' },
        { id: 46005, text: 'Sei identificar quando preciso de uma pausa ou de ajuda.' },
        { id: 46006, text: 'Consigo nomear o que estou sentindo na maioria das vezes.' },
        { id: 46007, text: 'Faço uma autoavaliação regular de como estou me sentindo.' },
      ],
    },
    {
      id: 'coping_strategies',
      name: 'Estratégias de Enfrentamento Ativas',
      icon: '🛠️',
      description: 'Uso de ferramentas e técnicas práticas para lidar com sintomas ou mal-estar quando eles surgem.',
      interpretationLabels: {
        level_1: 'Falta de recursos de enfrentamento.',
        level_2: 'Estratégias limitadas ou pouco eficazes.',
        level_3: 'Bom repertório de estratégias.',
        level_4: 'Uso autônomo e eficaz de ferramentas.',
      },
      questions: [
        { id: 46008, text: 'Tenho uma lista mental de coisas que posso fazer para me sentir melhor.' },
        { id: 46009, text: 'Quando estou ansioso(a), uso técnicas (ex: respiração, distração) que funcionam.' },
        { id: 46010, text: 'Sinto-me impotente quando sou invadido por emoções difíceis.', isReversed: true },
        { id: 46011, text: 'Consigo me acalmar sozinho(a) na maioria das situações.' },
        { id: 46012, text: 'Busco resolver problemas de forma prática em vez de apenas me preocupar.' },
        { id: 46013, text: 'Sei a quem recorrer se minhas próprias estratégias não funcionarem.' },
        { id: 46014, text: 'Adapto minhas estratégias dependendo da situação.' },
      ],
    },
    {
      id: 'healthy_routine_maintenance',
      name: 'Manutenção de Rotina Saudável',
      icon: '🌿',
      description: 'Compromisso com hábitos de vida (sono, rotina, autocuidado) que sustentam a estabilidade mental.',
      interpretationLabels: {
        level_1: 'Rotina caótica ou negligente.',
        level_2: 'Dificuldade em manter hábitos.',
        level_3: 'Rotina estável e protetiva.',
        level_4: 'Excelente autodisciplina no cuidado.',
      },
      questions: [
        { id: 46015, text: 'Mantenho uma rotina de sono regular para proteger minha saúde mental.' },
        { id: 46016, text: 'Lembro-me de tomar meus medicamentos (se houver) ou suplementos corretamente.' },
        { id: 46017, text: 'Quando estou estressado(a), a primeira coisa que abandono é meu autocuidado.', isReversed: true },
        { id: 46018, text: 'Faço atividades físicas ou de relaxamento regularmente.' },
        { id: 46019, text: 'Alimento-me de forma a manter minha energia estável.' },
        { id: 46020, text: 'Protejo meu tempo de descanso contra excesso de trabalho.' },
        { id: 46021, text: 'Evito substâncias ou hábitos que sei que me fazem mal.' },
      ],
    },
    {
      id: 'adherence_responsibility',
      name: 'Responsabilidade e Adesão',
      icon: '🤝',
      description: 'Postura ativa em relação ao próprio tratamento e processo de melhoria.',
      interpretationLabels: {
        level_1: 'Passividade ou resistência ao cuidado.',
        level_2: 'Adesão oscilante.',
        level_3: 'Boa responsabilidade pessoal.',
        level_4: 'Alto protagonismo na recuperação.',
      },
      questions: [
        { id: 46022, text: 'Entendo que sou o principal responsável pela minha melhora.' },
        { id: 46023, text: 'Coloco em prática o que discuto em terapia ou aprendo sobre saúde.' },
        { id: 46024, text: 'Espero que os outros (médicos, família) resolvam meus problemas por mim.', isReversed: true },
        { id: 46025, text: 'Sou honesto(a) comigo mesmo(a) e com profissionais sobre minhas dificuldades.' },
        { id: 46026, text: 'Encaro recaídas ou dias ruins como parte do processo, sem desistir.' },
        { id: 46027, text: 'Busco ativamente informações para entender melhor meu funcionamento.' },
        { id: 46028, text: 'Estou comprometido(a) com meu bem-estar a longo prazo.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de autogestão em saúde mental. Escores altos sugerem autonomia, prevenção eficaz e bom prognóstico.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Necessidade de Suporte Externo', 
        description: 'Dificuldade em gerenciar sintomas ou manter rotinas de cuidado de forma independente. Pode haver tendência a crises ou abandono do autocuidado sob estresse.',
        recommendations: [
          'Estabelecer um "Plano de Segurança" ou "Kit de Emergência" com passos simples.',
          'Usar lembretes visuais e alarmes para medicação e refeições.',
          'Envolver um familiar ou amigo como parceiro de responsabilidade.',
          'Focar na adesão ao básico antes de tentar estratégias complexas.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Autogestão em Aprendizado', 
        description: 'O indivíduo reconhece a importância do cuidado, mas pode falhar na consistência. Sabe o que fazer, mas nem sempre consegue aplicar nos momentos difíceis.',
        recommendations: [
          'Identificar barreiras que impedem o autocuidado (ex: "não tenho tempo").',
          'Treinar estratégias de enfrentamento em momentos de calma para automatizá-las.',
          'Reforçar a autoeficácia celebrando pequenas vitórias na rotina.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Autogestão Funcional', 
        description: 'Boa capacidade de monitoramento e resposta. O indivíduo mantém sua estabilidade na maior parte do tempo e sabe pedir ajuda quando seus recursos se esgotam.',
        recommendations: [
          'Refinar a percepção de sinais sutis de desequilíbrio.',
          'Expandir o "menu" de estratégias de autocuidado.',
          'Manter a vigilância relaxada para prevenir recaídas a longo prazo.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Autonomia e Prevenção', 
        description: 'Excelente gerenciamento da própria saúde mental. O indivíduo atua preventivamente, conhece profundamente seu funcionamento e mantém hábitos sólidos.',
        recommendations: [
          'Compartilhar aprendizados e estratégias com outros (apoio de pares).',
          'Usar a estabilidade para focar em crescimento pessoal e propósito.',
          'Monitorar para que o autocontrole não vire rigidez excessiva.'
        ]
      },
    ],
  },
};
