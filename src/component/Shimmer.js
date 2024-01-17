import RestrauntCard from "./RestrauntCard";

export const Shimmer = () => {
  let num = 10;
  return (
    <>
      <div
        className="flex flex-wrap w-screen gap-5 justify-between h-screen"
        data-testid="shimmer"
      >
        {Array(20)
          .fill("")
          .map((ele, index) => {
            return (
              <div
                key={index}
                className="rounded-3xl w-64 h-80 bg-gray-100 my-4 flex justify-center flex-wrap p-5 shadow-2xl  transition:transform ease-out hover:scale-110 duration-500"
              >
                <div className="w-full h-56 rounded-xl bg-gray-200 my-3"></div>
                <div className="w-full h-4 bg-gray-200"></div>
              </div>
            );
          })}
      </div>
    </>
  );
};
