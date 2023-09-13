// Import dependencies
import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

// Import hooks
import { useAuth } from "../hooks/useAuth";

// Import services
import { login } from "../services/authService";

// Import styles
import "../styles/login.css";

/**
 * Login component
 *
 * @returns {JSX.Element}
 * @component
 */
const Login: React.FC = (): JSX.Element => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Login function from AuthContext
  const { login: authLogin } = useAuth();

  // Declare navigate function
  const navigate = useNavigate();

  // Handle form submit event
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Attempt login
      const token = await login(username, password);

      // If successful, set token and navigate to home page
      if (token) {
        // Set token using context
        authLogin(token);

        // Navigate to home page
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed", error);
      // Handle login error
      alert("Login failed. Please try again.");

      // Clear form
      setUsername("");
      setPassword("");
    }
  };

  return (
    <>
      <h1>Login</h1>
      <div className="login">
        <form method="post" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
