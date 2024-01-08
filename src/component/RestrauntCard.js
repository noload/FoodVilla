import { baseURL } from "../config";

const RestrauntCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <>
      <a
        href="/"
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        <div className="card">
          <img src={baseURL + cloudinaryImageId} />
          <h2>{name}</h2>
          <h3>{cuisines.join(", ")} </h3>
          <h4>{avgRating} stars</h4>
        </div>
      </a>
    </>
  );
};

export default RestrauntCard;
