import { useParams } from "react-router-dom";
import { baseURL } from "../config";
import useRestaurant from "../utils/useRestraunt";

const RestraMenu = () => {
  const { id } = useParams();

  const data = useRestaurant(id);

  return (
    <>
      <div className="flex w-11/12 h-[60vh] py-20 px-3 m-auto gap-12">
        <div className="w-5/12 h-80 p-6  shadow-2xl justify-center rounded-2xl">
          <img
            className="w-full h-full"
            src={baseURL + data.cloudinaryImageId}
          />
        </div>
        <div className="flex flex-col p-7 w-5/12  gap-5 h-80 shadow-2xl justify-center rounded-2xl">
          <h1>Restaurant Details</h1>
          <h2>RestaurantId : {data.id}</h2>
          <h2>Name : {data.name}</h2>

          <h2>Rating :{data.avgRating} stars</h2>
          <h2>Address : {data.city}</h2>
          <div className="div-btn">
            <button className="w-1/3  p-1 px-6 margin-2 rounded-lg  bg-red-500 transition ease-in-out hover:bg-red-600 hover:rounded-none  duration-300">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestraMenu;
