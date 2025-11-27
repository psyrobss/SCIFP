
import { InventoryForm } from '../types';

export const ICDFO_INVENTORY: InventoryForm = {
  id: 'icdf-o',
  acronym: 'ICDF-O',
  name: 'Inventário de Correspondência entre Dizer e Fazer – Versão Observacional do Terapeuta',
  objective: 'Permitir ao terapeuta avaliar o grau de coerência entre o discurso e o comportamento observável do paciente, ao longo das sessões e entre sessões.',
  instructions: 'O terapeuta deve pontuar cada item com base em observações, autorrelatos consistentes e feedback de terceiros, usando a seguinte escala:',
  scoreOrientation: 'higher_is_better',
  responseScale: [
    { value: 1, label: 'Nunca' },
    { value: 2, label: 'Raramente' },
    { value: 3, label: 'Às vezes' },
    { value: 4, label: 'Frequentemente' },
    { value: 5, label: 'Sempre' },
  ],
  domains: [
    {
      id: 'observed_personal_coherence',
      name: 'Coerência Pessoal Observada',
      icon: '✅',
      description: 'Avalia o alinhamento observado entre promessas, valores e ações do paciente.',
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
      name: 'Indícios de Incoerência Comportamental',
      icon: '🤔',
      description: 'Mede os sinais observáveis de inconsistências entre discurso e prática.',
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
      description: 'Avalia a capacidade do paciente de assumir e corrigir as próprias incoerências.',
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
      description: 'Mede o impacto da pressão social na coerência entre valores e comportamento do paciente.',
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
    type: 'sum',
    description: 'A pontuação total indica o nível de correspondência observada entre o discurso e a ação. Pontuações mais altas refletem maior coerência.',
    notes: [
      'Itens de "Indícios de Incoerência" e os quatro primeiros de "Influência Social" são revertidos. A pontuação é calculada de 20 a 100.'
    ],
    ranges: [
        { min: 80, max: 100, label: 'Alta congruência observada', description: 'Discurso e ação alinhados.' },
        { min: 60, max: 79, label: 'Coerência predominante', description: 'Pequenas inconsistências contextuais.' },
        { min: 40, max: 59, label: 'Inconsistência moderada', description: 'Provável conflito interno ou esquiva.' },
        { min: 20, max: 39, label: 'Incoerência significativa', description: 'Possível uso de defesas evitativas.' },
        { min: 0, max: 19, label: 'Desalinhamento acentuado', description: 'Risco de autoengano ou comportamento contraditório crônico.' },
    ],
  },
};
