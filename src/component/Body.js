import { useState } from "react";
import RestrauntCard from "./RestrauntCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurantList from "../utils/useRestaurantList";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [inputValue, setInputValue] = useState("");
  const [restaurantMenu, allRestaurantMenu, setRestaurantMenu] =
    useRestaurantList();

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1> You are disconnected </h1>;
  }
  return (
    <>
      <div className="bg-red-200 py-8 flex justify-center ">
        <input
          data-testid="searchInput"
          className=" w-1/2 h-10 block px-3 py-2 bg-white  text-lg shadow-sm placeholder-slate-400
          focus:outline-none border border-red-500 border-r-0 focus:border-2
      
        "
          type="text"
          placeholder="search"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          data-testid="searchBtn"
          className="w-40 text-lg border border-red-500 border-l-0 h-10 focus:outline-none bg-red-400 transition ease-in-out duration-500  hover:bg-red-600 "
          onClick={() => {
            const data = filterData(inputValue, allRestaurantMenu);
            setRestaurantMenu(data);
          }}
        >
          search
        </button>
      </div>

      <div
        data-testid="restaurant-list"
        className="relative p-20 flex flex-wrap justify-evenly gap-x-2"
      >
        <h1 className="absolute top-0 text-center m-2 text-5xl text-red-600 font-bold">
          All Restaurants
        </h1>

        {restaurantMenu.length === 0 ? (
          <Shimmer />
        ) : (
          restaurantMenu.map((ele) => {
            return (
              <Link to={"/restaurant/" + ele.info.id} key={ele.info.id}>
                <RestrauntCard {...ele.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
export default Body;
