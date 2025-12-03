
import { InventoryForm } from '../types';

export const IMIE_INVENTORY: InventoryForm = {
  id: 'imie',
  acronym: 'IMIE',
  name: 'Inventário de Motivação Intrínseca e Extrínseca',
  objective: 'Avaliar o perfil motivacional, distinguindo entre motivação autônoma (intrínseca/integrada), motivação controlada (recompensas/pressão) e desmotivação.',
  instructions: 'Indique o quanto cada afirmação descreve o que realmente move você a agir em suas atividades principais (trabalho, estudo, projetos), usando a escala de 1 a 7.',
  // Orientação geral: não se aplica bem pois é misto, mas deixamos higher_is_better como padrão para o score total se houvesse.
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
      id: 'intrinsic_motivation',
      name: 'Motivação Intrínseca (Autônoma)',
      icon: '🧭',
      orientation: 'higher_is_better',
      description: 'Engajamento por interesse, prazer, curiosidade e satisfação inerente à atividade. Nota alta indica alto engajamento positivo.',
      interpretationLabels: {
        level_1: 'Baixa motivação intrínseca.',
        level_2: 'Interesse ocasional.',
        level_3: 'Boa motivação interna.',
        level_4: 'Alta paixão e engajamento espontâneo.',
      },
      questions: [
        { id: 47001, text: 'Sinto prazer em aprender coisas novas, mesmo sem recompensa externa.' },
        { id: 47002, text: 'Persisto em desafios porque gosto do processo, não apenas do resultado.' },
        { id: 47003, text: 'Realizo minhas atividades porque elas me fazem sentir vivo(a) e curioso(a).' },
        { id: 47004, text: 'Faço muitas coisas pelo simples prazer de fazê-las.' },
        { id: 47005, text: 'Quando algo é difícil, continuo porque quero me superar.' },
        { id: 47006, text: 'Tenho entusiasmo natural em explorar novas ideias.' },
      ],
    },
    {
      id: 'extrinsic_identified_integrated',
      name: 'Motivação Identificada/Integrada (Valores)',
      icon: '💼',
      orientation: 'higher_is_better',
      description: 'Motivação baseada na importância pessoal e alinhamento com valores, mesmo que a atividade não seja puramente prazerosa. Nota alta é positiva.',
       interpretationLabels: {
        level_1: 'Desconexão com valores pessoais.',
        level_2: 'Sentido de importância fraco.',
        level_3: 'Bom alinhamento com metas.',
        level_4: 'Forte senso de propósito e valor.',
      },
      questions: [
        { id: 47008, text: 'Cumpro metas porque acredito que elas refletem quem eu quero ser.' },
        { id: 47009, text: 'Esforço-me porque sei que isso me aproxima dos meus objetivos de vida.' },
        { id: 47010, text: 'Valorizo resultados que me permitem sentir orgulho de mim mesmo(a).' },
        { id: 47011, text: 'Me motivo quando percebo sentido pessoal nas minhas tarefas.' },
        { id: 47012, text: 'Tenho clareza sobre o porquê de minhas metas serem importantes.' },
        { id: 47013, text: 'Mantenho disciplina porque acredito que isso é essencial para meu crescimento.' },
      ],
    },
    {
      id: 'extrinsic_controlled',
      name: 'Motivação Controlada (Pressão/Recompensa)',
      icon: '💰',
      orientation: 'higher_is_worse', // Aqui, nota alta é "pior" (menos autonomia)
      description: 'Ação movida por recompensas externas, medo de punição, culpa ou busca de aprovação. Nota alta indica menor autonomia e maior risco de estresse.',
       interpretationLabels: {
        level_1: 'Baixa dependência externa (Autonomia).',
        level_2: 'Influência externa moderada.',
        level_3: 'Motivação condicionada a fatores externos.',
        level_4: 'Forte dependência de aprovação/recompensa.',
      },
      questions: [
        { id: 47015, text: 'Faço certas coisas principalmente para evitar críticas.' },
        { id: 47016, text: 'Trabalho muito melhor quando sei que vou receber elogios ou dinheiro.' },
        { id: 47017, text: 'Evito falhar porque não quero decepcionar os outros.' },
        { id: 47018, text: 'Cumpro tarefas apenas porque são exigidas, sem ver sentido nelas.' },
        { id: 47019, text: 'Me esforço mais quando há reconhecimento público envolvido.' },
        { id: 47020, text: 'Sinto que só tenho valor quando minhas conquistas são vistas pelos outros.' },
      ],
    },
    {
      id: 'amotivation',
      name: 'Desmotivação (Amotivação)',
      icon: '🌫️',
      orientation: 'higher_is_worse', // Nota alta é ruim
      description: 'Falta de intenção de agir, sentimento de incompetência ou falta de valor na atividade. Nota alta indica risco de apatia ou burnout.',
       interpretationLabels: {
        level_1: 'Alto engajamento (Baixa desmotivação).',
        level_2: 'Desânimo ocasional.',
        level_3: 'Desmotivação frequente.',
        level_4: 'Estado de amotivação / apatia.',
      },
      questions: [
        { id: 47022, text: 'Frequentemente não vejo sentido no que estou fazendo.' },
        { id: 47023, text: 'Tenho dificuldade em manter o interesse por qualquer atividade.' },
        { id: 47024, text: 'Sinto que meus esforços raramente valem a pena.' },
        { id: 47025, text: 'Não sei bem o que me motiva atualmente.' },
        { id: 47026, text: 'Tenho a sensação de agir no “piloto automático” sem vontade real.' },
        { id: 47027, text: 'Muitas vezes deixo tarefas inacabadas por falta de energia ou propósito.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) em cada domínio revela a qualidade da motivação. O ideal é alta pontuação em Intrínseca/Identificada e baixa em Controlada/Desmotivação.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Perfil de Desmotivação', 
        description: 'Indica falta de energia e sentido (Amotivação alta). O indivíduo pode estar em burnout ou sem direção clara. Necessita de recuperação e reencontro com valores.',
        recommendations: [
          'Avaliar sinais de esgotamento ou depressão.',
          'Reduzir demandas e focar em pequenas atividades prazerosas.',
          'Reconectar com o "porquê" fundamental das ações.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Motivação Externa Predominante', 
        description: 'Ação guiada por "tenho que" em vez de "quero". Alto risco de estresse, pois a energia depende de fatores externos (aprovação, dinheiro, medo).',
        recommendations: [
          'Tentar encontrar um significado pessoal mesmo em tarefas obrigatórias (Job Crafting).',
          'Trabalhar a autonomia: onde posso fazer escolhas?',
          'Reduzir a dependência de validação externa.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Motivação Mista / Funcional', 
        description: 'Equilíbrio entre dever e prazer. O indivíduo cumpre obrigações, mas também encontra satisfação em várias áreas. Bom funcionamento geral.',
        recommendations: [
          'Aumentar o tempo dedicado a atividades de fluxo (flow).',
          'Reforçar a conexão entre tarefas diárias e valores de longo prazo.',
          'Celebrar o esforço, não apenas o resultado.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Motivação Autônoma', 
        description: 'Perfil de alto engajamento, guiado por interesse genuíno e valores sólidos. Maior criatividade, persistência e bem-estar psicológico.',
        recommendations: [
          'Proteger o espaço de autonomia para evitar que vire obrigação.',
          'Mentorar outros para encontrarem seu próprio caminho.',
          'Utilizar essa energia para inovar e criar.'
        ]
      },
    ],
  },
};
