
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import StatCards from '@/components/dashboard/StatCards';
import ProjectsOverview from '@/components/dashboard/ProjectsOverview';
import VehicleMap from '@/components/dashboard/VehicleMap';
import GateStatusWidget from '@/components/dashboard/GateStatusWidget';
import RideRequestsWidget from '@/components/dashboard/RideRequestsWidget';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, XCircle, AlertCircle, Users, Truck } from 'lucide-react';

const ManagerDashboard: React.FC = () => {
  // Staff statistics
  const staffStats = [
    { role: 'Drivers', available: 18, total: 25 },
    { role: 'Coordinators', available: 8, total: 10 },
    { role: 'Supervisors', available: 3, total: 5 }
  ];

  return (
    <DashboardLayout title="Management Dashboard" requiredRole="manager">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Stat cards */}
        <StatCards />
        
        {/* Main grid layout */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <VehicleMap />
          </div>
          
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-md font-medium">Staff Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  {staffStats.map((staff, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{staff.role}</span>
                        </div>
                        <div className="font-medium text-sm">
                          {staff.available}/{staff.total} Available
                        </div>
                      </div>
                      <Progress value={(staff.available / staff.total) * 100} className="h-2" />
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>On Duty</span>
                    </div>
                    <span className="font-medium">29</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-red-500" />
                      <span>Off Duty</span>
                    </div>
                    <span className="font-medium">11</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-amber-500" />
                      <span>On Break</span>
                    </div>
                    <span className="font-medium">5</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <GateStatusWidget />
          </div>
          
          <div>
            <RideRequestsWidget />
          </div>
          
          <div className="lg:col-span-2">
            <ProjectsOverview />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ManagerDashboard;
