
import { InventoryForm } from '../types';

export const IAPE_INVENTORY: InventoryForm = {
  id: 'iape',
  acronym: 'IAPE',
  name: 'Inventário de Processamento Emocional e Empatia',
  objective: 'Avaliar o modo como o indivíduo percebe, compreende, reage e responde às emoções próprias e alheias, permitindo identificar níveis de empatia cognitiva, empatia emocional e responsividade social.',
  instructions: 'Abaixo estão frases sobre como você tende a perceber e reagir às emoções de outras pessoas. Assinale quanto cada uma representa o que ocorre com você na maioria das situações sociais.',
  scoreOrientation: 'higher_is_better',
  responseScale: [
    { value: 0, label: 'Nunca é verdade para mim' },
    { value: 1, label: 'Raramente é verdade para mim' },
    { value: 2, label: 'Às vezes é verdade para mim' },
    { value: 3, label: 'Frequentemente é verdade para mim' },
    { value: 4, label: 'Quase sempre é verdade para mim' },
  ],
  domains: [
    {
      id: 'cognitive_empathy',
      name: 'Empatia Cognitiva',
      icon: '🧠',
      description: 'Capacidade de compreender e interpretar o estado emocional de outra pessoa de uma perspectiva racional.',
      interpretationLabels: {
        level_1: 'Dificuldade em compreender o ponto de vista alheio.',
        level_2: 'Compreensão intelectual das emoções, mas com dificuldade em situações complexas.',
        level_3: 'Boa capacidade de interpretar e entender as emoções dos outros.',
        level_4: 'Elevada capacidade de ler o estado emocional e as intenções de outras pessoas.',
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
      name: 'Empatia Emocional (Ressonância Afetiva)',
      icon: '💓',
      description: 'Capacidade de sentir o que a outra pessoa está sentindo, compartilhando ou ressoando com seu estado afetivo.',
      interpretationLabels: {
        level_1: 'Baixa ressonância afetiva, com distanciamento emocional.',
        level_2: 'Sensibilidade emocional presente, mas contida.',
        level_3: 'Boa capacidade de se conectar e se comover com o sentimento alheio.',
        level_4: 'Elevada ressonância afetiva, com forte contágio emocional.',
      },
      questions: [
        { id: 12101, text: 'Quando vejo alguém sofrendo, fico emocionalmente tocado.' },
        { id: 12102, text: 'Sinto tristeza quando vejo alguém chorando.' },
        { id: 12103, text: 'Tenho dificuldade em me comover com o sofrimento dos outros.', isReversed: true },
        { id: 12104, text: 'Alegro-me com as conquistas de outras pessoas.' },
        { id: 12105, text: 'Quando alguém está tenso, também fico tenso.' },
        { id: 12106, text: 'Costumo me afetar demais pelos problemas alheios.', isReversed: true },
        { id: 12107, text: 'Sinto empatia mesmo quando não conheço a pessoa.' },
        { id: 12108, text: 'Às vezes evito contato emocional com o sofrimento dos outros.', isReversed: true },
      ],
    },
    {
      id: 'interpersonal_regulation',
      name: 'Regulação Interpessoal e Empatia Funcional',
      icon: '⚖️',
      description: 'Habilidade de manter o próprio equilíbrio emocional ao lidar com o sofrimento alheio, sem se sobrecarregar.',
      interpretationLabels: {
        level_1: 'Elevada capacidade de se manter centrado ao ajudar os outros.',
        level_2: 'Boa regulação, com raras sobrecargas emocionais.',
        level_3: 'Dificuldade em não absorver as emoções alheias, com tendência à sobrecarga.',
        level_4: 'Forte sobrecarga empática, com dificuldade em separar as próprias emoções das dos outros.',
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
      name: 'Integração Social e Resposta Empática',
      icon: '🌐',
      description: 'Tendência a transformar o sentimento empático em ações de apoio, cuidado e gentileza para com os outros.',
      interpretationLabels: {
        level_1: 'Baixa iniciativa para oferecer ajuda ou conforto.',
        level_2: 'Ação empática presente, mas pode haver hesitação ou evitação.',
        level_3: 'Boa disposição para agir em apoio aos outros.',
        level_4: 'Comportamento pró-social elevado, com forte inclinação a ajudar.',
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
    description: 'Cada item é pontuado de 0 a 4. Escores altos indicam maior empatia. Questões com (R) devem ser revertidas antes do cálculo da média.',
    ranges: [
      { min: 0, max: 0.9, label: 'Baixo', description: 'Dificuldade em perceber e reagir emocionalmente ao outro; traços de distanciamento ou alexitimia social.' },
      { min: 1, max: 1.9, label: 'Leve', description: 'Empatia presente, porém superficial ou inconsistência na resposta emocional.' },
      { min: 2, max: 2.9, label: 'Moderado', description: 'Boa percepção emocional, mas flutuações na regulação e na expressão empática.' },
      { min: 3, max: 4, label: 'Elevado', description: 'Alta empatia cognitiva e afetiva, com boa integração e resposta pró-social.' }
    ],
  }
};