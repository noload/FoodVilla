import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/UserContext";

const Title = () => {
  return (
    <Link to="/">
      <img
        className="w-32"
        alt="logo"
        src="https://www.graphicdesk.in/images/client/logo8.png"
      />
    </Link>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const { user } = useContext(userContext);

  return (
    <>
      <div className="flex w-full h-28 items-center justify-between bg-red-300 shadow-lg  text-white text-lg font-semibold">
        <Title />
        <div>
          <ul className="flex ">
            <li className="px-2 hover:text-red-600">
              <Link to="/">Home </Link>
            </li>

            <li className="px-2 hover:text-red-600">
              <Link to="/about">About </Link>
            </li>

            <li className="px-2 hover:text-red-600">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-2 hover:text-red-600">Cart</li>

            <li className="px-2 hover:text-red-600">
              <Link to="/instamart">Instamart </Link>
            </li>
          </ul>
        </div>
        <div>{user.name}</div>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
    </>
  );
};

export default Header;
