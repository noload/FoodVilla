import { useParams } from "react-router-dom";
import { baseURL } from "../config";
import useRestaurant from "../utils/useRestraunt";

import useMenuItems from "../utils/useMenuItems";
import { Shimmer } from "./Shimmer";
import MenuCard from "./MenuCard";

const RestraMenu = () => {
  const { id } = useParams();

  const { cloudinaryImageId, name, avgRating, city } = (data =
    useRestaurant(id));

  const menuItems = useMenuItems(id);

  return (
    <>
      <div key={1} className="flex flex-col w-full h-auto py-20 px-3 gap-12">
        <div
          key={3893}
          className="flex w-full h-auto p-5  shadow-2xl justify-center rounded-2xl"
        >
          <img
            className="w-2/4 h-64 rounded-lg mx-auto"
            src={baseURL + cloudinaryImageId}
          />
          <div className="flex flex-col p mx-auto h-2/3">
            <h1 className="text-red-500 text-center text-3xl font-bold my-2">
              Restaurant Details
            </h1>
            <h2 className="text-lg p-1 text-red-300">RestaurantId : {id}</h2>
            <h2 className="text-lg p-1 text-red-300">Name : {name}</h2>
            <h2 className="text-lg p-1 text-red-300">
              Rating :{avgRating} stars
            </h2>
            <h2 className="text-lg p-1 text-red-300">Address : {city}</h2>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-4 w-full h-auto shadow-2xl justify-start rounded-2xl">
          <div className=" flex w-full justify-between border flex-col border-red-300">
            <h2 className="text-red-500 text-center text-2xl font-bold">
              Menu Items
            </h2>
            <ul className="flex flex-wrap justify-around">
              {menuItems.map((item) => {
                const itemsCard = item.card.card.itemCards;
                if (itemsCard) {
                  return itemsCard.map((info) => {
                    const information = info.card.info;
                    return (
                      <li className="w-50 h-28 m-1 p-1" key={information.id}>
                        <MenuCard info={information} />
                      </li>
                    );
                  });
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestraMenu;
