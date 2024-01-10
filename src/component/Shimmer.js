import RestrauntCard from "./RestrauntCard";

export const Shimmer = () => {
  let num = 10;
  return (
    <>
      {Array(20)
        .fill("")
        .map((ele, index) => {
          return (
            <div key={index} className="card">
              <div className="divImg"></div>
              <div className="divTitle"></div>
            </div>
          );
        })}
    </>
  );
};
