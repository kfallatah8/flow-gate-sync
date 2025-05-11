
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import ManagerDashboard from "./pages/ManagerDashboard";
import AFCDashboard from "./pages/AFCDashboard";
import DriverDashboard from "./pages/DriverDashboard";
import Schedule from "./pages/Schedule";
import Guidelines from "./pages/Guidelines";
import Tasks from "./pages/Tasks";
import FormSubmissions from "./pages/FormSubmissions";
import TeamManagement from "./pages/TeamManagement";
import FleetManagement from "./pages/FleetManagement";
import MyRides from "./pages/MyRides";
import Settings from "./pages/Settings";
import Request from "./pages/Request";
import Messaging from "./pages/Messaging";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/manager" element={<ManagerDashboard />} />
          <Route path="/afc" element={<AFCDashboard />} />
          <Route path="/driver" element={<DriverDashboard />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/form-submissions" element={<FormSubmissions />} />
          <Route path="/team" element={<TeamManagement />} />
          <Route path="/fleet" element={<FleetManagement />} />
          <Route path="/my-rides" element={<MyRides />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/request" element={<Request />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
        <Sonner />
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
