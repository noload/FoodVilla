import { baseURL } from "../config";

const RestrauntCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <>
      <div className="rounded-3xl w-64 h-80 overflow-hidden my-4 flex justify-center flex-col p-5 shadow-2xl  transition:transform ease-out hover:scale-110 duration-500">
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
