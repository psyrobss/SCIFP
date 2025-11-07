import React, { useState } from 'react';
import { Header } from './components/Header';
import { ModuleSection } from './components/ModuleSection';
import { MODULES } from './constants';
import { Footer } from './components/Footer';
import { InventoryFormView } from './components/InventoryFormView';
import { ALL_INVENTORIES } from './mocks';
import { InventoryForm } from './types';
import { RandomSelectionPage } from './components/RandomSelectionPage';

type View = 'list' | 'form' | 'randomSelection';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('list');
  const [originView, setOriginView] = useState<View>('list');
  const [selectedInventory, setSelectedInventory] = useState<InventoryForm | null>(null);

  const handleSelectInventory = (acronym: string, origin: View) => {
    const inventoryData = ALL_INVENTORIES[acronym];
    if (inventoryData) {
      setSelectedInventory(inventoryData);
      setOriginView(origin);
      setCurrentView('form');
      window.scrollTo(0, 0);
    }
  };

  const handleBackToList = () => {
    setSelectedInventory(null);
    setCurrentView('list');
  };

  const handleGoToRandomSelection = () => {
    setCurrentView('randomSelection');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'form':
        return selectedInventory ? (
          <InventoryFormView 
            inventory={selectedInventory} 
            onBack={handleBackToList} 
            showBackButton={originView === 'list'} 
          />
        ) : null;
      case 'randomSelection':
        return <RandomSelectionPage 
                  modules={MODULES} 
                  onSelectInventory={(acronym) => handleSelectInventory(acronym, 'randomSelection')} 
               />;
      case 'list':
      default:
        return (
          <>
            <div className="space-y-12">
              {MODULES.map((module) => (
                <ModuleSection 
                  key={module.id} 
                  module={module} 
                  onSelectInventory={(acronym) => handleSelectInventory(acronym, 'list')}
                />
              ))}
            </div>
            <div className="mt-16 text-center">
              <p className="text-slate-600">
                Deseja uma sugestão de inventário?{' '}
                <button onClick={handleGoToRandomSelection} className="text-indigo-600 font-semibold hover:underline">
                  Clique aqui para uma seleção aleatória por módulo.
                </button>
              </p>
            </div>
          </>
        );
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 flex flex-col">
      <Header responseScale={currentView === 'form' ? selectedInventory?.responseScale : undefined} />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8 flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;