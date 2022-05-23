import React, { useState } from "react";
import { SERVER_API } from "@env";
import axios from "axios";

export interface User {
  username: string;
  email: string;
  favourites: [];
}

export interface Auth {
  username: string | null;
  email: string | null;
  password: string;
}

export type AuthContextType = {
  user: User;
  login: (user: Auth) => Promise<void>;
  register: (user: Auth) => Promise<void>;
};

export const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    favourites: [],
  });

  const login = async (user: Auth): Promise<void> => {
    try {
      const { data } = await axios.post(`${SERVER_API}login`, {
        params: { user },
      });

      if (data.user) {
        setUser(data.user);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const register = async (user: Auth): Promise<void> => {
    try {
      const { data } = await axios.post(`${SERVER_API}register`, {
        params: { user },
      });

      if (data.user) {
        setUser(data.user);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
