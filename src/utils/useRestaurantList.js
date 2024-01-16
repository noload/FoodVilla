import { useEffect, useState } from "react";
import { restaurantList } from "../config";

const useRestaurantList = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [allRestaurantMenu, setAllRestaurantMenu] = useState([]);

  async function getRestaurant() {
    const data = await fetch(restaurantList);
    const jsonData = await data.json();

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

  return [restaurantMenu, allRestaurantMenu, setRestaurantMenu];
};

export default useRestaurantList;
