
import React from 'react';
import { ArrowUpRight, Calendar, Clock, Users, Truck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: {
    value: string;
    direction: 'up' | 'down';
  };
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, trend }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">{title}</span>
          <div className="rounded-md bg-accent/50 p-2">
            {icon}
          </div>
        </div>
        <div className="mt-3 flex items-baseline">
          <span className="text-2xl font-semibold">{value}</span>
          {trend && (
            <div className={`ml-2 flex items-center text-sm ${trend.direction === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              <ArrowUpRight className={`h-4 w-4 ${trend.direction === 'down' && 'rotate-90'}`} />
              <span>{trend.value}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const StatCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Active Projects"
        value="12"
        icon={<Calendar className="h-5 w-5 text-primary" />}
        trend={{ value: "2", direction: "up" }}
      />
      <StatCard
        title="Active Vehicles"
        value="8"
        icon={<Truck className="h-5 w-5 text-primary" />}
        trend={{ value: "1", direction: "down" }}
      />
      <StatCard
        title="Team Members"
        value="24"
        icon={<Users className="h-5 w-5 text-primary" />}
      />
      <StatCard
        title="Average Wait Time"
        value="4:32"
        icon={<Clock className="h-5 w-5 text-primary" />}
        trend={{ value: "1:12", direction: "down" }}
      />
    </div>
  );
};

export default StatCards;
