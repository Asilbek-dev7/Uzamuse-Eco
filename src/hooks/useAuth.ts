import { useState, useEffect } from 'react';

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock auth check
    const storedUser = localStorage.getItem('mock_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signInWithGoogle = async () => {
    // Mock sign in
    const mockUser: User = {
      uid: 'mock_uid',
      email: 'user@example.com',
      displayName: 'Mock User',
      photoURL: 'https://picsum.photos/seed/user/200/200'
    };
    localStorage.setItem('mock_user', JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const signOut = async () => {
    localStorage.removeItem('mock_user');
    setUser(null);
  };

  return { user, loading, signInWithGoogle, signOut };
};
