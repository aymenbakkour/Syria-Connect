import React, { useState } from 'react';
import { Language, Category, City, Business } from '../types';
import { TRANSLATIONS } from '../constants';

interface AddBusinessModalProps {
  language: Language;
  onClose: () => void;
  onSave: (business: Business) => void;
}

const AddBusinessModal: React.FC<AddBusinessModalProps> = ({ language, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    nameAr: '',
    nameEn: '',
    category: 'Clinic' as Category,
    city: 'Damascus' as City,
    phone: '',
    addressAr: '',
    addressEn: '',
    descAr: '',
    descEn: '',
    image: 'https://picsum.photos/400/300',
    openHour: 9,
    closeHour: 17,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newBusiness: Business = {
      id: Date.now(),
      name: { ar: formData.nameAr, en: formData.nameEn },
      category: formData.category,
      city: formData.city,
      phone: formData.phone,
      address: { ar: formData.addressAr, en: formData.addressEn },
      description: { ar: formData.descAr, en: formData.descEn },
      image: formData.image,
      openHour: Number(formData.openHour),
      closeHour: Number(formData.closeHour),
    };

    onSave(newBusiness);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-[fadeInScale_0.2s_ease-out]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <i className="fa-solid fa-plus-circle text-emerald-600"></i>
            {TRANSLATIONS.addBusinessTitle[language]}
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-200 transition-colors">
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Basic Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">{TRANSLATIONS.labelNameAr[language]}</label>
              <input required name="nameAr" value={formData.nameAr} onChange={handleChange} className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" dir="rtl" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">{TRANSLATIONS.labelNameEn[language]}</label>
              <input required name="nameEn" value={formData.nameEn} onChange={handleChange} className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" dir="ltr" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">{TRANSLATIONS.filterCategory[language]}</label>
              <select name="category" value={formData.category} onChange={handleChange} className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500">
                {['Clinic', 'Pharmacy', 'Factory', 'Office'].map(c => (
                  <option key={c} value={c}>{TRANSLATIONS[`category${c}`][language]}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">{TRANSLATIONS.filterCity[language]}</label>
              <select name="city" value={formData.city} onChange={handleChange} className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500">
                {['Damascus', 'Aleppo', 'Homs'].map(c => (
                  <option key={c} value={c}>{TRANSLATIONS[`city${c}`][language]}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">{TRANSLATIONS.labelPhone[language]}</label>
              <input required name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500" placeholder="+963..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">{TRANSLATIONS.labelImage[language]}</label>
              <input name="image" value={formData.image} onChange={handleChange} className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500" placeholder="https://..." />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">{TRANSLATIONS.labelAddressAr[language]}</label>
              <input required name="addressAr" value={formData.addressAr} onChange={handleChange} className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500" dir="rtl" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">{TRANSLATIONS.labelAddressEn[language]}</label>
              <input required name="addressEn" value={formData.addressEn} onChange={handleChange} className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500" dir="ltr" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">{TRANSLATIONS.labelOpenTime[language]}</label>
              <input type="number" min="0" max="23" name="openHour" value={formData.openHour} onChange={handleChange} className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">{TRANSLATIONS.labelCloseTime[language]}</label>
              <input type="number" min="0" max="24" name="closeHour" value={formData.closeHour} onChange={handleChange} className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500" />
            </div>
          </div>

          <div>
             <label className="block text-sm font-medium text-slate-700 mb-1">{TRANSLATIONS.labelDescAr[language]}</label>
             <textarea required name="descAr" value={formData.descAr} onChange={handleChange} className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500" rows={2} dir="rtl"></textarea>
          </div>
          <div>
             <label className="block text-sm font-medium text-slate-700 mb-1">{TRANSLATIONS.labelDescEn[language]}</label>
             <textarea required name="descEn" value={formData.descEn} onChange={handleChange} className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500" rows={2} dir="ltr"></textarea>
          </div>

        </form>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 bg-slate-50 flex gap-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-3 rounded-xl text-slate-600 font-semibold hover:bg-slate-200 transition-colors border border-slate-200"
          >
            {TRANSLATIONS.cancel[language]}
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-lg shadow-emerald-200 transition-all transform active:scale-95"
          >
            {TRANSLATIONS.save[language]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBusinessModal;