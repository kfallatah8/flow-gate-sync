
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLanguage } from '@/context/LanguageContext';

const Guidelines: React.FC = () => {
  const { t } = useLanguage();
  
  const guidelines = [
    {
      titleKey: "vehicleOperation",
      content: "Always perform pre-trip inspections. Follow speed limits and traffic rules. Report any vehicle issues immediately."
    },
    {
      titleKey: "passengerSafety",
      content: "Ensure all passengers are properly seated. Follow designated pickup and drop-off points. Assist passengers when needed."
    },
    {
      titleKey: "emergencyProcedures",
      content: "Keep emergency contact numbers handy. Know evacuation procedures. Report all incidents promptly."
    },
    {
      titleKey: "communicationProtocol",
      content: "Maintain professional communication. Use designated channels for updates. Keep supervisors informed of status."
    },
  ];

  return (
    <DashboardLayout title={t('guidelines')}>
      <div className="container mx-auto p-6">
        <ScrollArea className="h-[calc(100vh-12rem)]">
          <div className="space-y-6">
            {guidelines.map((guideline, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{t(guideline.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{guideline.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </DashboardLayout>
  );
};

export default Guidelines;
