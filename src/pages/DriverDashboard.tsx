
import React, { useState } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Clock, MapPin, Users, Car, CheckCircle2, Calendar, Route, CheckCheck, AlertTriangle, Clock8 } from 'lucide-react';

const DriverDashboard: React.FC = () => {
  const [statusMode, setStatusMode] = useState<'available' | 'break' | 'offline'>('available');
  
  // Upcoming rides for the driver
  const upcomingRides = [
    {
      id: 'trip-1',
      time: '11:30 AM',
      pickup: 'Team Hotel',
      destination: 'Okaz Stadium',
      passengers: 'Team Staff (3)',
      notes: 'VIP entrance access required',
      status: 'upcoming'
    },
    {
      id: 'trip-2',
      time: '2:45 PM',
      pickup: 'Okaz Stadium',
      destination: 'Team Hotel',
      passengers: 'Team Staff (3)',
      notes: '',
      status: 'upcoming'
    },
    {
      id: 'trip-3',
      time: '5:15 PM',
      pickup: 'Media Center',
      destination: 'KFS Stadium',
      passengers: 'Media Personnel (2)',
      notes: 'Equipment transport',
      status: 'upcoming'
    }
  ];
  
  // Current or next ride
  const currentRide = {
    id: 'current-1',
    pickup: 'Airport Terminal 2',
    destination: 'Team Hotel',
    passengers: 'AFC Delegation (4)',
    pickupTime: '9:30 AM',
    status: 'in-progress',
    progress: 65,
    eta: '12 min'
  };
  
  // Daily tasks completion
  const tasksCompleted = 3;
  const totalTasks = 5;
  
  const handleStatusChange = (status: 'available' | 'break' | 'offline') => {
    setStatusMode(status);
  };
  
  return (
    <DashboardLayout title="Driver Dashboard" requiredRole="driver">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Status and Current Ride */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Driver Status Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">My Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-6">
                <Button 
                  variant={statusMode === 'available' ? 'default' : 'outline'} 
                  onClick={() => handleStatusChange('available')}
                  className="flex-1 mr-2"
                >
                  Available
                </Button>
                <Button 
                  variant={statusMode === 'break' ? 'default' : 'outline'} 
                  onClick={() => handleStatusChange('break')}
                  className="flex-1 mr-2"
                >
                  On Break
                </Button>
                <Button 
                  variant={statusMode === 'offline' ? 'default' : 'outline'} 
                  onClick={() => handleStatusChange('offline')}
                  className="flex-1"
                >
                  Offline
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Hours Today:</span>
                  </div>
                  <span className="font-medium">4h 35m</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Route className="h-4 w-4 text-muted-foreground" />
                    <span>Trips Today:</span>
                  </div>
                  <span className="font-medium">3/7</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCheck className="h-4 w-4 text-muted-foreground" />
                    <span>Tasks Completed:</span>
                  </div>
                  <span className="font-medium">{tasksCompleted}/{totalTasks}</span>
                </div>
              </div>
              
              <div className="mt-6">
                <Button variant="outline" className="w-full">
                  View Full Schedule
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Current/Next Ride Card */}
          <Card className="md:col-span-2">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">Current Ride</CardTitle>
                <Badge>{currentRide.status === 'in-progress' ? 'In Progress' : 'Next Trip'}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <div className="text-sm text-muted-foreground">Pickup</div>
                    <div className="font-medium flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> 
                      {currentRide.pickup}
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <Route className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Destination</div>
                    <div className="font-medium flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> 
                      {currentRide.destination}
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 pt-2">
                  <div>
                    <div className="text-sm text-muted-foreground">Passengers</div>
                    <div className="font-medium flex items-center gap-1">
                      <Users className="h-4 w-4" /> 
                      {currentRide.passengers}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Pickup Time</div>
                    <div className="font-medium flex items-center gap-1">
                      <Clock className="h-4 w-4" /> 
                      {currentRide.pickupTime}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">ETA</div>
                    <div className="font-medium flex items-center gap-1">
                      <Clock8 className="h-4 w-4" /> 
                      {currentRide.eta}
                    </div>
                  </div>
                </div>
                
                <div className="pt-2">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Trip Progress</span>
                    <span className="text-sm font-medium">{currentRide.progress}%</span>
                  </div>
                  <Progress value={currentRide.progress} className="h-2" />
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button className="flex-1">
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Mark Complete
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Report Issue
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Upcoming Rides */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
            <CardDescription>Your upcoming rides for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingRides.map((ride, i) => (
                <div key={ride.id} className="flex items-start p-3 border rounded-lg bg-muted/30">
                  <div className="mr-4 bg-primary/10 p-2 rounded-md">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-medium">{ride.time}</h4>
                      <Badge variant="outline">{ride.status}</Badge>
                    </div>
                    <div className="grid md:grid-cols-3 gap-2">
                      <div>
                        <div className="text-sm text-muted-foreground">Pickup</div>
                        <div className="text-sm font-medium">{ride.pickup}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Destination</div>
                        <div className="text-sm font-medium">{ride.destination}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Passengers</div>
                        <div className="text-sm font-medium">{ride.passengers}</div>
                      </div>
                    </div>
                    {ride.notes && (
                      <div className="mt-2 text-xs text-muted-foreground">{ride.notes}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="outline" className="w-full mt-4">
              <Calendar className="h-4 w-4 mr-2" />
              View Full Schedule
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DriverDashboard;
