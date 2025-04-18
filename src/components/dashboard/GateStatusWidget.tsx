
import React from 'react';
import { ArrowUpRight, BarChart2, Clock, MoreHorizontal, UsersRound } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface GateProps {
  id: string;
  name: string;
  queueLength: number;
  trend: 'up' | 'down' | 'stable';
  status: 'open' | 'closed' | 'limited';
  nextDeparture: string;
  personnel: number;
}

const GateStatusWidget: React.FC = () => {
  const gates: GateProps[] = [
    { 
      id: "gate-1", 
      name: "Gate 6 - Main Entry", 
      queueLength: 12, 
      trend: 'up', 
      status: 'open', 
      nextDeparture: '5 min',
      personnel: 4
    },
    { 
      id: "gate-2", 
      name: "Gate 4 - North Access", 
      queueLength: 5, 
      trend: 'down', 
      status: 'open', 
      nextDeparture: '12 min',
      personnel: 2 
    },
    { 
      id: "gate-3", 
      name: "Gate 2 - VIP Entry", 
      queueLength: 0, 
      trend: 'stable', 
      status: 'limited', 
      nextDeparture: '20 min',
      personnel: 3 
    }
  ];

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-md font-medium">Gate Status</CardTitle>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <BarChart2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          {gates.map((gate) => (
            <div key={gate.id} className="rounded-lg border bg-card p-3 text-card-foreground shadow-sm">
              <div className="flex justify-between">
                <span className="font-medium">{gate.name}</span>
                <StatusBadge status={gate.status} />
              </div>
              <div className="mt-2 grid grid-cols-3 gap-1 text-sm">
                <div className="space-y-1">
                  <div className="text-muted-foreground">Queue</div>
                  <div className="flex items-center">
                    <span className="font-medium">{gate.queueLength}</span>
                    <QueueTrend trend={gate.trend} />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-muted-foreground">Next</div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="font-medium">{gate.nextDeparture}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-muted-foreground">Staff</div>
                  <div className="flex items-center gap-1">
                    <UsersRound className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="font-medium">{gate.personnel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const StatusBadge: React.FC<{ status: 'open' | 'closed' | 'limited' }> = ({ status }) => {
  const statusColors = {
    open: "bg-green-100 text-green-700",
    closed: "bg-red-100 text-red-700",
    limited: "bg-amber-100 text-amber-700",
  };
  
  const statusText = {
    open: "Open",
    closed: "Closed",
    limited: "Limited",
  };
  
  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusColors[status]}`}>
      {statusText[status]}
    </span>
  );
};

const QueueTrend: React.FC<{ trend: 'up' | 'down' | 'stable' }> = ({ trend }) => {
  if (trend === 'up') {
    return <ArrowUpRight className="ml-1 h-4 w-4 text-red-500" />;
  } else if (trend === 'down') {
    return <ArrowUpRight className="ml-1 h-4 w-4 text-green-500 rotate-90" />;
  }
  return <span className="ml-1 w-4 inline-block text-center text-muted-foreground">-</span>;
};

export default GateStatusWidget;
