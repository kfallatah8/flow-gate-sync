
import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Calendar, Clock, FileText, Gauge, Home, LayoutGrid, 
         MapPin, Settings, Truck, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, active, href }) => {
  return (
    <Link to={href}>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-3 pl-3",
          active ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground"
        )}
      >
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </Button>
    </Link>
  );
};

const DashboardSidebar: React.FC = () => {
  return (
    <div className="flex flex-col h-full border-r border-border/40">
      {/* Logo header */}
      <div className="flex h-16 items-center border-b border-border/40 px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-md bg-primary p-1">
            <Activity className="h-6 w-6 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-xl">FlowGate</span>
        </Link>
      </div>
      
      {/* Main navigation */}
      <div className="px-3 py-4 flex-1 overflow-auto">
        <div className="space-y-1">
          <SidebarItem icon={Home} label="Home" href="/" active />
          <SidebarItem icon={LayoutGrid} label="Projects" href="/projects" />
          <SidebarItem icon={Truck} label="Vehicles" href="/vehicles" />
          <SidebarItem icon={MapPin} label="Gates" href="/gates" />
          <SidebarItem icon={Users} label="Teams" href="/teams" />
          <SidebarItem icon={Calendar} label="Schedule" href="/schedule" />
          <SidebarItem icon={Gauge} label="Analytics" href="/analytics" />
        </div>
        
        <div className="mt-8 pt-4 border-t border-border/40">
          <h3 className="px-3 text-sm font-medium text-muted-foreground mb-2">Recent Projects</h3>
          <div className="space-y-1">
            <SidebarItem icon={FileText} label="Sports Tournament" href="/projects/1" />
            <SidebarItem icon={FileText} label="Concert Series" href="/projects/2" />
            <SidebarItem icon={FileText} label="Campus Move-In" href="/projects/3" />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-auto p-3 border-t border-border/40">
        <div className="flex items-center gap-3">
          <SidebarItem icon={Clock} label="Recent" href="/recent" />
          <SidebarItem icon={Settings} label="Settings" href="/settings" />
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
