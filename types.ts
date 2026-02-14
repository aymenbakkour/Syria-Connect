export type Language = 'ar' | 'en';

export type Category = 'Clinic' | 'Pharmacy' | 'Factory' | 'Office';
export type City = 'Damascus' | 'Aleppo' | 'Homs';

export interface LocalizedString {
  ar: string;
  en: string;
}

export interface Business {
  id: number;
  name: LocalizedString;
  category: Category;
  city: City;
  phone: string;
  address: LocalizedString;
  description: LocalizedString;
  image: string;
  openHour: number; // 24-hour format (e.g., 9 for 09:00)
  closeHour: number; // 24-hour format (e.g., 17 for 17:00)
}

export interface TranslationDictionary {
  [key: string]: LocalizedString;
}