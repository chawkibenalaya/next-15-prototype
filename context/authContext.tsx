'use client';

import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

type UserDto = {
  firstName: string;
  lastName: string;
  email: string;
};

type AuthContextType = {
  user: UserDto | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  logout: () => void;
  login: (user:UserDto) => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  logout: () => {},
  login: (user:UserDto) => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserDto | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const login = (user:UserDto) => {
    setUser(user);
    setIsAuthenticated(true);
 }
  const fetchMe = async () => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL+'/auth/me', {
        credentials: 'include',
      });
      if (!res.ok) throw new Error('Non connecté');
      const data = await res.json();
      setUser(data);
      setIsAuthenticated(true);
    } catch {
      setUser(null);
      setIsAuthenticated(false);
      router.push('/');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMe();
  }, []);

  const logout = async () => {
    await fetch(process.env.NEXT_PUBLIC_API_URL+'/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });
    router.push('/');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: isAuthenticated,
        isLoading,
        logout,
        login
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
