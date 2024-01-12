import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import { restaurantList } from "../config";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [inputValue, setInputValue] = useState("");
  const [restaurantMenu, allRestaurantMenu] = useRestaurantList();

  const offline = false;
  if (offline) {
    return <h1> Check Your Internet Connection</h1>;
  }
  
  return (
    <>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="search"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = filterData(inputValue, allRestaurantMenu);
            setRestaurantMenu(data);
          }}
        >
          search
        </button>
      </div>

      <div className="restraunt-container">
        <h1 className="heading">MenuList</h1>

        {restaurantMenu.length === 0 ? (
          <Shimmer />
        ) : (
          restaurantMenu.map((ele) => {
            return (
              <Link to={"/restaurant/" + ele.info.id} key={ele.info.id}>
                <RestrauntCard {...ele.info} />;
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
export default Body;
