import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/user/user-context";
import "./styles.css";

export function Navbar({ openModal1, openModal2 }) {
  const userContext = useContext(UserContext);

  function handleLogOut() {
    userContext.logOut();
  }

  return (
    <nav className="nav">
      <div className="container">
        <input id="check" type="checkbox"></input>
        <label htmlFor="check" className="checkbtn">
          <svg
            fill="#ffffff"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="30px"
            height="30px"
            viewBox="0 0 122.879 103.609"
            enableBackground="new 0 0 122.879 103.609"
            xmlSpace="preserve"
          >
            <g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.368,0h102.144c5.703,0,10.367,4.665,10.367,10.367v0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,20.735,0,16.07,0,10.368v0C0,4.665,4.666,0,10.368,0L10.368,0z M10.368,82.875 h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0c0,5.702-4.664,10.367-10.367,10.367H10.368C4.666,103.609,0,98.944,0,93.242l0,0 C0,87.54,4.666,82.875,10.368,82.875L10.368,82.875z M10.368,41.438h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,62.173,0,57.507,0,51.805l0,0C0,46.103,4.666,41.438,10.368,41.438 L10.368,41.438z"
              />
            </g>
          </svg>
        </label>
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
          {userContext.isLogin ? (
            <li>
              <span onClick={handleLogOut}>Log out</span>
            </li>
          ) : (
            <>
              <li>
                <span onClick={openModal1}>Login</span>
              </li>
              <li>
                <span onClick={openModal2}>Sign Up</span>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
