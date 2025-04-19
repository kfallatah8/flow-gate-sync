
import React, { useState } from 'react';
import { Bell, LogOut, MessageSquare, Search, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from 'react-router-dom';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import NotificationsPanel from './NotificationsPanel';
import ChatPanel from './ChatPanel';
import LanguageSelector from '../layouts/LanguageSelector';

interface UserHeaderProps {
  title?: string;
}

const UserHeader: React.FC<UserHeaderProps> = ({ title = "Dashboard" }) => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  
  if (!currentUser) {
    navigate('/login');
    return null;
  }
  
  return (
    <header className="border-b border-border/40 bg-background">
      <div className="flex h-16 items-center px-4 sm:px-6">
        <div className="flex items-center gap-2 lg:hidden">
          <span className="font-bold text-xl text-primary">FG</span>
        </div>
        
        <div className="ml-4">
          <h1 className="text-lg font-medium">{title}</h1>
          <p className="text-sm text-muted-foreground">Welcome, {currentUser.name}</p>
        </div>
        
        <div className="ml-auto flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search..." 
              className="w-[200px] lg:w-[280px] pl-8 bg-background" 
            />
          </div>
          
          <LanguageSelector />
          
          <Popover open={notificationsOpen} onOpenChange={setNotificationsOpen}>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0" align="end">
              <NotificationsPanel onClose={() => setNotificationsOpen(false)} />
            </PopoverContent>
          </Popover>
          
          <Popover open={chatOpen} onOpenChange={setChatOpen}>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0" align="end">
              <ChatPanel onClose={() => setChatOpen(false)} />
            </PopoverContent>
          </Popover>
          
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={logout}>
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
