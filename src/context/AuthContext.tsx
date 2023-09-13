import React, { createContext, useContext, useEffect, useState } from "react";
import AuthService from "../services/authService";

interface AuthContextType {
  authenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check for an existing token in local storage when the component mounts
    const token = localStorage.getItem("jwtToken");
    if (token) {
      AuthService.validateToken(token)
        .then((isValid) => {
          if (isValid) {
            setAuthenticated(true);
          } else {
            localStorage.removeItem("jwtToken");
            setAuthenticated(false);
          }
        })
        .catch((error) => {
          console.error("Token validation error", error);
        });
    }
  }, []);

  const login = (token: string) => {
    localStorage.setItem("jwtToken", token); // Store the token in local storage
    setAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("jwtToken"); // Remove the token from storage
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
