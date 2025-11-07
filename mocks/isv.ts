
import { InventoryForm } from '../types';

export const ISV_INVENTORY: InventoryForm = {
  id: 'isv',
  acronym: 'ISV',
  name: 'Inventário do Self e Vulnerabilidade Identitária',
  objective: 'Avaliar a coerência, estabilidade e força do senso de identidade do paciente — incluindo sua capacidade de manter um self contínuo diante de pressões emocionais, críticas, relações interpessoais e transições de vida. Explora também fragmentação, influência externa excessiva e instabilidade do eu.',
  instructions: 'Este inventário tem como objetivo compreender como você percebe a si mesmo e o quanto sua identidade, valores e sentimentos de continuidade pessoal permanecem estáveis ao longo do tempo e das situações.\n\nLeia atentamente cada afirmação e marque o quanto ela representa sua experiência pessoal, usando a escala abaixo:',
  responseScale: [
    { value: 0, label: 'Nunca ou quase nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre ou sempre' },
  ],
  domains: [
    {
      id: 'self_coherence_continuity',
      name: 'Coerência e Continuidade do Self',
      icon: '🧩',
      description: 'Avalia o quanto a pessoa sente que é a mesma em diferentes contextos e momentos da vida.',
      questions: [
        { id: 24001, text: 'Sinto que minha personalidade muda muito de acordo com quem está ao meu redor.' },
        { id: 24002, text: 'Tenho dificuldade em saber quem eu realmente sou.' },
        { id: 24003, text: 'Me reconheço como uma pessoa consistente, mesmo em momentos difíceis.', isReversed: true },
        { id: 24004, text: 'Às vezes sinto que tenho “vários eus” que se contradizem.' },
        { id: 24005, text: 'Tenho clareza sobre o que me define como pessoa.', isReversed: true },
      ],
    },
    {
      id: 'fragmentation_identity_vulnerability',
      name: 'Fragmentação e Vulnerabilidade Identitária',
      icon: '🌊',
      description: 'Explora a instabilidade do self e o sentimento de vazio ou despersonalização.',
      questions: [
        { id: 24006, text: 'Em certos momentos, sinto que não existo ou que sou “ninguém”.' },
        { id: 24007, text: 'Tenho períodos em que me sinto totalmente diferente de quem era antes.' },
        { id: 24008, text: 'Quando fico estressado, perco o senso de quem sou.' },
        { id: 24009, text: 'Tenho dificuldade em manter uma imagem estável de mim mesmo.' },
        { id: 24010, text: 'Às vezes me sinto “quebrado por dentro”, como se faltassem partes de mim.' },
      ],
    },
    {
      id: 'external_influence_conformity',
      name: 'Influência Externa e Conformidade',
      icon: '🪶',
      description: 'Avalia o quanto o self depende da aprovação e da validação externa.',
      questions: [
        { id: 24011, text: 'Costumo mudar de opinião para agradar as pessoas.' },
        { id: 24012, text: 'Tenho dificuldade em sustentar minhas próprias ideias diante de críticas.' },
        { id: 24013, text: 'Preciso da aprovação dos outros para me sentir bem comigo mesmo.' },
        { id: 24014, text: 'Quando alguém me rejeita, sinto que perco meu valor.' },
        { id: 24015, text: 'Sinto que minhas decisões são muito influenciadas pelo que esperam de mim.' },
      ],
    },
    {
      id: 'authenticity_self_expression',
      name: 'Autenticidade e Autoexpressão',
      icon: '🔍',
      description: 'Investiga a congruência entre o self interno e o comportamento externo.',
      questions: [
        { id: 24016, text: 'Consigo expressar meus verdadeiros sentimentos, mesmo quando são impopulares.', isReversed: true },
        { id: 24017, text: 'Às vezes finjo ser algo que não sou para evitar conflitos.' },
        { id: 24018, text: 'Tenho medo de mostrar quem sou de verdade.' },
        { id: 24019, text: 'Costumo esconder partes de mim para não ser julgado.' },
        { id: 24020, text: 'Sinto liberdade para ser eu mesmo, sem precisar de máscaras.', isReversed: true },
      ],
    },
    {
      id: 'integration_self_acceptance',
      name: 'Integração e Autoaceitação',
      icon: '🧭',
      description: 'Avalia a integração das experiências internas, reconciliação com o passado e autoaceitação.',
      questions: [
        { id: 24021, text: 'Consigo aceitar partes de mim que antes rejeitava.', isReversed: true },
        { id: 24022, text: 'Tenho uma visão integrada das minhas experiências de vida.', isReversed: true },
        { id: 24023, text: 'Ainda me sinto confuso sobre quem quero ser.' },
        { id: 24024, text: 'Estou aprendendo a acolher minhas contradições internas.', isReversed: true },
        { id: 24025, text: 'Sinto que minha identidade está se tornando mais sólida com o tempo.', isReversed: true },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'A pontuação total (0-100) indica o nível de vulnerabilidade identitária. Pontuações mais altas refletem maior fragmentação e instabilidade do self.',
    notes: ['Itens que indicam força e estabilidade do self são revertidos na pontuação.'],
    ranges: [
      { min: 0, max: 25, label: 'Baixa Vulnerabilidade (Self Integrado)', description: 'Identidade integrada, autoaceitação e autenticidade.' },
      { min: 26, max: 50, label: 'Vulnerabilidade Moderada', description: 'Identidade funcional, mas com sensibilidade à críticas e pressões externas.' },
      { min: 51, max: 75, label: 'Vulnerabilidade Significativa', description: 'Tendência à fragmentação, dependência externa e baixa coesão do self.' },
      { min: 76, max: 100, label: 'Alta Vulnerabilidade (Self Fragmentado)', description: 'Forte instabilidade, confusão de identidade e dificuldade de manter um senso de self contínuo.' },
    ],
  },
};
