import { useState } from "react";

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://www.graphicdesk.in/images/client/logo8.png"
      />
    </a>
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
            <li className="active">Home</li>
            <li>About</li>
            <li>Contact</li>
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
