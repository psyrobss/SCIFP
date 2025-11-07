import React from 'react';
import { Inventory } from '../types';

interface InventoryCardProps {
  inventory: Inventory;
  onSelect: (acronym: string) => void;
}

export const InventoryCard: React.FC<InventoryCardProps> = ({ inventory, onSelect }) => {
  const isAvailable = inventory.icon === '✅';

  const handleCardClick = () => {
    if (isAvailable) {
      onSelect(inventory.acronym);
    } else {
      alert(`O formulário para "${inventory.name}" estará disponível em breve.`);
    }
  };
  
  const cardClasses = isAvailable 
    ? "cursor-pointer group hover:border-indigo-500 hover:shadow-lg" 
    : "cursor-not-allowed bg-slate-50 opacity-70";

  return (
    <div
      className={`flex flex-col justify-between p-5 bg-white rounded-xl border border-slate-200 transition-all duration-300 h-full ${cardClasses}`}
      onClick={handleCardClick}
      onKeyDown={(e) => {
        if (isAvailable && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          handleCardClick();
        }
      }}
      role={isAvailable ? "button" : "presentation"}
      tabIndex={isAvailable ? 0 : -1}
      aria-label={isAvailable ? `Abrir formulário para ${inventory.name}` : `${inventory.name} (em breve)`}
      aria-disabled={!isAvailable}
    >
      <div>
        <div className="flex items-start justify-between">
          <div className="flex-1 pr-4">
            <p className={`text-xl font-bold text-slate-800 ${isAvailable && 'group-hover:text-indigo-600'} transition-colors`}>
              {inventory.acronym}
            </p>
            <p className="text-sm text-slate-500 mt-1">{inventory.name}</p>
          </div>
          <div className="text-4xl" aria-hidden="true">
            {inventory.icon}
          </div>
        </div>
      </div>
      <div className="mt-4">
        {isAvailable ? (
          <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-green-600 bg-green-200">
            Disponível
          </span>
        ) : (
          <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-amber-600 bg-amber-200">
            Em Breve
          </span>
        )}
      </div>
    </div>
  );
};