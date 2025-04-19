
import React, { useState } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { MapPin, CalendarClock, Users, Clock } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from '@/context/LanguageContext';

const Request: React.FC = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('requestSubmitted'),
      description: t('yourRideRequestHasBeenSubmittedSuccessfully'),
    });
    setRequestSubmitted(true);
  };

  return (
    <DashboardLayout title={t('requestRide')} requiredRole="afc">
      <div className="container mx-auto p-6">
        {!requestSubmitted ? (
          <Card>
            <CardHeader>
              <CardTitle>{t('newRideRequest')}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitRequest} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="pickup-location">
                    <MapPin className="h-4 w-4 inline mr-2" />
                    {t('pickupLocation')}
                  </Label>
                  <Select required>
                    <SelectTrigger id="pickup-location">
                      <SelectValue placeholder={t('selectPickupLocation')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="main-gate">Main Gate</SelectItem>
                      <SelectItem value="north-entrance">North Entrance</SelectItem>
                      <SelectItem value="hotel-lobby">Hotel Lobby</SelectItem>
                      <SelectItem value="stadium">Stadium Entrance</SelectItem>
                      <SelectItem value="convention-center">Convention Center</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="destination">
                    <MapPin className="h-4 w-4 inline mr-2" />
                    {t('destination')}
                  </Label>
                  <Select required>
                    <SelectTrigger id="destination">
                      <SelectValue placeholder={t('selectDestination')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="airport">Airport</SelectItem>
                      <SelectItem value="convention-center">Convention Center</SelectItem>
                      <SelectItem value="hotel">Main Hotel</SelectItem>
                      <SelectItem value="stadium">Stadium</SelectItem>
                      <SelectItem value="exhibition-hall">Exhibition Hall</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date">
                      <CalendarClock className="h-4 w-4 inline mr-2" />
                      {t('date')}
                    </Label>
                    <Input type="date" id="date" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="time">
                      <Clock className="h-4 w-4 inline mr-2" />
                      {t('time')}
                    </Label>
                    <Input type="time" id="time" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="passengers">
                    <Users className="h-4 w-4 inline mr-2" />
                    {t('numberOfPassengers')}
                  </Label>
                  <Select required>
                    <SelectTrigger id="passengers">
                      <SelectValue placeholder={t('selectNumberOfPassengers')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5+">5+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="special-instructions">{t('specialInstructions')}</Label>
                  <Textarea id="special-instructions" placeholder={t('anySpecialRequirementsOrNotes')} />
                </div>
                
                <Button type="submit" className="w-full">{t('submitRequest')}</Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="bg-green-100 text-green-800 p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">{t('requestSubmitted')}</h2>
                <p className="text-gray-500">{t('yourRideRequestHasBeenSubmittedSuccessfully')}</p>
                <p className="text-gray-500">{t('youWillBeNotifiedWhenDriverAssigned')}</p>
                <Button onClick={() => setRequestSubmitted(false)} className="mt-4">{t('submitAnotherRequest')}</Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Request;
