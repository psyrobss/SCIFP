
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ALL_EXERCISES } from '../mocks/exercises';

export const ExercisesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  // Extrair todas as categorias únicas
  const categories = useMemo(() => {
    const cats = Array.from(new Set(ALL_EXERCISES.map(ex => ex.category)));
    return ['Todos', ...cats];
  }, []);

  // Filtrar exercícios apenas por categoria
  const filteredExercises = useMemo(() => {
    return ALL_EXERCISES.filter(ex => {
      return selectedCategory === 'Todos' || ex.category === selectedCategory;
    });
  }, [selectedCategory]);

  return (
    <div className="animate-fade-in pb-12">
      <div className="mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Exercícios Terapêuticos</h2>
        <p className="text-slate-600 text-base max-w-2xl mx-auto">
          Ferramentas práticas para regulação emocional, foco e autoconhecimento.
        </p>
      </div>

      {/* Grid de Exercícios Compacto */}
      {filteredExercises.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto px-2">
            {filteredExercises.map(exercise => (
              <Link 
                to={`/exercicio/${exercise.id}`} 
                key={exercise.id}
                className="group bg-white rounded-xl border border-slate-200 p-5 hover:border-indigo-400 hover:shadow-md transition-all duration-300 flex flex-col h-full relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-3">
                   <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-xl group-hover:bg-indigo-100 transition-colors">
                     {exercise.icon}
                   </div>
                   <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wide bg-indigo-50 px-2 py-1 rounded-md">
                        {exercise.category.split(' ')[0]}
                   </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-700 transition-colors mb-2 leading-tight">
                    {exercise.title}
                </h4>
                
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 mb-4 flex-grow">
                    {exercise.description}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-medium text-slate-400">
                    <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {exercise.duration}
                </div>
              </Link>
            ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl border border-slate-200 border-dashed mx-auto max-w-lg">
            <div className="text-3xl mb-3">📂</div>
            <h3 className="text-base font-medium text-slate-900">Nenhum exercício encontrado</h3>
            <button 
                onClick={() => setSelectedCategory('Todos')}
                className="mt-3 text-sm text-indigo-600 hover:text-indigo-800 font-medium hover:underline"
            >
                Ver todos os exercícios
            </button>
        </div>
      )}

      {/* Filtros de Categoria (Movido para baixo conforme solicitado) */}
      <div className="mt-16 max-w-6xl mx-auto border-t border-slate-200 pt-8">
        <p className="text-center text-xs text-slate-400 uppercase tracking-wider font-bold mb-4">Filtrar por Categoria</p>
        <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => {
                        setSelectedCategory(category);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
                        selectedCategory === category
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                            : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50 hover:border-indigo-300 hover:text-indigo-600'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
      </div>
    </div>
  );
};
