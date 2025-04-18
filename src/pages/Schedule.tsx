
import React, { useState } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { MapPin, Clock, Calendar as CalendarIcon, ChevronLeft, ChevronRight, Users, Bus, Car } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const Schedule: React.FC = () => {
  const { currentUser } = useAuth();
  const role = currentUser?.role || 'afc';
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [month, setMonth] = useState<Date>(new Date());
  
  // Data for different views
  const weeklySchedule = [
    {
      day: 'Monday',
      date: 'Apr 19',
      events: [
        { time: '09:30 AM', title: 'Team Transfer', location: 'Hotel → Training Ground', type: 'transfer' },
        { time: '12:30 PM', title: 'Lunch', location: 'Team Hotel', type: 'meal' },
        { time: '3:00 PM', title: 'Match Day Prep', location: 'Okaz Stadium', type: 'match' }
      ]
    },
    {
      day: 'Tuesday',
      date: 'Apr 20',
      events: [
        { time: '09:00 AM', title: 'Training Session', location: 'Training Ground', type: 'training' },
        { time: '2:00 PM', title: 'Media Interviews', location: 'Media Center', type: 'media' },
        { time: '6:00 PM', title: 'Team Meeting', location: 'Team Hotel', type: 'meeting' }
      ]
    },
    {
      day: 'Wednesday',
      date: 'Apr 21',
      events: [
        { time: '10:00 AM', title: 'Match Day', location: 'KFS Stadium', type: 'match' },
        { time: '4:30 PM', title: 'Post-Match Transfer', location: 'Stadium → Hotel', type: 'transfer' }
      ]
    },
    {
      day: 'Thursday',
      date: 'Apr 22',
      events: [
        { time: '09:30 AM', title: 'Recovery Session', location: 'Team Hotel', type: 'training' },
        { time: '3:00 PM', title: 'Airport Transfer', location: 'Hotel → Airport', type: 'transfer' }
      ]
    }
  ];
  
  // Airport transfers schedule
  const airportSchedule = [
    { date: 'Apr 19', time: '06:30 AM', team: 'Team Japan', flight: 'JL8921', terminal: 'T1', type: 'arrival' },
    { date: 'Apr 19', time: '2:45 PM', team: 'Team Korea', flight: 'KA4523', terminal: 'T2', type: 'arrival' },
    { date: 'Apr 20', time: '11:15 AM', team: 'Media Group', flight: 'EK4290', terminal: 'T1', type: 'arrival' },
    { date: 'Apr 22', time: '4:20 PM', team: 'Team Australia', flight: 'QF9021', terminal: 'T2', type: 'departure' },
    { date: 'Apr 23', time: '8:05 AM', team: 'Team China', flight: 'CA4830', terminal: 'T1', type: 'departure' }
  ];
  
  // Match schedule
  const matchSchedule = [
    { 
      date: 'Apr 20', 
      time: '6:00 PM', 
      match: 'Japan vs. Korea', 
      stadium: 'Okaz Stadium',
      transport: [
        { time: '3:30 PM', description: 'Team Japan Transfer' },
        { time: '3:45 PM', description: 'Team Korea Transfer' },
        { time: '4:00 PM', description: 'Officials Transfer' }
      ]
    },
    { 
      date: 'Apr 21', 
      time: '8:30 PM', 
      match: 'China vs. Australia', 
      stadium: 'KFS Stadium',
      transport: [
        { time: '6:00 PM', description: 'Team China Transfer' },
        { time: '6:15 PM', description: 'Team Australia Transfer' },
        { time: '6:30 PM', description: 'Officials Transfer' }
      ]
    },
    { 
      date: 'Apr 23', 
      time: '7:00 PM', 
      match: 'Semi-Final 1', 
      stadium: 'Okaz Stadium',
      transport: [
        { time: '4:30 PM', description: 'Team 1 Transfer' },
        { time: '4:45 PM', description: 'Team 2 Transfer' },
        { time: '5:00 PM', description: 'Officials Transfer' }
      ]
    }
  ];
  
  // Get badge variant based on event type
  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'match': return 'default';
      case 'transfer': return 'secondary';
      case 'training': return 'outline';
      case 'media': return 'destructive';
      case 'meeting': return '';
      case 'meal': return '';
      default: return 'outline';
    }
  };
  
  // Next/Previous month handlers
  const nextMonth = () => {
    const current = new Date(month);
    current.setMonth(current.getMonth() + 1);
    setMonth(current);
  };
  
  const prevMonth = () => {
    const current = new Date(month);
    current.setMonth(current.getMonth() - 1);
    setMonth(current);
  };

  return (
    <DashboardLayout title="Schedule">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-12">
          {/* Calendar Sidebar */}
          <Card className="md:col-span-4">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Calendar</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" onClick={prevMonth}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={nextMonth}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                month={month}
                className="rounded-md border"
              />
              
              <div className="mt-6 space-y-4">
                <div className="space-y-1">
                  <h4 className="font-medium text-sm">Legend</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary">Match Day</Badge>
                    <Badge variant="secondary">Transfer</Badge>
                    <Badge variant="outline">Training</Badge>
                    <Badge variant="destructive">Media</Badge>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Filter View</h4>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Filter events" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Events</SelectItem>
                      <SelectItem value="match">Match Days</SelectItem>
                      <SelectItem value="airport">Airport Transfers</SelectItem>
                      <SelectItem value="training">Training Sessions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Schedule Content */}
          <Card className="md:col-span-8">
            <CardHeader>
              <CardTitle>Event Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="weekly">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="weekly">Weekly View</TabsTrigger>
                  <TabsTrigger value="airport">Airport</TabsTrigger>
                  <TabsTrigger value="matches">Matches</TabsTrigger>
                </TabsList>
                
                {/* Weekly View */}
                <TabsContent value="weekly" className="space-y-4 mt-4">
                  {weeklySchedule.map((day, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                        <h3 className="font-medium">{day.day}, {day.date}</h3>
                      </div>
                      
                      <div className="space-y-2 pl-6">
                        {day.events.map((event, j) => (
                          <div key={j} className="grid grid-cols-12 gap-2 p-2 rounded-md hover:bg-muted/50">
                            <div className="col-span-2">
                              <div className="text-sm font-medium">{event.time}</div>
                            </div>
                            <div className="col-span-5">
                              <div className="font-medium">{event.title}</div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <MapPin className="h-3 w-3 mr-1" />
                                {event.location}
                              </div>
                            </div>
                            <div className="col-span-3 flex items-center">
                              <Badge variant={getBadgeVariant(event.type)}>
                                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                              </Badge>
                            </div>
                            <div className="col-span-2 text-right">
                              {role === 'manager' && <Button variant="ghost" size="sm">Edit</Button>}
                              {role !== 'manager' && <Button variant="ghost" size="sm">Details</Button>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </TabsContent>
                
                {/* Airport Transfers */}
                <TabsContent value="airport">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Team/Group</TableHead>
                        <TableHead>Flight</TableHead>
                        <TableHead>Terminal</TableHead>
                        <TableHead>Type</TableHead>
                        {role === 'manager' && <TableHead className="text-right">Actions</TableHead>}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {airportSchedule.map((transfer, i) => (
                        <TableRow key={i}>
                          <TableCell>{transfer.date}</TableCell>
                          <TableCell>{transfer.time}</TableCell>
                          <TableCell className="font-medium">{transfer.team}</TableCell>
                          <TableCell>{transfer.flight}</TableCell>
                          <TableCell>{transfer.terminal}</TableCell>
                          <TableCell>
                            <Badge variant={transfer.type === 'arrival' ? 'default' : 'secondary'}>
                              {transfer.type === 'arrival' ? 'Arrival' : 'Departure'}
                            </Badge>
                          </TableCell>
                          {role === 'manager' && (
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm">Edit</Button>
                            </TableCell>
                          )}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
                
                {/* Match Schedule */}
                <TabsContent value="matches" className="space-y-6 mt-4">
                  {matchSchedule.map((match, i) => (
                    <Card key={i} className="bg-muted/20">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center">
                          <div className="space-y-1">
                            <div className="text-sm text-muted-foreground">{match.date}</div>
                            <CardTitle className="text-lg">{match.match}</CardTitle>
                          </div>
                          <Badge>{match.time}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2 mb-3">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{match.stadium}</span>
                        </div>
                        
                        <div className="space-y-1">
                          <h4 className="text-sm font-medium">Transportation Schedule:</h4>
                          <div className="space-y-2 pl-3">
                            {match.transport.map((item, j) => (
                              <div key={j} className="flex items-center justify-between py-1 border-b border-border/30 last:border-0">
                                <div className="flex items-center gap-2">
                                  <Clock className="h-3 w-3 text-muted-foreground" />
                                  <span className="text-sm font-medium">{item.time}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Bus className="h-3 w-3 text-muted-foreground" />
                                  <span className="text-sm">{item.description}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Schedule;
