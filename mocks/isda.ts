
import { InventoryForm } from '../types';

export const ISDA_INVENTORY: InventoryForm = {
  id: 'isda',
  acronym: 'ISDA',
  name: 'Inventário de Sensibilidade e Desempenho Adaptativo (AH/SD)',
  objective: 'Mapear características frequentes em pessoas com altas habilidades/superdotação (AH/SD) e perfis de sensibilidade (alto rendimento cognitivo + sensibilidade emocional), incluindo processamento intensificado, criatividade, sensibilidade emocional, necessidades específicas de adaptação e bem-estar social/emocional.',
  instructions: 'As afirmações a seguir descrevem características e experiências relacionadas a sensibilidade e desempenho. Considere as últimas 4 semanas e marque a opção que melhor descreve você.',
  scoreOrientation: 'higher_is_better',
  responseScale: [
    { value: 0, label: 'Nunca ou quase nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre / Sempre' },
  ],
  domains: [
    {
      id: 'emotional_sensitivity',
      name: 'Sensibilidade Emocional e Intensidade Afetiva',
      icon: '💖',
      description: 'Avalia a intensidade da vivência emocional e a sensibilidade a estímulos afetivos e sociais.',
      questions: [
        { id: 28001, text: 'Experimento emoções de forma muito intensa, para o bem ou para o mal.' },
        { id: 28002, text: 'Sou profundamente impactado(a) por injustiças ou sofrimento alheio.' },
        { id: 28003, text: 'Pequenas críticas podem me magoar por muito tempo.' },
        { id: 28004, text: 'Tenho forte sensibilidade estética/afetiva (música, arte, natureza).' },
        { id: 28005, text: 'Às vezes me sinto sobrecarregado(a) por emoções intensas.' },
      ],
    },
    {
      id: 'cognitive_processing',
      name: 'Processamento Cognitivo Acentuado (velocidade/profundidade)',
      icon: '🧠',
      description: 'Mede a percepção de velocidade, profundidade e complexidade do pensamento.',
      questions: [
        { id: 28006, text: 'Consigo aprender conceitos complexos com rapidez.' },
        { id: 28007, text: 'Minha mente analisa situações em múltiplas camadas simultaneamente.' },
        { id: 28008, text: 'Às vezes sinto que penso "mais rápido" ou "mais profundamente" que os outros.' },
        { id: 28009, text: 'Demora para que eu concorde com explicações simplistas — busco profundidade.' },
        { id: 28010, text: 'Posso ficar preso(a) em detalhes por pensar demais.' },
      ],
    },
    {
      id: 'creativity_divergent_thinking',
      name: 'Criatividade e Pensamento Divergente',
      icon: '🎨',
      description: 'Avalia a capacidade de gerar ideias originais, pensar de forma não convencional e combinar conceitos.',
      questions: [
        { id: 28011, text: 'Costumo gerar várias soluções originais para um problema.' },
        { id: 28012, text: 'Gosto de pensar "fora da caixa" e propor alternativas inéditas.' },
        { id: 28013, text: 'Minha imaginação é rica e frequentemente me conduz a novas ideias.' },
        { id: 28014, text: 'Tenho facilidade para combinar áreas de conhecimento distintas.' },
        { id: 28015, text: 'Às vezes minhas ideias são consideradas "incomuns" pelos outros.' },
      ],
    },
    {
      id: 'self_regulation_adjustment',
      name: 'Autoregulação e Necessidade de Ajustes',
      icon: '⚙️',
      description: 'Mede a necessidade de desafios, a tolerância a tarefas repetitivas e a sensibilidade a ambientes estimulantes.',
      questions: [
        { id: 28016, text: 'Preciso de desafios constantes para me sentir motivado(a).' },
        { id: 28017, text: 'Tenho dificuldade em manter atenção em tarefas repetitivas por muito tempo.' },
        { id: 28018, text: 'Ambiente excessivamente estimulante me desgasta rapidamente.' },
        { id: 28019, text: 'Beneficio-me de rotinas flexíveis que permitam aprofundamento em interesses.' },
        { id: 28020, text: 'Às vezes preciso de apoio para traduzir meu potencial em resultados concretos.' },
      ],
    },
    {
      id: 'educational_professional_needs',
      name: 'Necessidades Educacionais/Profissionais e Adaptação',
      icon: '🎓',
      description: 'Avalia a percepção de adequação a ambientes de aprendizado e trabalho convencionais.',
      questions: [
        { id: 28021, text: 'Sinto que minhas necessidades de aprendizado não são atendidas em contextos convencionais.' },
        { id: 28022, text: 'Raramente encontro colegas com interesses intelectuais semelhantes.' },
        { id: 28023, text: 'Preciso de oportunidades para trabalhar de forma autodirigida.' },
        { id: 28024, text: 'Em ambientes que não desafiam, desmotivo-me rapidamente.' },
        { id: 28025, text: 'Beneficio-me quando há mentorias ou projetos aprofundados.' },
      ],
    },
    {
      id: 'social_emotional_wellbeing',
      name: 'Bem-estar Social e Funcionamento Emocional',
      icon: '❤️',
      description: 'Mede o impacto da sensibilidade e do alto desempenho nas relações sociais e na autoestima.',
      questions: [
        { id: 28026, text: 'Apesar das capacidades, por vezes sinto solidão ou incompreensão social.' },
        { id: 28027, text: 'Minha autoestima flutua com a aceitação/validação externa.' },
        { id: 28028, text: 'Tenho estratégias para proteger minha sensibilidade (limites, pausas).' },
        { id: 28029, text: 'Sentimentos de ansiedade ou perfeccionismo podem atrapalhar meu desempenho.' },
        { id: 28030, text: 'Com apoio adequado, consigo transformar sensibilidade em vantagem criativa.' },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'A pontuação total (0-120) sugere um perfil de sensibilidade e desempenho. Pontuações mais altas indicam maior presença de características associadas a AH/SD.',
    ranges: [
      { 
        min: 96, 
        max: 120, 
        label: 'Perfil AH/SD Pronunciado', 
        description: 'Forte presença de características associadas a Altas Habilidades/Superdotação e sobre-excitabilidade. Alta intensidade cognitiva e emocional.',
        recommendations: [
          'Buscar enriquecimento intelectual e desafios complexos para evitar tédio.',
          'Desenvolver estratégias de regulação para lidar com a intensidade emocional (sobre-excitabilidade).',
          'Procurar pares intelectuais ou grupos de interesse para reduzir a sensação de isolamento.',
          'Praticar técnicas de "descompressão" sensorial em ambientes muito estimulantes.'
        ]
      },
      { 
        min: 60, 
        max: 95, 
        label: 'Perfil de Alto Potencial e Sensibilidade', 
        description: 'Indícios claros de pensamento divergente, sensibilidade e rapidez cognitiva. Pode apresentar necessidades de adaptação em contextos convencionais.',
        recommendations: [
          'Valorizar a criatividade e buscar ambientes que permitam autonomia.',
          'Monitorar níveis de perfeccionismo que possam travar a produtividade.',
          'Validar a própria sensibilidade como uma força, não um defeito.',
          'Equilibrar atividades intelectuais com autocuidado físico e emocional.'
        ]
      },
      { 
        min: 30, 
        max: 59, 
        label: 'Potencial e Sensibilidade Moderados', 
        description: 'Perfil equilibrado, com áreas de talento e sensibilidade, mas sem os extremos típicos da superdotação. Boa adaptação geral.',
        recommendations: [
          'Investir em áreas de interesse específico para desenvolver talentos.',
          'Utilizar a sensibilidade para melhorar relações interpessoais (empatia).',
          'Manter rotinas organizadas para otimizar o desempenho.'
        ]
      },
      { 
        min: 0, 
        max: 29, 
        label: 'Baixa Expressão de Traços AH/SD', 
        description: 'Processamento cognitivo e emocional dentro da média populacional. Menor necessidade de adaptações curriculares ou ambientais específicas.',
        recommendations: [
          'Focar no desenvolvimento de competências através de esforço e prática deliberada.',
          'Aproveitar a estabilidade emocional para assumir funções de liderança ou mediação.'
        ]
      },
    ],
  },
};
