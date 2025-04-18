
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import ManagerDashboard from "./pages/ManagerDashboard";
import AFCDashboard from "./pages/AFCDashboard";
import DriverDashboard from "./pages/DriverDashboard";
import Schedule from "./pages/Schedule";
import Guidelines from "./pages/Guidelines";
import Tasks from "./pages/Tasks";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/manager" element={<ManagerDashboard />} />
        <Route path="/afc" element={<AFCDashboard />} />
        <Route path="/driver" element={<DriverDashboard />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
