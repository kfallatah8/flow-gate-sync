
import React, { useState } from 'react';
import { Send, User, Paperclip } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: Date;
  read: boolean;
  avatar?: string;
}

interface ChatPanelProps {
  onClose: () => void;
}

// Demo messages for the chat
const demoMessages: Message[] = [
  {
    id: '1',
    senderId: '2',
    senderName: 'Supervisor',
    content: 'How is the progress on Gate 4?',
    timestamp: new Date(Date.now() - 60000 * 30), // 30 minutes ago
    read: true,
    avatar: '',
  },
  {
    id: '2',
    senderId: '1',
    senderName: 'Me',
    content: 'Almost done with inspection. Will submit report shortly.',
    timestamp: new Date(Date.now() - 60000 * 25), // 25 minutes ago
    read: true,
    avatar: '',
  },
  {
    id: '3',
    senderId: '2',
    senderName: 'Supervisor',
    content: 'Great! Don\'t forget to include the timestamp photos.',
    timestamp: new Date(Date.now() - 60000 * 20), // 20 minutes ago
    read: true,
    avatar: '',
  },
];

const ChatPanel: React.FC<ChatPanelProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>(demoMessages);
  const [newMessage, setNewMessage] = useState('');
  const { currentUser } = useAuth();
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newMessage.trim() === '') return;
    
    const message: Message = {
      id: Date.now().toString(),
      senderId: currentUser?.id || '1',
      senderName: currentUser?.name || 'Me',
      content: newMessage.trim(),
      timestamp: new Date(),
      read: false,
      avatar: currentUser?.avatar,
    };
    
    setMessages([...messages, message]);
    setNewMessage('');
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <div className="w-80 bg-popover border rounded-md shadow-lg flex flex-col h-[500px]">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="" alt="Supervisor" />
            <AvatarFallback>SV</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-white">Supervisor</h3>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <span className="sr-only">Close</span>
          &times;
        </Button>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => {
            const isMe = message.senderId === currentUser?.id || message.senderId === '1';
            
            return (
              <div 
                key={message.id} 
                className={cn("flex", isMe ? "justify-end" : "justify-start")}
              >
                <div className="flex gap-2 max-w-[80%]">
                  {!isMe && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={message.avatar} alt={message.senderName} />
                      <AvatarFallback>{message.senderName.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  
                  <div>
                    <div className={cn(
                      "rounded-lg p-3",
                      isMe ? "bg-primary text-primary-foreground" : "bg-secondary text-white"
                    )}>
                      <p className="text-sm">{message.content}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 px-1">
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
      
      <div className="p-4 border-t">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <Button 
            type="button" 
            size="icon" 
            variant="ghost" 
            className="shrink-0"
          >
            <Paperclip className="h-4 w-4" />
            <span className="sr-only">Attach file</span>
          </Button>
          <Input
            className="flex-1"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button 
            type="submit" 
            size="icon" 
            className="shrink-0"
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatPanel;
