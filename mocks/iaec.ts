

import { InventoryForm } from '../types';

export const IAEC_INVENTORY: InventoryForm = {
  id: 'iaec',
  acronym: 'IAEC',
  name: 'Inventário de Autocrítica e Esquemas Centrais (IAEC)',
  objective: 'Identificar padrões de autocrítica, autoexigência e esquemas centrais negativos que influenciam o modo como o indivíduo se percebe e interpreta suas experiências.',
  instructions: 'As frases abaixo descrevem pensamentos e sentimentos que as pessoas às vezes têm sobre si mesmas. Marque o quanto elas se aplicam a você na maior parte do tempo.',
  responseScale: [
    { value: 0, label: 'Nunca' },
    { value: 1, label: 'Raramente' },
    { value: 2, label: 'Às vezes' },
    { value: 3, label: 'Frequentemente' },
    { value: 4, label: 'Quase sempre' },
  ],
  domains: [
    {
      id: 'self_criticism_judgment',
      name: 'Autocrítica e Autojulgamento',
      icon: '💔',
      description: 'Tendência a se julgar de forma severa, culpar-se por erros e manter uma visão negativa sobre o próprio valor.',
      interpretationLabels: {
        level_1: 'Baixo nível de autocrítica disfuncional.',
        level_2: 'Autocrítica leve ou situacional.',
        level_3: 'Padrão moderado de autocrítica e autojulgamento.',
        level_4: 'Forte autocrítica, com impacto negativo na autoestima.',
      },
      questions: [
        { id: 4401, text: 'Sou muito duro(a) comigo mesmo(a) quando cometo erros.' },
        { id: 4402, text: 'Costumo me culpar por coisas pequenas.' },
        { id: 4403, text: 'Tenho dificuldade em me perdoar.' },
        { id: 4404, text: 'Acho que nunca sou bom(a) o bastante.' },
        { id: 4405, text: 'Tenho pensamentos de autodepreciação (“sou um fracasso”, “não presto”).' },
        { id: 4406, text: 'Comparo-me com os outros e quase sempre me sinto inferior.' },
      ],
    },
    {
      id: 'self_demand_perfectionism',
      name: 'Autoexigência e Perfeccionismo',
      icon: '⚖️',
      description: 'Crença de que é preciso atingir padrões muito elevados de desempenho para ser aceito ou ter valor.',
      interpretationLabels: {
        level_1: 'Baixo nível de autoexigência e perfeccionismo.',
        level_2: 'Padrões de exigência leves e flexíveis.',
        level_3: 'Autoexigência moderada com impacto no bem-estar.',
        level_4: 'Perfeccionismo rígido e disfuncional.',
      },
      questions: [
        { id: 4501, text: 'Sinto que preciso fazer tudo com perfeição.' },
        { id: 4502, text: 'Tenho dificuldade em aceitar resultados medianos.' },
        { id: 4503, text: 'Quando alcanço algo, já penso no próximo desafio.' },
        { id: 4504, text: 'Acho que descansar é sinal de fraqueza.' },
        { id: 4505, text: 'Tenho medo de decepcionar as pessoas se não for impecável.' },
        { id: 4506, text: 'Sinto que relaxar me torna vulnerável ou improdutivo.' },
      ],
    },
    {
      id: 'inadequacy_defect_schema',
      name: 'Esquema de Inadequação e Defeito',
      icon: '🧱',
      description: 'Sentimento persistente de que há algo fundamentalmente errado, falho ou inferior em si mesmo.',
      interpretationLabels: {
        level_1: 'Baixa ativação do esquema de inadequação.',
        level_2: 'Sentimentos leves ou situacionais de inadequação.',
        level_3: 'Esquema de inadequação moderado e ativo.',
        level_4: 'Forte sentimento de ser falho, com vergonha e evitação.',
      },
      questions: [
        { id: 4601, text: 'Sinto que há algo errado comigo que os outros não veem.' },
        { id: 4602, text: 'Tenho a sensação de ser “menos” do que as outras pessoas.' },
        { id: 4603, text: 'Acredito que, se me conhecerem de verdade, irão me rejeitar.' },
        { id: 4604, text: 'Sinto vergonha de partes da minha personalidade.' },
        { id: 4605, text: 'Tenho dificuldade em acreditar que sou digno(a) de amor.' },
        { id: 4606, text: 'Evito me expor emocionalmente por medo de ser criticado(a).' },
      ],
    },
    {
      id: 'unattainable_standard_schema',
      name: 'Esquema de Padrão Inatingível',
      icon: '🌀',
      description: 'Necessidade de manter controle rígido sobre si mesmo e evitar qualquer sinal de fraqueza ou vulnerabilidade.',
      interpretationLabels: {
        level_1: 'Baixa ativação do esquema de padrão inatingível.',
        level_2: 'Padrões elevados, mas com alguma flexibilidade.',
        level_3: 'Esquema moderadamente ativo, com alta autocobrança.',
        level_4: 'Forte necessidade de controle e medo de falhar.',
      },
      questions: [
        { id: 4701, text: 'Acho que preciso estar sempre no controle de mim mesmo(a).' },
        { id: 4702, text: 'Evito demonstrar fraqueza ou vulnerabilidade.' },
        { id: 4703, text: 'Tenho a sensação de que nunca posso falhar.' },
        { id: 4704, text: 'Me cobro tanto que, às vezes, perco o prazer nas coisas.' },
        { id: 4705, text: 'Quando as coisas não saem como o esperado, sinto-me inútil.' },
        { id: 4706, text: 'Tenho medo de decepcionar minha própria imagem de “forte”.' },
      ],
    },
    {
      id: 'submission_devaluation_schema',
      name: 'Esquema de Submissão e Desvalorização Pessoal',
      icon: '🧍',
      description: 'Tendência a colocar as necessidades dos outros acima das próprias, evitando conflitos e desvalorizando as próprias opiniões.',
      interpretationLabels: {
        level_1: 'Baixa ativação do esquema de submissão.',
        level_2: 'Leve tendência a priorizar os outros e evitar conflitos.',
        level_3: 'Padrão moderado de submissão, com desvalorização das próprias necessidades.',
        level_4: 'Forte padrão de submissão e dificuldade de autoafirmação.',
      },
      questions: [
        { id: 4801, text: 'Tenho dificuldade em dizer “não”.' },
        { id: 4802, text: 'Costumo colocar as necessidades dos outros acima das minhas.' },
        { id: 4803, text: 'Evito expressar minhas opiniões para não gerar conflito.' },
        { id: 4804, text: 'Sinto que minha função é agradar os outros.' },
        { id: 4805, text: 'Tenho medo de ser rejeitado(a) se me impor.' },
        { id: 4806, text: 'Sinto que valho menos do que quem está à minha volta.' },
      ],
    },
    {
      id: 'punishment_self_sabotage_schema',
      name: 'Esquema de Punição e Autossabotagem',
      icon: '🌧️',
      description: 'Crença de que merece ser punido por erros e tendência a se envolver em comportamentos que sabotam a própria felicidade.',
      interpretationLabels: {
        level_1: 'Baixa ativação do esquema de punição.',
        level_2: 'Tendência leve à autopunição ou dificuldade em aceitar o sucesso.',
        level_3: 'Esquema de punição moderadamente ativo, com autossabotagem.',
        level_4: 'Forte crença de que merece sofrer, com comportamentos autossabotadores.',
      },
      questions: [
        { id: 4901, text: 'Quando algo dá errado, penso que mereço sofrer.' },
        { id: 4902, text: 'Às vezes me impeço de ser feliz, sem saber por quê.' },
        { id: 4903, text: 'Tenho dificuldade em aceitar elogios ou reconhecer méritos.' },
        { id: 4904, text: 'Sinto que não mereço coisas boas.' },
        { id: 4905, text: 'Tenho comportamentos que sabotam meus próprios objetivos.' },
        { id: 4906, text: 'Às vezes provoco inconscientemente situações que me fazem mal.' },
      ],
    },
  ],
  scoring: {
    type: 'average',
    description: 'Calcule a média de cada domínio e o escore global de autocrítica/esquemas centrais (0 a 4).',
    ranges: [
        { min: 0, max: 0.9, label: 'Baixa autocrítica', description: 'Autoimagem positiva e autocompaixão preservada' },
        { min: 1, max: 1.9, label: 'Autocrítica leve', description: 'Tendência a padrões autoexigentes esporádicos' },
        { min: 2, max: 2.9, label: 'Autocrítica moderada', description: 'Presença de esquemas de exigência e autojulgamento persistentes' },
        { min: 3, max: 4, label: 'Autocrítica intensa', description: 'Padrões rígidos e autodepreciativos — requer reestruturação cognitiva profunda' }
    ],
  }
};