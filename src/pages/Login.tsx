
import React, { useState } from 'react';
import { Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast'; // Updated path to use hooks folder
import { UserRole } from '@/context/AuthContext';
import { useAuth } from '@/context/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<UserRole>('manager');
  const { login } = useAuth();
  const { toast } = useToast();
  
  // Default email values for each role for demo purposes
  const defaultEmails = {
    manager: 'manager@flowgate.com',
    afc: 'afc@flowgate.com',
    driver: 'driver@flowgate.com'
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For demo, we accept any password, but in a real app this would validate
    const success = login(email, password, activeTab);
    
    if (!success) {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Invalid email or password. Please try again.",
      });
    }
  };
  
  const handleTabChange = (value: string) => {
    setActiveTab(value as UserRole);
    setEmail(defaultEmails[value as keyof typeof defaultEmails]);
  };
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/10 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-2">
            <div className="rounded-md bg-primary p-2">
              <Activity className="h-8 w-8 text-primary-foreground" strokeWidth={2.5} />
            </div>
          </div>
          <CardTitle className="text-2xl">FlowGate Login</CardTitle>
          <CardDescription>Select your role to access the dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="manager" className="w-full" onValueChange={handleTabChange}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="manager">Manager</TabsTrigger>
              <TabsTrigger value="afc">AFC Client</TabsTrigger>
              <TabsTrigger value="driver">Driver</TabsTrigger>
            </TabsList>
            
            <form onSubmit={handleLogin} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="text-sm text-muted-foreground mt-2">
            Demo accounts available:<br/>
            For demo purposes, use any password with the corresponding email.
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
