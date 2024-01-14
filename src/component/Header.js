import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <Link to="/">
      <img
        className="h-28 px-2"
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
      <div className="flex justify-between bg-red-300 shadow-lg">
        <Title />
        <div className="">
          <ul className="flex py-10">
            <li className="px-2">
              <Link to="/">Home </Link>
            </li>

            <li className="px-2">
              <Link to="/about">About </Link>
            </li>

            <li className="px-2">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-2">Cart</li>

            <li className="px-2">
              <Link to="/instamart">Instamart </Link>
            </li>
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
