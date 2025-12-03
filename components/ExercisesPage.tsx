
import React from 'react';
import { Link } from 'react-router-dom';
import { ALL_EXERCISES } from '../mocks/exercises';

export const ExercisesPage: React.FC = () => {
  // Agrupar exercícios por categoria
  const categories = Array.from(new Set(ALL_EXERCISES.map(ex => ex.category)));

  return (
    <div className="animate-fade-in">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Exercícios Terapêuticos</h2>
        <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
          Ferramentas práticas, técnicas de regulação emocional e atividades de autoconhecimento para complementar o processo terapêutico.
        </p>
      </div>

      {categories.map(category => (
        <div key={category} className="mb-10">
          <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2 flex items-center">
            <span className="w-2 h-8 bg-indigo-500 rounded-full mr-3"></span>
            {category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_EXERCISES.filter(ex => ex.category === category).map(exercise => (
              <Link 
                to={`/exercicio/${exercise.id}`} 
                key={exercise.id}
                className="group block bg-white rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full"
              >
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-4xl bg-slate-50 p-2 rounded-lg">{exercise.icon}</span>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded-full flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        {exercise.duration}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                    {exercise.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {exercise.description}
                  </p>
                </div>
                <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-xs font-medium text-indigo-600 uppercase tracking-wider">Iniciar Prática</span>
                    <svg className="w-4 h-4 text-indigo-600 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
