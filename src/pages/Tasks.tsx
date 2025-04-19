
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';

const Tasks: React.FC = () => {
  const tasks = [
    {
      title: "Morning Vehicle Inspection",
      status: "pending",
      dueTime: "08:00 AM",
      assigned: "Driver Team",
    },
    {
      title: "Gate Security Check",
      status: "completed",
      dueTime: "09:00 AM",
      assigned: "Security Team",
    },
    {
      title: "Passenger Count Report",
      status: "in-progress",
      dueTime: "02:00 PM",
      assigned: "AFC Team",
    },
  ];

  return (
    <DashboardLayout title="Daily Tasks">
      <div className="container mx-auto p-6">
        <ScrollArea className="h-[calc(100vh-12rem)]">
          <div className="space-y-4">
            {tasks.map((task, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id={`task-${index}`} />
                      <CardTitle className="text-lg">{task.title}</CardTitle>
                    </div>
                    <Badge 
                      variant={
                        task.status === 'completed' 
                          ? 'success' 
                          : task.status === 'in-progress' 
                          ? 'warning' 
                          : 'default'
                      }
                    >
                      {task.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Due: {task.dueTime}</span>
                    <span>Assigned to: {task.assigned}</span>
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

export default Tasks;
