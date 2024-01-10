import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <Link to="/">
      <img
        className="logo"
        alt="logo"
        src="https://www.graphicdesk.in/images/client/logo8.png"
      />
    </Link>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-item">
          <ul>
            <li className="active">
              <Link to="/">Home </Link>
            </li>

            <li>
              <Link to="/about">About </Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>Cart</li>
          </ul>
        </div>

        {isLoggedIn ? (
          <button className="btn" onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        ) : (
          <button className="btn" onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
        )}
      </div>
    </>
  );
};

export default Header;
