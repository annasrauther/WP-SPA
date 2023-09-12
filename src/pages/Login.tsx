import React from "react";
import "../styles/login.css";

const Login = () => {
  return (
    <>
      <h1>Login</h1>

      <div className="login">
        {/* Connect this form with the WP JWT API. */}
        <form method="post">
          <div>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" name="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" />
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
