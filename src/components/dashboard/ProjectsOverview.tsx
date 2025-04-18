
import React from 'react';
import { CalendarDays, ChevronRight, Clock, MoreHorizontal, Plane, Bus, SoccerBall } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface ProjectItemProps {
  name: string;
  type: 'Pickup' | 'Drop-off' | 'Match';
  progress: number;
  dueDate: string;
  days: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ name, type, progress, dueDate, days }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Pickup':
        return <Plane className="h-4 w-4" />;
      case 'Drop-off':
        return <Bus className="h-4 w-4" />;
      case 'Match':
        return <SoccerBall className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-between py-3">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="font-medium">{name}</span>
          <span className="rounded-full px-2 py-0.5 text-xs bg-accent/50 flex items-center gap-1">
            {getIcon(type)}
            {type}
          </span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{dueDate}</span>
          </div>
          <div>
            <span className={days < 3 ? "text-destructive" : ""}>{days} hours left</span>
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
  const projects: ProjectItemProps[] = [
    { name: "Team A Arrival - Okaz", type: "Pickup", progress: 75, dueDate: "14:30", days: 2 },
    { name: "VIP Transfer - KFS", type: "Drop-off", progress: 45, dueDate: "15:45", days: 4 },
    { name: "Asian Cup - Okaz", type: "Match", progress: 85, dueDate: "18:00", days: 6 },
    { name: "Team B Departure - KFS", type: "Drop-off", progress: 30, dueDate: "20:15", days: 8 },
  ];

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-md font-medium">Transport & Match Overview</CardTitle>
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

