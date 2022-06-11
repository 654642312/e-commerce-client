import { Link } from "react-router-dom";
import "./styles.css";

export function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-logo">
          <Link to={"home"}>
            <span>E-COMMERCE</span>
          </Link>
        </div>
        <ul className="nav-ul">
          <li>
            <Link to={"home"}>Home</Link>
          </li>
          <li>
            <Link to={"products"}>Products</Link>
          </li>
          <li>
            <Link to={"cart"}>Cart</Link>
          </li>
          <li>
            <Link to={"login"}>Login</Link>
          </li>
          <li>
            <Link to={"signup"}>Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
