import React, { useState } from "react";
interface User {
  name: string;
  favourites: [];
}

type AuthContextType = {
  user: User;
};

export const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [user, setUser] = useState<User>();

  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
