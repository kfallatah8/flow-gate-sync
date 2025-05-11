
import React, { useState } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/context/LanguageContext';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Camera } from 'lucide-react';

const Settings: React.FC = () => {
  const { t } = useLanguage();
  const { currentUser } = useAuth();
  const { toast } = useToast();
  const [profileData, setProfileData] = useState({
    name: currentUser?.name || '',
    email: currentUser?.email || '',
    bio: ''
  });
  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: ''
  });
  
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPassword(prev => ({
      ...prev,
      [id.replace('password-', '')]: value
    }));
  };
  
  const handleSaveProfile = () => {
    toast({
      title: t('profileUpdated'),
      description: t('profileUpdateSuccess'),
    });
  };
  
  const handleUpdatePassword = () => {
    if (password.new !== password.confirm) {
      toast({
        title: t('error'),
        description: t('passwordsDoNotMatch'),
        variant: 'destructive'
      });
      return;
    }
    
    toast({
      title: t('passwordUpdated'),
      description: t('passwordUpdateSuccess'),
    });
    
    setPassword({
      current: '',
      new: '',
      confirm: ''
    });
  };

  return (
    <DashboardLayout title={t('settings')}>
      <div className="container mx-auto p-6">
        <Tabs defaultValue="profile">
          <TabsList className="grid w-full md:w-fit grid-cols-4 mb-8">
            <TabsTrigger value="profile">{t('profile')}</TabsTrigger>
            <TabsTrigger value="account">{t('accountSettings')}</TabsTrigger>
            <TabsTrigger value="notifications">{t('notifications')}</TabsTrigger>
            <TabsTrigger value="appearance">{t('appearance')}</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('profileInformation')}</CardTitle>
                  <CardDescription>{t('updateYourProfileInfo')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <div className="relative">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src={currentUser?.avatar} alt={currentUser?.name} />
                        <AvatarFallback className="text-xl">
                          {currentUser?.name?.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <Button 
                        size="icon" 
                        variant="outline" 
                        className="absolute bottom-0 right-0 rounded-full h-8 w-8"
                      >
                        <Camera className="h-4 w-4" />
                        <span className="sr-only">{t('changeAvatar')}</span>
                      </Button>
                    </div>
                    <div className="space-y-1 text-center sm:text-left">
                      <h3 className="text-lg font-medium">{currentUser?.name}</h3>
                      <p className="text-sm text-muted-foreground">{currentUser?.email}</p>
                      <p className="text-sm text-muted-foreground">{t(currentUser?.role || '')}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('name')}</Label>
                      <Input 
                        id="name" 
                        value={profileData.name} 
                        onChange={handleProfileChange} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('email')}</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={profileData.email}
                        onChange={handleProfileChange} 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">{t('bio')}</Label>
                    <Textarea 
                      id="bio" 
                      rows={4}
                      placeholder={t('bioPlaceholder')}
                      value={profileData.bio}
                      onChange={handleProfileChange}
                    />
                  </div>
                  
                  <Button onClick={handleSaveProfile}>
                    {t('saveChanges')}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="account">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('loginSettings')}</CardTitle>
                  <CardDescription>{t('manageYourLoginInformation')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password-current">{t('currentPassword')}</Label>
                    <Input 
                      id="password-current" 
                      type="password" 
                      value={password.current}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password-new">{t('newPassword')}</Label>
                      <Input 
                        id="password-new" 
                        type="password"
                        value={password.new}
                        onChange={handlePasswordChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password-confirm">{t('confirmPassword')}</Label>
                      <Input 
                        id="password-confirm" 
                        type="password"
                        value={password.confirm}
                        onChange={handlePasswordChange}
                      />
                    </div>
                  </div>
                  <Button className="mt-4" onClick={handleUpdatePassword}>
                    {t('updatePassword')}
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>{t('accountPreferences')}</CardTitle>
                  <CardDescription>{t('manageYourAccountPreferences')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{t('twoFactorAuth')}</p>
                      <p className="text-sm text-muted-foreground">{t('enableTwoFactorAuth')}</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{t('emailVerification')}</p>
                      <p className="text-sm text-muted-foreground">{t('verifyYourEmail')}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      {t('verify')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>{t('notificationSettings')}</CardTitle>
                <CardDescription>{t('manageYourNotificationPreferences')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{t('rideAlerts')}</p>
                    <p className="text-sm text-muted-foreground">{t('receiveAlertsForNewRideAssignments')}</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{t('scheduleChanges')}</p>
                    <p className="text-sm text-muted-foreground">{t('notifyMeWhenMyScheduleChanges')}</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{t('teamMessages')}</p>
                    <p className="text-sm text-muted-foreground">{t('receiveNotificationsForTeamMessages')}</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{t('emailNotifications')}</p>
                    <p className="text-sm text-muted-foreground">{t('receiveEmailSummariesDailyActivity')}</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{t('appNotifications')}</p>
                    <p className="text-sm text-muted-foreground">{t('receivePushNotifications')}</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appearance">
            <Card>
              <CardHeader>
                <CardTitle>{t('appearanceSettings')}</CardTitle>
                <CardDescription>{t('customizeYourInterface')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{t('darkMode')}</p>
                    <p className="text-sm text-muted-foreground">{t('toggleDarkMode')}</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{t('compactView')}</p>
                    <p className="text-sm text-muted-foreground">{t('useCompactViewForDashboard')}</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{t('highContrastMode')}</p>
                    <p className="text-sm text-muted-foreground">{t('increaseContrast')}</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="space-y-2">
                  <Label>{t('fontSize')}</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" size="sm">
                      {t('small')}
                    </Button>
                    <Button variant="outline" size="sm" className="bg-accent">
                      {t('medium')}
                    </Button>
                    <Button variant="outline" size="sm">
                      {t('large')}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
