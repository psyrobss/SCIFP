

import { InventoryForm } from '../types';

export const IAEC_INVENTORY: InventoryForm = {
  id: 'iaec',
  acronym: 'IAEC',
  name: 'Inventário de Autocrítica e Esquemas Centrais (IAEC)',
  objective: 'Identificar padrões de autocrítica, autoexigência e esquemas centrais que influenciam o modo como o indivíduo se percebe, interpretando esses padrões como tentativas (muitas vezes desadaptativas) de proteção ou melhoria.',
  instructions: 'As frases abaixo descrevem pensamentos e sentimentos que as pessoas às vezes têm sobre si mesmas. Marque o quanto elas se aplicam a você na maior parte do tempo, usando a escala de 1 a 7.',
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
      id: 'self_criticism_judgment',
      name: 'Autojulgamento e Cobrança',
      icon: '💔',
      description: 'Tendência a avaliar a si mesmo com rigor, muitas vezes como forma de evitar erros ou garantir desempenho.',
      interpretationLabels: {
        level_1: 'Autoaceitação predominante.',
        level_2: 'Autocrítica leve ou situacional.',
        level_3: 'Padrão moderado de cobrança.',
        level_4: 'Forte autojulgamento e rigidez.',
      },
      questions: [
        { id: 4401, text: 'Sou muito duro(a) comigo mesmo(a) quando cometo erros.' },
        { id: 4402, text: 'Costumo me culpar por coisas pequenas.' },
        { id: 4403, text: 'Tenho dificuldade em me perdoar.' },
        { id: 4404, text: 'Acho que nunca sou bom(a) o bastante.' },
        { id: 4405, text: 'Tenho pensamentos de que "não tenho conserto" ou "sou falho".' },
        { id: 4406, text: 'Comparo-me com os outros e quase sempre me sinto em desvantagem.' },
      ],
    },
    {
      id: 'self_demand_perfectionism',
      name: 'Padrões Elevados e Perfeccionismo',
      icon: '⚖️',
      description: 'Crença de que é preciso atingir padrões muito altos para ter valor ou ser aceito.',
      interpretationLabels: {
        level_1: 'Expectativas realistas e flexíveis.',
        level_2: 'Padrões elevados, mas manejáveis.',
        level_3: 'Exigência moderada com custo emocional.',
        level_4: 'Perfeccionismo rígido e exaustivo.',
      },
      questions: [
        { id: 4501, text: 'Sinto que preciso fazer tudo com perfeição.' },
        { id: 4502, text: 'Tenho dificuldade em aceitar resultados medianos.' },
        { id: 4503, text: 'Quando alcanço algo, já penso no próximo desafio sem comemorar.' },
        { id: 4504, text: 'Acho que descansar é perda de tempo ou sinal de fraqueza.' },
        { id: 4505, text: 'Tenho medo de decepcionar as pessoas se não for impecável.' },
        { id: 4506, text: 'Sinto que relaxar me torna vulnerável ou improdutivo.' },
      ],
    },
    {
      id: 'inadequacy_defect_schema',
      name: 'Sensibilidade à Inadequação',
      icon: '🧱',
      description: 'Sentimento de não pertencimento ou de ser diferente, gerando receio de exposição.',
      interpretationLabels: {
        level_1: 'Senso de adequação preservado.',
        level_2: 'Dúvidas ocasionais sobre si mesmo.',
        level_3: 'Sentimentos frequentes de inadequação.',
        level_4: 'Sensação intensa de não ser bom o bastante.',
      },
      questions: [
        { id: 4601, text: 'Sinto que há algo errado comigo que os outros não veem.' },
        { id: 4602, text: 'Tenho a sensação de ser “menos” do que as outras pessoas.' },
        { id: 4603, text: 'Acredito que, se me conhecerem de verdade, podem se afastar.' },
        { id: 4604, text: 'Sinto vergonha de certas partes da minha personalidade.' },
        { id: 4605, text: 'Tenho dificuldade em acreditar que sou digno(a) de elogios.' },
        { id: 4606, text: 'Evito me expor emocionalmente por medo de crítica.' },
      ],
    },
    {
      id: 'punishment_self_sabotage_schema',
      name: 'Punição e Autossabotagem',
      icon: '🌧️',
      description: 'Tendência a se privar de coisas boas ou dificultar o próprio sucesso por sentir que não merece.',
      interpretationLabels: {
        level_1: 'Permissão para ser feliz e ter sucesso.',
        level_2: 'Leve dificuldade em aceitar conquistas.',
        level_3: 'Tendência moderada a se boicotar.',
        level_4: 'Padrão forte de autopunição ou sabotagem.',
      },
      questions: [
        { id: 4901, text: 'Quando algo dá errado, penso que mereço sofrer as consequências.' },
        { id: 4902, text: 'Às vezes me impeço de ser feliz, sem saber exatamente por quê.' },
        { id: 4903, text: 'Tenho dificuldade em aceitar elogios ou reconhecer méritos.' },
        { id: 4904, text: 'Sinto que não mereço coisas boas que acontecem comigo.' },
        { id: 4905, text: 'Tenho comportamentos que acabam atrapalhando meus próprios objetivos.' },
        { id: 4906, text: 'Às vezes provoco inconscientemente situações que me fazem mal.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'A pontuação média (1-7) indica a intensidade dos padrões autocríticos. Escores mais altos sugerem que o "crítico interno" está muito ativo, gerando sofrimento e pressão.',
    ranges: [
        { 
          min: 1, 
          max: 2.5, 
          label: 'Autoaceitação e Flexibilidade', 
          description: 'Relação interna amigável. O indivíduo consegue reconhecer erros sem se diminuir como pessoa. Possui uma voz interna de apoio.',
          recommendations: [
            'Manter práticas de autocuidado.',
            'Reforçar o reconhecimento de conquistas pessoais.',
            'Servir como modelo de autoaceitação para outros.'
          ]
        },
        { 
          min: 2.51, 
          max: 4.0, 
          label: 'Autocobrança Situacional', 
          description: 'A autocrítica aparece principalmente em momentos de estresse ou falha. Existe um desejo de melhorar, que às vezes se torna pesado.',
          recommendations: [
            'Monitorar o diálogo interno em momentos de pressão ("Eu falaria assim com um amigo?").',
            'Praticar a flexibilidade cognitiva diante de erros.',
            'Diferenciar responsabilidade (agir) de culpa (punir).'
          ]
        },
        { 
          min: 4.01, 
          max: 5.5, 
          label: 'Padrões Rígidos e Autocrítica Ativa', 
          description: 'A voz crítica é frequente e exigente. O indivíduo pode sentir que "nunca é o bastante" e viver sob tensão para evitar erros. A autoestima pode oscilar.',
          recommendations: [
            'Terapia focada na Autocompaixão (CFT) para desenvolver uma voz interna acolhedora.',
            'Questionar a utilidade real da autocobrança excessiva.',
            'Celebrar pequenas vitórias deliberadamente.'
          ]
        },
        { 
          min: 5.51, 
          max: 7, 
          label: 'Necessidade Urgente de Autoacolhimento', 
          description: 'Padrões intensos de punição e desvalorização. O indivíduo pode estar sofrendo muito com sentimentos de inadequação. A autocrítica está drenando a energia vital.',
          recommendations: [
            'Terapia do Esquema para reestruturação profunda de crenças centrais.',
            'Interromper comportamentos de autossabotagem com ajuda profissional.',
            'Focar na construção de uma identidade baseada em valor intrínseco, não em desempenho.',
            'Desenvolvimento urgente de habilidades de auto-acalmamento.'
          ]
        }
    ],
  }
};
