
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Users, UserPlus } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  status: 'active' | 'offline' | 'busy';
  lastActive: string;
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'Driver',
    status: 'active',
    lastActive: 'Now'
  },
  {
    id: '2',
    name: 'Jane Smith',
    role: 'AFC',
    status: 'busy',
    lastActive: '5m ago'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    role: 'Driver',
    status: 'offline',
    lastActive: '1h ago'
  },
];

const TeamManagement: React.FC = () => {
  return (
    <DashboardLayout title="Team Management" requiredRole="manager">
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Users className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Team Members</h1>
          </div>
          <Button>
            <UserPlus className="h-4 w-4 mr-2" />
            Add Member
          </Button>
        </div>

        <ScrollArea className="h-[calc(100vh-12rem)]">
          <div className="grid gap-4">
            {teamMembers.map((member) => (
              <Card key={member.id}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-bold">{member.name}</CardTitle>
                  <Badge
                    variant={
                      member.status === 'active' ? 'success' :
                      member.status === 'busy' ? 'warning' : 'secondary'
                    }
                  >
                    {member.status}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-1">
                    <div className="text-sm text-muted-foreground">
                      Role: {member.role}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Last active: {member.lastActive}
                    </div>
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

export default TeamManagement;
