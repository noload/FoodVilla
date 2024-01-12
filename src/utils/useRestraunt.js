import { useEffect, useState } from "react";
import { Menu_detail_Api } from "../config";

const useRestaurant = (resId) => {
  const [data, setData] = useState({});

  async function getMenuDetails() {
    const RestaurantInfoURL = `${Menu_detail_Api}restaurantId=${resId}`;
    const data = await fetch(RestaurantInfoURL);
    const jsonData = await data.json();

    console.log(jsonData.data);
    setData(jsonData.data?.cards[0]?.card?.card?.info);
  }

  useEffect(() => {
    getMenuDetails();
  }, []);

  return data;
};

export default useRestaurant;
