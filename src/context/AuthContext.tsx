import { createContext } from 'react';

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  isAdmin: boolean | null;
  setIsAdmin: (isAdmin: boolean | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;