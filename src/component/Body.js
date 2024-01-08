import { useState } from "react";
import { restaurantList } from "../config";
import RestrauntCard from "./RestrauntCard";

const Body = () => {
  const [inputValue, setInputValue] = useState("");
  const [restaurantMenu, setRestaurantMenu] = useState(restaurantList);

  function filterData(inputData, MenuList) {
    if (inputData == "") {
      return restaurantList;
    }
    const filterData = MenuList.filter((menuItem) => {
      if (menuItem.info.name.includes(inputData)) {
        return menuItem;
      }
    });
    return filterData;
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="search"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = filterData(inputValue, restaurantMenu);
            setRestaurantMenu(data);
          }}
        >
          search
        </button>
      </div>

      <div className="restraunt-container">
        {restaurantMenu.map((ele) => {
          return <RestrauntCard {...ele.info} key={ele.info.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
