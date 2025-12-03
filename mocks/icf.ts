
import { InventoryForm } from '../types';

export const ICF_INVENTORY: InventoryForm = {
  id: 'icf',
  acronym: 'ICF',
  name: 'Inventário de Criatividade e Fluência Mental',
  objective: 'Avaliar a capacidade de gerar ideias novas, pensar de forma flexível e encontrar soluções originais para problemas, medindo o potencial criativo aplicado.',
  instructions: 'Indique o quanto cada afirmação descreve seu modo de pensar e agir diante de desafios e situações novas.',
  scoreOrientation: 'higher_is_better',
  responseScale: [
    { value: 1, label: 'Discordo Totalmente' },
    { value: 2, label: 'Discordo Fortemente' },
    { value: 3, label: 'Discordo em Parte' },
    { value: 4, label: 'Neutro / Às vezes' },
    { value: 5, label: 'Concordo em Parte' },
    { value: 6, label: 'Concordo Fortemente' },
    { value: 7, label: 'Concordo Totalmente' },
  ],
  domains: [
    {
      id: 'idea_fluency',
      name: 'Fluência de Ideias',
      icon: '💡',
      description: 'Capacidade de gerar múltiplas soluções e alternativas para um mesmo problema.',
      interpretationLabels: {
        level_1: 'Dificuldade em gerar alternativas.',
        level_2: 'Fluência básica.',
        level_3: 'Boa fluência de ideias.',
        level_4: 'Alta fluência e prolificidade.',
      },
      questions: [
        { id: 32001, text: 'Consigo pensar rapidamente em várias soluções para um problema.' },
        { id: 32002, text: 'Tenho facilidade em encontrar novas maneiras de fazer tarefas rotineiras.' },
        { id: 32003, text: 'Frequentemente tenho mais ideias do que consigo colocar em prática.' },
        { id: 32004, text: 'Sou capaz de propor múltiplas opções quando alguém pede sugestões.' },
        { id: 32005, text: 'Sinto que minha mente é fértil em produzir pensamentos novos.' },
        { id: 32006, text: 'Posso olhar para um objeto comum e imaginar vários usos para ele.' },
        { id: 32007, text: 'Consigo adaptar e recombinar ideias antigas para criar algo novo.' },
      ],
    },
    {
      id: 'cognitive_flexibility',
      name: 'Flexibilidade Cognitiva',
      icon: '🔄',
      description: 'Habilidade de mudar de perspectiva, adaptar estratégias e lidar com o imprevisto.',
      interpretationLabels: {
        level_1: 'Rigidez de pensamento.',
        level_2: 'Alguma dificuldade de adaptação.',
        level_3: 'Boa flexibilidade mental.',
        level_4: 'Alta adaptabilidade e mudança de foco.',
      },
      questions: [
        { id: 32008, text: 'Consigo mudar minha abordagem quando percebo que algo não funciona.' },
        { id: 32009, text: 'Tenho facilidade em ver uma situação sob o ponto de vista de outra pessoa.' },
        { id: 32010, text: 'Não me incomodo em alterar meus planos diante de novas informações.' },
        { id: 32011, text: 'Lido bem com situações ambíguas ou sem regras claras.' },
        { id: 32012, text: 'Consigo transitar entre diferentes tipos de tarefas com facilidade.' },
        { id: 32013, text: 'Vejo conexões entre assuntos que parecem não ter relação.' },
        { id: 32014, text: 'Sinto-me confortável em explorar caminhos desconhecidos.' },
      ],
    },
    {
      id: 'originality_innovation',
      name: 'Originalidade e Inovação',
      icon: '✨',
      description: 'Tendência a produzir ideias únicas, incomuns e inovadoras.',
      interpretationLabels: {
        level_1: 'Preferência pelo convencional.',
        level_2: 'Originalidade ocasional.',
        level_3: 'Pensamento original frequente.',
        level_4: 'Alta capacidade de inovação.',
      },
      questions: [
        { id: 32015, text: 'Minhas ideias costumam surpreender as pessoas por serem diferentes.' },
        { id: 32016, text: 'Gosto de fazer as coisas de um jeito que ninguém fez antes.' },
        { id: 32017, text: 'Frequentemente questiono o "senso comum" ou o jeito tradicional.' },
        { id: 32018, text: 'Tenho facilidade em criar algo do zero.' },
        { id: 32019, text: 'Busco ativamente soluções que sejam únicas e inovadoras.' },
        { id: 32020, text: 'Sinto prazer em ser original, mesmo que isso gere críticas.' },
        { id: 32021, text: 'Minhas soluções para problemas costumam ser não convencionais.' },
      ],
    },
    {
      id: 'practical_application',
      name: 'Aplicação Prática da Criatividade',
      icon: '🛠️',
      description: 'Habilidade de transformar ideias abstratas em soluções funcionais e concretas.',
      interpretationLabels: {
        level_1: 'Dificuldade de concretização.',
        level_2: 'Aplicação prática limitada.',
        level_3: 'Boa capacidade de realização.',
        level_4: 'Alta eficácia na implementação criativa.',
      },
      questions: [
        { id: 32022, text: 'Sou bom em encontrar usos práticos para minhas ideias.' },
        { id: 32023, text: 'Consigo improvisar soluções rápidas com os recursos que tenho à mão.' },
        { id: 32024, text: 'Tenho facilidade em organizar ideias caóticas em um plano viável.' },
        { id: 32025, text: 'Uso minha criatividade para resolver problemas reais do dia a dia.' },
        { id: 32026, text: 'Sinto confiança em testar minhas ideias na prática.' },
        { id: 32027, text: 'Consigo simplificar processos complexos de forma criativa.' },
        { id: 32028, text: 'Minhas inovações costumam trazer resultados úteis.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) reflete o perfil de criatividade e fluência mental.',
    ranges: [
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Criatividade e Fluência', 
        description: 'Perfil altamente inovador, flexível e original. Facilidade em gerar múltiplas soluções e conectar ideias de forma complexa.',
        recommendations: [
          'Buscar ambientes que permitam autonomia e inovação.',
          'Manter um "banco de ideias" para registrar insights.',
          'Atuar como solucionador de problemas ou mentor criativo.',
          'Cuidar para não dispersar energia em projetos excessivos (foco na finalização).'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Criatividade Funcional / Moderada', 
        description: 'Boas capacidades criativas aplicadas ao cotidiano. Consegue adaptar-se e resolver problemas, mesclando abordagens tradicionais e novas.',
        recommendations: [
          'Praticar técnicas de brainstorming para expandir a fluência.',
          'Experimentar hobbies artísticos ou makers para estimular a inovação.',
          'Arriscar propor ideias "imperfeitas" para treinar a originalidade.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Criatividade em Desenvolvimento', 
        description: 'Tendência a seguir padrões estabelecidos, mas com abertura para aprendizado. Pode haver receio de errar ou julgar as próprias ideias.',
        recommendations: [
          'Questionar o "sempre foi feito assim" em pequenas tarefas.',
          'Expor-se a novas culturas e assuntos para aumentar o repertório.',
          'Reduzir a autocrítica durante o processo de geração de ideias.'
        ]
      },
      { 
        min: 1, 
        max: 2.5, 
        label: 'Pensamento Convencional / Rigidez', 
        description: 'Preferência por rotinas claras e soluções conhecidas. Dificuldade em gerar alternativas ou lidar com o abstrato.',
        recommendations: [
          'Treinar a flexibilidade com jogos de lógica e quebra-cabeças.',
          'Buscar novas experiências sensoriais (lugares, comidas).',
          'Começar com pequenas mudanças na rotina para ganhar confiança na adaptação.'
        ]
      },
    ],
  },
};
