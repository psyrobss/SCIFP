
import { InventoryForm } from '../types';

export const IECP_INVENTORY: InventoryForm = {
  id: 'iecp',
  acronym: 'IECP',
  name: 'Inventário de Engajamento Comunitário e Pertencimento',
  objective: 'Avaliar o grau de envolvimento, identificação e integração do indivíduo com grupos sociais, comunidades e causas coletivas, considerando aspectos emocionais, comportamentais e identitários.',
  instructions: 'As afirmações abaixo descrevem atitudes e sentimentos em relação à comunidade, grupos e sociedade. Marque o quanto cada uma se aplica a você na escala de 1 a 7.',
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
      id: 'belonging_social_identity',
      name: 'Pertencimento e Identidade Social',
      icon: '🫂',
      description: 'Avalia o senso de fazer parte de grupos significativos e sentir-se aceito e valorizado neles.',
      interpretationLabels: {
        level_1: 'Sensação de não pertencimento.',
        level_2: 'Conexão superficial.',
        level_3: 'Bom senso de pertencimento.',
        level_4: 'Forte identidade comunitária.',
      },
      questions: [
        { id: 62001, text: 'Sinto que pertenço a pelo menos um grupo em que sou valorizado(a).' },
        { id: 62002, text: 'Tenho orgulho de fazer parte das comunidades das quais participo.' },
        { id: 62003, text: 'Costumo me sentir deslocado(a) nos ambientes sociais.', isReversed: true },
        { id: 62004, text: 'As pessoas com quem convivo compartilham valores semelhantes aos meus.' },
        { id: 62005, text: 'Sinto-me emocionalmente conectado(a) a meu bairro, escola ou local de trabalho.' },
        { id: 62006, text: 'Percebo que sou aceito(a) mesmo quando discordo dos outros.' },
        { id: 62007, text: 'Tenho dificuldade de encontrar grupos com os quais me identifico.', isReversed: true },
      ],
    },
    {
      id: 'community_engagement',
      name: 'Engajamento Comunitário e Participação',
      icon: '🤝',
      description: 'Avalia o envolvimento em atividades coletivas, voluntariado, colaboração e cooperação social.',
      interpretationLabels: {
        level_1: 'Passividade social.',
        level_2: 'Participação ocasional.',
        level_3: 'Engajamento ativo.',
        level_4: 'Liderança e proatividade comunitária.',
      },
      questions: [
        { id: 62008, text: 'Participo de atividades voltadas ao bem-estar coletivo.' },
        { id: 62009, text: 'Busco contribuir para melhorar minha comunidade.' },
        { id: 62010, text: 'Gosto de participar de grupos ou projetos sociais.' },
        { id: 62011, text: 'Evito envolvimento em assuntos comunitários.', isReversed: true },
        { id: 62012, text: 'Acredito que pequenas ações individuais podem causar impacto social.' },
        { id: 62013, text: 'Procuro estar informado(a) sobre questões que afetam minha comunidade.' },
        { id: 62014, text: 'Já participei de projetos voluntários ou colaborativos.' },
      ],
    },
    {
      id: 'interpersonal_connection',
      name: 'Rede de Apoio e Confiança',
      icon: '💬',
      description: 'Avalia a percepção de apoio emocional, disponibilidade de vínculos e trocas afetivas nos círculos sociais.',
      interpretationLabels: {
        level_1: 'Isolamento emocional.',
        level_2: 'Rede de apoio restrita.',
        level_3: 'Boas conexões de confiança.',
        level_4: 'Rede de apoio sólida e recíproca.',
      },
      questions: [
        { id: 62015, text: 'Sinto que posso contar com pessoas próximas quando preciso.' },
        { id: 62016, text: 'Tenho relações de confiança em minha comunidade.' },
        { id: 62017, text: 'Recebo apoio emocional quando enfrento dificuldades.' },
        { id: 62018, text: 'Frequentemente me sinto isolado(a), mesmo entre outras pessoas.', isReversed: true },
        { id: 62019, text: 'Ofereço ajuda a pessoas do meu círculo sem esperar algo em troca.' },
        { id: 62020, text: 'Tenho relações baseadas em reciprocidade e cuidado mútuo.' },
        { id: 62021, text: 'Tenho dificuldade em confiar nas pessoas ao meu redor.', isReversed: true },
      ],
    },
    {
      id: 'contribution_social_coherence',
      name: 'Sentido de Contribuição',
      icon: '🌱',
      description: 'Avalia o sentimento de propósito social, coerência entre valores pessoais e ações coletivas.',
      interpretationLabels: {
        level_1: 'Sensação de irrelevância social.',
        level_2: 'Contribuição pouco percebida.',
        level_3: 'Sentimento de utilidade social.',
        level_4: 'Alto impacto e propósito coletivo.',
      },
      questions: [
        { id: 62022, text: 'Sinto que minha presença faz diferença nos grupos que participo.' },
        { id: 62023, text: 'Busco alinhar minhas ações a valores de cooperação e solidariedade.' },
        { id: 62024, text: 'Tenho a sensação de contribuir para algo maior do que eu mesmo(a).' },
        { id: 62025, text: 'Às vezes me sinto irrelevante para os grupos dos quais faço parte.', isReversed: true },
        { id: 62026, text: 'Percebo que minhas atitudes refletem o tipo de sociedade que desejo.' },
        { id: 62027, text: 'Engajar-me socialmente fortalece meu senso de propósito.' },
        { id: 62028, text: 'Tenho dificuldade em perceber o impacto das minhas ações na coletividade.', isReversed: true },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de integração social. Escores altos refletem um forte senso de comunidade e pertencimento.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Desconexão Social', 
        description: 'Sentimento de isolamento ou não pertencimento. Pode indicar desconfiança nas relações ou falta de oportunidades de engajamento significativo.',
        recommendations: [
          'Buscar grupos pequenos baseados em interesses comuns (hobbies, leitura).',
          'Trabalhar a confiança interpessoal em ambiente seguro.',
          'Identificar valores pessoais que possam conectar a causas coletivas.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Participação Funcional', 
        description: 'Envolvimento social presente, mas talvez superficial ou utilitário. O indivíduo participa, mas pode não se sentir emocionalmente conectado ou valorizado.',
        recommendations: [
          'Aprofundar vínculos existentes através de maior autoexposição.',
          'Oferecer ajuda proativamente para fortalecer o senso de utilidade.',
          'Refletir sobre o que significa "comunidade" para você.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Engajamento e Pertencimento', 
        description: 'Boa integração social. O indivíduo sente-se parte de algo, tem uma rede de apoio confiável e contribui para o bem-estar dos grupos.',
        recommendations: [
          'Expandir o círculo para incluir pessoas de diferentes origens.',
          'Assumir papéis de coordenação ou recepção de novos membros.',
          'Manter o equilíbrio entre doação ao grupo e autocuidado.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Conexão Comunitária', 
        description: 'Forte identidade social e propósito coletivo. O indivíduo atua como um pilar em sua comunidade, promovendo coesão e suporte mútuo.',
        recommendations: [
          'Liderança comunitária e mentoria.',
          'Inspirar outros a se engajarem em causas sociais.',
          'Cuidar para não diluir a individualidade na identidade de grupo.'
        ]
      },
    ],
  },
};
