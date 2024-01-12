
import { useParams } from "react-router-dom";
import { baseURL } from "../config";
import useRestaurant from "../utils/useRestraunt";

const RestraMenu = () => {
  const { id } = useParams();

  const data = useRestaurant(id);

  return (
    <>
      <div className="menu-card">
        <div className="img-div">
          <img src={baseURL + data.cloudinaryImageId} />
        </div>
        <div className="info-div">
          <h1>Restaurant Details</h1>
          <h2>RestaurantId : {data.id}</h2>
          <h2>Name : {data.name}</h2>

          <h2>Rating :{data.avgRating} stars</h2>
          <h2>Address : {data.city}</h2>
          <div className="div-btn">
            <button className="btn order-btn">Order Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestraMenu;
