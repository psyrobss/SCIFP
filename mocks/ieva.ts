
import { InventoryForm } from '../types';

export const IEVA_INVENTORY: InventoryForm = {
  id: 'ieva',
  acronym: 'IEVA',
  name: 'Inventário de Esquemas e Vulnerabilidades Afetivas',
  objective: 'Mapear padrões emocionais e crenças centrais (esquemas) que podem gerar sensibilidade ou reatividade em relacionamentos e na autoimagem.',
  instructions: 'Abaixo estão frases sobre como você costuma se sentir e pensar. Indique o quanto cada uma descreve sua experiência interna na maior parte do tempo.',
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
      id: 'abandonment_instability',
      name: 'Sensibilidade ao Abandono/Instabilidade',
      icon: '💔',
      description: 'Preocupação com a estabilidade dos vínculos e receio de que pessoas importantes se afastem.',
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
      name: 'Desconfiança e Autoproteção',
      icon: '🧩',
      description: 'Tendência a ficar alerta em relações, esperando críticas ou mágoas, levando a uma postura defensiva.',
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
      name: 'Autoexigência e Crítica Interna',
      icon: '🪞',
      description: 'Padrão de cobrar muito de si mesmo, com dificuldade em relaxar ou aceitar erros.',
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
      name: 'Foco no Outro (Autossacrifício)',
      icon: '🧠',
      description: 'Tendência a priorizar as necessidades alheias em detrimento das próprias, muitas vezes por culpa.',
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
      name: 'Sensibilidade à Crítica e Vergonha',
      icon: '🌫️',
      description: 'Sentimento de inadequação ou medo de que, se os outros conhecerem seu "eu real", possam rejeitá-lo.',
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
      name: 'Insegurança na Autonomia',
      icon: '🌍',
      description: 'Dúvida sobre a própria capacidade de lidar com responsabilidades cotidianas sem apoio.',
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
      name: 'Submissão e Evitação de Conflito',
      icon: '🔍',
      description: 'Tendência a ceder aos desejos dos outros para evitar desaprovação ou brigas.',
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
      name: 'Evitação Emocional',
      icon: '⚙️',
      description: 'Esforço para não entrar em contato com sentimentos difíceis, levando a um certo distanciamento.',
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
    type: 'average',
    description: 'A pontuação média (1-7) indica a intensidade de ativação dos esquemas. Escores mais altos sugerem maior vulnerabilidade nestas áreas.',
    ranges: [
      { 
        min: 1, 
        max: 2.5, 
        label: 'Esquemas Inativos / Resiliência', 
        description: 'Baixa ativação de vulnerabilidades. Indica recursos emocionais adaptativos e estabilidade na autoimagem e nas relações.',
        recommendations: [
          'Manter práticas de autocuidado e limites saudáveis.',
          'Utilizar a estabilidade emocional para apoiar o crescimento pessoal.',
          'Celebrar a autonomia e a segurança nos vínculos.'
        ]
      },
      { 
        min: 2.51, 
        max: 4.0, 
        label: 'Sensibilidade Emocional Leve', 
        description: 'Alguns temas podem gerar desconforto ou reações defensivas leves, especialmente sob estresse, mas não comprometem o funcionamento geral.',
        recommendations: [
          'Monitorar situações de estresse que ativam a autocrítica ou insegurança.',
          'Praticar a autocompaixão quando se sentir vulnerável.',
          'Identificar gatilhos específicos nas relações próximas.'
        ]
      },
      { 
        min: 4.01, 
        max: 5.5, 
        label: 'Ativação Moderada de Esquemas', 
        description: 'Padrões recorrentes de sensibilidade (ex: medo de rejeição, autoexigência) que impactam o bem-estar e geram sofrimento em áreas específicas.',
        recommendations: [
          'Terapia do Esquema para compreender a origem dessas necessidades emocionais.',
          'Trabalhar a validação das próprias necessidades (modo "Criança Vulnerável").',
          'Desenvolver o modo "Adulto Saudável" para acolher e regular essas emoções.'
        ]
      },
      { 
        min: 5.51, 
        max: 7, 
        label: 'Alta Ressonância / Vulnerabilidade', 
        description: 'Forte ativação de padrões emocionais rígidos. A pessoa pode sentir que esses temas "controlam" suas reações, gerando alto sofrimento ou evitação.',
        recommendations: [
          'Intervenção terapêutica focada e consistente.',
          'Técnicas vivenciais para reprocessar memórias emocionais.',
          'Priorizar a estabilização emocional e a construção de segurança interna.',
          'Identificar estratégias de enfrentamento que podem estar perpetuando o problema.'
        ]
      },
    ],
  }
};
