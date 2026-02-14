import React from 'react';
import { Language, LocalizedString } from '../types';
import { TRANSLATIONS } from '../constants';

interface HeaderProps {
  language: Language;
  onToggleLanguage: () => void;
  onAddBusiness: () => void;
}

const Header: React.FC<HeaderProps> = ({ language, onToggleLanguage, onAddBusiness }) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-white/20 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo / Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-slate-600 flex items-center justify-center text-white shadow-lg">
              <i className="fa-solid fa-briefcase text-xl"></i>
            </div>
            <h1 className="hidden sm:block text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 to-slate-700">
              {TRANSLATIONS.appTitle[language]}
            </h1>
            <h1 className="sm:hidden text-lg font-bold text-slate-700">
              SyriaBiz
            </h1>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Add Business Button */}
            <button
              onClick={onAddBusiness}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 active:scale-95"
            >
              <i className="fa-solid fa-plus"></i>
              <span className="hidden sm:inline font-semibold">{TRANSLATIONS.addBusiness[language]}</span>
            </button>

            {/* Language Switcher */}
            <button
              onClick={onToggleLanguage}
              className="group relative flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-slate-100 hover:bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Toggle Language"
            >
              <i className="fa-solid fa-globe text-slate-500 group-hover:text-emerald-600 transition-colors"></i>
              <span className="font-semibold text-slate-700 group-hover:text-emerald-700">
                {language === 'ar' ? 'EN' : 'عربي'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;