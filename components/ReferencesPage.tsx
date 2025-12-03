
import React from 'react';
import { Link } from 'react-router-dom';

export const ReferencesPage: React.FC = () => {
  return (
    <div className="animate-fade-in pb-12 max-w-4xl mx-auto">
      <div className="mb-8">
         <Link to="/" className="flex items-center text-indigo-600 font-medium hover:underline mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Voltar para o início
         </Link>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Referências Bibliográficas</h2>
        <p className="text-slate-600 text-lg">
          O conteúdo clínico e os exercícios disponibilizados nesta plataforma são baseados em literatura científica e manuais de prática clínica reconhecidos.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm space-y-8">
        
        <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 text-sm font-bold">1</span>
                Exercícios Terapêuticos (DBT)
            </h3>
            <div className="pl-11 text-slate-600 space-y-4">
                <p className="italic border-l-4 border-indigo-200 pl-4 py-1 bg-slate-50">
                    McKAY, Matthew; WOOD, Jeffrey C.; BRANTLEY, Jeffrey. <strong>Terapia comportamental dialética: Livro de atividades</strong>. Tradução de Nina Lua. Rio de Janeiro: Sextante, 2023.
                </p>
                <p>
                    Este manual é a fonte primária para os exercícios de Regulação Emocional, Tolerância ao Mal-Estar, Mindfulness e Efetividade Interpessoal presentes no aplicativo.
                </p>
            </div>
        </section>

        <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 text-sm font-bold">2</span>
                Inventários e Avaliações
            </h3>
            <div className="pl-11 text-slate-600">
                <p className="mb-3 font-medium text-amber-800 bg-amber-50 p-3 rounded-lg border border-amber-200">
                    ⚠️ Aviso Importante sobre os Inventários
                </p>
                <p>
                    Os inventários disponíveis nesta plataforma <strong>foram criados com o auxílio de Inteligência Artificial</strong>. Eles não são instrumentos psicológicos validados cientificamente e <strong>não devem ser utilizados para fins de avaliação psicológica formal, diagnóstico clínico ou laudos.</strong>
                </p>
                <p className="mt-2">
                    Seu objetivo é puramente educativo e de auto-reflexão, servindo como ferramentas auxiliares para o autoconhecimento e, quando aplicável, para discussão em contexto terapêutico supervisionado.
                </p>
            </div>
        </section>

        <div className="pt-6 border-t border-slate-100">
            <p className="text-xs text-slate-400">
                Nota: Esta ferramenta é destinada ao apoio clínico e autoconhecimento, não substituindo o diagnóstico ou tratamento profissional especializado.
            </p>
        </div>
      </div>
    </div>
  );
};
