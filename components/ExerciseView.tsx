
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ALL_EXERCISES } from '../mocks/exercises';
import { BreathingSettings } from '../types';

// --- COMPONENTE: GRÁFICO DE PIZZA INTERATIVO ---
const InteractivePieChart = () => {
  const [slices, setSlices] = useState<{ label: string; value: number; color: string }[]>([
    { label: 'Minha Culpa (Inicial)', value: 100, color: '#ef4444' } // Red-500
  ]);
  const [newLabel, setNewLabel] = useState('');
  const [newValue, setNewValue] = useState('');

  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#6366f1']; // Blue, Green, Amber, Violet, Pink, Indigo

  const totalValue = slices.reduce((acc, curr) => acc + curr.value, 0);
  
  // Gera o conic-gradient para o gráfico CSS
  let currentAngle = 0;
  const gradientParts = slices.map(slice => {
    const percentage = (slice.value / totalValue) * 100;
    const endAngle = currentAngle + percentage;
    const str = `${slice.color} ${currentAngle}% ${endAngle}%`;
    currentAngle = endAngle;
    return str;
  });
  const backgroundStyle = `conic-gradient(${gradientParts.join(', ')})`;

  const addSlice = () => {
    if (!newLabel || !newValue) return;
    const val = parseInt(newValue);
    if (isNaN(val) || val <= 0) return;

    // Ao adicionar um novo fator, reduzimos proporcionalmente a "Minha Culpa" se ela for a única ou ajustamos
    const newSlices = [...slices];
    // Se só tem a culpa inicial de 100%, vamos ajustá-la para dar espaço
    if (newSlices.length === 1 && newSlices[0].label.includes('Minha Culpa')) {
       newSlices[0].value = Math.max(0, 100 - val);
    }
    
    newSlices.push({
      label: newLabel,
      value: val,
      color: colors[(newSlices.length - 1) % colors.length]
    });
    
    setSlices(newSlices);
    setNewLabel('');
    setNewValue('');
  };

  const removeSlice = (index: number) => {
     const newSlices = slices.filter((_, i) => i !== index);
     // Se remover tudo, reseta
     if (newSlices.length === 0) {
         setSlices([{ label: 'Minha Culpa (Inicial)', value: 100, color: '#ef4444' }]);
     } else {
         setSlices(newSlices);
     }
  };

  return (
    <div className="mt-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
        <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Gráfico Visual */}
            <div className="relative w-48 h-48 rounded-full shadow-inner flex-shrink-0" style={{ background: backgroundStyle }}>
               <div className="absolute inset-0 flex items-center justify-center">
                   {/* Buraco da rosquinha (opcional, remove se quiser pizza cheia) */}
                   <div className="w-16 h-16 bg-slate-50 rounded-full"></div>
               </div>
            </div>

            {/* Lista e Inputs */}
            <div className="flex-grow w-full">
                <h4 className="font-bold text-slate-700 mb-3">Fatias da Responsabilidade:</h4>
                <ul className="space-y-2 mb-4">
                    {slices.map((slice, idx) => (
                        <li key={idx} className="flex items-center justify-between bg-white p-2 rounded border border-slate-200">
                            <div className="flex items-center">
                                <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: slice.color }}></span>
                                <span className="text-sm text-slate-700">{slice.label}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-sm font-bold text-slate-600 mr-3">{Math.round((slice.value / totalValue) * 100)}%</span>
                                {idx !== 0 && ( // Não permitir remover a fatia base facilmente, ou permitir reset
                                    <button onClick={() => removeSlice(idx)} className="text-red-400 hover:text-red-600">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                    </button>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="flex gap-2">
                    <input 
                        type="text" 
                        placeholder="Outro fator (ex: Cansaço)" 
                        className="flex-grow p-2 text-sm border border-slate-300 rounded-lg"
                        value={newLabel}
                        onChange={(e) => setNewLabel(e.target.value)}
                    />
                    <input 
                        type="number" 
                        placeholder="%" 
                        className="w-16 p-2 text-sm border border-slate-300 rounded-lg"
                        value={newValue}
                        onChange={(e) => setNewValue(e.target.value)}
                    />
                    <button 
                        onClick={addSlice}
                        className="bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700"
                    >
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

// --- COMPONENTE: GUIA DE RESPIRAÇÃO ---
const BreathingGuide: React.FC<{ settings: BreathingSettings }> = ({ settings }) => {
    const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale' | 'holdAfter'>('inhale');
    const [timeLeft, setTimeLeft] = useState(settings.inhale);

    useEffect(() => {
        let timer: number;
        
        const runCycle = () => {
            if (phase === 'inhale') {
                if (timeLeft > 0) {
                   timer = window.setTimeout(() => setTimeLeft(t => t - 1), 1000);
                } else {
                    const nextPhase = settings.hold ? 'hold' : 'exhale';
                    setPhase(nextPhase);
                    setTimeLeft(nextPhase === 'hold' ? settings.hold! : settings.exhale);
                }
            } else if (phase === 'hold') {
                if (timeLeft > 0) {
                    timer = window.setTimeout(() => setTimeLeft(t => t - 1), 1000);
                } else {
                    setPhase('exhale');
                    setTimeLeft(settings.exhale);
                }
            } else if (phase === 'exhale') {
                if (timeLeft > 0) {
                    timer = window.setTimeout(() => setTimeLeft(t => t - 1), 1000);
                } else {
                    const nextPhase = settings.holdAfter ? 'holdAfter' : 'inhale';
                    setPhase(nextPhase);
                    setTimeLeft(nextPhase === 'holdAfter' ? settings.holdAfter! : settings.inhale);
                }
             } else if (phase === 'holdAfter') {
                if (timeLeft > 0) {
                    timer = window.setTimeout(() => setTimeLeft(t => t - 1), 1000);
                } else {
                    setPhase('inhale');
                    setTimeLeft(settings.inhale);
                }
            }
        };

        runCycle();
        return () => clearTimeout(timer);
    }, [phase, timeLeft, settings]);

    let instruction = '';
    let scaleClass = '';
    
    switch(phase) {
        case 'inhale': instruction = 'Inspire...'; scaleClass = 'scale-110 bg-blue-200'; break;
        case 'hold': instruction = 'Segure...'; scaleClass = 'scale-110 bg-blue-300'; break;
        case 'exhale': instruction = 'Expire...'; scaleClass = 'scale-100 bg-green-200'; break;
        case 'holdAfter': instruction = 'Aguarde...'; scaleClass = 'scale-100 bg-green-100'; break;
    }

    return (
        <div className="flex flex-col items-center justify-center py-8 bg-slate-50 rounded-2xl mt-4">
             <div className={`w-40 h-40 rounded-full flex items-center justify-center transition-all ease-in-out duration-1000 ${scaleClass} shadow-lg border-4 border-white`}>
                 <div className="text-center">
                     <p className="text-xl font-bold text-slate-700">{instruction}</p>
                     <p className="text-2xl font-mono text-slate-500">{timeLeft}s</p>
                 </div>
             </div>
             <p className="mt-4 text-sm text-slate-500">Siga o ritmo da animação</p>
        </div>
    );
};

// --- COMPONENTE: SLIDER (RANGE) ---
const RangeSlider: React.FC<{ min: number; max: number; labelMin: string; labelMax: string; id: number; onChange: (val: string) => void; value: string }> = ({ min, max, labelMin, labelMax, id, onChange, value }) => {
    return (
        <div className="mt-4 bg-white p-4 rounded-xl border border-slate-200">
            <div className="flex justify-between text-xs text-slate-500 mb-2">
                <span>{labelMin}</span>
                <span className="font-bold text-indigo-600 text-lg">{value || min}</span>
                <span>{labelMax}</span>
            </div>
            <input 
                type="range" 
                min={min} 
                max={max} 
                value={value || min} 
                onChange={(e) => onChange(e.target.value)}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
        </div>
    );
};

// --- COMPONENTE: TABELA DINÂMICA ---
const TableInput: React.FC<{ columns: string[]; stepId: number; }> = ({ columns, stepId }) => {
    const [rows, setRows] = useState<string[][]>([Array(columns.length).fill('')]);

    const handleCellChange = (rowIndex: number, colIndex: number, value: string) => {
        const newRows = [...rows];
        newRows[rowIndex][colIndex] = value;
        setRows(newRows);
    };

    const addRow = () => {
        setRows([...rows, Array(columns.length).fill('')]);
    };

    return (
        <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm text-left text-slate-600 border border-slate-200 rounded-lg overflow-hidden">
                <thead className="text-xs text-slate-700 uppercase bg-slate-100">
                    <tr>
                        {columns.map((col, idx) => (
                            <th key={idx} scope="col" className="px-4 py-3 border-r border-slate-200 last:border-r-0">
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="bg-white border-b hover:bg-slate-50">
                            {row.map((cell, colIndex) => (
                                <td key={colIndex} className="border-r border-slate-200 last:border-r-0 p-2">
                                    <textarea
                                        className="w-full bg-transparent border-none focus:ring-0 text-slate-800 resize-none p-1"
                                        rows={2}
                                        placeholder="..."
                                        value={cell}
                                        onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <button 
                onClick={addRow}
                className="mt-3 flex items-center text-sm text-indigo-600 hover:text-indigo-800 font-medium"
            >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                Adicionar Linha
            </button>
        </div>
    );
};


export const ExerciseView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const exercise = ALL_EXERCISES.find(ex => ex.id === id);
  
  // Estado para inputs de texto e sliders
  const [userInputs, setUserInputs] = useState<Record<number, string>>({});
  // Estado para checklists (chave combinada stepId-optionIndex)
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  if (!exercise) {
    return (
        <div className="text-center p-12">
            <h2 className="text-2xl font-bold text-slate-800">Exercício não encontrado</h2>
            <button onClick={() => navigate('/exercicios')} className="mt-4 text-indigo-600 hover:underline">Voltar</button>
        </div>
    );
  }

  const handleInputChange = (stepId: number, value: string) => {
    setUserInputs(prev => ({
        ...prev,
        [stepId]: value
    }));
  };

  const toggleCheck = (stepId: number, optionIndex: number) => {
      const key = `${stepId}-${optionIndex}`;
      setCheckedItems(prev => ({
          ...prev,
          [key]: !prev[key]
      }));
  };

  return (
    <div className="max-w-3xl mx-auto pb-16 animate-fade-in">
      {/* Header de Navegação */}
      <div className="sticky top-0 z-30 bg-slate-50/95 backdrop-blur-sm py-4 border-b border-slate-200 mb-8 flex items-center justify-between px-2">
        <button 
            onClick={() => navigate('/exercicios')}
            className="flex items-center text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium"
        >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            Voltar para Lista
        </button>
        <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">
            {exercise.category}
        </div>
      </div>

      {/* Título e Introdução */}
      <div className="text-center mb-10 px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-200 text-4xl mb-4">
            {exercise.icon}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{exercise.title}</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {exercise.description}
        </p>
        <div className="mt-4 flex justify-center">
             <span className="inline-flex items-center text-sm font-medium text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                <svg className="w-4 h-4 mr-1.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Duração estimada: {exercise.duration}
             </span>
        </div>
      </div>

      {/* Lista de Passos */}
      <div className="space-y-8 px-2">
        {exercise.steps.map((step, index) => (
            <div 
                key={step.id} 
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 relative overflow-hidden group hover:border-indigo-200 transition-all duration-300"
            >
                {/* Indicador de Passo */}
                <div className="flex items-center mb-4">
                    <span className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm mr-3 ${step.type === 'instruction' ? 'bg-blue-100 text-blue-700' : 'bg-indigo-100 text-indigo-700'}`}>
                        {index + 1}
                    </span>
                    <h2 className="text-xl font-bold text-slate-800">
                        {step.title || `Passo ${index + 1}`}
                    </h2>
                </div>
                
                <div className="ml-0 md:ml-11">
                    
                    {/* TIPO: INSTRUCTION (Caixa Azul) */}
                    {step.type === 'instruction' ? (
                        <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 flex items-start">
                            <svg className="w-6 h-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <div className="prose prose-blue prose-sm max-w-none text-blue-800 leading-relaxed">
                                {step.content}
                            </div>
                        </div>
                    ) : (
                        /* TIPO: TEXTO PADRÃO */
                         <div className="prose prose-slate max-w-none text-slate-600 text-lg leading-relaxed whitespace-pre-wrap">
                            {step.content}
                        </div>
                    )}

                    {/* TIPO: WRITING (Área de texto) */}
                    {step.type === 'writing' && (
                        <div className="mt-6">
                            <textarea
                                className="w-full p-4 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-h-[120px] text-slate-700 placeholder-slate-400 transition-all shadow-inner resize-y"
                                placeholder={step.placeholder || 'Escreva sua reflexão aqui...'}
                                value={userInputs[step.id] || ''}
                                onChange={(e) => handleInputChange(step.id, e.target.value)}
                            ></textarea>
                        </div>
                    )}

                    {/* TIPO: CHECKLIST */}
                    {step.type === 'checklist' && step.options && (
                        <div className="mt-6 space-y-3">
                            {step.options.map((option, idx) => {
                                const isChecked = checkedItems[`${step.id}-${idx}`] || false;
                                return (
                                    <div 
                                        key={idx} 
                                        onClick={() => toggleCheck(step.id, idx)}
                                        className={`flex items-start p-3 rounded-lg border cursor-pointer transition-all duration-200 ${isChecked ? 'bg-green-50 border-green-200' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
                                    >
                                        <div className={`flex-shrink-0 w-6 h-6 rounded border flex items-center justify-center mr-3 transition-colors ${isChecked ? 'bg-green-500 border-green-500 text-white' : 'bg-white border-slate-300 text-transparent'}`}>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                        <span className={`text-base ${isChecked ? 'text-green-800 font-medium' : 'text-slate-700'}`}>{option}</span>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* TIPO: PIE CHART (Gráfico de Pizza) */}
                    {step.type === 'pie_chart' && (
                        <InteractivePieChart />
                    )}

                    {/* TIPO: BREATHING GUIDE (Animação) */}
                    {step.type === 'breathing_guide' && step.breathingSettings && (
                        <BreathingGuide settings={step.breathingSettings} />
                    )}

                    {/* TIPO: RANGE (Slider) */}
                    {step.type === 'range' && step.rangeSettings && (
                        <RangeSlider 
                            min={step.rangeSettings.min} 
                            max={step.rangeSettings.max} 
                            labelMin={step.rangeSettings.labelMin} 
                            labelMax={step.rangeSettings.labelMax}
                            id={step.id}
                            value={userInputs[step.id]}
                            onChange={(val) => handleInputChange(step.id, val)}
                        />
                    )}

                     {/* TIPO: TABLE INPUT (Tabela Dinâmica) */}
                     {step.type === 'table_input' && step.tableSettings && (
                        <TableInput columns={step.tableSettings.columns} stepId={step.id} />
                    )}

                </div>
            </div>
        ))}
      </div>

      {/* Botão de Conclusão */}
      <div className="mt-12 text-center px-4">
        <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 mb-6">
            <h3 className="text-lg font-bold text-indigo-900 mb-2">Exercício Finalizado?</h3>
            <p className="text-indigo-700 mb-6">Parabéns por dedicar este tempo ao seu bem-estar.</p>
            <button
                onClick={() => navigate('/exercicios')}
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center mx-auto w-full sm:w-auto"
            >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Concluir e Voltar
            </button>
        </div>
      </div>
    </div>
  );
};
