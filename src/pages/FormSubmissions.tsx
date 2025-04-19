
import React, { useState } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Eye } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/components/ui/use-toast';

interface Submission {
  id: number;
  type: string;
  submittedBy: string;
  timestamp: string;
  status: string;
  location: string;
  photo?: string;
}

const FormSubmissions: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [viewPhoto, setViewPhoto] = useState<string | null>(null);
  
  const submissions: Submission[] = [
    {
      id: 1,
      type: "Arrival Check",
      submittedBy: "John Driver",
      timestamp: "2025-04-19 08:30 AM",
      status: "verified",
      location: "Gate A",
      photo: "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20300'%3E%3Crect%20width='400'%20height='300'%20fill='%23cccccc'/%3E%3Ctext%20x='50%25'%20y='50%25'%20dominant-baseline='middle'%20text-anchor='middle'%20font-family='Arial'%20font-size='24'%20fill='%23333333'%3EGate%20Photo%3C/text%3E%3C/svg%3E"
    },
    {
      id: 2,
      type: "Departure Check",
      submittedBy: "Sarah Driver",
      timestamp: "2025-04-19 05:45 PM",
      status: "pending",
      location: "Gate B",
      photo: "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20300'%3E%3Crect%20width='400'%20height='300'%20fill='%23cccccc'/%3E%3Ctext%20x='50%25'%20y='50%25'%20dominant-baseline='middle'%20text-anchor='middle'%20font-family='Arial'%20font-size='24'%20fill='%23333333'%3EVehicle%20Photo%3C/text%3E%3C/svg%3E"
    },
  ];

  const handleViewSubmission = (submission: Submission) => {
    setSelectedSubmission(submission);
  };

  const handleViewPhoto = (photo: string | undefined) => {
    if (photo) {
      setViewPhoto(photo);
    } else {
      toast({
        title: "No Photo Available",
        description: "This submission does not have an attached photo.",
        variant: "destructive"
      });
    }
  };

  return (
    <DashboardLayout title={t('formSubmissions')} requiredRole="manager">
      <div className="container mx-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle>{t('recentSubmissions')}</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[calc(100vh-16rem)]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t('id')}</TableHead>
                    <TableHead>{t('type')}</TableHead>
                    <TableHead>{t('submittedBy')}</TableHead>
                    <TableHead>{t('timestamp')}</TableHead>
                    <TableHead>{t('location')}</TableHead>
                    <TableHead>{t('status')}</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
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
                          variant={submission.status === 'verified' ? 'outline' : 'default'}
                        >
                          {submission.status === 'verified' ? t('verified') : t('pending')}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleViewPhoto(submission.photo)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Photo Viewer Dialog */}
      <Dialog open={viewPhoto !== null} onOpenChange={() => setViewPhoto(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t('photoEvidence')}</DialogTitle>
          </DialogHeader>
          <div className="flex items-center justify-center">
            {viewPhoto && (
              <img 
                src={viewPhoto} 
                alt="Submission Photo" 
                className="max-w-full max-h-[60vh] object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default FormSubmissions;
