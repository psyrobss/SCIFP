
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 mb-6 text-center text-slate-500 text-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-semibold">AVISO IMPORTANTE:</p>
        <p>
          Os questionários e inventários desta plataforma são ferramentas de apoio para uso em contexto terapêutico e não devem ser utilizados como instrumentos de avaliação psicológica diagnóstica.
        </p>
      </div>
    </footer>
  );
};
