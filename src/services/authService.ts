import { JWT_TOKEN, JWT_VALIDATE } from "./endpoints";

const AuthService = {
  login: async (
    username: string,
    password: string,
    loginCallback: (token: string) => void,
  ): Promise<void> => {
    const response = await fetch(JWT_TOKEN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      const { token, user_display_name: name } = data;
      // Store the token securely (e.g., in local storage or cookies).
      localStorage.setItem("jwtToken", token);
      localStorage.setItem("name", name);
      loginCallback(token);
    } else {
      throw new Error("Failed to Login");
    }
  },

  validateToken: async (token: string): Promise<boolean> => {
    const response = await fetch(JWT_VALIDATE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.ok;
  },
};

export default AuthService;
