import { useState } from "react";
import "./styles.css";
import { registerUser } from "../../services/users/users";
import { saveToken } from "../../helper/helpers";

function SignUp({ closeModal }) {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("pistol");

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const signup = async (e) => {
    e.preventDefault();
    const response = await registerUser({ email, password });
    saveToken(response.token)
    closeModal();
  };

  return (
    <form onSubmit={(e) => signup(e)}>
      <div className="signup-container">
        <h3 className="signup-container-title">Sign Up</h3>
        <div className="signup-data">
          <div className="signup-container-input">
            <label>Email</label>
            <input
              onChange={(e) => getEmail(e)}
              className="signup-input"
              type="email"
              value={email}
              placeholder="eve.holt@reqres.in"
            />
          </div>
          <div className="signup-container-input">
            <label>Password</label>
            <input
              onChange={(e) => getPassword(e)}
              className="signup-input"
              type="password"
              value={password}
              placeholder="pistol"
            />
          </div>
        </div>
        <div>
          <button
            className="signup-button"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
