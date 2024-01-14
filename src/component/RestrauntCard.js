import { baseURL } from "../config";

const RestrauntCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <>
      <div className="rounded-xl w-60 flex justify-center flex-col p-5 shadow-2xl ">
        <img
          className="w-full h-56 rounded-xl"
          src={baseURL + cloudinaryImageId}
        />
        <h2 className="text-lg font-bold my-3">{name}</h2>
        <h3>{cuisines.join(", ")} </h3>
        <h4>{avgRating} stars</h4>
      </div>
    </>
  );
};

export default RestrauntCard;
