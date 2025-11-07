import React from 'react';
import { Link } from 'react-router-dom';
import { ResponseOption } from '../types';

const BrainIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.97-3.44 2.5 2.5 0 0 1 2.37-3.95 2.5 2.5 0 0 1 2.56-2.56 2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 1.41-.41" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.97-3.44 2.5 2.5 0 0 0-2.37-3.95 2.5 2.5 0 0 0-2.56-2.56 2.5 2.5 0 0 0-2.5-2.5 2.5 2.5 0 0 0-1.41-.41" />
  </svg>
);

interface HeaderProps {
  responseScale?: ResponseOption[];
}

export const Header: React.FC<HeaderProps> = ({ responseScale }) => {
  if (responseScale && responseScale.length > 0) {
    return (
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-700">
            {responseScale.map((option) => (
              <div key={option.value} className="flex items-center space-x-1.5 sm:space-x-2">
                <span className="font-bold text-indigo-600 bg-indigo-100 rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center">{option.value}</span>
                <span className="text-slate-600">{option.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/" className="flex items-center space-x-4" aria-label="Voltar para a página inicial">
          <BrainIcon className="h-8 w-8 text-indigo-600" />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
              SCIFP - Sistema Clínico de Inventários
            </h1>
            <p className="text-sm text-slate-500 hidden sm:block">Plataforma de Formulários Psicoterápicos</p>
          </div>
        </Link>
      </div>
    </header>
  );
};