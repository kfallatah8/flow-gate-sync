
import React from 'react';
import { Bell, MessageSquare, Search, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from '@/context/LanguageContext';

const DashboardHeader: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <header className="border-b border-border/40 bg-background">
      <div className="flex h-16 items-center px-4 sm:px-6">
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile logo */}
          <span className="font-bold text-xl text-primary">FG</span>
        </div>
        
        {/* Search bar */}
        <div className="ml-auto flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder={t('search')} 
              className="w-[200px] lg:w-[280px] pl-8 bg-background" 
            />
          </div>
          
          {/* Action buttons */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
            <span className="sr-only">{t('notifications')}</span>
          </Button>
          <Button variant="ghost" size="icon">
            <MessageSquare className="h-5 w-5" />
            <span className="sr-only">{t('messaging')}</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
            <span className="sr-only">{t('settings')}</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
