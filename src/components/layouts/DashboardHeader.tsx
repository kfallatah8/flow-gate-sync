
import React, { useState } from 'react';
import { Bell, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import UserSidebar from '@/components/dashboard/UserSidebar';
import NotificationsPanel from '@/components/dashboard/NotificationsPanel';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSelector from './LanguageSelector';

interface DashboardHeaderProps {
  title: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title }) => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const { t } = useLanguage();
  
  return (
    <header className="h-14 border-b flex items-center px-4 gap-4 justify-between bg-background">
      <div className="flex items-center gap-2 lg:gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">{t('dashboard')}</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <UserSidebar />
          </SheetContent>
        </Sheet>
        
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
      
      <div className="flex-1 max-w-md mx-4 hidden md:block">
        <div className="relative">
          <Input
            placeholder={t('search')}
            className="w-full pl-8"
          />
          <span className="absolute left-2.5 top-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-50"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <LanguageSelector />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
        >
          <Bell className="h-5 w-5" />
          <span className="sr-only">{t('notifications')}</span>
        </Button>
      </div>
      
      {isNotificationsOpen && (
        <div className="absolute right-4 top-14 z-50">
          <NotificationsPanel onClose={() => setIsNotificationsOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default DashboardHeader;
