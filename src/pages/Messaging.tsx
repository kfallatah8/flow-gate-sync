
import React, { useState } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface Message {
  id: number;
  content: string;
  sender: string;
  timestamp: string;
  isMine: boolean;
}

interface Contact {
  id: number;
  name: string;
  role: string;
  avatar?: string;
  lastMessage: string;
  lastMessageTime: string;
  unread: boolean;
}

const Messaging: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedContactId, setSelectedContactId] = useState<number | null>(1);
  const [messageInput, setMessageInput] = useState<string>('');

  const contacts: Contact[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'AFC',
      avatar: '',
      lastMessage: 'When will you arrive at the stadium?',
      lastMessageTime: '10:30 AM',
      unread: true
    },
    {
      id: 2,
      name: 'David Martinez',
      role: 'Manager',
      avatar: '',
      lastMessage: 'Please submit your weekly report',
      lastMessageTime: 'Yesterday',
      unread: false
    },
    {
      id: 3,
      name: 'Aisha Khan',
      role: 'Driver',
      avatar: '',
      lastMessage: 'I\'ll cover your shift tomorrow',
      lastMessageTime: 'Yesterday',
      unread: true
    },
    {
      id: 4,
      name: 'Team Drivers',
      role: 'Group',
      avatar: '',
      lastMessage: 'Meeting at 3 PM today',
      lastMessageTime: 'Monday',
      unread: false
    }
  ];

  const messages: Record<number, Message[]> = {
    1: [
      {
        id: 1,
        content: 'Hi, I need a ride from the hotel to the stadium',
        sender: 'Sarah Johnson',
        timestamp: '10:15 AM',
        isMine: false,
      },
      {
        id: 2,
        content: 'When do you need to be picked up?',
        sender: 'Me',
        timestamp: '10:17 AM',
        isMine: true,
      },
      {
        id: 3,
        content: 'At 11:30 AM, we have a meeting at noon',
        sender: 'Sarah Johnson',
        timestamp: '10:20 AM',
        isMine: false,
      },
      {
        id: 4,
        content: 'I\'ll be there. How many passengers?',
        sender: 'Me',
        timestamp: '10:22 AM',
        isMine: true,
      },
      {
        id: 5,
        content: 'Just me and one colleague',
        sender: 'Sarah Johnson',
        timestamp: '10:25 AM',
        isMine: false,
      },
      {
        id: 6,
        content: 'Great! I\'ll pick you up at the main entrance',
        sender: 'Me',
        timestamp: '10:26 AM',
        isMine: true,
      },
      {
        id: 7,
        content: 'When will you arrive at the stadium?',
        sender: 'Sarah Johnson',
        timestamp: '10:30 AM',
        isMine: false,
      },
    ],
    2: [
      {
        id: 1,
        content: 'Don\'t forget to submit your weekly report',
        sender: 'David Martinez',
        timestamp: 'Yesterday, 3:45 PM',
        isMine: false,
      },
      {
        id: 2,
        content: 'I\'ll have it ready by tomorrow morning',
        sender: 'Me',
        timestamp: 'Yesterday, 4:00 PM',
        isMine: true,
      },
      {
        id: 3,
        content: 'Please submit your weekly report',
        sender: 'David Martinez',
        timestamp: 'Yesterday, 5:30 PM',
        isMine: false,
      },
    ],
    3: [
      {
        id: 1,
        content: 'Are you available to cover my shift tomorrow? I have a doctor\'s appointment',
        sender: 'Aisha Khan',
        timestamp: 'Yesterday, 10:15 AM',
        isMine: false,
      },
      {
        id: 2,
        content: 'What time is your shift?',
        sender: 'Me',
        timestamp: 'Yesterday, 10:30 AM',
        isMine: true,
      },
      {
        id: 3,
        content: '9 AM to 5 PM',
        sender: 'Aisha Khan',
        timestamp: 'Yesterday, 10:35 AM',
        isMine: false,
      },
      {
        id: 4,
        content: 'Yes, I can cover for you. No problem!',
        sender: 'Me',
        timestamp: 'Yesterday, 10:40 AM',
        isMine: true,
      },
      {
        id: 5,
        content: 'Thank you so much! I\'ll cover your shift next week if needed',
        sender: 'Aisha Khan',
        timestamp: 'Yesterday, 10:45 AM',
        isMine: false,
      },
      {
        id: 6,
        content: 'I\'ll cover your shift tomorrow',
        sender: 'Me',
        timestamp: 'Yesterday, 11:00 AM',
        isMine: true,
      },
    ],
    4: [
      {
        id: 1,
        content: 'Team meeting today in the conference room',
        sender: 'David Martinez',
        timestamp: 'Monday, 9:00 AM',
        isMine: false,
      },
      {
        id: 2,
        content: 'What time?',
        sender: 'Aisha Khan',
        timestamp: 'Monday, 9:05 AM',
        isMine: false,
      },
      {
        id: 3,
        content: '3 PM. Don\'t be late.',
        sender: 'David Martinez',
        timestamp: 'Monday, 9:10 AM',
        isMine: false,
      },
      {
        id: 4,
        content: 'I\'ll be there',
        sender: 'Me',
        timestamp: 'Monday, 9:15 AM',
        isMine: true,
      },
      {
        id: 5,
        content: 'Meeting at 3 PM today',
        sender: 'David Martinez',
        timestamp: 'Monday, 2:00 PM',
        isMine: false,
      },
    ],
  };

  const handleSendMessage = () => {
    if (messageInput.trim() !== '' && selectedContactId) {
      // In a real app, this would send the message to an API
      setMessageInput('');
    }
  };

  const selectedContactMessages = selectedContactId ? messages[selectedContactId] : [];
  
  return (
    <DashboardLayout title={t('messaging')}>
      <div className="container mx-auto p-6">
        <Card className={`grid ${language === 'ar' ? 'grid-cols-1' : ''} md:grid-cols-3 h-[calc(100vh-12rem)] overflow-hidden`}>
          {/* Contacts sidebar */}
          <div className={`border-r ${language === 'ar' ? 'md:border-l md:border-r-0' : ''}`}>
            <div className="p-4 border-b">
              <div className="relative">
                <Search className={`absolute top-2.5 ${language === 'ar' ? 'right-2.5' : 'left-2.5'} h-4 w-4 text-muted-foreground`} />
                <Input 
                  placeholder={t('searchContacts')} 
                  className={`${language === 'ar' ? 'pr-8' : 'pl-8'}`}
                />
              </div>
            </div>
            <Tabs defaultValue="all">
              <div className="px-4 py-2">
                <TabsList className="w-full">
                  <TabsTrigger value="all" className="flex-1">{t('all')}</TabsTrigger>
                  <TabsTrigger value="unread" className="flex-1">{t('unread')}</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="all" className="m-0">
                <ScrollArea className="h-[calc(100vh-16rem)]">
                  {contacts.map((contact) => (
                    <div 
                      key={contact.id}
                      onClick={() => setSelectedContactId(contact.id)}
                      className={`p-3 cursor-pointer hover:bg-accent ${selectedContactId === contact.id ? 'bg-accent' : ''}`}
                    >
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={contact.avatar} />
                          <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center">
                            <p className="font-medium truncate">{contact.name}</p>
                            <span className="text-xs text-muted-foreground">{contact.lastMessageTime}</span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{contact.lastMessage}</p>
                        </div>
                        {contact.unread && (
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </TabsContent>
              <TabsContent value="unread" className="m-0">
                <ScrollArea className="h-[calc(100vh-16rem)]">
                  {contacts.filter(c => c.unread).map((contact) => (
                    <div 
                      key={contact.id}
                      onClick={() => setSelectedContactId(contact.id)}
                      className={`p-3 cursor-pointer hover:bg-accent ${selectedContactId === contact.id ? 'bg-accent' : ''}`}
                    >
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={contact.avatar} />
                          <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center">
                            <p className="font-medium truncate">{contact.name}</p>
                            <span className="text-xs text-muted-foreground">{contact.lastMessageTime}</span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{contact.lastMessage}</p>
                        </div>
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Chat area */}
          <div className="col-span-2 flex flex-col">
            {selectedContactId ? (
              <>
                <div className="p-4 border-b flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>
                        {contacts.find(c => c.id === selectedContactId)?.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">
                        {contacts.find(c => c.id === selectedContactId)?.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {contacts.find(c => c.id === selectedContactId)?.role}
                      </p>
                    </div>
                  </div>
                </div>
                
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {selectedContactMessages.map((message) => (
                      <div 
                        key={message.id} 
                        className={`flex ${message.isMine ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`max-w-[80%] rounded-lg px-4 py-2 ${
                            message.isMine 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-muted'
                          }`}
                        >
                          <p>{message.content}</p>
                          <p className={`text-xs ${
                            message.isMine 
                              ? 'text-primary-foreground/70' 
                              : 'text-muted-foreground'
                          } mt-1`}>
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input 
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      placeholder={t('typeMessage')}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleSendMessage();
                        }
                      }}
                    />
                    <Button 
                      onClick={handleSendMessage}
                      disabled={!messageInput.trim()}
                      size="icon"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-center p-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">{t('selectConversation')}</h3>
                  <p className="text-muted-foreground">
                    {t('chooseContactToStartMessaging')}
                  </p>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Messaging;
