import React from 'react';
import { Routes, Route, useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { ModuleSection } from './components/ModuleSection';
import { MODULES } from './constants';
import { Footer } from './components/Footer';
import { InventoryFormView } from './components/InventoryFormView';
import { ALL_INVENTORIES } from './mocks';
import { RandomSelectionPage } from './components/RandomSelectionPage';
import { InventoryForm } from './types';
import { ScrollToTop } from './components/ScrollToTop';

const HomePage: React.FC = () => (
  <>
    <div className="space-y-12">
      {MODULES.map((module) => (
        <ModuleSection 
          key={module.id} 
          module={module} 
        />
      ))}
    </div>
    <div className="mt-16 text-center">
      <p className="text-slate-600">
        Deseja uma sugestão de inventário?{' '}
        <Link to="/questionarios-terapeuticos" className="text-indigo-600 font-semibold hover:underline">
          Clique aqui para uma seleção aleatória por módulo.
        </Link>
      </p>
    </div>
  </>
);

const InventoryPage: React.FC = () => {
  const { acronym } = useParams<{ acronym: string }>();
  const navigate = useNavigate();
  const inventoryData = acronym ? ALL_INVENTORIES[acronym.toUpperCase()] : null;

  if (!inventoryData) {
    return (
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-red-600">Inventário não encontrado</h2>
        <p className="text-slate-600 mt-2">O inventário com o acrônimo "{acronym}" não foi localizado.</p>
        <button onClick={() => navigate('/')} className="mt-6 bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
          Voltar para a lista
        </button>
      </div>
    );
  }

  return (
    <InventoryFormView 
      inventory={inventoryData} 
      onBack={() => navigate(-1)} 
      showBackButton={true}
    />
  );
};

const RandomSelectionWrapper: React.FC = () => {
  const navigate = useNavigate();
  return (
    <RandomSelectionPage
      modules={MODULES}
      onSelectInventory={(acronym) => navigate(`/inventario/${acronym}`)}
    />
  );
};


const App: React.FC = () => {
  const location = useLocation();
  const isFormView = location.pathname.startsWith('/inventario/');
  
  // A bit of logic to get the current inventory for the header
  let currentInventory: InventoryForm | undefined;
  if(isFormView) {
    const acronym = location.pathname.split('/')[2];
    if(acronym) {
      currentInventory = ALL_INVENTORIES[acronym.toUpperCase()];
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 flex flex-col">
       <ScrollToTop />
       <Header responseScale={isFormView ? currentInventory?.responseScale : undefined} />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8 flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inventario/:acronym" element={<InventoryPage />} />
          <Route path="/questionarios-terapeuticos" element={<RandomSelectionWrapper />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;