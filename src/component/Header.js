import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import useOnline from "../utils/useOnline";

const Title = () => {
  return (
    <Link to="/">
      <img
        data-testid="logo"
        className="w-32"
        alt="logo"
        src="https://www.graphicdesk.in/images/client/logo8.png"
      />
    </Link>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { user } = useContext(UserContext);
  const isOnline = useOnline();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <>
      <div className="flex w-full h-28 items-center justify-between bg-red-300 shadow-lg  text-white text-lg font-semibold">
        <Title />
        <div>
          <ul className="flex ">
            <li className="px-2 transition-colors hover:text-red-600 ease-in-out duration-1000">
              <Link to="/">Home </Link>
            </li>

            <li className="px-2 transition-colors hover:text-red-600 ease-in-out duration-1000 ">
              <Link to="/about">About </Link>
            </li>

            <li className="px-2 transition-colors hover:text-red-600 ease-in-out duration-1000">
              <Link to="/contact">Contact</Link>
            </li>

            <li className="px-2 transition-colors hover:text-red-600 ease-in-out duration-1000">
              <Link to="/instamart">Instamart </Link>
            </li>
            <li className="px-2 transition-colors  hover:text-red-600 ease-in-out duration-700">
              <Link data-testid="cart" to="/cart">
                cart-{cartItems.length}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex">
          {user.name}
          <h1 data-testid="onlineStatus">{isOnline ? " 🟢 " : " 🔴 "}</h1>
        </div>
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
