import { useEffect, useState } from "react";
import { Menu_detail_Api } from "../config";

const useMenuItems = (resId) => {
  const [menuItem, setMenuItem] = useState([]);

  async function getMenuDetails() {
    const RestaurantInfoURL = `${Menu_detail_Api}restaurantId=${resId}`;
    const data = await fetch(RestaurantInfoURL);
    const jsonData = await data.json();
    const menuItems =
      jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;

    setMenuItem(menuItems);
  }

  useEffect(() => {
    getMenuDetails();
  }, []);

  return menuItem;
};

export default useMenuItems;
