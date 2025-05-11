
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Users, UserPlus } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  status: 'active' | 'offline' | 'busy';
  lastActive: string;
}

const TeamManagement: React.FC = () => {
  const { t } = useLanguage();

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'John Doe',
      role: t('driverTeam'),
      status: 'active',
      lastActive: t('now')
    },
    {
      id: '2',
      name: 'Jane Smith',
      role: t('afcTeam'),
      status: 'busy',
      lastActive: '5m ' + t('ago')
    },
    {
      id: '3',
      name: 'Mike Johnson',
      role: t('securityTeam'),
      status: 'offline',
      lastActive: '1h ' + t('ago')
    },
    {
      id: '4',
      name: 'Sara Wilson',
      role: t('driverTeam'),
      status: 'active',
      lastActive: '2m ' + t('ago')
    },
    {
      id: '5',
      name: 'Alex Rahman',
      role: t('securityTeam'),
      status: 'offline',
      lastActive: '3h ' + t('ago')
    },
  ];

  const getStatusTranslation = (status: string) => {
    switch (status) {
      case 'active': return t('active');
      case 'busy': return t('busy');
      default: return t('offline');
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'active': return 'outline' as const;
      case 'busy': return 'secondary' as const;
      default: return 'default' as const;
    }
  };

  return (
    <DashboardLayout title={t('teamManagement')} requiredRole="manager">
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Users className="h-6 w-6" />
            <h1 className="text-2xl font-bold">{t('teamMembers')}</h1>
          </div>
          <Button>
            <UserPlus className="h-4 w-4 mr-2" />
            {t('addMember')}
          </Button>
        </div>

        <ScrollArea className="h-[calc(100vh-12rem)]">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.id}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-bold">{member.name}</CardTitle>
                  <Badge
                    variant={getStatusVariant(member.status)}
                  >
                    {getStatusTranslation(member.status)}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-1">
                    <div className="text-sm text-muted-foreground">
                      {t('role')}: {member.role}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t('lastActive')}: {member.lastActive}
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
