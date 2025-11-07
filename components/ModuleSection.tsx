import React from 'react';
import { Module } from '../types';
import { InventoryCard } from './InventoryCard';

interface ModuleSectionProps {
  module: Module;
  onSelectInventory: (acronym: string) => void;
}

export const ModuleSection: React.FC<ModuleSectionProps> = ({ module, onSelectInventory }) => {
  return (
    <section aria-labelledby={`module-title-${module.id}`}>
      <div className="mb-6">
        <h2 id={`module-title-${module.id}`} className="text-2xl md:text-3xl font-bold text-slate-900">{module.title}</h2>
        <p className="text-slate-600 mt-2 text-base">{module.description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {module.inventories.map((inventory) => (
          <InventoryCard key={inventory.id} inventory={inventory} onSelect={onSelectInventory} />
        ))}
      </div>
    </section>
  );
};
