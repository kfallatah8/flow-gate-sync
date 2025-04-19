
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Truck, Plus } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface Vehicle {
  id: string;
  name: string;
  type: string;
  status: 'available' | 'in-use' | 'maintenance';
  lastService: string;
  currentDriver?: string;
}

const FleetManagement: React.FC = () => {
  const { t } = useLanguage();
  
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
    {
      id: '4',
      name: 'Van 404',
      type: 'Van',
      status: 'available',
      lastService: '2024-03-25',
    },
    {
      id: '5',
      name: 'Bus 505',
      type: 'Bus',
      status: 'in-use',
      lastService: '2024-03-18',
      currentDriver: 'Sarah Smith'
    },
  ];

  const getStatusTranslation = (status: string) => {
    switch (status) {
      case 'available': return t('available');
      case 'in-use': return t('inUse');
      default: return t('maintenance');
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'available': return 'outline' as const;
      case 'in-use': return 'secondary' as const;
      default: return 'destructive' as const;
    }
  };

  return (
    <DashboardLayout title={t('fleetManagement')} requiredRole="manager">
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Truck className="h-6 w-6" />
            <h1 className="text-2xl font-bold">{t('fleetVehicles')}</h1>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            {t('addVehicle')}
          </Button>
        </div>

        <ScrollArea className="h-[calc(100vh-12rem)]">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((vehicle) => (
              <Card key={vehicle.id}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-bold">{vehicle.name}</CardTitle>
                  <Badge
                    variant={getStatusVariant(vehicle.status)}
                  >
                    {getStatusTranslation(vehicle.status)}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-1">
                    <div className="text-sm text-muted-foreground">
                      {t('type')}: {vehicle.type}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t('lastService')}: {vehicle.lastService}
                    </div>
                    {vehicle.currentDriver && (
                      <div className="text-sm text-muted-foreground">
                        {t('currentDriver')}: {vehicle.currentDriver}
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
