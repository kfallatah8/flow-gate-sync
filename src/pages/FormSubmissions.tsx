
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

const FormSubmissions: React.FC = () => {
  const submissions = [
    {
      id: 1,
      type: "Arrival Check",
      submittedBy: "John Driver",
      timestamp: "2025-04-19 08:30 AM",
      status: "verified",
      location: "Gate A",
    },
    {
      id: 2,
      type: "Departure Check",
      submittedBy: "Sarah Driver",
      timestamp: "2025-04-19 05:45 PM",
      status: "pending",
      location: "Gate B",
    },
  ];

  return (
    <DashboardLayout title="Form Submissions" requiredRole="manager">
      <div className="container mx-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[calc(100vh-16rem)]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Submitted By</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell>{submission.id}</TableCell>
                      <TableCell>{submission.type}</TableCell>
                      <TableCell>{submission.submittedBy}</TableCell>
                      <TableCell>{submission.timestamp}</TableCell>
                      <TableCell>{submission.location}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={submission.status === 'verified' ? 'success' : 'default'}
                        >
                          {submission.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default FormSubmissions;
