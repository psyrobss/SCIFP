
import { InventoryForm } from '../types';

export const IECP_INVENTORY: InventoryForm = {
  id: 'iecp',
  acronym: 'IECP',
  name: 'Inventário de Engajamento Comunitário e Pertencimento',
  objective: 'Avaliar o grau de envolvimento, identificação e integração do indivíduo com grupos sociais, comunidades e causas coletivas, considerando aspectos emocionais, comportamentais e identitários.',
  instructions: 'As afirmações abaixo descrevem atitudes e sentimentos em relação à comunidade, grupos e sociedade.\nMarque o quanto cada uma se aplica a você.',
  responseScale: [
    { value: 0, label: 'Nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre' },
  ],
  domains: [
    {
      id: 'belonging_social_identity',
      name: 'Pertencimento e Identidade Social',
      icon: '🫂',
      description: 'Avalia o senso de fazer parte de grupos significativos e sentir-se aceito e valorizado neles.',
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
      name: 'Engajamento Comunitário e Participação Ativa',
      icon: '🤝',
      description: 'Avalia o envolvimento em atividades coletivas, voluntariado, colaboração e cooperação social.',
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
      name: 'Conexão Interpessoal e Suporte Social',
      icon: '💬',
      description: 'Avalia a percepção de apoio emocional, disponibilidade de vínculos e trocas afetivas nos círculos sociais.',
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
      name: 'Sentido de Contribuição e Coerência Social',
      icon: '🌱',
      description: 'Avalia o sentimento de propósito social, coerência entre valores pessoais e ações coletivas, e percepção de utilidade para o grupo.',
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
    type: 'sum',
    description: 'A pontuação total (0–112) indica o nível de engajamento comunitário. Itens com (R) são invertidos. Escores mais altos refletem maior conexão social e pertencimento.',
    ranges: [
      { min: 0, max: 28, label: 'Isolamento e desconexão social', description: 'Sentimento de não pertencimento, retraimento social' },
      { min: 29, max: 56, label: 'Participação funcional limitada', description: 'Envolvimento eventual, baixo senso de propósito coletivo' },
      { min: 57, max: 84, label: 'Engajamento equilibrado', description: 'Integração social e identificação com grupos' },
      { min: 85, max: 112, label: 'Engajamento e pertencimento elevados', description: 'Forte conexão social, identidade comunitária e altruísmo ativo' },
    ],
  },
};