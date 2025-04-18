
import React from 'react';
import { CalendarDays, ChevronRight, Clock, MoreHorizontal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface ProjectItemProps {
  name: string;
  type: string;
  progress: number;
  dueDate: string;
  days: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ name, type, progress, dueDate, days }) => {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="space-y-1">
        <div className="flex items-center gap-1">
          <span className="font-medium">{name}</span>
          <span className="rounded-full px-2 py-0.5 text-xs bg-accent/50">{type}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{dueDate}</span>
          </div>
          <div>
            <span className={days < 3 ? "text-destructive" : ""}>{days} days left</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{progress}%</span>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <Progress value={progress} className="h-1.5 w-24" />
      </div>
    </div>
  );
};

const ProjectsOverview: React.FC = () => {
  const projects = [
    { name: "Sports Tournament", type: "Event", progress: 75, dueDate: "Aug 15", days: 12 },
    { name: "Concert Series", type: "Event", progress: 45, dueDate: "Jul 30", days: 2 },
    { name: "Campus Move-In", type: "Logistics", progress: 15, dueDate: "Aug 25", days: 18 },
    { name: "Trade Show Setup", type: "Event", progress: 90, dueDate: "Jul 29", days: 1 },
  ];

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-md font-medium">Projects Overview</CardTitle>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <CalendarDays className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-1 divide-y divide-border/60">
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectsOverview;
