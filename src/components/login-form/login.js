import "./styles.css";
import { useState } from "react";
import { login } from "../../services/users/users";
import { saveToken } from "../../helper/helpers";

function LoginForm({ closeModal }) {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("pistol");

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const response = await login({ email, password });
    saveToken(response.token)
    closeModal()
  };

  return (
    <form onSubmit={(e) => loginUser(e)}>
      <div className="login-container">
        <h3 className="login-container-title">Login</h3>
        <div className="login-data">
          <div className="login-container-input">
            <label>Email</label>
            <input
              onChange={(e) => getEmail(e)}
              required
              placeholder="eve.holt@reqres.in"
              value={email}
              className="login-input"
              type="email"
            />
          </div>
          <div className="login-container-input">
            <label>Password</label>
            <input
              onChange={(e) => getPassword(e)}
              required
              placeholder="pistol"
              value={password}
              className="login-input"
              type="password"
            />
          </div>
        </div>
        <div>
          <button className="login-button" type="submit">
            Login
          </button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
