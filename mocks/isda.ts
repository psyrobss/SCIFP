
import { InventoryForm } from '../types';

export const ISDA_INVENTORY: InventoryForm = {
  id: 'isda',
  acronym: 'ISDA',
  name: 'Inventário de Sensibilidade e Desempenho Adaptativo (AH/SD)',
  objective: 'Mapear características frequentes em pessoas com altas habilidades/superdotação (AH/SD) e perfis de sensibilidade (alto rendimento cognitivo + sensibilidade emocional), focando em intensidade, criatividade e necessidades de adaptação.',
  instructions: 'As afirmações a seguir descrevem modos de sentir e pensar. Indique o quanto você se identifica com cada uma delas, sendo o mais sincero possível sobre sua experiência interna.',
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
      id: 'emotional_sensitivity',
      name: 'Sensibilidade Emocional e Intensidade',
      icon: '💖',
      description: 'Avalia a profundidade da vivência emocional e a reatividade a estímulos afetivos e sociais (sobre-excitabilidade emocional).',
      questions: [
        { id: 28001, text: 'Experimento emoções de forma muito intensa e profunda.' },
        { id: 28002, text: 'Sou profundamente impactado(a) por injustiças ou pelo sofrimento alheio.' },
        { id: 28003, text: 'Críticas ou rejeições parecem doer em mim mais do que nas outras pessoas.' },
        { id: 28004, text: 'Tenho forte sensibilidade estética, emocionando-me facilmente com música, arte ou natureza.' },
        { id: 28005, text: 'Às vezes me sinto sobrecarregado(a) pela intensidade dos meus sentimentos.' },
      ],
    },
    {
      id: 'cognitive_processing',
      name: 'Processamento Cognitivo Acentuado',
      icon: '🧠',
      description: 'Mede a percepção de velocidade, profundidade e complexidade do pensamento (sobre-excitabilidade intelectual).',
      questions: [
        { id: 28006, text: 'Consigo aprender novos conceitos com rapidez quando estou interessado.' },
        { id: 28007, text: 'Minha mente costuma analisar situações em múltiplas camadas simultaneamente.' },
        { id: 28008, text: 'Sinto que meu pensamento é acelerado e incessante.' },
        { id: 28009, text: 'Tenho necessidade de ir a fundo nas explicações; respostas superficiais não me satisfazem.' },
        { id: 28010, text: 'Posso ficar absorvido(a) em detalhes e análises por pensar demais.' },
      ],
    },
    {
      id: 'creativity_divergent_thinking',
      name: 'Criatividade e Pensamento Divergente',
      icon: '🎨',
      description: 'Avalia a capacidade de gerar ideias originais, pensar "fora da caixa" e conectar conceitos distintos.',
      questions: [
        { id: 28011, text: 'Costumo enxergar várias soluções diferentes para um mesmo problema.' },
        { id: 28012, text: 'Gosto de pensar de forma não convencional e questionar o status quo.' },
        { id: 28013, text: 'Minha imaginação é vívida e frequentemente me leva a novas ideias.' },
        { id: 28014, text: 'Tenho facilidade para conectar áreas de conhecimento aparentemente distantes.' },
        { id: 28015, text: 'Muitas vezes minhas ideias são consideradas originais ou incomuns pelos outros.' },
      ],
    },
    {
      id: 'self_regulation_adjustment',
      name: 'Necessidade de Estímulo e Regulação',
      icon: '⚙️',
      description: 'Mede a necessidade de desafios intelectuais e a intolerância ao tédio ou repetição.',
      questions: [
        { id: 28016, text: 'Preciso de novidade e desafios intelectuais para me manter motivado(a).' },
        { id: 28017, text: 'Tenho grande dificuldade em tolerar tarefas repetitivas ou monótonas.' },
        { id: 28018, text: 'Ambientes caóticos ou excessivamente estimulantes me desgastam rapidamente.' },
        { id: 28019, text: 'Funciono melhor em rotinas flexíveis que permitem aprofundamento.' },
        { id: 28020, text: 'Sinto uma "fome" mental de aprender e compreender o mundo.' },
      ],
    },
    {
      id: 'educational_professional_needs',
      name: 'Adaptação Educacional e Profissional',
      icon: '🎓',
      description: 'Avalia a percepção de adequação (ou desajuste) em ambientes de aprendizado e trabalho convencionais.',
      questions: [
        { id: 28021, text: 'Sinto que métodos de ensino ou trabalho tradicionais muitas vezes me limitam.' },
        { id: 28022, text: 'Tenho dificuldade em encontrar pessoas que compartilhem meus interesses intensos.' },
        { id: 28023, text: 'Valorizo muito a autonomia para dirigir meu próprio aprendizado ou trabalho.' },
        { id: 28024, text: 'Em ambientes que não me desafiam, perco o interesse rapidamente.' },
        { id: 28025, text: 'Sinto que meu potencial nem sempre se traduz em desempenho devido ao contexto.' },
      ],
    },
    {
      id: 'social_emotional_wellbeing',
      name: 'Bem-estar Social e Emocional',
      icon: '❤️',
      description: 'Mede o impacto da sensibilidade e do alto desempenho nas relações e na autoimagem.',
      questions: [
        { id: 28026, text: 'Às vezes me sinto "diferente" ou desconectado das pessoas ao meu redor.' },
        { id: 28027, text: 'Minha autoexigência e perfeccionismo podem me causar ansiedade.' },
        { id: 28028, text: 'Preciso de tempo sozinho para me recuperar da interação social.' },
        { id: 28029, text: 'Preocupo-me excessivamente com questões existenciais ou éticas.' },
        { id: 28030, text: 'Quando me sinto compreendido, consigo prosperar e contribuir muito.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica a intensidade dos traços de Altas Habilidades e Sensibilidade.',
    ranges: [
      { 
        min: 5.51, 
        max: 7, 
        label: 'Perfil AH/SD Pronunciado', 
        description: 'Indicadores fortes de características associadas a Altas Habilidades/Superdotação e sobre-excitabilidade (Dabrowski). Alta intensidade cognitiva e emocional, com necessidade de estímulo complexo.',
        recommendations: [
          'Enriquecimento intelectual: buscar temas complexos e desafiadores.',
          'Regulação sensorial e emocional: aprender a gerenciar a intensidade.',
          'Busca por pares: encontrar grupos com interesses similares para validação.',
          'Terapia focada em aceitação da neurodivergência e redução do perfeccionismo.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Alto Potencial e Sensibilidade', 
        description: 'Presença clara de pensamento divergente, rapidez cognitiva e sensibilidade acima da média. Provável criatividade elevada e necessidade de autonomia.',
        recommendations: [
          'Valorizar a criatividade e buscar autonomia no trabalho/estudo.',
          'Monitorar o tédio em tarefas rotineiras e criar micro-desafios.',
          'Validar a sensibilidade como uma força de empatia e percepção.',
          'Equilibrar atividades mentais com práticas de aterramento (físicas).'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Potencial e Sensibilidade Moderados', 
        description: 'Perfil equilibrado. Traços de criatividade e sensibilidade presentes, mas sem os extremos de intensidade ou desajuste frequentes na superdotação.',
        recommendations: [
          'Desenvolver talentos específicos através de prática deliberada.',
          'Utilizar a empatia para fortalecer relações sociais.',
          'Aproveitar a boa adaptação para mediar diferentes grupos.'
        ]
      },
      { 
        min: 1, 
        max: 2.5, 
        label: 'Perfil Convencional', 
        description: 'Processamento cognitivo e emocional alinhado à média populacional. Menor probabilidade de sofrimento por sobre-excitabilidade ou tédio crônico.',
        recommendations: [
          'Focar no desenvolvimento de competências e consistência.',
          'Valorizar a estabilidade e a capacidade de execução de rotinas.',
          'Investir em habilidades sociais e colaborativas.'
        ]
      },
    ],
  },
};
