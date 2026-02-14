import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import BusinessCard from './components/BusinessCard';
import AddBusinessModal from './components/AddBusinessModal';
import { Language, Category, City, Business } from './types';
import { BUSINESS_DATA, TRANSLATIONS } from './constants';

const App: React.FC = () => {
  // Use BUSINESS_DATA as initial state
  const [businesses, setBusinesses] = useState<Business[]>(BUSINESS_DATA);
  const [language, setLanguage] = useState<Language>('ar');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [selectedCity, setSelectedCity] = useState<City | 'All'>('All');
  const [onlyOpen, setOnlyOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Toggle Language Handler
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  // Add Business Logic
  const handleAddBusiness = (newBusiness: Business) => {
    setBusinesses(prev => [newBusiness, ...prev]);
    setIsAddModalOpen(false);
  };

  // Set document direction based on language
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Handle all filters change from modal
  const handleFiltersChange = (category: Category | 'All', city: City | 'All', open: boolean) => {
    setSelectedCategory(category);
    setSelectedCity(city);
    setOnlyOpen(open);
  };

  // Filter Logic
  const filteredBusinesses = useMemo(() => {
    const currentHour = new Date().getHours();

    return businesses.filter((business) => {
      // 1. Search Query
      const matchesSearch =
        business.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.description[language].toLowerCase().includes(searchQuery.toLowerCase());
      
      // 2. Category
      const matchesCategory = selectedCategory === 'All' || business.category === selectedCategory;
      
      // 3. City
      const matchesCity = selectedCity === 'All' || business.city === selectedCity;

      // 4. Open Now Logic
      let matchesOpen = true;
      if (onlyOpen) {
        if (business.openHour === 0 && business.closeHour === 24) {
           matchesOpen = true; // 24 hours
        } else {
           matchesOpen = currentHour >= business.openHour && currentHour < business.closeHour;
        }
      }

      return matchesSearch && matchesCategory && matchesCity && matchesOpen;
    });
  }, [businesses, searchQuery, selectedCategory, selectedCity, onlyOpen, language]);

  return (
    <div className={`min-h-screen bg-slate-50 transition-colors duration-300 font-sans`}>
      <Header 
        language={language} 
        onToggleLanguage={toggleLanguage} 
        onAddBusiness={() => setIsAddModalOpen(true)}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Intro/Hero Section */}
        <div className="text-center mb-10 space-y-4">
           <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            {language === 'ar' ? 'اكتشف أفضل الأعمال في سوريا' : 'Discover Top Businesses in Syria'}
           </h2>
           <p className="text-slate-500 max-w-2xl mx-auto text-lg">
             {language === 'ar' 
               ? 'تصفح العيادات، المصانع، والمكاتب في دمشق، حلب، وحمص بكل سهولة.' 
               : 'Browse clinics, factories, and offices in Damascus, Aleppo, and Homs with ease.'}
           </p>
        </div>

        {/* Filters */}
        <Filters
          language={language}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          selectedCity={selectedCity}
          onlyOpen={onlyOpen}
          onSearchChange={setSearchQuery}
          onFiltersChange={handleFiltersChange}
        />

        {/* Results Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl h-96 shadow-sm border border-slate-100"></div>
            ))}
          </div>
        ) : filteredBusinesses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBusinesses.map((business) => (
              <BusinessCard key={business.id} business={business} language={language} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 text-slate-400 mb-4">
              <i className="fa-solid fa-magnifying-glass text-2xl"></i>
            </div>
            <p className="text-lg text-slate-500 font-medium">{TRANSLATIONS.noResults[language]}</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} SyriaBiz Directory. {language === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</p>
        </div>
      </footer>

      {/* Modals */}
      {isAddModalOpen && (
        <AddBusinessModal 
          language={language} 
          onClose={() => setIsAddModalOpen(false)} 
          onSave={handleAddBusiness} 
        />
      )}
    </div>
  );
};

export default App;