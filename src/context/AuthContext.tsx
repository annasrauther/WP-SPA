// Import dependencies
import React, { createContext, useEffect, useState } from "react";

// Import services
import { validateToken } from "../services/authService";

// Constants for local storage keys
const TOKEN_KEY = "jwtToken";
const NAME_KEY = "name";

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
 * @default undefined
 * @returns {React.Context<AuthContextType | undefined>}
 * @exports
 */
export const AuthContext: React.Context<AuthContextType | undefined> =
  createContext<AuthContextType | undefined>(undefined);

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
export const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
}: AuthProviderProps): JSX.Element => {
  // Set authenticated to false by default
  const [authenticated, setAuthenticated] = useState(false);

  // Function to validate and set token
  const validateAndSetToken = async (token: string) => {
    try {
      const isValid = await validateToken(token);

      if (isValid) {
        localStorage.setItem(TOKEN_KEY, token);
        setAuthenticated(true);
      } else {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(NAME_KEY);
        setAuthenticated(false);
      }
    } catch (error) {
      console.error("Token validation error", error);
    }
  };

  useEffect(() => {
    // Check for an existing token in local storage when the component mounts
    const token = localStorage.getItem(TOKEN_KEY);

    // If there is a token, check if it is valid
    if (token) {
      validateAndSetToken(token);
    }
  }, []);

  /**
   * Login function
   * @param {string} token
   * @returns {void}
   */
  const login = (token: string): void => {
    validateAndSetToken(token);
  };

  /**
   * Logout function
   * @returns {void}
   */
  const logout = (): void => {
    localStorage.removeItem(TOKEN_KEY);
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
