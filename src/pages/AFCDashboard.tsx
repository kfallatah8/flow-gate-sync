import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Clock, CalendarDays, MapPin, Users, Car, Check, Clock8, Route } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/LanguageContext';

const AFCDashboard: React.FC = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  
  const form = useForm({
    defaultValues: {
      pickup: '',
      destination: '',
      passengers: '1',
      dateTime: '',
      notes: '',
    }
  });

  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: t('requestSubmitted'),
      description: t('yourRideRequestHasBeenSubmittedSuccessfully'),
    });
    form.reset();
  };
  
  const myRides = [
    {
      id: 'ride-1',
      date: t('today'),
      time: '2:30 PM',
      destination: 'Okaz Stadium',
      status: 'confirmed',
      driver: 'Ahmed K.',
      vehicle: 'Van #103'
    },
    {
      id: 'ride-2',
      date: t('tomorrow'),
      time: '9:15 AM',
      destination: 'KFS Stadium',
      status: 'pending',
      driver: t('pending'),
      vehicle: 'TBD'
    },
    {
      id: 'ride-3',
      date: 'Apr 22, 2025',
      time: '4:00 PM',
      destination: 'Airport Terminal 2',
      status: 'confirmed',
      driver: 'Saeed M.',
      vehicle: 'Car #87'
    }
  ];

  return (
    <DashboardLayout title={t('requestRide')} requiredRole="afc">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="grid gap-6 md:grid-cols-5">
          {/* Request Form Section - 3 columns on medium+ screens */}
          <div className="md:col-span-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{t('requestRide')}</CardTitle>
                <CardDescription>
                  {t('newRideRequest')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="stadium" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="stadium">{t('matches')}</TabsTrigger>
                    <TabsTrigger value="airport">{t('airport')}</TabsTrigger>
                    <TabsTrigger value="custom">{t('customLocation')}</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="stadium" className="pt-4 space-y-4">
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="pickup">{t('pickupLocation')}</Label>
                          <Select defaultValue="hotel">
                            <SelectTrigger id="pickup">
                              <SelectValue placeholder={t('selectPickupLocation')} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="hotel">{t('teamManagement')} Hotel</SelectItem>
                              <SelectItem value="training">{t('training')} Facility</SelectItem>
                              <SelectItem value="media">{t('media')} Center</SelectItem>
                              <SelectItem value="custom">{t('location')}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="destination">{t('destination')}</Label>
                          <Select defaultValue="okaz">
                            <SelectTrigger id="destination">
                              <SelectValue placeholder={t('selectDestination')} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="okaz">Okaz Stadium</SelectItem>
                              <SelectItem value="kfs">KFS Stadium</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="passengers">{t('numberOfPassengers')}</Label>
                          <Select defaultValue="1">
                            <SelectTrigger id="passengers">
                              <SelectValue placeholder={t('selectNumberOfPassengers')} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 {t('passengers')}</SelectItem>
                              <SelectItem value="2">2 {t('passengers')}</SelectItem>
                              <SelectItem value="3">3 {t('passengers')}</SelectItem>
                              <SelectItem value="4">4+ {t('passengers')}</SelectItem>
                              <SelectItem value="team">{t('teamManagement')}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="datetime">{t('pickupLocation')} {t('date')} & {t('time')}</Label>
                          <Input
                            id="datetime"
                            type="datetime-local"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="notes">{t('notes')}</Label>
                        <Input
                          id="notes"
                          placeholder={t('anySpecialRequirementsOrNotes')}
                        />
                      </div>
                      
                      <Button type="submit" className="w-full">
                        {t('requestRide')}
                      </Button>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="airport" className="pt-4 space-y-4">
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="airport-type">{t('type')}</Label>
                          <Select defaultValue="arrival">
                            <SelectTrigger id="airport-type">
                              <SelectValue placeholder={t('selectDestination')} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="arrival">{t('airport')} {t('pickupLocation')}</SelectItem>
                              <SelectItem value="departure">{t('airport')} Drop-off</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="airport-terminal">Terminal</Label>
                          <Select defaultValue="t1">
                            <SelectTrigger id="airport-terminal">
                              <SelectValue placeholder="Select terminal" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="t1">Terminal 1</SelectItem>
                              <SelectItem value="t2">Terminal 2</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="airport-passengers">{t('numberOfPassengers')}</Label>
                          <Select defaultValue="1">
                            <SelectTrigger id="airport-passengers">
                              <SelectValue placeholder={t('selectNumberOfPassengers')} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 {t('passengers')}</SelectItem>
                              <SelectItem value="2">2 {t('passengers')}</SelectItem>
                              <SelectItem value="3">3 {t('passengers')}</SelectItem>
                              <SelectItem value="4">4+ {t('passengers')}</SelectItem>
                              <SelectItem value="team">{t('teamManagement')}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="airport-datetime">{t('date')} & {t('time')}</Label>
                          <Input
                            id="airport-datetime"
                            type="datetime-local"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="airport-notes">{t('notes')}</Label>
                        <Input
                          id="airport-notes"
                          placeholder={t('anySpecialRequirementsOrNotes')}
                        />
                      </div>
                      
                      <Button type="submit" className="w-full">
                        {t('requestRide')}
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="custom" className="pt-4 space-y-4">
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="custom-pickup">{t('pickupLocation')}</Label>
                          <Select defaultValue="hotel">
                            <SelectTrigger id="custom-pickup">
                              <SelectValue placeholder={t('selectPickupLocation')} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="hotel">{t('teamManagement')} Hotel</SelectItem>
                              <SelectItem value="training">{t('training')} Facility</SelectItem>
                              <SelectItem value="media">{t('media')} Center</SelectItem>
                              <SelectItem value="custom">{t('other')}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="custom-destination">{t('destination')}</Label>
                          <Input
                            id="custom-destination"
                            placeholder={t('enterCustomDestination')}
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="custom-passengers">{t('numberOfPassengers')}</Label>
                          <Select defaultValue="1">
                            <SelectTrigger id="custom-passengers">
                              <SelectValue placeholder={t('selectNumberOfPassengers')} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 {t('passengers')}</SelectItem>
                              <SelectItem value="2">2 {t('passengers')}</SelectItem>
                              <SelectItem value="3">3 {t('passengers')}</SelectItem>
                              <SelectItem value="4">4+ {t('passengers')}</SelectItem>
                              <SelectItem value="team">{t('teamManagement')}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="custom-datetime">{t('date')} & {t('time')}</Label>
                          <Input
                            id="custom-datetime"
                            type="datetime-local"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="custom-address">{t('fullDestinationAddress')}</Label>
                        <Input
                          id="custom-address"
                          placeholder={t('enterFullAddress')}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="custom-notes">{t('notes')}</Label>
                        <Input
                          id="custom-notes"
                          placeholder={t('anySpecialRequirementsOrNotes')}
                        />
                      </div>
                      
                      <Button type="submit" className="w-full">
                        {t('requestRide')}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          {/* My Rides Section - 2 columns on medium+ screens */}
          <div className="md:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{t('myRides')}</CardTitle>
                <CardDescription>{t('schedule')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myRides.map((ride) => (
                    <Card key={ride.id} className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <CalendarDays className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{ride.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{ride.time}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="h-4 w-4" />
                          <span className="font-medium">{ride.destination}</span>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>{ride.driver}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Car className="h-4 w-4 text-muted-foreground" />
                            <span>{ride.vehicle}</span>
                          </div>
                        </div>
                        
                        <div className="mt-3 pt-2 border-t border-border/30 flex items-center justify-between">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            ride.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {ride.status === 'confirmed' ? t('completed') : t('pending')}
                          </span>
                          
                          <Button variant="ghost" size="sm" className="text-xs">{t('status')}</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AFCDashboard;
