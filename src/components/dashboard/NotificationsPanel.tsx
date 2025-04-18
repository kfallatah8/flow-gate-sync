
import React, { useState } from 'react';
import { Bell, Check, Clock, User } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'task' | 'message' | 'system';
}

const demoNotifications: Notification[] = [
  {
    id: '1',
    title: 'New Task Assignment',
    message: 'You have been assigned to Gate 4 for today',
    time: '10 min ago',
    read: false,
    type: 'task'
  },
  {
    id: '2',
    title: 'Message from Supervisor',
    message: 'Please submit your arrival report for Gate 7',
    time: '1 hour ago',
    read: false,
    type: 'message'
  },
  {
    id: '3',
    title: 'System Update',
    message: 'FlowGate system will undergo maintenance tonight',
    time: '3 hours ago',
    read: true,
    type: 'system'
  },
];

interface NotificationsPanelProps {
  onClose: () => void;
}

const NotificationsPanel: React.FC<NotificationsPanelProps> = ({ onClose }) => {
  const [notifications, setNotifications] = useState<Notification[]>(demoNotifications);
  
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };
  
  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };
  
  const getNotificationIcon = (type: Notification['type']) => {
    switch(type) {
      case 'task': return <Clock className="h-5 w-5 text-blue-500" />;
      case 'message': return <User className="h-5 w-5 text-green-500" />;
      case 'system': return <Bell className="h-5 w-5 text-amber-500" />;
    }
  };
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  return (
    <div className="w-80 bg-popover border rounded-md shadow-lg">
      <div className="flex items-center justify-between p-4 border-b">
        <div>
          <h3 className="font-semibold">Notifications</h3>
          <p className="text-sm text-muted-foreground">{unreadCount} unread</p>
        </div>
        <Button variant="ghost" size="sm" onClick={markAllAsRead}>
          Mark all read
        </Button>
      </div>
      
      <ScrollArea className="h-[400px]">
        <div className="p-0">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div key={notification.id} onClick={() => markAsRead(notification.id)}>
                <div className={cn(
                  "flex gap-3 p-3 cursor-pointer transition-colors hover:bg-muted",
                  !notification.read && "bg-muted/50"
                )}>
                  <div className="mt-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <p className="font-medium text-sm">{notification.title}</p>
                      {!notification.read && (
                        <Badge variant="secondary" className="ml-2 h-1.5 w-1.5 rounded-full p-0" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                  </div>
                </div>
                <Separator />
              </div>
            ))
          ) : (
            <div className="p-8 text-center">
              <p className="text-muted-foreground">No notifications</p>
            </div>
          )}
        </div>
      </ScrollArea>
      
      <div className="p-4 border-t">
        <Button variant="outline" size="sm" className="w-full" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default NotificationsPanel;
