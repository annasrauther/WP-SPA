// Import dependencies
import React, { createContext, useContext, useEffect, useState } from "react";

// Import services
import { validateToken } from "../services/authService";

/**
 * AuthContextType
 *
 * @interface AuthContextType
 * @property {boolean} authenticated
 * @property {(token: string) => void} login
 * @property {() => void} logout
 */
interface AuthContextType {
  authenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

/**
 * AuthContext
 *
 * @const
 * @type {React.Context<AuthContextType | undefined>}
 */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * AuthProviderProps
 *
 * @interface AuthProviderProps
 * @property {React.ReactNode} children
 */
interface AuthProviderProps {
  children: React.ReactNode;
}

/**
 * AuthProvider component
 *
 * @param {AuthProviderProps} props
 * @returns {JSX.Element}
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // set authenticated to false by default
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check for an existing token in local storage when the component mounts
    const token = localStorage.getItem("jwtToken");

    // If there is a token, check if it is valid
    if (token) {
      // Validate the token
      validateToken(token)
        .then((isValid) => {
          // If the token is valid, set authenticated to true, otherwise remove the token from local storage
          if (isValid) {
            setAuthenticated(true);
          } else {
            localStorage.removeItem("jwtToken");
            localStorage.removeItem("name");
            setAuthenticated(false);
          }
        })
        .catch((error) => {
          console.error("Token validation error", error);
        });
    }
  }, []);

  /**
   * Login function
   * @param {string} token
   * @returns {void}
   */
  const login = (token: string) => {
    localStorage.setItem("jwtToken", token); // Store the token in local storage
    setAuthenticated(true);
  };

  /**
   * Logout function
   * @returns {void}
   */
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

/**
 * useAuth hook
 *
 * @returns {AuthContextType}
 */
export const useAuth = () => {
  // Retrieve the context from AuthContext
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
