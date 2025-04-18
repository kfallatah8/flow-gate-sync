
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import UserSidebar from '@/components/dashboard/UserSidebar';
import UserHeader from '@/components/dashboard/UserHeader';
import { UserRole } from '@/context/AuthContext';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  requiredRole?: UserRole;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  title = "Dashboard",
  requiredRole
}) => {
  const { currentUser, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  // Check if user has required role (if specified)
  if (requiredRole && currentUser?.role !== requiredRole) {
    return <Navigate to={`/${currentUser?.role}`} replace />;
  }
  
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <UserSidebar />
      
      {/* Main content */}
      <div className="flex w-full flex-col">
        <UserHeader title={title} />
        
        <main className="flex-1 bg-muted/10 p-4 md:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
