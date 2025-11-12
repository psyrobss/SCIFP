import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { InventoryForm, InterpretationRange, Question as BaseQuestion, Domain, ResponseOption } from '../types';

/*
  Versão refatorada do InventoryFormView
  - Extraído a lógica de renderização da pergunta para um componente `QuestionRenderer`.
  - Eliminada a duplicação de código entre a view de desktop (tabela) e mobile (cartões).
  - Mantidas as melhorias de performance, acessibilidade e estado.
*/

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

/* Função para gerar interpretação breve do domínio por média */
const getDomainInterpretation = (
  averageScore: number,
  labels?: Domain['interpretationLabels'],
  acronym?: string
): string => {
  if (acronym === 'IEV') {
    if (averageScore <= 1) return 'Baixa expressão do estilo';
    if (averageScore <= 2.5) return 'Média / tendência moderada';
    return 'Alta expressão / predominância do estilo';
  }

  const defaultDeficitLabels = {
    level_1: 'Nenhuma dificuldade significativa.',
    level_2: 'Presença de dificuldades leves.',
    level_3: 'Dificuldades moderadas e persistentes.',
    level_4: 'Dificuldades intensas com impacto funcional.',
  };
  
  const effectiveLabels = labels || defaultDeficitLabels;

  if (averageScore < 1) return effectiveLabels.level_1;
  if (averageScore < 2) return effectiveLabels.level_2;
  if (averageScore < 3) return effectiveLabels.level_3;
  return effectiveLabels.level_4;
};

/* Função para gerar interpretação breve do domínio por soma */
const getDomainInterpretationBySum = (
  sumScore: number,
  ranges?: InterpretationRange[]
): string => {
  if (!ranges || ranges.length === 0) return 'Interpretação não disponível.';
  const interpretation = ranges.find(r => sumScore >= r.min && sumScore <= r.max);
  return interpretation ? interpretation.label : 'Pontuação fora do intervalo de interpretação.';
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
      <tr className="group even:bg-slate-50/50">
        <td className="px-3 py-2 whitespace-normal text-sm font-medium text-slate-800 align-middle">
          <div className="flex items-start gap-x-3">
            <span title={question.domainName} className="text-xl mt-1 flex-shrink-0" aria-hidden="true">
              {question.domainIcon}
            </span>
            <span>{question.text}</span>
          </div>
        </td>
        {responseScale.map((option) => (
          <td key={option.value} className="px-1 py-2 text-center align-middle">
            <input
              type="radio"
              id={`q${question.id}_${option.value}_desktop`}
              name={`question_${question.id}_desktop`}
              value={option.value}
              checked={currentAnswer === option.value}
              onChange={() => onAnswerChange(question.id, option.value)}
              className="h-5 w-5 text-indigo-600 border-slate-300 focus:ring-0 focus:ring-offset-0 cursor-pointer"
              aria-label={`${option.label} (${option.value}) para a pergunta: ${question.text}`}
            />
          </td>
        ))}
      </tr>
    );
  }

  // type === 'mobile'
  return (
    <fieldset className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
      <legend className="sr-only">Pergunta sobre {question.domainName}</legend>
      <div className="flex items-start gap-x-3">
        <span title={question.domainName} className="text-2xl mt-1 flex-shrink-0" aria-hidden="true">
          {question.domainIcon}
        </span>
        <p className="text-sm font-medium text-slate-800 mb-4">{question.text}</p>
      </div>

      <div className="flex justify-center items-center pt-2 gap-x-3">
        {responseScale.map((option) => (
          <div key={option.value}>
            <input
              type="radio"
              id={`q${question.id}_${option.value}_mobile`}
              name={`question_${question.id}_mobile`}
              value={option.value}
              checked={currentAnswer === option.value}
              onChange={() => onAnswerChange(question.id, option.value)}
              className="sr-only peer"
              aria-label={`${option.label} (${option.value})`}
            />
            <label
              htmlFor={`q${question.id}_${option.value}_mobile`}
              title={`${option.label} (${option.value})`}
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-300 bg-white font-bold text-slate-600 cursor-pointer transition-all duration-200 ease-in-out hover:border-indigo-400 peer-checked:border-indigo-600 peer-checked:bg-indigo-600 peer-checked:text-white"
            >
              {option.value}
            </label>
          </div>
        ))}
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
    setAnswers({});
    setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-white p-1 sm:p-2 rounded-2xl shadow-lg border border-slate-200 animate-fade-in">
      <div className="flex items-center mb-2">
        {showBackButton && (
          <button onClick={onBack} className="p-1 rounded-full hover:bg-slate-100 transition-colors mr-1" aria-label="Voltar para a lista">
            <BackArrowIcon />
          </button>
        )}
        <div className={!showBackButton ? 'pl-2' : ''}>
          <h2 className="text-lg sm:text-2xl font-bold text-slate-900">{inventory.name}</h2>
          <p className="text-sm font-semibold text-indigo-600">{inventory.acronym}</p>
        </div>
      </div>

      <div className="prose prose-slate max-w-none mb-3 p-2 bg-slate-50 rounded-lg border border-slate-200">
        <h3>Objetivo</h3>
        <p>{inventory.objective}</p>
        <h3>Instruções</h3>
        <p style={{ whiteSpace: 'pre-line' }}>{inventory.instructions}</p>
      </div>
      
      <div className="p-2 my-4" aria-live="polite">
        <div className="flex justify-between items-center mb-1 text-sm">
          <span className="font-semibold text-slate-700">Progresso</span>
          <span className="font-medium text-slate-500">
            {progressData.answeredCount} de {progressData.totalQuestions} respondidas
          </span>
        </div>
        <div 
          className="w-full bg-slate-200 rounded-full h-2.5"
          role="progressbar"
          aria-valuenow={progressData.answeredCount}
          aria-valuemin={0}
          aria-valuemax={progressData.totalQuestions}
          aria-label={`${progressData.answeredCount} de ${progressData.totalQuestions} perguntas respondidas`}
        >
          <div 
            className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300 ease-out" 
            style={{ width: `${progressData.percentage}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* --- Layout de Tabela para Desktop --- */}
        <div className="hidden md:block overflow-x-auto rounded-lg border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 table-fixed" role="table" aria-label="Questionário">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="px-3 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider w-1/2">
                  Afirmação
                </th>
                {inventory.responseScale.map((option) => (
                  <th key={option.value} scope="col" className="px-1 py-2 text-center text-xs font-semibold text-slate-600 w-20">
                    <span className="block font-bold text-slate-800 text-sm">{option.value}</span>
                    <span className="block font-normal text-slate-500 mt-1 leading-tight text-xs">{option.label}</span>
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

      <div className="mt-8 px-2">
        <button
          onClick={handleCalculateScore}
          disabled={!allAnswered}
          className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 disabled:bg-slate-300 disabled:cursor-not-allowed disabled:shadow-none"
          aria-disabled={!allAnswered}
        >
          {allAnswered ? 'Calcular Resultado' : 'Responda todas as questões'}
        </button>
      </div>
      
      {result && (
        <div ref={resultRef} className="mt-8 p-4 sm:p-6 bg-slate-50 rounded-lg border border-slate-200 printable-area">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900">Resultado do Inventário</h3>
            <p className="text-slate-600 mt-1">{inventory.acronym} - {inventory.name}</p>
          </div>
          
          {result.interpretation && (
             <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 mb-6 text-center">
                <p className="text-sm text-slate-500 uppercase font-semibold">Resultado Geral</p>
                <p className="text-2xl font-bold text-indigo-600 my-1">{result.interpretation.label}</p>
                 <p className="text-slate-700">
                    {inventory.scoring?.type === 'average' ? 'Pontuação Média: ' : 'Pontuação Total: '}
                    <span className="font-semibold">{result.totalScore.toFixed(inventory.scoring?.type === 'average' ? 2 : 0)}</span>
                </p>
                <p className="text-sm text-slate-500 mt-2">{result.interpretation.description}</p>
             </div>
          )}

          <div className="space-y-4">
            <h4 className="text-xl font-bold text-slate-800 text-center mb-4">Análise por Domínio</h4>
            {(Object.values(result.domainScores) as DomainResult[]).map((domain) => (
              <div key={domain.id} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                <div className="flex items-center mb-2">
                   <span className="text-2xl mr-3" aria-hidden="true">{domain.icon}</span>
                   <div>
                      <h5 className="font-bold text-slate-800">{domain.name}</h5>
                      <p className="text-sm text-slate-500">
                        {domain.interpretationSumRanges && domain.interpretationSumRanges.length > 0 ? 'Escore: ' : 'Média: '}
                        <strong>
                            {domain.interpretationSumRanges && domain.interpretationSumRanges.length > 0 ? domain.score : domain.averageScore.toFixed(2)}
                        </strong>
                      </p>
                   </div>
                </div>
                 <div className="mt-3 pt-3 border-t border-slate-200">
                    <p className="text-sm text-slate-600 mb-1"><strong>Descrição:</strong> {domain.description}</p>
                    <p className="text-sm text-slate-700 font-medium">
                        <strong>Interpretação:</strong> {
                          domain.interpretationSumRanges && domain.interpretationSumRanges.length > 0
                          ? getDomainInterpretationBySum(domain.score, domain.interpretationSumRanges)
                          : getDomainInterpretation(domain.averageScore, domain.interpretationLabels, inventory.acronym)
                        }
                    </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center items-center no-print">
            <button
              onClick={handleReset}
              className="w-full sm:w-auto bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300"
            >
              Responder Novamente
            </button>
          </div>
        </div>
      )}
    </div>
  );
};