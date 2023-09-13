import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
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
