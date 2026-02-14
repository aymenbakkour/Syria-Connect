import React, { useState } from 'react';
import { Language, Category, City } from '../types';
import { TRANSLATIONS } from '../constants';

interface FiltersProps {
  language: Language;
  searchQuery: string;
  selectedCategory: Category | 'All';
  selectedCity: City | 'All';
  onlyOpen: boolean;
  onSearchChange: (query: string) => void;
  onFiltersChange: (category: Category | 'All', city: City | 'All', onlyOpen: boolean) => void;
}

const Filters: React.FC<FiltersProps> = ({
  language,
  searchQuery,
  selectedCategory,
  selectedCity,
  onlyOpen,
  onSearchChange,
  onFiltersChange,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Local state for the modal inputs
  const [localCategory, setLocalCategory] = useState<Category | 'All'>(selectedCategory);
  const [localCity, setLocalCity] = useState<City | 'All'>(selectedCity);
  const [localOnlyOpen, setLocalOnlyOpen] = useState<boolean>(onlyOpen);

  const categories: Category[] = ['Clinic', 'Pharmacy', 'Factory', 'Office'];
  const cities: City[] = ['Damascus', 'Aleppo', 'Homs'];

  const openModal = () => {
    // Sync local state with current props when opening
    setLocalCategory(selectedCategory);
    setLocalCity(selectedCity);
    setLocalOnlyOpen(onlyOpen);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const applyFilters = () => {
    onFiltersChange(localCategory, localCity, localOnlyOpen);
    closeModal();
  };

  const resetFilters = () => {
    setLocalCategory('All');
    setLocalCity('All');
    setLocalOnlyOpen(false);
  };

  const isFilterActive = selectedCategory !== 'All' || selectedCity !== 'All' || onlyOpen;

  return (
    <>
      <div className="flex gap-4 mb-8">
        {/* Search Input */}
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none">
            <i className="fa-solid fa-search text-slate-400"></i>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="block w-full p-4 ps-11 text-base text-slate-900 border border-slate-200 rounded-2xl bg-white shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
            placeholder={TRANSLATIONS.searchPlaceholder[language]}
          />
        </div>

        {/* Filter Trigger Button */}
        <button
          onClick={openModal}
          className={`flex items-center gap-2 px-6 py-4 rounded-2xl font-semibold transition-all shadow-sm border ${
            isFilterActive
              ? 'bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <i className="fa-solid fa-sliders"></i>
          <span className="hidden sm:inline">{TRANSLATIONS.filters[language]}</span>
          {isFilterActive && (
             <span className="flex h-2 w-2 rounded-full bg-red-400"></span>
          )}
        </button>
      </div>

      {/* Filter Modal / Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] sm:max-h-[85vh] animate-[slideUp_0.3s_ease-out] sm:animate-[fadeInScale_0.2s_ease-out]">
            
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <i className="fa-solid fa-filter text-emerald-600"></i>
                {TRANSLATIONS.filters[language]}
              </h3>
              <button onClick={closeModal} className="text-slate-400 hover:text-slate-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors">
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-8">
              
              {/* Category Section */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  {TRANSLATIONS.filterCategory[language]}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setLocalCategory('All')}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all border ${
                      localCategory === 'All'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200 shadow-sm'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {TRANSLATIONS.allCategories[language]}
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setLocalCategory(cat)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all border ${
                        localCategory === cat
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200 shadow-sm'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {TRANSLATIONS[`category${cat}`][language]}
                    </button>
                  ))}
                </div>
              </div>

              {/* City Section */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  {TRANSLATIONS.filterCity[language]}
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                     onClick={() => setLocalCity('All')}
                     className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                       localCity === 'All'
                         ? 'bg-slate-800 text-white border-slate-800'
                         : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                     }`}
                  >
                    {TRANSLATIONS.allCities[language]}
                  </button>
                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => setLocalCity(city)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                        localCity === city
                          ? 'bg-slate-800 text-white border-slate-800'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {TRANSLATIONS[`city${city}`][language]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Section */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  {TRANSLATIONS.status[language]}
                </label>
                <label className="flex items-center gap-4 p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                  <div className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${localOnlyOpen ? 'bg-emerald-500' : 'bg-slate-300'}`}>
                    <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${localOnlyOpen ? 'ltr:translate-x-6 rtl:-translate-x-6' : ''}`}></div>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={localOnlyOpen} 
                    onChange={(e) => setLocalOnlyOpen(e.target.checked)} 
                    className="hidden"
                  />
                  <span className="font-medium text-slate-700">{TRANSLATIONS.openNow[language]}</span>
                </label>
              </div>

            </div>

            {/* Footer */}
            <div className="p-6 border-t border-slate-100 bg-slate-50 flex gap-4">
              <button
                onClick={resetFilters}
                className="flex-1 px-4 py-3 rounded-xl text-slate-600 font-semibold hover:bg-slate-200 transition-colors"
              >
                {TRANSLATIONS.reset[language]}
              </button>
              <button
                onClick={applyFilters}
                className="flex-[2] px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-lg shadow-emerald-200 transition-all transform active:scale-95"
              >
                {TRANSLATIONS.apply[language]}
              </button>
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
};

export default Filters;