
import React from 'react';
import { Car, MoreHorizontal, UserRound } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface RideRequestProps {
  id: string;
  passengerName: string;
  destination: string;
  eta: string;
  vehicle: string;
  status: 'pending' | 'assigned' | 'completed';
  progress: number;
}

const RideRequestsWidget: React.FC = () => {
  const rideRequests: RideRequestProps[] = [
    {
      id: "ride-1",
      passengerName: "Ahmed K.",
      destination: "South Stadium",
      eta: "4 min",
      vehicle: "Van #103",
      status: 'assigned',
      progress: 75
    },
    {
      id: "ride-2",
      passengerName: "Sarah T.",
      destination: "Media Center",
      eta: "Waiting",
      vehicle: "Pending",
      status: 'pending',
      progress: 0
    },
    {
      id: "ride-3",
      passengerName: "Michael R.",
      destination: "East Entrance",
      eta: "2 min",
      vehicle: "Car #87",
      status: 'assigned',
      progress: 90
    }
  ];

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-md font-medium">Ride Requests</CardTitle>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {rideRequests.map((ride) => (
            <div key={ride.id} className="flex flex-col space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="bg-accent/50 p-1.5 rounded-md">
                    <UserRound className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">{ride.passengerName}</div>
                    <div className="text-xs text-muted-foreground">{ride.destination}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm flex items-center gap-1 justify-end">
                    <Car className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="font-medium">{ride.vehicle}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">ETA: {ride.eta}</div>
                </div>
              </div>
              <Progress 
                value={ride.progress} 
                className={`h-1.5 ${ride.status === 'pending' ? 'bg-amber-500' : ''}`}
              />
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-3 text-sm">
          View All Requests
        </Button>
      </CardContent>
    </Card>
  );
};

export default RideRequestsWidget;
