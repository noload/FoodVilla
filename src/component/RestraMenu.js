import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../config";

const RestraMenu = () => {
  const { id } = useParams();

  const [data, setData] = useState({});

  async function getMenuDetails() {
    const RestaurantInfoURL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${id}`;
    const data = await fetch(RestaurantInfoURL);
    const jsonData = await data.json();

    console.log(jsonData.data);
    setData(jsonData.data?.cards[0]?.card?.card?.info);
  }

  useEffect(() => {
    getMenuDetails();
  }, []);

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
