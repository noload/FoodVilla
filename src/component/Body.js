import { restaurantList } from "../config";
import RestrauntCard from "./RestrauntCard";

const Body = () => {
  return (
    <div className="restraunt-container">
      {restaurantList.map((ele) => {
        return <RestrauntCard {...ele.info} key={ele.info.id} />;
      })}
    </div>
  );
};

export default Body;
