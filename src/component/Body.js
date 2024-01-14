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
    return <h1> 🔴 You are disconnected </h1>;
  }
  return (
    <>
      <div className="bg-red-200 py-8 flex justify-center ">
        <input
          className=" w-1/2 h-10 block px-3 py-2 bg-white border border-slate-300 text-lg shadow-sm placeholder-slate-400
          focus:outline-none focus:border-red-500 
      
        "
          type="text"
          placeholder="search"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          className="	border w-40 text-lg border-red-400 h-10 rounded-r-lg hover:bg-red-400 active:bg-red-400 focus:outline-none focus:ring focus:ring-red-300"
          onClick={() => {
            const data = filterData(inputValue, allRestaurantMenu);
            setRestaurantMenu(data);
          }}
        >
          search
        </button>
      </div>

      <div className="relative p-20 flex flex-wrap justify-evenly gap-x-2">
        <h1 className="absolute top-0 left-1/2 text-5xl text-red-600 font-bold">
          MenuList
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
