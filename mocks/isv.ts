
import { InventoryForm } from '../types';

export const ISV_INVENTORY: InventoryForm = {
  id: 'isv',
  acronym: 'ISV',
  name: 'Inventário do Self e Vulnerabilidade Identitária',
  objective: 'Avaliar a sensibilidade do senso de identidade, explorando como o indivíduo lida com a continuidade de si mesmo, a influência externa e a sensação de solidez interna.',
  instructions: 'Este inventário busca compreender como você percebe a si mesmo. Leia atentamente cada afirmação e marque o quanto ela representa sua experiência pessoal, usando a escala de 1 a 7.',
  scoreOrientation: 'higher_is_worse',
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
      id: 'self_coherence_continuity',
      name: 'Continuidade do Self',
      icon: '🧩',
      description: 'Avalia a sensação de ser a mesma pessoa em diferentes contextos e ao longo do tempo.',
      questions: [
        { id: 24001, text: 'Sinto que minha personalidade muda drasticamente dependendo de quem está comigo.' },
        { id: 24002, text: 'Muitas vezes não sei dizer quem eu realmente sou.' },
        { id: 24003, text: 'Me reconheço como uma pessoa consistente, mesmo em momentos difíceis.', isReversed: true },
        { id: 24004, text: 'Às vezes sinto que tenho “vários eus” que entram em conflito.' },
        { id: 24005, text: 'Tenho clareza sobre os traços que me definem como pessoa.', isReversed: true },
      ],
    },
    {
      id: 'fragmentation_identity_vulnerability',
      name: 'Sensibilidade à Fragmentação',
      icon: '🌊',
      description: 'Explora sentimentos de vazio, instabilidade ou dificuldade em "se sentir real".',
      questions: [
        { id: 24006, text: 'Em certos momentos, sinto um vazio interno ou que sou “ninguém”.' },
        { id: 24007, text: 'Tenho períodos em que me sinto estranho(a) a mim mesmo(a).' },
        { id: 24008, text: 'Quando fico muito estressado(a), parece que perco o chão de quem sou.' },
        { id: 24009, text: 'Tenho dificuldade em manter uma imagem estável de mim mesmo(a).' },
        { id: 24010, text: 'Às vezes sinto como se faltassem partes de mim.' },
      ],
    },
    {
      id: 'external_influence_conformity',
      name: 'Permeabilidade à Influência Externa',
      icon: '🪶',
      description: 'Avalia o quanto o senso de self depende da aprovação ou definição dos outros.',
      questions: [
        { id: 24011, text: 'Costumo mudar de opinião rapidamente para me adaptar aos outros.' },
        { id: 24012, text: 'Tenho dificuldade em sustentar quem sou quando sou criticado(a).' },
        { id: 24013, text: 'Preciso muito da confirmação dos outros para sentir que existo ou tenho valor.' },
        { id: 24014, text: 'Quando alguém me rejeita, sinto que deixo de ser eu mesmo(a).' },
        { id: 24015, text: 'Sinto que minhas decisões são mais dos outros do que minhas.' },
      ],
    },
    {
      id: 'authenticity_self_expression',
      name: 'Dificuldade de Expressão Autêntica',
      icon: '🔍',
      description: 'Investiga o uso de "máscaras" ou a ocultação do self verdadeiro por proteção.',
      questions: [
        { id: 24016, text: 'Consigo expressar quem sou, mesmo quando é difícil.', isReversed: true },
        { id: 24017, text: 'Frequentemente finjo ser diferente para evitar conflitos.' },
        { id: 24018, text: 'Tenho receio de mostrar meu verdadeiro eu.' },
        { id: 24019, text: 'Costumo esconder partes importantes da minha personalidade.' },
        { id: 24020, text: 'Sinto liberdade para ser espontâneo(a) na maior parte do tempo.', isReversed: true },
      ],
    },
    {
      id: 'integration_self_acceptance',
      name: 'Integração de Experiências',
      icon: '🧭',
      description: 'Avalia a capacidade de aceitar e integrar diferentes aspectos da própria história e personalidade.',
      questions: [
        { id: 24021, text: 'Consigo aceitar partes de mim que antes eu rejeitava.', isReversed: true },
        { id: 24022, text: 'Sinto que minha história de vida faz sentido como um todo.', isReversed: true },
        { id: 24023, text: 'Ainda me sinto muito confuso(a) sobre o que quero ser.' },
        { id: 24024, text: 'Estou aprendendo a conviver bem com minhas contradições.', isReversed: true },
        { id: 24025, text: 'Sinto que minha identidade está ficando mais sólida.', isReversed: true },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica o nível de vulnerabilidade identitária. Escores mais altos sugerem maior sensibilidade, fluidez ou fragilidade no senso de self.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Identidade Sólida e Integrada', 
        description: 'Indica um senso de self coeso, estável e autêntico. A pessoa tende a manter seus valores e percepção de si mesma mesmo diante de pressões externas.',
        recommendations: [
          'Continuar investindo em projetos de autodesenvolvimento.',
          'Usar a segurança pessoal para explorar novas facetas da identidade.',
          'Servir como ponto de equilíbrio em relações interpessoais.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Vulnerabilidade Identitária Leve', 
        description: 'Identidade funcional, mas com sensibilidade a críticas ou momentos de dúvida. Pode haver adaptação excessiva (camaleão social) em ambientes novos.',
        recommendations: [
          'Trabalhar a diferenciação: "O que eu penso" vs "O que o grupo pensa".',
          'Fortalecer a validação interna das próprias escolhas.',
          'Exercícios de valores para clarificar a bússola interna.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Sensibilidade Identitária Moderada', 
        description: 'Dúvidas frequentes sobre quem se é. Tendência a se fundir com os outros ou sentir vazio quando sozinho. A autoimagem pode oscilar conforme o feedback externo.',
        recommendations: [
          'Terapia focada na construção da narrativa pessoal e história de vida.',
          'Explorar o medo de rejeição que leva à ocultação do eu verdadeiro.',
          'Diário de autodescoberta: registrar gostos, desgostos e opiniões genuínas.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Fragilidade e Fluidez do Self', 
        description: 'Sensação intensa de instabilidade, vazio ou confusão. A pessoa pode sentir que "não existe" ou que muda completamente dependendo do ambiente. Requer cuidado e estruturação.',
        recommendations: [
          'Intervenção clínica para estruturação e fortalecimento do ego.',
          'Atividades de "ancoragem" que conectem a pessoa ao corpo e ao presente.',
          'Validar a existência e as necessidades básicas como legítimas.',
          'Evitar mudanças de vida drásticas durante períodos de crise identitária.'
        ]
      },
    ],
  },
};
