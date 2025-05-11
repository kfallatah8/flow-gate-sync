
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
    notificationSettings: 'Notification Settings',
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
    
    // New translations
    pageNotFound: 'Page Not Found',
    pageNotFoundMessage: 'Sorry, we couldn\'t find the page you\'re looking for. It might have been moved or doesn\'t exist.',
    backToDashboard: 'Back to Dashboard',
    calendar: 'Calendar',
    legend: 'Legend',
    matchDay: 'Match Day',
    transfer: 'Transfer',
    training: 'Training',
    media: 'Media',
    filterView: 'Filter View',
    filterEvents: 'Filter events',
    allEvents: 'All Events',
    matchDays: 'Match Days',
    airportTransfers: 'Airport Transfers',
    trainingSessions: 'Training Sessions',
    eventSchedule: 'Event Schedule',
    weeklyView: 'Weekly View',
    airport: 'Airport',
    matches: 'Matches',
    filterByDate: 'Filter by date',
    applyFilter: 'Apply Filter',
    clearFilter: 'Clear Filter',
    noEventsFound: 'No events found',
  },
  
  ar: {
    // Common
    appName: 'فلوجيت سينك',
    dashboard: 'لوحة التحكم',
    tasks: 'المهام',
    schedule: 'الجدول الزمني',
    guidelines: 'الإرشادات',
    formSubmissions: 'تقديمات النماذج',
    teamManagement: 'إدارة الفريق',
    fleetManagement: 'إدارة الأسطول',
    logout: 'تسجيل الخروج',
    search: 'بحث',
    notifications: 'الإشعارات',
    settings: 'الإعدادات',
    messaging: 'المراسلات',
    
    // Form Submissions
    recentSubmissions: 'التقديمات الحديثة',
    id: 'رقم التعريف',
    type: 'النوع',
    submittedBy: 'قدم بواسطة',
    timestamp: 'التوقيت',
    status: 'الحالة',
    verified: 'تم التحقق',
    pending: 'قيد الانتظار',
    location: 'الموقع',
    
    // Tasks
    dailyTasks: 'المهام اليومية',
    due: 'موعد التسليم',
    assignedTo: 'مخصص لـ',
    completed: 'مكتمل',
    inProgress: 'قيد التنفيذ',
    morningVehicleInspection: 'فحص المركبة الصباحي',
    gateSecurityCheck: 'فحص أمن البوابة',
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
    ago: 'منذ',
    
    // Fleet Management
    fleetVehicles: 'مركبات الأسطول',
    addVehicle: 'إضافة مركبة',
    available: 'متاح',
    inUse: 'قيد الاستخدام',
    maintenance: 'تحت الصيانة',
    lastService: 'آخر صيانة',
    currentDriver: 'السائق الحالي',
    
    // Guidelines
    vehicleOperation: 'تشغيل المركبة',
    passengerSafety: 'سلامة الركاب',
    emergencyProcedures: 'إجراءات الطوارئ',
    communicationProtocol: 'بروتوكول الاتصال',
    
    // Settings
    accountSettings: 'الحساب',
    notificationSettings: 'إعدادات الإشعارات',
    appearance: 'المظهر',
    profileInformation: 'معلومات الملف الشخصي',
    updateYourAccountInfo: 'تحديث تفاصيل حسابك',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    bio: 'نبذة',
    saveChanges: 'حفظ التغييرات',
    loginSettings: 'إعدادات تسجيل الدخول',
    manageYourLoginInformation: 'تغيير كلمة المرور',
    currentPassword: 'كلمة المرور الحالية',
    newPassword: 'كلمة المرور الجديدة',
    confirmPassword: 'تأكيد كلمة المرور',
    updatePassword: 'تحديث كلمة المرور',
    manageYourNotificationPreferences: 'اختر الإشعارات التي تتلقاها',
    rideAlerts: 'تنبيهات الرحلات',
    receiveAlertsForNewRideAssignments: 'تلقي تنبيهات للرحلات الجديدة المخصصة',
    scheduleChanges: 'تغييرات الجدول',
    notifyMeWhenMyScheduleChanges: 'إبلاغي عند تغيير جدولي',
    teamMessages: 'رسائل الفريق',
    receiveNotificationsForTeamMessages: 'تلقي إشعارات لرسائل الفريق',
    emailNotifications: 'إشعارات البريد الإلكتروني',
    receiveEmailSummariesDailyActivity: 'استلام ملخصات بالبريد الإلكتروني للنشاط اليومي',
    appearanceSettings: 'إعدادات المظهر',
    customizeYourInterface: 'تخصيص مظهر فلوجيت',
    darkMode: 'الوضع الداكن',
    toggleDarkMode: 'تفعيل أو إلغاء الوضع الداكن',
    compactView: 'العرض المضغوط',
    useCompactViewForDashboard: 'استخدام العرض المضغوط للوحة التحكم',

    // Messaging
    searchContacts: 'بحث في جهات الاتصال',
    all: 'الكل',
    unread: 'غير مقروء',
    typeMessage: 'اكتب رسالة...',
    send: 'إرسال',
    selectConversation: 'اختر محادثة',
    chooseContactToStartMessaging: 'اختر جهة اتصال لبدء المراسلة',
    
    // Request Ride
    requestRide: 'طلب رحلة',
    newRideRequest: 'طلب رحلة جديد',
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
    submitRequest: 'تقديم الطلب',
    requestSubmitted: 'تم تقديم الطلب',
    yourRideRequestHasBeenSubmittedSuccessfully: 'تم تقديم طلب الرحلة الخاص بك بنجاح',
    youWillBeNotifiedWhenDriverAssigned: 'سيتم إشعارك عند تعيين سائق',
    submitAnotherRequest: 'تقديم طلب آخر',
    
    // Forms
    arrivalForm: 'نموذج الوصول',
    departureForm: 'نموذج المغادرة',
    submitArrivalForm: 'تقديم نموذج الوصول',
    submitDepartureForm: 'تقديم نموذج المغادرة',
    note: 'ملاحظة',
    notes: 'ملاحظات',
    addNotes: 'أضف أي ملاحظات أو مشاكل هنا',
    photoEvidence: 'دليل صوري',
    takePhoto: 'التقاط صورة',
    uploadPhoto: 'تحميل',
    capturePhoto: 'التقاط صورة',
    submit: 'تقديم',
    cancel: 'إلغاء',
    ok: 'موافق',
    issue: 'مشكلة',
    critical: 'حرجة',
    completedToday: 'اكتمل اليوم',
    
    // Ride status
    scheduled: 'مجدول',
    cancelled: 'ملغي',
    unknown: 'غير معروف',
    myRides: 'رحلاتي',
    passengers: 'الركاب',
    today: 'اليوم',
    yesterday: 'أمس',
    
    // New translations
    pageNotFound: 'الصفحة غير موجودة',
    pageNotFoundMessage: 'عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها. ربما تم نقلها أو أنها غير موجودة.',
    backToDashboard: 'العودة إلى لوحة التحكم',
    calendar: 'التقويم',
    legend: 'المفتاح',
    matchDay: 'يوم المباراة',
    transfer: 'نقل',
    training: 'تدريب',
    media: 'وسائل إعلام',
    filterView: 'تصفية العرض',
    filterEvents: 'تصفية الأحداث',
    allEvents: 'جميع الأحداث',
    matchDays: 'أيام المباريات',
    airportTransfers: 'نقل المطار',
    trainingSessions: 'جلسات تدريبية',
    eventSchedule: 'جدول الأحداث',
    weeklyView: 'عرض أسبوعي',
    airport: 'المطار',
    matches: 'المباريات',
    filterByDate: 'تصفية حسب التاريخ',
    applyFilter: 'تطبيق التصفية',
    clearFilter: 'مسح التصفية',
    noEventsFound: 'لم يتم العثور على أحداث',
  },
  
  ur: {
    // Common
    appName: 'فلو گیٹ سنک',
    dashboard: 'ڈیش بورڈ',
    tasks: 'ٹاسک',
    schedule: 'شیڈول',
    guidelines: 'ہدایات',
    formSubmissions: 'فارم جمع کرائیں',
    teamManagement: 'ٹیم مینجمنٹ',
    fleetManagement: 'فلیٹ مینجمنٹ',
    logout: 'لاگ آؤٹ',
    search: 'تلاش کریں',
    notifications: 'نوٹیفکیشنز',
    settings: 'ترتیبات',
    messaging: 'پیغامات',
    
    // Form Submissions
    recentSubmissions: 'حالیہ جمع کرائے گئے فارم',
    id: 'آئی ڈی',
    type: 'قسم',
    submittedBy: 'جمع کرانے والا',
    timestamp: 'وقت',
    status: 'حالت',
    verified: 'تصدیق شدہ',
    pending: 'زیر التواء',
    location: 'مقام',
    
    // Tasks
    dailyTasks: 'روزانہ کے کام',
    due: 'مقررہ تاریخ',
    assignedTo: 'تفویض شدہ',
    completed: 'مکمل',
    inProgress: 'جاری ہے',
    morningVehicleInspection: 'صبح کی گاڑی انسپکشن',
    gateSecurityCheck: 'گیٹ سیکیورٹی چیک',
    passengerCountReport: 'مسافروں کی تعداد کی رپورٹ',
    driverTeam: 'ڈرائیور ٹیم',
    securityTeam: 'سیکیورٹی ٹیم',
    afcTeam: 'AFC ٹیم',
    
    // Team Management
    teamMembers: 'ٹیم ممبرز',
    addMember: 'ممبر شامل کریں',
    role: 'کردار',
    lastActive: 'آخری فعالیت',
    active: 'فعال',
    offline: 'آف لائن',
    busy: 'مصروف',
    now: 'ابھی',
    ago: 'پہلے',
    
    // Fleet Management
    fleetVehicles: 'فلیٹ کی گاڑیاں',
    addVehicle: 'گاڑی شامل کریں',
    available: 'دستیاب',
    inUse: 'استعمال میں',
    maintenance: 'دیکھ بھال',
    lastService: 'آخری سروس',
    currentDriver: 'موجودہ ڈرائیور',
    
    // Guidelines
    vehicleOperation: 'گاڑی کی آپریشن',
    passengerSafety: 'مسافروں کی حفاظت',
    emergencyProcedures: 'ہنگامی طریقہ کار',
    communicationProtocol: 'مواصلاتی پروٹوکول',
    
    // Settings
    accountSettings: 'اکاؤنٹ',
    notificationSettings: 'نوٹیفکیشن کی ترتیبات',
    appearance: 'ظاہری شکل',
    profileInformation: 'پروفائل کی معلومات',
    updateYourAccountInfo: 'اپنے اکاؤنٹ کی تفصیلات کو اپ ڈیٹ کریں',
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
    manageYourNotificationPreferences: 'وہ نوٹیفکیشنز منتخب کریں جو آپ کو موصول ہوں',
    rideAlerts: 'رائیڈ الرٹس',
    receiveAlertsForNewRideAssignments: 'نئی رائیڈ تفویض کے لیے الرٹس وصول کریں',
    scheduleChanges: 'شیڈول میں تبدیلیاں',
    notifyMeWhenMyScheduleChanges: 'میرے شیڈول میں تبدیلیوں کے بارے میں مجھے مطلع کریں',
    teamMessages: 'ٹیم کے پیغامات',
    receiveNotificationsForTeamMessages: 'ٹیم کے پیغامات کے لیے نوٹیفکیشنز حاصل کریں',
    emailNotifications: 'ای میل نوٹیفکیشنز',
    receiveEmailSummariesDailyActivity: 'روزانہ کی سرگرمیوں کے خلاصے ای میل کے ذریعے وصول کریں',
    appearanceSettings: 'ظاہری شکل کی ترتیبات',
    customizeYourInterface: 'فلو گیٹ کی شکل کو اپنی پسند کے مطابق بنائیں',
    darkMode: 'ڈارک موڈ',
    toggleDarkMode: 'ڈارک موڈ کو آن یا آف کریں',
    compactView: 'کومپیکٹ ویو',
    useCompactViewForDashboard: 'ڈیش بورڈ کے لیے کومپیکٹ ویو استعمال کریں',

    // Messaging
    searchContacts: 'رابطے تلاش کریں',
    all: 'تمام',
    unread: 'نہیں پڑھا گیا',
    typeMessage: 'پیغام ٹائپ کریں...',
    send: 'بھیجیں',
    selectConversation: 'گفتگو منتخب کریں',
    chooseContactToStartMessaging: 'پیغام رسانی شروع کرنے کے لیے رابطہ منتخب کریں',
    
    // Request Ride
    requestRide: 'رائیڈ کی درخواست',
    newRideRequest: 'نئی رائیڈ کی درخواست',
    pickupLocation: 'پک اپ لوکیشن',
    selectPickupLocation: 'پک اپ لوکیشن منتخب کریں',
    destination: 'منزل',
    selectDestination: 'منزل منتخب کریں',
    date: 'تاریخ',
    time: 'وقت',
    numberOfPassengers: 'مسافروں کی تعداد',
    selectNumberOfPassengers: 'مسافروں کی تعداد منتخب کریں',
    specialInstructions: 'خصوصی ہدایات',
    anySpecialRequirementsOrNotes: 'کوئی خاص ضرورت یا نوٹس',
    submitRequest: 'درخواست جمع کریں',
    requestSubmitted: 'درخواست جمع کرا دی گئی',
    yourRideRequestHasBeenSubmittedSuccessfully: 'آپ کی رائیڈ کی درخواست کامیابی سے جمع کرا دی گئی ہے',
    youWillBeNotifiedWhenDriverAssigned: 'ڈرائیور کی تعیناتی ہوتے ہی آپ کو مطلع کیا جائے گا',
    submitAnotherRequest: 'دوسری درخواست جمع کریں',
    
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
    capturePhoto: 'تصویر کھینچیں',
    submit: 'جمع کریں',
    cancel: 'منسوخ کریں',
    ok: 'ٹھیک ہے',
    issue: 'مسئلہ',
    critical: 'نازک',
    completedToday: 'آج مکمل',
    
    // Ride status
    scheduled: 'شیڈول کردہ',
    cancelled: 'منسوخ شدہ',
    unknown: 'نامعلوم',
    myRides: 'میری رائیڈز',
    passengers: 'مسافر',
    today: 'آج',
    yesterday: 'کل',
    
    // New translations
    pageNotFound: 'صفحہ نہیں ملا',
    pageNotFoundMessage: 'معذرت، آپ جس صفحے کی تلاش کر رہے ہیں وہ ہمیں نہیں مل سکا۔ ہو سکتا ہے کہ یہ منتقل کر دیا گیا ہو یا موجود نہ ہو۔',
    backToDashboard: 'ڈیش بورڈ پر واپس جائیں',
    calendar: 'کیلنڈر',
    legend: 'علامات کی تشریح',
    matchDay: 'میچ کا دن',
    transfer: 'منتقلی',
    training: 'ٹریننگ',
    media: 'میڈیا',
    filterView: 'فلٹر ویو',
    filterEvents: 'تقریبات فلٹر کریں',
    allEvents: 'تمام تقریبات',
    matchDays: 'میچ کے دن',
    airportTransfers: 'ہوائی اڈے کی منتقلی',
    trainingSessions: 'ٹریننگ سیشنز',
    eventSchedule: 'تقریب کا شیڈول',
    weeklyView: 'ہفتہ وار ویو',
    airport: 'ہوائی اڈہ',
    matches: 'میچز',
    filterByDate: 'تاریخ سے فلٹر کریں',
    applyFilter: 'فلٹر لگائیں',
    clearFilter: 'فلٹر صاف کریں',
    noEventsFound: 'کوئی تقریب نہیں ملی',
  }
};

// Create context structure
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations[typeof language]];
    if (!translation) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create custom hook
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
