
import React, { useState } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, CheckCircle2, Clock, Star, ClipboardCheck, CalendarDays, CheckCheck, AlertTriangle } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description?: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'completed';
  dueTime?: string;
}

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 'task-1',
      title: 'Vehicle Inspection',
      description: 'Complete pre-shift vehicle safety inspection',
      category: 'Safety',
      priority: 'high',
      status: 'pending',
      dueTime: '08:00 AM'
    },
    {
      id: 'task-2',
      title: 'Fuel Check',
      description: 'Ensure vehicle has sufficient fuel for the day',
      category: 'Operations',
      priority: 'high',
      status: 'completed',
      dueTime: '08:30 AM'
    },
    {
      id: 'task-3',
      title: 'Route Review',
      description: 'Review today\'s assigned routes and schedules',
      category: 'Planning',
      priority: 'medium',
      status: 'completed',
      dueTime: '09:00 AM'
    },
    {
      id: 'task-4',
      title: 'Stadium Credentials Pickup',
      description: 'Collect venue access credentials from operations office',
      category: 'Access',
      priority: 'high',
      status: 'pending',
      dueTime: '10:30 AM'
    },
    {
      id: 'task-5',
      title: 'Team Communication Check',
      description: 'Verify radio and communication systems are functioning',
      category: 'Communications',
      priority: 'medium',
      status: 'pending',
      dueTime: '11:00 AM'
    }
  ]);
  
  // Function to toggle task status
  const toggleTaskStatus = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' } 
        : task
    ));
  };
  
  // Calculate completion percentage
  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const completionPercentage = (completedTasks / tasks.length) * 100;
  
  // Filter tasks by status
  const pendingTasks = tasks.filter(task => task.status === 'pending');
  const completedTasksList = tasks.filter(task => task.status === 'completed');
  
  // Get priority badge variant
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge className="bg-red-500">High</Badge>;
      case 'medium':
        return <Badge className="bg-amber-500">Medium</Badge>;
      case 'low':
        return <Badge variant="outline">Low</Badge>;
      default:
        return null;
    }
  };
  
  return (
    <DashboardLayout title="Daily Tasks" requiredRole="driver">
      <div className="mx-auto max-w-5xl space-y-6">
        {/* Task Progress Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">Today's Tasks</h2>
                <p className="text-muted-foreground">
                  {completedTasks} of {tasks.length} tasks completed
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold">{completedTasks}</div>
                  <div className="text-xs text-muted-foreground">Completed</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold">{pendingTasks.length}</div>
                  <div className="text-xs text-muted-foreground">Pending</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold">{tasks.length}</div>
                  <div className="text-xs text-muted-foreground">Total</div>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm">Progress</span>
                <span className="text-sm font-medium">{completionPercentage.toFixed(0)}%</span>
              </div>
              <Progress value={completionPercentage} className="h-2" />
            </div>
          </CardContent>
        </Card>
        
        {/* Task Lists */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Task Checklist</CardTitle>
            <CardDescription>Complete your daily assignments</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="pending">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="pending" className="flex items-center gap-2">
                  <ClipboardCheck className="h-4 w-4" />
                  Pending Tasks
                </TabsTrigger>
                <TabsTrigger value="completed" className="flex items-center gap-2">
                  <CheckCheck className="h-4 w-4" />
                  Completed
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="pending" className="pt-4 space-y-4">
                {pendingTasks.length === 0 ? (
                  <div className="text-center py-8">
                    <CheckCircle2 className="mx-auto h-8 w-8 text-primary opacity-50 mb-2" />
                    <p className="text-muted-foreground">All tasks completed!</p>
                  </div>
                ) : (
                  pendingTasks.map((task) => (
                    <div key={task.id} className="flex items-start gap-4 p-3 border rounded-md">
                      <Checkbox 
                        id={task.id} 
                        checked={task.status === 'completed'}
                        onCheckedChange={() => toggleTaskStatus(task.id)}
                      />
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <label
                            htmlFor={task.id}
                            className="text-base font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {task.title}
                          </label>
                          
                          <div className="flex items-center gap-2">
                            {getPriorityBadge(task.priority)}
                            {task.dueTime && (
                              <div className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded">
                                <Clock className="h-3 w-3" />
                                {task.dueTime}
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {task.description && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {task.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </TabsContent>
              
              <TabsContent value="completed" className="pt-4 space-y-4">
                {completedTasksList.length === 0 ? (
                  <div className="text-center py-8">
                    <AlertTriangle className="mx-auto h-8 w-8 text-amber-500 opacity-50 mb-2" />
                    <p className="text-muted-foreground">No tasks completed yet</p>
                  </div>
                ) : (
                  completedTasksList.map((task) => (
                    <div key={task.id} className="flex items-start gap-4 p-3 border rounded-md bg-muted/30">
                      <Checkbox 
                        id={`completed-${task.id}`} 
                        checked={true}
                        onCheckedChange={() => toggleTaskStatus(task.id)}
                      />
                      
                      <div className="flex-1 opacity-70">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <label
                            htmlFor={`completed-${task.id}`}
                            className="text-base font-medium line-through"
                          >
                            {task.title}
                          </label>
                          
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">Completed</Badge>
                          </div>
                        </div>
                        
                        {task.description && (
                          <p className="text-sm text-muted-foreground mt-1 line-through">
                            {task.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        {/* Upcoming Tasks */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Upcoming Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 border rounded-md">
                <div className="rounded-md bg-primary/10 p-2">
                  <CalendarDays className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Weekly Vehicle Maintenance</h4>
                    <Badge>Tomorrow</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Complete weekly maintenance checklist for your assigned vehicle
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 border rounded-md">
                <div className="rounded-md bg-primary/10 p-2">
                  <CalendarDays className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Safety Training Session</h4>
                    <Badge>Apr 21</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Mandatory safety refresher for all drivers at the operations center
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Tasks;
