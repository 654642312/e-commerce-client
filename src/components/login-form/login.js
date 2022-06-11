import "./styles.css";

function LoginForm() {
  return (
    <div className="login-container">
      <h3 className="login-container-title" >Login</h3>
      <div className="login-data">
        <div className="login-container-input">
          <label>Email</label>
          <input className="login-input" type="email" />
        </div>
        <div className="login-container-input">
          <label>Password</label>
          <input className="login-input" type="password" />
        </div>
      </div>
      <div>
        <button className="login-button" type="submit">Login</button>
      </div>
    </div>
  );
}

export default LoginForm;
