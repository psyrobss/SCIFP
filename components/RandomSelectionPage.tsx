import React, { useState } from 'react';
import { Inventory, Module } from '../types';

interface RandomSelectionPageProps {
  modules: Module[];
  onSelectInventory: (acronym: string) => void;
}

export const RandomSelectionPage: React.FC<RandomSelectionPageProps> = ({ modules, onSelectInventory }) => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>('');

  const handleModuleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModuleId(event.target.value);
  };

  const handleRandomSelect = () => {
    if (!selectedModuleId) return;

    let inventoriesToChooseFrom: Inventory[] = [];

    if (selectedModuleId === 'all') {
      inventoriesToChooseFrom = modules.flatMap(m => m.inventories);
    } else {
      const selectedModule = modules.find(m => m.id.toString() === selectedModuleId);
      if (selectedModule) {
        inventoriesToChooseFrom = selectedModule.inventories;
      }
    }

    const availableInventories = inventoriesToChooseFrom.filter(inv => inv.icon === '✅');
    
    if (availableInventories.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableInventories.length);
      const randomInventory = availableInventories[randomIndex];
      onSelectInventory(randomInventory.acronym);
    } else {
      alert('Não há inventários disponíveis para a seleção escolhida.');
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 animate-fade-in max-w-2xl mx-auto">
        <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Inventários terapeuticos</h2>
            <p className="text-slate-600 mt-1">Escolha um módulo e receba uma sugestão de questionário terapeutico.</p>
        </div>

        <div className="space-y-6">
            <div>
                <label htmlFor="module-select" className="block text-sm font-medium text-slate-700 mb-2">
                    1. Selecione um Módulo
                </label>
                <select
                    id="module-select"
                    value={selectedModuleId}
                    onChange={handleModuleChange}
                    className="block w-full p-3 border border-slate-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    <option value="" disabled>-- Escolha uma opção --</option>
                    <option value="all">Todos os módulos</option>
                    {modules.map(module => (
                        <option key={module.id} value={module.id}>
                            {module.title}
                        </option>
                    ))}
                </select>
            </div>
        
            <div>
                 <p className="text-sm font-medium text-slate-700 mb-2">
                    2. Gere sua avaliação
                </p>
                <button
                    onClick={handleRandomSelect}
                    disabled={!selectedModuleId}
                    className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 disabled:bg-slate-300 disabled:cursor-not-allowed disabled:shadow-none flex items-center justify-center gap-x-2"
                >
                    <span className="text-xl" aria-hidden="true">🎲</span>
                    Surpreenda-me!
                </button>
            </div>
        </div>
    </div>
  );
};
