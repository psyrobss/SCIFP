
import { InventoryForm } from '../types';

export const ICCR_INVENTORY: InventoryForm = {
  id: 'iccr',
  acronym: 'ICCR',
  name: 'Inventário de Comportamentos Compulsivos e Repetitivos',
  objective: 'Avaliar a frequência e a intensidade de comportamentos compulsivos, repetitivos ou de difícil controle, incluindo padrões de pensamento obsessivo, ações ritualizadas e impulsos comportamentais. O inventário visa identificar o grau de interferência desses comportamentos na vida cotidiana, nas relações e no bem-estar psicológico.',
  instructions: 'Abaixo estão afirmações sobre pensamentos e comportamentos repetitivos. Leia com atenção e indique o quanto cada uma se aplica a você nas últimas quatro semanas, usando a escala:',
  responseScale: [
    { value: 0, label: 'Nunca ou quase nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre ou sempre' },
  ],
  domains: [
    {
      id: 'intrusive_thoughts',
      name: 'Pensamentos Intrusivos e Repetitivos',
      icon: '🔄',
      description: 'Presença de pensamentos indesejados, obsessivos ou preocupações excessivas que são difíceis de controlar.',
      questions: [
        { id: 17001, text: 'Tenho pensamentos indesejados que voltam repetidamente à minha mente.' },
        { id: 17002, text: 'Tento evitar certos pensamentos, mas eles retornam com força.' },
        { id: 17003, text: 'Me preocupo excessivamente com detalhes ou possibilidades improváveis.' },
        { id: 17004, text: 'Tenho dificuldade em “desligar” minha mente de uma ideia ou preocupação.' },
        { id: 17005, text: 'Me sinto ansioso(a) quando não consigo controlar meus pensamentos.' },
      ],
    },
    {
      id: 'rituals_checking',
      name: 'Rituais, Checagens e Comportamentos de Repetição',
      icon: '🧼',
      description: 'Necessidade de realizar ações repetitivas, como checagens, limpezas ou rituais, para aliviar a ansiedade.',
      questions: [
        { id: 17101, text: 'Sinto necessidade de checar coisas várias vezes (como portas, luzes, mensagens).' },
        { id: 17102, text: 'Repito determinadas ações até sentir que estão “corretas o suficiente”.' },
        { id: 17103, text: 'Tenho manias ou rituais que me fazem sentir alívio temporário.' },
        { id: 17104, text: 'Sinto desconforto se não posso realizar algum comportamento repetitivo.' },
        { id: 17105, text: 'Levo mais tempo que o normal para concluir tarefas por causa de repetições.' },
      ],
    },
    {
      id: 'impulsivity_loss_of_control',
      name: 'Impulsividade e Perda de Controle',
      icon: '⚡',
      description: 'Dificuldade em resistir a impulsos ou interromper comportamentos prejudiciais, mesmo com consciência das consequências.',
      questions: [
        { id: 17201, text: 'Às vezes ajo por impulso e depois me arrependo.' },
        { id: 17202, text: 'Tenho dificuldade em interromper comportamentos mesmo sabendo que me prejudicam.' },
        { id: 17203, text: 'Sinto uma forte necessidade de fazer algo, mesmo sem razão clara.' },
        { id: 17204, text: 'Realizo certas ações repetidamente para aliviar tensão ou ansiedade.' },
        { id: 17205, text: 'Tenho dificuldade para controlar hábitos relacionados a consumo (comida, internet, compras, etc.).' },
      ],
    },
    {
      id: 'awareness_guilt_impact',
      name: 'Consciência, Culpa e Impacto Funcional',
      icon: '🧠',
      description: 'Nível de percepção sobre o caráter exagerado dos comportamentos e o impacto negativo que eles causam na rotina e no bem-estar.',
      questions: [
        { id: 17301, text: 'Tenho consciência de que alguns dos meus comportamentos são exagerados ou sem sentido.' },
        { id: 17302, text: 'Sinto culpa ou vergonha por não conseguir controlar certos hábitos.' },
        { id: 17303, text: 'Esses comportamentos interferem na minha rotina ou produtividade.' },
        { id: 17304, text: 'Já evitei situações sociais por medo de agir de forma repetitiva.' },
        { id: 17305, text: 'Sinto alívio momentâneo, mas depois arrependimento pelos comportamentos impulsivos.' },
      ],
    },
  ],
  scoring: {
    type: 'sum',
    description: 'A pontuação é a soma total das respostas (0-80). Pontuações mais altas indicam maior nível de compulsividade.',
    ranges: [
      { min: 60, max: 80, label: 'Compulsividade elevada', description: 'Indica forte interferência de comportamentos automáticos, possível componente obsessivo-compulsivo.' },
      { min: 40, max: 59, label: 'Compulsividade moderada', description: 'Comportamentos repetitivos ocasionais, com impacto parcial no funcionamento.' },
      { min: 20, max: 39, label: 'Controle satisfatório', description: 'Leve tendência a ruminações ou hábitos automáticos.' },
      { min: 0, max: 19, label: 'Controle adequado', description: 'Bom equilíbrio entre impulso e autorregulação.' }
    ],
  }
};
