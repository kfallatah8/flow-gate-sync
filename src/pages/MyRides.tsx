
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Car, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface Ride {
  id: string;
  destination: string;
  pickupTime: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  passengers: number;
  pickupLocation: string;
}

const MyRides: React.FC = () => {
  const { t } = useLanguage();
  
  const rides: Ride[] = [
    {
      id: 'R-1001',
      destination: t('destination'),
      pickupTime: '14:30, ' + t('today'),
      status: 'scheduled',
      passengers: 4,
      pickupLocation: t('pickupLocation'),
    },
    {
      id: 'R-1002',
      destination: t('destination'),
      pickupTime: '16:00, ' + t('today'),
      status: 'scheduled',
      passengers: 2,
      pickupLocation: t('pickupLocation'),
    },
    {
      id: 'R-998',
      destination: t('destination'),
      pickupTime: '09:15, ' + t('yesterday'),
      status: 'completed',
      passengers: 3,
      pickupLocation: t('pickupLocation'),
    },
    {
      id: 'R-997',
      destination: t('destination'),
      pickupTime: '13:45, ' + t('yesterday'),
      status: 'cancelled',
      passengers: 5,
      pickupLocation: t('pickupLocation'),
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'scheduled':
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">{t('scheduled')}</Badge>;
      case 'completed':
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">{t('completed')}</Badge>;
      case 'cancelled':
        return <Badge variant="outline" className="bg-red-100 text-red-800 border-red-300">{t('cancelled')}</Badge>;
      default:
        return <Badge>{t('unknown')}</Badge>;
    }
  };

  return (
    <DashboardLayout title={t('myRides')} requiredRole="driver">
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Car className="h-6 w-6" />
            <h1 className="text-2xl font-bold">{t('myRides')}</h1>
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-12rem)]">
          <div className="space-y-4">
            {rides.map((ride) => (
              <Card key={ride.id}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">{ride.destination}</CardTitle>
                  {getStatusBadge(ride.status)}
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{ride.pickupTime}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{ride.pickupLocation}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t('numberOfPassengers')}: {ride.passengers}
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      {t('id')}: {ride.id}
                    </div>
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

export default MyRides;
