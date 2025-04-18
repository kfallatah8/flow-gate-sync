
import React, { useState } from 'react';
import { LogIn, LogOut, CheckSquare2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import TaskFormDialog, { TaskFormData } from './TaskFormDialog';
import { Badge } from '@/components/ui/badge';

const TaskActions: React.FC = () => {
  const [arrivals, setArrivals] = useState<TaskFormData[]>([]);
  const [departures, setDepartures] = useState<TaskFormData[]>([]);
  const [isArrivalFormOpen, setIsArrivalFormOpen] = useState(false);
  const [isDepartureFormOpen, setIsDepartureFormOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmitForm = (data: TaskFormData) => {
    if (data.type === 'arrival') {
      setArrivals([...arrivals, data]);
    } else {
      setDepartures([...departures, data]);
    }
    
    toast({
      title: "Form Submitted",
      description: `Your ${data.type} form has been submitted successfully.`,
    });
  };

  const getTodaysCompletedCount = (forms: TaskFormData[]) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return forms.filter(form => {
      const formDate = new Date(form.timestamp);
      formDate.setHours(0, 0, 0, 0);
      return formDate.getTime() === today.getTime();
    }).length;
  };
  
  const arrivalsToday = getTodaysCompletedCount(arrivals);
  const departuresToday = getTodaysCompletedCount(departures);
  
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LogIn className="h-5 w-5 text-blue-500" />
              Arrival Forms
            </CardTitle>
            <CardDescription>
              Submit arrival reports when starting your shift
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Completed today</span>
              <Badge variant="outline" className="bg-blue-50 border-blue-200">
                {arrivalsToday}
              </Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={() => setIsArrivalFormOpen(true)}
              className="w-full"
            >
              Submit Arrival Form
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LogOut className="h-5 w-5 text-amber-500" />
              Departure Forms
            </CardTitle>
            <CardDescription>
              Submit departure reports when ending your shift
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Completed today</span>
              <Badge variant="outline" className="bg-amber-50 border-amber-200">
                {departuresToday}
              </Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={() => setIsDepartureFormOpen(true)}
              className="w-full"
            >
              Submit Departure Form
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckSquare2 className="h-5 w-5 text-green-500" />
              Daily Tasks
            </CardTitle>
            <CardDescription>
              View and manage your assigned daily tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Tasks completed</span>
              <Badge variant="outline" className="bg-green-50 border-green-200">
                3/7
              </Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              variant="outline"
              className="w-full"
              onClick={() => window.location.href = '/tasks'}
            >
              View Tasks
            </Button>
          </CardFooter>
        </Card>
      </div>

      <TaskFormDialog
        type="arrival"
        isOpen={isArrivalFormOpen}
        onClose={() => setIsArrivalFormOpen(false)}
        onSubmit={handleSubmitForm}
      />
      
      <TaskFormDialog
        type="departure"
        isOpen={isDepartureFormOpen}
        onClose={() => setIsDepartureFormOpen(false)}
        onSubmit={handleSubmitForm}
      />
    </>
  );
};

export default TaskActions;
