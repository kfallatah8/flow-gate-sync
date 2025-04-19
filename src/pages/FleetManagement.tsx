
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Truck, Plus } from 'lucide-react';

interface Vehicle {
  id: string;
  name: string;
  type: string;
  status: 'available' | 'in-use' | 'maintenance';
  lastService: string;
  currentDriver?: string;
}

const vehicles: Vehicle[] = [
  {
    id: '1',
    name: 'Bus 101',
    type: 'Bus',
    status: 'available',
    lastService: '2024-03-15',
  },
  {
    id: '2',
    name: 'Van 202',
    type: 'Van',
    status: 'in-use',
    lastService: '2024-03-10',
    currentDriver: 'John Doe'
  },
  {
    id: '3',
    name: 'Bus 303',
    type: 'Bus',
    status: 'maintenance',
    lastService: '2024-03-01',
  },
];

const FleetManagement: React.FC = () => {
  return (
    <DashboardLayout title="Fleet Management" requiredRole="manager">
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Truck className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Fleet Vehicles</h1>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Vehicle
          </Button>
        </div>

        <ScrollArea className="h-[calc(100vh-12rem)]">
          <div className="grid gap-4">
            {vehicles.map((vehicle) => (
              <Card key={vehicle.id}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-bold">{vehicle.name}</CardTitle>
                  <Badge
                    variant={
                      vehicle.status === 'available' ? 'success' :
                      vehicle.status === 'in-use' ? 'warning' : 'destructive'
                    }
                  >
                    {vehicle.status}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-1">
                    <div className="text-sm text-muted-foreground">
                      Type: {vehicle.type}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Last Service: {vehicle.lastService}
                    </div>
                    {vehicle.currentDriver && (
                      <div className="text-sm text-muted-foreground">
                        Current Driver: {vehicle.currentDriver}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </DashboardLayout>
  );
};

export default FleetManagement;
