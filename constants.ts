import { Business, TranslationDictionary } from './types';

export const TRANSLATIONS: TranslationDictionary = {
  appTitle: {
    ar: 'دليل الأعمال السوري',
    en: 'Syria Business Directory',
  },
  searchPlaceholder: {
    ar: 'ابحث عن اسم، خدمة، أو مكان...',
    en: 'Search name, service, or place...',
  },
  filters: {
    ar: 'تصفية النتائج',
    en: 'Filters',
  },
  filterCategory: {
    ar: 'الفئة',
    en: 'Category',
  },
  filterCity: {
    ar: 'المدينة',
    en: 'City',
  },
  status: {
    ar: 'الحالة',
    en: 'Status',
  },
  openNow: {
    ar: 'مفتوح الآن',
    en: 'Open Now',
  },
  allCategories: {
    ar: 'الكل',
    en: 'All',
  },
  allCities: {
    ar: 'الكل',
    en: 'All',
  },
  apply: {
    ar: 'تطبيق',
    en: 'Apply',
  },
  reset: {
    ar: 'إعادة تعيين',
    en: 'Reset',
  },
  categoryClinic: {
    ar: 'عيادة',
    en: 'Clinic',
  },
  categoryPharmacy: {
    ar: 'صيدلية',
    en: 'Pharmacy',
  },
  categoryFactory: {
    ar: 'معمل',
    en: 'Factory',
  },
  categoryOffice: {
    ar: 'مكتب',
    en: 'Office',
  },
  cityDamascus: {
    ar: 'دمشق',
    en: 'Damascus',
  },
  cityAleppo: {
    ar: 'حلب',
    en: 'Aleppo',
  },
  cityHoms: {
    ar: 'حمص',
    en: 'Homs',
  },
  callNow: {
    ar: 'اتصل',
    en: 'Call',
  },
  openHours: {
    ar: 'ساعات العمل',
    en: 'Hours',
  },
  closed: {
    ar: 'مغلق',
    en: 'Closed',
  },
  open: {
    ar: 'مفتوح',
    en: 'Open',
  },
  noResults: {
    ar: 'لا توجد نتائج مطابقة',
    en: 'No matching results found',
  },
  // Add Business Translations
  addBusiness: {
    ar: 'أضف عمل',
    en: 'Add Business',
  },
  addBusinessTitle: {
    ar: 'إضافة عمل جديد',
    en: 'Add New Business',
  },
  save: {
    ar: 'حفظ',
    en: 'Save',
  },
  cancel: {
    ar: 'إلغاء',
    en: 'Cancel',
  },
  labelNameAr: {
    ar: 'الاسم (عربي)',
    en: 'Name (Arabic)',
  },
  labelNameEn: {
    ar: 'الاسم (إنجليزي)',
    en: 'Name (English)',
  },
  labelDescAr: {
    ar: 'الوصف (عربي)',
    en: 'Description (Arabic)',
  },
  labelDescEn: {
    ar: 'الوصف (إنجليزي)',
    en: 'Description (English)',
  },
  labelAddressAr: {
    ar: 'العنوان (عربي)',
    en: 'Address (Arabic)',
  },
  labelAddressEn: {
    ar: 'العنوان (إنجليزي)',
    en: 'Address (English)',
  },
  labelPhone: {
    ar: 'رقم الهاتف',
    en: 'Phone Number',
  },
  labelImage: {
    ar: 'رابط الصورة',
    en: 'Image URL',
  },
  labelOpenTime: {
    ar: 'ساعة الفتح (0-23)',
    en: 'Open Hour (0-23)',
  },
  labelCloseTime: {
    ar: 'ساعة الإغلاق (0-24)',
    en: 'Close Hour (0-24)',
  },
};

export const BUSINESS_DATA: Business[] = [
  {
    id: 1,
    name: { ar: 'عيادة الشفاء الحديثة', en: 'Al-Shifa Modern Clinic' },
    category: 'Clinic',
    city: 'Damascus',
    phone: '+963 11 222 3333',
    address: { ar: 'دمشق، المزة، شارع 14', en: 'Damascus, Mezzeh, St 14' },
    description: { ar: 'عيادة طبية شاملة تقدم أفضل الخدمات الصحية.', en: 'Comprehensive medical clinic providing top health services.' },
    image: 'https://picsum.photos/400/300?random=1',
    openHour: 9,
    closeHour: 21,
  },
  {
    id: 2,
    name: { ar: 'معمل النسيج السوري', en: 'Syrian Textile Factory' },
    category: 'Factory',
    city: 'Aleppo',
    phone: '+963 21 444 5555',
    address: { ar: 'حلب، المدينة الصناعية، الشيخ نجار', en: 'Aleppo, Industrial City, Sheikh Najjar' },
    description: { ar: 'رائدون في صناعة الأقمشة والمنسوجات القطنية.', en: 'Pioneers in cotton fabrics and textile manufacturing.' },
    image: 'https://picsum.photos/400/300?random=2',
    openHour: 8,
    closeHour: 16,
  },
  {
    id: 3,
    name: { ar: 'صيدلية الأمل', en: 'Al-Amal Pharmacy' },
    category: 'Pharmacy',
    city: 'Homs',
    phone: '+963 31 666 7777',
    address: { ar: 'حمص، شارع الحضارة', en: 'Homs, Hadara Street' },
    description: { ar: 'أدوية ومستحضرات تجميل ومعدات طبية.', en: 'Medicines, cosmetics, and medical equipment.' },
    image: 'https://picsum.photos/400/300?random=3',
    openHour: 0, // 24 hours
    closeHour: 24,
  },
  {
    id: 4,
    name: { ar: 'مكتب الحلول الهندسية', en: 'Engineering Solutions Office' },
    category: 'Office',
    city: 'Damascus',
    phone: '+963 11 888 9999',
    address: { ar: 'دمشق، البرامكة', en: 'Damascus, Baramkeh' },
    description: { ar: 'استشارات هندسية وتصميم معماري متطور.', en: 'Engineering consultancy and advanced architectural design.' },
    image: 'https://picsum.photos/400/300?random=4',
    openHour: 9,
    closeHour: 17,
  },
  {
    id: 5,
    name: { ar: 'معمل البلاستيك الوطني', en: 'National Plastics Factory' },
    category: 'Factory',
    city: 'Homs',
    phone: '+963 31 123 4567',
    address: { ar: 'حمص، حسياء', en: 'Homs, Hasya' },
    description: { ar: 'انتاج عبوات بلاستيكية عالية الجودة.', en: 'Production of high-quality plastic containers.' },
    image: 'https://picsum.photos/400/300?random=5',
    openHour: 7,
    closeHour: 15,
  },
  {
    id: 6,
    name: { ar: 'عيادة الأسنان التخصصية', en: 'Specialized Dental Clinic' },
    category: 'Clinic',
    city: 'Aleppo',
    phone: '+963 21 987 6543',
    address: { ar: 'حلب، الموكامبو', en: 'Aleppo, Mogambo' },
    description: { ar: 'أحدث تقنيات زراعة وتقويم الأسنان.', en: 'Latest technologies in dental implants and orthodontics.' },
    image: 'https://picsum.photos/400/300?random=6',
    openHour: 10,
    closeHour: 20,
  },
  {
    id: 7,
    name: { ar: 'مكتب الياسمين للسياحة', en: 'Jasmine Tourism Office' },
    category: 'Office',
    city: 'Damascus',
    phone: '+963 11 555 4321',
    address: { ar: 'دمشق، الشعلان', en: 'Damascus, Al-Shaalan' },
    description: { ar: 'حجوزات طيران وفنادق ورحلات سياحية.', en: 'Flight bookings, hotels, and tourist trips.' },
    image: 'https://picsum.photos/400/300?random=7',
    openHour: 9,
    closeHour: 18,
  },
  {
    id: 8,
    name: { ar: 'صيدلية الرازي', en: 'Al-Razi Pharmacy' },
    category: 'Pharmacy',
    city: 'Damascus',
    phone: '+963 11 777 8888',
    address: { ar: 'دمشق، الميدان', en: 'Damascus, Midan' },
    description: { ar: 'خدمة 24 ساعة لجميع الاحتياجات الطبية.', en: '24-hour service for all medical needs.' },
    image: 'https://picsum.photos/400/300?random=8',
    openHour: 0,
    closeHour: 24,
  },
];