
import { InventoryForm } from '../types';

export const ICDFO_INVENTORY: InventoryForm = {
  id: 'icdf-o',
  acronym: 'ICDF-O',
  name: 'Inventário de Correspondência entre Dizer e Fazer – Versão Observacional',
  objective: 'Instrumento para o terapeuta avaliar a coerência observada entre o discurso do paciente e seus comportamentos efetivos, identificando padrões de compromisso e ação.',
  instructions: 'Pontue com base na observação clínica, relatos consistentes e feedback de terceiros, usando a escala de 1 a 7.',
  scoreOrientation: 'higher_is_better',
  responseScale: [
    { value: 1, label: 'Nunca' },
    { value: 2, label: 'Raramente' },
    { value: 3, label: 'Às vezes' },
    { value: 4, label: 'Neutro / Misto' },
    { value: 5, label: 'Frequentemente' },
    { value: 6, label: 'Muito Frequentemente' },
    { value: 7, label: 'Sempre' },
  ],
  domains: [
    {
      id: 'observed_personal_coherence',
      name: 'Coerência Observada',
      icon: '✅',
      description: 'Grau em que as ações do paciente correspondem consistentemente às suas intenções declaradas.',
      questions: [
        { id: 74001, text: 'O paciente tende a agir de forma consistente com o que afirma em sessão.' },
        { id: 74002, text: 'Há correspondência entre seus relatos de intenção e suas ações subsequentes.' },
        { id: 74003, text: 'Demonstra valores estáveis e comportamento compatível.' },
        { id: 74004, text: 'Cumpre compromissos ou tarefas acordadas em terapia.' },
        { id: 74005, text: 'Apresenta congruência verbal e não verbal ao discutir decisões pessoais.' },
      ],
    },
    {
      id: 'behavioral_incoherence_signs',
      name: 'Sinais de Incoerência',
      icon: '🤔',
      description: 'Presença de discrepâncias notáveis entre o discurso e a prática (dizer uma coisa e fazer outra).',
      questions: [
        { id: 74006, text: 'Relata intenções que raramente são seguidas de ação.', isReversed: true },
        { id: 74007, text: 'Justifica incongruências sem reflexão crítica.', isReversed: true },
        { id: 74008, text: 'Mostra padrão recorrente de dizer uma coisa e fazer outra.', isReversed: true },
        { id: 74009, text: 'Demonstra dificuldade em assumir responsabilidade por contradições.', isReversed: true },
        { id: 74010, text: 'Apresenta mudanças bruscas entre discurso e conduta sem contextualização adequada.', isReversed: true },
      ],
    },
    {
      id: 'responsibility_insight',
      name: 'Responsabilidade e Insight',
      icon: '🔄',
      description: 'Capacidade do paciente de perceber suas falhas de coerência e buscar reparação.',
      questions: [
        { id: 74011, text: 'Reconhece quando há incoerência em suas atitudes.' },
        { id: 74012, text: 'Mostra esforço ativo para se tornar mais congruente.' },
        { id: 74013, text: 'Tolera desconforto ao confrontar contradições.' },
        { id: 74014, text: 'Utiliza feedback terapêutico para alinhar fala e ação.' },
        { id: 74015, text: 'Mostra evolução gradual na coerência ao longo do processo.' },
      ],
    },
    {
      id: 'social_influence_authenticity',
      name: 'Influência Social e Autenticidade',
      icon: '🎭',
      description: 'Impacto da necessidade de aprovação na consistência comportamental.',
      questions: [
        { id: 74016, text: 'Ajusta comportamento para agradar ou evitar desaprovação.', isReversed: true },
        { id: 74017, text: 'Mostra dificuldade em manter autenticidade diante de figuras de autoridade.', isReversed: true },
        { id: 74018, text: 'Modifica discurso para se adaptar ao ambiente terapêutico.', isReversed: true },
        { id: 74019, text: 'Demonstra medo excessivo de julgamento quando age diferente do que diz.', isReversed: true },
        { id: 74020, text: 'Exibe crescente autenticidade ao se sentir aceito.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) reflete a observação clínica da coerência. Escores altos indicam maior integração e confiabilidade comportamental.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Dissociação Discurso-Ação', 
        description: 'Padrão de prometer e não cumprir, ou de apresentar valores que não se traduzem em atos. Pode indicar baixa insight, desejo de agradar o terapeuta ou dificuldades executivas.',
        recommendations: [
          'Confrontar gentilmente as discrepâncias em sessão.',
          'Investigar barreiras que impedem a ação (medo, falta de habilidade).',
          'Focar em metas comportamentais muito pequenas e concretas.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Coerência em Desenvolvimento', 
        description: 'O paciente esforça-se para ser coerente, mas ainda oscila. A autocrítica ou a pressão social podem interferir na execução.',
        recommendations: [
          'Reforçar cada momento de coerência observada.',
          'Trabalhar a aceitação de que a mudança leva tempo.',
          'Identificar gatilhos de "camaleão social".'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Boa Coerência Observada', 
        description: 'O paciente demonstra integridade e compromisso. As falhas são exceções e geralmente seguidas de reconhecimento e reparação.',
        recommendations: [
          'Validar a força de caráter demonstrada.',
          'Utilizar a coerência como recurso para enfrentar desafios maiores.',
          'Explorar como essa integridade impacta positivamente as relações.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Integridade e Autenticidade', 
        description: 'Alinhamento robusto entre valores e comportamento. O paciente age de forma autêntica e responsável, servindo de base segura para o trabalho terapêutico.',
        recommendations: [
          'Incentivar a liderança pelo exemplo.',
          'Consolidar a identidade autêntica.',
          'Preparar para a alta terapêutica com base na autonomia conquistada.'
        ]
      },
    ],
  },
};
