import "./styles.css";

function signUp() {
  return (
    <div className="signup-container">
      <h3 className="signup-container-title">Sign Up</h3>
      <div className="signup-data">
        <div className="signup-container-input">
          <label>Username</label>
          <input className="signup-input" type="Username" />
        </div>
        <div className="signup-container-input">
          <label>Email</label>
          <input className="signup-input" type="email" />
        </div>
        <div className="signup-container-input">
          <label>Password</label>
          <input className="signup-input" type="password" />
        </div>
      </div>
      <div>
        <button className="signup-button" type="submit">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default signUp;
