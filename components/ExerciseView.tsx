
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ALL_EXERCISES } from '../mocks/exercises';

export const ExerciseView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const exercise = ALL_EXERCISES.find(ex => ex.id === id);
  const [activeStep, setActiveStep] = useState(0);
  const [userInputs, setUserInputs] = useState<Record<number, string>>({});

  if (!exercise) {
    return (
        <div className="text-center p-12">
            <h2 className="text-2xl font-bold text-slate-800">Exercício não encontrado</h2>
            <button onClick={() => navigate('/exercicios')} className="mt-4 text-indigo-600 hover:underline">Voltar</button>
        </div>
    );
  }

  const currentStepData = exercise.steps[activeStep];
  const isLastStep = activeStep === exercise.steps.length - 1;

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInputs({
        ...userInputs,
        [currentStepData.id]: e.target.value
    });
  };

  const nextStep = () => {
    if (activeStep < exercise.steps.length - 1) {
        setActiveStep(prev => prev + 1);
        window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
        setActiveStep(prev => prev - 1);
        window.scrollTo(0, 0);
    }
  };

  return (
    <div className="max-w-3xl mx-auto pb-12">
      {/* Header do Exercício */}
      <div className="mb-6 flex items-center justify-between">
        <button 
            onClick={() => navigate('/exercicios')}
            className="flex items-center text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium"
        >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            Voltar
        </button>
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            {exercise.category}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        {/* Barra de Progresso */}
        <div className="h-1.5 w-full bg-slate-100">
            <div 
                className="h-full bg-indigo-500 transition-all duration-500 ease-out"
                style={{ width: `${((activeStep + 1) / exercise.steps.length) * 100}%` }}
            ></div>
        </div>

        <div className="p-6 sm:p-10 min-h-[400px] flex flex-col">
            <div className="mb-6 flex items-center gap-x-3">
                <span className="text-3xl">{exercise.icon}</span>
                <h1 className="text-2xl font-bold text-slate-900">{exercise.title}</h1>
            </div>

            <div className="flex-grow animate-fade-in key={activeStep}">
                <span className="text-xs font-bold text-indigo-500 uppercase tracking-wide mb-2 block">
                    Passo {activeStep + 1} de {exercise.steps.length}
                </span>
                <h2 className="text-xl font-bold text-slate-800 mb-4">
                    {currentStepData.title || 'Instrução'}
                </h2>
                
                <div className="prose prose-slate max-w-none text-slate-600 text-lg leading-relaxed mb-6 whitespace-pre-wrap">
                    {currentStepData.content}
                </div>

                {currentStepData.type === 'writing' && (
                    <div className="mt-4">
                        <textarea
                            className="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-h-[150px] text-slate-700 placeholder-slate-400 transition-shadow"
                            placeholder={currentStepData.placeholder || 'Escreva sua reflexão aqui...'}
                            value={userInputs[currentStepData.id] || ''}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                )}

                {currentStepData.type === 'instruction' && (
                    <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 flex items-start">
                        <svg className="w-6 h-6 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <p className="text-indigo-900 text-sm font-medium">Siga a instrução acima e leve o tempo que precisar. Quando estiver pronto, clique em Próximo.</p>
                    </div>
                )}
            </div>

            {/* Controles de Navegação */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex justify-between items-center">
                <button
                    onClick={prevStep}
                    disabled={activeStep === 0}
                    className={`px-6 py-2 rounded-lg font-medium transition-colors ${activeStep === 0 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                    Anterior
                </button>

                {isLastStep ? (
                    <button
                        onClick={() => navigate('/exercicios')}
                        className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all transform hover:scale-105"
                    >
                        Concluir Exercício
                    </button>
                ) : (
                    <button
                        onClick={nextStep}
                        className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all transform hover:scale-105 flex items-center"
                    >
                        Próximo
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};
