
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
import { useToast } from '@/components/ui/use-toast';

const AFCDashboard: React.FC = () => {
  const { toast } = useToast();
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
      title: 'Ride Requested',
      description: 'Your ride has been successfully requested.',
    });
    form.reset();
  };
  
  const myRides = [
    {
      id: 'ride-1',
      date: 'Today',
      time: '2:30 PM',
      destination: 'Okaz Stadium',
      status: 'confirmed',
      driver: 'Ahmed K.',
      vehicle: 'Van #103'
    },
    {
      id: 'ride-2',
      date: 'Tomorrow',
      time: '9:15 AM',
      destination: 'KFS Stadium',
      status: 'pending',
      driver: 'Pending',
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
    <DashboardLayout title="AFC Client Dashboard" requiredRole="afc">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="grid gap-6 md:grid-cols-5">
          {/* Request Form Section - 3 columns on medium+ screens */}
          <div className="md:col-span-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Request Ride</CardTitle>
                <CardDescription>
                  Fill out the form below to request transportation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="stadium" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="stadium">Stadium</TabsTrigger>
                    <TabsTrigger value="airport">Airport</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="stadium" className="pt-4 space-y-4">
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="pickup">Pickup Location</Label>
                          <Select defaultValue="hotel">
                            <SelectTrigger id="pickup">
                              <SelectValue placeholder="Select location" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="hotel">Team Hotel</SelectItem>
                              <SelectItem value="training">Training Facility</SelectItem>
                              <SelectItem value="media">Media Center</SelectItem>
                              <SelectItem value="custom">Custom Location</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="destination">Stadium</Label>
                          <Select defaultValue="okaz">
                            <SelectTrigger id="destination">
                              <SelectValue placeholder="Select destination" />
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
                          <Label htmlFor="passengers">Number of Passengers</Label>
                          <Select defaultValue="1">
                            <SelectTrigger id="passengers">
                              <SelectValue placeholder="Select number" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Passenger</SelectItem>
                              <SelectItem value="2">2 Passengers</SelectItem>
                              <SelectItem value="3">3 Passengers</SelectItem>
                              <SelectItem value="4">4+ Passengers</SelectItem>
                              <SelectItem value="team">Full Team</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="datetime">Pickup Date & Time</Label>
                          <Input
                            id="datetime"
                            type="datetime-local"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="notes">Additional Notes</Label>
                        <Input
                          id="notes"
                          placeholder="Any special requirements"
                        />
                      </div>
                      
                      <Button type="submit" className="w-full">
                        Request Ride
                      </Button>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="airport" className="pt-4 space-y-4">
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="airport-type">Ride Type</Label>
                          <Select defaultValue="arrival">
                            <SelectTrigger id="airport-type">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="arrival">Airport Pickup</SelectItem>
                              <SelectItem value="departure">Airport Drop-off</SelectItem>
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
                          <Label htmlFor="airport-passengers">Number of Passengers</Label>
                          <Select defaultValue="1">
                            <SelectTrigger id="airport-passengers">
                              <SelectValue placeholder="Select number" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Passenger</SelectItem>
                              <SelectItem value="2">2 Passengers</SelectItem>
                              <SelectItem value="3">3 Passengers</SelectItem>
                              <SelectItem value="4">4+ Passengers</SelectItem>
                              <SelectItem value="team">Full Team</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="airport-datetime">Flight Date & Time</Label>
                          <Input
                            id="airport-datetime"
                            type="datetime-local"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="airport-notes">Additional Notes</Label>
                        <Input
                          id="airport-notes"
                          placeholder="Flight number, special requirements, etc."
                        />
                      </div>
                      
                      <Button type="submit" className="w-full">
                        Request Ride
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
                <CardTitle>My Rides</CardTitle>
                <CardDescription>Your upcoming transportation</CardDescription>
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
                            {ride.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                          </span>
                          
                          <Button variant="ghost" size="sm" className="text-xs">View Details</Button>
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
