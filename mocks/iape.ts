
import { InventoryForm } from '../types';

export const IAPE_INVENTORY: InventoryForm = {
  id: 'iape',
  acronym: 'IAPE',
  name: 'Inventário de Processamento Emocional e Empatia',
  objective: 'Avaliar o modo como o indivíduo percebe, compreende, reage e responde às emoções próprias e alheias, permitindo identificar níveis de empatia cognitiva, empatia emocional e responsividade social.',
  instructions: 'Abaixo estão frases sobre como você tende a perceber e reagir às emoções de outras pessoas. Assinale quanto cada uma representa o que ocorre com você na maioria das situações sociais.',
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
      id: 'cognitive_empathy',
      name: 'Empatia Cognitiva',
      icon: '🧠',
      description: 'Capacidade de compreender e interpretar o estado emocional de outra pessoa de uma perspectiva racional (entender o que o outro sente).',
      interpretationLabels: {
        level_1: 'Dificuldade de leitura social.',
        level_2: 'Compreensão básica.',
        level_3: 'Boa leitura de sinais.',
        level_4: 'Alta perspicácia social.',
      },
      questions: [
        { id: 12001, text: 'Consigo perceber quando alguém está desconfortável, mesmo que não diga nada.' },
        { id: 12002, text: 'Tenho facilidade em entender o que as pessoas sentem pelas expressões faciais.' },
        { id: 12003, text: 'Às vezes não percebo quando alguém está chateado comigo.', isReversed: true },
        { id: 12004, text: 'Consigo imaginar como alguém se sente em determinada situação.' },
        { id: 12005, text: 'Entendo facilmente o que o outro quer dizer, mesmo que use poucas palavras.' },
        { id: 12006, text: 'Tenho dificuldade em interpretar o tom emocional das conversas.', isReversed: true },
        { id: 12007, text: 'Consigo compreender como minhas atitudes afetam o emocional das pessoas.' },
        { id: 12008, text: 'Percebo rapidamente quando há mudança no clima emocional do ambiente.' },
      ],
    },
    {
      id: 'emotional_empathy',
      name: 'Empatia Emocional (Ressonância)',
      icon: '💓',
      description: 'Capacidade de sentir o que a outra pessoa está sentindo, compartilhando ou ressoando com seu estado afetivo.',
      interpretationLabels: {
        level_1: 'Distanciamento afetivo.',
        level_2: 'Ressonância seletiva.',
        level_3: 'Boa conexão emocional.',
        level_4: 'Alta sensibilidade e contágio.',
      },
      questions: [
        { id: 12101, text: 'Quando vejo alguém sofrendo, fico emocionalmente tocado.' },
        { id: 12102, text: 'Sinto tristeza quando vejo alguém chorando.' },
        { id: 12103, text: 'Tenho dificuldade em me comover com o sofrimento dos outros.', isReversed: true },
        { id: 12104, text: 'Alegro-me com as conquistas de outras pessoas.' },
        { id: 12105, text: 'Quando alguém está tenso, também fico tenso.' },
        { id: 12106, text: 'Costumo me afetar demais pelos problemas alheios (sobrecarga).', isReversed: true }, // Revertido pois excesso é desregulação
        { id: 12107, text: 'Sinto empatia mesmo quando não conheço a pessoa.' },
        { id: 12108, text: 'Às vezes evito contato emocional com o sofrimento dos outros.', isReversed: true },
      ],
    },
    {
      id: 'interpersonal_regulation',
      name: 'Regulação Interpessoal',
      icon: '⚖️',
      description: 'Habilidade de manter o próprio equilíbrio emocional ao lidar com o sofrimento alheio, sem se fundir ou se exaurir.',
      interpretationLabels: {
        level_1: 'Fusão ou exaustão fácil.',
        level_2: 'Regulação oscilante.',
        level_3: 'Bom equilíbrio eu-outro.',
        level_4: 'Empatia sustentável e regulada.',
      },
      questions: [
        { id: 12201, text: 'Consigo ajudar alguém sem me deixar sobrecarregar emocionalmente.' },
        { id: 12202, text: 'Fico tão envolvido com o sofrimento dos outros que me esqueço de mim.', isReversed: true },
        { id: 12203, text: 'Sei quando preciso me afastar para manter meu equilíbrio emocional.' },
        { id: 12204, text: 'Tenho dificuldade em não absorver o clima emocional das pessoas.', isReversed: true },
        { id: 12205, text: 'Mesmo em situações tensas, consigo manter empatia e clareza mental.' },
        { id: 12206, text: 'Sinto-me emocionalmente esgotado após escutar os problemas dos outros.', isReversed: true },
        { id: 12207, text: 'Sei diferenciar o que é minha emoção e o que é do outro.' },
        { id: 12208, text: 'Consigo oferecer apoio emocional sem perder minha estabilidade interna.' },
      ],
    },
    {
      id: 'social_integration',
      name: 'Ação Pró-Social (Compaixão)',
      icon: '🌐',
      description: 'Tendência a transformar o sentimento empático em ações de apoio, cuidado e gentileza.',
      interpretationLabels: {
        level_1: 'Passividade diante da dor alheia.',
        level_2: 'Ação hesitante.',
        level_3: 'Boa disposição para ajudar.',
        level_4: 'Atitude compassiva ativa.',
      },
      questions: [
        { id: 12301, text: 'Costumo oferecer ajuda quando percebo que alguém está triste.' },
        { id: 12302, text: 'Demonstro preocupação genuína quando alguém sofre.' },
        { id: 12303, text: 'Às vezes evito me envolver para não ter que lidar com a dor alheia.', isReversed: true },
        { id: 12304, text: 'Gosto de confortar pessoas que passam por momentos difíceis.' },
        { id: 12305, text: 'Tenho facilidade em escutar e compreender sem julgar.' },
        { id: 12306, text: 'Às vezes ignoro o sofrimento dos outros por não saber o que fazer.', isReversed: true },
        { id: 12307, text: 'Procuro agir com gentileza e cuidado, mesmo em desacordos.' },
        { id: 12308, text: 'Busco formas práticas de ajudar quem está em dificuldade.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) reflete o perfil de empatia. Escores equilibrados indicam capacidade de conexão sem perda de si mesmo.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Foco Interno / Distanciamento', 
        description: 'Dificuldade em sintonizar com o estado emocional alheio ou tendência a evitar o envolvimento por autoproteção. Pode parecer frio ou distante.',
        recommendations: [
          'Treinar a leitura de expressões faciais e linguagem corporal.',
          'Praticar a escuta ativa: ouvir para entender, não para responder.',
          'Explorar se o distanciamento é uma defesa contra a própria sensibilidade.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Empatia em Desenvolvimento', 
        description: 'Capacidade de conexão presente, mas pode haver dificuldade em situações complexas ou sob estresse. Risco de "contágio emocional" sem regulação.',
        recommendations: [
          'Aprender a diferenciar "sentir com" (empatia) de "sofrer por" (angústia).',
          'Estabelecer limites saudáveis: saber dizer não para se preservar.',
          'Desenvolver curiosidade sobre a perspectiva do outro.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Boa Capacidade Empática', 
        description: 'Bom equilíbrio entre compreender o outro e manter a própria estabilidade. O indivíduo consegue oferecer suporte efetivo.',
        recommendations: [
          'Praticar a compaixão ativa (focar na ação de ajuda).',
          'Usar a empatia para mediar conflitos ou melhorar a comunicação.',
          'Manter práticas de autocuidado para evitar fadiga por compaixão.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Ressonância e Compaixão', 
        description: 'Excelente capacidade de conexão e leitura social. O indivíduo é percebido como acolhedor e compreensivo. Atenção para não se doar em excesso.',
        recommendations: [
          'Liderança humanizada e gestão de pessoas.',
          'Monitorar o equilíbrio entre dar e receber nas relações.',
          'Servir como modelo de regulação emocional para o grupo.'
        ]
      },
    ],
  }
};
