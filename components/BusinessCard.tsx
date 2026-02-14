import React from 'react';
import { Business, Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface BusinessCardProps {
  business: Business;
  language: Language;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business, language }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Clinic': return 'fa-user-doctor';
      case 'Pharmacy': return 'fa-pills';
      case 'Factory': return 'fa-industry';
      case 'Office': return 'fa-building';
      default: return 'fa-briefcase';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Clinic': return 'bg-emerald-100 text-emerald-700';
      case 'Pharmacy': return 'bg-teal-100 text-teal-700';
      case 'Factory': return 'bg-amber-100 text-amber-700';
      case 'Office': return 'bg-slate-100 text-slate-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const formatTime = (hour: number) => {
    return `${hour.toString().padStart(2, '0')}:00`;
  };

  // Check if open now (Client-side simple check)
  const now = new Date();
  const currentHour = now.getHours();
  // Simple logic: Open if current hour is >= openHour AND < closeHour. 
  // Handle 24h special case (0-24) or wrap around if needed (though current data is simple).
  const isOpen = (business.openHour === 0 && business.closeHour === 24) || (currentHour >= business.openHour && currentHour < business.closeHour);

  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={business.image}
          alt={business.name[language]}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 start-4 flex gap-2">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-sm ${getCategoryColor(business.category)}`}>
            <i className={`fa-solid ${getCategoryIcon(business.category)}`}></i>
            {TRANSLATIONS[`category${business.category}`][language]}
          </span>
        </div>
        
        {/* Open Status Badge */}
        <div className="absolute bottom-3 end-3">
          <span className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-bold shadow-sm backdrop-blur-md ${isOpen ? 'bg-emerald-500/90 text-white' : 'bg-red-500/90 text-white'}`}>
             {isOpen ? TRANSLATIONS.open[language] : TRANSLATIONS.closed[language]}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors">
          {business.name[language]}
        </h3>
        
        <p className="text-slate-500 text-sm mb-4 line-clamp-2 flex-grow">
          {business.description[language]}
        </p>

        <div className="space-y-3 mt-auto">
          {/* Address */}
          <div className="flex items-start gap-3 text-sm text-slate-600">
            <i className="fa-solid fa-location-dot mt-1 text-slate-400"></i>
            <span>{business.address[language]}</span>
          </div>

          {/* Hours */}
          <div className="flex items-center gap-3 text-xs text-slate-500">
             <i className="fa-regular fa-clock mt-0.5 text-slate-400"></i>
             <span className="font-medium">
               {business.openHour === 0 && business.closeHour === 24 
                 ? '24/7' 
                 : `${formatTime(business.openHour)} - ${formatTime(business.closeHour)}`
               }
             </span>
          </div>
          
          <div className="pt-4 mt-4 border-t border-slate-100 flex gap-2">
            <a 
              href={`tel:${business.phone}`} 
              className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl transition-colors shadow-md shadow-emerald-200"
            >
              <i className="fa-solid fa-phone"></i>
              {TRANSLATIONS.callNow[language]}
            </a>
            <button className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition-colors">
              <i className="fa-solid fa-map"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;