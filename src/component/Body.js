import { useEffect, useState } from "react";
import { restaurantList } from "../config";
import RestrauntCard from "./RestrauntCard";

const Body = () => {
  const [inputValue, setInputValue] = useState("");
  const [restaurantMenu, setRestaurantMenu] = useState(restaurantList);

  async function getRestaurant() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING`
    );
    const jsonData = await data.json();
    console.log(jsonData);
    setRestaurantMenu(
      jsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
  useEffect(() => {
    getRestaurant();
  }, []);

  function filterData(inputData, MenuList) {
    if (inputData == "") {
      return restaurantList;
    }
    const filterData = MenuList.filter((menuItem) => {
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
            const data = filterData(inputValue, restaurantList);
            setRestaurantMenu(data);
          }}
        >
          search
        </button>
      </div>

      <div className="restraunt-container">
        <h1 className="heading">MenuList</h1>
        {restaurantMenu.map((ele) => {
          return <RestrauntCard {...ele.info} key={ele.info.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
