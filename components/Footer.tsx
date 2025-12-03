
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 mb-6 text-center text-slate-500 text-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-semibold mb-2">AVISO IMPORTANTE:</p>
        <p className="mb-4">
          Os questionários e inventários desta plataforma são ferramentas de apoio para uso em contexto terapêutico e não devem ser utilizados como instrumentos de avaliação psicológica diagnóstica.
        </p>
        <div className="text-xs">
            <Link to="/referencias" className="hover:text-indigo-600 hover:underline transition-colors">
                Referências Bibliográficas
            </Link>
        </div>
      </div>
    </footer>
  );
};
