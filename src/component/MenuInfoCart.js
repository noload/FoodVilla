import { baseURL } from "../config";

const MenuInfoCart = ({ id, name, category, imageId }) => {
  return (
    <>
      <div className="rounded-3xl w-64 h-auto overflow-hidden my-4 flex justify-center flex-col p-5 shadow-2xl  hover:scale-110 transition:all  ease-out duration-700">
        <img className="w-full h-56 rounded-xl" src={baseURL + imageId} />
        <h2>MenuId : {id}</h2>
        <h2 className="text-lg font-bold my-3">{name}</h2>
        <h3>category : {category} </h3>
        <h4></h4>
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
