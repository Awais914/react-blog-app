import { createContext, useState } from "react";
import { getSession, saveSession, deleteSession } from "utils/session";

interface AuthContextType {
  isAuth: string | boolean | null;
  storeAuth: (token: string) => void;
  removeAuth: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuth: null,
  storeAuth: () => {},
  removeAuth: () => {},
});

interface UserProviderProps {
  children?: JSX.Element | JSX.Element[] | undefined;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<string | boolean | null>(() => {
    return getSession("token");
  });

  const value: AuthContextType = {
    isAuth,
    storeAuth: (token: string) => {
      saveSession("token", token);
      setIsAuth(true);
    },
    removeAuth: () => {
      setIsAuth(false);
      deleteSession();
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const Consumer = AuthContext.Consumer;
export default AuthContext;
