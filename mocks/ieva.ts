
import { InventoryForm } from '../types';

export const IEVA_INVENTORY: InventoryForm = {
  id: 'ieva',
  acronym: 'IEVA',
  name: 'Inventário de Esquemas e Vulnerabilidades Afetivas',
  objective: 'Avaliar esquemas afetivos e cognitivos centrais — padrões emocionais e de crença formados precocemente que influenciam a percepção de si mesmo e dos outros. O IEVA identifica os principais modos de funcionamento emocional e cognitivo que sustentam o sofrimento psicológico, oferecendo uma visão global das vulnerabilidades afetivas do paciente.',
  instructions: 'Abaixo estão frases sobre como você costuma se sentir, pensar e agir em relação a si mesmo e aos outros.\nLeia cada frase com atenção e escolha o número que melhor descreve o quanto ela se aplica a você na maior parte do tempo, não apenas em situações específicas.',
  responseScale: [
    { value: 0, label: 'Nunca é verdade para mim' },
    { value: 1, label: 'Raramente é verdade para mim' },
    { value: 2, label: 'Às vezes é verdade para mim' },
    { value: 3, label: 'Frequentemente é verdade para mim' },
    { value: 4, label: 'Quase sempre é verdade para mim' },
  ],
  domains: [
    {
      id: 'abandonment_instability',
      name: 'Abandono e Instabilidade Afetiva',
      icon: '💔',
      description: 'Medo persistente de que pessoas importantes irão abandonar, deixar de amar ou se afastar, gerando insegurança nos vínculos.',
      interpretationLabels: {
        level_1: 'Baixa ativação do esquema de abandono.',
        level_2: 'Leve insegurança ou medo de perda em relacionamentos.',
        level_3: 'Esquema de abandono moderadamente ativo, com ansiedade de separação.',
        level_4: 'Forte medo de abandono, com impacto significativo nos vínculos.',
      },
      questions: [
        { id: 8001, text: 'Tenho medo de que as pessoas de quem gosto me deixem.' },
        { id: 8002, text: 'Quando alguém se afasta, sinto como se fosse minha culpa.' },
        { id: 8003, text: 'Tenho dificuldade em confiar que o outro vai continuar presente.' },
        { id: 8004, text: 'Às vezes me sinto emocionalmente sozinho(a), mesmo quando estou acompanhado(a).' },
        { id: 8005, text: 'Preciso de constantes sinais de que sou querido(a).' },
        { id: 8006, text: 'Fico ansioso(a) quando percebo mudanças no comportamento de alguém próximo.' },
        { id: 8007, text: 'Costumo me aproximar demais com medo de ser esquecido(a).' },
        { id: 8008, text: 'Sinto que as pessoas se afastam de mim quando mais preciso delas.' },
      ],
    },
    {
      id: 'distrust_vulnerability',
      name: 'Desconfiança e Vulnerabilidade',
      icon: '🧩',
      description: 'Crença de que os outros irão magoar, criticar ou trair, levando a uma postura defensiva e de hipervigilância nas relações.',
      interpretationLabels: {
        level_1: 'Baixa ativação do esquema de desconfiança.',
        level_2: 'Leve tendência à desconfiança ou cautela excessiva.',
        level_3: 'Esquema de desconfiança moderadamente ativo, com postura defensiva.',
        level_4: 'Forte desconfiança e expectativa de ser magoado(a).',
      },
      questions: [
        { id: 8101, text: 'Tenho dificuldade em acreditar que as pessoas sejam sinceras comigo.' },
        { id: 8102, text: 'Sempre espero que alguém me magoe ou me critique.' },
        { id: 8103, text: 'Quando algo dá errado, costumo pensar que foi de propósito.' },
        { id: 8104, text: 'Tenho medo de ser enganado(a) ou traído(a).' },
        { id: 8105, text: 'Levo tempo para confiar realmente em alguém.' },
        { id: 8106, text: 'Evito me abrir para não ser ferido(a).' },
        { id: 8107, text: 'Fico em alerta tentando perceber as intenções dos outros.' },
        { id: 8108, text: 'Acho difícil acreditar que as pessoas possam gostar de mim sem segundas intenções.' },
      ],
    },
    {
      id: 'demandingness_internal_criticism',
      name: 'Exigência e Crítica Interna',
      icon: '🪞',
      description: 'Padrão de autoexigência elevada e perfeccionismo, com uma voz interna crítica que raramente se sente satisfeita.',
      interpretationLabels: {
        level_1: 'Baixo nível de autoexigência e perfeccionismo.',
        level_2: 'Padrões de exigência leves e flexíveis.',
        level_3: 'Autoexigência moderada com impacto no bem-estar.',
        level_4: 'Perfeccionismo rígido e disfuncional.',
      },
      questions: [
        { id: 8201, text: 'Tenho dificuldade em aceitar meus erros.' },
        { id: 8202, text: 'Sinto que preciso ser competente o tempo todo.' },
        { id: 8203, text: 'Costumo me cobrar mais do que os outros me cobram.' },
        { id: 8204, text: 'Tenho medo de decepcionar quem confia em mim.' },
        { id: 8205, text: 'Raramente me sinto satisfeito(a) com o que faço.' },
        { id: 8206, text: 'Quando falho, me culpo por muito tempo.' },
        { id: 8207, text: 'Tenho dificuldade em relaxar e simplesmente “ser eu mesmo(a)”.' },
        { id: 8208, text: 'Às vezes sou tão exigente comigo que fico paralisado(a).' },
      ],
    },
    {
      id: 'self_sacrifice_excessive_care',
      name: 'Autossacrifício e Cuidado Excessivo',
      icon: '🧠',
      description: 'Tendência a priorizar excessivamente as necessidades dos outros em detrimento das próprias, muitas vezes por culpa ou medo de ser egoísta.',
      interpretationLabels: {
        level_1: 'Baixa ativação do esquema de autossacrifício.',
        level_2: 'Leve tendência a priorizar os outros, com algum equilíbrio.',
        level_3: 'Padrão moderado de autossacrifício, com negligência das próprias necessidades.',
        level_4: 'Forte padrão de autossacrifício, com esgotamento e ressentimento.',
      },
      questions: [
        { id: 8301, text: 'Tenho dificuldade em dizer “não” quando alguém precisa de ajuda.' },
        { id: 8302, text: 'Costumo priorizar os outros e esquecer de mim.' },
        { id: 8303, text: 'Sinto culpa quando penso em cuidar de mim.' },
        { id: 8304, text: 'Tenho medo de parecer egoísta se fizer algo para mim mesmo(a).' },
        { id: 8305, text: 'Às vezes me esgoto tentando agradar ou resolver os problemas dos outros.' },
        { id: 8306, text: 'Sinto que é minha responsabilidade manter todos bem.' },
        { id: 8307, text: 'Tenho dificuldade em receber ajuda.' },
        { id: 8308, text: 'Costumo pensar que meu valor depende do quanto sou útil.' },
      ],
    },
    {
      id: 'defectiveness_shame',
      name: 'Defectividade e Vergonha',
      icon: '🌫️',
      description: 'Sentimento profundo de ser falho, inadequado ou inferior, acompanhado de vergonha e medo da exposição.',
      interpretationLabels: {
        level_1: 'Baixa ativação do esquema de defectividade.',
        level_2: 'Sentimentos leves ou situacionais de inadequação.',
        level_3: 'Esquema de defectividade moderadamente ativo.',
        level_4: 'Forte sentimento de ser falho, com vergonha e evitação.',
      },
      questions: [
        { id: 8401, text: 'Às vezes acho que há algo errado comigo.' },
        { id: 8402, text: 'Tenho medo de que as pessoas descubram quem eu “realmente sou”.' },
        { id: 8403, text: 'Quando erro, sinto vergonha de mim mesmo(a).' },
        { id: 8404, text: 'Tenho dificuldade em aceitar elogios.' },
        { id: 8405, text: 'Sinto que preciso esconder meus defeitos para ser aceito(a).' },
        { id: 8406, text: 'Acho que os outros são melhores ou mais confiantes do que eu.' },
        { id: 8407, text: 'Tenho vergonha de mostrar minhas emoções.' },
        { id: 8408, text: 'Costumo me sentir inferior em relação aos outros.' },
      ],
    },
    {
      id: 'dependence_perceived_incompetence',
      name: 'Dependência e Incompetência Percebida',
      icon: '🌍',
      description: 'Crença de ser incapaz de lidar com as responsabilidades da vida sozinho, buscando constantemente apoio e validação externa.',
      interpretationLabels: {
        level_1: 'Baixa ativação do esquema de dependência.',
        level_2: 'Leve insegurança para tomar decisões de forma autônoma.',
        level_3: 'Padrão moderado de dependência, com busca por apoio constante.',
        level_4: 'Forte sentimento de incapacidade e dependência dos outros.',
      },
      questions: [
        { id: 8501, text: 'Tenho medo de tomar decisões sem ajuda.' },
        { id: 8502, text: 'Prefiro que alguém me diga o que fazer para não errar.' },
        { id: 8503, text: 'Sinto que não consigo lidar sozinho(a) com problemas.' },
        { id: 8504, text: 'Fico inseguro(a) quando tenho que resolver algo por conta própria.' },
        { id: 8505, text: 'Preciso da validação dos outros antes de agir.' },
        { id: 8506, text: 'Evito desafios por medo de falhar.' },
        { id: 8507, text: 'Às vezes me sinto “pequeno(a)” diante da vida.' },
        { id: 8508, text: 'Quando estou sem apoio, sinto que tudo pode desmoronar.' },
      ],
    },
    {
      id: 'subjugation_external_control',
      name: 'Subjugação e Controle Externo',
      icon: '🔍',
      description: 'Tendência a se submeter à vontade dos outros para evitar conflitos, punição ou abandono, suprimindo as próprias emoções e necessidades.',
      interpretationLabels: {
        level_1: 'Baixa ativação do esquema de subjugação.',
        level_2: 'Leve tendência a ceder para evitar conflitos.',
        level_3: 'Padrão moderado de subjugação, com supressão de necessidades.',
        level_4: 'Forte padrão de submissão e dificuldade de autoafirmação.',
      },
      questions: [
        { id: 8601, text: 'Evito expressar o que penso para não desagradar.' },
        { id: 8602, text: 'Às vezes faço o que não quero só para evitar discussões.' },
        { id: 8603, text: 'Tenho medo de ser punido(a) se discordar de alguém.' },
        { id: 8604, text: 'Costumo ceder mesmo quando sei que estou certo(a).' },
        { id: 8605, text: 'Sinto que preciso obedecer para manter a paz.' },
        { id: 8606, text: 'Quando tento me afirmar, me sinto culpado(a).' },
        { id: 8607, text: 'Às vezes vivo de acordo com o que os outros esperam, não com o que eu quero.' },
        { id: 8608, text: 'Tenho medo de perder o afeto das pessoas se mostrar o que sinto.' },
      ],
    },
    {
      id: 'emotional_avoidance_disconnection',
      name: 'Evitamento Emocional e Desconexão',
      icon: '⚙️',
      description: 'Esforço para suprimir ou evitar o contato com emoções e pensamentos dolorosos, resultando em distanciamento de si mesmo e dos outros.',
      interpretationLabels: {
        level_1: 'Baixo nível de evitação emocional.',
        level_2: 'Evitação leve de emoções ou situações desconfortáveis.',
        level_3: 'Padrão moderado de desconexão e evitação emocional.',
        level_4: 'Forte evitação de intimidade e contato com emoções.',
      },
      questions: [
        { id: 8701, text: 'Evito sentir coisas intensas, sejam boas ou ruins.' },
        { id: 8702, text: 'Prefiro manter distância emocional para não me magoar.' },
        { id: 8703, text: 'Quando fico triste ou ansioso(a), tento me distrair ao máximo.' },
        { id: 8704, text: 'Às vezes me sinto desligado(a) de mim mesmo(a).' },
        { id: 8705, text: 'Tenho dificuldade em identificar o que estou sentindo.' },
        { id: 8706, text: 'Evito pensar sobre o passado porque isso me incomoda.' },
        { id: 8707, text: 'Não gosto de falar sobre emoções.' },
        { id: 8708, text: 'Às vezes pareço frio(a) mesmo quando estou sofrendo.' },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'Os escores podem ser analisados por domínio e de forma global.',
    ranges: [
      { 
        min: 0, 
        max: 64, 
        label: 'Baixa Ativação de Esquemas', 
        description: 'Funcionamento emocional estável e adaptativo. Esquemas disfuncionais estão inativos ou são leves.',
        recommendations: [
          'Manter hábitos de autocuidado emocional.',
          'Fortalecer a resiliência através de novos desafios.',
          'Continuar investindo em relacionamentos saudáveis.'
        ]
      },
      { 
        min: 65, 
        max: 128, 
        label: 'Vulnerabilidades Moderadas', 
        description: 'Vulnerabilidades emocionais presentes; tendência a ativar padrões disfuncionais (ex: evitação, submissão) principalmente sob estresse.',
        recommendations: [
          'Terapia do Esquema para identificar gatilhos específicos.',
          'Trabalhar a "Criança Vulnerável" interior (validar necessidades não atendidas).',
          'Desenvolver o modo "Adulto Saudável" para acolher as próprias emoções.'
        ]
      },
      { 
        min: 129, 
        max: 192, 
        label: 'Ativação Significativa de Esquemas', 
        description: 'Presença de padrões emocionais centrais rígidos que causam sofrimento recorrente. Provável impacto na autoestima e relacionamentos.',
        recommendations: [
          'Intervenção terapêutica aprofundada (focada em trauma ou esquemas).',
          'Técnicas vivenciais (imagética, cadeira vazia) para reprocessar memórias emocionais.',
          'Monitorar modos de enfrentamento desadaptativos (ex: ataque, fuga, congelamento).'
        ]
      },
      { 
        min: 193, 
        max: 256, 
        label: 'Alta Disfunção Afetiva', 
        description: 'Esquemas dominantes e generalizados. Forte impacto na autopercepção e nos vínculos, com risco de crises emocionais frequentes.',
        recommendations: [
          'Prioridade para estabilização emocional e segurança.',
          'Terapia intensiva e contínua.',
          'Construção de uma base segura na relação terapêutica (reparentalização limitada).',
          'Avaliação de comorbidades (ansiedade, depressão) que podem estar exacerbando os esquemas.'
        ]
      },
    ],
  }
};
