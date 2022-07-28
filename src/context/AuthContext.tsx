import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  createContext,
  useContext,
} from "react";

export interface Auth {
  loggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<Auth | undefined>(undefined);

type Props = {
  children?: ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }: Props) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext) as Auth;
};
