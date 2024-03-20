import React, { createContext, useContext, useEffect, useState } from 'react';

interface User {
  name?: string;
  username: string;
  token: string;
  profile_photo?: string | null;
}

interface TrimmedUrl {
  trimmedUrl: string;
  longUrl: string;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  authenticatedUser: User | null;
  setAuthenticatedUser: React.Dispatch<React.SetStateAction<User | null>>;
  trimmedUrls: TrimmedUrl[];
  addTrimmedUrl: (trimmedUrl: string, longUrl: string) => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => null,
  authenticatedUser: null,
  setAuthenticatedUser: () => null,
  trimmedUrls: [],
  addTrimmedUrl: () => null,
});

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [authenticatedUser, setAuthenticatedUser] = useState<User | null>(null);
  const [trimmedUrls, setTrimmedUrls] = useState<TrimmedUrl[]>([]);

  useEffect(() => {
    checkUserStatus();
    loadTrimmedUrls();
  }, []);

  const checkUserStatus = () => {
    let authUser = localStorage.getItem('user');
    setUser(authUser ? JSON.parse(authUser) : null);
  };

  const loadTrimmedUrls = () => {
    const savedTrimmedUrls = localStorage.getItem('trimmedUrls');
    if (savedTrimmedUrls) {
      setTrimmedUrls(JSON.parse(savedTrimmedUrls));
    }
  };

  const addTrimmedUrl = (trimmedUrl: string, longUrl: string) => {
    const updatedUrls = [...trimmedUrls, { trimmedUrl, longUrl }];
    setTrimmedUrls(updatedUrls);
    localStorage.setItem('trimmedUrls', JSON.stringify(updatedUrls));
  };

  
  const value: UserContextType = {
    user,
    setUser,
    authenticatedUser,
    setAuthenticatedUser,
    trimmedUrls,
    addTrimmedUrl,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useAuth = (): UserContextType => useContext(UserContext);

export default UserProvider;


