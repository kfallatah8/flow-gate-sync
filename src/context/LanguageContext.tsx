
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
    settings: 'Settings',
    messaging: 'Messaging',
    
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
    morningVehicleInspection: 'Morning Vehicle Inspection',
    gateSecurityCheck: 'Gate Security Check',
    passengerCountReport: 'Passenger Count Report',
    driverTeam: 'Driver Team',
    securityTeam: 'Security Team',
    afcTeam: 'AFC Team',
    
    // Team Management
    teamMembers: 'Team Members',
    addMember: 'Add Member',
    role: 'Role',
    lastActive: 'Last Active',
    active: 'Active',
    offline: 'Offline',
    busy: 'Busy',
    now: 'Now',
    ago: 'ago',
    
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
    
    // Settings
    accountSettings: 'Account',
    appearance: 'Appearance',
    profileInformation: 'Profile Information',
    updateYourAccountInfo: 'Update your account details',
    name: 'Name',
    email: 'Email',
    bio: 'Bio',
    saveChanges: 'Save Changes',
    loginSettings: 'Login Settings',
    manageYourLoginInformation: 'Change your password',
    currentPassword: 'Current Password',
    newPassword: 'New Password',
    confirmPassword: 'Confirm Password',
    updatePassword: 'Update Password',
    notificationSettings: 'Notification Settings',
    manageYourNotificationPreferences: 'Choose what notifications you receive',
    rideAlerts: 'Ride Alerts',
    receiveAlertsForNewRideAssignments: 'Receive alerts for new ride assignments',
    scheduleChanges: 'Schedule Changes',
    notifyMeWhenMyScheduleChanges: 'Notify me when my schedule changes',
    teamMessages: 'Team Messages',
    receiveNotificationsForTeamMessages: 'Receive notifications for team messages',
    emailNotifications: 'Email Notifications',
    receiveEmailSummariesDailyActivity: 'Receive email summaries of daily activity',
    appearanceSettings: 'Appearance Settings',
    customizeYourInterface: 'Customize how FlowGate looks',
    darkMode: 'Dark Mode',
    toggleDarkMode: 'Toggle dark mode on or off',
    compactView: 'Compact View',
    useCompactViewForDashboard: 'Use compact view for dashboard',

    // Messaging
    searchContacts: 'Search contacts',
    all: 'All',
    unread: 'Unread',
    typeMessage: 'Type a message...',
    send: 'Send',
    selectConversation: 'Select a conversation',
    chooseContactToStartMessaging: 'Choose a contact to start messaging',
    
    // Request Ride
    requestRide: 'Request Ride',
    newRideRequest: 'New Ride Request',
    pickupLocation: 'Pickup Location',
    selectPickupLocation: 'Select pickup location',
    destination: 'Destination',
    selectDestination: 'Select destination',
    date: 'Date',
    time: 'Time',
    numberOfPassengers: 'Number of Passengers',
    selectNumberOfPassengers: 'Select number of passengers',
    specialInstructions: 'Special Instructions',
    anySpecialRequirementsOrNotes: 'Any special requirements or notes',
    submitRequest: 'Submit Request',
    requestSubmitted: 'Request Submitted',
    yourRideRequestHasBeenSubmittedSuccessfully: 'Your ride request has been submitted successfully',
    youWillBeNotifiedWhenDriverAssigned: 'You will be notified when a driver is assigned',
    submitAnotherRequest: 'Submit Another Request',
    
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
    
    // Ride status
    scheduled: 'Scheduled',
    cancelled: 'Cancelled',
    unknown: 'Unknown',
    myRides: 'My Rides',
    passengers: 'Passengers',
    today: 'Today',
    yesterday: 'Yesterday',
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
    settings: 'الإعدادات',
    messaging: 'المراسلات',
    
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
    morningVehicleInspection: 'فحص المركبة الصباحي',
    gateSecurityCheck: 'التحقق من أمن البوابة',
    passengerCountReport: 'تقرير عدد الركاب',
    driverTeam: 'فريق السائقين',
    securityTeam: 'فريق الأمن',
    afcTeam: 'فريق AFC',
    
    // Team Management
    teamMembers: 'أعضاء الفريق',
    addMember: 'إضافة عضو',
    role: 'الدور',
    lastActive: 'آخر نشاط',
    active: 'نشط',
    offline: 'غير متصل',
    busy: 'مشغول',
    now: 'الآن',
    ago: 'مضى',
    
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
    
    // Settings
    accountSettings: 'الحساب',
    appearance: 'المظهر',
    profileInformation: 'معلومات الملف الشخصي',
    updateYourAccountInfo: 'تحديث تفاصيل حسابك',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    bio: 'السيرة الذاتية',
    saveChanges: 'حفظ التغييرات',
    loginSettings: 'إعدادات تسجيل الدخول',
    manageYourLoginInformation: 'تغيير كلمة المرور الخاصة بك',
    currentPassword: 'كلمة المرور الحالية',
    newPassword: 'كلمة المرور الجديدة',
    confirmPassword: 'تأكيد كلمة المرور',
    updatePassword: 'تحديث كلمة المرور',
    notificationSettings: 'إعدادات الإشعارات',
    manageYourNotificationPreferences: 'اختر الإشعارات التي تتلقاها',
    rideAlerts: 'تنبيهات الرحلات',
    receiveAlertsForNewRideAssignments: 'استلام تنبيهات للرحلات الجديدة',
    scheduleChanges: 'تغييرات الجدول',
    notifyMeWhenMyScheduleChanges: 'أبلغني عند تغيير جدولي',
    teamMessages: 'رسائل الفريق',
    receiveNotificationsForTeamMessages: 'استلام إشعارات لرسائل الفريق',
    emailNotifications: 'إشعارات البريد الإلكتروني',
    receiveEmailSummariesDailyActivity: 'استلام ملخصات البريد الإلكتروني للنشاط اليومي',
    appearanceSettings: 'إعدادات المظهر',
    customizeYourInterface: 'تخصيص مظهر فلوغيت',
    darkMode: 'الوضع المظلم',
    toggleDarkMode: 'تبديل الوضع المظلم',
    compactView: 'العرض المدمج',
    useCompactViewForDashboard: 'استخدم العرض المدمج للوحة المعلومات',

    // Messaging
    searchContacts: 'البحث عن جهات الاتصال',
    all: 'الكل',
    unread: 'غير مقروءة',
    typeMessage: 'اكتب رسالة...',
    send: 'إرسال',
    selectConversation: 'اختر محادثة',
    chooseContactToStartMessaging: 'اختر جهة اتصال لبدء المراسلة',
    
    // Request Ride
    requestRide: 'طلب رحلة',
    newRideRequest: 'طلب رحلة جديدة',
    pickupLocation: 'موقع الاستلام',
    selectPickupLocation: 'اختر موقع الاستلام',
    destination: 'الوجهة',
    selectDestination: 'اختر الوجهة',
    date: 'التاريخ',
    time: 'الوقت',
    numberOfPassengers: 'عدد الركاب',
    selectNumberOfPassengers: 'اختر عدد الركاب',
    specialInstructions: 'تعليمات خاصة',
    anySpecialRequirementsOrNotes: 'أي متطلبات أو ملاحظات خاصة',
    submitRequest: 'إرسال الطلب',
    requestSubmitted: 'تم إرسال الطلب',
    yourRideRequestHasBeenSubmittedSuccessfully: 'تم إرسال طلب الرحلة بنجاح',
    youWillBeNotifiedWhenDriverAssigned: 'سيتم إخطارك عند تعيين سائق',
    submitAnotherRequest: 'إرسال طلب آخر',
    
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
    
    // Ride status
    scheduled: 'مجدولة',
    cancelled: 'ملغاة',
    unknown: 'غير معروف',
    myRides: 'رحلاتي',
    passengers: 'الركاب',
    today: 'اليوم',
    yesterday: 'أمس',
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
    settings: 'ترتیبات',
    messaging: 'پیغام رسانی',
    
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
    morningVehicleInspection: 'صبح کی گاڑی کی جانچ',
    gateSecurityCheck: 'گیٹ سکیورٹی چیک',
    passengerCountReport: 'مسافروں کی تعداد کی رپورٹ',
    driverTeam: 'ڈرائیور ٹیم',
    securityTeam: 'سکیورٹی ٹیم',
    afcTeam: 'اے ایف سی ٹیم',
    
    // Team Management
    teamMembers: 'ٹیم کے ارکان',
    addMember: 'رکن شامل کریں',
    role: 'کردار',
    lastActive: 'آخری سرگرمی',
    active: 'فعال',
    offline: 'آف لائن',
    busy: 'مصروف',
    now: 'ابھی',
    ago: 'پہلے',
    
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
    
    // Settings
    accountSettings: 'اکاؤنٹ',
    appearance: 'ظاہری شکل',
    profileInformation: 'پروفائل کی معلومات',
    updateYourAccountInfo: 'اپنے اکاؤنٹ کی تفصیلات اپ ڈیٹ کریں',
    name: 'نام',
    email: 'ای میل',
    bio: 'بایو',
    saveChanges: 'تبدیلیاں محفوظ کریں',
    loginSettings: 'لاگ ان کی ترتیبات',
    manageYourLoginInformation: 'اپنا پاس ورڈ تبدیل کریں',
    currentPassword: 'موجودہ پاس ورڈ',
    newPassword: 'نیا پاس ورڈ',
    confirmPassword: 'پاس ورڈ کی تصدیق کریں',
    updatePassword: 'پاس ورڈ اپ ڈیٹ کریں',
    notificationSettings: 'نوٹیفکیشن کی ترتیبات',
    manageYourNotificationPreferences: 'اپنی نوٹیفکیشن ترجیحات کا انتظام کریں',
    rideAlerts: 'سواری الرٹس',
    receiveAlertsForNewRideAssignments: 'نئی سواری اسائنمنٹس کے لئے الرٹس حاصل کریں',
    scheduleChanges: 'شیڈول میں تبدیلیاں',
    notifyMeWhenMyScheduleChanges: 'مجھے مطلع کریں جب میرا شیڈول تبدیل ہو',
    teamMessages: 'ٹیم کے پیغامات',
    receiveNotificationsForTeamMessages: 'ٹیم کے پیغامات کے لئے نوٹیفکیشنز حاصل کریں',
    emailNotifications: 'ای میل نوٹیفکیشنز',
    receiveEmailSummariesDailyActivity: 'روزانہ کی سرگرمی کے ای میل خلاصے حاصل کریں',
    appearanceSettings: 'ظاہری شکل کی ترتیبات',
    customizeYourInterface: 'فلو گیٹ کی ظاہری شکل تبدیل کریں',
    darkMode: 'ڈارک موڈ',
    toggleDarkMode: 'ڈارک موڈ آن یا آف کریں',
    compactView: 'کمپیکٹ ویو',
    useCompactViewForDashboard: 'ڈیش بورڈ کے لئے کمپیکٹ ویو استعمال کریں',

    // Messaging
    searchContacts: 'روابط تلاش کریں',
    all: 'تمام',
    unread: 'غیر خواندہ',
    typeMessage: 'پیغام لکھیں...',
    send: 'بھیجیں',
    selectConversation: 'ایک گفتگو منتخب کریں',
    chooseContactToStartMessaging: 'پیغام رسانی شروع کرنے کے لئے ایک رابطہ منتخب کریں',
    
    // Request Ride
    requestRide: 'سواری کی درخواست',
    newRideRequest: 'نئی سواری کی درخواست',
    pickupLocation: 'پک اپ کی جگہ',
    selectPickupLocation: 'پک اپ کی جگہ منتخب کریں',
    destination: 'منزل',
    selectDestination: 'منزل منتخب کریں',
    date: 'تاریخ',
    time: 'وقت',
    numberOfPassengers: 'مسافروں کی تعداد',
    selectNumberOfPassengers: 'مسافروں کی تعداد منتخب کریں',
    specialInstructions: 'خصوصی ہدایات',
    anySpecialRequirementsOrNotes: 'کوئی خصوصی ضروریات یا نوٹس',
    submitRequest: 'درخواست جمع کریں',
    requestSubmitted: 'درخواست جمع کرائی گئی',
    yourRideRequestHasBeenSubmittedSuccessfully: 'آپ کی سواری کی درخواست کامیابی سے جمع کرا دی گئی ہے',
    youWillBeNotifiedWhenDriverAssigned: 'ڈرائیور تعینات کرنے پر آپ کو مطلع کیا جائے گا',
    submitAnotherRequest: 'ایک اور درخواست جمع کریں',
    
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
    
    // Ride status
    scheduled: 'شیڈیول',
    cancelled: 'منسوخ',
    unknown: 'نامعلوم',
    myRides: 'میری سواریاں',
    passengers: 'مسافر',
    today: 'آج',
    yesterday: 'کل',
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
