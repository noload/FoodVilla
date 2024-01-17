import { useDispatch } from "react-redux";
import { baseURL } from "../config";
import { removeItem } from "../utils/cartSlice";

const MenuInfoCart = ({ id, name, category, imageId, price, description }) => {
  const dispatch = useDispatch();

  const handleRemoveCart = (menuId) => {
    dispatch(removeItem(menuId));
  };

  return (
    <>
      <div className="rounded-3xl w-80 h-auto  overflow-hidden my-2 flex justify-center flex-col p-5 shadow-2xl  hover:scale-105 transition:all  ease-out duration-700">
        <img className="w-full h-50 rounded-xl" src={baseURL + imageId} />
        <h2>MenuId : {id}</h2>
        <h2 className="text-lg font-bold my-1">{name}</h2>
        <h3>Category : {category} </h3>
        <h4>Prize {price}</h4>
        <h1>Description : {(description = description.substring(0, 80))}</h1>
        <button
          className="w-4/6 h-auto px-5 py-2 my-5 mx-auto bg-red-400 rounded-full transition ease-out hover:bg-red-600 duration-300"
          onClick={() => {
            handleRemoveCart(id);
          }}
        >
          remove
        </button>
      </div>
    </>
  );
};

export default MenuInfoCart;

/**
 * ​
badgesV2: Object {  }
​​​
<prototype>: Object { … }
​​
category: "RICE BOWLZ"
​​
description: "Aromatic Poprcorn Chicken rice bowl mixed with spicy gravy [serves 1]"
​​
id: "129529356"
​​
imageId: "9e57b3b9478a4a0b114b8ba4e1b5be89"
​​
inStock: 1
​​
itemAttribute: Object { vegClassifier: "NONVEG" }
​​
itemBadge: Object {  }
​​
name: "Popcorn Chicken Rice Bowlz"
​​
offerTags: Array [ {…} ]
​​
price: 22952
​​
ratings: Object { aggregatedRating: {} }
​​
ribbon: Object {  }
​​
type: "ITEM"
​​
variants: Object {  }
 */
