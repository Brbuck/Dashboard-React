import React from "react";
import "./styles.scss";

import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  return (
    <div className="wrapper-container">
      <div className="container-login">
        <h1>Login</h1>
        <input type="email" placeholder="email" value="test.test@gmail.com" />
        <input type="password" placeholder="email" value="123456" />
        <label>
          <input type="checkbox" />
          Remember
        </label>
        <button
          type="button"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          login
        </button>
      </div>
    </div>
  );
}

export default Login;
