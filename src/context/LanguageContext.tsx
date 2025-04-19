
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ar' | 'ur';

// Define translations for the entire app
export const translations = {
  en: {
    // Common
    appName: 'FlowGate Sync',
    dashboard: 'Dashboard',
    tasks: 'Tasks',
    schedule: 'Schedule',
    guidelines: 'Guidelines',
    formSubmissions: 'Form Submissions',
    teamManagement: 'Team Management',
    fleetManagement: 'Fleet Management',
    logout: 'Logout',
    search: 'Search',
    notifications: 'Notifications',
    
    // Form Submissions
    recentSubmissions: 'Recent Submissions',
    id: 'ID',
    type: 'Type',
    submittedBy: 'Submitted By',
    timestamp: 'Timestamp',
    status: 'Status',
    verified: 'Verified',
    pending: 'Pending',
    location: 'Location',
    
    // Tasks
    dailyTasks: 'Daily Tasks',
    due: 'Due',
    assignedTo: 'Assigned to',
    completed: 'Completed',
    inProgress: 'In Progress',
    
    // Team Management
    teamMembers: 'Team Members',
    addMember: 'Add Member',
    role: 'Role',
    lastActive: 'Last Active',
    active: 'Active',
    offline: 'Offline',
    busy: 'Busy',
    
    // Fleet Management
    fleetVehicles: 'Fleet Vehicles',
    addVehicle: 'Add Vehicle',
    available: 'Available',
    inUse: 'In Use',
    maintenance: 'Maintenance',
    lastService: 'Last Service',
    currentDriver: 'Current Driver',
    
    // Guidelines
    vehicleOperation: 'Vehicle Operation',
    passengerSafety: 'Passenger Safety',
    emergencyProcedures: 'Emergency Procedures',
    communicationProtocol: 'Communication Protocol',
    
    // Forms
    arrivalForm: 'Arrival Form',
    departureForm: 'Departure Form',
    submitArrivalForm: 'Submit Arrival Form',
    submitDepartureForm: 'Submit Departure Form',
    note: 'Note',
    notes: 'Notes',
    addNotes: 'Add any observations or issues here',
    photoEvidence: 'Photo Evidence',
    takePhoto: 'Take Photo',
    uploadPhoto: 'Upload',
    capturePhoto: 'Capture Photo',
    submit: 'Submit',
    cancel: 'Cancel',
    ok: 'OK',
    issue: 'Issue',
    critical: 'Critical',
    completedToday: 'Completed today',
    
    // Chat
    typeMessage: 'Type a message...',
    send: 'Send'
  },
  ar: {
    // Common
    appName: 'فلوغيت سينك',
    dashboard: 'لوحة المعلومات',
    tasks: 'المهام',
    schedule: 'الجدول الزمني',
    guidelines: 'الإرشادات',
    formSubmissions: 'نماذج مقدمة',
    teamManagement: 'إدارة الفريق',
    fleetManagement: 'إدارة الأسطول',
    logout: 'تسجيل الخروج',
    search: 'بحث',
    notifications: 'الإشعارات',
    
    // Form Submissions
    recentSubmissions: 'النماذج الأخيرة',
    id: 'المعرف',
    type: 'النوع',
    submittedBy: 'قدمت بواسطة',
    timestamp: 'التاريخ والوقت',
    status: 'الحالة',
    verified: 'تم التحقق',
    pending: 'قيد الانتظار',
    location: 'الموقع',
    
    // Tasks
    dailyTasks: 'المهام اليومية',
    due: 'الموعد',
    assignedTo: 'مكلف إلى',
    completed: 'مكتمل',
    inProgress: 'قيد التنفيذ',
    
    // Team Management
    teamMembers: 'أعضاء الفريق',
    addMember: 'إضافة عضو',
    role: 'الدور',
    lastActive: 'آخر نشاط',
    active: 'نشط',
    offline: 'غير متصل',
    busy: 'مشغول',
    
    // Fleet Management
    fleetVehicles: 'مركبات الأسطول',
    addVehicle: 'إضافة مركبة',
    available: 'متاح',
    inUse: 'قيد الاستخدام',
    maintenance: 'صيانة',
    lastService: 'آخر صيانة',
    currentDriver: 'السائق الحالي',
    
    // Guidelines
    vehicleOperation: 'تشغيل المركبة',
    passengerSafety: 'سلامة الركاب',
    emergencyProcedures: 'إجراءات الطوارئ',
    communicationProtocol: 'بروتوكول الاتصالات',
    
    // Forms
    arrivalForm: 'نموذج الوصول',
    departureForm: 'نموذج المغادرة',
    submitArrivalForm: 'تقديم نموذج الوصول',
    submitDepartureForm: 'تقديم نموذج المغادرة',
    note: 'ملاحظة',
    notes: 'ملاحظات',
    addNotes: 'أضف أي ملاحظات أو مشاكل هنا',
    photoEvidence: 'دليل الصورة',
    takePhoto: 'التقاط صورة',
    uploadPhoto: 'تحميل',
    capturePhoto: 'التقاط الصورة',
    submit: 'إرسال',
    cancel: 'إلغاء',
    ok: 'موافق',
    issue: 'مشكلة',
    critical: 'حرجة',
    completedToday: 'اكتمل اليوم',
    
    // Chat
    typeMessage: 'اكتب رسالة...',
    send: 'إرسال'
  },
  ur: {
    // Common
    appName: 'فلو گیٹ سنک',
    dashboard: 'ڈیش بورڈ',
    tasks: 'کام',
    schedule: 'شیڈول',
    guidelines: 'ہدایات',
    formSubmissions: 'فارم جمع کرائیں',
    teamManagement: 'ٹیم مینجمنٹ',
    fleetManagement: 'فلیٹ مینجمنٹ',
    logout: 'لاگ آؤٹ',
    search: 'تلاش کریں',
    notifications: 'نوٹیفکیشنز',
    
    // Form Submissions
    recentSubmissions: 'حالیہ جمع کرائے',
    id: 'آئی ڈی',
    type: 'قسم',
    submittedBy: 'جمع کرایا',
    timestamp: 'وقت',
    status: 'حالت',
    verified: 'تصدیق شدہ',
    pending: 'زیر التواء',
    location: 'مقام',
    
    // Tasks
    dailyTasks: 'روزانہ کے کام',
    due: 'مقررہ',
    assignedTo: 'تفویض کردہ',
    completed: 'مکمل',
    inProgress: 'جاری ہے',
    
    // Team Management
    teamMembers: 'ٹیم کے ارکان',
    addMember: 'رکن شامل کریں',
    role: 'کردار',
    lastActive: 'آخری سرگرمی',
    active: 'فعال',
    offline: 'آف لائن',
    busy: 'مصروف',
    
    // Fleet Management
    fleetVehicles: 'فلیٹ گاڑیاں',
    addVehicle: 'گاڑی شامل کریں',
    available: 'دستیاب',
    inUse: 'استعمال میں',
    maintenance: 'مرمت',
    lastService: 'آخری سروس',
    currentDriver: 'موجودہ ڈرائیور',
    
    // Guidelines
    vehicleOperation: 'گاڑی چلانے کے اصول',
    passengerSafety: 'مسافر کی حفاظت',
    emergencyProcedures: 'ہنگامی طریقہ کار',
    communicationProtocol: 'مواصلات کا پروٹوکول',
    
    // Forms
    arrivalForm: 'آمد کا فارم',
    departureForm: 'روانگی کا فارم',
    submitArrivalForm: 'آمد کا فارم جمع کرائیں',
    submitDepartureForm: 'روانگی کا فارم جمع کرائیں',
    note: 'نوٹ',
    notes: 'نوٹس',
    addNotes: 'یہاں کوئی مشاہدات یا مسائل شامل کریں',
    photoEvidence: 'تصویری ثبوت',
    takePhoto: 'تصویر لیں',
    uploadPhoto: 'اپ لوڈ کریں',
    capturePhoto: 'تصویر کیپچر کریں',
    submit: 'جمع کرائیں',
    cancel: 'منسوخ کریں',
    ok: 'ٹھیک ہے',
    issue: 'مسئلہ',
    critical: 'نازک',
    completedToday: 'آج مکمل ہوا',
    
    // Chat
    typeMessage: 'پیغام لکھیں...',
    send: 'بھیجیں'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const defaultContext: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
  t: () => '',
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    // @ts-ignore - We know the key might not exist
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};
