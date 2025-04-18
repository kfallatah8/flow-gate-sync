
import React, { useState } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Search, Filter, CheckCircle2, AlertTriangle, AlertCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { TaskFormData } from '@/components/tasks/TaskFormDialog';
import { Badge } from '@/components/ui/badge';

// Sample data for demonstration purposes
const demoFormSubmissions: TaskFormData[] = [
  {
    id: '1',
    type: 'arrival',
    location: 'Gate 1',
    status: 'ok',
    note: 'All systems operational, no issues found.',
    photo: null,
    timestamp: new Date(Date.now() - 60000 * 180) // 3 hours ago
  },
  {
    id: '2',
    type: 'departure',
    location: 'Gate 3',
    status: 'issue',
    note: 'Minor issue with gate lock. Needs maintenance.',
    photo: null,
    timestamp: new Date(Date.now() - 60000 * 90) // 1.5 hours ago
  },
  {
    id: '3',
    type: 'arrival',
    location: 'Gate 7',
    status: 'critical',
    note: 'Gate automation failure. Manual operation required.',
    photo: null,
    timestamp: new Date(Date.now() - 60000 * 30) // 30 minutes ago
  },
  {
    id: '4',
    type: 'departure',
    location: 'Gate 2',
    status: 'ok',
    note: 'Successfully locked and secured.',
    photo: null,
    timestamp: new Date(Date.now() - 60000 * 10) // 10 minutes ago
  },
];

const FormSubmissions: React.FC = () => {
  const [submissions] = useState<TaskFormData[]>(demoFormSubmissions);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [selectedSubmission, setSelectedSubmission] = useState<TaskFormData | null>(null);
  const { toast } = useToast();
  
  const filteredSubmissions = submissions.filter(submission => {
    // Filter based on tab
    if (activeTab === 'arrival' && submission.type !== 'arrival') return false;
    if (activeTab === 'departure' && submission.type !== 'departure') return false;
    
    // Filter based on search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        submission.location.toLowerCase().includes(query) ||
        submission.note.toLowerCase().includes(query) ||
        submission.status.toLowerCase().includes(query)
      );
    }
    
    return true;
  });
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ok':
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case 'issue':
        return <AlertTriangle className="h-4 w-4 text-amber-500" />;
      case 'critical':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'ok':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">OK</Badge>;
      case 'issue':
        return <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Issue</Badge>;
      case 'critical':
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Critical</Badge>;
      default:
        return null;
    }
  };
  
  const formatDate = (date: Date) => {
    return date.toLocaleString();
  };
  
  return (
    <DashboardLayout title="Form Submissions" requiredRole="manager">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">Task Form Submissions</h2>
            <Badge className="ml-2">{submissions.length}</Badge>
          </div>
          
          <div className="flex gap-2">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search submissions..."
                className="pl-8 w-full sm:w-[200px] lg:w-[300px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="all" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All Submissions</TabsTrigger>
            <TabsTrigger value="arrival">Arrivals</TabsTrigger>
            <TabsTrigger value="departure">Departures</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">All Form Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                {renderSubmissionsTable()}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="arrival" className="mt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Arrival Form Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                {renderSubmissionsTable()}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="departure" className="mt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Departure Form Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                {renderSubmissionsTable()}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Detail dialog */}
        <Dialog
          open={!!selectedSubmission}
          onOpenChange={(open) => !open && setSelectedSubmission(null)}
        >
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Submission Details</DialogTitle>
            </DialogHeader>
            
            {selectedSubmission && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Type</p>
                    <p className="font-medium">
                      {selectedSubmission.type === 'arrival' ? 'Arrival' : 'Departure'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Location</p>
                    <p className="font-medium">{selectedSubmission.location}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Status</p>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(selectedSubmission.status)}
                      <span className="capitalize">{selectedSubmission.status}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Timestamp</p>
                    <p className="font-medium">{formatDate(selectedSubmission.timestamp)}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Notes</p>
                  <p>{selectedSubmission.note || 'No notes provided'}</p>
                </div>
                
                {selectedSubmission.photo && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Photo Evidence</p>
                    <div className="mt-2 border rounded-md overflow-hidden">
                      <img 
                        src={selectedSubmission.photo} 
                        alt="Submission" 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
  
  function renderSubmissionsTable() {
    return filteredSubmissions.length > 0 ? (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Timestamp</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredSubmissions.map((submission) => (
            <TableRow key={submission.id}>
              <TableCell className="font-medium capitalize">
                {submission.type}
              </TableCell>
              <TableCell>{submission.location}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {getStatusBadge(submission.status)}
                </div>
              </TableCell>
              <TableCell>{formatDate(submission.timestamp)}</TableCell>
              <TableCell className="text-right">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedSubmission(submission)}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    ) : (
      <div className="py-12 text-center">
        <p className="text-muted-foreground">No submissions found</p>
      </div>
    );
  }
};

export default FormSubmissions;
