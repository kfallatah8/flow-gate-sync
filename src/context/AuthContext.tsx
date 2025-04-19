
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export type UserRole = 'manager' | 'afc' | 'driver' | null;

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string, role: UserRole) => boolean; // Changed return type to boolean
  logout: () => void;
  isAuthenticated: boolean;
}

// Sample users data
const USERS: User[] = [
  {
    id: '1',
    name: 'Manager Admin',
    email: 'manager@flowgate.com',
    role: 'manager',
    avatar: '',
  },
  {
    id: '2',
    name: 'AFC Coordinator',
    email: 'afc@flowgate.com',
    role: 'afc',
    avatar: '',
  },
  {
    id: '3',
    name: 'Driver One',
    email: 'driver@flowgate.com',
    role: 'driver',
    avatar: '',
  }
];

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const navigate = useNavigate();
  
  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, password: string, role: UserRole): boolean => {
    // Simple mock authentication
    const user = USERS.find(u => u.email === email && u.role === role);
    
    if (user) {
      setCurrentUser(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      
      // Redirect based on role
      if (role === 'manager') {
        navigate('/manager');
      } else if (role === 'afc') {
        navigate('/afc');
      } else if (role === 'driver') {
        navigate('/driver');
      }
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <AuthContext.Provider 
      value={{ 
        currentUser, 
        login, 
        logout, 
        isAuthenticated: !!currentUser 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
