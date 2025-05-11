
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const Index: React.FC = () => {
  const { isAuthenticated, currentUser } = useAuth();
  
  // If authenticated, redirect based on role
  if (isAuthenticated && currentUser) {
    // Redirect to appropriate dashboard based on role
    return <Navigate to={`/${currentUser.role}`} replace />;
  }
  
  // If not authenticated, redirect to login
  return <Navigate to="/login" replace />;
};

export default Index;
