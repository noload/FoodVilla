import { useEffect, useState } from "react";
import { restaurantList } from "../config";
import RestrauntCard from "./RestrauntCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [inputValue, setInputValue] = useState("");
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [allRestaurantMenu, setAllRestaurantMenu] = useState([]);
  async function getRestaurant() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING`
    );
    const jsonData = await data.json();
    console.log(jsonData);
    setRestaurantMenu(
      jsonData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setAllRestaurantMenu(
      jsonData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
  useEffect(() => {
    getRestaurant();
  }, []);

  function filterData(inputData, allRestaurantMenu) {
    if (inputData == "") {
      return allRestaurantMenu;
    }
    const filterData = allRestaurantMenu.filter((menuItem) => {
      if (menuItem.info.name.toUpperCase().includes(inputData.toUpperCase())) {
        return menuItem;
      }
    });

    return filterData;
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
