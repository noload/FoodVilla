import { baseURL } from "../config";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

/**
 *
 */

const MenuCard = ({ info }) => {
  const dispatch = useDispatch();
  let length = 20;
  const handleAddItem = () => {
    dispatch(addItem());
  };
  let { id, name, category, imageId } = info;
  return (
    <>
      <div className="flex p-1 my-1 items-center border w-full h-full  border-red-500 rounded-lg">
        {baseURL + imageId ? (
          <img
            className="w-16 h-16 p-1 rounded-lg mx-2"
            src={baseURL + imageId}
          />
        ) : (
          <img
            className="w-16 h-16 p-1 rounded-lg mx-2"
            src={baseURL + "0b5ef44f3f3615933d65618b8ca15113"}
          />
        )}

        <div>
          <h1>Id : {id}</h1>
          <h1>Name : {(name = name.substring(0, 20))}</h1>
          <h1>category : {(category = category.substring(0, 20))}</h1>
        </div>
        <button
          className="w-12 h-12 text-4xl rounded-full flex justify-center mx-1 bg-red-500 transition ease-in-out hover:bg-red-600  duration-300"
          onClick={() => handleAddItem(info)}
        >
          +
        </button>
      </div>
    </>
  );
};

export default MenuCard;
