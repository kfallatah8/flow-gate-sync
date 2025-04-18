
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  CalendarDays, 
  CheckSquare, 
  FileText, 
  Activity, 
  Home, 
  Truck, 
  MapPin, 
  Users, 
  Settings, 
  PanelLeft,
  FileInput,
  MessageSquare 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { UserRole } from '@/context/AuthContext';
import { useAuth } from '@/context/AuthContext';

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
  roles: UserRole[];
}

const UserSidebar: React.FC = () => {
  const { currentUser } = useAuth();
  const location = useLocation();
  const [collapsed, setCollapsed] = React.useState(false);

  if (!currentUser) return null;

  const role = currentUser?.role || null;

  const navItems: NavItem[] = [
    { 
      icon: Home, 
      label: 'Overview', 
      href: `/${role}`,
      roles: ['manager', 'afc', 'driver'] 
    },
    { 
      icon: Users, 
      label: 'Team Management', 
      href: '/team',
      roles: ['manager'] 
    },
    { 
      icon: Truck, 
      label: 'Fleet Management', 
      href: '/fleet',
      roles: ['manager'] 
    },
    { 
      icon: FileInput, 
      label: 'Form Submissions', 
      href: '/form-submissions',
      roles: ['manager'] 
    },
    { 
      icon: MessageSquare, 
      label: 'Messaging', 
      href: '/messaging',
      roles: ['manager'] 
    },
    { 
      icon: MapPin, 
      label: 'Request Ride', 
      href: '/request',
      roles: ['afc'] 
    },
    { 
      icon: Truck, 
      label: 'My Rides', 
      href: '/my-rides',
      roles: ['driver'] 
    },
    { 
      icon: CalendarDays, 
      label: 'Schedule', 
      href: '/schedule',
      roles: ['manager', 'afc', 'driver'] 
    },
    { 
      icon: FileText, 
      label: 'Guidelines', 
      href: '/guidelines',
      roles: ['manager', 'afc', 'driver'] 
    },
    { 
      icon: CheckSquare, 
      label: 'Daily Tasks', 
      href: '/tasks',
      roles: ['driver', 'manager'] 
    },
    { 
      icon: Settings, 
      label: 'Settings', 
      href: '/settings',
      roles: ['manager', 'afc', 'driver'] 
    }
  ];

  // Filter items based on user role
  const filteredNavItems = navItems.filter(item => item.roles.includes(role as UserRole));

  return (
    <div className={cn(
      "flex flex-col h-full border-r border-border/40 transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Logo header */}
      <div className="flex h-16 items-center border-b border-border/40 px-3">
        <Link to={`/${role}`} className="flex items-center gap-2">
          <div className="rounded-md bg-primary p-1">
            <Activity className="h-6 w-6 text-primary-foreground" strokeWidth={2.5} />
          </div>
          {!collapsed && <span className="font-bold text-xl">FlowGate</span>}
        </Link>
        <Button 
          variant="ghost" 
          size="icon" 
          className="ml-auto" 
          onClick={() => setCollapsed(!collapsed)}
        >
          <PanelLeft className={cn("h-5 w-5", collapsed && "rotate-180")} />
        </Button>
      </div>
      
      {/* Main navigation */}
      <div className="px-3 py-4 flex-1 overflow-auto">
        <nav className="space-y-1">
          {filteredNavItems.map((item) => (
            <Link key={item.href} to={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 mb-1",
                  location.pathname === item.href ? "bg-accent text-accent-foreground" : ""
                )}
              >
                <item.icon className="h-5 w-5" />
                {!collapsed && <span>{item.label}</span>}
              </Button>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default UserSidebar;
