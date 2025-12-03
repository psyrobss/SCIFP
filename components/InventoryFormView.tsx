
import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { InventoryForm, InterpretationRange, Question as BaseQuestion, Domain, ResponseOption } from '../types';

/* Ícones simples em componentes para manter o JSX limpo */
const BackArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 12H5"></path>
    <path d="M12 19l-7-7 7-7"></path>
  </svg>
);

/* Tipo estendido usado localmente (mantém metadados do domínio) */
type ShuffledQuestion = BaseQuestion & {
  domainId: string;
  domainName: string;
  domainIcon: string;
};

/* Tipos para os resultados calculados */
interface DomainResult {
  id: string;
  score: number;
  averageScore: number;
  name: string;
  icon: string;
  description: string;
  interpretationLabels?: Domain['interpretationLabels'];
  interpretationSumRanges?: InterpretationRange[];
}

interface CalculatedResult {
  totalScore: number;
  domainScores: { [domainId: string]: DomainResult };
  interpretation: InterpretationRange | null;
}

/* Função utilitária de embaralhar (Fisher-Yates) */
const shuffleArray = (array: ShuffledQuestion[]): ShuffledQuestion[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

/* 
  Função para gerar interpretação dinâmica baseada na escala do teste e na orientação (Bom vs Ruim).
*/
const getDomainInterpretation = (
  averageScore: number,
  scaleMin: number,
  scaleMax: number,
  orientation: 'higher_is_better' | 'higher_is_worse',
  labels?: Domain['interpretationLabels']
): { text: string, intent: 'good' | 'neutral' | 'bad' | 'warning' } => {
  
  // Padrão para testes de Sintomas (Quanto maior, pior)
  const defaultDeficitLabels = {
    level_1: 'Baixa intensidade / Preservado',
    level_2: 'Intensidade leve / Atenção',
    level_3: 'Intensidade moderada',
    level_4: 'Intensidade alta / Crítico',
  };

  // Padrão para testes de Habilidades/Forças (Quanto maior, melhor)
  const defaultStrengthLabels = {
    level_1: 'Baixo recurso / Dificuldade',
    level_2: 'Recurso em desenvolvimento',
    level_3: 'Bom funcionamento / Habilidade',
    level_4: 'Excelente / Alto recurso',
  };
  
  const effectiveLabels = labels || (orientation === 'higher_is_better' ? defaultStrengthLabels : defaultDeficitLabels);
  
  const range = scaleMax - scaleMin;
  const step = range / 4;

  const limit1 = scaleMin + step;
  const limit2 = scaleMin + (step * 2);
  const limit3 = scaleMin + (step * 3);

  // Lógica de determinação do nível (1 a 4)
  let level = 4;
  let text = effectiveLabels.level_4;

  if (averageScore <= limit1 + 0.05) {
    level = 1;
    text = effectiveLabels.level_1;
  } else if (averageScore <= limit2 + 0.05) {
    level = 2;
    text = effectiveLabels.level_2;
  } else if (averageScore <= limit3 + 0.05) {
    level = 3;
    text = effectiveLabels.level_3;
  }

  // Determina a "intencionalidade" (cor) baseada na orientação
  let intent: 'good' | 'neutral' | 'bad' | 'warning' = 'neutral';

  if (orientation === 'higher_is_better') {
    // Nota alta é bom
    if (level === 1) intent = 'bad';       // Baixa habilidade
    if (level === 2) intent = 'warning';   // Médio-baixo
    if (level === 3) intent = 'neutral';   // Bom
    if (level === 4) intent = 'good';      // Excelente
  } else {
    // Nota alta é ruim (Sintoma)
    if (level === 1) intent = 'good';      // Sem sintoma
    if (level === 2) intent = 'neutral';   // Leve
    if (level === 3) intent = 'warning';   // Moderado
    if (level === 4) intent = 'bad';       // Crítico
  }

  return { text, intent };
};

/* Função para gerar interpretação breve do domínio por soma */
const getDomainInterpretationBySum = (
  sumScore: number,
  ranges?: InterpretationRange[]
): string => {
  if (!ranges || ranges.length === 0) return 'Interpretação não disponível.';
  const interpretation = ranges.find(r => sumScore >= r.min && sumScore <= r.max);
  return interpretation ? interpretation.label : `${sumScore} pontos`;
};


// --- Componente Refatorado para Renderizar uma Pergunta ---
interface QuestionRendererProps {
  question: ShuffledQuestion;
  responseScale: ResponseOption[];
  currentAnswer: number | undefined;
  onAnswerChange: (questionId: number, value: number) => void;
  type: 'desktop' | 'mobile';
}

const QuestionRenderer: React.FC<QuestionRendererProps> = ({ question, responseScale, currentAnswer, onAnswerChange, type }) => {
  if (type === 'desktop') {
    return (
      <tr className="group even:bg-slate-50/50 hover:bg-indigo-50/30 transition-colors">
        <td className="px-3 py-3 whitespace-normal text-sm font-medium text-slate-800 align-middle">
          <div className="flex items-start gap-x-3">
            <span title={question.domainName} className="text-xl mt-0.5 flex-shrink-0 select-none cursor-help" aria-hidden="true">
              {question.domainIcon}
            </span>
            <span className={question.isReversed ? "italic text-slate-700" : ""}>{question.text}</span>
          </div>
        </td>
        {responseScale.map((option) => {
          const isSelected = currentAnswer === option.value;
          return (
            <td 
              key={option.value} 
              className={`px-1 py-2 text-center align-middle transition-colors duration-200 cursor-pointer ${isSelected ? 'bg-indigo-100/60' : ''}`}
              onClick={() => onAnswerChange(question.id, option.value)}
            >
              <div className="flex justify-center">
                <input
                  type="radio"
                  id={`q${question.id}_${option.value}_desktop`}
                  name={`question_${question.id}_desktop`}
                  value={option.value}
                  checked={isSelected}
                  onChange={() => onAnswerChange(question.id, option.value)}
                  className="h-5 w-5 text-indigo-600 border-slate-300 focus:ring-indigo-500 cursor-pointer accent-indigo-600"
                  aria-label={`${option.label} (${option.value}) para a pergunta: ${question.text}`}
                />
              </div>
            </td>
          );
        })}
      </tr>
    );
  }

  // type === 'mobile'
  // CORREÇÃO: Usar lógica direta de 'isSelected' para as classes, em vez de depender de 'peer-checked'
  return (
    <fieldset className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm transition-all focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500">
      <legend className="sr-only">Pergunta sobre {question.domainName}</legend>
      <div className="flex items-start gap-x-3 mb-3">
        <span title={question.domainName} className="text-2xl mt-0.5 flex-shrink-0" aria-hidden="true">
          {question.domainIcon}
        </span>
        <p className={`text-sm font-medium text-slate-800 ${question.isReversed ? "italic" : ""}`}>{question.text}</p>
      </div>

      <div className="flex justify-between items-start gap-x-1 pt-2">
        {responseScale.map((option) => {
          const isSelected = currentAnswer === option.value;
          return (
            <div key={option.value} className="flex flex-col items-center flex-1 min-w-0">
              <input
                type="radio"
                id={`q${question.id}_${option.value}_mobile`}
                name={`question_${question.id}_mobile`}
                value={option.value}
                checked={isSelected}
                onChange={() => onAnswerChange(question.id, option.value)}
                className="sr-only" // Input escondido, mas controlado pelo React
                aria-label={`${option.label} (${option.value})`}
              />
              <label
                htmlFor={`q${question.id}_${option.value}_mobile`}
                className="flex flex-col items-center w-full cursor-pointer group"
              >
                {/* O Círculo com o número - Estilo Condicional */}
                <span className={`
                  flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 
                  transition-all duration-200 ease-in-out text-xs sm:text-sm font-bold
                  ${isSelected 
                    ? 'border-indigo-600 bg-indigo-600 text-white shadow-md scale-110' 
                    : 'border-slate-200 bg-slate-50 text-slate-600 group-hover:border-indigo-300'}
                `}>
                  {option.value}
                </span>
                
                {/* A Legenda pequena abaixo - Estilo Condicional */}
                <span className={`
                  text-[9px] sm:text-[10px] text-center mt-1 leading-tight line-clamp-2
                  ${isSelected ? 'text-indigo-700 font-semibold' : 'text-slate-500'}
                `}>
                  {option.label}
                </span>
              </label>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
};


interface InventoryFormViewProps {
  inventory: InventoryForm;
  onBack: () => void;
  showBackButton: boolean;
}

export const InventoryFormView: React.FC<InventoryFormViewProps> = ({ inventory, onBack, showBackButton }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [shuffledQuestions, setShuffledQuestions] = useState<ShuffledQuestion[]>([]);
  const resultRef = useRef<HTMLDivElement | null>(null);
  const [result, setResult] = useState<CalculatedResult | null>(null);

  const flattenedQuestions = useMemo<ShuffledQuestion[]>(
    () =>
      inventory?.domains?.flatMap((domain) =>
        domain.questions.map((q) => ({
          ...q,
          domainId: domain.id,
          domainName: domain.name,
          domainIcon: domain.icon,
        }))
      ) ?? [],
    [inventory]
  );

  useEffect(() => {
    setShuffledQuestions(shuffleArray(flattenedQuestions));
    setAnswers({});
    setResult(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inventory]);
  
  const progressData = useMemo(() => {
    const answeredCount = Object.keys(answers).length;
    const totalQuestions = flattenedQuestions.length;
    const percentage = totalQuestions > 0 ? (answeredCount / totalQuestions) * 100 : 0;
    return {
      answeredCount,
      totalQuestions,
      percentage,
    };
  }, [answers, flattenedQuestions]);

  const scaleValues = useMemo(() => inventory?.responseScale?.map((o) => o.value) ?? [], [inventory]);
  const scaleMin = useMemo(() => (scaleValues.length ? Math.min(...scaleValues) : 0), [scaleValues]);
  const scaleMax = useMemo(() => (scaleValues.length ? Math.max(...scaleValues) : 0), [scaleValues]);

  const allAnswered = useMemo(
    () => flattenedQuestions.length > 0 && flattenedQuestions.every((q) => answers[q.id] !== undefined),
    [flattenedQuestions, answers]
  );

  const handleAnswerChange = useCallback((questionId: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }, []);

  const handleCalculateScore = useCallback(() => {
    if (!inventory?.scoring || !allAnswered) return;

    let totalSum = 0;
    for (const q of flattenedQuestions) {
      const answerValue = answers[q.id];
      if (typeof answerValue === 'number') {
        const adjusted = q.isReversed ? (scaleMax + scaleMin - answerValue) : answerValue;
        totalSum += adjusted;
      }
    }

    let finalTotalScore = totalSum;
    if (inventory.scoring.type === 'average') {
      finalTotalScore = flattenedQuestions.length > 0 ? totalSum / flattenedQuestions.length : 0;
    }

    const calculatedDomainScores: { [domainId: string]: DomainResult } = {};
    for (const domain of inventory.domains) {
      let domainSum = 0;
      for (const q of domain.questions) {
        const answerValue = answers[q.id];
        if (typeof answerValue === 'number') {
          const adjusted = q.isReversed ? (scaleMax + scaleMin - answerValue) : answerValue;
          domainSum += adjusted;
        }
      }
      
      const averageScore = domain.questions.length > 0 ? domainSum / domain.questions.length : 0;
      calculatedDomainScores[domain.id] = {
        id: domain.id,
        score: domainSum,
        averageScore: averageScore,
        name: domain.name,
        icon: domain.icon,
        description: domain.description,
        interpretationLabels: domain.interpretationLabels,
        interpretationSumRanges: domain.interpretationSumRanges,
      };
    }

    const interpretation = inventory.scoring.ranges?.find((r) => finalTotalScore >= r.min && finalTotalScore <= r.max) ?? null;

    setResult({
      totalScore: finalTotalScore,
      interpretation,
      domainScores: calculatedDomainScores,
    });

    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }, [inventory, allAnswered, flattenedQuestions, answers, scaleMax, scaleMin]);

  const handleReset = useCallback(() => {
    if(window.confirm('Tem certeza que deseja limpar todas as respostas?')) {
        setAnswers({});
        setResult(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  // Define color styles based on intent
  const getIntentColor = (intent: 'good' | 'neutral' | 'bad' | 'warning') => {
    switch (intent) {
        case 'good': return 'text-green-700 bg-green-50 border-green-200';
        case 'warning': return 'text-amber-700 bg-amber-50 border-amber-200';
        case 'bad': return 'text-red-700 bg-red-50 border-red-200';
        case 'neutral': return 'text-slate-700 bg-slate-50 border-slate-200';
        default: return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  const scoreOrientation = inventory.scoreOrientation || 'higher_is_worse';

  return (
    <div className="bg-white p-1 sm:p-2 rounded-2xl shadow-lg border border-slate-200 animate-fade-in">
      <div className="flex items-center mb-2">
        {showBackButton && (
          <button onClick={onBack} className="p-2 rounded-full hover:bg-slate-100 transition-colors mr-1 text-slate-600" aria-label="Voltar para a lista">
            <BackArrowIcon />
          </button>
        )}
        <div className={!showBackButton ? 'pl-2' : ''}>
          <h2 className="text-lg sm:text-2xl font-bold text-slate-900 leading-tight">{inventory.name}</h2>
          <p className="text-sm font-semibold text-indigo-600">{inventory.acronym}</p>
        </div>
      </div>

      <div className="prose prose-slate prose-sm max-w-none mb-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <h3 className="text-slate-800 font-semibold mb-1">Objetivo</h3>
        <p className="mb-3">{inventory.objective}</p>
        <h3 className="text-slate-800 font-semibold mb-1">Instruções</h3>
        <p style={{ whiteSpace: 'pre-line' }}>{inventory.instructions}</p>
        {scaleMin !== 0 && (
            <p className="mt-2 text-xs text-slate-500 italic">
                * Nota: A escala deste teste varia de {scaleMin} a {scaleMax}.
            </p>
        )}
      </div>
      
      <div className="sticky top-[60px] z-20 bg-white/95 backdrop-blur-sm py-2 border-b border-slate-100 mb-4 px-1" aria-live="polite">
        <div className="flex justify-between items-center mb-1 text-xs sm:text-sm font-medium">
          <span className="text-slate-600">Seu Progresso</span>
          <span className={progressData.percentage === 100 ? "text-green-600 font-bold" : "text-indigo-600"}>
            {Math.round(progressData.percentage)}%
          </span>
        </div>
        <div 
          className="w-full bg-slate-100 rounded-full h-2"
          role="progressbar"
          aria-valuenow={progressData.answeredCount}
          aria-valuemin={0}
          aria-valuemax={progressData.totalQuestions}
        >
          <div 
            className={`h-2 rounded-full transition-all duration-500 ease-out ${progressData.percentage === 100 ? 'bg-green-500' : 'bg-indigo-600'}`}
            style={{ width: `${progressData.percentage}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* --- Layout de Tabela para Desktop --- */}
        <div className="hidden md:block overflow-hidden rounded-xl border border-slate-200 shadow-sm">
          <table className="min-w-full divide-y divide-slate-200 table-fixed" role="table" aria-label="Questionário">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-1/2">
                  Afirmação
                </th>
                {inventory.responseScale.map((option) => (
                  <th key={option.value} scope="col" className="px-1 py-3 text-center text-xs font-semibold text-slate-500 w-14 lg:w-16">
                    <div className="flex flex-col items-center">
                        <span className="bg-white border border-slate-200 rounded-full w-6 h-6 flex items-center justify-center text-slate-700 mb-1 shadow-sm">
                            {option.value}
                        </span>
                        <span className="font-normal text-[9px] leading-tight px-1">
                            {option.label}
                        </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {shuffledQuestions.map((question) => (
                <QuestionRenderer
                  key={question.id}
                  question={question}
                  responseScale={inventory.responseScale}
                  currentAnswer={answers[question.id]}
                  onAnswerChange={handleAnswerChange}
                  type="desktop"
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* --- Layout de Cartão para Mobile --- */}
        <div className="block md:hidden space-y-4">
          {shuffledQuestions.map((question) => (
             <QuestionRenderer
                key={question.id}
                question={question}
                responseScale={inventory.responseScale}
                currentAnswer={answers[question.id]}
                onAnswerChange={handleAnswerChange}
                type="mobile"
              />
          ))}
        </div>
      </form>

      <div className="mt-8 px-2 pb-8">
        <button
          onClick={handleCalculateScore}
          disabled={!allAnswered}
          className={`w-full py-4 px-6 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 transform 
            ${allAnswered 
                ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-[1.02] hover:shadow-indigo-500/30' 
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          aria-disabled={!allAnswered}
        >
          {allAnswered ? 'Calcular Resultado Completo' : `Responda todas as questões (${progressData.totalQuestions - progressData.answeredCount} restantes)`}
        </button>
      </div>
      
      {result && (
        <div ref={resultRef} className="mt-8 pt-8 border-t-2 border-slate-100 animate-slide-up printable-area">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-green-100 text-green-700 rounded-full mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Análise de Resultados</h3>
            <p className="text-slate-500">{inventory.acronym} - {inventory.name}</p>
          </div>
          
          {result.interpretation && (
             <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-2xl shadow-sm border border-indigo-100 mb-8 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
                <p className="text-xs text-indigo-500 uppercase font-bold tracking-wider mb-2">Resultado Global</p>
                <h4 className="text-3xl font-extrabold text-indigo-700 mb-2">{result.interpretation.label}</h4>
                 <div className="inline-flex items-center gap-x-2 bg-white px-3 py-1 rounded-full border border-indigo-100 shadow-sm mb-4">
                    <span className="text-sm text-slate-500">
                        {inventory.scoring?.type === 'average' ? 'Pontuação Média:' : 'Pontuação Total:'}
                    </span>
                    <span className="font-bold text-indigo-700 text-lg">
                        {result.totalScore.toFixed(inventory.scoring?.type === 'average' ? 2 : 0)}
                    </span>
                </div>
                <p className="text-slate-700 leading-relaxed max-w-2xl mx-auto mb-4">{result.interpretation.description}</p>
                
                {result.interpretation.recommendations && result.interpretation.recommendations.length > 0 && (
                  <div className="mt-6 text-left bg-white p-4 rounded-xl border border-indigo-100 shadow-sm max-w-xl mx-auto">
                    <h5 className="font-bold text-indigo-800 text-sm uppercase tracking-wide mb-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                      </svg>
                      Recomendações e Próximos Passos
                    </h5>
                    <ul className="space-y-2">
                      {result.interpretation.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start text-sm text-slate-700">
                          <span className="text-indigo-500 mr-2 mt-1">•</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
             </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-2 mb-2">
                <h4 className="text-xl font-bold text-slate-800 flex items-center">
                    <span className="bg-slate-800 text-white w-6 h-6 rounded flex items-center justify-center text-sm mr-2">i</span>
                    Detalhamento por Domínio
                </h4>
            </div>
            {(Object.values(result.domainScores) as DomainResult[]).map((domain) => {
              // Calcular a interpretação dinâmica para este domínio
              const interpretationData = domain.interpretationSumRanges && domain.interpretationSumRanges.length > 0
                ? { text: getDomainInterpretationBySum(domain.score, domain.interpretationSumRanges), intent: 'neutral' as const }
                : getDomainInterpretation(domain.averageScore, scaleMin, scaleMax, scoreOrientation, domain.interpretationLabels);

              return (
                <div key={domain.id} className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 hover:border-indigo-300 transition-colors duration-300 flex flex-col h-full">
                  <div className="flex items-start mb-3">
                     <div className="text-3xl mr-3 p-2 bg-slate-50 rounded-lg border border-slate-100" aria-hidden="true">{domain.icon}</div>
                     <div>
                        <h5 className="font-bold text-slate-800 text-lg leading-tight">{domain.name}</h5>
                        <div className="flex items-center mt-1 space-x-2">
                            <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                              {domain.interpretationSumRanges && domain.interpretationSumRanges.length > 0 ? 'Soma' : 'Média'}
                            </span>
                            <span className="text-lg font-bold text-indigo-600">
                              {domain.interpretationSumRanges && domain.interpretationSumRanges.length > 0 ? domain.score : domain.averageScore.toFixed(2)}
                            </span>
                        </div>
                     </div>
                  </div>
                   <div className="mt-auto pt-3 border-t border-slate-100">
                      <p className="text-xs text-slate-500 mb-2 italic">{domain.description}</p>
                      <div className={`p-2 rounded border ${getIntentColor(interpretationData.intent)}`}>
                          <p className="text-sm font-medium">
                              <span className="opacity-70 font-normal mr-1">Interpretação:</span>
                              {interpretationData.text}
                          </p>
                      </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-10 flex justify-center items-center no-print pb-8">
            <button
              onClick={handleReset}
              className="bg-white text-slate-600 font-medium py-2 px-6 rounded-lg border border-slate-300 hover:bg-slate-50 hover:text-slate-800 transition-all duration-300 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74-2.74L3 12"></path></svg>
              Limpar e Começar Novo Teste
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
