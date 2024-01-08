import { baseURL } from "../config";

const RestrauntCard = ({
  areaName,
  cuisines,
  avgRating,
  cloudinaryImageId,
}) => {
  return (
    <>
      <div className="card">
        <img src={baseURL + cloudinaryImageId} />
        <h2>{areaName}</h2>
        <h3>{cuisines.join(", ")} </h3>
        <h4>{avgRating} stars</h4>
      </div>
    </>
  );
};

export default RestrauntCard;
