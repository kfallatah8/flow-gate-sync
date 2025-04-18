
import React from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import StatCards from '@/components/dashboard/StatCards';
import ProjectsOverview from '@/components/dashboard/ProjectsOverview';
import VehicleMap from '@/components/dashboard/VehicleMap';
import GateStatusWidget from '@/components/dashboard/GateStatusWidget';
import RideRequestsWidget from '@/components/dashboard/RideRequestsWidget';

const Index = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden md:block md:w-64 lg:w-72">
        <DashboardSidebar />
      </div>
      
      {/* Main content */}
      <div className="flex w-full flex-col">
        <DashboardHeader />
        
        <main className="flex-1 bg-muted/10 p-4 md:p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            {/* Page header */}
            <div>
              <h1 className="text-2xl font-semibold">Welcome to FlowGate</h1>
              <p className="text-muted-foreground">
                Your unified project management and logistics operations platform
              </p>
            </div>
            
            {/* Stat cards */}
            <StatCards />
            
            {/* Main grid layout */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <VehicleMap />
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
        </main>
      </div>
    </div>
  );
};

export default Index;
