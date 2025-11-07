import React from 'react';
import { Link } from 'react-router-dom';
import { Inventory } from '../types';
import { ALL_INVENTORIES } from '../mocks';

interface InventoryCardProps {
  inventory: Inventory;
}

export const InventoryCard: React.FC<InventoryCardProps> = ({ inventory }) => {
  const isAvailable = !!ALL_INVENTORIES[inventory.acronym.toUpperCase()];

  const cardContent = (
    <>
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
    </>
  );

  const cardClasses = "flex flex-col justify-between p-5 bg-white rounded-xl border border-slate-200 transition-all duration-300 h-full";

  if (isAvailable) {
    return (
      <Link
        to={`/inventario/${inventory.acronym}`}
        className={`${cardClasses} cursor-pointer group hover:border-indigo-500 hover:shadow-lg`}
        aria-label={`Abrir formulário para ${inventory.name}`}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div
      className={`${cardClasses} cursor-not-allowed bg-slate-50 opacity-70`}
      aria-label={`${inventory.name} (em breve)`}
      aria-disabled={true}
      onClick={() => alert(`O formulário para "${inventory.name}" estará disponível em breve.`)}
    >
      {cardContent}
    </div>
  );
};
