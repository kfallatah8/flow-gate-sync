
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, FileText, CheckCircle2, Download, FileBadge, MapPin, Car, Users, Clipboard, InfoIcon } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const Guidelines: React.FC = () => {
  const { currentUser } = useAuth();
  const role = currentUser?.role || 'afc';
  
  const categoryColors: Record<string, string> = {
    'Safety': 'bg-red-100 text-red-800',
    'Operations': 'bg-blue-100 text-blue-800',
    'Protocol': 'bg-purple-100 text-purple-800',
    'Stadium': 'bg-green-100 text-green-800',
    'Airport': 'bg-amber-100 text-amber-800',
    'General': 'bg-gray-100 text-gray-800',
  };
  
  // Define guidelines by role
  const driverGuidelines = [
    {
      id: 'driver-1',
      title: 'Vehicle Safety Protocol',
      category: 'Safety',
      updated: 'Apr 10, 2025',
      description: 'Essential safety protocols for all FlowGate drivers including pre-trip inspection guidelines.',
      important: true
    },
    {
      id: 'driver-2',
      title: 'VIP Transport Guidelines',
      category: 'Protocol',
      updated: 'Apr 5, 2025',
      description: 'Protocol for transporting VIP guests during the Asian Cup tournament.',
      important: true
    },
    {
      id: 'driver-3',
      title: 'Stadium Access Routes',
      category: 'Stadium',
      updated: 'Apr 2, 2025',
      description: 'Detailed routes and drop-off points for both Okaz and KFS stadiums.',
      important: false
    },
    {
      id: 'driver-4',
      title: 'Airport Pickup Procedures',
      category: 'Airport',
      updated: 'Mar 28, 2025',
      description: 'Process for efficiently picking up delegations and teams at airport terminals.',
      important: true
    },
    {
      id: 'driver-5',
      title: 'Vehicle Maintenance Checklist',
      category: 'Operations',
      updated: 'Mar 15, 2025',
      description: 'Daily and weekly vehicle maintenance requirements for all FlowGate drivers.',
      important: false
    }
  ];
  
  const afcGuidelines = [
    {
      id: 'afc-1',
      title: 'Transportation Request Protocol',
      category: 'Operations',
      updated: 'Apr 12, 2025',
      description: 'Guidelines for requesting transportation services for team members and officials.',
      important: true
    },
    {
      id: 'afc-2',
      title: 'Team Movement Protocol',
      category: 'Protocol',
      updated: 'Apr 8, 2025',
      description: 'Procedures for coordinating team movements between venues and accommodations.',
      important: true
    },
    {
      id: 'afc-3',
      title: 'Stadium Access Information',
      category: 'Stadium',
      updated: 'Apr 5, 2025',
      description: 'Entry points and credential requirements for both tournament stadiums.',
      important: false
    }
  ];
  
  const managerGuidelines = [
    {
      id: 'manager-1',
      title: 'Operations Manual',
      category: 'Operations',
      updated: 'Apr 15, 2025',
      description: 'Complete operations manual for the transportation management during the Asian Cup.',
      important: true
    },
    {
      id: 'manager-2',
      title: 'Staff Management Protocol',
      category: 'Operations',
      updated: 'Apr 12, 2025',
      description: 'Guidelines for managing driver schedules, breaks, and assignments.',
      important: true
    },
    {
      id: 'manager-3',
      title: 'Emergency Response Plan',
      category: 'Safety',
      updated: 'Apr 10, 2025',
      description: 'Procedures for handling emergencies during tournament operations.',
      important: true
    }
  ];
  
  // Get guidelines based on role
  const getRoleGuidelines = () => {
    switch (role) {
      case 'driver': return driverGuidelines;
      case 'afc': return afcGuidelines;
      case 'manager': return [...managerGuidelines, ...driverGuidelines, ...afcGuidelines]; // Managers see all
      default: return [];
    }
  };
  
  // Get role-specific guidelines
  const guidelines = getRoleGuidelines();
  
  // Important guidelines
  const importantGuidelines = guidelines.filter(g => g.important);
  
  return (
    <DashboardLayout title="Guidelines & Protocols">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Search Bar */}
        <Card>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search guidelines..." className="pl-9" />
            </div>
          </CardContent>
        </Card>
        
        {/* Tabs for different guides */}
        <Card>
          <CardHeader>
            <CardTitle>Documentation Library</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="important">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="important">Important</TabsTrigger>
                <TabsTrigger value="all">All Guidelines</TabsTrigger>
                <TabsTrigger value="category">By Category</TabsTrigger>
              </TabsList>
              
              {/* Important Guidelines */}
              <TabsContent value="important" className="pt-4">
                <div className="space-y-4">
                  {importantGuidelines.map((guide) => (
                    <Card key={guide.id} className="bg-muted/30">
                      <CardContent className="p-4">
                        <div className="flex items-start md:items-center md:justify-between gap-4 flex-col md:flex-row">
                          <div className="flex items-start gap-3">
                            <div className="rounded-md bg-primary/10 p-2">
                              <FileText className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-medium flex items-center gap-2">
                                {guide.title} 
                                <Badge className="bg-amber-500">Important</Badge>
                              </h3>
                              <p className="text-sm text-muted-foreground">{guide.description}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge className={categoryColors[guide.category] || 'bg-gray-100'}>
                                  {guide.category}
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                  Updated: {guide.updated}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2 w-full md:w-auto">
                            <Button variant="outline" size="sm" className="w-full md:w-auto">
                              <FileBadge className="h-4 w-4 mr-2" />
                              View
                            </Button>
                            <Button variant="ghost" size="sm" className="w-full md:w-auto">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {/* All Guidelines */}
              <TabsContent value="all" className="pt-4">
                <div className="space-y-3">
                  {guidelines.map((guide) => (
                    <div key={guide.id} className="flex items-center justify-between p-3 border rounded-md hover:bg-muted/30">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-muted p-2">
                          <FileText className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-medium">{guide.title}</div>
                          <div className="text-xs text-muted-foreground">
                            Updated: {guide.updated}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={categoryColors[guide.category] || 'bg-gray-100'}>
                          {guide.category}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              {/* By Category */}
              <TabsContent value="category" className="pt-4">
                <div className="space-y-6">
                  {Object.keys(categoryColors).map((category) => (
                    <div key={category} className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge className={categoryColors[category] || 'bg-gray-100'}>
                          {category}
                        </Badge>
                        <h3 className="font-medium">{category} Guidelines</h3>
                      </div>
                      
                      <div className="space-y-2 pl-2">
                        {guidelines.filter(g => g.category === category).map((guide) => (
                          <div key={guide.id} className="flex items-center justify-between p-2 border-l-2 border-l-primary pl-3">
                            <div>
                              <div className="font-medium">{guide.title}</div>
                              <div className="text-xs text-muted-foreground">
                                Updated: {guide.updated}
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">View</Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        {/* Quick Reference Guides */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-4 mb-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">Stadium Maps</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Maps of Okaz and KFS stadiums with access points
              </p>
              <Button variant="ghost" size="sm" className="mt-3">
                View Maps
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-4 mb-3">
                <Car className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">Vehicle Reference</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Fleet information and vehicle guides
              </p>
              <Button variant="ghost" size="sm" className="mt-3">
                View Guide
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-4 mb-3">
                <InfoIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">Contact Directory</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Emergency contacts and key personnel
              </p>
              <Button variant="ghost" size="sm" className="mt-3">
                View Directory
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Guidelines;
