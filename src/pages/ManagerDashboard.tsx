
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import StatCards from '@/components/dashboard/StatCards';
import ProjectsOverview from '@/components/dashboard/ProjectsOverview';
import VehicleMap from '@/components/dashboard/VehicleMap';
import GateStatusWidget from '@/components/dashboard/GateStatusWidget';
import RideRequestsWidget from '@/components/dashboard/RideRequestsWidget';
import AnalyticsOverview from '@/components/dashboard/AnalyticsOverview';

const ManagerDashboard: React.FC = () => {
  return (
    <DashboardLayout title="Management Dashboard" requiredRole="manager">
      <div className="mx-auto max-w-7xl space-y-6">
        <StatCards />
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <VehicleMap />
          </div>
          <GateStatusWidget />
          <AnalyticsOverview />
          <RideRequestsWidget />
          <div className="lg:col-span-2">
            <ProjectsOverview />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ManagerDashboard;
