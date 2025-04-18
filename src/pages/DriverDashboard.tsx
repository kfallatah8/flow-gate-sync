
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { MapPin, Route, Calendar, Clock, AlertTriangle } from 'lucide-react';
import TaskActions from '@/components/tasks/TaskActions';

const DriverDashboard: React.FC = () => {
  // Sample data for the driver dashboard
  const currentAssignment = {
    gate: 'Gate 4 - North Entrance',
    shift: '08:00 - 16:00',
    status: 'Active',
    nextLocation: 'Gate 7 - West Entrance at 16:30'
  };
  
  const upcomingShifts = [
    {
      date: 'Tomorrow',
      time: '08:00 - 16:00',
      location: 'Gate 2 - Main Entrance'
    },
    {
      date: 'Thursday, Apr 20',
      time: '12:00 - 20:00',
      location: 'Gate 5 - East Entrance'
    },
    {
      date: 'Friday, Apr 21',
      time: '08:00 - 16:00',
      location: 'Gate 4 - North Entrance'
    }
  ];
  
  const alerts = [
    {
      type: 'maintenance',
      message: 'Gate 3 undergoing maintenance today',
      time: '10 minutes ago'
    },
    {
      type: 'shift',
      message: 'Your Thursday shift time changed to 12:00 - 20:00',
      time: '1 hour ago'
    }
  ];

  return (
    <DashboardLayout title="Driver Dashboard" requiredRole="driver">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {/* Current Assignment */}
          <Card className="xl:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Current Assignment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" /> Location
                  </span>
                  <span className="font-medium">{currentAssignment.gate}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> Shift Time
                  </span>
                  <span className="font-medium">{currentAssignment.shift}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Route className="h-3.5 w-3.5" /> Next Location
                  </span>
                  <span className="font-medium">{currentAssignment.nextLocation}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <AlertTriangle className="h-3.5 w-3.5" /> Alerts
                  </span>
                  <span className="font-medium text-red-500">{alerts.length} New</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Upcoming Shifts */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Upcoming Shifts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingShifts.map((shift, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="bg-muted p-2 rounded-md">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{shift.date}</p>
                      <p className="text-sm text-muted-foreground">{shift.time}</p>
                      <p className="text-sm">{shift.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Task Forms */}
        <div>
          <h2 className="text-lg font-medium mb-4">Task Forms</h2>
          <TaskActions />
        </div>
        
        {/* Alerts */}
        <div>
          <h2 className="text-lg font-medium mb-4">Recent Alerts</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {alerts.map((alert, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="bg-red-50 p-2 rounded-md">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{alert.message}</p>
                      <p className="text-sm text-muted-foreground">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DriverDashboard;
