import { JWT_TOKEN, JWT_VALIDATE } from "./endpoints";

/**
 * Logs in the user and stores the token.
 *
 * @param {string} username - The username.
 * @param {string} password - The password.
 * @param {(token: string) => void} loginCallback - The login callback function.
 * @returns {Promise<void>} A promise that resolves when the login is successful.
 */
export async function login(
  username: string,
  password: string,
  loginCallback: (token: string) => void,
) {
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
}

/**
 * Validates a JWT token.
 *
 * @param {string} token - The JWT token to validate.
 * @returns {Promise<boolean>} A promise that resolves with a boolean indicating token validity.
 */
export async function validateToken(token: string) {
  const response = await fetch(JWT_VALIDATE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.ok;
}
